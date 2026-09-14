import * as THREE from 'three';
import {beamGeometry,getModel,H,T,P} from './geometry.js';
import {manufacturingScene} from './manufacturing.js';
import sequence from './manufacturing-data.json';

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
  {at:.47,label:'Frezowanie',title:'Wpusty powstają od góry.',text:'Głowice frezują pełne wpusty oraz półwpusty na końcach. Deski pozostają na sztorc, z odsłoniętą górną krawędzią.'},
  {at:.77,label:'Kontrola i ID',title:'Każda deska ma swoje miejsce.',text:'Stanowisko kontroli sprawdza profil, a znakowanie łączy element z jego identyfikatorem w modelu budynku.'},
  {at:.89,label:'Zestaw montażowy',title:'Gotowe do kolejnego etapu.',text:'Deski trafiają do oznaczonego pakietu. Zestawy są porządkowane według projektu i kolejności montażu.'}
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

// Partial top machining uses the same pitch, slot widths and half depth as the
// native beam. At the final pass use the actual construction-engine profile.
function milledProfile(passes){
 if(passes===7)return beamGeometry(6);
 const L=6*P,lo=-H/2,hi=H/2,slots=[];
 for(let i=0;i<passes;i++)slots.push({a:Math.max(0,i*P-T),b:Math.min(L,i*P+T)});
 const s=new THREE.Shape();s.moveTo(0,lo);s.lineTo(L,lo);s.lineTo(L,hi);
 for(const cut of slots.reverse()){s.lineTo(cut.b,hi);s.lineTo(cut.b,0);s.lineTo(cut.a,0);s.lineTo(cut.a,hi);}
 s.lineTo(0,hi);s.closePath();const g=new THREE.ExtrudeGeometry(s,{depth:T,bevelEnabled:false,steps:1});g.translate(0,0,-T/2);return g;
}

