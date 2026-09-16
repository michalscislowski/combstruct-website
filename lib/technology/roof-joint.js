import * as THREE from 'three';
import {createConstruction,P,H,T,HALF,X,Y,Z} from '../construction/core.js';
import {roofWallLap} from '../construction/roof-wall-lap.js';

// The tutorial and houses use the same phase and clipping rules. Bounds below
// only crop a small teaching sample; they are not new stock profiles.
export function roofJointScene({pitch=35,knee=true,eave=true}={},materials){
 const root=new THREE.Group(),main=new THREE.Group(),crossing=new THREE.Group(),cap=new THREE.Group();root.add(main,crossing,cap);
 main.name='roof-joint-sample';crossing.name='transverse-roof-ribs';cap.name='horizontal-wall-rib';
 const engine=createConstruction(materials),V=(...a)=>new THREE.Vector3(...a),plane=(n,c)=>({n,c});
 const base=knee?0:H,t=Math.tan(pitch*Math.PI/180);
 const lap=roofWallLap({pitch,spanHalf:HALF+T,ridgeUnderside:base+HALF*t,axis:0}),side=lap.side(1);
 const origin=V(0,-2*P-T,0),wallCrop=plane(Y.clone().negate(),.65);
 const add=(p,u,n,thick,o,meta,planes=[],regions=[],target=main)=>engine.addBoard(target,p,u,n,thick,o,meta,0,planes,regions);
 for(const layer of [0,1]){
  const stock={start:0,pixels:6,layer},treatment=side.wall(layer),meta={kind:'wall-vertical',roofLap:treatment.role,axis:1,index:0};
  if(!knee&&layer===0){
   add(stock,Y,X,Z,origin,meta,[wallCrop,plane(Y,0)]);
   add(stock,Y,X,Z,origin,{...meta,kind:'roof-filler'},[wallCrop,plane(Y.clone().negate(),-H),...treatment.planes]);
  }else add(stock,Y,X,Z,origin,meta,[wallCrop,...treatment.planes],treatment.regions);
  if(!knee)add({start:0,pixels:6,layer,...(layer?{trim:'left',extraStartTrim:T}:{})},X.clone().negate(),Y,Z,V(HALF+T,HALF,0),{kind:'ceiling',axis:0,index:0},[plane(X.clone().negate(),1.0)]);
  const roofOrigin=side.origin.clone().addScaledVector(side.along,-2*P);
  for(const treatment of side.roof(layer)){
   if(!eave&&treatment.role==='eave-ending')continue;
   add(stock,side.along,side.normal,Z,roofOrigin,{kind:'roof-slope',axis:0,index:0,roofLap:treatment.role},[
    plane(X.clone().negate(),.8),plane(X,eave?.72:HALF),...treatment.planes
   ],treatment.regions);
  }
  add({start:0,pixels:2,layer},Z,X.clone().negate(),Y,V(0,-T,-P),{kind:'wall-horizontal',axis:0,index:0},[],[],cap);
 }
 const crossOrigin=V(0,lap.centerY,-P);
 for(const station of eave?[lap.slotInner,lap.slotOuter]:[lap.slotInner])for(const layer of [0,1])
  add({start:0,pixels:2,layer},Z,side.normal.clone().negate(),side.along,crossOrigin.clone().addScaledVector(side.along,station),{kind:'roof-cross',axis:1,index:station},[],[],crossing);
 for(const b of engine.boards){b.mesh.material=b.kind.startsWith('roof-')&&b.kind!=='roof-filler'?materials.roof:materials.wood;b.mesh.userData.base=b.mesh.position.clone();b.mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(b.mesh.geometry,30),materials.edges));}
 let amount=0,showCross=true,insertion=0;
 function update(){for(const b of engine.boards)if(b.mesh.parent===main)b.mesh.position.copy(b.mesh.userData.base).addScaledVector(Z,(b.layer===0?-1:1)*amount*.25);crossing.visible=showCross&&amount===0;cap.visible=amount===0;crossing.position.copy(side.normal).multiplyScalar(insertion);}
 return{root,direction:V(-.8,.5,2.8),annotation:'Pion między wpustami · strop bez skosu · zakładka dwóch warstw',
  spread(v){amount=v;update();},crossing(v){showCross=v;update();},insert(mm){insertion=mm/1000;update();},
  roofJoint:{pitch,knee,eave,clearance:lap.clearance,slabBeveled:false,slotInner:lap.slotInner,slotOuter:lap.slotOuter,boards:engine.boards},
 };
}
