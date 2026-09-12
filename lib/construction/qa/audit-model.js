import * as THREE from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {buildStructure,P,H,T} from 'project-structure';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const project=process.argv[2],mat=new THREE.MeshStandardMaterial({side:THREE.DoubleSide});
const model=buildStructure({wood:mat,end:mat},{insulation:false}),raw=buildStructure({wood:mat,end:mat},{connectors:false,insulation:false}),tolerance=.00005,identity=new THREE.Matrix4();
const fingerprint=createHash('sha256');
const entries=model.boards.map(b=>{
 const geometry=b.mesh.geometry.clone().translate(...b.mesh.position.toArray());
 geometry.computeBoundingBox();geometry.boundsTree=new MeshBVH(geometry);
 fingerprint.update(b.id);fingerprint.update(new Uint8Array(geometry.attributes.position.array.buffer));
 return{board:b,geometry,box:geometry.boundingBox,neighbors:[],grounded:geometry.boundingBox.min.y<=tolerance};
});
// A spatial hash bounds the triangle-distance checks to nearby pieces.
const cells=new Map(),pairs=new Set();
entries.forEach((e,i)=>{
 const lo=e.box.min.clone().addScalar(-tolerance).divideScalar(.5).floor(),hi=e.box.max.clone().addScalar(tolerance).divideScalar(.5).floor();
 for(let x=lo.x;x<=hi.x;x++)for(let y=lo.y;y<=hi.y;y++)for(let z=lo.z;z<=hi.z;z++){
  const key=`${x},${y},${z}`,bucket=cells.get(key)||[];
  for(const j of bucket)pairs.add(j*entries.length+i);
  bucket.push(i);cells.set(key,bucket);
 }
});
// BVH cannot return a unique intersection EDGE for coplanar faces. We only use
// its distance/contact result, never the zero placeholder contact coordinates.
const warn=console.warn;let coplanarWarnings=0;
console.warn=(...args)=>{
 if(args[0]==='ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0.')coplanarWarnings++;
 else warn(...args);
};
let contacts=0,candidates=0;
try{
 for(const pair of pairs){
  const i=Math.floor(pair/entries.length),j=pair%entries.length,a=entries[i],b=entries[j];
  if(!a.box.clone().expandByScalar(tolerance).intersectsBox(b.box))continue;
  candidates++;
  const hit=a.geometry.boundsTree.closestPointToGeometry(b.geometry,identity,{}, {},tolerance/2,tolerance);
  if(hit&&hit.distance<tolerance){a.neighbors.push(j);b.neighbors.push(i);contacts++;}
 }
}finally{console.warn=warn;}


const seen=new Set(entries.flatMap((e,i)=>e.grounded?[i]:[])),queue=[...seen];
for(let i=0;i<queue.length;i++)for(const n of entries[queue[i]].neighbors)if(!seen.has(n)){seen.add(n);queue.push(n)}
const disconnected=entries.flatMap((e,i)=>seen.has(i)?[]:[{id:e.board.id,kind:e.board.kind,surface:e.board.surface,min:e.box.min.toArray(),max:e.box.max.toArray()}]);
function volume(g){const p=g.attributes.position,ix=g.index;let n=0;for(let i=0;i<(ix?ix.count:p.count);i+=3){const [a,b,c]=[0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(p,ix?ix.getX(i+j):i+j));n+=a.dot(b.cross(c))/6}return Math.abs(n)}
const byKey=new Map(raw.boards.map(b=>[b.connectorKey,b]));let cuts=0,checkedVolumes=0,totalLength=0;const variants={},families={};
for(const b of model.boards){
 assert(Number.isInteger(b.stock.pixels)&&b.stock.pixels>0&&b.stock.pixels<=6,b.id+' native stock');
 assert(b.trim===null||['left','right'].includes(b.trim));
 const pos=b.mesh.geometry.attributes.position,along=new THREE.Vector3(...b.along);let lo=Infinity,hi=-Infinity;
 for(let i=0;i<pos.count;i++){const p=new THREE.Vector3().fromBufferAttribute(pos,i);assert(p.toArray().every(Number.isFinite));const a=p.dot(along);lo=Math.min(lo,a);hi=Math.max(hi,a)}totalLength+=hi-lo;
 if(['floor','slab','ceiling'].includes(b.kind))assert.equal(b.normal[1],Math.abs(b.along[2])>.9?1:-1,b.id+' short bearing slots');
 if(b.kind==='wall-vertical'){
  const wall=model.wallPanels.find(w=>w.id===b.wallId);assert(new THREE.Vector3(...b.normal).dot(wall.normal)<-.999,b.id+' outward vertical slots');
 }
 if(b.kind==='roof-slope')assert(b.normal[1]>0,b.id+' outward roof slots');
 const family=(b.connectorCuts.length?'connector':b.trim?'ending':'standard')+'-'+b.stock.pixels;families[family]=(families[family]||0)+1;
 if(!b.connectorCuts.length)continue;
 const before=byKey.get(b.connectorKey);let expected=0;
 for(const c of b.connectorCuts){assert([0,H/2].includes(c.offset));assert.equal(c.width,T);assert(Math.abs(c.removedRun-(!c.offset&&c.edge==='slotted'?H/2-T:H/2))<1e-9);expected+=T*T*c.removedRun;cuts++;const name=(c.offset?'inset':'corner')+'-'+c.edge;variants[name]=(variants[name]||0)+1;}
 if(!before.mesh.geometry.userData.angledCut){assert(Math.abs(volume(before.mesh.geometry)-volume(b.mesh.geometry)-expected)<2e-8,b.id+' connector cut volume');checkedVolumes++;}
}
const result={project,boards:entries.length,contacts,grounded:entries.filter(e=>e.grounded).length,connected:seen.size,disconnected,connectorBoards:entries.filter(e=>e.board.connectorCuts.length).length,cuts,variants,checkedVolumes,shortBearingSlots:'up',wallVerticalSlots:'outward',families,totalLength,fullBoards:totalLength/2.5,sheets:Math.ceil(totalLength/12.5),geometrySha256:fingerprint.digest('hex'),dimensions:model.dimensions,wallPanels:model.wallPanels.map(({normal,...w})=>({...w,normal:normal.toArray()})),rooms:model.rooms};
fs.writeFileSync(`lib/construction/qa/${project}-audit.json`,JSON.stringify(result,null,2));
console.log(JSON.stringify({...result,dimensions:undefined,wallPanels:undefined,rooms:undefined,families:undefined}));
assert.equal(disconnected.length,0,'Boards disconnected from the grounded structure');
