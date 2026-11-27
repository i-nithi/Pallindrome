import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export interface HeroSculptureController {
  setReveal(value: number): void;
  setScrollProgress(value: number): void;
  setHandoff(value: number): void;
  readonly ready: Promise<boolean>;
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
    return { ready: Promise.resolve(false), setHandoff() {}, setReveal() {}, setScrollProgress() {}, renderOnce() {}, dispose() {} };
  }
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, .1, 100);
  camera.position.z = 6;
  const group = new THREE.Group();
  scene.add(group);
  const uniforms = { uTime: { value: 0 }, uReveal: { value: 0 }, uScroll: { value: 0 }, uPointer: { value: new THREE.Vector2(.5,.5) }, uMotion: { value: 0 }, uHandoff: { value: 1 }, uResolution: { value: new THREE.Vector2(1,1) }, uMobile: { value: 0 } };
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
  let handoff = 1;
  let resolveReady: (ready: boolean) => void = () => {};
  const ready = new Promise<boolean>(resolve => { resolveReady = resolve; });
  let model: THREE.Group | null = null;
  const loader = new GLTFLoader();
  loader.load('/static/models/loader-emblem.glb', (gltf) => {
    if (disposed) { gltf.scene.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); return; }
    model = gltf.scene;
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const mats = Array.isArray(object.material) ? object.material : [object.material];
      mats.forEach((mat) => {
        if (!(mat instanceof THREE.MeshStandardMaterial)) return;
        mat.side = THREE.DoubleSide;
        mat.onBeforeCompile = (shader) => {
          shader.uniforms.uHandoff = uniforms.uHandoff; shader.uniforms.uTime = uniforms.uTime; shader.uniforms.uMotion = uniforms.uMotion; shader.uniforms.uReveal = uniforms.uReveal; shader.uniforms.uScroll = uniforms.uScroll;
          shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uReveal; uniform float uScroll; uniform float uHandoff;');
          shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight = mix(diffuseColor.rgb, outgoingLight, uHandoff);\n#include <opaque_fragment>\ngl_FragColor.a *= smoothstep(.05,.75,uReveal) * (1.0-uScroll*.85);');
        };
        mat.transparent = true; mat.needsUpdate = true;
      });
    });
    group.add(model);
    try { renderer.compile(scene, camera); render(); resolveReady(true); } catch { resolveReady(false); }
  }, undefined, () => { resolveReady(false); dragArea.remove(); hero.classList.remove('has-sculpture-control'); options.onFallback?.(); });
  // A camera-facing atmospheric layer lives behind the emblem and never turns
  // with it. Its light is masked away from the desktop copy and mobile header.
  const haloGeometry = new THREE.PlaneGeometry(7.0, 7.0);
  const haloMaterial = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, depthTest: false,
    vertexShader: `varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime, uReveal, uScroll, uHandoff, uMobile;
      uniform vec2 uResolution, uPointer;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);
      }
      float fbm(vec2 p){return noise(p)*.57+noise(p*2.03+7.1)*.28+noise(p*4.1+14.7)*.15;}
      void main(){
        vec2 p=(vUv-.5)*2.0;
        vec2 screen=gl_FragCoord.xy/uResolution;
        float time=uTime*.035;
        vec2 drift=vec2(time,-time*.35)+(uPointer-.5)*.025;
        float haze=fbm(p*2.15+drift);
        float wisps=fbm(p*3.0+vec2(haze*.65,-haze*.4)-drift*.7);
        float envelope=exp(-dot(p*vec2(1.0,1.13),p*vec2(1.0,1.13))*2.0);
        float mist=smoothstep(.28,.77,haze*.68+wisps*.32)*envelope;
        vec3 color=mix(vec3(.40,.035,.64),vec3(.018,.29,.52),smoothstep(-.65,.7,p.x+p.y*.25));
        color=mix(color,vec3(.48,.04,.34),smoothstep(.48,.85,wisps)*.23);
        // Several broad, feathered light shafts rather than hard radial lines.
        float beamAxis=p.x+p.y*.48+sin(time*.8)*.035;
        float ray1=(beamAxis+.42)*4.4, ray2=(beamAxis-.08)*5.2, ray3=(beamAxis-.47)*4.0;
        float shafts=exp(-ray1*ray1)*.24;
        shafts+=exp(-ray2*ray2)*.22;
        shafts+=exp(-ray3*ray3)*.13;
        shafts*=envelope*(.62+.38*haze);
        vec3 light=mix(vec3(.34,.12,.58),vec3(.035,.43,.58),smoothstep(-.7,.7,p.x));
        // Keep color and opacity separate: multiplying by haze in both
        // channels made the earlier atmosphere nearly invisible on black.
        color=mix(color,light,clamp(shafts*1.1,0.0,.48));
        float desktopGuard=smoothstep(.47,.66,screen.x);
        float mobileGuard=1.0-smoothstep(.36,.75,screen.y);
        float guard=mix(desktopGuard,mobileGuard,uMobile);
        float edge=1.0-smoothstep(.45,1.0,length(p));
        float amount=guard*edge*smoothstep(.05,.85,uReveal)*smoothstep(.12,.85,uHandoff)*(1.0-uScroll);
        gl_FragColor=vec4(color,clamp((mist*.72+shafts*.72+envelope*.09)*amount,0.0,.58));
      }`,
  });
  const halo = new THREE.Mesh(haloGeometry, haloMaterial);
  halo.renderOrder = -1;
  scene.add(halo);

  // Sparse, layered dust in screen space: one draw call, no extra textures or
  // simulation buffers. Jittered cells keep density even without rigid rows.
  const dustCount = 833;
  const dustPositions = new Float32Array(dustCount * 3);
  const dustColors = new Float32Array(dustCount * 3);
  const dustDetails = new Float32Array(dustCount * 3);
  const dustPalette = [0x8b00ff, 0xef00cf, 0x0066ff, 0x00d9ff, 0xffc900].map(c => new THREE.Color(c));
  let seed = 261107;
  const random = (): number => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const columns=34, rows=25;
  for (let i=0; i<dustCount; i++) {
    const cell=(i*367)%(columns*rows);
    const x=(cell%columns+.08+random()*.84)/columns;
    const y=(Math.floor(cell/columns)+.08+random()*.84)/rows;
    dustPositions.set([x,y,0],i*3);
    const c=dustPalette[i%11===0 ? 4 : i%4];
    dustColors.set([c.r,c.g,c.b],i*3);
    const depth=random();
    dustDetails.set([depth,random()*6.283,random()],i*3);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));
  dustGeometry.setAttribute('aColor',new THREE.BufferAttribute(dustColors,3));
  dustGeometry.setAttribute('aDetails',new THREE.BufferAttribute(dustDetails,3));
  const dustUniforms = {
    uTime: uniforms.uTime, uReveal: uniforms.uReveal, uScroll: uniforms.uScroll,
    uHandoff: uniforms.uHandoff, uMobile: uniforms.uMobile,
    uDustPointer: {value: new THREE.Vector2(.25,.5)},
    uTextRect: {value: new THREE.Vector4(.12,.45,.20,.70)},
    uPixelRatio: {value: 1},
  };
  const dustMaterial = new THREE.ShaderMaterial({
    uniforms:dustUniforms, transparent:true, depthWrite:false, depthTest:false,
    vertexShader:`
      attribute vec3 aColor, aDetails;
      uniform float uTime,uReveal,uScroll,uHandoff,uPixelRatio,uMobile;
      uniform vec2 uDustPointer;
      uniform vec4 uTextRect;
      varying vec3 vColor; varying float vAlpha,vSoft;
      void main(){
        float depth=aDetails.x, phase=aDetails.y, variation=aDetails.z;
        vec2 p=position.xy;
        p.x=fract(p.x+uTime*(.0015+.0025*depth));
        p+=vec2(sin(uTime*.11+phase),cos(uTime*.08+phase*1.3))*(.002+.004*depth);
        p+=(uDustPointer-vec2(.25,.5))*(.003+.009*depth);
        vec2 nearest=clamp(p,vec2(uTextRect.x,uTextRect.z),vec2(uTextRect.y,uTextRect.w));
        float quiet=.78+.22*smoothstep(0.,.055,length(p-nearest));
        float edge=smoothstep(.0,.04,p.x)*(1.-smoothstep(.96,1.,p.x))*smoothstep(0.,.035,p.y)*(1.-smoothstep(.96,1.,p.y));
        float shimmer=.82+.18*sin(uTime*.3+phase);
        vColor=aColor; vSoft=step(.68,variation);
        vAlpha=(.78+.22*depth)*quiet*edge*shimmer*uReveal*smoothstep(.05,.8,uHandoff)*(1.-uScroll);
        gl_Position=vec4(p*2.-1.,0.,1.);
        gl_PointSize=(2.2+depth*2.0+vSoft*.9)*uPixelRatio*2.379718656;
      }`,
    fragmentShader:`
      precision mediump float;
      varying vec3 vColor; varying float vAlpha,vSoft;
      void main(){
        float d=length(gl_PointCoord-.5)*2.;
        float sharp=1.-smoothstep(.3,.95,d);
        float soft=exp(-d*d*3.6)*(1.-smoothstep(.85,1.,d));
        // The hero vignette darkens this canvas by up to 78%; a bright
        // pinpoint core retains colored edges after that compositing step.
        float core=(1.-smoothstep(.0,.50,d))*(1.-vSoft*.65);
        vec3 luminous=mix(vColor,vec3(1.0),.10+core*.20);
        gl_FragColor=vec4(luminous,mix(sharp,soft,vSoft)*vAlpha);
        #include <colorspace_fragment>
      }`,
  });
  const dust = new THREE.Points(dustGeometry,dustMaterial);
  dust.frustumCulled=false; dust.renderOrder=-2; scene.add(dust);
  let dustX=.25, dustY=.5, dustTargetX=.25, dustTargetY=.5;
  let disposed = false, visible = true, raf = 0, reveal = 0, scroll = 0, time = 0, last = 0;
  let px = .5, py = .5, tx = .5, ty = .5, motion = 0, baseScale = 1, baseY = 0, baseX = 0, startScale = 1, startX = 0, startY = 0;
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    if (!w || !h) return;
    const mobile = w < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5));
    renderer.setSize(w,h,false); camera.aspect = w/h; camera.updateProjectionMatrix();
    renderer.getDrawingBufferSize(uniforms.uResolution.value);
    uniforms.uMobile.value = mobile ? 1 : 0;
    dustUniforms.uPixelRatio.value = renderer.getPixelRatio();
    const content=hero.querySelector<HTMLElement>('.hero__editorial');
    if (content) {
      const heroRect=hero.getBoundingClientRect(), textRect=content.getBoundingClientRect();
      dustUniforms.uTextRect.value.set(
        (textRect.left-heroRect.left)/w,(textRect.right-heroRect.left)/w,
        1-(textRect.bottom-heroRect.top)/h,1-(textRect.top-heroRect.top)/h,
      );
    }
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
    baseX = (mobile ? .5 : .755) * viewWidth - viewWidth/2;
    const videoScale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    const rect = hero.getBoundingClientRect();
    startScale = (520 * videoScale / h * viewHeight) / 3.4;
    startX = ((window.innerWidth / 2 - rect.left) / w - .5) * viewWidth;
    startY = (.5 - (window.innerHeight / 2 + 5 * videoScale - rect.top) / h) * viewHeight;
    group.scale.setScalar(baseScale);
    group.position.set(baseX, baseY, 0);
    render();
  }
  function render() {
    uniforms.uTime.value = time; uniforms.uReveal.value = reveal; uniforms.uScroll.value = scroll;
    uniforms.uPointer.value.set(px,py); uniforms.uMotion.value = motion;
    const scale = THREE.MathUtils.lerp(startScale, baseScale, handoff);
    group.scale.setScalar(scale * (1 + Math.sin(time*.42)*.008*handoff));
    group.position.x = THREE.MathUtils.lerp(startX, baseX, handoff);
    group.position.y = THREE.MathUtils.lerp(startY, baseY, handoff) + Math.sin(time*.35)*.025*baseScale*handoff;
    halo.scale.setScalar(scale);
    halo.position.set(group.position.x, group.position.y, -.65);
    uniforms.uHandoff.value = handoff;
    group.rotation.y = dragY + .10 * handoff + (!dragging && !options.reducedMotion ? (px-.5)*.05*handoff : 0);
    group.rotation.x = dragX - .035 * handoff + (!dragging && !options.reducedMotion ? -(py-.5)*.04*handoff : 0);
    group.rotation.z = 0;
    renderer.render(scene,camera);
  }
  function tick(now: number) {
    raf = 0; if (disposed || !visible || document.hidden || options.reducedMotion) return;
    const dt = last ? Math.min((now-last)/1000,.05) : 0; last = now; time += dt;
    dustX+=(dustTargetX-dustX)*.025; dustY+=(dustTargetY-dustY)*.025;
    dustUniforms.uDustPointer.value.set(dustX,dustY);
    px += (tx-px)*.045; py += (ty-py)*.045; motion += ((Math.abs(tx-px)+Math.abs(ty-py))*3-motion)*.06;
    render(); raf = requestAnimationFrame(tick);
  }
  function start() { if (!raf && !disposed && visible && !document.hidden && !options.reducedMotion) { last=0; raf=requestAnimationFrame(tick); } }
  function pointer(e: PointerEvent) {
    const rect=hero.getBoundingClientRect();
    if (!options.reducedMotion && rect.width && rect.height) {
      dustTargetX=THREE.MathUtils.clamp((e.clientX-rect.left)/rect.width,0,1);
      dustTargetY=THREE.MathUtils.clamp(1-(e.clientY-rect.top)/rect.height,0,1);
    }
    const cx=rect.width*(rect.width<768?.5:.755); const cy=rect.height*(rect.width<768?.68:.515);
    const size=rect.width<768?Math.min(rect.width*.84,rect.height*.43):Math.min(rect.width*.48,rect.height*.73);
    tx=THREE.MathUtils.clamp((e.clientX-rect.left-cx)/size+.5,0,1); ty=THREE.MathUtils.clamp(.5-(e.clientY-rect.top-cy)/size,0,1);
  }
  function leave() { tx=.5; ty=.5; dustTargetX=.25; dustTargetY=.5; }
  function dragStart(event: PointerEvent) {
    if (event.button !== 0 || dragging) return;
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
  return { ready, setHandoff(v) { handoff=THREE.MathUtils.clamp(v,0,1); render(); }, setReveal(v) { reveal=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render(); }, setScrollProgress(v) {scroll=THREE.MathUtils.clamp(v,0,1); if(options.reducedMotion) render();}, renderOnce: render, dispose() {disposed=true; cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener('resize',resize); hero.removeEventListener('pointermove',pointer); hero.removeEventListener('pointerleave',leave); document.removeEventListener('visibilitychange',visibility); dragArea.remove(); hero.classList.remove('has-sculpture-control'); model?.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); const mats=Array.isArray(o.material)?o.material:[o.material]; mats.forEach(m=>m.dispose()); } }); environment.dispose(); pmrem.dispose(); dustGeometry.dispose(); dustMaterial.dispose(); haloGeometry.dispose(); haloMaterial.dispose(); renderer.dispose();} };
}
