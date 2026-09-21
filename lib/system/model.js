import * as THREE from 'three';
import {buildStructure} from '../construction/125/structure.js';
import {createConstruction,X,Y,Z,H} from '../construction/core.js';
import {wallBattens,BATTEN} from '../construction/battens.js';

// The catalogue owns the house. This adapter adds only the teaching samples
// and the closing strips, without moving or rebuilding any house component.
export function buildSystemModel(materials={}) {
 const house=buildStructure(materials);
 const single=new THREE.Group(),pair=new THREE.Group(),sample=new THREE.Group();
 const singleEngine=createConstruction(materials),pairEngine=createConstruction(materials),sampleEngine=createConstruction(materials);
 singleEngine.addBoard(single,{pixels:6,start:0,layer:0},X,Y,Z,new THREE.Vector3());
 for(const p of pairEngine.segments(9,3))pairEngine.addBoard(pair,p,X,Y,Z,new THREE.Vector3());
 sampleEngine.grid(sample,9,6,new THREE.Vector3(),X,Z,Y);

 const battenParts=battenPartsForHouse(house);
 const battens=new THREE.Group();battens.name='wall-battens';
 const strips=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),
  materials.batten||new THREE.MeshStandardMaterial({color:'#43948c'}),battenParts.length);
 const matrix=new THREE.Matrix4(),rotation=new THREE.Quaternion();
 battenParts.forEach((p,i)=>strips.setMatrixAt(i,matrix.compose(new THREE.Vector3(...p.center),rotation,new THREE.Vector3(...p.size))));
 strips.instanceMatrix.needsUpdate=true;strips.castShadow=true;strips.receiveShadow=true;
 battens.add(strips);house.root.add(battens);battens.visible=false;
 return {house,single,pair,sample,battens,battenParts,
  sampleBoards:[singleEngine.boards,pairEngine.boards,sampleEngine.boards]};
}

export function battenPartsForHouse(house) {
 house.root.updateMatrixWorld(true);
 const parts=[];
 house.wallPanels.filter(w=>w.exterior).forEach((wall,wi)=>{
  const origin=new THREE.Vector3(wall.origin.x,wall.origin.y,wall.origin.z);
  const along=wall.axis===0?X:Z,coordinate=wall.axis===0?'x':'z',ribs=new Map();
  for(const board of house.boards.filter(b=>b.wallId===wall.id)) {
   const {axis,index}=board,key=axis+':'+index;
   // frameOrigin denotes the actual rib plane; a ply offset is not an axis.
   const frame=new THREE.Vector3(...board.frameOrigin).sub(origin);
   const center=axis===1?frame.dot(along):frame.y;
   if(!ribs.has(key))ribs.set(key,{axis,index,center,intervals:[]});
   const bounds=new THREE.Box3().setFromObject(board.mesh);
   const run=axis===1?'y':coordinate;
   ribs.get(key).intervals.push([bounds.min[run]-origin[run],bounds.max[run]-origin[run]]);
  }
  for(const part of wallBattens([...ribs.values()],wall.holes)) {
   const outward=part.side==='exterior'?-1:1;
   const center=origin.clone().addScaledVector(along,(part.u0+part.u1)/2)
    .addScaledVector(Y,(part.v0+part.v1)/2)
    .addScaledVector(wall.normal,outward*(H/2+BATTEN.thickness/2));
   const size=wall.axis===0?[part.u1-part.u0,part.v1-part.v0,BATTEN.thickness]:[BATTEN.thickness,part.v1-part.v0,part.u1-part.u0];
   parts.push({...part,wall:wi,wallId:wall.id,wallAxis:wall.axis,center:center.toArray(),size});
  }
 });
 return parts;
}
