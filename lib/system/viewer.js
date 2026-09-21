import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {buildSystemModel} from './model.js';
import {BATTEN} from '../construction/battens.js';
const root=document.getElementById('system-viewer');
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(36,1,.01,200);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});
renderer.setClearColor(0x181b18,1);
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.12;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.domElement.setAttribute('aria-label','Obracany model systemu Combstruct');
renderer.domElement.setAttribute('role','img');
renderer.domElement.tabIndex=0;
root.appendChild(renderer.domElement);
const texCanvas=document.createElement('canvas');texCanvas.width=2048;texCanvas.height=256;
const ctx=texCanvas.getContext('2d');
let seed=132;function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296}
function texture(){
const probe=document.createElement('span');probe.style.color='var(--orange)';root.appendChild(probe);let color=getComputedStyle(probe).color;probe.remove();
const base=new THREE.Color(color);if(base.r===0&&base.g===0&&base.b===0)base.setHSL(.1,.45,.55);
ctx.fillStyle=base.getStyle();ctx.fillRect(0,0,2048,256);seed=132;
for(let i=0;i<13500;i++){const x=rnd()*2048,y=rnd()*256,a=(rnd()-.5)*2.8,len=8+rnd()*45,w=1+rnd()*6;ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.fillStyle=base.clone().multiplyScalar(.88+rnd()*.18).getStyle();ctx.beginPath();ctx.moveTo(-len/2,0);ctx.lineTo(len*.35,-w/2);ctx.lineTo(len/2,w*.25);ctx.lineTo(-len*.35,w/2);ctx.closePath();ctx.fill();ctx.restore()}
}
texture();const map=new THREE.CanvasTexture(texCanvas);map.colorSpace=THREE.SRGBColorSpace;
const material=new THREE.MeshStandardMaterial({map,roughness:.85,metalness:0,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});
const endingMaterial=material.clone();endingMaterial.color.multiplyScalar(.76);

material.bumpMap=map;material.bumpScale=.0015;
endingMaterial.bumpMap=map;endingMaterial.bumpScale=.0015;
const battenMaterial=material.clone();battenMaterial.color.set('#43948c');
const insulationMaterial=new THREE.MeshStandardMaterial({color:'#eeede4',roughness:.97});
const model=buildSystemModel({wood:material,end:endingMaterial,insulation:insulationMaterial,batten:battenMaterial});
const {house,single,pair,sample,battens,battenParts}=model;
const battenCounts={walls:battenParts.filter(p=>p.surface==='wall').length,
 roofUpper:battenParts.filter(p=>p.surface==='roof'&&p.side==='upper').length,
 roofLower:battenParts.filter(p=>p.surface==='roof'&&p.side==='lower').length};
scene.add(house.root,single,pair,sample);
scene.updateMatrixWorld(true);
const structuralBounds=new THREE.Box3();
for(const b of house.boards)structuralBounds.union(new THREE.Box3().setFromObject(b.mesh));
const sampleBounds=[single,pair,sample].map(g=>new THREE.Box3().setFromObject(g));

// Only rendering is batched. Source board profiles, IDs and transforms stay
// identical to the catalogue, including all terminal cuts and roof junctions.
function batchBoards(target,boards,opacity) {
 const byMaterial=new Map(),outlines=[];
 const inverse=target.matrixWorld.clone().invert();
 for(const {mesh} of boards) {
  const transform=inverse.clone().multiply(mesh.matrixWorld);
  const geometry=(mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone()).applyMatrix4(transform);
  if(!byMaterial.has(mesh.material))byMaterial.set(mesh.material,[]);
  byMaterial.get(mesh.material).push(geometry);
  outlines.push(new THREE.EdgesGeometry(mesh.geometry,25).applyMatrix4(transform));
  mesh.visible=false;
 }
 for(const [material,geometries] of byMaterial) {
  const batch=new THREE.Mesh(mergeGeometries(geometries),material);
  batch.castShadow=true;batch.receiveShadow=true;target.add(batch);
  geometries.forEach(g=>g.dispose());
 }
 const edges=new THREE.LineSegments(mergeGeometries(outlines),new THREE.LineBasicMaterial({color:0xc3b69b,transparent:true,opacity}));
 target.add(edges);outlines.forEach(g=>g.dispose());
}
batchBoards(house.root,house.boards,.20);
[single,pair,sample].forEach((g,i)=>batchBoards(g,model.sampleBoards[i],.32));
const hemi=new THREE.HemisphereLight(0xffffff,0x777777,.62);scene.add(hemi);
const keyLight=new THREE.DirectionalLight(0xffffff,2.3);keyLight.color.setRGB(1,.92,.8);keyLight.position.set(-9,14,8);
keyLight.castShadow=true;keyLight.shadow.mapSize.set(2048,2048);
Object.assign(keyLight.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.1,far:50});
keyLight.shadow.bias=-.0004;keyLight.shadow.normalBias=.03;scene.add(keyLight);
const fillLight=new THREE.DirectionalLight(0xffffff,.4);fillLight.position.set(7,5,-4);scene.add(fillLight);
const controls=new OrbitControls(camera,renderer.domElement);
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
controls.enableDamping=!motionPreference.matches;
controls.dampingFactor=.09;
controls.autoRotate=false;
controls.enablePan=true;
controls.rotateSpeed=.7;
controls.zoomSpeed=.8;
controls.minPolarAngle=.04;
controls.maxPolarAngle=Math.PI*.84;
controls.listenToKeyEvents(renderer.domElement);
motionPreference.addEventListener('change',event=>{
  controls.enableDamping=!event.matches;
  invalidate();
});

