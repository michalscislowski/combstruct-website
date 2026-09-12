"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,Dl=1,md=2;var io=1,gd=2,ts=3,pi=0,fn=1,tn=2,ii=0,Ki=1,Ll=2,Nl=3,Ul=4,bd=5;var Ai=100,_d=101,xd=102,yd=103,vd=104,Md=200,Sd=201,wd=202,Ed=203,na=204,ia=205,Td=206,Ad=207,Rd=208,Cd=209,Pd=210,Id=211,Dd=212,Ld=213,Nd=214,ra=0,sa=1,oa=2,Qi=3,aa=4,la=5,ca=6,da=7,Fl=0,Ud=1,Fd=2,Bn=0,Ol=1,zl=2,Bl=3,ro=4,kl=5,Vl=6,Hl=7;var Gl=300,Oi=301,lr=302,Ha=303,Ga=304,so=306,ha=1e3,Jn=1001,ua=1002,$t=1003,Od=1004;var oo=1005;var en=1006,Wa=1007;var zi=1008;var mn=1009,Wl=1010,Xl=1011,ns=1012,Xa=1013,kn=1014,Vn=1015,ri=1016,qa=1017,Ya=1018,is=1020,ql=35902,Yl=35899,jl=1021,Zl=1022,Pn=1023,Kn=1026,Bi=1027,Jl=1028,ja=1029,cr=1030,Za=1031;var Ja=1033,ao=33776,lo=33777,co=33778,ho=33779,$a=35840,Ka=35841,Qa=35842,e0=35843,t0=36196,n0=37492,i0=37496,r0=37488,s0=37489,o0=37490,a0=37491,l0=37808,c0=37809,d0=37810,h0=37811,u0=37812,f0=37813,p0=37814,m0=37815,g0=37816,b0=37817,_0=37818,x0=37819,y0=37820,v0=37821,M0=36492,S0=36494,w0=36495,E0=36283,T0=36284,A0=36285,R0=36286;var As=2300,fa=2301,ta=2302,yl=2303,vl=2400,Ml=2401,Sl=2402;var zd=3200;var $l=0,Bd=1,gi="",Jt="srgb",er="srgb-linear",Rs="linear",xt="srgb";var Ji=7680;var wl=519,kd=512,Vd=513,Hd=514,C0=515,Gd=516,Wd=517,P0=518,Xd=519,pa=35044;var Kl="300 es",On=2e3,kr=2001;function lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){let i=Cs("canvas");return i.style.display="block",i}var Uc={},Vr=null;function Ps(...i){let e="THREE."+i.shift();Vr?Vr("log",e,...i):console.log(e,...i)}function Yd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Yd(i);let e="THREE."+i.shift();if(Vr)Vr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Yd(i);let e="THREE."+i.shift();if(Vr)Vr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){let e=i.join(" ");e in Uc||(Uc[e]=!0,Ye(...i))}function jd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Zd={[ra]:sa,[oa]:ca,[aa]:da,[Qi]:la,[sa]:ra,[ca]:oa,[da]:aa,[la]:Qi},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=1234567,zr=Math.PI/180,Hr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Ql(i,e){return(i%e+e)%e}function du(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function hu(i,e,t){return i!==e?(t-i)/(e-i):0}function ws(i,e,t){return(1-t)*i+t*e}function uu(i,e,t,n){return ws(i,e,1-Math.exp(-t*n))}function fu(i,e=1){return e-Math.abs(Ql(i,e*2)-e)}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bu(i,e){return i+Math.random()*(e-i)}function _u(i){return i*(.5-Math.random())}function xu(i){i!==void 0&&(Fc=i);let e=Fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yu(i){return i*zr}function vu(i){return i*Hr}function Mu(i){return(i&i-1)===0&&i!==0}function Su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eu(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*d,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dr={DEG2RAD:zr,RAD2DEG:Hr,generateUUID:$n,clamp:st,euclideanModulo:Ql,mapLinear:du,inverseLerp:hu,lerp:ws,damp:uu,pingpong:fu,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:bu,randFloatSpread:_u,seededRandom:xu,degToRad:yu,radToDeg:vu,isPowerOfTwo:Mu,ceilPowerOfTwo:Su,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Eu,normalize:vt,denormalize:Fn},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(u!==_||l!==h||c!==f||d!==p){let g=l*h+c*f+d*p+u*_;g<0&&(h=-h,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let w=Math.acos(g),S=Math.sin(w);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S,l=l*m+h*a,c=c*m+f*a,d=d*m+p*a,u=u*m+_*a}else{l=l*m+h*a,c=c*m+f*a,d=d*m+p*a,u=u*m+_*a;let w=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=w,c*=w,d*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-a*f,e[t+2]=c*p+d*f+a*h-l*u,e[t+3]=d*p-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),f=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return X0.copy(this).projectOnVector(e),this.sub(X0)}reflect(e){return this.sub(X0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},X0=new P,Oc=new vn,tt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],_=r[0],g=r[3],m=r[6],w=r[1],S=r[4],M=r[7],I=r[2],A=r[5],D=r[8];return s[0]=o*_+a*w+l*I,s[3]=o*g+a*S+l*A,s[6]=o*m+a*M+l*D,s[1]=c*_+d*w+u*I,s[4]=c*g+d*S+u*A,s[7]=c*m+d*M+u*D,s[2]=h*_+f*w+p*I,s[5]=h*g+f*S+p*A,s[8]=h*m+f*M+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,f=c*s-o*l,p=t*u+n*h+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(r*c-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(q0.makeScale(e,t)),this}rotate(e){return this.premultiply(q0.makeRotation(-e)),this}translate(e,t){return this.premultiply(q0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},q0=new tt,zc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){let i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:zc,fromXYZ:Bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:zc,fromXYZ:Bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var ut=Tu();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Cs("canvas")),Mr.width=e.width,Mr.height=e.height;let r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Au=0,Gr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Y0(r[o].image)):s.push(Y0(r[o]))}else s=Y0(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Y0(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var Ru=0,j0=new P,hn=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,r=Jn,s=en,o=zi,a=Pn,l=mn,c=i.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=$n(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(j0).x}get height(){return this.source.getSize(j0).y}get depth(){return this.source.getSize(j0).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Gl;hn.DEFAULT_ANISOTROPY=1;var Dt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,I=(m+1)/2,A=(d+h)/4,D=(u+_)/4,x=(p+g)/4;return S>M&&S>I?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=D/n):M>I?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=A/r,s=x/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=D/s,r=x/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(u-_)/w,this.z=(h-d)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ds=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pt=class i{constructor(e,t,n,r,s,o,a,l,c,d,u,h,f,p,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,f,p,_,g)}set(e,t,n,r,s,o,a,l,c,d,u,h,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,p=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,p=c*d,_=c*u;t[0]=h+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-p,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,p=c*d,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,f=o*u,p=a*d,_=a*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*d,t[4]=_-h*u,t[8]=p*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-_*u}else if(e.order==="XZY"){let h=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Pu)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),vi.crossVectors(n,xn),vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),vi.crossVectors(n,xn)),vi.normalize(),So.crossVectors(xn,vi),r[0]=vi.x,r[4]=So.x,r[8]=xn.x,r[1]=vi.y,r[5]=So.y,r[9]=xn.y,r[2]=vi.z,r[6]=So.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],w=n[3],S=n[7],M=n[11],I=n[15],A=r[0],D=r[4],x=r[8],y=r[12],F=r[1],R=r[5],U=r[9],B=r[13],G=r[2],W=r[6],k=r[10],q=r[14],ae=r[3],ue=r[7],Se=r[11],Me=r[15];return s[0]=o*A+a*F+l*G+c*ae,s[4]=o*D+a*R+l*W+c*ue,s[8]=o*x+a*U+l*k+c*Se,s[12]=o*y+a*B+l*q+c*Me,s[1]=d*A+u*F+h*G+f*ae,s[5]=d*D+u*R+h*W+f*ue,s[9]=d*x+u*U+h*k+f*Se,s[13]=d*y+u*B+h*q+f*Me,s[2]=p*A+_*F+g*G+m*ae,s[6]=p*D+_*R+g*W+m*ue,s[10]=p*x+_*U+g*k+m*Se,s[14]=p*y+_*B+g*q+m*Me,s[3]=w*A+S*F+M*G+I*ae,s[7]=w*D+S*R+M*W+I*ue,s[11]=w*x+S*U+M*k+I*Se,s[15]=w*y+S*B+M*q+I*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],w=l*f-c*h,S=a*f-c*u,M=a*h-l*u,I=o*f-c*d,A=o*h-l*d,D=o*u-a*d;return t*(_*w-g*S+m*M)-n*(p*w-g*I+m*A)+r*(p*S-_*I+m*D)-s*(p*M-_*A+g*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],w=t*a-n*o,S=t*l-r*o,M=t*c-s*o,I=n*l-r*a,A=n*c-s*a,D=r*c-s*l,x=d*_-u*p,y=d*g-h*p,F=d*m-f*p,R=u*g-h*_,U=u*m-f*_,B=h*m-f*g,G=w*B-S*U+M*R+I*F-A*y+D*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/G;return e[0]=(a*B-l*U+c*R)*W,e[1]=(r*U-n*B-s*R)*W,e[2]=(_*D-g*A+m*I)*W,e[3]=(h*A-u*D-f*I)*W,e[4]=(l*F-o*B-c*y)*W,e[5]=(t*B-r*F+s*y)*W,e[6]=(g*M-p*D-m*S)*W,e[7]=(d*D-h*M+f*S)*W,e[8]=(o*U-a*F+c*x)*W,e[9]=(n*F-t*U-s*x)*W,e[10]=(p*A-_*M+m*w)*W,e[11]=(u*M-d*A-f*w)*W,e[12]=(a*y-o*R-l*x)*W,e[13]=(t*R-n*y+r*x)*W,e[14]=(_*S-p*I-g*w)*W,e[15]=(d*I-u*S+h*w)*W,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,f=s*d,p=s*u,_=o*d,g=o*u,m=a*u,w=l*c,S=l*d,M=l*u,I=n.x,A=n.y,D=n.z;return r[0]=(1-(_+m))*I,r[1]=(f+M)*I,r[2]=(p-S)*I,r[3]=0,r[4]=(f-M)*A,r[5]=(1-(h+m))*A,r[6]=(g+w)*A,r[7]=0,r[8]=(p+S)*D,r[9]=(g-w)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Sr.set(r[0],r[1],r[2]).length(),a=Sr.set(r[4],r[5],r[6]).length(),l=Sr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ln.copy(this);let c=1/o,d=1/a,u=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=On,l=!1){let c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===On)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===kr)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=On,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===On)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===kr)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sr=new P,Ln=new pt,Cu=new P(0,0,0),Pu=new P(1,1,1),vi=new P,So=new P,xn=new P,kc=new pt,Vc=new vn,zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iu=0,Hc=new P,wr=new vn,li=new pt,wo=new P,ms=new P,Du=new P,Lu=new vn,Gc=new P(1,0,0),Wc=new P(0,1,0),Xc=new P(0,0,1),qc={type:"added"},Nu={type:"removed"},Er={type:"childadded",child:null},Z0={type:"childremoved",child:null},Ht=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zn,n=new vn,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new tt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ms,wo,this.up):li.lookAt(wo,ms,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(li),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Er.child=e,this.dispatchEvent(Er),Er.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),Z0.child=e,this.dispatchEvent(Z0),Z0.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uu={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function J0(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var lt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Ql(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=J0(o,s,e+1/3),this.g=J0(o,s,e),this.b=J0(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=Jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return ut.workingToColorSpace(on.copy(this),e),Math.round(st(on.r*255,0,255))*65536+Math.round(st(on.g*255,0,255))*256+Math.round(st(on.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(on.copy(this),t);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Jt){ut.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,r=on.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Eo);let n=ws(Mi.h,Eo.h,t),r=ws(Mi.s,Eo.s,t),s=ws(Mi.l,Eo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new lt;lt.NAMES=Jd;var Ls=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new P,ci=new P,$0=new P,di=new P,Tr=new P,Ar=new P,Yc=new P,K0=new P,Q0=new P,el=new P,tl=new Dt,nl=new Dt,il=new Dt,Zn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),ci.subVectors(n,t),$0.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot($0),c=ci.dot(ci),d=ci.dot($0),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,p=(o*d-a*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,n),il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tl,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Tr.subVectors(r,n),Ar.subVectors(s,n),K0.subVectors(e,n);let l=Tr.dot(K0),c=Ar.dot(K0);if(l<=0&&c<=0)return t.copy(n);Q0.subVectors(e,r);let d=Tr.dot(Q0),u=Ar.dot(Q0);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Tr,o);el.subVectors(e,s);let f=Tr.dot(el),p=Ar.dot(el);if(p>=0&&f<=p)return t.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ar,a);let g=d*p-f*u;if(g<=0&&u-d>=0&&f-p>=0)return Yc.subVectors(s,r),a=(u-d)/(u-d+(f-p)),t.copy(r).addScaledVector(Yc,a);let m=1/(g+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(Tr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ao.subVectors(this.max,gs),Rr.subVectors(e.a,gs),Cr.subVectors(e.b,gs),Pr.subVectors(e.c,gs),Si.subVectors(Cr,Rr),wi.subVectors(Pr,Cr),qi.subVectors(Rr,Pr);let t=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-qi.z,qi.y,Si.z,0,-Si.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!rl(t,Rr,Cr,Pr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Rr,Cr,Pr,Ao))?!1:(Ro.crossVectors(Si,wi),t=[Ro.x,Ro.y,Ro.z],rl(t,Rr,Cr,Pr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,To=new ln,Rr=new P,Cr=new P,Pr=new P,Si=new P,wi=new P,qi=new P,gs=new P,Ao=new P,Ro=new P,Yi=new P;function rl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Yi.fromArray(i,s);let a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),d=n.dot(Yi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Vt=new P,Co=new de,Fu=0,Qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}};var Ns=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Us=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ou=new ln,bs=new P,sl=new P,tr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(sl)),this.expandByPoint(bs.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zu=0,Rn=new pt,ol=new Ht,Ir=new P,yn=new ln,_s=new ln,Zt=new P,Mt=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lu(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return ol.lookAt(e),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(yn.min,_s.min),yn.expandByPoint(Zt),Zt.addVectors(yn.max,_s.max),yn.expandByPoint(Zt)):(yn.expandByPoint(_s.min),yn.expandByPoint(_s.max))}yn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Zt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),Zt.add(Ir)),r=Math.max(r,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new P,l[x]=new P;let c=new P,d=new P,u=new P,h=new de,f=new de,p=new de,_=new P,g=new P;function m(x,y,F){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,F),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,F),d.sub(c),u.sub(c),f.sub(h),p.sub(h);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),a[x].add(_),a[y].add(_),a[F].add(_),l[x].add(g),l[y].add(g),l[F].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,y=w.length;x<y;++x){let F=w[x],R=F.start,U=F.count;for(let B=R,G=R+U;B<G;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new P,M=new P,I=new P,A=new P;function D(x){I.fromBufferAttribute(r,x),A.copy(I);let y=a[x];S.copy(y),S.sub(I.multiplyScalar(I.dot(y))).normalize(),M.crossVectors(A,y);let R=M.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,y=w.length;x<y;++x){let F=w[x],R=F.start,U=F.count;for(let B=R,G=R+U;B<G;B+=3)D(e.getX(B+0)),D(e.getX(B+1)),D(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,d=new P,u=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*d;for(let m=0;m<d;m++)h[p++]=c[f++]}return new Qt(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new P,qr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Bu=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ki,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,xs=new P,Lr=new P,Nr=new P,Ur=new de,ys=new de,$d=new pt,Po=new P,vs=new P,Io=new P,jc=new de,al=new de,Zc=new de,Os=class extends Ht{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new qr(n,3,0,!1)),Dr.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),$d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Nr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Do(Po.set(-.5,-.5,0),Nr,o,Lr,r,s),Do(vs.set(.5,-.5,0),Nr,o,Lr,r,s),Do(Io.set(.5,.5,0),Nr,o,Lr,r,s),jc.set(0,0),al.set(1,0),Zc.set(1,1);let a=e.ray.intersectTriangle(Po,vs,Io,!1,xs);if(a===null&&(Do(vs.set(-.5,.5,0),Nr,o,Lr,r,s),al.set(0,1),a=e.ray.intersectTriangle(Po,Io,vs,!1,xs),a===null))return;let l=e.ray.origin.distanceTo(xs);l<e.near||l>e.far||t.push({distance:l,point:xs.clone(),uv:Zn.getInterpolation(xs,Po,vs,Io,jc,al,Zc,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Do(i,e,t,n,r,s){Ur.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ys.x=s*Ur.x-r*Ur.y,ys.y=r*Ur.x+s*Ur.y):ys.copy(Ur),i.copy(e),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4($d)}var ui=new P,ll=new P,Lo=new P,Ei=new P,cl=new P,No=new P,dl=new P,Ri=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ll.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(ll);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ei.dot(this.direction),l=-Ei.dot(Lo),c=Ei.lengthSq(),d=Math.abs(1-o*o),u,h,f,p;if(d>0)if(u=o*l-a,h=o*a-l,p=s*d,u>=0)if(h>=-p)if(h<=p){let _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ll).addScaledVector(Lo,h),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){cl.subVectors(t,e),No.subVectors(n,e),dl.crossVectors(cl,No);let o=this.direction.dot(dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);let l=a*this.direction.dot(No.crossVectors(Ei,No));if(l<0)return null;let c=a*this.direction.dot(cl.cross(Ei));if(c<0||l+c>o)return null;let d=-a*Ei.dot(dl);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ci=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jc=new pt,ji=new Ri,Uo=new tr,$c=new P,Fo=new P,Oo=new P,zo=new P,hl=new P,Bo=new P,Kc=new P,ko=new P,bt=class extends Ht{constructor(e=new Mt,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(hl.fromBufferAttribute(u,e),o?Bo.addScaledVector(hl,d):Bo.addScaledVector(hl.sub(t),d))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Uo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Uo,$c)===null||ji.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Jc.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,I=S;M<I;M+=3){let A=a.getX(M),D=a.getX(M+1),x=a.getX(M+2);r=Vo(this,m,e,n,c,d,u,A,D,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let w=a.getX(g),S=a.getX(g+1),M=a.getX(g+2);r=Vo(this,o,e,n,c,d,u,w,S,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){let g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=w,I=S;M<I;M+=3){let A=M,D=M+1,x=M+2;r=Vo(this,m,e,n,c,d,u,A,D,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let w=g,S=g+1,M=g+2;r=Vo(this,o,e,n,c,d,u,w,S,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function ku(i,e,t,n,r,s,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:i}}function Vo(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,zo);let d=ku(i,e,t,n,Fo,Oo,zo,Kc);if(d){let u=new P;Zn.getBarycoord(Kc,Fo,Oo,zo,u),r&&(d.uv=Zn.getInterpolatedAttribute(r,a,l,c,u,new de)),s&&(d.uv1=Zn.getInterpolatedAttribute(s,a,l,c,u,new de)),o&&(d.normal=Zn.getInterpolatedAttribute(o,a,l,c,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};Zn.getNormal(Fo,Oo,zo,h.normal),d.face=h,d.barycoord=u}return d}var _a=class extends hn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=$t,d=$t,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ul=new P,Vu=new P,Hu=new tt,pn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ul.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ul),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hu.getNormalMatrix(e),r=this.coplanarPoint(ul).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new tr,Gu=new de(.5,.5),Ho=new P,jr=class{constructor(e=new pn,t=new pn,n=new pn,r=new pn,s=new pn,o=new pn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],w=s[12],S=s[13],M=s[14],I=s[15];if(r[0].setComponents(c-o,f-d,m-p,I-w).normalize(),r[1].setComponents(c+o,f+d,m+p,I+w).normalize(),r[2].setComponents(c+a,f+u,m+_,I+S).normalize(),r[3].setComponents(c-a,f-u,m-_,I-S).normalize(),n)r[4].setComponents(l,h,g,M).normalize(),r[5].setComponents(c-l,f-h,m-g,I-M).normalize();else if(r[4].setComponents(c-l,f-h,m-g,I-M).normalize(),t===On)r[5].setComponents(c+l,f+h,m+g,I+M).normalize();else if(t===kr)r[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=Gu.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var un=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new P,ya=new P,Qc=new pt,Ms=new Ri,Go=new tr,fl=new P,ed=new P,nr=class extends Ht{constructor(e=new Mt,t=new un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)xa.fromBufferAttribute(t,r-1),ya.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=xa.distanceTo(ya);e.setAttribute("lineDistance",new mt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;Qc.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Qc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=d.getX(_),w=d.getX(_+1),S=Wo(this,e,Ms,l,m,w,_);S&&t.push(S)}if(this.isLineLoop){let _=d.getX(p-1),g=d.getX(f),m=Wo(this,e,Ms,l,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Wo(this,e,Ms,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Wo(this,e,Ms,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(xa.fromBufferAttribute(a,r),ya.fromBufferAttribute(a,s),t.distanceSqToSegment(xa,ya,fl,ed)>n)return;fl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fl);if(!(c<e.near||c>e.far))return{distance:c,point:ed.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var td=new P,nd=new P,Sn=class extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)td.fromBufferAttribute(t,r),nd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+td.distanceTo(nd);e.setAttribute("lineDistance",new mt(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends hn{constructor(e=[],t=Oi,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends hn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends hn{constructor(e,t,n=kn,r,s,o,a=$t,l=$t,c,d=Kn,u=1){if(d!==Kn&&d!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends Ii{constructor(e,t=kn,n=Oi,r,s,o=$t,a=$t,l,c=Kn){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bs=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ti=class i extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,r,o,2),p("x","z","y",1,-1,e,n,-t,r,o,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(u,2));function p(_,g,m,w,S,M,I,A,D,x,y){let F=M/D,R=I/x,U=M/2,B=I/2,G=A/2,W=D+1,k=x+1,q=0,ae=0,ue=new P;for(let Se=0;Se<k;Se++){let Me=Se*R-B;for(let Ee=0;Ee<W;Ee++){let We=Ee*F-U;ue[_]=We*w,ue[g]=Me*S,ue[m]=G,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[g]=0,ue[m]=A>0?1:-1,d.push(ue.x,ue.y,ue.z),u.push(Ee/D),u.push(1-Se/x),q+=1}}for(let Se=0;Se<x;Se++)for(let Me=0;Me<D;Me++){let Ee=h+Me+W*Se,We=h+Me+W*(Se+1),Ke=h+(Me+1)+W*(Se+1),ct=h+(Me+1)+W*Se;l.push(Ee,We,ct),l.push(We,Ke,ct),ae+=6}a.addGroup(f,ae,y),f+=ae,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ir=class i extends Mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],f=[],p=0,_=[],g=n/2,m=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function w(){let M=new P,I=new P,A=0,D=(t-e)/n;for(let x=0;x<=s;x++){let y=[],F=x/s,R=F*(t-e)+e;for(let U=0;U<=r;U++){let B=U/r,G=B*l+a,W=Math.sin(G),k=Math.cos(G);I.x=R*W,I.y=-F*n+g,I.z=R*k,u.push(I.x,I.y,I.z),M.set(W,D,k).normalize(),h.push(M.x,M.y,M.z),f.push(B,1-F),y.push(p++)}_.push(y)}for(let x=0;x<r;x++)for(let y=0;y<s;y++){let F=_[y][x],R=_[y+1][x],U=_[y+1][x+1],B=_[y][x+1];(e>0||y!==0)&&(d.push(F,R,B),A+=3),(t>0||y!==s-1)&&(d.push(R,U,B),A+=3)}c.addGroup(m,A,0),m+=A}function S(M){let I=p,A=new de,D=new P,x=0,y=M===!0?e:t,F=M===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,g*F,0),h.push(0,F,0),f.push(.5,.5),p++;let R=p;for(let U=0;U<=r;U++){let G=U/r*l+a,W=Math.cos(G),k=Math.sin(G);D.x=y*k,D.y=g*F,D.z=y*W,u.push(D.x,D.y,D.z),h.push(0,F,0),A.x=W*.5+.5,A.y=k*.5*F+.5,f.push(A.x,A.y),p++}for(let U=0;U<r;U++){let B=I+U,G=R+U;M===!0?d.push(G,G+1,B):d.push(G+1,G,B),x+=3}c.addGroup(m,x,M===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class i extends ir{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xo=new P,qo=new P,pl=new P,Yo=new Zn,Cn=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(zr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Yo;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Yo.getNormal(pl),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){let S=(w+1)%3,M=u[w],I=u[S],A=Yo[d[w]],D=Yo[d[S]],x=`${M}_${I}`,y=`${I}_${M}`;y in h&&h[y]?(pl.dot(h[y].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(D.x,D.y,D.z)),h[y]=null):x in h||(h[x]={index0:c[w],index1:c[S],normal:pl.clone()})}}for(let p in h)if(h[p]){let{index0:_,index1:g}=h[p];Xo.fromBufferAttribute(a,_),qo.fromBufferAttribute(a,g),f.push(Xo.x,Xo.y,Xo.z),f.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new mt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,r=[],s=[],o=[],a=new P,l=new pt;for(let f=0;f<=e;f++){let p=f/e;r[f]=this.getTangentAt(p,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(st(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),o[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends wn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends Zr{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ec(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var jo=new P,ml=new ec,gl=new ec,bl=new ec,wa=class extends wn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(jo.subVectors(r[0],r[1]).add(r[0]),c=jo);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(jo.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=jo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ml.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,p,_,g),gl.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,p,_,g),bl.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,p,_,g)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),gl.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),bl.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(ml.calc(l),gl.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Wu(i,e){let t=1-i;return t*t*e}function Xu(i,e){return 2*(1-i)*i*e}function qu(i,e){return i*i*e}function Es(i,e,t,n){return Wu(i,e)+Xu(i,t)+qu(i,n)}function Yu(i,e){let t=1-i;return t*t*t*e}function ju(i,e){let t=1-i;return 3*t*t*i*e}function Zu(i,e){return 3*(1-i)*i*i*e}function Ju(i,e){return i*i*i*e}function Ts(i,e,t,n,r){return Yu(i,e)+ju(i,t)+Zu(i,n)+Ju(i,r)}var ks=class extends wn{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ts(e,r.x,s.x,o.x,a.x),Ts(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends wn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ts(e,r.x,s.x,o.x,a.x),Ts(e,r.y,s.y,o.y,a.y),Ts(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vs=class extends wn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends wn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends wn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(e,r.x,s.x,o.x),Es(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sr=class extends wn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(e,r.x,s.x,o.x),Es(e,r.y,s.y,o.y),Es(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(id(a,l.x,c.x,d.x,u.x),id(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new de().fromArray(r))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:wa,CubicBezierCurve:ks,CubicBezierCurve3:Ea,EllipseCurve:Zr,LineCurve:Vs,LineCurve3:rr,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:sr,SplineCurve:Gs}),Jr=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ta[r.type]().fromJSON(r))}return this}},or=class extends Jr{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vs(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Hs(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ks(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new Zr(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ni=class extends or{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new or().fromJSON(r))}return this}};function $u(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Kd(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=nf(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,u=l;for(let h=t;h<r;h+=t){let f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>d&&(d=f),p>u&&(u=p)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Ws(s,o,t,a,l,c,0),o}function Kd(i,e,t,n,r){let s;if(r===pf(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=rd(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=rd(o/n|0,i[o],i[o+1],s);return s&&$r(s,s.next)&&(qs(s),s=s.next),s}function ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&($r(t,t.next)||It(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ws(i,e,t,n,r,s,o){if(!i)return;!o&&s&&lf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Qu(i,n,r,s):Ku(i)){e.push(l.i,i.i,c.i),qs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ef(ar(i),e),Ws(i,e,t,n,r,s,2)):o===2&&tf(i,e,t,n,r,s):Ws(ar(i),e,t,n,r,s,1);break}}}function Ku(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=d&&p.x<=h&&p.y>=u&&p.y<=f&&Ss(r,a,s,l,o,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Qu(i,e,t,n){let r=i.prev,s=i,o=i.next;if(It(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,l,c),p=Math.min(d,u,h),_=Math.max(a,l,c),g=Math.max(d,u,h),m=El(f,p,e,t,n),w=El(_,g,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=m&&M&&M.z<=w;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==o&&Ss(a,d,l,u,c,h,S.x,S.y)&&It(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&Ss(a,d,l,u,c,h,M.x,M.y)&&It(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==o&&Ss(a,d,l,u,c,h,S.x,S.y)&&It(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=w;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==r&&M!==o&&Ss(a,d,l,u,c,h,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ef(i,e){let t=i;do{let n=t.prev,r=t.next.next;!$r(n,r)&&eh(n,t,t.next,r)&&Xs(n,r)&&Xs(r,n)&&(e.push(n.i,t.i,r.i),qs(t),qs(t.next),t=i=r),t=t.next}while(t!==i);return ar(t)}function tf(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hf(o,a)){let l=th(o,a);o=ar(o,o.next),l=ar(l,l.next),Ws(o,e,t,n,r,s,0),Ws(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function nf(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Kd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(df(c))}r.sort(rf);for(let s=0;s<r.length;s++)t=sf(r[s],t);return t}function rf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function sf(i,e){let t=of(i,e);if(!t)return e;let n=th(t,i);return ar(n,n.next),ar(t,t.next)}function of(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if($r(i,t))return t;do{if($r(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qd(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);Xs(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&af(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function af(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function lf(i,e,t,n){let r=i;do r.z===0&&(r.z=El(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,cf(r)}function cf(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function El(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function df(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qd(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ss(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Qd(i,e,t,n,r,s,o,a)}function hf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!uf(i,e)&&(Xs(i,e)&&Xs(e,i)&&ff(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||$r(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function $r(i,e){return i.x===e.x&&i.y===e.y}function eh(i,e,t,n){let r=Jo(It(i,e,t)),s=Jo(It(i,e,n)),o=Jo(It(t,n,i)),a=Jo(It(t,n,e));return!!(r!==s&&o!==a||r===0&&Zo(i,t,e)||s===0&&Zo(i,n,e)||o===0&&Zo(t,i,n)||a===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jo(i){return i>0?1:i<0?-1:0}function uf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&eh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xs(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function ff(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function th(i,e){let t=Tl(i.i,i.x,i.y),n=Tl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function rd(i,e,t,n){let r=Tl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pf(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Al=class{static triangulate(e,t,n=2){return $u(e,t,n)}},$i=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];sd(e),od(n,e);let o=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,od(n,t[l]);let a=Al.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function od(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mi=class i extends Mt{constructor(e=new ni([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new mt(r,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:mf,S,M=!1,I,A,D,x;if(m){S=m.getSpacedPoints(d),M=!0,h=!1;let le=m.isCatmullRomCurve3?m.closed:!1;I=m.computeFrenetFrames(d,le),A=new P,D=new P,x=new P}h||(g=0,f=0,p=0,_=0);let y=a.extractPoints(c),F=y.shape,R=y.holes;if(!$i.isClockWise(F)){F=F.reverse();for(let le=0,pe=R.length;le<pe;le++){let te=R[le];$i.isClockWise(te)&&(R[le]=te.reverse())}}function B(le){let te=10000000000000001e-36,ye=le[0];for(let T=1;T<=le.length;T++){let Ve=T%le.length,we=le[Ve],ze=we.x-ye.x,me=we.y-ye.y,E=ze*ze+me*me,b=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ye.x),Math.abs(ye.y)),O=te*b*b;if(E<=O){le.splice(Ve,1),T--;continue}ye=we}}B(F),R.forEach(B);let G=R.length,W=F;for(let le=0;le<G;le++){let pe=R[le];F=F.concat(pe)}function k(le,pe,te){return pe||je("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(pe,te)}let q=F.length;function ae(le,pe,te){let ye,T,Ve,we=le.x-pe.x,ze=le.y-pe.y,me=te.x-le.x,E=te.y-le.y,b=we*we+ze*ze,O=we*E-ze*me;if(Math.abs(O)>Number.EPSILON){let Q=Math.sqrt(b),ce=Math.sqrt(me*me+E*E),ee=pe.x-ze/Q,Pe=pe.y+we/Q,be=te.x-E/ce,Ne=te.y+me/ce,X=((be-ee)*E-(Ne-Pe)*me)/(we*E-ze*me);ye=ee+we*X-le.x,T=Pe+ze*X-le.y;let N=ye*ye+T*T;if(N<=2)return new de(ye,T);Ve=Math.sqrt(N/2)}else{let Q=!1;we>Number.EPSILON?me>Number.EPSILON&&(Q=!0):we<-Number.EPSILON?me<-Number.EPSILON&&(Q=!0):Math.sign(ze)===Math.sign(E)&&(Q=!0),Q?(ye=-ze,T=we,Ve=Math.sqrt(b)):(ye=we,T=ze,Ve=Math.sqrt(b/2))}return new de(ye/Ve,T/Ve)}let ue=[];for(let le=0,pe=W.length,te=pe-1,ye=le+1;le<pe;le++,te++,ye++)te===pe&&(te=0),ye===pe&&(ye=0),ue[le]=ae(W[le],W[te],W[ye]);let Se=[],Me,Ee=ue.concat();for(let le=0,pe=G;le<pe;le++){let te=R[le];Me=[];for(let ye=0,T=te.length,Ve=T-1,we=ye+1;ye<T;ye++,Ve++,we++)Ve===T&&(Ve=0),we===T&&(we=0),Me[ye]=ae(te[ye],te[Ve],te[we]);Se.push(Me),Ee=Ee.concat(Me)}let We;if(g===0)We=$i.triangulateShape(W,R);else{let le=[],pe=[];for(let te=0;te<g;te++){let ye=te/g,T=f*Math.cos(ye*Math.PI/2),Ve=p*Math.sin(ye*Math.PI/2)+_;for(let we=0,ze=W.length;we<ze;we++){let me=k(W[we],ue[we],Ve);Fe(me.x,me.y,-T),ye===0&&le.push(me)}for(let we=0,ze=G;we<ze;we++){let me=R[we];Me=Se[we];let E=[];for(let b=0,O=me.length;b<O;b++){let Q=k(me[b],Me[b],Ve);Fe(Q.x,Q.y,-T),ye===0&&E.push(Q)}ye===0&&pe.push(E)}}We=$i.triangulateShape(le,pe)}let Ke=We.length,ct=p+_;for(let le=0;le<q;le++){let pe=h?k(F[le],Ee[le],ct):F[le];M?(D.copy(I.normals[0]).multiplyScalar(pe.x),A.copy(I.binormals[0]).multiplyScalar(pe.y),x.copy(S[0]).add(D).add(A),Fe(x.x,x.y,x.z)):Fe(pe.x,pe.y,0)}for(let le=1;le<=d;le++)for(let pe=0;pe<q;pe++){let te=h?k(F[pe],Ee[pe],ct):F[pe];M?(D.copy(I.normals[le]).multiplyScalar(te.x),A.copy(I.binormals[le]).multiplyScalar(te.y),x.copy(S[le]).add(D).add(A),Fe(x.x,x.y,x.z)):Fe(te.x,te.y,u/d*le)}for(let le=g-1;le>=0;le--){let pe=le/g,te=f*Math.cos(pe*Math.PI/2),ye=p*Math.sin(pe*Math.PI/2)+_;for(let T=0,Ve=W.length;T<Ve;T++){let we=k(W[T],ue[T],ye);Fe(we.x,we.y,u+te)}for(let T=0,Ve=R.length;T<Ve;T++){let we=R[T];Me=Se[T];for(let ze=0,me=we.length;ze<me;ze++){let E=k(we[ze],Me[ze],ye);M?Fe(E.x,E.y+S[d-1].y,S[d-1].x+te):Fe(E.x,E.y,u+te)}}}re(),_e();function re(){let le=r.length/3;if(h){let pe=0,te=q*pe;for(let ye=0;ye<Ke;ye++){let T=We[ye];Oe(T[2]+te,T[1]+te,T[0]+te)}pe=d+g*2,te=q*pe;for(let ye=0;ye<Ke;ye++){let T=We[ye];Oe(T[0]+te,T[1]+te,T[2]+te)}}else{for(let pe=0;pe<Ke;pe++){let te=We[pe];Oe(te[2],te[1],te[0])}for(let pe=0;pe<Ke;pe++){let te=We[pe];Oe(te[0]+q*d,te[1]+q*d,te[2]+q*d)}}n.addGroup(le,r.length/3-le,0)}function _e(){let le=r.length/3,pe=0;xe(W,pe),pe+=W.length;for(let te=0,ye=R.length;te<ye;te++){let T=R[te];xe(T,pe),pe+=T.length}n.addGroup(le,r.length/3-le,1)}function xe(le,pe){let te=le.length;for(;--te>=0;){let ye=te,T=te-1;T<0&&(T=le.length-1);for(let Ve=0,we=d+g*2;Ve<we;Ve++){let ze=q*Ve,me=q*(Ve+1),E=pe+ye+ze,b=pe+T+ze,O=pe+T+me,Q=pe+ye+me;Xe(E,b,O,Q)}}}function Fe(le,pe,te){l.push(le),l.push(pe),l.push(te)}function Oe(le,pe,te){it(le),it(pe),it(te);let ye=r.length/3,T=w.generateTopUV(n,r,ye-3,ye-2,ye-1);qe(T[0]),qe(T[1]),qe(T[2])}function Xe(le,pe,te,ye){it(le),it(pe),it(ye),it(pe),it(te),it(ye);let T=r.length/3,Ve=w.generateSideWallUV(n,r,T-6,T-3,T-2,T-1);qe(Ve[0]),qe(Ve[1]),qe(Ve[3]),qe(Ve[1]),qe(Ve[2]),qe(Ve[3])}function it(le){r.push(l[le*3+0]),r.push(l[le*3+1]),r.push(l[le*3+2])}function qe(le){s.push(le.x),s.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gf(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ta[r.type]().fromJSON(r)),new i(n,e.options)}},mf={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],f=e[r*3+1],p=e[r*3+2],_=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-u),new de(h,1-p),new de(_,1-m)]:[new de(a,1-l),new de(d,1-u),new de(f,1-p),new de(g,1-m)]}};function gf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ys=class i extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<d;m++){let w=m*h-o;for(let S=0;S<c;S++){let M=S*u-s;p.push(M,-w,0),_.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let S=w+c*m,M=w+c*(m+1),I=w+1+c*(m+1),A=w+1+c*m;f.push(S,M,A),f.push(M,I,A)}this.setIndex(f),this.setAttribute("position",new mt(p,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var js=class i extends Mt{constructor(e=new sr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new de,d=new P,u=[],h=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function _(){for(let S=0;S<t;S++)g(S);g(s===!1?t:0),w(),m()}function g(S){d=e.getPointAt(S/t,d);let M=o.normals[S],I=o.binormals[S];for(let A=0;A<=r;A++){let D=A/r*Math.PI*2,x=Math.sin(D),y=-Math.cos(D);l.x=y*M.x+x*I.x,l.y=y*M.y+x*I.y,l.z=y*M.z+x*I.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let M=1;M<=r;M++){let I=(r+1)*(S-1)+(M-1),A=(r+1)*S+(M-1),D=(r+1)*S+M,x=(r+1)*(S-1)+M;p.push(I,A,x),p.push(A,D,x)}}function w(){for(let S=0;S<=t;S++)for(let M=0;M<=r;M++)c.x=S/t,c.y=M/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let r in n)e[r]=n[r]}return e}function bf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var nh={clone:hr,merge:cn},_f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Aa=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ra=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $o(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends Di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ml:s=e,a=2*t-n;break;case Sl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:o=e,l=2*n-t;break;case Sl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),_=p*p,g=_*p,m=-h*g+2*h*_-h*p,w=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,M=f*g-f*_;for(let I=0;I!==a;++I)s[I]=m*o[d+I]+w*o[c+I]+S*o[l+I]+M*o[u+I];return s}},Ia=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},Da=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},La=class extends Di{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,u=d.inTangents,h=d.outTangents;if(!u||!h){let _=(n-t)/(r-t),g=1-_;for(let m=0;m!==a;++m)s[m]=o[c+m]*g+o[l+m]*_;return s}let f=a*2,p=e-1;for(let _=0;_!==a;++_){let g=o[c+_],m=o[l+_],w=p*f+_*2,S=h[w],M=h[w+1],I=e*f+_*2,A=u[I],D=u[I+1],x=(n-t)/(r-t),y,F,R,U,B;for(let G=0;G<8;G++){y=x*x,F=y*x,R=1-x,U=R*R,B=U*R;let k=B*t+3*U*x*S+3*R*y*A+F*r-n;if(Math.abs(k)<1e-10)break;let q=3*U*(S-t)+6*R*x*(A-S)+3*y*(r-A);if(Math.abs(q)<1e-10)break;x=x-k/q,x=Math.max(0,Math.min(1,x))}s[_]=B*g+3*U*x*M+3*R*y*D+F*m}return s}},Tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new La(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break;case yl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&cu(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ta,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[h+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=fa;var Li=class extends Tn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=As;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName="color";var Ua=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)vn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Zs=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Tn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=As;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName="vector";var za=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ih=new za,Ba=class{constructor(e){this.manager=e!==void 0?e:ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_l=new pt,ad=new P,ld=new P,Rl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===kr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new P,Qo=new vn,jn=new P,Ks=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ko,Qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new P,cd=new de,dd=new de,an=class extends Ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,cd,dd),t.subVectors(dd,cd)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Kr=class extends Ks{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cl=class extends Rl{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Cl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fr=-90,Or=1,ka=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(Fr,Or,e,t);r.layers=this.layers,this.add(r);let s=new an(Fr,Or,e,t);s.layers=this.layers,this.add(s);let o=new an(Fr,Or,e,t);o.layers=this.layers,this.add(o);let a=new an(Fr,Or,e,t);a.layers=this.layers,this.add(a);let l=new an(Fr,Or,e,t);l.layers=this.layers,this.add(l);let c=new an(Fr,Or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Va=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nc="\\[\\]\\.:\\/",yf=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",vf="[^"+nc.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",ic),Sf=/(WCOD+)?/.source.replace("WCOD",vf),wf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Ef=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Tf=new RegExp("^"+Mf+Sf+wf+Ef+"$"),Af=["material","materials","bones","map"],Pl=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yf,"")}static parseTrackName(e){let t=Tf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Af.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Pl;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W3=new Float32Array(1);var hd=new pt,Qs=class{constructor(e,t,n=0,r=1/0){this.ray=new Ri(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,t=!0,n=[]){return Il(e,this,n,t),n.sort(ud),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Il(e[r],this,n,t);return n.sort(ud),n}};function ud(i,e){return i.distance-e.distance}function Il(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Il(s[o],e,t,!0)}}var es=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var eo=class extends Sn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Mt;s.setIndex(new Qt(n,1)),s.setAttribute("position",new mt(r,3)),super(s,new un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var fd=new P,ea,xl,to=class extends Ht{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ea===void 0&&(ea=new Mt,ea.setAttribute("position",new mt([0,0,0,0,1,0],3)),xl=new Ma(.5,1,5,1),xl.translate(0,-.5,0)),this.position.copy(t),this.line=new nr(ea,new un({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new bt(xl,new Ci({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{fd.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(fd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var no=class extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function rc(i,e,t,n){let r=Rf(n);switch(t){case jl:return i*e;case Jl:return i*e/r.components*r.byteLength;case ja:return i*e/r.components*r.byteLength;case cr:return i*e*2/r.components*r.byteLength;case Za:return i*e*2/r.components*r.byteLength;case Zl:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case Ja:return i*e*4/r.components*r.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case e0:return Math.max(i,16)*Math.max(e,8)/4;case $a:case Qa:return Math.max(i,8)*Math.max(e,8)/2;case t0:case n0:case r0:case s0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case i0:case o0:case a0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case l0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case c0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case d0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case h0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case u0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case f0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case p0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case m0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case g0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case b0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case x0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case y0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case v0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case M0:case S0:case w0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case E0:case T0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case A0:case R0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rf(i){switch(i){case mn:case Wl:return{byteLength:1,components:1};case ns:case Xl:case ri:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case kn:case Xa:case Vn:return{byteLength:4,components:1};case ql:case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Th(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Nf(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){let p=u[h],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Np=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,x1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Uf,alphahash_pars_fragment:Ff,alphamap_fragment:Of,alphamap_pars_fragment:zf,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:Vf,aomap_pars_fragment:Hf,batching_pars_vertex:Gf,batching_vertex:Wf,begin_vertex:Xf,beginnormal_vertex:qf,bsdfs:Yf,iridescence_fragment:jf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:ep,color_pars_fragment:tp,color_pars_vertex:np,color_vertex:ip,common:rp,cube_uv_reflection_fragment:sp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:dp,colorspace_fragment:hp,colorspace_pars_fragment:up,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:bp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:yp,fog_pars_fragment:vp,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:Sp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Tp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Dp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Np,lights_fragment_maps:Up,lights_fragment_end:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:kp,map_fragment:Vp,map_pars_fragment:Hp,map_particle_fragment:Gp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Yp,morphcolor_vertex:jp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:$p,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:d1,project_vertex:h1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:b1,shadowmap_vertex:_1,shadowmask_pars_fragment:x1,skinbase_vertex:y1,skinning_pars_vertex:v1,skinning_vertex:M1,skinnormal_vertex:S1,specularmap_fragment:w1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:R1,transmission_pars_fragment:C1,uv_pars_fragment:P1,uv_pars_vertex:I1,uv_vertex:D1,worldpos_vertex:L1,background_vert:N1,background_frag:U1,backgroundCube_vert:F1,backgroundCube_frag:O1,cube_vert:z1,cube_frag:B1,depth_vert:k1,depth_frag:V1,distance_vert:H1,distance_frag:G1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:q1,linedashed_frag:Y1,meshbasic_vert:j1,meshbasic_frag:Z1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:em,meshnormal_frag:tm,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:rm,meshphysical_frag:sm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:dm,shadow_frag:hm,sprite_vert:um,sprite_frag:fm},Te={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},oi={basic:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:cn([Te.points,Te.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:cn([Te.common,Te.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:cn([Te.sprite,Te.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:cn([Te.common,Te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:cn([Te.lights,Te.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};oi.physical={uniforms:cn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var I0={r:0,b:0,g:0},ur=new zn,pm=new pt;function mm(i,e,t,n,r,s){let o=new lt(0),a=r===!0?0:1,l,c,d=null,u=0,h=null;function f(w){let S=w.isScene===!0?w.background:null;if(S&&S.isTexture){let M=w.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(w){let S=!1,M=f(w);M===null?g(o,a):M&&M.isColor&&(g(M,1),S=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,S){let M=f(S);M&&(M.isCubeTexture||M.mapping===so)?(c===void 0&&(c=new bt(new ti(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:hr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ur.copy(S.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(ur)),c.material.toneMapped=ut.getTransfer(M.colorSpace)!==xt,(d!==M||u!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new Ys(2,2),new En({name:"BackgroundMaterial",uniforms:hr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,S){w.getRGB(I0,tc(i)),t.buffers.color.setClear(I0.r,I0.g,I0.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:p,addToRenderList:_,dispose:m}}function gm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(R,U,B,G,W){let k=!1,q=u(R,G,B,U);s!==q&&(s=q,c(s.object)),k=f(R,G,B,W),k&&p(R,G,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(R,U,B,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function u(R,U,B,G){let W=G.wireframe===!0,k=n[U.id];k===void 0&&(k={},n[U.id]=k);let q=R.isInstancedMesh===!0?R.id:0,ae=k[q];ae===void 0&&(ae={},k[q]=ae);let ue=ae[B.id];ue===void 0&&(ue={},ae[B.id]=ue);let Se=ue[W];return Se===void 0&&(Se=h(l()),ue[W]=Se),Se}function h(R){let U=[],B=[],G=[];for(let W=0;W<t;W++)U[W]=0,B[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:G,object:R,attributes:{},index:null}}function f(R,U,B,G){let W=s.attributes,k=U.attributes,q=0,ae=B.getAttributes();for(let ue in ae)if(ae[ue].location>=0){let Me=W[ue],Ee=k[ue];if(Ee===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Me===void 0||Me.attribute!==Ee||Ee&&Me.data!==Ee.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function p(R,U,B,G){let W={},k=U.attributes,q=0,ae=B.getAttributes();for(let ue in ae)if(ae[ue].location>=0){let Me=k[ue];Me===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor));let Ee={};Ee.attribute=Me,Me&&Me.data&&(Ee.data=Me.data),W[ue]=Ee,q++}s.attributes=W,s.attributesNum=q,s.index=G}function _(){let R=s.newAttributes;for(let U=0,B=R.length;U<B;U++)R[U]=0}function g(R){m(R,0)}function m(R,U){let B=s.newAttributes,G=s.enabledAttributes,W=s.attributeDivisors;B[R]=1,G[R]===0&&(i.enableVertexAttribArray(R),G[R]=1),W[R]!==U&&(i.vertexAttribDivisor(R,U),W[R]=U)}function w(){let R=s.newAttributes,U=s.enabledAttributes;for(let B=0,G=U.length;B<G;B++)U[B]!==R[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function S(R,U,B,G,W,k,q){q===!0?i.vertexAttribIPointer(R,U,B,W,k):i.vertexAttribPointer(R,U,B,G,W,k)}function M(R,U,B,G){_();let W=G.attributes,k=B.getAttributes(),q=U.defaultAttributeValues;for(let ae in k){let ue=k[ae];if(ue.location>=0){let Se=W[ae];if(Se===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),Se!==void 0){let Me=Se.normalized,Ee=Se.itemSize,We=e.get(Se);if(We===void 0)continue;let Ke=We.buffer,ct=We.type,re=We.bytesPerElement,_e=ct===i.INT||ct===i.UNSIGNED_INT||Se.gpuType===Xa;if(Se.isInterleavedBufferAttribute){let xe=Se.data,Fe=xe.stride,Oe=Se.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ue.locationSize;Xe++)m(ue.location+Xe,xe.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<ue.locationSize;Xe++)g(ue.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Xe=0;Xe<ue.locationSize;Xe++)S(ue.location+Xe,Ee/ue.locationSize,ct,Me,Fe*re,(Oe+Ee/ue.locationSize*Xe)*re,_e)}else{if(Se.isInstancedBufferAttribute){for(let xe=0;xe<ue.locationSize;xe++)m(ue.location+xe,Se.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let xe=0;xe<ue.locationSize;xe++)g(ue.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let xe=0;xe<ue.locationSize;xe++)S(ue.location+xe,Ee/ue.locationSize,ct,Me,Ee*re,Ee/ue.locationSize*xe*re,_e)}}else if(q!==void 0){let Me=q[ae];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(ue.location,Me);break;case 3:i.vertexAttrib3fv(ue.location,Me);break;case 4:i.vertexAttrib4fv(ue.location,Me);break;default:i.vertexAttrib1fv(ue.location,Me)}}}}w()}function I(){y();for(let R in n){let U=n[R];for(let B in U){let G=U[B];for(let W in G){let k=G[W];for(let q in k)d(k[q].object),delete k[q];delete G[W]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let B in U){let G=U[B];for(let W in G){let k=G[W];for(let q in k)d(k[q].object),delete k[q];delete G[W]}}delete n[R.id]}function D(R){for(let U in n){let B=n[U];for(let G in B){let W=B[G];if(W[R.id]===void 0)continue;let k=W[R.id];for(let q in k)d(k[q].object),delete k[q];delete W[R.id]}}}function x(R){for(let U in n){let B=n[U],G=R.isInstancedMesh===!0?R.id:0,W=B[G];if(W!==void 0){for(let k in W){let q=W[k];for(let ae in q)d(q[ae].object),delete q[ae];delete W[k]}delete B[G],Object.keys(B).length===0&&delete n[U]}}}function y(){F(),o=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function bm(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let p=0;p<u;p++)f+=d[p];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],d[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=d[_]*h[_];t.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _m(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Pn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let x=D===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Vn&&!x)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:M,maxSamples:I,samples:A}}function xm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new pn,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?d(null):c();else{let w=s?0:n,S=w*4,M=m.clippingState||null;l.value=M,M=d(p,h,S,f);for(let I=0;I!==S;++I)M[I]=t[I];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,M=f;S!==_;++S,M+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ki=4,rh=[.125,.215,.35,.446,.526,.582],pr=20,ym=256,uo=new Kr,sh=new lt,sc=null,oc=0,ac=0,lc=!1,vm=new P,L0=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=vm}=s;sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,oc,ac),this._renderer.xr.enabled=lc,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ri,format:Pn,colorSpace:er,depthBuffer:!1},r=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mm(s)),this._blurMaterial=wm(s,e,t),this._ggxMaterial=Sm(s,e,t)}return r}_compileMaterial(e){let t=new bt(new Mt,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,r,s){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(sh),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ti,new Ci({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(sh),m=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));let I=this._cubeSize;rs(r,M*I,S>2?I:0,I,I),u.setRenderTarget(r),m&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Oi||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ki?n-p+ki:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,rs(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(a,uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,rs(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(a,uo)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*pr-1),_=s/p,g=isFinite(s)?1+Math.floor(d*_):pr;g>pr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pr}`);let m=[],w=0;for(let D=0;D<pr;++D){let x=D/_,y=Math.exp(-x*x/2);m.push(y),D===0?w+=y:D<g&&(w+=2*y)}for(let D=0;D<m.length;D++)m[D]=m[D]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-n;let M=this._sizeLods[r],I=3*M*(r>S-ki?r-S+ki:0),A=4*(this._cubeSize-M);rs(t,I,A,3*M,2*M),l.setRenderTarget(t),l.render(u,uo)}};function Mm(i){let e=[],t=[],n=[],r=i,s=i-ki+1+rh.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ki?l=rh[o-i+ki-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,_=3,g=2,m=1,w=new Float32Array(_*p*f),S=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let A=0;A<f;A++){let D=A%3*2/3-1,x=A>2?0:-1,y=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];w.set(y,_*p*A),S.set(h,g*p*A);let F=[A,A,A,A,A,A];M.set(F,m*p*A)}let I=new Mt;I.setAttribute("position",new Qt(w,_)),I.setAttribute("uv",new Qt(S,g)),I.setAttribute("faceIndex",new Qt(M,m)),n.push(new bt(I,null)),r>ki&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oh(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sm(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:F0(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function wm(i,e,t){let n=new Float32Array(pr),r=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ah(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function lh(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function F0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var N0=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ti(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ii});s.uniforms.tEquirect.value=t;let o=new bt(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=en),new ka(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function Em(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ha||f===Ga)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new N0(p.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,p=f===Ha||f===Ga,_=f===Oi||f===lr;if(p||_){let g=t.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new L0(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return p&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new L0(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,f){return f===Ha?h.mapping=Oi:f===Ga&&(h.mapping=lr),h}function l(h){let f=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Is("WebGLRenderer: "+n+" extension not supported."),r}}}function Am(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,p=u.attributes.position,_=0;if(p===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let S=0,M=w.length;S<M;S+=3){let I=w[S+0],A=w[S+1],D=w[S+2];h.push(I,A,A,D,D,I)}}else{let w=p.array;_=p.version;for(let S=0,M=w.length/3-1;S<M;S+=3){let I=S+0,A=S+1,D=S+2;h.push(I,A,A,D,D,I)}}let g=new(p.count>=65535?Us:Ns)(h,1);g.version=_;let m=s.get(u);m&&e.remove(m),s.set(u,g)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Rm(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,h*o,p),t.update(f,n,p))}function d(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(h,f,p,_){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,p);let m=0;for(let w=0;w<p;w++)m+=f[w]*_[w];t.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Cm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Pm(i,e,t){let n=new WeakMap,r=new Dt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let M=a.attributes.position.count*S,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*I*4*u),D=new Ds(A,M,I,u);D.type=Vn,D.needsUpdate=!0;let x=S*4;for(let F=0;F<u;F++){let R=g[F],U=m[F],B=w[F],G=M*I*4*F;for(let W=0;W<R.count;W++){let k=W*x;f===!0&&(r.fromBufferAttribute(R,W),A[G+k+0]=r.x,A[G+k+1]=r.y,A[G+k+2]=r.z,A[G+k+3]=0),p===!0&&(r.fromBufferAttribute(U,W),A[G+k+4]=r.x,A[G+k+5]=r.y,A[G+k+6]=r.z,A[G+k+7]=0),_===!0&&(r.fromBufferAttribute(B,W),A[G+k+8]=r.x,A[G+k+9]=r.y,A[G+k+10]=r.z,A[G+k+11]=B.itemSize===4?r.w:1)}}h={count:u,texture:D,size:new de(M,I)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Im(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Dm={[Ol]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Bl]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function Lm(i,e,t,n,r){let s=new Mn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Mn(e,t,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new Mt;a.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new mt([0,2,0,0,2,0],2));let l=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bt(a,l),d=new Kr(-1,1,1,-1,0,1),u=null,h=null,f=!1,p,_=null,g=[],m=!1;this.setSize=function(w,S){s.setSize(w,S),o.setSize(w,S);for(let M=0;M<g.length;M++){let I=g[M];I.setSize&&I.setSize(w,S)}},this.setEffects=function(w){g=w,m=g.length>0&&g[0].isRenderPass===!0;let S=s.width,M=s.height;for(let I=0;I<g.length;I++){let A=g[I];A.setSize&&A.setSize(S,M)}},this.begin=function(w,S){if(f||w.toneMapping===Bn&&g.length===0)return!1;if(_=S,S!==null){let M=S.width,I=S.height;(s.width!==M||s.height!==I)&&this.setSize(M,I)}return m===!1&&w.setRenderTarget(s),p=w.toneMapping,w.toneMapping=Bn,!0},this.hasRenderPass=function(){return m},this.end=function(w,S){w.toneMapping=p,f=!0;let M=s,I=o;for(let A=0;A<g.length;A++){let D=g[A];if(D.enabled!==!1&&(D.render(w,I,M,S),D.needsSwap!==!1)){let x=M;M=I,I=x}}if(u!==w.outputColorSpace||h!==w.toneMapping){u=w.outputColorSpace,h=w.toneMapping,l.defines={},ut.getTransfer(u)===xt&&(l.defines.SRGB_TRANSFER="");let A=Dm[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,w.setRenderTarget(_),w.render(c,d),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Ah=new hn,hc=new Ii(1,1),Rh=new Ds,Ch=new ba,Ph=new zs,ch=[],dh=[],hh=new Float32Array(16),uh=new Float32Array(9),fh=new Float32Array(4);function os(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function O0(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),Xt(t,n)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),Xt(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Xt(t,n)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Zm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=t.isReversedDepthBuffer()?P0:C0,s=hc):s=Ah,t.setTexture2D(e||s,r)}function Jm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ch,r)}function $m(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ph,r)}function Km(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rh,r)}function Qm(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return zm;case 35675:return Bm;case 35676:return km;case 5124:case 35670:return Vm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}function e2(i,e){i.uniform1fv(this.addr,e)}function t2(i,e){let t=os(e,this.size,2);i.uniform2fv(this.addr,t)}function n2(i,e){let t=os(e,this.size,3);i.uniform3fv(this.addr,t)}function i2(i,e){let t=os(e,this.size,4);i.uniform4fv(this.addr,t)}function r2(i,e){let t=os(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s2(i,e){let t=os(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o2(i,e){let t=os(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a2(i,e){i.uniform1iv(this.addr,e)}function l2(i,e){i.uniform2iv(this.addr,e)}function c2(i,e){i.uniform3iv(this.addr,e)}function d2(i,e){i.uniform4iv(this.addr,e)}function h2(i,e){i.uniform1uiv(this.addr,e)}function u2(i,e){i.uniform2uiv(this.addr,e)}function f2(i,e){i.uniform3uiv(this.addr,e)}function p2(i,e){i.uniform4uiv(this.addr,e)}function m2(i,e,t){let n=this.cache,r=e.length,s=O0(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=hc:o=Ah;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function g2(i,e,t){let n=this.cache,r=e.length,s=O0(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ch,s[o])}function b2(i,e,t){let n=this.cache,r=e.length,s=O0(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ph,s[o])}function _2(i,e,t){let n=this.cache,r=e.length,s=O0(t,r);Wt(n,s)||(i.uniform1iv(this.addr,s),Xt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rh,s[o])}function x2(i){switch(i){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return r2;case 35675:return s2;case 35676:return o2;case 5124:case 35670:return a2;case 35667:case 35671:return l2;case 35668:case 35672:return c2;case 35669:case 35673:return d2;case 5125:return h2;case 36294:return u2;case 36295:return f2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return _2}}var uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}},fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x2(t.type)}},pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function y2(i,e,t){let n=i.name,r=n.length;for(cc.lastIndex=0;;){let s=cc.exec(n),o=cc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ph(t,c===void 0?new uc(a,i,e):new fc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new pc(a),ph(t,u)),t=u}}}var ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);y2(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function mh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v2=37297,M2=0;function S2(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var gh=new tt;function w2(i){ut._getMatrix(gh,ut.workingColorSpace,i);let e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+S2(i.getShaderSource(e),a)}else return s}function E2(i,e){let t=w2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var T2={[Ol]:"Linear",[zl]:"Reinhard",[Bl]:"Cineon",[ro]:"ACESFilmic",[Vl]:"AgX",[Hl]:"Neutral",[kl]:"Custom"};function A2(i,e){let t=T2[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var D0=new P;function R2(){ut.getLuminanceCoefficients(D0);let i=D0.x.toFixed(4),e=D0.y.toFixed(4),t=D0.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function P2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function po(i){return i!==""}function _h(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D2=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(i){return i.replace(D2,N2)}var L2=new Map;function N2(i,e){let t=ot[e];if(t===void 0){let n=L2.get(e);if(n!==void 0)t=ot[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}var U2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(U2,F2)}function F2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var O2={[io]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function z2(i){return O2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B2={[Oi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function k2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var V2={[lr]:"ENVMAP_MODE_REFRACTION"};function H2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":V2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G2={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function W2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G2[i.combine]||"ENVMAP_BLENDING_NONE"}function X2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q2(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=z2(t),c=k2(t),d=H2(t),u=W2(t),h=X2(t),f=C2(t),p=P2(s),_=r.createProgram(),g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(po).join(`
`),m.length>0&&(m+=`
`)):(g=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Bn?A2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,E2("linearToOutputTexel",t.outputColorSpace),R2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=mc(o),o=_h(o,t),o=xh(o,t),a=mc(a),a=_h(a,t),a=xh(a,t),o=yh(o),a=yh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=w+g+o,M=w+m+a,I=mh(r,r.VERTEX_SHADER,S),A=mh(r,r.FRAGMENT_SHADER,M);r.attachShader(_,I),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(R){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(I)||"",G=r.getShaderInfoLog(A)||"",W=U.trim(),k=B.trim(),q=G.trim(),ae=!0,ue=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,I,A);else{let Se=bh(r,I,"vertex"),Me=bh(r,A,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+Se+`
`+Me)}else W!==""?Ye("WebGLProgram: Program Info Log:",W):(k===""||q==="")&&(ue=!1);ue&&(R.diagnostics={runnable:ae,programLog:W,vertexShader:{log:k,prefix:g},fragmentShader:{log:q,prefix:m}})}r.deleteShader(I),r.deleteShader(A),x=new ss(r,_),y=I2(r,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(_,v2)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}var Y2=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bc(e),t.set(e,n)),n}},bc=class{constructor(e){this.id=Y2++,this.code=e,this.usedTimes=0}};function j2(i,e,t,n,r,s){let o=new Wr,a=new gc,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,y,F,R,U){let B=R.fog,G=U.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||W,k),ae=q&&q.mapping===so?q.image.height:null,ue=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Me=Se!==void 0?Se.length:0,Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let We,Ke,ct,re;if(ue){let ve=oi[ue];We=ve.vertexShader,Ke=ve.fragmentShader}else We=x.vertexShader,Ke=x.fragmentShader,a.update(x),ct=a.getVertexShaderID(x),re=a.getFragmentShaderID(x);let _e=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,Xe=!!x.map,it=!!x.matcap,qe=!!q,le=!!x.aoMap,pe=!!x.lightMap,te=!!x.bumpMap,ye=!!x.normalMap,T=!!x.displacementMap,Ve=!!x.emissiveMap,we=!!x.metalnessMap,ze=!!x.roughnessMap,me=x.anisotropy>0,E=x.clearcoat>0,b=x.dispersion>0,O=x.iridescence>0,Q=x.sheen>0,ce=x.transmission>0,ee=me&&!!x.anisotropyMap,Pe=E&&!!x.clearcoatMap,be=E&&!!x.clearcoatNormalMap,Ne=E&&!!x.clearcoatRoughnessMap,X=O&&!!x.iridescenceMap,N=O&&!!x.iridescenceThicknessMap,$=Q&&!!x.sheenColorMap,ne=Q&&!!x.sheenRoughnessMap,se=!!x.specularMap,ie=!!x.specularColorMap,fe=!!x.specularIntensityMap,C=ce&&!!x.transmissionMap,L=ce&&!!x.thicknessMap,z=!!x.gradientMap,j=!!x.alphaMap,Y=x.alphaTest>0,V=!!x.alphaHash,oe=!!x.extensions,he=Bn;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(he=i.toneMapping);let Ce={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:Ke,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:er,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:it,envMap:qe,envMapMode:qe&&q.mapping,envMapCubeUVHeight:ae,aoMap:le,lightMap:pe,bumpMap:te,normalMap:ye,displacementMap:T,emissiveMap:Ve,normalMapObjectSpace:ye&&x.normalMapType===Bd,normalMapTangentSpace:ye&&x.normalMapType===$l,metalnessMap:we,roughnessMap:ze,anisotropy:me,anisotropyMap:ee,clearcoat:E,clearcoatMap:Pe,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:O,iridescenceMap:X,iridescenceThicknessMap:N,sheen:Q,sheenColorMap:$,sheenRoughnessMap:ne,specularMap:se,specularColorMap:ie,specularIntensityMap:fe,transmission:ce,transmissionMap:C,thicknessMap:L,gradientMap:z,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:Y,alphaHash:V,combine:x.combine,mapUv:Xe&&p(x.map.channel),aoMapUv:le&&p(x.aoMap.channel),lightMapUv:pe&&p(x.lightMap.channel),bumpMapUv:te&&p(x.bumpMap.channel),normalMapUv:ye&&p(x.normalMap.channel),displacementMapUv:T&&p(x.displacementMap.channel),emissiveMapUv:Ve&&p(x.emissiveMap.channel),metalnessMapUv:we&&p(x.metalnessMap.channel),roughnessMapUv:ze&&p(x.roughnessMap.channel),anisotropyMapUv:ee&&p(x.anisotropyMap.channel),clearcoatMapUv:Pe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:N&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(x.sheenRoughnessMap.channel),specularMapUv:se&&p(x.specularMap.channel),specularColorMapUv:ie&&p(x.specularColorMap.channel),specularIntensityMapUv:fe&&p(x.specularIntensityMap.channel),transmissionMapUv:C&&p(x.transmissionMap.channel),thicknessMapUv:L&&p(x.thicknessMap.channel),alphaMapUv:j&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Xe||j),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function g(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)y.push(F),y.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(m(y,x),w(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function m(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function w(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let y=f[x.type],F;if(y){let R=oi[y];F=nh.clone(R.uniforms)}else F=x.uniforms;return F}function M(x,y){let F=d.get(y);return F!==void 0?++F.usedTimes:(F=new q2(i,y,x,r),c.push(F),d.set(y,F)),F}function I(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:M,releaseProgram:I,releaseShaderCache:A,programs:c,dispose:D}}function Z2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function J2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sh(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,_,g,m){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=p,w.materialVariant=o(h),w.groupOrder=_,w.renderOrder=h.renderOrder,w.z=g,w.group=m),e++,w}function l(h,f,p,_,g,m){let w=a(h,f,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?r.push(w):t.push(w)}function c(h,f,p,_,g,m){let w=a(h,f,p,_,g,m);p.transmission>0?n.unshift(w):p.transparent===!0?r.unshift(w):t.unshift(w)}function d(h,f){t.length>1&&t.sort(h||J2),n.length>1&&n.sort(f||Mh),r.length>1&&r.sort(f||Mh)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function $2(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Sh,i.set(n,[o])):r>=s.length?(o=new Sh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function K2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new lt};break;case"SpotLight":t={position:new P,direction:new P,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Q2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var e3=0;function t3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n3(i){let e=new K2,t=Q2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let r=new P,s=new pt,o=new pt;function a(c){let d=0,u=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,w=0,S=0,M=0,I=0,A=0,D=0;c.sort(t3);for(let y=0,F=c.length;y<F;y++){let R=c[y],U=R.color,B=R.intensity,G=R.distance,W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cr?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=U.r*B,u+=U.g*B,h+=U.b*B;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],B);D++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,ae=t.get(R);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,n.directionalShadow[f]=ae,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=k,f++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(B),k.distance=G,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let q=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,q.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,R.castShadow){let ae=t.get(R);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,n.spotShadow[_]=ae,n.spotShadowMap[_]=W,M++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(U).multiplyScalar(B),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=k,g++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let q=R.shadow,ae=t.get(R);ae.shadowIntensity=q.intensity,ae.shadowBias=q.bias,ae.shadowNormalBias=q.normalBias,ae.shadowRadius=q.radius,ae.shadowMapSize=q.mapSize,ae.shadowCameraNear=q.camera.near,ae.shadowCameraFar=q.camera.far,n.pointShadow[p]=ae,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=R.shadow.matrix,S++}n.point[p]=k,p++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(B),k.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[m]=k,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==w||x.numPointShadows!==S||x.numSpotShadows!==M||x.numSpotMaps!==I||x.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=w,x.numPointShadows=S,x.numSpotShadows=M,x.numSpotMaps=I,x.numLightProbes=D,n.version=e3++)}function l(c,d){let u=0,h=0,f=0,p=0,_=0,g=d.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let S=c[m];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(S.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function wh(i){let e=new n3(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function i3(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new wh(i),e.set(r,[a])):s>=o.length?(a=new wh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o3=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],a3=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Eh=new pt,fo=new P,dc=new P;function l3(i,e,t){let n=new jr,r=new de,s=new de,o=new Dt,a=new Ra,l=new Ca,c={},d=t.maxTextureSize,u={[pi]:fn,[fn]:pi,[tn]:tn},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:r3,fragmentShader:s3}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new bt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let m=this.type;this.render=function(A,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===gd&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=io);let y=i.getRenderTarget(),F=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=m!==this.type;B&&D.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(W=>W.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,W=A.length;G<W;G++){let k=A[G],q=k.shadow;if(q===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let ae=q.getFrameExtents();r.multiply(ae),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ae.x),r.x=s.x*ae.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ae.y),r.y=s.y*ae.y,q.mapSize.y=s.y));let ue=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=ue,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ts){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Mn(r.x,r.y,{format:cr,type:ri,minFilter:en,magFilter:en,generateMipmaps:!1}),q.map.texture.name=k.name+".shadowMap",q.map.depthTexture=new Ii(r.x,r.y,Vn),q.map.depthTexture.name=k.name+".shadowMapDepth",q.map.depthTexture.format=Kn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=$t,q.map.depthTexture.magFilter=$t}else k.isPointLight?(q.map=new N0(r.x),q.map.depthTexture=new va(r.x,kn)):(q.map=new Mn(r.x,r.y),q.map.depthTexture=new Ii(r.x,r.y,kn)),q.map.depthTexture.name=k.name+".shadowMap",q.map.depthTexture.format=Kn,this.type===io?(q.map.depthTexture.compareFunction=ue?P0:C0,q.map.depthTexture.minFilter=en,q.map.depthTexture.magFilter=en):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=$t,q.map.depthTexture.magFilter=$t);q.camera.updateProjectionMatrix()}let Se=q.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Se;Me++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(q.map),i.clear());let Ee=q.getViewport(Me);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(o)}if(k.isPointLight){let Ee=q.camera,We=q.matrix,Ke=k.distance||Ee.far;Ke!==Ee.far&&(Ee.far=Ke,Ee.updateProjectionMatrix()),fo.setFromMatrixPosition(k.matrixWorld),Ee.position.copy(fo),dc.copy(Ee.position),dc.add(o3[Me]),Ee.up.copy(a3[Me]),Ee.lookAt(dc),Ee.updateMatrixWorld(),We.makeTranslation(-fo.x,-fo.y,-fo.z),Eh.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Eh,Ee.coordinateSystem,Ee.reversedDepth)}else q.updateMatrices(k);n=q.getFrustum(),M(D,x,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===ts&&w(q,x),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(y,F,R)};function w(A,D){let x=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mn(r.x,r.y,{format:cr,type:ri})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,x,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,x,f,_,null)}function S(A,D,x,y){let F=null,R=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)F=R;else if(F=x.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let U=F.uuid,B=D.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let W=G[B];W===void 0&&(W=F.clone(),G[B]=W,D.addEventListener("dispose",I)),F=W}if(F.visible=D.visible,F.wireframe=D.wireframe,y===ts?F.side=D.shadowSide!==null?D.shadowSide:D.side:F.side=D.shadowSide!==null?D.shadowSide:u[D.side],F.alphaMap=D.alphaMap,F.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,F.map=D.map,F.clipShadows=D.clipShadows,F.clippingPlanes=D.clippingPlanes,F.clipIntersection=D.clipIntersection,F.displacementMap=D.displacementMap,F.displacementScale=D.displacementScale,F.displacementBias=D.displacementBias,F.wireframeLinewidth=D.wireframeLinewidth,F.linewidth=D.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let U=i.properties.get(F);U.light=x}return F}function M(A,D,x,y,F){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===ts)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let B=e.update(A),G=A.material;if(Array.isArray(G)){let W=B.groups;for(let k=0,q=W.length;k<q;k++){let ae=W[k],ue=G[ae.materialIndex];if(ue&&ue.visible){let Se=S(A,ue,y,F);A.onBeforeShadow(i,A,D,x,B,Se,ae),i.renderBufferDirect(x,null,B,Se,A,ae),A.onAfterShadow(i,A,D,x,B,Se,ae)}}}else if(G.visible){let W=S(A,G,y,F);A.onBeforeShadow(i,A,D,x,B,W,null),i.renderBufferDirect(x,null,B,W,A,null),A.onAfterShadow(i,A,D,x,B,W,null)}}let U=A.children;for(let B=0,G=U.length;B<G;B++)M(U[B],D,x,y,F)}function I(A){A.target.removeEventListener("dispose",I);for(let x in c){let y=c[x],F=A.target.uuid;F in y&&(y[F].dispose(),delete y[F])}}}function c3(i,e){function t(){let C=!1,L=new Dt,z=null,j=new Dt(0,0,0,0);return{setMask:function(Y){z!==Y&&!C&&(i.colorMask(Y,Y,Y,Y),z=Y)},setLocked:function(Y){C=Y},setClear:function(Y,V,oe,he,Ce){Ce===!0&&(Y*=he,V*=he,oe*=he),L.set(Y,V,oe,he),j.equals(L)===!1&&(i.clearColor(Y,V,oe,he),j.copy(L))},reset:function(){C=!1,z=null,j.set(-1,0,0,0)}}}function n(){let C=!1,L=!1,z=null,j=null,Y=null;return{setReversed:function(V){if(L!==V){let oe=e.get("EXT_clip_control");V?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),L=V;let he=Y;Y=null,this.setClear(he)}},getReversed:function(){return L},setTest:function(V){V?_e(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(V){z!==V&&!C&&(i.depthMask(V),z=V)},setFunc:function(V){if(L&&(V=Zd[V]),j!==V){switch(V){case ra:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=V}},setLocked:function(V){C=V},setClear:function(V){Y!==V&&(Y=V,L&&(V=1-V),i.clearDepth(V))},reset:function(){C=!1,z=null,j=null,Y=null,L=!1}}}function r(){let C=!1,L=null,z=null,j=null,Y=null,V=null,oe=null,he=null,Ce=null;return{setTest:function(ve){C||(ve?_e(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ve){L!==ve&&!C&&(i.stencilMask(ve),L=ve)},setFunc:function(ve,rt,Ie){(z!==ve||j!==rt||Y!==Ie)&&(i.stencilFunc(ve,rt,Ie),z=ve,j=rt,Y=Ie)},setOp:function(ve,rt,Ie){(V!==ve||oe!==rt||he!==Ie)&&(i.stencilOp(ve,rt,Ie),V=ve,oe=rt,he=Ie)},setLocked:function(ve){C=ve},setClear:function(ve){Ce!==ve&&(i.clearStencil(ve),Ce=ve)},reset:function(){C=!1,L=null,z=null,j=null,Y=null,V=null,oe=null,he=null,Ce=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],p=null,_=!1,g=null,m=null,w=null,S=null,M=null,I=null,A=null,D=new lt(0,0,0),x=0,y=!1,F=null,R=null,U=null,B=null,G=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,q=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=q>=1):ae.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=q>=2);let ue=null,Se={},Me=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),We=new Dt().fromArray(Me),Ke=new Dt().fromArray(Ee);function ct(C,L,z,j){let Y=new Uint8Array(4),V=i.createTexture();i.bindTexture(C,V),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<z;oe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(L+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return V}let re={};re[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(i.DEPTH_TEST),o.setFunc(Qi),te(!1),ye(Dl),_e(i.CULL_FACE),le(ii);function _e(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function xe(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Fe(C,L){return u[C]!==L?(i.bindFramebuffer(C,L),u[C]=L,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=L),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=L),!0):!1}function Oe(C,L){let z=f,j=!1;if(C){z=h.get(L),z===void 0&&(z=[],h.set(L,z));let Y=C.textures;if(z.length!==Y.length||z[0]!==i.COLOR_ATTACHMENT0){for(let V=0,oe=Y.length;V<oe;V++)z[V]=i.COLOR_ATTACHMENT0+V;z.length=Y.length,j=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,j=!0);j&&i.drawBuffers(z)}function Xe(C){return p!==C?(i.useProgram(C),p=C,!0):!1}let it={[Ai]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};it[yd]=i.MIN,it[vd]=i.MAX;let qe={[Md]:i.ZERO,[Sd]:i.ONE,[wd]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Rd]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Cd]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Id]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Nd]:i.ONE_MINUS_CONSTANT_ALPHA};function le(C,L,z,j,Y,V,oe,he,Ce,ve){if(C===ii){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(_e(i.BLEND),_=!0),C!==bd){if(C!==g||ve!==y){if((m!==Ai||M!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,M=Ai),ve)switch(C){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",C);break}else switch(C){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",C);break}w=null,S=null,I=null,A=null,D.set(0,0,0),x=0,g=C,y=ve}return}Y=Y||L,V=V||z,oe=oe||j,(L!==m||Y!==M)&&(i.blendEquationSeparate(it[L],it[Y]),m=L,M=Y),(z!==w||j!==S||V!==I||oe!==A)&&(i.blendFuncSeparate(qe[z],qe[j],qe[V],qe[oe]),w=z,S=j,I=V,A=oe),(he.equals(D)===!1||Ce!==x)&&(i.blendColor(he.r,he.g,he.b,Ce),D.copy(he),x=Ce),g=C,y=!1}function pe(C,L){C.side===tn?xe(i.CULL_FACE):_e(i.CULL_FACE);let z=C.side===fn;L&&(z=!z),te(z),C.blending===Ki&&C.transparent===!1?le(ii):le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);let j=C.stencilWrite;a.setTest(j),j&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ve(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function ye(C){C!==pd?(_e(i.CULL_FACE),C!==R&&(C===Dl?i.cullFace(i.BACK):C===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),R=C}function T(C){C!==U&&(k&&i.lineWidth(C),U=C)}function Ve(C,L,z){C?(_e(i.POLYGON_OFFSET_FILL),(B!==L||G!==z)&&(B=L,G=z,o.getReversed()&&(L=-L),i.polygonOffset(L,z))):xe(i.POLYGON_OFFSET_FILL)}function we(C){C?_e(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ze(C){C===void 0&&(C=i.TEXTURE0+W-1),ue!==C&&(i.activeTexture(C),ue=C)}function me(C,L,z){z===void 0&&(ue===null?z=i.TEXTURE0+W-1:z=ue);let j=Se[z];j===void 0&&(j={type:void 0,texture:void 0},Se[z]=j),(j.type!==C||j.texture!==L)&&(ue!==z&&(i.activeTexture(z),ue=z),i.bindTexture(C,L||re[C]),j.type=C,j.texture=L)}function E(){let C=Se[ue];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function Q(){try{i.texSubImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function ce(){try{i.texSubImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function be(){try{i.texStorage2D(...arguments)}catch(C){je("WebGLState:",C)}}function Ne(){try{i.texStorage3D(...arguments)}catch(C){je("WebGLState:",C)}}function X(){try{i.texImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function N(){try{i.texImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function $(C){We.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),We.copy(C))}function ne(C){Ke.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Ke.copy(C))}function se(C,L){let z=c.get(L);z===void 0&&(z=new WeakMap,c.set(L,z));let j=z.get(C);j===void 0&&(j=i.getUniformBlockIndex(L,C.name),z.set(C,j))}function ie(C,L){let j=c.get(L).get(C);l.get(L)!==j&&(i.uniformBlockBinding(L,j,C.__bindingPointIndex),l.set(L,j))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,Se={},u={},h=new WeakMap,f=[],p=null,_=!1,g=null,m=null,w=null,S=null,M=null,I=null,A=null,D=new lt(0,0,0),x=0,y=!1,F=null,R=null,U=null,B=null,G=null,We.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:_e,disable:xe,bindFramebuffer:Fe,drawBuffers:Oe,useProgram:Xe,setBlending:le,setMaterial:pe,setFlipSided:te,setCullFace:ye,setLineWidth:T,setPolygonOffset:Ve,setScissorTest:we,activeTexture:ze,bindTexture:me,unbindTexture:E,compressedTexImage2D:b,compressedTexImage3D:O,texImage2D:X,texImage3D:N,updateUBOMapping:se,uniformBlockBinding:ie,texStorage2D:be,texStorage3D:Ne,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:ee,compressedTexSubImage3D:Pe,scissor:$,viewport:ne,reset:fe}}function d3(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,b){return f?new OffscreenCanvas(E,b):Cs("canvas")}function _(E,b,O){let Q=1,ce=me(E);if((ce.width>O||ce.height>O)&&(Q=O/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ee=Math.floor(Q*ce.width),Pe=Math.floor(Q*ce.height);u===void 0&&(u=p(ee,Pe));let be=b?p(ee,Pe):u;return be.width=ee,be.height=Pe,be.getContext("2d").drawImage(E,0,0,ee,Pe),Ye("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ee+"x"+Pe+")."),be}else return"data"in E&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,b,O,Q,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=b;if(b===i.RED&&(O===i.FLOAT&&(ee=i.R32F),O===i.HALF_FLOAT&&(ee=i.R16F),O===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.R8UI),O===i.UNSIGNED_SHORT&&(ee=i.R16UI),O===i.UNSIGNED_INT&&(ee=i.R32UI),O===i.BYTE&&(ee=i.R8I),O===i.SHORT&&(ee=i.R16I),O===i.INT&&(ee=i.R32I)),b===i.RG&&(O===i.FLOAT&&(ee=i.RG32F),O===i.HALF_FLOAT&&(ee=i.RG16F),O===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RG8UI),O===i.UNSIGNED_SHORT&&(ee=i.RG16UI),O===i.UNSIGNED_INT&&(ee=i.RG32UI),O===i.BYTE&&(ee=i.RG8I),O===i.SHORT&&(ee=i.RG16I),O===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),O===i.UNSIGNED_INT&&(ee=i.RGB32UI),O===i.BYTE&&(ee=i.RGB8I),O===i.SHORT&&(ee=i.RGB16I),O===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),O===i.UNSIGNED_INT&&(ee=i.RGBA32UI),O===i.BYTE&&(ee=i.RGBA8I),O===i.SHORT&&(ee=i.RGBA16I),O===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){let Pe=ce?Rs:ut.getTransfer(Q);O===i.FLOAT&&(ee=i.RGBA32F),O===i.HALF_FLOAT&&(ee=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ee=Pe===xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(E,b){let O;return E?b===null||b===kn||b===is?O=i.DEPTH24_STENCIL8:b===Vn?O=i.DEPTH32F_STENCIL8:b===ns&&(O=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===kn||b===is?O=i.DEPTH_COMPONENT24:b===Vn?O=i.DEPTH_COMPONENT32F:b===ns&&(O=i.DEPTH_COMPONENT16),O}function I(E,b){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==$t&&E.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function A(E){let b=E.target;b.removeEventListener("dispose",A),x(b),b.isVideoTexture&&d.delete(b)}function D(E){let b=E.target;b.removeEventListener("dispose",D),F(b)}function x(E){let b=n.get(E);if(b.__webglInit===void 0)return;let O=E.source,Q=h.get(O);if(Q){let ce=Q[b.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&y(E),Object.keys(Q).length===0&&h.delete(O)}n.remove(E)}function y(E){let b=n.get(E);i.deleteTexture(b.__webglTexture);let O=E.source,Q=h.get(O);delete Q[b.__cacheKey],o.memory.textures--}function F(E){let b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let ce=0;ce<b.__webglFramebuffer[Q].length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[Q][ce]);else i.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=E.textures;for(let Q=0,ce=O.length;Q<ce;Q++){let ee=n.get(O[Q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(O[Q])}n.remove(E)}let R=0;function U(){R=0}function B(){let E=R;return E>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function G(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function W(E,b){let O=n.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let Q=E.image;if(Q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{re(O,E,b);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function k(E,b){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){re(O,E,b);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function q(E,b){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){re(O,E,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function ae(E,b){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){_e(O,E,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let ue={[ha]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},Se={[$t]:i.NEAREST,[Od]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Me={[kd]:i.NEVER,[Xd]:i.ALWAYS,[Vd]:i.LESS,[C0]:i.LEQUAL,[Hd]:i.EQUAL,[P0]:i.GEQUAL,[Gd]:i.GREATER,[Wd]:i.NOTEQUAL};function Ee(E,b){if(b.type===Vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Wa||b.magFilter===oo||b.magFilter===zi||b.minFilter===en||b.minFilter===Wa||b.minFilter===oo||b.minFilter===zi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Se[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==oo&&b.minFilter!==zi||b.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function We(E,b){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",A));let Q=b.source,ce=h.get(Q);ce===void 0&&(ce={},h.set(Q,ce));let ee=G(b);if(ee!==E.__cacheKey){ce[ee]===void 0&&(ce[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ce[ee].usedTimes++;let Pe=ce[E.__cacheKey];Pe!==void 0&&(ce[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&y(b)),E.__cacheKey=ee,E.__webglTexture=ce[ee].texture}return O}function Ke(E,b,O){return Math.floor(Math.floor(E/O)/b)}function ct(E,b,O,Q){let ee=E.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,O,Q,b.data);else{ee.sort((N,$)=>N.start-$.start);let Pe=0;for(let N=1;N<ee.length;N++){let $=ee[Pe],ne=ee[N],se=$.start+$.count,ie=Ke(ne.start,b.width,4),fe=Ke($.start,b.width,4);ne.start<=se+1&&ie===fe&&Ke(ne.start+ne.count-1,b.width,4)===ie?$.count=Math.max($.count,ne.start+ne.count-$.start):(++Pe,ee[Pe]=ne)}ee.length=Pe+1;let be=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),X=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,$=ee.length;N<$;N++){let ne=ee[N],se=Math.floor(ne.start/4),ie=Math.ceil(ne.count/4),fe=se%b.width,C=Math.floor(se/b.width),L=ie,z=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,fe,C,L,z,O,Q,b.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,X)}}function re(E,b,O){let Q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=i.TEXTURE_3D);let ce=We(E,b),ee=b.source;t.bindTexture(Q,E.__webglTexture,i.TEXTURE0+O);let Pe=n.get(ee);if(ee.version!==Pe.__version||ce===!0){t.activeTexture(i.TEXTURE0+O);let be=ut.getPrimaries(ut.workingColorSpace),Ne=b.colorSpace===gi?null:ut.getPrimaries(b.colorSpace),X=b.colorSpace===gi||be===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let N=_(b.image,!1,r.maxTextureSize);N=ze(b,N);let $=s.convert(b.format,b.colorSpace),ne=s.convert(b.type),se=S(b.internalFormat,$,ne,b.colorSpace,b.isVideoTexture);Ee(Q,b);let ie,fe=b.mipmaps,C=b.isVideoTexture!==!0,L=Pe.__version===void 0||ce===!0,z=ee.dataReady,j=I(b,N);if(b.isDepthTexture)se=M(b.format===Bi,b.type),L&&(C?t.texStorage2D(i.TEXTURE_2D,1,se,N.width,N.height):t.texImage2D(i.TEXTURE_2D,0,se,N.width,N.height,0,$,ne,null));else if(b.isDataTexture)if(fe.length>0){C&&L&&t.texStorage2D(i.TEXTURE_2D,j,se,fe[0].width,fe[0].height);for(let Y=0,V=fe.length;Y<V;Y++)ie=fe[Y],C?z&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,$,ne,ie.data):t.texImage2D(i.TEXTURE_2D,Y,se,ie.width,ie.height,0,$,ne,ie.data);b.generateMipmaps=!1}else C?(L&&t.texStorage2D(i.TEXTURE_2D,j,se,N.width,N.height),z&&ct(b,N,$,ne)):t.texImage2D(i.TEXTURE_2D,0,se,N.width,N.height,0,$,ne,N.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){C&&L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,se,fe[0].width,fe[0].height,N.depth);for(let Y=0,V=fe.length;Y<V;Y++)if(ie=fe[Y],b.format!==Pn)if($!==null)if(C){if(z)if(b.layerUpdates.size>0){let oe=rc(ie.width,ie.height,b.format,b.type);for(let he of b.layerUpdates){let Ce=ie.data.subarray(he*oe/ie.data.BYTES_PER_ELEMENT,(he+1)*oe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,he,ie.width,ie.height,1,$,Ce)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,N.depth,$,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,se,ie.width,ie.height,N.depth,0,ie.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,N.depth,$,ne,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,se,ie.width,ie.height,N.depth,0,$,ne,ie.data)}else{C&&L&&t.texStorage2D(i.TEXTURE_2D,j,se,fe[0].width,fe[0].height);for(let Y=0,V=fe.length;Y<V;Y++)ie=fe[Y],b.format!==Pn?$!==null?C?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,$,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,se,ie.width,ie.height,0,ie.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?z&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ie.width,ie.height,$,ne,ie.data):t.texImage2D(i.TEXTURE_2D,Y,se,ie.width,ie.height,0,$,ne,ie.data)}else if(b.isDataArrayTexture)if(C){if(L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,se,N.width,N.height,N.depth),z)if(b.layerUpdates.size>0){let Y=rc(N.width,N.height,b.format,b.type);for(let V of b.layerUpdates){let oe=N.data.subarray(V*Y/N.data.BYTES_PER_ELEMENT,(V+1)*Y/N.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,N.width,N.height,1,$,ne,oe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,$,ne,N.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,N.width,N.height,N.depth,0,$,ne,N.data);else if(b.isData3DTexture)C?(L&&t.texStorage3D(i.TEXTURE_3D,j,se,N.width,N.height,N.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,$,ne,N.data)):t.texImage3D(i.TEXTURE_3D,0,se,N.width,N.height,N.depth,0,$,ne,N.data);else if(b.isFramebufferTexture){if(L)if(C)t.texStorage2D(i.TEXTURE_2D,j,se,N.width,N.height);else{let Y=N.width,V=N.height;for(let oe=0;oe<j;oe++)t.texImage2D(i.TEXTURE_2D,oe,se,Y,V,0,$,ne,null),Y>>=1,V>>=1}}else if(fe.length>0){if(C&&L){let Y=me(fe[0]);t.texStorage2D(i.TEXTURE_2D,j,se,Y.width,Y.height)}for(let Y=0,V=fe.length;Y<V;Y++)ie=fe[Y],C?z&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,$,ne,ie):t.texImage2D(i.TEXTURE_2D,Y,se,$,ne,ie);b.generateMipmaps=!1}else if(C){if(L){let Y=me(N);t.texStorage2D(i.TEXTURE_2D,j,se,Y.width,Y.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,ne,N)}else t.texImage2D(i.TEXTURE_2D,0,se,$,ne,N);g(b)&&m(Q),Pe.__version=ee.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function _e(E,b,O){if(b.image.length!==6)return;let Q=We(E,b),ce=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let ee=n.get(ce);if(ce.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let Pe=ut.getPrimaries(ut.workingColorSpace),be=b.colorSpace===gi?null:ut.getPrimaries(b.colorSpace),Ne=b.colorSpace===gi||Pe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let X=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,$=[];for(let V=0;V<6;V++)!X&&!N?$[V]=_(b.image[V],!0,r.maxCubemapSize):$[V]=N?b.image[V].image:b.image[V],$[V]=ze(b,$[V]);let ne=$[0],se=s.convert(b.format,b.colorSpace),ie=s.convert(b.type),fe=S(b.internalFormat,se,ie,b.colorSpace),C=b.isVideoTexture!==!0,L=ee.__version===void 0||Q===!0,z=ce.dataReady,j=I(b,ne);Ee(i.TEXTURE_CUBE_MAP,b);let Y;if(X){C&&L&&t.texStorage2D(i.TEXTURE_CUBE_MAP,j,fe,ne.width,ne.height);for(let V=0;V<6;V++){Y=$[V].mipmaps;for(let oe=0;oe<Y.length;oe++){let he=Y[oe];b.format!==Pn?se!==null?C?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,he.width,he.height,se,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,fe,he.width,he.height,0,he.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,he.width,he.height,se,ie,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,fe,he.width,he.height,0,se,ie,he.data)}}}else{if(Y=b.mipmaps,C&&L){Y.length>0&&j++;let V=me($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,j,fe,V.width,V.height)}for(let V=0;V<6;V++)if(N){C?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,$[V].width,$[V].height,se,ie,$[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,$[V].width,$[V].height,0,se,ie,$[V].data);for(let oe=0;oe<Y.length;oe++){let Ce=Y[oe].image[V].image;C?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,Ce.width,Ce.height,se,ie,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,fe,Ce.width,Ce.height,0,se,ie,Ce.data)}}else{C?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,se,ie,$[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,fe,se,ie,$[V]);for(let oe=0;oe<Y.length;oe++){let he=Y[oe];C?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,se,ie,he.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,fe,se,ie,he.image[V])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),ee.__version=ce.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function xe(E,b,O,Q,ce,ee){let Pe=s.convert(O.format,O.colorSpace),be=s.convert(O.type),Ne=S(O.internalFormat,Pe,be,O.colorSpace),X=n.get(b),N=n.get(O);if(N.__renderTarget=b,!X.__hasExternalTextures){let $=Math.max(1,b.width>>ee),ne=Math.max(1,b.height>>ee);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ee,Ne,$,ne,b.depth,0,Pe,be,null):t.texImage2D(ce,ee,Ne,$,ne,0,Pe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ce,N.__webglTexture,0,T(b)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ce,N.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){let Q=b.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,ee=M(b.stencilBuffer,ce),Pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T(b),ee,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,T(b),ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,E)}else{let Q=b.textures;for(let ce=0;ce<Q.length;ce++){let ee=Q[ce],Pe=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),Ne=S(ee.internalFormat,Pe,be,ee.colorSpace);Ve(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T(b),Ne,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,T(b),Ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(E,b,O){let Q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(b.depthTexture);if(ce.__renderTarget=b,(!ce.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),ce.__webglTexture===void 0){ce.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,b.depthTexture);let X=s.convert(b.depthTexture.format),N=s.convert(b.depthTexture.type),$;b.depthTexture.format===Kn?$=i.DEPTH_COMPONENT24:b.depthTexture.format===Bi&&($=i.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$,b.width,b.height,0,X,N,null)}}else W(b.depthTexture,0);let ee=ce.__webglTexture,Pe=T(b),be=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Ne=b.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Kn)Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,be,ee,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,be,ee,0);else if(b.depthTexture.format===Bi)Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,be,ee,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,be,ee,0);else throw new Error("Unknown depthTexture format")}function Xe(E){let b=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let Q=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let ce=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),b.__depthDisposeCallback=ce}b.__boundDepthTexture=Q}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)Oe(b.__webglFramebuffer[Q],E,Q);else{let Q=E.texture.mipmaps;Q&&Q.length>0?Oe(b.__webglFramebuffer[0],E,0):Oe(b.__webglFramebuffer,E,0)}else if(O){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=i.createRenderbuffer(),Fe(b.__webglDepthbuffer[Q],E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ee)}}else{let Q=E.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Fe(b.__webglDepthbuffer,E,!1);else{let ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,b,O){let Q=n.get(E);b!==void 0&&xe(Q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Xe(E)}function qe(E){let b=E.texture,O=n.get(E),Q=n.get(b);E.addEventListener("dispose",D);let ce=E.textures,ee=E.isWebGLCubeRenderTarget===!0,Pe=ce.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=b.version,o.memory.textures++),ee){O.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[be]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)O.__webglFramebuffer[be][Ne]=i.createFramebuffer()}else O.__webglFramebuffer[be]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)O.__webglFramebuffer[be]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let be=0,Ne=ce.length;be<Ne;be++){let X=n.get(ce[be]);X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ve(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let be=0;be<ce.length;be++){let Ne=ce[be];O.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[be]);let X=s.convert(Ne.format,Ne.colorSpace),N=s.convert(Ne.type),$=S(Ne.internalFormat,X,N,Ne.colorSpace,E.isXRRenderTarget===!0),ne=T(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,O.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)xe(O.__webglFramebuffer[be][Ne],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ne);else xe(O.__webglFramebuffer[be],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);g(b)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let be=0,Ne=ce.length;be<Ne;be++){let X=ce[be],N=n.get(X),$=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,N.__webglTexture),Ee($,X),xe(O.__webglFramebuffer,E,X,i.COLOR_ATTACHMENT0+be,$,0),g(X)&&m($)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(be=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Q.__webglTexture),Ee(be,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)xe(O.__webglFramebuffer[Ne],E,b,i.COLOR_ATTACHMENT0,be,Ne);else xe(O.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,be,0);g(b)&&m(be),t.unbindTexture()}E.depthBuffer&&Xe(E)}function le(E){let b=E.textures;for(let O=0,Q=b.length;O<Q;O++){let ce=b[O];if(g(ce)){let ee=w(E),Pe=n.get(ce).__webglTexture;t.bindTexture(ee,Pe),m(ee),t.unbindTexture()}}}let pe=[],te=[];function ye(E){if(E.samples>0){if(Ve(E)===!1){let b=E.textures,O=E.width,Q=E.height,ce=i.COLOR_BUFFER_BIT,ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(E),be=b.length>1;if(be)for(let X=0;X<b.length;X++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let Ne=E.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let X=0;X<b.length;X++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[X]);let N=n.get(b[X]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,ce,i.NEAREST),l===!0&&(pe.length=0,te.length=0,pe.push(i.COLOR_ATTACHMENT0+X),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pe.push(ee),te.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let X=0;X<b.length;X++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[X]);let N=n.get(b[X]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function T(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){let b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(E){let b=o.render.frame;d.get(E)!==b&&(d.set(E,b),E.update())}function ze(E,b){let O=E.colorSpace,Q=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==er&&O!==gi&&(ut.getTransfer(O)===xt?(Q!==Pn||ce!==mn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",O)),b}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=ae,this.rebindTextures=it,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function h3(i,e){function t(n,r=gi){let s,o=ut.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wl)return i.BYTE;if(n===Xl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===Pn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===Qa||n===e0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===e0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===t0||n===n0||n===i0||n===r0||n===s0||n===o0||n===a0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===t0||n===n0)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===i0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===r0)return s.COMPRESSED_R11_EAC;if(n===s0)return s.COMPRESSED_SIGNED_R11_EAC;if(n===o0)return s.COMPRESSED_RG11_EAC;if(n===a0)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===l0||n===c0||n===d0||n===h0||n===u0||n===f0||n===p0||n===m0||n===g0||n===b0||n===_0||n===x0||n===y0||n===v0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===l0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===c0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===d0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===h0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===u0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===f0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===p0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===m0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===g0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===b0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===x0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===y0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===v0)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===M0||n===S0||n===w0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===M0)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===S0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===w0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===E0||n===T0||n===A0||n===R0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===E0)return s.COMPRESSED_RED_RGTC1_EXT;if(n===T0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===A0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===R0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var u3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:u3,fragmentShader:f3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends Qn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new _c,m={},w=t.getContextAttributes(),S=null,M=null,I=[],A=[],D=new de,x=null,y=new an;y.viewport=new Dt;let F=new an;F.viewport=new Dt;let R=[y,F],U=new Va,B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let _e=I[re];return _e===void 0&&(_e=new Xr,I[re]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(re){let _e=I[re];return _e===void 0&&(_e=new Xr,I[re]=_e),_e.getGripSpace()},this.getHand=function(re){let _e=I[re];return _e===void 0&&(_e=new Xr,I[re]=_e),_e.getHandSpace()};function W(re){let _e=A.indexOf(re.inputSource);if(_e===-1)return;let xe=I[_e];xe!==void 0&&(xe.update(re.inputSource,re.frame,c||o),xe.dispatchEvent({type:re.type,data:re.inputSource}))}function k(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let re=0;re<I.length;re++){let _e=A[re];_e!==null&&(A[re]=null,I[re].disconnect(_e))}B=null,G=null,g.reset();for(let re in m)delete m[re];e.setRenderTarget(S),f=null,h=null,u=null,r=null,M=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Fe=null,Oe=null;w.depth&&(Oe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=w.stencil?Bi:Kn,Fe=w.stencil?is:kn);let Xe={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Mn(h.textureWidth,h.textureHeight,{format:Pn,type:mn,depthTexture:new Ii(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Mn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ct.setContext(r),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(re){for(let _e=0;_e<re.removed.length;_e++){let xe=re.removed[_e],Fe=A.indexOf(xe);Fe>=0&&(A[Fe]=null,I[Fe].disconnect(xe))}for(let _e=0;_e<re.added.length;_e++){let xe=re.added[_e],Fe=A.indexOf(xe);if(Fe===-1){for(let Xe=0;Xe<I.length;Xe++)if(Xe>=A.length){A.push(xe),Fe=Xe;break}else if(A[Xe]===null){A[Xe]=xe,Fe=Xe;break}if(Fe===-1)break}let Oe=I[Fe];Oe&&Oe.connect(xe)}}let ae=new P,ue=new P;function Se(re,_e,xe){ae.setFromMatrixPosition(_e.matrixWorld),ue.setFromMatrixPosition(xe.matrixWorld);let Fe=ae.distanceTo(ue),Oe=_e.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,it=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),le=(Oe[9]+1)/Oe[5],pe=(Oe[9]-1)/Oe[5],te=(Oe[8]-1)/Oe[0],ye=(Xe[8]+1)/Xe[0],T=it*te,Ve=it*ye,we=Fe/(-te+ye),ze=we*-te;if(_e.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ze),re.translateZ(we),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Oe[10]===-1)re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{let me=it+we,E=qe+we,b=T-ze,O=Ve+(Fe-ze),Q=le*qe/E*me,ce=pe*qe/E*me;re.projectionMatrix.makePerspective(b,O,Q,ce,me,E),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Me(re,_e){_e===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(_e.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let _e=re.near,xe=re.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),U.near=F.near=y.near=_e,U.far=F.far=y.far=xe,(B!==U.near||G!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,G=U.far),U.layers.mask=re.layers.mask|6,y.layers.mask=U.layers.mask&-5,F.layers.mask=U.layers.mask&-3;let Fe=re.parent,Oe=U.cameras;Me(U,Fe);for(let Xe=0;Xe<Oe.length;Xe++)Me(Oe[Xe],Fe);Oe.length===2?Se(U,y,F):U.projectionMatrix.copy(y.projectionMatrix),Ee(re,U,Fe)};function Ee(re,_e,xe){xe===null?re.matrix.copy(_e.matrixWorld):(re.matrix.copy(xe.matrixWorld),re.matrix.invert(),re.matrix.multiply(_e.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Hr*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(re){return m[re]};let We=null;function Ke(re,_e){if(d=_e.getViewerPose(c||o),p=_e,d!==null){let xe=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let qe=0;qe<xe.length;qe++){let le=xe[qe],pe=null;if(f!==null)pe=f.getViewport(le);else{let ye=u.getViewSubImage(h,le);pe=ye.viewport,qe===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let te=R[qe];te===void 0&&(te=new an,te.layers.enable(qe),te.viewport=new Dt,R[qe]=te),te.matrix.fromArray(le.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(le.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(pe.x,pe.y,pe.width,pe.height),qe===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(te)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let qe=u.getDepthInformation(xe[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<xe.length;qe++){let le=xe[qe].camera;if(le){let pe=m[le];pe||(pe=new Bs,m[le]=pe);let te=u.getCameraImage(le);pe.sourceTexture=te}}}}for(let xe=0;xe<I.length;xe++){let Fe=A[xe],Oe=I[xe];Fe!==null&&Oe!==void 0&&Oe.update(Fe,_e,c||o)}We&&We(re,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}let ct=new Th;ct.setAnimationLoop(Ke),this.setAnimationLoop=function(re){We=re},this.dispose=function(){}}},fr=new zn,p3=new pt;function m3(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,tc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,w,S,M){m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=e.get(m),S=w.envMap,M=w.envMapRotation;S&&(g.envMap.value=S,fr.copy(M),fr.x*=-1,fr.y*=-1,fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.envMapRotation.value.setFromMatrix4(p3.makeRotationFromEuler(fr)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function g3(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let M=S.program;n.uniformBlockBinding(w,M)}function c(w,S){let M=r[w.id];M===void 0&&(p(w),M=d(w),r[w.id]=M,w.addEventListener("dispose",g));let I=S.program;n.updateUBOMapping(w,I);let A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function d(w){let S=u();w.__bindingPointIndex=S;let M=i.createBuffer(),I=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let S=r[w.id],M=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,D=M.length;A<D;A++){let x=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,F=x.length;y<F;y++){let R=x[y];if(f(R,A,y,I)===!0){let U=R.__offset,B=Array.isArray(R.value)?R.value:[R.value],G=0;for(let W=0;W<B.length;W++){let k=B[W],q=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+G,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,M,I){let A=w.value,D=S+"_"+M;if(I[D]===void 0)return typeof A=="number"||typeof A=="boolean"?I[D]=A:I[D]=A.clone(),!0;{let x=I[D];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return I[D]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function p(w){let S=w.uniforms,M=0,I=16;for(let D=0,x=S.length;D<x;D++){let y=Array.isArray(S[D])?S[D]:[S[D]];for(let F=0,R=y.length;F<R;F++){let U=y[F],B=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=B.length;G<W;G++){let k=B[G],q=_(k),ae=M%I,ue=ae%q.boundary,Se=ae+ue;M+=ue,Se!==0&&I-Se<q.storage&&(M+=I-Se),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=q.storage}}}let A=M%I;return A>0&&(M+=I-A),w.__size=M,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}var b3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function _3(){return si===null&&(si=new _a(b3,16,16,cr,ri),si.name="DFG_LUT",si.minFilter=en,si.magFilter=en,si.wrapS=Jn,si.wrapT=Jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var U0=class{constructor(e={}){let{canvas:t=qd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([Ja,Za,ja]),m=new Set([mn,kn,ns,is,qa,Ya]),w=new Uint32Array(4),S=new Int32Array(4),M=null,I=null,A=[],D=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,F=!1;this._outputColorSpace=Jt;let R=0,U=0,B=null,G=-1,W=null,k=new Dt,q=new Dt,ae=null,ue=new lt(0),Se=0,Me=t.width,Ee=t.height,We=1,Ke=null,ct=null,re=new Dt(0,0,Me,Ee),_e=new Dt(0,0,Me,Ee),xe=!1,Fe=new jr,Oe=!1,Xe=!1,it=new pt,qe=new P,le=new Dt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ye(){return B===null?We:1}let T=n;function Ve(v,H){return t.getContext(v,H)}try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),T===null){let H="webgl2";if(T=Ve(H,v),T===null)throw Ve(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw je("WebGLRenderer: "+v.message),v}let we,ze,me,E,b,O,Q,ce,ee,Pe,be,Ne,X,N,$,ne,se,ie,fe,C,L,z,j;function Y(){we=new Tm(T),we.init(),L=new h3(T,we),ze=new _m(T,we,e,L),me=new c3(T,we),ze.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),E=new Cm(T),b=new Z2,O=new d3(T,we,me,b,ze,L,E),Q=new Em(y),ce=new Nf(T),z=new gm(T,ce),ee=new Am(T,ce,E,z),Pe=new Im(T,ee,ce,z,E),ie=new Pm(T,ze,O),$=new xm(b),be=new j2(y,Q,we,ze,z,$),Ne=new m3(y,b),X=new $2,N=new i3(we),se=new mm(y,Q,me,Pe,p,l),ne=new l3(y,Pe,ze),j=new g3(T,E,ze,me),fe=new bm(T,we,E),C=new Rm(T,we,E),E.programs=be.programs,y.capabilities=ze,y.extensions=we,y.properties=b,y.renderLists=X,y.shadowMap=ne,y.state=me,y.info=E}Y(),_!==mn&&(x=new Lm(_,t.width,t.height,r,s));let V=new xc(y,T);this.xr=V,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=we.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=we.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(v){v!==void 0&&(We=v,this.setSize(Me,Ee,!1))},this.getSize=function(v){return v.set(Me,Ee)},this.setSize=function(v,H,K=!0){if(V.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=v,Ee=H,t.width=Math.floor(v*We),t.height=Math.floor(H*We),K===!0&&(t.style.width=v+"px",t.style.height=H+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,v,H)},this.getDrawingBufferSize=function(v){return v.set(Me*We,Ee*We).floor()},this.setDrawingBufferSize=function(v,H,K){Me=v,Ee=H,We=K,t.width=Math.floor(v*K),t.height=Math.floor(H*K),this.setViewport(0,0,v,H)},this.setEffects=function(v){if(_===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let H=0;H<v.length;H++)if(v[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(k)},this.getViewport=function(v){return v.copy(re)},this.setViewport=function(v,H,K,J){v.isVector4?re.set(v.x,v.y,v.z,v.w):re.set(v,H,K,J),me.viewport(k.copy(re).multiplyScalar(We).round())},this.getScissor=function(v){return v.copy(_e)},this.setScissor=function(v,H,K,J){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,H,K,J),me.scissor(q.copy(_e).multiplyScalar(We).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(v){me.setScissorTest(xe=v)},this.setOpaqueSort=function(v){Ke=v},this.setTransparentSort=function(v){ct=v},this.getClearColor=function(v){return v.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(v=!0,H=!0,K=!0){let J=0;if(v){let Z=!1;if(B!==null){let Ae=B.texture.format;Z=g.has(Ae)}if(Z){let Ae=B.texture.type,Le=m.has(Ae),Re=se.getClearColor(),Ue=se.getClearAlpha(),ke=Re.r,et=Re.g,at=Re.b;Le?(w[0]=ke,w[1]=et,w[2]=at,w[3]=Ue,T.clearBufferuiv(T.COLOR,0,w)):(S[0]=ke,S[1]=et,S[2]=at,S[3]=Ue,T.clearBufferiv(T.COLOR,0,S))}else J|=T.COLOR_BUFFER_BIT}H&&(J|=T.DEPTH_BUFFER_BIT),K&&(J|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&T.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),se.dispose(),X.dispose(),N.dispose(),b.dispose(),Q.dispose(),Pe.dispose(),z.dispose(),j.dispose(),be.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ct),V.removeEventListener("sessionend",$e),dt.stop()};function oe(v){v.preventDefault(),Ps("WebGLRenderer: Context Lost."),F=!0}function he(){Ps("WebGLRenderer: Context Restored."),F=!1;let v=E.autoReset,H=ne.enabled,K=ne.autoUpdate,J=ne.needsUpdate,Z=ne.type;Y(),E.autoReset=v,ne.enabled=H,ne.autoUpdate=K,ne.needsUpdate=J,ne.type=Z}function Ce(v){je("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ve(v){let H=v.target;H.removeEventListener("dispose",ve),rt(H)}function rt(v){Ie(v),b.remove(v)}function Ie(v){let H=b.get(v).programs;H!==void 0&&(H.forEach(function(K){be.releaseProgram(K)}),v.isShaderMaterial&&be.releaseShaderCache(v))}this.renderBufferDirect=function(v,H,K,J,Z,Ae){H===null&&(H=pe);let Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=nu(v,H,K,J,Z);me.setMaterial(J,Le);let Ue=K.index,ke=1;if(J.wireframe===!0){if(Ue=ee.getWireframeAttribute(K),Ue===void 0)return;ke=2}let et=K.drawRange,at=K.attributes.position,He=et.start*ke,St=(et.start+et.count)*ke;Ae!==null&&(He=Math.max(He,Ae.start*ke),St=Math.min(St,(Ae.start+Ae.count)*ke)),Ue!==null?(He=Math.max(He,0),St=Math.min(St,Ue.count)):at!=null&&(He=Math.max(He,0),St=Math.min(St,at.count));let Ot=St-He;if(Ot<0||Ot===1/0)return;z.setup(Z,J,Re,K,Ue);let Nt,wt=fe;if(Ue!==null&&(Nt=ce.get(Ue),wt=C,wt.setIndex(Nt)),Z.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*ye()),wt.setMode(T.LINES)):wt.setMode(T.TRIANGLES);else if(Z.isLine){let rn=J.linewidth;rn===void 0&&(rn=1),me.setLineWidth(rn*ye()),Z.isLineSegments?wt.setMode(T.LINES):Z.isLineLoop?wt.setMode(T.LINE_LOOP):wt.setMode(T.LINE_STRIP)}else Z.isPoints?wt.setMode(T.POINTS):Z.isSprite&&wt.setMode(T.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let rn=Z._multiDrawStarts,Be=Z._multiDrawCounts,_n=Z._multiDrawCount,gt=Ue?ce.get(Ue).bytesPerElement:1,Dn=b.get(J).currentProgram.getUniforms();for(let Yn=0;Yn<_n;Yn++)Dn.setValue(T,"_gl_DrawID",Yn),wt.render(rn[Yn]/gt,Be[Yn])}else if(Z.isInstancedMesh)wt.renderInstances(He,Ot,Z.count);else if(K.isInstancedBufferGeometry){let rn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,rn);wt.renderInstances(He,Ot,Be)}else wt.render(He,Ot)};function Ze(v,H,K){v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=fn,v.needsUpdate=!0,Wi(v,H,K),v.side=pi,v.needsUpdate=!0,Wi(v,H,K),v.side=tn):Wi(v,H,K)}this.compile=function(v,H,K=null){K===null&&(K=v),I=N.get(K),I.init(H),D.push(I),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),v!==K&&v.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();let J=new Set;return v.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){let Re=Ae[Le];Ze(Re,K,Z),J.add(Re)}else Ze(Ae,K,Z),J.add(Ae)}),I=D.pop(),J},this.compileAsync=function(v,H,K=null){let J=this.compile(v,H,K);return new Promise(Z=>{function Ae(){if(J.forEach(function(Le){b.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){Z(v);return}setTimeout(Ae,10)}we.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Qe=null;function Rt(v){Qe&&Qe(v)}function Ct(){dt.stop()}function $e(){dt.start()}let dt=new Th;dt.setAnimationLoop(Rt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(v){Qe=v,V.setAnimationLoop(v),v===null?dt.stop():dt.start()},V.addEventListener("sessionstart",Ct),V.addEventListener("sessionend",$e),this.render=function(v,H){if(H!==void 0&&H.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;let K=V.enabled===!0&&V.isPresenting===!0,J=x!==null&&(B===null||K)&&x.begin(y,B);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(H),H=V.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,H,B),I=N.get(v,D.length),I.init(H),D.push(I),it.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Fe.setFromProjectionMatrix(it,On,H.reversedDepth),Xe=this.localClippingEnabled,Oe=$.init(this.clippingPlanes,Xe),M=X.get(v,A.length),M.init(),A.push(M),V.enabled===!0&&V.isPresenting===!0){let Le=y.xr.getDepthSensingMesh();Le!==null&&ht(Le,H,-1/0,y.sortObjects)}ht(v,H,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Ke,ct),te=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,te&&se.addToRenderList(M,v),this.info.render.frame++,Oe===!0&&$.beginShadows();let Z=I.state.shadowsArray;if(ne.render(Z,v,H),Oe===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&x.hasRenderPass())===!1){let Le=M.opaque,Re=M.transmissive;if(I.setupLights(),H.isArrayCamera){let Ue=H.cameras;if(Re.length>0)for(let ke=0,et=Ue.length;ke<et;ke++){let at=Ue[ke];Ut(Le,Re,v,at)}te&&se.render(v);for(let ke=0,et=Ue.length;ke<et;ke++){let at=Ue[ke];kt(M,v,at,at.viewport)}}else Re.length>0&&Ut(Le,Re,v,H),te&&se.render(v),kt(M,v,H)}B!==null&&U===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),J&&x.end(y),v.isScene===!0&&v.onAfterRender(y,v,H),z.resetDefaultState(),G=-1,W=null,D.pop(),D.length>0?(I=D[D.length-1],Oe===!0&&$.setGlobalState(y.clippingPlanes,I.state.camera)):I=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function ht(v,H,K,J){if(v.visible===!1)return;if(v.layers.test(H.layers)){if(v.isGroup)K=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(H);else if(v.isLight)I.pushLight(v),v.castShadow&&I.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Fe.intersectsSprite(v)){J&&le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(it);let Le=Pe.update(v),Re=v.material;Re.visible&&M.push(v,Le,Re,K,le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Fe.intersectsObject(v))){let Le=Pe.update(v),Re=v.material;if(J&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),le.copy(v.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),le.copy(Le.boundingSphere.center)),le.applyMatrix4(v.matrixWorld).applyMatrix4(it)),Array.isArray(Re)){let Ue=Le.groups;for(let ke=0,et=Ue.length;ke<et;ke++){let at=Ue[ke],He=Re[at.materialIndex];He&&He.visible&&M.push(v,Le,He,K,le.z,at)}}else Re.visible&&M.push(v,Le,Re,K,le.z,null)}}let Ae=v.children;for(let Le=0,Re=Ae.length;Le<Re;Le++)ht(Ae[Le],H,K,J)}function kt(v,H,K,J){let{opaque:Z,transmissive:Ae,transparent:Le}=v;I.setupLightsView(K),Oe===!0&&$.setGlobalState(y.clippingPlanes,K),J&&me.viewport(k.copy(J)),Z.length>0&&Ft(Z,H,K),Ae.length>0&&Ft(Ae,H,K),Le.length>0&&Ft(Le,H,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ut(v,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[J.id]===void 0){let He=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[J.id]=new Mn(1,1,{generateMipmaps:!0,type:He?ri:mn,minFilter:zi,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let Ae=I.state.transmissionRenderTarget[J.id],Le=J.viewport||k;Ae.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);let Re=y.getRenderTarget(),Ue=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(Ae),y.getClearColor(ue),Se=y.getClearAlpha(),Se<1&&y.setClearColor(16777215,.5),y.clear(),te&&se.render(K);let et=y.toneMapping;y.toneMapping=Bn;let at=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),I.setupLightsView(J),Oe===!0&&$.setGlobalState(y.clippingPlanes,J),Ft(v,K,J),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),we.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let St=0,Ot=H.length;St<Ot;St++){let Nt=H[St],{object:wt,geometry:rn,material:Be,group:_n}=Nt;if(Be.side===tn&&wt.layers.test(J.layers)){let gt=Be.side;Be.side=fn,Be.needsUpdate=!0,ps(wt,K,J,rn,Be,_n),Be.side=gt,Be.needsUpdate=!0,He=!0}}He===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}y.setRenderTarget(Re,Ue,ke),y.setClearColor(ue,Se),at!==void 0&&(J.viewport=at),y.toneMapping=et}function Ft(v,H,K){let J=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ae=v.length;Z<Ae;Z++){let Le=v[Z],{object:Re,geometry:Ue,group:ke}=Le,et=Le.material;et.allowOverride===!0&&J!==null&&(et=J),Re.layers.test(K.layers)&&ps(Re,H,K,Ue,et,ke)}}function ps(v,H,K,J,Z,Ae){v.onBeforeRender(y,H,K,J,Z,Ae),v.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),Z.onBeforeRender(y,H,K,J,v,Ae),Z.transparent===!0&&Z.side===tn&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,y.renderBufferDirect(K,H,J,Z,v,Ae),Z.side=pi,Z.needsUpdate=!0,y.renderBufferDirect(K,H,J,Z,v,Ae),Z.side=tn):y.renderBufferDirect(K,H,J,Z,v,Ae),v.onAfterRender(y,H,K,J,Z,Ae)}function Wi(v,H,K){H.isScene!==!0&&(H=pe);let J=b.get(v),Z=I.state.lights,Ae=I.state.shadowsArray,Le=Z.state.version,Re=be.getParameters(v,Z.state,Ae,H,K),Ue=be.getProgramCacheKey(Re),ke=J.programs;J.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let et=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;J.envMap=Q.get(v.envMap||J.environment,et),J.envMapRotation=J.environment!==null&&v.envMap===null?H.environmentRotation:v.envMapRotation,ke===void 0&&(v.addEventListener("dispose",ve),ke=new Map,J.programs=ke);let at=ke.get(Ue);if(at!==void 0){if(J.currentProgram===at&&J.lightsStateVersion===Le)return Lc(v,Re),at}else Re.uniforms=be.getUniforms(v),v.onBeforeCompile(Re,y),at=be.acquireProgram(Re,Ue),ke.set(Ue,at),J.uniforms=Re.uniforms;let He=J.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(He.clippingPlanes=$.uniform),Lc(v,Re),J.needsLights=ru(v),J.lightsStateVersion=Le,J.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=at,J.uniformsList=null,at}function Dc(v){if(v.uniformsList===null){let H=v.currentProgram.getUniforms();v.uniformsList=ss.seqWithValue(H.seq,v.uniforms)}return v.uniformsList}function Lc(v,H){let K=b.get(v);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function nu(v,H,K,J,Z){H.isScene!==!0&&(H=pe),O.resetTextureUnits();let Ae=H.fog,Le=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,Re=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:er,Ue=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ke=Q.get(J.envMap||Le,Ue),et=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,at=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,Ot=!!K.morphAttributes.color,Nt=Bn;J.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Nt=y.toneMapping);let wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,rn=wt!==void 0?wt.length:0,Be=b.get(J),_n=I.state.lights;if(Oe===!0&&(Xe===!0||v!==W)){let jt=v===W&&J.id===G;$.setState(J,v,jt)}let gt=!1;J.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_n.state.version||Be.outputColorSpace!==Re||Z.isBatchedMesh&&Be.batching===!1||!Z.isBatchedMesh&&Be.batching===!0||Z.isBatchedMesh&&Be.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Be.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Be.instancing===!1||!Z.isInstancedMesh&&Be.instancing===!0||Z.isSkinnedMesh&&Be.skinning===!1||!Z.isSkinnedMesh&&Be.skinning===!0||Z.isInstancedMesh&&Be.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Be.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Be.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Be.instancingMorph===!1&&Z.morphTexture!==null||Be.envMap!==ke||J.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$.numPlanes||Be.numIntersection!==$.numIntersection)||Be.vertexAlphas!==et||Be.vertexTangents!==at||Be.morphTargets!==He||Be.morphNormals!==St||Be.morphColors!==Ot||Be.toneMapping!==Nt||Be.morphTargetsCount!==rn)&&(gt=!0):(gt=!0,Be.__version=J.version);let Dn=Be.currentProgram;gt===!0&&(Dn=Wi(J,H,Z));let Yn=!1,Xi=!1,yr=!1,At=Dn.getUniforms(),Kt=Be.uniforms;if(me.useProgram(Dn.program)&&(Yn=!0,Xi=!0,yr=!0),J.id!==G&&(G=J.id,Xi=!0),Yn||W!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),At.setValue(T,"projectionMatrix",v.projectionMatrix),At.setValue(T,"viewMatrix",v.matrixWorldInverse);let yi=At.map.cameraPosition;yi!==void 0&&yi.setValue(T,qe.setFromMatrixPosition(v.matrixWorld)),ze.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),W!==v&&(W=v,Xi=!0,yr=!0)}if(Be.needsLights&&(_n.state.directionalShadowMap.length>0&&At.setValue(T,"directionalShadowMap",_n.state.directionalShadowMap,O),_n.state.spotShadowMap.length>0&&At.setValue(T,"spotShadowMap",_n.state.spotShadowMap,O),_n.state.pointShadowMap.length>0&&At.setValue(T,"pointShadowMap",_n.state.pointShadowMap,O)),Z.isSkinnedMesh){At.setOptional(T,Z,"bindMatrix"),At.setOptional(T,Z,"bindMatrixInverse");let jt=Z.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),At.setValue(T,"boneTexture",jt.boneTexture,O))}Z.isBatchedMesh&&(At.setOptional(T,Z,"batchingTexture"),At.setValue(T,"batchingTexture",Z._matricesTexture,O),At.setOptional(T,Z,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",Z._indirectTexture,O),At.setOptional(T,Z,"batchingColorTexture"),Z._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",Z._colorsTexture,O));let xi=K.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ie.update(Z,K,Dn),(Xi||Be.receiveShadow!==Z.receiveShadow)&&(Be.receiveShadow=Z.receiveShadow,At.setValue(T,"receiveShadow",Z.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=_3()),Xi&&(At.setValue(T,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&iu(Kt,yr),Ae&&J.fog===!0&&Ne.refreshFogUniforms(Kt,Ae),Ne.refreshMaterialUniforms(Kt,J,We,Ee,I.state.transmissionRenderTarget[v.id]),ss.upload(T,Dc(Be),Kt,O)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ss.upload(T,Dc(Be),Kt,O),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(T,"center",Z.center),At.setValue(T,"modelViewMatrix",Z.modelViewMatrix),At.setValue(T,"normalMatrix",Z.normalMatrix),At.setValue(T,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let jt=J.uniformsGroups;for(let yi=0,vr=jt.length;yi<vr;yi++){let Nc=jt[yi];j.update(Nc,Dn),j.bind(Nc,Dn)}}return Dn}function iu(v,H){v.ambientLightColor.needsUpdate=H,v.lightProbe.needsUpdate=H,v.directionalLights.needsUpdate=H,v.directionalLightShadows.needsUpdate=H,v.pointLights.needsUpdate=H,v.pointLightShadows.needsUpdate=H,v.spotLights.needsUpdate=H,v.spotLightShadows.needsUpdate=H,v.rectAreaLights.needsUpdate=H,v.hemisphereLights.needsUpdate=H}function ru(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,H,K){let J=b.get(v);J.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),b.get(v.texture).__webglTexture=H,b.get(v.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,H){let K=b.get(v);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};let su=T.createFramebuffer();this.setRenderTarget=function(v,H=0,K=0){B=v,R=H,U=K;let J=null,Z=!1,Ae=!1;if(v){let Re=b.get(v);if(Re.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(T.FRAMEBUFFER,Re.__webglFramebuffer),k.copy(v.viewport),q.copy(v.scissor),ae=v.scissorTest,me.viewport(k),me.scissor(q),me.setScissorTest(ae),G=-1;return}else if(Re.__webglFramebuffer===void 0)O.setupRenderTarget(v);else if(Re.__hasExternalTextures)O.rebindTextures(v,b.get(v.texture).__webglTexture,b.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let et=v.depthTexture;if(Re.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(v.width!==et.image.width||v.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(v)}}let Ue=v.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ae=!0);let ke=b.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?J=ke[H][K]:J=ke[H],Z=!0):v.samples>0&&O.useMultisampledRTT(v)===!1?J=b.get(v).__webglMultisampledFramebuffer:Array.isArray(ke)?J=ke[K]:J=ke,k.copy(v.viewport),q.copy(v.scissor),ae=v.scissorTest}else k.copy(re).multiplyScalar(We).floor(),q.copy(_e).multiplyScalar(We).floor(),ae=xe;if(K!==0&&(J=su),me.bindFramebuffer(T.FRAMEBUFFER,J)&&me.drawBuffers(v,J),me.viewport(k),me.scissor(q),me.setScissorTest(ae),Z){let Re=b.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,K)}else if(Ae){let Re=H;for(let Ue=0;Ue<v.textures.length;Ue++){let ke=b.get(v.textures[Ue]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,K,Re)}}else if(v!==null&&K!==0){let Re=b.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Re.__webglTexture,K)}G=-1},this.readRenderTargetPixels=function(v,H,K,J,Z,Ae,Le,Re=0){if(!(v&&v.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=b.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){me.bindFramebuffer(T.FRAMEBUFFER,Ue);try{let ke=v.textures[Re],et=ke.format,at=ke.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!ze.textureFormatReadable(et)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(at)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=v.width-J&&K>=0&&K<=v.height-Z&&T.readPixels(H,K,J,Z,L.convert(et),L.convert(at),Ae)}finally{let ke=B!==null?b.get(B).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(v,H,K,J,Z,Ae,Le,Re=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=b.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(H>=0&&H<=v.width-J&&K>=0&&K<=v.height-Z){me.bindFramebuffer(T.FRAMEBUFFER,Ue);let ke=v.textures[Re],et=ke.format,at=ke.type;if(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!ze.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,Ae.byteLength,T.STREAM_READ),T.readPixels(H,K,J,Z,L.convert(et),L.convert(at),0);let St=B!==null?b.get(B).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,St);let Ot=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await jd(T,Ot,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ae),T.deleteBuffer(He),T.deleteSync(Ot),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,H=null,K=0){let J=Math.pow(2,-K),Z=Math.floor(v.image.width*J),Ae=Math.floor(v.image.height*J),Le=H!==null?H.x:0,Re=H!==null?H.y:0;O.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,K,0,0,Le,Re,Z,Ae),me.unbindTexture()};let ou=T.createFramebuffer(),au=T.createFramebuffer();this.copyTextureToTexture=function(v,H,K=null,J=null,Z=0,Ae=0){let Le,Re,Ue,ke,et,at,He,St,Ot,Nt=v.isCompressedTexture?v.mipmaps[Ae]:v.image;if(K!==null)Le=K.max.x-K.min.x,Re=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,et=K.min.y,at=K.isBox3?K.min.z:0;else{let Kt=Math.pow(2,-Z);Le=Math.floor(Nt.width*Kt),Re=Math.floor(Nt.height*Kt),v.isDataArrayTexture?Ue=Nt.depth:v.isData3DTexture?Ue=Math.floor(Nt.depth*Kt):Ue=1,ke=0,et=0,at=0}J!==null?(He=J.x,St=J.y,Ot=J.z):(He=0,St=0,Ot=0);let wt=L.convert(H.format),rn=L.convert(H.type),Be;H.isData3DTexture?(O.setTexture3D(H,0),Be=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(O.setTexture2DArray(H,0),Be=T.TEXTURE_2D_ARRAY):(O.setTexture2D(H,0),Be=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);let _n=T.getParameter(T.UNPACK_ROW_LENGTH),gt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Dn=T.getParameter(T.UNPACK_SKIP_PIXELS),Yn=T.getParameter(T.UNPACK_SKIP_ROWS),Xi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Nt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Nt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,at);let yr=v.isDataArrayTexture||v.isData3DTexture,At=H.isDataArrayTexture||H.isData3DTexture;if(v.isDepthTexture){let Kt=b.get(v),xi=b.get(H),jt=b.get(Kt.__renderTarget),yi=b.get(xi.__renderTarget);me.bindFramebuffer(T.READ_FRAMEBUFFER,jt.__webglFramebuffer),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let vr=0;vr<Ue;vr++)yr&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,b.get(v).__webglTexture,Z,at+vr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,b.get(H).__webglTexture,Ae,Ot+vr)),T.blitFramebuffer(ke,et,Le,Re,He,St,Le,Re,T.DEPTH_BUFFER_BIT,T.NEAREST);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Z!==0||v.isRenderTargetTexture||b.has(v)){let Kt=b.get(v),xi=b.get(H);me.bindFramebuffer(T.READ_FRAMEBUFFER,ou),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,au);for(let jt=0;jt<Ue;jt++)yr?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Kt.__webglTexture,Z,at+jt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Kt.__webglTexture,Z),At?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xi.__webglTexture,Ae,Ot+jt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xi.__webglTexture,Ae),Z!==0?T.blitFramebuffer(ke,et,Le,Re,He,St,Le,Re,T.COLOR_BUFFER_BIT,T.NEAREST):At?T.copyTexSubImage3D(Be,Ae,He,St,Ot+jt,ke,et,Le,Re):T.copyTexSubImage2D(Be,Ae,He,St,ke,et,Le,Re);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else At?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(Be,Ae,He,St,Ot,Le,Re,Ue,wt,rn,Nt.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Be,Ae,He,St,Ot,Le,Re,Ue,wt,Nt.data):T.texSubImage3D(Be,Ae,He,St,Ot,Le,Re,Ue,wt,rn,Nt):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ae,He,St,Le,Re,wt,rn,Nt.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ae,He,St,Nt.width,Nt.height,wt,Nt.data):T.texSubImage2D(T.TEXTURE_2D,Ae,He,St,Le,Re,wt,rn,Nt);T.pixelStorei(T.UNPACK_ROW_LENGTH,_n),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Yn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xi),Ae===0&&H.generateMipmaps&&T.generateMipmap(Be),me.unbindTexture()},this.initRenderTarget=function(v){b.get(v).__webglFramebuffer===void 0&&O.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?O.setTextureCube(v,0):v.isData3DTexture?O.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?O.setTexture2DArray(v,0):O.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){R=0,U=0,B=null,me.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Ih={type:"change"},vc={type:"start"},Lh={type:"end"},z0=new Ri,Dh=new pn,x3=Math.cos(70*dr.DEG2RAD),qt=new P,gn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yc=1e-6,B0=class extends no{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vn,this._lastTargetPosition=new P,this._quat=new vn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new es,this._sphericalDelta=new es,this._scale=1,this._panOffset=new P,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new P,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v3.bind(this),this._onPointerDown=y3.bind(this),this._onPointerUp=M3.bind(this),this._onContextMenu=C3.bind(this),this._onMouseWheel=E3.bind(this),this._onKeyDown=T3.bind(this),this._onTouchStart=A3.bind(this),this._onTouchMove=R3.bind(this),this._onMouseDown=S3.bind(this),this._onMouseMove=w3.bind(this),this._interceptControlDown=P3.bind(this),this._interceptControlUp=I3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ih),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=qt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(z0.origin.copy(this.object.position),z0.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(z0.direction))<x3?this.object.lookAt(this.target):(Dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),z0.intersectPlane(Dh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yc||this._lastTargetPosition.distanceToSquared(this.target)>yc?(this.dispatchEvent(Ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;qt.copy(r).sub(this.target);let s=qt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function y3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function v3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function M3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lh),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function S3(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(vc)}function w3(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E3(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(vc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lh))}function T3(i){this.enabled!==!1&&this._handleKeyDown(i)}function A3(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(vc)}function R3(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function C3(i){this.enabled!==!1&&i.preventDefault()}function P3(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I3(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mo(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Mt,c=0;for(let d=0;d<i.length;++d){let u=i[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,u=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(let d in s){let u=Nh(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in o){let u=o[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){let f=[];for(let _=0;_<o[d].length;++_)f.push(o[d][_][h]);let p=Nh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(p)}}return l}function Nh(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new Qt(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let u=l/t;for(let h=0,f=d.count;h<f;h++)for(let p=0;p<t;p++){let _=d.getComponent(h,p);a.setComponent(h+u,p,_)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var Uh={'["rear","","wall",1,1,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,6,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,6,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,6,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,6,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,6,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,6,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,6,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,6,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,6,0,2.5]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,1,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,6,0,2.1013333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,6,0,2.1013333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,6,0,2.1013333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,6,0,2.1013333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,6,0,2.1013333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Sufit","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",1,1,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,5,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,5,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,5,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Sufit","","ceiling",0,1,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,8,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,4.1666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.5,2,0,0.8333333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}]};var ge=2.5/6,nt=.24,Ge=.018,Je=nt/2,bn=new P(1,0,0),Hn=new P(0,1,0),Gn=new P(0,0,1),Tt=1e-7;function Mc(i={},e={}){let t=i.wood||new Gt({color:"#ba7c43",roughness:.85}),n=i.end||t,r=new ft;r.name="Combstruct 30 \u2014 w\u0119z\u0142y w jednej osi";let s=X=>{let N=new ft;return N.name=X,r.add(N),N},o={floor:s("P\u0142yta pod\u0142ogowa i ci\u0105g\u0142y taras"),walls:["rear","left","front","right"].map(X=>s(X)),partitions:s("\u015Aciany wewn\u0119trzne"),ceiling:s("Sufit"),roof:s("Dach 35\xB0"),gables:s("Poziome rz\u0119dy szczyt\xF3w"),pergola:s("Pergola")},a=13*ge,l=15*ge,c=7*ge,d=-a/2,u=a/2,h=-l/2,f=l/2,p=h-c,_=8,g=_*ge,m=g-nt,w=g,S=35*Math.PI/180,M=Math.sin(S),I=Math.cos(S),A=Math.tan(S),D=w,x=D+A*a/2,y=x+nt/I,F={width:a,depth:l,halfWidth:a/2,halfDepth:l/2,terraceDepth:c,terraceRearZ:p,wallDepth:nt,floorBottom:0,floorTop:nt,wallTop:g,ceilingBottom:m,ceilingTop:w,clearHeight:m-nt,roofAngle:35,roofEaveY:D,roofUnderRidgeY:x,roofRidgeY:y,roofOverhang:ge,module:ge,boardDepth:nt,boardThickness:Ge,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:ge,constructionOnly:!0},R=[],U=[],B=[],G={rear:[],left:[],front:[],right:[],partitions:[]},W=0;function k(X,N=2){let $=[];for(let ne=0;ne<2;ne++){let se=0;if(ne===1){let ie=Math.min(N,X);$.push({pixels:ie,start:0,layer:ne,trim:"left"}),se=ie}for(;se<X;){let ie=Math.min(6,X-se);$.push({pixels:ie,start:se*ge,layer:ne,trim:ne===1&&se+ie===X?"right":null}),se+=ie}}return $}function q(X,N,$,ne){let se=[];for(let ie=0;ie<X.length;ie++){let fe=X[ie],C=X[(ie+1)%X.length],L=ne*(fe[N]-$),z=ne*(C[N]-$);L>=-Tt&&se.push(fe.clone()),L>=-Tt!=z>=-Tt&&se.push(fe.clone().lerp(C,L/(L-z)))}return se}function ae(X){let N=X.pixels*ge,$=[new de(0,0),new de(N,0),new de(N,Je),new de(N-Ge,Je),new de(N-Ge,nt)];for(let z=X.pixels-1;z>=1;z--){let j=z*ge;$.push(new de(j+Ge,nt),new de(j+Ge,Je),new de(j-Ge,Je),new de(j-Ge,nt))}$.push(new de(Ge,nt),new de(Ge,Je),new de(0,Je));let ne=$,se=Math.max(X.minCut||0,X.trim==="left"?nt:0),ie=Math.min(X.limit??N,X.trim==="right"?N-nt:N);if(ie<=se+Tt||(se>Tt&&(ne=q(ne,"x",se,1)),ie<N-Tt&&(ne=q(ne,"x",ie,-1)),ne.length<3))return null;let fe=new ni(ne);fe.closePath();let C=new mi(fe,{depth:Ge,bevelEnabled:!1,curveSegments:1});C.translate(0,-Je,0);let L=C.getAttribute("uv");for(let z=0;z<L.count;z++)L.setXY(z,L.getX(z)/2.5,L.getY(z)/nt);return C}function ue(X,N,$,ne=[],se=null){let ie=Math.max(X.minCut||0,X.trim==="left"?nt:0),fe=Math.min(X.limit??X.pixels*ge,X.trim==="right"?X.pixels*ge-nt:X.pixels*ge);se&&(ie=Math.max(ie,se[0]-X.start),fe=Math.min(fe,se[1]-X.start));let C=fe>ie+Tt?[[ie,fe]]:[];for(let L of ne){let z=N===0?L.v0:L.u0,j=N===0?L.v1:L.u1;if($+Ge<=z+Tt||$>=j-Tt)continue;let Y=(N===0?L.u0:L.v0)-X.start,V=(N===0?L.u1:L.v1)-X.start;C=C.flatMap(([oe,he])=>V<=oe||Y>=he?[[oe,he]]:[[oe,Math.min(he,Y)],[Math.max(oe,V),he]].filter(([Ce,ve])=>ve>Ce+Tt))}return C.map(([L,z])=>({...X,minCut:L,limit:z}))}function Se(X,N,$,ne){let se=X.pixels*ge,ie=Math.max(X.minCut||0,X.trim==="left"?nt:0),fe=Math.min(X.limit??se,X.trim==="right"?se-nt:se);if(fe<=ie+Tt)return null;let C=[[0,Ge],[se-Ge,se]];for(let Ie=1;Ie<X.pixels;Ie++)C.push([Ie*ge-Ge,Ie*ge+Ge]);let L=(X.connectorCuts||[]).map(Ie=>({x0:Ie.end==="start"?Ie.offset||0:se-(Ie.offset||0)-Je,x1:Ie.end==="start"?(Ie.offset||0)+Je:se-(Ie.offset||0),y0:Ie.edge==="slotted"?Je-Ge:-Je,y1:Ie.edge==="slotted"?Je:-Je+Ge})),z=[ie,fe];for(let Ie of C)for(let Ze of Ie)Ze>ie+Tt&&Ze<fe-Tt&&z.push(Ze);for(let Ie of L)for(let Ze of[Ie.x0,Ie.x1])Ze>ie+Tt&&Ze<fe-Tt&&z.push(Ze);z.sort((Ie,Ze)=>Ie-Ze);let j=new Map,Y=!1,V=Ie=>`${Math.round(Ie.x*1e8)},${Math.round(Ie.y*1e8)},${Math.round(Ie.z*1e8)}`;function oe(Ie,Ze){let Qe=[],Rt=[];for(let $e of Ie){let dt=[];for(let ht=0;ht<$e.length;ht++){let kt=$e[ht],Ut=$e[(ht+1)%$e.length],Ft=Ze.c-Ze.n.dot(kt.clone().add($)),ps=Ze.c-Ze.n.dot(Ut.clone().add($));if(Ft>=-Tt?dt.push(kt):Y=!0,Ft>=-Tt!=ps>=-Tt){let Wi=kt.clone().lerp(Ut,Ft/(Ft-ps));dt.push(Wi),Rt.push(Wi)}}dt.length>=3&&Qe.push(dt)}let Ct=[...new Map(Rt.map($e=>[V($e),$e])).values()];if(Ct.length>=3){let $e=Ct.reduce((Ut,Ft)=>Ut.add(Ft),new P).divideScalar(Ct.length),dt=Ze.n.clone().normalize(),ht=(Math.abs(dt.y)>.9?bn:Hn).clone().cross(dt).normalize(),kt=dt.clone().cross(ht);Ct.sort((Ut,Ft)=>Math.atan2(Ut.clone().sub($e).dot(kt),Ut.clone().sub($e).dot(ht))-Math.atan2(Ft.clone().sub($e).dot(kt),Ft.clone().sub($e).dot(ht))),Qe.push(Ct)}return Qe}function he(Ie,Ze,Qe,Rt){let Ct=[[Ie,Qe,0],[Ze,Qe,0],[Ze,Rt,0],[Ie,Rt,0],[Ie,Qe,Ge],[Ze,Qe,Ge],[Ze,Rt,Ge],[Ie,Rt,Ge]].map(dt=>new P(...dt).applyMatrix4(N)),$e=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(dt=>dt.map(ht=>Ct[ht]));N.determinant()<0&&$e.forEach(dt=>dt.reverse());for(let dt of ne)if($e=oe($e,dt),!$e.length)return;for(let dt of $e){let ht=dt.filter((Ut,Ft)=>Ft===0||Ut.distanceToSquared(dt[Ft-1])>1e-18);if(ht.length<3)continue;let kt=ht.map(V).sort().join("|");j.has(kt)?j.delete(kt):j.set(kt,ht)}}for(let Ie=0;Ie<z.length-1;Ie++){let Ze=z[Ie],Qe=z[Ie+1],Rt=(Ze+Qe)/2;if(Qe-Ze<Tt)continue;let Ct=[...new Set([-Je,0,Je,...L.flatMap($e=>[$e.y0,$e.y1])])].sort(($e,dt)=>$e-dt);for(let $e=0;$e<Ct.length-1;$e++){let dt=Ct[$e],ht=Ct[$e+1],kt=(dt+ht)/2;kt>0&&C.some(([Ut,Ft])=>Rt>Ut&&Rt<Ft)||L.some(Ut=>Rt>Ut.x0-Tt&&Rt<Ut.x1+Tt&&kt>Ut.y0-Tt&&kt<Ut.y1+Tt)||he(Ze,Qe,dt,ht)}}let Ce=[],ve=[];for(let Ie of j.values())for(let Ze=1;Ze<Ie.length-1;Ze++){let Qe=Ie[0],Rt=Ie[Ze],Ct=Ie[Ze+1];if(!(Rt.clone().sub(Qe).cross(Ct.clone().sub(Qe)).lengthSq()<1e-20))for(let $e of[Qe,Rt,Ct])Ce.push($e.x,$e.y,$e.z),ve.push($e.dot(new P().setFromMatrixColumn(N,0))/2.5,$e.dot(new P().setFromMatrixColumn(N,1))/nt)}if(!Ce.length)return null;let rt=new Mt;return rt.setAttribute("position",new mt(Ce,3)),rt.setAttribute("uv",new mt(ve,2)),rt.computeVertexNormals(),rt.userData.angledCut=Y,rt}function Me(X,N,$,ne,se,ie,fe={},C=0,L=[]){let z=JSON.stringify([X.name,fe.wallId||"",fe.kind||"standard",fe.axis,fe.index,N.layer,C,...[N.start,N.pixels,N.minCut||0,N.limit??N.pixels*ge].map(Ze=>Math.round(Ze*1e7)/1e7)]),j=e.connectors===!1?[]:Uh[z]||[];N={...N,connectorCuts:j};let Y=N.layer^C,V=ie.clone().addScaledVector($,N.start).addScaledVector(se,Y===0?-Ge:0),oe=new pt().makeBasis($,ne,se),he=L.length||(N.minCut||0)>Tt||N.limit!==void 0||j.length,Ce=he?Se(N,oe,V,L):ae(N);if(!Ce)return null;he||Ce.applyMatrix4(oe);let ve=!!Ce.userData.angledCut||(N.minCut||0)>(N.trim==="left"?nt:0)+Tt||(N.limit??N.pixels*ge)<N.pixels*ge-(N.trim==="right"?nt:0)-Tt,rt=new bt(Ce,N.trim||ve?n:t);rt.position.copy(V),rt.castShadow=!0,rt.receiveShadow=!0;let Ie={id:`board-${++W}`,mesh:rt,surface:X.name,kind:fe.kind||"standard",axis:fe.axis,index:fe.index,layer:Y,stockLayer:N.layer,start:N.start,stockLength:N.pixels*ge,trim:N.trim||null,custom:ve,connectorKey:z,connectorCuts:j,stock:{...N},along:$.toArray(),normal:ne.toArray(),thick:se.toArray(),frameOrigin:ie.toArray(),clippingPlanes:L.map(Ze=>({n:Ze.n.toArray(),c:Ze.c})),...fe};return rt.name=Ie.id,rt.userData={...Ie,mesh:void 0},X.add(rt),R.push(Ie),rt}function Ee(X,N,$,ne,se,ie,fe,{phaseU:C=0,phaseV:L=0,holes:z=[],keepTop:j=!1,clearances:Y=[0,0],startClearances:V=[0,0],verticalPlanes:oe=[],verticalModules:he=$,kind:Ce="standard"}={}){for(let ve=0;ve<2;ve++){let rt=ve===0?N:he,Ie=ve===0?$:N,Ze=ve===0?se:ie,Qe=ve===0?ie:se,Rt=fe.clone().multiplyScalar(ve===0?1:-1),Ct=ve===0?C:L;for(let $e=1;$e<Ie;$e++)for(let dt of k(rt)){let ht={...dt};j&&ve===1&&ht.trim==="right"&&(ht.trim=null);let kt=Y[ve]||0;kt&&Math.abs(ht.start+ht.pixels*ge-rt*ge)<Tt&&(ht.limit=ht.pixels*ge-(ht.trim==="right"?nt:0)-kt),V[ve]&&ht.start===0&&(ht.minCut=(ht.trim==="left"?nt:0)+V[ve]);let Ut=$e*ge+((ht.layer^Ct)===0?-Ge:0);for(let Ft of ue(ht,ve,Ut,z))Me(X,Ft,Ze,Rt,Qe,ne.clone().addScaledVector(Qe,$e*ge),{kind:Ce,axis:ve,index:$e},Ct,ve===1?oe:[])}}}function We(X,N,$=[]){let ne=[],se=1^N,ie=se^1,fe=[[],[]];for(let C of[se,ie]){let L=C^N,z=[0,X,...$.filter(Y=>Y.layer===C).map(Y=>Y.at)];L===1&&z.push(Math.min(2,X));let j=[...new Set(z)].sort((Y,V)=>Y-V);for(let Y=0;Y<j.length-1;Y++){let V=j[Y],oe=j[Y+1];for(let he=V;he<oe;){let Ce=Math.min(6,oe-he),ve=[...fe[C^1],...$.filter(Qe=>Qe.layer!==C).map(Qe=>Qe.at)];if(he+Ce<oe&&ve.includes(he+Ce)){let Qe=[Ce-2,Ce-1,Ce-3,Ce-4,Ce-5].filter(Rt=>Rt>0&&!ve.includes(he+Rt));if(!Qe.length)throw Error("No staggered native stock schedule");Ce=Qe[0]}let rt=he+Ce,Ie=L===1&&he===0||$.some(Qe=>Qe.layer===C&&Qe.at===he&&Qe.side==="left"),Ze=L===1&&rt===X||$.some(Qe=>Qe.layer===C&&Qe.at===rt&&Qe.side==="right");if(Ie&&Ze)throw Error("Two terminations in one stock piece");ne.push({pixels:Ce,start:he*ge,layer:L,trim:Ie?"left":Ze?"right":null}),rt<X&&fe[C].push(rt),he=rt}}}return ne}let Ke=d+6*ge-Je,ct=Ke,re=h+8*ge-Je,_e=new P(d,Je,p);function xe(X,N,$,ne,se){let ie=se==="floor",fe=ie?7:0;for(let C=0;C<2;C++){let L=C===0?N:$,z=C===0?$:N;for(let j=1;j<z;j++){let Y=[];C===0&&j>fe&&Y.push({at:6,side:"right",layer:1}),C===1&&(ie&&Y.push({at:7,side:"left",layer:1}),j<6&&Y.push({at:fe+8,side:"right",layer:1}));let V=We(L,0,Y);for(let oe of V)Me(X,oe,C===0?bn:Gn,C===0?Hn:Hn.clone().negate(),C===0?Gn:bn,ne.clone().addScaledVector(C===0?Gn:bn,j*ge),{kind:se,axis:C,index:j},0)}}}xe(o.floor,13,22,_e,"floor");let Fe=["rear","left","front","right"],Oe=[new P(d,0,h+Je),new P(d+Je,0,h),new P(d,0,f-Je),new P(u-Je,0,h)],Xe=[Gn,bn,Gn.clone().negate(),bn.clone().negate()];function it(X,N,$,ne,se,ie,fe){return{id:fe,kind:N,u0:$*ge+Ge,u1:ne*ge-Ge,v0:se,v1:ie}}G.front=[it("front","window",1,3,3*ge+Ge,6*ge-Ge,"front-window-left"),it("front","door",5,8,nt,6*ge-Ge,"entrance"),it("front","window",10,12,3*ge+Ge,6*ge-Ge,"front-window-right")],G.rear=[it("rear","window",1,5,2*ge+Ge,6*ge-Ge,"bedroom-window"),it("rear","door",8,12,nt,6*ge-Ge,"terrace-door")],G.right=[it("right","window",3,7,2*ge+Ge,6*ge-Ge,"living-window")];function qe(X,N,$,ne,se){let ie=($===0?ne.x:ne.z)+X.u0,fe=($===0?ne.x:ne.z)+X.u1;return Object.assign(X,{wallId:N,axis:$,origin:{x:ne.x,y:ne.y,z:ne.z},world:$===0?{x0:ie,x1:fe,z0:se-Je,z1:se+Je,y0:X.v0,y1:X.v1}:{x0:se-Je,x1:se+Je,z0:ie,z1:fe,y0:X.v0,y1:X.v1}}),X}let le=[{n:new P(-A,1,0),c:D+A*a/2},{n:new P(A,1,0),c:D+A*a/2}],pe=Math.ceil(x/ge)+1;for(let X=0;X<4;X++){let N=X%2,$=N===0?bn:Gn,ne=Oe[X],se=N===0?ne.z:ne.x,ie=N===0?13:15,fe=Fe[X],C=G[fe];C.forEach(L=>qe(L,fe,N,ne,se)),U.push({id:fe,axis:N,start:N===0?ne.x:ne.z,end:(N===0?ne.x:ne.z)+ie*ge-(N===0?Ge:2*Ge),fixed:se,depth:nt,holes:C,exterior:!0,origin:{x:ne.x,y:0,z:ne.z}});for(let L=0;L<2;L++){let z=L===0?ie:pe,j=L===0&&N===0?0:1;for(let Y=1;Y<(L===0?_+1:ie);Y++){let V=L===0?N===0?[{at:6,side:"right",layer:1}]:X===1?[{at:8,side:"right",layer:0}]:[]:[{at:_,side:"right",layer:0}];for(let oe of We(z,j,V)){let he={...oe};L===1&&he.trim==="right"&&he.start+he.pixels*ge===z*ge&&(he.trim=null);let Ce=Y*ge+((he.layer^j)===0?-Ge:0);for(let ve of ue(he,L,Ce,C))Me(o.walls[X],ve,L===0?$:Hn,L===0?Xe[X]:Xe[X].clone().negate(),L===0?Hn:$,ne.clone().addScaledVector(L===0?Hn:$,Y*ge),{kind:"wall",axis:L,index:Y},j,L===1||Y===_?le:[])}}}if(N===0)for(let L=_+1;L<pe;L++)for(let z of k(13))for(let j of ue(z,0,L*ge+(z.layer===0?-Ge:0),C))Me(o.gables,j,bn,Xe[X],Hn,ne.clone().addScaledVector(Hn,L*ge),{kind:"gable",axis:0,index:L,wallId:fe},0,le)}xe(o.ceiling,13,15,new P(d,m+Je,h),"ceiling");let te={left:d+nt,right:u-nt,rear:h+nt,front:f-nt};function ye(X,N,$,ne,se=[]){let ie=new ft;ie.name=X,o.partitions.add(ie);let fe=N===0?new P(d,0,ne):new P(ne,0,h),C=N===0?bn:Gn,L=N===0?Gn:bn,z=se.map(([j,Y])=>({id:`${X}-door-${j}`,kind:"door",u0:j*ge+Ge,u1:Y*ge-Ge,v0:nt,v1:6*ge-Ge}));z.forEach(j=>qe(j,X,N,fe,ne)),G.partitions.push(...z),ie.userData={id:X,axis:N,start:N===0?d:h,end:(N===0?d:h)+$*ge,fixed:ne,depth:nt,holes:z,origin:{x:fe.x,y:0,z:fe.z}},U.push({...ie.userData,exterior:!1});for(let j=0;j<2;j++){let Y=j===0&&N===0?0:1,V=j===0?$:_,oe=j===0?N===1?[{at:8,side:"right",layer:0}]:[]:[];for(let he=1;he<(j===0?_:$);he++)for(let Ce of We(V,Y,oe)){let ve={...Ce};for(let rt of ue(ve,j,he*ge+((ve.layer^Y)===0?-Ge:0),z))Me(ie,rt,j===0?C:Hn,j===0?L:L.clone().negate(),j===0?Hn:C,fe.clone().addScaledVector(j===0?Hn:C,he*ge),{kind:"partition",wallId:X,axis:j,index:he},Y)}}}ye("bedroom-right",1,15,Ke,[[5,7],[10,12]]),ye("bedroom-front",0,6,re);let T={id:"bedroom",name:"Sypialnia",x0:te.left,x1:Ke-Je,z0:te.rear,z1:re-Je},Ve={id:"bathroom",name:"\u0141azienka",x0:te.left,x1:ct-Je,z0:re+Je,z1:te.front},we=[{x:Ke+Je,z:te.rear},{x:te.right,z:te.rear},{x:te.right,z:te.front},{x:ct+Je,z:te.front},{x:ct+Je,z:re+Je},{x:Ke+Je,z:re+Je}],ze=X=>Math.abs(X.reduce((N,$,ne)=>N+$.x*X[(ne+1)%X.length].z-X[(ne+1)%X.length].x*$.z,0))/2,me=[T,Ve].map(X=>({...X,area:(X.x1-X.x0)*(X.z1-X.z0)}));me.push({id:"living",name:"Salon z kuchni\u0105",x0:ct+Je,x1:te.right,z0:te.rear,z1:te.front,polygon:we,area:ze(we)});let E=h-ge,b=17,O=-ge/2,Q=a/2+ge,ce=Math.ceil((Q/I-O)/ge)+1,ee=x+Je/I,Pe=[],be=Array.from({length:14},(X,N)=>h+(N+1)*ge);for(let X of[-1,1]){let N=new P(X*I,-M,0),$=new P(X*M,I,0),ne=new P(0,ee,E).addScaledVector(N,O),se=new ft;se.name=X===-1?"roof-left":"roof-right",o.roof.add(se);let ie=X===-1?[{n:bn.clone(),c:0},{n:bn.clone().negate(),c:Q}]:[{n:bn.clone().negate(),c:0},{n:bn.clone(),c:Q}];for(let fe=1;fe<b;fe++){let C=E+fe*ge;X===-1&&Pe.push(C);for(let L of k(ce)){let z={...L,trim:null};Me(se,z,N,$,Gn,ne.clone().addScaledVector(Gn,fe*ge),{kind:"roof-slope",axis:0,index:fe,roofSide:X,detail:"Mitre and eave ends are angled cuts"},X===-1?0:1,ie)}}for(let fe=1;fe<ce;fe++)for(let C of k(b))Me(se,C,Gn,$.clone().negate(),N,ne.clone().addScaledVector(N,fe*ge),{kind:"roof-cross",axis:1,index:fe,roofSide:X},0,ie)}F.usableConceptArea=me.reduce((X,N)=>X+N.area,0),F.structuralFootprintArea=a*l,F.terraceArea=a*c,B.push({id:"edge-floor",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",description:"D\u0142ugi pion zajmuje miejsce po zako\u0144czeniu pod\u0142ogi. Kr\xF3tki pion opiera si\u0119 na pe\u0142nej desce.",position:[d+3*ge,nt/2,f-Je],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:o.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",description:"Deska \u0142\u0105czeniowa: wybranie 18 \xD7 102 mm + istniej\u0105cy p\xF3\u0142wpust 18 mm ods\u0142ania pe\u0142ne 120 mm na poprzeczne \u017Cebro pod\u0142ogi.",position:[d+7*ge,nt/2,h+Je],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:o.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:o.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",description:"Wybranie w pe\u0142nej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na drugie \u017Cebro pod\u0142ogi. Sam koniec deski pozostaje pe\u0142ny.",position:[Ke,nt/2,h+3*ge],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:o.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:o.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",description:"Wybranie w kraw\u0119dzi z z\u0119bami, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na pion \u015Bciany zewn\u0119trznej. Ko\u0144c\xF3wka i wsp\xF3lna linia \u017Ceber zostaj\u0105 zachowane.",position:[Ke,3*ge,h+Je],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",description:"Przegroda poprzeczna zamyka si\u0119 w warstwach ci\u0105g\u0142ej \u015Bciany. Wybranie ods\u0142ania wpust na pion w tej samej linii.",position:[Ke,3*ge,re],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",description:"Wybranie naro\u017Cnika deski \u0142\u0105czeniowej ods\u0142ania wpust. Przywr\xF3cony poziomy rz\u0105d \u015Bciany mie\u015Bci si\u0119 w nim bez przesuwania \u017Ceber.",position:[d+Je,m+Je,h+9*ge],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:o.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:_}]},{id:"connector-120",title:"Deska \u0142\u0105czeniowa \u2014 wariant 18 \xD7 120 mm",description:"Drugi wariant deski \u0142\u0105czeniowej w tym domu: wybranie naro\u017Cnika 18 \xD7 120 mm. Ods\u0142ania miejsce na poziome \u017Cebro \u015Bciany przy stropie.",position:[d+3*ge,m+Je,f-Je],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:o.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:_}]},{id:"ceiling-partition",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",description:"Pe\u0142na deska stropu przechodzi przez w\u0119ze\u0142. Wybranie w desce pionowej ods\u0142ania wpust na poprzeczne \u017Cebro stropu.",position:[Ke,m+Je,h+3*ge],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:o.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:o.ceiling.name,axis:1,index:6}]});let Ne={module:ge,stockMaxLength:2.5,terminalDifference:nt,pairWidth:2*Ge,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:nt,exteriorVerticalSlots:"outward",ceilingModule:_,ceilingTop:w,roofPitchDegrees:35,roofAxes:Pe,wallAxes:be,roofAxesAligned:be.every(X=>Pe.some(N=>Math.abs(N-X)<Tt)),connectorBoards:R.filter(X=>X.connectorCuts.length).length,connectorVariants:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:"Interior wall top horizontal rows at ceiling height are still omitted: adding them would duplicate parallel ceiling material. This separate assembly layout has not been resolved by connector cuts.",loadValidated:!1};return r.updateMatrixWorld(!0),{root:r,groups:o,openings:G,rooms:me,dimensions:F,boards:R,joints:B,wallPanels:U,validation:Ne}}var bi=(...i)=>new P(...i);function Fh(i,e,t){let n=new ft;n.name="Wn\u0119trze \u2014 ods\u0142aniana \u015Bciana";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:l,floorTop:c,clearHeight:d}=i.dimensions,u=10*r,h=d,f=-u/2,p=u/2,_=bi(-a+s/2,c,-l+7*r),g=new pt().makeRotationY(-Math.PI/2).multiply(new pt().makeTranslation(-_.x,-_.y,-_.z)),m=new ln(bi(f,0,-s/2-.001),bi(p,h,s/2+.001)),w=[],S=[],M=[],I=[],A,D=0,x=0,y=(L,z=.85,j={})=>new Gt({color:L,roughness:z,...j}),F=y("#e0e0d9"),R=y("#f4f3ec",.24),U=y("#303b35",.3,{metalness:.6}),B=y("#ae885a"),G=y("#c49b62"),W=new un({color:"#685137",transparent:!0,opacity:.42}),k=y("#ecece5"),q=y("#bcbcb0"),ae=(L,z,j,Y,V,oe,he,Ce)=>{let ve=new bt(new ti(z,j,Y),Ce);return ve.position.set(V,oe,he),L.add(ve),ve},ue=(L,z,j)=>(L.userData.info=z,L.userData.kind=j,w.push(L),L),Se=L=>{let z=document.createElement("canvas");z.width=512,z.height=512;let j=z.getContext("2d"),Y=35,V=()=>(Y=Math.imul(Y,1664525)+1013904223>>>0,Y/4294967296);j.fillStyle=L==="wood"?"#b89670":"#d0c8ae",j.fillRect(0,0,512,512);for(let he=0;he<(L==="wood"?1200:9500);he++){let Ce=V()*512,ve=V()*512;j.lineWidth=.4+V(),j.strokeStyle=L==="wood"?he%2?"#ac875c55":"#d6b68d66":he%3?"#f0e9d444":"#9f96744a",j.beginPath(),j.moveTo(Ce,ve),j.lineTo(Ce+(L==="wood"?1:(V()-.5)*17),ve+(L==="wood"?50+V()*100:(V()-.5)*18)),j.stroke()}let oe=new Pi(z);return oe.colorSpace=Jt,oe},Me=y("#e8dac5",.84,{map:Se("wood")}),Ee=y("#eee7d3",1,{map:Se("fiber")});function We(L){let z=L.index?L.toNonIndexed():L.clone(),j=z.attributes.position,Y=[];for(let oe=0;oe<j.count;oe+=3){let he=[0,1,2].map(Ce=>bi().fromBufferAttribute(j,oe+Ce));for(let[Ce,ve,rt]of[[0,f,1],[0,p,-1],[1,0,1],[1,h,-1]]){let Ie=[];for(let Ze=0;Ze<he.length;Ze++){let Qe=he[Ze],Rt=he[(Ze+1)%he.length],Ct=(Qe.getComponent(Ce)-ve)*rt,$e=(Rt.getComponent(Ce)-ve)*rt;Ct>=0&&Ie.push(Qe),Ct>=0!=$e>=0&&Ie.push(Qe.clone().lerp(Rt,Ct/(Ct-$e)))}he=Ie}for(let Ce=1;Ce<he.length-1;Ce++)Y.push(...he[0].toArray(),...he[Ce].toArray(),...he[Ce+1].toArray())}z.dispose();let V=new Mt;return V.setAttribute("position",new mt(Y,3)),V.computeVertexNormals(),V}for(let L of i.boards.filter(z=>z.surface==="left")){let z=L.mesh.geometry.clone().translate(...L.mesh.position.toArray()).applyMatrix4(g);if(z.computeBoundingBox(),!z.boundingBox.intersectsBox(m)){z.dispose();continue}let j=We(z);if(z.dispose(),!j.attributes.position.count){j.dispose();continue}let Y=new bt(j,G);Y.add(new Sn(new Cn(j,30),W)),n.add(Y),ue(Y,{...t(L),detailLabel:"Grubo\u015B\u0107 p\u0142yty",detail:"18 mm"},"structure"),S.push(Y)}for(let L=2;L<12;L++)for(let z=0;z<8;z++){let j=(7-L-.5)*r,Y=(z+.5)*r-c,V=Math.max(0,Y-(r-2*o)/2),oe=Math.min(h,Y+(r-2*o)/2);if(oe-V<.045)continue;let he=ae(n,r-2*o-.007,oe-V-.006,s-.025,j,(V+oe)/2,-.007,Ee);ue(he,{id:`C30-IZ-${L.toString().padStart(2,"0")}${z}`,type:"Kostka izolacji",surface:"Komora \u015Bciany zewn\u0119trznej",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((oe-V-.006)*1e3)} mm`,metricLabel:"Wymiary w widoku",detailLabel:"Warstwa",detail:"Izolacja mi\u0119dzy \u017Cebrami"},"insulation"),I.push(he)}ae(n,u,h,.018,0,h/2,-.14,q);function Ke(L,z,j,Y){let V=new Jr,oe=z.map(ve=>bi(...ve)),he=oe[0];for(let ve=1;ve<oe.length-1;ve++){let rt=Math.min(.07,oe[ve].distanceTo(oe[ve-1])/3,oe[ve].distanceTo(oe[ve+1])/3),Ie=oe[ve].clone().addScaledVector(oe[ve-1].clone().sub(oe[ve]).normalize(),rt),Ze=oe[ve].clone().addScaledVector(oe[ve+1].clone().sub(oe[ve]).normalize(),rt);V.add(new rr(he,Ie)),V.add(new sr(Ie,oe[ve],Ze)),he=Ze}V.add(new rr(he,oe[oe.length-1]));let Ce=new bt(new js(V,Math.max(16,Math.ceil(V.getLength()*55)),j,10,!1),Y);return L.add(Ce),Ce}let ct=y("#327d9f",.48),re=y("#b65744",.48),_e=y("#c18c2d",.58),xe=y("#687572",.72),Fe=(L,z,j,Y,V,oe)=>{let he=Ke(n,j,Y,V);return ue(he,{id:L,type:z,surface:"Warstwa instalacyjna od wn\u0119trza",length:oe==="power"?"Gniazda i o\u015Bwietlenie":"Przy\u0142\u0105cze umywalki",metricLabel:"Przeznaczenie",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},oe),M.push(he),he};Fe("C30-W-01","Zimna woda",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,ct,"water"),Fe("C30-W-02","Ciep\u0142a woda",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,re,"water"),Fe("C30-K-01","Odp\u0142yw umywalki",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,xe,"water"),Fe("C30-E-01","Przew\xF3d do gniazd",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,_e,"power"),Fe("C30-E-02","Przew\xF3d do o\u015Bwietlenia",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,_e,"power");let Oe=ae(n,.13,.12,.055,1.6,2.3,.191,y("#475751"));ue(Oe,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Warstwa instalacyjna od wn\u0119trza",length:"Instalacja elektryczna",metricLabel:"Obw\xF3d",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},"power"),M.push(Oe),ae(n,u+.32,.12,1.82,0,-.06,.7,Me);let Xe=y("#927d63");for(let L=f;L<p;L+=.19)ae(n,.001,.001,1.8,L,.001,.7,Xe);let it=.249,qe=.025,le=f+.16,pe=p-.16,te=.22,ye=h-.22;ae(n,u,.22,qe,0,.11,it,F),ae(n,u,.22,qe,0,h-.11,it,F),ae(n,.16,ye-te,qe,f+.08,(ye+te)/2,it,F),ae(n,.16,ye-te,qe,p-.08,(ye+te)/2,it,F);let T=ae(n,1,ye-te,qe,0,(ye+te)/2,it,F);ue(T,{id:"C30-WYK-01",type:"Malowana ok\u0142adzina \u015Bciany",surface:"\u015Aciana od strony wn\u0119trza",length:"Wyko\u0144czenie wn\u0119trza",metricLabel:"Warstwa",detailLabel:"Pod spodem",detail:"Konstrukcja, izolacja i instalacje"},"finish"),ae(n,.09,h,.75,p+.045,h/2,.54,F),ae(n,u+.06,.07,.65,0,h+.035,.45,F),ae(n,u,.095,.022,0,.047,.278,k),ae(n,.022,.095,.65,p-.01,.047,.61,k);let we=ae(n,.007,ye-te,.032,le,(te+ye)/2,.255,y("#43948c")),ze=new ft;n.add(ze),ae(ze,.79,1.03,.014,-1.17,1.8,.27,U);let me=document.createElement("canvas");me.width=64,me.height=128;let E=me.getContext("2d"),b=E.createLinearGradient(0,0,64,128);b.addColorStop(0,"#8caaa5"),b.addColorStop(.5,"#cfdbd3"),b.addColorStop(.51,"#acb7ad"),b.addColorStop(1,"#c5bda5"),E.fillStyle=b,E.fillRect(0,0,64,128);let O=new Pi(me);O.colorSpace=Jt;let Q=new Ci({map:O});ae(ze,.75,.99,.004,-1.17,1.8,.279,Q);let ce=new pn(bi(1,0,0),-le);ze.traverse(L=>{L.isMesh&&(L.material=L.material.clone(),L.material.clippingPlanes=[ce])});let ee=new ft;n.add(ee),ae(ee,1,.43,.43,-1.17,.51,.51,B),ae(ee,1.06,.035,.48,-1.17,.742,.52,R);let Pe=y("#8c6944");for(let L=-1.63;L<-.7;L+=.035)ae(ee,.009,.39,.008,L,.51,.729,Pe);let be=new ni;be.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let Ne=new or;Ne.absellipse(0,0,.285,.155,0,Math.PI*2,!0),be.holes.push(Ne);let X=new mi(be,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});X.rotateX(-Math.PI/2);let N=new bt(X,R);N.position.set(-1.17,.765,.52),ee.add(N);let $=new bt(new ir(.282,.25,.018,40),R);$.scale.z=.55,$.position.set(-1.17,.772,.52),ee.add($),Ke(ee,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,U),ae(ee,.045,.012,.032,-1.17,1.062,.335,U);let ne=(L,z,j=!1)=>{let Y=ae(n,.135,.11,.019,L,z,.277,k);if(j)ae(n,.09,.07,.009,L,z,.292,F);else for(let V of[-.032,.032]){let oe=new bt(new ir(.026,.026,.007,20),F);oe.rotation.x=Math.PI/2,oe.position.set(L+V,z,.291),n.add(oe);for(let he of[-.008,.008])ae(n,.006,.006,.004,L+V,z+he,.297,U)}return Y};ne(1.13,.47),ne(1.4,1.24,!0),ae(n,.42,.036,.07,-1.17,2.57,.3,U),ae(n,.38,.008,.055,-1.17,2.548,.31,y("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let se=new eo(new ln,2653304);se.visible=!1,n.add(se);function ie(L){A=L,se.visible=L!==T,n.updateMatrixWorld(!0),se.visible&&se.box.setFromObject(L),e(L.userData.info)}function fe(L){if(L===T)return T.visible;if(D<=.001)return!1;L.geometry.computeBoundingBox();let z=L.geometry.boundingBox.clone().applyMatrix4(L.matrixWorld);return z.max.x>le&&z.min.x<le+(pe-le)*D&&z.max.y>te&&z.min.y<ye}function C(L){D=dr.clamp(L,0,1);let z=le+(pe-le)*D,j=pe-z;T.scale.x=j,T.position.x=(z+pe)/2,T.visible=j>1e-5,ce.constant=-z,ze.visible=z<-1.17+.395,we.position.x=z,we.visible=D>.005&&D<.995,A&&A!==T&&!fe(A)&&ie(T)}return C(0),ie(T),{root:n,direction:bi(.48,.2,3),focus:new ln(bi(f-.1,-.1,-.16),bi(p+.12,h+.1,1.08)),annotation:"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",finish:C,selectAt(L){n.updateMatrixWorld(!0);let z=L.intersectObjects(n.children,!0).find(j=>{if(!j.object.isMesh)return!1;for(let Y=j.object;Y;Y=Y.parent)if(!Y.visible)return!1;return!(j.object.material.clippingPlanes||[]).some(Y=>Y.distanceToPoint(j.point)<0)});z?.object.userData.info&&ie(z.object)},next(){let L=w.filter(fe);L.length&&ie(L[++x%L.length])},getSelected(){return A?.userData.info},getWallState(){return{reveal:D,boardCount:S.length,insulationCount:I.length,serviceCount:M.length,coverWidth:T.scale.x,insideFacing:!0}}}}var yt=(...i)=>new P(...i),ls=yt(1,0,0),mr=yt(0,1,0),cs=yt(0,0,1),_i=nt/2,Wn=new Gt({color:"#cba36b",roughness:.8,side:tn}),ds=new Gt({color:"#43948c",roughness:.75,side:tn}),Oh=new Gt({color:"#94784e",roughness:.85,side:tn}),zh=new un({color:"#66543a",transparent:!0,opacity:.5}),Bh=new Gt({color:"#287c78",roughness:.7,side:tn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),L3=new Set([Wn,ds,Oh,zh,Bh]);function kh(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])L3.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var go;function xo(){return go||(go=Mc({wood:Wn,end:Wn}),go.root.updateMatrixWorld(!0),go.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),go}function Vh(i=6,{trim:e=null,cut:t=null}={}){let n=i*ge,r=e==="left"?nt:0,s=e==="right"?n-nt:n,o=[[0,Ge],[n-Ge,n]];for(let _=1;_<i;_++)o.push([_*ge-Ge,_*ge+Ge]);let a=t?.offset||0,l=a+_i,c=[...new Set([r,s,...o.flat(),...t?[a,l]:[]].filter(_=>_>=r&&_<=s))].sort((_,g)=>_-g),d=c.slice(1).map((_,g)=>{let m=c[g],w=(m+_)/2,S=-_i,M=o.some(([I,A])=>w>I&&w<A)?0:_i;return t&&w>a&&w<l&&(t.edge==="slotted"?M=Math.min(M,_i-Ge):S=-_i+Ge),{a:m,b:_,bottom:S,top:M}}),u=[];for(let _ of d)u.push(new de(_.a,_.bottom),new de(_.b,_.bottom));for(let _ of[...d].reverse())u.push(new de(_.b,_.top),new de(_.a,_.top));let h=u.filter((_,g)=>g===0||!_.equals(u[g-1])),f=new ni(h);f.closePath();let p=new mi(f,{depth:Ge,bevelEnabled:!1,curveSegments:1});return p.translate(0,0,-Ge/2),p}function V0(i,e=Wn){let t=new bt(i,e);return t.add(new Sn(new Cn(i,30),zh)),t}function N3(i){let e=[];for(let t=0;t<2;t++){let n=0;for(;n<i;){let r=Math.min(t===1&&n===0?2:6,i-n);e.push({start:n*ge,n:r,ply:t,trim:t===1&&n===0?"left":t===1&&n+r===i?"right":null}),n+=r}}return e}function bo(i,e,t,n,r,s,o=Wn){for(let a of N3(e)){let l=Vh(a.n,{trim:a.trim}),c=new pt().makeBasis(n,r,s);l.applyMatrix4(c);let d=V0(l,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Ge),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function U3(i,e,t){i.add(new to(t,e,.36,2653304,.095,.048))}function F3(i){let e=new ft,t=6*ge,n=10*ge,r=new ft,s=new ft,o=new ft;e.add(r,s,o);for(let c=1;c<10;c++)bo(r,6,yt(-t/2,0,-n/2+c*ge),ls,mr,cs,ds);for(let c=1;c<6;c++)bo(s,10,yt(-t/2+c*ge,0,-n/2),cs,mr.clone().negate(),ls,Wn);for(let c of[-n/2+ge,0,n/2-ge])U3(o,yt(-t/2+ge,.16,c),mr);let a=new nr(new Mt().setFromPoints([yt(-t/2,0,-n/2-.12),yt(t/2,0,-n/2-.12)]),new un({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new pt().makeBasis(mr,cs,ls)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let l=i==="wall"?yt(1.5,1,2.6):yt(1.4,1.7,1.9);return{root:e,arrows:o,direction:l,annotation:i==="wall"?"Wpusty pion\xF3w \u2192 na zewn\u0105trz domu":i==="roof"?"Turkus: kr\xF3tszy kierunek po\u0142aci \xB7 wpusty do pokrycia":"Turkus: kr\xF3tszy kierunek no\u015Bny \xB7 wpusty do g\xF3ry",spread(c){s.position.y=c*.65}}}function k0(i,e,{crossing:t=[],plane:n=1,direction:r=yt(1.1,1.8,1.4),size:s=1.05}={}){let o=new ft,a=new ft,l=new ft;o.add(a,l);let c=xo(),d=(u,h)=>u.surface===h.surface&&u.axis===h.axis&&u.index===h.index;for(let u of c.boards){let h=i.findIndex(_=>d(u,_)),f=t.some(_=>d(u,_));if(h<0&&!f||u.bounds.distanceToPoint(e)>.5)continue;let p=V0(u.mesh.geometry.clone(),f?Oh:h===0?Wn:ds);p.position.copy(u.mesh.position).sub(e),p.userData.base=p.position.clone(),p.userData.sign=u.bounds.getCenter(yt()).getComponent(n)<e.getComponent(n)?-1:1,(f?l:a).add(p)}return l.visible=!1,{root:o,direction:r,focus:new ln(yt(-s/2,-s/2,-s/2),yt(s/2,s/2,s/2)),spread(u){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*u*.2);l.visible=!1},crossing(u){l.visible=u}}}function Hh(i,e){if(["slab","wall","roof"].includes(i.scene))return F3(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let r=new ft,s=V0(Vh(6,e||{}),ds);return s.position.x=-3*ge,r.add(s),{root:r,direction:yt(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Deska grzebieniowa \xB7 naci\u0119cia do po\u0142owy wysoko\u015Bci"}}if(i.scene==="continuity"){let r=new ft;return bo(r,12,yt(-6*ge,0,0),ls,mr,cs,Wn),r.children.forEach(s=>s.material=s.userData.ply?ds:Wn),{root:r,direction:yt(.6,.85,3),spread(s){r.children.forEach(o=>o.position.z=(o.userData.ply-.5)*(Ge+s*.42))},annotation:"Dwie warstwy \xB7 przesuni\u0119cie styk\xF3w o 2 modu\u0142y"}}if(i.scene==="cross"){let r=new ft,s=new ft,o=new ft;return r.add(s,o),bo(s,4,yt(-2*ge,0,0),ls,mr,cs,ds),bo(o,4,yt(0,0,-2*ge),cs,mr.clone().negate(),ls,Wn),{root:r,direction:yt(1.4,1.6,2),spread(a){o.position.y=a*.65},annotation:"Wpusty przeciwnych rodzin \u017Ceber otwieraj\u0105 si\u0119 w przeciwne strony"}}let t=xo(),n=t.dimensions;if(i.scene==="joint"){let r=t.joints.find(s=>s.id===i.joint);return k0(r.members,yt(...r.position),{crossing:r.crossingMembers||[],plane:r.planeAxis,direction:yt(...r.viewDirection)})}return i.scene==="corner"?k0([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],yt(n.halfWidth-_i,3*ge,n.halfDepth-_i),{plane:1,direction:yt(1.4,2,1.6)}):i.scene==="roof-wall"?k0([{surface:"right",axis:1,index:3},{surface:"roof-right",axis:0,index:4}],yt(n.halfWidth-_i,n.ceilingTop,-n.halfDepth+3*ge),{plane:2,direction:yt(1.5,1.2,2),size:1.2}):k0([{surface:"roof-left",axis:0,index:8},{surface:"roof-right",axis:0,index:8}],yt(0,n.roofUnderRidgeY+_i,-n.halfDepth+7*ge),{plane:2,direction:yt(1.4,1.3,2.4),size:1.3})}var O3={rear:"\u015Aciana zewn\u0119trzna od tarasu",front:"\u015Aciana zewn\u0119trzna od wej\u015Bcia",left:"Lewa \u015Bciana zewn\u0119trzna",right:"Prawa \u015Bciana zewn\u0119trzna","bedroom-right":"\u015Aciana wewn\u0119trzna","bedroom-front":"Przegroda sypialni i \u0142azienki","roof-left":"Lewa po\u0142a\u0107 dachu","roof-right":"Prawa po\u0142a\u0107 dachu"};function _o(i){let e=1/0,t=-1/0,n=new P(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=yt().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Deska \u0142\u0105czeniowa":i.trim?"Deska zako\u0144czeniowa":i.custom?"Deska dopasowana do otworu lub skosu":"Deska grzebieniowa",surface:O3[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Gh(i,e){let t=xo();if(i==="wall")return Fh(t,e,_o);let n=new ft,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=mo(s,!1);s.forEach(d=>d.dispose()),n.add(V0(o,Wn));let a=new bt(new Mt,Bh);n.add(a);let l,c=d=>{l=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(_o(d))};return c(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:yt(1.4,1,1.5),annotation:"Wybierz element, aby zobaczy\u0107 jego identyfikator",selectAt(d){let u=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(f=>({b:h,d:f.distance}))).sort((h,f)=>h.d-f.d);u[0]&&c(u[0].b)},next(){c(r[(r.indexOf(l)+1)%r.length])},getSelected(){return _o(l)}}}var Sc={model:"Combstruct 30",totalBoards:1437,material:{lengthM:2088.932275929059,fullBoardLengthM:2.5,fullBoardEquivalents:835.5729103716236,fullBoards:836,sheets:168},geometrySha256:"cd56316f80216d5fefa7ade6c77fd358cdf2a269904543ee0c93c4c0926868fa",toleranceM:5e-5,families:[{id:"standard",name:"Deska zwyk\u0142a",count:837,lengths:{"1":7,"2":36,"3":85,"4":45,"5":62,"6":602},sample:"board-2"},{id:"ending",name:"Deska zako\u0144czeniowa",count:483,lengths:{"1":84,"2":194,"3":25,"4":51,"5":13,"6":116},sample:"board-143"},{id:"corner-slotted",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 102 mm",count:39,lengths:{"3":14,"4":13,"6":12},sample:"board-318"},{id:"corner-plain",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 120 mm",count:43,lengths:{"2":14,"3":12,"6":17},sample:"board-911"},{id:"inset-slotted",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, z\u0119by",count:9,lengths:{"3":2,"6":7},sample:"board-1045"},{id:"inset-plain",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, pe\u0142na kraw\u0119d\u017A",count:19,lengths:{"2":5,"6":14},sample:"board-1057"},{id:"combined",name:"\u0141\u0105czeniowa \xB7 dwa wybrania",count:7,lengths:{"6":7},sample:"board-1113"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-365",null],["board-370",null],["board-375",null],["board-621",null],["board-627",null],["board-1076",null],["board-1096",null],["board-324",null],["board-331",null],["board-338",null],["board-752",null],["board-759",null],["board-766",null],["board-601",null],["board-650",null],["board-318",null],["board-344",null],["board-349",null],["board-355",null],["board-361",null],["board-381",null],["board-458",null],["board-463",null],["board-468",null],["board-473",null],["board-478",null],["board-483",null],["board-488",null],["board-493",null],["board-498",null],["board-503",null],["board-508",null],["board-513",null],["board-518",null],["board-523",null],["board-595",null],["board-607",null],["board-612",null],["board-617",null],["board-634",null],["board-639",null],["board-644",null],["board-656",null],["board-736",null],["board-741",null],["board-746",null],["board-772",null],["board-777",null],["board-782",null],["board-787",null],["board-792",null],["board-797",null],["board-802",null],["board-807",null],["board-1057",null],["board-1061",null],["board-1065",null],["board-1069",null],["board-1073",null],["board-1081",null],["board-1085",null],["board-1089",null],["board-1093",null],["board-1101",null],["board-1105",null],["board-1109",null],["board-1134",null],["board-1138",null],["board-1142",null],["board-1146",null],["board-1150",null],["board-315","board-37"],["board-320","board-37"],["board-327","board-38"],["board-334","board-38"],["board-341","board-38"],["board-346","board-38"],["board-352","board-38"],["board-358","board-38"],["board-378","board-39"],["board-455","board-47"],["board-460","board-54"],["board-465","board-61"],["board-470","board-68"],["board-475","board-75"],["board-480","board-82"],["board-485","board-89"],["board-490","board-96"],["board-495","board-103"],["board-500","board-110"],["board-505","board-117"],["board-510","board-124"],["board-515","board-131"],["board-520","board-138"],["board-592","board-146"],["board-597","board-156"],["board-604","board-166"],["board-609","board-176"],["board-614","board-186"],["board-631","board-213"],["board-636","board-222"],["board-641","board-231"],["board-646","board-240"],["board-653","board-249"],["board-733","board-46"],["board-738","board-53"],["board-743","board-60"],["board-748","board-67"],["board-755","board-74"],["board-762","board-81"],["board-769","board-88"],["board-774","board-95"],["board-779","board-102"],["board-784","board-109"],["board-789","board-116"],["board-794","board-123"],["board-799","board-130"],["board-804","board-137"],["board-1055","board-44"],["board-1059","board-51"],["board-1063","board-58"],["board-1067","board-65"],["board-1071","board-72"],["board-1079","board-86"],["board-1083","board-93"],["board-1087","board-100"],["board-1091","board-107"],["board-1099","board-121"],["board-1103","board-128"],["board-1107","board-135"],["board-1132","board-144"],["board-1136","board-154"],["board-1140","board-164"],["board-1144","board-174"],["board-1148","board-184"],["board-259","board-315"],["board-260","board-259"],["board-261","board-378"],["board-399","board-259"],["board-400","board-399"],["board-401","board-490"],["board-402","board-401"],["board-529","board-402"],["board-530","board-529"],["board-531","board-631"],["board-532","board-531"],["board-674","board-261"],["board-675","board-674"],["board-676","board-675"],["board-677","board-532"],["board-991","board-260"],["board-992","board-991"],["board-993","board-1079"],["board-994","board-1083"],["board-995","board-1099"],["board-996","board-995"],["board-1113","board-400"],["board-254","board-259"],["board-255","board-254"],["board-256","board-260"],["board-257","board-261"],["board-258","board-257"],["board-403","board-259"],["board-404","board-400"],["board-405","board-401"],["board-525","board-402"],["board-526","board-525"],["board-527","board-531"],["board-528","board-527"],["board-678","board-258"],["board-679","board-675"],["board-680","board-676"],["board-997","board-255"],["board-998","board-993"],["board-999","board-995"],["board-1000","board-995"],["board-1111","board-400"],["board-1112","board-1111"],["board-267","board-315"],["board-268","board-267"],["board-269","board-378"],["board-406","board-267"],["board-407","board-406"],["board-408","board-490"],["board-409","board-408"],["board-537","board-409"],["board-538","board-537"],["board-539","board-631"],["board-540","board-539"],["board-681","board-269"],["board-682","board-681"],["board-683","board-682"],["board-684","board-540"],["board-1001","board-268"],["board-1002","board-1001"],["board-1003","board-1079"],["board-1004","board-1083"],["board-1005","board-1099"],["board-1006","board-1005"],["board-1116","board-407"],["board-262","board-267"],["board-263","board-262"],["board-264","board-268"],["board-265","board-269"],["board-266","board-265"],["board-321","board-262"],["board-328","board-263"],["board-335","board-263"],["board-410","board-267"],["board-411","board-407"],["board-412","board-408"],["board-533","board-409"],["board-534","board-533"],["board-535","board-539"],["board-536","board-535"],["board-685","board-266"],["board-686","board-682"],["board-687","board-683"],["board-749","board-682"],["board-756","board-682"],["board-763","board-682"],["board-1007","board-263"],["board-1008","board-1003"],["board-1009","board-1005"],["board-1010","board-1005"],["board-1114","board-407"],["board-1115","board-1114"],["board-598","board-533"],["board-647","board-535"],["board-316","board-262"],["board-342","board-263"],["board-347","board-264"],["board-353","board-264"],["board-359","board-264"],["board-379","board-265"],["board-456","board-406"],["board-461","board-406"],["board-466","board-407"],["board-471","board-407"],["board-476","board-407"],["board-481","board-407"],["board-486","board-407"],["board-491","board-408"],["board-496","board-408"],["board-501","board-408"],["board-506","board-408"],["board-511","board-408"],["board-516","board-408"],["board-521","board-408"],["board-593","board-533"],["board-605","board-534"],["board-610","board-534"],["board-615","board-534"],["board-632","board-535"],["board-637","board-535"],["board-642","board-535"],["board-654","board-535"],["board-734","board-681"],["board-739","board-681"],["board-744","board-682"],["board-770","board-682"],["board-775","board-682"],["board-780","board-683"],["board-785","board-683"],["board-790","board-683"],["board-795","board-683"],["board-800","board-683"],["board-805","board-683"],["board-1056","board-1001"],["board-1060","board-1001"],["board-1064","board-1002"],["board-1068","board-1002"],["board-1072","board-1002"],["board-1080","board-1003"],["board-1084","board-1004"],["board-1088","board-1004"],["board-1092","board-1004"],["board-1100","board-1005"],["board-1104","board-1005"],["board-1108","board-1005"],["board-1133","board-1114"],["board-1137","board-1114"],["board-1141","board-1115"],["board-1145","board-1115"],["board-1149","board-1115"],["board-275","board-316"],["board-276","board-342"],["board-277","board-379"],["board-413","board-275"],["board-414","board-413"],["board-415","board-491"],["board-416","board-415"],["board-545","board-416"],["board-546","board-545"],["board-547","board-632"],["board-548","board-547"],["board-688","board-277"],["board-689","board-688"],["board-690","board-770"],["board-691","board-690"],["board-692","board-548"],["board-1011","board-276"],["board-1012","board-1011"],["board-1013","board-1080"],["board-1014","board-1084"],["board-1015","board-1100"],["board-1016","board-1015"],["board-1119","board-414"],["board-270","board-275"],["board-271","board-276"],["board-272","board-276"],["board-273","board-277"],["board-274","board-273"],["board-417","board-275"],["board-418","board-414"],["board-419","board-415"],["board-541","board-416"],["board-542","board-541"],["board-543","board-547"],["board-544","board-543"],["board-693","board-274"],["board-694","board-690"],["board-695","board-691"],["board-1017","board-271"],["board-1018","board-1013"],["board-1019","board-1015"],["board-1020","board-1015"],["board-1117","board-414"],["board-1118","board-1117"],["board-283","board-316"],["board-284","board-342"],["board-285","board-379"],["board-420","board-283"],["board-421","board-420"],["board-422","board-491"],["board-423","board-422"],["board-554","board-423"],["board-555","board-605"],["board-556","board-555"],["board-557","board-632"],["board-558","board-557"],["board-559","board-654"],["board-696","board-285"],["board-697","board-696"],["board-698","board-770"],["board-699","board-698"],["board-700","board-559"],["board-1021","board-284"],["board-1022","board-1021"],["board-1023","board-1080"],["board-1024","board-1084"],["board-1025","board-1100"],["board-1026","board-1025"],["board-1122","board-421"],["board-278","board-283"],["board-279","board-284"],["board-280","board-284"],["board-281","board-285"],["board-282","board-281"],["board-424","board-283"],["board-425","board-421"],["board-426","board-422"],["board-549","board-423"],["board-550","board-555"],["board-551","board-557"],["board-552","board-559"],["board-553","board-552"],["board-701","board-282"],["board-702","board-698"],["board-703","board-699"],["board-1027","board-279"],["board-1028","board-1023"],["board-1029","board-1025"],["board-1030","board-1025"],["board-1120","board-421"],["board-1121","board-1120"],["board-291","board-316"],["board-292","board-342"],["board-293","board-379"],["board-427","board-291"],["board-428","board-427"],["board-429","board-491"],["board-430","board-429"],["board-565","board-430"],["board-566","board-605"],["board-567","board-566"],["board-568","board-632"],["board-569","board-568"],["board-570","board-654"],["board-704","board-293"],["board-705","board-704"],["board-706","board-770"],["board-707","board-706"],["board-708","board-570"],["board-1031","board-292"],["board-1032","board-1031"],["board-1033","board-1080"],["board-1034","board-1084"],["board-1035","board-1100"],["board-1036","board-1035"],["board-1125","board-428"],["board-286","board-291"],["board-287","board-292"],["board-288","board-292"],["board-289","board-293"],["board-290","board-289"],["board-431","board-291"],["board-432","board-428"],["board-433","board-429"],["board-560","board-430"],["board-561","board-566"],["board-562","board-568"],["board-563","board-570"],["board-564","board-563"],["board-709","board-290"],["board-710","board-706"],["board-711","board-707"],["board-1037","board-287"],["board-1038","board-1033"],["board-1039","board-1035"],["board-1040","board-1035"],["board-1123","board-428"],["board-1124","board-1123"],["board-298","board-316"],["board-322","board-298"],["board-329","board-298"],["board-336","board-298"],["board-299","board-298"],["board-363","board-299"],["board-368","board-299"],["board-300","board-299"],["board-373","board-300"],["board-325","board-298"],["board-332","board-298"],["board-339","board-298"],["board-366","board-299"],["board-371","board-299"],["board-376","board-300"],["board-434","board-298"],["board-435","board-434"],["board-436","board-491"],["board-437","board-436"],["board-575","board-437"],["board-599","board-575"],["board-576","board-575"],["board-619","board-576"],["board-625","board-576"],["board-577","board-576"],["board-648","board-577"],["board-602","board-575"],["board-622","board-576"],["board-628","board-576"],["board-651","board-577"],["board-712","board-300"],["board-713","board-712"],["board-750","board-713"],["board-757","board-713"],["board-764","board-713"],["board-714","board-713"],["board-715","board-577"],["board-753","board-713"],["board-760","board-713"],["board-767","board-713"],["board-1041","board-299"],["board-1042","board-1041"],["board-1075","board-1042"],["board-1043","board-1084"],["board-1095","board-1043"],["board-1044","board-576"],["board-1077","board-1042"],["board-1097","board-1043"],["board-1128","board-435"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-438","board-298"],["board-439","board-435"],["board-440","board-436"],["board-571","board-437"],["board-572","board-571"],["board-573","board-576"],["board-574","board-573"],["board-716","board-297"],["board-717","board-713"],["board-718","board-714"],["board-1045","board-295"],["board-1046","board-1042"],["board-1047","board-1043"],["board-1126","board-435"],["board-1127","board-1126"],["board-1058","board-1041"],["board-1062","board-1041"],["board-1066","board-1042"],["board-1070","board-1042"],["board-1074","board-1042"],["board-1078","board-1042"],["board-1082","board-1042"],["board-1086","board-1043"],["board-1090","board-1043"],["board-1094","board-1043"],["board-1098","board-1043"],["board-1102","board-1043"],["board-1106","board-1043"],["board-1110","board-1043"],["board-1135","board-1126"],["board-1139","board-1126"],["board-1143","board-1127"],["board-1147","board-1127"],["board-1151","board-1127"],["board-459","board-434"],["board-464","board-434"],["board-469","board-435"],["board-474","board-435"],["board-479","board-435"],["board-484","board-435"],["board-489","board-435"],["board-494","board-436"],["board-499","board-436"],["board-504","board-436"],["board-509","board-436"],["board-514","board-436"],["board-519","board-436"],["board-524","board-436"],["board-737","board-712"],["board-742","board-712"],["board-747","board-713"],["board-754","board-713"],["board-761","board-713"],["board-768","board-713"],["board-773","board-713"],["board-778","board-713"],["board-783","board-714"],["board-788","board-714"],["board-793","board-714"],["board-798","board-714"],["board-803","board-714"],["board-808","board-714"],["board-382","board-296"],["board-657","board-573"],["board-319","board-294"],["board-596","board-571"],["board-377","board-296"],["board-652","board-573"],["board-326","board-294"],["board-603","board-571"],["board-372","board-296"],["board-645","board-573"],["board-333","board-295"],["board-608","board-572"],["board-367","board-296"],["board-640","board-573"],["board-340","board-295"],["board-613","board-572"],["board-362","board-296"],["board-635","board-573"],["board-345","board-295"],["board-618","board-572"],["board-350","board-296"],["board-356","board-296"],["board-623","board-573"],["board-629","board-573"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-441","board-305"],["board-442","board-441"],["board-443","board-491"],["board-444","board-443"],["board-582","board-444"],["board-583","board-582"],["board-584","board-583"],["board-719","board-307"],["board-720","board-719"],["board-721","board-720"],["board-722","board-584"],["board-1048","board-306"],["board-1049","board-1048"],["board-1050","board-1084"],["board-1051","board-583"],["board-1131","board-442"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-445","board-305"],["board-446","board-442"],["board-447","board-443"],["board-578","board-444"],["board-579","board-578"],["board-580","board-583"],["board-581","board-580"],["board-723","board-304"],["board-724","board-720"],["board-725","board-721"],["board-1052","board-302"],["board-1053","board-1049"],["board-1054","board-1050"],["board-1129","board-442"],["board-1130","board-1129"],["board-312","board-319"],["board-313","board-312"],["board-314","board-313"],["board-448","board-312"],["board-449","board-448"],["board-450","board-494"],["board-451","board-450"],["board-589","board-451"],["board-590","board-589"],["board-591","board-590"],["board-726","board-314"],["board-727","board-726"],["board-728","board-727"],["board-729","board-591"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-452","board-312"],["board-453","board-449"],["board-454","board-450"],["board-585","board-451"],["board-586","board-585"],["board-587","board-590"],["board-588","board-587"],["board-730","board-311"],["board-731","board-727"],["board-732","board-728"],["board-457","board-448"],["board-462","board-448"],["board-467","board-449"],["board-472","board-449"],["board-477","board-449"],["board-482","board-449"],["board-487","board-449"],["board-492","board-450"],["board-497","board-450"],["board-502","board-450"],["board-507","board-450"],["board-512","board-450"],["board-517","board-450"],["board-522","board-450"],["board-735","board-726"],["board-740","board-726"],["board-745","board-727"],["board-751","board-727"],["board-758","board-727"],["board-765","board-727"],["board-771","board-727"],["board-776","board-727"],["board-781","board-728"],["board-786","board-728"],["board-791","board-728"],["board-796","board-728"],["board-801","board-728"],["board-806","board-728"],["board-317","board-308"],["board-594","board-585"],["board-380","board-310"],["board-655","board-587"],["board-323","board-308"],["board-600","board-585"],["board-374","board-310"],["board-649","board-587"],["board-330","board-309"],["board-606","board-586"],["board-369","board-310"],["board-643","board-587"],["board-337","board-309"],["board-611","board-586"],["board-364","board-310"],["board-638","board-587"],["board-343","board-309"],["board-616","board-586"],["board-360","board-310"],["board-633","board-587"],["board-348","board-310"],["board-620","board-587"],["board-354","board-310"],["board-626","board-587"],["board-357","board-354"],["board-630","board-626"],["board-351","board-348"],["board-624","board-620"],["board-809","board-448"],["board-810","board-809"],["board-811","board-1056"],["board-812","board-726"],["board-813","board-448"],["board-814","board-810"],["board-815","board-811"],["board-816","board-449"],["board-817","board-816"],["board-818","board-1060"],["board-819","board-727"],["board-820","board-448"],["board-821","board-817"],["board-822","board-818"],["board-823","board-449"],["board-824","board-823"],["board-825","board-1064"],["board-826","board-727"],["board-827","board-449"],["board-828","board-824"],["board-829","board-825"],["board-830","board-449"],["board-831","board-830"],["board-832","board-1068"],["board-833","board-727"],["board-834","board-449"],["board-835","board-831"],["board-836","board-832"],["board-837","board-449"],["board-838","board-837"],["board-839","board-1072"],["board-840","board-727"],["board-841","board-449"],["board-842","board-838"],["board-843","board-839"],["board-844","board-449"],["board-845","board-844"],["board-846","board-1075"],["board-847","board-727"],["board-848","board-449"],["board-849","board-845"],["board-850","board-846"],["board-851","board-449"],["board-852","board-851"],["board-853","board-1080"],["board-854","board-727"],["board-855","board-449"],["board-856","board-852"],["board-857","board-853"],["board-858","board-450"],["board-859","board-858"],["board-860","board-1084"],["board-861","board-728"],["board-862","board-450"],["board-863","board-859"],["board-864","board-860"],["board-865","board-450"],["board-866","board-865"],["board-867","board-1088"],["board-868","board-728"],["board-869","board-450"],["board-870","board-866"],["board-871","board-867"],["board-872","board-450"],["board-873","board-872"],["board-874","board-1092"],["board-875","board-728"],["board-876","board-450"],["board-877","board-873"],["board-878","board-874"],["board-879","board-450"],["board-880","board-879"],["board-881","board-1095"],["board-882","board-728"],["board-883","board-450"],["board-884","board-880"],["board-885","board-881"],["board-886","board-450"],["board-887","board-886"],["board-888","board-1100"],["board-889","board-728"],["board-890","board-450"],["board-891","board-887"],["board-892","board-888"],["board-893","board-450"],["board-894","board-893"],["board-895","board-1104"],["board-896","board-728"],["board-897","board-450"],["board-898","board-894"],["board-899","board-895"],["board-900","board-451"],["board-901","board-900"],["board-902","board-1108"],["board-903","board-729"],["board-904","board-450"],["board-905","board-901"],["board-906","board-902"],["board-907","board-308"],["board-908","board-816"],["board-909","board-858"],["board-910","board-585"],["board-911","board-308"],["board-912","board-844"],["board-913","board-886"],["board-914","board-309"],["board-915","board-816"],["board-916","board-858"],["board-917","board-586"],["board-918","board-308"],["board-919","board-844"],["board-920","board-886"],["board-921","board-309"],["board-922","board-817"],["board-923","board-859"],["board-924","board-586"],["board-925","board-309"],["board-926","board-845"],["board-927","board-887"],["board-928","board-309"],["board-929","board-817"],["board-930","board-859"],["board-931","board-586"],["board-932","board-309"],["board-933","board-845"],["board-934","board-887"],["board-935","board-309"],["board-936","board-817"],["board-937","board-859"],["board-938","board-586"],["board-939","board-309"],["board-940","board-845"],["board-941","board-887"],["board-942","board-310"],["board-943","board-818"],["board-944","board-860"],["board-945","board-587"],["board-946","board-310"],["board-947","board-846"],["board-948","board-888"],["board-949","board-310"],["board-950","board-818"],["board-951","board-860"],["board-952","board-587"],["board-953","board-310"],["board-954","board-846"],["board-955","board-888"],["board-956","board-310"],["board-957","board-818"],["board-958","board-860"],["board-959","board-587"],["board-960","board-310"],["board-961","board-846"],["board-962","board-888"],["board-963","board-310"],["board-964","board-818"],["board-965","board-860"],["board-966","board-587"],["board-967","board-310"],["board-968","board-846"],["board-969","board-888"],["board-970","board-310"],["board-971","board-818"],["board-972","board-860"],["board-973","board-587"],["board-974","board-310"],["board-975","board-846"],["board-976","board-888"],["board-977","board-310"],["board-978","board-818"],["board-979","board-860"],["board-980","board-587"],["board-981","board-310"],["board-982","board-846"],["board-983","board-888"],["board-984","board-311"],["board-985","board-818"],["board-986","board-860"],["board-987","board-588"],["board-988","board-310"],["board-989","board-846"],["board-990","board-888"],["board-383","board-323"],["board-384","board-348"],["board-658","board-600"],["board-659","board-620"],["board-385","board-383"],["board-386","board-323"],["board-387","board-360"],["board-660","board-658"],["board-661","board-600"],["board-662","board-633"],["board-388","board-330"],["board-389","board-348"],["board-663","board-606"],["board-664","board-620"],["board-390","board-388"],["board-391","board-360"],["board-665","board-663"],["board-666","board-633"],["board-392","board-343"],["board-393","board-348"],["board-667","board-616"],["board-668","board-620"],["board-394","board-343"],["board-395","board-360"],["board-669","board-616"],["board-670","board-633"],["board-396","board-348"],["board-397","board-348"],["board-671","board-620"],["board-672","board-620"],["board-398","board-348"],["board-673","board-620"],["board-1156","board-312"],["board-1161","board-448"],["board-1166","board-448"],["board-1171","board-449"],["board-1176","board-449"],["board-1181","board-449"],["board-1186","board-449"],["board-1191","board-449"],["board-1196","board-450"],["board-1201","board-450"],["board-1206","board-450"],["board-1211","board-450"],["board-1216","board-450"],["board-1221","board-450"],["board-1226","board-450"],["board-1231","board-454"],["board-1299","board-314"],["board-1304","board-726"],["board-1309","board-726"],["board-1314","board-727"],["board-1319","board-727"],["board-1324","board-727"],["board-1329","board-727"],["board-1334","board-727"],["board-1339","board-727"],["board-1344","board-728"],["board-1349","board-728"],["board-1354","board-728"],["board-1359","board-728"],["board-1364","board-728"],["board-1369","board-728"],["board-1374","board-591"],["board-1153","board-312"],["board-1158","board-448"],["board-1163","board-448"],["board-1168","board-449"],["board-1173","board-449"],["board-1178","board-449"],["board-1183","board-449"],["board-1188","board-449"],["board-1193","board-450"],["board-1198","board-450"],["board-1203","board-450"],["board-1208","board-450"],["board-1213","board-450"],["board-1218","board-450"],["board-1223","board-450"],["board-1228","board-454"],["board-1296","board-314"],["board-1301","board-726"],["board-1306","board-726"],["board-1311","board-727"],["board-1316","board-727"],["board-1321","board-727"],["board-1326","board-727"],["board-1331","board-727"],["board-1336","board-727"],["board-1341","board-728"],["board-1346","board-728"],["board-1351","board-728"],["board-1356","board-728"],["board-1361","board-728"],["board-1366","board-728"],["board-1371","board-591"],["board-1291","board-1153"],["board-1292","board-1158"],["board-1293","board-1188"],["board-1294","board-1218"],["board-1434","board-1296"],["board-1435","board-1301"],["board-1436","board-1331"],["board-1437","board-1361"],["board-1288","board-1153"],["board-1289","board-1178"],["board-1290","board-1208"],["board-1431","board-1296"],["board-1432","board-1321"],["board-1433","board-1351"],["board-1284","board-1153"],["board-1285","board-459"],["board-1286","board-489"],["board-1287","board-519"],["board-1427","board-1296"],["board-1428","board-737"],["board-1429","board-773"],["board-1430","board-803"],["board-1281","board-1153"],["board-1282","board-479"],["board-1283","board-509"],["board-1424","board-1296"],["board-1425","board-761"],["board-1426","board-793"],["board-1155","board-1153"],["board-1160","board-457"],["board-1165","board-462"],["board-1170","board-467"],["board-1175","board-472"],["board-1180","board-477"],["board-1185","board-482"],["board-1190","board-487"],["board-1195","board-492"],["board-1200","board-497"],["board-1205","board-502"],["board-1210","board-507"],["board-1215","board-512"],["board-1220","board-517"],["board-1225","board-522"],["board-1230","board-1228"],["board-1298","board-384"],["board-1303","board-1301"],["board-1308","board-1306"],["board-1313","board-1311"],["board-1318","board-1316"],["board-1323","board-1321"],["board-1328","board-1326"],["board-1333","board-1331"],["board-1338","board-1336"],["board-1343","board-1341"],["board-1348","board-1346"],["board-1353","board-1351"],["board-1358","board-1356"],["board-1363","board-1361"],["board-1368","board-1366"],["board-1373","board-659"],["board-1277","board-1153"],["board-1278","board-1158"],["board-1279","board-1188"],["board-1280","board-1218"],["board-1420","board-1296"],["board-1421","board-1301"],["board-1422","board-1331"],["board-1423","board-1361"],["board-1274","board-383"],["board-1275","board-1178"],["board-1276","board-1208"],["board-1417","board-384"],["board-1418","board-1321"],["board-1419","board-1351"],["board-1270","board-1153"],["board-1271","board-1158"],["board-1272","board-1188"],["board-1273","board-1218"],["board-1413","board-1296"],["board-1414","board-1301"],["board-1415","board-1331"],["board-1416","board-1361"],["board-1267","board-1153"],["board-1268","board-1178"],["board-1269","board-1208"],["board-1410","board-1296"],["board-1411","board-1321"],["board-1412","board-1351"],["board-1152","board-388"],["board-1157","board-1158"],["board-1162","board-1163"],["board-1167","board-1168"],["board-1172","board-1173"],["board-1177","board-1178"],["board-1182","board-1183"],["board-1187","board-1188"],["board-1192","board-1193"],["board-1197","board-1198"],["board-1202","board-1203"],["board-1207","board-1208"],["board-1212","board-1213"],["board-1217","board-1218"],["board-1222","board-1223"],["board-1227","board-663"],["board-1295","board-1152"],["board-1300","board-1157"],["board-1305","board-1162"],["board-1310","board-1167"],["board-1315","board-1172"],["board-1320","board-1177"],["board-1325","board-1182"],["board-1330","board-1187"],["board-1335","board-1192"],["board-1340","board-1197"],["board-1345","board-1202"],["board-1350","board-1207"],["board-1355","board-1212"],["board-1360","board-1217"],["board-1365","board-1222"],["board-1370","board-1227"],["board-1263","board-1152"],["board-1264","board-1157"],["board-1265","board-1187"],["board-1266","board-1217"],["board-1406","board-372"],["board-1407","board-1300"],["board-1408","board-1330"],["board-1409","board-1360"],["board-1260","board-1152"],["board-1261","board-1177"],["board-1262","board-1207"],["board-1403","board-369"],["board-1404","board-1320"],["board-1405","board-1350"],["board-1256","board-1152"],["board-1257","board-1157"],["board-1258","board-1187"],["board-1259","board-1217"],["board-1399","board-1295"],["board-1400","board-1300"],["board-1401","board-1330"],["board-1402","board-1360"],["board-1253","board-1152"],["board-1254","board-1177"],["board-1255","board-1207"],["board-1396","board-1295"],["board-1397","board-1320"],["board-1398","board-1350"],["board-1249","board-1152"],["board-1250","board-1157"],["board-1251","board-1187"],["board-1252","board-1217"],["board-1392","board-1295"],["board-1393","board-1300"],["board-1394","board-1330"],["board-1395","board-1360"],["board-1246","board-1152"],["board-1247","board-1177"],["board-1248","board-1207"],["board-1389","board-1295"],["board-1390","board-1320"],["board-1391","board-1350"],["board-1242","board-1152"],["board-1243","board-1157"],["board-1244","board-1187"],["board-1245","board-1217"],["board-1385","board-1295"],["board-1386","board-1300"],["board-1387","board-1330"],["board-1388","board-1360"],["board-1239","board-1152"],["board-1240","board-1177"],["board-1241","board-1207"],["board-1382","board-1295"],["board-1383","board-1320"],["board-1384","board-1350"],["board-1154","board-1152"],["board-1159","board-1157"],["board-1164","board-1162"],["board-1169","board-1167"],["board-1174","board-1172"],["board-1179","board-1177"],["board-1184","board-1182"],["board-1189","board-1187"],["board-1194","board-1192"],["board-1199","board-1197"],["board-1204","board-1202"],["board-1209","board-1207"],["board-1214","board-1212"],["board-1219","board-1217"],["board-1224","board-1222"],["board-1229","board-1227"],["board-1297","board-397"],["board-1302","board-1157"],["board-1307","board-1162"],["board-1312","board-1167"],["board-1317","board-1172"],["board-1322","board-1177"],["board-1327","board-1182"],["board-1332","board-1187"],["board-1337","board-1192"],["board-1342","board-1197"],["board-1347","board-1202"],["board-1352","board-1207"],["board-1357","board-1212"],["board-1362","board-1217"],["board-1367","board-1222"],["board-1372","board-672"],["board-1235","board-1152"],["board-1236","board-1157"],["board-1237","board-1187"],["board-1238","board-1217"],["board-1378","board-1295"],["board-1379","board-1300"],["board-1380","board-1330"],["board-1381","board-1360"],["board-1232","board-1152"],["board-1233","board-1177"],["board-1234","board-1207"],["board-1375","board-1295"],["board-1376","board-1320"],["board-1377","board-1350"]]};var yo={project:"30",name:"Combstruct 30",geometrySha256:"cd56316f80216d5fefa7ade6c77fd358cdf2a269904543ee0c93c4c0926868fa",totalBoards:1437,families:[{id:"standard",name:"Deska zwyk\u0142a",count:837,variants:[{id:"standard-1",count:358,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-2",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:30,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{boardId:"board-142",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833332538604736}},{id:"standard-3",count:38,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{boardId:"board-47",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666269302368}},{id:"standard-4",count:42,modules:3,ending:!1,lengthM:1.25,preview:{boardId:"board-49",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}},{id:"standard-5",count:7,modules:1,ending:!1,lengthM:.4166666666666667,preview:{boardId:"board-6",positions:[-.208333,-.12,-.009,-.208333,0,-.009,-.190333,0,-.009,.208333,0,-.009,.208333,-.12,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.190333,0,.009,-.208333,0,.009,-.208333,-.12,.009,.208333,-.12,.009,.208333,0,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009],indices:[0,1,2,3,4,0,5,6,7,7,3,0,2,5,7,7,0,2,8,9,10,10,11,12,13,14,15,10,12,13,13,15,8,8,10,13,0,4,10,4,11,10,4,3,11,3,12,11,3,7,12,7,13,12,7,6,13,6,14,13,6,5,14,5,15,14,5,2,15,2,8,15,2,1,8,1,9,8,1,0,9,0,10,9],lengthM:.4166666567325592}}],fitted:{count:362,examples:[{boardId:"board-351",positions:[-.030228,-.12,-.009,-.030228,0,-.009,-.048228,0,-.009,-.048228,-.12,-.009,-.048228,0,.009,-.030228,0,.009,-.030228,-.12,.009,-.048228,-.12,.009,.035624,0,-.009,.035624,-.12,-.009,.048228,0,.009,.048228,-.12,.009,.035624,.12,-.009,-.030228,.12,-.009,-.030228,.12,.009,.048228,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,1,0,8,0,9,5,10,11,5,11,6,6,11,9,6,9,0,8,9,11,8,11,10,12,13,1,12,1,8,14,15,10,14,10,5,15,14,13,15,13,12,13,14,5,13,5,1,12,8,10,12,10,15],lengthM:.09645591676235199},{boardId:"board-643",positions:[-.443932,-.12,-.009,-.443932,0,-.009,-.425932,0,-.009,-.425932,-.12,-.009,-.443932,-.12,.009,-.425932,-.12,.009,-.425932,0,.009,-.443932,0,.009,-.045265,0,-.009,-.045265,-.12,-.009,-.045265,-.12,.009,-.045265,0,.009,-.425932,.12,-.009,-.045265,.12,-.009,-.045265,.12,.009,-.425932,.12,.009,-.009265,0,-.009,-.009265,-.12,-.009,-.009265,-.12,.009,-.009265,0,.009,.371402,0,-.009,.371402,-.12,-.009,.371402,-.12,.009,.371402,0,.009,-.009265,.12,-.009,.371402,.12,-.009,.371402,.12,.009,-.009265,.12,.009,.407402,0,-.009,.407402,-.12,-.009,.407402,-.12,.009,.407402,0,.009,.443932,0,-.009,.443932,-.12,-.009,.431328,-.12,.009,.431328,0,.009,.407402,.12,-.009,.443932,.12,-.009,.431328,.12,.009,.407402,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,8,13,14,8,14,11,9,8,16,9,16,17,10,18,19,10,19,11,9,17,18,9,18,10,8,11,19,8,19,16,17,16,20,17,20,21,18,22,23,18,23,19,17,21,22,17,22,18,16,24,25,16,25,20,19,23,26,19,26,27,24,27,26,24,26,25,16,19,27,16,27,24,20,25,26,20,26,23,21,20,28,21,28,29,22,30,31,22,31,23,21,29,30,21,30,22,20,23,31,20,31,28,29,28,32,29,32,33,30,34,35,30,35,31,29,33,34,29,34,30,35,34,33,35,33,32,28,36,37,28,37,32,31,35,38,31,38,39,36,39,38,36,38,37,28,31,39,28,39,36,38,35,32,38,32,37],lengthM:.8878631591796875},{boardId:"board-1097",positions:[-.009,-.06,-.009,-.009,.06,-.009,.009,.06,-.009,.009,-.06,-.009,-.009,-.06,.009,.009,-.06,.009,.009,.06,.009,-.009,.06,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,6,3,6,5],lengthM:.017999887466430664}]}},{id:"ending",name:"Deska zako\u0144czeniowa",count:483,variants:[{id:"ending-1",count:83,modules:6,ending:!0,lengthM:2.26,preview:{boardId:"board-143",positions:[-1.13,-.12,-.009,-1.13,.12,-.009,-.971333,.12,-.009,1.13,0,-.009,1.13,-.12,-.009,.731333,.12,-.009,1.112,.12,-.009,1.112,0,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.935333,.12,-.009,-.554667,.12,-.009,-.554667,0,-.009,-.971333,0,-.009,.731333,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.935333,0,-.009,-.971333,.12,.009,-1.13,.12,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,0,.009,1.112,0,.009,1.112,.12,.009,.731333,.12,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,-.554667,.12,.009,-.935333,.12,.009,-.971333,0,.009,.731333,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009,-.935333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,2,20,7,3,0,21,5,7,22,8,10,23,11,13,24,14,16,25,17,19,0,20,25,21,7,0,0,25,19,10,21,0,0,19,24,22,10,0,0,24,16,13,22,0,0,16,23,23,13,0,26,27,28,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,28,30,31,31,33,47,34,36,48,37,39,49,40,42,50,43,45,51,51,46,28,28,31,47,43,51,28,28,47,34,50,43,28,28,34,48,40,50,28,28,48,37,49,40,28,28,37,49,0,4,28,4,29,28,4,3,29,3,30,29,3,7,30,7,31,30,7,6,31,6,32,31,6,5,32,5,33,32,5,21,33,21,47,33,21,10,47,10,34,47,10,9,34,9,35,34,9,8,35,8,36,35,8,22,36,22,48,36,22,13,48,13,37,48,13,12,37,12,38,37,12,11,38,11,39,38,11,23,39,23,49,39,23,16,49,16,40,49,16,15,40,15,41,40,15,14,41,14,42,41,14,24,42,24,50,42,24,19,50,19,43,50,19,18,43,18,44,43,18,17,44,17,45,44,17,25,45,25,51,45,25,20,51,20,46,51,20,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.259999990463257}},{id:"ending-2",count:7,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{boardId:"board-3",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.84333336353302}},{id:"ending-3",count:43,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{boardId:"board-44",positions:[-.713333,-.12,-.009,-.713333,0,-.009,-.695333,0,-.009,.554667,.12,-.009,.713333,.12,-.009,.713333,-.12,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,.009,-.713333,0,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,5,0,2,15,3,5,16,6,8,17,9,11,2,12,14,8,15,5,5,2,14,16,8,5,5,14,17,11,16,5,5,17,11,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,21,21,23,33,24,26,34,27,29,35,30,32,18,21,33,24,30,18,21,21,24,34,35,30,21,21,34,27,27,35,21,0,5,20,5,21,20,5,4,21,4,22,21,4,3,22,3,23,22,3,15,23,15,33,23,15,8,33,8,24,33,8,7,24,7,25,24,7,6,25,6,26,25,6,16,26,16,34,26,16,11,34,11,27,34,11,10,27,10,28,27,10,9,28,9,29,28,9,17,29,17,35,29,17,14,35,14,30,35,14,13,30,13,31,30,13,12,31,12,32,31,12,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666173934937}},{id:"ending-4",count:25,modules:3,ending:!0,lengthM:1.01,preview:{boardId:"board-195",positions:[-.505,-.12,-.009,-.505,0,-.009,-.487,0,-.009,.346333,.12,-.009,.505,.12,-.009,.505,-.12,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,.009,-.505,0,.009,-.505,-.12,.009,.505,-.12,.009,.505,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,.346333,0,.009,-.070333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,5,0,2,12,3,5,13,6,8,2,9,11,8,12,5,5,2,11,13,8,5,5,11,13,14,15,16,17,18,19,20,21,22,23,24,25,14,16,17,17,19,26,20,22,27,23,25,14,17,26,20,23,14,17,17,20,27,27,23,17,0,5,16,5,17,16,5,4,17,4,18,17,4,3,18,3,19,18,3,12,19,12,26,19,12,8,26,8,20,26,8,7,20,7,21,20,7,6,21,6,22,21,6,13,22,13,27,22,13,11,27,11,23,27,11,10,23,10,24,23,10,9,24,9,25,24,9,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:1.0099999904632568}},{id:"ending-5",count:187,modules:2,ending:!0,lengthM:.5933333333333334,preview:{boardId:"board-1",positions:[-.296667,-.12,-.009,-.296667,.12,-.009,-.138,.12,-.009,.296667,0,-.009,.296667,-.12,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.138,0,-.009,-.102,0,-.009,-.138,.12,.009,-.296667,.12,.009,-.296667,-.12,.009,.296667,-.12,.009,.296667,0,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.102,0,.009],indices:[0,1,2,3,4,0,5,6,7,0,2,8,7,3,0,9,5,7,0,8,9,9,7,0,10,11,12,12,13,14,15,16,17,18,10,12,12,14,15,15,17,19,19,18,12,12,15,19,0,4,12,4,13,12,4,3,13,3,14,13,3,7,14,7,15,14,7,6,15,6,16,15,6,5,16,5,17,16,5,9,17,9,19,17,9,8,19,8,18,19,8,2,18,2,10,18,2,1,10,1,11,10,1,0,11,0,12,11],lengthM:.5933333039283752}},{id:"ending-6",count:84,modules:1,ending:!0,lengthM:.1766666666666667,preview:{boardId:"board-46",positions:[-.088333,-.12,-.009,-.088333,0,-.009,-.070333,0,-.009,.088333,.12,-.009,.088333,-.12,-.009,-.070333,.12,-.009,-.070333,0,.009,-.088333,0,.009,-.088333,-.12,.009,.088333,-.12,.009,.088333,.12,.009,-.070333,.12,.009],indices:[0,1,2,3,4,0,2,5,3,3,0,2,6,7,8,8,9,10,10,11,6,6,8,10,0,4,8,4,9,8,4,3,9,3,10,9,3,5,10,5,11,10,5,2,11,2,6,11,2,1,6,1,7,6,1,0,7,0,8,7],lengthM:.17666666209697723}}],fitted:{count:54,examples:[{boardId:"board-385",positions:[.101136,-.12,-.009,.101136,0,-.009,-.119136,0,-.009,-.119136,-.12,-.009,-.093429,0,.009,.101136,0,.009,.101136,-.12,.009,-.093429,-.12,.009,.101136,.12,-.009,-.119136,.12,-.009,-.093429,.12,.009,.101136,.12,.009,.119136,-.12,-.009,.119136,0,-.009,.119136,0,.009,.119136,-.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,3,2,4,3,4,7,1,8,9,1,9,2,10,11,5,10,5,4,8,11,10,8,10,9,5,11,8,5,8,1,2,9,10,2,10,4,12,13,1,12,1,0,5,14,15,5,15,6,6,15,12,6,12,0,13,14,5,13,5,1,15,14,13,15,13,12],lengthM:.23827165365219116},{boardId:"board-363",positions:[-.269667,-.12,-.009,-.269667,0,-.009,-.305667,0,-.009,-.305667,-.12,-.009,-.305667,0,.009,-.269667,0,.009,-.269667,-.12,.009,-.305667,-.12,.009,.111,-.12,-.009,.111,0,-.009,.111,0,.009,.111,-.12,.009,.111,.12,-.009,-.269667,.12,-.009,-.269667,.12,.009,.111,.12,.009,.147,-.12,-.009,.147,0,-.009,.147,0,.009,.147,-.12,.009,.305667,-.12,-.009,.305667,0,-.009,.305667,0,.009,.305667,-.12,.009,.305667,.12,-.009,.147,.12,-.009,.147,.12,.009,.305667,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,12,15,14,12,14,13,13,14,5,13,5,1,10,15,12,10,12,9,16,17,9,16,9,8,10,18,19,10,19,11,11,19,16,11,16,8,17,18,10,17,10,9,20,21,17,20,17,16,18,22,23,18,23,19,19,23,20,19,20,16,23,22,21,23,21,20,21,24,25,21,25,17,26,27,22,26,22,18,24,27,26,24,26,25,25,26,18,25,18,17,22,27,24,22,24,21],lengthM:.6113333702087402},{boardId:"board-1095",positions:[-.305667,-.12,-.009,-.305667,0,-.009,-.269667,0,-.009,-.269667,-.12,-.009,-.305667,-.12,.009,-.269667,-.12,.009,-.269667,0,.009,-.305667,0,.009,.111,0,-.009,.111,-.12,-.009,.111,-.12,.009,.111,0,.009,-.269667,.12,-.009,.111,.12,-.009,.111,.12,.009,-.269667,.12,.009,.147,0,-.009,.147,-.12,-.009,.147,-.12,.009,.147,0,.009,.305667,0,-.009,.305667,-.12,-.009,.305667,-.12,.009,.305667,0,.009,.147,.12,-.009,.305667,.12,-.009,.305667,.12,.009,.147,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,8,13,14,8,14,11,9,8,16,9,16,17,10,18,19,10,19,11,9,17,18,9,18,10,8,11,19,8,19,16,17,16,20,17,20,21,18,22,23,18,23,19,17,21,22,17,22,18,21,20,23,21,23,22,16,24,25,16,25,20,19,23,26,19,26,27,24,27,26,24,26,25,16,19,27,16,27,24,20,25,26,20,26,23],lengthM:.6113333702087402}]}},{id:"corner-slotted",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 102 mm",count:39,variants:[{id:"corner-slotted-1",count:6,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-318",positions:[-1.232,-.12,-.009,-1.232,0,-.009,-1.25,0,-.009,-1.25,-.12,-.009,-1.25,0,.009,-1.232,0,.009,-1.232,-.12,.009,-1.25,-.12,.009,-1.13,-.12,-.009,-1.13,0,-.009,-1.13,0,.009,-1.13,-.12,.009,-1.13,.102,-.009,-1.232,.102,-.009,-1.232,.102,.009,-1.13,.102,.009,-.851333,-.12,-.009,-.851333,0,-.009,-.851333,0,.009,-.851333,-.12,.009,-.851333,.102,-.009,-.851333,.102,.009,-.851333,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-.851333,.12,.009,-.815333,-.12,-.009,-.815333,0,-.009,-.815333,0,.009,-.815333,-.12,.009,-.434667,-.12,-.009,-.434667,0,-.009,-.434667,0,.009,-.434667,-.12,.009,-.434667,.102,-.009,-.815333,.102,-.009,-.815333,.102,.009,-.434667,.102,.009,-.434667,.12,-.009,-.815333,.12,-.009,-.815333,.12,.009,-.434667,.12,.009,-.398667,-.12,-.009,-.398667,0,-.009,-.398667,0,.009,-.398667,-.12,.009,-.018,-.12,-.009,-.018,0,-.009,-.018,0,.009,-.018,-.12,.009,-.018,.102,-.009,-.398667,.102,-.009,-.398667,.102,.009,-.018,.102,.009,-.018,.12,-.009,-.398667,.12,-.009,-.398667,.12,.009,-.018,.12,.009,.018,-.12,-.009,.018,0,-.009,.018,0,.009,.018,-.12,.009,.398667,-.12,-.009,.398667,0,-.009,.398667,0,.009,.398667,-.12,.009,.398667,.102,-.009,.018,.102,-.009,.018,.102,.009,.398667,.102,.009,.398667,.12,-.009,.018,.12,-.009,.018,.12,.009,.398667,.12,.009,.434667,-.12,-.009,.434667,0,-.009,.434667,0,.009,.434667,-.12,.009,.815333,-.12,-.009,.815333,0,-.009,.815333,0,.009,.815333,-.12,.009,.815333,.102,-.009,.434667,.102,-.009,.434667,.102,.009,.815333,.102,.009,.815333,.12,-.009,.434667,.12,-.009,.434667,.12,.009,.815333,.12,.009,.851333,-.12,-.009,.851333,0,-.009,.851333,0,.009,.851333,-.12,.009,1.232,-.12,-.009,1.232,0,-.009,1.232,0,.009,1.232,-.12,.009,1.232,.102,-.009,.851333,.102,-.009,.851333,.102,.009,1.232,.102,.009,1.232,.12,-.009,.851333,.12,-.009,.851333,.12,.009,1.232,.12,.009,1.25,-.12,-.009,1.25,0,-.009,1.25,0,.009,1.25,-.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,12,15,14,12,14,13,13,14,5,13,5,1,16,17,9,16,9,8,10,18,19,10,19,11,11,19,16,11,16,8,17,20,12,17,12,9,15,21,18,15,18,10,18,21,20,18,20,17,20,22,23,20,23,12,24,25,21,24,21,15,22,25,24,22,24,23,23,24,15,23,15,12,21,25,22,21,22,20,26,27,17,26,17,16,18,28,29,18,29,19,19,29,26,19,26,16,27,28,18,27,18,17,30,31,27,30,27,26,28,32,33,28,33,29,29,33,30,29,30,26,31,34,35,31,35,27,36,37,32,36,32,28,35,36,28,35,28,27,32,37,34,32,34,31,34,38,39,34,39,35,40,41,37,40,37,36,38,41,40,38,40,39,39,40,36,39,36,35,37,41,38,37,38,34,42,43,31,42,31,30,32,44,45,32,45,33,33,45,42,33,42,30,43,44,32,43,32,31,46,47,43,46,43,42,44,48,49,44,49,45,45,49,46,45,46,42,47,50,51,47,51,43,52,53,48,52,48,44,51,52,44,51,44,43,48,53,50,48,50,47,50,54,55,50,55,51,56,57,53,56,53,52,54,57,56,54,56,55,55,56,52,55,52,51,53,57,54,53,54,50,58,59,47,58,47,46,48,60,61,48,61,49,49,61,58,49,58,46,59,60,48,59,48,47,62,63,59,62,59,58,60,64,65,60,65,61,61,65,62,61,62,58,63,66,67,63,67,59,68,69,64,68,64,60,67,68,60,67,60,59,64,69,66,64,66,63,66,70,71,66,71,67,72,73,69,72,69,68,70,73,72,70,72,71,71,72,68,71,68,67,69,73,70,69,70,66,74,75,63,74,63,62,64,76,77,64,77,65,65,77,74,65,74,62,75,76,64,75,64,63,78,79,75,78,75,74,76,80,81,76,81,77,77,81,78,77,78,74,79,82,83,79,83,75,84,85,80,84,80,76,83,84,76,83,76,75,80,85,82,80,82,79,82,86,87,82,87,83,88,89,85,88,85,84,86,89,88,86,88,87,87,88,84,87,84,83,85,89,86,85,86,82,90,91,79,90,79,78,80,92,93,80,93,81,81,93,90,81,90,78,91,92,80,91,80,79,94,95,91,94,91,90,92,96,97,92,97,93,93,97,94,93,94,90,95,98,99,95,99,91,100,101,96,100,96,92,99,100,92,99,92,91,96,101,98,96,98,95,98,102,103,98,103,99,104,105,101,104,101,100,102,105,104,102,104,103,103,104,100,103,100,99,101,105,102,101,102,98,106,107,95,106,95,94,96,108,109,96,109,97,97,109,106,97,106,94,107,108,96,107,96,95,109,108,107,109,107,106],lengthM:2.5}},{id:"corner-slotted-2",count:13,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{boardId:"board-813",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,-.815333,-.12,-.009,-.833333,-.12,.009,-.815333,-.12,.009,-.815333,0,.009,-.833333,0,.009,-.713333,0,-.009,-.713333,-.12,-.009,-.713333,-.12,.009,-.713333,0,.009,-.815333,.102,-.009,-.713333,.102,-.009,-.713333,.102,.009,-.815333,.102,.009,-.434667,0,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,0,.009,-.434667,.102,-.009,-.434667,.102,.009,-.713333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.713333,.12,.009,-.398667,0,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,0,.009,-.018,0,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,0,.009,-.398667,.102,-.009,-.018,.102,-.009,-.018,.102,.009,-.398667,.102,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,0,-.009,.018,-.12,-.009,.018,-.12,.009,.018,0,.009,.398667,0,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,0,.009,.018,.102,-.009,.398667,.102,-.009,.398667,.102,.009,.018,.102,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,0,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,0,.009,.815333,0,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,0,.009,.434667,.102,-.009,.815333,.102,-.009,.815333,.102,.009,.434667,.102,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.833333,0,-.009,.833333,-.12,-.009,.833333,-.12,.009,.833333,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,9,8,16,9,16,17,10,18,19,10,19,11,9,17,18,9,18,10,8,13,20,8,20,16,11,19,21,11,21,14,16,20,21,16,21,19,13,22,23,13,23,20,14,21,24,14,24,25,22,25,24,22,24,23,13,14,25,13,25,22,20,23,24,20,24,21,17,16,26,17,26,27,18,28,29,18,29,19,17,27,28,17,28,18,16,19,29,16,29,26,27,26,30,27,30,31,28,32,33,28,33,29,27,31,32,27,32,28,26,34,35,26,35,30,29,33,36,29,36,37,26,29,37,26,37,34,30,35,36,30,36,33,34,38,39,34,39,35,37,36,40,37,40,41,38,41,40,38,40,39,34,37,41,34,41,38,35,39,40,35,40,36,31,30,42,31,42,43,32,44,45,32,45,33,31,43,44,31,44,32,30,33,45,30,45,42,43,42,46,43,46,47,44,48,49,44,49,45,43,47,48,43,48,44,42,50,51,42,51,46,45,49,52,45,52,53,42,45,53,42,53,50,46,51,52,46,52,49,50,54,55,50,55,51,53,52,56,53,56,57,54,57,56,54,56,55,50,53,57,50,57,54,51,55,56,51,56,52,47,46,58,47,58,59,48,60,61,48,61,49,47,59,60,47,60,48,46,49,61,46,61,58,59,58,62,59,62,63,60,64,65,60,65,61,59,63,64,59,64,60,58,66,67,58,67,62,61,65,68,61,68,69,58,61,69,58,69,66,62,67,68,62,68,65,66,70,71,66,71,67,69,68,72,69,72,73,70,73,72,70,72,71,66,69,73,66,73,70,67,71,72,67,72,68,63,62,74,63,74,75,64,76,77,64,77,65,63,75,76,63,76,64,62,65,77,62,77,74,75,74,77,75,77,76],lengthM:1.6666666269302368}},{id:"corner-slotted-3",count:14,modules:3,ending:!1,lengthM:1.25,preview:{boardId:"board-815",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,-.607,-.12,-.009,-.625,-.12,.009,-.607,-.12,.009,-.607,0,.009,-.625,0,.009,-.226333,0,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,0,.009,-.607,.102,-.009,-.226333,.102,-.009,-.226333,.102,.009,-.607,.102,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,0,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,0,.009,.190333,0,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,0,.009,-.190333,.102,-.009,.190333,.102,-.009,.190333,.102,.009,-.190333,.102,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,0,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,0,.009,.505,0,-.009,.505,-.12,-.009,.505,-.12,.009,.505,0,.009,.226333,.102,-.009,.505,.102,-.009,.505,.102,.009,.226333,.102,.009,.226333,.12,-.009,.505,.12,-.009,.505,.12,.009,.226333,.12,.009,.607,0,-.009,.607,-.12,-.009,.607,-.12,.009,.607,0,.009,.607,.102,-.009,.607,.102,.009,.625,0,-.009,.625,-.12,-.009,.625,-.12,.009,.625,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,8,13,14,8,14,11,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,11,23,8,23,20,21,20,24,21,24,25,22,26,27,22,27,23,21,25,26,21,26,22,20,28,29,20,29,24,23,27,30,23,30,31,20,23,31,20,31,28,24,29,30,24,30,27,28,32,33,28,33,29,31,30,34,31,34,35,32,35,34,32,34,33,28,31,35,28,35,32,29,33,34,29,34,30,25,24,36,25,36,37,26,38,39,26,39,27,25,37,38,25,38,26,24,27,39,24,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,45,56,40,56,52,43,55,57,43,57,46,45,46,57,45,57,56,52,56,57,52,57,55,53,52,58,53,58,59,54,60,61,54,61,55,53,59,60,53,60,54,52,55,61,52,61,58,59,58,61,59,61,60],lengthM:1.25}}],fitted:{count:6,examples:[{boardId:"board-324",positions:[-.407667,-.12,-.009,-.407667,0,-.009,-.425667,0,-.009,-.425667,-.12,-.009,-.425667,0,.009,-.407667,0,.009,-.407667,-.12,.009,-.425667,-.12,.009,-.305667,-.12,-.009,-.305667,0,-.009,-.305667,0,.009,-.305667,-.12,.009,-.305667,.102,-.009,-.407667,.102,-.009,-.407667,.102,.009,-.305667,.102,.009,-.027,-.12,-.009,-.027,0,-.009,-.027,0,.009,-.027,-.12,.009,-.027,.102,-.009,-.027,.102,.009,-.027,.12,-.009,-.305667,.12,-.009,-.305667,.12,.009,-.027,.12,.009,.009,-.12,-.009,.009,0,-.009,.009,0,.009,.009,-.12,.009,.389667,-.12,-.009,.389667,0,-.009,.389667,0,.009,.389667,-.12,.009,.389667,.102,-.009,.009,.102,-.009,.009,.102,.009,.389667,.102,.009,.389667,.12,-.009,.009,.12,-.009,.009,.12,.009,.389667,.12,.009,.425667,-.12,-.009,.425667,0,-.009,.425667,0,.009,.425667,-.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,12,15,14,12,14,13,13,14,5,13,5,1,16,17,9,16,9,8,10,18,19,10,19,11,11,19,16,11,16,8,17,20,12,17,12,9,15,21,18,15,18,10,18,21,20,18,20,17,20,22,23,20,23,12,24,25,21,24,21,15,22,25,24,22,24,23,23,24,15,23,15,12,21,25,22,21,22,20,26,27,17,26,17,16,18,28,29,18,29,19,19,29,26,19,26,16,27,28,18,27,18,17,30,31,27,30,27,26,28,32,33,28,33,29,29,33,30,29,30,26,31,34,35,31,35,27,36,37,32,36,32,28,35,36,28,35,28,27,32,37,34,32,34,31,34,38,39,34,39,35,40,41,37,40,37,36,38,41,40,38,40,39,39,40,36,39,36,35,37,41,38,37,38,34,42,43,31,42,31,30,32,44,45,32,45,33,33,45,42,33,42,30,43,44,32,43,32,31,45,44,43,45,43,42],lengthM:.8513333201408386},{boardId:"board-365",positions:[-.102,-.12,-.009,-.102,0,-.009,-.12,0,-.009,-.12,-.12,-.009,-.12,0,.009,-.102,0,.009,-.102,-.12,.009,-.12,-.12,.009,0,-.12,-.009,0,0,-.009,0,0,.009,0,-.12,.009,0,.102,-.009,-.102,.102,-.009,-.102,.102,.009,0,.102,.009,.12,-.12,-.009,.12,0,-.009,.12,0,.009,.12,-.12,.009,.12,.102,-.009,.12,.102,.009,.12,.12,-.009,0,.12,-.009,0,.12,.009,.12,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,12,15,14,12,14,13,13,14,5,13,5,1,16,17,9,16,9,8,10,18,19,10,19,11,11,19,16,11,16,8,19,18,17,19,17,16,17,20,12,17,12,9,15,21,18,15,18,10,18,21,20,18,20,17,20,22,23,20,23,12,24,25,21,24,21,15,22,25,24,22,24,23,23,24,15,23,15,12,21,25,22,21,22,20],lengthM:.23999999463558197},{boardId:"board-375",positions:[-.102,-.12,-.009,-.102,0,-.009,-.12,0,-.009,-.12,-.12,-.009,-.12,0,.009,-.102,0,.009,-.102,-.12,.009,-.12,-.12,.009,0,-.12,-.009,0,0,-.009,0,0,.009,0,-.12,.009,0,.102,-.009,-.102,.102,-.009,-.102,.102,.009,0,.102,.009,.12,-.12,-.009,.12,0,-.009,.12,0,.009,.12,-.12,.009,.12,.102,-.009,.12,.102,.009,.12,.12,-.009,0,.12,-.009,0,.12,.009,.12,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,12,15,14,12,14,13,13,14,5,13,5,1,16,17,9,16,9,8,10,18,19,10,19,11,11,19,16,11,16,8,19,18,17,19,17,16,17,20,12,17,12,9,15,21,18,15,18,10,18,21,20,18,20,17,20,22,23,20,23,12,24,25,21,24,21,15,22,25,24,22,24,23,23,24,15,23,15,12,21,25,22,21,22,20],lengthM:.23999999463558197}]}},{id:"corner-plain",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 120 mm",count:43,variants:[{id:"corner-plain-1",count:17,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-911",positions:[-1.25,-.102,-.009,-1.25,0,-.009,-1.232,0,-.009,-1.232,-.102,-.009,-1.25,-.102,.009,-1.232,-.102,.009,-1.232,0,.009,-1.25,0,.009,-1.13,0,-.009,-1.13,-.102,-.009,-1.13,-.102,.009,-1.13,0,.009,-1.232,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-1.232,.12,.009,-1.13,-.12,-.009,-.851333,-.102,-.009,-.851333,-.12,-.009,-1.13,-.12,.009,-.851333,-.12,.009,-.851333,-.102,.009,-.851333,0,-.009,-.851333,0,.009,-.851333,.12,-.009,-.851333,.12,.009,-.815333,-.102,-.009,-.815333,-.12,-.009,-.815333,-.12,.009,-.815333,-.102,.009,-.815333,0,-.009,-.815333,0,.009,-.434667,-.102,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,-.102,.009,-.434667,0,-.009,-.434667,0,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,-.102,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,-.102,.009,-.398667,0,-.009,-.398667,0,.009,-.018,-.102,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,-.102,.009,-.018,0,-.009,-.018,0,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,-.102,-.009,.018,-.12,-.009,.018,-.12,.009,.018,-.102,.009,.018,0,-.009,.018,0,.009,.398667,-.102,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,-.102,.009,.398667,0,-.009,.398667,0,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,-.102,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,-.102,.009,.434667,0,-.009,.434667,0,.009,.815333,-.102,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,-.102,.009,.815333,0,-.009,.815333,0,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.851333,-.102,-.009,.851333,-.12,-.009,.851333,-.12,.009,.851333,-.102,.009,.851333,0,-.009,.851333,0,.009,1.232,-.102,-.009,1.232,-.12,-.009,1.232,-.12,.009,1.232,-.102,.009,1.232,0,-.009,1.232,0,.009,.851333,.12,-.009,1.232,.12,-.009,1.232,.12,.009,.851333,.12,.009,1.25,-.102,-.009,1.25,-.12,-.009,1.25,-.12,.009,1.25,-.102,.009,1.25,0,-.009,1.25,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,16,9,17,16,17,18,19,20,21,19,21,10,16,18,20,16,20,19,16,19,10,16,10,9,9,8,22,9,22,17,10,21,23,10,23,11,8,13,24,8,24,22,11,23,25,11,25,14,13,14,25,13,25,24,22,24,25,22,25,23,18,17,26,18,26,27,20,28,29,20,29,21,18,27,28,18,28,20,17,22,30,17,30,26,21,29,31,21,31,23,22,23,31,22,31,30,27,26,32,27,32,33,28,34,35,28,35,29,27,33,34,27,34,28,26,30,36,26,36,32,29,35,37,29,37,31,30,38,39,30,39,36,31,37,40,31,40,41,38,41,40,38,40,39,30,31,41,30,41,38,36,39,40,36,40,37,33,32,42,33,42,43,34,44,45,34,45,35,33,43,44,33,44,34,32,36,46,32,46,42,35,45,47,35,47,37,36,37,47,36,47,46,43,42,48,43,48,49,44,50,51,44,51,45,43,49,50,43,50,44,42,46,52,42,52,48,45,51,53,45,53,47,46,54,55,46,55,52,47,53,56,47,56,57,54,57,56,54,56,55,46,47,57,46,57,54,52,55,56,52,56,53,49,48,58,49,58,59,50,60,61,50,61,51,49,59,60,49,60,50,48,52,62,48,62,58,51,61,63,51,63,53,52,53,63,52,63,62,59,58,64,59,64,65,60,66,67,60,67,61,59,65,66,59,66,60,58,62,68,58,68,64,61,67,69,61,69,63,62,70,71,62,71,68,63,69,72,63,72,73,70,73,72,70,72,71,62,63,73,62,73,70,68,71,72,68,72,69,65,64,74,65,74,75,66,76,77,66,77,67,65,75,76,65,76,66,64,68,78,64,78,74,67,77,79,67,79,69,68,69,79,68,79,78,75,74,80,75,80,81,76,82,83,76,83,77,75,81,82,75,82,76,74,78,84,74,84,80,77,83,85,77,85,79,78,86,87,78,87,84,79,85,88,79,88,89,86,89,88,86,88,87,78,79,89,78,89,86,84,87,88,84,88,85,81,80,90,81,90,91,82,92,93,82,93,83,81,91,92,81,92,82,80,84,94,80,94,90,83,93,95,83,95,85,84,85,95,84,95,94,91,90,96,91,96,97,92,98,99,92,99,93,91,97,98,91,98,92,90,94,100,90,100,96,93,99,101,93,101,95,94,102,103,94,103,100,95,101,104,95,104,105,102,105,104,102,104,103,94,95,105,94,105,102,100,103,104,100,104,101,97,96,106,97,106,107,98,108,109,98,109,99,97,107,108,97,108,98,107,106,109,107,109,108,96,100,110,96,110,106,99,109,111,99,111,101,100,101,111,100,111,110,106,110,111,106,111,109],lengthM:2.5}},{id:"corner-plain-2",count:12,modules:3,ending:!1,lengthM:1.25,preview:{boardId:"board-913",positions:[-.625,-.12,-.009,-.625,-.102,-.009,-.607,-.102,-.009,-.607,-.12,-.009,-.625,-.12,.009,-.607,-.12,.009,-.607,-.102,.009,-.625,-.102,.009,-.625,0,-.009,-.607,0,-.009,-.607,0,.009,-.625,0,.009,-.226333,-.102,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,-.102,.009,-.226333,0,-.009,-.226333,0,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,-.102,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,-.102,.009,-.190333,0,-.009,-.190333,0,.009,.190333,-.102,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,-.102,.009,.190333,0,-.009,.190333,0,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,-.102,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,-.102,.009,.226333,0,-.009,.226333,0,.009,.505,-.102,-.009,.505,-.12,-.009,.505,-.12,.009,.505,-.102,.009,.505,0,-.009,.505,0,.009,.226333,.12,-.009,.505,.12,-.009,.505,.12,.009,.226333,.12,.009,.607,0,-.009,.607,-.102,-.009,.607,-.102,.009,.607,0,.009,.607,.12,-.009,.607,.12,.009,.625,0,-.009,.625,-.102,-.009,.625,-.102,.009,.625,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,16,19,20,16,20,17,13,12,22,13,22,23,14,24,25,14,25,15,13,23,24,13,24,14,12,16,26,12,26,22,15,25,27,15,27,17,16,17,27,16,27,26,23,22,28,23,28,29,24,30,31,24,31,25,23,29,30,23,30,24,22,26,32,22,32,28,25,31,33,25,33,27,26,34,35,26,35,32,27,33,36,27,36,37,34,37,36,34,36,35,26,27,37,26,37,34,32,35,36,32,36,33,29,28,38,29,38,39,30,40,41,30,41,31,29,39,40,29,40,30,28,32,42,28,42,38,31,41,43,31,43,33,32,33,43,32,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,45,44,47,45,47,46,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,44,48,54,44,54,55,47,56,57,47,57,49,44,55,56,44,56,47,48,51,58,48,58,54,49,57,59,49,59,52,51,52,59,51,59,58,54,58,59,54,59,57,55,54,60,55,60,61,56,62,63,56,63,57,55,61,62,55,62,56,54,57,63,54,63,60,61,60,63,61,63,62],lengthM:1.25}},{id:"corner-plain-3",count:14,modules:2,ending:!1,lengthM:.8333333333333334,preview:{boardId:"board-1058",positions:[-.416667,-.12,-.009,-.416667,-.102,-.009,-.398667,-.102,-.009,-.398667,-.12,-.009,-.416667,-.12,.009,-.398667,-.12,.009,-.398667,-.102,.009,-.416667,-.102,.009,-.416667,0,-.009,-.398667,0,-.009,-.398667,0,.009,-.416667,0,.009,-.018,-.102,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,-.102,.009,-.018,0,-.009,-.018,0,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,-.102,-.009,.018,-.12,-.009,.018,-.12,.009,.018,-.102,.009,.018,0,-.009,.018,0,.009,.296667,-.102,-.009,.296667,-.12,-.009,.296667,-.12,.009,.296667,-.102,.009,.296667,0,-.009,.296667,0,.009,.018,.12,-.009,.296667,.12,-.009,.296667,.12,.009,.018,.12,.009,.398667,0,-.009,.398667,-.102,-.009,.398667,-.102,.009,.398667,0,.009,.398667,.12,-.009,.398667,.12,.009,.416667,0,-.009,.416667,-.102,-.009,.416667,-.102,.009,.416667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,16,19,20,16,20,17,13,12,22,13,22,23,14,24,25,14,25,15,13,23,24,13,24,14,12,16,26,12,26,22,15,25,27,15,27,17,16,17,27,16,27,26,23,22,28,23,28,29,24,30,31,24,31,25,23,29,30,23,30,24,29,28,31,29,31,30,22,26,32,22,32,28,25,31,33,25,33,27,26,34,35,26,35,32,27,33,36,27,36,37,34,37,36,34,36,35,26,27,37,26,37,34,28,32,38,28,38,39,31,40,41,31,41,33,28,39,40,28,40,31,32,35,42,32,42,38,33,41,43,33,43,36,35,36,43,35,43,42,38,42,43,38,43,41,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,38,41,47,38,47,44,45,44,47,45,47,46],lengthM:.8333333134651184}}],fitted:{count:0,examples:[]}},{id:"inset-slotted",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, z\u0119by",count:9,variants:[{id:"inset-slotted-1",count:2,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-1045",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,-1.232,-.12,-.009,-1.25,-.12,.009,-1.232,-.12,.009,-1.232,0,.009,-1.25,0,.009,-1.13,0,-.009,-1.13,-.12,-.009,-1.13,-.12,.009,-1.13,0,.009,-1.232,.102,-.009,-1.13,.102,-.009,-1.13,.102,.009,-1.232,.102,.009,-1.232,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-1.232,.12,.009,-1.01,0,-.009,-1.01,-.12,-.009,-1.01,-.12,.009,-1.01,0,.009,-1.01,.102,-.009,-1.01,.102,.009,-.851333,0,-.009,-.851333,-.12,-.009,-.851333,-.12,.009,-.851333,0,.009,-.851333,.102,-.009,-.851333,.102,.009,-1.01,.12,-.009,-.851333,.12,-.009,-.851333,.12,.009,-1.01,.12,.009,-.815333,0,-.009,-.815333,-.12,-.009,-.815333,-.12,.009,-.815333,0,.009,-.434667,0,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,0,.009,-.815333,.102,-.009,-.434667,.102,-.009,-.434667,.102,.009,-.815333,.102,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,0,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,0,.009,-.018,0,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,0,.009,-.398667,.102,-.009,-.018,.102,-.009,-.018,.102,.009,-.398667,.102,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,0,-.009,.018,-.12,-.009,.018,-.12,.009,.018,0,.009,.398667,0,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,0,.009,.018,.102,-.009,.398667,.102,-.009,.398667,.102,.009,.018,.102,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,0,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,0,.009,.815333,0,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,0,.009,.434667,.102,-.009,.815333,.102,-.009,.815333,.102,.009,.434667,.102,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.851333,0,-.009,.851333,-.12,-.009,.851333,-.12,.009,.851333,0,.009,1.232,0,-.009,1.232,-.12,-.009,1.232,-.12,.009,1.232,0,.009,.851333,.102,-.009,1.232,.102,-.009,1.232,.102,.009,.851333,.102,.009,.851333,.12,-.009,1.232,.12,-.009,1.232,.12,.009,.851333,.12,.009,1.25,0,-.009,1.25,-.12,-.009,1.25,-.12,.009,1.25,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,104,101,104,105,102,106,107,102,107,103,101,105,106,101,106,102,100,108,109,100,109,104,103,107,110,103,110,111,100,103,111,100,111,108,104,109,110,104,110,107,108,112,113,108,113,109,111,110,114,111,114,115,112,115,114,112,114,113,108,111,115,108,115,112,109,113,114,109,114,110,105,104,116,105,116,117,106,118,119,106,119,107,105,117,118,105,118,106,104,107,119,104,119,116,117,116,119,117,119,118],lengthM:2.5}},{id:"inset-slotted-2",count:2,modules:3,ending:!1,lengthM:1.25,preview:{boardId:"board-1047",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,-.607,-.12,-.009,-.625,-.12,.009,-.607,-.12,.009,-.607,0,.009,-.625,0,.009,-.226333,0,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,0,.009,-.607,.102,-.009,-.226333,.102,-.009,-.226333,.102,.009,-.607,.102,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,0,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,0,.009,.190333,0,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,0,.009,-.190333,.102,-.009,.190333,.102,-.009,.190333,.102,.009,-.190333,.102,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,0,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,0,.009,.385,0,-.009,.385,-.12,-.009,.385,-.12,.009,.385,0,.009,.226333,.102,-.009,.385,.102,-.009,.385,.102,.009,.226333,.102,.009,.226333,.12,-.009,.385,.12,-.009,.385,.12,.009,.226333,.12,.009,.505,0,-.009,.505,-.12,-.009,.505,-.12,.009,.505,0,.009,.505,.102,-.009,.505,.102,.009,.607,0,-.009,.607,-.12,-.009,.607,-.12,.009,.607,0,.009,.607,.102,-.009,.607,.102,.009,.505,.12,-.009,.607,.12,-.009,.607,.12,.009,.505,.12,.009,.625,0,-.009,.625,-.12,-.009,.625,-.12,.009,.625,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,8,13,14,8,14,11,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,11,23,8,23,20,21,20,24,21,24,25,22,26,27,22,27,23,21,25,26,21,26,22,20,28,29,20,29,24,23,27,30,23,30,31,20,23,31,20,31,28,24,29,30,24,30,27,28,32,33,28,33,29,31,30,34,31,34,35,32,35,34,32,34,33,28,31,35,28,35,32,29,33,34,29,34,30,25,24,36,25,36,37,26,38,39,26,39,27,25,37,38,25,38,26,24,27,39,24,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,45,56,40,56,52,43,55,57,43,57,46,45,46,57,45,57,56,53,52,58,53,58,59,54,60,61,54,61,55,53,59,60,53,60,54,52,56,62,52,62,58,55,61,63,55,63,57,58,62,63,58,63,61,56,64,65,56,65,62,57,63,66,57,66,67,64,67,66,64,66,65,56,57,67,56,67,64,62,65,66,62,66,63,59,58,68,59,68,69,60,70,71,60,71,61,59,69,70,59,70,60,58,61,71,58,71,68,69,68,71,69,71,70],lengthM:1.25}}],fitted:{count:5,examples:[{boardId:"board-997",positions:[-1.050667,-.12,-.009,-1.050667,0,-.009,-1.032667,0,-.009,-1.032667,-.12,-.009,-1.050667,-.12,.009,-1.032667,-.12,.009,-1.032667,0,.009,-1.050667,0,.009,-.930667,0,-.009,-.930667,-.12,-.009,-.930667,-.12,.009,-.930667,0,.009,-1.032667,.102,-.009,-.930667,.102,-.009,-.930667,.102,.009,-1.032667,.102,.009,-1.032667,.12,-.009,-.930667,.12,-.009,-.930667,.12,.009,-1.032667,.12,.009,-.810667,0,-.009,-.810667,-.12,-.009,-.810667,-.12,.009,-.810667,0,.009,-.810667,.102,-.009,-.810667,.102,.009,-.652,0,-.009,-.652,-.12,-.009,-.652,-.12,.009,-.652,0,.009,-.652,.102,-.009,-.652,.102,.009,-.810667,.12,-.009,-.652,.12,-.009,-.652,.12,.009,-.810667,.12,.009,-.616,0,-.009,-.616,-.12,-.009,-.616,-.12,.009,-.616,0,.009,-.235333,0,-.009,-.235333,-.12,-.009,-.235333,-.12,.009,-.235333,0,.009,-.616,.102,-.009,-.235333,.102,-.009,-.235333,.102,.009,-.616,.102,.009,-.616,.12,-.009,-.235333,.12,-.009,-.235333,.12,.009,-.616,.12,.009,-.199333,0,-.009,-.199333,-.12,-.009,-.199333,-.12,.009,-.199333,0,.009,.181333,0,-.009,.181333,-.12,-.009,.181333,-.12,.009,.181333,0,.009,-.199333,.102,-.009,.181333,.102,-.009,.181333,.102,.009,-.199333,.102,.009,-.199333,.12,-.009,.181333,.12,-.009,.181333,.12,.009,-.199333,.12,.009,.217333,0,-.009,.217333,-.12,-.009,.217333,-.12,.009,.217333,0,.009,.598,0,-.009,.598,-.12,-.009,.598,-.12,.009,.598,0,.009,.217333,.102,-.009,.598,.102,-.009,.598,.102,.009,.217333,.102,.009,.217333,.12,-.009,.598,.12,-.009,.598,.12,.009,.217333,.12,.009,.634,0,-.009,.634,-.12,-.009,.634,-.12,.009,.634,0,.009,1.014667,0,-.009,1.014667,-.12,-.009,1.014667,-.12,.009,1.014667,0,.009,.634,.102,-.009,1.014667,.102,-.009,1.014667,.102,.009,.634,.102,.009,.634,.12,-.009,1.014667,.12,-.009,1.014667,.12,.009,.634,.12,.009,1.050667,0,-.009,1.050667,-.12,-.009,1.050667,-.12,.009,1.050667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,103,101,103,102],lengthM:2.1013333797454834},{boardId:"board-1017",positions:[-1.050667,-.12,-.009,-1.050667,0,-.009,-1.032667,0,-.009,-1.032667,-.12,-.009,-1.050667,-.12,.009,-1.032667,-.12,.009,-1.032667,0,.009,-1.050667,0,.009,-.930667,0,-.009,-.930667,-.12,-.009,-.930667,-.12,.009,-.930667,0,.009,-1.032667,.102,-.009,-.930667,.102,-.009,-.930667,.102,.009,-1.032667,.102,.009,-1.032667,.12,-.009,-.930667,.12,-.009,-.930667,.12,.009,-1.032667,.12,.009,-.810667,0,-.009,-.810667,-.12,-.009,-.810667,-.12,.009,-.810667,0,.009,-.810667,.102,-.009,-.810667,.102,.009,-.652,0,-.009,-.652,-.12,-.009,-.652,-.12,.009,-.652,0,.009,-.652,.102,-.009,-.652,.102,.009,-.810667,.12,-.009,-.652,.12,-.009,-.652,.12,.009,-.810667,.12,.009,-.616,0,-.009,-.616,-.12,-.009,-.616,-.12,.009,-.616,0,.009,-.235333,0,-.009,-.235333,-.12,-.009,-.235333,-.12,.009,-.235333,0,.009,-.616,.102,-.009,-.235333,.102,-.009,-.235333,.102,.009,-.616,.102,.009,-.616,.12,-.009,-.235333,.12,-.009,-.235333,.12,.009,-.616,.12,.009,-.199333,0,-.009,-.199333,-.12,-.009,-.199333,-.12,.009,-.199333,0,.009,.181333,0,-.009,.181333,-.12,-.009,.181333,-.12,.009,.181333,0,.009,-.199333,.102,-.009,.181333,.102,-.009,.181333,.102,.009,-.199333,.102,.009,-.199333,.12,-.009,.181333,.12,-.009,.181333,.12,.009,-.199333,.12,.009,.217333,0,-.009,.217333,-.12,-.009,.217333,-.12,.009,.217333,0,.009,.598,0,-.009,.598,-.12,-.009,.598,-.12,.009,.598,0,.009,.217333,.102,-.009,.598,.102,-.009,.598,.102,.009,.217333,.102,.009,.217333,.12,-.009,.598,.12,-.009,.598,.12,.009,.217333,.12,.009,.634,0,-.009,.634,-.12,-.009,.634,-.12,.009,.634,0,.009,1.014667,0,-.009,1.014667,-.12,-.009,1.014667,-.12,.009,1.014667,0,.009,.634,.102,-.009,1.014667,.102,-.009,1.014667,.102,.009,.634,.102,.009,.634,.12,-.009,1.014667,.12,-.009,1.014667,.12,.009,.634,.12,.009,1.050667,0,-.009,1.050667,-.12,-.009,1.050667,-.12,.009,1.050667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,103,101,103,102],lengthM:2.1013333797454834},{boardId:"board-1037",positions:[-1.050667,-.12,-.009,-1.050667,0,-.009,-1.032667,0,-.009,-1.032667,-.12,-.009,-1.050667,-.12,.009,-1.032667,-.12,.009,-1.032667,0,.009,-1.050667,0,.009,-.930667,0,-.009,-.930667,-.12,-.009,-.930667,-.12,.009,-.930667,0,.009,-1.032667,.102,-.009,-.930667,.102,-.009,-.930667,.102,.009,-1.032667,.102,.009,-1.032667,.12,-.009,-.930667,.12,-.009,-.930667,.12,.009,-1.032667,.12,.009,-.810667,0,-.009,-.810667,-.12,-.009,-.810667,-.12,.009,-.810667,0,.009,-.810667,.102,-.009,-.810667,.102,.009,-.652,0,-.009,-.652,-.12,-.009,-.652,-.12,.009,-.652,0,.009,-.652,.102,-.009,-.652,.102,.009,-.810667,.12,-.009,-.652,.12,-.009,-.652,.12,.009,-.810667,.12,.009,-.616,0,-.009,-.616,-.12,-.009,-.616,-.12,.009,-.616,0,.009,-.235333,0,-.009,-.235333,-.12,-.009,-.235333,-.12,.009,-.235333,0,.009,-.616,.102,-.009,-.235333,.102,-.009,-.235333,.102,.009,-.616,.102,.009,-.616,.12,-.009,-.235333,.12,-.009,-.235333,.12,.009,-.616,.12,.009,-.199333,0,-.009,-.199333,-.12,-.009,-.199333,-.12,.009,-.199333,0,.009,.181333,0,-.009,.181333,-.12,-.009,.181333,-.12,.009,.181333,0,.009,-.199333,.102,-.009,.181333,.102,-.009,.181333,.102,.009,-.199333,.102,.009,-.199333,.12,-.009,.181333,.12,-.009,.181333,.12,.009,-.199333,.12,.009,.217333,0,-.009,.217333,-.12,-.009,.217333,-.12,.009,.217333,0,.009,.598,0,-.009,.598,-.12,-.009,.598,-.12,.009,.598,0,.009,.217333,.102,-.009,.598,.102,-.009,.598,.102,.009,.217333,.102,.009,.217333,.12,-.009,.598,.12,-.009,.598,.12,.009,.217333,.12,.009,.634,0,-.009,.634,-.12,-.009,.634,-.12,.009,.634,0,.009,1.014667,0,-.009,1.014667,-.12,-.009,1.014667,-.12,.009,1.014667,0,.009,.634,.102,-.009,1.014667,.102,-.009,1.014667,.102,.009,.634,.102,.009,.634,.12,-.009,1.014667,.12,-.009,1.014667,.12,.009,.634,.12,.009,1.050667,0,-.009,1.050667,-.12,-.009,1.050667,-.12,.009,1.050667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,103,101,103,102],lengthM:2.1013333797454834}]}},{id:"inset-plain",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, pe\u0142na kraw\u0119d\u017A",count:19,variants:[{id:"inset-plain-1",count:12,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-1057",positions:[-1.25,-.12,-.009,-1.25,-.102,-.009,-1.232,-.102,-.009,-1.232,-.12,-.009,-1.25,-.12,.009,-1.232,-.12,.009,-1.232,-.102,.009,-1.25,-.102,.009,-1.25,0,-.009,-1.232,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.13,-.102,-.009,-1.13,-.12,-.009,-1.13,-.12,.009,-1.13,-.102,.009,-1.13,0,-.009,-1.13,0,.009,-1.232,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-1.232,.12,.009,-1.01,0,-.009,-1.01,-.102,-.009,-1.01,-.102,.009,-1.01,0,.009,-1.01,.12,-.009,-1.01,.12,.009,-1.01,-.12,-.009,-.851333,-.102,-.009,-.851333,-.12,-.009,-1.01,-.12,.009,-.851333,-.12,.009,-.851333,-.102,.009,-.851333,0,-.009,-.851333,0,.009,-.851333,.12,-.009,-.851333,.12,.009,-.815333,-.102,-.009,-.815333,-.12,-.009,-.815333,-.12,.009,-.815333,-.102,.009,-.815333,0,-.009,-.815333,0,.009,-.434667,-.102,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,-.102,.009,-.434667,0,-.009,-.434667,0,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,-.102,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,-.102,.009,-.398667,0,-.009,-.398667,0,.009,-.018,-.102,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,-.102,.009,-.018,0,-.009,-.018,0,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,-.102,-.009,.018,-.12,-.009,.018,-.12,.009,.018,-.102,.009,.018,0,-.009,.018,0,.009,.398667,-.102,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,-.102,.009,.398667,0,-.009,.398667,0,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,-.102,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,-.102,.009,.434667,0,-.009,.434667,0,.009,.815333,-.102,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,-.102,.009,.815333,0,-.009,.815333,0,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.851333,-.102,-.009,.851333,-.12,-.009,.851333,-.12,.009,.851333,-.102,.009,.851333,0,-.009,.851333,0,.009,1.232,-.102,-.009,1.232,-.12,-.009,1.232,-.12,.009,1.232,-.102,.009,1.232,0,-.009,1.232,0,.009,.851333,.12,-.009,1.232,.12,-.009,1.232,.12,.009,.851333,.12,.009,1.25,-.102,-.009,1.25,-.12,-.009,1.25,-.12,.009,1.25,-.102,.009,1.25,0,-.009,1.25,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,13,12,15,13,15,14,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,12,16,22,12,22,23,15,24,25,15,25,17,12,23,24,12,24,15,16,19,26,16,26,22,17,25,27,17,27,20,19,20,27,19,27,26,28,23,29,28,29,30,31,32,33,31,33,24,28,30,32,28,32,31,28,31,24,28,24,23,23,22,34,23,34,29,24,33,35,24,35,25,22,26,36,22,36,34,25,35,37,25,37,27,26,27,37,26,37,36,34,36,37,34,37,35,30,29,38,30,38,39,32,40,41,32,41,33,30,39,40,30,40,32,29,34,42,29,42,38,33,41,43,33,43,35,34,35,43,34,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,48,51,52,48,52,49,45,44,54,45,54,55,46,56,57,46,57,47,45,55,56,45,56,46,44,48,58,44,58,54,47,57,59,47,59,49,48,49,59,48,59,58,55,54,60,55,60,61,56,62,63,56,63,57,55,61,62,55,62,56,54,58,64,54,64,60,57,63,65,57,65,59,58,66,67,58,67,64,59,65,68,59,68,69,66,69,68,66,68,67,58,59,69,58,69,66,64,67,68,64,68,65,61,60,70,61,70,71,62,72,73,62,73,63,61,71,72,61,72,62,60,64,74,60,74,70,63,73,75,63,75,65,64,65,75,64,75,74,71,70,76,71,76,77,72,78,79,72,79,73,71,77,78,71,78,72,70,74,80,70,80,76,73,79,81,73,81,75,74,82,83,74,83,80,75,81,84,75,84,85,82,85,84,82,84,83,74,75,85,74,85,82,80,83,84,80,84,81,77,76,86,77,86,87,78,88,89,78,89,79,77,87,88,77,88,78,76,80,90,76,90,86,79,89,91,79,91,81,80,81,91,80,91,90,87,86,92,87,92,93,88,94,95,88,95,89,87,93,94,87,94,88,86,90,96,86,96,92,89,95,97,89,97,91,90,98,99,90,99,96,91,97,100,91,100,101,98,101,100,98,100,99,90,91,101,90,101,98,96,99,100,96,100,97,93,92,102,93,102,103,94,104,105,94,105,95,93,103,104,93,104,94,92,96,106,92,106,102,95,105,107,95,107,97,96,97,107,96,107,106,103,102,108,103,108,109,104,110,111,104,111,105,103,109,110,103,110,104,102,106,112,102,112,108,105,111,113,105,113,107,106,114,115,106,115,112,107,113,116,107,116,117,114,117,116,114,116,115,106,107,117,106,117,114,112,115,116,112,116,113,109,108,118,109,118,119,110,120,121,110,121,111,109,119,120,109,120,110,119,118,121,119,121,120,108,112,122,108,122,118,111,121,123,111,123,113,112,113,123,112,123,122,118,122,123,118,123,121],lengthM:2.5}},{id:"inset-plain-2",count:5,modules:2,ending:!1,lengthM:.8333333333333334,preview:{boardId:"board-1135",positions:[-.398667,-.12,-.009,-.398667,-.102,-.009,-.416667,-.102,-.009,-.416667,-.12,-.009,-.416667,-.102,.009,-.398667,-.102,.009,-.398667,-.12,.009,-.416667,-.12,.009,-.398667,0,-.009,-.416667,0,-.009,-.416667,0,.009,-.398667,0,.009,-.018,-.12,-.009,-.018,-.102,-.009,-.018,-.102,.009,-.018,-.12,.009,-.018,0,-.009,-.018,0,.009,-.018,.12,-.009,-.398667,.12,-.009,-.398667,.12,.009,-.018,.12,.009,.018,-.12,-.009,.018,-.102,-.009,.018,-.102,.009,.018,-.12,.009,.018,0,-.009,.018,0,.009,.176667,-.12,-.009,.176667,-.102,-.009,.176667,-.102,.009,.176667,-.12,.009,.176667,0,-.009,.176667,0,.009,.176667,.12,-.009,.018,.12,-.009,.018,.12,.009,.176667,.12,.009,.296667,-.102,-.009,.296667,0,-.009,.296667,0,.009,.296667,-.102,.009,.296667,.12,-.009,.296667,.12,.009,.398667,-.12,-.009,.398667,-.102,-.009,.296667,-.12,-.009,.398667,-.102,.009,.398667,-.12,.009,.296667,-.12,.009,.398667,0,-.009,.398667,0,.009,.398667,.12,-.009,.398667,.12,.009,.416667,-.12,-.009,.416667,-.102,-.009,.416667,-.102,.009,.416667,-.12,.009,.416667,0,-.009,.416667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,2,4,7,2,7,3,1,8,9,1,9,2,10,11,5,10,5,4,8,11,10,8,10,9,9,10,4,9,4,2,12,13,1,12,1,0,5,14,15,5,15,6,6,15,12,6,12,0,13,16,8,13,8,1,11,17,14,11,14,5,16,18,19,16,19,8,20,21,17,20,17,11,18,21,20,18,20,19,19,20,11,19,11,8,17,21,18,17,18,16,22,23,13,22,13,12,14,24,25,14,25,15,15,25,22,15,22,12,23,26,16,23,16,13,17,27,24,17,24,14,26,27,17,26,17,16,28,29,23,28,23,22,24,30,31,24,31,25,25,31,28,25,28,22,31,30,29,31,29,28,29,32,26,29,26,23,27,33,30,27,30,24,32,34,35,32,35,26,36,37,33,36,33,27,34,37,36,34,36,35,35,36,27,35,27,26,38,39,32,38,32,29,33,40,41,33,41,30,30,41,38,30,38,29,39,42,34,39,34,32,37,43,40,37,40,33,42,43,37,42,37,34,44,45,38,44,38,46,41,47,48,41,48,49,49,48,44,49,44,46,38,41,49,38,49,46,45,50,39,45,39,38,40,51,47,40,47,41,50,52,42,50,42,39,43,53,51,43,51,40,52,53,43,52,43,42,51,53,52,51,52,50,54,55,45,54,45,44,47,56,57,47,57,48,48,57,54,48,54,44,57,56,55,57,55,54,55,58,50,55,50,45,51,59,56,51,56,47,58,59,51,58,51,50,56,59,58,56,58,55],lengthM:.8333333134651184}}],fitted:{count:2,examples:[{boardId:"board-1076",positions:[-.12,-.12,-.009,-.12,-.102,-.009,-.102,-.102,-.009,-.102,-.12,-.009,-.12,-.12,.009,-.102,-.12,.009,-.102,-.102,.009,-.12,-.102,.009,-.12,0,-.009,-.102,0,-.009,-.102,0,.009,-.12,0,.009,0,-.102,-.009,0,-.12,-.009,0,-.12,.009,0,-.102,.009,0,0,-.009,0,0,.009,-.102,.12,-.009,0,.12,-.009,0,.12,.009,-.102,.12,.009,.12,0,-.009,.12,-.102,-.009,.12,-.102,.009,.12,0,.009,.12,.12,-.009,.12,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,13,12,15,13,15,14,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,12,16,22,12,22,23,15,24,25,15,25,17,12,23,24,12,24,15,23,22,25,23,25,24,16,19,26,16,26,22,17,25,27,17,27,20,19,20,27,19,27,26,22,26,27,22,27,25],lengthM:.23999999463558197},{boardId:"board-1096",positions:[-.12,-.12,-.009,-.12,-.102,-.009,-.102,-.102,-.009,-.102,-.12,-.009,-.12,-.12,.009,-.102,-.12,.009,-.102,-.102,.009,-.12,-.102,.009,-.12,0,-.009,-.102,0,-.009,-.102,0,.009,-.12,0,.009,0,-.102,-.009,0,-.12,-.009,0,-.12,.009,0,-.102,.009,0,0,-.009,0,0,.009,-.102,.12,-.009,0,.12,-.009,0,.12,.009,-.102,.12,.009,.12,0,-.009,.12,-.102,-.009,.12,-.102,.009,.12,0,.009,.12,.12,-.009,.12,.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,13,12,15,13,15,14,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,12,16,22,12,22,23,15,24,25,15,25,17,12,23,24,12,24,15,23,22,25,23,25,24,16,19,26,16,26,22,17,25,27,17,27,20,19,20,27,19,27,26,22,26,27,22,27,25],lengthM:.23999999463558197}]}},{id:"combined",name:"\u0141\u0105czeniowa \xB7 dwa wybrania",count:7,variants:[{id:"combined-1",count:7,modules:6,ending:!1,lengthM:2.5,preview:{boardId:"board-1113",positions:[-1.232,-.12,-.009,-1.232,0,-.009,-1.25,0,-.009,-1.25,-.12,-.009,-1.25,0,.009,-1.232,0,.009,-1.232,-.12,.009,-1.25,-.12,.009,-1.13,-.12,-.009,-1.13,0,-.009,-1.13,0,.009,-1.13,-.12,.009,-1.13,.102,-.009,-1.232,.102,-.009,-1.232,.102,.009,-1.13,.102,.009,-1.13,.12,-.009,-1.232,.12,-.009,-1.232,.12,.009,-1.13,.12,.009,-1.01,-.12,-.009,-1.01,0,-.009,-1.01,0,.009,-1.01,-.12,.009,-1.01,.102,-.009,-1.01,.102,.009,-.851333,-.12,-.009,-.851333,0,-.009,-.851333,0,.009,-.851333,-.12,.009,-.851333,.102,-.009,-.851333,.102,.009,-.851333,.12,-.009,-1.01,.12,-.009,-1.01,.12,.009,-.851333,.12,.009,-.815333,-.12,-.009,-.815333,0,-.009,-.815333,0,.009,-.815333,-.12,.009,-.434667,-.12,-.009,-.434667,0,-.009,-.434667,0,.009,-.434667,-.12,.009,-.434667,.102,-.009,-.815333,.102,-.009,-.815333,.102,.009,-.434667,.102,.009,-.434667,.12,-.009,-.815333,.12,-.009,-.815333,.12,.009,-.434667,.12,.009,-.398667,-.12,-.009,-.398667,0,-.009,-.398667,0,.009,-.398667,-.12,.009,-.018,-.12,-.009,-.018,0,-.009,-.018,0,.009,-.018,-.12,.009,-.018,.102,-.009,-.398667,.102,-.009,-.398667,.102,.009,-.018,.102,.009,-.018,.12,-.009,-.398667,.12,-.009,-.398667,.12,.009,-.018,.12,.009,.018,-.12,-.009,.018,0,-.009,.018,0,.009,.018,-.12,.009,.398667,-.12,-.009,.398667,0,-.009,.398667,0,.009,.398667,-.12,.009,.398667,.102,-.009,.018,.102,-.009,.018,.102,.009,.398667,.102,.009,.398667,.12,-.009,.018,.12,-.009,.018,.12,.009,.398667,.12,.009,.434667,-.12,-.009,.434667,0,-.009,.434667,0,.009,.434667,-.12,.009,.815333,-.12,-.009,.815333,0,-.009,.815333,0,.009,.815333,-.12,.009,.815333,.102,-.009,.434667,.102,-.009,.434667,.102,.009,.815333,.102,.009,.815333,.12,-.009,.434667,.12,-.009,.434667,.12,.009,.815333,.12,.009,.851333,-.12,-.009,.851333,0,-.009,.851333,0,.009,.851333,-.12,.009,1.13,-.12,-.009,1.13,0,-.009,1.13,0,.009,1.13,-.12,.009,1.13,.102,-.009,.851333,.102,-.009,.851333,.102,.009,1.13,.102,.009,1.13,.12,-.009,.851333,.12,-.009,.851333,.12,.009,1.13,.12,.009,1.232,-.12,-.009,1.232,0,-.009,1.232,0,.009,1.232,-.12,.009,1.232,.102,-.009,1.232,.102,.009,1.25,-.12,-.009,1.25,0,-.009,1.25,0,.009,1.25,-.12,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,7,6,0,7,0,3,1,5,4,1,4,2,2,4,7,2,7,3,8,9,1,8,1,0,5,10,11,5,11,6,6,11,8,6,8,0,9,12,13,9,13,1,14,15,10,14,10,5,13,14,5,13,5,1,12,16,17,12,17,13,18,19,15,18,15,14,16,19,18,16,18,17,17,18,14,17,14,13,15,19,16,15,16,12,20,21,9,20,9,8,10,22,23,10,23,11,11,23,20,11,20,8,21,24,12,21,12,9,15,25,22,15,22,10,24,25,15,24,15,12,26,27,21,26,21,20,22,28,29,22,29,23,23,29,26,23,26,20,27,30,24,27,24,21,25,31,28,25,28,22,28,31,30,28,30,27,30,32,33,30,33,24,34,35,31,34,31,25,32,35,34,32,34,33,33,34,25,33,25,24,31,35,32,31,32,30,36,37,27,36,27,26,28,38,39,28,39,29,29,39,36,29,36,26,37,38,28,37,28,27,40,41,37,40,37,36,38,42,43,38,43,39,39,43,40,39,40,36,41,44,45,41,45,37,46,47,42,46,42,38,45,46,38,45,38,37,42,47,44,42,44,41,44,48,49,44,49,45,50,51,47,50,47,46,48,51,50,48,50,49,49,50,46,49,46,45,47,51,48,47,48,44,52,53,41,52,41,40,42,54,55,42,55,43,43,55,52,43,52,40,53,54,42,53,42,41,56,57,53,56,53,52,54,58,59,54,59,55,55,59,56,55,56,52,57,60,61,57,61,53,62,63,58,62,58,54,61,62,54,61,54,53,58,63,60,58,60,57,60,64,65,60,65,61,66,67,63,66,63,62,64,67,66,64,66,65,65,66,62,65,62,61,63,67,64,63,64,60,68,69,57,68,57,56,58,70,71,58,71,59,59,71,68,59,68,56,69,70,58,69,58,57,72,73,69,72,69,68,70,74,75,70,75,71,71,75,72,71,72,68,73,76,77,73,77,69,78,79,74,78,74,70,77,78,70,77,70,69,74,79,76,74,76,73,76,80,81,76,81,77,82,83,79,82,79,78,80,83,82,80,82,81,81,82,78,81,78,77,79,83,80,79,80,76,84,85,73,84,73,72,74,86,87,74,87,75,75,87,84,75,84,72,85,86,74,85,74,73,88,89,85,88,85,84,86,90,91,86,91,87,87,91,88,87,88,84,89,92,93,89,93,85,94,95,90,94,90,86,93,94,86,93,86,85,90,95,92,90,92,89,92,96,97,92,97,93,98,99,95,98,95,94,96,99,98,96,98,97,97,98,94,97,94,93,95,99,96,95,96,92,100,101,89,100,89,88,90,102,103,90,103,91,91,103,100,91,100,88,101,102,90,101,90,89,104,105,101,104,101,100,102,106,107,102,107,103,103,107,104,103,104,100,105,108,109,105,109,101,110,111,106,110,106,102,109,110,102,109,102,101,108,112,113,108,113,109,114,115,111,114,111,110,112,115,114,112,114,113,113,114,110,113,110,109,111,115,112,111,112,108,116,117,105,116,105,104,106,118,119,106,119,107,107,119,116,107,116,104,117,120,108,117,108,105,111,121,118,111,118,106,120,121,111,120,111,108,118,121,120,118,120,117,122,123,117,122,117,116,118,124,125,118,125,119,119,125,122,119,122,116,123,124,118,123,118,117,125,124,123,125,123,122],lengthM:2.5}}],fitted:{count:0,examples:[]}}]};var gr=i=>`${i.toLocaleString("pl-PL")} szt.`,wc=i=>`${i.toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function br(i){let e=i.families[0];return{family:e.id,variant:e.variants[0]?.id||"fitted"}}function Wh(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n,fitted:e.variant==="fitted"}}function Xh(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var zt=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function qh(i,e,t){let n=br(e);i.classList.add("parts-catalogue");let r=zt("div","parts-catalogue-heading");r.append(zt("h4",null,"Rodzaje desek"),zt("span","parts-catalogue-total",gr(e.totalBoards)));let s=zt("p","parts-catalogue-lead","Wybierz rodzaj, a potem d\u0142ugo\u015B\u0107 deski."),o=zt("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Rodzaje desek");let a=zt("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","D\u0142ugo\u015Bci i ilo\u015Bci");let l=zt("div","parts-variant-heading"),c=zt("h5"),d=zt("span");l.append(c,d);let u=zt("p","parts-variant-note");u.setAttribute("aria-live","polite"),i.replaceChildren(l,a,u,r,s,o);function h(p,_=!0){n.variant=p;for(let g of a.children)g.setAttribute("aria-pressed",String(g.dataset.partsVariant===p));u.textContent=p==="fitted"?"Docinki przy otworach i kraw\u0119dziach. W 3D pokazujemy przyk\u0142ady.":"",u.hidden=!u.textContent,t({...n},_)}function f(p,_=!0){n.family=p;let g=e.families.find(w=>w.id===p);for(let w of o.children)w.setAttribute("aria-pressed",String(w.dataset.partsFamily===p));c.textContent=g.name,d.textContent=`${gr(g.count)} \u0142\u0105cznie`;let m=g.variants.map(w=>{let S=zt("button","parts-variant");return S.type="button",S.dataset.partsVariant=w.id,S.append(zt("span",null,wc(w.lengthM)),zt("strong",null,gr(w.count))),S.addEventListener("click",()=>h(w.id)),S});if(g.fitted.count){let w=zt("button","parts-variant parts-fitted");w.type="button",w.dataset.partsVariant="fitted",w.append(zt("span",null,"Docinki do projektu"),zt("strong",null,gr(g.fitted.count))),w.addEventListener("click",()=>h("fitted")),m.push(w)}a.replaceChildren(...m),h(g.variants[0]?.id||"fitted",_)}for(let p of e.families){let _=zt("button","parts-family");_.type="button",_.dataset.partsFamily=p.id;let g=zt("span","parts-family-count");g.append(zt("strong",null,gr(p.count)),zt("small",null,"\u0142\u0105cznie")),_.append(zt("span","parts-family-name",p.name),g),_.addEventListener("click",()=>f(p.id)),o.append(_)}return f(n.family,!1),{getSelection:()=>({...n})}}function Yh(i,e=br(i)){let{family:t,variant:n,fitted:r}=Wh(i,e),s=new ft,o=r?t.fitted.examples:[n.preview],a=new Gt({color:"#43948c",roughness:.75,side:tn,flatShading:!0}),l=new un({color:"#66543a",transparent:!0,opacity:.45});return o.forEach((c,d)=>{let u=new Mt;u.setAttribute("position",new mt(c.positions,3)),u.setIndex(c.indices),u.computeVertexNormals();let h=new bt(u,a);h.add(new Sn(new Cn(u,30),l)),h.position.y=r?((o.length-1)/2-d)*.4:0,s.add(h)}),{root:s,direction:new P(.12,.65,3),annotation:r?`Przyk\u0142ady docinek \xB7 ${t.name.toLowerCase()}`:`${t.name} \xB7 ${wc(n.lengthM)} \xB7 ${gr(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:r?null:n.count,fittedCount:t.fitted.count,samples:o.map(c=>c.boardId),lengthM:r?null:n.lengthM,mode:r?"examples":"exact",geometrySha256:i.geometrySha256})}}var Tc=yo,Ec=(...i)=>new P(...i),Ac=[{title:"Punktem wyj\u015Bcia jest projekt budynku.",text:"Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od uk\u0142adu pomieszcze\u0144, wymiar\xF3w i za\u0142o\u017Ce\u0144 konkretnej inwestycji.",label:"Na wej\u015Bciu",items:["Rzuty kondygnacji","Wymiary i wysoko\u015Bci","Za\u0142o\u017Cenia inwestycji"]},{title:"Model AI Combstruct automatycznie generuje projekt konstrukcji.",text:"Na podstawie rzut\xF3w budynku dobiera uk\u0142ad desek i po\u0142\u0105cze\u0144. Pod\u0142oga, \u015Bciany, stropy i dach powstaj\u0105 we wsp\xF3lnym modelu 3D \u2014 z identyfikatorem i miejscem monta\u017Cu ka\u017Cdej cz\u0119\u015Bci.",label:"W jednym modelu",items:["Konstrukcja dopasowana do modu\u0142\xF3w systemu","Sp\xF3jny uk\u0142ad element\xF3w i po\u0142\u0105cze\u0144","Dane do produkcji i monta\u017Cu"]},{title:"Dok\u0142adnie wiadomo, co wyprodukowa\u0107.",text:"Z modelu powstaje precyzyjne zam\xF3wienie: rodzaje desek, wymiary, ilo\u015Bci i oznaczenia. Te same dane prowadz\u0105 od rozkroju p\u0142yt do przygotowania pakiet\xF3w na budow\u0119.",label:"Dla produkcji",items:["Wykaz cz\u0119\u015Bci, materia\u0142 i ilo\u015Bci","Rozkr\xF3j p\u0142yt i oznaczenia element\xF3w","Podzia\u0142 na pakiety do monta\u017Cu"]},{title:"Ka\u017Cdy element trafia na swoje miejsce.",text:"Oznaczone cz\u0119\u015Bci i ich miejsca we wsp\xF3lnym modelu u\u0142atwiaj\u0105 organizacj\u0119 budowy. Wykonawca wie, od czego zacz\u0105\u0107 i co do\u0142o\u017Cy\u0107 dalej. Ten sam system wspiera monta\u017C z ekip\u0105 i DIY.",label:"Na budowie",items:["Elementy oznaczone identyfikatorami","Czytelna kolejno\u015B\u0107 monta\u017Cu","DIY lub monta\u017C z ekip\u0105"]}];function k3(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new Pi(t);r.colorSpace=Jt;let s=new Os(new Yr({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function jh(i,e=br(yo)){if(i===2){let y=Yh(yo,e);return{...y,getManufacturingState:()=>({stage:i,...y.getPartsState(),example:yo.name})}}let t=xo(),n=t.dimensions,r=new ft;r.name="Combstruct Flow";let s=new Gt({color:"#c49b62",roughness:.85}),o=new Gt({color:"#43948c",roughness:.75}),a=new Gt({color:"#33493e",roughness:.85}),l=new un({color:"#66543a",transparent:!0,opacity:.45}),c=(y,F,R,U,B,G,W=a)=>{let k=new bt(new ti(y,F,R),W);return k.position.set(U,B,G),r.add(k),k},d=(y,F=s)=>{let R=new bt(y,F);return R.add(new Sn(new Cn(y,30),l)),r.add(R),R},u=(y,F,R,U,B)=>{let G=k3(y,B);G.position.set(F,R,U),r.add(G)};if(i===0){let y=new Gt({color:"#ffffff",roughness:1});c(n.width+1.8,.065,n.depth+1.8,0,-.085,0,y);for(let F of t.wallPanels){let R=[F.start,F.end,...F.holes.flatMap(U=>F.axis===0?[U.world.x0,U.world.x1]:[U.world.z0,U.world.z1])].sort((U,B)=>U-B);for(let U=1;U<R.length;U++){let B=R[U-1],G=R[U],W=(B+G)/2;G-B<.001||F.holes.some(k=>W>(F.axis===0?k.world.x0:k.world.z0)&&W<(F.axis===0?k.world.x1:k.world.z1))||(F.axis===0?c(G-B,.18,F.depth,W,.06,F.fixed):c(F.depth,.18,G-B,F.fixed,.06,W))}for(let U of F.holes){let B=F.axis===0?U.world.x0:U.world.z0,G=F.axis===0?U.world.x1:U.world.z1;U.kind==="window"&&(F.axis===0?c(G-B,.035,.035,(B+G)/2,.025,F.fixed,o):c(.035,.035,G-B,F.fixed,.025,(B+G)/2,o))}}for(let F of t.rooms)u(F.name,(F.x0+F.x1)/2,.26,(F.z0+F.z1)/2,F.id==="living"?3.5:3.2);return u(`${n.width.toFixed(2).replace(".",",")} m`,0,.03,n.halfDepth+.56,2.9),u(`${n.depth.toFixed(2).replace(".",",")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:Ec(.15,7,3.5),annotation:"Przyk\u0142ad: rzut Combstruct 30"}}let h=new Map(t.boards.map(y=>[y.id,y])),f=Sc.assembly.map(([y])=>h.get(y));if(f.length!==t.boards.length||f.some(y=>!y)||new Set(f).size!==f.length)throw new Error("Regenerate the assembly schedule for the current model");let p=[],_=[],g=[],m=[],w=0,S=0;for(let y of f){let F=y.mesh.geometry.index?y.mesh.geometry.toNonIndexed():y.mesh.geometry.clone();F.translate(...y.mesh.position.toArray()),p.push(F);let R=new Cn(F,30);_.push(R),w+=F.attributes.position.count,S+=R.attributes.position.count,g.push(w),m.push(S)}let M=mo(p,!1),I=mo(_,!1);p.forEach(y=>y.dispose()),_.forEach(y=>y.dispose());let A=new bt(M,s),D=new Sn(I,l);r.add(A,D);let x=f.length;if(i===1){let y=f.find(U=>U.surface==="front"&&U.axis===1&&U.index===9)||f[150],F=y.mesh.geometry.clone().translate(...y.mesh.position.toArray());d(F,o);let R=y.bounds.getCenter(Ec());u(_o(y).id,R.x,R.y+.45,R.z+.25,1.4)}return{root:r,direction:Ec(1.4,1,1.5),annotation:i===1?"Combstruct 30 \xB7 cyfrowy model element\xF3w":"Przesu\u0144 suwak i zobacz kolejno\u015B\u0107 monta\u017Cu",assembly(y){x=Math.max(0,Math.min(f.length,Math.round(y*f.length))),M.setDrawRange(0,g[x-1]||0),I.setDrawRange(0,m[x-1]||0)},getManufacturingState(){return{stage:i,totalBoards:f.length,visibleBoards:x,lastBoard:f[x-1]?.id||null,lastSupport:Sc.assembly[x-1]?.[1]||null,example:"Combstruct 30"}}}}var An=[{id:"deska",group:"Elementy i zasady",title:"Deska grzebieniowa",lead:"Jeden powtarzalny element tworzy pod\u0142og\u0119, \u015Bciany, strop i dach.",text:"Desk\u0119 wycinamy z p\u0142yty OSB, MFP lub sklejki. Wpusty si\u0119gaj\u0105 do po\u0142owy jej wysoko\u015Bci. Dwie deski z\u0142o\u017Cone powierzchniami tworz\u0105 par\u0119, a kr\xF3tsze warianty zachowuj\u0105 ten sam skok modu\u0142u.",rule:"24 cm wysoko\u015Bci. 18 mm grubo\u015Bci jednej deski.",scene:"beam"},{id:"uciaglanie",group:"Elementy i zasady",title:"Para desek i uci\u0105glanie",lead:"Przed\u0142u\u017Camy \u017Cebro, dok\u0142adaj\u0105c kolejne deski w dw\xF3ch warstwach.",text:"\u0141\u0105czenia warstw mijaj\u0105 si\u0119: przy ko\u0144cu deski w jednej warstwie biegnie pe\u0142ny odcinek drugiej. W tym przyk\u0142adzie rozsuni\u0119cie wzd\u0142u\u017C belki wynosi dwa modu\u0142y. Zako\u0144czenie jednej warstwy jest kr\xF3tsze o 24 cm.",rule:"Styki obu warstw nie wypadaj\u0105 w tym samym miejscu.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Elementy i zasady",title:"Pod\u0142oga i strop",lead:"\u017Bebra r\xF3wnoleg\u0142e do kr\xF3tszej kraw\u0119dzi p\u0142yty maj\u0105 wpusty do g\xF3ry.",text:"To sta\u0142a zasada uk\u0142adania. Na modelu wyr\xF3\u017Cnili\u015Bmy t\u0119 rodzin\u0119 \u017Ceber turkusem. \u017Bebra biegn\u0105ce prostopadle maj\u0105 wpusty w przeciwn\u0105 stron\u0119, dzi\u0119ki czemu obie rodziny sk\u0142adaj\u0105 si\u0119 na krzy\u017C.",rule:"Kr\xF3tszy kierunek no\u015Bny \u2014 wpusty do g\xF3ry.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Elementy i zasady",title:"\u015Aciany zewn\u0119trzne",lead:"Pionowe \u017Cebra maj\u0105 wpusty skierowane na zewn\u0105trz domu.",text:"Turkusowe piony pokazuj\u0105 w\u0142a\u015Bciw\u0105 orientacj\u0119. Poziome \u017Cebra \u0142\u0105cz\u0105 si\u0119 z nimi od przeciwnej strony. \u015Aciana zaczyna si\u0119 od poziomu podstawy konstrukcji, a jej zako\u0144czenia tworz\u0105 po\u0142\u0105czenie z pod\u0142og\u0105.",rule:"Piony: wpusty na zewn\u0105trz. Linia \u017Ceber pozostaje ci\u0105g\u0142a.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Elementy i zasady",title:"Dach",lead:"Tak\u017Ce w dachu kr\xF3tszy kierunek p\u0142yty ma wpusty do g\xF3ry.",text:"Na po\u0142aci \u201Edo g\xF3ry\u201D oznacza stron\u0119 pokrycia dachowego. Wyr\xF3\u017Cnione \u017Cebra biegn\u0105 r\xF3wnolegle do kr\xF3tszej kraw\u0119dzi po\u0142aci. Druga rodzina zamyka siatk\u0119 od przeciwnej strony.",rule:"Ta sama zasada co w stropie, obr\xF3cona razem z po\u0142aci\u0105.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Elementy i zasady",title:"Zako\u0144czenia i deski \u0142\u0105czeniowe",lead:"Te same deski, przygotowane do konkretnego miejsca w po\u0142\u0105czeniu.",text:"Zako\u0144czenie skracamy o wysoko\u015B\u0107 deski: 24 cm. Deski \u0142\u0105czeniowe maj\u0105 lokalne wybranie ods\u0142aniaj\u0105ce p\xF3\u0142 wpustu na kolejne \u017Cebro. Wybierz wariant, aby obejrze\u0107 sam kszta\u0142t.",rule:"Wybranie ods\u0142ania wpust. Nie przesuwamy przez nie osi \u017Ceber.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Po\u0142\u0105czenia",title:"\u017Bebra na krzy\u017C",lead:"Dwie prostopad\u0142e pary wsuwaj\u0105 si\u0119 w siebie przez wpusty.",text:"Ka\u017Cda rodzina oddaje po\u0142ow\u0119 wysoko\u015Bci w miejscu skrzy\u017Cowania. Po z\u0142o\u017Ceniu obie mieszcz\u0105 si\u0119 w jednej warstwie konstrukcyjnej o g\u0142\u0119boko\u015Bci 24 cm. Rozsu\u0144 elementy, aby zobaczy\u0107 obie strony wpustu.",rule:"Wpust do g\xF3ry spotyka wpust do do\u0142u.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",lead:"D\u0142u\u017Csza cz\u0119\u015B\u0107 zako\u0144czenia przylega do boku pe\u0142nego \u017Cebra.",text:"Kr\xF3tsza opiera si\u0119 o \u017Cebro, a d\u0142u\u017Csza schodzi obok niego do poziomu podstawy konstrukcji. Para \u015Bciany i para pod\u0142ogi pozostaj\u0105 w tej samej p\u0142aszczy\u017Anie.",rule:"Pe\u0142na deska i zako\u0144czenie uzupe\u0142niaj\u0105 si\u0119 na 24 cm.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",lead:"Pod\u0142oga mo\u017Ce biec dalej, poza obrys domu.",text:"Jedna warstwa przechodzi przez w\u0119ze\u0142 na taras. Druga przyjmuje pion \u015Bciany. Naro\u017Cne wybranie 18 \xD7 102 mm wraz z istniej\u0105cym p\xF3\u0142wpustem ods\u0142ania miejsce na poprzeczne \u017Cebro.",rule:"Ci\u0105g\u0142o\u015B\u0107 tarasu i miejsce na wszystkie trzy kierunki \u017Ceber.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",lead:"\u015Aciana wewn\u0119trzna wchodzi w plaster pod\u0142ogi na tej samej zasadzie.",text:"Pion zaczyna si\u0119 przy podstawie konstrukcji. Kr\xF3tsze zako\u0144czenie opiera si\u0119 na pe\u0142nym \u017Cebrze, a d\u0142u\u017Csze przylega do jego boku. Odsuni\u0119te wybranie w pe\u0142nej kraw\u0119dzi pozostawia miejsce na drugie \u017Cebro pod\u0142ogi.",rule:"Wsp\xF3lna linia \u017Ceber, bez dodatkowej deski pod \u015Bcian\u0105.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Po\u0142\u0105czenia",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",lead:"Poziome \u017Cebra obu \u015Bcian spotykaj\u0105 si\u0119 w jednej p\u0142aszczy\u017Anie.",text:"Zako\u0144czenia sk\u0142adaj\u0105 si\u0119 naprzemiennie. Wybranie w z\u0119batej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na pion \u015Bciany zewn\u0119trznej. Ko\u0144c\xF3wka pozostaje zachowana.",rule:"Trzeci element wchodzi w ods\u0142oni\u0119ty wpust.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Po\u0142\u0105czenia",title:"Naro\u017Cnik \u015Bcian zewn\u0119trznych",lead:"Dwie \u015Bciany zamykaj\u0105 obrys w naro\u017Cniku.",text:"Poziome pary spotykaj\u0105 si\u0119 naprzemiennie pe\u0142n\u0105 desk\u0105 i zako\u0144czeniem. Ka\u017Cda \u015Bciana zachowuje sw\xF3j kierunek: wpusty jej pionowych \u017Ceber otwieraj\u0105 si\u0119 na zewn\u0105trz budynku.",rule:"Dwie \u015Bciany, wsp\xF3lny poziom par desek.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",lead:"Przegroda poprzeczna dochodzi do ci\u0105g\u0142ej \u015Bciany.",text:"Jedna warstwa przechodzi przez skrzy\u017Cowanie, druga przyjmuje zako\u0144czenie przegrody. Lokalne wybranie pozostawia miejsce na pion, bez odsuwania kt\xF3rejkolwiek pary poza lini\u0119 \u017Ceber.",rule:"Zako\u0144czenie wchodzi w ci\u0105g\u0142\u0105 par\u0119 desek.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",lead:"Zako\u0144czenie stropu wykorzystuje pe\u0142ne \u017Cebro \u015Bciany.",text:"Kr\xF3tsza cz\u0119\u015B\u0107 opiera si\u0119 na \u017Cebrze, d\u0142u\u017Csza przylega do niego z boku. Deska \u0142\u0105czeniowa ods\u0142ania wpust na poziomy rz\u0105d \u015Bciany. Pion mo\u017Ce kontynuowa\u0107 sw\xF3j bieg ponad stropem.",rule:"Strop nie przerywa linii konstrukcji \u015Bciany.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",lead:"Pion dochodzi do stropu w tej samej linii co \u017Cebro pod\u0142ogi.",text:"Pe\u0142na deska stropu przechodzi przez w\u0119ze\u0142. Zako\u0144czenia obu przegr\xF3d uzupe\u0142niaj\u0105 si\u0119, a wybranie pozostawia miejsce na poprzeczne \u017Cebro stropu.",rule:"Ta sama geometria zako\u0144cze\u0144 na dole i na g\xF3rze \u015Bciany.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Po\u0142\u0105czenia",title:"Dach \u2014 \u015Bciana",lead:"\u017Bebro po\u0142aci trafia w lini\u0119 pionowego \u017Cebra \u015Bciany.",text:"Zbli\u017Cenie pokazuje rzeczywisty fragment modelu domu przy okapie. \u017Bebro dachowe biegnie dalej poza \u015Bcian\u0119, tworz\u0105c okap. K\u0105t po\u0142aci wyznacza kszta\u0142t styku przy podparciu.",rule:"Po\u0142a\u0107 i \u015Bciana spotykaj\u0105 si\u0119 na tej samej linii \u017Cebra.",scene:"roof-wall"},{id:"kalenica",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie po\u0142aci w kalenicy",lead:"Dwie po\u0142acie zamykaj\u0105 dach dopasowanymi zako\u0144czeniami.",text:"W tym modelu po\u0142acie maj\u0105 nachylenie 35\xB0. Ko\u0144ce \u017Ceber s\u0105 doci\u0119te do p\u0142aszczyzny kalenicy, tak aby obie bry\u0142y styka\u0142y si\u0119 bez nak\u0142adania. To po\u0142\u0105czenie k\u0105towe, zale\u017Cne od geometrii dachu.",rule:"K\u0105t i zako\u0144czenie wynikaj\u0105 z projektu dachu.",scene:"ridge"}],H0=[{id:"standard",name:"Zwyk\u0142a",trim:null,cut:null,description:"Pe\u0142na deska z wpustami i p\xF3\u0142wpustami na ko\u0144cach."},{id:"ending",name:"Zako\u0144czeniowa",trim:"left",cut:null,description:"Jedna warstwa pary kr\xF3tsza o 24 cm \u2014 wysoko\u015B\u0107 deski."},{id:"corner-slotted",name:"Naro\u017Cna \xB7 102 mm",cut:{edge:"slotted",offset:0},description:"18 \xD7 102 mm nowego wybrania oraz 18 mm istniej\u0105cego p\xF3\u0142wpustu."},{id:"corner-plain",name:"Naro\u017Cna \xB7 120 mm",cut:{edge:"plain",offset:0},description:"Wybranie 18 \xD7 120 mm przy pe\u0142nej kraw\u0119dzi ko\u0144ca deski."},{id:"inset-slotted",name:"Odsuni\u0119ta \xB7 z\u0119by",cut:{edge:"slotted",offset:.12},description:"Wybranie przy z\u0119bach, odsuni\u0119te od ko\u0144ca; zachowana ko\u0144c\xF3wka."},{id:"inset-plain",name:"Odsuni\u0119ta \xB7 pe\u0142na kraw\u0119d\u017A",cut:{edge:"plain",offset:.12},description:"Wybranie przy pe\u0142nej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski."}];var De=i=>document.querySelector(i),ai=i=>[...document.querySelectorAll(i)],xr=De("#technology-viewport"),Hi=De(".viewport-loading"),Gi="combstruct",Yt=An.find(i=>i.id==="podloga-strop"),vo=H0[0],Xn="house",In=0,Zh=br(Tc),Lt,nn,Bt,Vi,_t,Rc=0,Cc,_r=(...i)=>new P(...i);function qn(){!Rc&&Lt&&(Rc=requestAnimationFrame(()=>{Rc=0,Bt.update(),Lt.render(Vi,nn)}))}function W0(){if(!_t||!Lt||!xr.clientWidth||!xr.clientHeight)return;let i=_t.focus||new ln().setFromObject(_t.root),e=i.getCenter(_r()),t=(_t.direction||_r(1.5,1.4,2)).clone().normalize(),n=_r(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(dr.degToRad(nn.fov/2)),o=s*nn.aspect,a=0;for(let c of[i.min.x,i.max.x])for(let d of[i.min.y,i.max.y])for(let u of[i.min.z,i.max.z]){let h=_r(c,d,u).sub(e);a=Math.max(a,Math.abs(h.dot(n))/o+h.dot(t),Math.abs(h.dot(r))/s+h.dot(t))}let l=Bt.enableDamping;if(Bt.enableDamping=!1,Bt.update(),Bt.target.copy(e),nn.position.copy(e).addScaledVector(t,Math.max(.8,a*1.14)),Bt.update(),!_t.focus)for(let c=0;c<2;c++){_t.root.updateMatrixWorld(!0),nn.updateMatrixWorld();let d=1/0,u=-1/0,h=1/0,f=-1/0,p=_r();_t.root.traverseVisible(M=>{if(!M.geometry?.attributes.position)return;let I=M.geometry.attributes.position;for(let A=0;A<I.count;A++)p.fromBufferAttribute(I,A).applyMatrix4(M.matrixWorld).project(nn),d=Math.min(d,p.x),u=Math.max(u,p.x),h=Math.min(h,p.y),f=Math.max(f,p.y)});let _=nn.position.distanceTo(Bt.target),g=_r().setFromMatrixColumn(nn.matrixWorld,0),m=_r().setFromMatrixColumn(nn.matrixWorld,1),w=g.multiplyScalar((d+u)/2*_*s*nn.aspect).add(m.multiplyScalar((h+f)/2*_*s));Bt.target.add(w),nn.position.add(w);let S=Math.max((u-d)/1.72,(f-h)/1.62);Number.isFinite(S)&&S>0&&nn.position.sub(Bt.target).multiplyScalar(S).add(Bt.target),Bt.update()}Bt.enableDamping=l,qn()}function Jh(){if(!Lt)return;let i=xr.clientWidth,e=xr.clientHeight;!i||!e||(Lt.setSize(i,e,!1),nn.aspect=i/e,nn.updateProjectionMatrix(),W0())}function V3(i){De("#element-id").textContent=i.id,De("#element-type").textContent=i.type,De("#element-surface").textContent=i.surface,De("#element-length").textContent=i.length,De("#element-metric-label").textContent=i.metricLabel||"D\u0142ugo\u015B\u0107 w modelu",De("#element-detail-label").textContent=i.detailLabel||"Grubo\u015B\u0107 p\u0142yty",De("#element-thickness").textContent=i.detail||"18 mm"}function us(){if(Lt)try{_t&&(Vi.remove(_t.root),kh(_t.root)),_t=Gi==="combstruct"?Hh(Yt,vo):Gi==="bim"?Gh(Xn,V3):jh(In,Zh),Vi.add(_t.root),_t.root.updateMatrixWorld(!0),De("#scene-annotation").textContent=_t.annotation||"",_t.arrows&&(_t.arrows.visible=De("#arrows").checked),Gi==="bim"&&_t.finish&&Kh(),Gi==="flow"&&In===3&&eu(),Hi.hidden=!0,Jh(),qn()}catch(i){console.error(i),Hi.hidden=!1,Hi.textContent="Nie uda\u0142o si\u0119 przygotowa\u0107 tego widoku. Od\u015Bwie\u017C stron\u0119, aby spr\xF3bowa\u0107 ponownie.",Hi.setAttribute("role","alert")}}function H3(){try{Vi=new Ls,Vi.background=new lt("#f2f5f1"),nn=new an(36,1,.005,160),Lt=new U0({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Lt.localClippingEnabled=!0,Lt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Lt.toneMapping=ro,Lt.toneMappingExposure=1.07,xr.prepend(Lt.domElement),Lt.domElement.tabIndex=0,Lt.domElement.setAttribute("aria-label","Model 3D. Przeci\u0105gnij, aby obr\xF3ci\u0107; przewi\u0144, aby przybli\u017Cy\u0107. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybra\u0107."),Bt=new B0(nn,Lt.domElement),Bt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,Bt.dampingFactor=.12,Bt.minDistance=.3,Bt.maxDistance=50,Bt.maxPolarAngle=Math.PI*.94,Bt.addEventListener("change",qn),Bt.listenToKeyEvents(Lt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{Bt.enableDamping=!n.matches,qn()}),Vi.add(new $s("#ffffff","#b2b8aa",2.5));let i=new Qr("#fff3df",2.6);i.position.set(3,7,5),Vi.add(i);let e=new Qr("#d3e8ee",1.5);e.position.set(-4,3,-4),Vi.add(e),Cc=new Qs;let t;Lt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Lt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!_t.selectAt)return;let r=Lt.domElement.getBoundingClientRect();Cc.setFromCamera(new de((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),nn),_t.selectAt(Cc),qn()}),Lt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),W0())}),Lt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Hi.hidden=!1,Hi.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C stron\u0119, aby do niego wr\xF3ci\u0107."}),new ResizeObserver(Jh).observe(xr),us()}catch(i){console.error(i),Hi.textContent="Podgl\u0105d 3D wymaga obs\u0142ugi WebGL. Zasady systemu mo\u017Cesz przeczyta\u0107 poni\u017Cej modelu.",Hi.setAttribute("role","alert")}}function G3(){De("#topic-title").textContent=Yt.title,De("#topic-lead").textContent=Yt.lead,De("#topic-text").textContent=Yt.text,De("#topic-rule").textContent=Yt.rule;let i=An.indexOf(Yt);De("#topic-counter").textContent=`${i+1} / ${An.length}`,De("#topic-select").value=Yt.id,ai("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===Yt.id))),De("#spread-control").hidden=!Yt.spread,De("#crossing-control").hidden=!Yt.crossing,De("#arrows-control").hidden=!Yt.arrows,De("#variant-control").hidden=!Yt.variants,De("#spread").value=0,De("#crossing").checked=!1,De("#previous-topic").disabled=i===0,De("#next-topic").disabled=i===An.length-1,De("#variant-description").textContent=vo.description}function Mo(i,{hash:e=!0}={}){Gi=i,De(".technology-cta").hidden=i==="flow",ai("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,De("#"+n.getAttribute("aria-controls")).hidden=!r}),De(`#${i==="combstruct"?"manual":i==="bim"?"bim":"flow"}-mount`).append(xr),e&&history.pushState(null,"",`#${i==="combstruct"?Yt.id:i==="bim"&&Xn==="wall"?"bim-sciana":i}`),i==="combstruct"&&G3(),i==="flow"&&Qh(),us()}function fs(i,{hash:e=!0}={}){Yt=An.find(t=>t.id===i)||Yt,Mo("combstruct",{hash:e})}function Pc(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(Xn=i==="bim-sciana"?"wall":"house",$h(),Mo("bim",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),Mo("flow",{hash:!1})):fs(i,{hash:!1})}for(let i of[...new Set(An.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of An.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>fs(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}De("#topic-buttons").append(e),De("#topic-select").append(n)}for(let i of H0)De("#variant-select").append(new Option(i.name,i.id));De("#topic-select").addEventListener("change",i=>fs(i.target.value));De("#variant-select").addEventListener("change",i=>{vo=H0.find(e=>e.id===i.target.value),De("#variant-description").textContent=vo.description,us()});ai("[data-technology]").forEach(i=>i.addEventListener("click",()=>Mo(i.dataset.technology)));De(".technology-tabs").addEventListener("keydown",i=>{let e=ai("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});De("#previous-topic").addEventListener("click",()=>fs(An[An.indexOf(Yt)-1]?.id));De("#next-topic").addEventListener("click",()=>fs(An[An.indexOf(Yt)+1]?.id));De("#spread").addEventListener("input",i=>{_t?.spread?.(Number(i.target.value)),De("#crossing").checked=!1,qn()});De("#crossing").addEventListener("change",i=>{i.target.checked&&(De("#spread").value=0,_t?.spread?.(0)),_t?.crossing?.(i.target.checked),qn()});De("#arrows").addEventListener("change",i=>{_t?.arrows&&(_t.arrows.visible=i.target.checked),qn()});ai("[data-reset-view]").forEach(i=>i.addEventListener("click",W0));function $h(){ai("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===Xn))),De("#finish-control").hidden=Xn!=="wall",De("#wall-guide").hidden=Xn!=="wall",De(".selection-hint").textContent=Xn==="wall"?"Ods\u0142o\u0144 \u015Bcian\u0119 i wybierz widoczny element":"Wybierz desk\u0119 w modelu",De("#passport-title").innerHTML=Xn==="wall"?"Sprawd\u017A, co kryje<br>Twoja \u015Bciana.":"Ka\u017Cda cz\u0119\u015B\u0107<br>ma swoje miejsce."}function Kh(){let i=De("#finish"),e=Number(i.value);_t?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"\u015Aciana wyko\u0144czona":`Ods\u0142oni\u0119te ${Math.round(e*100)}% \u015Bciany`),De("#scene-annotation").textContent=e>.01?"Kliknij \u017Cebro, kostk\u0119, rur\u0119 lub przew\xF3d":"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",qn()}ai("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{Xn=i.dataset.bimView,$h(),history.pushState(null,"",Xn==="wall"?"#bim-sciana":"#bim"),us()}));De("#finish").addEventListener("input",Kh);De("#next-element").addEventListener("click",()=>{_t?.next?.(),qn()});function Qh(){let i=Ac[In];De("#flow-title").textContent=i.title,De("#flow-text").textContent=i.text,De("#flow-output-label").textContent=i.label,De("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),ai("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===In))),De("#assembly-control").hidden=In!==3,De("#flow-next").textContent=["Zobacz model Combstruct \u2192","Przejd\u017A do produkcji \u2192","Zobacz monta\u017C \u2192","Wr\xF3\u0107 do rzut\xF3w \u21BA"][In],De(".flow-layout").dataset.stage=In,De("#production-catalog").hidden=In!==2}function eu(){let i=Number(De("#assembly").value);_t?.assembly?.(i),De("#assembly-progress").textContent=`${Math.round(i*100)}%`,qn()}function tu(i){In=i,Qh(),us()}ai("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>tu(Number(i.dataset.flowStage))));De("#flow-next").addEventListener("click",()=>tu((In+1)%Ac.length));De("#assembly").addEventListener("input",eu);qh(De("#production-catalog"),Tc,(i,e)=>{Zh=i,Gi==="flow"&&In===2&&us(),e&&Xh(De("#flow-mount"))});var hs=De(".menu-toggle"),G0=De("#mobile-menu");function Ic(){G0.hidden=!0,hs.setAttribute("aria-expanded","false"),hs.setAttribute("aria-label","Otw\xF3rz menu")}hs.addEventListener("click",()=>{let i=G0.hidden;G0.hidden=!i,hs.setAttribute("aria-expanded",String(i)),hs.setAttribute("aria-label",i?"Zamknij menu":"Otw\xF3rz menu")});ai("#mobile-menu a").forEach(i=>i.addEventListener("click",Ic));document.addEventListener("click",i=>{i.target.closest(".site-header")||Ic()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!G0.hidden&&(Ic(),hs.focus())});addEventListener("popstate",Pc);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==Gi&&i!==Yt.id&&Pc()});window.combstructTechnology={getState:()=>({ready:!!Lt,technology:Gi,topic:Yt.id,variant:vo.id,bimView:Xn,flowStage:In,manufacturing:_t?.getManufacturingState?.(),selected:_t?.getSelected?.(),wall:_t?.getWallState?.(),meshCount:_t?.root.children.length,drawCalls:Lt?.info.render.calls}),topics:An.map(i=>i.id),showTopic:fs,showTechnology:Mo,reset:W0};Pc();H3();})();
