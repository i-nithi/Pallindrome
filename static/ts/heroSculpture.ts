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
  scene.environmentIntensity = .55;
  const key = new THREE.DirectionalLight(0xf4dfff, 1.15); key.position.set(-3,4,5); scene.add(key);
  const cyan = new THREE.DirectionalLight(0x41bfff, 1.05); cyan.position.set(4,1,3); scene.add(cyan);
  const violet = new THREE.DirectionalLight(0x8d30ff, .8); violet.position.set(-4,-2,1); scene.add(violet);
  // A dedicated hit area sits only over the artwork, leaving hero links and
  // scrolling elsewhere untouched. Keyboard rotation mirrors pointer dragging.
  const dragArea = document.createElement('div');
  dragArea.className = 'hero__sculpture-control';
  dragArea.tabIndex = 0;
  dragArea.setAttribute('role', 'group');
  dragArea.setAttribute('aria-label', 'Rotate the Pallindrome emblem. Drag or use arrow keys; press Home to reset.');
  hero.appendChild(dragArea);
  hero.classList.add('has-sculpture-control');
  let dragX = 0, dragY = 0, dragging = false, activePointer = -1, lastX = 0, lastY = 0;
  let entranceElapsed = 0, entranceAngle = 0, entranceFinished = !!options.reducedMotion;
  let model: THREE.Group | null = null;
  const loader = new GLTFLoader();
  loader.load('/static/models/pallindrome-emblem.glb', (gltf) => {
    if (disposed) { gltf.scene.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); return; }
    model = gltf.scene;
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const mats = Array.isArray(object.material) ? object.material : [object.material];
      mats.forEach((mat) => {
        if (!(mat instanceof THREE.MeshStandardMaterial)) return;
        mat.side = THREE.DoubleSide;
        mat.onBeforeCompile = (shader) => {
          shader.uniforms.uTime = uniforms.uTime; shader.uniforms.uMotion = uniforms.uMotion; shader.uniforms.uReveal = uniforms.uReveal; shader.uniforms.uScroll = uniforms.uScroll;
          shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uReveal; uniform float uScroll;');
          shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', '#include <opaque_fragment>\ngl_FragColor.a *= smoothstep(.05,.75,uReveal) * (1.0-uScroll*.85);');
        };
        mat.transparent = true; mat.needsUpdate = true;
      });
    });
    group.add(model); render();
  }, undefined, () => { dragArea.remove(); hero.classList.remove('has-sculpture-control'); options.onFallback?.(); });
  const haloGeometry=new THREE.PlaneGeometry(5,5);
  const haloMaterial=new THREE.ShaderMaterial({uniforms, transparent:true, depthWrite:false,
    vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec2 vUv; uniform float uReveal,uScroll; void main(){vec2 p=(vUv-.5)*2.; float r=length(p*vec2(1.,1.2)); float a=exp(-r*r*5.)*.19*smoothstep(0.,.8,uReveal)*(1.-uScroll); vec3 c=mix(vec3(.22,.025,.37),vec3(.005,.18,.29),smoothstep(-.5,.5,p.x)); gl_FragColor=vec4(c,a);}`});
  const halo=new THREE.Mesh(haloGeometry,haloMaterial); halo.position.z=-.55; group.add(halo);

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
    dragArea.style.width = `${size}px`;
    dragArea.style.height = `${size}px`;
    dragArea.style.left = `${w * (mobile ? .5 : .755) - size / 2}px`;
    dragArea.style.top = `${h * (mobile ? .68 : .515) - size / 2}px`;
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
    group.rotation.y = dragY + entranceAngle;
    group.rotation.x = dragX;
    group.rotation.z = 0;
    renderer.render(scene,camera);
  }
  function tick(now: number) {
    raf = 0; if (disposed || !visible || document.hidden || options.reducedMotion) return;
    const dt = last ? Math.min((now-last)/1000,.05) : 0; last = now; time += dt;
    if (!entranceFinished && model && reveal >= .8) {
      entranceElapsed = Math.min(entranceElapsed + dt, 3.2);
      const progress = entranceElapsed / 3.2;
      const eased = progress * progress * (3 - 2 * progress);
      // Both faces show the emblem, so one revolution produces two visible turns.
      entranceAngle = eased * Math.PI * 2;
      if (progress === 1) { entranceAngle = 0; entranceFinished = true; }
    }
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
  function takeControl() {
    if (!entranceFinished) {
      dragY += entranceAngle;
      entranceAngle = 0;
      entranceFinished = true;
    }
  }
  function dragStart(event: PointerEvent) {
    if (event.button !== 0 || dragging) return;
    takeControl();
    dragging = true; activePointer = event.pointerId; lastX = event.clientX; lastY = event.clientY;
    dragArea.setPointerCapture(event.pointerId);
    dragArea.classList.add('is-dragging');
  }
  function dragMove(event: PointerEvent) {
    if (!dragging || event.pointerId !== activePointer) return;
    dragY += (event.clientX-lastX)*.012;
    dragX += (event.clientY-lastY)*.012;
    lastX = event.clientX; lastY = event.clientY;
    if (options.reducedMotion) render();
  }
  function dragEnd(event: PointerEvent) {
    if (event.pointerId !== activePointer) return;
    dragging = false; activePointer = -1;
    dragArea.classList.remove('is-dragging');
    if (dragArea.hasPointerCapture(event.pointerId)) dragArea.releasePointerCapture(event.pointerId);
  }
  function rotateKey(event: KeyboardEvent) {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home'].includes(event.key)) return;
    takeControl();
    const step = Math.PI / 12;
    if (event.key === 'ArrowLeft') dragY -= step;
    else if (event.key === 'ArrowRight') dragY += step;
    else if (event.key === 'ArrowUp') dragX -= step;
    else if (event.key === 'ArrowDown') dragX += step;
    else if (event.key === 'Home') { dragX = 0; dragY = 0; }
    else return;
    event.preventDefault();
    if (options.reducedMotion) render();
  }
  dragArea.addEventListener('pointerdown', dragStart);
  dragArea.addEventListener('pointermove', dragMove);
  dragArea.addEventListener('pointerup', dragEnd);
  dragArea.addEventListener('pointercancel', dragEnd);
  dragArea.addEventListener('lostpointercapture', dragEnd);
  dragArea.addEventListener('keydown', rotateKey);
  function visibility() { if (document.hidden && raf) { cancelAnimationFrame(raf); raf=0; } else start(); }
  const observer = new IntersectionObserver(entries => { visible=entries[0].isIntersecting; if (visible) start(); else if (raf) {cancelAnimationFrame(raf); raf=0;} }, {threshold:.01});
  observer.observe(hero); window.addEventListener('resize',resize,{passive:true}); hero.addEventListener('pointermove',pointer,{passive:true}); hero.addEventListener('pointerleave',leave); document.addEventListener('visibilitychange',visibility);
  if (options.reducedMotion) reveal=1;
  resize(); start();
  return { setReveal(v) { reveal=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render(); }, setScrollProgress(v) {scroll=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render();}, renderOnce: render, dispose() {disposed=true; cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener('resize',resize); hero.removeEventListener('pointermove',pointer); hero.removeEventListener('pointerleave',leave); document.removeEventListener('visibilitychange',visibility); dragArea.remove(); hero.classList.remove('has-sculpture-control'); model?.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); environment.dispose(); pmrem.dispose(); haloGeometry.dispose(); haloMaterial.dispose(); renderer.dispose();} };
}
