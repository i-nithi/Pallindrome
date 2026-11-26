import * as THREE from "three";

export interface HeroSculptureController {
  setReveal(value: number): void;
  setScrollProgress(value: number): void;
  renderOnce(): void;
  dispose(): void;
}
export interface HeroSculptureOptions { reducedMotion?: boolean; onFallback?: () => void }

// The original artwork is the surface map: its silhouette, folds and lettering are
// retained, while a finely tessellated surface gives the printed mark real depth.
const vertex = `
uniform float uTime, uScroll, uMotion;
uniform vec2 uPointer;
varying vec2 vUv;
varying vec3 vNormalView;
varying vec3 vView;
varying float vWave;
void main() {
  vUv = uv;
  vec3 p = position;
  float d = length(uv - uPointer);
  float ripple = sin(d * 30.0 - uTime * 2.3) * exp(-d * 7.0) * uMotion;
  float wave = sin(uv.x * 11.0 + uv.y * 5.0 + uTime * .55) * cos(uv.y * 9.0 - uTime * .4);
  p.z += wave * .035 + ripple * .075 + uScroll * sin(uv.y * 8.0 + uTime) * .08;
  p.z += .12 * (1.0 - dot(position.xy, position.xy) * .28);
  vWave = wave + ripple;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vView = normalize(-mv.xyz);
  vNormalView = normalize(normalMatrix * normalize(vec3(-.06 * cos(uv.x * 11.0 + uTime * .55), -.06 * sin(uv.y * 9.0 - uTime * .4), 1.0)));
  gl_Position = projectionMatrix * mv;
}`;
const fragment = `
uniform sampler2D uLogo;
uniform float uTime, uReveal, uScroll;
uniform vec2 uPointer;
varying vec2 vUv;
varying vec3 vNormalView, vView;
varying float vWave;
void main() {
  vec4 art = texture2D(uLogo, vUv);
  if (art.a < .07) discard;
  vec3 n = normalize(vNormalView);
  float fresnel = pow(1.0 - max(dot(n, normalize(vView)), 0.0), 2.0);
  float band = pow(max(0.0, sin(vUv.x * 13.0 + vUv.y * 9.0 + vWave * 1.4 + uTime * .38)), 12.0);
  float band2 = pow(max(0.0, cos(vUv.x * 7.0 - vUv.y * 14.0 - uTime * .23)), 18.0);
  float cursorLight = exp(-length(vUv-uPointer)*5.0);
  vec3 chroma = mix(vec3(.16,.06,.5), vec3(.02,.72,1.0), smoothstep(.2,.85,vUv.x));
  chroma = mix(chroma, vec3(.88,.08,.64), .32 + .2*sin(vUv.y*7.0+uTime*.2));
  // Keep the black script and original gold intact; reflections collect on the ribbons.
  float ribbon = smoothstep(.18,.5,max(art.r, max(art.g, art.b))) * (1.0 - smoothstep(.55,.82, min(art.r, art.g)));
  vec3 color = art.rgb * (.80 + .12 * vWave);
  color += ribbon * (chroma * (.20 + band * .40 + cursorLight * .13) + vec3(.65,.82,1.0) * band2 * .25);
  color += fresnel * chroma * .35;
  gl_FragColor = vec4(color, art.a * smoothstep(.04,.58,uReveal) * (1.0-uScroll*.85));
}`;

