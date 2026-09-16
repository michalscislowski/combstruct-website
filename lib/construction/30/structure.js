import * as THREE from 'three';
import {createConstruction} from '../core.js';
import connectorSchedule from './connectors.json';
import {roofWallLap} from '../roof-wall-lap.js';

// Dimensional convention retained from the previously accepted demonstration models.
export const P = 2.5 / 6;
export const H = .24;
export const T = .018;
const HALF = H / 2;
const X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1);
const EPS = 1e-7;

export function buildStructure(materials = {}, options = {}) {
  const lengthJoints=options.jointStrategy!=='lateral-cuts';
  const depthOffset=HALF+(lengthJoints?T:0);
  const wood = materials.wood || new THREE.MeshStandardMaterial({color: '#ba7c43', roughness: .85});
  const end = materials.end || wood;
  const root = new THREE.Group(); root.name = 'Combstruct 30 — węzły w jednej osi';
  const group = name => { const g = new THREE.Group(); g.name = name; root.add(g); return g; };
  const groups = { floor: group('Płyta podłogowa i ciągły taras'), walls: ['rear', 'left', 'front', 'right'].map(name => group(name)), partitions: group('Ściany wewnętrzne'), ceiling: group('Sufit'), roof: group('Dach 35°'), gables: group('Poziome rzędy szczytów'), pergola: group('Pergola') };
  const W = 13 * P, D = 15 * P, terraceDepth = 7 * P;
  const x0 = -W / 2, x1 = W / 2, z0 = -D / 2, z1 = D / 2, terraceZ = z0 - terraceDepth;
  const ceilingModule = 8, wallTop = ceilingModule * P, ceilingBottom = lengthJoints?wallTop+T:wallTop-H, ceilingTop = ceilingBottom+H;
  const angle = 35 * Math.PI / 180, sine = Math.sin(angle), cosine = Math.cos(angle), tangent = Math.tan(angle);
  // The vertical wall boards extend through the ceiling band to the roof underside.
  const roofEaveY = ceilingTop-(lengthJoints?T*tangent:0), roofUnderRidgeY = roofEaveY + tangent * W / 2;
  const roofRidgeY = roofUnderRidgeY + H / cosine;
  const roofLap=lengthJoints?roofWallLap({pitch:35,spanHalf:W/2,ridgeUnderside:roofUnderRidgeY,axis:0}):null;
  const dimensions = {width: W, depth: D, halfWidth: W / 2, halfDepth: D / 2, terraceDepth, terraceRearZ: terraceZ, wallDepth: H, floorBottom: 0, floorTop: H, wallTop, ceilingBottom, ceilingTop, clearHeight: ceilingBottom - H, roofAngle: 35, roofEaveY, roofUnderRidgeY, roofRidgeY, roofOverhang: P, module: P, boardDepth: H, boardThickness: T, referenceWidth: 5.65, referenceDepth: 6.10, roofGableOverhang: P, constructionOnly: true};
  const engine=createConstruction({wood,end},connectorSchedule,{...options,connectors:lengthJoints?false:options.connectors});
  const {boards,segments,openStock,addBoard,grid}=engine;
  const wallPanels=[],joints=[],openings={rear:[],left:[],front:[],right:[],partitions:[]};
  const jointStock=(modules,phase=0,gaps=[],offset=2,terminals={left:true,right:true})=>engine.jointStock(modules,phase,lengthJoints?gaps.map(g=>({...g,fullEndSlot:true})):gaps,offset,{...terminals,extraTrim:terminals.extraTrim??lengthJoints});

  const bedX=x0+6*P-depthOffset, bathX=bedX, dividerZ=z0+8*P-depthOffset;
  const floorOrigin=new THREE.Vector3(x0,HALF,terraceZ);
  function horizontalPanel(target,nx,nz,origin,kind) {
    const terrace=kind==='floor', houseOffset=terrace?7:0;
    for(let axis=0;axis<2;axis++) {
      const length=axis===0?nx:nz,count=axis===0?nz:nx;
      for(let i=1;i<count;i++) {
        // Reserve the upright ply at each junction. Full end slots and length
        // adjustments keep the transverse rib clear on its original line.
        const gaps=[];
        if(axis===0&&i>houseOffset)gaps.push({at:6,side:'right',layer:1});
        if(axis===1) {
          if(terrace)gaps.push({at:7,side:'left',layer:1});
          if(i<6)gaps.push({at:houseOffset+8,side:'right',layer:1});
        }
        let stocks=jointStock(length,0,gaps);
        for(const p of stocks)addBoard(target,p,axis===0?X:Z,axis===0?Y:Y.clone().negate(),axis===0?Z:X,origin.clone().addScaledVector(axis===0?Z:X,i*P),{kind,axis,index:i},0);
      }
    }
  }
  horizontalPanel(groups.floor,13,22,floorOrigin,'floor');

  const sideNames = ['rear', 'left', 'front', 'right'];
  // At the rear the floor continues onto the terrace. Keep the rear face of the
  // vertical boards just beside, rather than inside, its full transverse rib.
  const wallOrigins = [new THREE.Vector3(x0, 0, z0 + depthOffset), new THREE.Vector3(x0 + depthOffset, 0, z0), new THREE.Vector3(x0, 0, z1 - depthOffset), new THREE.Vector3(x1 - depthOffset, 0, z0)];
  const wallNormals = [Z, X, Z.clone().negate(), X.clone().negate()];
  function hole(side, kind, a, b, bottom, top, id) {
    return {id, kind, u0: a * P + T, u1: b * P - T, v0: bottom, v1: top};
  }
  openings.front = [hole('front','window',1,3,3*P+T,6*P-T,'front-window-left'), hole('front','door',6,9,H,6*P-T,'entrance'), hole('front','window',10,12,3*P+T,6*P-T,'front-window-right')];
  openings.rear = [hole('rear','window',1,5,2*P+T,6*P-T,'bedroom-window'), hole('rear','door',8,12,H,6*P-T,'terrace-door')];
  openings.right = [hole('right','window',3,7,2*P+T,6*P-T,'living-window')];
  function describeHole(h, wallId, axis, origin, fixed) {
    const along0 = (axis === 0 ? origin.x : origin.z) + h.u0, along1 = (axis === 0 ? origin.x : origin.z) + h.u1;
    Object.assign(h, {wallId, axis, origin: {x: origin.x, y: origin.y, z: origin.z}, world: axis === 0 ? {x0: along0, x1: along1, z0: fixed-HALF, z1: fixed+HALF, y0: h.v0, y1: h.v1} : {x0: fixed-HALF, x1: fixed+HALF, z0: along0, z1: along1, y0: h.v0, y1: h.v1}});
    return h;
  }
  const gablePlanes = [{n: new THREE.Vector3(-tangent,1,0), c: roofEaveY + tangent*W/2}, {n: new THREE.Vector3(tangent,1,0), c: roofEaveY + tangent*W/2}];
  const fullHeightModules = Math.ceil(roofUnderRidgeY/P)+1;
  for (let wi = 0; wi < 4; wi++) {
    const axis = wi % 2, along = axis === 0 ? X : Z, origin = wallOrigins[wi], fixed = axis === 0 ? origin.z : origin.x, count = axis === 0 ? 13 : 15;
    const side = sideNames[wi], holes = openings[side]; holes.forEach(h => describeHole(h, side, axis, origin, fixed));
    wallPanels.push({id: side, axis, start: axis===0?origin.x:origin.z, end: (axis===0?origin.x:origin.z) + count*P - (axis===0?T:2*T), fixed, depth: H, holes, exterior: true, origin: {x:origin.x,y:0,z:origin.z}});
    for(let direction=0;direction<2;direction++) {
      const len=direction===0?count:fullHeightModules, phase=direction===0?(axis===0?0:1):1;
      for(let i=1;i<(direction===0?ceilingModule+1:count);i++) {
        const gaps=direction===0?(axis===0?[{at:6,side:'right',layer:1}]:wi===1?[{at:8,side:'right',layer:0}]:[]):[{at:ceilingModule,side:lengthJoints?'left':'right',layer:0}];
        for(const stock of jointStock(len,phase,gaps,2,{left:true,right:true,extraTrim:lengthJoints&&direction===0})) {
          const p={...stock};if(direction===1&&p.trim==='right'&&p.start+p.pixels*P===len*P)p.trim=null;
          const transverse=i*P+((p.layer^phase)===0?-T:0);
          const treatment=roofLap&&axis===1&&direction===1?roofLap.side(wi===1?-1:1).wall(p.layer^phase):null;
          for(const f of openStock(p,direction,transverse,holes))addBoard(groups.walls[wi],f,direction===0?along:Y,direction===0?wallNormals[wi]:wallNormals[wi].clone().negate(),direction===0?Y:along,origin.clone().addScaledVector(direction===0?Y:along,i*P),{kind:'wall',axis:direction,index:i,...(treatment?{roofLap:treatment.role}:{})},phase,treatment?.planes||(direction===1||i===ceilingModule?gablePlanes:[]),treatment?.regions||[]);
        }
      }
    }
    if (axis===0) for (let row=ceilingModule+1; row<fullHeightModules; row++) for (const p of segments(13)) {
      for (const f of openStock(p,0,row*P+(p.layer===0?-T:0),holes)) addBoard(groups.gables,f,X,wallNormals[wi],Y,origin.clone().addScaledVector(Y,row*P),{kind:'gable',axis:0,index:row,wallId:side},0,gablePlanes);
    }
  }

  horizontalPanel(groups.ceiling,13,15,new THREE.Vector3(x0,ceilingBottom+HALF,z0),'ceiling');

  const inner={left:x0+depthOffset+HALF,right:x1-depthOffset-HALF,rear:z0+depthOffset+HALF,front:z1-depthOffset-HALF};
  function partition(id,axis,modules,fixed,doorIndices=[]) {
    const panel=new THREE.Group();panel.name=id;groups.partitions.add(panel);
    const origin=axis===0?new THREE.Vector3(x0,0,fixed):new THREE.Vector3(fixed,0,z0);
    const along=axis===0?X:Z,normal=axis===0?Z:X;
    const holes=doorIndices.map(([a,b])=>({id:`${id}-door-${a}`,kind:'door',u0:a*P+T,u1:b*P-T,v0:H,v1:6*P-T}));
    holes.forEach(h=>describeHole(h,id,axis,origin,fixed));openings.partitions.push(...holes);
    panel.userData={id,axis,start:axis===0?x0:z0,end:(axis===0?x0:z0)+modules*P,fixed,depth:H,holes,origin:{x:origin.x,y:0,z:origin.z}};
    wallPanels.push({...panel.userData,exterior:false});
    for(let direction=0;direction<2;direction++) {
      const phase=direction===0?(axis===0?0:1):1,len=direction===0?modules:ceilingModule+(lengthJoints?1:0);
      const gaps=direction===0?(axis===1?[{at:8,side:'right',layer:0}]:[]):lengthJoints?[{at:ceilingModule,side:'left',layer:0}]:[];
      for(let i=1;i<(direction===0?ceilingModule+(lengthJoints?1:0):modules);i++) {
        for(const stock of jointStock(len,phase,gaps,2,{left:true,right:!(lengthJoints&&direction===1),extraTrim:lengthJoints&&direction===0})) {
          const p={...stock};
          // The same reserved ply accepts the full floor/ceiling rib at both ends.
          for(const f of openStock(p,direction,i*P+((p.layer^phase)===0?-T:0),holes))addBoard(panel,f,direction===0?along:Y,direction===0?normal:normal.clone().negate(),direction===0?Y:along,origin.clone().addScaledVector(direction===0?Y:along,i*P),{kind:'partition',wallId:id,axis:direction,index:i},phase,lengthJoints?[{n:Y,c:ceilingTop}]:[]);
        }
      }
    }
  }
  partition('bedroom-right',1,15,bedX,[[5,7],[10,12]]);
  partition('bedroom-front',0,6,dividerZ);
  const bedroom={id:'bedroom',name:'Sypialnia',x0:inner.left,x1:bedX-HALF,z0:inner.rear,z1:dividerZ-HALF};
  const bathroom={id:'bathroom',name:'Łazienka',x0:inner.left,x1:bathX-HALF,z0:dividerZ+HALF,z1:inner.front};
  const livingPolygon=[{x:bedX+HALF,z:inner.rear},{x:inner.right,z:inner.rear},{x:inner.right,z:inner.front},{x:bathX+HALF,z:inner.front},{x:bathX+HALF,z:dividerZ+HALF},{x:bedX+HALF,z:dividerZ+HALF}];
  const polygonArea=poly=>Math.abs(poly.reduce((a,p,i)=>a+p.x*poly[(i+1)%poly.length].z-poly[(i+1)%poly.length].x*p.z,0))/2;
  const rooms=[bedroom,bathroom].map(room=>({...room,area:(room.x1-room.x0)*(room.z1-room.z0)}));
  rooms.push({id:'living',name:'Salon z kuchnią',x0:bathX+HALF,x1:inner.right,z0:inner.rear,z1:inner.front,polygon:livingPolygon,area:polygonArea(livingPolygon)});

  // Both roof halves are clipped to x=0. Their complete 24 cm sections meet at a
  // true 110-degree ridge mitre; no pretend 90-degree half-lap or overlapping ends.
  const roofZ=z0-P, roofN=17, roofU=roofLap?.phaseOrigin??-P/2, roofRun=W/2+P;
  const slopeModules=Math.ceil((roofRun/cosine-roofU)/P)+1;
  const roofCenterY=roofUnderRidgeY+HALF/cosine;
  const roofAxes=[], wallAxes=Array.from({length:14},(_,i)=>z0+(i+1)*P);
  for(const side of [-1,1]) {
    const u=new THREE.Vector3(side*cosine,-sine,0), n=new THREE.Vector3(side*sine,cosine,0);
    const origin=new THREE.Vector3(0,roofCenterY,roofZ).addScaledVector(u,roofU);
    const roofPart=new THREE.Group();roofPart.name=side===-1?'roof-left':'roof-right';groups.roof.add(roofPart);
    const planes=side===-1?[{n:X.clone(),c:0},{n:X.clone().negate(),c:roofRun}]:[{n:X.clone().negate(),c:0},{n:X.clone(),c:roofRun}];
    for(let j=1;j<roofN;j++) {
      const z=roofZ+j*P;
      if(side===-1)roofAxes.push(z);
      for(const stock of segments(slopeModules)) {
        const p={...stock,trim:null};
        const phase=side===-1?0:1,supported=roofLap&&z>z0+EPS&&z<z1-EPS;
        const treatments=supported?roofLap.side(side).roof(p.layer^phase):[{planes:[],regions:[]}];
        for(const treatment of treatments)addBoard(roofPart,p,u,n,Z,origin.clone().addScaledVector(Z,j*P),{kind:'roof-slope',axis:0,index:j,roofSide:side,...(supported?{roofLap:treatment.role}:{}),detail:'Roof-wall lap between adjacent slots'},phase,[...planes,...treatment.planes],treatment.regions);
      }
    }
    for(let i=1;i<slopeModules;i++)for(const p of segments(roofN))addBoard(roofPart,p,Z,n.clone().negate(),u,origin.clone().addScaledVector(u,i*P),{kind:'roof-cross',axis:1,index:i,roofSide:side},0,planes);
  }

  dimensions.usableConceptArea=rooms.reduce((sum,room)=>sum+room.area,0);
  if(roofLap)dimensions.roofWallJoint={strategy:'between-slots',clearance:roofLap.clearance,phaseOrigin:roofLap.phaseOrigin,wallCenter:roofLap.wallCenter,slotInner:roofLap.slotInner,slotOuter:roofLap.slotOuter,slabBeveled:false,knee:false};
  dimensions.structuralFootprintArea=W*D;dimensions.terraceArea=W*terraceDepth;

  joints.push(
    {id:'edge-floor',title:'Podłoga — ściana zewnętrzna',description:'Długi pion zajmuje miejsce po zakończeniu podłogi. Krótki pion opiera się na pełnej desce.',position:[x0+3*P,H/2,z1-HALF],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:groups.floor.name,axis:1,index:3},{surface:'front',axis:1,index:3}]},
    {id:'terrace',title:'Podłoga — ściana — taras',description:'Pełny wpust na końcu deski i zakończenie krótsze o dodatkowe 18 mm odsłaniają miejsce na poprzeczne żebro podłogi.',position:[x0+7*P,H/2,z0+HALF],planeAxis:0,viewDirection:[1.6,1.0,1.3],members:[{surface:groups.floor.name,axis:1,index:7},{surface:'rear',axis:1,index:7}],crossingMembers:[{surface:groups.floor.name,axis:0,index:7}]},
    {id:'interior-floor',title:'Podłoga — ściana wewnętrzna',description:'Długości zakończeń i pełny wpust tworzą miejsce na ścianę oraz poprzeczne żebro podłogi.',position:[bedX,H/2,z0+3*P],planeAxis:2,viewDirection:[1.2,1.0,1.8],members:[{surface:groups.floor.name,axis:0,index:10},{surface:'bedroom-right',axis:1,index:3}],crossingMembers:[{surface:groups.floor.name,axis:1,index:6}]},
    {id:'wall-wall',title:'Ściana wewnętrzna — zewnętrzna',description:'Pełny wpust i krótsze zakończenie pozwalają połączyć obie ściany bez bocznych wybrań.',position:[bedX,3*P,z0+HALF],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:'rear',axis:0,index:3},{surface:'bedroom-right',axis:0,index:3}],crossingMembers:[{surface:'rear',axis:1,index:6}]},
    {id:'partition-t',title:'Połączenie ścian wewnętrznych',description:'Przegroda poprzeczna zamyka się w warstwach ciągłej ściany. Długości zakończeń pozostawiają miejsce na pion.',position:[bedX,3*P,dividerZ],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:'bedroom-right',axis:0,index:3},{surface:'bedroom-front',axis:0,index:3}],crossingMembers:[{surface:'bedroom-right',axis:1,index:8}]},
    {id:'ceiling-wall',title:'Strop — ściana zewnętrzna',description:'Strop leży na poziomym rzędzie ściany. Pełny wpust kończy dolną deskę, a górne zakończenie zaczyna się 258 mm od osi węzła.',position:[x0+HALF,ceilingBottom+HALF,z0+9*P],planeAxis:2,viewDirection:[1.3,1.0,1.7],members:[{surface:'left',axis:1,index:9},{surface:groups.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:'left',axis:0,index:ceilingModule}]},
    {id:'connector-120',title:'Strop na poziomym żebrze — drugi kierunek',description:'Także w drugim kierunku strop leży nad poziomym żebrem ściany. Połączenie wynika z długości desek.',position:[x0+3*P,ceilingBottom+HALF,z1-HALF],planeAxis:0,viewDirection:[1.6,1.0,1.3],members:[{surface:'front',axis:1,index:3},{surface:groups.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:'front',axis:0,index:ceilingModule}]},
    {id:'ceiling-partition',title:'Strop — ściana wewnętrzna',description:'Strop opiera się na poziomym rzędzie ściany wewnętrznej. Pełny wpust i krótsze zakończenie utrzymują wspólną linię żeber.',position:[bedX,ceilingBottom+HALF,z0+3*P],planeAxis:2,viewDirection:[1.3,1.0,1.7],members:[{surface:'bedroom-right',axis:1,index:3},{surface:groups.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:groups.ceiling.name,axis:1,index:6}]}
  );
  const validation={module:P,stockMaxLength:2.5,terminalDifference:H,pairWidth:2*T,junctionsCoplanar:true,floorTerraceContinuous:true,partitionGroundY:0,partitionShortY:H,exteriorVerticalSlots:'outward',ceilingModule,ceilingTop,roofPitchDegrees:35,roofAxes,wallAxes,roofAxesAligned:wallAxes.every(z=>roofAxes.some(r=>Math.abs(r-z)<EPS)),connectorBoards:boards.filter(b=>b.connectorCuts.length).length,jointStrategy:lengthJoints?'full-end-slot':'lateral-cuts',fullEndSlotMm:lengthJoints?36:null,additionalEndTrimMm:lengthJoints?18:0,ceilingOnWallCap:lengthJoints,connectorVariants:lengthJoints?[]:[{position:'corner',edge:'slotted',removedMm:[18,102]},{position:'corner',edge:'plain',removedMm:[18,120]},{position:'inset',edge:'slotted',removedMm:[18,120],offsetMm:120},{position:'inset',edge:'plain',removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:['terrace-floor-cross-row','divider-floor-cross-row','exterior-wall-cap-rows','interior-wall-tangent-floor-and-ceiling-ribs','wall-to-wall-uprights'],remainingJunctionAssumptions:lengthJoints?'Geometric model only; joint strength and erection stability are not verified.':'Interior wall cap rows omitted in the lateral-cut layout.',loadValidated:false};
  root.updateMatrixWorld(true);
  return {root,groups,openings,rooms,dimensions,boards,joints,wallPanels,validation};
}
