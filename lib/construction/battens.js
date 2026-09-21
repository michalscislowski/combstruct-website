// Face battens, in metres. These are presentation geometry, not a fastener schedule.
export const BATTEN = Object.freeze({width: .060, thickness: .018, stockLength: 2.500});
const EPS = 1e-7;
function subtract(rect, hole) {
 const x0=Math.max(rect.u0,hole.u0),x1=Math.min(rect.u1,hole.u1);
 const y0=Math.max(rect.v0,hole.v0),y1=Math.min(rect.v1,hole.v1);
 if(x1-x0<EPS||y1-y0<EPS)return [rect];
 return [
  {...rect,u1:x0}, {...rect,u0:x1},
  {...rect,u0:x0,u1:x1,v1:y0}, {...rect,u0:x0,u1:x1,v0:y1}
 ].filter(r=>r.u1-r.u0>EPS&&r.v1-r.v0>EPS);
}
// Each rib describes the union of its two plies; slots are bridged by the face strip.
// Apertures clip the strip itself, including its 12 mm overhang past each rib edge.
// Axis 0 follows local U; axis 1 follows local V on either a wall or a roof face.
export function ribBattens(ribs, holes=[]) {
 const result=[];
 for(const rib of ribs){
  const vertical=rib.axis===1;
  const intervals=rib.intervals.map(a=>[...a]).sort((a,b)=>a[0]-b[0]),joined=[];
  for(const pair of intervals){const last=joined.at(-1);if(last&&pair[0]<=last[1]+EPS)last[1]=Math.max(last[1],pair[1]);else joined.push(pair);}
  for(const [lo,hi] of joined)for(let start=lo;start<hi-EPS;start+=BATTEN.stockLength){
   const end=Math.min(hi,start+BATTEN.stockLength),cross=rib.center;
   const rect=vertical?{u0:cross-BATTEN.width/2,u1:cross+BATTEN.width/2,v0:start,v1:end}:{u0:start,u1:end,v0:cross-BATTEN.width/2,v1:cross+BATTEN.width/2};
   let pieces=[rect];for(const hole of holes)pieces=pieces.flatMap(r=>subtract(r,hole));
   for(const piece of pieces)result.push({...piece,axis:rib.axis,rib:rib.index,stockStart:start,stockEnd:end});
  }
 }
 return result;
}
export function wallBattens(ribs,holes=[]) {
 return ribBattens(ribs,holes).map(p=>({...p,side:p.axis===1?'exterior':'interior'}));
}
