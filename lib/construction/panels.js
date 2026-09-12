import * as THREE from 'three';
import {P,H,T,HALF,EPS,X,Y,Z} from './core.js';

// World Z is the shorter bearing direction in both project footprints.
// Its slots face upwards in horizontal panels; world X slots face downwards.
export function horizontalPanel(engine,target,{x0,z0,nx,nz,top,kind,walls=[],holes=[],range,planes=[]}){
 const {jointStock,openStock,addBoard}=engine;
 for(const axis of [0,1]){
  const along=axis===0?Z:X,thick=axis===0?X:Z,normal=axis===0?Y:Y.clone().negate();
  const maxCount=axis===0?nx:nz;
  for(let i=1;i<maxCount;i++){
   const transverse=(axis===0?x0:z0)+i*P;
   const length=range?range(axis,transverse):(axis===0?nz:nx);if(!length)continue;
   const origin=new THREE.Vector3(x0,top-HALF,z0).addScaledVector(thick,i*P),base=axis===0?z0:x0;
   const gaps=walls.filter(w=>w.axis===axis&&((transverse>w.start+EPS&&transverse<w.end-EPS)||w.endJambs?.some(p=>Math.abs(p-transverse)<EPS)))
    .map(w=>({at:Math.round((w.node-base)/P),side:w.side,layer:1})).filter(g=>g.at>0&&g.at<length);
   for(const stock of jointStock(length,0,gaps))for(const p of openStock(stock,axis,i*P+(stock.layer===0?-T:0),holes))
    addBoard(target,p,along,normal,thick,origin,{kind,axis,index:i},0,planes);
  }
 }
}

export function normalizeWalls(walls,{x0,x1,z0,z1}){
 const result=walls.map(w=>{
  const axis=w.axis??(Math.abs(w.b[0]-w.a[0])>EPS?0:1);
  const originalFixed=axis===0?w.a[1]:w.a[0],base=axis===0?z0:x0,max=axis===0?z1:x1;
  const exterior=!!w.exterior,side=exterior&&Math.abs(originalFixed-base)<H?'left':'right';
  const node=exterior?(side==='left'?base:max):base+Math.round((originalFixed+HALF-base)/P)*P;
  return{...w,axis,side,node,fixed:node+(side==='left'?HALF:-HALF),originalFixed,
   start:axis===0?w.a[0]:w.a[1],end:axis===0?w.b[0]:w.b[1],normal:(axis===0?Z:X).clone().multiplyScalar(exterior&&side==='right'?-1:1)};
 });
 for(const w of result){
  const base=w.axis===0?x0:z0,max=w.axis===0?x1:z1;
  const resolve=value=>{
   if(Math.abs(value-base)<=H+.02)return base;if(Math.abs(value-max)<=H+.02)return max;
   const crossing=result.filter(o=>o.axis!==w.axis&&o.level===w.level&&w.originalFixed>=o.start-HALF-EPS&&w.originalFixed<=o.end+HALF+EPS&&Math.abs(value-o.originalFixed)<=H+.02).sort((a,b)=>Math.abs(value-a.originalFixed)-Math.abs(value-b.originalFixed))[0];
   return crossing?crossing.node:base+Math.round((value-base)/P)*P;
  };
  w.start=resolve(w.start);w.end=resolve(w.end);
  if(w.end<=w.start+EPS)throw Error('Empty native wall span: '+w.id);
 }
 return result;
}

export function wallPanel(engine,w,peers,{target,base,modules,cap=true,planes=[],verticalGaps=[],continueFromBelow=()=>false,targetForRow,holes=[],frameOpenings=false}){
 const {jointStock,openStock,addBoard}=engine,along=w.axis===0?X:Z,phaseH=w.axis===0?1:0;
 const span=Math.round((w.end-w.start)/P),origin=w.axis===0?new THREE.Vector3(w.start,base,w.fixed):new THREE.Vector3(w.fixed,base,w.start);
 const gaps=peers.filter(o=>o.axis!==w.axis&&o.level===w.level&&w.fixed>o.start-EPS&&w.fixed<o.end+EPS&&o.node>w.start+EPS&&o.node<w.end-EPS)
  .map(o=>({at:Math.round((o.node-w.start)/P),side:o.side,layer:1^phaseH}));
 // At a four-way wall junction the short-direction wall owns the one upright
 // pair. The two branches connect to it as native T ends. The other plaster
 // bridges their horizontal splice; never overlay two perpendicular uprights.
 const crosses=w.axis===0?peers.filter(o=>o.axis===1&&o.level===w.level&&w.fixed>o.start+HALF&&w.fixed<o.end-HALF&&o.node>w.start+EPS&&o.node<w.end-EPS):[];
 for(const o of crosses)gaps.push({at:Math.round((o.node-w.start)/P),side:'seam',layer:phaseH});
 for(let row=1;row<modules+(cap?1:0);row++)for(const stock of jointStock(span,phaseH,gaps))
  for(const p of openStock(stock,0,row*P+((stock.layer^phaseH)===0?-T:0),holes))
   addBoard(targetForRow?.(row)||target,p,along,w.normal,Y,origin.clone().addScaledVector(Y,row*P),{kind:w.exterior?'wall-horizontal':'partition-horizontal',wallId:w.id,axis:0,index:row},phaseH,planes);
 // A door can start at the end of a T-connected wall. Retain the native
 // upright there as its jamb, even though normal grid loops omit end columns.
 const jambAt=col=>frameOpenings&&holes.some(h=>Math.abs(h.u0-(col*P+T))<EPS||Math.abs(h.u1-(col*P-T))<EPS);
 for(let col=0;col<=span;col++)for(const stock of jointStock(modules,1,verticalGaps)){
  if((col===0||col===span)&&!jambAt(col))continue;
  if(crosses.some(o=>Math.abs(w.start+col*P-o.node)<EPS))continue;
  const p={...stock};
  if(w.exterior&&planes.length&&p.trim==='right'&&p.start+p.pixels*P>=modules*P-EPS)p.trim=null;
  if(continueFromBelow(w.start+col*P)&&p.start===0&&p.layer===0)p.trim='left';
  for(const f of openStock(p,1,col*P+((p.layer^1)===0?-T:0),holes))
   addBoard(target,f,Y,w.normal.clone().negate(),along,origin.clone().addScaledVector(along,col*P),{kind:w.exterior?'wall-vertical':'partition-vertical',wallId:w.id,axis:1,index:col},1,planes);
 }
 return{...w,origin:{x:origin.x,y:base,z:origin.z},holes,depth:H};
}
