import * as THREE from 'three';
import {X,Y,Z,H} from './core.js';
import {wallBattens,ribBattens,BATTEN} from './battens.js';
import {boardObstacles,clearBatten} from './batten-clearance.js';
export function battenPartsForHouse(house,options={}) {
 house.root.updateMatrixWorld(true);
 const parts=[],solids=boardObstacles(house.boards);
 const walls=house.wallPanels.filter(w=>w.exterior||options.partitions).map(w=>{
  const horizontal=house.boards.find(b=>(b.wallId===w.id||b.surface===w.id)&&b.axis===0);
  return {...w,normal:w.normal||new THREE.Vector3(...horizontal.normal)};
 });
 walls.forEach((wall,wi)=>{
  const origin=new THREE.Vector3(wall.origin.x,wall.origin.y,wall.origin.z);
  const along=wall.axis===0?X:Z,coordinate=wall.axis===0?'x':'z',ribs=new Map();
  for(const board of house.boards.filter(b=>b.wallId===wall.id||(!b.wallId&&b.surface===wall.id))) {
   const {axis,index}=board,key=axis+':'+index;
   // frameOrigin denotes the actual rib plane; a ply offset is not an axis.
   const frame=new THREE.Vector3(...board.frameOrigin).sub(origin);
   const center=axis===1?frame.dot(along):frame.y;
   if(!ribs.has(key))ribs.set(key,{axis,index,center,intervals:[],parent:board.mesh.parent.name});
   const bounds=new THREE.Box3().setFromObject(board.mesh);
   const run=axis===1?'y':coordinate;
   ribs.get(key).intervals.push([bounds.min[run]-origin[run],bounds.max[run]-origin[run]]);
  }
  // Inner strips stop at the room-side corner, rather than following a board
  // end through the perpendicular wall. X strips butt against Z strips.
  let innerStart=0,innerEnd=wall.end-wall.start;
  for(const peer of walls.filter(w=>w.axis!==wall.axis&&w.level===wall.level)) {
   if(options.catalogue&&(wall.fixed<peer.start-H/2||wall.fixed>peer.end+H/2||Math.min(Math.abs(peer.fixed-wall.start),Math.abs(peer.fixed-wall.end))>H))continue;
   const sign=peer.normal.dot(along);
   const face=new THREE.Vector3(peer.origin.x,peer.origin.y,peer.origin.z)
    .addScaledVector(peer.normal,H/2+(wall.axis===0?BATTEN.thickness:0));
   const at=face.sub(origin).dot(along);
   if(sign>0)innerStart=Math.max(innerStart,at);
   else innerEnd=Math.min(innerEnd,at);
  }
  for(const original of wallBattens([...ribs.values()],wall.holes)) {
   const part={...original};
   if(part.side==='interior') {
    part.u0=Math.max(part.u0,innerStart);part.u1=Math.min(part.u1,innerEnd);
    if(part.u1-part.u0<1e-6)continue;
   }
   const outward=part.side==='exterior'?-1:1;
   if(options.catalogue)trimRoofEnvelope(part,wall.axis===0?X:Z,Y,origin.clone().addScaledVector(wall.normal,outward*(H/2+BATTEN.thickness)),house);
   if(part.u1-part.u0<1e-6||part.v1-part.v0<1e-6)continue;
   const center=origin.clone().addScaledVector(along,(part.u0+part.u1)/2)
    .addScaledVector(Y,(part.v0+part.v1)/2)
    .addScaledVector(wall.normal,outward*(H/2+BATTEN.thickness/2));
   const size=wall.axis===0?[part.u1-part.u0,part.v1-part.v0,BATTEN.thickness]:[BATTEN.thickness,part.v1-part.v0,part.u1-part.u0];
   const parent=ribs.get(part.axis+':'+part.rib).parent;
   parts.push(...clearBatten({...part,surface:'wall',kind:wall.exterior?'wall':'partition',parent,wall:wi,wallId:wall.id,wallAxis:wall.axis,center:center.toArray(),size},solids));
  }
 });
 if(!options.catalogue)return [...parts,...roofBattensForHouse(house,solids)];
 return finishCatalogueBattens(house,parts,solids,options);
}

