import * as THREE from 'three';
import {P,H,T,HALF} from './core.js';

// One phase per entire roof plane. q runs horizontally outwards from the ridge;
// s runs down the slope. The wall centre sits midway between adjacent roof slots
// at the centre of their upper half. Wall/slab rib planes never move.
export function roofWallLap({pitch,spanHalf,ridgeUnderside,axis=0,clearance=.001}){
 const a=pitch*Math.PI/180,c=Math.cos(a),s=Math.sin(a),t=Math.tan(a);
 const wallCenter=spanHalf-HALF-T,inner=wallCenter-HALF,outer=wallCenter+HALF;
 const centerY=ridgeUnderside+HALF/c;
 const toothCenter=wallCenter/c-H/4*t;
 const phaseOrigin=((toothCenter-P/2)%P+P)%P-P;
 const slotInner=toothCenter-P/2,slotOuter=toothCenter+P/2;
 const plane=(n,c)=>({n,c});
 function side(sign){
  const q=new THREE.Vector3().setComponent(axis,sign),up=new THREE.Vector3(0,1,0);
  const along=q.clone().multiplyScalar(c).addScaledVector(up,-s),normal=q.clone().multiplyScalar(s).addScaledVector(up,c);
  const station=k=>k-s*centerY,depth=k=>k+c*centerY;
  const lower=plane(normal.clone(),depth(0)),upper=plane(normal.clone().negate(),-depth(0));
  const regions=[ [lower], [upper,plane(along.clone().negate(),-station(slotInner+T+clearance)),plane(along.clone(),station(slotOuter-T-clearance))] ];
  const under=plane(normal.clone(),depth(-HALF)),top=plane(normal.clone(),depth(HALF));
  return{
   sign,q,along,normal,origin:new THREE.Vector3(0,centerY,0).addScaledVector(along,phaseOrigin),
   wall(layer){return{planes:[layer===1?top:under],regions:layer===1?regions:[],role:layer===1?'long-lap':'short-bearing'};},
   roof(layer){return layer===0?[{planes:[],regions:[],role:'continuous'}]:[
    {planes:[plane(q.clone(),inner)],regions:[],role:'inner-ending'},
    {planes:[plane(q.clone().negate(),-outer)],regions:[
     [lower], [upper,plane(along.clone().negate(),-station(slotOuter-T))]
    ],role:'eave-ending'}
   ];},
   // Full 36 mm transverse pair insertion envelope, from the slot floor up.
   slotPlanes(k,travel=0){const stationS=k==='inner'?slotInner:slotOuter;return[
    plane(along.clone(),station(stationS+T)),plane(along.clone().negate(),-station(stationS-T)),
    plane(normal.clone().negate(),-depth(0)),plane(normal.clone(),depth(HALF+travel))
   ];}
  };
 }
 return{pitch,clearance,phaseOrigin,wallCenter,inner,outer,centerY,toothCenter,slotInner,slotOuter,axis,side,slabBeveled:false};
}
