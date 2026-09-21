// Bundle for Node with esbuild and Three.js, then execute.
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {boardObstacles,clearBatten,BATTEN_END_CLEARANCE} from '../lib/construction/batten-clearance.js';
import {buildSystemModel} from '../lib/system/model.js';
import {createConstruction,X,Y,Z} from '../lib/construction/core.js';
const near=(a,b)=>assert(Math.abs(a-b)<1e-6,`${a} != ${b}`);
const strip={axis:1,wallAxis:0,u0:-.03,u1:.03,v0:0,v1:2,center:[0,1,0],size:[.06,2,.018]};
function solid(size,center) {
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size));mesh.position.set(...center);
 return {id:'test-board',mesh};
}
// Full-width cuts, continued on the far side; multiple solids give multiple gaps.
const cuts=clearBatten(strip,boardObstacles([solid([.2,.12,.2],[0,.8,0]),solid([.2,.18,.2],[0,1.4,0])]));
assert.equal(cuts.length,3);
near(cuts[0].v1,.74-BATTEN_END_CLEARANCE);near(cuts[1].v0,.86+BATTEN_END_CLEARANCE);
near(cuts[1].v1,1.31-BATTEN_END_CLEARANCE);near(cuts[2].v0,1.49+BATTEN_END_CLEARANCE);
assert(cuts.every(p=>p.size[0]===.06&&p.size[2]===.018));
// A supporting face is tangent, not a blocker. Entirely embedded strips vanish.
assert.deepEqual(clearBatten(strip,boardObstacles([solid([.1,2,.1],[0,1,-.059])])),[strip]);
assert.equal(clearBatten(strip,boardObstacles([solid([1,3,1],[0,1,0])])).length,0);
// Actual native half-slot: clear the projecting lower half, retain empty upper half.
const engine=createConstruction(),group=new THREE.Group();
engine.addBoard(group,{pixels:6,start:0,layer:0},X,Y,Z,new THREE.Vector3());
const edge={axis:1,wallAxis:0,u0:.001,u1:.017,v0:-.24,v1:.24,center:[.009,0,-.009],size:[.016,.48,.018]};
const relieved=clearBatten(edge,boardObstacles(engine.boards));
assert.equal(relieved.length,2);near(relieved[0].v1,-.12-BATTEN_END_CLEARANCE);
near(relieved[1].v0,BATTEN_END_CLEARANCE);near(relieved[1].v1,.24);
// The real strip reaches exactly to the 18 mm half-slot shoulder. Its back
// face touches the full-depth web; that tangency must not remove another 120 mm.
const touching={...edge,u0:0,u1:.018,center:[.009,0,-.009],size:[.018,.48,.018]};
const atShoulder=clearBatten(touching,boardObstacles(engine.boards));
assert.equal(atShoulder.length,2);
near(atShoulder[0].v1,-.12-BATTEN_END_CLEARANCE);
near(atShoulder[1].v0,BATTEN_END_CLEARANCE);
near(atShoulder[1].v1,.24);

const {house,battenParts}=buildSystemModel(),axes=['x','y','z'];
// The left wall's roof tongue occupies only the top 120 mm of the slab depth.
// The outside strip below it must reach the tongue, not stop at the slab base.
const roofEnd=house.dimensions.ceilingBottom+.12-BATTEN_END_CLEARANCE;
for(const id of ['left','right']) {
 const strips=battenParts.filter(p=>p.wallId===id&&p.axis===1&&p.rib===1);
 assert(strips.some(p=>Math.abs(p.v1-roofEnd)<1e-6),`${id}: strip stops short of roof tongue`);
}
// At the rear floor edge the lower tongue stops at 120 mm. The long strip
// must start immediately above that, without leaving another 120 mm gap.
const rear=battenParts.filter(p=>p.wallId==='rear'&&p.axis===1&&p.rib===1);
near(Math.min(...rear.map(p=>p.v0)),.12+BATTEN_END_CLEARANCE);
const solids=boardObstacles(house.boards);
const triangle=new THREE.Triangle();let examined=0;
for(const p of battenParts) {
 const box=new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(...p.center),new THREE.Vector3(...p.size)).expandByScalar(-.00001);
 // Independent triangle/box collision check on the final strips.
 for(const s of solids) {
  if(axes.some(a=>Math.min(box.max[a],s.bounds.max[a])-Math.max(box.min[a],s.bounds.min[a])<=1e-6))continue;
  const {geometry,matrixWorld}=s.mesh,pos=geometry.attributes.position,index=geometry.index;
  for(let i=0;i<(index?.count??pos.count);i+=3) {
   [triangle.a,triangle.b,triangle.c].forEach((v,j)=>v.fromBufferAttribute(pos,index?index.getX(i+j):i+j).applyMatrix4(matrixWorld));
   examined++;assert(!box.intersectsTriangle(triangle),`${p.wallId} ${p.side} rib ${p.rib} intersects ${s.id}`);
  }
 }
 if(p.side==='interior') {
  // None of the inner strips can poke outside the inner corner of the 125.
  const run=p.wallAxis===0?0:2,limit=p.wallAxis===0?5.974:4.742;
  assert(p.center[run]-p.size[run]/2>=-limit-1e-6);
  assert(p.center[run]+p.size[run]/2<=limit+1e-6);
 }
}
console.log(JSON.stringify({battens:battenParts.length,independentTriangleChecks:examined,clearance:BATTEN_END_CLEARANCE,collisions:0,cornerProtrusions:0}));
