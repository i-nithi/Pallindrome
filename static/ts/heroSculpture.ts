/* ==========================================================================
   PALINDROME LABS — Hero Visual Engine
   Liquid Ether (Primary 80–90%) + Subtle Plasma Waves (Secondary 10–20%)
   Atmospheric Particles & Damped Viscous Cursor Dynamics
   ========================================================================== */

import * as THREE from "three";

export interface HeroSculptureController {
  /** Reveal progress from 0 (video handoff / unlit) to 1 (full materialization). */
  setReveal(value: number): void;
  /** Scroll exit progress from 0 (at top) to 1 (leaving hero viewport). */
  setScrollProgress(value: number): void;
  /** Render a single immediate frame (used when reduced-motion is enabled). */
  renderOnce(): void;
  /** Dispose GPU resources and listeners. */
  dispose(): void;
}

export interface HeroSculptureOptions {
  reducedMotion?: boolean;
  onFallback?: () => void;
}

// --- Liquid Ether & Plasma Waves Vertex Shader ---
const QUAD_VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// --- Liquid Ether & Plasma Waves Fragment Shader ---
const LIQUID_ETHER_FRAGMENT_SHADER = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uReveal;
uniform float uScroll;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerVelocity;
uniform float uIsMobile;

varying vec2 vUv;

// 2D Simplex Noise Implementation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,
                      0.366025403784439,
                     -0.577350269189626,
                      0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// 5-Octave Fractional Brownian Motion with rotation
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    v += a * snoise(p);
    p = rot * p * 2.02;
    a *= 0.49;
  }
  return v;
}