function factoryScene(){
 const root=new THREE.Group(),metal=mat('#8fa4a8',.6),dark=mat('#30474b',.35),wood=mat('#cba36b'),green=mat('#398d7d',.35),black=mat('#17282b');
 const lamp=new THREE.MeshStandardMaterial({color:'#e3f3ed',emissive:'#a7e1cc',emissiveIntensity:1.5});
 meshBox(root,22,.18,7,0,-.2,0,black);
 rollerBed(root,-6.3,5.3,metal,dark);rollerBed(root,-.7,5.4,metal,dark);rollerBed(root,5.25,5.8,metal,dark);
 // A stack, a sheet magazine and its driven feeder, with no unsupported sheet.
 for(let i=0;i<10;i++)meshBox(root,1.25,T,2.5,-8.2,.98+i*.024,0,wood);
 arch(root,-8.2,3.35,2.7,dark);meshBox(root,3.5,.09,.12,-7.8,2.67,0,metal);
 const feeder=new THREE.Group();root.add(feeder);meshBox(feeder,1,.09,1.6,0,0,0,metal);for(const x of [-.38,.38])for(const z of [-.56,.56])cylinder(feeder,.07,.16,V(x,-.1,z),dark);
 const feedMast=meshBox(root,.08,1,.08,-8.2,2,0,metal);
 const whole=outlined(new THREE.BoxGeometry(1.25,T,2.5),wood);root.add(whole);
 const blanks=new THREE.Group();root.add(blanks);const carriers=[],profiles=[];
 const basis=new THREE.Matrix4().makeBasis(Z,Y,V(-1,0,0));
 const machined=Array.from({length:8},(_,i)=>milledProfile(i).applyMatrix4(basis).translate(0,H/2,-3*P));
 for(let i=0;i<5;i++){
  const carrier=new THREE.Group();blanks.add(carrier);carriers.push(carrier);
  const m=outlined(new THREE.BoxGeometry(.24,T,2.5),wood);carrier.add(m);
  const g=outlined(machined[0].clone(),wood);root.add(g);g.visible=false;profiles.push(g);
 }
 arch(root,-4.65,3.4,2.45,dark);
 const saw=new THREE.Group();root.add(saw);meshBox(saw,1.5,.16,.22,0,0,0,metal);
 const sawMast=meshBox(root,.09,1,.09,-4.65,2,0,metal);
 for(let i=0;i<4;i++){const blade=cylinder(saw,.2,.012,V((i-1.5)*.25,-.17,0),metal,V(1,0,0));blade.userData.saw=true;}
 for(const x of [-5.36,-3.95])cylinder(root,.075,2.6,V(x,1.06,0),dark,Z);
 // Five rotary cradles constrain the long edges throughout the 90° turn.
 const cradles=[];for(let i=0;i<5;i++){const c=new THREE.Group();root.add(c);for(const z of [-.92,.92]){meshBox(c,.29,.055,.14,0,-.033,z,green);meshBox(c,.03,.15,.14,-.135,.015,z,dark);}cradles.push(c);}
 arch(root,1.05,3.45,2.8,dark);meshBox(root,1.8,1.65,.15,1.05,1.64,-1.73,dark);
 const cutter=new THREE.Group();root.add(cutter);meshBox(cutter,1.5,.2,.32,0,.25,0,metal);
 const cutterMast=meshBox(root,.12,1,.12,1.05,2,0,metal);
 for(let i=0;i<5;i++){cylinder(cutter,.063,.3,V((i-2)*.25,.02,0),green);cylinder(cutter,T,.18,V((i-2)*.25,-.2,0),metal);}
 for(const z of [-1.1,1.1]){meshBox(root,1.6,.07,.09,1.05,.92,z,green);for(let i=0;i<5;i++)for(const dx of [-.035,.035])meshBox(root,.025,.1,.12,1.05+(i-2)*.25+dx,1,z,dark);}
 for(const x of [-4.65,1.05,4.45])meshBox(root,1.5,.035,.06,x,2.34,-.2,lamp);
 arch(root,4.45,3.25,2.2,metal);meshBox(root,.4,.4,.35,4.45,1.85,0,dark);
 const scanner=new THREE.Mesh(new THREE.PlaneGeometry(1.35,2.5),new THREE.MeshBasicMaterial({color:'#7cd3b5',transparent:true,opacity:.19,side:THREE.DoubleSide,depthWrite:false}));scanner.rotation.x=-Math.PI/2;root.add(scanner);
 const pack=new THREE.Group();root.add(pack);meshBox(pack,1.5,.14,2.85,0,0,0,wood);
 for(const z of [-1,1])meshBox(pack,1.55,.08,.1,0,-.1,z,dark);
 const straps=[];for(const z of [-.84,.84])straps.push(meshBox(pack,.28,.025,.035,0,.245,z,green));
 const marker=sign(root,'C30 · KIT',7.6,.38,1.9,1.55);
 sign(root,'OSB / MFP / Sklejka',-8.1,.07,2.4,3);
 sign(root,'5 ×',-4.65,.07,2.4,1.4);
 sign(root,'CNC',1.05,.07,2.4,1.3);sign(root,'ID',4.45,.07,2.4,1.1);
 // Tool shutters and chip extraction are legible without hiding the operation.
 for(const x of [-4.65,1.05]){cylinder(root,.12,.7,V(x,2.75,-1.3),dark);meshBox(root,.58,.5,.48,x,.33,-2.2,dark);}
 let state={};
 function update(p){
  p=clamp(p);const feedX=p<.035?-8.2:p<.075?mix(-8.2,-6.8,span(p,.035,.075)):p<.1?-6.8:mix(-6.8,-4.65,span(p,.1,.15));
  const feedY=p<.035?mix(1.224,1.7,span(p,0,.035)):p<.075?1.7:p<.1?mix(1.7,.94,span(p,.075,.1)):.94;
  const x=p<.15?feedX:p<.31?-4.65:p<.47?mix(-4.65,1.05,span(p,.31,.47)):p<.77?1.05:p<.89?mix(1.05,4.45,span(p,.77,.83)):mix(4.45,7.6,span(p,.89,.96));
  whole.visible=p<.22;whole.position.set(x,p<.15?feedY:.94,0);feeder.position.set(p<.1?feedX:mix(-6.8,-8.2,span(p,.1,.15)),p<.1?feedY+.19:mix(1.13,2.1,span(p,.1,.125)),0);
  feedMast.scale.y=2.67-feeder.position.y;feedMast.position.set(feeder.position.x,(2.67+feeder.position.y)/2,0);
  blanks.visible=p>=.22&&p<.47;
  const turn=span(p,.33,.43)*Math.PI/2;
  for(let i=0;i<5;i++){
   const y=.94+Math.sin(turn)*.12;carriers[i].position.set(x+(i-2)*.25,y,0);carriers[i].rotation.z=turn;
   cradles[i].visible=p>=.31&&p<.47;cradles[i].position.copy(carriers[i].position);cradles[i].rotation.z=turn;
  }
  saw.position.set(-4.65,p>=.15&&p<.31?1.15:1.68,mix(-1.5,1.5,span(p,.15,.29)));
  sawMast.scale.y=2.45-saw.position.y;sawMast.position.set(-4.65,(2.45+saw.position.y)/2,saw.position.z);
  const mill=clamp((p-.47)/.30)*7,pass=Math.min(6,Math.floor(mill)),f=mill-pass;
  const n=p>=.77?7:Math.floor(mill);
  cutter.position.set(1.05,p>=.47&&p<.77?1.34+.23*(1-Math.sin(Math.PI*f)):1.99,-1.25+pass*P);
  cutterMast.scale.y=2.8-cutter.position.y-.35;cutterMast.position.set(1.05,(2.8+cutter.position.y+.35)/2,cutter.position.z);
  for(let i=0;i<5;i++){
   const m=profiles[i];m.visible=p>=.47;
   if(m.userData.pass!==n){m.geometry.dispose();m.geometry=machined[n].clone();m.children[0].geometry.dispose();m.children[0].geometry=new THREE.EdgesGeometry(m.geometry,30);m.userData.pass=n;}
   m.position.set(x+(i-2)*.25,.94,0);
   if(p>=.94){const r=span(p,.94,.98);m.rotation.z=-r*Math.PI/2;m.position.x=mix(x+(i-2)*.25,x-.12,r);m.position.y=mix(.94,.94+i*.025,r);}else m.rotation.z=0;
  }
  scanner.visible=p>=.82&&p<.9;scanner.position.set(4.45,1.45+Math.sin(p*100)*.05,0);
  pack.position.set(7.6,.82,0);straps.forEach(s=>s.visible=p>.985);marker.visible=p>.95;
  const step=roboticsProcesses.factory.steps.findLastIndex(s=>p>=s.at);
  state={process:'factory',progress:p,step,blanks:5,orientation:p<.47?'flat-to-edge':'on-edge',milledSlots:n,toolApproach:'top',complete:p>=.985};
 }
 update(0);
 const overview=new THREE.Box3(V(-10.1,-.2,-2.7),V(9.1,3.2,2.8));
 return{root,direction:V(.8,1.25,2.6),overviewDirection:V(.8,1.25,2.6),detailDirection:V(2.1,1.6,1.2),focus:overview,overview,background:'#18292c',annotation:'Koncepcja linii automatycznej',update,getRoboticsState:()=>state,getDetailFocus(){const x=[-6.6,-4.65,-.7,1.05,4.45,7.2][state.step];return new THREE.Box3(V(x-1.8,.65,-1.65),V(x+1.8,2.55,1.65));},dispose(){machined.forEach(g=>g.dispose());}};
}

