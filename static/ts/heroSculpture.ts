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

/**
 * Generate a dark studio environment map with controlled purple, magenta, cyan,
 * crisp white, and subtle gold softbox strips so clearcoat ribbons show realistic
 * reflections without external HDRI assets.
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

  // Sculpted studio softboxes matching the Pallindrome palette
  addPanel(0xf5f5f7, 3.6, [6, 1.4], [-4.5, 5.5, 4.0]);
  addPanel(0xef00cf, 4.2, [5.5, 2.2], [-6.5, 1.2, 2.5]);
  addPanel(0x8b00ff, 3.8, [4.5, 3.0], [-4.0, -4.5, -2.5]);
  addPanel(0x00d9ff, 4.4, [5.5, 2.2], [6.5, -0.8, 2.8]);
  addPanel(0x2855ff, 3.4, [4.5, 2.8], [4.5, 4.5, -2.5]);
  addPanel(0xffc900, 1.9, [1.6, 1.6], [0.0, 0.2, -5.5]);

  const rt = pmrem.fromScene(envScene, 0.04);
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
 * Build a sculptural, double-tapered, beveled 3D ribbon mesh using Bishop
 * parallel-transport frames so twisting never introduces Frenet-Serret kinks.
 */
function createPalindromeRibbonGeometry(cfg: RibbonConfig): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(cfg.points, false, "centripetal", 0.5);
  const lengthSegments = 180;
  const profileSegments = 22;

  const positions: number[] = [];
  const colors: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const tangents: THREE.Vector3[] = [];
  const centers: THREE.Vector3[] = [];
  for (let i = 0; i <= lengthSegments; i++) {
    const t = i / lengthSegments;
    centers.push(curve.getPointAt(t));
    tangents.push(curve.getTangentAt(t).normalize());
  }

  // Parallel transport initial normal
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

    // Smooth calligraphic width taper to fine points at both ends
    const endTaper = Math.pow(Math.sin(Math.PI * t), 0.92);
    const ribbonSculpt = 0.72 + 0.28 * Math.sin(Math.PI * t * 2.0);
    const halfWidth = cfg.maxHalfWidth * endTaper * ribbonSculpt;
    const halfThick = cfg.maxHalfThickness * Math.pow(Math.sin(Math.PI * t), 1.05);

    // Intentional smooth sculptural twist along the ribbon arc
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

    color.copy(cfg.colorStart).lerp(cfg.colorEnd, t);

    for (let j = 0; j <= profileSegments; j++) {
      const phi = (j / profileSegments) * Math.PI * 2;
      const cosP = Math.cos(phi);
      const sinP = Math.sin(phi);

      // Lenticular sculptural cross-section: wide glossy face, knife-edge bevels
      const u = Math.sign(cosP) * Math.pow(Math.abs(cosP), 0.78) * halfWidth;
      const v = Math.sign(sinP) * Math.pow(Math.abs(sinP), 1.35) * halfThick;

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
 * Create a glossy, iridescent physical material with organic GLSL undulation
 * and controlled reveal energy.
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
    metalness: 0.34,
    roughness: 0.14,
    clearcoat: 1.0,
    clearcoatRoughness: 0.06,
    iridescence: 0.92,
    iridescenceIOR: 1.44,
    iridescenceThicknessRange: [180, 560],
    sheen: 0.55,
    sheenRoughness: 0.3,
    sheenColor: cfg.colorEnd,
    envMap,
    envMapIntensity: 1.45,
    emissive: cfg.emissiveTint,
    emissiveIntensity: 0.24,
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
        float breathe = sin(uv.x * 5.2 - uTime * 0.85 + uPhase) * 0.085;
        float secondary = cos(uv.x * 3.1 + uTime * 0.55 - uPhase) * 0.045;
        transformed += normal * (breathe + secondary) * envelope;
        transformed.xy += uPointer * (0.09 * envelope);
        float revealScale = mix(0.68, 1.0, smoothstep(0.0, 1.0, uReveal));
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
        float energyPulse = 0.5 + 0.5 * sin(vRibbonT * 6.2831 - uTime * 1.15 + uPhase);
        float edgeGlow = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.6);
        totalEmissiveRadiance += diffuseColor.rgb * (edgeGlow * 0.55 + energyPulse * 0.14);
        totalEmissiveRadiance *= smoothstep(0.0, 0.85, uReveal);`,
      )
      .replace(
        "#include <dithering_fragment>",
        `#include <dithering_fragment>
        gl_FragColor.a *= smoothstep(0.0, 0.9, uReveal);`,
      );
  };

  material.customProgramCacheKey = () => `palindrome-ribbon-${cfg.phaseOffset}`;

  return { material, uniforms };
}

/**
 * Create a restrained, silk-like residual particle wake inspired by the intro
 * reveal video's purple, magenta, and cyan particles.
 */
function createHeroParticles(isMobile: boolean): {
  points: THREE.Points;
  uniforms: {
    uTime: { value: number };
    uReveal: { value: number };
    uPointer: { value: THREE.Vector2 };
    uPixelRatio: { value: number };
  };
  dispose: () => void;
} {
  const count = isMobile ? 120 : 240;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const seeds = new Float32Array(count);

  const palette = [
    new THREE.Color(0x8b00ff), // Electric Purple
    new THREE.Color(0xef00cf), // Vibrant Magenta
    new THREE.Color(0x00d9ff), // Electric Cyan
    new THREE.Color(0x2855ff), // Deep Electric Blue
    new THREE.Color(0xffc900), // Rare Signature Gold
  ];

  for (let i = 0; i < count; i++) {
    // Cluster organically along an elliptic ribbon field rather than a uniform box
    const t = Math.random() * Math.PI * 2;
    const radius = 0.75 + Math.pow(Math.random(), 0.75) * 2.15;
    const spread = (Math.random() - 0.5) * 1.1;

    positions[i * 3] = Math.cos(t) * radius * 0.72 + spread * 0.45;
    positions[i * 3 + 1] = Math.sin(t) * radius * 1.18 + (Math.random() - 0.5) * 0.65;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2.1;

    const roll = Math.random();
    const color =
      roll < 0.34
        ? palette[0]
        : roll < 0.64
          ? palette[1]
          : roll < 0.90
            ? palette[2]
            : roll < 0.96
              ? palette[3]
              : palette[4];

    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    scales[i] = 0.55 + Math.random() * 1.35;
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
    uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
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
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;
        vec3 pos = position;

        // Gentle orbital drift
        float angle = uTime * 0.16 + aSeed;
        pos.x += cos(angle) * 0.14;
        pos.y += sin(angle * 0.85) * 0.18;
        pos.z += sin(uTime * 0.25 + aSeed) * 0.12;

        // Subtle cursor parallax weighted by depth
        pos.xy += uPointer * (0.18 + pos.z * 0.06);

        // Expand gently outward during intro-to-hero handoff
        float burst = mix(0.42, 1.0, smoothstep(0.0, 1.0, uReveal));
        pos *= burst;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = aScale * 18.0 * uPixelRatio * (1.0 / max(1.2, -mvPosition.z));
        vAlpha = smoothstep(0.05, 0.95, uReveal) * (0.42 + 0.35 * sin(uTime * 0.9 + aSeed));
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float glow = pow(1.0 - dist * 2.0, 2.2);
        gl_FragColor = vec4(vColor, glow * vAlpha * 0.65);
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
  const maxDpr = isMobile ? 1.5 : 1.75;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, maxDpr);

  renderer.setPixelRatio(pixelRatio);
  renderer.setClearColor(0x000000, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
  camera.position.set(0, 0, 7.6);

  const envTexture = createStudioEnvironment(renderer);
  scene.environment = envTexture;

  // Root sculpture group positioned asymmetrically to balance left-aligned headline
  const sculptureGroup = new THREE.Group();
  scene.add(sculptureGroup);

  // Ribbon A: Deep Electric Purple -> Vibrant Magenta (Upper/Left clasp)
  const ribbonAConfig: RibbonConfig = {
    points: [
      new THREE.Vector3(-0.06, 1.92, -0.14),
      new THREE.Vector3(0.92, 1.24, 0.44),
      new THREE.Vector3(1.12, 0.14, 0.22),
      new THREE.Vector3(0.40, -0.84, -0.32),
      new THREE.Vector3(-0.52, -1.62, -0.16),
      new THREE.Vector3(-0.16, -2.02, 0.20),
    ],
    colorStart: new THREE.Color(0x8b00ff),
    colorEnd: new THREE.Color(0xef00cf),
    emissiveTint: new THREE.Color(0x4b0082),
    phaseOffset: 0.0,
    twistTurns: 1.15,
    maxHalfWidth: 0.38,
    maxHalfThickness: 0.075,
  };

  // Ribbon B: 180° Palindromic mirror (Electric Blue -> Electric Cyan, Lower/Right clasp)
  const ribbonBConfig: RibbonConfig = {
    points: ribbonAConfig.points.map((p) => new THREE.Vector3(-p.x, -p.y, -p.z * 0.85)),
    colorStart: new THREE.Color(0x1f3cff),
    colorEnd: new THREE.Color(0x00d9ff),
    emissiveTint: new THREE.Color(0x003f66),
    phaseOffset: Math.PI,
    twistTurns: -1.15,
    maxHalfWidth: 0.38,
    maxHalfThickness: 0.075,
  };

  const ribbonAGeo = createPalindromeRibbonGeometry(ribbonAConfig);
  const ribbonBGeo = createPalindromeRibbonGeometry(ribbonBConfig);
  const ribbonAMat = createRibbonMaterial(ribbonAConfig, envTexture);
  const ribbonBMat = createRibbonMaterial(ribbonBConfig, envTexture);

  const ribbonAMesh = new THREE.Mesh(ribbonAGeo, ribbonAMat.material);
  const ribbonBMesh = new THREE.Mesh(ribbonBGeo, ribbonBMat.material);
  sculptureGroup.add(ribbonAMesh, ribbonBMesh);

  // Subtle signature gold convergence filament & pinpoint ember (no bulky center sphere)
  const coreGroup = new THREE.Group();
  const filamentGeo = new THREE.TorusGeometry(0.28, 0.0065, 12, 72);
  const filamentMat = new THREE.MeshBasicMaterial({
    color: 0xffc900,
    transparent: true,
    opacity: 0,
  });
  const filamentA = new THREE.Mesh(filamentGeo, filamentMat);
  filamentA.rotation.set(Math.PI * 0.36, 0.4, 0.2);

  const emberGeo = new THREE.SphereGeometry(0.028, 16, 16);
  const emberMat = new THREE.MeshBasicMaterial({
    color: 0xffd84d,
    transparent: true,
    opacity: 0,
  });
  const emberMesh = new THREE.Mesh(emberGeo, emberMat);
  coreGroup.add(filamentA, emberMesh);
  sculptureGroup.add(coreGroup);

  // Subtle residual particle wake
  const particles = createHeroParticles(isMobile);
  sculptureGroup.add(particles.points);

  // Sculpted studio lights
  const ambient = new THREE.AmbientLight(0x161420, 0.7);
  const magentaLight = new THREE.PointLight(0xef00cf, 12, 16, 1.6);
  magentaLight.position.set(-3.2, 2.2, 3.0);

  const cyanLight = new THREE.PointLight(0x00d9ff, 12, 16, 1.6);
  cyanLight.position.set(3.4, -1.6, 3.2);

  const purpleRim = new THREE.PointLight(0x8b00ff, 9, 15, 1.5);
  purpleRim.position.set(0.0, 3.5, -3.2);

  const goldCoreLight = new THREE.PointLight(0xffc900, 1.4, 3.2, 2.0);
  goldCoreLight.position.set(0, 0, 0.2);

  scene.add(ambient, magentaLight, cyanLight, purpleRim, goldCoreLight);

  // Restrained post-processing bloom
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(heroSection.clientWidth || 1, heroSection.clientHeight || 1),
    0.34,
    0.58,
    0.76,
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
  let baseSculptureX = 1.45;
  let baseSculptureY = 0.05;
  let baseScale = 1.0;

  let rafId = 0;
  let isHeroVisible = true;
  let isDisposed = false;
  const clock = new THREE.Clock();

  const updateLayout = (): void => {
    const width = heroSection.clientWidth || window.innerWidth;
    const height = heroSection.clientHeight || window.innerHeight;
    const mobile = width < 960;

    camera.aspect = width / Math.max(1, height);
    camera.position.z = mobile ? 8.8 : width < 1200 ? 8.0 : 7.4;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    bloomPass.setSize(width, height);
    particles.uniforms.uPixelRatio.value = renderer.getPixelRatio();

    if (mobile) {
      baseSculptureX = 0.24;
      baseSculptureY = 0.92;
      baseScale = 0.64;
    } else if (width < 1240) {
      baseSculptureX = 1.15;
      baseSculptureY = -0.10;
      baseScale = 0.84;
    } else {
      baseSculptureX = 1.48;
      baseSculptureY = -0.10;
      baseScale = 0.92;
    }
  };

  const renderFrame = (elapsed: number): void => {
    pointerX += (targetPointerX - pointerX) * 0.055;
    pointerY += (targetPointerY - pointerY) * 0.055;

    ribbonAMat.uniforms.uTime.value = elapsed;
    ribbonBMat.uniforms.uTime.value = elapsed;
    particles.uniforms.uTime.value = elapsed;

    ribbonAMat.uniforms.uReveal.value = revealProgress;
    ribbonBMat.uniforms.uReveal.value = revealProgress;
    particles.uniforms.uReveal.value = revealProgress;

    ribbonAMat.uniforms.uPointer.value.set(pointerX, pointerY);
    ribbonBMat.uniforms.uPointer.value.set(-pointerX, -pointerY);
    particles.uniforms.uPointer.value.set(pointerX, pointerY);

    const coreAlpha = Math.max(0, Math.min(1, (revealProgress - 0.2) * 1.25));
    filamentMat.opacity = coreAlpha * 0.42;
    emberMat.opacity = coreAlpha * 0.92;
    coreGroup.rotation.y = elapsed * 0.32;
    coreGroup.rotation.z = Math.sin(elapsed * 0.45) * 0.25;

    // Gentle living sculpture motion + cursor-responsive parallax + scroll exit drift
    const scrollLift = scrollProgress * 0.85;
    const scrollScale = baseScale * (1 - scrollProgress * 0.12);
    sculptureGroup.position.set(
      baseSculptureX + pointerX * 0.24,
      baseSculptureY + pointerY * 0.18 + scrollLift,
      -scrollProgress * 1.1,
    );
    sculptureGroup.scale.setScalar(scrollScale);
    sculptureGroup.rotation.y = Math.sin(elapsed * 0.24) * 0.22 + pointerX * 0.26 + scrollProgress * 0.45;
    sculptureGroup.rotation.x = Math.cos(elapsed * 0.19) * 0.1 - pointerY * 0.18;
    sculptureGroup.rotation.z = Math.sin(elapsed * 0.14) * 0.06 - 0.14;

    // Subtle light breathing
    magentaLight.position.x = -3.2 + Math.sin(elapsed * 0.4) * 0.4 + pointerX * 0.6;
    cyanLight.position.x = 3.4 + Math.cos(elapsed * 0.35) * 0.4 - pointerX * 0.6;
    goldCoreLight.intensity = 1.4 * revealProgress;

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
      filamentGeo.dispose();
      filamentMat.dispose();
      emberGeo.dispose();
      emberMat.dispose();
      particles.dispose();
      envTexture.dispose();
      composer.dispose();
      renderer.dispose();
    },
  };
}
