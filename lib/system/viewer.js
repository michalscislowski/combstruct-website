
import * as THREE from 'three';
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {wallBattens,BATTEN} from "../construction/battens.js";
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
const zero=new THREE.Vector3(0,0,0);
const H=.24,D=.12,PIXEL=2.5/6;
function beamGeometry(pixels,trimSide,limit,minCut=0,slotOffsets={}){
const shape=new THREE.Shape();const L=pixels*PIXEL;
shape.moveTo(0,0);shape.lineTo(L,0);shape.lineTo(L,D);shape.lineTo(L-.018,D);shape.lineTo(L-.018,H);
for(let i=pixels-1;i>=1;i--){let c=i*PIXEL+(slotOffsets[i]||0);shape.lineTo(c+.018,H);shape.lineTo(c+.018,D);shape.lineTo(c-.018,D);shape.lineTo(c-.018,H)}
shape.lineTo(.018,H);shape.lineTo(.018,D);shape.lineTo(0,D);shape.closePath();
let profile=shape;
if(trimSide){
const boundary=trimSide==='left'?H:L-H;
const inside=p=>trimSide==='left'?p.x>=boundary:p.x<=boundary;
const points=shape.getPoints();
if(points[0].equals(points[points.length-1]))points.pop();
const clipped=[];
for(let i=0;i<points.length;i++){
const a=points[i],b=points[(i+1)%points.length],ai=inside(a),bi=inside(b);
if(ai)clipped.push(a);
if(ai!==bi)clipped.push(new THREE.Vector2(boundary,a.y+(b.y-a.y)*(boundary-a.x)/(b.x-a.x)));
}
profile=new THREE.Shape(clipped);profile.closePath();
}
if(limit!==undefined&&limit<L){
const points=profile.getPoints();if(points[0].equals(points.at(-1)))points.pop();const clipped=[];
for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length],ai=a.x<=limit,bi=b.x<=limit;if(ai)clipped.push(a);if(ai!==bi)clipped.push(new THREE.Vector2(limit,a.y+(b.y-a.y)*(limit-a.x)/(b.x-a.x)))}
profile=new THREE.Shape(clipped);profile.closePath();
}
if(minCut>0){
const points=profile.getPoints();if(points[0].equals(points.at(-1)))points.pop();const clipped=[];
for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length],ai=a.x>=minCut,bi=b.x>=minCut;if(ai)clipped.push(a);if(ai!==bi)clipped.push(new THREE.Vector2(minCut,a.y+(b.y-a.y)*(minCut-a.x)/(b.x-a.x)))}
profile=new THREE.Shape(clipped);profile.closePath();
}
const geometry=new THREE.ExtrudeGeometry(profile,{depth:.018,bevelEnabled:false,curveSegments:24});
geometry.attributes.uv.array.forEach((v,i,arr)=>{arr[i]=i%2===0?v/2.5:v/H});
geometry.translate(0,-H/2,0);return geometry;
}
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
const total=12.5,depth=10,wallHeight=9*PIXEL,shift=.04,capTop=wallHeight+.018;
const supportY=8*PIXEL+.018,slabTop=supportY+H;
const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),Z=new THREE.Vector3(0,0,1);
function segments(pixels,offsetPixels=3){
const out=[];
for(let layer=0;layer<2;layer++){
let pos=0;
if(layer===1){out.push({pixels:offsetPixels,start:0,layer,trim:'left'});pos=offsetPixels}
while(pos<pixels){const count=Math.min(6,pixels-pos);out.push({pixels:count,start:pos*PIXEL,layer,trim:count<6&&pos+count===pixels?'right':null});pos+=count}
}
return out;
}
function makeBoard(p,along,normal,thick,origin,phase=0,keepTop=false){
const geo=beamGeometry(p.pixels,keepTop&&p.trim==='right'?null:p.trim,p.limit,p.minCut||0,p.slotOffsets);
geo.applyMatrix4(new THREE.Matrix4().makeBasis(along,normal,thick));
const mesh=new THREE.Mesh(geo,p.trim?endingMaterial:material);
const layer=p.layer^phase;
mesh.position.copy(origin).addScaledVector(along,p.start).addScaledVector(thick,layer===0?-.018:0);
mesh.userData.layer=layer;mesh.userData.start=p.start;mesh.userData.stockLength=p.pixels*PIXEL;return mesh;
}
function lattice(wp,hp,origin,u,v,n,phaseU=0,phaseV=0,keepTop=false,offsetU=3,offsetV=3,edgeInset=0,openings=[],bounds=null,endClearance=0){
const group=new THREE.Group();group.position.copy(origin);
for(let axis=0;axis<2;axis++){
const length=axis===0?wp:hp,count=axis===0?hp:wp,along=axis===0?u:v,thick=axis===0?v:u,normal=n.clone().multiplyScalar(axis===0?1:-1);
for(let i=1;i<count;i++)for(const p of segments(length,axis===0?offsetU:offsetV)){
let piece=p;
const clearance=Array.isArray(endClearance)?endClearance[axis]:(axis===0?endClearance:0);if(clearance&&Math.abs(p.start+p.pixels*PIXEL-length*PIXEL)<1e-7)piece={...p,limit:p.pixels*PIXEL-(p.trim==='right'?H:0)-clearance};
if(edgeInset&&axis===1){const slotOffsets={};for(let k=1;k<p.pixels;k++){const globalSlot=Math.round(p.start/PIXEL)+k;if(globalSlot===1)slotOffsets[k]=edgeInset;if(globalSlot===hp-1)slotOffsets[k]=-edgeInset}piece={...p,slotOffsets}}
const transverse=i*PIXEL+(edgeInset&&axis===0?(i===1?edgeInset:i===count-1?-edgeInset:0):0);
const phase=axis===0?phaseU:phaseV,layer=p.layer^phase;
const tMin=transverse+(layer===0?-.018:0);
if(bounds&&transverse+.018>bounds[1-axis]+1e-8)continue;
for(const fragment of openedPieces(keepTop&&axis===1&&piece.trim==='right'?{...piece,trim:null}:piece,axis,tMin,openings,bounds)){
const mesh=makeBoard(fragment,along,normal,thick,thick.clone().multiplyScalar(transverse),phase,keepTop&&axis===1);
mesh.userData.axis=axis;mesh.userData.index=i;group.add(mesh);
}
}
}
return group;
}
// Subtract openings in the actual solids, keeping the original slot origin in each stock piece.
function openedPieces(p,axis,tMin,holes=[],bounds=null){
let lo=p.minCut||0,hi=p.limit??p.pixels*PIXEL;
if(bounds){hi=Math.min(hi,bounds[axis]-p.start);p={...p,trim:null}}
if(p.trim==='left')lo=Math.max(lo,H);
if(p.trim==='right')hi=Math.min(hi,p.pixels*PIXEL-H);
let intervals=hi>lo+1e-7?[[lo,hi]]:[];
for(const h of holes){
const t0=axis===0?h.v0:h.u0,t1=axis===0?h.v1:h.u1;
if(tMin+.018<=t0+1e-8||tMin>=t1-1e-8)continue;
const a=(axis===0?h.u0:h.v0)-p.start,b=(axis===0?h.u1:h.v1)-p.start;
intervals=intervals.flatMap(([l,r])=>b<=l||a>=r?[[l,r]]:[[l,Math.min(r,a)],[Math.max(l,b),r]].filter(([x,y])=>y>x+1e-7));
}
return intervals.map(([minCut,limit])=>({...p,minCut,limit}));
}
const windowHole=(a,b,c,d)=>({u0:a*PIXEL+.018,u1:b*PIXEL-.018,v0:c*PIXEL+.018,v1:d*PIXEL-.018});
const glass=(a,b)=>({u0:a*PIXEL+.018,u1:b*PIXEL-.018,v0:H,v1:7*PIXEL-.018});
const wallOpenings=[
[windowHole(2,6,3,7),windowHole(8,10,3,7),windowHole(12,18,2,7),windowHole(24,28,2,7)],
[windowHole(2,4,3,7),windowHole(6,11,3,7),glass(15,21)],
[glass(2,9),glass(16,19),windowHole(24,28,2,7)],
[windowHole(2,7,2,7),windowHole(15,21,2,7)]
];
// One L-shaped floor: the terrace uses the same axes and staggered stock sequence.
const floor=new THREE.Group();floor.position.set(-total/2,.12,-depth/2);
for(let axis=0;axis<2;axis++)for(let i=1;i<30;i++){
const length=axis===0?(i<24?30:18):(i<18?30:24);
const along=axis===0?X:Z,thick=axis===0?Z:X,normal=Y.clone().multiplyScalar(axis===0?1:-1);
for(const p of segments(length)){
const mesh=makeBoard(p,along,normal,thick,thick.clone().multiplyScalar(i*PIXEL),1);
mesh.userData.axis=axis;mesh.userData.index=i;floor.add(mesh);
}
}
scene.add(floor);
const walls=[
lattice(30,9,new THREE.Vector3(-total/2+.018,0,-depth/2+.12),X,Y,Z,0,1,true,3,3,0,wallOpenings[0],null,.018),
lattice(24,9,new THREE.Vector3(-total/2+.12,0,-depth/2+.018),Z,Y,X,1,1,true,3,3,0,wallOpenings[1],null,.036),
lattice(30,9,new THREE.Vector3(-total/2+.018,0,depth/2-.12-.018),X,Y,Z.clone().negate(),0,1,true,3,3,0,wallOpenings[2],null,.018),
lattice(24,9,new THREE.Vector3(total/2-.12,0,-depth/2+.018),Z,Y,X.clone().negate(),1,1,true,3,3,0,wallOpenings[3],null,.036)
];walls.forEach(w=>scene.add(w));
for(let wi=0;wi<4;wi++){
const along=wi%2===0?X:Z,inward=(wi===0?Z:wi===1?X:wi===2?Z.clone().negate():X.clone().negate());
for(const p of segments(wi%2===0?30:24)){
const capPiece=Math.abs(p.start+p.pixels*PIXEL-(wi%2===0?30:24)*PIXEL)<1e-7?{...p,limit:p.pixels*PIXEL-(p.trim==='right'?H:0)-(wi%2?.036:.018)}:p;
const m=makeBoard(capPiece,along,inward,Y,new THREE.Vector3(0,wallHeight,0),wi%2===0?0:1);m.userData.axis=0;m.userData.index=9;walls[wi].add(m);
}
}
const ceiling=lattice(30,24,new THREE.Vector3(-total/2,supportY+.12,-depth/2),X,Z,Y,0,0,false,3,3,0,[],null,[0,.018]);scene.add(ceiling);
const terrace=new THREE.Group(); // Terrace geometry is part of the continuous floor.
// Interior wall profiles share the building's module origin, including their top bearing row.
// Wall depth sits inside a slab cell; its vertical pairs pass beside the other slab direction.
const partitions=[new THREE.Group()];partitions.forEach(g=>scene.add(g));
const partitionMaterial=material.clone();
const partitionEnding=endingMaterial.clone();
const snapInterior=(value,origin,level=0)=>origin+Math.round((value-origin-shift-PIXEL/2)/PIXEL)*PIXEL+shift+PIXEL/2;
function partition(level,axis,start,end,fixed,doors=[]){
const floorSurface=H,base=0,top=8*PIXEL,capRow=8;
const uOrigin=(axis===0?-total/2:-depth/2)+-.018,modules=axis===0?30:24;
const along=axis===0?X:Z,normal=(axis===0?Z:X).clone().negate();
const origin=axis===0?new THREE.Vector3(uOrigin,0,fixed):new THREE.Vector3(fixed,0,uOrigin);
const panel=new THREE.Group();panel.position.copy(origin);panel.userData={level,axis,base,top,fixed,start,end};
const minU=start-uOrigin,maxU=end-uOrigin;
const headerRow=Math.ceil((floorSurface+2.05)/PIXEL);
const holes=doors.map(([a,b])=>({u0:Math.round((start+a-uOrigin)/PIXEL)*PIXEL+.018,u1:Math.round((start+b-uOrigin)/PIXEL)*PIXEL-.018,v0:floorSurface,v1:headerRow*PIXEL-.018}));
panel.userData.holes=holes;panel.userData.uOrigin=uOrigin;
function add(p,direction,n,thick,at,beamAxis,index){
const m=makeBoard(p,direction,n,thick,at);m.material=p.trim||p.minCut>1e-8||p.limit<p.pixels*PIXEL-1e-8?partitionEnding:partitionMaterial;
m.userData={...m.userData,partition:true,endTrim:p.trim||null,axis:beamAxis,index,cap:beamAxis===0&&index===capRow};panel.add(m);
}
// Horizontal rows support slab undersides; vertical pairs continue through the full slab depth.
for(let row=1;row<=capRow;row++)for(const stock of segments(modules)){
const p={...stock,trim:null,minCut:Math.max(0,minU-stock.start),limit:Math.min(stock.pixels*PIXEL,maxU-stock.start)};
if(p.limit<=p.minCut+1e-8)continue;
const tMin=row*PIXEL+(p.layer===0?-.018:0);
for(const f of openedPieces(p,0,tMin,holes))add(f,along,normal,Y,Y.clone().multiplyScalar(row*PIXEL),0,row);
}
// Use the same stock segmentation and 24 cm end pieces as the other comb lattices.
const verticalModules=8,verticalOffset=3;
for(let col=1;col<modules;col++){
const u=col*PIXEL;if(u-.018<minU-1e-8||u+.018>maxU+1e-8)continue;
for(const stock of segments(verticalModules,verticalOffset)){
const p={...stock,start:base+stock.start};
for(const f of openedPieces(p,1,u+(p.layer===0?-.018:0),holes))add(f,Y,normal.clone().negate(),along,along.clone().multiplyScalar(u),1,col);
}
}
partitions[level].add(panel);return panel;
}
const groundSpine=snapInterior(.665,-total/2),bedSpine=snapInterior(2.332,-total/2),wetSpine=snapInterior(-1.835,-total/2);
const rearCross=snapInterior(-1.418,-depth/2),bedCross=snapInterior(-.168,-depth/2),wetFront=snapInterior(2.748,-depth/2),wetMiddle=snapInterior(1.082,-depth/2);
function wall(axis,start,end,fixed,doorCenters=[]){
const u0=(axis===0?-total/2:-depth/2)-.018;
const doors=doorCenters.map(c=>{const j=Math.round((c-u0)/PIXEL-1.5);return [u0+j*PIXEL+.018-start,u0+(j+3)*PIXEL-.018-start]});
return partition(0,axis,start,end,fixed,doors);
}
// A short night hall serves all three bedrooms and both sanitary rooms.
wall(1,-4.756,4.738,bedSpine,[1.75,-.9]);
wall(0,bedSpine+.12,6.006,bedCross);
wall(1,-4.756,4.738,wetSpine,[3.72]);
wall(0,wetSpine+.12,bedSpine-.12,rearCross,[1.45]);
wall(1,rearCross+.12,wetFront-.12,groundSpine,[.25,1.92]);
wall(0,wetSpine+.12,groundSpine-.12,wetFront);
wall(0,groundSpine+.12,bedSpine-.12,wetFront,[1.45]);
wall(0,wetSpine+.12,groundSpine-.12,wetMiddle);
const utilityX=snapInterior(-3.502,-total/2),utilityZ=snapInterior(-3.085,-depth/2);
wall(1,-4.756,utilityZ-.12,utilityX);
wall(0,-6.006,utilityX-.12,utilityZ,[-4.65]);
const roomRects=[
{name:'Sypialnia 1',x0:bedSpine+.12,x1:6.006,z0:bedCross+.12,z1:4.756},
{name:'Sypialnia 2',x0:bedSpine+.12,x1:6.006,z0:-4.756,z1:bedCross-.12},
{name:'Pokój 3 / gabinet',x0:wetSpine+.12,x1:bedSpine-.12,z0:-4.756,z1:rearCross-.12},
{name:'Łazienka',x0:wetSpine+.12,x1:groundSpine-.12,z0:rearCross+.12,z1:wetMiddle-.12},
{name:'WC',x0:wetSpine+.12,x1:groundSpine-.12,z0:wetMiddle+.12,z1:wetFront-.12},
{name:'Wiatrołap',x0:wetSpine+.12,x1:bedSpine-.12,z0:wetFront+.12,z1:4.756},
{name:'Hol nocny',x0:groundSpine+.12,x1:bedSpine-.12,z0:rearCross+.12,z1:wetFront-.12},
{name:'Pralnia',x0:-6.006,x1:utilityX-.12,z0:-4.756,z1:utilityZ-.12}
];
const furnishings=[
['Łóżko 160 × 200',4.25,3.35,1.6,2,'bed'],['Szafa 240 × 60',4.5,bedCross+.42,2.4,.6,'storage'],
['Łóżko 90 × 200',5.35,-3.45,.9,2,'bed'],['Biurko 120 × 60',3.3,-4.4,1.2,.6,'desk'],['Szafa 240 × 60',4.5,bedCross-.42,2.4,.6,'storage'],
['Łóżko 90 × 200',-.55,-3.55,2,.9,'bed'],['Biurko 120 × 60',1.4,-4.4,1.2,.6,'desk'],['Szafa 220 × 60',-.615,rearCross-.42,2.2,.6,'storage'],
['Prysznic 120 × 90',wetSpine+.72,rearCross+.57,1.2,.9,'shower'],['Umywalka',wetSpine+.42,.32,.6,1.2,'basin'],['WC',.13,rearCross+.47,.42,.7,'wc'],
['WC',wetSpine+.47,1.9,.7,.42,'wc'],['Umywalka',-.55,wetFront-.3,.55,.35,'basin'],
['Szafa wejściowa 180 × 60',-.65,4.43,1.8,.6,'storage'],['Ławka',bedSpine-.32,3.9,.4,1.2,'seat'],
['Pralka + suszarka w słupku',-5.6,-4.35,.65,.7,'washer'],['Technika / schowek',utilityX-.45,-4.1,.65,1.2,'storage'],
['Blat kuchenny',-5.7,-1.6,.6,2.6,'counter'],['Wyspa 80 × 180',-3.7,-1.95,.8,1.8,'island'],['Lodówka',-2.35,-4.4,.65,.65,'fridge'],
['Stół 90 × 160',-4.25,.75,.9,1.6,'table'],['Sofa 220 × 95',-5.48,3.15,.95,2.2,'sofa'],['Stolik',-4.0,3.1,.65,1.1,'table'],['TV',-2.10,2.15,.24,1.6,'tv']
];
const surfaces=[floor,...walls,ceiling,terrace,...partitions];
const boardCount=surfaces.reduce((n,g)=>{g.traverse(m=>{if(m.isMesh)n++});return n},0);
// Only actual profile edges: no triangulation diagonals on the broad faces.
const edgeMaterial=new THREE.LineBasicMaterial({transparent:true,opacity:.88});
function updateEdges(){
const probe=document.createElement('span');probe.style.color='var(--foreground)';root.appendChild(probe);
edgeMaterial.color.set(getComputedStyle(probe).color);probe.remove();

}
updateEdges();
const planWalls=partitions[0].children.map(g=>({...g.userData}));
// Insulation is generated before batching, against the actual structural bounds.
scene.updateMatrixWorld(true);
const solidBounds=[];for(const surface of surfaces)surface.traverse(m=>{if(m.isMesh)solidBounds.push(new THREE.Box3().setFromObject(m))});
const insulationMaterial=new THREE.MeshStandardMaterial({roughness:1,metalness:0});
function insulationColor(){const probe=document.createElement('span');probe.style.color='var(--yellow)';root.appendChild(probe);insulationMaterial.color.set(getComputedStyle(probe).color);probe.remove();insulationMaterial.color.lerp(new THREE.Color(.8,.8,.8),.65)}
insulationColor();
function subtractBox(box,cut){
const lo=box.min.clone().max(cut.min),hi=box.max.clone().min(cut.max);
if(hi.x-lo.x<1e-7||hi.y-lo.y<1e-7||hi.z-lo.z<1e-7)return [box];
const out=[],core=box.clone();for(const axis of ['x','y','z']){
if(lo[axis]>core.min[axis]+1e-7){const part=core.clone();part.max[axis]=lo[axis];out.push(part);core.min[axis]=lo[axis]}
if(hi[axis]<core.max[axis]-1e-7){const part=core.clone();part.min[axis]=hi[axis];out.push(part);core.max[axis]=hi[axis]}
}return out;
}
const insulationLayers=[],occupiedInsulation=[];let insulationCount=0;
function insulate(source,wp,hp,u,v,n,holes=[],mask=()=>true){
const boxes=[],origin=source.position.clone();
const worldBox=(a,b,c,d)=>{const center=origin.clone().addScaledVector(u,(a+b)/2).addScaledVector(v,(c+d)/2);const size=new THREE.Vector3().addScaledVector(u,b-a).addScaledVector(v,d-c).addScaledVector(n,H-.002);size.set(Math.abs(size.x),Math.abs(size.y),Math.abs(size.z));return new THREE.Box3().setFromCenterAndSize(center,size)};
const apertures=holes.map(h=>worldBox(h.u0,h.u1,h.v0,h.v1).expandByScalar(.001));
for(let j=0;j<hp;j++)for(let i=0;i<wp;i++){
if(!mask(i,j))continue;
const cell=worldBox(i*PIXEL+(i? .019:.001),(i+1)*PIXEL-(i===wp-1?.001:.019),j*PIXEL+(j?.019:.001),(j+1)*PIXEL-(j===hp-1?.001:.019));
let pieces=[cell];
const cutters=[...apertures,...solidBounds,...occupiedInsulation].filter(b=>b.intersectsBox(cell));
for(const cutter of cutters){pieces=pieces.flatMap(b=>subtractBox(b,cutter));if(!pieces.length)break}
for(const piece of pieces){const size=piece.getSize(new THREE.Vector3());if(Math.min(size.x,size.y,size.z)<.003)continue;piece.expandByScalar(-.0003);boxes.push(piece);occupiedInsulation.push(piece)}
}
const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),insulationMaterial,boxes.length),matrix=new THREE.Matrix4(),q=new THREE.Quaternion();
boxes.forEach((b,i)=>{matrix.compose(b.getCenter(new THREE.Vector3()).sub(origin),q,b.getSize(new THREE.Vector3()));mesh.setMatrixAt(i,matrix)});
mesh.instanceMatrix.needsUpdate=true;mesh.position.copy(origin);scene.add(mesh);insulationCount+=boxes.length;insulationLayers.push({source,mesh,boxes});
}
insulate(floor,30,30,X,Z,Y,[],(i,j)=>j<24||i<18);
for(let i=0;i<4;i++)insulate(walls[i],i%2===0?30:24,9,i%2===0?X:Z,Y,i%2===0?Z:X,wallOpenings[i]);
insulate(ceiling,30,24,X,Z,Y);