function siteScene(){
 const root=new THREE.Group(),model=getModel(),d=model.dimensions,house=manufacturingScene(3);root.add(house.root);
 const byId=new Map(model.boards.map(b=>[b.id,b])),records=sequence.assembly.map(([id])=>byId.get(id));
 const first=pred=>{const i=records.findIndex(pred);if(i<0)throw Error('Missing construction stage in the robotics example');return i;};
 const starts=[0,first(b=>b.kind==='wall'&&b.axis===1),first(b=>b.kind==='ceiling'),first(b=>b.kind==='roof-slope'),records.length];
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
 const clampFrame=new THREE.Group();root.add(clampFrame);meshBox(clampFrame,.44,.08,.14,0,0,0,dark);
 for(const x of [-.16,.16]){meshBox(clampFrame,.045,.22,.1,x,-.1,0,metal);meshBox(clampFrame,.055,.045,.13,x,-.19,0,green);}
 const pickup=V(xmin+.9,.94,zmax-1.8);
 meshBox(root,3.05,.13,1.2,pickup.x,.7,pickup.z,wood);for(const x of [-1.2,1.2])meshBox(root,.15,.73,1.1,pickup.x+x,.29,pickup.z,dark);
 const source=outlined(beamGeometry(6).translate(-3*P,0,0),wood);source.position.copy(pickup);root.add(source);
 const moving=outlined(new THREE.BoxGeometry(.01,.01,.01),mat('#379b88'));root.add(moving);
 const info=sign(root,'Combstruct 30',d.halfWidth+.15,.15,zmax-.2,2.9,'#254331');
 let active=-1,target=V(),contact=V(),pickRotation=new THREE.Quaternion(),state={};
 function setActive(index){
  if(active===index)return;active=index;const b=records[index];
  target.copy(b.bounds.getCenter(V()));moving.geometry.dispose();moving.children[0].geometry.dispose();
  moving.geometry=b.mesh.geometry.clone().translate(...b.mesh.position.toArray()).translate(-target.x,-target.y,-target.z);moving.children[0].geometry=new THREE.EdgesGeometry(moving.geometry,30);
  const along=V(...b.along);pickRotation.setFromUnitVectors(along,V(1,0,0));
  moving.geometry.computeBoundingBox();contact.set(0,moving.geometry.boundingBox.max.y+.23,0);
  source.geometry.dispose();source.children[0].geometry.dispose();source.geometry=moving.geometry.clone();source.quaternion.copy(pickRotation);source.children[0].geometry=new THREE.EdgesGeometry(source.geometry,30);
 }
 function update(value){
  const p=clamp(value),step=Math.min(4,Math.floor(p*5)),local=clamp(p*5-step);
  if(step===4){house.assembly(1);moving.visible=false;source.visible=false;bridge.position.z=zmax-.5;trolley.position.x=xmax-.5;mast.scale.y=1;mast.position.y=top-.8;wrist.position.set(xmax-.5,top-1.4,bridge.position.z);clampFrame.position.copy(wrist.position).add(V(0,-.32,0));state={process:'site',progress:p,step,installed:records.length,total:records.length,complete:true};return;}
  // A film-like selection of operations, not a claim that skipped parts have
  // been carried during this cycle. Each stage starts from a connected prefix.
  const cycles=4,k=Math.min(cycles-1,Math.floor(local*cycles)),f=clamp(local*cycles-k),index=Math.min(records.length-1,starts[step]+k);
  setActive(index);const placed=f>=.86;house.assembly((index+(placed?1:0))/records.length);
  const safeY=d.roofRidgeY+1.25,abovePick=pickup.clone().setY(safeY),aboveTarget=target.clone().setY(safeY),pose=V();
  if(f<.16)pose.copy(pickup).add(V(0,mix(.5,0,span(f,0,.16)),0));
  else if(f<.35)pose.lerpVectors(pickup,abovePick,span(f,.16,.35));
  else if(f<.60)pose.lerpVectors(abovePick,aboveTarget,span(f,.35,.60));
  else if(f<.86)pose.lerpVectors(aboveTarget,target,span(f,.60,.86));
  else if(f<.92)pose.lerpVectors(target,aboveTarget,span(f,.86,.92));
  else if(f<.98)pose.lerpVectors(aboveTarget,abovePick,span(f,.92,.98));
  else pose.lerpVectors(abovePick,pickup.clone().add(V(0,.5,0)),span(f,.98,1));
  moving.visible=f>=.16&&!placed;source.visible=f<.16;moving.position.copy(pose);moving.quaternion.copy(pickRotation).slerp(new THREE.Quaternion(),span(f,.35,.60));
  const rotatedContact=contact.clone().applyQuaternion(moving.quaternion);rotatedContact.y=Math.max(.3,rotatedContact.y);
  const tool=pose.clone().add(rotatedContact);bridge.position.z=tool.z;trolley.position.x=tool.x;
  const reach=Math.max(.35,top-tool.y-.25);mast.scale.y=reach;mast.position.y=top-reach/2;wrist.position.copy(tool).add(V(0,.05,0));
  clampFrame.position.copy(tool).add(V(0,-.12,0));clampFrame.quaternion.copy(moving.quaternion);
  info.visible=true;
  state={process:'site',progress:p,step,installed:index+(placed?1:0),total:records.length,activeBoard:records[index].id,boardKind:records[index].kind,support:sequence.assembly[index][1],carrying:moving.visible,phase:f<.16?'pick':f<.6?'carry':f<.86?'place':'release',complete:false,selectedOperations:true};
 }
 update(0);
 return{root,direction:V(1.5,1.15,2),distanceScale:.83,focus:new THREE.Box3(V(xmin-1,-.2,zmin-.4),V(xmax+.7,top+.35,zmax+.4)),annotation:'Wybrane operacje · Combstruct 30',update,getRoboticsState:()=>state};
}

export function roboticsScene(process){return process==='site'?siteScene():factoryScene();}
