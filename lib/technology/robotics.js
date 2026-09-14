import * as THREE from 'three';
import {beamGeometry,getModel,H,T,P} from './geometry.js';
import {manufacturingScene} from './manufacturing.js';
import sequence from './manufacturing-data.json';
import {selectRobotOperations,prepareRobotBoard} from './robotics-assembly.js';

const V=(...v)=>new THREE.Vector3(...v),Y=V(0,1,0),Z=V(0,0,1);
const clamp=v=>Math.max(0,Math.min(1,v)),smooth=v=>{v=clamp(v);return v*v*(3-2*v);};
const span=(v,a,b)=>smooth((v-a)/(b-a));
const mix=THREE.MathUtils.lerp;
const mat=(color,metalness=0)=>new THREE.MeshStandardMaterial({color,metalness,roughness:metalness?.36:.76});

export const roboticsProcesses={
 factory:{title:'Fabryka lights-off',duration:42,steps:[
  {at:0,label:'Podanie płyty',title:'Płyta wjeżdża. Proces rusza.',text:'Magazyn podaje kolejną płytę OSB, MFP lub sklejki. Rolki prowadzą ją do rozkroju, a docisk utrzymuje pozycję materiału.'},
  {at:.15,label:'Pięć desek',title:'Jedna płyta. Pięć desek.',text:'Rozkrój wzdłuż dłuższej krawędzi daje pięć prostych desek. Na tym etapie nie mają jeszcze wpustów.'},
  {at:.31,label:'Obrót na sztorc',title:'Dłuższą krawędzią do góry.',text:'Kaseta obrotowa stawia deski na dłuższych krawędziach. Prowadnice i dociski utrzymują je pionowo przed frezowaniem.'},
  {at:.47,label:'Frezowanie',title:'Siedem frezów. Jeden przejazd.',text:'Frezy pracują w jednej linii wzdłuż deski, na stałej wysokości. Deski przejeżdżają pod nimi na sztorc, jedna za drugą. Pełne wpusty i półwpusty na końcach powstają w jednym przejściu.'},
  {at:.64,label:'Kontrola i ID',title:'Każda deska ma swoje miejsce.',text:'Stanowisko kontroli sprawdza profil, a znakowanie łączy element z jego identyfikatorem w modelu budynku.'},
  {at:.80,label:'Zestaw montażowy',title:'Gotowe do kolejnego etapu.',text:'Deski trafiają do oznaczonego pakietu. Zestawy są porządkowane według projektu i kolejności montażu.'}
 ]},
 site:{title:'Robotyczny montaż',duration:60,steps:[
  {at:0,label:'Podłoga',title:'Pobierz. Obróć. Osadź.',text:'Chwytak pobiera deskę ze stanowiska podawczego, przenosi ją nad płytę i opuszcza w miejscu wskazanym przez model.'},
  {at:.2,label:'Ściany',title:'Ten sam element. Kolejny kierunek.',text:'Obrotowy chwytak ustawia deskę pionowo. Suwnica dociera nad kolejne żebra, zachowując dostęp do wnętrza budynku.'},
  {at:.4,label:'Strop',title:'Montaż prowadzony przez model.',text:'Po przygotowaniu podpór robot układa żebra stropu. Każdy pokazywany element ma identyfikator i docelową pozycję w konstrukcji.'},
  {at:.6,label:'Dach',title:'Także pod kątem połaci.',text:'Chwytak obraca deskę do orientacji dachu. Wspólny model prowadzi od pakietu części do kolejnego połączenia.'},
  {at:.8,label:'Konstrukcja',title:'Jedna konstrukcja. Jeden zestaw danych.',text:'Podłoga, ściany, strop i dach powstają z tego samego systemu. Robot korzysta z danych przygotowanych dla produkcji i montażu.'}
 ]}
};

