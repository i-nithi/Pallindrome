import * as THREE from 'three';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** A scroll-rendered bridge; it never runs an independent animation loop. */
export function initChromaticPortal(hero: HTMLElement, stage: HTMLElement, panel: HTMLElement, onArrival: (progress: number) => void): { setOpening(value: number): void } {
  const canvas = document.createElement('canvas');
  canvas.className = 'chromatic-portal';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:false, depth:false, stencil:false, powerPreference:'low-power'});
  } catch {
    canvas.remove();
    return {setOpening() {}};
  }
  renderer.setClearColor(0,0);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
  const geometry = new THREE.PlaneGeometry(2,2);
  const uniforms = {
    uProgress:{value:0}, uOpening:{value:0}, uAspect:{value:1},
    uSource:{value:new THREE.Vector2()}, uTarget:{value:new THREE.Vector2()}, uHalf:{value:new THREE.Vector2()},
  };
  const material = new THREE.ShaderMaterial({uniforms, transparent:true, depthWrite:false,
    vertexShader:`varying vec2 vUv; void main(){vUv=uv; gl_Position=vec4(position.xy,0.,1.);}`,
    fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform float uProgress,uOpening,uAspect;
      uniform vec2 uSource,uTarget,uHalf;
      float hash(float n){return fract(sin(n*127.1)*43758.5453);}
      void main(){
        vec2 p=vec2(vUv.x*uAspect,vUv.y);
        vec2 a=vec2(uSource.x*uAspect,uSource.y);
        vec2 b=vec2(uTarget.x*uAspect,uTarget.y);
        float appear=smoothstep(.08,.35,uProgress);
        float dissolve=1.0-smoothstep(.12,.95,uOpening);
        vec3 col=vec3(0.); float alpha=0.;
        // Filaments follow a curved path from the moving logo to the card.
        for(int i=0;i<7;i++){
          float fi=float(i); float t=clamp((a.y-p.y)/max(.12,a.y-b.y),0.,1.);
          float spread=sin(t*3.14159);
          float center=mix(a.x,b.x,t)+sin(t*5.0+fi*1.7+uProgress*3.0)*spread*(.055+fi*.006);
          center+=(fi-3.0)*(.014+.035*t);
          float dx=abs(p.x-center);
          float width=.0015+(.003+fi*.00025)*spread;
          float thread=exp(-dx/width);
          float sheath=exp(-dx/(width*5.0))*.12;
          float travel=smoothstep(t-.23,t+.08,uProgress*1.35);
          float bounds=smoothstep(b.y-.04,b.y+.10,p.y)*(1.0-smoothstep(a.y-.07,a.y+.08,p.y));
          vec3 hue=mix(vec3(.40,.06,.95),vec3(.02,.65,1.),.5+.5*sin(fi*1.8+t*4.));
          hue=mix(hue,vec3(.94,.05,.58),.35*(.5+.5*cos(fi+t*7.)));
          float strength=(thread*.40+sheath)*bounds*travel*appear*dissolve;
          col+=hue*strength; alpha+=strength;
        }
        // A few glints move with scroll, rather than drifting on a timer.
        for(int i=0;i<18;i++){
          float fi=float(i); float t=fract(hash(fi+3.)+uProgress*.67);
          vec2 pos=mix(a,b,t); pos.x+=sin(t*5.+fi)*sin(t*3.14159)*.09;
          float d=length((p-pos)*vec2(1.,1.6));
          float spark=exp(-d*450.)*smoothstep(.1,.4,uProgress)*dissolve*.55;
          col+=mix(vec3(.6,.15,1.),vec3(.1,.8,1.),hash(fi))*spark; alpha+=spark;
        }
        // The same energy gathers around the actual, expanding panel bounds.
        vec2 q=abs(p-b)-vec2(uHalf.x*uAspect,uHalf.y);
        float edge=abs(length(max(q,0.))+min(max(q.x,q.y),0.));
        float edgeGlow=exp(-edge*95.)*smoothstep(.55,.98,uProgress)*dissolve;
        vec3 edgeColor=mix(vec3(.55,.09,.95),vec3(.04,.72,1.),smoothstep(-.3,.3,p.x-b.x));
        col+=edgeColor*edgeGlow*.46; alpha+=edgeGlow*.46;
        gl_FragColor=vec4(col,clamp(alpha,0.,.8));
      }`});
  scene.add(new THREE.Mesh(geometry,material));
  let bridge = 0, opening = 0, renderWidth = 0, renderHeight = 0, renderRatio = 0;
  function render() {
    const w=window.innerWidth, h=window.innerHeight;
    if (!w || !h) return;
    const active=bridge>.05 && opening<.99;
    canvas.style.visibility=active?'visible':'hidden';
    if (!active) return;
    const ratio=Math.min(window.devicePixelRatio || 1, w<901?1:1.25);
    if (w!==renderWidth || h!==renderHeight || ratio!==renderRatio) {
      renderWidth=w; renderHeight=h; renderRatio=ratio;
      renderer.setPixelRatio(ratio); renderer.setSize(w,h,false);
    }
    const hr=hero.getBoundingClientRect(), pr=panel.getBoundingClientRect();
    const mobile=w<768;
    uniforms.uSource.value.set(mobile?.5:.755, 1-(hr.top+hr.height*(mobile?.68:.515))/h);
    uniforms.uTarget.value.set((pr.left+pr.width/2)/w,1-(pr.top+pr.height/2)/h);
    uniforms.uHalf.value.set(pr.width/(2*w),pr.height/(2*h));
    uniforms.uAspect.value=w/h; uniforms.uProgress.value=bridge; uniforms.uOpening.value=opening;
    renderer.render(scene,camera);
  }
  const trigger=ScrollTrigger.create({trigger:hero,start:'top top',endTrigger:stage,end:'top top',onUpdate(self){bridge=self.progress;onArrival(bridge);render();},onRefresh(self){bridge=self.progress;onArrival(bridge);render();}});
  const resize=()=>{onArrival(bridge);render();}; window.addEventListener('resize',resize,{passive:true});
  canvas.addEventListener('webglcontextlost', event=>{event.preventDefault(); canvas.style.visibility='hidden';});
  onArrival(trigger.progress);
  return {setOpening(value) {opening=value; render();}};
}
