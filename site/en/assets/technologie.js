"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gu=0,_d=1,bu=2;var Do=1,xu=2,As=3,Li=0,bn=1,Lt=2,bi=0,wr=1,yd=2,vd=3,Md=4,_u=5;var $i=100,yu=101,vu=102,Mu=103,Su=104,wu=200,Eu=201,Tu=202,Au=203,Ua=204,Fa=205,Ru=206,Cu=207,Pu=208,Iu=209,Du=210,Lu=211,Nu=212,Uu=213,Fu=214,za=0,Oa=1,Ba=2,Er=3,ka=4,Va=5,Ha=6,Ga=7,Sd=0,zu=1,Ou=2,$n=0,wd=1,Ed=2,Td=3,Lo=4,Ad=5,Rd=6,Cd=7;var Pd=300,ar=301,zr=302,vl=303,Ml=304,No=306,Wa=1e3,hi=1001,Xa=1002,Qt=1003,Bu=1004;var Uo=1005;var an=1006,Sl=1007;var lr=1008;var vn=1009,Id=1010,Dd=1011,Rs=1012,wl=1013,Kn=1014,Qn=1015,xi=1016,El=1017,Tl=1018,Cs=1020,Ld=35902,Nd=35899,Ud=1021,Fd=1022,kn=1023,fi=1026,cr=1027,zd=1028,Al=1029,Or=1030,Rl=1031;var Cl=1033,Fo=33776,zo=33777,Oo=33778,Bo=33779,Pl=35840,Il=35841,Dl=35842,Ll=35843,Nl=36196,Ul=37492,Fl=37496,zl=37488,Ol=37489,Bl=37490,kl=37491,Vl=37808,Hl=37809,Gl=37810,Wl=37811,Xl=37812,jl=37813,ql=37814,Yl=37815,Zl=37816,Jl=37817,$l=37818,Kl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,rc=36283,sc=36284,oc=36285,ac=36286;var io=2300,ja=2301,Na=2302,ad=2303,ld=2400,cd=2401,dd=2402;var ku=3200;var Od=0,Vu=1,Ui="",Ht="srgb",Tr="srgb-linear",ro="linear",yt="srgb";var Mr=7680;var hd=519,Hu=512,Gu=513,Wu=514,lc=515,Xu=516,ju=517,cc=518,qu=519,qa=35044;var Bd="300 es",Zn=2e3,fs=2001;function Mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=so("canvas");return i.style.display="block",i}var zh={},ps=null;function oo(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function Zu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Zu(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Zu(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ao(...i){let e=i.join(" ");e in zh||(zh[e]=!0,$e(...i))}function Ju(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var $u={[za]:Oa,[Ba]:Ha,[ka]:Ga,[Er]:Va,[Oa]:za,[Ha]:Ba,[Ga]:ka,[Va]:Er},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,hs=Math.PI/180,ms=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function kd(i,e){return(i%e+e)%e}function wp(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ep(i,e,t){return i!==e?(t-i)/(e-i):0}function eo(i,e,t){return(1-t)*i+t*e}function Tp(i,e,t,n){return eo(i,e,1-Math.exp(-t*n))}function Ap(i,e=1){return e-Math.abs(kd(i,e*2)-e)}function Rp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ip(i,e){return i+Math.random()*(e-i)}function Dp(i){return i*(.5-Math.random())}function Lp(i){i!==void 0&&(Oh=i);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Np(i){return i*hs}function Up(i){return i*ms}function Fp(i){return(i&i-1)===0&&i!==0}function zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bp(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),u=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*d,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*m,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*m,a*l);break;case"ZYZ":i.set(c*m,c*u,a*d,a*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ei={DEG2RAD:hs,RAD2DEG:ms,generateUUID:ui,clamp:tt,euclideanModulo:kd,mapLinear:wp,inverseLerp:Ep,lerp:eo,damp:Tp,pingpong:Ap,smoothstep:Rp,smootherstep:Cp,randInt:Pp,randFloat:Ip,randFloatSpread:Dp,seededRandom:Lp,degToRad:Np,radToDeg:Up,isPowerOfTwo:Fp,ceilPowerOfTwo:zp,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Bp,normalize:vt,denormalize:Yn},pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3],h=s[o+0],u=s[o+1],m=s[o+2],_=s[o+3];if(f!==_||c!==h||l!==u||d!==m){let g=c*h+l*u+d*m+f*_;g<0&&(h=-h,u=-u,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let S=Math.acos(g),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,c=c*p+h*a,l=l*p+u*a,d=d*p+m*a,f=f*p+_*a}else{c=c*p+h*a,l=l*p+u*a,d=d*p+m*a,f=f*p+_*a;let S=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=S,l*=S,d*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=s[o],h=s[o+1],u=s[o+2],m=s[o+3];return e[t]=a*m+d*f+c*u-l*h,e[t+1]=c*m+d*h+l*f-a*u,e[t+2]=l*m+d*u+a*h-c*f,e[t+3]=d*m-a*f-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),f=a(s/2),h=c(n/2),u=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*f+l*u*m,this._y=l*u*f-h*d*m,this._z=l*d*m+h*u*f,this._w=l*d*f-h*u*m;break;case"YXZ":this._x=h*d*f+l*u*m,this._y=l*u*f-h*d*m,this._z=l*d*m-h*u*f,this._w=l*d*f+h*u*m;break;case"ZXY":this._x=h*d*f-l*u*m,this._y=l*u*f+h*d*m,this._z=l*d*m+h*u*f,this._w=l*d*f-h*u*m;break;case"ZYX":this._x=h*d*f-l*u*m,this._y=l*u*f+h*d*m,this._z=l*d*m-h*u*f,this._w=l*d*f+h*u*m;break;case"YZX":this._x=h*d*f+l*u*m,this._y=l*u*f+h*d*m,this._z=l*d*m-h*u*f,this._w=l*d*f-h*u*m;break;case"XZY":this._x=h*d*f-l*u*m,this._y=l*u*f-h*d*m,this._z=l*d*m+h*u*f,this._w=l*d*f+h*u*m;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+a+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(s-l)*u,this._z=(o-r)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(s-l)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-r)/u,this._x=(s+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),d=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*d,this.y=n+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new D,Bh=new en,et=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],u=n[5],m=n[8],_=r[0],g=r[3],p=r[6],S=r[1],M=r[4],v=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*_+a*S+c*C,s[3]=o*g+a*M+c*E,s[6]=o*p+a*v+c*T,s[1]=l*_+d*S+f*C,s[4]=l*g+d*M+f*E,s[7]=l*p+d*v+f*T,s[2]=h*_+u*S+m*C,s[5]=h*g+u*M+m*E,s[8]=h*p+u*v+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,h=a*c-d*s,u=l*s-o*c,m=t*f+n*h+r*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=f*_,e[1]=(r*l-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lc=new et,kh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){let i={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tr]:{primaries:e,whitePoint:n,transfer:ro,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var ht=kp();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zr,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=so("canvas")),Zr.width=e.width,Zr.height=e.height;let r=Zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Zr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,gs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nc(r[o].image)):s.push(Nc(r[o]))}else s=Nc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var Hp=0,Uc=new D,gn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hi,r=hi,s=an,o=lr,a=kn,c=vn,l=i.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ui(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wa:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wa:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Pd;gn.DEFAULT_ANISOTROPY=1;var Dt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],u=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(u+1)/2,C=(p+1)/2,E=(d+h)/4,T=(f+_)/4,b=(m+g)/4;return M>v&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=T/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=b/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=T/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(f-_)/S,this.z=(h-d)/S,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new gn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ot=class i{constructor(e,t,n,r,s,o,a,c,l,d,f,h,u,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,d,f,h,u,m,_,g)}set(e,t,n,r,s,o,a,c,l,d,f,h,u,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*d,u=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=u+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+u*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,u=c*f,m=l*d,_=l*f;t[0]=h+_*a,t[4]=m*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=u*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,u=c*f,m=l*d,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,u=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=m*l-u,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=u*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,u=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-h*f,t[8]=m*f+u,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=u*f+m,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*c,u=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+_,t[5]=o*d,t[9]=u*f-m,t[2]=m*f-u,t[6]=a*d,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gp,e,Wp)}lookAt(e,t,n){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(n,En),Xi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(n,En)),Xi.normalize(),na.crossVectors(En,Xi),r[0]=Xi.x,r[4]=na.x,r[8]=En.x,r[1]=Xi.y,r[5]=na.y,r[9]=En.y,r[2]=Xi.z,r[6]=na.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],u=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],M=n[7],v=n[11],C=n[15],E=r[0],T=r[4],b=r[8],y=r[12],N=r[1],P=r[5],L=r[9],F=r[13],k=r[2],O=r[6],z=r[10],R=r[14],j=r[3],Y=r[7],ae=r[11],me=r[15];return s[0]=o*E+a*N+c*k+l*j,s[4]=o*T+a*P+c*O+l*Y,s[8]=o*b+a*L+c*z+l*ae,s[12]=o*y+a*F+c*R+l*me,s[1]=d*E+f*N+h*k+u*j,s[5]=d*T+f*P+h*O+u*Y,s[9]=d*b+f*L+h*z+u*ae,s[13]=d*y+f*F+h*R+u*me,s[2]=m*E+_*N+g*k+p*j,s[6]=m*T+_*P+g*O+p*Y,s[10]=m*b+_*L+g*z+p*ae,s[14]=m*y+_*F+g*R+p*me,s[3]=S*E+M*N+v*k+C*j,s[7]=S*T+M*P+v*O+C*Y,s[11]=S*b+M*L+v*z+C*ae,s[15]=S*y+M*F+v*R+C*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],u=e[14],m=e[3],_=e[7],g=e[11],p=e[15],S=c*u-l*h,M=a*u-l*f,v=a*h-c*f,C=o*u-l*d,E=o*h-c*d,T=o*f-a*d;return t*(_*S-g*M+p*v)-n*(m*S-g*C+p*E)+r*(m*M-_*C+p*T)-s*(m*v-_*E+g*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],u=e[11],m=e[12],_=e[13],g=e[14],p=e[15],S=t*a-n*o,M=t*c-r*o,v=t*l-s*o,C=n*c-r*a,E=n*l-s*a,T=r*l-s*c,b=d*_-f*m,y=d*g-h*m,N=d*p-u*m,P=f*g-h*_,L=f*p-u*_,F=h*p-u*g,k=S*F-M*L+v*P+C*N-E*y+T*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/k;return e[0]=(a*F-c*L+l*P)*O,e[1]=(r*L-n*F-s*P)*O,e[2]=(_*T-g*E+p*C)*O,e[3]=(h*E-f*T-u*C)*O,e[4]=(c*N-o*F-l*y)*O,e[5]=(t*F-r*N+s*y)*O,e[6]=(g*v-m*T-p*M)*O,e[7]=(d*T-h*v+u*M)*O,e[8]=(o*L-a*N+l*b)*O,e[9]=(n*N-t*L-s*b)*O,e[10]=(m*E-_*v+p*S)*O,e[11]=(f*v-d*E-u*S)*O,e[12]=(a*y-o*P-c*b)*O,e[13]=(t*P-n*y+r*b)*O,e[14]=(_*M-m*C-g*S)*O,e[15]=(d*C-f*M+h*S)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,h=s*l,u=s*d,m=s*f,_=o*d,g=o*f,p=a*f,S=c*l,M=c*d,v=c*f,C=n.x,E=n.y,T=n.z;return r[0]=(1-(_+p))*C,r[1]=(u+v)*C,r[2]=(m-M)*C,r[3]=0,r[4]=(u-v)*E,r[5]=(1-(h+p))*E,r[6]=(g+S)*E,r[7]=0,r[8]=(m+M)*T,r[9]=(g-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Jr.set(r[0],r[1],r[2]).length(),a=Jr.set(r[4],r[5],r[6]).length(),c=Jr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);let l=1/o,d=1/a,f=1/c;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=Zn,c=!1){let l=this.elements,d=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r),m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===Zn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fs)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zn,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),u=-(n+r)/(n-r),m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===Zn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===fs)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new D,Xn=new ot,Gp=new D(0,0,0),Wp=new D(1,1,1),Xi=new D,na=new D,En=new D,Hh=new ot,Gh=new en,Jn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],h=r[6],u=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,Wh=new D,$r=new en,Ai=new ot,ia=new D,Xs=new D,jp=new D,qp=new en,Xh=new D(1,0,0),jh=new D(0,1,0),qh=new D(0,0,1),Yh={type:"added"},Yp={type:"removed"},Kr={type:"childadded",child:null},Fc={type:"childremoved",child:null},jt=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Jn,n=new en,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new et}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Xs,ia,this.up):Ai.lookAt(ia,Xs,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Ai),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),u=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};jt.DEFAULT_UP=new D(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zp={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,m=.005;l.inputState.pinching&&h>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ra={h:0,s:0,l:0};function zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=kd(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=zc(o,s,e+1/3),this.g=zc(o,s,e),this.b=zc(o,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return ht.workingToColorSpace(hn.copy(this),e),Math.round(tt(hn.r*255,0,255))*65536+Math.round(tt(hn.g*255,0,255))*256+Math.round(tt(hn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,s=hn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ht){ht.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ra);let n=eo(ji.h,ra.h,t),r=eo(ji.s,ra.s,t),s=eo(ji.l,ra.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new at;at.NAMES=Ku;var co=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new D,Ri=new D,Oc=new D,Ci=new D,Qr=new D,es=new D,Zh=new D,Bc=new D,kc=new D,Vc=new D,Hc=new Dt,Gc=new Dt,Wc=new Dt,di=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jn.subVectors(e,t),r.cross(jn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jn.subVectors(r,t),Ri.subVectors(n,t),Oc.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(Ri),c=jn.dot(Oc),l=Ri.dot(Ri),d=Ri.dot(Oc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,u=(l*c-a*d)*h,m=(o*d-a*c)*h;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hc,s.x),o.addScaledVector(Gc,s.y),o.addScaledVector(Wc,s.z),o}static isFrontFacing(e,t,n,r){return jn.subVectors(n,t),Ri.subVectors(e,t),jn.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Qr.subVectors(r,n),es.subVectors(s,n),Bc.subVectors(e,n);let c=Qr.dot(Bc),l=es.dot(Bc);if(c<=0&&l<=0)return t.copy(n);kc.subVectors(e,r);let d=Qr.dot(kc),f=es.dot(kc);if(d>=0&&f<=d)return t.copy(r);let h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Qr,o);Vc.subVectors(e,s);let u=Qr.dot(Vc),m=es.dot(Vc);if(m>=0&&u<=m)return t.copy(s);let _=u*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(es,a);let g=d*m-u*f;if(g<=0&&f-d>=0&&u-m>=0)return Zh.subVectors(s,r),a=(f-d)/(f-d+(u-m)),t.copy(r).addScaledVector(Zh,a);let p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(Qr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),oa.subVectors(this.max,js),ts.subVectors(e.a,js),ns.subVectors(e.b,js),is.subVectors(e.c,js),qi.subVectors(ns,ts),Yi.subVectors(is,ns),xr.subVectors(ts,is);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-xr.z,xr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,xr.z,0,-xr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-xr.y,xr.x,0];return!Xc(t,ts,ns,is,oa)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,ts,ns,is,oa))?!1:(aa.crossVectors(qi,Yi),t=[aa.x,aa.y,aa.z],Xc(t,ts,ns,is,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,sa=new Gt,ts=new D,ns=new D,is=new D,qi=new D,Yi=new D,xr=new D,js=new D,oa=new D,aa=new D,_r=new D;function Xc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){_r.fromArray(i,s);let a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),c=e.dot(_r),l=t.dot(_r),d=n.dot(_r);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Vt=new D,la=new pe,Jp=0,on=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}};var ho=class extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var uo=class extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}},$p=new Gt,qs=new D,jc=new D,Ar=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$p.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);let t=qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(jc)),this.expandByPoint(qs.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kp=0,On=new ot,qc=new jt,rs=new D,Tn=new Gt,Ys=new Gt,Kt=new D,mt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mp(e)?uo:ho)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Tn.min,Ys.min),Tn.expandByPoint(Kt),Kt.addVectors(Tn.max,Ys.max),Tn.expandByPoint(Kt)):(Tn.expandByPoint(Ys.min),Tn.expandByPoint(Ys.max))}Tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Kt.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(e,l),Kt.add(rs)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new D,c[b]=new D;let l=new D,d=new D,f=new D,h=new pe,u=new pe,m=new pe,_=new D,g=new D;function p(b,y,N){l.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,b),u.fromBufferAttribute(s,y),m.fromBufferAttribute(s,N),d.sub(l),f.sub(l),u.sub(h),m.sub(h);let P=1/(u.x*m.y-m.x*u.y);isFinite(P)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(P),g.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(P),a[b].add(_),a[y].add(_),a[N].add(_),c[b].add(g),c[y].add(g),c[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,y=S.length;b<y;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new D,v=new D,C=new D,E=new D;function T(b){C.fromBufferAttribute(r,b),E.copy(C);let y=a[b];M.copy(y),M.sub(C.multiplyScalar(C.dot(y))).normalize(),v.crossVectors(E,y);let P=v.dot(c[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,y=S.length;b<y;++b){let N=S[b],P=N.start,L=N.count;for(let F=P,k=P+L;F<k;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,d=new D,f=new D;if(e)for(let h=0,u=e.count;h<u;h+=3){let m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(d),c.add(d),l.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,h=new l.constructor(c.length*d),u=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*d;for(let p=0;p<d;p++)h[m++]=l[u++]}return new on(h,d,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){let h=l[d],u=e(h,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){let u=l[f];d.push(u.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],f=s[l];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new D,_s=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qp=0,mi=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=wr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ss,Zs=new D,os=new D,as=new D,ls=new pe,Js=new pe,Qu=new ot,ca=new D,$s=new D,da=new D,Jh=new pe,Yc=new pe,$h=new pe,Rr=class extends jt{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fo(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new _s(n,3,0,!1)),ss.setAttribute("uv",new _s(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-as.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ha(ca.set(-.5,-.5,0),as,o,os,r,s),ha($s.set(.5,-.5,0),as,o,os,r,s),ha(da.set(.5,.5,0),as,o,os,r,s),Jh.set(0,0),Yc.set(1,0),$h.set(1,1);let a=e.ray.intersectTriangle(ca,$s,da,!1,Zs);if(a===null&&(ha($s.set(-.5,.5,0),as,o,os,r,s),Yc.set(0,1),a=e.ray.intersectTriangle(ca,da,$s,!1,Zs),a===null))return;let c=e.ray.origin.distanceTo(Zs);c<e.near||c>e.far||t.push({distance:c,point:Zs.clone(),uv:di.getInterpolation(Zs,ca,$s,da,Jh,Yc,$h,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(i,e,t,n,r,s){ls.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Js.x=s*ls.x-r*ls.y,Js.y=r*ls.x+s*ls.y):Js.copy(ls),i.copy(e),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Qu)}var Ii=new D,Zc=new D,ua=new D,Zi=new D,Jc=new D,fa=new D,$c=new D,Qi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zc.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(Zc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=Zi.dot(this.direction),c=-Zi.dot(ua),l=Zi.lengthSq(),d=Math.abs(1-o*o),f,h,u,m;if(d>0)if(f=o*c-a,h=o*a-c,m=s*d,f>=0)if(h>=-m)if(h<=m){let _=1/d;f*=_,h*=_,u=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),u=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-s,-c),s),u=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),u=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zc).addScaledVector(ua,h),u}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),r=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,r,s){Jc.subVectors(t,e),fa.subVectors(n,e),$c.crossVectors(Jc,fa);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let c=a*this.direction.dot(fa.crossVectors(Zi,fa));if(c<0)return null;let l=a*this.direction.dot(Jc.cross(Zi));if(l<0||c+l>o)return null;let d=-a*Zi.dot($c);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kh=new ot,yr=new Qi,pa=new Ar,Qh=new D,ma=new D,ga=new D,ba=new D,Kc=new D,xa=new D,eu=new D,_a=new D,lt=class extends jt{constructor(e=new mt,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){xa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],f=s[c];d!==0&&(Kc.fromBufferAttribute(f,e),o?xa.addScaledVector(Kc,d):xa.addScaledVector(Kc.sub(t),d))}t.add(xa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(pa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(pa,Qh)===null||yr.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Kh.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],S=Math.max(g.start,u.start),M=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=S,C=M;v<C;v+=3){let E=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);r=ya(this,p,e,n,l,d,f,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let S=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);r=ya(this,o,e,n,l,d,f,S,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=o[g.materialIndex],S=Math.max(g.start,u.start),M=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=S,C=M;v<C;v+=3){let E=v,T=v+1,b=v+2;r=ya(this,p,e,n,l,d,f,E,T,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let S=g,M=g+1,v=g+2;r=ya(this,o,e,n,l,d,f,S,M,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function e0(i,e,t,n,r,s,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Li,a),c===null)return null;_a.copy(a),_a.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:i}}function ya(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ma),i.getVertexPosition(c,ga),i.getVertexPosition(l,ba);let d=e0(i,e,t,n,ma,ga,ba,eu);if(d){let f=new D;di.getBarycoord(eu,ma,ga,ba,f),r&&(d.uv=di.getInterpolatedAttribute(r,a,c,l,f,new pe)),s&&(d.uv1=di.getInterpolatedAttribute(s,a,c,l,f,new pe)),o&&(d.normal=di.getInterpolatedAttribute(o,a,c,l,f,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new D,materialIndex:0};di.getNormal(ma,ga,ba,h.normal),d.face=h,d.barycoord=f}return d}var $a=class extends gn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Qt,d=Qt,f,h){super(null,o,a,c,l,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qc=new D,t0=new D,n0=new et,yn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qc.subVectors(n,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n0.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new Ar,i0=new pe(.5,.5),va=new D,ys=class{constructor(e=new yn,t=new yn,n=new yn,r=new yn,s=new yn,o=new yn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],f=s[5],h=s[6],u=s[7],m=s[8],_=s[9],g=s[10],p=s[11],S=s[12],M=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-o,u-d,p-m,C-S).normalize(),r[1].setComponents(l+o,u+d,p+m,C+S).normalize(),r[2].setComponents(l+a,u+f,p+_,C+M).normalize(),r[3].setComponents(l-a,u-f,p-_,C-M).normalize(),n)r[4].setComponents(c,h,g,v).normalize(),r[5].setComponents(l-c,u-h,p-g,C-v).normalize();else if(r[4].setComponents(l-c,u-h,p-g,C-v).normalize(),t===Zn)r[5].setComponents(l+c,u+h,p+g,C+v).normalize();else if(t===fs)r[5].setComponents(c,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);let t=i0.distanceTo(e.center);return vr.radius=.7071067811865476+t,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tn=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ka=new D,Qa=new D,tu=new ot,Ks=new Qi,Ma=new Ar,ed=new D,nu=new D,Cr=class extends jt{constructor(e=new mt,t=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ka.fromBufferAttribute(t,r-1),Qa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ka.distanceTo(Qa);e.setAttribute("lineDistance",new ct(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;tu.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(tu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=u,g=m-1;_<g;_+=l){let p=d.getX(_),S=d.getX(_+1),M=Sa(this,e,Ks,c,p,S,_);M&&t.push(M)}if(this.isLineLoop){let _=d.getX(m-1),g=d.getX(u),p=Sa(this,e,Ks,c,_,g,m-1);p&&t.push(p)}}else{let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=u,g=m-1;_<g;_+=l){let p=Sa(this,e,Ks,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Sa(this,e,Ks,c,m-1,u,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Sa(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ka.fromBufferAttribute(a,r),Qa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ka,Qa,ed,nu)>n)return;ed.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ed);if(!(l<e.near||l>e.far))return{distance:l,point:nu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var iu=new D,ru=new D,Wt=class extends Cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)iu.fromBufferAttribute(t,r),ru.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+iu.distanceTo(ru);e.setAttribute("lineDistance",new ct(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var po=class extends gn{constructor(e=[],t=ar,n,r,s,o,a,c,l,d){super(e,t,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gi=class extends gn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},er=class extends gn{constructor(e,t,n=Kn,r,s,o,a=Qt,c=Qt,l,d=fi,f=1){if(d!==fi&&d!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},el=class extends er{constructor(e,t=Kn,n=ar,r,s,o=Qt,a=Qt,c,l=fi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class i extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],f=[],h=0,u=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function m(_,g,p,S,M,v,C,E,T,b,y){let N=v/T,P=C/b,L=v/2,F=C/2,k=E/2,O=T+1,z=b+1,R=0,j=0,Y=new D;for(let ae=0;ae<z;ae++){let me=ae*P-F;for(let ue=0;ue<O;ue++){let te=ue*N-L;Y[_]=te*S,Y[g]=me*M,Y[p]=k,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=E>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(ue/T),f.push(1-ae/b),R+=1}}for(let ae=0;ae<b;ae++)for(let me=0;me<T;me++){let ue=h+me+O*ae,te=h+me+O*(ae+1),le=h+(me+1)+O*(ae+1),se=h+(me+1)+O*ae;c.push(ue,te,se),c.push(te,le,se),j+=6}a.addGroup(u,j,y),u+=j,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ni=class i extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let d=[],f=[],h=[],u=[],m=0,_=[],g=n/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function S(){let v=new D,C=new D,E=0,T=(t-e)/n;for(let b=0;b<=s;b++){let y=[],N=b/s,P=N*(t-e)+e;for(let L=0;L<=r;L++){let F=L/r,k=F*c+a,O=Math.sin(k),z=Math.cos(k);C.x=P*O,C.y=-N*n+g,C.z=P*z,f.push(C.x,C.y,C.z),v.set(O,T,z).normalize(),h.push(v.x,v.y,v.z),u.push(F,1-N),y.push(m++)}_.push(y)}for(let b=0;b<r;b++)for(let y=0;y<s;y++){let N=_[y][b],P=_[y+1][b],L=_[y+1][b+1],F=_[y][b+1];(e>0||y!==0)&&(d.push(N,P,F),E+=3),(t>0||y!==s-1)&&(d.push(P,L,F),E+=3)}l.addGroup(p,E,0),p+=E}function M(v){let C=m,E=new pe,T=new D,b=0,y=v===!0?e:t,N=v===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,g*N,0),h.push(0,N,0),u.push(.5,.5),m++;let P=m;for(let L=0;L<=r;L++){let k=L/r*c+a,O=Math.cos(k),z=Math.sin(k);T.x=y*z,T.y=g*N,T.z=y*O,f.push(T.x,T.y,T.z),h.push(0,N,0),E.x=O*.5+.5,E.y=z*.5*N+.5,u.push(E.x,E.y),m++}for(let L=0;L<r;L++){let F=C+L,k=P+L;v===!0?d.push(k,k+1,F):d.push(k+1,k,F),b+=3}l.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tl=class i extends Ni{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wa=new D,Ea=new D,td=new D,Ta=new di,Xt=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(hs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],d=["a","b","c"],f=new Array(3),h={},u=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:_,b:g,c:p}=Ta;if(_.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ta.getNormal(td),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){let M=(S+1)%3,v=f[S],C=f[M],E=Ta[d[S]],T=Ta[d[M]],b=`${v}_${C}`,y=`${C}_${v}`;y in h&&h[y]?(td.dot(h[y].normal)<=s&&(u.push(E.x,E.y,E.z),u.push(T.x,T.y,T.z)),h[y]=null):b in h||(h[b]={index0:l[S],index1:l[M],normal:td.clone()})}}for(let m in h)if(h[m]){let{index0:_,index1:g}=h[m];wa.fromBufferAttribute(a,_),Ea.fromBufferAttribute(a,g),u.push(wa.x,wa.y,wa.z),u.push(Ea.x,Ea.y,Ea.z)}this.setAttribute("position",new ct(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,u=(o-d)/h;return(r+u)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new pe:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,c=new ot;for(let u=0;u<=e;u++){let m=u/e;r[u]=this.getTangentAt(m,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(r[u-1],r[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(tt(r[u-1].dot(r[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(a,m))}o[u].crossVectors(r[u],s[u])}if(t===!0){let u=Math.acos(tt(s[0].dot(s[e]),-1,1));u/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],u*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vs=class extends Rn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new pe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,u=l-this.aY;c=h*d-u*f+this.aX,l=h*f+u*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nl=class extends vs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vd(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,f){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+f)+(c-a)/f;h*=d,u*=d,r(o,a,h,u)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Aa=new D,nd=new Vd,id=new Vd,rd=new Vd,il=class extends Rn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Aa.subVectors(r[0],r[1]).add(r[0]),l=Aa);let f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Aa.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Aa),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nd.initNonuniformCatmullRom(l.x,f.x,h.x,d.x,m,_,g),id.initNonuniformCatmullRom(l.y,f.y,h.y,d.y,m,_,g),rd.initNonuniformCatmullRom(l.z,f.z,h.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(nd.initCatmullRom(l.x,f.x,h.x,d.x,this.tension),id.initCatmullRom(l.y,f.y,h.y,d.y,this.tension),rd.initCatmullRom(l.z,f.z,h.z,d.z,this.tension));return n.set(nd.calc(c),id.calc(c),rd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function su(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function r0(i,e){let t=1-i;return t*t*e}function s0(i,e){return 2*(1-i)*i*e}function o0(i,e){return i*i*e}function to(i,e,t,n){return r0(i,e)+s0(i,t)+o0(i,n)}function a0(i,e){let t=1-i;return t*t*t*e}function l0(i,e){let t=1-i;return 3*t*t*i*e}function c0(i,e){return 3*(1-i)*i*i*e}function d0(i,e){return i*i*i*e}function no(i,e,t,n,r){return a0(i,e)+l0(i,t)+c0(i,n)+d0(i,r)}var go=class extends Rn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(no(e,r.x,s.x,o.x,a.x),no(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rl=class extends Rn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(no(e,r.x,s.x,o.x,a.x),no(e,r.y,s.y,o.y,a.y),no(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bo=class extends Rn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends Rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Rn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(to(e,r.x,s.x,o.x),to(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends Rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(to(e,r.x,s.x,o.x),to(e,r.y,s.y,o.y),to(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(su(a,c.x,l.x,d.x,f.x),su(a,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:nl,CatmullRomCurve3:il,CubicBezierCurve:go,CubicBezierCurve3:rl,EllipseCurve:vs,LineCurve:bo,LineCurve3:Pr,QuadraticBezierCurve:xo,QuadraticBezierCurve3:Ir,SplineCurve:_o}),Ms=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new sl[r.type]().fromJSON(r))}return this}},Dr=class extends Ms{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new bo(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new xo(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new go(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new vs(e,t,n,r,s,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tr=class extends Dr{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Dr().fromJSON(r))}return this}};function h0(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=ef(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=g0(i,e,s,t)),i.length>80*t){a=i[0],c=i[1];let d=a,f=c;for(let h=t;h<r;h+=t){let u=i[h],m=i[h+1];u<a&&(a=u),m<c&&(c=m),u>d&&(d=u),m>f&&(f=m)}l=Math.max(d-a,f-c),l=l!==0?32767/l:0}return yo(s,o,t,a,c,l,0),o}function ef(i,e,t,n,r){let s;if(r===A0(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=ou(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=ou(o/n|0,i[o],i[o+1],s);return s&&Ss(s,s.next)&&(Mo(s),s=s.next),s}function Lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ss(t,t.next)||It(t.prev,t,t.next)===0)){if(Mo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yo(i,e,t,n,r,s,o){if(!i)return;!o&&s&&v0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?f0(i,n,r,s):u0(i)){e.push(c.i,i.i,l.i),Mo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=p0(Lr(i),e),yo(i,e,t,n,r,s,2)):o===2&&m0(i,e,t,n,r,s):yo(Lr(i),e,t,n,r,s,1);break}}}function u0(i){let e=i.prev,t=i,n=i.next;if(It(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,d=Math.min(r,s,o),f=Math.min(a,c,l),h=Math.max(r,s,o),u=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=f&&m.y<=u&&Qs(r,a,s,c,o,l,m.x,m.y)&&It(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function f0(i,e,t,n){let r=i.prev,s=i,o=i.next;if(It(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,d=r.y,f=s.y,h=o.y,u=Math.min(a,c,l),m=Math.min(d,f,h),_=Math.max(a,c,l),g=Math.max(d,f,h),p=ud(u,m,e,t,n),S=ud(_,g,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Qs(a,d,c,f,l,h,M.x,M.y)&&It(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Qs(a,d,c,f,l,h,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=_&&M.y>=m&&M.y<=g&&M!==r&&M!==o&&Qs(a,d,c,f,l,h,M.x,M.y)&&It(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=u&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Qs(a,d,c,f,l,h,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function p0(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Ss(n,r)&&nf(n,t,t.next,r)&&vo(n,r)&&vo(r,n)&&(e.push(n.i,t.i,r.i),Mo(t),Mo(t.next),t=i=r),t=t.next}while(t!==i);return Lr(t)}function m0(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w0(o,a)){let c=rf(o,a);o=Lr(o,o.next),c=Lr(c,c.next),yo(o,e,t,n,r,s,0),yo(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function g0(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=ef(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(S0(l))}r.sort(b0);for(let s=0;s<r.length;s++)t=x0(r[s],t);return t}function b0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function x0(i,e){let t=_0(i,e);if(!t)return e;let n=rf(t,i);return Lr(n,n.next),Lr(t,t.next)}function _0(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(Ss(i,t))return t;do{if(Ss(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&tf(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){let f=Math.abs(r-t.y)/(n-t.x);vo(t,i)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&y0(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function y0(i,e){return It(i.prev,i,e.prev)<0&&It(e.next,i,i.next)<0}function v0(i,e,t,n){let r=i;do r.z===0&&(r.z=ud(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,M0(r)}function M0(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function ud(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function S0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tf(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Qs(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&tf(i,e,t,n,r,s,o,a)}function w0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!E0(i,e)&&(vo(i,e)&&vo(e,i)&&T0(i,e)&&(It(i.prev,i,e.prev)||It(i,e.prev,e))||Ss(i,e)&&It(i.prev,i,i.next)>0&&It(e.prev,e,e.next)>0)}function It(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ss(i,e){return i.x===e.x&&i.y===e.y}function nf(i,e,t,n){let r=Ca(It(i,e,t)),s=Ca(It(i,e,n)),o=Ca(It(t,n,i)),a=Ca(It(t,n,e));return!!(r!==s&&o!==a||r===0&&Ra(i,t,e)||s===0&&Ra(i,n,e)||o===0&&Ra(t,i,n)||a===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function E0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vo(i,e){return It(i.prev,i,i.next)<0?It(i,e,i.next)>=0&&It(i,i.prev,e)>=0:It(i,e,i.prev)<0||It(i,i.next,e)<0}function T0(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rf(i,e){let t=fd(i.i,i.x,i.y),n=fd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ou(i,e,t,n){let r=fd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var pd=class{static triangulate(e,t,n=2){return h0(e,t,n)}},Sr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];au(e),lu(n,e);let o=e.length;t.forEach(au);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,lu(n,t[c]);let a=pd.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Nr=class i extends mt{constructor(e=new tr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:R0,M,v=!1,C,E,T,b;if(p){M=p.getSpacedPoints(d),v=!0,h=!1;let ce=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(d,ce),E=new D,T=new D,b=new D}h||(g=0,u=0,m=0,_=0);let y=a.extractPoints(l),N=y.shape,P=y.holes;if(!Sr.isClockWise(N)){N=N.reverse();for(let ce=0,ge=P.length;ce<ge;ce++){let re=P[ce];Sr.isClockWise(re)&&(P[ce]=re.reverse())}}function F(ce){let re=10000000000000001e-36,Me=ce[0];for(let I=1;I<=ce.length;I++){let Xe=I%ce.length,Re=ce[Xe],ze=Re.x-Me.x,ye=Re.y-Me.y,A=ze*ze+ye*ye,x=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(Me.x),Math.abs(Me.y)),B=re*x*x;if(A<=B){ce.splice(Xe,1),I--;continue}Me=Re}}F(N),P.forEach(F);let k=P.length,O=N;for(let ce=0;ce<k;ce++){let ge=P[ce];N=N.concat(ge)}function z(ce,ge,re){return ge||Ke("ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ge,re)}let R=N.length;function j(ce,ge,re){let Me,I,Xe,Re=ce.x-ge.x,ze=ce.y-ge.y,ye=re.x-ce.x,A=re.y-ce.y,x=Re*Re+ze*ze,B=Re*A-ze*ye;if(Math.abs(B)>Number.EPSILON){let K=Math.sqrt(x),de=Math.sqrt(ye*ye+A*A),Q=ge.x-ze/K,Ce=ge.y+Re/K,Se=re.x-A/de,Be=re.y+ye/de,Ze=((Se-Q)*A-(Be-Ce)*ye)/(Re*A-ze*ye);Me=Q+Re*Ze-ce.x,I=Ce+ze*Ze-ce.y;let q=Me*Me+I*I;if(q<=2)return new pe(Me,I);Xe=Math.sqrt(q/2)}else{let K=!1;Re>Number.EPSILON?ye>Number.EPSILON&&(K=!0):Re<-Number.EPSILON?ye<-Number.EPSILON&&(K=!0):Math.sign(ze)===Math.sign(A)&&(K=!0),K?(Me=-ze,I=Re,Xe=Math.sqrt(x)):(Me=Re,I=ze,Xe=Math.sqrt(x/2))}return new pe(Me/Xe,I/Xe)}let Y=[];for(let ce=0,ge=O.length,re=ge-1,Me=ce+1;ce<ge;ce++,re++,Me++)re===ge&&(re=0),Me===ge&&(Me=0),Y[ce]=j(O[ce],O[re],O[Me]);let ae=[],me,ue=Y.concat();for(let ce=0,ge=k;ce<ge;ce++){let re=P[ce];me=[];for(let Me=0,I=re.length,Xe=I-1,Re=Me+1;Me<I;Me++,Xe++,Re++)Xe===I&&(Xe=0),Re===I&&(Re=0),me[Me]=j(re[Me],re[Xe],re[Re]);ae.push(me),ue=ue.concat(me)}let te;if(g===0)te=Sr.triangulateShape(O,P);else{let ce=[],ge=[];for(let re=0;re<g;re++){let Me=re/g,I=u*Math.cos(Me*Math.PI/2),Xe=m*Math.sin(Me*Math.PI/2)+_;for(let Re=0,ze=O.length;Re<ze;Re++){let ye=z(O[Re],Y[Re],Xe);fe(ye.x,ye.y,-I),Me===0&&ce.push(ye)}for(let Re=0,ze=k;Re<ze;Re++){let ye=P[Re];me=ae[Re];let A=[];for(let x=0,B=ye.length;x<B;x++){let K=z(ye[x],me[x],Xe);fe(K.x,K.y,-I),Me===0&&A.push(K)}Me===0&&ge.push(A)}}te=Sr.triangulateShape(ce,ge)}let le=te.length,se=m+_;for(let ce=0;ce<R;ce++){let ge=h?z(N[ce],ue[ce],se):N[ce];v?(T.copy(C.normals[0]).multiplyScalar(ge.x),E.copy(C.binormals[0]).multiplyScalar(ge.y),b.copy(M[0]).add(T).add(E),fe(b.x,b.y,b.z)):fe(ge.x,ge.y,0)}for(let ce=1;ce<=d;ce++)for(let ge=0;ge<R;ge++){let re=h?z(N[ge],ue[ge],se):N[ge];v?(T.copy(C.normals[ce]).multiplyScalar(re.x),E.copy(C.binormals[ce]).multiplyScalar(re.y),b.copy(M[ce]).add(T).add(E),fe(b.x,b.y,b.z)):fe(re.x,re.y,f/d*ce)}for(let ce=g-1;ce>=0;ce--){let ge=ce/g,re=u*Math.cos(ge*Math.PI/2),Me=m*Math.sin(ge*Math.PI/2)+_;for(let I=0,Xe=O.length;I<Xe;I++){let Re=z(O[I],Y[I],Me);fe(Re.x,Re.y,f+re)}for(let I=0,Xe=P.length;I<Xe;I++){let Re=P[I];me=ae[I];for(let ze=0,ye=Re.length;ze<ye;ze++){let A=z(Re[ze],me[ze],Me);v?fe(A.x,A.y+M[d-1].y,M[d-1].x+re):fe(A.x,A.y,f+re)}}}V(),oe();function V(){let ce=r.length/3;if(h){let ge=0,re=R*ge;for(let Me=0;Me<le;Me++){let I=te[Me];Ae(I[2]+re,I[1]+re,I[0]+re)}ge=d+g*2,re=R*ge;for(let Me=0;Me<le;Me++){let I=te[Me];Ae(I[0]+re,I[1]+re,I[2]+re)}}else{for(let ge=0;ge<le;ge++){let re=te[ge];Ae(re[2],re[1],re[0])}for(let ge=0;ge<le;ge++){let re=te[ge];Ae(re[0]+R*d,re[1]+R*d,re[2]+R*d)}}n.addGroup(ce,r.length/3-ce,0)}function oe(){let ce=r.length/3,ge=0;ne(O,ge),ge+=O.length;for(let re=0,Me=P.length;re<Me;re++){let I=P[re];ne(I,ge),ge+=I.length}n.addGroup(ce,r.length/3-ce,1)}function ne(ce,ge){let re=ce.length;for(;--re>=0;){let Me=re,I=re-1;I<0&&(I=ce.length-1);for(let Xe=0,Re=d+g*2;Xe<Re;Xe++){let ze=R*Xe,ye=R*(Xe+1),A=ge+Me+ze,x=ge+I+ze,B=ge+I+ye,K=ge+Me+ye;Pe(A,x,B,K)}}}function fe(ce,ge,re){c.push(ce),c.push(ge),c.push(re)}function Ae(ce,ge,re){Ge(ce),Ge(ge),Ge(re);let Me=r.length/3,I=S.generateTopUV(n,r,Me-3,Me-2,Me-1);We(I[0]),We(I[1]),We(I[2])}function Pe(ce,ge,re,Me){Ge(ce),Ge(ge),Ge(Me),Ge(ge),Ge(re),Ge(Me);let I=r.length/3,Xe=S.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);We(Xe[0]),We(Xe[1]),We(Xe[3]),We(Xe[1]),We(Xe[2]),We(Xe[3])}function Ge(ce){r.push(c[ce*3+0]),r.push(c[ce*3+1]),r.push(c[ce*3+2])}function We(ce){s.push(ce.x),s.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sl[r.type]().fromJSON(r)),new i(n,e.options)}},R0={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],d=e[r*3+1];return[new pe(s,o),new pe(a,c),new pe(l,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],f=e[n*3+2],h=e[r*3],u=e[r*3+1],m=e[r*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-d)<Math.abs(o-l)?[new pe(o,1-c),new pe(l,1-f),new pe(h,1-m),new pe(_,1-p)]:[new pe(a,1-c),new pe(d,1-f),new pe(u,1-m),new pe(g,1-p)]}};function C0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ur=class i extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,f=e/a,h=t/c,u=[],m=[],_=[],g=[];for(let p=0;p<d;p++){let S=p*h-o;for(let M=0;M<l;M++){let v=M*f-s;m.push(v,-S,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let M=S+l*p,v=S+l*(p+1),C=S+1+l*(p+1),E=S+1+l*p;u.push(M,v,E),u.push(v,C,E)}this.setIndex(u),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var So=class i extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new D,h=new D,u=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let S=[],M=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let E=C/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),g.push(E+v,1-M),S.push(l++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let M=d[p][S+1],v=d[p][S],C=d[p+1][S],E=d[p+1][S+1];(p!==0||o>0)&&u.push(M,v,E),(p!==n-1||c<Math.PI)&&u.push(v,C,E)}this.setIndex(u),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wo=class i extends mt{constructor(e=new Ir(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new pe,d=new D,f=[],h=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function _(){for(let M=0;M<t;M++)g(M);g(s===!1?t:0),S(),p()}function g(M){d=e.getPointAt(M/t,d);let v=o.normals[M],C=o.binormals[M];for(let E=0;E<=r;E++){let T=E/r*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);c.x=y*v.x+b*C.x,c.y=y*v.y+b*C.y,c.z=y*v.z+b*C.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){let C=(r+1)*(M-1)+(v-1),E=(r+1)*M+(v-1),T=(r+1)*M+v,b=(r+1)*(M-1)+v;m.push(C,E,b),m.push(E,T,b)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)l.x=M/t,l.y=v/r,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Br(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){let e={};for(let t=0;t<i.length;t++){let n=Br(i[t]);for(let r in n)e[r]=n[r]}return e}function P0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var sf={clone:Br,merge:fn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ol=class extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rt=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var al=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var nr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends nr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ld,endingEnd:ld}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case cd:s=e,a=2*t-n;break;case dd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cd:o=e,c=2*n-t;break;case dd:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,S=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,M=(-1-u)*g+(1.5+u)*_+.5*m,v=u*g-u*_;for(let C=0;C!==a;++C)s[C]=p*o[d+C]+S*o[l+C]+M*o[c+C]+v*o[f+C];return s}},dl=class extends nr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(r-t),f=1-d;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*d;return s}},hl=class extends nr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends nr{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.settings||this.DefaultSettings_,f=d.inTangents,h=d.outTangents;if(!f||!h){let _=(n-t)/(r-t),g=1-_;for(let p=0;p!==a;++p)s[p]=o[l+p]*g+o[c+p]*_;return s}let u=a*2,m=e-1;for(let _=0;_!==a;++_){let g=o[l+_],p=o[c+_],S=m*u+_*2,M=h[S],v=h[S+1],C=e*u+_*2,E=f[C],T=f[C+1],b=(n-t)/(r-t),y,N,P,L,F;for(let k=0;k<8;k++){y=b*b,N=y*b,P=1-b,L=P*P,F=L*P;let z=F*t+3*L*b*M+3*P*y*E+N*r-n;if(Math.abs(z)<1e-10)break;let R=3*L*(M-t)+6*P*b*(E-M)+3*y*(r-E);if(Math.abs(R)<1e-10)break;b=b-z/R,b=Math.max(0,Math.min(1,b))}s[_]=F*g+3*L*b*v+3*P*y*T+N*p}return s}},Pn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case io:t=this.InterpolantFactoryMethodDiscrete;break;case ja:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break;case ad:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Na;case this.InterpolantFactoryMethodBezier:return ad}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ke("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Sp(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Na,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*n,h=f-n,u=f+n;for(let m=0;m!==n;++m){let _=t[f+m];if(_!==t[h+m]||_!==t[u+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let u=0;u!==n;++u)t[h+u]=t[f+u]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ja;var ir=class extends Pn{constructor(e,t,n){super(e,t,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=io;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};fl.prototype.ValueTypeName="color";var pl=class extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};pl.prototype.ValueTypeName="number";var ml=class extends nr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let d=l+a;l!==d;l+=4)en.slerpFlat(s,0,o,l-a,o,l,c);return s}},Eo=class extends Pn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends Pn{constructor(e,t,n){super(e,t,n)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=io;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Pn{constructor(e,t,n,r){super(e,t,n,r)}};gl.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=l.length;f<h;f+=2){let u=l[f],m=l[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new bl,xl=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ao=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sd=new ot,cu=new D,du=new D,md=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new D,Da=new en,ci=new D,Ro=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,Da,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ia,Da,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Da,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new D,hu=new pe,uu=new pe,un=class extends Ro{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,hu,uu),t.subVectors(uu,hu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ws=class extends Ro{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gd=class extends md{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new gd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=-90,ds=1,_l=class extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(cs,ds,e,t);r.layers=this.layers,this.add(r);let s=new un(cs,ds,e,t);s.layers=this.layers,this.add(s);let o=new un(cs,ds,e,t);o.layers=this.layers,this.add(o);let a=new un(cs,ds,e,t);a.layers=this.layers,this.add(a);let c=new un(cs,ds,e,t);c.layers=this.layers,this.add(c);let l=new un(cs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yl=class extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Gd="\\[\\]\\.:\\/",L0=new RegExp("["+Gd+"]","g"),Wd="[^"+Gd+"]",N0="[^"+Gd.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Wd),F0=/(WCOD+)?/.source.replace("WCOD",N0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wd),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wd),B0=new RegExp("^"+U0+F0+z0+O0+"$"),k0=["material","materials","bones","map"],bd=class{constructor(e,t,n){let r=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L0,"")}static parseTrackName(e){let t=B0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);k0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=bd;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m_=new Float32Array(1);var fu=new ot,Co=class{constructor(e,t,n=0,r=1/0){this.ray=new Qi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fu),this}intersectObject(e,t=!0,n=[]){return xd(e,this,n,t),n.sort(pu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)xd(e[r],this,n,t);return n.sort(pu),n}};function pu(i,e){return i.distance-e.distance}function xd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)xd(s[o],e,t,!0)}}var Ts=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Po=class extends Wt{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new mt;s.setIndex(new on(n,1)),s.setAttribute("position",new ct(r,3)),super(s,new tn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var mu=new D,La,od,Fr=class extends jt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",La===void 0&&(La=new mt,La.setAttribute("position",new ct([0,0,0,0,1,0],3)),od=new tl(.5,1,5,1),od.translate(0,-.5,0)),this.position.copy(t),this.line=new Cr(La,new tn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(od,new Bn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{mu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(mu,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Io=class extends pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Xd(i,e,t,n){let r=V0(n);switch(t){case Ud:return i*e;case zd:return i*e/r.components*r.byteLength;case Al:return i*e/r.components*r.byteLength;case Or:return i*e*2/r.components*r.byteLength;case Rl:return i*e*2/r.components*r.byteLength;case Fd:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case Cl:return i*e*4/r.components*r.byteLength;case Fo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:case Ll:return Math.max(i,16)*Math.max(e,8)/4;case Pl:case Dl:return Math.max(i,8)*Math.max(e,8)/2;case Nl:case Ul:case zl:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Bl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V0(i){switch(i){case vn:case Id:return{byteLength:1,components:1};case Rs:case Dd:case xi:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Kn:case wl:case Qn:return{byteLength:4,components:1};case Ld:case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function q0(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<f.length;u++){let m=f[h],_=f[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let u=0,m=f.length;u<m;u++){let _=f[u];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
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
#endif`,J0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,jm=`uniform sampler2D dfgLUT;
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,x1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,y1=`#define TOON
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
}`,v1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Y0,alphahash_pars_fragment:Z0,alphamap_fragment:J0,alphamap_pars_fragment:$0,alphatest_fragment:K0,alphatest_pars_fragment:Q0,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:rm,beginnormal_vertex:sm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:bm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:wm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Pm,fog_vertex:Im,fog_pars_vertex:Dm,fog_fragment:Lm,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:jm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Qm,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:rg,metalnessmap_pars_fragment:sg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:dg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:yg,opaque_fragment:vg,packing:Mg,premultiplied_alpha_fragment:Sg,project_vertex:wg,dithering_fragment:Eg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:zg,specularmap_pars_fragment:Og,tonemapping_fragment:Bg,tonemapping_pars_fragment:kg,transmission_fragment:Vg,transmission_pars_fragment:Hg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:jg,background_vert:qg,background_frag:Yg,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:$g,cube_frag:Kg,depth_vert:Qg,depth_frag:e1,distance_vert:t1,distance_frag:n1,equirect_vert:i1,equirect_frag:r1,linedashed_vert:s1,linedashed_frag:o1,meshbasic_vert:a1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:d1,meshmatcap_vert:h1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:b1,meshphysical_frag:x1,meshtoon_vert:_1,meshtoon_frag:y1,points_vert:v1,points_frag:M1,shadow_vert:S1,shadow_frag:w1,sprite_vert:E1,sprite_frag:T1},Ie={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},yi={basic:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new at(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:fn([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:fn([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:fn([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:fn([Ie.lights,Ie.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var dc={r:0,b:0,g:0},kr=new Jn,A1=new ot;function R1(i,e,t,n,r,s){let o=new at(0),a=r===!0?0:1,c,l,d=null,f=0,h=null;function u(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(S){let M=!1,v=u(S);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,M){let v=u(M);v&&(v.isCubeTexture||v.mapping===No)?(l===void 0&&(l=new lt(new qt(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Br(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),kr.copy(M.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(A1.makeRotationFromEuler(kr)),l.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,(d!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new lt(new Ur(2,2),new Cn({name:"BackgroundMaterial",uniforms:Br(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,M){S.getRGB(dc,Hd(i)),t.buffers.color.setClear(dc.r,dc.g,dc.b,M,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:_,dispose:p}}function C1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,L,F,k,O){let z=!1,R=f(P,k,F,L);s!==R&&(s=R,l(s.object)),z=u(P,k,F,O),z&&m(P,k,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(P,L,F,k),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function f(P,L,F,k){let O=k.wireframe===!0,z=n[L.id];z===void 0&&(z={},n[L.id]=z);let R=P.isInstancedMesh===!0?P.id:0,j=z[R];j===void 0&&(j={},z[R]=j);let Y=j[F.id];Y===void 0&&(Y={},j[F.id]=Y);let ae=Y[O];return ae===void 0&&(ae=h(c()),Y[O]=ae),ae}function h(P){let L=[],F=[],k=[];for(let O=0;O<t;O++)L[O]=0,F[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:P,attributes:{},index:null}}function u(P,L,F,k){let O=s.attributes,z=L.attributes,R=0,j=F.getAttributes();for(let Y in j)if(j[Y].location>=0){let me=O[Y],ue=z[Y];if(ue===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),me===void 0||me.attribute!==ue||ue&&me.data!==ue.data)return!0;R++}return s.attributesNum!==R||s.index!==k}function m(P,L,F,k){let O={},z=L.attributes,R=0,j=F.getAttributes();for(let Y in j)if(j[Y].location>=0){let me=z[Y];me===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(me=P.instanceColor));let ue={};ue.attribute=me,me&&me.data&&(ue.data=me.data),O[Y]=ue,R++}s.attributes=O,s.attributesNum=R,s.index=k}function _(){let P=s.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function g(P){p(P,0)}function p(P,L){let F=s.newAttributes,k=s.enabledAttributes,O=s.attributeDivisors;F[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),O[P]!==L&&(i.vertexAttribDivisor(P,L),O[P]=L)}function S(){let P=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function M(P,L,F,k,O,z,R){R===!0?i.vertexAttribIPointer(P,L,F,O,z):i.vertexAttribPointer(P,L,F,k,O,z)}function v(P,L,F,k){_();let O=k.attributes,z=F.getAttributes(),R=L.defaultAttributeValues;for(let j in z){let Y=z[j];if(Y.location>=0){let ae=O[j];if(ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){let me=ae.normalized,ue=ae.itemSize,te=e.get(ae);if(te===void 0)continue;let le=te.buffer,se=te.type,V=te.bytesPerElement,oe=se===i.INT||se===i.UNSIGNED_INT||ae.gpuType===wl;if(ae.isInterleavedBufferAttribute){let ne=ae.data,fe=ne.stride,Ae=ae.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)p(Y.location+Pe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)g(Y.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,le);for(let Pe=0;Pe<Y.locationSize;Pe++)M(Y.location+Pe,ue/Y.locationSize,se,me,fe*V,(Ae+ue/Y.locationSize*Pe)*V,oe)}else{if(ae.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)p(Y.location+ne,ae.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ne=0;ne<Y.locationSize;ne++)g(Y.location+ne);i.bindBuffer(i.ARRAY_BUFFER,le);for(let ne=0;ne<Y.locationSize;ne++)M(Y.location+ne,ue/Y.locationSize,se,me,ue*V,ue/Y.locationSize*ne*V,oe)}}else if(R!==void 0){let me=R[j];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Y.location,me);break;case 3:i.vertexAttrib3fv(Y.location,me);break;case 4:i.vertexAttrib4fv(Y.location,me);break;default:i.vertexAttrib1fv(Y.location,me)}}}}S()}function C(){y();for(let P in n){let L=n[P];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let k=L[F];for(let O in k){let z=k[O];for(let R in z)d(z[R].object),delete z[R];delete k[O]}}delete n[P.id]}function T(P){for(let L in n){let F=n[L];for(let k in F){let O=F[k];if(O[P.id]===void 0)continue;let z=O[P.id];for(let R in z)d(z[R].object),delete z[R];delete O[P.id]}}}function b(P){for(let L in n){let F=n[L],k=P.isInstancedMesh===!0?P.id:0,O=F[k];if(O!==void 0){for(let z in O){let R=O[z];for(let j in R)d(R[j].object),delete R[j];delete O[z]}delete F[k],Object.keys(F).length===0&&delete n[L]}}}function y(){N(),o=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function P1(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function o(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),t.update(d,n,f))}function a(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let u=0;for(let m=0;m<f;m++)u+=d[m];t.update(u,n,1)}function c(l,d,f,h){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<l.length;m++)o(l[m],d[m],h[m]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_]*h[_];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function I1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qn&&!b)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&($e("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:C,samples:E}}function D1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new yn,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||n!==0||r;return r=h,n=f.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){let m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{let S=s?0:n,M=S*4,v=p.clippingState||null;c.value=v,v=d(m,h,M,u);for(let C=0;C!==M;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,u,m){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=u+_*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=u;M!==_;++M,v+=4)o.copy(f[M]).applyMatrix4(S,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var dr=4,af=[.125,.215,.35,.446,.526,.582],Hr=20,L1=256,ko=new ws,lf=new at,jd=null,qd=0,Yd=0,Zd=!1,N1=new D,uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=N1}=s;jd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,qd,Yd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:xi,format:kn,colorSpace:Tr,depthBuffer:!1},r=cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U1(s)),this._blurMaterial=z1(s,e,t),this._ggxMaterial=F1(s,e,t)}return r}_compileMaterial(e){let t=new lt(new mt,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,r,s){let c=new un(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(lf),f.toneMapping=$n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new qt,new Bn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(lf),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[M],s.y,s.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[M]));let C=this._cubeSize;Ps(r,v*C,M>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(_,c),f.render(e,c)}f.toneMapping=u,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ar||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=df());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ps(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),h=0+l*1.25,u=f*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-dr?n-m+dr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=m-t,Ps(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,ko),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Ps(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(a,ko)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");let d=3,f=this._lodMeshes[r];f.material=l;let h=l.uniforms,u=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Hr-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):Hr;g>Hr&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hr}`);let p=[],S=0;for(let T=0;T<Hr;++T){let b=T/_,y=Math.exp(-b*b/2);p.push(y),T===0?S+=y:T<g&&(S+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=m,h.mipInt.value=M-n;let v=this._sizeLods[r],C=3*v*(r>M-dr?r-M+dr:0),E=4*(this._cubeSize-v);Ps(t,C,E,3*v,2*v),c.setRenderTarget(t),c.render(f,ko)}};function U1(i){let e=[],t=[],n=[],r=i,s=i-dr+1+af.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-dr?c=af[o-i+dr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),d=-l,f=1+l,h=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*u),M=new Float32Array(g*m*u),v=new Float32Array(p*m*u);for(let E=0;E<u;E++){let T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(y,_*m*E),M.set(h,g*m*E);let N=[E,E,E,E,E,E];v.set(N,p*m*E)}let C=new mt;C.setAttribute("position",new on(S,_)),C.setAttribute("uv",new on(M,g)),C.setAttribute("faceIndex",new on(v,p)),n.push(new lt(C,null)),r>dr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function cf(i,e,t){let n=new An(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function F1(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function z1(i,e,t){let n=new Float32Array(Hr),r=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function df(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function hf(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}var fc=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new po(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qt(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:bi});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===lr&&(t.minFilter=an),new _l(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function O1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,u=!1){return h==null?null:u?o(h):s(h)}function s(h){if(h&&h.isTexture){let u=h.mapping;if(u===vl||u===Ml)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new fc(m.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,m=u===vl||u===Ml,_=u===ar||u===zr;if(m||_){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new uc(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let S=h.image;return m&&S&&S.height>0||_&&S&&c(S)?(n===null&&(n=new uc(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,u){return u===vl?h.mapping=ar:u===Ml&&(h.mapping=zr),h}function c(h){let u=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&u++;return u===m}function l(h){let u=h.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function B1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ao("WebGLRenderer: "+n+" extension not supported."),r}}}function k1(i,e,t,n){let r={},s=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];let u=s.get(h);u&&(e.remove(u),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let u in h)e.update(h[u],i.ARRAY_BUFFER)}function l(f){let h=[],u=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(u!==null){let S=u.array;_=u.version;for(let M=0,v=S.length;M<v;M+=3){let C=S[M+0],E=S[M+1],T=S[M+2];h.push(C,E,E,T,T,C)}}else{let S=m.array;_=m.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let C=M+0,E=M+1,T=M+2;h.push(C,E,E,T,T,C)}}let g=new(m.count>=65535?uo:ho)(h,1);g.version=_;let p=s.get(f);p&&e.remove(p),s.set(f,g)}function d(f){let h=s.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function V1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,u){i.drawElements(n,u,s,h*o),t.update(u,n,1)}function l(h,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,h*o,m),t.update(u,n,m))}function d(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,n,1)}function f(h,u,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,u[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,u,0,s,h,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=u[S]*_[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function H1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function G1(i,e,t){let n=new WeakMap,r=new Dt;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==f){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*f),T=new lo(E,v,C,f);T.type=Qn,T.needsUpdate=!0;let b=M*4;for(let N=0;N<f;N++){let P=g[N],L=p[N],F=S[N],k=v*C*4*N;for(let O=0;O<P.count;O++){let z=O*b;u===!0&&(r.fromBufferAttribute(P,O),E[k+z+0]=r.x,E[k+z+1]=r.y,E[k+z+2]=r.z,E[k+z+3]=0),m===!0&&(r.fromBufferAttribute(L,O),E[k+z+4]=r.x,E[k+z+5]=r.y,E[k+z+6]=r.z,E[k+z+7]=0),_===!0&&(r.fromBufferAttribute(F,O),E[k+z+8]=r.x,E[k+z+9]=r.y,E[k+z+10]=r.z,E[k+z+11]=F.itemSize===4?r.w:1)}}h={count:f,texture:T,size:new pe(v,C)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let m=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function W1(i,e,t,n,r){let s=new WeakMap;function o(l){let d=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==d&&(u.update(),s.set(u,d))}return h}function a(){s=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var X1={[wd]:"LINEAR_TONE_MAPPING",[Ed]:"REINHARD_TONE_MAPPING",[Td]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[Rd]:"AGX_TONE_MAPPING",[Cd]:"NEUTRAL_TONE_MAPPING",[Ad]:"CUSTOM_TONE_MAPPING"};function j1(i,e,t,n,r){let s=new An(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new An(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),a=new mt;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));let c=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new lt(a,c),d=new ws(-1,1,1,-1,0,1),f=null,h=null,u=!1,m,_=null,g=[],p=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let v=0;v<g.length;v++){let C=g[v];C.setSize&&C.setSize(S,M)}},this.setEffects=function(S){g=S,p=g.length>0&&g[0].isRenderPass===!0;let M=s.width,v=s.height;for(let C=0;C<g.length;C++){let E=g[C];E.setSize&&E.setSize(M,v)}},this.begin=function(S,M){if(u||S.toneMapping===$n&&g.length===0)return!1;if(_=M,M!==null){let v=M.width,C=M.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return p===!1&&S.setRenderTarget(s),m=S.toneMapping,S.toneMapping=$n,!0},this.hasRenderPass=function(){return p},this.end=function(S,M){S.toneMapping=m,u=!0;let v=s,C=o;for(let E=0;E<g.length;E++){let T=g[E];if(T.enabled!==!1&&(T.render(S,C,v,M),T.needsSwap!==!1)){let b=v;v=C,C=b}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,c.defines={},ht.getTransfer(f)===yt&&(c.defines.SRGB_TRANSFER="");let E=X1[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(_),S.render(l,d),_=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var Pf=new gn,Kd=new er(1,1),If=new lo,Df=new Ja,Lf=new po,uf=[],ff=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=uf[r];if(s===void 0&&(s=new Float32Array(r),uf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gc(i,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function J1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function $1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;gf.set(n),i.uniformMatrix2fv(this.addr,!1,gf),Zt(t,n)}}function K1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;mf.set(n),i.uniformMatrix3fv(this.addr,!1,mf),Zt(t,n)}}function Q1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;pf.set(n),i.uniformMatrix4fv(this.addr,!1,pf),Zt(t,n)}}function eb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function rb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function ab(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function lb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Kd.compareFunction=t.isReversedDepthBuffer()?cc:lc,s=Kd):s=Pf,t.setTexture2D(e||s,r)}function cb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Df,r)}function db(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lf,r)}function hb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||If,r)}function ub(i){switch(i){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return J1;case 35674:return $1;case 35675:return K1;case 35676:return Q1;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return hb}}function fb(i,e){i.uniform1fv(this.addr,e)}function pb(i,e){let t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function mb(i,e){let t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function gb(i,e){let t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function bb(i,e){let t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xb(i,e){let t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _b(i,e){let t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yb(i,e){i.uniform1iv(this.addr,e)}function vb(i,e){i.uniform2iv(this.addr,e)}function Mb(i,e){i.uniform3iv(this.addr,e)}function Sb(i,e){i.uniform4iv(this.addr,e)}function wb(i,e){i.uniform1uiv(this.addr,e)}function Eb(i,e){i.uniform2uiv(this.addr,e)}function Tb(i,e){i.uniform3uiv(this.addr,e)}function Ab(i,e){i.uniform4uiv(this.addr,e)}function Rb(i,e,t){let n=this.cache,r=e.length,s=gc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Kd:o=Pf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Cb(i,e,t){let n=this.cache,r=e.length,s=gc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Df,s[o])}function Pb(i,e,t){let n=this.cache,r=e.length,s=gc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Lf,s[o])}function Ib(i,e,t){let n=this.cache,r=e.length,s=gc(t,r);Yt(n,s)||(i.uniform1iv(this.addr,s),Zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||If,s[o])}function Db(i){switch(i){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return bb;case 35675:return xb;case 35676:return _b;case 5124:case 35670:return yb;case 35667:case 35671:return vb;case 35668:case 35672:return Mb;case 35669:case 35673:return Sb;case 5125:return wb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}var Qd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ub(t.type)}},eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}},th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Jd=/(\w+)(\])?(\[|\.)?/g;function bf(i,e){i.seq.push(e),i.map[e.id]=e}function Lb(i,e,t){let n=i.name,r=n.length;for(Jd.lastIndex=0;;){let s=Jd.exec(n),o=Jd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){bf(t,l===void 0?new Qd(a,i,e):new eh(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new th(a),bf(t,f)),t=f}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Lb(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function xf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Nb=37297,Ub=0;function Fb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var _f=new et;function zb(i){ht._getMatrix(_f,ht.workingColorSpace,i);let e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ro:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Fb(i.getShaderSource(e),a)}else return s}function Ob(i,e){let t=zb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bb={[wd]:"Linear",[Ed]:"Reinhard",[Td]:"Cineon",[Lo]:"ACESFilmic",[Rd]:"AgX",[Cd]:"Neutral",[Ad]:"Custom"};function kb(i,e){let t=Bb[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hc=new D;function Vb(){ht.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function Gb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ho(i){return i!==""}function vf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(Xb,qb)}var jb=new Map;function qb(i,e){let t=nt[e];if(t===void 0){let n=jb.get(e);if(n!==void 0)t=nt[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}var Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(Yb,Zb)}function Zb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Jb={[Do]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function $b(i){return Jb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kb={[ar]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE_UV"};function Qb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ex={[zr]:"ENVMAP_MODE_REFRACTION"};function tx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nx={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Ou]:"ENVMAP_BLENDING_ADD"};function ix(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nx[i.combine]||"ENVMAP_BLENDING_NONE"}function rx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sx(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=$b(t),l=Qb(t),d=tx(t),f=ix(t),h=rx(t),u=Hb(t),m=Gb(s),_=r.createProgram(),g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(g=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?nt.tonemapping_pars_fragment:"",t.toneMapping!==$n?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),o=nh(o),o=vf(o,t),o=Mf(o,t),a=nh(a),a=vf(a,t),a=Mf(a,t),o=Sf(o),a=Sf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+g+o,v=S+p+a,C=xf(r,r.VERTEX_SHADER,M),E=xf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(E)||"",O=L.trim(),z=F.trim(),R=k.trim(),j=!0,Y=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,E);else{let ae=yf(r,C,"vertex"),me=yf(r,E,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ae+`
`+me)}else O!==""?$e("WebGLProgram: Program Info Log:",O):(z===""||R==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:g},fragmentShader:{log:R,prefix:p}})}r.deleteShader(C),r.deleteShader(E),b=new Is(r,_),y=Wb(r,_)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,Nb)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}var ox=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rh(e),t.set(e,n)),n}},rh=class{constructor(e){this.id=ox++,this.code=e,this.usedTimes=0}};function ax(i,e,t,n,r,s){let o=new bs,a=new ih,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,y,N,P,L){let F=P.fog,k=L.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,R=e.get(b.envMap||O,z),j=R&&R.mapping===No?R.image.height:null,Y=u[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&$e("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=ae!==void 0?ae.length:0,ue=0;k.morphAttributes.position!==void 0&&(ue=1),k.morphAttributes.normal!==void 0&&(ue=2),k.morphAttributes.color!==void 0&&(ue=3);let te,le,se,V;if(Y){let je=yi[Y];te=je.vertexShader,le=je.fragmentShader}else te=b.vertexShader,le=b.fragmentShader,a.update(b),se=a.getVertexShaderID(b),V=a.getFragmentShaderID(b);let oe=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),fe=L.isInstancedMesh===!0,Ae=L.isBatchedMesh===!0,Pe=!!b.map,Ge=!!b.matcap,We=!!R,ce=!!b.aoMap,ge=!!b.lightMap,re=!!b.bumpMap,Me=!!b.normalMap,I=!!b.displacementMap,Xe=!!b.emissiveMap,Re=!!b.metalnessMap,ze=!!b.roughnessMap,ye=b.anisotropy>0,A=b.clearcoat>0,x=b.dispersion>0,B=b.iridescence>0,K=b.sheen>0,de=b.transmission>0,Q=ye&&!!b.anisotropyMap,Ce=A&&!!b.clearcoatMap,Se=A&&!!b.clearcoatNormalMap,Be=A&&!!b.clearcoatRoughnessMap,Ze=B&&!!b.iridescenceMap,q=B&&!!b.iridescenceThicknessMap,ie=K&&!!b.sheenColorMap,we=K&&!!b.sheenRoughnessMap,_e=!!b.specularMap,ve=!!b.specularColorMap,Ue=!!b.specularIntensityMap,U=de&&!!b.transmissionMap,G=de&&!!b.thicknessMap,X=!!b.gradientMap,he=!!b.alphaMap,Z=b.alphaTest>0,W=!!b.alphaHash,xe=!!b.extensions,Ee=$n;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let ke={shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:le,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&L._colorsTexture!==null,instancing:fe,instancingColor:fe&&L.instanceColor!==null,instancingMorph:fe&&L.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Tr,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:Ge,envMap:We,envMapMode:We&&R.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:ge,bumpMap:re,normalMap:Me,displacementMap:I,emissiveMap:Xe,normalMapObjectSpace:Me&&b.normalMapType===Vu,normalMapTangentSpace:Me&&b.normalMapType===Od,metalnessMap:Re,roughnessMap:ze,anisotropy:ye,anisotropyMap:Q,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:Se,clearcoatRoughnessMap:Be,dispersion:x,iridescence:B,iridescenceMap:Ze,iridescenceThicknessMap:q,sheen:K,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:_e,specularColorMap:ve,specularIntensityMap:Ue,transmission:de,transmissionMap:U,thicknessMap:G,gradientMap:X,opaque:b.transparent===!1&&b.blending===wr&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:W,combine:b.combine,mapUv:Pe&&m(b.map.channel),aoMapUv:ce&&m(b.aoMap.channel),lightMapUv:ge&&m(b.lightMap.channel),bumpMapUv:re&&m(b.bumpMap.channel),normalMapUv:Me&&m(b.normalMap.channel),displacementMapUv:I&&m(b.displacementMap.channel),emissiveMapUv:Xe&&m(b.emissiveMap.channel),metalnessMapUv:Re&&m(b.metalnessMap.channel),roughnessMapUv:ze&&m(b.roughnessMap.channel),anisotropyMapUv:Q&&m(b.anisotropyMap.channel),clearcoatMapUv:Ce&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:q&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(b.sheenRoughnessMap.channel),specularMapUv:_e&&m(b.specularMap.channel),specularColorMapUv:ve&&m(b.specularColorMap.channel),specularIntensityMapUv:Ue&&m(b.specularIntensityMap.channel),transmissionMapUv:U&&m(b.transmissionMap.channel),thicknessMapUv:G&&m(b.thicknessMap.channel),alphaMapUv:he&&m(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Pe||he),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===yt,decodeVideoTextureEmissive:Xe&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lt,flipSided:b.side===bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)y.push(N),y.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(p(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function p(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let y=u[b.type],N;if(y){let P=yi[y];N=sf.clone(P.uniforms)}else N=b.uniforms;return N}function v(b,y){let N=d.get(y);return N!==void 0?++N.usedTimes:(N=new sx(i,y,b,r),l.push(N),d.set(y,N)),N}function C(b){if(--b.usedTimes===0){let y=l.indexOf(b);l[y]=l[l.length-1],l.pop(),d.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:C,releaseShaderCache:E,programs:l,dispose:T}}function lx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ef(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,m,_,g,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:u,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=u,S.material=m,S.materialVariant=o(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=g,S.group=p),e++,S}function c(h,u,m,_,g,p){let S=a(h,u,m,_,g,p);m.transmission>0?n.push(S):m.transparent===!0?r.push(S):t.push(S)}function l(h,u,m,_,g,p){let S=a(h,u,m,_,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,u){t.length>1&&t.sort(h||cx),n.length>1&&n.sort(u||Ef),r.length>1&&r.sort(u||Ef)}function f(){for(let h=e,u=i.length;h<u;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:d}}function dx(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Tf,i.set(n,[o])):r>=s.length?(o=new Tf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function hx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new at};break;case"SpotLight":t={position:new D,direction:new D,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fx=0;function px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mx(i){let e=new hx,t=ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new ot,o=new ot;function a(l){let d=0,f=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,S=0,M=0,v=0,C=0,E=0,T=0;l.sort(px);for(let y=0,N=l.length;y<N;y++){let P=l[y],L=P.color,F=P.intensity,k=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Or?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=L.r*F,f+=L.g*F,h+=L.b*F;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],F);T++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,j=t.get(P);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.directionalShadow[u]=j,n.directionalShadowMap[u]=O,n.directionalShadowMatrix[u]=P.shadow.matrix,S++}n.directional[u]=z,u++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(L).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;let R=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,R.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=R.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=O,v++}_++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(L).multiplyScalar(F),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let R=P.shadow,j=t.get(P);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=P.shadow.matrix,M++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(F),z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;let b=n.hash;(b.directionalLength!==u||b.pointLength!==m||b.spotLength!==_||b.rectAreaLength!==g||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==C||b.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=u,b.pointLength=m,b.spotLength=_,b.rectAreaLength=g,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=C,b.numLightProbes=T,n.version=fx++)}function c(l,d){let f=0,h=0,u=0,m=0,_=0,g=d.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let M=l[p];if(M.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(M.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),u++}else if(M.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Af(i){let e=new mx(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function gx(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Af(i),e.set(r,[a])):s>=o.length?(a=new Af(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
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
}`,_x=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],yx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Rf=new ot,Vo=new D,$d=new D;function vx(i,e,t){let n=new ys,r=new pe,s=new pe,o=new Dt,a=new al,c=new ll,l={},d=t.maxTextureSize,f={[Li]:bn,[bn]:Li,[Lt]:Lt},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:bx,fragmentShader:xx}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new lt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(E,T,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===xu&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Do);let y=i.getRenderTarget(),N=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(bi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==this.type;F&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=E.length;k<O;k++){let z=E[k],R=z.shadow;if(R===void 0){$e("WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);let j=R.getFrameExtents();r.multiply(j),s.copy(R.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,R.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,R.mapSize.y=s.y));let Y=i.state.buffers.depth.getReversed();if(R.camera._reversedDepth=Y,R.map===null||F===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===As){if(z.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new An(r.x,r.y,{format:Or,type:xi,minFilter:an,magFilter:an,generateMipmaps:!1}),R.map.texture.name=z.name+".shadowMap",R.map.depthTexture=new er(r.x,r.y,Qn),R.map.depthTexture.name=z.name+".shadowMapDepth",R.map.depthTexture.format=fi,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Qt,R.map.depthTexture.magFilter=Qt}else z.isPointLight?(R.map=new fc(r.x),R.map.depthTexture=new el(r.x,Kn)):(R.map=new An(r.x,r.y),R.map.depthTexture=new er(r.x,r.y,Kn)),R.map.depthTexture.name=z.name+".shadowMap",R.map.depthTexture.format=fi,this.type===Do?(R.map.depthTexture.compareFunction=Y?cc:lc,R.map.depthTexture.minFilter=an,R.map.depthTexture.magFilter=an):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=Qt,R.map.depthTexture.magFilter=Qt);R.camera.updateProjectionMatrix()}let ae=R.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ae;me++){if(R.map.isWebGLCubeRenderTarget)i.setRenderTarget(R.map,me),i.clear();else{me===0&&(i.setRenderTarget(R.map),i.clear());let ue=R.getViewport(me);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),L.viewport(o)}if(z.isPointLight){let ue=R.camera,te=R.matrix,le=z.distance||ue.far;le!==ue.far&&(ue.far=le,ue.updateProjectionMatrix()),Vo.setFromMatrixPosition(z.matrixWorld),ue.position.copy(Vo),$d.copy(ue.position),$d.add(_x[me]),ue.up.copy(yx[me]),ue.lookAt($d),ue.updateMatrixWorld(),te.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Rf.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Rf,ue.coordinateSystem,ue.reversedDepth)}else R.updateMatrices(z);n=R.getFrustum(),v(T,b,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===As&&S(R,b),R.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,N,P)};function S(E,T){let b=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(r.x,r.y,{format:Or,type:xi})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,h,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,u,_,null)}function M(E,T,b,y){let N=null,P=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)N=P;else if(N=b.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=N.uuid,F=T.uuid,k=l[L];k===void 0&&(k={},l[L]=k);let O=k[F];O===void 0&&(O=N.clone(),k[F]=O,T.addEventListener("dispose",C)),N=O}if(N.visible=T.visible,N.wireframe=T.wireframe,y===As?N.side=T.shadowSide!==null?T.shadowSide:T.side:N.side=T.shadowSide!==null?T.shadowSide:f[T.side],N.alphaMap=T.alphaMap,N.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,N.map=T.map,N.clipShadows=T.clipShadows,N.clippingPlanes=T.clippingPlanes,N.clipIntersection=T.clipIntersection,N.displacementMap=T.displacementMap,N.displacementScale=T.displacementScale,N.displacementBias=T.displacementBias,N.wireframeLinewidth=T.wireframeLinewidth,N.linewidth=T.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let L=i.properties.get(N);L.light=b}return N}function v(E,T,b,y,N){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===As)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let F=e.update(E),k=E.material;if(Array.isArray(k)){let O=F.groups;for(let z=0,R=O.length;z<R;z++){let j=O[z],Y=k[j.materialIndex];if(Y&&Y.visible){let ae=M(E,Y,y,N);E.onBeforeShadow(i,E,T,b,F,ae,j),i.renderBufferDirect(b,null,F,ae,E,j),E.onAfterShadow(i,E,T,b,F,ae,j)}}}else if(k.visible){let O=M(E,k,y,N);E.onBeforeShadow(i,E,T,b,F,O,null),i.renderBufferDirect(b,null,F,O,E,null),E.onAfterShadow(i,E,T,b,F,O,null)}}let L=E.children;for(let F=0,k=L.length;F<k;F++)v(L[F],T,b,y,N)}function C(E){E.target.removeEventListener("dispose",C);for(let b in l){let y=l[b],N=E.target.uuid;N in y&&(y[N].dispose(),delete y[N])}}}function Mx(i,e){function t(){let U=!1,G=new Dt,X=null,he=new Dt(0,0,0,0);return{setMask:function(Z){X!==Z&&!U&&(i.colorMask(Z,Z,Z,Z),X=Z)},setLocked:function(Z){U=Z},setClear:function(Z,W,xe,Ee,ke){ke===!0&&(Z*=Ee,W*=Ee,xe*=Ee),G.set(Z,W,xe,Ee),he.equals(G)===!1&&(i.clearColor(Z,W,xe,Ee),he.copy(G))},reset:function(){U=!1,X=null,he.set(-1,0,0,0)}}}function n(){let U=!1,G=!1,X=null,he=null,Z=null;return{setReversed:function(W){if(G!==W){let xe=e.get("EXT_clip_control");W?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),G=W;let Ee=Z;Z=null,this.setClear(Ee)}},getReversed:function(){return G},setTest:function(W){W?oe(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(W){X!==W&&!U&&(i.depthMask(W),X=W)},setFunc:function(W){if(G&&(W=$u[W]),he!==W){switch(W){case za:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Er:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=W}},setLocked:function(W){U=W},setClear:function(W){Z!==W&&(Z=W,G&&(W=1-W),i.clearDepth(W))},reset:function(){U=!1,X=null,he=null,Z=null,G=!1}}}function r(){let U=!1,G=null,X=null,he=null,Z=null,W=null,xe=null,Ee=null,ke=null;return{setTest:function(je){U||(je?oe(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(je){G!==je&&!U&&(i.stencilMask(je),G=je)},setFunc:function(je,Pt,kt){(X!==je||he!==Pt||Z!==kt)&&(i.stencilFunc(je,Pt,kt),X=je,he=Pt,Z=kt)},setOp:function(je,Pt,kt){(W!==je||xe!==Pt||Ee!==kt)&&(i.stencilOp(je,Pt,kt),W=je,xe=Pt,Ee=kt)},setLocked:function(je){U=je},setClear:function(je){ke!==je&&(i.clearStencil(je),ke=je)},reset:function(){U=!1,G=null,X=null,he=null,Z=null,W=null,xe=null,Ee=null,ke=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,d={},f={},h=new WeakMap,u=[],m=null,_=!1,g=null,p=null,S=null,M=null,v=null,C=null,E=null,T=new at(0,0,0),b=0,y=!1,N=null,P=null,L=null,F=null,k=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,R=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=R>=1):j.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=R>=2);let Y=null,ae={},me=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),te=new Dt().fromArray(me),le=new Dt().fromArray(ue);function se(U,G,X,he){let Z=new Uint8Array(4),W=i.createTexture();i.bindTexture(U,W),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<X;xe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(G+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return W}let V={};V[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(Er),re(!1),Me(_d),oe(i.CULL_FACE),ce(bi);function oe(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ne(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function fe(U,G){return f[U]!==G?(i.bindFramebuffer(U,G),f[U]=G,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=G),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=G),!0):!1}function Ae(U,G){let X=u,he=!1;if(U){X=h.get(G),X===void 0&&(X=[],h.set(G,X));let Z=U.textures;if(X.length!==Z.length||X[0]!==i.COLOR_ATTACHMENT0){for(let W=0,xe=Z.length;W<xe;W++)X[W]=i.COLOR_ATTACHMENT0+W;X.length=Z.length,he=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,he=!0);he&&i.drawBuffers(X)}function Pe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let Ge={[$i]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};Ge[Mu]=i.MIN,Ge[Su]=i.MAX;let We={[wu]:i.ZERO,[Eu]:i.ONE,[Tu]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Lu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(U,G,X,he,Z,W,xe,Ee,ke,je){if(U===bi){_===!0&&(ne(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),U!==_u){if(U!==g||je!==y){if((p!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,v=$i),je)switch(U){case wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFunc(i.ONE,i.ONE);break;case vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Md:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vd:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Md:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}S=null,M=null,C=null,E=null,T.set(0,0,0),b=0,g=U,y=je}return}Z=Z||G,W=W||X,xe=xe||he,(G!==p||Z!==v)&&(i.blendEquationSeparate(Ge[G],Ge[Z]),p=G,v=Z),(X!==S||he!==M||W!==C||xe!==E)&&(i.blendFuncSeparate(We[X],We[he],We[W],We[xe]),S=X,M=he,C=W,E=xe),(Ee.equals(T)===!1||ke!==b)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ke),T.copy(Ee),b=ke),g=U,y=!1}function ge(U,G){U.side===Lt?ne(i.CULL_FACE):oe(i.CULL_FACE);let X=U.side===bn;G&&(X=!X),re(X),U.blending===wr&&U.transparent===!1?ce(bi):ce(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let he=U.stencilWrite;a.setTest(he),he&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function Me(U){U!==gu?(oe(i.CULL_FACE),U!==P&&(U===_d?i.cullFace(i.BACK):U===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),P=U}function I(U){U!==L&&(z&&i.lineWidth(U),L=U)}function Xe(U,G,X){U?(oe(i.POLYGON_OFFSET_FILL),(F!==G||k!==X)&&(F=G,k=X,o.getReversed()&&(G=-G),i.polygonOffset(G,X))):ne(i.POLYGON_OFFSET_FILL)}function Re(U){U?oe(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function ze(U){U===void 0&&(U=i.TEXTURE0+O-1),Y!==U&&(i.activeTexture(U),Y=U)}function ye(U,G,X){X===void 0&&(Y===null?X=i.TEXTURE0+O-1:X=Y);let he=ae[X];he===void 0&&(he={type:void 0,texture:void 0},ae[X]=he),(he.type!==U||he.texture!==G)&&(Y!==X&&(i.activeTexture(X),Y=X),i.bindTexture(U,G||V[U]),he.type=U,he.texture=G)}function A(){let U=ae[Y];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function de(){try{i.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Se(){try{i.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Be(){try{i.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Ze(){try{i.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function q(){try{i.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ie(U){te.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function we(U){le.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function _e(U,G){let X=l.get(G);X===void 0&&(X=new WeakMap,l.set(G,X));let he=X.get(U);he===void 0&&(he=i.getUniformBlockIndex(G,U.name),X.set(U,he))}function ve(U,G){let he=l.get(G).get(U);c.get(G)!==he&&(i.uniformBlockBinding(G,he,U.__bindingPointIndex),c.set(G,he))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Y=null,ae={},f={},h=new WeakMap,u=[],m=null,_=!1,g=null,p=null,S=null,M=null,v=null,C=null,E=null,T=new at(0,0,0),b=0,y=!1,N=null,P=null,L=null,F=null,k=null,te.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:ne,bindFramebuffer:fe,drawBuffers:Ae,useProgram:Pe,setBlending:ce,setMaterial:ge,setFlipSided:re,setCullFace:Me,setLineWidth:I,setPolygonOffset:Xe,setScissorTest:Re,activeTexture:ze,bindTexture:ye,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ze,texImage3D:q,updateUBOMapping:_e,uniformBlockBinding:ve,texStorage2D:Se,texStorage3D:Be,texSubImage2D:K,texSubImage3D:de,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ce,scissor:ie,viewport:we,reset:Ue}}function Sx(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,d=new WeakMap,f,h=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return u?new OffscreenCanvas(A,x):so("canvas")}function _(A,x,B){let K=1,de=ye(A);if((de.width>B||de.height>B)&&(K=B/Math.max(de.width,de.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor(K*de.width),Ce=Math.floor(K*de.height);f===void 0&&(f=m(Q,Ce));let Se=x?m(Q,Ce):f;return Se.width=Q,Se.height=Ce,Se.getContext("2d").drawImage(A,0,0,Q,Ce),$e("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Q+"x"+Ce+")."),Se}else return"data"in A&&$e("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,B,K,de=!1){if(A!==null){if(i[A]!==void 0)return i[A];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let Ce=de?ro:ht.getTransfer(K);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=Ce===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(A,x){let B;return A?x===null||x===Kn||x===Cs?B=i.DEPTH24_STENCIL8:x===Qn?B=i.DEPTH32F_STENCIL8:x===Rs&&(B=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Kn||x===Cs?B=i.DEPTH_COMPONENT24:x===Qn?B=i.DEPTH_COMPONENT32F:x===Rs&&(B=i.DEPTH_COMPONENT16),B}function C(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){let x=A.target;x.removeEventListener("dispose",E),b(x),x.isVideoTexture&&d.delete(x)}function T(A){let x=A.target;x.removeEventListener("dispose",T),N(x)}function b(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,K=h.get(B);if(K){let de=K[x.__cacheKey];de.usedTimes--,de.usedTimes===0&&y(A),Object.keys(K).length===0&&h.delete(B)}n.remove(A)}function y(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let B=A.source,K=h.get(B);delete K[x.__cacheKey],o.memory.textures--}function N(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let de=0;de<x.__webglFramebuffer[K].length;de++)i.deleteFramebuffer(x.__webglFramebuffer[K][de]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let K=0,de=B.length;K<de;K++){let Q=n.get(B[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(A)}let P=0;function L(){P=0}function F(){let A=P;return A>=r.maxTextures&&$e("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function k(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function O(A,x){let B=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let K=A.image;if(K===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function z(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function R(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){V(B,A,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function j(A,x){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){oe(B,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Y={[Wa]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},ae={[Qt]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[Uo]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},me={[Hu]:i.NEVER,[qu]:i.ALWAYS,[Gu]:i.LESS,[lc]:i.LEQUAL,[Wu]:i.EQUAL,[cc]:i.GEQUAL,[Xu]:i.GREATER,[ju]:i.NOTEQUAL};function ue(A,x){if(x.type===Qn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Sl||x.magFilter===Uo||x.magFilter===lr||x.minFilter===an||x.minFilter===Sl||x.minFilter===Uo||x.minFilter===lr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Y[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qt||x.minFilter!==Uo&&x.minFilter!==lr||x.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",E));let K=x.source,de=h.get(K);de===void 0&&(de={},h.set(K,de));let Q=k(x);if(Q!==A.__cacheKey){de[Q]===void 0&&(de[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),de[Q].usedTimes++;let Ce=de[A.__cacheKey];Ce!==void 0&&(de[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(x)),A.__cacheKey=Q,A.__webglTexture=de[Q].texture}return B}function le(A,x,B){return Math.floor(Math.floor(A/B)/x)}function se(A,x,B,K){let Q=A.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,K,x.data);else{Q.sort((q,ie)=>q.start-ie.start);let Ce=0;for(let q=1;q<Q.length;q++){let ie=Q[Ce],we=Q[q],_e=ie.start+ie.count,ve=le(we.start,x.width,4),Ue=le(ie.start,x.width,4);we.start<=_e+1&&ve===Ue&&le(we.start+we.count-1,x.width,4)===ve?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++Ce,Q[Ce]=we)}Q.length=Ce+1;let Se=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let q=0,ie=Q.length;q<ie;q++){let we=Q[q],_e=Math.floor(we.start/4),ve=Math.ceil(we.count/4),Ue=_e%x.width,U=Math.floor(_e/x.width),G=ve,X=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ue,U,G,X,B,K,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ze)}}function V(A,x,B){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);let de=te(A,x),Q=x.source;t.bindTexture(K,A.__webglTexture,i.TEXTURE0+B);let Ce=n.get(Q);if(Q.version!==Ce.__version||de===!0){t.activeTexture(i.TEXTURE0+B);let Se=ht.getPrimaries(ht.workingColorSpace),Be=x.colorSpace===Ui?null:ht.getPrimaries(x.colorSpace),Ze=x.colorSpace===Ui||Se===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let q=_(x.image,!1,r.maxTextureSize);q=ze(x,q);let ie=s.convert(x.format,x.colorSpace),we=s.convert(x.type),_e=M(x.internalFormat,ie,we,x.colorSpace,x.isVideoTexture);ue(K,x);let ve,Ue=x.mipmaps,U=x.isVideoTexture!==!0,G=Ce.__version===void 0||de===!0,X=Q.dataReady,he=C(x,q);if(x.isDepthTexture)_e=v(x.format===cr,x.type),G&&(U?t.texStorage2D(i.TEXTURE_2D,1,_e,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,_e,q.width,q.height,0,ie,we,null));else if(x.isDataTexture)if(Ue.length>0){U&&G&&t.texStorage2D(i.TEXTURE_2D,he,_e,Ue[0].width,Ue[0].height);for(let Z=0,W=Ue.length;Z<W;Z++)ve=Ue[Z],U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,we,ve.data):t.texImage2D(i.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ie,we,ve.data);x.generateMipmaps=!1}else U?(G&&t.texStorage2D(i.TEXTURE_2D,he,_e,q.width,q.height),X&&se(x,q,ie,we)):t.texImage2D(i.TEXTURE_2D,0,_e,q.width,q.height,0,ie,we,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,_e,Ue[0].width,Ue[0].height,q.depth);for(let Z=0,W=Ue.length;Z<W;Z++)if(ve=Ue[Z],x.format!==kn)if(ie!==null)if(U){if(X)if(x.layerUpdates.size>0){let xe=Xd(ve.width,ve.height,x.format,x.type);for(let Ee of x.layerUpdates){let ke=ve.data.subarray(Ee*xe/ve.data.BYTES_PER_ELEMENT,(Ee+1)*xe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Ee,ve.width,ve.height,1,ie,ke)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,q.depth,ie,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,_e,ve.width,ve.height,q.depth,0,ve.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,q.depth,ie,we,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,_e,ve.width,ve.height,q.depth,0,ie,we,ve.data)}else{U&&G&&t.texStorage2D(i.TEXTURE_2D,he,_e,Ue[0].width,Ue[0].height);for(let Z=0,W=Ue.length;Z<W;Z++)ve=Ue[Z],x.format!==kn?ie!==null?U?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,ie,we,ve.data):t.texImage2D(i.TEXTURE_2D,Z,_e,ve.width,ve.height,0,ie,we,ve.data)}else if(x.isDataArrayTexture)if(U){if(G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,_e,q.width,q.height,q.depth),X)if(x.layerUpdates.size>0){let Z=Xd(q.width,q.height,x.format,x.type);for(let W of x.layerUpdates){let xe=q.data.subarray(W*Z/q.data.BYTES_PER_ELEMENT,(W+1)*Z/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,q.width,q.height,1,ie,we,xe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ie,we,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,q.width,q.height,q.depth,0,ie,we,q.data);else if(x.isData3DTexture)U?(G&&t.texStorage3D(i.TEXTURE_3D,he,_e,q.width,q.height,q.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ie,we,q.data)):t.texImage3D(i.TEXTURE_3D,0,_e,q.width,q.height,q.depth,0,ie,we,q.data);else if(x.isFramebufferTexture){if(G)if(U)t.texStorage2D(i.TEXTURE_2D,he,_e,q.width,q.height);else{let Z=q.width,W=q.height;for(let xe=0;xe<he;xe++)t.texImage2D(i.TEXTURE_2D,xe,_e,Z,W,0,ie,we,null),Z>>=1,W>>=1}}else if(Ue.length>0){if(U&&G){let Z=ye(Ue[0]);t.texStorage2D(i.TEXTURE_2D,he,_e,Z.width,Z.height)}for(let Z=0,W=Ue.length;Z<W;Z++)ve=Ue[Z],U?X&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ie,we,ve):t.texImage2D(i.TEXTURE_2D,Z,_e,ie,we,ve);x.generateMipmaps=!1}else if(U){if(G){let Z=ye(q);t.texStorage2D(i.TEXTURE_2D,he,_e,Z.width,Z.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,we,q)}else t.texImage2D(i.TEXTURE_2D,0,_e,ie,we,q);g(x)&&p(K),Ce.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,B){if(x.image.length!==6)return;let K=te(A,x),de=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let Q=n.get(de);if(de.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let Ce=ht.getPrimaries(ht.workingColorSpace),Se=x.colorSpace===Ui?null:ht.getPrimaries(x.colorSpace),Be=x.colorSpace===Ui||Ce===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,q=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let W=0;W<6;W++)!Ze&&!q?ie[W]=_(x.image[W],!0,r.maxCubemapSize):ie[W]=q?x.image[W].image:x.image[W],ie[W]=ze(x,ie[W]);let we=ie[0],_e=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ue=M(x.internalFormat,_e,ve,x.colorSpace),U=x.isVideoTexture!==!0,G=Q.__version===void 0||K===!0,X=de.dataReady,he=C(x,we);ue(i.TEXTURE_CUBE_MAP,x);let Z;if(Ze){U&&G&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,we.width,we.height);for(let W=0;W<6;W++){Z=ie[W].mipmaps;for(let xe=0;xe<Z.length;xe++){let Ee=Z[xe];x.format!==kn?_e!==null?U?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Ee.width,Ee.height,_e,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,Ue,Ee.width,Ee.height,0,Ee.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Ee.width,Ee.height,_e,ve,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,Ue,Ee.width,Ee.height,0,_e,ve,Ee.data)}}}else{if(Z=x.mipmaps,U&&G){Z.length>0&&he++;let W=ye(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,W.width,W.height)}for(let W=0;W<6;W++)if(q){U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ie[W].width,ie[W].height,_e,ve,ie[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ue,ie[W].width,ie[W].height,0,_e,ve,ie[W].data);for(let xe=0;xe<Z.length;xe++){let ke=Z[xe].image[W].image;U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,ke.width,ke.height,_e,ve,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,Ue,ke.width,ke.height,0,_e,ve,ke.data)}}else{U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,_e,ve,ie[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,Ue,_e,ve,ie[W]);for(let xe=0;xe<Z.length;xe++){let Ee=Z[xe];U?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,_e,ve,Ee.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,Ue,_e,ve,Ee.image[W])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),Q.__version=de.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ne(A,x,B,K,de,Q){let Ce=s.convert(B.format,B.colorSpace),Se=s.convert(B.type),Be=M(B.internalFormat,Ce,Se,B.colorSpace),Ze=n.get(x),q=n.get(B);if(q.__renderTarget=x,!Ze.__hasExternalTextures){let ie=Math.max(1,x.width>>Q),we=Math.max(1,x.height>>Q);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,Q,Be,ie,we,x.depth,0,Ce,Se,null):t.texImage2D(de,Q,Be,ie,we,0,Ce,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Xe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,de,q.__webglTexture,0,I(x)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,de,q.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let K=x.depthTexture,de=K&&K.isDepthTexture?K.type:null,Q=v(x.stencilBuffer,de),Ce=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(x),Q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,A)}else{let K=x.textures;for(let de=0;de<K.length;de++){let Q=K[de],Ce=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),Be=M(Q.internalFormat,Ce,Se,Q.colorSpace);Xe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(x),Be,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(x),Be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(A,x,B){let K=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let de=n.get(x.depthTexture);if(de.__renderTarget=x,(!de.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(de.__webglInit===void 0&&(de.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),de.__webglTexture===void 0){de.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ze=s.convert(x.depthTexture.format),q=s.convert(x.depthTexture.type),ie;x.depthTexture.format===fi?ie=i.DEPTH_COMPONENT24:x.depthTexture.format===cr&&(ie=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ie,x.width,x.height,0,Ze,q,null)}}else O(x.depthTexture,0);let Q=de.__webglTexture,Ce=I(x),Se=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Be=x.depthTexture.format===cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===fi)Xe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,Se,Q,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,Be,Se,Q,0);else if(x.depthTexture.format===cr)Xe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,Se,Q,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,Be,Se,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let de=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",de)};K.addEventListener("dispose",de),x.__depthDisposeCallback=de}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)Ae(x.__webglFramebuffer[K],A,K);else{let K=A.texture.mipmaps;K&&K.length>0?Ae(x.__webglFramebuffer[0],A,0):Ae(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),fe(x.__webglDepthbuffer[K],A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,Q)}}else{let K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),fe(x.__webglDepthbuffer,A,!1);else{let de=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(A,x,B){let K=n.get(A);x!==void 0&&ne(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Pe(A)}function We(A){let x=A.texture,B=n.get(A),K=n.get(x);A.addEventListener("dispose",T);let de=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Se]=[];for(let Be=0;Be<x.mipmaps.length;Be++)B.__webglFramebuffer[Se][Be]=i.createFramebuffer()}else B.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Se=0;Se<x.mipmaps.length;Se++)B.__webglFramebuffer[Se]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let Se=0,Be=de.length;Se<Be;Se++){let Ze=n.get(de[Se]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){let Be=de[Se];B.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);let Ze=s.convert(Be.format,Be.colorSpace),q=s.convert(Be.type),ie=M(Be.internalFormat,Ze,q,Be.colorSpace,A.isXRRenderTarget===!0),we=I(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ue(i.TEXTURE_CUBE_MAP,x);for(let Se=0;Se<6;Se++)if(x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)ne(B.__webglFramebuffer[Se][Be],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be);else ne(B.__webglFramebuffer[Se],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let Se=0,Be=de.length;Se<Be;Se++){let Ze=de[Se],q=n.get(Ze),ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),ue(ie,Ze),ne(B.__webglFramebuffer,A,Ze,i.COLOR_ATTACHMENT0+Se,ie,0),g(Ze)&&p(ie)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,K.__webglTexture),ue(Se,x),x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)ne(B.__webglFramebuffer[Be],A,x,i.COLOR_ATTACHMENT0,Se,Be);else ne(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Se,0);g(x)&&p(Se),t.unbindTexture()}A.depthBuffer&&Pe(A)}function ce(A){let x=A.textures;for(let B=0,K=x.length;B<K;B++){let de=x[B];if(g(de)){let Q=S(A),Ce=n.get(de).__webglTexture;t.bindTexture(Q,Ce),p(Q),t.unbindTexture()}}}let ge=[],re=[];function Me(A){if(A.samples>0){if(Xe(A)===!1){let x=A.textures,B=A.width,K=A.height,de=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(A),Se=x.length>1;if(Se)for(let Ze=0;Ze<x.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let Be=A.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ze=0;Ze<x.length;Ze++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ze]);let q=n.get(x[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,de,i.NEAREST),c===!0&&(ge.length=0,re.length=0,ge.push(i.COLOR_ATTACHMENT0+Ze),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ge.push(Q),re.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ze=0;Ze<x.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ze]);let q=n.get(x[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Re(A){let x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function ze(A,x){let B=A.colorSpace,K=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Tr&&B!==Ui&&(ht.getTransfer(B)===yt?(K!==kn||de!==vn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",B)),x}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=R,this.setTextureCube=j,this.rebindTextures=Ge,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wx(i,e){function t(n,r=Ui){let s,o=ht.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Id)return i.BYTE;if(n===Dd)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===Ud)return i.ALPHA;if(n===Fd)return i.RGB;if(n===kn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===zd)return i.RED;if(n===Al)return i.RED_INTEGER;if(n===Or)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===Fo||n===zo||n===Oo||n===Bo)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Il||n===Dl||n===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Fl||n===zl||n===Ol||n===Bl||n===kl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nl||n===Ul)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return s.COMPRESSED_R11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bl)return s.COMPRESSED_RG11_EAC;if(n===kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===jl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===Ql||n===ec)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===nc||n===ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===tc)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===sc||n===oc||n===ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:Ex,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends pi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,h=null,u=null,m=null,_=typeof XRWebGLBinding<"u",g=new sh,p={},S=t.getContextAttributes(),M=null,v=null,C=[],E=[],T=new pe,b=null,y=new un;y.viewport=new Dt;let N=new un;N.viewport=new Dt;let P=[y,N],L=new yl,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let oe=C[V];return oe===void 0&&(oe=new xs,C[V]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(V){let oe=C[V];return oe===void 0&&(oe=new xs,C[V]=oe),oe.getGripSpace()},this.getHand=function(V){let oe=C[V];return oe===void 0&&(oe=new xs,C[V]=oe),oe.getHandSpace()};function O(V){let oe=E.indexOf(V.inputSource);if(oe===-1)return;let ne=C[oe];ne!==void 0&&(ne.update(V.inputSource,V.frame,l||o),ne.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",R);for(let V=0;V<C.length;V++){let oe=E[V];oe!==null&&(E[V]=null,C[V].disconnect(oe))}F=null,k=null,g.reset();for(let V in p)delete p[V];e.setRenderTarget(M),u=null,h=null,f=null,r=null,v=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",R),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,fe=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?cr:fi,fe=S.stencil?Cs:Kn);let Pe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new An(h.textureWidth,h.textureHeight,{format:kn,type:vn,depthTexture:new er(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new An(u.framebufferWidth,u.framebufferHeight,{format:kn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function R(V){for(let oe=0;oe<V.removed.length;oe++){let ne=V.removed[oe],fe=E.indexOf(ne);fe>=0&&(E[fe]=null,C[fe].disconnect(ne))}for(let oe=0;oe<V.added.length;oe++){let ne=V.added[oe],fe=E.indexOf(ne);if(fe===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=E.length){E.push(ne),fe=Pe;break}else if(E[Pe]===null){E[Pe]=ne,fe=Pe;break}if(fe===-1)break}let Ae=C[fe];Ae&&Ae.connect(ne)}}let j=new D,Y=new D;function ae(V,oe,ne){j.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);let fe=j.distanceTo(Y),Ae=oe.projectionMatrix.elements,Pe=ne.projectionMatrix.elements,Ge=Ae[14]/(Ae[10]-1),We=Ae[14]/(Ae[10]+1),ce=(Ae[9]+1)/Ae[5],ge=(Ae[9]-1)/Ae[5],re=(Ae[8]-1)/Ae[0],Me=(Pe[8]+1)/Pe[0],I=Ge*re,Xe=Ge*Me,Re=fe/(-re+Me),ze=Re*-re;if(oe.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(Re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let ye=Ge+Re,A=We+Re,x=I-ze,B=Xe+(fe-ze),K=ce*We/A*ye,de=ge*We/A*ye;V.projectionMatrix.makePerspective(x,B,K,de,ye,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function me(V,oe){oe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(oe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let oe=V.near,ne=V.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),L.near=N.near=y.near=oe,L.far=N.far=y.far=ne,(F!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,k=L.far),L.layers.mask=V.layers.mask|6,y.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;let fe=V.parent,Ae=L.cameras;me(L,fe);for(let Pe=0;Pe<Ae.length;Pe++)me(Ae[Pe],fe);Ae.length===2?ae(L,y,N):L.projectionMatrix.copy(y.projectionMatrix),ue(V,L,fe)};function ue(V,oe,ne){ne===null?V.matrix.copy(oe.matrixWorld):(V.matrix.copy(ne.matrixWorld),V.matrix.invert(),V.matrix.multiply(oe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(oe.projectionMatrix),V.projectionMatrixInverse.copy(oe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ms*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(V){return p[V]};let te=null;function le(V,oe){if(d=oe.getViewerPose(l||o),m=oe,d!==null){let ne=d.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let fe=!1;ne.length!==L.cameras.length&&(L.cameras.length=0,fe=!0);for(let We=0;We<ne.length;We++){let ce=ne[We],ge=null;if(u!==null)ge=u.getViewport(ce);else{let Me=f.getViewSubImage(h,ce);ge=Me.viewport,We===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let re=P[We];re===void 0&&(re=new un,re.layers.enable(We),re.viewport=new Dt,P[We]=re),re.matrix.fromArray(ce.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ce.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ge.x,ge.y,ge.width,ge.height),We===0&&(L.matrix.copy(re.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),fe===!0&&L.cameras.push(re)}let Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let We=f.getDepthInformation(ne[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let We=0;We<ne.length;We++){let ce=ne[We].camera;if(ce){let ge=p[ce];ge||(ge=new mo,p[ce]=ge);let re=f.getCameraImage(ce);ge.sourceTexture=re}}}}for(let ne=0;ne<C.length;ne++){let fe=E[ne],Ae=C[ne];fe!==null&&Ae!==void 0&&Ae.update(fe,oe,l||o)}te&&te(V,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}let se=new Cf;se.setAnimationLoop(le),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}},Vr=new Jn,Ax=new ot;function Rx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,S,M,v){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,v=S.envMapRotation;M&&(g.envMap.value=M,Vr.copy(v),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),g.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Vr)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Cx(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=r[S.id];v===void 0&&(m(S),v=d(S),r[S.id]=v,S.addEventListener("dispose",g));let C=M.program;n.updateUBOMapping(S,C);let E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function d(S){let M=f();S.__bindingPointIndex=M;let v=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,N=b.length;y<N;y++){let P=b[y];if(u(P,E,y,C)===!0){let L=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],k=0;for(let O=0;O<F.length;O++){let z=F[O],R=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+k,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,M,v,C){let E=S.value,T=M+"_"+v;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{let b=C[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function m(S){let M=S.uniforms,v=0,C=16;for(let T=0,b=M.length;T<b;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,P=y.length;N<P;N++){let L=y[N],F=Array.isArray(L.value)?L.value:[L.value];for(let k=0,O=F.length;k<O;k++){let z=F[k],R=_(z),j=v%C,Y=j%R.boundary,ae=j+Y;v+=Y,ae!==0&&C-ae<R.storage&&(v+=C-ae),L.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=R.storage}}}let E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function _(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){let M=S.target;M.removeEventListener("dispose",g);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Ix(){return _i===null&&(_i=new $a(Px,16,16,Or,xi),_i.name="DFG_LUT",_i.minFilter=an,_i.magFilter=an,_i.wrapS=hi,_i.wrapT=hi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var pc=class{constructor(e={}){let{canvas:t=Yu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,g=new Set([Cl,Rl,Al]),p=new Set([vn,Kn,Rs,Cs,El,Tl]),S=new Uint32Array(4),M=new Int32Array(4),v=null,C=null,E=[],T=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,N=!1;this._outputColorSpace=Ht;let P=0,L=0,F=null,k=-1,O=null,z=new Dt,R=new Dt,j=null,Y=new at(0),ae=0,me=t.width,ue=t.height,te=1,le=null,se=null,V=new Dt(0,0,me,ue),oe=new Dt(0,0,me,ue),ne=!1,fe=new ys,Ae=!1,Pe=!1,Ge=new ot,We=new D,ce=new Dt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Me(){return F===null?te:1}let I=n;function Xe(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ke,!1),I===null){let H="webgl2";if(I=Xe(H,w),I===null)throw Xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let Re,ze,ye,A,x,B,K,de,Q,Ce,Se,Be,Ze,q,ie,we,_e,ve,Ue,U,G,X,he;function Z(){Re=new B1(I),Re.init(),G=new wx(I,Re),ze=new I1(I,Re,e,G),ye=new Mx(I,Re),ze.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),A=new H1(I),x=new lx,B=new Sx(I,Re,ye,x,ze,G,A),K=new O1(y),de=new q0(I),X=new C1(I,de),Q=new k1(I,de,A,X),Ce=new W1(I,Q,de,X,A),ve=new G1(I,ze,B),ie=new D1(x),Se=new ax(y,K,Re,ze,X,ie),Be=new Rx(y,x),Ze=new dx,q=new gx(Re),_e=new R1(y,K,ye,Ce,m,c),we=new vx(y,Ce,ze),he=new Cx(I,A,ze,ye),Ue=new P1(I,Re,A),U=new V1(I,Re,A),A.programs=Se.programs,y.capabilities=ze,y.extensions=Re,y.properties=x,y.renderLists=Ze,y.shadowMap=we,y.state=ye,y.info=A}Z(),_!==vn&&(b=new j1(_,t.width,t.height,r,s));let W=new oh(y,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=Re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(me,ue,!1))},this.getSize=function(w){return w.set(me,ue)},this.setSize=function(w,H,ee=!0){if(W.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,ue=H,t.width=Math.floor(w*te),t.height=Math.floor(H*te),ee===!0&&(t.style.width=w+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(me*te,ue*te).floor()},this.setDrawingBufferSize=function(w,H,ee){me=w,ue=H,te=ee,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,H,ee,$){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,H,ee,$),ye.viewport(z.copy(V).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(oe)},this.setScissor=function(w,H,ee,$){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,H,ee,$),ye.scissor(R.copy(oe).multiplyScalar(te).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){ye.setScissorTest(ne=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ee=!0){let $=0;if(w){let J=!1;if(F!==null){let De=F.texture.format;J=g.has(De)}if(J){let De=F.texture.type,Fe=p.has(De),Le=_e.getClearColor(),He=_e.getClearAlpha(),Ye=Le.r,Qe=Le.g,st=Le.b;Fe?(S[0]=Ye,S[1]=Qe,S[2]=st,S[3]=He,I.clearBufferuiv(I.COLOR,0,S)):(M[0]=Ye,M[1]=Qe,M[2]=st,M[3]=He,I.clearBufferiv(I.COLOR,0,M))}else $|=I.COLOR_BUFFER_BIT}H&&($|=I.DEPTH_BUFFER_BIT),ee&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),_e.dispose(),Ze.dispose(),q.dispose(),x.dispose(),K.dispose(),Ce.dispose(),X.dispose(),he.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",mr),W.removeEventListener("sessionend",Ws),gr.stop()};function xe(w){w.preventDefault(),oo("WebGLRenderer: Context Lost."),N=!0}function Ee(){oo("WebGLRenderer: Context Restored."),N=!1;let w=A.autoReset,H=we.enabled,ee=we.autoUpdate,$=we.needsUpdate,J=we.type;Z(),A.autoReset=w,we.enabled=H,we.autoUpdate=ee,we.needsUpdate=$,we.type=J}function ke(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function je(w){let H=w.target;H.removeEventListener("dispose",je),Pt(H)}function Pt(w){kt(w),x.remove(w)}function kt(w){let H=x.get(w).programs;H!==void 0&&(H.forEach(function(ee){Se.releaseProgram(ee)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ee,$,J,De){H===null&&(H=ge);let Fe=J.isMesh&&J.matrixWorld.determinant()<0,Le=gp(w,H,ee,$,J);ye.setMaterial($,Fe);let He=ee.index,Ye=1;if($.wireframe===!0){if(He=Q.getWireframeAttribute(ee),He===void 0)return;Ye=2}let Qe=ee.drawRange,st=ee.attributes.position,Je=Qe.start*Ye,St=(Qe.start+Qe.count)*Ye;De!==null&&(Je=Math.max(Je,De.start*Ye),St=Math.min(St,(De.start+De.count)*Ye)),He!==null?(Je=Math.max(Je,0),St=Math.min(St,He.count)):st!=null&&(Je=Math.max(Je,0),St=Math.min(St,st.count));let zt=St-Je;if(zt<0||zt===1/0)return;X.setup(J,$,Le,ee,He);let Ut,wt=Ue;if(He!==null&&(Ut=de.get(He),wt=U,wt.setIndex(Ut)),J.isMesh)$.wireframe===!0?(ye.setLineWidth($.wireframeLinewidth*Me()),wt.setMode(I.LINES)):wt.setMode(I.TRIANGLES);else if(J.isLine){let cn=$.linewidth;cn===void 0&&(cn=1),ye.setLineWidth(cn*Me()),J.isLineSegments?wt.setMode(I.LINES):J.isLineLoop?wt.setMode(I.LINE_LOOP):wt.setMode(I.LINE_STRIP)}else J.isPoints?wt.setMode(I.POINTS):J.isSprite&&wt.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ao("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let cn=J._multiDrawStarts,qe=J._multiDrawCounts,wn=J._multiDrawCount,pt=He?de.get(He).bytesPerElement:1,Wn=x.get($).currentProgram.getUniforms();for(let li=0;li<wn;li++)Wn.setValue(I,"_gl_DrawID",li),wt.render(cn[li]/pt,qe[li])}else if(J.isInstancedMesh)wt.renderInstances(Je,zt,J.count);else if(ee.isInstancedBufferGeometry){let cn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,qe=Math.min(ee.instanceCount,cn);wt.renderInstances(Je,zt,qe)}else wt.render(Je,zt)};function ai(w,H,ee){w.transparent===!0&&w.side===Lt&&w.forceSinglePass===!1?(w.side=bn,w.needsUpdate=!0,ta(w,H,ee),w.side=Li,w.needsUpdate=!0,ta(w,H,ee),w.side=Lt):ta(w,H,ee)}this.compile=function(w,H,ee=null){ee===null&&(ee=w),C=q.get(ee),C.init(H),T.push(C),ee.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),w!==ee&&w.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights();let $=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let De=J.material;if(De)if(Array.isArray(De))for(let Fe=0;Fe<De.length;Fe++){let Le=De[Fe];ai(Le,ee,J),$.add(Le)}else ai(De,ee,J),$.add(De)}),C=T.pop(),$},this.compileAsync=function(w,H,ee=null){let $=this.compile(w,H,ee);return new Promise(J=>{function De(){if($.forEach(function(Fe){x.get(Fe).currentProgram.isReady()&&$.delete(Fe)}),$.size===0){J(w);return}setTimeout(De,10)}Re.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let pr=null;function Qo(w){pr&&pr(w)}function mr(){gr.stop()}function Ws(){gr.start()}let gr=new Cf;gr.setAnimationLoop(Qo),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(w){pr=w,W.setAnimationLoop(w),w===null?gr.stop():gr.start()},W.addEventListener("sessionstart",mr),W.addEventListener("sessionend",Ws),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;let ee=W.enabled===!0&&W.isPresenting===!0,$=b!==null&&(F===null||ee)&&b.begin(y,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(H),H=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,F),C=q.get(w,T.length),C.init(H),T.push(C),Ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),fe.setFromProjectionMatrix(Ge,Zn,H.reversedDepth),Pe=this.localClippingEnabled,Ae=ie.init(this.clippingPlanes,Pe),v=Ze.get(w,E.length),v.init(),E.push(v),W.enabled===!0&&W.isPresenting===!0){let Fe=y.xr.getDepthSensingMesh();Fe!==null&&Ic(Fe,H,-1/0,y.sortObjects)}Ic(w,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(le,se),re=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,re&&_e.addToRenderList(v,w),this.info.render.frame++,Ae===!0&&ie.beginShadows();let J=C.state.shadowsArray;if(we.render(J,w,H),Ae===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&b.hasRenderPass())===!1){let Fe=v.opaque,Le=v.transmissive;if(C.setupLights(),H.isArrayCamera){let He=H.cameras;if(Le.length>0)for(let Ye=0,Qe=He.length;Ye<Qe;Ye++){let st=He[Ye];Dh(Fe,Le,w,st)}re&&_e.render(w);for(let Ye=0,Qe=He.length;Ye<Qe;Ye++){let st=He[Ye];Ih(v,w,st,st.viewport)}}else Le.length>0&&Dh(Fe,Le,w,H),re&&_e.render(w),Ih(v,w,H)}F!==null&&L===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),$&&b.end(y),w.isScene===!0&&w.onAfterRender(y,w,H),X.resetDefaultState(),k=-1,O=null,T.pop(),T.length>0?(C=T[T.length-1],Ae===!0&&ie.setGlobalState(y.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Ic(w,H,ee,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||fe.intersectsSprite(w)){$&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ge);let Fe=Ce.update(w),Le=w.material;Le.visible&&v.push(w,Fe,Le,ee,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||fe.intersectsObject(w))){let Fe=Ce.update(w),Le=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ce.copy(Fe.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(Ge)),Array.isArray(Le)){let He=Fe.groups;for(let Ye=0,Qe=He.length;Ye<Qe;Ye++){let st=He[Ye],Je=Le[st.materialIndex];Je&&Je.visible&&v.push(w,Fe,Je,ee,ce.z,st)}}else Le.visible&&v.push(w,Fe,Le,ee,ce.z,null)}}let De=w.children;for(let Fe=0,Le=De.length;Fe<Le;Fe++)Ic(De[Fe],H,ee,$)}function Ih(w,H,ee,$){let{opaque:J,transmissive:De,transparent:Fe}=w;C.setupLightsView(ee),Ae===!0&&ie.setGlobalState(y.clippingPlanes,ee),$&&ye.viewport(z.copy($)),J.length>0&&ea(J,H,ee),De.length>0&&ea(De,H,ee),Fe.length>0&&ea(Fe,H,ee),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Dh(w,H,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[$.id]===void 0){let Je=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[$.id]=new An(1,1,{generateMipmaps:!0,type:Je?xi:vn,minFilter:lr,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let De=C.state.transmissionRenderTarget[$.id],Fe=$.viewport||z;De.setSize(Fe.z*y.transmissionResolutionScale,Fe.w*y.transmissionResolutionScale);let Le=y.getRenderTarget(),He=y.getActiveCubeFace(),Ye=y.getActiveMipmapLevel();y.setRenderTarget(De),y.getClearColor(Y),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),re&&_e.render(ee);let Qe=y.toneMapping;y.toneMapping=$n;let st=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),C.setupLightsView($),Ae===!0&&ie.setGlobalState(y.clippingPlanes,$),ea(w,ee,$),B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let St=0,zt=H.length;St<zt;St++){let Ut=H[St],{object:wt,geometry:cn,material:qe,group:wn}=Ut;if(qe.side===Lt&&wt.layers.test($.layers)){let pt=qe.side;qe.side=bn,qe.needsUpdate=!0,Lh(wt,ee,$,cn,qe,wn),qe.side=pt,qe.needsUpdate=!0,Je=!0}}Je===!0&&(B.updateMultisampleRenderTarget(De),B.updateRenderTargetMipmap(De))}y.setRenderTarget(Le,He,Ye),y.setClearColor(Y,ae),st!==void 0&&($.viewport=st),y.toneMapping=Qe}function ea(w,H,ee){let $=H.isScene===!0?H.overrideMaterial:null;for(let J=0,De=w.length;J<De;J++){let Fe=w[J],{object:Le,geometry:He,group:Ye}=Fe,Qe=Fe.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),Le.layers.test(ee.layers)&&Lh(Le,H,ee,He,Qe,Ye)}}function Lh(w,H,ee,$,J,De){w.onBeforeRender(y,H,ee,$,J,De),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(y,H,ee,$,w,De),J.transparent===!0&&J.side===Lt&&J.forceSinglePass===!1?(J.side=bn,J.needsUpdate=!0,y.renderBufferDirect(ee,H,$,J,w,De),J.side=Li,J.needsUpdate=!0,y.renderBufferDirect(ee,H,$,J,w,De),J.side=Lt):y.renderBufferDirect(ee,H,$,J,w,De),w.onAfterRender(y,H,ee,$,J,De)}function ta(w,H,ee){H.isScene!==!0&&(H=ge);let $=x.get(w),J=C.state.lights,De=C.state.shadowsArray,Fe=J.state.version,Le=Se.getParameters(w,J.state,De,H,ee),He=Se.getProgramCacheKey(Le),Ye=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=K.get(w.envMap||$.environment,Qe),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",je),Ye=new Map,$.programs=Ye);let st=Ye.get(He);if(st!==void 0){if($.currentProgram===st&&$.lightsStateVersion===Fe)return Uh(w,Le),st}else Le.uniforms=Se.getUniforms(w),w.onBeforeCompile(Le,y),st=Se.acquireProgram(Le,He),Ye.set(He,st),$.uniforms=Le.uniforms;let Je=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=ie.uniform),Uh(w,Le),$.needsLights=xp(w),$.lightsStateVersion=Fe,$.needsLights&&(Je.ambientLightColor.value=J.state.ambient,Je.lightProbe.value=J.state.probe,Je.directionalLights.value=J.state.directional,Je.directionalLightShadows.value=J.state.directionalShadow,Je.spotLights.value=J.state.spot,Je.spotLightShadows.value=J.state.spotShadow,Je.rectAreaLights.value=J.state.rectArea,Je.ltc_1.value=J.state.rectAreaLTC1,Je.ltc_2.value=J.state.rectAreaLTC2,Je.pointLights.value=J.state.point,Je.pointLightShadows.value=J.state.pointShadow,Je.hemisphereLights.value=J.state.hemi,Je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Je.spotLightMatrix.value=J.state.spotLightMatrix,Je.spotLightMap.value=J.state.spotLightMap,Je.pointShadowMatrix.value=J.state.pointShadowMatrix),$.currentProgram=st,$.uniformsList=null,st}function Nh(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Is.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Uh(w,H){let ee=x.get(w);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function gp(w,H,ee,$,J){H.isScene!==!0&&(H=ge),B.resetTextureUnits();let De=H.fog,Fe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Le=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Tr,He=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ye=K.get($.envMap||Fe,He),Qe=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,st=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Je=!!ee.morphAttributes.position,St=!!ee.morphAttributes.normal,zt=!!ee.morphAttributes.color,Ut=$n;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let wt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,cn=wt!==void 0?wt.length:0,qe=x.get($),wn=C.state.lights;if(Ae===!0&&(Pe===!0||w!==O)){let $t=w===O&&$.id===k;ie.setState($,w,$t)}let pt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==wn.state.version||qe.outputColorSpace!==Le||J.isBatchedMesh&&qe.batching===!1||!J.isBatchedMesh&&qe.batching===!0||J.isBatchedMesh&&qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&qe.instancing===!1||!J.isInstancedMesh&&qe.instancing===!0||J.isSkinnedMesh&&qe.skinning===!1||!J.isSkinnedMesh&&qe.skinning===!0||J.isInstancedMesh&&qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&qe.instancingMorph===!1&&J.morphTexture!==null||qe.envMap!==Ye||$.fog===!0&&qe.fog!==De||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ie.numPlanes||qe.numIntersection!==ie.numIntersection)||qe.vertexAlphas!==Qe||qe.vertexTangents!==st||qe.morphTargets!==Je||qe.morphNormals!==St||qe.morphColors!==zt||qe.toneMapping!==Ut||qe.morphTargetsCount!==cn)&&(pt=!0):(pt=!0,qe.__version=$.version);let Wn=qe.currentProgram;pt===!0&&(Wn=ta($,H,J));let li=!1,br=!1,qr=!1,Tt=Wn.getUniforms(),sn=qe.uniforms;if(ye.useProgram(Wn.program)&&(li=!0,br=!0,qr=!0),$.id!==k&&(k=$.id,br=!0),li||O!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(I,"projectionMatrix",w.projectionMatrix),Tt.setValue(I,"viewMatrix",w.matrixWorldInverse);let Wi=Tt.map.cameraPosition;Wi!==void 0&&Wi.setValue(I,We.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,br=!0,qr=!0)}if(qe.needsLights&&(wn.state.directionalShadowMap.length>0&&Tt.setValue(I,"directionalShadowMap",wn.state.directionalShadowMap,B),wn.state.spotShadowMap.length>0&&Tt.setValue(I,"spotShadowMap",wn.state.spotShadowMap,B),wn.state.pointShadowMap.length>0&&Tt.setValue(I,"pointShadowMap",wn.state.pointShadowMap,B)),J.isSkinnedMesh){Tt.setOptional(I,J,"bindMatrix"),Tt.setOptional(I,J,"bindMatrixInverse");let $t=J.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Tt.setValue(I,"boneTexture",$t.boneTexture,B))}J.isBatchedMesh&&(Tt.setOptional(I,J,"batchingTexture"),Tt.setValue(I,"batchingTexture",J._matricesTexture,B),Tt.setOptional(I,J,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",J._indirectTexture,B),Tt.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",J._colorsTexture,B));let Gi=ee.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&ve.update(J,ee,Wn),(br||qe.receiveShadow!==J.receiveShadow)&&(qe.receiveShadow=J.receiveShadow,Tt.setValue(I,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(sn.envMapIntensity.value=H.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Ix()),br&&(Tt.setValue(I,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&bp(sn,qr),De&&$.fog===!0&&Be.refreshFogUniforms(sn,De),Be.refreshMaterialUniforms(sn,$,te,ue,C.state.transmissionRenderTarget[w.id]),Is.upload(I,Nh(qe),sn,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Is.upload(I,Nh(qe),sn,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(I,"center",J.center),Tt.setValue(I,"modelViewMatrix",J.modelViewMatrix),Tt.setValue(I,"normalMatrix",J.normalMatrix),Tt.setValue(I,"modelMatrix",J.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let $t=$.uniformsGroups;for(let Wi=0,Yr=$t.length;Wi<Yr;Wi++){let Fh=$t[Wi];he.update(Fh,Wn),he.bind(Fh,Wn)}}return Wn}function bp(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function xp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,H,ee){let $=x.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),x.get(w.texture).__webglTexture=H,x.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let ee=x.get(w);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0};let _p=I.createFramebuffer();this.setRenderTarget=function(w,H=0,ee=0){F=w,P=H,L=ee;let $=null,J=!1,De=!1;if(w){let Le=x.get(w);if(Le.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(I.FRAMEBUFFER,Le.__webglFramebuffer),z.copy(w.viewport),R.copy(w.scissor),j=w.scissorTest,ye.viewport(z),ye.scissor(R),ye.setScissorTest(j),k=-1;return}else if(Le.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(Le.__hasExternalTextures)B.rebindTextures(w,x.get(w.texture).__webglTexture,x.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(Le.__boundDepthTexture!==Qe){if(Qe!==null&&x.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}let He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);let Ye=x.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?$=Ye[H][ee]:$=Ye[H],J=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?$=x.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?$=Ye[ee]:$=Ye,z.copy(w.viewport),R.copy(w.scissor),j=w.scissorTest}else z.copy(V).multiplyScalar(te).floor(),R.copy(oe).multiplyScalar(te).floor(),j=ne;if(ee!==0&&($=_p),ye.bindFramebuffer(I.FRAMEBUFFER,$)&&ye.drawBuffers(w,$),ye.viewport(z),ye.scissor(R),ye.setScissorTest(j),J){let Le=x.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,ee)}else if(De){let Le=H;for(let He=0;He<w.textures.length;He++){let Ye=x.get(w.textures[He]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+He,Ye.__webglTexture,ee,Le)}}else if(w!==null&&ee!==0){let Le=x.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,ee)}k=-1},this.readRenderTargetPixels=function(w,H,ee,$,J,De,Fe,Le=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){ye.bindFramebuffer(I.FRAMEBUFFER,He);try{let Ye=w.textures[Le],Qe=Ye.format,st=Ye.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!ze.textureFormatReadable(Qe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(st)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&ee>=0&&ee<=w.height-J&&I.readPixels(H,ee,$,J,G.convert(Qe),G.convert(st),De)}finally{let Ye=F!==null?x.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,H,ee,$,J,De,Fe,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=x.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(H>=0&&H<=w.width-$&&ee>=0&&ee<=w.height-J){ye.bindFramebuffer(I.FRAMEBUFFER,He);let Ye=w.textures[Le],Qe=Ye.format,st=Ye.type;if(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),!ze.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),I.readPixels(H,ee,$,J,G.convert(Qe),G.convert(st),0);let St=F!==null?x.get(F).__webglFramebuffer:null;ye.bindFramebuffer(I.FRAMEBUFFER,St);let zt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ju(I,zt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(Je),I.deleteSync(zt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ee=0){let $=Math.pow(2,-ee),J=Math.floor(w.image.width*$),De=Math.floor(w.image.height*$),Fe=H!==null?H.x:0,Le=H!==null?H.y:0;B.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,Fe,Le,J,De),ye.unbindTexture()};let yp=I.createFramebuffer(),vp=I.createFramebuffer();this.copyTextureToTexture=function(w,H,ee=null,$=null,J=0,De=0){let Fe,Le,He,Ye,Qe,st,Je,St,zt,Ut=w.isCompressedTexture?w.mipmaps[De]:w.image;if(ee!==null)Fe=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,He=ee.isBox3?ee.max.z-ee.min.z:1,Ye=ee.min.x,Qe=ee.min.y,st=ee.isBox3?ee.min.z:0;else{let sn=Math.pow(2,-J);Fe=Math.floor(Ut.width*sn),Le=Math.floor(Ut.height*sn),w.isDataArrayTexture?He=Ut.depth:w.isData3DTexture?He=Math.floor(Ut.depth*sn):He=1,Ye=0,Qe=0,st=0}$!==null?(Je=$.x,St=$.y,zt=$.z):(Je=0,St=0,zt=0);let wt=G.convert(H.format),cn=G.convert(H.type),qe;H.isData3DTexture?(B.setTexture3D(H,0),qe=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),qe=I.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);let wn=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wn=I.getParameter(I.UNPACK_SKIP_PIXELS),li=I.getParameter(I.UNPACK_SKIP_ROWS),br=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,st);let qr=w.isDataArrayTexture||w.isData3DTexture,Tt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let sn=x.get(w),Gi=x.get(H),$t=x.get(sn.__renderTarget),Wi=x.get(Gi.__renderTarget);ye.bindFramebuffer(I.READ_FRAMEBUFFER,$t.__webglFramebuffer),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Yr=0;Yr<He;Yr++)qr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(w).__webglTexture,J,st+Yr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(H).__webglTexture,De,zt+Yr)),I.blitFramebuffer(Ye,Qe,Fe,Le,Je,St,Fe,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||x.has(w)){let sn=x.get(w),Gi=x.get(H);ye.bindFramebuffer(I.READ_FRAMEBUFFER,yp),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,vp);for(let $t=0;$t<He;$t++)qr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,J,st+$t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,J),Tt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gi.__webglTexture,De,zt+$t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gi.__webglTexture,De),J!==0?I.blitFramebuffer(Ye,Qe,Fe,Le,Je,St,Fe,Le,I.COLOR_BUFFER_BIT,I.NEAREST):Tt?I.copyTexSubImage3D(qe,De,Je,St,zt+$t,Ye,Qe,Fe,Le):I.copyTexSubImage2D(qe,De,Je,St,Ye,Qe,Fe,Le);ye.bindFramebuffer(I.READ_FRAMEBUFFER,null),ye.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Tt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(qe,De,Je,St,zt,Fe,Le,He,wt,cn,Ut.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(qe,De,Je,St,zt,Fe,Le,He,wt,Ut.data):I.texSubImage3D(qe,De,Je,St,zt,Fe,Le,He,wt,cn,Ut):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,De,Je,St,Fe,Le,wt,cn,Ut.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,De,Je,St,Ut.width,Ut.height,wt,Ut.data):I.texSubImage2D(I.TEXTURE_2D,De,Je,St,Fe,Le,wt,cn,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,wn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,li),I.pixelStorei(I.UNPACK_SKIP_IMAGES,br),De===0&&H.generateMipmaps&&I.generateMipmap(qe),ye.unbindTexture()},this.initRenderTarget=function(w){x.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){P=0,L=0,F=null,ye.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Nf={type:"change"},lh={type:"start"},Ff={type:"end"},bc=new Qi,Uf=new yn,Dx=Math.cos(70*ei.DEG2RAD),Jt=new D,Mn=2*Math.PI,Et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ah=1e-6,xc=class extends Io{constructor(e,t=null){super(e,t),this.state=Et.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sr.ROTATE,MIDDLE:sr.DOLLY,RIGHT:sr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new en,this._lastTargetPosition=new D,this._quat=new en().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new D,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new D,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nx.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Ux.bind(this),this._onContextMenu=Hx.bind(this),this._onMouseWheel=Ox.bind(this),this._onKeyDown=Bx.bind(this),this._onTouchStart=kx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=Fx.bind(this),this._onMouseMove=zx.bind(this),this._interceptControlDown=Gx.bind(this),this._interceptControlUp=Wx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nf),this.update(),this.state=Et.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<Dx?this.object.lookAt(this.target):(Uf.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(Uf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ah||this._lastTargetPosition.distanceToSquared(this.target)>ah?(this.dispatchEvent(Nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Jt.copy(r).sub(this.target);let s=Jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Lx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Nx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ux(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ff),this.state=Et.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Et.DOLLY;break;case sr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}break;case sr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Et.PAN}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(lh)}function zx(i){switch(this.state){case Et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ox(i){this.enabled===!1||this.enableZoom===!1||this.state!==Et.NONE||(i.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ff))}function Bx(i){this.enabled!==!1&&this._handleKeyDown(i)}function kx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Et.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Et.TOUCH_PAN;break;default:this.state=Et.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Et.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Et.TOUCH_DOLLY_ROTATE;break;default:this.state=Et.NONE}break;default:this.state=Et.NONE}this.state!==Et.NONE&&this.dispatchEvent(lh)}function Vx(i){switch(this._trackPointer(i),this.state){case Et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Et.NONE}}function Hx(i){this.enabled!==!1&&i.preventDefault()}function Gx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Go(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new mt,l=0;for(let d=0;d<i.length;++d){let f=i[d],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(f.attributes[u]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!r.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,d),l+=u}}if(t){let d=0,f=[];for(let h=0;h<i.length;++h){let u=i[h].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+d);d+=i[h].attributes.position.count}c.setIndex(f)}for(let d in s){let f=zf(s[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(let d in o){let f=o[d][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let h=0;h<f;++h){let u=[];for(let _=0;_<o[d].length;++_)u.push(o[d][_][h]);let m=zf(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(m)}}return c}function zf(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let d=i[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new on(o,t,n),c=0;for(let l=0;l<i.length;++l){let d=i[l];if(d.isInterleavedBufferAttribute){let f=c/t;for(let h=0,u=d.count;h<u;h++)for(let m=0;m<t;m++){let _=d.getComponent(h,m);a.setComponent(h+f,m,_)}}else o.set(d.array,c);c+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var _c=.4166666666666667,yc=.24,Ls=.018;function ti(i,e=!0){let t=i.pixels*_c,n=(i.trim==="left"?yc:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?yc:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function Of(i){let e=i.pixels*_c;return[[-(i.extendStart||0),Ls],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*_c-Ls,(n+1)*_c+Ls]),[e-Ls,e+(i.extendEnd||0)]]}function vc(i){return Object.fromEntries(["extendStart","extendEnd","extraStartTrim","extraEndTrim"].filter(e=>i[e]).map(e=>[e,i[e]]))}var Bf=2.5/6,Xx=.24,Ns=.018,ch=new Map,jx=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function dh(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let d of t)if(!Number.isInteger(d.at)||d.at<=0||d.at>=i||![0,1].includes(d.layer)||!["left","right","seam"].includes(d.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(ch.has(s))return ch.get(s).map(d=>({...d}));let o=[0,1].map(d=>new Set(t.filter(f=>f.layer===d).map(f=>f.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let d=1;d<=i;d++){let f=new Map;for(let h of a.values())for(let u of[!1,!0])for(let m of[!1,!0]){let _=[u,m];if(d<i&&u&&m&&!(o[0].has(d)&&o[1].has(d)))continue;let g=[...h.starts],p=[...h.score],S=[],M=!0;for(let E of[0,1]){let T=g[E],b=d-T,y=E^e;if(b>6||!_[E]&&(d===i||b===6||o[E].has(d))){M=!1;break}if(!_[E])continue;let N=r.left&&y===1&&T===0||t.some(R=>R.layer===E&&R.at===T&&R.side==="left"),P=r.right&&y===1&&d===i||t.some(R=>R.layer===E&&R.at===d&&R.side==="right");if(N&&P){M=!1;break}let L=N?"left":P?"right":null,F={};for(let R of t.filter(j=>j.layer===E&&j.fullEndSlot))R.side==="left"&&R.at===d&&(F.extendEnd=Ns),R.side==="left"&&R.at===T&&(F.extraStartTrim=Ns),R.side==="right"&&R.at===d&&(F.extraEndTrim=Ns),R.side==="right"&&R.at===T&&(F.extendStart=Ns);r.extraTrim&&N&&T===0&&(F.extraStartTrim=Ns),r.extraTrim&&P&&d===i&&(F.extraEndTrim=Ns);let k={pixels:b,start:T*Bf,layer:y,trim:L,...F},[O,z]=ti(k,!1);if(z-O>2.5+1e-9||z-O<=0){M=!1;break}p[0]+=+(b===1&&!!L),p[1]+=+(b===1),p[2]++,p[3]+=1/(b*Bf-(L?Xx:0)),y===1&&T===0&&(p[4]+=Math.abs(b-n)),S.push(k),g[E]=d}if(!M)continue;let v=g.join(","),C=f.get(v);(!C||jx(p,C.score))&&f.set(v,{starts:g,score:p,pieces:[...h.pieces,...S]})}a=f}let c=a.get(`${i},${i}`);if(!c)throw new Error("No native staggered stock layout: "+s);let l=c.pieces.sort((d,f)=>f.layer-d.layer||d.start-f.start);return ch.set(s,l),l.map(d=>({...d}))}function Mc(i,e=2){return dh(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var ft=2.5/6,Sn=.24,it=.018,ut=Sn/2,Mt=1e-7,vi=new D(1,0,0),Mi=new D(0,1,0),Dn=new D(0,0,1);function hr(i={},e={},t={}){let n=i.wood||new Rt({color:"#c7a46f",side:Lt}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,c=Mc;function l(g,p,S,M){let v=[];for(let C=0;C<g.length;C++){let E=g[C],T=g[(C+1)%g.length],b=M*(E[p]-S),y=M*(T[p]-S);b>=-Mt&&v.push(E.clone()),b>=-Mt!=y>=-Mt&&v.push(E.clone().lerp(T,b/(b-y)))}return v}function d(g){let p=g.pixels*ft,S=[new pe(-(g.extendStart||0),0),new pe(p+(g.extendEnd||0),0),new pe(p+(g.extendEnd||0),ut),new pe(p-it,ut),new pe(p-it,Sn)];for(let y=g.pixels-1;y>=1;y--){let N=y*ft;S.push(new pe(N+it,Sn),new pe(N+it,ut),new pe(N-it,ut),new pe(N-it,Sn))}S.push(new pe(it,Sn),new pe(it,ut),new pe(-(g.extendStart||0),ut));let M=S,[v,C]=ti(g);if(C<=v+Mt||(v>-(g.extendStart||0)+Mt&&(M=l(M,"x",v,1)),C<p+(g.extendEnd||0)-Mt&&(M=l(M,"x",C,-1)),M.length<3))return null;let E=new tr(M);E.closePath();let T=new Nr(E,{depth:it,bevelEnabled:!1,curveSegments:1});T.translate(0,-ut,0);let b=T.getAttribute("uv");for(let y=0;y<b.count;y++)b.setXY(y,b.getX(y)/2.5,b.getY(y)/Sn);return T}function f(g,p,S,M=[],v=null){let[C,E]=ti(g);v&&(C=Math.max(C,v[0]-g.start),E=Math.min(E,v[1]-g.start));let T=E>C+Mt?[[C,E]]:[];for(let b of M){let y=p===0?b.v0:b.u0,N=p===0?b.v1:b.u1;if(S+it<=y+Mt||S>=N-Mt)continue;let P=(p===0?b.u0:b.v0)-g.start,L=(p===0?b.u1:b.v1)-g.start;T=T.flatMap(([F,k])=>L<=F||P>=k?[[F,k]]:[[F,Math.min(k,P)],[Math.max(F,L),k]].filter(([O,z])=>z>O+Mt))}return T.map(([b,y])=>({...g,minCut:b,limit:y}))}function h(g,p,S,M,v=[]){let C=g.pixels*ft,[E,T]=ti(g);if(T<=E+Mt)return null;let b=Of(g),y=(g.connectorCuts||[]).map(Y=>({x0:Y.end==="start"?Y.offset||0:C-(Y.offset||0)-ut,x1:Y.end==="start"?(Y.offset||0)+ut:C-(Y.offset||0),y0:Y.edge==="slotted"?ut-it:-ut,y1:Y.edge==="slotted"?ut:-ut+it})),N=[E,T];for(let Y of b)for(let ae of Y)ae>E+Mt&&ae<T-Mt&&N.push(ae);for(let Y of y)for(let ae of[Y.x0,Y.x1])ae>E+Mt&&ae<T-Mt&&N.push(ae);N.sort((Y,ae)=>Y-ae);let P=new Map,L=!1,F=Y=>`${Math.round(Y.x*1e8)},${Math.round(Y.y*1e8)},${Math.round(Y.z*1e8)}`;function k(Y,ae){let me=[],ue=[];for(let le of Y){let se=[];for(let V=0;V<le.length;V++){let oe=le[V],ne=le[(V+1)%le.length],fe=ae.c-ae.n.dot(oe.clone().add(S)),Ae=ae.c-ae.n.dot(ne.clone().add(S));if(fe>=-Mt?se.push(oe):L=!0,fe>=-Mt!=Ae>=-Mt){let Pe=oe.clone().lerp(ne,fe/(fe-Ae));se.push(Pe),ue.push(Pe)}}se.length>=3&&me.push(se)}let te=[...new Map(ue.map(le=>[F(le),le])).values()];if(te.length>=3){let le=te.reduce((ne,fe)=>ne.add(fe),new D).divideScalar(te.length),se=ae.n.clone().normalize(),V=(Math.abs(se.y)>.9?vi:Mi).clone().cross(se).normalize(),oe=se.clone().cross(V);te.sort((ne,fe)=>Math.atan2(ne.clone().sub(le).dot(oe),ne.clone().sub(le).dot(V))-Math.atan2(fe.clone().sub(le).dot(oe),fe.clone().sub(le).dot(V))),me.push(te)}return me}function O(Y,ae,me,ue){let te=[[Y,me,0],[ae,me,0],[ae,ue,0],[Y,ue,0],[Y,me,it],[ae,me,it],[ae,ue,it],[Y,ue,it]].map(ne=>new D(...ne).applyMatrix4(p)),le=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(ne=>ne.map(fe=>te[fe]));p.determinant()<0&&le.forEach(ne=>ne.reverse());for(let ne of M)if(le=k(le,ne),!le.length)return;let se=L,V=v.length&&le.some(ne=>ne.some(fe=>!v.some(Ae=>Ae.every(Pe=>Pe.n.dot(fe.clone().add(S))<=Pe.c+Mt)))),oe=v.length?v.flatMap(ne=>{let fe=le;for(let Ae of ne)if(fe=k(fe,Ae),!fe.length)break;return fe}):le;L=se||!!V;for(let ne of oe){let fe=ne.filter((Pe,Ge)=>Ge===0||Pe.distanceToSquared(ne[Ge-1])>1e-18);if(fe.length<3)continue;let Ae=fe.map(F).sort().join("|");P.has(Ae)?P.delete(Ae):P.set(Ae,fe)}}for(let Y=0;Y<N.length-1;Y++){let ae=N[Y],me=N[Y+1],ue=(ae+me)/2;if(me-ae<Mt)continue;let te=[...new Set([-ut,0,ut,...y.flatMap(le=>[le.y0,le.y1])])].sort((le,se)=>le-se);for(let le=0;le<te.length-1;le++){let se=te[le],V=te[le+1],oe=(se+V)/2;oe>0&&b.some(([ne,fe])=>ue>ne&&ue<fe)||y.some(ne=>ue>ne.x0-Mt&&ue<ne.x1+Mt&&oe>ne.y0-Mt&&oe<ne.y1+Mt)||O(ae,me,se,V)}}let z=[],R=[];for(let Y of P.values())for(let ae=1;ae<Y.length-1;ae++){let me=Y[0],ue=Y[ae],te=Y[ae+1];if(!(ue.clone().sub(me).cross(te.clone().sub(me)).lengthSq()<1e-20))for(let le of[me,ue,te])z.push(le.x,le.y,le.z),R.push(le.dot(new D().setFromMatrixColumn(p,0))/2.5,le.dot(new D().setFromMatrixColumn(p,1))/Sn)}if(!z.length)return null;let j=new mt;return j.setAttribute("position",new ct(z,3)),j.setAttribute("uv",new ct(R,2)),j.computeVertexNormals(),j.userData.angledCut=L,j}function u(g,p,S,M,v,C,E={},T=0,b=[],y=[]){let[N,P]=ti(p,!1);if(P-N>2.5+Mt)throw new Error("Combstruct stock exceeds 2500 mm");let L=JSON.stringify([g.name,E.wallId||"",E.kind||"standard",E.axis,E.index,p.layer,T,...[p.start,p.pixels,p.minCut||0,p.limit??p.pixels*ft].map(V=>Math.round(V*1e7)/1e7)]),F=t.connectors===!1||s?[]:e[L]||[];p={...p,connectorCuts:F};let k=p.layer^T,O=C.clone().addScaledVector(S,p.start).addScaledVector(v,k===0?-it:0),z=new ot().makeBasis(S,M,v),R=b.length||y.length||(p.minCut||0)>Mt||p.limit!==void 0||F.length,j=R?h(p,z,O,b,y):d(p);if(!j)return null;R||j.applyMatrix4(z);let[Y,ae]=ti(p,!1),[me,ue]=ti(p),te=!!j.userData.angledCut||me>Y+Mt||ue<ae-Mt,le=new lt(j,p.trim||te?r:n);le.position.copy(O),le.castShadow=!0,le.receiveShadow=!0;let se={id:`board-${++a}`,mesh:le,surface:g.name,kind:E.kind||"standard",axis:E.axis,index:E.index,layer:k,stockLayer:p.layer,start:p.start,stockLength:p.pixels*ft,trim:p.trim||null,custom:te,connectorKey:L,connectorCuts:F,stock:{...p},along:S.toArray(),normal:M.toArray(),thick:v.toArray(),frameOrigin:C.toArray(),clippingPlanes:b.map(V=>({n:V.n.toArray(),c:V.c})),actualStart:p.start+me,actualEnd:p.start+ue,...E};return y.length&&(se.clippingRegions=y.map(V=>V.map(oe=>({n:oe.n.toArray(),c:oe.c})))),le.name=se.id,le.userData={...se,mesh:void 0},g.add(le),o.push(se),le}function m(g,p,S,M,v,C,E,{phaseU:T=0,phaseV:b=0,holes:y=[],keepTop:N=!1,clearances:P=[0,0],startClearances:L=[0,0],verticalPlanes:F=[],verticalModules:k=S,kind:O="standard"}={}){for(let z=0;z<2;z++){let R=z===0?p:k,j=z===0?S:p,Y=z===0?v:C,ae=z===0?C:v,me=E.clone().multiplyScalar(z===0?1:-1),ue=z===0?T:b;for(let te=1;te<j;te++)for(let le of c(R)){let se={...le};N&&z===1&&se.trim==="right"&&(se.trim=null);let V=P[z]||0;V&&Math.abs(se.start+se.pixels*ft-R*ft)<Mt&&(se.limit=se.pixels*ft-(se.trim==="right"?Sn:0)-V),L[z]&&se.start===0&&(se.minCut=(se.trim==="left"?Sn:0)+L[z]);let oe=te*ft+((se.layer^ue)===0?-it:0);for(let ne of f(se,z,oe,y))u(g,ne,Y,me,ae,M.clone().addScaledVector(ae,te*ft),{kind:O,axis:z,index:te},ue,z===1?F:[])}}}return{lengthJoints:s,boards:o,segments:c,jointStock:(g,p=0,S=[],M=2,v)=>dh(g,p,s?S.map(C=>({...C,fullEndSlot:C.side!=="seam"})):S,M,v),openStock:f,addBoard:u,grid:m}}var kf={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ceiling","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};function Us({pitch:i,spanHalf:e,ridgeUnderside:t,axis:n=0,clearance:r=.001}){let s=i*Math.PI/180,o=Math.cos(s),a=Math.sin(s),c=Math.tan(s),l=e-ut-it,d=l-ut,f=l+ut,h=t+ut/o,u=l/o-Sn/4*c,m=((u-ft/2)%ft+ft)%ft-ft,_=u-ft/2,g=u+ft/2,p=(M,v)=>({n:M,c:v});function S(M){let v=new D().setComponent(n,M),C=new D(0,1,0),E=v.clone().multiplyScalar(o).addScaledVector(C,-a),T=v.clone().multiplyScalar(a).addScaledVector(C,o),b=O=>O-a*h,y=O=>O+o*h,N=p(T.clone(),y(0)),P=p(T.clone().negate(),-y(0)),L=[[N],[P,p(E.clone().negate(),-b(_+it+r)),p(E.clone(),b(g-it-r))]],F=p(T.clone(),y(-ut)),k=p(T.clone(),y(ut));return{sign:M,q:v,along:E,normal:T,origin:new D(0,h,0).addScaledVector(E,m),wall(O){return{planes:[O===1?k:F],regions:O===1?L:[],role:O===1?"long-lap":"short-bearing"}},roof(O){return O===0?[{planes:[],regions:[],role:"continuous"}]:[{planes:[p(v.clone(),d)],regions:[],role:"inner-ending"},{planes:[p(v.clone().negate(),-f)],regions:[[N],[P,p(E.clone().negate(),-b(g-it))]],role:"eave-ending"}]},slotPlanes(O,z=0){let R=O==="inner"?_:g;return[p(E.clone(),b(R+it)),p(E.clone().negate(),-b(R-it)),p(T.clone().negate(),-y(0)),p(T.clone(),y(ut+z))]}}}return{pitch:i,clearance:r,phaseOrigin:m,wallCenter:l,inner:d,outer:f,centerY:h,toothCenter:u,slotInner:_,slotOuter:g,axis:n,side:S,slabBeveled:!1}}function Yx(i,e){return i.flatMap(t=>e.map((n,r)=>[...t,...e.slice(0,r),{n:n.n.clone().negate(),c:-n.c}]))}function Vf(i=[],e=[]){return i.length&&e.length?i.flatMap(t=>e.map(n=>[...t,...n])):i.length?i:e}function Sc({pitch:i,centerY:e,phaseOrigin:t,axis:n=0}){let r=i*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=ut*Math.max(Math.tan(r),1/Math.tan(r)),c=Math.max(0,Math.ceil((t+a+it)/ft)),l=t-c*ft,d=m=>{let _=new D().setComponent(n,m),g=new D(0,1,0);return{q:_,along:_.clone().multiplyScalar(s).addScaledVector(g,-o),normal:_.clone().multiplyScalar(o).addScaledVector(g,s)}},f=[];for(let m=1;t+m*ft-it<a;m++)f.push(t+m*ft);function h(m,_,g=0){let p=d(m),S=_-o*e;return[{n:p.along,c:S+it},{n:p.along.clone().negate(),c:-S+it},{n:p.normal.clone().negate(),c:-s*e},{n:p.normal,c:s*e+ut+g},{n:p.q.clone().negate(),c:0}]}function u(m,_){let g=_===(m===-1?0:1),S=[{n:d(-m).normal,c:s*e+(g?ut:-ut)}],M=[];if(g)for(let v of f)M=Yx(M.length?M:[[]],h(-m,v,1));return{planes:S,regions:M,role:g?"long":"short"}}return{pitch:i,centerY:e,axis:n,phaseOrigin:t,reach:a,headModules:c,rafterStart:l,nearSlots:f,frame:d,treatment:u,slotEnvelope:h}}var Te=2.5/6,bt=.24,Ve=.018,gt=bt/2,Ln=new D(1,0,0),ni=new D(0,1,0),ii=new D(0,0,1),hh=1e-7;function uh(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=gt+(t?Ve:0),r=i.wood||new Rt({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new Oe;o.name="Combstruct 30 — aligned joints";let a=q=>{let ie=new Oe;return ie.name=q,o.add(ie),ie},c={floor:a("Floor panel and continuous terrace"),walls:["rear","left","front","right"].map(q=>a(q)),partitions:a("Internal walls"),ceiling:a("Ceiling"),roof:a("Roof 35\xB0"),gables:a("Horizontal gable rows"),pergola:a("Pergola")},l=13*Te,d=15*Te,f=7*Te,h=-l/2,u=l/2,m=-d/2,_=d/2,g=m-f,p=8,S=p*Te,M=t?S+Ve:S-bt,v=M+bt,C=35*Math.PI/180,E=Math.sin(C),T=Math.cos(C),b=Math.tan(C),y=v-(t?Ve*b:0),N=y+b*l/2,P=N+bt/T,L=t?Us({pitch:35,spanHalf:l/2,ridgeUnderside:N,axis:0}):null,F={width:l,depth:d,halfWidth:l/2,halfDepth:d/2,terraceDepth:f,terraceRearZ:g,wallDepth:bt,floorBottom:0,floorTop:bt,wallTop:S,ceilingBottom:M,ceilingTop:v,clearHeight:M-bt,roofAngle:35,roofEaveY:y,roofUnderRidgeY:N,roofRidgeY:P,roofOverhang:Te,module:Te,boardDepth:bt,boardThickness:Ve,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:Te,constructionOnly:!0},k=hr({wood:r,end:s},kf,{...e,connectors:t?!1:e.connectors}),{boards:O,segments:z,openStock:R,addBoard:j,grid:Y}=k,ae=[],me=[],ue={rear:[],left:[],front:[],right:[],partitions:[]},te=(q,ie=0,we=[],_e=2,ve={left:!0,right:!0})=>k.jointStock(q,ie,t?we.map(Ue=>({...Ue,fullEndSlot:!0})):we,_e,{...ve,extraTrim:ve.extraTrim??t}),le=h+6*Te-n,se=le,V=m+8*Te-n,oe=new D(h,gt,g);function ne(q,ie,we,_e,ve){let Ue=ve==="floor",U=Ue?7:0;for(let G=0;G<2;G++){let X=G===0?ie:we,he=G===0?we:ie;for(let Z=1;Z<he;Z++){let W=[];G===0&&Z>U&&W.push({at:6,side:"right",layer:1}),G===1&&(Ue&&W.push({at:7,side:"left",layer:1}),Z<6&&W.push({at:U+8,side:"right",layer:1}));let xe=te(X,0,W);for(let Ee of xe)j(q,Ee,G===0?Ln:ii,G===0?ni:ni.clone().negate(),G===0?ii:Ln,_e.clone().addScaledVector(G===0?ii:Ln,Z*Te),{kind:ve,axis:G,index:Z},0)}}}ne(c.floor,13,22,oe,"floor");let fe=["rear","left","front","right"],Ae=[new D(h,0,m+n),new D(h+n,0,m),new D(h,0,_-n),new D(u-n,0,m)],Pe=[ii,Ln,ii.clone().negate(),Ln.clone().negate()];function Ge(q,ie,we,_e,ve,Ue,U){return{id:U,kind:ie,u0:we*Te+Ve,u1:_e*Te-Ve,v0:ve,v1:Ue}}ue.front=[Ge("front","window",1,3,3*Te+Ve,6*Te-Ve,"front-window-left"),Ge("front","door",6,9,bt,6*Te-Ve,"entrance"),Ge("front","window",10,12,3*Te+Ve,6*Te-Ve,"front-window-right")],ue.rear=[Ge("rear","window",1,5,2*Te+Ve,6*Te-Ve,"bedroom-window"),Ge("rear","door",8,12,bt,6*Te-Ve,"terrace-door")],ue.right=[Ge("right","window",3,7,2*Te+Ve,6*Te-Ve,"living-window")];function We(q,ie,we,_e,ve){let Ue=(we===0?_e.x:_e.z)+q.u0,U=(we===0?_e.x:_e.z)+q.u1;return Object.assign(q,{wallId:ie,axis:we,origin:{x:_e.x,y:_e.y,z:_e.z},world:we===0?{x0:Ue,x1:U,z0:ve-gt,z1:ve+gt,y0:q.v0,y1:q.v1}:{x0:ve-gt,x1:ve+gt,z0:Ue,z1:U,y0:q.v0,y1:q.v1}}),q}let ce=[{n:new D(-b,1,0),c:y+b*l/2},{n:new D(b,1,0),c:y+b*l/2}],ge=Math.ceil(N/Te)+1;for(let q=0;q<4;q++){let ie=q%2,we=ie===0?Ln:ii,_e=Ae[q],ve=ie===0?_e.z:_e.x,Ue=ie===0?13:15,U=fe[q],G=ue[U];G.forEach(X=>We(X,U,ie,_e,ve)),ae.push({id:U,axis:ie,start:ie===0?_e.x:_e.z,end:(ie===0?_e.x:_e.z)+Ue*Te-(ie===0?Ve:2*Ve),fixed:ve,depth:bt,holes:G,exterior:!0,origin:{x:_e.x,y:0,z:_e.z}});for(let X=0;X<2;X++){let he=X===0?Ue:ge,Z=X===0&&ie===0?0:1;for(let W=1;W<(X===0?p+1:Ue);W++){let xe=X===0?ie===0?[{at:6,side:"right",layer:1}]:q===1?[{at:8,side:"right",layer:0}]:[]:[{at:p,side:t?"left":"right",layer:0}];for(let Ee of te(he,Z,xe,2,{left:!0,right:!0,extraTrim:t&&X===0})){let ke={...Ee};X===1&&ke.trim==="right"&&ke.start+ke.pixels*Te===he*Te&&(ke.trim=null);let je=W*Te+((ke.layer^Z)===0?-Ve:0),Pt=L&&ie===1&&X===1?L.side(q===1?-1:1).wall(ke.layer^Z):null;for(let kt of R(ke,X,je,G))j(c.walls[q],kt,X===0?we:ni,X===0?Pe[q]:Pe[q].clone().negate(),X===0?ni:we,_e.clone().addScaledVector(X===0?ni:we,W*Te),{kind:"wall",axis:X,index:W,...Pt?{roofLap:Pt.role}:{}},Z,Pt?.planes||(X===1||W===p?ce:[]),Pt?.regions||[])}}}if(ie===0)for(let X=p+1;X<ge;X++)for(let he of z(13))for(let Z of R(he,0,X*Te+(he.layer===0?-Ve:0),G))j(c.gables,Z,Ln,Pe[q],ni,_e.clone().addScaledVector(ni,X*Te),{kind:"gable",axis:0,index:X,wallId:U},0,ce)}ne(c.ceiling,13,15,new D(h,M+gt,m),"ceiling");let re={left:h+n+gt,right:u-n-gt,rear:m+n+gt,front:_-n-gt};function Me(q,ie,we,_e,ve=[]){let Ue=new Oe;Ue.name=q,c.partitions.add(Ue);let U=ie===0?new D(h,0,_e):new D(_e,0,m),G=ie===0?Ln:ii,X=ie===0?ii:Ln,he=ve.map(([Z,W])=>({id:`${q}-door-${Z}`,kind:"door",u0:Z*Te+Ve,u1:W*Te-Ve,v0:bt,v1:6*Te-Ve}));he.forEach(Z=>We(Z,q,ie,U,_e)),ue.partitions.push(...he),Ue.userData={id:q,axis:ie,start:ie===0?h:m,end:(ie===0?h:m)+we*Te,fixed:_e,depth:bt,holes:he,origin:{x:U.x,y:0,z:U.z}},ae.push({...Ue.userData,exterior:!1});for(let Z=0;Z<2;Z++){let W=Z===0&&ie===0?0:1,xe=Z===0?we:p+(t?1:0),Ee=Z===0?ie===1?[{at:8,side:"right",layer:0}]:[]:t?[{at:p,side:"left",layer:0}]:[];for(let ke=1;ke<(Z===0?p+(t?1:0):we);ke++)for(let je of te(xe,W,Ee,2,{left:!0,right:!(t&&Z===1),extraTrim:t&&Z===0})){let Pt={...je};for(let kt of R(Pt,Z,ke*Te+((Pt.layer^W)===0?-Ve:0),he))j(Ue,kt,Z===0?G:ni,Z===0?X:X.clone().negate(),Z===0?ni:G,U.clone().addScaledVector(Z===0?ni:G,ke*Te),{kind:"partition",wallId:q,axis:Z,index:ke},W,t?[{n:ni,c:v}]:[])}}}Me("bedroom-right",1,15,le,[[5,7],[10,12]]),Me("bedroom-front",0,6,V);let I={id:"bedroom",name:"Bedroom",x0:re.left,x1:le-gt,z0:re.rear,z1:V-gt},Xe={id:"bathroom",name:"Bathroom",x0:re.left,x1:se-gt,z0:V+gt,z1:re.front},Re=[{x:le+gt,z:re.rear},{x:re.right,z:re.rear},{x:re.right,z:re.front},{x:se+gt,z:re.front},{x:se+gt,z:V+gt},{x:le+gt,z:V+gt}],ze=q=>Math.abs(q.reduce((ie,we,_e)=>ie+we.x*q[(_e+1)%q.length].z-q[(_e+1)%q.length].x*we.z,0))/2,ye=[I,Xe].map(q=>({...q,area:(q.x1-q.x0)*(q.z1-q.z0)}));ye.push({id:"living",name:"Living room and kitchen",x0:se+gt,x1:re.right,z0:re.rear,z1:re.front,polygon:Re,area:ze(Re)});let A=m-Te,x=17,B=L?.phaseOrigin??-Te/2,K=l/2+Te,de=Math.ceil((K/T-B)/Te)+1,Q=N+gt/T,Ce=t?Sc({pitch:35,centerY:Q,phaseOrigin:B,axis:0}):null,Se=[],Be=Array.from({length:14},(q,ie)=>m+(ie+1)*Te);for(let q of[-1,1]){let ie=new D(q*T,-E,0),we=new D(q*E,T,0),_e=new D(0,Q,A).addScaledVector(ie,B),ve=new Oe;ve.name=q===-1?"roof-left":"roof-right",c.roof.add(ve);let Ue=q===-1?[{n:Ln.clone(),c:0},{n:Ln.clone().negate(),c:K}]:[{n:Ln.clone().negate(),c:0},{n:Ln.clone(),c:K}];for(let U=1;U<x;U++){let G=A+U*Te;q===-1&&Se.push(G);for(let X of z(Ce?Math.ceil((K/T+gt*E/T+Ve-Ce.rafterStart)/Te):de)){let he={...X,start:X.start-(Ce?.headModules||0)*Te,trim:null},Z=q===-1?0:1,W=L&&G>m+hh&&G<_-hh,xe=W?L.side(q).roof(he.layer^Z):[{planes:[],regions:[]}],Ee=Ce?.treatment(q,he.layer^Z);for(let ke of xe)j(ve,he,ie,we,ii,_e.clone().addScaledVector(ii,U*Te),{kind:"roof-slope",axis:0,index:U,roofSide:q,...W?{roofLap:ke.role}:{},...Ee?{ridgeLap:Ee.role}:{},detail:"Alternating ridge and roof-wall laps"},Z,[...Ee?[Ue[1],...Ee.planes]:Ue,...ke.planes],Vf(ke.regions,Ee?.regions))}}for(let U=1;U<de;U++)for(let G of z(x))j(ve,G,ii,we.clone().negate(),ie,_e.clone().addScaledVector(ie,U*Te),{kind:"roof-cross",axis:1,index:U,roofSide:q},0,Ue)}Ce&&(F.ridgeJoint={strategy:"alternating-ply-lap",pitch:Ce.pitch,headModules:Ce.headModules,nearSlots:Ce.nearSlots,roofEnvelopePreserved:!0}),F.usableConceptArea=ye.reduce((q,ie)=>q+ie.area,0),L&&(F.roofWallJoint={strategy:"between-slots",clearance:L.clearance,phaseOrigin:L.phaseOrigin,wallCenter:L.wallCenter,slotInner:L.slotInner,slotOuter:L.slotOuter,slabBeveled:!1,knee:!1}),F.structuralFootprintArea=l*d,F.terraceArea=l*f,me.push({id:"edge-floor",title:"Floor — external wall",description:"The long upright occupies the space left by the floor end. The short upright rests on the full board.",position:[h+3*Te,bt/2,_-gt],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:c.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Floor — wall — terrace",description:"A full end slot and an end board shortened by another 18 mm make room for the transverse floor rib.",position:[h+7*Te,bt/2,m+gt],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:c.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:c.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Floor — internal wall",description:"End-board lengths and a full end slot make room for the wall and transverse floor rib.",position:[le,bt/2,m+3*Te],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:c.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:c.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"Internal — external wall",description:"A full end slot and shorter end board connect the two walls without side cut-outs.",position:[le,3*Te,m+gt],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Internal wall junction",description:"The transverse partition connects into the layers of the continuous wall. End-board lengths leave room for the upright.",position:[le,3*Te,V],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Upper floor — external wall",description:"The slab rests on the horizontal wall row. The lower board ends with a full slot; the upper end board starts 258 mm from the joint station.",position:[h+gt,M+gt,m+9*Te],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:c.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:p}]},{id:"connector-120",title:"Slab on the horizontal rib — second direction",description:"In the second direction, the slab also sits above the horizontal wall rib. Board lengths define the joint.",position:[h+3*Te,M+gt,_-gt],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:c.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:p}]},{id:"ceiling-partition",title:"Upper floor — internal wall",description:"The slab rests on the horizontal row of the internal wall. A full end slot and shorter end board keep the ribs aligned.",position:[le,M+gt,m+3*Te],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:c.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:c.ceiling.name,axis:1,index:6}]});let Ze={module:Te,stockMaxLength:2.5,terminalDifference:bt,pairWidth:2*Ve,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:bt,exteriorVerticalSlots:"outward",ceilingModule:p,ceilingTop:v,roofPitchDegrees:35,roofAxes:Se,wallAxes:Be,roofAxesAligned:Be.every(q=>Se.some(ie=>Math.abs(ie-q)<hh)),connectorBoards:O.filter(q=>q.connectorCuts.length).length,jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,connectorVariants:t?[]:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:t?"Geometric model only; joint strength and erection stability are not verified.":"Interior wall cap rows omitted in the lateral-cut layout.",loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:c,openings:ue,rooms:ye,dimensions:F,boards:O,joints:me,wallPanels:ae,validation:Ze}}var Fi=(...i)=>new D(...i);function Hf(i,e,t){let n=new Oe;n.name="Interior — wall reveal";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:c,floorTop:l,clearHeight:d}=i.dimensions,f=10*r,h=d,u=-f/2,m=f/2,_=Fi(-a+s/2,l,-c+7*r),g=new ot().makeRotationY(-Math.PI/2).multiply(new ot().makeTranslation(-_.x,-_.y,-_.z)),p=new Gt(Fi(u,0,-s/2-.001),Fi(m,h,s/2+.001)),S=[],M=[],v=[],C=[],E,T=0,b=0,y=(G,X=.85,he={})=>new Rt({color:G,roughness:X,...he}),N=y("#e0e0d9"),P=y("#f4f3ec",.24),L=y("#303b35",.3,{metalness:.6}),F=y("#ae885a"),k=y("#c49b62"),O=new tn({color:"#685137",transparent:!0,opacity:.42}),z=y("#ecece5"),R=y("#bcbcb0"),j=(G,X,he,Z,W,xe,Ee,ke)=>{let je=new lt(new qt(X,he,Z),ke);return je.position.set(W,xe,Ee),G.add(je),je},Y=(G,X,he)=>(G.userData.info=X,G.userData.kind=he,S.push(G),G),ae=G=>{let X=document.createElement("canvas");X.width=512,X.height=512;let he=X.getContext("2d"),Z=35,W=()=>(Z=Math.imul(Z,1664525)+1013904223>>>0,Z/4294967296);he.fillStyle=G==="wood"?"#b89670":"#d0c8ae",he.fillRect(0,0,512,512);for(let Ee=0;Ee<(G==="wood"?1200:9500);Ee++){let ke=W()*512,je=W()*512;he.lineWidth=.4+W(),he.strokeStyle=G==="wood"?Ee%2?"#ac875c55":"#d6b68d66":Ee%3?"#f0e9d444":"#9f96744a",he.beginPath(),he.moveTo(ke,je),he.lineTo(ke+(G==="wood"?1:(W()-.5)*17),je+(G==="wood"?50+W()*100:(W()-.5)*18)),he.stroke()}let xe=new gi(X);return xe.colorSpace=Ht,xe},me=y("#e8dac5",.84,{map:ae("wood")}),ue=y("#eee7d3",1,{map:ae("fiber")});function te(G){let X=G.index?G.toNonIndexed():G.clone(),he=X.attributes.position,Z=[];for(let xe=0;xe<he.count;xe+=3){let Ee=[0,1,2].map(ke=>Fi().fromBufferAttribute(he,xe+ke));for(let[ke,je,Pt]of[[0,u,1],[0,m,-1],[1,0,1],[1,h,-1]]){let kt=[];for(let ai=0;ai<Ee.length;ai++){let pr=Ee[ai],Qo=Ee[(ai+1)%Ee.length],mr=(pr.getComponent(ke)-je)*Pt,Ws=(Qo.getComponent(ke)-je)*Pt;mr>=0&&kt.push(pr),mr>=0!=Ws>=0&&kt.push(pr.clone().lerp(Qo,mr/(mr-Ws)))}Ee=kt}for(let ke=1;ke<Ee.length-1;ke++)Z.push(...Ee[0].toArray(),...Ee[ke].toArray(),...Ee[ke+1].toArray())}X.dispose();let W=new mt;return W.setAttribute("position",new ct(Z,3)),W.computeVertexNormals(),W}for(let G of i.boards.filter(X=>X.surface==="left")){let X=G.mesh.geometry.clone().translate(...G.mesh.position.toArray()).applyMatrix4(g);if(X.computeBoundingBox(),!X.boundingBox.intersectsBox(p)){X.dispose();continue}let he=te(X);if(X.dispose(),!he.attributes.position.count){he.dispose();continue}let Z=new lt(he,k);Z.add(new Wt(new Xt(he,30),O)),n.add(Z),Y(Z,{...t(G),detailLabel:"Sheet thickness",detail:"18 mm"},"structure"),M.push(Z)}for(let G=2;G<12;G++)for(let X=0;X<8;X++){let he=(7-G-.5)*r,Z=(X+.5)*r-l,W=Math.max(0,Z-(r-2*o)/2),xe=Math.min(h,Z+(r-2*o)/2);if(xe-W<.045)continue;let Ee=j(n,r-2*o-.007,xe-W-.006,s-.025,he,(W+xe)/2,-.007,ue);Y(Ee,{id:`C30-IZ-${G.toString().padStart(2,"0")}${X}`,type:"Insulation block",surface:"External wall cell",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((xe-W-.006)*1e3)} mm`,metricLabel:"Dimensions in this view",detailLabel:"Layer",detail:"Insulation between ribs"},"insulation"),C.push(Ee)}j(n,f,h,.018,0,h/2,-.14,R);function le(G,X,he,Z){let W=new Ms,xe=X.map(je=>Fi(...je)),Ee=xe[0];for(let je=1;je<xe.length-1;je++){let Pt=Math.min(.07,xe[je].distanceTo(xe[je-1])/3,xe[je].distanceTo(xe[je+1])/3),kt=xe[je].clone().addScaledVector(xe[je-1].clone().sub(xe[je]).normalize(),Pt),ai=xe[je].clone().addScaledVector(xe[je+1].clone().sub(xe[je]).normalize(),Pt);W.add(new Pr(Ee,kt)),W.add(new Ir(kt,xe[je],ai)),Ee=ai}W.add(new Pr(Ee,xe[xe.length-1]));let ke=new lt(new wo(W,Math.max(16,Math.ceil(W.getLength()*55)),he,10,!1),Z);return G.add(ke),ke}let se=y("#327d9f",.48),V=y("#b65744",.48),oe=y("#c18c2d",.58),ne=y("#687572",.72),fe=(G,X,he,Z,W,xe)=>{let Ee=le(n,he,Z,W);return Y(Ee,{id:G,type:X,surface:"Service layer on the interior side",length:xe==="power"?"Sockets and lighting":"Basin connection",metricLabel:"Przeznaczenie",detailLabel:"Position",detail:"Przed rdzeniem konstrukcji"},xe),v.push(Ee),Ee};fe("C30-W-01","Cold water",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,se,"water"),fe("C30-W-02","Hot water",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,V,"water"),fe("C30-K-01","Basin waste pipe",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,ne,"water"),fe("C30-E-01","Socket cable",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,oe,"power"),fe("C30-E-02","Lighting cable",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,oe,"power");let Ae=j(n,.13,.12,.055,1.6,2.3,.191,y("#475751"));Y(Ae,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Service layer on the interior side",length:"Instalacja elektryczna",metricLabel:"Circuit",detailLabel:"Position",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Ae),j(n,f+.32,.12,1.82,0,-.06,.7,me);let Pe=y("#927d63");for(let G=u;G<m;G+=.19)j(n,.001,.001,1.8,G,.001,.7,Pe);let Ge=.249,We=.025,ce=u+.16,ge=m-.16,re=.22,Me=h-.22;j(n,f,.22,We,0,.11,Ge,N),j(n,f,.22,We,0,h-.11,Ge,N),j(n,.16,Me-re,We,u+.08,(Me+re)/2,Ge,N),j(n,.16,Me-re,We,m-.08,(Me+re)/2,Ge,N);let I=j(n,1,Me-re,We,0,(Me+re)/2,Ge,N);Y(I,{id:"C30-WYK-01",type:"Painted wall lining",surface:"Interior side of the wall",length:"Interior finish",metricLabel:"Layer",detailLabel:"Pod spodem",detail:"Structure, izolacja i instalacje"},"finish"),j(n,.09,h,.75,m+.045,h/2,.54,N),j(n,f+.06,.07,.65,0,h+.035,.45,N),j(n,f,.095,.022,0,.047,.278,z),j(n,.022,.095,.65,m-.01,.047,.61,z);let Re=j(n,.007,Me-re,.032,ce,(re+Me)/2,.255,y("#43948c")),ze=new Oe;n.add(ze),j(ze,.79,1.03,.014,-1.17,1.8,.27,L);let ye=document.createElement("canvas");ye.width=64,ye.height=128;let A=ye.getContext("2d"),x=A.createLinearGradient(0,0,64,128);x.addColorStop(0,"#8caaa5"),x.addColorStop(.5,"#cfdbd3"),x.addColorStop(.51,"#acb7ad"),x.addColorStop(1,"#c5bda5"),A.fillStyle=x,A.fillRect(0,0,64,128);let B=new gi(ye);B.colorSpace=Ht;let K=new Bn({map:B});j(ze,.75,.99,.004,-1.17,1.8,.279,K);let de=new yn(Fi(1,0,0),-ce);ze.traverse(G=>{G.isMesh&&(G.material=G.material.clone(),G.material.clippingPlanes=[de])});let Q=new Oe;n.add(Q),j(Q,1,.43,.43,-1.17,.51,.51,F),j(Q,1.06,.035,.48,-1.17,.742,.52,P);let Ce=y("#8c6944");for(let G=-1.63;G<-.7;G+=.035)j(Q,.009,.39,.008,G,.51,.729,Ce);let Se=new tr;Se.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let Be=new Dr;Be.absellipse(0,0,.285,.155,0,Math.PI*2,!0),Se.holes.push(Be);let Ze=new Nr(Se,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});Ze.rotateX(-Math.PI/2);let q=new lt(Ze,P);q.position.set(-1.17,.765,.52),Q.add(q);let ie=new lt(new Ni(.282,.25,.018,40),P);ie.scale.z=.55,ie.position.set(-1.17,.772,.52),Q.add(ie),le(Q,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,L),j(Q,.045,.012,.032,-1.17,1.062,.335,L);let we=(G,X,he=!1)=>{let Z=j(n,.135,.11,.019,G,X,.277,z);if(he)j(n,.09,.07,.009,G,X,.292,N);else for(let W of[-.032,.032]){let xe=new lt(new Ni(.026,.026,.007,20),N);xe.rotation.x=Math.PI/2,xe.position.set(G+W,X,.291),n.add(xe);for(let Ee of[-.008,.008])j(n,.006,.006,.004,G+W,X+Ee,.297,L)}return Z};we(1.13,.47),we(1.4,1.24,!0),j(n,.42,.036,.07,-1.17,2.57,.3,L),j(n,.38,.008,.055,-1.17,2.548,.31,y("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let _e=new Po(new Gt,2653304);_e.visible=!1,n.add(_e);function ve(G){E=G,_e.visible=G!==I,n.updateMatrixWorld(!0),_e.visible&&_e.box.setFromObject(G),e(G.userData.info)}function Ue(G){if(G===I)return I.visible;if(T<=.001)return!1;G.geometry.computeBoundingBox();let X=G.geometry.boundingBox.clone().applyMatrix4(G.matrixWorld);return X.max.x>ce&&X.min.x<ce+(ge-ce)*T&&X.max.y>re&&X.min.y<Me}function U(G){T=ei.clamp(G,0,1);let X=ce+(ge-ce)*T,he=ge-X;I.scale.x=he,I.position.x=(X+ge)/2,I.visible=he>1e-5,de.constant=-X,ze.visible=X<-1.17+.395,Re.position.x=X,Re.visible=T>.005&&T<.995,E&&E!==I&&!Ue(E)&&ve(I)}return U(0),ve(I),{root:n,direction:Fi(.48,.2,3),focus:new Gt(Fi(u-.1,-.1,-.16),Fi(m+.12,h+.1,1.08)),annotation:"Use the slider to reveal the wall",finish:U,selectAt(G){n.updateMatrixWorld(!0);let X=G.intersectObjects(n.children,!0).find(he=>{if(!he.object.isMesh)return!1;for(let Z=he.object;Z;Z=Z.parent)if(!Z.visible)return!1;return!(he.object.material.clippingPlanes||[]).some(Z=>Z.distanceToPoint(he.point)<0)});X?.object.userData.info&&ve(X.object)},next(){let G=S.filter(Ue);G.length&&ve(G[++b%G.length])},getSelected(){return E?.userData.info},getWallState(){return{reveal:T,boardCount:M.length,insulationCount:C.length,serviceCount:v.length,coverWidth:I.scale.x,insideFacing:!0}}}}function Gf({pitch:i=35,knee:e=!0,eave:t=!0}={},n){let r=new Oe,s=new Oe,o=new Oe,a=new Oe;r.add(s,o,a),s.name="roof-joint-sample",o.name="transverse-roof-ribs",a.name="horizontal-wall-rib";let c=hr(n),l=(...T)=>new D(...T),d=(T,b)=>({n:T,c:b}),f=e?0:Sn,h=Math.tan(i*Math.PI/180),u=Us({pitch:i,spanHalf:ut+it,ridgeUnderside:f+ut*h,axis:0}),m=u.side(1),_=l(0,-2*ft-it,0),g=d(Mi.clone().negate(),.65),p=(T,b,y,N,P,L,F=[],k=[],O=s)=>c.addBoard(O,T,b,y,N,P,L,0,F,k);for(let T of[0,1]){let b={start:0,pixels:6,layer:T},y=m.wall(T),N={kind:"wall-vertical",roofLap:y.role,axis:1,index:0};!e&&T===0?(p(b,Mi,vi,Dn,_,N,[g,d(Mi,0)]),p(b,Mi,vi,Dn,_,{...N,kind:"roof-filler"},[g,d(Mi.clone().negate(),-Sn),...y.planes])):p(b,Mi,vi,Dn,_,N,[g,...y.planes],y.regions),e||p({start:0,pixels:6,layer:T,...T?{trim:"left",extraStartTrim:it}:{}},vi.clone().negate(),Mi,Dn,l(ut+it,ut,0),{kind:"ceiling",axis:0,index:0},[d(vi.clone().negate(),1)]);let P=m.origin.clone().addScaledVector(m.along,-2*ft);for(let L of m.roof(T))!t&&L.role==="eave-ending"||p(b,m.along,m.normal,Dn,P,{kind:"roof-slope",axis:0,index:0,roofLap:L.role},[d(vi.clone().negate(),.8),d(vi,t?.72:ut),...L.planes],L.regions);p({start:0,pixels:2,layer:T},Dn,vi.clone().negate(),Mi,l(0,-it,-ft),{kind:"wall-horizontal",axis:0,index:0},[],[],a)}let S=l(0,u.centerY,-ft);for(let T of t?[u.slotInner,u.slotOuter]:[u.slotInner])for(let b of[0,1])p({start:0,pixels:2,layer:b},Dn,m.normal.clone().negate(),m.along,S.clone().addScaledVector(m.along,T),{kind:"roof-cross",axis:1,index:T},[],[],o);for(let T of c.boards)T.mesh.material=T.kind.startsWith("roof-")&&T.kind!=="roof-filler"?n.roof:n.wood,T.mesh.userData.base=T.mesh.position.clone(),T.mesh.add(new Wt(new Xt(T.mesh.geometry,30),n.edges));let M=0,v=!0,C=0;function E(){for(let T of c.boards)T.mesh.parent===s&&T.mesh.position.copy(T.mesh.userData.base).addScaledVector(Dn,(T.layer===0?-1:1)*M*.25);o.visible=v&&M===0,a.visible=M===0,o.position.copy(m.normal).multiplyScalar(C)}return{root:r,direction:l(-.8,.5,2.8),annotation:"Upright between slots · unbevelled floor · two-layer lap",spread(T){M=T,E()},crossing(T){v=T,E()},insert(T){C=T/1e3,E()},roofJoint:{pitch:i,knee:e,eave:t,clearance:u.clearance,slabBeveled:!1,slotInner:u.slotInner,slotOuter:u.slotOuter,boards:c.boards}}}var Nn=Object.freeze({width:.06,thickness:.018,stockLength:2.5}),Fs=1e-7;function Zx(i,e){let t=Math.max(i.u0,e.u0),n=Math.min(i.u1,e.u1),r=Math.max(i.v0,e.v0),s=Math.min(i.v1,e.v1);return n-t<Fs||s-r<Fs?[i]:[{...i,u1:t},{...i,u0:n},{...i,u0:t,u1:n,v1:r},{...i,u0:t,u1:n,v0:s}].filter(o=>o.u1-o.u0>Fs&&o.v1-o.v0>Fs)}function Jx(i,e=[]){let t=[];for(let n of i){let r=n.axis===1,s=n.intervals.map(a=>[...a]).sort((a,c)=>a[0]-c[0]),o=[];for(let a of s){let c=o.at(-1);c&&a[0]<=c[1]+Fs?c[1]=Math.max(c[1],a[1]):o.push(a)}for(let[a,c]of o)for(let l=a;l<c-Fs;l+=Nn.stockLength){let d=Math.min(c,l+Nn.stockLength),f=n.center,u=[r?{u0:f-Nn.width/2,u1:f+Nn.width/2,v0:l,v1:d}:{u0:l,u1:d,v0:f-Nn.width/2,v1:f+Nn.width/2}];for(let m of e)u=u.flatMap(_=>Zx(_,m));for(let m of u)t.push({...m,axis:n.axis,rib:n.index,stockStart:l,stockEnd:d})}}return t}function Wf(i,e=[]){return Jx(i,e).map(t=>({...t,side:t.axis===1?"exterior":"interior"}))}function $x(i){let e=a=>{let c=a.mesh.geometry.attributes.position,l=[];for(let d=0;d<c.count;d+=3){let f=[0,1,2].map(u=>new D().fromBufferAttribute(c,d+u).add(a.mesh.position));if(f.some(u=>Math.abs(u.z-(a.layer===0?-it:0))>1e-6))continue;f=f.map(u=>new pe(u.x,u.y));let h=f[1].clone().sub(f[0]).cross(f[2].clone().sub(f[0]));Math.abs(h)<1e-12||(h<0&&f.reverse(),l.push(f))}return l},[t,n]=i.filter(a=>a.kind==="roof-slope"&&a.ridgeLap==="long").map(e),r=[];for(let a of t)for(let c of n){let l=a;for(let d=0;d<3;d++){let f=c[d],h=c[(d+1)%3].clone().sub(f),u=new pe(h.y,-h.x),m=u.dot(f),_=[];for(let g=0;g<l.length;g++){let p=l[g],S=l[(g+1)%l.length],M=m-u.dot(p),v=m-u.dot(S);M>=0&&_.push(p),M>=0!=v>=0&&_.push(p.clone().lerp(S,M/(M-v)))}l=_}for(let d=1;d<l.length-1;d++)for(let f of[-it-5e-4,it+5e-4])for(let h of[l[0],l[d],l[d+1]])r.push(h.x,h.y,f)}let s=new mt;s.setAttribute("position",new ct(r,3));let o=new lt(s,new Bn({color:"#9f83b7",side:Lt,transparent:!0,opacity:.85,depthWrite:!1}));return o.name="lap-area-overlay",o}function Xf({pitch:i=45,ridgeHouse:e="principle"}={},t){let n=new Oe,r=new Oe,s=[];n.add(r),r.name="ridge-plies";let o=e==="principle"?-ft/2:Us({pitch:i,spanHalf:(e==="90"?16:13)*ft/2,ridgeUnderside:0}).phaseOrigin,a=Sc({pitch:i,phaseOrigin:o,centerY:0}),c=hr(t);for(let m of[-1,1]){let{q:_,along:g,normal:p}=a.frame(m),S=new Oe;S.userData.normal=p,n.add(S),s.push(S);for(let M of[0,1]){let v=a.treatment(m,M);c.addBoard(r,{start:a.rafterStart,pixels:6,layer:M},g,p,Dn,new D,{kind:"roof-slope",roofSide:m,ridgeLap:v.role},0,[{n:_,c:.8},...v.planes],v.regions),c.addBoard(S,{start:0,pixels:2,layer:M},Dn,p.clone().negate(),g,new D(0,0,-ft).addScaledVector(g,o+ft),{kind:"roof-cross",roofSide:m},0,[{n:_.clone().negate(),c:0}])}}for(let m of c.boards)m.mesh.material=m.roofSide===-1?t.wood:t.roof,m.mesh.userData.base=m.mesh.position.clone(),m.mesh.add(new Wt(new Xt(m.mesh.geometry,30),t.edges));let l=$x(c.boards);n.add(l);let d=0,f=!0,h=0;function u(){for(let m of c.boards)m.kind==="roof-slope"&&m.mesh.position.copy(m.mesh.userData.base).addScaledVector(Dn,(m.layer===0?-1:1)*d*.25);for(let m of s)m.visible=f&&d===0,m.position.copy(m.userData.normal).multiplyScalar(h);l.visible=d===0}return{root:n,direction:new D(0,.15,3),annotation:"Ridge · purple marks the shared lap area of plies A/B",spread(m){d=m,u()},crossing(m){f=m,u()},insert(m){h=m/1e3,u()},ridgeJoint:{pitch:i,ridgeHouse:e,phaseOrigin:o,boards:c.boards,ridge:a}}}var xt=(...i)=>new D(...i),Oi=xt(1,0,0),Si=xt(0,1,0),Bi=xt(0,0,1),wc=bt/2,nn=new Rt({color:"#cba36b",roughness:.8,side:Lt}),zi=new Rt({color:"#43948c",roughness:.75,side:Lt}),qf=new Rt({color:"#94784e",roughness:.85,side:Lt}),Ec=new tn({color:"#66543a",transparent:!0,opacity:.5}),Yf=new Rt({color:"#287c78",roughness:.7,side:Lt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Kx=new Set([nn,zi,qf,Ec,Yf]);function Zf(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])Kx.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var Wo;function Wr(){return Wo||(Wo=uh({wood:nn,end:nn}),Wo.root.updateMatrixWorld(!0),Wo.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),Wo}function Tc(i=6,e={}){let t=hr({},{},{connectors:!1}),n=new Oe,s=t.addBoard(n,{pixels:i,start:0,layer:0,...e},Oi,Si,Bi,xt()).geometry;return s.translate(0,0,-Ve/2),s}function jo(i,e=nn){let t=new lt(i,e);return t.add(new Wt(new Xt(i,30),Ec)),t}function Qx(i){return Mc(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function Gr(i,e,t,n,r,s,o=nn){for(let a of Qx(e)){let c=Tc(a.n,{trim:a.trim}),l=new ot().makeBasis(n,r,s);c.applyMatrix4(l);let d=jo(c,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Ve),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function e_(i,e,t){i.add(new Fr(t,e,.36,2653304,.095,.048))}function t_(i){let e=new Oe,t=6*Te,n=10*Te,r=new Oe,s=new Oe,o=new Oe;e.add(r,s,o);for(let l=1;l<10;l++)Gr(r,6,xt(-t/2,0,-n/2+l*Te),Oi,Si,Bi,zi);for(let l=1;l<6;l++)Gr(s,10,xt(-t/2+l*Te,0,-n/2),Bi,Si.clone().negate(),Oi,nn);for(let l of[-n/2+Te,0,n/2-Te])e_(o,xt(-t/2+Te,.16,l),Si);let a=new Cr(new mt().setFromPoints([xt(-t/2,0,-n/2-.12),xt(t/2,0,-n/2-.12)]),new tn({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new ot().makeBasis(Si,Bi,Oi)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let c=i==="wall"?xt(1.5,1,2.6):xt(1.4,1.7,1.9);return{root:e,arrows:o,direction:c,annotation:i==="wall"?"Upright slots → towards the outside":i==="roof"?"Teal: shorter roof direction · slots towards the covering":"Teal: shorter load-bearing direction · slots face up",spread(l){s.position.y=l*.65}}}function jf(i,e,{crossing:t=[],plane:n=1,direction:r=xt(1.1,1.8,1.4),size:s=1.05}={}){let o=new Oe,a=new Oe,c=new Oe;o.add(a,c);let l=Wr(),d=(f,h)=>f.surface===h.surface&&f.axis===h.axis&&f.index===h.index;for(let f of l.boards){let h=i.findIndex(_=>d(f,_)),u=t.some(_=>d(f,_));if(h<0&&!u||f.bounds.distanceToPoint(e)>.5)continue;let m=jo(f.mesh.geometry.clone(),u?qf:i[h].material||(h===0?nn:zi));m.position.copy(f.mesh.position).sub(e),m.userData.boardId=f.id,m.userData.base=m.position.clone(),m.userData.sign=f.bounds.getCenter(xt()).getComponent(n)<e.getComponent(n)?-1:1,(u?c:a).add(m)}return c.visible=!1,{root:o,direction:r,focus:new Gt(xt(-s/2,-s/2,-s/2),xt(s/2,s/2,s/2)),spread(f){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*f*.2);c.visible=!1},crossing(f){c.visible=f}}}function n_(i="outside"){let e=new Oe,t=new Oe,n=new Oe;e.add(t,n);let r=zi.clone(),s=new Rt({color:"#dfd9c5",roughness:1}),o=(h,u,m,_)=>{let g=jo(new qt(...u),_);return g.position.set(...m),h.add(g),g},a=i==="section",c=6*Te,l=c/2,d=[];if(a){for(let h of[-Ve/2,Ve/2])o(e,[Ve,.12,bt],[h,0,0],nn);o(t,[Nn.width,.12,Nn.thickness],[0,0,wc+Nn.thickness/2],r)}else{let h=[];for(let u=1;u<6;u++)Gr(e,6,xt(-l+u*Te,-l,0),Si,Bi,Oi,nn),Gr(e,6,xt(-l,-l+u*Te,0),Oi,Bi.clone().negate(),Si,nn),h.push({axis:1,index:u,center:-l+u*Te,intervals:[[-l,l]]},{axis:0,index:u,center:-l+u*Te,intervals:[[-l,l]]});for(let u=0;u<6;u++)for(let m=0;m<6;m++){if(u===2&&m===3)continue;let _=-l+u*Te+(u?Ve:.001),g=-l+(u+1)*Te-(u===5?.001:Ve),p=-l+m*Te+(m?Ve:.001),S=-l+(m+1)*Te-(m===5?.001:Ve);o(e,[g-_-.002,S-p-.002,bt-.002],[(_+g)/2,(p+S)/2,0],s)}d=Wf(h);for(let u of d){let m=u.side==="exterior";o(m?t:n,[u.u1-u.u0,u.v1-u.v0,Nn.thickness],[(u.u0+u.u1)/2,(u.v0+u.v1)/2,(m?1:-1)*(wc+Nn.thickness/2)],r)}}let f=0;return{root:e,direction:a?xt(.35,5,-1.3):i==="inside"?xt(-1,.7,-2.5):xt(1,.7,2.5),annotation:a?"T-section: 36 mm board pair + 60 × 18 mm batten":i==="inside"?"Inside: horizontal battens on horizontal ribs":"Outside: vertical battens on vertical ribs",spread(h){f=h,t.position.z=h*(a?.09:.55),n.position.z=-h*.55},getBattenState:()=>({mode:i,spread:f,stock:Nn,exterior:a?1:d.filter(h=>h.side==="exterior").length,interior:d.filter(h=>h.side==="interior").length,sectionRibThickness:2*Ve})}}function Jf(i,e,t,n){if(i.scene==="battens")return n_(n);if(i.scene==="ridge")return Xf(t,{wood:nn,end:nn,roof:zi,edges:Ec});if(i.scene==="roof-wall")return Gf(t,{wood:nn,end:nn,roof:zi,edges:Ec});if(["slab","wall","roof"].includes(i.scene))return t_(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let o=new Oe,a=jo(Tc(e?.modules||6,e||{}),zi);return a.position.x=-3*Te,o.add(a),{root:o,direction:xt(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Comb board · slots reach half the board height"}}if(i.scene==="continuity"){let o=new Oe;return Gr(o,12,xt(-6*Te,0,0),Oi,Si,Bi,nn),o.children.forEach(a=>a.material=a.userData.ply?zi:nn),{root:o,direction:xt(.6,.85,3),spread(a){o.children.forEach(c=>c.position.z=(c.userData.ply-.5)*(Ve+a*.42))},annotation:"Two layers · joints offset by 2 modules"}}if(i.scene==="cross"){let o=new Oe,a=new Oe,c=new Oe;return o.add(a,c),Gr(a,4,xt(-2*Te,0,0),Oi,Si,Bi,zi),Gr(c,4,xt(0,0,-2*Te),Bi,Si.clone().negate(),Oi,nn),{root:o,direction:xt(1.4,1.6,2),spread(l){c.position.y=l*.65},annotation:"Slots in the two rib sets face opposite directions"}}let r=Wr(),s=r.dimensions;if(i.scene==="joint"){let o=r.joints.find(a=>a.id===i.joint);return jf(o.members,xt(...o.position),{crossing:o.crossingMembers||[],plane:o.planeAxis,direction:xt(...o.viewDirection)})}if(i.scene==="corner")return jf([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],xt(s.halfWidth-wc,3*Te,s.halfDepth-wc),{plane:1,direction:xt(1.4,2,1.6)});throw new Error("Unknown handbook scene: "+i.scene)}var i_={rear:"External wall facing the terrace",front:"External wall facing the entrance",left:"Left external wall",right:"Right external wall","bedroom-right":"Internal wall","bedroom-front":"Bedroom and bathroom partition","roof-left":"Left roof slope","roof-right":"Right roof slope"};function Xo(i){let e=1/0,t=-1/0,n=new D(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=xt().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Connector board":i.trim?"End board":i.custom?"Board trimmed for an opening or slope":"Comb board",surface:i_[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function $f(i,e){let t=Wr();if(i==="wall")return Hf(t,e,Xo);let n=new Oe,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=Go(s,!1);s.forEach(d=>d.dispose()),n.add(jo(o,nn));let a=new lt(new mt,Yf);n.add(a);let c,l=d=>{c=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(Xo(d))};return l(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:xt(1.4,1,1.5),annotation:"Select a component to see its ID",selectAt(d){let f=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(u=>({b:h,d:u.distance}))).sort((h,u)=>h.d-u.d);f[0]&&l(f[0].b)},next(){l(r[(r.indexOf(c)+1)%r.length])},getSelected(){return Xo(c)}}}var zs={model:"Combstruct 30",totalBoards:1424,material:{lengthM:2147.9671780261037,fullBoardLengthM:2.5,fullBoardEquivalents:859.1868712104415,fullBoards:860,sheets:172},geometrySha256:"8e03105a7b941f5381a960ce2271d630247b213b73659c4d41fa97ed3dc36ad6",toleranceM:5e-5,families:[{id:"standard",name:"Standard board",count:953,lengths:{"3":95,"4":242,"5":437,"6":179},sample:"board-147"},{id:"ending",name:"End board",count:471,lengths:{"3":106,"4":270,"5":77,"6":18},sample:"board-1244"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-368",null],["board-373",null],["board-378",null],["board-644",null],["board-650",null],["board-1084",null],["board-1103",null],["board-323",null],["board-329",null],["board-335",null],["board-765",null],["board-770",null],["board-775",null],["board-612",null],["board-668",null],["board-318",null],["board-342",null],["board-349",null],["board-356",null],["board-363",null],["board-383",null],["board-468",null],["board-473",null],["board-478",null],["board-483",null],["board-488",null],["board-493",null],["board-498",null],["board-503",null],["board-508",null],["board-513",null],["board-518",null],["board-523",null],["board-528",null],["board-533",null],["board-607",null],["board-618",null],["board-624",null],["board-631",null],["board-638",null],["board-656",null],["board-662",null],["board-673",null],["board-750",null],["board-755",null],["board-760",null],["board-780",null],["board-785",null],["board-790",null],["board-795",null],["board-800",null],["board-805",null],["board-810",null],["board-815",null],["board-1065",null],["board-1069",null],["board-1073",null],["board-1077",null],["board-1081",null],["board-1088",null],["board-1092",null],["board-1096",null],["board-1100",null],["board-1107",null],["board-1111",null],["board-1115",null],["board-1143",null],["board-1147",null],["board-1151",null],["board-1155",null],["board-1159",null],["board-320","board-37"],["board-326","board-37"],["board-332","board-37"],["board-762","board-67"],["board-767","board-74"],["board-772","board-81"],["board-609","board-156"],["board-665","board-240"],["board-315","board-37"],["board-338","board-38"],["board-345","board-38"],["board-352","board-38"],["board-359","board-38"],["board-380","board-39"],["board-465","board-47"],["board-470","board-54"],["board-475","board-61"],["board-480","board-68"],["board-485","board-75"],["board-490","board-82"],["board-495","board-89"],["board-500","board-96"],["board-505","board-103"],["board-510","board-110"],["board-515","board-117"],["board-520","board-124"],["board-525","board-131"],["board-530","board-138"],["board-604","board-146"],["board-615","board-166"],["board-621","board-176"],["board-627","board-186"],["board-634","board-195"],["board-653","board-222"],["board-659","board-231"],["board-670","board-249"],["board-747","board-46"],["board-752","board-53"],["board-757","board-60"],["board-777","board-88"],["board-782","board-95"],["board-787","board-102"],["board-792","board-109"],["board-797","board-116"],["board-802","board-123"],["board-807","board-130"],["board-812","board-137"],["board-1063","board-44"],["board-1067","board-51"],["board-1071","board-58"],["board-1075","board-65"],["board-1079","board-72"],["board-1086","board-86"],["board-1090","board-93"],["board-1094","board-100"],["board-1098","board-107"],["board-1105","board-121"],["board-1109","board-128"],["board-1113","board-135"],["board-1141","board-144"],["board-1145","board-154"],["board-1149","board-164"],["board-1153","board-174"],["board-1157","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-380"],["board-409","board-258"],["board-410","board-409"],["board-411","board-500"],["board-412","board-411"],["board-540","board-412"],["board-541","board-540"],["board-542","board-653"],["board-699","board-261"],["board-700","board-699"],["board-701","board-700"],["board-992","board-259"],["board-993","board-992"],["board-994","board-1086"],["board-995","board-1090"],["board-996","board-541"],["board-1119","board-410"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-413","board-258"],["board-414","board-410"],["board-415","board-411"],["board-535","board-412"],["board-536","board-535"],["board-537","board-541"],["board-538","board-542"],["board-539","board-538"],["board-702","board-257"],["board-703","board-700"],["board-704","board-701"],["board-997","board-255"],["board-998","board-993"],["board-999","board-994"],["board-1000","board-995"],["board-1001","board-996"],["board-1117","board-410"],["board-1118","board-1117"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-380"],["board-416","board-266"],["board-417","board-416"],["board-418","board-500"],["board-419","board-418"],["board-548","board-419"],["board-549","board-548"],["board-550","board-653"],["board-705","board-269"],["board-706","board-705"],["board-707","board-706"],["board-1002","board-267"],["board-1003","board-1002"],["board-1004","board-1086"],["board-1005","board-1090"],["board-1006","board-549"],["board-1122","board-417"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-420","board-266"],["board-421","board-417"],["board-422","board-418"],["board-543","board-419"],["board-544","board-543"],["board-545","board-549"],["board-546","board-550"],["board-547","board-546"],["board-708","board-265"],["board-709","board-706"],["board-710","board-707"],["board-1007","board-263"],["board-1008","board-1003"],["board-1009","board-1004"],["board-1010","board-1005"],["board-1011","board-1006"],["board-1120","board-417"],["board-1121","board-1120"],["board-274","board-315"],["board-275","board-338"],["board-276","board-275"],["board-277","board-380"],["board-423","board-274"],["board-424","board-423"],["board-425","board-500"],["board-426","board-425"],["board-556","board-426"],["board-557","board-556"],["board-558","board-653"],["board-711","board-277"],["board-712","board-777"],["board-713","board-712"],["board-1012","board-275"],["board-1013","board-1012"],["board-1014","board-1086"],["board-1015","board-1090"],["board-1016","board-557"],["board-1125","board-424"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-427","board-274"],["board-428","board-424"],["board-429","board-425"],["board-551","board-426"],["board-552","board-551"],["board-553","board-557"],["board-554","board-558"],["board-555","board-554"],["board-714","board-273"],["board-715","board-712"],["board-716","board-713"],["board-1017","board-271"],["board-1018","board-1013"],["board-1019","board-1014"],["board-1020","board-1015"],["board-1021","board-1016"],["board-1123","board-424"],["board-1124","board-1123"],["board-282","board-315"],["board-283","board-338"],["board-284","board-283"],["board-285","board-380"],["board-430","board-282"],["board-431","board-430"],["board-432","board-500"],["board-433","board-432"],["board-566","board-433"],["board-567","board-615"],["board-568","board-567"],["board-569","board-653"],["board-570","board-670"],["board-717","board-285"],["board-718","board-777"],["board-719","board-718"],["board-1022","board-283"],["board-1023","board-1022"],["board-1024","board-1086"],["board-1025","board-1090"],["board-1026","board-568"],["board-1128","board-431"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-434","board-282"],["board-435","board-431"],["board-436","board-432"],["board-559","board-433"],["board-560","board-567"],["board-561","board-560"],["board-562","board-568"],["board-563","board-569"],["board-564","board-563"],["board-565","board-570"],["board-720","board-281"],["board-721","board-718"],["board-722","board-719"],["board-1027","board-279"],["board-1028","board-1023"],["board-1029","board-1024"],["board-1030","board-1025"],["board-1031","board-1026"],["board-1126","board-431"],["board-1127","board-1126"],["board-316","board-278"],["board-339","board-279"],["board-346","board-280"],["board-353","board-280"],["board-360","board-280"],["board-381","board-281"],["board-466","board-430"],["board-471","board-430"],["board-476","board-430"],["board-481","board-430"],["board-486","board-431"],["board-491","board-431"],["board-496","board-431"],["board-501","board-432"],["board-506","board-432"],["board-511","board-432"],["board-516","board-432"],["board-521","board-433"],["board-526","board-433"],["board-531","board-433"],["board-605","board-559"],["board-616","board-560"],["board-622","board-561"],["board-628","board-561"],["board-635","board-562"],["board-654","board-563"],["board-660","board-564"],["board-671","board-565"],["board-748","board-717"],["board-753","board-717"],["board-758","board-717"],["board-778","board-718"],["board-783","board-718"],["board-788","board-718"],["board-793","board-718"],["board-798","board-719"],["board-803","board-719"],["board-808","board-719"],["board-813","board-719"],["board-1064","board-1022"],["board-1068","board-1022"],["board-1072","board-1022"],["board-1076","board-1022"],["board-1080","board-1023"],["board-1087","board-1024"],["board-1091","board-1025"],["board-1095","board-1025"],["board-1099","board-1025"],["board-1106","board-1026"],["board-1110","board-1026"],["board-1114","board-1026"],["board-1142","board-1126"],["board-1146","board-1126"],["board-1150","board-1126"],["board-1154","board-1127"],["board-1158","board-1127"],["board-290","board-316"],["board-291","board-339"],["board-292","board-291"],["board-293","board-381"],["board-437","board-290"],["board-438","board-437"],["board-439","board-501"],["board-440","board-439"],["board-578","board-440"],["board-579","board-616"],["board-580","board-579"],["board-581","board-654"],["board-582","board-671"],["board-723","board-293"],["board-724","board-778"],["board-725","board-724"],["board-1032","board-291"],["board-1033","board-1032"],["board-1034","board-1087"],["board-1035","board-1091"],["board-1036","board-580"],["board-1131","board-438"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-441","board-290"],["board-442","board-438"],["board-443","board-439"],["board-571","board-440"],["board-572","board-579"],["board-573","board-572"],["board-574","board-580"],["board-575","board-581"],["board-576","board-575"],["board-577","board-582"],["board-726","board-289"],["board-727","board-724"],["board-728","board-725"],["board-1037","board-287"],["board-1038","board-1033"],["board-1039","board-1034"],["board-1040","board-1035"],["board-1041","board-1036"],["board-1129","board-438"],["board-1130","board-1129"],["board-1066","board-1032"],["board-1070","board-1032"],["board-1074","board-1032"],["board-1078","board-1032"],["board-1082","board-1033"],["board-1089","board-1034"],["board-1093","board-1035"],["board-1097","board-1035"],["board-1101","board-1035"],["board-1108","board-1036"],["board-1112","board-1036"],["board-1116","board-1036"],["board-1144","board-1129"],["board-1148","board-1129"],["board-1152","board-1129"],["board-1156","board-1130"],["board-1160","board-1130"],["board-384","board-289"],["board-674","board-577"],["board-319","board-286"],["board-608","board-571"],["board-469","board-437"],["board-474","board-437"],["board-479","board-437"],["board-484","board-437"],["board-489","board-438"],["board-494","board-438"],["board-499","board-438"],["board-504","board-439"],["board-509","board-439"],["board-514","board-439"],["board-519","board-439"],["board-524","board-440"],["board-529","board-440"],["board-534","board-440"],["board-751","board-723"],["board-756","board-723"],["board-761","board-723"],["board-781","board-724"],["board-786","board-724"],["board-791","board-724"],["board-796","board-724"],["board-801","board-725"],["board-806","board-725"],["board-811","board-725"],["board-816","board-725"],["board-343","board-287"],["board-350","board-288"],["board-357","board-288"],["board-364","board-288"],["board-619","board-572"],["board-625","board-573"],["board-632","board-573"],["board-639","board-574"],["board-657","board-575"],["board-663","board-576"],["board-298","board-316"],["board-321","board-298"],["board-327","board-298"],["board-333","board-298"],["board-299","board-298"],["board-300","board-299"],["board-366","board-300"],["board-371","board-300"],["board-376","board-300"],["board-444","board-298"],["board-445","board-444"],["board-446","board-501"],["board-447","board-446"],["board-587","board-447"],["board-610","board-587"],["board-588","board-587"],["board-641","board-588"],["board-647","board-588"],["board-589","board-588"],["board-666","board-589"],["board-729","board-300"],["board-763","board-729"],["board-768","board-729"],["board-730","board-729"],["board-773","board-730"],["board-731","board-730"],["board-1042","board-299"],["board-1043","board-1042"],["board-1083","board-1043"],["board-1044","board-1091"],["board-1102","board-1044"],["board-1045","board-1044"],["board-1134","board-445"],["board-1085","board-1043"],["board-1104","board-1044"],["board-766","board-729"],["board-771","board-729"],["board-776","board-730"],["board-379","board-300"],["board-669","board-589"],["board-324","board-298"],["board-330","board-298"],["board-336","board-298"],["board-369","board-300"],["board-374","board-300"],["board-613","board-587"],["board-645","board-588"],["board-651","board-588"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-448","board-298"],["board-449","board-445"],["board-450","board-446"],["board-583","board-447"],["board-584","board-583"],["board-585","board-588"],["board-586","board-585"],["board-732","board-297"],["board-733","board-730"],["board-734","board-731"],["board-1046","board-295"],["board-1047","board-1043"],["board-1048","board-1044"],["board-1132","board-445"],["board-1133","board-1132"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-451","board-305"],["board-452","board-451"],["board-453","board-501"],["board-454","board-453"],["board-594","board-454"],["board-595","board-594"],["board-596","board-595"],["board-735","board-307"],["board-736","board-735"],["board-737","board-736"],["board-1049","board-306"],["board-1050","board-1049"],["board-1051","board-1091"],["board-1052","board-1051"],["board-1137","board-452"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-455","board-305"],["board-456","board-452"],["board-457","board-453"],["board-590","board-454"],["board-591","board-590"],["board-592","board-595"],["board-593","board-592"],["board-738","board-304"],["board-739","board-736"],["board-740","board-737"],["board-1053","board-302"],["board-1054","board-1050"],["board-1055","board-1051"],["board-1135","board-452"],["board-1136","board-1135"],["board-312","board-316"],["board-313","board-312"],["board-314","board-313"],["board-458","board-312"],["board-459","board-458"],["board-460","board-501"],["board-461","board-460"],["board-601","board-461"],["board-602","board-601"],["board-603","board-602"],["board-741","board-314"],["board-742","board-741"],["board-743","board-742"],["board-1056","board-313"],["board-1057","board-1056"],["board-1058","board-1091"],["board-1059","board-1058"],["board-1140","board-459"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-462","board-312"],["board-463","board-459"],["board-464","board-460"],["board-597","board-461"],["board-598","board-597"],["board-599","board-602"],["board-600","board-599"],["board-744","board-311"],["board-745","board-742"],["board-746","board-743"],["board-1060","board-309"],["board-1061","board-1057"],["board-1062","board-1058"],["board-1138","board-459"],["board-1139","board-1138"],["board-467","board-469"],["board-472","board-474"],["board-477","board-479"],["board-482","board-484"],["board-487","board-489"],["board-492","board-494"],["board-497","board-499"],["board-502","board-504"],["board-507","board-509"],["board-512","board-514"],["board-517","board-519"],["board-522","board-524"],["board-527","board-529"],["board-532","board-534"],["board-749","board-751"],["board-754","board-756"],["board-759","board-761"],["board-764","board-766"],["board-769","board-771"],["board-774","board-776"],["board-779","board-781"],["board-784","board-786"],["board-789","board-791"],["board-794","board-796"],["board-799","board-801"],["board-804","board-806"],["board-809","board-811"],["board-814","board-816"],["board-317","board-319"],["board-606","board-608"],["board-382","board-384"],["board-672","board-674"],["board-322","board-324"],["board-611","board-613"],["board-377","board-379"],["board-667","board-669"],["board-328","board-330"],["board-617","board-619"],["board-372","board-374"],["board-661","board-663"],["board-334","board-336"],["board-623","board-625"],["board-367","board-369"],["board-655","board-657"],["board-340","board-343"],["board-347","board-350"],["board-354","board-357"],["board-361","board-364"],["board-629","board-632"],["board-636","board-639"],["board-642","board-645"],["board-648","board-651"],["board-325","board-324"],["board-614","board-613"],["board-375","board-372"],["board-664","board-661"],["board-331","board-328"],["board-620","board-617"],["board-370","board-367"],["board-658","board-655"],["board-337","board-334"],["board-626","board-623"],["board-365","board-361"],["board-652","board-648"],["board-344","board-340"],["board-633","board-629"],["board-358","board-354"],["board-646","board-642"],["board-351","board-347"],["board-640","board-636"],["board-341","board-340"],["board-630","board-629"],["board-362","board-361"],["board-649","board-648"],["board-348","board-347"],["board-637","board-636"],["board-355","board-354"],["board-643","board-642"],["board-817","board-462"],["board-818","board-817"],["board-819","board-1060"],["board-820","board-819"],["board-821","board-462"],["board-822","board-818"],["board-823","board-819"],["board-824","board-462"],["board-825","board-824"],["board-826","board-1060"],["board-827","board-826"],["board-828","board-462"],["board-829","board-825"],["board-830","board-826"],["board-831","board-462"],["board-832","board-831"],["board-833","board-1060"],["board-834","board-833"],["board-835","board-462"],["board-836","board-832"],["board-837","board-833"],["board-838","board-462"],["board-839","board-838"],["board-840","board-1060"],["board-841","board-840"],["board-842","board-462"],["board-843","board-839"],["board-844","board-840"],["board-845","board-463"],["board-846","board-845"],["board-847","board-1061"],["board-848","board-847"],["board-849","board-462"],["board-850","board-846"],["board-851","board-847"],["board-852","board-463"],["board-853","board-852"],["board-854","board-1061"],["board-855","board-854"],["board-856","board-463"],["board-857","board-853"],["board-858","board-854"],["board-859","board-463"],["board-860","board-859"],["board-861","board-1061"],["board-862","board-861"],["board-863","board-463"],["board-864","board-860"],["board-865","board-861"],["board-866","board-463"],["board-867","board-866"],["board-868","board-1061"],["board-869","board-868"],["board-870","board-463"],["board-871","board-867"],["board-872","board-868"],["board-873","board-463"],["board-874","board-873"],["board-875","board-1061"],["board-876","board-875"],["board-877","board-463"],["board-878","board-874"],["board-879","board-875"],["board-880","board-464"],["board-881","board-880"],["board-882","board-1062"],["board-883","board-882"],["board-884","board-463"],["board-885","board-881"],["board-886","board-882"],["board-887","board-464"],["board-888","board-887"],["board-889","board-1062"],["board-890","board-889"],["board-891","board-464"],["board-892","board-888"],["board-893","board-889"],["board-894","board-464"],["board-895","board-894"],["board-896","board-1062"],["board-897","board-896"],["board-898","board-464"],["board-899","board-895"],["board-900","board-896"],["board-901","board-464"],["board-902","board-901"],["board-903","board-1062"],["board-904","board-903"],["board-905","board-464"],["board-906","board-902"],["board-907","board-903"],["board-908","board-464"],["board-909","board-908"],["board-910","board-1062"],["board-911","board-910"],["board-912","board-464"],["board-913","board-909"],["board-914","board-910"],["board-915","board-308"],["board-916","board-838"],["board-917","board-866"],["board-918","board-887"],["board-919","board-308"],["board-920","board-845"],["board-921","board-880"],["board-922","board-308"],["board-923","board-838"],["board-924","board-866"],["board-925","board-887"],["board-926","board-308"],["board-927","board-845"],["board-928","board-880"],["board-929","board-309"],["board-930","board-838"],["board-931","board-866"],["board-932","board-887"],["board-933","board-308"],["board-934","board-845"],["board-935","board-880"],["board-936","board-309"],["board-937","board-839"],["board-938","board-867"],["board-939","board-888"],["board-940","board-309"],["board-941","board-846"],["board-942","board-881"],["board-943","board-309"],["board-944","board-839"],["board-945","board-867"],["board-946","board-888"],["board-947","board-309"],["board-948","board-846"],["board-949","board-881"],["board-950","board-310"],["board-951","board-847"],["board-952","board-882"],["board-953","board-310"],["board-954","board-854"],["board-955","board-889"],["board-956","board-310"],["board-957","board-847"],["board-958","board-882"],["board-959","board-310"],["board-960","board-854"],["board-961","board-889"],["board-962","board-310"],["board-963","board-847"],["board-964","board-882"],["board-965","board-310"],["board-966","board-854"],["board-967","board-889"],["board-968","board-311"],["board-969","board-847"],["board-970","board-882"],["board-971","board-310"],["board-972","board-854"],["board-973","board-889"],["board-974","board-311"],["board-975","board-848"],["board-976","board-883"],["board-977","board-311"],["board-978","board-855"],["board-979","board-890"],["board-980","board-311"],["board-981","board-848"],["board-982","board-883"],["board-983","board-311"],["board-984","board-855"],["board-985","board-890"],["board-986","board-311"],["board-987","board-848"],["board-988","board-883"],["board-989","board-311"],["board-990","board-855"],["board-991","board-890"],["board-385","board-317"],["board-386","board-340"],["board-387","board-367"],["board-675","board-606"],["board-676","board-629"],["board-677","board-655"],["board-388","board-317"],["board-389","board-334"],["board-390","board-361"],["board-678","board-606"],["board-679","board-623"],["board-680","board-648"],["board-391","board-322"],["board-392","board-340"],["board-393","board-367"],["board-681","board-611"],["board-682","board-629"],["board-683","board-655"],["board-394","board-324"],["board-395","board-334"],["board-396","board-361"],["board-684","board-613"],["board-685","board-623"],["board-686","board-648"],["board-397","board-334"],["board-398","board-340"],["board-399","board-367"],["board-687","board-623"],["board-688","board-629"],["board-689","board-655"],["board-400","board-334"],["board-401","board-334"],["board-402","board-361"],["board-690","board-623"],["board-691","board-623"],["board-692","board-648"],["board-403","board-340"],["board-404","board-340"],["board-693","board-629"],["board-694","board-629"],["board-405","board-340"],["board-406","board-361"],["board-695","board-629"],["board-696","board-648"],["board-1169","board-469"],["board-1174","board-474"],["board-1179","board-479"],["board-1184","board-484"],["board-1189","board-489"],["board-1194","board-494"],["board-1199","board-499"],["board-1204","board-504"],["board-1209","board-509"],["board-1214","board-514"],["board-1219","board-519"],["board-1224","board-524"],["board-1229","board-529"],["board-1234","board-534"],["board-1299","board-751"],["board-1304","board-756"],["board-1309","board-761"],["board-1314","board-766"],["board-1319","board-771"],["board-1324","board-776"],["board-1329","board-781"],["board-1334","board-786"],["board-1339","board-791"],["board-1344","board-796"],["board-1349","board-801"],["board-1354","board-806"],["board-1359","board-811"],["board-1364","board-816"],["board-1166","board-469"],["board-1171","board-474"],["board-1176","board-479"],["board-1181","board-484"],["board-1186","board-489"],["board-1191","board-494"],["board-1196","board-499"],["board-1201","board-504"],["board-1206","board-509"],["board-1211","board-514"],["board-1216","board-519"],["board-1221","board-524"],["board-1226","board-529"],["board-1231","board-534"],["board-1236","board-608"],["board-1294","board-387"],["board-1164","board-319"],["board-1162","board-1164"],["board-1238","board-1236"],["board-1296","board-1294"],["board-1301","board-823"],["board-1306","board-830"],["board-1311","board-837"],["board-1316","board-844"],["board-1321","board-851"],["board-1326","board-858"],["board-1331","board-865"],["board-1336","board-872"],["board-1341","board-879"],["board-1346","board-886"],["board-1351","board-893"],["board-1356","board-900"],["board-1361","board-907"],["board-1366","board-914"],["board-1370","board-661"],["board-1368","board-1370"],["board-1290","board-1162"],["board-1291","board-1181"],["board-1292","board-1211"],["board-1422","board-1294"],["board-1423","board-1314"],["board-1424","board-1344"],["board-1287","board-1162"],["board-1288","board-1186"],["board-1289","board-1216"],["board-1419","board-1294"],["board-1420","board-1319"],["board-1421","board-1349"],["board-1284","board-1162"],["board-1285","board-484"],["board-1286","board-514"],["board-1416","board-1294"],["board-1417","board-766"],["board-1418","board-796"],["board-1281","board-1162"],["board-1282","board-489"],["board-1283","board-519"],["board-1413","board-1294"],["board-1414","board-771"],["board-1415","board-801"],["board-1298","board-749"],["board-1303","board-754"],["board-1308","board-759"],["board-1313","board-764"],["board-1318","board-769"],["board-1323","board-774"],["board-1328","board-779"],["board-1333","board-784"],["board-1338","board-789"],["board-1343","board-794"],["board-1348","board-799"],["board-1353","board-804"],["board-1358","board-809"],["board-1363","board-814"],["board-1168","board-467"],["board-1173","board-472"],["board-1178","board-477"],["board-1183","board-482"],["board-1188","board-487"],["board-1193","board-492"],["board-1198","board-497"],["board-1203","board-502"],["board-1208","board-507"],["board-1213","board-512"],["board-1218","board-517"],["board-1223","board-522"],["board-1228","board-527"],["board-1233","board-532"],["board-1278","board-317"],["board-1279","board-1181"],["board-1280","board-1211"],["board-1410","board-384"],["board-1411","board-1313"],["board-1412","board-1343"],["board-1275","board-317"],["board-1276","board-1186"],["board-1277","board-1216"],["board-1407","board-382"],["board-1408","board-1318"],["board-1409","board-1348"],["board-1272","board-1162"],["board-1273","board-1181"],["board-1274","board-1211"],["board-1404","board-1294"],["board-1405","board-1313"],["board-1406","board-1343"],["board-1269","board-1162"],["board-1270","board-1186"],["board-1271","board-1216"],["board-1401","board-1294"],["board-1402","board-1318"],["board-1403","board-1348"],["board-1266","board-1162"],["board-1267","board-1181"],["board-1268","board-1211"],["board-1398","board-1294"],["board-1399","board-1313"],["board-1400","board-1343"],["board-1263","board-1162"],["board-1264","board-1186"],["board-1265","board-1216"],["board-1395","board-1294"],["board-1396","board-1318"],["board-1397","board-1348"],["board-1161","board-1162"],["board-1165","board-1166"],["board-1170","board-1171"],["board-1175","board-1176"],["board-1180","board-1181"],["board-1185","board-1186"],["board-1190","board-1191"],["board-1195","board-1196"],["board-1200","board-1201"],["board-1205","board-1206"],["board-1210","board-1211"],["board-1215","board-1216"],["board-1220","board-1221"],["board-1225","board-1226"],["board-1230","board-1231"],["board-1235","board-617"],["board-697","board-1235"],["board-698","board-697"],["board-1293","board-1161"],["board-407","board-1293"],["board-408","board-407"],["board-1297","board-1165"],["board-1302","board-1170"],["board-1307","board-1175"],["board-1312","board-1180"],["board-1317","board-1185"],["board-1322","board-1190"],["board-1327","board-1195"],["board-1332","board-1200"],["board-1337","board-1205"],["board-1342","board-1210"],["board-1347","board-1215"],["board-1352","board-1220"],["board-1357","board-1225"],["board-1362","board-1230"],["board-1367","board-1235"],["board-1260","board-397"],["board-1261","board-1180"],["board-1262","board-1210"],["board-1392","board-399"],["board-1393","board-1312"],["board-1394","board-1342"],["board-1257","board-400"],["board-1258","board-1185"],["board-1259","board-1215"],["board-1389","board-402"],["board-1390","board-1317"],["board-1391","board-1347"],["board-1163","board-334"],["board-1167","board-1165"],["board-1172","board-1170"],["board-1177","board-1175"],["board-1182","board-1180"],["board-1187","board-1185"],["board-1192","board-1190"],["board-1197","board-1195"],["board-1202","board-1200"],["board-1207","board-1205"],["board-1212","board-1210"],["board-1217","board-1215"],["board-1222","board-1220"],["board-1227","board-1225"],["board-1232","board-1230"],["board-1237","board-1235"],["board-1295","board-1161"],["board-1300","board-1165"],["board-1305","board-1170"],["board-1310","board-1175"],["board-1315","board-1180"],["board-1320","board-1185"],["board-1325","board-1190"],["board-1330","board-1195"],["board-1335","board-1200"],["board-1340","board-1205"],["board-1345","board-1210"],["board-1350","board-1215"],["board-1355","board-1220"],["board-1360","board-1225"],["board-1365","board-1230"],["board-1369","board-694"],["board-1254","board-1161"],["board-1255","board-1180"],["board-1256","board-1210"],["board-1386","board-1293"],["board-1387","board-1312"],["board-1388","board-1342"],["board-1251","board-1161"],["board-1252","board-1185"],["board-1253","board-1215"],["board-1383","board-1293"],["board-1384","board-1317"],["board-1385","board-1347"],["board-1248","board-1161"],["board-1249","board-1180"],["board-1250","board-1210"],["board-1380","board-1293"],["board-1381","board-1312"],["board-1382","board-1342"],["board-1245","board-1161"],["board-1246","board-1185"],["board-1247","board-1215"],["board-1377","board-1293"],["board-1378","board-1317"],["board-1379","board-1347"],["board-1242","board-1161"],["board-1243","board-1180"],["board-1244","board-1210"],["board-1374","board-1293"],["board-1375","board-1312"],["board-1376","board-1342"],["board-1239","board-1161"],["board-1240","board-1185"],["board-1241","board-1215"],["board-1371","board-1293"],["board-1372","board-1317"],["board-1373","board-1347"]]};var qo={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"8e03105a7b941f5381a960ce2271d630247b213b73659c4d41fa97ed3dc36ad6",totalBoards:1363,installedPieces:1424,material:{lengthM:2430.19333333,fullBoardEquivalents:972.077333332,fullBoards:973,sheets:195},families:[{id:"standard",name:"Standard board",count:901,variants:[{id:"standard-1",count:165,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:406,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:71,modules:4,ending:!1,lengthM:1.6846666666666668,preview:{stockId:"stock-311",positions:[-.842333,-.12,-.009,-.842333,0,-.009,-.824333,0,-.009,.842333,0,-.009,.842333,-.12,-.009,.425667,.12,-.009,.806333,.12,-.009,.806333,0,-.009,.009,.12,-.009,.389667,.12,-.009,.389667,0,-.009,-.407667,.12,-.009,-.027,.12,-.009,-.027,0,-.009,-.824333,.12,-.009,-.443667,.12,-.009,-.443667,0,-.009,.425667,0,-.009,.009,0,-.009,-.407667,0,-.009,-.824333,0,.009,-.842333,0,.009,-.842333,-.12,.009,.842333,-.12,.009,.842333,0,.009,.806333,0,.009,.806333,.12,.009,.425667,.12,.009,.389667,0,.009,.389667,.12,.009,.009,.12,.009,-.027,0,.009,-.027,.12,.009,-.407667,.12,.009,-.443667,0,.009,-.443667,.12,.009,-.824333,.12,.009,.425667,0,.009,.009,0,.009,-.407667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6846666666666668}},{id:"standard-4",count:169,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-5",count:82,modules:3,ending:!1,lengthM:1.268,preview:{stockId:"stock-45",positions:[-.634,-.12,-.009,-.634,0,-.009,-.598,0,-.009,.634,0,-.009,.634,-.12,-.009,.235333,.12,-.009,.616,.12,-.009,.616,0,-.009,-.181333,.12,-.009,.199333,.12,-.009,.199333,0,-.009,-.598,.12,-.009,-.217333,.12,-.009,-.217333,0,-.009,.235333,0,-.009,-.181333,0,-.009,-.598,0,.009,-.634,0,.009,-.634,-.12,.009,.634,-.12,.009,.634,0,.009,.616,0,.009,.616,.12,.009,.235333,.12,.009,.199333,0,.009,.199333,.12,.009,-.181333,.12,.009,-.217333,0,.009,-.217333,.12,.009,-.598,.12,.009,.235333,0,.009,-.181333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.268}},{id:"standard-6",count:8,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-336",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"End board",count:462,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1197",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:26,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-385",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:51,modules:5,ending:!0,lengthM:1.8253333333333335,preview:{stockId:"stock-3",positions:[-.912667,-.12,-.009,-.912667,0,-.009,-.894667,0,-.009,.772,.12,-.009,.912667,.12,-.009,.912667,-.12,-.009,.355333,.12,-.009,.736,.12,-.009,.736,0,-.009,-.061333,.12,-.009,.319333,.12,-.009,.319333,0,-.009,-.478,.12,-.009,-.097333,.12,-.009,-.097333,0,-.009,-.894667,.12,-.009,-.514,.12,-.009,-.514,0,-.009,.772,0,-.009,.355333,0,-.009,-.061333,0,-.009,-.478,0,-.009,-.894667,0,.009,-.912667,0,.009,-.912667,-.12,.009,.912667,-.12,.009,.912667,.12,.009,.772,.12,.009,.736,0,.009,.736,.12,.009,.355333,.12,.009,.319333,0,.009,.319333,.12,.009,-.061333,.12,.009,-.097333,0,.009,-.097333,.12,.009,-.478,.12,.009,-.514,0,.009,-.514,.12,.009,-.894667,.12,.009,.772,0,.009,.355333,0,.009,-.061333,0,.009,-.478,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8253333333333335}},{id:"ending-4",count:70,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-310",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-5",count:193,modules:4,ending:!0,lengthM:1.4086666666666667,preview:{stockId:"stock-1",positions:[-.704333,-.12,-.009,-.704333,.12,-.009,-.563667,.12,-.009,.704333,0,-.009,.704333,-.12,-.009,.305667,.12,-.009,.686333,.12,-.009,.686333,0,-.009,-.111,.12,-.009,.269667,.12,-.009,.269667,0,-.009,-.527667,.12,-.009,-.147,.12,-.009,-.147,0,-.009,-.563667,0,-.009,.305667,0,-.009,-.111,0,-.009,-.527667,0,-.009,-.563667,.12,.009,-.704333,.12,.009,-.704333,-.12,.009,.704333,-.12,.009,.704333,0,.009,.686333,0,.009,.686333,.12,.009,.305667,.12,.009,.269667,0,.009,.269667,.12,.009,-.111,.12,.009,-.147,0,.009,-.147,.12,.009,-.527667,.12,.009,-.563667,0,.009,.305667,0,.009,-.111,0,.009,-.527667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4086666666666667}},{id:"ending-6",count:104,modules:3,ending:!0,lengthM:.992,preview:{stockId:"stock-43",positions:[-.496,-.12,-.009,-.496,.12,-.009,-.355333,.12,-.009,.496,0,-.009,.496,-.12,-.009,.097333,.12,-.009,.478,.12,-.009,.478,0,-.009,-.319333,.12,-.009,.061333,.12,-.009,.061333,0,-.009,-.355333,0,-.009,.097333,0,-.009,-.319333,0,-.009,-.355333,.12,.009,-.496,.12,.009,-.496,-.12,.009,.496,-.12,.009,.496,0,.009,.478,0,.009,.478,.12,.009,.097333,.12,.009,.061333,0,.009,.061333,.12,.009,-.319333,.12,.009,-.355333,0,.009,.097333,0,.009,-.319333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:.992}}]}]};var Os=i=>`${i.toLocaleString("en-GB")} pcs`,fh=i=>`${i.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function Xr(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function Kf(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function Qf(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var ln=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function ep(i,e,t){let n=Xr(e);i.classList.add("parts-catalogue");let r=ln("div","parts-catalogue-heading");r.append(ln("h4",null,"Board types"),ln("span","parts-catalogue-total",Os(e.totalBoards)));let s=ln("p","parts-catalogue-lead","Boards in your kit. Choose a type and length."),o=ln("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Board types");let a=ln("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","Lengths and quantities");let c=ln("div","parts-variant-heading"),l=ln("h5"),d=ln("span");c.append(l,d),i.replaceChildren(c,a,r,s,o);function f(u,m=!0){n.variant=u;for(let _ of a.children)_.setAttribute("aria-pressed",String(_.dataset.partsVariant===u));t({...n},m)}function h(u,m=!0){n.family=u;let _=e.families.find(p=>p.id===u);for(let p of o.children)p.setAttribute("aria-pressed",String(p.dataset.partsFamily===u));l.textContent=_.name,d.textContent=`${Os(_.count)} total`;let g=_.variants.map(p=>{let S=ln("button","parts-variant");return S.type="button",S.dataset.partsVariant=p.id,S.append(ln("span",null,fh(p.lengthM)),ln("strong",null,Os(p.count))),S.addEventListener("click",()=>f(p.id)),S});a.replaceChildren(...g),f(_.variants[0].id,m)}for(let u of e.families){let m=ln("button","parts-family");m.type="button",m.dataset.partsFamily=u.id;let _=ln("span","parts-family-count");_.append(ln("strong",null,Os(u.count)),ln("small",null,"total")),m.append(ln("span","parts-family-name",u.name),_),m.addEventListener("click",()=>h(u.id)),o.append(m)}return h(n.family,!1),{getSelection:()=>({...n})}}function tp(i,e=Xr(i)){let{family:t,variant:n}=Kf(i,e),r=new Oe,s=[n.preview],o=new Rt({color:"#43948c",roughness:.75,side:Lt,flatShading:!0}),a=new tn({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(c=>{let l=new mt;l.setAttribute("position",new ct(c.positions,3)),l.setIndex(c.indices),l.computeVertexNormals();let d=new lt(l,o);d.add(new Wt(new Xt(l,30),a)),r.add(d)}),{root:r,direction:new D(.12,.65,3),annotation:`${t.name} \xB7 ${fh(n.lengthM)} \xB7 ${Os(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(c=>c.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var mh=qo,ph=(...i)=>new D(...i),gh=[{title:"Start with a building design.",text:"Floor plans from a client, drawings from a designer or a repeatable design from a developer. The starting point is the layout, dimensions and requirements of the project.",label:"The input",items:["Floor plans","Dimensions and heights","Project requirements"]},{title:"The Combstruct AI model automatically generates the structural design.",text:"Using the floor plans, it selects the board layout and connections. Floors, walls, ceilings and roof share one 3D model, with an ID and assembly position for every part.",label:"In one model",items:["Structure adapted to the system modules","Consistent components and connections","Data for manufacturing and assembly"]},{title:"Know exactly what to manufacture.",text:"The model produces a precise order: board types, dimensions, quantities and IDs. The same data guides sheet cutting and the preparation of site packages.",label:"For manufacturing",items:["Parts list, materials and quantities","Sheet cutting layouts and component IDs","Packages organised for assembly"]},{title:"Every component goes in its place.",text:"Identified parts and their positions in a shared model make site work easier to organise. The builder knows where to start and what comes next. The same system supports professional assembly and DIY.",label:"On site",items:["Parts with unique IDs","A clear assembly sequence","DIY or professional assembly"]}];function o_(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new gi(t);r.colorSpace=Ht;let s=new Rr(new Ki({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function Ac(i,e=Xr(qo)){if(i===2){let y=tp(qo,e);return{...y,getManufacturingState:()=>({stage:i,...y.getPartsState(),example:qo.name})}}let t=Wr(),n=t.dimensions,r=new Oe;r.name="Combstruct Flow";let s=new Rt({color:"#c49b62",roughness:.85}),o=new Rt({color:"#43948c",roughness:.75}),a=new Rt({color:"#33493e",roughness:.85}),c=new tn({color:"#66543a",transparent:!0,opacity:.45}),l=(y,N,P,L,F,k,O=a)=>{let z=new lt(new qt(y,N,P),O);return z.position.set(L,F,k),r.add(z),z},d=(y,N=s)=>{let P=new lt(y,N);return P.add(new Wt(new Xt(y,30),c)),r.add(P),P},f=(y,N,P,L,F)=>{let k=o_(y,F);k.position.set(N,P,L),r.add(k)};if(i===0){let y=new Rt({color:"#ffffff",roughness:1});l(n.width+1.8,.065,n.depth+1.8,0,-.085,0,y);for(let N of t.wallPanels){let P=[N.start,N.end,...N.holes.flatMap(L=>N.axis===0?[L.world.x0,L.world.x1]:[L.world.z0,L.world.z1])].sort((L,F)=>L-F);for(let L=1;L<P.length;L++){let F=P[L-1],k=P[L],O=(F+k)/2;k-F<.001||N.holes.some(z=>O>(N.axis===0?z.world.x0:z.world.z0)&&O<(N.axis===0?z.world.x1:z.world.z1))||(N.axis===0?l(k-F,.18,N.depth,O,.06,N.fixed):l(N.depth,.18,k-F,N.fixed,.06,O))}for(let L of N.holes){let F=N.axis===0?L.world.x0:L.world.z0,k=N.axis===0?L.world.x1:L.world.z1;L.kind==="window"&&(N.axis===0?l(k-F,.035,.035,(F+k)/2,.025,N.fixed,o):l(.035,.035,k-F,N.fixed,.025,(F+k)/2,o))}}for(let N of t.rooms)f(N.name,(N.x0+N.x1)/2,.26,(N.z0+N.z1)/2,N.id==="living"?3.5:3.2);return f(`${n.width.toFixed(2).replace(".",".")} m`,0,.03,n.halfDepth+.56,2.9),f(`${n.depth.toFixed(2).replace(".",".")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:ph(.15,7,3.5),annotation:"Example: Combstruct 30 floor plan"}}let h=new Map(t.boards.map(y=>[y.id,y])),u=zs.assembly.map(([y])=>h.get(y));if(u.length!==t.boards.length||u.some(y=>!y)||new Set(u).size!==u.length)throw new Error("Regenerate the assembly schedule for the current model");let m=[],_=[],g=[],p=[],S=0,M=0;for(let y of u){let N=y.mesh.geometry.index?y.mesh.geometry.toNonIndexed():y.mesh.geometry.clone();N.translate(...y.mesh.position.toArray()),m.push(N);let P=new Xt(N,30);_.push(P),S+=N.attributes.position.count,M+=P.attributes.position.count,g.push(S),p.push(M)}let v=Go(m,!1),C=Go(_,!1);m.forEach(y=>y.dispose()),_.forEach(y=>y.dispose());let E=new lt(v,s),T=new Wt(C,c);r.add(E,T);let b=u.length;if(i===1){let y=u.find(L=>L.surface==="front"&&L.axis===1&&L.index===9)||u[150],N=y.mesh.geometry.clone().translate(...y.mesh.position.toArray());d(N,o);let P=y.bounds.getCenter(ph());f(Xo(y).id,P.x,P.y+.45,P.z+.25,1.4)}return{root:r,direction:ph(1.4,1,1.5),annotation:i===1?"Combstruct 30 · digital component model":"Move the slider to see the assembly sequence",assembly(y){b=Math.max(0,Math.min(u.length,Math.round(y*u.length))),v.setDrawRange(0,g[b-1]||0),C.setDrawRange(0,p[b-1]||0)},getManufacturingState(){return{stage:i,totalBoards:u.length,visibleBoards:b,lastBoard:u[b-1]?.id||null,lastSupport:zs.assembly[b-1]?.[1]||null,example:"Combstruct 30"}}}}function bh(i){return[!1,!0].map(t=>{let n=a=>t?{start:"end",end:"start",left:"right",right:"left"}[a]:a,r=(i.connectorCuts||[]).map(a=>[n(a.end),a.edge,a.offset||0,a.width,a.removedRun].join(":")).sort(),s=vc(i.stock),o=[s.extendStart||0,s.extendEnd||0,s.extraStartTrim||0,s.extraEndTrim||0];return t&&([o[0],o[1]]=[o[1],o[0]],[o[2],o[3]]=[o[3],o[2]]),JSON.stringify([i.stock.pixels,i.trim?n(i.trim):null,r,...o.some(Boolean)?[o]:[]])}).sort()[0]}var ki=(...i)=>new D(...i),xh=1e-5;function _h(i,e){let t=i.attributes.position,n=1/0,r=-1/0;for(let s=0;s<t.count;s++){let o=t.getX(s)*e[0]+t.getY(s)*e[1]+t.getZ(s)*e[2];n=Math.min(n,o),r=Math.max(r,o)}return r-n}function ip(i){if(i.custom||i.stock.pixels<2||i.connectorCuts.length)return!1;let[e,t]=ti(i.stock,!1),n=i.mesh.geometry;return Math.abs(_h(n,i.along)-(t-e))<xh&&Math.abs(_h(n,i.normal)-yc)<xh&&Math.abs(_h(n,i.thick)-Ls)<xh}function rp(i,e){return e.slice(0,-1).map((t,n)=>{let r=[];for(let s=t;s<e[n+1]&&r.length<4;s++)ip(i[s])&&r.push(s);if(r.length!==4)throw new Error("Missing complete native boards for the robot demonstration: "+n);return r})}function np(i){if(!ip(i))throw new Error("Robot pickup requires a complete native board: "+i.id);let e=ki(...i.along).normalize(),t=ki(...i.normal).normalize(),n=new ot().makeBasis(e,t,e.clone().cross(t)),s=new ot().makeBasis(ki(1,0,0),ki(0,0,1),ki(0,-1,0)).multiply(n.invert()),o=new en().setFromRotationMatrix(s).invert(),a=i.bounds.getCenter(ki()),c=i.mesh.geometry.clone().translate(...i.mesh.position.toArray()).translate(-a.x,-a.y,-a.z).applyMatrix4(s);c.computeBoundingBox();let l=c.boundingBox.getCenter(ki());c.translate(-l.x,-l.y,-l.z),a.add(l.applyQuaternion(o));let d=JSON.parse(bh(i)),f=vc(i.stock),h=[f.extendStart||0,f.extendEnd||0,f.extraStartTrim||0,f.extraEndTrim||0];if((i.trim||null)!==d[1]||JSON.stringify(h)!==JSON.stringify(d[3]||[0,0,0,0])){let u=new en().setFromAxisAngle(ki(0,0,1),Math.PI);c.applyQuaternion(u),o.multiply(u.clone().invert())}return c.computeBoundingBox(),{geometry:c,target:a,rotation:o,dimensions:c.boundingBox.getSize(ki()).toArray()}}function sp(i,e){let t=new Map,n=e.flat().map(o=>{let a=i[o],c=bh(a);t.has(c)||t.set(c,{key:c,profile:a.trim?"ending":"ordinary",prepared:np(a),uses:0});let l=t.get(c);return l.uses++,{index:o,stack:l,prepared:np(a)}}),r=[...t.values()].sort((o,a)=>o.profile.localeCompare(a.profile)||a.prepared.dimensions[0]-o.prepared.dimensions[0]),s={ordinary:0,ending:0};for(let o of r)o.column=o.profile==="ordinary"?0:1,o.row=s[o.profile]++,o.id=(o.column===0?"A":"B")+(o.row+1),o.initial=12+o.uses;return{stacks:r,picks:n}}function Yo(i,e){let t=new Map(i.stacks.map(n=>[n.id,n.initial]));for(let n of i.picks.slice(0,e))t.set(n.stack.id,t.get(n.stack.id)-1);return t}var rt=(...i)=>new D(...i),vh=rt(0,1,0),Mh=rt(0,0,1),ks=i=>Math.max(0,Math.min(1,i)),a_=i=>(i=ks(i),i*i*(3-2*i)),Ft=(i,e,t)=>a_((i-e)/(t-e)),xn=ei.lerp,ri=(i,e=0)=>new Rt({color:i,metalness:e,roughness:e?.36:.76}),Zo={factory:{title:"Lights-off factory",duration:42,steps:[{at:0,label:"Panel feed",title:"Panel in. Process on.",text:"The magazine feeds the next OSB, MFP or plywood panel. Rollers guide it into the cutting station while hold-downs keep it in position."},{at:.15,label:"Five boards",title:"One panel. Five boards.",text:"Longitudinal cutting produces five straight boards. At this stage they have no slots."},{at:.31,label:"Turn onto edges",title:"Long edge facing up.",text:"A rotary fixture stands the boards on their long edges. Guides and clamps hold them upright before milling."},{at:.47,label:"Milling",title:"Seven cutters. One pass.",text:"Seven cutters stay in one row along the board, at a fixed height. Upright boards travel beneath them, one after another. Full slots and end half-slots are cut in a single pass."},{at:.64,label:"Inspect and identify",title:"Every board has its place.",text:"An inspection station checks the profile. Marking links each part to its identifier in the building model."},{at:.8,label:"Assembly kit",title:"Ready for the next step.",text:"Boards enter a labelled package. Kits are organised by project and assembly sequence."}]},site:{title:"Robotic assembly",duration:60,steps:[{at:0,label:"Floor",title:"Select. Pick. Place.",text:"The model specifies the profile and length. The robot selects the right stack, picks up a board and installs it in the structure. No manual feeding of parts in sequence."},{at:.2,label:"Walls",title:"Same component. New orientation.",text:"The rotating gripper turns the board upright. The gantry reaches successive ribs while keeping access to the building interior."},{at:.4,label:"Ceiling",title:"Assembly guided by the model.",text:"Once the supports are in place, the robot positions the ceiling ribs. Every part shown has an identifier and a target position in the structure."},{at:.6,label:"Roof",title:"Aligned with the roof pitch.",text:"The gripper rotates the board to match the roof. One shared model guides the process from the parts package to the next joint."},{at:.8,label:"Structure",title:"One structure. One dataset.",text:"Floor, walls, ceiling and roof use the same system. The robot works from the data prepared for production and assembly."}]}};function dt(i,e,t,n,r,s,o,a){let c=new lt(new qt(e,t,n),a);return c.position.set(r,s,o),i.add(c),c}function Un(i,e,t,n,r,s=vh){let o=new lt(new Ni(e,e,t,16),r);return o.position.copy(n),o.quaternion.setFromUnitVectors(vh,s),i.add(o),o}function Bs(i,e){let t=new lt(i,e);return t.add(new Wt(new Xt(i,30),new tn({color:"#5b4632",transparent:!0,opacity:.5}))),t}function Vi(i,e,t,n,r,s=2,o="#dceae4"){let a=document.createElement("canvas");a.width=768,a.height=96;let c=a.getContext("2d");c.font="500 37px Helvetica Neue, Arial, sans-serif",c.textAlign="center",c.fillStyle=o,c.fillText(e,384,61);let l=new gi(a);l.colorSpace=Ht;let d=new Rr(new Ki({map:l,depthTest:!1}));return d.scale.set(s,s/8,1),d.position.set(t,n,r),i.add(d),d}function yh(i,e,t,n,r){dt(i,t,.15,2.85,e,.74,0,r);for(let s=-t/2+.12;s<t/2;s+=.27)Un(i,.055,2.75,rt(e+s,.86,0),n,Mh);for(let s of[-1.48,1.48]){dt(i,t,.17,.09,e,.78,s,n);for(let o of[-t/2+.16,t/2-.16])dt(i,.1,.76,.1,e+o,.36,s,r)}}function Rc(i,e,t,n,r){for(let s of[-t/2,t/2])dt(i,.18,n,.18,e,n/2,s,r);dt(i,.28,.24,t+.18,e,n,0,r)}function l_(){let i=new Oe,e=ri("#8fa4a8",.6),t=ri("#30474b",.35),n=ri("#cba36b"),r=ri("#398d7d",.35),s=ri("#17282b"),o=new Rt({color:"#e3f3ed",emissive:"#a7e1cc",emissiveIntensity:1.5});dt(i,22,.18,7,0,-.2,0,s),yh(i,-6.3,5.3,e,t),yh(i,-.7,5.4,e,t),yh(i,4.5,4.3,e,t);for(let R=0;R<10;R++)dt(i,1.25,Ve,2.5,-8.2,.98+R*.024,0,n);Rc(i,-8.2,3.35,2.7,t),dt(i,3.5,.09,.12,-7.8,2.67,0,e);let a=new Oe;i.add(a),dt(a,1,.09,1.6,0,0,0,e);for(let R of[-.38,.38])for(let j of[-.56,.56])Un(a,.07,.16,rt(R,-.1,j),t);let c=dt(i,.08,1,.08,-8.2,2,0,e),l=Bs(new qt(1.25,Ve,2.5),n);i.add(l);let d=new Oe;i.add(d);let f=[],h=[],u=1.05,m=20,_=.65,g=.47,p=7.48,S=new ot().makeBasis(Mh,vh,rt(-1,0,0)),M=Tc(6).applyMatrix4(S).translate(0,bt/2,-3*Te);for(let R=0;R<5;R++){let j=new Oe;d.add(j),f.push(j);let Y=Bs(new qt(.24,Ve,2.5),n);j.add(Y);let ae=new Oe;i.add(ae),ae.visible=!1;let me=Bs(new qt(Ve,bt,6*Te).translate(0,bt/2,0),n),ue=Bs(M.clone(),n);ae.add(me,ue);let te=[];for(let se=0;se<7;se++){let V=Math.max(0,se*Te-Ve),oe=Math.min(6*Te,se*Te+Ve);te.push(dt(ae,Ve,bt/2,oe-V,0,3*bt/4,(V+oe)/2-3*Te,n))}let le=new Oe;ae.add(le);for(let se of[-.92,.92]){dt(le,.15,.045,.14,0,-.0225,se,r);for(let V of[-1,1])dt(le,.025,.085,.14,V*(Ve/2+.0125),.02,se,t)}h.push({group:ae,raw:me,finished:ue,chips:te,saddle:le})}Rc(i,-4.65,3.4,2.45,t);let v=new Oe;i.add(v),dt(v,1.5,.16,.22,0,0,0,e);let C=dt(i,.09,1,.09,-4.65,2,0,e);for(let R=0;R<4;R++){let j=Un(v,.2,.012,rt((R-1.5)*.25,-.17,0),e,rt(1,0,0));j.userData.saw=!0}for(let R of[-5.36,-3.95])Un(i,.075,2.6,rt(R,1.06,0),t,Mh);let E=[];for(let R=0;R<5;R++){let j=new Oe;i.add(j);for(let Y of[-.92,.92])dt(j,.29,.055,.14,0,-.033,Y,r),dt(j,.03,.15,.14,-.135,.015,Y,t);E.push(j)}Rc(i,u,3.45,2.8,t);let T=new Oe;i.add(T),T.position.set(u,1.36,0),dt(T,.3,.2,2.95,0,.27,0,e);for(let R of[-1.46,1.46])dt(i,.12,1.07,.12,u,2.265,R,e);let b=[];for(let R=0;R<7;R++){let j=(R-3)*Te;Un(T,.07,.32,rt(0,.04,j),r);let Y=Un(T,Ve,.18,rt(0,-.21,j),e);dt(Y,.004,.17,.004,Ve*.75,0,0,t),b.push(Y)}for(let R of[-.92,.92])dt(i,9.4,.055,.16,2.18,.885,R,t);for(let R of[-1.9,2.5])i.add(new Fr(rt(1,0,0),rt(R,.94,1.45),.8,7522734,.17,.1));for(let R of[-4.65,1.05,4.45])dt(i,1.5,.035,.06,R,2.34,-.2,o);Rc(i,4.45,3.25,2.2,e),dt(i,.4,.4,.35,4.45,1.85,0,t);let y=new lt(new Ur(1.35,2.5),new Bn({color:"#7cd3b5",transparent:!0,opacity:.19,side:Lt,depthWrite:!1}));y.rotation.x=-Math.PI/2,i.add(y);let N=new Oe;i.add(N),dt(N,1.5,.14,2.85,0,0,0,n);for(let R of[-1,1])dt(N,1.55,.08,.1,0,-.1,R,t);for(let R of[-.64,.64])for(let j of[-1.24,1.24])dt(N,.1,.86,.1,R,-.5,j,t);let P=[];for(let R of[-.84,.84])P.push(dt(N,.3,.025,.035,0,.07+5*Ve+.015,R,r));let L=Vi(i,"C30 \xB7 KIT",7.6,.38,1.9,1.55);Vi(i,"OSB / MFP / Plywood",-8.1,.07,2.4,3),Vi(i,"5 \xD7",-4.65,.07,2.4,1.4),Vi(i,"7 \xD7",u,1.98,0,1.3),Vi(i,"CNC",u,.07,2.4,1.3),Vi(i,"ID",4.45,.07,2.4,1.1);for(let R of[-4.65,1.05])Un(i,.12,.7,rt(R,2.75,-1.3),t),dt(i,.58,.5,.48,R,.33,-2.2,t);let F={},k=-8.2;function O(R){R=ks(R);let j=R<.035?-8.2:R<.075?xn(-8.2,-6.8,Ft(R,.035,.075)):R<.1?-6.8:xn(-6.8,-4.65,Ft(R,.1,.15)),Y=R<.035?xn(1.224,1.7,Ft(R,0,.035)):R<.075?1.7:R<.1?xn(1.7,.94,Ft(R,.075,.1)):.94,ae=R<.15?j:R<.31?-4.65:R<g?xn(-4.65,-.75,Ft(R,.31,g)):-.75+m*(R-g);l.visible=R<.22,l.position.set(ae,R<.15?Y:.94,0),a.position.set(R<.1?j:xn(-6.8,-8.2,Ft(R,.1,.15)),R<.1?Y+.19:xn(1.13,2.1,Ft(R,.1,.125)),0),c.scale.y=2.67-a.position.y,c.position.set(a.position.x,(2.67+a.position.y)/2,0),d.visible=R>=.22&&R<.47;let me=Ft(R,.33,.43)*Math.PI/2;for(let se=0;se<5;se++){let V=.94+Math.sin(me)*.12,oe=xn(.25,_,Ft(R,.36,g));f[se].position.set(ae+(se-2)*oe,V,0),f[se].rotation.z=me,E[se].visible=R>=.31&&R<.47,E[se].position.copy(f[se].position),E[se].rotation.z=me}v.position.set(-4.65,R>=.15&&R<.31?1.15:1.68,xn(-1.5,1.5,Ft(R,.15,.29))),C.scale.y=2.45-v.position.y,C.position.set(-4.65,(2.45+v.position.y)/2,v.position.z),b.forEach(se=>se.rotation.y=R*42*45);let ue=[];for(let se=0;se<5;se++){let{group:V,raw:oe,finished:ne,chips:fe,saddle:Ae}=h[se],Pe=ae+(se-2)*_,Ge=R<g?0:ks((Pe-u+Ve/2)/Ve),We=g+(p+.75-(se-2)*_)/m,ce=Ft(R,We,We+.02),ge=1-Ge;V.visible=R>=g,oe.visible=Ge===0,ne.visible=Ge>0,fe.forEach(re=>{re.visible=Ge>0&&Ge<1,re.scale.x=Math.max(.001,ge),re.position.x=-Ve/2+ge*Ve/2}),V.position.set(Math.min(p,Pe),xn(.94,.89+Ve/2+(4-se)*Ve,ce),0),V.rotation.z=-ce*Math.PI/2,Ae.visible=ce<1,ue.push({id:se+1,x:V.position.x,z:V.position.z,cut:Ge,slots:Ge===1?7:0,packed:ce===1})}y.visible=ue.some(se=>Math.abs(se.x-4.45)<.28)&&R>=g,y.position.set(4.45,1.45,0);let te=ue.every(se=>se.packed);k=R<g?ae:h.reduce((se,V)=>se+V.group.position.x+bt/2*Math.sin(-V.group.rotation.z),0)/h.length,N.position.set(7.6,.82,0),P.forEach(se=>se.visible=te),L.visible=te;let le=Zo.factory.steps.findLastIndex(se=>R>=se.at);F={process:"factory",progress:R,step:le,blanks:5,orientation:R<g?"flat-to-edge":"on-edge",milledSlots:Math.max(...ue.map(se=>se.slots)),toolApproach:"top",cutterCount:b.length,cutterPositions:b.map(se=>se.getWorldPosition(rt()).toArray()),feedAxis:"x",boardAxis:"z",boards:ue,complete:te}}O(0);let z=new Gt(rt(-10.1,-.2,-2.7),rt(9.1,3.2,2.8));return{root:i,direction:rt(.8,1.25,2.6),overviewDirection:rt(.8,1.25,2.6),detailDirection:rt(2.1,1.6,1.2),focus:z,overview:z,background:"#18292c",annotation:"Automated production line concept",update:O,getRoboticsState:()=>F,getDetailFocus(){let R=Ft(F.progress,.36,.5)*(1-Ft(F.progress,.65,.81)),j=rt(xn(1.8,1.45,R),xn(.95,.58,R),xn(1.65,1.34,R)),Y=rt(k,xn(1.6,1.35,R),0);return new Gt(Y.clone().sub(j),Y.clone().add(j))},dispose(){M.dispose()}}}function c_(){let i=new Oe,e=Wr(),t=e.dimensions,n=Ac(3);i.add(n.root);let r=new Map(e.boards.map(te=>[te.id,te])),s=zs.assembly.map(([te])=>r.get(te)),o=te=>{let le=s.findIndex(te);if(le<0)throw Error("Missing construction stage in the robotics example");return le},a=[0,o(te=>te.kind==="wall"&&te.axis===1),o(te=>te.kind==="ceiling"),o(te=>te.kind==="roof-slope"),s.length],c=rp(s,a),l=sp(s,c),d=ri("#82969a",.6),f=ri("#36524d",.35),h=ri("#348d7b",.35),u=ri("#cba36b"),m=ri("#e3e9df"),_=-t.halfWidth-1.5,g=t.halfWidth+1.5,p=-t.halfDepth-t.terraceDepth-1.4,S=t.halfDepth+4.2,M=t.roofRidgeY+2.5;dt(i,g-_+2,.12,S-p+1,0,-.15,(p+S)/2,m);for(let te of[_,g]){dt(i,.14,.14,S-p,te,0,(p+S)/2,d);for(let le=p;le<S;le+=.8)dt(i,.55,.09,.22,te,-.04,le,f)}let v=new Oe;i.add(v);for(let te of[_,g]){dt(v,.3,M,.3,te,M/2,0,f),dt(v,.65,.3,1.5,te,.2,0,h);for(let le of[-.5,.5])Un(v,.14,.25,rt(te,.1,le),d,rt(1,0,0))}for(let te of[-.21,.21])dt(v,g-_+.4,.26,.16,0,M,te,d);let C=new Oe;v.add(C),dt(C,.6,.3,.72,0,M-.05,0,h);let E=dt(C,.14,1,.14,0,M-.8,0,d),T=new Oe;i.add(T),Un(T,.13,.22,rt(0,0,0),f),Un(T,.18,.08,rt(0,.12,0),h);let b=new Oe;i.add(b),dt(b,.65,.065,.1,0,0,0,f);for(let te of[-.22,.22])Un(b,.018,.09,rt(te,-.075,0),d),Un(b,.028,.07,rt(te,-.155,0),f),Un(b,.032,.01,rt(te,-.191,0),h);let y=new lt(new So(.11,16,12),d);i.add(y);let N=.16,P=new Map;for(let te of l.stacks){te.position=rt(te.column===0?-1.7:1.7,N,t.halfDepth+1.25+te.row*.53);let le=te.prepared.dimensions[0],se=new Oe;se.position.copy(te.position),i.add(se);for(let ne of[-le*.32,le*.32])dt(se,.1,.12,.34,ne,-.06,0,u);let V=[];for(let ne=0;ne<te.initial;ne++){let fe=Bs(te.prepared.geometry,u);fe.position.y=(ne+.5)*Ve,se.add(fe),V.push(fe)}let oe=new Wt(new Xt(new qt(le+.16,.008,bt+.13)),new tn({color:"#2a9b82"}));oe.position.y=-.125,se.add(oe),P.set(te.id,{boards:V,selection:oe,label:null,count:-1})}Vi(i,"Standard boards",-1.7,.85,t.halfDepth+.65,2.6,"#254331"),Vi(i,"End boards",1.7,.85,t.halfDepth+.65,2.6,"#254331");let L=Bs(new qt(.01,.01,.01),ri("#379b88"));i.add(L),L.geometry.dispose(),L.children[0].geometry.dispose();let F=new Map(l.picks.map(te=>[te.index,new Xt(te.prepared.geometry,30)])),k=t.roofRidgeY+1.25,O=rt(0,k,S-.6),z=rt(0,.205,-bt/4),R={};function j(te,le){return te.stack.position.clone().add(rt(0,(le.get(te.stack.id)-.5)*Ve,0))}function Y(te,le,se){for(let V of l.stacks){let oe=P.get(V.id),ne=te.get(V.id),fe=V.id===le;oe.selection.visible=fe,oe.boards.forEach((Ae,Pe)=>{Ae.visible=Pe<ne,Ae.material=fe&&se&&Pe===ne-1?L.material:u}),oe.count!==ne&&(oe.label&&(i.remove(oe.label),oe.label.material.map.dispose(),oe.label.material.dispose()),oe.label=Vi(i,`${V.id} \xB7 ${V.prepared.dimensions[0].toFixed(2)} m \xB7 ${ne}\xD7`,V.position.x,N+ne*Ve+.07,V.position.z+.2,1.65,"#254331"),oe.count=ne)}}function ae(te,le){let se=te.clone().add(z.clone().applyQuaternion(le));v.position.z=se.z,C.position.x=se.x;let V=Math.max(.35,M-se.y-.25);return E.scale.y=V,E.position.y=M-V/2,T.position.copy(se).add(rt(0,.18,0)),b.position.copy(se),b.quaternion.copy(le),y.position.copy(se),se}function me(te){return l.stacks.map(le=>({id:le.id,profile:le.profile,length:le.prepared.dimensions[0],initial:le.initial,remaining:te.get(le.id),position:le.position.toArray()}))}function ue(te){let le=ks(te),se=Math.min(4,Math.floor(le*5)),V=ks(le*5-se);if(se===4){n.assembly(1),L.visible=!1;let Ce=Yo(l,l.picks.length);Y(Ce,null,!1);let Se=ae(O,new en);R={process:"site",progress:le,step:se,installed:s.length,total:s.length,complete:!0,inventory:me(Ce),picked:l.picks.length,toolPosition:Se.toArray()};return}let oe=4,ne=Math.min(oe-1,Math.floor(V*oe)),fe=ks(V*oe-ne),Ae=se*oe+ne,Pe=l.picks[Ae],Ge=Pe.index,{target:We,rotation:ce,geometry:ge,dimensions:re}=Pe.prepared,Me=fe>=.16,I=fe>=.86,Xe=Yo(l,Ae),Re=Yo(l,Ae+(Me?1:0)),ze=j(Pe,Xe),ye=l.picks[Ae+1],A=ye?j(ye,Yo(l,Ae+1)):O.clone().add(rt(0,-.5,0));Y(Re,Pe.stack.id,!Me),n.assembly((Ge+(I?1:0))/s.length),L.geometry=ge,L.children[0].geometry=F.get(Ge);let x=ze.clone().setY(k),B=We.clone().setY(k),K=A.clone().setY(k),de=rt();fe<.16?de.copy(ze).add(rt(0,xn(.5,0,Ft(fe,0,.16)),0)):fe<.35?de.lerpVectors(ze,x,Ft(fe,.16,.35)):fe<.6?de.lerpVectors(x,B,Ft(fe,.35,.6)):fe<.86?de.lerpVectors(B,We,Ft(fe,.6,.86)):fe<.92?de.lerpVectors(We,B,Ft(fe,.86,.92)):fe<.98?de.lerpVectors(B,K,Ft(fe,.92,.98)):de.lerpVectors(K,A.clone().add(rt(0,.5,0)),Ft(fe,.98,1)),L.visible=Me&&!I,L.position.copy(de),L.quaternion.identity().slerp(ce,Ft(fe,.35,.6)*(1-Ft(fe,.92,.98)));let Q=ae(de,L.quaternion);R={process:"site",progress:le,step:se,installed:Ge+(I?1:0),total:s.length,activeBoard:s[Ge].id,boardKind:s[Ge].kind,boardProfile:Pe.stack.profile,boardDimensions:re,nativeStock:!0,pickupGap:ze.y+ge.boundingBox.min.y-(N+(Xe.get(Pe.stack.id)-1)*Ve),pickupPosition:ze.toArray(),support:zs.assembly[Ge][1],carrying:L.visible,sourceVisible:!Me,phase:fe<.16?"pick":fe<.6?"carry":fe<.86?"place":"release",complete:!1,selectedOperations:!0,selectedStack:Pe.stack.id,nextStack:ye?.stack.id||null,inventory:me(Re),picked:Ae+(Me?1:0),toolPosition:Q.toArray()}}return ue(0),{root:i,direction:rt(1.5,1.15,2),distanceScale:.83,focus:new Gt(rt(_-1,-.2,p-.4),rt(g+.7,M+.35,S+.4)),annotation:"Selected operations · Combstruct 30",update:ue,getRoboticsState:()=>R,dispose(){for(let te of l.picks)te.prepared.geometry.dispose();for(let te of F.values())te.dispose()}}}function op(i){return i==="site"?c_():l_()}var Fn=[{id:"deska",group:"Components and principles",title:"Comb board",lead:"One repeating component forms the floor, walls, ceilings and roof.",text:"The board is cut from OSB, MFP or plywood. Slots reach halfway through its height. Two boards placed face to face form a pair, and shorter variants retain the same module spacing.",rule:"24 cm high. Each board is 18 mm thick.",scene:"beam"},{id:"uciaglanie",group:"Components and principles",title:"Paired boards and continuous ribs",lead:"Extend a rib by adding boards in two layers.",text:"Joints are staggered: the end of a board in one layer sits beside a continuous section in the other. In this example, the layers are offset by two modules along the beam. One layer ends 24 cm short of the other.",rule:"The joints in the two layers never line up.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Components and principles",title:"Ground and upper floors",lead:"Ribs parallel to the shorter panel edge have their slots facing up.",text:"This is a consistent assembly rule. These ribs are highlighted in teal. The perpendicular ribs have their slots facing the opposite way, so the two sets interlock.",rule:"Shorter load-bearing direction — slots face up.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Components and principles",title:"External walls",lead:"Vertical ribs have their slots facing outside the house.",text:"The teal uprights show the correct orientation. Horizontal ribs connect from the opposite side. The wall starts at the structural base level, and its stepped ends form the floor joint.",rule:"Uprights: slots face outwards. Ribs stay aligned.",scene:"wall",arrows:!0,spread:!0},{id:"stelazowanie",group:"Components and principles",title:"Wall battening",lead:"After insulation, battens cut from the same panel material cap the ribs.",text:"Battens are 60 mm wide, 18 mm thick and supplied in 2500 mm lengths. They are screwed flat across the edges of the paired boards: vertically outside and horizontally inside, on the open-slot face of each rib family. Each batten is centred on a 36 mm pair, overhanging by 12 mm on either side to form a T-section. Lengths are fitted to the wall and its openings. Separate the battens or inspect the section. One cell is left open to reveal the wall build-up.",rule:"60 × 18 × 2500 mm. Vertical outside. Horizontal inside.",scene:"battens",spread:!0},{id:"dach",group:"Components and principles",title:"Roof",lead:"The shorter direction of a roof panel also has its slots facing up.",text:"On a roof slope, “up” means towards the roof covering. The highlighted ribs run parallel to the shorter edge of the slope. The second set closes the grid from the opposite side.",rule:"The floor-panel rule, rotated with the roof slope.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Components and principles",title:"End boards and full end slots",lead:"The joint is formed by choosing the right board lengths.",text:"The standard end board is 240 mm shorter. At a three-way joint, one board has a full end slot and the end board is shortened by a further 18 mm. The other slots keep the same spacing.",rule:"Full end slot: 36 mm. Additional end-board shortening: 18 mm.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Connections",title:"Crossing ribs",lead:"Two perpendicular pairs slide together through their slots.",text:"Each set gives up half its height at the crossing. Once assembled, both fit within a single 24 cm structural layer. Separate the parts to see both sides of the slot.",rule:"An upward-facing slot meets a downward-facing slot.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Connections",title:"Floor — external wall",lead:"The longer end runs alongside the full rib.",text:"The shorter end rests on the rib, while the longer one extends beside it to the structural base. The wall pair and floor pair remain in the same plane.",rule:"A full board and an end board meet across the 24 cm depth.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Connections",title:"Floor — wall — terrace",lead:"The floor can continue beyond the house footprint.",text:"One layer continues onto the terrace. In the other, a full end slot and a shorter end board make room for the wall upright. The transverse floor rib stays clear.",rule:"A continuous terrace connection with room for all three rib directions.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Connections",title:"Floor — internal wall",lead:"An internal wall enters the floor grid using the same principle.",text:"The upright starts at the base of the structure. Its shorter layer rests on a full floor rib. In the other layer, the board lengths leave room for the wall and transverse rib, without side cut-outs.",rule:"Aligned ribs, with no extra board beneath the wall.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Connections",title:"Internal — external wall",lead:"Horizontal ribs from both walls meet in one plane.",text:"The ends alternate between layers. One board ends with a full slot; the adjacent end board is shortened by a further 18 mm. The external wall upright fits between them.",rule:"The third component enters the exposed slot.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Connections",title:"External wall corner",lead:"Two walls meet to close the corner.",text:"Horizontal pairs meet with alternating full and shortened boards. Each wall keeps its own orientation: the slots in its vertical ribs open towards the outside of the building.",rule:"Two walls with board pairs at a shared level.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Connections",title:"Internal wall junction",lead:"A transverse partition meets a continuous wall.",text:"One layer passes through the junction while the other receives the partition end. A full end slot and additional end shortening leave room for the upright. The board pairs remain in their shared planes.",rule:"The end fits into a continuous board pair.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Connections",title:"Upper floor — external wall",lead:"The floor slab rests on the horizontal wall rib.",text:"The lower upright ends with a full slot. The horizontal wall pair passes through it, and the slab rests on its upper face. The upper end board starts above the slab and is shortened by a further 18 mm.",rule:"The upper floor keeps the wall structure aligned.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Connections",title:"Upper floor — internal wall",lead:"The upright meets the upper floor on the same line as the ground-floor rib.",text:"The slab rests on the top horizontal row of the internal wall. End boards and full end slots bring together all three rib directions without side cut-outs.",rule:"The slab sits above the horizontal wall rib.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Connections",title:"Roof — wall",lead:"The extended upright forms a lap between the roof slots.",text:"In one layer, the roof board runs continuously across the joint and the shorter upright supports its underside. In the other layer, the longer upright overlaps its side, with roof boards meeting the upright on either side. At steeper pitches, only the upper corners of the upright are relieved to keep adjacent slots open. Without a knee wall, a filler closes the space above the floor. The floor board keeps its profile and rib alignment, with no bevel. Choose an eave or flush edge, change the pitch and separate the layers.",rule:"Roof and floor above the horizontal wall rib. Roof slots remain accessible.",scene:"roof-wall",spread:!0,crossing:!0},{id:"kalenica",group:"Connections",title:"Roof ridge joint",lead:"The long ends of both roof slopes overlap across two layers.",text:"In the first ply, the longer board from the left slope crosses the ridge, while the right board ends against its side. The second ply reverses this arrangement. Existing board profiles extend to the outline of the opposite slope for the largest available lap. At lower pitches or with a different slot position, only ends obstructing a working slot are trimmed. Transverse ribs and their axes stay in place. Compare the joint principle with the slot layouts in models 30 and 90, change the pitch and separate the plies.",rule:"Each board keeps its full thickness. The two layers overlap across the ridge.",scene:"ridge",spread:!0,crossing:!0}],Cc=[{id:"standard",name:"Standard",trim:null,description:"A board with slots along the edge and half-slots at both ends."},{id:"ending",name:"End board · −240 mm",trim:"left",description:"The standard end board is shorter by the board depth: 240 mm."},{id:"full-end-slot",name:"Full end slot · 36 mm",modules:5,extendEnd:.018,description:"The plain half extends by 18 mm. The end slot is 36 mm wide; the other slots retain their positions."},{id:"ending-short",name:"End board · −258 mm",trim:"left",extraStartTrim:.018,description:"An end board shortened by 240 + 18 mm. It leaves room for the rib at the full end slot."}];var be=i=>document.querySelector(i),_n=i=>[...document.querySelectorAll(i)],Ei=be("#technology-viewport"),ur=be(".viewport-loading"),Ot="combstruct",_t=Fn.find(i=>i.id==="podloga-strop"),$o=Cc[0],si="house",Vn=0,ap=Xr(mh),lp="outside",pn={pitch:35,eave:!0,knee:!0,ridgeHouse:"principle"},Nt,Bt,Ct,Hi,Ne,Sh=0,wh,Hn="factory",zn=0,Gn=!matchMedia("(prefers-reduced-motion: reduce)").matches,Eh=!0,oi=0,Th=-1,wi=!0,Jo=null,fr=(...i)=>new D(...i);function rn(){!Sh&&Nt&&(Sh=requestAnimationFrame(i=>{if(Sh=0,Ot==="robotics"&&Gn&&Eh&&!document.hidden){let e=oi?Math.min(.1,(i-oi)/1e3):0;zn=Math.min(1,zn+e/Zo[Hn].duration),oi=i,zn>=1&&(Gn=!1),Gs({dt:e})}else oi=0;Ct.update(),Nt.render(Hi,Bt),Ot==="robotics"&&Gn&&Eh&&!document.hidden&&rn()}))}function cp(i){let e=i.getCenter(fr()),t=(Ne.direction||fr(1.5,1.4,2)).clone().normalize(),n=fr(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(ei.degToRad(Bt.fov/2)),o=s*Bt.aspect,a=0;for(let c of[i.min.x,i.max.x])for(let l of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let f=fr(c,l,d).sub(e);a=Math.max(a,Math.abs(f.dot(n))/o+f.dot(t),Math.abs(f.dot(r))/s+f.dot(t))}return{center:e,direction:t,distance:Math.max(.8,a*1.14*(Ne.distanceScale||1))}}function Ah(){return Ot==="robotics"&&wi&&!!Ne?.getDetailFocus}function Ko(){if(!Ne||!Nt||!Ei.clientWidth||!Ei.clientHeight)return;let i=Ne.focus||new Gt().setFromObject(Ne.root),e=cp(i),{center:t,direction:n,distance:r}=e,s=Ct.enableDamping;if(Ct.enableDamping=!1,Ct.update(),Ct.target.copy(t),Bt.position.copy(t).addScaledVector(n,r),Ct.update(),Jo=Ah()?e:null,!Ne.focus)for(let o=0;o<2;o++){let a=Math.tan(ei.degToRad(Bt.fov/2));Ne.root.updateMatrixWorld(!0),Bt.updateMatrixWorld();let c=1/0,l=-1/0,d=1/0,f=-1/0,h=fr();Ne.root.traverseVisible(S=>{if(!S.geometry?.attributes.position)return;let M=S.geometry.attributes.position;for(let v=0;v<M.count;v++)h.fromBufferAttribute(M,v).applyMatrix4(S.matrixWorld).project(Bt),c=Math.min(c,h.x),l=Math.max(l,h.x),d=Math.min(d,h.y),f=Math.max(f,h.y)});let u=Bt.position.distanceTo(Ct.target),m=fr().setFromMatrixColumn(Bt.matrixWorld,0),_=fr().setFromMatrixColumn(Bt.matrixWorld,1),g=m.multiplyScalar((c+l)/2*u*a*Bt.aspect).add(_.multiplyScalar((d+f)/2*u*a));Ct.target.add(g),Bt.position.add(g);let p=Math.max((l-c)/1.72,(f-d)/1.62);Number.isFinite(p)&&p>0&&Bt.position.sub(Ct.target).multiplyScalar(p).add(Ct.target),Ct.update()}Ct.enableDamping=s,rn()}function d_(i,e){if(!Ah()||(Ne.focus=Ne.getDetailFocus(),Ne.direction=Ne.detailDirection||Ne.direction,!Jo||!Ei.clientWidth||!Ei.clientHeight))return;let t=cp(Ne.focus),n=Jo,r=e?1:1-Math.exp(-6*i);t.center.copy(n.center).lerp(Ne.focus.getCenter(fr()),r),t.distance=ei.lerp(n.distance,t.distance,r);let s=Bt.position.clone().sub(Ct.target).multiplyScalar(t.distance/n.distance);Ct.target.add(t.center.clone().sub(n.center)),Bt.position.copy(Ct.target).add(s),Jo=t}function dp(){if(!Nt)return;let i=Ei.clientWidth,e=Ei.clientHeight;!i||!e||(Nt.setSize(i,e,!1),Bt.aspect=i/e,Bt.updateProjectionMatrix(),Ko())}function h_(i){be("#element-id").textContent=i.id,be("#element-type").textContent=i.type,be("#element-surface").textContent=i.surface,be("#element-length").textContent=i.length,be("#element-metric-label").textContent=i.metricLabel||"Length in the model",be("#element-detail-label").textContent=i.detailLabel||"Sheet thickness",be("#element-thickness").textContent=i.detail||"18 mm"}function Ti(){if(Nt)try{Jo=null,Ne&&(Hi.remove(Ne.root),Zf(Ne.root),Ne.dispose?.()),Ne=Ot==="combstruct"?Jf(_t,$o,pn,lp):Ot==="bim"?$f(si,h_):Ot==="robotics"?op(Hn):Ac(Vn,ap),Hi.background.set(Ne.background||"#f2f5f1"),Ei.dataset.robotics=Ot==="robotics"?Hn:"",Hi.add(Ne.root),Ne.root.updateMatrixWorld(!0),be("#scene-annotation").textContent=Ne.annotation||"",Ne.arrows&&(Ne.arrows.visible=be("#arrows").checked),Ot==="combstruct"&&_t.crossing&&Ne.crossing?.(be("#crossing").checked),Ot==="combstruct"&&["roof-wall","ridge"].includes(_t.scene)&&(Ne.spread?.(Number(be("#spread").value)),Ne.insert?.(Number(be("#roof-joint-insert").value))),Ot==="combstruct"&&_t.scene==="battens"&&Ne.spread?.(Number(be("#spread").value)),Ot==="bim"&&Ne.finish&&up(),Ot==="flow"&&Vn===3&&pp(),Ot==="robotics"&&(Gs(),wi&&Ne.getDetailFocus&&(Ne.focus=Ne.getDetailFocus(),Ne.direction=Ne.detailDirection||Ne.direction)),ur.hidden=!0,dp(),rn()}catch(i){console.error(i),ur.hidden=!1,ur.textContent="This view could not load. Refresh the page to try again.",ur.setAttribute("role","alert")}}function u_(){try{Hi=new co,Hi.background=new at("#f2f5f1"),Bt=new un(36,1,.005,160),Nt=new pc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Nt.localClippingEnabled=!0,Nt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Nt.toneMapping=Lo,Nt.toneMappingExposure=1.07,Ei.prepend(Nt.domElement),Nt.domElement.tabIndex=0,Nt.domElement.setAttribute("aria-label","3D model. Drag to rotate; scroll to zoom. Home resets the view. In BIM, click a visible component to select it."),Ct=new xc(Bt,Nt.domElement),Ct.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,Ct.dampingFactor=.12,Ct.minDistance=.3,Ct.maxDistance=50,Ct.maxPolarAngle=Math.PI*.94,Ct.addEventListener("change",rn),Ct.listenToKeyEvents(Nt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{Ct.enableDamping=!n.matches,rn()}),Hi.add(new Ao("#ffffff","#b2b8aa",2.5));let i=new Es("#fff3df",2.6);i.position.set(3,7,5),Hi.add(i);let e=new Es("#d3e8ee",1.5);e.position.set(-4,3,-4),Hi.add(e),wh=new Co;let t;Nt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Nt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!Ne.selectAt)return;let r=Nt.domElement.getBoundingClientRect();wh.setFromCamera(new pe((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),Bt),Ne.selectAt(wh),rn()}),Nt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),Ko())}),Nt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),ur.hidden=!1,ur.textContent="The 3D preview was interrupted. Refresh the page to return to it."}),new ResizeObserver(dp).observe(Ei),Ti()}catch(i){console.error(i),ur.textContent="The 3D preview requires WebGL. You can read the system principles below the model.",ur.setAttribute("role","alert")}}function f_(){be("#topic-title").textContent=_t.title,be("#topic-lead").textContent=_t.lead,be("#topic-text").textContent=_t.text,be("#topic-rule").textContent=_t.rule;let i=Fn.indexOf(_t);be("#topic-counter").textContent=`${i+1} / ${Fn.length}`,be("#topic-select").value=_t.id,_n("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===_t.id))),be("#spread-control").hidden=!_t.spread,be("#crossing-control").hidden=!_t.crossing,be("#arrows-control").hidden=!_t.arrows,be("#variant-control").hidden=!_t.variants,be("#roof-joint-controls").hidden=!["roof-wall","ridge"].includes(_t.scene),be("#roof-joint-variant-control").hidden=_t.scene==="ridge",be("#ridge-house-control").hidden=_t.scene!=="ridge",be("#roof-joint-insert").value=0,be("#roof-joint-insert-value").textContent="0 mm",be("#batten-controls").hidden=_t.scene!=="battens",be("#spread").value=0,be("#crossing").checked=!!_t.crossing&&_t.scene!=="ridge",be("#previous-topic").disabled=i===0,be("#next-topic").disabled=i===Fn.length-1,be("#variant-description").textContent=$o.description}function jr(i,{hash:e=!0}={}){Ot=i,oi=0,be(".technology-cta").hidden=["flow","robotics"].includes(i),_n("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,be("#"+n.getAttribute("aria-controls")).hidden=!r}),be(`#${i==="combstruct"?"manual":i==="bim"?"bim":i==="robotics"?"robotics":"flow"}-mount`).append(Ei),e&&history.pushState(null,"",`#${i==="combstruct"?_t.id:i==="bim"&&si==="wall"?"bim-sciana":i==="robotics"&&Hn==="site"?"robotics-montaz":i}`),i==="combstruct"&&f_(),i==="flow"&&fp(),i==="robotics"&&p_(),Ti()}function Hs(i,{hash:e=!0}={}){let t=Fn.find(n=>n.id===i)||_t;t!==_t&&["ridge","roof-wall"].includes(t.scene)&&(pn.pitch=t.scene==="ridge"?pn.ridgeHouse==="30"?35:45:35,be("#roof-joint-pitch").value=pn.pitch,be("#roof-joint-pitch-value").textContent=pn.pitch+"\xB0"),_t=t,jr("combstruct",{hash:e})}function Rh(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(si=i==="bim-sciana"?"wall":"house",hp(),jr("bim",{hash:!1})):i==="robotics"||i==="robotics-montaz"?(Hn=i==="robotics-montaz"?"site":"factory",jr("robotics",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),jr("flow",{hash:!1})):Hs(i,{hash:!1})}for(let i of[...new Set(Fn.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of Fn.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>Hs(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}be("#topic-buttons").append(e),be("#topic-select").append(n)}for(let i of Cc)be("#variant-select").append(new Option(i.name,i.id));_n("[data-batten-view]").forEach(i=>i.addEventListener("click",()=>{lp=i.dataset.battenView,_n("[data-batten-view]").forEach(e=>e.setAttribute("aria-pressed",String(e===i))),Ti()}));be("#topic-select").addEventListener("change",i=>Hs(i.target.value));be("#variant-select").addEventListener("change",i=>{$o=Cc.find(e=>e.id===i.target.value),be("#variant-description").textContent=$o.description,Ti()});be("#roof-joint-variant").addEventListener("change",i=>{let[e,t]=i.target.value.split("-").map(Number);pn={...pn,eave:!!e,knee:!!t},Ti()});be("#ridge-house").addEventListener("change",i=>{pn.ridgeHouse=i.target.value,pn.pitch=i.target.value==="30"?35:45,be("#roof-joint-pitch").value=pn.pitch,be("#roof-joint-pitch-value").textContent=pn.pitch+"\xB0",Ti()});be("#roof-joint-pitch").addEventListener("input",i=>{pn.pitch=Number(i.target.value),be("#roof-joint-pitch-value").textContent=pn.pitch+"\xB0",Ti()});be("#roof-joint-insert").addEventListener("input",i=>{let e=Number(i.target.value);be("#roof-joint-insert-value").textContent=e+" mm",be("#spread").value=0,Ne?.spread?.(0),be("#crossing").checked=!0,Ne?.crossing?.(!0),Ne?.insert?.(e),rn()});_n("[data-technology]").forEach(i=>i.addEventListener("click",()=>jr(i.dataset.technology)));be(".technology-tabs").addEventListener("keydown",i=>{let e=_n("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});be("#previous-topic").addEventListener("click",()=>Hs(Fn[Fn.indexOf(_t)-1]?.id));be("#next-topic").addEventListener("click",()=>Hs(Fn[Fn.indexOf(_t)+1]?.id));be("#spread").addEventListener("input",i=>{Ne?.spread?.(Number(i.target.value)),be("#crossing").checked=!1,Ne?.crossing?.(!1),rn()});be("#crossing").addEventListener("change",i=>{i.target.checked&&(be("#spread").value=0,Ne?.spread?.(0)),Ne?.crossing?.(i.target.checked),rn()});be("#arrows").addEventListener("change",i=>{Ne?.arrows&&(Ne.arrows.visible=i.target.checked),rn()});_n("[data-reset-view]").forEach(i=>i.addEventListener("click",Ko));function hp(){_n("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===si))),be("#finish-control").hidden=si!=="wall",be("#wall-guide").hidden=si!=="wall",be(".selection-hint").textContent=si==="wall"?"Reveal the wall and select a visible component":"Select a board in the model",be("#passport-title").innerHTML=si==="wall"?"See what is inside<br>your wall.":"Every component<br>has its place."}function up(){let i=be("#finish"),e=Number(i.value);Ne?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"Finished wall":`Revealed: ${Math.round(e*100)}% of the wall`),be("#scene-annotation").textContent=e>.01?"Click a rib, insulation block, pipe or cable":"Use the slider to reveal the wall",rn()}_n("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{si=i.dataset.bimView,hp(),history.pushState(null,"",si==="wall"?"#bim-sciana":"#bim"),Ti()}));be("#finish").addEventListener("input",up);be("#next-element").addEventListener("click",()=>{Ne?.next?.(),rn()});function fp(){let i=gh[Vn];be("#flow-title").textContent=i.title,be("#flow-text").textContent=i.text,be("#flow-output-label").textContent=i.label,be("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),_n("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===Vn))),be("#assembly-control").hidden=Vn!==3,be("#flow-next").textContent=["See the Combstruct model \u2192","Go to manufacturing →","See the assembly →","Back to floor plans ↺"][Vn],be(".flow-layout").dataset.stage=Vn,be("#production-catalog").hidden=Vn!==2}function pp(){let i=Number(be("#assembly").value);Ne?.assembly?.(i),be("#assembly-progress").textContent=`${Math.round(i*100)}%`,rn()}function mp(i){Vn=i,fp(),Ti()}_n("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>mp(Number(i.dataset.flowStage))));be("#flow-next").addEventListener("click",()=>mp((Vn+1)%gh.length));be("#assembly").addEventListener("input",pp);ep(be("#production-catalog"),mh,(i,e)=>{ap=i,Ot==="flow"&&Vn===2&&Ti(),e&&Qf(be("#flow-mount"))});var Vs=be(".menu-toggle"),Pc=be("#mobile-menu");function p_(){Th=-1,be("#robotics-detail").hidden=Hn!=="factory",be("#robotics-detail").setAttribute("aria-pressed",String(wi)),be("#robotics-detail").textContent=wi?"Full line view":"Operation close-up",_n("[data-robotics-process]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.roboticsProcess===Hn)));let i=be("#robotics-steps");i.dataset.process=Hn,i.replaceChildren(...Zo[Hn].steps.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.textContent=e.label,n.dataset.roboticsStep=t,n.setAttribute("aria-pressed","false"),n.onclick=()=>Ch(e.at+.001),n})),be("#robotics-note").textContent=Hn==="factory"?"Concept animation of the production line.":"Selected operations from the Combstruct 30 model. Stage transitions skip some repeated cycles. A robot motion concept, not a validated assembly program."}function Gs({dt:i=0,snapCamera:e=!1}={}){Ne?.update?.(zn);let t=Zo[Hn],n=t.steps.findLastIndex(s=>zn>=s.at);n!==Th&&(Th=n,be("#robotics-title").textContent=t.steps[n].title,be("#robotics-text").textContent=t.steps[n].text,_n("[data-robotics-step]").forEach(s=>s.setAttribute("aria-pressed",String(Number(s.dataset.roboticsStep)===n)))),d_(i,e),be("#robotics-seek").value=zn;let r=Math.floor(zn*t.duration);be("#robotics-time").textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,be("#robotics-play").textContent=Gn?"Pause":zn===1?"Replay":"Play",be("#robotics-play").setAttribute("aria-pressed",String(Gn))}function Ch(i){zn=Math.min(1,Math.max(0,i)),Gn=!1,oi=0,Gs({snapCamera:!0}),rn()}_n("[data-robotics-process]").forEach(i=>i.addEventListener("click",()=>{Hn=i.dataset.roboticsProcess,zn=0,Gn=!matchMedia("(prefers-reduced-motion: reduce)").matches,jr("robotics")}));be("#robotics-play").addEventListener("click",()=>{let i=zn===1;i&&(zn=0),Gn=!Gn,oi=0,Gs({snapCamera:i}),rn()});be("#robotics-replay").addEventListener("click",()=>{zn=0,Gn=!matchMedia("(prefers-reduced-motion: reduce)").matches,oi=0,Gs({snapCamera:!0}),rn()});be("#robotics-seek").addEventListener("input",i=>Ch(Number(i.target.value)));be("#robotics-detail").addEventListener("click",()=>{wi=!wi,be("#robotics-detail").setAttribute("aria-pressed",String(wi)),be("#robotics-detail").textContent=wi?"Full line view":"Operation close-up",Ne.focus=wi?Ne.getDetailFocus():Ne.overview,Ne.direction=wi?Ne.detailDirection:Ne.overviewDirection,Ko()});new IntersectionObserver(i=>{Eh=i[0].isIntersecting,oi=0,rn()},{threshold:.05}).observe(be("#robotics-mount"));document.addEventListener("visibilitychange",()=>{oi=0,rn()});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{i.matches&&(Gn=!1,oi=0,Ot==="robotics"&&Gs())});function Ph(){Pc.hidden=!0,Vs.setAttribute("aria-expanded","false"),Vs.setAttribute("aria-label","Open menu")}Vs.addEventListener("click",()=>{let i=Pc.hidden;Pc.hidden=!i,Vs.setAttribute("aria-expanded",String(i)),Vs.setAttribute("aria-label",i?"Close menu":"Open menu")});_n("#mobile-menu a").forEach(i=>i.addEventListener("click",Ph));document.addEventListener("click",i=>{i.target.closest(".site-header")||Ph()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!Pc.hidden&&(Ph(),Vs.focus())});addEventListener("popstate",Rh);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==Ot&&i!==_t.id&&Rh()});window.combstructTechnology={getState:()=>({ready:!!Nt,technology:Ot,topic:_t.id,variant:$o.id,bimView:si,flowStage:Vn,roofJoint:Ot==="combstruct"&&_t.scene==="roof-wall"?{...pn,slabBeveled:!1,boards:Ne?.roofJoint?.boards.length}:null,ridgeJoint:Ot==="combstruct"&&_t.scene==="ridge"?{pitch:pn.pitch,house:pn.ridgeHouse,boards:Ne?.ridgeJoint?.boards.length}:null,robotics:Ot==="robotics"?{...Ne?.getRoboticsState?.(),playing:Gn,camera:{following:Ah(),position:Bt?.position.toArray(),target:Ct?.target.toArray()}}:null,manufacturing:Ne?.getManufacturingState?.(),selected:Ne?.getSelected?.(),wall:Ne?.getWallState?.(),battens:Ne?.getBattenState?.(),meshCount:Ne?.root.children.length,drawCalls:Nt?.info.render.calls}),topics:Fn.map(i=>i.id),showTopic:Hs,showTechnology:jr,seekRobotics:Ch,reset:Ko};Rh();u_();})();