// Group repeated board profiles into instanced batches, preserving original final transforms.
const batches=new Map(),records=[];scene.updateMatrixWorld(true);
for(const surface of surfaces){surface.traverse(m=>{if(!m.isMesh)return;const a=m.geometry.attributes.position.array;let hash=2166136261;for(let k=0;k<a.length;k++){hash^=Math.round(a[k]*1e6);hash=Math.imul(hash,16777619)}const key=hash+':'+a.length+':'+m.material.uuid;
if(!batches.has(key))batches.set(key,{geometry:m.geometry,material:m.material,list:[]});
const pos=new THREE.Vector3(),rot=new THREE.Quaternion(),scale=new THREE.Vector3();m.matrixWorld.decompose(pos,rot,scale);
const bounds=new THREE.Box3().setFromObject(m),center=bounds.getCenter(new THREE.Vector3());
let start=35,span=10;if(surface===floor){start=24;span=9}else if(surface===ceiling){start=47;span=6}
const rank=surface===floor?(m.userData.axis===0?(m.userData.index||1)/60:.5+(m.userData.index||1)/60):surface===ceiling?(center.x+6.3)/12.7:Math.max(0,Math.min(1,center.y/3.8));
const record={pos,rot,scale,bottom:bounds.min.y,source:surface,axis:m.userData.axis||0,index:m.userData.index||0,stockStart:m.userData.start||0,layer:m.userData.layer||0,start:start+rank*span,offset:surface===floor?new THREE.Vector3(0,1.8,2):new THREE.Vector3(0,3,0)};batches.get(key).list.push(record);records.push(record);
});scene.remove(surface)}
for(const b of batches.values()){b.mesh=new THREE.InstancedMesh(b.geometry,b.material,b.list.length);b.mesh.frustumCulled=false;scene.add(b.mesh)}
for(const l of insulationLayers){l.mesh.frustumCulled=false;l.targets=l.boxes.map(b=>({pos:b.getCenter(new THREE.Vector3()).sub(l.source.position),size:b.getSize(new THREE.Vector3())}));l.offset=l.source===floor||l.source===ceiling?new THREE.Vector3(0,2.2,0):new THREE.Vector3(l.source.position.x,0,l.source.position.z).normalize().multiplyScalar(2.2)}
const ease=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)};
const mat=new THREE.Matrix4(),quat=new THREE.Quaternion(),vec=new THREE.Vector3(),sc=new THREE.Vector3();
// Close-up: a sheet becomes five notched panels. Kerf/offcut removal is illustrative.
const intro=new THREE.Group();scene.add(intro);const strips=[],cutoffs=[];
const sheet=new THREE.Mesh(new THREE.BoxGeometry(2.5,.018,1.25),material);sheet.position.set(0,.009,0);intro.add(sheet);
for(let i=0;i<5;i++){
const raw=new THREE.Mesh(new THREE.BoxGeometry(2.5,.018,.24),material);intro.add(raw);
const cut=makeBoard({pixels:6,start:0,layer:0},X,Z,Y,new THREE.Vector3(-1.25,.018,0));intro.add(cut);strips.push({raw,cut,i});
for(let k=0;k<7;k++){const chip=new THREE.Mesh(new THREE.BoxGeometry(k===0||k===6?.018:.036,.018,.12),endingMaterial);chip.userData={i,k};intro.add(chip);cutoffs.push(chip)}
}
const pair=new THREE.Group();scene.add(pair);const pairBoards=[];
for(const p of segments(9,3)){const m=makeBoard(p,X,Y,Z,new THREE.Vector3(-1.875,.12,0));pair.add(m);pairBoards.push({m,target:m.position.clone(),layer:p.layer,stockStart:p.start,trim:p.trim})}
pairBoards.sort((a,b)=>{const rank=r=>r.stockStart===0&&r.layer===0?0:r.stockStart>0&&r.layer===1?1:r.stockStart>0?2:3;return rank(a)-rank(b)});
const sample=lattice(9,6,new THREE.Vector3(-1.875,.12,-1.25),X,Z,Y);scene.add(sample);
const sampleBoards=sample.children.filter(m=>m.isMesh).map(m=>({m,target:m.position.clone()}));
const activeMaterial=new THREE.MeshBasicMaterial({color:0xffd36b,wireframe:true,transparent:true,opacity:.6,depthTest:false});
const activeBoard=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),activeMaterial);activeBoard.renderOrder=10;activeBoard.visible=false;scene.add(activeBoard);
for(const m of [...pairBoards.map(r=>r.m),...sampleBoards.map(r=>r.m),...strips.map(r=>r.cut)])m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,25),edgeMaterial));
function highlight(m){m.updateWorldMatrix(true,false);activeBoard.geometry=m.geometry;m.matrixWorld.decompose(activeBoard.position,activeBoard.quaternion,activeBoard.scale);activeBoard.visible=true;}
// Architectural finish layers use the same opening coordinates as the structural model.
function color(token){const p=document.createElement('span');p.style.color='var('+token+')';root.appendChild(p);const c=new THREE.Color(getComputedStyle(p).color);p.remove();return c}
const plaster=new THREE.MeshStandardMaterial({color:color('--background').lerp(color('--yellow'),.055),roughness:.9});
const stone=new THREE.MeshStandardMaterial({color:color('--muted').lerp(color('--yellow'),.09),roughness:.8});
const metal=new THREE.MeshStandardMaterial({color:color('--foreground'),metalness:.5,roughness:.35});
const glassMaterial=new THREE.MeshPhysicalMaterial({color:color('--blue').lerp(color('--background'),.65),transparent:true,opacity:.42,metalness:.2,roughness:.12,side:THREE.DoubleSide,depthWrite:false});
const wood=new THREE.MeshStandardMaterial({color:color('--orange').multiplyScalar(.32),roughness:.78});
const greenery=new THREE.MeshStandardMaterial({color:color('--green').lerp(color('--muted'),.68).multiplyScalar(.45),roughness:1});
// Seamless procedural finish maps, with world-scaled UVs on the facade panels.
function surfaceMap(kind){const c=document.createElement('canvas');c.width=c.height=512;const g=c.getContext('2d');let seed=74;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
g.fillStyle=kind==='timber'?'#c8a073':kind==='stone'?'#d9c9ad':'#e5e0d6';g.fillRect(0,0,512,512);
for(let i=0;i<22000;i++){const shade=Math.floor(80+random()*130);g.fillStyle='rgba('+shade+','+shade+','+shade+','+(kind==='plaster'?.09:.12)+')';const x=random()*512,y=random()*512;g.fillRect(x,y,kind==='stone'?2+random()*14:1,kind==='timber'?6+random()*60:1)}
if(kind==='timber'){for(let x=0;x<512;x+=64){g.fillStyle='rgba(25,20,15,.65)';g.fillRect(x,0,3,512);for(let j=0;j<16;j++){g.strokeStyle='rgba(55,30,10,.18)';g.beginPath();const xx=x+5+random()*52;g.moveTo(xx,0);g.bezierCurveTo(xx+random()*12,160,xx-8,340,xx,512);g.stroke()}}}
if(kind==='stone'){g.strokeStyle='rgba(80,70,55,.25)';g.lineWidth=1.5;for(let y=0;y<=512;y+=128){g.beginPath();g.moveTo(0,y);g.lineTo(512,y);g.stroke();for(let x=(y/128%2)*128;x<512;x+=256){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+128);g.stroke()}}}
const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return tex;
}
const finishMaps={plaster:surfaceMap('plaster'),stone:surfaceMap('stone'),timber:surfaceMap('timber')};
const facadeMaterials=Array.from({length:4},()=>new THREE.MeshStandardMaterial({map:finishMaps.plaster,bumpMap:finishMaps.plaster,bumpScale:.012,roughness:.85}));
const roofTrim=plaster.clone();
wood.map=finishMaps.timber;wood.bumpMap=finishMaps.timber;wood.bumpScale=.008;wood.color.set('#bf966b');
stone.map=finishMaps.stone;stone.bumpMap=finishMaps.stone;stone.bumpScale=.007;stone.color.set('#c6b89e');
metal.color.set('#292c2d');glassMaterial.color.set('#9eafb1');glassMaterial.opacity=.73;glassMaterial.envMapIntensity=1.4;glassMaterial.metalness=.1;
const grass=new THREE.MeshStandardMaterial({color:color('--green').lerp(color('--orange'),.23).lerp(color('--muted-foreground'),.4).multiplyScalar(.55),map:finishMaps.plaster,roughness:1});
greenery.color.copy(grass.color).multiplyScalar(.75);
const styles=[
{name:'California · tynk i dąb',maps:['plaster','stone','plaster','plaster'],colors:['#f1e9dd','#d3bea0','#f1e9dd','#f1e9dd'],wood:'#c69d70',roof:'#e7dfd1'},
{name:'Desert · trawertyn i orzech',maps:['stone','plaster','stone','stone'],colors:['#cbb595','#ded0b8','#d8c19d','#cbb595'],wood:'#805735',roof:'#bca689'},
{name:'Midnight · ciemne drewno',maps:['timber','stone','timber','timber'],colors:['#393d3d','#928676','#343a3a','#393d3d'],wood:'#bb8b56',roof:'#373c3e'}];
let lastStyle=-1;
function applyStyle(id){if(id===lastStyle)return;lastStyle=id;const style=styles[id];facadeMaterials.forEach((m,i)=>{m.map=finishMaps[style.maps[i]];m.bumpMap=m.map;m.color.set(style.colors[i]);m.bumpScale=style.maps[i]==='timber'?.018:.01;m.needsUpdate=true});wood.color.set(style.wood);roofTrim.color.set(style.roof)}
applyStyle(0);
// A generated sky provides soft reflections without external image dependencies.
const skyCanvas=document.createElement('canvas');skyCanvas.width=512;skyCanvas.height=256;const skyCtx=skyCanvas.getContext('2d'),skyGradient=skyCtx.createLinearGradient(0,0,0,256);skyGradient.addColorStop(0,'#8faec3');skyGradient.addColorStop(.48,'#f4ead6');skyGradient.addColorStop(.53,'#b8b4a4');skyGradient.addColorStop(1,'#535744');skyCtx.fillStyle=skyGradient;skyCtx.fillRect(0,0,512,256);const skyTexture=new THREE.CanvasTexture(skyCanvas);skyTexture.mapping=THREE.EquirectangularReflectionMapping;skyTexture.colorSpace=THREE.SRGBColorSpace;const envGenerator=new THREE.PMREMGenerator(renderer);scene.environment=envGenerator.fromEquirectangular(skyTexture).texture;envGenerator.dispose();
const finish=[],land=[];
function box(size,pos,material,time=70,offset=new THREE.Vector3(0,1,0)){const shape=material===greenery?new THREE.IcosahedronGeometry(.5,2):new THREE.BoxGeometry(...size);const m=new THREE.Mesh(shape,material);if(material===greenery)m.scale.set(...size.map(x=>x*1.3));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;scene.add(m);finish.push({m,target:m.position.clone(),time,offset});return m}
for(let wi=0;wi<4;wi++){
const horizontal=wi%2===0,origin=walls[wi].position.clone(),out=(wi===0?Z.clone().negate():wi===1?X.clone().negate():wi===2?Z:X),along=horizontal?X:Z,L=horizontal?12.5:10;
function shell(thickness,distance,start,material){const center=origin.clone().addScaledVector(along,L/2).addScaledVector(Y,capTop/2).addScaledVector(out,distance);const size=horizontal?new THREE.Vector3(L,capTop,thickness):new THREE.Vector3(thickness,capTop,L);let parts=[new THREE.Box3().setFromCenterAndSize(center,size)];for(const o of wallOpenings[wi]){const c=origin.clone().addScaledVector(along,(o.u0+o.u1)/2).addScaledVector(Y,(o.v0+o.v1)/2).addScaledVector(out,distance);const d=horizontal?new THREE.Vector3(o.u1-o.u0,o.v1-o.v0,1):new THREE.Vector3(1,o.v1-o.v0,o.u1-o.u0);const cut=new THREE.Box3().setFromCenterAndSize(c,d);parts=parts.flatMap(b=>subtractBox(b,cut))}for(const b of parts){const size=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());const panel=box(size.toArray(),c.toArray(),material,start+wi*.5,out.clone().multiplyScalar(2));const pos=panel.geometry.attributes.position,uv=panel.geometry.attributes.uv;for(let k=0;k<pos.count;k++){uv.setXY(k,((horizontal?pos.getX(k)+c.x:pos.getZ(k)+c.z)/2),(pos.getY(k)+c.y)/2)}uv.needsUpdate=true}}
shell(.018,-.132,71,plaster);shell(.018,.132,66,material);shell(.055,.176,70,facadeMaterials[wi]);
for(let oi=0;oi<wallOpenings[wi].length;oi++){
const o=wallOpenings[wi][oi],w=o.u1-o.u0,h=o.v1-o.v0,c=origin.clone().addScaledVector(along,(o.u0+o.u1)/2).addScaledVector(Y,(o.v0+o.v1)/2).addScaledVector(out,.13);
const entrance=wi===2&&oi===1;
box(horizontal?[w,h,.04]:[.04,h,w],c.toArray(),entrance?wood:glassMaterial,73+wi*.25,out.clone().multiplyScalar(1.5));
for(const y of [-h/2,h/2])box(horizontal?[w,.055,.085]:[.085,.055,w],c.clone().addScaledVector(Y,y).toArray(),metal,73+wi*.25,out.clone().multiplyScalar(1.5));
for(const x of [-w/2,w/2,...(!entrance&&w>1.8?[0]:[])])box(horizontal?[.055,h,.085]:[.085,h,.055],c.clone().addScaledVector(along,x).toArray(),metal,73+wi*.25,out.clone().multiplyScalar(1.5));
}
}
for(const p of planWalls)for(const side of [-1,1]){
const bottom=.28,top=3.58,center=p.axis===0?new THREE.Vector3((p.start+p.end)/2,(bottom+top)/2,p.fixed+side*.135):new THREE.Vector3(p.fixed+side*.135,(bottom+top)/2,(p.start+p.end)/2);
const size=p.axis===0?new THREE.Vector3(p.end-p.start,top-bottom,.025):new THREE.Vector3(.025,top-bottom,p.end-p.start);let parts=[new THREE.Box3().setFromCenterAndSize(center,size)];
for(const h of p.holes){const c=center.clone();c.y=(h.v0+h.v1)/2;if(p.axis===0)c.x=p.uOrigin+(h.u0+h.u1)/2;else c.z=p.uOrigin+(h.u0+h.u1)/2;const d=p.axis===0?new THREE.Vector3(h.u1-h.u0,h.v1-h.v0,1):new THREE.Vector3(1,h.v1-h.v0,h.u1-h.u0);const cut=new THREE.Box3().setFromCenterAndSize(c,d);parts=parts.flatMap(b=>subtractBox(b,cut))}
for(const b of parts)box(b.getSize(new THREE.Vector3()).toArray(),b.getCenter(new THREE.Vector3()).toArray(),plaster,71,new THREE.Vector3(0,.5,0));
}
box([12,.025,9.5],[0,3.575,0],plaster,71,new THREE.Vector3(0,.5,0));
box([12.5,.04,10],[0,.26,0],stone,67);box([7.5,.045,2.5],[-2.5,.263,6.25],stone,68);
box([12.62,.025,10.12],[.02,3.605,.02],material,66.5,new THREE.Vector3(0,2.5,0));
box([12.7,.035,10.2],[.02,3.64,.02],metal,68,new THREE.Vector3(0,2.8,0));
box([12.83,.10,10.30],[.02,3.84,.02],roofTrim,74,new THREE.Vector3(0,3,0));
// Sparse landscaping and terrace furniture give the final home scale.
const ground=box([24,.08,23],[0,-.08,1],grass,76,new THREE.Vector3(0,-.1,0));
for(const [x,z] of [[-8,-3],[8,-4]]){
box([.15,2.1,.15],[x,1.05,z],wood,77,new THREE.Vector3(0,0,0));
const m=new THREE.Mesh(new THREE.IcosahedronGeometry(1.25,2),greenery);m.position.set(x,2.4,z);m.scale.set(1,1.25,1);scene.add(m);finish.push({m,target:m.position.clone(),time:77,offset:new THREE.Vector3(0,.5,0)});
}
box([2.2,.35,.8],[-4.6,.49,6.6],plaster,77);box([2.2,.55,.12],[-4.6,.7,6.97],plaster,77);box([.9,.25,.7],[-2.7,.4,6.45],wood,77);
for(const x of [-5.8,.5]){box([.55,.55,.55],[x,.53,7.05],metal,77);box([.7,.7,.7],[x,1.02,7.05],greenery,77.2)}
for(let x=1.9;x<3.55;x+=.11)box([.068,3.4,.07],[x,1.94,5.065],wood,72.5,new THREE.Vector3(0,0,1.4));
box([7.5,.24,.08],[-2.5,.12,7.5],stone,73);box([.08,.24,12.5],[-6.25,.12,1.25],stone,73);box([.08,.24,2.5],[1.25,.12,6.25],stone,73);box([5,.24,.08],[3.75,.12,5],stone,73);
for(let z=8;z<12;z+=.8)box([1.35,.045,.65],[.6,.02,z],stone,77);
const entryLight=new THREE.PointLight(0xffc58c,2.5,6);entryLight.position.set(2.5,2.9,5.6);scene.add(entryLight);
const hemi=new THREE.HemisphereLight(0xffffff,0x777777,.85);scene.add(hemi);const keyLight=new THREE.DirectionalLight(0xffffff,3);keyLight.color.setRGB(1,.92,.8);keyLight.position.set(-9,14,8);keyLight.castShadow=true;keyLight.shadow.mapSize.set(2048,2048);Object.assign(keyLight.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.1,far:50});keyLight.shadow.bias=-.0004;keyLight.shadow.normalBias=.03;scene.add(keyLight);const fillLight=new THREE.DirectionalLight(0xffffff,.45);fillLight.position.set(7,5,-4);scene.add(fillLight);
// A single global assembly queue: no two structural panels arrive together.
const sampleStart=32,sampleEnd=32+(sampleBoards.length-4)*.65+2;
const stageTimes={floor:sampleEnd+1};const events=[{end:8,kind:'intro'},{end:14,kind:'intro'},{end:16,kind:'intro'}];
function schedule(list,start,slow=6,slowTime=.95,fastTime=.13){let cursor=start;list.forEach((r,i)=>{r.start=cursor;r.duration=i<slow?slowTime:fastTime;cursor+=r.duration+.015;events.push({end:cursor-.015,kind:'board',record:r})});return cursor+1.2}
const ordered=source=>records.filter(r=>r.source===source).sort((a,b)=>a.axis-b.axis||a.index-b.index||a.stockStart-b.stockStart||a.layer-b.layer);
stageTimes.walls=schedule(ordered(floor),stageTimes.floor,8,1.1,.13);
// Grounded vertical panels first. Higher vertical segments follow their supporting row.
const wallTier=r=>r.axis===1?(r.bottom<=H+.001?0:Math.max(1,Math.round(r.bottom/PIXEL))):r.index;
const wallRecords=records.filter(r=>r.source!==floor&&r.source!==ceiling).sort((a,b)=>surfaces.indexOf(a.source)-surfaces.indexOf(b.source)||wallTier(a)-wallTier(b)||a.axis-b.axis||a.index-b.index||a.stockStart-b.stockStart||a.layer-b.layer);
stageTimes.roof=schedule(wallRecords,stageTimes.walls,8,1,.11);
stageTimes.insulation=schedule(ordered(ceiling),stageTimes.roof,8,1,.13);
let cursor=stageTimes.insulation;
for(const l of insulationLayers)for(let i=0;i<l.targets.length;i++){const b=l.targets[i];b.start=cursor;b.duration=i<3?.7:.055;cursor+=b.duration+.006;events.push({end:cursor-.006,kind:'insulation'})}
stageTimes.finish=cursor+1;
finish.sort((a,b)=>a.time-b.time);cursor=stageTimes.finish;
finish.forEach((f,i)=>{f.time=cursor;f.duration=i<5?.9:.13;cursor+=f.duration+.01;events.push({end:cursor-.01,kind:'finish'})});
stageTimes.hero=cursor+1;
// Preserve the detailed introduction exactly; the full-size build is a time-lapse.
const buildCompression=.09,compress=t=>t<stageTimes.floor?t:stageTimes.floor+(t-stageTimes.floor)*buildCompression;
for(const r of records){r.start=compress(r.start);r.duration*=buildCompression}
for(const l of insulationLayers)for(const b of l.targets){b.start=compress(b.start);b.duration*=buildCompression}
for(const f of finish){f.time=compress(f.time);f.duration*=buildCompression}
for(const e of events)e.end=compress(e.end);
for(const key of ['walls','roof','insulation','finish','hero'])stageTimes[key]=compress(stageTimes[key]);
const DURATION=stageTimes.hero+27;
for(let i=1;i<4;i++)events.push({end:16+i*4+2.8,kind:'pair'});
for(let i=4;i<sampleBoards.length;i++)events.push({end:sampleStart+(i-4)*.65+.6,kind:'sample'});
events.sort((a,b)=>a.end-b.end);
function updateStory(time){
let active=null,assembled=0;activeBoard.visible=false;
for(const b of batches.values()){b.mesh.visible=time>=stageTimes.floor;for(let i=0;i<b.list.length;i++){const r=b.list[i],p=ease((time-r.start)/r.duration);if(time>=r.start+r.duration)assembled++;else if(time>=r.start)active={r,b};vec.copy(r.pos).addScaledVector(r.offset,1-p);mat.compose(vec,r.rot,p>0?r.scale:zero);b.mesh.setMatrixAt(i,mat)}b.mesh.instanceMatrix.needsUpdate=true}
if(active){activeBoard.geometry=active.b.geometry;activeBoard.position.copy(active.r.pos).addScaledVector(active.r.offset,1-ease((time-active.r.start)/active.r.duration));activeBoard.quaternion.copy(active.r.rot);activeBoard.scale.copy(active.r.scale);activeBoard.visible=true;}
for(let k=0;k<insulationLayers.length;k++){const l=insulationLayers[k];l.mesh.visible=time>=stageTimes.insulation;for(let i=0;i<l.targets.length;i++){const b=l.targets[i],p=ease((time-b.start)/b.duration);vec.copy(b.pos).addScaledVector(l.offset,1-p);mat.compose(vec,quat,p>0?b.size:zero);l.mesh.setMatrixAt(i,mat)}l.mesh.instanceMatrix.needsUpdate=true}
intro.visible=time<16;sheet.visible=time<8;
for(const {raw,cut,i} of strips){const spread=ease((time-8)/3),z=(i-2)*(.24+spread*.075);raw.position.set(0,.009,z);raw.visible=time>=8&&time<11.5+i*.3;cut.position.z=z;cut.visible=time>=11.5+i*.3;}
for(const chip of cutoffs){const {i,k}=chip.userData,p=ease((time-11.5-i*.3)/2);chip.position.set(-1.25+k*PIXEL,.009+p*.7,(i-2)*.315+.06+p*.1);chip.visible=time>=11.5+i*.3&&p<1}
pair.visible=time>=16&&time<sampleStart;
pair.position.z=-PIXEL*2*ease((time-30)/2);
pairBoards.forEach((r,i)=>{const start=16+i*4,p=i===0?1:ease((time-start)/2.8);r.m.visible=i===0||time>=start;r.m.position.copy(r.target).add(new THREE.Vector3(0,.5*(1-p),(r.layer?1:-1)*.55*(1-p)));if(pair.visible&&p>0&&p<1)highlight(r.m);});
sample.visible=time>=sampleStart&&time<stageTimes.floor;
sampleBoards.forEach((r,i)=>{const start=sampleStart+(i-4)*.65,p=i<4?1:ease((time-start)/.6);r.m.visible=i<4||time>start;r.m.position.copy(r.target).addScaledVector(Y,.8*(1-p));if(sample.visible&&p>0&&p<1)highlight(r.m);});
for(const f of finish){const p=ease((time-f.time)/f.duration);f.m.visible=p>0;f.m.position.copy(f.target).addScaledVector(f.offset,1-p)}

activeBoard.visible=false;
}

