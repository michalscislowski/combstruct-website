"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Zl=1,Rh=2;var xs=1,Qo=2,wr=3,Jn=0,jt=1,Qt=2,Un=0,Ii=1,Jl=2,$l=3,Kl=4,Ch=5;var ci=100,Ph=101,Ih=102,Dh=103,Lh=104,Nh=200,Uh=201,Fh=202,Oh=203,uo=204,fo=205,Bh=206,zh=207,kh=208,Vh=209,Hh=210,Gh=211,Wh=212,Xh=213,qh=214,po=0,mo=1,go=2,Di=3,_o=4,xo=5,vo=6,yo=7,jl=0,Yh=1,Zh=2,wn=0,Ql=1,ec=2,tc=3,vs=4,nc=5,ic=6,rc=7;var sc=300,xi=301,zi=302,ea=303,ta=304,ys=306,Mo=1e3,Pn=1001,bo=1002,Ft=1003,Jh=1004;var Ms=1005;var Bt=1006,na=1007;var vi=1008;var en=1009,oc=1010,ac=1011,Er=1012,ia=1013,En=1014,Tn=1015,Fn=1016,ra=1017,sa=1018,Tr=1020,lc=35902,cc=35899,hc=1021,uc=1022,mn=1023,In=1026,yi=1027,dc=1028,oa=1029,ki=1030,aa=1031;var la=1033,bs=33776,Ss=33777,ws=33778,Es=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37488,_a=37489,xa=37490,va=37491,ya=37808,Ma=37809,ba=37810,Sa=37811,wa=37812,Ea=37813,Ta=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,Ia=37819,Da=37820,La=37821,Na=36492,Ua=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286;var Gr=2300,So=2301,ho=2302,Ul=2303,Fl=2400,Ol=2401,Bl=2402;var $h=3200;var fc=0,Kh=1,Kn="",Jt="srgb",Li="srgb-linear",Wr="linear",ct="srgb";var Ci=7680;var zl=519,jh=512,Qh=513,eu=514,Va=515,tu=516,nu=517,Ha=518,iu=519,kl=35044;var pc="300 es",bn=2e3,dr=2001;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=Xr("canvas");return i.style.display="block",i}var Qc={},fr=null;function mc(...i){let e="THREE."+i.shift();fr?fr("log",e,...i):console.log(e,...i)}function su(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=su(i);let e="THREE."+i.shift();if(fr)fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=su(i);let e="THREE."+i.shift();if(fr)fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qr(...i){let e=i.join(" ");e in Qc||(Qc[e]=!0,He(...i))}function ou(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var au={[po]:mo,[go]:vo,[_o]:yo,[Di]:xo,[mo]:po,[vo]:go,[yo]:_o,[xo]:Di},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,hr=Math.PI/180,pr=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function yd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Md(i,e,t){return i!==e?(t-i)/(e-i):0}function kr(i,e,t){return(1-t)*i+t*e}function bd(i,e,t,n){return kr(i,e,1-Math.exp(-t*n))}function Sd(i,e=1){return e-Math.abs(gc(i,e*2)-e)}function wd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Td(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ad(i,e){return i+Math.random()*(e-i)}function Rd(i){return i*(.5-Math.random())}function Cd(i){i!==void 0&&(eh=i);let e=eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pd(i){return i*hr}function Id(i){return i*pr}function Dd(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),u=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*p,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*p,a*c);break;case"ZXZ":i.set(l*p,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ar={DEG2RAD:hr,RAD2DEG:pr,generateUUID:Vi,clamp:Qe,euclideanModulo:gc,mapLinear:yd,inverseLerp:Md,lerp:kr,damp:bd,pingpong:Sd,smoothstep:wd,smootherstep:Ed,randInt:Td,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Pd,radToDeg:Id,isPowerOfTwo:Dd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Ud,normalize:Zt,denormalize:cr},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3],u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(p!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+p*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);d=Math.sin(d*M)/S,a=Math.sin(a*M)/S,l=l*d+u*a,c=c*d+f*a,h=h*d+g*a,p=p*d+v*a}else{l=l*d+u*a,c=c*d+f*a,h=h*d+g*a,p=p*d+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*p+l*f-c*u,e[t+1]=l*g+h*u+c*p-a*f,e[t+2]=c*g+h*f+a*u-l*p,e[t+3]=h*g-a*p-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),p=a(s/2),u=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],u=n+a+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>p){let f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>p){let f=2*Math.sqrt(1+a-n-p);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*h,this.y=n+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new D,th=new cn,je=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],f=n[5],g=n[8],v=r[0],m=r[3],d=r[6],M=r[1],S=r[4],y=r[7],C=r[2],A=r[5],I=r[8];return s[0]=o*v+a*M+l*C,s[3]=o*m+a*S+l*A,s[6]=o*d+a*y+l*I,s[1]=c*v+h*M+p*C,s[4]=c*m+h*S+p*A,s[7]=c*d+h*y+p*I,s[2]=u*v+f*M+g*C,s[5]=u*m+f*S+g*A,s[8]=u*d+f*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=t*p+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=p*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=u*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cl.makeScale(e,t)),this}rotate(e){return this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new je,nh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Wr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var at=Fd();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Xr("canvas")),Ki.width=e.width,Ki.height=e.height;let r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Od=0,mr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hl(r[o].image)):s.push(hl(r[o]))}else s=hl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Bd=0,ul=new D,Kt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,r=Pn,s=Bt,o=vi,a=mn,l=en,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Vi(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=sc;Kt.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,C=(d+1)/2,A=(h+u)/4,I=(p+v)/4,x=(g+m)/4;return S>y&&S>C?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=I/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=x/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=I/s,r=x/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new Kt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var To=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class i{constructor(e,t,n,r,s,o,a,l,c,h,p,u,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,p,u,f,g,v,m)}set(e,t,n,r,s,o,a,l,c,h,p,u,f,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let u=o*h,f=o*p,g=a*h,v=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*p,g=c*h,v=c*p;t[0]=u+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*p,g=c*h,v=c*p;t[0]=u-v*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*p,g=a*h,v=a*p;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*p,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*p,t[8]=g*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*p+g,t[10]=u-v*p}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=u*p+v,t[5]=o*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,kd)}lookAt(e,t,n){let r=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ii.crossVectors(n,on),ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ii.crossVectors(n,on)),ii.normalize(),Fs.crossVectors(on,ii),r[0]=ii.x,r[4]=Fs.x,r[8]=on.x,r[1]=ii.y,r[5]=Fs.y,r[9]=on.y,r[2]=ii.z,r[6]=Fs.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],d=n[14],M=n[3],S=n[7],y=n[11],C=n[15],A=r[0],I=r[4],x=r[8],w=r[12],B=r[1],E=r[5],k=r[9],U=r[13],G=r[2],z=r[6],L=r[10],F=r[14],ie=r[3],J=r[7],oe=r[11],X=r[15];return s[0]=o*A+a*B+l*G+c*ie,s[4]=o*I+a*E+l*z+c*J,s[8]=o*x+a*k+l*L+c*oe,s[12]=o*w+a*U+l*F+c*X,s[1]=h*A+p*B+u*G+f*ie,s[5]=h*I+p*E+u*z+f*J,s[9]=h*x+p*k+u*L+f*oe,s[13]=h*w+p*U+u*F+f*X,s[2]=g*A+v*B+m*G+d*ie,s[6]=g*I+v*E+m*z+d*J,s[10]=g*x+v*k+m*L+d*oe,s[14]=g*w+v*U+m*F+d*X,s[3]=M*A+S*B+y*G+C*ie,s[7]=M*I+S*E+y*z+C*J,s[11]=M*x+S*k+y*L+C*oe,s[15]=M*w+S*U+y*F+C*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],d=e[15],M=l*f-c*u,S=a*f-c*p,y=a*u-l*p,C=o*f-c*h,A=o*u-l*h,I=o*p-a*h;return t*(v*M-m*S+d*y)-n*(g*M-m*C+d*A)+r*(g*S-v*C+d*I)-s*(g*y-v*A+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=t*a-n*o,S=t*l-r*o,y=t*c-s*o,C=n*l-r*a,A=n*c-s*a,I=r*c-s*l,x=h*v-p*g,w=h*m-u*g,B=h*d-f*g,E=p*m-u*v,k=p*d-f*v,U=u*d-f*m,G=M*U-S*k+y*E+C*B-A*w+I*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/G;return e[0]=(a*U-l*k+c*E)*z,e[1]=(r*k-n*U-s*E)*z,e[2]=(v*I-m*A+d*C)*z,e[3]=(u*A-p*I-f*C)*z,e[4]=(l*B-o*U-c*w)*z,e[5]=(t*U-r*B+s*w)*z,e[6]=(m*y-g*I-d*S)*z,e[7]=(h*I-u*y+f*S)*z,e[8]=(o*k-a*B+c*x)*z,e[9]=(n*B-t*k-s*x)*z,e[10]=(g*A-v*y+d*M)*z,e[11]=(p*y-h*A-f*M)*z,e[12]=(a*w-o*E-l*x)*z,e[13]=(t*E-n*w+r*x)*z,e[14]=(v*S-g*C-m*M)*z,e[15]=(h*C-p*S+u*M)*z,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,p=a+a,u=s*c,f=s*h,g=s*p,v=o*h,m=o*p,d=a*p,M=l*c,S=l*h,y=l*p,C=n.x,A=n.y,I=n.z;return r[0]=(1-(v+d))*C,r[1]=(f+y)*C,r[2]=(g-S)*C,r[3]=0,r[4]=(f-y)*A,r[5]=(1-(u+d))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(g+S)*I,r[9]=(m-M)*I,r[10]=(1-(u+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ji.set(r[0],r[1],r[2]).length(),a=ji.set(r[4],r[5],r[6]).length(),l=ji.set(r[8],r[9],r[10]).length();s<0&&(o=-o),vn.copy(this);let c=1/o,h=1/a,p=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=bn,l=!1){let c=this.elements,h=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===dr)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn,l=!1){let c=this.elements,h=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),f=-(n+r)/(n-r),g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===dr)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ji=new D,vn=new ft,zd=new D(0,0,0),kd=new D(1,1,1),ii=new D,Fs=new D,on=new D,rh=new ft,sh=new cn,Sn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vd=0,oh=new D,Qi=new cn,Hn=new ft,Os=new D,Nr=new D,Hd=new D,Gd=new cn,ah=new D(1,0,0),lh=new D(0,1,0),ch=new D(0,0,1),hh={type:"added"},Wd={type:"removed"},er={type:"childadded",child:null},dl={type:"childremoved",child:null},zt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Sn,n=new cn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Nr,Os,this.up):Hn.lookAt(Os,Nr,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),er.child=e,this.dispatchEvent(er),er.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};zt.DEFAULT_UP=new D(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xd={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=gc(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return at.workingToColorSpace(Wt.copy(this),e),Math.round(Qe(Wt.r*255,0,255))*65536+Math.round(Qe(Wt.g*255,0,255))*256+Math.round(Qe(Wt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Jt){at.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,r=Wt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Bs);let n=kr(ri.h,Bs.h,t),r=kr(ri.s,Bs.s,t),s=kr(ri.l,Bs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new rt;rt.NAMES=lu;var Jr=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new D,Gn=new D,pl=new D,Wn=new D,tr=new D,nr=new D,uh=new D,ml=new D,gl=new D,_l=new D,xl=new Mt,vl=new Mt,yl=new Mt,Yn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){yn.subVectors(r,t),Gn.subVectors(n,t),pl.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Gn),l=yn.dot(pl),c=Gn.dot(Gn),h=Gn.dot(pl),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;let u=1/p,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return xl.setScalar(0),vl.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xl,s.x),o.addScaledVector(vl,s.y),o.addScaledVector(yl,s.z),o}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Gn.subVectors(e,t),yn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;tr.subVectors(r,n),nr.subVectors(s,n),ml.subVectors(e,n);let l=tr.dot(ml),c=nr.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,r);let h=tr.dot(gl),p=nr.dot(gl);if(h>=0&&p<=h)return t.copy(r);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(tr,o);_l.subVectors(e,s);let f=tr.dot(_l),g=nr.dot(_l);if(g>=0&&f<=g)return t.copy(s);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(nr,a);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return uh.subVectors(s,r),a=(p-h)/(p-h+(f-g)),t.copy(r).addScaledVector(uh,a);let d=1/(m+v+u);return o=v*d,a=u*d,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),ks.subVectors(this.max,Ur),ir.subVectors(e.a,Ur),rr.subVectors(e.b,Ur),sr.subVectors(e.c,Ur),si.subVectors(rr,ir),oi.subVectors(sr,rr),Ei.subVectors(ir,sr);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,si.z,0,-si.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!Ml(t,ir,rr,sr,ks)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,ir,rr,sr,ks))?!1:(Vs.crossVectors(si,oi),t=[Vs.x,Vs.y,Vs.z],Ml(t,ir,rr,sr,ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,zs=new Ln,ir=new D,rr=new D,sr=new D,si=new D,oi=new D,Ei=new D,Ur=new D,ks=new D,Vs=new D,Ti=new D;function Ml(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ti.fromArray(i,s);let a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var At=new D,Hs=new de,qd=0,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}};var $r=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Kr=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yd=new Ln,Fr=new D,bl=new D,Ni=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(bl)),this.expandByPoint(Fr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zd=0,pn=new ft,Sl=new zt,or=new D,an=new Ln,Or=new Ln,Ut=new D,kt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?Kr:$r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(an.min,Or.min),an.expandByPoint(Ut),Ut.addVectors(an.max,Or.max),an.expandByPoint(Ut)):(an.expandByPoint(Or.min),an.expandByPoint(Or.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ut.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),Ut.add(or)),r=Math.max(r,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new D,l[x]=new D;let c=new D,h=new D,p=new D,u=new de,f=new de,g=new de,v=new D,m=new D;function d(x,w,B){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,B),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,B),h.sub(c),p.sub(c),f.sub(u),g.sub(u);let E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(E),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),a[x].add(v),a[w].add(v),a[B].add(v),l[x].add(m),l[w].add(m),l[B].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,w=M.length;x<w;++x){let B=M[x],E=B.start,k=B.count;for(let U=E,G=E+k;U<G;U+=3)d(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let S=new D,y=new D,C=new D,A=new D;function I(x){C.fromBufferAttribute(r,x),A.copy(C);let w=a[x];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),y.crossVectors(A,w);let E=y.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,E)}for(let x=0,w=M.length;x<w;++x){let B=M[x],E=B.start,k=B.count;for(let U=E,G=E+k;U<G;U+=3)I(e.getX(U+0)),I(e.getX(U+1)),I(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,p=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,p=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let d=0;d<h;d++)u[g++]=c[f++]}return new $t(u,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],p=s[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Jd=0,Nn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ii,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new D,wl=new D,Gs=new D,ai=new D,El=new D,Ws=new D,Tl=new D,Ui=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wl.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(wl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Gs),a=ai.dot(this.direction),l=-ai.dot(Gs),c=ai.lengthSq(),h=Math.abs(1-o*o),p,u,f,g;if(h>0)if(p=o*l-a,u=o*a-l,g=s*h,p>=0)if(u>=-g)if(u<=g){let v=1/h;p*=v,u*=v,f=p*(p+o*u+2*a)+u*(o*p+u+2*l)+c}else u=s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-o*s+a)),u=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(p=Math.max(0,-(o*s+a)),u=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+u*(u+2*l)+c);else u=o>0?-s:s,p=Math.max(0,-(o*u+a)),f=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(wl).addScaledVector(Gs,u),f}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(a=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){El.subVectors(t,e),Ws.subVectors(n,e),Tl.crossVectors(El,Ws);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);let l=a*this.direction.dot(Ws.crossVectors(ai,Ws));if(l<0)return null;let c=a*this.direction.dot(El.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(Tl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jr=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dh=new ft,Ai=new Ui,Xs=new Ni,fh=new D,qs=new D,Ys=new D,Zs=new D,Al=new D,Js=new D,ph=new D,$s=new D,Rt=class extends zt{constructor(e=new kt,t=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],p=s[l];h!==0&&(Al.fromBufferAttribute(p,e),o?Js.addScaledVector(Al,h):Js.addScaledVector(Al.sub(t),h))}t.add(Js)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Xs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Xs,fh)===null||Ai.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=S;y<C;y+=3){let A=a.getX(y),I=a.getX(y+1),x=a.getX(y+2);r=Ks(this,d,e,n,c,h,p,A,I,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){let M=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=Ks(this,o,e,n,c,h,p,M,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let m=u[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,C=S;y<C;y+=3){let A=y,I=y+1,x=y+2;r=Ks(this,d,e,n,c,h,p,A,I,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,d=v;m<d;m+=3){let M=m,S=m+1,y=m+2;r=Ks(this,o,e,n,c,h,p,M,S,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function $d(i,e,t,n,r,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Jn,a),l===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:i}}function Ks(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,Zs);let h=$d(i,e,t,n,qs,Ys,Zs,ph);if(h){let p=new D;Yn.getBarycoord(ph,qs,Ys,Zs,p),r&&(h.uv=Yn.getInterpolatedAttribute(r,a,l,c,p,new de)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,a,l,c,p,new de)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(qs,Ys,Zs,u.normal),h.face=u,h.barycoord=p}return h}var Ao=class extends Kt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ft,h=Ft,p,u){super(null,o,a,l,c,h,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rl=new D,Kd=new D,jd=new je,Xt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rl.subVectors(n,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jd.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Ni,Qd=new de(.5,.5),js=new D,_r=class{constructor(e=new Xt,t=new Xt,n=new Xt,r=new Xt,s=new Xt,o=new Xt){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],f=s[7],g=s[8],v=s[9],m=s[10],d=s[11],M=s[12],S=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-o,f-h,d-g,C-M).normalize(),r[1].setComponents(c+o,f+h,d+g,C+M).normalize(),r[2].setComponents(c+a,f+p,d+v,C+S).normalize(),r[3].setComponents(c-a,f-p,d-v,C-S).normalize(),n)r[4].setComponents(l,u,m,y).normalize(),r[5].setComponents(c-l,f-u,d-m,C-y).normalize();else if(r[4].setComponents(c-l,f-u,d-m,C-y).normalize(),t===bn)r[5].setComponents(c+l,f+u,d+m,C+y).normalize();else if(t===dr)r[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Qd.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(js.x=r.normal.x>0?e.max.x:e.min.x,js.y=r.normal.y>0?e.max.y:e.min.y,js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xr=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new D,Co=new D,mh=new ft,Br=new Ui,Qs=new Ni,Cl=new D,gh=new D,Po=class extends zt{constructor(e=new kt,t=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ro.fromBufferAttribute(t,r-1),Co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new Tt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;mh.copy(r).invert(),Br.copy(e.ray).applyMatrix4(mh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let d=h.getX(v),M=h.getX(v+1),S=eo(this,e,Br,l,d,M,v);S&&t.push(S)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),d=eo(this,e,Br,l,v,m,g-1);d&&t.push(d)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let d=eo(this,e,Br,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=eo(this,e,Br,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function eo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,r),Co.fromBufferAttribute(a,s),t.distanceSqToSegment(Ro,Co,Cl,gh)>n)return;Cl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cl);if(!(c<e.near||c>e.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _h=new D,xh=new D,Qr=class extends Po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)_h.fromBufferAttribute(t,r),xh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_h.distanceTo(xh);e.setAttribute("lineDistance",new Tt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var es=class extends Kt{constructor(e=[],t=xi,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ts=class extends Kt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class extends Kt{constructor(e,t,n=En,r,s,o,a=Ft,l=Ft,c,h=In,p=1){if(h!==In&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Io=class extends hi{constructor(e,t=En,n=xi,r,s,o=Ft,a=Ft,l,c=In){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ns=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ui=class i extends kt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(p,2));function g(v,m,d,M,S,y,C,A,I,x,w){let B=y/I,E=C/x,k=y/2,U=C/2,G=A/2,z=I+1,L=x+1,F=0,ie=0,J=new D;for(let oe=0;oe<L;oe++){let X=oe*E-U;for(let re=0;re<z;re++){let ue=re*B-k;J[v]=ue*M,J[m]=X*S,J[d]=G,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=A>0?1:-1,h.push(J.x,J.y,J.z),p.push(re/I),p.push(1-oe/x),F+=1}}for(let oe=0;oe<x;oe++)for(let X=0;X<I;X++){let re=u+X+z*oe,ue=u+X+z*(oe+1),ae=u+(X+1)+z*(oe+1),ye=u+(X+1)+z*oe;l.push(re,ue,ye),l.push(ue,ae,ye),ie+=6}a.addGroup(f,ie,w),f+=ie,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var to=new D,no=new D,Pl=new D,io=new Yn,is=class extends kt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(hr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],p=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:m,c:d}=io;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),io.getNormal(Pl),p[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let M=0;M<3;M++){let S=(M+1)%3,y=p[M],C=p[S],A=io[h[M]],I=io[h[S]],x=`${y}_${C}`,w=`${C}_${y}`;w in u&&u[w]?(Pl.dot(u[w].normal)<=s&&(f.push(A.x,A.y,A.z),f.push(I.x,I.y,I.z)),u[w]=null):x in u||(u[x]={index0:c[M],index1:c[S],normal:Pl.clone()})}}for(let g in u)if(u[g]){let{index0:v,index1:m}=u[g];to.fromBufferAttribute(a,v),no.fromBufferAttribute(a,m),f.push(to.x,to.y,to.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let h=n[r],u=n[r+1]-h,f=(o-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new ft;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends un{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Do=class extends vr{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+p)+(l-a)/p;u*=h,f*=h,r(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var ro=new D,Il=new _c,Dl=new _c,Ll=new _c,Lo=class extends un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ro.subVectors(r[0],r[1]).add(r[0]),c=ro);let p=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Il.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,v,m),Dl.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,v,m),Ll.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Dl.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Ll.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(Il.calc(l),Dl.calc(l),Ll.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vh(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function ef(i,e){let t=1-i;return t*t*e}function tf(i,e){return 2*(1-i)*i*e}function nf(i,e){return i*i*e}function Vr(i,e,t,n){return ef(i,e)+tf(i,t)+nf(i,n)}function rf(i,e){let t=1-i;return t*t*t*e}function sf(i,e){let t=1-i;return 3*t*t*i*e}function of(i,e){return 3*(1-i)*i*i*e}function af(i,e){return i*i*i*e}function Hr(i,e,t,n,r){return rf(i,e)+sf(i,t)+of(i,n)+af(i,r)}var rs=class extends un{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,r.x,s.x,o.x,a.x),Hr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends un{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Hr(e,r.x,s.x,o.x,a.x),Hr(e,r.y,s.y,o.y,a.y),Hr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ss=class extends un{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends un{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends un{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends un{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y),Vr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(vh(a,l.x,c.x,h.x,p.x),vh(a,l.y,c.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new de().fromArray(r))}return this}},Vl=Object.freeze({__proto__:null,ArcCurve:Do,CatmullRomCurve3:Lo,CubicBezierCurve:rs,CubicBezierCurve3:No,EllipseCurve:vr,LineCurve:ss,LineCurve3:Uo,QuadraticBezierCurve:os,QuadraticBezierCurve3:Fo,SplineCurve:as}),Oo=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Vl[r.type]().fromJSON(r))}return this}},ls=class extends Oo{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ss(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new os(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new rs(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new as(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new vr(e,t,n,r,s,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},di=class extends ls{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ls().fromJSON(r))}return this}};function lf(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=cu(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ff(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let h=a,p=l;for(let u=t;u<r;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return cs(s,o,t,a,l,c,0),o}function cu(i,e,t,n,r){let s;if(r===wf(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=yh(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=yh(o/n|0,i[o],i[o+1],s);return s&&yr(s,s.next)&&(us(s),s=s.next),s}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yr(t,t.next)||yt(t.prev,t,t.next)===0)){if(us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cs(i,e,t,n,r,s,o){if(!i)return;!o&&s&&xf(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?hf(i,n,r,s):cf(i)){e.push(l.i,i.i,c.i),us(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=uf(Fi(i),e),cs(i,e,t,n,r,s,2)):o===2&&df(i,e,t,n,r,s):cs(Fi(i),e,t,n,r,s,1);break}}}function cf(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(r,s,o),p=Math.min(a,l,c),u=Math.max(r,s,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=f&&zr(r,a,s,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hf(i,e,t,n){let r=i.prev,s=i,o=i.next;if(yt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,p=s.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,p,u),v=Math.max(a,l,c),m=Math.max(h,p,u),d=Hl(f,g,e,t,n),M=Hl(v,m,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=d&&y&&y.z<=M;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&zr(a,h,l,p,c,u,S.x,S.y)&&yt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&zr(a,h,l,p,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=d;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&zr(a,h,l,p,c,u,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&zr(a,h,l,p,c,u,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function uf(i,e){let t=i;do{let n=t.prev,r=t.next.next;!yr(n,r)&&uu(n,t,t.next,r)&&hs(n,r)&&hs(r,n)&&(e.push(n.i,t.i,r.i),us(t),us(t.next),t=i=r),t=t.next}while(t!==i);return Fi(t)}function df(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mf(o,a)){let l=du(o,a);o=Fi(o,o.next),l=Fi(l,l.next),cs(o,e,t,n,r,s,0),cs(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ff(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=cu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(yf(c))}r.sort(pf);for(let s=0;s<r.length;s++)t=mf(r[s],t);return t}function pf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function mf(i,e){let t=gf(i,e);if(!t)return e;let n=du(t,i);return Fi(n,n.next),Fi(t,t.next)}function gf(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(yr(i,t))return t;do{if(yr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=n&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let p=Math.abs(r-t.y)/(n-t.x);hs(t,i)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&_f(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function _f(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function xf(i,e,t,n){let r=i;do r.z===0&&(r.z=Hl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,vf(r)}function vf(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Hl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function hu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function zr(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&hu(i,e,t,n,r,s,o,a)}function Mf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!bf(i,e)&&(hs(i,e)&&hs(e,i)&&Sf(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||yr(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yr(i,e){return i.x===e.x&&i.y===e.y}function uu(i,e,t,n){let r=oo(yt(i,e,t)),s=oo(yt(i,e,n)),o=oo(yt(t,n,i)),a=oo(yt(t,n,e));return!!(r!==s&&o!==a||r===0&&so(i,t,e)||s===0&&so(i,n,e)||o===0&&so(t,i,n)||a===0&&so(t,e,n))}function so(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function oo(i){return i>0?1:i<0?-1:0}function bf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hs(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Sf(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function du(i,e){let t=Gl(i.i,i.x,i.y),n=Gl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yh(i,e,t,n){let r=Gl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wf(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Wl=class{static triangulate(e,t,n=2){return lf(e,t,n)}},Pi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Mh(e),bh(n,e);let o=e.length;t.forEach(Mh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,bh(n,t[l]);let a=Wl.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Mh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends kt{constructor(e=new di([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Tt(r,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ef,S,y=!1,C,A,I,x;if(d){S=d.getSpacedPoints(h),y=!0,u=!1;let ne=d.isCatmullRomCurve3?d.closed:!1;C=d.computeFrenetFrames(h,ne),A=new D,I=new D,x=new D}u||(m=0,f=0,g=0,v=0);let w=a.extractPoints(c),B=w.shape,E=w.holes;if(!Pi.isClockWise(B)){B=B.reverse();for(let ne=0,$=E.length;ne<$;ne++){let se=E[ne];Pi.isClockWise(se)&&(E[ne]=se.reverse())}}function U(ne){let se=10000000000000001e-36,Se=ne[0];for(let R=1;R<=ne.length;R++){let ze=R%ne.length,Ae=ne[ze],Ve=Ae.x-Se.x,ve=Ae.y-Se.y,T=Ve*Ve+ve*ve,_=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(Se.x),Math.abs(Se.y)),O=se*_*_;if(T<=O){ne.splice(ze,1),R--;continue}Se=Ae}}U(B),E.forEach(U);let G=E.length,z=B;for(let ne=0;ne<G;ne++){let $=E[ne];B=B.concat($)}function L(ne,$,se){return $||Xe("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector($,se)}let F=B.length;function ie(ne,$,se){let Se,R,ze,Ae=ne.x-$.x,Ve=ne.y-$.y,ve=se.x-ne.x,T=se.y-ne.y,_=Ae*Ae+Ve*Ve,O=Ae*T-Ve*ve;if(Math.abs(O)>Number.EPSILON){let P=Math.sqrt(_),W=Math.sqrt(ve*ve+T*T),Y=$.x-Ve/P,Me=$.y+Ae/P,le=se.x-T/W,Ie=se.y+ve/W,De=((le-Y)*T-(Ie-Me)*ve)/(Ae*T-Ve*ve);Se=Y+Ae*De-ne.x,R=Me+Ve*De-ne.y;let ee=Se*Se+R*R;if(ee<=2)return new de(Se,R);ze=Math.sqrt(ee/2)}else{let P=!1;Ae>Number.EPSILON?ve>Number.EPSILON&&(P=!0):Ae<-Number.EPSILON?ve<-Number.EPSILON&&(P=!0):Math.sign(Ve)===Math.sign(T)&&(P=!0),P?(Se=-Ve,R=Ae,ze=Math.sqrt(_)):(Se=Ae,R=Ve,ze=Math.sqrt(_/2))}return new de(Se/ze,R/ze)}let J=[];for(let ne=0,$=z.length,se=$-1,Se=ne+1;ne<$;ne++,se++,Se++)se===$&&(se=0),Se===$&&(Se=0),J[ne]=ie(z[ne],z[se],z[Se]);let oe=[],X,re=J.concat();for(let ne=0,$=G;ne<$;ne++){let se=E[ne];X=[];for(let Se=0,R=se.length,ze=R-1,Ae=Se+1;Se<R;Se++,ze++,Ae++)ze===R&&(ze=0),Ae===R&&(Ae=0),X[Se]=ie(se[Se],se[ze],se[Ae]);oe.push(X),re=re.concat(X)}let ue;if(m===0)ue=Pi.triangulateShape(z,E);else{let ne=[],$=[];for(let se=0;se<m;se++){let Se=se/m,R=f*Math.cos(Se*Math.PI/2),ze=g*Math.sin(Se*Math.PI/2)+v;for(let Ae=0,Ve=z.length;Ae<Ve;Ae++){let ve=L(z[Ae],J[Ae],ze);pe(ve.x,ve.y,-R),Se===0&&ne.push(ve)}for(let Ae=0,Ve=G;Ae<Ve;Ae++){let ve=E[Ae];X=oe[Ae];let T=[];for(let _=0,O=ve.length;_<O;_++){let P=L(ve[_],X[_],ze);pe(P.x,P.y,-R),Se===0&&T.push(P)}Se===0&&$.push(T)}}ue=Pi.triangulateShape(ne,$)}let ae=ue.length,ye=g+v;for(let ne=0;ne<F;ne++){let $=u?L(B[ne],re[ne],ye):B[ne];y?(I.copy(C.normals[0]).multiplyScalar($.x),A.copy(C.binormals[0]).multiplyScalar($.y),x.copy(S[0]).add(I).add(A),pe(x.x,x.y,x.z)):pe($.x,$.y,0)}for(let ne=1;ne<=h;ne++)for(let $=0;$<F;$++){let se=u?L(B[$],re[$],ye):B[$];y?(I.copy(C.normals[ne]).multiplyScalar(se.x),A.copy(C.binormals[ne]).multiplyScalar(se.y),x.copy(S[ne]).add(I).add(A),pe(x.x,x.y,x.z)):pe(se.x,se.y,p/h*ne)}for(let ne=m-1;ne>=0;ne--){let $=ne/m,se=f*Math.cos($*Math.PI/2),Se=g*Math.sin($*Math.PI/2)+v;for(let R=0,ze=z.length;R<ze;R++){let Ae=L(z[R],J[R],Se);pe(Ae.x,Ae.y,p+se)}for(let R=0,ze=E.length;R<ze;R++){let Ae=E[R];X=oe[R];for(let Ve=0,ve=Ae.length;Ve<ve;Ve++){let T=L(Ae[Ve],X[Ve],Se);y?pe(T.x,T.y+S[h-1].y,S[h-1].x+se):pe(T.x,T.y,p+se)}}}H(),j();function H(){let ne=r.length/3;if(u){let $=0,se=F*$;for(let Se=0;Se<ae;Se++){let R=ue[Se];we(R[2]+se,R[1]+se,R[0]+se)}$=h+m*2,se=F*$;for(let Se=0;Se<ae;Se++){let R=ue[Se];we(R[0]+se,R[1]+se,R[2]+se)}}else{for(let $=0;$<ae;$++){let se=ue[$];we(se[2],se[1],se[0])}for(let $=0;$<ae;$++){let se=ue[$];we(se[0]+F*h,se[1]+F*h,se[2]+F*h)}}n.addGroup(ne,r.length/3-ne,0)}function j(){let ne=r.length/3,$=0;Q(z,$),$+=z.length;for(let se=0,Se=E.length;se<Se;se++){let R=E[se];Q(R,$),$+=R.length}n.addGroup(ne,r.length/3-ne,1)}function Q(ne,$){let se=ne.length;for(;--se>=0;){let Se=se,R=se-1;R<0&&(R=ne.length-1);for(let ze=0,Ae=h+m*2;ze<Ae;ze++){let Ve=F*ze,ve=F*(ze+1),T=$+Se+Ve,_=$+R+Ve,O=$+R+ve,P=$+Se+ve;Ne(T,_,O,P)}}}function pe(ne,$,se){l.push(ne),l.push($),l.push(se)}function we(ne,$,se){tt(ne),tt($),tt(se);let Se=r.length/3,R=M.generateTopUV(n,r,Se-3,Se-2,Se-1);Ge(R[0]),Ge(R[1]),Ge(R[2])}function Ne(ne,$,se,Se){tt(ne),tt($),tt(Se),tt($),tt(se),tt(Se);let R=r.length/3,ze=M.generateSideWallUV(n,r,R-6,R-3,R-2,R-1);Ge(ze[0]),Ge(ze[1]),Ge(ze[3]),Ge(ze[1]),Ge(ze[2]),Ge(ze[3])}function tt(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Ge(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tf(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vl[r.type]().fromJSON(r)),new i(n,e.options)}},Ef={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],h=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],p=e[n*3+2],u=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-p),new de(u,1-g),new de(v,1-d)]:[new de(a,1-l),new de(h,1-p),new de(f,1-g),new de(m,1-d)]}};function Tf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Bi=class i extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,p=e/a,u=t/l,f=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let M=d*u-o;for(let S=0;S<c;S++){let y=S*p-s;g.push(y,-M,0),v.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let S=M+c*d,y=M+c*(d+1),C=M+1+c*(d+1),A=M+1+c*d;f.push(S,y,A),f.push(y,C,A)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ds=class extends Nn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let r in n)e[r]=n[r]}return e}function Af(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var fu={clone:Hi,merge:Yt},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bo=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zo=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ao(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var fi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vo=class extends fi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fl,endingEnd:Fl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ol:s=e,a=2*t-n;break;case Bl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ol:o=e,l=2*n-t;break;case Bl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let C=0;C!==a;++C)s[C]=d*o[h+C]+M*o[c+C]+S*o[l+C]+y*o[p+C];return s}},Ho=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),p=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*p+o[l+u]*h;return s}},Go=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends fi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.settings||this.DefaultSettings_,p=h.inTangents,u=h.outTangents;if(!p||!u){let v=(n-t)/(r-t),m=1-v;for(let d=0;d!==a;++d)s[d]=o[c+d]*m+o[l+d]*v;return s}let f=a*2,g=e-1;for(let v=0;v!==a;++v){let m=o[c+v],d=o[l+v],M=g*f+v*2,S=u[M],y=u[M+1],C=e*f+v*2,A=p[C],I=p[C+1],x=(n-t)/(r-t),w,B,E,k,U;for(let G=0;G<8;G++){w=x*x,B=w*x,E=1-x,k=E*E,U=k*E;let L=U*t+3*k*x*S+3*E*w*A+B*r-n;if(Math.abs(L)<1e-10)break;let F=3*k*(S-t)+6*E*x*(A-S)+3*w*(r-A);if(Math.abs(F)<1e-10)break;x=x-L/F,x=Math.max(0,Math.min(1,x))}s[v]=U*m+3*k*x*y+3*E*w*I+B*d}return s}},fn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break;case Ul:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return ho;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&vd(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ho,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let p=a*n,u=p-n,f=p+n;for(let g=0;g!==n;++g){let v=t[p+g];if(v!==t[u+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let p=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[p+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=So;var pi=class extends fn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Gr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName="color";var qo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};qo.prototype.ValueTypeName="number";var Yo=class extends fi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)cn.slerpFlat(s,0,o,c-a,o,c,l);return s}},fs=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends fn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Gr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends fn{constructor(e,t,n,r){super(e,t,n,r)}};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pu=new Jo,$o=class{constructor(e){this.manager=e!==void 0?e:pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Nl=new ft,Sh=new D,wh=new D,Xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===dr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lo=new D,co=new cn,Cn=new D,gs=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lo,co,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(lo,co,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,co,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new D,Eh=new de,Th=new de,qt=class extends gs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mr=class extends gs{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ql=class extends Xl{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ar=-90,lr=1,Ko=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qt(ar,lr,e,t);r.layers=this.layers,this.add(r);let s=new qt(ar,lr,e,t);s.layers=this.layers,this.add(s);let o=new qt(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new qt(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new qt(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new qt(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vc="\\[\\]\\.:\\/",Pf=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",If="[^"+vc.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",yc),Lf=/(WCOD+)?/.source.replace("WCOD",If),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Ff=new RegExp("^"+Df+Lf+Nf+Uf+"$"),Of=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let r=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(e){let t=Ff.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Of.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Yl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);var Sr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _s=class extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Mc(i,e,t,n){let r=Bf(n);switch(t){case hc:return i*e;case dc:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case ki:return i*e*2/r.components*r.byteLength;case aa:return i*e*2/r.components*r.byteLength;case uc:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case la:return i*e*4/r.components*r.byteLength;case bs:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(e,8)/2;case fa:case pa:case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Na:case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(i){switch(i){case en:case oc:return{byteLength:1,components:1};case Er:case ac:case Fn:return{byteLength:2,components:1};case ra:case sa:return{byteLength:2,components:4};case En:case ia:case Tn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ou(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function qf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],v=p[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,p[u]=v)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let v=p[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
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
#endif`,Xp=`uniform sampler2D dfgLUT;
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
}`,qp=`
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,v0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Yf,alphahash_pars_fragment:Zf,alphamap_fragment:Jf,alphamap_pars_fragment:$f,alphatest_fragment:Kf,alphatest_pars_fragment:jf,aomap_fragment:Qf,aomap_pars_fragment:ep,batching_pars_vertex:tp,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:sp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:Mp,emissivemap_pars_fragment:bp,colorspace_fragment:Sp,colorspace_pars_fragment:wp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Up,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:kp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:qp,lights_fragment_maps:Yp,lights_fragment_end:Zp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:em,map_particle_fragment:tm,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:rm,morphinstance_vertex:sm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:Mm,premultiplied_alpha_fragment:bm,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Dm,skinning_pars_vertex:Lm,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:Fm,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:zm,transmission_fragment:km,transmission_pars_fragment:Vm,uv_pars_fragment:Hm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Zm,backgroundCube_frag:Jm,cube_vert:$m,cube_frag:Km,depth_vert:jm,depth_frag:Qm,distance_vert:e0,distance_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:r0,linedashed_frag:s0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:v0,points_vert:y0,points_frag:M0,shadow_vert:b0,shadow_frag:S0,sprite_vert:w0,sprite_frag:E0},Te={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Bn={basic:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Yt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Yt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new rt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Yt([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Yt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Yt([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Yt([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Yt([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Yt([Te.lights,Te.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Bn.physical={uniforms:Yt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Ga={r:0,b:0,g:0},Gi=new Sn,T0=new ft;function A0(i,e,t,n,r,s){let o=new rt(0),a=r===!0?0:1,l,c,h=null,p=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let y=M.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(M){let S=!1,y=f(M);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===ys)?(c===void 0&&(c=new Rt(new ui(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Hi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Gi.copy(S.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Gi)),c.material.toneMapped=at.getTransfer(y.colorSpace)!==ct,(h!==y||p!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Rt(new Bi(2,2),new dn({name:"BackgroundMaterial",uniforms:Hi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(Ga,xc(i)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:v,dispose:d}}function R0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(E,k,U,G,z){let L=!1,F=p(E,G,U,k);s!==F&&(s=F,c(s.object)),L=f(E,G,U,z),L&&g(E,G,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,y(E,k,U,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function p(E,k,U,G){let z=G.wireframe===!0,L=n[k.id];L===void 0&&(L={},n[k.id]=L);let F=E.isInstancedMesh===!0?E.id:0,ie=L[F];ie===void 0&&(ie={},L[F]=ie);let J=ie[U.id];J===void 0&&(J={},ie[U.id]=J);let oe=J[z];return oe===void 0&&(oe=u(l()),J[z]=oe),oe}function u(E){let k=[],U=[],G=[];for(let z=0;z<t;z++)k[z]=0,U[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:U,attributeDivisors:G,object:E,attributes:{},index:null}}function f(E,k,U,G){let z=s.attributes,L=k.attributes,F=0,ie=U.getAttributes();for(let J in ie)if(ie[J].location>=0){let X=z[J],re=L[J];if(re===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),X===void 0||X.attribute!==re||re&&X.data!==re.data)return!0;F++}return s.attributesNum!==F||s.index!==G}function g(E,k,U,G){let z={},L=k.attributes,F=0,ie=U.getAttributes();for(let J in ie)if(ie[J].location>=0){let X=L[J];X===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(X=E.instanceColor));let re={};re.attribute=X,X&&X.data&&(re.data=X.data),z[J]=re,F++}s.attributes=z,s.attributesNum=F,s.index=G}function v(){let E=s.newAttributes;for(let k=0,U=E.length;k<U;k++)E[k]=0}function m(E){d(E,0)}function d(E,k){let U=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;U[E]=1,G[E]===0&&(i.enableVertexAttribArray(E),G[E]=1),z[E]!==k&&(i.vertexAttribDivisor(E,k),z[E]=k)}function M(){let E=s.newAttributes,k=s.enabledAttributes;for(let U=0,G=k.length;U<G;U++)k[U]!==E[U]&&(i.disableVertexAttribArray(U),k[U]=0)}function S(E,k,U,G,z,L,F){F===!0?i.vertexAttribIPointer(E,k,U,z,L):i.vertexAttribPointer(E,k,U,G,z,L)}function y(E,k,U,G){v();let z=G.attributes,L=U.getAttributes(),F=k.defaultAttributeValues;for(let ie in L){let J=L[ie];if(J.location>=0){let oe=z[ie];if(oe===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),oe!==void 0){let X=oe.normalized,re=oe.itemSize,ue=e.get(oe);if(ue===void 0)continue;let ae=ue.buffer,ye=ue.type,H=ue.bytesPerElement,j=ye===i.INT||ye===i.UNSIGNED_INT||oe.gpuType===ia;if(oe.isInterleavedBufferAttribute){let Q=oe.data,pe=Q.stride,we=oe.offset;if(Q.isInstancedInterleavedBuffer){for(let Ne=0;Ne<J.locationSize;Ne++)d(J.location+Ne,Q.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ne=0;Ne<J.locationSize;Ne++)m(J.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ne=0;Ne<J.locationSize;Ne++)S(J.location+Ne,re/J.locationSize,ye,X,pe*H,(we+re/J.locationSize*Ne)*H,j)}else{if(oe.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)d(J.location+Q,oe.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Q=0;Q<J.locationSize;Q++)m(J.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Q=0;Q<J.locationSize;Q++)S(J.location+Q,re/J.locationSize,ye,X,re*H,re/J.locationSize*Q*H,j)}}else if(F!==void 0){let X=F[ie];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(J.location,X);break;case 3:i.vertexAttrib3fv(J.location,X);break;case 4:i.vertexAttrib4fv(J.location,X);break;default:i.vertexAttrib1fv(J.location,X)}}}}M()}function C(){w();for(let E in n){let k=n[E];for(let U in k){let G=k[U];for(let z in G){let L=G[z];for(let F in L)h(L[F].object),delete L[F];delete G[z]}}delete n[E]}}function A(E){if(n[E.id]===void 0)return;let k=n[E.id];for(let U in k){let G=k[U];for(let z in G){let L=G[z];for(let F in L)h(L[F].object),delete L[F];delete G[z]}}delete n[E.id]}function I(E){for(let k in n){let U=n[k];for(let G in U){let z=U[G];if(z[E.id]===void 0)continue;let L=z[E.id];for(let F in L)h(L[F].object),delete L[F];delete z[E.id]}}}function x(E){for(let k in n){let U=n[k],G=E.isInstancedMesh===!0?E.id:0,z=U[G];if(z!==void 0){for(let L in z){let F=z[L];for(let ie in F)h(F[ie].object),delete F[ie];delete z[L]}delete U[G],Object.keys(U).length===0&&delete n[k]}}}function w(){B(),o=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function C0(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),t.update(h,n,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];t.update(f,n,1)}function l(c,h,p,u){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==mn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let x=I===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==en&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!x)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:y,maxSamples:C,samples:A}}function I0(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Xt,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||n!==0||r;return r=u,n=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,y=d.clippingState||null;l.value=y,y=h(g,u,S,f);for(let C=0;C!==S;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,f,g){let v=p!==null?p.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=f;S!==v;++S,y+=4)o.copy(p[S]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Mi=4,mu=[.125,.215,.35,.446,.526,.582],Xi=20,D0=256,Ts=new Mr,gu=new rt,bc=null,Sc=0,wc=0,Ec=!1,L0=new D,Xa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=L0}=s;bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Fn,format:mn,colorSpace:Li,depthBuffer:!1},r=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N0(s)),this._blurMaterial=F0(s,e,t),this._ggxMaterial=U0(s,e,t)}return r}_compileMaterial(e){let t=new Rt(new kt,e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r,s){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(gu),p.toneMapping=wn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new ui,new jr({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=!0):(m.color.copy(gu),d=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let C=this._cubeSize;Rr(r,y*C,S>2?C:0,C,C),p.setRenderTarget(r),d&&p.render(v,l),p.render(e,l)}p.toneMapping=f,p.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===xi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ts)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,f=p*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Mi?n-g+Mi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Rr(s,m,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Ts),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Rr(e,m,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Ts)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xe("blur direction must be either latitudinal or longitudinal!");let h=3,p=this._lodMeshes[r];p.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Xi;m>Xi&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let d=[],M=0;for(let I=0;I<Xi;++I){let x=I/v,w=Math.exp(-x*x/2);d.push(w),I===0?M+=w:I<m&&(M+=2*w)}for(let I=0;I<d.length;I++)d[I]=d[I]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let y=this._sizeLods[r],C=3*y*(r>S-Mi?r-S+Mi:0),A=4*(this._cubeSize-y);Rr(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(p,Ts)}};function N0(i){let e=[],t=[],n=[],r=i,s=i-Mi+1+mu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Mi?l=mu[o-i+Mi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*f),S=new Float32Array(m*g*f),y=new Float32Array(d*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,x=A>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];M.set(w,v*g*A),S.set(u,m*g*A);let B=[A,A,A,A,A,A];y.set(B,d*g*A)}let C=new kt;C.setAttribute("position",new $t(M,v)),C.setAttribute("uv",new $t(S,m)),C.setAttribute("faceIndex",new $t(y,d)),n.push(new Rt(C,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function _u(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function U0(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Za(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function F0(i,e,t){let n=new Float32Array(Xi),r=new D(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Za(),fragmentShader:`

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
	`}var qa=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new es(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ui(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Un});s.uniforms.tEquirect.value=t;let o=new Rt(r,s),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=Bt),new Ko(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function O0(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===ea||f===ta)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new qa(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===ea||f===ta,v=f===xi||f===zi;if(g||v){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Xa(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Xa(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ea?u.mapping=xi:f===ta&&(u.mapping=zi),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function B0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&qr("WebGLRenderer: "+n+" extension not supported."),r}}}function z0(i,e,t,n){let r={},s=new WeakMap;function o(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,g=p.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let S=0,y=M.length;S<y;S+=3){let C=M[S+0],A=M[S+1],I=M[S+2];u.push(C,A,A,I,I,C)}}else{let M=g.array;v=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){let C=S+0,A=S+1,I=S+2;u.push(C,A,A,I,I,C)}}let m=new(g.count>=65535?Kr:$r)(u,1);m.version=v;let d=s.get(p);d&&e.remove(d),s.set(p,m)}function h(p){let u=s.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function k0(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];t.update(m,n,1)}function p(u,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,f[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*v[M];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function V0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function H0(i,e,t){let n=new WeakMap,r=new Mt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==p){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let y=a.attributes.position.count*S,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*C*4*p),I=new Yr(A,y,C,p);I.type=Tn,I.needsUpdate=!0;let x=S*4;for(let B=0;B<p;B++){let E=m[B],k=d[B],U=M[B],G=y*C*4*B;for(let z=0;z<E.count;z++){let L=z*x;f===!0&&(r.fromBufferAttribute(E,z),A[G+L+0]=r.x,A[G+L+1]=r.y,A[G+L+2]=r.z,A[G+L+3]=0),g===!0&&(r.fromBufferAttribute(k,z),A[G+L+4]=r.x,A[G+L+5]=r.y,A[G+L+6]=r.z,A[G+L+7]=0),v===!0&&(r.fromBufferAttribute(U,z),A[G+L+8]=r.x,A[G+L+9]=r.y,A[G+L+10]=r.z,A[G+L+11]=U.itemSize===4?r.w:1)}}u={count:p,texture:I,size:new de(y,C)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function G0(i,e,t,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var W0={[Ql]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[vs]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[rc]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function X0(i,e,t,n,r){let s=new hn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new hn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),a=new kt;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let l=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Rt(a,l),h=new Mr(-1,1,1,-1,0,1),p=null,u=null,f=!1,g,v=null,m=[],d=!1;this.setSize=function(M,S){s.setSize(M,S),o.setSize(M,S);for(let y=0;y<m.length;y++){let C=m[y];C.setSize&&C.setSize(M,S)}},this.setEffects=function(M){m=M,d=m.length>0&&m[0].isRenderPass===!0;let S=s.width,y=s.height;for(let C=0;C<m.length;C++){let A=m[C];A.setSize&&A.setSize(S,y)}},this.begin=function(M,S){if(f||M.toneMapping===wn&&m.length===0)return!1;if(v=S,S!==null){let y=S.width,C=S.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return d===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=wn,!0},this.hasRenderPass=function(){return d},this.end=function(M,S){M.toneMapping=g,f=!0;let y=s,C=o;for(let A=0;A<m.length;A++){let I=m[A];if(I.enabled!==!1&&(I.render(M,C,y,S),I.needsSwap!==!1)){let x=y;y=C,C=x}}if(p!==M.outputColorSpace||u!==M.toneMapping){p=M.outputColorSpace,u=M.toneMapping,l.defines={},at.getTransfer(p)===ct&&(l.defines.SRGB_TRANSFER="");let A=W0[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(v),M.render(c,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Bu=new Kt,Rc=new hi(1,1),zu=new Yr,ku=new To,Vu=new es,yu=[],Mu=[],bu=new Float32Array(16),Su=new Float32Array(9),wu=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=yu[r];if(s===void 0&&(s=new Float32Array(r),yu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ja(i,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function $0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),Dt(t,n)}}function K0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),Dt(t,n)}}function j0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Dt(t,n)}}function Q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function ag(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=t.isReversedDepthBuffer()?Ha:Va,s=Rc):s=Bu,t.setTexture2D(e||s,r)}function lg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ku,r)}function cg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vu,r)}function hg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zu,r)}function ug(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return J0;case 35674:return $0;case 35675:return K0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return rg;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xg(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vg(i,e){i.uniform1iv(this.addr,e)}function yg(i,e){i.uniform2iv(this.addr,e)}function Mg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function Sg(i,e){i.uniform1uiv(this.addr,e)}function wg(i,e){i.uniform2uiv(this.addr,e)}function Eg(i,e){i.uniform3uiv(this.addr,e)}function Tg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rc:o=Bu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Rg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ku,s[o])}function Cg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Vu,s[o])}function Pg(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zu,s[o])}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return wg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}var Cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Eu(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){let n=i.name,r=n.length;for(Tc.lastIndex=0;;){let s=Tc.exec(n),o=Tc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eu(t,c===void 0?new Cc(a,i,e):new Pc(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Ic(a),Eu(t,p)),t=p}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Dg(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Tu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Lg=37297,Ng=0;function Ug(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Au=new je;function Fg(i){at._getMatrix(Au,at.workingColorSpace,i);let e=`mat3( ${Au.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ru(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ug(i.getShaderSource(e),a)}else return s}function Og(i,e){let t=Fg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bg={[Ql]:"Linear",[ec]:"Reinhard",[tc]:"Cineon",[vs]:"ACESFilmic",[ic]:"AgX",[rc]:"Neutral",[nc]:"Custom"};function zg(i,e){let t=Bg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new D;function kg(){at.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Hg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rs(i){return i!==""}function Cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(Wg,qg)}var Xg=new Map;function qg(i,e){let t=et[e];if(t===void 0){let n=Xg.get(e);if(n!==void 0)t=et[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(i){return i.replace(Yg,Zg)}function Zg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Jg={[xs]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function $g(i){return Jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kg={[xi]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE_UV"};function jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qg={[zi]:"ENVMAP_MODE_REFRACTION"};function e_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t_={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function n_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t_[i.combine]||"ENVMAP_BLENDING_NONE"}function i_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r_(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$g(t),c=jg(t),h=e_(t),p=n_(t),u=i_(t),f=Vg(t),g=Hg(s),v=r.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),d.length>0&&(d+=`
`)):(m=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),d=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?et.tonemapping_pars_fragment:"",t.toneMapping!==wn?zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Dc(o),o=Cu(o,t),o=Pu(o,t),a=Dc(a),a=Cu(a,t),a=Pu(a,t),o=Iu(o),a=Iu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let S=M+m+o,y=M+d+a,C=Tu(r,r.VERTEX_SHADER,S),A=Tu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(E){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(v)||"",U=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(A)||"",z=k.trim(),L=U.trim(),F=G.trim(),ie=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,A);else{let oe=Ru(r,C,"vertex"),X=Ru(r,A,"fragment");Xe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+oe+`
`+X)}else z!==""?He("WebGLProgram: Program Info Log:",z):(L===""||F==="")&&(J=!1);J&&(E.diagnostics={runnable:ie,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(C),r.deleteShader(A),x=new Cr(r,v),w=Gg(r,v)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(v,Lg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}var s_=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nc(e),t.set(e,n)),n}},Nc=class{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}};function o_(i,e,t,n,r,s){let o=new Zr,a=new Lc,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,B,E,k){let U=E.fog,G=k.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||z,L),ie=F&&F.mapping===ys?F.image.height:null,J=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,X=oe!==void 0?oe.length:0,re=0;G.morphAttributes.position!==void 0&&(re=1),G.morphAttributes.normal!==void 0&&(re=2),G.morphAttributes.color!==void 0&&(re=3);let ue,ae,ye,H;if(J){let ht=Bn[J];ue=ht.vertexShader,ae=ht.fragmentShader}else ue=x.vertexShader,ae=x.fragmentShader,a.update(x),ye=a.getVertexShaderID(x),H=a.getFragmentShaderID(x);let j=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ne=!!x.map,tt=!!x.matcap,Ge=!!F,ne=!!x.aoMap,$=!!x.lightMap,se=!!x.bumpMap,Se=!!x.normalMap,R=!!x.displacementMap,ze=!!x.emissiveMap,Ae=!!x.metalnessMap,Ve=!!x.roughnessMap,ve=x.anisotropy>0,T=x.clearcoat>0,_=x.dispersion>0,O=x.iridescence>0,P=x.sheen>0,W=x.transmission>0,Y=ve&&!!x.anisotropyMap,Me=T&&!!x.clearcoatMap,le=T&&!!x.clearcoatNormalMap,Ie=T&&!!x.clearcoatRoughnessMap,De=O&&!!x.iridescenceMap,ee=O&&!!x.iridescenceThicknessMap,he=P&&!!x.sheenColorMap,Ee=P&&!!x.sheenRoughnessMap,ge=!!x.specularMap,be=!!x.specularColorMap,Ye=!!x.specularIntensityMap,N=W&&!!x.transmissionMap,xe=W&&!!x.thicknessMap,_e=!!x.gradientMap,Pe=!!x.alphaMap,me=x.alphaTest>0,te=!!x.alphaHash,Ue=!!x.extensions,Je=wn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Je=i.toneMapping);let gt={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:ae,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Li,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:tt,envMap:Ge,envMapMode:Ge&&F.mapping,envMapCubeUVHeight:ie,aoMap:ne,lightMap:$,bumpMap:se,normalMap:Se,displacementMap:R,emissiveMap:ze,normalMapObjectSpace:Se&&x.normalMapType===Kh,normalMapTangentSpace:Se&&x.normalMapType===fc,metalnessMap:Ae,roughnessMap:Ve,anisotropy:ve,anisotropyMap:Y,clearcoat:T,clearcoatMap:Me,clearcoatNormalMap:le,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:ee,sheen:P,sheenColorMap:he,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:be,specularIntensityMap:Ye,transmission:W,transmissionMap:N,thicknessMap:xe,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Ii&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:me,alphaHash:te,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:ne&&g(x.aoMap.channel),lightMapUv:$&&g(x.lightMap.channel),bumpMapUv:se&&g(x.bumpMap.channel),normalMapUv:Se&&g(x.normalMap.channel),displacementMapUv:R&&g(x.displacementMap.channel),emissiveMapUv:ze&&g(x.emissiveMap.channel),metalnessMapUv:Ae&&g(x.metalnessMap.channel),roughnessMapUv:Ve&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:Me&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:be&&g(x.specularColorMap.channel),specularIntensityMapUv:Ye&&g(x.specularIntensityMap.channel),transmissionMapUv:N&&g(x.transmissionMap.channel),thicknessMapUv:xe&&g(x.thicknessMap.channel),alphaMapUv:Pe&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Se||ve),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Ne||Pe),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Q,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ue&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)w.push(B),w.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(d(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){let w=f[x.type],B;if(w){let E=Bn[w];B=fu.clone(E.uniforms)}else B=x.uniforms;return B}function y(x,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new r_(i,w,x,r),c.push(B),h.set(w,B)),B}function C(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function I(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:I}}function a_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function l_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,m,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=d),e++,M}function l(u,f,g,v,m,d){let M=a(u,f,g,v,m,d);g.transmission>0?n.push(M):g.transparent===!0?r.push(M):t.push(M)}function c(u,f,g,v,m,d){let M=a(u,f,g,v,m,d);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||l_),n.length>1&&n.sort(f||Lu),r.length>1&&r.sort(f||Lu)}function p(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function c_(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Nu,i.set(n,[o])):r>=s.length?(o=new Nu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function h_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new rt};break;case"SpotLight":t={position:new D,direction:new D,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var d_=0;function f_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p_(i){let e=new h_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new ft,o=new ft;function a(c){let h=0,p=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,d=0,M=0,S=0,y=0,C=0,A=0,I=0;c.sort(f_);for(let w=0,B=c.length;w<B;w++){let E=c[w],k=E.color,U=E.intensity,G=E.distance,z=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===ki?z=E.shadow.map.texture:z=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=k.r*U,p+=k.g*U,u+=k.b*U;else if(E.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(E.sh.coefficients[L],U);I++}else if(E.isDirectionalLight){let L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let F=E.shadow,ie=t.get(E);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=E.shadow.matrix,M++}n.directional[f]=L,f++}else if(E.isSpotLight){let L=e.get(E);L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(k).multiplyScalar(U),L.distance=G,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,n.spot[v]=L;let F=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,F.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[v]=F.matrix,E.castShadow){let ie=t.get(E);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=z,y++}v++}else if(E.isRectAreaLight){let L=e.get(E);L.color.copy(k).multiplyScalar(U),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=L,m++}else if(E.isPointLight){let L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){let F=E.shadow,ie=t.get(E);ie.shadowIntensity=F.intensity,ie.shadowBias=F.bias,ie.shadowNormalBias=F.normalBias,ie.shadowRadius=F.radius,ie.shadowMapSize=F.mapSize,ie.shadowCameraNear=F.camera.near,ie.shadowCameraFar=F.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=E.shadow.matrix,S++}n.point[g]=L,g++}else if(E.isHemisphereLight){let L=e.get(E);L.skyColor.copy(E.color).multiplyScalar(U),L.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[d]=L,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==M||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=M,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=I,n.version=d_++)}function l(c,h){let p=0,u=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let S=c[d];if(S.isDirectionalLight){let y=n.directional[p];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(S.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Uu(i){let e=new p_(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function m_(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Uu(i),e.set(r,[a])):s>=o.length?(a=new Uu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`,x_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],v_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Fu=new ft,As=new D,Ac=new D;function y_(i,e,t){let n=new _r,r=new de,s=new de,o=new Mt,a=new zo,l=new ko,c={},h=t.maxTextureSize,p={[Jn]:jt,[jt]:Jn,[Qt]:Qt},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:g_,fragmentShader:__}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let d=this.type;this.render=function(A,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Qo&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xs);let w=i.getRenderTarget(),B=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Un),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let U=d!==this.type;U&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(z=>z.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,z=A.length;G<z;G++){let L=A[G],F=L.shadow;if(F===void 0){He("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let ie=F.getFrameExtents();r.multiply(ie),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,F.mapSize.y=s.y));let J=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=J,F.map===null||U===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wr){if(L.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hn(r.x,r.y,{format:ki,type:Fn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new hi(r.x,r.y,Tn),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=In,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft}else L.isPointLight?(F.map=new qa(r.x),F.map.depthTexture=new Io(r.x,En)):(F.map=new hn(r.x,r.y),F.map.depthTexture=new hi(r.x,r.y,En)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=In,this.type===xs?(F.map.depthTexture.compareFunction=J?Ha:Va,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ft,F.map.depthTexture.magFilter=Ft);F.camera.updateProjectionMatrix()}let oe=F.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<oe;X++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,X),i.clear();else{X===0&&(i.setRenderTarget(F.map),i.clear());let re=F.getViewport(X);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(o)}if(L.isPointLight){let re=F.camera,ue=F.matrix,ae=L.distance||re.far;ae!==re.far&&(re.far=ae,re.updateProjectionMatrix()),As.setFromMatrixPosition(L.matrixWorld),re.position.copy(As),Ac.copy(re.position),Ac.add(x_[X]),re.up.copy(v_[X]),re.lookAt(Ac),re.updateMatrixWorld(),ue.makeTranslation(-As.x,-As.y,-As.z),Fu.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Fu,re.coordinateSystem,re.reversedDepth)}else F.updateMatrices(L);n=F.getFrustum(),y(I,x,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===wr&&M(F,x),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,B,E)};function M(A,I){let x=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(r.x,r.y,{format:ki,type:Fn})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,x,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,x,f,v,null)}function S(A,I,x,w){let B=null,E=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)B=E;else if(B=x.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=B.uuid,U=I.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let z=G[U];z===void 0&&(z=B.clone(),G[U]=z,I.addEventListener("dispose",C)),B=z}if(B.visible=I.visible,B.wireframe=I.wireframe,w===wr?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:p[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let k=i.properties.get(B);k.light=x}return B}function y(A,I,x,w,B){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===wr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);let U=e.update(A),G=A.material;if(Array.isArray(G)){let z=U.groups;for(let L=0,F=z.length;L<F;L++){let ie=z[L],J=G[ie.materialIndex];if(J&&J.visible){let oe=S(A,J,w,B);A.onBeforeShadow(i,A,I,x,U,oe,ie),i.renderBufferDirect(x,null,U,oe,A,ie),A.onAfterShadow(i,A,I,x,U,oe,ie)}}}else if(G.visible){let z=S(A,G,w,B);A.onBeforeShadow(i,A,I,x,U,z,null),i.renderBufferDirect(x,null,U,z,A,null),A.onAfterShadow(i,A,I,x,U,z,null)}}let k=A.children;for(let U=0,G=k.length;U<G;U++)y(k[U],I,x,w,B)}function C(A){A.target.removeEventListener("dispose",C);for(let x in c){let w=c[x],B=A.target.uuid;B in w&&(w[B].dispose(),delete w[B])}}}function M_(i,e){function t(){let N=!1,xe=new Mt,_e=null,Pe=new Mt(0,0,0,0);return{setMask:function(me){_e!==me&&!N&&(i.colorMask(me,me,me,me),_e=me)},setLocked:function(me){N=me},setClear:function(me,te,Ue,Je,gt){gt===!0&&(me*=Je,te*=Je,Ue*=Je),xe.set(me,te,Ue,Je),Pe.equals(xe)===!1&&(i.clearColor(me,te,Ue,Je),Pe.copy(xe))},reset:function(){N=!1,_e=null,Pe.set(-1,0,0,0)}}}function n(){let N=!1,xe=!1,_e=null,Pe=null,me=null;return{setReversed:function(te){if(xe!==te){let Ue=e.get("EXT_clip_control");te?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),xe=te;let Je=me;me=null,this.setClear(Je)}},getReversed:function(){return xe},setTest:function(te){te?j(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(te){_e!==te&&!N&&(i.depthMask(te),_e=te)},setFunc:function(te){if(xe&&(te=au[te]),Pe!==te){switch(te){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=te}},setLocked:function(te){N=te},setClear:function(te){me!==te&&(me=te,xe&&(te=1-te),i.clearDepth(te))},reset:function(){N=!1,_e=null,Pe=null,me=null,xe=!1}}}function r(){let N=!1,xe=null,_e=null,Pe=null,me=null,te=null,Ue=null,Je=null,gt=null;return{setTest:function(ht){N||(ht?j(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ht){xe!==ht&&!N&&(i.stencilMask(ht),xe=ht)},setFunc:function(ht,kn,Vn){(_e!==ht||Pe!==kn||me!==Vn)&&(i.stencilFunc(ht,kn,Vn),_e=ht,Pe=kn,me=Vn)},setOp:function(ht,kn,Vn){(te!==ht||Ue!==kn||Je!==Vn)&&(i.stencilOp(ht,kn,Vn),te=ht,Ue=kn,Je=Vn)},setLocked:function(ht){N=ht},setClear:function(ht){gt!==ht&&(i.clearStencil(ht),gt=ht)},reset:function(){N=!1,xe=null,_e=null,Pe=null,me=null,te=null,Ue=null,Je=null,gt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},p={},u=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,S=null,y=null,C=null,A=null,I=new rt(0,0,0),x=0,w=!1,B=null,E=null,k=null,U=null,G=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,F=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(ie)[1]),L=F>=1):ie.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),L=F>=2);let J=null,oe={},X=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ue=new Mt().fromArray(X),ae=new Mt().fromArray(re);function ye(N,xe,_e,Pe){let me=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<_e;Ue++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(xe+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return te}let H={};H[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Di),se(!1),Se(Zl),j(i.CULL_FACE),ne(Un);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Q(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function pe(N,xe){return p[N]!==xe?(i.bindFramebuffer(N,xe),p[N]=xe,N===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=xe),N===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function we(N,xe){let _e=f,Pe=!1;if(N){_e=u.get(xe),_e===void 0&&(_e=[],u.set(xe,_e));let me=N.textures;if(_e.length!==me.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ue=me.length;te<Ue;te++)_e[te]=i.COLOR_ATTACHMENT0+te;_e.length=me.length,Pe=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(_e)}function Ne(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let tt={[ci]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};tt[Dh]=i.MIN,tt[Lh]=i.MAX;let Ge={[Nh]:i.ZERO,[Uh]:i.ONE,[Fh]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(N,xe,_e,Pe,me,te,Ue,Je,gt,ht){if(N===Un){v===!0&&(Q(i.BLEND),v=!1);return}if(v===!1&&(j(i.BLEND),v=!0),N!==Ch){if(N!==m||ht!==w){if((d!==ci||y!==ci)&&(i.blendEquation(i.FUNC_ADD),d=ci,y=ci),ht)switch(N){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}M=null,S=null,C=null,A=null,I.set(0,0,0),x=0,m=N,w=ht}return}me=me||xe,te=te||_e,Ue=Ue||Pe,(xe!==d||me!==y)&&(i.blendEquationSeparate(tt[xe],tt[me]),d=xe,y=me),(_e!==M||Pe!==S||te!==C||Ue!==A)&&(i.blendFuncSeparate(Ge[_e],Ge[Pe],Ge[te],Ge[Ue]),M=_e,S=Pe,C=te,A=Ue),(Je.equals(I)===!1||gt!==x)&&(i.blendColor(Je.r,Je.g,Je.b,gt),I.copy(Je),x=gt),m=N,w=!1}function $(N,xe){N.side===Qt?Q(i.CULL_FACE):j(i.CULL_FACE);let _e=N.side===jt;xe&&(_e=!_e),se(_e),N.blending===Ii&&N.transparent===!1?ne(Un):ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let Pe=N.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function Se(N){N!==Ah?(j(i.CULL_FACE),N!==E&&(N===Zl?i.cullFace(i.BACK):N===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),E=N}function R(N){N!==k&&(L&&i.lineWidth(N),k=N)}function ze(N,xe,_e){N?(j(i.POLYGON_OFFSET_FILL),(U!==xe||G!==_e)&&(U=xe,G=_e,o.getReversed()&&(xe=-xe),i.polygonOffset(xe,_e))):Q(i.POLYGON_OFFSET_FILL)}function Ae(N){N?j(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=i.TEXTURE0+z-1),J!==N&&(i.activeTexture(N),J=N)}function ve(N,xe,_e){_e===void 0&&(J===null?_e=i.TEXTURE0+z-1:_e=J);let Pe=oe[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},oe[_e]=Pe),(Pe.type!==N||Pe.texture!==xe)&&(J!==_e&&(i.activeTexture(_e),J=_e),i.bindTexture(N,xe||H[N]),Pe.type=N,Pe.texture=xe)}function T(){let N=oe[J];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function P(){try{i.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function W(){try{i.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ie(){try{i.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function De(){try{i.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function ee(){try{i.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function he(N){ue.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ue.copy(N))}function Ee(N){ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function ge(N,xe){let _e=c.get(xe);_e===void 0&&(_e=new WeakMap,c.set(xe,_e));let Pe=_e.get(N);Pe===void 0&&(Pe=i.getUniformBlockIndex(xe,N.name),_e.set(N,Pe))}function be(N,xe){let Pe=c.get(xe).get(N);l.get(xe)!==Pe&&(i.uniformBlockBinding(xe,Pe,N.__bindingPointIndex),l.set(xe,Pe))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,oe={},p={},u=new WeakMap,f=[],g=null,v=!1,m=null,d=null,M=null,S=null,y=null,C=null,A=null,I=new rt(0,0,0),x=0,w=!1,B=null,E=null,k=null,U=null,G=null,ue.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:Q,bindFramebuffer:pe,drawBuffers:we,useProgram:Ne,setBlending:ne,setMaterial:$,setFlipSided:se,setCullFace:Se,setLineWidth:R,setPolygonOffset:ze,setScissorTest:Ae,activeTexture:Ve,bindTexture:ve,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:De,texImage3D:ee,updateUBOMapping:ge,uniformBlockBinding:be,texStorage2D:le,texStorage3D:Ie,texSubImage2D:P,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:Me,scissor:he,viewport:Ee,reset:Ye}}function b_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Xr("canvas")}function v(T,_,O){let P=1,W=ve(T);if((W.width>O||W.height>O)&&(P=O/Math.max(W.width,W.height)),P<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(P*W.width),Me=Math.floor(P*W.height);p===void 0&&(p=g(Y,Me));let le=_?g(Y,Me):p;return le.width=Y,le.height=Me,le.getContext("2d").drawImage(T,0,0,Y,Me),He("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+Me+")."),le}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,_,O,P,W=!1){if(T!==null){if(i[T]!==void 0)return i[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Me=W?Wr:at.getTransfer(P);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Me===ct?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(T,_){let O;return T?_===null||_===En||_===Tr?O=i.DEPTH24_STENCIL8:_===Tn?O=i.DEPTH32F_STENCIL8:_===Er&&(O=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===En||_===Tr?O=i.DEPTH_COMPONENT24:_===Tn?O=i.DEPTH_COMPONENT32F:_===Er&&(O=i.DEPTH_COMPONENT16),O}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Bt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){let _=T.target;_.removeEventListener("dispose",A),x(_),_.isVideoTexture&&h.delete(_)}function I(T){let _=T.target;_.removeEventListener("dispose",I),B(_)}function x(T){let _=n.get(T);if(_.__webglInit===void 0)return;let O=T.source,P=u.get(O);if(P){let W=P[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&w(T),Object.keys(P).length===0&&u.delete(O)}n.remove(T)}function w(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let O=T.source,P=u.get(O);delete P[_.__cacheKey],o.memory.textures--}function B(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(_.__webglFramebuffer[P]))for(let W=0;W<_.__webglFramebuffer[P].length;W++)i.deleteFramebuffer(_.__webglFramebuffer[P][W]);else i.deleteFramebuffer(_.__webglFramebuffer[P]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[P])}else{if(Array.isArray(_.__webglFramebuffer))for(let P=0;P<_.__webglFramebuffer.length;P++)i.deleteFramebuffer(_.__webglFramebuffer[P]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let P=0;P<_.__webglColorRenderbuffer.length;P++)_.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[P]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=T.textures;for(let P=0,W=O.length;P<W;P++){let Y=n.get(O[P]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[P])}n.remove(T)}let E=0;function k(){E=0}function U(){let T=E;return T>=r.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),E+=1,T}function G(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function z(T,_){let O=n.get(T);if(T.isVideoTexture&&Ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let P=T.image;if(P===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{H(O,T,_);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function L(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){H(O,T,_);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function F(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){H(O,T,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ie(T,_){let O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){j(O,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let J={[Mo]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},oe={[Ft]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},X={[jh]:i.NEVER,[iu]:i.ALWAYS,[Qh]:i.LESS,[Va]:i.LEQUAL,[eu]:i.EQUAL,[Ha]:i.GEQUAL,[tu]:i.GREATER,[nu]:i.NOTEQUAL};function re(T,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Bt||_.magFilter===na||_.magFilter===Ms||_.magFilter===vi||_.minFilter===Bt||_.minFilter===na||_.minFilter===Ms||_.minFilter===vi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,X[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ft||_.minFilter!==Ms&&_.minFilter!==vi||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ue(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));let P=_.source,W=u.get(P);W===void 0&&(W={},u.set(P,W));let Y=G(_);if(Y!==T.__cacheKey){W[Y]===void 0&&(W[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),W[Y].usedTimes++;let Me=W[T.__cacheKey];Me!==void 0&&(W[T.__cacheKey].usedTimes--,Me.usedTimes===0&&w(_)),T.__cacheKey=Y,T.__webglTexture=W[Y].texture}return O}function ae(T,_,O){return Math.floor(Math.floor(T/O)/_)}function ye(T,_,O,P){let Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,P,_.data);else{Y.sort((ee,he)=>ee.start-he.start);let Me=0;for(let ee=1;ee<Y.length;ee++){let he=Y[Me],Ee=Y[ee],ge=he.start+he.count,be=ae(Ee.start,_.width,4),Ye=ae(he.start,_.width,4);Ee.start<=ge+1&&be===Ye&&ae(Ee.start+Ee.count-1,_.width,4)===be?he.count=Math.max(he.count,Ee.start+Ee.count-he.start):(++Me,Y[Me]=Ee)}Y.length=Me+1;let le=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ee=0,he=Y.length;ee<he;ee++){let Ee=Y[ee],ge=Math.floor(Ee.start/4),be=Math.ceil(Ee.count/4),Ye=ge%_.width,N=Math.floor(ge/_.width),xe=be,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ye,N,xe,_e,O,P,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function H(T,_,O){let P=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(P=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(P=i.TEXTURE_3D);let W=ue(T,_),Y=_.source;t.bindTexture(P,T.__webglTexture,i.TEXTURE0+O);let Me=n.get(Y);if(Y.version!==Me.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let le=at.getPrimaries(at.workingColorSpace),Ie=_.colorSpace===Kn?null:at.getPrimaries(_.colorSpace),De=_.colorSpace===Kn||le===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ee=v(_.image,!1,r.maxTextureSize);ee=Ve(_,ee);let he=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type),ge=S(_.internalFormat,he,Ee,_.colorSpace,_.isVideoTexture);re(P,_);let be,Ye=_.mipmaps,N=_.isVideoTexture!==!0,xe=Me.__version===void 0||W===!0,_e=Y.dataReady,Pe=C(_,ee);if(_.isDepthTexture)ge=y(_.format===yi,_.type),xe&&(N?t.texStorage2D(i.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ee,null));else if(_.isDataTexture)if(Ye.length>0){N&&xe&&t.texStorage2D(i.TEXTURE_2D,Pe,ge,Ye[0].width,Ye[0].height);for(let me=0,te=Ye.length;me<te;me++)be=Ye[me],N?_e&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,be.width,be.height,he,Ee,be.data):t.texImage2D(i.TEXTURE_2D,me,ge,be.width,be.height,0,he,Ee,be.data);_.generateMipmaps=!1}else N?(xe&&t.texStorage2D(i.TEXTURE_2D,Pe,ge,ee.width,ee.height),_e&&ye(_,ee,he,Ee)):t.texImage2D(i.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ee,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ge,Ye[0].width,Ye[0].height,ee.depth);for(let me=0,te=Ye.length;me<te;me++)if(be=Ye[me],_.format!==mn)if(he!==null)if(N){if(_e)if(_.layerUpdates.size>0){let Ue=Mc(be.width,be.height,_.format,_.type);for(let Je of _.layerUpdates){let gt=be.data.subarray(Je*Ue/be.data.BYTES_PER_ELEMENT,(Je+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Je,be.width,be.height,1,he,gt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ee.depth,he,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ge,be.width,be.height,ee.depth,0,be.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ee.depth,he,Ee,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ge,be.width,be.height,ee.depth,0,he,Ee,be.data)}else{N&&xe&&t.texStorage2D(i.TEXTURE_2D,Pe,ge,Ye[0].width,Ye[0].height);for(let me=0,te=Ye.length;me<te;me++)be=Ye[me],_.format!==mn?he!==null?N?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,be.width,be.height,he,be.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ge,be.width,be.height,0,be.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?_e&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,be.width,be.height,he,Ee,be.data):t.texImage2D(i.TEXTURE_2D,me,ge,be.width,be.height,0,he,Ee,be.data)}else if(_.isDataArrayTexture)if(N){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ge,ee.width,ee.height,ee.depth),_e)if(_.layerUpdates.size>0){let me=Mc(ee.width,ee.height,_.format,_.type);for(let te of _.layerUpdates){let Ue=ee.data.subarray(te*me/ee.data.BYTES_PER_ELEMENT,(te+1)*me/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ee.width,ee.height,1,he,Ee,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,he,Ee,ee.data);else if(_.isData3DTexture)N?(xe&&t.texStorage3D(i.TEXTURE_3D,Pe,ge,ee.width,ee.height,ee.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,he,Ee,ee.data);else if(_.isFramebufferTexture){if(xe)if(N)t.texStorage2D(i.TEXTURE_2D,Pe,ge,ee.width,ee.height);else{let me=ee.width,te=ee.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,ge,me,te,0,he,Ee,null),me>>=1,te>>=1}}else if(Ye.length>0){if(N&&xe){let me=ve(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ge,me.width,me.height)}for(let me=0,te=Ye.length;me<te;me++)be=Ye[me],N?_e&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,he,Ee,be):t.texImage2D(i.TEXTURE_2D,me,ge,he,Ee,be);_.generateMipmaps=!1}else if(N){if(xe){let me=ve(ee);t.texStorage2D(i.TEXTURE_2D,Pe,ge,me.width,me.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,ge,he,Ee,ee);m(_)&&d(P),Me.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function j(T,_,O){if(_.image.length!==6)return;let P=ue(T,_),W=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let Y=n.get(W);if(W.version!==Y.__version||P===!0){t.activeTexture(i.TEXTURE0+O);let Me=at.getPrimaries(at.workingColorSpace),le=_.colorSpace===Kn?null:at.getPrimaries(_.colorSpace),Ie=_.colorSpace===Kn||Me===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let De=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!De&&!ee?he[te]=v(_.image[te],!0,r.maxCubemapSize):he[te]=ee?_.image[te].image:_.image[te],he[te]=Ve(_,he[te]);let Ee=he[0],ge=s.convert(_.format,_.colorSpace),be=s.convert(_.type),Ye=S(_.internalFormat,ge,be,_.colorSpace),N=_.isVideoTexture!==!0,xe=Y.__version===void 0||P===!0,_e=W.dataReady,Pe=C(_,Ee);re(i.TEXTURE_CUBE_MAP,_);let me;if(De){N&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ye,Ee.width,Ee.height);for(let te=0;te<6;te++){me=he[te].mipmaps;for(let Ue=0;Ue<me.length;Ue++){let Je=me[Ue];_.format!==mn?ge!==null?N?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Je.width,Je.height,ge,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Ye,Je.width,Je.height,0,Je.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Je.width,Je.height,ge,be,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Ye,Je.width,Je.height,0,ge,be,Je.data)}}}else{if(me=_.mipmaps,N&&xe){me.length>0&&Pe++;let te=ve(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(ee){N?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,ge,be,he[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,he[te].width,he[te].height,0,ge,be,he[te].data);for(let Ue=0;Ue<me.length;Ue++){let gt=me[Ue].image[te].image;N?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,gt.width,gt.height,ge,be,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Ye,gt.width,gt.height,0,ge,be,gt.data)}}else{N?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge,be,he[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,ge,be,he[te]);for(let Ue=0;Ue<me.length;Ue++){let Je=me[Ue];N?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,ge,be,Je.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Ye,ge,be,Je.image[te])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),Y.__version=W.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,O,P,W,Y){let Me=s.convert(O.format,O.colorSpace),le=s.convert(O.type),Ie=S(O.internalFormat,Me,le,O.colorSpace),De=n.get(_),ee=n.get(O);if(ee.__renderTarget=_,!De.__hasExternalTextures){let he=Math.max(1,_.width>>Y),Ee=Math.max(1,_.height>>Y);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,Y,Ie,he,Ee,_.depth,0,Me,le,null):t.texImage2D(W,Y,Ie,he,Ee,0,Me,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,P,W,ee.__webglTexture,0,R(_)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,P,W,ee.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let P=_.depthTexture,W=P&&P.isDepthTexture?P.type:null,Y=y(_.stencilBuffer,W),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),Y,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,T)}else{let P=_.textures;for(let W=0;W<P.length;W++){let Y=P[W],Me=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),Ie=S(Y.internalFormat,Me,le,Y.colorSpace);ze(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),Ie,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),Ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,_,O){let P=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),P){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),re(i.TEXTURE_CUBE_MAP,_.depthTexture);let De=s.convert(_.depthTexture.format),ee=s.convert(_.depthTexture.type),he;_.depthTexture.format===In?he=i.DEPTH_COMPONENT24:_.depthTexture.format===yi&&(he=i.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,he,_.width,_.height,0,De,ee,null)}}else z(_.depthTexture,0);let Y=W.__webglTexture,Me=R(_),le=P?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Ie=_.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===In)ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,le,Y,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,le,Y,0);else if(_.depthTexture.format===yi)ze(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ie,le,Y,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,Ie,le,Y,0);else throw new Error("Unknown depthTexture format")}function Ne(T){let _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let P=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),P){let W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,P.removeEventListener("dispose",W)};P.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=P}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let P=0;P<6;P++)we(_.__webglFramebuffer[P],T,P);else{let P=T.texture.mipmaps;P&&P.length>0?we(_.__webglFramebuffer[0],T,0):we(_.__webglFramebuffer,T,0)}else if(O){_.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[P]),_.__webglDepthbuffer[P]===void 0)_.__webglDepthbuffer[P]=i.createRenderbuffer(),pe(_.__webglDepthbuffer[P],T,!1);else{let W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[P];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Y)}}else{let P=T.texture.mipmaps;if(P&&P.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),pe(_.__webglDepthbuffer,T,!1);else{let W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(T,_,O){let P=n.get(T);_!==void 0&&Q(P.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ne(T)}function Ge(T){let _=T.texture,O=n.get(T),P=n.get(_);T.addEventListener("dispose",I);let W=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Me=W.length>1;if(Me||(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=_.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)O.__webglFramebuffer[le][Ie]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let le=0,Ie=W.length;le<Ie;le++){let De=n.get(W[le]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ze(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<W.length;le++){let Ie=W[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let De=s.convert(Ie.format,Ie.colorSpace),ee=s.convert(Ie.type),he=S(Ie.internalFormat,De,ee,Ie.colorSpace,T.isXRRenderTarget===!0),Ee=R(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture),re(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Q(O.__webglFramebuffer[le][Ie],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie);else Q(O.__webglFramebuffer[le],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,Ie=W.length;le<Ie;le++){let De=W[le],ee=n.get(De),he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),re(he,De),Q(O.__webglFramebuffer,T,De,i.COLOR_ATTACHMENT0+le,he,0),m(De)&&d(he)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,P.__webglTexture),re(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Q(O.__webglFramebuffer[Ie],T,_,i.COLOR_ATTACHMENT0,le,Ie);else Q(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,le,0);m(_)&&d(le),t.unbindTexture()}T.depthBuffer&&Ne(T)}function ne(T){let _=T.textures;for(let O=0,P=_.length;O<P;O++){let W=_[O];if(m(W)){let Y=M(T),Me=n.get(W).__webglTexture;t.bindTexture(Y,Me),d(Y),t.unbindTexture()}}}let $=[],se=[];function Se(T){if(T.samples>0){if(ze(T)===!1){let _=T.textures,O=T.width,P=T.height,W=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),le=_.length>1;if(le)for(let De=0;De<_.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Ie=T.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<_.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);let ee=n.get(_[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,O,P,0,0,O,P,W,i.NEAREST),l===!0&&($.length=0,se.length=0,$.push(i.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&($.push(Y),se.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let De=0;De<_.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);let ee=n.get(_[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function R(T){return Math.min(r.maxSamples,T.samples)}function ze(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ae(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ve(T,_){let O=T.colorSpace,P=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Li&&O!==Kn&&(at.getTransfer(O)===ct?(P!==mn||W!==en)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",O)),_}function ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=ie,this.rebindTextures=tt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function S_(i,e){function t(n,r=Kn){let s,o=at.getTransfer(r);if(n===en)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oc)return i.BYTE;if(n===ac)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===ia)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===uc)return i.RGB;if(n===mn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===bs||n===Ss||n===ws||n===Es)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===da)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fa||n===pa)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ma)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ga)return s.COMPRESSED_R11_EAC;if(n===_a)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return s.COMPRESSED_RG11_EAC;if(n===va)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ya||n===Ma||n===ba||n===Sa||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===Da||n===La)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ya)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Ua||n===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Na)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ns(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Dn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Uc,d={},M=t.getContextAttributes(),S=null,y=null,C=[],A=[],I=new de,x=null,w=new qt;w.viewport=new Mt;let B=new qt;B.viewport=new Mt;let E=[w,B],k=new jo,U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=C[H];return j===void 0&&(j=new gr,C[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=C[H];return j===void 0&&(j=new gr,C[H]=j),j.getGripSpace()},this.getHand=function(H){let j=C[H];return j===void 0&&(j=new gr,C[H]=j),j.getHandSpace()};function z(H){let j=A.indexOf(H.inputSource);if(j===-1)return;let Q=C[j];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||o),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",F);for(let H=0;H<C.length;H++){let j=A[H];j!==null&&(A[H]=null,C[H].disconnect(j))}U=null,G=null,m.reset();for(let H in d)delete d[H];e.setRenderTarget(S),f=null,u=null,p=null,r=null,y=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",L),r.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,pe=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=M.stencil?yi:In,pe=M.stencil?Tr:En);let Ne={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new hn(u.textureWidth,u.textureHeight,{format:mn,type:en,depthTexture:new hi(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let Q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(H){for(let j=0;j<H.removed.length;j++){let Q=H.removed[j],pe=A.indexOf(Q);pe>=0&&(A[pe]=null,C[pe].disconnect(Q))}for(let j=0;j<H.added.length;j++){let Q=H.added[j],pe=A.indexOf(Q);if(pe===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=A.length){A.push(Q),pe=Ne;break}else if(A[Ne]===null){A[Ne]=Q,pe=Ne;break}if(pe===-1)break}let we=C[pe];we&&we.connect(Q)}}let ie=new D,J=new D;function oe(H,j,Q){ie.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(Q.matrixWorld);let pe=ie.distanceTo(J),we=j.projectionMatrix.elements,Ne=Q.projectionMatrix.elements,tt=we[14]/(we[10]-1),Ge=we[14]/(we[10]+1),ne=(we[9]+1)/we[5],$=(we[9]-1)/we[5],se=(we[8]-1)/we[0],Se=(Ne[8]+1)/Ne[0],R=tt*se,ze=tt*Se,Ae=pe/(-se+Se),Ve=Ae*-se;if(j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ve),H.translateZ(Ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),we[10]===-1)H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let ve=tt+Ae,T=Ge+Ae,_=R-Ve,O=ze+(pe-Ve),P=ne*Ge/T*ve,W=$*Ge/T*ve;H.projectionMatrix.makePerspective(_,O,P,W,ve,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function X(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let j=H.near,Q=H.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),k.near=B.near=w.near=j,k.far=B.far=w.far=Q,(U!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,G=k.far),k.layers.mask=H.layers.mask|6,w.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;let pe=H.parent,we=k.cameras;X(k,pe);for(let Ne=0;Ne<we.length;Ne++)X(we[Ne],pe);we.length===2?oe(k,w,B):k.projectionMatrix.copy(w.projectionMatrix),re(H,k,pe)};function re(H,j,Q){Q===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=pr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return d[H]};let ue=null;function ae(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;Q.length!==k.cameras.length&&(k.cameras.length=0,pe=!0);for(let Ge=0;Ge<Q.length;Ge++){let ne=Q[Ge],$=null;if(f!==null)$=f.getViewport(ne);else{let Se=p.getViewSubImage(u,ne);$=Se.viewport,Ge===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let se=E[Ge];se===void 0&&(se=new qt,se.layers.enable(Ge),se.viewport=new Mt,E[Ge]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set($.x,$.y,$.width,$.height),Ge===0&&(k.matrix.copy(se.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),pe===!0&&k.cameras.push(se)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){p=n.getBinding();let Ge=p.getDepthInformation(Q[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),p=n.getBinding();for(let Ge=0;Ge<Q.length;Ge++){let ne=Q[Ge].camera;if(ne){let $=d[ne];$||($=new ns,d[ne]=$);let se=p.getCameraImage(ne);$.sourceTexture=se}}}}for(let Q=0;Q<C.length;Q++){let pe=A[Q],we=C[Q];pe!==null&&we!==void 0&&we.update(pe,j,c||o)}ue&&ue(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let ye=new Ou;ye.setAnimationLoop(ae),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}},Wi=new Sn,T_=new ft;function A_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,xc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,M,S,y){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),p(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),S=M.envMap,y=M.envMapRotation;S&&(m.envMap.value=S,Wi.copy(y),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Wi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function R_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let y=S.program;n.uniformBlockBinding(M,y)}function c(M,S){let y=r[M.id];y===void 0&&(g(M),y=h(M),r[M.id]=y,M.addEventListener("dispose",m));let C=S.program;n.updateUBOMapping(M,C);let A=e.render.frame;s[M.id]!==A&&(u(M),s[M.id]=A)}function h(M){let S=p();M.__bindingPointIndex=S;let y=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function p(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=r[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,I=y.length;A<I;A++){let x=Array.isArray(y[A])?y[A]:[y[A]];for(let w=0,B=x.length;w<B;w++){let E=x[w];if(f(E,A,w,C)===!0){let k=E.__offset,U=Array.isArray(E.value)?E.value:[E.value],G=0;for(let z=0;z<U.length;z++){let L=U[z],F=v(L);typeof L=="number"||typeof L=="boolean"?(E.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,k+G,E.__data)):L.isMatrix3?(E.__data[0]=L.elements[0],E.__data[1]=L.elements[1],E.__data[2]=L.elements[2],E.__data[3]=0,E.__data[4]=L.elements[3],E.__data[5]=L.elements[4],E.__data[6]=L.elements[5],E.__data[7]=0,E.__data[8]=L.elements[6],E.__data[9]=L.elements[7],E.__data[10]=L.elements[8],E.__data[11]=0):(L.toArray(E.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,S,y,C){let A=M.value,I=S+"_"+y;if(C[I]===void 0)return typeof A=="number"||typeof A=="boolean"?C[I]=A:C[I]=A.clone(),!0;{let x=C[I];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return C[I]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function g(M){let S=M.uniforms,y=0,C=16;for(let I=0,x=S.length;I<x;I++){let w=Array.isArray(S[I])?S[I]:[S[I]];for(let B=0,E=w.length;B<E;B++){let k=w[B],U=Array.isArray(k.value)?k.value:[k.value];for(let G=0,z=U.length;G<z;G++){let L=U[G],F=v(L),ie=y%C,J=ie%F.boundary,oe=ie+J;y+=J,oe!==0&&C-oe<F.storage&&(y+=C-oe),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=F.storage}}}let A=y%C;return A>0&&(y+=C-A),M.__size=y,M.__cache={},this}function v(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function P_(){return On===null&&(On=new Ao(C_,16,16,ki,Fn),On.name="DFG_LUT",On.minFilter=Bt,On.magFilter=Bt,On.wrapS=Pn,On.wrapT=Pn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Ya=class{constructor(e={}){let{canvas:t=ru(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=f,m=new Set([la,aa,oa]),d=new Set([en,En,Er,Tr,ra,sa]),M=new Uint32Array(4),S=new Int32Array(4),y=null,C=null,A=[],I=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,B=!1;this._outputColorSpace=Jt;let E=0,k=0,U=null,G=-1,z=null,L=new Mt,F=new Mt,ie=null,J=new rt(0),oe=0,X=t.width,re=t.height,ue=1,ae=null,ye=null,H=new Mt(0,0,X,re),j=new Mt(0,0,X,re),Q=!1,pe=new _r,we=!1,Ne=!1,tt=new ft,Ge=new D,ne=new Mt,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function Se(){return U===null?ue:1}let R=n;function ze(b,V){return t.getContext(b,V)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",gt,!1),R===null){let V="webgl2";if(R=ze(V,b),R===null)throw ze(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Xe("WebGLRenderer: "+b.message),b}let Ae,Ve,ve,T,_,O,P,W,Y,Me,le,Ie,De,ee,he,Ee,ge,be,Ye,N,xe,_e,Pe;function me(){Ae=new B0(R),Ae.init(),xe=new S_(R,Ae),Ve=new P0(R,Ae,e,xe),ve=new M_(R,Ae),Ve.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),T=new V0(R),_=new a_,O=new b_(R,Ae,ve,_,Ve,xe,T),P=new O0(w),W=new qf(R),_e=new R0(R,W),Y=new z0(R,W,T,_e),Me=new G0(R,Y,W,_e,T),be=new H0(R,Ve,O),he=new I0(_),le=new o_(w,P,Ae,Ve,_e,he),Ie=new A_(w,_),De=new c_,ee=new m_(Ae),ge=new A0(w,P,ve,Me,g,l),Ee=new y_(w,Me,Ve),Pe=new R_(R,T,Ve,ve),Ye=new C0(R,Ae,T),N=new k0(R,Ae,T),T.programs=le.programs,w.capabilities=Ve,w.extensions=Ae,w.properties=_,w.renderLists=De,w.shadowMap=Ee,w.state=ve,w.info=T}me(),v!==en&&(x=new X0(v,t.width,t.height,r,s));let te=new Fc(w,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=Ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(b){b!==void 0&&(ue=b,this.setSize(X,re,!1))},this.getSize=function(b){return b.set(X,re)},this.setSize=function(b,V,K=!0){if(te.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,re=V,t.width=Math.floor(b*ue),t.height=Math.floor(V*ue),K===!0&&(t.style.width=b+"px",t.style.height=V+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(X*ue,re*ue).floor()},this.setDrawingBufferSize=function(b,V,K){X=b,re=V,ue=K,t.width=Math.floor(b*K),t.height=Math.floor(V*K),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(H)},this.setViewport=function(b,V,K,Z){b.isVector4?H.set(b.x,b.y,b.z,b.w):H.set(b,V,K,Z),ve.viewport(L.copy(H).multiplyScalar(ue).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,V,K,Z){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,V,K,Z),ve.scissor(F.copy(j).multiplyScalar(ue).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){ve.setScissorTest(Q=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){ye=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,K=!0){let Z=0;if(b){let q=!1;if(U!==null){let Re=U.texture.format;q=m.has(Re)}if(q){let Re=U.texture.type,Le=d.has(Re),Ce=ge.getClearColor(),Fe=ge.getClearAlpha(),Be=Ce.r,Ke=Ce.g,nt=Ce.b;Le?(M[0]=Be,M[1]=Ke,M[2]=nt,M[3]=Fe,R.clearBufferuiv(R.COLOR,0,M)):(S[0]=Be,S[1]=Ke,S[2]=nt,S[3]=Fe,R.clearBufferiv(R.COLOR,0,S))}else Z|=R.COLOR_BUFFER_BIT}V&&(Z|=R.DEPTH_BUFFER_BIT),K&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),ge.dispose(),De.dispose(),ee.dispose(),_.dispose(),P.dispose(),Me.dispose(),_e.dispose(),Pe.dispose(),le.dispose(),te.dispose(),te.removeEventListener("sessionstart",Xc),te.removeEventListener("sessionend",qc),Si.stop()};function Ue(b){b.preventDefault(),mc("WebGLRenderer: Context Lost."),B=!0}function Je(){mc("WebGLRenderer: Context Restored."),B=!1;let b=T.autoReset,V=Ee.enabled,K=Ee.autoUpdate,Z=Ee.needsUpdate,q=Ee.type;me(),T.autoReset=b,Ee.enabled=V,Ee.autoUpdate=K,Ee.needsUpdate=Z,Ee.type=q}function gt(b){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let V=b.target;V.removeEventListener("dispose",ht),kn(V)}function kn(b){Vn(b),_.remove(b)}function Vn(b){let V=_.get(b).programs;V!==void 0&&(V.forEach(function(K){le.releaseProgram(K)}),b.isShaderMaterial&&le.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,K,Z,q,Re){V===null&&(V=$);let Le=q.isMesh&&q.matrixWorld.determinant()<0,Ce=dd(b,V,K,Z,q);ve.setMaterial(Z,Le);let Fe=K.index,Be=1;if(Z.wireframe===!0){if(Fe=Y.getWireframeAttribute(K),Fe===void 0)return;Be=2}let Ke=K.drawRange,nt=K.attributes.position,ke=Ke.start*Be,ut=(Ke.start+Ke.count)*Be;Re!==null&&(ke=Math.max(ke,Re.start*Be),ut=Math.min(ut,(Re.start+Re.count)*Be)),Fe!==null?(ke=Math.max(ke,0),ut=Math.min(ut,Fe.count)):nt!=null&&(ke=Math.max(ke,0),ut=Math.min(ut,nt.count));let Et=ut-ke;if(Et<0||Et===1/0)return;_e.setup(q,Z,Ce,K,Fe);let St,dt=Ye;if(Fe!==null&&(St=W.get(Fe),dt=N,dt.setIndex(St)),q.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*Se()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(q.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),ve.setLineWidth(Ht*Se()),q.isLineSegments?dt.setMode(R.LINES):q.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else q.isPoints?dt.setMode(R.POINTS):q.isSprite&&dt.setMode(R.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)qr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ht=q._multiDrawStarts,Oe=q._multiDrawCounts,sn=q._multiDrawCount,lt=Fe?W.get(Fe).bytesPerElement:1,xn=_.get(Z).currentProgram.getUniforms();for(let Rn=0;Rn<sn;Rn++)xn.setValue(R,"_gl_DrawID",Rn),dt.render(Ht[Rn]/lt,Oe[Rn])}else if(q.isInstancedMesh)dt.renderInstances(ke,Et,q.count);else if(K.isInstancedBufferGeometry){let Ht=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Oe=Math.min(K.instanceCount,Ht);dt.renderInstances(ke,Et,Oe)}else dt.render(ke,Et)};function Wc(b,V,K){b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,Us(b,V,K),b.side=Jn,b.needsUpdate=!0,Us(b,V,K),b.side=Qt):Us(b,V,K)}this.compile=function(b,V,K=null){K===null&&(K=b),C=ee.get(K),C.init(V),I.push(C),K.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),b!==K&&b.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights();let Z=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Re=q.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ce=Re[Le];Wc(Ce,K,q),Z.add(Ce)}else Wc(Re,K,q),Z.add(Re)}),C=I.pop(),Z},this.compileAsync=function(b,V,K=null){let Z=this.compile(b,V,K);return new Promise(q=>{function Re(){if(Z.forEach(function(Le){_.get(Le).currentProgram.isReady()&&Z.delete(Le)}),Z.size===0){q(b);return}setTimeout(Re,10)}Ae.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let ol=null;function ud(b){ol&&ol(b)}function Xc(){Si.stop()}function qc(){Si.start()}let Si=new Ou;Si.setAnimationLoop(ud),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){ol=b,te.setAnimationLoop(b),b===null?Si.stop():Si.start()},te.addEventListener("sessionstart",Xc),te.addEventListener("sessionend",qc),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;let K=te.enabled===!0&&te.isPresenting===!0,Z=x!==null&&(U===null||K)&&x.begin(w,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(te.cameraAutoUpdate===!0&&te.updateCamera(V),V=te.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,V,U),C=ee.get(b,I.length),C.init(V),I.push(C),tt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pe.setFromProjectionMatrix(tt,bn,V.reversedDepth),Ne=this.localClippingEnabled,we=he.init(this.clippingPlanes,Ne),y=De.get(b,A.length),y.init(),A.push(y),te.enabled===!0&&te.isPresenting===!0){let Le=w.xr.getDepthSensingMesh();Le!==null&&al(Le,V,-1/0,w.sortObjects)}al(b,V,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(ae,ye),se=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,se&&ge.addToRenderList(y,b),this.info.render.frame++,we===!0&&he.beginShadows();let q=C.state.shadowsArray;if(Ee.render(q,b,V),we===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&x.hasRenderPass())===!1){let Le=y.opaque,Ce=y.transmissive;if(C.setupLights(),V.isArrayCamera){let Fe=V.cameras;if(Ce.length>0)for(let Be=0,Ke=Fe.length;Be<Ke;Be++){let nt=Fe[Be];Zc(Le,Ce,b,nt)}se&&ge.render(b);for(let Be=0,Ke=Fe.length;Be<Ke;Be++){let nt=Fe[Be];Yc(y,b,nt,nt.viewport)}}else Ce.length>0&&Zc(Le,Ce,b,V),se&&ge.render(b),Yc(y,b,V)}U!==null&&k===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),Z&&x.end(w),b.isScene===!0&&b.onAfterRender(w,b,V),_e.resetDefaultState(),G=-1,z=null,I.pop(),I.length>0?(C=I[I.length-1],we===!0&&he.setGlobalState(w.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function al(b,V,K,Z){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pe.intersectsSprite(b)){Z&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);let Le=Me.update(b),Ce=b.material;Ce.visible&&y.push(b,Le,Ce,K,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pe.intersectsObject(b))){let Le=Me.update(b),Ce=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ne.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ne.copy(Le.boundingSphere.center)),ne.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Ce)){let Fe=Le.groups;for(let Be=0,Ke=Fe.length;Be<Ke;Be++){let nt=Fe[Be],ke=Ce[nt.materialIndex];ke&&ke.visible&&y.push(b,Le,ke,K,ne.z,nt)}}else Ce.visible&&y.push(b,Le,Ce,K,ne.z,null)}}let Re=b.children;for(let Le=0,Ce=Re.length;Le<Ce;Le++)al(Re[Le],V,K,Z)}function Yc(b,V,K,Z){let{opaque:q,transmissive:Re,transparent:Le}=b;C.setupLightsView(K),we===!0&&he.setGlobalState(w.clippingPlanes,K),Z&&ve.viewport(L.copy(Z)),q.length>0&&Ns(q,V,K),Re.length>0&&Ns(Re,V,K),Le.length>0&&Ns(Le,V,K),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Zc(b,V,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let ke=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new hn(1,1,{generateMipmaps:!0,type:ke?Fn:en,minFilter:vi,samples:Math.max(4,Ve.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}let Re=C.state.transmissionRenderTarget[Z.id],Le=Z.viewport||L;Re.setSize(Le.z*w.transmissionResolutionScale,Le.w*w.transmissionResolutionScale);let Ce=w.getRenderTarget(),Fe=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(Re),w.getClearColor(J),oe=w.getClearAlpha(),oe<1&&w.setClearColor(16777215,.5),w.clear(),se&&ge.render(K);let Ke=w.toneMapping;w.toneMapping=wn;let nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),we===!0&&he.setGlobalState(w.clippingPlanes,Z),Ns(b,K,Z),O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ut=0,Et=V.length;ut<Et;ut++){let St=V[ut],{object:dt,geometry:Ht,material:Oe,group:sn}=St;if(Oe.side===Qt&&dt.layers.test(Z.layers)){let lt=Oe.side;Oe.side=jt,Oe.needsUpdate=!0,Jc(dt,K,Z,Ht,Oe,sn),Oe.side=lt,Oe.needsUpdate=!0,ke=!0}}ke===!0&&(O.updateMultisampleRenderTarget(Re),O.updateRenderTargetMipmap(Re))}w.setRenderTarget(Ce,Fe,Be),w.setClearColor(J,oe),nt!==void 0&&(Z.viewport=nt),w.toneMapping=Ke}function Ns(b,V,K){let Z=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Re=b.length;q<Re;q++){let Le=b[q],{object:Ce,geometry:Fe,group:Be}=Le,Ke=Le.material;Ke.allowOverride===!0&&Z!==null&&(Ke=Z),Ce.layers.test(K.layers)&&Jc(Ce,V,K,Fe,Ke,Be)}}function Jc(b,V,K,Z,q,Re){b.onBeforeRender(w,V,K,Z,q,Re),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(w,V,K,Z,b,Re),q.transparent===!0&&q.side===Qt&&q.forceSinglePass===!1?(q.side=jt,q.needsUpdate=!0,w.renderBufferDirect(K,V,Z,q,b,Re),q.side=Jn,q.needsUpdate=!0,w.renderBufferDirect(K,V,Z,q,b,Re),q.side=Qt):w.renderBufferDirect(K,V,Z,q,b,Re),b.onAfterRender(w,V,K,Z,q,Re)}function Us(b,V,K){V.isScene!==!0&&(V=$);let Z=_.get(b),q=C.state.lights,Re=C.state.shadowsArray,Le=q.state.version,Ce=le.getParameters(b,q.state,Re,V,K),Fe=le.getProgramCacheKey(Ce),Be=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=P.get(b.envMap||Z.environment,Ke),Z.envMapRotation=Z.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",ht),Be=new Map,Z.programs=Be);let nt=Be.get(Fe);if(nt!==void 0){if(Z.currentProgram===nt&&Z.lightsStateVersion===Le)return Kc(b,Ce),nt}else Ce.uniforms=le.getUniforms(b),b.onBeforeCompile(Ce,w),nt=le.acquireProgram(Ce,Fe),Be.set(Fe,nt),Z.uniforms=Ce.uniforms;let ke=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=he.uniform),Kc(b,Ce),Z.needsLights=pd(b),Z.lightsStateVersion=Le,Z.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=nt,Z.uniformsList=null,nt}function $c(b){if(b.uniformsList===null){let V=b.currentProgram.getUniforms();b.uniformsList=Cr.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Kc(b,V){let K=_.get(b);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function dd(b,V,K,Z,q){V.isScene!==!0&&(V=$),O.resetTextureUnits();let Re=V.fog,Le=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,Ce=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Li,Fe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Be=P.get(Z.envMap||Le,Fe),Ke=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ke=!!K.morphAttributes.position,ut=!!K.morphAttributes.normal,Et=!!K.morphAttributes.color,St=wn;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(St=w.toneMapping);let dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ht=dt!==void 0?dt.length:0,Oe=_.get(Z),sn=C.state.lights;if(we===!0&&(Ne===!0||b!==z)){let Nt=b===z&&Z.id===G;he.setState(Z,b,Nt)}let lt=!1;Z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==sn.state.version||Oe.outputColorSpace!==Ce||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==Be||Z.fog===!0&&Oe.fog!==Re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==he.numPlanes||Oe.numIntersection!==he.numIntersection)||Oe.vertexAlphas!==Ke||Oe.vertexTangents!==nt||Oe.morphTargets!==ke||Oe.morphNormals!==ut||Oe.morphColors!==Et||Oe.toneMapping!==St||Oe.morphTargetsCount!==Ht)&&(lt=!0):(lt=!0,Oe.__version=Z.version);let xn=Oe.currentProgram;lt===!0&&(xn=Us(Z,V,q));let Rn=!1,wi=!1,Ji=!1,mt=xn.getUniforms(),Ot=Oe.uniforms;if(ve.useProgram(xn.program)&&(Rn=!0,wi=!0,Ji=!0),Z.id!==G&&(G=Z.id,wi=!0),Rn||z!==b){ve.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(R,"projectionMatrix",b.projectionMatrix),mt.setValue(R,"viewMatrix",b.matrixWorldInverse);let ni=mt.map.cameraPosition;ni!==void 0&&ni.setValue(R,Ge.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,wi=!0,Ji=!0)}if(Oe.needsLights&&(sn.state.directionalShadowMap.length>0&&mt.setValue(R,"directionalShadowMap",sn.state.directionalShadowMap,O),sn.state.spotShadowMap.length>0&&mt.setValue(R,"spotShadowMap",sn.state.spotShadowMap,O),sn.state.pointShadowMap.length>0&&mt.setValue(R,"pointShadowMap",sn.state.pointShadowMap,O)),q.isSkinnedMesh){mt.setOptional(R,q,"bindMatrix"),mt.setOptional(R,q,"bindMatrixInverse");let Nt=q.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),mt.setValue(R,"boneTexture",Nt.boneTexture,O))}q.isBatchedMesh&&(mt.setOptional(R,q,"batchingTexture"),mt.setValue(R,"batchingTexture",q._matricesTexture,O),mt.setOptional(R,q,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",q._indirectTexture,O),mt.setOptional(R,q,"batchingColorTexture"),q._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",q._colorsTexture,O));let ti=K.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&be.update(q,K,xn),(wi||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,mt.setValue(R,"receiveShadow",q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=P_()),wi&&(mt.setValue(R,"toneMappingExposure",w.toneMappingExposure),Oe.needsLights&&fd(Ot,Ji),Re&&Z.fog===!0&&Ie.refreshFogUniforms(Ot,Re),Ie.refreshMaterialUniforms(Ot,Z,ue,re,C.state.transmissionRenderTarget[b.id]),Cr.upload(R,$c(Oe),Ot,O)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Cr.upload(R,$c(Oe),Ot,O),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(R,"center",q.center),mt.setValue(R,"modelViewMatrix",q.modelViewMatrix),mt.setValue(R,"normalMatrix",q.normalMatrix),mt.setValue(R,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Nt=Z.uniformsGroups;for(let ni=0,$i=Nt.length;ni<$i;ni++){let jc=Nt[ni];Pe.update(jc,xn),Pe.bind(jc,xn)}}return xn}function fd(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function pd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,V,K){let Z=_.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=V,_.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){let K=_.get(b);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};let md=R.createFramebuffer();this.setRenderTarget=function(b,V=0,K=0){U=b,E=V,k=K;let Z=null,q=!1,Re=!1;if(b){let Ce=_.get(b);if(Ce.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(R.FRAMEBUFFER,Ce.__webglFramebuffer),L.copy(b.viewport),F.copy(b.scissor),ie=b.scissorTest,ve.viewport(L),ve.scissor(F),ve.setScissorTest(ie),G=-1;return}else if(Ce.__webglFramebuffer===void 0)O.setupRenderTarget(b);else if(Ce.__hasExternalTextures)O.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ke=b.depthTexture;if(Ce.__boundDepthTexture!==Ke){if(Ke!==null&&_.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);let Be=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?Z=Be[V][K]:Z=Be[V],q=!0):b.samples>0&&O.useMultisampledRTT(b)===!1?Z=_.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[K]:Z=Be,L.copy(b.viewport),F.copy(b.scissor),ie=b.scissorTest}else L.copy(H).multiplyScalar(ue).floor(),F.copy(j).multiplyScalar(ue).floor(),ie=Q;if(K!==0&&(Z=md),ve.bindFramebuffer(R.FRAMEBUFFER,Z)&&ve.drawBuffers(b,Z),ve.viewport(L),ve.scissor(F),ve.setScissorTest(ie),q){let Ce=_.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,K)}else if(Re){let Ce=V;for(let Fe=0;Fe<b.textures.length;Fe++){let Be=_.get(b.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,K,Ce)}}else if(b!==null&&K!==0){let Ce=_.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,K)}G=-1},this.readRenderTargetPixels=function(b,V,K,Z,q,Re,Le,Ce=0){if(!(b&&b.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){ve.bindFramebuffer(R.FRAMEBUFFER,Fe);try{let Be=b.textures[Ce],Ke=Be.format,nt=Be.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),!Ve.textureFormatReadable(Ke)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(nt)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Z&&K>=0&&K<=b.height-q&&R.readPixels(V,K,Z,q,xe.convert(Ke),xe.convert(nt),Re)}finally{let Be=U!==null?_.get(U).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,V,K,Z,q,Re,Le,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(V>=0&&V<=b.width-Z&&K>=0&&K<=b.height-q){ve.bindFramebuffer(R.FRAMEBUFFER,Fe);let Be=b.textures[Ce],Ke=Be.format,nt=Be.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ce),!Ve.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.bufferData(R.PIXEL_PACK_BUFFER,Re.byteLength,R.STREAM_READ),R.readPixels(V,K,Z,q,xe.convert(Ke),xe.convert(nt),0);let ut=U!==null?_.get(U).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,ut);let Et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ou(R,Et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Re),R.deleteBuffer(ke),R.deleteSync(Et),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,K=0){let Z=Math.pow(2,-K),q=Math.floor(b.image.width*Z),Re=Math.floor(b.image.height*Z),Le=V!==null?V.x:0,Ce=V!==null?V.y:0;O.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,K,0,0,Le,Ce,q,Re),ve.unbindTexture()};let gd=R.createFramebuffer(),_d=R.createFramebuffer();this.copyTextureToTexture=function(b,V,K=null,Z=null,q=0,Re=0){let Le,Ce,Fe,Be,Ke,nt,ke,ut,Et,St=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(K!==null)Le=K.max.x-K.min.x,Ce=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ke=K.min.y,nt=K.isBox3?K.min.z:0;else{let Ot=Math.pow(2,-q);Le=Math.floor(St.width*Ot),Ce=Math.floor(St.height*Ot),b.isDataArrayTexture?Fe=St.depth:b.isData3DTexture?Fe=Math.floor(St.depth*Ot):Fe=1,Be=0,Ke=0,nt=0}Z!==null?(ke=Z.x,ut=Z.y,Et=Z.z):(ke=0,ut=0,Et=0);let dt=xe.convert(V.format),Ht=xe.convert(V.type),Oe;V.isData3DTexture?(O.setTexture3D(V,0),Oe=R.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(O.setTexture2DArray(V,0),Oe=R.TEXTURE_2D_ARRAY):(O.setTexture2D(V,0),Oe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment);let sn=R.getParameter(R.UNPACK_ROW_LENGTH),lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),Rn=R.getParameter(R.UNPACK_SKIP_ROWS),wi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Be),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,nt);let Ji=b.isDataArrayTexture||b.isData3DTexture,mt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){let Ot=_.get(b),ti=_.get(V),Nt=_.get(Ot.__renderTarget),ni=_.get(ti.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let $i=0;$i<Fe;$i++)Ji&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(b).__webglTexture,q,nt+$i),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(V).__webglTexture,Re,Et+$i)),R.blitFramebuffer(Be,Ke,Le,Ce,ke,ut,Le,Ce,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||_.has(b)){let Ot=_.get(b),ti=_.get(V);ve.bindFramebuffer(R.READ_FRAMEBUFFER,gd),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,_d);for(let Nt=0;Nt<Fe;Nt++)Ji?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,q,nt+Nt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,q),mt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ti.__webglTexture,Re,Et+Nt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ti.__webglTexture,Re),q!==0?R.blitFramebuffer(Be,Ke,Le,Ce,ke,ut,Le,Ce,R.COLOR_BUFFER_BIT,R.NEAREST):mt?R.copyTexSubImage3D(Oe,Re,ke,ut,Et+Nt,Be,Ke,Le,Ce):R.copyTexSubImage2D(Oe,Re,ke,ut,Be,Ke,Le,Ce);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Oe,Re,ke,ut,Et,Le,Ce,Fe,dt,Ht,St.data):V.isCompressedArrayTexture?R.compressedTexSubImage3D(Oe,Re,ke,ut,Et,Le,Ce,Fe,dt,St.data):R.texSubImage3D(Oe,Re,ke,ut,Et,Le,Ce,Fe,dt,Ht,St):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Re,ke,ut,Le,Ce,dt,Ht,St.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Re,ke,ut,St.width,St.height,dt,St.data):R.texSubImage2D(R.TEXTURE_2D,Re,ke,ut,Le,Ce,dt,Ht,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,sn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Rn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wi),Re===0&&V.generateMipmaps&&R.generateMipmap(Oe),ve.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&O.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?O.setTextureCube(b,0):b.isData3DTexture?O.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?O.setTexture2DArray(b,0):O.setTexture2D(b,0),ve.unbindTexture()},this.resetState=function(){E=0,k=0,U=null,ve.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Hu={type:"change"},Bc={type:"start"},Wu={type:"end"},$a=new Ui,Gu=new Xt,I_=Math.cos(70*Ar.DEG2RAD),Lt=new D,tn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oc=1e-6,Ka=class extends _s{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new cn,this._lastTargetPosition=new D,this._quat=new cn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sr,this._sphericalDelta=new Sr,this._scale=1,this._panOffset=new D,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new D,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=L_.bind(this),this._onPointerDown=D_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=V_.bind(this),this._onMouseWheel=O_.bind(this),this._onKeyDown=B_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=k_.bind(this),this._onMouseDown=U_.bind(this),this._onMouseMove=F_.bind(this),this._interceptControlDown=H_.bind(this),this._interceptControlUp=G_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Lt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($a.origin.copy(this.object.position),$a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($a.direction))<I_?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),$a.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oc||this._lastTargetPosition.distanceToSquared(this.target)>Oc?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/t.clientHeight),this._rotateUp(tn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function D_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function L_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function N_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function U_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Bc)}function F_(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function O_(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(Bc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function B_(i){this.enabled!==!1&&this._handleKeyDown(i)}function z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Bc)}function k_(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function V_(i){this.enabled!==!1&&i.preventDefault()}function H_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new kt,c=0;for(let h=0;h<i.length;++h){let p=i[h],u=0;if(t!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in p.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(p.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in p.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(p.morphAttributes[f])}if(e){let f;if(t)f=p.index.count;else if(p.attributes.position!==void 0)f=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,p=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)p.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(p)}for(let h in s){let p=Xu(s[h]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,p)}for(let h in o){let p=o[h][0].length;if(p===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<p;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let g=Xu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Xu(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let o=new e(s),a=new $t(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let p=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let v=h.getComponent(u,g);a.setComponent(u+p,g,v)}}else o.set(h.array,l);l+=h.count*t}return r!==void 0&&(a.gpuType=r),a}var vt=.4166666666666667,fe=.24,ja=.018,Vc=23*vt,Yi=16*vt,Ct=-Vc/2,rn=Vc/2,bt=-Yi/2,_n=Yi/2,zn={ground:fe,bearing:8*vt,slabBottom:8*vt-fe,upper:8*vt,roofEave:12*vt-fe,roofRidgeUnderside:12*vt-fe+Yi/2},W_={width:Vc,depth:Yi,x0:Ct,x1:rn,z0:bt,z1:_n,wallDepth:fe,module:vt,terraceDepth:7*vt,balconyDepth:5*vt,canopyDepth:2*vt,roofGableOverhang:2*vt,roofEaveOverhang:vt,roofAngle:45,kneeHeight:4*vt-fe},Zu={left:Ct+fe,right:rn-fe,rear:bt+fe,front:_n-fe},jn=(i,e)=>e+Math.round((i-e+fe/2)/vt)*vt-fe/2,Ju={smallX:jn(-2.88,Ct),leftX:jn(-1.21,Ct),rightX:jn(1.29,Ct),wardrobeX:jn(2.96,Ct),hallNotchX:jn(-2.46,Ct),officeZ:jn(-.585,bt),utilityZ:jn(1.498,bt),upperBathZ:jn(-1.002,bt),upperBedZ:jn(.248,bt)},ce=Ju,$e=Zu,xt=(i,e,t,n,r=[])=>({id:i,level:e,a:t,b:n,depth:fe,holes:r}),An=(i,e,t=.85,n="ground")=>({id:i,kind:"door",at:e,width:t,bottom:zn[n],height:2.1}),qu=(i,e,t,n,r)=>({id:i,kind:"window",at:e,width:t,bottom:n,height:r}),qi=(i,e,t,n="ground",r=2.4)=>({id:i,kind:"patio-door",at:e,width:t,bottom:zn[n],height:r}),$u=[xt("ground-rear","ground",[Ct,bt+fe/2],[rn,bt+fe/2],[qi("kitchen-garden-door",-.72-Ct,.9),qi("living-rear-glazing",1.59-Ct,2.58)]),xt("ground-front","ground",[Ct,_n-fe/2],[rn,_n-fe/2],[An("entrance",-2.61-Ct,.9),qu("utility-window",-4.16-Ct,.83,1.34,.95)]),xt("ground-left","ground",[Ct+fe/2,bt],[Ct+fe/2,_n],[qi("office-window",-2.78-bt,1.4,"ground",2.1),qu("ground-bath-window",-.1-bt,.83,1.24,1.1)]),xt("ground-right","ground",[rn-fe/2,bt],[rn-fe/2,_n],[qi("living-terrace-glazing",-2.82-bt,2.85)]),xt("upper-rear","upper",[Ct,bt+fe/2],[rn,bt+fe/2]),xt("upper-front","upper",[Ct,_n-fe/2],[rn,_n-fe/2]),xt("upper-left","upper",[Ct+fe/2,bt],[Ct+fe/2,_n],[qi("rear-bedroom-window",-2.4-bt,1.4,"upper",2.1),qi("front-bedroom-window",.9-bt,.9,"upper",2.1)]),xt("upper-right","upper",[rn-fe/2,bt],[rn-fe/2,_n],[qi("master-balcony-door",-.3-bt,2,"upper",2.1)])],Ku=[xt("ground-office-east","ground",[ce.leftX,$e.rear],[ce.leftX,ce.officeZ]),xt("ground-office-south","ground",[$e.left,ce.officeZ],[ce.leftX-fe/2,ce.officeZ],[{...An("office-door",ce.smallX+fe/2-$e.left,.85),swing:-1}]),xt("ground-service-east","ground",[ce.smallX,ce.officeZ+fe/2],[ce.smallX,$e.front],[An("bath-door",.08-(ce.officeZ+fe/2),.85),An("utility-door",1.88-(ce.officeZ+fe/2),.85)]),xt("ground-utility-north","ground",[$e.left,ce.utilityZ],[ce.leftX-fe/2,ce.utilityZ],[An("vestibule-hall-door",-2.62-$e.left,.85)]),xt("ground-stair-west","ground",[ce.leftX,ce.utilityZ+fe/2],[ce.leftX,$e.front]),xt("ground-stair-east","ground",[ce.rightX,ce.upperBedZ],[ce.rightX,$e.front]),xt("upper-rear-bedroom-east","upper",[ce.leftX,$e.rear],[ce.leftX,ce.upperBathZ-fe/2]),xt("upper-hall-notch-west","upper",[ce.hallNotchX,ce.upperBathZ],[ce.hallNotchX,ce.upperBedZ]),xt("upper-hall-notch-north","upper",[ce.hallNotchX,ce.upperBathZ],[ce.leftX-fe/2,ce.upperBathZ],[An("rear-bedroom-door",-2.31-ce.hallNotchX,.83,"upper")]),xt("upper-bedroom-division","upper",[$e.left,ce.upperBedZ],[ce.leftX-fe/2,ce.upperBedZ],[An("front-bedroom-door",-2.31-$e.left,.83,"upper")]),xt("upper-front-bedroom-east","upper",[ce.leftX,ce.upperBedZ+fe/2],[ce.leftX,$e.front]),xt("upper-family-bath-east","upper",[ce.rightX,$e.rear],[ce.rightX,ce.upperBathZ-fe/2]),xt("upper-family-bath-south","upper",[ce.leftX+fe/2,ce.upperBathZ],[ce.rightX-fe/2,ce.upperBathZ],[An("family-bath-door",-.92-(ce.leftX+fe/2),.83,"upper")]),xt("upper-suite-divider","upper",[ce.wardrobeX,$e.rear],[ce.wardrobeX,ce.upperBathZ-fe/2],[{...An("ensuite-door",-2.05-$e.rear,.83,"upper"),kind:"sliding-door"}]),xt("upper-suite-south","upper",[ce.rightX+fe/2,ce.upperBathZ],[$e.right,ce.upperBathZ],[{...An("wardrobe-door",3.32-(ce.rightX+fe/2),.8,"upper"),kind:"sliding-door"}]),xt("upper-master-west","upper",[ce.rightX,ce.upperBathZ+fe/2],[ce.rightX,$e.front],[An("master-door",-.8-(ce.upperBathZ+fe/2),.83,"upper")])],X_={"kitchen-garden-door":[10,12],"living-rear-glazing":[15,21],entrance:[5,8],"utility-window":[1,3],"office-window":[1,5],"ground-bath-window":[8,10],"living-terrace-glazing":[1,8],"rear-bedroom-window":[2,6],"front-bedroom-window":[10,12],"master-balcony-door":[7,12],"office-door":[5,8],"bath-door":[8,10],"utility-door":[12,14],"vestibule-hall-door":[6,8],"rear-bedroom-door":[6,8],"front-bedroom-door":[6,8],"family-bath-door":[10,12],"ensuite-door":[3,5],"wardrobe-door":[19,21],"master-door":[6,8]};for(let i of[...$u,...Ku])for(let e of i.holes){let t=i.a[0]===i.b[0]?1:0,[n,r]=X_[e.id],s=t===0?Ct:bt,o=i.level==="upper"?zn.slabBottom:0,a=e.kind==="window"?3:null,l=6;e.at=s+n*vt+ja-i.a[t],e.width=(r-n)*vt-2*ja,e.bottom=o+(a===null?fe:a*vt+ja),e.height=o+l*vt-ja-e.bottom,e.moduleBounds={a:n,b:r,sill:a,lintel:l}}var Cs={id:"stair",x0:ce.leftX+fe/2,x1:ce.rightX-fe/2,z0:ce.upperBedZ,z1:$e.front,floorY:zn.ground,upperY:zn.upper,risers:16,riser:(zn.upper-zn.ground)/16,flightWidth:.9,tread:.275,landingDepth:.9,flightTreads:7,direction:"up-towards-front-then-back",opening:{x0:ce.leftX+fe/2,x1:ce.rightX-fe/2,z0:ce.upperBedZ,z1:$e.front}},q_={ground:{x0:rn,x1:rn+7*vt,z0:bt,z1:_n},balcony:{x0:rn,x1:rn+5*vt,z0:bt,z1:_n}};function kc(i){return Math.abs(i.reduce((e,t,n)=>e+t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1],0))/2}function Yu(i,e,t){let n=[];for(let r=0;r<i.length;r++){let s=i[r],o=i[(r+1)%i.length],a=t?s[1]>=e:s[1]<=e,l=t?o[1]>=e:o[1]<=e;if(a&&n.push(s),a!==l){let c=(e-s[1])/(o[1]-s[1]);n.push([s[0]+c*(o[0]-s[0]),e])}}return n}function Y_(i){let e=t=>{let n=Yi/2+(zn.roofEave-zn.upper)-t;return kc(Yu(Yu(i,-n,!0),n,!1))};return(e(1.4)+e(2.2))/2}function nn(i,e,t,n,r){let s=n.map(a=>a[0]),o=n.map(a=>a[1]);return{id:i,name:e,level:t,polygon:n,x0:Math.min(...s),x1:Math.max(...s),z0:Math.min(...o),z1:Math.max(...o),label:r,area:kc(n),usableArea:t==="upper"?Y_(n):kc(n)}}var gn=(i,e,t,n)=>[[i,e],[t,e],[t,n],[i,n]],Qa=[nn("office","Gabinet / pok\xF3j go\u015Bcinny","ground",gn($e.left,$e.rear,ce.leftX-fe/2,ce.officeZ-fe/2),[-3.42,-1.28]),nn("bath-ground","\u0141azienka","ground",gn($e.left,ce.officeZ+fe/2,ce.smallX-fe/2,ce.utilityZ-fe/2),[-3.77,.75]),nn("utility","Pom. gospodarcze","ground",gn($e.left,ce.utilityZ+fe/2,ce.smallX-fe/2,$e.front),[-3.77,2.36]),nn("vestibule","Wiatro\u0142ap","ground",gn(ce.smallX+fe/2,ce.utilityZ+fe/2,ce.leftX-fe/2,$e.front),[-2.04,2.27]),nn("hall-ground","Hol","ground",gn(ce.smallX+fe/2,ce.officeZ+fe/2,ce.leftX-fe/2,ce.utilityZ-fe/2),[-2.04,.7]),nn("stairs-ground","Schody","ground",gn(Cs.x0,Cs.z0,Cs.x1,Cs.z1),[.05,1.79]),nn("living","Salon + jadalnia + kuchnia","ground",[[ce.leftX+fe/2,$e.rear],[$e.right,$e.rear],[$e.right,$e.front],[ce.rightX+fe/2,$e.front],[ce.rightX+fe/2,ce.upperBedZ],[ce.leftX+fe/2,ce.upperBedZ]],[2.98,.75]),nn("bed-rear","Sypialnia 1","upper",[[$e.left,$e.rear],[ce.leftX-fe/2,$e.rear],[ce.leftX-fe/2,ce.upperBathZ-fe/2],[ce.hallNotchX-fe/2,ce.upperBathZ-fe/2],[ce.hallNotchX-fe/2,ce.upperBedZ-fe/2],[$e.left,ce.upperBedZ-fe/2]],[-3.65,-.55]),nn("bed-front","Sypialnia 2","upper",gn($e.left,ce.upperBedZ+fe/2,ce.leftX-fe/2,$e.front),[-3.1,1.55]),nn("bath-family","\u0141azienka","upper",gn(ce.leftX+fe/2,$e.rear,ce.rightX-fe/2,ce.upperBathZ-fe/2),[.05,-1.7]),nn("bath-suite","\u0141azienka prywatna","upper",gn(ce.rightX+fe/2,$e.rear,ce.wardrobeX-fe/2,ce.upperBathZ-fe/2),[2.12,-2.04]),nn("wardrobe","Garderoba","upper",gn(ce.wardrobeX+fe/2,$e.rear,$e.right,ce.upperBathZ-fe/2),[3.57,-1.78]),nn("master","Sypialnia g\u0142\xF3wna","upper",gn(ce.rightX+fe/2,ce.upperBathZ+fe/2,$e.right,$e.front),[2.99,.56]),nn("hall-upper","Hol","upper",gn(ce.hallNotchX+fe/2,ce.upperBathZ+fe/2,ce.rightX-fe/2,ce.upperBedZ-fe/2),[-.62,-.39])],el={groundArea:Qa.filter(i=>i.level==="ground").reduce((i,e)=>i+e.usableArea,0),upperArea:Qa.filter(i=>i.level==="upper").reduce((i,e)=>i+e.usableArea,0),upperFloorArea:Qa.filter(i=>i.level==="upper").reduce((i,e)=>i+e.area,0),terraceArea:7*vt*Yi,balconyArea:5*vt*Yi,bedrooms:3,groundOffice:!0,bathrooms:3};el.usableArea=el.groundArea+el.upperArea;var Z_={envelope:W_,levels:zn,inner:Zu,axes:Ju,exteriorWalls:$u,partitions:Ku,rooms:Qa,stair:Cs,terraces:q_,facts:el},wt=Z_;var ju={'["Parter \u2014 rear","ground-rear","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,16,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,17,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,18,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,19,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,20,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,21,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 rear","ground-rear","wall-vertical",1,22,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,11,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,16,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,17,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,18,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,19,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,20,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,21,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 front","ground-front","wall-vertical",1,22,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,3,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,3,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,4,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,5,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,11,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,11,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Parter \u2014 right","ground-right","wall-vertical",1,15,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Parter \u2014 right","ground-right","wall-vertical",1,15,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,5,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,7,0,0,0,6,0,2.26]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,8,0,0,0,6,0,2.26]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,5,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,6,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,7,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,8,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,9,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,10,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,11,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit poddasza","","ceiling",1,12,0,0,7.5,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-horizontal",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-east","ground-office-east","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-horizontal",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-office-south","ground-office-south","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,1,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,2,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,3,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,4,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,5,0,0,1.6666667,5,1.232,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,6,0,0,1.6666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-horizontal",0,7,0,0,1.6666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-service-east","ground-service-east","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-horizontal",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["ground-utility-north","ground-utility-north","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-utility-north","ground-utility-north","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,1,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,2,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,3,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,4,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,5,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,6,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-horizontal",0,7,0,0,0,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-west","ground-stair-west","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,1,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,2,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,3,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,4,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,5,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,6,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-horizontal",0,7,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["ground-stair-east","ground-stair-east","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-horizontal",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-rear-bedroom-east","upper-rear-bedroom-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,1,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-vertical",1,2,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,0,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,0,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,1,0,0,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,1,0,0,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-hall-notch-north","upper-hall-notch-north","partition-vertical",1,2,0,0,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,1,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,2,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,3,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,4,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,5,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,6,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-horizontal",0,7,0,1,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,1,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,2,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,3,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,4,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,5,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,6,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-hall-notch-west","upper-hall-notch-west","partition-horizontal",0,7,0,0,0,3,0,1.25]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,7,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,7,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-bedroom-division","upper-bedroom-division","partition-vertical",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,1,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,2,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,3,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-horizontal",0,4,0,0,1.6666667,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-front-bedroom-east","upper-front-bedroom-east","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-horizontal",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-east","upper-family-bath-east","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,2,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,1,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,2,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,3,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,4,0,0,0,6,0,1.268]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,4,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,1,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,2,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,3,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,4,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-horizontal",0,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,1,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,2,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,3,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,4,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,5,0,0,0,6,2.0653333,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,6,0,0,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-divider","upper-suite-divider","partition-horizontal",0,7,0,0,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-suite-south","upper-suite-south","partition-vertical",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,5,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,5,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-suite-south","upper-suite-south","partition-vertical",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,1,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,2,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,3,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-horizontal",0,4,0,0,2.5,4,0,1.6666667]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,1,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,2,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,3,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,4,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,5,0,1,0,6,1.232,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,6,0,1,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-family-bath-south","upper-family-bath-south","partition-horizontal",0,7,0,1,0,6,0,2.5]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["upper-master-west","upper-master-west","partition-vertical",1,0,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,0,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,1,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,1,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["upper-master-west","upper-master-west","partition-vertical",1,6,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["balcony-support-rear","balcony-support-rear","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["balcony-support-front","balcony-support-front","partition-vertical",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}]};var nl=.4166666666666667,Qu=.24,tl=.018;function Qn(i,e=!0){let t=i.pixels*nl,n=(i.trim==="left"?Qu:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?Qu:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function ed(i){let e=i.pixels*nl;return[[-(i.extendStart||0),tl],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*nl-tl,(n+1)*nl+tl]),[e-tl,e+(i.extendEnd||0)]]}var td=2.5/6,$_=.24,Dr=.018,Hc=new Map,K_=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function Gc(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let h of t)if(!Number.isInteger(h.at)||h.at<=0||h.at>=i||![0,1].includes(h.layer)||!["left","right","seam"].includes(h.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(Hc.has(s))return Hc.get(s).map(h=>({...h}));let o=[0,1].map(h=>new Set(t.filter(p=>p.layer===h).map(p=>p.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let h=1;h<=i;h++){let p=new Map;for(let u of a.values())for(let f of[!1,!0])for(let g of[!1,!0]){let v=[f,g];if(h<i&&f&&g&&!(o[0].has(h)&&o[1].has(h)))continue;let m=[...u.starts],d=[...u.score],M=[],S=!0;for(let A of[0,1]){let I=m[A],x=h-I,w=A^e;if(x>6||!v[A]&&(h===i||x===6||o[A].has(h))){S=!1;break}if(!v[A])continue;let B=r.left&&w===1&&I===0||t.some(F=>F.layer===A&&F.at===I&&F.side==="left"),E=r.right&&w===1&&h===i||t.some(F=>F.layer===A&&F.at===h&&F.side==="right");if(B&&E){S=!1;break}let k=B?"left":E?"right":null,U={};for(let F of t.filter(ie=>ie.layer===A&&ie.fullEndSlot))F.side==="left"&&F.at===h&&(U.extendEnd=Dr),F.side==="left"&&F.at===I&&(U.extraStartTrim=Dr),F.side==="right"&&F.at===h&&(U.extraEndTrim=Dr),F.side==="right"&&F.at===I&&(U.extendStart=Dr);r.extraTrim&&B&&I===0&&(U.extraStartTrim=Dr),r.extraTrim&&E&&h===i&&(U.extraEndTrim=Dr);let G={pixels:x,start:I*td,layer:w,trim:k,...U},[z,L]=Qn(G,!1);if(L-z>2.5+1e-9||L-z<=0){S=!1;break}d[0]+=+(x===1&&!!k),d[1]+=+(x===1),d[2]++,d[3]+=1/(x*td-(k?$_:0)),w===1&&I===0&&(d[4]+=Math.abs(x-n)),M.push(G),m[A]=h}if(!S)continue;let y=m.join(","),C=p.get(y);(!C||K_(d,C.score))&&p.set(y,{starts:m,score:d,pieces:[...u.pieces,...M]})}a=p}let l=a.get(`${i},${i}`);if(!l)throw new Error("No native staggered stock layout: "+s);let c=l.pieces.sort((h,p)=>p.layer-h.layer||h.start-p.start);return Hc.set(s,c),c.map(h=>({...h}))}function nd(i,e=2){return Gc(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var Ze=2.5/6,Vt=.24,it=.018,st=Vt/2,qe=1e-7,Lr=new D(1,0,0),Zi=new D(0,1,0),Ps=new D(0,0,1);function id(i={},e={},t={}){let n=i.wood||new $n({color:"#c7a46f",side:Qt}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,l=nd;function c(m,d,M,S){let y=[];for(let C=0;C<m.length;C++){let A=m[C],I=m[(C+1)%m.length],x=S*(A[d]-M),w=S*(I[d]-M);x>=-qe&&y.push(A.clone()),x>=-qe!=w>=-qe&&y.push(A.clone().lerp(I,x/(x-w)))}return y}function h(m){let d=m.pixels*Ze,M=[new de(-(m.extendStart||0),0),new de(d+(m.extendEnd||0),0),new de(d+(m.extendEnd||0),st),new de(d-it,st),new de(d-it,Vt)];for(let w=m.pixels-1;w>=1;w--){let B=w*Ze;M.push(new de(B+it,Vt),new de(B+it,st),new de(B-it,st),new de(B-it,Vt))}M.push(new de(it,Vt),new de(it,st),new de(-(m.extendStart||0),st));let S=M,[y,C]=Qn(m);if(C<=y+qe||(y>-(m.extendStart||0)+qe&&(S=c(S,"x",y,1)),C<d+(m.extendEnd||0)-qe&&(S=c(S,"x",C,-1)),S.length<3))return null;let A=new di(S);A.closePath();let I=new Oi(A,{depth:it,bevelEnabled:!1,curveSegments:1});I.translate(0,-st,0);let x=I.getAttribute("uv");for(let w=0;w<x.count;w++)x.setXY(w,x.getX(w)/2.5,x.getY(w)/Vt);return I}function p(m,d,M,S=[],y=null){let[C,A]=Qn(m);y&&(C=Math.max(C,y[0]-m.start),A=Math.min(A,y[1]-m.start));let I=A>C+qe?[[C,A]]:[];for(let x of S){let w=d===0?x.v0:x.u0,B=d===0?x.v1:x.u1;if(M+it<=w+qe||M>=B-qe)continue;let E=(d===0?x.u0:x.v0)-m.start,k=(d===0?x.u1:x.v1)-m.start;I=I.flatMap(([U,G])=>k<=U||E>=G?[[U,G]]:[[U,Math.min(G,E)],[Math.max(U,k),G]].filter(([z,L])=>L>z+qe))}return I.map(([x,w])=>({...m,minCut:x,limit:w}))}function u(m,d,M,S,y=[]){let C=m.pixels*Ze,[A,I]=Qn(m);if(I<=A+qe)return null;let x=ed(m),w=(m.connectorCuts||[]).map(J=>({x0:J.end==="start"?J.offset||0:C-(J.offset||0)-st,x1:J.end==="start"?(J.offset||0)+st:C-(J.offset||0),y0:J.edge==="slotted"?st-it:-st,y1:J.edge==="slotted"?st:-st+it})),B=[A,I];for(let J of x)for(let oe of J)oe>A+qe&&oe<I-qe&&B.push(oe);for(let J of w)for(let oe of[J.x0,J.x1])oe>A+qe&&oe<I-qe&&B.push(oe);B.sort((J,oe)=>J-oe);let E=new Map,k=!1,U=J=>`${Math.round(J.x*1e8)},${Math.round(J.y*1e8)},${Math.round(J.z*1e8)}`;function G(J,oe){let X=[],re=[];for(let ae of J){let ye=[];for(let H=0;H<ae.length;H++){let j=ae[H],Q=ae[(H+1)%ae.length],pe=oe.c-oe.n.dot(j.clone().add(M)),we=oe.c-oe.n.dot(Q.clone().add(M));if(pe>=-qe?ye.push(j):k=!0,pe>=-qe!=we>=-qe){let Ne=j.clone().lerp(Q,pe/(pe-we));ye.push(Ne),re.push(Ne)}}ye.length>=3&&X.push(ye)}let ue=[...new Map(re.map(ae=>[U(ae),ae])).values()];if(ue.length>=3){let ae=ue.reduce((Q,pe)=>Q.add(pe),new D).divideScalar(ue.length),ye=oe.n.clone().normalize(),H=(Math.abs(ye.y)>.9?Lr:Zi).clone().cross(ye).normalize(),j=ye.clone().cross(H);ue.sort((Q,pe)=>Math.atan2(Q.clone().sub(ae).dot(j),Q.clone().sub(ae).dot(H))-Math.atan2(pe.clone().sub(ae).dot(j),pe.clone().sub(ae).dot(H))),X.push(ue)}return X}function z(J,oe,X,re){let ue=[[J,X,0],[oe,X,0],[oe,re,0],[J,re,0],[J,X,it],[oe,X,it],[oe,re,it],[J,re,it]].map(Q=>new D(...Q).applyMatrix4(d)),ae=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(Q=>Q.map(pe=>ue[pe]));d.determinant()<0&&ae.forEach(Q=>Q.reverse());for(let Q of S)if(ae=G(ae,Q),!ae.length)return;let ye=k,H=y.length&&ae.some(Q=>Q.some(pe=>!y.some(we=>we.every(Ne=>Ne.n.dot(pe.clone().add(M))<=Ne.c+qe)))),j=y.length?y.flatMap(Q=>{let pe=ae;for(let we of Q)if(pe=G(pe,we),!pe.length)break;return pe}):ae;k=ye||!!H;for(let Q of j){let pe=Q.filter((Ne,tt)=>tt===0||Ne.distanceToSquared(Q[tt-1])>1e-18);if(pe.length<3)continue;let we=pe.map(U).sort().join("|");E.has(we)?E.delete(we):E.set(we,pe)}}for(let J=0;J<B.length-1;J++){let oe=B[J],X=B[J+1],re=(oe+X)/2;if(X-oe<qe)continue;let ue=[...new Set([-st,0,st,...w.flatMap(ae=>[ae.y0,ae.y1])])].sort((ae,ye)=>ae-ye);for(let ae=0;ae<ue.length-1;ae++){let ye=ue[ae],H=ue[ae+1],j=(ye+H)/2;j>0&&x.some(([Q,pe])=>re>Q&&re<pe)||w.some(Q=>re>Q.x0-qe&&re<Q.x1+qe&&j>Q.y0-qe&&j<Q.y1+qe)||z(oe,X,ye,H)}}let L=[],F=[];for(let J of E.values())for(let oe=1;oe<J.length-1;oe++){let X=J[0],re=J[oe],ue=J[oe+1];if(!(re.clone().sub(X).cross(ue.clone().sub(X)).lengthSq()<1e-20))for(let ae of[X,re,ue])L.push(ae.x,ae.y,ae.z),F.push(ae.dot(new D().setFromMatrixColumn(d,0))/2.5,ae.dot(new D().setFromMatrixColumn(d,1))/Vt)}if(!L.length)return null;let ie=new kt;return ie.setAttribute("position",new Tt(L,3)),ie.setAttribute("uv",new Tt(F,2)),ie.computeVertexNormals(),ie.userData.angledCut=k,ie}function f(m,d,M,S,y,C,A={},I=0,x=[],w=[]){let[B,E]=Qn(d,!1);if(E-B>2.5+qe)throw new Error("Combstruct stock exceeds 2500 mm");let k=JSON.stringify([m.name,A.wallId||"",A.kind||"standard",A.axis,A.index,d.layer,I,...[d.start,d.pixels,d.minCut||0,d.limit??d.pixels*Ze].map(H=>Math.round(H*1e7)/1e7)]),U=t.connectors===!1||s?[]:e[k]||[];d={...d,connectorCuts:U};let G=d.layer^I,z=C.clone().addScaledVector(M,d.start).addScaledVector(y,G===0?-it:0),L=new ft().makeBasis(M,S,y),F=x.length||w.length||(d.minCut||0)>qe||d.limit!==void 0||U.length,ie=F?u(d,L,z,x,w):h(d);if(!ie)return null;F||ie.applyMatrix4(L);let[J,oe]=Qn(d,!1),[X,re]=Qn(d),ue=!!ie.userData.angledCut||X>J+qe||re<oe-qe,ae=new Rt(ie,d.trim||ue?r:n);ae.position.copy(z),ae.castShadow=!0,ae.receiveShadow=!0;let ye={id:`board-${++a}`,mesh:ae,surface:m.name,kind:A.kind||"standard",axis:A.axis,index:A.index,layer:G,stockLayer:d.layer,start:d.start,stockLength:d.pixels*Ze,trim:d.trim||null,custom:ue,connectorKey:k,connectorCuts:U,stock:{...d},along:M.toArray(),normal:S.toArray(),thick:y.toArray(),frameOrigin:C.toArray(),clippingPlanes:x.map(H=>({n:H.n.toArray(),c:H.c})),actualStart:d.start+X,actualEnd:d.start+re,...A};return w.length&&(ye.clippingRegions=w.map(H=>H.map(j=>({n:j.n.toArray(),c:j.c})))),ae.name=ye.id,ae.userData={...ye,mesh:void 0},m.add(ae),o.push(ye),ae}function g(m,d,M,S,y,C,A,{phaseU:I=0,phaseV:x=0,holes:w=[],keepTop:B=!1,clearances:E=[0,0],startClearances:k=[0,0],verticalPlanes:U=[],verticalModules:G=M,kind:z="standard"}={}){for(let L=0;L<2;L++){let F=L===0?d:G,ie=L===0?M:d,J=L===0?y:C,oe=L===0?C:y,X=A.clone().multiplyScalar(L===0?1:-1),re=L===0?I:x;for(let ue=1;ue<ie;ue++)for(let ae of l(F)){let ye={...ae};B&&L===1&&ye.trim==="right"&&(ye.trim=null);let H=E[L]||0;H&&Math.abs(ye.start+ye.pixels*Ze-F*Ze)<qe&&(ye.limit=ye.pixels*Ze-(ye.trim==="right"?Vt:0)-H),k[L]&&ye.start===0&&(ye.minCut=(ye.trim==="left"?Vt:0)+k[L]);let j=ue*Ze+((ye.layer^re)===0?-it:0);for(let Q of p(ye,L,j,w))f(m,Q,J,X,oe,S.clone().addScaledVector(oe,ue*Ze),{kind:z,axis:L,index:ue},re,L===1?U:[])}}}return{lengthJoints:s,boards:o,segments:l,jointStock:(m,d=0,M=[],S=2,y)=>Gc(m,d,s?M.map(C=>({...C,fullEndSlot:C.side!=="seam"})):M,S,y),openStock:p,addBoard:f,grid:g}}function il(i,e,{x0:t,z0:n,nx:r,nz:s,top:o,kind:a,walls:l=[],holes:c=[],range:h,planes:p=[]}){let{jointStock:u,openStock:f,addBoard:g}=i;for(let v of[0,1]){let m=v===0?Ps:Lr,d=v===0?Lr:Ps,M=v===0?Zi:Zi.clone().negate(),S=v===0?r:s;for(let y=1;y<S;y++){let C=(v===0?t:n)+y*Ze,A=h?h(v,C):v===0?s:r;if(!A)continue;let I=new D(t,o-st,n).addScaledVector(d,y*Ze),x=v===0?n:t,w=l.filter(B=>B.axis===v&&(C>B.start+qe&&C<B.end-qe||B.endJambs?.some(E=>Math.abs(E-C)<qe))).map(B=>({at:Math.round((B.node-x)/Ze),side:B.side,layer:B.verticalPhase??1})).filter(B=>B.at>0&&B.at<A);for(let B of u(A,0,w,2,{left:!0,right:!0,extraTrim:i.lengthJoints}))for(let E of f(B,v,y*Ze+(B.layer===0?-it:0),c))g(e,E,m,M,d,I,{kind:a,axis:v,index:y},0,p)}}}function rd(i,{x0:e,x1:t,z0:n,z1:r,lengthJoints:s=!1}){let o=i.map(a=>{let l=a.axis??(Math.abs(a.b[0]-a.a[0])>qe?0:1),c=l===0?a.a[1]:a.a[0],h=l===0?n:e,p=l===0?r:t,u=!!a.exterior,f=u&&Math.abs(c-h)<Vt?"left":"right",g=u?f==="left"?h:p:h+Math.round((c+st-h)/Ze)*Ze;return{...a,axis:l,side:f,node:g,fixed:g+(f==="left"?1:-1)*(st+(s?it:0)),originalFixed:c,start:l===0?a.a[0]:a.a[1],end:l===0?a.b[0]:a.b[1],normal:(l===0?Ps:Lr).clone().multiplyScalar(u&&f==="right"?-1:1)}});for(let a of o){let l=a.axis===0?e:n,c=a.axis===0?t:r,h=p=>{if(Math.abs(p-l)<=Vt+.02)return l;if(Math.abs(p-c)<=Vt+.02)return c;let u=o.filter(f=>f.axis!==a.axis&&f.level===a.level&&a.originalFixed>=f.start-st-qe&&a.originalFixed<=f.end+st+qe&&Math.abs(p-f.originalFixed)<=Vt+.02).sort((f,g)=>Math.abs(p-f.originalFixed)-Math.abs(p-g.originalFixed))[0];return u?u.node:l+Math.round((p-l)/Ze)*Ze};if(a.start=h(a.start),a.end=h(a.end),a.end<=a.start+qe)throw Error("Empty native wall span: "+a.id)}return o}function sd(i,e,t,{target:n,base:r,modules:s,capAt:o=s,cap:a=!0,verticalEnds:l,planes:c=[],verticalGaps:h=[],continueFromBelow:p=()=>!1,targetForRow:u,holes:f=[],frameOpenings:g=!1,verticalTreatment:v}){let{jointStock:m,openStock:d,addBoard:M}=i,S=e.axis===0?Lr:Ps,y=e.axis===0?1:0,C=Math.round((e.end-e.start)/Ze),A=e.axis===0?new D(e.start,r,e.fixed):new D(e.fixed,r,e.start),I=t.filter(E=>E.axis!==e.axis&&E.level===e.level&&e.fixed>E.start-qe&&e.fixed<E.end+qe&&E.node>e.start+qe&&E.node<e.end-qe).map(E=>({at:Math.round((E.node-e.start)/Ze),side:E.side,layer:1^y})),x=e.axis===0?t.filter(E=>E.axis===1&&E.level===e.level&&(i.lengthJoints?e.node>E.start+qe&&e.node<E.end-qe:e.fixed>E.start+st&&e.fixed<E.end-st)&&E.node>e.start+qe&&E.node<e.end-qe):[];for(let E of x)I.push({at:Math.round((E.node-e.start)/Ze),side:"seam",layer:y});for(let E=1;E<o+(a?1:0);E++)for(let k of m(C,y,I,2,{left:!0,right:!0,...e.horizontalEnds,extraTrim:i.lengthJoints}))for(let U of d(k,0,E*Ze+((k.layer^y)===0?-it:0),f))M(u?.(E)||n,U,S,e.normal,Zi,A.clone().addScaledVector(Zi,E*Ze),{kind:e.exterior?"wall-horizontal":"partition-horizontal",wallId:e.id,axis:0,index:E},y,c);let w=E=>g&&f.some(k=>Math.abs(k.u0-(E*Ze+it))<qe||Math.abs(k.u1-(E*Ze-it))<qe),B=e.verticalPhase??1;if(B!==0&&B!==1)throw Error("Invalid upright ply phase: "+e.id);for(let E=0;E<=C;E++)for(let k of m(s,B,h,2,l)){if((E===0||E===C)&&!w(E)||x.some(z=>Math.abs(e.start+E*Ze-z.node)<qe))continue;let U={...k};e.exterior&&c.length&&U.trim==="right"&&U.start+U.pixels*Ze>=s*Ze-qe&&(U.trim=null),p(e.start+E*Ze)&&U.start===0&&U.layer===0&&(U.trim="left",i.lengthJoints&&(U.extraStartTrim=it));let G=v?.(U.layer^B,E);for(let z of d(U,1,E*Ze+((U.layer^B)===0?-it:0),f))M(n,z,Zi,e.normal.clone().negate(),S,A.clone().addScaledVector(S,E*Ze),{kind:e.exterior?"wall-vertical":"partition-vertical",wallId:e.id,axis:1,index:E,...G?{roofLap:G.role}:{}},B,G?.planes||c,G?.regions||[])}return{...e,origin:{x:A.x,y:r,z:A.z},holes:f,depth:Vt}}function od({pitch:i,spanHalf:e,ridgeUnderside:t,axis:n=0,clearance:r=.001}){let s=i*Math.PI/180,o=Math.cos(s),a=Math.sin(s),l=Math.tan(s),c=e-st-it,h=c-st,p=c+st,u=t+st/o,f=c/o-Vt/4*l,g=((f-Ze/2)%Ze+Ze)%Ze-Ze,v=f-Ze/2,m=f+Ze/2,d=(S,y)=>({n:S,c:y});function M(S){let y=new D().setComponent(n,S),C=new D(0,1,0),A=y.clone().multiplyScalar(o).addScaledVector(C,-a),I=y.clone().multiplyScalar(a).addScaledVector(C,o),x=z=>z-a*u,w=z=>z+o*u,B=d(I.clone(),w(0)),E=d(I.clone().negate(),-w(0)),k=[[B],[E,d(A.clone().negate(),-x(v+it+r)),d(A.clone(),x(m-it-r))]],U=d(I.clone(),w(-st)),G=d(I.clone(),w(st));return{sign:S,q:y,along:A,normal:I,origin:new D(0,u,0).addScaledVector(A,g),wall(z){return{planes:[z===1?G:U],regions:z===1?k:[],role:z===1?"long-lap":"short-bearing"}},roof(z){return z===0?[{planes:[],regions:[],role:"continuous"}]:[{planes:[d(y.clone(),h)],regions:[],role:"inner-ending"},{planes:[d(y.clone().negate(),-p)],regions:[[B],[E,d(A.clone().negate(),-x(m-it))]],role:"eave-ending"}]},slotPlanes(z,L=0){let F=z==="inner"?v:m;return[d(A.clone(),x(F+it)),d(A.clone().negate(),-x(F-it)),d(I.clone().negate(),-w(0)),d(I.clone(),w(st+L))]}}}return{pitch:i,clearance:r,phaseOrigin:g,wallCenter:c,inner:h,outer:p,centerY:u,toothCenter:f,slotInner:v,slotOuter:m,axis:n,side:M,slabBeveled:!1}}function j_(i,e){return i.flatMap(t=>e.map((n,r)=>[...t,...e.slice(0,r),{n:n.n.clone().negate(),c:-n.c}]))}function ad(i=[],e=[]){return i.length&&e.length?i.flatMap(t=>e.map(n=>[...t,...n])):i.length?i:e}function ld({pitch:i,centerY:e,phaseOrigin:t,axis:n=0}){let r=i*Math.PI/180,s=Math.cos(r),o=Math.sin(r),a=st*Math.max(Math.tan(r),1/Math.tan(r)),l=Math.max(0,Math.ceil((t+a+it)/Ze)),c=t-l*Ze,h=g=>{let v=new D().setComponent(n,g),m=new D(0,1,0);return{q:v,along:v.clone().multiplyScalar(s).addScaledVector(m,-o),normal:v.clone().multiplyScalar(o).addScaledVector(m,s)}},p=[];for(let g=1;t+g*Ze-it<a;g++)p.push(t+g*Ze);function u(g,v,m=0){let d=h(g),M=v-o*e;return[{n:d.along,c:M+it},{n:d.along.clone().negate(),c:-M+it},{n:d.normal.clone().negate(),c:-s*e},{n:d.normal,c:s*e+st+m},{n:d.q.clone().negate(),c:0}]}function f(g,v){let m=v===(g===-1?0:1),M=[{n:h(-g).normal,c:s*e+(m?st:-st)}],S=[];if(m)for(let y of p)S=j_(S.length?S:[[]],u(-g,y,1));return{planes:M,regions:S,role:m?"long":"short"}}return{pitch:i,centerY:e,axis:n,phaseOrigin:t,reach:a,headModules:l,rafterStart:c,nearSlots:p,frame:h,treatment:f,slotEnvelope:u}}var ot=2.5/6,Pt=.24,We=.018,ei=Pt/2,bi=1e-7,Is=new D(1,0,0),cd=new D(0,1,0),Ds=new D(0,0,1);function hd(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=t?7:8,r=i.wood||new $n({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new ln;o.name="Combstruct 90";let a=P=>{let W=new ln;return W.name=P,o.add(W),W},l=["rear","left","front","right"],c={floor:a("Pod\u0142oga i ci\u0105g\u0142y taras"),groundWalls:l.map(P=>a(`Parter \u2014 ${P}`)),upperWalls:l.map(P=>a(`Poddasze \u2014 ${P}`)),groundPartitions:a("\u015Aciany wewn\u0119trzne parteru"),upperPartitions:a("\u015Aciany wewn\u0119trzne poddasza"),slab:a("Strop, balkon i zadaszenia"),ceiling:a("Sufit poddasza"),roof:a("Dach 45\xB0"),gables:[a("Szczyt lewy"),a("Szczyt prawy")],canopy:a("Obramowanie zadaszenia"),balconySupports:a("Podparcie balkonu"),stairs:a("Schody")},{envelope:h}=wt,{width:p,depth:u,x0:f,x1:g,z0:v,z1:m}=h,d=t?{...wt.levels,bearing:n*ot,slabBottom:n*ot+We,upper:n*ot+We+Pt,roofEave:wt.levels.roofEave+Pt-ot,roofRidgeUnderside:wt.levels.roofRidgeUnderside+Pt-ot}:wt.levels,M=0,S=t?n*ot:d.slabBottom,y=S+8*ot+(t?We:-Pt),C=y+Pt,A=id(i,ju,e),{boards:I,segments:x,openStock:w,addBoard:B}=A,E=[],k=[],U={ground:[],upper:[],partitions:[],roof:[]},G={...h,floorBottom:0,floorTop:Pt,wallTop:d.bearing,clearHeight:d.slabBottom-Pt,slabBottom:d.slabBottom,slabTop:d.upper,upperFloorY:d.upper,storeyHeight:d.upper-Pt,ceilingBottom:y,ceilingTop:C,roofEaveY:d.roofEave,roofUnderRidgeY:d.roofRidgeUnderside,roofRidgeY:d.roofRidgeUnderside+Pt*Math.SQRT2,roofOverhang:h.roofEaveOverhang,slabShift:{x:M,z:M},upperCeilingShift:{x:2*M,z:2*M},usableConceptArea:wt.facts.usableArea,groundArea:wt.facts.groundArea,upperArea:wt.facts.upperArea,upperFloorArea:wt.facts.upperFloorArea,structuralFootprintArea:p*u,terraceArea:wt.facts.terraceArea,balconyArea:wt.facts.balconyArea,boardDepth:Pt,boardThickness:We,constructionOnly:!0},z=[{n:new D(0,1,1),c:d.roofRidgeUnderside},{n:new D(0,1,-1),c:d.roofRidgeUnderside}],L=t?od({pitch:45,spanHalf:u/2,ridgeUnderside:d.roofRidgeUnderside,axis:2}):null;L&&(G.roofWallJoint={strategy:"between-slots",clearance:L.clearance,phaseOrigin:L.phaseOrigin,wallCenter:L.wallCenter,slotInner:L.slotInner,slotOuter:L.slotOuter,slabBeveled:!1,knee:!0});let F=[...["rear","front"].map((P,W)=>({id:`balcony-support-${P}`,level:"ground",axis:1,a:[f+28*ot-ei,W?m-2*ot:v],b:[f+28*ot-ei,W?m:v+2*ot],exterior:!1,support:!0,holes:[]}))],ie=rd([...wt.exteriorWalls.map(P=>({...P,exterior:!0})),...wt.partitions,...F],{...h,lengthJoints:t});for(let P of ie)P.support&&(P.horizontalEnds={left:!1,right:!1}),(P.id==="upper-hall-notch-west"||P.id==="upper-hall-notch-north")&&(P.horizontalEnds={left:!1,right:!0}),(P.id==="upper-hall-notch-west"||P.id==="upper-hall-notch-north")&&(P.verticalPhase=0);for(let P of ie)P.endJambs=P.holes.flatMap(W=>{let Y=P.a[P.axis]+W.at-We,Me=Y+W.width+2*We;return[Y,Me].filter(le=>Math.abs(le-P.start)<bi||Math.abs(le-P.end)<bi)});let J=ie.filter(P=>P.level==="ground"),oe=ie.filter(P=>P.level==="upper");il(A,c.floor,{x0:f,z0:v,nx:30,nz:16,top:Pt,kind:"floor",walls:J});let X=new D(f,d.slabBottom+ei,v-2*ot),re={u0:wt.stair.opening.z0-X.z,u1:wt.stair.opening.z1-X.z,v0:wt.stair.opening.x0-X.x,v1:wt.stair.opening.x1-X.x};il(A,c.slab,{x0:f,z0:v-2*ot,nx:28,nz:20,top:d.upper,kind:"slab",walls:[...J,...oe],holes:[re]}),il(A,c.ceiling,{x0:f,z0:v,nx:23,nz:16,top:C,kind:"ceiling",walls:oe,planes:z});let ue=Array.from({length:22},(P,W)=>f+(W+1)*ot),ae=[];for(let P of ie){let W=P.level==="upper",Y=W?S:0,Me=P.exterior&&W?Math.ceil((d.roofRidgeUnderside-Y)/ot)+1:t?W?9:n+1:8,le;if(P.support)le=new ln,le.name=P.id,c.balconySupports.add(le);else if(P.exterior){let Ee=l.indexOf(P.id.replace(W?"upper-":"ground-",""));le=(W?c.upperWalls:c.groundWalls)[Ee]}else le=new ln,le.name=P.id,(W?c.upperPartitions:c.groundPartitions).add(le);let Ie=P.holes.map(Ee=>{let ge={...Ee};if(t&&W){let{sill:_e,lintel:Pe}=ge.moduleBounds;ge.bottom=Y+(_e===null?Pt+We:_e*ot+We),ge.height=Y+Pe*ot-We-ge.bottom}let be=(P.axis===0?P.a[0]:P.a[1])+ge.at,Ye=be-P.start,N=Ye+ge.width,xe=P.axis===0?{x0:be,x1:be+ge.width,z0:P.fixed-ei,z1:P.fixed+ei,y0:ge.bottom,y1:ge.bottom+ge.height}:{x0:P.fixed-ei,x1:P.fixed+ei,z0:be,z1:be+ge.width,y0:ge.bottom,y1:ge.bottom+ge.height};return{...ge,u0:Ye,u1:N,v0:ge.bottom-Y,v1:ge.bottom+ge.height-Y,world:xe}});U[P.exterior?P.level:"partitions"].push(...Ie);let De=Ee=>W&&(P.exterior||J.some(ge=>!ge.support&&ge.axis===P.axis&&Math.abs(ge.fixed-P.fixed)<bi&&Ee>ge.start+bi&&Ee<ge.end-bi)),ee=L&&W&&P.exterior&&P.axis===0?Ee=>L.side(P.side==="left"?-1:1).wall(Ee):void 0,he=sd(A,P,ie,{target:le,base:Y,modules:Me,capAt:W&&P.exterior?Me:W?8:n,cap:t||!!(W&&P.exterior),holes:Ie,frameOpenings:!0,planes:t?[...W?z:[],...W&&P.exterior?[]:[{n:cd,c:W?C:d.upper}]]:W?z:[],verticalEnds:t?{left:!0,right:!1,extraTrim:W}:void 0,verticalGaps:t?[{at:W?8:n,side:"left",layer:1^(P.verticalPhase??1)}]:W&&P.exterior?[{at:8,side:"right",layer:0}]:[],continueFromBelow:De,verticalTreatment:ee});E.push(he)}let ye=Math.PI/4,H=Math.sin(ye),j=Math.cos(ye),Q=f-2*ot,pe=27,we=L?.phaseOrigin??-ot/2,Ne=u/2+ot,tt=Math.ceil((Ne/j-we)/ot)+1,Ge=d.roofRidgeUnderside+ei/j,ne=t?ld({pitch:45,centerY:Ge,phaseOrigin:we,axis:2}):null;for(let P of[-1,1]){let W=new D(0,-H,P*j),Y=new D(0,j,P*H),Me=new D(Q,Ge,0).addScaledVector(W,we),le=new ln;le.name=P===-1?"roof-rear":"roof-front",c.roof.add(le);let Ie=P===-1?[{n:Ds.clone(),c:0},{n:Ds.clone().negate(),c:Ne}]:[{n:Ds.clone().negate(),c:0},{n:Ds.clone(),c:Ne}],De=P===-1?[7,13,17].map((ee,he)=>({id:`rooflight-${he+1}`,kind:"rooflight",u0:6*ot+We,u1:8*ot-We,v0:(ee-1)*ot+We,v1:(ee+1)*ot-We})):[];U.roof.push(...De.map(ee=>({...ee,roofSide:P,frame:{origin:Me.toArray(),along:W.toArray(),across:Is.toArray()}})));for(let ee=1;ee<pe;ee++){let he=Q+ee*ot;P===-1&&ae.push(he);for(let Ee of x(ne?Math.ceil((Ne/j+ei*H/j+We-ne.rafterStart)/ot):tt)){let ge={...Ee,start:Ee.start-(ne?.headModules||0)*ot,trim:null},be=P===-1?0:1,Ye=L&&he>f+bi&&he<g-bi,N=Ye?L.side(P).roof(ge.layer^be):[{planes:[],regions:[]}],xe=ne?.treatment(P,ge.layer^be);for(let _e of w(ge,0,ee*ot+((ge.layer^be)===0?-We:0),De))for(let Pe of N)B(le,_e,W,Y,Is,Me.clone().addScaledVector(Is,ee*ot),{kind:"roof-slope",axis:0,index:ee,roofSide:P,...Ye?{roofLap:Pe.role}:{},...xe?{ridgeLap:xe.role}:{}},be,[...xe?[Ie[1],...xe.planes]:Ie,...Pe.planes],ad(Pe.regions,xe?.regions))}}for(let ee=1;ee<tt;ee++)for(let he of x(pe))for(let Ee of w(he,1,ee*ot+(he.layer===0?-We:0),De))B(le,Ee,Is,Y.clone().negate(),W,Me.clone().addScaledVector(W,ee*ot),{kind:"roof-cross",axis:1,index:ee,roofSide:P},0,Ie)}ne&&(G.ridgeJoint={strategy:"alternating-ply-lap",pitch:ne.pitch,headModules:ne.headModules,nearSlots:ne.nearSlots,roofEnvelopePreserved:!0});let $=t?{...wt.stair,riser:(d.upper-Pt)/16,upperY:d.upper}:wt.stair,se=$.riser,Se=i.stair||r;function R(P,W,Y,Me,le,Ie,De){let ee=new Rt(new ui(le,Ie,De),Se);return ee.name=P,ee.position.set(W+le/2,Y-Ie/2,Me+De/2),ee.castShadow=!0,ee.receiveShadow=!0,c.stairs.add(ee),ee}for(let P=0;P<7;P++){let W=$.floorY+(P+1)*se,Y=$.z0+P*$.tread;R(`Stopie\u0144 dolny ${P+1}`,$.x0+2*We,W,Y,.9,2*We,$.tread),R(`Podstopnica dolna ${P+1}`,$.x0+2*We,W-2*We,Y,.9,se-2*We,We);let Me=$.z0+(6-P)*$.tread,le=$.floorY+(9+P)*se;R(`Stopie\u0144 g\xF3rny ${P+1}`,$.x1-.9-2*We,le,Me,.9,2*We,$.tread),R(`Podstopnica g\xF3rna ${P+1}`,$.x1-.9-2*We,le-2*We,Me+$.tread-We,.9,se-2*We,We)}R("Spocznik",$.x0,$.floorY+8*se,$.z0+7*$.tread,$.x1-$.x0,2*We,.9),R("Podstopnica spocznika",$.x0+2*We,Pt+8*se-2*We,$.z0+7*$.tread-We,.9,se-2*We,We),R("Podstopnica wyj\u015Bcia",$.x1-.9-2*We,d.upper-2*We,$.z0,.9,se-2*We,We);function ze(P,W,Y,Me,le,Ie){let De=new di;De.moveTo(Y,Me-.1),De.lineTo(le,Ie-.1),De.lineTo(le,Ie+.1),De.lineTo(Y,Me+.1),De.closePath();let ee=new Oi(De,{depth:2*We,bevelEnabled:!1,curveSegments:1});ee.applyMatrix4(new ft().makeBasis(Ds,cd,Is.clone().negate())),ee.translate(W+2*We,0,0);let he=new Rt(ee,Se);he.name=P,he.castShadow=!0,he.receiveShadow=!0,c.stairs.add(he)}let Ae=$.z0+7*$.tread,Ve=Pt+8*se;for(let P of[$.x0,$.x0+.9+2*We])ze("Policzek dolnego biegu",P,$.z0,Pt+.1,Ae,Ve-2*We-.1);for(let P of[$.x1-.9-4*We,$.x1-2*We])ze("Policzek g\xF3rnego biegu",P,Ae,Ve-2*We-.1,$.z0,d.upper-2*We-.1);let ve=[],T=(P,W,Y)=>ve.push({part:Y,y:P,z:W,clearance:Math.min(y,d.roofRidgeUnderside-Math.abs(W))-P});for(let P=0;P<7;P++)for(let W of[0,.5,1])T(Pt+(P+1)*se,$.z0+(P+W)*$.tread,"lower-flight"),T(Pt+(9+P)*se,$.z0+(6-P+W)*$.tread,"upper-flight");for(let P of[0,.5,1])T(Ve,Ae+.9*P,"landing");T(d.upper,$.z0-.1,"upper-arrival"),G.stair={...$,outerFlightWidth:.9+4*We,centreGap:$.x1-$.x0-2*(.9+4*We),clearanceToStructuralEnvelope:Math.min(...ve.map(P=>P.clearance)),clearanceStations:ve},G.floorBounds={x0:f,x1:g+7*ot,z0:v,z1:m},G.slabBounds={x0:X.x,x1:X.x+28*ot,z0:X.z,z1:X.z+20*ot};let _=wt.rooms.map(P=>({...P,polygon:P.polygon.map(([W,Y])=>({x:W,z:Y}))})),O={jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,module:ot,stockMaxLength:2.5,terminalDifference:Pt,pairWidth:2*We,slabPlanShift:0,junctionsCoplanar:!0,wallAxes:ue,roofAxes:ae,roofAxesAligned:ue.every(P=>ae.some(W=>Math.abs(W-P)<bi)),floorTerraceContinuous:!0,slabBalconyContinuous:!0,shortBearingDirection:"Z",shortBearingSlots:"up",exteriorVerticalSlots:"outward",connectorBoards:I.filter(P=>P.connectorCuts.length).length,roofPitchDegrees:45,ridgeInteriorAngle:90,rooflightCount:3,loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:c,boards:I,dimensions:G,wallPanels:E,openings:U,rooms:_,joints:k,validation:O,layout:wt}}var Q_=document.getElementById("comb-90-model"),sl=i=>Q_.querySelector(i),rl=sl(".model-stage"),Ls=sl(".model-loading");try{let k=function(){B||(B=requestAnimationFrame(U))},U=function(){B=0,r.update(),t.render(i,e)},G=function(X,re,ue=1.04){let ae=X.getCenter(new D),ye=re.clone().normalize(),H=new D(0,1,0).cross(ye).normalize(),j=ye.clone().cross(H).normalize(),Q=Math.tan(Ar.degToRad(e.fov/2)),pe=Q*e.aspect,we=0;for(let tt of[X.min.x,X.max.x])for(let Ge of[X.min.y,X.max.y])for(let ne of[X.min.z,X.max.z]){let $=new D(tt,Ge,ne).sub(ae);we=Math.max(we,Math.abs($.dot(H))/pe+$.dot(ye),Math.abs($.dot(j))/Q+$.dot(ye))}let Ne=r.enableDamping;r.enableDamping=!1,r.update(),r.target.copy(ae),e.position.copy(ae).addScaledVector(ye,Math.max(we*ue,1)),e.updateProjectionMatrix(),r.minDistance=.3,r.maxDistance=60,r.update(),r.enableDamping=Ne,k()},z=function(){let X=new Ln;return d.root.updateMatrixWorld(!0),d.root.traverseVisible(re=>{if(!re.isMesh)return;re.geometry.computeBoundingBox();let ue=re.geometry.boundingBox.clone().applyMatrix4(re.matrixWorld);E&&(ue.min.y=Math.max(ue.min.y,E[0]),ue.max.y=Math.min(ue.max.y,E[1])),ue.isEmpty()||X.union(ue)}),X},L=function(){let X=r.enableDamping;r.enableDamping=!1;for(let re=0;re<3;re++){r.update(),e.updateMatrixWorld();let ue=1/0,ae=-1/0,ye=1/0,H=-1/0,j=new D;d.root.traverseVisible(ne=>{if(!ne.isMesh)return;let $=ne.geometry.getAttribute("position");for(let se=0;se<$.count;se++)j.fromBufferAttribute($,se).applyMatrix4(ne.matrixWorld),!(E&&(j.y<E[0]||j.y>E[1]))&&(j.project(e),ue=Math.min(ue,j.x),ae=Math.max(ae,j.x),ye=Math.min(ye,j.y),H=Math.max(H,j.y))});let Q=e.position.distanceTo(r.target),pe=Math.tan(Ar.degToRad(e.fov/2)),we=new D().setFromMatrixColumn(e.matrixWorld,0),Ne=new D().setFromMatrixColumn(e.matrixWorld,1),tt=we.multiplyScalar((ue+ae)/2*Q*pe*e.aspect).add(Ne.multiplyScalar((ye+H)/2*Q*pe));r.target.add(tt),e.position.add(tt);let Ge=Math.max((ae-ue)/1.82,(H-ye)/1.82);e.position.sub(r.target).multiplyScalar(Ge).add(r.target)}r.update(),r.enableDamping=X},F=function(){let X=["ground","attic","floor","slab","ceiling","roof"].includes(w)?14:8,re=w==="roof"?new D(8,24,-8):new D(w==="rear"?14:11,X,w==="rear"?-10:13);G(z(),re),L()},ie=function(X,re){A(X).forEach(ue=>ue.visible=re)},J=function(X){w=X,E=null,t.clippingPlanes=[];for(let ae of I)ae.visible=!0;let re=y.slabTop??y.upperFloorTop??3.1746666666666665,ue=y.slabBottom??2.9346666666666668;if(X==="ground"){for(let ae of["slab","ceiling","roof","gables","canopy","balconySupports"])ie(M[ae],!1);for(let ae of["groundWalls","upperWalls"])A(M[ae]).slice(2).forEach(ye=>ye.visible=!1);ie(M.upperPartitions,!1),E=[-.05,ue-.001],t.clippingPlanes=[new Xt(new D(0,-1,0),E[1])]}if(X==="attic"){for(let ae of["floor","ceiling","roof","canopy","balconySupports"])ie(M[ae],!1);Array.isArray(M.gables)&&ie(M.gables[1],!1);for(let ae of["groundWalls","upperWalls"])A(M[ae]).slice(2).forEach(ye=>ye.visible=!1);ie(M.groundPartitions,!1),E=[ue-.002,re+2.45],t.clippingPlanes=[new Xt(new D(0,1,0),-E[0]),new Xt(new D(0,-1,0),E[1])]}if(["floor","slab","ceiling","roof"].includes(X)){for(let ae of I)ae.visible=!1;ie(M[X],!0)}sl("[data-view]").value=X,F(),k()},oe=function(){let X=Math.max(1,rl.clientWidth),re=Math.max(1,rl.clientHeight);t.setSize(X,re,!1),e.aspect=X/re,e.updateProjectionMatrix(),F()};ex=k,tx=U,nx=G,ix=z,rx=L,sx=F,ox=ie,ax=J,lx=oe;let i=new Jr;i.background=null;let e=new qt(35,1,.01,180),t=new Ya({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio||1,1.8)),t.toneMapping=vs,t.toneMappingExposure=1.15,t.shadowMap.enabled=!0,t.shadowMap.type=Qo,t.domElement.setAttribute("aria-label","Combstruct 90. Konstrukcja z desek Combstruct; przeci\u0105gnij, aby obr\xF3ci\u0107."),rl.append(t.domElement);let n=matchMedia("(prefers-reduced-motion: reduce)"),r=new Ka(e,t.domElement);r.enableDamping=!n.matches,r.dampingFactor=.09,r.rotateSpeed=.65,r.minPolarAngle=.03,r.maxPolarAngle=Math.PI*.53;let s=new ms("#f7fbff","#a6b4bf",2.1);i.add(s);let o=new br("#fff0d6",3);o.position.set(-6,11,9),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-16,o.shadow.camera.right=16,o.shadow.camera.top=16,o.shadow.camera.bottom=-16,o.shadow.camera.near=.1,o.shadow.camera.far=40,o.shadow.normalBias=.018,i.add(o);let a=new br("#cadfff",1.2);a.position.set(7,5,-7),i.add(a);let l=new Rt(new Bi(150,150),new ds({color:"#4d6375",opacity:.17}));l.rotation.x=-Math.PI/2,l.position.y=-.012,l.receiveShadow=!0,i.add(l);let c=document.createElement("canvas");c.width=1024,c.height=128;let h=c.getContext("2d");h.fillStyle="#c7a46f",h.fillRect(0,0,1024,128);let p=142,u=()=>(p=1664525*p+1013904223>>>0,p/4294967296);for(let X=0;X<3500;X++){let re=u()*1024,ue=u()*128,ae=4+u()*26;h.save(),h.translate(re,ue),h.rotate((u()-.5)*2.5),h.fillStyle=`rgba(${u()>.5?"249,226,179":"107,79,43"},.12)`,h.fillRect(-ae/2,-1,ae,1+u()*3),h.restore()}let f=new ts(c);f.colorSpace=Jt,f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let g=new $n({map:f,roughness:.78,side:Qt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),v=g.clone();v.color.set("#cebda4");let m=new xr({color:"#705a3c",transparent:!0,opacity:.5}),d=hd({wood:g,end:v,edge:m});i.add(d.root),i.updateMatrixWorld(!0);let M=d.groups,S=d.boards||[],y=d.dimensions||{},C=new Map;for(let X of S)X.mesh&&(X.mesh.updateWorldMatrix(!0,!1),C.set(X.mesh,X.mesh.matrixWorld.clone()));let A=X=>(Array.isArray(X)?X:[X]).filter(re=>re?.isObject3D),I=[...new Set(Object.values(M).flatMap(A))],x=[];for(let X of I){X.updateWorldMatrix(!0,!0);let re=X.matrixWorld.clone().invert(),ue=[];if(X.traverse(H=>{H.isMesh&&!H.userData.viewerBatch&&ue.push(H)}),!ue.length)continue;let ae=new Map,ye=[];for(let H of ue){if(H.userData.viewerHidden)continue;let j=re.clone().multiply(H.matrixWorld),Q=H.geometry.index?H.geometry.toNonIndexed():H.geometry.clone();Q.applyMatrix4(j);let pe=Array.isArray(H.material)?H.material[0]:H.material;ae.has(pe)||ae.set(pe,[]),ae.get(pe).push(Q),ye.push(new is(H.geometry,30).applyMatrix4(j)),H.visible=!1,H.userData.viewerHidden=!0,x.push(H)}for(let[H,j]of ae){let Q=zc(j,!1);if(j.forEach(we=>we.dispose()),!Q)throw Error("Nie uda\u0142o si\u0119 po\u0142\u0105czy\u0107 geometrii podgl\u0105du.");let pe=new Rt(Q,H);pe.castShadow=!0,pe.receiveShadow=!0,pe.userData.viewerBatch=!0,X.add(pe)}if(ye.length){let H=zc(ye,!1);if(ye.forEach(j=>j.dispose()),H){let j=new Qr(H,m);j.userData.viewerBatch=!0,X.add(j)}}}let w="structure",B=0,E=null;r.addEventListener("change",k),n.addEventListener("change",X=>{r.enableDamping=!X.matches,k()}),new ResizeObserver(oe).observe(rl),sl("[data-view]").addEventListener("change",X=>J(X.target.value)),t.domElement.addEventListener("webglcontextlost",X=>{X.preventDefault(),Ls.hidden=!1,Ls.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C, aby wr\xF3ci\u0107 do modelu."}),window.combstruct90={model:d,setView:J,setMode:J,reset:F,getState:()=>({ready:!0,view:w,boardCount:S.length,dimensions:y,rooms:d.rooms,drawCalls:t.info.render.calls,triangles:t.info.render.triangles,validation:d.validation||null})},window.addEventListener("message",X=>{X.source===window.parent&&X.data?.type==="combstruct:visibility"&&X.data.visible&&oe()}),Ls.hidden=!0,oe(),J("structure"),U()}catch(i){console.error(i),Ls.textContent="Nie uda\u0142o si\u0119 uruchomi\u0107 modelu 3D.",Ls.setAttribute("role","alert"),window.combstructError=String(i)}var ex,tx,nx,ix,rx,sx,ox,ax,lx;})();