const names=['Deska','Połączenie','Plaster','Konstrukcja','Izolacja','Stelażowanie'];
const directions=[[-.14,.37,1],[-.16,.54,1],[.63,.93,1],[-.88,.79,1.16],[-.88,.79,1.16],[-.88,.60,1.16]];
let currentStage=-1,activeBounds=null,frame=0,ready=false;
const targetOrigin=location.protocol==='file:'||location.origin==='null'?'*':location.origin;
const publish=message=>parent.postMessage(message,targetOrigin);

function render(){
  frame=0;
  controls.update();
  renderer.render(scene,camera);
}
function invalidate(){if(!frame)frame=requestAnimationFrame(render)}
controls.addEventListener('change',invalidate);

function fitCamera(bounds,direction){
  const center=bounds.getCenter(new THREE.Vector3());
  const view=direction.clone().normalize();
  const right=new THREE.Vector3(0,1,0).cross(view).normalize();
  const up=view.clone().cross(right).normalize();
  const tanV=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
  const tanH=tanV*camera.aspect;
  let distance=0;
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
    const corner=new THREE.Vector3(x,y,z).sub(center);
    distance=Math.max(distance,Math.abs(corner.dot(right))/tanH+corner.dot(view),Math.abs(corner.dot(up))/tanV+corner.dot(view));
  }
  distance=Math.max(.8,distance*1.22);
  // Stop any previous damped gesture before applying the next model's framing.
  const damped=controls.enableDamping;
  controls.enableDamping=false;
  controls.update();
  controls.target.copy(center);
  camera.position.copy(center).addScaledVector(view,distance);
  camera.near=Math.max(.003,distance/5000);
  camera.far=Math.max(100,distance*25);
  camera.updateProjectionMatrix();
  controls.minDistance=distance*.22;
  controls.maxDistance=distance*3.2;
  controls.update();
  controls.saveState();
  controls.enableDamping=damped;
}

function setStage(value){
  const stage=Number(value);
  if(!Number.isInteger(stage)||stage<0||stage>=names.length)return false;
  single.visible=stage===0;
  pair.visible=stage===1;
  sample.visible=stage===2;
  house.root.visible=stage>=3;
  house.groups.insulation.visible=stage>=4;
  battens.visible=stage===5;
  activeBounds=stage<3?sampleBounds[stage]:structuralBounds;
  currentStage=stage;
  root.dataset.stage=String(stage);
  renderer.domElement.setAttribute('aria-label',names[stage]+'. Model Combstruct; przeciągnij, aby obrócić.');
  fitCamera(activeBounds,new THREE.Vector3(...directions[stage]));
  invalidate();
  if(ready)publish({type:'combstruct:stagechange',stage,name:names[stage]});
  return true;
}

function resize(){
  const width=Math.max(1,root.clientWidth),height=Math.max(1,root.clientHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
  renderer.setSize(width,height,false);
  camera.aspect=width/height;
  camera.updateProjectionMatrix();
  if(activeBounds)fitCamera(activeBounds,camera.position.clone().sub(controls.target));
  invalidate();
}
new ResizeObserver(resize).observe(root);
// A static on-demand canvas must refresh after its iframe re-enters the viewport.
new IntersectionObserver(entries=>{
  if(entries.some(entry=>entry.isIntersecting))invalidate();
},{threshold:0}).observe(root);
addEventListener('pageshow',invalidate);
addEventListener('visibilitychange',()=>{if(!document.hidden)invalidate()});
addEventListener('resize',resize);
addEventListener('message',event=>{
  if(event.source!==parent)return;
  if(location.protocol!=='file:'&&location.origin!=='null'&&event.origin!==location.origin)return;
  if(event.data?.type==='combstruct:stage')setStage(event.data.stage);
  if(event.data?.type==='combstruct:reset'&&currentStage>=0){
    fitCamera(activeBounds,new THREE.Vector3(...directions[currentStage]));
    invalidate();
  }
});
renderer.domElement.addEventListener('webglcontextlost',event=>{
  event.preventDefault();
  publish({type:'combstruct:error',message:'Przerwano podgląd 3D. Odśwież stronę.'});
});

// Compact deterministic state is available for integration checks and accessibility.
window.combstructViewer={
  setStage,
  getState:()=>({ready,stage:currentStage,name:names[currentStage],
    source:'construction/125/structure.js',boards:house.boards.length,insulation:house.insulationCount,dimensions:house.dimensions,
    renderedBoards:currentStage<3?model.sampleBoards[currentStage].length:house.boards.length,
    renderedInsulation:currentStage>=4?house.insulationCount:0,
    renderedBattens:currentStage===5?battenParts.length:0,battenDimensions:BATTEN,battenCounts,
    camera:camera.position.toArray(),target:controls.target.toArray(),
    pixelRatio:renderer.getPixelRatio(),autoRotate:controls.autoRotate,
    reducedMotion:motionPreference.matches}),
  getBattens:()=>battenParts,
  // Read-only geometry and camera access for visual regression checks.
  model:house,camera,controls,
  stageCount:names.length
};
resize();
setStage(window.__combstructPendingStage??0);
render();
requestAnimationFrame(()=>{
  ready=true;
  document.documentElement.dataset.ready='true';
  publish({type:'combstruct:ready',stage:currentStage,stages:names});
});
