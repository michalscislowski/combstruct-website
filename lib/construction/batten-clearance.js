import * as THREE from 'three';

// Float32 mesh coordinates can differ slightly at a tangent face. Tangency
// is support, not an obstruction; clearance is applied only at cut ends.
const EPS=1e-6;
export const BATTEN_END_CLEARANCE=.0005;
const axes=['x','y','z'];

function clipPolygon(points,axis,value,sign) {
 const result=[];
 for(let i=0;i<points.length;i++) {
  const a=points[i],b=points[(i+1)%points.length];
  const da=sign*(a[axis]-value),db=sign*(b[axis]-value);
  if(da>=0)result.push(a);
  if((da>=0)!==(db>=0))result.push(a.clone().lerp(b,da/(da-db)));
 }
 return result;
}

export function boardObstacles(boards) {
 return boards.map(({id,mesh})=>{
  mesh.updateWorldMatrix(true,false);
  return {id,mesh,bounds:new THREE.Box3().setFromObject(mesh),triangles:null};
 });
}

function worldTriangles(solid) {
 if(!solid.triangles) {
  const {geometry,matrixWorld}=solid.mesh,position=geometry.attributes.position,index=geometry.index;
  solid.triangles=[];
  for(let i=0;i<(index?.count??position.count);i+=3) {
   solid.triangles.push([0,1,2].map(j=>new THREE.Vector3().fromBufferAttribute(position,index?index.getX(i+j):i+j).applyMatrix4(matrixWorld)));
  }
 }
 return solid.triangles;
}

// Project the actual solid through the strip's width and thickness. Using the
// entire board bounding box here would also remove the empty half-slot space.
export function obstructedRuns(box,run,solids) {
 const cross=axes.filter(axis=>axis!==run),cuts=[];
 for(const solid of solids) {
  if(axes.some(axis=>Math.min(box.max[axis],solid.bounds.max[axis])-Math.max(box.min[axis],solid.bounds.min[axis])<=EPS))continue;
  let start=Infinity,end=-Infinity;
  for(const triangle of worldTriangles(solid)) {
   let polygon=triangle;
   for(const axis of cross) {
    // Check the open interior of the strip footprint. At a half-slot, the
    // full-depth web touches its back face while only the end tongue projects
    // into it. Including that tangent web would cut away a whole board depth.
    polygon=clipPolygon(polygon,axis,box.min[axis]+EPS,1);
    polygon=clipPolygon(polygon,axis,box.max[axis]-EPS,-1);
    if(!polygon.length)break;
   }
   if(!polygon.length)continue;
   start=Math.min(start,...polygon.map(p=>p[run]));end=Math.max(end,...polygon.map(p=>p[run]));
  }
  // Keep the whole obstruction between its first and last face, also when
  // the strip cross-section lies entirely inside the board cross-section.
  if(start<end-EPS&&end>box.min[run]+EPS&&start<box.max[run]-EPS)cuts.push([start,end]);
 }
 cuts.sort((a,b)=>a[0]-b[0]);
 const joined=[];
 for(const cut of cuts) {
  const last=joined.at(-1);
  if(last&&cut[0]<=last[1]+EPS)last[1]=Math.max(last[1],cut[1]);else joined.push([...cut]);
 }
 return joined;
}

// Saw across the full strip: end before the protrusion and resume after it.
// Preserve its face and width instead of making little side slivers or notches.
export function clearBatten(part,solids) {
 const run=part.axis===1?'y':part.wallAxis===0?'x':'z',k=axes.indexOf(run);
 const center=new THREE.Vector3(...part.center),size=new THREE.Vector3(...part.size);
 const box=new THREE.Box3().setFromCenterAndSize(center,size);
 let intervals=[[box.min[run],box.max[run]]];
 for(const [a,b] of obstructedRuns(box,run,solids)) {
  const lo=a-BATTEN_END_CLEARANCE,hi=b+BATTEN_END_CLEARANCE;
  intervals=intervals.flatMap(([start,end])=>hi<=start||lo>=end?[[start,end]]:
   [[start,Math.min(end,lo)],[Math.max(start,hi),end]].filter(([l,r])=>r-l>EPS));
 }
 return intervals.map(([lo,hi])=>{
  const p={...part,center:[...part.center],size:[...part.size]};
  p.center[k]=(lo+hi)/2;p.size[k]=hi-lo;
  const a=part.axis===1?'v0':'u0',b=part.axis===1?'v1':'u1';
  p[a]=part[a]+lo-box.min[run];p[b]=part[b]+hi-box.max[run];
  return p;
 });
}
