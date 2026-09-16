"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fu=0,gd=1,pu=2;var Co=1,mu=2,Es=3,Pi=0,gn=1,Lt=2,gi=0,vr=1,bd=2,_d=3,xd=4,gu=5;var qi=100,bu=101,_u=102,xu=103,yu=104,vu=200,Mu=201,Su=202,wu=203,Da=204,La=205,Eu=206,Tu=207,Au=208,Ru=209,Cu=210,Pu=211,Iu=212,Du=213,Lu=214,Na=0,Ua=1,Fa=2,Mr=3,za=4,Oa=5,Ba=6,ka=7,yd=0,Nu=1,Uu=2,Jn=0,vd=1,Md=2,Sd=3,Po=4,wd=5,Ed=6,Td=7;var Ad=300,nr=301,Nr=302,_l=303,xl=304,Io=306,Va=1e3,di=1001,Ha=1002,Kt=1003,Fu=1004;var Do=1005;var sn=1006,yl=1007;var ir=1008;var yn=1009,Rd=1010,Cd=1011,Ts=1012,vl=1013,$n=1014,Kn=1015,bi=1016,Ml=1017,Sl=1018,As=1020,Pd=35902,Id=35899,Dd=1021,Ld=1022,Bn=1023,ui=1026,rr=1027,Nd=1028,wl=1029,Ur=1030,El=1031;var Tl=1033,Lo=33776,No=33777,Uo=33778,Fo=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Il=36196,Dl=37492,Ll=37496,Nl=37488,Ul=37489,Fl=37490,zl=37491,Ol=37808,Bl=37809,kl=37810,Vl=37811,Hl=37812,Gl=37813,Wl=37814,Xl=37815,ql=37816,jl=37817,Yl=37818,Zl=37819,Jl=37820,$l=37821,Kl=36492,Ql=36494,ec=36495,tc=36283,nc=36284,ic=36285,rc=36286;var eo=2300,Ga=2301,Ia=2302,rd=2303,sd=2400,od=2401,ad=2402;var zu=3200;var Ud=0,Ou=1,Di="",Vt="srgb",Sr="srgb-linear",to="linear",bt="srgb";var xr=7680;var ld=519,Bu=512,ku=513,Vu=514,sc=515,Hu=516,Gu=517,oc=518,Wu=519,Wa=35044;var Fd="300 es",Yn=2e3,hs=2001;function _p(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xu(){let i=no("canvas");return i.style.display="block",i}var Nh={},us=null;function io(...i){let e="THREE."+i.shift();us?us("log",e,...i):console.log(e,...i)}function qu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=qu(i);let e="THREE."+i.shift();if(us)us("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=qu(i);let e="THREE."+i.shift();if(us)us("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ro(...i){let e=i.join(" ");e in Nh||(Nh[e]=!0,$e(...i))}function ju(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Yu={[Na]:Ua,[Fa]:Ba,[za]:ka,[Mr]:Oa,[Ua]:Na,[Ba]:Fa,[ka]:za,[Oa]:Mr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=1234567,cs=Math.PI/180,fs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function zd(i,e){return(i%e+e)%e}function yp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function vp(i,e,t){return i!==e?(t-i)/(e-i):0}function $s(i,e,t){return(1-t)*i+t*e}function Mp(i,e,t,n){return $s(i,e,1-Math.exp(-t*n))}function Sp(i,e=1){return e-Math.abs(zd(i,e*2)-e)}function wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ap(i,e){return i+Math.random()*(e-i)}function Rp(i){return i*(.5-Math.random())}function Cp(i){i!==void 0&&(Uh=i);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pp(i){return i*cs}function Ip(i){return i*fs}function Dp(i){return(i&i-1)===0&&i!==0}function Lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Up(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*m,l*p,a*c);break;case"YXY":i.set(l*p,a*d,l*m,a*c);break;case"ZYZ":i.set(l*m,l*p,a*d,a*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qn={DEG2RAD:cs,RAD2DEG:fs,generateUUID:hi,clamp:tt,euclideanModulo:zd,mapLinear:yp,inverseLerp:vp,lerp:$s,damp:Mp,pingpong:Sp,smoothstep:wp,smootherstep:Ep,randInt:Tp,randFloat:Ap,randFloatSpread:Rp,seededRandom:Cp,degToRad:Pp,radToDeg:Ip,isPowerOfTwo:Dp,ceilPowerOfTwo:Lp,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Up,normalize:xt,denormalize:jn},pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],p=s[o+1],m=s[o+2],x=s[o+3];if(u!==x||l!==h||c!==p||d!==m){let g=l*h+c*p+d*m+u*x;g<0&&(h=-h,p=-p,m=-m,x=-x,g=-g);let f=1-a;if(g<.9995){let S=Math.acos(g),M=Math.sin(S);f=Math.sin(f*S)/M,a=Math.sin(a*S)/M,l=l*f+h*a,c=c*f+p*a,d=d*f+m*a,u=u*f+x*a}else{l=l*f+h*a,c=c*f+p*a,d=d*f+m*a,u=u*f+x*a;let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+d*u+l*p-c*h,e[t+1]=l*m+d*h+c*u-a*p,e[t+2]=c*m+d*p+a*h-l*u,e[t+3]=d*m-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*p*m,this._y=c*p*u-h*d*m,this._z=c*d*m+h*p*u,this._w=c*d*u-h*p*m;break;case"YXZ":this._x=h*d*u+c*p*m,this._y=c*p*u-h*d*m,this._z=c*d*m-h*p*u,this._w=c*d*u+h*p*m;break;case"ZXY":this._x=h*d*u-c*p*m,this._y=c*p*u+h*d*m,this._z=c*d*m+h*p*u,this._w=c*d*u-h*p*m;break;case"ZYX":this._x=h*d*u-c*p*m,this._y=c*p*u+h*d*m,this._z=c*d*m-h*p*u,this._w=c*d*u+h*p*m;break;case"YZX":this._x=h*d*u+c*p*m,this._y=c*p*u+h*d*m,this._z=c*d*m-h*p*u,this._w=c*d*u-h*p*m;break;case"XZY":this._x=h*d*u-c*p*m,this._y=c*p*u-h*d*m,this._z=c*d*m+h*p*u,this._w=c*d*u+h*p*m;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cc=new D,Fh=new Qt,et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],m=n[8],x=r[0],g=r[3],f=r[6],S=r[1],M=r[4],v=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*x+a*S+l*C,s[3]=o*g+a*M+l*E,s[6]=o*f+a*v+l*T,s[1]=c*x+d*S+u*C,s[4]=c*g+d*M+u*E,s[7]=c*f+d*v+u*T,s[2]=h*x+p*S+m*C,s[5]=h*g+p*M+m*E,s[8]=h*f+p*v+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,p=c*s-o*l,m=t*u+n*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(r*c-d*n)*x,e[2]=(a*n-r*o)*x,e[3]=h*x,e[4]=(d*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pc.makeScale(e,t)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pc=new et,zh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===bt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?to:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:e,whitePoint:n,transfer:to,toXYZ:zh,fromXYZ:Oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:zh,fromXYZ:Oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var ht=Fp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=no("canvas")),jr.width=e.width,jr.height=e.height;let r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=jr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zp=0,ps=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ic(r[o].image)):s.push(Ic(r[o]))}else s=Ic(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var Op=0,Dc=new D,mn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,r=di,s=sn,o=ir,a=Bn,l=yn,c=i.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=hi(),this.name="",this.source=new ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Va:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Va:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Ad;mn.DEFAULT_ANISOTROPY=1;var Dt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],m=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,C=(f+1)/2,E=(d+h)/4,T=(u+x)/4,b=(m+g)/4;return M>v&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=T/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=b/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=T/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-x)/S,this.z=(h-d)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new mn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ps(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},so=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ot=class i{constructor(e,t,n,r,s,o,a,l,c,d,u,h,p,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,p,m,x,g)}set(e,t,n,r,s,o,a,l,c,d,u,h,p,m,x,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,p=o*u,m=a*d,x=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,p=l*u,m=c*d,x=c*u;t[0]=h+x*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-m,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,p=l*u,m=c*d,x=c*u;t[0]=h-x*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*d,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,p=o*u,m=a*d,x=a*u;t[0]=l*d,t[4]=m*c-p,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*d,t[4]=x-h*u,t[8]=m*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+m,t[10]=h-x*u}else if(e.order==="XZY"){let h=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+x,t[5]=o*d,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*d,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,kp)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ki.crossVectors(n,wn),ki.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ki.crossVectors(n,wn)),ki.normalize(),Qo.crossVectors(wn,ki),r[0]=ki.x,r[4]=Qo.x,r[8]=wn.x,r[1]=ki.y,r[5]=Qo.y,r[9]=wn.y,r[2]=ki.z,r[6]=Qo.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],S=n[3],M=n[7],v=n[11],C=n[15],E=r[0],T=r[4],b=r[8],y=r[12],N=r[1],P=r[5],L=r[9],F=r[13],k=r[2],O=r[6],z=r[10],R=r[14],q=r[3],Y=r[7],ae=r[11],me=r[15];return s[0]=o*E+a*N+l*k+c*q,s[4]=o*T+a*P+l*O+c*Y,s[8]=o*b+a*L+l*z+c*ae,s[12]=o*y+a*F+l*R+c*me,s[1]=d*E+u*N+h*k+p*q,s[5]=d*T+u*P+h*O+p*Y,s[9]=d*b+u*L+h*z+p*ae,s[13]=d*y+u*F+h*R+p*me,s[2]=m*E+x*N+g*k+f*q,s[6]=m*T+x*P+g*O+f*Y,s[10]=m*b+x*L+g*z+f*ae,s[14]=m*y+x*F+g*R+f*me,s[3]=S*E+M*N+v*k+C*q,s[7]=S*T+M*P+v*O+C*Y,s[11]=S*b+M*L+v*z+C*ae,s[15]=S*y+M*F+v*R+C*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],m=e[3],x=e[7],g=e[11],f=e[15],S=l*p-c*h,M=a*p-c*u,v=a*h-l*u,C=o*p-c*d,E=o*h-l*d,T=o*u-a*d;return t*(x*S-g*M+f*v)-n*(m*S-g*C+f*E)+r*(m*M-x*C+f*T)-s*(m*v-x*E+g*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],S=t*a-n*o,M=t*l-r*o,v=t*c-s*o,C=n*l-r*a,E=n*c-s*a,T=r*c-s*l,b=d*x-u*m,y=d*g-h*m,N=d*f-p*m,P=u*g-h*x,L=u*f-p*x,F=h*f-p*g,k=S*F-M*L+v*P+C*N-E*y+T*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/k;return e[0]=(a*F-l*L+c*P)*O,e[1]=(r*L-n*F-s*P)*O,e[2]=(x*T-g*E+f*C)*O,e[3]=(h*E-u*T-p*C)*O,e[4]=(l*N-o*F-c*y)*O,e[5]=(t*F-r*N+s*y)*O,e[6]=(g*v-m*T-f*M)*O,e[7]=(d*T-h*v+p*M)*O,e[8]=(o*L-a*N+c*b)*O,e[9]=(n*N-t*L-s*b)*O,e[10]=(m*E-x*v+f*S)*O,e[11]=(u*v-d*E-p*S)*O,e[12]=(a*y-o*P-l*b)*O,e[13]=(t*P-n*y+r*b)*O,e[14]=(x*M-m*C-g*S)*O,e[15]=(d*C-u*M+h*S)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,p=s*d,m=s*u,x=o*d,g=o*u,f=a*u,S=l*c,M=l*d,v=l*u,C=n.x,E=n.y,T=n.z;return r[0]=(1-(x+f))*C,r[1]=(p+v)*C,r[2]=(m-M)*C,r[3]=0,r[4]=(p-v)*E,r[5]=(1-(h+f))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(m+M)*T,r[9]=(g-S)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Yr.set(r[0],r[1],r[2]).length(),a=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Wn.copy(this);let c=1/o,d=1/a,u=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Yn,l=!1){let c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===Yn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===hs)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Yn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===Yn)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===hs)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yr=new D,Wn=new ot,Bp=new D(0,0,0),kp=new D(1,1,1),ki=new D,Qo=new D,wn=new D,Bh=new ot,kh=new Qt,Zn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vp=0,Vh=new D,Zr=new Qt,wi=new ot,ea=new D,Hs=new D,Hp=new D,Gp=new Qt,Hh=new D(1,0,0),Gh=new D(0,1,0),Wh=new D(0,0,1),Xh={type:"added"},Wp={type:"removed"},Jr={type:"childadded",child:null},Lc={type:"childremoved",child:null},qt=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Zn,n=new Qt,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new et}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Hs,ea,this.up):wi.lookAt(ea,Hs,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(wi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xh),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xh),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xp={type:"move"},gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=zd(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Nc(o,s,e+1/3),this.g=Nc(o,s,e),this.b=Nc(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=Zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ht.workingToColorSpace(dn.copy(this),e),Math.round(tt(dn.r*255,0,255))*65536+Math.round(tt(dn.g*255,0,255))*256+Math.round(tt(dn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(dn.copy(this),t);let n=dn.r,r=dn.g,s=dn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Vt){ht.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,r=dn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ta);let n=$s(Vi.h,ta.h,t),r=$s(Vi.s,ta.s,t),s=$s(Vi.l,ta.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new at;at.NAMES=Zu;var oo=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new D,Ei=new D,Uc=new D,Ti=new D,$r=new D,Kr=new D,qh=new D,Fc=new D,zc=new D,Oc=new D,Bc=new Dt,kc=new Dt,Vc=new Dt,ci=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),Ei.subVectors(n,t),Uc.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Ei),l=Xn.dot(Uc),c=Ei.dot(Ei),d=Ei.dot(Uc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,p=(c*l-a*d)*h,m=(o*d-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bc.setScalar(0),kc.setScalar(0),Vc.setScalar(0),Bc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bc,s.x),o.addScaledVector(kc,s.y),o.addScaledVector(Vc,s.z),o}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Ei.subVectors(e,t),Xn.cross(Ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Xn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;$r.subVectors(r,n),Kr.subVectors(s,n),Fc.subVectors(e,n);let l=$r.dot(Fc),c=Kr.dot(Fc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,r);let d=$r.dot(zc),u=Kr.dot(zc);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector($r,o);Oc.subVectors(e,s);let p=$r.dot(Oc),m=Kr.dot(Oc);if(m>=0&&p<=m)return t.copy(s);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Kr,a);let g=d*m-p*u;if(g<=0&&u-d>=0&&p-m>=0)return qh.subVectors(s,r),a=(u-d)/(u-d+(p-m)),t.copy(r).addScaledVector(qh,a);let f=1/(g+x+h);return o=x*f,a=h*f,t.copy(n).addScaledVector($r,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ht=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ia.subVectors(this.max,Gs),Qr.subVectors(e.a,Gs),es.subVectors(e.b,Gs),ts.subVectors(e.c,Gs),Hi.subVectors(es,Qr),Gi.subVectors(ts,es),mr.subVectors(Qr,ts);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-mr.z,mr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,mr.z,0,-mr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-mr.y,mr.x,0];return!Hc(t,Qr,es,ts,ia)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Qr,es,ts,ia))?!1:(ra.crossVectors(Hi,Gi),t=[ra.x,ra.y,ra.z],Hc(t,Qr,es,ts,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,na=new Ht,Qr=new D,es=new D,ts=new D,Hi=new D,Gi=new D,mr=new D,Gs=new D,ia=new D,ra=new D,gr=new D;function Hc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gr.fromArray(i,s);let a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=t.dot(gr),d=n.dot(gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var kt=new D,sa=new pe,qp=0,rn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}};var ao=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lo=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},jp=new Ht,Ws=new D,Gc=new D,wr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Gc)),this.expandByPoint(Ws.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yp=0,zn=new ot,Wc=new qt,ns=new D,En=new Ht,Xs=new Ht,$t=new D,mt=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_p(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];En.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(En.min,Xs.min),En.expandByPoint($t),$t.addVectors(En.max,Xs.max),En.expandByPoint($t)):(En.expandByPoint(Xs.min),En.expandByPoint(Xs.max))}En.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared($t));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)$t.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),$t.add(ns)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new D,l[b]=new D;let c=new D,d=new D,u=new D,h=new pe,p=new pe,m=new pe,x=new D,g=new D;function f(b,y,N){c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,N),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),m.fromBufferAttribute(s,N),d.sub(c),u.sub(c),p.sub(h),m.sub(h);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(x.copy(d).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(P),a[b].add(x),a[y].add(x),a[N].add(x),l[b].add(g),l[y].add(g),l[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,y=S.length;b<y;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new D,v=new D,C=new D,E=new D;function T(b){C.fromBufferAttribute(r,b),E.copy(C);let y=a[b];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(E,y);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,y=S.length;b<y;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)h[m++]=c[p++]}return new rn(h,d,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},co=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new D,bs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),r=xt(r,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zp=0,pi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=vr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=La,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ld&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ji=class extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},is,qs=new D,rs=new D,ss=new D,os=new pe,js=new pe,Ju=new ot,oa=new D,Ys=new D,aa=new D,jh=new pe,Xc=new pe,Yh=new pe,Er=class extends qt{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new co(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new bs(n,3,0,!1)),is.setAttribute("uv",new bs(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-ss.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;la(oa.set(-.5,-.5,0),ss,o,rs,r,s),la(Ys.set(.5,-.5,0),ss,o,rs,r,s),la(aa.set(.5,.5,0),ss,o,rs,r,s),jh.set(0,0),Xc.set(1,0),Yh.set(1,1);let a=e.ray.intersectTriangle(oa,Ys,aa,!1,qs);if(a===null&&(la(Ys.set(-.5,.5,0),ss,o,rs,r,s),Xc.set(0,1),a=e.ray.intersectTriangle(oa,aa,Ys,!1,qs),a===null))return;let l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:ci.getInterpolation(qs,oa,Ys,aa,jh,Xc,Yh,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function la(i,e,t,n,r,s){os.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(js.x=s*os.x-r*os.y,js.y=r*os.x+s*os.y):js.copy(os),i.copy(e),i.x+=js.x,i.y+=js.y,i.applyMatrix4(Ju)}var Ri=new D,qc=new D,ca=new D,Wi=new D,jc=new D,da=new D,Yc=new D,Yi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qc.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(qc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ca),a=Wi.dot(this.direction),l=-Wi.dot(ca),c=Wi.lengthSq(),d=Math.abs(1-o*o),u,h,p,m;if(d>0)if(u=o*l-a,h=o*a-l,m=s*d,u>=0)if(h>=-m)if(h<=m){let x=1/d;u*=x,h*=x,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qc).addScaledVector(ca,h),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),r=Ri.dot(Ri)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,r,s){jc.subVectors(t,e),da.subVectors(n,e),Yc.crossVectors(jc,da);let o=this.direction.dot(Yc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let l=a*this.direction.dot(da.crossVectors(Wi,da));if(l<0)return null;let c=a*this.direction.dot(jc.cross(Wi));if(c<0||l+c>o)return null;let d=-a*Wi.dot(Yc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},On=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new ot,br=new Yi,ha=new wr,Jh=new D,ua=new D,fa=new D,pa=new D,Zc=new D,ma=new D,$h=new D,ga=new D,lt=class extends qt{constructor(e=new mt,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(Zc.fromBufferAttribute(u,e),o?ma.addScaledVector(Zc,d):ma.addScaledVector(Zc.sub(t),d))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(ha.containsPoint(br.origin)===!1&&(br.intersectSphere(ha,Jh)===null||br.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&(Zh.copy(s).invert(),br.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],f=o[g.materialIndex],S=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);r=ba(this,f,e,n,c,d,u,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let S=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);r=ba(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],f=o[g.materialIndex],S=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=v,T=v+1,b=v+2;r=ba(this,f,e,n,c,d,u,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){let S=g,M=g+1,v=g+2;r=ba(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function Jp(i,e,t,n,r,s,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Pi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function ba(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ua),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let d=Jp(i,e,t,n,ua,fa,pa,$h);if(d){let u=new D;ci.getBarycoord($h,ua,fa,pa,u),r&&(d.uv=ci.getInterpolatedAttribute(r,a,l,c,u,new pe)),s&&(d.uv1=ci.getInterpolatedAttribute(s,a,l,c,u,new pe)),o&&(d.normal=ci.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};ci.getNormal(ua,fa,pa,h.normal),d.face=h,d.barycoord=u}return d}var Ya=class extends mn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Kt,d=Kt,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jc=new D,$p=new D,Kp=new et,xn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Jc.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kp.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new wr,Qp=new pe(.5,.5),_a=new D,_s=class{constructor(e=new xn,t=new xn,n=new xn,r=new xn,s=new xn,o=new xn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],p=s[7],m=s[8],x=s[9],g=s[10],f=s[11],S=s[12],M=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,f-m,C-S).normalize(),r[1].setComponents(c+o,p+d,f+m,C+S).normalize(),r[2].setComponents(c+a,p+u,f+x,C+M).normalize(),r[3].setComponents(c-a,p-u,f-x,C-M).normalize(),n)r[4].setComponents(l,h,g,v).normalize(),r[5].setComponents(c-l,p-h,f-g,C-v).normalize();else if(r[4].setComponents(c-l,p-h,f-g,C-v).normalize(),t===Yn)r[5].setComponents(c+l,p+h,f+g,C+v).normalize();else if(t===hs)r[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);let t=Qp.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var en=class extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Za=new D,Ja=new D,Kh=new ot,Zs=new Yi,xa=new wr,$c=new D,Qh=new D,Tr=class extends qt{constructor(e=new mt,t=new en){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Za.fromBufferAttribute(t,r-1),Ja.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Za.distanceTo(Ja);e.setAttribute("lineDistance",new ct(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;Kh.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Kh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let f=d.getX(x),S=d.getX(x+1),M=ya(this,e,Zs,l,f,S,x);M&&t.push(M)}if(this.isLineLoop){let x=d.getX(m-1),g=d.getX(p),f=ya(this,e,Zs,l,x,g,m-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let f=ya(this,e,Zs,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){let x=ya(this,e,Zs,l,m-1,p,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ya(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Za.fromBufferAttribute(a,r),Ja.fromBufferAttribute(a,s),t.distanceSqToSegment(Za,Ja,$c,Qh)>n)return;$c.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($c);if(!(c<e.near||c>e.far))return{distance:c,point:Qh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var eu=new D,tu=new D,Gt=class extends Tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)eu.fromBufferAttribute(t,r),tu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+eu.distanceTo(tu);e.setAttribute("lineDistance",new ct(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ho=class extends mn{constructor(e=[],t=nr,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mi=class extends mn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zi=class extends mn{constructor(e,t,n=$n,r,s,o,a=Kt,l=Kt,c,d=ui,u=1){if(d!==ui&&d!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$a=class extends Zi{constructor(e,t=$n,n=nr,r,s,o=Kt,a=Kt,l,c=ui){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},uo=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,p=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function m(x,g,f,S,M,v,C,E,T,b,y){let N=v/T,P=C/b,L=v/2,F=C/2,k=E/2,O=T+1,z=b+1,R=0,q=0,Y=new D;for(let ae=0;ae<z;ae++){let me=ae*P-F;for(let ue=0;ue<O;ue++){let te=ue*N-L;Y[x]=te*S,Y[g]=me*M,Y[f]=k,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[f]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),u.push(ue/T),u.push(1-ae/b),R+=1}}for(let ae=0;ae<b;ae++)for(let me=0;me<T;me++){let ue=h+me+O*ae,te=h+me+O*(ae+1),le=h+(me+1)+O*(ae+1),se=h+(me+1)+O*ae;l.push(ue,te,se),l.push(te,le,se),q+=6}a.addGroup(p,q,y),p+=q,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ii=class i extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],p=[],m=0,x=[],g=n/2,f=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function S(){let v=new D,C=new D,E=0,T=(t-e)/n;for(let b=0;b<=s;b++){let y=[],N=b/s,P=N*(t-e)+e;for(let L=0;L<=r;L++){let F=L/r,k=F*l+a,O=Math.sin(k),z=Math.cos(k);C.x=P*O,C.y=-N*n+g,C.z=P*z,u.push(C.x,C.y,C.z),v.set(O,T,z).normalize(),h.push(v.x,v.y,v.z),p.push(F,1-N),y.push(m++)}x.push(y)}for(let b=0;b<r;b++)for(let y=0;y<s;y++){let N=x[y][b],P=x[y+1][b],L=x[y+1][b+1],F=x[y][b+1];(e>0||y!==0)&&(d.push(N,P,F),E+=3),(t>0||y!==s-1)&&(d.push(P,L,F),E+=3)}c.addGroup(f,E,0),f+=E}function M(v){let C=m,E=new pe,T=new D,b=0,y=v===!0?e:t,N=v===!0?1:-1;for(let L=1;L<=r;L++)u.push(0,g*N,0),h.push(0,N,0),p.push(.5,.5),m++;let P=m;for(let L=0;L<=r;L++){let k=L/r*l+a,O=Math.cos(k),z=Math.sin(k);T.x=y*z,T.y=g*N,T.z=y*O,u.push(T.x,T.y,T.z),h.push(0,N,0),E.x=O*.5+.5,E.y=z*.5*N+.5,p.push(E.x,E.y),m++}for(let L=0;L<r;L++){let F=C+L,k=P+L;v===!0?d.push(k,k+1,F):d.push(k+1,k,F),b+=3}c.addGroup(f,b,v===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ka=class i extends Ii{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var va=new D,Ma=new D,Kc=new D,Sa=new ci,Wt=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(cs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},p=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:f}=Sa;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Sa.getNormal(Kc),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let M=(S+1)%3,v=u[S],C=u[M],E=Sa[d[S]],T=Sa[d[M]],b=`${v}_${C}`,y=`${C}_${v}`;y in h&&h[y]?(Kc.dot(h[y].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(T.x,T.y,T.z)),h[y]=null):b in h||(h[b]={index0:c[S],index1:c[M],normal:Kc.clone()})}}for(let m in h)if(h[m]){let{index0:x,index1:g}=h[m];va.fromBufferAttribute(a,x),Ma.fromBufferAttribute(a,g),p.push(va.x,va.y,va.z),p.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new pe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new ot;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(tt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(tt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xs=class extends An{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*u+this.aX,c=h*u+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends xs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Od(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,p*=d,r(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var wa=new D,Qc=new Od,ed=new Od,td=new Od,el=class extends An{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(wa.subVectors(r[0],r[1]).add(r[0]),c=wa);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(wa.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(d),p);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Qc.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,m,x,g),ed.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,m,x,g),td.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,m,x,g)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),ed.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),td.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(Qc.calc(l),ed.calc(l),td.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nu(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function e0(i,e){let t=1-i;return t*t*e}function t0(i,e){return 2*(1-i)*i*e}function n0(i,e){return i*i*e}function Ks(i,e,t,n){return e0(i,e)+t0(i,t)+n0(i,n)}function i0(i,e){let t=1-i;return t*t*t*e}function r0(i,e){let t=1-i;return 3*t*t*i*e}function s0(i,e){return 3*(1-i)*i*i*e}function o0(i,e){return i*i*i*e}function Qs(i,e,t,n,r){return i0(i,e)+r0(i,t)+s0(i,n)+o0(i,r)}var fo=class extends An{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,r.x,s.x,o.x,a.x),Qs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends An{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qs(e,r.x,s.x,o.x,a.x),Qs(e,r.y,s.y,o.y,a.y),Qs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends An{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends An{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends An{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ks(e,r.x,s.x,o.x),Ks(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends An{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ks(e,r.x,s.x,o.x),Ks(e,r.y,s.y,o.y),Ks(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(nu(a,l.x,c.x,d.x,u.x),nu(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:el,CubicBezierCurve:fo,CubicBezierCurve3:tl,EllipseCurve:xs,LineCurve:po,LineCurve3:Ar,QuadraticBezierCurve:mo,QuadraticBezierCurve3:Rr,SplineCurve:go}),ys=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new nl[r.type]().fromJSON(r))}return this}},Cr=class extends ys{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new po(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new mo(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new fo(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new xs(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends Cr{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Cr().fromJSON(r))}return this}};function a0(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=$u(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=u0(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,u=l;for(let h=t;h<r;h+=t){let p=i[h],m=i[h+1];p<a&&(a=p),m<l&&(l=m),p>d&&(d=p),m>u&&(u=m)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return bo(s,o,t,a,l,c,0),o}function $u(i,e,t,n,r){let s;if(r===S0(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=iu(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=iu(o/n|0,i[o],i[o+1],s);return s&&vs(s,s.next)&&(xo(s),s=s.next),s}function Pr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vs(t,t.next)||It(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&b0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?c0(i,n,r,s):l0(i)){e.push(l.i,i.i,c.i),xo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=d0(Pr(i),e),bo(i,e,t,n,r,s,2)):o===2&&h0(i,e,t,n,r,s):bo(Pr(i),e,t,n,r,s,1);break}}}function l0(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=p&&Js(r,a,s,l,o,c,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function c0(i,e,t,n){let r=i.prev,s=i,o=i.next;if(It(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,p=Math.min(a,l,c),m=Math.min(d,u,h),x=Math.max(a,l,c),g=Math.max(d,u,h),f=cd(p,m,e,t,n),S=cd(x,g,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=f&&v&&v.z<=S;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Js(a,d,l,u,c,h,M.x,M.y)&&It(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Js(a,d,l,u,c,h,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Js(a,d,l,u,c,h,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Js(a,d,l,u,c,h,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d0(i,e){let t=i;do{let n=t.prev,r=t.next.next;!vs(n,r)&&Qu(n,t,t.next,r)&&_o(n,r)&&_o(r,n)&&(e.push(n.i,t.i,r.i),xo(t),xo(t.next),t=i=r),t=t.next}while(t!==i);return Pr(t)}function h0(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&y0(o,a)){let l=ef(o,a);o=Pr(o,o.next),l=Pr(l,l.next),bo(o,e,t,n,r,s,0),bo(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function u0(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=$u(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(x0(c))}r.sort(f0);for(let s=0;s<r.length;s++)t=p0(r[s],t);return t}function f0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function p0(i,e){let t=m0(i,e);if(!t)return e;let n=ef(t,i);return Pr(n,n.next),Pr(t,t.next)}function m0(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(vs(i,t))return t;do{if(vs(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ku(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);_o(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&g0(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function g0(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function b0(i,e,t,n){let r=i;do r.z===0&&(r.z=cd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,_0(r)}function _0(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function cd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function x0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ku(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Js(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Ku(i,e,t,n,r,s,o,a)}function y0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!v0(i,e)&&(_o(i,e)&&_o(e,i)&&M0(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||vs(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vs(i,e){return i.x===e.x&&i.y===e.y}function Qu(i,e,t,n){let r=Ta(It(i,e,t)),s=Ta(It(i,e,n)),o=Ta(It(t,n,i)),a=Ta(It(t,n,e));return!!(r!==s&&o!==a||r===0&&Ea(i,t,e)||s===0&&Ea(i,n,e)||o===0&&Ea(t,i,n)||a===0&&Ea(t,e,n))}function Ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ta(i){return i>0?1:i<0?-1:0}function v0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _o(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function M0(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ef(i,e){let t=dd(i.i,i.x,i.y),n=dd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function iu(i,e,t,n){let r=dd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function S0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var hd=class{static triangulate(e,t,n=2){return a0(e,t,n)}},yr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ru(e),su(n,e);let o=e.length;t.forEach(ru);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,su(n,t[l]);let a=hd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ru(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function su(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ir=class i extends mt{constructor(e=new Ji([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:w0,M,v=!1,C,E,T,b;if(f){M=f.getSpacedPoints(d),v=!0,h=!1;let ce=f.isCatmullRomCurve3?f.closed:!1;C=f.computeFrenetFrames(d,ce),E=new D,T=new D,b=new D}h||(g=0,p=0,m=0,x=0);let y=a.extractPoints(c),N=y.shape,P=y.holes;if(!yr.isClockWise(N)){N=N.reverse();for(let ce=0,ge=P.length;ce<ge;ce++){let re=P[ce];yr.isClockWise(re)&&(P[ce]=re.reverse())}}function F(ce){let re=10000000000000001e-36,Me=ce[0];for(let I=1;I<=ce.length;I++){let We=I%ce.length,Ae=ce[We],Fe=Ae.x-Me.x,ye=Ae.y-Me.y,A=Fe*Fe+ye*ye,_=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(Me.x),Math.abs(Me.y)),B=re*_*_;if(A<=B){ce.splice(We,1),I--;continue}Me=Ae}}F(N),P.forEach(F);let k=P.length,O=N;for(let ce=0;ce<k;ce++){let ge=P[ce];N=N.concat(ge)}function z(ce,ge,re){return ge||Ke("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ge,re)}let R=N.length;function q(ce,ge,re){let Me,I,We,Ae=ce.x-ge.x,Fe=ce.y-ge.y,ye=re.x-ce.x,A=re.y-ce.y,_=Ae*Ae+Fe*Fe,B=Ae*A-Fe*ye;if(Math.abs(B)>Number.EPSILON){let K=Math.sqrt(_),de=Math.sqrt(ye*ye+A*A),Q=ge.x-Fe/K,Re=ge.y+Ae/K,Se=re.x-A/de,Oe=re.y+ye/de,Ye=((Se-Q)*A-(Oe-Re)*ye)/(Ae*A-Fe*ye);Me=Q+Ae*Ye-ce.x,I=Re+Fe*Ye-ce.y;let j=Me*Me+I*I;if(j<=2)return new pe(Me,I);We=Math.sqrt(j/2)}else{let K=!1;Ae>Number.EPSILON?ye>Number.EPSILON&&(K=!0):Ae<-Number.EPSILON?ye<-Number.EPSILON&&(K=!0):Math.sign(Fe)===Math.sign(A)&&(K=!0),K?(Me=-Fe,I=Ae,We=Math.sqrt(_)):(Me=Ae,I=Fe,We=Math.sqrt(_/2))}return new pe(Me/We,I/We)}let Y=[];for(let ce=0,ge=O.length,re=ge-1,Me=ce+1;ce<ge;ce++,re++,Me++)re===ge&&(re=0),Me===ge&&(Me=0),Y[ce]=q(O[ce],O[re],O[Me]);let ae=[],me,ue=Y.concat();for(let ce=0,ge=k;ce<ge;ce++){let re=P[ce];me=[];for(let Me=0,I=re.length,We=I-1,Ae=Me+1;Me<I;Me++,We++,Ae++)We===I&&(We=0),Ae===I&&(Ae=0),me[Me]=q(re[Me],re[We],re[Ae]);ae.push(me),ue=ue.concat(me)}let te;if(g===0)te=yr.triangulateShape(O,P);else{let ce=[],ge=[];for(let re=0;re<g;re++){let Me=re/g,I=p*Math.cos(Me*Math.PI/2),We=m*Math.sin(Me*Math.PI/2)+x;for(let Ae=0,Fe=O.length;Ae<Fe;Ae++){let ye=z(O[Ae],Y[Ae],We);fe(ye.x,ye.y,-I),Me===0&&ce.push(ye)}for(let Ae=0,Fe=k;Ae<Fe;Ae++){let ye=P[Ae];me=ae[Ae];let A=[];for(let _=0,B=ye.length;_<B;_++){let K=z(ye[_],me[_],We);fe(K.x,K.y,-I),Me===0&&A.push(K)}Me===0&&ge.push(A)}}te=yr.triangulateShape(ce,ge)}let le=te.length,se=m+x;for(let ce=0;ce<R;ce++){let ge=h?z(N[ce],ue[ce],se):N[ce];v?(T.copy(C.normals[0]).multiplyScalar(ge.x),E.copy(C.binormals[0]).multiplyScalar(ge.y),b.copy(M[0]).add(T).add(E),fe(b.x,b.y,b.z)):fe(ge.x,ge.y,0)}for(let ce=1;ce<=d;ce++)for(let ge=0;ge<R;ge++){let re=h?z(N[ge],ue[ge],se):N[ge];v?(T.copy(C.normals[ce]).multiplyScalar(re.x),E.copy(C.binormals[ce]).multiplyScalar(re.y),b.copy(M[ce]).add(T).add(E),fe(b.x,b.y,b.z)):fe(re.x,re.y,u/d*ce)}for(let ce=g-1;ce>=0;ce--){let ge=ce/g,re=p*Math.cos(ge*Math.PI/2),Me=m*Math.sin(ge*Math.PI/2)+x;for(let I=0,We=O.length;I<We;I++){let Ae=z(O[I],Y[I],Me);fe(Ae.x,Ae.y,u+re)}for(let I=0,We=P.length;I<We;I++){let Ae=P[I];me=ae[I];for(let Fe=0,ye=Ae.length;Fe<ye;Fe++){let A=z(Ae[Fe],me[Fe],Me);v?fe(A.x,A.y+M[d-1].y,M[d-1].x+re):fe(A.x,A.y,u+re)}}}V(),oe();function V(){let ce=r.length/3;if(h){let ge=0,re=R*ge;for(let Me=0;Me<le;Me++){let I=te[Me];Te(I[2]+re,I[1]+re,I[0]+re)}ge=d+g*2,re=R*ge;for(let Me=0;Me<le;Me++){let I=te[Me];Te(I[0]+re,I[1]+re,I[2]+re)}}else{for(let ge=0;ge<le;ge++){let re=te[ge];Te(re[2],re[1],re[0])}for(let ge=0;ge<le;ge++){let re=te[ge];Te(re[0]+R*d,re[1]+R*d,re[2]+R*d)}}n.addGroup(ce,r.length/3-ce,0)}function oe(){let ce=r.length/3,ge=0;ne(O,ge),ge+=O.length;for(let re=0,Me=P.length;re<Me;re++){let I=P[re];ne(I,ge),ge+=I.length}n.addGroup(ce,r.length/3-ce,1)}function ne(ce,ge){let re=ce.length;for(;--re>=0;){let Me=re,I=re-1;I<0&&(I=ce.length-1);for(let We=0,Ae=d+g*2;We<Ae;We++){let Fe=R*We,ye=R*(We+1),A=ge+Me+Fe,_=ge+I+Fe,B=ge+I+ye,K=ge+Me+ye;Pe(A,_,B,K)}}}function fe(ce,ge,re){l.push(ce),l.push(ge),l.push(re)}function Te(ce,ge,re){He(ce),He(ge),He(re);let Me=r.length/3,I=S.generateTopUV(n,r,Me-3,Me-2,Me-1);Ge(I[0]),Ge(I[1]),Ge(I[2])}function Pe(ce,ge,re,Me){He(ce),He(ge),He(Me),He(ge),He(re),He(Me);let I=r.length/3,We=S.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);Ge(We[0]),Ge(We[1]),Ge(We[3]),Ge(We[1]),Ge(We[2]),Ge(We[3])}function He(ce){r.push(l[ce*3+0]),r.push(l[ce*3+1]),r.push(l[ce*3+2])}function Ge(ce){s.push(ce.x),s.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return E0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new nl[r.type]().fromJSON(r)),new i(n,e.options)}},w0={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new pe(s,o),new pe(a,l),new pe(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],p=e[r*3+1],m=e[r*3+2],x=e[s*3],g=e[s*3+1],f=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-u),new pe(h,1-m),new pe(x,1-f)]:[new pe(a,1-l),new pe(d,1-u),new pe(p,1-m),new pe(g,1-f)]}};function E0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dr=class i extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,p=[],m=[],x=[],g=[];for(let f=0;f<d;f++){let S=f*h-o;for(let M=0;M<c;M++){let v=M*u-s;m.push(v,-S,0),x.push(0,0,1),g.push(M/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let M=S+c*f,v=S+c*(f+1),C=S+1+c*(f+1),E=S+1+c*f;p.push(M,v,E),p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yo=class i extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new D,h=new D,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){let S=[],M=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),g.push(E+v,1-M),S.push(c++)}d.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let M=d[f][S+1],v=d[f][S],C=d[f+1][S],E=d[f+1][S+1];(f!==0||o>0)&&p.push(M,v,E),(f!==n-1||l<Math.PI)&&p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vo=class i extends mt{constructor(e=new Rr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new pe,d=new D,u=[],h=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function x(){for(let M=0;M<t;M++)g(M);g(s===!1?t:0),S(),f()}function g(M){d=e.getPointAt(M/t,d);let v=o.normals[M],C=o.binormals[M];for(let E=0;E<=r;E++){let T=E/r*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);l.x=y*v.x+b*C.x,l.y=y*v.y+b*C.y,l.z=y*v.z+b*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){let C=(r+1)*(M-1)+(v-1),E=(r+1)*M+(v-1),T=(r+1)*M+v,b=(r+1)*(M-1)+v;m.push(C,E,b),m.push(E,T,b)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Fr(i[t]);for(let r in n)e[r]=n[r]}return e}function T0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var tf={clone:Fr,merge:un},A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=T0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},il=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var rl=class extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var $i=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends $i{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sd,endingEnd:sd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case od:s=e,a=2*t-n;break;case ad:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case od:o=e,l=2*n-t;break;case ad:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),x=m*m,g=x*m,f=-h*g+2*h*x-h*m,S=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,M=(-1-p)*g+(1.5+p)*x+.5*m,v=p*g-p*x;for(let C=0;C!==a;++C)s[C]=f*o[d+C]+S*o[c+C]+M*o[l+C]+v*o[u+C];return s}},al=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},ll=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends $i{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,u=d.inTangents,h=d.outTangents;if(!u||!h){let x=(n-t)/(r-t),g=1-x;for(let f=0;f!==a;++f)s[f]=o[c+f]*g+o[l+f]*x;return s}let p=a*2,m=e-1;for(let x=0;x!==a;++x){let g=o[c+x],f=o[l+x],S=m*p+x*2,M=h[S],v=h[S+1],C=e*p+x*2,E=u[C],T=u[C+1],b=(n-t)/(r-t),y,N,P,L,F;for(let k=0;k<8;k++){y=b*b,N=y*b,P=1-b,L=P*P,F=L*P;let z=F*t+3*L*b*M+3*P*y*E+N*r-n;if(Math.abs(z)<1e-10)break;let R=3*L*(M-t)+6*P*b*(E-M)+3*y*(r-E);if(Math.abs(R)<1e-10)break;b=b-z/R,b=Math.max(0,Math.min(1,b))}s[x]=F*g+3*L*b*v+3*P*y*T+N*f}return s}},Cn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case Ga:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break;case rd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return Ga;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&xp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ia,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,p=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[h+m]||x!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ga;var Ki=class extends Cn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=eo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends Cn{constructor(e,t,n,r){super(e,t,n,r)}};dl.prototype.ValueTypeName="color";var hl=class extends Cn{constructor(e,t,n,r){super(e,t,n,r)}};hl.prototype.ValueTypeName="number";var ul=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)Qt.slerpFlat(s,0,o,c-a,o,c,l);return s}},Mo=class extends Cn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=eo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Cn{constructor(e,t,n,r){super(e,t,n,r)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nf=new pl,ml=class{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wo=class extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nd=new ot,ou=new D,au=new D,ud=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(au),t.updateMatrixWorld(),nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ra=new D,Ca=new Qt,li=new D,Eo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,li.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ra,Ca,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new D,lu=new pe,cu=new pe,hn=class extends Eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ms=class extends Eo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fd=class extends ud{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new fd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=-90,ls=1,gl=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new hn(as,ls,e,t);r.layers=this.layers,this.add(r);let s=new hn(as,ls,e,t);s.layers=this.layers,this.add(s);let o=new hn(as,ls,e,t);o.layers=this.layers,this.add(o);let a=new hn(as,ls,e,t);a.layers=this.layers,this.add(a);let l=new hn(as,ls,e,t);l.layers=this.layers,this.add(l);let c=new hn(as,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},bl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var kd="\\[\\]\\.:\\/",C0=new RegExp("["+kd+"]","g"),Vd="[^"+kd+"]",P0="[^"+kd.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",Vd),D0=/(WCOD+)?/.source.replace("WCOD",P0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vd),N0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vd),U0=new RegExp("^"+I0+D0+L0+N0+"$"),F0=["material","materials","bones","map"],pd=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(e){let t=U0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);F0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=pd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lx=new Float32Array(1);var du=new ot,To=class{constructor(e,t,n=0,r=1/0){this.ray=new Yi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(du),this}intersectObject(e,t=!0,n=[]){return md(e,this,n,t),n.sort(hu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)md(e[r],this,n,t);return n.sort(hu),n}};function hu(i,e){return i.distance-e.distance}function md(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)md(s[o],e,t,!0)}}var ws=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ao=class extends Gt{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new mt;s.setIndex(new rn(n,1)),s.setAttribute("position",new ct(r,3)),super(s,new en({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var uu=new D,Pa,id,Lr=class extends qt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Pa===void 0&&(Pa=new mt,Pa.setAttribute("position",new ct([0,0,0,0,1,0],3)),id=new Ka(.5,1,5,1),id.translate(0,-.5,0)),this.position.copy(t),this.line=new Tr(Pa,new en({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(id,new On({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{uu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(uu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Ro=class extends fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Hd(i,e,t,n){let r=z0(n);switch(t){case Dd:return i*e;case Nd:return i*e/r.components*r.byteLength;case wl:return i*e/r.components*r.byteLength;case Ur:return i*e*2/r.components*r.byteLength;case El:return i*e*2/r.components*r.byteLength;case Ld:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Tl:return i*e*4/r.components*r.byteLength;case Lo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(i,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Dl:case Nl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Fl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ic:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(i){switch(i){case yn:case Rd:return{byteLength:1,components:1};case Ts:case Cd:case bi:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case $n:case vl:case Kn:return{byteLength:4,components:1};case Pd:case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function G0(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<u.length;p++){let m=u[h],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,u[h]=x)}u.length=h+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
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
#endif`,Hm=`uniform sampler2D dfgLUT;
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
}`,Gm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,o1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,l1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,p1=`#define STANDARD
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
}`,m1=`#define TOON
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
}`,g1=`#define TOON
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
}`,b1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,y1=`uniform vec3 color;
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
}`,v1=`uniform float rotation;
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
}`,M1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:j0,alphatest_fragment:Y0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:$0,batching_pars_vertex:K0,batching_vertex:Q0,begin_vertex:em,beginnormal_vertex:tm,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:rm,clipping_planes_fragment:sm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:dm,color_pars_vertex:hm,color_vertex:um,common:fm,cube_uv_reflection_fragment:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:bm,emissivemap_fragment:_m,emissivemap_pars_fragment:xm,colorspace_fragment:ym,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:wm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Fm,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Dm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:zm,lights_toon_pars_fragment:Om,lights_phong_fragment:Bm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Gm,lights_fragment_maps:Wm,lights_fragment_end:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:og,normal_fragment_begin:ag,normal_fragment_maps:lg,normal_pars_fragment:cg,normal_pars_vertex:dg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:gg,opaque_fragment:bg,packing:_g,premultiplied_alpha_fragment:xg,project_vertex:yg,dithering_fragment:vg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:Ag,shadowmask_pars_fragment:Rg,skinbase_vertex:Cg,skinning_pars_vertex:Pg,skinning_vertex:Ig,skinnormal_vertex:Dg,specularmap_fragment:Lg,specularmap_pars_fragment:Ng,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:zg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:Vg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:jg,cube_frag:Yg,depth_vert:Zg,depth_frag:Jg,distance_vert:$g,distance_frag:Kg,equirect_vert:Qg,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:d1,meshphong_vert:h1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:b1,points_frag:_1,shadow_vert:x1,shadow_frag:y1,sprite_vert:v1,sprite_frag:M1},Ie={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},xi={basic:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:un([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:un([Ie.lights,Ie.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xi.physical={uniforms:un([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ac={r:0,b:0,g:0},zr=new Zn,S1=new ot;function w1(i,e,t,n,r,s){let o=new at(0),a=r===!0?0:1,l,c,d=null,u=0,h=null;function p(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(S){let M=!1,v=p(S);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Io)?(c===void 0&&(c=new lt(new on(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Fr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),zr.copy(M.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S1.makeRotationFromEuler(zr)),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==bt,(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new Dr(2,2),new Rn({name:"BackgroundMaterial",uniforms:Fr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,M){S.getRGB(ac,Bd(i)),t.buffers.color.setClear(ac.r,ac.g,ac.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:x,dispose:f}}function E1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,L,F,k,O){let z=!1,R=u(P,k,F,L);s!==R&&(s=R,c(s.object)),z=p(P,k,F,O),z&&m(P,k,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(P,L,F,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,L,F,k){let O=k.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let R=P.isInstancedMesh===!0?P.id:0,q=z[R];q===void 0&&(q={},z[R]=q);let Y=q[F.id];Y===void 0&&(Y={},q[F.id]=Y);let ae=Y[O];return ae===void 0&&(ae=h(l()),Y[O]=ae),ae}function h(P){let L=[],F=[],k=[];for(let O=0;O<t;O++)L[O]=0,F[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:P,attributes:{},index:null}}function p(P,L,F,k){let O=s.attributes,z=L.attributes,R=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let me=O[Y],ue=z[Y];if(ue===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),me===void 0||me.attribute!==ue||ue&&me.data!==ue.data)return!0;R++}return s.attributesNum!==R||s.index!==k}function m(P,L,F,k){let O={},z=L.attributes,R=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let me=z[Y];me===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let ue={};ue.attribute=me,me&&me.data&&(ue.data=me.data),O[Y]=ue,R++}s.attributes=O,s.attributesNum=R,s.index=k}function x(){let P=s.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function g(P){f(P,0)}function f(P,L){let F=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;F[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),O[P]!==L&&(i.vertexAttribDivisor(P,L),O[P]=L)}function S(){let P=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(P,L,F,k,O,z,R){R===!0?i.vertexAttribIPointer(P,L,F,O,z):i.vertexAttribPointer(P,L,F,k,O,z)}function v(P,L,F,k){x();let O=k.attributes,z=F.getAttributes(),R=L.defaultAttributeValues;for(let q in z){let Y=z[q];if(Y.location>=0){let ae=O[q];if(ae===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){let me=ae.normalized,ue=ae.itemSize,te=e.get(ae);if(te===void 0)continue;let le=te.buffer,se=te.type,V=te.bytesPerElement,oe=se===i.INT||se===i.UNSIGNED_INT||ae.gpuType===vl;if(ae.isInterleavedBufferAttribute){let ne=ae.data,fe=ne.stride,Te=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)f(Y.location+Pe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)g(Y.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Pe=0;Pe<Y.locationSize;Pe++)M(Y.location+Pe,ue/Y.locationSize,se,me,fe*V,(Te+ue/Y.locationSize*Pe)*V,oe)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)f(Y.location+ne,ae.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<Y.locationSize;ne++)g(Y.location+ne);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ne=0;ne<Y.locationSize;ne++)M(Y.location+ne,ue/Y.locationSize,se,me,ue*V,ue/Y.locationSize*ne*V,oe)}}else if(R!==void 0){let me=R[q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Y.location,me);break;case 3:i.vertexAttrib3fv(Y.location,me);break;case 4:i.vertexAttrib4fv(Y.location,me);break;default:i.vertexAttrib1fv(Y.location,me)}}}}S()}function C(){y();for(let P in n){let L=n[P];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P.id]}function T(P){for(let L in n){let F=n[L];for(let k in F){let O=F[k];if(O[P.id]===void 0)continue;let z=O[P.id];for(let R in z)d(z[R].object),delete z[R];delete O[P.id]}}}function b(P){for(let L in n){let F=n[L],k=P.isInstancedMesh===!0?P.id:0,O=F[k];if(O!==void 0){for(let z in O){let R=O[z];for(let q in R)d(R[q].object),delete R[q];delete O[z]}delete F[k],Object.keys(F).length===0&&delete n[L]}}}function y(){N(),o=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:S}}function T1(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let m=0;m<u;m++)p+=d[m];t.update(p,n,1)}function l(c,d,u,h){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)o(c[m],d[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=d[x]*h[x];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!b)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&($e("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:C,samples:E}}function R1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new xn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||n!==0||r;return r=h,n=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,f=i.get(u);if(!r||m===null||m.length===0||s&&!g)s?d(null):c();else{let S=s?0:n,M=S*4,v=f.clippingState||null;l.value=v,v=d(m,h,M,p);for(let C=0;C!==M;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let f=p+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,v=p;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var sr=4,rf=[.125,.215,.35,.446,.526,.582],Br=20,C1=256,zo=new Ms,sf=new at,Gd=null,Wd=0,Xd=0,qd=!1,P1=new D,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=P1}=s;Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gd,Wd,Xd),this._renderer.xr.enabled=qd,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:bi,format:Bn,colorSpace:Sr,depthBuffer:!1},r=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=I1(s)),this._blurMaterial=L1(s,e,t),this._ggxMaterial=D1(s,e,t)}return r}_compileMaterial(e){let t=new lt(new mt,e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,n,r,s){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(sf),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new on,new On({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,f=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,f=!0):(g.color.copy(sf),f=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));let C=this._cubeSize;Rs(r,v*C,M>2?C:0,C,C),u.setRenderTarget(r),f&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===nr||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,p=u*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-sr?n-m+sr:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Rs(s,g,f,3*x,2*x),r.setRenderTarget(s),r.render(a,zo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Rs(e,g,f,3*x,2*x),r.setRenderTarget(e),r.render(a,zo)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Br-1),x=s/m,g=isFinite(s)?1+Math.floor(d*x):Br;g>Br&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);let f=[],S=0;for(let T=0;T<Br;++T){let b=T/x,y=Math.exp(-b*b/2);f.push(y),T===0?S+=y:T<g&&(S+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=m,h.mipInt.value=M-n;let v=this._sizeLods[r],C=3*v*(r>M-sr?r-M+sr:0),E=4*(this._cubeSize-v);Rs(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(u,zo)}};function I1(i){let e=[],t=[],n=[],r=i,s=i-sr+1+rf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-sr?l=rf[o-i+sr-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,m=6,x=3,g=2,f=1,S=new Float32Array(x*m*p),M=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(y,x*m*E),M.set(h,g*m*E);let N=[E,E,E,E,E,E];v.set(N,f*m*E)}let C=new mt;C.setAttribute("position",new rn(S,x)),C.setAttribute("uv",new rn(M,g)),C.setAttribute("faceIndex",new rn(v,f)),n.push(new lt(C,null)),r>sr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function of(i,e,t){let n=new Tn(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function D1(i,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function L1(i,e,t){let n=new Float32Array(Br),r=new D(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function af(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function lf(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}var dc=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ho(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:gi});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===ir&&(t.minFilter=sn),new gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function N1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===_l||p===xl)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new dc(m.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,m=p===_l||p===xl,x=p===nr||p===Nr;if(m||x){let g=t.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new cc(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let S=h.image;return m&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new cc(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,p){return p===_l?h.mapping=nr:p===xl&&(h.mapping=Nr),h}function l(h){let p=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&p++;return p===m}function c(h){let p=h.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function U1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ro("WebGLRenderer: "+n+" extension not supported."),r}}}function F1(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(u){let h=[],p=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(p!==null){let S=p.array;x=p.version;for(let M=0,v=S.length;M<v;M+=3){let C=S[M+0],E=S[M+1],T=S[M+2];h.push(C,E,E,T,T,C)}}else{let S=m.array;x=m.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let C=M+0,E=M+1,T=M+2;h.push(C,E,E,T,T,C)}}let g=new(m.count>=65535?lo:ao)(h,1);g.version=x;let f=s.get(u);f&&e.remove(f),s.set(u,g)}function d(u){let h=s.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function z1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,m){m!==0&&(i.drawElementsInstanced(n,p,s,h*o,m),t.update(p,n,m))}function d(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function u(h,p,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,x,0,m);let f=0;for(let S=0;S<m;S++)f+=p[S]*x[S];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function O1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function B1(i,e,t){let n=new WeakMap,r=new Dt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*u),T=new so(E,v,C,u);T.type=Kn,T.needsUpdate=!0;let b=M*4;for(let N=0;N<u;N++){let P=g[N],L=f[N],F=S[N],k=v*C*4*N;for(let O=0;O<P.count;O++){let z=O*b;p===!0&&(r.fromBufferAttribute(P,O),E[k+z+0]=r.x,E[k+z+1]=r.y,E[k+z+2]=r.z,E[k+z+3]=0),m===!0&&(r.fromBufferAttribute(L,O),E[k+z+4]=r.x,E[k+z+5]=r.y,E[k+z+6]=r.z,E[k+z+7]=0),x===!0&&(r.fromBufferAttribute(F,O),E[k+z+8]=r.x,E[k+z+9]=r.y,E[k+z+10]=r.z,E[k+z+11]=F.itemSize===4?r.w:1)}}h={count:u,texture:T,size:new pe(v,C)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function k1(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var V1={[vd]:"LINEAR_TONE_MAPPING",[Md]:"REINHARD_TONE_MAPPING",[Sd]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[Ed]:"AGX_TONE_MAPPING",[Td]:"NEUTRAL_TONE_MAPPING",[wd]:"CUSTOM_TONE_MAPPING"};function H1(i,e,t,n,r){let s=new Tn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Tn(e,t,{type:bi,depthBuffer:!1,stencilBuffer:!1}),a=new mt;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));let l=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new lt(a,l),d=new Ms(-1,1,1,-1,0,1),u=null,h=null,p=!1,m,x=null,g=[],f=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let v=0;v<g.length;v++){let C=g[v];C.setSize&&C.setSize(S,M)}},this.setEffects=function(S){g=S,f=g.length>0&&g[0].isRenderPass===!0;let M=s.width,v=s.height;for(let C=0;C<g.length;C++){let E=g[C];E.setSize&&E.setSize(M,v)}},this.begin=function(S,M){if(p||S.toneMapping===Jn&&g.length===0)return!1;if(x=M,M!==null){let v=M.width,C=M.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return f===!1&&S.setRenderTarget(s),m=S.toneMapping,S.toneMapping=Jn,!0},this.hasRenderPass=function(){return f},this.end=function(S,M){S.toneMapping=m,p=!0;let v=s,C=o;for(let E=0;E<g.length;E++){let T=g[E];if(T.enabled!==!1&&(T.render(S,C,v,M),T.needsSwap!==!1)){let b=v;v=C,C=b}}if(u!==S.outputColorSpace||h!==S.toneMapping){u=S.outputColorSpace,h=S.toneMapping,l.defines={},ht.getTransfer(u)===bt&&(l.defines.SRGB_TRANSFER="");let E=V1[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(x),S.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Af=new mn,Zd=new Zi(1,1),Rf=new so,Cf=new ja,Pf=new ho,cf=[],df=[],hf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);function Ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=cf[r];if(s===void 0&&(s=new Float32Array(r),cf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fc(i,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function X1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function j1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),Yt(t,n)}}function Y1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Yt(t,n)}}function Z1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(jt(t,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),Yt(t,n)}}function J1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function K1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function eb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function rb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zd.compareFunction=t.isReversedDepthBuffer()?oc:sc,s=Zd):s=Af,t.setTexture2D(e||s,r)}function sb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cf,r)}function ob(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pf,r)}function ab(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rf,r)}function lb(i){switch(i){case 5126:return G1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return j1;case 35675:return Y1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return $1;case 35668:case 35672:return K1;case 35669:case 35673:return Q1;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(i,e){i.uniform1fv(this.addr,e)}function db(i,e){let t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function hb(i,e){let t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function ub(i,e){let t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function fb(i,e){let t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pb(i,e){let t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mb(i,e){let t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gb(i,e){i.uniform1iv(this.addr,e)}function bb(i,e){i.uniform2iv(this.addr,e)}function _b(i,e){i.uniform3iv(this.addr,e)}function xb(i,e){i.uniform4iv(this.addr,e)}function yb(i,e){i.uniform1uiv(this.addr,e)}function vb(i,e){i.uniform2uiv(this.addr,e)}function Mb(i,e){i.uniform3uiv(this.addr,e)}function Sb(i,e){i.uniform4uiv(this.addr,e)}function wb(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zd:o=Af;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Eb(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cf,s[o])}function Tb(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Pf,s[o])}function Ab(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);jt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rf,s[o])}function Rb(i){switch(i){case 5126:return cb;case 35664:return db;case 35665:return hb;case 35666:return ub;case 35674:return fb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return bb;case 35668:case 35672:return _b;case 35669:case 35673:return xb;case 5125:return yb;case 36294:return vb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return Ab}}var Jd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lb(t.type)}},$d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rb(t.type)}},Kd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},jd=/(\w+)(\])?(\[|\.)?/g;function pf(i,e){i.seq.push(e),i.map[e.id]=e}function Cb(i,e,t){let n=i.name,r=n.length;for(jd.lastIndex=0;;){let s=jd.exec(n),o=jd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pf(t,c===void 0?new Jd(a,i,e):new $d(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Kd(a),pf(t,u)),t=u}}}var Cs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Cb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function mf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pb=37297,Ib=0;function Db(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var gf=new et;function Lb(i){ht._getMatrix(gf,ht.workingColorSpace,i);let e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case to:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Db(i.getShaderSource(e),a)}else return s}function Nb(i,e){let t=Lb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ub={[vd]:"Linear",[Md]:"Reinhard",[Sd]:"Cineon",[Po]:"ACESFilmic",[Ed]:"AgX",[Td]:"Neutral",[wd]:"Custom"};function Fb(i,e){let t=Ub[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new D;function zb(){ht.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Bb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bo(i){return i!==""}function _f(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(i){return i.replace(Vb,Gb)}var Hb=new Map;function Gb(i,e){let t=nt[e];if(t===void 0){let n=Hb.get(e);if(n!==void 0)t=nt[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}var Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(i){return i.replace(Wb,Xb)}function Xb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var qb={[Co]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function jb(i){return qb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yb={[nr]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function Zb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jb={[Nr]:"ENVMAP_MODE_REFRACTION"};function $b(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kb={[yd]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Uu]:"ENVMAP_BLENDING_ADD"};function Qb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t_(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jb(t),c=Zb(t),d=$b(t),u=Qb(t),h=e_(t),p=Ob(t),m=Bb(s),x=r.createProgram(),g,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bo).join(`
`),f.length>0&&(f+=`
`)):(g=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),f=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Nb("linearToOutputTexel",t.outputColorSpace),zb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Qd(o),o=_f(o,t),o=xf(o,t),a=Qd(a),a=_f(a,t),a=xf(a,t),o=yf(o),a=yf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=S+g+o,v=S+f+a,C=mf(r,r.VERTEX_SHADER,M),E=mf(r,r.FRAGMENT_SHADER,v);r.attachShader(x,C),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",F=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(E)||"",O=L.trim(),z=F.trim(),R=k.trim(),q=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,E);else{let ae=bf(r,C,"vertex"),me=bf(r,E,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ae+`
`+me)}else O!==""?$e("WebGLProgram: Program Info Log:",O):(z===""||R==="")&&(Y=!1);Y&&(P.diagnostics={runnable:q,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:R,prefix:f}})}r.deleteShader(C),r.deleteShader(E),b=new Cs(r,x),y=kb(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(x,Pb)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ib++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=E,this}var n_=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new th(e),t.set(e,n)),n}},th=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};function i_(i,e,t,n,r,s){let o=new ms,a=new eh,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,y,N,P,L){let F=P.fog,k=L.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,R=e.get(b.envMap||O,z),q=R&&R.mapping===Io?R.image.height:null,Y=p[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&$e("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=ae!==void 0?ae.length:0,ue=0;k.morphAttributes.position!==void 0&&(ue=1),k.morphAttributes.normal!==void 0&&(ue=2),k.morphAttributes.color!==void 0&&(ue=3);let te,le,se,V;if(Y){let Xe=xi[Y];te=Xe.vertexShader,le=Xe.fragmentShader}else te=b.vertexShader,le=b.fragmentShader,a.update(b),se=a.getVertexShaderID(b),V=a.getFragmentShaderID(b);let oe=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),fe=L.isInstancedMesh===!0,Te=L.isBatchedMesh===!0,Pe=!!b.map,He=!!b.matcap,Ge=!!R,ce=!!b.aoMap,ge=!!b.lightMap,re=!!b.bumpMap,Me=!!b.normalMap,I=!!b.displacementMap,We=!!b.emissiveMap,Ae=!!b.metalnessMap,Fe=!!b.roughnessMap,ye=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,B=b.iridescence>0,K=b.sheen>0,de=b.transmission>0,Q=ye&&!!b.anisotropyMap,Re=A&&!!b.clearcoatMap,Se=A&&!!b.clearcoatNormalMap,Oe=A&&!!b.clearcoatRoughnessMap,Ye=B&&!!b.iridescenceMap,j=B&&!!b.iridescenceThicknessMap,ie=K&&!!b.sheenColorMap,we=K&&!!b.sheenRoughnessMap,xe=!!b.specularMap,ve=!!b.specularColorMap,Ne=!!b.specularIntensityMap,U=de&&!!b.transmissionMap,G=de&&!!b.thicknessMap,X=!!b.gradientMap,he=!!b.alphaMap,Z=b.alphaTest>0,W=!!b.alphaHash,be=!!b.extensions,Ee=Jn;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let Be={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:le,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Te,batchingColor:Te&&L._colorsTexture!==null,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Sr,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:He,envMap:Ge,envMapMode:Ge&&R.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:ge,bumpMap:re,normalMap:Me,displacementMap:I,emissiveMap:We,normalMapObjectSpace:Me&&b.normalMapType===Ou,normalMapTangentSpace:Me&&b.normalMapType===Ud,metalnessMap:Ae,roughnessMap:Fe,anisotropy:ye,anisotropyMap:Q,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,dispersion:_,iridescence:B,iridescenceMap:Ye,iridescenceThicknessMap:j,sheen:K,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:xe,specularColorMap:ve,specularIntensityMap:Ne,transmission:de,transmissionMap:U,thicknessMap:G,gradientMap:X,opaque:b.transparent===!1&&b.blending===vr&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:W,combine:b.combine,mapUv:Pe&&m(b.map.channel),aoMapUv:ce&&m(b.aoMap.channel),lightMapUv:ge&&m(b.lightMap.channel),bumpMapUv:re&&m(b.bumpMap.channel),normalMapUv:Me&&m(b.normalMap.channel),displacementMapUv:I&&m(b.displacementMap.channel),emissiveMapUv:We&&m(b.emissiveMap.channel),metalnessMapUv:Ae&&m(b.metalnessMap.channel),roughnessMapUv:Fe&&m(b.roughnessMap.channel),anisotropyMapUv:Q&&m(b.anisotropyMap.channel),clearcoatMapUv:Re&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:j&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(b.sheenRoughnessMap.channel),specularMapUv:xe&&m(b.specularMap.channel),specularColorMapUv:ve&&m(b.specularColorMap.channel),specularIntensityMapUv:Ne&&m(b.specularIntensityMap.channel),transmissionMapUv:U&&m(b.transmissionMap.channel),thicknessMapUv:G&&m(b.thicknessMap.channel),alphaMapUv:he&&m(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Pe||he),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===gn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function g(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)y.push(N),y.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(f(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function f(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let y=p[b.type],N;if(y){let P=xi[y];N=tf.clone(P.uniforms)}else N=b.uniforms;return N}function v(b,y){let N=d.get(y);return N!==void 0?++N.usedTimes:(N=new t_(i,y,b,r),c.push(N),d.set(y,N)),N}function C(b){if(--b.usedTimes===0){let y=c.indexOf(b);c[y]=c[c.length-1],c.pop(),d.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:T}}function r_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function s_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,m,x,g,f){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:m,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:f},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=m,S.materialVariant=o(h),S.groupOrder=x,S.renderOrder=h.renderOrder,S.z=g,S.group=f),e++,S}function l(h,p,m,x,g,f){let S=a(h,p,m,x,g,f);m.transmission>0?n.push(S):m.transparent===!0?r.push(S):t.push(S)}function c(h,p,m,x,g,f){let S=a(h,p,m,x,g,f);m.transmission>0?n.unshift(S):m.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,p){t.length>1&&t.sort(h||s_),n.length>1&&n.sort(p||Mf),r.length>1&&r.sort(p||Mf)}function u(){for(let h=e,p=i.length;h<p;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function o_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Sf,i.set(n,[o])):r>=s.length?(o=new Sf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function a_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new at};break;case"SpotLight":t={position:new D,direction:new D,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var c_=0;function d_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function h_(i){let e=new a_,t=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new ot,o=new ot;function a(c){let d=0,u=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,S=0,M=0,v=0,C=0,E=0,T=0;c.sort(d_);for(let y=0,N=c.length;y<N;y++){let P=c[y],L=P.color,F=P.intensity,k=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ur?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=L.r*F,u+=L.g*F,h+=L.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);T++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,q=t.get(P);q.shadowIntensity=R.intensity,q.shadowBias=R.bias,q.shadowNormalBias=R.normalBias,q.shadowRadius=R.radius,q.shadowMapSize=R.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=z,p++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(L).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[x]=z;let R=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,R.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=R.matrix,P.castShadow){let q=t.get(P);q.shadowIntensity=R.intensity,q.shadowBias=R.bias,q.shadowNormalBias=R.normalBias,q.shadowRadius=R.radius,q.shadowMapSize=R.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=O,v++}x++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(L).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let R=P.shadow,q=t.get(P);q.shadowIntensity=R.intensity,q.shadowBias=R.bias,q.shadowNormalBias=R.normalBias,q.shadowRadius=R.radius,q.shadowMapSize=R.mapSize,q.shadowCameraNear=R.camera.near,q.shadowCameraFar=R.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=z,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let b=n.hash;(b.directionalLength!==p||b.pointLength!==m||b.spotLength!==x||b.rectAreaLength!==g||b.hemiLength!==f||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==C||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=m,b.spotLength=x,b.rectAreaLength=g,b.hemiLength=f,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=C,b.numLightProbes=T,n.version=c_++)}function l(c,d){let u=0,h=0,p=0,m=0,x=0,g=d.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let M=c[f];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),u++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function wf(i){let e=new h_(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function u_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new wf(i),e.set(r,[a])):s>=o.length?(a=new wf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],g_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ef=new ot,Oo=new D,Yd=new D;function b_(i,e,t){let n=new _s,r=new pe,s=new pe,o=new Dt,a=new rl,l=new sl,c={},d=t.maxTextureSize,u={[Pi]:gn,[gn]:Pi,[Lt]:Lt},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let f=this.type;this.render=function(E,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===mu&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Co);let y=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(gi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=f!==this.type;F&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=E.length;k<O;k++){let z=E[k],R=z.shadow;if(R===void 0){$e("WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);let q=R.getFrameExtents();r.multiply(q),s.copy(R.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,R.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,R.mapSize.y=s.y));let Y=i.state.buffers.depth.getReversed();if(R.camera._reversedDepth=Y,R.map===null||F===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===Es){if(z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new Tn(r.x,r.y,{format:Ur,type:bi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),R.map.texture.name=z.name+".shadowMap",R.map.depthTexture=new Zi(r.x,r.y,Kn),R.map.depthTexture.name=z.name+".shadowMapDepth",R.map.depthTexture.format=ui,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Kt,R.map.depthTexture.magFilter=Kt}else z.isPointLight?(R.map=new dc(r.x),R.map.depthTexture=new $a(r.x,$n)):(R.map=new Tn(r.x,r.y),R.map.depthTexture=new Zi(r.x,r.y,$n)),R.map.depthTexture.name=z.name+".shadowMap",R.map.depthTexture.format=ui,this.type===Co?(R.map.depthTexture.compareFunction=Y?oc:sc,R.map.depthTexture.minFilter=sn,R.map.depthTexture.magFilter=sn):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Kt,R.map.depthTexture.magFilter=Kt);R.camera.updateProjectionMatrix()}let ae=R.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ae;me++){if(R.map.isWebGLCubeRenderTarget)i.setRenderTarget(R.map,me),i.clear();else{me===0&&(i.setRenderTarget(R.map),i.clear());let ue=R.getViewport(me);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),L.viewport(o)}if(z.isPointLight){let ue=R.camera,te=R.matrix,le=z.distance||ue.far;le!==ue.far&&(ue.far=le,ue.updateProjectionMatrix()),Oo.setFromMatrixPosition(z.matrixWorld),ue.position.copy(Oo),Yd.copy(ue.position),Yd.add(m_[me]),ue.up.copy(g_[me]),ue.lookAt(Yd),ue.updateMatrixWorld(),te.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Ef.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Ef,ue.coordinateSystem,ue.reversedDepth)}else R.updateMatrices(z);n=R.getFrustum(),v(T,b,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Es&&S(R,b),R.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(y,N,P)};function S(E,T){let b=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Tn(r.x,r.y,{format:Ur,type:bi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,h,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,p,x,null)}function M(E,T,b,y){let N=null,P=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)N=P;else if(N=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=N.uuid,F=T.uuid,k=c[L];k===void 0&&(k={},c[L]=k);let O=k[F];O===void 0&&(O=N.clone(),k[F]=O,T.addEventListener("dispose",C)),N=O}if(N.visible=T.visible,N.wireframe=T.wireframe,y===Es?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:u[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let L=i.properties.get(N);L.light=b}return N}function v(E,T,b,y,N){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Es)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let F=e.update(E),k=E.material;if(Array.isArray(k)){let O=F.groups;for(let z=0,R=O.length;z<R;z++){let q=O[z],Y=k[q.materialIndex];if(Y&&Y.visible){let ae=M(E,Y,y,N);E.onBeforeShadow(i,E,T,b,F,ae,q),i.renderBufferDirect(b,null,F,ae,E,q),E.onAfterShadow(i,E,T,b,F,ae,q)}}}else if(k.visible){let O=M(E,k,y,N);E.onBeforeShadow(i,E,T,b,F,O,null),i.renderBufferDirect(b,null,F,O,E,null),E.onAfterShadow(i,E,T,b,F,O,null)}}let L=E.children;for(let F=0,k=L.length;F<k;F++)v(L[F],T,b,y,N)}function C(E){E.target.removeEventListener("dispose",C);for(let b in c){let y=c[b],N=E.target.uuid;N in y&&(y[N].dispose(),delete y[N])}}}function __(i,e){function t(){let U=!1,G=new Dt,X=null,he=new Dt(0,0,0,0);return{setMask:function(Z){X!==Z&&!U&&(i.colorMask(Z,Z,Z,Z),X=Z)},setLocked:function(Z){U=Z},setClear:function(Z,W,be,Ee,Be){Be===!0&&(Z*=Ee,W*=Ee,be*=Ee),G.set(Z,W,be,Ee),he.equals(G)===!1&&(i.clearColor(Z,W,be,Ee),he.copy(G))},reset:function(){U=!1,X=null,he.set(-1,0,0,0)}}}function n(){let U=!1,G=!1,X=null,he=null,Z=null;return{setReversed:function(W){if(G!==W){let be=e.get("EXT_clip_control");W?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),G=W;let Ee=Z;Z=null,this.setClear(Ee)}},getReversed:function(){return G},setTest:function(W){W?oe(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(W){X!==W&&!U&&(i.depthMask(W),X=W)},setFunc:function(W){if(G&&(W=Yu[W]),he!==W){switch(W){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=W}},setLocked:function(W){U=W},setClear:function(W){Z!==W&&(Z=W,G&&(W=1-W),i.clearDepth(W))},reset:function(){U=!1,X=null,he=null,Z=null,G=!1}}}function r(){let U=!1,G=null,X=null,he=null,Z=null,W=null,be=null,Ee=null,Be=null;return{setTest:function(Xe){U||(Xe?oe(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(Xe){G!==Xe&&!U&&(i.stencilMask(Xe),G=Xe)},setFunc:function(Xe,Pt,Bt){(X!==Xe||he!==Pt||Z!==Bt)&&(i.stencilFunc(Xe,Pt,Bt),X=Xe,he=Pt,Z=Bt)},setOp:function(Xe,Pt,Bt){(W!==Xe||be!==Pt||Ee!==Bt)&&(i.stencilOp(Xe,Pt,Bt),W=Xe,be=Pt,Ee=Bt)},setLocked:function(Xe){U=Xe},setClear:function(Xe){Be!==Xe&&(i.clearStencil(Xe),Be=Xe)},reset:function(){U=!1,G=null,X=null,he=null,Z=null,W=null,be=null,Ee=null,Be=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,p=[],m=null,x=!1,g=null,f=null,S=null,M=null,v=null,C=null,E=null,T=new at(0,0,0),b=0,y=!1,N=null,P=null,L=null,F=null,k=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,R=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=R>=1):q.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=R>=2);let Y=null,ae={},me=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),te=new Dt().fromArray(me),le=new Dt().fromArray(ue);function se(U,G,X,he){let Z=new Uint8Array(4),W=i.createTexture();i.bindTexture(U,W),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<X;be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(G+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return W}let V={};V[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Mr),re(!1),Me(gd),oe(i.CULL_FACE),ce(gi);function oe(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ne(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function fe(U,G){return u[U]!==G?(i.bindFramebuffer(U,G),u[U]=G,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=G),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=G),!0):!1}function Te(U,G){let X=p,he=!1;if(U){X=h.get(G),X===void 0&&(X=[],h.set(G,X));let Z=U.textures;if(X.length!==Z.length||X[0]!==i.COLOR_ATTACHMENT0){for(let W=0,be=Z.length;W<be;W++)X[W]=i.COLOR_ATTACHMENT0+W;X.length=Z.length,he=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,he=!0);he&&i.drawBuffers(X)}function Pe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let He={[qi]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};He[xu]=i.MIN,He[yu]=i.MAX;let Ge={[vu]:i.ZERO,[Mu]:i.ONE,[Su]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Pu]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Du]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(U,G,X,he,Z,W,be,Ee,Be,Xe){if(U===gi){x===!0&&(ne(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),U!==gu){if(U!==g||Xe!==y){if((f!==qi||v!==qi)&&(i.blendEquation(i.FUNC_ADD),f=qi,v=qi),Xe)switch(U){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bd:i.blendFunc(i.ONE,i.ONE);break;case _d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _d:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xd:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}S=null,M=null,C=null,E=null,T.set(0,0,0),b=0,g=U,y=Xe}return}Z=Z||G,W=W||X,be=be||he,(G!==f||Z!==v)&&(i.blendEquationSeparate(He[G],He[Z]),f=G,v=Z),(X!==S||he!==M||W!==C||be!==E)&&(i.blendFuncSeparate(Ge[X],Ge[he],Ge[W],Ge[be]),S=X,M=he,C=W,E=be),(Ee.equals(T)===!1||Be!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Be),T.copy(Ee),b=Be),g=U,y=!1}function ge(U,G){U.side===Lt?ne(i.CULL_FACE):oe(i.CULL_FACE);let X=U.side===gn;G&&(X=!X),re(X),U.blending===vr&&U.transparent===!1?ce(gi):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let he=U.stencilWrite;a.setTest(he),he&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),We(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function Me(U){U!==fu?(oe(i.CULL_FACE),U!==P&&(U===gd?i.cullFace(i.BACK):U===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),P=U}function I(U){U!==L&&(z&&i.lineWidth(U),L=U)}function We(U,G,X){U?(oe(i.POLYGON_OFFSET_FILL),(F!==G||k!==X)&&(F=G,k=X,o.getReversed()&&(G=-G),i.polygonOffset(G,X))):ne(i.POLYGON_OFFSET_FILL)}function Ae(U){U?oe(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=i.TEXTURE0+O-1),Y!==U&&(i.activeTexture(U),Y=U)}function ye(U,G,X){X===void 0&&(Y===null?X=i.TEXTURE0+O-1:X=Y);let he=ae[X];he===void 0&&(he={type:void 0,texture:void 0},ae[X]=he),(he.type!==U||he.texture!==G)&&(Y!==X&&(i.activeTexture(X),Y=X),i.bindTexture(U,G||V[U]),he.type=U,he.texture=G)}function A(){let U=ae[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function de(){try{i.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Se(){try{i.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Oe(){try{i.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Ye(){try{i.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ie(U){te.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function we(U){le.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function xe(U,G){let X=c.get(G);X===void 0&&(X=new WeakMap,c.set(G,X));let he=X.get(U);he===void 0&&(he=i.getUniformBlockIndex(G,U.name),X.set(U,he))}function ve(U,G){let he=c.get(G).get(U);l.get(G)!==he&&(i.uniformBlockBinding(G,he,U.__bindingPointIndex),l.set(G,he))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Y=null,ae={},u={},h=new WeakMap,p=[],m=null,x=!1,g=null,f=null,S=null,M=null,v=null,C=null,E=null,T=new at(0,0,0),b=0,y=!1,N=null,P=null,L=null,F=null,k=null,te.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:ne,bindFramebuffer:fe,drawBuffers:Te,useProgram:Pe,setBlending:ce,setMaterial:ge,setFlipSided:re,setCullFace:Me,setLineWidth:I,setPolygonOffset:We,setScissorTest:Ae,activeTexture:Fe,bindTexture:ye,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:Ye,texImage3D:j,updateUBOMapping:xe,uniformBlockBinding:ve,texStorage2D:Se,texStorage3D:Oe,texSubImage2D:K,texSubImage3D:de,compressedTexSubImage2D:Q,compressedTexSubImage3D:Re,scissor:ie,viewport:we,reset:Ne}}function x_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,d=new WeakMap,u,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,_){return p?new OffscreenCanvas(A,_):no("canvas")}function x(A,_,B){let K=1,de=ye(A);if((de.width>B||de.height>B)&&(K=B/Math.max(de.width,de.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor(K*de.width),Re=Math.floor(K*de.height);u===void 0&&(u=m(Q,Re));let Se=_?m(Q,Re):u;return Se.width=Q,Se.height=Re,Se.getContext("2d").drawImage(A,0,0,Q,Re),$e("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Q+"x"+Re+")."),Se}else return"data"in A&&$e("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,_,B,K,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=_;if(_===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let Re=de?to:ht.getTransfer(K);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=Re===bt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(A,_){let B;return A?_===null||_===$n||_===As?B=i.DEPTH24_STENCIL8:_===Kn?B=i.DEPTH32F_STENCIL8:_===Ts&&(B=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$n||_===As?B=i.DEPTH_COMPONENT24:_===Kn?B=i.DEPTH_COMPONENT32F:_===Ts&&(B=i.DEPTH_COMPONENT16),B}function C(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){let _=A.target;_.removeEventListener("dispose",E),b(_),_.isVideoTexture&&d.delete(_)}function T(A){let _=A.target;_.removeEventListener("dispose",T),N(_)}function b(A){let _=n.get(A);if(_.__webglInit===void 0)return;let B=A.source,K=h.get(B);if(K){let de=K[_.__cacheKey];de.usedTimes--,de.usedTimes===0&&y(A),Object.keys(K).length===0&&h.delete(B)}n.remove(A)}function y(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let B=A.source,K=h.get(B);delete K[_.__cacheKey],o.memory.textures--}function N(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let de=0;de<_.__webglFramebuffer[K].length;de++)i.deleteFramebuffer(_.__webglFramebuffer[K][de]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=A.textures;for(let K=0,de=B.length;K<de;K++){let Q=n.get(B[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(A)}let P=0;function L(){P=0}function F(){let A=P;return A>=r.maxTextures&&$e("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function k(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function O(A,_){let B=n.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let K=A.image;if(K===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function z(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function R(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function q(A,_){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){oe(B,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let Y={[Va]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},ae={[Kt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[Do]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[ir]:i.LINEAR_MIPMAP_LINEAR},me={[Bu]:i.NEVER,[Wu]:i.ALWAYS,[ku]:i.LESS,[sc]:i.LEQUAL,[Vu]:i.EQUAL,[oc]:i.GEQUAL,[Hu]:i.GREATER,[Gu]:i.NOTEQUAL};function ue(A,_){if(_.type===Kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===yl||_.magFilter===Do||_.magFilter===ir||_.minFilter===sn||_.minFilter===yl||_.minFilter===Do||_.minFilter===ir)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Do&&_.minFilter!==ir||_.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));let K=_.source,de=h.get(K);de===void 0&&(de={},h.set(K,de));let Q=k(_);if(Q!==A.__cacheKey){de[Q]===void 0&&(de[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),de[Q].usedTimes++;let Re=de[A.__cacheKey];Re!==void 0&&(de[A.__cacheKey].usedTimes--,Re.usedTimes===0&&y(_)),A.__cacheKey=Q,A.__webglTexture=de[Q].texture}return B}function le(A,_,B){return Math.floor(Math.floor(A/B)/_)}function se(A,_,B,K){let Q=A.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,K,_.data);else{Q.sort((j,ie)=>j.start-ie.start);let Re=0;for(let j=1;j<Q.length;j++){let ie=Q[Re],we=Q[j],xe=ie.start+ie.count,ve=le(we.start,_.width,4),Ne=le(ie.start,_.width,4);we.start<=xe+1&&ve===Ne&&le(we.start+we.count-1,_.width,4)===ve?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++Re,Q[Re]=we)}Q.length=Re+1;let Se=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let j=0,ie=Q.length;j<ie;j++){let we=Q[j],xe=Math.floor(we.start/4),ve=Math.ceil(we.count/4),Ne=xe%_.width,U=Math.floor(xe/_.width),G=ve,X=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ne,U,G,X,B,K,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function V(A,_,B){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);let de=te(A,_),Q=_.source;t.bindTexture(K,A.__webglTexture,i.TEXTURE0+B);let Re=n.get(Q);if(Q.version!==Re.__version||de===!0){t.activeTexture(i.TEXTURE0+B);let Se=ht.getPrimaries(ht.workingColorSpace),Oe=_.colorSpace===Di?null:ht.getPrimaries(_.colorSpace),Ye=_.colorSpace===Di||Se===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let j=x(_.image,!1,r.maxTextureSize);j=Fe(_,j);let ie=s.convert(_.format,_.colorSpace),we=s.convert(_.type),xe=M(_.internalFormat,ie,we,_.colorSpace,_.isVideoTexture);ue(K,_);let ve,Ne=_.mipmaps,U=_.isVideoTexture!==!0,G=Re.__version===void 0||de===!0,X=Q.dataReady,he=C(_,j);if(_.isDepthTexture)xe=v(_.format===rr,_.type),G&&(U?t.texStorage2D(i.TEXTURE_2D,1,xe,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,ie,we,null));else if(_.isDataTexture)if(Ne.length>0){U&&G&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ne[0].width,Ne[0].height);for(let Z=0,W=Ne.length;Z<W;Z++)ve=Ne[Z],U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,we,ve.data):t.texImage2D(i.TEXTURE_2D,Z,xe,ve.width,ve.height,0,ie,we,ve.data);_.generateMipmaps=!1}else U?(G&&t.texStorage2D(i.TEXTURE_2D,he,xe,j.width,j.height),X&&se(_,j,ie,we)):t.texImage2D(i.TEXTURE_2D,0,xe,j.width,j.height,0,ie,we,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Ne[0].width,Ne[0].height,j.depth);for(let Z=0,W=Ne.length;Z<W;Z++)if(ve=Ne[Z],_.format!==Bn)if(ie!==null)if(U){if(X)if(_.layerUpdates.size>0){let be=Hd(ve.width,ve.height,_.format,_.type);for(let Ee of _.layerUpdates){let Be=ve.data.subarray(Ee*be/ve.data.BYTES_PER_ELEMENT,(Ee+1)*be/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ee,ve.width,ve.height,1,ie,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,j.depth,ie,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,xe,ve.width,ve.height,j.depth,0,ve.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,j.depth,ie,we,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,xe,ve.width,ve.height,j.depth,0,ie,we,ve.data)}else{U&&G&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ne[0].width,Ne[0].height);for(let Z=0,W=Ne.length;Z<W;Z++)ve=Ne[Z],_.format!==Bn?ie!==null?U?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,xe,ve.width,ve.height,0,ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,we,ve.data):t.texImage2D(i.TEXTURE_2D,Z,xe,ve.width,ve.height,0,ie,we,ve.data)}else if(_.isDataArrayTexture)if(U){if(G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,j.width,j.height,j.depth),X)if(_.layerUpdates.size>0){let Z=Hd(j.width,j.height,_.format,_.type);for(let W of _.layerUpdates){let be=j.data.subarray(W*Z/j.data.BYTES_PER_ELEMENT,(W+1)*Z/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,j.width,j.height,1,ie,we,be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ie,we,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,j.width,j.height,j.depth,0,ie,we,j.data);else if(_.isData3DTexture)U?(G&&t.texStorage3D(i.TEXTURE_3D,he,xe,j.width,j.height,j.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ie,we,j.data)):t.texImage3D(i.TEXTURE_3D,0,xe,j.width,j.height,j.depth,0,ie,we,j.data);else if(_.isFramebufferTexture){if(G)if(U)t.texStorage2D(i.TEXTURE_2D,he,xe,j.width,j.height);else{let Z=j.width,W=j.height;for(let be=0;be<he;be++)t.texImage2D(i.TEXTURE_2D,be,xe,Z,W,0,ie,we,null),Z>>=1,W>>=1}}else if(Ne.length>0){if(U&&G){let Z=ye(Ne[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,Z.width,Z.height)}for(let Z=0,W=Ne.length;Z<W;Z++)ve=Ne[Z],U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ie,we,ve):t.texImage2D(i.TEXTURE_2D,Z,xe,ie,we,ve);_.generateMipmaps=!1}else if(U){if(G){let Z=ye(j);t.texStorage2D(i.TEXTURE_2D,he,xe,Z.width,Z.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,we,j)}else t.texImage2D(i.TEXTURE_2D,0,xe,ie,we,j);g(_)&&f(K),Re.__version=Q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function oe(A,_,B){if(_.image.length!==6)return;let K=te(A,_),de=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let Q=n.get(de);if(de.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let Re=ht.getPrimaries(ht.workingColorSpace),Se=_.colorSpace===Di?null:ht.getPrimaries(_.colorSpace),Oe=_.colorSpace===Di||Re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let Ye=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let W=0;W<6;W++)!Ye&&!j?ie[W]=x(_.image[W],!0,r.maxCubemapSize):ie[W]=j?_.image[W].image:_.image[W],ie[W]=Fe(_,ie[W]);let we=ie[0],xe=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Ne=M(_.internalFormat,xe,ve,_.colorSpace),U=_.isVideoTexture!==!0,G=Q.__version===void 0||K===!0,X=de.dataReady,he=C(_,we);ue(i.TEXTURE_CUBE_MAP,_);let Z;if(Ye){U&&G&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,we.width,we.height);for(let W=0;W<6;W++){Z=ie[W].mipmaps;for(let be=0;be<Z.length;be++){let Ee=Z[be];_.format!==Bn?xe!==null?U?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be,Ne,Ee.width,Ee.height,0,Ee.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be,0,0,Ee.width,Ee.height,xe,ve,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be,Ne,Ee.width,Ee.height,0,xe,ve,Ee.data)}}}else{if(Z=_.mipmaps,U&&G){Z.length>0&&he++;let W=ye(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ne,W.width,W.height)}for(let W=0;W<6;W++)if(j){U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ie[W].width,ie[W].height,xe,ve,ie[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,ie[W].width,ie[W].height,0,xe,ve,ie[W].data);for(let be=0;be<Z.length;be++){let Be=Z[be].image[W].image;U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be+1,0,0,Be.width,Be.height,xe,ve,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be+1,Ne,Be.width,Be.height,0,xe,ve,Be.data)}}else{U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,xe,ve,ie[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ne,xe,ve,ie[W]);for(let be=0;be<Z.length;be++){let Ee=Z[be];U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be+1,0,0,xe,ve,Ee.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,be+1,Ne,xe,ve,Ee.image[W])}}}g(_)&&f(i.TEXTURE_CUBE_MAP),Q.__version=de.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ne(A,_,B,K,de,Q){let Re=s.convert(B.format,B.colorSpace),Se=s.convert(B.type),Oe=M(B.internalFormat,Re,Se,B.colorSpace),Ye=n.get(_),j=n.get(B);if(j.__renderTarget=_,!Ye.__hasExternalTextures){let ie=Math.max(1,_.width>>Q),we=Math.max(1,_.height>>Q);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,Q,Oe,ie,we,_.depth,0,Re,Se,null):t.texImage2D(de,Q,Oe,ie,we,0,Re,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,de,j.__webglTexture,0,I(_)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,de,j.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(A,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let K=_.depthTexture,de=K&&K.isDepthTexture?K.type:null,Q=v(_.stencilBuffer,de),Re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Q,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,A)}else{let K=_.textures;for(let de=0;de<K.length;de++){let Q=K[de],Re=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),Oe=M(Q.internalFormat,Re,Se,Q.colorSpace);We(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Oe,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Oe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(A,_,B){let K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let de=n.get(_.depthTexture);if(de.__renderTarget=_,(!de.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(de.__webglInit===void 0&&(de.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),de.__webglTexture===void 0){de.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_.depthTexture);let Ye=s.convert(_.depthTexture.format),j=s.convert(_.depthTexture.type),ie;_.depthTexture.format===ui?ie=i.DEPTH_COMPONENT24:_.depthTexture.format===rr&&(ie=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ie,_.width,_.height,0,Ye,j,null)}}else O(_.depthTexture,0);let Q=de.__webglTexture,Re=I(_),Se=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Oe=_.depthTexture.format===rr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ui)We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,Se,Q,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,Se,Q,0);else if(_.depthTexture.format===rr)We(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Oe,Se,Q,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,Oe,Se,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(A){let _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let de=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",de)};K.addEventListener("dispose",de),_.__depthDisposeCallback=de}_.__boundDepthTexture=K}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)Te(_.__webglFramebuffer[K],A,K);else{let K=A.texture.mipmaps;K&&K.length>0?Te(_.__webglFramebuffer[0],A,0):Te(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),fe(_.__webglDepthbuffer[K],A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,Q)}}else{let K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),fe(_.__webglDepthbuffer,A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,_,B){let K=n.get(A);_!==void 0&&ne(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pe(A)}function Ge(A){let _=A.texture,B=n.get(A),K=n.get(_);A.addEventListener("dispose",T);let de=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Re=de.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Se]=[];for(let Oe=0;Oe<_.mipmaps.length;Oe++)B.__webglFramebuffer[Se][Oe]=i.createFramebuffer()}else B.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Se=0;Se<_.mipmaps.length;Se++)B.__webglFramebuffer[Se]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Re)for(let Se=0,Oe=de.length;Se<Oe;Se++){let Ye=n.get(de[Se]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&We(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){let Oe=de[Se];B.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);let Ye=s.convert(Oe.format,Oe.colorSpace),j=s.convert(Oe.type),ie=M(Oe.internalFormat,Ye,j,Oe.colorSpace,A.isXRRenderTarget===!0),we=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ue(i.TEXTURE_CUBE_MAP,_);for(let Se=0;Se<6;Se++)if(_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)ne(B.__webglFramebuffer[Se][Oe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe);else ne(B.__webglFramebuffer[Se],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let Se=0,Oe=de.length;Se<Oe;Se++){let Ye=de[Se],j=n.get(Ye),ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,j.__webglTexture),ue(ie,Ye),ne(B.__webglFramebuffer,A,Ye,i.COLOR_ATTACHMENT0+Se,ie,0),g(Ye)&&f(ie)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,K.__webglTexture),ue(Se,_),_.mipmaps&&_.mipmaps.length>0)for(let Oe=0;Oe<_.mipmaps.length;Oe++)ne(B.__webglFramebuffer[Oe],A,_,i.COLOR_ATTACHMENT0,Se,Oe);else ne(B.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Se,0);g(_)&&f(Se),t.unbindTexture()}A.depthBuffer&&Pe(A)}function ce(A){let _=A.textures;for(let B=0,K=_.length;B<K;B++){let de=_[B];if(g(de)){let Q=S(A),Re=n.get(de).__webglTexture;t.bindTexture(Q,Re),f(Q),t.unbindTexture()}}}let ge=[],re=[];function Me(A){if(A.samples>0){if(We(A)===!1){let _=A.textures,B=A.width,K=A.height,de=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(A),Se=_.length>1;if(Se)for(let Ye=0;Ye<_.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Oe=A.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ye=0;Ye<_.length;Ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ye]);let j=n.get(_[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,de,i.NEAREST),l===!0&&(ge.length=0,re.length=0,ge.push(i.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ge.push(Q),re.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ye=0;Ye<_.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ye]);let j=n.get(_[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function We(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ae(A){let _=o.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function Fe(A,_){let B=A.colorSpace,K=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Sr&&B!==Di&&(ht.getTransfer(B)===bt?(K!==Bn||de!==yn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",B)),_}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=q,this.rebindTextures=He,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y_(i,e){function t(n,r=Di){let s,o=ht.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Id)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rd)return i.BYTE;if(n===Cd)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Dd)return i.ALPHA;if(n===Ld)return i.RGB;if(n===Bn)return i.RGBA;if(n===ui)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===Nd)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===Ur)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===Lo||n===No||n===Uo||n===Fo)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Fl||n===zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Il||n===Dl)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return s.COMPRESSED_R11_EAC;if(n===Ul)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Fl)return s.COMPRESSED_RG11_EAC;if(n===zl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Bl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===jl||n===Yl||n===Zl||n===Jl||n===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ol)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Ql||n===ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kl)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===nc||n===ic||n===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new uo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends fi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new nh,f={},S=t.getContextAttributes(),M=null,v=null,C=[],E=[],T=new pe,b=null,y=new hn;y.viewport=new Dt;let N=new hn;N.viewport=new Dt;let P=[y,N],L=new bl,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let oe=C[V];return oe===void 0&&(oe=new gs,C[V]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(V){let oe=C[V];return oe===void 0&&(oe=new gs,C[V]=oe),oe.getGripSpace()},this.getHand=function(V){let oe=C[V];return oe===void 0&&(oe=new gs,C[V]=oe),oe.getHandSpace()};function O(V){let oe=E.indexOf(V.inputSource);if(oe===-1)return;let ne=C[oe];ne!==void 0&&(ne.update(V.inputSource,V.frame,c||o),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",R);for(let V=0;V<C.length;V++){let oe=E[V];oe!==null&&(E[V]=null,C[V].disconnect(oe))}F=null,k=null,g.reset();for(let V in f)delete f[V];e.setRenderTarget(M),p=null,h=null,u=null,r=null,v=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",R),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,fe=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?rr:ui,fe=S.stencil?As:$n);let Pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Tn(h.textureWidth,h.textureHeight,{format:Bn,type:yn,depthTexture:new Zi(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Tn(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function R(V){for(let oe=0;oe<V.removed.length;oe++){let ne=V.removed[oe],fe=E.indexOf(ne);fe>=0&&(E[fe]=null,C[fe].disconnect(ne))}for(let oe=0;oe<V.added.length;oe++){let ne=V.added[oe],fe=E.indexOf(ne);if(fe===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=E.length){E.push(ne),fe=Pe;break}else if(E[Pe]===null){E[Pe]=ne,fe=Pe;break}if(fe===-1)break}let Te=C[fe];Te&&Te.connect(ne)}}let q=new D,Y=new D;function ae(V,oe,ne){q.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);let fe=q.distanceTo(Y),Te=oe.projectionMatrix.elements,Pe=ne.projectionMatrix.elements,He=Te[14]/(Te[10]-1),Ge=Te[14]/(Te[10]+1),ce=(Te[9]+1)/Te[5],ge=(Te[9]-1)/Te[5],re=(Te[8]-1)/Te[0],Me=(Pe[8]+1)/Pe[0],I=He*re,We=He*Me,Ae=fe/(-re+Me),Fe=Ae*-re;if(oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(Ae),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Te[10]===-1)V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ye=He+Ae,A=Ge+Ae,_=I-Fe,B=We+(fe-Fe),K=ce*Ge/A*ye,de=ge*Ge/A*ye;V.projectionMatrix.makePerspective(_,B,K,de,ye,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function me(V,oe){oe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(oe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let oe=V.near,ne=V.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),L.near=N.near=y.near=oe,L.far=N.far=y.far=ne,(F!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,k=L.far),L.layers.mask=V.layers.mask|6,y.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;let fe=V.parent,Te=L.cameras;me(L,fe);for(let Pe=0;Pe<Te.length;Pe++)me(Te[Pe],fe);Te.length===2?ae(L,y,N):L.projectionMatrix.copy(y.projectionMatrix),ue(V,L,fe)};function ue(V,oe,ne){ne===null?V.matrix.copy(oe.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(oe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=fs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(V){return f[V]};let te=null;function le(V,oe){if(d=oe.getViewerPose(c||o),m=oe,d!==null){let ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;ne.length!==L.cameras.length&&(L.cameras.length=0,fe=!0);for(let Ge=0;Ge<ne.length;Ge++){let ce=ne[Ge],ge=null;if(p!==null)ge=p.getViewport(ce);else{let Me=u.getViewSubImage(h,ce);ge=Me.viewport,Ge===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let re=P[Ge];re===void 0&&(re=new hn,re.layers.enable(Ge),re.viewport=new Dt,P[Ge]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ge.x,ge.y,ge.width,ge.height),Ge===0&&(L.matrix.copy(re.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),fe===!0&&L.cameras.push(re)}let Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ge=u.getDepthInformation(ne[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<ne.length;Ge++){let ce=ne[Ge].camera;if(ce){let ge=f[ce];ge||(ge=new uo,f[ce]=ge);let re=u.getCameraImage(ce);ge.sourceTexture=re}}}}for(let ne=0;ne<C.length;ne++){let fe=E[ne],Te=C[ne];fe!==null&&Te!==void 0&&Te.update(fe,oe,c||o)}te&&te(V,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}let se=new Tf;se.setAnimationLoop(le),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}},Or=new Zn,S_=new ot;function w_(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Bd(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,S,M,v){f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),u(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),x(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,S,M):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===gn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===gn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let S=e.get(f),M=S.envMap,v=S.envMapRotation;M&&(g.envMap.value=M,Or.copy(v),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),g.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(Or)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,S,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*S,g.scale.value=M*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function u(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,S){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){let S=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function E_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=r[S.id];v===void 0&&(m(S),v=d(S),r[S.id]=v,S.addEventListener("dispose",g));let C=M.program;n.updateUBOMapping(S,C);let E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function d(S){let M=u();S.__bindingPointIndex=M;let v=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,N=b.length;y<N;y++){let P=b[y];if(p(P,E,y,C)===!0){let L=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],k=0;for(let O=0;O<F.length;O++){let z=F[O],R=x(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+k,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,v,C){let E=S.value,T=M+"_"+v;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let b=C[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function m(S){let M=S.uniforms,v=0,C=16;for(let T=0,b=M.length;T<b;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,P=y.length;N<P;N++){let L=y[N],F=Array.isArray(L.value)?L.value:[L.value];for(let k=0,O=F.length;k<O;k++){let z=F[k],R=x(z),q=v%C,Y=q%R.boundary,ae=q+Y;v+=Y,ae!==0&&C-ae<R.storage&&(v+=C-ae),L.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=R.storage}}}let E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){let M=S.target;M.removeEventListener("dispose",g);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var T_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function A_(){return _i===null&&(_i=new Ya(T_,16,16,Ur,bi),_i.name="DFG_LUT",_i.minFilter=sn,_i.magFilter=sn,_i.wrapS=di,_i.wrapT=di,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var hc=class{constructor(e={}){let{canvas:t=Xu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=p,g=new Set([Tl,El,wl]),f=new Set([yn,$n,Ts,As,Ml,Sl]),S=new Uint32Array(4),M=new Int32Array(4),v=null,C=null,E=[],T=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,N=!1;this._outputColorSpace=Vt;let P=0,L=0,F=null,k=-1,O=null,z=new Dt,R=new Dt,q=null,Y=new at(0),ae=0,me=t.width,ue=t.height,te=1,le=null,se=null,V=new Dt(0,0,me,ue),oe=new Dt(0,0,me,ue),ne=!1,fe=new _s,Te=!1,Pe=!1,He=new ot,Ge=new D,ce=new Dt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Me(){return F===null?te:1}let I=n;function We(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Be,!1),I===null){let H="webgl2";if(I=We(H,w),I===null)throw We(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let Ae,Fe,ye,A,_,B,K,de,Q,Re,Se,Oe,Ye,j,ie,we,xe,ve,Ne,U,G,X,he;function Z(){Ae=new U1(I),Ae.init(),G=new y_(I,Ae),Fe=new A1(I,Ae,e,G),ye=new __(I,Ae),Fe.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),A=new O1(I),_=new r_,B=new x_(I,Ae,ye,_,Fe,G,A),K=new N1(y),de=new G0(I),X=new E1(I,de),Q=new F1(I,de,A,X),Re=new k1(I,Q,de,X,A),ve=new B1(I,Fe,B),ie=new R1(_),Se=new i_(y,K,Ae,Fe,X,ie),Oe=new w_(y,_),Ye=new o_,j=new u_(Ae),xe=new w1(y,K,ye,Re,m,l),we=new b_(y,Re,Fe),he=new E_(I,A,Fe,ye),Ne=new T1(I,Ae,A),U=new z1(I,Ae,A),A.programs=Se.programs,y.capabilities=Fe,y.extensions=Ae,y.properties=_,y.renderLists=Ye,y.shadowMap=we,y.state=ye,y.info=A}Z(),x!==yn&&(b=new H1(x,t.width,t.height,r,s));let W=new ih(y,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(me,ue,!1))},this.getSize=function(w){return w.set(me,ue)},this.setSize=function(w,H,ee=!0){if(W.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,ue=H,t.width=Math.floor(w*te),t.height=Math.floor(H*te),ee===!0&&(t.style.width=w+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(me*te,ue*te).floor()},this.setDrawingBufferSize=function(w,H,ee){me=w,ue=H,te=ee,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(x===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,H,ee,$){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,H,ee,$),ye.viewport(z.copy(V).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,H,ee,$){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,H,ee,$),ye.scissor(R.copy(oe).multiplyScalar(te).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){ye.setScissorTest(ne=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ee=!0){let $=0;if(w){let J=!1;if(F!==null){let De=F.texture.format;J=g.has(De)}if(J){let De=F.texture.type,Ue=f.has(De),Le=xe.getClearColor(),Ve=xe.getClearAlpha(),je=Le.r,Qe=Le.g,st=Le.b;Ue?(S[0]=je,S[1]=Qe,S[2]=st,S[3]=Ve,I.clearBufferuiv(I.COLOR,0,S)):(M[0]=je,M[1]=Qe,M[2]=st,M[3]=Ve,I.clearBufferiv(I.COLOR,0,M))}else $|=I.COLOR_BUFFER_BIT}H&&($|=I.DEPTH_BUFFER_BIT),ee&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),xe.dispose(),Ye.dispose(),j.dispose(),_.dispose(),K.dispose(),Re.dispose(),X.dispose(),he.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",ur),W.removeEventListener("sessionend",Vs),fr.stop()};function be(w){w.preventDefault(),io("WebGLRenderer: Context Lost."),N=!0}function Ee(){io("WebGLRenderer: Context Restored."),N=!1;let w=A.autoReset,H=we.enabled,ee=we.autoUpdate,$=we.needsUpdate,J=we.type;Z(),A.autoReset=w,we.enabled=H,we.autoUpdate=ee,we.needsUpdate=$,we.type=J}function Be(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){let H=w.target;H.removeEventListener("dispose",Xe),Pt(H)}function Pt(w){Bt(w),_.remove(w)}function Bt(w){let H=_.get(w).programs;H!==void 0&&(H.forEach(function(ee){Se.releaseProgram(ee)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ee,$,J,De){H===null&&(H=ge);let Ue=J.isMesh&&J.matrixWorld.determinant()<0,Le=up(w,H,ee,$,J);ye.setMaterial($,Ue);let Ve=ee.index,je=1;if($.wireframe===!0){if(Ve=Q.getWireframeAttribute(ee),Ve===void 0)return;je=2}let Qe=ee.drawRange,st=ee.attributes.position,Ze=Qe.start*je,Mt=(Qe.start+Qe.count)*je;De!==null&&(Ze=Math.max(Ze,De.start*je),Mt=Math.min(Mt,(De.start+De.count)*je)),Ve!==null?(Ze=Math.max(Ze,0),Mt=Math.min(Mt,Ve.count)):st!=null&&(Ze=Math.max(Ze,0),Mt=Math.min(Mt,st.count));let zt=Mt-Ze;if(zt<0||zt===1/0)return;X.setup(J,$,Le,ee,Ve);let Ut,St=Ne;if(Ve!==null&&(Ut=de.get(Ve),St=U,St.setIndex(Ut)),J.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*Me()),St.setMode(I.LINES)):St.setMode(I.TRIANGLES);else if(J.isLine){let ln=$.linewidth;ln===void 0&&(ln=1),ye.setLineWidth(ln*Me()),J.isLineSegments?St.setMode(I.LINES):J.isLineLoop?St.setMode(I.LINE_LOOP):St.setMode(I.LINE_STRIP)}else J.isPoints?St.setMode(I.POINTS):J.isSprite&&St.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))St.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ln=J._multiDrawStarts,qe=J._multiDrawCounts,Sn=J._multiDrawCount,pt=Ve?de.get(Ve).bytesPerElement:1,Gn=_.get($).currentProgram.getUniforms();for(let ai=0;ai<Sn;ai++)Gn.setValue(I,"_gl_DrawID",ai),St.render(ln[ai]/pt,qe[ai])}else if(J.isInstancedMesh)St.renderInstances(Ze,zt,J.count);else if(ee.isInstancedBufferGeometry){let ln=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,qe=Math.min(ee.instanceCount,ln);St.renderInstances(Ze,zt,qe)}else St.render(Ze,zt)};function oi(w,H,ee){w.transparent===!0&&w.side===Lt&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Ko(w,H,ee),w.side=Pi,w.needsUpdate=!0,Ko(w,H,ee),w.side=Lt):Ko(w,H,ee)}this.compile=function(w,H,ee=null){ee===null&&(ee=w),C=j.get(ee),C.init(H),T.push(C),ee.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),w!==ee&&w.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights();let $=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let De=J.material;if(De)if(Array.isArray(De))for(let Ue=0;Ue<De.length;Ue++){let Le=De[Ue];oi(Le,ee,J),$.add(Le)}else oi(De,ee,J),$.add(De)}),C=T.pop(),$},this.compileAsync=function(w,H,ee=null){let $=this.compile(w,H,ee);return new Promise(J=>{function De(){if($.forEach(function(Ue){_.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){J(w);return}setTimeout(De,10)}Ae.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let hr=null;function Jo(w){hr&&hr(w)}function ur(){fr.stop()}function Vs(){fr.start()}let fr=new Tf;fr.setAnimationLoop(Jo),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(w){hr=w,W.setAnimationLoop(w),w===null?fr.stop():fr.start()},W.addEventListener("sessionstart",ur),W.addEventListener("sessionend",Vs),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;let ee=W.enabled===!0&&W.isPresenting===!0,$=b!==null&&(F===null||ee)&&b.begin(y,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(H),H=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,F),C=j.get(w,T.length),C.init(H),T.push(C),He.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),fe.setFromProjectionMatrix(He,Yn,H.reversedDepth),Pe=this.localClippingEnabled,Te=ie.init(this.clippingPlanes,Pe),v=Ye.get(w,E.length),v.init(),E.push(v),W.enabled===!0&&W.isPresenting===!0){let Ue=y.xr.getDepthSensingMesh();Ue!==null&&Rc(Ue,H,-1/0,y.sortObjects)}Rc(w,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(le,se),re=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,re&&xe.addToRenderList(v,w),this.info.render.frame++,Te===!0&&ie.beginShadows();let J=C.state.shadowsArray;if(we.render(J,w,H),Te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&b.hasRenderPass())===!1){let Ue=v.opaque,Le=v.transmissive;if(C.setupLights(),H.isArrayCamera){let Ve=H.cameras;if(Le.length>0)for(let je=0,Qe=Ve.length;je<Qe;je++){let st=Ve[je];Ch(Ue,Le,w,st)}re&&xe.render(w);for(let je=0,Qe=Ve.length;je<Qe;je++){let st=Ve[je];Rh(v,w,st,st.viewport)}}else Le.length>0&&Ch(Ue,Le,w,H),re&&xe.render(w),Rh(v,w,H)}F!==null&&L===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),$&&b.end(y),w.isScene===!0&&w.onAfterRender(y,w,H),X.resetDefaultState(),k=-1,O=null,T.pop(),T.length>0?(C=T[T.length-1],Te===!0&&ie.setGlobalState(y.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Rc(w,H,ee,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){$&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(He);let Ue=Re.update(w),Le=w.material;Le.visible&&v.push(w,Ue,Le,ee,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let Ue=Re.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ce.copy(Ue.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(He)),Array.isArray(Le)){let Ve=Ue.groups;for(let je=0,Qe=Ve.length;je<Qe;je++){let st=Ve[je],Ze=Le[st.materialIndex];Ze&&Ze.visible&&v.push(w,Ue,Ze,ee,ce.z,st)}}else Le.visible&&v.push(w,Ue,Le,ee,ce.z,null)}}let De=w.children;for(let Ue=0,Le=De.length;Ue<Le;Ue++)Rc(De[Ue],H,ee,$)}function Rh(w,H,ee,$){let{opaque:J,transmissive:De,transparent:Ue}=w;C.setupLightsView(ee),Te===!0&&ie.setGlobalState(y.clippingPlanes,ee),$&&ye.viewport(z.copy($)),J.length>0&&$o(J,H,ee),De.length>0&&$o(De,H,ee),Ue.length>0&&$o(Ue,H,ee),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ch(w,H,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Ze=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new Tn(1,1,{generateMipmaps:!0,type:Ze?bi:yn,minFilter:ir,samples:Math.max(4,Fe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let De=C.state.transmissionRenderTarget[$.id],Ue=$.viewport||z;De.setSize(Ue.z*y.transmissionResolutionScale,Ue.w*y.transmissionResolutionScale);let Le=y.getRenderTarget(),Ve=y.getActiveCubeFace(),je=y.getActiveMipmapLevel();y.setRenderTarget(De),y.getClearColor(Y),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),re&&xe.render(ee);let Qe=y.toneMapping;y.toneMapping=Jn;let st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),Te===!0&&ie.setGlobalState(y.clippingPlanes,$),$o(w,ee,$),B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Mt=0,zt=H.length;Mt<zt;Mt++){let Ut=H[Mt],{object:St,geometry:ln,material:qe,group:Sn}=Ut;if(qe.side===Lt&&St.layers.test($.layers)){let pt=qe.side;qe.side=gn,qe.needsUpdate=!0,Ph(St,ee,$,ln,qe,Sn),qe.side=pt,qe.needsUpdate=!0,Ze=!0}}Ze===!0&&(B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De))}y.setRenderTarget(Le,Ve,je),y.setClearColor(Y,ae),st!==void 0&&($.viewport=st),y.toneMapping=Qe}function $o(w,H,ee){let $=H.isScene===!0?H.overrideMaterial:null;for(let J=0,De=w.length;J<De;J++){let Ue=w[J],{object:Le,geometry:Ve,group:je}=Ue,Qe=Ue.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),Le.layers.test(ee.layers)&&Ph(Le,H,ee,Ve,Qe,je)}}function Ph(w,H,ee,$,J,De){w.onBeforeRender(y,H,ee,$,J,De),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(y,H,ee,$,w,De),J.transparent===!0&&J.side===Lt&&J.forceSinglePass===!1?(J.side=gn,J.needsUpdate=!0,y.renderBufferDirect(ee,H,$,J,w,De),J.side=Pi,J.needsUpdate=!0,y.renderBufferDirect(ee,H,$,J,w,De),J.side=Lt):y.renderBufferDirect(ee,H,$,J,w,De),w.onAfterRender(y,H,ee,$,J,De)}function Ko(w,H,ee){H.isScene!==!0&&(H=ge);let $=_.get(w),J=C.state.lights,De=C.state.shadowsArray,Ue=J.state.version,Le=Se.getParameters(w,J.state,De,H,ee),Ve=Se.getProgramCacheKey(Le),je=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=K.get(w.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,je===void 0&&(w.addEventListener("dispose",Xe),je=new Map,$.programs=je);let st=je.get(Ve);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===Ue)return Dh(w,Le),st}else Le.uniforms=Se.getUniforms(w),w.onBeforeCompile(Le,y),st=Se.acquireProgram(Le,Ve),je.set(Ve,st),$.uniforms=Le.uniforms;let Ze=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=ie.uniform),Dh(w,Le),$.needsLights=pp(w),$.lightsStateVersion=Ue,$.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=st,$.uniformsList=null,st}function Ih(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Cs.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Dh(w,H){let ee=_.get(w);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function up(w,H,ee,$,J){H.isScene!==!0&&(H=ge),B.resetTextureUnits();let De=H.fog,Ue=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Le=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Sr,Ve=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,je=K.get($.envMap||Ue,Ve),Qe=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!ee.morphAttributes.position,Mt=!!ee.morphAttributes.normal,zt=!!ee.morphAttributes.color,Ut=Jn;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let St=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ln=St!==void 0?St.length:0,qe=_.get($),Sn=C.state.lights;if(Te===!0&&(Pe===!0||w!==O)){let Jt=w===O&&$.id===k;ie.setState($,w,Jt)}let pt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Sn.state.version||qe.outputColorSpace!==Le||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==je||$.fog===!0&&qe.fog!==De||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ie.numPlanes||qe.numIntersection!==ie.numIntersection)||qe.vertexAlphas!==Qe||qe.vertexTangents!==st||qe.morphTargets!==Ze||qe.morphNormals!==Mt||qe.morphColors!==zt||qe.toneMapping!==Ut||qe.morphTargetsCount!==ln)&&(pt=!0):(pt=!0,qe.__version=$.version);let Gn=qe.currentProgram;pt===!0&&(Gn=Ko($,H,J));let ai=!1,pr=!1,Xr=!1,Et=Gn.getUniforms(),nn=qe.uniforms;if(ye.useProgram(Gn.program)&&(ai=!0,pr=!0,Xr=!0),$.id!==k&&(k=$.id,pr=!0),ai||O!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",w.projectionMatrix),Et.setValue(I,"viewMatrix",w.matrixWorldInverse);let Bi=Et.map.cameraPosition;Bi!==void 0&&Bi.setValue(I,Ge.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,pr=!0,Xr=!0)}if(qe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Et.setValue(I,"directionalShadowMap",Sn.state.directionalShadowMap,B),Sn.state.spotShadowMap.length>0&&Et.setValue(I,"spotShadowMap",Sn.state.spotShadowMap,B),Sn.state.pointShadowMap.length>0&&Et.setValue(I,"pointShadowMap",Sn.state.pointShadowMap,B)),J.isSkinnedMesh){Et.setOptional(I,J,"bindMatrix"),Et.setOptional(I,J,"bindMatrixInverse");let Jt=J.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Et.setValue(I,"boneTexture",Jt.boneTexture,B))}J.isBatchedMesh&&(Et.setOptional(I,J,"batchingTexture"),Et.setValue(I,"batchingTexture",J._matricesTexture,B),Et.setOptional(I,J,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",J._indirectTexture,B),Et.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",J._colorsTexture,B));let Oi=ee.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&ve.update(J,ee,Gn),(pr||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Et.setValue(I,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=A_()),pr&&(Et.setValue(I,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&fp(nn,Xr),De&&$.fog===!0&&Oe.refreshFogUniforms(nn,De),Oe.refreshMaterialUniforms(nn,$,te,ue,C.state.transmissionRenderTarget[w.id]),Cs.upload(I,Ih(qe),nn,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cs.upload(I,Ih(qe),nn,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(I,"center",J.center),Et.setValue(I,"modelViewMatrix",J.modelViewMatrix),Et.setValue(I,"normalMatrix",J.normalMatrix),Et.setValue(I,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Jt=$.uniformsGroups;for(let Bi=0,qr=Jt.length;Bi<qr;Bi++){let Lh=Jt[Bi];he.update(Lh,Gn),he.bind(Lh,Gn)}}return Gn}function fp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function pp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,H,ee){let $=_.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=H,_.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let ee=_.get(w);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0};let mp=I.createFramebuffer();this.setRenderTarget=function(w,H=0,ee=0){F=w,P=H,L=ee;let $=null,J=!1,De=!1;if(w){let Le=_.get(w);if(Le.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(I.FRAMEBUFFER,Le.__webglFramebuffer),z.copy(w.viewport),R.copy(w.scissor),q=w.scissorTest,ye.viewport(z),ye.scissor(R),ye.setScissorTest(q),k=-1;return}else if(Le.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(Le.__hasExternalTextures)B.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&_.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(De=!0);let je=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[H])?$=je[H][ee]:$=je[H],J=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?$=_.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?$=je[ee]:$=je,z.copy(w.viewport),R.copy(w.scissor),q=w.scissorTest}else z.copy(V).multiplyScalar(te).floor(),R.copy(oe).multiplyScalar(te).floor(),q=ne;if(ee!==0&&($=mp),ye.bindFramebuffer(I.FRAMEBUFFER,$)&&ye.drawBuffers(w,$),ye.viewport(z),ye.scissor(R),ye.setScissorTest(q),J){let Le=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,ee)}else if(De){let Le=H;for(let Ve=0;Ve<w.textures.length;Ve++){let je=_.get(w.textures[Ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ve,je.__webglTexture,ee,Le)}}else if(w!==null&&ee!==0){let Le=_.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,ee)}k=-1},this.readRenderTargetPixels=function(w,H,ee,$,J,De,Ue,Le=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){ye.bindFramebuffer(I.FRAMEBUFFER,Ve);try{let je=w.textures[Le],Qe=je.format,st=je.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!Fe.textureFormatReadable(Qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(st)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&ee>=0&&ee<=w.height-J&&I.readPixels(H,ee,$,J,G.convert(Qe),G.convert(st),De)}finally{let je=F!==null?_.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(w,H,ee,$,J,De,Ue,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve)if(H>=0&&H<=w.width-$&&ee>=0&&ee<=w.height-J){ye.bindFramebuffer(I.FRAMEBUFFER,Ve);let je=w.textures[Le],Qe=je.format,st=je.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!Fe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),I.readPixels(H,ee,$,J,G.convert(Qe),G.convert(st),0);let Mt=F!==null?_.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Mt);let zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ju(I,zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(Ze),I.deleteSync(zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ee=0){let $=Math.pow(2,-ee),J=Math.floor(w.image.width*$),De=Math.floor(w.image.height*$),Ue=H!==null?H.x:0,Le=H!==null?H.y:0;B.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Ue,Le,J,De),ye.unbindTexture()};let gp=I.createFramebuffer(),bp=I.createFramebuffer();this.copyTextureToTexture=function(w,H,ee=null,$=null,J=0,De=0){let Ue,Le,Ve,je,Qe,st,Ze,Mt,zt,Ut=w.isCompressedTexture?w.mipmaps[De]:w.image;if(ee!==null)Ue=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Ve=ee.isBox3?ee.max.z-ee.min.z:1,je=ee.min.x,Qe=ee.min.y,st=ee.isBox3?ee.min.z:0;else{let nn=Math.pow(2,-J);Ue=Math.floor(Ut.width*nn),Le=Math.floor(Ut.height*nn),w.isDataArrayTexture?Ve=Ut.depth:w.isData3DTexture?Ve=Math.floor(Ut.depth*nn):Ve=1,je=0,Qe=0,st=0}$!==null?(Ze=$.x,Mt=$.y,zt=$.z):(Ze=0,Mt=0,zt=0);let St=G.convert(H.format),ln=G.convert(H.type),qe;H.isData3DTexture?(B.setTexture3D(H,0),qe=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),qe=I.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);let Sn=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Gn=I.getParameter(I.UNPACK_SKIP_PIXELS),ai=I.getParameter(I.UNPACK_SKIP_ROWS),pr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,st);let Xr=w.isDataArrayTexture||w.isData3DTexture,Et=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let nn=_.get(w),Oi=_.get(H),Jt=_.get(nn.__renderTarget),Bi=_.get(Oi.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let qr=0;qr<Ve;qr++)Xr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(w).__webglTexture,J,st+qr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(H).__webglTexture,De,zt+qr)),I.blitFramebuffer(je,Qe,Ue,Le,Ze,Mt,Ue,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||_.has(w)){let nn=_.get(w),Oi=_.get(H);ye.bindFramebuffer(I.READ_FRAMEBUFFER,gp),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,bp);for(let Jt=0;Jt<Ve;Jt++)Xr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nn.__webglTexture,J,st+Jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nn.__webglTexture,J),Et?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oi.__webglTexture,De,zt+Jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oi.__webglTexture,De),J!==0?I.blitFramebuffer(je,Qe,Ue,Le,Ze,Mt,Ue,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Et?I.copyTexSubImage3D(qe,De,Ze,Mt,zt+Jt,je,Qe,Ue,Le):I.copyTexSubImage2D(qe,De,Ze,Mt,je,Qe,Ue,Le);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Et?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(qe,De,Ze,Mt,zt,Ue,Le,Ve,St,ln,Ut.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(qe,De,Ze,Mt,zt,Ue,Le,Ve,St,Ut.data):I.texSubImage3D(qe,De,Ze,Mt,zt,Ue,Le,Ve,St,ln,Ut):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,De,Ze,Mt,Ue,Le,St,ln,Ut.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,De,Ze,Mt,Ut.width,Ut.height,St,Ut.data):I.texSubImage2D(I.TEXTURE_2D,De,Ze,Mt,Ue,Le,St,ln,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,Sn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ai),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pr),De===0&&H.generateMipmaps&&I.generateMipmap(qe),ye.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){P=0,L=0,F=null,ye.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var If={type:"change"},sh={type:"start"},Lf={type:"end"},pc=new Yi,Df=new xn,R_=Math.cos(70*Qn.DEG2RAD),Zt=new D,vn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rh=1e-6,mc=class extends Ro{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Qt,this._lastTargetPosition=new D,this._quat=new Qt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ws,this._sphericalDelta=new ws,this._scale=1,this._panOffset=new D,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new D,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P_.bind(this),this._onPointerDown=C_.bind(this),this._onPointerUp=I_.bind(this),this._onContextMenu=O_.bind(this),this._onMouseWheel=N_.bind(this),this._onKeyDown=U_.bind(this),this._onTouchStart=F_.bind(this),this._onTouchMove=z_.bind(this),this._onMouseDown=D_.bind(this),this._onMouseMove=L_.bind(this),this._interceptControlDown=B_.bind(this),this._interceptControlUp=k_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(If),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),r<-Math.PI?r+=vn:r>Math.PI&&(r-=vn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Zt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pc.origin.copy(this.object.position),pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pc.direction))<R_?this.object.lookAt(this.target):(Df.setFromNormalAndCoplanarPoint(this.object.up,this.target),pc.intersectPlane(Df,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>rh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rh||this._lastTargetPosition.distanceToSquared(this.target)>rh?(this.dispatchEvent(If),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Zt.copy(r).sub(this.target);let s=Zt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function C_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function P_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function I_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lf),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function D_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case er.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case er.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(sh)}function L_(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function N_(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lf))}function U_(i){this.enabled!==!1&&this._handleKeyDown(i)}function F_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(sh)}function z_(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function O_(i){this.enabled!==!1&&i.preventDefault()}function B_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ko(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new mt,c=0;for(let d=0;d<i.length;++d){let u=i[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,d),c+=p}}if(t){let d=0,u=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(let d in s){let u=Nf(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in o){let u=o[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){let p=[];for(let x=0;x<o[d].length;++x)p.push(o[d][x][h]);let m=Nf(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function Nf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new rn(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let u=l/t;for(let h=0,p=d.count;h<p;h++)for(let m=0;m<t;m++){let x=d.getComponent(h,m);a.setComponent(h+u,m,x)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var gc=.4166666666666667,bc=.24,Is=.018;function ei(i,e=!0){let t=i.pixels*gc,n=(i.trim==="left"?bc:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?bc:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function Uf(i){let e=i.pixels*gc;return[[-(i.extendStart||0),Is],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*gc-Is,(n+1)*gc+Is]),[e-Is,e+(i.extendEnd||0)]]}function _c(i){return Object.fromEntries(["extendStart","extendEnd","extraStartTrim","extraEndTrim"].filter(e=>i[e]).map(e=>[e,i[e]]))}var Ff=2.5/6,V_=.24,Ds=.018,oh=new Map,H_=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function ah(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let d of t)if(!Number.isInteger(d.at)||d.at<=0||d.at>=i||![0,1].includes(d.layer)||!["left","right","seam"].includes(d.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(oh.has(s))return oh.get(s).map(d=>({...d}));let o=[0,1].map(d=>new Set(t.filter(u=>u.layer===d).map(u=>u.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let d=1;d<=i;d++){let u=new Map;for(let h of a.values())for(let p of[!1,!0])for(let m of[!1,!0]){let x=[p,m];if(d<i&&p&&m&&!(o[0].has(d)&&o[1].has(d)))continue;let g=[...h.starts],f=[...h.score],S=[],M=!0;for(let E of[0,1]){let T=g[E],b=d-T,y=E^e;if(b>6||!x[E]&&(d===i||b===6||o[E].has(d))){M=!1;break}if(!x[E])continue;let N=r.left&&y===1&&T===0||t.some(R=>R.layer===E&&R.at===T&&R.side==="left"),P=r.right&&y===1&&d===i||t.some(R=>R.layer===E&&R.at===d&&R.side==="right");if(N&&P){M=!1;break}let L=N?"left":P?"right":null,F={};for(let R of t.filter(q=>q.layer===E&&q.fullEndSlot))R.side==="left"&&R.at===d&&(F.extendEnd=Ds),R.side==="left"&&R.at===T&&(F.extraStartTrim=Ds),R.side==="right"&&R.at===d&&(F.extraEndTrim=Ds),R.side==="right"&&R.at===T&&(F.extendStart=Ds);r.extraTrim&&N&&T===0&&(F.extraStartTrim=Ds),r.extraTrim&&P&&d===i&&(F.extraEndTrim=Ds);let k={pixels:b,start:T*Ff,layer:y,trim:L,...F},[O,z]=ei(k,!1);if(z-O>2.5+1e-9||z-O<=0){M=!1;break}f[0]+=+(b===1&&!!L),f[1]+=+(b===1),f[2]++,f[3]+=1/(b*Ff-(L?V_:0)),y===1&&T===0&&(f[4]+=Math.abs(b-n)),S.push(k),g[E]=d}if(!M)continue;let v=g.join(","),C=u.get(v);(!C||H_(f,C.score))&&u.set(v,{starts:g,score:f,pieces:[...h.pieces,...S]})}a=u}let l=a.get(`${i},${i}`);if(!l)throw new Error("No native staggered stock layout: "+s);let c=l.pieces.sort((d,u)=>u.layer-d.layer||d.start-u.start);return oh.set(s,c),c.map(d=>({...d}))}function xc(i,e=2){return ah(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var ft=2.5/6,Mn=.24,it=.018,ut=Mn/2,yt=1e-7,yi=new D(1,0,0),vi=new D(0,1,0),In=new D(0,0,1);function or(i={},e={},t={}){let n=i.wood||new Ct({color:"#c7a46f",side:Lt}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,l=xc;function c(g,f,S,M){let v=[];for(let C=0;C<g.length;C++){let E=g[C],T=g[(C+1)%g.length],b=M*(E[f]-S),y=M*(T[f]-S);b>=-yt&&v.push(E.clone()),b>=-yt!=y>=-yt&&v.push(E.clone().lerp(T,b/(b-y)))}return v}function d(g){let f=g.pixels*ft,S=[new pe(-(g.extendStart||0),0),new pe(f+(g.extendEnd||0),0),new pe(f+(g.extendEnd||0),ut),new pe(f-it,ut),new pe(f-it,Mn)];for(let y=g.pixels-1;y>=1;y--){let N=y*ft;S.push(new pe(N+it,Mn),new pe(N+it,ut),new pe(N-it,ut),new pe(N-it,Mn))}S.push(new pe(it,Mn),new pe(it,ut),new pe(-(g.extendStart||0),ut));let M=S,[v,C]=ei(g);if(C<=v+yt||(v>-(g.extendStart||0)+yt&&(M=c(M,"x",v,1)),C<f+(g.extendEnd||0)-yt&&(M=c(M,"x",C,-1)),M.length<3))return null;let E=new Ji(M);E.closePath();let T=new Ir(E,{depth:it,bevelEnabled:!1,curveSegments:1});T.translate(0,-ut,0);let b=T.getAttribute("uv");for(let y=0;y<b.count;y++)b.setXY(y,b.getX(y)/2.5,b.getY(y)/Mn);return T}function u(g,f,S,M=[],v=null){let[C,E]=ei(g);v&&(C=Math.max(C,v[0]-g.start),E=Math.min(E,v[1]-g.start));let T=E>C+yt?[[C,E]]:[];for(let b of M){let y=f===0?b.v0:b.u0,N=f===0?b.v1:b.u1;if(S+it<=y+yt||S>=N-yt)continue;let P=(f===0?b.u0:b.v0)-g.start,L=(f===0?b.u1:b.v1)-g.start;T=T.flatMap(([F,k])=>L<=F||P>=k?[[F,k]]:[[F,Math.min(k,P)],[Math.max(F,L),k]].filter(([O,z])=>z>O+yt))}return T.map(([b,y])=>({...g,minCut:b,limit:y}))}function h(g,f,S,M,v=[]){let C=g.pixels*ft,[E,T]=ei(g);if(T<=E+yt)return null;let b=Uf(g),y=(g.connectorCuts||[]).map(Y=>({x0:Y.end==="start"?Y.offset||0:C-(Y.offset||0)-ut,x1:Y.end==="start"?(Y.offset||0)+ut:C-(Y.offset||0),y0:Y.edge==="slotted"?ut-it:-ut,y1:Y.edge==="slotted"?ut:-ut+it})),N=[E,T];for(let Y of b)for(let ae of Y)ae>E+yt&&ae<T-yt&&N.push(ae);for(let Y of y)for(let ae of[Y.x0,Y.x1])ae>E+yt&&ae<T-yt&&N.push(ae);N.sort((Y,ae)=>Y-ae);let P=new Map,L=!1,F=Y=>`${Math.round(Y.x*1e8)},${Math.round(Y.y*1e8)},${Math.round(Y.z*1e8)}`;function k(Y,ae){let me=[],ue=[];for(let le of Y){let se=[];for(let V=0;V<le.length;V++){let oe=le[V],ne=le[(V+1)%le.length],fe=ae.c-ae.n.dot(oe.clone().add(S)),Te=ae.c-ae.n.dot(ne.clone().add(S));if(fe>=-yt?se.push(oe):L=!0,fe>=-yt!=Te>=-yt){let Pe=oe.clone().lerp(ne,fe/(fe-Te));se.push(Pe),ue.push(Pe)}}se.length>=3&&me.push(se)}let te=[...new Map(ue.map(le=>[F(le),le])).values()];if(te.length>=3){let le=te.reduce((ne,fe)=>ne.add(fe),new D).divideScalar(te.length),se=ae.n.clone().normalize(),V=(Math.abs(se.y)>.9?yi:vi).clone().cross(se).normalize(),oe=se.clone().cross(V);te.sort((ne,fe)=>Math.atan2(ne.clone().sub(le).dot(oe),ne.clone().sub(le).dot(V))-Math.atan2(fe.clone().sub(le).dot(oe),fe.clone().sub(le).dot(V))),me.push(te)}return me}function O(Y,ae,me,ue){let te=[[Y,me,0],[ae,me,0],[ae,ue,0],[Y,ue,0],[Y,me,it],[ae,me,it],[ae,ue,it],[Y,ue,it]].map(ne=>new D(...ne).applyMatrix4(f)),le=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(ne=>ne.map(fe=>te[fe]));f.determinant()<0&&le.forEach(ne=>ne.reverse());for(let ne of M)if(le=k(le,ne),!le.length)return;let se=L,V=v.length&&le.some(ne=>ne.some(fe=>!v.some(Te=>Te.every(Pe=>Pe.n.dot(fe.clone().add(S))<=Pe.c+yt)))),oe=v.length?v.flatMap(ne=>{let fe=le;for(let Te of ne)if(fe=k(fe,Te),!fe.length)break;return fe}):le;L=se||!!V;for(let ne of oe){let fe=ne.filter((Pe,He)=>He===0||Pe.distanceToSquared(ne[He-1])>1e-18);if(fe.length<3)continue;let Te=fe.map(F).sort().join("|");P.has(Te)?P.delete(Te):P.set(Te,fe)}}for(let Y=0;Y<N.length-1;Y++){let ae=N[Y],me=N[Y+1],ue=(ae+me)/2;if(me-ae<yt)continue;let te=[...new Set([-ut,0,ut,...y.flatMap(le=>[le.y0,le.y1])])].sort((le,se)=>le-se);for(let le=0;le<te.length-1;le++){let se=te[le],V=te[le+1],oe=(se+V)/2;oe>0&&b.some(([ne,fe])=>ue>ne&&ue<fe)||y.some(ne=>ue>ne.x0-yt&&ue<ne.x1+yt&&oe>ne.y0-yt&&oe<ne.y1+yt)||O(ae,me,se,V)}}let z=[],R=[];for(let Y of P.values())for(let ae=1;ae<Y.length-1;ae++){let me=Y[0],ue=Y[ae],te=Y[ae+1];if(!(ue.clone().sub(me).cross(te.clone().sub(me)).lengthSq()<1e-20))for(let le of[me,ue,te])z.push(le.x,le.y,le.z),R.push(le.dot(new D().setFromMatrixColumn(f,0))/2.5,le.dot(new D().setFromMatrixColumn(f,1))/Mn)}if(!z.length)return null;let q=new mt;return q.setAttribute("position",new ct(z,3)),q.setAttribute("uv",new ct(R,2)),q.computeVertexNormals(),q.userData.angledCut=L,q}function p(g,f,S,M,v,C,E={},T=0,b=[],y=[]){let[N,P]=ei(f,!1);if(P-N>2.5+yt)throw new Error("Combstruct stock exceeds 2500 mm");let L=JSON.stringify([g.name,E.wallId||"",E.kind||"standard",E.axis,E.index,f.layer,T,...[f.start,f.pixels,f.minCut||0,f.limit??f.pixels*ft].map(V=>Math.round(V*1e7)/1e7)]),F=t.connectors===!1||s?[]:e[L]||[];f={...f,connectorCuts:F};let k=f.layer^T,O=C.clone().addScaledVector(S,f.start).addScaledVector(v,k===0?-it:0),z=new ot().makeBasis(S,M,v),R=b.length||y.length||(f.minCut||0)>yt||f.limit!==void 0||F.length,q=R?h(f,z,O,b,y):d(f);if(!q)return null;R||q.applyMatrix4(z);let[Y,ae]=ei(f,!1),[me,ue]=ei(f),te=!!q.userData.angledCut||me>Y+yt||ue<ae-yt,le=new lt(q,f.trim||te?r:n);le.position.copy(O),le.castShadow=!0,le.receiveShadow=!0;let se={id:`board-${++a}`,mesh:le,surface:g.name,kind:E.kind||"standard",axis:E.axis,index:E.index,layer:k,stockLayer:f.layer,start:f.start,stockLength:f.pixels*ft,trim:f.trim||null,custom:te,connectorKey:L,connectorCuts:F,stock:{...f},along:S.toArray(),normal:M.toArray(),thick:v.toArray(),frameOrigin:C.toArray(),clippingPlanes:b.map(V=>({n:V.n.toArray(),c:V.c})),actualStart:f.start+me,actualEnd:f.start+ue,...E};return y.length&&(se.clippingRegions=y.map(V=>V.map(oe=>({n:oe.n.toArray(),c:oe.c})))),le.name=se.id,le.userData={...se,mesh:void 0},g.add(le),o.push(se),le}function m(g,f,S,M,v,C,E,{phaseU:T=0,phaseV:b=0,holes:y=[],keepTop:N=!1,clearances:P=[0,0],startClearances:L=[0,0],verticalPlanes:F=[],verticalModules:k=S,kind:O="standard"}={}){for(let z=0;z<2;z++){let R=z===0?f:k,q=z===0?S:f,Y=z===0?v:C,ae=z===0?C:v,me=E.clone().multiplyScalar(z===0?1:-1),ue=z===0?T:b;for(let te=1;te<q;te++)for(let le of l(R)){let se={...le};N&&z===1&&se.trim==="right"&&(se.trim=null);let V=P[z]||0;V&&Math.abs(se.start+se.pixels*ft-R*ft)<yt&&(se.limit=se.pixels*ft-(se.trim==="right"?Mn:0)-V),L[z]&&se.start===0&&(se.minCut=(se.trim==="left"?Mn:0)+L[z]);let oe=te*ft+((se.layer^ue)===0?-it:0);for(let ne of u(se,z,oe,y))p(g,ne,Y,me,ae,M.clone().addScaledVector(ae,te*ft),{kind:O,axis:z,index:te},ue,z===1?F:[])}}}return{lengthJoints:s,boards:o,segments:l,jointStock:(g,f=0,S=[],M=2,v)=>ah(g,f,s?S.map(C=>({...C,fullEndSlot:C.side!=="seam"})):S,M,v),openStock:u,addBoard:p,grid:m}}var zf={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};function Ls({pitch:i,spanHalf:e,ridgeUnderside:t,axis:n=0,clearance:r=.001}){let s=i*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.tan(s),c=e-ut-it,d=c-ut,u=c+ut,h=t+ut/o,p=c/o-Mn/4*l,m=((p-ft/2)%ft+ft)%ft-ft,x=p-ft/2,g=p+ft/2,f=(M,v)=>({n:M,c:v});function S(M){let v=new D().setComponent(n,M),C=new D(0,1,0),E=v.clone().multiplyScalar(o).addScaledVector(C,-a),T=v.clone().multiplyScalar(a).addScaledVector(C,o),b=O=>O-a*h,y=O=>O+o*h,N=f(T.clone(),y(0)),P=f(T.clone().negate(),-y(0)),L=[[N],[P,f(E.clone().negate(),-b(x+it+r)),f(E.clone(),b(g-it-r))]],F=f(T.clone(),y(-ut)),k=f(T.clone(),y(ut));return{sign:M,q:v,along:E,normal:T,origin:new D(0,h,0).addScaledVector(E,m),wall(O){return{planes:[O===1?k:F],regions:O===1?L:[],role:O===1?"long-lap":"short-bearing"}},roof(O){return O===0?[{planes:[],regions:[],role:"continuous"}]:[{planes:[f(v.clone(),d)],regions:[],role:"inner-ending"},{planes:[f(v.clone().negate(),-u)],regions:[[N],[P,f(E.clone().negate(),-b(g-it))]],role:"eave-ending"}]},slotPlanes(O,z=0){let R=O==="inner"?x:g;return[f(E.clone(),b(R+it)),f(E.clone().negate(),-b(R-it)),f(T.clone().negate(),-y(0)),f(T.clone(),y(ut+z))]}}}return{pitch:i,clearance:r,phaseOrigin:m,wallCenter:c,inner:d,outer:u,centerY:h,toothCenter:p,slotInner:x,slotOuter:g,axis:n,side:S,slabBeveled:!1}}function W_(i,e){return i.flatMap(t=>e.map((n,r)=>[...t,...e.slice(0,r),{n:n.n.clone().negate(),c:-n.c}]))}function Of(i=[],e=[]){return i.length&&e.length?i.flatMap(t=>e.map(n=>[...t,...n])):i.length?i:e}function yc({pitch:i,centerY:e,phaseOrigin:t,axis:n=0}){let r=i*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=ut*Math.max(Math.tan(r),1/Math.tan(r)),l=Math.max(0,Math.ceil((t+a+it)/ft)),c=t-l*ft,d=m=>{let x=new D().setComponent(n,m),g=new D(0,1,0);return{q:x,along:x.clone().multiplyScalar(s).addScaledVector(g,-o),normal:x.clone().multiplyScalar(o).addScaledVector(g,s)}},u=[];for(let m=1;t+m*ft-it<a;m++)u.push(t+m*ft);function h(m,x,g=0){let f=d(m),S=x-o*e;return[{n:f.along,c:S+it},{n:f.along.clone().negate(),c:-S+it},{n:f.normal.clone().negate(),c:-s*e},{n:f.normal,c:s*e+ut+g},{n:f.q.clone().negate(),c:0}]}function p(m,x){let g=x===(m===-1?0:1),S=[{n:d(-m).normal,c:s*e+(g?ut:-ut)}],M=[];if(g)for(let v of u)M=W_(M.length?M:[[]],h(-m,v,1));return{planes:S,regions:M,role:g?"long":"short"}}return{pitch:i,centerY:e,axis:n,phaseOrigin:t,reach:a,headModules:l,rafterStart:c,nearSlots:u,frame:d,treatment:p,slotEnvelope:h}}var Ce=2.5/6,_t=.24,Je=.018,gt=_t/2,Dn=new D(1,0,0),ti=new D(0,1,0),ni=new D(0,0,1),lh=1e-7;function ch(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=gt+(t?Je:0),r=i.wood||new Ct({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new ke;o.name="Combstruct 30 \u2014 w\u0119z\u0142y w jednej osi";let a=j=>{let ie=new ke;return ie.name=j,o.add(ie),ie},l={floor:a("P\u0142yta pod\u0142ogowa i ci\u0105g\u0142y taras"),walls:["rear","left","front","right"].map(j=>a(j)),partitions:a("\u015Aciany wewn\u0119trzne"),ceiling:a("Sufit"),roof:a("Dach 35\xB0"),gables:a("Poziome rz\u0119dy szczyt\xF3w"),pergola:a("Pergola")},c=13*Ce,d=15*Ce,u=7*Ce,h=-c/2,p=c/2,m=-d/2,x=d/2,g=m-u,f=8,S=f*Ce,M=t?S+Je:S-_t,v=M+_t,C=35*Math.PI/180,E=Math.sin(C),T=Math.cos(C),b=Math.tan(C),y=v-(t?Je*b:0),N=y+b*c/2,P=N+_t/T,L=t?Ls({pitch:35,spanHalf:c/2,ridgeUnderside:N,axis:0}):null,F={width:c,depth:d,halfWidth:c/2,halfDepth:d/2,terraceDepth:u,terraceRearZ:g,wallDepth:_t,floorBottom:0,floorTop:_t,wallTop:S,ceilingBottom:M,ceilingTop:v,clearHeight:M-_t,roofAngle:35,roofEaveY:y,roofUnderRidgeY:N,roofRidgeY:P,roofOverhang:Ce,module:Ce,boardDepth:_t,boardThickness:Je,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:Ce,constructionOnly:!0},k=or({wood:r,end:s},zf,{...e,connectors:t?!1:e.connectors}),{boards:O,segments:z,openStock:R,addBoard:q,grid:Y}=k,ae=[],me=[],ue={rear:[],left:[],front:[],right:[],partitions:[]},te=(j,ie=0,we=[],xe=2,ve={left:!0,right:!0})=>k.jointStock(j,ie,t?we.map(Ne=>({...Ne,fullEndSlot:!0})):we,xe,{...ve,extraTrim:ve.extraTrim??t}),le=h+6*Ce-n,se=le,V=m+8*Ce-n,oe=new D(h,gt,g);function ne(j,ie,we,xe,ve){let Ne=ve==="floor",U=Ne?7:0;for(let G=0;G<2;G++){let X=G===0?ie:we,he=G===0?we:ie;for(let Z=1;Z<he;Z++){let W=[];G===0&&Z>U&&W.push({at:6,side:"right",layer:1}),G===1&&(Ne&&W.push({at:7,side:"left",layer:1}),Z<6&&W.push({at:U+8,side:"right",layer:1}));let be=te(X,0,W);for(let Ee of be)q(j,Ee,G===0?Dn:ni,G===0?ti:ti.clone().negate(),G===0?ni:Dn,xe.clone().addScaledVector(G===0?ni:Dn,Z*Ce),{kind:ve,axis:G,index:Z},0)}}}ne(l.floor,13,22,oe,"floor");let fe=["rear","left","front","right"],Te=[new D(h,0,m+n),new D(h+n,0,m),new D(h,0,x-n),new D(p-n,0,m)],Pe=[ni,Dn,ni.clone().negate(),Dn.clone().negate()];function He(j,ie,we,xe,ve,Ne,U){return{id:U,kind:ie,u0:we*Ce+Je,u1:xe*Ce-Je,v0:ve,v1:Ne}}ue.front=[He("front","window",1,3,3*Ce+Je,6*Ce-Je,"front-window-left"),He("front","door",6,9,_t,6*Ce-Je,"entrance"),He("front","window",10,12,3*Ce+Je,6*Ce-Je,"front-window-right")],ue.rear=[He("rear","window",1,5,2*Ce+Je,6*Ce-Je,"bedroom-window"),He("rear","door",8,12,_t,6*Ce-Je,"terrace-door")],ue.right=[He("right","window",3,7,2*Ce+Je,6*Ce-Je,"living-window")];function Ge(j,ie,we,xe,ve){let Ne=(we===0?xe.x:xe.z)+j.u0,U=(we===0?xe.x:xe.z)+j.u1;return Object.assign(j,{wallId:ie,axis:we,origin:{x:xe.x,y:xe.y,z:xe.z},world:we===0?{x0:Ne,x1:U,z0:ve-gt,z1:ve+gt,y0:j.v0,y1:j.v1}:{x0:ve-gt,x1:ve+gt,z0:Ne,z1:U,y0:j.v0,y1:j.v1}}),j}let ce=[{n:new D(-b,1,0),c:y+b*c/2},{n:new D(b,1,0),c:y+b*c/2}],ge=Math.ceil(N/Ce)+1;for(let j=0;j<4;j++){let ie=j%2,we=ie===0?Dn:ni,xe=Te[j],ve=ie===0?xe.z:xe.x,Ne=ie===0?13:15,U=fe[j],G=ue[U];G.forEach(X=>Ge(X,U,ie,xe,ve)),ae.push({id:U,axis:ie,start:ie===0?xe.x:xe.z,end:(ie===0?xe.x:xe.z)+Ne*Ce-(ie===0?Je:2*Je),fixed:ve,depth:_t,holes:G,exterior:!0,origin:{x:xe.x,y:0,z:xe.z}});for(let X=0;X<2;X++){let he=X===0?Ne:ge,Z=X===0&&ie===0?0:1;for(let W=1;W<(X===0?f+1:Ne);W++){let be=X===0?ie===0?[{at:6,side:"right",layer:1}]:j===1?[{at:8,side:"right",layer:0}]:[]:[{at:f,side:t?"left":"right",layer:0}];for(let Ee of te(he,Z,be,2,{left:!0,right:!0,extraTrim:t&&X===0})){let Be={...Ee};X===1&&Be.trim==="right"&&Be.start+Be.pixels*Ce===he*Ce&&(Be.trim=null);let Xe=W*Ce+((Be.layer^Z)===0?-Je:0),Pt=L&&ie===1&&X===1?L.side(j===1?-1:1).wall(Be.layer^Z):null;for(let Bt of R(Be,X,Xe,G))q(l.walls[j],Bt,X===0?we:ti,X===0?Pe[j]:Pe[j].clone().negate(),X===0?ti:we,xe.clone().addScaledVector(X===0?ti:we,W*Ce),{kind:"wall",axis:X,index:W,...Pt?{roofLap:Pt.role}:{}},Z,Pt?.planes||(X===1||W===f?ce:[]),Pt?.regions||[])}}}if(ie===0)for(let X=f+1;X<ge;X++)for(let he of z(13))for(let Z of R(he,0,X*Ce+(he.layer===0?-Je:0),G))q(l.gables,Z,Dn,Pe[j],ti,xe.clone().addScaledVector(ti,X*Ce),{kind:"gable",axis:0,index:X,wallId:U},0,ce)}ne(l.ceiling,13,15,new D(h,M+gt,m),"ceiling");let re={left:h+n+gt,right:p-n-gt,rear:m+n+gt,front:x-n-gt};function Me(j,ie,we,xe,ve=[]){let Ne=new ke;Ne.name=j,l.partitions.add(Ne);let U=ie===0?new D(h,0,xe):new D(xe,0,m),G=ie===0?Dn:ni,X=ie===0?ni:Dn,he=ve.map(([Z,W])=>({id:`${j}-door-${Z}`,kind:"door",u0:Z*Ce+Je,u1:W*Ce-Je,v0:_t,v1:6*Ce-Je}));he.forEach(Z=>Ge(Z,j,ie,U,xe)),ue.partitions.push(...he),Ne.userData={id:j,axis:ie,start:ie===0?h:m,end:(ie===0?h:m)+we*Ce,fixed:xe,depth:_t,holes:he,origin:{x:U.x,y:0,z:U.z}},ae.push({...Ne.userData,exterior:!1});for(let Z=0;Z<2;Z++){let W=Z===0&&ie===0?0:1,be=Z===0?we:f+(t?1:0),Ee=Z===0?ie===1?[{at:8,side:"right",layer:0}]:[]:t?[{at:f,side:"left",layer:0}]:[];for(let Be=1;Be<(Z===0?f+(t?1:0):we);Be++)for(let Xe of te(be,W,Ee,2,{left:!0,right:!(t&&Z===1),extraTrim:t&&Z===0})){let Pt={...Xe};for(let Bt of R(Pt,Z,Be*Ce+((Pt.layer^W)===0?-Je:0),he))q(Ne,Bt,Z===0?G:ti,Z===0?X:X.clone().negate(),Z===0?ti:G,U.clone().addScaledVector(Z===0?ti:G,Be*Ce),{kind:"partition",wallId:j,axis:Z,index:Be},W,t?[{n:ti,c:v}]:[])}}}Me("bedroom-right",1,15,le,[[5,7],[10,12]]),Me("bedroom-front",0,6,V);let I={id:"bedroom",name:"Sypialnia",x0:re.left,x1:le-gt,z0:re.rear,z1:V-gt},We={id:"bathroom",name:"\u0141azienka",x0:re.left,x1:se-gt,z0:V+gt,z1:re.front},Ae=[{x:le+gt,z:re.rear},{x:re.right,z:re.rear},{x:re.right,z:re.front},{x:se+gt,z:re.front},{x:se+gt,z:V+gt},{x:le+gt,z:V+gt}],Fe=j=>Math.abs(j.reduce((ie,we,xe)=>ie+we.x*j[(xe+1)%j.length].z-j[(xe+1)%j.length].x*we.z,0))/2,ye=[I,We].map(j=>({...j,area:(j.x1-j.x0)*(j.z1-j.z0)}));ye.push({id:"living",name:"Salon z kuchni\u0105",x0:se+gt,x1:re.right,z0:re.rear,z1:re.front,polygon:Ae,area:Fe(Ae)});let A=m-Ce,_=17,B=L?.phaseOrigin??-Ce/2,K=c/2+Ce,de=Math.ceil((K/T-B)/Ce)+1,Q=N+gt/T,Re=t?yc({pitch:35,centerY:Q,phaseOrigin:B,axis:0}):null,Se=[],Oe=Array.from({length:14},(j,ie)=>m+(ie+1)*Ce);for(let j of[-1,1]){let ie=new D(j*T,-E,0),we=new D(j*E,T,0),xe=new D(0,Q,A).addScaledVector(ie,B),ve=new ke;ve.name=j===-1?"roof-left":"roof-right",l.roof.add(ve);let Ne=j===-1?[{n:Dn.clone(),c:0},{n:Dn.clone().negate(),c:K}]:[{n:Dn.clone().negate(),c:0},{n:Dn.clone(),c:K}];for(let U=1;U<_;U++){let G=A+U*Ce;j===-1&&Se.push(G);for(let X of z(Re?Math.ceil((K/T+gt*E/T+Je-Re.rafterStart)/Ce):de)){let he={...X,start:X.start-(Re?.headModules||0)*Ce,trim:null},Z=j===-1?0:1,W=L&&G>m+lh&&G<x-lh,be=W?L.side(j).roof(he.layer^Z):[{planes:[],regions:[]}],Ee=Re?.treatment(j,he.layer^Z);for(let Be of be)q(ve,he,ie,we,ni,xe.clone().addScaledVector(ni,U*Ce),{kind:"roof-slope",axis:0,index:U,roofSide:j,...W?{roofLap:Be.role}:{},...Ee?{ridgeLap:Ee.role}:{},detail:"Alternating ridge and roof-wall laps"},Z,[...Ee?[Ne[1],...Ee.planes]:Ne,...Be.planes],Of(Be.regions,Ee?.regions))}}for(let U=1;U<de;U++)for(let G of z(_))q(ve,G,ni,we.clone().negate(),ie,xe.clone().addScaledVector(ie,U*Ce),{kind:"roof-cross",axis:1,index:U,roofSide:j},0,Ne)}Re&&(F.ridgeJoint={strategy:"alternating-ply-lap",pitch:Re.pitch,headModules:Re.headModules,nearSlots:Re.nearSlots,roofEnvelopePreserved:!0}),F.usableConceptArea=ye.reduce((j,ie)=>j+ie.area,0),L&&(F.roofWallJoint={strategy:"between-slots",clearance:L.clearance,phaseOrigin:L.phaseOrigin,wallCenter:L.wallCenter,slotInner:L.slotInner,slotOuter:L.slotOuter,slabBeveled:!1,knee:!1}),F.structuralFootprintArea=c*d,F.terraceArea=c*u,me.push({id:"edge-floor",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",description:"D\u0142ugi pion zajmuje miejsce po zako\u0144czeniu pod\u0142ogi. Kr\xF3tki pion opiera si\u0119 na pe\u0142nej desce.",position:[h+3*Ce,_t/2,x-gt],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:l.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",description:"Pe\u0142ny wpust na ko\u0144cu deski i zako\u0144czenie kr\xF3tsze o dodatkowe 18 mm ods\u0142aniaj\u0105 miejsce na poprzeczne \u017Cebro pod\u0142ogi.",position:[h+7*Ce,_t/2,m+gt],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:l.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:l.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",description:"D\u0142ugo\u015Bci zako\u0144cze\u0144 i pe\u0142ny wpust tworz\u0105 miejsce na \u015Bcian\u0119 oraz poprzeczne \u017Cebro pod\u0142ogi.",position:[le,_t/2,m+3*Ce],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:l.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:l.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",description:"Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie pozwalaj\u0105 po\u0142\u0105czy\u0107 obie \u015Bciany bez bocznych wybra\u0144.",position:[le,3*Ce,m+gt],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",description:"Przegroda poprzeczna zamyka si\u0119 w warstwach ci\u0105g\u0142ej \u015Bciany. D\u0142ugo\u015Bci zako\u0144cze\u0144 pozostawiaj\u0105 miejsce na pion.",position:[le,3*Ce,V],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",description:"Strop le\u017Cy na poziomym rz\u0119dzie \u015Bciany. Pe\u0142ny wpust ko\u0144czy doln\u0105 desk\u0119, a g\xF3rne zako\u0144czenie zaczyna si\u0119 258 mm od osi w\u0119z\u0142a.",position:[h+gt,M+gt,m+9*Ce],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:l.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:f}]},{id:"connector-120",title:"Strop na poziomym \u017Cebrze \u2014 drugi kierunek",description:"Tak\u017Ce w drugim kierunku strop le\u017Cy nad poziomym \u017Cebrem \u015Bciany. Po\u0142\u0105czenie wynika z d\u0142ugo\u015Bci desek.",position:[h+3*Ce,M+gt,x-gt],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:l.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:f}]},{id:"ceiling-partition",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",description:"Strop opiera si\u0119 na poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie utrzymuj\u0105 wsp\xF3ln\u0105 lini\u0119 \u017Ceber.",position:[le,M+gt,m+3*Ce],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:l.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:l.ceiling.name,axis:1,index:6}]});let Ye={module:Ce,stockMaxLength:2.5,terminalDifference:_t,pairWidth:2*Je,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:_t,exteriorVerticalSlots:"outward",ceilingModule:f,ceilingTop:v,roofPitchDegrees:35,roofAxes:Se,wallAxes:Oe,roofAxesAligned:Oe.every(j=>Se.some(ie=>Math.abs(ie-j)<lh)),connectorBoards:O.filter(j=>j.connectorCuts.length).length,jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,connectorVariants:t?[]:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:t?"Geometric model only; joint strength and erection stability are not verified.":"Interior wall cap rows omitted in the lateral-cut layout.",loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:l,openings:ue,rooms:ye,dimensions:F,boards:O,joints:me,wallPanels:ae,validation:Ye}}var Li=(...i)=>new D(...i);function Bf(i,e,t){let n=new ke;n.name="Wn\u0119trze \u2014 ods\u0142aniana \u015Bciana";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:l,floorTop:c,clearHeight:d}=i.dimensions,u=10*r,h=d,p=-u/2,m=u/2,x=Li(-a+s/2,c,-l+7*r),g=new ot().makeRotationY(-Math.PI/2).multiply(new ot().makeTranslation(-x.x,-x.y,-x.z)),f=new Ht(Li(p,0,-s/2-.001),Li(m,h,s/2+.001)),S=[],M=[],v=[],C=[],E,T=0,b=0,y=(G,X=.85,he={})=>new Ct({color:G,roughness:X,...he}),N=y("#e0e0d9"),P=y("#f4f3ec",.24),L=y("#303b35",.3,{metalness:.6}),F=y("#ae885a"),k=y("#c49b62"),O=new en({color:"#685137",transparent:!0,opacity:.42}),z=y("#ecece5"),R=y("#bcbcb0"),q=(G,X,he,Z,W,be,Ee,Be)=>{let Xe=new lt(new on(X,he,Z),Be);return Xe.position.set(W,be,Ee),G.add(Xe),Xe},Y=(G,X,he)=>(G.userData.info=X,G.userData.kind=he,S.push(G),G),ae=G=>{let X=document.createElement("canvas");X.width=512,X.height=512;let he=X.getContext("2d"),Z=35,W=()=>(Z=Math.imul(Z,1664525)+1013904223>>>0,Z/4294967296);he.fillStyle=G==="wood"?"#b89670":"#d0c8ae",he.fillRect(0,0,512,512);for(let Ee=0;Ee<(G==="wood"?1200:9500);Ee++){let Be=W()*512,Xe=W()*512;he.lineWidth=.4+W(),he.strokeStyle=G==="wood"?Ee%2?"#ac875c55":"#d6b68d66":Ee%3?"#f0e9d444":"#9f96744a",he.beginPath(),he.moveTo(Be,Xe),he.lineTo(Be+(G==="wood"?1:(W()-.5)*17),Xe+(G==="wood"?50+W()*100:(W()-.5)*18)),he.stroke()}let be=new mi(X);return be.colorSpace=Vt,be},me=y("#e8dac5",.84,{map:ae("wood")}),ue=y("#eee7d3",1,{map:ae("fiber")});function te(G){let X=G.index?G.toNonIndexed():G.clone(),he=X.attributes.position,Z=[];for(let be=0;be<he.count;be+=3){let Ee=[0,1,2].map(Be=>Li().fromBufferAttribute(he,be+Be));for(let[Be,Xe,Pt]of[[0,p,1],[0,m,-1],[1,0,1],[1,h,-1]]){let Bt=[];for(let oi=0;oi<Ee.length;oi++){let hr=Ee[oi],Jo=Ee[(oi+1)%Ee.length],ur=(hr.getComponent(Be)-Xe)*Pt,Vs=(Jo.getComponent(Be)-Xe)*Pt;ur>=0&&Bt.push(hr),ur>=0!=Vs>=0&&Bt.push(hr.clone().lerp(Jo,ur/(ur-Vs)))}Ee=Bt}for(let Be=1;Be<Ee.length-1;Be++)Z.push(...Ee[0].toArray(),...Ee[Be].toArray(),...Ee[Be+1].toArray())}X.dispose();let W=new mt;return W.setAttribute("position",new ct(Z,3)),W.computeVertexNormals(),W}for(let G of i.boards.filter(X=>X.surface==="left")){let X=G.mesh.geometry.clone().translate(...G.mesh.position.toArray()).applyMatrix4(g);if(X.computeBoundingBox(),!X.boundingBox.intersectsBox(f)){X.dispose();continue}let he=te(X);if(X.dispose(),!he.attributes.position.count){he.dispose();continue}let Z=new lt(he,k);Z.add(new Gt(new Wt(he,30),O)),n.add(Z),Y(Z,{...t(G),detailLabel:"Grubo\u015B\u0107 p\u0142yty",detail:"18 mm"},"structure"),M.push(Z)}for(let G=2;G<12;G++)for(let X=0;X<8;X++){let he=(7-G-.5)*r,Z=(X+.5)*r-c,W=Math.max(0,Z-(r-2*o)/2),be=Math.min(h,Z+(r-2*o)/2);if(be-W<.045)continue;let Ee=q(n,r-2*o-.007,be-W-.006,s-.025,he,(W+be)/2,-.007,ue);Y(Ee,{id:`C30-IZ-${G.toString().padStart(2,"0")}${X}`,type:"Kostka izolacji",surface:"Komora \u015Bciany zewn\u0119trznej",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((be-W-.006)*1e3)} mm`,metricLabel:"Wymiary w widoku",detailLabel:"Warstwa",detail:"Izolacja mi\u0119dzy \u017Cebrami"},"insulation"),C.push(Ee)}q(n,u,h,.018,0,h/2,-.14,R);function le(G,X,he,Z){let W=new ys,be=X.map(Xe=>Li(...Xe)),Ee=be[0];for(let Xe=1;Xe<be.length-1;Xe++){let Pt=Math.min(.07,be[Xe].distanceTo(be[Xe-1])/3,be[Xe].distanceTo(be[Xe+1])/3),Bt=be[Xe].clone().addScaledVector(be[Xe-1].clone().sub(be[Xe]).normalize(),Pt),oi=be[Xe].clone().addScaledVector(be[Xe+1].clone().sub(be[Xe]).normalize(),Pt);W.add(new Ar(Ee,Bt)),W.add(new Rr(Bt,be[Xe],oi)),Ee=oi}W.add(new Ar(Ee,be[be.length-1]));let Be=new lt(new vo(W,Math.max(16,Math.ceil(W.getLength()*55)),he,10,!1),Z);return G.add(Be),Be}let se=y("#327d9f",.48),V=y("#b65744",.48),oe=y("#c18c2d",.58),ne=y("#687572",.72),fe=(G,X,he,Z,W,be)=>{let Ee=le(n,he,Z,W);return Y(Ee,{id:G,type:X,surface:"Warstwa instalacyjna od wn\u0119trza",length:be==="power"?"Gniazda i o\u015Bwietlenie":"Przy\u0142\u0105cze umywalki",metricLabel:"Przeznaczenie",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},be),v.push(Ee),Ee};fe("C30-W-01","Zimna woda",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,se,"water"),fe("C30-W-02","Ciep\u0142a woda",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,V,"water"),fe("C30-K-01","Odp\u0142yw umywalki",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,ne,"water"),fe("C30-E-01","Przew\xF3d do gniazd",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,oe,"power"),fe("C30-E-02","Przew\xF3d do o\u015Bwietlenia",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,oe,"power");let Te=q(n,.13,.12,.055,1.6,2.3,.191,y("#475751"));Y(Te,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Warstwa instalacyjna od wn\u0119trza",length:"Instalacja elektryczna",metricLabel:"Obw\xF3d",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Te),q(n,u+.32,.12,1.82,0,-.06,.7,me);let Pe=y("#927d63");for(let G=p;G<m;G+=.19)q(n,.001,.001,1.8,G,.001,.7,Pe);let He=.249,Ge=.025,ce=p+.16,ge=m-.16,re=.22,Me=h-.22;q(n,u,.22,Ge,0,.11,He,N),q(n,u,.22,Ge,0,h-.11,He,N),q(n,.16,Me-re,Ge,p+.08,(Me+re)/2,He,N),q(n,.16,Me-re,Ge,m-.08,(Me+re)/2,He,N);let I=q(n,1,Me-re,Ge,0,(Me+re)/2,He,N);Y(I,{id:"C30-WYK-01",type:"Malowana ok\u0142adzina \u015Bciany",surface:"\u015Aciana od strony wn\u0119trza",length:"Wyko\u0144czenie wn\u0119trza",metricLabel:"Warstwa",detailLabel:"Pod spodem",detail:"Konstrukcja, izolacja i instalacje"},"finish"),q(n,.09,h,.75,m+.045,h/2,.54,N),q(n,u+.06,.07,.65,0,h+.035,.45,N),q(n,u,.095,.022,0,.047,.278,z),q(n,.022,.095,.65,m-.01,.047,.61,z);let Ae=q(n,.007,Me-re,.032,ce,(re+Me)/2,.255,y("#43948c")),Fe=new ke;n.add(Fe),q(Fe,.79,1.03,.014,-1.17,1.8,.27,L);let ye=document.createElement("canvas");ye.width=64,ye.height=128;let A=ye.getContext("2d"),_=A.createLinearGradient(0,0,64,128);_.addColorStop(0,"#8caaa5"),_.addColorStop(.5,"#cfdbd3"),_.addColorStop(.51,"#acb7ad"),_.addColorStop(1,"#c5bda5"),A.fillStyle=_,A.fillRect(0,0,64,128);let B=new mi(ye);B.colorSpace=Vt;let K=new On({map:B});q(Fe,.75,.99,.004,-1.17,1.8,.279,K);let de=new xn(Li(1,0,0),-ce);Fe.traverse(G=>{G.isMesh&&(G.material=G.material.clone(),G.material.clippingPlanes=[de])});let Q=new ke;n.add(Q),q(Q,1,.43,.43,-1.17,.51,.51,F),q(Q,1.06,.035,.48,-1.17,.742,.52,P);let Re=y("#8c6944");for(let G=-1.63;G<-.7;G+=.035)q(Q,.009,.39,.008,G,.51,.729,Re);let Se=new Ji;Se.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let Oe=new Cr;Oe.absellipse(0,0,.285,.155,0,Math.PI*2,!0),Se.holes.push(Oe);let Ye=new Ir(Se,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});Ye.rotateX(-Math.PI/2);let j=new lt(Ye,P);j.position.set(-1.17,.765,.52),Q.add(j);let ie=new lt(new Ii(.282,.25,.018,40),P);ie.scale.z=.55,ie.position.set(-1.17,.772,.52),Q.add(ie),le(Q,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,L),q(Q,.045,.012,.032,-1.17,1.062,.335,L);let we=(G,X,he=!1)=>{let Z=q(n,.135,.11,.019,G,X,.277,z);if(he)q(n,.09,.07,.009,G,X,.292,N);else for(let W of[-.032,.032]){let be=new lt(new Ii(.026,.026,.007,20),N);be.rotation.x=Math.PI/2,be.position.set(G+W,X,.291),n.add(be);for(let Ee of[-.008,.008])q(n,.006,.006,.004,G+W,X+Ee,.297,L)}return Z};we(1.13,.47),we(1.4,1.24,!0),q(n,.42,.036,.07,-1.17,2.57,.3,L),q(n,.38,.008,.055,-1.17,2.548,.31,y("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let xe=new Ao(new Ht,2653304);xe.visible=!1,n.add(xe);function ve(G){E=G,xe.visible=G!==I,n.updateMatrixWorld(!0),xe.visible&&xe.box.setFromObject(G),e(G.userData.info)}function Ne(G){if(G===I)return I.visible;if(T<=.001)return!1;G.geometry.computeBoundingBox();let X=G.geometry.boundingBox.clone().applyMatrix4(G.matrixWorld);return X.max.x>ce&&X.min.x<ce+(ge-ce)*T&&X.max.y>re&&X.min.y<Me}function U(G){T=Qn.clamp(G,0,1);let X=ce+(ge-ce)*T,he=ge-X;I.scale.x=he,I.position.x=(X+ge)/2,I.visible=he>1e-5,de.constant=-X,Fe.visible=X<-1.17+.395,Ae.position.x=X,Ae.visible=T>.005&&T<.995,E&&E!==I&&!Ne(E)&&ve(I)}return U(0),ve(I),{root:n,direction:Li(.48,.2,3),focus:new Ht(Li(p-.1,-.1,-.16),Li(m+.12,h+.1,1.08)),annotation:"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",finish:U,selectAt(G){n.updateMatrixWorld(!0);let X=G.intersectObjects(n.children,!0).find(he=>{if(!he.object.isMesh)return!1;for(let Z=he.object;Z;Z=Z.parent)if(!Z.visible)return!1;return!(he.object.material.clippingPlanes||[]).some(Z=>Z.distanceToPoint(he.point)<0)});X?.object.userData.info&&ve(X.object)},next(){let G=S.filter(Ne);G.length&&ve(G[++b%G.length])},getSelected(){return E?.userData.info},getWallState(){return{reveal:T,boardCount:M.length,insulationCount:C.length,serviceCount:v.length,coverWidth:I.scale.x,insideFacing:!0}}}}function kf({pitch:i=35,knee:e=!0,eave:t=!0}={},n){let r=new ke,s=new ke,o=new ke,a=new ke;r.add(s,o,a),s.name="roof-joint-sample",o.name="transverse-roof-ribs",a.name="horizontal-wall-rib";let l=or(n),c=(...T)=>new D(...T),d=(T,b)=>({n:T,c:b}),u=e?0:Mn,h=Math.tan(i*Math.PI/180),p=Ls({pitch:i,spanHalf:ut+it,ridgeUnderside:u+ut*h,axis:0}),m=p.side(1),x=c(0,-2*ft-it,0),g=d(vi.clone().negate(),.65),f=(T,b,y,N,P,L,F=[],k=[],O=s)=>l.addBoard(O,T,b,y,N,P,L,0,F,k);for(let T of[0,1]){let b={start:0,pixels:6,layer:T},y=m.wall(T),N={kind:"wall-vertical",roofLap:y.role,axis:1,index:0};!e&&T===0?(f(b,vi,yi,In,x,N,[g,d(vi,0)]),f(b,vi,yi,In,x,{...N,kind:"roof-filler"},[g,d(vi.clone().negate(),-Mn),...y.planes])):f(b,vi,yi,In,x,N,[g,...y.planes],y.regions),e||f({start:0,pixels:6,layer:T,...T?{trim:"left",extraStartTrim:it}:{}},yi.clone().negate(),vi,In,c(ut+it,ut,0),{kind:"ceiling",axis:0,index:0},[d(yi.clone().negate(),1)]);let P=m.origin.clone().addScaledVector(m.along,-2*ft);for(let L of m.roof(T))!t&&L.role==="eave-ending"||f(b,m.along,m.normal,In,P,{kind:"roof-slope",axis:0,index:0,roofLap:L.role},[d(yi.clone().negate(),.8),d(yi,t?.72:ut),...L.planes],L.regions);f({start:0,pixels:2,layer:T},In,yi.clone().negate(),vi,c(0,-it,-ft),{kind:"wall-horizontal",axis:0,index:0},[],[],a)}let S=c(0,p.centerY,-ft);for(let T of t?[p.slotInner,p.slotOuter]:[p.slotInner])for(let b of[0,1])f({start:0,pixels:2,layer:b},In,m.normal.clone().negate(),m.along,S.clone().addScaledVector(m.along,T),{kind:"roof-cross",axis:1,index:T},[],[],o);for(let T of l.boards)T.mesh.material=T.kind.startsWith("roof-")&&T.kind!=="roof-filler"?n.roof:n.wood,T.mesh.userData.base=T.mesh.position.clone(),T.mesh.add(new Gt(new Wt(T.mesh.geometry,30),n.edges));let M=0,v=!0,C=0;function E(){for(let T of l.boards)T.mesh.parent===s&&T.mesh.position.copy(T.mesh.userData.base).addScaledVector(In,(T.layer===0?-1:1)*M*.25);o.visible=v&&M===0,a.visible=M===0,o.position.copy(m.normal).multiplyScalar(C)}return{root:r,direction:c(-.8,.5,2.8),annotation:"Pion mi\u0119dzy wpustami \xB7 strop bez skosu \xB7 zak\u0142adka dw\xF3ch warstw",spread(T){M=T,E()},crossing(T){v=T,E()},insert(T){C=T/1e3,E()},roofJoint:{pitch:i,knee:e,eave:t,clearance:p.clearance,slabBeveled:!1,slotInner:p.slotInner,slotOuter:p.slotOuter,boards:l.boards}}}function X_(i){let e=a=>{let l=a.mesh.geometry.attributes.position,c=[];for(let d=0;d<l.count;d+=3){let u=[0,1,2].map(p=>new D().fromBufferAttribute(l,d+p).add(a.mesh.position));if(u.some(p=>Math.abs(p.z-(a.layer===0?-it:0))>1e-6))continue;u=u.map(p=>new pe(p.x,p.y));let h=u[1].clone().sub(u[0]).cross(u[2].clone().sub(u[0]));Math.abs(h)<1e-12||(h<0&&u.reverse(),c.push(u))}return c},[t,n]=i.filter(a=>a.kind==="roof-slope"&&a.ridgeLap==="long").map(e),r=[];for(let a of t)for(let l of n){let c=a;for(let d=0;d<3;d++){let u=l[d],h=l[(d+1)%3].clone().sub(u),p=new pe(h.y,-h.x),m=p.dot(u),x=[];for(let g=0;g<c.length;g++){let f=c[g],S=c[(g+1)%c.length],M=m-p.dot(f),v=m-p.dot(S);M>=0&&x.push(f),M>=0!=v>=0&&x.push(f.clone().lerp(S,M/(M-v)))}c=x}for(let d=1;d<c.length-1;d++)for(let u of[-it-5e-4,it+5e-4])for(let h of[c[0],c[d],c[d+1]])r.push(h.x,h.y,u)}let s=new mt;s.setAttribute("position",new ct(r,3));let o=new lt(s,new On({color:"#9f83b7",side:Lt,transparent:!0,opacity:.85,depthWrite:!1}));return o.name="lap-area-overlay",o}function Vf({pitch:i=45,ridgeHouse:e="principle"}={},t){let n=new ke,r=new ke,s=[];n.add(r),r.name="ridge-plies";let o=e==="principle"?-ft/2:Ls({pitch:i,spanHalf:(e==="90"?16:13)*ft/2,ridgeUnderside:0}).phaseOrigin,a=yc({pitch:i,phaseOrigin:o,centerY:0}),l=or(t);for(let m of[-1,1]){let{q:x,along:g,normal:f}=a.frame(m),S=new ke;S.userData.normal=f,n.add(S),s.push(S);for(let M of[0,1]){let v=a.treatment(m,M);l.addBoard(r,{start:a.rafterStart,pixels:6,layer:M},g,f,In,new D,{kind:"roof-slope",roofSide:m,ridgeLap:v.role},0,[{n:x,c:.8},...v.planes],v.regions),l.addBoard(S,{start:0,pixels:2,layer:M},In,f.clone().negate(),g,new D(0,0,-ft).addScaledVector(g,o+ft),{kind:"roof-cross",roofSide:m},0,[{n:x.clone().negate(),c:0}])}}for(let m of l.boards)m.mesh.material=m.roofSide===-1?t.wood:t.roof,m.mesh.userData.base=m.mesh.position.clone(),m.mesh.add(new Gt(new Wt(m.mesh.geometry,30),t.edges));let c=X_(l.boards);n.add(c);let d=0,u=!0,h=0;function p(){for(let m of l.boards)m.kind==="roof-slope"&&m.mesh.position.copy(m.mesh.userData.base).addScaledVector(In,(m.layer===0?-1:1)*d*.25);for(let m of s)m.visible=u&&d===0,m.position.copy(m.userData.normal).multiplyScalar(h);c.visible=d===0}return{root:n,direction:new D(0,.15,3),annotation:"Kalenica \xB7 fiolet oznacza powierzchni\u0119 zak\u0142adki A/B",spread(m){d=m,p()},crossing(m){u=m,p()},insert(m){h=m/1e3,p()},ridgeJoint:{pitch:i,ridgeHouse:e,phaseOrigin:o,boards:l.boards,ridge:a}}}var Tt=(...i)=>new D(...i),kr=Tt(1,0,0),lr=Tt(0,1,0),Vr=Tt(0,0,1),Hf=_t/2,bn=new Ct({color:"#cba36b",roughness:.8,side:Lt}),ar=new Ct({color:"#43948c",roughness:.75,side:Lt}),Wf=new Ct({color:"#94784e",roughness:.85,side:Lt}),vc=new en({color:"#66543a",transparent:!0,opacity:.5}),Xf=new Ct({color:"#287c78",roughness:.7,side:Lt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),q_=new Set([bn,ar,Wf,vc,Xf]);function qf(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])q_.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var Vo;function Hr(){return Vo||(Vo=ch({wood:bn,end:bn}),Vo.root.updateMatrixWorld(!0),Vo.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),Vo}function Mc(i=6,e={}){let t=or({},{},{connectors:!1}),n=new ke,s=t.addBoard(n,{pixels:i,start:0,layer:0,...e},kr,lr,Vr,Tt()).geometry;return s.translate(0,0,-Je/2),s}function Sc(i,e=bn){let t=new lt(i,e);return t.add(new Gt(new Wt(i,30),vc)),t}function j_(i){return xc(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function Ho(i,e,t,n,r,s,o=bn){for(let a of j_(e)){let l=Mc(a.n,{trim:a.trim}),c=new ot().makeBasis(n,r,s);l.applyMatrix4(c);let d=Sc(l,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Je),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function Y_(i,e,t){i.add(new Lr(t,e,.36,2653304,.095,.048))}function Z_(i){let e=new ke,t=6*Ce,n=10*Ce,r=new ke,s=new ke,o=new ke;e.add(r,s,o);for(let c=1;c<10;c++)Ho(r,6,Tt(-t/2,0,-n/2+c*Ce),kr,lr,Vr,ar);for(let c=1;c<6;c++)Ho(s,10,Tt(-t/2+c*Ce,0,-n/2),Vr,lr.clone().negate(),kr,bn);for(let c of[-n/2+Ce,0,n/2-Ce])Y_(o,Tt(-t/2+Ce,.16,c),lr);let a=new Tr(new mt().setFromPoints([Tt(-t/2,0,-n/2-.12),Tt(t/2,0,-n/2-.12)]),new en({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new ot().makeBasis(lr,Vr,kr)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let l=i==="wall"?Tt(1.5,1,2.6):Tt(1.4,1.7,1.9);return{root:e,arrows:o,direction:l,annotation:i==="wall"?"Wpusty pion\xF3w \u2192 na zewn\u0105trz domu":i==="roof"?"Turkus: kr\xF3tszy kierunek po\u0142aci \xB7 wpusty do pokrycia":"Turkus: kr\xF3tszy kierunek no\u015Bny \xB7 wpusty do g\xF3ry",spread(c){s.position.y=c*.65}}}function Gf(i,e,{crossing:t=[],plane:n=1,direction:r=Tt(1.1,1.8,1.4),size:s=1.05}={}){let o=new ke,a=new ke,l=new ke;o.add(a,l);let c=Hr(),d=(u,h)=>u.surface===h.surface&&u.axis===h.axis&&u.index===h.index;for(let u of c.boards){let h=i.findIndex(x=>d(u,x)),p=t.some(x=>d(u,x));if(h<0&&!p||u.bounds.distanceToPoint(e)>.5)continue;let m=Sc(u.mesh.geometry.clone(),p?Wf:i[h].material||(h===0?bn:ar));m.position.copy(u.mesh.position).sub(e),m.userData.boardId=u.id,m.userData.base=m.position.clone(),m.userData.sign=u.bounds.getCenter(Tt()).getComponent(n)<e.getComponent(n)?-1:1,(p?l:a).add(m)}return l.visible=!1,{root:o,direction:r,focus:new Ht(Tt(-s/2,-s/2,-s/2),Tt(s/2,s/2,s/2)),spread(u){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*u*.2);l.visible=!1},crossing(u){l.visible=u}}}function jf(i,e,t){if(i.scene==="ridge")return Vf(t,{wood:bn,end:bn,roof:ar,edges:vc});if(i.scene==="roof-wall")return kf(t,{wood:bn,end:bn,roof:ar,edges:vc});if(["slab","wall","roof"].includes(i.scene))return Z_(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let s=new ke,o=Sc(Mc(e?.modules||6,e||{}),ar);return o.position.x=-3*Ce,s.add(o),{root:s,direction:Tt(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Deska grzebieniowa \xB7 naci\u0119cia do po\u0142owy wysoko\u015Bci"}}if(i.scene==="continuity"){let s=new ke;return Ho(s,12,Tt(-6*Ce,0,0),kr,lr,Vr,bn),s.children.forEach(o=>o.material=o.userData.ply?ar:bn),{root:s,direction:Tt(.6,.85,3),spread(o){s.children.forEach(a=>a.position.z=(a.userData.ply-.5)*(Je+o*.42))},annotation:"Dwie warstwy \xB7 przesuni\u0119cie styk\xF3w o 2 modu\u0142y"}}if(i.scene==="cross"){let s=new ke,o=new ke,a=new ke;return s.add(o,a),Ho(o,4,Tt(-2*Ce,0,0),kr,lr,Vr,ar),Ho(a,4,Tt(0,0,-2*Ce),Vr,lr.clone().negate(),kr,bn),{root:s,direction:Tt(1.4,1.6,2),spread(l){a.position.y=l*.65},annotation:"Wpusty przeciwnych rodzin \u017Ceber otwieraj\u0105 si\u0119 w przeciwne strony"}}let n=Hr(),r=n.dimensions;if(i.scene==="joint"){let s=n.joints.find(o=>o.id===i.joint);return Gf(s.members,Tt(...s.position),{crossing:s.crossingMembers||[],plane:s.planeAxis,direction:Tt(...s.viewDirection)})}if(i.scene==="corner")return Gf([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],Tt(r.halfWidth-Hf,3*Ce,r.halfDepth-Hf),{plane:1,direction:Tt(1.4,2,1.6)});throw new Error("Unknown handbook scene: "+i.scene)}var J_={rear:"\u015Aciana zewn\u0119trzna od tarasu",front:"\u015Aciana zewn\u0119trzna od wej\u015Bcia",left:"Lewa \u015Bciana zewn\u0119trzna",right:"Prawa \u015Bciana zewn\u0119trzna","bedroom-right":"\u015Aciana wewn\u0119trzna","bedroom-front":"Przegroda sypialni i \u0142azienki","roof-left":"Lewa po\u0142a\u0107 dachu","roof-right":"Prawa po\u0142a\u0107 dachu"};function Go(i){let e=1/0,t=-1/0,n=new D(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=Tt().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Deska \u0142\u0105czeniowa":i.trim?"Deska zako\u0144czeniowa":i.custom?"Deska dopasowana do otworu lub skosu":"Deska grzebieniowa",surface:J_[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Yf(i,e){let t=Hr();if(i==="wall")return Bf(t,e,Go);let n=new ke,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=ko(s,!1);s.forEach(d=>d.dispose()),n.add(Sc(o,bn));let a=new lt(new mt,Xf);n.add(a);let l,c=d=>{l=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(Go(d))};return c(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:Tt(1.4,1,1.5),annotation:"Wybierz element, aby zobaczy\u0107 jego identyfikator",selectAt(d){let u=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(p=>({b:h,d:p.distance}))).sort((h,p)=>h.d-p.d);u[0]&&c(u[0].b)},next(){c(r[(r.indexOf(l)+1)%r.length])},getSelected(){return Go(l)}}}var Ns={model:"Combstruct 30",totalBoards:1424,material:{lengthM:2147.9671780261037,fullBoardLengthM:2.5,fullBoardEquivalents:859.1868712104415,fullBoards:860,sheets:172},geometrySha256:"8e03105a7b941f5381a960ce2271d630247b213b73659c4d41fa97ed3dc36ad6",toleranceM:5e-5,families:[{id:"standard",name:"Deska zwyk\u0142a",count:953,lengths:{"3":95,"4":242,"5":437,"6":179},sample:"board-147"},{id:"ending",name:"Deska zako\u0144czeniowa",count:471,lengths:{"3":106,"4":270,"5":77,"6":18},sample:"board-1244"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-368",null],["board-373",null],["board-378",null],["board-644",null],["board-650",null],["board-1084",null],["board-1103",null],["board-323",null],["board-329",null],["board-335",null],["board-765",null],["board-770",null],["board-775",null],["board-612",null],["board-668",null],["board-318",null],["board-342",null],["board-349",null],["board-356",null],["board-363",null],["board-383",null],["board-468",null],["board-473",null],["board-478",null],["board-483",null],["board-488",null],["board-493",null],["board-498",null],["board-503",null],["board-508",null],["board-513",null],["board-518",null],["board-523",null],["board-528",null],["board-533",null],["board-607",null],["board-618",null],["board-624",null],["board-631",null],["board-638",null],["board-656",null],["board-662",null],["board-673",null],["board-750",null],["board-755",null],["board-760",null],["board-780",null],["board-785",null],["board-790",null],["board-795",null],["board-800",null],["board-805",null],["board-810",null],["board-815",null],["board-1065",null],["board-1069",null],["board-1073",null],["board-1077",null],["board-1081",null],["board-1088",null],["board-1092",null],["board-1096",null],["board-1100",null],["board-1107",null],["board-1111",null],["board-1115",null],["board-1143",null],["board-1147",null],["board-1151",null],["board-1155",null],["board-1159",null],["board-320","board-37"],["board-326","board-37"],["board-332","board-37"],["board-762","board-67"],["board-767","board-74"],["board-772","board-81"],["board-609","board-156"],["board-665","board-240"],["board-315","board-37"],["board-338","board-38"],["board-345","board-38"],["board-352","board-38"],["board-359","board-38"],["board-380","board-39"],["board-465","board-47"],["board-470","board-54"],["board-475","board-61"],["board-480","board-68"],["board-485","board-75"],["board-490","board-82"],["board-495","board-89"],["board-500","board-96"],["board-505","board-103"],["board-510","board-110"],["board-515","board-117"],["board-520","board-124"],["board-525","board-131"],["board-530","board-138"],["board-604","board-146"],["board-615","board-166"],["board-621","board-176"],["board-627","board-186"],["board-634","board-195"],["board-653","board-222"],["board-659","board-231"],["board-670","board-249"],["board-747","board-46"],["board-752","board-53"],["board-757","board-60"],["board-777","board-88"],["board-782","board-95"],["board-787","board-102"],["board-792","board-109"],["board-797","board-116"],["board-802","board-123"],["board-807","board-130"],["board-812","board-137"],["board-1063","board-44"],["board-1067","board-51"],["board-1071","board-58"],["board-1075","board-65"],["board-1079","board-72"],["board-1086","board-86"],["board-1090","board-93"],["board-1094","board-100"],["board-1098","board-107"],["board-1105","board-121"],["board-1109","board-128"],["board-1113","board-135"],["board-1141","board-144"],["board-1145","board-154"],["board-1149","board-164"],["board-1153","board-174"],["board-1157","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-380"],["board-409","board-258"],["board-410","board-409"],["board-411","board-500"],["board-412","board-411"],["board-540","board-412"],["board-541","board-540"],["board-542","board-653"],["board-699","board-261"],["board-700","board-699"],["board-701","board-700"],["board-992","board-259"],["board-993","board-992"],["board-994","board-1086"],["board-995","board-1090"],["board-996","board-541"],["board-1119","board-410"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-413","board-258"],["board-414","board-410"],["board-415","board-411"],["board-535","board-412"],["board-536","board-535"],["board-537","board-541"],["board-538","board-542"],["board-539","board-538"],["board-702","board-257"],["board-703","board-700"],["board-704","board-701"],["board-997","board-255"],["board-998","board-993"],["board-999","board-994"],["board-1000","board-995"],["board-1001","board-996"],["board-1117","board-410"],["board-1118","board-1117"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-380"],["board-416","board-266"],["board-417","board-416"],["board-418","board-500"],["board-419","board-418"],["board-548","board-419"],["board-549","board-548"],["board-550","board-653"],["board-705","board-269"],["board-706","board-705"],["board-707","board-706"],["board-1002","board-267"],["board-1003","board-1002"],["board-1004","board-1086"],["board-1005","board-1090"],["board-1006","board-549"],["board-1122","board-417"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-420","board-266"],["board-421","board-417"],["board-422","board-418"],["board-543","board-419"],["board-544","board-543"],["board-545","board-549"],["board-546","board-550"],["board-547","board-546"],["board-708","board-265"],["board-709","board-706"],["board-710","board-707"],["board-1007","board-263"],["board-1008","board-1003"],["board-1009","board-1004"],["board-1010","board-1005"],["board-1011","board-1006"],["board-1120","board-417"],["board-1121","board-1120"],["board-274","board-315"],["board-275","board-338"],["board-276","board-275"],["board-277","board-380"],["board-423","board-274"],["board-424","board-423"],["board-425","board-500"],["board-426","board-425"],["board-556","board-426"],["board-557","board-556"],["board-558","board-653"],["board-711","board-277"],["board-712","board-777"],["board-713","board-712"],["board-1012","board-275"],["board-1013","board-1012"],["board-1014","board-1086"],["board-1015","board-1090"],["board-1016","board-557"],["board-1125","board-424"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-427","board-274"],["board-428","board-424"],["board-429","board-425"],["board-551","board-426"],["board-552","board-551"],["board-553","board-557"],["board-554","board-558"],["board-555","board-554"],["board-714","board-273"],["board-715","board-712"],["board-716","board-713"],["board-1017","board-271"],["board-1018","board-1013"],["board-1019","board-1014"],["board-1020","board-1015"],["board-1021","board-1016"],["board-1123","board-424"],["board-1124","board-1123"],["board-282","board-315"],["board-283","board-338"],["board-284","board-283"],["board-285","board-380"],["board-430","board-282"],["board-431","board-430"],["board-432","board-500"],["board-433","board-432"],["board-566","board-433"],["board-567","board-615"],["board-568","board-567"],["board-569","board-653"],["board-570","board-670"],["board-717","board-285"],["board-718","board-777"],["board-719","board-718"],["board-1022","board-283"],["board-1023","board-1022"],["board-1024","board-1086"],["board-1025","board-1090"],["board-1026","board-568"],["board-1128","board-431"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-434","board-282"],["board-435","board-431"],["board-436","board-432"],["board-559","board-433"],["board-560","board-567"],["board-561","board-560"],["board-562","board-568"],["board-563","board-569"],["board-564","board-563"],["board-565","board-570"],["board-720","board-281"],["board-721","board-718"],["board-722","board-719"],["board-1027","board-279"],["board-1028","board-1023"],["board-1029","board-1024"],["board-1030","board-1025"],["board-1031","board-1026"],["board-1126","board-431"],["board-1127","board-1126"],["board-316","board-278"],["board-339","board-279"],["board-346","board-280"],["board-353","board-280"],["board-360","board-280"],["board-381","board-281"],["board-466","board-430"],["board-471","board-430"],["board-476","board-430"],["board-481","board-430"],["board-486","board-431"],["board-491","board-431"],["board-496","board-431"],["board-501","board-432"],["board-506","board-432"],["board-511","board-432"],["board-516","board-432"],["board-521","board-433"],["board-526","board-433"],["board-531","board-433"],["board-605","board-559"],["board-616","board-560"],["board-622","board-561"],["board-628","board-561"],["board-635","board-562"],["board-654","board-563"],["board-660","board-564"],["board-671","board-565"],["board-748","board-717"],["board-753","board-717"],["board-758","board-717"],["board-778","board-718"],["board-783","board-718"],["board-788","board-718"],["board-793","board-718"],["board-798","board-719"],["board-803","board-719"],["board-808","board-719"],["board-813","board-719"],["board-1064","board-1022"],["board-1068","board-1022"],["board-1072","board-1022"],["board-1076","board-1022"],["board-1080","board-1023"],["board-1087","board-1024"],["board-1091","board-1025"],["board-1095","board-1025"],["board-1099","board-1025"],["board-1106","board-1026"],["board-1110","board-1026"],["board-1114","board-1026"],["board-1142","board-1126"],["board-1146","board-1126"],["board-1150","board-1126"],["board-1154","board-1127"],["board-1158","board-1127"],["board-290","board-316"],["board-291","board-339"],["board-292","board-291"],["board-293","board-381"],["board-437","board-290"],["board-438","board-437"],["board-439","board-501"],["board-440","board-439"],["board-578","board-440"],["board-579","board-616"],["board-580","board-579"],["board-581","board-654"],["board-582","board-671"],["board-723","board-293"],["board-724","board-778"],["board-725","board-724"],["board-1032","board-291"],["board-1033","board-1032"],["board-1034","board-1087"],["board-1035","board-1091"],["board-1036","board-580"],["board-1131","board-438"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-441","board-290"],["board-442","board-438"],["board-443","board-439"],["board-571","board-440"],["board-572","board-579"],["board-573","board-572"],["board-574","board-580"],["board-575","board-581"],["board-576","board-575"],["board-577","board-582"],["board-726","board-289"],["board-727","board-724"],["board-728","board-725"],["board-1037","board-287"],["board-1038","board-1033"],["board-1039","board-1034"],["board-1040","board-1035"],["board-1041","board-1036"],["board-1129","board-438"],["board-1130","board-1129"],["board-1066","board-1032"],["board-1070","board-1032"],["board-1074","board-1032"],["board-1078","board-1032"],["board-1082","board-1033"],["board-1089","board-1034"],["board-1093","board-1035"],["board-1097","board-1035"],["board-1101","board-1035"],["board-1108","board-1036"],["board-1112","board-1036"],["board-1116","board-1036"],["board-1144","board-1129"],["board-1148","board-1129"],["board-1152","board-1129"],["board-1156","board-1130"],["board-1160","board-1130"],["board-384","board-289"],["board-674","board-577"],["board-319","board-286"],["board-608","board-571"],["board-469","board-437"],["board-474","board-437"],["board-479","board-437"],["board-484","board-437"],["board-489","board-438"],["board-494","board-438"],["board-499","board-438"],["board-504","board-439"],["board-509","board-439"],["board-514","board-439"],["board-519","board-439"],["board-524","board-440"],["board-529","board-440"],["board-534","board-440"],["board-751","board-723"],["board-756","board-723"],["board-761","board-723"],["board-781","board-724"],["board-786","board-724"],["board-791","board-724"],["board-796","board-724"],["board-801","board-725"],["board-806","board-725"],["board-811","board-725"],["board-816","board-725"],["board-343","board-287"],["board-350","board-288"],["board-357","board-288"],["board-364","board-288"],["board-619","board-572"],["board-625","board-573"],["board-632","board-573"],["board-639","board-574"],["board-657","board-575"],["board-663","board-576"],["board-298","board-316"],["board-321","board-298"],["board-327","board-298"],["board-333","board-298"],["board-299","board-298"],["board-300","board-299"],["board-366","board-300"],["board-371","board-300"],["board-376","board-300"],["board-444","board-298"],["board-445","board-444"],["board-446","board-501"],["board-447","board-446"],["board-587","board-447"],["board-610","board-587"],["board-588","board-587"],["board-641","board-588"],["board-647","board-588"],["board-589","board-588"],["board-666","board-589"],["board-729","board-300"],["board-763","board-729"],["board-768","board-729"],["board-730","board-729"],["board-773","board-730"],["board-731","board-730"],["board-1042","board-299"],["board-1043","board-1042"],["board-1083","board-1043"],["board-1044","board-1091"],["board-1102","board-1044"],["board-1045","board-1044"],["board-1134","board-445"],["board-1085","board-1043"],["board-1104","board-1044"],["board-766","board-729"],["board-771","board-729"],["board-776","board-730"],["board-379","board-300"],["board-669","board-589"],["board-324","board-298"],["board-330","board-298"],["board-336","board-298"],["board-369","board-300"],["board-374","board-300"],["board-613","board-587"],["board-645","board-588"],["board-651","board-588"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-448","board-298"],["board-449","board-445"],["board-450","board-446"],["board-583","board-447"],["board-584","board-583"],["board-585","board-588"],["board-586","board-585"],["board-732","board-297"],["board-733","board-730"],["board-734","board-731"],["board-1046","board-295"],["board-1047","board-1043"],["board-1048","board-1044"],["board-1132","board-445"],["board-1133","board-1132"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-451","board-305"],["board-452","board-451"],["board-453","board-501"],["board-454","board-453"],["board-594","board-454"],["board-595","board-594"],["board-596","board-595"],["board-735","board-307"],["board-736","board-735"],["board-737","board-736"],["board-1049","board-306"],["board-1050","board-1049"],["board-1051","board-1091"],["board-1052","board-1051"],["board-1137","board-452"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-455","board-305"],["board-456","board-452"],["board-457","board-453"],["board-590","board-454"],["board-591","board-590"],["board-592","board-595"],["board-593","board-592"],["board-738","board-304"],["board-739","board-736"],["board-740","board-737"],["board-1053","board-302"],["board-1054","board-1050"],["board-1055","board-1051"],["board-1135","board-452"],["board-1136","board-1135"],["board-312","board-316"],["board-313","board-312"],["board-314","board-313"],["board-458","board-312"],["board-459","board-458"],["board-460","board-501"],["board-461","board-460"],["board-601","board-461"],["board-602","board-601"],["board-603","board-602"],["board-741","board-314"],["board-742","board-741"],["board-743","board-742"],["board-1056","board-313"],["board-1057","board-1056"],["board-1058","board-1091"],["board-1059","board-1058"],["board-1140","board-459"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-462","board-312"],["board-463","board-459"],["board-464","board-460"],["board-597","board-461"],["board-598","board-597"],["board-599","board-602"],["board-600","board-599"],["board-744","board-311"],["board-745","board-742"],["board-746","board-743"],["board-1060","board-309"],["board-1061","board-1057"],["board-1062","board-1058"],["board-1138","board-459"],["board-1139","board-1138"],["board-467","board-469"],["board-472","board-474"],["board-477","board-479"],["board-482","board-484"],["board-487","board-489"],["board-492","board-494"],["board-497","board-499"],["board-502","board-504"],["board-507","board-509"],["board-512","board-514"],["board-517","board-519"],["board-522","board-524"],["board-527","board-529"],["board-532","board-534"],["board-749","board-751"],["board-754","board-756"],["board-759","board-761"],["board-764","board-766"],["board-769","board-771"],["board-774","board-776"],["board-779","board-781"],["board-784","board-786"],["board-789","board-791"],["board-794","board-796"],["board-799","board-801"],["board-804","board-806"],["board-809","board-811"],["board-814","board-816"],["board-317","board-319"],["board-606","board-608"],["board-382","board-384"],["board-672","board-674"],["board-322","board-324"],["board-611","board-613"],["board-377","board-379"],["board-667","board-669"],["board-328","board-330"],["board-617","board-619"],["board-372","board-374"],["board-661","board-663"],["board-334","board-336"],["board-623","board-625"],["board-367","board-369"],["board-655","board-657"],["board-340","board-343"],["board-347","board-350"],["board-354","board-357"],["board-361","board-364"],["board-629","board-632"],["board-636","board-639"],["board-642","board-645"],["board-648","board-651"],["board-325","board-324"],["board-614","board-613"],["board-375","board-372"],["board-664","board-661"],["board-331","board-328"],["board-620","board-617"],["board-370","board-367"],["board-658","board-655"],["board-337","board-334"],["board-626","board-623"],["board-365","board-361"],["board-652","board-648"],["board-344","board-340"],["board-633","board-629"],["board-358","board-354"],["board-646","board-642"],["board-351","board-347"],["board-640","board-636"],["board-341","board-340"],["board-630","board-629"],["board-362","board-361"],["board-649","board-648"],["board-348","board-347"],["board-637","board-636"],["board-355","board-354"],["board-643","board-642"],["board-817","board-462"],["board-818","board-817"],["board-819","board-1060"],["board-820","board-819"],["board-821","board-462"],["board-822","board-818"],["board-823","board-819"],["board-824","board-462"],["board-825","board-824"],["board-826","board-1060"],["board-827","board-826"],["board-828","board-462"],["board-829","board-825"],["board-830","board-826"],["board-831","board-462"],["board-832","board-831"],["board-833","board-1060"],["board-834","board-833"],["board-835","board-462"],["board-836","board-832"],["board-837","board-833"],["board-838","board-462"],["board-839","board-838"],["board-840","board-1060"],["board-841","board-840"],["board-842","board-462"],["board-843","board-839"],["board-844","board-840"],["board-845","board-463"],["board-846","board-845"],["board-847","board-1061"],["board-848","board-847"],["board-849","board-462"],["board-850","board-846"],["board-851","board-847"],["board-852","board-463"],["board-853","board-852"],["board-854","board-1061"],["board-855","board-854"],["board-856","board-463"],["board-857","board-853"],["board-858","board-854"],["board-859","board-463"],["board-860","board-859"],["board-861","board-1061"],["board-862","board-861"],["board-863","board-463"],["board-864","board-860"],["board-865","board-861"],["board-866","board-463"],["board-867","board-866"],["board-868","board-1061"],["board-869","board-868"],["board-870","board-463"],["board-871","board-867"],["board-872","board-868"],["board-873","board-463"],["board-874","board-873"],["board-875","board-1061"],["board-876","board-875"],["board-877","board-463"],["board-878","board-874"],["board-879","board-875"],["board-880","board-464"],["board-881","board-880"],["board-882","board-1062"],["board-883","board-882"],["board-884","board-463"],["board-885","board-881"],["board-886","board-882"],["board-887","board-464"],["board-888","board-887"],["board-889","board-1062"],["board-890","board-889"],["board-891","board-464"],["board-892","board-888"],["board-893","board-889"],["board-894","board-464"],["board-895","board-894"],["board-896","board-1062"],["board-897","board-896"],["board-898","board-464"],["board-899","board-895"],["board-900","board-896"],["board-901","board-464"],["board-902","board-901"],["board-903","board-1062"],["board-904","board-903"],["board-905","board-464"],["board-906","board-902"],["board-907","board-903"],["board-908","board-464"],["board-909","board-908"],["board-910","board-1062"],["board-911","board-910"],["board-912","board-464"],["board-913","board-909"],["board-914","board-910"],["board-915","board-308"],["board-916","board-838"],["board-917","board-866"],["board-918","board-887"],["board-919","board-308"],["board-920","board-845"],["board-921","board-880"],["board-922","board-308"],["board-923","board-838"],["board-924","board-866"],["board-925","board-887"],["board-926","board-308"],["board-927","board-845"],["board-928","board-880"],["board-929","board-309"],["board-930","board-838"],["board-931","board-866"],["board-932","board-887"],["board-933","board-308"],["board-934","board-845"],["board-935","board-880"],["board-936","board-309"],["board-937","board-839"],["board-938","board-867"],["board-939","board-888"],["board-940","board-309"],["board-941","board-846"],["board-942","board-881"],["board-943","board-309"],["board-944","board-839"],["board-945","board-867"],["board-946","board-888"],["board-947","board-309"],["board-948","board-846"],["board-949","board-881"],["board-950","board-310"],["board-951","board-847"],["board-952","board-882"],["board-953","board-310"],["board-954","board-854"],["board-955","board-889"],["board-956","board-310"],["board-957","board-847"],["board-958","board-882"],["board-959","board-310"],["board-960","board-854"],["board-961","board-889"],["board-962","board-310"],["board-963","board-847"],["board-964","board-882"],["board-965","board-310"],["board-966","board-854"],["board-967","board-889"],["board-968","board-311"],["board-969","board-847"],["board-970","board-882"],["board-971","board-310"],["board-972","board-854"],["board-973","board-889"],["board-974","board-311"],["board-975","board-848"],["board-976","board-883"],["board-977","board-311"],["board-978","board-855"],["board-979","board-890"],["board-980","board-311"],["board-981","board-848"],["board-982","board-883"],["board-983","board-311"],["board-984","board-855"],["board-985","board-890"],["board-986","board-311"],["board-987","board-848"],["board-988","board-883"],["board-989","board-311"],["board-990","board-855"],["board-991","board-890"],["board-385","board-317"],["board-386","board-340"],["board-387","board-367"],["board-675","board-606"],["board-676","board-629"],["board-677","board-655"],["board-388","board-317"],["board-389","board-334"],["board-390","board-361"],["board-678","board-606"],["board-679","board-623"],["board-680","board-648"],["board-391","board-322"],["board-392","board-340"],["board-393","board-367"],["board-681","board-611"],["board-682","board-629"],["board-683","board-655"],["board-394","board-324"],["board-395","board-334"],["board-396","board-361"],["board-684","board-613"],["board-685","board-623"],["board-686","board-648"],["board-397","board-334"],["board-398","board-340"],["board-399","board-367"],["board-687","board-623"],["board-688","board-629"],["board-689","board-655"],["board-400","board-334"],["board-401","board-334"],["board-402","board-361"],["board-690","board-623"],["board-691","board-623"],["board-692","board-648"],["board-403","board-340"],["board-404","board-340"],["board-693","board-629"],["board-694","board-629"],["board-405","board-340"],["board-406","board-361"],["board-695","board-629"],["board-696","board-648"],["board-1169","board-469"],["board-1174","board-474"],["board-1179","board-479"],["board-1184","board-484"],["board-1189","board-489"],["board-1194","board-494"],["board-1199","board-499"],["board-1204","board-504"],["board-1209","board-509"],["board-1214","board-514"],["board-1219","board-519"],["board-1224","board-524"],["board-1229","board-529"],["board-1234","board-534"],["board-1299","board-751"],["board-1304","board-756"],["board-1309","board-761"],["board-1314","board-766"],["board-1319","board-771"],["board-1324","board-776"],["board-1329","board-781"],["board-1334","board-786"],["board-1339","board-791"],["board-1344","board-796"],["board-1349","board-801"],["board-1354","board-806"],["board-1359","board-811"],["board-1364","board-816"],["board-1166","board-469"],["board-1171","board-474"],["board-1176","board-479"],["board-1181","board-484"],["board-1186","board-489"],["board-1191","board-494"],["board-1196","board-499"],["board-1201","board-504"],["board-1206","board-509"],["board-1211","board-514"],["board-1216","board-519"],["board-1221","board-524"],["board-1226","board-529"],["board-1231","board-534"],["board-1236","board-608"],["board-1294","board-387"],["board-1164","board-319"],["board-1162","board-1164"],["board-1238","board-1236"],["board-1296","board-1294"],["board-1301","board-823"],["board-1306","board-830"],["board-1311","board-837"],["board-1316","board-844"],["board-1321","board-851"],["board-1326","board-858"],["board-1331","board-865"],["board-1336","board-872"],["board-1341","board-879"],["board-1346","board-886"],["board-1351","board-893"],["board-1356","board-900"],["board-1361","board-907"],["board-1366","board-914"],["board-1370","board-661"],["board-1368","board-1370"],["board-1290","board-1162"],["board-1291","board-1181"],["board-1292","board-1211"],["board-1422","board-1294"],["board-1423","board-1314"],["board-1424","board-1344"],["board-1287","board-1162"],["board-1288","board-1186"],["board-1289","board-1216"],["board-1419","board-1294"],["board-1420","board-1319"],["board-1421","board-1349"],["board-1284","board-1162"],["board-1285","board-484"],["board-1286","board-514"],["board-1416","board-1294"],["board-1417","board-766"],["board-1418","board-796"],["board-1281","board-1162"],["board-1282","board-489"],["board-1283","board-519"],["board-1413","board-1294"],["board-1414","board-771"],["board-1415","board-801"],["board-1298","board-749"],["board-1303","board-754"],["board-1308","board-759"],["board-1313","board-764"],["board-1318","board-769"],["board-1323","board-774"],["board-1328","board-779"],["board-1333","board-784"],["board-1338","board-789"],["board-1343","board-794"],["board-1348","board-799"],["board-1353","board-804"],["board-1358","board-809"],["board-1363","board-814"],["board-1168","board-467"],["board-1173","board-472"],["board-1178","board-477"],["board-1183","board-482"],["board-1188","board-487"],["board-1193","board-492"],["board-1198","board-497"],["board-1203","board-502"],["board-1208","board-507"],["board-1213","board-512"],["board-1218","board-517"],["board-1223","board-522"],["board-1228","board-527"],["board-1233","board-532"],["board-1278","board-317"],["board-1279","board-1181"],["board-1280","board-1211"],["board-1410","board-384"],["board-1411","board-1313"],["board-1412","board-1343"],["board-1275","board-317"],["board-1276","board-1186"],["board-1277","board-1216"],["board-1407","board-382"],["board-1408","board-1318"],["board-1409","board-1348"],["board-1272","board-1162"],["board-1273","board-1181"],["board-1274","board-1211"],["board-1404","board-1294"],["board-1405","board-1313"],["board-1406","board-1343"],["board-1269","board-1162"],["board-1270","board-1186"],["board-1271","board-1216"],["board-1401","board-1294"],["board-1402","board-1318"],["board-1403","board-1348"],["board-1266","board-1162"],["board-1267","board-1181"],["board-1268","board-1211"],["board-1398","board-1294"],["board-1399","board-1313"],["board-1400","board-1343"],["board-1263","board-1162"],["board-1264","board-1186"],["board-1265","board-1216"],["board-1395","board-1294"],["board-1396","board-1318"],["board-1397","board-1348"],["board-1161","board-1162"],["board-1165","board-1166"],["board-1170","board-1171"],["board-1175","board-1176"],["board-1180","board-1181"],["board-1185","board-1186"],["board-1190","board-1191"],["board-1195","board-1196"],["board-1200","board-1201"],["board-1205","board-1206"],["board-1210","board-1211"],["board-1215","board-1216"],["board-1220","board-1221"],["board-1225","board-1226"],["board-1230","board-1231"],["board-1235","board-617"],["board-697","board-1235"],["board-698","board-697"],["board-1293","board-1161"],["board-407","board-1293"],["board-408","board-407"],["board-1297","board-1165"],["board-1302","board-1170"],["board-1307","board-1175"],["board-1312","board-1180"],["board-1317","board-1185"],["board-1322","board-1190"],["board-1327","board-1195"],["board-1332","board-1200"],["board-1337","board-1205"],["board-1342","board-1210"],["board-1347","board-1215"],["board-1352","board-1220"],["board-1357","board-1225"],["board-1362","board-1230"],["board-1367","board-1235"],["board-1260","board-397"],["board-1261","board-1180"],["board-1262","board-1210"],["board-1392","board-399"],["board-1393","board-1312"],["board-1394","board-1342"],["board-1257","board-400"],["board-1258","board-1185"],["board-1259","board-1215"],["board-1389","board-402"],["board-1390","board-1317"],["board-1391","board-1347"],["board-1163","board-334"],["board-1167","board-1165"],["board-1172","board-1170"],["board-1177","board-1175"],["board-1182","board-1180"],["board-1187","board-1185"],["board-1192","board-1190"],["board-1197","board-1195"],["board-1202","board-1200"],["board-1207","board-1205"],["board-1212","board-1210"],["board-1217","board-1215"],["board-1222","board-1220"],["board-1227","board-1225"],["board-1232","board-1230"],["board-1237","board-1235"],["board-1295","board-1161"],["board-1300","board-1165"],["board-1305","board-1170"],["board-1310","board-1175"],["board-1315","board-1180"],["board-1320","board-1185"],["board-1325","board-1190"],["board-1330","board-1195"],["board-1335","board-1200"],["board-1340","board-1205"],["board-1345","board-1210"],["board-1350","board-1215"],["board-1355","board-1220"],["board-1360","board-1225"],["board-1365","board-1230"],["board-1369","board-694"],["board-1254","board-1161"],["board-1255","board-1180"],["board-1256","board-1210"],["board-1386","board-1293"],["board-1387","board-1312"],["board-1388","board-1342"],["board-1251","board-1161"],["board-1252","board-1185"],["board-1253","board-1215"],["board-1383","board-1293"],["board-1384","board-1317"],["board-1385","board-1347"],["board-1248","board-1161"],["board-1249","board-1180"],["board-1250","board-1210"],["board-1380","board-1293"],["board-1381","board-1312"],["board-1382","board-1342"],["board-1245","board-1161"],["board-1246","board-1185"],["board-1247","board-1215"],["board-1377","board-1293"],["board-1378","board-1317"],["board-1379","board-1347"],["board-1242","board-1161"],["board-1243","board-1180"],["board-1244","board-1210"],["board-1374","board-1293"],["board-1375","board-1312"],["board-1376","board-1342"],["board-1239","board-1161"],["board-1240","board-1185"],["board-1241","board-1215"],["board-1371","board-1293"],["board-1372","board-1317"],["board-1373","board-1347"]]};var Wo={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"8e03105a7b941f5381a960ce2271d630247b213b73659c4d41fa97ed3dc36ad6",totalBoards:1363,installedPieces:1424,material:{lengthM:2430.19333333,fullBoardEquivalents:972.077333332,fullBoards:973,sheets:195},families:[{id:"standard",name:"Deska zwyk\u0142a",count:901,variants:[{id:"standard-1",count:165,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:406,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:71,modules:4,ending:!1,lengthM:1.6846666666666668,preview:{stockId:"stock-311",positions:[-.842333,-.12,-.009,-.842333,0,-.009,-.824333,0,-.009,.842333,0,-.009,.842333,-.12,-.009,.425667,.12,-.009,.806333,.12,-.009,.806333,0,-.009,.009,.12,-.009,.389667,.12,-.009,.389667,0,-.009,-.407667,.12,-.009,-.027,.12,-.009,-.027,0,-.009,-.824333,.12,-.009,-.443667,.12,-.009,-.443667,0,-.009,.425667,0,-.009,.009,0,-.009,-.407667,0,-.009,-.824333,0,.009,-.842333,0,.009,-.842333,-.12,.009,.842333,-.12,.009,.842333,0,.009,.806333,0,.009,.806333,.12,.009,.425667,.12,.009,.389667,0,.009,.389667,.12,.009,.009,.12,.009,-.027,0,.009,-.027,.12,.009,-.407667,.12,.009,-.443667,0,.009,-.443667,.12,.009,-.824333,.12,.009,.425667,0,.009,.009,0,.009,-.407667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6846666666666668}},{id:"standard-4",count:169,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-5",count:82,modules:3,ending:!1,lengthM:1.268,preview:{stockId:"stock-45",positions:[-.634,-.12,-.009,-.634,0,-.009,-.598,0,-.009,.634,0,-.009,.634,-.12,-.009,.235333,.12,-.009,.616,.12,-.009,.616,0,-.009,-.181333,.12,-.009,.199333,.12,-.009,.199333,0,-.009,-.598,.12,-.009,-.217333,.12,-.009,-.217333,0,-.009,.235333,0,-.009,-.181333,0,-.009,-.598,0,.009,-.634,0,.009,-.634,-.12,.009,.634,-.12,.009,.634,0,.009,.616,0,.009,.616,.12,.009,.235333,.12,.009,.199333,0,.009,.199333,.12,.009,-.181333,.12,.009,-.217333,0,.009,-.217333,.12,.009,-.598,.12,.009,.235333,0,.009,-.181333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.268}},{id:"standard-6",count:8,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-336",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"Deska zako\u0144czeniowa",count:462,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1197",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:26,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-385",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:51,modules:5,ending:!0,lengthM:1.8253333333333335,preview:{stockId:"stock-3",positions:[-.912667,-.12,-.009,-.912667,0,-.009,-.894667,0,-.009,.772,.12,-.009,.912667,.12,-.009,.912667,-.12,-.009,.355333,.12,-.009,.736,.12,-.009,.736,0,-.009,-.061333,.12,-.009,.319333,.12,-.009,.319333,0,-.009,-.478,.12,-.009,-.097333,.12,-.009,-.097333,0,-.009,-.894667,.12,-.009,-.514,.12,-.009,-.514,0,-.009,.772,0,-.009,.355333,0,-.009,-.061333,0,-.009,-.478,0,-.009,-.894667,0,.009,-.912667,0,.009,-.912667,-.12,.009,.912667,-.12,.009,.912667,.12,.009,.772,.12,.009,.736,0,.009,.736,.12,.009,.355333,.12,.009,.319333,0,.009,.319333,.12,.009,-.061333,.12,.009,-.097333,0,.009,-.097333,.12,.009,-.478,.12,.009,-.514,0,.009,-.514,.12,.009,-.894667,.12,.009,.772,0,.009,.355333,0,.009,-.061333,0,.009,-.478,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8253333333333335}},{id:"ending-4",count:70,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-310",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-5",count:193,modules:4,ending:!0,lengthM:1.4086666666666667,preview:{stockId:"stock-1",positions:[-.704333,-.12,-.009,-.704333,.12,-.009,-.563667,.12,-.009,.704333,0,-.009,.704333,-.12,-.009,.305667,.12,-.009,.686333,.12,-.009,.686333,0,-.009,-.111,.12,-.009,.269667,.12,-.009,.269667,0,-.009,-.527667,.12,-.009,-.147,.12,-.009,-.147,0,-.009,-.563667,0,-.009,.305667,0,-.009,-.111,0,-.009,-.527667,0,-.009,-.563667,.12,.009,-.704333,.12,.009,-.704333,-.12,.009,.704333,-.12,.009,.704333,0,.009,.686333,0,.009,.686333,.12,.009,.305667,.12,.009,.269667,0,.009,.269667,.12,.009,-.111,.12,.009,-.147,0,.009,-.147,.12,.009,-.527667,.12,.009,-.563667,0,.009,.305667,0,.009,-.111,0,.009,-.527667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4086666666666667}},{id:"ending-6",count:104,modules:3,ending:!0,lengthM:.992,preview:{stockId:"stock-43",positions:[-.496,-.12,-.009,-.496,.12,-.009,-.355333,.12,-.009,.496,0,-.009,.496,-.12,-.009,.097333,.12,-.009,.478,.12,-.009,.478,0,-.009,-.319333,.12,-.009,.061333,.12,-.009,.061333,0,-.009,-.355333,0,-.009,.097333,0,-.009,-.319333,0,-.009,-.355333,.12,.009,-.496,.12,.009,-.496,-.12,.009,.496,-.12,.009,.496,0,.009,.478,0,.009,.478,.12,.009,.097333,.12,.009,.061333,0,.009,.061333,.12,.009,-.319333,.12,.009,-.355333,0,.009,.097333,0,.009,-.319333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:.992}}]}]};var Us=i=>`${i.toLocaleString("pl-PL")} szt.`,dh=i=>`${i.toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function Gr(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function Zf(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function Jf(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var an=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function $f(i,e,t){let n=Gr(e);i.classList.add("parts-catalogue");let r=an("div","parts-catalogue-heading");r.append(an("h4",null,"Rodzaje desek"),an("span","parts-catalogue-total",Us(e.totalBoards)));let s=an("p","parts-catalogue-lead","Deski w Twoim zestawie. Wybierz rodzaj i d\u0142ugo\u015B\u0107."),o=an("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Rodzaje desek");let a=an("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","D\u0142ugo\u015Bci i ilo\u015Bci");let l=an("div","parts-variant-heading"),c=an("h5"),d=an("span");l.append(c,d),i.replaceChildren(l,a,r,s,o);function u(p,m=!0){n.variant=p;for(let x of a.children)x.setAttribute("aria-pressed",String(x.dataset.partsVariant===p));t({...n},m)}function h(p,m=!0){n.family=p;let x=e.families.find(f=>f.id===p);for(let f of o.children)f.setAttribute("aria-pressed",String(f.dataset.partsFamily===p));c.textContent=x.name,d.textContent=`${Us(x.count)} \u0142\u0105cznie`;let g=x.variants.map(f=>{let S=an("button","parts-variant");return S.type="button",S.dataset.partsVariant=f.id,S.append(an("span",null,dh(f.lengthM)),an("strong",null,Us(f.count))),S.addEventListener("click",()=>u(f.id)),S});a.replaceChildren(...g),u(x.variants[0].id,m)}for(let p of e.families){let m=an("button","parts-family");m.type="button",m.dataset.partsFamily=p.id;let x=an("span","parts-family-count");x.append(an("strong",null,Us(p.count)),an("small",null,"\u0142\u0105cznie")),m.append(an("span","parts-family-name",p.name),x),m.addEventListener("click",()=>h(p.id)),o.append(m)}return h(n.family,!1),{getSelection:()=>({...n})}}function Kf(i,e=Gr(i)){let{family:t,variant:n}=Zf(i,e),r=new ke,s=[n.preview],o=new Ct({color:"#43948c",roughness:.75,side:Lt,flatShading:!0}),a=new en({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(l=>{let c=new mt;c.setAttribute("position",new ct(l.positions,3)),c.setIndex(l.indices),c.computeVertexNormals();let d=new lt(c,o);d.add(new Gt(new Wt(c,30),a)),r.add(d)}),{root:r,direction:new D(.12,.65,3),annotation:`${t.name} \xB7 ${dh(n.lengthM)} \xB7 ${Us(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(l=>l.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var uh=Wo,hh=(...i)=>new D(...i),fh=[{title:"Punktem wyj\u015Bcia jest projekt budynku.",text:"Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od uk\u0142adu pomieszcze\u0144, wymiar\xF3w i za\u0142o\u017Ce\u0144 konkretnej inwestycji.",label:"Na wej\u015Bciu",items:["Rzuty kondygnacji","Wymiary i wysoko\u015Bci","Za\u0142o\u017Cenia inwestycji"]},{title:"Model AI Combstruct automatycznie generuje projekt konstrukcji.",text:"Na podstawie rzut\xF3w budynku dobiera uk\u0142ad desek i po\u0142\u0105cze\u0144. Pod\u0142oga, \u015Bciany, stropy i dach powstaj\u0105 we wsp\xF3lnym modelu 3D \u2014 z identyfikatorem i miejscem monta\u017Cu ka\u017Cdej cz\u0119\u015Bci.",label:"W jednym modelu",items:["Konstrukcja dopasowana do modu\u0142\xF3w systemu","Sp\xF3jny uk\u0142ad element\xF3w i po\u0142\u0105cze\u0144","Dane do produkcji i monta\u017Cu"]},{title:"Dok\u0142adnie wiadomo, co wyprodukowa\u0107.",text:"Z modelu powstaje precyzyjne zam\xF3wienie: rodzaje desek, wymiary, ilo\u015Bci i oznaczenia. Te same dane prowadz\u0105 od rozkroju p\u0142yt do przygotowania pakiet\xF3w na budow\u0119.",label:"Dla produkcji",items:["Wykaz cz\u0119\u015Bci, materia\u0142 i ilo\u015Bci","Rozkr\xF3j p\u0142yt i oznaczenia element\xF3w","Podzia\u0142 na pakiety do monta\u017Cu"]},{title:"Ka\u017Cdy element trafia na swoje miejsce.",text:"Oznaczone cz\u0119\u015Bci i ich miejsca we wsp\xF3lnym modelu u\u0142atwiaj\u0105 organizacj\u0119 budowy. Wykonawca wie, od czego zacz\u0105\u0107 i co do\u0142o\u017Cy\u0107 dalej. Ten sam system wspiera monta\u017C z ekip\u0105 i DIY.",label:"Na budowie",items:["Elementy oznaczone identyfikatorami","Czytelna kolejno\u015B\u0107 monta\u017Cu","DIY lub monta\u017C z ekip\u0105"]}];function Q_(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new mi(t);r.colorSpace=Vt;let s=new Er(new ji({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function wc(i,e=Gr(Wo)){if(i===2){let y=Kf(Wo,e);return{...y,getManufacturingState:()=>({stage:i,...y.getPartsState(),example:Wo.name})}}let t=Hr(),n=t.dimensions,r=new ke;r.name="Combstruct Flow";let s=new Ct({color:"#c49b62",roughness:.85}),o=new Ct({color:"#43948c",roughness:.75}),a=new Ct({color:"#33493e",roughness:.85}),l=new en({color:"#66543a",transparent:!0,opacity:.45}),c=(y,N,P,L,F,k,O=a)=>{let z=new lt(new on(y,N,P),O);return z.position.set(L,F,k),r.add(z),z},d=(y,N=s)=>{let P=new lt(y,N);return P.add(new Gt(new Wt(y,30),l)),r.add(P),P},u=(y,N,P,L,F)=>{let k=Q_(y,F);k.position.set(N,P,L),r.add(k)};if(i===0){let y=new Ct({color:"#ffffff",roughness:1});c(n.width+1.8,.065,n.depth+1.8,0,-.085,0,y);for(let N of t.wallPanels){let P=[N.start,N.end,...N.holes.flatMap(L=>N.axis===0?[L.world.x0,L.world.x1]:[L.world.z0,L.world.z1])].sort((L,F)=>L-F);for(let L=1;L<P.length;L++){let F=P[L-1],k=P[L],O=(F+k)/2;k-F<.001||N.holes.some(z=>O>(N.axis===0?z.world.x0:z.world.z0)&&O<(N.axis===0?z.world.x1:z.world.z1))||(N.axis===0?c(k-F,.18,N.depth,O,.06,N.fixed):c(N.depth,.18,k-F,N.fixed,.06,O))}for(let L of N.holes){let F=N.axis===0?L.world.x0:L.world.z0,k=N.axis===0?L.world.x1:L.world.z1;L.kind==="window"&&(N.axis===0?c(k-F,.035,.035,(F+k)/2,.025,N.fixed,o):c(.035,.035,k-F,N.fixed,.025,(F+k)/2,o))}}for(let N of t.rooms)u(N.name,(N.x0+N.x1)/2,.26,(N.z0+N.z1)/2,N.id==="living"?3.5:3.2);return u(`${n.width.toFixed(2).replace(".",",")} m`,0,.03,n.halfDepth+.56,2.9),u(`${n.depth.toFixed(2).replace(".",",")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:hh(.15,7,3.5),annotation:"Przyk\u0142ad: rzut Combstruct 30"}}let h=new Map(t.boards.map(y=>[y.id,y])),p=Ns.assembly.map(([y])=>h.get(y));if(p.length!==t.boards.length||p.some(y=>!y)||new Set(p).size!==p.length)throw new Error("Regenerate the assembly schedule for the current model");let m=[],x=[],g=[],f=[],S=0,M=0;for(let y of p){let N=y.mesh.geometry.index?y.mesh.geometry.toNonIndexed():y.mesh.geometry.clone();N.translate(...y.mesh.position.toArray()),m.push(N);let P=new Wt(N,30);x.push(P),S+=N.attributes.position.count,M+=P.attributes.position.count,g.push(S),f.push(M)}let v=ko(m,!1),C=ko(x,!1);m.forEach(y=>y.dispose()),x.forEach(y=>y.dispose());let E=new lt(v,s),T=new Gt(C,l);r.add(E,T);let b=p.length;if(i===1){let y=p.find(L=>L.surface==="front"&&L.axis===1&&L.index===9)||p[150],N=y.mesh.geometry.clone().translate(...y.mesh.position.toArray());d(N,o);let P=y.bounds.getCenter(hh());u(Go(y).id,P.x,P.y+.45,P.z+.25,1.4)}return{root:r,direction:hh(1.4,1,1.5),annotation:i===1?"Combstruct 30 \xB7 cyfrowy model element\xF3w":"Przesu\u0144 suwak i zobacz kolejno\u015B\u0107 monta\u017Cu",assembly(y){b=Math.max(0,Math.min(p.length,Math.round(y*p.length))),v.setDrawRange(0,g[b-1]||0),C.setDrawRange(0,f[b-1]||0)},getManufacturingState(){return{stage:i,totalBoards:p.length,visibleBoards:b,lastBoard:p[b-1]?.id||null,lastSupport:Ns.assembly[b-1]?.[1]||null,example:"Combstruct 30"}}}}function ph(i){return[!1,!0].map(t=>{let n=a=>t?{start:"end",end:"start",left:"right",right:"left"}[a]:a,r=(i.connectorCuts||[]).map(a=>[n(a.end),a.edge,a.offset||0,a.width,a.removedRun].join(":")).sort(),s=_c(i.stock),o=[s.extendStart||0,s.extendEnd||0,s.extraStartTrim||0,s.extraEndTrim||0];return t&&([o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]),JSON.stringify([i.stock.pixels,i.trim?n(i.trim):null,r,...o.some(Boolean)?[o]:[]])}).sort()[0]}var Ni=(...i)=>new D(...i),mh=1e-5;function gh(i,e){let t=i.attributes.position,n=1/0,r=-1/0;for(let s=0;s<t.count;s++){let o=t.getX(s)*e[0]+t.getY(s)*e[1]+t.getZ(s)*e[2];n=Math.min(n,o),r=Math.max(r,o)}return r-n}function ep(i){if(i.custom||i.stock.pixels<2||i.connectorCuts.length)return!1;let[e,t]=ei(i.stock,!1),n=i.mesh.geometry;return Math.abs(gh(n,i.along)-(t-e))<mh&&Math.abs(gh(n,i.normal)-bc)<mh&&Math.abs(gh(n,i.thick)-Is)<mh}function tp(i,e){return e.slice(0,-1).map((t,n)=>{let r=[];for(let s=t;s<e[n+1]&&r.length<4;s++)ep(i[s])&&r.push(s);if(r.length!==4)throw new Error("Missing complete native boards for the robot demonstration: "+n);return r})}function Qf(i){if(!ep(i))throw new Error("Robot pickup requires a complete native board: "+i.id);let e=Ni(...i.along).normalize(),t=Ni(...i.normal).normalize(),n=new ot().makeBasis(e,t,e.clone().cross(t)),s=new ot().makeBasis(Ni(1,0,0),Ni(0,0,1),Ni(0,-1,0)).multiply(n.invert()),o=new Qt().setFromRotationMatrix(s).invert(),a=i.bounds.getCenter(Ni()),l=i.mesh.geometry.clone().translate(...i.mesh.position.toArray()).translate(-a.x,-a.y,-a.z).applyMatrix4(s);l.computeBoundingBox();let c=l.boundingBox.getCenter(Ni());l.translate(-c.x,-c.y,-c.z),a.add(c.applyQuaternion(o));let d=JSON.parse(ph(i)),u=_c(i.stock),h=[u.extendStart||0,u.extendEnd||0,u.extraStartTrim||0,u.extraEndTrim||0];if((i.trim||null)!==d[1]||JSON.stringify(h)!==JSON.stringify(d[3]||[0,0,0,0])){let p=new Qt().setFromAxisAngle(Ni(0,0,1),Math.PI);l.applyQuaternion(p),o.multiply(p.clone().invert())}return l.computeBoundingBox(),{geometry:l,target:a,rotation:o,dimensions:l.boundingBox.getSize(Ni()).toArray()}}function np(i,e){let t=new Map,n=e.flat().map(o=>{let a=i[o],l=ph(a);t.has(l)||t.set(l,{key:l,profile:a.trim?"ending":"ordinary",prepared:Qf(a),uses:0});let c=t.get(l);return c.uses++,{index:o,stack:c,prepared:Qf(a)}}),r=[...t.values()].sort((o,a)=>o.profile.localeCompare(a.profile)||a.prepared.dimensions[0]-o.prepared.dimensions[0]),s={ordinary:0,ending:0};for(let o of r)o.column=o.profile==="ordinary"?0:1,o.row=s[o.profile]++,o.id=(o.column===0?"A":"B")+(o.row+1),o.initial=12+o.uses;return{stacks:r,picks:n}}function Xo(i,e){let t=new Map(i.stacks.map(n=>[n.id,n.initial]));for(let n of i.picks.slice(0,e))t.set(n.stack.id,t.get(n.stack.id)-1);return t}var rt=(...i)=>new D(...i),_h=rt(0,1,0),xh=rt(0,0,1),zs=i=>Math.max(0,Math.min(1,i)),ex=i=>(i=zs(i),i*i*(3-2*i)),Ft=(i,e,t)=>ex((i-e)/(t-e)),_n=Qn.lerp,ii=(i,e=0)=>new Ct({color:i,metalness:e,roughness:e?.36:.76}),qo={factory:{title:"Fabryka lights-off",duration:42,steps:[{at:0,label:"Podanie p\u0142yty",title:"P\u0142yta wje\u017Cd\u017Ca. Proces rusza.",text:"Magazyn podaje kolejn\u0105 p\u0142yt\u0119 OSB, MFP lub sklejki. Rolki prowadz\u0105 j\u0105 do rozkroju, a docisk utrzymuje pozycj\u0119 materia\u0142u."},{at:.15,label:"Pi\u0119\u0107 desek",title:"Jedna p\u0142yta. Pi\u0119\u0107 desek.",text:"Rozkr\xF3j wzd\u0142u\u017C d\u0142u\u017Cszej kraw\u0119dzi daje pi\u0119\u0107 prostych desek. Na tym etapie nie maj\u0105 jeszcze wpust\xF3w."},{at:.31,label:"Obr\xF3t na sztorc",title:"D\u0142u\u017Csz\u0105 kraw\u0119dzi\u0105 do g\xF3ry.",text:"Kaseta obrotowa stawia deski na d\u0142u\u017Cszych kraw\u0119dziach. Prowadnice i dociski utrzymuj\u0105 je pionowo przed frezowaniem."},{at:.47,label:"Frezowanie",title:"Siedem frez\xF3w. Jeden przejazd.",text:"Frezy pracuj\u0105 w jednej linii wzd\u0142u\u017C deski, na sta\u0142ej wysoko\u015Bci. Deski przeje\u017Cd\u017Caj\u0105 pod nimi na sztorc, jedna za drug\u0105. Pe\u0142ne wpusty i p\xF3\u0142wpusty na ko\u0144cach powstaj\u0105 w jednym przej\u015Bciu."},{at:.64,label:"Kontrola i ID",title:"Ka\u017Cda deska ma swoje miejsce.",text:"Stanowisko kontroli sprawdza profil, a znakowanie \u0142\u0105czy element z jego identyfikatorem w modelu budynku."},{at:.8,label:"Zestaw monta\u017Cowy",title:"Gotowe do kolejnego etapu.",text:"Deski trafiaj\u0105 do oznaczonego pakietu. Zestawy s\u0105 porz\u0105dkowane wed\u0142ug projektu i kolejno\u015Bci monta\u017Cu."}]},site:{title:"Robotyczny monta\u017C",duration:60,steps:[{at:0,label:"Pod\u0142oga",title:"Wybierz. Pobierz. Osad\u017A.",text:"Model wskazuje potrzebny profil i d\u0142ugo\u015B\u0107. Robot sam wybiera w\u0142a\u015Bciwy stos, pobiera z niego desk\u0119 i montuje j\u0105 w konstrukcji. Bez r\u0119cznego podawania cz\u0119\u015Bci w kolejno\u015Bci."},{at:.2,label:"\u015Aciany",title:"Ten sam element. Kolejny kierunek.",text:"Obrotowy chwytak ustawia desk\u0119 pionowo. Suwnica dociera nad kolejne \u017Cebra, zachowuj\u0105c dost\u0119p do wn\u0119trza budynku."},{at:.4,label:"Strop",title:"Monta\u017C prowadzony przez model.",text:"Po przygotowaniu podp\xF3r robot uk\u0142ada \u017Cebra stropu. Ka\u017Cdy pokazywany element ma identyfikator i docelow\u0105 pozycj\u0119 w konstrukcji."},{at:.6,label:"Dach",title:"Tak\u017Ce pod k\u0105tem po\u0142aci.",text:"Chwytak obraca desk\u0119 do orientacji dachu. Wsp\xF3lny model prowadzi od pakietu cz\u0119\u015Bci do kolejnego po\u0142\u0105czenia."},{at:.8,label:"Konstrukcja",title:"Jedna konstrukcja. Jeden zestaw danych.",text:"Pod\u0142oga, \u015Bciany, strop i dach powstaj\u0105 z tego samego systemu. Robot korzysta z danych przygotowanych dla produkcji i monta\u017Cu."}]}};function dt(i,e,t,n,r,s,o,a){let l=new lt(new on(e,t,n),a);return l.position.set(r,s,o),i.add(l),l}function Ln(i,e,t,n,r,s=_h){let o=new lt(new Ii(e,e,t,16),r);return o.position.copy(n),o.quaternion.setFromUnitVectors(_h,s),i.add(o),o}function Fs(i,e){let t=new lt(i,e);return t.add(new Gt(new Wt(i,30),new en({color:"#5b4632",transparent:!0,opacity:.5}))),t}function Ui(i,e,t,n,r,s=2,o="#dceae4"){let a=document.createElement("canvas");a.width=768,a.height=96;let l=a.getContext("2d");l.font="500 37px Helvetica Neue, Arial, sans-serif",l.textAlign="center",l.fillStyle=o,l.fillText(e,384,61);let c=new mi(a);c.colorSpace=Vt;let d=new Er(new ji({map:c,depthTest:!1}));return d.scale.set(s,s/8,1),d.position.set(t,n,r),i.add(d),d}function bh(i,e,t,n,r){dt(i,t,.15,2.85,e,.74,0,r);for(let s=-t/2+.12;s<t/2;s+=.27)Ln(i,.055,2.75,rt(e+s,.86,0),n,xh);for(let s of[-1.48,1.48]){dt(i,t,.17,.09,e,.78,s,n);for(let o of[-t/2+.16,t/2-.16])dt(i,.1,.76,.1,e+o,.36,s,r)}}function Ec(i,e,t,n,r){for(let s of[-t/2,t/2])dt(i,.18,n,.18,e,n/2,s,r);dt(i,.28,.24,t+.18,e,n,0,r)}function tx(){let i=new ke,e=ii("#8fa4a8",.6),t=ii("#30474b",.35),n=ii("#cba36b"),r=ii("#398d7d",.35),s=ii("#17282b"),o=new Ct({color:"#e3f3ed",emissive:"#a7e1cc",emissiveIntensity:1.5});dt(i,22,.18,7,0,-.2,0,s),bh(i,-6.3,5.3,e,t),bh(i,-.7,5.4,e,t),bh(i,4.5,4.3,e,t);for(let R=0;R<10;R++)dt(i,1.25,Je,2.5,-8.2,.98+R*.024,0,n);Ec(i,-8.2,3.35,2.7,t),dt(i,3.5,.09,.12,-7.8,2.67,0,e);let a=new ke;i.add(a),dt(a,1,.09,1.6,0,0,0,e);for(let R of[-.38,.38])for(let q of[-.56,.56])Ln(a,.07,.16,rt(R,-.1,q),t);let l=dt(i,.08,1,.08,-8.2,2,0,e),c=Fs(new on(1.25,Je,2.5),n);i.add(c);let d=new ke;i.add(d);let u=[],h=[],p=1.05,m=20,x=.65,g=.47,f=7.48,S=new ot().makeBasis(xh,_h,rt(-1,0,0)),M=Mc(6).applyMatrix4(S).translate(0,_t/2,-3*Ce);for(let R=0;R<5;R++){let q=new ke;d.add(q),u.push(q);let Y=Fs(new on(.24,Je,2.5),n);q.add(Y);let ae=new ke;i.add(ae),ae.visible=!1;let me=Fs(new on(Je,_t,6*Ce).translate(0,_t/2,0),n),ue=Fs(M.clone(),n);ae.add(me,ue);let te=[];for(let se=0;se<7;se++){let V=Math.max(0,se*Ce-Je),oe=Math.min(6*Ce,se*Ce+Je);te.push(dt(ae,Je,_t/2,oe-V,0,3*_t/4,(V+oe)/2-3*Ce,n))}let le=new ke;ae.add(le);for(let se of[-.92,.92]){dt(le,.15,.045,.14,0,-.0225,se,r);for(let V of[-1,1])dt(le,.025,.085,.14,V*(Je/2+.0125),.02,se,t)}h.push({group:ae,raw:me,finished:ue,chips:te,saddle:le})}Ec(i,-4.65,3.4,2.45,t);let v=new ke;i.add(v),dt(v,1.5,.16,.22,0,0,0,e);let C=dt(i,.09,1,.09,-4.65,2,0,e);for(let R=0;R<4;R++){let q=Ln(v,.2,.012,rt((R-1.5)*.25,-.17,0),e,rt(1,0,0));q.userData.saw=!0}for(let R of[-5.36,-3.95])Ln(i,.075,2.6,rt(R,1.06,0),t,xh);let E=[];for(let R=0;R<5;R++){let q=new ke;i.add(q);for(let Y of[-.92,.92])dt(q,.29,.055,.14,0,-.033,Y,r),dt(q,.03,.15,.14,-.135,.015,Y,t);E.push(q)}Ec(i,p,3.45,2.8,t);let T=new ke;i.add(T),T.position.set(p,1.36,0),dt(T,.3,.2,2.95,0,.27,0,e);for(let R of[-1.46,1.46])dt(i,.12,1.07,.12,p,2.265,R,e);let b=[];for(let R=0;R<7;R++){let q=(R-3)*Ce;Ln(T,.07,.32,rt(0,.04,q),r);let Y=Ln(T,Je,.18,rt(0,-.21,q),e);dt(Y,.004,.17,.004,Je*.75,0,0,t),b.push(Y)}for(let R of[-.92,.92])dt(i,9.4,.055,.16,2.18,.885,R,t);for(let R of[-1.9,2.5])i.add(new Lr(rt(1,0,0),rt(R,.94,1.45),.8,7522734,.17,.1));for(let R of[-4.65,1.05,4.45])dt(i,1.5,.035,.06,R,2.34,-.2,o);Ec(i,4.45,3.25,2.2,e),dt(i,.4,.4,.35,4.45,1.85,0,t);let y=new lt(new Dr(1.35,2.5),new On({color:"#7cd3b5",transparent:!0,opacity:.19,side:Lt,depthWrite:!1}));y.rotation.x=-Math.PI/2,i.add(y);let N=new ke;i.add(N),dt(N,1.5,.14,2.85,0,0,0,n);for(let R of[-1,1])dt(N,1.55,.08,.1,0,-.1,R,t);for(let R of[-.64,.64])for(let q of[-1.24,1.24])dt(N,.1,.86,.1,R,-.5,q,t);let P=[];for(let R of[-.84,.84])P.push(dt(N,.3,.025,.035,0,.07+5*Je+.015,R,r));let L=Ui(i,"C30 \xB7 KIT",7.6,.38,1.9,1.55);Ui(i,"OSB / MFP / Sklejka",-8.1,.07,2.4,3),Ui(i,"5 \xD7",-4.65,.07,2.4,1.4),Ui(i,"7 \xD7",p,1.98,0,1.3),Ui(i,"CNC",p,.07,2.4,1.3),Ui(i,"ID",4.45,.07,2.4,1.1);for(let R of[-4.65,1.05])Ln(i,.12,.7,rt(R,2.75,-1.3),t),dt(i,.58,.5,.48,R,.33,-2.2,t);let F={},k=-8.2;function O(R){R=zs(R);let q=R<.035?-8.2:R<.075?_n(-8.2,-6.8,Ft(R,.035,.075)):R<.1?-6.8:_n(-6.8,-4.65,Ft(R,.1,.15)),Y=R<.035?_n(1.224,1.7,Ft(R,0,.035)):R<.075?1.7:R<.1?_n(1.7,.94,Ft(R,.075,.1)):.94,ae=R<.15?q:R<.31?-4.65:R<g?_n(-4.65,-.75,Ft(R,.31,g)):-.75+m*(R-g);c.visible=R<.22,c.position.set(ae,R<.15?Y:.94,0),a.position.set(R<.1?q:_n(-6.8,-8.2,Ft(R,.1,.15)),R<.1?Y+.19:_n(1.13,2.1,Ft(R,.1,.125)),0),l.scale.y=2.67-a.position.y,l.position.set(a.position.x,(2.67+a.position.y)/2,0),d.visible=R>=.22&&R<.47;let me=Ft(R,.33,.43)*Math.PI/2;for(let se=0;se<5;se++){let V=.94+Math.sin(me)*.12,oe=_n(.25,x,Ft(R,.36,g));u[se].position.set(ae+(se-2)*oe,V,0),u[se].rotation.z=me,E[se].visible=R>=.31&&R<.47,E[se].position.copy(u[se].position),E[se].rotation.z=me}v.position.set(-4.65,R>=.15&&R<.31?1.15:1.68,_n(-1.5,1.5,Ft(R,.15,.29))),C.scale.y=2.45-v.position.y,C.position.set(-4.65,(2.45+v.position.y)/2,v.position.z),b.forEach(se=>se.rotation.y=R*42*45);let ue=[];for(let se=0;se<5;se++){let{group:V,raw:oe,finished:ne,chips:fe,saddle:Te}=h[se],Pe=ae+(se-2)*x,He=R<g?0:zs((Pe-p+Je/2)/Je),Ge=g+(f+.75-(se-2)*x)/m,ce=Ft(R,Ge,Ge+.02),ge=1-He;V.visible=R>=g,oe.visible=He===0,ne.visible=He>0,fe.forEach(re=>{re.visible=He>0&&He<1,re.scale.x=Math.max(.001,ge),re.position.x=-Je/2+ge*Je/2}),V.position.set(Math.min(f,Pe),_n(.94,.89+Je/2+(4-se)*Je,ce),0),V.rotation.z=-ce*Math.PI/2,Te.visible=ce<1,ue.push({id:se+1,x:V.position.x,z:V.position.z,cut:He,slots:He===1?7:0,packed:ce===1})}y.visible=ue.some(se=>Math.abs(se.x-4.45)<.28)&&R>=g,y.position.set(4.45,1.45,0);let te=ue.every(se=>se.packed);k=R<g?ae:h.reduce((se,V)=>se+V.group.position.x+_t/2*Math.sin(-V.group.rotation.z),0)/h.length,N.position.set(7.6,.82,0),P.forEach(se=>se.visible=te),L.visible=te;let le=qo.factory.steps.findLastIndex(se=>R>=se.at);F={process:"factory",progress:R,step:le,blanks:5,orientation:R<g?"flat-to-edge":"on-edge",milledSlots:Math.max(...ue.map(se=>se.slots)),toolApproach:"top",cutterCount:b.length,cutterPositions:b.map(se=>se.getWorldPosition(rt()).toArray()),feedAxis:"x",boardAxis:"z",boards:ue,complete:te}}O(0);let z=new Ht(rt(-10.1,-.2,-2.7),rt(9.1,3.2,2.8));return{root:i,direction:rt(.8,1.25,2.6),overviewDirection:rt(.8,1.25,2.6),detailDirection:rt(2.1,1.6,1.2),focus:z,overview:z,background:"#18292c",annotation:"Koncepcja linii automatycznej",update:O,getRoboticsState:()=>F,getDetailFocus(){let R=Ft(F.progress,.36,.5)*(1-Ft(F.progress,.65,.81)),q=rt(_n(1.8,1.45,R),_n(.95,.58,R),_n(1.65,1.34,R)),Y=rt(k,_n(1.6,1.35,R),0);return new Ht(Y.clone().sub(q),Y.clone().add(q))},dispose(){M.dispose()}}}function nx(){let i=new ke,e=Hr(),t=e.dimensions,n=wc(3);i.add(n.root);let r=new Map(e.boards.map(te=>[te.id,te])),s=Ns.assembly.map(([te])=>r.get(te)),o=te=>{let le=s.findIndex(te);if(le<0)throw Error("Missing construction stage in the robotics example");return le},a=[0,o(te=>te.kind==="wall"&&te.axis===1),o(te=>te.kind==="ceiling"),o(te=>te.kind==="roof-slope"),s.length],l=tp(s,a),c=np(s,l),d=ii("#82969a",.6),u=ii("#36524d",.35),h=ii("#348d7b",.35),p=ii("#cba36b"),m=ii("#e3e9df"),x=-t.halfWidth-1.5,g=t.halfWidth+1.5,f=-t.halfDepth-t.terraceDepth-1.4,S=t.halfDepth+4.2,M=t.roofRidgeY+2.5;dt(i,g-x+2,.12,S-f+1,0,-.15,(f+S)/2,m);for(let te of[x,g]){dt(i,.14,.14,S-f,te,0,(f+S)/2,d);for(let le=f;le<S;le+=.8)dt(i,.55,.09,.22,te,-.04,le,u)}let v=new ke;i.add(v);for(let te of[x,g]){dt(v,.3,M,.3,te,M/2,0,u),dt(v,.65,.3,1.5,te,.2,0,h);for(let le of[-.5,.5])Ln(v,.14,.25,rt(te,.1,le),d,rt(1,0,0))}for(let te of[-.21,.21])dt(v,g-x+.4,.26,.16,0,M,te,d);let C=new ke;v.add(C),dt(C,.6,.3,.72,0,M-.05,0,h);let E=dt(C,.14,1,.14,0,M-.8,0,d),T=new ke;i.add(T),Ln(T,.13,.22,rt(0,0,0),u),Ln(T,.18,.08,rt(0,.12,0),h);let b=new ke;i.add(b),dt(b,.65,.065,.1,0,0,0,u);for(let te of[-.22,.22])Ln(b,.018,.09,rt(te,-.075,0),d),Ln(b,.028,.07,rt(te,-.155,0),u),Ln(b,.032,.01,rt(te,-.191,0),h);let y=new lt(new yo(.11,16,12),d);i.add(y);let N=.16,P=new Map;for(let te of c.stacks){te.position=rt(te.column===0?-1.7:1.7,N,t.halfDepth+1.25+te.row*.53);let le=te.prepared.dimensions[0],se=new ke;se.position.copy(te.position),i.add(se);for(let ne of[-le*.32,le*.32])dt(se,.1,.12,.34,ne,-.06,0,p);let V=[];for(let ne=0;ne<te.initial;ne++){let fe=Fs(te.prepared.geometry,p);fe.position.y=(ne+.5)*Je,se.add(fe),V.push(fe)}let oe=new Gt(new Wt(new on(le+.16,.008,_t+.13)),new en({color:"#2a9b82"}));oe.position.y=-.125,se.add(oe),P.set(te.id,{boards:V,selection:oe,label:null,count:-1})}Ui(i,"Deski zwyk\u0142e",-1.7,.85,t.halfDepth+.65,2.6,"#254331"),Ui(i,"Deski zako\u0144czeniowe",1.7,.85,t.halfDepth+.65,2.6,"#254331");let L=Fs(new on(.01,.01,.01),ii("#379b88"));i.add(L),L.geometry.dispose(),L.children[0].geometry.dispose();let F=new Map(c.picks.map(te=>[te.index,new Wt(te.prepared.geometry,30)])),k=t.roofRidgeY+1.25,O=rt(0,k,S-.6),z=rt(0,.205,-_t/4),R={};function q(te,le){return te.stack.position.clone().add(rt(0,(le.get(te.stack.id)-.5)*Je,0))}function Y(te,le,se){for(let V of c.stacks){let oe=P.get(V.id),ne=te.get(V.id),fe=V.id===le;oe.selection.visible=fe,oe.boards.forEach((Te,Pe)=>{Te.visible=Pe<ne,Te.material=fe&&se&&Pe===ne-1?L.material:p}),oe.count!==ne&&(oe.label&&(i.remove(oe.label),oe.label.material.map.dispose(),oe.label.material.dispose()),oe.label=Ui(i,`${V.id} \xB7 ${V.prepared.dimensions[0].toFixed(2)} m \xB7 ${ne}\xD7`,V.position.x,N+ne*Je+.07,V.position.z+.2,1.65,"#254331"),oe.count=ne)}}function ae(te,le){let se=te.clone().add(z.clone().applyQuaternion(le));v.position.z=se.z,C.position.x=se.x;let V=Math.max(.35,M-se.y-.25);return E.scale.y=V,E.position.y=M-V/2,T.position.copy(se).add(rt(0,.18,0)),b.position.copy(se),b.quaternion.copy(le),y.position.copy(se),se}function me(te){return c.stacks.map(le=>({id:le.id,profile:le.profile,length:le.prepared.dimensions[0],initial:le.initial,remaining:te.get(le.id),position:le.position.toArray()}))}function ue(te){let le=zs(te),se=Math.min(4,Math.floor(le*5)),V=zs(le*5-se);if(se===4){n.assembly(1),L.visible=!1;let Re=Xo(c,c.picks.length);Y(Re,null,!1);let Se=ae(O,new Qt);R={process:"site",progress:le,step:se,installed:s.length,total:s.length,complete:!0,inventory:me(Re),picked:c.picks.length,toolPosition:Se.toArray()};return}let oe=4,ne=Math.min(oe-1,Math.floor(V*oe)),fe=zs(V*oe-ne),Te=se*oe+ne,Pe=c.picks[Te],He=Pe.index,{target:Ge,rotation:ce,geometry:ge,dimensions:re}=Pe.prepared,Me=fe>=.16,I=fe>=.86,We=Xo(c,Te),Ae=Xo(c,Te+(Me?1:0)),Fe=q(Pe,We),ye=c.picks[Te+1],A=ye?q(ye,Xo(c,Te+1)):O.clone().add(rt(0,-.5,0));Y(Ae,Pe.stack.id,!Me),n.assembly((He+(I?1:0))/s.length),L.geometry=ge,L.children[0].geometry=F.get(He);let _=Fe.clone().setY(k),B=Ge.clone().setY(k),K=A.clone().setY(k),de=rt();fe<.16?de.copy(Fe).add(rt(0,_n(.5,0,Ft(fe,0,.16)),0)):fe<.35?de.lerpVectors(Fe,_,Ft(fe,.16,.35)):fe<.6?de.lerpVectors(_,B,Ft(fe,.35,.6)):fe<.86?de.lerpVectors(B,Ge,Ft(fe,.6,.86)):fe<.92?de.lerpVectors(Ge,B,Ft(fe,.86,.92)):fe<.98?de.lerpVectors(B,K,Ft(fe,.92,.98)):de.lerpVectors(K,A.clone().add(rt(0,.5,0)),Ft(fe,.98,1)),L.visible=Me&&!I,L.position.copy(de),L.quaternion.identity().slerp(ce,Ft(fe,.35,.6)*(1-Ft(fe,.92,.98)));let Q=ae(de,L.quaternion);R={process:"site",progress:le,step:se,installed:He+(I?1:0),total:s.length,activeBoard:s[He].id,boardKind:s[He].kind,boardProfile:Pe.stack.profile,boardDimensions:re,nativeStock:!0,pickupGap:Fe.y+ge.boundingBox.min.y-(N+(We.get(Pe.stack.id)-1)*Je),pickupPosition:Fe.toArray(),support:Ns.assembly[He][1],carrying:L.visible,sourceVisible:!Me,phase:fe<.16?"pick":fe<.6?"carry":fe<.86?"place":"release",complete:!1,selectedOperations:!0,selectedStack:Pe.stack.id,nextStack:ye?.stack.id||null,inventory:me(Ae),picked:Te+(Me?1:0),toolPosition:Q.toArray()}}return ue(0),{root:i,direction:rt(1.5,1.15,2),distanceScale:.83,focus:new Ht(rt(x-1,-.2,f-.4),rt(g+.7,M+.35,S+.4)),annotation:"Wybrane operacje \xB7 Combstruct 30",update:ue,getRoboticsState:()=>R,dispose(){for(let te of c.picks)te.prepared.geometry.dispose();for(let te of F.values())te.dispose()}}}function ip(i){return i==="site"?nx():tx()}var Nn=[{id:"deska",group:"Elementy i zasady",title:"Deska grzebieniowa",lead:"Jeden powtarzalny element tworzy pod\u0142og\u0119, \u015Bciany, strop i dach.",text:"Desk\u0119 wycinamy z p\u0142yty OSB, MFP lub sklejki. Wpusty si\u0119gaj\u0105 do po\u0142owy jej wysoko\u015Bci. Dwie deski z\u0142o\u017Cone powierzchniami tworz\u0105 par\u0119, a kr\xF3tsze warianty zachowuj\u0105 ten sam skok modu\u0142u.",rule:"24 cm wysoko\u015Bci. 18 mm grubo\u015Bci jednej deski.",scene:"beam"},{id:"uciaglanie",group:"Elementy i zasady",title:"Para desek i uci\u0105glanie",lead:"Przed\u0142u\u017Camy \u017Cebro, dok\u0142adaj\u0105c kolejne deski w dw\xF3ch warstwach.",text:"\u0141\u0105czenia warstw mijaj\u0105 si\u0119: przy ko\u0144cu deski w jednej warstwie biegnie pe\u0142ny odcinek drugiej. W tym przyk\u0142adzie rozsuni\u0119cie wzd\u0142u\u017C belki wynosi dwa modu\u0142y. Zako\u0144czenie jednej warstwy jest kr\xF3tsze o 24 cm.",rule:"Styki obu warstw nie wypadaj\u0105 w tym samym miejscu.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Elementy i zasady",title:"Pod\u0142oga i strop",lead:"\u017Bebra r\xF3wnoleg\u0142e do kr\xF3tszej kraw\u0119dzi p\u0142yty maj\u0105 wpusty do g\xF3ry.",text:"To sta\u0142a zasada uk\u0142adania. Na modelu wyr\xF3\u017Cnili\u015Bmy t\u0119 rodzin\u0119 \u017Ceber turkusem. \u017Bebra biegn\u0105ce prostopadle maj\u0105 wpusty w przeciwn\u0105 stron\u0119, dzi\u0119ki czemu obie rodziny sk\u0142adaj\u0105 si\u0119 na krzy\u017C.",rule:"Kr\xF3tszy kierunek no\u015Bny \u2014 wpusty do g\xF3ry.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Elementy i zasady",title:"\u015Aciany zewn\u0119trzne",lead:"Pionowe \u017Cebra maj\u0105 wpusty skierowane na zewn\u0105trz domu.",text:"Turkusowe piony pokazuj\u0105 w\u0142a\u015Bciw\u0105 orientacj\u0119. Poziome \u017Cebra \u0142\u0105cz\u0105 si\u0119 z nimi od przeciwnej strony. \u015Aciana zaczyna si\u0119 od poziomu podstawy konstrukcji, a jej zako\u0144czenia tworz\u0105 po\u0142\u0105czenie z pod\u0142og\u0105.",rule:"Piony: wpusty na zewn\u0105trz. Linia \u017Ceber pozostaje ci\u0105g\u0142a.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Elementy i zasady",title:"Dach",lead:"Tak\u017Ce w dachu kr\xF3tszy kierunek p\u0142yty ma wpusty do g\xF3ry.",text:"Na po\u0142aci \u201Edo g\xF3ry\u201D oznacza stron\u0119 pokrycia dachowego. Wyr\xF3\u017Cnione \u017Cebra biegn\u0105 r\xF3wnolegle do kr\xF3tszej kraw\u0119dzi po\u0142aci. Druga rodzina zamyka siatk\u0119 od przeciwnej strony.",rule:"Ta sama zasada co w stropie, obr\xF3cona razem z po\u0142aci\u0105.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Elementy i zasady",title:"Zako\u0144czenia i pe\u0142ny wpust",lead:"Po\u0142\u0105czenie powstaje dzi\u0119ki odpowiednim d\u0142ugo\u015Bciom desek.",text:"Podstawowe zako\u0144czenie jest kr\xF3tsze o 24 cm. Przy po\u0142\u0105czeniu trzech kierunk\xF3w stosujemy pe\u0142ny wpust na ko\u0144cu jednej deski oraz zako\u0144czenie kr\xF3tsze o kolejne 18 mm. Skok pozosta\u0142ych wpust\xF3w pozostaje taki sam.",rule:"Pe\u0142ny wpust 36 mm. Dodatkowe skr\xF3cenie zako\u0144czenia 18 mm.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Po\u0142\u0105czenia",title:"\u017Bebra na krzy\u017C",lead:"Dwie prostopad\u0142e pary wsuwaj\u0105 si\u0119 w siebie przez wpusty.",text:"Ka\u017Cda rodzina oddaje po\u0142ow\u0119 wysoko\u015Bci w miejscu skrzy\u017Cowania. Po z\u0142o\u017Ceniu obie mieszcz\u0105 si\u0119 w jednej warstwie konstrukcyjnej o g\u0142\u0119boko\u015Bci 24 cm. Rozsu\u0144 elementy, aby zobaczy\u0107 obie strony wpustu.",rule:"Wpust do g\xF3ry spotyka wpust do do\u0142u.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",lead:"D\u0142u\u017Csza cz\u0119\u015B\u0107 zako\u0144czenia przylega do boku pe\u0142nego \u017Cebra.",text:"Kr\xF3tsza opiera si\u0119 o \u017Cebro, a d\u0142u\u017Csza schodzi obok niego do poziomu podstawy konstrukcji. Para \u015Bciany i para pod\u0142ogi pozostaj\u0105 w tej samej p\u0142aszczy\u017Anie.",rule:"Pe\u0142na deska i zako\u0144czenie uzupe\u0142niaj\u0105 si\u0119 na 24 cm.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",lead:"Pod\u0142oga mo\u017Ce biec dalej, poza obrys domu.",text:"Jedna warstwa biegnie dalej na taras. W drugiej pe\u0142ny wpust na ko\u0144cu deski i kr\xF3tsze zako\u0144czenie tworz\u0105 miejsce na pion \u015Bciany. Poprzeczne \u017Cebro pod\u0142ogi pozostaje ods\u0142oni\u0119te.",rule:"Ci\u0105g\u0142o\u015B\u0107 tarasu i miejsce na wszystkie trzy kierunki \u017Ceber.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",lead:"\u015Aciana wewn\u0119trzna wchodzi w plaster pod\u0142ogi na tej samej zasadzie.",text:"Pion zaczyna si\u0119 przy podstawie konstrukcji. Jego kr\xF3tsza warstwa opiera si\u0119 na pe\u0142nym \u017Cebrze pod\u0142ogi. W drugiej warstwie d\u0142ugo\u015Bci desek pozostawiaj\u0105 miejsce na \u015Bcian\u0119 i poprzeczne \u017Cebro, bez bocznych wybra\u0144.",rule:"Wsp\xF3lna linia \u017Ceber, bez dodatkowej deski pod \u015Bcian\u0105.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Po\u0142\u0105czenia",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",lead:"Poziome \u017Cebra obu \u015Bcian spotykaj\u0105 si\u0119 w jednej p\u0142aszczy\u017Anie.",text:"Zako\u0144czenia sk\u0142adaj\u0105 si\u0119 naprzemiennie. Jedna deska ko\u0144czy si\u0119 pe\u0142nym wpustem, a s\u0105siednia zako\u0144czeniowa jest kr\xF3tsza o dodatkowe 18 mm. Pion \u015Bciany zewn\u0119trznej mie\u015Bci si\u0119 pomi\u0119dzy nimi.",rule:"Trzeci element wchodzi w ods\u0142oni\u0119ty wpust.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Po\u0142\u0105czenia",title:"Naro\u017Cnik \u015Bcian zewn\u0119trznych",lead:"Dwie \u015Bciany zamykaj\u0105 obrys w naro\u017Cniku.",text:"Poziome pary spotykaj\u0105 si\u0119 naprzemiennie pe\u0142n\u0105 desk\u0105 i zako\u0144czeniem. Ka\u017Cda \u015Bciana zachowuje sw\xF3j kierunek: wpusty jej pionowych \u017Ceber otwieraj\u0105 si\u0119 na zewn\u0105trz budynku.",rule:"Dwie \u015Bciany, wsp\xF3lny poziom par desek.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",lead:"Przegroda poprzeczna dochodzi do ci\u0105g\u0142ej \u015Bciany.",text:"Jedna warstwa przechodzi przez skrzy\u017Cowanie, a druga przyjmuje zako\u0144czenie przegrody. Pe\u0142ny wpust ko\u0144cowy i dodatkowe skr\xF3cenie zako\u0144czenia pozostawiaj\u0105 miejsce na pion. Pary desek zachowuj\u0105 wsp\xF3lne p\u0142aszczyzny.",rule:"Zako\u0144czenie wchodzi w ci\u0105g\u0142\u0105 par\u0119 desek.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",lead:"Strop le\u017Cy na poziomym \u017Cebrze \u015Bciany.",text:"Dolna deska pionowa ko\u0144czy si\u0119 pe\u0142nym wpustem. Pozioma para \u015Bciany przechodzi przez niego, a strop le\u017Cy na jej g\xF3rnej powierzchni. G\xF3rna deska zako\u0144czeniowa zaczyna si\u0119 nad stropem, kr\xF3tsza o dodatkowe 18 mm.",rule:"Strop nie przerywa linii konstrukcji \u015Bciany.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",lead:"Pion dochodzi do stropu w tej samej linii co \u017Cebro pod\u0142ogi.",text:"Strop opiera si\u0119 na g\xF3rnym poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Zako\u0144czenia i pe\u0142ne wpusty pozwalaj\u0105 z\u0142o\u017Cy\u0107 trzy kierunki \u017Ceber bez bocznych wybra\u0144.",rule:"Strop powy\u017Cej poziomego \u017Cebra \u015Bciany.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Po\u0142\u0105czenia",title:"Dach \u2014 \u015Bciana",lead:"D\u0142u\u017Cszy pion tworzy zak\u0142adk\u0119 mi\u0119dzy wpustami dachu.",text:"W jednej warstwie deska dachowa przechodzi przez w\u0119ze\u0142, a kr\xF3tszy pion podpiera j\u0105 skosem. W drugiej d\u0142u\u017Cszy pion zachodzi na jej bok, a deski po\u0142aci dochodz\u0105 do niego z obu stron. Przy wi\u0119kszym nachyleniu dopasowujemy tylko g\xF3rne naro\u017Ca pionu, aby s\u0105siednie wpusty pozosta\u0142y wolne. Bez \u015Bcianki kolankowej klin wype\u0142nia przestrze\u0144 nad stropem. Deska stropowa pozostaje bez skosu, na swoich osiach. Wybierz wariant z okapem lub bez niego, zmie\u0144 k\u0105t i rozsu\u0144 warstwy.",rule:"Dach i strop nad poziomym \u017Cebrem \u015Bciany. Wpusty dachu pozostaj\u0105 dost\u0119pne.",scene:"roof-wall",spread:!0,crossing:!0},{id:"kalenica",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie po\u0142aci w kalenicy",lead:"D\u0142ugie zako\u0144czenia obu po\u0142aci zachodz\u0105 na siebie w dw\xF3ch warstwach.",text:"W pierwszej warstwie d\u0142u\u017Csza deska lewej po\u0142aci przechodzi przez kalenic\u0119, a prawa dochodzi do jej boku. W drugiej warstwie uk\u0142ad jest odwr\xF3cony. Wykorzystujemy istniej\u0105ce profile: ko\u0144ce si\u0119gaj\u0105 do obrysu przeciwnej po\u0142aci, aby uzyska\u0107 mo\u017Cliwie du\u017C\u0105 zak\u0142adk\u0119. Przy mniejszym k\u0105cie lub innym po\u0142o\u017Ceniu wpust\xF3w docinamy tylko ko\u0144c\xF3wki zas\u0142aniaj\u0105ce czynny wpust. \u017Bebra poprzeczne i ich osie zostaj\u0105 na miejscu. Por\xF3wnaj zasad\u0119 po\u0142\u0105czenia z uk\u0142adem wpust\xF3w w modelach 30 i 90, zmie\u0144 k\u0105t i rozsu\u0144 warstwy.",rule:"Pe\u0142na grubo\u015B\u0107 ka\u017Cdej deski. Zak\u0142adka dw\xF3ch warstw zamiast wsp\xF3lnej linii styku.",scene:"ridge",spread:!0,crossing:!0}],Tc=[{id:"standard",name:"Zwyk\u0142a",trim:null,description:"Deska z wpustami i p\xF3\u0142wpustami na ko\u0144cach."},{id:"ending",name:"Zako\u0144czeniowa \xB7 \u2212240 mm",trim:"left",description:"Podstawowe zako\u0144czenie kr\xF3tsze o wysoko\u015B\u0107 deski: 240 mm."},{id:"full-end-slot",name:"Pe\u0142ny wpust ko\u0144cowy \xB7 36 mm",modules:5,extendEnd:.018,description:"Pe\u0142na po\u0142owa ko\u0144ca d\u0142u\u017Csza o 18 mm. Wpust ko\u0144cowy ma 36 mm; pozosta\u0142e wpusty zachowuj\u0105 swoje po\u0142o\u017Cenie."},{id:"ending-short",name:"Zako\u0144czeniowa \xB7 \u2212258 mm",trim:"left",extraStartTrim:.018,description:"Zako\u0144czenie kr\xF3tsze o 240 + 18 mm. Tworzy miejsce na \u017Cebro przy pe\u0142nym wpu\u015Bcie ko\u0144cowym."}];var _e=i=>document.querySelector(i),Fn=i=>[...document.querySelectorAll(i)],Si=_e("#technology-viewport"),cr=_e(".viewport-loading"),Xt="combstruct",vt=Nn.find(i=>i.id==="podloga-strop"),Yo=Tc[0],ri="house",kn=0,rp=Gr(uh),fn={pitch:35,eave:!0,knee:!0,ridgeHouse:"principle"},Nt,Ot,Rt,Fi,ze,yh=0,vh,Vn="factory",Un=0,Hn=!matchMedia("(prefers-reduced-motion: reduce)").matches,Mh=!0,si=0,Sh=-1,Mi=!0,jo=null,dr=(...i)=>new D(...i);function tn(){!yh&&Nt&&(yh=requestAnimationFrame(i=>{if(yh=0,Xt==="robotics"&&Hn&&Mh&&!document.hidden){let e=si?Math.min(.1,(i-si)/1e3):0;Un=Math.min(1,Un+e/qo[Vn].duration),si=i,Un>=1&&(Hn=!1),ks({dt:e})}else si=0;Rt.update(),Nt.render(Fi,Ot),Xt==="robotics"&&Hn&&Mh&&!document.hidden&&tn()}))}function sp(i){let e=i.getCenter(dr()),t=(ze.direction||dr(1.5,1.4,2)).clone().normalize(),n=dr(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(Qn.degToRad(Ot.fov/2)),o=s*Ot.aspect,a=0;for(let l of[i.min.x,i.max.x])for(let c of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let u=dr(l,c,d).sub(e);a=Math.max(a,Math.abs(u.dot(n))/o+u.dot(t),Math.abs(u.dot(r))/s+u.dot(t))}return{center:e,direction:t,distance:Math.max(.8,a*1.14*(ze.distanceScale||1))}}function wh(){return Xt==="robotics"&&Mi&&!!ze?.getDetailFocus}function Zo(){if(!ze||!Nt||!Si.clientWidth||!Si.clientHeight)return;let i=ze.focus||new Ht().setFromObject(ze.root),e=sp(i),{center:t,direction:n,distance:r}=e,s=Rt.enableDamping;if(Rt.enableDamping=!1,Rt.update(),Rt.target.copy(t),Ot.position.copy(t).addScaledVector(n,r),Rt.update(),jo=wh()?e:null,!ze.focus)for(let o=0;o<2;o++){let a=Math.tan(Qn.degToRad(Ot.fov/2));ze.root.updateMatrixWorld(!0),Ot.updateMatrixWorld();let l=1/0,c=-1/0,d=1/0,u=-1/0,h=dr();ze.root.traverseVisible(S=>{if(!S.geometry?.attributes.position)return;let M=S.geometry.attributes.position;for(let v=0;v<M.count;v++)h.fromBufferAttribute(M,v).applyMatrix4(S.matrixWorld).project(Ot),l=Math.min(l,h.x),c=Math.max(c,h.x),d=Math.min(d,h.y),u=Math.max(u,h.y)});let p=Ot.position.distanceTo(Rt.target),m=dr().setFromMatrixColumn(Ot.matrixWorld,0),x=dr().setFromMatrixColumn(Ot.matrixWorld,1),g=m.multiplyScalar((l+c)/2*p*a*Ot.aspect).add(x.multiplyScalar((d+u)/2*p*a));Rt.target.add(g),Ot.position.add(g);let f=Math.max((c-l)/1.72,(u-d)/1.62);Number.isFinite(f)&&f>0&&Ot.position.sub(Rt.target).multiplyScalar(f).add(Rt.target),Rt.update()}Rt.enableDamping=s,tn()}function ix(i,e){if(!wh()||(ze.focus=ze.getDetailFocus(),ze.direction=ze.detailDirection||ze.direction,!jo||!Si.clientWidth||!Si.clientHeight))return;let t=sp(ze.focus),n=jo,r=e?1:1-Math.exp(-6*i);t.center.copy(n.center).lerp(ze.focus.getCenter(dr()),r),t.distance=Qn.lerp(n.distance,t.distance,r);let s=Ot.position.clone().sub(Rt.target).multiplyScalar(t.distance/n.distance);Rt.target.add(t.center.clone().sub(n.center)),Ot.position.copy(Rt.target).add(s),jo=t}function op(){if(!Nt)return;let i=Si.clientWidth,e=Si.clientHeight;!i||!e||(Nt.setSize(i,e,!1),Ot.aspect=i/e,Ot.updateProjectionMatrix(),Zo())}function rx(i){_e("#element-id").textContent=i.id,_e("#element-type").textContent=i.type,_e("#element-surface").textContent=i.surface,_e("#element-length").textContent=i.length,_e("#element-metric-label").textContent=i.metricLabel||"D\u0142ugo\u015B\u0107 w modelu",_e("#element-detail-label").textContent=i.detailLabel||"Grubo\u015B\u0107 p\u0142yty",_e("#element-thickness").textContent=i.detail||"18 mm"}function zi(){if(Nt)try{jo=null,ze&&(Fi.remove(ze.root),qf(ze.root),ze.dispose?.()),ze=Xt==="combstruct"?jf(vt,Yo,fn):Xt==="bim"?Yf(ri,rx):Xt==="robotics"?ip(Vn):wc(kn,rp),Fi.background.set(ze.background||"#f2f5f1"),Si.dataset.robotics=Xt==="robotics"?Vn:"",Fi.add(ze.root),ze.root.updateMatrixWorld(!0),_e("#scene-annotation").textContent=ze.annotation||"",ze.arrows&&(ze.arrows.visible=_e("#arrows").checked),Xt==="combstruct"&&vt.crossing&&ze.crossing?.(_e("#crossing").checked),Xt==="combstruct"&&["roof-wall","ridge"].includes(vt.scene)&&(ze.spread?.(Number(_e("#spread").value)),ze.insert?.(Number(_e("#roof-joint-insert").value))),Xt==="bim"&&ze.finish&&lp(),Xt==="flow"&&kn===3&&dp(),Xt==="robotics"&&(ks(),Mi&&ze.getDetailFocus&&(ze.focus=ze.getDetailFocus(),ze.direction=ze.detailDirection||ze.direction)),cr.hidden=!0,op(),tn()}catch(i){console.error(i),cr.hidden=!1,cr.textContent="Nie uda\u0142o si\u0119 przygotowa\u0107 tego widoku. Od\u015Bwie\u017C stron\u0119, aby spr\xF3bowa\u0107 ponownie.",cr.setAttribute("role","alert")}}function sx(){try{Fi=new oo,Fi.background=new at("#f2f5f1"),Ot=new hn(36,1,.005,160),Nt=new hc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Nt.localClippingEnabled=!0,Nt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Nt.toneMapping=Po,Nt.toneMappingExposure=1.07,Si.prepend(Nt.domElement),Nt.domElement.tabIndex=0,Nt.domElement.setAttribute("aria-label","Model 3D. Przeci\u0105gnij, aby obr\xF3ci\u0107; przewi\u0144, aby przybli\u017Cy\u0107. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybra\u0107."),Rt=new mc(Ot,Nt.domElement),Rt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,Rt.dampingFactor=.12,Rt.minDistance=.3,Rt.maxDistance=50,Rt.maxPolarAngle=Math.PI*.94,Rt.addEventListener("change",tn),Rt.listenToKeyEvents(Nt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{Rt.enableDamping=!n.matches,tn()}),Fi.add(new wo("#ffffff","#b2b8aa",2.5));let i=new Ss("#fff3df",2.6);i.position.set(3,7,5),Fi.add(i);let e=new Ss("#d3e8ee",1.5);e.position.set(-4,3,-4),Fi.add(e),vh=new To;let t;Nt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Nt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!ze.selectAt)return;let r=Nt.domElement.getBoundingClientRect();vh.setFromCamera(new pe((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),Ot),ze.selectAt(vh),tn()}),Nt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),Zo())}),Nt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),cr.hidden=!1,cr.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C stron\u0119, aby do niego wr\xF3ci\u0107."}),new ResizeObserver(op).observe(Si),zi()}catch(i){console.error(i),cr.textContent="Podgl\u0105d 3D wymaga obs\u0142ugi WebGL. Zasady systemu mo\u017Cesz przeczyta\u0107 poni\u017Cej modelu.",cr.setAttribute("role","alert")}}function ox(){_e("#topic-title").textContent=vt.title,_e("#topic-lead").textContent=vt.lead,_e("#topic-text").textContent=vt.text,_e("#topic-rule").textContent=vt.rule;let i=Nn.indexOf(vt);_e("#topic-counter").textContent=`${i+1} / ${Nn.length}`,_e("#topic-select").value=vt.id,Fn("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===vt.id))),_e("#spread-control").hidden=!vt.spread,_e("#crossing-control").hidden=!vt.crossing,_e("#arrows-control").hidden=!vt.arrows,_e("#variant-control").hidden=!vt.variants,_e("#roof-joint-controls").hidden=!["roof-wall","ridge"].includes(vt.scene),_e("#roof-joint-variant-control").hidden=vt.scene==="ridge",_e("#ridge-house-control").hidden=vt.scene!=="ridge",_e("#roof-joint-insert").value=0,_e("#roof-joint-insert-value").textContent="0 mm",_e("#spread").value=0,_e("#crossing").checked=!!vt.crossing&&vt.scene!=="ridge",_e("#previous-topic").disabled=i===0,_e("#next-topic").disabled=i===Nn.length-1,_e("#variant-description").textContent=Yo.description}function Wr(i,{hash:e=!0}={}){Xt=i,si=0,_e(".technology-cta").hidden=["flow","robotics"].includes(i),Fn("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,_e("#"+n.getAttribute("aria-controls")).hidden=!r}),_e(`#${i==="combstruct"?"manual":i==="bim"?"bim":i==="robotics"?"robotics":"flow"}-mount`).append(Si),e&&history.pushState(null,"",`#${i==="combstruct"?vt.id:i==="bim"&&ri==="wall"?"bim-sciana":i==="robotics"&&Vn==="site"?"robotics-montaz":i}`),i==="combstruct"&&ox(),i==="flow"&&cp(),i==="robotics"&&ax(),zi()}function Bs(i,{hash:e=!0}={}){let t=Nn.find(n=>n.id===i)||vt;t!==vt&&["ridge","roof-wall"].includes(t.scene)&&(fn.pitch=t.scene==="ridge"?fn.ridgeHouse==="30"?35:45:35,_e("#roof-joint-pitch").value=fn.pitch,_e("#roof-joint-pitch-value").textContent=fn.pitch+"\xB0"),vt=t,Wr("combstruct",{hash:e})}function Eh(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(ri=i==="bim-sciana"?"wall":"house",ap(),Wr("bim",{hash:!1})):i==="robotics"||i==="robotics-montaz"?(Vn=i==="robotics-montaz"?"site":"factory",Wr("robotics",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),Wr("flow",{hash:!1})):Bs(i,{hash:!1})}for(let i of[...new Set(Nn.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of Nn.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>Bs(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}_e("#topic-buttons").append(e),_e("#topic-select").append(n)}for(let i of Tc)_e("#variant-select").append(new Option(i.name,i.id));_e("#topic-select").addEventListener("change",i=>Bs(i.target.value));_e("#variant-select").addEventListener("change",i=>{Yo=Tc.find(e=>e.id===i.target.value),_e("#variant-description").textContent=Yo.description,zi()});_e("#roof-joint-variant").addEventListener("change",i=>{let[e,t]=i.target.value.split("-").map(Number);fn={...fn,eave:!!e,knee:!!t},zi()});_e("#ridge-house").addEventListener("change",i=>{fn.ridgeHouse=i.target.value,fn.pitch=i.target.value==="30"?35:45,_e("#roof-joint-pitch").value=fn.pitch,_e("#roof-joint-pitch-value").textContent=fn.pitch+"\xB0",zi()});_e("#roof-joint-pitch").addEventListener("input",i=>{fn.pitch=Number(i.target.value),_e("#roof-joint-pitch-value").textContent=fn.pitch+"\xB0",zi()});_e("#roof-joint-insert").addEventListener("input",i=>{let e=Number(i.target.value);_e("#roof-joint-insert-value").textContent=e+" mm",_e("#spread").value=0,ze?.spread?.(0),_e("#crossing").checked=!0,ze?.crossing?.(!0),ze?.insert?.(e),tn()});Fn("[data-technology]").forEach(i=>i.addEventListener("click",()=>Wr(i.dataset.technology)));_e(".technology-tabs").addEventListener("keydown",i=>{let e=Fn("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});_e("#previous-topic").addEventListener("click",()=>Bs(Nn[Nn.indexOf(vt)-1]?.id));_e("#next-topic").addEventListener("click",()=>Bs(Nn[Nn.indexOf(vt)+1]?.id));_e("#spread").addEventListener("input",i=>{ze?.spread?.(Number(i.target.value)),_e("#crossing").checked=!1,ze?.crossing?.(!1),tn()});_e("#crossing").addEventListener("change",i=>{i.target.checked&&(_e("#spread").value=0,ze?.spread?.(0)),ze?.crossing?.(i.target.checked),tn()});_e("#arrows").addEventListener("change",i=>{ze?.arrows&&(ze.arrows.visible=i.target.checked),tn()});Fn("[data-reset-view]").forEach(i=>i.addEventListener("click",Zo));function ap(){Fn("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===ri))),_e("#finish-control").hidden=ri!=="wall",_e("#wall-guide").hidden=ri!=="wall",_e(".selection-hint").textContent=ri==="wall"?"Ods\u0142o\u0144 \u015Bcian\u0119 i wybierz widoczny element":"Wybierz desk\u0119 w modelu",_e("#passport-title").innerHTML=ri==="wall"?"Sprawd\u017A, co kryje<br>Twoja \u015Bciana.":"Ka\u017Cda cz\u0119\u015B\u0107<br>ma swoje miejsce."}function lp(){let i=_e("#finish"),e=Number(i.value);ze?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"\u015Aciana wyko\u0144czona":`Ods\u0142oni\u0119te ${Math.round(e*100)}% \u015Bciany`),_e("#scene-annotation").textContent=e>.01?"Kliknij \u017Cebro, kostk\u0119, rur\u0119 lub przew\xF3d":"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",tn()}Fn("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{ri=i.dataset.bimView,ap(),history.pushState(null,"",ri==="wall"?"#bim-sciana":"#bim"),zi()}));_e("#finish").addEventListener("input",lp);_e("#next-element").addEventListener("click",()=>{ze?.next?.(),tn()});function cp(){let i=fh[kn];_e("#flow-title").textContent=i.title,_e("#flow-text").textContent=i.text,_e("#flow-output-label").textContent=i.label,_e("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),Fn("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===kn))),_e("#assembly-control").hidden=kn!==3,_e("#flow-next").textContent=["Zobacz model Combstruct \u2192","Przejd\u017A do produkcji \u2192","Zobacz monta\u017C \u2192","Wr\xF3\u0107 do rzut\xF3w \u21BA"][kn],_e(".flow-layout").dataset.stage=kn,_e("#production-catalog").hidden=kn!==2}function dp(){let i=Number(_e("#assembly").value);ze?.assembly?.(i),_e("#assembly-progress").textContent=`${Math.round(i*100)}%`,tn()}function hp(i){kn=i,cp(),zi()}Fn("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>hp(Number(i.dataset.flowStage))));_e("#flow-next").addEventListener("click",()=>hp((kn+1)%fh.length));_e("#assembly").addEventListener("input",dp);$f(_e("#production-catalog"),uh,(i,e)=>{rp=i,Xt==="flow"&&kn===2&&zi(),e&&Jf(_e("#flow-mount"))});var Os=_e(".menu-toggle"),Ac=_e("#mobile-menu");function ax(){Sh=-1,_e("#robotics-detail").hidden=Vn!=="factory",_e("#robotics-detail").setAttribute("aria-pressed",String(Mi)),_e("#robotics-detail").textContent=Mi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",Fn("[data-robotics-process]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.roboticsProcess===Vn)));let i=_e("#robotics-steps");i.dataset.process=Vn,i.replaceChildren(...qo[Vn].steps.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.textContent=e.label,n.dataset.roboticsStep=t,n.setAttribute("aria-pressed","false"),n.onclick=()=>Th(e.at+.001),n})),_e("#robotics-note").textContent=Vn==="factory"?"Animacja koncepcyjna linii produkcyjnej.":"Wybrane operacje z modelu Combstruct 30. Przej\u015Bcia mi\u0119dzy etapami pomijaj\u0105 cz\u0119\u015B\u0107 powtarzalnych cykli. Koncepcja ruchu robota, nie zweryfikowany program monta\u017Cowy."}function ks({dt:i=0,snapCamera:e=!1}={}){ze?.update?.(Un);let t=qo[Vn],n=t.steps.findLastIndex(s=>Un>=s.at);n!==Sh&&(Sh=n,_e("#robotics-title").textContent=t.steps[n].title,_e("#robotics-text").textContent=t.steps[n].text,Fn("[data-robotics-step]").forEach(s=>s.setAttribute("aria-pressed",String(Number(s.dataset.roboticsStep)===n)))),ix(i,e),_e("#robotics-seek").value=Un;let r=Math.floor(Un*t.duration);_e("#robotics-time").textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,_e("#robotics-play").textContent=Hn?"Pauza":Un===1?"Powt\xF3rz":"Odtw\xF3rz",_e("#robotics-play").setAttribute("aria-pressed",String(Hn))}function Th(i){Un=Math.min(1,Math.max(0,i)),Hn=!1,si=0,ks({snapCamera:!0}),tn()}Fn("[data-robotics-process]").forEach(i=>i.addEventListener("click",()=>{Vn=i.dataset.roboticsProcess,Un=0,Hn=!matchMedia("(prefers-reduced-motion: reduce)").matches,Wr("robotics")}));_e("#robotics-play").addEventListener("click",()=>{let i=Un===1;i&&(Un=0),Hn=!Hn,si=0,ks({snapCamera:i}),tn()});_e("#robotics-replay").addEventListener("click",()=>{Un=0,Hn=!matchMedia("(prefers-reduced-motion: reduce)").matches,si=0,ks({snapCamera:!0}),tn()});_e("#robotics-seek").addEventListener("input",i=>Th(Number(i.target.value)));_e("#robotics-detail").addEventListener("click",()=>{Mi=!Mi,_e("#robotics-detail").setAttribute("aria-pressed",String(Mi)),_e("#robotics-detail").textContent=Mi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",ze.focus=Mi?ze.getDetailFocus():ze.overview,ze.direction=Mi?ze.detailDirection:ze.overviewDirection,Zo()});new IntersectionObserver(i=>{Mh=i[0].isIntersecting,si=0,tn()},{threshold:.05}).observe(_e("#robotics-mount"));document.addEventListener("visibilitychange",()=>{si=0,tn()});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{i.matches&&(Hn=!1,si=0,Xt==="robotics"&&ks())});function Ah(){Ac.hidden=!0,Os.setAttribute("aria-expanded","false"),Os.setAttribute("aria-label","Otw\xF3rz menu")}Os.addEventListener("click",()=>{let i=Ac.hidden;Ac.hidden=!i,Os.setAttribute("aria-expanded",String(i)),Os.setAttribute("aria-label",i?"Zamknij menu":"Otw\xF3rz menu")});Fn("#mobile-menu a").forEach(i=>i.addEventListener("click",Ah));document.addEventListener("click",i=>{i.target.closest(".site-header")||Ah()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!Ac.hidden&&(Ah(),Os.focus())});addEventListener("popstate",Eh);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==Xt&&i!==vt.id&&Eh()});window.combstructTechnology={getState:()=>({ready:!!Nt,technology:Xt,topic:vt.id,variant:Yo.id,bimView:ri,flowStage:kn,roofJoint:Xt==="combstruct"&&vt.scene==="roof-wall"?{...fn,slabBeveled:!1,boards:ze?.roofJoint?.boards.length}:null,ridgeJoint:Xt==="combstruct"&&vt.scene==="ridge"?{pitch:fn.pitch,house:fn.ridgeHouse,boards:ze?.ridgeJoint?.boards.length}:null,robotics:Xt==="robotics"?{...ze?.getRoboticsState?.(),playing:Hn,camera:{following:wh(),position:Ot?.position.toArray(),target:Rt?.target.toArray()}}:null,manufacturing:ze?.getManufacturingState?.(),selected:ze?.getSelected?.(),wall:ze?.getWallState?.(),meshCount:ze?.root.children.length,drawCalls:Nt?.info.render.calls}),topics:Nn.map(i=>i.id),showTopic:Bs,showTechnology:Wr,seekRobotics:Th,reset:Zo};Eh();sx();})();
