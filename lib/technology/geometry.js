import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildStructure,P,H,T} from './structure.js';
import {interiorScene} from './interior.js';
import {createConstruction} from '../construction/core.js';
import {stockSegments} from '../construction/stock-layout.js';
import {roofJointScene} from './roof-joint.js';
import {wallBattens,BATTEN} from '../construction/battens.js';
import {ridgeJointScene} from './ridge-joint.js';
export {P,H,T};
const V=(...v)=>new THREE.Vector3(...v),X=V(1,0,0),Y=V(0,1,0),Z=V(0,0,1),HALF=H/2;
export const wood=new THREE.MeshStandardMaterial({color:'#cba36b',roughness:.8,side:THREE.DoubleSide});
export const teal=new THREE.MeshStandardMaterial({color:'#43948c',roughness:.75,side:THREE.DoubleSide});
const brown=new THREE.MeshStandardMaterial({color:'#94784e',roughness:.85,side:THREE.DoubleSide});
const edges=new THREE.LineBasicMaterial({color:'#66543a',transparent:true,opacity:.5});
const selectionMaterial=new THREE.MeshStandardMaterial({color:'#287c78',roughness:.7,side:THREE.DoubleSide,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2});
const sharedMaterials=new Set([wood,teal,brown,edges,selectionMaterial]);
export function disposeScene(root){const materials=new Set();root.traverse(o=>{o.geometry?.dispose();for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[])if(!sharedMaterials.has(m))materials.add(m);});for(const m of materials){m.map?.dispose();m.dispose();}}
let actualModel;
export function getModel(){if(!actualModel){actualModel=buildStructure({wood,end:wood});actualModel.root.updateMatrixWorld(true);actualModel.boards.forEach(b=>{b.mesh.geometry.computeBoundingBox();b.bounds=b.mesh.geometry.boundingBox.clone().translate(b.mesh.position);});}return actualModel;}

