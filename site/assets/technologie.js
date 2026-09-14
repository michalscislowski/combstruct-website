"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kh=0,sd=1,Qh=2;var vo=1,eu=2,bs=3,vi=0,fn=1,It=2,li=0,hr=1,od=2,ad=3,ld=4,tu=5;var zi=100,nu=101,iu=102,ru=103,su=104,ou=200,au=201,lu=202,cu=203,Ma=204,Sa=205,du=206,hu=207,uu=208,fu=209,pu=210,mu=211,gu=212,bu=213,_u=214,wa=0,Ea=1,Ta=2,ur=3,Aa=4,Ra=5,Ca=6,Pa=7,cd=0,xu=1,yu=2,Vn=0,dd=1,hd=2,ud=3,Mo=4,fd=5,pd=6,md=7;var gd=300,Yi=301,wr=302,ll=303,cl=304,So=306,Ia=1e3,ti=1001,Da=1002,Gt=1003,vu=1004;var wo=1005;var Yt=1006,dl=1007;var ji=1008;var gn=1009,bd=1010,_d=1011,_s=1012,hl=1013,Hn=1014,Gn=1015,ci=1016,ul=1017,fl=1018,xs=1020,xd=35902,yd=35899,vd=1021,Md=1022,Pn=1023,ii=1026,Zi=1027,Sd=1028,pl=1029,Er=1030,ml=1031;var gl=1033,Eo=33776,To=33777,Ao=33778,Ro=33779,bl=35840,_l=35841,xl=35842,yl=35843,vl=36196,Ml=37492,Sl=37496,wl=37488,El=37489,Tl=37490,Al=37491,Rl=37808,Cl=37809,Pl=37810,Il=37811,Dl=37812,Ll=37813,Nl=37814,Ul=37815,Fl=37816,zl=37817,Ol=37818,Bl=37819,kl=37820,Vl=37821,Hl=36492,Gl=36494,Wl=36495,Xl=36283,ql=36284,Yl=36285,jl=36286;var Ys=2300,La=2301,va=2302,Yc=2303,jc=2400,Zc=2401,Jc=2402;var Mu=3200;var wd=0,Su=1,Si="",Ut="srgb",fr="srgb-linear",js="linear",pt="srgb";var cr=7680;var $c=519,wu=512,Eu=513,Tu=514,Zl=515,Au=516,Ru=517,Jl=518,Cu=519,Na=35044;var Ed="300 es",Bn=2e3,is=2001;function jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){let i=Zs("canvas");return i.style.display="block",i}var xh={},rs=null;function Js(...i){let e="THREE."+i.shift();rs?rs("log",e,...i):console.log(e,...i)}function Iu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Iu(i);let e="THREE."+i.shift();if(rs)rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Iu(i);let e="THREE."+i.shift();if(rs)rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $s(...i){let e=i.join(" ");e in xh||(xh[e]=!0,Ye(...i))}function Du(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Lu={[wa]:Ea,[Ta]:Ca,[Aa]:Pa,[ur]:Ra,[Ea]:wa,[Ca]:Ta,[Pa]:Aa,[Ra]:ur},ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=1234567,ts=Math.PI/180,ss=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Td(i,e){return(i%e+e)%e}function Jf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function $f(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function Kf(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function Qf(i,e=1){return e-Math.abs(Td(i,e*2)-e)}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ip(i,e){return i+Math.random()*(e-i)}function rp(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(yh=i);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function op(i){return i*ts}function ap(i){return i*ss}function lp(i){return(i&i-1)===0&&i!==0}function cp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*d,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wi={DEG2RAD:ts,RAD2DEG:ss,generateUUID:ni,clamp:it,euclideanModulo:Td,mapLinear:Jf,inverseLerp:$f,lerp:Ws,damp:Kf,pingpong:Qf,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:rp,seededRandom:sp,degToRad:op,radToDeg:ap,isPowerOfTwo:lp,ceilPowerOfTwo:cp,floorPowerOfTwo:dp,setQuaternionFromProperEuler:hp,normalize:mt,denormalize:On},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(u!==y||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);p=Math.sin(p*S)/M,a=Math.sin(a*S)/M,l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+y*a}else{l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+y*a;let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new D,vh=new rn,et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],y=r[0],m=r[3],p=r[6],S=r[1],M=r[4],v=r[7],R=r[2],E=r[5],I=r[8];return s[0]=o*y+a*S+l*R,s[3]=o*m+a*M+l*E,s[6]=o*p+a*v+l*I,s[1]=c*y+d*S+u*R,s[4]=c*m+d*M+u*E,s[7]=c*p+d*v+u*I,s[2]=h*y+f*S+g*R,s[5]=h*m+f*M+g*E,s[8]=h*p+f*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,f=c*s-o*l,g=t*u+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(r*c-d*n)*y,e[2]=(a*n-r*o)*y,e[3]=h*y,e[4]=(d*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xc=new et,Mh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=ns(r.r),r.g=ns(r.g),r.b=ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?js:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:js,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}var ct=up();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Br,Ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Zs("canvas")),Br.width=e.width,Br.height=e.height;let r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fp=0,os=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yc(r[o].image)):s.push(yc(r[o]))}else s=yc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function yc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var pp=0,vc=new D,hn=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,r=ti,s=Yt,o=ji,a=Pn,l=gn,c=i.DEFAULT_ANISOTROPY,d=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ni(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=gd;hn.DEFAULT_ANISOTROPY=1;var Tt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,R=(p+1)/2,E=(d+h)/4,I=(u+y)/4,b=(g+m)/4;return M>v&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=I/n):v>R?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=b/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=I/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(h-d)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new os(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ks=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var at=class i{constructor(e,t,n,r,s,o,a,l,c,d,u,h,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,f,g,y,m)}set(e,t,n,r,s,o,a,l,c,d,u,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,f=o*u,g=a*d,y=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,y=c*u;t[0]=h+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,y=c*u;t[0]=h-y*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,f=o*u,g=a*d,y=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=y-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-y*u}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mp,e,gp)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(n,xn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(n,xn)),Ii.normalize(),Go.crossVectors(xn,Ii),r[0]=Ii.x,r[4]=Go.x,r[8]=xn.x,r[1]=Ii.y,r[5]=Go.y,r[9]=xn.y,r[2]=Ii.z,r[6]=Go.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],M=n[7],v=n[11],R=n[15],E=r[0],I=r[4],b=r[8],x=r[12],L=r[1],P=r[5],N=r[9],z=r[13],k=r[2],V=r[6],A=r[10],F=r[14],O=r[3],G=r[7],le=r[11],he=r[15];return s[0]=o*E+a*L+l*k+c*O,s[4]=o*I+a*P+l*V+c*G,s[8]=o*b+a*N+l*A+c*le,s[12]=o*x+a*z+l*F+c*he,s[1]=d*E+u*L+h*k+f*O,s[5]=d*I+u*P+h*V+f*G,s[9]=d*b+u*N+h*A+f*le,s[13]=d*x+u*z+h*F+f*he,s[2]=g*E+y*L+m*k+p*O,s[6]=g*I+y*P+m*V+p*G,s[10]=g*b+y*N+m*A+p*le,s[14]=g*x+y*z+m*F+p*he,s[3]=S*E+M*L+v*k+R*O,s[7]=S*I+M*P+v*V+R*G,s[11]=S*b+M*N+v*A+R*le,s[15]=S*x+M*z+v*F+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=l*f-c*h,M=a*f-c*u,v=a*h-l*u,R=o*f-c*d,E=o*h-l*d,I=o*u-a*d;return t*(y*S-m*M+p*v)-n*(g*S-m*R+p*E)+r*(g*M-y*R+p*I)-s*(g*v-y*E+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*a-n*o,M=t*l-r*o,v=t*c-s*o,R=n*l-r*a,E=n*c-s*a,I=r*c-s*l,b=d*y-u*g,x=d*m-h*g,L=d*p-f*g,P=u*m-h*y,N=u*p-f*y,z=h*p-f*m,k=S*z-M*N+v*P+R*L-E*x+I*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/k;return e[0]=(a*z-l*N+c*P)*V,e[1]=(r*N-n*z-s*P)*V,e[2]=(y*I-m*E+p*R)*V,e[3]=(h*E-u*I-f*R)*V,e[4]=(l*L-o*z-c*x)*V,e[5]=(t*z-r*L+s*x)*V,e[6]=(m*v-g*I-p*M)*V,e[7]=(d*I-h*v+f*M)*V,e[8]=(o*N-a*L+c*b)*V,e[9]=(n*L-t*N-s*b)*V,e[10]=(g*E-y*v+p*S)*V,e[11]=(u*v-d*E-f*S)*V,e[12]=(a*x-o*P-l*b)*V,e[13]=(t*P-n*x+r*b)*V,e[14]=(y*M-g*R-m*S)*V,e[15]=(d*R-u*M+h*S)*V,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,f=s*d,g=s*u,y=o*d,m=o*u,p=a*u,S=l*c,M=l*d,v=l*u,R=n.x,E=n.y,I=n.z;return r[0]=(1-(y+p))*R,r[1]=(f+v)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(f-v)*E,r[5]=(1-(h+p))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+M)*I,r[9]=(m-S)*I,r[10]=(1-(h+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=kr.set(r[0],r[1],r[2]).length(),a=kr.set(r[4],r[5],r[6]).length(),l=kr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Un.copy(this);let c=1/o,d=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Bn,l=!1){let c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Bn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===is)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Bn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Bn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===is)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},kr=new D,Un=new at,mp=new D(0,0,0),gp=new D(1,1,1),Ii=new D,Go=new D,xn=new D,wh=new at,Eh=new rn,kn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bp=0,Th=new D,Vr=new rn,mi=new at,Wo=new D,Us=new D,_p=new D,xp=new rn,Ah=new D(1,0,0),Rh=new D(0,1,0),Ch=new D(0,0,1),Ph={type:"added"},yp={type:"removed"},Hr={type:"childadded",child:null},Mc={type:"childremoved",child:null},Ft=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new kn,n=new rn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new et}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wo.copy(e):Wo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Us,Wo,this.up):mi.lookAt(Wo,Us,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(mi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ot=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Td(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=Nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ct.workingToColorSpace(tn.copy(this),e),Math.round(it(tn.r*255,0,255))*65536+Math.round(it(tn.g*255,0,255))*256+Math.round(it(tn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(tn.copy(this),t);let n=tn.r,r=tn.g,s=tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ut){ct.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,r=tn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Xo);let n=Ws(Di.h,Xo.h,t),r=Ws(Di.s,Xo.s,t),s=Ws(Di.l,Xo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ot;ot.NAMES=Nu;var Qs=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new D,gi=new D,wc=new D,bi=new D,Gr=new D,Wr=new D,Ih=new D,Ec=new D,Tc=new D,Ac=new D,Rc=new Tt,Cc=new Tt,Pc=new Tt,ei=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),gi.subVectors(n,t),wc.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(gi),l=Fn.dot(wc),c=gi.dot(gi),d=gi.dot(wc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(Cc,s.y),o.addScaledVector(Pc,s.z),o}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),gi.subVectors(e,t),Fn.cross(gi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Fn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Gr.subVectors(r,n),Wr.subVectors(s,n),Ec.subVectors(e,n);let l=Gr.dot(Ec),c=Wr.dot(Ec);if(l<=0&&c<=0)return t.copy(n);Tc.subVectors(e,r);let d=Gr.dot(Tc),u=Wr.dot(Tc);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Gr,o);Ac.subVectors(e,s);let f=Gr.dot(Ac),g=Wr.dot(Ac);if(g>=0&&f<=g)return t.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wr,a);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Ih.subVectors(s,r),a=(u-d)/(u-d+(f-g)),t.copy(r).addScaledVector(Ih,a);let p=1/(m+y+h);return o=y*p,a=h*p,t.copy(n).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qo.copy(n.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Yo.subVectors(this.max,Fs),Xr.subVectors(e.a,Fs),qr.subVectors(e.b,Fs),Yr.subVectors(e.c,Fs),Li.subVectors(qr,Xr),Ni.subVectors(Yr,qr),sr.subVectors(Xr,Yr);let t=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-sr.z,sr.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,sr.z,0,-sr.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-sr.y,sr.x,0];return!Ic(t,Xr,qr,Yr,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Xr,qr,Yr,Yo))?!1:(jo.crossVectors(Li,Ni),t=[jo.x,jo.y,jo.z],Ic(t,Xr,qr,Yr,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,qo=new Pt,Xr=new D,qr=new D,Yr=new D,Li=new D,Ni=new D,sr=new D,Fs=new D,Yo=new D,jo=new D,or=new D;function Ic(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){or.fromArray(i,s);let a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=t.dot(or),d=n.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Nt=new D,Zo=new ge,Mp=0,qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}};var eo=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var to=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sp=new Pt,zs=new D,Dc=new D,pr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Dc)),this.expandByPoint(zs.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wp=0,Cn=new at,Lc=new Ft,jr=new D,yn=new Pt,Os=new Pt,Ht=new D,gt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?to:eo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(yn.min,Os.min),yn.expandByPoint(Ht),Ht.addVectors(yn.max,Os.max),yn.expandByPoint(Ht)):(yn.expandByPoint(Os.min),yn.expandByPoint(Os.max))}yn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ht.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),Ht.add(jr)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new D,l[b]=new D;let c=new D,d=new D,u=new D,h=new ge,f=new ge,g=new ge,y=new D,m=new D;function p(b,x,L){c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),u.fromBufferAttribute(n,L),h.fromBufferAttribute(s,b),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,L),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),a[b].add(y),a[x].add(y),a[L].add(y),l[b].add(m),l[x].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,x=S.length;b<x;++b){let L=S[b],P=L.start,N=L.count;for(let z=P,k=P+N;z<k;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new D,v=new D,R=new D,E=new D;function I(b){R.fromBufferAttribute(r,b),E.copy(R);let x=a[b];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(E,x);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,P)}for(let b=0,x=S.length;b<x;++b){let L=S[b],P=L.start,N=L.count;for(let z=P,k=P+N;z<k;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new qt(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},no=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new D,cs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ep=0,si=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=hr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oi=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Bs=new D,Jr=new D,$r=new D,Kr=new ge,ks=new ge,Uu=new at,Jo=new D,Vs=new D,$o=new D,Dh=new ge,Nc=new ge,Lh=new ge,mr=class extends Ft{constructor(e=new Oi){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new cs(n,3,0,!1)),Zr.setAttribute("uv",new cs(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),Uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-$r.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Ko(Jo.set(-.5,-.5,0),$r,o,Jr,r,s),Ko(Vs.set(.5,-.5,0),$r,o,Jr,r,s),Ko($o.set(.5,.5,0),$r,o,Jr,r,s),Dh.set(0,0),Nc.set(1,0),Lh.set(1,1);let a=e.ray.intersectTriangle(Jo,Vs,$o,!1,Bs);if(a===null&&(Ko(Vs.set(-.5,.5,0),$r,o,Jr,r,s),Nc.set(0,1),a=e.ray.intersectTriangle(Jo,$o,Vs,!1,Bs),a===null))return;let l=e.ray.origin.distanceTo(Bs);l<e.near||l>e.far||t.push({distance:l,point:Bs.clone(),uv:ei.getInterpolation(Bs,Jo,Vs,$o,Dh,Nc,Lh,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ko(i,e,t,n,r,s){Kr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ks.x=s*Kr.x-r*Kr.y,ks.y=r*Kr.x+s*Kr.y):ks.copy(Kr),i.copy(e),i.x+=ks.x,i.y+=ks.y,i.applyMatrix4(Uu)}var xi=new D,Uc=new D,Qo=new D,Ui=new D,Fc=new D,ea=new D,zc=new D,Bi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uc.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Uc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Qo),a=Ui.dot(this.direction),l=-Ui.dot(Qo),c=Ui.lengthSq(),d=Math.abs(1-o*o),u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=s*d,u>=0)if(h>=-g)if(h<=g){let y=1/d;u*=y,h*=y,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Uc).addScaledVector(Qo,h),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),r=xi.dot(xi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,r,s){Fc.subVectors(t,e),ea.subVectors(n,e),zc.crossVectors(Fc,ea);let o=this.direction.dot(zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let l=a*this.direction.dot(ea.crossVectors(Ui,ea));if(l<0)return null;let c=a*this.direction.dot(Fc.cross(Ui));if(c<0||l+c>o)return null;let d=-a*Ui.dot(zc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nh=new at,ar=new Bi,ta=new pr,Uh=new D,na=new D,ia=new D,ra=new D,Oc=new D,sa=new D,Fh=new D,oa=new D,lt=class extends Ft{constructor(e=new gt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(Oc.fromBufferAttribute(u,e),o?sa.addScaledVector(Oc,d):sa.addScaledVector(Oc.sub(t),d))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(ta.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ta,Uh)===null||ar.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Nh.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,R=M;v<R;v+=3){let E=a.getX(v),I=a.getX(v+1),b=a.getX(v+2);r=aa(this,p,e,n,c,d,u,E,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=aa(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,R=M;v<R;v+=3){let E=v,I=v+1,b=v+2;r=aa(this,p,e,n,c,d,u,E,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,M=m+1,v=m+2;r=aa(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Tp(i,e,t,n,r,s,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===vi,a),l===null)return null;oa.copy(a),oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:i}}function aa(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,na),i.getVertexPosition(l,ia),i.getVertexPosition(c,ra);let d=Tp(i,e,t,n,na,ia,ra,Fh);if(d){let u=new D;ei.getBarycoord(Fh,na,ia,ra,u),r&&(d.uv=ei.getInterpolatedAttribute(r,a,l,c,u,new ge)),s&&(d.uv1=ei.getInterpolatedAttribute(s,a,l,c,u,new ge)),o&&(d.normal=ei.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(na,ia,ra,h.normal),d.face=h,d.barycoord=u}return d}var Oa=class extends hn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Gt,d=Gt,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bc=new D,Ap=new D,Rp=new et,mn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bc.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new pr,Cp=new ge(.5,.5),la=new D,ds=class{constructor(e=new mn,t=new mn,n=new mn,r=new mn,s=new mn,o=new mn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],g=s[8],y=s[9],m=s[10],p=s[11],S=s[12],M=s[13],v=s[14],R=s[15];if(r[0].setComponents(c-o,f-d,p-g,R-S).normalize(),r[1].setComponents(c+o,f+d,p+g,R+S).normalize(),r[2].setComponents(c+a,f+u,p+y,R+M).normalize(),r[3].setComponents(c-a,f-u,p-y,R-M).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,f-h,p-m,R-v).normalize();else if(r[4].setComponents(c-l,f-h,p-m,R-v).normalize(),t===Bn)r[5].setComponents(c+l,f+h,p+m,R+v).normalize();else if(t===is)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);let t=Cp.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jt=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new D,ka=new D,zh=new at,Hs=new Bi,ca=new pr,kc=new D,Oh=new D,gr=class extends Ft{constructor(e=new gt,t=new jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ba.fromBufferAttribute(t,r-1),ka.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ba.distanceTo(ka);e.setAttribute("lineDistance",new dt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;zh.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(zh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=d.getX(y),S=d.getX(y+1),M=da(this,e,Hs,l,p,S,y);M&&t.push(M)}if(this.isLineLoop){let y=d.getX(g-1),m=d.getX(f),p=da(this,e,Hs,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=da(this,e,Hs,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=da(this,e,Hs,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function da(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ba.fromBufferAttribute(a,r),ka.fromBufferAttribute(a,s),t.distanceSqToSegment(Ba,ka,kc,Oh)>n)return;kc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(kc);if(!(c<e.near||c>e.far))return{distance:c,point:Oh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bh=new D,kh=new D,un=class extends gr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Bh.fromBufferAttribute(t,r),kh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bh.distanceTo(kh);e.setAttribute("lineDistance",new dt(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var io=class extends hn{constructor(e=[],t=Yi,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ai=class extends hn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ki=class extends hn{constructor(e,t,n=Hn,r,s,o,a=Gt,l=Gt,c,d=ii,u=1){if(d!==ii&&d!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Va=class extends ki{constructor(e,t=Hn,n=Yi,r,s,o=Gt,a=Gt,l,c=ii){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ro=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sn=class i extends gt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function g(y,m,p,S,M,v,R,E,I,b,x){let L=v/I,P=R/b,N=v/2,z=R/2,k=E/2,V=I+1,A=b+1,F=0,O=0,G=new D;for(let le=0;le<A;le++){let he=le*P-z;for(let me=0;me<V;me++){let oe=me*L-N;G[y]=oe*S,G[m]=he*M,G[p]=k,c.push(G.x,G.y,G.z),G[y]=0,G[m]=0,G[p]=E>0?1:-1,d.push(G.x,G.y,G.z),u.push(me/I),u.push(1-le/b),F+=1}}for(let le=0;le<b;le++)for(let he=0;he<I;he++){let me=h+he+V*le,oe=h+he+V*(le+1),Q=h+(he+1)+V*(le+1),xe=h+(he+1)+V*le;l.push(me,oe,xe),l.push(oe,Q,xe),O+=6}a.addGroup(f,O,x),f+=O,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Mi=class i extends gt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],f=[],g=0,y=[],m=n/2,p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function S(){let v=new D,R=new D,E=0,I=(t-e)/n;for(let b=0;b<=s;b++){let x=[],L=b/s,P=L*(t-e)+e;for(let N=0;N<=r;N++){let z=N/r,k=z*l+a,V=Math.sin(k),A=Math.cos(k);R.x=P*V,R.y=-L*n+m,R.z=P*A,u.push(R.x,R.y,R.z),v.set(V,I,A).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-L),x.push(g++)}y.push(x)}for(let b=0;b<r;b++)for(let x=0;x<s;x++){let L=y[x][b],P=y[x+1][b],N=y[x+1][b+1],z=y[x][b+1];(e>0||x!==0)&&(d.push(L,P,z),E+=3),(t>0||x!==s-1)&&(d.push(P,N,z),E+=3)}c.addGroup(p,E,0),p+=E}function M(v){let R=g,E=new ge,I=new D,b=0,x=v===!0?e:t,L=v===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,m*L,0),h.push(0,L,0),f.push(.5,.5),g++;let P=g;for(let N=0;N<=r;N++){let k=N/r*l+a,V=Math.cos(k),A=Math.sin(k);I.x=x*A,I.y=m*L,I.z=x*V,u.push(I.x,I.y,I.z),h.push(0,L,0),E.x=V*.5+.5,E.y=A*.5*L+.5,f.push(E.x,E.y),g++}for(let N=0;N<r;N++){let z=R+N,k=P+N;v===!0?d.push(k,k+1,z):d.push(k+1,k,z),b+=3}c.addGroup(p,b,v===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class i extends Mi{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ha=new D,ua=new D,Vc=new D,fa=new ei,on=class extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ts*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:p}=fa;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),fa.getNormal(Vc),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let M=(S+1)%3,v=u[S],R=u[M],E=fa[d[S]],I=fa[d[M]],b=`${v}_${R}`,x=`${R}_${v}`;x in h&&h[x]?(Vc.dot(h[x].normal)<=s&&(f.push(E.x,E.y,E.z),f.push(I.x,I.y,I.z)),h[x]=null):b in h||(h[b]={index0:c[S],index1:c[M],normal:Vc.clone()})}}for(let g in h)if(h[g]){let{index0:y,index1:m}=h[g];ha.fromBufferAttribute(a,y),ua.fromBufferAttribute(a,m),f.push(ha.x,ha.y,ha.z),f.push(ua.x,ua.y,ua.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new at;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(it(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(it(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hs=class extends Mn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends hs{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ad(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var pa=new D,Hc=new Ad,Gc=new Ad,Wc=new Ad,Wa=class extends Mn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(pa.subVectors(r[0],r[1]).add(r[0]),c=pa);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(pa.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Hc.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,y,m),Gc.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,y,m),Wc.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Gc.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Wc.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(Hc.calc(l),Gc.calc(l),Wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vh(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Pp(i,e){let t=1-i;return t*t*e}function Ip(i,e){return 2*(1-i)*i*e}function Dp(i,e){return i*i*e}function Xs(i,e,t,n){return Pp(i,e)+Ip(i,t)+Dp(i,n)}function Lp(i,e){let t=1-i;return t*t*t*e}function Np(i,e){let t=1-i;return 3*t*t*i*e}function Up(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function qs(i,e,t,n,r){return Lp(i,e)+Np(i,t)+Up(i,n)+Fp(i,r)}var so=class extends Mn{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,r.x,s.x,o.x,a.x),qs(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends Mn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(qs(e,r.x,s.x,o.x,a.x),qs(e,r.y,s.y,o.y,a.y),qs(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oo=class extends Mn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},br=class extends Mn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends Mn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Xs(e,r.x,s.x,o.x),Xs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends Mn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Xs(e,r.x,s.x,o.x),Xs(e,r.y,s.y,o.y),Xs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Vh(a,l.x,c.x,d.x,u.x),Vh(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},qa=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:Wa,CubicBezierCurve:so,CubicBezierCurve3:Xa,EllipseCurve:hs,LineCurve:oo,LineCurve3:br,QuadraticBezierCurve:ao,QuadraticBezierCurve3:_r,SplineCurve:lo}),us=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new qa[r.type]().fromJSON(r))}return this}},xr=class extends us{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oo(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new ao(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new so(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new hs(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vi=class extends xr{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new xr().fromJSON(r))}return this}};function zp(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Fu(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Hp(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,u=l;for(let h=t;h<r;h+=t){let f=i[h],g=i[h+1];f<a&&(a=f),g<l&&(l=g),f>d&&(d=f),g>u&&(u=g)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return co(s,o,t,a,l,c,0),o}function Fu(i,e,t,n,r){let s;if(r===Qp(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Hh(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Hh(o/n|0,i[o],i[o+1],s);return s&&fs(s,s.next)&&(uo(s),s=s.next),s}function yr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||Et(t.prev,t,t.next)===0)){if(uo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function co(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Yp(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Bp(i,n,r,s):Op(i)){e.push(l.i,i.i,c.i),uo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kp(yr(i),e),co(i,e,t,n,r,s,2)):o===2&&Vp(i,e,t,n,r,s):co(yr(i),e,t,n,r,s,1);break}}}function Op(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&Gs(r,a,s,l,o,c,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bp(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Et(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,l,c),g=Math.min(d,u,h),y=Math.max(a,l,c),m=Math.max(d,u,h),p=Kc(f,g,e,t,n),S=Kc(y,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Gs(a,d,l,u,c,h,M.x,M.y)&&Et(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Gs(a,d,l,u,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Gs(a,d,l,u,c,h,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Gs(a,d,l,u,c,h,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kp(i,e){let t=i;do{let n=t.prev,r=t.next.next;!fs(n,r)&&Ou(n,t,t.next,r)&&ho(n,r)&&ho(r,n)&&(e.push(n.i,t.i,r.i),uo(t),uo(t.next),t=i=r),t=t.next}while(t!==i);return yr(t)}function Vp(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jp(o,a)){let l=Bu(o,a);o=yr(o,o.next),l=yr(l,l.next),co(o,e,t,n,r,s,0),co(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Hp(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Fu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Zp(c))}r.sort(Gp);for(let s=0;s<r.length;s++)t=Wp(r[s],t);return t}function Gp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Wp(i,e){let t=Xp(i,e);if(!t)return e;let n=Bu(t,i);return yr(n,n.next),yr(t,t.next)}function Xp(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(fs(i,t))return t;do{if(fs(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);ho(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&qp(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function qp(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function Yp(i,e,t,n){let r=i;do r.z===0&&(r.z=Kc(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,jp(r)}function jp(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Kc(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Gs(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&zu(i,e,t,n,r,s,o,a)}function Jp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$p(i,e)&&(ho(i,e)&&ho(e,i)&&Kp(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||fs(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function Ou(i,e,t,n){let r=ga(Et(i,e,t)),s=ga(Et(i,e,n)),o=ga(Et(t,n,i)),a=ga(Et(t,n,e));return!!(r!==s&&o!==a||r===0&&ma(i,t,e)||s===0&&ma(i,n,e)||o===0&&ma(t,i,n)||a===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ga(i){return i>0?1:i<0?-1:0}function $p(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ou(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ho(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Kp(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bu(i,e){let t=Qc(i.i,i.x,i.y),n=Qc(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Hh(i,e,t,n){let r=Qc(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function uo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var ed=class{static triangulate(e,t,n=2){return zp(e,t,n)}},dr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Gh(e),Wh(n,e);let o=e.length;t.forEach(Gh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Wh(n,t[l]);let a=ed.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Gh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vr=class i extends gt{constructor(e=new Vi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:e0,M,v=!1,R,E,I,b;if(p){M=p.getSpacedPoints(d),v=!0,h=!1;let se=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(d,se),E=new D,I=new D,b=new D}h||(m=0,f=0,g=0,y=0);let x=a.extractPoints(c),L=x.shape,P=x.holes;if(!dr.isClockWise(L)){L=L.reverse();for(let se=0,ce=P.length;se<ce;se++){let ae=P[se];dr.isClockWise(ae)&&(P[se]=ae.reverse())}}function z(se){let ae=10000000000000001e-36,Se=se[0];for(let C=1;C<=se.length;C++){let He=C%se.length,Ce=se[He],Oe=Ce.x-Se.x,ye=Ce.y-Se.y,T=Oe*Oe+ye*ye,_=Math.max(Math.abs(Ce.x),Math.abs(Ce.y),Math.abs(Se.x),Math.abs(Se.y)),B=ae*_*_;if(T<=B){se.splice(He,1),C--;continue}Se=Ce}}z(L),P.forEach(z);let k=P.length,V=L;for(let se=0;se<k;se++){let ce=P[se];L=L.concat(ce)}function A(se,ce,ae){return ce||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ce,ae)}let F=L.length;function O(se,ce,ae){let Se,C,He,Ce=se.x-ce.x,Oe=se.y-ce.y,ye=ae.x-se.x,T=ae.y-se.y,_=Ce*Ce+Oe*Oe,B=Ce*T-Oe*ye;if(Math.abs(B)>Number.EPSILON){let K=Math.sqrt(_),ue=Math.sqrt(ye*ye+T*T),J=ce.x-Oe/K,Ne=ce.y+Ce/K,ve=ae.x-T/ue,ie=ae.y+ye/ue,be=((ve-J)*T-(ie-Ne)*ye)/(Ce*T-Oe*ye);Se=J+Ce*be-se.x,C=Ne+Oe*be-se.y;let ne=Se*Se+C*C;if(ne<=2)return new ge(Se,C);He=Math.sqrt(ne/2)}else{let K=!1;Ce>Number.EPSILON?ye>Number.EPSILON&&(K=!0):Ce<-Number.EPSILON?ye<-Number.EPSILON&&(K=!0):Math.sign(Oe)===Math.sign(T)&&(K=!0),K?(Se=-Oe,C=Ce,He=Math.sqrt(_)):(Se=Ce,C=Oe,He=Math.sqrt(_/2))}return new ge(Se/He,C/He)}let G=[];for(let se=0,ce=V.length,ae=ce-1,Se=se+1;se<ce;se++,ae++,Se++)ae===ce&&(ae=0),Se===ce&&(Se=0),G[se]=O(V[se],V[ae],V[Se]);let le=[],he,me=G.concat();for(let se=0,ce=k;se<ce;se++){let ae=P[se];he=[];for(let Se=0,C=ae.length,He=C-1,Ce=Se+1;Se<C;Se++,He++,Ce++)He===C&&(He=0),Ce===C&&(Ce=0),he[Se]=O(ae[Se],ae[He],ae[Ce]);le.push(he),me=me.concat(he)}let oe;if(m===0)oe=dr.triangulateShape(V,P);else{let se=[],ce=[];for(let ae=0;ae<m;ae++){let Se=ae/m,C=f*Math.cos(Se*Math.PI/2),He=g*Math.sin(Se*Math.PI/2)+y;for(let Ce=0,Oe=V.length;Ce<Oe;Ce++){let ye=A(V[Ce],G[Ce],He);Le(ye.x,ye.y,-C),Se===0&&se.push(ye)}for(let Ce=0,Oe=k;Ce<Oe;Ce++){let ye=P[Ce];he=le[Ce];let T=[];for(let _=0,B=ye.length;_<B;_++){let K=A(ye[_],he[_],He);Le(K.x,K.y,-C),Se===0&&T.push(K)}Se===0&&ce.push(T)}}oe=dr.triangulateShape(se,ce)}let Q=oe.length,xe=g+y;for(let se=0;se<F;se++){let ce=h?A(L[se],me[se],xe):L[se];v?(I.copy(R.normals[0]).multiplyScalar(ce.x),E.copy(R.binormals[0]).multiplyScalar(ce.y),b.copy(M[0]).add(I).add(E),Le(b.x,b.y,b.z)):Le(ce.x,ce.y,0)}for(let se=1;se<=d;se++)for(let ce=0;ce<F;ce++){let ae=h?A(L[ce],me[ce],xe):L[ce];v?(I.copy(R.normals[se]).multiplyScalar(ae.x),E.copy(R.binormals[se]).multiplyScalar(ae.y),b.copy(M[se]).add(I).add(E),Le(b.x,b.y,b.z)):Le(ae.x,ae.y,u/d*se)}for(let se=m-1;se>=0;se--){let ce=se/m,ae=f*Math.cos(ce*Math.PI/2),Se=g*Math.sin(ce*Math.PI/2)+y;for(let C=0,He=V.length;C<He;C++){let Ce=A(V[C],G[C],Se);Le(Ce.x,Ce.y,u+ae)}for(let C=0,He=P.length;C<He;C++){let Ce=P[C];he=le[C];for(let Oe=0,ye=Ce.length;Oe<ye;Oe++){let T=A(Ce[Oe],he[Oe],Se);v?Le(T.x,T.y+M[d-1].y,M[d-1].x+ae):Le(T.x,T.y,u+ae)}}}Z(),de();function Z(){let se=r.length/3;if(h){let ce=0,ae=F*ce;for(let Se=0;Se<Q;Se++){let C=oe[Se];Re(C[2]+ae,C[1]+ae,C[0]+ae)}ce=d+m*2,ae=F*ce;for(let Se=0;Se<Q;Se++){let C=oe[Se];Re(C[0]+ae,C[1]+ae,C[2]+ae)}}else{for(let ce=0;ce<Q;ce++){let ae=oe[ce];Re(ae[2],ae[1],ae[0])}for(let ce=0;ce<Q;ce++){let ae=oe[ce];Re(ae[0]+F*d,ae[1]+F*d,ae[2]+F*d)}}n.addGroup(se,r.length/3-se,0)}function de(){let se=r.length/3,ce=0;fe(V,ce),ce+=V.length;for(let ae=0,Se=P.length;ae<Se;ae++){let C=P[ae];fe(C,ce),ce+=C.length}n.addGroup(se,r.length/3-se,1)}function fe(se,ce){let ae=se.length;for(;--ae>=0;){let Se=ae,C=ae-1;C<0&&(C=se.length-1);for(let He=0,Ce=d+m*2;He<Ce;He++){let Oe=F*He,ye=F*(He+1),T=ce+Se+Oe,_=ce+C+Oe,B=ce+C+ye,K=ce+Se+ye;Ue(T,_,B,K)}}}function Le(se,ce,ae){l.push(se),l.push(ce),l.push(ae)}function Re(se,ce,ae){Ke(se),Ke(ce),Ke(ae);let Se=r.length/3,C=S.generateTopUV(n,r,Se-3,Se-2,Se-1);Be(C[0]),Be(C[1]),Be(C[2])}function Ue(se,ce,ae,Se){Ke(se),Ke(ce),Ke(Se),Ke(ce),Ke(ae),Ke(Se);let C=r.length/3,He=S.generateSideWallUV(n,r,C-6,C-3,C-2,C-1);Be(He[0]),Be(He[1]),Be(He[3]),Be(He[1]),Be(He[2]),Be(He[3])}function Ke(se){r.push(l[se*3+0]),r.push(l[se*3+1]),r.push(l[se*3+2])}function Be(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return t0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new qa[r.type]().fromJSON(r)),new i(n,e.options)}},e0={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],f=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(h,1-g),new ge(y,1-p)]:[new ge(a,1-l),new ge(d,1-u),new ge(f,1-g),new ge(m,1-p)]}};function t0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mr=class i extends gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<d;p++){let S=p*h-o;for(let M=0;M<c;M++){let v=M*u-s;g.push(v,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let M=S+c*p,v=S+c*(p+1),R=S+1+c*(p+1),E=S+1+c*p;f.push(M,v,E),f.push(v,R,E)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fo=class i extends gt{constructor(e=new _r(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ge,d=new D,u=[],h=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function y(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),S(),p()}function m(M){d=e.getPointAt(M/t,d);let v=o.normals[M],R=o.binormals[M];for(let E=0;E<=r;E++){let I=E/r*Math.PI*2,b=Math.sin(I),x=-Math.cos(I);l.x=x*v.x+b*R.x,l.y=x*v.y+b*R.y,l.z=x*v.z+b*R.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){let R=(r+1)*(M-1)+(v-1),E=(r+1)*M+(v-1),I=(r+1)*M+v,b=(r+1)*(M-1)+v;g.push(R,E,b),g.push(E,I,b)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function an(i){let e={};for(let t=0;t<i.length;t++){let n=Tr(i[t]);for(let r in n)e[r]=n[r]}return e}function n0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var ku={clone:Tr,merge:an},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ya=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wt=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ja=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Hi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ja=class extends Hi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jc,endingEnd:jc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:s=e,a=2*t-n;break;case Jc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=e,l=2*n-t;break;case Jc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let R=0;R!==a;++R)s[R]=p*o[d+R]+S*o[c+R]+M*o[l+R]+v*o[u+R];return s}},$a=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},Ka=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends Hi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,u=d.inTangents,h=d.outTangents;if(!u||!h){let y=(n-t)/(r-t),m=1-y;for(let p=0;p!==a;++p)s[p]=o[c+p]*m+o[l+p]*y;return s}let f=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],p=o[l+y],S=g*f+y*2,M=h[S],v=h[S+1],R=e*f+y*2,E=u[R],I=u[R+1],b=(n-t)/(r-t),x,L,P,N,z;for(let k=0;k<8;k++){x=b*b,L=x*b,P=1-b,N=P*P,z=N*P;let A=z*t+3*N*b*M+3*P*x*E+L*r-n;if(Math.abs(A)<1e-10)break;let F=3*N*(M-t)+6*P*b*(E-M)+3*x*(r-E);if(Math.abs(F)<1e-10)break;b=b-A/F,b=Math.max(0,Math.min(1,b))}s[y]=z*m+3*N*b*v+3*P*x*I+L*p}return s}},wn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break;case Yc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Zf(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===va,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[h+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=La;var Gi=class extends wn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ys;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};el.prototype.ValueTypeName="color";var tl=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};tl.prototype.ValueTypeName="number";var nl=class extends Hi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)rn.slerpFlat(s,0,o,c-a,o,c,l);return s}},po=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends wn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ys;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends wn{constructor(e,t,n,r){super(e,t,n,r)}};il.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vu=new rl,sl=class{constructor(e){this.manager=e!==void 0?e:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var mo=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},go=class extends mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xc=new at,Xh=new D,qh=new D,td=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===is||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_a=new D,xa=new rn,Qn=new D,bo=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_a,xa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(_a,xa,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new D,Yh=new ge,jh=new ge,nn=class extends bo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,Yh,jh),t.subVectors(jh,Yh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ps=class extends bo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nd=class extends td{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new nd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qr=-90,es=1,ol=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(Qr,es,e,t);r.layers=this.layers,this.add(r);let s=new nn(Qr,es,e,t);s.layers=this.layers,this.add(s);let o=new nn(Qr,es,e,t);o.layers=this.layers,this.add(o);let a=new nn(Qr,es,e,t);a.layers=this.layers,this.add(a);let l=new nn(Qr,es,e,t);l.layers=this.layers,this.add(l);let c=new nn(Qr,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},al=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Cd="\\[\\]\\.:\\/",s0=new RegExp("["+Cd+"]","g"),Pd="[^"+Cd+"]",o0="[^"+Cd.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",Pd),l0=/(WCOD+)?/.source.replace("WCOD",o0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),h0=new RegExp("^"+a0+l0+c0+d0+"$"),u0=["material","materials","bones","map"],id=class{constructor(e,t,n){let r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(s0,"")}static parseTrackName(e){let t=h0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);u0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=id;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var Zh=new at,_o=class{constructor(e,t,n=0,r=1/0){this.ray=new Bi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,n=[]){return rd(e,this,n,t),n.sort(Jh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)rd(e[r],this,n,t);return n.sort(Jh),n}};function Jh(i,e){return i.distance-e.distance}function rd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)rd(s[o],e,t,!0)}}var gs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xo=class extends un{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new gt;s.setIndex(new qt(n,1)),s.setAttribute("position",new dt(r,3)),super(s,new jt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var $h=new D,ya,qc,Sr=class extends Ft{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",ya===void 0&&(ya=new gt,ya.setAttribute("position",new dt([0,0,0,0,1,0],3)),qc=new Ha(.5,1,5,1),qc.translate(0,-.5,0)),this.position.copy(t),this.line=new gr(ya,new jt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(qc,new oi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{$h.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle($h,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var yo=class extends ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Id(i,e,t,n){let r=f0(n);switch(t){case vd:return i*e;case Sd:return i*e/r.components*r.byteLength;case pl:return i*e/r.components*r.byteLength;case Er:return i*e*2/r.components*r.byteLength;case ml:return i*e*2/r.components*r.byteLength;case Md:return i*e*3/r.components*r.byteLength;case Pn:return i*e*4/r.components*r.byteLength;case gl:return i*e*4/r.components*r.byteLength;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(e,8)/4;case bl:case xl:return Math.max(i,8)*Math.max(e,8)/2;case vl:case Ml:case wl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function f0(i){switch(i){case gn:case bd:return{byteLength:1,components:1};case _s:case _d:case ci:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case Hn:case hl:case Gn:return{byteLength:4,components:1};case xd:case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function x0(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,u[h]=y)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,N0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,_m=`uniform sampler2D dfgLUT;
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
}`,xm=`
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:y0,alphahash_pars_fragment:v0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:I0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:N0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:j0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:$0,envmap_fragment:K0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:em,envmap_pars_vertex:tm,envmap_physical_pars_fragment:um,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:rm,fog_fragment:sm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_pars_fragment:lm,lights_lambert_fragment:cm,lights_lambert_pars_fragment:dm,lights_pars_begin:hm,lights_toon_fragment:fm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:bm,lights_physical_pars_fragment:_m,lights_fragment_begin:xm,lights_fragment_maps:ym,lights_fragment_end:vm,logdepthbuf_fragment:Mm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Em,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:zm,normal_fragment_maps:Om,normal_pars_fragment:Bm,normal_pars_vertex:km,normal_vertex:Vm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:jm,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:rg,skinbase_vertex:sg,skinning_pars_vertex:og,skinning_vertex:ag,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:dg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:fg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:bg,worldpos_vertex:_g,background_vert:xg,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:wg,depth_vert:Eg,depth_frag:Tg,distance_vert:Ag,distance_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Ig,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:zg,meshmatcap_frag:Og,meshnormal_vert:Bg,meshnormal_frag:kg,meshphong_vert:Vg,meshphong_frag:Hg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:jg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:$g,sprite_frag:Kg},Pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},hi={basic:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:an([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:an([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:an([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:an([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:an([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:an([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:an([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:an([Pe.lights,Pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};hi.physical={uniforms:an([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var $l={r:0,b:0,g:0},Ar=new kn,Qg=new at;function e1(i,e,t,n,r,s){let o=new ot(0),a=r===!0?0:1,l,c,d=null,u=0,h=null;function f(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(S){let M=!1,v=f(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===So)?(c===void 0&&(c=new lt(new sn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Tr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ar.copy(M.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(Ar)),c.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new Mr(2,2),new Sn({name:"BackgroundMaterial",uniforms:Tr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB($l,Rd(i)),t.buffers.color.setClear($l.r,$l.g,$l.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:p}}function t1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(P,N,z,k,V){let A=!1,F=u(P,k,z,N);s!==F&&(s=F,c(s.object)),A=f(P,k,z,V),A&&g(P,k,z,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(A||o)&&(o=!1,v(P,N,z,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,N,z,k){let V=k.wireframe===!0,A=n[N.id];A===void 0&&(A={},n[N.id]=A);let F=P.isInstancedMesh===!0?P.id:0,O=A[F];O===void 0&&(O={},A[F]=O);let G=O[z.id];G===void 0&&(G={},O[z.id]=G);let le=G[V];return le===void 0&&(le=h(l()),G[V]=le),le}function h(P){let N=[],z=[],k=[];for(let V=0;V<t;V++)N[V]=0,z[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:k,object:P,attributes:{},index:null}}function f(P,N,z,k){let V=s.attributes,A=N.attributes,F=0,O=z.getAttributes();for(let G in O)if(O[G].location>=0){let he=V[G],me=A[G];if(me===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function g(P,N,z,k){let V={},A=N.attributes,F=0,O=z.getAttributes();for(let G in O)if(O[G].location>=0){let he=A[G];he===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));let me={};me.attribute=he,he&&he.data&&(me.data=he.data),V[G]=me,F++}s.attributes=V,s.attributesNum=F,s.index=k}function y(){let P=s.newAttributes;for(let N=0,z=P.length;N<z;N++)P[N]=0}function m(P){p(P,0)}function p(P,N){let z=s.newAttributes,k=s.enabledAttributes,V=s.attributeDivisors;z[P]=1,k[P]===0&&(i.enableVertexAttribArray(P),k[P]=1),V[P]!==N&&(i.vertexAttribDivisor(P,N),V[P]=N)}function S(){let P=s.newAttributes,N=s.enabledAttributes;for(let z=0,k=N.length;z<k;z++)N[z]!==P[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function M(P,N,z,k,V,A,F){F===!0?i.vertexAttribIPointer(P,N,z,V,A):i.vertexAttribPointer(P,N,z,k,V,A)}function v(P,N,z,k){y();let V=k.attributes,A=z.getAttributes(),F=N.defaultAttributeValues;for(let O in A){let G=A[O];if(G.location>=0){let le=V[O];if(le===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){let he=le.normalized,me=le.itemSize,oe=e.get(le);if(oe===void 0)continue;let Q=oe.buffer,xe=oe.type,Z=oe.bytesPerElement,de=xe===i.INT||xe===i.UNSIGNED_INT||le.gpuType===hl;if(le.isInterleavedBufferAttribute){let fe=le.data,Le=fe.stride,Re=le.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<G.locationSize;Ue++)p(G.location+Ue,fe.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)m(G.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ue=0;Ue<G.locationSize;Ue++)M(G.location+Ue,me/G.locationSize,xe,he,Le*Z,(Re+me/G.locationSize*Ue)*Z,de)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)p(G.location+fe,le.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let fe=0;fe<G.locationSize;fe++)M(G.location+fe,me/G.locationSize,xe,he,me*Z,me/G.locationSize*fe*Z,de)}}else if(F!==void 0){let he=F[O];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(G.location,he);break;case 3:i.vertexAttrib3fv(G.location,he);break;case 4:i.vertexAttrib4fv(G.location,he);break;default:i.vertexAttrib1fv(G.location,he)}}}}S()}function R(){x();for(let P in n){let N=n[P];for(let z in N){let k=N[z];for(let V in k){let A=k[V];for(let F in A)d(A[F].object),delete A[F];delete k[V]}}delete n[P]}}function E(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let z in N){let k=N[z];for(let V in k){let A=k[V];for(let F in A)d(A[F].object),delete A[F];delete k[V]}}delete n[P.id]}function I(P){for(let N in n){let z=n[N];for(let k in z){let V=z[k];if(V[P.id]===void 0)continue;let A=V[P.id];for(let F in A)d(A[F].object),delete A[F];delete V[P.id]}}}function b(P){for(let N in n){let z=n[N],k=P.isInstancedMesh===!0?P.id:0,V=z[k];if(V!==void 0){for(let A in V){let F=V[A];for(let O in F)d(F[O].object),delete F[O];delete V[A]}delete z[k],Object.keys(z).length===0&&delete n[N]}}}function x(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function n1(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y]*h[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let b=I===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==gn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gn&&!b)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:R,samples:E}}function r1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new mn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{let S=s?0:n,M=S*4,v=p.clippingState||null;l.value=v,v=d(g,h,M,f);for(let R=0;R!==M;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Ji=4,Hu=[.125,.215,.35,.446,.526,.582],Cr=20,s1=256,Co=new ps,Gu=new ot,Dd=null,Ld=0,Nd=0,Ud=!1,o1=new D,Ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=o1}=s;Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ld,Nd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:ci,format:Pn,colorSpace:fr,depthBuffer:!1},r=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a1(s)),this._blurMaterial=c1(s,e,t),this._ggxMaterial=l1(s,e,t)}return r}_compileMaterial(e){let t=new lt(new gt,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,r,s){let l=new nn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Gu),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new sn,new oi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Gu),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));let R=this._cubeSize;ys(r,v*R,M>2?R:0,R,R),u.setRenderTarget(r),p&&u.render(y,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Yi||e.mapping===wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ji?n-g+Ji:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ys(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(a,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ys(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(a,Co)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=c;let h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cr-1),y=s/g,m=isFinite(s)?1+Math.floor(d*y):Cr;m>Cr&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cr}`);let p=[],S=0;for(let I=0;I<Cr;++I){let b=I/y,x=Math.exp(-b*b/2);p.push(x),I===0?S+=x:I<m&&(S+=2*x)}for(let I=0;I<p.length;I++)p[I]=p[I]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let v=this._sizeLods[r],R=3*v*(r>M-Ji?r-M+Ji:0),E=4*(this._cubeSize-v);ys(t,R,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Co)}};function a1(i){let e=[],t=[],n=[],r=i,s=i-Ji+1+Hu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ji?l=Hu[o-i+Ji-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,y=3,m=2,p=1,S=new Float32Array(y*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){let I=E%3*2/3-1,b=E>2?0:-1,x=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];S.set(x,y*g*E),M.set(h,m*g*E);let L=[E,E,E,E,E,E];v.set(L,p*g*E)}let R=new gt;R.setAttribute("position",new qt(S,y)),R.setAttribute("uv",new qt(M,m)),R.setAttribute("faceIndex",new qt(v,p)),n.push(new lt(R,null)),r>Ji&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Wu(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function l1(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function c1(i,e,t){let n=new Float32Array(Cr),r=new D(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xu(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function qu(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}var ec=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new io(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sn(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:li});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=Yt),new ol(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function d1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===ll||f===cl)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ec(g.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,g=f===ll||f===cl,y=f===Yi||f===wr;if(g||y){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ql(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Ql(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,f){return f===ll?h.mapping=Yi:f===cl&&(h.mapping=wr),h}function l(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function h1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&$s("WebGLRenderer: "+n+" extension not supported."),r}}}function u1(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){let h=[],f=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let M=0,v=S.length;M<v;M+=3){let R=S[M+0],E=S[M+1],I=S[M+2];h.push(R,E,E,I,I,R)}}else{let S=g.array;y=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let R=M+0,E=M+1,I=M+2;h.push(R,E,E,I,I,R)}}let m=new(g.count>=65535?to:eo)(h,1);m.version=y;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){let h=s.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function f1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,y,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*y[S];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function p1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function m1(i,e,t){let n=new WeakMap,r=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*R*4*u),I=new Ks(E,v,R,u);I.type=Gn,I.needsUpdate=!0;let b=M*4;for(let L=0;L<u;L++){let P=m[L],N=p[L],z=S[L],k=v*R*4*L;for(let V=0;V<P.count;V++){let A=V*b;f===!0&&(r.fromBufferAttribute(P,V),E[k+A+0]=r.x,E[k+A+1]=r.y,E[k+A+2]=r.z,E[k+A+3]=0),g===!0&&(r.fromBufferAttribute(N,V),E[k+A+4]=r.x,E[k+A+5]=r.y,E[k+A+6]=r.z,E[k+A+7]=0),y===!0&&(r.fromBufferAttribute(z,V),E[k+A+8]=r.x,E[k+A+9]=r.y,E[k+A+10]=r.z,E[k+A+11]=z.itemSize===4?r.w:1)}}h={count:u,texture:I,size:new ge(v,R)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function g1(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var b1={[dd]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[ud]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[pd]:"AGX_TONE_MAPPING",[md]:"NEUTRAL_TONE_MAPPING",[fd]:"CUSTOM_TONE_MAPPING"};function _1(i,e,t,n,r){let s=new vn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new vn(e,t,{type:ci,depthBuffer:!1,stencilBuffer:!1}),a=new gt;a.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new dt([0,2,0,0,2,0],2));let l=new Ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new lt(a,l),d=new ps(-1,1,1,-1,0,1),u=null,h=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let v=0;v<m.length;v++){let R=m[v];R.setSize&&R.setSize(S,M)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let M=s.width,v=s.height;for(let R=0;R<m.length;R++){let E=m[R];E.setSize&&E.setSize(M,v)}},this.begin=function(S,M){if(f||S.toneMapping===Vn&&m.length===0)return!1;if(y=M,M!==null){let v=M.width,R=M.height;(s.width!==v||s.height!==R)&&this.setSize(v,R)}return p===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(S,M){S.toneMapping=g,f=!0;let v=s,R=o;for(let E=0;E<m.length;E++){let I=m[E];if(I.enabled!==!1&&(I.render(S,R,v,M),I.needsSwap!==!1)){let b=v;v=R,R=b}}if(u!==S.outputColorSpace||h!==S.toneMapping){u=S.outputColorSpace,h=S.toneMapping,l.defines={},ct.getTransfer(u)===pt&&(l.defines.SRGB_TRANSFER="");let E=b1[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(y),S.render(c,d),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var uf=new hn,Od=new ki(1,1),ff=new Ks,pf=new za,mf=new io,Yu=[],ju=[],Zu=new Float32Array(16),Ju=new Float32Array(9),$u=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Yu[r];if(s===void 0&&(s=new Float32Array(r),Yu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ic(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function S1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Ot(t,n)}}function w1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Ot(t,n)}}function E1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(zt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Ot(t,n)}}function T1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function A1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function R1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function C1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function P1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function L1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function N1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Od.compareFunction=t.isReversedDepthBuffer()?Jl:Zl,s=Od):s=uf,t.setTexture2D(e||s,r)}function U1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||pf,r)}function F1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||mf,r)}function z1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ff,r)}function O1(i){switch(i){case 5126:return x1;case 35664:return y1;case 35665:return v1;case 35666:return M1;case 35674:return S1;case 35675:return w1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return R1;case 35669:case 35673:return C1;case 5125:return P1;case 36294:return I1;case 36295:return D1;case 36296:return L1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return z1}}function B1(i,e){i.uniform1fv(this.addr,e)}function k1(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function V1(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function H1(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function G1(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W1(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X1(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q1(i,e){i.uniform1iv(this.addr,e)}function Y1(i,e){i.uniform2iv(this.addr,e)}function j1(i,e){i.uniform3iv(this.addr,e)}function Z1(i,e){i.uniform4iv(this.addr,e)}function J1(i,e){i.uniform1uiv(this.addr,e)}function $1(i,e){i.uniform2uiv(this.addr,e)}function K1(i,e){i.uniform3uiv(this.addr,e)}function Q1(i,e){i.uniform4uiv(this.addr,e)}function eb(i,e,t){let n=this.cache,r=e.length,s=ic(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Od:o=uf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function tb(i,e,t){let n=this.cache,r=e.length,s=ic(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||pf,s[o])}function nb(i,e,t){let n=this.cache,r=e.length,s=ic(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mf,s[o])}function ib(i,e,t){let n=this.cache,r=e.length,s=ic(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ff,s[o])}function rb(i){switch(i){case 5126:return B1;case 35664:return k1;case 35665:return V1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return $1;case 36295:return K1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}var Bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O1(t.type)}},kd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rb(t.type)}},Vd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Fd=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function sb(i,e,t){let n=i.name,r=n.length;for(Fd.lastIndex=0;;){let s=Fd.exec(n),o=Fd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ku(t,c===void 0?new Bd(a,i,e):new kd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Vd(a),Ku(t,u)),t=u}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);sb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ob=37297,ab=0;function lb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ef=new et;function cb(i){ct._getMatrix(ef,ct.workingColorSpace,i);let e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case js:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+lb(i.getShaderSource(e),a)}else return s}function db(i,e){let t=cb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var hb={[dd]:"Linear",[hd]:"Reinhard",[ud]:"Cineon",[Mo]:"ACESFilmic",[pd]:"AgX",[md]:"Neutral",[fd]:"Custom"};function ub(i,e){let t=hb[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kl=new D;function fb(){ct.getLuminanceCoefficients(Kl);let i=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function mb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Io(i){return i!==""}function nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(i){return i.replace(bb,xb)}var _b=new Map;function xb(i,e){let t=rt[e];if(t===void 0){let n=_b.get(e);if(n!==void 0)t=rt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hd(t)}var yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(i){return i.replace(yb,vb)}function vb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function of(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Mb={[vo]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function Sb(i){return Mb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wb={[Yi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE_UV"};function Eb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tb={[wr]:"ENVMAP_MODE_REFRACTION"};function Ab(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rb={[cd]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[yu]:"ENVMAP_BLENDING_ADD"};function Cb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rb[i.combine]||"ENVMAP_BLENDING_NONE"}function Pb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ib(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Sb(t),c=Eb(t),d=Ab(t),u=Cb(t),h=Pb(t),f=pb(t),g=mb(s),y=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(m=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[of(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),o=Hd(o),o=nf(o,t),o=rf(o,t),a=Hd(a),a=nf(a,t),a=rf(a,t),o=sf(o),a=sf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+o,v=S+p+a,R=Qu(r,r.VERTEX_SHADER,M),E=Qu(r,r.FRAGMENT_SHADER,v);r.attachShader(y,R),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(P){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(E)||"",V=N.trim(),A=z.trim(),F=k.trim(),O=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,R,E);else{let le=tf(r,R,"vertex"),he=tf(r,E,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+le+`
`+he)}else V!==""?Ye("WebGLProgram: Program Info Log:",V):(A===""||F==="")&&(G=!1);G&&(P.diagnostics={runnable:O,programLog:V,vertexShader:{log:A,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(R),r.deleteShader(E),b=new vs(r,y),x=gb(r,y)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,ob)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=E,this}var Db=0,Gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wd(e),t.set(e,n)),n}},Wd=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Lb(i,e,t,n,r,s){let o=new as,a=new Gd,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function y(b,x,L,P,N){let z=P.fog,k=N.geometry,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,A=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=e.get(b.envMap||V,A),O=F&&F.mapping===So?F.image.height:null,G=f[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ye("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=le!==void 0?le.length:0,me=0;k.morphAttributes.position!==void 0&&(me=1),k.morphAttributes.normal!==void 0&&(me=2),k.morphAttributes.color!==void 0&&(me=3);let oe,Q,xe,Z;if(G){let Ge=hi[G];oe=Ge.vertexShader,Q=Ge.fragmentShader}else oe=b.vertexShader,Q=b.fragmentShader,a.update(b),xe=a.getVertexShaderID(b),Z=a.getFragmentShaderID(b);let de=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Ue=!!b.map,Ke=!!b.matcap,Be=!!F,se=!!b.aoMap,ce=!!b.lightMap,ae=!!b.bumpMap,Se=!!b.normalMap,C=!!b.displacementMap,He=!!b.emissiveMap,Ce=!!b.metalnessMap,Oe=!!b.roughnessMap,ye=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,B=b.iridescence>0,K=b.sheen>0,ue=b.transmission>0,J=ye&&!!b.anisotropyMap,Ne=T&&!!b.clearcoatMap,ve=T&&!!b.clearcoatNormalMap,ie=T&&!!b.clearcoatRoughnessMap,be=B&&!!b.iridescenceMap,ne=B&&!!b.iridescenceThicknessMap,te=K&&!!b.sheenColorMap,we=K&&!!b.sheenRoughnessMap,Me=!!b.specularMap,_e=!!b.specularColorMap,Fe=!!b.specularIntensityMap,U=ue&&!!b.transmissionMap,X=ue&&!!b.thicknessMap,W=!!b.gradientMap,re=!!b.alphaMap,ee=b.alphaTest>0,q=!!b.alphaHash,pe=!!b.extensions,Te=Vn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Je={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:Q,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:fr,alphaToCoverage:!!b.alphaToCoverage,map:Ue,matcap:Ke,envMap:Be,envMapMode:Be&&F.mapping,envMapCubeUVHeight:O,aoMap:se,lightMap:ce,bumpMap:ae,normalMap:Se,displacementMap:C,emissiveMap:He,normalMapObjectSpace:Se&&b.normalMapType===Su,normalMapTangentSpace:Se&&b.normalMapType===wd,metalnessMap:Ce,roughnessMap:Oe,anisotropy:ye,anisotropyMap:J,clearcoat:T,clearcoatMap:Ne,clearcoatNormalMap:ve,clearcoatRoughnessMap:ie,dispersion:_,iridescence:B,iridescenceMap:be,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:te,sheenRoughnessMap:we,specularMap:Me,specularColorMap:_e,specularIntensityMap:Fe,transmission:ue,transmissionMap:U,thicknessMap:X,gradientMap:W,opaque:b.transparent===!1&&b.blending===hr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:ee,alphaHash:q,combine:b.combine,mapUv:Ue&&g(b.map.channel),aoMapUv:se&&g(b.aoMap.channel),lightMapUv:ce&&g(b.lightMap.channel),bumpMapUv:ae&&g(b.bumpMap.channel),normalMapUv:Se&&g(b.normalMap.channel),displacementMapUv:C&&g(b.displacementMap.channel),emissiveMapUv:He&&g(b.emissiveMap.channel),metalnessMapUv:Ce&&g(b.metalnessMap.channel),roughnessMapUv:Oe&&g(b.roughnessMap.channel),anisotropyMapUv:J&&g(b.anisotropyMap.channel),clearcoatMapUv:Ne&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:te&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(b.sheenRoughnessMap.channel),specularMapUv:Me&&g(b.specularMap.channel),specularColorMapUv:_e&&g(b.specularColorMap.channel),specularIntensityMapUv:Fe&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:X&&g(b.thicknessMap.channel),alphaMapUv:re&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Ue||re),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ue&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:He&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===It,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&b.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function m(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)x.push(L),x.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(p(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function p(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let x=f[b.type],L;if(x){let P=hi[x];L=ku.clone(P.uniforms)}else L=b.uniforms;return L}function v(b,x){let L=d.get(x);return L!==void 0?++L.usedTimes:(L=new Ib(i,x,b,r),c.push(L),d.set(x,L)),L}function R(b){if(--b.usedTimes===0){let x=c.indexOf(b);c[x]=c[c.length-1],c.pop(),d.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:I}}function Nb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Ub(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,y,m,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,y,m,p){let S=a(h,f,g,y,m,p);g.transmission>0?n.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(h,f,g,y,m,p){let S=a(h,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,f){t.length>1&&t.sort(h||Ub),n.length>1&&n.sort(f||af),r.length>1&&r.sort(f||af)}function u(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function Fb(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new lf,i.set(n,[o])):r>=s.length?(o=new lf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ot};break;case"SpotLight":t={position:new D,direction:new D,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ob(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bb=0;function kb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vb(i){let e=new zb,t=Ob(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new at,o=new at;function a(c){let d=0,u=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,M=0,v=0,R=0,E=0,I=0;c.sort(kb);for(let x=0,L=c.length;x<L;x++){let P=c[x],N=P.color,z=P.intensity,k=P.distance,V=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Er?V=P.shadow.map.texture:V=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*z,u+=N.g*z,h+=N.b*z;else if(P.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(P.sh.coefficients[A],z);I++}else if(P.isDirectionalLight){let A=e.get(P);if(A.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,O=t.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=A,f++}else if(P.isSpotLight){let A=e.get(P);A.position.setFromMatrixPosition(P.matrixWorld),A.color.copy(N).multiplyScalar(z),A.distance=k,A.coneCos=Math.cos(P.angle),A.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),A.decay=P.decay,n.spot[y]=A;let F=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,F.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[y]=F.matrix,P.castShadow){let O=t.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=V,v++}y++}else if(P.isRectAreaLight){let A=e.get(P);A.color.copy(N).multiplyScalar(z),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=A,m++}else if(P.isPointLight){let A=e.get(P);if(A.color.copy(P.color).multiplyScalar(P.intensity),A.distance=P.distance,A.decay=P.decay,P.castShadow){let F=P.shadow,O=t.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=A,g++}else if(P.isHemisphereLight){let A=e.get(P);A.skyColor.copy(P.color).multiplyScalar(z),A.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=A,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let b=n.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==R||b.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,b.directionalLength=f,b.pointLength=g,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=R,b.numLightProbes=I,n.version=Bb++)}function l(c,d){let u=0,h=0,f=0,g=0,y=0,m=d.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let M=c[p];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(M.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function cf(i){let e=new Vb(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new cf(i),e.set(r,[a])):s>=o.length?(a=new cf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`,Xb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],qb=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],df=new at,Po=new D,zd=new D;function Yb(i,e,t){let n=new ds,r=new ge,s=new ge,o=new Tt,a=new ja,l=new Za,c={},d=t.maxTextureSize,u={[vi]:fn,[fn]:vi,[It]:It},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Gb,fragmentShader:Wb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let p=this.type;this.render=function(E,I,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===eu&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vo);let x=i.getRenderTarget(),L=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(li),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=p!==this.type;z&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(V=>V.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,V=E.length;k<V;k++){let A=E[k],F=A.shadow;if(F===void 0){Ye("WebGLShadowMap:",A,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let O=F.getFrameExtents();r.multiply(O),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,F.mapSize.y=s.y));let G=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===bs){if(A.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vn(r.x,r.y,{format:Er,type:ci,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),F.map.texture.name=A.name+".shadowMap",F.map.depthTexture=new ki(r.x,r.y,Gn),F.map.depthTexture.name=A.name+".shadowMapDepth",F.map.depthTexture.format=ii,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt}else A.isPointLight?(F.map=new ec(r.x),F.map.depthTexture=new Va(r.x,Hn)):(F.map=new vn(r.x,r.y),F.map.depthTexture=new ki(r.x,r.y,Hn)),F.map.depthTexture.name=A.name+".shadowMap",F.map.depthTexture.format=ii,this.type===vo?(F.map.depthTexture.compareFunction=G?Jl:Zl,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt);F.camera.updateProjectionMatrix()}let le=F.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<le;he++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,he),i.clear();else{he===0&&(i.setRenderTarget(F.map),i.clear());let me=F.getViewport(he);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),N.viewport(o)}if(A.isPointLight){let me=F.camera,oe=F.matrix,Q=A.distance||me.far;Q!==me.far&&(me.far=Q,me.updateProjectionMatrix()),Po.setFromMatrixPosition(A.matrixWorld),me.position.copy(Po),zd.copy(me.position),zd.add(Xb[he]),me.up.copy(qb[he]),me.lookAt(zd),me.updateMatrixWorld(),oe.makeTranslation(-Po.x,-Po.y,-Po.z),df.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),F._frustum.setFromProjectionMatrix(df,me.coordinateSystem,me.reversedDepth)}else F.updateMatrices(A);n=F.getFrustum(),v(I,b,F.camera,A,this.type)}F.isPointLightShadow!==!0&&this.type===bs&&S(F,b),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,L,P)};function S(E,I){let b=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vn(r.x,r.y,{format:Er,type:ci})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,b,h,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,b,f,y,null)}function M(E,I,b,x){let L=null,P=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)L=P;else if(L=b.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let N=L.uuid,z=I.uuid,k=c[N];k===void 0&&(k={},c[N]=k);let V=k[z];V===void 0&&(V=L.clone(),k[z]=V,I.addEventListener("dispose",R)),L=V}if(L.visible=I.visible,L.wireframe=I.wireframe,x===bs?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:u[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let N=i.properties.get(L);N.light=b}return L}function v(E,I,b,x,L){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===bs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let z=e.update(E),k=E.material;if(Array.isArray(k)){let V=z.groups;for(let A=0,F=V.length;A<F;A++){let O=V[A],G=k[O.materialIndex];if(G&&G.visible){let le=M(E,G,x,L);E.onBeforeShadow(i,E,I,b,z,le,O),i.renderBufferDirect(b,null,z,le,E,O),E.onAfterShadow(i,E,I,b,z,le,O)}}}else if(k.visible){let V=M(E,k,x,L);E.onBeforeShadow(i,E,I,b,z,V,null),i.renderBufferDirect(b,null,z,V,E,null),E.onAfterShadow(i,E,I,b,z,V,null)}}let N=E.children;for(let z=0,k=N.length;z<k;z++)v(N[z],I,b,x,L)}function R(E){E.target.removeEventListener("dispose",R);for(let b in c){let x=c[b],L=E.target.uuid;L in x&&(x[L].dispose(),delete x[L])}}}function jb(i,e){function t(){let U=!1,X=new Tt,W=null,re=new Tt(0,0,0,0);return{setMask:function(ee){W!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),W=ee)},setLocked:function(ee){U=ee},setClear:function(ee,q,pe,Te,Je){Je===!0&&(ee*=Te,q*=Te,pe*=Te),X.set(ee,q,pe,Te),re.equals(X)===!1&&(i.clearColor(ee,q,pe,Te),re.copy(X))},reset:function(){U=!1,W=null,re.set(-1,0,0,0)}}}function n(){let U=!1,X=!1,W=null,re=null,ee=null;return{setReversed:function(q){if(X!==q){let pe=e.get("EXT_clip_control");q?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),X=q;let Te=ee;ee=null,this.setClear(Te)}},getReversed:function(){return X},setTest:function(q){q?de(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(q){W!==q&&!U&&(i.depthMask(q),W=q)},setFunc:function(q){if(X&&(q=Lu[q]),re!==q){switch(q){case wa:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=q}},setLocked:function(q){U=q},setClear:function(q){ee!==q&&(ee=q,X&&(q=1-q),i.clearDepth(q))},reset:function(){U=!1,W=null,re=null,ee=null,X=!1}}}function r(){let U=!1,X=null,W=null,re=null,ee=null,q=null,pe=null,Te=null,Je=null;return{setTest:function(Ge){U||(Ge?de(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Ge){X!==Ge&&!U&&(i.stencilMask(Ge),X=Ge)},setFunc:function(Ge,cn,Kt){(W!==Ge||re!==cn||ee!==Kt)&&(i.stencilFunc(Ge,cn,Kt),W=Ge,re=cn,ee=Kt)},setOp:function(Ge,cn,Kt){(q!==Ge||pe!==cn||Te!==Kt)&&(i.stencilOp(Ge,cn,Kt),q=Ge,pe=cn,Te=Kt)},setLocked:function(Ge){U=Ge},setClear:function(Ge){Je!==Ge&&(i.clearStencil(Ge),Je=Ge)},reset:function(){U=!1,X=null,W=null,re=null,ee=null,q=null,pe=null,Te=null,Je=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,S=null,M=null,v=null,R=null,E=null,I=new ot(0,0,0),b=0,x=!1,L=null,P=null,N=null,z=null,k=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,F=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),A=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),A=F>=2);let G=null,le={},he=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),oe=new Tt().fromArray(he),Q=new Tt().fromArray(me);function xe(U,X,W,re){let ee=new Uint8Array(4),q=i.createTexture();i.bindTexture(U,q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<W;pe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(X+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return q}let Z={};Z[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(ur),ae(!1),Se(sd),de(i.CULL_FACE),se(li);function de(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function fe(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function Le(U,X){return u[U]!==X?(i.bindFramebuffer(U,X),u[U]=X,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=X),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=X),!0):!1}function Re(U,X){let W=f,re=!1;if(U){W=h.get(X),W===void 0&&(W=[],h.set(X,W));let ee=U.textures;if(W.length!==ee.length||W[0]!==i.COLOR_ATTACHMENT0){for(let q=0,pe=ee.length;q<pe;q++)W[q]=i.COLOR_ATTACHMENT0+q;W.length=ee.length,re=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,re=!0);re&&i.drawBuffers(W)}function Ue(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Ke={[zi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};Ke[ru]=i.MIN,Ke[su]=i.MAX;let Be={[ou]:i.ZERO,[au]:i.ONE,[lu]:i.SRC_COLOR,[Ma]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[du]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[Sa]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[bu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function se(U,X,W,re,ee,q,pe,Te,Je,Ge){if(U===li){y===!0&&(fe(i.BLEND),y=!1);return}if(y===!1&&(de(i.BLEND),y=!0),U!==tu){if(U!==m||Ge!==x){if((p!==zi||v!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,v=zi),Ge)switch(U){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case od:i.blendFunc(i.ONE,i.ONE);break;case ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ld:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",U);break}else switch(U){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case od:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ad:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ld:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",U);break}S=null,M=null,R=null,E=null,I.set(0,0,0),b=0,m=U,x=Ge}return}ee=ee||X,q=q||W,pe=pe||re,(X!==p||ee!==v)&&(i.blendEquationSeparate(Ke[X],Ke[ee]),p=X,v=ee),(W!==S||re!==M||q!==R||pe!==E)&&(i.blendFuncSeparate(Be[W],Be[re],Be[q],Be[pe]),S=W,M=re,R=q,E=pe),(Te.equals(I)===!1||Je!==b)&&(i.blendColor(Te.r,Te.g,Te.b,Je),I.copy(Te),b=Je),m=U,x=!1}function ce(U,X){U.side===It?fe(i.CULL_FACE):de(i.CULL_FACE);let W=U.side===fn;X&&(W=!W),ae(W),U.blending===hr&&U.transparent===!1?se(li):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let re=U.stencilWrite;a.setTest(re),re&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function Se(U){U!==Kh?(de(i.CULL_FACE),U!==P&&(U===sd?i.cullFace(i.BACK):U===Qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=U}function C(U){U!==N&&(A&&i.lineWidth(U),N=U)}function He(U,X,W){U?(de(i.POLYGON_OFFSET_FILL),(z!==X||k!==W)&&(z=X,k=W,o.getReversed()&&(X=-X),i.polygonOffset(X,W))):fe(i.POLYGON_OFFSET_FILL)}function Ce(U){U?de(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Oe(U){U===void 0&&(U=i.TEXTURE0+V-1),G!==U&&(i.activeTexture(U),G=U)}function ye(U,X,W){W===void 0&&(G===null?W=i.TEXTURE0+V-1:W=G);let re=le[W];re===void 0&&(re={type:void 0,texture:void 0},le[W]=re),(re.type!==U||re.texture!==X)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(U,X||Z[U]),re.type=U,re.texture=X)}function T(){let U=le[G];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function ue(){try{i.texSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function ve(){try{i.texStorage2D(...arguments)}catch(U){je("WebGLState:",U)}}function ie(){try{i.texStorage3D(...arguments)}catch(U){je("WebGLState:",U)}}function be(){try{i.texImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function te(U){oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function we(U){Q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Me(U,X){let W=c.get(X);W===void 0&&(W=new WeakMap,c.set(X,W));let re=W.get(U);re===void 0&&(re=i.getUniformBlockIndex(X,U.name),W.set(U,re))}function _e(U,X){let re=c.get(X).get(U);l.get(X)!==re&&(i.uniformBlockBinding(X,re,U.__bindingPointIndex),l.set(X,re))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},G=null,le={},u={},h=new WeakMap,f=[],g=null,y=!1,m=null,p=null,S=null,M=null,v=null,R=null,E=null,I=new ot(0,0,0),b=0,x=!1,L=null,P=null,N=null,z=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:fe,bindFramebuffer:Le,drawBuffers:Re,useProgram:Ue,setBlending:se,setMaterial:ce,setFlipSided:ae,setCullFace:Se,setLineWidth:C,setPolygonOffset:He,setScissorTest:Ce,activeTexture:Oe,bindTexture:ye,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:be,texImage3D:ne,updateUBOMapping:Me,uniformBlockBinding:_e,texStorage2D:ve,texStorage3D:ie,texSubImage2D:K,texSubImage3D:ue,compressedTexSubImage2D:J,compressedTexSubImage3D:Ne,scissor:te,viewport:we,reset:Fe}}function Zb(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Zs("canvas")}function y(T,_,B){let K=1,ue=ye(T);if((ue.width>B||ue.height>B)&&(K=B/Math.max(ue.width,ue.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(K*ue.width),Ne=Math.floor(K*ue.height);u===void 0&&(u=g(J,Ne));let ve=_?g(J,Ne):u;return ve.width=J,ve.height=Ne,ve.getContext("2d").drawImage(T,0,0,J,Ne),Ye("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+J+"x"+Ne+")."),ve}else return"data"in T&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,B,K,ue=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=_;if(_===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),_===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),_===i.RGBA){let Ne=ue?js:ct.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Ne===pt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(T,_){let B;return T?_===null||_===Hn||_===xs?B=i.DEPTH24_STENCIL8:_===Gn?B=i.DEPTH32F_STENCIL8:_===_s&&(B=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===xs?B=i.DEPTH_COMPONENT24:_===Gn?B=i.DEPTH_COMPONENT32F:_===_s&&(B=i.DEPTH_COMPONENT16),B}function R(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Gt&&T.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),b(_),_.isVideoTexture&&d.delete(_)}function I(T){let _=T.target;_.removeEventListener("dispose",I),L(_)}function b(T){let _=n.get(T);if(_.__webglInit===void 0)return;let B=T.source,K=h.get(B);if(K){let ue=K[_.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(T),Object.keys(K).length===0&&h.delete(B)}n.remove(T)}function x(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let B=T.source,K=h.get(B);delete K[_.__cacheKey],o.memory.textures--}function L(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let ue=0;ue<_.__webglFramebuffer[K].length;ue++)i.deleteFramebuffer(_.__webglFramebuffer[K][ue]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let K=0,ue=B.length;K<ue;K++){let J=n.get(B[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(T)}let P=0;function N(){P=0}function z(){let T=P;return T>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function k(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function V(T,_){let B=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let K=T.image;if(K===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function A(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Z(B,T,_);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function F(T,_){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Z(B,T,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function O(T,_){let B=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){de(B,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let G={[Ia]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[Da]:i.MIRRORED_REPEAT},le={[Gt]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Yt]:i.LINEAR,[dl]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},he={[wu]:i.NEVER,[Cu]:i.ALWAYS,[Eu]:i.LESS,[Zl]:i.LEQUAL,[Tu]:i.EQUAL,[Jl]:i.GEQUAL,[Au]:i.GREATER,[Ru]:i.NOTEQUAL};function me(T,_){if(_.type===Gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===dl||_.magFilter===wo||_.magFilter===ji||_.minFilter===Yt||_.minFilter===dl||_.minFilter===wo||_.minFilter===ji)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,G[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,G[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,G[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==wo&&_.minFilter!==ji||_.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function oe(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let K=_.source,ue=h.get(K);ue===void 0&&(ue={},h.set(K,ue));let J=k(_);if(J!==T.__cacheKey){ue[J]===void 0&&(ue[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ue[J].usedTimes++;let Ne=ue[T.__cacheKey];Ne!==void 0&&(ue[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(_)),T.__cacheKey=J,T.__webglTexture=ue[J].texture}return B}function Q(T,_,B){return Math.floor(Math.floor(T/B)/_)}function xe(T,_,B,K){let J=T.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,K,_.data);else{J.sort((ne,te)=>ne.start-te.start);let Ne=0;for(let ne=1;ne<J.length;ne++){let te=J[Ne],we=J[ne],Me=te.start+te.count,_e=Q(we.start,_.width,4),Fe=Q(te.start,_.width,4);we.start<=Me+1&&_e===Fe&&Q(we.start+we.count-1,_.width,4)===_e?te.count=Math.max(te.count,we.start+we.count-te.start):(++Ne,J[Ne]=we)}J.length=Ne+1;let ve=i.getParameter(i.UNPACK_ROW_LENGTH),ie=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ne=0,te=J.length;ne<te;ne++){let we=J[ne],Me=Math.floor(we.start/4),_e=Math.ceil(we.count/4),Fe=Me%_.width,U=Math.floor(Me/_.width),X=_e,W=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Fe,U,X,W,B,K,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ve),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Z(T,_,B){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);let ue=oe(T,_),J=_.source;t.bindTexture(K,T.__webglTexture,i.TEXTURE0+B);let Ne=n.get(J);if(J.version!==Ne.__version||ue===!0){t.activeTexture(i.TEXTURE0+B);let ve=ct.getPrimaries(ct.workingColorSpace),ie=_.colorSpace===Si?null:ct.getPrimaries(_.colorSpace),be=_.colorSpace===Si||ve===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=y(_.image,!1,r.maxTextureSize);ne=Oe(_,ne);let te=s.convert(_.format,_.colorSpace),we=s.convert(_.type),Me=M(_.internalFormat,te,we,_.colorSpace,_.isVideoTexture);me(K,_);let _e,Fe=_.mipmaps,U=_.isVideoTexture!==!0,X=Ne.__version===void 0||ue===!0,W=J.dataReady,re=R(_,ne);if(_.isDepthTexture)Me=v(_.format===Zi,_.type),X&&(U?t.texStorage2D(i.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,te,we,null));else if(_.isDataTexture)if(Fe.length>0){U&&X&&t.texStorage2D(i.TEXTURE_2D,re,Me,Fe[0].width,Fe[0].height);for(let ee=0,q=Fe.length;ee<q;ee++)_e=Fe[ee],U?W&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,_e.width,_e.height,te,we,_e.data):t.texImage2D(i.TEXTURE_2D,ee,Me,_e.width,_e.height,0,te,we,_e.data);_.generateMipmaps=!1}else U?(X&&t.texStorage2D(i.TEXTURE_2D,re,Me,ne.width,ne.height),W&&xe(_,ne,te,we)):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,te,we,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&X&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Me,Fe[0].width,Fe[0].height,ne.depth);for(let ee=0,q=Fe.length;ee<q;ee++)if(_e=Fe[ee],_.format!==Pn)if(te!==null)if(U){if(W)if(_.layerUpdates.size>0){let pe=Id(_e.width,_e.height,_.format,_.type);for(let Te of _.layerUpdates){let Je=_e.data.subarray(Te*pe/_e.data.BYTES_PER_ELEMENT,(Te+1)*pe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Te,_e.width,_e.height,1,te,Je)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ne.depth,te,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Me,_e.width,_e.height,ne.depth,0,_e.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,ne.depth,te,we,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Me,_e.width,_e.height,ne.depth,0,te,we,_e.data)}else{U&&X&&t.texStorage2D(i.TEXTURE_2D,re,Me,Fe[0].width,Fe[0].height);for(let ee=0,q=Fe.length;ee<q;ee++)_e=Fe[ee],_.format!==Pn?te!==null?U?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,_e.width,_e.height,te,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Me,_e.width,_e.height,0,_e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?W&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,_e.width,_e.height,te,we,_e.data):t.texImage2D(i.TEXTURE_2D,ee,Me,_e.width,_e.height,0,te,we,_e.data)}else if(_.isDataArrayTexture)if(U){if(X&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Me,ne.width,ne.height,ne.depth),W)if(_.layerUpdates.size>0){let ee=Id(ne.width,ne.height,_.format,_.type);for(let q of _.layerUpdates){let pe=ne.data.subarray(q*ee/ne.data.BYTES_PER_ELEMENT,(q+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,te,we,pe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,te,we,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,te,we,ne.data);else if(_.isData3DTexture)U?(X&&t.texStorage3D(i.TEXTURE_3D,re,Me,ne.width,ne.height,ne.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,te,we,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,te,we,ne.data);else if(_.isFramebufferTexture){if(X)if(U)t.texStorage2D(i.TEXTURE_2D,re,Me,ne.width,ne.height);else{let ee=ne.width,q=ne.height;for(let pe=0;pe<re;pe++)t.texImage2D(i.TEXTURE_2D,pe,Me,ee,q,0,te,we,null),ee>>=1,q>>=1}}else if(Fe.length>0){if(U&&X){let ee=ye(Fe[0]);t.texStorage2D(i.TEXTURE_2D,re,Me,ee.width,ee.height)}for(let ee=0,q=Fe.length;ee<q;ee++)_e=Fe[ee],U?W&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,te,we,_e):t.texImage2D(i.TEXTURE_2D,ee,Me,te,we,_e);_.generateMipmaps=!1}else if(U){if(X){let ee=ye(ne);t.texStorage2D(i.TEXTURE_2D,re,Me,ee.width,ee.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,we,ne)}else t.texImage2D(i.TEXTURE_2D,0,Me,te,we,ne);m(_)&&p(K),Ne.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function de(T,_,B){if(_.image.length!==6)return;let K=oe(T,_),ue=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let J=n.get(ue);if(ue.version!==J.__version||K===!0){t.activeTexture(i.TEXTURE0+B);let Ne=ct.getPrimaries(ct.workingColorSpace),ve=_.colorSpace===Si?null:ct.getPrimaries(_.colorSpace),ie=_.colorSpace===Si||Ne===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let be=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,te=[];for(let q=0;q<6;q++)!be&&!ne?te[q]=y(_.image[q],!0,r.maxCubemapSize):te[q]=ne?_.image[q].image:_.image[q],te[q]=Oe(_,te[q]);let we=te[0],Me=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),Fe=M(_.internalFormat,Me,_e,_.colorSpace),U=_.isVideoTexture!==!0,X=J.__version===void 0||K===!0,W=ue.dataReady,re=R(_,we);me(i.TEXTURE_CUBE_MAP,_);let ee;if(be){U&&X&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Fe,we.width,we.height);for(let q=0;q<6;q++){ee=te[q].mipmaps;for(let pe=0;pe<ee.length;pe++){let Te=ee[pe];_.format!==Pn?Me!==null?U?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Te.width,Te.height,Me,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Fe,Te.width,Te.height,0,Te.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Te.width,Te.height,Me,_e,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,Fe,Te.width,Te.height,0,Me,_e,Te.data)}}}else{if(ee=_.mipmaps,U&&X){ee.length>0&&re++;let q=ye(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Fe,q.width,q.height)}for(let q=0;q<6;q++)if(ne){U?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,te[q].width,te[q].height,Me,_e,te[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,te[q].width,te[q].height,0,Me,_e,te[q].data);for(let pe=0;pe<ee.length;pe++){let Je=ee[pe].image[q].image;U?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Je.width,Je.height,Me,_e,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Fe,Je.width,Je.height,0,Me,_e,Je.data)}}else{U?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,_e,te[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Fe,Me,_e,te[q]);for(let pe=0;pe<ee.length;pe++){let Te=ee[pe];U?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Me,_e,Te.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,Fe,Me,_e,Te.image[q])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),J.__version=ue.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function fe(T,_,B,K,ue,J){let Ne=s.convert(B.format,B.colorSpace),ve=s.convert(B.type),ie=M(B.internalFormat,Ne,ve,B.colorSpace),be=n.get(_),ne=n.get(B);if(ne.__renderTarget=_,!be.__hasExternalTextures){let te=Math.max(1,_.width>>J),we=Math.max(1,_.height>>J);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,J,ie,te,we,_.depth,0,Ne,ve,null):t.texImage2D(ue,J,ie,te,we,0,Ne,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ue,ne.__webglTexture,0,C(_)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ue,ne.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(T,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let K=_.depthTexture,ue=K&&K.isDepthTexture?K.type:null,J=v(_.stencilBuffer,ue),Ne=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),J,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,T)}else{let K=_.textures;for(let ue=0;ue<K.length;ue++){let J=K[ue],Ne=s.convert(J.format,J.colorSpace),ve=s.convert(J.type),ie=M(J.internalFormat,Ne,ve,J.colorSpace);He(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),ie,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),ie,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ie,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(T,_,B){let K=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ue=n.get(_.depthTexture);if(ue.__renderTarget=_,(!ue.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),ue.__webglTexture===void 0){ue.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),me(i.TEXTURE_CUBE_MAP,_.depthTexture);let be=s.convert(_.depthTexture.format),ne=s.convert(_.depthTexture.type),te;_.depthTexture.format===ii?te=i.DEPTH_COMPONENT24:_.depthTexture.format===Zi&&(te=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,te,_.width,_.height,0,be,ne,null)}}else V(_.depthTexture,0);let J=ue.__webglTexture,Ne=C(_),ve=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ie=_.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ii)He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ve,J,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ve,J,0);else if(_.depthTexture.format===Zi)He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ve,J,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,ie,ve,J,0);else throw new Error("Unknown depthTexture format")}function Ue(T){let _=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let ue=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",ue)};K.addEventListener("dispose",ue),_.__depthDisposeCallback=ue}_.__boundDepthTexture=K}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)Re(_.__webglFramebuffer[K],T,K);else{let K=T.texture.mipmaps;K&&K.length>0?Re(_.__webglFramebuffer[0],T,0):Re(_.__webglFramebuffer,T,0)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),Le(_.__webglDepthbuffer[K],T,!1);else{let ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,J)}}else{let K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Le(_.__webglDepthbuffer,T,!1);else{let ue=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(T,_,B){let K=n.get(T);_!==void 0&&fe(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ue(T)}function Be(T){let _=T.texture,B=n.get(T),K=n.get(_);T.addEventListener("dispose",I);let ue=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ne=ue.length>1;if(Ne||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ve]=[];for(let ie=0;ie<_.mipmaps.length;ie++)B.__webglFramebuffer[ve][ie]=i.createFramebuffer()}else B.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)B.__webglFramebuffer[ve]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let ve=0,ie=ue.length;ve<ie;ve++){let be=n.get(ue[ve]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&He(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<ue.length;ve++){let ie=ue[ve];B.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);let be=s.convert(ie.format,ie.colorSpace),ne=s.convert(ie.type),te=M(ie.internalFormat,be,ne,ie.colorSpace,T.isXRRenderTarget===!0),we=C(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),me(i.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)fe(B.__webglFramebuffer[ve][ie],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ie);else fe(B.__webglFramebuffer[ve],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ve=0,ie=ue.length;ve<ie;ve++){let be=ue[ve],ne=n.get(be),te=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(te=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,ne.__webglTexture),me(te,be),fe(B.__webglFramebuffer,T,be,i.COLOR_ATTACHMENT0+ve,te,0),m(be)&&p(te)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,K.__webglTexture),me(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)fe(B.__webglFramebuffer[ie],T,_,i.COLOR_ATTACHMENT0,ve,ie);else fe(B.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ve,0);m(_)&&p(ve),t.unbindTexture()}T.depthBuffer&&Ue(T)}function se(T){let _=T.textures;for(let B=0,K=_.length;B<K;B++){let ue=_[B];if(m(ue)){let J=S(T),Ne=n.get(ue).__webglTexture;t.bindTexture(J,Ne),p(J),t.unbindTexture()}}}let ce=[],ae=[];function Se(T){if(T.samples>0){if(He(T)===!1){let _=T.textures,B=T.width,K=T.height,ue=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(T),ve=_.length>1;if(ve)for(let be=0;be<_.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);let ie=T.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let be=0;be<_.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[be]);let ne=n.get(_[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,ue,i.NEAREST),l===!0&&(ce.length=0,ae.length=0,ce.push(i.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ce.push(J),ae.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let be=0;be<_.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[be]);let ne=n.get(_[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C(T){return Math.min(r.maxSamples,T.samples)}function He(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ce(T){let _=o.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function Oe(T,_){let B=T.colorSpace,K=T.format,ue=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==fr&&B!==Si&&(ct.getTransfer(B)===pt?(K!==Pn||ue!==gn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",B)),_}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=A,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=Ke,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jb(i,e){function t(n,r=Si){let s,o=ct.getTransfer(r);if(n===gn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bd)return i.BYTE;if(n===_d)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===vd)return i.ALPHA;if(n===Md)return i.RGB;if(n===Pn)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Sd)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===Er)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Eo||n===To||n===Ao||n===Ro)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===_l||n===xl||n===yl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===Ml||n===Sl||n===wl||n===El||n===Tl||n===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vl||n===Ml)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wl)return s.COMPRESSED_R11_EAC;if(n===El)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Tl)return s.COMPRESSED_RG11_EAC;if(n===Al)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rl||n===Cl||n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===Fl||n===zl||n===Ol||n===Bl||n===kl||n===Vl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ol)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Gl||n===Wl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Hl)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
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

}`,Xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:$b,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends ri{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Xd,p={},S=t.getContextAttributes(),M=null,v=null,R=[],E=[],I=new ge,b=null,x=new nn;x.viewport=new Tt;let L=new nn;L.viewport=new Tt;let P=[x,L],N=new al,z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=R[Z];return de===void 0&&(de=new ls,R[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=R[Z];return de===void 0&&(de=new ls,R[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=R[Z];return de===void 0&&(de=new ls,R[Z]=de),de.getHandSpace()};function V(Z){let de=E.indexOf(Z.inputSource);if(de===-1)return;let fe=R[de];fe!==void 0&&(fe.update(Z.inputSource,Z.frame,c||o),fe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function A(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<R.length;Z++){let de=E[Z];de!==null&&(E[Z]=null,R[Z].disconnect(de))}z=null,k=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(M),f=null,h=null,u=null,r=null,v=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",A),r.addEventListener("inputsourceschange",F),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Zi:ii,Le=S.stencil?xs:Hn);let Ue={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new vn(h.textureWidth,h.textureHeight,{format:Pn,type:gn,depthTexture:new ki(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(Z){for(let de=0;de<Z.removed.length;de++){let fe=Z.removed[de],Le=E.indexOf(fe);Le>=0&&(E[Le]=null,R[Le].disconnect(fe))}for(let de=0;de<Z.added.length;de++){let fe=Z.added[de],Le=E.indexOf(fe);if(Le===-1){for(let Ue=0;Ue<R.length;Ue++)if(Ue>=E.length){E.push(fe),Le=Ue;break}else if(E[Ue]===null){E[Ue]=fe,Le=Ue;break}if(Le===-1)break}let Re=R[Le];Re&&Re.connect(fe)}}let O=new D,G=new D;function le(Z,de,fe){O.setFromMatrixPosition(de.matrixWorld),G.setFromMatrixPosition(fe.matrixWorld);let Le=O.distanceTo(G),Re=de.projectionMatrix.elements,Ue=fe.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),Be=Re[14]/(Re[10]+1),se=(Re[9]+1)/Re[5],ce=(Re[9]-1)/Re[5],ae=(Re[8]-1)/Re[0],Se=(Ue[8]+1)/Ue[0],C=Ke*ae,He=Ke*Se,Ce=Le/(-ae+Se),Oe=Ce*-ae;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Oe),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let ye=Ke+Ce,T=Be+Ce,_=C-Oe,B=He+(Le-Oe),K=se*Be/T*ye,ue=ce*Be/T*ye;Z.projectionMatrix.makePerspective(_,B,K,ue,ye,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function he(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let de=Z.near,fe=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=L.near=x.near=de,N.far=L.far=x.far=fe,(z!==N.near||k!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,k=N.far),N.layers.mask=Z.layers.mask|6,x.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let Le=Z.parent,Re=N.cameras;he(N,Le);for(let Ue=0;Ue<Re.length;Ue++)he(Re[Ue],Le);Re.length===2?le(N,x,L):N.projectionMatrix.copy(x.projectionMatrix),me(Z,N,Le)};function me(Z,de,fe){fe===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(fe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ss*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return p[Z]};let oe=null;function Q(Z,de){if(d=de.getViewerPose(c||o),g=de,d!==null){let fe=d.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Le=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Le=!0);for(let Be=0;Be<fe.length;Be++){let se=fe[Be],ce=null;if(f!==null)ce=f.getViewport(se);else{let Se=u.getViewSubImage(h,se);ce=Se.viewport,Be===0&&(e.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(v))}let ae=P[Be];ae===void 0&&(ae=new nn,ae.layers.enable(Be),ae.viewport=new Tt,P[Be]=ae),ae.matrix.fromArray(se.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(se.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ce.x,ce.y,ce.width,ce.height),Be===0&&(N.matrix.copy(ae.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Le===!0&&N.cameras.push(ae)}let Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Be=u.getDepthInformation(fe[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Be=0;Be<fe.length;Be++){let se=fe[Be].camera;if(se){let ce=p[se];ce||(ce=new ro,p[se]=ce);let ae=u.getCameraImage(se);ce.sourceTexture=ae}}}}for(let fe=0;fe<R.length;fe++){let Le=E[fe],Re=R[fe];Le!==null&&Re!==void 0&&Re.update(Le,de,c||o)}oe&&oe(Z,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let xe=new hf;xe.setAnimationLoop(Q),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}},Rr=new kn,Qb=new at;function e_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,M,v){p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,Rr.copy(v),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),m.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(Rr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function t_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=r[S.id];v===void 0&&(g(S),v=d(S),r[S.id]=v,S.addEventListener("dispose",m));let R=M.program;n.updateUBOMapping(S,R);let E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function d(S){let M=u();S.__bindingPointIndex=M;let v=i.createBuffer(),R=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],v=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,I=v.length;E<I;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,L=b.length;x<L;x++){let P=b[x];if(f(P,E,x,R)===!0){let N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],k=0;for(let V=0;V<z.length;V++){let A=z[V],F=y(A);typeof A=="number"||typeof A=="boolean"?(P.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,N+k,P.__data)):A.isMatrix3?(P.__data[0]=A.elements[0],P.__data[1]=A.elements[1],P.__data[2]=A.elements[2],P.__data[3]=0,P.__data[4]=A.elements[3],P.__data[5]=A.elements[4],P.__data[6]=A.elements[5],P.__data[7]=0,P.__data[8]=A.elements[6],P.__data[9]=A.elements[7],P.__data[10]=A.elements[8],P.__data[11]=0):(A.toArray(P.__data,k),k+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,v,R){let E=S.value,I=M+"_"+v;if(R[I]===void 0)return typeof E=="number"||typeof E=="boolean"?R[I]=E:R[I]=E.clone(),!0;{let b=R[I];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return R[I]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(S){let M=S.uniforms,v=0,R=16;for(let I=0,b=M.length;I<b;I++){let x=Array.isArray(M[I])?M[I]:[M[I]];for(let L=0,P=x.length;L<P;L++){let N=x[L],z=Array.isArray(N.value)?N.value:[N.value];for(let k=0,V=z.length;k<V;k++){let A=z[k],F=y(A),O=v%R,G=O%F.boundary,le=O+G;v+=G,le!==0&&R-le<F.storage&&(v+=R-le),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=F.storage}}}let E=v%R;return E>0&&(v+=R-E),S.__size=v,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function i_(){return di===null&&(di=new Oa(n_,16,16,Er,ci),di.name="DFG_LUT",di.minFilter=Yt,di.magFilter=Yt,di.wrapS=ti,di.wrapT=ti,di.generateMipmaps=!1,di.needsUpdate=!0),di}var tc=class{constructor(e={}){let{canvas:t=Pu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([gl,ml,pl]),p=new Set([gn,Hn,_s,xs,ul,fl]),S=new Uint32Array(4),M=new Int32Array(4),v=null,R=null,E=[],I=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,L=!1;this._outputColorSpace=Ut;let P=0,N=0,z=null,k=-1,V=null,A=new Tt,F=new Tt,O=null,G=new ot(0),le=0,he=t.width,me=t.height,oe=1,Q=null,xe=null,Z=new Tt(0,0,he,me),de=new Tt(0,0,he,me),fe=!1,Le=new ds,Re=!1,Ue=!1,Ke=new at,Be=new D,se=new Tt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Se(){return z===null?oe:1}let C=n;function He(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Je,!1),C===null){let H="webgl2";if(C=He(H,w),C===null)throw He(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw je("WebGLRenderer: "+w.message),w}let Ce,Oe,ye,T,_,B,K,ue,J,Ne,ve,ie,be,ne,te,we,Me,_e,Fe,U,X,W,re;function ee(){Ce=new h1(C),Ce.init(),X=new Jb(C,Ce),Oe=new i1(C,Ce,e,X),ye=new jb(C,Ce),Oe.reversedDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),T=new p1(C),_=new Nb,B=new Zb(C,Ce,ye,_,Oe,X,T),K=new d1(x),ue=new x0(C),W=new t1(C,ue),J=new u1(C,ue,T,W),Ne=new g1(C,J,ue,W,T),_e=new m1(C,Oe,B),te=new r1(_),ve=new Lb(x,K,Ce,Oe,W,te),ie=new e_(x,_),be=new Fb,ne=new Hb(Ce),Me=new e1(x,K,ye,Ne,g,l),we=new Yb(x,Ne,Oe),re=new t_(C,T,Oe,ye),Fe=new n1(C,Ce,T),U=new f1(C,Ce,T),T.programs=ve.programs,x.capabilities=Oe,x.extensions=Ce,x.properties=_,x.renderLists=be,x.shadowMap=we,x.state=ye,x.info=T}ee(),y!==gn&&(b=new _1(y,t.width,t.height,r,s));let q=new qd(x,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(w){w!==void 0&&(oe=w,this.setSize(he,me,!1))},this.getSize=function(w){return w.set(he,me)},this.setSize=function(w,H,$=!0){if(q.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}he=w,me=H,t.width=Math.floor(w*oe),t.height=Math.floor(H*oe),$===!0&&(t.style.width=w+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(he*oe,me*oe).floor()},this.setDrawingBufferSize=function(w,H,$){he=w,me=H,oe=$,t.width=Math.floor(w*$),t.height=Math.floor(H*$),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(y===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,H,$,j){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,H,$,j),ye.viewport(A.copy(Z).multiplyScalar(oe).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,H,$,j){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,H,$,j),ye.scissor(F.copy(de).multiplyScalar(oe).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){ye.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){xe=w},this.getClearColor=function(w){return w.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,$=!0){let j=0;if(w){let Y=!1;if(z!==null){let Ie=z.texture.format;Y=m.has(Ie)}if(Y){let Ie=z.texture.type,ze=p.has(Ie),De=Me.getClearColor(),ke=Me.getClearAlpha(),We=De.r,Qe=De.g,st=De.b;ze?(S[0]=We,S[1]=Qe,S[2]=st,S[3]=ke,C.clearBufferuiv(C.COLOR,0,S)):(M[0]=We,M[1]=Qe,M[2]=st,M[3]=ke,C.clearBufferiv(C.COLOR,0,M))}else j|=C.COLOR_BUFFER_BIT}H&&(j|=C.DEPTH_BUFFER_BIT),$&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Me.dispose(),be.dispose(),ne.dispose(),_.dispose(),K.dispose(),Ne.dispose(),W.dispose(),re.dispose(),ve.dispose(),q.dispose(),q.removeEventListener("sessionstart",nr),q.removeEventListener("sessionend",Ns),ir.stop()};function pe(w){w.preventDefault(),Js("WebGLRenderer: Context Lost."),L=!0}function Te(){Js("WebGLRenderer: Context Restored."),L=!1;let w=T.autoReset,H=we.enabled,$=we.autoUpdate,j=we.needsUpdate,Y=we.type;ee(),T.autoReset=w,we.enabled=H,we.autoUpdate=$,we.needsUpdate=j,we.type=Y}function Je(w){je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){let H=w.target;H.removeEventListener("dispose",Ge),cn(H)}function cn(w){Kt(w),_.remove(w)}function Kt(w){let H=_.get(w).programs;H!==void 0&&(H.forEach(function($){ve.releaseProgram($)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,$,j,Y,Ie){H===null&&(H=ce);let ze=Y.isMesh&&Y.matrixWorld.determinant()<0,De=Hf(w,H,$,j,Y);ye.setMaterial(j,ze);let ke=$.index,We=1;if(j.wireframe===!0){if(ke=J.getWireframeAttribute($),ke===void 0)return;We=2}let Qe=$.drawRange,st=$.attributes.position,Xe=Qe.start*We,bt=(Qe.start+Qe.count)*We;Ie!==null&&(Xe=Math.max(Xe,Ie.start*We),bt=Math.min(bt,(Ie.start+Ie.count)*We)),ke!==null?(Xe=Math.max(Xe,0),bt=Math.min(bt,ke.count)):st!=null&&(Xe=Math.max(Xe,0),bt=Math.min(bt,st.count));let Ct=bt-Xe;if(Ct<0||Ct===1/0)return;W.setup(Y,j,De,$,ke);let Rt,_t=Fe;if(ke!==null&&(Rt=ue.get(ke),_t=U,_t.setIndex(Rt)),Y.isMesh)j.wireframe===!0?(ye.setLineWidth(j.wireframeLinewidth*Se()),_t.setMode(C.LINES)):_t.setMode(C.TRIANGLES);else if(Y.isLine){let Qt=j.linewidth;Qt===void 0&&(Qt=1),ye.setLineWidth(Qt*Se()),Y.isLineSegments?_t.setMode(C.LINES):Y.isLineLoop?_t.setMode(C.LINE_LOOP):_t.setMode(C.LINE_STRIP)}else Y.isPoints?_t.setMode(C.POINTS):Y.isSprite&&_t.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)$s("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Qt=Y._multiDrawStarts,Ve=Y._multiDrawCounts,_n=Y._multiDrawCount,ht=ke?ue.get(ke).bytesPerElement:1,Nn=_.get(j).currentProgram.getUniforms();for(let Kn=0;Kn<_n;Kn++)Nn.setValue(C,"_gl_DrawID",Kn),_t.render(Qt[Kn]/ht,Ve[Kn])}else if(Y.isInstancedMesh)_t.renderInstances(Xe,Ct,Y.count);else if($.isInstancedBufferGeometry){let Qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ve=Math.min($.instanceCount,Qt);_t.renderInstances(Xe,Ct,Ve)}else _t.render(Xe,Ct)};function $n(w,H,$){w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,Ho(w,H,$),w.side=vi,w.needsUpdate=!0,Ho(w,H,$),w.side=It):Ho(w,H,$)}this.compile=function(w,H,$=null){$===null&&($=w),R=ne.get($),R.init(H),I.push(R),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(R.pushLight(Y),Y.castShadow&&R.pushShadow(Y))}),R.setupLights();let j=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ie=Y.material;if(Ie)if(Array.isArray(Ie))for(let ze=0;ze<Ie.length;ze++){let De=Ie[ze];$n(De,$,Y),j.add(De)}else $n(Ie,$,Y),j.add(Ie)}),R=I.pop(),j},this.compileAsync=function(w,H,$=null){let j=this.compile(w,H,$);return new Promise(Y=>{function Ie(){if(j.forEach(function(ze){_.get(ze).currentProgram.isReady()&&j.delete(ze)}),j.size===0){Y(w);return}setTimeout(Ie,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let tr=null;function ko(w){tr&&tr(w)}function nr(){ir.stop()}function Ns(){ir.start()}let ir=new hf;ir.setAnimationLoop(ko),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(w){tr=w,q.setAnimationLoop(w),w===null?ir.stop():ir.start()},q.addEventListener("sessionstart",nr),q.addEventListener("sessionend",Ns),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;let $=q.enabled===!0&&q.isPresenting===!0,j=b!==null&&(z===null||$)&&b.begin(x,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(H),H=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,z),R=ne.get(w,I.length),R.init(H),I.push(R),Ke.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Le.setFromProjectionMatrix(Ke,Bn,H.reversedDepth),Ue=this.localClippingEnabled,Re=te.init(this.clippingPlanes,Ue),v=be.get(w,E.length),v.init(),E.push(v),q.enabled===!0&&q.isPresenting===!0){let ze=x.xr.getDepthSensingMesh();ze!==null&&bc(ze,H,-1/0,x.sortObjects)}bc(w,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Q,xe),ae=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ae&&Me.addToRenderList(v,w),this.info.render.frame++,Re===!0&&te.beginShadows();let Y=R.state.shadowsArray;if(we.render(Y,w,H),Re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&b.hasRenderPass())===!1){let ze=v.opaque,De=v.transmissive;if(R.setupLights(),H.isArrayCamera){let ke=H.cameras;if(De.length>0)for(let We=0,Qe=ke.length;We<Qe;We++){let st=ke[We];ph(ze,De,w,st)}ae&&Me.render(w);for(let We=0,Qe=ke.length;We<Qe;We++){let st=ke[We];fh(v,w,st,st.viewport)}}else De.length>0&&ph(ze,De,w,H),ae&&Me.render(w),fh(v,w,H)}z!==null&&N===0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z)),j&&b.end(x),w.isScene===!0&&w.onAfterRender(x,w,H),W.resetDefaultState(),k=-1,V=null,I.pop(),I.length>0?(R=I[I.length-1],Re===!0&&te.setGlobalState(x.clippingPlanes,R.state.camera)):R=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function bc(w,H,$,j){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)R.pushLight(w),w.castShadow&&R.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Le.intersectsSprite(w)){j&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ke);let ze=Ne.update(w),De=w.material;De.visible&&v.push(w,ze,De,$,se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Le.intersectsObject(w))){let ze=Ne.update(w),De=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),se.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),se.copy(ze.boundingSphere.center)),se.applyMatrix4(w.matrixWorld).applyMatrix4(Ke)),Array.isArray(De)){let ke=ze.groups;for(let We=0,Qe=ke.length;We<Qe;We++){let st=ke[We],Xe=De[st.materialIndex];Xe&&Xe.visible&&v.push(w,ze,Xe,$,se.z,st)}}else De.visible&&v.push(w,ze,De,$,se.z,null)}}let Ie=w.children;for(let ze=0,De=Ie.length;ze<De;ze++)bc(Ie[ze],H,$,j)}function fh(w,H,$,j){let{opaque:Y,transmissive:Ie,transparent:ze}=w;R.setupLightsView($),Re===!0&&te.setGlobalState(x.clippingPlanes,$),j&&ye.viewport(A.copy(j)),Y.length>0&&Vo(Y,H,$),Ie.length>0&&Vo(Ie,H,$),ze.length>0&&Vo(ze,H,$),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ph(w,H,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[j.id]===void 0){let Xe=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[j.id]=new vn(1,1,{generateMipmaps:!0,type:Xe?ci:gn,minFilter:ji,samples:Math.max(4,Oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ie=R.state.transmissionRenderTarget[j.id],ze=j.viewport||A;Ie.setSize(ze.z*x.transmissionResolutionScale,ze.w*x.transmissionResolutionScale);let De=x.getRenderTarget(),ke=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(Ie),x.getClearColor(G),le=x.getClearAlpha(),le<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Me.render($);let Qe=x.toneMapping;x.toneMapping=Vn;let st=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),R.setupLightsView(j),Re===!0&&te.setGlobalState(x.clippingPlanes,j),Vo(w,$,j),B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let bt=0,Ct=H.length;bt<Ct;bt++){let Rt=H[bt],{object:_t,geometry:Qt,material:Ve,group:_n}=Rt;if(Ve.side===It&&_t.layers.test(j.layers)){let ht=Ve.side;Ve.side=fn,Ve.needsUpdate=!0,mh(_t,$,j,Qt,Ve,_n),Ve.side=ht,Ve.needsUpdate=!0,Xe=!0}}Xe===!0&&(B.updateMultisampleRenderTarget(Ie),B.updateRenderTargetMipmap(Ie))}x.setRenderTarget(De,ke,We),x.setClearColor(G,le),st!==void 0&&(j.viewport=st),x.toneMapping=Qe}function Vo(w,H,$){let j=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Ie=w.length;Y<Ie;Y++){let ze=w[Y],{object:De,geometry:ke,group:We}=ze,Qe=ze.material;Qe.allowOverride===!0&&j!==null&&(Qe=j),De.layers.test($.layers)&&mh(De,H,$,ke,Qe,We)}}function mh(w,H,$,j,Y,Ie){w.onBeforeRender(x,H,$,j,Y,Ie),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(x,H,$,j,w,Ie),Y.transparent===!0&&Y.side===It&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,x.renderBufferDirect($,H,j,Y,w,Ie),Y.side=vi,Y.needsUpdate=!0,x.renderBufferDirect($,H,j,Y,w,Ie),Y.side=It):x.renderBufferDirect($,H,j,Y,w,Ie),w.onAfterRender(x,H,$,j,Y,Ie)}function Ho(w,H,$){H.isScene!==!0&&(H=ce);let j=_.get(w),Y=R.state.lights,Ie=R.state.shadowsArray,ze=Y.state.version,De=ve.getParameters(w,Y.state,Ie,H,$),ke=ve.getProgramCacheKey(De),We=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=K.get(w.envMap||j.environment,Qe),j.envMapRotation=j.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Ge),We=new Map,j.programs=We);let st=We.get(ke);if(st!==void 0){if(j.currentProgram===st&&j.lightsStateVersion===ze)return bh(w,De),st}else De.uniforms=ve.getUniforms(w),w.onBeforeCompile(De,x),st=ve.acquireProgram(De,ke),We.set(ke,st),j.uniforms=De.uniforms;let Xe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=te.uniform),bh(w,De),j.needsLights=Wf(w),j.lightsStateVersion=ze,j.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=st,j.uniformsList=null,st}function gh(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=vs.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function bh(w,H){let $=_.get(w);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Hf(w,H,$,j,Y){H.isScene!==!0&&(H=ce),B.resetTextureUnits();let Ie=H.fog,ze=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,De=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:fr,ke=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,We=K.get(j.envMap||ze,ke),Qe=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!$.morphAttributes.position,bt=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color,Rt=Vn;j.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Rt=x.toneMapping);let _t=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=_t!==void 0?_t.length:0,Ve=_.get(j),_n=R.state.lights;if(Re===!0&&(Ue===!0||w!==V)){let Vt=w===V&&j.id===k;te.setState(j,w,Vt)}let ht=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==_n.state.version||Ve.outputColorSpace!==De||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==We||j.fog===!0&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==te.numPlanes||Ve.numIntersection!==te.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==st||Ve.morphTargets!==Xe||Ve.morphNormals!==bt||Ve.morphColors!==Ct||Ve.toneMapping!==Rt||Ve.morphTargetsCount!==Qt)&&(ht=!0):(ht=!0,Ve.__version=j.version);let Nn=Ve.currentProgram;ht===!0&&(Nn=Ho(j,H,Y));let Kn=!1,rr=!1,zr=!1,vt=Nn.getUniforms(),Xt=Ve.uniforms;if(ye.useProgram(Nn.program)&&(Kn=!0,rr=!0,zr=!0),j.id!==k&&(k=j.id,rr=!0),Kn||V!==w){ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(C,"projectionMatrix",w.projectionMatrix),vt.setValue(C,"viewMatrix",w.matrixWorldInverse);let Pi=vt.map.cameraPosition;Pi!==void 0&&Pi.setValue(C,Be.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&vt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,rr=!0,zr=!0)}if(Ve.needsLights&&(_n.state.directionalShadowMap.length>0&&vt.setValue(C,"directionalShadowMap",_n.state.directionalShadowMap,B),_n.state.spotShadowMap.length>0&&vt.setValue(C,"spotShadowMap",_n.state.spotShadowMap,B),_n.state.pointShadowMap.length>0&&vt.setValue(C,"pointShadowMap",_n.state.pointShadowMap,B)),Y.isSkinnedMesh){vt.setOptional(C,Y,"bindMatrix"),vt.setOptional(C,Y,"bindMatrixInverse");let Vt=Y.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),vt.setValue(C,"boneTexture",Vt.boneTexture,B))}Y.isBatchedMesh&&(vt.setOptional(C,Y,"batchingTexture"),vt.setValue(C,"batchingTexture",Y._matricesTexture,B),vt.setOptional(C,Y,"batchingIdTexture"),vt.setValue(C,"batchingIdTexture",Y._indirectTexture,B),vt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(C,"batchingColorTexture",Y._colorsTexture,B));let Ci=$.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&_e.update(Y,$,Nn),(rr||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,vt.setValue(C,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=i_()),rr&&(vt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Gf(Xt,zr),Ie&&j.fog===!0&&ie.refreshFogUniforms(Xt,Ie),ie.refreshMaterialUniforms(Xt,j,oe,me,R.state.transmissionRenderTarget[w.id]),vs.upload(C,gh(Ve),Xt,B)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vs.upload(C,gh(Ve),Xt,B),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&vt.setValue(C,"center",Y.center),vt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(C,"normalMatrix",Y.normalMatrix),vt.setValue(C,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Vt=j.uniformsGroups;for(let Pi=0,Or=Vt.length;Pi<Or;Pi++){let _h=Vt[Pi];re.update(_h,Nn),re.bind(_h,Nn)}}return Nn}function Gf(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Wf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,H,$){let j=_.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=H,_.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let $=_.get(w);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};let Xf=C.createFramebuffer();this.setRenderTarget=function(w,H=0,$=0){z=w,P=H,N=$;let j=null,Y=!1,Ie=!1;if(w){let De=_.get(w);if(De.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(C.FRAMEBUFFER,De.__webglFramebuffer),A.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest,ye.viewport(A),ye.scissor(F),ye.setScissorTest(O),k=-1;return}else if(De.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(De.__hasExternalTextures)B.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(De.__boundDepthTexture!==Qe){if(Qe!==null&&_.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ie=!0);let We=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[H])?j=We[H][$]:j=We[H],Y=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?j=_.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?j=We[$]:j=We,A.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest}else A.copy(Z).multiplyScalar(oe).floor(),F.copy(de).multiplyScalar(oe).floor(),O=fe;if($!==0&&(j=Xf),ye.bindFramebuffer(C.FRAMEBUFFER,j)&&ye.drawBuffers(w,j),ye.viewport(A),ye.scissor(F),ye.setScissorTest(O),Y){let De=_.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,$)}else if(Ie){let De=H;for(let ke=0;ke<w.textures.length;ke++){let We=_.get(w.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,We.__webglTexture,$,De)}}else if(w!==null&&$!==0){let De=_.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,De.__webglTexture,$)}k=-1},this.readRenderTargetPixels=function(w,H,$,j,Y,Ie,ze,De=0){if(!(w&&w.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){ye.bindFramebuffer(C.FRAMEBUFFER,ke);try{let We=w.textures[De],Qe=We.format,st=We.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),!Oe.textureFormatReadable(Qe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(st)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-j&&$>=0&&$<=w.height-Y&&C.readPixels(H,$,j,Y,X.convert(Qe),X.convert(st),Ie)}finally{let We=z!==null?_.get(z).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,H,$,j,Y,Ie,ze,De=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(H>=0&&H<=w.width-j&&$>=0&&$<=w.height-Y){ye.bindFramebuffer(C.FRAMEBUFFER,ke);let We=w.textures[De],Qe=We.format,st=We.type;if(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+De),!Oe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,Ie.byteLength,C.STREAM_READ),C.readPixels(H,$,j,Y,X.convert(Qe),X.convert(st),0);let bt=z!==null?_.get(z).__webglFramebuffer:null;ye.bindFramebuffer(C.FRAMEBUFFER,bt);let Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Du(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ie),C.deleteBuffer(Xe),C.deleteSync(Ct),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,$=0){let j=Math.pow(2,-$),Y=Math.floor(w.image.width*j),Ie=Math.floor(w.image.height*j),ze=H!==null?H.x:0,De=H!==null?H.y:0;B.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,ze,De,Y,Ie),ye.unbindTexture()};let qf=C.createFramebuffer(),Yf=C.createFramebuffer();this.copyTextureToTexture=function(w,H,$=null,j=null,Y=0,Ie=0){let ze,De,ke,We,Qe,st,Xe,bt,Ct,Rt=w.isCompressedTexture?w.mipmaps[Ie]:w.image;if($!==null)ze=$.max.x-$.min.x,De=$.max.y-$.min.y,ke=$.isBox3?$.max.z-$.min.z:1,We=$.min.x,Qe=$.min.y,st=$.isBox3?$.min.z:0;else{let Xt=Math.pow(2,-Y);ze=Math.floor(Rt.width*Xt),De=Math.floor(Rt.height*Xt),w.isDataArrayTexture?ke=Rt.depth:w.isData3DTexture?ke=Math.floor(Rt.depth*Xt):ke=1,We=0,Qe=0,st=0}j!==null?(Xe=j.x,bt=j.y,Ct=j.z):(Xe=0,bt=0,Ct=0);let _t=X.convert(H.format),Qt=X.convert(H.type),Ve;H.isData3DTexture?(B.setTexture3D(H,0),Ve=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),Ve=C.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),Ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let _n=C.getParameter(C.UNPACK_ROW_LENGTH),ht=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),Kn=C.getParameter(C.UNPACK_SKIP_ROWS),rr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,We),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,st);let zr=w.isDataArrayTexture||w.isData3DTexture,vt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let Xt=_.get(w),Ci=_.get(H),Vt=_.get(Xt.__renderTarget),Pi=_.get(Ci.__renderTarget);ye.bindFramebuffer(C.READ_FRAMEBUFFER,Vt.__webglFramebuffer),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Or=0;Or<ke;Or++)zr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(w).__webglTexture,Y,st+Or),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(H).__webglTexture,Ie,Ct+Or)),C.blitFramebuffer(We,Qe,ze,De,Xe,bt,ze,De,C.DEPTH_BUFFER_BIT,C.NEAREST);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||_.has(w)){let Xt=_.get(w),Ci=_.get(H);ye.bindFramebuffer(C.READ_FRAMEBUFFER,qf),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,Yf);for(let Vt=0;Vt<ke;Vt++)zr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,Y,st+Vt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,Y),vt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ci.__webglTexture,Ie,Ct+Vt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ci.__webglTexture,Ie),Y!==0?C.blitFramebuffer(We,Qe,ze,De,Xe,bt,ze,De,C.COLOR_BUFFER_BIT,C.NEAREST):vt?C.copyTexSubImage3D(Ve,Ie,Xe,bt,Ct+Vt,We,Qe,ze,De):C.copyTexSubImage2D(Ve,Ie,Xe,bt,We,Qe,ze,De);ye.bindFramebuffer(C.READ_FRAMEBUFFER,null),ye.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Ve,Ie,Xe,bt,Ct,ze,De,ke,_t,Qt,Rt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(Ve,Ie,Xe,bt,Ct,ze,De,ke,_t,Rt.data):C.texSubImage3D(Ve,Ie,Xe,bt,Ct,ze,De,ke,_t,Qt,Rt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ie,Xe,bt,ze,De,_t,Qt,Rt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ie,Xe,bt,Rt.width,Rt.height,_t,Rt.data):C.texSubImage2D(C.TEXTURE_2D,Ie,Xe,bt,ze,De,_t,Qt,Rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,_n),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,rr),Ie===0&&H.generateMipmaps&&C.generateMipmap(Ve),ye.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){P=0,N=0,z=null,ye.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var gf={type:"change"},jd={type:"start"},_f={type:"end"},rc=new Bi,bf=new mn,r_=Math.cos(70*wi.DEG2RAD),Bt=new D,bn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yd=1e-6,sc=class extends yo{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new rn,this._lastTargetPosition=new D,this._quat=new rn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gs,this._sphericalDelta=new gs,this._scale=1,this._panOffset=new D,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new D,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=s_.bind(this),this._onPointerUp=a_.bind(this),this._onContextMenu=p_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=h_.bind(this),this._onTouchStart=u_.bind(this),this._onTouchMove=f_.bind(this),this._onMouseDown=l_.bind(this),this._onMouseMove=c_.bind(this),this._interceptControlDown=m_.bind(this),this._interceptControlUp=g_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gf),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Bt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<r_?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yd||this._lastTargetPosition.distanceToSquared(this.target)>Yd?(this.dispatchEvent(gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function s_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function o_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_f),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function l_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(jd)}function c_(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d_(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(jd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_f))}function h_(i){this.enabled!==!1&&this._handleKeyDown(i)}function u_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(jd)}function f_(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function p_(i){this.enabled!==!1&&i.preventDefault()}function m_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function g_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Do(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new gt,c=0;for(let d=0;d<i.length;++d){let u=i[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,u=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(let d in s){let u=xf(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in o){let u=o[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){let f=[];for(let y=0;y<o[d].length;++y)f.push(o[d][y][h]);let g=xf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(g)}}return l}function xf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new qt(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let u=l/t;for(let h=0,f=d.count;h<f;h++)for(let g=0;g<t;g++){let y=d.getComponent(h,g);a.setComponent(h+u,g,y)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var ac=.4166666666666667,yf=.24,oc=.018;function Ei(i,e=!0){let t=i.pixels*ac,n=(i.trim==="left"?yf:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?yf:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function vf(i){let e=i.pixels*ac;return[[-(i.extendStart||0),oc],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*ac-oc,(n+1)*ac+oc]),[e-oc,e+(i.extendEnd||0)]]}var Mf=2.5/6,b_=.24,Ss=.018,Zd=new Map,__=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function Jd(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let d of t)if(!Number.isInteger(d.at)||d.at<=0||d.at>=i||![0,1].includes(d.layer)||!["left","right","seam"].includes(d.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(Zd.has(s))return Zd.get(s).map(d=>({...d}));let o=[0,1].map(d=>new Set(t.filter(u=>u.layer===d).map(u=>u.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let d=1;d<=i;d++){let u=new Map;for(let h of a.values())for(let f of[!1,!0])for(let g of[!1,!0]){let y=[f,g];if(d<i&&f&&g&&!(o[0].has(d)&&o[1].has(d)))continue;let m=[...h.starts],p=[...h.score],S=[],M=!0;for(let E of[0,1]){let I=m[E],b=d-I,x=E^e;if(b>6||!y[E]&&(d===i||b===6||o[E].has(d))){M=!1;break}if(!y[E])continue;let L=r.left&&x===1&&I===0||t.some(F=>F.layer===E&&F.at===I&&F.side==="left"),P=r.right&&x===1&&d===i||t.some(F=>F.layer===E&&F.at===d&&F.side==="right");if(L&&P){M=!1;break}let N=L?"left":P?"right":null,z={};for(let F of t.filter(O=>O.layer===E&&O.fullEndSlot))F.side==="left"&&F.at===d&&(z.extendEnd=Ss),F.side==="left"&&F.at===I&&(z.extraStartTrim=Ss),F.side==="right"&&F.at===d&&(z.extraEndTrim=Ss),F.side==="right"&&F.at===I&&(z.extendStart=Ss);r.extraTrim&&L&&I===0&&(z.extraStartTrim=Ss),r.extraTrim&&P&&d===i&&(z.extraEndTrim=Ss);let k={pixels:b,start:I*Mf,layer:x,trim:N,...z},[V,A]=Ei(k,!1);if(A-V>2.5+1e-9||A-V<=0){M=!1;break}p[0]+=+(b===1&&!!N),p[1]+=+(b===1),p[2]++,p[3]+=1/(b*Mf-(N?b_:0)),x===1&&I===0&&(p[4]+=Math.abs(b-n)),S.push(k),m[E]=d}if(!M)continue;let v=m.join(","),R=u.get(v);(!R||__(p,R.score))&&u.set(v,{starts:m,score:p,pieces:[...h.pieces,...S]})}a=u}let l=a.get(`${i},${i}`);if(!l)throw new Error("No native staggered stock layout: "+s);let c=l.pieces.sort((d,u)=>u.layer-d.layer||d.start-u.start);return Zd.set(s,c),c.map(d=>({...d}))}function lc(i,e=2){return Jd(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var ui=2.5/6,Ti=.24,Wt=.018,pn=Ti/2,yt=1e-7,x_=new D(1,0,0),y_=new D(0,1,0),X3=new D(0,0,1);function cc(i={},e={},t={}){let n=i.wood||new wt({color:"#c7a46f",side:It}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,l=lc;function c(m,p,S,M){let v=[];for(let R=0;R<m.length;R++){let E=m[R],I=m[(R+1)%m.length],b=M*(E[p]-S),x=M*(I[p]-S);b>=-yt&&v.push(E.clone()),b>=-yt!=x>=-yt&&v.push(E.clone().lerp(I,b/(b-x)))}return v}function d(m){let p=m.pixels*ui,S=[new ge(-(m.extendStart||0),0),new ge(p+(m.extendEnd||0),0),new ge(p+(m.extendEnd||0),pn),new ge(p-Wt,pn),new ge(p-Wt,Ti)];for(let x=m.pixels-1;x>=1;x--){let L=x*ui;S.push(new ge(L+Wt,Ti),new ge(L+Wt,pn),new ge(L-Wt,pn),new ge(L-Wt,Ti))}S.push(new ge(Wt,Ti),new ge(Wt,pn),new ge(-(m.extendStart||0),pn));let M=S,[v,R]=Ei(m);if(R<=v+yt||(v>-(m.extendStart||0)+yt&&(M=c(M,"x",v,1)),R<p+(m.extendEnd||0)-yt&&(M=c(M,"x",R,-1)),M.length<3))return null;let E=new Vi(M);E.closePath();let I=new vr(E,{depth:Wt,bevelEnabled:!1,curveSegments:1});I.translate(0,-pn,0);let b=I.getAttribute("uv");for(let x=0;x<b.count;x++)b.setXY(x,b.getX(x)/2.5,b.getY(x)/Ti);return I}function u(m,p,S,M=[],v=null){let[R,E]=Ei(m);v&&(R=Math.max(R,v[0]-m.start),E=Math.min(E,v[1]-m.start));let I=E>R+yt?[[R,E]]:[];for(let b of M){let x=p===0?b.v0:b.u0,L=p===0?b.v1:b.u1;if(S+Wt<=x+yt||S>=L-yt)continue;let P=(p===0?b.u0:b.v0)-m.start,N=(p===0?b.u1:b.v1)-m.start;I=I.flatMap(([z,k])=>N<=z||P>=k?[[z,k]]:[[z,Math.min(k,P)],[Math.max(z,N),k]].filter(([V,A])=>A>V+yt))}return I.map(([b,x])=>({...m,minCut:b,limit:x}))}function h(m,p,S,M){let v=m.pixels*ui,[R,E]=Ei(m);if(E<=R+yt)return null;let I=vf(m),b=(m.connectorCuts||[]).map(O=>({x0:O.end==="start"?O.offset||0:v-(O.offset||0)-pn,x1:O.end==="start"?(O.offset||0)+pn:v-(O.offset||0),y0:O.edge==="slotted"?pn-Wt:-pn,y1:O.edge==="slotted"?pn:-pn+Wt})),x=[R,E];for(let O of I)for(let G of O)G>R+yt&&G<E-yt&&x.push(G);for(let O of b)for(let G of[O.x0,O.x1])G>R+yt&&G<E-yt&&x.push(G);x.sort((O,G)=>O-G);let L=new Map,P=!1,N=O=>`${Math.round(O.x*1e8)},${Math.round(O.y*1e8)},${Math.round(O.z*1e8)}`;function z(O,G){let le=[],he=[];for(let oe of O){let Q=[];for(let xe=0;xe<oe.length;xe++){let Z=oe[xe],de=oe[(xe+1)%oe.length],fe=G.c-G.n.dot(Z.clone().add(S)),Le=G.c-G.n.dot(de.clone().add(S));if(fe>=-yt?Q.push(Z):P=!0,fe>=-yt!=Le>=-yt){let Re=Z.clone().lerp(de,fe/(fe-Le));Q.push(Re),he.push(Re)}}Q.length>=3&&le.push(Q)}let me=[...new Map(he.map(oe=>[N(oe),oe])).values()];if(me.length>=3){let oe=me.reduce((de,fe)=>de.add(fe),new D).divideScalar(me.length),Q=G.n.clone().normalize(),xe=(Math.abs(Q.y)>.9?x_:y_).clone().cross(Q).normalize(),Z=Q.clone().cross(xe);me.sort((de,fe)=>Math.atan2(de.clone().sub(oe).dot(Z),de.clone().sub(oe).dot(xe))-Math.atan2(fe.clone().sub(oe).dot(Z),fe.clone().sub(oe).dot(xe))),le.push(me)}return le}function k(O,G,le,he){let me=[[O,le,0],[G,le,0],[G,he,0],[O,he,0],[O,le,Wt],[G,le,Wt],[G,he,Wt],[O,he,Wt]].map(Q=>new D(...Q).applyMatrix4(p)),oe=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(Q=>Q.map(xe=>me[xe]));p.determinant()<0&&oe.forEach(Q=>Q.reverse());for(let Q of M)if(oe=z(oe,Q),!oe.length)return;for(let Q of oe){let xe=Q.filter((de,fe)=>fe===0||de.distanceToSquared(Q[fe-1])>1e-18);if(xe.length<3)continue;let Z=xe.map(N).sort().join("|");L.has(Z)?L.delete(Z):L.set(Z,xe)}}for(let O=0;O<x.length-1;O++){let G=x[O],le=x[O+1],he=(G+le)/2;if(le-G<yt)continue;let me=[...new Set([-pn,0,pn,...b.flatMap(oe=>[oe.y0,oe.y1])])].sort((oe,Q)=>oe-Q);for(let oe=0;oe<me.length-1;oe++){let Q=me[oe],xe=me[oe+1],Z=(Q+xe)/2;Z>0&&I.some(([de,fe])=>he>de&&he<fe)||b.some(de=>he>de.x0-yt&&he<de.x1+yt&&Z>de.y0-yt&&Z<de.y1+yt)||k(G,le,Q,xe)}}let V=[],A=[];for(let O of L.values())for(let G=1;G<O.length-1;G++){let le=O[0],he=O[G],me=O[G+1];if(!(he.clone().sub(le).cross(me.clone().sub(le)).lengthSq()<1e-20))for(let oe of[le,he,me])V.push(oe.x,oe.y,oe.z),A.push(oe.dot(new D().setFromMatrixColumn(p,0))/2.5,oe.dot(new D().setFromMatrixColumn(p,1))/Ti)}if(!V.length)return null;let F=new gt;return F.setAttribute("position",new dt(V,3)),F.setAttribute("uv",new dt(A,2)),F.computeVertexNormals(),F.userData.angledCut=P,F}function f(m,p,S,M,v,R,E={},I=0,b=[]){let[x,L]=Ei(p,!1);if(L-x>2.5+yt)throw new Error("Combstruct stock exceeds 2500 mm");let P=JSON.stringify([m.name,E.wallId||"",E.kind||"standard",E.axis,E.index,p.layer,I,...[p.start,p.pixels,p.minCut||0,p.limit??p.pixels*ui].map(xe=>Math.round(xe*1e7)/1e7)]),N=t.connectors===!1||s?[]:e[P]||[];p={...p,connectorCuts:N};let z=p.layer^I,k=R.clone().addScaledVector(S,p.start).addScaledVector(v,z===0?-Wt:0),V=new at().makeBasis(S,M,v),A=b.length||(p.minCut||0)>yt||p.limit!==void 0||N.length,F=A?h(p,V,k,b):d(p);if(!F)return null;A||F.applyMatrix4(V);let[O,G]=Ei(p,!1),[le,he]=Ei(p),me=!!F.userData.angledCut||le>O+yt||he<G-yt,oe=new lt(F,p.trim||me?r:n);oe.position.copy(k),oe.castShadow=!0,oe.receiveShadow=!0;let Q={id:`board-${++a}`,mesh:oe,surface:m.name,kind:E.kind||"standard",axis:E.axis,index:E.index,layer:z,stockLayer:p.layer,start:p.start,stockLength:p.pixels*ui,trim:p.trim||null,custom:me,connectorKey:P,connectorCuts:N,stock:{...p},along:S.toArray(),normal:M.toArray(),thick:v.toArray(),frameOrigin:R.toArray(),clippingPlanes:b.map(xe=>({n:xe.n.toArray(),c:xe.c})),actualStart:p.start+le,actualEnd:p.start+he,...E};return oe.name=Q.id,oe.userData={...Q,mesh:void 0},m.add(oe),o.push(Q),oe}function g(m,p,S,M,v,R,E,{phaseU:I=0,phaseV:b=0,holes:x=[],keepTop:L=!1,clearances:P=[0,0],startClearances:N=[0,0],verticalPlanes:z=[],verticalModules:k=S,kind:V="standard"}={}){for(let A=0;A<2;A++){let F=A===0?p:k,O=A===0?S:p,G=A===0?v:R,le=A===0?R:v,he=E.clone().multiplyScalar(A===0?1:-1),me=A===0?I:b;for(let oe=1;oe<O;oe++)for(let Q of l(F)){let xe={...Q};L&&A===1&&xe.trim==="right"&&(xe.trim=null);let Z=P[A]||0;Z&&Math.abs(xe.start+xe.pixels*ui-F*ui)<yt&&(xe.limit=xe.pixels*ui-(xe.trim==="right"?Ti:0)-Z),N[A]&&xe.start===0&&(xe.minCut=(xe.trim==="left"?Ti:0)+N[A]);let de=oe*ui+((xe.layer^me)===0?-Wt:0);for(let fe of u(xe,A,de,x))f(m,fe,G,he,le,M.clone().addScaledVector(le,oe*ui),{kind:V,axis:A,index:oe},me,A===1?z:[])}}}return{lengthJoints:s,boards:o,segments:l,jointStock:(m,p=0,S=[],M=2,v)=>Jd(m,p,s?S.map(R=>({...R,fullEndSlot:R.side!=="seam"})):S,M,v),openStock:u,addBoard:f,grid:g}}var Sf={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};var Ae=2.5/6,Mt=.24,$e=.018,ut=Mt/2,En=new D(1,0,0),Wn=new D(0,1,0),Xn=new D(0,0,1),M_=1e-7;function $d(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=ut+(t?$e:0),r=i.wood||new wt({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new Ze;o.name="Combstruct 30 \u2014 w\u0119z\u0142y w jednej osi";let a=ie=>{let be=new Ze;return be.name=ie,o.add(be),be},l={floor:a("P\u0142yta pod\u0142ogowa i ci\u0105g\u0142y taras"),walls:["rear","left","front","right"].map(ie=>a(ie)),partitions:a("\u015Aciany wewn\u0119trzne"),ceiling:a("Sufit"),roof:a("Dach 35\xB0"),gables:a("Poziome rz\u0119dy szczyt\xF3w"),pergola:a("Pergola")},c=13*Ae,d=15*Ae,u=7*Ae,h=-c/2,f=c/2,g=-d/2,y=d/2,m=g-u,p=8,S=p*Ae,M=t?S+$e:S-Mt,v=M+Mt,R=35*Math.PI/180,E=Math.sin(R),I=Math.cos(R),b=Math.tan(R),x=v,L=x+b*c/2,P=L+Mt/I,N={width:c,depth:d,halfWidth:c/2,halfDepth:d/2,terraceDepth:u,terraceRearZ:m,wallDepth:Mt,floorBottom:0,floorTop:Mt,wallTop:S,ceilingBottom:M,ceilingTop:v,clearHeight:M-Mt,roofAngle:35,roofEaveY:x,roofUnderRidgeY:L,roofRidgeY:P,roofOverhang:Ae,module:Ae,boardDepth:Mt,boardThickness:$e,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:Ae,constructionOnly:!0},z=cc({wood:r,end:s},Sf,{...e,connectors:t?!1:e.connectors}),{boards:k,segments:V,openStock:A,addBoard:F,grid:O}=z,G=[],le=[],he={rear:[],left:[],front:[],right:[],partitions:[]},me=(ie,be=0,ne=[],te=2,we={left:!0,right:!0})=>z.jointStock(ie,be,t?ne.map(Me=>({...Me,fullEndSlot:!0})):ne,te,{...we,extraTrim:we.extraTrim??t}),oe=h+6*Ae-n,Q=oe,xe=g+8*Ae-n,Z=new D(h,ut,m);function de(ie,be,ne,te,we){let Me=we==="floor",_e=Me?7:0;for(let Fe=0;Fe<2;Fe++){let U=Fe===0?be:ne,X=Fe===0?ne:be;for(let W=1;W<X;W++){let re=[];Fe===0&&W>_e&&re.push({at:6,side:"right",layer:1}),Fe===1&&(Me&&re.push({at:7,side:"left",layer:1}),W<6&&re.push({at:_e+8,side:"right",layer:1}));let ee=me(U,0,re);for(let q of ee)F(ie,q,Fe===0?En:Xn,Fe===0?Wn:Wn.clone().negate(),Fe===0?Xn:En,te.clone().addScaledVector(Fe===0?Xn:En,W*Ae),{kind:we,axis:Fe,index:W},0)}}}de(l.floor,13,22,Z,"floor");let fe=["rear","left","front","right"],Le=[new D(h,0,g+n),new D(h+n,0,g),new D(h,0,y-n),new D(f-n,0,g)],Re=[Xn,En,Xn.clone().negate(),En.clone().negate()];function Ue(ie,be,ne,te,we,Me,_e){return{id:_e,kind:be,u0:ne*Ae+$e,u1:te*Ae-$e,v0:we,v1:Me}}he.front=[Ue("front","window",1,3,3*Ae+$e,6*Ae-$e,"front-window-left"),Ue("front","door",6,9,Mt,6*Ae-$e,"entrance"),Ue("front","window",10,12,3*Ae+$e,6*Ae-$e,"front-window-right")],he.rear=[Ue("rear","window",1,5,2*Ae+$e,6*Ae-$e,"bedroom-window"),Ue("rear","door",8,12,Mt,6*Ae-$e,"terrace-door")],he.right=[Ue("right","window",3,7,2*Ae+$e,6*Ae-$e,"living-window")];function Ke(ie,be,ne,te,we){let Me=(ne===0?te.x:te.z)+ie.u0,_e=(ne===0?te.x:te.z)+ie.u1;return Object.assign(ie,{wallId:be,axis:ne,origin:{x:te.x,y:te.y,z:te.z},world:ne===0?{x0:Me,x1:_e,z0:we-ut,z1:we+ut,y0:ie.v0,y1:ie.v1}:{x0:we-ut,x1:we+ut,z0:Me,z1:_e,y0:ie.v0,y1:ie.v1}}),ie}let Be=[{n:new D(-b,1,0),c:x+b*c/2},{n:new D(b,1,0),c:x+b*c/2}],se=Math.ceil(L/Ae)+1;for(let ie=0;ie<4;ie++){let be=ie%2,ne=be===0?En:Xn,te=Le[ie],we=be===0?te.z:te.x,Me=be===0?13:15,_e=fe[ie],Fe=he[_e];Fe.forEach(U=>Ke(U,_e,be,te,we)),G.push({id:_e,axis:be,start:be===0?te.x:te.z,end:(be===0?te.x:te.z)+Me*Ae-(be===0?$e:2*$e),fixed:we,depth:Mt,holes:Fe,exterior:!0,origin:{x:te.x,y:0,z:te.z}});for(let U=0;U<2;U++){let X=U===0?Me:se,W=U===0&&be===0?0:1;for(let re=1;re<(U===0?p+1:Me);re++){let ee=U===0?be===0?[{at:6,side:"right",layer:1}]:ie===1?[{at:8,side:"right",layer:0}]:[]:[{at:p,side:t?"left":"right",layer:0}];for(let q of me(X,W,ee,2,{left:!0,right:!0,extraTrim:t&&U===0})){let pe={...q};U===1&&pe.trim==="right"&&pe.start+pe.pixels*Ae===X*Ae&&(pe.trim=null);let Te=re*Ae+((pe.layer^W)===0?-$e:0);for(let Je of A(pe,U,Te,Fe))F(l.walls[ie],Je,U===0?ne:Wn,U===0?Re[ie]:Re[ie].clone().negate(),U===0?Wn:ne,te.clone().addScaledVector(U===0?Wn:ne,re*Ae),{kind:"wall",axis:U,index:re},W,U===1||re===p?Be:[])}}}if(be===0)for(let U=p+1;U<se;U++)for(let X of V(13))for(let W of A(X,0,U*Ae+(X.layer===0?-$e:0),Fe))F(l.gables,W,En,Re[ie],Wn,te.clone().addScaledVector(Wn,U*Ae),{kind:"gable",axis:0,index:U,wallId:_e},0,Be)}de(l.ceiling,13,15,new D(h,M+ut,g),"ceiling");let ce={left:h+n+ut,right:f-n-ut,rear:g+n+ut,front:y-n-ut};function ae(ie,be,ne,te,we=[]){let Me=new Ze;Me.name=ie,l.partitions.add(Me);let _e=be===0?new D(h,0,te):new D(te,0,g),Fe=be===0?En:Xn,U=be===0?Xn:En,X=we.map(([W,re])=>({id:`${ie}-door-${W}`,kind:"door",u0:W*Ae+$e,u1:re*Ae-$e,v0:Mt,v1:6*Ae-$e}));X.forEach(W=>Ke(W,ie,be,_e,te)),he.partitions.push(...X),Me.userData={id:ie,axis:be,start:be===0?h:g,end:(be===0?h:g)+ne*Ae,fixed:te,depth:Mt,holes:X,origin:{x:_e.x,y:0,z:_e.z}},G.push({...Me.userData,exterior:!1});for(let W=0;W<2;W++){let re=W===0&&be===0?0:1,ee=W===0?ne:p+(t?1:0),q=W===0?be===1?[{at:8,side:"right",layer:0}]:[]:t?[{at:p,side:"left",layer:0}]:[];for(let pe=1;pe<(W===0?p+(t?1:0):ne);pe++)for(let Te of me(ee,re,q,2,{left:!0,right:!(t&&W===1),extraTrim:t&&W===0})){let Je={...Te};for(let Ge of A(Je,W,pe*Ae+((Je.layer^re)===0?-$e:0),X))F(Me,Ge,W===0?Fe:Wn,W===0?U:U.clone().negate(),W===0?Wn:Fe,_e.clone().addScaledVector(W===0?Wn:Fe,pe*Ae),{kind:"partition",wallId:ie,axis:W,index:pe},re,t?[{n:Wn,c:v}]:[])}}}ae("bedroom-right",1,15,oe,[[5,7],[10,12]]),ae("bedroom-front",0,6,xe);let Se={id:"bedroom",name:"Sypialnia",x0:ce.left,x1:oe-ut,z0:ce.rear,z1:xe-ut},C={id:"bathroom",name:"\u0141azienka",x0:ce.left,x1:Q-ut,z0:xe+ut,z1:ce.front},He=[{x:oe+ut,z:ce.rear},{x:ce.right,z:ce.rear},{x:ce.right,z:ce.front},{x:Q+ut,z:ce.front},{x:Q+ut,z:xe+ut},{x:oe+ut,z:xe+ut}],Ce=ie=>Math.abs(ie.reduce((be,ne,te)=>be+ne.x*ie[(te+1)%ie.length].z-ie[(te+1)%ie.length].x*ne.z,0))/2,Oe=[Se,C].map(ie=>({...ie,area:(ie.x1-ie.x0)*(ie.z1-ie.z0)}));Oe.push({id:"living",name:"Salon z kuchni\u0105",x0:Q+ut,x1:ce.right,z0:ce.rear,z1:ce.front,polygon:He,area:Ce(He)});let ye=g-Ae,T=17,_=-Ae/2,B=c/2+Ae,K=Math.ceil((B/I-_)/Ae)+1,ue=L+ut/I,J=[],Ne=Array.from({length:14},(ie,be)=>g+(be+1)*Ae);for(let ie of[-1,1]){let be=new D(ie*I,-E,0),ne=new D(ie*E,I,0),te=new D(0,ue,ye).addScaledVector(be,_),we=new Ze;we.name=ie===-1?"roof-left":"roof-right",l.roof.add(we);let Me=ie===-1?[{n:En.clone(),c:0},{n:En.clone().negate(),c:B}]:[{n:En.clone().negate(),c:0},{n:En.clone(),c:B}];for(let _e=1;_e<T;_e++){let Fe=ye+_e*Ae;ie===-1&&J.push(Fe);for(let U of V(K)){let X={...U,trim:null};F(we,X,be,ne,Xn,te.clone().addScaledVector(Xn,_e*Ae),{kind:"roof-slope",axis:0,index:_e,roofSide:ie,detail:"Mitre and eave ends are angled cuts"},ie===-1?0:1,Me)}}for(let _e=1;_e<K;_e++)for(let Fe of V(T))F(we,Fe,Xn,ne.clone().negate(),be,te.clone().addScaledVector(be,_e*Ae),{kind:"roof-cross",axis:1,index:_e,roofSide:ie},0,Me)}N.usableConceptArea=Oe.reduce((ie,be)=>ie+be.area,0),N.structuralFootprintArea=c*d,N.terraceArea=c*u,le.push({id:"edge-floor",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",description:"D\u0142ugi pion zajmuje miejsce po zako\u0144czeniu pod\u0142ogi. Kr\xF3tki pion opiera si\u0119 na pe\u0142nej desce.",position:[h+3*Ae,Mt/2,y-ut],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:l.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",description:"Pe\u0142ny wpust na ko\u0144cu deski i zako\u0144czenie kr\xF3tsze o dodatkowe 18 mm ods\u0142aniaj\u0105 miejsce na poprzeczne \u017Cebro pod\u0142ogi.",position:[h+7*Ae,Mt/2,g+ut],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:l.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:l.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",description:"D\u0142ugo\u015Bci zako\u0144cze\u0144 i pe\u0142ny wpust tworz\u0105 miejsce na \u015Bcian\u0119 oraz poprzeczne \u017Cebro pod\u0142ogi.",position:[oe,Mt/2,g+3*Ae],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:l.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:l.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",description:"Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie pozwalaj\u0105 po\u0142\u0105czy\u0107 obie \u015Bciany bez bocznych wybra\u0144.",position:[oe,3*Ae,g+ut],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",description:"Przegroda poprzeczna zamyka si\u0119 w warstwach ci\u0105g\u0142ej \u015Bciany. D\u0142ugo\u015Bci zako\u0144cze\u0144 pozostawiaj\u0105 miejsce na pion.",position:[oe,3*Ae,xe],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",description:"Strop le\u017Cy na poziomym rz\u0119dzie \u015Bciany. Pe\u0142ny wpust ko\u0144czy doln\u0105 desk\u0119, a g\xF3rne zako\u0144czenie zaczyna si\u0119 258 mm od osi w\u0119z\u0142a.",position:[h+ut,M+ut,g+9*Ae],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:l.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:p}]},{id:"connector-120",title:"Strop na poziomym \u017Cebrze \u2014 drugi kierunek",description:"Tak\u017Ce w drugim kierunku strop le\u017Cy nad poziomym \u017Cebrem \u015Bciany. Po\u0142\u0105czenie wynika z d\u0142ugo\u015Bci desek.",position:[h+3*Ae,M+ut,y-ut],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:l.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:p}]},{id:"ceiling-partition",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",description:"Strop opiera si\u0119 na poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie utrzymuj\u0105 wsp\xF3ln\u0105 lini\u0119 \u017Ceber.",position:[oe,M+ut,g+3*Ae],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:l.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:l.ceiling.name,axis:1,index:6}]});let ve={module:Ae,stockMaxLength:2.5,terminalDifference:Mt,pairWidth:2*$e,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:Mt,exteriorVerticalSlots:"outward",ceilingModule:p,ceilingTop:v,roofPitchDegrees:35,roofAxes:J,wallAxes:Ne,roofAxesAligned:Ne.every(ie=>J.some(be=>Math.abs(be-ie)<M_)),connectorBoards:k.filter(ie=>ie.connectorCuts.length).length,jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,connectorVariants:t?[]:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:t?"Geometric model only; joint strength and erection stability are not verified.":"Interior wall cap rows omitted in the lateral-cut layout.",loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:l,openings:he,rooms:Oe,dimensions:N,boards:k,joints:le,wallPanels:G,validation:ve}}var Ai=(...i)=>new D(...i);function wf(i,e,t){let n=new Ze;n.name="Wn\u0119trze \u2014 ods\u0142aniana \u015Bciana";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:l,floorTop:c,clearHeight:d}=i.dimensions,u=10*r,h=d,f=-u/2,g=u/2,y=Ai(-a+s/2,c,-l+7*r),m=new at().makeRotationY(-Math.PI/2).multiply(new at().makeTranslation(-y.x,-y.y,-y.z)),p=new Pt(Ai(f,0,-s/2-.001),Ai(g,h,s/2+.001)),S=[],M=[],v=[],R=[],E,I=0,b=0,x=(X,W=.85,re={})=>new wt({color:X,roughness:W,...re}),L=x("#e0e0d9"),P=x("#f4f3ec",.24),N=x("#303b35",.3,{metalness:.6}),z=x("#ae885a"),k=x("#c49b62"),V=new jt({color:"#685137",transparent:!0,opacity:.42}),A=x("#ecece5"),F=x("#bcbcb0"),O=(X,W,re,ee,q,pe,Te,Je)=>{let Ge=new lt(new sn(W,re,ee),Je);return Ge.position.set(q,pe,Te),X.add(Ge),Ge},G=(X,W,re)=>(X.userData.info=W,X.userData.kind=re,S.push(X),X),le=X=>{let W=document.createElement("canvas");W.width=512,W.height=512;let re=W.getContext("2d"),ee=35,q=()=>(ee=Math.imul(ee,1664525)+1013904223>>>0,ee/4294967296);re.fillStyle=X==="wood"?"#b89670":"#d0c8ae",re.fillRect(0,0,512,512);for(let Te=0;Te<(X==="wood"?1200:9500);Te++){let Je=q()*512,Ge=q()*512;re.lineWidth=.4+q(),re.strokeStyle=X==="wood"?Te%2?"#ac875c55":"#d6b68d66":Te%3?"#f0e9d444":"#9f96744a",re.beginPath(),re.moveTo(Je,Ge),re.lineTo(Je+(X==="wood"?1:(q()-.5)*17),Ge+(X==="wood"?50+q()*100:(q()-.5)*18)),re.stroke()}let pe=new ai(W);return pe.colorSpace=Ut,pe},he=x("#e8dac5",.84,{map:le("wood")}),me=x("#eee7d3",1,{map:le("fiber")});function oe(X){let W=X.index?X.toNonIndexed():X.clone(),re=W.attributes.position,ee=[];for(let pe=0;pe<re.count;pe+=3){let Te=[0,1,2].map(Je=>Ai().fromBufferAttribute(re,pe+Je));for(let[Je,Ge,cn]of[[0,f,1],[0,g,-1],[1,0,1],[1,h,-1]]){let Kt=[];for(let $n=0;$n<Te.length;$n++){let tr=Te[$n],ko=Te[($n+1)%Te.length],nr=(tr.getComponent(Je)-Ge)*cn,Ns=(ko.getComponent(Je)-Ge)*cn;nr>=0&&Kt.push(tr),nr>=0!=Ns>=0&&Kt.push(tr.clone().lerp(ko,nr/(nr-Ns)))}Te=Kt}for(let Je=1;Je<Te.length-1;Je++)ee.push(...Te[0].toArray(),...Te[Je].toArray(),...Te[Je+1].toArray())}W.dispose();let q=new gt;return q.setAttribute("position",new dt(ee,3)),q.computeVertexNormals(),q}for(let X of i.boards.filter(W=>W.surface==="left")){let W=X.mesh.geometry.clone().translate(...X.mesh.position.toArray()).applyMatrix4(m);if(W.computeBoundingBox(),!W.boundingBox.intersectsBox(p)){W.dispose();continue}let re=oe(W);if(W.dispose(),!re.attributes.position.count){re.dispose();continue}let ee=new lt(re,k);ee.add(new un(new on(re,30),V)),n.add(ee),G(ee,{...t(X),detailLabel:"Grubo\u015B\u0107 p\u0142yty",detail:"18 mm"},"structure"),M.push(ee)}for(let X=2;X<12;X++)for(let W=0;W<8;W++){let re=(7-X-.5)*r,ee=(W+.5)*r-c,q=Math.max(0,ee-(r-2*o)/2),pe=Math.min(h,ee+(r-2*o)/2);if(pe-q<.045)continue;let Te=O(n,r-2*o-.007,pe-q-.006,s-.025,re,(q+pe)/2,-.007,me);G(Te,{id:`C30-IZ-${X.toString().padStart(2,"0")}${W}`,type:"Kostka izolacji",surface:"Komora \u015Bciany zewn\u0119trznej",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((pe-q-.006)*1e3)} mm`,metricLabel:"Wymiary w widoku",detailLabel:"Warstwa",detail:"Izolacja mi\u0119dzy \u017Cebrami"},"insulation"),R.push(Te)}O(n,u,h,.018,0,h/2,-.14,F);function Q(X,W,re,ee){let q=new us,pe=W.map(Ge=>Ai(...Ge)),Te=pe[0];for(let Ge=1;Ge<pe.length-1;Ge++){let cn=Math.min(.07,pe[Ge].distanceTo(pe[Ge-1])/3,pe[Ge].distanceTo(pe[Ge+1])/3),Kt=pe[Ge].clone().addScaledVector(pe[Ge-1].clone().sub(pe[Ge]).normalize(),cn),$n=pe[Ge].clone().addScaledVector(pe[Ge+1].clone().sub(pe[Ge]).normalize(),cn);q.add(new br(Te,Kt)),q.add(new _r(Kt,pe[Ge],$n)),Te=$n}q.add(new br(Te,pe[pe.length-1]));let Je=new lt(new fo(q,Math.max(16,Math.ceil(q.getLength()*55)),re,10,!1),ee);return X.add(Je),Je}let xe=x("#327d9f",.48),Z=x("#b65744",.48),de=x("#c18c2d",.58),fe=x("#687572",.72),Le=(X,W,re,ee,q,pe)=>{let Te=Q(n,re,ee,q);return G(Te,{id:X,type:W,surface:"Warstwa instalacyjna od wn\u0119trza",length:pe==="power"?"Gniazda i o\u015Bwietlenie":"Przy\u0142\u0105cze umywalki",metricLabel:"Przeznaczenie",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},pe),v.push(Te),Te};Le("C30-W-01","Zimna woda",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,xe,"water"),Le("C30-W-02","Ciep\u0142a woda",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,Z,"water"),Le("C30-K-01","Odp\u0142yw umywalki",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,fe,"water"),Le("C30-E-01","Przew\xF3d do gniazd",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,de,"power"),Le("C30-E-02","Przew\xF3d do o\u015Bwietlenia",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,de,"power");let Re=O(n,.13,.12,.055,1.6,2.3,.191,x("#475751"));G(Re,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Warstwa instalacyjna od wn\u0119trza",length:"Instalacja elektryczna",metricLabel:"Obw\xF3d",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Re),O(n,u+.32,.12,1.82,0,-.06,.7,he);let Ue=x("#927d63");for(let X=f;X<g;X+=.19)O(n,.001,.001,1.8,X,.001,.7,Ue);let Ke=.249,Be=.025,se=f+.16,ce=g-.16,ae=.22,Se=h-.22;O(n,u,.22,Be,0,.11,Ke,L),O(n,u,.22,Be,0,h-.11,Ke,L),O(n,.16,Se-ae,Be,f+.08,(Se+ae)/2,Ke,L),O(n,.16,Se-ae,Be,g-.08,(Se+ae)/2,Ke,L);let C=O(n,1,Se-ae,Be,0,(Se+ae)/2,Ke,L);G(C,{id:"C30-WYK-01",type:"Malowana ok\u0142adzina \u015Bciany",surface:"\u015Aciana od strony wn\u0119trza",length:"Wyko\u0144czenie wn\u0119trza",metricLabel:"Warstwa",detailLabel:"Pod spodem",detail:"Konstrukcja, izolacja i instalacje"},"finish"),O(n,.09,h,.75,g+.045,h/2,.54,L),O(n,u+.06,.07,.65,0,h+.035,.45,L),O(n,u,.095,.022,0,.047,.278,A),O(n,.022,.095,.65,g-.01,.047,.61,A);let Ce=O(n,.007,Se-ae,.032,se,(ae+Se)/2,.255,x("#43948c")),Oe=new Ze;n.add(Oe),O(Oe,.79,1.03,.014,-1.17,1.8,.27,N);let ye=document.createElement("canvas");ye.width=64,ye.height=128;let T=ye.getContext("2d"),_=T.createLinearGradient(0,0,64,128);_.addColorStop(0,"#8caaa5"),_.addColorStop(.5,"#cfdbd3"),_.addColorStop(.51,"#acb7ad"),_.addColorStop(1,"#c5bda5"),T.fillStyle=_,T.fillRect(0,0,64,128);let B=new ai(ye);B.colorSpace=Ut;let K=new oi({map:B});O(Oe,.75,.99,.004,-1.17,1.8,.279,K);let ue=new mn(Ai(1,0,0),-se);Oe.traverse(X=>{X.isMesh&&(X.material=X.material.clone(),X.material.clippingPlanes=[ue])});let J=new Ze;n.add(J),O(J,1,.43,.43,-1.17,.51,.51,z),O(J,1.06,.035,.48,-1.17,.742,.52,P);let Ne=x("#8c6944");for(let X=-1.63;X<-.7;X+=.035)O(J,.009,.39,.008,X,.51,.729,Ne);let ve=new Vi;ve.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let ie=new xr;ie.absellipse(0,0,.285,.155,0,Math.PI*2,!0),ve.holes.push(ie);let be=new vr(ve,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});be.rotateX(-Math.PI/2);let ne=new lt(be,P);ne.position.set(-1.17,.765,.52),J.add(ne);let te=new lt(new Mi(.282,.25,.018,40),P);te.scale.z=.55,te.position.set(-1.17,.772,.52),J.add(te),Q(J,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,N),O(J,.045,.012,.032,-1.17,1.062,.335,N);let we=(X,W,re=!1)=>{let ee=O(n,.135,.11,.019,X,W,.277,A);if(re)O(n,.09,.07,.009,X,W,.292,L);else for(let q of[-.032,.032]){let pe=new lt(new Mi(.026,.026,.007,20),L);pe.rotation.x=Math.PI/2,pe.position.set(X+q,W,.291),n.add(pe);for(let Te of[-.008,.008])O(n,.006,.006,.004,X+q,W+Te,.297,N)}return ee};we(1.13,.47),we(1.4,1.24,!0),O(n,.42,.036,.07,-1.17,2.57,.3,N),O(n,.38,.008,.055,-1.17,2.548,.31,x("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let Me=new xo(new Pt,2653304);Me.visible=!1,n.add(Me);function _e(X){E=X,Me.visible=X!==C,n.updateMatrixWorld(!0),Me.visible&&Me.box.setFromObject(X),e(X.userData.info)}function Fe(X){if(X===C)return C.visible;if(I<=.001)return!1;X.geometry.computeBoundingBox();let W=X.geometry.boundingBox.clone().applyMatrix4(X.matrixWorld);return W.max.x>se&&W.min.x<se+(ce-se)*I&&W.max.y>ae&&W.min.y<Se}function U(X){I=wi.clamp(X,0,1);let W=se+(ce-se)*I,re=ce-W;C.scale.x=re,C.position.x=(W+ce)/2,C.visible=re>1e-5,ue.constant=-W,Oe.visible=W<-1.17+.395,Ce.position.x=W,Ce.visible=I>.005&&I<.995,E&&E!==C&&!Fe(E)&&_e(C)}return U(0),_e(C),{root:n,direction:Ai(.48,.2,3),focus:new Pt(Ai(f-.1,-.1,-.16),Ai(g+.12,h+.1,1.08)),annotation:"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",finish:U,selectAt(X){n.updateMatrixWorld(!0);let W=X.intersectObjects(n.children,!0).find(re=>{if(!re.object.isMesh)return!1;for(let ee=re.object;ee;ee=ee.parent)if(!ee.visible)return!1;return!(re.object.material.clippingPlanes||[]).some(ee=>ee.distanceToPoint(re.point)<0)});W?.object.userData.info&&_e(W.object)},next(){let X=S.filter(Fe);X.length&&_e(X[++b%X.length])},getSelected(){return E?.userData.info},getWallState(){return{reveal:I,boardCount:M.length,insulationCount:R.length,serviceCount:v.length,coverWidth:C.scale.x,insideFacing:!0}}}}var ft=(...i)=>new D(...i),Pr=ft(1,0,0),Ki=ft(0,1,0),Ir=ft(0,0,1),dc=Mt/2,qn=new wt({color:"#cba36b",roughness:.8,side:It}),ws=new wt({color:"#43948c",roughness:.75,side:It}),Kd=new wt({color:"#94784e",roughness:.85,side:It}),Ef=new jt({color:"#66543a",transparent:!0,opacity:.5}),Tf=new wt({color:"#287c78",roughness:.7,side:It,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S_=new Set([qn,ws,Kd,Ef,Tf]);function Af(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])S_.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var Lo;function Dr(){return Lo||(Lo=$d({wood:qn,end:qn}),Lo.root.updateMatrixWorld(!0),Lo.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),Lo}function Fo(i=6,e={}){let t=cc({},{},{connectors:!1}),n=new Ze,s=t.addBoard(n,{pixels:i,start:0,layer:0,...e},Pr,Ki,Ir,ft()).geometry;return s.translate(0,0,-$e/2),s}function uc(i,e=qn){let t=new lt(i,e);return t.add(new un(new on(i,30),Ef)),t}function w_(i){return lc(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function No(i,e,t,n,r,s,o=qn){for(let a of w_(e)){let l=Fo(a.n,{trim:a.trim}),c=new at().makeBasis(n,r,s);l.applyMatrix4(c);let d=uc(l,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*$e),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function E_(i,e,t){i.add(new Sr(t,e,.36,2653304,.095,.048))}function T_(i){let e=new Ze,t=6*Ae,n=10*Ae,r=new Ze,s=new Ze,o=new Ze;e.add(r,s,o);for(let c=1;c<10;c++)No(r,6,ft(-t/2,0,-n/2+c*Ae),Pr,Ki,Ir,ws);for(let c=1;c<6;c++)No(s,10,ft(-t/2+c*Ae,0,-n/2),Ir,Ki.clone().negate(),Pr,qn);for(let c of[-n/2+Ae,0,n/2-Ae])E_(o,ft(-t/2+Ae,.16,c),Ki);let a=new gr(new gt().setFromPoints([ft(-t/2,0,-n/2-.12),ft(t/2,0,-n/2-.12)]),new jt({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new at().makeBasis(Ki,Ir,Pr)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let l=i==="wall"?ft(1.5,1,2.6):ft(1.4,1.7,1.9);return{root:e,arrows:o,direction:l,annotation:i==="wall"?"Wpusty pion\xF3w \u2192 na zewn\u0105trz domu":i==="roof"?"Turkus: kr\xF3tszy kierunek po\u0142aci \xB7 wpusty do pokrycia":"Turkus: kr\xF3tszy kierunek no\u015Bny \xB7 wpusty do g\xF3ry",spread(c){s.position.y=c*.65}}}function hc(i,e,{crossing:t=[],plane:n=1,direction:r=ft(1.1,1.8,1.4),size:s=1.05}={}){let o=new Ze,a=new Ze,l=new Ze;o.add(a,l);let c=Dr(),d=(u,h)=>u.surface===h.surface&&u.axis===h.axis&&u.index===h.index;for(let u of c.boards){let h=i.findIndex(y=>d(u,y)),f=t.some(y=>d(u,y));if(h<0&&!f||u.bounds.distanceToPoint(e)>.5)continue;let g=uc(u.mesh.geometry.clone(),f?Kd:i[h].material||(h===0?qn:ws));g.position.copy(u.mesh.position).sub(e),g.userData.boardId=u.id,g.userData.base=g.position.clone(),g.userData.sign=u.bounds.getCenter(ft()).getComponent(n)<e.getComponent(n)?-1:1,(f?l:a).add(g)}return l.visible=!1,{root:o,direction:r,focus:new Pt(ft(-s/2,-s/2,-s/2),ft(s/2,s/2,s/2)),spread(u){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*u*.2);l.visible=!1},crossing(u){l.visible=u}}}function Rf(i,e){if(["slab","wall","roof"].includes(i.scene))return T_(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let r=new Ze,s=uc(Fo(e?.modules||6,e||{}),ws);return s.position.x=-3*Ae,r.add(s),{root:r,direction:ft(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Deska grzebieniowa \xB7 naci\u0119cia do po\u0142owy wysoko\u015Bci"}}if(i.scene==="continuity"){let r=new Ze;return No(r,12,ft(-6*Ae,0,0),Pr,Ki,Ir,qn),r.children.forEach(s=>s.material=s.userData.ply?ws:qn),{root:r,direction:ft(.6,.85,3),spread(s){r.children.forEach(o=>o.position.z=(o.userData.ply-.5)*($e+s*.42))},annotation:"Dwie warstwy \xB7 przesuni\u0119cie styk\xF3w o 2 modu\u0142y"}}if(i.scene==="cross"){let r=new Ze,s=new Ze,o=new Ze;return r.add(s,o),No(s,4,ft(-2*Ae,0,0),Pr,Ki,Ir,ws),No(o,4,ft(0,0,-2*Ae),Ir,Ki.clone().negate(),Pr,qn),{root:r,direction:ft(1.4,1.6,2),spread(a){o.position.y=a*.65},annotation:"Wpusty przeciwnych rodzin \u017Ceber otwieraj\u0105 si\u0119 w przeciwne strony"}}let t=Dr(),n=t.dimensions;if(i.scene==="joint"){let r=t.joints.find(s=>s.id===i.joint);return hc(r.members,ft(...r.position),{crossing:r.crossingMembers||[],plane:r.planeAxis,direction:ft(...r.viewDirection)})}return i.scene==="corner"?hc([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],ft(n.halfWidth-dc,3*Ae,n.halfDepth-dc),{plane:1,direction:ft(1.4,2,1.6)}):i.scene==="roof-wall"?hc([{surface:"right",axis:1,index:3},{surface:"roof-right",axis:0,index:4},{surface:"Sufit",axis:0,index:3,material:Kd}],ft(n.halfWidth-dc,n.ceilingTop,-n.halfDepth+3*Ae),{plane:2,direction:ft(1.5,1.2,2),size:1.2}):hc([{surface:"roof-left",axis:0,index:8},{surface:"roof-right",axis:0,index:8}],ft(0,n.roofUnderRidgeY+dc,-n.halfDepth+7*Ae),{plane:2,direction:ft(1.4,1.3,2.4),size:1.3})}var A_={rear:"\u015Aciana zewn\u0119trzna od tarasu",front:"\u015Aciana zewn\u0119trzna od wej\u015Bcia",left:"Lewa \u015Bciana zewn\u0119trzna",right:"Prawa \u015Bciana zewn\u0119trzna","bedroom-right":"\u015Aciana wewn\u0119trzna","bedroom-front":"Przegroda sypialni i \u0142azienki","roof-left":"Lewa po\u0142a\u0107 dachu","roof-right":"Prawa po\u0142a\u0107 dachu"};function Uo(i){let e=1/0,t=-1/0,n=new D(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=ft().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Deska \u0142\u0105czeniowa":i.trim?"Deska zako\u0144czeniowa":i.custom?"Deska dopasowana do otworu lub skosu":"Deska grzebieniowa",surface:A_[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Cf(i,e){let t=Dr();if(i==="wall")return wf(t,e,Uo);let n=new Ze,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=Do(s,!1);s.forEach(d=>d.dispose()),n.add(uc(o,qn));let a=new lt(new gt,Tf);n.add(a);let l,c=d=>{l=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(Uo(d))};return c(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:ft(1.4,1,1.5),annotation:"Wybierz element, aby zobaczy\u0107 jego identyfikator",selectAt(d){let u=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(f=>({b:h,d:f.distance}))).sort((h,f)=>h.d-f.d);u[0]&&c(u[0].b)},next(){c(r[(r.indexOf(l)+1)%r.length])},getSelected(){return Uo(l)}}}var Es={model:"Combstruct 30",totalBoards:1398,material:{lengthM:2150.173969464595,fullBoardLengthM:2.5,fullBoardEquivalents:860.0695877858379,fullBoards:861,sheets:173},geometrySha256:"eefdd78c29065835c89cf8bd33458e5d9adf814e6205c21f30fbc1eb52bbfec3",toleranceM:5e-5,families:[{id:"standard",name:"Deska zwyk\u0142a",count:927,lengths:{"3":95,"4":242,"5":425,"6":165},sample:"board-147"},{id:"ending",name:"Deska zako\u0144czeniowa",count:471,lengths:{"3":106,"4":270,"5":77,"6":18},sample:"board-1232"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-368",null],["board-373",null],["board-378",null],["board-645",null],["board-651",null],["board-1086",null],["board-1105",null],["board-323",null],["board-329",null],["board-335",null],["board-767",null],["board-772",null],["board-777",null],["board-613",null],["board-669",null],["board-318",null],["board-342",null],["board-349",null],["board-356",null],["board-363",null],["board-384",null],["board-469",null],["board-474",null],["board-479",null],["board-484",null],["board-489",null],["board-494",null],["board-499",null],["board-504",null],["board-509",null],["board-514",null],["board-519",null],["board-524",null],["board-529",null],["board-534",null],["board-608",null],["board-619",null],["board-625",null],["board-632",null],["board-639",null],["board-657",null],["board-663",null],["board-675",null],["board-752",null],["board-757",null],["board-762",null],["board-782",null],["board-787",null],["board-792",null],["board-797",null],["board-802",null],["board-807",null],["board-812",null],["board-817",null],["board-1067",null],["board-1071",null],["board-1075",null],["board-1079",null],["board-1083",null],["board-1090",null],["board-1094",null],["board-1098",null],["board-1102",null],["board-1109",null],["board-1113",null],["board-1117",null],["board-1145",null],["board-1149",null],["board-1153",null],["board-1157",null],["board-1161",null],["board-320","board-37"],["board-326","board-37"],["board-332","board-37"],["board-764","board-67"],["board-769","board-74"],["board-774","board-81"],["board-610","board-156"],["board-666","board-240"],["board-315","board-37"],["board-338","board-38"],["board-345","board-38"],["board-352","board-38"],["board-359","board-38"],["board-381","board-39"],["board-466","board-47"],["board-471","board-54"],["board-476","board-61"],["board-481","board-68"],["board-486","board-75"],["board-491","board-82"],["board-496","board-89"],["board-501","board-96"],["board-506","board-103"],["board-511","board-110"],["board-516","board-117"],["board-521","board-124"],["board-526","board-131"],["board-531","board-138"],["board-605","board-146"],["board-616","board-166"],["board-622","board-176"],["board-628","board-186"],["board-635","board-195"],["board-654","board-222"],["board-660","board-231"],["board-672","board-249"],["board-749","board-46"],["board-754","board-53"],["board-759","board-60"],["board-779","board-88"],["board-784","board-95"],["board-789","board-102"],["board-794","board-109"],["board-799","board-116"],["board-804","board-123"],["board-809","board-130"],["board-814","board-137"],["board-1065","board-44"],["board-1069","board-51"],["board-1073","board-58"],["board-1077","board-65"],["board-1081","board-72"],["board-1088","board-86"],["board-1092","board-93"],["board-1096","board-100"],["board-1100","board-107"],["board-1107","board-121"],["board-1111","board-128"],["board-1115","board-135"],["board-1143","board-144"],["board-1147","board-154"],["board-1151","board-164"],["board-1155","board-174"],["board-1159","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-381"],["board-410","board-258"],["board-411","board-410"],["board-412","board-501"],["board-413","board-412"],["board-541","board-413"],["board-542","board-541"],["board-543","board-654"],["board-701","board-261"],["board-702","board-701"],["board-703","board-702"],["board-994","board-259"],["board-995","board-994"],["board-996","board-1088"],["board-997","board-1092"],["board-998","board-542"],["board-1121","board-411"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-414","board-258"],["board-415","board-411"],["board-416","board-412"],["board-536","board-413"],["board-537","board-536"],["board-538","board-542"],["board-539","board-543"],["board-540","board-539"],["board-704","board-257"],["board-705","board-702"],["board-706","board-703"],["board-999","board-255"],["board-1000","board-995"],["board-1001","board-996"],["board-1002","board-997"],["board-1003","board-998"],["board-1119","board-411"],["board-1120","board-1119"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-381"],["board-417","board-266"],["board-418","board-417"],["board-419","board-501"],["board-420","board-419"],["board-549","board-420"],["board-550","board-549"],["board-551","board-654"],["board-707","board-269"],["board-708","board-707"],["board-709","board-708"],["board-1004","board-267"],["board-1005","board-1004"],["board-1006","board-1088"],["board-1007","board-1092"],["board-1008","board-550"],["board-1124","board-418"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-421","board-266"],["board-422","board-418"],["board-423","board-419"],["board-544","board-420"],["board-545","board-544"],["board-546","board-550"],["board-547","board-551"],["board-548","board-547"],["board-710","board-265"],["board-711","board-708"],["board-712","board-709"],["board-1009","board-263"],["board-1010","board-1005"],["board-1011","board-1006"],["board-1012","board-1007"],["board-1013","board-1008"],["board-1122","board-418"],["board-1123","board-1122"],["board-274","board-315"],["board-275","board-338"],["board-276","board-275"],["board-277","board-381"],["board-424","board-274"],["board-425","board-424"],["board-426","board-501"],["board-427","board-426"],["board-557","board-427"],["board-558","board-557"],["board-559","board-654"],["board-713","board-277"],["board-714","board-779"],["board-715","board-714"],["board-1014","board-275"],["board-1015","board-1014"],["board-1016","board-1088"],["board-1017","board-1092"],["board-1018","board-558"],["board-1127","board-425"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-428","board-274"],["board-429","board-425"],["board-430","board-426"],["board-552","board-427"],["board-553","board-552"],["board-554","board-558"],["board-555","board-559"],["board-556","board-555"],["board-716","board-273"],["board-717","board-714"],["board-718","board-715"],["board-1019","board-271"],["board-1020","board-1015"],["board-1021","board-1016"],["board-1022","board-1017"],["board-1023","board-1018"],["board-1125","board-425"],["board-1126","board-1125"],["board-282","board-315"],["board-283","board-338"],["board-284","board-283"],["board-285","board-381"],["board-431","board-282"],["board-432","board-431"],["board-433","board-501"],["board-434","board-433"],["board-567","board-434"],["board-568","board-616"],["board-569","board-568"],["board-570","board-654"],["board-571","board-672"],["board-719","board-285"],["board-720","board-779"],["board-721","board-720"],["board-1024","board-283"],["board-1025","board-1024"],["board-1026","board-1088"],["board-1027","board-1092"],["board-1028","board-569"],["board-1130","board-432"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-435","board-282"],["board-436","board-432"],["board-437","board-433"],["board-560","board-434"],["board-561","board-568"],["board-562","board-561"],["board-563","board-569"],["board-564","board-570"],["board-565","board-564"],["board-566","board-571"],["board-722","board-281"],["board-723","board-720"],["board-724","board-721"],["board-1029","board-279"],["board-1030","board-1025"],["board-1031","board-1026"],["board-1032","board-1027"],["board-1033","board-1028"],["board-1128","board-432"],["board-1129","board-1128"],["board-316","board-278"],["board-339","board-279"],["board-346","board-280"],["board-353","board-280"],["board-360","board-280"],["board-382","board-281"],["board-467","board-431"],["board-472","board-431"],["board-477","board-431"],["board-482","board-431"],["board-487","board-432"],["board-492","board-432"],["board-497","board-432"],["board-502","board-433"],["board-507","board-433"],["board-512","board-433"],["board-517","board-433"],["board-522","board-434"],["board-527","board-434"],["board-532","board-434"],["board-606","board-560"],["board-617","board-561"],["board-623","board-562"],["board-629","board-562"],["board-636","board-563"],["board-655","board-564"],["board-661","board-565"],["board-673","board-566"],["board-750","board-719"],["board-755","board-719"],["board-760","board-719"],["board-780","board-720"],["board-785","board-720"],["board-790","board-720"],["board-795","board-720"],["board-800","board-721"],["board-805","board-721"],["board-810","board-721"],["board-815","board-721"],["board-1066","board-1024"],["board-1070","board-1024"],["board-1074","board-1024"],["board-1078","board-1024"],["board-1082","board-1025"],["board-1089","board-1026"],["board-1093","board-1027"],["board-1097","board-1027"],["board-1101","board-1027"],["board-1108","board-1028"],["board-1112","board-1028"],["board-1116","board-1028"],["board-1144","board-1128"],["board-1148","board-1128"],["board-1152","board-1128"],["board-1156","board-1129"],["board-1160","board-1129"],["board-290","board-316"],["board-291","board-339"],["board-292","board-291"],["board-293","board-382"],["board-438","board-290"],["board-439","board-438"],["board-440","board-502"],["board-441","board-440"],["board-579","board-441"],["board-580","board-617"],["board-581","board-580"],["board-582","board-655"],["board-583","board-673"],["board-725","board-293"],["board-726","board-780"],["board-727","board-726"],["board-1034","board-291"],["board-1035","board-1034"],["board-1036","board-1089"],["board-1037","board-1093"],["board-1038","board-581"],["board-1133","board-439"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-442","board-290"],["board-443","board-439"],["board-444","board-440"],["board-572","board-441"],["board-573","board-580"],["board-574","board-573"],["board-575","board-581"],["board-576","board-582"],["board-577","board-576"],["board-578","board-583"],["board-728","board-289"],["board-729","board-726"],["board-730","board-727"],["board-1039","board-287"],["board-1040","board-1035"],["board-1041","board-1036"],["board-1042","board-1037"],["board-1043","board-1038"],["board-1131","board-439"],["board-1132","board-1131"],["board-1068","board-1034"],["board-1072","board-1034"],["board-1076","board-1034"],["board-1080","board-1034"],["board-1084","board-1035"],["board-1091","board-1036"],["board-1095","board-1037"],["board-1099","board-1037"],["board-1103","board-1037"],["board-1110","board-1038"],["board-1114","board-1038"],["board-1118","board-1038"],["board-1146","board-1131"],["board-1150","board-1131"],["board-1154","board-1131"],["board-1158","board-1132"],["board-1162","board-1132"],["board-470","board-438"],["board-475","board-438"],["board-480","board-438"],["board-485","board-438"],["board-490","board-439"],["board-495","board-439"],["board-500","board-439"],["board-505","board-440"],["board-510","board-440"],["board-515","board-440"],["board-520","board-440"],["board-525","board-441"],["board-530","board-441"],["board-535","board-441"],["board-753","board-725"],["board-758","board-725"],["board-763","board-725"],["board-783","board-726"],["board-788","board-726"],["board-793","board-726"],["board-798","board-726"],["board-803","board-727"],["board-808","board-727"],["board-813","board-727"],["board-818","board-727"],["board-385","board-289"],["board-676","board-578"],["board-319","board-286"],["board-609","board-572"],["board-343","board-287"],["board-350","board-288"],["board-357","board-288"],["board-364","board-288"],["board-620","board-573"],["board-626","board-574"],["board-633","board-574"],["board-640","board-575"],["board-658","board-576"],["board-664","board-577"],["board-298","board-316"],["board-321","board-298"],["board-327","board-298"],["board-333","board-298"],["board-299","board-298"],["board-300","board-299"],["board-366","board-300"],["board-371","board-300"],["board-376","board-300"],["board-445","board-298"],["board-446","board-445"],["board-447","board-502"],["board-448","board-447"],["board-588","board-448"],["board-611","board-588"],["board-589","board-588"],["board-642","board-589"],["board-648","board-589"],["board-590","board-589"],["board-667","board-590"],["board-731","board-300"],["board-765","board-731"],["board-770","board-731"],["board-732","board-731"],["board-775","board-732"],["board-733","board-732"],["board-1044","board-299"],["board-1045","board-1044"],["board-1085","board-1045"],["board-1046","board-1093"],["board-1104","board-1046"],["board-1047","board-1046"],["board-1136","board-446"],["board-1087","board-1045"],["board-1106","board-1046"],["board-768","board-731"],["board-773","board-731"],["board-778","board-732"],["board-324","board-298"],["board-330","board-298"],["board-336","board-298"],["board-369","board-300"],["board-374","board-300"],["board-379","board-300"],["board-614","board-588"],["board-646","board-589"],["board-652","board-589"],["board-670","board-590"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-449","board-298"],["board-450","board-446"],["board-451","board-447"],["board-584","board-448"],["board-585","board-584"],["board-586","board-589"],["board-587","board-586"],["board-734","board-297"],["board-735","board-732"],["board-736","board-733"],["board-1048","board-295"],["board-1049","board-1045"],["board-1050","board-1046"],["board-1134","board-446"],["board-1135","board-1134"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-452","board-305"],["board-453","board-452"],["board-454","board-502"],["board-455","board-454"],["board-595","board-455"],["board-596","board-595"],["board-597","board-596"],["board-737","board-307"],["board-738","board-737"],["board-739","board-738"],["board-1051","board-306"],["board-1052","board-1051"],["board-1053","board-1093"],["board-1054","board-1053"],["board-1139","board-453"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-456","board-305"],["board-457","board-453"],["board-458","board-454"],["board-591","board-455"],["board-592","board-591"],["board-593","board-596"],["board-594","board-593"],["board-740","board-304"],["board-741","board-738"],["board-742","board-739"],["board-1055","board-302"],["board-1056","board-1052"],["board-1057","board-1053"],["board-1137","board-453"],["board-1138","board-1137"],["board-312","board-316"],["board-313","board-312"],["board-314","board-313"],["board-459","board-312"],["board-460","board-459"],["board-461","board-502"],["board-462","board-461"],["board-602","board-462"],["board-603","board-602"],["board-604","board-603"],["board-743","board-314"],["board-744","board-743"],["board-745","board-744"],["board-1058","board-313"],["board-1059","board-1058"],["board-1060","board-1093"],["board-1061","board-1060"],["board-1142","board-460"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-463","board-312"],["board-464","board-460"],["board-465","board-461"],["board-598","board-462"],["board-599","board-598"],["board-600","board-603"],["board-601","board-600"],["board-746","board-311"],["board-747","board-744"],["board-748","board-745"],["board-1062","board-309"],["board-1063","board-1059"],["board-1064","board-1060"],["board-1140","board-460"],["board-1141","board-1140"],["board-468","board-470"],["board-473","board-475"],["board-478","board-480"],["board-483","board-485"],["board-488","board-490"],["board-493","board-495"],["board-498","board-500"],["board-503","board-505"],["board-508","board-510"],["board-513","board-515"],["board-518","board-520"],["board-523","board-525"],["board-528","board-530"],["board-533","board-535"],["board-751","board-753"],["board-756","board-758"],["board-761","board-763"],["board-766","board-768"],["board-771","board-773"],["board-776","board-778"],["board-781","board-783"],["board-786","board-788"],["board-791","board-793"],["board-796","board-798"],["board-801","board-803"],["board-806","board-808"],["board-811","board-813"],["board-816","board-818"],["board-317","board-319"],["board-607","board-609"],["board-383","board-385"],["board-674","board-676"],["board-322","board-324"],["board-612","board-614"],["board-377","board-379"],["board-668","board-670"],["board-328","board-330"],["board-618","board-620"],["board-372","board-374"],["board-662","board-664"],["board-334","board-336"],["board-624","board-626"],["board-367","board-369"],["board-656","board-658"],["board-340","board-343"],["board-347","board-350"],["board-354","board-357"],["board-361","board-364"],["board-630","board-633"],["board-637","board-640"],["board-643","board-646"],["board-649","board-652"],["board-380","board-377"],["board-671","board-668"],["board-325","board-322"],["board-615","board-612"],["board-375","board-372"],["board-665","board-662"],["board-331","board-328"],["board-621","board-618"],["board-370","board-367"],["board-659","board-656"],["board-337","board-334"],["board-627","board-624"],["board-365","board-361"],["board-653","board-649"],["board-344","board-340"],["board-634","board-630"],["board-358","board-354"],["board-647","board-643"],["board-351","board-347"],["board-641","board-637"],["board-341","board-340"],["board-631","board-630"],["board-362","board-361"],["board-650","board-649"],["board-348","board-347"],["board-638","board-637"],["board-355","board-354"],["board-644","board-643"],["board-819","board-463"],["board-820","board-819"],["board-821","board-1062"],["board-822","board-821"],["board-823","board-463"],["board-824","board-820"],["board-825","board-821"],["board-826","board-463"],["board-827","board-826"],["board-828","board-1062"],["board-829","board-828"],["board-830","board-463"],["board-831","board-827"],["board-832","board-828"],["board-833","board-463"],["board-834","board-833"],["board-835","board-1062"],["board-836","board-835"],["board-837","board-463"],["board-838","board-834"],["board-839","board-835"],["board-840","board-463"],["board-841","board-840"],["board-842","board-1062"],["board-843","board-842"],["board-844","board-463"],["board-845","board-841"],["board-846","board-842"],["board-847","board-464"],["board-848","board-847"],["board-849","board-1063"],["board-850","board-849"],["board-851","board-463"],["board-852","board-848"],["board-853","board-849"],["board-854","board-464"],["board-855","board-854"],["board-856","board-1063"],["board-857","board-856"],["board-858","board-464"],["board-859","board-855"],["board-860","board-856"],["board-861","board-464"],["board-862","board-861"],["board-863","board-1063"],["board-864","board-863"],["board-865","board-464"],["board-866","board-862"],["board-867","board-863"],["board-868","board-464"],["board-869","board-868"],["board-870","board-1063"],["board-871","board-870"],["board-872","board-464"],["board-873","board-869"],["board-874","board-870"],["board-875","board-464"],["board-876","board-875"],["board-877","board-1063"],["board-878","board-877"],["board-879","board-464"],["board-880","board-876"],["board-881","board-877"],["board-882","board-465"],["board-883","board-882"],["board-884","board-1064"],["board-885","board-884"],["board-886","board-464"],["board-887","board-883"],["board-888","board-884"],["board-889","board-465"],["board-890","board-889"],["board-891","board-1064"],["board-892","board-891"],["board-893","board-465"],["board-894","board-890"],["board-895","board-891"],["board-896","board-465"],["board-897","board-896"],["board-898","board-1064"],["board-899","board-898"],["board-900","board-465"],["board-901","board-897"],["board-902","board-898"],["board-903","board-465"],["board-904","board-903"],["board-905","board-1064"],["board-906","board-905"],["board-907","board-465"],["board-908","board-904"],["board-909","board-905"],["board-910","board-465"],["board-911","board-910"],["board-912","board-1064"],["board-913","board-912"],["board-914","board-465"],["board-915","board-911"],["board-916","board-912"],["board-917","board-308"],["board-918","board-840"],["board-919","board-868"],["board-920","board-889"],["board-921","board-308"],["board-922","board-847"],["board-923","board-882"],["board-924","board-308"],["board-925","board-840"],["board-926","board-868"],["board-927","board-889"],["board-928","board-308"],["board-929","board-847"],["board-930","board-882"],["board-931","board-309"],["board-932","board-840"],["board-933","board-868"],["board-934","board-889"],["board-935","board-308"],["board-936","board-847"],["board-937","board-882"],["board-938","board-309"],["board-939","board-841"],["board-940","board-869"],["board-941","board-890"],["board-942","board-309"],["board-943","board-848"],["board-944","board-883"],["board-945","board-309"],["board-946","board-841"],["board-947","board-869"],["board-948","board-890"],["board-949","board-309"],["board-950","board-848"],["board-951","board-883"],["board-952","board-310"],["board-953","board-849"],["board-954","board-884"],["board-955","board-310"],["board-956","board-856"],["board-957","board-891"],["board-958","board-310"],["board-959","board-849"],["board-960","board-884"],["board-961","board-310"],["board-962","board-856"],["board-963","board-891"],["board-964","board-310"],["board-965","board-849"],["board-966","board-884"],["board-967","board-310"],["board-968","board-856"],["board-969","board-891"],["board-970","board-311"],["board-971","board-849"],["board-972","board-884"],["board-973","board-310"],["board-974","board-856"],["board-975","board-891"],["board-976","board-311"],["board-977","board-850"],["board-978","board-885"],["board-979","board-311"],["board-980","board-857"],["board-981","board-892"],["board-982","board-311"],["board-983","board-850"],["board-984","board-885"],["board-985","board-311"],["board-986","board-857"],["board-987","board-892"],["board-988","board-311"],["board-989","board-850"],["board-990","board-885"],["board-991","board-311"],["board-992","board-857"],["board-993","board-892"],["board-386","board-317"],["board-387","board-340"],["board-388","board-367"],["board-677","board-607"],["board-678","board-630"],["board-679","board-656"],["board-389","board-317"],["board-390","board-334"],["board-391","board-361"],["board-680","board-607"],["board-681","board-624"],["board-682","board-649"],["board-392","board-322"],["board-393","board-340"],["board-394","board-367"],["board-683","board-612"],["board-684","board-630"],["board-685","board-656"],["board-395","board-322"],["board-396","board-334"],["board-397","board-361"],["board-686","board-612"],["board-687","board-624"],["board-688","board-649"],["board-398","board-334"],["board-399","board-340"],["board-400","board-367"],["board-689","board-624"],["board-690","board-630"],["board-691","board-656"],["board-401","board-334"],["board-402","board-334"],["board-403","board-361"],["board-692","board-624"],["board-693","board-624"],["board-694","board-649"],["board-404","board-340"],["board-405","board-340"],["board-695","board-630"],["board-696","board-630"],["board-406","board-340"],["board-407","board-361"],["board-697","board-630"],["board-698","board-649"],["board-1168","board-470"],["board-1172","board-475"],["board-1176","board-480"],["board-1180","board-485"],["board-1184","board-490"],["board-1188","board-495"],["board-1192","board-500"],["board-1196","board-505"],["board-1200","board-510"],["board-1204","board-515"],["board-1208","board-520"],["board-1212","board-525"],["board-1216","board-530"],["board-1220","board-535"],["board-1224","board-677"],["board-1282","board-377"],["board-1286","board-753"],["board-1290","board-758"],["board-1294","board-763"],["board-1298","board-768"],["board-1302","board-773"],["board-1306","board-778"],["board-1310","board-783"],["board-1314","board-788"],["board-1318","board-793"],["board-1322","board-798"],["board-1326","board-803"],["board-1330","board-808"],["board-1334","board-813"],["board-1338","board-818"],["board-1166","board-386"],["board-1164","board-1166"],["board-1170","board-1168"],["board-1174","board-1172"],["board-1178","board-1176"],["board-1182","board-1180"],["board-1186","board-1184"],["board-1190","board-1188"],["board-1194","board-1192"],["board-1198","board-1196"],["board-1202","board-1200"],["board-1206","board-1204"],["board-1210","board-1208"],["board-1214","board-1212"],["board-1218","board-1216"],["board-1222","board-1220"],["board-1226","board-1224"],["board-1284","board-1282"],["board-1288","board-1286"],["board-1292","board-1290"],["board-1296","board-1294"],["board-1300","board-1298"],["board-1304","board-1302"],["board-1308","board-1306"],["board-1312","board-1310"],["board-1316","board-1314"],["board-1320","board-1318"],["board-1324","board-1322"],["board-1328","board-1326"],["board-1332","board-1330"],["board-1336","board-1334"],["board-1340","board-1338"],["board-1344","board-679"],["board-1342","board-1344"],["board-1278","board-1164"],["board-1279","board-1180"],["board-1280","board-1204"],["board-1396","board-1282"],["board-1397","board-1298"],["board-1398","board-1322"],["board-1275","board-1164"],["board-1276","board-1184"],["board-1277","board-1208"],["board-1393","board-1282"],["board-1394","board-1302"],["board-1395","board-1326"],["board-1272","board-386"],["board-1273","board-485"],["board-1274","board-515"],["board-1390","board-388"],["board-1391","board-768"],["board-1392","board-798"],["board-1269","board-386"],["board-1270","board-490"],["board-1271","board-520"],["board-1387","board-388"],["board-1388","board-773"],["board-1389","board-803"],["board-1266","board-1164"],["board-1267","board-1180"],["board-1268","board-1204"],["board-1384","board-1282"],["board-1385","board-1298"],["board-1386","board-1322"],["board-1263","board-1164"],["board-1264","board-1184"],["board-1265","board-1208"],["board-1381","board-1282"],["board-1382","board-1302"],["board-1383","board-1326"],["board-1260","board-1164"],["board-1261","board-1180"],["board-1262","board-1204"],["board-1378","board-1282"],["board-1379","board-1298"],["board-1380","board-1322"],["board-1257","board-1164"],["board-1258","board-1184"],["board-1259","board-1208"],["board-1375","board-1282"],["board-1376","board-1302"],["board-1377","board-1326"],["board-1163","board-1164"],["board-1167","board-1168"],["board-1171","board-1172"],["board-1175","board-1176"],["board-1179","board-1180"],["board-1183","board-1184"],["board-1187","board-1188"],["board-1191","board-1192"],["board-1195","board-1196"],["board-1199","board-1200"],["board-1203","board-1204"],["board-1207","board-1208"],["board-1211","board-1212"],["board-1215","board-1216"],["board-1219","board-1220"],["board-1223","board-618"],["board-699","board-1223"],["board-700","board-699"],["board-1281","board-1163"],["board-408","board-1281"],["board-409","board-408"],["board-1285","board-1167"],["board-1289","board-1171"],["board-1293","board-1175"],["board-1297","board-1179"],["board-1301","board-1183"],["board-1305","board-1187"],["board-1309","board-1191"],["board-1313","board-1195"],["board-1317","board-1199"],["board-1321","board-1203"],["board-1325","board-1207"],["board-1329","board-1211"],["board-1333","board-1215"],["board-1337","board-1219"],["board-1341","board-1223"],["board-1254","board-1163"],["board-1255","board-1179"],["board-1256","board-1203"],["board-1372","board-375"],["board-1373","board-1297"],["board-1374","board-1321"],["board-1251","board-1163"],["board-1252","board-1183"],["board-1253","board-1207"],["board-1369","board-372"],["board-1370","board-1301"],["board-1371","board-1325"],["board-1165","board-1163"],["board-1169","board-1167"],["board-1173","board-1171"],["board-1177","board-1175"],["board-1181","board-1179"],["board-1185","board-1183"],["board-1189","board-1187"],["board-1193","board-1191"],["board-1197","board-1195"],["board-1201","board-1199"],["board-1205","board-1203"],["board-1209","board-1207"],["board-1213","board-1211"],["board-1217","board-1215"],["board-1221","board-1219"],["board-1225","board-1223"],["board-1283","board-1163"],["board-1287","board-1167"],["board-1291","board-1171"],["board-1295","board-1175"],["board-1299","board-1179"],["board-1303","board-1183"],["board-1307","board-1187"],["board-1311","board-1191"],["board-1315","board-1195"],["board-1319","board-1199"],["board-1323","board-1203"],["board-1327","board-1207"],["board-1331","board-1211"],["board-1335","board-1215"],["board-1339","board-1219"],["board-1343","board-1223"],["board-1248","board-1163"],["board-1249","board-1179"],["board-1250","board-1203"],["board-1366","board-1281"],["board-1367","board-1297"],["board-1368","board-1321"],["board-1245","board-1163"],["board-1246","board-1183"],["board-1247","board-1207"],["board-1363","board-1281"],["board-1364","board-1301"],["board-1365","board-1325"],["board-1242","board-1163"],["board-1243","board-1179"],["board-1244","board-1203"],["board-1360","board-1281"],["board-1361","board-1297"],["board-1362","board-1321"],["board-1239","board-1163"],["board-1240","board-1183"],["board-1241","board-1207"],["board-1357","board-1281"],["board-1358","board-1301"],["board-1359","board-1325"],["board-1236","board-1163"],["board-1237","board-1179"],["board-1238","board-1203"],["board-1354","board-1281"],["board-1355","board-1297"],["board-1356","board-1321"],["board-1233","board-1163"],["board-1234","board-1183"],["board-1235","board-1207"],["board-1351","board-1281"],["board-1352","board-1301"],["board-1353","board-1325"],["board-1230","board-408"],["board-1231","board-1179"],["board-1232","board-1203"],["board-1348","board-408"],["board-1349","board-1297"],["board-1350","board-1321"],["board-1227","board-408"],["board-1228","board-1183"],["board-1229","board-1207"],["board-1345","board-408"],["board-1346","board-1301"],["board-1347","board-1325"]]};var zo={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"eefdd78c29065835c89cf8bd33458e5d9adf814e6205c21f30fbc1eb52bbfec3",totalBoards:1365,installedPieces:1398,material:{lengthM:2434.36,fullBoardEquivalents:973.744,fullBoards:974,sheets:195},families:[{id:"standard",name:"Deska zwyk\u0142a",count:903,variants:[{id:"standard-1",count:165,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:408,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:71,modules:4,ending:!1,lengthM:1.6846666666666668,preview:{stockId:"stock-311",positions:[-.842333,-.12,-.009,-.842333,0,-.009,-.824333,0,-.009,.842333,0,-.009,.842333,-.12,-.009,.425667,.12,-.009,.806333,.12,-.009,.806333,0,-.009,.009,.12,-.009,.389667,.12,-.009,.389667,0,-.009,-.407667,.12,-.009,-.027,.12,-.009,-.027,0,-.009,-.824333,.12,-.009,-.443667,.12,-.009,-.443667,0,-.009,.425667,0,-.009,.009,0,-.009,-.407667,0,-.009,-.824333,0,.009,-.842333,0,.009,-.842333,-.12,.009,.842333,-.12,.009,.842333,0,.009,.806333,0,.009,.806333,.12,.009,.425667,.12,.009,.389667,0,.009,.389667,.12,.009,.009,.12,.009,-.027,0,.009,-.027,.12,.009,-.407667,.12,.009,-.443667,0,.009,-.443667,.12,.009,-.824333,.12,.009,.425667,0,.009,.009,0,.009,-.407667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6846666666666668}},{id:"standard-4",count:169,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-5",count:82,modules:3,ending:!1,lengthM:1.268,preview:{stockId:"stock-45",positions:[-.634,-.12,-.009,-.634,0,-.009,-.598,0,-.009,.634,0,-.009,.634,-.12,-.009,.235333,.12,-.009,.616,.12,-.009,.616,0,-.009,-.181333,.12,-.009,.199333,.12,-.009,.199333,0,-.009,-.598,.12,-.009,-.217333,.12,-.009,-.217333,0,-.009,.235333,0,-.009,-.181333,0,-.009,-.598,0,.009,-.634,0,.009,-.634,-.12,.009,.634,-.12,.009,.634,0,.009,.616,0,.009,.616,.12,.009,.235333,.12,.009,.199333,0,.009,.199333,.12,.009,-.181333,.12,.009,-.217333,0,.009,-.217333,.12,.009,-.598,.12,.009,.235333,0,.009,-.181333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.268}},{id:"standard-6",count:8,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-336",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"Deska zako\u0144czeniowa",count:462,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1199",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:26,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-386",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:51,modules:5,ending:!0,lengthM:1.8253333333333335,preview:{stockId:"stock-3",positions:[-.912667,-.12,-.009,-.912667,0,-.009,-.894667,0,-.009,.772,.12,-.009,.912667,.12,-.009,.912667,-.12,-.009,.355333,.12,-.009,.736,.12,-.009,.736,0,-.009,-.061333,.12,-.009,.319333,.12,-.009,.319333,0,-.009,-.478,.12,-.009,-.097333,.12,-.009,-.097333,0,-.009,-.894667,.12,-.009,-.514,.12,-.009,-.514,0,-.009,.772,0,-.009,.355333,0,-.009,-.061333,0,-.009,-.478,0,-.009,-.894667,0,.009,-.912667,0,.009,-.912667,-.12,.009,.912667,-.12,.009,.912667,.12,.009,.772,.12,.009,.736,0,.009,.736,.12,.009,.355333,.12,.009,.319333,0,.009,.319333,.12,.009,-.061333,.12,.009,-.097333,0,.009,-.097333,.12,.009,-.478,.12,.009,-.514,0,.009,-.514,.12,.009,-.894667,.12,.009,.772,0,.009,.355333,0,.009,-.061333,0,.009,-.478,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8253333333333335}},{id:"ending-4",count:70,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-310",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-5",count:193,modules:4,ending:!0,lengthM:1.4086666666666667,preview:{stockId:"stock-1",positions:[-.704333,-.12,-.009,-.704333,.12,-.009,-.563667,.12,-.009,.704333,0,-.009,.704333,-.12,-.009,.305667,.12,-.009,.686333,.12,-.009,.686333,0,-.009,-.111,.12,-.009,.269667,.12,-.009,.269667,0,-.009,-.527667,.12,-.009,-.147,.12,-.009,-.147,0,-.009,-.563667,0,-.009,.305667,0,-.009,-.111,0,-.009,-.527667,0,-.009,-.563667,.12,.009,-.704333,.12,.009,-.704333,-.12,.009,.704333,-.12,.009,.704333,0,.009,.686333,0,.009,.686333,.12,.009,.305667,.12,.009,.269667,0,.009,.269667,.12,.009,-.111,.12,.009,-.147,0,.009,-.147,.12,.009,-.527667,.12,.009,-.563667,0,.009,.305667,0,.009,-.111,0,.009,-.527667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4086666666666667}},{id:"ending-6",count:104,modules:3,ending:!0,lengthM:.992,preview:{stockId:"stock-43",positions:[-.496,-.12,-.009,-.496,.12,-.009,-.355333,.12,-.009,.496,0,-.009,.496,-.12,-.009,.097333,.12,-.009,.478,.12,-.009,.478,0,-.009,-.319333,.12,-.009,.061333,.12,-.009,.061333,0,-.009,-.355333,0,-.009,.097333,0,-.009,-.319333,0,-.009,-.355333,.12,.009,-.496,.12,.009,-.496,-.12,.009,.496,-.12,.009,.496,0,.009,.478,0,.009,.478,.12,.009,.097333,.12,.009,.061333,0,.009,.061333,.12,.009,-.319333,.12,.009,-.355333,0,.009,.097333,0,.009,-.319333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:.992}}]}]};var Ts=i=>`${i.toLocaleString("pl-PL")} szt.`,Qd=i=>`${i.toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function Lr(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function Pf(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function If(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var Zt=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Df(i,e,t){let n=Lr(e);i.classList.add("parts-catalogue");let r=Zt("div","parts-catalogue-heading");r.append(Zt("h4",null,"Rodzaje desek"),Zt("span","parts-catalogue-total",Ts(e.totalBoards)));let s=Zt("p","parts-catalogue-lead","Deski w Twoim zestawie. Wybierz rodzaj i d\u0142ugo\u015B\u0107."),o=Zt("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Rodzaje desek");let a=Zt("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","D\u0142ugo\u015Bci i ilo\u015Bci");let l=Zt("div","parts-variant-heading"),c=Zt("h5"),d=Zt("span");l.append(c,d),i.replaceChildren(l,a,r,s,o);function u(f,g=!0){n.variant=f;for(let y of a.children)y.setAttribute("aria-pressed",String(y.dataset.partsVariant===f));t({...n},g)}function h(f,g=!0){n.family=f;let y=e.families.find(p=>p.id===f);for(let p of o.children)p.setAttribute("aria-pressed",String(p.dataset.partsFamily===f));c.textContent=y.name,d.textContent=`${Ts(y.count)} \u0142\u0105cznie`;let m=y.variants.map(p=>{let S=Zt("button","parts-variant");return S.type="button",S.dataset.partsVariant=p.id,S.append(Zt("span",null,Qd(p.lengthM)),Zt("strong",null,Ts(p.count))),S.addEventListener("click",()=>u(p.id)),S});a.replaceChildren(...m),u(y.variants[0].id,g)}for(let f of e.families){let g=Zt("button","parts-family");g.type="button",g.dataset.partsFamily=f.id;let y=Zt("span","parts-family-count");y.append(Zt("strong",null,Ts(f.count)),Zt("small",null,"\u0142\u0105cznie")),g.append(Zt("span","parts-family-name",f.name),y),g.addEventListener("click",()=>h(f.id)),o.append(g)}return h(n.family,!1),{getSelection:()=>({...n})}}function Lf(i,e=Lr(i)){let{family:t,variant:n}=Pf(i,e),r=new Ze,s=[n.preview],o=new wt({color:"#43948c",roughness:.75,side:It,flatShading:!0}),a=new jt({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(l=>{let c=new gt;c.setAttribute("position",new dt(l.positions,3)),c.setIndex(l.indices),c.computeVertexNormals();let d=new lt(c,o);d.add(new un(new on(c,30),a)),r.add(d)}),{root:r,direction:new D(.12,.65,3),annotation:`${t.name} \xB7 ${Qd(n.lengthM)} \xB7 ${Ts(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(l=>l.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var th=zo,eh=(...i)=>new D(...i),nh=[{title:"Punktem wyj\u015Bcia jest projekt budynku.",text:"Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od uk\u0142adu pomieszcze\u0144, wymiar\xF3w i za\u0142o\u017Ce\u0144 konkretnej inwestycji.",label:"Na wej\u015Bciu",items:["Rzuty kondygnacji","Wymiary i wysoko\u015Bci","Za\u0142o\u017Cenia inwestycji"]},{title:"Model AI Combstruct automatycznie generuje projekt konstrukcji.",text:"Na podstawie rzut\xF3w budynku dobiera uk\u0142ad desek i po\u0142\u0105cze\u0144. Pod\u0142oga, \u015Bciany, stropy i dach powstaj\u0105 we wsp\xF3lnym modelu 3D \u2014 z identyfikatorem i miejscem monta\u017Cu ka\u017Cdej cz\u0119\u015Bci.",label:"W jednym modelu",items:["Konstrukcja dopasowana do modu\u0142\xF3w systemu","Sp\xF3jny uk\u0142ad element\xF3w i po\u0142\u0105cze\u0144","Dane do produkcji i monta\u017Cu"]},{title:"Dok\u0142adnie wiadomo, co wyprodukowa\u0107.",text:"Z modelu powstaje precyzyjne zam\xF3wienie: rodzaje desek, wymiary, ilo\u015Bci i oznaczenia. Te same dane prowadz\u0105 od rozkroju p\u0142yt do przygotowania pakiet\xF3w na budow\u0119.",label:"Dla produkcji",items:["Wykaz cz\u0119\u015Bci, materia\u0142 i ilo\u015Bci","Rozkr\xF3j p\u0142yt i oznaczenia element\xF3w","Podzia\u0142 na pakiety do monta\u017Cu"]},{title:"Ka\u017Cdy element trafia na swoje miejsce.",text:"Oznaczone cz\u0119\u015Bci i ich miejsca we wsp\xF3lnym modelu u\u0142atwiaj\u0105 organizacj\u0119 budowy. Wykonawca wie, od czego zacz\u0105\u0107 i co do\u0142o\u017Cy\u0107 dalej. Ten sam system wspiera monta\u017C z ekip\u0105 i DIY.",label:"Na budowie",items:["Elementy oznaczone identyfikatorami","Czytelna kolejno\u015B\u0107 monta\u017Cu","DIY lub monta\u017C z ekip\u0105"]}];function P_(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new ai(t);r.colorSpace=Ut;let s=new mr(new Oi({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function fc(i,e=Lr(zo)){if(i===2){let x=Lf(zo,e);return{...x,getManufacturingState:()=>({stage:i,...x.getPartsState(),example:zo.name})}}let t=Dr(),n=t.dimensions,r=new Ze;r.name="Combstruct Flow";let s=new wt({color:"#c49b62",roughness:.85}),o=new wt({color:"#43948c",roughness:.75}),a=new wt({color:"#33493e",roughness:.85}),l=new jt({color:"#66543a",transparent:!0,opacity:.45}),c=(x,L,P,N,z,k,V=a)=>{let A=new lt(new sn(x,L,P),V);return A.position.set(N,z,k),r.add(A),A},d=(x,L=s)=>{let P=new lt(x,L);return P.add(new un(new on(x,30),l)),r.add(P),P},u=(x,L,P,N,z)=>{let k=P_(x,z);k.position.set(L,P,N),r.add(k)};if(i===0){let x=new wt({color:"#ffffff",roughness:1});c(n.width+1.8,.065,n.depth+1.8,0,-.085,0,x);for(let L of t.wallPanels){let P=[L.start,L.end,...L.holes.flatMap(N=>L.axis===0?[N.world.x0,N.world.x1]:[N.world.z0,N.world.z1])].sort((N,z)=>N-z);for(let N=1;N<P.length;N++){let z=P[N-1],k=P[N],V=(z+k)/2;k-z<.001||L.holes.some(A=>V>(L.axis===0?A.world.x0:A.world.z0)&&V<(L.axis===0?A.world.x1:A.world.z1))||(L.axis===0?c(k-z,.18,L.depth,V,.06,L.fixed):c(L.depth,.18,k-z,L.fixed,.06,V))}for(let N of L.holes){let z=L.axis===0?N.world.x0:N.world.z0,k=L.axis===0?N.world.x1:N.world.z1;N.kind==="window"&&(L.axis===0?c(k-z,.035,.035,(z+k)/2,.025,L.fixed,o):c(.035,.035,k-z,L.fixed,.025,(z+k)/2,o))}}for(let L of t.rooms)u(L.name,(L.x0+L.x1)/2,.26,(L.z0+L.z1)/2,L.id==="living"?3.5:3.2);return u(`${n.width.toFixed(2).replace(".",",")} m`,0,.03,n.halfDepth+.56,2.9),u(`${n.depth.toFixed(2).replace(".",",")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:eh(.15,7,3.5),annotation:"Przyk\u0142ad: rzut Combstruct 30"}}let h=new Map(t.boards.map(x=>[x.id,x])),f=Es.assembly.map(([x])=>h.get(x));if(f.length!==t.boards.length||f.some(x=>!x)||new Set(f).size!==f.length)throw new Error("Regenerate the assembly schedule for the current model");let g=[],y=[],m=[],p=[],S=0,M=0;for(let x of f){let L=x.mesh.geometry.index?x.mesh.geometry.toNonIndexed():x.mesh.geometry.clone();L.translate(...x.mesh.position.toArray()),g.push(L);let P=new on(L,30);y.push(P),S+=L.attributes.position.count,M+=P.attributes.position.count,m.push(S),p.push(M)}let v=Do(g,!1),R=Do(y,!1);g.forEach(x=>x.dispose()),y.forEach(x=>x.dispose());let E=new lt(v,s),I=new un(R,l);r.add(E,I);let b=f.length;if(i===1){let x=f.find(N=>N.surface==="front"&&N.axis===1&&N.index===9)||f[150],L=x.mesh.geometry.clone().translate(...x.mesh.position.toArray());d(L,o);let P=x.bounds.getCenter(eh());u(Uo(x).id,P.x,P.y+.45,P.z+.25,1.4)}return{root:r,direction:eh(1.4,1,1.5),annotation:i===1?"Combstruct 30 \xB7 cyfrowy model element\xF3w":"Przesu\u0144 suwak i zobacz kolejno\u015B\u0107 monta\u017Cu",assembly(x){b=Math.max(0,Math.min(f.length,Math.round(x*f.length))),v.setDrawRange(0,m[b-1]||0),R.setDrawRange(0,p[b-1]||0)},getManufacturingState(){return{stage:i,totalBoards:f.length,visibleBoards:b,lastBoard:f[b-1]?.id||null,lastSupport:Es.assembly[b-1]?.[1]||null,example:"Combstruct 30"}}}}var tt=(...i)=>new D(...i),rh=tt(0,1,0),sh=tt(0,0,1),Rs=i=>Math.max(0,Math.min(1,i)),I_=i=>(i=Rs(i),i*i*(3-2*i)),kt=(i,e,t)=>I_((i-e)/(t-e)),Yn=wi.lerp,jn=(i,e=0)=>new wt({color:i,metalness:e,roughness:e?.36:.76}),Oo={factory:{title:"Fabryka lights-off",duration:42,steps:[{at:0,label:"Podanie p\u0142yty",title:"P\u0142yta wje\u017Cd\u017Ca. Proces rusza.",text:"Magazyn podaje kolejn\u0105 p\u0142yt\u0119 OSB, MFP lub sklejki. Rolki prowadz\u0105 j\u0105 do rozkroju, a docisk utrzymuje pozycj\u0119 materia\u0142u."},{at:.15,label:"Pi\u0119\u0107 desek",title:"Jedna p\u0142yta. Pi\u0119\u0107 desek.",text:"Rozkr\xF3j wzd\u0142u\u017C d\u0142u\u017Cszej kraw\u0119dzi daje pi\u0119\u0107 prostych desek. Na tym etapie nie maj\u0105 jeszcze wpust\xF3w."},{at:.31,label:"Obr\xF3t na sztorc",title:"D\u0142u\u017Csz\u0105 kraw\u0119dzi\u0105 do g\xF3ry.",text:"Kaseta obrotowa stawia deski na d\u0142u\u017Cszych kraw\u0119dziach. Prowadnice i dociski utrzymuj\u0105 je pionowo przed frezowaniem."},{at:.47,label:"Frezowanie",title:"Siedem frez\xF3w. Jeden przejazd.",text:"Frezy pracuj\u0105 w jednej linii wzd\u0142u\u017C deski, na sta\u0142ej wysoko\u015Bci. Deski przeje\u017Cd\u017Caj\u0105 pod nimi na sztorc, jedna za drug\u0105. Pe\u0142ne wpusty i p\xF3\u0142wpusty na ko\u0144cach powstaj\u0105 w jednym przej\u015Bciu."},{at:.64,label:"Kontrola i ID",title:"Ka\u017Cda deska ma swoje miejsce.",text:"Stanowisko kontroli sprawdza profil, a znakowanie \u0142\u0105czy element z jego identyfikatorem w modelu budynku."},{at:.8,label:"Zestaw monta\u017Cowy",title:"Gotowe do kolejnego etapu.",text:"Deski trafiaj\u0105 do oznaczonego pakietu. Zestawy s\u0105 porz\u0105dkowane wed\u0142ug projektu i kolejno\u015Bci monta\u017Cu."}]},site:{title:"Robotyczny monta\u017C",duration:60,steps:[{at:0,label:"Pod\u0142oga",title:"Pobierz. Obr\xF3\u0107. Osad\u017A.",text:"Chwytak pobiera desk\u0119 ze stanowiska podawczego, przenosi j\u0105 nad p\u0142yt\u0119 i opuszcza w miejscu wskazanym przez model."},{at:.2,label:"\u015Aciany",title:"Ten sam element. Kolejny kierunek.",text:"Obrotowy chwytak ustawia desk\u0119 pionowo. Suwnica dociera nad kolejne \u017Cebra, zachowuj\u0105c dost\u0119p do wn\u0119trza budynku."},{at:.4,label:"Strop",title:"Monta\u017C prowadzony przez model.",text:"Po przygotowaniu podp\xF3r robot uk\u0142ada \u017Cebra stropu. Ka\u017Cdy pokazywany element ma identyfikator i docelow\u0105 pozycj\u0119 w konstrukcji."},{at:.6,label:"Dach",title:"Tak\u017Ce pod k\u0105tem po\u0142aci.",text:"Chwytak obraca desk\u0119 do orientacji dachu. Wsp\xF3lny model prowadzi od pakietu cz\u0119\u015Bci do kolejnego po\u0142\u0105czenia."},{at:.8,label:"Konstrukcja",title:"Jedna konstrukcja. Jeden zestaw danych.",text:"Pod\u0142oga, \u015Bciany, strop i dach powstaj\u0105 z tego samego systemu. Robot korzysta z danych przygotowanych dla produkcji i monta\u017Cu."}]}};function nt(i,e,t,n,r,s,o,a){let l=new lt(new sn(e,t,n),a);return l.position.set(r,s,o),i.add(l),l}function fi(i,e,t,n,r,s=rh){let o=new lt(new Mi(e,e,t,16),r);return o.position.copy(n),o.quaternion.setFromUnitVectors(rh,s),i.add(o),o}function As(i,e){let t=new lt(i,e);return t.add(new un(new on(i,30),new jt({color:"#5b4632",transparent:!0,opacity:.5}))),t}function Nr(i,e,t,n,r,s=2,o="#dceae4"){let a=document.createElement("canvas");a.width=768,a.height=96;let l=a.getContext("2d");l.font="500 37px Helvetica Neue, Arial, sans-serif",l.textAlign="center",l.fillStyle=o,l.fillText(e,384,61);let c=new ai(a);c.colorSpace=Ut;let d=new mr(new Oi({map:c,depthTest:!1}));return d.scale.set(s,s/8,1),d.position.set(t,n,r),i.add(d),d}function ih(i,e,t,n,r){nt(i,t,.15,2.85,e,.74,0,r);for(let s=-t/2+.12;s<t/2;s+=.27)fi(i,.055,2.75,tt(e+s,.86,0),n,sh);for(let s of[-1.48,1.48]){nt(i,t,.17,.09,e,.78,s,n);for(let o of[-t/2+.16,t/2-.16])nt(i,.1,.76,.1,e+o,.36,s,r)}}function pc(i,e,t,n,r){for(let s of[-t/2,t/2])nt(i,.18,n,.18,e,n/2,s,r);nt(i,.28,.24,t+.18,e,n,0,r)}function D_(){let i=new Ze,e=jn("#8fa4a8",.6),t=jn("#30474b",.35),n=jn("#cba36b"),r=jn("#398d7d",.35),s=jn("#17282b"),o=new wt({color:"#e3f3ed",emissive:"#a7e1cc",emissiveIntensity:1.5});nt(i,22,.18,7,0,-.2,0,s),ih(i,-6.3,5.3,e,t),ih(i,-.7,5.4,e,t),ih(i,4.5,4.3,e,t);for(let A=0;A<10;A++)nt(i,1.25,$e,2.5,-8.2,.98+A*.024,0,n);pc(i,-8.2,3.35,2.7,t),nt(i,3.5,.09,.12,-7.8,2.67,0,e);let a=new Ze;i.add(a),nt(a,1,.09,1.6,0,0,0,e);for(let A of[-.38,.38])for(let F of[-.56,.56])fi(a,.07,.16,tt(A,-.1,F),t);let l=nt(i,.08,1,.08,-8.2,2,0,e),c=As(new sn(1.25,$e,2.5),n);i.add(c);let d=new Ze;i.add(d);let u=[],h=[],f=1.05,g=20,y=.65,m=.47,p=7.48,S=new at().makeBasis(sh,rh,tt(-1,0,0)),M=Fo(6).applyMatrix4(S).translate(0,Mt/2,-3*Ae);for(let A=0;A<5;A++){let F=new Ze;d.add(F),u.push(F);let O=As(new sn(.24,$e,2.5),n);F.add(O);let G=new Ze;i.add(G),G.visible=!1;let le=As(new sn($e,Mt,6*Ae).translate(0,Mt/2,0),n),he=As(M.clone(),n);G.add(le,he);let me=[];for(let Q=0;Q<7;Q++){let xe=Math.max(0,Q*Ae-$e),Z=Math.min(6*Ae,Q*Ae+$e);me.push(nt(G,$e,Mt/2,Z-xe,0,3*Mt/4,(xe+Z)/2-3*Ae,n))}let oe=new Ze;G.add(oe);for(let Q of[-.92,.92]){nt(oe,.15,.045,.14,0,-.0225,Q,r);for(let xe of[-1,1])nt(oe,.025,.085,.14,xe*($e/2+.0125),.02,Q,t)}h.push({group:G,raw:le,finished:he,chips:me,saddle:oe})}pc(i,-4.65,3.4,2.45,t);let v=new Ze;i.add(v),nt(v,1.5,.16,.22,0,0,0,e);let R=nt(i,.09,1,.09,-4.65,2,0,e);for(let A=0;A<4;A++){let F=fi(v,.2,.012,tt((A-1.5)*.25,-.17,0),e,tt(1,0,0));F.userData.saw=!0}for(let A of[-5.36,-3.95])fi(i,.075,2.6,tt(A,1.06,0),t,sh);let E=[];for(let A=0;A<5;A++){let F=new Ze;i.add(F);for(let O of[-.92,.92])nt(F,.29,.055,.14,0,-.033,O,r),nt(F,.03,.15,.14,-.135,.015,O,t);E.push(F)}pc(i,f,3.45,2.8,t);let I=new Ze;i.add(I),I.position.set(f,1.36,0),nt(I,.3,.2,2.95,0,.27,0,e);for(let A of[-1.46,1.46])nt(i,.12,1.07,.12,f,2.265,A,e);let b=[];for(let A=0;A<7;A++){let F=(A-3)*Ae;fi(I,.07,.32,tt(0,.04,F),r);let O=fi(I,$e,.18,tt(0,-.21,F),e);nt(O,.004,.17,.004,$e*.75,0,0,t),b.push(O)}for(let A of[-.92,.92])nt(i,9.4,.055,.16,2.18,.885,A,t);for(let A of[-1.9,2.5])i.add(new Sr(tt(1,0,0),tt(A,.94,1.45),.8,7522734,.17,.1));for(let A of[-4.65,1.05,4.45])nt(i,1.5,.035,.06,A,2.34,-.2,o);pc(i,4.45,3.25,2.2,e),nt(i,.4,.4,.35,4.45,1.85,0,t);let x=new lt(new Mr(1.35,2.5),new oi({color:"#7cd3b5",transparent:!0,opacity:.19,side:It,depthWrite:!1}));x.rotation.x=-Math.PI/2,i.add(x);let L=new Ze;i.add(L),nt(L,1.5,.14,2.85,0,0,0,n);for(let A of[-1,1])nt(L,1.55,.08,.1,0,-.1,A,t);for(let A of[-.64,.64])for(let F of[-1.24,1.24])nt(L,.1,.86,.1,A,-.5,F,t);let P=[];for(let A of[-.84,.84])P.push(nt(L,.3,.025,.035,0,.07+5*$e+.015,A,r));let N=Nr(i,"C30 \xB7 KIT",7.6,.38,1.9,1.55);Nr(i,"OSB / MFP / Sklejka",-8.1,.07,2.4,3),Nr(i,"5 \xD7",-4.65,.07,2.4,1.4),Nr(i,"7 \xD7",f,1.98,0,1.3),Nr(i,"CNC",f,.07,2.4,1.3),Nr(i,"ID",4.45,.07,2.4,1.1);for(let A of[-4.65,1.05])fi(i,.12,.7,tt(A,2.75,-1.3),t),nt(i,.58,.5,.48,A,.33,-2.2,t);let z={};function k(A){A=Rs(A);let F=A<.035?-8.2:A<.075?Yn(-8.2,-6.8,kt(A,.035,.075)):A<.1?-6.8:Yn(-6.8,-4.65,kt(A,.1,.15)),O=A<.035?Yn(1.224,1.7,kt(A,0,.035)):A<.075?1.7:A<.1?Yn(1.7,.94,kt(A,.075,.1)):.94,G=A<.15?F:A<.31?-4.65:A<m?Yn(-4.65,-.75,kt(A,.31,m)):-.75+g*(A-m);c.visible=A<.22,c.position.set(G,A<.15?O:.94,0),a.position.set(A<.1?F:Yn(-6.8,-8.2,kt(A,.1,.15)),A<.1?O+.19:Yn(1.13,2.1,kt(A,.1,.125)),0),l.scale.y=2.67-a.position.y,l.position.set(a.position.x,(2.67+a.position.y)/2,0),d.visible=A>=.22&&A<.47;let le=kt(A,.33,.43)*Math.PI/2;for(let Q=0;Q<5;Q++){let xe=.94+Math.sin(le)*.12,Z=Yn(.25,y,kt(A,.36,m));u[Q].position.set(G+(Q-2)*Z,xe,0),u[Q].rotation.z=le,E[Q].visible=A>=.31&&A<.47,E[Q].position.copy(u[Q].position),E[Q].rotation.z=le}v.position.set(-4.65,A>=.15&&A<.31?1.15:1.68,Yn(-1.5,1.5,kt(A,.15,.29))),R.scale.y=2.45-v.position.y,R.position.set(-4.65,(2.45+v.position.y)/2,v.position.z),b.forEach(Q=>Q.rotation.y=A*42*45);let he=[];for(let Q=0;Q<5;Q++){let{group:xe,raw:Z,finished:de,chips:fe,saddle:Le}=h[Q],Re=G+(Q-2)*y,Ue=A<m?0:Rs((Re-f+$e/2)/$e),Ke=m+(p+.75-(Q-2)*y)/g,Be=kt(A,Ke,Ke+.02),se=1-Ue;xe.visible=A>=m,Z.visible=Ue===0,de.visible=Ue>0,fe.forEach(ce=>{ce.visible=Ue>0&&Ue<1,ce.scale.x=Math.max(.001,se),ce.position.x=-$e/2+se*$e/2}),xe.position.set(Math.min(p,Re),Yn(.94,.89+$e/2+(4-Q)*$e,Be),0),xe.rotation.z=-Be*Math.PI/2,Le.visible=Be<1,he.push({id:Q+1,x:xe.position.x,z:xe.position.z,cut:Ue,slots:Ue===1?7:0,packed:Be===1})}x.visible=he.some(Q=>Math.abs(Q.x-4.45)<.28)&&A>=m,x.position.set(4.45,1.45,0);let me=he.every(Q=>Q.packed);L.position.set(7.6,.82,0),P.forEach(Q=>Q.visible=me),N.visible=me;let oe=Oo.factory.steps.findLastIndex(Q=>A>=Q.at);z={process:"factory",progress:A,step:oe,blanks:5,orientation:A<m?"flat-to-edge":"on-edge",milledSlots:Math.max(...he.map(Q=>Q.slots)),toolApproach:"top",cutterCount:b.length,cutterPositions:b.map(Q=>Q.getWorldPosition(tt()).toArray()),feedAxis:"x",boardAxis:"z",boards:he,complete:me}}k(0);let V=new Pt(tt(-10.1,-.2,-2.7),tt(9.1,3.2,2.8));return{root:i,direction:tt(.8,1.25,2.6),overviewDirection:tt(.8,1.25,2.6),detailDirection:tt(2.1,1.6,1.2),focus:V,overview:V,background:"#18292c",annotation:"Koncepcja linii automatycznej",update:k,getRoboticsState:()=>z,getDetailFocus(){if(z.step===3)return new Pt(tt(f-1.15,.84,-1.34),tt(f+1.15,1.85,1.34));let A=[-6.6,-4.65,-1.6,f,4.45,7.2][z.step];return new Pt(tt(A-1.8,.65,-1.65),tt(A+1.8,2.55,1.65))},dispose(){M.dispose()}}}function L_(){let i=new Ze,e=Dr(),t=e.dimensions,n=fc(3);i.add(n.root);let r=new Map(e.boards.map(O=>[O.id,O])),s=Es.assembly.map(([O])=>r.get(O)),o=O=>{let G=s.findIndex(O);if(G<0)throw Error("Missing construction stage in the robotics example");return G},a=[0,o(O=>O.kind==="wall"&&O.axis===1),o(O=>O.kind==="ceiling"),o(O=>O.kind==="roof-slope"),s.length],l=jn("#82969a",.6),c=jn("#36524d",.35),d=jn("#348d7b",.35),u=jn("#cba36b"),h=jn("#e3e9df"),f=-t.halfWidth-1.5,g=t.halfWidth+1.5,y=-t.halfDepth-t.terraceDepth-1.4,m=t.halfDepth+4.2,p=t.roofRidgeY+2.5;nt(i,g-f+2,.12,m-y+1,0,-.15,(y+m)/2,h);for(let O of[f,g]){nt(i,.14,.14,m-y,O,0,(y+m)/2,l);for(let G=y;G<m;G+=.8)nt(i,.55,.09,.22,O,-.04,G,c)}let S=new Ze;i.add(S);for(let O of[f,g]){nt(S,.3,p,.3,O,p/2,0,c),nt(S,.65,.3,1.5,O,.2,0,d);for(let G of[-.5,.5])fi(S,.14,.25,tt(O,.1,G),l,tt(1,0,0))}for(let O of[-.21,.21])nt(S,g-f+.4,.26,.16,0,p,O,l);let M=new Ze;S.add(M),nt(M,.6,.3,.72,0,p-.05,0,d);let v=nt(M,.14,1,.14,0,p-.8,0,l),R=new Ze;i.add(R),fi(R,.13,.22,tt(0,0,0),c),fi(R,.18,.08,tt(0,.12,0),d);let E=new Ze;i.add(E),nt(E,.44,.08,.14,0,0,0,c);for(let O of[-.16,.16])nt(E,.045,.22,.1,O,-.1,0,l),nt(E,.055,.045,.13,O,-.19,0,d);let I=tt(f+.9,.94,m-1.8);nt(i,3.05,.13,1.2,I.x,.7,I.z,u);for(let O of[-1.2,1.2])nt(i,.15,.73,1.1,I.x+O,.29,I.z,c);let b=As(Fo(6).translate(-3*Ae,0,0),u);b.position.copy(I),i.add(b);let x=As(new sn(.01,.01,.01),jn("#379b88"));i.add(x);let L=Nr(i,"Combstruct 30",t.halfWidth+.15,.15,m-.2,2.9,"#254331"),P=-1,N=tt(),z=tt(),k=new rn,V={};function A(O){if(P===O)return;P=O;let G=s[O];N.copy(G.bounds.getCenter(tt())),x.geometry.dispose(),x.children[0].geometry.dispose(),x.geometry=G.mesh.geometry.clone().translate(...G.mesh.position.toArray()).translate(-N.x,-N.y,-N.z),x.children[0].geometry=new on(x.geometry,30);let le=tt(...G.along);k.setFromUnitVectors(le,tt(1,0,0)),x.geometry.computeBoundingBox(),z.set(0,x.geometry.boundingBox.max.y+.23,0),b.geometry.dispose(),b.children[0].geometry.dispose(),b.geometry=x.geometry.clone(),b.quaternion.copy(k),b.children[0].geometry=new on(b.geometry,30)}function F(O){let G=Rs(O),le=Math.min(4,Math.floor(G*5)),he=Rs(G*5-le);if(le===4){n.assembly(1),x.visible=!1,b.visible=!1,S.position.z=m-.5,M.position.x=g-.5,v.scale.y=1,v.position.y=p-.8,R.position.set(g-.5,p-1.4,S.position.z),E.position.copy(R.position).add(tt(0,-.32,0)),V={process:"site",progress:G,step:le,installed:s.length,total:s.length,complete:!0};return}let me=4,oe=Math.min(me-1,Math.floor(he*me)),Q=Rs(he*me-oe),xe=Math.min(s.length-1,a[le]+oe);A(xe);let Z=Q>=.86;n.assembly((xe+(Z?1:0))/s.length);let de=t.roofRidgeY+1.25,fe=I.clone().setY(de),Le=N.clone().setY(de),Re=tt();Q<.16?Re.copy(I).add(tt(0,Yn(.5,0,kt(Q,0,.16)),0)):Q<.35?Re.lerpVectors(I,fe,kt(Q,.16,.35)):Q<.6?Re.lerpVectors(fe,Le,kt(Q,.35,.6)):Q<.86?Re.lerpVectors(Le,N,kt(Q,.6,.86)):Q<.92?Re.lerpVectors(N,Le,kt(Q,.86,.92)):Q<.98?Re.lerpVectors(Le,fe,kt(Q,.92,.98)):Re.lerpVectors(fe,I.clone().add(tt(0,.5,0)),kt(Q,.98,1)),x.visible=Q>=.16&&!Z,b.visible=Q<.16,x.position.copy(Re),x.quaternion.copy(k).slerp(new rn,kt(Q,.35,.6));let Ue=z.clone().applyQuaternion(x.quaternion);Ue.y=Math.max(.3,Ue.y);let Ke=Re.clone().add(Ue);S.position.z=Ke.z,M.position.x=Ke.x;let Be=Math.max(.35,p-Ke.y-.25);v.scale.y=Be,v.position.y=p-Be/2,R.position.copy(Ke).add(tt(0,.05,0)),E.position.copy(Ke).add(tt(0,-.12,0)),E.quaternion.copy(x.quaternion),L.visible=!0,V={process:"site",progress:G,step:le,installed:xe+(Z?1:0),total:s.length,activeBoard:s[xe].id,boardKind:s[xe].kind,support:Es.assembly[xe][1],carrying:x.visible,phase:Q<.16?"pick":Q<.6?"carry":Q<.86?"place":"release",complete:!1,selectedOperations:!0}}return F(0),{root:i,direction:tt(1.5,1.15,2),distanceScale:.83,focus:new Pt(tt(f-1,-.2,y-.4),tt(g+.7,p+.35,m+.4)),annotation:"Wybrane operacje \xB7 Combstruct 30",update:F,getRoboticsState:()=>V}}function Nf(i){return i==="site"?L_():D_()}var Tn=[{id:"deska",group:"Elementy i zasady",title:"Deska grzebieniowa",lead:"Jeden powtarzalny element tworzy pod\u0142og\u0119, \u015Bciany, strop i dach.",text:"Desk\u0119 wycinamy z p\u0142yty OSB, MFP lub sklejki. Wpusty si\u0119gaj\u0105 do po\u0142owy jej wysoko\u015Bci. Dwie deski z\u0142o\u017Cone powierzchniami tworz\u0105 par\u0119, a kr\xF3tsze warianty zachowuj\u0105 ten sam skok modu\u0142u.",rule:"24 cm wysoko\u015Bci. 18 mm grubo\u015Bci jednej deski.",scene:"beam"},{id:"uciaglanie",group:"Elementy i zasady",title:"Para desek i uci\u0105glanie",lead:"Przed\u0142u\u017Camy \u017Cebro, dok\u0142adaj\u0105c kolejne deski w dw\xF3ch warstwach.",text:"\u0141\u0105czenia warstw mijaj\u0105 si\u0119: przy ko\u0144cu deski w jednej warstwie biegnie pe\u0142ny odcinek drugiej. W tym przyk\u0142adzie rozsuni\u0119cie wzd\u0142u\u017C belki wynosi dwa modu\u0142y. Zako\u0144czenie jednej warstwy jest kr\xF3tsze o 24 cm.",rule:"Styki obu warstw nie wypadaj\u0105 w tym samym miejscu.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Elementy i zasady",title:"Pod\u0142oga i strop",lead:"\u017Bebra r\xF3wnoleg\u0142e do kr\xF3tszej kraw\u0119dzi p\u0142yty maj\u0105 wpusty do g\xF3ry.",text:"To sta\u0142a zasada uk\u0142adania. Na modelu wyr\xF3\u017Cnili\u015Bmy t\u0119 rodzin\u0119 \u017Ceber turkusem. \u017Bebra biegn\u0105ce prostopadle maj\u0105 wpusty w przeciwn\u0105 stron\u0119, dzi\u0119ki czemu obie rodziny sk\u0142adaj\u0105 si\u0119 na krzy\u017C.",rule:"Kr\xF3tszy kierunek no\u015Bny \u2014 wpusty do g\xF3ry.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Elementy i zasady",title:"\u015Aciany zewn\u0119trzne",lead:"Pionowe \u017Cebra maj\u0105 wpusty skierowane na zewn\u0105trz domu.",text:"Turkusowe piony pokazuj\u0105 w\u0142a\u015Bciw\u0105 orientacj\u0119. Poziome \u017Cebra \u0142\u0105cz\u0105 si\u0119 z nimi od przeciwnej strony. \u015Aciana zaczyna si\u0119 od poziomu podstawy konstrukcji, a jej zako\u0144czenia tworz\u0105 po\u0142\u0105czenie z pod\u0142og\u0105.",rule:"Piony: wpusty na zewn\u0105trz. Linia \u017Ceber pozostaje ci\u0105g\u0142a.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Elementy i zasady",title:"Dach",lead:"Tak\u017Ce w dachu kr\xF3tszy kierunek p\u0142yty ma wpusty do g\xF3ry.",text:"Na po\u0142aci \u201Edo g\xF3ry\u201D oznacza stron\u0119 pokrycia dachowego. Wyr\xF3\u017Cnione \u017Cebra biegn\u0105 r\xF3wnolegle do kr\xF3tszej kraw\u0119dzi po\u0142aci. Druga rodzina zamyka siatk\u0119 od przeciwnej strony.",rule:"Ta sama zasada co w stropie, obr\xF3cona razem z po\u0142aci\u0105.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Elementy i zasady",title:"Zako\u0144czenia i pe\u0142ny wpust",lead:"Po\u0142\u0105czenie powstaje dzi\u0119ki odpowiednim d\u0142ugo\u015Bciom desek.",text:"Podstawowe zako\u0144czenie jest kr\xF3tsze o 24 cm. Przy po\u0142\u0105czeniu trzech kierunk\xF3w stosujemy pe\u0142ny wpust na ko\u0144cu jednej deski oraz zako\u0144czenie kr\xF3tsze o kolejne 18 mm. Skok pozosta\u0142ych wpust\xF3w pozostaje taki sam.",rule:"Pe\u0142ny wpust 36 mm. Dodatkowe skr\xF3cenie zako\u0144czenia 18 mm.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Po\u0142\u0105czenia",title:"\u017Bebra na krzy\u017C",lead:"Dwie prostopad\u0142e pary wsuwaj\u0105 si\u0119 w siebie przez wpusty.",text:"Ka\u017Cda rodzina oddaje po\u0142ow\u0119 wysoko\u015Bci w miejscu skrzy\u017Cowania. Po z\u0142o\u017Ceniu obie mieszcz\u0105 si\u0119 w jednej warstwie konstrukcyjnej o g\u0142\u0119boko\u015Bci 24 cm. Rozsu\u0144 elementy, aby zobaczy\u0107 obie strony wpustu.",rule:"Wpust do g\xF3ry spotyka wpust do do\u0142u.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",lead:"D\u0142u\u017Csza cz\u0119\u015B\u0107 zako\u0144czenia przylega do boku pe\u0142nego \u017Cebra.",text:"Kr\xF3tsza opiera si\u0119 o \u017Cebro, a d\u0142u\u017Csza schodzi obok niego do poziomu podstawy konstrukcji. Para \u015Bciany i para pod\u0142ogi pozostaj\u0105 w tej samej p\u0142aszczy\u017Anie.",rule:"Pe\u0142na deska i zako\u0144czenie uzupe\u0142niaj\u0105 si\u0119 na 24 cm.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",lead:"Pod\u0142oga mo\u017Ce biec dalej, poza obrys domu.",text:"Jedna warstwa biegnie dalej na taras. W drugiej pe\u0142ny wpust na ko\u0144cu deski i kr\xF3tsze zako\u0144czenie tworz\u0105 miejsce na pion \u015Bciany. Poprzeczne \u017Cebro pod\u0142ogi pozostaje ods\u0142oni\u0119te.",rule:"Ci\u0105g\u0142o\u015B\u0107 tarasu i miejsce na wszystkie trzy kierunki \u017Ceber.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",lead:"\u015Aciana wewn\u0119trzna wchodzi w plaster pod\u0142ogi na tej samej zasadzie.",text:"Pion zaczyna si\u0119 przy podstawie konstrukcji. Jego kr\xF3tsza warstwa opiera si\u0119 na pe\u0142nym \u017Cebrze pod\u0142ogi. W drugiej warstwie d\u0142ugo\u015Bci desek pozostawiaj\u0105 miejsce na \u015Bcian\u0119 i poprzeczne \u017Cebro, bez bocznych wybra\u0144.",rule:"Wsp\xF3lna linia \u017Ceber, bez dodatkowej deski pod \u015Bcian\u0105.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Po\u0142\u0105czenia",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",lead:"Poziome \u017Cebra obu \u015Bcian spotykaj\u0105 si\u0119 w jednej p\u0142aszczy\u017Anie.",text:"Zako\u0144czenia sk\u0142adaj\u0105 si\u0119 naprzemiennie. Jedna deska ko\u0144czy si\u0119 pe\u0142nym wpustem, a s\u0105siednia zako\u0144czeniowa jest kr\xF3tsza o dodatkowe 18 mm. Pion \u015Bciany zewn\u0119trznej mie\u015Bci si\u0119 pomi\u0119dzy nimi.",rule:"Trzeci element wchodzi w ods\u0142oni\u0119ty wpust.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Po\u0142\u0105czenia",title:"Naro\u017Cnik \u015Bcian zewn\u0119trznych",lead:"Dwie \u015Bciany zamykaj\u0105 obrys w naro\u017Cniku.",text:"Poziome pary spotykaj\u0105 si\u0119 naprzemiennie pe\u0142n\u0105 desk\u0105 i zako\u0144czeniem. Ka\u017Cda \u015Bciana zachowuje sw\xF3j kierunek: wpusty jej pionowych \u017Ceber otwieraj\u0105 si\u0119 na zewn\u0105trz budynku.",rule:"Dwie \u015Bciany, wsp\xF3lny poziom par desek.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",lead:"Przegroda poprzeczna dochodzi do ci\u0105g\u0142ej \u015Bciany.",text:"Jedna warstwa przechodzi przez skrzy\u017Cowanie, a druga przyjmuje zako\u0144czenie przegrody. Pe\u0142ny wpust ko\u0144cowy i dodatkowe skr\xF3cenie zako\u0144czenia pozostawiaj\u0105 miejsce na pion. Pary desek zachowuj\u0105 wsp\xF3lne p\u0142aszczyzny.",rule:"Zako\u0144czenie wchodzi w ci\u0105g\u0142\u0105 par\u0119 desek.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",lead:"Strop le\u017Cy na poziomym \u017Cebrze \u015Bciany.",text:"Dolna deska pionowa ko\u0144czy si\u0119 pe\u0142nym wpustem. Pozioma para \u015Bciany przechodzi przez niego, a strop le\u017Cy na jej g\xF3rnej powierzchni. G\xF3rna deska zako\u0144czeniowa zaczyna si\u0119 nad stropem, kr\xF3tsza o dodatkowe 18 mm.",rule:"Strop nie przerywa linii konstrukcji \u015Bciany.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",lead:"Pion dochodzi do stropu w tej samej linii co \u017Cebro pod\u0142ogi.",text:"Strop opiera si\u0119 na g\xF3rnym poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Zako\u0144czenia i pe\u0142ne wpusty pozwalaj\u0105 z\u0142o\u017Cy\u0107 trzy kierunki \u017Ceber bez bocznych wybra\u0144.",rule:"Strop powy\u017Cej poziomego \u017Cebra \u015Bciany.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Po\u0142\u0105czenia",title:"Dach \u2014 \u015Bciana",lead:"\u017Bebro po\u0142aci trafia w lini\u0119 pionowego \u017Cebra \u015Bciany.",text:"Przy okapie \u0142\u0105cz\u0105 si\u0119 dach, \u015Bciana i sufit. Br\u0105zowe \u017Cebro sufitu le\u017Cy nad poziomym rz\u0119dem \u015Bciany. Turkusowe \u017Cebro dachowe biegnie dalej poza \u015Bcian\u0119, tworz\u0105c okap.",rule:"Po\u0142a\u0107 i \u015Bciana spotykaj\u0105 si\u0119 na tej samej linii \u017Cebra.",scene:"roof-wall"},{id:"kalenica",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie po\u0142aci w kalenicy",lead:"Dwie po\u0142acie zamykaj\u0105 dach dopasowanymi zako\u0144czeniami.",text:"W tym modelu po\u0142acie maj\u0105 nachylenie 35\xB0. Ko\u0144ce \u017Ceber s\u0105 doci\u0119te do p\u0142aszczyzny kalenicy, tak aby obie bry\u0142y styka\u0142y si\u0119 bez nak\u0142adania. To po\u0142\u0105czenie k\u0105towe, zale\u017Cne od geometrii dachu.",rule:"K\u0105t i zako\u0144czenie wynikaj\u0105 z projektu dachu.",scene:"ridge"}],mc=[{id:"standard",name:"Zwyk\u0142a",trim:null,description:"Deska z wpustami i p\xF3\u0142wpustami na ko\u0144cach."},{id:"ending",name:"Zako\u0144czeniowa \xB7 \u2212240 mm",trim:"left",description:"Podstawowe zako\u0144czenie kr\xF3tsze o wysoko\u015B\u0107 deski: 240 mm."},{id:"full-end-slot",name:"Pe\u0142ny wpust ko\u0144cowy \xB7 36 mm",modules:5,extendEnd:.018,description:"Pe\u0142na po\u0142owa ko\u0144ca d\u0142u\u017Csza o 18 mm. Wpust ko\u0144cowy ma 36 mm; pozosta\u0142e wpusty zachowuj\u0105 swoje po\u0142o\u017Cenie."},{id:"ending-short",name:"Zako\u0144czeniowa \xB7 \u2212258 mm",trim:"left",extraStartTrim:.018,description:"Zako\u0144czenie kr\xF3tsze o 240 + 18 mm. Tworzy miejsce na \u017Cebro przy pe\u0142nym wpu\u015Bcie ko\u0144cowym."}];var Ee=i=>document.querySelector(i),Rn=i=>[...document.querySelectorAll(i)],er=Ee("#technology-viewport"),Qi=Ee(".viewport-loading"),ln="combstruct",Dt=Tn.find(i=>i.id==="podloga-strop"),Bo=mc[0],Zn="house",In=0,Uf=Lr(th),At,Jt,Lt,Ri,qe,oh=0,ah,Dn="factory",An=0,Ln=!matchMedia("(prefers-reduced-motion: reduce)").matches,lh=!0,Jn=0,ch=-1,pi=!0,Ur=(...i)=>new D(...i);function $t(){!oh&&At&&(oh=requestAnimationFrame(i=>{if(oh=0,ln==="robotics"&&Ln&&lh&&!document.hidden){let e=Jn?Math.min(.1,(i-Jn)/1e3):0;An=Math.min(1,An+e/Oo[Dn].duration),Jn=i,An>=1&&(Ln=!1),Ls()}else Jn=0;Lt.update(),At.render(Ri,Jt),ln==="robotics"&&Ln&&lh&&!document.hidden&&$t()}))}function Ps(){if(!qe||!At||!er.clientWidth||!er.clientHeight)return;let i=qe.focus||new Pt().setFromObject(qe.root),e=i.getCenter(Ur()),t=(qe.direction||Ur(1.5,1.4,2)).clone().normalize(),n=Ur(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(wi.degToRad(Jt.fov/2)),o=s*Jt.aspect,a=0;for(let c of[i.min.x,i.max.x])for(let d of[i.min.y,i.max.y])for(let u of[i.min.z,i.max.z]){let h=Ur(c,d,u).sub(e);a=Math.max(a,Math.abs(h.dot(n))/o+h.dot(t),Math.abs(h.dot(r))/s+h.dot(t))}let l=Lt.enableDamping;if(Lt.enableDamping=!1,Lt.update(),Lt.target.copy(e),Jt.position.copy(e).addScaledVector(t,Math.max(.8,a*1.14*(qe.distanceScale||1))),Lt.update(),!qe.focus)for(let c=0;c<2;c++){qe.root.updateMatrixWorld(!0),Jt.updateMatrixWorld();let d=1/0,u=-1/0,h=1/0,f=-1/0,g=Ur();qe.root.traverseVisible(v=>{if(!v.geometry?.attributes.position)return;let R=v.geometry.attributes.position;for(let E=0;E<R.count;E++)g.fromBufferAttribute(R,E).applyMatrix4(v.matrixWorld).project(Jt),d=Math.min(d,g.x),u=Math.max(u,g.x),h=Math.min(h,g.y),f=Math.max(f,g.y)});let y=Jt.position.distanceTo(Lt.target),m=Ur().setFromMatrixColumn(Jt.matrixWorld,0),p=Ur().setFromMatrixColumn(Jt.matrixWorld,1),S=m.multiplyScalar((d+u)/2*y*s*Jt.aspect).add(p.multiplyScalar((h+f)/2*y*s));Lt.target.add(S),Jt.position.add(S);let M=Math.max((u-d)/1.72,(f-h)/1.62);Number.isFinite(M)&&M>0&&Jt.position.sub(Lt.target).multiplyScalar(M).add(Lt.target),Lt.update()}Lt.enableDamping=l,$t()}function Ff(){if(!At)return;let i=er.clientWidth,e=er.clientHeight;!i||!e||(At.setSize(i,e,!1),Jt.aspect=i/e,Jt.updateProjectionMatrix(),Ps())}function N_(i){Ee("#element-id").textContent=i.id,Ee("#element-type").textContent=i.type,Ee("#element-surface").textContent=i.surface,Ee("#element-length").textContent=i.length,Ee("#element-metric-label").textContent=i.metricLabel||"D\u0142ugo\u015B\u0107 w modelu",Ee("#element-detail-label").textContent=i.detailLabel||"Grubo\u015B\u0107 p\u0142yty",Ee("#element-thickness").textContent=i.detail||"18 mm"}function Is(){if(At)try{qe&&(Ri.remove(qe.root),Af(qe.root),qe.dispose?.()),qe=ln==="combstruct"?Rf(Dt,Bo):ln==="bim"?Cf(Zn,N_):ln==="robotics"?Nf(Dn):fc(In,Uf),Ri.background.set(qe.background||"#f2f5f1"),er.dataset.robotics=ln==="robotics"?Dn:"",Ri.add(qe.root),qe.root.updateMatrixWorld(!0),Ee("#scene-annotation").textContent=qe.annotation||"",qe.arrows&&(qe.arrows.visible=Ee("#arrows").checked),ln==="combstruct"&&Dt.crossing&&qe.crossing?.(Ee("#crossing").checked),ln==="bim"&&qe.finish&&Of(),ln==="flow"&&In===3&&kf(),ln==="robotics"&&(Ls(),pi&&qe.getDetailFocus&&(qe.focus=qe.getDetailFocus(),qe.direction=qe.detailDirection||qe.direction)),Qi.hidden=!0,Ff(),$t()}catch(i){console.error(i),Qi.hidden=!1,Qi.textContent="Nie uda\u0142o si\u0119 przygotowa\u0107 tego widoku. Od\u015Bwie\u017C stron\u0119, aby spr\xF3bowa\u0107 ponownie.",Qi.setAttribute("role","alert")}}function U_(){try{Ri=new Qs,Ri.background=new ot("#f2f5f1"),Jt=new nn(36,1,.005,160),At=new tc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),At.localClippingEnabled=!0,At.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),At.toneMapping=Mo,At.toneMappingExposure=1.07,er.prepend(At.domElement),At.domElement.tabIndex=0,At.domElement.setAttribute("aria-label","Model 3D. Przeci\u0105gnij, aby obr\xF3ci\u0107; przewi\u0144, aby przybli\u017Cy\u0107. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybra\u0107."),Lt=new sc(Jt,At.domElement),Lt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,Lt.dampingFactor=.12,Lt.minDistance=.3,Lt.maxDistance=50,Lt.maxPolarAngle=Math.PI*.94,Lt.addEventListener("change",$t),Lt.listenToKeyEvents(At.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{Lt.enableDamping=!n.matches,$t()}),Ri.add(new go("#ffffff","#b2b8aa",2.5));let i=new ms("#fff3df",2.6);i.position.set(3,7,5),Ri.add(i);let e=new ms("#d3e8ee",1.5);e.position.set(-4,3,-4),Ri.add(e),ah=new _o;let t;At.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),At.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!qe.selectAt)return;let r=At.domElement.getBoundingClientRect();ah.setFromCamera(new ge((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),Jt),qe.selectAt(ah),$t()}),At.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),Ps())}),At.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),Qi.hidden=!1,Qi.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C stron\u0119, aby do niego wr\xF3ci\u0107."}),new ResizeObserver(Ff).observe(er),Is()}catch(i){console.error(i),Qi.textContent="Podgl\u0105d 3D wymaga obs\u0142ugi WebGL. Zasady systemu mo\u017Cesz przeczyta\u0107 poni\u017Cej modelu.",Qi.setAttribute("role","alert")}}function F_(){Ee("#topic-title").textContent=Dt.title,Ee("#topic-lead").textContent=Dt.lead,Ee("#topic-text").textContent=Dt.text,Ee("#topic-rule").textContent=Dt.rule;let i=Tn.indexOf(Dt);Ee("#topic-counter").textContent=`${i+1} / ${Tn.length}`,Ee("#topic-select").value=Dt.id,Rn("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===Dt.id))),Ee("#spread-control").hidden=!Dt.spread,Ee("#crossing-control").hidden=!Dt.crossing,Ee("#arrows-control").hidden=!Dt.arrows,Ee("#variant-control").hidden=!Dt.variants,Ee("#spread").value=0,Ee("#crossing").checked=!!Dt.crossing,Ee("#previous-topic").disabled=i===0,Ee("#next-topic").disabled=i===Tn.length-1,Ee("#variant-description").textContent=Bo.description}function Fr(i,{hash:e=!0}={}){ln=i,Jn=0,Ee(".technology-cta").hidden=["flow","robotics"].includes(i),Rn("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,Ee("#"+n.getAttribute("aria-controls")).hidden=!r}),Ee(`#${i==="combstruct"?"manual":i==="bim"?"bim":i==="robotics"?"robotics":"flow"}-mount`).append(er),e&&history.pushState(null,"",`#${i==="combstruct"?Dt.id:i==="bim"&&Zn==="wall"?"bim-sciana":i==="robotics"&&Dn==="site"?"robotics-montaz":i}`),i==="combstruct"&&F_(),i==="flow"&&Bf(),i==="robotics"&&z_(),Is()}function Ds(i,{hash:e=!0}={}){Dt=Tn.find(t=>t.id===i)||Dt,Fr("combstruct",{hash:e})}function dh(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(Zn=i==="bim-sciana"?"wall":"house",zf(),Fr("bim",{hash:!1})):i==="robotics"||i==="robotics-montaz"?(Dn=i==="robotics-montaz"?"site":"factory",Fr("robotics",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),Fr("flow",{hash:!1})):Ds(i,{hash:!1})}for(let i of[...new Set(Tn.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of Tn.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>Ds(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}Ee("#topic-buttons").append(e),Ee("#topic-select").append(n)}for(let i of mc)Ee("#variant-select").append(new Option(i.name,i.id));Ee("#topic-select").addEventListener("change",i=>Ds(i.target.value));Ee("#variant-select").addEventListener("change",i=>{Bo=mc.find(e=>e.id===i.target.value),Ee("#variant-description").textContent=Bo.description,Is()});Rn("[data-technology]").forEach(i=>i.addEventListener("click",()=>Fr(i.dataset.technology)));Ee(".technology-tabs").addEventListener("keydown",i=>{let e=Rn("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});Ee("#previous-topic").addEventListener("click",()=>Ds(Tn[Tn.indexOf(Dt)-1]?.id));Ee("#next-topic").addEventListener("click",()=>Ds(Tn[Tn.indexOf(Dt)+1]?.id));Ee("#spread").addEventListener("input",i=>{qe?.spread?.(Number(i.target.value)),Ee("#crossing").checked=!1,$t()});Ee("#crossing").addEventListener("change",i=>{i.target.checked&&(Ee("#spread").value=0,qe?.spread?.(0)),qe?.crossing?.(i.target.checked),$t()});Ee("#arrows").addEventListener("change",i=>{qe?.arrows&&(qe.arrows.visible=i.target.checked),$t()});Rn("[data-reset-view]").forEach(i=>i.addEventListener("click",Ps));function zf(){Rn("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===Zn))),Ee("#finish-control").hidden=Zn!=="wall",Ee("#wall-guide").hidden=Zn!=="wall",Ee(".selection-hint").textContent=Zn==="wall"?"Ods\u0142o\u0144 \u015Bcian\u0119 i wybierz widoczny element":"Wybierz desk\u0119 w modelu",Ee("#passport-title").innerHTML=Zn==="wall"?"Sprawd\u017A, co kryje<br>Twoja \u015Bciana.":"Ka\u017Cda cz\u0119\u015B\u0107<br>ma swoje miejsce."}function Of(){let i=Ee("#finish"),e=Number(i.value);qe?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"\u015Aciana wyko\u0144czona":`Ods\u0142oni\u0119te ${Math.round(e*100)}% \u015Bciany`),Ee("#scene-annotation").textContent=e>.01?"Kliknij \u017Cebro, kostk\u0119, rur\u0119 lub przew\xF3d":"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",$t()}Rn("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{Zn=i.dataset.bimView,zf(),history.pushState(null,"",Zn==="wall"?"#bim-sciana":"#bim"),Is()}));Ee("#finish").addEventListener("input",Of);Ee("#next-element").addEventListener("click",()=>{qe?.next?.(),$t()});function Bf(){let i=nh[In];Ee("#flow-title").textContent=i.title,Ee("#flow-text").textContent=i.text,Ee("#flow-output-label").textContent=i.label,Ee("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),Rn("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===In))),Ee("#assembly-control").hidden=In!==3,Ee("#flow-next").textContent=["Zobacz model Combstruct \u2192","Przejd\u017A do produkcji \u2192","Zobacz monta\u017C \u2192","Wr\xF3\u0107 do rzut\xF3w \u21BA"][In],Ee(".flow-layout").dataset.stage=In,Ee("#production-catalog").hidden=In!==2}function kf(){let i=Number(Ee("#assembly").value);qe?.assembly?.(i),Ee("#assembly-progress").textContent=`${Math.round(i*100)}%`,$t()}function Vf(i){In=i,Bf(),Is()}Rn("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>Vf(Number(i.dataset.flowStage))));Ee("#flow-next").addEventListener("click",()=>Vf((In+1)%nh.length));Ee("#assembly").addEventListener("input",kf);Df(Ee("#production-catalog"),th,(i,e)=>{Uf=i,ln==="flow"&&In===2&&Is(),e&&If(Ee("#flow-mount"))});var Cs=Ee(".menu-toggle"),gc=Ee("#mobile-menu");function z_(){ch=-1,Ee("#robotics-detail").hidden=Dn!=="factory",Ee("#robotics-detail").setAttribute("aria-pressed",String(pi)),Ee("#robotics-detail").textContent=pi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",Rn("[data-robotics-process]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.roboticsProcess===Dn)));let i=Ee("#robotics-steps");i.dataset.process=Dn,i.replaceChildren(...Oo[Dn].steps.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.textContent=e.label,n.dataset.roboticsStep=t,n.setAttribute("aria-pressed","false"),n.onclick=()=>hh(e.at+.001),n})),Ee("#robotics-note").textContent=Dn==="factory"?"Animacja koncepcyjna linii produkcyjnej.":"Wybrane operacje z modelu Combstruct 30. Przej\u015Bcia mi\u0119dzy etapami pomijaj\u0105 cz\u0119\u015B\u0107 powtarzalnych cykli. Koncepcja ruchu robota, nie zweryfikowany program monta\u017Cowy."}function Ls(){qe?.update?.(An);let i=Oo[Dn],e=i.steps.findLastIndex(n=>An>=n.at);e!==ch&&(ch=e,Ee("#robotics-title").textContent=i.steps[e].title,Ee("#robotics-text").textContent=i.steps[e].text,Rn("[data-robotics-step]").forEach(n=>n.setAttribute("aria-pressed",String(Number(n.dataset.roboticsStep)===e))),pi&&qe?.getDetailFocus&&(qe.focus=qe.getDetailFocus(),qe.direction=qe.detailDirection||qe.direction,Ps())),Ee("#robotics-seek").value=An;let t=Math.floor(An*i.duration);Ee("#robotics-time").textContent=`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`,Ee("#robotics-play").textContent=Ln?"Pauza":An===1?"Powt\xF3rz":"Odtw\xF3rz",Ee("#robotics-play").setAttribute("aria-pressed",String(Ln))}function hh(i){An=Math.min(1,Math.max(0,i)),Ln=!1,Jn=0,Ls(),$t()}Rn("[data-robotics-process]").forEach(i=>i.addEventListener("click",()=>{Dn=i.dataset.roboticsProcess,An=0,Ln=!matchMedia("(prefers-reduced-motion: reduce)").matches,Fr("robotics")}));Ee("#robotics-play").addEventListener("click",()=>{An===1&&(An=0),Ln=!Ln,Jn=0,Ls(),$t()});Ee("#robotics-replay").addEventListener("click",()=>{An=0,Ln=!matchMedia("(prefers-reduced-motion: reduce)").matches,Jn=0,Ls(),$t()});Ee("#robotics-seek").addEventListener("input",i=>hh(Number(i.target.value)));Ee("#robotics-detail").addEventListener("click",()=>{pi=!pi,Ee("#robotics-detail").setAttribute("aria-pressed",String(pi)),Ee("#robotics-detail").textContent=pi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",qe.focus=pi?qe.getDetailFocus():qe.overview,qe.direction=pi?qe.detailDirection:qe.overviewDirection,Ps()});new IntersectionObserver(i=>{lh=i[0].isIntersecting,Jn=0,$t()},{threshold:.05}).observe(Ee("#robotics-mount"));document.addEventListener("visibilitychange",()=>{Jn=0,$t()});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{i.matches&&(Ln=!1,Jn=0,ln==="robotics"&&Ls())});function uh(){gc.hidden=!0,Cs.setAttribute("aria-expanded","false"),Cs.setAttribute("aria-label","Otw\xF3rz menu")}Cs.addEventListener("click",()=>{let i=gc.hidden;gc.hidden=!i,Cs.setAttribute("aria-expanded",String(i)),Cs.setAttribute("aria-label",i?"Zamknij menu":"Otw\xF3rz menu")});Rn("#mobile-menu a").forEach(i=>i.addEventListener("click",uh));document.addEventListener("click",i=>{i.target.closest(".site-header")||uh()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!gc.hidden&&(uh(),Cs.focus())});addEventListener("popstate",dh);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==ln&&i!==Dt.id&&dh()});window.combstructTechnology={getState:()=>({ready:!!At,technology:ln,topic:Dt.id,variant:Bo.id,bimView:Zn,flowStage:In,robotics:ln==="robotics"?{...qe?.getRoboticsState?.(),playing:Ln}:null,manufacturing:qe?.getManufacturingState?.(),selected:qe?.getSelected?.(),wall:qe?.getWallState?.(),meshCount:qe?.root.children.length,drawCalls:At?.info.render.calls}),topics:Tn.map(i=>i.id),showTopic:Ds,showTechnology:Fr,seekRobotics:hh,reset:Ps};dh();U_();})();
