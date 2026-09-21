import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildStructure} from './structure.js';
import {addBattenLayer} from '../batten-layer.js';

const root=document.getElementById('comb-krokusy-model');
const $=s=>root.querySelector(s);
const stage=$('.krokusy-stage'),loading=$('.krokusy-loading');
try{
const scene=new THREE.Scene();scene.background=null;
const camera=new THREE.PerspectiveCamera(35,1,.01,180);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.8));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.domElement.setAttribute('aria-label','Combstruct 30. Konstrukcja z desek Combstruct; przeciągnij, aby obrócić.');stage.append(renderer.domElement);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=!reduced.matches;controls.dampingFactor=.09;controls.rotateSpeed=.65;controls.minPolarAngle=.03;controls.maxPolarAngle=Math.PI*.84;
const hemi=new THREE.HemisphereLight('#f7fbff','#a6b4bf',2.1);scene.add(hemi);
const sun=new THREE.DirectionalLight('#fff0d6',3.0);sun.position.set(-6,11,9);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-11;sun.shadow.camera.right=11;sun.shadow.camera.top=11;sun.shadow.camera.bottom=-11;sun.shadow.camera.near=.1;sun.shadow.camera.far=40;sun.shadow.normalBias=.018;scene.add(sun);
const fill=new THREE.DirectionalLight('#cadfff',1.2);fill.position.set(7,5,-7);scene.add(fill);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(150,150),new THREE.ShadowMaterial({color:'#4d6375',opacity:.17}));ground.rotation.x=-Math.PI/2;ground.position.y=-.012;ground.receiveShadow=true;scene.add(ground);
const textureCanvas=document.createElement('canvas');textureCanvas.width=1024;textureCanvas.height=128;const tx=textureCanvas.getContext('2d');tx.fillStyle='#c7a46f';tx.fillRect(0,0,1024,128);
let seed=142;const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296};
for(let i=0;i<3500;i++){const x=random()*1024,y=random()*128,len=4+random()*26;tx.save();tx.translate(x,y);tx.rotate((random()-.5)*2.5);tx.fillStyle=`rgba(${random()>.5?'249,226,179':'107,79,43'},.12)`;tx.fillRect(-len/2,-1,len,1+random()*3);tx.restore()}
const map=new THREE.CanvasTexture(textureCanvas);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
const wood=new THREE.MeshStandardMaterial({map,roughness:.78,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});
const end=wood.clone();end.color.set('#cebda4');
const edge=new THREE.LineBasicMaterial({color:'#705a3c',transparent:true,opacity:.50});
const model=buildStructure({wood,end,edge});scene.add(model.root);scene.updateMatrixWorld(true);
const groups=model.groups,boards=model.boards||[];
const dimensions=model.dimensions||{};
// Preserve every original board and its metadata; merge only the visible drawing.
const originalWorld=new Map();
for(const record of boards){if(record.mesh){record.mesh.updateWorldMatrix(true,false);originalWorld.set(record.mesh,record.mesh.matrixWorld.clone())}}
const groupList=value=>(Array.isArray(value)?value:[value]).filter(v=>v?.isObject3D);
const surfaces=[...new Set(Object.values(groups).flatMap(groupList))];
const originals=[];
for(const group of surfaces){
 group.updateWorldMatrix(true,true);const inverse=group.matrixWorld.clone().invert(),pieces=[];group.traverse(m=>{if(m.isMesh&&!m.userData.viewerBatch)pieces.push(m)});
 if(!pieces.length)continue;
 const byMaterial=new Map(),outlines=[];
 for(const mesh of pieces){
  if(mesh.userData.viewerHidden)continue;
  const transform=inverse.clone().multiply(mesh.matrixWorld),g=mesh.geometry.index?mesh.geometry.toNonIndexed():mesh.geometry.clone();g.applyMatrix4(transform);
  // All generated wood geometry is rendered as complete solids; profile edges only.
  const mat=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;
  if(!byMaterial.has(mat))byMaterial.set(mat,[]);byMaterial.get(mat).push(g);
  outlines.push(new THREE.EdgesGeometry(mesh.geometry,30).applyMatrix4(transform));
  mesh.visible=false;mesh.userData.viewerHidden=true;originals.push(mesh);
 }
 for(const [mat,geos]of byMaterial){const merged=mergeGeometries(geos,false);geos.forEach(g=>g.dispose());if(!merged)throw Error('Nie udało się połączyć geometrii podglądu.');const draw=new THREE.Mesh(merged,mat);draw.castShadow=true;draw.receiveShadow=true;draw.userData.viewerBatch=true;group.add(draw)}
 if(outlines.length){const merged=mergeGeometries(outlines,false);outlines.forEach(g=>g.dispose());if(merged){const draw=new THREE.LineSegments(merged,edge);draw.userData.viewerBatch=true;group.add(draw)}}
}
const detailRoot=new THREE.Group();scene.add(detailRoot);detailRoot.visible=false;
const jointPicker=$('[data-joints]');
const jointList=jointPicker?(model.joints||[]):[];
for(const joint of jointList){const option=document.createElement('option');option.value=joint.id;option.textContent=joint.title;jointPicker.append(option)}
const battenMaterial=wood.clone();battenMaterial.color.set('#43948c');
const battenLayer=addBattenLayer(model,battenMaterial);
let battensVisible=true;
function setBattens(value){battensVisible=!!value;battenLayer.setVisible(battensVisible);$('[data-battens]').checked=battensVisible;invalidate();}
$('[data-battens]').addEventListener('change',e=>setBattens(e.target.checked));
let view='structure',detail=null,frame=0;
function invalidate(){if(!frame)frame=requestAnimationFrame(render)}
function render(){frame=0;controls.update();renderer.render(scene,camera)}
controls.addEventListener('change',invalidate);
reduced.addEventListener('change',e=>{controls.enableDamping=!e.matches;invalidate()});
function fit(bounds,vector,scale=1.04){
 const center=bounds.getCenter(new THREE.Vector3()),v=vector.clone().normalize();
 const right=new THREE.Vector3(0,1,0).cross(v).normalize(),up=v.clone().cross(right).normalize();
 const tv=Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),th=tv*camera.aspect;let distance=0;
 for(const x of[bounds.min.x,bounds.max.x])for(const y of[bounds.min.y,bounds.max.y])for(const z of[bounds.min.z,bounds.max.z]){const point=new THREE.Vector3(x,y,z).sub(center);distance=Math.max(distance,Math.abs(point.dot(right))/th+point.dot(v),Math.abs(point.dot(up))/tv+point.dot(v))}
 const damping=controls.enableDamping;controls.enableDamping=false;controls.update();
 controls.target.copy(center);camera.position.copy(center).addScaledVector(v,Math.max(distance*scale,1));camera.updateProjectionMatrix();controls.minDistance=.3;controls.maxDistance=60;controls.update();controls.enableDamping=damping;invalidate();
}
function visibleBounds(){const bounds=new THREE.Box3();model.root.updateMatrixWorld(true);model.root.traverseVisible(m=>{if(m.isMesh){m.geometry.computeBoundingBox();bounds.union(m.geometry.boundingBox.clone().applyMatrix4(m.matrixWorld))}});return bounds}
function centerDrawing(){
 const damping=controls.enableDamping;controls.enableDamping=false;
 // Frame actual boards, rather than empty corners above the terrace and gable.
 for(let iteration=0;iteration<3;iteration++){
  controls.update();camera.updateMatrixWorld();let xmin=Infinity,xmax=-Infinity,ymin=Infinity,ymax=-Infinity;const point=new THREE.Vector3();
  model.root.traverseVisible(m=>{if(!m.isMesh)return;const positions=m.geometry.getAttribute('position');for(let i=0;i<positions.count;i++){point.fromBufferAttribute(positions,i).applyMatrix4(m.matrixWorld).project(camera);xmin=Math.min(xmin,point.x);xmax=Math.max(xmax,point.x);ymin=Math.min(ymin,point.y);ymax=Math.max(ymax,point.y)}});
  const distance=camera.position.distanceTo(controls.target),tan=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
  const right=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,0),up=new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld,1);
  const shift=right.multiplyScalar((xmin+xmax)/2*distance*tan*camera.aspect).add(up.multiplyScalar((ymin+ymax)/2*distance*tan));
  controls.target.add(shift);camera.position.add(shift);
  const factor=Math.max((xmax-xmin)/1.82,(ymax-ymin)/1.82);
  camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);
 }
 controls.update();controls.enableDamping=damping;
}
function reset(){
 if(detail){const c=new THREE.Vector3(...detail.position);fit(new THREE.Box3().setFromCenterAndSize(c,new THREE.Vector3(1.7,1.3,1.7)),new THREE.Vector3(...(detail.viewDirection||[1,.7,1])),1);return}
 fit(visibleBounds(),new THREE.Vector3(8,view==='floor'||view==='ceiling'?12:7,view==='rear'?-12:12));centerDrawing();
}
function setVisible(value,visible){groupList(value).forEach(g=>g.visible=visible)}
function clearDetail(){detail=null;while(detailRoot.children.length){const m=detailRoot.children[0];detailRoot.remove(m);m.traverse(o=>{if(o.geometry)o.geometry.dispose()})}}
function setView(next){
 clearDetail();view=next;detail=jointList.find(j=>j.id===next)||null;
 model.root.visible=!detail;detailRoot.visible=!!detail;
 for(const group of surfaces)group.visible=true;
 if(next==='interior'){setVisible(groups.roof,false);setVisible(groups.ceiling,false);setVisible(groups.gables,false);groupList(groups.walls).slice(2).forEach(g=>g.visible=false)}
 if(['floor','ceiling','roof'].includes(next)){for(const group of surfaces)group.visible=false;setVisible(groups[next],true)}
 if(detail){
  const center=new THREE.Vector3(...detail.position);
  for(const record of boards){const original=record.mesh,matrix=originalWorld.get(original);if(!matrix)continue;original.geometry.computeBoundingBox();if(original.geometry.boundingBox.clone().applyMatrix4(matrix).distanceToPoint(center)>=.43)continue;
   const mesh=new THREE.Mesh(original.geometry.clone(),original.material);mesh.applyMatrix4(matrix);mesh.castShadow=true;mesh.receiveShadow=true;mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,30),edge));detailRoot.add(mesh);
  }
 }
 $('[data-view]').value=next;reset();invalidate();
}
function resize(){const w=Math.max(1,stage.clientWidth),h=Math.max(1,stage.clientHeight);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();reset()}
new ResizeObserver(resize).observe(stage);
$('[data-view]').addEventListener('change',e=>setView(e.target.value));
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();loading.hidden=false;loading.textContent='Podgląd 3D został przerwany. Odśwież, aby wrócić do modelu.'});
window.combstructKrokusy={model,setView,setBattens,setMode:setView,setDetail:setView,reset,getState:()=>({ready:true,view,detail:detail?.id||null,boardCount:boards.length,battensVisible,battenCount:battenLayer.parts.length,battenMetres:battenLayer.quantities.lengthM,battenSheets:battenLayer.quantities.sheets,dimensions,rooms:model.rooms,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,validation:model.validation||null})};
loading.hidden=true;resize();setView('structure');render();
}catch(error){console.error(error);loading.textContent='Nie udało się uruchomić modelu 3D.';loading.setAttribute('role','alert');window.combstructError=String(error)}
