import * as THREE from 'three';
import {P,T,HALF} from './core.js';

// Subtract convex insertion envelopes as disjoint retained regions. This is
// an end relief: it never changes the native slot pitch or offsets rib axes.
function subtract(regions,cut){
 return regions.flatMap(region=>cut.map((p,i)=>[
  ...region,...cut.slice(0,i),{n:p.n.clone().negate(),c:-p.c}
 ]));
}
export function intersectRegions(a=[],b=[]){
 return a.length&&b.length?a.flatMap(x=>b.map(y=>[...x,...y])):a.length?a:b;
}

// Alternating full-thickness plies. Long ends meet the opposite roof's top
// plane; short ends meet its underside. Their face overlap is the intersection
// of the two roof strips, reduced only by native slots / cross-rib end reliefs.
export function roofRidgeLap({pitch,centerY,phaseOrigin,axis=0}){
 const a=pitch*Math.PI/180,c=Math.cos(a),s=Math.sin(a);
 const reach=HALF*Math.max(Math.tan(a),1/Math.tan(a));
 const headModules=Math.max(0,Math.ceil((phaseOrigin+reach+T)/P));
 const rafterStart=phaseOrigin-headModules*P;
 const frame=sign=>{
  const q=new THREE.Vector3().setComponent(axis,sign),up=new THREE.Vector3(0,1,0);
  return {q,along:q.clone().multiplyScalar(c).addScaledVector(up,-s),normal:q.clone().multiplyScalar(s).addScaledVector(up,c)};
 };
 // Keep the existing cross-rib stations. Extra stock at the head extends a
 // native board; it must not create a row of tiny cross-rib remnants at the apex.
 const nearSlots=[];
 for(let i=1;phaseOrigin+i*P-T<reach;i++)nearSlots.push(phaseOrigin+i*P);
 function slotEnvelope(sign,station,travel=0){
  const f=frame(sign),s0=station-s*centerY;
  return [
   {n:f.along,c:s0+T},{n:f.along.clone().negate(),c:-s0+T},
   {n:f.normal.clone().negate(),c:-c*centerY},
   {n:f.normal,c:c*centerY+HALF+travel},
   {n:f.q.clone().negate(),c:0}
  ];
 }
 function treatment(sign,layer){
  const long=layer===(sign===-1?0:1),opposite=frame(-sign);
  const planes=[{n:opposite.normal,c:c*centerY+(long?HALF:-HALF)}];
  let regions=[];
  if(long)for(const station of nearSlots)regions=subtract(regions.length?regions:[[]],slotEnvelope(-sign,station,1));
  return{planes,regions,role:long?'long':'short'};
 }
 return{pitch,centerY,axis,phaseOrigin,reach,headModules,rafterStart,nearSlots,frame,treatment,slotEnvelope};
}