// Multi-scale iterated domain warping: produces organic, living fluid flows
vec3 fluidField(vec2 p, vec2 swirl, float t) {
  // Layer 1: Primary advection field q with viscous swirl
  vec2 q = vec2(
    fbm(p * 1.35 + vec2(0.0, -t * 0.07) + swirl * 0.5),
    fbm(p * 1.35 + vec2(5.2, 1.3) + vec2(t * 0.06, t * 0.04) + swirl * 0.5)
  );

  // Layer 2: Secondary warped advection field r
  vec2 r = vec2(
    fbm(p * 1.75 + 2.7 * q + vec2(1.7, 9.2) + vec2(t * 0.09, -t * 0.06)),
    fbm(p * 1.75 + 2.7 * q + vec2(8.3, 2.8) + vec2(-t * 0.07, t * 0.08))
  );

  // Layer 3: Tertiary height & density field
  float h = fbm(p * 2.1 + 3.1 * r + vec2(0.0, t * 0.05));
  return vec3(h, q.x, r.y);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;

  // Adaptive composition: Desktop centers around (0.70, 0.50), Mobile centers around (0.50, 0.62)
  vec2 focalCenter = mix(vec2(0.70, 0.50), vec2(0.50, 0.30), uIsMobile);
  vec2 p = (uv - focalCenter) * vec2(aspect, 1.0);

  // Cursor swirl in coordinate space
  vec2 pointerP = (uPointer - focalCenter) * vec2(aspect, 1.0);
  vec2 pointerDelta = p - pointerP;
  float pointerDist = length(pointerDelta);
  float pointerInfluence = smoothstep(0.70, 0.0, pointerDist);
  vec2 swirl = vec2(-pointerDelta.y, pointerDelta.x) * (pointerInfluence * (uPointerVelocity * 0.75 + 0.12) * 0.38);

  float t = uTime;

  // Compute central fluid heightfield
  vec3 field = fluidField(p, swirl, t);
  float f = field.x;
  float qx = field.y;
  float ry = field.z;

  // Approximate normal via finite differences for specular & fresnel
  float eps = 0.008;
  float fx = fluidField(p + vec2(eps, 0.0), swirl, t).x;
  float fy = fluidField(p + vec2(0.0, eps), swirl, t).x;
  vec3 normal = normalize(vec3(-(fx - f) / eps * 0.32, -(fy - f) / eps * 0.32, 1.0));

  // Fresnel & Specular Sheen (expensive liquid silk sheen)
  vec3 viewDir = vec3(0.0, 0.0, 1.0);
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  vec3 lightDir = normalize(vec3(0.35, 0.55, 0.75));
  vec3 halfV = normalize(lightDir + viewDir);
  float specular = pow(max(dot(normal, halfV), 0.0), 22.0);

  // --- Pallindrome Luxury Studio Palette ---
  vec3 cObsidian = vec3(0.020, 0.020, 0.027); // #050507 base
  vec3 cDeepPurple = vec3(0.18, 0.03, 0.29);  // #2e084a
  vec3 cRoyalViolet = vec3(0.32, 0.06, 0.50); // #520f80
  vec3 cMagenta = vec3(0.82, 0.12, 0.72);     // #d11fb8
  vec3 cCyan = vec3(0.00, 0.90, 1.00);        // #00e6ff
  vec3 cBlue = vec3(0.10, 0.28, 0.78);        // #1a47c7
  vec3 cGold = vec3(0.96, 0.65, 0.06);        // #f5a610 (brand period accent)

  // Fluid density normalization with non-linear luxury thresholding
  float fNorm = clamp((f + 0.48) * 0.95, 0.0, 1.0);
  float qNorm = clamp(qx + 0.5, 0.0, 1.0);
  float rNorm = clamp(ry + 0.5, 0.0, 1.0);

  // 1. Base dark ether: transition from pure obsidian into deep royal purple
  vec3 ether = mix(cObsidian, cDeepPurple, smoothstep(0.18, 0.42, fNorm));

  // 2. Midtones: rich royal violet & deep blue eddy currents
  ether = mix(ether, cRoyalViolet, smoothstep(0.36, 0.62, fNorm) * 0.88);
  ether = mix(ether, cBlue, smoothstep(0.44, 0.68, rNorm) * 0.70);

  // 3. Vibrant highlights: magenta folds & electric cyan ridges
  float magentaWeight = smoothstep(0.46, 0.76, fNorm * 0.65 + qNorm * 0.45);
  ether = mix(ether, cMagenta, magentaWeight * 0.85);

  float cyanWeight = smoothstep(0.68, 0.94, fNorm) * (0.70 + 0.30 * sin(t * 0.45 + ry * 3.0));
  ether = mix(ether, cCyan, cyanWeight * 0.90);

  // 4. Subtle gold warmth on highest intensity convergence points
  float goldCrest = smoothstep(0.82, 0.98, fNorm * (0.6 + 0.4 * specular));
  ether += cGold * (goldCrest * 0.28);

  // 5. Specular sheen & Fresnel highlights (expensive liquid glass / silk luster)
  ether += cCyan * (specular * 0.36);
  ether += cMagenta * (specular * 0.18);
  ether += mix(cRoyalViolet, cCyan, fresnel) * (fresnel * 0.32);

  // --- Secondary Effect: Subtle Plasma Waves (10-20% accent) ---
  vec2 pwP = p * 1.50 + vec2(qx, ry) * 0.70;
  float wave1 = sin(pwP.x * 3.8 + pwP.y * 2.2 + t * 0.65 + qx * 1.3);
  float wave2 = cos(pwP.x * 2.8 - pwP.y * 3.2 - t * 0.50 + ry * 1.3);
  float wave3 = sin((pwP.x + pwP.y) * 4.2 + t * 0.80 + f * 2.2);

  // Ultra-fine harmonic filaments (interference)
  float filament = 0.010 / (abs(sin(wave1 * 1.30 + wave2 * 1.10) * 1.60 + wave3 * 0.50) + 0.018);
  filament = clamp(filament, 0.0, 1.0);

  // Plasma wave accent restricted to fluid body on the right side
  float plasmaBody = smoothstep(0.28, 0.72, fNorm) * smoothstep(0.35, 0.70, uv.x);
  vec3 plasmaColor = mix(cCyan, cMagenta, sin(t * 0.50 + pwP.y * 2.0) * 0.5 + 0.5);
  ether += plasmaColor * (filament * plasmaBody * 0.16 * (0.80 + 0.20 * sin(t * 1.0 + wave1)));

  // --- Spatial Composition & Negative Space ---
  // Core center: desktop (0.70, 0.50), mobile (0.50, 0.62)
  float rightFocus = mix(smoothstep(0.34, 0.62, uv.x), 1.0, uIsMobile);

  // Organic boundary modulated by subtle low-frequency noise
  float organicEdge = snoise(p * 0.75 + vec2(t * 0.04, -t * 0.03)) * 0.12;
  float distCenter = length((uv - focalCenter) * mix(vec2(1.15, 1.45), vec2(1.10, 1.25), uIsMobile)) + organicEdge;
  float spatialFalloff = smoothstep(1.15, 0.25, distCenter);

  // Top text protection on mobile (uv.y > 0.55 is where headline sits on mobile)
  float topSafeguard = mix(1.0, smoothstep(0.65, 0.38, uv.y), uIsMobile);

  // Clean darkness for left headline on desktop and top headline on mobile
  float spatialMask = mix(0.015, 1.0, rightFocus * spatialFalloff * topSafeguard);

  // Screen border feathering so there are zero hard cuts
  float edgeFeather = smoothstep(0.0, 0.06, uv.y) * smoothstep(1.0, 0.94, uv.y);
  edgeFeather *= smoothstep(1.0, 0.96, uv.x);

  // Scroll exit displacement and fade
  float scrollFade = clamp(1.0 - uScroll * 1.25, 0.0, 1.0);

  vec3 finalColor = ether * (spatialMask * edgeFeather * uReveal * scrollFade);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

// --- Atmospheric Particles & Left-Side Liquid Residue Shaders ---
const PARTICLES_VERTEX_SHADER = /* glsl */ `
uniform float uTime;
uniform float uReveal;
uniform float uScroll;
uniform vec2 uPointer;
uniform float uPixelRatio;
uniform float uIsMobile;

attribute vec3 aColor;
attribute float aSize;
attribute float aPhase;
attribute vec3 aVelocity;
attribute float aKind;   // 0.0 = tiny dot, 1.0 = soft micro-orb, 2.0 = liquid droplet
attribute float aDepth;  // 0.25 (far) .. 1.0 (near)
attribute float aAngle;

varying vec3 vColor;
varying float vAlpha;
varying float vKind;
varying float vAngle;
varying float vPhase;

void main() {
  vColor = aColor;
  vKind = aKind;
  vAngle = aAngle + sin(uTime * 0.14 + aPhase) * 0.25;
  vPhase = aPhase;

  vec3 pos = position;

  // On mobile, redistribute upper-left & bridge particles across the upper dark canvas
  if (uIsMobile > 0.5 && aDepth > 0.0) {
    if (pos.x < -0.15 && pos.y < 0.35 && pos.y > -0.35) {
      pos.y += 0.58;
    }
  }

  // Weightless multi-frequency drift (avoid obvious linear loops)
  float t = uTime;
  float driftScale = mix(0.035, 0.068, aDepth);
  pos.x += sin(t * 0.16 + aPhase) * driftScale + cos(t * 0.09 + aPhase * 1.7) * (driftScale * 0.5);
  pos.y += cos(t * 0.13 + aPhase * 1.35) * driftScale + sin(t * 0.07 + aPhase * 2.1) * (driftScale * 0.45);
  pos.x += sin(aVelocity.x * t * 0.9 + aPhase) * 0.04;
  pos.y += cos(aVelocity.y * t * 0.9 + aPhase * 1.2) * 0.04;

  // Delicate depth-layered cursor parallax & slight repulsion near cursor
  vec2 pointerDelta = pos.xy - uPointer;
  float pDist = length(pointerDelta);
  float cursorPush = smoothstep(0.45, 0.0, pDist) * 0.035 * aDepth;
  pos.xy += normalize(pointerDelta + 1e-4) * cursorPush;
  pos.xy += uPointer * (0.028 * aDepth);

  // Smooth scroll exit
  pos.y -= uScroll * (0.28 + 0.18 * aDepth);

  // Keep the core directly behind "We build / beyond / ordinary." quiet on desktop
  float headlineQuiet = 1.0;
  if (uIsMobile < 0.5) {
    vec2 hDist = (pos.xy - vec2(-0.58, 0.08)) / vec2(0.30, 0.32);
    headlineQuiet = smoothstep(0.55, 1.35, length(hDist)) * 0.82 + 0.18;
  } else {
    vec2 mDist = (pos.xy - vec2(-0.08, -0.04)) / vec2(0.75, 0.28);
    headlineQuiet = smoothstep(0.55, 1.30, length(mDist)) * 0.85 + 0.15;
  }

  // Compensate on desktop left side for CSS .hero__vignette darkening (78% -> 0%)
  float vignetteComp = uIsMobile < 0.5
    ? mix(3.15, 1.0, smoothstep(-0.98, 0.36, pos.x))
    : 1.05;

  // Very gentle opacity breathing
  float pulse = 0.72 + 0.28 * sin(t * 0.48 + aPhase * 3.1415);
  float baseAlpha = aKind < 0.5 ? 0.65 : (aKind < 1.5 ? 0.46 : 0.72);
  vAlpha = pulse * baseAlpha * headlineQuiet * vignetteComp * uReveal * clamp(1.0 - uScroll * 1.4, 0.0, 1.0);

  gl_Position = vec4(pos, 1.0);
  gl_PointSize = aSize * uPixelRatio * (0.90 + 0.10 * pulse);
}
`;

// --- Atmospheric Particles Fragment Shader ---
const PARTICLES_FRAGMENT_SHADER = /* glsl */ `
precision highp float;

varying vec3 vColor;
varying float vAlpha;
varying float vKind;
varying float vAngle;
varying float vPhase;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);

  if (vKind < 0.5) {
    // 0: Tiny glowing dot
    float dist = length(coord);
    if (dist > 0.5) discard;
    float glow = pow(smoothstep(0.5, 0.04, dist), 1.9);
    gl_FragColor = vec4(vColor * 1.25, glow * vAlpha);
  } else if (vKind < 1.5) {
    // 1: Soft blurred micro-orb (Gaussian-like radial mist)
    float dist = length(coord);
    if (dist > 0.5) discard;
    float radial = smoothstep(0.5, 0.0, dist);
    float orb = exp(-dist * dist * 16.0) * radial;
    gl_FragColor = vec4(vColor * 1.15, orb * vAlpha);
  } else {
    // 2: Liquid-like tiny droplet with subtle off-center specular crescent
    float ca = cos(vAngle);
    float sa = sin(vAngle);
    vec2 rot = vec2(coord.x * ca - coord.y * sa, coord.x * sa + coord.y * ca);
    // Subtle organic teardrop / fluid elongation
    rot.x *= 1.38;
    rot.y *= 0.92 + 0.18 * rot.x;

    float dist = length(rot);
    if (dist > 0.46) discard;

    float body = smoothstep(0.46, 0.16, dist);
    float rim = smoothstep(0.44, 0.24, dist) - smoothstep(0.24, 0.05, dist);
    // Specular liquid glint offset toward upper-right
    float glint = exp(-dot(rot - vec2(0.11, 0.11), rot - vec2(0.11, 0.11)) * 65.0);

    vec3 dropColor = mix(vColor * 0.95, vec3(0.85, 0.96, 1.0), glint * 0.72 + rim * 0.22);
    float alpha = (body * 0.78 + glint * 0.45) * vAlpha;
    gl_FragColor = vec4(dropColor, alpha);
  }
}
`;

/**
 * Creates the unified atmospheric particle, soft micro-orb, and liquid droplet field:
 * - Sparse ambient background specks across the scene
 * - Curated upper-left, CTA/supporting-copy, and bridge residual fluid elements
 *   connecting the left typography zone to the right Liquid Ether visual.
 */
function createAtmosphericParticles(): {
  points: THREE.Points;
  uniforms: {
    uTime: { value: number };
    uReveal: { value: number };
    uScroll: { value: number };
    uPointer: { value: THREE.Vector2 };
    uPixelRatio: { value: number };
    uIsMobile: { value: number };
  };
  dispose: () => void;
} {
  const ambientCount = 95;
  const leftAtmosphereCount = 72;
  const count = ambientCount + leftAtmosphereCount;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count);
  const velocities = new Float32Array(count * 3);
  const kinds = new Float32Array(count);
  const depths = new Float32Array(count);
  const angles = new Float32Array(count);

  // Strictly Pallindrome palette: deep purple, magenta, cyan, blue-cyan, rare restrained gold
  const cPurple = new THREE.Color(0x8b00ff);
  const cMagenta = new THREE.Color(0xd11fb8);
  const cCyan = new THREE.Color(0x00e6ff);
  const cBlueCyan = new THREE.Color(0x1e66ff);
  const cGold = new THREE.Color(0xf5a610);

  const pickColor = (goldChance: number): THREE.Color => {
    const r = Math.random();
    if (r < goldChance) return cGold;
    if (r < goldChance + 0.30) return cCyan;
    if (r < goldChance + 0.58) return cPurple;
    if (r < goldChance + 0.82) return cMagenta;
    return cBlueCyan;
  };

  // 1. General sparse atmospheric specks across the viewport
  for (let i = 0; i < ambientCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 1.92;
    positions[i3 + 1] = (Math.random() - 0.5) * 1.88;
    positions[i3 + 2] = (Math.random() - 0.5) * 0.4;

    const col = pickColor(0.05);
    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;

    kinds[i] = Math.random() < 0.14 ? 1.0 : 0.0;
    depths[i] = 0.25 + Math.random() * 0.55;
    sizes[i] = kinds[i] > 0.5 ? 10.0 + Math.random() * 10.0 : 1.8 + Math.random() * 2.6;
    phases[i] = Math.random() * Math.PI * 2;
    angles[i] = Math.random() * Math.PI * 2;
    velocities[i3] = (Math.random() - 0.5) * 0.04;
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.04;
    velocities[i3 + 2] = 0;
  }

  // 2. Art-directed left-side & bridge fluid residue (dots, blurred micro-orbs, liquid droplets)
  for (let j = 0; j < leftAtmosphereCount; j++) {
    const idx = ambientCount + j;
    const i3 = idx * 3;
    const zoneRoll = Math.random();

    let x = -0.5;
    let y = 0.0;
    if (zoneRoll < 0.28) {
      // Upper-left background (above eyebrow & headline, below navbar)
      x = -0.92 + Math.random() * 0.72;
      y = 0.48 + Math.random() * 0.30;
    } else if (zoneRoll < 0.60) {
      // Supporting copy & CTA region
      x = -0.92 + Math.random() * 0.84;
      y = -0.80 + Math.random() * 0.44;
    } else if (zoneRoll < 0.86) {
      // Bridge zone connecting right-side Liquid Ether to left composition
      x = -0.30 + Math.random() * 0.46;
      y = -0.68 + Math.random() * 1.32;
    } else {
      // Outer central-left margin framing the headline
      x = -0.96 + Math.random() * 0.16;
      y = -0.32 + Math.random() * 0.72;
    }

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = (Math.random() - 0.5) * 0.3;

    const col = pickColor(0.06);
    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;

    const kindRoll = Math.random();
    if (kindRoll < 0.52) {
      // Tiny glowing dot
      kinds[idx] = 0.0;
      sizes[idx] = 2.0 + Math.random() * 2.8;
    } else if (kindRoll < 0.84) {
      // Soft blurred micro-orb
      kinds[idx] = 1.0;
      sizes[idx] = 14.0 + Math.random() * 18.0;
    } else {
      // Subtle liquid-like tiny droplet
      kinds[idx] = 2.0;
      sizes[idx] = 8.5 + Math.random() * 6.5;
    }

    depths[idx] = 0.40 + Math.random() * 0.60;
    phases[idx] = Math.random() * Math.PI * 2;
    angles[idx] = Math.random() * Math.PI * 2;
    velocities[i3] = -0.012 - Math.random() * 0.025; // Gentle residual drift from right ether
    velocities[i3 + 1] = (Math.random() - 0.5) * 0.03;
    velocities[i3 + 2] = 0;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aVelocity", new THREE.BufferAttribute(velocities, 3));
  geometry.setAttribute("aKind", new THREE.BufferAttribute(kinds, 1));
  geometry.setAttribute("aDepth", new THREE.BufferAttribute(depths, 1));
  geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));

  const uniforms = {
    uTime: { value: 0 },
    uReveal: { value: 0 },
    uScroll: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    uIsMobile: { value: 0 },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader: PARTICLES_VERTEX_SHADER,
    fragmentShader: PARTICLES_FRAGMENT_SHADER,
    uniforms,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);

  return {
    points,
    uniforms,
    dispose: () => {
      geometry.dispose();
      material.dispose();
    },
  };
}

