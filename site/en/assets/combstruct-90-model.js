"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Zl=1,Rh=2;var _s=1,Qo=2,wr=3,Jn=0,jt=1,Qt=2,Un=0,Ii=1,Jl=2,$l=3,Kl=4,Ch=5;var li=100,Ph=101,Ih=102,Dh=103,Lh=104,Nh=200,Uh=201,Fh=202,Oh=203,uo=204,fo=205,Bh=206,zh=207,kh=208,Vh=209,Hh=210,Gh=211,Wh=212,Xh=213,qh=214,po=0,mo=1,go=2,Di=3,_o=4,xo=5,vo=6,yo=7,jl=0,Yh=1,Zh=2,wn=0,Ql=1,ec=2,tc=3,xs=4,nc=5,ic=6,rc=7;var sc=300,_i=301,zi=302,ea=303,ta=304,vs=306,Mo=1e3,Pn=1001,bo=1002,Ft=1003,Jh=1004;var ys=1005;var Bt=1006,na=1007;var xi=1008;var en=1009,oc=1010,ac=1011,Er=1012,ia=1013,En=1014,Tn=1015,Fn=1016,ra=1017,sa=1018,Tr=1020,lc=35902,cc=35899,hc=1021,uc=1022,mn=1023,In=1026,vi=1027,dc=1028,oa=1029,ki=1030,aa=1031;var la=1033,Ms=33776,bs=33777,Ss=33778,ws=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37488,_a=37489,xa=37490,va=37491,ya=37808,Ma=37809,ba=37810,Sa=37811,wa=37812,Ea=37813,Ta=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,Ia=37819,Da=37820,La=37821,Na=36492,Ua=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286;var Hr=2300,So=2301,ho=2302,Ul=2303,Fl=2400,Ol=2401,Bl=2402;var $h=3200;var fc=0,Kh=1,Kn="",Jt="srgb",Li="srgb-linear",Gr="linear",ct="srgb";var Ci=7680;var zl=519,jh=512,Qh=513,eu=514,Va=515,tu=516,nu=517,Ha=518,iu=519,kl=35044;var pc="300 es",bn=2e3,dr=2001;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=Wr("canvas");return i.style.display="block",i}var Qc={},fr=null;function mc(...i){let e="THREE."+i.shift();fr?fr("log",e,...i):console.log(e,...i)}function su(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=su(i);let e="THREE."+i.shift();if(fr)fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=su(i);let e="THREE."+i.shift();if(fr)fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xr(...i){let e=i.join(" ");e in Qc||(Qc[e]=!0,He(...i))}function ou(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var au={[po]:mo,[go]:vo,[_o]:yo,[Di]:xo,[mo]:po,[vo]:go,[yo]:_o,[xo]:Di},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,hr=Math.PI/180,pr=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function xd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function vd(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function yd(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Md(i,e=1){return e-Math.abs(gc(i,e*2)-e)}function bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ed(i,e){return i+Math.random()*(e-i)}function Td(i){return i*(.5-Math.random())}function Ad(i){i!==void 0&&(eh=i);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rd(i){return i*hr}function Cd(i){return i*pr}function Pd(i){return(i&i-1)===0&&i!==0}function Id(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*p,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ar={DEG2RAD:hr,RAD2DEG:pr,generateUUID:Vi,clamp:je,euclideanModulo:gc,mapLinear:xd,inverseLerp:vd,lerp:zr,damp:yd,pingpong:Md,smoothstep:bd,smootherstep:Sd,randInt:wd,randFloat:Ed,randFloatSpread:Td,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:Pd,ceilPowerOfTwo:Id,floorPowerOfTwo:Dd,setQuaternionFromProperEuler:Ld,normalize:Zt,denormalize:cr},ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],p=n[r+3],u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(p!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+p*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);d=Math.sin(d*M)/w,a=Math.sin(a*M)/w,c=c*d+u*a,l=l*d+f*a,h=h*d+g*a,p=p*d+v*a}else{c=c*d+u*a,l=l*d+f*a,h=h*d+g*a,p=p*d+v*a;let M=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=M,l*=M,h*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],p=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*f-l*u,e[t+1]=c*g+h*u+l*p-a*f,e[t+2]=l*g+h*f+a*u-c*p,e[t+3]=h*g-a*p-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),p=a(s/2),u=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*p+l*f*g,this._y=l*f*p-u*h*g,this._z=l*h*g+u*f*p,this._w=l*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+l*f*g,this._y=l*f*p-u*h*g,this._z=l*h*g-u*f*p,this._w=l*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-l*f*g,this._y=l*f*p+u*h*g,this._z=l*h*g+u*f*p,this._w=l*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-l*f*g,this._y=l*f*p+u*h*g,this._z=l*h*g-u*f*p,this._w=l*h*p+u*f*g;break;case"YZX":this._x=u*h*p+l*f*g,this._y=l*f*p+u*h*g,this._z=l*h*g-u*f*p,this._w=l*h*p-u*f*g;break;case"XZY":this._x=u*h*p-l*f*g,this._y=l*f*p-u*h*g,this._z=l*h*g+u*f*p,this._w=l*h*p+u*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],u=n+a+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new D,th=new cn,Ke=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],f=n[5],g=n[8],v=r[0],m=r[3],d=r[6],M=r[1],w=r[4],y=r[7],P=r[2],R=r[5],I=r[8];return s[0]=o*v+a*M+c*P,s[3]=o*m+a*w+c*R,s[6]=o*d+a*y+c*I,s[1]=l*v+h*M+p*P,s[4]=l*m+h*w+p*R,s[7]=l*d+h*y+p*I,s[2]=u*v+f*M+g*P,s[5]=u*m+f*w+g*R,s[8]=u*d+f*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,u=a*c-h*s,f=l*s-o*c,g=t*p+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=p*v,e[1]=(r*l-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=u*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new Ke,nh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){let i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Gr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Gr,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var rt=Nd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Wr("canvas")),Ki.width=e.width,Ki.height=e.height;let r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ud=0,mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hl(r[o].image)):s.push(hl(r[o]))}else s=hl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Fd=0,ul=new D,Kt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,r=Pn,s=Bt,o=xi,a=mn,c=en,l=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Vi(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=sc;Kt.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],p=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(f+1)/2,P=(d+1)/2,R=(h+u)/4,I=(p+v)/4,x=(g+m)/4;return w>y&&w>P?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=R/n,s=I/n):y>P?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=R/r,s=x/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=I/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Kt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class i{constructor(e,t,n,r,s,o,a,c,l,h,p,u,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,p,u,f,g,v,m)}set(e,t,n,r,s,o,a,c,l,h,p,u,f,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=f+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,f=c*p,g=l*h,v=l*p;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,f=c*p,g=l*h,v=l*p;t[0]=u-v*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,f=o*p,g=a*h,v=a*p;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+v,t[1]=c*p,t[5]=v*l+u,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-u*p,t[8]=g*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*p+g,t[10]=u-v*p}else if(e.order==="XZY"){let u=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=u*p+v,t[5]=o*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Bd)}lookAt(e,t,n){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ni.crossVectors(n,on),ni.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ni.crossVectors(n,on)),ni.normalize(),Fs.crossVectors(on,ni),r[0]=ni.x,r[4]=Fs.x,r[8]=on.x,r[1]=ni.y,r[5]=Fs.y,r[9]=on.y,r[2]=ni.z,r[6]=Fs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],d=n[14],M=n[3],w=n[7],y=n[11],P=n[15],R=r[0],I=r[4],x=r[8],S=r[12],B=r[1],T=r[5],k=r[9],U=r[13],G=r[2],z=r[6],L=r[10],F=r[14],te=r[3],Z=r[7],ie=r[11],W=r[15];return s[0]=o*R+a*B+c*G+l*te,s[4]=o*I+a*T+c*z+l*Z,s[8]=o*x+a*k+c*L+l*ie,s[12]=o*S+a*U+c*F+l*W,s[1]=h*R+p*B+u*G+f*te,s[5]=h*I+p*T+u*z+f*Z,s[9]=h*x+p*k+u*L+f*ie,s[13]=h*S+p*U+u*F+f*W,s[2]=g*R+v*B+m*G+d*te,s[6]=g*I+v*T+m*z+d*Z,s[10]=g*x+v*k+m*L+d*ie,s[14]=g*S+v*U+m*F+d*W,s[3]=M*R+w*B+y*G+P*te,s[7]=M*I+w*T+y*z+P*Z,s[11]=M*x+w*k+y*L+P*ie,s[15]=M*S+w*U+y*F+P*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],d=e[15],M=c*f-l*u,w=a*f-l*p,y=a*u-c*p,P=o*f-l*h,R=o*u-c*h,I=o*p-a*h;return t*(v*M-m*w+d*y)-n*(g*M-m*P+d*R)+r*(g*w-v*P+d*I)-s*(g*y-v*R+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=t*a-n*o,w=t*c-r*o,y=t*l-s*o,P=n*c-r*a,R=n*l-s*a,I=r*l-s*c,x=h*v-p*g,S=h*m-u*g,B=h*d-f*g,T=p*m-u*v,k=p*d-f*v,U=u*d-f*m,G=M*U-w*k+y*T+P*B-R*S+I*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/G;return e[0]=(a*U-c*k+l*T)*z,e[1]=(r*k-n*U-s*T)*z,e[2]=(v*I-m*R+d*P)*z,e[3]=(u*R-p*I-f*P)*z,e[4]=(c*B-o*U-l*S)*z,e[5]=(t*U-r*B+s*S)*z,e[6]=(m*y-g*I-d*w)*z,e[7]=(h*I-u*y+f*w)*z,e[8]=(o*k-a*B+l*x)*z,e[9]=(n*B-t*k-s*x)*z,e[10]=(g*R-v*y+d*M)*z,e[11]=(p*y-h*R-f*M)*z,e[12]=(a*S-o*T-c*x)*z,e[13]=(t*T-n*S+r*x)*z,e[14]=(v*w-g*P-m*M)*z,e[15]=(h*P-p*w+u*M)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,u=s*l,f=s*h,g=s*p,v=o*h,m=o*p,d=a*p,M=c*l,w=c*h,y=c*p,P=n.x,R=n.y,I=n.z;return r[0]=(1-(v+d))*P,r[1]=(f+y)*P,r[2]=(g-w)*P,r[3]=0,r[4]=(f-y)*R,r[5]=(1-(u+d))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+w)*I,r[9]=(m-M)*I,r[10]=(1-(u+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ji.set(r[0],r[1],r[2]).length(),a=ji.set(r[4],r[5],r[6]).length(),c=ji.set(r[8],r[9],r[10]).length();s<0&&(o=-o),vn.copy(this);let l=1/o,h=1/a,p=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=bn,c=!1){let l=this.elements,h=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===dr)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn,c=!1){let l=this.elements,h=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===dr)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new D,vn=new ft,Od=new D(0,0,0),Bd=new D(1,1,1),ni=new D,Fs=new D,on=new D,rh=new ft,sh=new cn,Sn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zd=0,oh=new D,Qi=new cn,Hn=new ft,Os=new D,Lr=new D,kd=new D,Vd=new cn,ah=new D(1,0,0),lh=new D(0,1,0),ch=new D(0,0,1),hh={type:"added"},Hd={type:"removed"},er={type:"childadded",child:null},dl={type:"childremoved",child:null},zt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Sn,n=new cn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Lr,Os,this.up):Hn.lookAt(Os,Lr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),er.child=e,this.dispatchEvent(er),er.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gd={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=gc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return rt.workingToColorSpace(Wt.copy(this),e),Math.round(je(Wt.r*255,0,255))*65536+Math.round(je(Wt.g*255,0,255))*256+Math.round(je(Wt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Jt){rt.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,r=Wt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Bs);let n=zr(ii.h,Bs.h,t),r=zr(ii.s,Bs.s,t),s=zr(ii.l,Bs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new it;it.NAMES=lu;var Zr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new D,Gn=new D,pl=new D,Wn=new D,tr=new D,nr=new D,uh=new D,ml=new D,gl=new D,_l=new D,xl=new Mt,vl=new Mt,yl=new Mt,Yn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),Gn.subVectors(n,t),pl.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Gn),c=yn.dot(pl),l=Gn.dot(Gn),h=Gn.dot(pl),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let u=1/p,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(o,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return xl.setScalar(0),vl.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xl,s.x),o.addScaledVector(vl,s.y),o.addScaledVector(yl,s.z),o}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;tr.subVectors(r,n),nr.subVectors(s,n),ml.subVectors(e,n);let c=tr.dot(ml),l=nr.dot(ml);if(c<=0&&l<=0)return t.copy(n);gl.subVectors(e,r);let h=tr.dot(gl),p=nr.dot(gl);if(h>=0&&p<=h)return t.copy(r);let u=c*p-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(tr,o);_l.subVectors(e,s);let f=tr.dot(_l),g=nr.dot(_l);if(g>=0&&f<=g)return t.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(nr,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return uh.subVectors(s,r),a=(p-h)/(p-h+(f-g)),t.copy(r).addScaledVector(uh,a);let d=1/(m+v+u);return o=v*d,a=u*d,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),ks.subVectors(this.max,Nr),ir.subVectors(e.a,Nr),rr.subVectors(e.b,Nr),sr.subVectors(e.c,Nr),ri.subVectors(rr,ir),si.subVectors(sr,rr),Ei.subVectors(ir,sr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!Ml(t,ir,rr,sr,ks)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,ir,rr,sr,ks))?!1:(Vs.crossVectors(ri,si),t=[Vs.x,Vs.y,Vs.z],Ml(t,ir,rr,sr,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,zs=new Ln,ir=new D,rr=new D,sr=new D,ri=new D,si=new D,Ei=new D,Nr=new D,ks=new D,Vs=new D,Ti=new D;function Ml(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ti.fromArray(i,s);let a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var At=new D,Hs=new ue,Wd=0,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}};var Jr=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xd=new Ln,Ur=new D,bl=new D,Ni=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(bl)),this.expandByPoint(Ur.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qd=0,pn=new ft,Sl=new zt,or=new D,an=new Ln,Fr=new Ln,Ut=new D,kt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(an.min,Fr.min),an.expandByPoint(Ut),Ut.addVectors(an.max,Fr.max),an.expandByPoint(Ut)):(an.expandByPoint(Fr.min),an.expandByPoint(Fr.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(e,l),Ut.add(or)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new D,c[x]=new D;let l=new D,h=new D,p=new D,u=new ue,f=new ue,g=new ue,v=new D,m=new D;function d(x,S,B){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),p.fromBufferAttribute(n,B),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,B),h.sub(l),p.sub(l),f.sub(u),g.sub(u);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(T),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[x].add(v),a[S].add(v),a[B].add(v),c[x].add(m),c[S].add(m),c[B].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,S=M.length;x<S;++x){let B=M[x],T=B.start,k=B.count;for(let U=T,G=T+k;U<G;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let w=new D,y=new D,P=new D,R=new D;function I(x){P.fromBufferAttribute(r,x),R.copy(P);let S=a[x];w.copy(S),w.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(R,S);let T=y.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,T)}for(let x=0,S=M.length;x<S;++x){let B=M[x],T=B.start,k=B.count;for(let U=T,G=T+k;U<G;U+=3)I(e.getX(U+0)),I(e.getX(U+1)),I(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,p=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let d=0;d<h;d++)u[g++]=l[f++]}return new $t(u,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){let f=l[p];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],p=s[l];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yd=0,Nn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ii,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new D,wl=new D,Gs=new D,oi=new D,El=new D,Ws=new D,Tl=new D,Ui=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wl.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(wl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=oi.dot(this.direction),c=-oi.dot(Gs),l=oi.lengthSq(),h=Math.abs(1-o*o),p,u,f,g;if(h>0)if(p=o*c-a,u=o*a-c,g=s*h,p>=0)if(u>=-g)if(u<=g){let v=1/h;p*=v,u*=v,f=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;else u=-s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;else u<=-g?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-c),s),f=-p*p+u*(u+2*c)+l):u<=g?(p=0,u=Math.min(Math.max(-s,-c),s),f=u*(u+2*c)+l):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-c),s),f=-p*p+u*(u+2*c)+l);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(wl).addScaledVector(Gs,u),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){El.subVectors(t,e),Ws.subVectors(n,e),Tl.crossVectors(El,Ws);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);let c=a*this.direction.dot(Ws.crossVectors(oi,Ws));if(c<0)return null;let l=a*this.direction.dot(El.cross(oi));if(l<0||c+l>o)return null;let h=-a*oi.dot(Tl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dh=new ft,Ai=new Ui,Xs=new Ni,fh=new D,qs=new D,Ys=new D,Zs=new D,Al=new D,Js=new D,ph=new D,$s=new D,Rt=class extends zt{constructor(e=new kt,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],p=s[c];h!==0&&(Al.fromBufferAttribute(p,e),o?Js.addScaledVector(Al,h):Js.addScaledVector(Al.sub(t),h))}t.add(Js)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Xs,fh)===null||Ai.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,P=w;y<P;y+=3){let R=a.getX(y),I=a.getX(y+1),x=a.getX(y+2);r=Ks(this,d,e,n,l,h,p,R,I,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){let M=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);r=Ks(this,o,e,n,l,h,p,M,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,P=w;y<P;y+=3){let R=y,I=y+1,x=y+2;r=Ks(this,d,e,n,l,h,p,R,I,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){let M=m,w=m+1,y=m+2;r=Ks(this,o,e,n,l,h,p,M,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Zd(i,e,t,n,r,s,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Jn,a),c===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo($s);return l<t.near||l>t.far?null:{distance:l,point:$s.clone(),object:i}}function Ks(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,qs),i.getVertexPosition(c,Ys),i.getVertexPosition(l,Zs);let h=Zd(i,e,t,n,qs,Ys,Zs,ph);if(h){let p=new D;Yn.getBarycoord(ph,qs,Ys,Zs,p),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,c,l,p,new ue)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,c,l,p,new ue)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,c,l,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};Yn.getNormal(qs,Ys,Zs,u.normal),h.face=u,h.barycoord=p}return h}var Ao=class extends Kt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Ft,h=Ft,p,u){super(null,o,a,c,l,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rl=new D,Jd=new D,$d=new Ke,Xt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rl.subVectors(n,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$d.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Ni,Kd=new ue(.5,.5),js=new D,_r=class{constructor(e=new Xt,t=new Xt,n=new Xt,r=new Xt,s=new Xt,o=new Xt){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],p=s[5],u=s[6],f=s[7],g=s[8],v=s[9],m=s[10],d=s[11],M=s[12],w=s[13],y=s[14],P=s[15];if(r[0].setComponents(l-o,f-h,d-g,P-M).normalize(),r[1].setComponents(l+o,f+h,d+g,P+M).normalize(),r[2].setComponents(l+a,f+p,d+v,P+w).normalize(),r[3].setComponents(l-a,f-p,d-v,P-w).normalize(),n)r[4].setComponents(c,u,m,y).normalize(),r[5].setComponents(l-c,f-u,d-m,P-y).normalize();else if(r[4].setComponents(l-c,f-u,d-m,P-y).normalize(),t===bn)r[5].setComponents(l+c,f+u,d+m,P+y).normalize();else if(t===dr)r[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Kd.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new D,Co=new D,mh=new ft,Or=new Ui,Qs=new Ni,Cl=new D,gh=new D,Po=class extends zt{constructor(e=new kt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ro.fromBufferAttribute(t,r-1),Co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new Tt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;mh.copy(r).invert(),Or.copy(e.ray).applyMatrix4(mh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let d=h.getX(v),M=h.getX(v+1),w=eo(this,e,Or,c,d,M,v);w&&t.push(w)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),d=eo(this,e,Or,c,v,m,g-1);d&&t.push(d)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=l){let d=eo(this,e,Or,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=eo(this,e,Or,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function eo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,r),Co.fromBufferAttribute(a,s),t.distanceSqToSegment(Ro,Co,Cl,gh)>n)return;Cl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Cl);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _h=new D,xh=new D,jr=class extends Po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)_h.fromBufferAttribute(t,r),xh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_h.distanceTo(xh);e.setAttribute("lineDistance",new Tt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qr=class extends Kt{constructor(e=[],t=_i,n,r,s,o,a,c,l,h){super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},es=class extends Kt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class extends Kt{constructor(e,t,n=En,r,s,o,a=Ft,c=Ft,l,h=In,p=1){if(h!==In&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Io=class extends ci{constructor(e,t=En,n=_i,r,s,o=Ft,a=Ft,c,l=In){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ts=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class i extends kt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(p,2));function g(v,m,d,M,w,y,P,R,I,x,S){let B=y/I,T=P/x,k=y/2,U=P/2,G=R/2,z=I+1,L=x+1,F=0,te=0,Z=new D;for(let ie=0;ie<L;ie++){let W=ie*T-U;for(let ne=0;ne<z;ne++){let ce=ne*B-k;Z[v]=ce*M,Z[m]=W*w,Z[d]=G,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),p.push(ne/I),p.push(1-ie/x),F+=1}}for(let ie=0;ie<x;ie++)for(let W=0;W<I;W++){let ne=u+W+z*ie,ce=u+W+z*(ie+1),ae=u+(W+1)+z*(ie+1),Me=u+(W+1)+z*ie;c.push(ne,ce,Me),c.push(ce,ae,Me),te+=6}a.addGroup(f,te,S),f+=te,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var to=new D,no=new D,Pl=new D,io=new Yn,ns=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(hr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],p=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:v,b:m,c:d}=io;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),d.fromBufferAttribute(a,l[2]),io.getNormal(Pl),p[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){let w=(M+1)%3,y=p[M],P=p[w],R=io[h[M]],I=io[h[w]],x=`${y}_${P}`,S=`${P}_${y}`;S in u&&u[S]?(Pl.dot(u[S].normal)<=s&&(f.push(R.x,R.y,R.z),f.push(I.x,I.y,I.z)),u[S]=null):x in u||(u[x]={index0:l[M],index1:l[w],normal:Pl.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:m}=u[g];to.fromBufferAttribute(a,v),no.fromBufferAttribute(a,m),f.push(to.x,to.y,to.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ue:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,c=new ft;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(je(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(je(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends un{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*p+this.aX,l=u*p+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Do=class extends vr{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,p){let u=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+p)+(c-a)/p;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var ro=new D,Il=new _c,Dl=new _c,Ll=new _c,Lo=class extends un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(ro.subVectors(r[0],r[1]).add(r[0]),l=ro);let p=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Il.initNonuniformCatmullRom(l.x,p.x,u.x,h.x,g,v,m),Dl.initNonuniformCatmullRom(l.y,p.y,u.y,h.y,g,v,m),Ll.initNonuniformCatmullRom(l.z,p.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,p.x,u.x,h.x,this.tension),Dl.initCatmullRom(l.y,p.y,u.y,h.y,this.tension),Ll.initCatmullRom(l.z,p.z,u.z,h.z,this.tension));return n.set(Il.calc(c),Dl.calc(c),Ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vh(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function jd(i,e){let t=1-i;return t*t*e}function Qd(i,e){return 2*(1-i)*i*e}function ef(i,e){return i*i*e}function kr(i,e,t,n){return jd(i,e)+Qd(i,t)+ef(i,n)}function tf(i,e){let t=1-i;return t*t*t*e}function nf(i,e){let t=1-i;return 3*t*t*i*e}function rf(i,e){return 3*(1-i)*i*i*e}function sf(i,e){return i*i*i*e}function Vr(i,e,t,n,r){return tf(i,e)+nf(i,t)+rf(i,n)+sf(i,r)}var is=class extends un{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vr(e,r.x,s.x,o.x,a.x),Vr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends un{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vr(e,r.x,s.x,o.x,a.x),Vr(e,r.y,s.y,o.y,a.y),Vr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rs=class extends un{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ss=class extends un{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(kr(e,r.x,s.x,o.x),kr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends un{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(kr(e,r.x,s.x,o.x),kr(e,r.y,s.y,o.y),kr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(vh(a,c.x,l.x,h.x,p.x),vh(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Do,CatmullRomCurve3:Lo,CubicBezierCurve:is,CubicBezierCurve3:No,EllipseCurve:vr,LineCurve:rs,LineCurve3:Uo,QuadraticBezierCurve:ss,QuadraticBezierCurve3:Fo,SplineCurve:os}),Oo=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Vl[r.type]().fromJSON(r))}return this}},as=class extends Oo{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new rs(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ss(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new is(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new vr(e,t,n,r,s,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ui=class extends as{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new as().fromJSON(r))}return this}};function of(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=cu(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=uf(i,e,s,t)),i.length>80*t){a=i[0],c=i[1];let h=a,p=c;for(let u=t;u<r;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>p&&(p=g)}l=Math.max(h-a,p-c),l=l!==0?32767/l:0}return ls(s,o,t,a,c,l,0),o}function cu(i,e,t,n,r){let s;if(r===bf(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=yh(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=yh(o/n|0,i[o],i[o+1],s);return s&&yr(s,s.next)&&(hs(s),s=s.next),s}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yr(t,t.next)||yt(t.prev,t,t.next)===0)){if(hs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ls(i,e,t,n,r,s,o){if(!i)return;!o&&s&&gf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?lf(i,n,r,s):af(i)){e.push(c.i,i.i,l.i),hs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=cf(Fi(i),e),ls(i,e,t,n,r,s,2)):o===2&&hf(i,e,t,n,r,s):ls(Fi(i),e,t,n,r,s,1);break}}}function af(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(r,s,o),p=Math.min(a,c,l),u=Math.max(r,s,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=f&&Br(r,a,s,c,o,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lf(i,e,t,n){let r=i.prev,s=i,o=i.next;if(yt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,p=s.y,u=o.y,f=Math.min(a,c,l),g=Math.min(h,p,u),v=Math.max(a,c,l),m=Math.max(h,p,u),d=Hl(f,g,e,t,n),M=Hl(v,m,e,t,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=d&&y&&y.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&Br(a,h,c,p,l,u,w.x,w.y)&&yt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Br(a,h,c,p,l,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=d;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&Br(a,h,c,p,l,u,w.x,w.y)&&yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Br(a,h,c,p,l,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!yr(n,r)&&uu(n,t,t.next,r)&&cs(n,r)&&cs(r,n)&&(e.push(n.i,t.i,r.i),hs(t),hs(t.next),t=i=r),t=t.next}while(t!==i);return Fi(t)}function hf(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vf(o,a)){let c=du(o,a);o=Fi(o,o.next),c=Fi(c,c.next),ls(o,e,t,n,r,s,0),ls(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function uf(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=cu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(xf(l))}r.sort(df);for(let s=0;s<r.length;s++)t=ff(r[s],t);return t}function df(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function ff(i,e){let t=pf(i,e);if(!t)return e;let n=du(t,i);return Fi(n,n.next),Fi(t,t.next)}function pf(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(yr(i,t))return t;do{if(yr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&hu(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){let p=Math.abs(r-t.y)/(n-t.x);cs(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&mf(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function mf(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function gf(i,e,t,n){let r=i;do r.z===0&&(r.z=Hl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,_f(r)}function _f(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Hl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Br(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&hu(i,e,t,n,r,s,o,a)}function vf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yf(i,e)&&(cs(i,e)&&cs(e,i)&&Mf(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||yr(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yr(i,e){return i.x===e.x&&i.y===e.y}function uu(i,e,t,n){let r=oo(yt(i,e,t)),s=oo(yt(i,e,n)),o=oo(yt(t,n,i)),a=oo(yt(t,n,e));return!!(r!==s&&o!==a||r===0&&so(i,t,e)||s===0&&so(i,n,e)||o===0&&so(t,i,n)||a===0&&so(t,e,n))}function so(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function yf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function cs(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Mf(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function du(i,e){let t=Gl(i.i,i.x,i.y),n=Gl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yh(i,e,t,n){let r=Gl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bf(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Wl=class{static triangulate(e,t,n=2){return of(e,t,n)}},Pi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Mh(e),bh(n,e);let o=e.length;t.forEach(Mh);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,bh(n,t[c]);let a=Wl.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Mh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends kt{constructor(e=new ui([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Tt(r,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Sf,w,y=!1,P,R,I,x;if(d){w=d.getSpacedPoints(h),y=!0,u=!1;let X=d.isCatmullRomCurve3?d.closed:!1;P=d.computeFrenetFrames(h,X),R=new D,I=new D,x=new D}u||(m=0,f=0,g=0,v=0);let S=a.extractPoints(l),B=S.shape,T=S.holes;if(!Pi.isClockWise(B)){B=B.reverse();for(let X=0,re=T.length;X<re;X++){let se=T[X];Pi.isClockWise(se)&&(T[X]=se.reverse())}}function U(X){let se=10000000000000001e-36,be=X[0];for(let C=1;C<=X.length;C++){let Be=C%X.length,Te=X[Be],Ve=Te.x-be.x,xe=Te.y-be.y,A=Ve*Ve+xe*xe,_=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(be.x),Math.abs(be.y)),E=se*_*_;if(A<=E){X.splice(Be,1),C--;continue}be=Te}}U(B),T.forEach(U);let G=T.length,z=B;for(let X=0;X<G;X++){let re=T[X];B=B.concat(re)}function L(X,re,se){return re||We("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(re,se)}let F=B.length;function te(X,re,se){let be,C,Be,Te=X.x-re.x,Ve=X.y-re.y,xe=se.x-X.x,A=se.y-X.y,_=Te*Te+Ve*Ve,E=Te*A-Ve*xe;if(Math.abs(E)>Number.EPSILON){let O=Math.sqrt(_),K=Math.sqrt(xe*xe+A*A),J=re.x-Ve/O,ge=re.y+Te/O,fe=se.x-A/K,Pe=se.y+xe/K,Se=((fe-J)*A-(Pe-ge)*xe)/(Te*A-Ve*xe);be=J+Te*Se-X.x,C=ge+Ve*Se-X.y;let oe=be*be+C*C;if(oe<=2)return new ue(be,C);Be=Math.sqrt(oe/2)}else{let O=!1;Te>Number.EPSILON?xe>Number.EPSILON&&(O=!0):Te<-Number.EPSILON?xe<-Number.EPSILON&&(O=!0):Math.sign(Ve)===Math.sign(A)&&(O=!0),O?(be=-Ve,C=Te,Be=Math.sqrt(_)):(be=Te,C=Ve,Be=Math.sqrt(_/2))}return new ue(be/Be,C/Be)}let Z=[];for(let X=0,re=z.length,se=re-1,be=X+1;X<re;X++,se++,be++)se===re&&(se=0),be===re&&(be=0),Z[X]=te(z[X],z[se],z[be]);let ie=[],W,ne=Z.concat();for(let X=0,re=G;X<re;X++){let se=T[X];W=[];for(let be=0,C=se.length,Be=C-1,Te=be+1;be<C;be++,Be++,Te++)Be===C&&(Be=0),Te===C&&(Te=0),W[be]=te(se[be],se[Be],se[Te]);ie.push(W),ne=ne.concat(W)}let ce;if(m===0)ce=Pi.triangulateShape(z,T);else{let X=[],re=[];for(let se=0;se<m;se++){let be=se/m,C=f*Math.cos(be*Math.PI/2),Be=g*Math.sin(be*Math.PI/2)+v;for(let Te=0,Ve=z.length;Te<Ve;Te++){let xe=L(z[Te],Z[Te],Be);pe(xe.x,xe.y,-C),be===0&&X.push(xe)}for(let Te=0,Ve=G;Te<Ve;Te++){let xe=T[Te];W=ie[Te];let A=[];for(let _=0,E=xe.length;_<E;_++){let O=L(xe[_],W[_],Be);pe(O.x,O.y,-C),be===0&&A.push(O)}be===0&&re.push(A)}}ce=Pi.triangulateShape(X,re)}let ae=ce.length,Me=g+v;for(let X=0;X<F;X++){let re=u?L(B[X],ne[X],Me):B[X];y?(I.copy(P.normals[0]).multiplyScalar(re.x),R.copy(P.binormals[0]).multiplyScalar(re.y),x.copy(w[0]).add(I).add(R),pe(x.x,x.y,x.z)):pe(re.x,re.y,0)}for(let X=1;X<=h;X++)for(let re=0;re<F;re++){let se=u?L(B[re],ne[re],Me):B[re];y?(I.copy(P.normals[X]).multiplyScalar(se.x),R.copy(P.binormals[X]).multiplyScalar(se.y),x.copy(w[X]).add(I).add(R),pe(x.x,x.y,x.z)):pe(se.x,se.y,p/h*X)}for(let X=m-1;X>=0;X--){let re=X/m,se=f*Math.cos(re*Math.PI/2),be=g*Math.sin(re*Math.PI/2)+v;for(let C=0,Be=z.length;C<Be;C++){let Te=L(z[C],Z[C],be);pe(Te.x,Te.y,p+se)}for(let C=0,Be=T.length;C<Be;C++){let Te=T[C];W=ie[C];for(let Ve=0,xe=Te.length;Ve<xe;Ve++){let A=L(Te[Ve],W[Ve],be);y?pe(A.x,A.y+w[h-1].y,w[h-1].x+se):pe(A.x,A.y,p+se)}}}H(),Q();function H(){let X=r.length/3;if(u){let re=0,se=F*re;for(let be=0;be<ae;be++){let C=ce[be];we(C[2]+se,C[1]+se,C[0]+se)}re=h+m*2,se=F*re;for(let be=0;be<ae;be++){let C=ce[be];we(C[0]+se,C[1]+se,C[2]+se)}}else{for(let re=0;re<ae;re++){let se=ce[re];we(se[2],se[1],se[0])}for(let re=0;re<ae;re++){let se=ce[re];we(se[0]+F*h,se[1]+F*h,se[2]+F*h)}}n.addGroup(X,r.length/3-X,0)}function Q(){let X=r.length/3,re=0;j(z,re),re+=z.length;for(let se=0,be=T.length;se<be;se++){let C=T[se];j(C,re),re+=C.length}n.addGroup(X,r.length/3-X,1)}function j(X,re){let se=X.length;for(;--se>=0;){let be=se,C=se-1;C<0&&(C=X.length-1);for(let Be=0,Te=h+m*2;Be<Te;Be++){let Ve=F*Be,xe=F*(Be+1),A=re+be+Ve,_=re+C+Ve,E=re+C+xe,O=re+be+xe;Ne(A,_,E,O)}}}function pe(X,re,se){c.push(X),c.push(re),c.push(se)}function we(X,re,se){tt(X),tt(re),tt(se);let be=r.length/3,C=M.generateTopUV(n,r,be-3,be-2,be-1);Ge(C[0]),Ge(C[1]),Ge(C[2])}function Ne(X,re,se,be){tt(X),tt(re),tt(be),tt(re),tt(se),tt(be);let C=r.length/3,Be=M.generateSideWallUV(n,r,C-6,C-3,C-2,C-1);Ge(Be[0]),Ge(Be[1]),Ge(Be[3]),Ge(Be[1]),Ge(Be[2]),Ge(Be[3])}function tt(X){r.push(c[X*3+0]),r.push(c[X*3+1]),r.push(c[X*3+2])}function Ge(X){s.push(X.x),s.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wf(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vl[r.type]().fromJSON(r)),new i(n,e.options)}},Sf={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new ue(s,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],u=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-p),new ue(u,1-g),new ue(v,1-d)]:[new ue(a,1-c),new ue(h,1-p),new ue(f,1-g),new ue(m,1-d)]}};function wf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Bi=class i extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,p=e/a,u=t/c,f=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let M=d*u-o;for(let w=0;w<l;w++){let y=w*p-s;g.push(y,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let w=M+l*d,y=M+l*(d+1),P=M+1+l*(d+1),R=M+1+l*d;f.push(w,y,R),f.push(y,P,R)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var us=class extends Nn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let r in n)e[r]=n[r]}return e}function Ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var fu={clone:Hi,merge:Yt},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zo=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ao(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var di=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vo=class extends di{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ol:s=e,a=2*t-n;break;case Bl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ol:o=e,c=2*n-t;break;case Bl:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let P=0;P!==a;++P)s[P]=d*o[h+P]+M*o[l+P]+w*o[c+P]+y*o[p+P];return s}},Ho=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),p=1-h;for(let u=0;u!==a;++u)s[u]=o[l+u]*p+o[c+u]*h;return s}},Go=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends di{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,p=h.inTangents,u=h.outTangents;if(!p||!u){let v=(n-t)/(r-t),m=1-v;for(let d=0;d!==a;++d)s[d]=o[l+d]*m+o[c+d]*v;return s}let f=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[l+v],d=o[c+v],M=g*f+v*2,w=u[M],y=u[M+1],P=e*f+v*2,R=p[P],I=p[P+1],x=(n-t)/(r-t),S,B,T,k,U;for(let G=0;G<8;G++){S=x*x,B=S*x,T=1-x,k=T*T,U=k*T;let L=U*t+3*k*x*w+3*T*S*R+B*r-n;if(Math.abs(L)<1e-10)break;let F=3*k*(w-t)+6*T*x*(R-w)+3*S*(r-R);if(Math.abs(F)<1e-10)break;x=x-L/F,x=Math.max(0,Math.min(1,x))}s[v]=U*m+3*k*x*y+3*T*S*I+B*d}return s}},fn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Hr:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case Ul:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){We("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&_d(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let p=a*n,u=p-n,f=p+n;for(let g=0;g!==n;++g){let v=t[p+g];if(v!==t[u+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=So;var fi=class extends fn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Hr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName="color";var qo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};qo.prototype.ValueTypeName="number";var Yo=class extends di{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)cn.slerpFlat(s,0,o,l-a,o,l,c);return s}},ds=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends fn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Hr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=l.length;p<u;p+=2){let f=l[p],g=l[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new Jo,$o=class{constructor(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ps=class extends fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nl=new ft,Sh=new D,wh=new D,Xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===dr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lo=new D,co=new cn,Cn=new D,ms=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(lo,co,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new D,Eh=new ue,Th=new ue,qt=class extends ms{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mr=class extends ms{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ql=class extends Xl{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ar=-90,lr=1,Ko=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(ar,lr,e,t);r.layers=this.layers,this.add(r);let s=new qt(ar,lr,e,t);s.layers=this.layers,this.add(s);let o=new qt(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new qt(ar,lr,e,t);a.layers=this.layers,this.add(a);let c=new qt(ar,lr,e,t);c.layers=this.layers,this.add(c);let l=new qt(ar,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vc="\\[\\]\\.:\\/",Rf=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",Cf="[^"+vc.replace("\\.","")+"]",Pf=/((?:WC+[\/:])*)/.source.replace("WC",yc),If=/(WCOD+)?/.source.replace("WCOD",Cf),Df=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Lf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Nf=new RegExp("^"+Pf+If+Df+Lf+"$"),Uf=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let r=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rf,"")}static parseTrackName(e){let t=Nf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Uf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Yl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ox=new Float32Array(1);var Sr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var gs=class extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Mc(i,e,t,n){let r=Ff(n);switch(t){case hc:return i*e;case dc:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case ki:return i*e*2/r.components*r.byteLength;case aa:return i*e*2/r.components*r.byteLength;case uc:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case la:return i*e*4/r.components*r.byteLength;case Ms:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ss:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(e,8)/2;case fa:case pa:case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Na:case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ff(i){switch(i){case en:case oc:return{byteLength:1,components:1};case Er:case ac:case Fn:return{byteLength:2,components:1};case ra:case sa:return{byteLength:2,components:4};case En:case ia:case Tn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ou(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],v=p[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,p[u]=v)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let v=p[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Gp=`uniform sampler2D dfgLUT;
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,jm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,c0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,f0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,_0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Zf,alphatest_fragment:Jf,alphatest_pars_fragment:$f,aomap_fragment:Kf,aomap_pars_fragment:jf,batching_pars_vertex:Qf,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:rp,bumpmap_pars_fragment:sp,clipping_planes_fragment:op,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:yp,colorspace_fragment:Mp,colorspace_pars_fragment:bp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Fp,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:kp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:$p,map_fragment:Kp,map_pars_fragment:jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:rm,morphnormal_vertex:sm,morphtarget_pars_vertex:om,morphtarget_vertex:am,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:Mm,dithering_fragment:bm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:km,uv_pars_vertex:Vm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:Zm,cube_frag:Jm,depth_vert:$m,depth_frag:Km,distance_vert:jm,distance_frag:Qm,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:o0,meshlambert_frag:a0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:v0,shadow_vert:y0,shadow_frag:M0,sprite_vert:b0,sprite_frag:S0},Ee={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Yt([Ee.common,Ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Yt([Ee.lights,Ee.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Bn.physical={uniforms:Yt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Ga={r:0,b:0,g:0},Gi=new Sn,w0=new ft;function E0(i,e,t,n,r,s){let o=new it(0),a=r===!0?0:1,c,l,h=null,p=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(M){let w=!1,y=f(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),w=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===vs)?(l===void 0&&(l=new Rt(new hi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Hi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Gi.copy(w.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(Gi)),l.material.toneMapped=rt.getTransfer(y.colorSpace)!==ct,(h!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rt(new Bi(2,2),new dn({name:"BackgroundMaterial",uniforms:Hi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(Ga,xc(i)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,w,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function T0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(T,k,U,G,z){let L=!1,F=p(T,G,U,k);s!==F&&(s=F,l(s.object)),L=f(T,G,U,z),L&&g(T,G,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,y(T,k,U,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function p(T,k,U,G){let z=G.wireframe===!0,L=n[k.id];L===void 0&&(L={},n[k.id]=L);let F=T.isInstancedMesh===!0?T.id:0,te=L[F];te===void 0&&(te={},L[F]=te);let Z=te[U.id];Z===void 0&&(Z={},te[U.id]=Z);let ie=Z[z];return ie===void 0&&(ie=u(c()),Z[z]=ie),ie}function u(T){let k=[],U=[],G=[];for(let z=0;z<t;z++)k[z]=0,U[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:U,attributeDivisors:G,object:T,attributes:{},index:null}}function f(T,k,U,G){let z=s.attributes,L=k.attributes,F=0,te=U.getAttributes();for(let Z in te)if(te[Z].location>=0){let W=z[Z],ne=L[Z];if(ne===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),W===void 0||W.attribute!==ne||ne&&W.data!==ne.data)return!0;F++}return s.attributesNum!==F||s.index!==G}function g(T,k,U,G){let z={},L=k.attributes,F=0,te=U.getAttributes();for(let Z in te)if(te[Z].location>=0){let W=L[Z];W===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(W=T.instanceColor));let ne={};ne.attribute=W,W&&W.data&&(ne.data=W.data),z[Z]=ne,F++}s.attributes=z,s.attributesNum=F,s.index=G}function v(){let T=s.newAttributes;for(let k=0,U=T.length;k<U;k++)T[k]=0}function m(T){d(T,0)}function d(T,k){let U=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;U[T]=1,G[T]===0&&(i.enableVertexAttribArray(T),G[T]=1),z[T]!==k&&(i.vertexAttribDivisor(T,k),z[T]=k)}function M(){let T=s.newAttributes,k=s.enabledAttributes;for(let U=0,G=k.length;U<G;U++)k[U]!==T[U]&&(i.disableVertexAttribArray(U),k[U]=0)}function w(T,k,U,G,z,L,F){F===!0?i.vertexAttribIPointer(T,k,U,z,L):i.vertexAttribPointer(T,k,U,G,z,L)}function y(T,k,U,G){v();let z=G.attributes,L=U.getAttributes(),F=k.defaultAttributeValues;for(let te in L){let Z=L[te];if(Z.location>=0){let ie=z[te];if(ie===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),ie!==void 0){let W=ie.normalized,ne=ie.itemSize,ce=e.get(ie);if(ce===void 0)continue;let ae=ce.buffer,Me=ce.type,H=ce.bytesPerElement,Q=Me===i.INT||Me===i.UNSIGNED_INT||ie.gpuType===ia;if(ie.isInterleavedBufferAttribute){let j=ie.data,pe=j.stride,we=ie.offset;if(j.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Z.locationSize;Ne++)d(Z.location+Ne,j.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)m(Z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ne=0;Ne<Z.locationSize;Ne++)w(Z.location+Ne,ne/Z.locationSize,Me,W,pe*H,(we+ne/Z.locationSize*Ne)*H,Q)}else{if(ie.isInstancedBufferAttribute){for(let j=0;j<Z.locationSize;j++)d(Z.location+j,ie.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let j=0;j<Z.locationSize;j++)m(Z.location+j);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let j=0;j<Z.locationSize;j++)w(Z.location+j,ne/Z.locationSize,Me,W,ne*H,ne/Z.locationSize*j*H,Q)}}else if(F!==void 0){let W=F[te];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(Z.location,W);break;case 3:i.vertexAttrib3fv(Z.location,W);break;case 4:i.vertexAttrib4fv(Z.location,W);break;default:i.vertexAttrib1fv(Z.location,W)}}}}M()}function P(){S();for(let T in n){let k=n[T];for(let U in k){let G=k[U];for(let z in G){let L=G[z];for(let F in L)h(L[F].object),delete L[F];delete G[z]}}delete n[T]}}function R(T){if(n[T.id]===void 0)return;let k=n[T.id];for(let U in k){let G=k[U];for(let z in G){let L=G[z];for(let F in L)h(L[F].object),delete L[F];delete G[z]}}delete n[T.id]}function I(T){for(let k in n){let U=n[k];for(let G in U){let z=U[G];if(z[T.id]===void 0)continue;let L=z[T.id];for(let F in L)h(L[F].object),delete L[F];delete z[T.id]}}}function x(T){for(let k in n){let U=n[k],G=T.isInstancedMesh===!0?T.id:0,z=U[G];if(z!==void 0){for(let L in z){let F=z[L];for(let te in F)h(F[te].object),delete F[te];delete z[L]}delete U[G],Object.keys(U).length===0&&delete n[k]}}}function S(){B(),o=!0,s!==r&&(s=r,l(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function A0(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];t.update(f,n,1)}function c(l,h,p,u){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function R0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let x=I===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==en&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!x)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(He("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:P,samples:R}}function C0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Xt,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||r;return r=u,n=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let M=s?0:n,w=M*4,y=d.clippingState||null;c.value=y,y=h(g,u,w,f);for(let P=0;P!==w;++P)y[P]=t[P];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,f,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=f;w!==v;++w,y+=4)o.copy(p[w]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var yi=4,mu=[.125,.215,.35,.446,.526,.582],Xi=20,P0=256,Es=new Mr,gu=new it,bc=null,Sc=0,wc=0,Ec=!1,I0=new D,Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=I0}=s;bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Fn,format:mn,colorSpace:Li,depthBuffer:!1},r=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D0(s)),this._blurMaterial=N0(s,e,t),this._ggxMaterial=L0(s,e,t)}return r}_compileMaterial(e){let t=new Rt(new kt,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,r,s){let c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(gu),p.toneMapping=wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new hi,new Kr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(gu),d=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let P=this._cubeSize;Rr(r,y*P,w>2?P:0,P,P),p.setRenderTarget(r),d&&p.render(v,c),p.render(e,c)}p.toneMapping=f,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===_i||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Es)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),u=0+l*1.25,f=p*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-yi?n-g+yi:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Rr(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Es),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Rr(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Es)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let h=3,p=this._lodMeshes[r];p.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Xi;m>Xi&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let d=[],M=0;for(let I=0;I<Xi;++I){let x=I/v,S=Math.exp(-x*x/2);d.push(S),I===0?M+=S:I<m&&(M+=2*S)}for(let I=0;I<d.length;I++)d[I]=d[I]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;let y=this._sizeLods[r],P=3*y*(r>w-yi?r-w+yi:0),R=4*(this._cubeSize-y);Rr(t,P,R,3*y,2*y),c.setRenderTarget(t),c.render(p,Es)}};function D0(i){let e=[],t=[],n=[],r=i,s=i-yi+1+mu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-yi?c=mu[o-i+yi-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,p=1+l,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*f),w=new Float32Array(m*g*f),y=new Float32Array(d*g*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,x=R>2?0:-1,S=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];M.set(S,v*g*R),w.set(u,m*g*R);let B=[R,R,R,R,R,R];y.set(B,d*g*R)}let P=new kt;P.setAttribute("position",new $t(M,v)),P.setAttribute("uv",new $t(w,m)),P.setAttribute("faceIndex",new $t(y,d)),n.push(new Rt(P,null)),r>yi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function _u(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function L0(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function N0(i,e,t){let n=new Float32Array(Xi),r=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function xu(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function vu(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Za(){return`

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
	`}var qa=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hi(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Un});s.uniforms.tEquirect.value=t;let o=new Rt(r,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Bt),new Ko(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function U0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===ea||f===ta)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new qa(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===ea||f===ta,v=f===_i||f===zi;if(g||v){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Xa(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Xa(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ea?u.mapping=_i:f===ta&&(u.mapping=zi),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function F0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Xr("WebGLRenderer: "+n+" extension not supported."),r}}}function O0(i,e,t,n){let r={},s=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(p){let u=[],f=p.index,g=p.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let w=0,y=M.length;w<y;w+=3){let P=M[w+0],R=M[w+1],I=M[w+2];u.push(P,R,R,I,I,P)}}else{let M=g.array;v=g.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let P=w+0,R=w+1,I=w+2;u.push(P,R,R,I,I,P)}}let m=new(g.count>=65535?$r:Jr)(u,1);m.version=v;let d=s.get(p);d&&e.remove(d),s.set(p,m)}function h(p){let u=s.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function B0(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,s,u*o),t.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];t.update(m,n,1)}function p(u,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)l(u[d]/o,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*v[M];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function z0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function k0(i,e,t){let n=new WeakMap,r=new Mt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==p){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let y=a.attributes.position.count*w,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*P*4*p),I=new qr(R,y,P,p);I.type=Tn,I.needsUpdate=!0;let x=w*4;for(let B=0;B<p;B++){let T=m[B],k=d[B],U=M[B],G=y*P*4*B;for(let z=0;z<T.count;z++){let L=z*x;f===!0&&(r.fromBufferAttribute(T,z),R[G+L+0]=r.x,R[G+L+1]=r.y,R[G+L+2]=r.z,R[G+L+3]=0),g===!0&&(r.fromBufferAttribute(k,z),R[G+L+4]=r.x,R[G+L+5]=r.y,R[G+L+6]=r.z,R[G+L+7]=0),v===!0&&(r.fromBufferAttribute(U,z),R[G+L+8]=r.x,R[G+L+9]=r.y,R[G+L+10]=r.z,R[G+L+11]=U.itemSize===4?r.w:1)}}u={count:p,texture:I,size:new ue(y,P)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function V0(i,e,t,n,r){let s=new WeakMap;function o(l){let h=r.render.frame,p=l.geometry,u=e.get(l,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var H0={[Ql]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[rc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function G0(i,e,t,n,r){let s=new hn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new hn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),a=new kt;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let c=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Rt(a,c),h=new Mr(-1,1,1,-1,0,1),p=null,u=null,f=!1,g,v=null,m=[],d=!1;this.setSize=function(M,w){s.setSize(M,w),o.setSize(M,w);for(let y=0;y<m.length;y++){let P=m[y];P.setSize&&P.setSize(M,w)}},this.setEffects=function(M){m=M,d=m.length>0&&m[0].isRenderPass===!0;let w=s.width,y=s.height;for(let P=0;P<m.length;P++){let R=m[P];R.setSize&&R.setSize(w,y)}},this.begin=function(M,w){if(f||M.toneMapping===wn&&m.length===0)return!1;if(v=w,w!==null){let y=w.width,P=w.height;(s.width!==y||s.height!==P)&&this.setSize(y,P)}return d===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=wn,!0},this.hasRenderPass=function(){return d},this.end=function(M,w){M.toneMapping=g,f=!0;let y=s,P=o;for(let R=0;R<m.length;R++){let I=m[R];if(I.enabled!==!1&&(I.render(M,P,y,w),I.needsSwap!==!1)){let x=y;y=P,P=x}}if(p!==M.outputColorSpace||u!==M.toneMapping){p=M.outputColorSpace,u=M.toneMapping,c.defines={},rt.getTransfer(p)===ct&&(c.defines.SRGB_TRANSFER="");let R=H0[u];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(v),M.render(l,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var Bu=new Kt,Rc=new ci(1,1),zu=new qr,ku=new To,Vu=new Qr,yu=[],Mu=[],bu=new Float32Array(16),Su=new Float32Array(9),wu=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=yu[r];if(s===void 0&&(s=new Float32Array(r),yu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ja(i,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),Dt(t,n)}}function J0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),Dt(t,n)}}function $0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Dt(t,n)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function sg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=t.isReversedDepthBuffer()?Ha:Va,s=Rc):s=Bu,t.setTexture2D(e||s,r)}function og(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ku,r)}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vu,r)}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zu,r)}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return eg;case 5125:return tg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,e){i.uniform1fv(this.addr,e)}function ug(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function dg(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function fg(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function pg(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mg(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gg(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _g(i,e){i.uniform1iv(this.addr,e)}function xg(i,e){i.uniform2iv(this.addr,e)}function vg(i,e){i.uniform3iv(this.addr,e)}function yg(i,e){i.uniform4iv(this.addr,e)}function Mg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Sg(i,e){i.uniform3uiv(this.addr,e)}function wg(i,e){i.uniform4uiv(this.addr,e)}function Eg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rc:o=Bu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Tg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ku,s[o])}function Ag(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vu,s[o])}function Rg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zu,s[o])}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return xg;case 35668:case 35672:return vg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}var Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cg(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cg(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Eu(i,e){i.seq.push(e),i.map[e.id]=e}function Pg(i,e,t){let n=i.name,r=n.length;for(Tc.lastIndex=0;;){let s=Tc.exec(n),o=Tc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Eu(t,l===void 0?new Cc(a,i,e):new Pc(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Ic(a),Eu(t,p)),t=p}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Pg(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Tu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ig=37297,Dg=0;function Lg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Au=new Ke;function Ng(i){rt._getMatrix(Au,rt.workingColorSpace,i);let e=`mat3( ${Au.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Gr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ru(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Lg(i.getShaderSource(e),a)}else return s}function Ug(i,e){let t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fg={[Ql]:"Linear",[ec]:"Reinhard",[tc]:"Cineon",[xs]:"ACESFilmic",[ic]:"AgX",[rc]:"Neutral",[nc]:"Custom"};function Og(i,e){let t=Fg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new D;function Bg(){rt.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function kg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function Cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(Hg,Wg)}var Gg=new Map;function Wg(i,e){let t=Qe[e];if(t===void 0){let n=Gg.get(e);if(n!==void 0)t=Qe[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(Xg,qg)}function qg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Yg={[_s]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Zg(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jg={[_i]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE_UV"};function $g(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kg={[zi]:"ENVMAP_MODE_REFRACTION"};function jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qg={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function e_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qg[i.combine]||"ENVMAP_BLENDING_NONE"}function t_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n_(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Zg(t),l=$g(t),h=jg(t),p=e_(t),u=t_(t),f=zg(t),g=kg(s),v=r.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Ug("linearToOutputTexel",t.outputColorSpace),Bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Dc(o),o=Cu(o,t),o=Pu(o,t),a=Dc(a),a=Cu(a,t),a=Pu(a,t),o=Iu(o),a=Iu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=M+m+o,y=M+d+a,P=Tu(r,r.VERTEX_SHADER,w),R=Tu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,P),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(T){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(P)||"",G=r.getShaderInfoLog(R)||"",z=k.trim(),L=U.trim(),F=G.trim(),te=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,R);else{let ie=Ru(r,P,"vertex"),W=Ru(r,R,"fragment");We("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+ie+`
`+W)}else z!==""?He("WebGLProgram: Program Info Log:",z):(L===""||F==="")&&(Z=!1);Z&&(T.diagnostics={runnable:te,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(P),r.deleteShader(R),x=new Cr(r,v),S=Vg(r,v)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(v,Ig)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}var i_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nc(e),t.set(e,n)),n}},Nc=class{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}};function r_(i,e,t,n,r,s){let o=new Yr,a=new Lc,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,S,B,T,k){let U=T.fog,G=k.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||z,L),te=F&&F.mapping===vs?F.image.height:null,Z=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,W=ie!==void 0?ie.length:0,ne=0;G.morphAttributes.position!==void 0&&(ne=1),G.morphAttributes.normal!==void 0&&(ne=2),G.morphAttributes.color!==void 0&&(ne=3);let ce,ae,Me,H;if(Z){let ht=Bn[Z];ce=ht.vertexShader,ae=ht.fragmentShader}else ce=x.vertexShader,ae=x.fragmentShader,a.update(x),Me=a.getVertexShaderID(x),H=a.getFragmentShaderID(x);let Q=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ne=!!x.map,tt=!!x.matcap,Ge=!!F,X=!!x.aoMap,re=!!x.lightMap,se=!!x.bumpMap,be=!!x.normalMap,C=!!x.displacementMap,Be=!!x.emissiveMap,Te=!!x.metalnessMap,Ve=!!x.roughnessMap,xe=x.anisotropy>0,A=x.clearcoat>0,_=x.dispersion>0,E=x.iridescence>0,O=x.sheen>0,K=x.transmission>0,J=xe&&!!x.anisotropyMap,ge=A&&!!x.clearcoatMap,fe=A&&!!x.clearcoatNormalMap,Pe=A&&!!x.clearcoatRoughnessMap,Se=E&&!!x.iridescenceMap,oe=E&&!!x.iridescenceThicknessMap,he=O&&!!x.sheenColorMap,_e=O&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,Ae=!!x.specularColorMap,Ze=!!x.specularIntensityMap,N=K&&!!x.transmissionMap,ve=K&&!!x.thicknessMap,ye=!!x.gradientMap,Le=!!x.alphaMap,me=x.alphaTest>0,ee=!!x.alphaHash,Ue=!!x.extensions,Ye=wn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let gt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:ae,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Li,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:tt,envMap:Ge,envMapMode:Ge&&F.mapping,envMapCubeUVHeight:te,aoMap:X,lightMap:re,bumpMap:se,normalMap:be,displacementMap:C,emissiveMap:Be,normalMapObjectSpace:be&&x.normalMapType===Kh,normalMapTangentSpace:be&&x.normalMapType===fc,metalnessMap:Te,roughnessMap:Ve,anisotropy:xe,anisotropyMap:J,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:fe,clearcoatRoughnessMap:Pe,dispersion:_,iridescence:E,iridescenceMap:Se,iridescenceThicknessMap:oe,sheen:O,sheenColorMap:he,sheenRoughnessMap:_e,specularMap:Ie,specularColorMap:Ae,specularIntensityMap:Ze,transmission:K,transmissionMap:N,thicknessMap:ve,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Ii&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:ee,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:X&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:se&&g(x.bumpMap.channel),normalMapUv:be&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:Be&&g(x.emissiveMap.channel),metalnessMapUv:Te&&g(x.metalnessMap.channel),roughnessMapUv:Ve&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ge&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:Ie&&g(x.specularMap.channel),specularColorMapUv:Ae&&g(x.specularColorMap.channel),specularIntensityMapUv:Ze&&g(x.specularIntensityMap.channel),transmissionMapUv:N&&g(x.transmissionMap.channel),thicknessMapUv:ve&&g(x.thicknessMap.channel),alphaMapUv:Le&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||xe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Ne||Le),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:j,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)S.push(B),S.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(d(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function d(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){let S=f[x.type],B;if(S){let T=Bn[S];B=fu.clone(T.uniforms)}else B=x.uniforms;return B}function y(x,S){let B=h.get(S);return B!==void 0?++B.usedTimes:(B=new n_(i,S,x,r),l.push(B),h.set(S,B)),B}function P(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){a.remove(x)}function I(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:P,releaseShaderCache:R,programs:l,dispose:I}}function s_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function o_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function c(u,f,g,v,m,d){let M=a(u,f,g,v,m,d);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function l(u,f,g,v,m,d){let M=a(u,f,g,v,m,d);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||o_),n.length>1&&n.sort(f||Lu),r.length>1&&r.sort(f||Lu)}function p(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:h}}function a_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Nu,i.set(n,[o])):r>=s.length?(o=new Nu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function l_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new it};break;case"SpotLight":t={position:new D,direction:new D,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var h_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d_(i){let e=new l_,t=c_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new ft,o=new ft;function a(l){let h=0,p=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,d=0,M=0,w=0,y=0,P=0,R=0,I=0;l.sort(u_);for(let S=0,B=l.length;S<B;S++){let T=l[S],k=T.color,U=T.intensity,G=T.distance,z=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ki?z=T.shadow.map.texture:z=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=k.r*U,p+=k.g*U,u+=k.b*U;else if(T.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(T.sh.coefficients[L],U);I++}else if(T.isDirectionalLight){let L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let F=T.shadow,te=t.get(T);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=T.shadow.matrix,M++}n.directional[f]=L,f++}else if(T.isSpotLight){let L=e.get(T);L.position.setFromMatrixPosition(T.matrixWorld),L.color.copy(k).multiplyScalar(U),L.distance=G,L.coneCos=Math.cos(T.angle),L.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),L.decay=T.decay,n.spot[v]=L;let F=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,F.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[v]=F.matrix,T.castShadow){let te=t.get(T);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,n.spotShadow[v]=te,n.spotShadowMap[v]=z,y++}v++}else if(T.isRectAreaLight){let L=e.get(T);L.color.copy(k).multiplyScalar(U),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=L,m++}else if(T.isPointLight){let L=e.get(T);if(L.color.copy(T.color).multiplyScalar(T.intensity),L.distance=T.distance,L.decay=T.decay,T.castShadow){let F=T.shadow,te=t.get(T);te.shadowIntensity=F.intensity,te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,te.shadowCameraNear=F.camera.near,te.shadowCameraFar=F.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=L,g++}else if(T.isHemisphereLight){let L=e.get(T);L.skyColor.copy(T.color).multiplyScalar(U),L.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[d]=L,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==M||x.numPointShadows!==w||x.numSpotShadows!==y||x.numSpotMaps!==P||x.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=M,x.numPointShadows=w,x.numSpotShadows=y,x.numSpotMaps=P,x.numLightProbes=I,n.version=h_++)}function c(l,h){let p=0,u=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){let w=l[d];if(w.isDirectionalLight){let y=n.directional[p];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(w.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Uu(i){let e=new d_(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function f_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Uu(i),e.set(r,[a])):s>=o.length?(a=new Uu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`,g_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],__=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Fu=new ft,Ts=new D,Ac=new D;function x_(i,e,t){let n=new _r,r=new ue,s=new ue,o=new Mt,a=new zo,c=new ko,l={},h=t.maxTextureSize,p={[Jn]:jt,[jt]:Jn,[Qt]:Qt},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let d=this.type;this.render=function(R,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Qo&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);let S=i.getRenderTarget(),B=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Un),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let U=d!==this.type;U&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(z=>z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,z=R.length;G<z;G++){let L=R[G],F=L.shadow;if(F===void 0){He("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let te=F.getFrameExtents();r.multiply(te),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,F.mapSize.y=s.y));let Z=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wr){if(L.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hn(r.x,r.y,{format:ki,type:Fn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new ci(r.x,r.y,Tn),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=In,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft}else L.isPointLight?(F.map=new qa(r.x),F.map.depthTexture=new Io(r.x,En)):(F.map=new hn(r.x,r.y),F.map.depthTexture=new ci(r.x,r.y,En)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=In,this.type===_s?(F.map.depthTexture.compareFunction=Z?Ha:Va,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft);F.camera.updateProjectionMatrix()}let ie=F.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<ie;W++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,W),i.clear();else{W===0&&(i.setRenderTarget(F.map),i.clear());let ne=F.getViewport(W);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),k.viewport(o)}if(L.isPointLight){let ne=F.camera,ce=F.matrix,ae=L.distance||ne.far;ae!==ne.far&&(ne.far=ae,ne.updateProjectionMatrix()),Ts.setFromMatrixPosition(L.matrixWorld),ne.position.copy(Ts),Ac.copy(ne.position),Ac.add(g_[W]),ne.up.copy(__[W]),ne.lookAt(Ac),ne.updateMatrixWorld(),ce.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Fu.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Fu,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(L);n=F.getFrustum(),y(I,x,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===wr&&M(F,x),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,B,T)};function M(R,I){let x=e.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hn(r.x,r.y,{format:ki,type:Fn})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,x,u,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,x,f,v,null)}function w(R,I,x,S){let B=null,T=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)B=T;else if(B=x.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=B.uuid,U=I.uuid,G=l[k];G===void 0&&(G={},l[k]=G);let z=G[U];z===void 0&&(z=B.clone(),G[U]=z,I.addEventListener("dispose",P)),B=z}if(B.visible=I.visible,B.wireframe=I.wireframe,S===wr?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:p[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let k=i.properties.get(B);k.light=x}return B}function y(R,I,x,S,B){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===wr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let U=e.update(R),G=R.material;if(Array.isArray(G)){let z=U.groups;for(let L=0,F=z.length;L<F;L++){let te=z[L],Z=G[te.materialIndex];if(Z&&Z.visible){let ie=w(R,Z,S,B);R.onBeforeShadow(i,R,I,x,U,ie,te),i.renderBufferDirect(x,null,U,ie,R,te),R.onAfterShadow(i,R,I,x,U,ie,te)}}}else if(G.visible){let z=w(R,G,S,B);R.onBeforeShadow(i,R,I,x,U,z,null),i.renderBufferDirect(x,null,U,z,R,null),R.onAfterShadow(i,R,I,x,U,z,null)}}let k=R.children;for(let U=0,G=k.length;U<G;U++)y(k[U],I,x,S,B)}function P(R){R.target.removeEventListener("dispose",P);for(let x in l){let S=l[x],B=R.target.uuid;B in S&&(S[B].dispose(),delete S[B])}}}function v_(i,e){function t(){let N=!1,ve=new Mt,ye=null,Le=new Mt(0,0,0,0);return{setMask:function(me){ye!==me&&!N&&(i.colorMask(me,me,me,me),ye=me)},setLocked:function(me){N=me},setClear:function(me,ee,Ue,Ye,gt){gt===!0&&(me*=Ye,ee*=Ye,Ue*=Ye),ve.set(me,ee,Ue,Ye),Le.equals(ve)===!1&&(i.clearColor(me,ee,Ue,Ye),Le.copy(ve))},reset:function(){N=!1,ye=null,Le.set(-1,0,0,0)}}}function n(){let N=!1,ve=!1,ye=null,Le=null,me=null;return{setReversed:function(ee){if(ve!==ee){let Ue=e.get("EXT_clip_control");ee?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ve=ee;let Ye=me;me=null,this.setClear(Ye)}},getReversed:function(){return ve},setTest:function(ee){ee?Q(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(ee){ye!==ee&&!N&&(i.depthMask(ee),ye=ee)},setFunc:function(ee){if(ve&&(ee=au[ee]),Le!==ee){switch(ee){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ee}},setLocked:function(ee){N=ee},setClear:function(ee){me!==ee&&(me=ee,ve&&(ee=1-ee),i.clearDepth(ee))},reset:function(){N=!1,ye=null,Le=null,me=null,ve=!1}}}function r(){let N=!1,ve=null,ye=null,Le=null,me=null,ee=null,Ue=null,Ye=null,gt=null;return{setTest:function(ht){N||(ht?Q(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(ht){ve!==ht&&!N&&(i.stencilMask(ht),ve=ht)},setFunc:function(ht,kn,Vn){(ye!==ht||Le!==kn||me!==Vn)&&(i.stencilFunc(ht,kn,Vn),ye=ht,Le=kn,me=Vn)},setOp:function(ht,kn,Vn){(ee!==ht||Ue!==kn||Ye!==Vn)&&(i.stencilOp(ht,kn,Vn),ee=ht,Ue=kn,Ye=Vn)},setLocked:function(ht){N=ht},setClear:function(ht){gt!==ht&&(i.clearStencil(ht),gt=ht)},reset:function(){N=!1,ve=null,ye=null,Le=null,me=null,ee=null,Ue=null,Ye=null,gt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},p={},u=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,w=null,y=null,P=null,R=null,I=new it(0,0,0),x=0,S=!1,B=null,T=null,k=null,U=null,G=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,F=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(te)[1]),L=F>=1):te.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),L=F>=2);let Z=null,ie={},W=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ce=new Mt().fromArray(W),ae=new Mt().fromArray(ne);function Me(N,ve,ye,Le){let me=new Uint8Array(4),ee=i.createTexture();i.bindTexture(N,ee),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<ye;Ue++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ve+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ee}let H={};H[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Di),se(!1),be(Zl),Q(i.CULL_FACE),X(Un);function Q(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function j(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function pe(N,ve){return p[N]!==ve?(i.bindFramebuffer(N,ve),p[N]=ve,N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ve),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function we(N,ve){let ye=f,Le=!1;if(N){ye=u.get(ve),ye===void 0&&(ye=[],u.set(ve,ye));let me=N.textures;if(ye.length!==me.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ue=me.length;ee<Ue;ee++)ye[ee]=i.COLOR_ATTACHMENT0+ee;ye.length=me.length,Le=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Le=!0);Le&&i.drawBuffers(ye)}function Ne(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let tt={[li]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};tt[Dh]=i.MIN,tt[Lh]=i.MAX;let Ge={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function X(N,ve,ye,Le,me,ee,Ue,Ye,gt,ht){if(N===Un){v===!0&&(j(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),N!==Ch){if(N!==m||ht!==S){if((d!==li||y!==li)&&(i.blendEquation(i.FUNC_ADD),d=li,y=li),ht)switch(N){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}M=null,w=null,P=null,R=null,I.set(0,0,0),x=0,m=N,S=ht}return}me=me||ve,ee=ee||ye,Ue=Ue||Le,(ve!==d||me!==y)&&(i.blendEquationSeparate(tt[ve],tt[me]),d=ve,y=me),(ye!==M||Le!==w||ee!==P||Ue!==R)&&(i.blendFuncSeparate(Ge[ye],Ge[Le],Ge[ee],Ge[Ue]),M=ye,w=Le,P=ee,R=Ue),(Ye.equals(I)===!1||gt!==x)&&(i.blendColor(Ye.r,Ye.g,Ye.b,gt),I.copy(Ye),x=gt),m=N,S=!1}function re(N,ve){N.side===Qt?j(i.CULL_FACE):Q(i.CULL_FACE);let ye=N.side===jt;ve&&(ye=!ye),se(ye),N.blending===Ii&&N.transparent===!1?X(Un):X(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let Le=N.stencilWrite;a.setTest(Le),Le&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function be(N){N!==Ah?(Q(i.CULL_FACE),N!==T&&(N===Zl?i.cullFace(i.BACK):N===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),T=N}function C(N){N!==k&&(L&&i.lineWidth(N),k=N)}function Be(N,ve,ye){N?(Q(i.POLYGON_OFFSET_FILL),(U!==ve||G!==ye)&&(U=ve,G=ye,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ye))):j(i.POLYGON_OFFSET_FILL)}function Te(N){N?Q(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=i.TEXTURE0+z-1),Z!==N&&(i.activeTexture(N),Z=N)}function xe(N,ve,ye){ye===void 0&&(Z===null?ye=i.TEXTURE0+z-1:ye=Z);let Le=ie[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ie[ye]=Le),(Le.type!==N||Le.texture!==ve)&&(Z!==ye&&(i.activeTexture(ye),Z=ye),i.bindTexture(N,ve||H[N]),Le.type=N,Le.texture=ve)}function A(){let N=ie[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function O(){try{i.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function K(){try{i.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function fe(){try{i.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Pe(){try{i.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Se(){try{i.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function oe(){try{i.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function he(N){ce.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ce.copy(N))}function _e(N){ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function Ie(N,ve){let ye=l.get(ve);ye===void 0&&(ye=new WeakMap,l.set(ve,ye));let Le=ye.get(N);Le===void 0&&(Le=i.getUniformBlockIndex(ve,N.name),ye.set(N,Le))}function Ae(N,ve){let Le=l.get(ve).get(N);c.get(ve)!==Le&&(i.uniformBlockBinding(ve,Le,N.__bindingPointIndex),c.set(ve,Le))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,ie={},p={},u=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,w=null,y=null,P=null,R=null,I=new it(0,0,0),x=0,S=!1,B=null,T=null,k=null,U=null,G=null,ce.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:j,bindFramebuffer:pe,drawBuffers:we,useProgram:Ne,setBlending:X,setMaterial:re,setFlipSided:se,setCullFace:be,setLineWidth:C,setPolygonOffset:Be,setScissorTest:Te,activeTexture:Ve,bindTexture:xe,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:E,texImage2D:Se,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:Ae,texStorage2D:fe,texStorage3D:Pe,texSubImage2D:O,texSubImage3D:K,compressedTexSubImage2D:J,compressedTexSubImage3D:ge,scissor:he,viewport:_e,reset:Ze}}function y_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):Wr("canvas")}function v(A,_,E){let O=1,K=xe(A);if((K.width>E||K.height>E)&&(O=E/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(O*K.width),ge=Math.floor(O*K.height);p===void 0&&(p=g(J,ge));let fe=_?g(J,ge):p;return fe.width=J,fe.height=ge,fe.getContext("2d").drawImage(A,0,0,J,ge),He("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+ge+")."),fe}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,_,E,O,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===i.RED&&(E===i.FLOAT&&(J=i.R32F),E===i.HALF_FLOAT&&(J=i.R16F),E===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(E===i.UNSIGNED_BYTE&&(J=i.R8UI),E===i.UNSIGNED_SHORT&&(J=i.R16UI),E===i.UNSIGNED_INT&&(J=i.R32UI),E===i.BYTE&&(J=i.R8I),E===i.SHORT&&(J=i.R16I),E===i.INT&&(J=i.R32I)),_===i.RG&&(E===i.FLOAT&&(J=i.RG32F),E===i.HALF_FLOAT&&(J=i.RG16F),E===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(E===i.UNSIGNED_BYTE&&(J=i.RG8UI),E===i.UNSIGNED_SHORT&&(J=i.RG16UI),E===i.UNSIGNED_INT&&(J=i.RG32UI),E===i.BYTE&&(J=i.RG8I),E===i.SHORT&&(J=i.RG16I),E===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(E===i.UNSIGNED_BYTE&&(J=i.RGB8UI),E===i.UNSIGNED_SHORT&&(J=i.RGB16UI),E===i.UNSIGNED_INT&&(J=i.RGB32UI),E===i.BYTE&&(J=i.RGB8I),E===i.SHORT&&(J=i.RGB16I),E===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(E===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),E===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),E===i.UNSIGNED_INT&&(J=i.RGBA32UI),E===i.BYTE&&(J=i.RGBA8I),E===i.SHORT&&(J=i.RGBA16I),E===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(E===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),E===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let ge=K?Gr:rt.getTransfer(O);E===i.FLOAT&&(J=i.RGBA32F),E===i.HALF_FLOAT&&(J=i.RGBA16F),E===i.UNSIGNED_BYTE&&(J=ge===ct?i.SRGB8_ALPHA8:i.RGBA8),E===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),E===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(A,_){let E;return A?_===null||_===En||_===Tr?E=i.DEPTH24_STENCIL8:_===Tn?E=i.DEPTH32F_STENCIL8:_===Er&&(E=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===Tr?E=i.DEPTH_COMPONENT24:_===Tn?E=i.DEPTH_COMPONENT32F:_===Er&&(E=i.DEPTH_COMPONENT16),E}function P(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),x(_),_.isVideoTexture&&h.delete(_)}function I(A){let _=A.target;_.removeEventListener("dispose",I),B(_)}function x(A){let _=n.get(A);if(_.__webglInit===void 0)return;let E=A.source,O=u.get(E);if(O){let K=O[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(O).length===0&&u.delete(E)}n.remove(A)}function S(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let E=A.source,O=u.get(E);delete O[_.__cacheKey],o.memory.textures--}function B(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(_.__webglFramebuffer[O]))for(let K=0;K<_.__webglFramebuffer[O].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[O][K]);else i.deleteFramebuffer(_.__webglFramebuffer[O]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[O])}else{if(Array.isArray(_.__webglFramebuffer))for(let O=0;O<_.__webglFramebuffer.length;O++)i.deleteFramebuffer(_.__webglFramebuffer[O]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let O=0;O<_.__webglColorRenderbuffer.length;O++)_.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[O]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let E=A.textures;for(let O=0,K=E.length;O<K;O++){let J=n.get(E[O]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(E[O])}n.remove(A)}let T=0;function k(){T=0}function U(){let A=T;return A>=r.maxTextures&&He("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),T+=1,A}function G(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function z(A,_){let E=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&E.__version!==A.version){let O=A.image;if(O===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{H(E,A,_);return}}else A.isExternalTexture&&(E.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,E.__webglTexture,i.TEXTURE0+_)}function L(A,_){let E=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&E.__version!==A.version){H(E,A,_);return}else A.isExternalTexture&&(E.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,E.__webglTexture,i.TEXTURE0+_)}function F(A,_){let E=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&E.__version!==A.version){H(E,A,_);return}t.bindTexture(i.TEXTURE_3D,E.__webglTexture,i.TEXTURE0+_)}function te(A,_){let E=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&E.__version!==A.version){Q(E,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+_)}let Z={[Mo]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},ie={[Ft]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},W={[jh]:i.NEVER,[iu]:i.ALWAYS,[Qh]:i.LESS,[Va]:i.LEQUAL,[eu]:i.EQUAL,[Ha]:i.GEQUAL,[tu]:i.GREATER,[nu]:i.NOTEQUAL};function ne(A,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===na||_.magFilter===ys||_.magFilter===xi||_.minFilter===Bt||_.minFilter===na||_.minFilter===ys||_.minFilter===xi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ie[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,W[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ft||_.minFilter!==ys&&_.minFilter!==xi||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let E=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ce(A,_){let E=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let O=_.source,K=u.get(O);K===void 0&&(K={},u.set(O,K));let J=G(_);if(J!==A.__cacheKey){K[J]===void 0&&(K[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,E=!0),K[J].usedTimes++;let ge=K[A.__cacheKey];ge!==void 0&&(K[A.__cacheKey].usedTimes--,ge.usedTimes===0&&S(_)),A.__cacheKey=J,A.__webglTexture=K[J].texture}return E}function ae(A,_,E){return Math.floor(Math.floor(A/E)/_)}function Me(A,_,E,O){let J=A.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,E,O,_.data);else{J.sort((oe,he)=>oe.start-he.start);let ge=0;for(let oe=1;oe<J.length;oe++){let he=J[ge],_e=J[oe],Ie=he.start+he.count,Ae=ae(_e.start,_.width,4),Ze=ae(he.start,_.width,4);_e.start<=Ie+1&&Ae===Ze&&ae(_e.start+_e.count-1,_.width,4)===Ae?he.count=Math.max(he.count,_e.start+_e.count-he.start):(++ge,J[ge]=_e)}J.length=ge+1;let fe=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let oe=0,he=J.length;oe<he;oe++){let _e=J[oe],Ie=Math.floor(_e.start/4),Ae=Math.ceil(_e.count/4),Ze=Ie%_.width,N=Math.floor(Ie/_.width),ve=Ae,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,ve,ye,E,O,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,fe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function H(A,_,E){let O=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(O=i.TEXTURE_3D);let K=ce(A,_),J=_.source;t.bindTexture(O,A.__webglTexture,i.TEXTURE0+E);let ge=n.get(J);if(J.version!==ge.__version||K===!0){t.activeTexture(i.TEXTURE0+E);let fe=rt.getPrimaries(rt.workingColorSpace),Pe=_.colorSpace===Kn?null:rt.getPrimaries(_.colorSpace),Se=_.colorSpace===Kn||fe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let oe=v(_.image,!1,r.maxTextureSize);oe=Ve(_,oe);let he=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),Ie=w(_.internalFormat,he,_e,_.colorSpace,_.isVideoTexture);ne(O,_);let Ae,Ze=_.mipmaps,N=_.isVideoTexture!==!0,ve=ge.__version===void 0||K===!0,ye=J.dataReady,Le=P(_,oe);if(_.isDepthTexture)Ie=y(_.format===vi,_.type),ve&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,he,_e,null));else if(_.isDataTexture)if(Ze.length>0){N&&ve&&t.texStorage2D(i.TEXTURE_2D,Le,Ie,Ze[0].width,Ze[0].height);for(let me=0,ee=Ze.length;me<ee;me++)Ae=Ze[me],N?ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ae.width,Ae.height,he,_e,Ae.data):t.texImage2D(i.TEXTURE_2D,me,Ie,Ae.width,Ae.height,0,he,_e,Ae.data);_.generateMipmaps=!1}else N?(ve&&t.texStorage2D(i.TEXTURE_2D,Le,Ie,oe.width,oe.height),ye&&Me(_,oe,he,_e)):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,he,_e,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ie,Ze[0].width,Ze[0].height,oe.depth);for(let me=0,ee=Ze.length;me<ee;me++)if(Ae=Ze[me],_.format!==mn)if(he!==null)if(N){if(ye)if(_.layerUpdates.size>0){let Ue=Mc(Ae.width,Ae.height,_.format,_.type);for(let Ye of _.layerUpdates){let gt=Ae.data.subarray(Ye*Ue/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ye,Ae.width,Ae.height,1,he,gt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,oe.depth,he,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Ie,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,oe.depth,he,_e,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Ie,Ae.width,Ae.height,oe.depth,0,he,_e,Ae.data)}else{N&&ve&&t.texStorage2D(i.TEXTURE_2D,Le,Ie,Ze[0].width,Ze[0].height);for(let me=0,ee=Ze.length;me<ee;me++)Ae=Ze[me],_.format!==mn?he!==null?N?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ae.width,Ae.height,he,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Ie,Ae.width,Ae.height,0,Ae.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ae.width,Ae.height,he,_e,Ae.data):t.texImage2D(i.TEXTURE_2D,me,Ie,Ae.width,Ae.height,0,he,_e,Ae.data)}else if(_.isDataArrayTexture)if(N){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ie,oe.width,oe.height,oe.depth),ye)if(_.layerUpdates.size>0){let me=Mc(oe.width,oe.height,_.format,_.type);for(let ee of _.layerUpdates){let Ue=oe.data.subarray(ee*me/oe.data.BYTES_PER_ELEMENT,(ee+1)*me/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,he,_e,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,he,_e,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,he,_e,oe.data);else if(_.isData3DTexture)N?(ve&&t.texStorage3D(i.TEXTURE_3D,Le,Ie,oe.width,oe.height,oe.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,he,_e,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,he,_e,oe.data);else if(_.isFramebufferTexture){if(ve)if(N)t.texStorage2D(i.TEXTURE_2D,Le,Ie,oe.width,oe.height);else{let me=oe.width,ee=oe.height;for(let Ue=0;Ue<Le;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ie,me,ee,0,he,_e,null),me>>=1,ee>>=1}}else if(Ze.length>0){if(N&&ve){let me=xe(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ie,me.width,me.height)}for(let me=0,ee=Ze.length;me<ee;me++)Ae=Ze[me],N?ye&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,he,_e,Ae):t.texImage2D(i.TEXTURE_2D,me,Ie,he,_e,Ae);_.generateMipmaps=!1}else if(N){if(ve){let me=xe(oe);t.texStorage2D(i.TEXTURE_2D,Le,Ie,me.width,me.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,_e,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,he,_e,oe);m(_)&&d(O),ge.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,E){if(_.image.length!==6)return;let O=ce(A,_),K=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+E);let J=n.get(K);if(K.version!==J.__version||O===!0){t.activeTexture(i.TEXTURE0+E);let ge=rt.getPrimaries(rt.workingColorSpace),fe=_.colorSpace===Kn?null:rt.getPrimaries(_.colorSpace),Pe=_.colorSpace===Kn||ge===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!Se&&!oe?he[ee]=v(_.image[ee],!0,r.maxCubemapSize):he[ee]=oe?_.image[ee].image:_.image[ee],he[ee]=Ve(_,he[ee]);let _e=he[0],Ie=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type),Ze=w(_.internalFormat,Ie,Ae,_.colorSpace),N=_.isVideoTexture!==!0,ve=J.__version===void 0||O===!0,ye=K.dataReady,Le=P(_,_e);ne(i.TEXTURE_CUBE_MAP,_);let me;if(Se){N&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,_e.width,_e.height);for(let ee=0;ee<6;ee++){me=he[ee].mipmaps;for(let Ue=0;Ue<me.length;Ue++){let Ye=me[Ue];_.format!==mn?Ie!==null?N?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue,0,0,Ye.width,Ye.height,Ie,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue,Ze,Ye.width,Ye.height,0,Ye.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue,0,0,Ye.width,Ye.height,Ie,Ae,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue,Ze,Ye.width,Ye.height,0,Ie,Ae,Ye.data)}}}else{if(me=_.mipmaps,N&&ve){me.length>0&&Le++;let ee=xe(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Ie,Ae,he[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,he[ee].width,he[ee].height,0,Ie,Ae,he[ee].data);for(let Ue=0;Ue<me.length;Ue++){let gt=me[Ue].image[ee].image;N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue+1,0,0,gt.width,gt.height,Ie,Ae,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue+1,Ze,gt.width,gt.height,0,Ie,Ae,gt.data)}}else{N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,Ae,he[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ie,Ae,he[ee]);for(let Ue=0;Ue<me.length;Ue++){let Ye=me[Ue];N?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue+1,0,0,Ie,Ae,Ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ue+1,Ze,Ie,Ae,Ye.image[ee])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),J.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function j(A,_,E,O,K,J){let ge=s.convert(E.format,E.colorSpace),fe=s.convert(E.type),Pe=w(E.internalFormat,ge,fe,E.colorSpace),Se=n.get(_),oe=n.get(E);if(oe.__renderTarget=_,!Se.__hasExternalTextures){let he=Math.max(1,_.width>>J),_e=Math.max(1,_.height>>J);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,J,Pe,he,_e,_.depth,0,ge,fe,null):t.texImage2D(K,J,Pe,he,_e,0,ge,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,K,oe.__webglTexture,0,C(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,K,oe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,_,E){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let O=_.depthTexture,K=O&&O.isDepthTexture?O.type:null,J=y(_.stencilBuffer,K),ge=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),J,_.width,_.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,A)}else{let O=_.textures;for(let K=0;K<O.length;K++){let J=O[K],ge=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Pe=w(J.internalFormat,ge,fe,J.colorSpace);Be(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),Pe,_.width,_.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),Pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(A,_,E){let O=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ne(i.TEXTURE_CUBE_MAP,_.depthTexture);let Se=s.convert(_.depthTexture.format),oe=s.convert(_.depthTexture.type),he;_.depthTexture.format===In?he=i.DEPTH_COMPONENT24:_.depthTexture.format===vi&&(he=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,he,_.width,_.height,0,Se,oe,null)}}else z(_.depthTexture,0);let J=K.__webglTexture,ge=C(_),fe=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+E:i.TEXTURE_2D,Pe=_.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===In)Be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,fe,J,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,fe,J,0);else if(_.depthTexture.format===vi)Be(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Pe,fe,J,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,Pe,fe,J,0);else throw new Error("Unknown depthTexture format")}function Ne(A){let _=n.get(A),E=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),O){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=O}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(E)for(let O=0;O<6;O++)we(_.__webglFramebuffer[O],A,O);else{let O=A.texture.mipmaps;O&&O.length>0?we(_.__webglFramebuffer[0],A,0):we(_.__webglFramebuffer,A,0)}else if(E){_.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[O]),_.__webglDepthbuffer[O]===void 0)_.__webglDepthbuffer[O]=i.createRenderbuffer(),pe(_.__webglDepthbuffer[O],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}}else{let O=A.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pe(_.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,_,E){let O=n.get(A);_!==void 0&&j(O.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),E!==void 0&&Ne(A)}function Ge(A){let _=A.texture,E=n.get(A),O=n.get(_);A.addEventListener("dispose",I);let K=A.textures,J=A.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=_.version,o.memory.textures++),J){E.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){E.__webglFramebuffer[fe]=[];for(let Pe=0;Pe<_.mipmaps.length;Pe++)E.__webglFramebuffer[fe][Pe]=i.createFramebuffer()}else E.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){E.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)E.__webglFramebuffer[fe]=i.createFramebuffer()}else E.__webglFramebuffer=i.createFramebuffer();if(ge)for(let fe=0,Pe=K.length;fe<Pe;fe++){let Se=n.get(K[fe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Be(A)===!1){E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let fe=0;fe<K.length;fe++){let Pe=K[fe];E.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,E.__webglColorRenderbuffer[fe]);let Se=s.convert(Pe.format,Pe.colorSpace),oe=s.convert(Pe.type),he=w(Pe.internalFormat,Se,oe,Pe.colorSpace,A.isXRRenderTarget===!0),_e=C(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,E.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(E.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ne(i.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)j(E.__webglFramebuffer[fe][Pe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Pe);else j(E.__webglFramebuffer[fe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let fe=0,Pe=K.length;fe<Pe;fe++){let Se=K[fe],oe=n.get(Se),he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,oe.__webglTexture),ne(he,Se),j(E.__webglFramebuffer,A,Se,i.COLOR_ATTACHMENT0+fe,he,0),m(Se)&&d(he)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,O.__webglTexture),ne(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Pe=0;Pe<_.mipmaps.length;Pe++)j(E.__webglFramebuffer[Pe],A,_,i.COLOR_ATTACHMENT0,fe,Pe);else j(E.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,fe,0);m(_)&&d(fe),t.unbindTexture()}A.depthBuffer&&Ne(A)}function X(A){let _=A.textures;for(let E=0,O=_.length;E<O;E++){let K=_[E];if(m(K)){let J=M(A),ge=n.get(K).__webglTexture;t.bindTexture(J,ge),d(J),t.unbindTexture()}}}let re=[],se=[];function be(A){if(A.samples>0){if(Be(A)===!1){let _=A.textures,E=A.width,O=A.height,K=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(A),fe=_.length>1;if(fe)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let Pe=A.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);let oe=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,E,O,0,0,E,O,K,i.NEAREST),c===!0&&(re.length=0,se.length=0,re.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(J),se.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);let oe=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C(A){return Math.min(r.maxSamples,A.samples)}function Be(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ve(A,_){let E=A.colorSpace,O=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||E!==Li&&E!==Kn&&(rt.getTransfer(E)===ct?(O!==mn||K!==en)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",E)),_}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=te,this.rebindTextures=tt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M_(i,e){function t(n,r=Kn){let s,o=rt.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oc)return i.BYTE;if(n===ac)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===uc)return i.RGB;if(n===mn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===Ms||n===bs||n===Ss||n===ws)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fa||n===pa)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ma)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ga)return s.COMPRESSED_R11_EAC;if(n===_a)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return s.COMPRESSED_RG11_EAC;if(n===va)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===La)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Ua||n===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Na)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ts(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:b_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Dn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Uc,d={},M=t.getContextAttributes(),w=null,y=null,P=[],R=[],I=new ue,x=null,S=new qt;S.viewport=new Mt;let B=new qt;B.viewport=new Mt;let T=[S,B],k=new jo,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=P[H];return Q===void 0&&(Q=new gr,P[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=P[H];return Q===void 0&&(Q=new gr,P[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=P[H];return Q===void 0&&(Q=new gr,P[H]=Q),Q.getHandSpace()};function z(H){let Q=R.indexOf(H.inputSource);if(Q===-1)return;let j=P[Q];j!==void 0&&(j.update(H.inputSource,H.frame,l||o),j.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",F);for(let H=0;H<P.length;H++){let Q=R[H];Q!==null&&(R[H]=null,P[H].disconnect(Q))}U=null,G=null,m.reset();for(let H in d)delete d[H];e.setRenderTarget(w),f=null,u=null,p=null,r=null,y=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",L),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,pe=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=M.stencil?vi:In,pe=M.stencil?Tr:En);let Ne={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new hn(u.textureWidth,u.textureHeight,{format:mn,type:en,depthTexture:new ci(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let j={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(H){for(let Q=0;Q<H.removed.length;Q++){let j=H.removed[Q],pe=R.indexOf(j);pe>=0&&(R[pe]=null,P[pe].disconnect(j))}for(let Q=0;Q<H.added.length;Q++){let j=H.added[Q],pe=R.indexOf(j);if(pe===-1){for(let Ne=0;Ne<P.length;Ne++)if(Ne>=R.length){R.push(j),pe=Ne;break}else if(R[Ne]===null){R[Ne]=j,pe=Ne;break}if(pe===-1)break}let we=P[pe];we&&we.connect(j)}}let te=new D,Z=new D;function ie(H,Q,j){te.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(j.matrixWorld);let pe=te.distanceTo(Z),we=Q.projectionMatrix.elements,Ne=j.projectionMatrix.elements,tt=we[14]/(we[10]-1),Ge=we[14]/(we[10]+1),X=(we[9]+1)/we[5],re=(we[9]-1)/we[5],se=(we[8]-1)/we[0],be=(Ne[8]+1)/Ne[0],C=tt*se,Be=tt*be,Te=pe/(-se+be),Ve=Te*-se;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ve),H.translateZ(Te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),we[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let xe=tt+Te,A=Ge+Te,_=C-Ve,E=Be+(pe-Ve),O=X*Ge/A*xe,K=re*Ge/A*xe;H.projectionMatrix.makePerspective(_,E,O,K,xe,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function W(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Q=H.near,j=H.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(j=m.depthFar)),k.near=B.near=S.near=Q,k.far=B.far=S.far=j,(U!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,G=k.far),k.layers.mask=H.layers.mask|6,S.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;let pe=H.parent,we=k.cameras;W(k,pe);for(let Ne=0;Ne<we.length;Ne++)W(we[Ne],pe);we.length===2?ie(k,S,B):k.projectionMatrix.copy(S.projectionMatrix),ne(H,k,pe)};function ne(H,Q,j){j===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(j.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=pr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return d[H]};let ce=null;function ae(H,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let j=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;j.length!==k.cameras.length&&(k.cameras.length=0,pe=!0);for(let Ge=0;Ge<j.length;Ge++){let X=j[Ge],re=null;if(f!==null)re=f.getViewport(X);else{let be=p.getViewSubImage(u,X);re=be.viewport,Ge===0&&(e.setRenderTargetTextures(y,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(y))}let se=T[Ge];se===void 0&&(se=new qt,se.layers.enable(Ge),se.viewport=new Mt,T[Ge]=se),se.matrix.fromArray(X.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(X.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(re.x,re.y,re.width,re.height),Ge===0&&(k.matrix.copy(se.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),pe===!0&&k.cameras.push(se)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let Ge=p.getDepthInformation(j[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let Ge=0;Ge<j.length;Ge++){let X=j[Ge].camera;if(X){let re=d[X];re||(re=new ts,d[X]=re);let se=p.getCameraImage(X);re.sourceTexture=se}}}}for(let j=0;j<P.length;j++){let pe=R[j],we=P[j];pe!==null&&we!==void 0&&we.update(pe,Q,l||o)}ce&&ce(H,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Me=new Ou;Me.setAnimationLoop(ae),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}},Wi=new Sn,w_=new ft;function E_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,xc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,w,y){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),w=M.envMap,y=M.envMapRotation;w&&(m.envMap.value=w,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(Wi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function T_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let y=w.program;n.uniformBlockBinding(M,y)}function l(M,w){let y=r[M.id];y===void 0&&(g(M),y=h(M),r[M.id]=y,M.addEventListener("dispose",m));let P=w.program;n.updateUBOMapping(M,P);let R=e.render.frame;s[M.id]!==R&&(u(M),s[M.id]=R)}function h(M){let w=p();M.__bindingPointIndex=w;let y=i.createBuffer(),P=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=r[M.id],y=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,I=y.length;R<I;R++){let x=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,B=x.length;S<B;S++){let T=x[S];if(f(T,R,S,P)===!0){let k=T.__offset,U=Array.isArray(T.value)?T.value:[T.value],G=0;for(let z=0;z<U.length;z++){let L=U[z],F=v(L);typeof L=="number"||typeof L=="boolean"?(T.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+G,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=0,T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=0,T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=0):(L.toArray(T.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,y,P){let R=M.value,I=w+"_"+y;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{let x=P[I];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return P[I]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(M){let w=M.uniforms,y=0,P=16;for(let I=0,x=w.length;I<x;I++){let S=Array.isArray(w[I])?w[I]:[w[I]];for(let B=0,T=S.length;B<T;B++){let k=S[B],U=Array.isArray(k.value)?k.value:[k.value];for(let G=0,z=U.length;G<z;G++){let L=U[G],F=v(L),te=y%P,Z=te%F.boundary,ie=te+Z;y+=Z,ie!==0&&P-ie<F.storage&&(y+=P-ie),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=F.storage}}}let R=y%P;return R>0&&(y+=P-R),M.__size=y,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function R_(){return On===null&&(On=new Ao(A_,16,16,ki,Fn),On.name="DFG_LUT",On.minFilter=Bt,On.magFilter=Bt,On.wrapS=Pn,On.wrapT=Pn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Ya=class{constructor(e={}){let{canvas:t=ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=f,m=new Set([la,aa,oa]),d=new Set([en,En,Er,Tr,ra,sa]),M=new Uint32Array(4),w=new Int32Array(4),y=null,P=null,R=[],I=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,B=!1;this._outputColorSpace=Jt;let T=0,k=0,U=null,G=-1,z=null,L=new Mt,F=new Mt,te=null,Z=new it(0),ie=0,W=t.width,ne=t.height,ce=1,ae=null,Me=null,H=new Mt(0,0,W,ne),Q=new Mt(0,0,W,ne),j=!1,pe=new _r,we=!1,Ne=!1,tt=new ft,Ge=new D,X=new Mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function be(){return U===null?ce:1}let C=n;function Be(b,V){return t.getContext(b,V)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",gt,!1),C===null){let V="webgl2";if(C=Be(V,b),C===null)throw Be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw We("WebGLRenderer: "+b.message),b}let Te,Ve,xe,A,_,E,O,K,J,ge,fe,Pe,Se,oe,he,_e,Ie,Ae,Ze,N,ve,ye,Le;function me(){Te=new F0(C),Te.init(),ve=new M_(C,Te),Ve=new R0(C,Te,e,ve),xe=new v_(C,Te),Ve.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),A=new z0(C),_=new s_,E=new y_(C,Te,xe,_,Ve,ve,A),O=new U0(S),K=new Wf(C),ye=new T0(C,K),J=new O0(C,K,A,ye),ge=new V0(C,J,K,ye,A),Ae=new k0(C,Ve,E),he=new C0(_),fe=new r_(S,O,Te,Ve,ye,he),Pe=new E_(S,_),Se=new a_,oe=new f_(Te),Ie=new E0(S,O,xe,ge,g,c),_e=new x_(S,ge,Ve),Le=new T_(C,A,Ve,xe),Ze=new A0(C,Te,A),N=new B0(C,Te,A),A.programs=fe.programs,S.capabilities=Ve,S.extensions=Te,S.properties=_,S.renderLists=Se,S.shadowMap=_e,S.state=xe,S.info=A}me(),v!==en&&(x=new G0(v,t.width,t.height,r,s));let ee=new Fc(S,C);this.xr=ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(W,ne,!1))},this.getSize=function(b){return b.set(W,ne)},this.setSize=function(b,V,$=!0){if(ee.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,ne=V,t.width=Math.floor(b*ce),t.height=Math.floor(V*ce),$===!0&&(t.style.width=b+"px",t.style.height=V+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(W*ce,ne*ce).floor()},this.setDrawingBufferSize=function(b,V,$){W=b,ne=V,ce=$,t.width=Math.floor(b*$),t.height=Math.floor(V*$),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,V,$,Y){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,V,$,Y),xe.viewport(L.copy(H).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,V,$,Y){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,V,$,Y),xe.scissor(F.copy(Q).multiplyScalar(ce).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){xe.setScissorTest(j=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){Me=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,$=!0){let Y=0;if(b){let q=!1;if(U!==null){let Re=U.texture.format;q=m.has(Re)}if(q){let Re=U.texture.type,De=d.has(Re),Ce=Ie.getClearColor(),Fe=Ie.getClearAlpha(),ze=Ce.r,$e=Ce.g,nt=Ce.b;De?(M[0]=ze,M[1]=$e,M[2]=nt,M[3]=Fe,C.clearBufferuiv(C.COLOR,0,M)):(w[0]=ze,w[1]=$e,w[2]=nt,w[3]=Fe,C.clearBufferiv(C.COLOR,0,w))}else Y|=C.COLOR_BUFFER_BIT}V&&(Y|=C.DEPTH_BUFFER_BIT),$&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Ie.dispose(),Se.dispose(),oe.dispose(),_.dispose(),O.dispose(),ge.dispose(),ye.dispose(),Le.dispose(),fe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Xc),ee.removeEventListener("sessionend",qc),Si.stop()};function Ue(b){b.preventDefault(),mc("WebGLRenderer: Context Lost."),B=!0}function Ye(){mc("WebGLRenderer: Context Restored."),B=!1;let b=A.autoReset,V=_e.enabled,$=_e.autoUpdate,Y=_e.needsUpdate,q=_e.type;me(),A.autoReset=b,_e.enabled=V,_e.autoUpdate=$,_e.needsUpdate=Y,_e.type=q}function gt(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let V=b.target;V.removeEventListener("dispose",ht),kn(V)}function kn(b){Vn(b),_.remove(b)}function Vn(b){let V=_.get(b).programs;V!==void 0&&(V.forEach(function($){fe.releaseProgram($)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,$,Y,q,Re){V===null&&(V=re);let De=q.isMesh&&q.matrixWorld.determinant()<0,Ce=hd(b,V,$,Y,q);xe.setMaterial(Y,De);let Fe=$.index,ze=1;if(Y.wireframe===!0){if(Fe=J.getWireframeAttribute($),Fe===void 0)return;ze=2}let $e=$.drawRange,nt=$.attributes.position,ke=$e.start*ze,ut=($e.start+$e.count)*ze;Re!==null&&(ke=Math.max(ke,Re.start*ze),ut=Math.min(ut,(Re.start+Re.count)*ze)),Fe!==null?(ke=Math.max(ke,0),ut=Math.min(ut,Fe.count)):nt!=null&&(ke=Math.max(ke,0),ut=Math.min(ut,nt.count));let Et=ut-ke;if(Et<0||Et===1/0)return;ye.setup(q,Y,Ce,$,Fe);let St,dt=Ze;if(Fe!==null&&(St=K.get(Fe),dt=N,dt.setIndex(St)),q.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*be()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(q.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),xe.setLineWidth(Ht*be()),q.isLineSegments?dt.setMode(C.LINES):q.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else q.isPoints?dt.setMode(C.POINTS):q.isSprite&&dt.setMode(C.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Xr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ht=q._multiDrawStarts,Oe=q._multiDrawCounts,sn=q._multiDrawCount,at=Fe?K.get(Fe).bytesPerElement:1,xn=_.get(Y).currentProgram.getUniforms();for(let Rn=0;Rn<sn;Rn++)xn.setValue(C,"_gl_DrawID",Rn),dt.render(Ht[Rn]/at,Oe[Rn])}else if(q.isInstancedMesh)dt.renderInstances(ke,Et,q.count);else if($.isInstancedBufferGeometry){let Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Oe=Math.min($.instanceCount,Ht);dt.renderInstances(ke,Et,Oe)}else dt.render(ke,Et)};function Wc(b,V,$){b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,Us(b,V,$),b.side=Jn,b.needsUpdate=!0,Us(b,V,$),b.side=Qt):Us(b,V,$)}this.compile=function(b,V,$=null){$===null&&($=b),P=oe.get($),P.init(V),I.push(P),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),b!==$&&b.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),P.setupLights();let Y=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Re=q.material;if(Re)if(Array.isArray(Re))for(let De=0;De<Re.length;De++){let Ce=Re[De];Wc(Ce,$,q),Y.add(Ce)}else Wc(Re,$,q),Y.add(Re)}),P=I.pop(),Y},this.compileAsync=function(b,V,$=null){let Y=this.compile(b,V,$);return new Promise(q=>{function Re(){if(Y.forEach(function(De){_.get(De).currentProgram.isReady()&&Y.delete(De)}),Y.size===0){q(b);return}setTimeout(Re,10)}Te.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ol=null;function cd(b){ol&&ol(b)}function Xc(){Si.stop()}function qc(){Si.start()}let Si=new Ou;Si.setAnimationLoop(cd),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){ol=b,ee.setAnimationLoop(b),b===null?Si.stop():Si.start()},ee.addEventListener("sessionstart",Xc),ee.addEventListener("sessionend",qc),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;let $=ee.enabled===!0&&ee.isPresenting===!0,Y=x!==null&&(U===null||$)&&x.begin(S,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(V),V=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,V,U),P=oe.get(b,I.length),P.init(V),I.push(P),tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pe.setFromProjectionMatrix(tt,bn,V.reversedDepth),Ne=this.localClippingEnabled,we=he.init(this.clippingPlanes,Ne),y=Se.get(b,R.length),y.init(),R.push(y),ee.enabled===!0&&ee.isPresenting===!0){let De=S.xr.getDepthSensingMesh();De!==null&&al(De,V,-1/0,S.sortObjects)}al(b,V,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(ae,Me),se=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,se&&Ie.addToRenderList(y,b),this.info.render.frame++,we===!0&&he.beginShadows();let q=P.state.shadowsArray;if(_e.render(q,b,V),we===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){let De=y.opaque,Ce=y.transmissive;if(P.setupLights(),V.isArrayCamera){let Fe=V.cameras;if(Ce.length>0)for(let ze=0,$e=Fe.length;ze<$e;ze++){let nt=Fe[ze];Zc(De,Ce,b,nt)}se&&Ie.render(b);for(let ze=0,$e=Fe.length;ze<$e;ze++){let nt=Fe[ze];Yc(y,b,nt,nt.viewport)}}else Ce.length>0&&Zc(De,Ce,b,V),se&&Ie.render(b),Yc(y,b,V)}U!==null&&k===0&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),Y&&x.end(S),b.isScene===!0&&b.onAfterRender(S,b,V),ye.resetDefaultState(),G=-1,z=null,I.pop(),I.length>0?(P=I[I.length-1],we===!0&&he.setGlobalState(S.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function al(b,V,$,Y){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pe.intersectsSprite(b)){Y&&X.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let De=ge.update(b),Ce=b.material;Ce.visible&&y.push(b,De,Ce,$,X.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pe.intersectsObject(b))){let De=ge.update(b),Ce=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),X.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),X.copy(De.boundingSphere.center)),X.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Ce)){let Fe=De.groups;for(let ze=0,$e=Fe.length;ze<$e;ze++){let nt=Fe[ze],ke=Ce[nt.materialIndex];ke&&ke.visible&&y.push(b,De,ke,$,X.z,nt)}}else Ce.visible&&y.push(b,De,Ce,$,X.z,null)}}let Re=b.children;for(let De=0,Ce=Re.length;De<Ce;De++)al(Re[De],V,$,Y)}function Yc(b,V,$,Y){let{opaque:q,transmissive:Re,transparent:De}=b;P.setupLightsView($),we===!0&&he.setGlobalState(S.clippingPlanes,$),Y&&xe.viewport(L.copy(Y)),q.length>0&&Ns(q,V,$),Re.length>0&&Ns(Re,V,$),De.length>0&&Ns(De,V,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Zc(b,V,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Y.id]===void 0){let ke=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Y.id]=new hn(1,1,{generateMipmaps:!0,type:ke?Fn:en,minFilter:xi,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Re=P.state.transmissionRenderTarget[Y.id],De=Y.viewport||L;Re.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);let Ce=S.getRenderTarget(),Fe=S.getActiveCubeFace(),ze=S.getActiveMipmapLevel();S.setRenderTarget(Re),S.getClearColor(Z),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),se&&Ie.render($);let $e=S.toneMapping;S.toneMapping=wn;let nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),P.setupLightsView(Y),we===!0&&he.setGlobalState(S.clippingPlanes,Y),Ns(b,$,Y),E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ut=0,Et=V.length;ut<Et;ut++){let St=V[ut],{object:dt,geometry:Ht,material:Oe,group:sn}=St;if(Oe.side===Qt&&dt.layers.test(Y.layers)){let at=Oe.side;Oe.side=jt,Oe.needsUpdate=!0,Jc(dt,$,Y,Ht,Oe,sn),Oe.side=at,Oe.needsUpdate=!0,ke=!0}}ke===!0&&(E.updateMultisampleRenderTarget(Re),E.updateRenderTargetMipmap(Re))}S.setRenderTarget(Ce,Fe,ze),S.setClearColor(Z,ie),nt!==void 0&&(Y.viewport=nt),S.toneMapping=$e}function Ns(b,V,$){let Y=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Re=b.length;q<Re;q++){let De=b[q],{object:Ce,geometry:Fe,group:ze}=De,$e=De.material;$e.allowOverride===!0&&Y!==null&&($e=Y),Ce.layers.test($.layers)&&Jc(Ce,V,$,Fe,$e,ze)}}function Jc(b,V,$,Y,q,Re){b.onBeforeRender(S,V,$,Y,q,Re),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(S,V,$,Y,b,Re),q.transparent===!0&&q.side===Qt&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,S.renderBufferDirect($,V,Y,q,b,Re),q.side=Jn,q.needsUpdate=!0,S.renderBufferDirect($,V,Y,q,b,Re),q.side=Qt):S.renderBufferDirect($,V,Y,q,b,Re),b.onAfterRender(S,V,$,Y,q,Re)}function Us(b,V,$){V.isScene!==!0&&(V=re);let Y=_.get(b),q=P.state.lights,Re=P.state.shadowsArray,De=q.state.version,Ce=fe.getParameters(b,q.state,Re,V,$),Fe=fe.getProgramCacheKey(Ce),ze=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;let $e=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=O.get(b.envMap||Y.environment,$e),Y.envMapRotation=Y.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",ht),ze=new Map,Y.programs=ze);let nt=ze.get(Fe);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===De)return Kc(b,Ce),nt}else Ce.uniforms=fe.getUniforms(b),b.onBeforeCompile(Ce,S),nt=fe.acquireProgram(Ce,Fe),ze.set(Fe,nt),Y.uniforms=Ce.uniforms;let ke=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=he.uniform),Kc(b,Ce),Y.needsLights=dd(b),Y.lightsStateVersion=De,Y.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.currentProgram=nt,Y.uniformsList=null,nt}function $c(b){if(b.uniformsList===null){let V=b.currentProgram.getUniforms();b.uniformsList=Cr.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Kc(b,V){let $=_.get(b);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function hd(b,V,$,Y,q){V.isScene!==!0&&(V=re),E.resetTextureUnits();let Re=V.fog,De=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Ce=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Li,Fe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ze=O.get(Y.envMap||De,Fe),$e=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,St=wn;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(St=S.toneMapping);let dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ht=dt!==void 0?dt.length:0,Oe=_.get(Y),sn=P.state.lights;if(we===!0&&(Ne===!0||b!==z)){let Nt=b===z&&Y.id===G;he.setState(Y,b,Nt)}let at=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==sn.state.version||Oe.outputColorSpace!==Ce||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==ze||Y.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==he.numPlanes||Oe.numIntersection!==he.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==nt||Oe.morphTargets!==ke||Oe.morphNormals!==ut||Oe.morphColors!==Et||Oe.toneMapping!==St||Oe.morphTargetsCount!==Ht)&&(at=!0):(at=!0,Oe.__version=Y.version);let xn=Oe.currentProgram;at===!0&&(xn=Us(Y,V,q));let Rn=!1,wi=!1,Ji=!1,mt=xn.getUniforms(),Ot=Oe.uniforms;if(xe.useProgram(xn.program)&&(Rn=!0,wi=!0,Ji=!0),Y.id!==G&&(G=Y.id,wi=!0),Rn||z!==b){xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(C,"projectionMatrix",b.projectionMatrix),mt.setValue(C,"viewMatrix",b.matrixWorldInverse);let ti=mt.map.cameraPosition;ti!==void 0&&ti.setValue(C,Ge.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,wi=!0,Ji=!0)}if(Oe.needsLights&&(sn.state.directionalShadowMap.length>0&&mt.setValue(C,"directionalShadowMap",sn.state.directionalShadowMap,E),sn.state.spotShadowMap.length>0&&mt.setValue(C,"spotShadowMap",sn.state.spotShadowMap,E),sn.state.pointShadowMap.length>0&&mt.setValue(C,"pointShadowMap",sn.state.pointShadowMap,E)),q.isSkinnedMesh){mt.setOptional(C,q,"bindMatrix"),mt.setOptional(C,q,"bindMatrixInverse");let Nt=q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),mt.setValue(C,"boneTexture",Nt.boneTexture,E))}q.isBatchedMesh&&(mt.setOptional(C,q,"batchingTexture"),mt.setValue(C,"batchingTexture",q._matricesTexture,E),mt.setOptional(C,q,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",q._indirectTexture,E),mt.setOptional(C,q,"batchingColorTexture"),q._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",q._colorsTexture,E));let ei=$.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Ae.update(q,$,xn),(wi||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,mt.setValue(C,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=R_()),wi&&(mt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&ud(Ot,Ji),Re&&Y.fog===!0&&Pe.refreshFogUniforms(Ot,Re),Pe.refreshMaterialUniforms(Ot,Y,ce,ne,P.state.transmissionRenderTarget[b.id]),Cr.upload(C,$c(Oe),Ot,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cr.upload(C,$c(Oe),Ot,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(C,"center",q.center),mt.setValue(C,"modelViewMatrix",q.modelViewMatrix),mt.setValue(C,"normalMatrix",q.normalMatrix),mt.setValue(C,"modelMatrix",q.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Nt=Y.uniformsGroups;for(let ti=0,$i=Nt.length;ti<$i;ti++){let jc=Nt[ti];Le.update(jc,xn),Le.bind(jc,xn)}}return xn}function ud(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function dd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,V,$){let Y=_.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=V,_.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){let $=_.get(b);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};let fd=C.createFramebuffer();this.setRenderTarget=function(b,V=0,$=0){U=b,T=V,k=$;let Y=null,q=!1,Re=!1;if(b){let Ce=_.get(b);if(Ce.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(C.FRAMEBUFFER,Ce.__webglFramebuffer),L.copy(b.viewport),F.copy(b.scissor),te=b.scissorTest,xe.viewport(L),xe.scissor(F),xe.setScissorTest(te),G=-1;return}else if(Ce.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(Ce.__hasExternalTextures)E.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let $e=b.depthTexture;if(Ce.__boundDepthTexture!==$e){if($e!==null&&_.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);let ze=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?Y=ze[V][$]:Y=ze[V],q=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?Y=_.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?Y=ze[$]:Y=ze,L.copy(b.viewport),F.copy(b.scissor),te=b.scissorTest}else L.copy(H).multiplyScalar(ce).floor(),F.copy(Q).multiplyScalar(ce).floor(),te=j;if($!==0&&(Y=fd),xe.bindFramebuffer(C.FRAMEBUFFER,Y)&&xe.drawBuffers(b,Y),xe.viewport(L),xe.scissor(F),xe.setScissorTest(te),q){let Ce=_.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,$)}else if(Re){let Ce=V;for(let Fe=0;Fe<b.textures.length;Fe++){let ze=_.get(b.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,$,Ce)}}else if(b!==null&&$!==0){let Ce=_.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,$)}G=-1},this.readRenderTargetPixels=function(b,V,$,Y,q,Re,De,Ce=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){xe.bindFramebuffer(C.FRAMEBUFFER,Fe);try{let ze=b.textures[Ce],$e=ze.format,nt=ze.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!Ve.textureFormatReadable($e)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(nt)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Y&&$>=0&&$<=b.height-q&&C.readPixels(V,$,Y,q,ve.convert($e),ve.convert(nt),Re)}finally{let ze=U!==null?_.get(U).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,V,$,Y,q,Re,De,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(V>=0&&V<=b.width-Y&&$>=0&&$<=b.height-q){xe.bindFramebuffer(C.FRAMEBUFFER,Fe);let ze=b.textures[Ce],$e=ze.format,nt=ze.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),!Ve.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.bufferData(C.PIXEL_PACK_BUFFER,Re.byteLength,C.STREAM_READ),C.readPixels(V,$,Y,q,ve.convert($e),ve.convert(nt),0);let ut=U!==null?_.get(U).__webglFramebuffer:null;xe.bindFramebuffer(C.FRAMEBUFFER,ut);let Et=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ou(C,Et,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ke),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Re),C.deleteBuffer(ke),C.deleteSync(Et),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,$=0){let Y=Math.pow(2,-$),q=Math.floor(b.image.width*Y),Re=Math.floor(b.image.height*Y),De=V!==null?V.x:0,Ce=V!==null?V.y:0;E.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,De,Ce,q,Re),xe.unbindTexture()};let pd=C.createFramebuffer(),md=C.createFramebuffer();this.copyTextureToTexture=function(b,V,$=null,Y=null,q=0,Re=0){let De,Ce,Fe,ze,$e,nt,ke,ut,Et,St=b.isCompressedTexture?b.mipmaps[Re]:b.image;if($!==null)De=$.max.x-$.min.x,Ce=$.max.y-$.min.y,Fe=$.isBox3?$.max.z-$.min.z:1,ze=$.min.x,$e=$.min.y,nt=$.isBox3?$.min.z:0;else{let Ot=Math.pow(2,-q);De=Math.floor(St.width*Ot),Ce=Math.floor(St.height*Ot),b.isDataArrayTexture?Fe=St.depth:b.isData3DTexture?Fe=Math.floor(St.depth*Ot):Fe=1,ze=0,$e=0,nt=0}Y!==null?(ke=Y.x,ut=Y.y,Et=Y.z):(ke=0,ut=0,Et=0);let dt=ve.convert(V.format),Ht=ve.convert(V.type),Oe;V.isData3DTexture?(E.setTexture3D(V,0),Oe=C.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),Oe=C.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),Oe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);let sn=C.getParameter(C.UNPACK_ROW_LENGTH),at=C.getParameter(C.UNPACK_IMAGE_HEIGHT),xn=C.getParameter(C.UNPACK_SKIP_PIXELS),Rn=C.getParameter(C.UNPACK_SKIP_ROWS),wi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,St.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,nt);let Ji=b.isDataArrayTexture||b.isData3DTexture,mt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){let Ot=_.get(b),ei=_.get(V),Nt=_.get(Ot.__renderTarget),ti=_.get(ei.__renderTarget);xe.bindFramebuffer(C.READ_FRAMEBUFFER,Nt.__webglFramebuffer),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let $i=0;$i<Fe;$i++)Ji&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(b).__webglTexture,q,nt+$i),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(V).__webglTexture,Re,Et+$i)),C.blitFramebuffer(ze,$e,De,Ce,ke,ut,De,Ce,C.DEPTH_BUFFER_BIT,C.NEAREST);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||_.has(b)){let Ot=_.get(b),ei=_.get(V);xe.bindFramebuffer(C.READ_FRAMEBUFFER,pd),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,md);for(let Nt=0;Nt<Fe;Nt++)Ji?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,q,nt+Nt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,q),mt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ei.__webglTexture,Re,Et+Nt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ei.__webglTexture,Re),q!==0?C.blitFramebuffer(ze,$e,De,Ce,ke,ut,De,Ce,C.COLOR_BUFFER_BIT,C.NEAREST):mt?C.copyTexSubImage3D(Oe,Re,ke,ut,Et+Nt,ze,$e,De,Ce):C.copyTexSubImage2D(Oe,Re,ke,ut,ze,$e,De,Ce);xe.bindFramebuffer(C.READ_FRAMEBUFFER,null),xe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Oe,Re,ke,ut,Et,De,Ce,Fe,dt,Ht,St.data):V.isCompressedArrayTexture?C.compressedTexSubImage3D(Oe,Re,ke,ut,Et,De,Ce,Fe,dt,St.data):C.texSubImage3D(Oe,Re,ke,ut,Et,De,Ce,Fe,dt,Ht,St):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Re,ke,ut,De,Ce,dt,Ht,St.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Re,ke,ut,St.width,St.height,dt,St.data):C.texSubImage2D(C.TEXTURE_2D,Re,ke,ut,De,Ce,dt,Ht,St);C.pixelStorei(C.UNPACK_ROW_LENGTH,sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wi),Re===0&&V.generateMipmaps&&C.generateMipmap(Oe),xe.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){T=0,k=0,U=null,xe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Hu={type:"change"},Bc={type:"start"},Wu={type:"end"},$a=new Ui,Gu=new Xt,C_=Math.cos(70*Ar.DEG2RAD),Lt=new D,tn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oc=1e-6,Ka=class extends gs{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new cn,this._lastTargetPosition=new D,this._quat=new cn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sr,this._sphericalDelta=new Sr,this._scale=1,this._panOffset=new D,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new D,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I_.bind(this),this._onPointerDown=P_.bind(this),this._onPointerUp=D_.bind(this),this._onContextMenu=z_.bind(this),this._onMouseWheel=U_.bind(this),this._onKeyDown=F_.bind(this),this._onTouchStart=O_.bind(this),this._onTouchMove=B_.bind(this),this._onMouseDown=L_.bind(this),this._onMouseMove=N_.bind(this),this._interceptControlDown=k_.bind(this),this._interceptControlUp=V_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Lt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($a.origin.copy(this.object.position),$a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($a.direction))<C_?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),$a.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oc||this._lastTargetPosition.distanceToSquared(this.target)>Oc?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function P_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function I_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function D_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function L_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Bc)}function N_(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function U_(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(Bc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function F_(i){this.enabled!==!1&&this._handleKeyDown(i)}function O_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Bc)}function B_(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function z_(i){this.enabled!==!1&&i.preventDefault()}function k_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,c=new kt,l=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,p=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(p)}for(let h in s){let p=Xu(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<p;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let g=Xu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Xu(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new $t(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let p=c/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let v=h.getComponent(u,g);a.setComponent(u+p,g,v)}}else o.set(h.array,c);c+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var vt=.4166666666666667,de=.24,ja=.018,Vc=23*vt,Yi=16*vt,Ct=-Vc/2,rn=Vc/2,bt=-Yi/2,_n=Yi/2,zn={ground:de,bearing:8*vt,slabBottom:8*vt-de,upper:8*vt,roofEave:12*vt-de,roofRidgeUnderside:12*vt-de+Yi/2},H_={width:Vc,depth:Yi,x0:Ct,x1:rn,z0:bt,z1:_n,wallDepth:de,module:vt,terraceDepth:7*vt,balconyDepth:5*vt,canopyDepth:2*vt,roofGableOverhang:2*vt,roofEaveOverhang:vt,roofAngle:45,kneeHeight:4*vt-de},Zu={left:Ct+de,right:rn-de,rear:bt+de,front:_n-de},jn=(i,e)=>e+Math.round((i-e+de/2)/vt)*vt-de/2,Ju={smallX:jn(-2.88,Ct),leftX:jn(-1.21,Ct),rightX:jn(1.29,Ct),wardrobeX:jn(2.96,Ct),hallNotchX:jn(-2.46,Ct),officeZ:jn(-.585,bt),utilityZ:jn(1.498,bt),upperBathZ:jn(-1.002,bt),upperBedZ:jn(.248,bt)},le=Ju,Je=Zu,xt=(i,e,t,n,r=[])=>({id:i,level:e,a:t,b:n,depth:de,holes:r}),An=(i,e,t=.85,n="ground")=>({id:i,kind:"door",at:e,width:t,bottom:zn[n],height:2.1}),qu=(i,e,t,n,r)=>({id:i,kind:"window",at:e,width:t,bottom:n,height:r}),qi=(i,e,t,n="ground",r=2.4)=>({id:i,kind:"patio-door",at:e,width:t,bottom:zn[n],height:r}),$u=[xt("ground-rear","ground",[Ct,bt+de/2],[rn,bt+de/2],[qi("kitchen-garden-door",-.72-Ct,.9),qi("living-rear-glazing",1.59-Ct,2.58)]),xt("ground-front","ground",[Ct,_n-de/2],[rn,_n-de/2],[An("entrance",-2.61-Ct,.9),qu("utility-window",-4.16-Ct,.83,1.34,.95)]),xt("ground-left","ground",[Ct+de/2,bt],[Ct+de/2,_n],[qi("office-window",-2.78-bt,1.4,"ground",2.1),qu("ground-bath-window",-.1-bt,.83,1.24,1.1)]),xt("ground-right","ground",[rn-de/2,bt],[rn-de/2,_n],[qi("living-terrace-glazing",-2.82-bt,2.85)]),xt("upper-rear","upper",[Ct,bt+de/2],[rn,bt+de/2]),xt("upper-front","upper",[Ct,_n-de/2],[rn,_n-de/2]),xt("upper-left","upper",[Ct+de/2,bt],[Ct+de/2,_n],[qi("rear-bedroom-window",-2.4-bt,1.4,"upper",2.1),qi("front-bedroom-window",.9-bt,.9,"upper",2.1)]),xt("upper-right","upper",[rn-de/2,bt],[rn-de/2,_n],[qi("master-balcony-door",-.3-bt,2,"upper",2.1)])],Ku=[xt("ground-office-east","ground",[le.leftX,Je.rear],[le.leftX,le.officeZ]),xt("ground-office-south","ground",[Je.left,le.officeZ],[le.leftX-de/2,le.officeZ],[{...An("office-door",le.smallX+de/2-Je.left,.85),swing:-1}]),xt("ground-service-east","ground",[le.smallX,le.officeZ+de/2],[le.smallX,Je.front],[An("bath-door",.08-(le.officeZ+de/2),.85),An("utility-door",1.88-(le.officeZ+de/2),.85)]),xt("ground-utility-north","ground",[Je.left,le.utilityZ],[le.leftX-de/2,le.utilityZ],[An("vestibule-hall-door",-2.62-Je.left,.85)]),xt("ground-stair-west","ground",[le.leftX,le.utilityZ+de/2],[le.leftX,Je.front]),xt("ground-stair-east","ground",[le.rightX,le.upperBedZ],[le.rightX,Je.front]),xt("upper-rear-bedroom-east","upper",[le.leftX,Je.rear],[le.leftX,le.upperBathZ-de/2]),xt("upper-hall-notch-west","upper",[le.hallNotchX,le.upperBathZ],[le.hallNotchX,le.upperBedZ]),xt("upper-hall-notch-north","upper",[le.hallNotchX,le.upperBathZ],[le.leftX-de/2,le.upperBathZ],[An("rear-bedroom-door",-2.31-le.hallNotchX,.83,"upper")]),xt("upper-bedroom-division","upper",[Je.left,le.upperBedZ],[le.leftX-de/2,le.upperBedZ],[An("front-bedroom-door",-2.31-Je.left,.83,"upper")]),xt("upper-front-bedroom-east","upper",[le.leftX,le.upperBedZ+de/2],[le.leftX,Je.front]),xt("upper-family-bath-east","upper",[le.rightX,Je.rear],[le.rightX,le.upperBathZ-de/2]),xt("upper-family-bath-south","upper",[le.leftX+de/2,le.upperBathZ],[le.rightX-de/2,le.upperBathZ],[An("family-bath-door",-.92-(le.leftX+de/2),.83,"upper")]),xt("upper-suite-divider","upper",[le.wardrobeX,Je.rear],[le.wardrobeX,le.upperBathZ-de/2],[{...An("ensuite-door",-2.05-Je.rear,.83,"upper"),kind:"sliding-door"}]),xt("upper-suite-south","upper",[le.rightX+de/2,le.upperBathZ],[Je.right,le.upperBathZ],[{...An("wardrobe-door",3.32-(le.rightX+de/2),.8,"upper"),kind:"sliding-door"}]),xt("upper-master-west","upper",[le.rightX,le.upperBathZ+de/2],[le.rightX,Je.front],[An("master-door",-.8-(le.upperBathZ+de/2),.83,"upper")])],G_={"kitchen-garden-door":[10,12],"living-rear-glazing":[15,21],entrance:[5,8],"utility-window":[1,3],"office-window":[1,5],"ground-bath-window":[8,10],"living-terrace-glazing":[1,8],"rear-bedroom-window":[2,6],"front-bedroom-window":[10,12],"master-balcony-door":[7,12],"office-door":[5,8],"bath-door":[8,10],"utility-door":[12,14],"vestibule-hall-door":[6,8],"rear-bedroom-door":[6,8],"front-bedroom-door":[6,8],"family-bath-door":[10,12],"ensuite-door":[3,5],"wardrobe-door":[19,21],"master-door":[6,8]};for(let i of[...$u,...Ku])for(let e of i.holes){let t=i.a[0]===i.b[0]?1:0,[n,r]=G_[e.id],s=t===0?Ct:bt,o=i.level==="upper"?zn.slabBottom:0,a=e.kind==="window"?3:null,c=6;e.at=s+n*vt+ja-i.a[t],e.width=(r-n)*vt-2*ja,e.bottom=o+(a===null?de:a*vt+ja),e.height=o+c*vt-ja-e.bottom,e.moduleBounds={a:n,b:r,sill:a,lintel:c}}var Cs={id:"stair",x0:le.leftX+de/2,x1:le.rightX-de/2,z0:le.upperBedZ,z1:Je.front,floorY:zn.ground,upperY:zn.upper,risers:16,riser:(zn.upper-zn.ground)/16,flightWidth:.9,tread:.275,landingDepth:.9,flightTreads:7,direction:"up-towards-front-then-back",opening:{x0:le.leftX+de/2,x1:le.rightX-de/2,z0:le.upperBedZ,z1:Je.front}},W_={ground:{x0:rn,x1:rn+7*vt,z0:bt,z1:_n},balcony:{x0:rn,x1:rn+5*vt,z0:bt,z1:_n}};function kc(i){return Math.abs(i.reduce((e,t,n)=>e+t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1],0))/2}function Yu(i,e,t){let n=[];for(let r=0;r<i.length;r++){let s=i[r],o=i[(r+1)%i.length],a=t?s[1]>=e:s[1]<=e,c=t?o[1]>=e:o[1]<=e;if(a&&n.push(s),a!==c){let l=(e-s[1])/(o[1]-s[1]);n.push([s[0]+l*(o[0]-s[0]),e])}}return n}function X_(i){let e=t=>{let n=Yi/2+(zn.roofEave-zn.upper)-t;return kc(Yu(Yu(i,-n,!0),n,!1))};return(e(1.4)+e(2.2))/2}function nn(i,e,t,n,r){let s=n.map(a=>a[0]),o=n.map(a=>a[1]);return{id:i,name:e,level:t,polygon:n,x0:Math.min(...s),x1:Math.max(...s),z0:Math.min(...o),z1:Math.max(...o),label:r,area:kc(n),usableArea:t==="upper"?X_(n):kc(n)}}var gn=(i,e,t,n)=>[[i,e],[t,e],[t,n],[i,n]],Qa=[nn("office","Office / guest room","ground",gn(Je.left,Je.rear,le.leftX-de/2,le.officeZ-de/2),[-3.42,-1.28]),nn("bath-ground","Bathroom","ground",gn(Je.left,le.officeZ+de/2,le.smallX-de/2,le.utilityZ-de/2),[-3.77,.75]),nn("utility","Pom. room","ground",gn(Je.left,le.utilityZ+de/2,le.smallX-de/2,Je.front),[-3.77,2.36]),nn("vestibule","Entrance hall","ground",gn(le.smallX+de/2,le.utilityZ+de/2,le.leftX-de/2,Je.front),[-2.04,2.27]),nn("hall-ground","Hall","ground",gn(le.smallX+de/2,le.officeZ+de/2,le.leftX-de/2,le.utilityZ-de/2),[-2.04,.7]),nn("stairs-ground","Stairs","ground",gn(Cs.x0,Cs.z0,Cs.x1,Cs.z1),[.05,1.79]),nn("living","Living + dining + kitchen","ground",[[le.leftX+de/2,Je.rear],[Je.right,Je.rear],[Je.right,Je.front],[le.rightX+de/2,Je.front],[le.rightX+de/2,le.upperBedZ],[le.leftX+de/2,le.upperBedZ]],[2.98,.75]),nn("bed-rear","Bedroom 1","upper",[[Je.left,Je.rear],[le.leftX-de/2,Je.rear],[le.leftX-de/2,le.upperBathZ-de/2],[le.hallNotchX-de/2,le.upperBathZ-de/2],[le.hallNotchX-de/2,le.upperBedZ-de/2],[Je.left,le.upperBedZ-de/2]],[-3.65,-.55]),nn("bed-front","Bedroom 2","upper",gn(Je.left,le.upperBedZ+de/2,le.leftX-de/2,Je.front),[-3.1,1.55]),nn("bath-family","Bathroom","upper",gn(le.leftX+de/2,Je.rear,le.rightX-de/2,le.upperBathZ-de/2),[.05,-1.7]),nn("bath-suite","En-suite bathroom","upper",gn(le.rightX+de/2,Je.rear,le.wardrobeX-de/2,le.upperBathZ-de/2),[2.12,-2.04]),nn("wardrobe","Dressing room","upper",gn(le.wardrobeX+de/2,Je.rear,Je.right,le.upperBathZ-de/2),[3.57,-1.78]),nn("master","Main bedroom","upper",gn(le.rightX+de/2,le.upperBathZ+de/2,Je.right,Je.front),[2.99,.56]),nn("hall-upper","Hall","upper",gn(le.hallNotchX+de/2,le.upperBathZ+de/2,le.rightX-de/2,le.upperBedZ-de/2),[-.62,-.39])],el={groundArea:Qa.filter(i=>i.level==="ground").reduce((i,e)=>i+e.usableArea,0),upperArea:Qa.filter(i=>i.level==="upper").reduce((i,e)=>i+e.usableArea,0),upperFloorArea:Qa.filter(i=>i.level==="upper").reduce((i,e)=>i+e.area,0),terraceArea:7*vt*Yi,balconyArea:5*vt*Yi,bedrooms:3,groundOffice:!0,bathrooms:3};el.usableArea=el.groundArea+el.upperArea;var q_={envelope:H_,levels:zn,inner:Zu,axes:Ju,exteriorWalls:$u,partitions:Ku,rooms:Qa,stair:Cs,terraces:W_,facts:el},wt=q_;var ju={'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,16,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,17,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,18,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,19,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,20,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,21,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 rear","ground-rear","wall-vertical",1,22,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,11,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,16,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,17,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,18,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,19,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,20,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,21,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 front","ground-front","wall-vertical",1,22,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,3,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,3,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,4,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,5,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,11,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,11,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,15,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Ground floor \u2014 right","ground-right","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,5,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,7,0,0,0,6,0,2.26]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,8,0,0,0,6,0,2.26]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,5,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,6,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,7,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,8,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,9,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,10,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,11,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Ceiling poddasza","","ceiling",1,12,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,1,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,2,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,3,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,4,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,5,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,6,0,0,1.6666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,7,0,0,1.6666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,1,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,2,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,3,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,4,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,5,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,6,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,7,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,1,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,2,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,3,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,4,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,5,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,6,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,7,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,1,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,2,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,0,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,0,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,1,0,0,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,1,0,0,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,2,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,1,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,2,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,3,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,4,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,5,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,6,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,7,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,1,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,2,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,3,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,4,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,5,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,6,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,7,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,1,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,2,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,3,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,4,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,1,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,2,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,3,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,4,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,4,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,1,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,3,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,1,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,2,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,3,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,4,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,5,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,6,0,0,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,7,0,0,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-south","upper-suite-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,5,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,1,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,2,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,3,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,4,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,1,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,2,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,3,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,4,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,5,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,6,0,1,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,7,0,1,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-master-west","upper-master-west","partition-vertical",1,0,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,0,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,1,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,1,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["balcony-support-rear","balcony-support-rear","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["balcony-support-front","balcony-support-front","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}]};var nl=.4166666666666667,Qu=.24,tl=.018;function Qn(i,e=!0){let t=i.pixels*nl,n=(i.trim==="left"?Qu:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?Qu:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function ed(i){let e=i.pixels*nl;return[[-(i.extendStart||0),tl],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*nl-tl,(n+1)*nl+tl]),[e-tl,e+(i.extendEnd||0)]]}var td=2.5/6,Z_=.24,Ir=.018,Hc=new Map,J_=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function Gc(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let h of t)if(!Number.isInteger(h.at)||h.at<=0||h.at>=i||![0,1].includes(h.layer)||!["left","right","seam"].includes(h.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(Hc.has(s))return Hc.get(s).map(h=>({...h}));let o=[0,1].map(h=>new Set(t.filter(p=>p.layer===h).map(p=>p.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let h=1;h<=i;h++){let p=new Map;for(let u of a.values())for(let f of[!1,!0])for(let g of[!1,!0]){let v=[f,g];if(h<i&&f&&g&&!(o[0].has(h)&&o[1].has(h)))continue;let m=[...u.starts],d=[...u.score],M=[],w=!0;for(let R of[0,1]){let I=m[R],x=h-I,S=R^e;if(x>6||!v[R]&&(h===i||x===6||o[R].has(h))){w=!1;break}if(!v[R])continue;let B=r.left&&S===1&&I===0||t.some(F=>F.layer===R&&F.at===I&&F.side==="left"),T=r.right&&S===1&&h===i||t.some(F=>F.layer===R&&F.at===h&&F.side==="right");if(B&&T){w=!1;break}let k=B?"left":T?"right":null,U={};for(let F of t.filter(te=>te.layer===R&&te.fullEndSlot))F.side==="left"&&F.at===h&&(U.extendEnd=Ir),F.side==="left"&&F.at===I&&(U.extraStartTrim=Ir),F.side==="right"&&F.at===h&&(U.extraEndTrim=Ir),F.side==="right"&&F.at===I&&(U.extendStart=Ir);r.extraTrim&&B&&I===0&&(U.extraStartTrim=Ir),r.extraTrim&&T&&h===i&&(U.extraEndTrim=Ir);let G={pixels:x,start:I*td,layer:S,trim:k,...U},[z,L]=Qn(G,!1);if(L-z>2.5+1e-9||L-z<=0){w=!1;break}d[0]+=+(x===1&&!!k),d[1]+=+(x===1),d[2]++,d[3]+=1/(x*td-(k?Z_:0)),S===1&&I===0&&(d[4]+=Math.abs(x-n)),M.push(G),m[R]=h}if(!w)continue;let y=m.join(","),P=p.get(y);(!P||J_(d,P.score))&&p.set(y,{starts:m,score:d,pieces:[...u.pieces,...M]})}a=p}let c=a.get(`${i},${i}`);if(!c)throw new Error("No native staggered stock layout: "+s);let l=c.pieces.sort((h,p)=>p.layer-h.layer||h.start-p.start);return Hc.set(s,l),l.map(h=>({...h}))}function nd(i,e=2){return Gc(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var et=2.5/6,Vt=.24,ot=.018,lt=Vt/2,Xe=1e-7,Dr=new D(1,0,0),Zi=new D(0,1,0),Ps=new D(0,0,1);function id(i={},e={},t={}){let n=i.wood||new $n({color:"#c7a46f",side:Qt}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,c=nd;function l(m,d,M,w){let y=[];for(let P=0;P<m.length;P++){let R=m[P],I=m[(P+1)%m.length],x=w*(R[d]-M),S=w*(I[d]-M);x>=-Xe&&y.push(R.clone()),x>=-Xe!=S>=-Xe&&y.push(R.clone().lerp(I,x/(x-S)))}return y}function h(m){let d=m.pixels*et,M=[new ue(-(m.extendStart||0),0),new ue(d+(m.extendEnd||0),0),new ue(d+(m.extendEnd||0),lt),new ue(d-ot,lt),new ue(d-ot,Vt)];for(let S=m.pixels-1;S>=1;S--){let B=S*et;M.push(new ue(B+ot,Vt),new ue(B+ot,lt),new ue(B-ot,lt),new ue(B-ot,Vt))}M.push(new ue(ot,Vt),new ue(ot,lt),new ue(-(m.extendStart||0),lt));let w=M,[y,P]=Qn(m);if(P<=y+Xe||(y>-(m.extendStart||0)+Xe&&(w=l(w,"x",y,1)),P<d+(m.extendEnd||0)-Xe&&(w=l(w,"x",P,-1)),w.length<3))return null;let R=new ui(w);R.closePath();let I=new Oi(R,{depth:ot,bevelEnabled:!1,curveSegments:1});I.translate(0,-lt,0);let x=I.getAttribute("uv");for(let S=0;S<x.count;S++)x.setXY(S,x.getX(S)/2.5,x.getY(S)/Vt);return I}function p(m,d,M,w=[],y=null){let[P,R]=Qn(m);y&&(P=Math.max(P,y[0]-m.start),R=Math.min(R,y[1]-m.start));let I=R>P+Xe?[[P,R]]:[];for(let x of w){let S=d===0?x.v0:x.u0,B=d===0?x.v1:x.u1;if(M+ot<=S+Xe||M>=B-Xe)continue;let T=(d===0?x.u0:x.v0)-m.start,k=(d===0?x.u1:x.v1)-m.start;I=I.flatMap(([U,G])=>k<=U||T>=G?[[U,G]]:[[U,Math.min(G,T)],[Math.max(U,k),G]].filter(([z,L])=>L>z+Xe))}return I.map(([x,S])=>({...m,minCut:x,limit:S}))}function u(m,d,M,w,y=[]){let P=m.pixels*et,[R,I]=Qn(m);if(I<=R+Xe)return null;let x=ed(m),S=(m.connectorCuts||[]).map(Z=>({x0:Z.end==="start"?Z.offset||0:P-(Z.offset||0)-lt,x1:Z.end==="start"?(Z.offset||0)+lt:P-(Z.offset||0),y0:Z.edge==="slotted"?lt-ot:-lt,y1:Z.edge==="slotted"?lt:-lt+ot})),B=[R,I];for(let Z of x)for(let ie of Z)ie>R+Xe&&ie<I-Xe&&B.push(ie);for(let Z of S)for(let ie of[Z.x0,Z.x1])ie>R+Xe&&ie<I-Xe&&B.push(ie);B.sort((Z,ie)=>Z-ie);let T=new Map,k=!1,U=Z=>`${Math.round(Z.x*1e8)},${Math.round(Z.y*1e8)},${Math.round(Z.z*1e8)}`;function G(Z,ie){let W=[],ne=[];for(let ae of Z){let Me=[];for(let H=0;H<ae.length;H++){let Q=ae[H],j=ae[(H+1)%ae.length],pe=ie.c-ie.n.dot(Q.clone().add(M)),we=ie.c-ie.n.dot(j.clone().add(M));if(pe>=-Xe?Me.push(Q):k=!0,pe>=-Xe!=we>=-Xe){let Ne=Q.clone().lerp(j,pe/(pe-we));Me.push(Ne),ne.push(Ne)}}Me.length>=3&&W.push(Me)}let ce=[...new Map(ne.map(ae=>[U(ae),ae])).values()];if(ce.length>=3){let ae=ce.reduce((j,pe)=>j.add(pe),new D).divideScalar(ce.length),Me=ie.n.clone().normalize(),H=(Math.abs(Me.y)>.9?Dr:Zi).clone().cross(Me).normalize(),Q=Me.clone().cross(H);ce.sort((j,pe)=>Math.atan2(j.clone().sub(ae).dot(Q),j.clone().sub(ae).dot(H))-Math.atan2(pe.clone().sub(ae).dot(Q),pe.clone().sub(ae).dot(H))),W.push(ce)}return W}function z(Z,ie,W,ne){let ce=[[Z,W,0],[ie,W,0],[ie,ne,0],[Z,ne,0],[Z,W,ot],[ie,W,ot],[ie,ne,ot],[Z,ne,ot]].map(j=>new D(...j).applyMatrix4(d)),ae=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(j=>j.map(pe=>ce[pe]));d.determinant()<0&&ae.forEach(j=>j.reverse());for(let j of w)if(ae=G(ae,j),!ae.length)return;let Me=k,H=y.length&&ae.some(j=>j.some(pe=>!y.some(we=>we.every(Ne=>Ne.n.dot(pe.clone().add(M))<=Ne.c+Xe)))),Q=y.length?y.flatMap(j=>{let pe=ae;for(let we of j)if(pe=G(pe,we),!pe.length)break;return pe}):ae;k=Me||!!H;for(let j of Q){let pe=j.filter((Ne,tt)=>tt===0||Ne.distanceToSquared(j[tt-1])>1e-18);if(pe.length<3)continue;let we=pe.map(U).sort().join("|");T.has(we)?T.delete(we):T.set(we,pe)}}for(let Z=0;Z<B.length-1;Z++){let ie=B[Z],W=B[Z+1],ne=(ie+W)/2;if(W-ie<Xe)continue;let ce=[...new Set([-lt,0,lt,...S.flatMap(ae=>[ae.y0,ae.y1])])].sort((ae,Me)=>ae-Me);for(let ae=0;ae<ce.length-1;ae++){let Me=ce[ae],H=ce[ae+1],Q=(Me+H)/2;Q>0&&x.some(([j,pe])=>ne>j&&ne<pe)||S.some(j=>ne>j.x0-Xe&&ne<j.x1+Xe&&Q>j.y0-Xe&&Q<j.y1+Xe)||z(ie,W,Me,H)}}let L=[],F=[];for(let Z of T.values())for(let ie=1;ie<Z.length-1;ie++){let W=Z[0],ne=Z[ie],ce=Z[ie+1];if(!(ne.clone().sub(W).cross(ce.clone().sub(W)).lengthSq()<1e-20))for(let ae of[W,ne,ce])L.push(ae.x,ae.y,ae.z),F.push(ae.dot(new D().setFromMatrixColumn(d,0))/2.5,ae.dot(new D().setFromMatrixColumn(d,1))/Vt)}if(!L.length)return null;let te=new kt;return te.setAttribute("position",new Tt(L,3)),te.setAttribute("uv",new Tt(F,2)),te.computeVertexNormals(),te.userData.angledCut=k,te}function f(m,d,M,w,y,P,R={},I=0,x=[],S=[]){let[B,T]=Qn(d,!1);if(T-B>2.5+Xe)throw new Error("Combstruct stock exceeds 2500 mm");let k=JSON.stringify([m.name,R.wallId||"",R.kind||"standard",R.axis,R.index,d.layer,I,...[d.start,d.pixels,d.minCut||0,d.limit??d.pixels*et].map(H=>Math.round(H*1e7)/1e7)]),U=t.connectors===!1||s?[]:e[k]||[];d={...d,connectorCuts:U};let G=d.layer^I,z=P.clone().addScaledVector(M,d.start).addScaledVector(y,G===0?-ot:0),L=new ft().makeBasis(M,w,y),F=x.length||S.length||(d.minCut||0)>Xe||d.limit!==void 0||U.length,te=F?u(d,L,z,x,S):h(d);if(!te)return null;F||te.applyMatrix4(L);let[Z,ie]=Qn(d,!1),[W,ne]=Qn(d),ce=!!te.userData.angledCut||W>Z+Xe||ne<ie-Xe,ae=new Rt(te,d.trim||ce?r:n);ae.position.copy(z),ae.castShadow=!0,ae.receiveShadow=!0;let Me={id:`board-${++a}`,mesh:ae,surface:m.name,kind:R.kind||"standard",axis:R.axis,index:R.index,layer:G,stockLayer:d.layer,start:d.start,stockLength:d.pixels*et,trim:d.trim||null,custom:ce,connectorKey:k,connectorCuts:U,stock:{...d},along:M.toArray(),normal:w.toArray(),thick:y.toArray(),frameOrigin:P.toArray(),clippingPlanes:x.map(H=>({n:H.n.toArray(),c:H.c})),actualStart:d.start+W,actualEnd:d.start+ne,...R};return S.length&&(Me.clippingRegions=S.map(H=>H.map(Q=>({n:Q.n.toArray(),c:Q.c})))),ae.name=Me.id,ae.userData={...Me,mesh:void 0},m.add(ae),o.push(Me),ae}function g(m,d,M,w,y,P,R,{phaseU:I=0,phaseV:x=0,holes:S=[],keepTop:B=!1,clearances:T=[0,0],startClearances:k=[0,0],verticalPlanes:U=[],verticalModules:G=M,kind:z="standard"}={}){for(let L=0;L<2;L++){let F=L===0?d:G,te=L===0?M:d,Z=L===0?y:P,ie=L===0?P:y,W=R.clone().multiplyScalar(L===0?1:-1),ne=L===0?I:x;for(let ce=1;ce<te;ce++)for(let ae of c(F)){let Me={...ae};B&&L===1&&Me.trim==="right"&&(Me.trim=null);let H=T[L]||0;H&&Math.abs(Me.start+Me.pixels*et-F*et)<Xe&&(Me.limit=Me.pixels*et-(Me.trim==="right"?Vt:0)-H),k[L]&&Me.start===0&&(Me.minCut=(Me.trim==="left"?Vt:0)+k[L]);let Q=ce*et+((Me.layer^ne)===0?-ot:0);for(let j of p(Me,L,Q,S))f(m,j,Z,W,ie,w.clone().addScaledVector(ie,ce*et),{kind:z,axis:L,index:ce},ne,L===1?U:[])}}}return{lengthJoints:s,boards:o,segments:c,jointStock:(m,d=0,M=[],w=2,y)=>Gc(m,d,s?M.map(P=>({...P,fullEndSlot:P.side!=="seam"})):M,w,y),openStock:p,addBoard:f,grid:g}}function il(i,e,{x0:t,z0:n,nx:r,nz:s,top:o,kind:a,walls:c=[],holes:l=[],range:h,planes:p=[]}){let{jointStock:u,openStock:f,addBoard:g}=i;for(let v of[0,1]){let m=v===0?Ps:Dr,d=v===0?Dr:Ps,M=v===0?Zi:Zi.clone().negate(),w=v===0?r:s;for(let y=1;y<w;y++){let P=(v===0?t:n)+y*et,R=h?h(v,P):v===0?s:r;if(!R)continue;let I=new D(t,o-lt,n).addScaledVector(d,y*et),x=v===0?n:t,S=c.filter(B=>B.axis===v&&(P>B.start+Xe&&P<B.end-Xe||B.endJambs?.some(T=>Math.abs(T-P)<Xe))).map(B=>({at:Math.round((B.node-x)/et),side:B.side,layer:B.verticalPhase??1})).filter(B=>B.at>0&&B.at<R);for(let B of u(R,0,S,2,{left:!0,right:!0,extraTrim:i.lengthJoints}))for(let T of f(B,v,y*et+(B.layer===0?-ot:0),l))g(e,T,m,M,d,I,{kind:a,axis:v,index:y},0,p)}}}function rd(i,{x0:e,x1:t,z0:n,z1:r,lengthJoints:s=!1}){let o=i.map(a=>{let c=a.axis??(Math.abs(a.b[0]-a.a[0])>Xe?0:1),l=c===0?a.a[1]:a.a[0],h=c===0?n:e,p=c===0?r:t,u=!!a.exterior,f=u&&Math.abs(l-h)<Vt?"left":"right",g=u?f==="left"?h:p:h+Math.round((l+lt-h)/et)*et;return{...a,axis:c,side:f,node:g,fixed:g+(f==="left"?1:-1)*(lt+(s?ot:0)),originalFixed:l,start:c===0?a.a[0]:a.a[1],end:c===0?a.b[0]:a.b[1],normal:(c===0?Ps:Dr).clone().multiplyScalar(u&&f==="right"?-1:1)}});for(let a of o){let c=a.axis===0?e:n,l=a.axis===0?t:r,h=p=>{if(Math.abs(p-c)<=Vt+.02)return c;if(Math.abs(p-l)<=Vt+.02)return l;let u=o.filter(f=>f.axis!==a.axis&&f.level===a.level&&a.originalFixed>=f.start-lt-Xe&&a.originalFixed<=f.end+lt+Xe&&Math.abs(p-f.originalFixed)<=Vt+.02).sort((f,g)=>Math.abs(p-f.originalFixed)-Math.abs(p-g.originalFixed))[0];return u?u.node:c+Math.round((p-c)/et)*et};if(a.start=h(a.start),a.end=h(a.end),a.end<=a.start+Xe)throw Error("Empty native wall span: "+a.id)}return o}function sd(i,e,t,{target:n,base:r,modules:s,capAt:o=s,cap:a=!0,verticalEnds:c,planes:l=[],verticalGaps:h=[],continueFromBelow:p=()=>!1,targetForRow:u,holes:f=[],frameOpenings:g=!1,verticalTreatment:v}){let{jointStock:m,openStock:d,addBoard:M}=i,w=e.axis===0?Dr:Ps,y=e.axis===0?1:0,P=Math.round((e.end-e.start)/et),R=e.axis===0?new D(e.start,r,e.fixed):new D(e.fixed,r,e.start),I=t.filter(T=>T.axis!==e.axis&&T.level===e.level&&e.fixed>T.start-Xe&&e.fixed<T.end+Xe&&T.node>e.start+Xe&&T.node<e.end-Xe).map(T=>({at:Math.round((T.node-e.start)/et),side:T.side,layer:1^y})),x=e.axis===0?t.filter(T=>T.axis===1&&T.level===e.level&&(i.lengthJoints?e.node>T.start+Xe&&e.node<T.end-Xe:e.fixed>T.start+lt&&e.fixed<T.end-lt)&&T.node>e.start+Xe&&T.node<e.end-Xe):[];for(let T of x)I.push({at:Math.round((T.node-e.start)/et),side:"seam",layer:y});for(let T=1;T<o+(a?1:0);T++)for(let k of m(P,y,I,2,{left:!0,right:!0,...e.horizontalEnds,extraTrim:i.lengthJoints}))for(let U of d(k,0,T*et+((k.layer^y)===0?-ot:0),f))M(u?.(T)||n,U,w,e.normal,Zi,R.clone().addScaledVector(Zi,T*et),{kind:e.exterior?"wall-horizontal":"partition-horizontal",wallId:e.id,axis:0,index:T},y,l);let S=T=>g&&f.some(k=>Math.abs(k.u0-(T*et+ot))<Xe||Math.abs(k.u1-(T*et-ot))<Xe),B=e.verticalPhase??1;if(B!==0&&B!==1)throw Error("Invalid upright ply phase: "+e.id);for(let T=0;T<=P;T++)for(let k of m(s,B,h,2,c)){if((T===0||T===P)&&!S(T)||x.some(z=>Math.abs(e.start+T*et-z.node)<Xe))continue;let U={...k};e.exterior&&l.length&&U.trim==="right"&&U.start+U.pixels*et>=s*et-Xe&&(U.trim=null),p(e.start+T*et)&&U.start===0&&U.layer===0&&(U.trim="left",i.lengthJoints&&(U.extraStartTrim=ot));let G=v?.(U.layer^B,T);for(let z of d(U,1,T*et+((U.layer^B)===0?-ot:0),f))M(n,z,Zi,e.normal.clone().negate(),w,R.clone().addScaledVector(w,T*et),{kind:e.exterior?"wall-vertical":"partition-vertical",wallId:e.id,axis:1,index:T,...G?{roofLap:G.role}:{}},B,G?.planes||l,G?.regions||[])}return{...e,origin:{x:R.x,y:r,z:R.z},holes:f,depth:Vt}}function od({pitch:i,spanHalf:e,ridgeUnderside:t,axis:n=0,clearance:r=.001}){let s=i*Math.PI/180,o=Math.cos(s),a=Math.sin(s),c=Math.tan(s),l=e-lt-ot,h=l-lt,p=l+lt,u=t+lt/o,f=l/o-Vt/4*c,g=((f-et/2)%et+et)%et-et,v=f-et/2,m=f+et/2,d=(w,y)=>({n:w,c:y});function M(w){let y=new D().setComponent(n,w),P=new D(0,1,0),R=y.clone().multiplyScalar(o).addScaledVector(P,-a),I=y.clone().multiplyScalar(a).addScaledVector(P,o),x=z=>z-a*u,S=z=>z+o*u,B=d(I.clone(),S(0)),T=d(I.clone().negate(),-S(0)),k=[[B],[T,d(R.clone().negate(),-x(v+ot+r)),d(R.clone(),x(m-ot-r))]],U=d(I.clone(),S(-lt)),G=d(I.clone(),S(lt));return{sign:w,q:y,along:R,normal:I,origin:new D(0,u,0).addScaledVector(R,g),wall(z){return{planes:[z===1?G:U],regions:z===1?k:[],role:z===1?"long-lap":"short-bearing"}},roof(z){return z===0?[{planes:[],regions:[],role:"continuous"}]:[{planes:[d(y.clone(),h)],regions:[],role:"inner-ending"},{planes:[d(y.clone().negate(),-p)],regions:[[B],[T,d(R.clone().negate(),-x(m-ot))]],role:"eave-ending"}]},slotPlanes(z,L=0){let F=z==="inner"?v:m;return[d(R.clone(),x(F+ot)),d(R.clone().negate(),-x(F-ot)),d(I.clone().negate(),-S(0)),d(I.clone(),S(lt+L))]}}}return{pitch:i,clearance:r,phaseOrigin:g,wallCenter:l,inner:h,outer:p,centerY:u,toothCenter:f,slotInner:v,slotOuter:m,axis:n,side:M,slabBeveled:!1}}var st=2.5/6,Pt=.24,qe=.018,Mi=Pt/2,bi=1e-7,Is=new D(1,0,0),ad=new D(0,1,0),Ds=new D(0,0,1);function ld(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=t?7:8,r=i.wood||new $n({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new ln;o.name="Combstruct 90";let a=E=>{let O=new ln;return O.name=E,o.add(O),O},c=["rear","left","front","right"],l={floor:a("Floor and continuous terrace"),groundWalls:c.map(E=>a(`Ground floor \u2014 ${E}`)),upperWalls:c.map(E=>a(`Upper floor \u2014 ${E}`)),groundPartitions:a("Ground-floor internal walls"),upperPartitions:a("Upper-floor internal walls"),slab:a("Ceiling, balkon i zadaszenia"),ceiling:a("Ceiling poddasza"),roof:a("Roof 45\xB0"),gables:[a("Szczyt lewy"),a("Szczyt prawy")],canopy:a("Obramowanie zadaszenia"),balconySupports:a("Podparcie balkonu"),stairs:a("Stairs")},{envelope:h}=wt,{width:p,depth:u,x0:f,x1:g,z0:v,z1:m}=h,d=t?{...wt.levels,bearing:n*st,slabBottom:n*st+qe,upper:n*st+qe+Pt,roofEave:wt.levels.roofEave+Pt-st,roofRidgeUnderside:wt.levels.roofRidgeUnderside+Pt-st}:wt.levels,M=0,w=t?n*st:d.slabBottom,y=w+8*st+(t?qe:-Pt),P=y+Pt,R=id(i,ju,e),{boards:I,segments:x,openStock:S,addBoard:B}=R,T=[],k=[],U={ground:[],upper:[],partitions:[],roof:[]},G={...h,floorBottom:0,floorTop:Pt,wallTop:d.bearing,clearHeight:d.slabBottom-Pt,slabBottom:d.slabBottom,slabTop:d.upper,upperFloorY:d.upper,storeyHeight:d.upper-Pt,ceilingBottom:y,ceilingTop:P,roofEaveY:d.roofEave,roofUnderRidgeY:d.roofRidgeUnderside,roofRidgeY:d.roofRidgeUnderside+Pt*Math.SQRT2,roofOverhang:h.roofEaveOverhang,slabShift:{x:M,z:M},upperCeilingShift:{x:2*M,z:2*M},usableConceptArea:wt.facts.usableArea,groundArea:wt.facts.groundArea,upperArea:wt.facts.upperArea,upperFloorArea:wt.facts.upperFloorArea,structuralFootprintArea:p*u,terraceArea:wt.facts.terraceArea,balconyArea:wt.facts.balconyArea,boardDepth:Pt,boardThickness:qe,constructionOnly:!0},z=[{n:new D(0,1,1),c:d.roofRidgeUnderside},{n:new D(0,1,-1),c:d.roofRidgeUnderside}],L=t?od({pitch:45,spanHalf:u/2,ridgeUnderside:d.roofRidgeUnderside,axis:2}):null;L&&(G.roofWallJoint={strategy:"between-slots",clearance:L.clearance,phaseOrigin:L.phaseOrigin,wallCenter:L.wallCenter,slotInner:L.slotInner,slotOuter:L.slotOuter,slabBeveled:!1,knee:!0});let F=[...["rear","front"].map((E,O)=>({id:`balcony-support-${E}`,level:"ground",axis:1,a:[f+28*st-Mi,O?m-2*st:v],b:[f+28*st-Mi,O?m:v+2*st],exterior:!1,support:!0,holes:[]}))],te=rd([...wt.exteriorWalls.map(E=>({...E,exterior:!0})),...wt.partitions,...F],{...h,lengthJoints:t});for(let E of te)E.support&&(E.horizontalEnds={left:!1,right:!1}),(E.id==="upper-hall-notch-west"||E.id==="upper-hall-notch-north")&&(E.horizontalEnds={left:!1,right:!0}),(E.id==="upper-hall-notch-west"||E.id==="upper-hall-notch-north")&&(E.verticalPhase=0);for(let E of te)E.endJambs=E.holes.flatMap(O=>{let K=E.a[E.axis]+O.at-qe,J=K+O.width+2*qe;return[K,J].filter(ge=>Math.abs(ge-E.start)<bi||Math.abs(ge-E.end)<bi)});let Z=te.filter(E=>E.level==="ground"),ie=te.filter(E=>E.level==="upper");il(R,l.floor,{x0:f,z0:v,nx:30,nz:16,top:Pt,kind:"floor",walls:Z});let W=new D(f,d.slabBottom+Mi,v-2*st),ne={u0:wt.stair.opening.z0-W.z,u1:wt.stair.opening.z1-W.z,v0:wt.stair.opening.x0-W.x,v1:wt.stair.opening.x1-W.x};il(R,l.slab,{x0:f,z0:v-2*st,nx:28,nz:20,top:d.upper,kind:"slab",walls:[...Z,...ie],holes:[ne]}),il(R,l.ceiling,{x0:f,z0:v,nx:23,nz:16,top:P,kind:"ceiling",walls:ie,planes:z});let ce=Array.from({length:22},(E,O)=>f+(O+1)*st),ae=[];for(let E of te){let O=E.level==="upper",K=O?w:0,J=E.exterior&&O?Math.ceil((d.roofRidgeUnderside-K)/st)+1:t?O?9:n+1:8,ge;if(E.support)ge=new ln,ge.name=E.id,l.balconySupports.add(ge);else if(E.exterior){let he=c.indexOf(E.id.replace(O?"upper-":"ground-",""));ge=(O?l.upperWalls:l.groundWalls)[he]}else ge=new ln,ge.name=E.id,(O?l.upperPartitions:l.groundPartitions).add(ge);let fe=E.holes.map(he=>{let _e={...he};if(t&&O){let{sill:ve,lintel:ye}=_e.moduleBounds;_e.bottom=K+(ve===null?Pt+qe:ve*st+qe),_e.height=K+ye*st-qe-_e.bottom}let Ie=(E.axis===0?E.a[0]:E.a[1])+_e.at,Ae=Ie-E.start,Ze=Ae+_e.width,N=E.axis===0?{x0:Ie,x1:Ie+_e.width,z0:E.fixed-Mi,z1:E.fixed+Mi,y0:_e.bottom,y1:_e.bottom+_e.height}:{x0:E.fixed-Mi,x1:E.fixed+Mi,z0:Ie,z1:Ie+_e.width,y0:_e.bottom,y1:_e.bottom+_e.height};return{..._e,u0:Ae,u1:Ze,v0:_e.bottom-K,v1:_e.bottom+_e.height-K,world:N}});U[E.exterior?E.level:"partitions"].push(...fe);let Pe=he=>O&&(E.exterior||Z.some(_e=>!_e.support&&_e.axis===E.axis&&Math.abs(_e.fixed-E.fixed)<bi&&he>_e.start+bi&&he<_e.end-bi)),Se=L&&O&&E.exterior&&E.axis===0?he=>L.side(E.side==="left"?-1:1).wall(he):void 0,oe=sd(R,E,te,{target:ge,base:K,modules:J,capAt:O&&E.exterior?J:O?8:n,cap:t||!!(O&&E.exterior),holes:fe,frameOpenings:!0,planes:t?[...O?z:[],...O&&E.exterior?[]:[{n:ad,c:O?P:d.upper}]]:O?z:[],verticalEnds:t?{left:!0,right:!1,extraTrim:O}:void 0,verticalGaps:t?[{at:O?8:n,side:"left",layer:1^(E.verticalPhase??1)}]:O&&E.exterior?[{at:8,side:"right",layer:0}]:[],continueFromBelow:Pe,verticalTreatment:Se});T.push(oe)}let Me=Math.PI/4,H=Math.sin(Me),Q=Math.cos(Me),j=f-2*st,pe=27,we=L?.phaseOrigin??-st/2,Ne=u/2+st,tt=Math.ceil((Ne/Q-we)/st)+1,Ge=d.roofRidgeUnderside+Mi/Q;for(let E of[-1,1]){let O=new D(0,-H,E*Q),K=new D(0,Q,E*H),J=new D(j,Ge,0).addScaledVector(O,we),ge=new ln;ge.name=E===-1?"roof-rear":"roof-front",l.roof.add(ge);let fe=E===-1?[{n:Ds.clone(),c:0},{n:Ds.clone().negate(),c:Ne}]:[{n:Ds.clone().negate(),c:0},{n:Ds.clone(),c:Ne}],Pe=E===-1?[7,13,17].map((Se,oe)=>({id:`rooflight-${oe+1}`,kind:"rooflight",u0:6*st+qe,u1:8*st-qe,v0:(Se-1)*st+qe,v1:(Se+1)*st-qe})):[];U.roof.push(...Pe.map(Se=>({...Se,roofSide:E,frame:{origin:J.toArray(),along:O.toArray(),across:Is.toArray()}})));for(let Se=1;Se<pe;Se++){let oe=j+Se*st;E===-1&&ae.push(oe);for(let he of x(tt)){let _e={...he,trim:null},Ie=E===-1?0:1,Ae=L&&oe>f+bi&&oe<g-bi,Ze=Ae?L.side(E).roof(_e.layer^Ie):[{planes:[],regions:[]}];for(let N of S(_e,0,Se*st+((_e.layer^Ie)===0?-qe:0),Pe))for(let ve of Ze)B(ge,N,O,K,Is,J.clone().addScaledVector(Is,Se*st),{kind:"roof-slope",axis:0,index:Se,roofSide:E,...Ae?{roofLap:ve.role}:{}},Ie,[...fe,...ve.planes],ve.regions)}}for(let Se=1;Se<tt;Se++)for(let oe of x(pe))for(let he of S(oe,1,Se*st+(oe.layer===0?-qe:0),Pe))B(ge,he,Is,K.clone().negate(),O,J.clone().addScaledVector(O,Se*st),{kind:"roof-cross",axis:1,index:Se,roofSide:E},0,fe)}let X=t?{...wt.stair,riser:(d.upper-Pt)/16,upperY:d.upper}:wt.stair,re=X.riser,se=i.stair||r;function be(E,O,K,J,ge,fe,Pe){let Se=new Rt(new hi(ge,fe,Pe),se);return Se.name=E,Se.position.set(O+ge/2,K-fe/2,J+Pe/2),Se.castShadow=!0,Se.receiveShadow=!0,l.stairs.add(Se),Se}for(let E=0;E<7;E++){let O=X.floorY+(E+1)*re,K=X.z0+E*X.tread;be(`Lower step ${E+1}`,X.x0+2*qe,O,K,.9,2*qe,X.tread),be(`Lower riser ${E+1}`,X.x0+2*qe,O-2*qe,K,.9,re-2*qe,qe);let J=X.z0+(6-E)*X.tread,ge=X.floorY+(9+E)*re;be(`Upper step ${E+1}`,X.x1-.9-2*qe,ge,J,.9,2*qe,X.tread),be(`Upper riser ${E+1}`,X.x1-.9-2*qe,ge-2*qe,J+X.tread-qe,.9,re-2*qe,qe)}be("Spocznik",X.x0,X.floorY+8*re,X.z0+7*X.tread,X.x1-X.x0,2*qe,.9),be("Podstopnica spocznika",X.x0+2*qe,Pt+8*re-2*qe,X.z0+7*X.tread-qe,.9,re-2*qe,qe),be("Exit riser",X.x1-.9-2*qe,d.upper-2*qe,X.z0,.9,re-2*qe,qe);function C(E,O,K,J,ge,fe){let Pe=new ui;Pe.moveTo(K,J-.1),Pe.lineTo(ge,fe-.1),Pe.lineTo(ge,fe+.1),Pe.lineTo(K,J+.1),Pe.closePath();let Se=new Oi(Pe,{depth:2*qe,bevelEnabled:!1,curveSegments:1});Se.applyMatrix4(new ft().makeBasis(Ds,ad,Is.clone().negate())),Se.translate(O+2*qe,0,0);let oe=new Rt(Se,se);oe.name=E,oe.castShadow=!0,oe.receiveShadow=!0,l.stairs.add(oe)}let Be=X.z0+7*X.tread,Te=Pt+8*re;for(let E of[X.x0,X.x0+.9+2*qe])C("Lower-flight stringer",E,X.z0,Pt+.1,Be,Te-2*qe-.1);for(let E of[X.x1-.9-4*qe,X.x1-2*qe])C("Upper-flight stringer",E,Be,Te-2*qe-.1,X.z0,d.upper-2*qe-.1);let Ve=[],xe=(E,O,K)=>Ve.push({part:K,y:E,z:O,clearance:Math.min(y,d.roofRidgeUnderside-Math.abs(O))-E});for(let E=0;E<7;E++)for(let O of[0,.5,1])xe(Pt+(E+1)*re,X.z0+(E+O)*X.tread,"lower-flight"),xe(Pt+(9+E)*re,X.z0+(6-E+O)*X.tread,"upper-flight");for(let E of[0,.5,1])xe(Te,Be+.9*E,"landing");xe(d.upper,X.z0-.1,"upper-arrival"),G.stair={...X,outerFlightWidth:.9+4*qe,centreGap:X.x1-X.x0-2*(.9+4*qe),clearanceToStructuralEnvelope:Math.min(...Ve.map(E=>E.clearance)),clearanceStations:Ve},G.floorBounds={x0:f,x1:g+7*st,z0:v,z1:m},G.slabBounds={x0:W.x,x1:W.x+28*st,z0:W.z,z1:W.z+20*st};let A=wt.rooms.map(E=>({...E,polygon:E.polygon.map(([O,K])=>({x:O,z:K}))})),_={jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,module:st,stockMaxLength:2.5,terminalDifference:Pt,pairWidth:2*qe,slabPlanShift:0,junctionsCoplanar:!0,wallAxes:ce,roofAxes:ae,roofAxesAligned:ce.every(E=>ae.some(O=>Math.abs(O-E)<bi)),floorTerraceContinuous:!0,slabBalconyContinuous:!0,shortBearingDirection:"Z",shortBearingSlots:"up",exteriorVerticalSlots:"outward",connectorBoards:I.filter(E=>E.connectorCuts.length).length,roofPitchDegrees:45,ridgeInteriorAngle:90,rooflightCount:3,loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:l,boards:I,dimensions:G,wallPanels:T,openings:U,rooms:A,joints:k,validation:_,layout:wt}}var $_=document.getElementById("comb-90-model"),sl=i=>$_.querySelector(i),rl=sl(".model-stage"),Ls=sl(".model-loading");try{let k=function(){B||(B=requestAnimationFrame(U))},U=function(){B=0,r.update(),t.render(i,e)},G=function(W,ne,ce=1.04){let ae=W.getCenter(new D),Me=ne.clone().normalize(),H=new D(0,1,0).cross(Me).normalize(),Q=Me.clone().cross(H).normalize(),j=Math.tan(Ar.degToRad(e.fov/2)),pe=j*e.aspect,we=0;for(let tt of[W.min.x,W.max.x])for(let Ge of[W.min.y,W.max.y])for(let X of[W.min.z,W.max.z]){let re=new D(tt,Ge,X).sub(ae);we=Math.max(we,Math.abs(re.dot(H))/pe+re.dot(Me),Math.abs(re.dot(Q))/j+re.dot(Me))}let Ne=r.enableDamping;r.enableDamping=!1,r.update(),r.target.copy(ae),e.position.copy(ae).addScaledVector(Me,Math.max(we*ce,1)),e.updateProjectionMatrix(),r.minDistance=.3,r.maxDistance=60,r.update(),r.enableDamping=Ne,k()},z=function(){let W=new Ln;return d.root.updateMatrixWorld(!0),d.root.traverseVisible(ne=>{if(!ne.isMesh)return;ne.geometry.computeBoundingBox();let ce=ne.geometry.boundingBox.clone().applyMatrix4(ne.matrixWorld);T&&(ce.min.y=Math.max(ce.min.y,T[0]),ce.max.y=Math.min(ce.max.y,T[1])),ce.isEmpty()||W.union(ce)}),W},L=function(){let W=r.enableDamping;r.enableDamping=!1;for(let ne=0;ne<3;ne++){r.update(),e.updateMatrixWorld();let ce=1/0,ae=-1/0,Me=1/0,H=-1/0,Q=new D;d.root.traverseVisible(X=>{if(!X.isMesh)return;let re=X.geometry.getAttribute("position");for(let se=0;se<re.count;se++)Q.fromBufferAttribute(re,se).applyMatrix4(X.matrixWorld),!(T&&(Q.y<T[0]||Q.y>T[1]))&&(Q.project(e),ce=Math.min(ce,Q.x),ae=Math.max(ae,Q.x),Me=Math.min(Me,Q.y),H=Math.max(H,Q.y))});let j=e.position.distanceTo(r.target),pe=Math.tan(Ar.degToRad(e.fov/2)),we=new D().setFromMatrixColumn(e.matrixWorld,0),Ne=new D().setFromMatrixColumn(e.matrixWorld,1),tt=we.multiplyScalar((ce+ae)/2*j*pe*e.aspect).add(Ne.multiplyScalar((Me+H)/2*j*pe));r.target.add(tt),e.position.add(tt);let Ge=Math.max((ae-ce)/1.82,(H-Me)/1.82);e.position.sub(r.target).multiplyScalar(Ge).add(r.target)}r.update(),r.enableDamping=W},F=function(){let W=["ground","attic","floor","slab","ceiling","roof"].includes(S)?14:8,ne=S==="roof"?new D(8,24,-8):new D(S==="rear"?14:11,W,S==="rear"?-10:13);G(z(),ne),L()},te=function(W,ne){R(W).forEach(ce=>ce.visible=ne)},Z=function(W){S=W,T=null,t.clippingPlanes=[];for(let ae of I)ae.visible=!0;let ne=y.slabTop??y.upperFloorTop??3.1746666666666665,ce=y.slabBottom??2.9346666666666668;if(W==="ground"){for(let ae of["slab","ceiling","roof","gables","canopy","balconySupports"])te(M[ae],!1);for(let ae of["groundWalls","upperWalls"])R(M[ae]).slice(2).forEach(Me=>Me.visible=!1);te(M.upperPartitions,!1),T=[-.05,ce-.001],t.clippingPlanes=[new Xt(new D(0,-1,0),T[1])]}if(W==="attic"){for(let ae of["floor","ceiling","roof","canopy","balconySupports"])te(M[ae],!1);Array.isArray(M.gables)&&te(M.gables[1],!1);for(let ae of["groundWalls","upperWalls"])R(M[ae]).slice(2).forEach(Me=>Me.visible=!1);te(M.groundPartitions,!1),T=[ce-.002,ne+2.45],t.clippingPlanes=[new Xt(new D(0,1,0),-T[0]),new Xt(new D(0,-1,0),T[1])]}if(["floor","slab","ceiling","roof"].includes(W)){for(let ae of I)ae.visible=!1;te(M[W],!0)}sl("[data-view]").value=W,F(),k()},ie=function(){let W=Math.max(1,rl.clientWidth),ne=Math.max(1,rl.clientHeight);t.setSize(W,ne,!1),e.aspect=W/ne,e.updateProjectionMatrix(),F()};K_=k,j_=U,Q_=G,ex=z,tx=L,nx=F,ix=te,rx=Z,sx=ie;let i=new Zr;i.background=null;let e=new qt(35,1,.01,180),t=new Ya({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio||1,1.8)),t.toneMapping=xs,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=Qo,t.domElement.setAttribute("aria-label","Combstruct 90. Combstruct board structure; drag to rotate."),rl.append(t.domElement);let n=matchMedia("(prefers-reduced-motion: reduce)"),r=new Ka(e,t.domElement);r.enableDamping=!n.matches,r.dampingFactor=.09,r.rotateSpeed=.65,r.minPolarAngle=.03,r.maxPolarAngle=Math.PI*.53;let s=new ps("#f7fbff","#a6b4bf",2.1);i.add(s);let o=new br("#fff0d6",3);o.position.set(-6,11,9),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-16,o.shadow.camera.right=16,o.shadow.camera.top=16,o.shadow.camera.bottom=-16,o.shadow.camera.near=.1,o.shadow.camera.far=40,o.shadow.normalBias=.018,i.add(o);let a=new br("#cadfff",1.2);a.position.set(7,5,-7),i.add(a);let c=new Rt(new Bi(150,150),new us({color:"#4d6375",opacity:.17}));c.rotation.x=-Math.PI/2,c.position.y=-.012,c.receiveShadow=!0,i.add(c);let l=document.createElement("canvas");l.width=1024,l.height=128;let h=l.getContext("2d");h.fillStyle="#c7a46f",h.fillRect(0,0,1024,128);let p=142,u=()=>(p=1664525*p+1013904223>>>0,p/4294967296);for(let W=0;W<3500;W++){let ne=u()*1024,ce=u()*128,ae=4+u()*26;h.save(),h.translate(ne,ce),h.rotate((u()-.5)*2.5),h.fillStyle=`rgba(${u()>.5?"249,226,179":"107,79,43"},.12)`,h.fillRect(-ae/2,-1,ae,1+u()*3),h.restore()}let f=new es(l);f.colorSpace=Jt,f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let g=new $n({map:f,roughness:.78,side:Qt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),v=g.clone();v.color.set("#cebda4");let m=new xr({color:"#705a3c",transparent:!0,opacity:.5}),d=ld({wood:g,end:v,edge:m});i.add(d.root),i.updateMatrixWorld(!0);let M=d.groups,w=d.boards||[],y=d.dimensions||{},P=new Map;for(let W of w)W.mesh&&(W.mesh.updateWorldMatrix(!0,!1),P.set(W.mesh,W.mesh.matrixWorld.clone()));let R=W=>(Array.isArray(W)?W:[W]).filter(ne=>ne?.isObject3D),I=[...new Set(Object.values(M).flatMap(R))],x=[];for(let W of I){W.updateWorldMatrix(!0,!0);let ne=W.matrixWorld.clone().invert(),ce=[];if(W.traverse(H=>{H.isMesh&&!H.userData.viewerBatch&&ce.push(H)}),!ce.length)continue;let ae=new Map,Me=[];for(let H of ce){if(H.userData.viewerHidden)continue;let Q=ne.clone().multiply(H.matrixWorld),j=H.geometry.index?H.geometry.toNonIndexed():H.geometry.clone();j.applyMatrix4(Q);let pe=Array.isArray(H.material)?H.material[0]:H.material;ae.has(pe)||ae.set(pe,[]),ae.get(pe).push(j),Me.push(new ns(H.geometry,30).applyMatrix4(Q)),H.visible=!1,H.userData.viewerHidden=!0,x.push(H)}for(let[H,Q]of ae){let j=zc(Q,!1);if(Q.forEach(we=>we.dispose()),!j)throw Error("The preview geometry could not be merged.");let pe=new Rt(j,H);pe.castShadow=!0,pe.receiveShadow=!0,pe.userData.viewerBatch=!0,W.add(pe)}if(Me.length){let H=zc(Me,!1);if(Me.forEach(Q=>Q.dispose()),H){let Q=new jr(H,m);Q.userData.viewerBatch=!0,W.add(Q)}}}let S="structure",B=0,T=null;r.addEventListener("change",k),n.addEventListener("change",W=>{r.enableDamping=!W.matches,k()}),new ResizeObserver(ie).observe(rl),sl("[data-view]").addEventListener("change",W=>Z(W.target.value)),t.domElement.addEventListener("webglcontextlost",W=>{W.preventDefault(),Ls.hidden=!1,Ls.textContent="The 3D preview was interrupted. Refresh to return to the model."}),window.combstruct90={model:d,setView:Z,setMode:Z,reset:F,getState:()=>({ready:!0,view:S,boardCount:w.length,dimensions:y,rooms:d.rooms,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,validation:d.validation||null})},window.addEventListener("message",W=>{W.source===window.parent&&W.data?.type==="combstruct:visibility"&&W.data.visible&&ie()}),Ls.hidden=!0,ie(),Z("structure"),U()}catch(i){console.error(i),Ls.textContent="The 3D model could not start.",Ls.setAttribute("role","alert"),window.combstructError=String(i)}var K_,j_,Q_,ex,tx,nx,ix,rx,sx;})();
