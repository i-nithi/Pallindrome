import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

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

interface RibbonConfig {
  points: THREE.Vector3[];
  colorStart: THREE.Color;
  colorMid: THREE.Color;
  colorEnd: THREE.Color;
  emissiveTint: THREE.Color;
  phaseOffset: number;
  twistTurns: number;
  maxHalfWidth: number;
  maxHalfThickness: number;
}

interface RibbonUniforms {
  uTime: { value: number };
  uReveal: { value: number };
  uPointer: { value: THREE.Vector2 };
  uPhase: { value: number };
}

interface ParticleLayerHandle {
  points: THREE.Points;
  uniforms: {
    uTime: { value: number };
    uReveal: { value: number };
    uPointer: { value: THREE.Vector2 };
    uScroll: { value: number };
    uPixelRatio: { value: number };
  };
  dispose: () => void;
}

/**
 * Procedural dark-studio environment map with sculptural light strips so glossy
 * clearcoat/iridescent surfaces exhibit rich, controlled reflections.
 */
function createStudioEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();

  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x020204);

  const addPanel = (
    color: number,
    intensity: number,
    size: [number, number],
    pos: [number, number, number],
    lookAt: [number, number, number] = [0, 0, 0],
  ): void => {
    const geo = new THREE.PlaneGeometry(size[0], size[1]);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color).multiplyScalar(intensity),
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.lookAt(lookAt[0], lookAt[1], lookAt[2]);
    envScene.add(mesh);
  };

  // High-contrast dark studio softboxes
  addPanel(0xf5f5f7, 4.4, [7.0, 1.1, ], [-3.5, 6.0, 4.2]);
  addPanel(0xf5f5f7, 2.2, [5.0, 0.7], [4.5, -5.2, 3.8]);
  addPanel(0xef00cf, 4.6, [6.0, 2.0], [-6.8, 1.4, 2.2]);
  addPanel(0x8b00ff, 4.0, [5.0, 2.8], [-3.8, -4.8, -2.6]);
  addPanel(0x00d9ff, 4.8, [6.0, 2.0], [6.8, -0.6, 2.4]);
  addPanel(0x1f4bff, 3.6, [4.8, 2.6], [4.0, 4.8, -2.6]);
  addPanel(0xffc900, 2.6, [1.4, 1.4], [0.0, 0.0, -5.2]);

  const rt = pmrem.fromScene(envScene, 0.035);
  envScene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      if (obj.material instanceof THREE.Material) obj.material.dispose();
    }
  });
  pmrem.dispose();
  return rt.texture;
}

/**
 * Build a fluted, double-tapered sculptural ribbon with a subtle center ridge
 * and knife-edge wings using Bishop parallel-transport frames.
 */
