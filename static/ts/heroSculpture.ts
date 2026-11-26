import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export interface HeroSculptureController {
  setReveal(value: number): void;
  setScrollProgress(value: number): void;
  renderOnce(): void;
  dispose(): void;
}
export interface HeroSculptureOptions { reducedMotion?: boolean; onFallback?: () => void }

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
  const uniforms = { uTime: { value: 0 }, uReveal: { value: 0 }, uScroll: { value: 0 }, uPointer: { value: new THREE.Vector2(.5,.5) }, uMotion: { value: 0 } };
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(new RoomEnvironment(), .08).texture;
  scene.environment = environment;
  scene.environmentIntensity = .75;
  const key = new THREE.DirectionalLight(0xf4dfff, 2.1); key.position.set(-3,4,5); scene.add(key);
  const cyan = new THREE.DirectionalLight(0x41bfff, 2.5); cyan.position.set(4,1,3); scene.add(cyan);
  const violet = new THREE.DirectionalLight(0x8d30ff, 2); violet.position.set(-4,-2,1); scene.add(violet);
  let model: THREE.Group | null = null;
  const loader = new GLTFLoader();
  loader.load('/static/models/chromatic-glass.glb', (gltf) => {
    if (disposed) { gltf.scene.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); return; }
    model = gltf.scene;
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const mats = Array.isArray(object.material) ? object.material : [object.material];
      mats.forEach((mat) => {
        if (!(mat instanceof THREE.MeshStandardMaterial)) return;
        mat.side = THREE.DoubleSide;
        if (mat instanceof THREE.MeshPhysicalMaterial) {
          // glTF carries transmission and IOR; a restrained thin-film response
          // adds the chromatic shift that the glTF export cannot preserve.
          mat.transmission = .68;
          mat.thickness = .18;
          mat.iridescence = .38;
          mat.iridescenceIOR = 1.3;
          mat.iridescenceThicknessRange = [120, 420];
          mat.envMapIntensity = 1.1;
        }
        mat.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = uniforms.uTime; shader.uniforms.uMotion = uniforms.uMotion; shader.uniforms.uReveal = uniforms.uReveal; shader.uniforms.uScroll = uniforms.uScroll;
          shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime; uniform float uMotion;');
          shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed += normal * (sin(position.y * 5.0 + position.x * 3.0 + uTime * .55) * .012 + uMotion * .018 * sin(position.y * 9.0 - uTime));');
          shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uReveal; uniform float uScroll;');
          shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', '#include <opaque_fragment>\ngl_FragColor.a *= smoothstep(.05,.75,uReveal) * (1.0-uScroll*.85);');
        };
        mat.transparent = true; mat.needsUpdate = true;
      });
    });
    group.add(model); render();
  }, undefined, () => options.onFallback?.());
  const haloGeometry=new THREE.PlaneGeometry(5,5);
  const haloMaterial=new THREE.ShaderMaterial({uniforms, transparent:true, depthWrite:false,
    vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv; uniform float uReveal,uScroll; void main(){vec2 p=(vUv-.5)*2.; float r=length(p*vec2(1.,1.2)); float a=exp(-r*r*5.)*.19*smoothstep(0.,.8,uReveal)*(1.-uScroll); vec3 c=mix(vec3(.22,.025,.37),vec3(.005,.18,.29),smoothstep(-.5,.5,p.x)); gl_FragColor=vec4(c,a);}`});
  const halo=new THREE.Mesh(haloGeometry,haloMaterial); halo.position.z=-.55; group.add(halo);

  // A sparse field adds depth without competing with the sculpture.
  const count = 35;
  const positions = new Float32Array(count * 3), targets = new Float32Array(count * 3), colors = new Float32Array(count * 3);
  const palette = [new THREE.Color('#a43cff'), new THREE.Color('#10bfff'), new THREE.Color('#ec3bc2'), new THREE.Color('#514fff')];
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
  let px = .5, py = .5, tx = .5, ty = .5, motion = 0, baseScale = 1, baseY = 0;
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
    baseScale = size / h * viewHeight / 3.6;
    baseY = (mobile ? -.18 : -.015) * viewHeight;
    group.scale.setScalar(baseScale);
    group.position.set((mobile ? .5 : .755) * viewWidth - viewWidth/2, baseY, 0);
    render();
  }
  function render() {
    uniforms.uTime.value = time; uniforms.uReveal.value = reveal; uniforms.uScroll.value = scroll;
    uniforms.uPointer.value.set(px,py); uniforms.uMotion.value = motion;
    group.scale.setScalar(baseScale * (1 + Math.sin(time*.42)*.008));
    group.position.y = baseY + Math.sin(time*.35)*.025*baseScale;
    group.rotation.y = (px-.5)*.18 + Math.sin(time*.25)*.035;
    group.rotation.x = -(py-.5)*.12 + Math.sin(time*.22)*.025;
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
  return { setReveal(v) { reveal=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render(); }, setScrollProgress(v) {scroll=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render();}, renderOnce: render, dispose() {disposed=true; cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener('resize',resize); hero.removeEventListener('pointermove',pointer); hero.removeEventListener('pointerleave',leave); document.removeEventListener('visibilitychange',visibility); model?.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); environment.dispose(); pmrem.dispose(); haloGeometry.dispose(); haloMaterial.dispose(); pointsGeo.dispose(); pointsMat.dispose(); renderer.dispose();} };
}
