"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pu=0,pd=1,mu=2;var Ro=1,gu=2,Ss=3,Ri=0,mn=1,Ft=2,pi=0,_r=1,md=2,gd=3,bd=4,bu=5;var Wi=100,_u=101,xu=102,yu=103,vu=104,Mu=200,Su=201,wu=202,Eu=203,Ia=204,Da=205,Tu=206,Au=207,Ru=208,Cu=209,Pu=210,Iu=211,Du=212,Lu=213,Nu=214,La=0,Na=1,Ua=2,xr=3,Fa=4,za=5,Oa=6,Ba=7,_d=0,Uu=1,Fu=2,qn=0,xd=1,yd=2,vd=3,Co=4,Md=5,Sd=6,wd=7;var Ed=300,er=301,Ir=302,bl=303,_l=304,Po=306,ka=1e3,ai=1001,Va=1002,Zt=1003,zu=1004;var Io=1005;var rn=1006,xl=1007;var tr=1008;var _n=1009,Td=1010,Ad=1011,ws=1012,yl=1013,Yn=1014,jn=1015,mi=1016,vl=1017,Ml=1018,Es=1020,Rd=35902,Cd=35899,Pd=1021,Id=1022,Un=1023,ci=1026,nr=1027,Dd=1028,Sl=1029,Dr=1030,wl=1031;var El=1033,Do=33776,Lo=33777,No=33778,Uo=33779,Tl=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Il=37492,Dl=37496,Ll=37488,Nl=37489,Ul=37490,Fl=37491,zl=37808,Ol=37809,Bl=37810,kl=37811,Vl=37812,Hl=37813,Gl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,jl=37819,Zl=37820,Jl=37821,$l=36492,Kl=36494,Ql=36495,ec=36283,tc=36284,nc=36285,ic=36286;var Qs=2300,Ha=2301,Pa=2302,nd=2303,id=2400,rd=2401,sd=2402;var Ou=3200;var Ld=0,Bu=1,Pi="",Bt="srgb",yr="srgb-linear",eo="linear",pt="srgb";var gr=7680;var od=519,ku=512,Vu=513,Hu=514,rc=515,Gu=516,Wu=517,sc=518,Xu=519,Ga=35044;var Nd="300 es",Wn=2e3,cs=2001;function mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qu(){let i=to("canvas");return i.style.display="block",i}var Uh={},ds=null;function no(...i){let e="THREE."+i.shift();ds?ds("log",e,...i):console.log(e,...i)}function Yu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Yu(i);let e="THREE."+i.shift();if(ds)ds("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Yu(i);let e="THREE."+i.shift();if(ds)ds("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function io(...i){let e=i.join(" ");e in Uh||(Uh[e]=!0,Ze(...i))}function ju(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Zu={[La]:Na,[Ua]:Oa,[Fa]:Ba,[xr]:za,[Na]:La,[Oa]:Ua,[Ba]:Fa,[za]:xr},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,as=Math.PI/180,hs=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Ud(i,e){return(i%e+e)%e}function bp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function _p(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function xp(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function yp(i,e=1){return e-Math.abs(Ud(i,e*2)-e)}function vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wp(i,e){return i+Math.random()*(e-i)}function Ep(i){return i*(.5-Math.random())}function Tp(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(i){return i*as}function Rp(i){return i*hs}function Cp(i){return(i&i-1)===0&&i!==0}function Pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*d,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Zn={DEG2RAD:as,RAD2DEG:hs,generateUUID:li,clamp:tt,euclideanModulo:Ud,mapLinear:bp,inverseLerp:_p,lerp:Js,damp:xp,pingpong:yp,smoothstep:vp,smootherstep:Mp,randInt:Sp,randFloat:wp,randFloatSpread:Ep,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Dp,normalize:bt,denormalize:Gn},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3],h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||l!==h||c!==p||d!==g){let m=l*h+c*p+d*g+f*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let u=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);u=Math.sin(u*S)/M,a=Math.sin(a*S)/M,l=l*u+h*a,c=c*u+p*a,d=d*u+g*a,f=f*u+y*a}else{l=l*u+h*a,c=c*u+p*a,d=d*u+g*a,f=f*u+y*a;let S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*f+l*p-c*h,e[t+1]=l*g+d*h+c*f-a*p,e[t+2]=c*g+d*p+a*h-l*f,e[t+3]=d*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"YXZ":this._x=h*d*f+c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"ZXY":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f-h*p*g;break;case"ZYX":this._x=h*d*f-c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f+h*p*g;break;case"YZX":this._x=h*d*f+c*p*g,this._y=c*p*f+h*d*g,this._z=c*d*g-h*p*f,this._w=c*d*f-h*p*g;break;case"XZY":this._x=h*d*f-c*p*g,this._y=c*p*f-h*d*g,this._z=c*d*g+h*p*f,this._w=c*d*f+h*p*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new D,zh=new Jt,et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],g=n[8],y=r[0],m=r[3],u=r[6],S=r[1],M=r[4],v=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*y+a*S+l*C,s[3]=o*m+a*M+l*E,s[6]=o*u+a*v+l*T,s[1]=c*y+d*S+f*C,s[4]=c*m+d*M+f*E,s[7]=c*u+d*v+f*T,s[2]=h*y+p*S+g*C,s[5]=h*m+p*M+g*E,s[8]=h*u+p*v+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,g=t*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(r*c-d*n)*y,e[2]=(a*n-r*o)*y,e[3]=h*y,e[4]=(d*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new et,Oh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lp(){let i={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?eo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yr]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var dt=Lp();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xr,Wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=to("canvas")),Xr.width=e.width,Xr.height=e.height;let r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cc(r[o].image)):s.push(Cc(r[o]))}else s=Cc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Up=0,Pc=new D,pn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,r=ai,s=rn,o=tr,a=Un,l=_n,c=i.DEFAULT_ANISOTROPY,d=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=li(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pc).x}get height(){return this.source.getSize(Pc).y}get depth(){return this.source.getSize(Pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Ed;pn.DEFAULT_ANISOTROPY=1;var Pt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,C=(u+1)/2,E=(d+h)/4,T=(f+y)/4,b=(g+m)/4;return M>v&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=T/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=b/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=T/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-y)/S,this.z=(h-d)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new pn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new us(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Xa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var st=class i{constructor(e,t,n,r,s,o,a,l,c,d,f,h,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,f,h,p,g,y,m)}set(e,t,n,r,s,o,a,l,c,d,f,h,p,g,y,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*d,p=o*f,g=a*d,y=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,p=l*f,g=c*d,y=c*f;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,p=l*f,g=c*d,y=c*f;t[0]=h-y*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,p=o*f,g=a*d,y=a*f;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=y-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*f+g,t[10]=h-y*f}else if(e.order==="XZY"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+y,t[5]=o*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fp,e,zp)}lookAt(e,t,n){let r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Oi.crossVectors(n,Mn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Oi.crossVectors(n,Mn)),Oi.normalize(),Ko.crossVectors(Mn,Oi),r[0]=Oi.x,r[4]=Ko.x,r[8]=Mn.x,r[1]=Oi.y,r[5]=Ko.y,r[9]=Mn.y,r[2]=Oi.z,r[6]=Ko.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],g=n[2],y=n[6],m=n[10],u=n[14],S=n[3],M=n[7],v=n[11],C=n[15],E=r[0],T=r[4],b=r[8],x=r[12],N=r[1],P=r[5],L=r[9],F=r[13],k=r[2],O=r[6],z=r[10],R=r[14],W=r[3],X=r[7],ae=r[11],ge=r[15];return s[0]=o*E+a*N+l*k+c*W,s[4]=o*T+a*P+l*O+c*X,s[8]=o*b+a*L+l*z+c*ae,s[12]=o*x+a*F+l*R+c*ge,s[1]=d*E+f*N+h*k+p*W,s[5]=d*T+f*P+h*O+p*X,s[9]=d*b+f*L+h*z+p*ae,s[13]=d*x+f*F+h*R+p*ge,s[2]=g*E+y*N+m*k+u*W,s[6]=g*T+y*P+m*O+u*X,s[10]=g*b+y*L+m*z+u*ae,s[14]=g*x+y*F+m*R+u*ge,s[3]=S*E+M*N+v*k+C*W,s[7]=S*T+M*P+v*O+C*X,s[11]=S*b+M*L+v*z+C*ae,s[15]=S*x+M*F+v*R+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],u=e[15],S=l*p-c*h,M=a*p-c*f,v=a*h-l*f,C=o*p-c*d,E=o*h-l*d,T=o*f-a*d;return t*(y*S-m*M+u*v)-n*(g*S-m*C+u*E)+r*(g*M-y*C+u*T)-s*(g*v-y*E+m*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],u=e[15],S=t*a-n*o,M=t*l-r*o,v=t*c-s*o,C=n*l-r*a,E=n*c-s*a,T=r*c-s*l,b=d*y-f*g,x=d*m-h*g,N=d*u-p*g,P=f*m-h*y,L=f*u-p*y,F=h*u-p*m,k=S*F-M*L+v*P+C*N-E*x+T*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/k;return e[0]=(a*F-l*L+c*P)*O,e[1]=(r*L-n*F-s*P)*O,e[2]=(y*T-m*E+u*C)*O,e[3]=(h*E-f*T-p*C)*O,e[4]=(l*N-o*F-c*x)*O,e[5]=(t*F-r*N+s*x)*O,e[6]=(m*v-g*T-u*M)*O,e[7]=(d*T-h*v+p*M)*O,e[8]=(o*L-a*N+c*b)*O,e[9]=(n*N-t*L-s*b)*O,e[10]=(g*E-y*v+u*S)*O,e[11]=(f*v-d*E-p*S)*O,e[12]=(a*x-o*P-l*b)*O,e[13]=(t*P-n*x+r*b)*O,e[14]=(y*M-g*C-m*S)*O,e[15]=(d*C-f*M+h*S)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,g=s*f,y=o*d,m=o*f,u=a*f,S=l*c,M=l*d,v=l*f,C=n.x,E=n.y,T=n.z;return r[0]=(1-(y+u))*C,r[1]=(p+v)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(p-v)*E,r[5]=(1-(h+u))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+M)*T,r[9]=(m-S)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=qr.set(r[0],r[1],r[2]).length(),a=qr.set(r[4],r[5],r[6]).length(),l=qr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),kn.copy(this);let c=1/o,d=1/a,f=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,t.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Wn,l=!1){let c=this.elements,d=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Wn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===cs)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Wn,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Wn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===cs)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qr=new D,kn=new st,Fp=new D(0,0,0),zp=new D(1,1,1),Oi=new D,Ko=new D,Mn=new D,kh=new st,Vh=new Jt,Xn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Op=0,Hh=new D,Yr=new Jt,Mi=new st,Qo=new D,Vs=new D,Bp=new D,kp=new Jt,Gh=new D(1,0,0),Wh=new D(0,1,0),Xh=new D(0,0,1),qh={type:"added"},Vp={type:"removed"},jr={type:"childadded",child:null},Ic={type:"childremoved",child:null},Ht=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Xn,n=new Jt,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new et}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qo.copy(e):Qo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Vs,Qo,this.up):Mi.lookAt(Qo,Vs,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(Mi),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),jr.child=e,this.dispatchEvent(jr),jr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hp={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Dc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Ud(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return dt.workingToColorSpace(dn.copy(this),e),Math.round(tt(dn.r*255,0,255))*65536+Math.round(tt(dn.g*255,0,255))*256+Math.round(tt(dn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(dn.copy(this),t);let n=dn.r,r=dn.g,s=dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Bt){dt.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,r=dn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(ea);let n=Js(Bi.h,ea.h,t),r=Js(Bi.s,ea.s,t),s=Js(Bi.l,ea.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new ot;ot.NAMES=Ju;var so=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new D,Si=new D,Lc=new D,wi=new D,Zr=new D,Jr=new D,Yh=new D,Nc=new D,Uc=new D,Fc=new D,zc=new Pt,Oc=new Pt,Bc=new Pt,oi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vn.subVectors(r,t),Si.subVectors(n,t),Lc.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(Si),l=Vn.dot(Lc),c=Si.dot(Si),d=Si.dot(Lc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return zc.setScalar(0),Oc.setScalar(0),Bc.setScalar(0),zc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zc,s.x),o.addScaledVector(Oc,s.y),o.addScaledVector(Bc,s.z),o}static isFrontFacing(e,t,n,r){return Vn.subVectors(n,t),Si.subVectors(e,t),Vn.cross(Si).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Vn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Zr.subVectors(r,n),Jr.subVectors(s,n),Nc.subVectors(e,n);let l=Zr.dot(Nc),c=Jr.dot(Nc);if(l<=0&&c<=0)return t.copy(n);Uc.subVectors(e,r);let d=Zr.dot(Uc),f=Jr.dot(Uc);if(d>=0&&f<=d)return t.copy(r);let h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Zr,o);Fc.subVectors(e,s);let p=Zr.dot(Fc),g=Jr.dot(Fc);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Jr,a);let m=d*g-p*f;if(m<=0&&f-d>=0&&p-g>=0)return Yh.subVectors(s,r),a=(f-d)/(f-d+(p-g)),t.copy(r).addScaledVector(Yh,a);let u=1/(m+y+h);return o=y*u,a=h*u,t.copy(n).addScaledVector(Zr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),na.subVectors(this.max,Hs),$r.subVectors(e.a,Hs),Kr.subVectors(e.b,Hs),Qr.subVectors(e.c,Hs),ki.subVectors(Kr,$r),Vi.subVectors(Qr,Kr),ur.subVectors($r,Qr);let t=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-ur.z,ur.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,ur.z,0,-ur.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-ur.y,ur.x,0];return!kc(t,$r,Kr,Qr,na)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,$r,Kr,Qr,na))?!1:(ia.crossVectors(ki,Vi),t=[ia.x,ia.y,ia.z],kc(t,$r,Kr,Qr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ei=[new D,new D,new D,new D,new D,new D,new D,new D],Hn=new D,ta=new kt,$r=new D,Kr=new D,Qr=new D,ki=new D,Vi=new D,ur=new D,Hs=new D,na=new D,ia=new D,fr=new D;function kc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fr.fromArray(i,s);let a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),d=n.dot(fr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ot=new D,ra=new me,Gp=0,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}};var oo=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ao=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wp=new kt,Gs=new D,Vc=new D,vr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Vc)),this.expandByPoint(Gs.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xp=0,Nn=new st,Hc=new Ht,es=new D,Sn=new kt,Ws=new kt,jt=new D,mt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?ao:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Sn.min,Ws.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,Ws.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(Ws.min),Sn.expandByPoint(Ws.max))}Sn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)jt.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),jt.add(es)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new D,l[b]=new D;let c=new D,d=new D,f=new D,h=new me,p=new me,g=new me,y=new D,m=new D;function u(b,x,N){c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,N),d.sub(c),f.sub(c),p.sub(h),g.sub(h);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),a[b].add(y),a[x].add(y),a[N].add(y),l[b].add(m),l[x].add(m),l[N].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,x=S.length;b<x;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new D,v=new D,C=new D,E=new D;function T(b){C.fromBufferAttribute(r,b),E.copy(C);let x=a[b];M.copy(x),M.sub(C.multiplyScalar(C.dot(x))).normalize(),v.crossVectors(E,x);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,x=S.length;b<x;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let u=0;u<d;u++)h[g++]=c[p++]}return new nn(h,d,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){let h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new D,ms=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qp=0,hi=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=li(),this.name="",this.type="Material",this.blending=_r,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=Da,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xi=class extends hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ts,Xs=new D,ns=new D,is=new D,rs=new me,qs=new me,$u=new st,sa=new D,Ys=new D,oa=new D,jh=new me,Gc=new me,Zh=new me,Mr=class extends Ht{constructor(e=new Xi){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lo(t,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new ms(n,3,0,!1)),ts.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=ts,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;aa(sa.set(-.5,-.5,0),is,o,ns,r,s),aa(Ys.set(.5,-.5,0),is,o,ns,r,s),aa(oa.set(.5,.5,0),is,o,ns,r,s),jh.set(0,0),Gc.set(1,0),Zh.set(1,1);let a=e.ray.intersectTriangle(sa,Ys,oa,!1,Xs);if(a===null&&(aa(Ys.set(-.5,.5,0),is,o,ns,r,s),Gc.set(0,1),a=e.ray.intersectTriangle(sa,oa,Ys,!1,Xs),a===null))return;let l=e.ray.origin.distanceTo(Xs);l<e.near||l>e.far||t.push({distance:l,point:Xs.clone(),uv:oi.getInterpolation(Xs,sa,Ys,oa,jh,Gc,Zh,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function aa(i,e,t,n,r,s){rs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(qs.x=s*rs.x-r*rs.y,qs.y=r*rs.x+s*rs.y):qs.copy(rs),i.copy(e),i.x+=qs.x,i.y+=qs.y,i.applyMatrix4($u)}var Ti=new D,Wc=new D,la=new D,Hi=new D,Xc=new D,ca=new D,qc=new D,qi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Wc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=Hi.dot(this.direction),l=-Hi.dot(la),c=Hi.lengthSq(),d=Math.abs(1-o*o),f,h,p,g;if(d>0)if(f=o*l-a,h=o*a-l,g=s*d,f>=0)if(h>=-g)if(h<=g){let y=1/d;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wc).addScaledVector(la,h),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,s){Xc.subVectors(t,e),ca.subVectors(n,e),qc.crossVectors(Xc,ca);let o=this.direction.dot(qc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors(Hi,ca));if(l<0)return null;let c=a*this.direction.dot(Xc.cross(Hi));if(c<0||l+c>o)return null;let d=-a*Hi.dot(qc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new st,pr=new qi,da=new vr,$h=new D,ha=new D,ua=new D,fa=new D,Yc=new D,pa=new D,Kh=new D,ma=new D,lt=class extends Ht{constructor(e=new mt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],f=s[l];d!==0&&(Yc.fromBufferAttribute(f,e),o?pa.addScaledVector(Yc,d):pa.addScaledVector(Yc.sub(t),d))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(da.containsPoint(pr.origin)===!1&&(pr.intersectSphere(da,$h)===null||pr.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],u=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);r=ga(this,u,e,n,c,d,f,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){let S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=ga(this,o,e,n,c,d,f,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],u=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=v,T=v+1,b=v+2;r=ga(this,u,e,n,c,d,f,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){let S=m,M=m+1,v=m+2;r=ga(this,o,e,n,c,d,f,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Yp(i,e,t,n,r,s,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ri,a),l===null)return null;ma.copy(a),ma.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:i}}function ga(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ha),i.getVertexPosition(l,ua),i.getVertexPosition(c,fa);let d=Yp(i,e,t,n,ha,ua,fa,Kh);if(d){let f=new D;oi.getBarycoord(Kh,ha,ua,fa,f),r&&(d.uv=oi.getInterpolatedAttribute(r,a,l,c,f,new me)),s&&(d.uv1=oi.getInterpolatedAttribute(s,a,l,c,f,new me)),o&&(d.normal=oi.getInterpolatedAttribute(o,a,l,c,f,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};oi.getNormal(ha,ua,fa,h.normal),d.face=h,d.barycoord=f}return d}var Ya=class extends pn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Zt,d=Zt,f,h){super(null,o,a,l,c,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jc=new D,jp=new D,Zp=new et,bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jc.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zp.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new vr,Jp=new me(.5,.5),ba=new D,gs=class{constructor(e=new bn,t=new bn,n=new bn,r=new bn,s=new bn,o=new bn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],g=s[8],y=s[9],m=s[10],u=s[11],S=s[12],M=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,u-g,C-S).normalize(),r[1].setComponents(c+o,p+d,u+g,C+S).normalize(),r[2].setComponents(c+a,p+f,u+y,C+M).normalize(),r[3].setComponents(c-a,p-f,u-y,C-M).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,p-h,u-m,C-v).normalize();else if(r[4].setComponents(c-l,p-h,u-m,C-v).normalize(),t===Wn)r[5].setComponents(c+l,p+h,u+m,C+v).normalize();else if(t===cs)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);let t=Jp.distanceTo(e.center);return mr.radius=.7071067811865476+t,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $t=class extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ja=new D,Za=new D,Qh=new st,js=new qi,_a=new vr,Zc=new D,eu=new D,Sr=class extends Ht{constructor(e=new mt,t=new $t){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ja.fromBufferAttribute(t,r-1),Za.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ja.distanceTo(Za);e.setAttribute("lineDistance",new ct(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;Qh.copy(r).invert(),js.copy(e.ray).applyMatrix4(Qh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let u=d.getX(y),S=d.getX(y+1),M=xa(this,e,js,l,u,S,y);M&&t.push(M)}if(this.isLineLoop){let y=d.getX(g-1),m=d.getX(p),u=xa(this,e,js,l,y,m,g-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let u=xa(this,e,js,l,y,y+1,y);u&&t.push(u)}if(this.isLineLoop){let y=xa(this,e,js,l,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xa(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(ja.fromBufferAttribute(a,r),Za.fromBufferAttribute(a,s),t.distanceSqToSegment(ja,Za,Zc,eu)>n)return;Zc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zc);if(!(c<e.near||c>e.far))return{distance:c,point:eu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var tu=new D,nu=new D,Kt=class extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)tu.fromBufferAttribute(t,r),nu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+tu.distanceTo(nu);e.setAttribute("lineDistance",new ct(n,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var co=class extends pn{constructor(e=[],t=er,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fi=class extends pn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends pn{constructor(e,t,n=Yn,r,s,o,a=Zt,l=Zt,c,d=ci,f=1){if(d!==ci&&d!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ja=class extends Yi{constructor(e,t=Yn,n=er,r,s,o=Zt,a=Zt,l,c=ci){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ho=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sn=class i extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function g(y,m,u,S,M,v,C,E,T,b,x){let N=v/T,P=C/b,L=v/2,F=C/2,k=E/2,O=T+1,z=b+1,R=0,W=0,X=new D;for(let ae=0;ae<z;ae++){let ge=ae*P-F;for(let fe=0;fe<O;fe++){let ne=fe*N-L;X[y]=ne*S,X[m]=ge*M,X[u]=k,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[u]=E>0?1:-1,d.push(X.x,X.y,X.z),f.push(fe/T),f.push(1-ae/b),R+=1}}for(let ae=0;ae<b;ae++)for(let ge=0;ge<T;ge++){let fe=h+ge+O*ae,ne=h+ge+O*(ae+1),le=h+(ge+1)+O*(ae+1),se=h+(ge+1)+O*ae;l.push(fe,ne,se),l.push(ne,le,se),W+=6}a.addGroup(p,W,x),p+=W,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ci=class i extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],f=[],h=[],p=[],g=0,y=[],m=n/2,u=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function S(){let v=new D,C=new D,E=0,T=(t-e)/n;for(let b=0;b<=s;b++){let x=[],N=b/s,P=N*(t-e)+e;for(let L=0;L<=r;L++){let F=L/r,k=F*l+a,O=Math.sin(k),z=Math.cos(k);C.x=P*O,C.y=-N*n+m,C.z=P*z,f.push(C.x,C.y,C.z),v.set(O,T,z).normalize(),h.push(v.x,v.y,v.z),p.push(F,1-N),x.push(g++)}y.push(x)}for(let b=0;b<r;b++)for(let x=0;x<s;x++){let N=y[x][b],P=y[x+1][b],L=y[x+1][b+1],F=y[x][b+1];(e>0||x!==0)&&(d.push(N,P,F),E+=3),(t>0||x!==s-1)&&(d.push(P,L,F),E+=3)}c.addGroup(u,E,0),u+=E}function M(v){let C=g,E=new me,T=new D,b=0,x=v===!0?e:t,N=v===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*N,0),h.push(0,N,0),p.push(.5,.5),g++;let P=g;for(let L=0;L<=r;L++){let k=L/r*l+a,O=Math.cos(k),z=Math.sin(k);T.x=x*z,T.y=m*N,T.z=x*O,f.push(T.x,T.y,T.z),h.push(0,N,0),E.x=O*.5+.5,E.y=z*.5*N+.5,p.push(E.x,E.y),g++}for(let L=0;L<r;L++){let F=C+L,k=P+L;v===!0?d.push(k,k+1,F):d.push(k+1,k,F),b+=3}c.addGroup(u,b,v===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$a=class i extends Ci{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ya=new D,va=new D,Jc=new D,Ma=new oi,Qt=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(as*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:u}=Ma;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Ma.getNormal(Jc),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){let M=(S+1)%3,v=f[S],C=f[M],E=Ma[d[S]],T=Ma[d[M]],b=`${v}_${C}`,x=`${C}_${v}`;x in h&&h[x]?(Jc.dot(h[x].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(T.x,T.y,T.z)),h[x]=null):b in h||(h[b]={index0:c[S],index1:c[M],normal:Jc.clone()})}}for(let g in h)if(h[g]){let{index0:y,index1:m}=h[g];ya.fromBufferAttribute(a,y),va.fromBufferAttribute(a,m),p.push(ya.x,ya.y,ya.z),p.push(va.x,va.y,va.z)}this.setAttribute("position",new ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new me:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new st;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(tt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bs=class extends En{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new me){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*f+this.aX,c=h*f+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ka=class extends bs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fd(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,p*=d,r(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Sa=new D,$c=new Fd,Kc=new Fd,Qc=new Fd,Qa=class extends En{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Sa.subVectors(r[0],r[1]).add(r[0]),c=Sa);let f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Sa.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),$c.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,g,y,m),Kc.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,g,y,m),Qc.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&($c.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Kc.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Qc.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return n.set($c.calc(l),Kc.calc(l),Qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function iu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function $p(i,e){let t=1-i;return t*t*e}function Kp(i,e){return 2*(1-i)*i*e}function Qp(i,e){return i*i*e}function $s(i,e,t,n){return $p(i,e)+Kp(i,t)+Qp(i,n)}function e0(i,e){let t=1-i;return t*t*t*e}function t0(i,e){let t=1-i;return 3*t*t*i*e}function n0(i,e){return 3*(1-i)*i*i*e}function i0(i,e){return i*i*i*e}function Ks(i,e,t,n,r){return e0(i,e)+t0(i,t)+n0(i,n)+i0(i,r)}var uo=class extends En{constructor(e=new me,t=new me,n=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new me){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(e,r.x,s.x,o.x,a.x),Ks(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends En{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ks(e,r.x,s.x,o.x,a.x),Ks(e,r.y,s.y,o.y,a.y),Ks(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends En{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends En{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends En{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends En{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($s(e,r.x,s.x,o.x),$s(e,r.y,s.y,o.y),$s(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(iu(a,l.x,c.x,d.x,f.x),iu(a,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new me().fromArray(r))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Qa,CubicBezierCurve:uo,CubicBezierCurve3:el,EllipseCurve:bs,LineCurve:fo,LineCurve3:wr,QuadraticBezierCurve:po,QuadraticBezierCurve3:Er,SplineCurve:mo}),_s=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new tl[r.type]().fromJSON(r))}return this}},Tr=class extends _s{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new fo(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new po(this.currentPoint.clone(),new me(e,t),new me(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new uo(this.currentPoint.clone(),new me(e,t),new me(n,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new bs(e,t,n,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ji=class extends Tr{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Tr().fromJSON(r))}return this}};function r0(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Ku(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=c0(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,f=l;for(let h=t;h<r;h+=t){let p=i[h],g=i[h+1];p<a&&(a=p),g<l&&(l=g),p>d&&(d=p),g>f&&(f=g)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return go(s,o,t,a,l,c,0),o}function Ku(i,e,t,n,r){let s;if(r===y0(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=ru(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=ru(o/n|0,i[o],i[o+1],s);return s&&xs(s,s.next)&&(_o(s),s=s.next),s}function Ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,r,s,o){if(!i)return;!o&&s&&p0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?o0(i,n,r,s):s0(i)){e.push(l.i,i.i,c.i),_o(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=a0(Ar(i),e),go(i,e,t,n,r,s,2)):o===2&&l0(i,e,t,n,r,s):go(Ar(i),e,t,n,r,s,1);break}}}function s0(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=f&&g.y<=p&&Zs(r,a,s,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Ct(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),g=Math.min(d,f,h),y=Math.max(a,l,c),m=Math.max(d,f,h),u=ad(p,g,e,t,n),S=ad(y,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=u&&v&&v.z<=S;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Zs(a,d,l,f,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Zs(a,d,l,f,c,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=u;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Zs(a,d,l,f,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Zs(a,d,l,f,c,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function a0(i,e){let t=i;do{let n=t.prev,r=t.next.next;!xs(n,r)&&ef(n,t,t.next,r)&&bo(n,r)&&bo(r,n)&&(e.push(n.i,t.i,r.i),_o(t),_o(t.next),t=i=r),t=t.next}while(t!==i);return Ar(t)}function l0(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&b0(o,a)){let l=tf(o,a);o=Ar(o,o.next),l=Ar(l,l.next),go(o,e,t,n,r,s,0),go(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function c0(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Ku(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(g0(c))}r.sort(d0);for(let s=0;s<r.length;s++)t=h0(r[s],t);return t}function d0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function h0(i,e){let t=u0(i,e);if(!t)return e;let n=tf(t,i);return Ar(n,n.next),Ar(t,t.next)}function u0(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(xs(i,t))return t;do{if(xs(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let f=Math.abs(r-t.y)/(n-t.x);bo(t,i)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&f0(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function f0(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function p0(i,e,t,n){let r=i;do r.z===0&&(r.z=ad(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,m0(r)}function m0(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function ad(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function g0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Zs(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Qu(i,e,t,n,r,s,o,a)}function b0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_0(i,e)&&(bo(i,e)&&bo(e,i)&&x0(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||xs(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xs(i,e){return i.x===e.x&&i.y===e.y}function ef(i,e,t,n){let r=Ea(Ct(i,e,t)),s=Ea(Ct(i,e,n)),o=Ea(Ct(t,n,i)),a=Ea(Ct(t,n,e));return!!(r!==s&&o!==a||r===0&&wa(i,t,e)||s===0&&wa(i,n,e)||o===0&&wa(t,i,n)||a===0&&wa(t,e,n))}function wa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ea(i){return i>0?1:i<0?-1:0}function _0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function bo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function x0(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tf(i,e){let t=ld(i.i,i.x,i.y),n=ld(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ru(i,e,t,n){let r=ld(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ld(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var cd=class{static triangulate(e,t,n=2){return r0(e,t,n)}},br=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];su(e),ou(n,e);let o=e.length;t.forEach(su);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,ou(n,t[l]);let a=cd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function su(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Rr=class i extends mt{constructor(e=new ji([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:v0,M,v=!1,C,E,T,b;if(u){M=u.getSpacedPoints(d),v=!0,h=!1;let ce=u.isCatmullRomCurve3?u.closed:!1;C=u.computeFrenetFrames(d,ce),E=new D,T=new D,b=new D}h||(m=0,p=0,g=0,y=0);let x=a.extractPoints(c),N=x.shape,P=x.holes;if(!br.isClockWise(N)){N=N.reverse();for(let ce=0,_e=P.length;ce<_e;ce++){let re=P[ce];br.isClockWise(re)&&(P[ce]=re.reverse())}}function F(ce){let re=10000000000000001e-36,Se=ce[0];for(let I=1;I<=ce.length;I++){let We=I%ce.length,Re=ce[We],ze=Re.x-Se.x,ve=Re.y-Se.y,A=ze*ze+ve*ve,_=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(Se.x),Math.abs(Se.y)),B=re*_*_;if(A<=B){ce.splice(We,1),I--;continue}Se=Re}}F(N),P.forEach(F);let k=P.length,O=N;for(let ce=0;ce<k;ce++){let _e=P[ce];N=N.concat(_e)}function z(ce,_e,re){return _e||$e("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(_e,re)}let R=N.length;function W(ce,_e,re){let Se,I,We,Re=ce.x-_e.x,ze=ce.y-_e.y,ve=re.x-ce.x,A=re.y-ce.y,_=Re*Re+ze*ze,B=Re*A-ze*ve;if(Math.abs(B)>Number.EPSILON){let $=Math.sqrt(_),de=Math.sqrt(ve*ve+A*A),ee=_e.x-ze/$,De=_e.y+Re/$,we=re.x-A/de,ke=re.y+ve/de,he=((we-ee)*A-(ke-De)*ve)/(Re*A-ze*ve);Se=ee+Re*he-ce.x,I=De+ze*he-ce.y;let J=Se*Se+I*I;if(J<=2)return new me(Se,I);We=Math.sqrt(J/2)}else{let $=!1;Re>Number.EPSILON?ve>Number.EPSILON&&($=!0):Re<-Number.EPSILON?ve<-Number.EPSILON&&($=!0):Math.sign(ze)===Math.sign(A)&&($=!0),$?(Se=-ze,I=Re,We=Math.sqrt(_)):(Se=Re,I=ze,We=Math.sqrt(_/2))}return new me(Se/We,I/We)}let X=[];for(let ce=0,_e=O.length,re=_e-1,Se=ce+1;ce<_e;ce++,re++,Se++)re===_e&&(re=0),Se===_e&&(Se=0),X[ce]=W(O[ce],O[re],O[Se]);let ae=[],ge,fe=X.concat();for(let ce=0,_e=k;ce<_e;ce++){let re=P[ce];ge=[];for(let Se=0,I=re.length,We=I-1,Re=Se+1;Se<I;Se++,We++,Re++)We===I&&(We=0),Re===I&&(Re=0),ge[Se]=W(re[Se],re[We],re[Re]);ae.push(ge),fe=fe.concat(ge)}let ne;if(m===0)ne=br.triangulateShape(O,P);else{let ce=[],_e=[];for(let re=0;re<m;re++){let Se=re/m,I=p*Math.cos(Se*Math.PI/2),We=g*Math.sin(Se*Math.PI/2)+y;for(let Re=0,ze=O.length;Re<ze;Re++){let ve=z(O[Re],X[Re],We);pe(ve.x,ve.y,-I),Se===0&&ce.push(ve)}for(let Re=0,ze=k;Re<ze;Re++){let ve=P[Re];ge=ae[Re];let A=[];for(let _=0,B=ve.length;_<B;_++){let $=z(ve[_],ge[_],We);pe($.x,$.y,-I),Se===0&&A.push($)}Se===0&&_e.push(A)}}ne=br.triangulateShape(ce,_e)}let le=ne.length,se=g+y;for(let ce=0;ce<R;ce++){let _e=h?z(N[ce],fe[ce],se):N[ce];v?(T.copy(C.normals[0]).multiplyScalar(_e.x),E.copy(C.binormals[0]).multiplyScalar(_e.y),b.copy(M[0]).add(T).add(E),pe(b.x,b.y,b.z)):pe(_e.x,_e.y,0)}for(let ce=1;ce<=d;ce++)for(let _e=0;_e<R;_e++){let re=h?z(N[_e],fe[_e],se):N[_e];v?(T.copy(C.normals[ce]).multiplyScalar(re.x),E.copy(C.binormals[ce]).multiplyScalar(re.y),b.copy(M[ce]).add(T).add(E),pe(b.x,b.y,b.z)):pe(re.x,re.y,f/d*ce)}for(let ce=m-1;ce>=0;ce--){let _e=ce/m,re=p*Math.cos(_e*Math.PI/2),Se=g*Math.sin(_e*Math.PI/2)+y;for(let I=0,We=O.length;I<We;I++){let Re=z(O[I],X[I],Se);pe(Re.x,Re.y,f+re)}for(let I=0,We=P.length;I<We;I++){let Re=P[I];ge=ae[I];for(let ze=0,ve=Re.length;ze<ve;ze++){let A=z(Re[ze],ge[ze],Se);v?pe(A.x,A.y+M[d-1].y,M[d-1].x+re):pe(A.x,A.y,f+re)}}}V(),oe();function V(){let ce=r.length/3;if(h){let _e=0,re=R*_e;for(let Se=0;Se<le;Se++){let I=ne[Se];Ae(I[2]+re,I[1]+re,I[0]+re)}_e=d+m*2,re=R*_e;for(let Se=0;Se<le;Se++){let I=ne[Se];Ae(I[0]+re,I[1]+re,I[2]+re)}}else{for(let _e=0;_e<le;_e++){let re=ne[_e];Ae(re[2],re[1],re[0])}for(let _e=0;_e<le;_e++){let re=ne[_e];Ae(re[0]+R*d,re[1]+R*d,re[2]+R*d)}}n.addGroup(ce,r.length/3-ce,0)}function oe(){let ce=r.length/3,_e=0;ie(O,_e),_e+=O.length;for(let re=0,Se=P.length;re<Se;re++){let I=P[re];ie(I,_e),_e+=I.length}n.addGroup(ce,r.length/3-ce,1)}function ie(ce,_e){let re=ce.length;for(;--re>=0;){let Se=re,I=re-1;I<0&&(I=ce.length-1);for(let We=0,Re=d+m*2;We<Re;We++){let ze=R*We,ve=R*(We+1),A=_e+Se+ze,_=_e+I+ze,B=_e+I+ve,$=_e+Se+ve;Pe(A,_,B,$)}}}function pe(ce,_e,re){l.push(ce),l.push(_e),l.push(re)}function Ae(ce,_e,re){He(ce),He(_e),He(re);let Se=r.length/3,I=S.generateTopUV(n,r,Se-3,Se-2,Se-1);Ge(I[0]),Ge(I[1]),Ge(I[2])}function Pe(ce,_e,re,Se){He(ce),He(_e),He(Se),He(_e),He(re),He(Se);let I=r.length/3,We=S.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);Ge(We[0]),Ge(We[1]),Ge(We[3]),Ge(We[1]),Ge(We[2]),Ge(We[3])}function He(ce){r.push(l[ce*3+0]),r.push(l[ce*3+1]),r.push(l[ce*3+2])}function Ge(ce){s.push(ce.x),s.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return M0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new tl[r.type]().fromJSON(r)),new i(n,e.options)}},v0={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new me(s,o),new me(a,l),new me(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],f=e[n*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-f),new me(h,1-g),new me(y,1-u)]:[new me(a,1-l),new me(d,1-f),new me(p,1-g),new me(m,1-u)]}};function M0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Cr=class i extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=t/l,p=[],g=[],y=[],m=[];for(let u=0;u<d;u++){let S=u*h-o;for(let M=0;M<c;M++){let v=M*f-s;g.push(v,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let M=S+c*u,v=S+c*(u+1),C=S+1+c*(u+1),E=S+1+c*u;p.push(M,v,E),p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var xo=class i extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],f=new D,h=new D,p=[],g=[],y=[],m=[];for(let u=0;u<=n;u++){let S=[],M=u/n,v=0;u===0&&o===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let E=C/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(E+v,1-M),S.push(c++)}d.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){let M=d[u][S+1],v=d[u][S],C=d[u+1][S],E=d[u+1][S+1];(u!==0||o>0)&&p.push(M,v,E),(u!==n-1||l<Math.PI)&&p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yo=class i extends mt{constructor(e=new Er(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new me,d=new D,f=[],h=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function y(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),S(),u()}function m(M){d=e.getPointAt(M/t,d);let v=o.normals[M],C=o.binormals[M];for(let E=0;E<=r;E++){let T=E/r*Math.PI*2,b=Math.sin(T),x=-Math.cos(T);l.x=x*v.x+b*C.x,l.y=x*v.y+b*C.y,l.z=x*v.z+b*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){let C=(r+1)*(M-1)+(v-1),E=(r+1)*M+(v-1),T=(r+1)*M+v,b=(r+1)*(M-1)+v;g.push(C,E,b),g.push(E,T,b)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Lr(i[t]);for(let r in n)e[r]=n[r]}return e}function S0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var nf={clone:Lr,merge:un},w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nl=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var il=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ta(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Zi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sl=class extends Zi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:id,endingEnd:id}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case rd:s=e,a=2*t-n;break;case sd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rd:o=e,l=2*n-t;break;case sd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,u=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let C=0;C!==a;++C)s[C]=u*o[d+C]+S*o[c+C]+M*o[l+C]+v*o[f+C];return s}},ol=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),f=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*d;return s}},al=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ll=class extends Zi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,f=d.inTangents,h=d.outTangents;if(!f||!h){let y=(n-t)/(r-t),m=1-y;for(let u=0;u!==a;++u)s[u]=o[c+u]*m+o[l+u]*y;return s}let p=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],u=o[l+y],S=g*p+y*2,M=h[S],v=h[S+1],C=e*p+y*2,E=f[C],T=f[C+1],b=(n-t)/(r-t),x,N,P,L,F;for(let k=0;k<8;k++){x=b*b,N=x*b,P=1-b,L=P*P,F=L*P;let z=F*t+3*L*b*M+3*P*x*E+N*r-n;if(Math.abs(z)<1e-10)break;let R=3*L*(M-t)+6*P*b*(E-M)+3*x*(r-E);if(Math.abs(R)<1e-10)break;b=b-z/R,b=Math.max(0,Math.min(1,b))}s[y]=F*m+3*L*b*v+3*P*x*T+N*u}return s}},An=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ta(t,this.TimeBufferType),this.values=Ta(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ta(e.times,Array),values:Ta(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ha:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case nd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return nd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&gp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pa,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ha;var Ji=class extends An{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Qs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};cl.prototype.ValueTypeName="color";var dl=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};dl.prototype.ValueTypeName="number";var hl=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)Jt.slerpFlat(s,0,o,c-a,o,c,l);return s}},vo=class extends An{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends An{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Qs;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends An{constructor(e,t,n,r){super(e,t,n,r)}};ul.prototype.ValueTypeName="vector";var fl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rf=new fl,pl=class{constructor(e){this.manager=e!==void 0?e:rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},So=class extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ed=new st,au=new D,lu=new D,dd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===cs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Aa=new D,Ra=new Jt,si=new D,wo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ra,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,si.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Aa,Ra,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ra,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new D,cu=new me,du=new me,hn=class extends wo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,cu,du),t.subVectors(du,cu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ys=class extends wo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hd=class extends dd{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=-90,os=1,ml=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(ss,os,e,t);r.layers=this.layers,this.add(r);let s=new hn(ss,os,e,t);s.layers=this.layers,this.add(s);let o=new hn(ss,os,e,t);o.layers=this.layers,this.add(o);let a=new hn(ss,os,e,t);a.layers=this.layers,this.add(a);let l=new hn(ss,os,e,t);l.layers=this.layers,this.add(l);let c=new hn(ss,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},gl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Od="\\[\\]\\.:\\/",T0=new RegExp("["+Od+"]","g"),Bd="[^"+Od+"]",A0="[^"+Od.replace("\\.","")+"]",R0=/((?:WC+[\/:])*)/.source.replace("WC",Bd),C0=/(WCOD+)?/.source.replace("WCOD",A0),P0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bd),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bd),D0=new RegExp("^"+R0+C0+P0+I0+"$"),L0=["material","materials","bones","map"],ud=class{constructor(e,t,n){let r=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(e){let t=D0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);L0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=ud;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ix=new Float32Array(1);var hu=new st,Eo=class{constructor(e,t,n=0,r=1/0){this.ray=new qi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(e,t=!0,n=[]){return fd(e,this,n,t),n.sort(uu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)fd(e[r],this,n,t);return n.sort(uu),n}};function uu(i,e){return i.distance-e.distance}function fd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)fd(s[o],e,t,!0)}}var Ms=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var To=class extends Kt{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new mt;s.setIndex(new nn(n,1)),s.setAttribute("position",new ct(r,3)),super(s,new $t({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var fu=new D,Ca,td,Pr=class extends Ht{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Ca===void 0&&(Ca=new mt,Ca.setAttribute("position",new ct([0,0,0,0,1,0],3)),td=new $a(.5,1,5,1),td.translate(0,-.5,0)),this.position.copy(t),this.line=new Sr(Ca,new $t({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(td,new ui({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{fu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(fu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Ao=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ze("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function kd(i,e,t,n){let r=N0(n);switch(t){case Pd:return i*e;case Dd:return i*e/r.components*r.byteLength;case Sl:return i*e/r.components*r.byteLength;case Dr:return i*e*2/r.components*r.byteLength;case wl:return i*e*2/r.components*r.byteLength;case Id:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case El:return i*e*4/r.components*r.byteLength;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(e,8)/4;case Tl:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Il:case Ll:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dl:case Ul:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $l:case Kl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N0(i){switch(i){case _n:case Td:return{byteLength:1,components:1};case ws:case Ad:case mi:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case Yn:case yl:case jn:return{byteLength:4,components:1};case Rd:case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Af(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function k0(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){let g=f[h],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){let y=f[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
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
#endif`,Bm=`uniform sampler2D dfgLUT;
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
}`,km=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
}`,l1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,d1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,f1=`#define TOON
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
}`,p1=`uniform float size;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,x1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:V0,alphahash_pars_fragment:H0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:q0,aomap_fragment:Y0,aomap_pars_fragment:j0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:$0,beginnormal_vertex:K0,bsdfs:Q0,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:rm,clipping_planes_vertex:sm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:dm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:bm,colorspace_pars_fragment:_m,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:Sm,fog_vertex:wm,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Im,lights_pars_begin:Dm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:Fm,lights_phong_pars_fragment:zm,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:km,lights_fragment_maps:Vm,lights_fragment_end:Hm,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:jm,map_particle_fragment:Zm,map_particle_pars_fragment:Jm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Km,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:rg,normal_fragment_maps:sg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:bg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Sg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Ig,tonemapping_fragment:Dg,tonemapping_pars_fragment:Lg,transmission_fragment:Ng,transmission_pars_fragment:Ug,uv_pars_fragment:Fg,uv_pars_vertex:zg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:kg,background_frag:Vg,backgroundCube_vert:Hg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distance_vert:jg,distance_frag:Zg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:Kg,linedashed_frag:Qg,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:a1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:u1,meshtoon_frag:f1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:b1,sprite_vert:_1,sprite_frag:x1},Ie={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bi={basic:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ot(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:un([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:un([Ie.lights,Ie.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};bi.physical={uniforms:un([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var oc={r:0,b:0,g:0},Nr=new Xn,y1=new st;function v1(i,e,t,n,r,s){let o=new ot(0),a=r===!0?0:1,l,c,d=null,f=0,h=null;function p(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(S){let M=!1,v=p(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Po)?(c===void 0&&(c=new lt(new sn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Lr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Nr.copy(M.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Nr)),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==pt,(d!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new Cr(2,2),new Tn({name:"BackgroundMaterial",uniforms:Lr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(oc,zd(i)),t.buffers.color.setClear(oc.r,oc.g,oc.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:u}}function M1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,L,F,k,O){let z=!1,R=f(P,k,F,L);s!==R&&(s=R,c(s.object)),z=p(P,k,F,O),z&&g(P,k,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(P,L,F,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function f(P,L,F,k){let O=k.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let R=P.isInstancedMesh===!0?P.id:0,W=z[R];W===void 0&&(W={},z[R]=W);let X=W[F.id];X===void 0&&(X={},W[F.id]=X);let ae=X[O];return ae===void 0&&(ae=h(l()),X[O]=ae),ae}function h(P){let L=[],F=[],k=[];for(let O=0;O<t;O++)L[O]=0,F[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:P,attributes:{},index:null}}function p(P,L,F,k){let O=s.attributes,z=L.attributes,R=0,W=F.getAttributes();for(let X in W)if(W[X].location>=0){let ge=O[X],fe=z[X];if(fe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(fe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(fe=P.instanceColor)),ge===void 0||ge.attribute!==fe||fe&&ge.data!==fe.data)return!0;R++}return s.attributesNum!==R||s.index!==k}function g(P,L,F,k){let O={},z=L.attributes,R=0,W=F.getAttributes();for(let X in W)if(W[X].location>=0){let ge=z[X];ge===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));let fe={};fe.attribute=ge,ge&&ge.data&&(fe.data=ge.data),O[X]=fe,R++}s.attributes=O,s.attributesNum=R,s.index=k}function y(){let P=s.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function m(P){u(P,0)}function u(P,L){let F=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;F[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),O[P]!==L&&(i.vertexAttribDivisor(P,L),O[P]=L)}function S(){let P=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(P,L,F,k,O,z,R){R===!0?i.vertexAttribIPointer(P,L,F,O,z):i.vertexAttribPointer(P,L,F,k,O,z)}function v(P,L,F,k){y();let O=k.attributes,z=F.getAttributes(),R=L.defaultAttributeValues;for(let W in z){let X=z[W];if(X.location>=0){let ae=O[W];if(ae===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){let ge=ae.normalized,fe=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;let le=ne.buffer,se=ne.type,V=ne.bytesPerElement,oe=se===i.INT||se===i.UNSIGNED_INT||ae.gpuType===yl;if(ae.isInterleavedBufferAttribute){let ie=ae.data,pe=ie.stride,Ae=ae.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)u(X.location+Pe,ie.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Pe=0;Pe<X.locationSize;Pe++)M(X.location+Pe,fe/X.locationSize,se,ge,pe*V,(Ae+fe/X.locationSize*Pe)*V,oe)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)u(X.location+ie,ae.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<X.locationSize;ie++)m(X.location+ie);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ie=0;ie<X.locationSize;ie++)M(X.location+ie,fe/X.locationSize,se,ge,fe*V,fe/X.locationSize*ie*V,oe)}}else if(R!==void 0){let ge=R[W];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(X.location,ge);break;case 3:i.vertexAttrib3fv(X.location,ge);break;case 4:i.vertexAttrib4fv(X.location,ge);break;default:i.vertexAttrib1fv(X.location,ge)}}}}S()}function C(){x();for(let P in n){let L=n[P];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P.id]}function T(P){for(let L in n){let F=n[L];for(let k in F){let O=F[k];if(O[P.id]===void 0)continue;let z=O[P.id];for(let R in z)d(z[R].object),delete z[R];delete O[P.id]}}}function b(P){for(let L in n){let F=n[L],k=P.isInstancedMesh===!0?P.id:0,O=F[k];if(O!==void 0){for(let z in O){let R=O[z];for(let W in R)d(R[W].object),delete R[W];delete O[z]}delete F[k],Object.keys(F).length===0&&delete n[L]}}}function x(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function S1(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];t.update(p,n,1)}function l(c,d,f,h){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y]*h[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function w1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jn&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:C,samples:E}}function E1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new bn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{let S=s?0:n,M=S*4,v=u.clippingState||null;l.value=v,v=d(g,h,M,p);for(let C=0;C!==M;++C)v[C]=t[C];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let u=p+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,v=p;M!==y;++M,v+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ir=4,sf=[.125,.215,.35,.446,.526,.582],Fr=20,T1=256,Fo=new ys,of=new ot,Vd=null,Hd=0,Gd=0,Wd=!1,A1=new D,lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=A1}=s;Vd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Hd,Gd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:mi,format:Un,colorSpace:yr,depthBuffer:!1},r=af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=R1(s)),this._blurMaterial=P1(s,e,t),this._ggxMaterial=C1(s,e,t)}return r}_compileMaterial(e){let t=new lt(new mt,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,r,s){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(of),f.toneMapping=qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new sn,new ui({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,u=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,u=!0):(m.color.copy(of),u=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));let C=this._cubeSize;Ts(r,v*C,M>2?C:0,C,C),f.setRenderTarget(r),u&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===er||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=0+c*1.25,p=f*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ir?n-g+ir:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Ts(s,m,u,3*y,2*y),r.setRenderTarget(s),r.render(a,Fo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(e,m,u,3*y,2*y),r.setRenderTarget(e),r.render(a,Fo)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");let d=3,f=this._lodMeshes[r];f.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),y=s/g,m=isFinite(s)?1+Math.floor(d*y):Fr;m>Fr&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);let u=[],S=0;for(let T=0;T<Fr;++T){let b=T/y,x=Math.exp(-b*b/2);u.push(x),T===0?S+=x:T<m&&(S+=2*x)}for(let T=0;T<u.length;T++)u[T]=u[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let v=this._sizeLods[r],C=3*v*(r>M-ir?r-M+ir:0),E=4*(this._cubeSize-v);Ts(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(f,Fo)}};function R1(i){let e=[],t=[],n=[],r=i,s=i-ir+1+sf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ir?l=sf[o-i+ir-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,y=3,m=2,u=1,S=new Float32Array(y*g*p),M=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,b=E>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(x,y*g*E),M.set(h,m*g*E);let N=[E,E,E,E,E,E];v.set(N,u*g*E)}let C=new mt;C.setAttribute("position",new nn(S,y)),C.setAttribute("uv",new nn(M,m)),C.setAttribute("faceIndex",new nn(v,u)),n.push(new lt(C,null)),r>ir&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function af(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function C1(i,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function P1(i,e,t){let n=new Float32Array(Fr),r=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lf(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}var cc=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new co(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:pi});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===tr&&(t.minFilter=rn),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function I1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===bl||p===_l)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new cc(g.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===bl||p===_l,y=p===er||p===Ir;if(g||y){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new lc(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new lc(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,p){return p===bl?h.mapping=er:p===_l&&(h.mapping=Ir),h}function l(h){let p=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function D1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&io("WebGLRenderer: "+n+" extension not supported."),r}}}function L1(i,e,t,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(p!==null){let S=p.array;y=p.version;for(let M=0,v=S.length;M<v;M+=3){let C=S[M+0],E=S[M+1],T=S[M+2];h.push(C,E,E,T,T,C)}}else{let S=g.array;y=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let C=M+0,E=M+1,T=M+2;h.push(C,E,E,T,T,C)}}let m=new(g.count>=65535?ao:oo)(h,1);m.version=y;let u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){let h=s.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function N1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function f(h,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,y,0,g);let u=0;for(let S=0;S<g;S++)u+=p[S]*y[S];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function U1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F1(i,e,t){let n=new WeakMap,r=new Pt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==f){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*f),T=new ro(E,v,C,f);T.type=jn,T.needsUpdate=!0;let b=M*4;for(let N=0;N<f;N++){let P=m[N],L=u[N],F=S[N],k=v*C*4*N;for(let O=0;O<P.count;O++){let z=O*b;p===!0&&(r.fromBufferAttribute(P,O),E[k+z+0]=r.x,E[k+z+1]=r.y,E[k+z+2]=r.z,E[k+z+3]=0),g===!0&&(r.fromBufferAttribute(L,O),E[k+z+4]=r.x,E[k+z+5]=r.y,E[k+z+6]=r.z,E[k+z+7]=0),y===!0&&(r.fromBufferAttribute(F,O),E[k+z+8]=r.x,E[k+z+9]=r.y,E[k+z+10]=r.z,E[k+z+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:T,size:new me(v,C)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function z1(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var O1={[xd]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[vd]:"CINEON_TONE_MAPPING",[Co]:"ACES_FILMIC_TONE_MAPPING",[Sd]:"AGX_TONE_MAPPING",[wd]:"NEUTRAL_TONE_MAPPING",[Md]:"CUSTOM_TONE_MAPPING"};function B1(i,e,t,n,r){let s=new wn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new wn(e,t,{type:mi,depthBuffer:!1,stencilBuffer:!1}),a=new mt;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));let l=new nl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new lt(a,l),d=new ys(-1,1,1,-1,0,1),f=null,h=null,p=!1,g,y=null,m=[],u=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let v=0;v<m.length;v++){let C=m[v];C.setSize&&C.setSize(S,M)}},this.setEffects=function(S){m=S,u=m.length>0&&m[0].isRenderPass===!0;let M=s.width,v=s.height;for(let C=0;C<m.length;C++){let E=m[C];E.setSize&&E.setSize(M,v)}},this.begin=function(S,M){if(p||S.toneMapping===qn&&m.length===0)return!1;if(y=M,M!==null){let v=M.width,C=M.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return u===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=qn,!0},this.hasRenderPass=function(){return u},this.end=function(S,M){S.toneMapping=g,p=!0;let v=s,C=o;for(let E=0;E<m.length;E++){let T=m[E];if(T.enabled!==!1&&(T.render(S,C,v,M),T.needsSwap!==!1)){let b=v;v=C,C=b}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},dt.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");let E=O1[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(y),S.render(c,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Rf=new pn,Yd=new Yi(1,1),Cf=new ro,Pf=new qa,If=new co,df=[],hf=[],uf=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uc(i,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function H1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function G1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function W1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),Wt(t,n)}}function X1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;ff.set(n),i.uniformMatrix3fv(this.addr,!1,ff),Wt(t,n)}}function q1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;uf.set(n),i.uniformMatrix4fv(this.addr,!1,uf),Wt(t,n)}}function Y1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function J1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function $1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function eb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function tb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yd.compareFunction=t.isReversedDepthBuffer()?sc:rc,s=Yd):s=Rf,t.setTexture2D(e||s,r)}function nb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pf,r)}function ib(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||If,r)}function rb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cf,r)}function sb(i){switch(i){case 5126:return k1;case 35664:return V1;case 35665:return H1;case 35666:return G1;case 35674:return W1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return Z1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return K1;case 36295:return Q1;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(i,e){i.uniform1fv(this.addr,e)}function ab(i,e){let t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function lb(i,e){let t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function cb(i,e){let t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function db(i,e){let t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hb(i,e){let t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ub(i,e){let t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fb(i,e){i.uniform1iv(this.addr,e)}function pb(i,e){i.uniform2iv(this.addr,e)}function mb(i,e){i.uniform3iv(this.addr,e)}function gb(i,e){i.uniform4iv(this.addr,e)}function bb(i,e){i.uniform1uiv(this.addr,e)}function _b(i,e){i.uniform2uiv(this.addr,e)}function xb(i,e){i.uniform3uiv(this.addr,e)}function yb(i,e){i.uniform4uiv(this.addr,e)}function vb(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Yd:o=Rf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Mb(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pf,s[o])}function Sb(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||If,s[o])}function wb(i,e,t){let n=this.cache,r=e.length,s=uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Cf,s[o])}function Eb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return db;case 35675:return hb;case 35676:return ub;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return bb;case 36294:return _b;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return wb}}var jd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sb(t.type)}},Zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eb(t.type)}},Jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Xd=/(\w+)(\])?(\[|\.)?/g;function mf(i,e){i.seq.push(e),i.map[e.id]=e}function Tb(i,e,t){let n=i.name,r=n.length;for(Xd.lastIndex=0;;){let s=Xd.exec(n),o=Xd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mf(t,c===void 0?new jd(a,i,e):new Zd(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Jd(a),mf(t,f)),t=f}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Tb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function gf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ab=37297,Rb=0;function Cb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var bf=new et;function Pb(i){dt._getMatrix(bf,dt.workingColorSpace,i);let e=`mat3( ${bf.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _f(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Cb(i.getShaderSource(e),a)}else return s}function Ib(i,e){let t=Pb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Db={[xd]:"Linear",[yd]:"Reinhard",[vd]:"Cineon",[Co]:"ACESFilmic",[Sd]:"AgX",[wd]:"Neutral",[Md]:"Custom"};function Lb(i,e){let t=Db[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ac=new D;function Nb(){dt.getLuminanceCoefficients(ac);let i=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function Fb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Oo(i){return i!==""}function xf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(Ob,kb)}var Bb=new Map;function kb(i,e){let t=nt[e];if(t===void 0){let n=Bb.get(e);if(n!==void 0)t=nt[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $d(t)}var Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(Vb,Hb)}function Hb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Gb={[Ro]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function Wb(i){return Gb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xb={[er]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function qb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yb={[Ir]:"ENVMAP_MODE_REFRACTION"};function jb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zb={[_d]:"ENVMAP_BLENDING_MULTIPLY",[Uu]:"ENVMAP_BLENDING_MIX",[Fu]:"ENVMAP_BLENDING_ADD"};function Jb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[i.combine]||"ENVMAP_BLENDING_NONE"}function $b(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Wb(t),c=qb(t),d=jb(t),f=Jb(t),h=$b(t),p=Ub(t),g=Fb(s),y=r.createProgram(),m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),u.length>0&&(u+=`
`)):(m=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),u=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?nt.tonemapping_pars_fragment:"",t.toneMapping!==qn?Lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=$d(o),o=xf(o,t),o=yf(o,t),a=$d(a),a=xf(a,t),a=yf(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=S+m+o,v=S+u+a,C=gf(r,r.VERTEX_SHADER,M),E=gf(r,r.FRAGMENT_SHADER,v);r.attachShader(y,C),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(P){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(y)||"",F=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(E)||"",O=L.trim(),z=F.trim(),R=k.trim(),W=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,E);else{let ae=_f(r,C,"vertex"),ge=_f(r,E,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ae+`
`+ge)}else O!==""?Ze("WebGLProgram: Program Info Log:",O):(z===""||R==="")&&(X=!1);X&&(P.diagnostics={runnable:W,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:R,prefix:u}})}r.deleteShader(C),r.deleteShader(E),b=new As(r,y),x=zb(r,y)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,Ab)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=E,this}var Qb=0,Kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qd(e),t.set(e,n)),n}},Qd=class{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}};function e_(i,e,t,n,r,s){let o=new fs,a=new Kd,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function y(b,x,N,P,L){let F=P.fog,k=L.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,R=e.get(b.envMap||O,z),W=R&&R.mapping===Po?R.image.height:null,X=p[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ze("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ge=ae!==void 0?ae.length:0,fe=0;k.morphAttributes.position!==void 0&&(fe=1),k.morphAttributes.normal!==void 0&&(fe=2),k.morphAttributes.color!==void 0&&(fe=3);let ne,le,se,V;if(X){let Be=bi[X];ne=Be.vertexShader,le=Be.fragmentShader}else ne=b.vertexShader,le=b.fragmentShader,a.update(b),se=a.getVertexShaderID(b),V=a.getFragmentShaderID(b);let oe=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),pe=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,Pe=!!b.map,He=!!b.matcap,Ge=!!R,ce=!!b.aoMap,_e=!!b.lightMap,re=!!b.bumpMap,Se=!!b.normalMap,I=!!b.displacementMap,We=!!b.emissiveMap,Re=!!b.metalnessMap,ze=!!b.roughnessMap,ve=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,B=b.iridescence>0,$=b.sheen>0,de=b.transmission>0,ee=ve&&!!b.anisotropyMap,De=A&&!!b.clearcoatMap,we=A&&!!b.clearcoatNormalMap,ke=A&&!!b.clearcoatRoughnessMap,he=B&&!!b.iridescenceMap,J=B&&!!b.iridescenceThicknessMap,ue=$&&!!b.sheenColorMap,xe=$&&!!b.sheenRoughnessMap,Ee=!!b.specularMap,Me=!!b.specularColorMap,Ue=!!b.specularIntensityMap,U=de&&!!b.transmissionMap,H=de&&!!b.thicknessMap,j=!!b.gradientMap,Q=!!b.alphaMap,K=b.alphaTest>0,q=!!b.alphaHash,be=!!b.extensions,Te=qn;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Ke={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:le,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:yr,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:He,envMap:Ge,envMapMode:Ge&&R.mapping,envMapCubeUVHeight:W,aoMap:ce,lightMap:_e,bumpMap:re,normalMap:Se,displacementMap:I,emissiveMap:We,normalMapObjectSpace:Se&&b.normalMapType===Bu,normalMapTangentSpace:Se&&b.normalMapType===Ld,metalnessMap:Re,roughnessMap:ze,anisotropy:ve,anisotropyMap:ee,clearcoat:A,clearcoatMap:De,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:_,iridescence:B,iridescenceMap:he,iridescenceThicknessMap:J,sheen:$,sheenColorMap:ue,sheenRoughnessMap:xe,specularMap:Ee,specularColorMap:Me,specularIntensityMap:Ue,transmission:de,transmissionMap:U,thicknessMap:H,gradientMap:j,opaque:b.transparent===!1&&b.blending===_r&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:K,alphaHash:q,combine:b.combine,mapUv:Pe&&g(b.map.channel),aoMapUv:ce&&g(b.aoMap.channel),lightMapUv:_e&&g(b.lightMap.channel),bumpMapUv:re&&g(b.bumpMap.channel),normalMapUv:Se&&g(b.normalMap.channel),displacementMapUv:I&&g(b.displacementMap.channel),emissiveMapUv:We&&g(b.emissiveMap.channel),metalnessMapUv:Re&&g(b.metalnessMap.channel),roughnessMapUv:ze&&g(b.roughnessMap.channel),anisotropyMapUv:ee&&g(b.anisotropyMap.channel),clearcoatMapUv:De&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ee&&g(b.specularMap.channel),specularColorMapUv:Me&&g(b.specularColorMap.channel),specularIntensityMapUv:Ue&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:H&&g(b.thicknessMap.channel),alphaMapUv:Q&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||ve),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Pe||Q),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ft,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function m(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)x.push(N),x.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(u(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function u(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let x=p[b.type],N;if(x){let P=bi[x];N=nf.clone(P.uniforms)}else N=b.uniforms;return N}function v(b,x){let N=d.get(x);return N!==void 0?++N.usedTimes:(N=new Kb(i,x,b,r),c.push(N),d.set(x,N)),N}function C(b){if(--b.usedTimes===0){let x=c.indexOf(b);c[x]=c[c.length-1],c.pop(),d.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function T(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:T}}function t_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function n_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Sf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,y,m,u){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:u},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=u),e++,S}function l(h,p,g,y,m,u){let S=a(h,p,g,y,m,u);g.transmission>0?n.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(h,p,g,y,m,u){let S=a(h,p,g,y,m,u);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,p){t.length>1&&t.sort(h||n_),n.length>1&&n.sort(p||Sf),r.length>1&&r.sort(p||Sf)}function f(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function i_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new wf,i.set(n,[o])):r>=s.length?(o=new wf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function r_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function s_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var o_=0;function a_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function l_(i){let e=new r_,t=s_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new st,o=new st;function a(c){let d=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,S=0,M=0,v=0,C=0,E=0,T=0;c.sort(a_);for(let x=0,N=c.length;x<N;x++){let P=c[x],L=P.color,F=P.intensity,k=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Dr?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=L.r*F,f+=L.g*F,h+=L.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);T++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,W=t.get(P);W.shadowIntensity=R.intensity,W.shadowBias=R.bias,W.shadowNormalBias=R.normalBias,W.shadowRadius=R.radius,W.shadowMapSize=R.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=z,p++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(L).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[y]=z;let R=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,R.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[y]=R.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=R.intensity,W.shadowBias=R.bias,W.shadowNormalBias=R.normalBias,W.shadowRadius=R.radius,W.shadowMapSize=R.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=O,v++}y++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(L).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let R=P.shadow,W=t.get(P);W.shadowIntensity=R.intensity,W.shadowBias=R.bias,W.shadowNormalBias=R.normalBias,W.shadowRadius=R.radius,W.shadowMapSize=R.mapSize,W.shadowCameraNear=R.camera.near,W.shadowCameraFar=R.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=z,g++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==u||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==C||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=g,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=u,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=C,b.numLightProbes=T,n.version=o_++)}function l(c,d){let f=0,h=0,p=0,g=0,y=0,m=d.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){let M=c[u];if(M.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Ef(i){let e=new l_(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ef(i),e.set(r,[a])):s>=o.length?(a=new Ef(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h_=`uniform sampler2D shadow_pass;
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
}`,u_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],f_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Tf=new st,zo=new D,qd=new D;function p_(i,e,t){let n=new gs,r=new me,s=new me,o=new Pt,a=new il,l=new rl,c={},d=t.maxTextureSize,f={[Ri]:mn,[mn]:Ri,[Ft]:Ft},h=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:d_,fragmentShader:h_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ro;let u=this.type;this.render=function(E,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===gu&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ro);let x=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(pi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=u!==this.type;F&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=E.length;k<O;k++){let z=E[k],R=z.shadow;if(R===void 0){Ze("WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);let W=R.getFrameExtents();r.multiply(W),s.copy(R.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,R.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,R.mapSize.y=s.y));let X=i.state.buffers.depth.getReversed();if(R.camera._reversedDepth=X,R.map===null||F===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===Ss){if(z.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new wn(r.x,r.y,{format:Dr,type:mi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),R.map.texture.name=z.name+".shadowMap",R.map.depthTexture=new Yi(r.x,r.y,jn),R.map.depthTexture.name=z.name+".shadowMapDepth",R.map.depthTexture.format=ci,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Zt,R.map.depthTexture.magFilter=Zt}else z.isPointLight?(R.map=new cc(r.x),R.map.depthTexture=new Ja(r.x,Yn)):(R.map=new wn(r.x,r.y),R.map.depthTexture=new Yi(r.x,r.y,Yn)),R.map.depthTexture.name=z.name+".shadowMap",R.map.depthTexture.format=ci,this.type===Ro?(R.map.depthTexture.compareFunction=X?sc:rc,R.map.depthTexture.minFilter=rn,R.map.depthTexture.magFilter=rn):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Zt,R.map.depthTexture.magFilter=Zt);R.camera.updateProjectionMatrix()}let ae=R.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ae;ge++){if(R.map.isWebGLCubeRenderTarget)i.setRenderTarget(R.map,ge),i.clear();else{ge===0&&(i.setRenderTarget(R.map),i.clear());let fe=R.getViewport(ge);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),L.viewport(o)}if(z.isPointLight){let fe=R.camera,ne=R.matrix,le=z.distance||fe.far;le!==fe.far&&(fe.far=le,fe.updateProjectionMatrix()),zo.setFromMatrixPosition(z.matrixWorld),fe.position.copy(zo),qd.copy(fe.position),qd.add(u_[ge]),fe.up.copy(f_[ge]),fe.lookAt(qd),fe.updateMatrixWorld(),ne.makeTranslation(-zo.x,-zo.y,-zo.z),Tf.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Tf,fe.coordinateSystem,fe.reversedDepth)}else R.updateMatrices(z);n=R.getFrustum(),v(T,b,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Ss&&S(R,b),R.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(x,N,P)};function S(E,T){let b=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new wn(r.x,r.y,{format:Dr,type:mi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,p,y,null)}function M(E,T,b,x){let N=null,P=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)N=P;else if(N=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=N.uuid,F=T.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let O=k[F];O===void 0&&(O=N.clone(),k[F]=O,T.addEventListener("dispose",C)),N=O}if(N.visible=T.visible,N.wireframe=T.wireframe,x===Ss?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:f[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let L=i.properties.get(N);L.light=b}return N}function v(E,T,b,x,N){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Ss)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let F=e.update(E),k=E.material;if(Array.isArray(k)){let O=F.groups;for(let z=0,R=O.length;z<R;z++){let W=O[z],X=k[W.materialIndex];if(X&&X.visible){let ae=M(E,X,x,N);E.onBeforeShadow(i,E,T,b,F,ae,W),i.renderBufferDirect(b,null,F,ae,E,W),E.onAfterShadow(i,E,T,b,F,ae,W)}}}else if(k.visible){let O=M(E,k,x,N);E.onBeforeShadow(i,E,T,b,F,O,null),i.renderBufferDirect(b,null,F,O,E,null),E.onAfterShadow(i,E,T,b,F,O,null)}}let L=E.children;for(let F=0,k=L.length;F<k;F++)v(L[F],T,b,x,N)}function C(E){E.target.removeEventListener("dispose",C);for(let b in c){let x=c[b],N=E.target.uuid;N in x&&(x[N].dispose(),delete x[N])}}}function m_(i,e){function t(){let U=!1,H=new Pt,j=null,Q=new Pt(0,0,0,0);return{setMask:function(K){j!==K&&!U&&(i.colorMask(K,K,K,K),j=K)},setLocked:function(K){U=K},setClear:function(K,q,be,Te,Ke){Ke===!0&&(K*=Te,q*=Te,be*=Te),H.set(K,q,be,Te),Q.equals(H)===!1&&(i.clearColor(K,q,be,Te),Q.copy(H))},reset:function(){U=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,H=!1,j=null,Q=null,K=null;return{setReversed:function(q){if(H!==q){let be=e.get("EXT_clip_control");q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),H=q;let Te=K;K=null,this.setClear(Te)}},getReversed:function(){return H},setTest:function(q){q?oe(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(q){j!==q&&!U&&(i.depthMask(q),j=q)},setFunc:function(q){if(H&&(q=Zu[q]),Q!==q){switch(q){case La:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case Fa:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=q}},setLocked:function(q){U=q},setClear:function(q){K!==q&&(K=q,H&&(q=1-q),i.clearDepth(q))},reset:function(){U=!1,j=null,Q=null,K=null,H=!1}}}function r(){let U=!1,H=null,j=null,Q=null,K=null,q=null,be=null,Te=null,Ke=null;return{setTest:function(Be){U||(Be?oe(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(Be){H!==Be&&!U&&(i.stencilMask(Be),H=Be)},setFunc:function(Be,Vt,an){(j!==Be||Q!==Vt||K!==an)&&(i.stencilFunc(Be,Vt,an),j=Be,Q=Vt,K=an)},setOp:function(Be,Vt,an){(q!==Be||be!==Vt||Te!==an)&&(i.stencilOp(Be,Vt,an),q=Be,be=Vt,Te=an)},setLocked:function(Be){U=Be},setClear:function(Be){Ke!==Be&&(i.clearStencil(Be),Ke=Be)},reset:function(){U=!1,H=null,j=null,Q=null,K=null,q=null,be=null,Te=null,Ke=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,u=null,S=null,M=null,v=null,C=null,E=null,T=new ot(0,0,0),b=0,x=!1,N=null,P=null,L=null,F=null,k=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,R=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=R>=1):W.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=R>=2);let X=null,ae={},ge=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),ne=new Pt().fromArray(ge),le=new Pt().fromArray(fe);function se(U,H,j,Q){let K=new Uint8Array(4),q=i.createTexture();i.bindTexture(U,q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<j;be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(H+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return q}let V={};V[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(xr),re(!1),Se(pd),oe(i.CULL_FACE),ce(pi);function oe(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ie(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function pe(U,H){return f[U]!==H?(i.bindFramebuffer(U,H),f[U]=H,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=H),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Ae(U,H){let j=p,Q=!1;if(U){j=h.get(H),j===void 0&&(j=[],h.set(H,j));let K=U.textures;if(j.length!==K.length||j[0]!==i.COLOR_ATTACHMENT0){for(let q=0,be=K.length;q<be;q++)j[q]=i.COLOR_ATTACHMENT0+q;j.length=K.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function Pe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let He={[Wi]:i.FUNC_ADD,[_u]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};He[yu]=i.MIN,He[vu]=i.MAX;let Ge={[Mu]:i.ZERO,[Su]:i.ONE,[wu]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[Tu]:i.DST_ALPHA,[Eu]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(U,H,j,Q,K,q,be,Te,Ke,Be){if(U===pi){y===!0&&(ie(i.BLEND),y=!1);return}if(y===!1&&(oe(i.BLEND),y=!0),U!==bu){if(U!==m||Be!==x){if((u!==Wi||v!==Wi)&&(i.blendEquation(i.FUNC_ADD),u=Wi,v=Wi),Be)switch(U){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFunc(i.ONE,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",U);break}else switch(U){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gd:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",U);break}S=null,M=null,C=null,E=null,T.set(0,0,0),b=0,m=U,x=Be}return}K=K||H,q=q||j,be=be||Q,(H!==u||K!==v)&&(i.blendEquationSeparate(He[H],He[K]),u=H,v=K),(j!==S||Q!==M||q!==C||be!==E)&&(i.blendFuncSeparate(Ge[j],Ge[Q],Ge[q],Ge[be]),S=j,M=Q,C=q,E=be),(Te.equals(T)===!1||Ke!==b)&&(i.blendColor(Te.r,Te.g,Te.b,Ke),T.copy(Te),b=Ke),m=U,x=!1}function _e(U,H){U.side===Ft?ie(i.CULL_FACE):oe(i.CULL_FACE);let j=U.side===mn;H&&(j=!j),re(j),U.blending===_r&&U.transparent===!1?ce(pi):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),We(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function Se(U){U!==pu?(oe(i.CULL_FACE),U!==P&&(U===pd?i.cullFace(i.BACK):U===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),P=U}function I(U){U!==L&&(z&&i.lineWidth(U),L=U)}function We(U,H,j){U?(oe(i.POLYGON_OFFSET_FILL),(F!==H||k!==j)&&(F=H,k=j,o.getReversed()&&(H=-H),i.polygonOffset(H,j))):ie(i.POLYGON_OFFSET_FILL)}function Re(U){U?oe(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function ze(U){U===void 0&&(U=i.TEXTURE0+O-1),X!==U&&(i.activeTexture(U),X=U)}function ve(U,H,j){j===void 0&&(X===null?j=i.TEXTURE0+O-1:j=X);let Q=ae[j];Q===void 0&&(Q={type:void 0,texture:void 0},ae[j]=Q),(Q.type!==U||Q.texture!==H)&&(X!==j&&(i.activeTexture(j),X=j),i.bindTexture(U,H||V[U]),Q.type=U,Q.texture=H)}function A(){let U=ae[X];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function de(){try{i.texSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function we(){try{i.texStorage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function ke(){try{i.texStorage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function he(){try{i.texImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function J(){try{i.texImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function ue(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function xe(U){le.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function Ee(U,H){let j=c.get(H);j===void 0&&(j=new WeakMap,c.set(H,j));let Q=j.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(H,U.name),j.set(U,Q))}function Me(U,H){let Q=c.get(H).get(U);l.get(H)!==Q&&(i.uniformBlockBinding(H,Q,U.__bindingPointIndex),l.set(H,Q))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},X=null,ae={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,u=null,S=null,M=null,v=null,C=null,E=null,T=new ot(0,0,0),b=0,x=!1,N=null,P=null,L=null,F=null,k=null,ne.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:ie,bindFramebuffer:pe,drawBuffers:Ae,useProgram:Pe,setBlending:ce,setMaterial:_e,setFlipSided:re,setCullFace:Se,setLineWidth:I,setPolygonOffset:We,setScissorTest:Re,activeTexture:ze,bindTexture:ve,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:he,texImage3D:J,updateUBOMapping:Ee,uniformBlockBinding:Me,texStorage2D:we,texStorage3D:ke,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:ee,compressedTexSubImage3D:De,scissor:ue,viewport:xe,reset:Ue}}function g_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,d=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return p?new OffscreenCanvas(A,_):to("canvas")}function y(A,_,B){let $=1,de=ve(A);if((de.width>B||de.height>B)&&($=B/Math.max(de.width,de.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ee=Math.floor($*de.width),De=Math.floor($*de.height);f===void 0&&(f=g(ee,De));let we=_?g(ee,De):f;return we.width=ee,we.height=De,we.getContext("2d").drawImage(A,0,0,ee,De),Ze("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ee+"x"+De+")."),we}else return"data"in A&&Ze("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,_,B,$,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ee=_;if(_===i.RED&&(B===i.FLOAT&&(ee=i.R32F),B===i.HALF_FLOAT&&(ee=i.R16F),B===i.UNSIGNED_BYTE&&(ee=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.R8UI),B===i.UNSIGNED_SHORT&&(ee=i.R16UI),B===i.UNSIGNED_INT&&(ee=i.R32UI),B===i.BYTE&&(ee=i.R8I),B===i.SHORT&&(ee=i.R16I),B===i.INT&&(ee=i.R32I)),_===i.RG&&(B===i.FLOAT&&(ee=i.RG32F),B===i.HALF_FLOAT&&(ee=i.RG16F),B===i.UNSIGNED_BYTE&&(ee=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RG8UI),B===i.UNSIGNED_SHORT&&(ee=i.RG16UI),B===i.UNSIGNED_INT&&(ee=i.RG32UI),B===i.BYTE&&(ee=i.RG8I),B===i.SHORT&&(ee=i.RG16I),B===i.INT&&(ee=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),B===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),B===i.UNSIGNED_INT&&(ee=i.RGB32UI),B===i.BYTE&&(ee=i.RGB8I),B===i.SHORT&&(ee=i.RGB16I),B===i.INT&&(ee=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),B===i.UNSIGNED_INT&&(ee=i.RGBA32UI),B===i.BYTE&&(ee=i.RGBA8I),B===i.SHORT&&(ee=i.RGBA16I),B===i.INT&&(ee=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),_===i.RGBA){let De=de?eo:dt.getTransfer($);B===i.FLOAT&&(ee=i.RGBA32F),B===i.HALF_FLOAT&&(ee=i.RGBA16F),B===i.UNSIGNED_BYTE&&(ee=De===pt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(A,_){let B;return A?_===null||_===Yn||_===Es?B=i.DEPTH24_STENCIL8:_===jn?B=i.DEPTH32F_STENCIL8:_===ws&&(B=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yn||_===Es?B=i.DEPTH_COMPONENT24:_===jn?B=i.DEPTH_COMPONENT32F:_===ws&&(B=i.DEPTH_COMPONENT16),B}function C(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==rn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){let _=A.target;_.removeEventListener("dispose",E),b(_),_.isVideoTexture&&d.delete(_)}function T(A){let _=A.target;_.removeEventListener("dispose",T),N(_)}function b(A){let _=n.get(A);if(_.__webglInit===void 0)return;let B=A.source,$=h.get(B);if($){let de=$[_.__cacheKey];de.usedTimes--,de.usedTimes===0&&x(A),Object.keys($).length===0&&h.delete(B)}n.remove(A)}function x(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let B=A.source,$=h.get(B);delete $[_.__cacheKey],o.memory.textures--}function N(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let de=0;de<_.__webglFramebuffer[$].length;de++)i.deleteFramebuffer(_.__webglFramebuffer[$][de]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=A.textures;for(let $=0,de=B.length;$<de;$++){let ee=n.get(B[$]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(A)}let P=0;function L(){P=0}function F(){let A=P;return A>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function k(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function O(A,_){let B=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let $=A.image;if($===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function z(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function R(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function W(A,_){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){oe(B,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let X={[ka]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},ae={[Zt]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[xl]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},ge={[ku]:i.NEVER,[Xu]:i.ALWAYS,[Vu]:i.LESS,[rc]:i.LEQUAL,[Hu]:i.EQUAL,[sc]:i.GEQUAL,[Gu]:i.GREATER,[Wu]:i.NOTEQUAL};function fe(A,_){if(_.type===jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===rn||_.magFilter===xl||_.magFilter===Io||_.magFilter===tr||_.minFilter===rn||_.minFilter===xl||_.minFilter===Io||_.minFilter===tr)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,X[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,X[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,X[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==Io&&_.minFilter!==tr||_.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ne(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));let $=_.source,de=h.get($);de===void 0&&(de={},h.set($,de));let ee=k(_);if(ee!==A.__cacheKey){de[ee]===void 0&&(de[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),de[ee].usedTimes++;let De=de[A.__cacheKey];De!==void 0&&(de[A.__cacheKey].usedTimes--,De.usedTimes===0&&x(_)),A.__cacheKey=ee,A.__webglTexture=de[ee].texture}return B}function le(A,_,B){return Math.floor(Math.floor(A/B)/_)}function se(A,_,B,$){let ee=A.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,$,_.data);else{ee.sort((J,ue)=>J.start-ue.start);let De=0;for(let J=1;J<ee.length;J++){let ue=ee[De],xe=ee[J],Ee=ue.start+ue.count,Me=le(xe.start,_.width,4),Ue=le(ue.start,_.width,4);xe.start<=Ee+1&&Me===Ue&&le(xe.start+xe.count-1,_.width,4)===Me?ue.count=Math.max(ue.count,xe.start+xe.count-ue.start):(++De,ee[De]=xe)}ee.length=De+1;let we=i.getParameter(i.UNPACK_ROW_LENGTH),ke=i.getParameter(i.UNPACK_SKIP_PIXELS),he=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let J=0,ue=ee.length;J<ue;J++){let xe=ee[J],Ee=Math.floor(xe.start/4),Me=Math.ceil(xe.count/4),Ue=Ee%_.width,U=Math.floor(Ee/_.width),H=Me,j=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ue,U,H,j,B,$,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,we),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function V(A,_,B){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);let de=ne(A,_),ee=_.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+B);let De=n.get(ee);if(ee.version!==De.__version||de===!0){t.activeTexture(i.TEXTURE0+B);let we=dt.getPrimaries(dt.workingColorSpace),ke=_.colorSpace===Pi?null:dt.getPrimaries(_.colorSpace),he=_.colorSpace===Pi||we===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let J=y(_.image,!1,r.maxTextureSize);J=ze(_,J);let ue=s.convert(_.format,_.colorSpace),xe=s.convert(_.type),Ee=M(_.internalFormat,ue,xe,_.colorSpace,_.isVideoTexture);fe($,_);let Me,Ue=_.mipmaps,U=_.isVideoTexture!==!0,H=De.__version===void 0||de===!0,j=ee.dataReady,Q=C(_,J);if(_.isDepthTexture)Ee=v(_.format===nr,_.type),H&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Ee,J.width,J.height,0,ue,xe,null));else if(_.isDataTexture)if(Ue.length>0){U&&H&&t.texStorage2D(i.TEXTURE_2D,Q,Ee,Ue[0].width,Ue[0].height);for(let K=0,q=Ue.length;K<q;K++)Me=Ue[K],U?j&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,xe,Me.data):t.texImage2D(i.TEXTURE_2D,K,Ee,Me.width,Me.height,0,ue,xe,Me.data);_.generateMipmaps=!1}else U?(H&&t.texStorage2D(i.TEXTURE_2D,Q,Ee,J.width,J.height),j&&se(_,J,ue,xe)):t.texImage2D(i.TEXTURE_2D,0,Ee,J.width,J.height,0,ue,xe,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&H&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Ee,Ue[0].width,Ue[0].height,J.depth);for(let K=0,q=Ue.length;K<q;K++)if(Me=Ue[K],_.format!==Un)if(ue!==null)if(U){if(j)if(_.layerUpdates.size>0){let be=kd(Me.width,Me.height,_.format,_.type);for(let Te of _.layerUpdates){let Ke=Me.data.subarray(Te*be/Me.data.BYTES_PER_ELEMENT,(Te+1)*be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Te,Me.width,Me.height,1,ue,Ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,J.depth,ue,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ee,Me.width,Me.height,J.depth,0,Me.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,J.depth,ue,xe,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ee,Me.width,Me.height,J.depth,0,ue,xe,Me.data)}else{U&&H&&t.texStorage2D(i.TEXTURE_2D,Q,Ee,Ue[0].width,Ue[0].height);for(let K=0,q=Ue.length;K<q;K++)Me=Ue[K],_.format!==Un?ue!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ee,Me.width,Me.height,0,Me.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?j&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Me.width,Me.height,ue,xe,Me.data):t.texImage2D(i.TEXTURE_2D,K,Ee,Me.width,Me.height,0,ue,xe,Me.data)}else if(_.isDataArrayTexture)if(U){if(H&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Q,Ee,J.width,J.height,J.depth),j)if(_.layerUpdates.size>0){let K=kd(J.width,J.height,_.format,_.type);for(let q of _.layerUpdates){let be=J.data.subarray(q*K/J.data.BYTES_PER_ELEMENT,(q+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,ue,xe,be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,xe,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,ue,xe,J.data);else if(_.isData3DTexture)U?(H&&t.texStorage3D(i.TEXTURE_3D,Q,Ee,J.width,J.height,J.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,xe,J.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,ue,xe,J.data);else if(_.isFramebufferTexture){if(H)if(U)t.texStorage2D(i.TEXTURE_2D,Q,Ee,J.width,J.height);else{let K=J.width,q=J.height;for(let be=0;be<Q;be++)t.texImage2D(i.TEXTURE_2D,be,Ee,K,q,0,ue,xe,null),K>>=1,q>>=1}}else if(Ue.length>0){if(U&&H){let K=ve(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Q,Ee,K.width,K.height)}for(let K=0,q=Ue.length;K<q;K++)Me=Ue[K],U?j&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ue,xe,Me):t.texImage2D(i.TEXTURE_2D,K,Ee,ue,xe,Me);_.generateMipmaps=!1}else if(U){if(H){let K=ve(J);t.texStorage2D(i.TEXTURE_2D,Q,Ee,K.width,K.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,xe,J)}else t.texImage2D(i.TEXTURE_2D,0,Ee,ue,xe,J);m(_)&&u($),De.__version=ee.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function oe(A,_,B){if(_.image.length!==6)return;let $=ne(A,_),de=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ee=n.get(de);if(de.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+B);let De=dt.getPrimaries(dt.workingColorSpace),we=_.colorSpace===Pi?null:dt.getPrimaries(_.colorSpace),ke=_.colorSpace===Pi||De===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let he=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let q=0;q<6;q++)!he&&!J?ue[q]=y(_.image[q],!0,r.maxCubemapSize):ue[q]=J?_.image[q].image:_.image[q],ue[q]=ze(_,ue[q]);let xe=ue[0],Ee=s.convert(_.format,_.colorSpace),Me=s.convert(_.type),Ue=M(_.internalFormat,Ee,Me,_.colorSpace),U=_.isVideoTexture!==!0,H=ee.__version===void 0||$===!0,j=de.dataReady,Q=C(_,xe);fe(i.TEXTURE_CUBE_MAP,_);let K;if(he){U&&H&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Ue,xe.width,xe.height);for(let q=0;q<6;q++){K=ue[q].mipmaps;for(let be=0;be<K.length;be++){let Te=K[be];_.format!==Un?Ee!==null?U?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,Ue,Te.width,Te.height,0,Te.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,0,0,Te.width,Te.height,Ee,Me,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be,Ue,Te.width,Te.height,0,Ee,Me,Te.data)}}}else{if(K=_.mipmaps,U&&H){K.length>0&&Q++;let q=ve(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Q,Ue,q.width,q.height)}for(let q=0;q<6;q++)if(J){U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ue[q].width,ue[q].height,Ee,Me,ue[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,ue[q].width,ue[q].height,0,Ee,Me,ue[q].data);for(let be=0;be<K.length;be++){let Ke=K[be].image[q].image;U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,0,0,Ke.width,Ke.height,Ee,Me,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,Ue,Ke.width,Ke.height,0,Ee,Me,Ke.data)}}else{U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee,Me,ue[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ue,Ee,Me,ue[q]);for(let be=0;be<K.length;be++){let Te=K[be];U?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,0,0,Ee,Me,Te.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,be+1,Ue,Ee,Me,Te.image[q])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),ee.__version=de.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ie(A,_,B,$,de,ee){let De=s.convert(B.format,B.colorSpace),we=s.convert(B.type),ke=M(B.internalFormat,De,we,B.colorSpace),he=n.get(_),J=n.get(B);if(J.__renderTarget=_,!he.__hasExternalTextures){let ue=Math.max(1,_.width>>ee),xe=Math.max(1,_.height>>ee);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ee,ke,ue,xe,_.depth,0,De,we,null):t.texImage2D(de,ee,ke,ue,xe,0,De,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,de,J.__webglTexture,0,I(_)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,de,J.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let $=_.depthTexture,de=$&&$.isDepthTexture?$.type:null,ee=v(_.stencilBuffer,de),De=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),ee,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ee,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{let $=_.textures;for(let de=0;de<$.length;de++){let ee=$[de],De=s.convert(ee.format,ee.colorSpace),we=s.convert(ee.type),ke=M(ee.internalFormat,De,we,ee.colorSpace);We(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),ke,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),ke,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ke,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,_,B){let $=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let de=n.get(_.depthTexture);if(de.__renderTarget=_,(!de.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(de.__webglInit===void 0&&(de.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),de.__webglTexture===void 0){de.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),fe(i.TEXTURE_CUBE_MAP,_.depthTexture);let he=s.convert(_.depthTexture.format),J=s.convert(_.depthTexture.type),ue;_.depthTexture.format===ci?ue=i.DEPTH_COMPONENT24:_.depthTexture.format===nr&&(ue=i.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ue,_.width,_.height,0,he,J,null)}}else O(_.depthTexture,0);let ee=de.__webglTexture,De=I(_),we=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ke=_.depthTexture.format===nr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ke,we,ee,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,ke,we,ee,0);else if(_.depthTexture.format===nr)We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ke,we,ee,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,ke,we,ee,0);else throw new Error("Unknown depthTexture format")}function Pe(A){let _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){let de=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",de)};$.addEventListener("dispose",de),_.__depthDisposeCallback=de}_.__boundDepthTexture=$}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)Ae(_.__webglFramebuffer[$],A,$);else{let $=A.texture.mipmaps;$&&$.length>0?Ae(_.__webglFramebuffer[0],A,0):Ae(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),pe(_.__webglDepthbuffer[$],A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ee)}}else{let $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pe(_.__webglDepthbuffer,A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,_,B){let $=n.get(A);_!==void 0&&ie($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pe(A)}function Ge(A){let _=A.texture,B=n.get(A),$=n.get(_);A.addEventListener("dispose",T);let de=A.textures,ee=A.isWebGLCubeRenderTarget===!0,De=de.length>1;if(De||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++),ee){B.__webglFramebuffer=[];for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[we]=[];for(let ke=0;ke<_.mipmaps.length;ke++)B.__webglFramebuffer[we][ke]=i.createFramebuffer()}else B.__webglFramebuffer[we]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let we=0;we<_.mipmaps.length;we++)B.__webglFramebuffer[we]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(De)for(let we=0,ke=de.length;we<ke;we++){let he=n.get(de[we]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let we=0;we<de.length;we++){let ke=de[we];B.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[we]);let he=s.convert(ke.format,ke.colorSpace),J=s.convert(ke.type),ue=M(ke.internalFormat,he,J,ke.colorSpace,A.isXRRenderTarget===!0),xe=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,B.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),fe(i.TEXTURE_CUBE_MAP,_);for(let we=0;we<6;we++)if(_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)ie(B.__webglFramebuffer[we][ke],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else ie(B.__webglFramebuffer[we],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let we=0,ke=de.length;we<ke;we++){let he=de[we],J=n.get(he),ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),fe(ue,he),ie(B.__webglFramebuffer,A,he,i.COLOR_ATTACHMENT0+we,ue,0),m(he)&&u(ue)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(we=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,$.__webglTexture),fe(we,_),_.mipmaps&&_.mipmaps.length>0)for(let ke=0;ke<_.mipmaps.length;ke++)ie(B.__webglFramebuffer[ke],A,_,i.COLOR_ATTACHMENT0,we,ke);else ie(B.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,we,0);m(_)&&u(we),t.unbindTexture()}A.depthBuffer&&Pe(A)}function ce(A){let _=A.textures;for(let B=0,$=_.length;B<$;B++){let de=_[B];if(m(de)){let ee=S(A),De=n.get(de).__webglTexture;t.bindTexture(ee,De),u(ee),t.unbindTexture()}}}let _e=[],re=[];function Se(A){if(A.samples>0){if(We(A)===!1){let _=A.textures,B=A.width,$=A.height,de=i.COLOR_BUFFER_BIT,ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),we=_.length>1;if(we)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);let ke=A.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let he=0;he<_.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),we){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[he]);let J=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,de,i.NEAREST),l===!0&&(_e.length=0,re.length=0,_e.push(i.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(_e.push(ee),re.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,De.__webglColorRenderbuffer[he]);let J=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function We(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(A){let _=o.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function ze(A,_){let B=A.colorSpace,$=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==yr&&B!==Pi&&(dt.getTransfer(B)===pt?($!==Un||de!==_n)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",B)),_}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b_(i,e){function t(n,r=Pi){let s,o=dt.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Td)return i.BYTE;if(n===Ad)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===Pd)return i.ALPHA;if(n===Id)return i.RGB;if(n===Un)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Dd)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===Do||n===Lo||n===No||n===Uo)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Do)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Do)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Rl||n===Cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Il)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ll)return s.COMPRESSED_R11_EAC;if(n===Nl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ul)return s.COMPRESSED_RG11_EAC;if(n===Fl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Ol||n===Bl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Zl||n===Jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Kl||n===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$l)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===nc||n===ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x_=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:__,fragmentShader:x_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends di{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new eh,u={},S=t.getContextAttributes(),M=null,v=null,C=[],E=[],T=new me,b=null,x=new hn;x.viewport=new Pt;let N=new hn;N.viewport=new Pt;let P=[x,N],L=new gl,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let oe=C[V];return oe===void 0&&(oe=new ps,C[V]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(V){let oe=C[V];return oe===void 0&&(oe=new ps,C[V]=oe),oe.getGripSpace()},this.getHand=function(V){let oe=C[V];return oe===void 0&&(oe=new ps,C[V]=oe),oe.getHandSpace()};function O(V){let oe=E.indexOf(V.inputSource);if(oe===-1)return;let ie=C[oe];ie!==void 0&&(ie.update(V.inputSource,V.frame,c||o),ie.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",R);for(let V=0;V<C.length;V++){let oe=E[V];oe!==null&&(E[V]=null,C[V].disconnect(oe))}F=null,k=null,m.reset();for(let V in u)delete u[V];e.setRenderTarget(M),p=null,h=null,f=null,r=null,v=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",R),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,pe=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?nr:ci,pe=S.stencil?Es:Yn);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new wn(h.textureWidth,h.textureHeight,{format:Un,type:_n,depthTexture:new Yi(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new wn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function R(V){for(let oe=0;oe<V.removed.length;oe++){let ie=V.removed[oe],pe=E.indexOf(ie);pe>=0&&(E[pe]=null,C[pe].disconnect(ie))}for(let oe=0;oe<V.added.length;oe++){let ie=V.added[oe],pe=E.indexOf(ie);if(pe===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=E.length){E.push(ie),pe=Pe;break}else if(E[Pe]===null){E[Pe]=ie,pe=Pe;break}if(pe===-1)break}let Ae=C[pe];Ae&&Ae.connect(ie)}}let W=new D,X=new D;function ae(V,oe,ie){W.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);let pe=W.distanceTo(X),Ae=oe.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),Ge=Ae[14]/(Ae[10]+1),ce=(Ae[9]+1)/Ae[5],_e=(Ae[9]-1)/Ae[5],re=(Ae[8]-1)/Ae[0],Se=(Pe[8]+1)/Pe[0],I=He*re,We=He*Se,Re=pe/(-re+Se),ze=Re*-re;if(oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ve=He+Re,A=Ge+Re,_=I-ze,B=We+(pe-ze),$=ce*Ge/A*ve,de=_e*Ge/A*ve;V.projectionMatrix.makePerspective(_,B,$,de,ve,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ge(V,oe){oe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(oe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let oe=V.near,ie=V.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),L.near=N.near=x.near=oe,L.far=N.far=x.far=ie,(F!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,k=L.far),L.layers.mask=V.layers.mask|6,x.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;let pe=V.parent,Ae=L.cameras;ge(L,pe);for(let Pe=0;Pe<Ae.length;Pe++)ge(Ae[Pe],pe);Ae.length===2?ae(L,x,N):L.projectionMatrix.copy(x.projectionMatrix),fe(V,L,pe)};function fe(V,oe,ie){ie===null?V.matrix.copy(oe.matrixWorld):(V.matrix.copy(ie.matrixWorld),V.matrix.invert(),V.matrix.multiply(oe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(V){return u[V]};let ne=null;function le(V,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){let ie=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,pe=!0);for(let Ge=0;Ge<ie.length;Ge++){let ce=ie[Ge],_e=null;if(p!==null)_e=p.getViewport(ce);else{let Se=f.getViewSubImage(h,ce);_e=Se.viewport,Ge===0&&(e.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(v))}let re=P[Ge];re===void 0&&(re=new hn,re.layers.enable(Ge),re.viewport=new Pt,P[Ge]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(_e.x,_e.y,_e.width,_e.height),Ge===0&&(L.matrix.copy(re.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),pe===!0&&L.cameras.push(re)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ge=f.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(Ae&&Ae.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let Ge=0;Ge<ie.length;Ge++){let ce=ie[Ge].camera;if(ce){let _e=u[ce];_e||(_e=new ho,u[ce]=_e);let re=f.getCameraImage(ce);_e.sourceTexture=re}}}}for(let ie=0;ie<C.length;ie++){let pe=E[ie],Ae=C[ie];pe!==null&&Ae!==void 0&&Ae.update(pe,oe,c||o)}ne&&ne(V,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let se=new Af;se.setAnimationLoop(le),this.setAnimationLoop=function(V){ne=V},this.dispose=function(){}}},Ur=new Xn,y_=new st;function v_(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,zd(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,S,M,v){u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,S,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let S=e.get(u),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,Ur.copy(v),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),m.envMapRotation.value.setFromMatrix4(y_.makeRotationFromEuler(Ur)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function M_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=r[S.id];v===void 0&&(g(S),v=d(S),r[S.id]=v,S.addEventListener("dispose",m));let C=M.program;n.updateUBOMapping(S,C);let E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function d(S){let M=f();S.__bindingPointIndex=M;let v=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,N=b.length;x<N;x++){let P=b[x];if(p(P,E,x,C)===!0){let L=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],k=0;for(let O=0;O<F.length;O++){let z=F[O],R=y(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+k,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,v,C){let E=S.value,T=M+"_"+v;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let b=C[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(S){let M=S.uniforms,v=0,C=16;for(let T=0,b=M.length;T<b;T++){let x=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,P=x.length;N<P;N++){let L=x[N],F=Array.isArray(L.value)?L.value:[L.value];for(let k=0,O=F.length;k<O;k++){let z=F[k],R=y(z),W=v%C,X=W%R.boundary,ae=W+X;v+=X,ae!==0&&C-ae<R.storage&&(v+=C-ae),L.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=R.storage}}}let E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var S_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function w_(){return gi===null&&(gi=new Ya(S_,16,16,Dr,mi),gi.name="DFG_LUT",gi.minFilter=rn,gi.magFilter=rn,gi.wrapS=ai,gi.wrapT=ai,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var dc=class{constructor(e={}){let{canvas:t=qu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=p,m=new Set([El,wl,Sl]),u=new Set([_n,Yn,ws,Es,vl,Ml]),S=new Uint32Array(4),M=new Int32Array(4),v=null,C=null,E=[],T=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,N=!1;this._outputColorSpace=Bt;let P=0,L=0,F=null,k=-1,O=null,z=new Pt,R=new Pt,W=null,X=new ot(0),ae=0,ge=t.width,fe=t.height,ne=1,le=null,se=null,V=new Pt(0,0,ge,fe),oe=new Pt(0,0,ge,fe),ie=!1,pe=new gs,Ae=!1,Pe=!1,He=new st,Ge=new D,ce=new Pt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Se(){return F===null?ne:1}let I=n;function We(w,G){return t.getContext(w,G)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),I===null){let G="webgl2";if(I=We(G,w),I===null)throw We(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw $e("WebGLRenderer: "+w.message),w}let Re,ze,ve,A,_,B,$,de,ee,De,we,ke,he,J,ue,xe,Ee,Me,Ue,U,H,j,Q;function K(){Re=new D1(I),Re.init(),H=new b_(I,Re),ze=new w1(I,Re,e,H),ve=new m_(I,Re),ze.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),A=new U1(I),_=new t_,B=new g_(I,Re,ve,_,ze,H,A),$=new I1(x),de=new k0(I),j=new M1(I,de),ee=new L1(I,de,A,j),De=new z1(I,ee,de,j,A),Me=new F1(I,ze,B),ue=new E1(_),we=new e_(x,$,Re,ze,j,ue),ke=new v_(x,_),he=new i_,J=new c_(Re),Ee=new v1(x,$,ve,De,g,l),xe=new p_(x,De,ze),Q=new M_(I,A,ze,ve),Ue=new S1(I,Re,A),U=new N1(I,Re,A),A.programs=we.programs,x.capabilities=ze,x.extensions=Re,x.properties=_,x.renderLists=he,x.shadowMap=xe,x.state=ve,x.info=A}K(),y!==_n&&(b=new B1(y,t.width,t.height,r,s));let q=new th(x,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(ge,fe,!1))},this.getSize=function(w){return w.set(ge,fe)},this.setSize=function(w,G,te=!0){if(q.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=w,fe=G,t.width=Math.floor(w*ne),t.height=Math.floor(G*ne),te===!0&&(t.style.width=w+"px",t.style.height=G+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(ge*ne,fe*ne).floor()},this.setDrawingBufferSize=function(w,G,te){ge=w,fe=G,ne=te,t.width=Math.floor(w*te),t.height=Math.floor(G*te),this.setViewport(0,0,w,G)},this.setEffects=function(w){if(y===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let G=0;G<w.length;G++)if(w[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,G,te,Z){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,G,te,Z),ve.viewport(z.copy(V).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,G,te,Z){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,G,te,Z),ve.scissor(R.copy(oe).multiplyScalar(ne).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){ve.setScissorTest(ie=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,te=!0){let Z=0;if(w){let Y=!1;if(F!==null){let Le=F.texture.format;Y=m.has(Le)}if(Y){let Le=F.texture.type,Fe=u.has(Le),Ne=Ee.getClearColor(),Ve=Ee.getClearAlpha(),qe=Ne.r,Qe=Ne.g,rt=Ne.b;Fe?(S[0]=qe,S[1]=Qe,S[2]=rt,S[3]=Ve,I.clearBufferuiv(I.COLOR,0,S)):(M[0]=qe,M[1]=Qe,M[2]=rt,M[3]=Ve,I.clearBufferiv(I.COLOR,0,M))}else Z|=I.COLOR_BUFFER_BIT}G&&(Z|=I.DEPTH_BUFFER_BIT),te&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),Ee.dispose(),he.dispose(),J.dispose(),_.dispose(),$.dispose(),De.dispose(),j.dispose(),Q.dispose(),we.dispose(),q.dispose(),q.removeEventListener("sessionstart",cr),q.removeEventListener("sessionend",ks),dr.stop()};function be(w){w.preventDefault(),no("WebGLRenderer: Context Lost."),N=!0}function Te(){no("WebGLRenderer: Context Restored."),N=!1;let w=A.autoReset,G=xe.enabled,te=xe.autoUpdate,Z=xe.needsUpdate,Y=xe.type;K(),A.autoReset=w,xe.enabled=G,xe.autoUpdate=te,xe.needsUpdate=Z,xe.type=Y}function Ke(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){let G=w.target;G.removeEventListener("dispose",Be),Vt(G)}function Vt(w){an(w),_.remove(w)}function an(w){let G=_.get(w).programs;G!==void 0&&(G.forEach(function(te){we.releaseProgram(te)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,te,Z,Y,Le){G===null&&(G=_e);let Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=cp(w,G,te,Z,Y);ve.setMaterial(Z,Fe);let Ve=te.index,qe=1;if(Z.wireframe===!0){if(Ve=ee.getWireframeAttribute(te),Ve===void 0)return;qe=2}let Qe=te.drawRange,rt=te.attributes.position,je=Qe.start*qe,vt=(Qe.start+Qe.count)*qe;Le!==null&&(je=Math.max(je,Le.start*qe),vt=Math.min(vt,(Le.start+Le.count)*qe)),Ve!==null?(je=Math.max(je,0),vt=Math.min(vt,Ve.count)):rt!=null&&(je=Math.max(je,0),vt=Math.min(vt,rt.count));let Ut=vt-je;if(Ut<0||Ut===1/0)return;j.setup(Y,Z,Ne,te,Ve);let Lt,Mt=Ue;if(Ve!==null&&(Lt=de.get(Ve),Mt=U,Mt.setIndex(Lt)),Y.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*Se()),Mt.setMode(I.LINES)):Mt.setMode(I.TRIANGLES);else if(Y.isLine){let ln=Z.linewidth;ln===void 0&&(ln=1),ve.setLineWidth(ln*Se()),Y.isLineSegments?Mt.setMode(I.LINES):Y.isLineLoop?Mt.setMode(I.LINE_LOOP):Mt.setMode(I.LINE_STRIP)}else Y.isPoints?Mt.setMode(I.POINTS):Y.isSprite&&Mt.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)io("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let ln=Y._multiDrawStarts,Xe=Y._multiDrawCounts,vn=Y._multiDrawCount,ht=Ve?de.get(Ve).bytesPerElement:1,Bn=_.get(Z).currentProgram.getUniforms();for(let ri=0;ri<vn;ri++)Bn.setValue(I,"_gl_DrawID",ri),Mt.render(ln[ri]/ht,Xe[ri])}else if(Y.isInstancedMesh)Mt.renderInstances(je,Ut,Y.count);else if(te.isInstancedBufferGeometry){let ln=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xe=Math.min(te.instanceCount,ln);Mt.renderInstances(je,Ut,Xe)}else Mt.render(je,Ut)};function ii(w,G,te){w.transparent===!0&&w.side===Ft&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,$o(w,G,te),w.side=Ri,w.needsUpdate=!0,$o(w,G,te),w.side=Ft):$o(w,G,te)}this.compile=function(w,G,te=null){te===null&&(te=w),C=J.get(te),C.init(G),T.push(C),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),w!==te&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights();let Z=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Le=Y.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){let Ne=Le[Fe];ii(Ne,te,Y),Z.add(Ne)}else ii(Le,te,Y),Z.add(Le)}),C=T.pop(),Z},this.compileAsync=function(w,G,te=null){let Z=this.compile(w,G,te);return new Promise(Y=>{function Le(){if(Z.forEach(function(Fe){_.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){Y(w);return}setTimeout(Le,10)}Re.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let lr=null;function Zo(w){lr&&lr(w)}function cr(){dr.stop()}function ks(){dr.start()}let dr=new Af;dr.setAnimationLoop(Zo),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(w){lr=w,q.setAnimationLoop(w),w===null?dr.stop():dr.start()},q.addEventListener("sessionstart",cr),q.addEventListener("sessionend",ks),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;let te=q.enabled===!0&&q.isPresenting===!0,Z=b!==null&&(F===null||te)&&b.begin(x,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(G),G=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,G,F),C=J.get(w,T.length),C.init(G),T.push(C),He.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),pe.setFromProjectionMatrix(He,Wn,G.reversedDepth),Pe=this.localClippingEnabled,Ae=ue.init(this.clippingPlanes,Pe),v=he.get(w,E.length),v.init(),E.push(v),q.enabled===!0&&q.isPresenting===!0){let Fe=x.xr.getDepthSensingMesh();Fe!==null&&Tc(Fe,G,-1/0,x.sortObjects)}Tc(w,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(le,se),re=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,re&&Ee.addToRenderList(v,w),this.info.render.frame++,Ae===!0&&ue.beginShadows();let Y=C.state.shadowsArray;if(xe.render(Y,w,G),Ae===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&b.hasRenderPass())===!1){let Fe=v.opaque,Ne=v.transmissive;if(C.setupLights(),G.isArrayCamera){let Ve=G.cameras;if(Ne.length>0)for(let qe=0,Qe=Ve.length;qe<Qe;qe++){let rt=Ve[qe];Ph(Fe,Ne,w,rt)}re&&Ee.render(w);for(let qe=0,Qe=Ve.length;qe<Qe;qe++){let rt=Ve[qe];Ch(v,w,rt,rt.viewport)}}else Ne.length>0&&Ph(Fe,Ne,w,G),re&&Ee.render(w),Ch(v,w,G)}F!==null&&L===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),Z&&b.end(x),w.isScene===!0&&w.onAfterRender(x,w,G),j.resetDefaultState(),k=-1,O=null,T.pop(),T.length>0?(C=T[T.length-1],Ae===!0&&ue.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Tc(w,G,te,Z){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pe.intersectsSprite(w)){Z&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);let Fe=De.update(w),Ne=w.material;Ne.visible&&v.push(w,Fe,Ne,te,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pe.intersectsObject(w))){let Fe=De.update(w),Ne=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ce.copy(Fe.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(Ne)){let Ve=Fe.groups;for(let qe=0,Qe=Ve.length;qe<Qe;qe++){let rt=Ve[qe],je=Ne[rt.materialIndex];je&&je.visible&&v.push(w,Fe,je,te,ce.z,rt)}}else Ne.visible&&v.push(w,Fe,Ne,te,ce.z,null)}}let Le=w.children;for(let Fe=0,Ne=Le.length;Fe<Ne;Fe++)Tc(Le[Fe],G,te,Z)}function Ch(w,G,te,Z){let{opaque:Y,transmissive:Le,transparent:Fe}=w;C.setupLightsView(te),Ae===!0&&ue.setGlobalState(x.clippingPlanes,te),Z&&ve.viewport(z.copy(Z)),Y.length>0&&Jo(Y,G,te),Le.length>0&&Jo(Le,G,te),Fe.length>0&&Jo(Fe,G,te),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ph(w,G,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let je=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new wn(1,1,{generateMipmaps:!0,type:je?mi:_n,minFilter:tr,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Le=C.state.transmissionRenderTarget[Z.id],Fe=Z.viewport||z;Le.setSize(Fe.z*x.transmissionResolutionScale,Fe.w*x.transmissionResolutionScale);let Ne=x.getRenderTarget(),Ve=x.getActiveCubeFace(),qe=x.getActiveMipmapLevel();x.setRenderTarget(Le),x.getClearColor(X),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),re&&Ee.render(te);let Qe=x.toneMapping;x.toneMapping=qn;let rt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),Ae===!0&&ue.setGlobalState(x.clippingPlanes,Z),Jo(w,te,Z),B.updateMultisampleRenderTarget(Le),B.updateRenderTargetMipmap(Le),Re.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let vt=0,Ut=G.length;vt<Ut;vt++){let Lt=G[vt],{object:Mt,geometry:ln,material:Xe,group:vn}=Lt;if(Xe.side===Ft&&Mt.layers.test(Z.layers)){let ht=Xe.side;Xe.side=mn,Xe.needsUpdate=!0,Ih(Mt,te,Z,ln,Xe,vn),Xe.side=ht,Xe.needsUpdate=!0,je=!0}}je===!0&&(B.updateMultisampleRenderTarget(Le),B.updateRenderTargetMipmap(Le))}x.setRenderTarget(Ne,Ve,qe),x.setClearColor(X,ae),rt!==void 0&&(Z.viewport=rt),x.toneMapping=Qe}function Jo(w,G,te){let Z=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Le=w.length;Y<Le;Y++){let Fe=w[Y],{object:Ne,geometry:Ve,group:qe}=Fe,Qe=Fe.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Ne.layers.test(te.layers)&&Ih(Ne,G,te,Ve,Qe,qe)}}function Ih(w,G,te,Z,Y,Le){w.onBeforeRender(x,G,te,Z,Y,Le),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(x,G,te,Z,w,Le),Y.transparent===!0&&Y.side===Ft&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,x.renderBufferDirect(te,G,Z,Y,w,Le),Y.side=Ri,Y.needsUpdate=!0,x.renderBufferDirect(te,G,Z,Y,w,Le),Y.side=Ft):x.renderBufferDirect(te,G,Z,Y,w,Le),w.onAfterRender(x,G,te,Z,Y,Le)}function $o(w,G,te){G.isScene!==!0&&(G=_e);let Z=_.get(w),Y=C.state.lights,Le=C.state.shadowsArray,Fe=Y.state.version,Ne=we.getParameters(w,Y.state,Le,G,te),Ve=we.getProgramCacheKey(Ne),qe=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,Z.fog=G.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=$.get(w.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",Be),qe=new Map,Z.programs=qe);let rt=qe.get(Ve);if(rt!==void 0){if(Z.currentProgram===rt&&Z.lightsStateVersion===Fe)return Lh(w,Ne),rt}else Ne.uniforms=we.getUniforms(w),w.onBeforeCompile(Ne,x),rt=we.acquireProgram(Ne,Ve),qe.set(Ve,rt),Z.uniforms=Ne.uniforms;let je=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=ue.uniform),Lh(w,Ne),Z.needsLights=hp(w),Z.lightsStateVersion=Fe,Z.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=rt,Z.uniformsList=null,rt}function Dh(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=As.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Lh(w,G){let te=_.get(w);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function cp(w,G,te,Z,Y){G.isScene!==!0&&(G=_e),B.resetTextureUnits();let Le=G.fog,Fe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?G.environment:null,Ne=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:yr,Ve=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,qe=$.get(Z.envMap||Fe,Ve),Qe=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),je=!!te.morphAttributes.position,vt=!!te.morphAttributes.normal,Ut=!!te.morphAttributes.color,Lt=qn;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=x.toneMapping);let Mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ln=Mt!==void 0?Mt.length:0,Xe=_.get(Z),vn=C.state.lights;if(Ae===!0&&(Pe===!0||w!==O)){let Yt=w===O&&Z.id===k;ue.setState(Z,w,Yt)}let ht=!1;Z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==vn.state.version||Xe.outputColorSpace!==Ne||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isBatchedMesh&&Xe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==qe||Z.fog===!0&&Xe.fog!==Le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ue.numPlanes||Xe.numIntersection!==ue.numIntersection)||Xe.vertexAlphas!==Qe||Xe.vertexTangents!==rt||Xe.morphTargets!==je||Xe.morphNormals!==vt||Xe.morphColors!==Ut||Xe.toneMapping!==Lt||Xe.morphTargetsCount!==ln)&&(ht=!0):(ht=!0,Xe.__version=Z.version);let Bn=Xe.currentProgram;ht===!0&&(Bn=$o(Z,G,Y));let ri=!1,hr=!1,Gr=!1,wt=Bn.getUniforms(),tn=Xe.uniforms;if(ve.useProgram(Bn.program)&&(ri=!0,hr=!0,Gr=!0),Z.id!==k&&(k=Z.id,hr=!0),ri||O!==w){ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",w.projectionMatrix),wt.setValue(I,"viewMatrix",w.matrixWorldInverse);let zi=wt.map.cameraPosition;zi!==void 0&&zi.setValue(I,Ge.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&wt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,hr=!0,Gr=!0)}if(Xe.needsLights&&(vn.state.directionalShadowMap.length>0&&wt.setValue(I,"directionalShadowMap",vn.state.directionalShadowMap,B),vn.state.spotShadowMap.length>0&&wt.setValue(I,"spotShadowMap",vn.state.spotShadowMap,B),vn.state.pointShadowMap.length>0&&wt.setValue(I,"pointShadowMap",vn.state.pointShadowMap,B)),Y.isSkinnedMesh){wt.setOptional(I,Y,"bindMatrix"),wt.setOptional(I,Y,"bindMatrixInverse");let Yt=Y.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),wt.setValue(I,"boneTexture",Yt.boneTexture,B))}Y.isBatchedMesh&&(wt.setOptional(I,Y,"batchingTexture"),wt.setValue(I,"batchingTexture",Y._matricesTexture,B),wt.setOptional(I,Y,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",Y._indirectTexture,B),wt.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",Y._colorsTexture,B));let Fi=te.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Me.update(Y,te,Bn),(hr||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,wt.setValue(I,"receiveShadow",Y.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&G.environment!==null&&(tn.envMapIntensity.value=G.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=w_()),hr&&(wt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&dp(tn,Gr),Le&&Z.fog===!0&&ke.refreshFogUniforms(tn,Le),ke.refreshMaterialUniforms(tn,Z,ne,fe,C.state.transmissionRenderTarget[w.id]),As.upload(I,Dh(Xe),tn,B)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(As.upload(I,Dh(Xe),tn,B),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&wt.setValue(I,"center",Y.center),wt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(I,"normalMatrix",Y.normalMatrix),wt.setValue(I,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Yt=Z.uniformsGroups;for(let zi=0,Wr=Yt.length;zi<Wr;zi++){let Nh=Yt[zi];Q.update(Nh,Bn),Q.bind(Nh,Bn)}}return Bn}function dp(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function hp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,G,te){let Z=_.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=G,_.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let te=_.get(w);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};let up=I.createFramebuffer();this.setRenderTarget=function(w,G=0,te=0){F=w,P=G,L=te;let Z=null,Y=!1,Le=!1;if(w){let Ne=_.get(w);if(Ne.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(I.FRAMEBUFFER,Ne.__webglFramebuffer),z.copy(w.viewport),R.copy(w.scissor),W=w.scissorTest,ve.viewport(z),ve.scissor(R),ve.setScissorTest(W),k=-1;return}else if(Ne.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(Ne.__hasExternalTextures)B.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(Ne.__boundDepthTexture!==Qe){if(Qe!==null&&_.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);let qe=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?Z=qe[G][te]:Z=qe[G],Y=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?Z=_.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[te]:Z=qe,z.copy(w.viewport),R.copy(w.scissor),W=w.scissorTest}else z.copy(V).multiplyScalar(ne).floor(),R.copy(oe).multiplyScalar(ne).floor(),W=ie;if(te!==0&&(Z=up),ve.bindFramebuffer(I.FRAMEBUFFER,Z)&&ve.drawBuffers(w,Z),ve.viewport(z),ve.scissor(R),ve.setScissorTest(W),Y){let Ne=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,te)}else if(Le){let Ne=G;for(let Ve=0;Ve<w.textures.length;Ve++){let qe=_.get(w.textures[Ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,te,Ne)}}else if(w!==null&&te!==0){let Ne=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ne.__webglTexture,te)}k=-1},this.readRenderTargetPixels=function(w,G,te,Z,Y,Le,Fe,Ne=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){ve.bindFramebuffer(I.FRAMEBUFFER,Ve);try{let qe=w.textures[Ne],Qe=qe.format,rt=qe.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ne),!ze.textureFormatReadable(Qe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(rt)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-Z&&te>=0&&te<=w.height-Y&&I.readPixels(G,te,Z,Y,H.convert(Qe),H.convert(rt),Le)}finally{let qe=F!==null?_.get(F).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,G,te,Z,Y,Le,Fe,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(G>=0&&G<=w.width-Z&&te>=0&&te<=w.height-Y){ve.bindFramebuffer(I.FRAMEBUFFER,Ve);let qe=w.textures[Ne],Qe=qe.format,rt=qe.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ne),!ze.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),I.readPixels(G,te,Z,Y,H.convert(Qe),H.convert(rt),0);let vt=F!==null?_.get(F).__webglFramebuffer:null;ve.bindFramebuffer(I.FRAMEBUFFER,vt);let Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ju(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.deleteBuffer(je),I.deleteSync(Ut),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,te=0){let Z=Math.pow(2,-te),Y=Math.floor(w.image.width*Z),Le=Math.floor(w.image.height*Z),Fe=G!==null?G.x:0,Ne=G!==null?G.y:0;B.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,te,0,0,Fe,Ne,Y,Le),ve.unbindTexture()};let fp=I.createFramebuffer(),pp=I.createFramebuffer();this.copyTextureToTexture=function(w,G,te=null,Z=null,Y=0,Le=0){let Fe,Ne,Ve,qe,Qe,rt,je,vt,Ut,Lt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(te!==null)Fe=te.max.x-te.min.x,Ne=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,Qe=te.min.y,rt=te.isBox3?te.min.z:0;else{let tn=Math.pow(2,-Y);Fe=Math.floor(Lt.width*tn),Ne=Math.floor(Lt.height*tn),w.isDataArrayTexture?Ve=Lt.depth:w.isData3DTexture?Ve=Math.floor(Lt.depth*tn):Ve=1,qe=0,Qe=0,rt=0}Z!==null?(je=Z.x,vt=Z.y,Ut=Z.z):(je=0,vt=0,Ut=0);let Mt=H.convert(G.format),ln=H.convert(G.type),Xe;G.isData3DTexture?(B.setTexture3D(G,0),Xe=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),Xe=I.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let vn=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=I.getParameter(I.UNPACK_SKIP_PIXELS),ri=I.getParameter(I.UNPACK_SKIP_ROWS),hr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rt);let Gr=w.isDataArrayTexture||w.isData3DTexture,wt=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let tn=_.get(w),Fi=_.get(G),Yt=_.get(tn.__renderTarget),zi=_.get(Fi.__renderTarget);ve.bindFramebuffer(I.READ_FRAMEBUFFER,Yt.__webglFramebuffer),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Wr=0;Wr<Ve;Wr++)Gr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(w).__webglTexture,Y,rt+Wr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Le,Ut+Wr)),I.blitFramebuffer(qe,Qe,Fe,Ne,je,vt,Fe,Ne,I.DEPTH_BUFFER_BIT,I.NEAREST);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||_.has(w)){let tn=_.get(w),Fi=_.get(G);ve.bindFramebuffer(I.READ_FRAMEBUFFER,fp),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,pp);for(let Yt=0;Yt<Ve;Yt++)Gr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,Y,rt+Yt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,Y),wt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fi.__webglTexture,Le,Ut+Yt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fi.__webglTexture,Le),Y!==0?I.blitFramebuffer(qe,Qe,Fe,Ne,je,vt,Fe,Ne,I.COLOR_BUFFER_BIT,I.NEAREST):wt?I.copyTexSubImage3D(Xe,Le,je,vt,Ut+Yt,qe,Qe,Fe,Ne):I.copyTexSubImage2D(Xe,Le,je,vt,qe,Qe,Fe,Ne);ve.bindFramebuffer(I.READ_FRAMEBUFFER,null),ve.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else wt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Xe,Le,je,vt,Ut,Fe,Ne,Ve,Mt,ln,Lt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,Le,je,vt,Ut,Fe,Ne,Ve,Mt,Lt.data):I.texSubImage3D(Xe,Le,je,vt,Ut,Fe,Ne,Ve,Mt,ln,Lt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Le,je,vt,Fe,Ne,Mt,ln,Lt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Le,je,vt,Lt.width,Lt.height,Mt,Lt.data):I.texSubImage2D(I.TEXTURE_2D,Le,je,vt,Fe,Ne,Mt,ln,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,vn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ri),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hr),Le===0&&G.generateMipmaps&&I.generateMipmap(Xe),ve.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){P=0,L=0,F=null,ve.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Df={type:"change"},ih={type:"start"},Nf={type:"end"},fc=new qi,Lf=new bn,E_=Math.cos(70*Zn.DEG2RAD),Xt=new D,xn=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nh=1e-6,pc=class extends Ao{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Jt,this._lastTargetPosition=new D,this._quat=new Jt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ms,this._sphericalDelta=new Ms,this._scale=1,this._panOffset=new D,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new D,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A_.bind(this),this._onPointerDown=T_.bind(this),this._onPointerUp=R_.bind(this),this._onContextMenu=U_.bind(this),this._onMouseWheel=I_.bind(this),this._onKeyDown=D_.bind(this),this._onTouchStart=L_.bind(this),this._onTouchMove=N_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=P_.bind(this),this._interceptControlDown=F_.bind(this),this._interceptControlUp=z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=St.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Xt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fc.origin.copy(this.object.position),fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fc.direction))<E_?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),fc.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nh||this._lastTargetPosition.distanceToSquared(this.target)>nh?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xt.copy(r).sub(this.target);let s=Xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function T_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function A_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function R_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nf),this.state=St.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function C_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case Ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case Ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ih)}function P_(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function I_(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nf))}function D_(i){this.enabled!==!1&&this._handleKeyDown(i)}function L_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(ih)}function N_(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function U_(i){this.enabled!==!1&&i.preventDefault()}function F_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bo(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new mt,c=0;for(let d=0;d<i.length;++d){let f=i[d],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,d),c+=p}}if(t){let d=0,f=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+d);d+=i[h].attributes.position.count}l.setIndex(f)}for(let d in s){let f=Uf(s[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<f;++h){let p=[];for(let y=0;y<o[d].length;++y)p.push(o[d][y][h]);let g=Uf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(g)}}return l}function Uf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new nn(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let f=l/t;for(let h=0,p=d.count;h<p;h++)for(let g=0;g<t;g++){let y=d.getComponent(h,g);a.setComponent(h+f,g,y)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var mc=.4166666666666667,gc=.24,Cs=.018;function $n(i,e=!0){let t=i.pixels*mc,n=(i.trim==="left"?gc:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?gc:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function Ff(i){let e=i.pixels*mc;return[[-(i.extendStart||0),Cs],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*mc-Cs,(n+1)*mc+Cs]),[e-Cs,e+(i.extendEnd||0)]]}function bc(i){return Object.fromEntries(["extendStart","extendEnd","extraStartTrim","extraEndTrim"].filter(e=>i[e]).map(e=>[e,i[e]]))}var zf=2.5/6,O_=.24,Ps=.018,rh=new Map,B_=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function sh(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let d of t)if(!Number.isInteger(d.at)||d.at<=0||d.at>=i||![0,1].includes(d.layer)||!["left","right","seam"].includes(d.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(rh.has(s))return rh.get(s).map(d=>({...d}));let o=[0,1].map(d=>new Set(t.filter(f=>f.layer===d).map(f=>f.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let d=1;d<=i;d++){let f=new Map;for(let h of a.values())for(let p of[!1,!0])for(let g of[!1,!0]){let y=[p,g];if(d<i&&p&&g&&!(o[0].has(d)&&o[1].has(d)))continue;let m=[...h.starts],u=[...h.score],S=[],M=!0;for(let E of[0,1]){let T=m[E],b=d-T,x=E^e;if(b>6||!y[E]&&(d===i||b===6||o[E].has(d))){M=!1;break}if(!y[E])continue;let N=r.left&&x===1&&T===0||t.some(R=>R.layer===E&&R.at===T&&R.side==="left"),P=r.right&&x===1&&d===i||t.some(R=>R.layer===E&&R.at===d&&R.side==="right");if(N&&P){M=!1;break}let L=N?"left":P?"right":null,F={};for(let R of t.filter(W=>W.layer===E&&W.fullEndSlot))R.side==="left"&&R.at===d&&(F.extendEnd=Ps),R.side==="left"&&R.at===T&&(F.extraStartTrim=Ps),R.side==="right"&&R.at===d&&(F.extraEndTrim=Ps),R.side==="right"&&R.at===T&&(F.extendStart=Ps);r.extraTrim&&N&&T===0&&(F.extraStartTrim=Ps),r.extraTrim&&P&&d===i&&(F.extraEndTrim=Ps);let k={pixels:b,start:T*zf,layer:x,trim:L,...F},[O,z]=$n(k,!1);if(z-O>2.5+1e-9||z-O<=0){M=!1;break}u[0]+=+(b===1&&!!L),u[1]+=+(b===1),u[2]++,u[3]+=1/(b*zf-(L?O_:0)),x===1&&T===0&&(u[4]+=Math.abs(b-n)),S.push(k),m[E]=d}if(!M)continue;let v=m.join(","),C=f.get(v);(!C||B_(u,C.score))&&f.set(v,{starts:m,score:u,pieces:[...h.pieces,...S]})}a=f}let l=a.get(`${i},${i}`);if(!l)throw new Error("No native staggered stock layout: "+s);let c=l.pieces.sort((d,f)=>f.layer-d.layer||d.start-f.start);return rh.set(s,c),c.map(d=>({...d}))}function _c(i,e=2){return sh(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var It=2.5/6,yn=.24,ut=.018,xt=yn/2,_t=1e-7,_i=new D(1,0,0),xi=new D(0,1,0),Ii=new D(0,0,1);function Is(i={},e={},t={}){let n=i.wood||new At({color:"#c7a46f",side:Ft}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,l=_c;function c(m,u,S,M){let v=[];for(let C=0;C<m.length;C++){let E=m[C],T=m[(C+1)%m.length],b=M*(E[u]-S),x=M*(T[u]-S);b>=-_t&&v.push(E.clone()),b>=-_t!=x>=-_t&&v.push(E.clone().lerp(T,b/(b-x)))}return v}function d(m){let u=m.pixels*It,S=[new me(-(m.extendStart||0),0),new me(u+(m.extendEnd||0),0),new me(u+(m.extendEnd||0),xt),new me(u-ut,xt),new me(u-ut,yn)];for(let x=m.pixels-1;x>=1;x--){let N=x*It;S.push(new me(N+ut,yn),new me(N+ut,xt),new me(N-ut,xt),new me(N-ut,yn))}S.push(new me(ut,yn),new me(ut,xt),new me(-(m.extendStart||0),xt));let M=S,[v,C]=$n(m);if(C<=v+_t||(v>-(m.extendStart||0)+_t&&(M=c(M,"x",v,1)),C<u+(m.extendEnd||0)-_t&&(M=c(M,"x",C,-1)),M.length<3))return null;let E=new ji(M);E.closePath();let T=new Rr(E,{depth:ut,bevelEnabled:!1,curveSegments:1});T.translate(0,-xt,0);let b=T.getAttribute("uv");for(let x=0;x<b.count;x++)b.setXY(x,b.getX(x)/2.5,b.getY(x)/yn);return T}function f(m,u,S,M=[],v=null){let[C,E]=$n(m);v&&(C=Math.max(C,v[0]-m.start),E=Math.min(E,v[1]-m.start));let T=E>C+_t?[[C,E]]:[];for(let b of M){let x=u===0?b.v0:b.u0,N=u===0?b.v1:b.u1;if(S+ut<=x+_t||S>=N-_t)continue;let P=(u===0?b.u0:b.v0)-m.start,L=(u===0?b.u1:b.v1)-m.start;T=T.flatMap(([F,k])=>L<=F||P>=k?[[F,k]]:[[F,Math.min(k,P)],[Math.max(F,L),k]].filter(([O,z])=>z>O+_t))}return T.map(([b,x])=>({...m,minCut:b,limit:x}))}function h(m,u,S,M,v=[]){let C=m.pixels*It,[E,T]=$n(m);if(T<=E+_t)return null;let b=Ff(m),x=(m.connectorCuts||[]).map(X=>({x0:X.end==="start"?X.offset||0:C-(X.offset||0)-xt,x1:X.end==="start"?(X.offset||0)+xt:C-(X.offset||0),y0:X.edge==="slotted"?xt-ut:-xt,y1:X.edge==="slotted"?xt:-xt+ut})),N=[E,T];for(let X of b)for(let ae of X)ae>E+_t&&ae<T-_t&&N.push(ae);for(let X of x)for(let ae of[X.x0,X.x1])ae>E+_t&&ae<T-_t&&N.push(ae);N.sort((X,ae)=>X-ae);let P=new Map,L=!1,F=X=>`${Math.round(X.x*1e8)},${Math.round(X.y*1e8)},${Math.round(X.z*1e8)}`;function k(X,ae){let ge=[],fe=[];for(let le of X){let se=[];for(let V=0;V<le.length;V++){let oe=le[V],ie=le[(V+1)%le.length],pe=ae.c-ae.n.dot(oe.clone().add(S)),Ae=ae.c-ae.n.dot(ie.clone().add(S));if(pe>=-_t?se.push(oe):L=!0,pe>=-_t!=Ae>=-_t){let Pe=oe.clone().lerp(ie,pe/(pe-Ae));se.push(Pe),fe.push(Pe)}}se.length>=3&&ge.push(se)}let ne=[...new Map(fe.map(le=>[F(le),le])).values()];if(ne.length>=3){let le=ne.reduce((ie,pe)=>ie.add(pe),new D).divideScalar(ne.length),se=ae.n.clone().normalize(),V=(Math.abs(se.y)>.9?_i:xi).clone().cross(se).normalize(),oe=se.clone().cross(V);ne.sort((ie,pe)=>Math.atan2(ie.clone().sub(le).dot(oe),ie.clone().sub(le).dot(V))-Math.atan2(pe.clone().sub(le).dot(oe),pe.clone().sub(le).dot(V))),ge.push(ne)}return ge}function O(X,ae,ge,fe){let ne=[[X,ge,0],[ae,ge,0],[ae,fe,0],[X,fe,0],[X,ge,ut],[ae,ge,ut],[ae,fe,ut],[X,fe,ut]].map(ie=>new D(...ie).applyMatrix4(u)),le=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(ie=>ie.map(pe=>ne[pe]));u.determinant()<0&&le.forEach(ie=>ie.reverse());for(let ie of M)if(le=k(le,ie),!le.length)return;let se=L,V=v.length&&le.some(ie=>ie.some(pe=>!v.some(Ae=>Ae.every(Pe=>Pe.n.dot(pe.clone().add(S))<=Pe.c+_t)))),oe=v.length?v.flatMap(ie=>{let pe=le;for(let Ae of ie)if(pe=k(pe,Ae),!pe.length)break;return pe}):le;L=se||!!V;for(let ie of oe){let pe=ie.filter((Pe,He)=>He===0||Pe.distanceToSquared(ie[He-1])>1e-18);if(pe.length<3)continue;let Ae=pe.map(F).sort().join("|");P.has(Ae)?P.delete(Ae):P.set(Ae,pe)}}for(let X=0;X<N.length-1;X++){let ae=N[X],ge=N[X+1],fe=(ae+ge)/2;if(ge-ae<_t)continue;let ne=[...new Set([-xt,0,xt,...x.flatMap(le=>[le.y0,le.y1])])].sort((le,se)=>le-se);for(let le=0;le<ne.length-1;le++){let se=ne[le],V=ne[le+1],oe=(se+V)/2;oe>0&&b.some(([ie,pe])=>fe>ie&&fe<pe)||x.some(ie=>fe>ie.x0-_t&&fe<ie.x1+_t&&oe>ie.y0-_t&&oe<ie.y1+_t)||O(ae,ge,se,V)}}let z=[],R=[];for(let X of P.values())for(let ae=1;ae<X.length-1;ae++){let ge=X[0],fe=X[ae],ne=X[ae+1];if(!(fe.clone().sub(ge).cross(ne.clone().sub(ge)).lengthSq()<1e-20))for(let le of[ge,fe,ne])z.push(le.x,le.y,le.z),R.push(le.dot(new D().setFromMatrixColumn(u,0))/2.5,le.dot(new D().setFromMatrixColumn(u,1))/yn)}if(!z.length)return null;let W=new mt;return W.setAttribute("position",new ct(z,3)),W.setAttribute("uv",new ct(R,2)),W.computeVertexNormals(),W.userData.angledCut=L,W}function p(m,u,S,M,v,C,E={},T=0,b=[],x=[]){let[N,P]=$n(u,!1);if(P-N>2.5+_t)throw new Error("Combstruct stock exceeds 2500 mm");let L=JSON.stringify([m.name,E.wallId||"",E.kind||"standard",E.axis,E.index,u.layer,T,...[u.start,u.pixels,u.minCut||0,u.limit??u.pixels*It].map(V=>Math.round(V*1e7)/1e7)]),F=t.connectors===!1||s?[]:e[L]||[];u={...u,connectorCuts:F};let k=u.layer^T,O=C.clone().addScaledVector(S,u.start).addScaledVector(v,k===0?-ut:0),z=new st().makeBasis(S,M,v),R=b.length||x.length||(u.minCut||0)>_t||u.limit!==void 0||F.length,W=R?h(u,z,O,b,x):d(u);if(!W)return null;R||W.applyMatrix4(z);let[X,ae]=$n(u,!1),[ge,fe]=$n(u),ne=!!W.userData.angledCut||ge>X+_t||fe<ae-_t,le=new lt(W,u.trim||ne?r:n);le.position.copy(O),le.castShadow=!0,le.receiveShadow=!0;let se={id:`board-${++a}`,mesh:le,surface:m.name,kind:E.kind||"standard",axis:E.axis,index:E.index,layer:k,stockLayer:u.layer,start:u.start,stockLength:u.pixels*It,trim:u.trim||null,custom:ne,connectorKey:L,connectorCuts:F,stock:{...u},along:S.toArray(),normal:M.toArray(),thick:v.toArray(),frameOrigin:C.toArray(),clippingPlanes:b.map(V=>({n:V.n.toArray(),c:V.c})),actualStart:u.start+ge,actualEnd:u.start+fe,...E};return x.length&&(se.clippingRegions=x.map(V=>V.map(oe=>({n:oe.n.toArray(),c:oe.c})))),le.name=se.id,le.userData={...se,mesh:void 0},m.add(le),o.push(se),le}function g(m,u,S,M,v,C,E,{phaseU:T=0,phaseV:b=0,holes:x=[],keepTop:N=!1,clearances:P=[0,0],startClearances:L=[0,0],verticalPlanes:F=[],verticalModules:k=S,kind:O="standard"}={}){for(let z=0;z<2;z++){let R=z===0?u:k,W=z===0?S:u,X=z===0?v:C,ae=z===0?C:v,ge=E.clone().multiplyScalar(z===0?1:-1),fe=z===0?T:b;for(let ne=1;ne<W;ne++)for(let le of l(R)){let se={...le};N&&z===1&&se.trim==="right"&&(se.trim=null);let V=P[z]||0;V&&Math.abs(se.start+se.pixels*It-R*It)<_t&&(se.limit=se.pixels*It-(se.trim==="right"?yn:0)-V),L[z]&&se.start===0&&(se.minCut=(se.trim==="left"?yn:0)+L[z]);let oe=ne*It+((se.layer^fe)===0?-ut:0);for(let ie of f(se,z,oe,x))p(m,ie,X,ge,ae,M.clone().addScaledVector(ae,ne*It),{kind:O,axis:z,index:ne},fe,z===1?F:[])}}}return{lengthJoints:s,boards:o,segments:l,jointStock:(m,u=0,S=[],M=2,v)=>sh(m,u,s?S.map(C=>({...C,fullEndSlot:C.side!=="seam"})):S,M,v),openStock:f,addBoard:p,grid:g}}var Of={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};function xc({pitch:i,spanHalf:e,ridgeUnderside:t,axis:n=0,clearance:r=.001}){let s=i*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.tan(s),c=e-xt-ut,d=c-xt,f=c+xt,h=t+xt/o,p=c/o-yn/4*l,g=((p-It/2)%It+It)%It-It,y=p-It/2,m=p+It/2,u=(M,v)=>({n:M,c:v});function S(M){let v=new D().setComponent(n,M),C=new D(0,1,0),E=v.clone().multiplyScalar(o).addScaledVector(C,-a),T=v.clone().multiplyScalar(a).addScaledVector(C,o),b=O=>O-a*h,x=O=>O+o*h,N=u(T.clone(),x(0)),P=u(T.clone().negate(),-x(0)),L=[[N],[P,u(E.clone().negate(),-b(y+ut+r)),u(E.clone(),b(m-ut-r))]],F=u(T.clone(),x(-xt)),k=u(T.clone(),x(xt));return{sign:M,q:v,along:E,normal:T,origin:new D(0,h,0).addScaledVector(E,g),wall(O){return{planes:[O===1?k:F],regions:O===1?L:[],role:O===1?"long-lap":"short-bearing"}},roof(O){return O===0?[{planes:[],regions:[],role:"continuous"}]:[{planes:[u(v.clone(),d)],regions:[],role:"inner-ending"},{planes:[u(v.clone().negate(),-f)],regions:[[N],[P,u(E.clone().negate(),-b(m-ut))]],role:"eave-ending"}]},slotPlanes(O,z=0){let R=O==="inner"?y:m;return[u(E.clone(),b(R+ut)),u(E.clone().negate(),-b(R-ut)),u(T.clone().negate(),-x(0)),u(T.clone(),x(xt+z))]}}}return{pitch:i,clearance:r,phaseOrigin:g,wallCenter:c,inner:d,outer:f,centerY:h,toothCenter:p,slotInner:y,slotOuter:m,axis:n,side:S,slabBeveled:!1}}var Ce=2.5/6,gt=.24,Je=.018,ft=gt/2,Rn=new D(1,0,0),Kn=new D(0,1,0),Qn=new D(0,0,1),oh=1e-7;function ah(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=ft+(t?Je:0),r=i.wood||new At({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new Ye;o.name="Combstruct 30 — aligned joints";let a=he=>{let J=new Ye;return J.name=he,o.add(J),J},l={floor:a("Floor panel and continuous terrace"),walls:["rear","left","front","right"].map(he=>a(he)),partitions:a("Internal walls"),ceiling:a("Ceiling"),roof:a("Roof 35\xB0"),gables:a("Horizontal gable rows"),pergola:a("Pergola")},c=13*Ce,d=15*Ce,f=7*Ce,h=-c/2,p=c/2,g=-d/2,y=d/2,m=g-f,u=8,S=u*Ce,M=t?S+Je:S-gt,v=M+gt,C=35*Math.PI/180,E=Math.sin(C),T=Math.cos(C),b=Math.tan(C),x=v-(t?Je*b:0),N=x+b*c/2,P=N+gt/T,L=t?xc({pitch:35,spanHalf:c/2,ridgeUnderside:N,axis:0}):null,F={width:c,depth:d,halfWidth:c/2,halfDepth:d/2,terraceDepth:f,terraceRearZ:m,wallDepth:gt,floorBottom:0,floorTop:gt,wallTop:S,ceilingBottom:M,ceilingTop:v,clearHeight:M-gt,roofAngle:35,roofEaveY:x,roofUnderRidgeY:N,roofRidgeY:P,roofOverhang:Ce,module:Ce,boardDepth:gt,boardThickness:Je,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:Ce,constructionOnly:!0},k=Is({wood:r,end:s},Of,{...e,connectors:t?!1:e.connectors}),{boards:O,segments:z,openStock:R,addBoard:W,grid:X}=k,ae=[],ge=[],fe={rear:[],left:[],front:[],right:[],partitions:[]},ne=(he,J=0,ue=[],xe=2,Ee={left:!0,right:!0})=>k.jointStock(he,J,t?ue.map(Me=>({...Me,fullEndSlot:!0})):ue,xe,{...Ee,extraTrim:Ee.extraTrim??t}),le=h+6*Ce-n,se=le,V=g+8*Ce-n,oe=new D(h,ft,m);function ie(he,J,ue,xe,Ee){let Me=Ee==="floor",Ue=Me?7:0;for(let U=0;U<2;U++){let H=U===0?J:ue,j=U===0?ue:J;for(let Q=1;Q<j;Q++){let K=[];U===0&&Q>Ue&&K.push({at:6,side:"right",layer:1}),U===1&&(Me&&K.push({at:7,side:"left",layer:1}),Q<6&&K.push({at:Ue+8,side:"right",layer:1}));let q=ne(H,0,K);for(let be of q)W(he,be,U===0?Rn:Qn,U===0?Kn:Kn.clone().negate(),U===0?Qn:Rn,xe.clone().addScaledVector(U===0?Qn:Rn,Q*Ce),{kind:Ee,axis:U,index:Q},0)}}}ie(l.floor,13,22,oe,"floor");let pe=["rear","left","front","right"],Ae=[new D(h,0,g+n),new D(h+n,0,g),new D(h,0,y-n),new D(p-n,0,g)],Pe=[Qn,Rn,Qn.clone().negate(),Rn.clone().negate()];function He(he,J,ue,xe,Ee,Me,Ue){return{id:Ue,kind:J,u0:ue*Ce+Je,u1:xe*Ce-Je,v0:Ee,v1:Me}}fe.front=[He("front","window",1,3,3*Ce+Je,6*Ce-Je,"front-window-left"),He("front","door",6,9,gt,6*Ce-Je,"entrance"),He("front","window",10,12,3*Ce+Je,6*Ce-Je,"front-window-right")],fe.rear=[He("rear","window",1,5,2*Ce+Je,6*Ce-Je,"bedroom-window"),He("rear","door",8,12,gt,6*Ce-Je,"terrace-door")],fe.right=[He("right","window",3,7,2*Ce+Je,6*Ce-Je,"living-window")];function Ge(he,J,ue,xe,Ee){let Me=(ue===0?xe.x:xe.z)+he.u0,Ue=(ue===0?xe.x:xe.z)+he.u1;return Object.assign(he,{wallId:J,axis:ue,origin:{x:xe.x,y:xe.y,z:xe.z},world:ue===0?{x0:Me,x1:Ue,z0:Ee-ft,z1:Ee+ft,y0:he.v0,y1:he.v1}:{x0:Ee-ft,x1:Ee+ft,z0:Me,z1:Ue,y0:he.v0,y1:he.v1}}),he}let ce=[{n:new D(-b,1,0),c:x+b*c/2},{n:new D(b,1,0),c:x+b*c/2}],_e=Math.ceil(N/Ce)+1;for(let he=0;he<4;he++){let J=he%2,ue=J===0?Rn:Qn,xe=Ae[he],Ee=J===0?xe.z:xe.x,Me=J===0?13:15,Ue=pe[he],U=fe[Ue];U.forEach(H=>Ge(H,Ue,J,xe,Ee)),ae.push({id:Ue,axis:J,start:J===0?xe.x:xe.z,end:(J===0?xe.x:xe.z)+Me*Ce-(J===0?Je:2*Je),fixed:Ee,depth:gt,holes:U,exterior:!0,origin:{x:xe.x,y:0,z:xe.z}});for(let H=0;H<2;H++){let j=H===0?Me:_e,Q=H===0&&J===0?0:1;for(let K=1;K<(H===0?u+1:Me);K++){let q=H===0?J===0?[{at:6,side:"right",layer:1}]:he===1?[{at:8,side:"right",layer:0}]:[]:[{at:u,side:t?"left":"right",layer:0}];for(let be of ne(j,Q,q,2,{left:!0,right:!0,extraTrim:t&&H===0})){let Te={...be};H===1&&Te.trim==="right"&&Te.start+Te.pixels*Ce===j*Ce&&(Te.trim=null);let Ke=K*Ce+((Te.layer^Q)===0?-Je:0),Be=L&&J===1&&H===1?L.side(he===1?-1:1).wall(Te.layer^Q):null;for(let Vt of R(Te,H,Ke,U))W(l.walls[he],Vt,H===0?ue:Kn,H===0?Pe[he]:Pe[he].clone().negate(),H===0?Kn:ue,xe.clone().addScaledVector(H===0?Kn:ue,K*Ce),{kind:"wall",axis:H,index:K,...Be?{roofLap:Be.role}:{}},Q,Be?.planes||(H===1||K===u?ce:[]),Be?.regions||[])}}}if(J===0)for(let H=u+1;H<_e;H++)for(let j of z(13))for(let Q of R(j,0,H*Ce+(j.layer===0?-Je:0),U))W(l.gables,Q,Rn,Pe[he],Kn,xe.clone().addScaledVector(Kn,H*Ce),{kind:"gable",axis:0,index:H,wallId:Ue},0,ce)}ie(l.ceiling,13,15,new D(h,M+ft,g),"ceiling");let re={left:h+n+ft,right:p-n-ft,rear:g+n+ft,front:y-n-ft};function Se(he,J,ue,xe,Ee=[]){let Me=new Ye;Me.name=he,l.partitions.add(Me);let Ue=J===0?new D(h,0,xe):new D(xe,0,g),U=J===0?Rn:Qn,H=J===0?Qn:Rn,j=Ee.map(([Q,K])=>({id:`${he}-door-${Q}`,kind:"door",u0:Q*Ce+Je,u1:K*Ce-Je,v0:gt,v1:6*Ce-Je}));j.forEach(Q=>Ge(Q,he,J,Ue,xe)),fe.partitions.push(...j),Me.userData={id:he,axis:J,start:J===0?h:g,end:(J===0?h:g)+ue*Ce,fixed:xe,depth:gt,holes:j,origin:{x:Ue.x,y:0,z:Ue.z}},ae.push({...Me.userData,exterior:!1});for(let Q=0;Q<2;Q++){let K=Q===0&&J===0?0:1,q=Q===0?ue:u+(t?1:0),be=Q===0?J===1?[{at:8,side:"right",layer:0}]:[]:t?[{at:u,side:"left",layer:0}]:[];for(let Te=1;Te<(Q===0?u+(t?1:0):ue);Te++)for(let Ke of ne(q,K,be,2,{left:!0,right:!(t&&Q===1),extraTrim:t&&Q===0})){let Be={...Ke};for(let Vt of R(Be,Q,Te*Ce+((Be.layer^K)===0?-Je:0),j))W(Me,Vt,Q===0?U:Kn,Q===0?H:H.clone().negate(),Q===0?Kn:U,Ue.clone().addScaledVector(Q===0?Kn:U,Te*Ce),{kind:"partition",wallId:he,axis:Q,index:Te},K,t?[{n:Kn,c:v}]:[])}}}Se("bedroom-right",1,15,le,[[5,7],[10,12]]),Se("bedroom-front",0,6,V);let I={id:"bedroom",name:"Bedroom",x0:re.left,x1:le-ft,z0:re.rear,z1:V-ft},We={id:"bathroom",name:"Bathroom",x0:re.left,x1:se-ft,z0:V+ft,z1:re.front},Re=[{x:le+ft,z:re.rear},{x:re.right,z:re.rear},{x:re.right,z:re.front},{x:se+ft,z:re.front},{x:se+ft,z:V+ft},{x:le+ft,z:V+ft}],ze=he=>Math.abs(he.reduce((J,ue,xe)=>J+ue.x*he[(xe+1)%he.length].z-he[(xe+1)%he.length].x*ue.z,0))/2,ve=[I,We].map(he=>({...he,area:(he.x1-he.x0)*(he.z1-he.z0)}));ve.push({id:"living",name:"Living room and kitchen",x0:se+ft,x1:re.right,z0:re.rear,z1:re.front,polygon:Re,area:ze(Re)});let A=g-Ce,_=17,B=L?.phaseOrigin??-Ce/2,$=c/2+Ce,de=Math.ceil(($/T-B)/Ce)+1,ee=N+ft/T,De=[],we=Array.from({length:14},(he,J)=>g+(J+1)*Ce);for(let he of[-1,1]){let J=new D(he*T,-E,0),ue=new D(he*E,T,0),xe=new D(0,ee,A).addScaledVector(J,B),Ee=new Ye;Ee.name=he===-1?"roof-left":"roof-right",l.roof.add(Ee);let Me=he===-1?[{n:Rn.clone(),c:0},{n:Rn.clone().negate(),c:$}]:[{n:Rn.clone().negate(),c:0},{n:Rn.clone(),c:$}];for(let Ue=1;Ue<_;Ue++){let U=A+Ue*Ce;he===-1&&De.push(U);for(let H of z(de)){let j={...H,trim:null},Q=he===-1?0:1,K=L&&U>g+oh&&U<y-oh,q=K?L.side(he).roof(j.layer^Q):[{planes:[],regions:[]}];for(let be of q)W(Ee,j,J,ue,Qn,xe.clone().addScaledVector(Qn,Ue*Ce),{kind:"roof-slope",axis:0,index:Ue,roofSide:he,...K?{roofLap:be.role}:{},detail:"Roof-wall lap between adjacent slots"},Q,[...Me,...be.planes],be.regions)}}for(let Ue=1;Ue<de;Ue++)for(let U of z(_))W(Ee,U,Qn,ue.clone().negate(),J,xe.clone().addScaledVector(J,Ue*Ce),{kind:"roof-cross",axis:1,index:Ue,roofSide:he},0,Me)}F.usableConceptArea=ve.reduce((he,J)=>he+J.area,0),L&&(F.roofWallJoint={strategy:"between-slots",clearance:L.clearance,phaseOrigin:L.phaseOrigin,wallCenter:L.wallCenter,slotInner:L.slotInner,slotOuter:L.slotOuter,slabBeveled:!1,knee:!1}),F.structuralFootprintArea=c*d,F.terraceArea=c*f,ge.push({id:"edge-floor",title:"Floor — external wall",description:"The long upright occupies the space left by the floor end. The short upright rests on the full board.",position:[h+3*Ce,gt/2,y-ft],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:l.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Floor — wall — terrace",description:"A full end slot and an end board shortened by another 18 mm make room for the transverse floor rib.",position:[h+7*Ce,gt/2,g+ft],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:l.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:l.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Floor — internal wall",description:"End-board lengths and a full end slot make room for the wall and transverse floor rib.",position:[le,gt/2,g+3*Ce],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:l.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:l.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"Internal — external wall",description:"A full end slot and shorter end board connect the two walls without side cut-outs.",position:[le,3*Ce,g+ft],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Internal wall junction",description:"The transverse partition connects into the layers of the continuous wall. End-board lengths leave room for the upright.",position:[le,3*Ce,V],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Upper floor — external wall",description:"The slab rests on the horizontal wall row. The lower board ends with a full slot; the upper end board starts 258 mm from the joint station.",position:[h+ft,M+ft,g+9*Ce],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:l.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:u}]},{id:"connector-120",title:"Slab on the horizontal rib — second direction",description:"In the second direction, the slab also sits above the horizontal wall rib. Board lengths define the joint.",position:[h+3*Ce,M+ft,y-ft],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:l.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:u}]},{id:"ceiling-partition",title:"Upper floor — internal wall",description:"The slab rests on the horizontal row of the internal wall. A full end slot and shorter end board keep the ribs aligned.",position:[le,M+ft,g+3*Ce],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:l.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:l.ceiling.name,axis:1,index:6}]});let ke={module:Ce,stockMaxLength:2.5,terminalDifference:gt,pairWidth:2*Je,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:gt,exteriorVerticalSlots:"outward",ceilingModule:u,ceilingTop:v,roofPitchDegrees:35,roofAxes:De,wallAxes:we,roofAxesAligned:we.every(he=>De.some(J=>Math.abs(J-he)<oh)),connectorBoards:O.filter(he=>he.connectorCuts.length).length,jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,connectorVariants:t?[]:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:t?"Geometric model only; joint strength and erection stability are not verified.":"Interior wall cap rows omitted in the lateral-cut layout.",loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:l,openings:fe,rooms:ve,dimensions:F,boards:O,joints:ge,wallPanels:ae,validation:ke}}var Di=(...i)=>new D(...i);function Bf(i,e,t){let n=new Ye;n.name="Interior — wall reveal";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:l,floorTop:c,clearHeight:d}=i.dimensions,f=10*r,h=d,p=-f/2,g=f/2,y=Di(-a+s/2,c,-l+7*r),m=new st().makeRotationY(-Math.PI/2).multiply(new st().makeTranslation(-y.x,-y.y,-y.z)),u=new kt(Di(p,0,-s/2-.001),Di(g,h,s/2+.001)),S=[],M=[],v=[],C=[],E,T=0,b=0,x=(H,j=.85,Q={})=>new At({color:H,roughness:j,...Q}),N=x("#e0e0d9"),P=x("#f4f3ec",.24),L=x("#303b35",.3,{metalness:.6}),F=x("#ae885a"),k=x("#c49b62"),O=new $t({color:"#685137",transparent:!0,opacity:.42}),z=x("#ecece5"),R=x("#bcbcb0"),W=(H,j,Q,K,q,be,Te,Ke)=>{let Be=new lt(new sn(j,Q,K),Ke);return Be.position.set(q,be,Te),H.add(Be),Be},X=(H,j,Q)=>(H.userData.info=j,H.userData.kind=Q,S.push(H),H),ae=H=>{let j=document.createElement("canvas");j.width=512,j.height=512;let Q=j.getContext("2d"),K=35,q=()=>(K=Math.imul(K,1664525)+1013904223>>>0,K/4294967296);Q.fillStyle=H==="wood"?"#b89670":"#d0c8ae",Q.fillRect(0,0,512,512);for(let Te=0;Te<(H==="wood"?1200:9500);Te++){let Ke=q()*512,Be=q()*512;Q.lineWidth=.4+q(),Q.strokeStyle=H==="wood"?Te%2?"#ac875c55":"#d6b68d66":Te%3?"#f0e9d444":"#9f96744a",Q.beginPath(),Q.moveTo(Ke,Be),Q.lineTo(Ke+(H==="wood"?1:(q()-.5)*17),Be+(H==="wood"?50+q()*100:(q()-.5)*18)),Q.stroke()}let be=new fi(j);return be.colorSpace=Bt,be},ge=x("#e8dac5",.84,{map:ae("wood")}),fe=x("#eee7d3",1,{map:ae("fiber")});function ne(H){let j=H.index?H.toNonIndexed():H.clone(),Q=j.attributes.position,K=[];for(let be=0;be<Q.count;be+=3){let Te=[0,1,2].map(Ke=>Di().fromBufferAttribute(Q,be+Ke));for(let[Ke,Be,Vt]of[[0,p,1],[0,g,-1],[1,0,1],[1,h,-1]]){let an=[];for(let ii=0;ii<Te.length;ii++){let lr=Te[ii],Zo=Te[(ii+1)%Te.length],cr=(lr.getComponent(Ke)-Be)*Vt,ks=(Zo.getComponent(Ke)-Be)*Vt;cr>=0&&an.push(lr),cr>=0!=ks>=0&&an.push(lr.clone().lerp(Zo,cr/(cr-ks)))}Te=an}for(let Ke=1;Ke<Te.length-1;Ke++)K.push(...Te[0].toArray(),...Te[Ke].toArray(),...Te[Ke+1].toArray())}j.dispose();let q=new mt;return q.setAttribute("position",new ct(K,3)),q.computeVertexNormals(),q}for(let H of i.boards.filter(j=>j.surface==="left")){let j=H.mesh.geometry.clone().translate(...H.mesh.position.toArray()).applyMatrix4(m);if(j.computeBoundingBox(),!j.boundingBox.intersectsBox(u)){j.dispose();continue}let Q=ne(j);if(j.dispose(),!Q.attributes.position.count){Q.dispose();continue}let K=new lt(Q,k);K.add(new Kt(new Qt(Q,30),O)),n.add(K),X(K,{...t(H),detailLabel:"Sheet thickness",detail:"18 mm"},"structure"),M.push(K)}for(let H=2;H<12;H++)for(let j=0;j<8;j++){let Q=(7-H-.5)*r,K=(j+.5)*r-c,q=Math.max(0,K-(r-2*o)/2),be=Math.min(h,K+(r-2*o)/2);if(be-q<.045)continue;let Te=W(n,r-2*o-.007,be-q-.006,s-.025,Q,(q+be)/2,-.007,fe);X(Te,{id:`C30-IZ-${H.toString().padStart(2,"0")}${j}`,type:"Insulation block",surface:"External wall cell",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((be-q-.006)*1e3)} mm`,metricLabel:"Dimensions in this view",detailLabel:"Layer",detail:"Insulation between ribs"},"insulation"),C.push(Te)}W(n,f,h,.018,0,h/2,-.14,R);function le(H,j,Q,K){let q=new _s,be=j.map(Be=>Di(...Be)),Te=be[0];for(let Be=1;Be<be.length-1;Be++){let Vt=Math.min(.07,be[Be].distanceTo(be[Be-1])/3,be[Be].distanceTo(be[Be+1])/3),an=be[Be].clone().addScaledVector(be[Be-1].clone().sub(be[Be]).normalize(),Vt),ii=be[Be].clone().addScaledVector(be[Be+1].clone().sub(be[Be]).normalize(),Vt);q.add(new wr(Te,an)),q.add(new Er(an,be[Be],ii)),Te=ii}q.add(new wr(Te,be[be.length-1]));let Ke=new lt(new yo(q,Math.max(16,Math.ceil(q.getLength()*55)),Q,10,!1),K);return H.add(Ke),Ke}let se=x("#327d9f",.48),V=x("#b65744",.48),oe=x("#c18c2d",.58),ie=x("#687572",.72),pe=(H,j,Q,K,q,be)=>{let Te=le(n,Q,K,q);return X(Te,{id:H,type:j,surface:"Service layer on the interior side",length:be==="power"?"Sockets and lighting":"Basin connection",metricLabel:"Przeznaczenie",detailLabel:"Position",detail:"Przed rdzeniem konstrukcji"},be),v.push(Te),Te};pe("C30-W-01","Cold water",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,se,"water"),pe("C30-W-02","Hot water",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,V,"water"),pe("C30-K-01","Basin waste pipe",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,ie,"water"),pe("C30-E-01","Socket cable",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,oe,"power"),pe("C30-E-02","Lighting cable",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,oe,"power");let Ae=W(n,.13,.12,.055,1.6,2.3,.191,x("#475751"));X(Ae,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Service layer on the interior side",length:"Instalacja elektryczna",metricLabel:"Circuit",detailLabel:"Position",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Ae),W(n,f+.32,.12,1.82,0,-.06,.7,ge);let Pe=x("#927d63");for(let H=p;H<g;H+=.19)W(n,.001,.001,1.8,H,.001,.7,Pe);let He=.249,Ge=.025,ce=p+.16,_e=g-.16,re=.22,Se=h-.22;W(n,f,.22,Ge,0,.11,He,N),W(n,f,.22,Ge,0,h-.11,He,N),W(n,.16,Se-re,Ge,p+.08,(Se+re)/2,He,N),W(n,.16,Se-re,Ge,g-.08,(Se+re)/2,He,N);let I=W(n,1,Se-re,Ge,0,(Se+re)/2,He,N);X(I,{id:"C30-WYK-01",type:"Painted wall lining",surface:"Interior side of the wall",length:"Interior finish",metricLabel:"Layer",detailLabel:"Pod spodem",detail:"Structure, izolacja i instalacje"},"finish"),W(n,.09,h,.75,g+.045,h/2,.54,N),W(n,f+.06,.07,.65,0,h+.035,.45,N),W(n,f,.095,.022,0,.047,.278,z),W(n,.022,.095,.65,g-.01,.047,.61,z);let Re=W(n,.007,Se-re,.032,ce,(re+Se)/2,.255,x("#43948c")),ze=new Ye;n.add(ze),W(ze,.79,1.03,.014,-1.17,1.8,.27,L);let ve=document.createElement("canvas");ve.width=64,ve.height=128;let A=ve.getContext("2d"),_=A.createLinearGradient(0,0,64,128);_.addColorStop(0,"#8caaa5"),_.addColorStop(.5,"#cfdbd3"),_.addColorStop(.51,"#acb7ad"),_.addColorStop(1,"#c5bda5"),A.fillStyle=_,A.fillRect(0,0,64,128);let B=new fi(ve);B.colorSpace=Bt;let $=new ui({map:B});W(ze,.75,.99,.004,-1.17,1.8,.279,$);let de=new bn(Di(1,0,0),-ce);ze.traverse(H=>{H.isMesh&&(H.material=H.material.clone(),H.material.clippingPlanes=[de])});let ee=new Ye;n.add(ee),W(ee,1,.43,.43,-1.17,.51,.51,F),W(ee,1.06,.035,.48,-1.17,.742,.52,P);let De=x("#8c6944");for(let H=-1.63;H<-.7;H+=.035)W(ee,.009,.39,.008,H,.51,.729,De);let we=new ji;we.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let ke=new Tr;ke.absellipse(0,0,.285,.155,0,Math.PI*2,!0),we.holes.push(ke);let he=new Rr(we,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});he.rotateX(-Math.PI/2);let J=new lt(he,P);J.position.set(-1.17,.765,.52),ee.add(J);let ue=new lt(new Ci(.282,.25,.018,40),P);ue.scale.z=.55,ue.position.set(-1.17,.772,.52),ee.add(ue),le(ee,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,L),W(ee,.045,.012,.032,-1.17,1.062,.335,L);let xe=(H,j,Q=!1)=>{let K=W(n,.135,.11,.019,H,j,.277,z);if(Q)W(n,.09,.07,.009,H,j,.292,N);else for(let q of[-.032,.032]){let be=new lt(new Ci(.026,.026,.007,20),N);be.rotation.x=Math.PI/2,be.position.set(H+q,j,.291),n.add(be);for(let Te of[-.008,.008])W(n,.006,.006,.004,H+q,j+Te,.297,L)}return K};xe(1.13,.47),xe(1.4,1.24,!0),W(n,.42,.036,.07,-1.17,2.57,.3,L),W(n,.38,.008,.055,-1.17,2.548,.31,x("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let Ee=new To(new kt,2653304);Ee.visible=!1,n.add(Ee);function Me(H){E=H,Ee.visible=H!==I,n.updateMatrixWorld(!0),Ee.visible&&Ee.box.setFromObject(H),e(H.userData.info)}function Ue(H){if(H===I)return I.visible;if(T<=.001)return!1;H.geometry.computeBoundingBox();let j=H.geometry.boundingBox.clone().applyMatrix4(H.matrixWorld);return j.max.x>ce&&j.min.x<ce+(_e-ce)*T&&j.max.y>re&&j.min.y<Se}function U(H){T=Zn.clamp(H,0,1);let j=ce+(_e-ce)*T,Q=_e-j;I.scale.x=Q,I.position.x=(j+_e)/2,I.visible=Q>1e-5,de.constant=-j,ze.visible=j<-1.17+.395,Re.position.x=j,Re.visible=T>.005&&T<.995,E&&E!==I&&!Ue(E)&&Me(I)}return U(0),Me(I),{root:n,direction:Di(.48,.2,3),focus:new kt(Di(p-.1,-.1,-.16),Di(g+.12,h+.1,1.08)),annotation:"Use the slider to reveal the wall",finish:U,selectAt(H){n.updateMatrixWorld(!0);let j=H.intersectObjects(n.children,!0).find(Q=>{if(!Q.object.isMesh)return!1;for(let K=Q.object;K;K=K.parent)if(!K.visible)return!1;return!(Q.object.material.clippingPlanes||[]).some(K=>K.distanceToPoint(Q.point)<0)});j?.object.userData.info&&Me(j.object)},next(){let H=S.filter(Ue);H.length&&Me(H[++b%H.length])},getSelected(){return E?.userData.info},getWallState(){return{reveal:T,boardCount:M.length,insulationCount:C.length,serviceCount:v.length,coverWidth:I.scale.x,insideFacing:!0}}}}function kf({pitch:i=35,knee:e=!0,eave:t=!0}={},n){let r=new Ye,s=new Ye,o=new Ye,a=new Ye;r.add(s,o,a),s.name="roof-joint-sample",o.name="transverse-roof-ribs",a.name="horizontal-wall-rib";let l=Is(n),c=(...T)=>new D(...T),d=(T,b)=>({n:T,c:b}),f=e?0:yn,h=Math.tan(i*Math.PI/180),p=xc({pitch:i,spanHalf:xt+ut,ridgeUnderside:f+xt*h,axis:0}),g=p.side(1),y=c(0,-2*It-ut,0),m=d(xi.clone().negate(),.65),u=(T,b,x,N,P,L,F=[],k=[],O=s)=>l.addBoard(O,T,b,x,N,P,L,0,F,k);for(let T of[0,1]){let b={start:0,pixels:6,layer:T},x=g.wall(T),N={kind:"wall-vertical",roofLap:x.role,axis:1,index:0};!e&&T===0?(u(b,xi,_i,Ii,y,N,[m,d(xi,0)]),u(b,xi,_i,Ii,y,{...N,kind:"roof-filler"},[m,d(xi.clone().negate(),-yn),...x.planes])):u(b,xi,_i,Ii,y,N,[m,...x.planes],x.regions),e||u({start:0,pixels:6,layer:T,...T?{trim:"left",extraStartTrim:ut}:{}},_i.clone().negate(),xi,Ii,c(xt+ut,xt,0),{kind:"ceiling",axis:0,index:0},[d(_i.clone().negate(),1)]);let P=g.origin.clone().addScaledVector(g.along,-2*It);for(let L of g.roof(T))!t&&L.role==="eave-ending"||u(b,g.along,g.normal,Ii,P,{kind:"roof-slope",axis:0,index:0,roofLap:L.role},[d(_i.clone().negate(),.8),d(_i,t?.72:xt),...L.planes],L.regions);u({start:0,pixels:2,layer:T},Ii,_i.clone().negate(),xi,c(0,-ut,-It),{kind:"wall-horizontal",axis:0,index:0},[],[],a)}let S=c(0,p.centerY,-It);for(let T of t?[p.slotInner,p.slotOuter]:[p.slotInner])for(let b of[0,1])u({start:0,pixels:2,layer:b},Ii,g.normal.clone().negate(),g.along,S.clone().addScaledVector(g.along,T),{kind:"roof-cross",axis:1,index:T},[],[],o);for(let T of l.boards)T.mesh.material=T.kind.startsWith("roof-")&&T.kind!=="roof-filler"?n.roof:n.wood,T.mesh.userData.base=T.mesh.position.clone(),T.mesh.add(new Kt(new Qt(T.mesh.geometry,30),n.edges));let M=0,v=!0,C=0;function E(){for(let T of l.boards)T.mesh.parent===s&&T.mesh.position.copy(T.mesh.userData.base).addScaledVector(Ii,(T.layer===0?-1:1)*M*.25);o.visible=v&&M===0,a.visible=M===0,o.position.copy(g.normal).multiplyScalar(C)}return{root:r,direction:c(-.8,.5,2.8),annotation:"Upright between slots · unbevelled floor · two-layer lap",spread(T){M=T,E()},crossing(T){v=T,E()},insert(T){C=T/1e3,E()},roofJoint:{pitch:i,knee:e,eave:t,clearance:p.clearance,slabBeveled:!1,slotInner:p.slotInner,slotOuter:p.slotOuter,boards:l.boards}}}var yt=(...i)=>new D(...i),Or=yt(1,0,0),rr=yt(0,1,0),Br=yt(0,0,1),lh=gt/2,Cn=new At({color:"#cba36b",roughness:.8,side:Ft}),zr=new At({color:"#43948c",roughness:.75,side:Ft}),Vf=new At({color:"#94784e",roughness:.85,side:Ft}),dh=new $t({color:"#66543a",transparent:!0,opacity:.5}),Hf=new At({color:"#287c78",roughness:.7,side:Ft,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),V_=new Set([Cn,zr,Vf,dh,Hf]);function Gf(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])V_.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var ko;function kr(){return ko||(ko=ah({wood:Cn,end:Cn}),ko.root.updateMatrixWorld(!0),ko.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),ko}function yc(i=6,e={}){let t=Is({},{},{connectors:!1}),n=new Ye,s=t.addBoard(n,{pixels:i,start:0,layer:0,...e},Or,rr,Br,yt()).geometry;return s.translate(0,0,-Je/2),s}function vc(i,e=Cn){let t=new lt(i,e);return t.add(new Kt(new Qt(i,30),dh)),t}function H_(i){return _c(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function Vo(i,e,t,n,r,s,o=Cn){for(let a of H_(e)){let l=yc(a.n,{trim:a.trim}),c=new st().makeBasis(n,r,s);l.applyMatrix4(c);let d=vc(l,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Je),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function G_(i,e,t){i.add(new Pr(t,e,.36,2653304,.095,.048))}function W_(i){let e=new Ye,t=6*Ce,n=10*Ce,r=new Ye,s=new Ye,o=new Ye;e.add(r,s,o);for(let c=1;c<10;c++)Vo(r,6,yt(-t/2,0,-n/2+c*Ce),Or,rr,Br,zr);for(let c=1;c<6;c++)Vo(s,10,yt(-t/2+c*Ce,0,-n/2),Br,rr.clone().negate(),Or,Cn);for(let c of[-n/2+Ce,0,n/2-Ce])G_(o,yt(-t/2+Ce,.16,c),rr);let a=new Sr(new mt().setFromPoints([yt(-t/2,0,-n/2-.12),yt(t/2,0,-n/2-.12)]),new $t({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new st().makeBasis(rr,Br,Or)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let l=i==="wall"?yt(1.5,1,2.6):yt(1.4,1.7,1.9);return{root:e,arrows:o,direction:l,annotation:i==="wall"?"Upright slots → towards the outside":i==="roof"?"Teal: shorter roof direction · slots towards the covering":"Teal: shorter load-bearing direction · slots face up",spread(c){s.position.y=c*.65}}}function ch(i,e,{crossing:t=[],plane:n=1,direction:r=yt(1.1,1.8,1.4),size:s=1.05}={}){let o=new Ye,a=new Ye,l=new Ye;o.add(a,l);let c=kr(),d=(f,h)=>f.surface===h.surface&&f.axis===h.axis&&f.index===h.index;for(let f of c.boards){let h=i.findIndex(y=>d(f,y)),p=t.some(y=>d(f,y));if(h<0&&!p||f.bounds.distanceToPoint(e)>.5)continue;let g=vc(f.mesh.geometry.clone(),p?Vf:i[h].material||(h===0?Cn:zr));g.position.copy(f.mesh.position).sub(e),g.userData.boardId=f.id,g.userData.base=g.position.clone(),g.userData.sign=f.bounds.getCenter(yt()).getComponent(n)<e.getComponent(n)?-1:1,(p?l:a).add(g)}return l.visible=!1,{root:o,direction:r,focus:new kt(yt(-s/2,-s/2,-s/2),yt(s/2,s/2,s/2)),spread(f){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*f*.2);l.visible=!1},crossing(f){l.visible=f}}}function Wf(i,e,t){if(i.scene==="roof-wall")return kf(t,{wood:Cn,end:Cn,roof:zr,edges:dh});if(["slab","wall","roof"].includes(i.scene))return W_(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let s=new Ye,o=vc(yc(e?.modules||6,e||{}),zr);return o.position.x=-3*Ce,s.add(o),{root:s,direction:yt(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Comb board · slots reach half the board height"}}if(i.scene==="continuity"){let s=new Ye;return Vo(s,12,yt(-6*Ce,0,0),Or,rr,Br,Cn),s.children.forEach(o=>o.material=o.userData.ply?zr:Cn),{root:s,direction:yt(.6,.85,3),spread(o){s.children.forEach(a=>a.position.z=(a.userData.ply-.5)*(Je+o*.42))},annotation:"Two layers · joints offset by 2 modules"}}if(i.scene==="cross"){let s=new Ye,o=new Ye,a=new Ye;return s.add(o,a),Vo(o,4,yt(-2*Ce,0,0),Or,rr,Br,zr),Vo(a,4,yt(0,0,-2*Ce),Br,rr.clone().negate(),Or,Cn),{root:s,direction:yt(1.4,1.6,2),spread(l){a.position.y=l*.65},annotation:"Slots in the two rib sets face opposite directions"}}let n=kr(),r=n.dimensions;if(i.scene==="joint"){let s=n.joints.find(o=>o.id===i.joint);return ch(s.members,yt(...s.position),{crossing:s.crossingMembers||[],plane:s.planeAxis,direction:yt(...s.viewDirection)})}return i.scene==="corner"?ch([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],yt(r.halfWidth-lh,3*Ce,r.halfDepth-lh),{plane:1,direction:yt(1.4,2,1.6)}):ch([{surface:"roof-left",axis:0,index:8},{surface:"roof-right",axis:0,index:8}],yt(0,r.roofUnderRidgeY+lh,-r.halfDepth+7*Ce),{plane:2,direction:yt(1.4,1.3,2.4),size:1.3})}var X_={rear:"External wall facing the terrace",front:"External wall facing the entrance",left:"Left external wall",right:"Right external wall","bedroom-right":"Internal wall","bedroom-front":"Bedroom and bathroom partition","roof-left":"Left roof slope","roof-right":"Right roof slope"};function Ho(i){let e=1/0,t=-1/0,n=new D(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=yt().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Connector board":i.trim?"End board":i.custom?"Board trimmed for an opening or slope":"Comb board",surface:X_[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Xf(i,e){let t=kr();if(i==="wall")return Bf(t,e,Ho);let n=new Ye,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=Bo(s,!1);s.forEach(d=>d.dispose()),n.add(vc(o,Cn));let a=new lt(new mt,Hf);n.add(a);let l,c=d=>{l=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(Ho(d))};return c(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:yt(1.4,1,1.5),annotation:"Select a component to see its ID",selectAt(d){let f=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(p=>({b:h,d:p.distance}))).sort((h,p)=>h.d-p.d);f[0]&&c(f[0].b)},next(){c(r[(r.indexOf(l)+1)%r.length])},getSelected(){return Ho(l)}}}var Ds={model:"Combstruct 30",totalBoards:1424,material:{lengthM:2145.889638127869,fullBoardLengthM:2.5,fullBoardEquivalents:858.3558552511477,fullBoards:859,sheets:172},geometrySha256:"63a2f4d625d55a5da0671fabb9385c81b4285f09409d69d0257a753d0fed89e1",toleranceM:5e-5,families:[{id:"standard",name:"Standard board",count:953,lengths:{"3":95,"4":242,"5":437,"6":179},sample:"board-147"},{id:"ending",name:"End board",count:471,lengths:{"3":106,"4":270,"5":77,"6":18},sample:"board-1244"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-368",null],["board-373",null],["board-378",null],["board-644",null],["board-650",null],["board-1084",null],["board-1103",null],["board-323",null],["board-329",null],["board-335",null],["board-765",null],["board-770",null],["board-775",null],["board-612",null],["board-668",null],["board-318",null],["board-342",null],["board-349",null],["board-356",null],["board-363",null],["board-383",null],["board-468",null],["board-473",null],["board-478",null],["board-483",null],["board-488",null],["board-493",null],["board-498",null],["board-503",null],["board-508",null],["board-513",null],["board-518",null],["board-523",null],["board-528",null],["board-533",null],["board-607",null],["board-618",null],["board-624",null],["board-631",null],["board-638",null],["board-656",null],["board-662",null],["board-673",null],["board-750",null],["board-755",null],["board-760",null],["board-780",null],["board-785",null],["board-790",null],["board-795",null],["board-800",null],["board-805",null],["board-810",null],["board-815",null],["board-1065",null],["board-1069",null],["board-1073",null],["board-1077",null],["board-1081",null],["board-1088",null],["board-1092",null],["board-1096",null],["board-1100",null],["board-1107",null],["board-1111",null],["board-1115",null],["board-1143",null],["board-1147",null],["board-1151",null],["board-1155",null],["board-1159",null],["board-320","board-37"],["board-326","board-37"],["board-332","board-37"],["board-762","board-67"],["board-767","board-74"],["board-772","board-81"],["board-609","board-156"],["board-665","board-240"],["board-315","board-37"],["board-338","board-38"],["board-345","board-38"],["board-352","board-38"],["board-359","board-38"],["board-380","board-39"],["board-465","board-47"],["board-470","board-54"],["board-475","board-61"],["board-480","board-68"],["board-485","board-75"],["board-490","board-82"],["board-495","board-89"],["board-500","board-96"],["board-505","board-103"],["board-510","board-110"],["board-515","board-117"],["board-520","board-124"],["board-525","board-131"],["board-530","board-138"],["board-604","board-146"],["board-615","board-166"],["board-621","board-176"],["board-627","board-186"],["board-634","board-195"],["board-653","board-222"],["board-659","board-231"],["board-670","board-249"],["board-747","board-46"],["board-752","board-53"],["board-757","board-60"],["board-777","board-88"],["board-782","board-95"],["board-787","board-102"],["board-792","board-109"],["board-797","board-116"],["board-802","board-123"],["board-807","board-130"],["board-812","board-137"],["board-1063","board-44"],["board-1067","board-51"],["board-1071","board-58"],["board-1075","board-65"],["board-1079","board-72"],["board-1086","board-86"],["board-1090","board-93"],["board-1094","board-100"],["board-1098","board-107"],["board-1105","board-121"],["board-1109","board-128"],["board-1113","board-135"],["board-1141","board-144"],["board-1145","board-154"],["board-1149","board-164"],["board-1153","board-174"],["board-1157","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-380"],["board-409","board-258"],["board-410","board-409"],["board-411","board-500"],["board-412","board-411"],["board-540","board-412"],["board-541","board-540"],["board-542","board-653"],["board-699","board-261"],["board-700","board-699"],["board-701","board-700"],["board-992","board-259"],["board-993","board-992"],["board-994","board-1086"],["board-995","board-1090"],["board-996","board-541"],["board-1119","board-410"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-413","board-258"],["board-414","board-410"],["board-415","board-411"],["board-535","board-412"],["board-536","board-535"],["board-537","board-541"],["board-538","board-542"],["board-539","board-538"],["board-702","board-257"],["board-703","board-700"],["board-704","board-701"],["board-997","board-255"],["board-998","board-993"],["board-999","board-994"],["board-1000","board-995"],["board-1001","board-996"],["board-1117","board-410"],["board-1118","board-1117"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-380"],["board-416","board-266"],["board-417","board-416"],["board-418","board-500"],["board-419","board-418"],["board-548","board-419"],["board-549","board-548"],["board-550","board-653"],["board-705","board-269"],["board-706","board-705"],["board-707","board-706"],["board-1002","board-267"],["board-1003","board-1002"],["board-1004","board-1086"],["board-1005","board-1090"],["board-1006","board-549"],["board-1122","board-417"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-420","board-266"],["board-421","board-417"],["board-422","board-418"],["board-543","board-419"],["board-544","board-543"],["board-545","board-549"],["board-546","board-550"],["board-547","board-546"],["board-708","board-265"],["board-709","board-706"],["board-710","board-707"],["board-1007","board-263"],["board-1008","board-1003"],["board-1009","board-1004"],["board-1010","board-1005"],["board-1011","board-1006"],["board-1120","board-417"],["board-1121","board-1120"],["board-274","board-315"],["board-275","board-338"],["board-276","board-275"],["board-277","board-380"],["board-423","board-274"],["board-424","board-423"],["board-425","board-500"],["board-426","board-425"],["board-556","board-426"],["board-557","board-556"],["board-558","board-653"],["board-711","board-277"],["board-712","board-777"],["board-713","board-712"],["board-1012","board-275"],["board-1013","board-1012"],["board-1014","board-1086"],["board-1015","board-1090"],["board-1016","board-557"],["board-1125","board-424"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-427","board-274"],["board-428","board-424"],["board-429","board-425"],["board-551","board-426"],["board-552","board-551"],["board-553","board-557"],["board-554","board-558"],["board-555","board-554"],["board-714","board-273"],["board-715","board-712"],["board-716","board-713"],["board-1017","board-271"],["board-1018","board-1013"],["board-1019","board-1014"],["board-1020","board-1015"],["board-1021","board-1016"],["board-1123","board-424"],["board-1124","board-1123"],["board-282","board-315"],["board-283","board-338"],["board-284","board-283"],["board-285","board-380"],["board-430","board-282"],["board-431","board-430"],["board-432","board-500"],["board-433","board-432"],["board-566","board-433"],["board-567","board-615"],["board-568","board-567"],["board-569","board-653"],["board-570","board-670"],["board-717","board-285"],["board-718","board-777"],["board-719","board-718"],["board-1022","board-283"],["board-1023","board-1022"],["board-1024","board-1086"],["board-1025","board-1090"],["board-1026","board-568"],["board-1128","board-431"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-434","board-282"],["board-435","board-431"],["board-436","board-432"],["board-559","board-433"],["board-560","board-567"],["board-561","board-560"],["board-562","board-568"],["board-563","board-569"],["board-564","board-563"],["board-565","board-570"],["board-720","board-281"],["board-721","board-718"],["board-722","board-719"],["board-1027","board-279"],["board-1028","board-1023"],["board-1029","board-1024"],["board-1030","board-1025"],["board-1031","board-1026"],["board-1126","board-431"],["board-1127","board-1126"],["board-316","board-278"],["board-339","board-279"],["board-346","board-280"],["board-353","board-280"],["board-360","board-280"],["board-381","board-281"],["board-466","board-430"],["board-471","board-430"],["board-476","board-430"],["board-481","board-430"],["board-486","board-431"],["board-491","board-431"],["board-496","board-431"],["board-501","board-432"],["board-506","board-432"],["board-511","board-432"],["board-516","board-432"],["board-521","board-433"],["board-526","board-433"],["board-531","board-433"],["board-605","board-559"],["board-616","board-560"],["board-622","board-561"],["board-628","board-561"],["board-635","board-562"],["board-654","board-563"],["board-660","board-564"],["board-671","board-565"],["board-748","board-717"],["board-753","board-717"],["board-758","board-717"],["board-778","board-718"],["board-783","board-718"],["board-788","board-718"],["board-793","board-718"],["board-798","board-719"],["board-803","board-719"],["board-808","board-719"],["board-813","board-719"],["board-1064","board-1022"],["board-1068","board-1022"],["board-1072","board-1022"],["board-1076","board-1022"],["board-1080","board-1023"],["board-1087","board-1024"],["board-1091","board-1025"],["board-1095","board-1025"],["board-1099","board-1025"],["board-1106","board-1026"],["board-1110","board-1026"],["board-1114","board-1026"],["board-1142","board-1126"],["board-1146","board-1126"],["board-1150","board-1126"],["board-1154","board-1127"],["board-1158","board-1127"],["board-290","board-316"],["board-291","board-339"],["board-292","board-291"],["board-293","board-381"],["board-437","board-290"],["board-438","board-437"],["board-439","board-501"],["board-440","board-439"],["board-578","board-440"],["board-579","board-616"],["board-580","board-579"],["board-581","board-654"],["board-582","board-671"],["board-723","board-293"],["board-724","board-778"],["board-725","board-724"],["board-1032","board-291"],["board-1033","board-1032"],["board-1034","board-1087"],["board-1035","board-1091"],["board-1036","board-580"],["board-1131","board-438"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-441","board-290"],["board-442","board-438"],["board-443","board-439"],["board-571","board-440"],["board-572","board-579"],["board-573","board-572"],["board-574","board-580"],["board-575","board-581"],["board-576","board-575"],["board-577","board-582"],["board-726","board-289"],["board-727","board-724"],["board-728","board-725"],["board-1037","board-287"],["board-1038","board-1033"],["board-1039","board-1034"],["board-1040","board-1035"],["board-1041","board-1036"],["board-1129","board-438"],["board-1130","board-1129"],["board-1066","board-1032"],["board-1070","board-1032"],["board-1074","board-1032"],["board-1078","board-1032"],["board-1082","board-1033"],["board-1089","board-1034"],["board-1093","board-1035"],["board-1097","board-1035"],["board-1101","board-1035"],["board-1108","board-1036"],["board-1112","board-1036"],["board-1116","board-1036"],["board-1144","board-1129"],["board-1148","board-1129"],["board-1152","board-1129"],["board-1156","board-1130"],["board-1160","board-1130"],["board-384","board-289"],["board-674","board-577"],["board-319","board-286"],["board-608","board-571"],["board-469","board-437"],["board-474","board-437"],["board-479","board-437"],["board-484","board-437"],["board-489","board-438"],["board-494","board-438"],["board-499","board-438"],["board-504","board-439"],["board-509","board-439"],["board-514","board-439"],["board-519","board-439"],["board-524","board-440"],["board-529","board-440"],["board-534","board-440"],["board-751","board-723"],["board-756","board-723"],["board-761","board-723"],["board-781","board-724"],["board-786","board-724"],["board-791","board-724"],["board-796","board-724"],["board-801","board-725"],["board-806","board-725"],["board-811","board-725"],["board-816","board-725"],["board-343","board-287"],["board-350","board-288"],["board-357","board-288"],["board-364","board-288"],["board-619","board-572"],["board-625","board-573"],["board-632","board-573"],["board-639","board-574"],["board-657","board-575"],["board-663","board-576"],["board-298","board-316"],["board-321","board-298"],["board-327","board-298"],["board-333","board-298"],["board-299","board-298"],["board-300","board-299"],["board-366","board-300"],["board-371","board-300"],["board-376","board-300"],["board-444","board-298"],["board-445","board-444"],["board-446","board-501"],["board-447","board-446"],["board-587","board-447"],["board-610","board-587"],["board-588","board-587"],["board-641","board-588"],["board-647","board-588"],["board-589","board-588"],["board-666","board-589"],["board-729","board-300"],["board-763","board-729"],["board-768","board-729"],["board-730","board-729"],["board-773","board-730"],["board-731","board-730"],["board-1042","board-299"],["board-1043","board-1042"],["board-1083","board-1043"],["board-1044","board-1091"],["board-1102","board-1044"],["board-1045","board-1044"],["board-1134","board-445"],["board-1085","board-1043"],["board-1104","board-1044"],["board-766","board-729"],["board-771","board-729"],["board-776","board-730"],["board-379","board-300"],["board-669","board-589"],["board-324","board-298"],["board-330","board-298"],["board-336","board-298"],["board-369","board-300"],["board-374","board-300"],["board-613","board-587"],["board-645","board-588"],["board-651","board-588"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-448","board-298"],["board-449","board-445"],["board-450","board-446"],["board-583","board-447"],["board-584","board-583"],["board-585","board-588"],["board-586","board-585"],["board-732","board-297"],["board-733","board-730"],["board-734","board-731"],["board-1046","board-295"],["board-1047","board-1043"],["board-1048","board-1044"],["board-1132","board-445"],["board-1133","board-1132"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-451","board-305"],["board-452","board-451"],["board-453","board-501"],["board-454","board-453"],["board-594","board-454"],["board-595","board-594"],["board-596","board-595"],["board-735","board-307"],["board-736","board-735"],["board-737","board-736"],["board-1049","board-306"],["board-1050","board-1049"],["board-1051","board-1091"],["board-1052","board-1051"],["board-1137","board-452"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-455","board-305"],["board-456","board-452"],["board-457","board-453"],["board-590","board-454"],["board-591","board-590"],["board-592","board-595"],["board-593","board-592"],["board-738","board-304"],["board-739","board-736"],["board-740","board-737"],["board-1053","board-302"],["board-1054","board-1050"],["board-1055","board-1051"],["board-1135","board-452"],["board-1136","board-1135"],["board-312","board-316"],["board-313","board-312"],["board-314","board-313"],["board-458","board-312"],["board-459","board-458"],["board-460","board-501"],["board-461","board-460"],["board-601","board-461"],["board-602","board-601"],["board-603","board-602"],["board-741","board-314"],["board-742","board-741"],["board-743","board-742"],["board-1056","board-313"],["board-1057","board-1056"],["board-1058","board-1091"],["board-1059","board-1058"],["board-1140","board-459"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-462","board-312"],["board-463","board-459"],["board-464","board-460"],["board-597","board-461"],["board-598","board-597"],["board-599","board-602"],["board-600","board-599"],["board-744","board-311"],["board-745","board-742"],["board-746","board-743"],["board-1060","board-309"],["board-1061","board-1057"],["board-1062","board-1058"],["board-1138","board-459"],["board-1139","board-1138"],["board-467","board-469"],["board-472","board-474"],["board-477","board-479"],["board-482","board-484"],["board-487","board-489"],["board-492","board-494"],["board-497","board-499"],["board-502","board-504"],["board-507","board-509"],["board-512","board-514"],["board-517","board-519"],["board-522","board-524"],["board-527","board-529"],["board-532","board-534"],["board-749","board-751"],["board-754","board-756"],["board-759","board-761"],["board-764","board-766"],["board-769","board-771"],["board-774","board-776"],["board-779","board-781"],["board-784","board-786"],["board-789","board-791"],["board-794","board-796"],["board-799","board-801"],["board-804","board-806"],["board-809","board-811"],["board-814","board-816"],["board-317","board-319"],["board-606","board-608"],["board-382","board-384"],["board-672","board-674"],["board-322","board-324"],["board-611","board-613"],["board-377","board-379"],["board-667","board-669"],["board-328","board-330"],["board-617","board-619"],["board-372","board-374"],["board-661","board-663"],["board-334","board-336"],["board-623","board-625"],["board-367","board-369"],["board-655","board-657"],["board-340","board-343"],["board-347","board-350"],["board-354","board-357"],["board-361","board-364"],["board-629","board-632"],["board-636","board-639"],["board-642","board-645"],["board-648","board-651"],["board-325","board-324"],["board-614","board-613"],["board-375","board-372"],["board-664","board-661"],["board-331","board-328"],["board-620","board-617"],["board-370","board-367"],["board-658","board-655"],["board-337","board-334"],["board-626","board-623"],["board-365","board-361"],["board-652","board-648"],["board-344","board-340"],["board-633","board-629"],["board-358","board-354"],["board-646","board-642"],["board-351","board-347"],["board-640","board-636"],["board-341","board-340"],["board-630","board-629"],["board-362","board-361"],["board-649","board-648"],["board-348","board-347"],["board-637","board-636"],["board-355","board-354"],["board-643","board-642"],["board-817","board-462"],["board-818","board-817"],["board-819","board-1060"],["board-820","board-819"],["board-821","board-462"],["board-822","board-818"],["board-823","board-819"],["board-824","board-462"],["board-825","board-824"],["board-826","board-1060"],["board-827","board-826"],["board-828","board-462"],["board-829","board-825"],["board-830","board-826"],["board-831","board-462"],["board-832","board-831"],["board-833","board-1060"],["board-834","board-833"],["board-835","board-462"],["board-836","board-832"],["board-837","board-833"],["board-838","board-462"],["board-839","board-838"],["board-840","board-1060"],["board-841","board-840"],["board-842","board-462"],["board-843","board-839"],["board-844","board-840"],["board-845","board-463"],["board-846","board-845"],["board-847","board-1061"],["board-848","board-847"],["board-849","board-462"],["board-850","board-846"],["board-851","board-847"],["board-852","board-463"],["board-853","board-852"],["board-854","board-1061"],["board-855","board-854"],["board-856","board-463"],["board-857","board-853"],["board-858","board-854"],["board-859","board-463"],["board-860","board-859"],["board-861","board-1061"],["board-862","board-861"],["board-863","board-463"],["board-864","board-860"],["board-865","board-861"],["board-866","board-463"],["board-867","board-866"],["board-868","board-1061"],["board-869","board-868"],["board-870","board-463"],["board-871","board-867"],["board-872","board-868"],["board-873","board-463"],["board-874","board-873"],["board-875","board-1061"],["board-876","board-875"],["board-877","board-463"],["board-878","board-874"],["board-879","board-875"],["board-880","board-464"],["board-881","board-880"],["board-882","board-1062"],["board-883","board-882"],["board-884","board-463"],["board-885","board-881"],["board-886","board-882"],["board-887","board-464"],["board-888","board-887"],["board-889","board-1062"],["board-890","board-889"],["board-891","board-464"],["board-892","board-888"],["board-893","board-889"],["board-894","board-464"],["board-895","board-894"],["board-896","board-1062"],["board-897","board-896"],["board-898","board-464"],["board-899","board-895"],["board-900","board-896"],["board-901","board-464"],["board-902","board-901"],["board-903","board-1062"],["board-904","board-903"],["board-905","board-464"],["board-906","board-902"],["board-907","board-903"],["board-908","board-464"],["board-909","board-908"],["board-910","board-1062"],["board-911","board-910"],["board-912","board-464"],["board-913","board-909"],["board-914","board-910"],["board-915","board-308"],["board-916","board-838"],["board-917","board-866"],["board-918","board-887"],["board-919","board-308"],["board-920","board-845"],["board-921","board-880"],["board-922","board-308"],["board-923","board-838"],["board-924","board-866"],["board-925","board-887"],["board-926","board-308"],["board-927","board-845"],["board-928","board-880"],["board-929","board-309"],["board-930","board-838"],["board-931","board-866"],["board-932","board-887"],["board-933","board-308"],["board-934","board-845"],["board-935","board-880"],["board-936","board-309"],["board-937","board-839"],["board-938","board-867"],["board-939","board-888"],["board-940","board-309"],["board-941","board-846"],["board-942","board-881"],["board-943","board-309"],["board-944","board-839"],["board-945","board-867"],["board-946","board-888"],["board-947","board-309"],["board-948","board-846"],["board-949","board-881"],["board-950","board-310"],["board-951","board-847"],["board-952","board-882"],["board-953","board-310"],["board-954","board-854"],["board-955","board-889"],["board-956","board-310"],["board-957","board-847"],["board-958","board-882"],["board-959","board-310"],["board-960","board-854"],["board-961","board-889"],["board-962","board-310"],["board-963","board-847"],["board-964","board-882"],["board-965","board-310"],["board-966","board-854"],["board-967","board-889"],["board-968","board-311"],["board-969","board-847"],["board-970","board-882"],["board-971","board-310"],["board-972","board-854"],["board-973","board-889"],["board-974","board-311"],["board-975","board-848"],["board-976","board-883"],["board-977","board-311"],["board-978","board-855"],["board-979","board-890"],["board-980","board-311"],["board-981","board-848"],["board-982","board-883"],["board-983","board-311"],["board-984","board-855"],["board-985","board-890"],["board-986","board-311"],["board-987","board-848"],["board-988","board-883"],["board-989","board-311"],["board-990","board-855"],["board-991","board-890"],["board-385","board-317"],["board-386","board-340"],["board-387","board-367"],["board-675","board-606"],["board-676","board-629"],["board-677","board-655"],["board-388","board-317"],["board-389","board-334"],["board-390","board-361"],["board-678","board-606"],["board-679","board-623"],["board-680","board-648"],["board-391","board-322"],["board-392","board-340"],["board-393","board-367"],["board-681","board-611"],["board-682","board-629"],["board-683","board-655"],["board-394","board-324"],["board-395","board-334"],["board-396","board-361"],["board-684","board-613"],["board-685","board-623"],["board-686","board-648"],["board-397","board-334"],["board-398","board-340"],["board-399","board-367"],["board-687","board-623"],["board-688","board-629"],["board-689","board-655"],["board-400","board-334"],["board-401","board-334"],["board-402","board-361"],["board-690","board-623"],["board-691","board-623"],["board-692","board-648"],["board-403","board-340"],["board-404","board-340"],["board-693","board-629"],["board-694","board-629"],["board-405","board-340"],["board-406","board-361"],["board-695","board-629"],["board-696","board-648"],["board-1169","board-469"],["board-1174","board-474"],["board-1179","board-479"],["board-1184","board-484"],["board-1189","board-489"],["board-1194","board-494"],["board-1199","board-499"],["board-1204","board-504"],["board-1209","board-509"],["board-1214","board-514"],["board-1219","board-519"],["board-1224","board-524"],["board-1229","board-529"],["board-1234","board-534"],["board-1299","board-751"],["board-1304","board-756"],["board-1309","board-761"],["board-1314","board-766"],["board-1319","board-771"],["board-1324","board-776"],["board-1329","board-781"],["board-1334","board-786"],["board-1339","board-791"],["board-1344","board-796"],["board-1349","board-801"],["board-1354","board-806"],["board-1359","board-811"],["board-1364","board-816"],["board-1166","board-469"],["board-1171","board-474"],["board-1176","board-479"],["board-1181","board-484"],["board-1186","board-489"],["board-1191","board-494"],["board-1196","board-499"],["board-1201","board-504"],["board-1206","board-509"],["board-1211","board-514"],["board-1216","board-519"],["board-1221","board-524"],["board-1226","board-529"],["board-1231","board-534"],["board-1236","board-608"],["board-1294","board-387"],["board-1164","board-319"],["board-1162","board-1164"],["board-1238","board-1236"],["board-1296","board-1294"],["board-1301","board-823"],["board-1306","board-830"],["board-1311","board-837"],["board-1316","board-844"],["board-1321","board-851"],["board-1326","board-858"],["board-1331","board-865"],["board-1336","board-872"],["board-1341","board-879"],["board-1346","board-886"],["board-1351","board-893"],["board-1356","board-900"],["board-1361","board-907"],["board-1366","board-914"],["board-1370","board-677"],["board-1368","board-1370"],["board-1290","board-1162"],["board-1291","board-1181"],["board-1292","board-1211"],["board-1422","board-1294"],["board-1423","board-1314"],["board-1424","board-1344"],["board-1287","board-1162"],["board-1288","board-1186"],["board-1289","board-1216"],["board-1419","board-1294"],["board-1420","board-1319"],["board-1421","board-1349"],["board-1284","board-1162"],["board-1285","board-484"],["board-1286","board-514"],["board-1416","board-1294"],["board-1417","board-766"],["board-1418","board-796"],["board-1281","board-1162"],["board-1282","board-489"],["board-1283","board-519"],["board-1413","board-1294"],["board-1414","board-771"],["board-1415","board-801"],["board-1298","board-749"],["board-1303","board-754"],["board-1308","board-759"],["board-1313","board-764"],["board-1318","board-769"],["board-1323","board-774"],["board-1328","board-779"],["board-1333","board-784"],["board-1338","board-789"],["board-1343","board-794"],["board-1348","board-799"],["board-1353","board-804"],["board-1358","board-809"],["board-1363","board-814"],["board-1168","board-467"],["board-1173","board-472"],["board-1178","board-477"],["board-1183","board-482"],["board-1188","board-487"],["board-1193","board-492"],["board-1198","board-497"],["board-1203","board-502"],["board-1208","board-507"],["board-1213","board-512"],["board-1218","board-517"],["board-1223","board-522"],["board-1228","board-527"],["board-1233","board-532"],["board-1278","board-317"],["board-1279","board-1181"],["board-1280","board-1211"],["board-1410","board-384"],["board-1411","board-1313"],["board-1412","board-1343"],["board-1275","board-317"],["board-1276","board-1186"],["board-1277","board-1216"],["board-1407","board-382"],["board-1408","board-1318"],["board-1409","board-1348"],["board-1272","board-1162"],["board-1273","board-1181"],["board-1274","board-1211"],["board-1404","board-1294"],["board-1405","board-1313"],["board-1406","board-1343"],["board-1269","board-1162"],["board-1270","board-1186"],["board-1271","board-1216"],["board-1401","board-1294"],["board-1402","board-1318"],["board-1403","board-1348"],["board-1161","board-1162"],["board-1165","board-1166"],["board-1170","board-1171"],["board-1175","board-1176"],["board-1180","board-1181"],["board-1185","board-1186"],["board-1190","board-1191"],["board-1195","board-1196"],["board-1200","board-1201"],["board-1205","board-1206"],["board-1210","board-1211"],["board-1215","board-1216"],["board-1220","board-1221"],["board-1225","board-1226"],["board-1230","board-1231"],["board-1235","board-681"],["board-697","board-1235"],["board-698","board-697"],["board-1293","board-1161"],["board-407","board-1293"],["board-408","board-407"],["board-1297","board-1165"],["board-1302","board-1170"],["board-1307","board-1175"],["board-1312","board-1180"],["board-1317","board-1185"],["board-1322","board-1190"],["board-1327","board-1195"],["board-1332","board-1200"],["board-1337","board-1205"],["board-1342","board-1210"],["board-1347","board-1215"],["board-1352","board-1220"],["board-1357","board-1225"],["board-1362","board-1230"],["board-1367","board-1235"],["board-1266","board-1161"],["board-1267","board-1180"],["board-1268","board-1210"],["board-1398","board-1293"],["board-1399","board-1312"],["board-1400","board-1342"],["board-1263","board-1161"],["board-1264","board-1185"],["board-1265","board-1215"],["board-1395","board-1293"],["board-1396","board-1317"],["board-1397","board-1347"],["board-1163","board-1161"],["board-1167","board-1165"],["board-1172","board-1170"],["board-1177","board-1175"],["board-1182","board-1180"],["board-1187","board-1185"],["board-1192","board-1190"],["board-1197","board-1195"],["board-1202","board-1200"],["board-1207","board-1205"],["board-1212","board-1210"],["board-1217","board-1215"],["board-1222","board-1220"],["board-1227","board-1225"],["board-1232","board-1230"],["board-1237","board-1235"],["board-1295","board-1161"],["board-1300","board-1165"],["board-1305","board-1170"],["board-1310","board-1175"],["board-1315","board-1180"],["board-1320","board-1185"],["board-1325","board-1190"],["board-1330","board-1195"],["board-1335","board-1200"],["board-1340","board-1205"],["board-1345","board-1210"],["board-1350","board-1215"],["board-1355","board-1220"],["board-1360","board-1225"],["board-1365","board-1230"],["board-1369","board-1235"],["board-1260","board-397"],["board-1261","board-1180"],["board-1262","board-1210"],["board-1392","board-399"],["board-1393","board-1312"],["board-1394","board-1342"],["board-1257","board-400"],["board-1258","board-1185"],["board-1259","board-1215"],["board-1389","board-402"],["board-1390","board-1317"],["board-1391","board-1347"],["board-1254","board-1161"],["board-1255","board-1180"],["board-1256","board-1210"],["board-1386","board-1293"],["board-1387","board-1312"],["board-1388","board-1342"],["board-1251","board-1161"],["board-1252","board-1185"],["board-1253","board-1215"],["board-1383","board-1293"],["board-1384","board-1317"],["board-1385","board-1347"],["board-1248","board-1161"],["board-1249","board-1180"],["board-1250","board-1210"],["board-1380","board-1293"],["board-1381","board-1312"],["board-1382","board-1342"],["board-1245","board-1161"],["board-1246","board-1185"],["board-1247","board-1215"],["board-1377","board-1293"],["board-1378","board-1317"],["board-1379","board-1347"],["board-1242","board-1161"],["board-1243","board-1180"],["board-1244","board-1210"],["board-1374","board-1293"],["board-1375","board-1312"],["board-1376","board-1342"],["board-1239","board-1161"],["board-1240","board-1185"],["board-1241","board-1215"],["board-1371","board-1293"],["board-1372","board-1317"],["board-1373","board-1347"]]};var Go={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"63a2f4d625d55a5da0671fabb9385c81b4285f09409d69d0257a753d0fed89e1",totalBoards:1363,installedPieces:1424,material:{lengthM:2430.19333333,fullBoardEquivalents:972.077333332,fullBoards:973,sheets:195},families:[{id:"standard",name:"Standard board",count:901,variants:[{id:"standard-1",count:165,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:406,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:71,modules:4,ending:!1,lengthM:1.6846666666666668,preview:{stockId:"stock-311",positions:[-.842333,-.12,-.009,-.842333,0,-.009,-.824333,0,-.009,.842333,0,-.009,.842333,-.12,-.009,.425667,.12,-.009,.806333,.12,-.009,.806333,0,-.009,.009,.12,-.009,.389667,.12,-.009,.389667,0,-.009,-.407667,.12,-.009,-.027,.12,-.009,-.027,0,-.009,-.824333,.12,-.009,-.443667,.12,-.009,-.443667,0,-.009,.425667,0,-.009,.009,0,-.009,-.407667,0,-.009,-.824333,0,.009,-.842333,0,.009,-.842333,-.12,.009,.842333,-.12,.009,.842333,0,.009,.806333,0,.009,.806333,.12,.009,.425667,.12,.009,.389667,0,.009,.389667,.12,.009,.009,.12,.009,-.027,0,.009,-.027,.12,.009,-.407667,.12,.009,-.443667,0,.009,-.443667,.12,.009,-.824333,.12,.009,.425667,0,.009,.009,0,.009,-.407667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6846666666666668}},{id:"standard-4",count:169,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-5",count:82,modules:3,ending:!1,lengthM:1.268,preview:{stockId:"stock-45",positions:[-.634,-.12,-.009,-.634,0,-.009,-.598,0,-.009,.634,0,-.009,.634,-.12,-.009,.235333,.12,-.009,.616,.12,-.009,.616,0,-.009,-.181333,.12,-.009,.199333,.12,-.009,.199333,0,-.009,-.598,.12,-.009,-.217333,.12,-.009,-.217333,0,-.009,.235333,0,-.009,-.181333,0,-.009,-.598,0,.009,-.634,0,.009,-.634,-.12,.009,.634,-.12,.009,.634,0,.009,.616,0,.009,.616,.12,.009,.235333,.12,.009,.199333,0,.009,.199333,.12,.009,-.181333,.12,.009,-.217333,0,.009,-.217333,.12,.009,-.598,.12,.009,.235333,0,.009,-.181333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.268}},{id:"standard-6",count:8,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-336",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"End board",count:462,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1197",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:26,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-385",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:51,modules:5,ending:!0,lengthM:1.8253333333333335,preview:{stockId:"stock-3",positions:[-.912667,-.12,-.009,-.912667,0,-.009,-.894667,0,-.009,.772,.12,-.009,.912667,.12,-.009,.912667,-.12,-.009,.355333,.12,-.009,.736,.12,-.009,.736,0,-.009,-.061333,.12,-.009,.319333,.12,-.009,.319333,0,-.009,-.478,.12,-.009,-.097333,.12,-.009,-.097333,0,-.009,-.894667,.12,-.009,-.514,.12,-.009,-.514,0,-.009,.772,0,-.009,.355333,0,-.009,-.061333,0,-.009,-.478,0,-.009,-.894667,0,.009,-.912667,0,.009,-.912667,-.12,.009,.912667,-.12,.009,.912667,.12,.009,.772,.12,.009,.736,0,.009,.736,.12,.009,.355333,.12,.009,.319333,0,.009,.319333,.12,.009,-.061333,.12,.009,-.097333,0,.009,-.097333,.12,.009,-.478,.12,.009,-.514,0,.009,-.514,.12,.009,-.894667,.12,.009,.772,0,.009,.355333,0,.009,-.061333,0,.009,-.478,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8253333333333335}},{id:"ending-4",count:70,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-310",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-5",count:193,modules:4,ending:!0,lengthM:1.4086666666666667,preview:{stockId:"stock-1",positions:[-.704333,-.12,-.009,-.704333,.12,-.009,-.563667,.12,-.009,.704333,0,-.009,.704333,-.12,-.009,.305667,.12,-.009,.686333,.12,-.009,.686333,0,-.009,-.111,.12,-.009,.269667,.12,-.009,.269667,0,-.009,-.527667,.12,-.009,-.147,.12,-.009,-.147,0,-.009,-.563667,0,-.009,.305667,0,-.009,-.111,0,-.009,-.527667,0,-.009,-.563667,.12,.009,-.704333,.12,.009,-.704333,-.12,.009,.704333,-.12,.009,.704333,0,.009,.686333,0,.009,.686333,.12,.009,.305667,.12,.009,.269667,0,.009,.269667,.12,.009,-.111,.12,.009,-.147,0,.009,-.147,.12,.009,-.527667,.12,.009,-.563667,0,.009,.305667,0,.009,-.111,0,.009,-.527667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4086666666666667}},{id:"ending-6",count:104,modules:3,ending:!0,lengthM:.992,preview:{stockId:"stock-43",positions:[-.496,-.12,-.009,-.496,.12,-.009,-.355333,.12,-.009,.496,0,-.009,.496,-.12,-.009,.097333,.12,-.009,.478,.12,-.009,.478,0,-.009,-.319333,.12,-.009,.061333,.12,-.009,.061333,0,-.009,-.355333,0,-.009,.097333,0,-.009,-.319333,0,-.009,-.355333,.12,.009,-.496,.12,.009,-.496,-.12,.009,.496,-.12,.009,.496,0,.009,.478,0,.009,.478,.12,.009,.097333,.12,.009,.061333,0,.009,.061333,.12,.009,-.319333,.12,.009,-.355333,0,.009,.097333,0,.009,-.319333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:.992}}]}]};var Ls=i=>`${i.toLocaleString("en-GB")} pcs`,hh=i=>`${i.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function Vr(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function qf(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function Yf(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var on=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function jf(i,e,t){let n=Vr(e);i.classList.add("parts-catalogue");let r=on("div","parts-catalogue-heading");r.append(on("h4",null,"Board types"),on("span","parts-catalogue-total",Ls(e.totalBoards)));let s=on("p","parts-catalogue-lead","Boards in your kit. Choose a type and length."),o=on("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Board types");let a=on("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","Lengths and quantities");let l=on("div","parts-variant-heading"),c=on("h5"),d=on("span");l.append(c,d),i.replaceChildren(l,a,r,s,o);function f(p,g=!0){n.variant=p;for(let y of a.children)y.setAttribute("aria-pressed",String(y.dataset.partsVariant===p));t({...n},g)}function h(p,g=!0){n.family=p;let y=e.families.find(u=>u.id===p);for(let u of o.children)u.setAttribute("aria-pressed",String(u.dataset.partsFamily===p));c.textContent=y.name,d.textContent=`${Ls(y.count)} total`;let m=y.variants.map(u=>{let S=on("button","parts-variant");return S.type="button",S.dataset.partsVariant=u.id,S.append(on("span",null,hh(u.lengthM)),on("strong",null,Ls(u.count))),S.addEventListener("click",()=>f(u.id)),S});a.replaceChildren(...m),f(y.variants[0].id,g)}for(let p of e.families){let g=on("button","parts-family");g.type="button",g.dataset.partsFamily=p.id;let y=on("span","parts-family-count");y.append(on("strong",null,Ls(p.count)),on("small",null,"total")),g.append(on("span","parts-family-name",p.name),y),g.addEventListener("click",()=>h(p.id)),o.append(g)}return h(n.family,!1),{getSelection:()=>({...n})}}function Zf(i,e=Vr(i)){let{family:t,variant:n}=qf(i,e),r=new Ye,s=[n.preview],o=new At({color:"#43948c",roughness:.75,side:Ft,flatShading:!0}),a=new $t({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(l=>{let c=new mt;c.setAttribute("position",new ct(l.positions,3)),c.setIndex(l.indices),c.computeVertexNormals();let d=new lt(c,o);d.add(new Kt(new Qt(c,30),a)),r.add(d)}),{root:r,direction:new D(.12,.65,3),annotation:`${t.name} \xB7 ${hh(n.lengthM)} \xB7 ${Ls(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(l=>l.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var fh=Go,uh=(...i)=>new D(...i),ph=[{title:"Start with a building design.",text:"Floor plans from a client, drawings from a designer or a repeatable design from a developer. The starting point is the layout, dimensions and requirements of the project.",label:"The input",items:["Floor plans","Dimensions and heights","Project requirements"]},{title:"The Combstruct AI model automatically generates the structural design.",text:"Using the floor plans, it selects the board layout and connections. Floors, walls, ceilings and roof share one 3D model, with an ID and assembly position for every part.",label:"In one model",items:["Structure adapted to the system modules","Consistent components and connections","Data for manufacturing and assembly"]},{title:"Know exactly what to manufacture.",text:"The model produces a precise order: board types, dimensions, quantities and IDs. The same data guides sheet cutting and the preparation of site packages.",label:"For manufacturing",items:["Parts list, materials and quantities","Sheet cutting layouts and component IDs","Packages organised for assembly"]},{title:"Every component goes in its place.",text:"Identified parts and their positions in a shared model make site work easier to organise. The builder knows where to start and what comes next. The same system supports professional assembly and DIY.",label:"On site",items:["Parts with unique IDs","A clear assembly sequence","DIY or professional assembly"]}];function j_(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new fi(t);r.colorSpace=Bt;let s=new Mr(new Xi({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function Mc(i,e=Vr(Go)){if(i===2){let x=Zf(Go,e);return{...x,getManufacturingState:()=>({stage:i,...x.getPartsState(),example:Go.name})}}let t=kr(),n=t.dimensions,r=new Ye;r.name="Combstruct Flow";let s=new At({color:"#c49b62",roughness:.85}),o=new At({color:"#43948c",roughness:.75}),a=new At({color:"#33493e",roughness:.85}),l=new $t({color:"#66543a",transparent:!0,opacity:.45}),c=(x,N,P,L,F,k,O=a)=>{let z=new lt(new sn(x,N,P),O);return z.position.set(L,F,k),r.add(z),z},d=(x,N=s)=>{let P=new lt(x,N);return P.add(new Kt(new Qt(x,30),l)),r.add(P),P},f=(x,N,P,L,F)=>{let k=j_(x,F);k.position.set(N,P,L),r.add(k)};if(i===0){let x=new At({color:"#ffffff",roughness:1});c(n.width+1.8,.065,n.depth+1.8,0,-.085,0,x);for(let N of t.wallPanels){let P=[N.start,N.end,...N.holes.flatMap(L=>N.axis===0?[L.world.x0,L.world.x1]:[L.world.z0,L.world.z1])].sort((L,F)=>L-F);for(let L=1;L<P.length;L++){let F=P[L-1],k=P[L],O=(F+k)/2;k-F<.001||N.holes.some(z=>O>(N.axis===0?z.world.x0:z.world.z0)&&O<(N.axis===0?z.world.x1:z.world.z1))||(N.axis===0?c(k-F,.18,N.depth,O,.06,N.fixed):c(N.depth,.18,k-F,N.fixed,.06,O))}for(let L of N.holes){let F=N.axis===0?L.world.x0:L.world.z0,k=N.axis===0?L.world.x1:L.world.z1;L.kind==="window"&&(N.axis===0?c(k-F,.035,.035,(F+k)/2,.025,N.fixed,o):c(.035,.035,k-F,N.fixed,.025,(F+k)/2,o))}}for(let N of t.rooms)f(N.name,(N.x0+N.x1)/2,.26,(N.z0+N.z1)/2,N.id==="living"?3.5:3.2);return f(`${n.width.toFixed(2).replace(".",".")} m`,0,.03,n.halfDepth+.56,2.9),f(`${n.depth.toFixed(2).replace(".",".")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:uh(.15,7,3.5),annotation:"Example: Combstruct 30 floor plan"}}let h=new Map(t.boards.map(x=>[x.id,x])),p=Ds.assembly.map(([x])=>h.get(x));if(p.length!==t.boards.length||p.some(x=>!x)||new Set(p).size!==p.length)throw new Error("Regenerate the assembly schedule for the current model");let g=[],y=[],m=[],u=[],S=0,M=0;for(let x of p){let N=x.mesh.geometry.index?x.mesh.geometry.toNonIndexed():x.mesh.geometry.clone();N.translate(...x.mesh.position.toArray()),g.push(N);let P=new Qt(N,30);y.push(P),S+=N.attributes.position.count,M+=P.attributes.position.count,m.push(S),u.push(M)}let v=Bo(g,!1),C=Bo(y,!1);g.forEach(x=>x.dispose()),y.forEach(x=>x.dispose());let E=new lt(v,s),T=new Kt(C,l);r.add(E,T);let b=p.length;if(i===1){let x=p.find(L=>L.surface==="front"&&L.axis===1&&L.index===9)||p[150],N=x.mesh.geometry.clone().translate(...x.mesh.position.toArray());d(N,o);let P=x.bounds.getCenter(uh());f(Ho(x).id,P.x,P.y+.45,P.z+.25,1.4)}return{root:r,direction:uh(1.4,1,1.5),annotation:i===1?"Combstruct 30 · digital component model":"Move the slider to see the assembly sequence",assembly(x){b=Math.max(0,Math.min(p.length,Math.round(x*p.length))),v.setDrawRange(0,m[b-1]||0),C.setDrawRange(0,u[b-1]||0)},getManufacturingState(){return{stage:i,totalBoards:p.length,visibleBoards:b,lastBoard:p[b-1]?.id||null,lastSupport:Ds.assembly[b-1]?.[1]||null,example:"Combstruct 30"}}}}function mh(i){return[!1,!0].map(t=>{let n=a=>t?{start:"end",end:"start",left:"right",right:"left"}[a]:a,r=(i.connectorCuts||[]).map(a=>[n(a.end),a.edge,a.offset||0,a.width,a.removedRun].join(":")).sort(),s=bc(i.stock),o=[s.extendStart||0,s.extendEnd||0,s.extraStartTrim||0,s.extraEndTrim||0];return t&&([o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]),JSON.stringify([i.stock.pixels,i.trim?n(i.trim):null,r,...o.some(Boolean)?[o]:[]])}).sort()[0]}var Li=(...i)=>new D(...i),gh=1e-5;function bh(i,e){let t=i.attributes.position,n=1/0,r=-1/0;for(let s=0;s<t.count;s++){let o=t.getX(s)*e[0]+t.getY(s)*e[1]+t.getZ(s)*e[2];n=Math.min(n,o),r=Math.max(r,o)}return r-n}function $f(i){if(i.custom||i.stock.pixels<2||i.connectorCuts.length)return!1;let[e,t]=$n(i.stock,!1),n=i.mesh.geometry;return Math.abs(bh(n,i.along)-(t-e))<gh&&Math.abs(bh(n,i.normal)-gc)<gh&&Math.abs(bh(n,i.thick)-Cs)<gh}function Kf(i,e){return e.slice(0,-1).map((t,n)=>{let r=[];for(let s=t;s<e[n+1]&&r.length<4;s++)$f(i[s])&&r.push(s);if(r.length!==4)throw new Error("Missing complete native boards for the robot demonstration: "+n);return r})}function Jf(i){if(!$f(i))throw new Error("Robot pickup requires a complete native board: "+i.id);let e=Li(...i.along).normalize(),t=Li(...i.normal).normalize(),n=new st().makeBasis(e,t,e.clone().cross(t)),s=new st().makeBasis(Li(1,0,0),Li(0,0,1),Li(0,-1,0)).multiply(n.invert()),o=new Jt().setFromRotationMatrix(s).invert(),a=i.bounds.getCenter(Li()),l=i.mesh.geometry.clone().translate(...i.mesh.position.toArray()).translate(-a.x,-a.y,-a.z).applyMatrix4(s);l.computeBoundingBox();let c=l.boundingBox.getCenter(Li());l.translate(-c.x,-c.y,-c.z),a.add(c.applyQuaternion(o));let d=JSON.parse(mh(i)),f=bc(i.stock),h=[f.extendStart||0,f.extendEnd||0,f.extraStartTrim||0,f.extraEndTrim||0];if((i.trim||null)!==d[1]||JSON.stringify(h)!==JSON.stringify(d[3]||[0,0,0,0])){let p=new Jt().setFromAxisAngle(Li(0,0,1),Math.PI);l.applyQuaternion(p),o.multiply(p.clone().invert())}return l.computeBoundingBox(),{geometry:l,target:a,rotation:o,dimensions:l.boundingBox.getSize(Li()).toArray()}}function Qf(i,e){let t=new Map,n=e.flat().map(o=>{let a=i[o],l=mh(a);t.has(l)||t.set(l,{key:l,profile:a.trim?"ending":"ordinary",prepared:Jf(a),uses:0});let c=t.get(l);return c.uses++,{index:o,stack:c,prepared:Jf(a)}}),r=[...t.values()].sort((o,a)=>o.profile.localeCompare(a.profile)||a.prepared.dimensions[0]-o.prepared.dimensions[0]),s={ordinary:0,ending:0};for(let o of r)o.column=o.profile==="ordinary"?0:1,o.row=s[o.profile]++,o.id=(o.column===0?"A":"B")+(o.row+1),o.initial=12+o.uses;return{stacks:r,picks:n}}function Wo(i,e){let t=new Map(i.stacks.map(n=>[n.id,n.initial]));for(let n of i.picks.slice(0,e))t.set(n.stack.id,t.get(n.stack.id)-1);return t}var it=(...i)=>new D(...i),xh=it(0,1,0),yh=it(0,0,1),Us=i=>Math.max(0,Math.min(1,i)),Z_=i=>(i=Us(i),i*i*(3-2*i)),Nt=(i,e,t)=>Z_((i-e)/(t-e)),gn=Zn.lerp,ei=(i,e=0)=>new At({color:i,metalness:e,roughness:e?.36:.76}),Xo={factory:{title:"Lights-off factory",duration:42,steps:[{at:0,label:"Panel feed",title:"Panel in. Process on.",text:"The magazine feeds the next OSB, MFP or plywood panel. Rollers guide it into the cutting station while hold-downs keep it in position."},{at:.15,label:"Five boards",title:"One panel. Five boards.",text:"Longitudinal cutting produces five straight boards. At this stage they have no slots."},{at:.31,label:"Turn onto edges",title:"Long edge facing up.",text:"A rotary fixture stands the boards on their long edges. Guides and clamps hold them upright before milling."},{at:.47,label:"Milling",title:"Seven cutters. One pass.",text:"Seven cutters stay in one row along the board, at a fixed height. Upright boards travel beneath them, one after another. Full slots and end half-slots are cut in a single pass."},{at:.64,label:"Inspect and identify",title:"Every board has its place.",text:"An inspection station checks the profile. Marking links each part to its identifier in the building model."},{at:.8,label:"Assembly kit",title:"Ready for the next step.",text:"Boards enter a labelled package. Kits are organised by project and assembly sequence."}]},site:{title:"Robotic assembly",duration:60,steps:[{at:0,label:"Floor",title:"Select. Pick. Place.",text:"The model specifies the profile and length. The robot selects the right stack, picks up a board and installs it in the structure. No manual feeding of parts in sequence."},{at:.2,label:"Walls",title:"Same component. New orientation.",text:"The rotating gripper turns the board upright. The gantry reaches successive ribs while keeping access to the building interior."},{at:.4,label:"Ceiling",title:"Assembly guided by the model.",text:"Once the supports are in place, the robot positions the ceiling ribs. Every part shown has an identifier and a target position in the structure."},{at:.6,label:"Roof",title:"Aligned with the roof pitch.",text:"The gripper rotates the board to match the roof. One shared model guides the process from the parts package to the next joint."},{at:.8,label:"Structure",title:"One structure. One dataset.",text:"Floor, walls, ceiling and roof use the same system. The robot works from the data prepared for production and assembly."}]}};function at(i,e,t,n,r,s,o,a){let l=new lt(new sn(e,t,n),a);return l.position.set(r,s,o),i.add(l),l}function Pn(i,e,t,n,r,s=xh){let o=new lt(new Ci(e,e,t,16),r);return o.position.copy(n),o.quaternion.setFromUnitVectors(xh,s),i.add(o),o}function Ns(i,e){let t=new lt(i,e);return t.add(new Kt(new Qt(i,30),new $t({color:"#5b4632",transparent:!0,opacity:.5}))),t}function Ni(i,e,t,n,r,s=2,o="#dceae4"){let a=document.createElement("canvas");a.width=768,a.height=96;let l=a.getContext("2d");l.font="500 37px Helvetica Neue, Arial, sans-serif",l.textAlign="center",l.fillStyle=o,l.fillText(e,384,61);let c=new fi(a);c.colorSpace=Bt;let d=new Mr(new Xi({map:c,depthTest:!1}));return d.scale.set(s,s/8,1),d.position.set(t,n,r),i.add(d),d}function _h(i,e,t,n,r){at(i,t,.15,2.85,e,.74,0,r);for(let s=-t/2+.12;s<t/2;s+=.27)Pn(i,.055,2.75,it(e+s,.86,0),n,yh);for(let s of[-1.48,1.48]){at(i,t,.17,.09,e,.78,s,n);for(let o of[-t/2+.16,t/2-.16])at(i,.1,.76,.1,e+o,.36,s,r)}}function Sc(i,e,t,n,r){for(let s of[-t/2,t/2])at(i,.18,n,.18,e,n/2,s,r);at(i,.28,.24,t+.18,e,n,0,r)}function J_(){let i=new Ye,e=ei("#8fa4a8",.6),t=ei("#30474b",.35),n=ei("#cba36b"),r=ei("#398d7d",.35),s=ei("#17282b"),o=new At({color:"#e3f3ed",emissive:"#a7e1cc",emissiveIntensity:1.5});at(i,22,.18,7,0,-.2,0,s),_h(i,-6.3,5.3,e,t),_h(i,-.7,5.4,e,t),_h(i,4.5,4.3,e,t);for(let R=0;R<10;R++)at(i,1.25,Je,2.5,-8.2,.98+R*.024,0,n);Sc(i,-8.2,3.35,2.7,t),at(i,3.5,.09,.12,-7.8,2.67,0,e);let a=new Ye;i.add(a),at(a,1,.09,1.6,0,0,0,e);for(let R of[-.38,.38])for(let W of[-.56,.56])Pn(a,.07,.16,it(R,-.1,W),t);let l=at(i,.08,1,.08,-8.2,2,0,e),c=Ns(new sn(1.25,Je,2.5),n);i.add(c);let d=new Ye;i.add(d);let f=[],h=[],p=1.05,g=20,y=.65,m=.47,u=7.48,S=new st().makeBasis(yh,xh,it(-1,0,0)),M=yc(6).applyMatrix4(S).translate(0,gt/2,-3*Ce);for(let R=0;R<5;R++){let W=new Ye;d.add(W),f.push(W);let X=Ns(new sn(.24,Je,2.5),n);W.add(X);let ae=new Ye;i.add(ae),ae.visible=!1;let ge=Ns(new sn(Je,gt,6*Ce).translate(0,gt/2,0),n),fe=Ns(M.clone(),n);ae.add(ge,fe);let ne=[];for(let se=0;se<7;se++){let V=Math.max(0,se*Ce-Je),oe=Math.min(6*Ce,se*Ce+Je);ne.push(at(ae,Je,gt/2,oe-V,0,3*gt/4,(V+oe)/2-3*Ce,n))}let le=new Ye;ae.add(le);for(let se of[-.92,.92]){at(le,.15,.045,.14,0,-.0225,se,r);for(let V of[-1,1])at(le,.025,.085,.14,V*(Je/2+.0125),.02,se,t)}h.push({group:ae,raw:ge,finished:fe,chips:ne,saddle:le})}Sc(i,-4.65,3.4,2.45,t);let v=new Ye;i.add(v),at(v,1.5,.16,.22,0,0,0,e);let C=at(i,.09,1,.09,-4.65,2,0,e);for(let R=0;R<4;R++){let W=Pn(v,.2,.012,it((R-1.5)*.25,-.17,0),e,it(1,0,0));W.userData.saw=!0}for(let R of[-5.36,-3.95])Pn(i,.075,2.6,it(R,1.06,0),t,yh);let E=[];for(let R=0;R<5;R++){let W=new Ye;i.add(W);for(let X of[-.92,.92])at(W,.29,.055,.14,0,-.033,X,r),at(W,.03,.15,.14,-.135,.015,X,t);E.push(W)}Sc(i,p,3.45,2.8,t);let T=new Ye;i.add(T),T.position.set(p,1.36,0),at(T,.3,.2,2.95,0,.27,0,e);for(let R of[-1.46,1.46])at(i,.12,1.07,.12,p,2.265,R,e);let b=[];for(let R=0;R<7;R++){let W=(R-3)*Ce;Pn(T,.07,.32,it(0,.04,W),r);let X=Pn(T,Je,.18,it(0,-.21,W),e);at(X,.004,.17,.004,Je*.75,0,0,t),b.push(X)}for(let R of[-.92,.92])at(i,9.4,.055,.16,2.18,.885,R,t);for(let R of[-1.9,2.5])i.add(new Pr(it(1,0,0),it(R,.94,1.45),.8,7522734,.17,.1));for(let R of[-4.65,1.05,4.45])at(i,1.5,.035,.06,R,2.34,-.2,o);Sc(i,4.45,3.25,2.2,e),at(i,.4,.4,.35,4.45,1.85,0,t);let x=new lt(new Cr(1.35,2.5),new ui({color:"#7cd3b5",transparent:!0,opacity:.19,side:Ft,depthWrite:!1}));x.rotation.x=-Math.PI/2,i.add(x);let N=new Ye;i.add(N),at(N,1.5,.14,2.85,0,0,0,n);for(let R of[-1,1])at(N,1.55,.08,.1,0,-.1,R,t);for(let R of[-.64,.64])for(let W of[-1.24,1.24])at(N,.1,.86,.1,R,-.5,W,t);let P=[];for(let R of[-.84,.84])P.push(at(N,.3,.025,.035,0,.07+5*Je+.015,R,r));let L=Ni(i,"C30 \xB7 KIT",7.6,.38,1.9,1.55);Ni(i,"OSB / MFP / Plywood",-8.1,.07,2.4,3),Ni(i,"5 \xD7",-4.65,.07,2.4,1.4),Ni(i,"7 \xD7",p,1.98,0,1.3),Ni(i,"CNC",p,.07,2.4,1.3),Ni(i,"ID",4.45,.07,2.4,1.1);for(let R of[-4.65,1.05])Pn(i,.12,.7,it(R,2.75,-1.3),t),at(i,.58,.5,.48,R,.33,-2.2,t);let F={},k=-8.2;function O(R){R=Us(R);let W=R<.035?-8.2:R<.075?gn(-8.2,-6.8,Nt(R,.035,.075)):R<.1?-6.8:gn(-6.8,-4.65,Nt(R,.1,.15)),X=R<.035?gn(1.224,1.7,Nt(R,0,.035)):R<.075?1.7:R<.1?gn(1.7,.94,Nt(R,.075,.1)):.94,ae=R<.15?W:R<.31?-4.65:R<m?gn(-4.65,-.75,Nt(R,.31,m)):-.75+g*(R-m);c.visible=R<.22,c.position.set(ae,R<.15?X:.94,0),a.position.set(R<.1?W:gn(-6.8,-8.2,Nt(R,.1,.15)),R<.1?X+.19:gn(1.13,2.1,Nt(R,.1,.125)),0),l.scale.y=2.67-a.position.y,l.position.set(a.position.x,(2.67+a.position.y)/2,0),d.visible=R>=.22&&R<.47;let ge=Nt(R,.33,.43)*Math.PI/2;for(let se=0;se<5;se++){let V=.94+Math.sin(ge)*.12,oe=gn(.25,y,Nt(R,.36,m));f[se].position.set(ae+(se-2)*oe,V,0),f[se].rotation.z=ge,E[se].visible=R>=.31&&R<.47,E[se].position.copy(f[se].position),E[se].rotation.z=ge}v.position.set(-4.65,R>=.15&&R<.31?1.15:1.68,gn(-1.5,1.5,Nt(R,.15,.29))),C.scale.y=2.45-v.position.y,C.position.set(-4.65,(2.45+v.position.y)/2,v.position.z),b.forEach(se=>se.rotation.y=R*42*45);let fe=[];for(let se=0;se<5;se++){let{group:V,raw:oe,finished:ie,chips:pe,saddle:Ae}=h[se],Pe=ae+(se-2)*y,He=R<m?0:Us((Pe-p+Je/2)/Je),Ge=m+(u+.75-(se-2)*y)/g,ce=Nt(R,Ge,Ge+.02),_e=1-He;V.visible=R>=m,oe.visible=He===0,ie.visible=He>0,pe.forEach(re=>{re.visible=He>0&&He<1,re.scale.x=Math.max(.001,_e),re.position.x=-Je/2+_e*Je/2}),V.position.set(Math.min(u,Pe),gn(.94,.89+Je/2+(4-se)*Je,ce),0),V.rotation.z=-ce*Math.PI/2,Ae.visible=ce<1,fe.push({id:se+1,x:V.position.x,z:V.position.z,cut:He,slots:He===1?7:0,packed:ce===1})}x.visible=fe.some(se=>Math.abs(se.x-4.45)<.28)&&R>=m,x.position.set(4.45,1.45,0);let ne=fe.every(se=>se.packed);k=R<m?ae:h.reduce((se,V)=>se+V.group.position.x+gt/2*Math.sin(-V.group.rotation.z),0)/h.length,N.position.set(7.6,.82,0),P.forEach(se=>se.visible=ne),L.visible=ne;let le=Xo.factory.steps.findLastIndex(se=>R>=se.at);F={process:"factory",progress:R,step:le,blanks:5,orientation:R<m?"flat-to-edge":"on-edge",milledSlots:Math.max(...fe.map(se=>se.slots)),toolApproach:"top",cutterCount:b.length,cutterPositions:b.map(se=>se.getWorldPosition(it()).toArray()),feedAxis:"x",boardAxis:"z",boards:fe,complete:ne}}O(0);let z=new kt(it(-10.1,-.2,-2.7),it(9.1,3.2,2.8));return{root:i,direction:it(.8,1.25,2.6),overviewDirection:it(.8,1.25,2.6),detailDirection:it(2.1,1.6,1.2),focus:z,overview:z,background:"#18292c",annotation:"Automated production line concept",update:O,getRoboticsState:()=>F,getDetailFocus(){let R=Nt(F.progress,.36,.5)*(1-Nt(F.progress,.65,.81)),W=it(gn(1.8,1.45,R),gn(.95,.58,R),gn(1.65,1.34,R)),X=it(k,gn(1.6,1.35,R),0);return new kt(X.clone().sub(W),X.clone().add(W))},dispose(){M.dispose()}}}function $_(){let i=new Ye,e=kr(),t=e.dimensions,n=Mc(3);i.add(n.root);let r=new Map(e.boards.map(ne=>[ne.id,ne])),s=Ds.assembly.map(([ne])=>r.get(ne)),o=ne=>{let le=s.findIndex(ne);if(le<0)throw Error("Missing construction stage in the robotics example");return le},a=[0,o(ne=>ne.kind==="wall"&&ne.axis===1),o(ne=>ne.kind==="ceiling"),o(ne=>ne.kind==="roof-slope"),s.length],l=Kf(s,a),c=Qf(s,l),d=ei("#82969a",.6),f=ei("#36524d",.35),h=ei("#348d7b",.35),p=ei("#cba36b"),g=ei("#e3e9df"),y=-t.halfWidth-1.5,m=t.halfWidth+1.5,u=-t.halfDepth-t.terraceDepth-1.4,S=t.halfDepth+4.2,M=t.roofRidgeY+2.5;at(i,m-y+2,.12,S-u+1,0,-.15,(u+S)/2,g);for(let ne of[y,m]){at(i,.14,.14,S-u,ne,0,(u+S)/2,d);for(let le=u;le<S;le+=.8)at(i,.55,.09,.22,ne,-.04,le,f)}let v=new Ye;i.add(v);for(let ne of[y,m]){at(v,.3,M,.3,ne,M/2,0,f),at(v,.65,.3,1.5,ne,.2,0,h);for(let le of[-.5,.5])Pn(v,.14,.25,it(ne,.1,le),d,it(1,0,0))}for(let ne of[-.21,.21])at(v,m-y+.4,.26,.16,0,M,ne,d);let C=new Ye;v.add(C),at(C,.6,.3,.72,0,M-.05,0,h);let E=at(C,.14,1,.14,0,M-.8,0,d),T=new Ye;i.add(T),Pn(T,.13,.22,it(0,0,0),f),Pn(T,.18,.08,it(0,.12,0),h);let b=new Ye;i.add(b),at(b,.65,.065,.1,0,0,0,f);for(let ne of[-.22,.22])Pn(b,.018,.09,it(ne,-.075,0),d),Pn(b,.028,.07,it(ne,-.155,0),f),Pn(b,.032,.01,it(ne,-.191,0),h);let x=new lt(new xo(.11,16,12),d);i.add(x);let N=.16,P=new Map;for(let ne of c.stacks){ne.position=it(ne.column===0?-1.7:1.7,N,t.halfDepth+1.25+ne.row*.53);let le=ne.prepared.dimensions[0],se=new Ye;se.position.copy(ne.position),i.add(se);for(let ie of[-le*.32,le*.32])at(se,.1,.12,.34,ie,-.06,0,p);let V=[];for(let ie=0;ie<ne.initial;ie++){let pe=Ns(ne.prepared.geometry,p);pe.position.y=(ie+.5)*Je,se.add(pe),V.push(pe)}let oe=new Kt(new Qt(new sn(le+.16,.008,gt+.13)),new $t({color:"#2a9b82"}));oe.position.y=-.125,se.add(oe),P.set(ne.id,{boards:V,selection:oe,label:null,count:-1})}Ni(i,"Standard boards",-1.7,.85,t.halfDepth+.65,2.6,"#254331"),Ni(i,"End boards",1.7,.85,t.halfDepth+.65,2.6,"#254331");let L=Ns(new sn(.01,.01,.01),ei("#379b88"));i.add(L),L.geometry.dispose(),L.children[0].geometry.dispose();let F=new Map(c.picks.map(ne=>[ne.index,new Qt(ne.prepared.geometry,30)])),k=t.roofRidgeY+1.25,O=it(0,k,S-.6),z=it(0,.205,-gt/4),R={};function W(ne,le){return ne.stack.position.clone().add(it(0,(le.get(ne.stack.id)-.5)*Je,0))}function X(ne,le,se){for(let V of c.stacks){let oe=P.get(V.id),ie=ne.get(V.id),pe=V.id===le;oe.selection.visible=pe,oe.boards.forEach((Ae,Pe)=>{Ae.visible=Pe<ie,Ae.material=pe&&se&&Pe===ie-1?L.material:p}),oe.count!==ie&&(oe.label&&(i.remove(oe.label),oe.label.material.map.dispose(),oe.label.material.dispose()),oe.label=Ni(i,`${V.id} \xB7 ${V.prepared.dimensions[0].toFixed(2)} m \xB7 ${ie}\xD7`,V.position.x,N+ie*Je+.07,V.position.z+.2,1.65,"#254331"),oe.count=ie)}}function ae(ne,le){let se=ne.clone().add(z.clone().applyQuaternion(le));v.position.z=se.z,C.position.x=se.x;let V=Math.max(.35,M-se.y-.25);return E.scale.y=V,E.position.y=M-V/2,T.position.copy(se).add(it(0,.18,0)),b.position.copy(se),b.quaternion.copy(le),x.position.copy(se),se}function ge(ne){return c.stacks.map(le=>({id:le.id,profile:le.profile,length:le.prepared.dimensions[0],initial:le.initial,remaining:ne.get(le.id),position:le.position.toArray()}))}function fe(ne){let le=Us(ne),se=Math.min(4,Math.floor(le*5)),V=Us(le*5-se);if(se===4){n.assembly(1),L.visible=!1;let De=Wo(c,c.picks.length);X(De,null,!1);let we=ae(O,new Jt);R={process:"site",progress:le,step:se,installed:s.length,total:s.length,complete:!0,inventory:ge(De),picked:c.picks.length,toolPosition:we.toArray()};return}let oe=4,ie=Math.min(oe-1,Math.floor(V*oe)),pe=Us(V*oe-ie),Ae=se*oe+ie,Pe=c.picks[Ae],He=Pe.index,{target:Ge,rotation:ce,geometry:_e,dimensions:re}=Pe.prepared,Se=pe>=.16,I=pe>=.86,We=Wo(c,Ae),Re=Wo(c,Ae+(Se?1:0)),ze=W(Pe,We),ve=c.picks[Ae+1],A=ve?W(ve,Wo(c,Ae+1)):O.clone().add(it(0,-.5,0));X(Re,Pe.stack.id,!Se),n.assembly((He+(I?1:0))/s.length),L.geometry=_e,L.children[0].geometry=F.get(He);let _=ze.clone().setY(k),B=Ge.clone().setY(k),$=A.clone().setY(k),de=it();pe<.16?de.copy(ze).add(it(0,gn(.5,0,Nt(pe,0,.16)),0)):pe<.35?de.lerpVectors(ze,_,Nt(pe,.16,.35)):pe<.6?de.lerpVectors(_,B,Nt(pe,.35,.6)):pe<.86?de.lerpVectors(B,Ge,Nt(pe,.6,.86)):pe<.92?de.lerpVectors(Ge,B,Nt(pe,.86,.92)):pe<.98?de.lerpVectors(B,$,Nt(pe,.92,.98)):de.lerpVectors($,A.clone().add(it(0,.5,0)),Nt(pe,.98,1)),L.visible=Se&&!I,L.position.copy(de),L.quaternion.identity().slerp(ce,Nt(pe,.35,.6)*(1-Nt(pe,.92,.98)));let ee=ae(de,L.quaternion);R={process:"site",progress:le,step:se,installed:He+(I?1:0),total:s.length,activeBoard:s[He].id,boardKind:s[He].kind,boardProfile:Pe.stack.profile,boardDimensions:re,nativeStock:!0,pickupGap:ze.y+_e.boundingBox.min.y-(N+(We.get(Pe.stack.id)-1)*Je),pickupPosition:ze.toArray(),support:Ds.assembly[He][1],carrying:L.visible,sourceVisible:!Se,phase:pe<.16?"pick":pe<.6?"carry":pe<.86?"place":"release",complete:!1,selectedOperations:!0,selectedStack:Pe.stack.id,nextStack:ve?.stack.id||null,inventory:ge(Re),picked:Ae+(Se?1:0),toolPosition:ee.toArray()}}return fe(0),{root:i,direction:it(1.5,1.15,2),distanceScale:.83,focus:new kt(it(y-1,-.2,u-.4),it(m+.7,M+.35,S+.4)),annotation:"Selected operations · Combstruct 30",update:fe,getRoboticsState:()=>R,dispose(){for(let ne of c.picks)ne.prepared.geometry.dispose();for(let ne of F.values())ne.dispose()}}}function ep(i){return i==="site"?$_():J_()}var In=[{id:"deska",group:"Components and principles",title:"Comb board",lead:"One repeating component forms the floor, walls, ceilings and roof.",text:"The board is cut from OSB, MFP or plywood. Slots reach halfway through its height. Two boards placed face to face form a pair, and shorter variants retain the same module spacing.",rule:"24 cm high. Each board is 18 mm thick.",scene:"beam"},{id:"uciaglanie",group:"Components and principles",title:"Paired boards and continuous ribs",lead:"Extend a rib by adding boards in two layers.",text:"Joints are staggered: the end of a board in one layer sits beside a continuous section in the other. In this example, the layers are offset by two modules along the beam. One layer ends 24 cm short of the other.",rule:"The joints in the two layers never line up.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Components and principles",title:"Ground and upper floors",lead:"Ribs parallel to the shorter panel edge have their slots facing up.",text:"This is a consistent assembly rule. These ribs are highlighted in teal. The perpendicular ribs have their slots facing the opposite way, so the two sets interlock.",rule:"Shorter load-bearing direction — slots face up.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Components and principles",title:"External walls",lead:"Vertical ribs have their slots facing outside the house.",text:"The teal uprights show the correct orientation. Horizontal ribs connect from the opposite side. The wall starts at the structural base level, and its stepped ends form the floor joint.",rule:"Uprights: slots face outwards. Ribs stay aligned.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Components and principles",title:"Roof",lead:"The shorter direction of a roof panel also has its slots facing up.",text:"On a roof slope, “up” means towards the roof covering. The highlighted ribs run parallel to the shorter edge of the slope. The second set closes the grid from the opposite side.",rule:"The floor-panel rule, rotated with the roof slope.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Components and principles",title:"End boards and full end slots",lead:"The joint is formed by choosing the right board lengths.",text:"The standard end board is 240 mm shorter. At a three-way joint, one board has a full end slot and the end board is shortened by a further 18 mm. The other slots keep the same spacing.",rule:"Full end slot: 36 mm. Additional end-board shortening: 18 mm.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Connections",title:"Crossing ribs",lead:"Two perpendicular pairs slide together through their slots.",text:"Each set gives up half its height at the crossing. Once assembled, both fit within a single 24 cm structural layer. Separate the parts to see both sides of the slot.",rule:"An upward-facing slot meets a downward-facing slot.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Connections",title:"Floor — external wall",lead:"The longer end runs alongside the full rib.",text:"The shorter end rests on the rib, while the longer one extends beside it to the structural base. The wall pair and floor pair remain in the same plane.",rule:"A full board and an end board meet across the 24 cm depth.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Connections",title:"Floor — wall — terrace",lead:"The floor can continue beyond the house footprint.",text:"One layer continues onto the terrace. In the other, a full end slot and a shorter end board make room for the wall upright. The transverse floor rib stays clear.",rule:"A continuous terrace connection with room for all three rib directions.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Connections",title:"Floor — internal wall",lead:"An internal wall enters the floor grid using the same principle.",text:"The upright starts at the base of the structure. Its shorter layer rests on a full floor rib. In the other layer, the board lengths leave room for the wall and transverse rib, without side cut-outs.",rule:"Aligned ribs, with no extra board beneath the wall.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Connections",title:"Internal — external wall",lead:"Horizontal ribs from both walls meet in one plane.",text:"The ends alternate between layers. One board ends with a full slot; the adjacent end board is shortened by a further 18 mm. The external wall upright fits between them.",rule:"The third component enters the exposed slot.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Connections",title:"External wall corner",lead:"Two walls meet to close the corner.",text:"Horizontal pairs meet with alternating full and shortened boards. Each wall keeps its own orientation: the slots in its vertical ribs open towards the outside of the building.",rule:"Two walls with board pairs at a shared level.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Connections",title:"Internal wall junction",lead:"A transverse partition meets a continuous wall.",text:"One layer passes through the junction while the other receives the partition end. A full end slot and additional end shortening leave room for the upright. The board pairs remain in their shared planes.",rule:"The end fits into a continuous board pair.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Connections",title:"Upper floor — external wall",lead:"The floor slab rests on the horizontal wall rib.",text:"The lower upright ends with a full slot. The horizontal wall pair passes through it, and the slab rests on its upper face. The upper end board starts above the slab and is shortened by a further 18 mm.",rule:"The upper floor keeps the wall structure aligned.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Connections",title:"Upper floor — internal wall",lead:"The upright meets the upper floor on the same line as the ground-floor rib.",text:"The slab rests on the top horizontal row of the internal wall. End boards and full end slots bring together all three rib directions without side cut-outs.",rule:"The slab sits above the horizontal wall rib.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Connections",title:"Roof — wall",lead:"The extended upright forms a lap between the roof slots.",text:"In one layer, the roof board runs continuously across the joint and the shorter upright supports its underside. In the other layer, the longer upright overlaps its side, with roof boards meeting the upright on either side. At steeper pitches, only the upper corners of the upright are relieved to keep adjacent slots open. Without a knee wall, a filler closes the space above the floor. The floor board keeps its profile and rib alignment, with no bevel. Choose an eave or flush edge, change the pitch and separate the layers.",rule:"Roof and floor above the horizontal wall rib. Roof slots remain accessible.",scene:"roof-wall",spread:!0,crossing:!0},{id:"kalenica",group:"Connections",title:"Roof ridge joint",lead:"Two roof slopes meet with matching ends.",text:"The roof slopes in this model are at 35°. Rib ends are cut to the ridge plane so the two sides meet without overlapping. This angled joint depends on the roof geometry.",rule:"The angle and end shape follow the roof design.",scene:"ridge"}],wc=[{id:"standard",name:"Standard",trim:null,description:"A board with slots along the edge and half-slots at both ends."},{id:"ending",name:"End board · −240 mm",trim:"left",description:"The standard end board is shorter by the board depth: 240 mm."},{id:"full-end-slot",name:"Full end slot · 36 mm",modules:5,extendEnd:.018,description:"The plain half extends by 18 mm. The end slot is 36 mm wide; the other slots retain their positions."},{id:"ending-short",name:"End board · −258 mm",trim:"left",extraStartTrim:.018,description:"An end board shortened by 240 + 18 mm. It leaves room for the rib at the full end slot."}];var ye=i=>document.querySelector(i),Ln=i=>[...document.querySelectorAll(i)],vi=ye("#technology-viewport"),sr=ye(".viewport-loading"),qt="combstruct",Rt=In.find(i=>i.id==="podloga-strop"),Yo=wc[0],ti="house",Fn=0,tp=Vr(fh),zs={pitch:35,eave:!0,knee:!0},Dt,zt,Tt,Ui,Oe,vh=0,Mh,zn="factory",Dn=0,On=!matchMedia("(prefers-reduced-motion: reduce)").matches,Sh=!0,ni=0,wh=-1,yi=!0,qo=null,or=(...i)=>new D(...i);function en(){!vh&&Dt&&(vh=requestAnimationFrame(i=>{if(vh=0,qt==="robotics"&&On&&Sh&&!document.hidden){let e=ni?Math.min(.1,(i-ni)/1e3):0;Dn=Math.min(1,Dn+e/Xo[zn].duration),ni=i,Dn>=1&&(On=!1),Bs({dt:e})}else ni=0;Tt.update(),Dt.render(Ui,zt),qt==="robotics"&&On&&Sh&&!document.hidden&&en()}))}function np(i){let e=i.getCenter(or()),t=(Oe.direction||or(1.5,1.4,2)).clone().normalize(),n=or(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(Zn.degToRad(zt.fov/2)),o=s*zt.aspect,a=0;for(let l of[i.min.x,i.max.x])for(let c of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let f=or(l,c,d).sub(e);a=Math.max(a,Math.abs(f.dot(n))/o+f.dot(t),Math.abs(f.dot(r))/s+f.dot(t))}return{center:e,direction:t,distance:Math.max(.8,a*1.14*(Oe.distanceScale||1))}}function Eh(){return qt==="robotics"&&yi&&!!Oe?.getDetailFocus}function jo(){if(!Oe||!Dt||!vi.clientWidth||!vi.clientHeight)return;let i=Oe.focus||new kt().setFromObject(Oe.root),e=np(i),{center:t,direction:n,distance:r}=e,s=Tt.enableDamping;if(Tt.enableDamping=!1,Tt.update(),Tt.target.copy(t),zt.position.copy(t).addScaledVector(n,r),Tt.update(),qo=Eh()?e:null,!Oe.focus)for(let o=0;o<2;o++){let a=Math.tan(Zn.degToRad(zt.fov/2));Oe.root.updateMatrixWorld(!0),zt.updateMatrixWorld();let l=1/0,c=-1/0,d=1/0,f=-1/0,h=or();Oe.root.traverseVisible(S=>{if(!S.geometry?.attributes.position)return;let M=S.geometry.attributes.position;for(let v=0;v<M.count;v++)h.fromBufferAttribute(M,v).applyMatrix4(S.matrixWorld).project(zt),l=Math.min(l,h.x),c=Math.max(c,h.x),d=Math.min(d,h.y),f=Math.max(f,h.y)});let p=zt.position.distanceTo(Tt.target),g=or().setFromMatrixColumn(zt.matrixWorld,0),y=or().setFromMatrixColumn(zt.matrixWorld,1),m=g.multiplyScalar((l+c)/2*p*a*zt.aspect).add(y.multiplyScalar((d+f)/2*p*a));Tt.target.add(m),zt.position.add(m);let u=Math.max((c-l)/1.72,(f-d)/1.62);Number.isFinite(u)&&u>0&&zt.position.sub(Tt.target).multiplyScalar(u).add(Tt.target),Tt.update()}Tt.enableDamping=s,en()}function K_(i,e){if(!Eh()||(Oe.focus=Oe.getDetailFocus(),Oe.direction=Oe.detailDirection||Oe.direction,!qo||!vi.clientWidth||!vi.clientHeight))return;let t=np(Oe.focus),n=qo,r=e?1:1-Math.exp(-6*i);t.center.copy(n.center).lerp(Oe.focus.getCenter(or()),r),t.distance=Zn.lerp(n.distance,t.distance,r);let s=zt.position.clone().sub(Tt.target).multiplyScalar(t.distance/n.distance);Tt.target.add(t.center.clone().sub(n.center)),zt.position.copy(Tt.target).add(s),qo=t}function ip(){if(!Dt)return;let i=vi.clientWidth,e=vi.clientHeight;!i||!e||(Dt.setSize(i,e,!1),zt.aspect=i/e,zt.updateProjectionMatrix(),jo())}function Q_(i){ye("#element-id").textContent=i.id,ye("#element-type").textContent=i.type,ye("#element-surface").textContent=i.surface,ye("#element-length").textContent=i.length,ye("#element-metric-label").textContent=i.metricLabel||"Length in the model",ye("#element-detail-label").textContent=i.detailLabel||"Sheet thickness",ye("#element-thickness").textContent=i.detail||"18 mm"}function ar(){if(Dt)try{qo=null,Oe&&(Ui.remove(Oe.root),Gf(Oe.root),Oe.dispose?.()),Oe=qt==="combstruct"?Wf(Rt,Yo,zs):qt==="bim"?Xf(ti,Q_):qt==="robotics"?ep(zn):Mc(Fn,tp),Ui.background.set(Oe.background||"#f2f5f1"),vi.dataset.robotics=qt==="robotics"?zn:"",Ui.add(Oe.root),Oe.root.updateMatrixWorld(!0),ye("#scene-annotation").textContent=Oe.annotation||"",Oe.arrows&&(Oe.arrows.visible=ye("#arrows").checked),qt==="combstruct"&&Rt.crossing&&Oe.crossing?.(ye("#crossing").checked),qt==="combstruct"&&Rt.scene==="roof-wall"&&(Oe.spread?.(Number(ye("#spread").value)),Oe.insert?.(Number(ye("#roof-joint-insert").value))),qt==="bim"&&Oe.finish&&sp(),qt==="flow"&&Fn===3&&ap(),qt==="robotics"&&(Bs(),yi&&Oe.getDetailFocus&&(Oe.focus=Oe.getDetailFocus(),Oe.direction=Oe.detailDirection||Oe.direction)),sr.hidden=!0,ip(),en()}catch(i){console.error(i),sr.hidden=!1,sr.textContent="This view could not load. Refresh the page to try again.",sr.setAttribute("role","alert")}}function ex(){try{Ui=new so,Ui.background=new ot("#f2f5f1"),zt=new hn(36,1,.005,160),Dt=new dc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Dt.localClippingEnabled=!0,Dt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Dt.toneMapping=Co,Dt.toneMappingExposure=1.07,vi.prepend(Dt.domElement),Dt.domElement.tabIndex=0,Dt.domElement.setAttribute("aria-label","3D model. Drag to rotate; scroll to zoom. Home resets the view. In BIM, click a visible component to select it."),Tt=new pc(zt,Dt.domElement),Tt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,Tt.dampingFactor=.12,Tt.minDistance=.3,Tt.maxDistance=50,Tt.maxPolarAngle=Math.PI*.94,Tt.addEventListener("change",en),Tt.listenToKeyEvents(Dt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{Tt.enableDamping=!n.matches,en()}),Ui.add(new So("#ffffff","#b2b8aa",2.5));let i=new vs("#fff3df",2.6);i.position.set(3,7,5),Ui.add(i);let e=new vs("#d3e8ee",1.5);e.position.set(-4,3,-4),Ui.add(e),Mh=new Eo;let t;Dt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Dt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!Oe.selectAt)return;let r=Dt.domElement.getBoundingClientRect();Mh.setFromCamera(new me((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),zt),Oe.selectAt(Mh),en()}),Dt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),jo())}),Dt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),sr.hidden=!1,sr.textContent="The 3D preview was interrupted. Refresh the page to return to it."}),new ResizeObserver(ip).observe(vi),ar()}catch(i){console.error(i),sr.textContent="The 3D preview requires WebGL. You can read the system principles below the model.",sr.setAttribute("role","alert")}}function tx(){ye("#topic-title").textContent=Rt.title,ye("#topic-lead").textContent=Rt.lead,ye("#topic-text").textContent=Rt.text,ye("#topic-rule").textContent=Rt.rule;let i=In.indexOf(Rt);ye("#topic-counter").textContent=`${i+1} / ${In.length}`,ye("#topic-select").value=Rt.id,Ln("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===Rt.id))),ye("#spread-control").hidden=!Rt.spread,ye("#crossing-control").hidden=!Rt.crossing,ye("#arrows-control").hidden=!Rt.arrows,ye("#variant-control").hidden=!Rt.variants,ye("#roof-joint-controls").hidden=Rt.scene!=="roof-wall",ye("#roof-joint-insert").value=0,ye("#roof-joint-insert-value").textContent="0 mm",ye("#spread").value=0,ye("#crossing").checked=!!Rt.crossing,ye("#previous-topic").disabled=i===0,ye("#next-topic").disabled=i===In.length-1,ye("#variant-description").textContent=Yo.description}function Hr(i,{hash:e=!0}={}){qt=i,ni=0,ye(".technology-cta").hidden=["flow","robotics"].includes(i),Ln("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,ye("#"+n.getAttribute("aria-controls")).hidden=!r}),ye(`#${i==="combstruct"?"manual":i==="bim"?"bim":i==="robotics"?"robotics":"flow"}-mount`).append(vi),e&&history.pushState(null,"",`#${i==="combstruct"?Rt.id:i==="bim"&&ti==="wall"?"bim-sciana":i==="robotics"&&zn==="site"?"robotics-montaz":i}`),i==="combstruct"&&tx(),i==="flow"&&op(),i==="robotics"&&nx(),ar()}function Os(i,{hash:e=!0}={}){Rt=In.find(t=>t.id===i)||Rt,Hr("combstruct",{hash:e})}function Th(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(ti=i==="bim-sciana"?"wall":"house",rp(),Hr("bim",{hash:!1})):i==="robotics"||i==="robotics-montaz"?(zn=i==="robotics-montaz"?"site":"factory",Hr("robotics",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),Hr("flow",{hash:!1})):Os(i,{hash:!1})}for(let i of[...new Set(In.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of In.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>Os(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}ye("#topic-buttons").append(e),ye("#topic-select").append(n)}for(let i of wc)ye("#variant-select").append(new Option(i.name,i.id));ye("#topic-select").addEventListener("change",i=>Os(i.target.value));ye("#variant-select").addEventListener("change",i=>{Yo=wc.find(e=>e.id===i.target.value),ye("#variant-description").textContent=Yo.description,ar()});ye("#roof-joint-variant").addEventListener("change",i=>{let[e,t]=i.target.value.split("-").map(Number);zs={...zs,eave:!!e,knee:!!t},ar()});ye("#roof-joint-pitch").addEventListener("input",i=>{zs.pitch=Number(i.target.value),ye("#roof-joint-pitch-value").textContent=zs.pitch+"\xB0",ar()});ye("#roof-joint-insert").addEventListener("input",i=>{let e=Number(i.target.value);ye("#roof-joint-insert-value").textContent=e+" mm",ye("#spread").value=0,Oe?.spread?.(0),ye("#crossing").checked=!0,Oe?.crossing?.(!0),Oe?.insert?.(e),en()});Ln("[data-technology]").forEach(i=>i.addEventListener("click",()=>Hr(i.dataset.technology)));ye(".technology-tabs").addEventListener("keydown",i=>{let e=Ln("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});ye("#previous-topic").addEventListener("click",()=>Os(In[In.indexOf(Rt)-1]?.id));ye("#next-topic").addEventListener("click",()=>Os(In[In.indexOf(Rt)+1]?.id));ye("#spread").addEventListener("input",i=>{Oe?.spread?.(Number(i.target.value)),ye("#crossing").checked=!1,Oe?.crossing?.(!1),en()});ye("#crossing").addEventListener("change",i=>{i.target.checked&&(ye("#spread").value=0,Oe?.spread?.(0)),Oe?.crossing?.(i.target.checked),en()});ye("#arrows").addEventListener("change",i=>{Oe?.arrows&&(Oe.arrows.visible=i.target.checked),en()});Ln("[data-reset-view]").forEach(i=>i.addEventListener("click",jo));function rp(){Ln("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===ti))),ye("#finish-control").hidden=ti!=="wall",ye("#wall-guide").hidden=ti!=="wall",ye(".selection-hint").textContent=ti==="wall"?"Reveal the wall and select a visible component":"Select a board in the model",ye("#passport-title").innerHTML=ti==="wall"?"See what is inside<br>your wall.":"Every component<br>has its place."}function sp(){let i=ye("#finish"),e=Number(i.value);Oe?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"Finished wall":`Revealed: ${Math.round(e*100)}% of the wall`),ye("#scene-annotation").textContent=e>.01?"Click a rib, insulation block, pipe or cable":"Use the slider to reveal the wall",en()}Ln("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{ti=i.dataset.bimView,rp(),history.pushState(null,"",ti==="wall"?"#bim-sciana":"#bim"),ar()}));ye("#finish").addEventListener("input",sp);ye("#next-element").addEventListener("click",()=>{Oe?.next?.(),en()});function op(){let i=ph[Fn];ye("#flow-title").textContent=i.title,ye("#flow-text").textContent=i.text,ye("#flow-output-label").textContent=i.label,ye("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),Ln("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===Fn))),ye("#assembly-control").hidden=Fn!==3,ye("#flow-next").textContent=["See the Combstruct model \u2192","Go to manufacturing →","See the assembly →","Back to floor plans ↺"][Fn],ye(".flow-layout").dataset.stage=Fn,ye("#production-catalog").hidden=Fn!==2}function ap(){let i=Number(ye("#assembly").value);Oe?.assembly?.(i),ye("#assembly-progress").textContent=`${Math.round(i*100)}%`,en()}function lp(i){Fn=i,op(),ar()}Ln("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>lp(Number(i.dataset.flowStage))));ye("#flow-next").addEventListener("click",()=>lp((Fn+1)%ph.length));ye("#assembly").addEventListener("input",ap);jf(ye("#production-catalog"),fh,(i,e)=>{tp=i,qt==="flow"&&Fn===2&&ar(),e&&Yf(ye("#flow-mount"))});var Fs=ye(".menu-toggle"),Ec=ye("#mobile-menu");function nx(){wh=-1,ye("#robotics-detail").hidden=zn!=="factory",ye("#robotics-detail").setAttribute("aria-pressed",String(yi)),ye("#robotics-detail").textContent=yi?"Full line view":"Operation close-up",Ln("[data-robotics-process]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.roboticsProcess===zn)));let i=ye("#robotics-steps");i.dataset.process=zn,i.replaceChildren(...Xo[zn].steps.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.textContent=e.label,n.dataset.roboticsStep=t,n.setAttribute("aria-pressed","false"),n.onclick=()=>Ah(e.at+.001),n})),ye("#robotics-note").textContent=zn==="factory"?"Concept animation of the production line.":"Selected operations from the Combstruct 30 model. Stage transitions skip some repeated cycles. A robot motion concept, not a validated assembly program."}function Bs({dt:i=0,snapCamera:e=!1}={}){Oe?.update?.(Dn);let t=Xo[zn],n=t.steps.findLastIndex(s=>Dn>=s.at);n!==wh&&(wh=n,ye("#robotics-title").textContent=t.steps[n].title,ye("#robotics-text").textContent=t.steps[n].text,Ln("[data-robotics-step]").forEach(s=>s.setAttribute("aria-pressed",String(Number(s.dataset.roboticsStep)===n)))),K_(i,e),ye("#robotics-seek").value=Dn;let r=Math.floor(Dn*t.duration);ye("#robotics-time").textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,ye("#robotics-play").textContent=On?"Pause":Dn===1?"Replay":"Play",ye("#robotics-play").setAttribute("aria-pressed",String(On))}function Ah(i){Dn=Math.min(1,Math.max(0,i)),On=!1,ni=0,Bs({snapCamera:!0}),en()}Ln("[data-robotics-process]").forEach(i=>i.addEventListener("click",()=>{zn=i.dataset.roboticsProcess,Dn=0,On=!matchMedia("(prefers-reduced-motion: reduce)").matches,Hr("robotics")}));ye("#robotics-play").addEventListener("click",()=>{let i=Dn===1;i&&(Dn=0),On=!On,ni=0,Bs({snapCamera:i}),en()});ye("#robotics-replay").addEventListener("click",()=>{Dn=0,On=!matchMedia("(prefers-reduced-motion: reduce)").matches,ni=0,Bs({snapCamera:!0}),en()});ye("#robotics-seek").addEventListener("input",i=>Ah(Number(i.target.value)));ye("#robotics-detail").addEventListener("click",()=>{yi=!yi,ye("#robotics-detail").setAttribute("aria-pressed",String(yi)),ye("#robotics-detail").textContent=yi?"Full line view":"Operation close-up",Oe.focus=yi?Oe.getDetailFocus():Oe.overview,Oe.direction=yi?Oe.detailDirection:Oe.overviewDirection,jo()});new IntersectionObserver(i=>{Sh=i[0].isIntersecting,ni=0,en()},{threshold:.05}).observe(ye("#robotics-mount"));document.addEventListener("visibilitychange",()=>{ni=0,en()});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{i.matches&&(On=!1,ni=0,qt==="robotics"&&Bs())});function Rh(){Ec.hidden=!0,Fs.setAttribute("aria-expanded","false"),Fs.setAttribute("aria-label","Open menu")}Fs.addEventListener("click",()=>{let i=Ec.hidden;Ec.hidden=!i,Fs.setAttribute("aria-expanded",String(i)),Fs.setAttribute("aria-label",i?"Close menu":"Open menu")});Ln("#mobile-menu a").forEach(i=>i.addEventListener("click",Rh));document.addEventListener("click",i=>{i.target.closest(".site-header")||Rh()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!Ec.hidden&&(Rh(),Fs.focus())});addEventListener("popstate",Th);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==qt&&i!==Rt.id&&Th()});window.combstructTechnology={getState:()=>({ready:!!Dt,technology:qt,topic:Rt.id,variant:Yo.id,bimView:ti,flowStage:Fn,roofJoint:qt==="combstruct"&&Rt.scene==="roof-wall"?{...zs,slabBeveled:!1,boards:Oe?.roofJoint?.boards.length}:null,robotics:qt==="robotics"?{...Oe?.getRoboticsState?.(),playing:On,camera:{following:Eh(),position:zt?.position.toArray(),target:Tt?.target.toArray()}}:null,manufacturing:Oe?.getManufacturingState?.(),selected:Oe?.getSelected?.(),wall:Oe?.getWallState?.(),meshCount:Oe?.root.children.length,drawCalls:Dt?.info.render.calls}),topics:In.map(i=>i.id),showTopic:Os,showTechnology:Hr,seekRobotics:Ah,reset:jo};Th();ex();})();