function meshBox(root,w,h,d,x,y,z,material){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);root.add(m);return m;}
function cylinder(root,r,h,position,material,axis=Y){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,16),material);m.position.copy(position);m.quaternion.setFromUnitVectors(Y,axis);root.add(m);return m;}
function outlined(g,material){const m=new THREE.Mesh(g,material);m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g,30),new THREE.LineBasicMaterial({color:'#5b4632',transparent:true,opacity:.5})));return m;}
function sign(root,text,x,y,z,width=2,color='#dceae4'){
 const c=document.createElement('canvas');c.width=768;c.height=96;const ctx=c.getContext('2d');ctx.font='500 37px Helvetica Neue, Arial, sans-serif';ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(text,384,61);
 const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
 const s=new THREE.Sprite(new THREE.SpriteMaterial({map,depthTest:false}));s.scale.set(width,width/8,1);s.position.set(x,y,z);root.add(s);return s;
}
function rollerBed(root,x,length,metal,dark){
 meshBox(root,length,.15,2.85,x,.74,0,dark);
 for(let u=-length/2+.12;u<length/2;u+=.27)cylinder(root,.055,2.75,V(x+u,.86,0),metal,Z);
 for(const z of [-1.48,1.48]){meshBox(root,length,.17,.09,x,.78,z,metal);for(const dx of [-length/2+.16,length/2-.16])meshBox(root,.1,.76,.1,x+dx,.36,z,dark);}
}
function arch(root,x,width,height,material){for(const z of [-width/2,width/2])meshBox(root,.18,height,.18,x,height/2,z,material);meshBox(root,.28,.24,width+.18,x,height,0,material);}

