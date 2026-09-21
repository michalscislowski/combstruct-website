import {BATTEN} from './battens.js';

// Owner's estimating convention: no kerf, twenty 60 mm strips per 1250 mm sheet.
export const BATTEN_SHEET=Object.freeze({length:2.5,width:1.25,thickness:.018,kerf:0,strips:20});
export function battenQuantities(parts) {
 const lengths=parts.map(p=>p.lengthM??(p.axis===1?p.v1-p.v0:p.u1-p.u0));
 const bins=[];
 // Deterministic best-fit decreasing: reuse the offcuts of 2500 mm strips.
 // This is a feasible cutting schedule, not a claim of globally optimal nesting.
 for(const [index,length] of lengths.map((n,i)=>[i,n]).sort((a,b)=>b[1]-a[1]||a[0]-b[0])) {
  if(length<=0||length>BATTEN.stockLength+1e-6)throw Error('Invalid batten length');
  const l=Math.min(length,BATTEN.stockLength);
  let best=-1;
  for(let i=0;i<bins.length;i++)if(bins[i].remaining+1e-7>=l&&(best<0||bins[i].remaining<bins[best].remaining))best=i;
  if(best<0){best=bins.length;bins.push({remaining:BATTEN.stockLength,parts:[]});}
  bins[best].remaining-=l;bins[best].parts.push(index);
 }
 const lengthM=lengths.reduce((a,b)=>a+b,0),bySurface={};
 parts.forEach((p,i)=>{const key=p.kind||p.surface;bySurface[key]=(bySurface[key]||0)+lengths[i];});
 return {dimensions:BATTEN,sheet:BATTEN_SHEET,installedPieces:parts.length,lengthM,stockStrips:bins.length,
  stockLengthM:bins.length*BATTEN.stockLength,sheets:Math.ceil(bins.length/BATTEN_SHEET.strips),
  offcutLengthM:bins.length*BATTEN.stockLength-lengthM,bySurface,
  cuttingPlan:bins.map(b=>b.parts)};
}
