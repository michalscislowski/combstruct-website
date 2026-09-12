import * as THREE from 'three';
import {P,H} from './core.js';
// Retain the catalogue viewer's insulation feature. Cells are clipped against
// openings and actual board bounds, and never include the same volume twice.
export function addInsulation(target,boards,panels,material=new THREE.MeshStandardMaterial({color:'#e5debf',roughness:1})){
 const occupied=[],solids=boards.map(b=>new THREE.Box3().setFromObject(b.mesh));
 function subtract(box,cut){
  const lo=box.min.clone().max(cut.min),hi=box.max.clone().min(cut.max);
  if(Math.min(...hi.clone().sub(lo).toArray())<1e-7)return[box];
  const result=[],core=box.clone();
  for(const axis of ['x','y','z']){
   if(lo[axis]>core.min[axis]+1e-7){const part=core.clone();part.max[axis]=lo[axis];result.push(part);core.min[axis]=lo[axis]}
   if(hi[axis]<core.max[axis]-1e-7){const part=core.clone();part.min[axis]=hi[axis];result.push(part);core.max[axis]=hi[axis]}
  }return result;
 }
 for(const panel of panels){
  const {origin,u,v,n,nu,nv,holes=[],mask=()=>true}=panel;
  const box=(a,b,c,d)=>{const center=origin.clone().addScaledVector(u,(a+b)/2).addScaledVector(v,(c+d)/2),size=u.clone().multiplyScalar(b-a).addScaledVector(v,d-c).addScaledVector(n,H-.002);size.set(Math.abs(size.x),Math.abs(size.y),Math.abs(size.z));return new THREE.Box3().setFromCenterAndSize(center,size)};
  const openings=holes.map(h=>box(h.u0,h.u1,h.v0,h.v1).expandByScalar(.001));
  for(let j=0;j<nv;j++)for(let i=0;i<nu;i++){
   if(!mask(i,j))continue;
   const cell=box(i*P+(i?.019:.001),(i+1)*P-(i===nu-1?.001:.019),j*P+(j?.019:.001),(j+1)*P-(j===nv-1?.001:.019));
   let parts=[cell];
   for(const cutter of [...openings,...solids,...occupied].filter(b=>b.intersectsBox(cell))){parts=parts.flatMap(b=>subtract(b,cutter));if(!parts.length)break}
   for(const part of parts)if(Math.min(...part.getSize(new THREE.Vector3()).toArray())>=.003)occupied.push(part.expandByScalar(-.0003));
  }
 }
 const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),material,occupied.length),matrix=new THREE.Matrix4(),q=new THREE.Quaternion();
 occupied.forEach((b,i)=>{matrix.compose(b.getCenter(new THREE.Vector3()),q,b.getSize(new THREE.Vector3()));mesh.setMatrixAt(i,matrix)});mesh.instanceMatrix.needsUpdate=true;target.add(mesh);return occupied.length;
}