function factoryScene(){
 const root=new THREE.Group(),metal=mat('#8fa4a8',.6),dark=mat('#30474b',.35),wood=mat('#cba36b'),green=mat('#398d7d',.35),black=mat('#17282b');
 const lamp=new THREE.MeshStandardMaterial({color:'#e3f3ed',emissive:'#a7e1cc',emissiveIntensity:1.5});
 meshBox(root,22,.18,7,0,-.2,0,black);
 rollerBed(root,-6.3,5.3,metal,dark);rollerBed(root,-.7,5.4,metal,dark);rollerBed(root,4.5,4.3,metal,dark);
 // A stack, a sheet magazine and its driven feeder, with no unsupported sheet.
 for(let i=0;i<10;i++)meshBox(root,1.25,T,2.5,-8.2,.98+i*.024,0,wood);
 arch(root,-8.2,3.35,2.7,dark);meshBox(root,3.5,.09,.12,-7.8,2.67,0,metal);
 const feeder=new THREE.Group();root.add(feeder);meshBox(feeder,1,.09,1.6,0,0,0,metal);for(const x of [-.38,.38])for(const z of [-.56,.56])cylinder(feeder,.07,.16,V(x,-.1,z),dark);
 const feedMast=meshBox(root,.08,1,.08,-8.2,2,0,metal);
 const whole=outlined(new THREE.BoxGeometry(1.25,T,2.5),wood);root.add(whole);
 const blanks=new THREE.Group();root.add(blanks);const carriers=[],profiles=[];
 const millX=1.05,feedSpeed=20,boardSpacing=.65,flowStart=.47,packX=7.48;
 const basis=new THREE.Matrix4().makeBasis(Z,Y,V(-1,0,0));
 const machined=beamGeometry(6).applyMatrix4(basis).translate(0,H/2,-3*P);
 for(let i=0;i<5;i++){
  const carrier=new THREE.Group();blanks.add(carrier);carriers.push(carrier);
  const m=outlined(new THREE.BoxGeometry(.24,T,2.5),wood);carrier.add(m);
  const group=new THREE.Group();root.add(group);group.visible=false;
  const raw=outlined(new THREE.BoxGeometry(T,H,6*P).translate(0,H/2,0),wood),finished=outlined(machined.clone(),wood);group.add(raw,finished);
  // All seven cuts occur during the same transverse pass. The remaining strips
  // shrink through the thickness under the fixed tool row, not along the beam.
  const chips=[];for(let slot=0;slot<7;slot++){
   const a=Math.max(0,slot*P-T),b=Math.min(6*P,slot*P+T);
   chips.push(meshBox(group,T,H/2,b-a,0,3*H/4,(a+b)/2-3*P,wood));
  }
  const saddle=new THREE.Group();group.add(saddle);
  for(const z of [-.92,.92]){
   meshBox(saddle,.15,.045,.14,0,-.0225,z,green);
   for(const side of [-1,1])meshBox(saddle,.025,.085,.14,side*(T/2+.0125),.02,z,dark);
  }
  profiles.push({group,raw,finished,chips,saddle});
 }
 arch(root,-4.65,3.4,2.45,dark);
 const saw=new THREE.Group();root.add(saw);meshBox(saw,1.5,.16,.22,0,0,0,metal);
 const sawMast=meshBox(root,.09,1,.09,-4.65,2,0,metal);
 for(let i=0;i<4;i++){const blade=cylinder(saw,.2,.012,V((i-1.5)*.25,-.17,0),metal,V(1,0,0));blade.userData.saw=true;}
 for(const x of [-5.36,-3.95])cylinder(root,.075,2.6,V(x,1.06,0),dark,Z);
 // Five rotary cradles constrain the long edges throughout the 90° turn.
 const cradles=[];for(let i=0;i<5;i++){const c=new THREE.Group();root.add(c);for(const z of [-.92,.92]){meshBox(c,.29,.055,.14,0,-.033,z,green);meshBox(c,.03,.15,.14,-.135,.015,z,dark);}cradles.push(c);}
 arch(root,millX,3.45,2.8,dark);
 // Seven fixed vertical spindles, parallel to the board's long (Z) axis.
 // Five full slots plus two end half-slots use the native profile's pitch.
 const cutter=new THREE.Group();root.add(cutter);cutter.position.set(millX,1.36,0);
 meshBox(cutter,.3,.2,2.95,0,.27,0,metal);
 for(const z of [-1.46,1.46])meshBox(root,.12,1.07,.12,millX,2.265,z,metal);
 const tools=[];for(let i=0;i<7;i++){
  const z=(i-3)*P;cylinder(cutter,.07,.32,V(0,.04,z),green);
  const bit=cylinder(cutter,T,.18,V(0,-.21,z),metal);
  meshBox(bit,.004,.17,.004,T*.75,0,0,dark);tools.push(bit);
 }
 // Transfer chains and travelling saddles hold the boards below the slot roots;
 // nothing stationary crosses their path or blocks the top edge.
 for(const z of [-.92,.92])meshBox(root,9.4,.055,.16,2.18,.885,z,dark);
 for(const x of [-1.9,2.5])root.add(new THREE.ArrowHelper(V(1,0,0),V(x,.94,1.45),.8,0x72c9ae,.17,.1));
 for(const x of [-4.65,1.05,4.45])meshBox(root,1.5,.035,.06,x,2.34,-.2,lamp);
 arch(root,4.45,3.25,2.2,metal);meshBox(root,.4,.4,.35,4.45,1.85,0,dark);
 const scanner=new THREE.Mesh(new THREE.PlaneGeometry(1.35,2.5),new THREE.MeshBasicMaterial({color:'#7cd3b5',transparent:true,opacity:.19,side:THREE.DoubleSide,depthWrite:false}));scanner.rotation.x=-Math.PI/2;root.add(scanner);
 const pack=new THREE.Group();root.add(pack);meshBox(pack,1.5,.14,2.85,0,0,0,wood);
 for(const z of [-1,1])meshBox(pack,1.55,.08,.1,0,-.1,z,dark);
 for(const x of [-.64,.64])for(const z of [-1.24,1.24])meshBox(pack,.1,.86,.1,x,-.5,z,dark);
 const straps=[];for(const z of [-.84,.84])straps.push(meshBox(pack,.3,.025,.035,0,.07+5*T+.015,z,green));
 const marker=sign(root,'C30 · KIT',7.6,.38,1.9,1.55);
 sign(root,'OSB / MFP / Sklejka',-8.1,.07,2.4,3);
 sign(root,'5 ×',-4.65,.07,2.4,1.4);
 sign(root,'7 ×',millX,1.98,0,1.3);sign(root,'CNC',millX,.07,2.4,1.3);sign(root,'ID',4.45,.07,2.4,1.1);
 // Tool shutters and chip extraction are legible without hiding the operation.
 for(const x of [-4.65,1.05]){cylinder(root,.12,.7,V(x,2.75,-1.3),dark);meshBox(root,.58,.5,.48,x,.33,-2.2,dark);}
 let state={},materialX=-8.2;
 function update(p){
  p=clamp(p);const feedX=p<.035?-8.2:p<.075?mix(-8.2,-6.8,span(p,.035,.075)):p<.1?-6.8:mix(-6.8,-4.65,span(p,.1,.15));
  const feedY=p<.035?mix(1.224,1.7,span(p,0,.035)):p<.075?1.7:p<.1?mix(1.7,.94,span(p,.075,.1)):.94;
  const x=p<.15?feedX:p<.31?-4.65:p<flowStart?mix(-4.65,-.75,span(p,.31,flowStart)):-.75+feedSpeed*(p-flowStart);
  whole.visible=p<.22;whole.position.set(x,p<.15?feedY:.94,0);feeder.position.set(p<.1?feedX:mix(-6.8,-8.2,span(p,.1,.15)),p<.1?feedY+.19:mix(1.13,2.1,span(p,.1,.125)),0);
  feedMast.scale.y=2.67-feeder.position.y;feedMast.position.set(feeder.position.x,(2.67+feeder.position.y)/2,0);
  blanks.visible=p>=.22&&p<.47;
  const turn=span(p,.33,.43)*Math.PI/2;
  for(let i=0;i<5;i++){
   const y=.94+Math.sin(turn)*.12,spacing=mix(.25,boardSpacing,span(p,.36,flowStart));carriers[i].position.set(x+(i-2)*spacing,y,0);carriers[i].rotation.z=turn;
   cradles[i].visible=p>=.31&&p<.47;cradles[i].position.copy(carriers[i].position);cradles[i].rotation.z=turn;
  }
  saw.position.set(-4.65,p>=.15&&p<.31?1.15:1.68,mix(-1.5,1.5,span(p,.15,.29)));
  sawMast.scale.y=2.45-saw.position.y;sawMast.position.set(-4.65,(2.45+saw.position.y)/2,saw.position.z);
  tools.forEach(bit=>bit.rotation.y=p*42*45);
  const boards=[];
  for(let i=0;i<5;i++){
   const {group:m,raw,finished,chips,saddle}=profiles[i],feedX=x+(i-2)*boardSpacing;
   const cut=p<flowStart?0:clamp((feedX-millX+T/2)/T),arrival=flowStart+(packX+.75-(i-2)*boardSpacing)/feedSpeed;
   const r=span(p,arrival,arrival+.02),remaining=1-cut;
   m.visible=p>=flowStart;raw.visible=cut===0;finished.visible=cut>0;
   chips.forEach(c=>{c.visible=cut>0&&cut<1;c.scale.x=Math.max(.001,remaining);c.position.x=-T/2+remaining*T/2;});
   m.position.set(Math.min(packX,feedX),mix(.94,.89+T/2+(4-i)*T,r),0);m.rotation.z=-r*Math.PI/2;
   saddle.visible=r<1;
   boards.push({id:i+1,x:m.position.x,z:m.position.z,cut,slots:cut===1?7:0,packed:r===1});
  }
  scanner.visible=boards.some(b=>Math.abs(b.x-4.45)<.28)&&p>=flowStart;scanner.position.set(4.45,1.45,0);
  const complete=boards.every(b=>b.packed);
  materialX=p<flowStart?x:profiles.reduce((sum,b)=>sum+b.group.position.x+H/2*Math.sin(-b.group.rotation.z),0)/profiles.length;
  pack.position.set(7.6,.82,0);straps.forEach(s=>s.visible=complete);marker.visible=complete;
  const step=roboticsProcesses.factory.steps.findLastIndex(s=>p>=s.at);
  state={process:'factory',progress:p,step,blanks:5,orientation:p<flowStart?'flat-to-edge':'on-edge',milledSlots:Math.max(...boards.map(b=>b.slots)),toolApproach:'top',cutterCount:tools.length,cutterPositions:tools.map(bit=>bit.getWorldPosition(V()).toArray()),feedAxis:'x',boardAxis:'z',boards,complete};
 }
 update(0);
 const overview=new THREE.Box3(V(-10.1,-.2,-2.7),V(9.1,3.2,2.8));
 return{root,direction:V(.8,1.25,2.6),overviewDirection:V(.8,1.25,2.6),detailDirection:V(2.1,1.6,1.2),focus:overview,overview,background:'#18292c',annotation:'Koncepcja linii automatycznej',update,getRoboticsState:()=>state,getDetailFocus(){
  // Track the material itself, not a station selected by the current caption.
  // The close-up eases in and out independently of the stage boundaries.
  const close=span(state.progress,.36,.50)*(1-span(state.progress,.65,.81));
  const half=V(mix(1.8,1.45,close),mix(.95,.58,close),mix(1.65,1.34,close)),center=V(materialX,mix(1.6,1.35,close),0);
  return new THREE.Box3(center.clone().sub(half),center.clone().add(half));
 },dispose(){machined.dispose();}};
}

