import * as THREE from 'three';
import {createConstruction,P,H,T,HALF,EPS,X,Y,Z} from '../core.js';
import {horizontalPanel,normalizeWalls,wallPanel} from '../panels.js';
import {addInsulation} from '../insulation.js';
import layout from './layout.js';
import connectorSchedule from './connectors.json';
export {P,H,T};
export function buildStructure(materials={},options={}){
 const lengthJoints=options.jointStrategy!=='lateral-cuts';
 const root=new THREE.Group();root.name='Combstruct 125';
 const group=name=>{const g=new THREE.Group();g.name=name;root.add(g);return g};
 const groups={floor:group('Podłoga i ciągły taras'),walls:['rear','left','front','right'].map(group),partitions:group('Ściany wewnętrzne'),ceiling:group('Stropodach'),insulation:group('Izolacja')};
 const engine=createConstruction(materials,connectorSchedule,options),{boards}=engine;
 const x0=-6.25,x1=6.25,z0=-5,z1=5,ceilingBottom=lengthJoints?9*P+T:9*P-H,ceilingTop=ceilingBottom+H;
 const exterior=[{a:[x0,z0+HALF],b:[x1,z0+HALF]},{a:[x0+HALF,z0],b:[x0+HALF,z1]},{a:[x0,z1-HALF],b:[x1,z1-HALF]},{a:[x1-HALF,z0],b:[x1-HALF,z1]}].map((w,i)=>({...w,id:['rear','left','front','right'][i],level:'ground',exterior:true,holes:layout.wallOpenings[i].map(h=>({...h,u0:h.u0+(i%2?z0:x0),u1:h.u1+(i%2?z0:x0)}))}));
 const specs=normalizeWalls([...exterior,...layout.partitions],{x0,x1,z0,z1,lengthJoints});
 const floorRange=(axis,at)=>axis===0?(at<x0+18*P-EPS?30:24):(at<z1-EPS?30:18);
 horizontalPanel(engine,groups.floor,{x0,z0,nx:30,nz:30,top:H,kind:'floor',walls:specs,range:floorRange});
 horizontalPanel(engine,groups.ceiling,{x0,z0,nx:30,nz:24,top:ceilingTop,kind:'ceiling',walls:specs});
 const wallPanels=[];
 for(const w of specs){
  let target=groups.walls.find(g=>g.name===w.id);
  if(!target){target=new THREE.Group();target.name=w.id;groups.partitions.add(target)}
  const holes=w.holes.map(h=>({...h,u0:h.u0-w.start,u1:h.u1-w.start,
   world:w.axis===0?{x0:h.u0,x1:h.u1,z0:w.fixed-HALF,z1:w.fixed+HALF,y0:h.v0,y1:h.v1}:{x0:w.fixed-HALF,x1:w.fixed+HALF,z0:h.u0,z1:h.u1,y0:h.v0,y1:h.v1}}));
  wallPanels.push(wallPanel(engine,w,specs,{target,base:0,modules:lengthJoints?10:9,capAt:9,cap:lengthJoints||!!w.exterior,holes,verticalEnds:lengthJoints?{left:true,right:false}:undefined,verticalGaps:lengthJoints?[{at:9,side:'left',layer:0}]:[],planes:lengthJoints?[{n:Y,c:ceilingTop}]:[]}));
 }
 root.updateMatrixWorld(true);
 const insulationCount=options.insulation===false?0:addInsulation(groups.insulation,boards,[
  {origin:new THREE.Vector3(x0,HALF,z0),nu:30,nv:30,u:X,v:Z,n:Y,mask:(i,j)=>j<24||i<18},
  ...wallPanels.filter(w=>w.exterior).map(w=>({origin:new THREE.Vector3(w.origin.x,0,w.origin.z),nu:Math.round((w.end-w.start)/P),nv:9,u:w.axis===0?X:Z,v:Y,n:w.axis===0?Z:X,holes:w.holes})),
  {origin:new THREE.Vector3(x0,ceilingTop-HALF,z0),nu:30,nv:24,u:X,v:Z,n:Y},
 ],materials.insulation);
 groups.insulation.visible=false;
 const dimensions={width:12.5,depth:10,module:P,footprint:125,floorTop:H,wallTop:lengthJoints?9*P:ceilingTop+T,ceilingBottom,ceilingTop,clearHeight:ceilingBottom-H,terraceArea:18.75,terraceWidth:7.5,terraceDepth:2.5,boardDepth:H};
 const validation={jointStrategy:lengthJoints?'full-end-slot':'lateral-cuts',fullEndSlotMm:lengthJoints?36:null,additionalEndTrimMm:lengthJoints?18:0,ceilingOnWallCap:lengthJoints,module:P,stockMaxLength:2.5,pairWidth:2*T,terminalDifference:H,junctionsCoplanar:true,floorTerraceContinuous:true,shortBearingDirection:'Z',shortBearingSlots:'up',exteriorVerticalSlots:'outward',connectorBoards:boards.filter(b=>b.connectorCuts.length).length,loadValidated:false};
 return{root,groups,boards,dimensions,rooms:layout.rooms,furnishings:layout.furnishings,wallPanels,insulationCount,validation};
}
