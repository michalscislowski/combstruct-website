import * as THREE from 'three';
import {MeshBVH} from 'three-mesh-bvh';
import {getModel,manualScene,disposeScene} from '../../technology/geometry.js';
import {topics} from '../../technology/content.js';
import assert from 'node:assert/strict';
const model=getModel(),topic=topics.find(t=>t.id==='dach-sciana'),detail=manualScene(topic),shown=[];
detail.root.traverseVisible(m=>{if(m.isMesh)shown.push(m)});
const d=model.dimensions,center=new THREE.Vector3(d.halfWidth-.12,d.ceilingTop,-d.halfDepth+3*2.5/6);
const source=new Map(model.boards.map(b=>[b.id,b]));
for(const m of shown){const b=source.get(m.userData.boardId);assert(b,'Every detail piece must come from the actual house');assert.deepEqual([...m.geometry.attributes.position.array],[...b.mesh.geometry.attributes.position.array]);assert(m.position.clone().add(center).distanceTo(b.mesh.position)<1e-8);}
const ceilings=shown.filter(m=>source.get(m.userData.boardId).kind==='ceiling');
assert(ceilings.length>=2,'Show both ceiling plies by default');
const terminal=shown.find(m=>{const b=source.get(m.userData.boardId);return b.surface==='right'&&b.trim==='right'&&Math.abs(b.bounds.max.y-d.ceilingBottom)<1e-5});assert(terminal);
const bottom=source.get(terminal.userData.boardId),continuation=shown.find(m=>{const b=source.get(m.userData.boardId);return b.surface==='right'&&b.layer===bottom.layer&&Math.abs(b.start-d.ceilingTop)<1e-5});assert(continuation);
const filler=ceilings.find(m=>source.get(m.userData.boardId).layer===bottom.layer);assert(filler);
const f=source.get(filler.userData.boardId);assert(Math.abs(f.bounds.min.y-d.ceilingBottom)<1e-5&&Math.abs(f.bounds.max.y-d.ceilingTop)<1e-5,'Ceiling fills the 24 cm ending reservation');
function contact(a,b){const ga=a.geometry.clone().translate(...a.position.toArray()),gb=b.geometry.clone().translate(...b.position.toArray());ga.boundsTree=new MeshBVH(ga);const hit=ga.boundsTree.closestPointToGeometry(gb,new THREE.Matrix4(),{}, {},.000025,.00005);ga.dispose();gb.dispose();return hit?.distance<.00005;}
assert(contact(filler,terminal),'Ceiling rests on the short upright');assert(contact(filler,continuation),'Ceiling meets the upper upright');
for(const show of [true,false]){detail.crossing(show);assert(filler.parent.visible,'Ceiling must not be hidden as optional crossing context');}
console.log(JSON.stringify({detail:topic.id,shownBoards:shown.map(m=>m.userData.boardId),ceilingBoards:ceilings.map(m=>m.userData.boardId),reservationMm:240,originalGeometryPreserved:true,contactsVerified:true}));
disposeScene(detail.root);
