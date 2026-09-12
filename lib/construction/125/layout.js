import {P as PIXEL,H} from '../core.js';
const total=12.5,depth=10;
const snapInterior=(v,o)=>o+Math.round((v-o+H/2)/PIXEL)*PIXEL-H/2;
const partitions=[];
const windowHole=(a,b,c,d)=>({u0:a*PIXEL+.018,u1:b*PIXEL-.018,v0:c*PIXEL+.018,v1:d*PIXEL-.018});
const glass=(a,b)=>({u0:a*PIXEL+.018,u1:b*PIXEL-.018,v0:H,v1:7*PIXEL-.018});
const wallOpenings=[
[windowHole(2,6,3,7),windowHole(8,10,3,7),windowHole(12,18,2,7),windowHole(24,28,2,7)],
[windowHole(2,4,3,7),windowHole(6,11,3,7),glass(15,21)],
[glass(2,9),glass(16,19),windowHole(24,28,2,7)],
[windowHole(2,7,2,7),windowHole(15,21,2,7)]
];
const groundSpine=snapInterior(.665,-total/2),bedSpine=snapInterior(2.332,-total/2),wetSpine=snapInterior(-1.835,-total/2);
const rearCross=snapInterior(-1.418,-depth/2),bedCross=snapInterior(-.168,-depth/2),wetFront=snapInterior(2.748,-depth/2),wetMiddle=snapInterior(1.082,-depth/2);
function wall(axis,start,end,fixed,doorCenters=[]){
 const u0=axis===0?-total/2:-depth/2;
 const holes=doorCenters.map(c=>{const j=Math.round((c-u0)/PIXEL-1.5);return{u0:u0+j*PIXEL+.018,u1:u0+(j+3)*PIXEL-.018,v0:H,v1:6*PIXEL-.018}});
 partitions.push({id:'partition-'+(partitions.length+1),axis,level:'ground',a:axis===0?[start,fixed]:[fixed,start],b:axis===0?[end,fixed]:[fixed,end],holes});
}
// A short night hall serves all three bedrooms and both sanitary rooms.
wall(1,-4.76,4.76,bedSpine,[1.75,-.9]);
wall(0,bedSpine+.12,6.01,bedCross);
wall(1,-4.76,4.76,wetSpine,[3.72]);
wall(0,wetSpine+.12,bedSpine-.12,rearCross,[1.45]);
wall(1,rearCross+.12,wetFront-.12,groundSpine,[.25,1.92]);
wall(0,wetSpine+.12,groundSpine-.12,wetFront);
wall(0,groundSpine+.12,bedSpine-.12,wetFront,[1.45]);
wall(0,wetSpine+.12,groundSpine-.12,wetMiddle);
const utilityX=snapInterior(-3.502,-total/2),utilityZ=snapInterior(-3.085,-depth/2);
wall(1,-4.76,utilityZ-.12,utilityX);
wall(0,-6.01,utilityX-.12,utilityZ,[-4.65]);
const roomRects=[
{name:'Sypialnia 1',x0:bedSpine+.12,x1:6.01,z0:bedCross+.12,z1:4.76},
{name:'Sypialnia 2',x0:bedSpine+.12,x1:6.01,z0:-4.76,z1:bedCross-.12},
{name:'Pokój 3 / gabinet',x0:wetSpine+.12,x1:bedSpine-.12,z0:-4.76,z1:rearCross-.12},
{name:'Łazienka',x0:wetSpine+.12,x1:groundSpine-.12,z0:rearCross+.12,z1:wetMiddle-.12},
{name:'WC',x0:wetSpine+.12,x1:groundSpine-.12,z0:wetMiddle+.12,z1:wetFront-.12},
{name:'Wiatrołap',x0:wetSpine+.12,x1:bedSpine-.12,z0:wetFront+.12,z1:4.76},
{name:'Hol nocny',x0:groundSpine+.12,x1:bedSpine-.12,z0:rearCross+.12,z1:wetFront-.12},
{name:'Pralnia',x0:-6.01,x1:utilityX-.12,z0:-4.76,z1:utilityZ-.12}
];
const furnishings=[
['Łóżko 160 × 200',4.25,3.35,1.6,2,'bed'],['Szafa 240 × 60',4.5,bedCross+.42,2.4,.6,'storage'],
['Łóżko 90 × 200',5.35,-3.45,.9,2,'bed'],['Biurko 120 × 60',3.3,-4.4,1.2,.6,'desk'],['Szafa 240 × 60',4.5,bedCross-.42,2.4,.6,'storage'],
['Łóżko 90 × 200',-.55,-3.55,2,.9,'bed'],['Biurko 120 × 60',1.4,-4.4,1.2,.6,'desk'],['Szafa 220 × 60',-.615,rearCross-.42,2.2,.6,'storage'],
['Prysznic 120 × 90',wetSpine+.72,rearCross+.57,1.2,.9,'shower'],['Umywalka',wetSpine+.42,.32,.6,1.2,'basin'],['WC',.13,rearCross+.47,.42,.7,'wc'],
['WC',wetSpine+.47,1.9,.7,.42,'wc'],['Umywalka',-.55,wetFront-.3,.55,.35,'basin'],
['Szafa wejściowa 180 × 60',-.65,4.43,1.8,.6,'storage'],['Ławka',bedSpine-.32,3.9,.4,1.2,'seat'],
['Pralka + suszarka w słupku',-5.6,-4.35,.65,.7,'washer'],['Technika / schowek',utilityX-.45,-4.1,.65,1.2,'storage'],
['Blat kuchenny',-5.7,-1.6,.6,2.6,'counter'],['Wyspa 80 × 180',-3.7,-1.95,.8,1.8,'island'],['Lodówka',-2.35,-4.4,.65,.65,'fridge'],
['Stół 90 × 160',-4.25,.75,.9,1.6,'table'],['Sofa 220 × 95',-5.48,3.15,.95,2.2,'sofa'],['Stolik',-4.0,3.1,.65,1.1,'table'],['TV',-2.10,2.15,.24,1.6,'tv']
];

export default {total,depth,wallOpenings,partitions,rooms:roomRects,furnishings,axes:{groundSpine,bedSpine,wetSpine,rearCross,bedCross,wetFront,wetMiddle,utilityX,utilityZ}};
