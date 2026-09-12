import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildStructure,P,H,T} from './structure.js';
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
export function beamGeometry(modules=6,{trim=null,cut=null}={}){
 const length=modules*P,lo=trim==='left'?H:0,hi=trim==='right'?length-H:length;
 const slots=[[0,T],[length-T,length]];for(let i=1;i<modules;i++)slots.push([i*P-T,i*P+T]);
 const cut0=cut?.offset||0,cut1=cut0+HALF;
 const xs=[...new Set([lo,hi,...slots.flat(),...(cut?[cut0,cut1]:[])].filter(x=>x>=lo&&x<=hi))].sort((a,b)=>a-b);
 const cells=xs.slice(1).map((b,i)=>{const a=xs[i],m=(a+b)/2;let bottom=-HALF,top=slots.some(([l,h])=>m>l&&m<h)?0:HALF;
  if(cut&&m>cut0&&m<cut1){if(cut.edge==='slotted')top=Math.min(top,HALF-T);else bottom=-HALF+T;}
  return{a,b,bottom,top};});
 const pts=[];for(const c of cells)pts.push(new THREE.Vector2(c.a,c.bottom),new THREE.Vector2(c.b,c.bottom));
 for(const c of [...cells].reverse())pts.push(new THREE.Vector2(c.b,c.top),new THREE.Vector2(c.a,c.top));
 const unique=pts.filter((p,i)=>i===0||!p.equals(pts[i-1]));
 const shape=new THREE.Shape(unique);shape.closePath();const g=new THREE.ExtrudeGeometry(shape,{depth:T,bevelEnabled:false,curveSegments:1});g.translate(0,0,-T/2);return g;
}
function mesh(g,mat=wood){const m=new THREE.Mesh(g,mat);m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,30),edges));return m;}
function stock(total){const out=[];for(let ply=0;ply<2;ply++){let at=0;while(at<total){const n=Math.min(ply===1&&at===0?2:6,total-at);out.push({start:at*P,n,ply,trim:ply===1&&at===0?'left':ply===1&&at+n===total?'right':null});at+=n;}}return out;}
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
  const m=mesh(b.mesh.geometry.clone(),isCross?brown:k===0?wood:teal);m.position.copy(b.mesh.position).sub(center);m.userData.base=m.position.clone();m.userData.sign=b.bounds.getCenter(V()).getComponent(plane)<center.getComponent(plane)?-1:1;(isCross?cross:a).add(m);
 }
 cross.visible=false;
 return{root,direction,focus:new THREE.Box3(V(-size/2,-size/2,-size/2),V(size/2,size/2,size/2)),spread(v){for(const m of a.children){m.position.copy(m.userData.base);m.position.setComponent(plane,m.position.getComponent(plane)+m.userData.sign*v*.20);}cross.visible=false;},crossing(show){cross.visible=show;}};
}
export function manualScene(topic,variant){
 if(['slab','wall','roof'].includes(topic.scene))return gridSample(topic.scene);
 if(topic.scene==='beam'||topic.scene==='connectors'){
  const root=new THREE.Group(),m=mesh(beamGeometry(6,variant||{}),teal);m.position.x=-3*P;root.add(m);
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
 if(topic.scene==='roof-wall')return fromRecords([{surface:'right',axis:1,index:3},{surface:'roof-right',axis:0,index:4}],V(d.halfWidth-HALF,d.ceilingTop,-d.halfDepth+3*P),{plane:2,direction:V(1.5,1.2,2),size:1.2});
 return fromRecords([{surface:'roof-left',axis:0,index:8},{surface:'roof-right',axis:0,index:8}],V(0,d.roofUnderRidgeY+HALF,-d.halfDepth+7*P),{plane:2,direction:V(1.4,1.3,2.4),size:1.3});
}
const surfaceNames={'rear':'Ściana zewnętrzna od tarasu','front':'Ściana zewnętrzna od wejścia','left':'Lewa ściana zewnętrzna','right':'Prawa ściana zewnętrzna','bedroom-right':'Ściana wewnętrzna','bedroom-front':'Przegroda sypialni i łazienki','roof-left':'Lewa połać dachu','roof-right':'Prawa połać dachu'};
export function boardInfo(b){let lo=Infinity,hi=-Infinity;const a=new THREE.Vector3(...b.along),p=b.mesh.geometry.getAttribute('position');for(let i=0;i<p.count;i++){const x=V().fromBufferAttribute(p,i).dot(a);lo=Math.min(lo,x);hi=Math.max(hi,x);}
 return{id:`C30-${b.id.replace('board-','').padStart(4,'0')}`,type:b.connectorCuts.length?'Deska łączeniowa':b.trim?'Deska zakończeniowa':b.custom?'Deska dopasowana do otworu lub skosu':'Deska grzebieniowa',surface:surfaceNames[b.surface]||b.surface,length:Math.round((hi-lo)*1000)+' mm'};
}
export function bimScene(mode,onSelect){
 const model=getModel(),root=new THREE.Group(),d=model.dimensions;let records,center=V(),direction=V(1.4,1.0,1.5),focus;
 if(mode==='house')records=model.boards;
 else{
  center=V(-d.halfWidth+HALF,4*P,-d.halfDepth+4*P);records=model.boards.filter(b=>b.surface==='left'&&b.bounds.distanceToPoint(center)<1.0);direction=V(-2.5,1.2,1.5);focus=new THREE.Box3(V(-1.3,-1.3,-1.3),V(1.3,1.3,1.3));
 }
 const geos=records.map(b=>{const g=b.mesh.geometry.index?b.mesh.geometry.toNonIndexed():b.mesh.geometry.clone();return g.translate(...b.mesh.position.clone().sub(center).toArray());});
 const merged=mergeGeometries(geos,false);geos.forEach(g=>g.dispose());root.add(mesh(merged,wood));
 const selection=new THREE.Mesh(new THREE.BufferGeometry(),selectionMaterial);root.add(selection);let selected;
 const setSelected=b=>{selected=b;selection.geometry.dispose();selection.geometry=b.mesh.geometry.clone();selection.position.copy(b.mesh.position).sub(center);onSelect(boardInfo(b));};
 let finish,fillMaterial;
 if(mode==='wall'){
  fillMaterial=new THREE.MeshStandardMaterial({color:'#ded7bf',roughness:1,transparent:true,opacity:.35,depthWrite:false});
  for(let row=2;row<6;row++)for(let col=2;col<6;col++){const b=new THREE.Mesh(new THREE.BoxGeometry(H-.028,P-2*T-.006,P-2*T-.006),fillMaterial);b.position.set(-d.halfWidth+HALF,(row+.5)*P,-d.halfDepth+(col+.5)*P).sub(center);root.add(b);}
  finish=new THREE.Mesh(new THREE.BoxGeometry(.024,4*P,4*P),new THREE.MeshStandardMaterial({color:'#e3e3dc',roughness:1,transparent:true,opacity:.3,depthWrite:false}));finish.position.set(-d.halfWidth-.024,4*P,-d.halfDepth+4*P).sub(center);root.add(finish);
 }
 const defaultBoard=records.find(b=>b.surface==='left'&&b.axis===1&&b.index===4&&b.start===0)||records[0];setSelected(defaultBoard);
 return{root,direction,focus,annotation:mode==='house'?'Wybierz element, aby zobaczyć jego identyfikator':'Przekrój ściany · konstrukcja, izolacja i wykończenie',selectAt(ray){
  const worldRay=ray.ray.clone();worldRay.origin.add(center);const caster=new THREE.Raycaster(worldRay.origin,worldRay.direction);
  const hits=records.filter(b=>caster.ray.intersectsBox(b.bounds)).flatMap(b=>caster.intersectObject(b.mesh,false).map(h=>({b,d:h.distance}))).sort((a,b)=>a.d-b.d);if(hits[0])setSelected(hits[0].b);
 },next(){setSelected(records[(records.indexOf(selected)+1)%records.length]);},finish(v){if(finish){finish.material.opacity=1-v;finish.visible=v<.999;fillMaterial.opacity=1-v*.78;}},getSelected(){return boardInfo(selected);}};
}
export function materialScene(stage){
 const root=new THREE.Group(),rng=(()=>{let s=627;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};})();
 const palette=['#c0b89e','#657d88','#9b8270','#cfbb9f','#8f9682'];
 if(stage<2){
  for(const c of palette){const coords=[];for(let i=0;i<320;i++){const p=V((rng()-.5)*1.35,(rng()-.5)*.40,(rng()-.5)*1.35);coords.push(...p.toArray(),p.x+(rng()-.5)*.20,p.y+(rng()-.5)*.10,p.z+(rng()-.5)*.20);}root.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(coords,3)),new THREE.LineBasicMaterial({color:c})));}
  if(stage===1){const coords=[];for(let i=0;i<170;i++){let p=V((rng()-.5)*1.4,(rng()-.5)*.46,(rng()-.5)*1.4);for(let j=0;j<7;j++){const q=p.clone().add(V((rng()-.5)*.14,(rng()-.5)*.10,(rng()-.5)*.14));coords.push(...p.toArray(),...q.toArray());p=q;}}root.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(coords,3)),new THREE.LineBasicMaterial({color:'#faf8e9'})));}
 }else{
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;const c=canvas.getContext('2d');c.fillStyle='#ddd5bd';c.fillRect(0,0,512,512);
  for(let i=0;i<11000;i++){const x=rng()*512,y=rng()*512;c.strokeStyle=i%5===0?palette[i%palette.length]:(rng()>.5?'#f2eddb':'#c4bda6');c.lineWidth=.3+rng()*1.1;c.beginPath();c.moveTo(x,y);c.lineTo(x+(rng()-.5)*18,y+(rng()-.5)*18);c.stroke();}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;root.add(new THREE.Mesh(new THREE.BoxGeometry(1.35,.85,1.35),new THREE.MeshStandardMaterial({map:texture,roughness:1})));root.rotation.y=.12;
 }
 return{root,direction:V(1.5,1.3,1.8),focus:new THREE.Box3(V(-1,-.7,-1),V(1,.7,1)),annotation:stage===0?'Wyselekcjonowane włókna tekstylne':stage===1?'Grzybnia przerasta przygotowany substrat':'Kostka kompozytu · schemat materiału'};
}