// The same 18/36 mm slots, 24 cm depth and four connector profiles as the house.
// A single closed outline keeps shallow edge cuts visible without internal faces.
export function beamGeometry(modules=6,variant={}){
 const engine=createConstruction({}, {},{connectors:false}),target=new THREE.Group();
 const mesh=engine.addBoard(target,{pixels:modules,start:0,layer:0,...variant},X,Y,Z,V());
 const geometry=mesh.geometry;geometry.translate(0,0,-T/2);return geometry;
}
function mesh(g,mat=wood){const m=new THREE.Mesh(g,mat);m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,30),edges));return m;}
function stock(total){return stockSegments(total).map(p=>({start:p.start,n:p.pixels,ply:p.layer,trim:p.trim}));}
function rib(group,total,origin,along,normal,thick,material=wood){
 for(const s of stock(total)){const g=beamGeometry(s.n,{trim:s.trim});const basis=new THREE.Matrix4().makeBasis(along,normal,thick);g.applyMatrix4(basis);
  const m=mesh(g,material);m.position.copy(origin).addScaledVector(along,s.start).addScaledVector(thick,(s.ply-.5)*T);m.userData.ply=s.ply;m.userData.slotDirection=normal.toArray();group.add(m);}
}
function arrow(group,start,dir){group.add(new THREE.ArrowHelper(dir,start,.36,0x287c78,.095,.048));}
function gridSample(kind){
 const root=new THREE.Group(),a=6*P,b=10*P,first=new THREE.Group(),second=new THREE.Group(),arrows=new THREE.Group();root.add(first,second,arrows);
 for(let j=1;j<10;j++)rib(first,6,V(-a/2,0,-b/2+j*P),X,Y,Z,teal);
 for(let i=1;i<6;i++)rib(second,10,V(-a/2+i*P,0,-b/2),Z,Y.clone().negate(),X,wood);
 for(const z of [-b/2+P,0,b/2-P])arrow(arrows,V(-a/2+P,.16,z),Y);
 const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([V(-a/2,0,-b/2-.12),V(a/2,0,-b/2-.12)]),new THREE.LineBasicMaterial({color:0x287c78}));root.add(line);
 if(kind==='wall')root.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(Y,Z,X));
 if(kind==='roof')root.rotation.z=-35*Math.PI/180;
 const direction=kind==='wall'?V(1.5,1.0,2.6):V(1.4,1.7,1.9);
 return {root,arrows,direction,annotation:kind==='wall'?'Wpusty pionów → na zewnątrz domu':kind==='roof'?'Turkus: krótszy kierunek połaci · wpusty do pokrycia':'Turkus: krótszy kierunek nośny · wpusty do góry',spread(v){second.position.y=v*.65;}};
}
function fromRecords(specs,center,{crossing=[],plane=1,direction=V(1.1,1.8,1.4),size=1.05}={}){
 const root=new THREE.Group(),a=new THREE.Group(),cross=new THREE.Group();root.add(a,cross);const model=getModel();
 const matches=(b,s)=>b.surface===s.surface&&b.axis===s.axis&&b.index===s.index;
 for(const b of model.boards){const k=specs.findIndex(s=>matches(b,s));const isCross=crossing.some(s=>matches(b,s));if(k<0&&!isCross)continue;if(b.bounds.distanceToPoint(center)>.50)continue;
  const m=mesh(b.mesh.geometry.clone(),isCross?brown:specs[k].material||(k===0?wood:teal));m.position.copy(b.mesh.position).sub(center);m.userData.boardId=b.id;m.userData.base=m.position.clone();m.userData.sign=b.bounds.getCenter(V()).getComponent(plane)<center.getComponent(plane)?-1:1;(isCross?cross:a).add(m);
 }
 cross.visible=false;
 return{root,direction,focus:new THREE.Box3(V(-size/2,-size/2,-size/2),V(size/2,size/2,size/2)),spread(v){for(const m of a.children){m.position.copy(m.userData.base);m.position.setComponent(plane,m.position.getComponent(plane)+m.userData.sign*v*.20);}cross.visible=false;},crossing(show){cross.visible=show;}};
}
function battensScene(mode='outside'){
 const root=new THREE.Group(),outside=new THREE.Group(),inside=new THREE.Group();root.add(outside,inside);
 const stripMaterial=teal.clone(),insulationMaterial=new THREE.MeshStandardMaterial({color:'#dfd9c5',roughness:1});
 const addBox=(parent,size,position,mat)=>{const m=mesh(new THREE.BoxGeometry(...size),mat);m.position.set(...position);parent.add(m);return m;};
 const section=mode==='section',L=6*P,half=L/2;
 let pieces=[];
 if(section){
  // A short cut through an uninterrupted rib: two 18 mm plies, a 60 mm face strip.
  for(const x of [-T/2,T/2])addBox(root,[T,.12,H],[x,0,0],wood);
  addBox(outside,[BATTEN.width,.12,BATTEN.thickness],[0,0,HALF+BATTEN.thickness/2],stripMaterial);
 }else{
  const ribs=[];
  for(let i=1;i<6;i++){
   rib(root,6,V(-half+i*P,-half,0),Y,Z,X,wood);
   rib(root,6,V(-half,-half+i*P,0),X,Z.clone().negate(),Y,wood);
   ribs.push({axis:1,index:i,center:-half+i*P,intervals:[[-half,half]]},{axis:0,index:i,center:-half+i*P,intervals:[[-half,half]]});
  }
  for(let i=0;i<6;i++)for(let j=0;j<6;j++){
   // Leave one cell open as a cutaway to expose the wall depth and opposite face.
   if(i===2&&j===3)continue;
   const x0=-half+i*P+(i?T:.001),x1=-half+(i+1)*P-(i===5?.001:T);
   const y0=-half+j*P+(j?T:.001),y1=-half+(j+1)*P-(j===5?.001:T);
   addBox(root,[x1-x0-.002,y1-y0-.002,H-.002],[(x0+x1)/2,(y0+y1)/2,0],insulationMaterial);
  }
  pieces=wallBattens(ribs);
  for(const p of pieces){const exterior=p.side==='exterior';addBox(exterior?outside:inside,[p.u1-p.u0,p.v1-p.v0,BATTEN.thickness],[(p.u0+p.u1)/2,(p.v0+p.v1)/2,(exterior?1:-1)*(HALF+BATTEN.thickness/2)],stripMaterial);}
 }
 let spread=0;
 return {root,direction:section?V(.35,5,-1.3):mode==='inside'?V(-1,.7,-2.5):V(1,.7,2.5),
  annotation:section?'Przekrój T: para 36 mm + łata 60 × 18 mm':mode==='inside'?'Od środka: łaty poziomo, na żebrach poziomych':'Od zewnątrz: łaty pionowo, na żebrach pionowych',
  spread(value){spread=value;outside.position.z=value*(section?.09:.55);inside.position.z=-value*.55;},
  getBattenState:()=>({mode,spread,stock:BATTEN,exterior:section?1:pieces.filter(p=>p.side==='exterior').length,interior:pieces.filter(p=>p.side==='interior').length,sectionRibThickness:2*T})
 };
}
export function manualScene(topic,variant,roofOptions,battenMode){
 if(topic.scene==='battens')return battensScene(battenMode);
 if(topic.scene==='ridge')return ridgeJointScene(roofOptions,{wood,end:wood,roof:teal,edges});
 if(topic.scene==='roof-wall')return roofJointScene(roofOptions,{wood,end:wood,roof:teal,edges});
 if(['slab','wall','roof'].includes(topic.scene))return gridSample(topic.scene);
 if(topic.scene==='beam'||topic.scene==='connectors'){
  const root=new THREE.Group(),m=mesh(beamGeometry(variant?.modules||6,variant||{}),teal);m.position.x=-3*P;root.add(m);
  return{root,direction:V(.5,.6,3),annotation:topic.scene==='connectors'?variant.description:'Deska grzebieniowa · nacięcia do połowy wysokości'};
 }
 if(topic.scene==='continuity'){
  const root=new THREE.Group();rib(root,12,V(-6*P,0,0),X,Y,Z,wood);root.children.forEach(m=>m.material=m.userData.ply?teal:wood);
  return{root,direction:V(.6,.85,3),spread(v){root.children.forEach(m=>m.position.z=(m.userData.ply-.5)*(T+v*.42));},annotation:'Dwie warstwy · przesunięcie styków o 2 moduły'};
 }
 if(topic.scene==='cross'){
  const root=new THREE.Group(),a=new THREE.Group(),b=new THREE.Group();root.add(a,b);rib(a,4,V(-2*P,0,0),X,Y,Z,teal);rib(b,4,V(0,0,-2*P),Z,Y.clone().negate(),X,wood);
  return{root,direction:V(1.4,1.6,2),spread(v){b.position.y=v*.65;},annotation:'Wpusty przeciwnych rodzin żeber otwierają się w przeciwne strony'};
 }
 const model=getModel(),d=model.dimensions;
 if(topic.scene==='joint'){const j=model.joints.find(j=>j.id===topic.joint);return fromRecords(j.members,V(...j.position),{crossing:j.crossingMembers||[],plane:j.planeAxis,direction:V(...j.viewDirection)});}
 if(topic.scene==='corner')return fromRecords([{surface:'front',axis:0,index:3},{surface:'right',axis:0,index:3}],V(d.halfWidth-HALF,3*P,d.halfDepth-HALF),{plane:1,direction:V(1.4,2,1.6)});
 throw new Error('Unknown handbook scene: '+topic.scene);
}
const surfaceNames={'rear':'Ściana zewnętrzna od tarasu','front':'Ściana zewnętrzna od wejścia','left':'Lewa ściana zewnętrzna','right':'Prawa ściana zewnętrzna','bedroom-right':'Ściana wewnętrzna','bedroom-front':'Przegroda sypialni i łazienki','roof-left':'Lewa połać dachu','roof-right':'Prawa połać dachu'};
export function boardInfo(b){let lo=Infinity,hi=-Infinity;const a=new THREE.Vector3(...b.along),p=b.mesh.geometry.getAttribute('position');for(let i=0;i<p.count;i++){const x=V().fromBufferAttribute(p,i).dot(a);lo=Math.min(lo,x);hi=Math.max(hi,x);}
 return{id:`C30-${b.id.replace('board-','').padStart(4,'0')}`,type:b.connectorCuts.length?'Deska łączeniowa':b.trim?'Deska zakończeniowa':b.custom?'Deska dopasowana do otworu lub skosu':'Deska grzebieniowa',surface:surfaceNames[b.surface]||b.surface,length:Math.round((hi-lo)*1000)+' mm'};
}
export function bimScene(mode,onSelect){
 const model=getModel();if(mode==='wall')return interiorScene(model,onSelect,boardInfo);
 const root=new THREE.Group(),records=model.boards;
 const geos=records.map(b=>{const g=b.mesh.geometry.index?b.mesh.geometry.toNonIndexed():b.mesh.geometry.clone();return g.translate(...b.mesh.position.toArray());});
 const merged=mergeGeometries(geos,false);geos.forEach(g=>g.dispose());root.add(mesh(merged,wood));
 const selection=new THREE.Mesh(new THREE.BufferGeometry(),selectionMaterial);root.add(selection);let selected;
 const setSelected=b=>{selected=b;selection.geometry.dispose();selection.geometry=b.mesh.geometry.clone();selection.position.copy(b.mesh.position);onSelect(boardInfo(b));};
 setSelected(records.find(b=>b.surface==='left'&&b.axis===1&&b.index===4&&b.start===0)||records[0]);
 return{root,direction:V(1.4,1.0,1.5),annotation:'Wybierz element, aby zobaczyć jego identyfikator',selectAt(ray){
  const hits=records.filter(b=>ray.ray.intersectsBox(b.bounds)).flatMap(b=>ray.intersectObject(b.mesh,false).map(h=>({b,d:h.distance}))).sort((a,b)=>a.d-b.d);if(hits[0])setSelected(hits[0].b);
 },next(){setSelected(records[(records.indexOf(selected)+1)%records.length]);},getSelected(){return boardInfo(selected);}};
}
