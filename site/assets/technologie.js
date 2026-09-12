"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_h=0,Lc=1,xh=2;var io=1,yh=2,es=3,pi=0,fn=1,en=2,ii=0,Ki=1,Nc=2,Uc=3,Fc=4,vh=5;var Ai=100,Mh=101,Sh=102,wh=103,Eh=104,Th=200,Ah=201,Rh=202,Ch=203,na=204,ia=205,Ph=206,Ih=207,Dh=208,Lh=209,Nh=210,Uh=211,Fh=212,Oh=213,zh=214,ra=0,sa=1,oa=2,Qi=3,aa=4,la=5,ca=6,da=7,Oc=0,Bh=1,kh=2,Bn=0,zc=1,Bc=2,kc=3,ro=4,Vc=5,Hc=6,Gc=7;var Wc=300,Oi=301,lr=302,Ha=303,Ga=304,so=306,ha=1e3,Jn=1001,ua=1002,Jt=1003,Vh=1004;var oo=1005;var Qt=1006,Wa=1007;var zi=1008;var mn=1009,Xc=1010,qc=1011,ts=1012,Xa=1013,kn=1014,Vn=1015,ri=1016,qa=1017,Ya=1018,ns=1020,Yc=35902,jc=35899,Zc=1021,Jc=1022,Pn=1023,Kn=1026,Bi=1027,$c=1028,ja=1029,cr=1030,Za=1031;var Ja=1033,ao=33776,lo=33777,co=33778,ho=33779,$a=35840,Ka=35841,Qa=35842,el=35843,tl=36196,nl=37492,il=37496,rl=37488,sl=37489,ol=37490,al=37491,ll=37808,cl=37809,dl=37810,hl=37811,ul=37812,fl=37813,pl=37814,ml=37815,gl=37816,bl=37817,_l=37818,xl=37819,yl=37820,vl=37821,Ml=36492,Sl=36494,wl=36495,El=36283,Tl=36284,Al=36285,Rl=36286;var As=2300,fa=2301,ta=2302,vc=2303,Mc=2400,Sc=2401,wc=2402;var Hh=3200;var Kc=0,Gh=1,gi="",Zt="srgb",er="srgb-linear",Rs="linear",_t="srgb";var Ji=7680;var Ec=519,Wh=512,Xh=513,qh=514,Cl=515,Yh=516,jh=517,Pl=518,Zh=519,pa=35044;var Qc="300 es",On=2e3,Br=2001;function u0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function f0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jh(){let i=Cs("canvas");return i.style.display="block",i}var Bd={},kr=null;function Ps(...i){let e="THREE."+i.shift();kr?kr("log",e,...i):console.log(e,...i)}function $h(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=$h(i);let e="THREE."+i.shift();if(kr)kr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=$h(i);let e="THREE."+i.shift();if(kr)kr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){let e=i.join(" ");e in Bd||(Bd[e]=!0,Ye(...i))}function Kh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Qh={[ra]:sa,[oa]:ca,[aa]:da,[Qi]:la,[sa]:ra,[ca]:oa,[da]:aa,[la]:Qi},Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,Or=Math.PI/180,Vr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function ed(i,e){return(i%e+e)%e}function p0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function m0(i,e,t){return i!==e?(t-i)/(e-i):0}function ws(i,e,t){return(1-t)*i+t*e}function g0(i,e,t,n){return ws(i,e,1-Math.exp(-t*n))}function b0(i,e=1){return e-Math.abs(ed(i,e*2)-e)}function _0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function x0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function y0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function v0(i,e){return i+Math.random()*(e-i)}function M0(i){return i*(.5-Math.random())}function S0(i){i!==void 0&&(kd=i);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(i){return i*Or}function E0(i){return i*Vr}function T0(i){return(i&i-1)===0&&i!==0}function A0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function R0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function C0(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*d,c*u,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*u,a*l);break;case"ZXZ":i.set(c*u,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*d,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*d,a*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dr={DEG2RAD:Or,RAD2DEG:Vr,generateUUID:$n,clamp:it,euclideanModulo:ed,mapLinear:p0,inverseLerp:m0,lerp:ws,damp:g0,pingpong:b0,smoothstep:_0,smootherstep:x0,randInt:y0,randFloat:v0,randFloatSpread:M0,seededRandom:S0,degToRad:w0,radToDeg:E0,isPowerOfTwo:T0,ceilPowerOfTwo:A0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:C0,normalize:yt,denormalize:Fn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(u!==_||c!==h||l!==f||d!==m){let g=c*h+l*f+d*m+u*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let w=Math.acos(g),S=Math.sin(w);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S,c=c*p+h*a,l=l*p+f*a,d=d*p+m*a,u=u*p+_*a}else{c=c*p+h*a,l=l*p+f*a,d=d*p+m*a,u=u*p+_*a;let w=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=w,l*=w,d*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+d*u+c*f-l*h,e[t+1]=c*m+d*h+l*u-a*f,e[t+2]=l*m+d*f+a*h-c*u,e[t+3]=d*m-a*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),u=a(s/2),h=c(n/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"YZX":this._x=h*d*u+l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u-h*f*m;break;case"XZY":this._x=h*d*u-l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u+h*f*m;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*d,this.y=n+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new P,Vd=new vn,et=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],m=n[8],_=r[0],g=r[3],p=r[6],w=r[1],S=r[4],v=r[7],C=r[2],A=r[5],D=r[8];return s[0]=o*_+a*w+c*C,s[3]=o*g+a*S+c*A,s[6]=o*p+a*v+c*D,s[1]=l*_+d*w+u*C,s[4]=l*g+d*S+u*A,s[7]=l*p+d*v+u*D,s[2]=h*_+f*w+m*C,s[5]=h*g+f*S+m*A,s[8]=h*p+f*v+m*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,m=t*u+n*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(r*l-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new et,Hd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P0(){let i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:n,transfer:Rs,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Hd,fromXYZ:Gd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var ht=P0();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vr,ma=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=Cs("canvas")),vr.width=e.width,vr.height=e.height;let r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I0=0,Hr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jl(r[o].image)):s.push(jl(r[o]))}else s=jl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var D0=0,Zl=new P,hn=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Jn,r=Jn,s=Qt,o=zi,a=Pn,c=mn,l=i.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=$n(),this.name="",this.source=new Hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Wc;hn.DEFAULT_ANISOTROPY=1;var It=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(f+1)/2,C=(p+1)/2,A=(d+h)/4,D=(u+_)/4,x=(m+g)/4;return S>v&&S>C?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=D/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=D/s,r=x/s),this.set(n,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-_)/w,this.z=(h-d)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ga=class extends Qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Hr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ds=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class i{constructor(e,t,n,r,s,o,a,c,l,d,u,h,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,d,u,h,f,m,_,g)}set(e,t,n,r,s,o,a,c,l,d,u,h,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=m*l-f,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=f*u+m,t[10]=h-_*u}else if(e.order==="XZY"){let h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,N0)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),vi.crossVectors(n,xn),vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),vi.crossVectors(n,xn)),vi.normalize(),So.crossVectors(xn,vi),r[0]=vi.x,r[4]=So.x,r[8]=xn.x,r[1]=vi.y,r[5]=So.y,r[9]=xn.y,r[2]=vi.z,r[6]=So.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],w=n[3],S=n[7],v=n[11],C=n[15],A=r[0],D=r[4],x=r[8],y=r[12],U=r[1],R=r[5],N=r[9],z=r[13],H=r[2],W=r[6],k=r[10],X=r[14],ie=r[3],he=r[7],Se=r[11],Me=r[15];return s[0]=o*A+a*U+c*H+l*ie,s[4]=o*D+a*R+c*W+l*he,s[8]=o*x+a*N+c*k+l*Se,s[12]=o*y+a*z+c*X+l*Me,s[1]=d*A+u*U+h*H+f*ie,s[5]=d*D+u*R+h*W+f*he,s[9]=d*x+u*N+h*k+f*Se,s[13]=d*y+u*z+h*X+f*Me,s[2]=m*A+_*U+g*H+p*ie,s[6]=m*D+_*R+g*W+p*he,s[10]=m*x+_*N+g*k+p*Se,s[14]=m*y+_*z+g*X+p*Me,s[3]=w*A+S*U+v*H+C*ie,s[7]=w*D+S*R+v*W+C*he,s[11]=w*x+S*N+v*k+C*Se,s[15]=w*y+S*z+v*X+C*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],w=c*f-l*h,S=a*f-l*u,v=a*h-c*u,C=o*f-l*d,A=o*h-c*d,D=o*u-a*d;return t*(_*w-g*S+p*v)-n*(m*w-g*C+p*A)+r*(m*S-_*C+p*D)-s*(m*v-_*A+g*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=t*a-n*o,S=t*c-r*o,v=t*l-s*o,C=n*c-r*a,A=n*l-s*a,D=r*l-s*c,x=d*_-u*m,y=d*g-h*m,U=d*p-f*m,R=u*g-h*_,N=u*p-f*_,z=h*p-f*g,H=w*z-S*N+v*R+C*U-A*y+D*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/H;return e[0]=(a*z-c*N+l*R)*W,e[1]=(r*N-n*z-s*R)*W,e[2]=(_*D-g*A+p*C)*W,e[3]=(h*A-u*D-f*C)*W,e[4]=(c*U-o*z-l*y)*W,e[5]=(t*z-r*U+s*y)*W,e[6]=(g*v-m*D-p*S)*W,e[7]=(d*D-h*v+f*S)*W,e[8]=(o*N-a*U+l*x)*W,e[9]=(n*U-t*N-s*x)*W,e[10]=(m*A-_*v+p*w)*W,e[11]=(u*v-d*A-f*w)*W,e[12]=(a*y-o*R-c*x)*W,e[13]=(t*R-n*y+r*x)*W,e[14]=(_*S-m*C-g*w)*W,e[15]=(d*C-u*S+h*w)*W,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,m=s*u,_=o*d,g=o*u,p=a*u,w=c*l,S=c*d,v=c*u,C=n.x,A=n.y,D=n.z;return r[0]=(1-(_+p))*C,r[1]=(f+v)*C,r[2]=(m-S)*C,r[3]=0,r[4]=(f-v)*A,r[5]=(1-(h+p))*A,r[6]=(g+w)*A,r[7]=0,r[8]=(m+S)*D,r[9]=(g-w)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Mr.set(r[0],r[1],r[2]).length(),a=Mr.set(r[4],r[5],r[6]).length(),c=Mr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ln.copy(this);let l=1/o,d=1/a,u=1/c;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=On,c=!1){let l=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===On)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Br)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=On,c=!1){let l=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===On)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Br)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new P,Ln=new ft,L0=new P(0,0,0),N0=new P(1,1,1),vi=new P,So=new P,xn=new P,Wd=new ft,Xd=new vn,zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},U0=0,qd=new P,Sr=new vn,li=new ft,wo=new P,ms=new P,F0=new P,O0=new vn,Yd=new P(1,0,0),jd=new P(0,1,0),Zd=new P(0,0,1),Jd={type:"added"},z0={type:"removed"},wr={type:"childadded",child:null},Jl={type:"childremoved",child:null},Vt=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new zn,n=new vn,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new et}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(ms,wo,this.up):li.lookAt(wo,ms,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(li),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),wr.child=e,this.dispatchEvent(wr),wr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Vt.DEFAULT_UP=new P(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},B0={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function $l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=ed(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$l(o,s,e+1/3),this.g=$l(o,s,e),this.b=$l(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return ht.workingToColorSpace(on.copy(this),e),Math.round(it(on.r*255,0,255))*65536+Math.round(it(on.g*255,0,255))*256+Math.round(it(on.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(on.copy(this),t);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Zt){ht.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,r=on.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Eo);let n=ws(Mi.h,Eo.h,t),r=ws(Mi.s,Eo.s,t),s=ws(Mi.l,Eo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ot;ot.NAMES=eu;var Ls=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new P,ci=new P,Kl=new P,di=new P,Er=new P,Tr=new P,$d=new P,Ql=new P,ec=new P,tc=new P,nc=new It,ic=new It,rc=new It,Zn=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Nn.subVectors(r,t),ci.subVectors(n,t),Kl.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(ci),c=Nn.dot(Kl),l=ci.dot(ci),d=ci.dot(Kl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,f=(l*c-a*d)*h,m=(o*d-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nc,s.x),o.addScaledVector(ic,s.y),o.addScaledVector(rc,s.z),o}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Er.subVectors(r,n),Tr.subVectors(s,n),Ql.subVectors(e,n);let c=Er.dot(Ql),l=Tr.dot(Ql);if(c<=0&&l<=0)return t.copy(n);ec.subVectors(e,r);let d=Er.dot(ec),u=Tr.dot(ec);if(d>=0&&u<=d)return t.copy(r);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Er,o);tc.subVectors(e,s);let f=Er.dot(tc),m=Tr.dot(tc);if(m>=0&&f<=m)return t.copy(s);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Tr,a);let g=d*m-f*u;if(g<=0&&u-d>=0&&f-m>=0)return $d.subVectors(s,r),a=(u-d)/(u-d+(f-m)),t.copy(r).addScaledVector($d,a);let p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),To.copy(n.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ao.subVectors(this.max,gs),Ar.subVectors(e.a,gs),Rr.subVectors(e.b,gs),Cr.subVectors(e.c,gs),Si.subVectors(Rr,Ar),wi.subVectors(Cr,Rr),qi.subVectors(Ar,Cr);let t=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-qi.z,qi.y,Si.z,0,-Si.x,wi.z,0,-wi.x,qi.z,0,-qi.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-qi.y,qi.x,0];return!sc(t,Ar,Rr,Cr,Ao)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Ar,Rr,Cr,Ao))?!1:(Ro.crossVectors(Si,wi),t=[Ro.x,Ro.y,Ro.z],sc(t,Ar,Rr,Cr,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,To=new ln,Ar=new P,Rr=new P,Cr=new P,Si=new P,wi=new P,qi=new P,gs=new P,Ao=new P,Ro=new P,Yi=new P;function sc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Yi.fromArray(i,s);let a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),d=n.dot(Yi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var kt=new P,Co=new ce,k0=0,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pa&&(e.usage=this.usage),e}};var Ns=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Us=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},V0=new ln,bs=new P,oc=new P,tr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):V0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(oc)),this.expandByPoint(bs.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},H0=0,Rn=new ft,ac=new Vt,Pr=new P,yn=new ln,_s=new ln,jt=new P,vt=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u0(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(yn.min,_s.min),yn.expandByPoint(jt),jt.addVectors(yn.max,_s.max),yn.expandByPoint(jt)):(yn.expandByPoint(_s.min),yn.expandByPoint(_s.max))}yn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)jt.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),jt.add(Pr)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new P,c[x]=new P;let l=new P,d=new P,u=new P,h=new ce,f=new ce,m=new ce,_=new P,g=new P;function p(x,y,U){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,U),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,U),d.sub(l),u.sub(l),f.sub(h),m.sub(h);let R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(R),a[x].add(_),a[y].add(_),a[U].add(_),c[x].add(g),c[y].add(g),c[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,y=w.length;x<y;++x){let U=w[x],R=U.start,N=U.count;for(let z=R,H=R+N;z<H;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let S=new P,v=new P,C=new P,A=new P;function D(x){C.fromBufferAttribute(r,x),A.copy(C);let y=a[x];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(A,y);let R=v.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,y=w.length;x<y;++x){let U=w[x],R=U.start,N=U.count;for(let z=R,H=R+N;z<H;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,d=new P,u=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d),f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)h[m++]=l[f++]}return new Kt(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){let h=l[d],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){let f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new P,Xr=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},G0=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ki,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qr=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir,xs=new P,Dr=new P,Lr=new P,Nr=new ce,ys=new ce,tu=new ft,Po=new P,vs=new P,Io=new P,Kd=new ce,lc=new ce,Qd=new ce,Os=class extends Vt{constructor(e=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new Xr(n,3,0,!1)),Ir.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Dr.setFromMatrixScale(this.matrixWorld),tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Lr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Do(Po.set(-.5,-.5,0),Lr,o,Dr,r,s),Do(vs.set(.5,-.5,0),Lr,o,Dr,r,s),Do(Io.set(.5,.5,0),Lr,o,Dr,r,s),Kd.set(0,0),lc.set(1,0),Qd.set(1,1);let a=e.ray.intersectTriangle(Po,vs,Io,!1,xs);if(a===null&&(Do(vs.set(-.5,.5,0),Lr,o,Dr,r,s),lc.set(0,1),a=e.ray.intersectTriangle(Po,Io,vs,!1,xs),a===null))return;let c=e.ray.origin.distanceTo(xs);c<e.near||c>e.far||t.push({distance:c,point:xs.clone(),uv:Zn.getInterpolation(xs,Po,vs,Io,Kd,lc,Qd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Do(i,e,t,n,r,s){Nr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ys.x=s*Nr.x-r*Nr.y,ys.y=r*Nr.x+s*Nr.y):ys.copy(Nr),i.copy(e),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(tu)}var ui=new P,cc=new P,Lo=new P,Ei=new P,dc=new P,No=new P,hc=new P,Ri=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cc.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(cc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ei.dot(this.direction),c=-Ei.dot(Lo),l=Ei.lengthSq(),d=Math.abs(1-o*o),u,h,f,m;if(d>0)if(u=o*c-a,h=o*a-c,m=s*d,u>=0)if(h>=-m)if(h<=m){let _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(cc).addScaledVector(Lo,h),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),r=ui.dot(ui)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,r,s){dc.subVectors(t,e),No.subVectors(n,e),hc.crossVectors(dc,No);let o=this.direction.dot(hc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);let c=a*this.direction.dot(No.crossVectors(Ei,No));if(c<0)return null;let l=a*this.direction.dot(dc.cross(Ei));if(l<0||c+l>o)return null;let d=-a*Ei.dot(hc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ci=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},eh=new ft,ji=new Ri,Uo=new tr,th=new P,Fo=new P,Oo=new P,zo=new P,uc=new P,Bo=new P,nh=new P,ko=new P,gt=class extends Vt{constructor(e=new vt,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],u=s[c];d!==0&&(uc.fromBufferAttribute(u,e),o?Bo.addScaledVector(uc,d):Bo.addScaledVector(uc.sub(t),d))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Uo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Uo,th)===null||ji.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(s).invert(),ji.copy(e.ray).applyMatrix4(eh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,C=S;v<C;v+=3){let A=a.getX(v),D=a.getX(v+1),x=a.getX(v+2);r=Vo(this,p,e,n,l,d,u,A,D,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let w=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);r=Vo(this,o,e,n,l,d,u,w,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,C=S;v<C;v+=3){let A=v,D=v+1,x=v+2;r=Vo(this,p,e,n,l,d,u,A,D,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let w=g,S=g+1,v=g+2;r=Vo(this,o,e,n,l,d,u,w,S,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function W0(i,e,t,n,r,s,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===pi,a),c===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ko);return l<t.near||l>t.far?null:{distance:l,point:ko.clone(),object:i}}function Vo(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Fo),i.getVertexPosition(c,Oo),i.getVertexPosition(l,zo);let d=W0(i,e,t,n,Fo,Oo,zo,nh);if(d){let u=new P;Zn.getBarycoord(nh,Fo,Oo,zo,u),r&&(d.uv=Zn.getInterpolatedAttribute(r,a,c,l,u,new ce)),s&&(d.uv1=Zn.getInterpolatedAttribute(s,a,c,l,u,new ce)),o&&(d.normal=Zn.getInterpolatedAttribute(o,a,c,l,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new P,materialIndex:0};Zn.getNormal(Fo,Oo,zo,h.normal),d.face=h,d.barycoord=u}return d}var _a=class extends hn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Jt,d=Jt,u,h){super(null,o,a,c,l,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fc=new P,X0=new P,q0=new et,pn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=fc.subVectors(n,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||q0.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new tr,Y0=new ce(.5,.5),Ho=new P,Yr=class{constructor(e=new pn,t=new pn,n=new pn,r=new pn,s=new pn,o=new pn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],w=s[12],S=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-o,f-d,p-m,C-w).normalize(),r[1].setComponents(l+o,f+d,p+m,C+w).normalize(),r[2].setComponents(l+a,f+u,p+_,C+S).normalize(),r[3].setComponents(l-a,f-u,p-_,C-S).normalize(),n)r[4].setComponents(c,h,g,v).normalize(),r[5].setComponents(l-c,f-h,p-g,C-v).normalize();else if(r[4].setComponents(l-c,f-h,p-g,C-v).normalize(),t===On)r[5].setComponents(l+c,f+h,p+g,C+v).normalize();else if(t===Br)r[5].setComponents(c,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=Y0.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var un=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xa=new P,ya=new P,ih=new ft,Ms=new Ri,Go=new tr,pc=new P,rh=new P,nr=class extends Vt{constructor(e=new vt,t=new un){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)xa.fromBufferAttribute(t,r-1),ya.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=xa.distanceTo(ya);e.setAttribute("lineDistance",new pt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;ih.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(ih);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=d.getX(_),w=d.getX(_+1),S=Wo(this,e,Ms,c,p,w,_);S&&t.push(S)}if(this.isLineLoop){let _=d.getX(m-1),g=d.getX(f),p=Wo(this,e,Ms,c,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){let p=Wo(this,e,Ms,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Wo(this,e,Ms,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(xa.fromBufferAttribute(a,r),ya.fromBufferAttribute(a,s),t.distanceSqToSegment(xa,ya,pc,rh)>n)return;pc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pc);if(!(l<e.near||l>e.far))return{distance:l,point:rh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var sh=new P,oh=new P,Sn=class extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)sh.fromBufferAttribute(t,r),oh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+sh.distanceTo(oh);e.setAttribute("lineDistance",new pt(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zs=class extends hn{constructor(e=[],t=Oi,n,r,s,o,a,c,l,d){super(e,t,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends hn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends hn{constructor(e,t,n=kn,r,s,o,a=Jt,c=Jt,l,d=Kn,u=1){if(d!==Kn&&d!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},va=class extends Ii{constructor(e,t=kn,n=Oi,r,s,o=Jt,a=Jt,c,l=Kn){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bs=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ti=class i extends vt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],u=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(u,2));function m(_,g,p,w,S,v,C,A,D,x,y){let U=v/D,R=C/x,N=v/2,z=C/2,H=A/2,W=D+1,k=x+1,X=0,ie=0,he=new P;for(let Se=0;Se<k;Se++){let Me=Se*R-z;for(let Ee=0;Ee<W;Ee++){let We=Ee*U-N;he[_]=We*w,he[g]=Me*S,he[p]=H,l.push(he.x,he.y,he.z),he[_]=0,he[g]=0,he[p]=A>0?1:-1,d.push(he.x,he.y,he.z),u.push(Ee/D),u.push(1-Se/x),X+=1}}for(let Se=0;Se<x;Se++)for(let Me=0;Me<D;Me++){let Ee=h+Me+W*Se,We=h+Me+W*(Se+1),Ke=h+(Me+1)+W*(Se+1),at=h+(Me+1)+W*Se;c.push(Ee,We,at),c.push(We,Ke,at),ie+=6}a.addGroup(f,ie,y),f+=ie,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ir=class i extends vt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],f=[],m=0,_=[],g=n/2,p=0;w(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function w(){let v=new P,C=new P,A=0,D=(t-e)/n;for(let x=0;x<=s;x++){let y=[],U=x/s,R=U*(t-e)+e;for(let N=0;N<=r;N++){let z=N/r,H=z*c+a,W=Math.sin(H),k=Math.cos(H);C.x=R*W,C.y=-U*n+g,C.z=R*k,u.push(C.x,C.y,C.z),v.set(W,D,k).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-U),y.push(m++)}_.push(y)}for(let x=0;x<r;x++)for(let y=0;y<s;y++){let U=_[y][x],R=_[y+1][x],N=_[y+1][x+1],z=_[y][x+1];(e>0||y!==0)&&(d.push(U,R,z),A+=3),(t>0||y!==s-1)&&(d.push(R,N,z),A+=3)}l.addGroup(p,A,0),p+=A}function S(v){let C=m,A=new ce,D=new P,x=0,y=v===!0?e:t,U=v===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,g*U,0),h.push(0,U,0),f.push(.5,.5),m++;let R=m;for(let N=0;N<=r;N++){let H=N/r*c+a,W=Math.cos(H),k=Math.sin(H);D.x=y*k,D.y=g*U,D.z=y*W,u.push(D.x,D.y,D.z),h.push(0,U,0),A.x=W*.5+.5,A.y=k*.5*U+.5,f.push(A.x,A.y),m++}for(let N=0;N<r;N++){let z=C+N,H=R+N;v===!0?d.push(H,H+1,z):d.push(H+1,H,z),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class i extends ir{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xo=new P,qo=new P,mc=new P,Yo=new Zn,Cn=class extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Or*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:g,c:p}=Yo;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Yo.getNormal(mc),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){let S=(w+1)%3,v=u[w],C=u[S],A=Yo[d[w]],D=Yo[d[S]],x=`${v}_${C}`,y=`${C}_${v}`;y in h&&h[y]?(mc.dot(h[y].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(D.x,D.y,D.z)),h[y]=null):x in h||(h[x]={index0:l[w],index1:l[S],normal:mc.clone()})}}for(let m in h)if(h[m]){let{index0:_,index1:g}=h[m];Xo.fromBufferAttribute(a,_),qo.fromBufferAttribute(a,g),f.push(Xo.x,Xo.y,Xo.z),f.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new pt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ce:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,r=[],s=[],o=[],a=new P,c=new ft;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=l&&(l=d,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(it(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(it(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends wn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends jr{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function td(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,u){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+u)+(c-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var jo=new P,gc=new td,bc=new td,_c=new td,wa=class extends wn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(jo.subVectors(r[0],r[1]).add(r[0]),l=jo);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(jo.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=jo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),gc.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,m,_,g),bc.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,m,_,g),_c.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),bc.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),_c.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return n.set(gc.calc(c),bc.calc(c),_c.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ah(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function j0(i,e){let t=1-i;return t*t*e}function Z0(i,e){return 2*(1-i)*i*e}function J0(i,e){return i*i*e}function Es(i,e,t,n){return j0(i,e)+Z0(i,t)+J0(i,n)}function $0(i,e){let t=1-i;return t*t*t*e}function K0(i,e){let t=1-i;return 3*t*t*i*e}function Q0(i,e){return 3*(1-i)*i*i*e}function ef(i,e){return i*i*i*e}function Ts(i,e,t,n,r){return $0(i,e)+K0(i,t)+Q0(i,n)+ef(i,r)}var ks=class extends wn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ts(e,r.x,s.x,o.x,a.x),Ts(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends wn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ts(e,r.x,s.x,o.x,a.x),Ts(e,r.y,s.y,o.y,a.y),Ts(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vs=class extends wn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends wn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends wn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(e,r.x,s.x,o.x),Es(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sr=class extends wn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(e,r.x,s.x,o.x),Es(e,r.y,s.y,o.y),Es(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(ah(a,c.x,l.x,d.x,u.x),ah(a,c.y,l.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ce().fromArray(r))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:wa,CubicBezierCurve:ks,CubicBezierCurve3:Ea,EllipseCurve:jr,LineCurve:Vs,LineCurve3:rr,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:sr,SplineCurve:Gs}),Zr=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ta[r.type]().fromJSON(r))}return this}},or=class extends Zr{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vs(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Hs(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new ks(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new jr(e,t,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ni=class extends or{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new or().fromJSON(r))}return this}};function tf(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=nu(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=af(i,e,s,t)),i.length>80*t){a=i[0],c=i[1];let d=a,u=c;for(let h=t;h<r;h+=t){let f=i[h],m=i[h+1];f<a&&(a=f),m<c&&(c=m),f>d&&(d=f),m>u&&(u=m)}l=Math.max(d-a,u-c),l=l!==0?32767/l:0}return Ws(s,o,t,a,c,l,0),o}function nu(i,e,t,n,r){let s;if(r===_f(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=lh(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=lh(o/n|0,i[o],i[o+1],s);return s&&Jr(s,s.next)&&(qs(s),s=s.next),s}function ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Jr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ws(i,e,t,n,r,s,o){if(!i)return;!o&&s&&uf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?rf(i,n,r,s):nf(i)){e.push(c.i,i.i,l.i),qs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=sf(ar(i),e),Ws(i,e,t,n,r,s,2)):o===2&&of(i,e,t,n,r,s):Ws(ar(i),e,t,n,r,s,1);break}}}function nf(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,d=Math.min(r,s,o),u=Math.min(a,c,l),h=Math.max(r,s,o),f=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&Ss(r,a,s,c,o,l,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rf(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Pt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,c,l),m=Math.min(d,u,h),_=Math.max(a,c,l),g=Math.max(d,u,h),p=Tc(f,m,e,t,n),w=Tc(_,g,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=w;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ss(a,d,c,u,l,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ss(a,d,c,u,l,h,v.x,v.y)&&Pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==r&&S!==o&&Ss(a,d,c,u,l,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ss(a,d,c,u,l,h,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Jr(n,r)&&ru(n,t,t.next,r)&&Xs(n,r)&&Xs(r,n)&&(e.push(n.i,t.i,r.i),qs(t),qs(t.next),t=i=r),t=t.next}while(t!==i);return ar(t)}function of(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mf(o,a)){let c=su(o,a);o=ar(o,o.next),c=ar(c,c.next),Ws(o,e,t,n,r,s,0),Ws(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function af(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=nu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(pf(l))}r.sort(lf);for(let s=0;s<r.length;s++)t=cf(r[s],t);return t}function lf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function cf(i,e){let t=df(i,e);if(!t)return e;let n=su(t,i);return ar(n,n.next),ar(t,t.next)}function df(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Jr(i,t))return t;do{if(Jr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&iu(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);Xs(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&hf(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function hf(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function uf(i,e,t,n){let r=i;do r.z===0&&(r.z=Tc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ff(r)}function ff(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Tc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function iu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ss(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&iu(i,e,t,n,r,s,o,a)}function mf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gf(i,e)&&(Xs(i,e)&&Xs(e,i)&&bf(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Jr(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Jr(i,e){return i.x===e.x&&i.y===e.y}function ru(i,e,t,n){let r=Jo(Pt(i,e,t)),s=Jo(Pt(i,e,n)),o=Jo(Pt(t,n,i)),a=Jo(Pt(t,n,e));return!!(r!==s&&o!==a||r===0&&Zo(i,t,e)||s===0&&Zo(i,n,e)||o===0&&Zo(t,i,n)||a===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jo(i){return i>0?1:i<0?-1:0}function gf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ru(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xs(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function bf(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function su(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lh(i,e,t,n){let r=Ac(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _f(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Rc=class{static triangulate(e,t,n=2){return tf(e,t,n)}},$i=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ch(e),dh(n,e);let o=e.length;t.forEach(ch);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,dh(n,t[c]);let a=Rc.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function ch(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mi=class i extends vt{constructor(e=new ni([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:xf,S,v=!1,C,A,D,x;if(p){S=p.getSpacedPoints(d),v=!0,h=!1;let se=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(d,se),A=new P,D=new P,x=new P}h||(g=0,f=0,m=0,_=0);let y=a.extractPoints(l),U=y.shape,R=y.holes;if(!$i.isClockWise(U)){U=U.reverse();for(let se=0,ue=R.length;se<ue;se++){let te=R[se];$i.isClockWise(te)&&(R[se]=te.reverse())}}function z(se){let te=10000000000000001e-36,ye=se[0];for(let T=1;T<=se.length;T++){let Ve=T%se.length,we=se[Ve],ze=we.x-ye.x,me=we.y-ye.y,E=ze*ze+me*me,b=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(ye.x),Math.abs(ye.y)),F=te*b*b;if(E<=F){se.splice(Ve,1),T--;continue}ye=we}}z(U),R.forEach(z);let H=R.length,W=U;for(let se=0;se<H;se++){let ue=R[se];U=U.concat(ue)}function k(se,ue,te){return ue||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ue,te)}let X=U.length;function ie(se,ue,te){let ye,T,Ve,we=se.x-ue.x,ze=se.y-ue.y,me=te.x-se.x,E=te.y-se.y,b=we*we+ze*ze,F=we*E-ze*me;if(Math.abs(F)>Number.EPSILON){let K=Math.sqrt(b),le=Math.sqrt(me*me+E*E),Q=ue.x-ze/K,Ce=ue.y+we/K,ge=te.x-E/le,Le=te.y+me/le,q=((ge-Q)*E-(Le-Ce)*me)/(we*E-ze*me);ye=Q+we*q-se.x,T=Ce+ze*q-se.y;let O=ye*ye+T*T;if(O<=2)return new ce(ye,T);Ve=Math.sqrt(O/2)}else{let K=!1;we>Number.EPSILON?me>Number.EPSILON&&(K=!0):we<-Number.EPSILON?me<-Number.EPSILON&&(K=!0):Math.sign(ze)===Math.sign(E)&&(K=!0),K?(ye=-ze,T=we,Ve=Math.sqrt(b)):(ye=we,T=ze,Ve=Math.sqrt(b/2))}return new ce(ye/Ve,T/Ve)}let he=[];for(let se=0,ue=W.length,te=ue-1,ye=se+1;se<ue;se++,te++,ye++)te===ue&&(te=0),ye===ue&&(ye=0),he[se]=ie(W[se],W[te],W[ye]);let Se=[],Me,Ee=he.concat();for(let se=0,ue=H;se<ue;se++){let te=R[se];Me=[];for(let ye=0,T=te.length,Ve=T-1,we=ye+1;ye<T;ye++,Ve++,we++)Ve===T&&(Ve=0),we===T&&(we=0),Me[ye]=ie(te[ye],te[Ve],te[we]);Se.push(Me),Ee=Ee.concat(Me)}let We;if(g===0)We=$i.triangulateShape(W,R);else{let se=[],ue=[];for(let te=0;te<g;te++){let ye=te/g,T=f*Math.cos(ye*Math.PI/2),Ve=m*Math.sin(ye*Math.PI/2)+_;for(let we=0,ze=W.length;we<ze;we++){let me=k(W[we],he[we],Ve);Fe(me.x,me.y,-T),ye===0&&se.push(me)}for(let we=0,ze=H;we<ze;we++){let me=R[we];Me=Se[we];let E=[];for(let b=0,F=me.length;b<F;b++){let K=k(me[b],Me[b],Ve);Fe(K.x,K.y,-T),ye===0&&E.push(K)}ye===0&&ue.push(E)}}We=$i.triangulateShape(se,ue)}let Ke=We.length,at=m+_;for(let se=0;se<X;se++){let ue=h?k(U[se],Ee[se],at):U[se];v?(D.copy(C.normals[0]).multiplyScalar(ue.x),A.copy(C.binormals[0]).multiplyScalar(ue.y),x.copy(S[0]).add(D).add(A),Fe(x.x,x.y,x.z)):Fe(ue.x,ue.y,0)}for(let se=1;se<=d;se++)for(let ue=0;ue<X;ue++){let te=h?k(U[ue],Ee[ue],at):U[ue];v?(D.copy(C.normals[se]).multiplyScalar(te.x),A.copy(C.binormals[se]).multiplyScalar(te.y),x.copy(S[se]).add(D).add(A),Fe(x.x,x.y,x.z)):Fe(te.x,te.y,u/d*se)}for(let se=g-1;se>=0;se--){let ue=se/g,te=f*Math.cos(ue*Math.PI/2),ye=m*Math.sin(ue*Math.PI/2)+_;for(let T=0,Ve=W.length;T<Ve;T++){let we=k(W[T],he[T],ye);Fe(we.x,we.y,u+te)}for(let T=0,Ve=R.length;T<Ve;T++){let we=R[T];Me=Se[T];for(let ze=0,me=we.length;ze<me;ze++){let E=k(we[ze],Me[ze],ye);v?Fe(E.x,E.y+S[d-1].y,S[d-1].x+te):Fe(E.x,E.y,u+te)}}}ne(),be();function ne(){let se=r.length/3;if(h){let ue=0,te=X*ue;for(let ye=0;ye<Ke;ye++){let T=We[ye];Oe(T[2]+te,T[1]+te,T[0]+te)}ue=d+g*2,te=X*ue;for(let ye=0;ye<Ke;ye++){let T=We[ye];Oe(T[0]+te,T[1]+te,T[2]+te)}}else{for(let ue=0;ue<Ke;ue++){let te=We[ue];Oe(te[2],te[1],te[0])}for(let ue=0;ue<Ke;ue++){let te=We[ue];Oe(te[0]+X*d,te[1]+X*d,te[2]+X*d)}}n.addGroup(se,r.length/3-se,0)}function be(){let se=r.length/3,ue=0;xe(W,ue),ue+=W.length;for(let te=0,ye=R.length;te<ye;te++){let T=R[te];xe(T,ue),ue+=T.length}n.addGroup(se,r.length/3-se,1)}function xe(se,ue){let te=se.length;for(;--te>=0;){let ye=te,T=te-1;T<0&&(T=se.length-1);for(let Ve=0,we=d+g*2;Ve<we;Ve++){let ze=X*Ve,me=X*(Ve+1),E=ue+ye+ze,b=ue+T+ze,F=ue+T+me,K=ue+ye+me;Xe(E,b,F,K)}}}function Fe(se,ue,te){c.push(se),c.push(ue),c.push(te)}function Oe(se,ue,te){nt(se),nt(ue),nt(te);let ye=r.length/3,T=w.generateTopUV(n,r,ye-3,ye-2,ye-1);qe(T[0]),qe(T[1]),qe(T[2])}function Xe(se,ue,te,ye){nt(se),nt(ue),nt(ye),nt(ue),nt(te),nt(ye);let T=r.length/3,Ve=w.generateSideWallUV(n,r,T-6,T-3,T-2,T-1);qe(Ve[0]),qe(Ve[1]),qe(Ve[3]),qe(Ve[1]),qe(Ve[2]),qe(Ve[3])}function nt(se){r.push(c[se*3+0]),r.push(c[se*3+1]),r.push(c[se*3+2])}function qe(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return yf(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ta[r.type]().fromJSON(r)),new i(n,e.options)}},xf={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],d=e[r*3+1];return[new ce(s,o),new ce(a,c),new ce(l,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],f=e[r*3+1],m=e[r*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(h,1-m),new ce(_,1-p)]:[new ce(a,1-c),new ce(d,1-u),new ce(f,1-m),new ce(g,1-p)]}};function yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ys=class i extends vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){let w=p*h-o;for(let S=0;S<l;S++){let v=S*u-s;m.push(v,-w,0),_.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let S=w+l*p,v=w+l*(p+1),C=w+1+l*(p+1),A=w+1+l*p;f.push(S,v,A),f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var js=class i extends vt{constructor(e=new sr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new ce,d=new P,u=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new pt(u,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function _(){for(let S=0;S<t;S++)g(S);g(s===!1?t:0),w(),p()}function g(S){d=e.getPointAt(S/t,d);let v=o.normals[S],C=o.binormals[S];for(let A=0;A<=r;A++){let D=A/r*Math.PI*2,x=Math.sin(D),y=-Math.cos(D);c.x=y*v.x+x*C.x,c.y=y*v.y+x*C.y,c.z=y*v.z+x*C.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let v=1;v<=r;v++){let C=(r+1)*(S-1)+(v-1),A=(r+1)*S+(v-1),D=(r+1)*S+v,x=(r+1)*(S-1)+v;m.push(C,A,x),m.push(A,D,x)}}function w(){for(let S=0;S<=t;S++)for(let v=0;v<=r;v++)l.x=S/t,l.y=v/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let r in n)e[r]=n[r]}return e}function vf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var ou={clone:hr,merge:cn},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Aa=class extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ra=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $o(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pa=class extends Di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sc:s=e,a=2*t-n;break;case wc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sc:o=e,c=2*n-t;break;case wc:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,w=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,S=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let C=0;C!==a;++C)s[C]=p*o[d+C]+w*o[l+C]+S*o[c+C]+v*o[u+C];return s}},Ia=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[l+h]*u+o[c+h]*d;return s}},Da=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},La=class extends Di{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.settings||this.DefaultSettings_,u=d.inTangents,h=d.outTangents;if(!u||!h){let _=(n-t)/(r-t),g=1-_;for(let p=0;p!==a;++p)s[p]=o[l+p]*g+o[c+p]*_;return s}let f=a*2,m=e-1;for(let _=0;_!==a;++_){let g=o[l+_],p=o[c+_],w=m*f+_*2,S=h[w],v=h[w+1],C=e*f+_*2,A=u[C],D=u[C+1],x=(n-t)/(r-t),y,U,R,N,z;for(let H=0;H<8;H++){y=x*x,U=y*x,R=1-x,N=R*R,z=N*R;let k=z*t+3*N*x*S+3*R*y*A+U*r-n;if(Math.abs(k)<1e-10)break;let X=3*N*(S-t)+6*R*x*(A-S)+3*y*(r-A);if(Math.abs(X)<1e-10)break;x=x-k/X,x=Math.max(0,Math.min(1,x))}s[_]=z*g+3*N*x*v+3*R*y*D+U*p}return s}},Tn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new La(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case fa:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return fa;case this.InterpolantFactoryMethodSmooth:return ta;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&f0(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ta,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,h=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[h+m]||_!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=fa;var Li=class extends Tn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=As;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName="color";var Ua=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName="number";var Fa=class extends Di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let d=l+a;l!==d;l+=4)vn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Zs=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Tn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=As;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Tn{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName="vector";var za=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},au=new za,Ba=class{constructor(e){this.manager=e!==void 0?e:au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},$s=class extends Js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xc=new ft,hh=new P,uh=new P,Cc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Br||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new P,Qo=new vn,jn=new P,Ks=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ko,Qo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Qo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ti=new P,fh=new ce,ph=new ce,an=class extends Ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,fh,ph),t.subVectors(ph,fh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $r=class extends Ks{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=class extends Cc{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ur=-90,Fr=1,ka=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new an(Ur,Fr,e,t);r.layers=this.layers,this.add(r);let s=new an(Ur,Fr,e,t);s.layers=this.layers,this.add(s);let o=new an(Ur,Fr,e,t);o.layers=this.layers,this.add(o);let a=new an(Ur,Fr,e,t);a.layers=this.layers,this.add(a);let c=new an(Ur,Fr,e,t);c.layers=this.layers,this.add(c);let l=new an(Ur,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Va=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var id="\\[\\]\\.:\\/",wf=new RegExp("["+id+"]","g"),rd="[^"+id+"]",Ef="[^"+id.replace("\\.","")+"]",Tf=/((?:WC+[\/:])*)/.source.replace("WC",rd),Af=/(WCOD+)?/.source.replace("WCOD",Ef),Rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),Cf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),Pf=new RegExp("^"+Tf+Af+Rf+Cf+"$"),If=["material","materials","bones","map"],Ic=class{constructor(e,t,n){let r=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){let t=Pf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);If.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ic;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J3=new Float32Array(1);var mh=new ft,Qs=class{constructor(e,t,n=0,r=1/0){this.ray=new Ri(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mh),this}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(gh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Dc(e[r],this,n,t);return n.sort(gh),n}};function gh(i,e){return i.distance-e.distance}function Dc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Dc(s[o],e,t,!0)}}var Qr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var eo=class extends Sn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new vt;s.setIndex(new Kt(n,1)),s.setAttribute("position",new pt(r,3)),super(s,new un({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var bh=new P,ea,yc,to=class extends Vt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ea===void 0&&(ea=new vt,ea.setAttribute("position",new pt([0,0,0,0,1,0],3)),yc=new Ma(.5,1,5,1),yc.translate(0,-.5,0)),this.position.copy(t),this.line=new nr(ea,new un({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gt(yc,new Ci({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bh.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var no=class extends Qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sd(i,e,t,n){let r=Df(n);switch(t){case Zc:return i*e;case $c:return i*e/r.components*r.byteLength;case ja:return i*e/r.components*r.byteLength;case cr:return i*e*2/r.components*r.byteLength;case Za:return i*e*2/r.components*r.byteLength;case Jc:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case Ja:return i*e*4/r.components*r.byteLength;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case el:return Math.max(i,16)*Math.max(e,8)/4;case $a:case Qa:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case rl:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Df(i){switch(i){case mn:case Xc:return{byteLength:1,components:1};case ts:case qc:case ri:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case kn:case Xa:case Vn:return{byteLength:4,components:1};case Yc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zf(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let d=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){let m=u[h],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Qf=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`uniform sampler2D dfgLUT;
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
}`,zp=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,r1=`#define NORMAL
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
}`,s1=`#define NORMAL
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
}`,o1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,h1=`#define TOON
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
}`,u1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Bf,alphahash_pars_fragment:kf,alphamap_fragment:Vf,alphamap_pars_fragment:Hf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:jf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:$f,iridescence_fragment:Kf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:rp,color_pars_fragment:sp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:dp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:bp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Ip,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:wp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Np,lights_phong_pars_fragment:Up,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:zp,lights_fragment_maps:Bp,lights_fragment_end:kp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:jp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:Kp,morphnormal_vertex:Qp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:rm,normal_pars_vertex:sm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:dm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:bm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:wm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Dm,transmission_pars_fragment:Lm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:zm,background_frag:Bm,backgroundCube_vert:km,backgroundCube_frag:Vm,cube_vert:Hm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:jm,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:Km,meshbasic_frag:Qm,meshlambert_vert:e1,meshlambert_frag:t1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:r1,meshnormal_frag:s1,meshphong_vert:o1,meshphong_frag:a1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:d1,meshtoon_frag:h1,points_vert:u1,points_frag:f1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:b1},Te={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},oi={basic:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ot(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:cn([Te.points,Te.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:cn([Te.common,Te.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:cn([Te.sprite,Te.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:cn([Te.common,Te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:cn([Te.lights,Te.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};oi.physical={uniforms:cn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Il={r:0,b:0,g:0},ur=new zn,_1=new ft;function x1(i,e,t,n,r,s){let o=new ot(0),a=r===!0?0:1,c,l,d=null,u=0,h=null;function f(w){let S=w.isScene===!0?w.background:null;if(S&&S.isTexture){let v=w.backgroundBlurriness>0;S=e.get(S,v)}return S}function m(w){let S=!1,v=f(w);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(w,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===so)?(l===void 0&&(l=new gt(new ti(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:hr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ur.copy(S.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(ur)),l.material.toneMapped=ht.getTransfer(v.colorSpace)!==_t,(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new Ys(2,2),new En({name:"BackgroundMaterial",uniforms:hr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,S){w.getRGB(Il,nd(i)),t.buffers.color.setClear(Il.r,Il.g,Il.b,S,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:m,addToRenderList:_,dispose:p}}function y1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(R,N,z,H,W){let k=!1,X=u(R,H,z,N);s!==X&&(s=X,l(s.object)),k=f(R,H,z,W),k&&m(R,H,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(R,N,z,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function u(R,N,z,H){let W=H.wireframe===!0,k=n[N.id];k===void 0&&(k={},n[N.id]=k);let X=R.isInstancedMesh===!0?R.id:0,ie=k[X];ie===void 0&&(ie={},k[X]=ie);let he=ie[z.id];he===void 0&&(he={},ie[z.id]=he);let Se=he[W];return Se===void 0&&(Se=h(c()),he[W]=Se),Se}function h(R){let N=[],z=[],H=[];for(let W=0;W<t;W++)N[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:H,object:R,attributes:{},index:null}}function f(R,N,z,H){let W=s.attributes,k=N.attributes,X=0,ie=z.getAttributes();for(let he in ie)if(ie[he].location>=0){let Me=W[he],Ee=k[he];if(Ee===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Me===void 0||Me.attribute!==Ee||Ee&&Me.data!==Ee.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function m(R,N,z,H){let W={},k=N.attributes,X=0,ie=z.getAttributes();for(let he in ie)if(ie[he].location>=0){let Me=k[he];Me===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor));let Ee={};Ee.attribute=Me,Me&&Me.data&&(Ee.data=Me.data),W[he]=Ee,X++}s.attributes=W,s.attributesNum=X,s.index=H}function _(){let R=s.newAttributes;for(let N=0,z=R.length;N<z;N++)R[N]=0}function g(R){p(R,0)}function p(R,N){let z=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;z[R]=1,H[R]===0&&(i.enableVertexAttribArray(R),H[R]=1),W[R]!==N&&(i.vertexAttribDivisor(R,N),W[R]=N)}function w(){let R=s.newAttributes,N=s.enabledAttributes;for(let z=0,H=N.length;z<H;z++)N[z]!==R[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function S(R,N,z,H,W,k,X){X===!0?i.vertexAttribIPointer(R,N,z,W,k):i.vertexAttribPointer(R,N,z,H,W,k)}function v(R,N,z,H){_();let W=H.attributes,k=z.getAttributes(),X=N.defaultAttributeValues;for(let ie in k){let he=k[ie];if(he.location>=0){let Se=W[ie];if(Se===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Se=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Se=R.instanceColor)),Se!==void 0){let Me=Se.normalized,Ee=Se.itemSize,We=e.get(Se);if(We===void 0)continue;let Ke=We.buffer,at=We.type,ne=We.bytesPerElement,be=at===i.INT||at===i.UNSIGNED_INT||Se.gpuType===Xa;if(Se.isInterleavedBufferAttribute){let xe=Se.data,Fe=xe.stride,Oe=Se.offset;if(xe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<he.locationSize;Xe++)p(he.location+Xe,xe.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<he.locationSize;Xe++)g(he.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Xe=0;Xe<he.locationSize;Xe++)S(he.location+Xe,Ee/he.locationSize,at,Me,Fe*ne,(Oe+Ee/he.locationSize*Xe)*ne,be)}else{if(Se.isInstancedBufferAttribute){for(let xe=0;xe<he.locationSize;xe++)p(he.location+xe,Se.meshPerAttribute);R.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let xe=0;xe<he.locationSize;xe++)g(he.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let xe=0;xe<he.locationSize;xe++)S(he.location+xe,Ee/he.locationSize,at,Me,Ee*ne,Ee/he.locationSize*xe*ne,be)}}else if(X!==void 0){let Me=X[ie];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(he.location,Me);break;case 3:i.vertexAttrib3fv(he.location,Me);break;case 4:i.vertexAttrib4fv(he.location,Me);break;default:i.vertexAttrib1fv(he.location,Me)}}}}w()}function C(){y();for(let R in n){let N=n[R];for(let z in N){let H=N[z];for(let W in H){let k=H[W];for(let X in k)d(k[X].object),delete k[X];delete H[W]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;let N=n[R.id];for(let z in N){let H=N[z];for(let W in H){let k=H[W];for(let X in k)d(k[X].object),delete k[X];delete H[W]}}delete n[R.id]}function D(R){for(let N in n){let z=n[N];for(let H in z){let W=z[H];if(W[R.id]===void 0)continue;let k=W[R.id];for(let X in k)d(k[X].object),delete k[X];delete W[R.id]}}}function x(R){for(let N in n){let z=n[N],H=R.isInstancedMesh===!0?R.id:0,W=z[H];if(W!==void 0){for(let k in W){let X=W[k];for(let ie in X)d(X[ie].object),delete X[ie];delete W[k]}delete z[H],Object.keys(z).length===0&&delete n[N]}}}function y(){U(),o=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:U,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function v1(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,n,1)}function c(l,d,u,h){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_]*h[_];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function M1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Pn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let x=D===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Vn&&!x)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Ye("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,maxSamples:C,samples:A}}function S1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new pn,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{let w=s?0:n,S=w*4,v=p.clippingState||null;c.value=v,v=d(m,h,S,f);for(let C=0;C!==S;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ki=4,lu=[.125,.215,.35,.446,.526,.582],pr=20,w1=256,uo=new $r,cu=new ot,od=null,ad=0,ld=0,cd=!1,E1=new P,Ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=E1}=s;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ri,format:Pn,colorSpace:er,depthBuffer:!1},r=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T1(s)),this._blurMaterial=R1(s,e,t),this._ggxMaterial=A1(s,e,t)}return r}_compileMaterial(e){let t=new gt(new vt,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,n,r,s){let c=new an(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(cu),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new ti,new Ci({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,p=!0):(g.color.copy(cu),p=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[S],s.y,s.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[S]));let C=this._cubeSize;is(r,v*C,S>2?C:0,C,C),u.setRenderTarget(r),p&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Oi||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;is(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,uo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,f=u*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-ki?n-m+ki:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,is(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,uo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,is(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(a,uo)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=l;let h=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*pr-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):pr;g>pr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pr}`);let p=[],w=0;for(let D=0;D<pr;++D){let x=D/_,y=Math.exp(-x*x/2);p.push(y),D===0?w+=y:D<g&&(w+=2*y)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-n;let v=this._sizeLods[r],C=3*v*(r>S-ki?r-S+ki:0),A=4*(this._cubeSize-v);is(t,C,A,3*v,2*v),c.setRenderTarget(t),c.render(u,uo)}};function T1(i){let e=[],t=[],n=[],r=i,s=i-ki+1+lu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ki?c=lu[o-i+ki-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*f),S=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let A=0;A<f;A++){let D=A%3*2/3-1,x=A>2?0:-1,y=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];w.set(y,_*m*A),S.set(h,g*m*A);let U=[A,A,A,A,A,A];v.set(U,p*m*A)}let C=new vt;C.setAttribute("position",new Kt(w,_)),C.setAttribute("uv",new Kt(S,g)),C.setAttribute("faceIndex",new Kt(v,p)),n.push(new gt(C,null)),r>ki&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function du(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function A1(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function R1(i,e,t){let n=new Float32Array(pr),r=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function hu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function uu(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}var Nl=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ti(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ii});s.uniforms.tEquirect.value=t;let o=new gt(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Qt),new ka(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function C1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ha||f===Ga)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new Nl(m.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,m=f===Ha||f===Ga,_=f===Oi||f===lr;if(m||_){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ll(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return m&&w&&w.height>0||_&&w&&c(w)?(n===null&&(n=new Ll(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,f){return f===Ha?h.mapping=Oi:f===Ga&&(h.mapping=lr),h}function c(h){let f=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function l(h){let f=h.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function P1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Is("WebGLRenderer: "+n+" extension not supported."),r}}}function I1(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(u){let h=[],f=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let S=0,v=w.length;S<v;S+=3){let C=w[S+0],A=w[S+1],D=w[S+2];h.push(C,A,A,D,D,C)}}else{let w=m.array;_=m.version;for(let S=0,v=w.length/3-1;S<v;S+=3){let C=S+0,A=S+1,D=S+2;h.push(C,A,A,D,D,C)}}let g=new(m.count>=65535?Us:Ns)(h,1);g.version=_;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function D1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,m){m!==0&&(i.drawElementsInstanced(n,f,s,h*o,m),t.update(f,n,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(h,f,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function L1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function N1(i,e,t){let n=new WeakMap,r=new It;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*C*4*u),D=new Ds(A,v,C,u);D.type=Vn,D.needsUpdate=!0;let x=S*4;for(let U=0;U<u;U++){let R=g[U],N=p[U],z=w[U],H=v*C*4*U;for(let W=0;W<R.count;W++){let k=W*x;f===!0&&(r.fromBufferAttribute(R,W),A[H+k+0]=r.x,A[H+k+1]=r.y,A[H+k+2]=r.z,A[H+k+3]=0),m===!0&&(r.fromBufferAttribute(N,W),A[H+k+4]=r.x,A[H+k+5]=r.y,A[H+k+6]=r.z,A[H+k+7]=0),_===!0&&(r.fromBufferAttribute(z,W),A[H+k+8]=r.x,A[H+k+9]=r.y,A[H+k+10]=r.z,A[H+k+11]=z.itemSize===4?r.w:1)}}h={count:u,texture:D,size:new ce(v,C)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function U1(i,e,t,n,r){let s=new WeakMap;function o(l){let d=r.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var F1={[zc]:"LINEAR_TONE_MAPPING",[Bc]:"REINHARD_TONE_MAPPING",[kc]:"CINEON_TONE_MAPPING",[ro]:"ACES_FILMIC_TONE_MAPPING",[Hc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function O1(i,e,t,n,r){let s=new Mn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Mn(e,t,{type:ri,depthBuffer:!1,stencilBuffer:!1}),a=new vt;a.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new pt([0,2,0,0,2,0],2));let c=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new gt(a,c),d=new $r(-1,1,1,-1,0,1),u=null,h=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(w,S){s.setSize(w,S),o.setSize(w,S);for(let v=0;v<g.length;v++){let C=g[v];C.setSize&&C.setSize(w,S)}},this.setEffects=function(w){g=w,p=g.length>0&&g[0].isRenderPass===!0;let S=s.width,v=s.height;for(let C=0;C<g.length;C++){let A=g[C];A.setSize&&A.setSize(S,v)}},this.begin=function(w,S){if(f||w.toneMapping===Bn&&g.length===0)return!1;if(_=S,S!==null){let v=S.width,C=S.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return p===!1&&w.setRenderTarget(s),m=w.toneMapping,w.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(w,S){w.toneMapping=m,f=!0;let v=s,C=o;for(let A=0;A<g.length;A++){let D=g[A];if(D.enabled!==!1&&(D.render(w,C,v,S),D.needsSwap!==!1)){let x=v;v=C,C=x}}if(u!==w.outputColorSpace||h!==w.toneMapping){u=w.outputColorSpace,h=w.toneMapping,c.defines={},ht.getTransfer(u)===_t&&(c.defines.SRGB_TRANSFER="");let A=F1[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(_),w.render(l,d),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var Iu=new hn,ud=new Ii(1,1),Du=new Ds,Lu=new ba,Nu=new zs,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),bu=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=fu[r];if(s===void 0&&(s=new Float32Array(r),fu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ol(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function k1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function H1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;bu.set(n),i.uniformMatrix2fv(this.addr,!1,bu),Wt(t,n)}}function G1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Wt(t,n)}}function W1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Wt(t,n)}}function X1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function j1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Z1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function $1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function K1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Q1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ud.compareFunction=t.isReversedDepthBuffer()?Pl:Cl,s=ud):s=Iu,t.setTexture2D(e||s,r)}function eg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lu,r)}function tg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nu,r)}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Du,r)}function ig(i){switch(i){case 5126:return z1;case 35664:return B1;case 35665:return k1;case 35666:return V1;case 35674:return H1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return j1;case 5125:return Z1;case 36294:return J1;case 36295:return $1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(i,e){i.uniform1fv(this.addr,e)}function sg(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function lg(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cg(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function ug(i,e){i.uniform2iv(this.addr,e)}function fg(i,e){i.uniform3iv(this.addr,e)}function pg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function bg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function xg(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ud:o=Iu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function yg(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lu,s[o])}function vg(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nu,s[o])}function Mg(i,e,t){let n=this.cache,r=e.length,s=Ol(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Du,s[o])}function Sg(i){switch(i){case 5126:return rg;case 35664:return sg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return bg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return Mg}}var fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}},md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},dd=/(\w+)(\])?(\[|\.)?/g;function _u(i,e){i.seq.push(e),i.map[e.id]=e}function wg(i,e,t){let n=i.name,r=n.length;for(dd.lastIndex=0;;){let s=dd.exec(n),o=dd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){_u(t,l===void 0?new fd(a,i,e):new pd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new md(a),_u(t,u)),t=u}}}var rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);wg(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function xu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Eg=37297,Tg=0;function Ag(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var yu=new et;function Rg(i){ht._getMatrix(yu,ht.workingColorSpace,i);let e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Rs:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ag(i.getShaderSource(e),a)}else return s}function Cg(i,e){let t=Rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Pg={[zc]:"Linear",[Bc]:"Reinhard",[kc]:"Cineon",[ro]:"ACESFilmic",[Hc]:"AgX",[Gc]:"Neutral",[Vc]:"Custom"};function Ig(i,e){let t=Pg[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dl=new P;function Dg(){ht.getLuminanceCoefficients(Dl);let i=Dl.x.toFixed(4),e=Dl.y.toFixed(4),t=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function Ng(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function po(i){return i!==""}function Mu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(i){return i.replace(Fg,zg)}var Og=new Map;function zg(i,e){let t=rt[e];if(t===void 0){let n=Og.get(e);if(n!==void 0)t=rt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(Bg,kg)}function kg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Vg={[io]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function Hg(i){return Vg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Gg={[Oi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE_UV"};function Wg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Gg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xg={[lr]:"ENVMAP_MODE_REFRACTION"};function qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yg={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[Bh]:"ENVMAP_BLENDING_MIX",[kh]:"ENVMAP_BLENDING_ADD"};function jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Hg(t),l=Wg(t),d=qg(t),u=jg(t),h=Zg(t),f=Lg(t),m=Ng(s),_=r.createProgram(),g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(po).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(po).join(`
`),p.length>0&&(p+=`
`)):(g=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Dg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),o=gd(o),o=Mu(o,t),o=Su(o,t),a=gd(a),a=Mu(a,t),a=Su(a,t),o=wu(o),a=wu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=w+g+o,v=w+p+a,C=xu(r,r.VERTEX_SHADER,S),A=xu(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(R){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(A)||"",W=N.trim(),k=z.trim(),X=H.trim(),ie=!0,he=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,A);else{let Se=vu(r,C,"vertex"),Me=vu(r,A,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+Se+`
`+Me)}else W!==""?Ye("WebGLProgram: Program Info Log:",W):(k===""||X==="")&&(he=!1);he&&(R.diagnostics={runnable:ie,programLog:W,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:p}})}r.deleteShader(C),r.deleteShader(A),x=new rs(r,_),y=Ug(r,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,Eg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}var $g=0,bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _d(e),t.set(e,n)),n}},_d=class{constructor(e){this.id=$g++,this.code=e,this.usedTimes=0}};function Kg(i,e,t,n,r,s){let o=new Gr,a=new bd,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,y,U,R,N){let z=R.fog,H=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||W,k),ie=X&&X.mapping===so?X.image.height:null,he=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=Se!==void 0?Se.length:0,Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let We,Ke,at,ne;if(he){let ve=oi[he];We=ve.vertexShader,Ke=ve.fragmentShader}else We=x.vertexShader,Ke=x.fragmentShader,a.update(x),at=a.getVertexShaderID(x),ne=a.getFragmentShaderID(x);let be=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,Oe=N.isBatchedMesh===!0,Xe=!!x.map,nt=!!x.matcap,qe=!!X,se=!!x.aoMap,ue=!!x.lightMap,te=!!x.bumpMap,ye=!!x.normalMap,T=!!x.displacementMap,Ve=!!x.emissiveMap,we=!!x.metalnessMap,ze=!!x.roughnessMap,me=x.anisotropy>0,E=x.clearcoat>0,b=x.dispersion>0,F=x.iridescence>0,K=x.sheen>0,le=x.transmission>0,Q=me&&!!x.anisotropyMap,Ce=E&&!!x.clearcoatMap,ge=E&&!!x.clearcoatNormalMap,Le=E&&!!x.clearcoatRoughnessMap,q=F&&!!x.iridescenceMap,O=F&&!!x.iridescenceThicknessMap,ee=K&&!!x.sheenColorMap,oe=K&&!!x.sheenRoughnessMap,de=!!x.specularMap,re=!!x.specularColorMap,fe=!!x.specularIntensityMap,I=le&&!!x.transmissionMap,L=le&&!!x.thicknessMap,B=!!x.gradientMap,j=!!x.alphaMap,J=x.alphaTest>0,G=!!x.alphaHash,ae=!!x.extensions,pe=Bn;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Ne={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:We,fragmentShader:Ke,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:er,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:nt,envMap:qe,envMapMode:qe&&X.mapping,envMapCubeUVHeight:ie,aoMap:se,lightMap:ue,bumpMap:te,normalMap:ye,displacementMap:T,emissiveMap:Ve,normalMapObjectSpace:ye&&x.normalMapType===Gh,normalMapTangentSpace:ye&&x.normalMapType===Kc,metalnessMap:we,roughnessMap:ze,anisotropy:me,anisotropyMap:Q,clearcoat:E,clearcoatMap:Ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:Le,dispersion:b,iridescence:F,iridescenceMap:q,iridescenceThicknessMap:O,sheen:K,sheenColorMap:ee,sheenRoughnessMap:oe,specularMap:de,specularColorMap:re,specularIntensityMap:fe,transmission:le,transmissionMap:I,thicknessMap:L,gradientMap:B,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:J,alphaHash:G,combine:x.combine,mapUv:Xe&&m(x.map.channel),aoMapUv:se&&m(x.aoMap.channel),lightMapUv:ue&&m(x.lightMap.channel),bumpMapUv:te&&m(x.bumpMap.channel),normalMapUv:ye&&m(x.normalMap.channel),displacementMapUv:T&&m(x.displacementMap.channel),emissiveMapUv:Ve&&m(x.emissiveMap.channel),metalnessMapUv:we&&m(x.metalnessMap.channel),roughnessMapUv:ze&&m(x.roughnessMap.channel),anisotropyMapUv:Q&&m(x.anisotropyMap.channel),clearcoatMapUv:Ce&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:O&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(x.sheenRoughnessMap.channel),specularMapUv:de&&m(x.specularMap.channel),specularColorMapUv:re&&m(x.specularColorMap.channel),specularIntensityMapUv:fe&&m(x.specularIntensityMap.channel),transmissionMapUv:I&&m(x.transmissionMap.channel),thicknessMapUv:L&&m(x.thicknessMap.channel),alphaMapUv:j&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ye||me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Xe||j),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)y.push(U),y.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(y,x),w(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function w(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let y=f[x.type],U;if(y){let R=oi[y];U=ou.clone(R.uniforms)}else U=x.uniforms;return U}function v(x,y){let U=d.get(y);return U!==void 0?++U.usedTimes:(U=new Jg(i,y,x,r),l.push(U),d.set(y,U)),U}function C(x){if(--x.usedTimes===0){let y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:C,releaseShaderCache:A,programs:l,dispose:D}}function Qg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function e3(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Au(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,p){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=m,w.materialVariant=o(h),w.groupOrder=_,w.renderOrder=h.renderOrder,w.z=g,w.group=p),e++,w}function c(h,f,m,_,g,p){let w=a(h,f,m,_,g,p);m.transmission>0?n.push(w):m.transparent===!0?r.push(w):t.push(w)}function l(h,f,m,_,g,p){let w=a(h,f,m,_,g,p);m.transmission>0?n.unshift(w):m.transparent===!0?r.unshift(w):t.unshift(w)}function d(h,f){t.length>1&&t.sort(h||e3),n.length>1&&n.sort(f||Tu),r.length>1&&r.sort(f||Tu)}function u(){for(let h=e,f=i.length;h<f;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:u,sort:d}}function t3(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Au,i.set(n,[o])):r>=s.length?(o=new Au,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function n3(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ot};break;case"SpotLight":t={position:new P,direction:new P,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function i3(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var r3=0;function s3(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o3(i){let e=new n3,t=i3(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let r=new P,s=new ft,o=new ft;function a(l){let d=0,u=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,w=0,S=0,v=0,C=0,A=0,D=0;l.sort(s3);for(let y=0,U=l.length;y<U;y++){let R=l[y],N=R.color,z=R.intensity,H=R.distance,W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===cr?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=N.r*z,u+=N.g*z,h+=N.b*z;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],z);D++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,ie=t.get(R);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=R.shadow.matrix,w++}n.directional[f]=k,f++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(z),k.distance=H,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;let X=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,X.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,R.castShadow){let ie=t.get(R);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,n.spotShadow[_]=ie,n.spotShadowMap[_]=W,v++}_++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(N).multiplyScalar(z),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=k,g++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let X=R.shadow,ie=t.get(R);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,ie.shadowCameraNear=X.camera.near,ie.shadowCameraFar=X.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=R.shadow.matrix,S++}n.point[m]=k,m++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(z),k.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[p]=k,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==w||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==C||x.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=w,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=C,x.numLightProbes=D,n.version=r3++)}function c(l,d){let u=0,h=0,f=0,m=0,_=0,g=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let S=l[p];if(S.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),u++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(S.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Ru(i){let e=new o3(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function a3(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ru(i),e.set(r,[a])):s>=o.length?(a=new Ru(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var l3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c3=`uniform sampler2D shadow_pass;
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
}`,d3=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],h3=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Cu=new ft,fo=new P,hd=new P;function u3(i,e,t){let n=new Yr,r=new ce,s=new ce,o=new It,a=new Ra,c=new Ca,l={},d=t.maxTextureSize,u={[pi]:fn,[fn]:pi,[en]:en},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:l3,fragmentShader:c3}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new gt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(A,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===yh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=io);let y=i.getRenderTarget(),U=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ii),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=p!==this.type;z&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(W=>W.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,W=A.length;H<W;H++){let k=A[H],X=k.shadow;if(X===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);let ie=X.getFrameExtents();r.multiply(ie),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,X.mapSize.y=s.y));let he=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=he,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===es){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Mn(r.x,r.y,{format:cr,type:ri,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),X.map.texture.name=k.name+".shadowMap",X.map.depthTexture=new Ii(r.x,r.y,Vn),X.map.depthTexture.name=k.name+".shadowMapDepth",X.map.depthTexture.format=Kn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Jt,X.map.depthTexture.magFilter=Jt}else k.isPointLight?(X.map=new Nl(r.x),X.map.depthTexture=new va(r.x,kn)):(X.map=new Mn(r.x,r.y),X.map.depthTexture=new Ii(r.x,r.y,kn)),X.map.depthTexture.name=k.name+".shadowMap",X.map.depthTexture.format=Kn,this.type===io?(X.map.depthTexture.compareFunction=he?Pl:Cl,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Jt,X.map.depthTexture.magFilter=Jt);X.camera.updateProjectionMatrix()}let Se=X.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Se;Me++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(X.map),i.clear());let Ee=X.getViewport(Me);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),N.viewport(o)}if(k.isPointLight){let Ee=X.camera,We=X.matrix,Ke=k.distance||Ee.far;Ke!==Ee.far&&(Ee.far=Ke,Ee.updateProjectionMatrix()),fo.setFromMatrixPosition(k.matrixWorld),Ee.position.copy(fo),hd.copy(Ee.position),hd.add(d3[Me]),Ee.up.copy(h3[Me]),Ee.lookAt(hd),Ee.updateMatrixWorld(),We.makeTranslation(-fo.x,-fo.y,-fo.z),Cu.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Cu,Ee.coordinateSystem,Ee.reversedDepth)}else X.updateMatrices(k);n=X.getFrustum(),v(D,x,X.camera,k,this.type)}X.isPointLightShadow!==!0&&this.type===es&&w(X,x),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,U,R)};function w(A,D){let x=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mn(r.x,r.y,{format:cr,type:ri})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(D,null,x,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(D,null,x,f,_,null)}function S(A,D,x,y){let U=null,R=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)U=R;else if(U=x.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=U.uuid,z=D.uuid,H=l[N];H===void 0&&(H={},l[N]=H);let W=H[z];W===void 0&&(W=U.clone(),H[z]=W,D.addEventListener("dispose",C)),U=W}if(U.visible=D.visible,U.wireframe=D.wireframe,y===es?U.side=D.shadowSide!==null?D.shadowSide:D.side:U.side=D.shadowSide!==null?D.shadowSide:u[D.side],U.alphaMap=D.alphaMap,U.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,U.map=D.map,U.clipShadows=D.clipShadows,U.clippingPlanes=D.clippingPlanes,U.clipIntersection=D.clipIntersection,U.displacementMap=D.displacementMap,U.displacementScale=D.displacementScale,U.displacementBias=D.displacementBias,U.wireframeLinewidth=D.wireframeLinewidth,U.linewidth=D.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let N=i.properties.get(U);N.light=x}return U}function v(A,D,x,y,U){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===es)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let z=e.update(A),H=A.material;if(Array.isArray(H)){let W=z.groups;for(let k=0,X=W.length;k<X;k++){let ie=W[k],he=H[ie.materialIndex];if(he&&he.visible){let Se=S(A,he,y,U);A.onBeforeShadow(i,A,D,x,z,Se,ie),i.renderBufferDirect(x,null,z,Se,A,ie),A.onAfterShadow(i,A,D,x,z,Se,ie)}}}else if(H.visible){let W=S(A,H,y,U);A.onBeforeShadow(i,A,D,x,z,W,null),i.renderBufferDirect(x,null,z,W,A,null),A.onAfterShadow(i,A,D,x,z,W,null)}}let N=A.children;for(let z=0,H=N.length;z<H;z++)v(N[z],D,x,y,U)}function C(A){A.target.removeEventListener("dispose",C);for(let x in l){let y=l[x],U=A.target.uuid;U in y&&(y[U].dispose(),delete y[U])}}}function f3(i,e){function t(){let I=!1,L=new It,B=null,j=new It(0,0,0,0);return{setMask:function(J){B!==J&&!I&&(i.colorMask(J,J,J,J),B=J)},setLocked:function(J){I=J},setClear:function(J,G,ae,pe,Ne){Ne===!0&&(J*=pe,G*=pe,ae*=pe),L.set(J,G,ae,pe),j.equals(L)===!1&&(i.clearColor(J,G,ae,pe),j.copy(L))},reset:function(){I=!1,B=null,j.set(-1,0,0,0)}}}function n(){let I=!1,L=!1,B=null,j=null,J=null;return{setReversed:function(G){if(L!==G){let ae=e.get("EXT_clip_control");G?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),L=G;let pe=J;J=null,this.setClear(pe)}},getReversed:function(){return L},setTest:function(G){G?be(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(G){B!==G&&!I&&(i.depthMask(G),B=G)},setFunc:function(G){if(L&&(G=Qh[G]),j!==G){switch(G){case ra:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=G}},setLocked:function(G){I=G},setClear:function(G){J!==G&&(J=G,L&&(G=1-G),i.clearDepth(G))},reset:function(){I=!1,B=null,j=null,J=null,L=!1}}}function r(){let I=!1,L=null,B=null,j=null,J=null,G=null,ae=null,pe=null,Ne=null;return{setTest:function(ve){I||(ve?be(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ve){L!==ve&&!I&&(i.stencilMask(ve),L=ve)},setFunc:function(ve,lt,De){(B!==ve||j!==lt||J!==De)&&(i.stencilFunc(ve,lt,De),B=ve,j=lt,J=De)},setOp:function(ve,lt,De){(G!==ve||ae!==lt||pe!==De)&&(i.stencilOp(ve,lt,De),G=ve,ae=lt,pe=De)},setLocked:function(ve){I=ve},setClear:function(ve){Ne!==ve&&(i.clearStencil(ve),Ne=ve)},reset:function(){I=!1,L=null,B=null,j=null,J=null,G=null,ae=null,pe=null,Ne=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,d={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,S=null,v=null,C=null,A=null,D=new ot(0,0,0),x=0,y=!1,U=null,R=null,N=null,z=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,X=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ie)[1]),k=X>=1):ie.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),k=X>=2);let he=null,Se={},Me=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),We=new It().fromArray(Me),Ke=new It().fromArray(Ee);function at(I,L,B,j){let J=new Uint8Array(4),G=i.createTexture();i.bindTexture(I,G),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<B;ae++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(L+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return G}let ne={};ne[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(i.DEPTH_TEST),o.setFunc(Qi),te(!1),ye(Lc),be(i.CULL_FACE),se(ii);function be(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function xe(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Fe(I,L){return u[I]!==L?(i.bindFramebuffer(I,L),u[I]=L,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=L),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=L),!0):!1}function Oe(I,L){let B=f,j=!1;if(I){B=h.get(L),B===void 0&&(B=[],h.set(L,B));let J=I.textures;if(B.length!==J.length||B[0]!==i.COLOR_ATTACHMENT0){for(let G=0,ae=J.length;G<ae;G++)B[G]=i.COLOR_ATTACHMENT0+G;B.length=J.length,j=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,j=!0);j&&i.drawBuffers(B)}function Xe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let nt={[Ai]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};nt[wh]=i.MIN,nt[Eh]=i.MAX;let qe={[Th]:i.ZERO,[Ah]:i.ONE,[Rh]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Fh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function se(I,L,B,j,J,G,ae,pe,Ne,ve){if(I===ii){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(be(i.BLEND),_=!0),I!==vh){if(I!==g||ve!==y){if((p!==Ai||v!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,v=Ai),ve)switch(I){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",I);break}w=null,S=null,C=null,A=null,D.set(0,0,0),x=0,g=I,y=ve}return}J=J||L,G=G||B,ae=ae||j,(L!==p||J!==v)&&(i.blendEquationSeparate(nt[L],nt[J]),p=L,v=J),(B!==w||j!==S||G!==C||ae!==A)&&(i.blendFuncSeparate(qe[B],qe[j],qe[G],qe[ae]),w=B,S=j,C=G,A=ae),(pe.equals(D)===!1||Ne!==x)&&(i.blendColor(pe.r,pe.g,pe.b,Ne),D.copy(pe),x=Ne),g=I,y=!1}function ue(I,L){I.side===en?xe(i.CULL_FACE):be(i.CULL_FACE);let B=I.side===fn;L&&(B=!B),te(B),I.blending===Ki&&I.transparent===!1?se(ii):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let j=I.stencilWrite;a.setTest(j),j&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){U!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),U=I)}function ye(I){I!==_h?(be(i.CULL_FACE),I!==R&&(I===Lc?i.cullFace(i.BACK):I===xh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),R=I}function T(I){I!==N&&(k&&i.lineWidth(I),N=I)}function Ve(I,L,B){I?(be(i.POLYGON_OFFSET_FILL),(z!==L||H!==B)&&(z=L,H=B,o.getReversed()&&(L=-L),i.polygonOffset(L,B))):xe(i.POLYGON_OFFSET_FILL)}function we(I){I?be(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ze(I){I===void 0&&(I=i.TEXTURE0+W-1),he!==I&&(i.activeTexture(I),he=I)}function me(I,L,B){B===void 0&&(he===null?B=i.TEXTURE0+W-1:B=he);let j=Se[B];j===void 0&&(j={type:void 0,texture:void 0},Se[B]=j),(j.type!==I||j.texture!==L)&&(he!==B&&(i.activeTexture(B),he=B),i.bindTexture(I,L||ne[I]),j.type=I,j.texture=L)}function E(){let I=Se[he];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function K(){try{i.texSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function le(){try{i.texSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function ge(){try{i.texStorage2D(...arguments)}catch(I){je("WebGLState:",I)}}function Le(){try{i.texStorage3D(...arguments)}catch(I){je("WebGLState:",I)}}function q(){try{i.texImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function O(){try{i.texImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function ee(I){We.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function oe(I){Ke.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function de(I,L){let B=l.get(L);B===void 0&&(B=new WeakMap,l.set(L,B));let j=B.get(I);j===void 0&&(j=i.getUniformBlockIndex(L,I.name),B.set(I,j))}function re(I,L){let j=l.get(L).get(I);c.get(L)!==j&&(i.uniformBlockBinding(L,j,I.__bindingPointIndex),c.set(L,j))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,Se={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,S=null,v=null,C=null,A=null,D=new ot(0,0,0),x=0,y=!1,U=null,R=null,N=null,z=null,H=null,We.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:be,disable:xe,bindFramebuffer:Fe,drawBuffers:Oe,useProgram:Xe,setBlending:se,setMaterial:ue,setFlipSided:te,setCullFace:ye,setLineWidth:T,setPolygonOffset:Ve,setScissorTest:we,activeTexture:ze,bindTexture:me,unbindTexture:E,compressedTexImage2D:b,compressedTexImage3D:F,texImage2D:q,texImage3D:O,updateUBOMapping:de,uniformBlockBinding:re,texStorage2D:ge,texStorage3D:Le,texSubImage2D:K,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ce,scissor:ee,viewport:oe,reset:fe}}function p3(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,b){return f?new OffscreenCanvas(E,b):Cs("canvas")}function _(E,b,F){let K=1,le=me(E);if((le.width>F||le.height>F)&&(K=F/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(K*le.width),Ce=Math.floor(K*le.height);u===void 0&&(u=m(Q,Ce));let ge=b?m(Q,Ce):u;return ge.width=Q,ge.height=Ce,ge.getContext("2d").drawImage(E,0,0,Q,Ce),Ye("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ce+")."),ge}else return"data"in E&&Ye("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,b,F,K,le=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=b;if(b===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),b===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RG8UI),F===i.UNSIGNED_SHORT&&(Q=i.RG16UI),F===i.UNSIGNED_INT&&(Q=i.RG32UI),F===i.BYTE&&(Q=i.RG8I),F===i.SHORT&&(Q=i.RG16I),F===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),F===i.UNSIGNED_INT&&(Q=i.RGB32UI),F===i.BYTE&&(Q=i.RGB8I),F===i.SHORT&&(Q=i.RGB16I),F===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),F===i.UNSIGNED_INT&&(Q=i.RGBA32UI),F===i.BYTE&&(Q=i.RGBA8I),F===i.SHORT&&(Q=i.RGBA16I),F===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){let Ce=le?Rs:ht.getTransfer(K);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=Ce===_t?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(E,b){let F;return E?b===null||b===kn||b===ns?F=i.DEPTH24_STENCIL8:b===Vn?F=i.DEPTH32F_STENCIL8:b===ts&&(F=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===kn||b===ns?F=i.DEPTH_COMPONENT24:b===Vn?F=i.DEPTH_COMPONENT32F:b===ts&&(F=i.DEPTH_COMPONENT16),F}function C(E,b){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function A(E){let b=E.target;b.removeEventListener("dispose",A),x(b),b.isVideoTexture&&d.delete(b)}function D(E){let b=E.target;b.removeEventListener("dispose",D),U(b)}function x(E){let b=n.get(E);if(b.__webglInit===void 0)return;let F=E.source,K=h.get(F);if(K){let le=K[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&y(E),Object.keys(K).length===0&&h.delete(F)}n.remove(E)}function y(E){let b=n.get(E);i.deleteTexture(b.__webglTexture);let F=E.source,K=h.get(F);delete K[b.__cacheKey],o.memory.textures--}function U(E){let b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let le=0;le<b.__webglFramebuffer[K].length;le++)i.deleteFramebuffer(b.__webglFramebuffer[K][le]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let F=E.textures;for(let K=0,le=F.length;K<le;K++){let Q=n.get(F[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(E)}let R=0;function N(){R=0}function z(){let E=R;return E>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function H(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function W(E,b){let F=n.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let K=E.image;if(K===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,E,b);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function k(E,b){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){ne(F,E,b);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function X(E,b){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){ne(F,E,b);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function ie(E,b){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){be(F,E,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}let he={[ha]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},Se={[Jt]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},Me={[Wh]:i.NEVER,[Zh]:i.ALWAYS,[Xh]:i.LESS,[Cl]:i.LEQUAL,[qh]:i.EQUAL,[Pl]:i.GEQUAL,[Yh]:i.GREATER,[jh]:i.NOTEQUAL};function Ee(E,b){if(b.type===Vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qt||b.magFilter===Wa||b.magFilter===oo||b.magFilter===zi||b.minFilter===Qt||b.minFilter===Wa||b.minFilter===oo||b.minFilter===zi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,he[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,he[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,he[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Se[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==oo&&b.minFilter!==zi||b.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function We(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",A));let K=b.source,le=h.get(K);le===void 0&&(le={},h.set(K,le));let Q=H(b);if(Q!==E.__cacheKey){le[Q]===void 0&&(le[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),le[Q].usedTimes++;let Ce=le[E.__cacheKey];Ce!==void 0&&(le[E.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(b)),E.__cacheKey=Q,E.__webglTexture=le[Q].texture}return F}function Ke(E,b,F){return Math.floor(Math.floor(E/F)/b)}function at(E,b,F,K){let Q=E.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,F,K,b.data);else{Q.sort((O,ee)=>O.start-ee.start);let Ce=0;for(let O=1;O<Q.length;O++){let ee=Q[Ce],oe=Q[O],de=ee.start+ee.count,re=Ke(oe.start,b.width,4),fe=Ke(ee.start,b.width,4);oe.start<=de+1&&re===fe&&Ke(oe.start+oe.count-1,b.width,4)===re?ee.count=Math.max(ee.count,oe.start+oe.count-ee.start):(++Ce,Q[Ce]=oe)}Q.length=Ce+1;let ge=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),q=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let O=0,ee=Q.length;O<ee;O++){let oe=Q[O],de=Math.floor(oe.start/4),re=Math.ceil(oe.count/4),fe=de%b.width,I=Math.floor(de/b.width),L=re,B=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,fe,I,L,B,F,K,b.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,q)}}function ne(E,b,F){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let le=We(E,b),Q=b.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+F);let Ce=n.get(Q);if(Q.version!==Ce.__version||le===!0){t.activeTexture(i.TEXTURE0+F);let ge=ht.getPrimaries(ht.workingColorSpace),Le=b.colorSpace===gi?null:ht.getPrimaries(b.colorSpace),q=b.colorSpace===gi||ge===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let O=_(b.image,!1,r.maxTextureSize);O=ze(b,O);let ee=s.convert(b.format,b.colorSpace),oe=s.convert(b.type),de=S(b.internalFormat,ee,oe,b.colorSpace,b.isVideoTexture);Ee(K,b);let re,fe=b.mipmaps,I=b.isVideoTexture!==!0,L=Ce.__version===void 0||le===!0,B=Q.dataReady,j=C(b,O);if(b.isDepthTexture)de=v(b.format===Bi,b.type),L&&(I?t.texStorage2D(i.TEXTURE_2D,1,de,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,de,O.width,O.height,0,ee,oe,null));else if(b.isDataTexture)if(fe.length>0){I&&L&&t.texStorage2D(i.TEXTURE_2D,j,de,fe[0].width,fe[0].height);for(let J=0,G=fe.length;J<G;J++)re=fe[J],I?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ee,oe,re.data):t.texImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,ee,oe,re.data);b.generateMipmaps=!1}else I?(L&&t.texStorage2D(i.TEXTURE_2D,j,de,O.width,O.height),B&&at(b,O,ee,oe)):t.texImage2D(i.TEXTURE_2D,0,de,O.width,O.height,0,ee,oe,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,de,fe[0].width,fe[0].height,O.depth);for(let J=0,G=fe.length;J<G;J++)if(re=fe[J],b.format!==Pn)if(ee!==null)if(I){if(B)if(b.layerUpdates.size>0){let ae=sd(re.width,re.height,b.format,b.type);for(let pe of b.layerUpdates){let Ne=re.data.subarray(pe*ae/re.data.BYTES_PER_ELEMENT,(pe+1)*ae/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,pe,re.width,re.height,1,ee,Ne)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,O.depth,ee,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,de,re.width,re.height,O.depth,0,re.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,re.width,re.height,O.depth,ee,oe,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,de,re.width,re.height,O.depth,0,ee,oe,re.data)}else{I&&L&&t.texStorage2D(i.TEXTURE_2D,j,de,fe[0].width,fe[0].height);for(let J=0,G=fe.length;J<G;J++)re=fe[J],b.format!==Pn?ee!==null?I?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ee,re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,re.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,re.width,re.height,ee,oe,re.data):t.texImage2D(i.TEXTURE_2D,J,de,re.width,re.height,0,ee,oe,re.data)}else if(b.isDataArrayTexture)if(I){if(L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,j,de,O.width,O.height,O.depth),B)if(b.layerUpdates.size>0){let J=sd(O.width,O.height,b.format,b.type);for(let G of b.layerUpdates){let ae=O.data.subarray(G*J/O.data.BYTES_PER_ELEMENT,(G+1)*J/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,O.width,O.height,1,ee,oe,ae)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ee,oe,O.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,O.width,O.height,O.depth,0,ee,oe,O.data);else if(b.isData3DTexture)I?(L&&t.texStorage3D(i.TEXTURE_3D,j,de,O.width,O.height,O.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ee,oe,O.data)):t.texImage3D(i.TEXTURE_3D,0,de,O.width,O.height,O.depth,0,ee,oe,O.data);else if(b.isFramebufferTexture){if(L)if(I)t.texStorage2D(i.TEXTURE_2D,j,de,O.width,O.height);else{let J=O.width,G=O.height;for(let ae=0;ae<j;ae++)t.texImage2D(i.TEXTURE_2D,ae,de,J,G,0,ee,oe,null),J>>=1,G>>=1}}else if(fe.length>0){if(I&&L){let J=me(fe[0]);t.texStorage2D(i.TEXTURE_2D,j,de,J.width,J.height)}for(let J=0,G=fe.length;J<G;J++)re=fe[J],I?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ee,oe,re):t.texImage2D(i.TEXTURE_2D,J,de,ee,oe,re);b.generateMipmaps=!1}else if(I){if(L){let J=me(O);t.texStorage2D(i.TEXTURE_2D,j,de,J.width,J.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,oe,O)}else t.texImage2D(i.TEXTURE_2D,0,de,ee,oe,O);g(b)&&p(K),Ce.__version=Q.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function be(E,b,F){if(b.image.length!==6)return;let K=We(E,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let Q=n.get(le);if(le.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+F);let Ce=ht.getPrimaries(ht.workingColorSpace),ge=b.colorSpace===gi?null:ht.getPrimaries(b.colorSpace),Le=b.colorSpace===gi||Ce===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let q=b.isCompressedTexture||b.image[0].isCompressedTexture,O=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let G=0;G<6;G++)!q&&!O?ee[G]=_(b.image[G],!0,r.maxCubemapSize):ee[G]=O?b.image[G].image:b.image[G],ee[G]=ze(b,ee[G]);let oe=ee[0],de=s.convert(b.format,b.colorSpace),re=s.convert(b.type),fe=S(b.internalFormat,de,re,b.colorSpace),I=b.isVideoTexture!==!0,L=Q.__version===void 0||K===!0,B=le.dataReady,j=C(b,oe);Ee(i.TEXTURE_CUBE_MAP,b);let J;if(q){I&&L&&t.texStorage2D(i.TEXTURE_CUBE_MAP,j,fe,oe.width,oe.height);for(let G=0;G<6;G++){J=ee[G].mipmaps;for(let ae=0;ae<J.length;ae++){let pe=J[ae];b.format!==Pn?de!==null?I?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae,fe,pe.width,pe.height,0,pe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae,0,0,pe.width,pe.height,de,re,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae,fe,pe.width,pe.height,0,de,re,pe.data)}}}else{if(J=b.mipmaps,I&&L){J.length>0&&j++;let G=me(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,j,fe,G.width,G.height)}for(let G=0;G<6;G++)if(O){I?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ee[G].width,ee[G].height,de,re,ee[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,fe,ee[G].width,ee[G].height,0,de,re,ee[G].data);for(let ae=0;ae<J.length;ae++){let Ne=J[ae].image[G].image;I?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae+1,0,0,Ne.width,Ne.height,de,re,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae+1,fe,Ne.width,Ne.height,0,de,re,Ne.data)}}else{I?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,de,re,ee[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,fe,de,re,ee[G]);for(let ae=0;ae<J.length;ae++){let pe=J[ae];I?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae+1,0,0,de,re,pe.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,ae+1,fe,de,re,pe.image[G])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Q.__version=le.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function xe(E,b,F,K,le,Q){let Ce=s.convert(F.format,F.colorSpace),ge=s.convert(F.type),Le=S(F.internalFormat,Ce,ge,F.colorSpace),q=n.get(b),O=n.get(F);if(O.__renderTarget=b,!q.__hasExternalTextures){let ee=Math.max(1,b.width>>Q),oe=Math.max(1,b.height>>Q);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,Le,ee,oe,b.depth,0,Ce,ge,null):t.texImage2D(le,Q,Le,ee,oe,0,Ce,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,le,O.__webglTexture,0,T(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,le,O.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(E,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){let K=b.depthTexture,le=K&&K.isDepthTexture?K.type:null,Q=v(b.stencilBuffer,le),Ce=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T(b),Q,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,T(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,E)}else{let K=b.textures;for(let le=0;le<K.length;le++){let Q=K[le],Ce=s.convert(Q.format,Q.colorSpace),ge=s.convert(Q.type),Le=S(Q.internalFormat,Ce,ge,Q.colorSpace);Ve(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T(b),Le,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,T(b),Le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Le,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(E,b,F){let K=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let le=n.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),le.__webglTexture===void 0){le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,b.depthTexture);let q=s.convert(b.depthTexture.format),O=s.convert(b.depthTexture.type),ee;b.depthTexture.format===Kn?ee=i.DEPTH_COMPONENT24:b.depthTexture.format===Bi&&(ee=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ee,b.width,b.height,0,q,O,null)}}else W(b.depthTexture,0);let Q=le.__webglTexture,Ce=T(b),ge=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Le=b.depthTexture.format===Bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Kn)Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,ge,Q,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,Le,ge,Q,0);else if(b.depthTexture.format===Bi)Ve(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,ge,Q,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,Le,ge,Q,0);else throw new Error("Unknown depthTexture format")}function Xe(E){let b=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=K}if(E.depthTexture&&!b.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)Oe(b.__webglFramebuffer[K],E,K);else{let K=E.texture.mipmaps;K&&K.length>0?Oe(b.__webglFramebuffer[0],E,0):Oe(b.__webglFramebuffer,E,0)}else if(F){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Fe(b.__webglDepthbuffer[K],E,!1);else{let le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}else{let K=E.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Fe(b.__webglDepthbuffer,E,!1);else{let le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(E,b,F){let K=n.get(E);b!==void 0&&xe(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Xe(E)}function qe(E){let b=E.texture,F=n.get(E),K=n.get(b);E.addEventListener("dispose",D);let le=E.textures,Q=E.isWebGLCubeRenderTarget===!0,Ce=le.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Q){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let Le=0;Le<b.mipmaps.length;Le++)F.__webglFramebuffer[ge][Le]=i.createFramebuffer()}else F.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)F.__webglFramebuffer[ge]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ge=0,Le=le.length;ge<Le;ge++){let q=n.get(le[ge]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ve(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<le.length;ge++){let Le=le[ge];F.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);let q=s.convert(Le.format,Le.colorSpace),O=s.convert(Le.type),ee=S(Le.internalFormat,q,O,Le.colorSpace,E.isXRRenderTarget===!0),oe=T(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)xe(F.__webglFramebuffer[ge][Le],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le);else xe(F.__webglFramebuffer[ge],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,Le=le.length;ge<Le;ge++){let q=le[ge],O=n.get(q),ee=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,O.__webglTexture),Ee(ee,q),xe(F.__webglFramebuffer,E,q,i.COLOR_ATTACHMENT0+ge,ee,0),g(q)&&p(ee)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),Ee(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let Le=0;Le<b.mipmaps.length;Le++)xe(F.__webglFramebuffer[Le],E,b,i.COLOR_ATTACHMENT0,ge,Le);else xe(F.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,ge,0);g(b)&&p(ge),t.unbindTexture()}E.depthBuffer&&Xe(E)}function se(E){let b=E.textures;for(let F=0,K=b.length;F<K;F++){let le=b[F];if(g(le)){let Q=w(E),Ce=n.get(le).__webglTexture;t.bindTexture(Q,Ce),p(Q),t.unbindTexture()}}}let ue=[],te=[];function ye(E){if(E.samples>0){if(Ve(E)===!1){let b=E.textures,F=E.width,K=E.height,le=i.COLOR_BUFFER_BIT,Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(E),ge=b.length>1;if(ge)for(let q=0;q<b.length;q++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Le=E.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let q=0;q<b.length;q++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[q]);let O=n.get(b[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,le,i.NEAREST),c===!0&&(ue.length=0,te.length=0,ue.push(i.COLOR_ATTACHMENT0+q),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ue.push(Q),te.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let q=0;q<b.length;q++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[q]);let O=n.get(b[q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function T(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){let b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(E){let b=o.render.frame;d.get(E)!==b&&(d.set(E,b),E.update())}function ze(E,b){let F=E.colorSpace,K=E.format,le=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==er&&F!==gi&&(ht.getTransfer(F)===_t?(K!==Pn||le!==mn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",F)),b}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=ie,this.rebindTextures=nt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function m3(i,e){function t(n,r=gi){let s,o=ht.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return i.BYTE;if(n===qc)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===Pn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===ao||n===lo||n===co||n===ho)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===Qa||n===el)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===rl||n===sl||n===ol||n===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===nl)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===il)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return s.COMPRESSED_R11_EAC;if(n===sl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ol)return s.COMPRESSED_RG11_EAC;if(n===al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ll||n===cl||n===dl||n===hl||n===ul||n===fl||n===pl||n===ml||n===gl||n===bl||n===_l||n===xl||n===yl||n===vl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ll)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ml)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===Tl||n===Al||n===Rl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===El)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var g3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
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

}`,xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:g3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends Qn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new xd,p={},w=t.getContextAttributes(),S=null,v=null,C=[],A=[],D=new ce,x=null,y=new an;y.viewport=new It;let U=new an;U.viewport=new It;let R=[y,U],N=new Va,z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let be=C[ne];return be===void 0&&(be=new Wr,C[ne]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ne){let be=C[ne];return be===void 0&&(be=new Wr,C[ne]=be),be.getGripSpace()},this.getHand=function(ne){let be=C[ne];return be===void 0&&(be=new Wr,C[ne]=be),be.getHandSpace()};function W(ne){let be=A.indexOf(ne.inputSource);if(be===-1)return;let xe=C[be];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,l||o),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let ne=0;ne<C.length;ne++){let be=A[ne];be!==null&&(A[ne]=null,C[ne].disconnect(be))}z=null,H=null,g.reset();for(let ne in p)delete p[ne];e.setRenderTarget(S),f=null,h=null,u=null,r=null,v=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Fe=null,Oe=null;w.depth&&(Oe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=w.stencil?Bi:Kn,Fe=w.stencil?ns:kn);let Xe={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Mn(h.textureWidth,h.textureHeight,{format:Pn,type:mn,depthTexture:new Ii(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Mn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(ne){for(let be=0;be<ne.removed.length;be++){let xe=ne.removed[be],Fe=A.indexOf(xe);Fe>=0&&(A[Fe]=null,C[Fe].disconnect(xe))}for(let be=0;be<ne.added.length;be++){let xe=ne.added[be],Fe=A.indexOf(xe);if(Fe===-1){for(let Xe=0;Xe<C.length;Xe++)if(Xe>=A.length){A.push(xe),Fe=Xe;break}else if(A[Xe]===null){A[Xe]=xe,Fe=Xe;break}if(Fe===-1)break}let Oe=C[Fe];Oe&&Oe.connect(xe)}}let ie=new P,he=new P;function Se(ne,be,xe){ie.setFromMatrixPosition(be.matrixWorld),he.setFromMatrixPosition(xe.matrixWorld);let Fe=ie.distanceTo(he),Oe=be.projectionMatrix.elements,Xe=xe.projectionMatrix.elements,nt=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),se=(Oe[9]+1)/Oe[5],ue=(Oe[9]-1)/Oe[5],te=(Oe[8]-1)/Oe[0],ye=(Xe[8]+1)/Xe[0],T=nt*te,Ve=nt*ye,we=Fe/(-te+ye),ze=we*-te;if(be.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ze),ne.translateZ(we),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{let me=nt+we,E=qe+we,b=T-ze,F=Ve+(Fe-ze),K=se*qe/E*me,le=ue*qe/E*me;ne.projectionMatrix.makePerspective(b,F,K,le,me,E),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Me(ne,be){be===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(be.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let be=ne.near,xe=ne.far;g.texture!==null&&(g.depthNear>0&&(be=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),N.near=U.near=y.near=be,N.far=U.far=y.far=xe,(z!==N.near||H!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,H=N.far),N.layers.mask=ne.layers.mask|6,y.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let Fe=ne.parent,Oe=N.cameras;Me(N,Fe);for(let Xe=0;Xe<Oe.length;Xe++)Me(Oe[Xe],Fe);Oe.length===2?Se(N,y,U):N.projectionMatrix.copy(y.projectionMatrix),Ee(ne,N,Fe)};function Ee(ne,be,xe){xe===null?ne.matrix.copy(be.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(be.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(be.projectionMatrix),ne.projectionMatrixInverse.copy(be.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Vr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(ne){c=ne,h!==null&&(h.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(ne){return p[ne]};let We=null;function Ke(ne,be){if(d=be.getViewerPose(l||o),m=be,d!==null){let xe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let qe=0;qe<xe.length;qe++){let se=xe[qe],ue=null;if(f!==null)ue=f.getViewport(se);else{let ye=u.getViewSubImage(h,se);ue=ye.viewport,qe===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let te=R[qe];te===void 0&&(te=new an,te.layers.enable(qe),te.viewport=new It,R[qe]=te),te.matrix.fromArray(se.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(se.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ue.x,ue.y,ue.width,ue.height),qe===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(te)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let qe=u.getDepthInformation(xe[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,r.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<xe.length;qe++){let se=xe[qe].camera;if(se){let ue=p[se];ue||(ue=new Bs,p[se]=ue);let te=u.getCameraImage(se);ue.sourceTexture=te}}}}for(let xe=0;xe<C.length;xe++){let Fe=A[xe],Oe=C[xe];Fe!==null&&Oe!==void 0&&Oe.update(Fe,be,l||o)}We&&We(ne,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),m=null}let at=new Pu;at.setAnimationLoop(Ke),this.setAnimationLoop=function(ne){We=ne},this.dispose=function(){}}},fr=new zn,_3=new ft;function x3(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,S,v){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=e.get(p),S=w.envMap,v=w.envMapRotation;S&&(g.envMap.value=S,fr.copy(v),fr.x*=-1,fr.y*=-1,fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.envMapRotation.value.setFromMatrix4(_3.makeRotationFromEuler(fr)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function y3(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let v=S.program;n.uniformBlockBinding(w,v)}function l(w,S){let v=r[w.id];v===void 0&&(m(w),v=d(w),r[w.id]=v,w.addEventListener("dispose",g));let C=S.program;n.updateUBOMapping(w,C);let A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function d(w){let S=u();w.__bindingPointIndex=S;let v=i.createBuffer(),C=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let S=r[w.id],v=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,D=v.length;A<D;A++){let x=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,U=x.length;y<U;y++){let R=x[y];if(f(R,A,y,C)===!0){let N=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],H=0;for(let W=0;W<z.length;W++){let k=z[W],X=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+H,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,v,C){let A=w.value,D=S+"_"+v;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{let x=C[D];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return C[D]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function m(w){let S=w.uniforms,v=0,C=16;for(let D=0,x=S.length;D<x;D++){let y=Array.isArray(S[D])?S[D]:[S[D]];for(let U=0,R=y.length;U<R;U++){let N=y[U],z=Array.isArray(N.value)?N.value:[N.value];for(let H=0,W=z.length;H<W;H++){let k=z[H],X=_(k),ie=v%C,he=ie%X.boundary,Se=ie+he;v+=he,Se!==0&&C-Se<X.storage&&(v+=C-Se),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=X.storage}}}let A=v%C;return A>0&&(v+=C-A),w.__size=v,w.__cache={},this}function _(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){let S=w.target;S.removeEventListener("dispose",g);let v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var v3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function M3(){return si===null&&(si=new _a(v3,16,16,cr,ri),si.name="DFG_LUT",si.minFilter=Qt,si.magFilter=Qt,si.wrapS=Jn,si.wrapT=Jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ul=class{constructor(e={}){let{canvas:t=Jh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([Ja,Za,ja]),p=new Set([mn,kn,ts,ns,qa,Ya]),w=new Uint32Array(4),S=new Int32Array(4),v=null,C=null,A=[],D=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,U=!1;this._outputColorSpace=Zt;let R=0,N=0,z=null,H=-1,W=null,k=new It,X=new It,ie=null,he=new ot(0),Se=0,Me=t.width,Ee=t.height,We=1,Ke=null,at=null,ne=new It(0,0,Me,Ee),be=new It(0,0,Me,Ee),xe=!1,Fe=new Yr,Oe=!1,Xe=!1,nt=new ft,qe=new P,se=new It,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function ye(){return z===null?We:1}let T=n;function Ve(M,V){return t.getContext(M,V)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),T===null){let V="webgl2";if(T=Ve(V,M),T===null)throw Ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let we,ze,me,E,b,F,K,le,Q,Ce,ge,Le,q,O,ee,oe,de,re,fe,I,L,B,j;function J(){we=new P1(T),we.init(),L=new m3(T,we),ze=new M1(T,we,e,L),me=new f3(T,we),ze.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),E=new L1(T),b=new Qg,F=new p3(T,we,me,b,ze,L,E),K=new C1(y),le=new zf(T),B=new y1(T,le),Q=new I1(T,le,E,B),Ce=new U1(T,Q,le,B,E),re=new N1(T,ze,F),ee=new S1(b),ge=new Kg(y,K,we,ze,B,ee),Le=new x3(y,b),q=new t3,O=new a3(we),de=new x1(y,K,me,Ce,m,c),oe=new u3(y,Ce,ze),j=new y3(T,E,ze,me),fe=new v1(T,we,E),I=new D1(T,we,E),E.programs=ge.programs,y.capabilities=ze,y.extensions=we,y.properties=b,y.renderLists=q,y.shadowMap=oe,y.state=me,y.info=E}J(),_!==mn&&(x=new O1(_,t.width,t.height,r,s));let G=new yd(y,T);this.xr=G,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=we.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=we.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(M){M!==void 0&&(We=M,this.setSize(Me,Ee,!1))},this.getSize=function(M){return M.set(Me,Ee)},this.setSize=function(M,V,$=!0){if(G.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,Ee=V,t.width=Math.floor(M*We),t.height=Math.floor(V*We),$===!0&&(t.style.width=M+"px",t.style.height=V+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(Me*We,Ee*We).floor()},this.setDrawingBufferSize=function(M,V,$){Me=M,Ee=V,We=$,t.width=Math.floor(M*$),t.height=Math.floor(V*$),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(_===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(k)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,V,$,Z){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,V,$,Z),me.viewport(k.copy(ne).multiplyScalar(We).round())},this.getScissor=function(M){return M.copy(be)},this.setScissor=function(M,V,$,Z){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,V,$,Z),me.scissor(X.copy(be).multiplyScalar(We).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(M){me.setScissorTest(xe=M)},this.setOpaqueSort=function(M){Ke=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,$=!0){let Z=0;if(M){let Y=!1;if(z!==null){let Ae=z.texture.format;Y=g.has(Ae)}if(Y){let Ae=z.texture.type,Ie=p.has(Ae),Re=de.getClearColor(),Ue=de.getClearAlpha(),ke=Re.r,Qe=Re.g,st=Re.b;Ie?(w[0]=ke,w[1]=Qe,w[2]=st,w[3]=Ue,T.clearBufferuiv(T.COLOR,0,w)):(S[0]=ke,S[1]=Qe,S[2]=st,S[3]=Ue,T.clearBufferiv(T.COLOR,0,S))}else Z|=T.COLOR_BUFFER_BIT}V&&(Z|=T.DEPTH_BUFFER_BIT),$&&(Z|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&T.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),de.dispose(),q.dispose(),O.dispose(),b.dispose(),K.dispose(),Ce.dispose(),B.dispose(),j.dispose(),ge.dispose(),G.dispose(),G.removeEventListener("sessionstart",Rt),G.removeEventListener("sessionend",$e),ct.stop()};function ae(M){M.preventDefault(),Ps("WebGLRenderer: Context Lost."),U=!0}function pe(){Ps("WebGLRenderer: Context Restored."),U=!1;let M=E.autoReset,V=oe.enabled,$=oe.autoUpdate,Z=oe.needsUpdate,Y=oe.type;J(),E.autoReset=M,oe.enabled=V,oe.autoUpdate=$,oe.needsUpdate=Z,oe.type=Y}function Ne(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ve(M){let V=M.target;V.removeEventListener("dispose",ve),lt(V)}function lt(M){De(M),b.remove(M)}function De(M){let V=b.get(M).programs;V!==void 0&&(V.forEach(function($){ge.releaseProgram($)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,$,Z,Y,Ae){V===null&&(V=ue);let Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,Re=o0(M,V,$,Z,Y);me.setMaterial(Z,Ie);let Ue=$.index,ke=1;if(Z.wireframe===!0){if(Ue=Q.getWireframeAttribute($),Ue===void 0)return;ke=2}let Qe=$.drawRange,st=$.attributes.position,He=Qe.start*ke,Mt=(Qe.start+Qe.count)*ke;Ae!==null&&(He=Math.max(He,Ae.start*ke),Mt=Math.min(Mt,(Ae.start+Ae.count)*ke)),Ue!==null?(He=Math.max(He,0),Mt=Math.min(Mt,Ue.count)):st!=null&&(He=Math.max(He,0),Mt=Math.min(Mt,st.count));let Ot=Mt-He;if(Ot<0||Ot===1/0)return;B.setup(Y,Z,Re,$,Ue);let Nt,St=fe;if(Ue!==null&&(Nt=le.get(Ue),St=I,St.setIndex(Nt)),Y.isMesh)Z.wireframe===!0?(me.setLineWidth(Z.wireframeLinewidth*ye()),St.setMode(T.LINES)):St.setMode(T.TRIANGLES);else if(Y.isLine){let rn=Z.linewidth;rn===void 0&&(rn=1),me.setLineWidth(rn*ye()),Y.isLineSegments?St.setMode(T.LINES):Y.isLineLoop?St.setMode(T.LINE_LOOP):St.setMode(T.LINE_STRIP)}else Y.isPoints?St.setMode(T.POINTS):Y.isSprite&&St.setMode(T.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let rn=Y._multiDrawStarts,Be=Y._multiDrawCounts,_n=Y._multiDrawCount,mt=Ue?le.get(Ue).bytesPerElement:1,Dn=b.get(Z).currentProgram.getUniforms();for(let Yn=0;Yn<_n;Yn++)Dn.setValue(T,"_gl_DrawID",Yn),St.render(rn[Yn]/mt,Be[Yn])}else if(Y.isInstancedMesh)St.renderInstances(He,Ot,Y.count);else if($.isInstancedBufferGeometry){let rn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Be=Math.min($.instanceCount,rn);St.renderInstances(He,Ot,Be)}else St.render(He,Ot)};function Ze(M,V,$){M.transparent===!0&&M.side===en&&M.forceSinglePass===!1?(M.side=fn,M.needsUpdate=!0,Wi(M,V,$),M.side=pi,M.needsUpdate=!0,Wi(M,V,$),M.side=en):Wi(M,V,$)}this.compile=function(M,V,$=null){$===null&&($=M),C=O.get($),C.init(V),D.push(C),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),M!==$&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(C.pushLight(Y),Y.castShadow&&C.pushShadow(Y))}),C.setupLights();let Z=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){let Re=Ae[Ie];Ze(Re,$,Y),Z.add(Re)}else Ze(Ae,$,Y),Z.add(Ae)}),C=D.pop(),Z},this.compileAsync=function(M,V,$=null){let Z=this.compile(M,V,$);return new Promise(Y=>{function Ae(){if(Z.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&Z.delete(Ie)}),Z.size===0){Y(M);return}setTimeout(Ae,10)}we.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Tt=null;function Lt(M){Tt&&Tt(M)}function Rt(){ct.stop()}function $e(){ct.start()}let ct=new Pu;ct.setAnimationLoop(Lt),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(M){Tt=M,G.setAnimationLoop(M),M===null?ct.stop():ct.start()},G.addEventListener("sessionstart",Rt),G.addEventListener("sessionend",$e),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;let $=G.enabled===!0&&G.isPresenting===!0,Z=x!==null&&(z===null||$)&&x.begin(y,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(V),V=G.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,V,z),C=O.get(M,D.length),C.init(V),D.push(C),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Fe.setFromProjectionMatrix(nt,On,V.reversedDepth),Xe=this.localClippingEnabled,Oe=ee.init(this.clippingPlanes,Xe),v=q.get(M,A.length),v.init(),A.push(v),G.enabled===!0&&G.isPresenting===!0){let Ie=y.xr.getDepthSensingMesh();Ie!==null&&dt(Ie,V,-1/0,y.sortObjects)}dt(M,V,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Ke,at),te=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,te&&de.addToRenderList(v,M),this.info.render.frame++,Oe===!0&&ee.beginShadows();let Y=C.state.shadowsArray;if(oe.render(Y,M,V),Oe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&x.hasRenderPass())===!1){let Ie=v.opaque,Re=v.transmissive;if(C.setupLights(),V.isArrayCamera){let Ue=V.cameras;if(Re.length>0)for(let ke=0,Qe=Ue.length;ke<Qe;ke++){let st=Ue[ke];Ut(Ie,Re,M,st)}te&&de.render(M);for(let ke=0,Qe=Ue.length;ke<Qe;ke++){let st=Ue[ke];Bt(v,M,st,st.viewport)}}else Re.length>0&&Ut(Ie,Re,M,V),te&&de.render(M),Bt(v,M,V)}z!==null&&N===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),Z&&x.end(y),M.isScene===!0&&M.onAfterRender(y,M,V),B.resetDefaultState(),H=-1,W=null,D.pop(),D.length>0?(C=D[D.length-1],Oe===!0&&ee.setGlobalState(y.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?v=A[A.length-1]:v=null};function dt(M,V,$,Z){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Fe.intersectsSprite(M)){Z&&se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nt);let Ie=Ce.update(M),Re=M.material;Re.visible&&v.push(M,Ie,Re,$,se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Fe.intersectsObject(M))){let Ie=Ce.update(M),Re=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),se.copy(M.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),se.copy(Ie.boundingSphere.center)),se.applyMatrix4(M.matrixWorld).applyMatrix4(nt)),Array.isArray(Re)){let Ue=Ie.groups;for(let ke=0,Qe=Ue.length;ke<Qe;ke++){let st=Ue[ke],He=Re[st.materialIndex];He&&He.visible&&v.push(M,Ie,He,$,se.z,st)}}else Re.visible&&v.push(M,Ie,Re,$,se.z,null)}}let Ae=M.children;for(let Ie=0,Re=Ae.length;Ie<Re;Ie++)dt(Ae[Ie],V,$,Z)}function Bt(M,V,$,Z){let{opaque:Y,transmissive:Ae,transparent:Ie}=M;C.setupLightsView($),Oe===!0&&ee.setGlobalState(y.clippingPlanes,$),Z&&me.viewport(k.copy(Z)),Y.length>0&&Ft(Y,V,$),Ae.length>0&&Ft(Ae,V,$),Ie.length>0&&Ft(Ie,V,$),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ut(M,V,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let He=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new Mn(1,1,{generateMipmaps:!0,type:He?ri:mn,minFilter:zi,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Ae=C.state.transmissionRenderTarget[Z.id],Ie=Z.viewport||k;Ae.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);let Re=y.getRenderTarget(),Ue=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(Ae),y.getClearColor(he),Se=y.getClearAlpha(),Se<1&&y.setClearColor(16777215,.5),y.clear(),te&&de.render($);let Qe=y.toneMapping;y.toneMapping=Bn;let st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),Oe===!0&&ee.setGlobalState(y.clippingPlanes,Z),Ft(M,$,Z),F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae),we.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Mt=0,Ot=V.length;Mt<Ot;Mt++){let Nt=V[Mt],{object:St,geometry:rn,material:Be,group:_n}=Nt;if(Be.side===en&&St.layers.test(Z.layers)){let mt=Be.side;Be.side=fn,Be.needsUpdate=!0,ps(St,$,Z,rn,Be,_n),Be.side=mt,Be.needsUpdate=!0,He=!0}}He===!0&&(F.updateMultisampleRenderTarget(Ae),F.updateRenderTargetMipmap(Ae))}y.setRenderTarget(Re,Ue,ke),y.setClearColor(he,Se),st!==void 0&&(Z.viewport=st),y.toneMapping=Qe}function Ft(M,V,$){let Z=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Ae=M.length;Y<Ae;Y++){let Ie=M[Y],{object:Re,geometry:Ue,group:ke}=Ie,Qe=Ie.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Re.layers.test($.layers)&&ps(Re,V,$,Ue,Qe,ke)}}function ps(M,V,$,Z,Y,Ae){M.onBeforeRender(y,V,$,Z,Y,Ae),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(y,V,$,Z,M,Ae),Y.transparent===!0&&Y.side===en&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,y.renderBufferDirect($,V,Z,Y,M,Ae),Y.side=pi,Y.needsUpdate=!0,y.renderBufferDirect($,V,Z,Y,M,Ae),Y.side=en):y.renderBufferDirect($,V,Z,Y,M,Ae),M.onAfterRender(y,V,$,Z,Y,Ae)}function Wi(M,V,$){V.isScene!==!0&&(V=ue);let Z=b.get(M),Y=C.state.lights,Ae=C.state.shadowsArray,Ie=Y.state.version,Re=ge.getParameters(M,Y.state,Ae,V,$),Ue=ge.getProgramCacheKey(Re),ke=Z.programs;Z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Z.envMap=K.get(M.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,ke===void 0&&(M.addEventListener("dispose",ve),ke=new Map,Z.programs=ke);let st=ke.get(Ue);if(st!==void 0){if(Z.currentProgram===st&&Z.lightsStateVersion===Ie)return Od(M,Re),st}else Re.uniforms=ge.getUniforms(M),M.onBeforeCompile(Re,y),st=ge.acquireProgram(Re,Ue),ke.set(Ue,st),Z.uniforms=Re.uniforms;let He=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=ee.uniform),Od(M,Re),Z.needsLights=l0(M),Z.lightsStateVersion=Ie,Z.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=st,Z.uniformsList=null,st}function Fd(M){if(M.uniformsList===null){let V=M.currentProgram.getUniforms();M.uniformsList=rs.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function Od(M,V){let $=b.get(M);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function o0(M,V,$,Z,Y){V.isScene!==!0&&(V=ue),F.resetTextureUnits();let Ae=V.fog,Ie=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Re=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:er,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=K.get(Z.envMap||Ie,Ue),Qe=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!$.morphAttributes.position,Mt=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color,Nt=Bn;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Nt=y.toneMapping);let St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rn=St!==void 0?St.length:0,Be=b.get(Z),_n=C.state.lights;if(Oe===!0&&(Xe===!0||M!==W)){let Yt=M===W&&Z.id===H;ee.setState(Z,M,Yt)}let mt=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_n.state.version||Be.outputColorSpace!==Re||Y.isBatchedMesh&&Be.batching===!1||!Y.isBatchedMesh&&Be.batching===!0||Y.isBatchedMesh&&Be.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Be.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Be.instancing===!1||!Y.isInstancedMesh&&Be.instancing===!0||Y.isSkinnedMesh&&Be.skinning===!1||!Y.isSkinnedMesh&&Be.skinning===!0||Y.isInstancedMesh&&Be.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Be.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Be.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Be.instancingMorph===!1&&Y.morphTexture!==null||Be.envMap!==ke||Z.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ee.numPlanes||Be.numIntersection!==ee.numIntersection)||Be.vertexAlphas!==Qe||Be.vertexTangents!==st||Be.morphTargets!==He||Be.morphNormals!==Mt||Be.morphColors!==Ot||Be.toneMapping!==Nt||Be.morphTargetsCount!==rn)&&(mt=!0):(mt=!0,Be.__version=Z.version);let Dn=Be.currentProgram;mt===!0&&(Dn=Wi(Z,V,Y));let Yn=!1,Xi=!1,xr=!1,At=Dn.getUniforms(),$t=Be.uniforms;if(me.useProgram(Dn.program)&&(Yn=!0,Xi=!0,xr=!0),Z.id!==H&&(H=Z.id,Xi=!0),Yn||W!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(T,"projectionMatrix",M.projectionMatrix),At.setValue(T,"viewMatrix",M.matrixWorldInverse);let yi=At.map.cameraPosition;yi!==void 0&&yi.setValue(T,qe.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&At.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,Xi=!0,xr=!0)}if(Be.needsLights&&(_n.state.directionalShadowMap.length>0&&At.setValue(T,"directionalShadowMap",_n.state.directionalShadowMap,F),_n.state.spotShadowMap.length>0&&At.setValue(T,"spotShadowMap",_n.state.spotShadowMap,F),_n.state.pointShadowMap.length>0&&At.setValue(T,"pointShadowMap",_n.state.pointShadowMap,F)),Y.isSkinnedMesh){At.setOptional(T,Y,"bindMatrix"),At.setOptional(T,Y,"bindMatrixInverse");let Yt=Y.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),At.setValue(T,"boneTexture",Yt.boneTexture,F))}Y.isBatchedMesh&&(At.setOptional(T,Y,"batchingTexture"),At.setValue(T,"batchingTexture",Y._matricesTexture,F),At.setOptional(T,Y,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",Y._indirectTexture,F),At.setOptional(T,Y,"batchingColorTexture"),Y._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",Y._colorsTexture,F));let xi=$.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&re.update(Y,$,Dn),(Xi||Be.receiveShadow!==Y.receiveShadow)&&(Be.receiveShadow=Y.receiveShadow,At.setValue(T,"receiveShadow",Y.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&($t.envMapIntensity.value=V.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=M3()),Xi&&(At.setValue(T,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&a0($t,xr),Ae&&Z.fog===!0&&Le.refreshFogUniforms($t,Ae),Le.refreshMaterialUniforms($t,Z,We,Ee,C.state.transmissionRenderTarget[M.id]),rs.upload(T,Fd(Be),$t,F)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(rs.upload(T,Fd(Be),$t,F),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&At.setValue(T,"center",Y.center),At.setValue(T,"modelViewMatrix",Y.modelViewMatrix),At.setValue(T,"normalMatrix",Y.normalMatrix),At.setValue(T,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Yt=Z.uniformsGroups;for(let yi=0,yr=Yt.length;yi<yr;yi++){let zd=Yt[yi];j.update(zd,Dn),j.bind(zd,Dn)}}return Dn}function a0(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function l0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,V,$){let Z=b.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),b.get(M.texture).__webglTexture=V,b.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){let $=b.get(M);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};let c0=T.createFramebuffer();this.setRenderTarget=function(M,V=0,$=0){z=M,R=V,N=$;let Z=null,Y=!1,Ae=!1;if(M){let Re=b.get(M);if(Re.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(T.FRAMEBUFFER,Re.__webglFramebuffer),k.copy(M.viewport),X.copy(M.scissor),ie=M.scissorTest,me.viewport(k),me.scissor(X),me.setScissorTest(ie),H=-1;return}else if(Re.__webglFramebuffer===void 0)F.setupRenderTarget(M);else if(Re.__hasExternalTextures)F.rebindTextures(M,b.get(M.texture).__webglTexture,b.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qe=M.depthTexture;if(Re.__boundDepthTexture!==Qe){if(Qe!==null&&b.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(M)}}let Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ae=!0);let ke=b.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?Z=ke[V][$]:Z=ke[V],Y=!0):M.samples>0&&F.useMultisampledRTT(M)===!1?Z=b.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[$]:Z=ke,k.copy(M.viewport),X.copy(M.scissor),ie=M.scissorTest}else k.copy(ne).multiplyScalar(We).floor(),X.copy(be).multiplyScalar(We).floor(),ie=xe;if($!==0&&(Z=c0),me.bindFramebuffer(T.FRAMEBUFFER,Z)&&me.drawBuffers(M,Z),me.viewport(k),me.scissor(X),me.setScissorTest(ie),Y){let Re=b.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,Re.__webglTexture,$)}else if(Ae){let Re=V;for(let Ue=0;Ue<M.textures.length;Ue++){let ke=b.get(M.textures[Ue]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,$,Re)}}else if(M!==null&&$!==0){let Re=b.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Re.__webglTexture,$)}H=-1},this.readRenderTargetPixels=function(M,V,$,Z,Y,Ae,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){me.bindFramebuffer(T.FRAMEBUFFER,Ue);try{let ke=M.textures[Re],Qe=ke.format,st=ke.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!ze.textureFormatReadable(Qe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(st)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-Z&&$>=0&&$<=M.height-Y&&T.readPixels(V,$,Z,Y,L.convert(Qe),L.convert(st),Ae)}finally{let ke=z!==null?b.get(z).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(M,V,$,Z,Y,Ae,Ie,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=b.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(V>=0&&V<=M.width-Z&&$>=0&&$<=M.height-Y){me.bindFramebuffer(T.FRAMEBUFFER,Ue);let ke=M.textures[Re],Qe=ke.format,st=ke.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Re),!ze.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,Ae.byteLength,T.STREAM_READ),T.readPixels(V,$,Z,Y,L.convert(Qe),L.convert(st),0);let Mt=z!==null?b.get(z).__webglFramebuffer:null;me.bindFramebuffer(T.FRAMEBUFFER,Mt);let Ot=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Kh(T,Ot,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ae),T.deleteBuffer(He),T.deleteSync(Ot),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,$=0){let Z=Math.pow(2,-$),Y=Math.floor(M.image.width*Z),Ae=Math.floor(M.image.height*Z),Ie=V!==null?V.x:0,Re=V!==null?V.y:0;F.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,$,0,0,Ie,Re,Y,Ae),me.unbindTexture()};let d0=T.createFramebuffer(),h0=T.createFramebuffer();this.copyTextureToTexture=function(M,V,$=null,Z=null,Y=0,Ae=0){let Ie,Re,Ue,ke,Qe,st,He,Mt,Ot,Nt=M.isCompressedTexture?M.mipmaps[Ae]:M.image;if($!==null)Ie=$.max.x-$.min.x,Re=$.max.y-$.min.y,Ue=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Qe=$.min.y,st=$.isBox3?$.min.z:0;else{let $t=Math.pow(2,-Y);Ie=Math.floor(Nt.width*$t),Re=Math.floor(Nt.height*$t),M.isDataArrayTexture?Ue=Nt.depth:M.isData3DTexture?Ue=Math.floor(Nt.depth*$t):Ue=1,ke=0,Qe=0,st=0}Z!==null?(He=Z.x,Mt=Z.y,Ot=Z.z):(He=0,Mt=0,Ot=0);let St=L.convert(V.format),rn=L.convert(V.type),Be;V.isData3DTexture?(F.setTexture3D(V,0),Be=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(F.setTexture2DArray(V,0),Be=T.TEXTURE_2D_ARRAY):(F.setTexture2D(V,0),Be=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let _n=T.getParameter(T.UNPACK_ROW_LENGTH),mt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Dn=T.getParameter(T.UNPACK_SKIP_PIXELS),Yn=T.getParameter(T.UNPACK_SKIP_ROWS),Xi=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Nt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Nt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,st);let xr=M.isDataArrayTexture||M.isData3DTexture,At=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){let $t=b.get(M),xi=b.get(V),Yt=b.get($t.__renderTarget),yi=b.get(xi.__renderTarget);me.bindFramebuffer(T.READ_FRAMEBUFFER,Yt.__webglFramebuffer),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let yr=0;yr<Ue;yr++)xr&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,b.get(M).__webglTexture,Y,st+yr),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,b.get(V).__webglTexture,Ae,Ot+yr)),T.blitFramebuffer(ke,Qe,Ie,Re,He,Mt,Ie,Re,T.DEPTH_BUFFER_BIT,T.NEAREST);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||b.has(M)){let $t=b.get(M),xi=b.get(V);me.bindFramebuffer(T.READ_FRAMEBUFFER,d0),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,h0);for(let Yt=0;Yt<Ue;Yt++)xr?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,$t.__webglTexture,Y,st+Yt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,$t.__webglTexture,Y),At?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xi.__webglTexture,Ae,Ot+Yt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,xi.__webglTexture,Ae),Y!==0?T.blitFramebuffer(ke,Qe,Ie,Re,He,Mt,Ie,Re,T.COLOR_BUFFER_BIT,T.NEAREST):At?T.copyTexSubImage3D(Be,Ae,He,Mt,Ot+Yt,ke,Qe,Ie,Re):T.copyTexSubImage2D(Be,Ae,He,Mt,ke,Qe,Ie,Re);me.bindFramebuffer(T.READ_FRAMEBUFFER,null),me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else At?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(Be,Ae,He,Mt,Ot,Ie,Re,Ue,St,rn,Nt.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(Be,Ae,He,Mt,Ot,Ie,Re,Ue,St,Nt.data):T.texSubImage3D(Be,Ae,He,Mt,Ot,Ie,Re,Ue,St,rn,Nt):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ae,He,Mt,Ie,Re,St,rn,Nt.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ae,He,Mt,Nt.width,Nt.height,St,Nt.data):T.texSubImage2D(T.TEXTURE_2D,Ae,He,Mt,Ie,Re,St,rn,Nt);T.pixelStorei(T.UNPACK_ROW_LENGTH,_n),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,mt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Dn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Yn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Xi),Ae===0&&V.generateMipmaps&&T.generateMipmap(Be),me.unbindTexture()},this.initRenderTarget=function(M){b.get(M).__webglFramebuffer===void 0&&F.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?F.setTextureCube(M,0):M.isData3DTexture?F.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?F.setTexture2DArray(M,0):F.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){R=0,N=0,z=null,me.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Uu={type:"change"},Md={type:"start"},Ou={type:"end"},zl=new Ri,Fu=new pn,S3=Math.cos(70*dr.DEG2RAD),Xt=new P,gn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6,Bl=class extends no{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new vn,this._lastTargetPosition=new P,this._quat=new vn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qr,this._sphericalDelta=new Qr,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E3.bind(this),this._onPointerDown=w3.bind(this),this._onPointerUp=T3.bind(this),this._onContextMenu=L3.bind(this),this._onMouseWheel=C3.bind(this),this._onKeyDown=P3.bind(this),this._onTouchStart=I3.bind(this),this._onTouchMove=D3.bind(this),this._onMouseDown=A3.bind(this),this._onMouseMove=R3.bind(this),this._interceptControlDown=N3.bind(this),this._interceptControlUp=U3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Xt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<S3?this.object.lookAt(this.target):(Fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(Fu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xt.copy(r).sub(this.target);let s=Xt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function w3(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function E3(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T3(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ou),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function A3(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Md)}function R3(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C3(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ou))}function P3(i){this.enabled!==!1&&this._handleKeyDown(i)}function I3(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Md)}function D3(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function L3(i){this.enabled!==!1&&i.preventDefault()}function N3(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U3(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mo(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new vt,l=0;for(let d=0;d<i.length;++d){let u=i[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,d),l+=f}}if(t){let d=0,u=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+d);d+=i[h].attributes.position.count}c.setIndex(u)}for(let d in s){let u=zu(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,u)}for(let d in o){let u=o[d][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let h=0;h<u;++h){let f=[];for(let _=0;_<o[d].length;++_)f.push(o[d][_][h]);let m=zu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(m)}}return c}function zu(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let d=i[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new Kt(o,t,n),c=0;for(let l=0;l<i.length;++l){let d=i[l];if(d.isInterleavedBufferAttribute){let u=c/t;for(let h=0,f=d.count;h<f;h++)for(let m=0;m<t;m++){let _=d.getComponent(h,m);a.setComponent(h+u,m,_)}}else o.set(d.array,c);c+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var Bu=.4166666666666667,F3=.24,Sd=new Map,O3=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function wd(i,e=0,t=[],n=2){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");for(let l of t)if(!Number.isInteger(l.at)||l.at<=0||l.at>=i||![0,1].includes(l.layer)||!["left","right","seam"].includes(l.side))throw new Error("Invalid native junction band");let r=JSON.stringify([i,e,t,n]);if(Sd.has(r))return Sd.get(r).map(l=>({...l}));let s=[0,1].map(l=>new Set(t.filter(d=>d.layer===l).map(d=>d.at))),o=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let l=1;l<=i;l++){let d=new Map;for(let u of o.values())for(let h of[!1,!0])for(let f of[!1,!0]){let m=[h,f];if(l<i&&h&&f&&!(s[0].has(l)&&s[1].has(l)))continue;let _=[...u.starts],g=[...u.score],p=[],w=!0;for(let C of[0,1]){let A=_[C],D=l-A,x=C^e;if(D>6||!m[C]&&(l===i||D===6||s[C].has(l))){w=!1;break}if(!m[C])continue;let y=x===1&&A===0||t.some(N=>N.layer===C&&N.at===A&&N.side==="left"),U=x===1&&l===i||t.some(N=>N.layer===C&&N.at===l&&N.side==="right");if(y&&U){w=!1;break}let R=y?"left":U?"right":null;g[0]+=+(D===1&&!!R),g[1]+=+(D===1),g[2]++,g[3]+=1/(D*Bu-(R?F3:0)),x===1&&A===0&&(g[4]+=Math.abs(D-n)),p.push({pixels:D,start:A*Bu,layer:x,trim:R}),_[C]=l}if(!w)continue;let S=_.join(","),v=d.get(S);(!v||O3(g,v.score))&&d.set(S,{starts:_,score:g,pieces:[...u.pieces,...p]})}o=d}let a=o.get(`${i},${i}`);if(!a)throw new Error("No native staggered stock layout: "+r);let c=a.pieces.sort((l,d)=>d.layer-l.layer||l.start-d.start);return Sd.set(r,c),c.map(l=>({...l}))}function kl(i,e=2){return wd(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var ku={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};var _e=2.5/6,tt=.24,Ge=.018,Je=tt/2,bn=new P(1,0,0),Hn=new P(0,1,0),Gn=new P(0,0,1),Et=1e-7;function Ed(i={},e={}){let t=i.wood||new Ht({color:"#ba7c43",roughness:.85}),n=i.end||t,r=new ut;r.name="Combstruct 30 \u2014 w\u0119z\u0142y w jednej osi";let s=q=>{let O=new ut;return O.name=q,r.add(O),O},o={floor:s("P\u0142yta pod\u0142ogowa i ci\u0105g\u0142y taras"),walls:["rear","left","front","right"].map(q=>s(q)),partitions:s("\u015Aciany wewn\u0119trzne"),ceiling:s("Sufit"),roof:s("Dach 35\xB0"),gables:s("Poziome rz\u0119dy szczyt\xF3w"),pergola:s("Pergola")},a=13*_e,c=15*_e,l=7*_e,d=-a/2,u=a/2,h=-c/2,f=c/2,m=h-l,_=8,g=_*_e,p=g-tt,w=g,S=35*Math.PI/180,v=Math.sin(S),C=Math.cos(S),A=Math.tan(S),D=w,x=D+A*a/2,y=x+tt/C,U={width:a,depth:c,halfWidth:a/2,halfDepth:c/2,terraceDepth:l,terraceRearZ:m,wallDepth:tt,floorBottom:0,floorTop:tt,wallTop:g,ceilingBottom:p,ceilingTop:w,clearHeight:p-tt,roofAngle:35,roofEaveY:D,roofUnderRidgeY:x,roofRidgeY:y,roofOverhang:_e,module:_e,boardDepth:tt,boardThickness:Ge,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:_e,constructionOnly:!0},R=[],N=[],z=[],H={rear:[],left:[],front:[],right:[],partitions:[]},W=0,k=kl;function X(q,O,ee,oe){let de=[];for(let re=0;re<q.length;re++){let fe=q[re],I=q[(re+1)%q.length],L=oe*(fe[O]-ee),B=oe*(I[O]-ee);L>=-Et&&de.push(fe.clone()),L>=-Et!=B>=-Et&&de.push(fe.clone().lerp(I,L/(L-B)))}return de}function ie(q){let O=q.pixels*_e,ee=[new ce(0,0),new ce(O,0),new ce(O,Je),new ce(O-Ge,Je),new ce(O-Ge,tt)];for(let B=q.pixels-1;B>=1;B--){let j=B*_e;ee.push(new ce(j+Ge,tt),new ce(j+Ge,Je),new ce(j-Ge,Je),new ce(j-Ge,tt))}ee.push(new ce(Ge,tt),new ce(Ge,Je),new ce(0,Je));let oe=ee,de=Math.max(q.minCut||0,q.trim==="left"?tt:0),re=Math.min(q.limit??O,q.trim==="right"?O-tt:O);if(re<=de+Et||(de>Et&&(oe=X(oe,"x",de,1)),re<O-Et&&(oe=X(oe,"x",re,-1)),oe.length<3))return null;let fe=new ni(oe);fe.closePath();let I=new mi(fe,{depth:Ge,bevelEnabled:!1,curveSegments:1});I.translate(0,-Je,0);let L=I.getAttribute("uv");for(let B=0;B<L.count;B++)L.setXY(B,L.getX(B)/2.5,L.getY(B)/tt);return I}function he(q,O,ee,oe=[],de=null){let re=Math.max(q.minCut||0,q.trim==="left"?tt:0),fe=Math.min(q.limit??q.pixels*_e,q.trim==="right"?q.pixels*_e-tt:q.pixels*_e);de&&(re=Math.max(re,de[0]-q.start),fe=Math.min(fe,de[1]-q.start));let I=fe>re+Et?[[re,fe]]:[];for(let L of oe){let B=O===0?L.v0:L.u0,j=O===0?L.v1:L.u1;if(ee+Ge<=B+Et||ee>=j-Et)continue;let J=(O===0?L.u0:L.v0)-q.start,G=(O===0?L.u1:L.v1)-q.start;I=I.flatMap(([ae,pe])=>G<=ae||J>=pe?[[ae,pe]]:[[ae,Math.min(pe,J)],[Math.max(ae,G),pe]].filter(([Ne,ve])=>ve>Ne+Et))}return I.map(([L,B])=>({...q,minCut:L,limit:B}))}function Se(q,O,ee,oe){let de=q.pixels*_e,re=Math.max(q.minCut||0,q.trim==="left"?tt:0),fe=Math.min(q.limit??de,q.trim==="right"?de-tt:de);if(fe<=re+Et)return null;let I=[[0,Ge],[de-Ge,de]];for(let De=1;De<q.pixels;De++)I.push([De*_e-Ge,De*_e+Ge]);let L=(q.connectorCuts||[]).map(De=>({x0:De.end==="start"?De.offset||0:de-(De.offset||0)-Je,x1:De.end==="start"?(De.offset||0)+Je:de-(De.offset||0),y0:De.edge==="slotted"?Je-Ge:-Je,y1:De.edge==="slotted"?Je:-Je+Ge})),B=[re,fe];for(let De of I)for(let Ze of De)Ze>re+Et&&Ze<fe-Et&&B.push(Ze);for(let De of L)for(let Ze of[De.x0,De.x1])Ze>re+Et&&Ze<fe-Et&&B.push(Ze);B.sort((De,Ze)=>De-Ze);let j=new Map,J=!1,G=De=>`${Math.round(De.x*1e8)},${Math.round(De.y*1e8)},${Math.round(De.z*1e8)}`;function ae(De,Ze){let Tt=[],Lt=[];for(let $e of De){let ct=[];for(let dt=0;dt<$e.length;dt++){let Bt=$e[dt],Ut=$e[(dt+1)%$e.length],Ft=Ze.c-Ze.n.dot(Bt.clone().add(ee)),ps=Ze.c-Ze.n.dot(Ut.clone().add(ee));if(Ft>=-Et?ct.push(Bt):J=!0,Ft>=-Et!=ps>=-Et){let Wi=Bt.clone().lerp(Ut,Ft/(Ft-ps));ct.push(Wi),Lt.push(Wi)}}ct.length>=3&&Tt.push(ct)}let Rt=[...new Map(Lt.map($e=>[G($e),$e])).values()];if(Rt.length>=3){let $e=Rt.reduce((Ut,Ft)=>Ut.add(Ft),new P).divideScalar(Rt.length),ct=Ze.n.clone().normalize(),dt=(Math.abs(ct.y)>.9?bn:Hn).clone().cross(ct).normalize(),Bt=ct.clone().cross(dt);Rt.sort((Ut,Ft)=>Math.atan2(Ut.clone().sub($e).dot(Bt),Ut.clone().sub($e).dot(dt))-Math.atan2(Ft.clone().sub($e).dot(Bt),Ft.clone().sub($e).dot(dt))),Tt.push(Rt)}return Tt}function pe(De,Ze,Tt,Lt){let Rt=[[De,Tt,0],[Ze,Tt,0],[Ze,Lt,0],[De,Lt,0],[De,Tt,Ge],[Ze,Tt,Ge],[Ze,Lt,Ge],[De,Lt,Ge]].map(ct=>new P(...ct).applyMatrix4(O)),$e=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(ct=>ct.map(dt=>Rt[dt]));O.determinant()<0&&$e.forEach(ct=>ct.reverse());for(let ct of oe)if($e=ae($e,ct),!$e.length)return;for(let ct of $e){let dt=ct.filter((Ut,Ft)=>Ft===0||Ut.distanceToSquared(ct[Ft-1])>1e-18);if(dt.length<3)continue;let Bt=dt.map(G).sort().join("|");j.has(Bt)?j.delete(Bt):j.set(Bt,dt)}}for(let De=0;De<B.length-1;De++){let Ze=B[De],Tt=B[De+1],Lt=(Ze+Tt)/2;if(Tt-Ze<Et)continue;let Rt=[...new Set([-Je,0,Je,...L.flatMap($e=>[$e.y0,$e.y1])])].sort(($e,ct)=>$e-ct);for(let $e=0;$e<Rt.length-1;$e++){let ct=Rt[$e],dt=Rt[$e+1],Bt=(ct+dt)/2;Bt>0&&I.some(([Ut,Ft])=>Lt>Ut&&Lt<Ft)||L.some(Ut=>Lt>Ut.x0-Et&&Lt<Ut.x1+Et&&Bt>Ut.y0-Et&&Bt<Ut.y1+Et)||pe(Ze,Tt,ct,dt)}}let Ne=[],ve=[];for(let De of j.values())for(let Ze=1;Ze<De.length-1;Ze++){let Tt=De[0],Lt=De[Ze],Rt=De[Ze+1];if(!(Lt.clone().sub(Tt).cross(Rt.clone().sub(Tt)).lengthSq()<1e-20))for(let $e of[Tt,Lt,Rt])Ne.push($e.x,$e.y,$e.z),ve.push($e.dot(new P().setFromMatrixColumn(O,0))/2.5,$e.dot(new P().setFromMatrixColumn(O,1))/tt)}if(!Ne.length)return null;let lt=new vt;return lt.setAttribute("position",new pt(Ne,3)),lt.setAttribute("uv",new pt(ve,2)),lt.computeVertexNormals(),lt.userData.angledCut=J,lt}function Me(q,O,ee,oe,de,re,fe={},I=0,L=[]){let B=JSON.stringify([q.name,fe.wallId||"",fe.kind||"standard",fe.axis,fe.index,O.layer,I,...[O.start,O.pixels,O.minCut||0,O.limit??O.pixels*_e].map(Ze=>Math.round(Ze*1e7)/1e7)]),j=e.connectors===!1?[]:ku[B]||[];O={...O,connectorCuts:j};let J=O.layer^I,G=re.clone().addScaledVector(ee,O.start).addScaledVector(de,J===0?-Ge:0),ae=new ft().makeBasis(ee,oe,de),pe=L.length||(O.minCut||0)>Et||O.limit!==void 0||j.length,Ne=pe?Se(O,ae,G,L):ie(O);if(!Ne)return null;pe||Ne.applyMatrix4(ae);let ve=!!Ne.userData.angledCut||(O.minCut||0)>(O.trim==="left"?tt:0)+Et||(O.limit??O.pixels*_e)<O.pixels*_e-(O.trim==="right"?tt:0)-Et,lt=new gt(Ne,O.trim||ve?n:t);lt.position.copy(G),lt.castShadow=!0,lt.receiveShadow=!0;let De={id:`board-${++W}`,mesh:lt,surface:q.name,kind:fe.kind||"standard",axis:fe.axis,index:fe.index,layer:J,stockLayer:O.layer,start:O.start,stockLength:O.pixels*_e,trim:O.trim||null,custom:ve,connectorKey:B,connectorCuts:j,stock:{...O},along:ee.toArray(),normal:oe.toArray(),thick:de.toArray(),frameOrigin:re.toArray(),clippingPlanes:L.map(Ze=>({n:Ze.n.toArray(),c:Ze.c})),...fe};return lt.name=De.id,lt.userData={...De,mesh:void 0},q.add(lt),R.push(De),lt}function Ee(q,O,ee,oe,de,re,fe,{phaseU:I=0,phaseV:L=0,holes:B=[],keepTop:j=!1,clearances:J=[0,0],startClearances:G=[0,0],verticalPlanes:ae=[],verticalModules:pe=ee,kind:Ne="standard"}={}){for(let ve=0;ve<2;ve++){let lt=ve===0?O:pe,De=ve===0?ee:O,Ze=ve===0?de:re,Tt=ve===0?re:de,Lt=fe.clone().multiplyScalar(ve===0?1:-1),Rt=ve===0?I:L;for(let $e=1;$e<De;$e++)for(let ct of k(lt)){let dt={...ct};j&&ve===1&&dt.trim==="right"&&(dt.trim=null);let Bt=J[ve]||0;Bt&&Math.abs(dt.start+dt.pixels*_e-lt*_e)<Et&&(dt.limit=dt.pixels*_e-(dt.trim==="right"?tt:0)-Bt),G[ve]&&dt.start===0&&(dt.minCut=(dt.trim==="left"?tt:0)+G[ve]);let Ut=$e*_e+((dt.layer^Rt)===0?-Ge:0);for(let Ft of he(dt,ve,Ut,B))Me(q,Ft,Ze,Lt,Tt,oe.clone().addScaledVector(Tt,$e*_e),{kind:Ne,axis:ve,index:$e},Rt,ve===1?ae:[])}}}let We=wd,Ke=d+6*_e-Je,at=Ke,ne=h+8*_e-Je,be=new P(d,Je,m);function xe(q,O,ee,oe,de){let re=de==="floor",fe=re?7:0;for(let I=0;I<2;I++){let L=I===0?O:ee,B=I===0?ee:O;for(let j=1;j<B;j++){let J=[];I===0&&j>fe&&J.push({at:6,side:"right",layer:1}),I===1&&(re&&J.push({at:7,side:"left",layer:1}),j<6&&J.push({at:fe+8,side:"right",layer:1}));let G=We(L,0,J);for(let ae of G)Me(q,ae,I===0?bn:Gn,I===0?Hn:Hn.clone().negate(),I===0?Gn:bn,oe.clone().addScaledVector(I===0?Gn:bn,j*_e),{kind:de,axis:I,index:j},0)}}}xe(o.floor,13,22,be,"floor");let Fe=["rear","left","front","right"],Oe=[new P(d,0,h+Je),new P(d+Je,0,h),new P(d,0,f-Je),new P(u-Je,0,h)],Xe=[Gn,bn,Gn.clone().negate(),bn.clone().negate()];function nt(q,O,ee,oe,de,re,fe){return{id:fe,kind:O,u0:ee*_e+Ge,u1:oe*_e-Ge,v0:de,v1:re}}H.front=[nt("front","window",1,3,3*_e+Ge,6*_e-Ge,"front-window-left"),nt("front","door",6,9,tt,6*_e-Ge,"entrance"),nt("front","window",10,12,3*_e+Ge,6*_e-Ge,"front-window-right")],H.rear=[nt("rear","window",1,5,2*_e+Ge,6*_e-Ge,"bedroom-window"),nt("rear","door",8,12,tt,6*_e-Ge,"terrace-door")],H.right=[nt("right","window",3,7,2*_e+Ge,6*_e-Ge,"living-window")];function qe(q,O,ee,oe,de){let re=(ee===0?oe.x:oe.z)+q.u0,fe=(ee===0?oe.x:oe.z)+q.u1;return Object.assign(q,{wallId:O,axis:ee,origin:{x:oe.x,y:oe.y,z:oe.z},world:ee===0?{x0:re,x1:fe,z0:de-Je,z1:de+Je,y0:q.v0,y1:q.v1}:{x0:de-Je,x1:de+Je,z0:re,z1:fe,y0:q.v0,y1:q.v1}}),q}let se=[{n:new P(-A,1,0),c:D+A*a/2},{n:new P(A,1,0),c:D+A*a/2}],ue=Math.ceil(x/_e)+1;for(let q=0;q<4;q++){let O=q%2,ee=O===0?bn:Gn,oe=Oe[q],de=O===0?oe.z:oe.x,re=O===0?13:15,fe=Fe[q],I=H[fe];I.forEach(L=>qe(L,fe,O,oe,de)),N.push({id:fe,axis:O,start:O===0?oe.x:oe.z,end:(O===0?oe.x:oe.z)+re*_e-(O===0?Ge:2*Ge),fixed:de,depth:tt,holes:I,exterior:!0,origin:{x:oe.x,y:0,z:oe.z}});for(let L=0;L<2;L++){let B=L===0?re:ue,j=L===0&&O===0?0:1;for(let J=1;J<(L===0?_+1:re);J++){let G=L===0?O===0?[{at:6,side:"right",layer:1}]:q===1?[{at:8,side:"right",layer:0}]:[]:[{at:_,side:"right",layer:0}];for(let ae of We(B,j,G)){let pe={...ae};L===1&&pe.trim==="right"&&pe.start+pe.pixels*_e===B*_e&&(pe.trim=null);let Ne=J*_e+((pe.layer^j)===0?-Ge:0);for(let ve of he(pe,L,Ne,I))Me(o.walls[q],ve,L===0?ee:Hn,L===0?Xe[q]:Xe[q].clone().negate(),L===0?Hn:ee,oe.clone().addScaledVector(L===0?Hn:ee,J*_e),{kind:"wall",axis:L,index:J},j,L===1||J===_?se:[])}}}if(O===0)for(let L=_+1;L<ue;L++)for(let B of k(13))for(let j of he(B,0,L*_e+(B.layer===0?-Ge:0),I))Me(o.gables,j,bn,Xe[q],Hn,oe.clone().addScaledVector(Hn,L*_e),{kind:"gable",axis:0,index:L,wallId:fe},0,se)}xe(o.ceiling,13,15,new P(d,p+Je,h),"ceiling");let te={left:d+tt,right:u-tt,rear:h+tt,front:f-tt};function ye(q,O,ee,oe,de=[]){let re=new ut;re.name=q,o.partitions.add(re);let fe=O===0?new P(d,0,oe):new P(oe,0,h),I=O===0?bn:Gn,L=O===0?Gn:bn,B=de.map(([j,J])=>({id:`${q}-door-${j}`,kind:"door",u0:j*_e+Ge,u1:J*_e-Ge,v0:tt,v1:6*_e-Ge}));B.forEach(j=>qe(j,q,O,fe,oe)),H.partitions.push(...B),re.userData={id:q,axis:O,start:O===0?d:h,end:(O===0?d:h)+ee*_e,fixed:oe,depth:tt,holes:B,origin:{x:fe.x,y:0,z:fe.z}},N.push({...re.userData,exterior:!1});for(let j=0;j<2;j++){let J=j===0&&O===0?0:1,G=j===0?ee:_,ae=j===0?O===1?[{at:8,side:"right",layer:0}]:[]:[];for(let pe=1;pe<(j===0?_:ee);pe++)for(let Ne of We(G,J,ae)){let ve={...Ne};for(let lt of he(ve,j,pe*_e+((ve.layer^J)===0?-Ge:0),B))Me(re,lt,j===0?I:Hn,j===0?L:L.clone().negate(),j===0?Hn:I,fe.clone().addScaledVector(j===0?Hn:I,pe*_e),{kind:"partition",wallId:q,axis:j,index:pe},J)}}}ye("bedroom-right",1,15,Ke,[[5,7],[10,12]]),ye("bedroom-front",0,6,ne);let T={id:"bedroom",name:"Sypialnia",x0:te.left,x1:Ke-Je,z0:te.rear,z1:ne-Je},Ve={id:"bathroom",name:"\u0141azienka",x0:te.left,x1:at-Je,z0:ne+Je,z1:te.front},we=[{x:Ke+Je,z:te.rear},{x:te.right,z:te.rear},{x:te.right,z:te.front},{x:at+Je,z:te.front},{x:at+Je,z:ne+Je},{x:Ke+Je,z:ne+Je}],ze=q=>Math.abs(q.reduce((O,ee,oe)=>O+ee.x*q[(oe+1)%q.length].z-q[(oe+1)%q.length].x*ee.z,0))/2,me=[T,Ve].map(q=>({...q,area:(q.x1-q.x0)*(q.z1-q.z0)}));me.push({id:"living",name:"Salon z kuchni\u0105",x0:at+Je,x1:te.right,z0:te.rear,z1:te.front,polygon:we,area:ze(we)});let E=h-_e,b=17,F=-_e/2,K=a/2+_e,le=Math.ceil((K/C-F)/_e)+1,Q=x+Je/C,Ce=[],ge=Array.from({length:14},(q,O)=>h+(O+1)*_e);for(let q of[-1,1]){let O=new P(q*C,-v,0),ee=new P(q*v,C,0),oe=new P(0,Q,E).addScaledVector(O,F),de=new ut;de.name=q===-1?"roof-left":"roof-right",o.roof.add(de);let re=q===-1?[{n:bn.clone(),c:0},{n:bn.clone().negate(),c:K}]:[{n:bn.clone().negate(),c:0},{n:bn.clone(),c:K}];for(let fe=1;fe<b;fe++){let I=E+fe*_e;q===-1&&Ce.push(I);for(let L of k(le)){let B={...L,trim:null};Me(de,B,O,ee,Gn,oe.clone().addScaledVector(Gn,fe*_e),{kind:"roof-slope",axis:0,index:fe,roofSide:q,detail:"Mitre and eave ends are angled cuts"},q===-1?0:1,re)}}for(let fe=1;fe<le;fe++)for(let I of k(b))Me(de,I,Gn,ee.clone().negate(),O,oe.clone().addScaledVector(O,fe*_e),{kind:"roof-cross",axis:1,index:fe,roofSide:q},0,re)}U.usableConceptArea=me.reduce((q,O)=>q+O.area,0),U.structuralFootprintArea=a*c,U.terraceArea=a*l,z.push({id:"edge-floor",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",description:"D\u0142ugi pion zajmuje miejsce po zako\u0144czeniu pod\u0142ogi. Kr\xF3tki pion opiera si\u0119 na pe\u0142nej desce.",position:[d+3*_e,tt/2,f-Je],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:o.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",description:"Deska \u0142\u0105czeniowa: wybranie 18 \xD7 102 mm + istniej\u0105cy p\xF3\u0142wpust 18 mm ods\u0142ania pe\u0142ne 120 mm na poprzeczne \u017Cebro pod\u0142ogi.",position:[d+7*_e,tt/2,h+Je],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:o.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:o.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",description:"Wybranie w pe\u0142nej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na drugie \u017Cebro pod\u0142ogi. Sam koniec deski pozostaje pe\u0142ny.",position:[Ke,tt/2,h+3*_e],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:o.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:o.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",description:"Wybranie w kraw\u0119dzi z z\u0119bami, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na pion \u015Bciany zewn\u0119trznej. Ko\u0144c\xF3wka i wsp\xF3lna linia \u017Ceber zostaj\u0105 zachowane.",position:[Ke,3*_e,h+Je],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",description:"Przegroda poprzeczna zamyka si\u0119 w warstwach ci\u0105g\u0142ej \u015Bciany. Wybranie ods\u0142ania wpust na pion w tej samej linii.",position:[Ke,3*_e,ne],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",description:"Wybranie naro\u017Cnika deski \u0142\u0105czeniowej ods\u0142ania wpust. Przywr\xF3cony poziomy rz\u0105d \u015Bciany mie\u015Bci si\u0119 w nim bez przesuwania \u017Ceber.",position:[d+Je,p+Je,h+9*_e],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:o.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:_}]},{id:"connector-120",title:"Deska \u0142\u0105czeniowa \u2014 wariant 18 \xD7 120 mm",description:"Drugi wariant deski \u0142\u0105czeniowej w tym domu: wybranie naro\u017Cnika 18 \xD7 120 mm. Ods\u0142ania miejsce na poziome \u017Cebro \u015Bciany przy stropie.",position:[d+3*_e,p+Je,f-Je],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:o.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:_}]},{id:"ceiling-partition",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",description:"Pe\u0142na deska stropu przechodzi przez w\u0119ze\u0142. Wybranie w desce pionowej ods\u0142ania wpust na poprzeczne \u017Cebro stropu.",position:[Ke,p+Je,h+3*_e],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:o.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:o.ceiling.name,axis:1,index:6}]});let Le={module:_e,stockMaxLength:2.5,terminalDifference:tt,pairWidth:2*Ge,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:tt,exteriorVerticalSlots:"outward",ceilingModule:_,ceilingTop:w,roofPitchDegrees:35,roofAxes:Ce,wallAxes:ge,roofAxesAligned:ge.every(q=>Ce.some(O=>Math.abs(O-q)<Et)),connectorBoards:R.filter(q=>q.connectorCuts.length).length,connectorVariants:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:"Interior wall top horizontal rows at ceiling height are still omitted: adding them would duplicate parallel ceiling material. This separate assembly layout has not been resolved by connector cuts.",loadValidated:!1};return r.updateMatrixWorld(!0),{root:r,groups:o,openings:H,rooms:me,dimensions:U,boards:R,joints:z,wallPanels:N,validation:Le}}var bi=(...i)=>new P(...i);function Vu(i,e,t){let n=new ut;n.name="Wn\u0119trze \u2014 ods\u0142aniana \u015Bciana";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:c,floorTop:l,clearHeight:d}=i.dimensions,u=10*r,h=d,f=-u/2,m=u/2,_=bi(-a+s/2,l,-c+7*r),g=new ft().makeRotationY(-Math.PI/2).multiply(new ft().makeTranslation(-_.x,-_.y,-_.z)),p=new ln(bi(f,0,-s/2-.001),bi(m,h,s/2+.001)),w=[],S=[],v=[],C=[],A,D=0,x=0,y=(L,B=.85,j={})=>new Ht({color:L,roughness:B,...j}),U=y("#e0e0d9"),R=y("#f4f3ec",.24),N=y("#303b35",.3,{metalness:.6}),z=y("#ae885a"),H=y("#c49b62"),W=new un({color:"#685137",transparent:!0,opacity:.42}),k=y("#ecece5"),X=y("#bcbcb0"),ie=(L,B,j,J,G,ae,pe,Ne)=>{let ve=new gt(new ti(B,j,J),Ne);return ve.position.set(G,ae,pe),L.add(ve),ve},he=(L,B,j)=>(L.userData.info=B,L.userData.kind=j,w.push(L),L),Se=L=>{let B=document.createElement("canvas");B.width=512,B.height=512;let j=B.getContext("2d"),J=35,G=()=>(J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296);j.fillStyle=L==="wood"?"#b89670":"#d0c8ae",j.fillRect(0,0,512,512);for(let pe=0;pe<(L==="wood"?1200:9500);pe++){let Ne=G()*512,ve=G()*512;j.lineWidth=.4+G(),j.strokeStyle=L==="wood"?pe%2?"#ac875c55":"#d6b68d66":pe%3?"#f0e9d444":"#9f96744a",j.beginPath(),j.moveTo(Ne,ve),j.lineTo(Ne+(L==="wood"?1:(G()-.5)*17),ve+(L==="wood"?50+G()*100:(G()-.5)*18)),j.stroke()}let ae=new Pi(B);return ae.colorSpace=Zt,ae},Me=y("#e8dac5",.84,{map:Se("wood")}),Ee=y("#eee7d3",1,{map:Se("fiber")});function We(L){let B=L.index?L.toNonIndexed():L.clone(),j=B.attributes.position,J=[];for(let ae=0;ae<j.count;ae+=3){let pe=[0,1,2].map(Ne=>bi().fromBufferAttribute(j,ae+Ne));for(let[Ne,ve,lt]of[[0,f,1],[0,m,-1],[1,0,1],[1,h,-1]]){let De=[];for(let Ze=0;Ze<pe.length;Ze++){let Tt=pe[Ze],Lt=pe[(Ze+1)%pe.length],Rt=(Tt.getComponent(Ne)-ve)*lt,$e=(Lt.getComponent(Ne)-ve)*lt;Rt>=0&&De.push(Tt),Rt>=0!=$e>=0&&De.push(Tt.clone().lerp(Lt,Rt/(Rt-$e)))}pe=De}for(let Ne=1;Ne<pe.length-1;Ne++)J.push(...pe[0].toArray(),...pe[Ne].toArray(),...pe[Ne+1].toArray())}B.dispose();let G=new vt;return G.setAttribute("position",new pt(J,3)),G.computeVertexNormals(),G}for(let L of i.boards.filter(B=>B.surface==="left")){let B=L.mesh.geometry.clone().translate(...L.mesh.position.toArray()).applyMatrix4(g);if(B.computeBoundingBox(),!B.boundingBox.intersectsBox(p)){B.dispose();continue}let j=We(B);if(B.dispose(),!j.attributes.position.count){j.dispose();continue}let J=new gt(j,H);J.add(new Sn(new Cn(j,30),W)),n.add(J),he(J,{...t(L),detailLabel:"Grubo\u015B\u0107 p\u0142yty",detail:"18 mm"},"structure"),S.push(J)}for(let L=2;L<12;L++)for(let B=0;B<8;B++){let j=(7-L-.5)*r,J=(B+.5)*r-l,G=Math.max(0,J-(r-2*o)/2),ae=Math.min(h,J+(r-2*o)/2);if(ae-G<.045)continue;let pe=ie(n,r-2*o-.007,ae-G-.006,s-.025,j,(G+ae)/2,-.007,Ee);he(pe,{id:`C30-IZ-${L.toString().padStart(2,"0")}${B}`,type:"Kostka izolacji",surface:"Komora \u015Bciany zewn\u0119trznej",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((ae-G-.006)*1e3)} mm`,metricLabel:"Wymiary w widoku",detailLabel:"Warstwa",detail:"Izolacja mi\u0119dzy \u017Cebrami"},"insulation"),C.push(pe)}ie(n,u,h,.018,0,h/2,-.14,X);function Ke(L,B,j,J){let G=new Zr,ae=B.map(ve=>bi(...ve)),pe=ae[0];for(let ve=1;ve<ae.length-1;ve++){let lt=Math.min(.07,ae[ve].distanceTo(ae[ve-1])/3,ae[ve].distanceTo(ae[ve+1])/3),De=ae[ve].clone().addScaledVector(ae[ve-1].clone().sub(ae[ve]).normalize(),lt),Ze=ae[ve].clone().addScaledVector(ae[ve+1].clone().sub(ae[ve]).normalize(),lt);G.add(new rr(pe,De)),G.add(new sr(De,ae[ve],Ze)),pe=Ze}G.add(new rr(pe,ae[ae.length-1]));let Ne=new gt(new js(G,Math.max(16,Math.ceil(G.getLength()*55)),j,10,!1),J);return L.add(Ne),Ne}let at=y("#327d9f",.48),ne=y("#b65744",.48),be=y("#c18c2d",.58),xe=y("#687572",.72),Fe=(L,B,j,J,G,ae)=>{let pe=Ke(n,j,J,G);return he(pe,{id:L,type:B,surface:"Warstwa instalacyjna od wn\u0119trza",length:ae==="power"?"Gniazda i o\u015Bwietlenie":"Przy\u0142\u0105cze umywalki",metricLabel:"Przeznaczenie",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},ae),v.push(pe),pe};Fe("C30-W-01","Zimna woda",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,at,"water"),Fe("C30-W-02","Ciep\u0142a woda",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,ne,"water"),Fe("C30-K-01","Odp\u0142yw umywalki",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,xe,"water"),Fe("C30-E-01","Przew\xF3d do gniazd",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,be,"power"),Fe("C30-E-02","Przew\xF3d do o\u015Bwietlenia",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,be,"power");let Oe=ie(n,.13,.12,.055,1.6,2.3,.191,y("#475751"));he(Oe,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Warstwa instalacyjna od wn\u0119trza",length:"Instalacja elektryczna",metricLabel:"Obw\xF3d",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Oe),ie(n,u+.32,.12,1.82,0,-.06,.7,Me);let Xe=y("#927d63");for(let L=f;L<m;L+=.19)ie(n,.001,.001,1.8,L,.001,.7,Xe);let nt=.249,qe=.025,se=f+.16,ue=m-.16,te=.22,ye=h-.22;ie(n,u,.22,qe,0,.11,nt,U),ie(n,u,.22,qe,0,h-.11,nt,U),ie(n,.16,ye-te,qe,f+.08,(ye+te)/2,nt,U),ie(n,.16,ye-te,qe,m-.08,(ye+te)/2,nt,U);let T=ie(n,1,ye-te,qe,0,(ye+te)/2,nt,U);he(T,{id:"C30-WYK-01",type:"Malowana ok\u0142adzina \u015Bciany",surface:"\u015Aciana od strony wn\u0119trza",length:"Wyko\u0144czenie wn\u0119trza",metricLabel:"Warstwa",detailLabel:"Pod spodem",detail:"Konstrukcja, izolacja i instalacje"},"finish"),ie(n,.09,h,.75,m+.045,h/2,.54,U),ie(n,u+.06,.07,.65,0,h+.035,.45,U),ie(n,u,.095,.022,0,.047,.278,k),ie(n,.022,.095,.65,m-.01,.047,.61,k);let we=ie(n,.007,ye-te,.032,se,(te+ye)/2,.255,y("#43948c")),ze=new ut;n.add(ze),ie(ze,.79,1.03,.014,-1.17,1.8,.27,N);let me=document.createElement("canvas");me.width=64,me.height=128;let E=me.getContext("2d"),b=E.createLinearGradient(0,0,64,128);b.addColorStop(0,"#8caaa5"),b.addColorStop(.5,"#cfdbd3"),b.addColorStop(.51,"#acb7ad"),b.addColorStop(1,"#c5bda5"),E.fillStyle=b,E.fillRect(0,0,64,128);let F=new Pi(me);F.colorSpace=Zt;let K=new Ci({map:F});ie(ze,.75,.99,.004,-1.17,1.8,.279,K);let le=new pn(bi(1,0,0),-se);ze.traverse(L=>{L.isMesh&&(L.material=L.material.clone(),L.material.clippingPlanes=[le])});let Q=new ut;n.add(Q),ie(Q,1,.43,.43,-1.17,.51,.51,z),ie(Q,1.06,.035,.48,-1.17,.742,.52,R);let Ce=y("#8c6944");for(let L=-1.63;L<-.7;L+=.035)ie(Q,.009,.39,.008,L,.51,.729,Ce);let ge=new ni;ge.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let Le=new or;Le.absellipse(0,0,.285,.155,0,Math.PI*2,!0),ge.holes.push(Le);let q=new mi(ge,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});q.rotateX(-Math.PI/2);let O=new gt(q,R);O.position.set(-1.17,.765,.52),Q.add(O);let ee=new gt(new ir(.282,.25,.018,40),R);ee.scale.z=.55,ee.position.set(-1.17,.772,.52),Q.add(ee),Ke(Q,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,N),ie(Q,.045,.012,.032,-1.17,1.062,.335,N);let oe=(L,B,j=!1)=>{let J=ie(n,.135,.11,.019,L,B,.277,k);if(j)ie(n,.09,.07,.009,L,B,.292,U);else for(let G of[-.032,.032]){let ae=new gt(new ir(.026,.026,.007,20),U);ae.rotation.x=Math.PI/2,ae.position.set(L+G,B,.291),n.add(ae);for(let pe of[-.008,.008])ie(n,.006,.006,.004,L+G,B+pe,.297,N)}return J};oe(1.13,.47),oe(1.4,1.24,!0),ie(n,.42,.036,.07,-1.17,2.57,.3,N),ie(n,.38,.008,.055,-1.17,2.548,.31,y("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let de=new eo(new ln,2653304);de.visible=!1,n.add(de);function re(L){A=L,de.visible=L!==T,n.updateMatrixWorld(!0),de.visible&&de.box.setFromObject(L),e(L.userData.info)}function fe(L){if(L===T)return T.visible;if(D<=.001)return!1;L.geometry.computeBoundingBox();let B=L.geometry.boundingBox.clone().applyMatrix4(L.matrixWorld);return B.max.x>se&&B.min.x<se+(ue-se)*D&&B.max.y>te&&B.min.y<ye}function I(L){D=dr.clamp(L,0,1);let B=se+(ue-se)*D,j=ue-B;T.scale.x=j,T.position.x=(B+ue)/2,T.visible=j>1e-5,le.constant=-B,ze.visible=B<-1.17+.395,we.position.x=B,we.visible=D>.005&&D<.995,A&&A!==T&&!fe(A)&&re(T)}return I(0),re(T),{root:n,direction:bi(.48,.2,3),focus:new ln(bi(f-.1,-.1,-.16),bi(m+.12,h+.1,1.08)),annotation:"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",finish:I,selectAt(L){n.updateMatrixWorld(!0);let B=L.intersectObjects(n.children,!0).find(j=>{if(!j.object.isMesh)return!1;for(let J=j.object;J;J=J.parent)if(!J.visible)return!1;return!(j.object.material.clippingPlanes||[]).some(J=>J.distanceToPoint(j.point)<0)});B?.object.userData.info&&re(B.object)},next(){let L=w.filter(fe);L.length&&re(L[++x%L.length])},getSelected(){return A?.userData.info},getWallState(){return{reveal:D,boardCount:S.length,insulationCount:C.length,serviceCount:v.length,coverWidth:T.scale.x,insideFacing:!0}}}}var xt=(...i)=>new P(...i),as=xt(1,0,0),mr=xt(0,1,0),ls=xt(0,0,1),_i=tt/2,Wn=new Ht({color:"#cba36b",roughness:.8,side:en}),cs=new Ht({color:"#43948c",roughness:.75,side:en}),Td=new Ht({color:"#94784e",roughness:.85,side:en}),Hu=new un({color:"#66543a",transparent:!0,opacity:.5}),Gu=new Ht({color:"#287c78",roughness:.7,side:en,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),B3=new Set([Wn,cs,Td,Hu,Gu]);function Wu(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])B3.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var go;function xo(){return go||(go=Ed({wood:Wn,end:Wn}),go.root.updateMatrixWorld(!0),go.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),go}function Xu(i=6,{trim:e=null,cut:t=null}={}){let n=i*_e,r=e==="left"?tt:0,s=e==="right"?n-tt:n,o=[[0,Ge],[n-Ge,n]];for(let _=1;_<i;_++)o.push([_*_e-Ge,_*_e+Ge]);let a=t?.offset||0,c=a+_i,l=[...new Set([r,s,...o.flat(),...t?[a,c]:[]].filter(_=>_>=r&&_<=s))].sort((_,g)=>_-g),d=l.slice(1).map((_,g)=>{let p=l[g],w=(p+_)/2,S=-_i,v=o.some(([C,A])=>w>C&&w<A)?0:_i;return t&&w>a&&w<c&&(t.edge==="slotted"?v=Math.min(v,_i-Ge):S=-_i+Ge),{a:p,b:_,bottom:S,top:v}}),u=[];for(let _ of d)u.push(new ce(_.a,_.bottom),new ce(_.b,_.bottom));for(let _ of[...d].reverse())u.push(new ce(_.b,_.top),new ce(_.a,_.top));let h=u.filter((_,g)=>g===0||!_.equals(u[g-1])),f=new ni(h);f.closePath();let m=new mi(f,{depth:Ge,bevelEnabled:!1,curveSegments:1});return m.translate(0,0,-Ge/2),m}function Hl(i,e=Wn){let t=new gt(i,e);return t.add(new Sn(new Cn(i,30),Hu)),t}function k3(i){return kl(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function bo(i,e,t,n,r,s,o=Wn){for(let a of k3(e)){let c=Xu(a.n,{trim:a.trim}),l=new ft().makeBasis(n,r,s);c.applyMatrix4(l);let d=Hl(c,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Ge),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function V3(i,e,t){i.add(new to(t,e,.36,2653304,.095,.048))}function H3(i){let e=new ut,t=6*_e,n=10*_e,r=new ut,s=new ut,o=new ut;e.add(r,s,o);for(let l=1;l<10;l++)bo(r,6,xt(-t/2,0,-n/2+l*_e),as,mr,ls,cs);for(let l=1;l<6;l++)bo(s,10,xt(-t/2+l*_e,0,-n/2),ls,mr.clone().negate(),as,Wn);for(let l of[-n/2+_e,0,n/2-_e])V3(o,xt(-t/2+_e,.16,l),mr);let a=new nr(new vt().setFromPoints([xt(-t/2,0,-n/2-.12),xt(t/2,0,-n/2-.12)]),new un({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new ft().makeBasis(mr,ls,as)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let c=i==="wall"?xt(1.5,1,2.6):xt(1.4,1.7,1.9);return{root:e,arrows:o,direction:c,annotation:i==="wall"?"Wpusty pion\xF3w \u2192 na zewn\u0105trz domu":i==="roof"?"Turkus: kr\xF3tszy kierunek po\u0142aci \xB7 wpusty do pokrycia":"Turkus: kr\xF3tszy kierunek no\u015Bny \xB7 wpusty do g\xF3ry",spread(l){s.position.y=l*.65}}}function Vl(i,e,{crossing:t=[],plane:n=1,direction:r=xt(1.1,1.8,1.4),size:s=1.05}={}){let o=new ut,a=new ut,c=new ut;o.add(a,c);let l=xo(),d=(u,h)=>u.surface===h.surface&&u.axis===h.axis&&u.index===h.index;for(let u of l.boards){let h=i.findIndex(_=>d(u,_)),f=t.some(_=>d(u,_));if(h<0&&!f||u.bounds.distanceToPoint(e)>.5)continue;let m=Hl(u.mesh.geometry.clone(),f?Td:i[h].material||(h===0?Wn:cs));m.position.copy(u.mesh.position).sub(e),m.userData.boardId=u.id,m.userData.base=m.position.clone(),m.userData.sign=u.bounds.getCenter(xt()).getComponent(n)<e.getComponent(n)?-1:1,(f?c:a).add(m)}return c.visible=!1,{root:o,direction:r,focus:new ln(xt(-s/2,-s/2,-s/2),xt(s/2,s/2,s/2)),spread(u){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*u*.2);c.visible=!1},crossing(u){c.visible=u}}}function qu(i,e){if(["slab","wall","roof"].includes(i.scene))return H3(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let r=new ut,s=Hl(Xu(6,e||{}),cs);return s.position.x=-3*_e,r.add(s),{root:r,direction:xt(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Deska grzebieniowa \xB7 naci\u0119cia do po\u0142owy wysoko\u015Bci"}}if(i.scene==="continuity"){let r=new ut;return bo(r,12,xt(-6*_e,0,0),as,mr,ls,Wn),r.children.forEach(s=>s.material=s.userData.ply?cs:Wn),{root:r,direction:xt(.6,.85,3),spread(s){r.children.forEach(o=>o.position.z=(o.userData.ply-.5)*(Ge+s*.42))},annotation:"Dwie warstwy \xB7 przesuni\u0119cie styk\xF3w o 2 modu\u0142y"}}if(i.scene==="cross"){let r=new ut,s=new ut,o=new ut;return r.add(s,o),bo(s,4,xt(-2*_e,0,0),as,mr,ls,cs),bo(o,4,xt(0,0,-2*_e),ls,mr.clone().negate(),as,Wn),{root:r,direction:xt(1.4,1.6,2),spread(a){o.position.y=a*.65},annotation:"Wpusty przeciwnych rodzin \u017Ceber otwieraj\u0105 si\u0119 w przeciwne strony"}}let t=xo(),n=t.dimensions;if(i.scene==="joint"){let r=t.joints.find(s=>s.id===i.joint);return Vl(r.members,xt(...r.position),{crossing:r.crossingMembers||[],plane:r.planeAxis,direction:xt(...r.viewDirection)})}return i.scene==="corner"?Vl([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],xt(n.halfWidth-_i,3*_e,n.halfDepth-_i),{plane:1,direction:xt(1.4,2,1.6)}):i.scene==="roof-wall"?Vl([{surface:"right",axis:1,index:3},{surface:"roof-right",axis:0,index:4},{surface:"Sufit",axis:0,index:3,material:Td}],xt(n.halfWidth-_i,n.ceilingTop,-n.halfDepth+3*_e),{plane:2,direction:xt(1.5,1.2,2),size:1.2}):Vl([{surface:"roof-left",axis:0,index:8},{surface:"roof-right",axis:0,index:8}],xt(0,n.roofUnderRidgeY+_i,-n.halfDepth+7*_e),{plane:2,direction:xt(1.4,1.3,2.4),size:1.3})}var G3={rear:"\u015Aciana zewn\u0119trzna od tarasu",front:"\u015Aciana zewn\u0119trzna od wej\u015Bcia",left:"Lewa \u015Bciana zewn\u0119trzna",right:"Prawa \u015Bciana zewn\u0119trzna","bedroom-right":"\u015Aciana wewn\u0119trzna","bedroom-front":"Przegroda sypialni i \u0142azienki","roof-left":"Lewa po\u0142a\u0107 dachu","roof-right":"Prawa po\u0142a\u0107 dachu"};function _o(i){let e=1/0,t=-1/0,n=new P(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=xt().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Deska \u0142\u0105czeniowa":i.trim?"Deska zako\u0144czeniowa":i.custom?"Deska dopasowana do otworu lub skosu":"Deska grzebieniowa",surface:G3[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Yu(i,e){let t=xo();if(i==="wall")return Vu(t,e,_o);let n=new ut,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=mo(s,!1);s.forEach(d=>d.dispose()),n.add(Hl(o,Wn));let a=new gt(new vt,Gu);n.add(a);let c,l=d=>{c=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(_o(d))};return l(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:xt(1.4,1,1.5),annotation:"Wybierz element, aby zobaczy\u0107 jego identyfikator",selectAt(d){let u=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(f=>({b:h,d:f.distance}))).sort((h,f)=>h.d-f.d);u[0]&&l(u[0].b)},next(){l(r[(r.indexOf(c)+1)%r.length])},getSelected(){return _o(c)}}}var Ad={model:"Combstruct 30",totalBoards:1364,material:{lengthM:2087.7322463656164,fullBoardLengthM:2.5,fullBoardEquivalents:835.0928985462466,fullBoards:836,sheets:168},geometrySha256:"699bbbe63351978978675522df6efe20f773fdff4d246a9649c3316534fa232a",toleranceM:5e-5,families:[{id:"standard",name:"Deska zwyk\u0142a",count:761,lengths:{"3":86,"4":142,"5":331,"6":202},sample:"board-147"},{id:"ending",name:"Deska zako\u0144czeniowa",count:481,lengths:{"3":104,"4":284,"5":75,"6":18},sample:"board-1198"},{id:"corner-slotted",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 102 mm",count:39,lengths:{"4":13,"5":26},sample:"board-318"},{id:"corner-plain",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 120 mm",count:43,lengths:{"3":14,"4":7,"5":15,"6":7},sample:"board-931"},{id:"inset-slotted",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, z\u0119by",count:14,lengths:{"5":14},sample:"board-975"},{id:"inset-plain",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, pe\u0142na kraw\u0119d\u017A",count:19,lengths:{"3":5,"5":14},sample:"board-1036"},{id:"combined",name:"\u0141\u0105czeniowa \xB7 dwa wybrania",count:7,lengths:{"6":7},sample:"board-1090"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-363",null],["board-368",null],["board-373",null],["board-629",null],["board-634",null],["board-1055",null],["board-1074",null],["board-323",null],["board-328",null],["board-334",null],["board-743",null],["board-748",null],["board-753",null],["board-601",null],["board-652",null],["board-318",null],["board-340",null],["board-346",null],["board-352",null],["board-358",null],["board-378",null],["board-457",null],["board-462",null],["board-467",null],["board-472",null],["board-477",null],["board-482",null],["board-487",null],["board-492",null],["board-497",null],["board-502",null],["board-507",null],["board-512",null],["board-517",null],["board-522",null],["board-596",null],["board-606",null],["board-612",null],["board-618",null],["board-624",null],["board-640",null],["board-646",null],["board-657",null],["board-728",null],["board-733",null],["board-738",null],["board-758",null],["board-763",null],["board-768",null],["board-773",null],["board-778",null],["board-783",null],["board-788",null],["board-793",null],["board-1036",null],["board-1040",null],["board-1044",null],["board-1048",null],["board-1052",null],["board-1059",null],["board-1063",null],["board-1067",null],["board-1071",null],["board-1078",null],["board-1082",null],["board-1086",null],["board-1111",null],["board-1115",null],["board-1119",null],["board-1123",null],["board-1127",null],["board-320","board-37"],["board-325","board-37"],["board-331","board-37"],["board-740","board-67"],["board-745","board-74"],["board-750","board-81"],["board-598","board-156"],["board-649","board-240"],["board-315","board-37"],["board-337","board-38"],["board-343","board-38"],["board-349","board-38"],["board-355","board-38"],["board-375","board-39"],["board-454","board-47"],["board-459","board-54"],["board-464","board-61"],["board-469","board-68"],["board-474","board-75"],["board-479","board-82"],["board-484","board-89"],["board-489","board-96"],["board-494","board-103"],["board-499","board-110"],["board-504","board-117"],["board-509","board-124"],["board-514","board-131"],["board-519","board-138"],["board-593","board-146"],["board-603","board-166"],["board-609","board-176"],["board-615","board-186"],["board-621","board-195"],["board-637","board-222"],["board-643","board-231"],["board-654","board-249"],["board-725","board-46"],["board-730","board-53"],["board-735","board-60"],["board-755","board-88"],["board-760","board-95"],["board-765","board-102"],["board-770","board-109"],["board-775","board-116"],["board-780","board-123"],["board-785","board-130"],["board-790","board-137"],["board-1034","board-44"],["board-1038","board-51"],["board-1042","board-58"],["board-1046","board-65"],["board-1050","board-72"],["board-1057","board-86"],["board-1061","board-93"],["board-1065","board-100"],["board-1069","board-107"],["board-1076","board-121"],["board-1080","board-128"],["board-1084","board-135"],["board-1109","board-144"],["board-1113","board-154"],["board-1117","board-164"],["board-1121","board-174"],["board-1125","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-375"],["board-398","board-258"],["board-399","board-398"],["board-400","board-489"],["board-401","board-400"],["board-529","board-401"],["board-530","board-529"],["board-531","board-637"],["board-677","board-261"],["board-678","board-677"],["board-679","board-678"],["board-970","board-259"],["board-971","board-970"],["board-972","board-1057"],["board-973","board-1061"],["board-974","board-530"],["board-1090","board-399"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-402","board-258"],["board-403","board-399"],["board-404","board-400"],["board-524","board-401"],["board-525","board-524"],["board-526","board-530"],["board-527","board-531"],["board-528","board-527"],["board-680","board-257"],["board-681","board-678"],["board-682","board-679"],["board-975","board-255"],["board-976","board-971"],["board-977","board-972"],["board-978","board-973"],["board-979","board-974"],["board-1088","board-399"],["board-1089","board-1088"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-375"],["board-405","board-266"],["board-406","board-405"],["board-407","board-489"],["board-408","board-407"],["board-537","board-408"],["board-538","board-537"],["board-539","board-637"],["board-683","board-269"],["board-684","board-683"],["board-685","board-684"],["board-980","board-267"],["board-981","board-980"],["board-982","board-1057"],["board-983","board-1061"],["board-984","board-538"],["board-1093","board-406"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-409","board-266"],["board-410","board-406"],["board-411","board-407"],["board-532","board-408"],["board-533","board-532"],["board-534","board-538"],["board-535","board-539"],["board-536","board-535"],["board-686","board-265"],["board-687","board-684"],["board-688","board-685"],["board-985","board-263"],["board-986","board-981"],["board-987","board-982"],["board-988","board-983"],["board-989","board-984"],["board-1091","board-406"],["board-1092","board-1091"],["board-274","board-315"],["board-275","board-337"],["board-276","board-275"],["board-277","board-375"],["board-412","board-274"],["board-413","board-412"],["board-414","board-489"],["board-415","board-414"],["board-545","board-415"],["board-546","board-545"],["board-547","board-637"],["board-689","board-277"],["board-690","board-755"],["board-691","board-690"],["board-990","board-275"],["board-991","board-990"],["board-992","board-1057"],["board-993","board-1061"],["board-994","board-546"],["board-1096","board-413"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-416","board-274"],["board-417","board-413"],["board-418","board-414"],["board-540","board-415"],["board-541","board-540"],["board-542","board-546"],["board-543","board-547"],["board-544","board-543"],["board-692","board-273"],["board-693","board-690"],["board-694","board-691"],["board-995","board-271"],["board-996","board-991"],["board-997","board-992"],["board-998","board-993"],["board-999","board-994"],["board-1094","board-413"],["board-1095","board-1094"],["board-282","board-315"],["board-283","board-337"],["board-284","board-283"],["board-285","board-375"],["board-419","board-282"],["board-420","board-419"],["board-421","board-489"],["board-422","board-421"],["board-555","board-422"],["board-556","board-603"],["board-557","board-556"],["board-558","board-637"],["board-559","board-654"],["board-695","board-285"],["board-696","board-755"],["board-697","board-696"],["board-1000","board-283"],["board-1001","board-1000"],["board-1002","board-1057"],["board-1003","board-1061"],["board-1004","board-557"],["board-1099","board-420"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-423","board-282"],["board-424","board-420"],["board-425","board-421"],["board-548","board-422"],["board-549","board-556"],["board-550","board-549"],["board-551","board-557"],["board-552","board-558"],["board-553","board-552"],["board-554","board-559"],["board-698","board-281"],["board-699","board-696"],["board-700","board-697"],["board-1005","board-279"],["board-1006","board-1001"],["board-1007","board-1002"],["board-1008","board-1003"],["board-1009","board-1004"],["board-1097","board-420"],["board-1098","board-1097"],["board-316","board-278"],["board-338","board-279"],["board-344","board-280"],["board-350","board-280"],["board-356","board-280"],["board-376","board-281"],["board-455","board-419"],["board-460","board-419"],["board-465","board-419"],["board-470","board-419"],["board-475","board-420"],["board-480","board-420"],["board-485","board-420"],["board-490","board-421"],["board-495","board-421"],["board-500","board-421"],["board-505","board-421"],["board-510","board-422"],["board-515","board-422"],["board-520","board-422"],["board-594","board-548"],["board-604","board-550"],["board-610","board-550"],["board-616","board-550"],["board-622","board-557"],["board-638","board-553"],["board-644","board-553"],["board-655","board-554"],["board-726","board-695"],["board-731","board-695"],["board-736","board-695"],["board-756","board-696"],["board-761","board-696"],["board-766","board-696"],["board-771","board-696"],["board-776","board-697"],["board-781","board-697"],["board-786","board-697"],["board-791","board-697"],["board-1035","board-1000"],["board-1039","board-1000"],["board-1043","board-1000"],["board-1047","board-1000"],["board-1051","board-1001"],["board-1058","board-1002"],["board-1062","board-1003"],["board-1066","board-1003"],["board-1070","board-1003"],["board-1077","board-1004"],["board-1081","board-1004"],["board-1085","board-1004"],["board-1110","board-1097"],["board-1114","board-1097"],["board-1118","board-1097"],["board-1122","board-1098"],["board-1126","board-1098"],["board-290","board-316"],["board-291","board-338"],["board-292","board-291"],["board-293","board-376"],["board-426","board-290"],["board-427","board-426"],["board-428","board-490"],["board-429","board-428"],["board-567","board-429"],["board-568","board-604"],["board-569","board-568"],["board-570","board-638"],["board-571","board-655"],["board-701","board-293"],["board-702","board-756"],["board-703","board-702"],["board-1010","board-291"],["board-1011","board-1010"],["board-1012","board-1058"],["board-1013","board-1062"],["board-1014","board-569"],["board-1102","board-427"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-430","board-290"],["board-431","board-427"],["board-432","board-428"],["board-560","board-429"],["board-561","board-568"],["board-562","board-561"],["board-563","board-569"],["board-564","board-570"],["board-565","board-564"],["board-566","board-571"],["board-704","board-289"],["board-705","board-702"],["board-706","board-703"],["board-1015","board-287"],["board-1016","board-1011"],["board-1017","board-1012"],["board-1018","board-1013"],["board-1019","board-1014"],["board-1100","board-427"],["board-1101","board-1100"],["board-1037","board-1010"],["board-1041","board-1010"],["board-1045","board-1010"],["board-1049","board-1010"],["board-1053","board-1011"],["board-1060","board-1012"],["board-1064","board-1013"],["board-1068","board-1013"],["board-1072","board-1013"],["board-1079","board-1014"],["board-1083","board-1014"],["board-1087","board-1014"],["board-1112","board-1100"],["board-1116","board-1100"],["board-1120","board-1100"],["board-1124","board-1101"],["board-1128","board-1101"],["board-458","board-426"],["board-463","board-426"],["board-468","board-426"],["board-473","board-426"],["board-478","board-427"],["board-483","board-427"],["board-488","board-427"],["board-493","board-428"],["board-498","board-428"],["board-503","board-428"],["board-508","board-428"],["board-513","board-429"],["board-518","board-429"],["board-523","board-429"],["board-729","board-701"],["board-734","board-701"],["board-739","board-701"],["board-759","board-702"],["board-764","board-702"],["board-769","board-702"],["board-774","board-702"],["board-779","board-703"],["board-784","board-703"],["board-789","board-703"],["board-794","board-703"],["board-379","board-289"],["board-658","board-566"],["board-319","board-286"],["board-597","board-560"],["board-341","board-287"],["board-347","board-288"],["board-353","board-288"],["board-359","board-288"],["board-607","board-562"],["board-613","board-562"],["board-619","board-562"],["board-625","board-569"],["board-641","board-565"],["board-647","board-565"],["board-298","board-316"],["board-321","board-298"],["board-326","board-298"],["board-332","board-298"],["board-299","board-298"],["board-300","board-299"],["board-361","board-300"],["board-366","board-300"],["board-371","board-300"],["board-433","board-298"],["board-434","board-433"],["board-435","board-490"],["board-436","board-435"],["board-576","board-436"],["board-599","board-576"],["board-577","board-576"],["board-627","board-577"],["board-632","board-577"],["board-578","board-577"],["board-650","board-578"],["board-707","board-300"],["board-741","board-707"],["board-746","board-707"],["board-708","board-707"],["board-751","board-708"],["board-709","board-708"],["board-1020","board-299"],["board-1021","board-1020"],["board-1054","board-1021"],["board-1022","board-1062"],["board-1073","board-1022"],["board-1023","board-1022"],["board-1105","board-434"],["board-1056","board-1021"],["board-1075","board-1022"],["board-744","board-707"],["board-749","board-707"],["board-754","board-708"],["board-374","board-300"],["board-653","board-578"],["board-324","board-298"],["board-602","board-576"],["board-329","board-298"],["board-335","board-298"],["board-364","board-300"],["board-369","board-300"],["board-630","board-577"],["board-635","board-577"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-437","board-298"],["board-438","board-434"],["board-439","board-435"],["board-572","board-436"],["board-573","board-572"],["board-574","board-577"],["board-575","board-574"],["board-710","board-297"],["board-711","board-708"],["board-712","board-709"],["board-1024","board-295"],["board-1025","board-1021"],["board-1026","board-1022"],["board-1103","board-434"],["board-1104","board-1103"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-440","board-305"],["board-441","board-440"],["board-442","board-490"],["board-443","board-442"],["board-583","board-443"],["board-584","board-583"],["board-585","board-584"],["board-713","board-307"],["board-714","board-713"],["board-715","board-714"],["board-1027","board-306"],["board-1028","board-1027"],["board-1029","board-1062"],["board-1030","board-1029"],["board-1108","board-441"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-444","board-305"],["board-445","board-441"],["board-446","board-442"],["board-579","board-443"],["board-580","board-579"],["board-581","board-584"],["board-582","board-581"],["board-716","board-304"],["board-717","board-714"],["board-718","board-715"],["board-1031","board-302"],["board-1032","board-1028"],["board-1033","board-1029"],["board-1106","board-441"],["board-1107","board-1106"],["board-312","board-319"],["board-313","board-312"],["board-314","board-313"],["board-447","board-312"],["board-448","board-447"],["board-449","board-493"],["board-450","board-449"],["board-590","board-450"],["board-591","board-590"],["board-592","board-591"],["board-719","board-314"],["board-720","board-719"],["board-721","board-720"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-451","board-312"],["board-452","board-448"],["board-453","board-449"],["board-586","board-450"],["board-587","board-586"],["board-588","board-591"],["board-589","board-588"],["board-722","board-311"],["board-723","board-720"],["board-724","board-721"],["board-456","board-447"],["board-461","board-447"],["board-466","board-447"],["board-471","board-447"],["board-476","board-448"],["board-481","board-448"],["board-486","board-448"],["board-491","board-449"],["board-496","board-449"],["board-501","board-449"],["board-506","board-449"],["board-511","board-450"],["board-516","board-450"],["board-521","board-450"],["board-727","board-719"],["board-732","board-719"],["board-737","board-719"],["board-742","board-719"],["board-747","board-719"],["board-752","board-720"],["board-757","board-720"],["board-762","board-720"],["board-767","board-720"],["board-772","board-720"],["board-777","board-721"],["board-782","board-721"],["board-787","board-721"],["board-792","board-721"],["board-317","board-308"],["board-595","board-586"],["board-377","board-311"],["board-656","board-589"],["board-322","board-308"],["board-600","board-586"],["board-372","board-311"],["board-651","board-589"],["board-327","board-308"],["board-605","board-586"],["board-367","board-311"],["board-645","board-589"],["board-333","board-309"],["board-611","board-587"],["board-362","board-310"],["board-639","board-588"],["board-339","board-309"],["board-617","board-587"],["board-357","board-310"],["board-633","board-588"],["board-345","board-310"],["board-623","board-588"],["board-351","board-310"],["board-628","board-588"],["board-370","board-367"],["board-648","board-645"],["board-330","board-327"],["board-608","board-605"],["board-365","board-362"],["board-642","board-639"],["board-336","board-333"],["board-614","board-611"],["board-360","board-357"],["board-636","board-633"],["board-342","board-339"],["board-620","board-617"],["board-354","board-351"],["board-631","board-628"],["board-348","board-345"],["board-626","board-623"],["board-795","board-447"],["board-796","board-795"],["board-797","board-1035"],["board-798","board-797"],["board-799","board-447"],["board-800","board-796"],["board-801","board-797"],["board-802","board-447"],["board-803","board-802"],["board-804","board-1039"],["board-805","board-804"],["board-806","board-447"],["board-807","board-803"],["board-808","board-804"],["board-809","board-447"],["board-810","board-809"],["board-811","board-1043"],["board-812","board-811"],["board-813","board-447"],["board-814","board-810"],["board-815","board-811"],["board-816","board-448"],["board-817","board-816"],["board-818","board-1047"],["board-819","board-818"],["board-820","board-447"],["board-821","board-817"],["board-822","board-818"],["board-823","board-448"],["board-824","board-823"],["board-825","board-1051"],["board-826","board-825"],["board-827","board-448"],["board-828","board-824"],["board-829","board-825"],["board-830","board-448"],["board-831","board-830"],["board-832","board-1054"],["board-833","board-832"],["board-834","board-448"],["board-835","board-831"],["board-836","board-832"],["board-837","board-448"],["board-838","board-837"],["board-839","board-1058"],["board-840","board-839"],["board-841","board-448"],["board-842","board-838"],["board-843","board-839"],["board-844","board-449"],["board-845","board-844"],["board-846","board-1062"],["board-847","board-846"],["board-848","board-449"],["board-849","board-845"],["board-850","board-846"],["board-851","board-449"],["board-852","board-851"],["board-853","board-1066"],["board-854","board-853"],["board-855","board-449"],["board-856","board-852"],["board-857","board-853"],["board-858","board-449"],["board-859","board-858"],["board-860","board-1070"],["board-861","board-860"],["board-862","board-449"],["board-863","board-859"],["board-864","board-860"],["board-865","board-450"],["board-866","board-865"],["board-867","board-1073"],["board-868","board-867"],["board-869","board-449"],["board-870","board-866"],["board-871","board-867"],["board-872","board-450"],["board-873","board-872"],["board-874","board-1077"],["board-875","board-874"],["board-876","board-450"],["board-877","board-873"],["board-878","board-874"],["board-879","board-450"],["board-880","board-879"],["board-881","board-1081"],["board-882","board-881"],["board-883","board-450"],["board-884","board-880"],["board-885","board-881"],["board-886","board-450"],["board-887","board-886"],["board-888","board-1085"],["board-889","board-888"],["board-890","board-450"],["board-891","board-887"],["board-892","board-888"],["board-893","board-308"],["board-894","board-816"],["board-895","board-844"],["board-896","board-865"],["board-897","board-308"],["board-898","board-823"],["board-899","board-858"],["board-900","board-308"],["board-901","board-816"],["board-902","board-844"],["board-903","board-865"],["board-904","board-308"],["board-905","board-823"],["board-906","board-858"],["board-907","board-309"],["board-908","board-816"],["board-909","board-844"],["board-910","board-865"],["board-911","board-308"],["board-912","board-823"],["board-913","board-858"],["board-914","board-309"],["board-915","board-817"],["board-916","board-845"],["board-917","board-866"],["board-918","board-309"],["board-919","board-824"],["board-920","board-859"],["board-921","board-309"],["board-922","board-817"],["board-923","board-845"],["board-924","board-866"],["board-925","board-309"],["board-926","board-824"],["board-927","board-859"],["board-928","board-310"],["board-929","board-825"],["board-930","board-860"],["board-931","board-310"],["board-932","board-832"],["board-933","board-867"],["board-934","board-310"],["board-935","board-825"],["board-936","board-860"],["board-937","board-310"],["board-938","board-832"],["board-939","board-867"],["board-940","board-310"],["board-941","board-825"],["board-942","board-860"],["board-943","board-310"],["board-944","board-832"],["board-945","board-867"],["board-946","board-311"],["board-947","board-825"],["board-948","board-860"],["board-949","board-310"],["board-950","board-832"],["board-951","board-867"],["board-952","board-311"],["board-953","board-826"],["board-954","board-861"],["board-955","board-311"],["board-956","board-833"],["board-957","board-868"],["board-958","board-311"],["board-959","board-826"],["board-960","board-861"],["board-961","board-311"],["board-962","board-833"],["board-963","board-868"],["board-964","board-311"],["board-965","board-826"],["board-966","board-861"],["board-967","board-311"],["board-968","board-833"],["board-969","board-868"],["board-380","board-322"],["board-381","board-339"],["board-382","board-362"],["board-659","board-600"],["board-660","board-617"],["board-661","board-639"],["board-383","board-380"],["board-384","board-333"],["board-385","board-357"],["board-662","board-659"],["board-663","board-611"],["board-664","board-633"],["board-386","board-327"],["board-387","board-339"],["board-388","board-362"],["board-665","board-605"],["board-666","board-617"],["board-667","board-639"],["board-389","board-386"],["board-390","board-333"],["board-391","board-357"],["board-668","board-665"],["board-669","board-611"],["board-670","board-633"],["board-392","board-339"],["board-393","board-339"],["board-671","board-617"],["board-672","board-617"],["board-394","board-339"],["board-395","board-357"],["board-673","board-617"],["board-674","board-633"],["board-396","board-345"],["board-675","board-623"],["board-397","board-345"],["board-676","board-623"],["board-1130","board-312"],["board-1134","board-447"],["board-1138","board-447"],["board-1142","board-447"],["board-1146","board-447"],["board-1150","board-448"],["board-1154","board-448"],["board-1158","board-448"],["board-1162","board-449"],["board-1166","board-449"],["board-1170","board-449"],["board-1174","board-449"],["board-1178","board-450"],["board-1182","board-450"],["board-1186","board-450"],["board-1190","board-453"],["board-1248","board-314"],["board-1252","board-719"],["board-1256","board-719"],["board-1260","board-719"],["board-1264","board-719"],["board-1268","board-719"],["board-1272","board-720"],["board-1276","board-720"],["board-1280","board-720"],["board-1284","board-720"],["board-1288","board-720"],["board-1292","board-721"],["board-1296","board-721"],["board-1300","board-721"],["board-1304","board-721"],["board-1308","board-592"],["board-1132","board-1130"],["board-1136","board-1134"],["board-1140","board-1138"],["board-1144","board-1142"],["board-1148","board-1146"],["board-1152","board-1150"],["board-1156","board-1154"],["board-1160","board-1158"],["board-1164","board-1162"],["board-1168","board-1166"],["board-1172","board-1170"],["board-1176","board-1174"],["board-1180","board-1178"],["board-1184","board-1182"],["board-1188","board-1186"],["board-1192","board-1190"],["board-1250","board-314"],["board-1254","board-1252"],["board-1258","board-1256"],["board-1262","board-1260"],["board-1266","board-1264"],["board-1270","board-1268"],["board-1274","board-1272"],["board-1278","board-1276"],["board-1282","board-1280"],["board-1286","board-1284"],["board-1290","board-1288"],["board-1294","board-1292"],["board-1298","board-1296"],["board-1302","board-1300"],["board-1306","board-1304"],["board-1310","board-592"],["board-1244","board-1130"],["board-1245","board-1146"],["board-1246","board-1170"],["board-1362","board-1248"],["board-1363","board-1264"],["board-1364","board-1288"],["board-1241","board-1130"],["board-1242","board-1150"],["board-1243","board-1174"],["board-1359","board-1248"],["board-1360","board-1268"],["board-1361","board-1292"],["board-1238","board-1130"],["board-1239","board-473"],["board-1240","board-503"],["board-1356","board-1248"],["board-1357","board-744"],["board-1358","board-774"],["board-1235","board-1130"],["board-1236","board-478"],["board-1237","board-508"],["board-1353","board-1248"],["board-1354","board-749"],["board-1355","board-779"],["board-1232","board-1130"],["board-1233","board-1146"],["board-1234","board-1170"],["board-1350","board-1248"],["board-1351","board-1264"],["board-1352","board-1288"],["board-1229","board-380"],["board-1230","board-1150"],["board-1231","board-1174"],["board-1347","board-382"],["board-1348","board-1268"],["board-1349","board-1292"],["board-1226","board-1130"],["board-1227","board-1146"],["board-1228","board-1170"],["board-1344","board-1248"],["board-1345","board-1264"],["board-1346","board-1288"],["board-1223","board-1130"],["board-1224","board-1150"],["board-1225","board-1174"],["board-1341","board-1248"],["board-1342","board-1268"],["board-1343","board-1292"],["board-1129","board-386"],["board-1133","board-1134"],["board-1137","board-1138"],["board-1141","board-1142"],["board-1145","board-1146"],["board-1149","board-1150"],["board-1153","board-1154"],["board-1157","board-1158"],["board-1161","board-1162"],["board-1165","board-1166"],["board-1169","board-1170"],["board-1173","board-1174"],["board-1177","board-1178"],["board-1181","board-1182"],["board-1185","board-1186"],["board-1189","board-665"],["board-1247","board-1129"],["board-1251","board-1133"],["board-1255","board-1137"],["board-1259","board-1141"],["board-1263","board-1145"],["board-1267","board-1149"],["board-1271","board-1153"],["board-1275","board-1157"],["board-1279","board-1161"],["board-1283","board-1165"],["board-1287","board-1169"],["board-1291","board-1173"],["board-1295","board-1177"],["board-1299","board-1181"],["board-1303","board-1185"],["board-1307","board-1189"],["board-1220","board-1129"],["board-1221","board-1145"],["board-1222","board-1169"],["board-1338","board-370"],["board-1339","board-1263"],["board-1340","board-1287"],["board-1217","board-1129"],["board-1218","board-1149"],["board-1219","board-1173"],["board-1335","board-367"],["board-1336","board-1267"],["board-1337","board-1291"],["board-1131","board-1129"],["board-1135","board-1133"],["board-1139","board-1137"],["board-1143","board-1141"],["board-1147","board-1145"],["board-1151","board-1149"],["board-1155","board-1153"],["board-1159","board-1157"],["board-1163","board-1161"],["board-1167","board-1165"],["board-1171","board-1169"],["board-1175","board-1173"],["board-1179","board-1177"],["board-1183","board-1181"],["board-1187","board-1185"],["board-1191","board-1189"],["board-1249","board-1129"],["board-1253","board-1133"],["board-1257","board-1137"],["board-1261","board-1141"],["board-1265","board-1145"],["board-1269","board-1149"],["board-1273","board-1153"],["board-1277","board-1157"],["board-1281","board-1161"],["board-1285","board-1165"],["board-1289","board-1169"],["board-1293","board-1173"],["board-1297","board-1177"],["board-1301","board-1181"],["board-1305","board-1185"],["board-1309","board-1189"],["board-1214","board-1129"],["board-1215","board-1145"],["board-1216","board-1169"],["board-1332","board-1247"],["board-1333","board-1263"],["board-1334","board-1287"],["board-1211","board-1129"],["board-1212","board-1149"],["board-1213","board-1173"],["board-1329","board-1247"],["board-1330","board-1267"],["board-1331","board-1291"],["board-1208","board-1129"],["board-1209","board-1145"],["board-1210","board-1169"],["board-1326","board-1247"],["board-1327","board-1263"],["board-1328","board-1287"],["board-1205","board-1129"],["board-1206","board-1149"],["board-1207","board-1173"],["board-1323","board-1247"],["board-1324","board-1267"],["board-1325","board-1291"],["board-1202","board-1129"],["board-1203","board-1145"],["board-1204","board-1169"],["board-1320","board-1247"],["board-1321","board-1263"],["board-1322","board-1287"],["board-1199","board-1129"],["board-1200","board-1149"],["board-1201","board-1173"],["board-1317","board-1247"],["board-1318","board-1267"],["board-1319","board-1291"],["board-1196","board-1129"],["board-1197","board-1145"],["board-1198","board-1169"],["board-1314","board-1247"],["board-1315","board-1263"],["board-1316","board-1287"],["board-1193","board-1129"],["board-1194","board-1149"],["board-1195","board-1173"],["board-1311","board-1247"],["board-1312","board-1267"],["board-1313","board-1291"]]};var yo={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"699bbbe63351978978675522df6efe20f773fdff4d246a9649c3316534fa232a",totalBoards:1331,installedPieces:1364,material:{lengthM:2406.72,fullBoardEquivalents:962.6879999999999,fullBoards:963,sheets:193},families:[{id:"standard",name:"Deska zwyk\u0142a",count:737,variants:[{id:"standard-1",count:202,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:314,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:140,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-4",count:81,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-45",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"Deska zako\u0144czeniowa",count:472,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1165",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:75,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-3",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:277,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-1",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-4",count:102,modules:3,ending:!0,lengthM:1.01,preview:{stockId:"stock-43",positions:[-.505,-.12,-.009,-.505,.12,-.009,-.346333,.12,-.009,.505,0,-.009,.505,-.12,-.009,.106333,.12,-.009,.487,.12,-.009,.487,0,-.009,-.310333,.12,-.009,.070333,.12,-.009,.070333,0,-.009,-.346333,0,-.009,.106333,0,-.009,-.310333,0,-.009,-.346333,.12,.009,-.505,.12,.009,-.505,-.12,.009,.505,-.12,.009,.505,0,.009,.487,0,.009,.487,.12,.009,.106333,.12,.009,.070333,0,.009,.070333,.12,.009,-.310333,.12,.009,-.346333,0,.009,.106333,0,.009,-.310333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:1.01}}]},{id:"corner-slotted",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 102 mm",count:39,variants:[{id:"corner-slotted-1",count:26,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-313",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,-1.023667,-.12,-.009,-1.041667,-.12,.009,-1.023667,-.12,.009,-1.023667,0,.009,-1.041667,0,.009,-.921667,0,-.009,-.921667,-.12,-.009,-.921667,-.12,.009,-.921667,0,.009,-1.023667,.102,-.009,-.921667,.102,-.009,-.921667,.102,.009,-1.023667,.102,.009,-.643,0,-.009,-.643,-.12,-.009,-.643,-.12,.009,-.643,0,.009,-.643,.102,-.009,-.643,.102,.009,-.921667,.12,-.009,-.643,.12,-.009,-.643,.12,.009,-.921667,.12,.009,-.607,0,-.009,-.607,-.12,-.009,-.607,-.12,.009,-.607,0,.009,-.226333,0,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,0,.009,-.607,.102,-.009,-.226333,.102,-.009,-.226333,.102,.009,-.607,.102,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,0,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,0,.009,.190333,0,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,0,.009,-.190333,.102,-.009,.190333,.102,-.009,.190333,.102,.009,-.190333,.102,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,0,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,0,.009,.607,0,-.009,.607,-.12,-.009,.607,-.12,.009,.607,0,.009,.226333,.102,-.009,.607,.102,-.009,.607,.102,.009,.226333,.102,.009,.226333,.12,-.009,.607,.12,-.009,.607,.12,.009,.226333,.12,.009,.643,0,-.009,.643,-.12,-.009,.643,-.12,.009,.643,0,.009,1.023667,0,-.009,1.023667,-.12,-.009,1.023667,-.12,.009,1.023667,0,.009,.643,.102,-.009,1.023667,.102,-.009,1.023667,.102,.009,.643,.102,.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,.12,.009,.643,.12,.009,1.041667,0,-.009,1.041667,-.12,-.009,1.041667,-.12,.009,1.041667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,9,8,16,9,16,17,10,18,19,10,19,11,9,17,18,9,18,10,8,13,20,8,20,16,11,19,21,11,21,14,16,20,21,16,21,19,13,22,23,13,23,20,14,21,24,14,24,25,22,25,24,22,24,23,13,14,25,13,25,22,20,23,24,20,24,21,17,16,26,17,26,27,18,28,29,18,29,19,17,27,28,17,28,18,16,19,29,16,29,26,27,26,30,27,30,31,28,32,33,28,33,29,27,31,32,27,32,28,26,34,35,26,35,30,29,33,36,29,36,37,26,29,37,26,37,34,30,35,36,30,36,33,34,38,39,34,39,35,37,36,40,37,40,41,38,41,40,38,40,39,34,37,41,34,41,38,35,39,40,35,40,36,31,30,42,31,42,43,32,44,45,32,45,33,31,43,44,31,44,32,30,33,45,30,45,42,43,42,46,43,46,47,44,48,49,44,49,45,43,47,48,43,48,44,42,50,51,42,51,46,45,49,52,45,52,53,42,45,53,42,53,50,46,51,52,46,52,49,50,54,55,50,55,51,53,52,56,53,56,57,54,57,56,54,56,55,50,53,57,50,57,54,51,55,56,51,56,52,47,46,58,47,58,59,48,60,61,48,61,49,47,59,60,47,60,48,46,49,61,46,61,58,59,58,62,59,62,63,60,64,65,60,65,61,59,63,64,59,64,60,58,66,67,58,67,62,61,65,68,61,68,69,58,61,69,58,69,66,62,67,68,62,68,65,66,70,71,66,71,67,69,68,72,69,72,73,70,73,72,70,72,71,66,69,73,66,73,70,67,71,72,67,72,68,63,62,74,63,74,75,64,76,77,64,77,65,63,75,76,63,76,64,62,65,77,62,77,74,75,74,78,75,78,79,76,80,81,76,81,77,75,79,80,75,80,76,74,82,83,74,83,78,77,81,84,77,84,85,74,77,85,74,85,82,78,83,84,78,84,81,82,86,87,82,87,83,85,84,88,85,88,89,86,89,88,86,88,87,82,85,89,82,89,86,83,87,88,83,88,84,79,78,90,79,90,91,80,92,93,80,93,81,79,91,92,79,92,80,78,81,93,78,93,90,91,90,93,91,93,92],lengthM:2.0833333333333335}},{id:"corner-slotted-2",count:13,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-781",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,-.815333,-.12,-.009,-.833333,-.12,.009,-.815333,-.12,.009,-.815333,0,.009,-.833333,0,.009,-.713333,0,-.009,-.713333,-.12,-.009,-.713333,-.12,.009,-.713333,0,.009,-.815333,.102,-.009,-.713333,.102,-.009,-.713333,.102,.009,-.815333,.102,.009,-.434667,0,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,0,.009,-.434667,.102,-.009,-.434667,.102,.009,-.713333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.713333,.12,.009,-.398667,0,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,0,.009,-.018,0,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,0,.009,-.398667,.102,-.009,-.018,.102,-.009,-.018,.102,.009,-.398667,.102,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,0,-.009,.018,-.12,-.009,.018,-.12,.009,.018,0,.009,.398667,0,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,0,.009,.018,.102,-.009,.398667,.102,-.009,.398667,.102,.009,.018,.102,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,0,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,0,.009,.815333,0,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,0,.009,.434667,.102,-.009,.815333,.102,-.009,.815333,.102,.009,.434667,.102,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.833333,0,-.009,.833333,-.12,-.009,.833333,-.12,.009,.833333,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,9,8,16,9,16,17,10,18,19,10,19,11,9,17,18,9,18,10,8,13,20,8,20,16,11,19,21,11,21,14,16,20,21,16,21,19,13,22,23,13,23,20,14,21,24,14,24,25,22,25,24,22,24,23,13,14,25,13,25,22,20,23,24,20,24,21,17,16,26,17,26,27,18,28,29,18,29,19,17,27,28,17,28,18,16,19,29,16,29,26,27,26,30,27,30,31,28,32,33,28,33,29,27,31,32,27,32,28,26,34,35,26,35,30,29,33,36,29,36,37,26,29,37,26,37,34,30,35,36,30,36,33,34,38,39,34,39,35,37,36,40,37,40,41,38,41,40,38,40,39,34,37,41,34,41,38,35,39,40,35,40,36,31,30,42,31,42,43,32,44,45,32,45,33,31,43,44,31,44,32,30,33,45,30,45,42,43,42,46,43,46,47,44,48,49,44,49,45,43,47,48,43,48,44,42,50,51,42,51,46,45,49,52,45,52,53,42,45,53,42,53,50,46,51,52,46,52,49,50,54,55,50,55,51,53,52,56,53,56,57,54,57,56,54,56,55,50,53,57,50,57,54,51,55,56,51,56,52,47,46,58,47,58,59,48,60,61,48,61,49,47,59,60,47,60,48,46,49,61,46,61,58,59,58,62,59,62,63,60,64,65,60,65,61,59,63,64,59,64,60,58,66,67,58,67,62,61,65,68,61,68,69,58,61,69,58,69,66,62,67,68,62,68,65,66,70,71,66,71,67,69,68,72,69,72,73,70,73,72,70,72,71,66,69,73,66,73,70,67,71,72,67,72,68,63,62,74,63,74,75,64,76,77,64,77,65,63,75,76,63,76,64,62,65,77,62,77,74,75,74,77,75,77,76],lengthM:1.6666666666666667}}]},{id:"corner-plain",name:"\u0141\u0105czeniowa \xB7 naro\u017Cna 120 mm",count:43,variants:[{id:"corner-plain-1",count:7,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-913",positions:[-1.25,-.102,-.009,-1.25,0,-.009,-1.232,0,-.009,-1.232,-.102,-.009,-1.25,-.102,.009,-1.232,-.102,.009,-1.232,0,.009,-1.25,0,.009,-1.13,0,-.009,-1.13,-.102,-.009,-1.13,-.102,.009,-1.13,0,.009,-1.232,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-1.232,.12,.009,-1.13,-.12,-.009,-.851333,-.102,-.009,-.851333,-.12,-.009,-1.13,-.12,.009,-.851333,-.12,.009,-.851333,-.102,.009,-.851333,0,-.009,-.851333,0,.009,-.851333,.12,-.009,-.851333,.12,.009,-.815333,-.102,-.009,-.815333,-.12,-.009,-.815333,-.12,.009,-.815333,-.102,.009,-.815333,0,-.009,-.815333,0,.009,-.434667,-.102,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,-.102,.009,-.434667,0,-.009,-.434667,0,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,-.102,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,-.102,.009,-.398667,0,-.009,-.398667,0,.009,-.018,-.102,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,-.102,.009,-.018,0,-.009,-.018,0,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,-.102,-.009,.018,-.12,-.009,.018,-.12,.009,.018,-.102,.009,.018,0,-.009,.018,0,.009,.398667,-.102,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,-.102,.009,.398667,0,-.009,.398667,0,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,-.102,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,-.102,.009,.434667,0,-.009,.434667,0,.009,.815333,-.102,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,-.102,.009,.815333,0,-.009,.815333,0,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.851333,-.102,-.009,.851333,-.12,-.009,.851333,-.12,.009,.851333,-.102,.009,.851333,0,-.009,.851333,0,.009,1.232,-.102,-.009,1.232,-.12,-.009,1.232,-.12,.009,1.232,-.102,.009,1.232,0,-.009,1.232,0,.009,.851333,.12,-.009,1.232,.12,-.009,1.232,.12,.009,.851333,.12,.009,1.25,-.102,-.009,1.25,-.12,-.009,1.25,-.12,.009,1.25,-.102,.009,1.25,0,-.009,1.25,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,16,9,17,16,17,18,19,20,21,19,21,10,16,18,20,16,20,19,16,19,10,16,10,9,9,8,22,9,22,17,10,21,23,10,23,11,8,13,24,8,24,22,11,23,25,11,25,14,13,14,25,13,25,24,22,24,25,22,25,23,18,17,26,18,26,27,20,28,29,20,29,21,18,27,28,18,28,20,17,22,30,17,30,26,21,29,31,21,31,23,22,23,31,22,31,30,27,26,32,27,32,33,28,34,35,28,35,29,27,33,34,27,34,28,26,30,36,26,36,32,29,35,37,29,37,31,30,38,39,30,39,36,31,37,40,31,40,41,38,41,40,38,40,39,30,31,41,30,41,38,36,39,40,36,40,37,33,32,42,33,42,43,34,44,45,34,45,35,33,43,44,33,44,34,32,36,46,32,46,42,35,45,47,35,47,37,36,37,47,36,47,46,43,42,48,43,48,49,44,50,51,44,51,45,43,49,50,43,50,44,42,46,52,42,52,48,45,51,53,45,53,47,46,54,55,46,55,52,47,53,56,47,56,57,54,57,56,54,56,55,46,47,57,46,57,54,52,55,56,52,56,53,49,48,58,49,58,59,50,60,61,50,61,51,49,59,60,49,60,50,48,52,62,48,62,58,51,61,63,51,63,53,52,53,63,52,63,62,59,58,64,59,64,65,60,66,67,60,67,61,59,65,66,59,66,60,58,62,68,58,68,64,61,67,69,61,69,63,62,70,71,62,71,68,63,69,72,63,72,73,70,73,72,70,72,71,62,63,73,62,73,70,68,71,72,68,72,69,65,64,74,65,74,75,66,76,77,66,77,67,65,75,76,65,76,66,64,68,78,64,78,74,67,77,79,67,79,69,68,69,79,68,79,78,75,74,80,75,80,81,76,82,83,76,83,77,75,81,82,75,82,76,74,78,84,74,84,80,77,83,85,77,85,79,78,86,87,78,87,84,79,85,88,79,88,89,86,89,88,86,88,87,78,79,89,78,89,86,84,87,88,84,88,85,81,80,90,81,90,91,82,92,93,82,93,83,81,91,92,81,92,82,80,84,94,80,94,90,83,93,95,83,95,85,84,85,95,84,95,94,91,90,96,91,96,97,92,98,99,92,99,93,91,97,98,91,98,92,90,94,100,90,100,96,93,99,101,93,101,95,94,102,103,94,103,100,95,101,104,95,104,105,102,105,104,102,104,103,94,95,105,94,105,102,100,103,104,100,104,101,97,96,106,97,106,107,98,108,109,98,109,99,97,107,108,97,108,98,107,106,109,107,109,108,96,100,110,96,110,106,99,109,111,99,111,101,100,101,111,100,111,110,106,110,111,106,111,109],lengthM:2.5}},{id:"corner-plain-2",count:15,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-879",positions:[-1.041667,-.102,-.009,-1.041667,0,-.009,-1.023667,0,-.009,-1.023667,-.102,-.009,-1.041667,-.102,.009,-1.023667,-.102,.009,-1.023667,0,.009,-1.041667,0,.009,-.921667,0,-.009,-.921667,-.102,-.009,-.921667,-.102,.009,-.921667,0,.009,-1.023667,.12,-.009,-.921667,.12,-.009,-.921667,.12,.009,-1.023667,.12,.009,-.921667,-.12,-.009,-.643,-.102,-.009,-.643,-.12,-.009,-.921667,-.12,.009,-.643,-.12,.009,-.643,-.102,.009,-.643,0,-.009,-.643,0,.009,-.643,.12,-.009,-.643,.12,.009,-.607,-.102,-.009,-.607,-.12,-.009,-.607,-.12,.009,-.607,-.102,.009,-.607,0,-.009,-.607,0,.009,-.226333,-.102,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,-.102,.009,-.226333,0,-.009,-.226333,0,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,-.102,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,-.102,.009,-.190333,0,-.009,-.190333,0,.009,.190333,-.102,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,-.102,.009,.190333,0,-.009,.190333,0,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,-.102,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,-.102,.009,.226333,0,-.009,.226333,0,.009,.607,-.102,-.009,.607,-.12,-.009,.607,-.12,.009,.607,-.102,.009,.607,0,-.009,.607,0,.009,.226333,.12,-.009,.607,.12,-.009,.607,.12,.009,.226333,.12,.009,.643,-.102,-.009,.643,-.12,-.009,.643,-.12,.009,.643,-.102,.009,.643,0,-.009,.643,0,.009,1.023667,-.102,-.009,1.023667,-.12,-.009,1.023667,-.12,.009,1.023667,-.102,.009,1.023667,0,-.009,1.023667,0,.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,.12,.009,.643,.12,.009,1.041667,-.102,-.009,1.041667,-.12,-.009,1.041667,-.12,.009,1.041667,-.102,.009,1.041667,0,-.009,1.041667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,12,15,14,12,14,13,2,6,15,2,15,12,16,9,17,16,17,18,19,20,21,19,21,10,16,18,20,16,20,19,16,19,10,16,10,9,9,8,22,9,22,17,10,21,23,10,23,11,8,13,24,8,24,22,11,23,25,11,25,14,13,14,25,13,25,24,22,24,25,22,25,23,18,17,26,18,26,27,20,28,29,20,29,21,18,27,28,18,28,20,17,22,30,17,30,26,21,29,31,21,31,23,22,23,31,22,31,30,27,26,32,27,32,33,28,34,35,28,35,29,27,33,34,27,34,28,26,30,36,26,36,32,29,35,37,29,37,31,30,38,39,30,39,36,31,37,40,31,40,41,38,41,40,38,40,39,30,31,41,30,41,38,36,39,40,36,40,37,33,32,42,33,42,43,34,44,45,34,45,35,33,43,44,33,44,34,32,36,46,32,46,42,35,45,47,35,47,37,36,37,47,36,47,46,43,42,48,43,48,49,44,50,51,44,51,45,43,49,50,43,50,44,42,46,52,42,52,48,45,51,53,45,53,47,46,54,55,46,55,52,47,53,56,47,56,57,54,57,56,54,56,55,46,47,57,46,57,54,52,55,56,52,56,53,49,48,58,49,58,59,50,60,61,50,61,51,49,59,60,49,60,50,48,52,62,48,62,58,51,61,63,51,63,53,52,53,63,52,63,62,59,58,64,59,64,65,60,66,67,60,67,61,59,65,66,59,66,60,58,62,68,58,68,64,61,67,69,61,69,63,62,70,71,62,71,68,63,69,72,63,72,73,70,73,72,70,72,71,62,63,73,62,73,70,68,71,72,68,72,69,65,64,74,65,74,75,66,76,77,66,77,67,65,75,76,65,76,66,64,68,78,64,78,74,67,77,79,67,79,69,68,69,79,68,79,78,75,74,80,75,80,81,76,82,83,76,83,77,75,81,82,75,82,76,74,78,84,74,84,80,77,83,85,77,85,79,78,86,87,78,87,84,79,85,88,79,88,89,86,89,88,86,88,87,78,79,89,78,89,86,84,87,88,84,88,85,81,80,90,81,90,91,82,92,93,82,93,83,81,91,92,81,92,82,91,90,93,91,93,92,80,84,94,80,94,90,83,93,95,83,95,85,84,85,95,84,95,94,90,94,95,90,95,93],lengthM:2.0833333333333335}},{id:"corner-plain-3",count:7,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-915",positions:[-.833333,-.12,-.009,-.833333,-.102,-.009,-.815333,-.102,-.009,-.815333,-.12,-.009,-.833333,-.12,.009,-.815333,-.12,.009,-.815333,-.102,.009,-.833333,-.102,.009,-.833333,0,-.009,-.815333,0,-.009,-.815333,0,.009,-.833333,0,.009,-.434667,-.102,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,-.102,.009,-.434667,0,-.009,-.434667,0,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,-.102,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,-.102,.009,-.398667,0,-.009,-.398667,0,.009,-.018,-.102,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,-.102,.009,-.018,0,-.009,-.018,0,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,-.102,-.009,.018,-.12,-.009,.018,-.12,.009,.018,-.102,.009,.018,0,-.009,.018,0,.009,.398667,-.102,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,-.102,.009,.398667,0,-.009,.398667,0,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,-.102,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,-.102,.009,.434667,0,-.009,.434667,0,.009,.713333,-.102,-.009,.713333,-.12,-.009,.713333,-.12,.009,.713333,-.102,.009,.713333,0,-.009,.713333,0,.009,.434667,.12,-.009,.713333,.12,-.009,.713333,.12,.009,.434667,.12,.009,.815333,0,-.009,.815333,-.102,-.009,.815333,-.102,.009,.815333,0,.009,.815333,.12,-.009,.815333,.12,.009,.833333,0,-.009,.833333,-.102,-.009,.833333,-.102,.009,.833333,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,16,19,20,16,20,17,13,12,22,13,22,23,14,24,25,14,25,15,13,23,24,13,24,14,12,16,26,12,26,22,15,25,27,15,27,17,16,17,27,16,27,26,23,22,28,23,28,29,24,30,31,24,31,25,23,29,30,23,30,24,22,26,32,22,32,28,25,31,33,25,33,27,26,34,35,26,35,32,27,33,36,27,36,37,34,37,36,34,36,35,26,27,37,26,37,34,32,35,36,32,36,33,29,28,38,29,38,39,30,40,41,30,41,31,29,39,40,29,40,30,28,32,42,28,42,38,31,41,43,31,43,33,32,33,43,32,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,48,51,52,48,52,49,45,44,54,45,54,55,46,56,57,46,57,47,45,55,56,45,56,46,44,48,58,44,58,54,47,57,59,47,59,49,48,49,59,48,59,58,55,54,60,55,60,61,56,62,63,56,63,57,55,61,62,55,62,56,61,60,63,61,63,62,54,58,64,54,64,60,57,63,65,57,65,59,58,66,67,58,67,64,59,65,68,59,68,69,66,69,68,66,68,67,58,59,69,58,69,66,60,64,70,60,70,71,63,72,73,63,73,65,60,71,72,60,72,63,64,67,74,64,74,70,65,73,75,65,75,68,67,68,75,67,75,74,70,74,75,70,75,73,71,70,76,71,76,77,72,78,79,72,79,73,71,77,78,71,78,72,70,73,79,70,79,76,77,76,79,77,79,78],lengthM:1.6666666666666667}},{id:"corner-plain-4",count:14,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-1004",positions:[-.625,-.12,-.009,-.625,-.102,-.009,-.607,-.102,-.009,-.607,-.12,-.009,-.625,-.12,.009,-.607,-.12,.009,-.607,-.102,.009,-.625,-.102,.009,-.625,0,-.009,-.607,0,-.009,-.607,0,.009,-.625,0,.009,-.226333,-.102,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,-.102,.009,-.226333,0,-.009,-.226333,0,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,-.102,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,-.102,.009,-.190333,0,-.009,-.190333,0,.009,.190333,-.102,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,-.102,.009,.190333,0,-.009,.190333,0,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,-.102,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,-.102,.009,.226333,0,-.009,.226333,0,.009,.505,-.102,-.009,.505,-.12,-.009,.505,-.12,.009,.505,-.102,.009,.505,0,-.009,.505,0,.009,.226333,.12,-.009,.505,.12,-.009,.505,.12,.009,.226333,.12,.009,.607,0,-.009,.607,-.102,-.009,.607,-.102,.009,.607,0,.009,.607,.12,-.009,.607,.12,.009,.625,0,-.009,.625,-.102,-.009,.625,-.102,.009,.625,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,16,19,20,16,20,17,13,12,22,13,22,23,14,24,25,14,25,15,13,23,24,13,24,14,12,16,26,12,26,22,15,25,27,15,27,17,16,17,27,16,27,26,23,22,28,23,28,29,24,30,31,24,31,25,23,29,30,23,30,24,22,26,32,22,32,28,25,31,33,25,33,27,26,34,35,26,35,32,27,33,36,27,36,37,34,37,36,34,36,35,26,27,37,26,37,34,32,35,36,32,36,33,29,28,38,29,38,39,30,40,41,30,41,31,29,39,40,29,40,30,28,32,42,28,42,38,31,41,43,31,43,33,32,33,43,32,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,45,44,47,45,47,46,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,44,48,54,44,54,55,47,56,57,47,57,49,44,55,56,44,56,47,48,51,58,48,58,54,49,57,59,49,59,52,51,52,59,51,59,58,54,58,59,54,59,57,55,54,60,55,60,61,56,62,63,56,63,57,55,61,62,55,62,56,54,57,63,54,63,60,61,60,63,61,63,62],lengthM:1.25}}]},{id:"inset-slotted",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, z\u0119by",count:14,variants:[{id:"inset-slotted-1",count:14,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-956",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,-1.023667,-.12,-.009,-1.041667,-.12,.009,-1.023667,-.12,.009,-1.023667,0,.009,-1.041667,0,.009,-.921667,0,-.009,-.921667,-.12,-.009,-.921667,-.12,.009,-.921667,0,.009,-1.023667,.102,-.009,-.921667,.102,-.009,-.921667,.102,.009,-1.023667,.102,.009,-1.023667,.12,-.009,-.921667,.12,-.009,-.921667,.12,.009,-1.023667,.12,.009,-.801667,0,-.009,-.801667,-.12,-.009,-.801667,-.12,.009,-.801667,0,.009,-.801667,.102,-.009,-.801667,.102,.009,-.643,0,-.009,-.643,-.12,-.009,-.643,-.12,.009,-.643,0,.009,-.643,.102,-.009,-.643,.102,.009,-.801667,.12,-.009,-.643,.12,-.009,-.643,.12,.009,-.801667,.12,.009,-.607,0,-.009,-.607,-.12,-.009,-.607,-.12,.009,-.607,0,.009,-.226333,0,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,0,.009,-.607,.102,-.009,-.226333,.102,-.009,-.226333,.102,.009,-.607,.102,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,0,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,0,.009,.190333,0,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,0,.009,-.190333,.102,-.009,.190333,.102,-.009,.190333,.102,.009,-.190333,.102,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,0,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,0,.009,.607,0,-.009,.607,-.12,-.009,.607,-.12,.009,.607,0,.009,.226333,.102,-.009,.607,.102,-.009,.607,.102,.009,.226333,.102,.009,.226333,.12,-.009,.607,.12,-.009,.607,.12,.009,.226333,.12,.009,.643,0,-.009,.643,-.12,-.009,.643,-.12,.009,.643,0,.009,1.023667,0,-.009,1.023667,-.12,-.009,1.023667,-.12,.009,1.023667,0,.009,.643,.102,-.009,1.023667,.102,-.009,1.023667,.102,.009,.643,.102,.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,.12,.009,.643,.12,.009,1.041667,0,-.009,1.041667,-.12,-.009,1.041667,-.12,.009,1.041667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,103,101,103,102],lengthM:2.0833333333333335}}]},{id:"inset-plain",name:"\u0141\u0105czeniowa \xB7 odsuni\u0119ta, pe\u0142na kraw\u0119d\u017A",count:19,variants:[{id:"inset-plain-1",count:14,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-1003",positions:[-1.041667,-.12,-.009,-1.041667,-.102,-.009,-1.023667,-.102,-.009,-1.023667,-.12,-.009,-1.041667,-.12,.009,-1.023667,-.12,.009,-1.023667,-.102,.009,-1.041667,-.102,.009,-1.041667,0,-.009,-1.023667,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-.921667,-.102,-.009,-.921667,-.12,-.009,-.921667,-.12,.009,-.921667,-.102,.009,-.921667,0,-.009,-.921667,0,.009,-1.023667,.12,-.009,-.921667,.12,-.009,-.921667,.12,.009,-1.023667,.12,.009,-.801667,0,-.009,-.801667,-.102,-.009,-.801667,-.102,.009,-.801667,0,.009,-.801667,.12,-.009,-.801667,.12,.009,-.801667,-.12,-.009,-.643,-.102,-.009,-.643,-.12,-.009,-.801667,-.12,.009,-.643,-.12,.009,-.643,-.102,.009,-.643,0,-.009,-.643,0,.009,-.643,.12,-.009,-.643,.12,.009,-.607,-.102,-.009,-.607,-.12,-.009,-.607,-.12,.009,-.607,-.102,.009,-.607,0,-.009,-.607,0,.009,-.226333,-.102,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,-.102,.009,-.226333,0,-.009,-.226333,0,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,-.102,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,-.102,.009,-.190333,0,-.009,-.190333,0,.009,.190333,-.102,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,-.102,.009,.190333,0,-.009,.190333,0,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,-.102,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,-.102,.009,.226333,0,-.009,.226333,0,.009,.607,-.102,-.009,.607,-.12,-.009,.607,-.12,.009,.607,-.102,.009,.607,0,-.009,.607,0,.009,.226333,.12,-.009,.607,.12,-.009,.607,.12,.009,.226333,.12,.009,.643,-.102,-.009,.643,-.12,-.009,.643,-.12,.009,.643,-.102,.009,.643,0,-.009,.643,0,.009,1.023667,-.102,-.009,1.023667,-.12,-.009,1.023667,-.12,.009,1.023667,-.102,.009,1.023667,0,-.009,1.023667,0,.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,.12,.009,.643,.12,.009,1.041667,-.102,-.009,1.041667,-.12,-.009,1.041667,-.12,.009,1.041667,-.102,.009,1.041667,0,-.009,1.041667,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,13,12,15,13,15,14,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,12,16,22,12,22,23,15,24,25,15,25,17,12,23,24,12,24,15,16,19,26,16,26,22,17,25,27,17,27,20,19,20,27,19,27,26,28,23,29,28,29,30,31,32,33,31,33,24,28,30,32,28,32,31,28,31,24,28,24,23,23,22,34,23,34,29,24,33,35,24,35,25,22,26,36,22,36,34,25,35,37,25,37,27,26,27,37,26,37,36,34,36,37,34,37,35,30,29,38,30,38,39,32,40,41,32,41,33,30,39,40,30,40,32,29,34,42,29,42,38,33,41,43,33,43,35,34,35,43,34,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,48,51,52,48,52,49,45,44,54,45,54,55,46,56,57,46,57,47,45,55,56,45,56,46,44,48,58,44,58,54,47,57,59,47,59,49,48,49,59,48,59,58,55,54,60,55,60,61,56,62,63,56,63,57,55,61,62,55,62,56,54,58,64,54,64,60,57,63,65,57,65,59,58,66,67,58,67,64,59,65,68,59,68,69,66,69,68,66,68,67,58,59,69,58,69,66,64,67,68,64,68,65,61,60,70,61,70,71,62,72,73,62,73,63,61,71,72,61,72,62,60,64,74,60,74,70,63,73,75,63,75,65,64,65,75,64,75,74,71,70,76,71,76,77,72,78,79,72,79,73,71,77,78,71,78,72,70,74,80,70,80,76,73,79,81,73,81,75,74,82,83,74,83,80,75,81,84,75,84,85,82,85,84,82,84,83,74,75,85,74,85,82,80,83,84,80,84,81,77,76,86,77,86,87,78,88,89,78,89,79,77,87,88,77,88,78,76,80,90,76,90,86,79,89,91,79,91,81,80,81,91,80,91,90,87,86,92,87,92,93,88,94,95,88,95,89,87,93,94,87,94,88,86,90,96,86,96,92,89,95,97,89,97,91,90,98,99,90,99,96,91,97,100,91,100,101,98,101,100,98,100,99,90,91,101,90,101,98,96,99,100,96,100,97,93,92,102,93,102,103,94,104,105,94,105,95,93,103,104,93,104,94,103,102,105,103,105,104,92,96,106,92,106,102,95,105,107,95,107,97,96,97,107,96,107,106,102,106,107,102,107,105],lengthM:2.0833333333333335}},{id:"inset-plain-2",count:5,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-1079",positions:[-.625,-.12,-.009,-.625,-.102,-.009,-.607,-.102,-.009,-.607,-.12,-.009,-.625,-.12,.009,-.607,-.12,.009,-.607,-.102,.009,-.625,-.102,.009,-.625,0,-.009,-.607,0,-.009,-.607,0,.009,-.625,0,.009,-.226333,-.102,-.009,-.226333,-.12,-.009,-.226333,-.12,.009,-.226333,-.102,.009,-.226333,0,-.009,-.226333,0,.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,.12,.009,-.607,.12,.009,-.190333,-.102,-.009,-.190333,-.12,-.009,-.190333,-.12,.009,-.190333,-.102,.009,-.190333,0,-.009,-.190333,0,.009,.190333,-.102,-.009,.190333,-.12,-.009,.190333,-.12,.009,.190333,-.102,.009,.190333,0,-.009,.190333,0,.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,.12,.009,-.190333,.12,.009,.226333,-.102,-.009,.226333,-.12,-.009,.226333,-.12,.009,.226333,-.102,.009,.226333,0,-.009,.226333,0,.009,.385,-.102,-.009,.385,-.12,-.009,.385,-.12,.009,.385,-.102,.009,.385,0,-.009,.385,0,.009,.226333,.12,-.009,.385,.12,-.009,.385,.12,.009,.226333,.12,.009,.505,0,-.009,.505,-.102,-.009,.505,-.102,.009,.505,0,.009,.505,.12,-.009,.505,.12,.009,.505,-.12,-.009,.607,-.102,-.009,.607,-.12,-.009,.505,-.12,.009,.607,-.12,.009,.607,-.102,.009,.607,0,-.009,.607,0,.009,.607,.12,-.009,.607,.12,.009,.625,-.102,-.009,.625,-.12,-.009,.625,-.12,.009,.625,-.102,.009,.625,0,-.009,.625,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,0,4,7,0,7,1,1,8,9,1,9,2,7,6,10,7,10,11,8,11,10,8,10,9,1,7,11,1,11,8,3,2,12,3,12,13,5,14,15,5,15,6,3,13,14,3,14,5,2,9,16,2,16,12,6,15,17,6,17,10,9,18,19,9,19,16,10,17,20,10,20,21,18,21,20,18,20,19,9,10,21,9,21,18,16,19,20,16,20,17,13,12,22,13,22,23,14,24,25,14,25,15,13,23,24,13,24,14,12,16,26,12,26,22,15,25,27,15,27,17,16,17,27,16,27,26,23,22,28,23,28,29,24,30,31,24,31,25,23,29,30,23,30,24,22,26,32,22,32,28,25,31,33,25,33,27,26,34,35,26,35,32,27,33,36,27,36,37,34,37,36,34,36,35,26,27,37,26,37,34,32,35,36,32,36,33,29,28,38,29,38,39,30,40,41,30,41,31,29,39,40,29,40,30,28,32,42,28,42,38,31,41,43,31,43,33,32,33,43,32,43,42,39,38,44,39,44,45,40,46,47,40,47,41,39,45,46,39,46,40,45,44,47,45,47,46,38,42,48,38,48,44,41,47,49,41,49,43,42,50,51,42,51,48,43,49,52,43,52,53,50,53,52,50,52,51,42,43,53,42,53,50,44,48,54,44,54,55,47,56,57,47,57,49,44,55,56,44,56,47,48,51,58,48,58,54,49,57,59,49,59,52,51,52,59,51,59,58,60,55,61,60,61,62,63,64,65,63,65,56,60,62,64,60,64,63,60,63,56,60,56,55,55,54,66,55,66,61,56,65,67,56,67,57,54,58,68,54,68,66,57,67,69,57,69,59,58,59,69,58,69,68,66,68,69,66,69,67,62,61,70,62,70,71,64,72,73,64,73,65,62,71,72,62,72,64,71,70,73,71,73,72,61,66,74,61,74,70,65,73,75,65,75,67,66,67,75,66,75,74,70,74,75,70,75,73],lengthM:1.25}}]},{id:"combined",name:"\u0141\u0105czeniowa \xB7 dwa wybrania",count:7,variants:[{id:"combined-1",count:7,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-1057",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,-1.232,-.12,-.009,-1.25,-.12,.009,-1.232,-.12,.009,-1.232,0,.009,-1.25,0,.009,-1.13,0,-.009,-1.13,-.12,-.009,-1.13,-.12,.009,-1.13,0,.009,-1.232,.102,-.009,-1.13,.102,-.009,-1.13,.102,.009,-1.232,.102,.009,-1.232,.12,-.009,-1.13,.12,-.009,-1.13,.12,.009,-1.232,.12,.009,-1.01,0,-.009,-1.01,-.12,-.009,-1.01,-.12,.009,-1.01,0,.009,-1.01,.102,-.009,-1.01,.102,.009,-.851333,0,-.009,-.851333,-.12,-.009,-.851333,-.12,.009,-.851333,0,.009,-.851333,.102,-.009,-.851333,.102,.009,-1.01,.12,-.009,-.851333,.12,-.009,-.851333,.12,.009,-1.01,.12,.009,-.815333,0,-.009,-.815333,-.12,-.009,-.815333,-.12,.009,-.815333,0,.009,-.434667,0,-.009,-.434667,-.12,-.009,-.434667,-.12,.009,-.434667,0,.009,-.815333,.102,-.009,-.434667,.102,-.009,-.434667,.102,.009,-.815333,.102,.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,.12,.009,-.815333,.12,.009,-.398667,0,-.009,-.398667,-.12,-.009,-.398667,-.12,.009,-.398667,0,.009,-.018,0,-.009,-.018,-.12,-.009,-.018,-.12,.009,-.018,0,.009,-.398667,.102,-.009,-.018,.102,-.009,-.018,.102,.009,-.398667,.102,.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,.12,.009,-.398667,.12,.009,.018,0,-.009,.018,-.12,-.009,.018,-.12,.009,.018,0,.009,.398667,0,-.009,.398667,-.12,-.009,.398667,-.12,.009,.398667,0,.009,.018,.102,-.009,.398667,.102,-.009,.398667,.102,.009,.018,.102,.009,.018,.12,-.009,.398667,.12,-.009,.398667,.12,.009,.018,.12,.009,.434667,0,-.009,.434667,-.12,-.009,.434667,-.12,.009,.434667,0,.009,.815333,0,-.009,.815333,-.12,-.009,.815333,-.12,.009,.815333,0,.009,.434667,.102,-.009,.815333,.102,-.009,.815333,.102,.009,.434667,.102,.009,.434667,.12,-.009,.815333,.12,-.009,.815333,.12,.009,.434667,.12,.009,.851333,0,-.009,.851333,-.12,-.009,.851333,-.12,.009,.851333,0,.009,1.13,0,-.009,1.13,-.12,-.009,1.13,-.12,.009,1.13,0,.009,.851333,.102,-.009,1.13,.102,-.009,1.13,.102,.009,.851333,.102,.009,.851333,.12,-.009,1.13,.12,-.009,1.13,.12,.009,.851333,.12,.009,1.232,0,-.009,1.232,-.12,-.009,1.232,-.12,.009,1.232,0,.009,1.232,.102,-.009,1.232,.102,.009,1.25,0,-.009,1.25,-.12,-.009,1.25,-.12,.009,1.25,0,.009],indices:[0,1,2,0,2,3,4,5,6,4,6,7,0,3,5,0,5,4,1,7,6,1,6,2,0,4,7,0,7,1,3,2,8,3,8,9,5,10,11,5,11,6,3,9,10,3,10,5,2,12,13,2,13,8,6,11,14,6,14,15,2,6,15,2,15,12,12,16,17,12,17,13,15,14,18,15,18,19,16,19,18,16,18,17,12,15,19,12,19,16,13,17,18,13,18,14,9,8,20,9,20,21,10,22,23,10,23,11,9,21,22,9,22,10,8,13,24,8,24,20,11,23,25,11,25,14,13,14,25,13,25,24,21,20,26,21,26,27,22,28,29,22,29,23,21,27,28,21,28,22,20,24,30,20,30,26,23,29,31,23,31,25,26,30,31,26,31,29,24,32,33,24,33,30,25,31,34,25,34,35,32,35,34,32,34,33,24,25,35,24,35,32,30,33,34,30,34,31,27,26,36,27,36,37,28,38,39,28,39,29,27,37,38,27,38,28,26,29,39,26,39,36,37,36,40,37,40,41,38,42,43,38,43,39,37,41,42,37,42,38,36,44,45,36,45,40,39,43,46,39,46,47,36,39,47,36,47,44,40,45,46,40,46,43,44,48,49,44,49,45,47,46,50,47,50,51,48,51,50,48,50,49,44,47,51,44,51,48,45,49,50,45,50,46,41,40,52,41,52,53,42,54,55,42,55,43,41,53,54,41,54,42,40,43,55,40,55,52,53,52,56,53,56,57,54,58,59,54,59,55,53,57,58,53,58,54,52,60,61,52,61,56,55,59,62,55,62,63,52,55,63,52,63,60,56,61,62,56,62,59,60,64,65,60,65,61,63,62,66,63,66,67,64,67,66,64,66,65,60,63,67,60,67,64,61,65,66,61,66,62,57,56,68,57,68,69,58,70,71,58,71,59,57,69,70,57,70,58,56,59,71,56,71,68,69,68,72,69,72,73,70,74,75,70,75,71,69,73,74,69,74,70,68,76,77,68,77,72,71,75,78,71,78,79,68,71,79,68,79,76,72,77,78,72,78,75,76,80,81,76,81,77,79,78,82,79,82,83,80,83,82,80,82,81,76,79,83,76,83,80,77,81,82,77,82,78,73,72,84,73,84,85,74,86,87,74,87,75,73,85,86,73,86,74,72,75,87,72,87,84,85,84,88,85,88,89,86,90,91,86,91,87,85,89,90,85,90,86,84,92,93,84,93,88,87,91,94,87,94,95,84,87,95,84,95,92,88,93,94,88,94,91,92,96,97,92,97,93,95,94,98,95,98,99,96,99,98,96,98,97,92,95,99,92,99,96,93,97,98,93,98,94,89,88,100,89,100,101,90,102,103,90,103,91,89,101,102,89,102,90,88,91,103,88,103,100,101,100,104,101,104,105,102,106,107,102,107,103,101,105,106,101,106,102,100,108,109,100,109,104,103,107,110,103,110,111,100,103,111,100,111,108,108,112,113,108,113,109,111,110,114,111,114,115,112,115,114,112,114,113,108,111,115,108,115,112,109,113,114,109,114,110,105,104,116,105,116,117,106,118,119,106,119,107,105,117,118,105,118,106,104,109,120,104,120,116,107,119,121,107,121,110,109,110,121,109,121,120,116,120,121,116,121,119,117,116,122,117,122,123,118,124,125,118,125,119,117,123,124,117,124,118,116,119,125,116,125,122,123,122,125,123,125,124],lengthM:2.5}}]}]};var ds=i=>`${i.toLocaleString("pl-PL")} szt.`,Rd=i=>`${i.toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function gr(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function ju(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function Zu(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var tn=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Ju(i,e,t){let n=gr(e);i.classList.add("parts-catalogue");let r=tn("div","parts-catalogue-heading");r.append(tn("h4",null,"Rodzaje desek"),tn("span","parts-catalogue-total",ds(e.totalBoards)));let s=tn("p","parts-catalogue-lead","Deski w Twoim zestawie. Wybierz rodzaj i d\u0142ugo\u015B\u0107."),o=tn("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Rodzaje desek");let a=tn("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","D\u0142ugo\u015Bci i ilo\u015Bci");let c=tn("div","parts-variant-heading"),l=tn("h5"),d=tn("span");c.append(l,d),i.replaceChildren(c,a,r,s,o);function u(f,m=!0){n.variant=f;for(let _ of a.children)_.setAttribute("aria-pressed",String(_.dataset.partsVariant===f));t({...n},m)}function h(f,m=!0){n.family=f;let _=e.families.find(p=>p.id===f);for(let p of o.children)p.setAttribute("aria-pressed",String(p.dataset.partsFamily===f));l.textContent=_.name,d.textContent=`${ds(_.count)} \u0142\u0105cznie`;let g=_.variants.map(p=>{let w=tn("button","parts-variant");return w.type="button",w.dataset.partsVariant=p.id,w.append(tn("span",null,Rd(p.lengthM)),tn("strong",null,ds(p.count))),w.addEventListener("click",()=>u(p.id)),w});a.replaceChildren(...g),u(_.variants[0].id,m)}for(let f of e.families){let m=tn("button","parts-family");m.type="button",m.dataset.partsFamily=f.id;let _=tn("span","parts-family-count");_.append(tn("strong",null,ds(f.count)),tn("small",null,"\u0142\u0105cznie")),m.append(tn("span","parts-family-name",f.name),_),m.addEventListener("click",()=>h(f.id)),o.append(m)}return h(n.family,!1),{getSelection:()=>({...n})}}function $u(i,e=gr(i)){let{family:t,variant:n}=ju(i,e),r=new ut,s=[n.preview],o=new Ht({color:"#43948c",roughness:.75,side:en,flatShading:!0}),a=new un({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(c=>{let l=new vt;l.setAttribute("position",new pt(c.positions,3)),l.setIndex(c.indices),l.computeVertexNormals();let d=new gt(l,o);d.add(new Sn(new Cn(l,30),a)),r.add(d)}),{root:r,direction:new P(.12,.65,3),annotation:`${t.name} \xB7 ${Rd(n.lengthM)} \xB7 ${ds(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(c=>c.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var Pd=yo,Cd=(...i)=>new P(...i),Id=[{title:"Punktem wyj\u015Bcia jest projekt budynku.",text:"Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od uk\u0142adu pomieszcze\u0144, wymiar\xF3w i za\u0142o\u017Ce\u0144 konkretnej inwestycji.",label:"Na wej\u015Bciu",items:["Rzuty kondygnacji","Wymiary i wysoko\u015Bci","Za\u0142o\u017Cenia inwestycji"]},{title:"Model AI Combstruct automatycznie generuje projekt konstrukcji.",text:"Na podstawie rzut\xF3w budynku dobiera uk\u0142ad desek i po\u0142\u0105cze\u0144. Pod\u0142oga, \u015Bciany, stropy i dach powstaj\u0105 we wsp\xF3lnym modelu 3D \u2014 z identyfikatorem i miejscem monta\u017Cu ka\u017Cdej cz\u0119\u015Bci.",label:"W jednym modelu",items:["Konstrukcja dopasowana do modu\u0142\xF3w systemu","Sp\xF3jny uk\u0142ad element\xF3w i po\u0142\u0105cze\u0144","Dane do produkcji i monta\u017Cu"]},{title:"Dok\u0142adnie wiadomo, co wyprodukowa\u0107.",text:"Z modelu powstaje precyzyjne zam\xF3wienie: rodzaje desek, wymiary, ilo\u015Bci i oznaczenia. Te same dane prowadz\u0105 od rozkroju p\u0142yt do przygotowania pakiet\xF3w na budow\u0119.",label:"Dla produkcji",items:["Wykaz cz\u0119\u015Bci, materia\u0142 i ilo\u015Bci","Rozkr\xF3j p\u0142yt i oznaczenia element\xF3w","Podzia\u0142 na pakiety do monta\u017Cu"]},{title:"Ka\u017Cdy element trafia na swoje miejsce.",text:"Oznaczone cz\u0119\u015Bci i ich miejsca we wsp\xF3lnym modelu u\u0142atwiaj\u0105 organizacj\u0119 budowy. Wykonawca wie, od czego zacz\u0105\u0107 i co do\u0142o\u017Cy\u0107 dalej. Ten sam system wspiera monta\u017C z ekip\u0105 i DIY.",label:"Na budowie",items:["Elementy oznaczone identyfikatorami","Czytelna kolejno\u015B\u0107 monta\u017Cu","DIY lub monta\u017C z ekip\u0105"]}];function q3(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new Pi(t);r.colorSpace=Zt;let s=new Os(new qr({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function Ku(i,e=gr(yo)){if(i===2){let y=$u(yo,e);return{...y,getManufacturingState:()=>({stage:i,...y.getPartsState(),example:yo.name})}}let t=xo(),n=t.dimensions,r=new ut;r.name="Combstruct Flow";let s=new Ht({color:"#c49b62",roughness:.85}),o=new Ht({color:"#43948c",roughness:.75}),a=new Ht({color:"#33493e",roughness:.85}),c=new un({color:"#66543a",transparent:!0,opacity:.45}),l=(y,U,R,N,z,H,W=a)=>{let k=new gt(new ti(y,U,R),W);return k.position.set(N,z,H),r.add(k),k},d=(y,U=s)=>{let R=new gt(y,U);return R.add(new Sn(new Cn(y,30),c)),r.add(R),R},u=(y,U,R,N,z)=>{let H=q3(y,z);H.position.set(U,R,N),r.add(H)};if(i===0){let y=new Ht({color:"#ffffff",roughness:1});l(n.width+1.8,.065,n.depth+1.8,0,-.085,0,y);for(let U of t.wallPanels){let R=[U.start,U.end,...U.holes.flatMap(N=>U.axis===0?[N.world.x0,N.world.x1]:[N.world.z0,N.world.z1])].sort((N,z)=>N-z);for(let N=1;N<R.length;N++){let z=R[N-1],H=R[N],W=(z+H)/2;H-z<.001||U.holes.some(k=>W>(U.axis===0?k.world.x0:k.world.z0)&&W<(U.axis===0?k.world.x1:k.world.z1))||(U.axis===0?l(H-z,.18,U.depth,W,.06,U.fixed):l(U.depth,.18,H-z,U.fixed,.06,W))}for(let N of U.holes){let z=U.axis===0?N.world.x0:N.world.z0,H=U.axis===0?N.world.x1:N.world.z1;N.kind==="window"&&(U.axis===0?l(H-z,.035,.035,(z+H)/2,.025,U.fixed,o):l(.035,.035,H-z,U.fixed,.025,(z+H)/2,o))}}for(let U of t.rooms)u(U.name,(U.x0+U.x1)/2,.26,(U.z0+U.z1)/2,U.id==="living"?3.5:3.2);return u(`${n.width.toFixed(2).replace(".",",")} m`,0,.03,n.halfDepth+.56,2.9),u(`${n.depth.toFixed(2).replace(".",",")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:Cd(.15,7,3.5),annotation:"Przyk\u0142ad: rzut Combstruct 30"}}let h=new Map(t.boards.map(y=>[y.id,y])),f=Ad.assembly.map(([y])=>h.get(y));if(f.length!==t.boards.length||f.some(y=>!y)||new Set(f).size!==f.length)throw new Error("Regenerate the assembly schedule for the current model");let m=[],_=[],g=[],p=[],w=0,S=0;for(let y of f){let U=y.mesh.geometry.index?y.mesh.geometry.toNonIndexed():y.mesh.geometry.clone();U.translate(...y.mesh.position.toArray()),m.push(U);let R=new Cn(U,30);_.push(R),w+=U.attributes.position.count,S+=R.attributes.position.count,g.push(w),p.push(S)}let v=mo(m,!1),C=mo(_,!1);m.forEach(y=>y.dispose()),_.forEach(y=>y.dispose());let A=new gt(v,s),D=new Sn(C,c);r.add(A,D);let x=f.length;if(i===1){let y=f.find(N=>N.surface==="front"&&N.axis===1&&N.index===9)||f[150],U=y.mesh.geometry.clone().translate(...y.mesh.position.toArray());d(U,o);let R=y.bounds.getCenter(Cd());u(_o(y).id,R.x,R.y+.45,R.z+.25,1.4)}return{root:r,direction:Cd(1.4,1,1.5),annotation:i===1?"Combstruct 30 \xB7 cyfrowy model element\xF3w":"Przesu\u0144 suwak i zobacz kolejno\u015B\u0107 monta\u017Cu",assembly(y){x=Math.max(0,Math.min(f.length,Math.round(y*f.length))),v.setDrawRange(0,g[x-1]||0),C.setDrawRange(0,p[x-1]||0)},getManufacturingState(){return{stage:i,totalBoards:f.length,visibleBoards:x,lastBoard:f[x-1]?.id||null,lastSupport:Ad.assembly[x-1]?.[1]||null,example:"Combstruct 30"}}}}var An=[{id:"deska",group:"Elementy i zasady",title:"Deska grzebieniowa",lead:"Jeden powtarzalny element tworzy pod\u0142og\u0119, \u015Bciany, strop i dach.",text:"Desk\u0119 wycinamy z p\u0142yty OSB, MFP lub sklejki. Wpusty si\u0119gaj\u0105 do po\u0142owy jej wysoko\u015Bci. Dwie deski z\u0142o\u017Cone powierzchniami tworz\u0105 par\u0119, a kr\xF3tsze warianty zachowuj\u0105 ten sam skok modu\u0142u.",rule:"24 cm wysoko\u015Bci. 18 mm grubo\u015Bci jednej deski.",scene:"beam"},{id:"uciaglanie",group:"Elementy i zasady",title:"Para desek i uci\u0105glanie",lead:"Przed\u0142u\u017Camy \u017Cebro, dok\u0142adaj\u0105c kolejne deski w dw\xF3ch warstwach.",text:"\u0141\u0105czenia warstw mijaj\u0105 si\u0119: przy ko\u0144cu deski w jednej warstwie biegnie pe\u0142ny odcinek drugiej. W tym przyk\u0142adzie rozsuni\u0119cie wzd\u0142u\u017C belki wynosi dwa modu\u0142y. Zako\u0144czenie jednej warstwy jest kr\xF3tsze o 24 cm.",rule:"Styki obu warstw nie wypadaj\u0105 w tym samym miejscu.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Elementy i zasady",title:"Pod\u0142oga i strop",lead:"\u017Bebra r\xF3wnoleg\u0142e do kr\xF3tszej kraw\u0119dzi p\u0142yty maj\u0105 wpusty do g\xF3ry.",text:"To sta\u0142a zasada uk\u0142adania. Na modelu wyr\xF3\u017Cnili\u015Bmy t\u0119 rodzin\u0119 \u017Ceber turkusem. \u017Bebra biegn\u0105ce prostopadle maj\u0105 wpusty w przeciwn\u0105 stron\u0119, dzi\u0119ki czemu obie rodziny sk\u0142adaj\u0105 si\u0119 na krzy\u017C.",rule:"Kr\xF3tszy kierunek no\u015Bny \u2014 wpusty do g\xF3ry.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Elementy i zasady",title:"\u015Aciany zewn\u0119trzne",lead:"Pionowe \u017Cebra maj\u0105 wpusty skierowane na zewn\u0105trz domu.",text:"Turkusowe piony pokazuj\u0105 w\u0142a\u015Bciw\u0105 orientacj\u0119. Poziome \u017Cebra \u0142\u0105cz\u0105 si\u0119 z nimi od przeciwnej strony. \u015Aciana zaczyna si\u0119 od poziomu podstawy konstrukcji, a jej zako\u0144czenia tworz\u0105 po\u0142\u0105czenie z pod\u0142og\u0105.",rule:"Piony: wpusty na zewn\u0105trz. Linia \u017Ceber pozostaje ci\u0105g\u0142a.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Elementy i zasady",title:"Dach",lead:"Tak\u017Ce w dachu kr\xF3tszy kierunek p\u0142yty ma wpusty do g\xF3ry.",text:"Na po\u0142aci \u201Edo g\xF3ry\u201D oznacza stron\u0119 pokrycia dachowego. Wyr\xF3\u017Cnione \u017Cebra biegn\u0105 r\xF3wnolegle do kr\xF3tszej kraw\u0119dzi po\u0142aci. Druga rodzina zamyka siatk\u0119 od przeciwnej strony.",rule:"Ta sama zasada co w stropie, obr\xF3cona razem z po\u0142aci\u0105.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Elementy i zasady",title:"Zako\u0144czenia i deski \u0142\u0105czeniowe",lead:"Te same deski, przygotowane do konkretnego miejsca w po\u0142\u0105czeniu.",text:"Zako\u0144czenie skracamy o wysoko\u015B\u0107 deski: 24 cm. Deski \u0142\u0105czeniowe maj\u0105 lokalne wybranie ods\u0142aniaj\u0105ce p\xF3\u0142 wpustu na kolejne \u017Cebro. Wybierz wariant, aby obejrze\u0107 sam kszta\u0142t.",rule:"Wybranie ods\u0142ania wpust. Nie przesuwamy przez nie osi \u017Ceber.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Po\u0142\u0105czenia",title:"\u017Bebra na krzy\u017C",lead:"Dwie prostopad\u0142e pary wsuwaj\u0105 si\u0119 w siebie przez wpusty.",text:"Ka\u017Cda rodzina oddaje po\u0142ow\u0119 wysoko\u015Bci w miejscu skrzy\u017Cowania. Po z\u0142o\u017Ceniu obie mieszcz\u0105 si\u0119 w jednej warstwie konstrukcyjnej o g\u0142\u0119boko\u015Bci 24 cm. Rozsu\u0144 elementy, aby zobaczy\u0107 obie strony wpustu.",rule:"Wpust do g\xF3ry spotyka wpust do do\u0142u.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",lead:"D\u0142u\u017Csza cz\u0119\u015B\u0107 zako\u0144czenia przylega do boku pe\u0142nego \u017Cebra.",text:"Kr\xF3tsza opiera si\u0119 o \u017Cebro, a d\u0142u\u017Csza schodzi obok niego do poziomu podstawy konstrukcji. Para \u015Bciany i para pod\u0142ogi pozostaj\u0105 w tej samej p\u0142aszczy\u017Anie.",rule:"Pe\u0142na deska i zako\u0144czenie uzupe\u0142niaj\u0105 si\u0119 na 24 cm.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",lead:"Pod\u0142oga mo\u017Ce biec dalej, poza obrys domu.",text:"Jedna warstwa przechodzi przez w\u0119ze\u0142 na taras. Druga przyjmuje pion \u015Bciany. Naro\u017Cne wybranie 18 \xD7 102 mm wraz z istniej\u0105cym p\xF3\u0142wpustem ods\u0142ania miejsce na poprzeczne \u017Cebro.",rule:"Ci\u0105g\u0142o\u015B\u0107 tarasu i miejsce na wszystkie trzy kierunki \u017Ceber.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",lead:"\u015Aciana wewn\u0119trzna wchodzi w plaster pod\u0142ogi na tej samej zasadzie.",text:"Pion zaczyna si\u0119 przy podstawie konstrukcji. Kr\xF3tsze zako\u0144czenie opiera si\u0119 na pe\u0142nym \u017Cebrze, a d\u0142u\u017Csze przylega do jego boku. Odsuni\u0119te wybranie w pe\u0142nej kraw\u0119dzi pozostawia miejsce na drugie \u017Cebro pod\u0142ogi.",rule:"Wsp\xF3lna linia \u017Ceber, bez dodatkowej deski pod \u015Bcian\u0105.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Po\u0142\u0105czenia",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",lead:"Poziome \u017Cebra obu \u015Bcian spotykaj\u0105 si\u0119 w jednej p\u0142aszczy\u017Anie.",text:"Zako\u0144czenia sk\u0142adaj\u0105 si\u0119 naprzemiennie. Wybranie w z\u0119batej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski, ods\u0142ania wpust na pion \u015Bciany zewn\u0119trznej. Ko\u0144c\xF3wka pozostaje zachowana.",rule:"Trzeci element wchodzi w ods\u0142oni\u0119ty wpust.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Po\u0142\u0105czenia",title:"Naro\u017Cnik \u015Bcian zewn\u0119trznych",lead:"Dwie \u015Bciany zamykaj\u0105 obrys w naro\u017Cniku.",text:"Poziome pary spotykaj\u0105 si\u0119 naprzemiennie pe\u0142n\u0105 desk\u0105 i zako\u0144czeniem. Ka\u017Cda \u015Bciana zachowuje sw\xF3j kierunek: wpusty jej pionowych \u017Ceber otwieraj\u0105 si\u0119 na zewn\u0105trz budynku.",rule:"Dwie \u015Bciany, wsp\xF3lny poziom par desek.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",lead:"Przegroda poprzeczna dochodzi do ci\u0105g\u0142ej \u015Bciany.",text:"Jedna warstwa przechodzi przez skrzy\u017Cowanie, druga przyjmuje zako\u0144czenie przegrody. Lokalne wybranie pozostawia miejsce na pion, bez odsuwania kt\xF3rejkolwiek pary poza lini\u0119 \u017Ceber.",rule:"Zako\u0144czenie wchodzi w ci\u0105g\u0142\u0105 par\u0119 desek.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",lead:"Zako\u0144czenie stropu wykorzystuje pe\u0142ne \u017Cebro \u015Bciany.",text:"Kr\xF3tsza cz\u0119\u015B\u0107 opiera si\u0119 na \u017Cebrze, d\u0142u\u017Csza przylega do niego z boku. Deska \u0142\u0105czeniowa ods\u0142ania wpust na poziomy rz\u0105d \u015Bciany. Pion mo\u017Ce kontynuowa\u0107 sw\xF3j bieg ponad stropem.",rule:"Strop nie przerywa linii konstrukcji \u015Bciany.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",lead:"Pion dochodzi do stropu w tej samej linii co \u017Cebro pod\u0142ogi.",text:"Pe\u0142na deska stropu przechodzi przez w\u0119ze\u0142. Zako\u0144czenia obu przegr\xF3d uzupe\u0142niaj\u0105 si\u0119, a wybranie pozostawia miejsce na poprzeczne \u017Cebro stropu.",rule:"Ta sama geometria zako\u0144cze\u0144 na dole i na g\xF3rze \u015Bciany.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Po\u0142\u0105czenia",title:"Dach \u2014 \u015Bciana",lead:"\u017Bebro po\u0142aci trafia w lini\u0119 pionowego \u017Cebra \u015Bciany.",text:"Przy okapie \u0142\u0105cz\u0105 si\u0119 dach, \u015Bciana i sufit. Br\u0105zowe \u017Cebro sufitu wype\u0142nia miejsce przy zako\u0144czeniu pionowej deski kr\xF3tszym o 24 cm. Turkusowe \u017Cebro dachowe biegnie dalej poza \u015Bcian\u0119, tworz\u0105c okap.",rule:"Po\u0142a\u0107 i \u015Bciana spotykaj\u0105 si\u0119 na tej samej linii \u017Cebra.",scene:"roof-wall"},{id:"kalenica",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie po\u0142aci w kalenicy",lead:"Dwie po\u0142acie zamykaj\u0105 dach dopasowanymi zako\u0144czeniami.",text:"W tym modelu po\u0142acie maj\u0105 nachylenie 35\xB0. Ko\u0144ce \u017Ceber s\u0105 doci\u0119te do p\u0142aszczyzny kalenicy, tak aby obie bry\u0142y styka\u0142y si\u0119 bez nak\u0142adania. To po\u0142\u0105czenie k\u0105towe, zale\u017Cne od geometrii dachu.",rule:"K\u0105t i zako\u0144czenie wynikaj\u0105 z projektu dachu.",scene:"ridge"}],Gl=[{id:"standard",name:"Zwyk\u0142a",trim:null,cut:null,description:"Pe\u0142na deska z wpustami i p\xF3\u0142wpustami na ko\u0144cach."},{id:"ending",name:"Zako\u0144czeniowa",trim:"left",cut:null,description:"Jedna warstwa pary kr\xF3tsza o 24 cm \u2014 wysoko\u015B\u0107 deski."},{id:"corner-slotted",name:"Naro\u017Cna \xB7 102 mm",cut:{edge:"slotted",offset:0},description:"18 \xD7 102 mm nowego wybrania oraz 18 mm istniej\u0105cego p\xF3\u0142wpustu."},{id:"corner-plain",name:"Naro\u017Cna \xB7 120 mm",cut:{edge:"plain",offset:0},description:"Wybranie 18 \xD7 120 mm przy pe\u0142nej kraw\u0119dzi ko\u0144ca deski."},{id:"inset-slotted",name:"Odsuni\u0119ta \xB7 z\u0119by",cut:{edge:"slotted",offset:.12},description:"Wybranie przy z\u0119bach, odsuni\u0119te od ko\u0144ca; zachowana ko\u0144c\xF3wka."},{id:"inset-plain",name:"Odsuni\u0119ta \xB7 pe\u0142na kraw\u0119d\u017A",cut:{edge:"plain",offset:.12},description:"Wybranie przy pe\u0142nej kraw\u0119dzi, odsuni\u0119te od ko\u0144ca deski."}];var Pe=i=>document.querySelector(i),ai=i=>[...document.querySelectorAll(i)],_r=Pe("#technology-viewport"),Hi=Pe(".viewport-loading"),Gi="combstruct",qt=An.find(i=>i.id==="podloga-strop"),vo=Gl[0],Xn="house",In=0,Qu=gr(Pd),Dt,nn,zt,Vi,bt,Dd=0,Ld,br=(...i)=>new P(...i);function qn(){!Dd&&Dt&&(Dd=requestAnimationFrame(()=>{Dd=0,zt.update(),Dt.render(Vi,nn)}))}function Xl(){if(!bt||!Dt||!_r.clientWidth||!_r.clientHeight)return;let i=bt.focus||new ln().setFromObject(bt.root),e=i.getCenter(br()),t=(bt.direction||br(1.5,1.4,2)).clone().normalize(),n=br(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(dr.degToRad(nn.fov/2)),o=s*nn.aspect,a=0;for(let l of[i.min.x,i.max.x])for(let d of[i.min.y,i.max.y])for(let u of[i.min.z,i.max.z]){let h=br(l,d,u).sub(e);a=Math.max(a,Math.abs(h.dot(n))/o+h.dot(t),Math.abs(h.dot(r))/s+h.dot(t))}let c=zt.enableDamping;if(zt.enableDamping=!1,zt.update(),zt.target.copy(e),nn.position.copy(e).addScaledVector(t,Math.max(.8,a*1.14)),zt.update(),!bt.focus)for(let l=0;l<2;l++){bt.root.updateMatrixWorld(!0),nn.updateMatrixWorld();let d=1/0,u=-1/0,h=1/0,f=-1/0,m=br();bt.root.traverseVisible(v=>{if(!v.geometry?.attributes.position)return;let C=v.geometry.attributes.position;for(let A=0;A<C.count;A++)m.fromBufferAttribute(C,A).applyMatrix4(v.matrixWorld).project(nn),d=Math.min(d,m.x),u=Math.max(u,m.x),h=Math.min(h,m.y),f=Math.max(f,m.y)});let _=nn.position.distanceTo(zt.target),g=br().setFromMatrixColumn(nn.matrixWorld,0),p=br().setFromMatrixColumn(nn.matrixWorld,1),w=g.multiplyScalar((d+u)/2*_*s*nn.aspect).add(p.multiplyScalar((h+f)/2*_*s));zt.target.add(w),nn.position.add(w);let S=Math.max((u-d)/1.72,(f-h)/1.62);Number.isFinite(S)&&S>0&&nn.position.sub(zt.target).multiplyScalar(S).add(zt.target),zt.update()}zt.enableDamping=c,qn()}function e0(){if(!Dt)return;let i=_r.clientWidth,e=_r.clientHeight;!i||!e||(Dt.setSize(i,e,!1),nn.aspect=i/e,nn.updateProjectionMatrix(),Xl())}function Y3(i){Pe("#element-id").textContent=i.id,Pe("#element-type").textContent=i.type,Pe("#element-surface").textContent=i.surface,Pe("#element-length").textContent=i.length,Pe("#element-metric-label").textContent=i.metricLabel||"D\u0142ugo\u015B\u0107 w modelu",Pe("#element-detail-label").textContent=i.detailLabel||"Grubo\u015B\u0107 p\u0142yty",Pe("#element-thickness").textContent=i.detail||"18 mm"}function us(){if(Dt)try{bt&&(Vi.remove(bt.root),Wu(bt.root)),bt=Gi==="combstruct"?qu(qt,vo):Gi==="bim"?Yu(Xn,Y3):Ku(In,Qu),Vi.add(bt.root),bt.root.updateMatrixWorld(!0),Pe("#scene-annotation").textContent=bt.annotation||"",bt.arrows&&(bt.arrows.visible=Pe("#arrows").checked),Gi==="bim"&&bt.finish&&n0(),Gi==="flow"&&In===3&&r0(),Hi.hidden=!0,e0(),qn()}catch(i){console.error(i),Hi.hidden=!1,Hi.textContent="Nie uda\u0142o si\u0119 przygotowa\u0107 tego widoku. Od\u015Bwie\u017C stron\u0119, aby spr\xF3bowa\u0107 ponownie.",Hi.setAttribute("role","alert")}}function j3(){try{Vi=new Ls,Vi.background=new ot("#f2f5f1"),nn=new an(36,1,.005,160),Dt=new Ul({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Dt.localClippingEnabled=!0,Dt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Dt.toneMapping=ro,Dt.toneMappingExposure=1.07,_r.prepend(Dt.domElement),Dt.domElement.tabIndex=0,Dt.domElement.setAttribute("aria-label","Model 3D. Przeci\u0105gnij, aby obr\xF3ci\u0107; przewi\u0144, aby przybli\u017Cy\u0107. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybra\u0107."),zt=new Bl(nn,Dt.domElement),zt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,zt.dampingFactor=.12,zt.minDistance=.3,zt.maxDistance=50,zt.maxPolarAngle=Math.PI*.94,zt.addEventListener("change",qn),zt.listenToKeyEvents(Dt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{zt.enableDamping=!n.matches,qn()}),Vi.add(new $s("#ffffff","#b2b8aa",2.5));let i=new Kr("#fff3df",2.6);i.position.set(3,7,5),Vi.add(i);let e=new Kr("#d3e8ee",1.5);e.position.set(-4,3,-4),Vi.add(e),Ld=new Qs;let t;Dt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Dt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!bt.selectAt)return;let r=Dt.domElement.getBoundingClientRect();Ld.setFromCamera(new ce((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),nn),bt.selectAt(Ld),qn()}),Dt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),Xl())}),Dt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Hi.hidden=!1,Hi.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C stron\u0119, aby do niego wr\xF3ci\u0107."}),new ResizeObserver(e0).observe(_r),us()}catch(i){console.error(i),Hi.textContent="Podgl\u0105d 3D wymaga obs\u0142ugi WebGL. Zasady systemu mo\u017Cesz przeczyta\u0107 poni\u017Cej modelu.",Hi.setAttribute("role","alert")}}function Z3(){Pe("#topic-title").textContent=qt.title,Pe("#topic-lead").textContent=qt.lead,Pe("#topic-text").textContent=qt.text,Pe("#topic-rule").textContent=qt.rule;let i=An.indexOf(qt);Pe("#topic-counter").textContent=`${i+1} / ${An.length}`,Pe("#topic-select").value=qt.id,ai("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===qt.id))),Pe("#spread-control").hidden=!qt.spread,Pe("#crossing-control").hidden=!qt.crossing,Pe("#arrows-control").hidden=!qt.arrows,Pe("#variant-control").hidden=!qt.variants,Pe("#spread").value=0,Pe("#crossing").checked=!1,Pe("#previous-topic").disabled=i===0,Pe("#next-topic").disabled=i===An.length-1,Pe("#variant-description").textContent=vo.description}function Mo(i,{hash:e=!0}={}){Gi=i,Pe(".technology-cta").hidden=i==="flow",ai("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,Pe("#"+n.getAttribute("aria-controls")).hidden=!r}),Pe(`#${i==="combstruct"?"manual":i==="bim"?"bim":"flow"}-mount`).append(_r),e&&history.pushState(null,"",`#${i==="combstruct"?qt.id:i==="bim"&&Xn==="wall"?"bim-sciana":i}`),i==="combstruct"&&Z3(),i==="flow"&&i0(),us()}function fs(i,{hash:e=!0}={}){qt=An.find(t=>t.id===i)||qt,Mo("combstruct",{hash:e})}function Nd(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(Xn=i==="bim-sciana"?"wall":"house",t0(),Mo("bim",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),Mo("flow",{hash:!1})):fs(i,{hash:!1})}for(let i of[...new Set(An.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of An.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>fs(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}Pe("#topic-buttons").append(e),Pe("#topic-select").append(n)}for(let i of Gl)Pe("#variant-select").append(new Option(i.name,i.id));Pe("#topic-select").addEventListener("change",i=>fs(i.target.value));Pe("#variant-select").addEventListener("change",i=>{vo=Gl.find(e=>e.id===i.target.value),Pe("#variant-description").textContent=vo.description,us()});ai("[data-technology]").forEach(i=>i.addEventListener("click",()=>Mo(i.dataset.technology)));Pe(".technology-tabs").addEventListener("keydown",i=>{let e=ai("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});Pe("#previous-topic").addEventListener("click",()=>fs(An[An.indexOf(qt)-1]?.id));Pe("#next-topic").addEventListener("click",()=>fs(An[An.indexOf(qt)+1]?.id));Pe("#spread").addEventListener("input",i=>{bt?.spread?.(Number(i.target.value)),Pe("#crossing").checked=!1,qn()});Pe("#crossing").addEventListener("change",i=>{i.target.checked&&(Pe("#spread").value=0,bt?.spread?.(0)),bt?.crossing?.(i.target.checked),qn()});Pe("#arrows").addEventListener("change",i=>{bt?.arrows&&(bt.arrows.visible=i.target.checked),qn()});ai("[data-reset-view]").forEach(i=>i.addEventListener("click",Xl));function t0(){ai("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===Xn))),Pe("#finish-control").hidden=Xn!=="wall",Pe("#wall-guide").hidden=Xn!=="wall",Pe(".selection-hint").textContent=Xn==="wall"?"Ods\u0142o\u0144 \u015Bcian\u0119 i wybierz widoczny element":"Wybierz desk\u0119 w modelu",Pe("#passport-title").innerHTML=Xn==="wall"?"Sprawd\u017A, co kryje<br>Twoja \u015Bciana.":"Ka\u017Cda cz\u0119\u015B\u0107<br>ma swoje miejsce."}function n0(){let i=Pe("#finish"),e=Number(i.value);bt?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"\u015Aciana wyko\u0144czona":`Ods\u0142oni\u0119te ${Math.round(e*100)}% \u015Bciany`),Pe("#scene-annotation").textContent=e>.01?"Kliknij \u017Cebro, kostk\u0119, rur\u0119 lub przew\xF3d":"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",qn()}ai("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{Xn=i.dataset.bimView,t0(),history.pushState(null,"",Xn==="wall"?"#bim-sciana":"#bim"),us()}));Pe("#finish").addEventListener("input",n0);Pe("#next-element").addEventListener("click",()=>{bt?.next?.(),qn()});function i0(){let i=Id[In];Pe("#flow-title").textContent=i.title,Pe("#flow-text").textContent=i.text,Pe("#flow-output-label").textContent=i.label,Pe("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),ai("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===In))),Pe("#assembly-control").hidden=In!==3,Pe("#flow-next").textContent=["Zobacz model Combstruct \u2192","Przejd\u017A do produkcji \u2192","Zobacz monta\u017C \u2192","Wr\xF3\u0107 do rzut\xF3w \u21BA"][In],Pe(".flow-layout").dataset.stage=In,Pe("#production-catalog").hidden=In!==2}function r0(){let i=Number(Pe("#assembly").value);bt?.assembly?.(i),Pe("#assembly-progress").textContent=`${Math.round(i*100)}%`,qn()}function s0(i){In=i,i0(),us()}ai("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>s0(Number(i.dataset.flowStage))));Pe("#flow-next").addEventListener("click",()=>s0((In+1)%Id.length));Pe("#assembly").addEventListener("input",r0);Ju(Pe("#production-catalog"),Pd,(i,e)=>{Qu=i,Gi==="flow"&&In===2&&us(),e&&Zu(Pe("#flow-mount"))});var hs=Pe(".menu-toggle"),Wl=Pe("#mobile-menu");function Ud(){Wl.hidden=!0,hs.setAttribute("aria-expanded","false"),hs.setAttribute("aria-label","Otw\xF3rz menu")}hs.addEventListener("click",()=>{let i=Wl.hidden;Wl.hidden=!i,hs.setAttribute("aria-expanded",String(i)),hs.setAttribute("aria-label",i?"Zamknij menu":"Otw\xF3rz menu")});ai("#mobile-menu a").forEach(i=>i.addEventListener("click",Ud));document.addEventListener("click",i=>{i.target.closest(".site-header")||Ud()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!Wl.hidden&&(Ud(),hs.focus())});addEventListener("popstate",Nd);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==Gi&&i!==qt.id&&Nd()});window.combstructTechnology={getState:()=>({ready:!!Dt,technology:Gi,topic:qt.id,variant:vo.id,bimView:Xn,flowStage:In,manufacturing:bt?.getManufacturingState?.(),selected:bt?.getSelected?.(),wall:bt?.getWallState?.(),meshCount:bt?.root.children.length,drawCalls:Dt?.info.render.calls}),topics:An.map(i=>i.id),showTopic:fs,showTechnology:Mo,reset:Xl};Nd();j3();})();
