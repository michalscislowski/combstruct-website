import {stockBounds,stockSlots,DEPTH as H,THICKNESS as T} from '../stock-profile.js';
const E=1e-8, HALF=H/2;
export function orthogonalCells(board) {
  if([...board.along,...board.normal,...board.thick].some(n=>Math.abs(n)>E&&Math.abs(Math.abs(n)-1)>E))return null;
  const p=board.stock,[lo,hi]=stockBounds(p),L=p.pixels*2.5/6,slots=stockSlots(p);
  const cuts=(board.connectorCuts||[]).map(c=>({a:c.end==='start'?(c.offset||0):L-(c.offset||0)-HALF,b:c.end==='start'?(c.offset||0)+HALF:L-(c.offset||0),low:c.edge==='plain'?-HALF:HALF-T,high:c.edge==='plain'?-HALF+T:HALF}));
  const xs=[...new Set([lo,hi,...slots.flat(),...cuts.flatMap(c=>[c.a,c.b])].filter(x=>x>=lo&&x<=hi))].sort((a,b)=>a-b);
  const ys=[...new Set([-HALF,0,HALF,...cuts.flatMap(c=>[c.low,c.high])])].sort((a,b)=>a-b);
  const result=[],origin=board.mesh.position.toArray();
  for(let i=1;i<xs.length;i++)for(let j=1;j<ys.length;j++){
    const x=(xs[i]+xs[i-1])/2,y=(ys[j]+ys[j-1])/2;
    if(xs[i]-xs[i-1]<E||ys[j]-ys[j-1]<E)continue;
    if(y>0&&slots.some(([a,b])=>x>a&&x<b))continue;
    if(cuts.some(c=>x>c.a-E&&x<c.b+E&&y>c.low-E&&y<c.high+E))continue;
    const a=origin.map((n,k)=>n+board.along[k]*xs[i-1]+board.normal[k]*ys[j-1]);
    const b=origin.map((n,k)=>n+board.along[k]*xs[i]+board.normal[k]*ys[j]+board.thick[k]*T);
    result.push({lo:a.map((n,k)=>Math.min(n,b[k])),hi:a.map((n,k)=>Math.max(n,b[k]))});
  }
  return result;
}
const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
// A convex box/half-space intersection has positive volume iff its vertices'
// centroid is strictly inside all bounding planes. This also checks gable cuts.
function interior(lo,hi,planes) {
  if(!planes.length)return lo.map((x,i)=>(x+hi[i])/2);
  const q=[...planes];
  for(let i=0;i<3;i++)for(const sign of [-1,1]){const n=[0,0,0];n[i]=sign;q.push({n,c:sign<0?-lo[i]:hi[i]});}
  const vertices=[];
  for(let i=0;i<q.length;i++)for(let j=i+1;j<q.length;j++)for(let k=j+1;k<q.length;k++){
    const a=q[i],b=q[j],c=q[k],bc=cross(b.n,c.n),ca=cross(c.n,a.n),ab=cross(a.n,b.n),det=dot(a.n,bc);
    if(Math.abs(det)<E)continue;
    const p=bc.map((v,l)=>(v*a.c+ca[l]*b.c+ab[l]*c.c)/det);
    if(q.every(f=>dot(f.n,p)<=f.c+E))vertices.push(p);
  }
  if(!vertices.length)return null;
  const center=[0,1,2].map(i=>vertices.reduce((s,v)=>s+v[i],0)/vertices.length);
  return q.every(f=>dot(f.n,center)<f.c-E)?center:null;
}
export function intersectCells(a,b,planes=[]) {
  const lo=a.lo.map((v,i)=>Math.max(v,b.lo[i])),hi=a.hi.map((v,i)=>Math.min(v,b.hi[i]));
  if(hi.some((v,i)=>v-lo[i]<E))return null;
  const point=interior(lo,hi,planes);
  return point?{lo,hi,point}:null;
}