function roofBattensForHouse(house,solids) {
 // Roof face coordinates are world X/Z. Read each board's slot normal and
 // rib plane instead of assuming that upper and lower layers share an axis.
 const ribs=new Map();
 for(const board of house.boards.filter(b=>b.kind==='ceiling')) {
  const along=new THREE.Vector3(...board.along),normal=new THREE.Vector3(...board.normal);
  const axis=Math.abs(along.z)>.5?1:0,run=axis===1?'z':'x';
  const side=normal.y>0?'upper':'lower',key=side+':'+board.index;
  const frame=new THREE.Vector3(...board.frameOrigin),bounds=new THREE.Box3().setFromObject(board.mesh);
  if(!ribs.has(key))ribs.set(key,{axis,index:board.index,center:axis===1?frame.x:frame.z,intervals:[],side,run,along,
   face:frame.y+normal.y*H/2});
  ribs.get(key).intervals.push([bounds.min[run],bounds.max[run]]);
 }
 const parts=[];
 for(const rib of ribs.values()) {
  let low=-Infinity,high=Infinity;
  if(rib.side==='lower')for(const wall of house.wallPanels.filter(w=>w.exterior)) {
   const sign=wall.normal.dot(rib.along);if(Math.abs(sign)<.5)continue;
   // Meet the inside wall cap battens, without crossing the wall or exposing
   // short roof-strip ends on the exterior face.
   const face=new THREE.Vector3(wall.origin.x,wall.origin.y,wall.origin.z)
    .addScaledVector(wall.normal,H/2+BATTEN.thickness);
   if(sign>0)low=Math.max(low,face[rib.run]);else high=Math.min(high,face[rib.run]);
  }
  for(const original of ribBattens([rib])) {
   const part={...original},start=rib.axis===1?'v0':'u0',end=rib.axis===1?'v1':'u1';
   part[start]=Math.max(part[start],low);part[end]=Math.min(part[end],high);
   if(part[end]-part[start]<1e-6)continue;
   const center=[(part.u0+part.u1)/2,rib.face+(rib.side==='upper'?1:-1)*BATTEN.thickness/2,(part.v0+part.v1)/2];
   const size=[part.u1-part.u0,BATTEN.thickness,part.v1-part.v0];
   parts.push(...clearBatten({...part,surface:'roof',side:rib.side,runAxis:rib.run,center,size},solids));
  }
 }
 return parts;
}

function roofEnvelope(house) {
 const planes=new Map();
 for(const b of house.boards.filter(b=>b.kind==='roof-slope')){
  const n=new THREE.Vector3(...b.normal),c=n.dot(new THREE.Vector3(...b.frameOrigin))-H/2;
  planes.set([...n.toArray(),c].map(x=>x.toFixed(7)).join(','),{n,c});
 }
 return [...planes.values()];
}
// Keep the complete strip below the sloping structural envelope at gables.
// Full-width end cuts avoid unsupported little tips above the roof.
function trimRoofEnvelope(part,u,v,origin,house) {
 const run=part.axis===1?v:u,cross=part.axis===1?u:v;
 const a=part.axis===1?'v0':'u0',b=part.axis===1?'v1':'u1';
 const c0=part.axis===1?part.u0:part.v0,c1=part.axis===1?part.u1:part.v1;
 for(const q of roofEnvelope(house)){
  const r=q.n.dot(run),s=q.n.dot(cross);if(Math.abs(r)<1e-8)continue;
  const at=(q.c-q.n.dot(origin)-Math.max(s*c0,s*c1))/r;
  if(r>0)part[b]=Math.min(part[b],at);else part[a]=Math.max(part[a],at);
 }
}

