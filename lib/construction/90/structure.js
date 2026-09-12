import * as THREE from 'three';
import layout from './layout.js';
import connectorSchedule from './connectors.json';
import {createConstruction} from '../core.js';
import {horizontalPanel,normalizeWalls,wallPanel} from '../panels.js';
export const P=2.5/6,H=.24,T=.018;
const HALF=H/2,EPS=1e-7;
const X=new THREE.Vector3(1,0,0),Y=new THREE.Vector3(0,1,0),Z=new THREE.Vector3(0,0,1);
export function buildStructure(materials={},options={}){
  const wood=materials.wood||new THREE.MeshStandardMaterial({color:'#ba7c43',roughness:.85});
  const end=materials.end||wood,root=new THREE.Group();root.name='Combstruct 90';
  const group=name=>{const g=new THREE.Group();g.name=name;root.add(g);return g;};
  const sides=['rear','left','front','right'];
  const groups={floor:group('Podłoga i ciągły taras'),groundWalls:sides.map(s=>group(`Parter — ${s}`)),upperWalls:sides.map(s=>group(`Poddasze — ${s}`)),groundPartitions:group('Ściany wewnętrzne parteru'),upperPartitions:group('Ściany wewnętrzne poddasza'),slab:group('Strop, balkon i zadaszenia'),ceiling:group('Sufit poddasza'),roof:group('Dach 45°'),gables:[group('Szczyt lewy'),group('Szczyt prawy')],canopy:group('Obramowanie zadaszenia'),balconySupports:group('Podparcie balkonu'),stairs:group('Schody')};
  const {envelope:E,levels:L}=layout,{width:W,depth:D,x0,x1,z0,z1}=E;
  const slabShift=0,upperPartitionBase=L.slabBottom,ceilingBottom=upperPartitionBase+8*P-H,ceilingTop=ceilingBottom+H;
  const engine=createConstruction(materials,connectorSchedule,options),{boards,segments,openStock,addBoard}=engine;
  const wallPanels=[],joints=[],openings={ground:[],upper:[],partitions:[],roof:[]};
  const dimensions={...E,floorBottom:0,floorTop:H,wallTop:L.bearing,clearHeight:L.slabBottom-H,slabBottom:L.slabBottom,slabTop:L.upper,upperFloorY:L.upper,storeyHeight:L.upper-H,ceilingBottom,ceilingTop,roofEaveY:L.roofEave,roofUnderRidgeY:L.roofRidgeUnderside,roofRidgeY:L.roofRidgeUnderside+H*Math.SQRT2,roofOverhang:E.roofEaveOverhang,slabShift:{x:slabShift,z:slabShift},upperCeilingShift:{x:2*slabShift,z:2*slabShift},usableConceptArea:layout.facts.usableArea,groundArea:layout.facts.groundArea,upperArea:layout.facts.upperArea,upperFloorArea:layout.facts.upperFloorArea,structuralFootprintArea:W*D,terraceArea:layout.facts.terraceArea,balconyArea:layout.facts.balconyArea,boardDepth:H,boardThickness:T,constructionOnly:true};

  const roofPlanes=[{n:new THREE.Vector3(0,1,1),c:L.roofRidgeUnderside},{n:new THREE.Vector3(0,1,-1),c:L.roofRidgeUnderside}];
  const supports=[...['rear','front'].map((side,i)=>({id:`balcony-support-${side}`,level:'ground',axis:1,a:[x0+28*P-HALF,i?z1-2*P:z0],b:[x0+28*P-HALF,i?z1:z0+2*P],exterior:false,support:true,holes:[]}))];
  const specs=normalizeWalls([...layout.exteriorWalls.map(w=>({...w,exterior:true})),...layout.partitions,...supports],E);
  const ground=specs.filter(w=>w.level==='ground'),upper=specs.filter(w=>w.level==='upper');
  horizontalPanel(engine,groups.floor,{x0,z0,nx:30,nz:16,top:H,kind:'floor',walls:ground});
  const slabOrigin=new THREE.Vector3(x0,L.slabBottom+HALF,z0-2*P);
  const stairHole={u0:layout.stair.opening.z0-slabOrigin.z,u1:layout.stair.opening.z1-slabOrigin.z,v0:layout.stair.opening.x0-slabOrigin.x,v1:layout.stair.opening.x1-slabOrigin.x};
  horizontalPanel(engine,groups.slab,{x0,z0:z0-2*P,nx:28,nz:20,top:L.upper,kind:'slab',walls:[...ground,...upper],holes:[stairHole]});
  horizontalPanel(engine,groups.ceiling,{x0,z0,nx:23,nz:16,top:ceilingTop,kind:'ceiling',walls:upper,planes:roofPlanes});
  const wallAxes=Array.from({length:22},(_,i)=>x0+(i+1)*P),roofAxes=[];
  for(const w of specs){
    const isUpper=w.level==='upper',base=isUpper?L.slabBottom:0;
    const n=w.exterior&&isUpper?Math.ceil((L.roofRidgeUnderside-base)/P)+1:8;
    let target;
    if(w.support){target=new THREE.Group();target.name=w.id;groups.balconySupports.add(target)}
    else if(w.exterior){const si=sides.indexOf(w.id.replace(isUpper?'upper-':'ground-',''));target=(isUpper?groups.upperWalls:groups.groundWalls)[si]}
    else{target=new THREE.Group();target.name=w.id;(isUpper?groups.upperPartitions:groups.groundPartitions).add(target)}
    const holes=w.holes.map(h=>{
      const start=(w.axis===0?w.a[0]:w.a[1])+h.at,u0=start-w.start,u1=u0+h.width;
      const world=w.axis===0?{x0:start,x1:start+h.width,z0:w.fixed-HALF,z1:w.fixed+HALF,y0:h.bottom,y1:h.bottom+h.height}:{x0:w.fixed-HALF,x1:w.fixed+HALF,z0:start,z1:start+h.width,y0:h.bottom,y1:h.bottom+h.height};
      return{...h,u0,u1,v0:h.bottom-base,v1:h.bottom+h.height-base,world};
    });
    openings[w.exterior?w.level:'partitions'].push(...holes);
    const continues=pos=>isUpper&&(w.exterior||ground.some(o=>!o.support&&o.axis===w.axis&&Math.abs(o.fixed-w.fixed)<EPS&&pos>o.start+EPS&&pos<o.end-EPS));
    const panel=wallPanel(engine,w,specs,{target,base,modules:n,cap:!!(isUpper&&w.exterior),holes,planes:isUpper?roofPlanes:[],verticalGaps:isUpper&&w.exterior?[{at:8,side:'right',layer:0}]:[],continueFromBelow:continues});
    wallPanels.push(panel);
  }
  const angle=Math.PI/4,sine=Math.sin(angle),cosine=Math.cos(angle),roofX=x0-2*P,roofN=27,roofU=-P/2,roofRun=D/2+P;
  const slopeModules=Math.ceil((roofRun/cosine-roofU)/P)+1,roofCenterY=L.roofRidgeUnderside+HALF/cosine;
  for(const side of [-1,1]){
    const u=new THREE.Vector3(0,-sine,side*cosine),n=new THREE.Vector3(0,cosine,side*sine),origin=new THREE.Vector3(roofX,roofCenterY,0).addScaledVector(u,roofU);
    const target=new THREE.Group();target.name=side===-1?'roof-rear':'roof-front';groups.roof.add(target);
    const planes=side===-1?[{n:Z.clone(),c:0},{n:Z.clone().negate(),c:roofRun}]:[{n:Z.clone().negate(),c:0},{n:Z.clone(),c:roofRun}];
    // Three rooflights above the rear attic rooms, below the flat central ceiling.
    const roofHoles=side===-1?[7,13,17].map((i,k)=>({id:`rooflight-${k+1}`,kind:'rooflight',u0:6*P+T,u1:8*P-T,v0:(i-.5)*P+T,v1:(i+1.5)*P-T})):[];
    openings.roof.push(...roofHoles.map(h=>({...h,roofSide:side,frame:{origin:origin.toArray(),along:u.toArray(),across:X.toArray()}})));
    for(let j=1;j<roofN;j++){
      const x=roofX+j*P;if(side===-1)roofAxes.push(x);
      for(const stock of segments(slopeModules)){
        const p={...stock,trim:null};
        for(const f of openStock(p,0,j*P+((p.layer^(side===-1?0:1))===0?-T:0),roofHoles))addBoard(target,f,u,n,X,origin.clone().addScaledVector(X,j*P),{kind:'roof-slope',axis:0,index:j,roofSide:side},side===-1?0:1,planes);
      }
    }
    for(let i=1;i<slopeModules;i++)for(const p of segments(roofN))for(const f of openStock(p,1,i*P+(p.layer===0?-T:0),roofHoles))addBoard(target,f,X,n.clone().negate(),u,origin.clone().addScaledVector(u,i*P),{kind:'roof-cross',axis:1,index:i,roofSide:side},0,planes);
  }

  // Stair treads and risers are separate cut sheet parts; they are deliberately
  // not counted as standard Combstruct stock or substituted for wall ribs.
  const stair=layout.stair,r=stair.riser,walkMat=materials.stair||wood;
  function stepBox(name,x,y,z,w,h,d){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),walkMat);mesh.name=name;mesh.position.set(x+w/2,y-h/2,z+d/2);mesh.castShadow=true;mesh.receiveShadow=true;groups.stairs.add(mesh);return mesh;}
  for(let i=0;i<7;i++){
    const y=stair.floorY+(i+1)*r,z=stair.z0+i*stair.tread;
    stepBox(`Stopień dolny ${i+1}`,stair.x0+2*T,y,z,.9,2*T,stair.tread);
    stepBox(`Podstopnica dolna ${i+1}`,stair.x0+2*T,y-2*T,z,.9,r-2*T,T);
    const z2=stair.z0+(6-i)*stair.tread,y2=stair.floorY+(9+i)*r;
    stepBox(`Stopień górny ${i+1}`,stair.x1-.9-2*T,y2,z2,.9,2*T,stair.tread);
    stepBox(`Podstopnica górna ${i+1}`,stair.x1-.9-2*T,y2-2*T,z2+stair.tread-T,.9,r-2*T,T);
  }
  stepBox('Spocznik',stair.x0,stair.floorY+8*r,stair.z0+7*stair.tread,stair.x1-stair.x0,2*T,.9);
  stepBox('Podstopnica spocznika',stair.x0+2*T,H+8*r-2*T,stair.z0+7*stair.tread-T,.9,r-2*T,T);
  stepBox('Podstopnica wyjścia',stair.x1-.9-2*T,L.upper-2*T,stair.z0,.9,r-2*T,T);
  function stringer(name,x,za,ya,zb,yb){
    const shape=new THREE.Shape();shape.moveTo(za,ya-.10);shape.lineTo(zb,yb-.10);shape.lineTo(zb,yb+.10);shape.lineTo(za,ya+.10);shape.closePath();
    const g=new THREE.ExtrudeGeometry(shape,{depth:2*T,bevelEnabled:false,curveSegments:1});g.applyMatrix4(new THREE.Matrix4().makeBasis(Z,Y,X.clone().negate()));g.translate(x+2*T,0,0);
    const m=new THREE.Mesh(g,walkMat);m.name=name;m.castShadow=true;m.receiveShadow=true;groups.stairs.add(m);
  }
  const landingZ=stair.z0+7*stair.tread,landingY=H+8*r;
  for(const x of [stair.x0,stair.x0+.9+2*T])stringer('Policzek dolnego biegu',x,stair.z0,H+.10,landingZ,landingY-2*T-.10);
  for(const x of [stair.x1-.9-4*T,stair.x1-2*T])stringer('Policzek górnego biegu',x,landingZ,landingY-2*T-.10,stair.z0,L.upper-2*T-.10);
  const stairClearanceStations=[];
  const station=(y,z,part)=>stairClearanceStations.push({part,y,z,clearance:Math.min(ceilingBottom,L.roofRidgeUnderside-Math.abs(z))-y});
  for(let i=0;i<7;i++){for(const f of [0,.5,1]){station(H+(i+1)*r,stair.z0+(i+f)*stair.tread,'lower-flight');station(H+(9+i)*r,stair.z0+(6-i+f)*stair.tread,'upper-flight');}}
  for(const f of [0,.5,1])station(landingY,landingZ+.9*f,'landing');
  station(L.upper,stair.z0-.1,'upper-arrival');
  dimensions.stair={...stair,outerFlightWidth:.9+4*T,centreGap:stair.x1-stair.x0-2*(.9+4*T),clearanceToStructuralEnvelope:Math.min(...stairClearanceStations.map(p=>p.clearance)),clearanceStations:stairClearanceStations};
  dimensions.floorBounds={x0,x1:x1+7*P,z0,z1};dimensions.slabBounds={x0:slabOrigin.x,x1:slabOrigin.x+28*P,z0:slabOrigin.z,z1:slabOrigin.z+20*P};
  const rooms=layout.rooms.map(r=>({...r,polygon:r.polygon.map(([x,z])=>({x,z}))}));

  const validation={module:P,stockMaxLength:2.5,terminalDifference:H,pairWidth:2*T,slabPlanShift:0,junctionsCoplanar:true,wallAxes,roofAxes,roofAxesAligned:wallAxes.every(x=>roofAxes.some(a=>Math.abs(a-x)<EPS)),floorTerraceContinuous:true,slabBalconyContinuous:true,shortBearingDirection:'Z',shortBearingSlots:'up',exteriorVerticalSlots:'outward',connectorBoards:boards.filter(b=>b.connectorCuts.length).length,roofPitchDegrees:45,ridgeInteriorAngle:90,rooflightCount:3,loadValidated:false};
  root.updateMatrixWorld(true);
  return{root,groups,boards,dimensions,wallPanels,openings,rooms,joints,validation,layout};
}