// Website presentation only: all stock profiles and final transforms above are retained.
scene.traverse(object=>{if(object.isMesh){object.castShadow=true;object.receiveShadow=true}});
keyLight.intensity=2.3;hemi.intensity=.62;fillLight.intensity=.4;
for(const woodMaterial of [material,endingMaterial,partitionMaterial,partitionEnding]){
  woodMaterial.bumpMap=map;woodMaterial.bumpScale=.0015;
}
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

// Crisp real profile outlines reveal the paired boards without triangulation lines.
edgeMaterial.color.set('#d6c3a3');
edgeMaterial.opacity=.32;
const outlineMaterial=new THREE.LineBasicMaterial({color:0xc3b69b,transparent:true,opacity:.20});
const outlineParts=[];
for(const batch of batches.values()){
  const edges=new THREE.EdgesGeometry(batch.geometry,25);
  for(const record of batch.list){
    const transform=new THREE.Matrix4().compose(record.pos,record.rot,record.scale);
    outlineParts.push(edges.clone().applyMatrix4(transform));
  }
  edges.dispose();
}
const structureOutline=new THREE.LineSegments(mergeGeometries(outlineParts),outlineMaterial);
outlineParts.forEach(g=>g.dispose());
structureOutline.visible=false;
scene.add(structureOutline);
const structuralBounds=new THREE.Box3();
solidBounds.forEach(box=>structuralBounds.union(box));
// Add the closing strips after insulation, on the open-slot face of each rib family.
const battenRoot=new THREE.Group();battenRoot.name='wall-battens';scene.add(battenRoot);
const battenMaterial=material.clone();battenMaterial.color.set('#43948c');
const battenParts=[];
for(let wi=0;wi<walls.length;wi++){
 const wall=walls[wi],along=wi%2===0?X:Z;
 const outward=(wi===0?Z.clone().negate():wi===1?X.clone().negate():wi===2?Z:X);
 const ribs=new Map();
 for(const board of wall.children){
  if(!board.isMesh)continue;
  const {axis,index}=board.userData,key=axis+':'+index;
  if(!ribs.has(key))ribs.set(key,{axis,index,center:index*PIXEL,intervals:[]});
  const bounds=new THREE.Box3().setFromObject(board),coordinate=axis===1?'y':wi%2===0?'x':'z';
  ribs.get(key).intervals.push([bounds.min[coordinate]-wall.position[coordinate],bounds.max[coordinate]-wall.position[coordinate]]);
 }
 for(const part of wallBattens([...ribs.values()],wallOpenings[wi])){
  const side=part.side==='exterior'?1:-1;
  const center=wall.position.clone().addScaledVector(along,(part.u0+part.u1)/2).addScaledVector(Y,(part.v0+part.v1)/2).addScaledVector(outward,side*(H/2+BATTEN.thickness/2));
  const size=wi%2===0?new THREE.Vector3(part.u1-part.u0,part.v1-part.v0,BATTEN.thickness):new THREE.Vector3(BATTEN.thickness,part.v1-part.v0,part.u1-part.u0);
  battenParts.push({...part,wall:wi,center:center.toArray(),size:size.toArray()});
 }
}
const battensMesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),battenMaterial,battenParts.length);
const battenMatrix=new THREE.Matrix4();
battenParts.forEach((p,i)=>{battenMatrix.compose(new THREE.Vector3(...p.center),new THREE.Quaternion(),new THREE.Vector3(...p.size));battensMesh.setMatrixAt(i,battenMatrix)});
battensMesh.instanceMatrix.needsUpdate=true;battensMesh.castShadow=true;battensMesh.receiveShadow=true;battenRoot.add(battensMesh);
battenRoot.visible=false;
const names=['Deska','Połączenie','Plaster','Konstrukcja','Izolacja','Stelażowanie'];
// At 29.9 the final ending still moves; 30.801 is the first fully landed pair.
const times=[16,30.801,stageTimes.floor-.001,stageTimes.insulation-.001,stageTimes.finish-.001,stageTimes.finish-.001];
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
  updateStory(times[stage]);
  battenRoot.visible=stage===5;
  intro.visible=false;
  activeBoard.visible=false;
  entryLight.visible=false;
  finish.forEach(item=>{item.m.visible=false});
  if(stage<2){
    pair.visible=true;
    pair.position.set(0,0,0);
    pairBoards.forEach((record,index)=>{
      record.m.visible=stage===1||index===0;
      record.m.position.copy(record.target);
    });
  }
  structureOutline.visible=stage>=3;
  scene.updateMatrixWorld(true);
  activeBounds=stage===0?new THREE.Box3().setFromObject(pairBoards[0].m):
    stage===1?new THREE.Box3().setFromObject(pair):
    stage===2?new THREE.Box3().setFromObject(sample):structuralBounds.clone();
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
    boards:records.length,insulation:insulationCount,storyTime:times[currentStage],
    renderedBoards:currentStage===0?1:currentStage===1?pairBoards.length:
      currentStage===2?sampleBoards.length:records.length,
    renderedInsulation:currentStage>=4?insulationCount:0,
    renderedBattens:currentStage===5?battenParts.length:0,battenDimensions:BATTEN,
    camera:camera.position.toArray(),target:controls.target.toArray(),
    pixelRatio:renderer.getPixelRatio(),autoRotate:controls.autoRotate,
    reducedMotion:motionPreference.matches}),
  getBattens:()=>battenParts,
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