export function initHeroSculpture(canvas: HTMLCanvasElement, hero: HTMLElement, options: HeroSculptureOptions = {}): HeroSculptureController {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  } catch {
    options.onFallback?.();
    return { setReveal() {}, setScrollProgress() {}, renderOnce() {}, dispose() {} };
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  camera.position.z = 6;
  const group = new THREE.Group();
  scene.add(group);
  const uniforms = { uLogo: { value: null as THREE.Texture | null }, uTime: { value: 0 }, uReveal: { value: 0 }, uScroll: { value: 0 }, uPointer: { value: new THREE.Vector2(.5,.5) }, uMotion: { value: 0 } };
  const geometry = new THREE.PlaneGeometry(3.25, 3.25, 80, 80);
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: fragment, transparent: true, side: THREE.DoubleSide, depthWrite: false });
  const sculpture = new THREE.Mesh(geometry, material);
  group.add(sculpture);

  // Small fragments travel into the mark during the existing GSAP reveal.
  const count = 180;
  const positions = new Float32Array(count * 3), targets = new Float32Array(count * 3), colors = new Float32Array(count * 3);
  const palette = [new THREE.Color('#a43cff'), new THREE.Color('#10bfff'), new THREE.Color('#ec3bc2'), new THREE.Color('#e6b14a')];
  for (let i = 0; i < count; i++) {
    const a = i * 2.39996, radius = .6 + Math.random() * 1.6;
    positions[i*3] = Math.cos(a)*radius; positions[i*3+1] = Math.sin(a)*radius; positions[i*3+2] = (Math.random()-.5)*1.4;
    targets[i*3] = positions[i*3] * .55; targets[i*3+1] = positions[i*3+1] * .55; targets[i*3+2] = .1;
    const c = palette[i % palette.length]; colors.set([c.r,c.g,c.b], i*3);
  }
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  pointsGeo.setAttribute('aTarget', new THREE.BufferAttribute(targets,3));
  pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors,3));
  const pointsMat = new THREE.ShaderMaterial({ uniforms, transparent: true, depthWrite: false, vertexColors: true, vertexShader: `attribute vec3 aTarget; varying vec3 vColor; uniform float uReveal,uTime,uScroll; void main(){vColor=color; vec3 p=mix(position,aTarget,smoothstep(0.0,1.0,uReveal)); p.xy += vec2(sin(uTime*.3+position.y*4.0),cos(uTime*.25+position.x*4.0))*.025; vec4 mv=modelViewMatrix*vec4(p,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=3.0*(6.0/-mv.z);}`, fragmentShader: `varying vec3 vColor; uniform float uReveal,uScroll; void main(){float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.05,d)*(.3+.7*(1.0-uReveal))*(1.0-uScroll); gl_FragColor=vec4(vColor,a);}` });
  const points = new THREE.Points(pointsGeo, pointsMat); group.add(points);
  let disposed = false, visible = true, raf = 0, reveal = 0, scroll = 0, time = 0, last = 0;
  let px = .5, py = .5, tx = .5, ty = .5, motion = 0;
  const texture = new THREE.TextureLoader().load('/static/img/pallindrome-logo.png', () => { if (!disposed) render(); }, undefined, () => options.onFallback?.());
  texture.colorSpace = THREE.SRGBColorSpace;
  uniforms.uLogo.value = texture;
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    if (!w || !h) return;
    const mobile = w < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5));
    renderer.setSize(w,h,false); camera.aspect = w/h; camera.updateProjectionMatrix();
    // Position in viewport coordinates without affecting the editorial layout.
    const viewHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z;
    const viewWidth = viewHeight * camera.aspect;
    const size = mobile ? Math.min(w*.84, h*.43) : Math.min(w*.48, h*.73);
    const scale = size / h * viewHeight / 3.25;
    group.scale.setScalar(scale);
    group.position.set((mobile ? .5 : .755) * viewWidth - viewWidth/2, (mobile ? -.18 : -.015) * viewHeight, 0);
    render();
  }
  function render() {
    uniforms.uTime.value = time; uniforms.uReveal.value = reveal; uniforms.uScroll.value = scroll;
    uniforms.uPointer.value.set(px,py); uniforms.uMotion.value = motion;
    group.rotation.y = (px-.5)*.28 + Math.sin(time*.35)*.055;
    group.rotation.x = -(py-.5)*.18 + Math.sin(time*.28)*.035;
    group.rotation.z = Math.sin(time*.22)*.018 + scroll*.06;
    renderer.render(scene,camera);
  }
  function tick(now: number) {
    raf = 0; if (disposed || !visible || document.hidden || options.reducedMotion) return;
    const dt = last ? Math.min((now-last)/1000,.05) : 0; last = now; time += dt;
    px += (tx-px)*.045; py += (ty-py)*.045; motion += ((Math.abs(tx-px)+Math.abs(ty-py))*3-motion)*.06;
    render(); raf = requestAnimationFrame(tick);
  }
  function start() { if (!raf && !disposed && visible && !document.hidden && !options.reducedMotion) { last=0; raf=requestAnimationFrame(tick); } }
  function pointer(e: PointerEvent) {
    const rect=hero.getBoundingClientRect(); const cx=rect.width*(rect.width<768?.5:.755); const cy=rect.height*(rect.width<768?.68:.515);
    const size=rect.width<768?Math.min(rect.width*.84,rect.height*.43):Math.min(rect.width*.48,rect.height*.73);
    tx=THREE.MathUtils.clamp((e.clientX-rect.left-cx)/size+.5,0,1); ty=THREE.MathUtils.clamp(.5-(e.clientY-rect.top-cy)/size,0,1);
  }
  function leave() { tx=.5; ty=.5; }
  function visibility() { if (document.hidden && raf) { cancelAnimationFrame(raf); raf=0; } else start(); }
  const observer = new IntersectionObserver(entries => { visible=entries[0].isIntersecting; if (visible) start(); else if (raf) {cancelAnimationFrame(raf); raf=0;} }, {threshold:.01});
  observer.observe(hero); window.addEventListener('resize',resize,{passive:true}); hero.addEventListener('pointermove',pointer,{passive:true}); hero.addEventListener('pointerleave',leave); document.addEventListener('visibilitychange',visibility);
  if (options.reducedMotion) reveal=1;
  resize(); start();
  return { setReveal(v) { reveal=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render(); }, setScrollProgress(v) {scroll=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render();}, renderOnce: render, dispose() {disposed=true; cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener('resize',resize); hero.removeEventListener('pointermove',pointer); hero.removeEventListener('pointerleave',leave); document.removeEventListener('visibilitychange',visibility); geometry.dispose(); material.dispose(); pointsGeo.dispose(); pointsMat.dispose(); texture.dispose(); renderer.dispose();} };
}