function createSculptedRibbonGeometry(cfg: RibbonConfig): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(cfg.points, false, "centripetal", 0.5);
  const lengthSegments = 220;
  const profileSegments = 28;

  const positions: number[] = [];
  const colors: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const centers: THREE.Vector3[] = [];
  const tangents: THREE.Vector3[] = [];
  for (let i = 0; i <= lengthSegments; i++) {
    const t = i / lengthSegments;
    centers.push(curve.getPointAt(t));
    tangents.push(curve.getTangentAt(t).normalize());
  }

  const normals: THREE.Vector3[] = [];
  const binormals: THREE.Vector3[] = [];
  const seed = new THREE.Vector3(0, 0, 1);
  if (Math.abs(tangents[0].dot(seed)) > 0.9) seed.set(1, 0, 0);

  let normal = new THREE.Vector3().crossVectors(tangents[0], seed).normalize();
  let binormal = new THREE.Vector3().crossVectors(tangents[0], normal).normalize();
  normals.push(normal.clone());
  binormals.push(binormal.clone());

  const rotAxis = new THREE.Vector3();
  const q = new THREE.Quaternion();
  for (let i = 1; i <= lengthSegments; i++) {
    rotAxis.crossVectors(tangents[i - 1], tangents[i]);
    if (rotAxis.lengthSq() > 1e-10) {
      rotAxis.normalize();
      const angle = Math.acos(THREE.MathUtils.clamp(tangents[i - 1].dot(tangents[i]), -1, 1));
      q.setFromAxisAngle(rotAxis, angle);
      normal = normal.clone().applyQuaternion(q).normalize();
    }
    binormal = new THREE.Vector3().crossVectors(tangents[i], normal).normalize();
    normals.push(normal);
    binormals.push(binormal);
  }

  const color = new THREE.Color();
  const offset = new THREE.Vector3();

  for (let i = 0; i <= lengthSegments; i++) {
    const t = i / lengthSegments;
    const center = centers[i];

    // Architectural width modulation: broad sculptural arcs tapering cleanly to sharp tips
    const tipTaper = Math.pow(Math.sin(Math.PI * t), 0.88);
    const waistSculpt = 0.78 + 0.24 * Math.sin(Math.PI * t * 3.0);
    const halfWidth = cfg.maxHalfWidth * tipTaper * waistSculpt;
    const halfThick = cfg.maxHalfThickness * Math.pow(Math.sin(Math.PI * t), 0.95);

    const twistAngle = (t - 0.5) * Math.PI * cfg.twistTurns;
    const cosT = Math.cos(twistAngle);
    const sinT = Math.sin(twistAngle);

    const n = normals[i];
    const b = binormals[i];
    const twistedU = new THREE.Vector3()
      .addScaledVector(n, cosT)
      .addScaledVector(b, sinT)
      .normalize();
    const twistedV = new THREE.Vector3()
      .addScaledVector(n, -sinT)
      .addScaledVector(b, cosT)
      .normalize();

    if (t < 0.5) {
      color.copy(cfg.colorStart).lerp(cfg.colorMid, t * 2);
    } else {
      color.copy(cfg.colorMid).lerp(cfg.colorEnd, (t - 0.5) * 2);
    }

    for (let j = 0; j <= profileSegments; j++) {
      const phi = (j / profileSegments) * Math.PI * 2;
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);

      // Fluted diamond-lenticular airfoil profile for crisp dual-edge specular ribbons
      const u = Math.sign(cosP) * Math.pow(Math.abs(cosP), 0.74) * halfWidth;
      const ridge = 1.0 + 0.22 * Math.exp(-Math.pow(cosP * 2.4, 2));
      const camber = 0.18 * (cosP * cosP) * halfThick;
      const v = Math.sign(sinP) * Math.pow(Math.abs(sinP), 1.45) * halfThick * ridge + camber;

      offset
        .copy(center)
        .addScaledVector(twistedU, u)
        .addScaledVector(twistedV, v);

      positions.push(offset.x, offset.y, offset.z);
      colors.push(color.r, color.g, color.b);
      uvs.push(t, j / profileSegments);
    }
  }

  const ringStride = profileSegments + 1;
  for (let i = 0; i < lengthSegments; i++) {
    for (let j = 0; j < profileSegments; j++) {
      const a = i * ringStride + j;
      const b = (i + 1) * ringStride + j;
      const c = (i + 1) * ringStride + (j + 1);
      const d = i * ringStride + (j + 1);
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Glossy dark-anodized / liquid-glass physical material with subtle iridescence,
 * calm breathing vertex wave, and controlled Fresnel rim energy.
 */
function createRibbonMaterial(
  cfg: RibbonConfig,
  envMap: THREE.Texture,
): { material: THREE.MeshPhysicalMaterial; uniforms: RibbonUniforms } {
  const uniforms: RibbonUniforms = {
    uTime: { value: 0 },
    uReveal: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uPhase: { value: cfg.phaseOffset },
  };

  const material = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    metalness: 0.42,
    roughness: 0.11,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    iridescence: 0.96,
    iridescenceIOR: 1.48,
    iridescenceThicknessRange: [190, 580],
    sheen: 0.6,
    sheenRoughness: 0.25,
    sheenColor: cfg.colorEnd,
    envMap,
    envMapIntensity: 1.65,
    emissive: cfg.emissiveTint,
    emissiveIntensity: 0.16,
    transparent: true,
    opacity: 1,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uReveal = uniforms.uReveal;
    shader.uniforms.uPointer = uniforms.uPointer;
    shader.uniforms.uPhase = uniforms.uPhase;

    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uTime;
        uniform float uReveal;
        uniform vec2 uPointer;
        uniform float uPhase;
        varying float vRibbonT;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        vRibbonT = uv.x;
        float envelope = sin(uv.x * 3.14159265);
        float breathe = sin(uv.x * 4.4 - uTime * 0.58 + uPhase) * 0.055;
        float harmonic = cos(uv.x * 2.6 + uTime * 0.36 - uPhase) * 0.032;
        transformed += normal * (breathe + harmonic) * envelope;
        transformed.xy += uPointer * (0.065 * envelope);
        float revealScale = mix(0.72, 1.0, smoothstep(0.0, 1.0, uReveal));
        transformed *= revealScale;`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uTime;
        uniform float uReveal;
        uniform float uPhase;
        varying float vRibbonT;`,
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        float lightWave = 0.5 + 0.5 * sin(vRibbonT * 6.2831 - uTime * 0.72 + uPhase);
        float rimFresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * (rimFresnel * 0.42 + lightWave * 0.09);
        totalEmissiveRadiance *= smoothstep(0.0, 0.85, uReveal);`,
      )
      .replace(
        "#include <dithering_fragment>",
        `#include <dithering_fragment>
        gl_FragColor.a *= smoothstep(0.0, 0.88, uReveal);`,
      );
  };

  material.customProgramCacheKey = () => `pallindrome-artefact-${cfg.phaseOffset}`;

  return { material, uniforms };
}

/**
 * Create the molten-gold center core and orbiting liquid micro-droplets.
 */
function createMoltenGoldCore(envMap: THREE.Texture): {
  group: THREE.Group;
  uniforms: { uTime: { value: number }; uReveal: { value: number } };
  droplets: THREE.Mesh[];
  dispose: () => void;
} {
  const group = new THREE.Group();
  const uniforms = {
    uTime: { value: 0 },
    uReveal: { value: 0 },
  };

  const coreGeo = new THREE.IcosahedronGeometry(0.19, 5);
  const coreMat = new THREE.MeshPhysicalMaterial({
    color: 0xffc900,
    emissive: 0xff9d00,
    emissiveIntensity: 0.48,
    metalness: 0.92,
    roughness: 0.08,
    clearcoat: 1.0,
    clearcoatRoughness: 0.04,
    iridescence: 0.35,
    envMap,
    envMapIntensity: 1.85,
    transparent: true,
    opacity: 1,
  });

  coreMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = uniforms.uTime;
    shader.uniforms.uReveal = uniforms.uReveal;

    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uTime;
        uniform float uReveal;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        float molten =
          sin(position.x * 9.0 + uTime * 1.1) *
          cos(position.y * 8.0 - uTime * 0.85) * 0.014 +
          sin(position.z * 11.0 + uTime * 0.7) * 0.010;
        transformed += normal * molten;
        transformed *= mix(0.25, 1.0, smoothstep(0.08, 0.95, uReveal));`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        uniform float uReveal;`,
      )
      .replace(
        "#include <dithering_fragment>",
        `#include <dithering_fragment>
        gl_FragColor.a *= smoothstep(0.08, 0.92, uReveal);`,
      );
  };
  coreMat.customProgramCacheKey = () => "pallindrome-molten-gold-core";

  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  group.add(coreMesh);

  // Subtle orbiting molten droplet cluster inside the inner aperture
  const dropletGeo = new THREE.SphereGeometry(1, 20, 20);
  const dropletMat = new THREE.MeshPhysicalMaterial({
    color: 0xffd22b,
    emissive: 0xffa600,
    emissiveIntensity: 0.55,
    metalness: 0.88,
    roughness: 0.1,
    clearcoat: 1.0,
    envMap,
    envMapIntensity: 1.7,
    transparent: true,
    opacity: 0,
  });

  const dropletSpecs = [
    { scale: 0.036, orbit: [0.34, 0.24, 0.12] },
    { scale: 0.025, orbit: [-0.30, -0.28, -0.14] },
    { scale: 0.022, orbit: [0.22, -0.36, 0.16] },
    { scale: 0.018, orbit: [-0.26, 0.33, -0.08] },
  ];

  const droplets: THREE.Mesh[] = dropletSpecs.map((spec) => {
    const mesh = new THREE.Mesh(dropletGeo, dropletMat);
    mesh.scale.setScalar(spec.scale);
    mesh.userData.baseOrbit = new THREE.Vector3(spec.orbit[0], spec.orbit[1], spec.orbit[2]);
    group.add(mesh);
    return mesh;
  });

  return {
    group,
    uniforms,
    droplets,
    dispose: () => {
      coreGeo.dispose();
      coreMat.dispose();
      dropletGeo.dispose();
      dropletMat.dispose();
    },
  };
}

/**
 * Subtle studio rim-glow plane behind the sculpture so light spills naturally
 * into the surrounding obsidian darkness without creating a background gradient box.
 */
function createAmbientSpillMesh(): {
  mesh: THREE.Mesh;
  uniforms: { uReveal: { value: number }; uTime: { value: number } };
  dispose: () => void;
} {
  const geometry = new THREE.PlaneGeometry(6.8, 6.8);
  const uniforms = {
    uReveal: { value: 0 },
    uTime: { value: 0 },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uReveal;
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        vec2 centered = vUv - 0.5;
        float dist = length(centered);
        float falloff = exp(-dist * dist * 13.5);

        vec2 pMagenta = centered - vec2(-0.08, 0.05);
        vec2 pCyan = centered - vec2(0.08, -0.05);
        float mWeight = exp(-dot(pMagenta, pMagenta) * 18.0);
        float cWeight = exp(-dot(pCyan, pCyan) * 18.0);

        vec3 purple = vec3(0.545, 0.0, 1.0);
        vec3 magenta = vec3(0.937, 0.0, 0.812);
        vec3 cyan = vec3(0.0, 0.851, 1.0);

        vec3 col = mix(purple, magenta, mWeight) * 0.55 + cyan * cWeight * 0.52;
        float breathe = 0.92 + 0.08 * sin(uTime * 0.45);
        float alpha = falloff * 0.18 * breathe * smoothstep(0.0, 0.9, uReveal);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, -1.6);

  return {
    mesh,
    uniforms,
    dispose: () => {
      geometry.dispose();
      material.dispose();
    },
  };
}

/**
 * Create a single depth-stratified particle layer spanning the full hero field.
 */
function createParticleLayer(config: {
  count: number;
  xSpread: number;
  ySpread: number;
  zMin: number;
  zMax: number;
  sculptureBias: number;
  sculptureCenterX: number;
  sizeMin: number;
  sizeMax: number;
  alphaBase: number;
  driftSpeed: number;
  parallaxStrength: number;
  streakAspect: number;
  goldRatio: number;
  pixelRatio: number;
}): ParticleLayerHandle {
  const { count } = config;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const seeds = new Float32Array(count);

  const cPurple = new THREE.Color(0x8b00ff);
  const cMagenta = new THREE.Color(0xef00cf);
  const cCyan = new THREE.Color(0x00d9ff);
  const cBlue = new THREE.Color(0x2855ff);
  const cGold = new THREE.Color(0xffc900);

  for (let i = 0; i < count; i++) {
    const biased = Math.random() < config.sculptureBias;
    if (biased) {
      // Flow organically around the sculpture zone with radial falloff
      const angle = Math.random() * Math.PI * 2;
      const rad = 0.75 + Math.pow(Math.random(), 0.75) * 2.55;
      positions[i * 3] = config.sculptureCenterX + Math.cos(angle) * rad * 0.85;
      positions[i * 3 + 1] = Math.sin(angle) * rad * 1.15;
    } else {
      // Full-hero atmospheric coverage (avoiding rigid grid uniformity)
      positions[i * 3] = (Math.random() - 0.5) * 2.0 * config.xSpread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.0 * config.ySpread;
    }
    positions[i * 3 + 2] = config.zMin + Math.random() * (config.zMax - config.zMin);

    const roll = Math.random();
    const col =
      roll < config.goldRatio
        ? cGold
        : roll < config.goldRatio + 0.34
          ? cPurple
          : roll < config.goldRatio + 0.62
            ? cMagenta
            : roll < config.goldRatio + 0.88
              ? cCyan
              : cBlue;

    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;

    scales[i] = config.sizeMin + Math.random() * (config.sizeMax - config.sizeMin);
    seeds[i] = Math.random() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

  const uniforms = {
    uTime: { value: 0 },
    uReveal: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uPixelRatio: { value: config.pixelRatio },
    uDriftSpeed: { value: config.driftSpeed },
    uParallax: { value: config.parallaxStrength },
    uAlphaBase: { value: config.alphaBase },
    uStreakAspect: { value: config.streakAspect },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: `
      attribute vec3 aColor;
      attribute float aScale;
      attribute float aSeed;
      uniform float uTime;
      uniform float uReveal;
      uniform vec2 uPointer;
      uniform float uScroll;
      uniform float uPixelRatio;
      uniform float uDriftSpeed;
      uniform float uParallax;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSeed;

      void main() {
        vColor = aColor;
        vSeed = aSeed;
        vec3 pos = position;

        // Slow, fluid deep-space laminar drift
        float t = uTime * uDriftSpeed;
        pos.x += sin(t + aSeed) * 0.24 + cos(t * 0.6 + aSeed * 1.7) * 0.11;
        pos.y += cos(t * 0.85 + aSeed * 1.3) * 0.20 + sin(t * 0.5 + aSeed) * 0.08;
        pos.z += sin(t * 0.45 + aSeed * 2.1) * 0.14;

        // Gentle cursor parallax & scroll exit lift
        pos.xy += uPointer * uParallax;
        pos.y += uScroll * (0.45 + uParallax * 1.6);

        // Subtle intro expansion continuity
        float settle = mix(0.86, 1.0, smoothstep(0.0, 1.0, uReveal));
        pos.xy *= settle;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aScale * 22.0 * uPixelRatio * (1.0 / max(1.6, -mvPosition.z));

        float shimmer = 0.72 + 0.28 * sin(uTime * 0.42 + aSeed * 3.0);
        // Keep left-side editorial text zone calmer on mid/far layers
        float leftCalm = smoothstep(-5.8, -0.5, pos.x) * 0.42 + 0.58;
        vAlpha = smoothstep(0.04, 0.92, uReveal) * shimmer * leftCalm;
      }
    `,
    fragmentShader: `
      uniform float uAlphaBase;
      uniform float uStreakAspect;
      varying vec3 vColor;
      varying float vAlpha;
      varying float vSeed;

      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        // Optional subtle diagonal wisp stretch for foreground accent particles
        float angle = vSeed;
        float ca = cos(angle);
        float sa = sin(angle);
        vec2 rotUv = vec2(uv.x * ca - uv.y * sa, uv.x * sa + uv.y * ca);
        rotUv.x *= uStreakAspect;

        float dist = length(rotUv);
        if (dist > 0.5) discard;
        float radialMask = smoothstep(0.5, 0.0, dist);
        float glow = pow(radialMask, 2.1);
        gl_FragColor = vec4(vColor, glow * vAlpha * uAlphaBase);
      }
    `,
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

export function initHeroSculpture(
  canvas: HTMLCanvasElement,
  heroSection: HTMLElement,
  options: {
    reducedMotion: boolean;
    onFallback: () => void;
  },
): HeroSculptureController | null {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
  } catch {
    options.onFallback();
    return null;
  }

  if (!renderer.getContext()) {
    options.onFallback();
    return null;
  }

  const isMobile = window.innerWidth < 960;
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4;
  const maxDpr = isMobile || lowPower ? 1.5 : 1.75;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, maxDpr);

  renderer.setPixelRatio(pixelRatio);
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 45);
  camera.position.set(0, 0, 7.6);

  const envTexture = createStudioEnvironment(renderer);
  scene.environment = envTexture;

  // ------------------------------------------------------------------------
  // 1. THREE-LAYER FULL-SCENE PARTICLE ATMOSPHERE
  // ------------------------------------------------------------------------
  const particleScale = isMobile || lowPower ? 0.52 : 1.0;
  const particleCenterX = isMobile ? 0.25 : 1.55;

  const farParticles = createParticleLayer({
    count: Math.round(140 * particleScale),
    xSpread: 7.4,
    ySpread: 4.2,
    zMin: -4.8,
    zMax: -1.6,
    sculptureBias: 0.18,
    sculptureCenterX: particleCenterX,
    sizeMin: 0.5,
    sizeMax: 1.0,
    alphaBase: 0.36,
    driftSpeed: 0.055,
    parallaxStrength: 0.06,
    streakAspect: 1.0,
    goldRatio: 0.02,
    pixelRatio,
  });

  const midParticles = createParticleLayer({
    count: Math.round(170 * particleScale),
    xSpread: 6.4,
    ySpread: 3.6,
    zMin: -1.4,
    zMax: 1.1,
    sculptureBias: 0.62,
    sculptureCenterX: particleCenterX,
    sizeMin: 0.75,
    sizeMax: 1.45,
    alphaBase: 0.52,
    driftSpeed: 0.095,
    parallaxStrength: 0.22,
    streakAspect: 1.0,
    goldRatio: 0.05,
    pixelRatio,
  });

  const fgParticles = createParticleLayer({
    count: Math.round(22 * particleScale),
    xSpread: 5.8,
    ySpread: 3.1,
    zMin: 1.2,
    zMax: 2.5,
    sculptureBias: 0.65,
    sculptureCenterX: particleCenterX,
    sizeMin: 1.2,
    sizeMax: 1.95,
    alphaBase: 0.42,
    driftSpeed: 0.12,
    parallaxStrength: 0.40,
    streakAspect: 1.45,
    goldRatio: 0.14,
    pixelRatio,
  });

  scene.add(farParticles.points, midParticles.points, fgParticles.points);

  // ------------------------------------------------------------------------
  // 2. REDESIGNED RIGHT-SIDE HERO SCULPTURE
  // ------------------------------------------------------------------------
  const sculptureGroup = new THREE.Group();
  scene.add(sculptureGroup);

  // Non-intersecting, counter-orbital double-S ribbon A (Deep Purple -> Vivid Magenta)
  const ribbonAConfig: RibbonConfig = {
    points: [
      new THREE.Vector3(0.14, 1.96, -0.32),
      new THREE.Vector3(-0.94, 1.22, 0.32),
      new THREE.Vector3(-1.02, 0.42, 0.52),
      new THREE.Vector3(-0.46, 0.06, 0.44), // Front-left waist cradling molten core
      new THREE.Vector3(0.56, -0.96, 0.18),
      new THREE.Vector3(0.32, -1.68, -0.22),
      new THREE.Vector3(-0.18, -1.98, -0.30),
    ],
    colorStart: new THREE.Color(0x6d00d9),
    colorMid: new THREE.Color(0x8b00ff),
    colorEnd: new THREE.Color(0xef00cf),
    emissiveTint: new THREE.Color(0x3a006e),
    phaseOffset: 0.0,
    twistTurns: 1.45,
    maxHalfWidth: 0.36,
    maxHalfThickness: 0.072,
  };

  // True 180° palindromic mirror ribbon B (Deep Cobalt -> Electric Cyan)
  const ribbonBConfig: RibbonConfig = {
    points: ribbonAConfig.points.map((p) => new THREE.Vector3(-p.x, -p.y, -p.z)),
    colorStart: new THREE.Color(0x1432e8),
    colorMid: new THREE.Color(0x1f6bff),
    colorEnd: new THREE.Color(0x00d9ff),
    emissiveTint: new THREE.Color(0x003358),
    phaseOffset: Math.PI,
    twistTurns: -1.45,
    maxHalfWidth: 0.36,
    maxHalfThickness: 0.072,
  };

  const ribbonAGeo = createSculptedRibbonGeometry(ribbonAConfig);
  const ribbonBGeo = createSculptedRibbonGeometry(ribbonBConfig);
  const ribbonAMat = createRibbonMaterial(ribbonAConfig, envTexture);
  const ribbonBMat = createRibbonMaterial(ribbonBConfig, envTexture);

  const ribbonAMesh = new THREE.Mesh(ribbonAGeo, ribbonAMat.material);
  const ribbonBMesh = new THREE.Mesh(ribbonBGeo, ribbonBMat.material);
  sculptureGroup.add(ribbonAMesh, ribbonBMesh);

  // Molten gold core + micro-droplet cluster inside the tight central tension zone
  const moltenCore = createMoltenGoldCore(envTexture);
  sculptureGroup.add(moltenCore.group);

  // Subtle ambient glow spill behind sculpture
  const ambientSpill = createAmbientSpillMesh();
  sculptureGroup.add(ambientSpill.mesh);

  // Studio lights
  const ambientLight = new THREE.AmbientLight(0x141220, 0.75);
  const keyLight = new THREE.DirectionalLight(0xf5f5f7, 1.85);
  keyLight.position.set(-2.5, 4.5, 4.0);

  const magentaRim = new THREE.PointLight(0xef00cf, 13, 15, 1.55);
  magentaRim.position.set(-3.0, 2.0, 2.8);

  const cyanRim = new THREE.PointLight(0x00d9ff, 13, 15, 1.55);
  cyanRim.position.set(3.1, -1.8, 3.0);

  const purpleBack = new THREE.PointLight(0x8b00ff, 10, 14, 1.5);
  purpleBack.position.set(0.0, 3.2, -3.2);

  // Warm gold core light spills onto the inner concave ribbon faces
  const goldCoreLight = new THREE.PointLight(0xffc900, 4.6, 3.8, 1.9);
  goldCoreLight.position.set(0, 0, 0.15);

  scene.add(ambientLight, keyLight, magentaRim, cyanRim, purpleBack, goldCoreLight);

  // Restrained post-processing bloom
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(heroSection.clientWidth || 1, heroSection.clientHeight || 1),
    0.30,
    0.58,
    0.82,
  );
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);

  let revealProgress = 0;
  let scrollProgress = 0;
  let targetPointerX = 0;
  let targetPointerY = 0;
  let pointerX = 0;
  let pointerY = 0;
  let baseSculptureX = 1.48;
  let baseSculptureY = -0.04;
  let baseScale = 0.98;

  let rafId = 0;
  let isHeroVisible = true;
  let isDisposed = false;
  const clock = new THREE.Clock();

  const updateLayout = (): void => {
    const width = heroSection.clientWidth || window.innerWidth;
    const height = heroSection.clientHeight || window.innerHeight;
    const mobile = width < 960;
    const dpr = Math.min(window.devicePixelRatio || 1, mobile || lowPower ? 1.5 : 1.75);

    camera.aspect = width / Math.max(1, height);
    camera.position.z = mobile ? 8.8 : width < 1200 ? 8.0 : 7.4;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    bloomPass.setSize(width, height);

    farParticles.uniforms.uPixelRatio.value = dpr;
    midParticles.uniforms.uPixelRatio.value = dpr;
    fgParticles.uniforms.uPixelRatio.value = dpr;

    if (mobile) {
      baseSculptureX = 0.18;
      baseSculptureY = 0.92;
      baseScale = 0.66;
    } else if (width < 1240) {
      baseSculptureX = 1.18;
      baseSculptureY = -0.05;
      baseScale = 0.88;
    } else {
      baseSculptureX = 1.48;
      baseSculptureY = -0.04;
      baseScale = 0.98;
    }
  };

  const renderFrame = (elapsed: number): void => {
    pointerX += (targetPointerX - pointerX) * 0.05;
    pointerY += (targetPointerY - pointerY) * 0.05;

    ribbonAMat.uniforms.uTime.value = elapsed;
    ribbonBMat.uniforms.uTime.value = elapsed;
    moltenCore.uniforms.uTime.value = elapsed;
    ambientSpill.uniforms.uTime.value = elapsed;

    ribbonAMat.uniforms.uReveal.value = revealProgress;
    ribbonBMat.uniforms.uReveal.value = revealProgress;
    moltenCore.uniforms.uReveal.value = revealProgress;
    ambientSpill.uniforms.uReveal.value = revealProgress;

    ribbonAMat.uniforms.uPointer.value.set(pointerX, pointerY);
    ribbonBMat.uniforms.uPointer.value.set(-pointerX, -pointerY);

    for (const layer of [farParticles, midParticles, fgParticles]) {
      layer.uniforms.uTime.value = elapsed;
      layer.uniforms.uReveal.value = revealProgress;
      layer.uniforms.uScroll.value = scrollProgress;
      layer.uniforms.uPointer.value.set(pointerX, pointerY);
    }

    // Orbiting molten droplets inside the center tension aperture
    const dropletAlpha = Math.max(0, Math.min(1, (revealProgress - 0.18) * 1.25));
    moltenCore.droplets.forEach((droplet, idx) => {
      const mat = droplet.material as THREE.MeshPhysicalMaterial;
      mat.opacity = dropletAlpha * 0.92;
      const base = droplet.userData.baseOrbit as THREE.Vector3;
      const phase = elapsed * (0.45 + idx * 0.12) + idx * 1.57;
      droplet.position.set(
        base.x * Math.cos(phase * 0.4) - base.z * Math.sin(phase * 0.4),
        base.y + Math.sin(phase) * 0.045,
        base.x * Math.sin(phase * 0.4) + base.z * Math.cos(phase * 0.4),
      );
    });
    moltenCore.group.rotation.y = elapsed * 0.22;

    // Calm, poised sculpture pose + soft cursor response + scroll exit drift
    const scrollLift = scrollProgress * 0.85;
    const scrollScale = baseScale * (1 - scrollProgress * 0.12);
    sculptureGroup.position.set(
      baseSculptureX + pointerX * 0.22,
      baseSculptureY + pointerY * 0.16 + scrollLift,
      -scrollProgress * 1.05,
    );
    sculptureGroup.scale.setScalar(scrollScale);
    sculptureGroup.rotation.y =
      -0.22 + Math.sin(elapsed * 0.20) * 0.16 + pointerX * 0.24 + scrollProgress * 0.42;
    sculptureGroup.rotation.x = Math.cos(elapsed * 0.16) * 0.08 - pointerY * 0.16;
    sculptureGroup.rotation.z = Math.sin(elapsed * 0.12) * 0.05 - 0.08;

    // Subtle studio light play across glossy ridges
    magentaRim.position.x = -3.0 + Math.sin(elapsed * 0.34) * 0.45 + pointerX * 0.65;
    cyanRim.position.x = 3.1 + Math.cos(elapsed * 0.30) * 0.45 - pointerX * 0.65;
    goldCoreLight.intensity = 4.6 * revealProgress;

    composer.render();
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
    targetPointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    targetPointerY = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
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
    { threshold: 0.02 },
  );

  updateLayout();
  observer.observe(heroSection);
  window.addEventListener("resize", updateLayout, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);

  if (options.reducedMotion) {
    revealProgress = 1;
    renderFrame(0.6);
  } else {
    startLoop();
  }

  return {
    setReveal(value: number): void {
      revealProgress = THREE.MathUtils.clamp(value, 0, 1);
      if (options.reducedMotion) renderFrame(0.6);
    },
    setScrollProgress(value: number): void {
      scrollProgress = THREE.MathUtils.clamp(value, 0, 1);
      if (options.reducedMotion) renderFrame(0.6);
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
      document.removeEventListener("visibilitychange", onVisibilityChange);
      ribbonAGeo.dispose();
      ribbonBGeo.dispose();
      ribbonAMat.material.dispose();
      ribbonBMat.material.dispose();
      moltenCore.dispose();
      ambientSpill.dispose();
      farParticles.dispose();
      midParticles.dispose();
      fgParticles.dispose();
      envTexture.dispose();
      composer.dispose();
      renderer.dispose();
    },
  };
}
