import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {mountCatalogue,revealPart} from './catalogue.js';
import {partScene,disposeParts} from './scene.js';

async function mount(element) {
  const viewport=element.querySelector('.parts-viewport'),loading=element.querySelector('.parts-loading');
  const project=element.dataset.partsProject;
  let renderer,controls,current,frame=0;
  try {
    const response=await fetch(element.dataset.partsSource);
    if(!response.ok)throw new Error(`Parts data: ${response.status}`);
    const data=await response.json();
    if(data.project!==project)throw new Error('Parts catalogue belongs to another house');
    const scene=new THREE.Scene();scene.background=new THREE.Color('#f2f5f1');
    const camera=new THREE.PerspectiveCamera(36,1,.005,80);
    renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.07;
    const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','Deska w 3D. Przeciągnij, aby obrócić; przewiń, aby przybliżyć. Home przywraca widok.');viewport.prepend(canvas);
    controls=new OrbitControls(camera,canvas);controls.minDistance=.2;controls.maxDistance=12;
    controls.enableDamping=!matchMedia('(prefers-reduced-motion: reduce)').matches;controls.dampingFactor=.12;
    controls.listenToKeyEvents(canvas);
    const visible=()=>!!viewport.getClientRects().length&&!document.hidden;
    function invalidate(){if(!frame&&visible())frame=requestAnimationFrame(()=>{frame=0;controls.update();renderer.render(scene,camera);});}
    controls.addEventListener('change',invalidate);
    scene.add(new THREE.HemisphereLight('#ffffff','#b2b8aa',2.5));
    const key=new THREE.DirectionalLight('#fff3df',2.6);key.position.set(3,7,5);scene.add(key);
    const fill=new THREE.DirectionalLight('#d3e8ee',1.5);fill.position.set(-4,3,-4);scene.add(fill);
    function fit(){
      if(!current||!viewport.clientWidth||!viewport.clientHeight)return;
      const box=new THREE.Box3().setFromObject(current.root),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
      const tangent=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
      const distance=Math.max(size.x/(2*tangent*camera.aspect),size.y/(2*tangent),.35)*1.28;
      const damping=controls.enableDamping;controls.enableDamping=false;
      controls.target.copy(center);camera.position.copy(center).addScaledVector(current.direction.clone().normalize(),distance);controls.update();controls.enableDamping=damping;invalidate();
    }
    function resize(){const w=viewport.clientWidth,h=viewport.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();fit();}
    const catalogue=mountCatalogue(element.querySelector('[data-parts-controls]'),data,(selection,interactive)=>{
      if(current){scene.remove(current.root);disposeParts(current.root);}
      current=partScene(data,selection);scene.add(current.root);
      element.querySelector('.parts-annotation').textContent=current.annotation;resize();
      if(interactive)revealPart(viewport);
    });
    element.querySelector('[data-parts-reset]').addEventListener('click',fit);
    canvas.addEventListener('keydown',e=>{if(e.key==='Home'){e.preventDefault();fit();}});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();loading.hidden=false;loading.textContent='Podgląd 3D został przerwany. Odśwież stronę, aby wrócić do modelu.';});
    new ResizeObserver(resize).observe(viewport);
    document.addEventListener('visibilitychange',invalidate);
    matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',e=>{controls.enableDamping=!e.matches;invalidate();});
    window.combstructParts={getState:()=>({...current.getPartsState(),ready:true,selection:catalogue.getSelection(),geometries:renderer.info.memory.geometries}),data};
    loading.hidden=true;element.dataset.partsReady='true';resize();
  } catch(error) {
    console.error(error);loading.hidden=false;loading.textContent='Nie udało się wczytać podglądu części. Odśwież stronę, aby spróbować ponownie.';loading.setAttribute('role','alert');
  }
}
document.querySelectorAll('[data-parts-project]').forEach(mount);