function siteScene(){
 const root=new THREE.Group(),model=getModel(),d=model.dimensions,house=manufacturingScene(3);root.add(house.root);
 const byId=new Map(model.boards.map(b=>[b.id,b])),records=sequence.assembly.map(([id])=>byId.get(id));
 const first=pred=>{const i=records.findIndex(pred);if(i<0)throw Error('Missing construction stage in the robotics example');return i;};
 const starts=[0,first(b=>b.kind==='wall'&&b.axis===1),first(b=>b.kind==='ceiling'),first(b=>b.kind==='roof-slope'),records.length];
 const operations=selectRobotOperations(records,starts);
 const metal=mat('#82969a',.6),dark=mat('#36524d',.35),green=mat('#348d7b',.35),wood=mat('#cba36b'),ground=mat('#e3e9df');
 const xmin=-d.halfWidth-1.5,xmax=d.halfWidth+1.5,zmin=-d.halfDepth-d.terraceDepth-1.4,zmax=d.halfDepth+4.2,top=d.roofRidgeY+2.5;
 meshBox(root,xmax-xmin+2,.12,zmax-zmin+1,0,-.15,(zmin+zmax)/2,ground);
 for(const x of [xmin,xmax]){meshBox(root,.14,.14,zmax-zmin,x,0,(zmin+zmax)/2,metal);for(let z=zmin;z<zmax;z+=.8)meshBox(root,.55,.09,.22,x,-.04,z,dark);}
 const bridge=new THREE.Group();root.add(bridge);
 for(const x of [xmin,xmax]){meshBox(bridge,.3,top,.3,x,top/2,0,dark);meshBox(bridge,.65,.3,1.5,x,.2,0,green);for(const z of [-.5,.5])cylinder(bridge,.14,.25,V(x,.1,z),metal,V(1,0,0));}
 for(const z of [-.21,.21])meshBox(bridge,xmax-xmin+.4,.26,.16,0,top,z,metal);
 const trolley=new THREE.Group();bridge.add(trolley);meshBox(trolley,.6,.3,.72,0,top-.05,0,green);
 const mast=meshBox(trolley,.14,1,.14,0,top-.8,0,metal);
 const wrist=new THREE.Group();root.add(wrist);cylinder(wrist,.13,.22,V(0,0,0),dark);cylinder(wrist,.18,.08,V(0,.12,0),green);
 const clampFrame=new THREE.Group();root.add(clampFrame);meshBox(clampFrame,.65,.065,.1,0,0,0,dark);
 for(const x of [-.22,.22]){cylinder(clampFrame,.018,.09,V(x,-.075,0),metal);cylinder(clampFrame,.028,.07,V(x,-.155,0),dark);cylinder(clampFrame,.032,.01,V(x,-.191,0),green);}
 const gripJoint=new THREE.Mesh(new THREE.SphereGeometry(.11,16,12),metal);root.add(gripJoint);
 const tableTop=.765,pickup=V(xmin+1.9,tableTop+T/2,zmax-1.8);
 meshBox(root,3.05,.13,1.2,pickup.x,.7,pickup.z,wood);for(const x of [-1.2,1.2])meshBox(root,.15,.73,1.1,pickup.x+x,.29,pickup.z,dark);
 const source=outlined(beamGeometry(6).translate(-3*P,0,0),wood);source.position.copy(pickup);root.add(source);
 const moving=outlined(new THREE.BoxGeometry(.01,.01,.01),mat('#379b88'));root.add(moving);
 const info=sign(root,'Combstruct 30',d.halfWidth+.15,.15,zmax-.2,2.9,'#254331');
 let active=-1,target=V(),contact=V(0,.205,-H/4),installRotation=new THREE.Quaternion(),boardDimensions=[],state={};
 function setActive(index){
  if(active===index)return;active=index;const b=records[index];
  const prepared=prepareRobotBoard(b);target.copy(prepared.target);installRotation.copy(prepared.rotation);boardDimensions=prepared.dimensions;
  moving.geometry.dispose();moving.children[0].geometry.dispose();moving.geometry=prepared.geometry;moving.children[0].geometry=new THREE.EdgesGeometry(moving.geometry,30);
  source.geometry.dispose();source.children[0].geometry.dispose();source.geometry=moving.geometry.clone();source.quaternion.identity();source.children[0].geometry=new THREE.EdgesGeometry(source.geometry,30);
  pickup.y=tableTop-moving.geometry.boundingBox.min.y;source.position.copy(pickup);
 }
 function update(value){
  const p=clamp(value),step=Math.min(4,Math.floor(p*5)),local=clamp(p*5-step);
  if(step===4){house.assembly(1);moving.visible=false;source.visible=false;bridge.position.z=zmax-.5;trolley.position.x=xmax-.5;mast.scale.y=1;mast.position.y=top-.8;wrist.position.set(xmax-.5,top-1.4,bridge.position.z);clampFrame.position.copy(wrist.position).add(V(0,-.18,0));clampFrame.quaternion.identity();gripJoint.position.copy(clampFrame.position);state={process:'site',progress:p,step,installed:records.length,total:records.length,complete:true};return;}
  // A film-like selection of operations, not a claim that skipped parts have
  // been carried during this cycle. Each stage starts from a connected prefix.
  const cycles=4,k=Math.min(cycles-1,Math.floor(local*cycles)),f=clamp(local*cycles-k),index=operations[step][k];
  setActive(index);const placed=f>=.86;house.assembly((index+(placed?1:0))/records.length);
  const safeY=d.roofRidgeY+1.25,abovePick=pickup.clone().setY(safeY),aboveTarget=target.clone().setY(safeY),pose=V();
  if(f<.16)pose.copy(pickup).add(V(0,mix(.5,0,span(f,0,.16)),0));
  else if(f<.35)pose.lerpVectors(pickup,abovePick,span(f,.16,.35));
  else if(f<.60)pose.lerpVectors(abovePick,aboveTarget,span(f,.35,.60));
  else if(f<.86)pose.lerpVectors(aboveTarget,target,span(f,.60,.86));
  else if(f<.92)pose.lerpVectors(target,aboveTarget,span(f,.86,.92));
  else if(f<.98)pose.lerpVectors(aboveTarget,abovePick,span(f,.92,.98));
  else pose.lerpVectors(abovePick,pickup.clone().add(V(0,.5,0)),span(f,.98,1));
  moving.visible=f>=.16&&!placed;source.visible=f<.16;moving.position.copy(pose);moving.quaternion.identity().slerp(installRotation,span(f,.35,.60)*(1-span(f,.92,.98)));
  const tool=pose.clone().add(contact.clone().applyQuaternion(moving.quaternion));bridge.position.z=tool.z;trolley.position.x=tool.x;
  const reach=Math.max(.35,top-tool.y-.25);mast.scale.y=reach;mast.position.y=top-reach/2;wrist.position.copy(tool).add(V(0,.18,0));
  clampFrame.position.copy(tool);clampFrame.quaternion.copy(moving.quaternion);gripJoint.position.copy(tool);
  info.visible=true;
  state={process:'site',progress:p,step,installed:index+(placed?1:0),total:records.length,activeBoard:records[index].id,boardKind:records[index].kind,boardProfile:records[index].trim?'ending':'ordinary',boardDimensions,nativeStock:true,pickupGap:pickup.y+moving.geometry.boundingBox.min.y-tableTop,pickupPosition:pickup.toArray(),support:sequence.assembly[index][1],carrying:moving.visible,sourceVisible:source.visible,phase:f<.16?'pick':f<.6?'carry':f<.86?'place':'release',complete:false,selectedOperations:true};
 }
 update(0);
 return{root,direction:V(1.5,1.15,2),distanceScale:.83,focus:new THREE.Box3(V(xmin-1,-.2,zmin-.4),V(xmax+.7,top+.35,zmax+.4)),annotation:'Wybrane operacje · Combstruct 30',update,getRoboticsState:()=>state};
}

export function roboticsScene(process){return process==='site'?siteScene():factoryScene();}
