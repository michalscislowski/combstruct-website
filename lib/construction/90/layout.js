// Shared architectural layout for the model, plans and project facts.
// Metres. X follows the ridge; Z points towards the entrance facade.
export const P = 2.5 / 6;
export const H = .24;
export const T = .018;
const W=23*P,D=16*P,x0=-W/2,x1=W/2,z0=-D/2,z1=D/2;
export const levels = {
  ground: H,
  bearing: 8*P,
  slabBottom: 8*P-H,
  upper: 8*P,
  roofEave: 12*P-H,
  roofRidgeUnderside: 12*P-H+D/2,
};
export const envelope = {width:W,depth:D,x0,x1,z0,z1,wallDepth:H,module:P,
  terraceDepth:7*P,balconyDepth:5*P,canopyDepth:2*P,roofGableOverhang:2*P,
  roofEaveOverhang:P,roofAngle:45,kneeHeight:4*P-H};
export const inner={left:x0+H,right:x1-H,rear:z0+H,front:z1-H};
const snap=(v,o)=>o+Math.round((v-o+H/2)/P)*P-H/2;
export const axes={smallX:snap(-2.88,x0),leftX:snap(-1.21,x0),rightX:snap(1.29,x0),wardrobeX:snap(2.96,x0),hallNotchX:snap(-2.46,x0),officeZ:snap(-.585,z0),utilityZ:snap(1.498,z0),upperBathZ:snap(-1.002,z0),upperBedZ:snap(.248,z0)};
const A=axes,I=inner;
const wall=(id,level,a,b,holes=[])=>({id,level,a,b,depth:H,holes});
// Opening `at` is distance from wall.a along a→b, bottom is absolute Y.
const door=(id,at,width=.85,level='ground')=>({id,kind:'door',at,width,bottom:levels[level],height:2.10});
const window=(id,at,width,bottom,height)=>({id,kind:'window',at,width,bottom,height});
const patio=(id,at,width,level='ground',height=2.40)=>({id,kind:'patio-door',at,width,bottom:levels[level],height});
export const exteriorWalls = [
  wall('ground-rear','ground',[x0,z0+H/2],[x1,z0+H/2],[patio('kitchen-garden-door',-.72-x0,.9),patio('living-rear-glazing',1.59-x0,2.58)]),
  wall('ground-front','ground',[x0,z1-H/2],[x1,z1-H/2],[door('entrance',-2.61-x0,.90),window('utility-window',-4.16-x0,.83,1.34,.95)]),
  wall('ground-left','ground',[x0+H/2,z0],[x0+H/2,z1],[patio('office-window',-2.78-z0,1.40,'ground',2.10),window('ground-bath-window',-.10-z0,.83,1.24,1.1)]),
  wall('ground-right','ground',[x1-H/2,z0],[x1-H/2,z1],[patio('living-terrace-glazing',-2.82-z0,2.85)]),
  wall('upper-rear','upper',[x0,z0+H/2],[x1,z0+H/2]),
  wall('upper-front','upper',[x0,z1-H/2],[x1,z1-H/2]),
  wall('upper-left','upper',[x0+H/2,z0],[x0+H/2,z1],[patio('rear-bedroom-window',-2.40-z0,1.40,'upper',2.10),patio('front-bedroom-window',.90-z0,.90,'upper',2.10)]),
  wall('upper-right','upper',[x1-H/2,z0],[x1-H/2,z1],[patio('master-balcony-door',-.30-z0,2.00,'upper',2.10)]),
];
export const partitions = [
  wall('ground-office-east','ground',[A.leftX,I.rear],[A.leftX,A.officeZ],[door('office-door',-1.59-I.rear,.85)]),
  wall('ground-office-south','ground',[I.left,A.officeZ],[A.leftX-H/2,A.officeZ]),
  wall('ground-service-east','ground',[A.smallX,A.officeZ+H/2],[A.smallX,I.front],[door('bath-door',.08-(A.officeZ+H/2),.85),door('utility-door',1.88-(A.officeZ+H/2),.85)]),
  wall('ground-utility-north','ground',[I.left,A.utilityZ],[A.leftX-H/2,A.utilityZ],[door('vestibule-hall-door',-2.62-I.left,.85)]),
  wall('ground-stair-west','ground',[A.leftX,A.utilityZ+H/2],[A.leftX,I.front]),
  wall('ground-stair-east','ground',[A.rightX,A.upperBedZ],[A.rightX,I.front]),
  wall('upper-rear-bedroom-east','upper',[A.leftX,I.rear],[A.leftX,A.upperBathZ-H/2]),
  wall('upper-hall-notch-west','upper',[A.hallNotchX,A.upperBathZ],[A.hallNotchX,A.upperBedZ]),
  wall('upper-hall-notch-north','upper',[A.hallNotchX,A.upperBathZ],[A.leftX-H/2,A.upperBathZ],[door('rear-bedroom-door',-2.31-A.hallNotchX,.83,'upper')]),
  wall('upper-bedroom-division','upper',[I.left,A.upperBedZ],[A.leftX-H/2,A.upperBedZ],[door('front-bedroom-door',-2.31-I.left,.83,'upper')]),
  wall('upper-front-bedroom-east','upper',[A.leftX,A.upperBedZ+H/2],[A.leftX,I.front]),
  wall('upper-family-bath-east','upper',[A.rightX,I.rear],[A.rightX,A.upperBathZ-H/2]),
  wall('upper-family-bath-south','upper',[A.leftX+H/2,A.upperBathZ],[A.rightX-H/2,A.upperBathZ],[door('family-bath-door',-.92-(A.leftX+H/2),.83,'upper')]),
  wall('upper-suite-divider','upper',[A.wardrobeX,I.rear],[A.wardrobeX,A.upperBathZ-H/2],[{...door('ensuite-door',-2.05-I.rear,.83,'upper'),kind:'sliding-door'}]),
  wall('upper-suite-south','upper',[A.rightX+H/2,A.upperBathZ],[I.right,A.upperBathZ],[{...door('wardrobe-door',3.32-(A.rightX+H/2),.80,'upper'),kind:'sliding-door'}]),
  wall('upper-master-west','upper',[A.rightX,A.upperBathZ+H/2],[A.rightX,I.front],[door('master-door',-.80-(A.upperBathZ+H/2),.83,'upper')]),
];
export const stair = {
  id:'stair', x0:A.leftX+H/2,x1:A.rightX-H/2,z0:A.upperBedZ,z1:I.front,
  floorY:levels.ground,upperY:levels.upper,risers:16,riser:(levels.upper-levels.ground)/16,
  flightWidth:.90,tread:.275,landingDepth:.90,flightTreads:7,
  direction:'up-towards-front-then-back',
  opening:{x0:A.leftX+H/2,x1:A.rightX-H/2,z0:A.upperBedZ,z1:I.front},
};
export const terraces={ground:{x0:x1,x1:x1+7*P,z0,z1},balcony:{x0:x1,x1:x1+5*P,z0,z1}};
export function polygonArea(points){return Math.abs(points.reduce((s,p,i)=>s+p[0]*points[(i+1)%points.length][1]-points[(i+1)%points.length][0]*p[1],0))/2;}
function clipZ(points,limit,above){const out=[];for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length],ai=above?a[1]>=limit:a[1]<=limit,bi=above?b[1]>=limit:b[1]<=limit;if(ai)out.push(a);if(ai!==bi){const t=(limit-a[1])/(b[1]-a[1]);out.push([a[0]+t*(b[0]-a[0]),limit]);}}return out;}
export function atticArea(points){const band=(h)=>{const extent=D/2+(levels.roofEave-levels.upper)-h;return polygonArea(clipZ(clipZ(points,-extent,true),extent,false));};return (band(1.40)+band(2.20))/2;}
function room(id,name,level,points,label){const xs=points.map(p=>p[0]),zs=points.map(p=>p[1]);return{id,name,level,polygon:points,x0:Math.min(...xs),x1:Math.max(...xs),z0:Math.min(...zs),z1:Math.max(...zs),label,area:polygonArea(points),usableArea:level==='upper'?atticArea(points):polygonArea(points)};}
const rect=(x0,z0,x1,z1)=>[[x0,z0],[x1,z0],[x1,z1],[x0,z1]];
export const rooms=[
  room('office','Gabinet / pokój gościnny','ground',rect(I.left,I.rear,A.leftX-H/2,A.officeZ-H/2),[-2.92,-1.28]),
  room('bath-ground','Łazienka','ground',rect(I.left,A.officeZ+H/2,A.smallX-H/2,A.utilityZ-H/2),[-3.77,.75]),
  room('utility','Pom. gospodarcze','ground',rect(I.left,A.utilityZ+H/2,A.smallX-H/2,I.front),[-3.77,2.36]),
  room('vestibule','Wiatrołap','ground',rect(A.smallX+H/2,A.utilityZ+H/2,A.leftX-H/2,I.front),[-2.04,2.27]),
  room('hall-ground','Hol','ground',rect(A.smallX+H/2,A.officeZ+H/2,A.leftX-H/2,A.utilityZ-H/2),[-2.04,.70]),
  room('stairs-ground','Schody','ground',rect(stair.x0,stair.z0,stair.x1,stair.z1),[.05,1.79]),
  room('living','Salon + jadalnia + kuchnia','ground',[[A.leftX+H/2,I.rear],[I.right,I.rear],[I.right,I.front],[A.rightX+H/2,I.front],[A.rightX+H/2,A.upperBedZ],[A.leftX+H/2,A.upperBedZ]], [2.98,.75]),
  room('bed-rear','Sypialnia 1','upper',[[I.left,I.rear],[A.leftX-H/2,I.rear],[A.leftX-H/2,A.upperBathZ-H/2],[A.hallNotchX-H/2,A.upperBathZ-H/2],[A.hallNotchX-H/2,A.upperBedZ-H/2],[I.left,A.upperBedZ-H/2]],[-3.65,-.55]),
  room('bed-front','Sypialnia 2','upper',rect(I.left,A.upperBedZ+H/2,A.leftX-H/2,I.front),[-3.1,1.55]),
  room('bath-family','Łazienka','upper',rect(A.leftX+H/2,I.rear,A.rightX-H/2,A.upperBathZ-H/2),[.05,-1.70]),
  room('bath-suite','Łazienka prywatna','upper',rect(A.rightX+H/2,I.rear,A.wardrobeX-H/2,A.upperBathZ-H/2),[2.12,-2.04]),
  room('wardrobe','Garderoba','upper',rect(A.wardrobeX+H/2,I.rear,I.right,A.upperBathZ-H/2),[3.57,-1.78]),
  room('master','Sypialnia główna','upper',rect(A.rightX+H/2,A.upperBathZ+H/2,I.right,I.front),[2.99,.56]),
  room('hall-upper','Hol','upper',rect(A.hallNotchX+H/2,A.upperBathZ+H/2,A.rightX-H/2,A.upperBedZ-H/2),[-.62,-.39]),
];
export const facts={
  groundArea:rooms.filter(r=>r.level==='ground').reduce((s,r)=>s+r.usableArea,0),
  upperArea:rooms.filter(r=>r.level==='upper').reduce((s,r)=>s+r.usableArea,0),
  upperFloorArea:rooms.filter(r=>r.level==='upper').reduce((s,r)=>s+r.area,0),
  terraceArea:7*P*D,balconyArea:5*P*D,bedrooms:3,groundOffice:true,bathrooms:3,
};
facts.usableArea=facts.groundArea+facts.upperArea;
export const layout={envelope,levels,inner,axes,exteriorWalls,partitions,rooms,stair,terraces,facts};
export default layout;