/**
 * Initializes the refined Pallindrome Hero visual system:
 * - Primary (80-90%): Liquid Ether living fluid energy field
 * - Secondary (10-20%): Subtle Plasma Waves harmonic energy filaments
 * - Atmospheric particle specks with depth & damped cursor interaction
 */
export function initHeroSculpture(
  canvas: HTMLCanvasElement,
  heroSection: HTMLElement,
  options: HeroSculptureOptions = {}
): HeroSculptureController {
  let renderer: THREE.WebGLRenderer | null = null;

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: false,
    });
  } catch (err) {
    console.warn("[HeroVisual] WebGL context creation failed:", err);
    options.onFallback?.();
    return {
      setReveal: () => {},
      setScrollProgress: () => {},
      renderOnce: () => {},
      dispose: () => {},
    };
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x050507, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
  camera.position.z = 1;

  // Liquid Ether full-screen quad
  const quadGeometry = new THREE.PlaneGeometry(2, 2);
  const etherUniforms = {
    uTime: { value: 0 },
    uReveal: { value: 0 },
    uScroll: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPointer: { value: new THREE.Vector2(0.70, 0.50) },
    uPointerVelocity: { value: 0 },
    uIsMobile: { value: 0 },
  };

  const etherMaterial = new THREE.ShaderMaterial({
    vertexShader: QUAD_VERTEX_SHADER,
    fragmentShader: LIQUID_ETHER_FRAGMENT_SHADER,
    uniforms: etherUniforms,
    depthWrite: false,
  });

  const etherMesh = new THREE.Mesh(quadGeometry, etherMaterial);
  scene.add(etherMesh);

  // Atmospheric Particles
  const particles = createAtmosphericParticles();
  scene.add(particles.points);

  // Clock & loop state
  const clock = new THREE.Clock();
  let rafId = 0;
  let isDisposed = false;
  let isHeroVisible = true;
  let revealProgress = 0;
  let scrollProgress = 0;

  // Mouse interpolation
  let targetPointerX = 0.70;
  let targetPointerY = 0.50;
  let currentPointerX = 0.70;
  let currentPointerY = 0.50;
  let lastPointerX = 0.70;
  let lastPointerY = 0.50;
  let currentVelocity = 0;

  const updateLayout = (): void => {
    if (isDisposed || !renderer) return;
    const width = heroSection.clientWidth || window.innerWidth;
    const height = heroSection.clientHeight || window.innerHeight;
    if (width <= 0 || height <= 0) return;

    renderer.setSize(width, height, false);
    etherUniforms.uResolution.value.set(width, height);
    etherUniforms.uIsMobile.value = width < 768 ? 1.0 : 0.0;
    particles.uniforms.uIsMobile.value = width < 768 ? 1.0 : 0.0;
    particles.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio || 1, 2);
  };

  const renderFrame = (elapsed: number): void => {
    if (!renderer) return;

    // Smoothly interpolate pointer towards target
    currentPointerX += (targetPointerX - currentPointerX) * 0.055;
    currentPointerY += (targetPointerY - currentPointerY) * 0.055;

    // Compute pointer velocity for viscous swirl
    const pDx = currentPointerX - lastPointerX;
    const pDy = currentPointerY - lastPointerY;
    const instantVelocity = Math.sqrt(pDx * pDx + pDy * pDy) * 20.0;
    currentVelocity += (instantVelocity - currentVelocity) * 0.07;
    lastPointerX = currentPointerX;
    lastPointerY = currentPointerY;

    // Update ether uniforms
    etherUniforms.uTime.value = elapsed;
    etherUniforms.uReveal.value = revealProgress;
    etherUniforms.uScroll.value = scrollProgress;
    etherUniforms.uPointer.value.set(currentPointerX, currentPointerY);
    etherUniforms.uPointerVelocity.value = THREE.MathUtils.clamp(currentVelocity, 0, 1.5);

    // Update particle uniforms
    particles.uniforms.uTime.value = elapsed;
    particles.uniforms.uReveal.value = revealProgress;
    particles.uniforms.uScroll.value = scrollProgress;
    // In particle coordinates [-1, 1]
    particles.uniforms.uPointer.value.set(
      (currentPointerX - 0.5) * 2.0,
      (currentPointerY - 0.5) * 2.0
    );

    renderer.render(scene, camera);
  };

  const tick = (): void => {
    if (isDisposed || document.hidden || !isHeroVisible || options.reducedMotion) {
      rafId = 0;
      return;
    }
    renderFrame(clock.getElapsedTime());
    rafId = window.requestAnimationFrame(tick);
  };

  const startLoop = (): void => {
    if (!rafId && !isDisposed && !document.hidden && isHeroVisible && !options.reducedMotion) {
      clock.start();
      rafId = window.requestAnimationFrame(tick);
    }
  };

  const onPointerMove = (event: PointerEvent): void => {
    if (options.reducedMotion) return;
    const rect = heroSection.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Map to normalized UV [0, 1]
    targetPointerX = (event.clientX - rect.left) / rect.width;
    targetPointerY = 1.0 - (event.clientY - rect.top) / rect.height;
  };

  const onPointerLeave = (): void => {
    targetPointerX = heroSection.clientWidth < 768 ? 0.50 : 0.70;
    targetPointerY = heroSection.clientWidth < 768 ? 0.30 : 0.50;
  };

  const onVisibilityChange = (): void => {
    if (document.hidden && rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    } else if (!document.hidden && isHeroVisible) {
      startLoop();
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        isHeroVisible = entry.isIntersecting;
        if (isHeroVisible) {
          startLoop();
        } else if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
      }
    },
    { threshold: 0.02 }
  );

  updateLayout();
  observer.observe(heroSection);
  window.addEventListener("resize", updateLayout, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  heroSection.addEventListener("pointerleave", onPointerLeave, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  if (options.reducedMotion) {
    revealProgress = 1;
    renderFrame(1.4);
  } else {
    startLoop();
  }

  return {
    setReveal(value: number): void {
      revealProgress = THREE.MathUtils.clamp(value, 0, 1);
      if (options.reducedMotion) renderFrame(1.4);
    },
    setScrollProgress(value: number): void {
      scrollProgress = THREE.MathUtils.clamp(value, 0, 1);
      if (options.reducedMotion) renderFrame(1.4);
    },
    renderOnce(): void {
      renderFrame(clock.getElapsedTime());
    },
    dispose(): void {
      isDisposed = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("pointermove", onPointerMove);
      heroSection.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      quadGeometry.dispose();
      etherMaterial.dispose();
      particles.dispose();
      renderer?.dispose();
      renderer = null;
    },
  };
}