export function battenMesh(part,material) {
 const geometry=new THREE.BoxGeometry(...part.size);
 if(part.rotation)geometry.applyMatrix4(new THREE.Matrix4().fromArray(part.rotation));
 geometry.translate(...part.center);
 const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;
 return mesh;
}

function finishCatalogueBattens(house,wallParts,solids,options) {
 const parts=[],caps=[];
 const add=part=>{
  const lengthM=part.axis===1?part.v1-part.v0:part.u1-part.u0;
  if(lengthM<1e-6)return;
  const p={...part,id:`batten-${parts.length+1}`,lengthM};parts.push(p);
  caps.push({id:p.id,mesh:battenMesh(p)});
 };
 // Earlier caps are also real obstacles at corners and perpendicular junctions.
 for(const p of wallParts)for(const c of clearBatten(p,boardObstacles(caps)))add(c);
 const groups=new Map();
 const kinds=['ceiling','slab','roof-slope','roof-cross',...(options.floor?['floor']:[])];
 for(const b of house.boards.filter(b=>kinds.includes(b.kind))){
  const run=new THREE.Vector3(...b.along),normal=new THREE.Vector3(...b.normal),cross=normal.clone().cross(run).normalize();
  const basis=new THREE.Matrix4().makeBasis(run,cross,normal),key=b.surface+':'+b.kind+':'+basis.elements.map(n=>n.toFixed(6)).join(',');
  if(!groups.has(key))groups.set(key,{basis,run,normal,cross,boards:[],kind:b.kind});
  groups.get(key).boards.push(b);
 }
 for(const group of groups.values()){
  const {basis,run,normal,cross,boards,kind}=group,inverse=basis.clone().invert();
  const obstacles=boardObstacles([...house.boards,...caps],inverse),ribs=new Map();
  for(const b of boards){
   const f=new THREE.Vector3(...b.frameOrigin).applyMatrix4(inverse),key=b.index+':'+f.y.toFixed(6)+':'+f.z.toFixed(6);
   const obstacle=obstacles.find(o=>o.id===b.id);
   if(!ribs.has(key))ribs.set(key,{axis:0,index:b.index,center:f.y,face:f.z+H/2,intervals:[],parent:b.mesh.parent.name});
   ribs.get(key).intervals.push([obstacle.bounds.min.x,obstacle.bounds.max.x]);
  }
  for(const rib of ribs.values())for(const rect of ribBattens([rib])){
   const centerZ=rib.face+BATTEN.thickness/2;
   if(kind==='ceiling')trimRoofEnvelope(rect,run,cross,normal.clone().multiplyScalar(centerZ),house);
   if(rect.u1-rect.u0<1e-6)continue;
   // The top strips meet on the ridge plane; they do not repeat the hidden
   // alternating structural-ply overlap through the opposite roof surface.
   if(kind==='roof-slope'){
    const axis=Math.abs(run.x)>.5?'x':'z';
    const ridgeAt=-normal[axis]*centerZ/run[axis];
    rect.u0=Math.max(rect.u0,ridgeAt);
   }
   if(rect.u1-rect.u0<1e-6)continue;
   const candidate={...rect,kind:kind.startsWith('roof-')?'roof':kind,surface:kind.startsWith('roof-')?'roof':kind,
    parent:rib.parent,side:normal.y>0?'upper':'lower',runAxis:'x',
    center:[(rect.u0+rect.u1)/2,(rect.v0+rect.v1)/2,centerZ],size:[rect.u1-rect.u0,BATTEN.width,BATTEN.thickness]};
   for(const cut of clearBatten(candidate,obstacles)){
    cut.center=new THREE.Vector3(...cut.center).applyMatrix4(basis).toArray();cut.rotation=basis.toArray();
    add(cut);
   }
  }
 }
 caps.forEach(c=>{c.mesh.geometry.dispose();c.mesh.material.dispose();});
 return parts;
}
