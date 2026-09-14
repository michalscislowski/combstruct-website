"use strict";(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},su=0,cd=1,ou=2;var So=1,au=2,_s=3,wi=0,fn=1,Dt=2,hi=0,fr=1,dd=2,hd=3,ud=4,lu=5;var Bi=100,cu=101,du=102,hu=103,uu=104,fu=200,pu=201,mu=202,gu=203,Ta=204,Aa=205,bu=206,_u=207,xu=208,yu=209,vu=210,Mu=211,Su=212,wu=213,Eu=214,Ra=0,Ca=1,Pa=2,pr=3,Ia=4,Da=5,La=6,Na=7,fd=0,Tu=1,Au=2,Gn=0,pd=1,md=2,gd=3,wo=4,bd=5,_d=6,xd=7;var yd=300,Zi=301,Tr=302,ul=303,fl=304,Eo=306,Ua=1e3,ri=1001,Fa=1002,Wt=1003,Ru=1004;var To=1005;var jt=1006,pl=1007;var Ji=1008;var bn=1009,vd=1010,Md=1011,xs=1012,ml=1013,Wn=1014,Xn=1015,ui=1016,gl=1017,bl=1018,ys=1020,Sd=35902,wd=35899,Ed=1021,Td=1022,Dn=1023,oi=1026,$i=1027,Ad=1028,_l=1029,Ar=1030,xl=1031;var yl=1033,Ao=33776,Ro=33777,Co=33778,Po=33779,vl=35840,Ml=35841,Sl=35842,wl=35843,El=36196,Tl=37492,Al=37496,Rl=37488,Cl=37489,Pl=37490,Il=37491,Dl=37808,Ll=37809,Nl=37810,Ul=37811,Fl=37812,zl=37813,Ol=37814,Bl=37815,kl=37816,Vl=37817,Hl=37818,Gl=37819,Wl=37820,Xl=37821,ql=36492,Yl=36494,jl=36495,Zl=36283,Jl=36284,$l=36285,Kl=36286;var js=2300,za=2301,Ea=2302,$c=2303,Kc=2400,Qc=2401,ed=2402;var Cu=3200;var Rd=0,Pu=1,Ti="",Ft="srgb",mr="srgb-linear",Zs="linear",pt="srgb";var hr=7680;var td=519,Iu=512,Du=513,Lu=514,Ql=515,Nu=516,Uu=517,ec=518,Fu=519,Oa=35044;var Cd="300 es",Vn=2e3,rs=2001;function rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){let i=Js("canvas");return i.style.display="block",i}var Th={},ss=null;function $s(...i){let e="THREE."+i.shift();ss?ss("log",e,...i):console.log(e,...i)}function Ou(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Ou(i);let e="THREE."+i.shift();if(ss)ss("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Ou(i);let e="THREE."+i.shift();if(ss)ss("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ks(...i){let e=i.join(" ");e in Th||(Th[e]=!0,Ye(...i))}function Bu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var ku={[Ra]:Ca,[Pa]:La,[Ia]:Na,[pr]:Da,[Ca]:Ra,[La]:Pa,[Na]:Ia,[Da]:pr},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,ns=Math.PI/180,os=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Pd(i,e){return(i%e+e)%e}function op(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ap(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function lp(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function cp(i,e=1){return e-Math.abs(Pd(i,e*2)-e)}function dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fp(i,e){return i+Math.random()*(e-i)}function pp(i){return i*(.5-Math.random())}function mp(i){i!==void 0&&(Ah=i);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gp(i){return i*ns}function bp(i){return i*os}function _p(i){return(i&i-1)===0&&i!==0}function xp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vp(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*d,a*c);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qn={DEG2RAD:ns,RAD2DEG:os,generateUUID:si,clamp:tt,euclideanModulo:Pd,mapLinear:op,inverseLerp:ap,lerp:Xs,damp:lp,pingpong:cp,smoothstep:dp,smootherstep:hp,randInt:up,randFloat:fp,randFloatSpread:pp,seededRandom:mp,degToRad:gp,radToDeg:bp,isPowerOfTwo:_p,ceilPowerOfTwo:xp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:vp,normalize:gt,denormalize:kn},ge=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(u!==y||l!==h||c!==p||d!==g){let m=l*h+c*p+d*g+u*y;m<0&&(h=-h,p=-p,g=-g,y=-y,m=-m);let f=1-a;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);f=Math.sin(f*S)/M,a=Math.sin(a*S)/M,l=l*f+h*a,c=c*f+p*a,d=d*f+g*a,u=u*f+y*a}else{l=l*f+h*a,c=c*f+p*a,d=d*f+g*a,u=u*f+y*a;let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*p-c*h,e[t+1]=l*g+d*h+c*u-a*p,e[t+2]=c*g+d*p+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"YXZ":this._x=h*d*u+c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"ZXY":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u-h*p*g;break;case"ZYX":this._x=h*d*u-c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u+h*p*g;break;case"YZX":this._x=h*d*u+c*p*g,this._y=c*p*u+h*d*g,this._z=c*d*g-h*p*u,this._w=c*d*u-h*p*g;break;case"XZY":this._x=h*d*u-c*p*g,this._y=c*p*u-h*d*g,this._z=c*d*g+h*p*u,this._w=c*d*u+h*p*g;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mc=new D,Rh=new Zt,et=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],p=n[5],g=n[8],y=r[0],m=r[3],f=r[6],S=r[1],M=r[4],v=r[7],C=r[2],E=r[5],I=r[8];return s[0]=o*y+a*S+l*C,s[3]=o*m+a*M+l*E,s[6]=o*f+a*v+l*I,s[1]=c*y+d*S+u*C,s[4]=c*m+d*M+u*E,s[7]=c*f+d*v+u*I,s[2]=h*y+p*S+g*C,s[5]=h*m+p*M+g*E,s[8]=h*f+p*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,p=c*s-o*l,g=t*u+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(r*c-d*n)*y,e[2]=(a*n-r*o)*y,e[3]=h*y,e[4]=(d*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Sc.makeScale(e,t)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Sc=new et,Ch=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:Zs,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var dt=Mp();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kr,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Js("canvas")),kr.width=e.width,kr.height=e.height;let r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sp=0,as=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wc(r[o].image)):s.push(wc(r[o]))}else s=wc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var wp=0,Ec=new D,hn=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ri,r=ri,s=jt,o=Ji,a=Dn,l=bn,c=i.DEFAULT_ANISOTROPY,d=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=si(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=yd;hn.DEFAULT_ANISOTROPY=1;var At=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,C=(f+1)/2,E=(d+h)/4,I=(u+y)/4,b=(g+m)/4;return M>v&&M>C?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=I/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=E/r,s=b/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=I/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(h-d)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new as(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qs=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends hn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rt=class i{constructor(e,t,n,r,s,o,a,l,c,d,u,h,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,h,p,g,y,m)}set(e,t,n,r,s,o,a,l,c,d,u,h,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=u,f[14]=h,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let h=o*d,p=o*u,g=a*d,y=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,p=l*u,g=c*d,y=c*u;t[0]=h-y*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,p=o*u,g=a*d,y=a*u;t[0]=l*d,t[4]=g*c-p,t[8]=h*c+y,t[1]=l*u,t[5]=y*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=y-h*u,t[8]=g*u+p,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*u+g,t[10]=h-y*u}else if(e.order==="XZY"){let h=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+y,t[5]=o*d,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*d,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ep,e,Tp)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Li.crossVectors(n,yn),Li.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Li.crossVectors(n,yn)),Li.normalize(),Yo.crossVectors(yn,Li),r[0]=Li.x,r[4]=Yo.x,r[8]=yn.x,r[1]=Li.y,r[5]=Yo.y,r[9]=yn.y,r[2]=Li.z,r[6]=Yo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],S=n[3],M=n[7],v=n[11],C=n[15],E=r[0],I=r[4],b=r[8],x=r[12],L=r[1],R=r[5],N=r[9],z=r[13],k=r[2],B=r[6],F=r[10],A=r[14],V=r[3],q=r[7],ue=r[11],pe=r[15];return s[0]=o*E+a*L+l*k+c*V,s[4]=o*I+a*R+l*B+c*q,s[8]=o*b+a*N+l*F+c*ue,s[12]=o*x+a*z+l*A+c*pe,s[1]=d*E+u*L+h*k+p*V,s[5]=d*I+u*R+h*B+p*q,s[9]=d*b+u*N+h*F+p*ue,s[13]=d*x+u*z+h*A+p*pe,s[2]=g*E+y*L+m*k+f*V,s[6]=g*I+y*R+m*B+f*q,s[10]=g*b+y*N+m*F+f*ue,s[14]=g*x+y*z+m*A+f*pe,s[3]=S*E+M*L+v*k+C*V,s[7]=S*I+M*R+v*B+C*q,s[11]=S*b+M*N+v*F+C*ue,s[15]=S*x+M*z+v*A+C*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15],S=l*p-c*h,M=a*p-c*u,v=a*h-l*u,C=o*p-c*d,E=o*h-l*d,I=o*u-a*d;return t*(y*S-m*M+f*v)-n*(g*S-m*C+f*E)+r*(g*M-y*C+f*I)-s*(g*v-y*E+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],S=t*a-n*o,M=t*l-r*o,v=t*c-s*o,C=n*l-r*a,E=n*c-s*a,I=r*c-s*l,b=d*y-u*g,x=d*m-h*g,L=d*f-p*g,R=u*m-h*y,N=u*f-p*y,z=h*f-p*m,k=S*z-M*N+v*R+C*L-E*x+I*b;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/k;return e[0]=(a*z-l*N+c*R)*B,e[1]=(r*N-n*z-s*R)*B,e[2]=(y*I-m*E+f*C)*B,e[3]=(h*E-u*I-p*C)*B,e[4]=(l*L-o*z-c*x)*B,e[5]=(t*z-r*L+s*x)*B,e[6]=(m*v-g*I-f*M)*B,e[7]=(d*I-h*v+p*M)*B,e[8]=(o*N-a*L+c*b)*B,e[9]=(n*L-t*N-s*b)*B,e[10]=(g*E-y*v+f*S)*B,e[11]=(u*v-d*E-p*S)*B,e[12]=(a*x-o*R-l*b)*B,e[13]=(t*R-n*x+r*b)*B,e[14]=(y*M-g*C-m*S)*B,e[15]=(d*C-u*M+h*S)*B,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,p=s*d,g=s*u,y=o*d,m=o*u,f=a*u,S=l*c,M=l*d,v=l*u,C=n.x,E=n.y,I=n.z;return r[0]=(1-(y+f))*C,r[1]=(p+v)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(p-v)*E,r[5]=(1-(h+f))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+M)*I,r[9]=(m-S)*I,r[10]=(1-(h+y))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Vr.set(r[0],r[1],r[2]).length(),a=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),zn.copy(this);let c=1/o,d=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=Vn,l=!1){let c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Vn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===rs)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Vn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Vn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===rs)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vr=new D,zn=new rt,Ep=new D(0,0,0),Tp=new D(1,1,1),Li=new D,Yo=new D,yn=new D,Ih=new rt,Dh=new Zt,Hn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ap=0,Lh=new D,Hr=new Zt,_i=new rt,jo=new D,Fs=new D,Rp=new D,Cp=new Zt,Nh=new D(1,0,0),Uh=new D(0,1,0),Fh=new D(0,0,1),zh={type:"added"},Pp={type:"removed"},Gr={type:"childadded",child:null},Tc={type:"childremoved",child:null},Ot=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Hn,n=new Zt,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new et}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Fs,jo,this.up):_i.lookAt(jo,Fs,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(_i),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Pd(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ac(o,s,e+1/3),this.g=Ac(o,s,e),this.b=Ac(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ft){function n(s){s!==void 0&&parseFloat(s)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return dt.workingToColorSpace(rn.copy(this),e),Math.round(tt(rn.r*255,0,255))*65536+Math.round(tt(rn.g*255,0,255))*256+Math.round(tt(rn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(rn.copy(this),t);let n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ft){dt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,r=rn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Zo);let n=Xs(Ni.h,Zo.h,t),r=Xs(Ni.s,Zo.s,t),s=Xs(Ni.l,Zo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new st;st.NAMES=Vu;var eo=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new D,xi=new D,Rc=new D,yi=new D,Wr=new D,Xr=new D,Oh=new D,Cc=new D,Pc=new D,Ic=new D,Dc=new At,Lc=new At,Nc=new At,ii=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){On.subVectors(r,t),xi.subVectors(n,t),Rc.subVectors(e,t);let o=On.dot(On),a=On.dot(xi),l=On.dot(Rc),c=xi.dot(xi),d=xi.dot(Rc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,p=(c*l-a*d)*h,g=(o*d-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Dc.setScalar(0),Lc.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Dc,s.x),o.addScaledVector(Lc,s.y),o.addScaledVector(Nc,s.z),o}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),xi.subVectors(e,t),On.cross(xi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),On.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Wr.subVectors(r,n),Xr.subVectors(s,n),Cc.subVectors(e,n);let l=Wr.dot(Cc),c=Xr.dot(Cc);if(l<=0&&c<=0)return t.copy(n);Pc.subVectors(e,r);let d=Wr.dot(Pc),u=Xr.dot(Pc);if(d>=0&&u<=d)return t.copy(r);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Wr,o);Ic.subVectors(e,s);let p=Wr.dot(Ic),g=Xr.dot(Ic);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xr,a);let m=d*g-p*u;if(m<=0&&u-d>=0&&p-g>=0)return Oh.subVectors(s,r),a=(u-d)/(u-d+(p-g)),t.copy(r).addScaledVector(Oh,a);let f=1/(m+y+h);return o=y*f,a=h*f,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),$o.subVectors(this.max,zs),qr.subVectors(e.a,zs),Yr.subVectors(e.b,zs),jr.subVectors(e.c,zs),Ui.subVectors(Yr,qr),Fi.subVectors(jr,Yr),ar.subVectors(qr,jr);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ar.z,ar.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ar.z,0,-ar.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ar.y,ar.x,0];return!Uc(t,qr,Yr,jr,$o)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,qr,Yr,jr,$o))?!1:(Ko.crossVectors(Ui,Fi),t=[Ko.x,Ko.y,Ko.z],Uc(t,qr,Yr,jr,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,Jo=new zt,qr=new D,Yr=new D,jr=new D,Ui=new D,Fi=new D,ar=new D,zs=new D,$o=new D,Ko=new D,lr=new D;function Uc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){lr.fromArray(i,s);let a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),d=n.dot(lr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Ut=new D,Qo=new ge,Dp=0,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oa&&(e.usage=this.usage),e}};var to=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var no=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lp=new zt,Os=new D,Fc=new D,gr=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Fc)),this.expandByPoint(Os.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Np=0,In=new rt,zc=new Ot,Zr=new D,vn=new zt,Bs=new zt,Gt=new D,mt=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(vn.min,Bs.min),vn.expandByPoint(Gt),Gt.addVectors(vn.max,Bs.max),vn.expandByPoint(Gt)):(vn.expandByPoint(Bs.min),vn.expandByPoint(Bs.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Gt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),Gt.add(Zr)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new D,l[b]=new D;let c=new D,d=new D,u=new D,h=new ge,p=new ge,g=new ge,y=new D,m=new D;function f(b,x,L){c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),u.fromBufferAttribute(n,L),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,L),d.sub(c),u.sub(c),p.sub(h),g.sub(h);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(y.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(R),a[b].add(y),a[x].add(y),a[L].add(y),l[b].add(m),l[x].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let b=0,x=S.length;b<x;++b){let L=S[b],R=L.start,N=L.count;for(let z=R,k=R+N;z<k;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let M=new D,v=new D,C=new D,E=new D;function I(b){C.fromBufferAttribute(r,b),E.copy(C);let x=a[b];M.copy(x),M.sub(C.multiplyScalar(C.dot(x))).normalize(),v.crossVectors(E,x);let R=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,R)}for(let b=0,x=S.length;b<x;++b){let L=S[b],R=L.start,N=L.count;for(let z=R,k=R+N;z<k;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*d;for(let f=0;f<d;f++)h[g++]=c[p++]}return new Yt(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(t))}let s=e.morphAttributes;for(let c in s){let d=[],u=s[c];for(let h=0,p=u.length;h<p;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},io=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oa,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new D,ds=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$s("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$s("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Up=0,li=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=si(),this.name="",this.type="Material",this.blending=fr,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ki=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jr,ks=new D,$r=new D,Kr=new D,Qr=new ge,Vs=new ge,Hu=new rt,ea=new D,Hs=new D,ta=new D,Bh=new ge,Oc=new ge,kh=new ge,br=class extends Ot{constructor(e=new ki){if(super(),this.isSprite=!0,this.type="Sprite",Jr===void 0){Jr=new mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new io(t,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new ds(n,3,0,!1)),Jr.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Jr,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Kr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;na(ea.set(-.5,-.5,0),Kr,o,$r,r,s),na(Hs.set(.5,-.5,0),Kr,o,$r,r,s),na(ta.set(.5,.5,0),Kr,o,$r,r,s),Bh.set(0,0),Oc.set(1,0),kh.set(1,1);let a=e.ray.intersectTriangle(ea,Hs,ta,!1,ks);if(a===null&&(na(Hs.set(-.5,.5,0),Kr,o,$r,r,s),Oc.set(0,1),a=e.ray.intersectTriangle(ea,ta,Hs,!1,ks),a===null))return;let l=e.ray.origin.distanceTo(ks);l<e.near||l>e.far||t.push({distance:l,point:ks.clone(),uv:ii.getInterpolation(ks,ea,Hs,ta,Bh,Oc,kh,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function na(i,e,t,n,r,s){Qr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Vs.x=s*Qr.x-r*Qr.y,Vs.y=r*Qr.x+s*Qr.y):Vs.copy(Qr),i.copy(e),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Hu)}var Mi=new D,Bc=new D,ia=new D,zi=new D,kc=new D,ra=new D,Vc=new D,Vi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bc.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Bc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ia),a=zi.dot(this.direction),l=-zi.dot(ia),c=zi.lengthSq(),d=Math.abs(1-o*o),u,h,p,g;if(d>0)if(u=o*l-a,h=o*a-l,g=s*d,u>=0)if(h>=-g)if(h<=g){let y=1/d;u*=y,h*=y,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bc).addScaledVector(ia,h),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,r,s){kc.subVectors(t,e),ra.subVectors(n,e),Vc.crossVectors(kc,ra);let o=this.direction.dot(Vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);let l=a*this.direction.dot(ra.crossVectors(zi,ra));if(l<0)return null;let c=a*this.direction.dot(kc.cross(zi));if(c<0||l+c>o)return null;let d=-a*zi.dot(Vc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vh=new rt,cr=new Vi,sa=new gr,Hh=new D,oa=new D,aa=new D,la=new D,Hc=new D,ca=new D,Gh=new D,da=new D,lt=class extends Ot{constructor(e=new mt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],u=s[l];d!==0&&(Hc.fromBufferAttribute(u,e),o?ca.addScaledVector(Hc,d):ca.addScaledVector(Hc.sub(t),d))}t.add(ca)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(sa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(sa,Hh)===null||cr.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Vh.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=a.getX(v),I=a.getX(v+1),b=a.getX(v+2);r=ha(this,f,e,n,c,d,u,E,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=ha(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=M;v<C;v+=3){let E=v,I=v+1,b=v+2;r=ha(this,f,e,n,c,d,u,E,I,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=m,M=m+1,v=m+2;r=ha(this,o,e,n,c,d,u,S,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Fp(i,e,t,n,r,s,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===wi,a),l===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:i}}function ha(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,oa),i.getVertexPosition(l,aa),i.getVertexPosition(c,la);let d=Fp(i,e,t,n,oa,aa,la,Gh);if(d){let u=new D;ii.getBarycoord(Gh,oa,aa,la,u),r&&(d.uv=ii.getInterpolatedAttribute(r,a,l,c,u,new ge)),s&&(d.uv1=ii.getInterpolatedAttribute(s,a,l,c,u,new ge)),o&&(d.normal=ii.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};ii.getNormal(oa,aa,la,h.normal),d.face=h,d.barycoord=u}return d}var Ha=class extends hn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Wt,d=Wt,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gc=new D,zp=new D,Op=new et,gn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gc.subVectors(n,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Gc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Op.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},dr=new gr,Bp=new ge(.5,.5),ua=new D,hs=class{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],p=s[7],g=s[8],y=s[9],m=s[10],f=s[11],S=s[12],M=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,p-d,f-g,C-S).normalize(),r[1].setComponents(c+o,p+d,f+g,C+S).normalize(),r[2].setComponents(c+a,p+u,f+y,C+M).normalize(),r[3].setComponents(c-a,p-u,f-y,C-M).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,p-h,f-m,C-v).normalize();else if(r[4].setComponents(c-l,p-h,f-m,C-v).normalize(),t===Vn)r[5].setComponents(c+l,p+h,f+m,C+v).normalize();else if(t===rs)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);let t=Bp.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jt=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ga=new D,Wa=new D,Wh=new rt,Gs=new Vi,fa=new gr,Wc=new D,Xh=new D,_r=class extends Ot{constructor(e=new mt,t=new Jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ga.fromBufferAttribute(t,r-1),Wa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new ct(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;Wh.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Wh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=d.getX(y),S=d.getX(y+1),M=pa(this,e,Gs,l,f,S,y);M&&t.push(M)}if(this.isLineLoop){let y=d.getX(g-1),m=d.getX(p),f=pa(this,e,Gs,l,y,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=pa(this,e,Gs,l,y,y+1,y);f&&t.push(f)}if(this.isLineLoop){let y=pa(this,e,Gs,l,g-1,p,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function pa(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Ga.fromBufferAttribute(a,r),Wa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ga,Wa,Wc,Xh)>n)return;Wc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wc);if(!(c<e.near||c>e.far))return{distance:c,point:Xh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qh=new D,Yh=new D,un=class extends _r{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qh.fromBufferAttribute(t,r),Yh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qh.distanceTo(Yh);e.setAttribute("lineDistance",new ct(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ro=class extends hn{constructor(e=[],t=Zi,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends hn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class extends hn{constructor(e,t,n=Wn,r,s,o,a=Wt,l=Wt,c,d=oi,u=1){if(d!==oi&&d!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xa=class extends Hi{constructor(e,t=Wn,n=Zi,r,s,o=Wt,a=Wt,l,c=oi){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},so=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},on=class i extends mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(u,2));function g(y,m,f,S,M,v,C,E,I,b,x){let L=v/I,R=C/b,N=v/2,z=C/2,k=E/2,B=I+1,F=b+1,A=0,V=0,q=new D;for(let ue=0;ue<F;ue++){let pe=ue*R-z;for(let J=0;J<B;J++){let ee=J*L-N;q[y]=ee*S,q[m]=pe*M,q[f]=k,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[f]=E>0?1:-1,d.push(q.x,q.y,q.z),u.push(J/I),u.push(1-ue/b),A+=1}}for(let ue=0;ue<b;ue++)for(let pe=0;pe<I;pe++){let J=h+pe+B*ue,ee=h+pe+B*(ue+1),we=h+(pe+1)+B*(ue+1),he=h+(pe+1)+B*ue;l.push(J,ee,he),l.push(ee,we,he),V+=6}a.addGroup(p,V,x),p+=V,h+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ei=class i extends mt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],u=[],h=[],p=[],g=0,y=[],m=n/2,f=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function S(){let v=new D,C=new D,E=0,I=(t-e)/n;for(let b=0;b<=s;b++){let x=[],L=b/s,R=L*(t-e)+e;for(let N=0;N<=r;N++){let z=N/r,k=z*l+a,B=Math.sin(k),F=Math.cos(k);C.x=R*B,C.y=-L*n+m,C.z=R*F,u.push(C.x,C.y,C.z),v.set(B,I,F).normalize(),h.push(v.x,v.y,v.z),p.push(z,1-L),x.push(g++)}y.push(x)}for(let b=0;b<r;b++)for(let x=0;x<s;x++){let L=y[x][b],R=y[x+1][b],N=y[x+1][b+1],z=y[x][b+1];(e>0||x!==0)&&(d.push(L,R,z),E+=3),(t>0||x!==s-1)&&(d.push(R,N,z),E+=3)}c.addGroup(f,E,0),f+=E}function M(v){let C=g,E=new ge,I=new D,b=0,x=v===!0?e:t,L=v===!0?1:-1;for(let N=1;N<=r;N++)u.push(0,m*L,0),h.push(0,L,0),p.push(.5,.5),g++;let R=g;for(let N=0;N<=r;N++){let k=N/r*l+a,B=Math.cos(k),F=Math.sin(k);I.x=x*F,I.y=m*L,I.z=x*B,u.push(I.x,I.y,I.z),h.push(0,L,0),E.x=B*.5+.5,E.y=F*.5*L+.5,p.push(E.x,E.y),g++}for(let N=0;N<r;N++){let z=C+N,k=R+N;v===!0?d.push(k,k+1,z):d.push(k+1,k,z),b+=3}c.addGroup(f,b,v===!0?1:2),f+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qa=class i extends Ei{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ma=new D,ga=new D,Xc=new D,ba=new ii,an=class extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(ns*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:f}=ba;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),ba.getNormal(Xc),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let M=(S+1)%3,v=u[S],C=u[M],E=ba[d[S]],I=ba[d[M]],b=`${v}_${C}`,x=`${C}_${v}`;x in h&&h[x]?(Xc.dot(h[x].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(I.x,I.y,I.z)),h[x]=null):b in h||(h[b]={index0:c[S],index1:c[M],normal:Xc.clone()})}}for(let g in h)if(h[g]){let{index0:y,index1:m}=h[g];ma.fromBufferAttribute(a,y),ga.fromBufferAttribute(a,m),p.push(ma.x,ma.y,ma.z),p.push(ga.x,ga.y,ga.z)}this.setAttribute("position",new ct(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let d=n[r],h=n[r+1]-d,p=(o-d)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ge:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,r=[],s=[],o=[],a=new D,l=new rt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(tt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},us=class extends Sn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ge){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*d-p*u+this.aX,c=h*u+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ya=class extends us{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Id(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,p*=d,r(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var _a=new D,qc=new Id,Yc=new Id,jc=new Id,ja=class extends Sn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(_a.subVectors(r[0],r[1]).add(r[0]),c=_a);let u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(_a.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=_a),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),qc.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,y,m),Yc.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,y,m),jc.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Yc.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),jc.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(qc.calc(l),Yc.calc(l),jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jh(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function kp(i,e){let t=1-i;return t*t*e}function Vp(i,e){return 2*(1-i)*i*e}function Hp(i,e){return i*i*e}function qs(i,e,t,n){return kp(i,e)+Vp(i,t)+Hp(i,n)}function Gp(i,e){let t=1-i;return t*t*t*e}function Wp(i,e){let t=1-i;return 3*t*t*i*e}function Xp(i,e){return 3*(1-i)*i*i*e}function qp(i,e){return i*i*i*e}function Ys(i,e,t,n,r){return Gp(i,e)+Wp(i,t)+Xp(i,n)+qp(i,r)}var oo=class extends Sn{constructor(e=new ge,t=new ge,n=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends Sn{constructor(e=new D,t=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ys(e,r.x,s.x,o.x,a.x),Ys(e,r.y,s.y,o.y,a.y),Ys(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ao=class extends Sn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends Sn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends Sn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(qs(e,r.x,s.x,o.x),qs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yr=class extends Sn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(qs(e,r.x,s.x,o.x),qs(e,r.y,s.y,o.y),qs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(jh(a,l.x,c.x,d.x,u.x),jh(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ge().fromArray(r))}return this}},Ja=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:ja,CubicBezierCurve:oo,CubicBezierCurve3:Za,EllipseCurve:us,LineCurve:ao,LineCurve3:xr,QuadraticBezierCurve:lo,QuadraticBezierCurve3:yr,SplineCurve:co}),fs=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ja[r.type]().fromJSON(r))}return this}},vr=class extends fs{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ao(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new lo(this.currentPoint.clone(),new ge(e,t),new ge(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new oo(this.currentPoint.clone(),new ge(e,t),new ge(n,r),new ge(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new us(e,t,n,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gi=class extends vr{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new vr().fromJSON(r))}return this}};function Yp(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Gu(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Kp(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,u=l;for(let h=t;h<r;h+=t){let p=i[h],g=i[h+1];p<a&&(a=p),g<l&&(l=g),p>d&&(d=p),g>u&&(u=g)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return ho(s,o,t,a,l,c,0),o}function Gu(i,e,t,n,r){let s;if(r===c0(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Zh(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Zh(o/n|0,i[o],i[o+1],s);return s&&ps(s,s.next)&&(fo(s),s=s.next),s}function Mr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ps(t,t.next)||Tt(t.prev,t,t.next)===0)){if(fo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ho(i,e,t,n,r,s,o){if(!i)return;!o&&s&&i0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Zp(i,n,r,s):jp(i)){e.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Jp(Mr(i),e),ho(i,e,t,n,r,s,2)):o===2&&$p(i,e,t,n,r,s):ho(Mr(i),e,t,n,r,s,1);break}}}function jp(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=p&&Ws(r,a,s,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zp(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Tt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,p=Math.min(a,l,c),g=Math.min(d,u,h),y=Math.max(a,l,c),m=Math.max(d,u,h),f=nd(p,g,e,t,n),S=nd(y,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=f&&v&&v.z<=S;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ws(a,d,l,u,c,h,M.x,M.y)&&Tt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ws(a,d,l,u,c,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=m&&M!==r&&M!==o&&Ws(a,d,l,u,c,h,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ws(a,d,l,u,c,h,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Jp(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ps(n,r)&&Xu(n,t,t.next,r)&&uo(n,r)&&uo(r,n)&&(e.push(n.i,t.i,r.i),fo(t),fo(t.next),t=i=r),t=t.next}while(t!==i);return Mr(t)}function $p(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&o0(o,a)){let l=qu(o,a);o=Mr(o,o.next),l=Mr(l,l.next),ho(o,e,t,n,r,s,0),ho(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Kp(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Gu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(s0(c))}r.sort(Qp);for(let s=0;s<r.length;s++)t=e0(r[s],t);return t}function Qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function e0(i,e){let t=t0(i,e);if(!t)return e;let n=qu(t,i);return Mr(n,n.next),Mr(t,t.next)}function t0(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ps(i,t))return t;do{if(ps(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wu(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let u=Math.abs(r-t.y)/(n-t.x);uo(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&n0(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function n0(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function i0(i,e,t,n){let r=i;do r.z===0&&(r.z=nd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,r0(r)}function r0(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function nd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function s0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wu(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Ws(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Wu(i,e,t,n,r,s,o,a)}function o0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!a0(i,e)&&(uo(i,e)&&uo(e,i)&&l0(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||ps(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ps(i,e){return i.x===e.x&&i.y===e.y}function Xu(i,e,t,n){let r=ya(Tt(i,e,t)),s=ya(Tt(i,e,n)),o=ya(Tt(t,n,i)),a=ya(Tt(t,n,e));return!!(r!==s&&o!==a||r===0&&xa(i,t,e)||s===0&&xa(i,n,e)||o===0&&xa(t,i,n)||a===0&&xa(t,e,n))}function xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ya(i){return i>0?1:i<0?-1:0}function a0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function uo(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function l0(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qu(i,e){let t=id(i.i,i.x,i.y),n=id(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Zh(i,e,t,n){let r=id(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function id(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var rd=class{static triangulate(e,t,n=2){return Yp(e,t,n)}},ur=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Jh(e),$h(n,e);let o=e.length;t.forEach(Jh);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,$h(n,t[l]);let a=rd.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Jh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $h(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sr=class i extends mt{constructor(e=new Gi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:d0,M,v=!1,C,E,I,b;if(f){M=f.getSpacedPoints(d),v=!0,h=!1;let te=f.isCatmullRomCurve3?f.closed:!1;C=f.computeFrenetFrames(d,te),E=new D,I=new D,b=new D}h||(m=0,p=0,g=0,y=0);let x=a.extractPoints(c),L=x.shape,R=x.holes;if(!ur.isClockWise(L)){L=L.reverse();for(let te=0,ae=R.length;te<ae;te++){let oe=R[te];ur.isClockWise(oe)&&(R[te]=oe.reverse())}}function z(te){let oe=10000000000000001e-36,Me=te[0];for(let P=1;P<=te.length;P++){let He=P%te.length,Re=te[He],Oe=Re.x-Me.x,xe=Re.y-Me.y,T=Oe*Oe+xe*xe,_=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(Me.x),Math.abs(Me.y)),O=oe*_*_;if(T<=O){te.splice(He,1),P--;continue}Me=Re}}z(L),R.forEach(z);let k=R.length,B=L;for(let te=0;te<k;te++){let ae=R[te];L=L.concat(ae)}function F(te,ae,oe){return ae||je("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ae,oe)}let A=L.length;function V(te,ae,oe){let Me,P,He,Re=te.x-ae.x,Oe=te.y-ae.y,xe=oe.x-te.x,T=oe.y-te.y,_=Re*Re+Oe*Oe,O=Re*T-Oe*xe;if(Math.abs(O)>Number.EPSILON){let Q=Math.sqrt(_),fe=Math.sqrt(xe*xe+T*T),$=ae.x-Oe/Q,Ne=ae.y+Re/Q,ye=oe.x-T/fe,le=oe.y+xe/fe,be=((ye-$)*T-(le-Ne)*xe)/(Re*T-Oe*xe);Me=$+Re*be-te.x,P=Ne+Oe*be-te.y;let se=Me*Me+P*P;if(se<=2)return new ge(Me,P);He=Math.sqrt(se/2)}else{let Q=!1;Re>Number.EPSILON?xe>Number.EPSILON&&(Q=!0):Re<-Number.EPSILON?xe<-Number.EPSILON&&(Q=!0):Math.sign(Oe)===Math.sign(T)&&(Q=!0),Q?(Me=-Oe,P=Re,He=Math.sqrt(_)):(Me=Re,P=Oe,He=Math.sqrt(_/2))}return new ge(Me/He,P/He)}let q=[];for(let te=0,ae=B.length,oe=ae-1,Me=te+1;te<ae;te++,oe++,Me++)oe===ae&&(oe=0),Me===ae&&(Me=0),q[te]=V(B[te],B[oe],B[Me]);let ue=[],pe,J=q.concat();for(let te=0,ae=k;te<ae;te++){let oe=R[te];pe=[];for(let Me=0,P=oe.length,He=P-1,Re=Me+1;Me<P;Me++,He++,Re++)He===P&&(He=0),Re===P&&(Re=0),pe[Me]=V(oe[Me],oe[He],oe[Re]);ue.push(pe),J=J.concat(pe)}let ee;if(m===0)ee=ur.triangulateShape(B,R);else{let te=[],ae=[];for(let oe=0;oe<m;oe++){let Me=oe/m,P=p*Math.cos(Me*Math.PI/2),He=g*Math.sin(Me*Math.PI/2)+y;for(let Re=0,Oe=B.length;Re<Oe;Re++){let xe=F(B[Re],q[Re],He);De(xe.x,xe.y,-P),Me===0&&te.push(xe)}for(let Re=0,Oe=k;Re<Oe;Re++){let xe=R[Re];pe=ue[Re];let T=[];for(let _=0,O=xe.length;_<O;_++){let Q=F(xe[_],pe[_],He);De(Q.x,Q.y,-P),Me===0&&T.push(Q)}Me===0&&ae.push(T)}}ee=ur.triangulateShape(te,ae)}let we=ee.length,he=g+y;for(let te=0;te<A;te++){let ae=h?F(L[te],J[te],he):L[te];v?(I.copy(C.normals[0]).multiplyScalar(ae.x),E.copy(C.binormals[0]).multiplyScalar(ae.y),b.copy(M[0]).add(I).add(E),De(b.x,b.y,b.z)):De(ae.x,ae.y,0)}for(let te=1;te<=d;te++)for(let ae=0;ae<A;ae++){let oe=h?F(L[ae],J[ae],he):L[ae];v?(I.copy(C.normals[te]).multiplyScalar(oe.x),E.copy(C.binormals[te]).multiplyScalar(oe.y),b.copy(M[te]).add(I).add(E),De(b.x,b.y,b.z)):De(oe.x,oe.y,u/d*te)}for(let te=m-1;te>=0;te--){let ae=te/m,oe=p*Math.cos(ae*Math.PI/2),Me=g*Math.sin(ae*Math.PI/2)+y;for(let P=0,He=B.length;P<He;P++){let Re=F(B[P],q[P],Me);De(Re.x,Re.y,u+oe)}for(let P=0,He=R.length;P<He;P++){let Re=R[P];pe=ue[P];for(let Oe=0,xe=Re.length;Oe<xe;Oe++){let T=F(Re[Oe],pe[Oe],Me);v?De(T.x,T.y+M[d-1].y,M[d-1].x+oe):De(T.x,T.y,u+oe)}}}Y(),de();function Y(){let te=r.length/3;if(h){let ae=0,oe=A*ae;for(let Me=0;Me<we;Me++){let P=ee[Me];Le(P[2]+oe,P[1]+oe,P[0]+oe)}ae=d+m*2,oe=A*ae;for(let Me=0;Me<we;Me++){let P=ee[Me];Le(P[0]+oe,P[1]+oe,P[2]+oe)}}else{for(let ae=0;ae<we;ae++){let oe=ee[ae];Le(oe[2],oe[1],oe[0])}for(let ae=0;ae<we;ae++){let oe=ee[ae];Le(oe[0]+A*d,oe[1]+A*d,oe[2]+A*d)}}n.addGroup(te,r.length/3-te,0)}function de(){let te=r.length/3,ae=0;ne(B,ae),ae+=B.length;for(let oe=0,Me=R.length;oe<Me;oe++){let P=R[oe];ne(P,ae),ae+=P.length}n.addGroup(te,r.length/3-te,1)}function ne(te,ae){let oe=te.length;for(;--oe>=0;){let Me=oe,P=oe-1;P<0&&(P=te.length-1);for(let He=0,Re=d+m*2;He<Re;He++){let Oe=A*He,xe=A*(He+1),T=ae+Me+Oe,_=ae+P+Oe,O=ae+P+xe,Q=ae+Me+xe;ze(T,_,O,Q)}}}function De(te,ae,oe){l.push(te),l.push(ae),l.push(oe)}function Le(te,ae,oe){Je(te),Je(ae),Je(oe);let Me=r.length/3,P=S.generateTopUV(n,r,Me-3,Me-2,Me-1);Be(P[0]),Be(P[1]),Be(P[2])}function ze(te,ae,oe,Me){Je(te),Je(ae),Je(Me),Je(ae),Je(oe),Je(Me);let P=r.length/3,He=S.generateSideWallUV(n,r,P-6,P-3,P-2,P-1);Be(He[0]),Be(He[1]),Be(He[3]),Be(He[1]),Be(He[2]),Be(He[3])}function Je(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function Be(te){s.push(te.x),s.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return h0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ja[r.type]().fromJSON(r)),new i(n,e.options)}},d0={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new ge(s,o),new ge(a,l),new ge(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ge(o,1-l),new ge(c,1-u),new ge(h,1-g),new ge(y,1-f)]:[new ge(a,1-l),new ge(d,1-u),new ge(p,1-g),new ge(m,1-f)]}};function h0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wr=class i extends mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<d;f++){let S=f*h-o;for(let M=0;M<c;M++){let v=M*u-s;g.push(v,-S,0),y.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let M=S+c*f,v=S+c*(f+1),C=S+1+c*(f+1),E=S+1+c*f;p.push(M,v,E),p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var po=class i extends mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new D,h=new D,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let S=[],M=f/n,v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let E=C/t;u.x=-e*Math.cos(r+E*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(r+E*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),y.push(h.x,h.y,h.z),m.push(E+v,1-M),S.push(c++)}d.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let M=d[f][S+1],v=d[f][S],C=d[f+1][S],E=d[f+1][S+1];(f!==0||o>0)&&p.push(M,v,E),(f!==n-1||l<Math.PI)&&p.push(v,C,E)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mo=class i extends mt{constructor(e=new yr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,l=new D,c=new ge,d=new D,u=[],h=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function y(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),S(),f()}function m(M){d=e.getPointAt(M/t,d);let v=o.normals[M],C=o.binormals[M];for(let E=0;E<=r;E++){let I=E/r*Math.PI*2,b=Math.sin(I),x=-Math.cos(I);l.x=x*v.x+b*C.x,l.y=x*v.y+b*C.y,l.z=x*v.z+b*C.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){let C=(r+1)*(M-1)+(v-1),E=(r+1)*M+(v-1),I=(r+1)*M+v,b=(r+1)*(M-1)+v;g.push(C,E,b),g.push(E,I,b)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ja[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Rr(i[t]);for(let r in n)e[r]=n[r]}return e}function u0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Yu={clone:Rr,merge:ln},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=u0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Et=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ka=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function va(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Wi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends Wi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kc,endingEnd:Kc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qc:s=e,a=2*t-n;break;case ed:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qc:o=e,l=2*n-t;break;case ed:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,f=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let C=0;C!==a;++C)s[C]=f*o[d+C]+S*o[c+C]+M*o[l+C]+v*o[u+C];return s}},tl=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*d;return s}},nl=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},il=class extends Wi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,u=d.inTangents,h=d.outTangents;if(!u||!h){let y=(n-t)/(r-t),m=1-y;for(let f=0;f!==a;++f)s[f]=o[c+f]*m+o[l+f]*y;return s}let p=a*2,g=e-1;for(let y=0;y!==a;++y){let m=o[c+y],f=o[l+y],S=g*p+y*2,M=h[S],v=h[S+1],C=e*p+y*2,E=u[C],I=u[C+1],b=(n-t)/(r-t),x,L,R,N,z;for(let k=0;k<8;k++){x=b*b,L=x*b,R=1-b,N=R*R,z=N*R;let F=z*t+3*N*b*M+3*R*x*E+L*r-n;if(Math.abs(F)<1e-10)break;let A=3*N*(M-t)+6*R*b*(E-M)+3*x*(r-E);if(Math.abs(A)<1e-10)break;b=b-F/A,b=Math.max(0,Math.min(1,b))}s[y]=z*m+3*N*b*v+3*R*x*I+L*f}return s}},En=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new il(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Ea:t=this.InterpolantFactoryMethodSmooth;break;case $c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&sp(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ea,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let u=a*n,h=u-n,p=u+n;for(let g=0;g!==n;++g){let y=t[u+g];if(y!==t[h+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=za;var Xi=class extends En{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=js;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var rl=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};rl.prototype.ValueTypeName="color";var sl=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};sl.prototype.ValueTypeName="number";var ol=class extends Wi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let d=c+a;c!==d;c+=4)Zt.slerpFlat(s,0,o,c-a,o,c,l);return s}},go=class extends En{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends En{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=js;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends En{constructor(e,t,n,r){super(e,t,n,r)}};al.prototype.ValueTypeName="vector";var ll=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ju=new ll,cl=class{constructor(e){this.manager=e!==void 0?e:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var bo=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_o=class extends bo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zc=new rt,Kh=new D,Qh=new D,sd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),Qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qh),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===rs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ma=new D,Sa=new Zt,ni=new D,xo=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,Sa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ma,Sa,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Sa,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new D,eu=new ge,tu=new ge,sn=class extends xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ms=class extends xo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},od=class extends sd{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new od}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,dl=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new sn(es,ts,e,t);r.layers=this.layers,this.add(r);let s=new sn(es,ts,e,t);s.layers=this.layers,this.add(s);let o=new sn(es,ts,e,t);o.layers=this.layers,this.add(o);let a=new sn(es,ts,e,t);a.layers=this.layers,this.add(a);let l=new sn(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new sn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ld="\\[\\]\\.:\\/",m0=new RegExp("["+Ld+"]","g"),Nd="[^"+Ld+"]",g0="[^"+Ld.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Nd),_0=/(WCOD+)?/.source.replace("WCOD",g0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),v0=new RegExp("^"+b0+_0+x0+y0+"$"),M0=["material","materials","bones","map"],ad=class{constructor(e,t,n){let r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(e){let t=v0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);M0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=ad;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z_=new Float32Array(1);var nu=new rt,yo=class{constructor(e,t,n=0,r=1/0){this.ray=new Vi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nu),this}intersectObject(e,t=!0,n=[]){return ld(e,this,n,t),n.sort(iu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ld(e[r],this,n,t);return n.sort(iu),n}};function iu(i,e){return i.distance-e.distance}function ld(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)ld(s[o],e,t,!0)}}var bs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vo=class extends un{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new mt;s.setIndex(new Yt(n,1)),s.setAttribute("position",new ct(r,3)),super(s,new Jt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var ru=new D,wa,Jc,Er=class extends Ot{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",wa===void 0&&(wa=new mt,wa.setAttribute("position",new ct([0,0,0,0,1,0],3)),Jc=new qa(.5,1,5,1),Jc.translate(0,-.5,0)),this.position.copy(t),this.line=new _r(wa,new Jt({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new lt(Jc,new ci({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ru.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ru,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Mo=class extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ud(i,e,t,n){let r=S0(n);switch(t){case Ed:return i*e;case Ad:return i*e/r.components*r.byteLength;case _l:return i*e/r.components*r.byteLength;case Ar:return i*e*2/r.components*r.byteLength;case xl:return i*e*2/r.components*r.byteLength;case Td:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case yl:return i*e*4/r.components*r.byteLength;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case wl:return Math.max(i,16)*Math.max(e,8)/4;case vl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case El:case Tl:case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ql:case Yl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $l:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S0(i){switch(i){case bn:case vd:return{byteLength:1,components:1};case xs:case Md:case ui:return{byteLength:2,components:1};case gl:case bl:return{byteLength:2,components:4};case Wn:case ml:case Xn:return{byteLength:4,components:1};case Sd:case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _f(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function C0(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){let g=u[h],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,u[h]=y)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,W0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Q0=`#define PI 3.141592653589793
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Rm=`uniform sampler2D dfgLUT;
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
}`,Cm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Fg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,$g=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,e1=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,n1=`#define TOON
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
}`,i1=`uniform float size;
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,o1=`uniform vec3 color;
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
}`,a1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:P0,alphahash_pars_fragment:I0,alphamap_fragment:D0,alphamap_pars_fragment:L0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:F0,aomap_pars_fragment:z0,batching_pars_vertex:O0,batching_vertex:B0,begin_vertex:k0,beginnormal_vertex:V0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:W0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:j0,color_fragment:Z0,color_pars_fragment:J0,color_pars_vertex:$0,color_vertex:K0,common:Q0,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:rm,emissivemap_pars_fragment:sm,colorspace_fragment:om,colorspace_pars_fragment:am,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:dm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:ym,lights_pars_begin:vm,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Em,lights_phong_pars_fragment:Tm,lights_physical_fragment:Am,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Im,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Fm,map_pars_fragment:zm,map_particle_fragment:Om,map_particle_pars_fragment:Bm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Vm,morphinstance_vertex:Hm,morphcolor_vertex:Gm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:jm,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:$m,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:og,dithering_fragment:ag,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:bg,skinnormal_vertex:_g,specularmap_fragment:xg,specularmap_pars_fragment:yg,tonemapping_fragment:vg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:wg,uv_pars_fragment:Eg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Lg,cube_frag:Ng,depth_vert:Ug,depth_frag:Fg,distance_vert:zg,distance_frag:Og,equirect_vert:Bg,equirect_frag:kg,linedashed_vert:Vg,linedashed_frag:Hg,meshbasic_vert:Gg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:jg,meshnormal_vert:Zg,meshnormal_frag:Jg,meshphong_vert:$g,meshphong_frag:Kg,meshphysical_vert:Qg,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:r1,shadow_vert:s1,shadow_frag:o1,sprite_vert:a1,sprite_frag:l1},Ce={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},pi={basic:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new st(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:ln([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:ln([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:ln([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:ln([Ce.lights,Ce.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};pi.physical={uniforms:ln([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var tc={r:0,b:0,g:0},Cr=new Hn,c1=new rt;function d1(i,e,t,n,r,s){let o=new st(0),a=r===!0?0:1,l,c,d=null,u=0,h=null;function p(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(S){let M=!1,v=p(S);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Eo)?(c===void 0&&(c=new lt(new on(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Rr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Cr.copy(M.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(Cr)),c.material.toneMapped=dt.getTransfer(v.colorSpace)!==pt,(d!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new wr(2,2),new wn({name:"BackgroundMaterial",uniforms:Rr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=dt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,M){S.getRGB(tc,Dd(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:y,dispose:f}}function h1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(R,N,z,k,B){let F=!1,A=u(R,k,z,N);s!==A&&(s=A,c(s.object)),F=p(R,k,z,B),F&&g(R,k,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(R,N,z,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function d(R){return i.deleteVertexArray(R)}function u(R,N,z,k){let B=k.wireframe===!0,F=n[N.id];F===void 0&&(F={},n[N.id]=F);let A=R.isInstancedMesh===!0?R.id:0,V=F[A];V===void 0&&(V={},F[A]=V);let q=V[z.id];q===void 0&&(q={},V[z.id]=q);let ue=q[B];return ue===void 0&&(ue=h(l()),q[B]=ue),ue}function h(R){let N=[],z=[],k=[];for(let B=0;B<t;B++)N[B]=0,z[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:k,object:R,attributes:{},index:null}}function p(R,N,z,k){let B=s.attributes,F=N.attributes,A=0,V=z.getAttributes();for(let q in V)if(V[q].location>=0){let pe=B[q],J=F[q];if(J===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),pe===void 0||pe.attribute!==J||J&&pe.data!==J.data)return!0;A++}return s.attributesNum!==A||s.index!==k}function g(R,N,z,k){let B={},F=N.attributes,A=0,V=z.getAttributes();for(let q in V)if(V[q].location>=0){let pe=F[q];pe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));let J={};J.attribute=pe,pe&&pe.data&&(J.data=pe.data),B[q]=J,A++}s.attributes=B,s.attributesNum=A,s.index=k}function y(){let R=s.newAttributes;for(let N=0,z=R.length;N<z;N++)R[N]=0}function m(R){f(R,0)}function f(R,N){let z=s.newAttributes,k=s.enabledAttributes,B=s.attributeDivisors;z[R]=1,k[R]===0&&(i.enableVertexAttribArray(R),k[R]=1),B[R]!==N&&(i.vertexAttribDivisor(R,N),B[R]=N)}function S(){let R=s.newAttributes,N=s.enabledAttributes;for(let z=0,k=N.length;z<k;z++)N[z]!==R[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function M(R,N,z,k,B,F,A){A===!0?i.vertexAttribIPointer(R,N,z,B,F):i.vertexAttribPointer(R,N,z,k,B,F)}function v(R,N,z,k){y();let B=k.attributes,F=z.getAttributes(),A=N.defaultAttributeValues;for(let V in F){let q=F[V];if(q.location>=0){let ue=B[V];if(ue===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){let pe=ue.normalized,J=ue.itemSize,ee=e.get(ue);if(ee===void 0)continue;let we=ee.buffer,he=ee.type,Y=ee.bytesPerElement,de=he===i.INT||he===i.UNSIGNED_INT||ue.gpuType===ml;if(ue.isInterleavedBufferAttribute){let ne=ue.data,De=ne.stride,Le=ue.offset;if(ne.isInstancedInterleavedBuffer){for(let ze=0;ze<q.locationSize;ze++)f(q.location+ze,ne.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ze=0;ze<q.locationSize;ze++)m(q.location+ze);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ze=0;ze<q.locationSize;ze++)M(q.location+ze,J/q.locationSize,he,pe,De*Y,(Le+J/q.locationSize*ze)*Y,de)}else{if(ue.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)f(q.location+ne,ue.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,we);for(let ne=0;ne<q.locationSize;ne++)M(q.location+ne,J/q.locationSize,he,pe,J*Y,J/q.locationSize*ne*Y,de)}}else if(A!==void 0){let pe=A[V];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(q.location,pe);break;case 3:i.vertexAttrib3fv(q.location,pe);break;case 4:i.vertexAttrib4fv(q.location,pe);break;default:i.vertexAttrib1fv(q.location,pe)}}}}S()}function C(){x();for(let R in n){let N=n[R];for(let z in N){let k=N[z];for(let B in k){let F=k[B];for(let A in F)d(F[A].object),delete F[A];delete k[B]}}delete n[R]}}function E(R){if(n[R.id]===void 0)return;let N=n[R.id];for(let z in N){let k=N[z];for(let B in k){let F=k[B];for(let A in F)d(F[A].object),delete F[A];delete k[B]}}delete n[R.id]}function I(R){for(let N in n){let z=n[N];for(let k in z){let B=z[k];if(B[R.id]===void 0)continue;let F=B[R.id];for(let A in F)d(F[A].object),delete F[A];delete B[R.id]}}}function b(R){for(let N in n){let z=n[N],k=R.isInstancedMesh===!0?R.id:0,B=z[k];if(B!==void 0){for(let F in B){let A=B[F];for(let V in A)d(A[V].object),delete A[V];delete B[F]}delete z[k],Object.keys(z).length===0&&delete n[N]}}}function x(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function u1(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let p=0;for(let g=0;g<u;g++)p+=d[g];t.update(p,n,1)}function l(c,d,u,h){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let y=0;y<u;y++)g+=d[y]*h[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function f1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Dn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let b=I===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==bn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xn&&!b)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:C,samples:E}}function p1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new gn,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||n!==0||r;return r=h,n=u.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{let S=s?0:n,M=S*4,v=f.clippingState||null;l.value=v,v=d(g,h,M,p);for(let C=0;C!==M;++C)v[C]=t[C];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==y;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Ki=4,Zu=[.125,.215,.35,.446,.526,.582],Ir=20,m1=256,Io=new ms,Ju=new st,Fd=null,zd=0,Od=0,Bd=!1,g1=new D,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=g1}=s;Fd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fd,zd,Od),this._renderer.xr.enabled=Bd,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ui,format:Dn,colorSpace:mr,depthBuffer:!1},r=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(s)),this._blurMaterial=x1(s,e,t),this._ggxMaterial=_1(s,e,t)}return r}_compileMaterial(e){let t=new lt(new mt,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,r,s){let l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Ju),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new on,new ci({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,f=!0):(m.color.copy(Ju),f=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));let C=this._cubeSize;vs(r,v*C,M>2?C:0,C,C),u.setRenderTarget(r),f&&u.render(y,l),u.render(e,l)}u.toneMapping=p,u.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Zi||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,p=u*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Ki?n-g+Ki:0),f=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,vs(s,m,f,3*y,2*y),r.setRenderTarget(s),r.render(a,Io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,vs(e,m,f,3*y,2*y),r.setRenderTarget(e),r.render(a,Io)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let d=3,u=this._lodMeshes[r];u.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),y=s/g,m=isFinite(s)?1+Math.floor(d*y):Ir;m>Ir&&Ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);let f=[],S=0;for(let I=0;I<Ir;++I){let b=I/y,x=Math.exp(-b*b/2);f.push(x),I===0?S+=x:I<m&&(S+=2*x)}for(let I=0;I<f.length;I++)f[I]=f[I]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let v=this._sizeLods[r],C=3*v*(r>M-Ki?r-M+Ki:0),E=4*(this._cubeSize-v);vs(t,C,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Io)}};function b1(i){let e=[],t=[],n=[],r=i,s=i-Ki+1+Zu.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ki?l=Zu[o-i+Ki-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],p=6,g=6,y=3,m=2,f=1,S=new Float32Array(y*g*p),M=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let E=0;E<p;E++){let I=E%3*2/3-1,b=E>2?0:-1,x=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];S.set(x,y*g*E),M.set(h,m*g*E);let L=[E,E,E,E,E,E];v.set(L,f*g*E)}let C=new mt;C.setAttribute("position",new Yt(S,y)),C.setAttribute("uv",new Yt(M,m)),C.setAttribute("faceIndex",new Yt(v,f)),n.push(new lt(C,null)),r>Ki&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function $u(i,e,t){let n=new Mn(i,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _1(i,e,t){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function x1(i,e,t){let n=new Float32Array(Ir),r=new D(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ku(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Qu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}var rc=class extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ro(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new on(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:hi});s.uniforms.tEquirect.value=t;let o=new lt(r,s),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=jt),new dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function y1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===ul||p===fl)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new rc(g.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===ul||p===fl,y=p===Zi||p===Tr;if(g||y){let m=t.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ic(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new ic(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,p){return p===ul?h.mapping=Zi:p===fl&&(h.mapping=Tr),h}function l(h){let p=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(h){let p=h.target;p.removeEventListener("dispose",d);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function v1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ks("WebGLRenderer: "+n+" extension not supported."),r}}}function M1(i,e,t,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(u){let h=[],p=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(p!==null){let S=p.array;y=p.version;for(let M=0,v=S.length;M<v;M+=3){let C=S[M+0],E=S[M+1],I=S[M+2];h.push(C,E,E,I,I,C)}}else{let S=g.array;y=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){let C=M+0,E=M+1,I=M+2;h.push(C,E,E,I,I,C)}}let m=new(g.count>=65535?no:to)(h,1);m.version=y;let f=s.get(u);f&&e.remove(f),s.set(u,m)}function d(u){let h=s.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function S1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*o,g),t.update(p,n,g))}function d(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(h,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,y,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*y[S];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function w1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function E1(i,e,t){let n=new WeakMap,r=new At;function s(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*C*4*u),I=new Qs(E,v,C,u);I.type=Xn,I.needsUpdate=!0;let b=M*4;for(let L=0;L<u;L++){let R=m[L],N=f[L],z=S[L],k=v*C*4*L;for(let B=0;B<R.count;B++){let F=B*b;p===!0&&(r.fromBufferAttribute(R,B),E[k+F+0]=r.x,E[k+F+1]=r.y,E[k+F+2]=r.z,E[k+F+3]=0),g===!0&&(r.fromBufferAttribute(N,B),E[k+F+4]=r.x,E[k+F+5]=r.y,E[k+F+6]=r.z,E[k+F+7]=0),y===!0&&(r.fromBufferAttribute(z,B),E[k+F+8]=r.x,E[k+F+9]=r.y,E[k+F+10]=r.z,E[k+F+11]=z.itemSize===4?r.w:1)}}h={count:u,texture:I,size:new ge(v,C)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function T1(i,e,t,n,r){let s=new WeakMap;function o(c){let d=r.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==d&&(e.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return h}function a(){s=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var A1={[pd]:"LINEAR_TONE_MAPPING",[md]:"REINHARD_TONE_MAPPING",[gd]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[_d]:"AGX_TONE_MAPPING",[xd]:"NEUTRAL_TONE_MAPPING",[bd]:"CUSTOM_TONE_MAPPING"};function R1(i,e,t,n,r){let s=new Mn(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Mn(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),a=new mt;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));let l=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new lt(a,l),d=new ms(-1,1,1,-1,0,1),u=null,h=null,p=!1,g,y=null,m=[],f=!1;this.setSize=function(S,M){s.setSize(S,M),o.setSize(S,M);for(let v=0;v<m.length;v++){let C=m[v];C.setSize&&C.setSize(S,M)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;let M=s.width,v=s.height;for(let C=0;C<m.length;C++){let E=m[C];E.setSize&&E.setSize(M,v)}},this.begin=function(S,M){if(p||S.toneMapping===Gn&&m.length===0)return!1;if(y=M,M!==null){let v=M.width,C=M.height;(s.width!==v||s.height!==C)&&this.setSize(v,C)}return f===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=Gn,!0},this.hasRenderPass=function(){return f},this.end=function(S,M){S.toneMapping=g,p=!0;let v=s,C=o;for(let E=0;E<m.length;E++){let I=m[E];if(I.enabled!==!1&&(I.render(S,C,v,M),I.needsSwap!==!1)){let b=v;v=C,C=b}}if(u!==S.outputColorSpace||h!==S.toneMapping){u=S.outputColorSpace,h=S.toneMapping,l.defines={},dt.getTransfer(u)===pt&&(l.defines.SRGB_TRANSFER="");let E=A1[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(y),S.render(c,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var xf=new hn,Hd=new Hi(1,1),yf=new Qs,vf=new Va,Mf=new ro,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ef[r];if(s===void 0&&(s=new Float32Array(r),ef[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function L1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),kt(t,n)}}function N1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),kt(t,n)}}function U1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;nf.set(n),i.uniformMatrix4fv(this.addr,!1,nf),kt(t,n)}}function F1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function O1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function B1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function k1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function H1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function G1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function W1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Hd.compareFunction=t.isReversedDepthBuffer()?ec:Ql,s=Hd):s=xf,t.setTexture2D(e||s,r)}function X1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vf,r)}function q1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Mf,r)}function Y1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yf,r)}function j1(i){switch(i){case 5126:return C1;case 35664:return P1;case 35665:return I1;case 35666:return D1;case 35674:return L1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return z1;case 35668:case 35672:return O1;case 35669:case 35673:return B1;case 5125:return k1;case 36294:return V1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function Z1(i,e){i.uniform1fv(this.addr,e)}function J1(i,e){let t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function $1(i,e){let t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function K1(i,e){let t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Q1(i,e){let t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eb(i,e){let t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tb(i,e){let t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nb(i,e){i.uniform1iv(this.addr,e)}function ib(i,e){i.uniform2iv(this.addr,e)}function rb(i,e){i.uniform3iv(this.addr,e)}function sb(i,e){i.uniform4iv(this.addr,e)}function ob(i,e){i.uniform1uiv(this.addr,e)}function ab(i,e){i.uniform2uiv(this.addr,e)}function lb(i,e){i.uniform3uiv(this.addr,e)}function cb(i,e){i.uniform4uiv(this.addr,e)}function db(i,e,t){let n=this.cache,r=e.length,s=ac(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Hd:o=xf;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function hb(i,e,t){let n=this.cache,r=e.length,s=ac(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vf,s[o])}function ub(i,e,t){let n=this.cache,r=e.length,s=ac(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Mf,s[o])}function fb(i,e,t){let n=this.cache,r=e.length,s=ac(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yf,s[o])}function pb(i){switch(i){case 5126:return Z1;case 35664:return J1;case 35665:return $1;case 35666:return K1;case 35674:return Q1;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return fb}}var Gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j1(t.type)}},Wd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pb(t.type)}},Xd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},kd=/(\w+)(\])?(\[|\.)?/g;function of(i,e){i.seq.push(e),i.map[e.id]=e}function mb(i,e,t){let n=i.name,r=n.length;for(kd.lastIndex=0;;){let s=kd.exec(n),o=kd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){of(t,c===void 0?new Gd(a,i,e):new Wd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Xd(a),of(t,u)),t=u}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function af(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gb=37297,bb=0;function _b(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var lf=new et;function xb(i){dt._getMatrix(lf,dt.workingColorSpace,i);let e=`mat3( ${lf.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Zs:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_b(i.getShaderSource(e),a)}else return s}function yb(i,e){let t=xb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vb={[pd]:"Linear",[md]:"Reinhard",[gd]:"Cineon",[wo]:"ACESFilmic",[_d]:"AgX",[xd]:"Neutral",[bd]:"Custom"};function Mb(i,e){let t=vb[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nc=new D;function Sb(){dt.getLuminanceCoefficients(nc);let i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Eb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function df(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(i){return i.replace(Ab,Cb)}var Rb=new Map;function Cb(i,e){let t=nt[e];if(t===void 0){let n=Rb.get(e);if(n!==void 0)t=nt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}var Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(i){return i.replace(Pb,Ib)}function Ib(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ff(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Db={[So]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Lb(i){return Db[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nb={[Zi]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[Eo]:"ENVMAP_TYPE_CUBE_UV"};function Ub(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fb={[Tr]:"ENVMAP_MODE_REFRACTION"};function zb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ob={[fd]:"ENVMAP_BLENDING_MULTIPLY",[Tu]:"ENVMAP_BLENDING_MIX",[Au]:"ENVMAP_BLENDING_ADD"};function Bb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ob[i.combine]||"ENVMAP_BLENDING_NONE"}function kb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Lb(t),c=Ub(t),d=zb(t),u=Bb(t),h=kb(t),p=wb(t),g=Eb(s),y=r.createProgram(),m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),f.length>0&&(f+=`
`)):(m=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),f=[ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,yb("linearToOutputTexel",t.outputColorSpace),Sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=qd(o),o=df(o,t),o=hf(o,t),a=qd(a),a=df(a,t),a=hf(a,t),o=uf(o),a=uf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=S+m+o,v=S+f+a,C=af(r,r.VERTEX_SHADER,M),E=af(r,r.FRAGMENT_SHADER,v);r.attachShader(y,C),r.attachShader(y,E),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function I(R){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(E)||"",B=N.trim(),F=z.trim(),A=k.trim(),V=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,C,E);else{let ue=cf(r,C,"vertex"),pe=cf(r,E,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ue+`
`+pe)}else B!==""?Ye("WebGLProgram: Program Info Log:",B):(F===""||A==="")&&(q=!1);q&&(R.diagnostics={runnable:V,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:A,prefix:f}})}r.deleteShader(C),r.deleteShader(E),b=new Ms(r,y),x=Tb(r,y)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,gb)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=E,this}var Hb=0,Yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jd(e),t.set(e,n)),n}},jd=class{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}};function Gb(i,e,t,n,r,s){let o=new ls,a=new Yd,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function y(b,x,L,R,N){let z=R.fog,k=N.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,A=e.get(b.envMap||B,F),V=A&&A.mapping===Eo?A.image.height:null,q=p[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ye("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let ue=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=ue!==void 0?ue.length:0,J=0;k.morphAttributes.position!==void 0&&(J=1),k.morphAttributes.normal!==void 0&&(J=2),k.morphAttributes.color!==void 0&&(J=3);let ee,we,he,Y;if(q){let Ge=pi[q];ee=Ge.vertexShader,we=Ge.fragmentShader}else ee=b.vertexShader,we=b.fragmentShader,a.update(b),he=a.getVertexShaderID(b),Y=a.getFragmentShaderID(b);let de=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),De=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,ze=!!b.map,Je=!!b.matcap,Be=!!A,te=!!b.aoMap,ae=!!b.lightMap,oe=!!b.bumpMap,Me=!!b.normalMap,P=!!b.displacementMap,He=!!b.emissiveMap,Re=!!b.metalnessMap,Oe=!!b.roughnessMap,xe=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,O=b.iridescence>0,Q=b.sheen>0,fe=b.transmission>0,$=xe&&!!b.anisotropyMap,Ne=T&&!!b.clearcoatMap,ye=T&&!!b.clearcoatNormalMap,le=T&&!!b.clearcoatRoughnessMap,be=O&&!!b.iridescenceMap,se=O&&!!b.iridescenceThicknessMap,re=Q&&!!b.sheenColorMap,Se=Q&&!!b.sheenRoughnessMap,ve=!!b.specularMap,_e=!!b.specularColorMap,Ue=!!b.specularIntensityMap,U=fe&&!!b.transmissionMap,W=fe&&!!b.thicknessMap,G=!!b.gradientMap,ce=!!b.alphaMap,ie=b.alphaTest>0,X=!!b.alphaHash,me=!!b.extensions,Te=Gn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Te=i.toneMapping);let $e={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:ee,fragmentShader:we,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:De,instancingColor:De&&N.instanceColor!==null,instancingMorph:De&&N.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:mr,alphaToCoverage:!!b.alphaToCoverage,map:ze,matcap:Je,envMap:Be,envMapMode:Be&&A.mapping,envMapCubeUVHeight:V,aoMap:te,lightMap:ae,bumpMap:oe,normalMap:Me,displacementMap:P,emissiveMap:He,normalMapObjectSpace:Me&&b.normalMapType===Pu,normalMapTangentSpace:Me&&b.normalMapType===Rd,metalnessMap:Re,roughnessMap:Oe,anisotropy:xe,anisotropyMap:$,clearcoat:T,clearcoatMap:Ne,clearcoatNormalMap:ye,clearcoatRoughnessMap:le,dispersion:_,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:_e,specularIntensityMap:Ue,transmission:fe,transmissionMap:U,thicknessMap:W,gradientMap:G,opaque:b.transparent===!1&&b.blending===fr&&b.alphaToCoverage===!1,alphaMap:ce,alphaTest:ie,alphaHash:X,combine:b.combine,mapUv:ze&&g(b.map.channel),aoMapUv:te&&g(b.aoMap.channel),lightMapUv:ae&&g(b.lightMap.channel),bumpMapUv:oe&&g(b.bumpMap.channel),normalMapUv:Me&&g(b.normalMap.channel),displacementMapUv:P&&g(b.displacementMap.channel),emissiveMapUv:He&&g(b.emissiveMap.channel),metalnessMapUv:Re&&g(b.metalnessMap.channel),roughnessMapUv:Oe&&g(b.roughnessMap.channel),anisotropyMapUv:$&&g(b.anisotropyMap.channel),clearcoatMapUv:Ne&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(b.sheenRoughnessMap.channel),specularMapUv:ve&&g(b.specularMap.channel),specularColorMapUv:_e&&g(b.specularColorMap.channel),specularIntensityMapUv:Ue&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:W&&g(b.thicknessMap.channel),alphaMapUv:ce&&g(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Me||xe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(ze||ce),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||k.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:J,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:He&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dt,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:me&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&b.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function m(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)x.push(L),x.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(f(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function f(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),b.push(o.mask)}function M(b){let x=p[b.type],L;if(x){let R=pi[x];L=Yu.clone(R.uniforms)}else L=b.uniforms;return L}function v(b,x){let L=d.get(x);return L!==void 0?++L.usedTimes:(L=new Vb(i,x,b,r),c.push(L),d.set(x,L)),L}function C(b){if(--b.usedTimes===0){let x=c.indexOf(b);c[x]=c[c.length-1],c.pop(),d.delete(b.cacheKey),b.destroy()}}function E(b){a.remove(b)}function I(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:I}}function Wb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,y,m,f){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.materialVariant=o(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=f),e++,S}function l(h,p,g,y,m,f){let S=a(h,p,g,y,m,f);g.transmission>0?n.push(S):g.transparent===!0?r.push(S):t.push(S)}function c(h,p,g,y,m,f){let S=a(h,p,g,y,m,f);g.transmission>0?n.unshift(S):g.transparent===!0?r.unshift(S):t.unshift(S)}function d(h,p){t.length>1&&t.sort(h||Xb),n.length>1&&n.sort(p||pf),r.length>1&&r.sort(p||pf)}function u(){for(let h=e,p=i.length;h<p;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function qb(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new mf,i.set(n,[o])):r>=s.length?(o=new mf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new st};break;case"SpotLight":t={position:new D,direction:new D,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function jb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zb=0;function Jb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $b(i){let e=new Yb,t=jb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let r=new D,s=new rt,o=new rt;function a(c){let d=0,u=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,S=0,M=0,v=0,C=0,E=0,I=0;c.sort(Jb);for(let x=0,L=c.length;x<L;x++){let R=c[x],N=R.color,z=R.intensity,k=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ar?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=N.r*z,u+=N.g*z,h+=N.b*z;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],z);I++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let A=R.shadow,V=t.get(R);V.shadowIntensity=A.intensity,V.shadowBias=A.bias,V.shadowNormalBias=A.normalBias,V.shadowRadius=A.radius,V.shadowMapSize=A.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=F,p++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(N).multiplyScalar(z),F.distance=k,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[y]=F;let A=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,A.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[y]=A.matrix,R.castShadow){let V=t.get(R);V.shadowIntensity=A.intensity,V.shadowBias=A.bias,V.shadowNormalBias=A.normalBias,V.shadowRadius=A.radius,V.shadowMapSize=A.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=B,v++}y++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy(N).multiplyScalar(z),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=F,m++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let A=R.shadow,V=t.get(R);V.shadowIntensity=A.intensity,V.shadowBias=A.bias,V.shadowNormalBias=A.normalBias,V.shadowRadius=A.radius,V.shadowMapSize=A.mapSize,V.shadowCameraNear=A.camera.near,V.shadowCameraFar=A.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=F,g++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(z),F.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[f]=F,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let b=n.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==y||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==S||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==C||b.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,b.directionalLength=p,b.pointLength=g,b.spotLength=y,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=S,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=C,b.numLightProbes=I,n.version=Zb++)}function l(c,d){let u=0,h=0,p=0,g=0,y=0,m=d.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let M=c[f];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(M.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function gf(i){let e=new $b(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Kb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new gf(i),e.set(r,[a])):s>=o.length?(a=new gf(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e_=`uniform sampler2D shadow_pass;
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
}`,t_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],n_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],bf=new rt,Do=new D,Vd=new D;function i_(i,e,t){let n=new hs,r=new ge,s=new ge,o=new At,a=new Ka,l=new Qa,c={},d=t.maxTextureSize,u={[wi]:fn,[fn]:wi,[Dt]:Dt},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Qb,fragmentShader:e_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new mt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let f=this.type;this.render=function(E,I,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===au&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=So);let x=i.getRenderTarget(),L=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=f!==this.type;z&&I.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(B=>B.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,B=E.length;k<B;k++){let F=E[k],A=F.shadow;if(A===void 0){Ye("WebGLShadowMap:",F,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);let V=A.getFrameExtents();r.multiply(V),s.copy(A.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/V.x),r.x=s.x*V.x,A.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/V.y),r.y=s.y*V.y,A.mapSize.y=s.y));let q=i.state.buffers.depth.getReversed();if(A.camera._reversedDepth=q,A.map===null||z===!0){if(A.map!==null&&(A.map.depthTexture!==null&&(A.map.depthTexture.dispose(),A.map.depthTexture=null),A.map.dispose()),this.type===_s){if(F.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}A.map=new Mn(r.x,r.y,{format:Ar,type:ui,minFilter:jt,magFilter:jt,generateMipmaps:!1}),A.map.texture.name=F.name+".shadowMap",A.map.depthTexture=new Hi(r.x,r.y,Xn),A.map.depthTexture.name=F.name+".shadowMapDepth",A.map.depthTexture.format=oi,A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=Wt,A.map.depthTexture.magFilter=Wt}else F.isPointLight?(A.map=new rc(r.x),A.map.depthTexture=new Xa(r.x,Wn)):(A.map=new Mn(r.x,r.y),A.map.depthTexture=new Hi(r.x,r.y,Wn)),A.map.depthTexture.name=F.name+".shadowMap",A.map.depthTexture.format=oi,this.type===So?(A.map.depthTexture.compareFunction=q?ec:Ql,A.map.depthTexture.minFilter=jt,A.map.depthTexture.magFilter=jt):(A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=Wt,A.map.depthTexture.magFilter=Wt);A.camera.updateProjectionMatrix()}let ue=A.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<ue;pe++){if(A.map.isWebGLCubeRenderTarget)i.setRenderTarget(A.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(A.map),i.clear());let J=A.getViewport(pe);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),N.viewport(o)}if(F.isPointLight){let J=A.camera,ee=A.matrix,we=F.distance||J.far;we!==J.far&&(J.far=we,J.updateProjectionMatrix()),Do.setFromMatrixPosition(F.matrixWorld),J.position.copy(Do),Vd.copy(J.position),Vd.add(t_[pe]),J.up.copy(n_[pe]),J.lookAt(Vd),J.updateMatrixWorld(),ee.makeTranslation(-Do.x,-Do.y,-Do.z),bf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),A._frustum.setFromProjectionMatrix(bf,J.coordinateSystem,J.reversedDepth)}else A.updateMatrices(F);n=A.getFrustum(),v(I,b,A.camera,F,this.type)}A.isPointLightShadow!==!0&&this.type===_s&&S(A,b),A.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,L,R)};function S(E,I){let b=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Mn(r.x,r.y,{format:Ar,type:ui})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,b,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,b,p,y,null)}function M(E,I,b,x){let L=null,R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)L=R;else if(L=b.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let N=L.uuid,z=I.uuid,k=c[N];k===void 0&&(k={},c[N]=k);let B=k[z];B===void 0&&(B=L.clone(),k[z]=B,I.addEventListener("dispose",C)),L=B}if(L.visible=I.visible,L.wireframe=I.wireframe,x===_s?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:u[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let N=i.properties.get(L);N.light=b}return L}function v(E,I,b,x,L){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===_s)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let z=e.update(E),k=E.material;if(Array.isArray(k)){let B=z.groups;for(let F=0,A=B.length;F<A;F++){let V=B[F],q=k[V.materialIndex];if(q&&q.visible){let ue=M(E,q,x,L);E.onBeforeShadow(i,E,I,b,z,ue,V),i.renderBufferDirect(b,null,z,ue,E,V),E.onAfterShadow(i,E,I,b,z,ue,V)}}}else if(k.visible){let B=M(E,k,x,L);E.onBeforeShadow(i,E,I,b,z,B,null),i.renderBufferDirect(b,null,z,B,E,null),E.onAfterShadow(i,E,I,b,z,B,null)}}let N=E.children;for(let z=0,k=N.length;z<k;z++)v(N[z],I,b,x,L)}function C(E){E.target.removeEventListener("dispose",C);for(let b in c){let x=c[b],L=E.target.uuid;L in x&&(x[L].dispose(),delete x[L])}}}function r_(i,e){function t(){let U=!1,W=new At,G=null,ce=new At(0,0,0,0);return{setMask:function(ie){G!==ie&&!U&&(i.colorMask(ie,ie,ie,ie),G=ie)},setLocked:function(ie){U=ie},setClear:function(ie,X,me,Te,$e){$e===!0&&(ie*=Te,X*=Te,me*=Te),W.set(ie,X,me,Te),ce.equals(W)===!1&&(i.clearColor(ie,X,me,Te),ce.copy(W))},reset:function(){U=!1,G=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,W=!1,G=null,ce=null,ie=null;return{setReversed:function(X){if(W!==X){let me=e.get("EXT_clip_control");X?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),W=X;let Te=ie;ie=null,this.setClear(Te)}},getReversed:function(){return W},setTest:function(X){X?de(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(X){G!==X&&!U&&(i.depthMask(X),G=X)},setFunc:function(X){if(W&&(X=ku[X]),ce!==X){switch(X){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=X}},setLocked:function(X){U=X},setClear:function(X){ie!==X&&(ie=X,W&&(X=1-X),i.clearDepth(X))},reset:function(){U=!1,G=null,ce=null,ie=null,W=!1}}}function r(){let U=!1,W=null,G=null,ce=null,ie=null,X=null,me=null,Te=null,$e=null;return{setTest:function(Ge){U||(Ge?de(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(Ge){W!==Ge&&!U&&(i.stencilMask(Ge),W=Ge)},setFunc:function(Ge,cn,en){(G!==Ge||ce!==cn||ie!==en)&&(i.stencilFunc(Ge,cn,en),G=Ge,ce=cn,ie=en)},setOp:function(Ge,cn,en){(X!==Ge||me!==cn||Te!==en)&&(i.stencilOp(Ge,cn,en),X=Ge,me=cn,Te=en)},setLocked:function(Ge){U=Ge},setClear:function(Ge){$e!==Ge&&(i.clearStencil(Ge),$e=Ge)},reset:function(){U=!1,W=null,G=null,ce=null,ie=null,X=null,me=null,Te=null,$e=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,M=null,v=null,C=null,E=null,I=new st(0,0,0),b=0,x=!1,L=null,R=null,N=null,z=null,k=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,A=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=A>=1):V.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=A>=2);let q=null,ue={},pe=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),ee=new At().fromArray(pe),we=new At().fromArray(J);function he(U,W,G,ce){let ie=new Uint8Array(4),X=i.createTexture();i.bindTexture(U,X),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<G;me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(W+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return X}let Y={};Y[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(pr),oe(!1),Me(cd),de(i.CULL_FACE),te(hi);function de(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function ne(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function De(U,W){return u[U]!==W?(i.bindFramebuffer(U,W),u[U]=W,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=W),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=W),!0):!1}function Le(U,W){let G=p,ce=!1;if(U){G=h.get(W),G===void 0&&(G=[],h.set(W,G));let ie=U.textures;if(G.length!==ie.length||G[0]!==i.COLOR_ATTACHMENT0){for(let X=0,me=ie.length;X<me;X++)G[X]=i.COLOR_ATTACHMENT0+X;G.length=ie.length,ce=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,ce=!0);ce&&i.drawBuffers(G)}function ze(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Je={[Bi]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[du]:i.FUNC_REVERSE_SUBTRACT};Je[hu]=i.MIN,Je[uu]=i.MAX;let Be={[fu]:i.ZERO,[pu]:i.ONE,[mu]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[gu]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(U,W,G,ce,ie,X,me,Te,$e,Ge){if(U===hi){y===!0&&(ne(i.BLEND),y=!1);return}if(y===!1&&(de(i.BLEND),y=!0),U!==lu){if(U!==m||Ge!==x){if((f!==Bi||v!==Bi)&&(i.blendEquation(i.FUNC_ADD),f=Bi,v=Bi),Ge)switch(U){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.ONE,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ud:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",U);break}else switch(U){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hd:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ud:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",U);break}S=null,M=null,C=null,E=null,I.set(0,0,0),b=0,m=U,x=Ge}return}ie=ie||W,X=X||G,me=me||ce,(W!==f||ie!==v)&&(i.blendEquationSeparate(Je[W],Je[ie]),f=W,v=ie),(G!==S||ce!==M||X!==C||me!==E)&&(i.blendFuncSeparate(Be[G],Be[ce],Be[X],Be[me]),S=G,M=ce,C=X,E=me),(Te.equals(I)===!1||$e!==b)&&(i.blendColor(Te.r,Te.g,Te.b,$e),I.copy(Te),b=$e),m=U,x=!1}function ae(U,W){U.side===Dt?ne(i.CULL_FACE):de(i.CULL_FACE);let G=U.side===fn;W&&(G=!G),oe(G),U.blending===fr&&U.transparent===!1?te(hi):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let ce=U.stencilWrite;a.setTest(ce),ce&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function Me(U){U!==su?(de(i.CULL_FACE),U!==R&&(U===cd?i.cullFace(i.BACK):U===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),R=U}function P(U){U!==N&&(F&&i.lineWidth(U),N=U)}function He(U,W,G){U?(de(i.POLYGON_OFFSET_FILL),(z!==W||k!==G)&&(z=W,k=G,o.getReversed()&&(W=-W),i.polygonOffset(W,G))):ne(i.POLYGON_OFFSET_FILL)}function Re(U){U?de(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function Oe(U){U===void 0&&(U=i.TEXTURE0+B-1),q!==U&&(i.activeTexture(U),q=U)}function xe(U,W,G){G===void 0&&(q===null?G=i.TEXTURE0+B-1:G=q);let ce=ue[G];ce===void 0&&(ce={type:void 0,texture:void 0},ue[G]=ce),(ce.type!==U||ce.texture!==W)&&(q!==G&&(i.activeTexture(G),q=G),i.bindTexture(U,W||Y[U]),ce.type=U,ce.texture=W)}function T(){let U=ue[q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function Q(){try{i.texSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function fe(){try{i.texSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function ye(){try{i.texStorage2D(...arguments)}catch(U){je("WebGLState:",U)}}function le(){try{i.texStorage3D(...arguments)}catch(U){je("WebGLState:",U)}}function be(){try{i.texImage2D(...arguments)}catch(U){je("WebGLState:",U)}}function se(){try{i.texImage3D(...arguments)}catch(U){je("WebGLState:",U)}}function re(U){ee.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Se(U){we.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),we.copy(U))}function ve(U,W){let G=c.get(W);G===void 0&&(G=new WeakMap,c.set(W,G));let ce=G.get(U);ce===void 0&&(ce=i.getUniformBlockIndex(W,U.name),G.set(U,ce))}function _e(U,W){let ce=c.get(W).get(U);l.get(W)!==ce&&(i.uniformBlockBinding(W,ce,U.__bindingPointIndex),l.set(W,ce))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},q=null,ue={},u={},h=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,M=null,v=null,C=null,E=null,I=new st(0,0,0),b=0,x=!1,L=null,R=null,N=null,z=null,k=null,ee.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:ne,bindFramebuffer:De,drawBuffers:Le,useProgram:ze,setBlending:te,setMaterial:ae,setFlipSided:oe,setCullFace:Me,setLineWidth:P,setPolygonOffset:He,setScissorTest:Re,activeTexture:Oe,bindTexture:xe,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:be,texImage3D:se,updateUBOMapping:ve,uniformBlockBinding:_e,texStorage2D:ye,texStorage3D:le,texSubImage2D:Q,texSubImage3D:fe,compressedTexSubImage2D:$,compressedTexSubImage3D:Ne,scissor:re,viewport:Se,reset:Ue}}function s_(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,d=new WeakMap,u,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Js("canvas")}function y(T,_,O){let Q=1,fe=xe(T);if((fe.width>O||fe.height>O)&&(Q=O/Math.max(fe.width,fe.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(Q*fe.width),Ne=Math.floor(Q*fe.height);u===void 0&&(u=g($,Ne));let ye=_?g($,Ne):u;return ye.width=$,ye.height=Ne,ye.getContext("2d").drawImage(T,0,0,$,Ne),Ye("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+$+"x"+Ne+")."),ye}else return"data"in T&&Ye("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,O,Q,fe=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){let Ne=fe?Zs:dt.getTransfer(Q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Ne===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(T,_){let O;return T?_===null||_===Wn||_===ys?O=i.DEPTH24_STENCIL8:_===Xn?O=i.DEPTH32F_STENCIL8:_===xs&&(O=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===ys?O=i.DEPTH_COMPONENT24:_===Xn?O=i.DEPTH_COMPONENT32F:_===xs&&(O=i.DEPTH_COMPONENT16),O}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function E(T){let _=T.target;_.removeEventListener("dispose",E),b(_),_.isVideoTexture&&d.delete(_)}function I(T){let _=T.target;_.removeEventListener("dispose",I),L(_)}function b(T){let _=n.get(T);if(_.__webglInit===void 0)return;let O=T.source,Q=h.get(O);if(Q){let fe=Q[_.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&x(T),Object.keys(Q).length===0&&h.delete(O)}n.remove(T)}function x(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let O=T.source,Q=h.get(O);delete Q[_.__cacheKey],o.memory.textures--}function L(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let fe=0;fe<_.__webglFramebuffer[Q].length;fe++)i.deleteFramebuffer(_.__webglFramebuffer[Q][fe]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=T.textures;for(let Q=0,fe=O.length;Q<fe;Q++){let $=n.get(O[Q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[Q])}n.remove(T)}let R=0;function N(){R=0}function z(){let T=R;return T>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function k(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function B(T,_){let O=n.get(T);if(T.isVideoTexture&&Re(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let Q=T.image;if(Q===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,_);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function F(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,_);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function A(T,_){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function V(T,_){let O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){de(O,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let q={[Ua]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},ue={[Wt]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[pl]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},pe={[Iu]:i.NEVER,[Fu]:i.ALWAYS,[Du]:i.LESS,[Ql]:i.LEQUAL,[Lu]:i.EQUAL,[ec]:i.GEQUAL,[Nu]:i.GREATER,[Uu]:i.NOTEQUAL};function J(T,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===pl||_.magFilter===To||_.magFilter===Ji||_.minFilter===jt||_.minFilter===pl||_.minFilter===To||_.minFilter===Ji)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,q[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,q[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,q[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==To&&_.minFilter!==Ji||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",E));let Q=_.source,fe=h.get(Q);fe===void 0&&(fe={},h.set(Q,fe));let $=k(_);if($!==T.__cacheKey){fe[$]===void 0&&(fe[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),fe[$].usedTimes++;let Ne=fe[T.__cacheKey];Ne!==void 0&&(fe[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(_)),T.__cacheKey=$,T.__webglTexture=fe[$].texture}return O}function we(T,_,O){return Math.floor(Math.floor(T/O)/_)}function he(T,_,O,Q){let $=T.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,Q,_.data);else{$.sort((se,re)=>se.start-re.start);let Ne=0;for(let se=1;se<$.length;se++){let re=$[Ne],Se=$[se],ve=re.start+re.count,_e=we(Se.start,_.width,4),Ue=we(re.start,_.width,4);Se.start<=ve+1&&_e===Ue&&we(Se.start+Se.count-1,_.width,4)===_e?re.count=Math.max(re.count,Se.start+Se.count-re.start):(++Ne,$[Ne]=Se)}$.length=Ne+1;let ye=i.getParameter(i.UNPACK_ROW_LENGTH),le=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let se=0,re=$.length;se<re;se++){let Se=$[se],ve=Math.floor(Se.start/4),_e=Math.ceil(Se.count/4),Ue=ve%_.width,U=Math.floor(ve/_.width),W=_e,G=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ue,U,W,G,O,Q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,le),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Y(T,_,O){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);let fe=ee(T,_),$=_.source;t.bindTexture(Q,T.__webglTexture,i.TEXTURE0+O);let Ne=n.get($);if($.version!==Ne.__version||fe===!0){t.activeTexture(i.TEXTURE0+O);let ye=dt.getPrimaries(dt.workingColorSpace),le=_.colorSpace===Ti?null:dt.getPrimaries(_.colorSpace),be=_.colorSpace===Ti||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=y(_.image,!1,r.maxTextureSize);se=Oe(_,se);let re=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),ve=M(_.internalFormat,re,Se,_.colorSpace,_.isVideoTexture);J(Q,_);let _e,Ue=_.mipmaps,U=_.isVideoTexture!==!0,W=Ne.__version===void 0||fe===!0,G=$.dataReady,ce=C(_,se);if(_.isDepthTexture)ve=v(_.format===$i,_.type),W&&(U?t.texStorage2D(i.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,re,Se,null));else if(_.isDataTexture)if(Ue.length>0){U&&W&&t.texStorage2D(i.TEXTURE_2D,ce,ve,Ue[0].width,Ue[0].height);for(let ie=0,X=Ue.length;ie<X;ie++)_e=Ue[ie],U?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,re,Se,_e.data):t.texImage2D(i.TEXTURE_2D,ie,ve,_e.width,_e.height,0,re,Se,_e.data);_.generateMipmaps=!1}else U?(W&&t.texStorage2D(i.TEXTURE_2D,ce,ve,se.width,se.height),G&&he(_,se,re,Se)):t.texImage2D(i.TEXTURE_2D,0,ve,se.width,se.height,0,re,Se,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ve,Ue[0].width,Ue[0].height,se.depth);for(let ie=0,X=Ue.length;ie<X;ie++)if(_e=Ue[ie],_.format!==Dn)if(re!==null)if(U){if(G)if(_.layerUpdates.size>0){let me=Ud(_e.width,_e.height,_.format,_.type);for(let Te of _.layerUpdates){let $e=_e.data.subarray(Te*me/_e.data.BYTES_PER_ELEMENT,(Te+1)*me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Te,_e.width,_e.height,1,re,$e)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,se.depth,re,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,ve,_e.width,_e.height,se.depth,0,_e.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,se.depth,re,Se,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,ve,_e.width,_e.height,se.depth,0,re,Se,_e.data)}else{U&&W&&t.texStorage2D(i.TEXTURE_2D,ce,ve,Ue[0].width,Ue[0].height);for(let ie=0,X=Ue.length;ie<X;ie++)_e=Ue[ie],_.format!==Dn?re!==null?U?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,re,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,ve,_e.width,_e.height,0,_e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,_e.width,_e.height,re,Se,_e.data):t.texImage2D(i.TEXTURE_2D,ie,ve,_e.width,_e.height,0,re,Se,_e.data)}else if(_.isDataArrayTexture)if(U){if(W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ve,se.width,se.height,se.depth),G)if(_.layerUpdates.size>0){let ie=Ud(se.width,se.height,_.format,_.type);for(let X of _.layerUpdates){let me=se.data.subarray(X*ie/se.data.BYTES_PER_ELEMENT,(X+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,se.width,se.height,1,re,Se,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,re,Se,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,re,Se,se.data);else if(_.isData3DTexture)U?(W&&t.texStorage3D(i.TEXTURE_3D,ce,ve,se.width,se.height,se.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,re,Se,se.data)):t.texImage3D(i.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,re,Se,se.data);else if(_.isFramebufferTexture){if(W)if(U)t.texStorage2D(i.TEXTURE_2D,ce,ve,se.width,se.height);else{let ie=se.width,X=se.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,ve,ie,X,0,re,Se,null),ie>>=1,X>>=1}}else if(Ue.length>0){if(U&&W){let ie=xe(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ce,ve,ie.width,ie.height)}for(let ie=0,X=Ue.length;ie<X;ie++)_e=Ue[ie],U?G&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,re,Se,_e):t.texImage2D(i.TEXTURE_2D,ie,ve,re,Se,_e);_.generateMipmaps=!1}else if(U){if(W){let ie=xe(se);t.texStorage2D(i.TEXTURE_2D,ce,ve,ie.width,ie.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Se,se)}else t.texImage2D(i.TEXTURE_2D,0,ve,re,Se,se);m(_)&&f(Q),Ne.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function de(T,_,O){if(_.image.length!==6)return;let Q=ee(T,_),fe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let $=n.get(fe);if(fe.version!==$.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let Ne=dt.getPrimaries(dt.workingColorSpace),ye=_.colorSpace===Ti?null:dt.getPrimaries(_.colorSpace),le=_.colorSpace===Ti||Ne===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let be=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,re=[];for(let X=0;X<6;X++)!be&&!se?re[X]=y(_.image[X],!0,r.maxCubemapSize):re[X]=se?_.image[X].image:_.image[X],re[X]=Oe(_,re[X]);let Se=re[0],ve=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),Ue=M(_.internalFormat,ve,_e,_.colorSpace),U=_.isVideoTexture!==!0,W=$.__version===void 0||Q===!0,G=fe.dataReady,ce=C(_,Se);J(i.TEXTURE_CUBE_MAP,_);let ie;if(be){U&&W&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,Se.width,Se.height);for(let X=0;X<6;X++){ie=re[X].mipmaps;for(let me=0;me<ie.length;me++){let Te=ie[me];_.format!==Dn?ve!==null?U?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Ue,Te.width,Te.height,0,Te.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,0,0,Te.width,Te.height,ve,_e,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me,Ue,Te.width,Te.height,0,ve,_e,Te.data)}}}else{if(ie=_.mipmaps,U&&W){ie.length>0&&ce++;let X=xe(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,X.width,X.height)}for(let X=0;X<6;X++)if(se){U?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,re[X].width,re[X].height,ve,_e,re[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,re[X].width,re[X].height,0,ve,_e,re[X].data);for(let me=0;me<ie.length;me++){let $e=ie[me].image[X].image;U?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,$e.width,$e.height,ve,_e,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Ue,$e.width,$e.height,0,ve,_e,$e.data)}}else{U?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,_e,re[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ue,ve,_e,re[X]);for(let me=0;me<ie.length;me++){let Te=ie[me];U?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,0,0,ve,_e,Te.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,me+1,Ue,ve,_e,Te.image[X])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),$.__version=fe.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,O,Q,fe,$){let Ne=s.convert(O.format,O.colorSpace),ye=s.convert(O.type),le=M(O.internalFormat,Ne,ye,O.colorSpace),be=n.get(_),se=n.get(O);if(se.__renderTarget=_,!be.__hasExternalTextures){let re=Math.max(1,_.width>>$),Se=Math.max(1,_.height>>$);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,$,le,re,Se,_.depth,0,Ne,ye,null):t.texImage2D(fe,$,le,re,Se,0,Ne,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,fe,se.__webglTexture,0,P(_)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,fe,se.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let Q=_.depthTexture,fe=Q&&Q.isDepthTexture?Q.type:null,$=v(_.stencilBuffer,fe),Ne=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),$,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,T)}else{let Q=_.textures;for(let fe=0;fe<Q.length;fe++){let $=Q[fe],Ne=s.convert($.format,$.colorSpace),ye=s.convert($.type),le=M($.internalFormat,Ne,ye,$.colorSpace);He(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),le,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(T,_,O){let Q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let fe=n.get(_.depthTexture);if(fe.__renderTarget=_,(!fe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),fe.__webglTexture===void 0){fe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),J(i.TEXTURE_CUBE_MAP,_.depthTexture);let be=s.convert(_.depthTexture.format),se=s.convert(_.depthTexture.type),re;_.depthTexture.format===oi?re=i.DEPTH_COMPONENT24:_.depthTexture.format===$i&&(re=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,re,_.width,_.height,0,be,se,null)}}else B(_.depthTexture,0);let $=fe.__webglTexture,Ne=P(_),ye=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,le=_.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===oi)He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ye,$,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,le,ye,$,0);else if(_.depthTexture.format===$i)He(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ye,$,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,le,ye,$,0);else throw new Error("Unknown depthTexture format")}function ze(T){let _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let fe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",fe)};Q.addEventListener("dispose",fe),_.__depthDisposeCallback=fe}_.__boundDepthTexture=Q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let Q=0;Q<6;Q++)Le(_.__webglFramebuffer[Q],T,Q);else{let Q=T.texture.mipmaps;Q&&Q.length>0?Le(_.__webglFramebuffer[0],T,0):Le(_.__webglFramebuffer,T,0)}else if(O){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),De(_.__webglDepthbuffer[Q],T,!1);else{let fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,$)}}else{let Q=T.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,T,!1);else{let fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(T,_,O){let Q=n.get(T);_!==void 0&&ne(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ze(T)}function Be(T){let _=T.texture,O=n.get(T),Q=n.get(_);T.addEventListener("dispose",I);let fe=T.textures,$=T.isWebGLCubeRenderTarget===!0,Ne=fe.length>1;if(Ne||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ye]=[];for(let le=0;le<_.mipmaps.length;le++)O.__webglFramebuffer[ye][le]=i.createFramebuffer()}else O.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ye=0;ye<_.mipmaps.length;ye++)O.__webglFramebuffer[ye]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let ye=0,le=fe.length;ye<le;ye++){let be=n.get(fe[ye]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&He(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){let le=fe[ye];O.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);let be=s.convert(le.format,le.colorSpace),se=s.convert(le.type),re=M(le.internalFormat,be,se,le.colorSpace,T.isXRRenderTarget===!0),Se=P(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),De(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),J(i.TEXTURE_CUBE_MAP,_);for(let ye=0;ye<6;ye++)if(_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)ne(O.__webglFramebuffer[ye][le],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,le);else ne(O.__webglFramebuffer[ye],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ye=0,le=fe.length;ye<le;ye++){let be=fe[ye],se=n.get(be),re=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,se.__webglTexture),J(re,be),ne(O.__webglFramebuffer,T,be,i.COLOR_ATTACHMENT0+ye,re,0),m(be)&&f(re)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Q.__webglTexture),J(ye,_),_.mipmaps&&_.mipmaps.length>0)for(let le=0;le<_.mipmaps.length;le++)ne(O.__webglFramebuffer[le],T,_,i.COLOR_ATTACHMENT0,ye,le);else ne(O.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ye,0);m(_)&&f(ye),t.unbindTexture()}T.depthBuffer&&ze(T)}function te(T){let _=T.textures;for(let O=0,Q=_.length;O<Q;O++){let fe=_[O];if(m(fe)){let $=S(T),Ne=n.get(fe).__webglTexture;t.bindTexture($,Ne),f($),t.unbindTexture()}}}let ae=[],oe=[];function Me(T){if(T.samples>0){if(He(T)===!1){let _=T.textures,O=T.width,Q=T.height,fe=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(T),ye=_.length>1;if(ye)for(let be=0;be<_.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);let le=T.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let be=0;be<_.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[be]);let se=n.get(_[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,fe,i.NEAREST),l===!0&&(ae.length=0,oe.length=0,ae.push(i.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ae.push($),oe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let be=0;be<_.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[be]);let se=n.get(_[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(r.maxSamples,T.samples)}function He(T){let _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Re(T){let _=o.render.frame;d.get(T)!==_&&(d.set(T,_),T.update())}function Oe(T,_){let O=T.colorSpace,Q=T.format,fe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==mr&&O!==Ti&&(dt.getTransfer(O)===pt?(Q!==Dn||fe!==bn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",O)),_}function xe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=A,this.setTextureCube=V,this.rebindTextures=Je,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function o_(i,e){function t(n,r=Ti){let s,o=dt.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return i.BYTE;if(n===Md)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===ml)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===Ed)return i.ALPHA;if(n===Td)return i.RGB;if(n===Dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Ad)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Ar)return i.RG;if(n===xl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Ao||n===Ro||n===Co||n===Po)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===Ml||n===Sl||n===wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===Tl)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Al)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rl)return s.COMPRESSED_R11_EAC;if(n===Cl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Pl)return s.COMPRESSED_RG11_EAC;if(n===Il)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dl||n===Ll||n===Nl||n===Ul||n===Fl||n===zl||n===Ol||n===Bl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ql||n===Yl||n===jl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ql)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Jl||n===$l||n===Kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new so(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:a_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jd=class extends ai{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new Zd,f={},S=t.getContextAttributes(),M=null,v=null,C=[],E=[],I=new ge,b=null,x=new sn;x.viewport=new At;let L=new sn;L.viewport=new At;let R=[x,L],N=new hl,z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=C[Y];return de===void 0&&(de=new cs,C[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=C[Y];return de===void 0&&(de=new cs,C[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=C[Y];return de===void 0&&(de=new cs,C[Y]=de),de.getHandSpace()};function B(Y){let de=E.indexOf(Y.inputSource);if(de===-1)return;let ne=C[de];ne!==void 0&&(ne.update(Y.inputSource,Y.frame,c||o),ne.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",A);for(let Y=0;Y<C.length;Y++){let de=E[Y];de!==null&&(E[Y]=null,C[Y].disconnect(de))}z=null,k=null,m.reset();for(let Y in f)delete f[Y];e.setRenderTarget(M),p=null,h=null,u=null,r=null,v=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",A),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,De=null,Le=null;S.depth&&(Le=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?$i:oi,De=S.stencil?ys:Wn);let ze={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(ze),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Mn(h.textureWidth,h.textureHeight,{format:Dn,type:bn,depthTexture:new Hi(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ne={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Mn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(Y){for(let de=0;de<Y.removed.length;de++){let ne=Y.removed[de],De=E.indexOf(ne);De>=0&&(E[De]=null,C[De].disconnect(ne))}for(let de=0;de<Y.added.length;de++){let ne=Y.added[de],De=E.indexOf(ne);if(De===-1){for(let ze=0;ze<C.length;ze++)if(ze>=E.length){E.push(ne),De=ze;break}else if(E[ze]===null){E[ze]=ne,De=ze;break}if(De===-1)break}let Le=C[De];Le&&Le.connect(ne)}}let V=new D,q=new D;function ue(Y,de,ne){V.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(ne.matrixWorld);let De=V.distanceTo(q),Le=de.projectionMatrix.elements,ze=ne.projectionMatrix.elements,Je=Le[14]/(Le[10]-1),Be=Le[14]/(Le[10]+1),te=(Le[9]+1)/Le[5],ae=(Le[9]-1)/Le[5],oe=(Le[8]-1)/Le[0],Me=(ze[8]+1)/ze[0],P=Je*oe,He=Je*Me,Re=De/(-oe+Me),Oe=Re*-oe;if(de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Le[10]===-1)Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let xe=Je+Re,T=Be+Re,_=P-Oe,O=He+(De-Oe),Q=te*Be/T*xe,fe=ae*Be/T*xe;Y.projectionMatrix.makePerspective(_,O,Q,fe,xe,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function pe(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let de=Y.near,ne=Y.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),N.near=L.near=x.near=de,N.far=L.far=x.far=ne,(z!==N.near||k!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,k=N.far),N.layers.mask=Y.layers.mask|6,x.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let De=Y.parent,Le=N.cameras;pe(N,De);for(let ze=0;ze<Le.length;ze++)pe(Le[ze],De);Le.length===2?ue(N,x,L):N.projectionMatrix.copy(x.projectionMatrix),J(Y,N,De)};function J(Y,de,ne){ne===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(ne.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return f[Y]};let ee=null;function we(Y,de){if(d=de.getViewerPose(c||o),g=de,d!==null){let ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let De=!1;ne.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let Be=0;Be<ne.length;Be++){let te=ne[Be],ae=null;if(p!==null)ae=p.getViewport(te);else{let Me=u.getViewSubImage(h,te);ae=Me.viewport,Be===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let oe=R[Be];oe===void 0&&(oe=new sn,oe.layers.enable(Be),oe.viewport=new At,R[Be]=oe),oe.matrix.fromArray(te.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(te.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),Be===0&&(N.matrix.copy(oe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(oe)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Be=u.getDepthInformation(ne[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,r.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Be=0;Be<ne.length;Be++){let te=ne[Be].camera;if(te){let ae=f[te];ae||(ae=new so,f[te]=ae);let oe=u.getCameraImage(te);ae.sourceTexture=oe}}}}for(let ne=0;ne<C.length;ne++){let De=E[ne],Le=C[ne];De!==null&&Le!==void 0&&Le.update(De,de,c||o)}ee&&ee(Y,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let he=new _f;he.setAnimationLoop(we),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}},Pr=new Hn,c_=new rt;function d_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,S,M,v){f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=e.get(f),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,Pr.copy(v),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Pr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=M*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function h_(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=r[S.id];v===void 0&&(g(S),v=d(S),r[S.id]=v,S.addEventListener("dispose",m));let C=M.program;n.updateUBOMapping(S,C);let E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function d(S){let M=u();S.__bindingPointIndex=M;let v=i.createBuffer(),C=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=r[S.id],v=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,I=v.length;E<I;E++){let b=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,L=b.length;x<L;x++){let R=b[x];if(p(R,E,x,C)===!0){let N=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],k=0;for(let B=0;B<z.length;B++){let F=z[B],A=y(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+k,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,k),k+=A.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,v,C){let E=S.value,I=M+"_"+v;if(C[I]===void 0)return typeof E=="number"||typeof E=="boolean"?C[I]=E:C[I]=E.clone(),!0;{let b=C[I];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return C[I]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(S){let M=S.uniforms,v=0,C=16;for(let I=0,b=M.length;I<b;I++){let x=Array.isArray(M[I])?M[I]:[M[I]];for(let L=0,R=x.length;L<R;L++){let N=x[L],z=Array.isArray(N.value)?N.value:[N.value];for(let k=0,B=z.length;k<B;k++){let F=z[k],A=y(F),V=v%C,q=V%A.boundary,ue=V+q;v+=q,ue!==0&&C-ue<A.storage&&(v+=C-ue),N.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=A.storage}}}let E=v%C;return E>0&&(v+=C-E),S.__size=v,S.__cache={},this}function y(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function f_(){return fi===null&&(fi=new Ha(u_,16,16,Ar,ui),fi.name="DFG_LUT",fi.minFilter=jt,fi.magFilter=jt,fi.wrapS=ri,fi.wrapT=ri,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var sc=class{constructor(e={}){let{canvas:t=zu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=p,m=new Set([yl,xl,_l]),f=new Set([bn,Wn,xs,ys,gl,bl]),S=new Uint32Array(4),M=new Int32Array(4),v=null,C=null,E=[],I=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,L=!1;this._outputColorSpace=Ft;let R=0,N=0,z=null,k=-1,B=null,F=new At,A=new At,V=null,q=new st(0),ue=0,pe=t.width,J=t.height,ee=1,we=null,he=null,Y=new At(0,0,pe,J),de=new At(0,0,pe,J),ne=!1,De=new hs,Le=!1,ze=!1,Je=new rt,Be=new D,te=new At,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Me(){return z===null?ee:1}let P=n;function He(w,H){return t.getContext(w,H)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",$e,!1),P===null){let H="webgl2";if(P=He(H,w),P===null)throw He(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw je("WebGLRenderer: "+w.message),w}let Re,Oe,xe,T,_,O,Q,fe,$,Ne,ye,le,be,se,re,Se,ve,_e,Ue,U,W,G,ce;function ie(){Re=new v1(P),Re.init(),W=new o_(P,Re),Oe=new f1(P,Re,e,W),xe=new r_(P,Re),Oe.reversedDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),T=new w1(P),_=new Wb,O=new s_(P,Re,xe,_,Oe,W,T),Q=new y1(x),fe=new C0(P),G=new h1(P,fe),$=new M1(P,fe,T,G),Ne=new T1(P,$,fe,G,T),_e=new E1(P,Oe,O),re=new p1(_),ye=new Gb(x,Q,Re,Oe,G,re),le=new d_(x,_),be=new qb,se=new Kb(Re),ve=new d1(x,Q,xe,Ne,g,l),Se=new i_(x,Ne,Oe),ce=new h_(P,T,Oe,xe),Ue=new u1(P,Re,T),U=new S1(P,Re,T),T.programs=ye.programs,x.capabilities=Oe,x.extensions=Re,x.properties=_,x.renderLists=be,x.shadowMap=Se,x.state=xe,x.info=T}ie(),y!==bn&&(b=new R1(y,t.width,t.height,r,s));let X=new Jd(x,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(pe,J,!1))},this.getSize=function(w){return w.set(pe,J)},this.setSize=function(w,H,K=!0){if(X.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=w,J=H,t.width=Math.floor(w*ee),t.height=Math.floor(H*ee),K===!0&&(t.style.width=w+"px",t.style.height=H+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(pe*ee,J*ee).floor()},this.setDrawingBufferSize=function(w,H,K){pe=w,J=H,ee=K,t.width=Math.floor(w*K),t.height=Math.floor(H*K),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(y===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,H,K,Z){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,H,K,Z),xe.viewport(F.copy(Y).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,H,K,Z){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,H,K,Z),xe.scissor(A.copy(de).multiplyScalar(ee).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){xe.setScissorTest(ne=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){he=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,K=!0){let Z=0;if(w){let j=!1;if(z!==null){let Pe=z.texture.format;j=m.has(Pe)}if(j){let Pe=z.texture.type,Fe=f.has(Pe),Ie=ve.getClearColor(),ke=ve.getClearAlpha(),We=Ie.r,Qe=Ie.g,it=Ie.b;Fe?(S[0]=We,S[1]=Qe,S[2]=it,S[3]=ke,P.clearBufferuiv(P.COLOR,0,S)):(M[0]=We,M[1]=Qe,M[2]=it,M[3]=ke,P.clearBufferiv(P.COLOR,0,M))}else Z|=P.COLOR_BUFFER_BIT}H&&(Z|=P.DEPTH_BUFFER_BIT),K&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),ve.dispose(),be.dispose(),se.dispose(),_.dispose(),Q.dispose(),Ne.dispose(),G.dispose(),ce.dispose(),ye.dispose(),X.dispose(),X.removeEventListener("sessionstart",rr),X.removeEventListener("sessionend",Us),sr.stop()};function me(w){w.preventDefault(),$s("WebGLRenderer: Context Lost."),L=!0}function Te(){$s("WebGLRenderer: Context Restored."),L=!1;let w=T.autoReset,H=Se.enabled,K=Se.autoUpdate,Z=Se.needsUpdate,j=Se.type;ie(),T.autoReset=w,Se.enabled=H,Se.autoUpdate=K,Se.needsUpdate=Z,Se.type=j}function $e(w){je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){let H=w.target;H.removeEventListener("dispose",Ge),cn(H)}function cn(w){en(w),_.remove(w)}function en(w){let H=_.get(w).programs;H!==void 0&&(H.forEach(function(K){ye.releaseProgram(K)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,K,Z,j,Pe){H===null&&(H=ae);let Fe=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Kf(w,H,K,Z,j);xe.setMaterial(Z,Fe);let ke=K.index,We=1;if(Z.wireframe===!0){if(ke=$.getWireframeAttribute(K),ke===void 0)return;We=2}let Qe=K.drawRange,it=K.attributes.position,qe=Qe.start*We,_t=(Qe.start+Qe.count)*We;Pe!==null&&(qe=Math.max(qe,Pe.start*We),_t=Math.min(_t,(Pe.start+Pe.count)*We)),ke!==null?(qe=Math.max(qe,0),_t=Math.min(_t,ke.count)):it!=null&&(qe=Math.max(qe,0),_t=Math.min(_t,it.count));let It=_t-qe;if(It<0||It===1/0)return;G.setup(j,Z,Ie,K,ke);let Ct,xt=Ue;if(ke!==null&&(Ct=fe.get(ke),xt=U,xt.setIndex(Ct)),j.isMesh)Z.wireframe===!0?(xe.setLineWidth(Z.wireframeLinewidth*Me()),xt.setMode(P.LINES)):xt.setMode(P.TRIANGLES);else if(j.isLine){let tn=Z.linewidth;tn===void 0&&(tn=1),xe.setLineWidth(tn*Me()),j.isLineSegments?xt.setMode(P.LINES):j.isLineLoop?xt.setMode(P.LINE_LOOP):xt.setMode(P.LINE_STRIP)}else j.isPoints?xt.setMode(P.POINTS):j.isSprite&&xt.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ks("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let tn=j._multiDrawStarts,Ve=j._multiDrawCounts,xn=j._multiDrawCount,ht=ke?fe.get(ke).bytesPerElement:1,Fn=_.get(Z).currentProgram.getUniforms();for(let ti=0;ti<xn;ti++)Fn.setValue(P,"_gl_DrawID",ti),xt.render(tn[ti]/ht,Ve[ti])}else if(j.isInstancedMesh)xt.renderInstances(qe,It,j.count);else if(K.isInstancedBufferGeometry){let tn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ve=Math.min(K.instanceCount,tn);xt.renderInstances(qe,It,Ve)}else xt.render(qe,It)};function ei(w,H,K){w.transparent===!0&&w.side===Dt&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,qo(w,H,K),w.side=wi,w.needsUpdate=!0,qo(w,H,K),w.side=Dt):qo(w,H,K)}this.compile=function(w,H,K=null){K===null&&(K=w),C=se.get(K),C.init(H),I.push(C),K.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),w!==K&&w.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(C.pushLight(j),j.castShadow&&C.pushShadow(j))}),C.setupLights();let Z=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){let Ie=Pe[Fe];ei(Ie,K,j),Z.add(Ie)}else ei(Pe,K,j),Z.add(Pe)}),C=I.pop(),Z},this.compileAsync=function(w,H,K=null){let Z=this.compile(w,H,K);return new Promise(j=>{function Pe(){if(Z.forEach(function(Fe){_.get(Fe).currentProgram.isReady()&&Z.delete(Fe)}),Z.size===0){j(w);return}setTimeout(Pe,10)}Re.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ir=null;function Wo(w){ir&&ir(w)}function rr(){sr.stop()}function Us(){sr.start()}let sr=new _f;sr.setAnimationLoop(Wo),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(w){ir=w,X.setAnimationLoop(w),w===null?sr.stop():sr.start()},X.addEventListener("sessionstart",rr),X.addEventListener("sessionend",Us),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;let K=X.enabled===!0&&X.isPresenting===!0,Z=b!==null&&(z===null||K)&&b.begin(x,z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(H),H=X.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,z),C=se.get(w,I.length),C.init(H),I.push(C),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),De.setFromProjectionMatrix(Je,Vn,H.reversedDepth),ze=this.localClippingEnabled,Le=re.init(this.clippingPlanes,ze),v=be.get(w,E.length),v.init(),E.push(v),X.enabled===!0&&X.isPresenting===!0){let Fe=x.xr.getDepthSensingMesh();Fe!==null&&vc(Fe,H,-1/0,x.sortObjects)}vc(w,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(we,he),oe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,oe&&ve.addToRenderList(v,w),this.info.render.frame++,Le===!0&&re.beginShadows();let j=C.state.shadowsArray;if(Se.render(j,w,H),Le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&b.hasRenderPass())===!1){let Fe=v.opaque,Ie=v.transmissive;if(C.setupLights(),H.isArrayCamera){let ke=H.cameras;if(Ie.length>0)for(let We=0,Qe=ke.length;We<Qe;We++){let it=ke[We];vh(Fe,Ie,w,it)}oe&&ve.render(w);for(let We=0,Qe=ke.length;We<Qe;We++){let it=ke[We];yh(v,w,it,it.viewport)}}else Ie.length>0&&vh(Fe,Ie,w,H),oe&&ve.render(w),yh(v,w,H)}z!==null&&N===0&&(O.updateMultisampleRenderTarget(z),O.updateRenderTargetMipmap(z)),Z&&b.end(x),w.isScene===!0&&w.onAfterRender(x,w,H),G.resetDefaultState(),k=-1,B=null,I.pop(),I.length>0?(C=I[I.length-1],Le===!0&&re.setGlobalState(x.clippingPlanes,C.state.camera)):C=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function vc(w,H,K,Z){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)C.pushLight(w),w.castShadow&&C.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){Z&&te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Je);let Fe=Ne.update(w),Ie=w.material;Ie.visible&&v.push(w,Fe,Ie,K,te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){let Fe=Ne.update(w),Ie=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),te.copy(w.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),te.copy(Fe.boundingSphere.center)),te.applyMatrix4(w.matrixWorld).applyMatrix4(Je)),Array.isArray(Ie)){let ke=Fe.groups;for(let We=0,Qe=ke.length;We<Qe;We++){let it=ke[We],qe=Ie[it.materialIndex];qe&&qe.visible&&v.push(w,Fe,qe,K,te.z,it)}}else Ie.visible&&v.push(w,Fe,Ie,K,te.z,null)}}let Pe=w.children;for(let Fe=0,Ie=Pe.length;Fe<Ie;Fe++)vc(Pe[Fe],H,K,Z)}function yh(w,H,K,Z){let{opaque:j,transmissive:Pe,transparent:Fe}=w;C.setupLightsView(K),Le===!0&&re.setGlobalState(x.clippingPlanes,K),Z&&xe.viewport(F.copy(Z)),j.length>0&&Xo(j,H,K),Pe.length>0&&Xo(Pe,H,K),Fe.length>0&&Xo(Fe,H,K),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function vh(w,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let qe=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new Mn(1,1,{generateMipmaps:!0,type:qe?ui:bn,minFilter:Ji,samples:Math.max(4,Oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Pe=C.state.transmissionRenderTarget[Z.id],Fe=Z.viewport||F;Pe.setSize(Fe.z*x.transmissionResolutionScale,Fe.w*x.transmissionResolutionScale);let Ie=x.getRenderTarget(),ke=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(Pe),x.getClearColor(q),ue=x.getClearAlpha(),ue<1&&x.setClearColor(16777215,.5),x.clear(),oe&&ve.render(K);let Qe=x.toneMapping;x.toneMapping=Gn;let it=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),Le===!0&&re.setGlobalState(x.clippingPlanes,Z),Xo(w,K,Z),O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe),Re.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let _t=0,It=H.length;_t<It;_t++){let Ct=H[_t],{object:xt,geometry:tn,material:Ve,group:xn}=Ct;if(Ve.side===Dt&&xt.layers.test(Z.layers)){let ht=Ve.side;Ve.side=fn,Ve.needsUpdate=!0,Mh(xt,K,Z,tn,Ve,xn),Ve.side=ht,Ve.needsUpdate=!0,qe=!0}}qe===!0&&(O.updateMultisampleRenderTarget(Pe),O.updateRenderTargetMipmap(Pe))}x.setRenderTarget(Ie,ke,We),x.setClearColor(q,ue),it!==void 0&&(Z.viewport=it),x.toneMapping=Qe}function Xo(w,H,K){let Z=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Pe=w.length;j<Pe;j++){let Fe=w[j],{object:Ie,geometry:ke,group:We}=Fe,Qe=Fe.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Ie.layers.test(K.layers)&&Mh(Ie,H,K,ke,Qe,We)}}function Mh(w,H,K,Z,j,Pe){w.onBeforeRender(x,H,K,Z,j,Pe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,H,K,Z,w,Pe),j.transparent===!0&&j.side===Dt&&j.forceSinglePass===!1?(j.side=fn,j.needsUpdate=!0,x.renderBufferDirect(K,H,Z,j,w,Pe),j.side=wi,j.needsUpdate=!0,x.renderBufferDirect(K,H,Z,j,w,Pe),j.side=Dt):x.renderBufferDirect(K,H,Z,j,w,Pe),w.onAfterRender(x,H,K,Z,j,Pe)}function qo(w,H,K){H.isScene!==!0&&(H=ae);let Z=_.get(w),j=C.state.lights,Pe=C.state.shadowsArray,Fe=j.state.version,Ie=ye.getParameters(w,j.state,Pe,H,K),ke=ye.getProgramCacheKey(Ie),We=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=Q.get(w.envMap||Z.environment,Qe),Z.envMapRotation=Z.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Ge),We=new Map,Z.programs=We);let it=We.get(ke);if(it!==void 0){if(Z.currentProgram===it&&Z.lightsStateVersion===Fe)return wh(w,Ie),it}else Ie.uniforms=ye.getUniforms(w),w.onBeforeCompile(Ie,x),it=ye.acquireProgram(Ie,ke),We.set(ke,it),Z.uniforms=Ie.uniforms;let qe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=re.uniform),wh(w,Ie),Z.needsLights=ep(w),Z.lightsStateVersion=Fe,Z.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=it,Z.uniformsList=null,it}function Sh(w){if(w.uniformsList===null){let H=w.currentProgram.getUniforms();w.uniformsList=Ms.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function wh(w,H){let K=_.get(w);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Kf(w,H,K,Z,j){H.isScene!==!0&&(H=ae),O.resetTextureUnits();let Pe=H.fog,Fe=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,Ie=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:mr,ke=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,We=Q.get(Z.envMap||Fe,ke),Qe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!K.morphAttributes.position,_t=!!K.morphAttributes.normal,It=!!K.morphAttributes.color,Ct=Gn;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ct=x.toneMapping);let xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,tn=xt!==void 0?xt.length:0,Ve=_.get(Z),xn=C.state.lights;if(Le===!0&&(ze===!0||w!==B)){let Ht=w===B&&Z.id===k;re.setState(Z,w,Ht)}let ht=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==xn.state.version||Ve.outputColorSpace!==Ie||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==We||Z.fog===!0&&Ve.fog!==Pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==re.numPlanes||Ve.numIntersection!==re.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==it||Ve.morphTargets!==qe||Ve.morphNormals!==_t||Ve.morphColors!==It||Ve.toneMapping!==Ct||Ve.morphTargetsCount!==tn)&&(ht=!0):(ht=!0,Ve.__version=Z.version);let Fn=Ve.currentProgram;ht===!0&&(Fn=qo(Z,H,j));let ti=!1,or=!1,Or=!1,Mt=Fn.getUniforms(),qt=Ve.uniforms;if(xe.useProgram(Fn.program)&&(ti=!0,or=!0,Or=!0),Z.id!==k&&(k=Z.id,or=!0),ti||B!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(P,"projectionMatrix",w.projectionMatrix),Mt.setValue(P,"viewMatrix",w.matrixWorldInverse);let Di=Mt.map.cameraPosition;Di!==void 0&&Di.setValue(P,Be.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,or=!0,Or=!0)}if(Ve.needsLights&&(xn.state.directionalShadowMap.length>0&&Mt.setValue(P,"directionalShadowMap",xn.state.directionalShadowMap,O),xn.state.spotShadowMap.length>0&&Mt.setValue(P,"spotShadowMap",xn.state.spotShadowMap,O),xn.state.pointShadowMap.length>0&&Mt.setValue(P,"pointShadowMap",xn.state.pointShadowMap,O)),j.isSkinnedMesh){Mt.setOptional(P,j,"bindMatrix"),Mt.setOptional(P,j,"bindMatrixInverse");let Ht=j.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(P,"boneTexture",Ht.boneTexture,O))}j.isBatchedMesh&&(Mt.setOptional(P,j,"batchingTexture"),Mt.setValue(P,"batchingTexture",j._matricesTexture,O),Mt.setOptional(P,j,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",j._indirectTexture,O),Mt.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",j._colorsTexture,O));let Ii=K.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&_e.update(j,K,Fn),(or||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Mt.setValue(P,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(qt.envMapIntensity.value=H.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=f_()),or&&(Mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Qf(qt,Or),Pe&&Z.fog===!0&&le.refreshFogUniforms(qt,Pe),le.refreshMaterialUniforms(qt,Z,ee,J,C.state.transmissionRenderTarget[w.id]),Ms.upload(P,Sh(Ve),qt,O)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ms.upload(P,Sh(Ve),qt,O),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(P,"center",j.center),Mt.setValue(P,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(P,"normalMatrix",j.normalMatrix),Mt.setValue(P,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Ht=Z.uniformsGroups;for(let Di=0,Br=Ht.length;Di<Br;Di++){let Eh=Ht[Di];ce.update(Eh,Fn),ce.bind(Eh,Fn)}}return Fn}function Qf(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function ep(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,H,K){let Z=_.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=H,_.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){let K=_.get(w);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};let tp=P.createFramebuffer();this.setRenderTarget=function(w,H=0,K=0){z=w,R=H,N=K;let Z=null,j=!1,Pe=!1;if(w){let Ie=_.get(w);if(Ie.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(P.FRAMEBUFFER,Ie.__webglFramebuffer),F.copy(w.viewport),A.copy(w.scissor),V=w.scissorTest,xe.viewport(F),xe.scissor(A),xe.setScissorTest(V),k=-1;return}else if(Ie.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Ie.__hasExternalTextures)O.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Qe=w.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&_.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);let We=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[H])?Z=We[H][K]:Z=We[H],j=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?Z=_.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?Z=We[K]:Z=We,F.copy(w.viewport),A.copy(w.scissor),V=w.scissorTest}else F.copy(Y).multiplyScalar(ee).floor(),A.copy(de).multiplyScalar(ee).floor(),V=ne;if(K!==0&&(Z=tp),xe.bindFramebuffer(P.FRAMEBUFFER,Z)&&xe.drawBuffers(w,Z),xe.viewport(F),xe.scissor(A),xe.setScissorTest(V),j){let Ie=_.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,K)}else if(Pe){let Ie=H;for(let ke=0;ke<w.textures.length;ke++){let We=_.get(w.textures[ke]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ke,We.__webglTexture,K,Ie)}}else if(w!==null&&K!==0){let Ie=_.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,K)}k=-1},this.readRenderTargetPixels=function(w,H,K,Z,j,Pe,Fe,Ie=0){if(!(w&&w.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){xe.bindFramebuffer(P.FRAMEBUFFER,ke);try{let We=w.textures[Ie],Qe=We.format,it=We.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!Oe.textureFormatReadable(Qe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(it)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Z&&K>=0&&K<=w.height-j&&P.readPixels(H,K,Z,j,W.convert(Qe),W.convert(it),Pe)}finally{let We=z!==null?_.get(z).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(w,H,K,Z,j,Pe,Fe,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke)if(H>=0&&H<=w.width-Z&&K>=0&&K<=w.height-j){xe.bindFramebuffer(P.FRAMEBUFFER,ke);let We=w.textures[Ie],Qe=We.format,it=We.type;if(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),!Oe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,Pe.byteLength,P.STREAM_READ),P.readPixels(H,K,Z,j,W.convert(Qe),W.convert(it),0);let _t=z!==null?_.get(z).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,_t);let It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bu(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Pe),P.deleteBuffer(qe),P.deleteSync(It),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,K=0){let Z=Math.pow(2,-K),j=Math.floor(w.image.width*Z),Pe=Math.floor(w.image.height*Z),Fe=H!==null?H.x:0,Ie=H!==null?H.y:0;O.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Fe,Ie,j,Pe),xe.unbindTexture()};let np=P.createFramebuffer(),ip=P.createFramebuffer();this.copyTextureToTexture=function(w,H,K=null,Z=null,j=0,Pe=0){let Fe,Ie,ke,We,Qe,it,qe,_t,It,Ct=w.isCompressedTexture?w.mipmaps[Pe]:w.image;if(K!==null)Fe=K.max.x-K.min.x,Ie=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,Qe=K.min.y,it=K.isBox3?K.min.z:0;else{let qt=Math.pow(2,-j);Fe=Math.floor(Ct.width*qt),Ie=Math.floor(Ct.height*qt),w.isDataArrayTexture?ke=Ct.depth:w.isData3DTexture?ke=Math.floor(Ct.depth*qt):ke=1,We=0,Qe=0,it=0}Z!==null?(qe=Z.x,_t=Z.y,It=Z.z):(qe=0,_t=0,It=0);let xt=W.convert(H.format),tn=W.convert(H.type),Ve;H.isData3DTexture?(O.setTexture3D(H,0),Ve=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(O.setTexture2DArray(H,0),Ve=P.TEXTURE_2D_ARRAY):(O.setTexture2D(H,0),Ve=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let xn=P.getParameter(P.UNPACK_ROW_LENGTH),ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fn=P.getParameter(P.UNPACK_SKIP_PIXELS),ti=P.getParameter(P.UNPACK_SKIP_ROWS),or=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,it);let Or=w.isDataArrayTexture||w.isData3DTexture,Mt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){let qt=_.get(w),Ii=_.get(H),Ht=_.get(qt.__renderTarget),Di=_.get(Ii.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Ht.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Br=0;Br<ke;Br++)Or&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(w).__webglTexture,j,it+Br),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(H).__webglTexture,Pe,It+Br)),P.blitFramebuffer(We,Qe,Fe,Ie,qe,_t,Fe,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||_.has(w)){let qt=_.get(w),Ii=_.get(H);xe.bindFramebuffer(P.READ_FRAMEBUFFER,np),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,ip);for(let Ht=0;Ht<ke;Ht++)Or?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,j,it+Ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,j),Mt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ii.__webglTexture,Pe,It+Ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ii.__webglTexture,Pe),j!==0?P.blitFramebuffer(We,Qe,Fe,Ie,qe,_t,Fe,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):Mt?P.copyTexSubImage3D(Ve,Pe,qe,_t,It+Ht,We,Qe,Fe,Ie):P.copyTexSubImage2D(Ve,Pe,qe,_t,We,Qe,Fe,Ie);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Mt?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Ve,Pe,qe,_t,It,Fe,Ie,ke,xt,tn,Ct.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,Pe,qe,_t,It,Fe,Ie,ke,xt,Ct.data):P.texSubImage3D(Ve,Pe,qe,_t,It,Fe,Ie,ke,xt,tn,Ct):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Pe,qe,_t,Fe,Ie,xt,tn,Ct.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Pe,qe,_t,Ct.width,Ct.height,xt,Ct.data):P.texSubImage2D(P.TEXTURE_2D,Pe,qe,_t,Fe,Ie,xt,tn,Ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,xn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ti),P.pixelStorei(P.UNPACK_SKIP_IMAGES,or),Pe===0&&H.generateMipmaps&&P.generateMipmap(Ve),xe.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){R=0,N=0,z=null,xe.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var Sf={type:"change"},Kd={type:"start"},Ef={type:"end"},lc=new Vi,wf=new gn,p_=Math.cos(70*qn.DEG2RAD),Vt=new D,_n=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$d=1e-6,cc=class extends Mo{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Zt,this._lastTargetPosition=new D,this._quat=new Zt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bs,this._sphericalDelta=new bs,this._scale=1,this._panOffset=new D,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new D,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=g_.bind(this),this._onPointerDown=m_.bind(this),this._onPointerUp=b_.bind(this),this._onContextMenu=w_.bind(this),this._onMouseWheel=y_.bind(this),this._onKeyDown=v_.bind(this),this._onTouchStart=M_.bind(this),this._onTouchMove=S_.bind(this),this._onMouseDown=__.bind(this),this._onMouseMove=x_.bind(this),this._interceptControlDown=E_.bind(this),this._interceptControlUp=T_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sf),this.update(),this.state=yt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Vt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<p_?this.object.lookAt(this.target):(wf.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(wf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$d||this._lastTargetPosition.distanceToSquared(this.target)>$d?(this.dispatchEvent(Sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Vt.copy(r).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function m_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function g_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function b_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ef),this.state=yt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function __(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=yt.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Kd)}function x_(i){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function y_(i){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(i.preventDefault(),this.dispatchEvent(Kd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ef))}function v_(i){this.enabled!==!1&&this._handleKeyDown(i)}function M_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=yt.TOUCH_ROTATE;break;case ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=yt.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Kd)}function S_(i){switch(this._trackPointer(i),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=yt.NONE}}function w_(i){this.enabled!==!1&&i.preventDefault()}function E_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function T_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function No(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new mt,c=0;for(let d=0;d<i.length;++d){let u=i[d],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,d),c+=p}}if(t){let d=0,u=[];for(let h=0;h<i.length;++h){let p=i[h].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(let d in s){let u=Tf(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in o){let u=o[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){let p=[];for(let y=0;y<o[d].length;++y)p.push(o[d][y][h]);let g=Tf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(g)}}return l}function Tf(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}let o=new e(s),a=new Yt(o,t,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let u=l/t;for(let h=0,p=d.count;h<p;h++)for(let g=0;g<t;g++){let y=d.getComponent(h,g);a.setComponent(h+u,g,y)}}else o.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}var dc=.4166666666666667,hc=.24,ws=.018;function Yn(i,e=!0){let t=i.pixels*dc,n=(i.trim==="left"?hc:0)+(i.extraStartTrim||0)-(i.extendStart||0),r=t-(i.trim==="right"?hc:0)-(i.extraEndTrim||0)+(i.extendEnd||0);return e?[Math.max(i.minCut??-1/0,n),Math.min(i.limit??1/0,r)]:[n,r]}function Af(i){let e=i.pixels*dc;return[[-(i.extendStart||0),ws],...Array.from({length:i.pixels-1},(t,n)=>[(n+1)*dc-ws,(n+1)*dc+ws]),[e-ws,e+(i.extendEnd||0)]]}var Rf=2.5/6,A_=.24,Es=.018,Qd=new Map,R_=(i,e)=>{for(let t=0;t<i.length;t++)if(Math.abs(i[t]-e[t])>1e-9)return i[t]<e[t];return!1};function eh(i,e=0,t=[],n=2,r={left:!0,right:!0}){if(!Number.isInteger(i)||i<2||![0,1].includes(e))throw new Error("A native paired span needs at least two whole modules");if(typeof r.left!="boolean"||typeof r.right!="boolean")throw new Error("Both terminal reservations must be explicit booleans");for(let d of t)if(!Number.isInteger(d.at)||d.at<=0||d.at>=i||![0,1].includes(d.layer)||!["left","right","seam"].includes(d.side))throw new Error("Invalid native junction band");let s=JSON.stringify([i,e,t,n,r]);if(Qd.has(s))return Qd.get(s).map(d=>({...d}));let o=[0,1].map(d=>new Set(t.filter(u=>u.layer===d).map(u=>u.at))),a=new Map([["0,0",{starts:[0,0],score:[0,0,0,0,0],pieces:[]}]]);for(let d=1;d<=i;d++){let u=new Map;for(let h of a.values())for(let p of[!1,!0])for(let g of[!1,!0]){let y=[p,g];if(d<i&&p&&g&&!(o[0].has(d)&&o[1].has(d)))continue;let m=[...h.starts],f=[...h.score],S=[],M=!0;for(let E of[0,1]){let I=m[E],b=d-I,x=E^e;if(b>6||!y[E]&&(d===i||b===6||o[E].has(d))){M=!1;break}if(!y[E])continue;let L=r.left&&x===1&&I===0||t.some(A=>A.layer===E&&A.at===I&&A.side==="left"),R=r.right&&x===1&&d===i||t.some(A=>A.layer===E&&A.at===d&&A.side==="right");if(L&&R){M=!1;break}let N=L?"left":R?"right":null,z={};for(let A of t.filter(V=>V.layer===E&&V.fullEndSlot))A.side==="left"&&A.at===d&&(z.extendEnd=Es),A.side==="left"&&A.at===I&&(z.extraStartTrim=Es),A.side==="right"&&A.at===d&&(z.extraEndTrim=Es),A.side==="right"&&A.at===I&&(z.extendStart=Es);r.extraTrim&&L&&I===0&&(z.extraStartTrim=Es),r.extraTrim&&R&&d===i&&(z.extraEndTrim=Es);let k={pixels:b,start:I*Rf,layer:x,trim:N,...z},[B,F]=Yn(k,!1);if(F-B>2.5+1e-9||F-B<=0){M=!1;break}f[0]+=+(b===1&&!!N),f[1]+=+(b===1),f[2]++,f[3]+=1/(b*Rf-(N?A_:0)),x===1&&I===0&&(f[4]+=Math.abs(b-n)),S.push(k),m[E]=d}if(!M)continue;let v=m.join(","),C=u.get(v);(!C||R_(f,C.score))&&u.set(v,{starts:m,score:f,pieces:[...h.pieces,...S]})}a=u}let l=a.get(`${i},${i}`);if(!l)throw new Error("No native staggered stock layout: "+s);let c=l.pieces.sort((d,u)=>u.layer-d.layer||d.start-u.start);return Qd.set(s,c),c.map(d=>({...d}))}function uc(i,e=2){return eh(i,0,[],e).sort((t,n)=>t.layer-n.layer||t.start-n.start)}var mi=2.5/6,Ri=.24,Xt=.018,pn=Ri/2,vt=1e-7,C_=new D(1,0,0),P_=new D(0,1,0),tv=new D(0,0,1);function fc(i={},e={},t={}){let n=i.wood||new Et({color:"#c7a46f",side:Dt}),r=i.end||n,s=t.jointStrategy!=="lateral-cuts",o=[],a=0,l=uc;function c(m,f,S,M){let v=[];for(let C=0;C<m.length;C++){let E=m[C],I=m[(C+1)%m.length],b=M*(E[f]-S),x=M*(I[f]-S);b>=-vt&&v.push(E.clone()),b>=-vt!=x>=-vt&&v.push(E.clone().lerp(I,b/(b-x)))}return v}function d(m){let f=m.pixels*mi,S=[new ge(-(m.extendStart||0),0),new ge(f+(m.extendEnd||0),0),new ge(f+(m.extendEnd||0),pn),new ge(f-Xt,pn),new ge(f-Xt,Ri)];for(let x=m.pixels-1;x>=1;x--){let L=x*mi;S.push(new ge(L+Xt,Ri),new ge(L+Xt,pn),new ge(L-Xt,pn),new ge(L-Xt,Ri))}S.push(new ge(Xt,Ri),new ge(Xt,pn),new ge(-(m.extendStart||0),pn));let M=S,[v,C]=Yn(m);if(C<=v+vt||(v>-(m.extendStart||0)+vt&&(M=c(M,"x",v,1)),C<f+(m.extendEnd||0)-vt&&(M=c(M,"x",C,-1)),M.length<3))return null;let E=new Gi(M);E.closePath();let I=new Sr(E,{depth:Xt,bevelEnabled:!1,curveSegments:1});I.translate(0,-pn,0);let b=I.getAttribute("uv");for(let x=0;x<b.count;x++)b.setXY(x,b.getX(x)/2.5,b.getY(x)/Ri);return I}function u(m,f,S,M=[],v=null){let[C,E]=Yn(m);v&&(C=Math.max(C,v[0]-m.start),E=Math.min(E,v[1]-m.start));let I=E>C+vt?[[C,E]]:[];for(let b of M){let x=f===0?b.v0:b.u0,L=f===0?b.v1:b.u1;if(S+Xt<=x+vt||S>=L-vt)continue;let R=(f===0?b.u0:b.v0)-m.start,N=(f===0?b.u1:b.v1)-m.start;I=I.flatMap(([z,k])=>N<=z||R>=k?[[z,k]]:[[z,Math.min(k,R)],[Math.max(z,N),k]].filter(([B,F])=>F>B+vt))}return I.map(([b,x])=>({...m,minCut:b,limit:x}))}function h(m,f,S,M){let v=m.pixels*mi,[C,E]=Yn(m);if(E<=C+vt)return null;let I=Af(m),b=(m.connectorCuts||[]).map(V=>({x0:V.end==="start"?V.offset||0:v-(V.offset||0)-pn,x1:V.end==="start"?(V.offset||0)+pn:v-(V.offset||0),y0:V.edge==="slotted"?pn-Xt:-pn,y1:V.edge==="slotted"?pn:-pn+Xt})),x=[C,E];for(let V of I)for(let q of V)q>C+vt&&q<E-vt&&x.push(q);for(let V of b)for(let q of[V.x0,V.x1])q>C+vt&&q<E-vt&&x.push(q);x.sort((V,q)=>V-q);let L=new Map,R=!1,N=V=>`${Math.round(V.x*1e8)},${Math.round(V.y*1e8)},${Math.round(V.z*1e8)}`;function z(V,q){let ue=[],pe=[];for(let ee of V){let we=[];for(let he=0;he<ee.length;he++){let Y=ee[he],de=ee[(he+1)%ee.length],ne=q.c-q.n.dot(Y.clone().add(S)),De=q.c-q.n.dot(de.clone().add(S));if(ne>=-vt?we.push(Y):R=!0,ne>=-vt!=De>=-vt){let Le=Y.clone().lerp(de,ne/(ne-De));we.push(Le),pe.push(Le)}}we.length>=3&&ue.push(we)}let J=[...new Map(pe.map(ee=>[N(ee),ee])).values()];if(J.length>=3){let ee=J.reduce((de,ne)=>de.add(ne),new D).divideScalar(J.length),we=q.n.clone().normalize(),he=(Math.abs(we.y)>.9?C_:P_).clone().cross(we).normalize(),Y=we.clone().cross(he);J.sort((de,ne)=>Math.atan2(de.clone().sub(ee).dot(Y),de.clone().sub(ee).dot(he))-Math.atan2(ne.clone().sub(ee).dot(Y),ne.clone().sub(ee).dot(he))),ue.push(J)}return ue}function k(V,q,ue,pe){let J=[[V,ue,0],[q,ue,0],[q,pe,0],[V,pe,0],[V,ue,Xt],[q,ue,Xt],[q,pe,Xt],[V,pe,Xt]].map(we=>new D(...we).applyMatrix4(f)),ee=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].map(we=>we.map(he=>J[he]));f.determinant()<0&&ee.forEach(we=>we.reverse());for(let we of M)if(ee=z(ee,we),!ee.length)return;for(let we of ee){let he=we.filter((de,ne)=>ne===0||de.distanceToSquared(we[ne-1])>1e-18);if(he.length<3)continue;let Y=he.map(N).sort().join("|");L.has(Y)?L.delete(Y):L.set(Y,he)}}for(let V=0;V<x.length-1;V++){let q=x[V],ue=x[V+1],pe=(q+ue)/2;if(ue-q<vt)continue;let J=[...new Set([-pn,0,pn,...b.flatMap(ee=>[ee.y0,ee.y1])])].sort((ee,we)=>ee-we);for(let ee=0;ee<J.length-1;ee++){let we=J[ee],he=J[ee+1],Y=(we+he)/2;Y>0&&I.some(([de,ne])=>pe>de&&pe<ne)||b.some(de=>pe>de.x0-vt&&pe<de.x1+vt&&Y>de.y0-vt&&Y<de.y1+vt)||k(q,ue,we,he)}}let B=[],F=[];for(let V of L.values())for(let q=1;q<V.length-1;q++){let ue=V[0],pe=V[q],J=V[q+1];if(!(pe.clone().sub(ue).cross(J.clone().sub(ue)).lengthSq()<1e-20))for(let ee of[ue,pe,J])B.push(ee.x,ee.y,ee.z),F.push(ee.dot(new D().setFromMatrixColumn(f,0))/2.5,ee.dot(new D().setFromMatrixColumn(f,1))/Ri)}if(!B.length)return null;let A=new mt;return A.setAttribute("position",new ct(B,3)),A.setAttribute("uv",new ct(F,2)),A.computeVertexNormals(),A.userData.angledCut=R,A}function p(m,f,S,M,v,C,E={},I=0,b=[]){let[x,L]=Yn(f,!1);if(L-x>2.5+vt)throw new Error("Combstruct stock exceeds 2500 mm");let R=JSON.stringify([m.name,E.wallId||"",E.kind||"standard",E.axis,E.index,f.layer,I,...[f.start,f.pixels,f.minCut||0,f.limit??f.pixels*mi].map(he=>Math.round(he*1e7)/1e7)]),N=t.connectors===!1||s?[]:e[R]||[];f={...f,connectorCuts:N};let z=f.layer^I,k=C.clone().addScaledVector(S,f.start).addScaledVector(v,z===0?-Xt:0),B=new rt().makeBasis(S,M,v),F=b.length||(f.minCut||0)>vt||f.limit!==void 0||N.length,A=F?h(f,B,k,b):d(f);if(!A)return null;F||A.applyMatrix4(B);let[V,q]=Yn(f,!1),[ue,pe]=Yn(f),J=!!A.userData.angledCut||ue>V+vt||pe<q-vt,ee=new lt(A,f.trim||J?r:n);ee.position.copy(k),ee.castShadow=!0,ee.receiveShadow=!0;let we={id:`board-${++a}`,mesh:ee,surface:m.name,kind:E.kind||"standard",axis:E.axis,index:E.index,layer:z,stockLayer:f.layer,start:f.start,stockLength:f.pixels*mi,trim:f.trim||null,custom:J,connectorKey:R,connectorCuts:N,stock:{...f},along:S.toArray(),normal:M.toArray(),thick:v.toArray(),frameOrigin:C.toArray(),clippingPlanes:b.map(he=>({n:he.n.toArray(),c:he.c})),actualStart:f.start+ue,actualEnd:f.start+pe,...E};return ee.name=we.id,ee.userData={...we,mesh:void 0},m.add(ee),o.push(we),ee}function g(m,f,S,M,v,C,E,{phaseU:I=0,phaseV:b=0,holes:x=[],keepTop:L=!1,clearances:R=[0,0],startClearances:N=[0,0],verticalPlanes:z=[],verticalModules:k=S,kind:B="standard"}={}){for(let F=0;F<2;F++){let A=F===0?f:k,V=F===0?S:f,q=F===0?v:C,ue=F===0?C:v,pe=E.clone().multiplyScalar(F===0?1:-1),J=F===0?I:b;for(let ee=1;ee<V;ee++)for(let we of l(A)){let he={...we};L&&F===1&&he.trim==="right"&&(he.trim=null);let Y=R[F]||0;Y&&Math.abs(he.start+he.pixels*mi-A*mi)<vt&&(he.limit=he.pixels*mi-(he.trim==="right"?Ri:0)-Y),N[F]&&he.start===0&&(he.minCut=(he.trim==="left"?Ri:0)+N[F]);let de=ee*mi+((he.layer^J)===0?-Xt:0);for(let ne of u(he,F,de,x))p(m,ne,q,pe,ue,M.clone().addScaledVector(ue,ee*mi),{kind:B,axis:F,index:ee},J,F===1?z:[])}}}return{lengthJoints:s,boards:o,segments:l,jointStock:(m,f=0,S=[],M=2,v)=>eh(m,f,s?S.map(C=>({...C,fullEndSlot:C.side!=="seam"})):S,M,v),openStock:u,addBoard:p,grid:g}}var Cf={'["rear","","wall",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,2,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,3,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,4,0,1,0,5,0,0.8513333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,9,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,10,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["rear","","wall",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,1,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,2,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,3,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,4,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,5,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,6,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,7,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,8,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,9,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,10,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,11,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,12,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,13,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,0,4,0,1.6666667]':[{end:"start",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",0,14,0,0,3.3333333,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["Sufit","","ceiling",1,1,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,1,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,2,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,3,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,4,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,5,0,0,4.1666667,5,0,2.0833333]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,6,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,7,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,8,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,9,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,10,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,11,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,0,6,0,2.5]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["Sufit","","ceiling",1,12,0,0,4.5833333,4,0,1.6666667]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,1,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,2,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,3,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,4,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,5,0,1,4.1666667,5,0.8153333,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,6,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",0,7,0,1,4.1666667,5,0,2.0833333]':[{end:"end",edge:"slotted",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,6,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,7,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,8,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,9,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,10,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,0,5,0,0.24]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,11,0,1,2.0833333,3,0.3986667,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,12,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,13,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-right","bedroom-right","partition",1,14,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",0,1,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,2,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,3,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,4,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,5,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,6,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",0,7,0,0,0,6,0,2.5]':[{end:"start",edge:"slotted",offset:.12,width:.018,removedRun:.12},{end:"end",edge:"slotted",offset:0,width:.018,removedRun:.102}],'["bedroom-front","bedroom-front","partition",1,1,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,1,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,2,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,3,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,4,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,0,5,0,2.0833333]':[{end:"start",edge:"plain",offset:0,width:.018,removedRun:.12}],'["bedroom-front","bedroom-front","partition",1,5,0,1,2.0833333,3,0,1.25]':[{end:"end",edge:"plain",offset:.12,width:.018,removedRun:.12}]};var Ae=2.5/6,bt=.24,Ke=.018,ut=bt/2,Tn=new D(1,0,0),jn=new D(0,1,0),Zn=new D(0,0,1),D_=1e-7;function th(i={},e={}){let t=e.jointStrategy!=="lateral-cuts",n=ut+(t?Ke:0),r=i.wood||new Et({color:"#ba7c43",roughness:.85}),s=i.end||r,o=new Ze;o.name="Combstruct 30 \u2014 w\u0119z\u0142y w jednej osi";let a=le=>{let be=new Ze;return be.name=le,o.add(be),be},l={floor:a("P\u0142yta pod\u0142ogowa i ci\u0105g\u0142y taras"),walls:["rear","left","front","right"].map(le=>a(le)),partitions:a("\u015Aciany wewn\u0119trzne"),ceiling:a("Sufit"),roof:a("Dach 35\xB0"),gables:a("Poziome rz\u0119dy szczyt\xF3w"),pergola:a("Pergola")},c=13*Ae,d=15*Ae,u=7*Ae,h=-c/2,p=c/2,g=-d/2,y=d/2,m=g-u,f=8,S=f*Ae,M=t?S+Ke:S-bt,v=M+bt,C=35*Math.PI/180,E=Math.sin(C),I=Math.cos(C),b=Math.tan(C),x=v,L=x+b*c/2,R=L+bt/I,N={width:c,depth:d,halfWidth:c/2,halfDepth:d/2,terraceDepth:u,terraceRearZ:m,wallDepth:bt,floorBottom:0,floorTop:bt,wallTop:S,ceilingBottom:M,ceilingTop:v,clearHeight:M-bt,roofAngle:35,roofEaveY:x,roofUnderRidgeY:L,roofRidgeY:R,roofOverhang:Ae,module:Ae,boardDepth:bt,boardThickness:Ke,referenceWidth:5.65,referenceDepth:6.1,roofGableOverhang:Ae,constructionOnly:!0},z=fc({wood:r,end:s},Cf,{...e,connectors:t?!1:e.connectors}),{boards:k,segments:B,openStock:F,addBoard:A,grid:V}=z,q=[],ue=[],pe={rear:[],left:[],front:[],right:[],partitions:[]},J=(le,be=0,se=[],re=2,Se={left:!0,right:!0})=>z.jointStock(le,be,t?se.map(ve=>({...ve,fullEndSlot:!0})):se,re,{...Se,extraTrim:Se.extraTrim??t}),ee=h+6*Ae-n,we=ee,he=g+8*Ae-n,Y=new D(h,ut,m);function de(le,be,se,re,Se){let ve=Se==="floor",_e=ve?7:0;for(let Ue=0;Ue<2;Ue++){let U=Ue===0?be:se,W=Ue===0?se:be;for(let G=1;G<W;G++){let ce=[];Ue===0&&G>_e&&ce.push({at:6,side:"right",layer:1}),Ue===1&&(ve&&ce.push({at:7,side:"left",layer:1}),G<6&&ce.push({at:_e+8,side:"right",layer:1}));let ie=J(U,0,ce);for(let X of ie)A(le,X,Ue===0?Tn:Zn,Ue===0?jn:jn.clone().negate(),Ue===0?Zn:Tn,re.clone().addScaledVector(Ue===0?Zn:Tn,G*Ae),{kind:Se,axis:Ue,index:G},0)}}}de(l.floor,13,22,Y,"floor");let ne=["rear","left","front","right"],De=[new D(h,0,g+n),new D(h+n,0,g),new D(h,0,y-n),new D(p-n,0,g)],Le=[Zn,Tn,Zn.clone().negate(),Tn.clone().negate()];function ze(le,be,se,re,Se,ve,_e){return{id:_e,kind:be,u0:se*Ae+Ke,u1:re*Ae-Ke,v0:Se,v1:ve}}pe.front=[ze("front","window",1,3,3*Ae+Ke,6*Ae-Ke,"front-window-left"),ze("front","door",6,9,bt,6*Ae-Ke,"entrance"),ze("front","window",10,12,3*Ae+Ke,6*Ae-Ke,"front-window-right")],pe.rear=[ze("rear","window",1,5,2*Ae+Ke,6*Ae-Ke,"bedroom-window"),ze("rear","door",8,12,bt,6*Ae-Ke,"terrace-door")],pe.right=[ze("right","window",3,7,2*Ae+Ke,6*Ae-Ke,"living-window")];function Je(le,be,se,re,Se){let ve=(se===0?re.x:re.z)+le.u0,_e=(se===0?re.x:re.z)+le.u1;return Object.assign(le,{wallId:be,axis:se,origin:{x:re.x,y:re.y,z:re.z},world:se===0?{x0:ve,x1:_e,z0:Se-ut,z1:Se+ut,y0:le.v0,y1:le.v1}:{x0:Se-ut,x1:Se+ut,z0:ve,z1:_e,y0:le.v0,y1:le.v1}}),le}let Be=[{n:new D(-b,1,0),c:x+b*c/2},{n:new D(b,1,0),c:x+b*c/2}],te=Math.ceil(L/Ae)+1;for(let le=0;le<4;le++){let be=le%2,se=be===0?Tn:Zn,re=De[le],Se=be===0?re.z:re.x,ve=be===0?13:15,_e=ne[le],Ue=pe[_e];Ue.forEach(U=>Je(U,_e,be,re,Se)),q.push({id:_e,axis:be,start:be===0?re.x:re.z,end:(be===0?re.x:re.z)+ve*Ae-(be===0?Ke:2*Ke),fixed:Se,depth:bt,holes:Ue,exterior:!0,origin:{x:re.x,y:0,z:re.z}});for(let U=0;U<2;U++){let W=U===0?ve:te,G=U===0&&be===0?0:1;for(let ce=1;ce<(U===0?f+1:ve);ce++){let ie=U===0?be===0?[{at:6,side:"right",layer:1}]:le===1?[{at:8,side:"right",layer:0}]:[]:[{at:f,side:t?"left":"right",layer:0}];for(let X of J(W,G,ie,2,{left:!0,right:!0,extraTrim:t&&U===0})){let me={...X};U===1&&me.trim==="right"&&me.start+me.pixels*Ae===W*Ae&&(me.trim=null);let Te=ce*Ae+((me.layer^G)===0?-Ke:0);for(let $e of F(me,U,Te,Ue))A(l.walls[le],$e,U===0?se:jn,U===0?Le[le]:Le[le].clone().negate(),U===0?jn:se,re.clone().addScaledVector(U===0?jn:se,ce*Ae),{kind:"wall",axis:U,index:ce},G,U===1||ce===f?Be:[])}}}if(be===0)for(let U=f+1;U<te;U++)for(let W of B(13))for(let G of F(W,0,U*Ae+(W.layer===0?-Ke:0),Ue))A(l.gables,G,Tn,Le[le],jn,re.clone().addScaledVector(jn,U*Ae),{kind:"gable",axis:0,index:U,wallId:_e},0,Be)}de(l.ceiling,13,15,new D(h,M+ut,g),"ceiling");let ae={left:h+n+ut,right:p-n-ut,rear:g+n+ut,front:y-n-ut};function oe(le,be,se,re,Se=[]){let ve=new Ze;ve.name=le,l.partitions.add(ve);let _e=be===0?new D(h,0,re):new D(re,0,g),Ue=be===0?Tn:Zn,U=be===0?Zn:Tn,W=Se.map(([G,ce])=>({id:`${le}-door-${G}`,kind:"door",u0:G*Ae+Ke,u1:ce*Ae-Ke,v0:bt,v1:6*Ae-Ke}));W.forEach(G=>Je(G,le,be,_e,re)),pe.partitions.push(...W),ve.userData={id:le,axis:be,start:be===0?h:g,end:(be===0?h:g)+se*Ae,fixed:re,depth:bt,holes:W,origin:{x:_e.x,y:0,z:_e.z}},q.push({...ve.userData,exterior:!1});for(let G=0;G<2;G++){let ce=G===0&&be===0?0:1,ie=G===0?se:f+(t?1:0),X=G===0?be===1?[{at:8,side:"right",layer:0}]:[]:t?[{at:f,side:"left",layer:0}]:[];for(let me=1;me<(G===0?f+(t?1:0):se);me++)for(let Te of J(ie,ce,X,2,{left:!0,right:!(t&&G===1),extraTrim:t&&G===0})){let $e={...Te};for(let Ge of F($e,G,me*Ae+(($e.layer^ce)===0?-Ke:0),W))A(ve,Ge,G===0?Ue:jn,G===0?U:U.clone().negate(),G===0?jn:Ue,_e.clone().addScaledVector(G===0?jn:Ue,me*Ae),{kind:"partition",wallId:le,axis:G,index:me},ce,t?[{n:jn,c:v}]:[])}}}oe("bedroom-right",1,15,ee,[[5,7],[10,12]]),oe("bedroom-front",0,6,he);let Me={id:"bedroom",name:"Sypialnia",x0:ae.left,x1:ee-ut,z0:ae.rear,z1:he-ut},P={id:"bathroom",name:"\u0141azienka",x0:ae.left,x1:we-ut,z0:he+ut,z1:ae.front},He=[{x:ee+ut,z:ae.rear},{x:ae.right,z:ae.rear},{x:ae.right,z:ae.front},{x:we+ut,z:ae.front},{x:we+ut,z:he+ut},{x:ee+ut,z:he+ut}],Re=le=>Math.abs(le.reduce((be,se,re)=>be+se.x*le[(re+1)%le.length].z-le[(re+1)%le.length].x*se.z,0))/2,Oe=[Me,P].map(le=>({...le,area:(le.x1-le.x0)*(le.z1-le.z0)}));Oe.push({id:"living",name:"Salon z kuchni\u0105",x0:we+ut,x1:ae.right,z0:ae.rear,z1:ae.front,polygon:He,area:Re(He)});let xe=g-Ae,T=17,_=-Ae/2,O=c/2+Ae,Q=Math.ceil((O/I-_)/Ae)+1,fe=L+ut/I,$=[],Ne=Array.from({length:14},(le,be)=>g+(be+1)*Ae);for(let le of[-1,1]){let be=new D(le*I,-E,0),se=new D(le*E,I,0),re=new D(0,fe,xe).addScaledVector(be,_),Se=new Ze;Se.name=le===-1?"roof-left":"roof-right",l.roof.add(Se);let ve=le===-1?[{n:Tn.clone(),c:0},{n:Tn.clone().negate(),c:O}]:[{n:Tn.clone().negate(),c:0},{n:Tn.clone(),c:O}];for(let _e=1;_e<T;_e++){let Ue=xe+_e*Ae;le===-1&&$.push(Ue);for(let U of B(Q)){let W={...U,trim:null};A(Se,W,be,se,Zn,re.clone().addScaledVector(Zn,_e*Ae),{kind:"roof-slope",axis:0,index:_e,roofSide:le,detail:"Mitre and eave ends are angled cuts"},le===-1?0:1,ve)}}for(let _e=1;_e<Q;_e++)for(let Ue of B(T))A(Se,Ue,Zn,se.clone().negate(),be,re.clone().addScaledVector(be,_e*Ae),{kind:"roof-cross",axis:1,index:_e,roofSide:le},0,ve)}N.usableConceptArea=Oe.reduce((le,be)=>le+be.area,0),N.structuralFootprintArea=c*d,N.terraceArea=c*u,ue.push({id:"edge-floor",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",description:"D\u0142ugi pion zajmuje miejsce po zako\u0144czeniu pod\u0142ogi. Kr\xF3tki pion opiera si\u0119 na pe\u0142nej desce.",position:[h+3*Ae,bt/2,y-ut],planeAxis:0,viewDirection:[1.4,1.1,1.5],members:[{surface:l.floor.name,axis:1,index:3},{surface:"front",axis:1,index:3}]},{id:"terrace",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",description:"Pe\u0142ny wpust na ko\u0144cu deski i zako\u0144czenie kr\xF3tsze o dodatkowe 18 mm ods\u0142aniaj\u0105 miejsce na poprzeczne \u017Cebro pod\u0142ogi.",position:[h+7*Ae,bt/2,g+ut],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:l.floor.name,axis:1,index:7},{surface:"rear",axis:1,index:7}],crossingMembers:[{surface:l.floor.name,axis:0,index:7}]},{id:"interior-floor",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",description:"D\u0142ugo\u015Bci zako\u0144cze\u0144 i pe\u0142ny wpust tworz\u0105 miejsce na \u015Bcian\u0119 oraz poprzeczne \u017Cebro pod\u0142ogi.",position:[ee,bt/2,g+3*Ae],planeAxis:2,viewDirection:[1.2,1,1.8],members:[{surface:l.floor.name,axis:0,index:10},{surface:"bedroom-right",axis:1,index:3}],crossingMembers:[{surface:l.floor.name,axis:1,index:6}]},{id:"wall-wall",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",description:"Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie pozwalaj\u0105 po\u0142\u0105czy\u0107 obie \u015Bciany bez bocznych wybra\u0144.",position:[ee,3*Ae,g+ut],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"rear",axis:0,index:3},{surface:"bedroom-right",axis:0,index:3}],crossingMembers:[{surface:"rear",axis:1,index:6}]},{id:"partition-t",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",description:"Przegroda poprzeczna zamyka si\u0119 w warstwach ci\u0105g\u0142ej \u015Bciany. D\u0142ugo\u015Bci zako\u0144cze\u0144 pozostawiaj\u0105 miejsce na pion.",position:[ee,3*Ae,he],planeAxis:1,viewDirection:[1.1,1.8,1.4],members:[{surface:"bedroom-right",axis:0,index:3},{surface:"bedroom-front",axis:0,index:3}],crossingMembers:[{surface:"bedroom-right",axis:1,index:8}]},{id:"ceiling-wall",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",description:"Strop le\u017Cy na poziomym rz\u0119dzie \u015Bciany. Pe\u0142ny wpust ko\u0144czy doln\u0105 desk\u0119, a g\xF3rne zako\u0144czenie zaczyna si\u0119 258 mm od osi w\u0119z\u0142a.",position:[h+ut,M+ut,g+9*Ae],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"left",axis:1,index:9},{surface:l.ceiling.name,axis:0,index:9}],crossingMembers:[{surface:"left",axis:0,index:f}]},{id:"connector-120",title:"Strop na poziomym \u017Cebrze \u2014 drugi kierunek",description:"Tak\u017Ce w drugim kierunku strop le\u017Cy nad poziomym \u017Cebrem \u015Bciany. Po\u0142\u0105czenie wynika z d\u0142ugo\u015Bci desek.",position:[h+3*Ae,M+ut,y-ut],planeAxis:0,viewDirection:[1.6,1,1.3],members:[{surface:"front",axis:1,index:3},{surface:l.ceiling.name,axis:1,index:3}],crossingMembers:[{surface:"front",axis:0,index:f}]},{id:"ceiling-partition",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",description:"Strop opiera si\u0119 na poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Pe\u0142ny wpust i kr\xF3tsze zako\u0144czenie utrzymuj\u0105 wsp\xF3ln\u0105 lini\u0119 \u017Ceber.",position:[ee,M+ut,g+3*Ae],planeAxis:2,viewDirection:[1.3,1,1.7],members:[{surface:"bedroom-right",axis:1,index:3},{surface:l.ceiling.name,axis:0,index:3}],crossingMembers:[{surface:l.ceiling.name,axis:1,index:6}]});let ye={module:Ae,stockMaxLength:2.5,terminalDifference:bt,pairWidth:2*Ke,junctionsCoplanar:!0,floorTerraceContinuous:!0,partitionGroundY:0,partitionShortY:bt,exteriorVerticalSlots:"outward",ceilingModule:f,ceilingTop:v,roofPitchDegrees:35,roofAxes:$,wallAxes:Ne,roofAxesAligned:Ne.every(le=>$.some(be=>Math.abs(be-le)<D_)),connectorBoards:k.filter(le=>le.connectorCuts.length).length,jointStrategy:t?"full-end-slot":"lateral-cuts",fullEndSlotMm:t?36:null,additionalEndTrimMm:t?18:0,ceilingOnWallCap:t,connectorVariants:t?[]:[{position:"corner",edge:"slotted",removedMm:[18,102]},{position:"corner",edge:"plain",removedMm:[18,120]},{position:"inset",edge:"slotted",removedMm:[18,120],offsetMm:120},{position:"inset",edge:"plain",removedMm:[18,120],offsetMm:120}],restoredBoundaryRibs:["terrace-floor-cross-row","divider-floor-cross-row","exterior-wall-cap-rows","interior-wall-tangent-floor-and-ceiling-ribs","wall-to-wall-uprights"],remainingJunctionAssumptions:t?"Geometric model only; joint strength and erection stability are not verified.":"Interior wall cap rows omitted in the lateral-cut layout.",loadValidated:!1};return o.updateMatrixWorld(!0),{root:o,groups:l,openings:pe,rooms:Oe,dimensions:N,boards:k,joints:ue,wallPanels:q,validation:ye}}var Ci=(...i)=>new D(...i);function Pf(i,e,t){let n=new Ze;n.name="Wn\u0119trze \u2014 ods\u0142aniana \u015Bciana";let{module:r,boardDepth:s,boardThickness:o,halfWidth:a,halfDepth:l,floorTop:c,clearHeight:d}=i.dimensions,u=10*r,h=d,p=-u/2,g=u/2,y=Ci(-a+s/2,c,-l+7*r),m=new rt().makeRotationY(-Math.PI/2).multiply(new rt().makeTranslation(-y.x,-y.y,-y.z)),f=new zt(Ci(p,0,-s/2-.001),Ci(g,h,s/2+.001)),S=[],M=[],v=[],C=[],E,I=0,b=0,x=(W,G=.85,ce={})=>new Et({color:W,roughness:G,...ce}),L=x("#e0e0d9"),R=x("#f4f3ec",.24),N=x("#303b35",.3,{metalness:.6}),z=x("#ae885a"),k=x("#c49b62"),B=new Jt({color:"#685137",transparent:!0,opacity:.42}),F=x("#ecece5"),A=x("#bcbcb0"),V=(W,G,ce,ie,X,me,Te,$e)=>{let Ge=new lt(new on(G,ce,ie),$e);return Ge.position.set(X,me,Te),W.add(Ge),Ge},q=(W,G,ce)=>(W.userData.info=G,W.userData.kind=ce,S.push(W),W),ue=W=>{let G=document.createElement("canvas");G.width=512,G.height=512;let ce=G.getContext("2d"),ie=35,X=()=>(ie=Math.imul(ie,1664525)+1013904223>>>0,ie/4294967296);ce.fillStyle=W==="wood"?"#b89670":"#d0c8ae",ce.fillRect(0,0,512,512);for(let Te=0;Te<(W==="wood"?1200:9500);Te++){let $e=X()*512,Ge=X()*512;ce.lineWidth=.4+X(),ce.strokeStyle=W==="wood"?Te%2?"#ac875c55":"#d6b68d66":Te%3?"#f0e9d444":"#9f96744a",ce.beginPath(),ce.moveTo($e,Ge),ce.lineTo($e+(W==="wood"?1:(X()-.5)*17),Ge+(W==="wood"?50+X()*100:(X()-.5)*18)),ce.stroke()}let me=new di(G);return me.colorSpace=Ft,me},pe=x("#e8dac5",.84,{map:ue("wood")}),J=x("#eee7d3",1,{map:ue("fiber")});function ee(W){let G=W.index?W.toNonIndexed():W.clone(),ce=G.attributes.position,ie=[];for(let me=0;me<ce.count;me+=3){let Te=[0,1,2].map($e=>Ci().fromBufferAttribute(ce,me+$e));for(let[$e,Ge,cn]of[[0,p,1],[0,g,-1],[1,0,1],[1,h,-1]]){let en=[];for(let ei=0;ei<Te.length;ei++){let ir=Te[ei],Wo=Te[(ei+1)%Te.length],rr=(ir.getComponent($e)-Ge)*cn,Us=(Wo.getComponent($e)-Ge)*cn;rr>=0&&en.push(ir),rr>=0!=Us>=0&&en.push(ir.clone().lerp(Wo,rr/(rr-Us)))}Te=en}for(let $e=1;$e<Te.length-1;$e++)ie.push(...Te[0].toArray(),...Te[$e].toArray(),...Te[$e+1].toArray())}G.dispose();let X=new mt;return X.setAttribute("position",new ct(ie,3)),X.computeVertexNormals(),X}for(let W of i.boards.filter(G=>G.surface==="left")){let G=W.mesh.geometry.clone().translate(...W.mesh.position.toArray()).applyMatrix4(m);if(G.computeBoundingBox(),!G.boundingBox.intersectsBox(f)){G.dispose();continue}let ce=ee(G);if(G.dispose(),!ce.attributes.position.count){ce.dispose();continue}let ie=new lt(ce,k);ie.add(new un(new an(ce,30),B)),n.add(ie),q(ie,{...t(W),detailLabel:"Grubo\u015B\u0107 p\u0142yty",detail:"18 mm"},"structure"),M.push(ie)}for(let W=2;W<12;W++)for(let G=0;G<8;G++){let ce=(7-W-.5)*r,ie=(G+.5)*r-c,X=Math.max(0,ie-(r-2*o)/2),me=Math.min(h,ie+(r-2*o)/2);if(me-X<.045)continue;let Te=V(n,r-2*o-.007,me-X-.006,s-.025,ce,(X+me)/2,-.007,J);q(Te,{id:`C30-IZ-${W.toString().padStart(2,"0")}${G}`,type:"Kostka izolacji",surface:"Komora \u015Bciany zewn\u0119trznej",length:`${Math.round((r-2*o-.007)*1e3)} \xD7 ${Math.round((me-X-.006)*1e3)} mm`,metricLabel:"Wymiary w widoku",detailLabel:"Warstwa",detail:"Izolacja mi\u0119dzy \u017Cebrami"},"insulation"),C.push(Te)}V(n,u,h,.018,0,h/2,-.14,A);function we(W,G,ce,ie){let X=new fs,me=G.map(Ge=>Ci(...Ge)),Te=me[0];for(let Ge=1;Ge<me.length-1;Ge++){let cn=Math.min(.07,me[Ge].distanceTo(me[Ge-1])/3,me[Ge].distanceTo(me[Ge+1])/3),en=me[Ge].clone().addScaledVector(me[Ge-1].clone().sub(me[Ge]).normalize(),cn),ei=me[Ge].clone().addScaledVector(me[Ge+1].clone().sub(me[Ge]).normalize(),cn);X.add(new xr(Te,en)),X.add(new yr(en,me[Ge],ei)),Te=ei}X.add(new xr(Te,me[me.length-1]));let $e=new lt(new mo(X,Math.max(16,Math.ceil(X.getLength()*55)),ce,10,!1),ie);return W.add($e),$e}let he=x("#327d9f",.48),Y=x("#b65744",.48),de=x("#c18c2d",.58),ne=x("#687572",.72),De=(W,G,ce,ie,X,me)=>{let Te=we(n,ce,ie,X);return q(Te,{id:W,type:G,surface:"Warstwa instalacyjna od wn\u0119trza",length:me==="power"?"Gniazda i o\u015Bwietlenie":"Przy\u0142\u0105cze umywalki",metricLabel:"Przeznaczenie",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},me),v.push(Te),Te};De("C30-W-01","Zimna woda",[[-1.42,2.72,.157],[-1.42,.65,.157],[-1.26,.65,.157],[-1.26,.65,.42]],.012,he,"water"),De("C30-W-02","Ciep\u0142a woda",[[-1.3,2.72,.19],[-1.3,.58,.19],[-1.15,.58,.19],[-1.15,.65,.19],[-1.15,.65,.42]],.012,Y,"water"),De("C30-K-01","Odp\u0142yw umywalki",[[-.57,.07,.174],[-.57,.65,.174],[-1.09,.65,.174],[-1.09,.65,.53]],.026,ne,"water"),De("C30-E-01","Przew\xF3d do gniazd",[[1.6,2.3,.22],[1.13,2.3,.22],[1.13,.47,.22],[1.13,.47,.253]],.01,de,"power"),De("C30-E-02","Przew\xF3d do o\u015Bwietlenia",[[-1.17,2.56,.3],[-1.17,2.56,.22],[1.6,2.56,.22],[1.6,2.3,.22],[1.76,2.3,.22],[1.76,1.24,.22],[1.4,1.24,.22],[1.4,1.24,.253]],.01,de,"power");let Le=V(n,.13,.12,.055,1.6,2.3,.191,x("#475751"));q(Le,{id:"C30-E-03",type:"Puszka instalacyjna",surface:"Warstwa instalacyjna od wn\u0119trza",length:"Instalacja elektryczna",metricLabel:"Obw\xF3d",detailLabel:"Po\u0142o\u017Cenie",detail:"Przed rdzeniem konstrukcji"},"power"),v.push(Le),V(n,u+.32,.12,1.82,0,-.06,.7,pe);let ze=x("#927d63");for(let W=p;W<g;W+=.19)V(n,.001,.001,1.8,W,.001,.7,ze);let Je=.249,Be=.025,te=p+.16,ae=g-.16,oe=.22,Me=h-.22;V(n,u,.22,Be,0,.11,Je,L),V(n,u,.22,Be,0,h-.11,Je,L),V(n,.16,Me-oe,Be,p+.08,(Me+oe)/2,Je,L),V(n,.16,Me-oe,Be,g-.08,(Me+oe)/2,Je,L);let P=V(n,1,Me-oe,Be,0,(Me+oe)/2,Je,L);q(P,{id:"C30-WYK-01",type:"Malowana ok\u0142adzina \u015Bciany",surface:"\u015Aciana od strony wn\u0119trza",length:"Wyko\u0144czenie wn\u0119trza",metricLabel:"Warstwa",detailLabel:"Pod spodem",detail:"Konstrukcja, izolacja i instalacje"},"finish"),V(n,.09,h,.75,g+.045,h/2,.54,L),V(n,u+.06,.07,.65,0,h+.035,.45,L),V(n,u,.095,.022,0,.047,.278,F),V(n,.022,.095,.65,g-.01,.047,.61,F);let Re=V(n,.007,Me-oe,.032,te,(oe+Me)/2,.255,x("#43948c")),Oe=new Ze;n.add(Oe),V(Oe,.79,1.03,.014,-1.17,1.8,.27,N);let xe=document.createElement("canvas");xe.width=64,xe.height=128;let T=xe.getContext("2d"),_=T.createLinearGradient(0,0,64,128);_.addColorStop(0,"#8caaa5"),_.addColorStop(.5,"#cfdbd3"),_.addColorStop(.51,"#acb7ad"),_.addColorStop(1,"#c5bda5"),T.fillStyle=_,T.fillRect(0,0,64,128);let O=new di(xe);O.colorSpace=Ft;let Q=new ci({map:O});V(Oe,.75,.99,.004,-1.17,1.8,.279,Q);let fe=new gn(Ci(1,0,0),-te);Oe.traverse(W=>{W.isMesh&&(W.material=W.material.clone(),W.material.clippingPlanes=[fe])});let $=new Ze;n.add($),V($,1,.43,.43,-1.17,.51,.51,z),V($,1.06,.035,.48,-1.17,.742,.52,R);let Ne=x("#8c6944");for(let W=-1.63;W<-.7;W+=.035)V($,.009,.39,.008,W,.51,.729,Ne);let ye=new Gi;ye.absellipse(0,0,.34,.2,0,Math.PI*2,!1);let le=new vr;le.absellipse(0,0,.285,.155,0,Math.PI*2,!0),ye.holes.push(le);let be=new Sr(ye,{depth:.11,bevelEnabled:!0,bevelThickness:.01,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:36});be.rotateX(-Math.PI/2);let se=new lt(be,R);se.position.set(-1.17,.765,.52),$.add(se);let re=new lt(new Ei(.282,.25,.018,40),R);re.scale.z=.55,re.position.set(-1.17,.772,.52),$.add(re),we($,[[-1.17,.79,.32],[-1.17,1.03,.32],[-1.17,1.03,.49]],.016,N),V($,.045,.012,.032,-1.17,1.062,.335,N);let Se=(W,G,ce=!1)=>{let ie=V(n,.135,.11,.019,W,G,.277,F);if(ce)V(n,.09,.07,.009,W,G,.292,L);else for(let X of[-.032,.032]){let me=new lt(new Ei(.026,.026,.007,20),L);me.rotation.x=Math.PI/2,me.position.set(W+X,G,.291),n.add(me);for(let Te of[-.008,.008])V(n,.006,.006,.004,W+X,G+Te,.297,N)}return ie};Se(1.13,.47),Se(1.4,1.24,!0),V(n,.42,.036,.07,-1.17,2.57,.3,N),V(n,.38,.008,.055,-1.17,2.548,.31,x("#fff3cd",.4,{emissive:"#ffe2a3",emissiveIntensity:.6}));let ve=new vo(new zt,2653304);ve.visible=!1,n.add(ve);function _e(W){E=W,ve.visible=W!==P,n.updateMatrixWorld(!0),ve.visible&&ve.box.setFromObject(W),e(W.userData.info)}function Ue(W){if(W===P)return P.visible;if(I<=.001)return!1;W.geometry.computeBoundingBox();let G=W.geometry.boundingBox.clone().applyMatrix4(W.matrixWorld);return G.max.x>te&&G.min.x<te+(ae-te)*I&&G.max.y>oe&&G.min.y<Me}function U(W){I=qn.clamp(W,0,1);let G=te+(ae-te)*I,ce=ae-G;P.scale.x=ce,P.position.x=(G+ae)/2,P.visible=ce>1e-5,fe.constant=-G,Oe.visible=G<-1.17+.395,Re.position.x=G,Re.visible=I>.005&&I<.995,E&&E!==P&&!Ue(E)&&_e(P)}return U(0),_e(P),{root:n,direction:Ci(.48,.2,3),focus:new zt(Ci(p-.1,-.1,-.16),Ci(g+.12,h+.1,1.08)),annotation:"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",finish:U,selectAt(W){n.updateMatrixWorld(!0);let G=W.intersectObjects(n.children,!0).find(ce=>{if(!ce.object.isMesh)return!1;for(let ie=ce.object;ie;ie=ie.parent)if(!ie.visible)return!1;return!(ce.object.material.clippingPlanes||[]).some(ie=>ie.distanceToPoint(ce.point)<0)});G?.object.userData.info&&_e(G.object)},next(){let W=S.filter(Ue);W.length&&_e(W[++b%W.length])},getSelected(){return E?.userData.info},getWallState(){return{reveal:I,boardCount:M.length,insulationCount:C.length,serviceCount:v.length,coverWidth:P.scale.x,insideFacing:!0}}}}var ft=(...i)=>new D(...i),Dr=ft(1,0,0),Qi=ft(0,1,0),Lr=ft(0,0,1),pc=bt/2,Jn=new Et({color:"#cba36b",roughness:.8,side:Dt}),Ts=new Et({color:"#43948c",roughness:.75,side:Dt}),nh=new Et({color:"#94784e",roughness:.85,side:Dt}),If=new Jt({color:"#66543a",transparent:!0,opacity:.5}),Df=new Et({color:"#287c78",roughness:.7,side:Dt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),L_=new Set([Jn,Ts,nh,If,Df]);function Lf(i){let e=new Set;i.traverse(t=>{t.geometry?.dispose();for(let n of t.material?Array.isArray(t.material)?t.material:[t.material]:[])L_.has(n)||e.add(n)});for(let t of e)t.map?.dispose(),t.dispose()}var Uo;function Nr(){return Uo||(Uo=th({wood:Jn,end:Jn}),Uo.root.updateMatrixWorld(!0),Uo.boards.forEach(i=>{i.mesh.geometry.computeBoundingBox(),i.bounds=i.mesh.geometry.boundingBox.clone().translate(i.mesh.position)})),Uo}function Oo(i=6,e={}){let t=fc({},{},{connectors:!1}),n=new Ze,s=t.addBoard(n,{pixels:i,start:0,layer:0,...e},Dr,Qi,Lr,ft()).geometry;return s.translate(0,0,-Ke/2),s}function gc(i,e=Jn){let t=new lt(i,e);return t.add(new un(new an(i,30),If)),t}function N_(i){return uc(i).map(e=>({start:e.start,n:e.pixels,ply:e.layer,trim:e.trim}))}function Fo(i,e,t,n,r,s,o=Jn){for(let a of N_(e)){let l=Oo(a.n,{trim:a.trim}),c=new rt().makeBasis(n,r,s);l.applyMatrix4(c);let d=gc(l,o);d.position.copy(t).addScaledVector(n,a.start).addScaledVector(s,(a.ply-.5)*Ke),d.userData.ply=a.ply,d.userData.slotDirection=r.toArray(),i.add(d)}}function U_(i,e,t){i.add(new Er(t,e,.36,2653304,.095,.048))}function F_(i){let e=new Ze,t=6*Ae,n=10*Ae,r=new Ze,s=new Ze,o=new Ze;e.add(r,s,o);for(let c=1;c<10;c++)Fo(r,6,ft(-t/2,0,-n/2+c*Ae),Dr,Qi,Lr,Ts);for(let c=1;c<6;c++)Fo(s,10,ft(-t/2+c*Ae,0,-n/2),Lr,Qi.clone().negate(),Dr,Jn);for(let c of[-n/2+Ae,0,n/2-Ae])U_(o,ft(-t/2+Ae,.16,c),Qi);let a=new _r(new mt().setFromPoints([ft(-t/2,0,-n/2-.12),ft(t/2,0,-n/2-.12)]),new Jt({color:2653304}));e.add(a),i==="wall"&&e.quaternion.setFromRotationMatrix(new rt().makeBasis(Qi,Lr,Dr)),i==="roof"&&(e.rotation.z=-35*Math.PI/180);let l=i==="wall"?ft(1.5,1,2.6):ft(1.4,1.7,1.9);return{root:e,arrows:o,direction:l,annotation:i==="wall"?"Wpusty pion\xF3w \u2192 na zewn\u0105trz domu":i==="roof"?"Turkus: kr\xF3tszy kierunek po\u0142aci \xB7 wpusty do pokrycia":"Turkus: kr\xF3tszy kierunek no\u015Bny \xB7 wpusty do g\xF3ry",spread(c){s.position.y=c*.65}}}function mc(i,e,{crossing:t=[],plane:n=1,direction:r=ft(1.1,1.8,1.4),size:s=1.05}={}){let o=new Ze,a=new Ze,l=new Ze;o.add(a,l);let c=Nr(),d=(u,h)=>u.surface===h.surface&&u.axis===h.axis&&u.index===h.index;for(let u of c.boards){let h=i.findIndex(y=>d(u,y)),p=t.some(y=>d(u,y));if(h<0&&!p||u.bounds.distanceToPoint(e)>.5)continue;let g=gc(u.mesh.geometry.clone(),p?nh:i[h].material||(h===0?Jn:Ts));g.position.copy(u.mesh.position).sub(e),g.userData.boardId=u.id,g.userData.base=g.position.clone(),g.userData.sign=u.bounds.getCenter(ft()).getComponent(n)<e.getComponent(n)?-1:1,(p?l:a).add(g)}return l.visible=!1,{root:o,direction:r,focus:new zt(ft(-s/2,-s/2,-s/2),ft(s/2,s/2,s/2)),spread(u){for(let h of a.children)h.position.copy(h.userData.base),h.position.setComponent(n,h.position.getComponent(n)+h.userData.sign*u*.2);l.visible=!1},crossing(u){l.visible=u}}}function Nf(i,e){if(["slab","wall","roof"].includes(i.scene))return F_(i.scene);if(i.scene==="beam"||i.scene==="connectors"){let r=new Ze,s=gc(Oo(e?.modules||6,e||{}),Ts);return s.position.x=-3*Ae,r.add(s),{root:r,direction:ft(.5,.6,3),annotation:i.scene==="connectors"?e.description:"Deska grzebieniowa \xB7 naci\u0119cia do po\u0142owy wysoko\u015Bci"}}if(i.scene==="continuity"){let r=new Ze;return Fo(r,12,ft(-6*Ae,0,0),Dr,Qi,Lr,Jn),r.children.forEach(s=>s.material=s.userData.ply?Ts:Jn),{root:r,direction:ft(.6,.85,3),spread(s){r.children.forEach(o=>o.position.z=(o.userData.ply-.5)*(Ke+s*.42))},annotation:"Dwie warstwy \xB7 przesuni\u0119cie styk\xF3w o 2 modu\u0142y"}}if(i.scene==="cross"){let r=new Ze,s=new Ze,o=new Ze;return r.add(s,o),Fo(s,4,ft(-2*Ae,0,0),Dr,Qi,Lr,Ts),Fo(o,4,ft(0,0,-2*Ae),Lr,Qi.clone().negate(),Dr,Jn),{root:r,direction:ft(1.4,1.6,2),spread(a){o.position.y=a*.65},annotation:"Wpusty przeciwnych rodzin \u017Ceber otwieraj\u0105 si\u0119 w przeciwne strony"}}let t=Nr(),n=t.dimensions;if(i.scene==="joint"){let r=t.joints.find(s=>s.id===i.joint);return mc(r.members,ft(...r.position),{crossing:r.crossingMembers||[],plane:r.planeAxis,direction:ft(...r.viewDirection)})}return i.scene==="corner"?mc([{surface:"front",axis:0,index:3},{surface:"right",axis:0,index:3}],ft(n.halfWidth-pc,3*Ae,n.halfDepth-pc),{plane:1,direction:ft(1.4,2,1.6)}):i.scene==="roof-wall"?mc([{surface:"right",axis:1,index:3},{surface:"roof-right",axis:0,index:4},{surface:"Sufit",axis:0,index:3,material:nh}],ft(n.halfWidth-pc,n.ceilingTop,-n.halfDepth+3*Ae),{plane:2,direction:ft(1.5,1.2,2),size:1.2}):mc([{surface:"roof-left",axis:0,index:8},{surface:"roof-right",axis:0,index:8}],ft(0,n.roofUnderRidgeY+pc,-n.halfDepth+7*Ae),{plane:2,direction:ft(1.4,1.3,2.4),size:1.3})}var z_={rear:"\u015Aciana zewn\u0119trzna od tarasu",front:"\u015Aciana zewn\u0119trzna od wej\u015Bcia",left:"Lewa \u015Bciana zewn\u0119trzna",right:"Prawa \u015Bciana zewn\u0119trzna","bedroom-right":"\u015Aciana wewn\u0119trzna","bedroom-front":"Przegroda sypialni i \u0142azienki","roof-left":"Lewa po\u0142a\u0107 dachu","roof-right":"Prawa po\u0142a\u0107 dachu"};function zo(i){let e=1/0,t=-1/0,n=new D(...i.along),r=i.mesh.geometry.getAttribute("position");for(let s=0;s<r.count;s++){let o=ft().fromBufferAttribute(r,s).dot(n);e=Math.min(e,o),t=Math.max(t,o)}return{id:`C30-${i.id.replace("board-","").padStart(4,"0")}`,type:i.connectorCuts.length?"Deska \u0142\u0105czeniowa":i.trim?"Deska zako\u0144czeniowa":i.custom?"Deska dopasowana do otworu lub skosu":"Deska grzebieniowa",surface:z_[i.surface]||i.surface,length:Math.round((t-e)*1e3)+" mm"}}function Uf(i,e){let t=Nr();if(i==="wall")return Pf(t,e,zo);let n=new Ze,r=t.boards,s=r.map(d=>(d.mesh.geometry.index?d.mesh.geometry.toNonIndexed():d.mesh.geometry.clone()).translate(...d.mesh.position.toArray())),o=No(s,!1);s.forEach(d=>d.dispose()),n.add(gc(o,Jn));let a=new lt(new mt,Df);n.add(a);let l,c=d=>{l=d,a.geometry.dispose(),a.geometry=d.mesh.geometry.clone(),a.position.copy(d.mesh.position),e(zo(d))};return c(r.find(d=>d.surface==="left"&&d.axis===1&&d.index===4&&d.start===0)||r[0]),{root:n,direction:ft(1.4,1,1.5),annotation:"Wybierz element, aby zobaczy\u0107 jego identyfikator",selectAt(d){let u=r.filter(h=>d.ray.intersectsBox(h.bounds)).flatMap(h=>d.intersectObject(h.mesh,!1).map(p=>({b:h,d:p.distance}))).sort((h,p)=>h.d-p.d);u[0]&&c(u[0].b)},next(){c(r[(r.indexOf(l)+1)%r.length])},getSelected(){return zo(l)}}}var As={model:"Combstruct 30",totalBoards:1398,material:{lengthM:2150.173969464595,fullBoardLengthM:2.5,fullBoardEquivalents:860.0695877858379,fullBoards:861,sheets:173},geometrySha256:"eefdd78c29065835c89cf8bd33458e5d9adf814e6205c21f30fbc1eb52bbfec3",toleranceM:5e-5,families:[{id:"standard",name:"Deska zwyk\u0142a",count:927,lengths:{"3":95,"4":242,"5":425,"6":165},sample:"board-147"},{id:"ending",name:"Deska zako\u0144czeniowa",count:471,lengths:{"3":106,"4":270,"5":77,"6":18},sample:"board-1232"}],assembly:[["board-1",null],["board-2",null],["board-3",null],["board-4",null],["board-5",null],["board-6",null],["board-7",null],["board-8",null],["board-9",null],["board-10",null],["board-11",null],["board-12",null],["board-13",null],["board-14",null],["board-15",null],["board-16",null],["board-17",null],["board-18",null],["board-19",null],["board-20",null],["board-21",null],["board-22",null],["board-23",null],["board-24",null],["board-25",null],["board-26",null],["board-27",null],["board-28",null],["board-29",null],["board-30",null],["board-31",null],["board-32",null],["board-33",null],["board-34",null],["board-35",null],["board-36",null],["board-37",null],["board-38",null],["board-39",null],["board-40",null],["board-41",null],["board-42",null],["board-43",null],["board-44",null],["board-45",null],["board-46",null],["board-47",null],["board-48",null],["board-49",null],["board-50",null],["board-51",null],["board-52",null],["board-53",null],["board-54",null],["board-55",null],["board-56",null],["board-57",null],["board-58",null],["board-59",null],["board-60",null],["board-61",null],["board-62",null],["board-63",null],["board-64",null],["board-65",null],["board-66",null],["board-67",null],["board-68",null],["board-69",null],["board-70",null],["board-71",null],["board-72",null],["board-73",null],["board-74",null],["board-75",null],["board-76",null],["board-77",null],["board-78",null],["board-79",null],["board-80",null],["board-81",null],["board-82",null],["board-83",null],["board-84",null],["board-85",null],["board-86",null],["board-87",null],["board-88",null],["board-89",null],["board-90",null],["board-91",null],["board-92",null],["board-93",null],["board-94",null],["board-95",null],["board-96",null],["board-97",null],["board-98",null],["board-99",null],["board-100",null],["board-101",null],["board-102",null],["board-103",null],["board-104",null],["board-105",null],["board-106",null],["board-107",null],["board-108",null],["board-109",null],["board-110",null],["board-111",null],["board-112",null],["board-113",null],["board-114",null],["board-115",null],["board-116",null],["board-117",null],["board-118",null],["board-119",null],["board-120",null],["board-121",null],["board-122",null],["board-123",null],["board-124",null],["board-125",null],["board-126",null],["board-127",null],["board-128",null],["board-129",null],["board-130",null],["board-131",null],["board-132",null],["board-133",null],["board-134",null],["board-135",null],["board-136",null],["board-137",null],["board-138",null],["board-139",null],["board-140",null],["board-141",null],["board-142",null],["board-143",null],["board-144",null],["board-145",null],["board-146",null],["board-147",null],["board-148",null],["board-149",null],["board-150",null],["board-151",null],["board-152",null],["board-153",null],["board-154",null],["board-155",null],["board-156",null],["board-157",null],["board-158",null],["board-159",null],["board-160",null],["board-161",null],["board-162",null],["board-163",null],["board-164",null],["board-165",null],["board-166",null],["board-167",null],["board-168",null],["board-169",null],["board-170",null],["board-171",null],["board-172",null],["board-173",null],["board-174",null],["board-175",null],["board-176",null],["board-177",null],["board-178",null],["board-179",null],["board-180",null],["board-181",null],["board-182",null],["board-183",null],["board-184",null],["board-185",null],["board-186",null],["board-187",null],["board-188",null],["board-189",null],["board-190",null],["board-191",null],["board-192",null],["board-193",null],["board-194",null],["board-195",null],["board-196",null],["board-197",null],["board-198",null],["board-199",null],["board-200",null],["board-201",null],["board-202",null],["board-203",null],["board-204",null],["board-205",null],["board-206",null],["board-207",null],["board-208",null],["board-209",null],["board-210",null],["board-211",null],["board-212",null],["board-213",null],["board-214",null],["board-215",null],["board-216",null],["board-217",null],["board-218",null],["board-219",null],["board-220",null],["board-221",null],["board-222",null],["board-223",null],["board-224",null],["board-225",null],["board-226",null],["board-227",null],["board-228",null],["board-229",null],["board-230",null],["board-231",null],["board-232",null],["board-233",null],["board-234",null],["board-235",null],["board-236",null],["board-237",null],["board-238",null],["board-239",null],["board-240",null],["board-241",null],["board-242",null],["board-243",null],["board-244",null],["board-245",null],["board-246",null],["board-247",null],["board-248",null],["board-249",null],["board-250",null],["board-251",null],["board-252",null],["board-253",null],["board-368",null],["board-373",null],["board-378",null],["board-645",null],["board-651",null],["board-1086",null],["board-1105",null],["board-323",null],["board-329",null],["board-335",null],["board-767",null],["board-772",null],["board-777",null],["board-613",null],["board-669",null],["board-318",null],["board-342",null],["board-349",null],["board-356",null],["board-363",null],["board-384",null],["board-469",null],["board-474",null],["board-479",null],["board-484",null],["board-489",null],["board-494",null],["board-499",null],["board-504",null],["board-509",null],["board-514",null],["board-519",null],["board-524",null],["board-529",null],["board-534",null],["board-608",null],["board-619",null],["board-625",null],["board-632",null],["board-639",null],["board-657",null],["board-663",null],["board-675",null],["board-752",null],["board-757",null],["board-762",null],["board-782",null],["board-787",null],["board-792",null],["board-797",null],["board-802",null],["board-807",null],["board-812",null],["board-817",null],["board-1067",null],["board-1071",null],["board-1075",null],["board-1079",null],["board-1083",null],["board-1090",null],["board-1094",null],["board-1098",null],["board-1102",null],["board-1109",null],["board-1113",null],["board-1117",null],["board-1145",null],["board-1149",null],["board-1153",null],["board-1157",null],["board-1161",null],["board-320","board-37"],["board-326","board-37"],["board-332","board-37"],["board-764","board-67"],["board-769","board-74"],["board-774","board-81"],["board-610","board-156"],["board-666","board-240"],["board-315","board-37"],["board-338","board-38"],["board-345","board-38"],["board-352","board-38"],["board-359","board-38"],["board-381","board-39"],["board-466","board-47"],["board-471","board-54"],["board-476","board-61"],["board-481","board-68"],["board-486","board-75"],["board-491","board-82"],["board-496","board-89"],["board-501","board-96"],["board-506","board-103"],["board-511","board-110"],["board-516","board-117"],["board-521","board-124"],["board-526","board-131"],["board-531","board-138"],["board-605","board-146"],["board-616","board-166"],["board-622","board-176"],["board-628","board-186"],["board-635","board-195"],["board-654","board-222"],["board-660","board-231"],["board-672","board-249"],["board-749","board-46"],["board-754","board-53"],["board-759","board-60"],["board-779","board-88"],["board-784","board-95"],["board-789","board-102"],["board-794","board-109"],["board-799","board-116"],["board-804","board-123"],["board-809","board-130"],["board-814","board-137"],["board-1065","board-44"],["board-1069","board-51"],["board-1073","board-58"],["board-1077","board-65"],["board-1081","board-72"],["board-1088","board-86"],["board-1092","board-93"],["board-1096","board-100"],["board-1100","board-107"],["board-1107","board-121"],["board-1111","board-128"],["board-1115","board-135"],["board-1143","board-144"],["board-1147","board-154"],["board-1151","board-164"],["board-1155","board-174"],["board-1159","board-184"],["board-258","board-315"],["board-259","board-258"],["board-260","board-259"],["board-261","board-381"],["board-410","board-258"],["board-411","board-410"],["board-412","board-501"],["board-413","board-412"],["board-541","board-413"],["board-542","board-541"],["board-543","board-654"],["board-701","board-261"],["board-702","board-701"],["board-703","board-702"],["board-994","board-259"],["board-995","board-994"],["board-996","board-1088"],["board-997","board-1092"],["board-998","board-542"],["board-1121","board-411"],["board-254","board-258"],["board-255","board-254"],["board-256","board-259"],["board-257","board-261"],["board-414","board-258"],["board-415","board-411"],["board-416","board-412"],["board-536","board-413"],["board-537","board-536"],["board-538","board-542"],["board-539","board-543"],["board-540","board-539"],["board-704","board-257"],["board-705","board-702"],["board-706","board-703"],["board-999","board-255"],["board-1000","board-995"],["board-1001","board-996"],["board-1002","board-997"],["board-1003","board-998"],["board-1119","board-411"],["board-1120","board-1119"],["board-266","board-315"],["board-267","board-266"],["board-268","board-267"],["board-269","board-381"],["board-417","board-266"],["board-418","board-417"],["board-419","board-501"],["board-420","board-419"],["board-549","board-420"],["board-550","board-549"],["board-551","board-654"],["board-707","board-269"],["board-708","board-707"],["board-709","board-708"],["board-1004","board-267"],["board-1005","board-1004"],["board-1006","board-1088"],["board-1007","board-1092"],["board-1008","board-550"],["board-1124","board-418"],["board-262","board-266"],["board-263","board-262"],["board-264","board-267"],["board-265","board-269"],["board-421","board-266"],["board-422","board-418"],["board-423","board-419"],["board-544","board-420"],["board-545","board-544"],["board-546","board-550"],["board-547","board-551"],["board-548","board-547"],["board-710","board-265"],["board-711","board-708"],["board-712","board-709"],["board-1009","board-263"],["board-1010","board-1005"],["board-1011","board-1006"],["board-1012","board-1007"],["board-1013","board-1008"],["board-1122","board-418"],["board-1123","board-1122"],["board-274","board-315"],["board-275","board-338"],["board-276","board-275"],["board-277","board-381"],["board-424","board-274"],["board-425","board-424"],["board-426","board-501"],["board-427","board-426"],["board-557","board-427"],["board-558","board-557"],["board-559","board-654"],["board-713","board-277"],["board-714","board-779"],["board-715","board-714"],["board-1014","board-275"],["board-1015","board-1014"],["board-1016","board-1088"],["board-1017","board-1092"],["board-1018","board-558"],["board-1127","board-425"],["board-270","board-274"],["board-271","board-275"],["board-272","board-275"],["board-273","board-277"],["board-428","board-274"],["board-429","board-425"],["board-430","board-426"],["board-552","board-427"],["board-553","board-552"],["board-554","board-558"],["board-555","board-559"],["board-556","board-555"],["board-716","board-273"],["board-717","board-714"],["board-718","board-715"],["board-1019","board-271"],["board-1020","board-1015"],["board-1021","board-1016"],["board-1022","board-1017"],["board-1023","board-1018"],["board-1125","board-425"],["board-1126","board-1125"],["board-282","board-315"],["board-283","board-338"],["board-284","board-283"],["board-285","board-381"],["board-431","board-282"],["board-432","board-431"],["board-433","board-501"],["board-434","board-433"],["board-567","board-434"],["board-568","board-616"],["board-569","board-568"],["board-570","board-654"],["board-571","board-672"],["board-719","board-285"],["board-720","board-779"],["board-721","board-720"],["board-1024","board-283"],["board-1025","board-1024"],["board-1026","board-1088"],["board-1027","board-1092"],["board-1028","board-569"],["board-1130","board-432"],["board-278","board-282"],["board-279","board-283"],["board-280","board-283"],["board-281","board-285"],["board-435","board-282"],["board-436","board-432"],["board-437","board-433"],["board-560","board-434"],["board-561","board-568"],["board-562","board-561"],["board-563","board-569"],["board-564","board-570"],["board-565","board-564"],["board-566","board-571"],["board-722","board-281"],["board-723","board-720"],["board-724","board-721"],["board-1029","board-279"],["board-1030","board-1025"],["board-1031","board-1026"],["board-1032","board-1027"],["board-1033","board-1028"],["board-1128","board-432"],["board-1129","board-1128"],["board-316","board-278"],["board-339","board-279"],["board-346","board-280"],["board-353","board-280"],["board-360","board-280"],["board-382","board-281"],["board-467","board-431"],["board-472","board-431"],["board-477","board-431"],["board-482","board-431"],["board-487","board-432"],["board-492","board-432"],["board-497","board-432"],["board-502","board-433"],["board-507","board-433"],["board-512","board-433"],["board-517","board-433"],["board-522","board-434"],["board-527","board-434"],["board-532","board-434"],["board-606","board-560"],["board-617","board-561"],["board-623","board-562"],["board-629","board-562"],["board-636","board-563"],["board-655","board-564"],["board-661","board-565"],["board-673","board-566"],["board-750","board-719"],["board-755","board-719"],["board-760","board-719"],["board-780","board-720"],["board-785","board-720"],["board-790","board-720"],["board-795","board-720"],["board-800","board-721"],["board-805","board-721"],["board-810","board-721"],["board-815","board-721"],["board-1066","board-1024"],["board-1070","board-1024"],["board-1074","board-1024"],["board-1078","board-1024"],["board-1082","board-1025"],["board-1089","board-1026"],["board-1093","board-1027"],["board-1097","board-1027"],["board-1101","board-1027"],["board-1108","board-1028"],["board-1112","board-1028"],["board-1116","board-1028"],["board-1144","board-1128"],["board-1148","board-1128"],["board-1152","board-1128"],["board-1156","board-1129"],["board-1160","board-1129"],["board-290","board-316"],["board-291","board-339"],["board-292","board-291"],["board-293","board-382"],["board-438","board-290"],["board-439","board-438"],["board-440","board-502"],["board-441","board-440"],["board-579","board-441"],["board-580","board-617"],["board-581","board-580"],["board-582","board-655"],["board-583","board-673"],["board-725","board-293"],["board-726","board-780"],["board-727","board-726"],["board-1034","board-291"],["board-1035","board-1034"],["board-1036","board-1089"],["board-1037","board-1093"],["board-1038","board-581"],["board-1133","board-439"],["board-286","board-290"],["board-287","board-291"],["board-288","board-291"],["board-289","board-293"],["board-442","board-290"],["board-443","board-439"],["board-444","board-440"],["board-572","board-441"],["board-573","board-580"],["board-574","board-573"],["board-575","board-581"],["board-576","board-582"],["board-577","board-576"],["board-578","board-583"],["board-728","board-289"],["board-729","board-726"],["board-730","board-727"],["board-1039","board-287"],["board-1040","board-1035"],["board-1041","board-1036"],["board-1042","board-1037"],["board-1043","board-1038"],["board-1131","board-439"],["board-1132","board-1131"],["board-1068","board-1034"],["board-1072","board-1034"],["board-1076","board-1034"],["board-1080","board-1034"],["board-1084","board-1035"],["board-1091","board-1036"],["board-1095","board-1037"],["board-1099","board-1037"],["board-1103","board-1037"],["board-1110","board-1038"],["board-1114","board-1038"],["board-1118","board-1038"],["board-1146","board-1131"],["board-1150","board-1131"],["board-1154","board-1131"],["board-1158","board-1132"],["board-1162","board-1132"],["board-470","board-438"],["board-475","board-438"],["board-480","board-438"],["board-485","board-438"],["board-490","board-439"],["board-495","board-439"],["board-500","board-439"],["board-505","board-440"],["board-510","board-440"],["board-515","board-440"],["board-520","board-440"],["board-525","board-441"],["board-530","board-441"],["board-535","board-441"],["board-753","board-725"],["board-758","board-725"],["board-763","board-725"],["board-783","board-726"],["board-788","board-726"],["board-793","board-726"],["board-798","board-726"],["board-803","board-727"],["board-808","board-727"],["board-813","board-727"],["board-818","board-727"],["board-385","board-289"],["board-676","board-578"],["board-319","board-286"],["board-609","board-572"],["board-343","board-287"],["board-350","board-288"],["board-357","board-288"],["board-364","board-288"],["board-620","board-573"],["board-626","board-574"],["board-633","board-574"],["board-640","board-575"],["board-658","board-576"],["board-664","board-577"],["board-298","board-316"],["board-321","board-298"],["board-327","board-298"],["board-333","board-298"],["board-299","board-298"],["board-300","board-299"],["board-366","board-300"],["board-371","board-300"],["board-376","board-300"],["board-445","board-298"],["board-446","board-445"],["board-447","board-502"],["board-448","board-447"],["board-588","board-448"],["board-611","board-588"],["board-589","board-588"],["board-642","board-589"],["board-648","board-589"],["board-590","board-589"],["board-667","board-590"],["board-731","board-300"],["board-765","board-731"],["board-770","board-731"],["board-732","board-731"],["board-775","board-732"],["board-733","board-732"],["board-1044","board-299"],["board-1045","board-1044"],["board-1085","board-1045"],["board-1046","board-1093"],["board-1104","board-1046"],["board-1047","board-1046"],["board-1136","board-446"],["board-1087","board-1045"],["board-1106","board-1046"],["board-768","board-731"],["board-773","board-731"],["board-778","board-732"],["board-324","board-298"],["board-330","board-298"],["board-336","board-298"],["board-369","board-300"],["board-374","board-300"],["board-379","board-300"],["board-614","board-588"],["board-646","board-589"],["board-652","board-589"],["board-670","board-590"],["board-294","board-298"],["board-295","board-294"],["board-296","board-299"],["board-297","board-296"],["board-449","board-298"],["board-450","board-446"],["board-451","board-447"],["board-584","board-448"],["board-585","board-584"],["board-586","board-589"],["board-587","board-586"],["board-734","board-297"],["board-735","board-732"],["board-736","board-733"],["board-1048","board-295"],["board-1049","board-1045"],["board-1050","board-1046"],["board-1134","board-446"],["board-1135","board-1134"],["board-305","board-316"],["board-306","board-305"],["board-307","board-306"],["board-452","board-305"],["board-453","board-452"],["board-454","board-502"],["board-455","board-454"],["board-595","board-455"],["board-596","board-595"],["board-597","board-596"],["board-737","board-307"],["board-738","board-737"],["board-739","board-738"],["board-1051","board-306"],["board-1052","board-1051"],["board-1053","board-1093"],["board-1054","board-1053"],["board-1139","board-453"],["board-301","board-305"],["board-302","board-301"],["board-303","board-306"],["board-304","board-303"],["board-456","board-305"],["board-457","board-453"],["board-458","board-454"],["board-591","board-455"],["board-592","board-591"],["board-593","board-596"],["board-594","board-593"],["board-740","board-304"],["board-741","board-738"],["board-742","board-739"],["board-1055","board-302"],["board-1056","board-1052"],["board-1057","board-1053"],["board-1137","board-453"],["board-1138","board-1137"],["board-312","board-316"],["board-313","board-312"],["board-314","board-313"],["board-459","board-312"],["board-460","board-459"],["board-461","board-502"],["board-462","board-461"],["board-602","board-462"],["board-603","board-602"],["board-604","board-603"],["board-743","board-314"],["board-744","board-743"],["board-745","board-744"],["board-1058","board-313"],["board-1059","board-1058"],["board-1060","board-1093"],["board-1061","board-1060"],["board-1142","board-460"],["board-308","board-312"],["board-309","board-308"],["board-310","board-313"],["board-311","board-310"],["board-463","board-312"],["board-464","board-460"],["board-465","board-461"],["board-598","board-462"],["board-599","board-598"],["board-600","board-603"],["board-601","board-600"],["board-746","board-311"],["board-747","board-744"],["board-748","board-745"],["board-1062","board-309"],["board-1063","board-1059"],["board-1064","board-1060"],["board-1140","board-460"],["board-1141","board-1140"],["board-468","board-470"],["board-473","board-475"],["board-478","board-480"],["board-483","board-485"],["board-488","board-490"],["board-493","board-495"],["board-498","board-500"],["board-503","board-505"],["board-508","board-510"],["board-513","board-515"],["board-518","board-520"],["board-523","board-525"],["board-528","board-530"],["board-533","board-535"],["board-751","board-753"],["board-756","board-758"],["board-761","board-763"],["board-766","board-768"],["board-771","board-773"],["board-776","board-778"],["board-781","board-783"],["board-786","board-788"],["board-791","board-793"],["board-796","board-798"],["board-801","board-803"],["board-806","board-808"],["board-811","board-813"],["board-816","board-818"],["board-317","board-319"],["board-607","board-609"],["board-383","board-385"],["board-674","board-676"],["board-322","board-324"],["board-612","board-614"],["board-377","board-379"],["board-668","board-670"],["board-328","board-330"],["board-618","board-620"],["board-372","board-374"],["board-662","board-664"],["board-334","board-336"],["board-624","board-626"],["board-367","board-369"],["board-656","board-658"],["board-340","board-343"],["board-347","board-350"],["board-354","board-357"],["board-361","board-364"],["board-630","board-633"],["board-637","board-640"],["board-643","board-646"],["board-649","board-652"],["board-380","board-377"],["board-671","board-668"],["board-325","board-322"],["board-615","board-612"],["board-375","board-372"],["board-665","board-662"],["board-331","board-328"],["board-621","board-618"],["board-370","board-367"],["board-659","board-656"],["board-337","board-334"],["board-627","board-624"],["board-365","board-361"],["board-653","board-649"],["board-344","board-340"],["board-634","board-630"],["board-358","board-354"],["board-647","board-643"],["board-351","board-347"],["board-641","board-637"],["board-341","board-340"],["board-631","board-630"],["board-362","board-361"],["board-650","board-649"],["board-348","board-347"],["board-638","board-637"],["board-355","board-354"],["board-644","board-643"],["board-819","board-463"],["board-820","board-819"],["board-821","board-1062"],["board-822","board-821"],["board-823","board-463"],["board-824","board-820"],["board-825","board-821"],["board-826","board-463"],["board-827","board-826"],["board-828","board-1062"],["board-829","board-828"],["board-830","board-463"],["board-831","board-827"],["board-832","board-828"],["board-833","board-463"],["board-834","board-833"],["board-835","board-1062"],["board-836","board-835"],["board-837","board-463"],["board-838","board-834"],["board-839","board-835"],["board-840","board-463"],["board-841","board-840"],["board-842","board-1062"],["board-843","board-842"],["board-844","board-463"],["board-845","board-841"],["board-846","board-842"],["board-847","board-464"],["board-848","board-847"],["board-849","board-1063"],["board-850","board-849"],["board-851","board-463"],["board-852","board-848"],["board-853","board-849"],["board-854","board-464"],["board-855","board-854"],["board-856","board-1063"],["board-857","board-856"],["board-858","board-464"],["board-859","board-855"],["board-860","board-856"],["board-861","board-464"],["board-862","board-861"],["board-863","board-1063"],["board-864","board-863"],["board-865","board-464"],["board-866","board-862"],["board-867","board-863"],["board-868","board-464"],["board-869","board-868"],["board-870","board-1063"],["board-871","board-870"],["board-872","board-464"],["board-873","board-869"],["board-874","board-870"],["board-875","board-464"],["board-876","board-875"],["board-877","board-1063"],["board-878","board-877"],["board-879","board-464"],["board-880","board-876"],["board-881","board-877"],["board-882","board-465"],["board-883","board-882"],["board-884","board-1064"],["board-885","board-884"],["board-886","board-464"],["board-887","board-883"],["board-888","board-884"],["board-889","board-465"],["board-890","board-889"],["board-891","board-1064"],["board-892","board-891"],["board-893","board-465"],["board-894","board-890"],["board-895","board-891"],["board-896","board-465"],["board-897","board-896"],["board-898","board-1064"],["board-899","board-898"],["board-900","board-465"],["board-901","board-897"],["board-902","board-898"],["board-903","board-465"],["board-904","board-903"],["board-905","board-1064"],["board-906","board-905"],["board-907","board-465"],["board-908","board-904"],["board-909","board-905"],["board-910","board-465"],["board-911","board-910"],["board-912","board-1064"],["board-913","board-912"],["board-914","board-465"],["board-915","board-911"],["board-916","board-912"],["board-917","board-308"],["board-918","board-840"],["board-919","board-868"],["board-920","board-889"],["board-921","board-308"],["board-922","board-847"],["board-923","board-882"],["board-924","board-308"],["board-925","board-840"],["board-926","board-868"],["board-927","board-889"],["board-928","board-308"],["board-929","board-847"],["board-930","board-882"],["board-931","board-309"],["board-932","board-840"],["board-933","board-868"],["board-934","board-889"],["board-935","board-308"],["board-936","board-847"],["board-937","board-882"],["board-938","board-309"],["board-939","board-841"],["board-940","board-869"],["board-941","board-890"],["board-942","board-309"],["board-943","board-848"],["board-944","board-883"],["board-945","board-309"],["board-946","board-841"],["board-947","board-869"],["board-948","board-890"],["board-949","board-309"],["board-950","board-848"],["board-951","board-883"],["board-952","board-310"],["board-953","board-849"],["board-954","board-884"],["board-955","board-310"],["board-956","board-856"],["board-957","board-891"],["board-958","board-310"],["board-959","board-849"],["board-960","board-884"],["board-961","board-310"],["board-962","board-856"],["board-963","board-891"],["board-964","board-310"],["board-965","board-849"],["board-966","board-884"],["board-967","board-310"],["board-968","board-856"],["board-969","board-891"],["board-970","board-311"],["board-971","board-849"],["board-972","board-884"],["board-973","board-310"],["board-974","board-856"],["board-975","board-891"],["board-976","board-311"],["board-977","board-850"],["board-978","board-885"],["board-979","board-311"],["board-980","board-857"],["board-981","board-892"],["board-982","board-311"],["board-983","board-850"],["board-984","board-885"],["board-985","board-311"],["board-986","board-857"],["board-987","board-892"],["board-988","board-311"],["board-989","board-850"],["board-990","board-885"],["board-991","board-311"],["board-992","board-857"],["board-993","board-892"],["board-386","board-317"],["board-387","board-340"],["board-388","board-367"],["board-677","board-607"],["board-678","board-630"],["board-679","board-656"],["board-389","board-317"],["board-390","board-334"],["board-391","board-361"],["board-680","board-607"],["board-681","board-624"],["board-682","board-649"],["board-392","board-322"],["board-393","board-340"],["board-394","board-367"],["board-683","board-612"],["board-684","board-630"],["board-685","board-656"],["board-395","board-322"],["board-396","board-334"],["board-397","board-361"],["board-686","board-612"],["board-687","board-624"],["board-688","board-649"],["board-398","board-334"],["board-399","board-340"],["board-400","board-367"],["board-689","board-624"],["board-690","board-630"],["board-691","board-656"],["board-401","board-334"],["board-402","board-334"],["board-403","board-361"],["board-692","board-624"],["board-693","board-624"],["board-694","board-649"],["board-404","board-340"],["board-405","board-340"],["board-695","board-630"],["board-696","board-630"],["board-406","board-340"],["board-407","board-361"],["board-697","board-630"],["board-698","board-649"],["board-1168","board-470"],["board-1172","board-475"],["board-1176","board-480"],["board-1180","board-485"],["board-1184","board-490"],["board-1188","board-495"],["board-1192","board-500"],["board-1196","board-505"],["board-1200","board-510"],["board-1204","board-515"],["board-1208","board-520"],["board-1212","board-525"],["board-1216","board-530"],["board-1220","board-535"],["board-1224","board-677"],["board-1282","board-377"],["board-1286","board-753"],["board-1290","board-758"],["board-1294","board-763"],["board-1298","board-768"],["board-1302","board-773"],["board-1306","board-778"],["board-1310","board-783"],["board-1314","board-788"],["board-1318","board-793"],["board-1322","board-798"],["board-1326","board-803"],["board-1330","board-808"],["board-1334","board-813"],["board-1338","board-818"],["board-1166","board-386"],["board-1164","board-1166"],["board-1170","board-1168"],["board-1174","board-1172"],["board-1178","board-1176"],["board-1182","board-1180"],["board-1186","board-1184"],["board-1190","board-1188"],["board-1194","board-1192"],["board-1198","board-1196"],["board-1202","board-1200"],["board-1206","board-1204"],["board-1210","board-1208"],["board-1214","board-1212"],["board-1218","board-1216"],["board-1222","board-1220"],["board-1226","board-1224"],["board-1284","board-1282"],["board-1288","board-1286"],["board-1292","board-1290"],["board-1296","board-1294"],["board-1300","board-1298"],["board-1304","board-1302"],["board-1308","board-1306"],["board-1312","board-1310"],["board-1316","board-1314"],["board-1320","board-1318"],["board-1324","board-1322"],["board-1328","board-1326"],["board-1332","board-1330"],["board-1336","board-1334"],["board-1340","board-1338"],["board-1344","board-679"],["board-1342","board-1344"],["board-1278","board-1164"],["board-1279","board-1180"],["board-1280","board-1204"],["board-1396","board-1282"],["board-1397","board-1298"],["board-1398","board-1322"],["board-1275","board-1164"],["board-1276","board-1184"],["board-1277","board-1208"],["board-1393","board-1282"],["board-1394","board-1302"],["board-1395","board-1326"],["board-1272","board-386"],["board-1273","board-485"],["board-1274","board-515"],["board-1390","board-388"],["board-1391","board-768"],["board-1392","board-798"],["board-1269","board-386"],["board-1270","board-490"],["board-1271","board-520"],["board-1387","board-388"],["board-1388","board-773"],["board-1389","board-803"],["board-1266","board-1164"],["board-1267","board-1180"],["board-1268","board-1204"],["board-1384","board-1282"],["board-1385","board-1298"],["board-1386","board-1322"],["board-1263","board-1164"],["board-1264","board-1184"],["board-1265","board-1208"],["board-1381","board-1282"],["board-1382","board-1302"],["board-1383","board-1326"],["board-1260","board-1164"],["board-1261","board-1180"],["board-1262","board-1204"],["board-1378","board-1282"],["board-1379","board-1298"],["board-1380","board-1322"],["board-1257","board-1164"],["board-1258","board-1184"],["board-1259","board-1208"],["board-1375","board-1282"],["board-1376","board-1302"],["board-1377","board-1326"],["board-1163","board-1164"],["board-1167","board-1168"],["board-1171","board-1172"],["board-1175","board-1176"],["board-1179","board-1180"],["board-1183","board-1184"],["board-1187","board-1188"],["board-1191","board-1192"],["board-1195","board-1196"],["board-1199","board-1200"],["board-1203","board-1204"],["board-1207","board-1208"],["board-1211","board-1212"],["board-1215","board-1216"],["board-1219","board-1220"],["board-1223","board-618"],["board-699","board-1223"],["board-700","board-699"],["board-1281","board-1163"],["board-408","board-1281"],["board-409","board-408"],["board-1285","board-1167"],["board-1289","board-1171"],["board-1293","board-1175"],["board-1297","board-1179"],["board-1301","board-1183"],["board-1305","board-1187"],["board-1309","board-1191"],["board-1313","board-1195"],["board-1317","board-1199"],["board-1321","board-1203"],["board-1325","board-1207"],["board-1329","board-1211"],["board-1333","board-1215"],["board-1337","board-1219"],["board-1341","board-1223"],["board-1254","board-1163"],["board-1255","board-1179"],["board-1256","board-1203"],["board-1372","board-375"],["board-1373","board-1297"],["board-1374","board-1321"],["board-1251","board-1163"],["board-1252","board-1183"],["board-1253","board-1207"],["board-1369","board-372"],["board-1370","board-1301"],["board-1371","board-1325"],["board-1165","board-1163"],["board-1169","board-1167"],["board-1173","board-1171"],["board-1177","board-1175"],["board-1181","board-1179"],["board-1185","board-1183"],["board-1189","board-1187"],["board-1193","board-1191"],["board-1197","board-1195"],["board-1201","board-1199"],["board-1205","board-1203"],["board-1209","board-1207"],["board-1213","board-1211"],["board-1217","board-1215"],["board-1221","board-1219"],["board-1225","board-1223"],["board-1283","board-1163"],["board-1287","board-1167"],["board-1291","board-1171"],["board-1295","board-1175"],["board-1299","board-1179"],["board-1303","board-1183"],["board-1307","board-1187"],["board-1311","board-1191"],["board-1315","board-1195"],["board-1319","board-1199"],["board-1323","board-1203"],["board-1327","board-1207"],["board-1331","board-1211"],["board-1335","board-1215"],["board-1339","board-1219"],["board-1343","board-1223"],["board-1248","board-1163"],["board-1249","board-1179"],["board-1250","board-1203"],["board-1366","board-1281"],["board-1367","board-1297"],["board-1368","board-1321"],["board-1245","board-1163"],["board-1246","board-1183"],["board-1247","board-1207"],["board-1363","board-1281"],["board-1364","board-1301"],["board-1365","board-1325"],["board-1242","board-1163"],["board-1243","board-1179"],["board-1244","board-1203"],["board-1360","board-1281"],["board-1361","board-1297"],["board-1362","board-1321"],["board-1239","board-1163"],["board-1240","board-1183"],["board-1241","board-1207"],["board-1357","board-1281"],["board-1358","board-1301"],["board-1359","board-1325"],["board-1236","board-1163"],["board-1237","board-1179"],["board-1238","board-1203"],["board-1354","board-1281"],["board-1355","board-1297"],["board-1356","board-1321"],["board-1233","board-1163"],["board-1234","board-1183"],["board-1235","board-1207"],["board-1351","board-1281"],["board-1352","board-1301"],["board-1353","board-1325"],["board-1230","board-408"],["board-1231","board-1179"],["board-1232","board-1203"],["board-1348","board-408"],["board-1349","board-1297"],["board-1350","board-1321"],["board-1227","board-408"],["board-1228","board-1183"],["board-1229","board-1207"],["board-1345","board-408"],["board-1346","board-1301"],["board-1347","board-1325"]]};var Bo={project:"30",name:"Combstruct 30",basis:"delivery-before-cutting",geometrySha256:"eefdd78c29065835c89cf8bd33458e5d9adf814e6205c21f30fbc1eb52bbfec3",totalBoards:1365,installedPieces:1398,material:{lengthM:2434.36,fullBoardEquivalents:973.744,fullBoards:974,sheets:195},families:[{id:"standard",name:"Deska zwyk\u0142a",count:903,variants:[{id:"standard-1",count:165,modules:6,ending:!1,lengthM:2.5,preview:{stockId:"stock-147",positions:[-1.25,-.12,-.009,-1.25,0,-.009,-1.232,0,-.009,1.25,0,-.009,1.25,-.12,-.009,.851333,.12,-.009,1.232,.12,-.009,1.232,0,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,-1.232,.12,-.009,-.851333,.12,-.009,-.851333,0,-.009,.851333,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,-.009,-1.232,0,.009,-1.25,0,.009,-1.25,-.12,.009,1.25,-.12,.009,1.25,0,.009,1.232,0,.009,1.232,.12,.009,.851333,.12,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,-.851333,0,.009,-.851333,.12,.009,-1.232,.12,.009,.851333,0,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009,-.815333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,7,3,0,23,5,7,24,8,10,25,11,13,26,14,16,27,17,19,2,20,22,23,7,0,0,2,22,10,23,0,0,22,27,24,10,0,0,27,19,13,24,0,0,19,26,25,13,0,0,26,16,16,25,0,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,30,32,33,33,35,51,36,38,52,39,41,53,42,44,54,45,47,55,48,50,28,30,33,51,48,28,30,30,51,36,55,48,30,30,36,52,45,55,30,30,52,39,54,45,30,30,39,53,42,54,30,30,53,42,0,4,30,4,31,30,4,3,31,3,32,31,3,7,32,7,33,32,7,6,33,6,34,33,6,5,34,5,35,34,5,23,35,23,51,35,23,10,51,10,36,51,10,9,36,9,37,36,9,8,37,8,38,37,8,24,38,24,52,38,24,13,52,13,39,52,13,12,39,12,40,39,12,11,40,11,41,40,11,25,41,25,53,41,25,16,53,16,42,53,16,15,42,15,43,42,15,14,43,14,44,43,14,26,44,26,54,44,26,19,54,19,45,54,19,18,45,18,46,45,18,17,46,17,47,46,17,27,47,27,55,47,27,22,55,22,48,55,22,21,48,21,49,48,21,20,49,20,50,49,20,2,50,2,28,50,2,1,28,1,29,28,1,0,29,0,30,29],lengthM:2.5}},{id:"standard-2",count:408,modules:5,ending:!1,lengthM:2.0833333333333335,preview:{stockId:"stock-4",positions:[-1.041667,-.12,-.009,-1.041667,0,-.009,-1.023667,0,-.009,1.041667,0,-.009,1.041667,-.12,-.009,.643,.12,-.009,1.023667,.12,-.009,1.023667,0,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,-1.023667,.12,-.009,-.643,.12,-.009,-.643,0,-.009,.643,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,-.009,-1.023667,0,.009,-1.041667,0,.009,-1.041667,-.12,.009,1.041667,-.12,.009,1.041667,0,.009,1.023667,0,.009,1.023667,.12,.009,.643,.12,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,-.643,0,.009,-.643,.12,.009,-1.023667,.12,.009,.643,0,.009,.226333,0,.009,-.190333,0,.009,-.607,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,7,3,0,20,5,7,21,8,10,22,11,13,23,14,16,2,17,19,20,7,0,0,2,19,10,20,0,0,19,23,21,10,0,0,23,16,13,21,0,0,16,22,22,13,0,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,26,28,29,29,31,44,32,34,45,35,37,46,38,40,47,41,43,24,26,29,44,41,24,26,26,44,32,47,41,26,26,32,45,38,47,26,26,45,35,46,38,26,26,35,46,0,4,26,4,27,26,4,3,27,3,28,27,3,7,28,7,29,28,7,6,29,6,30,29,6,5,30,5,31,30,5,20,31,20,44,31,20,10,44,10,32,44,10,9,32,9,33,32,9,8,33,8,34,33,8,21,34,21,45,34,21,13,45,13,35,45,13,12,35,12,36,35,12,11,36,11,37,36,11,22,37,22,46,37,22,16,46,16,38,46,16,15,38,15,39,38,15,14,39,14,40,39,14,23,40,23,47,40,23,19,47,19,41,47,19,18,41,18,42,41,18,17,42,17,43,42,17,2,43,2,24,43,2,1,24,1,25,24,1,0,25,0,26,25],lengthM:2.0833333333333335}},{id:"standard-3",count:71,modules:4,ending:!1,lengthM:1.6846666666666668,preview:{stockId:"stock-311",positions:[-.842333,-.12,-.009,-.842333,0,-.009,-.824333,0,-.009,.842333,0,-.009,.842333,-.12,-.009,.425667,.12,-.009,.806333,.12,-.009,.806333,0,-.009,.009,.12,-.009,.389667,.12,-.009,.389667,0,-.009,-.407667,.12,-.009,-.027,.12,-.009,-.027,0,-.009,-.824333,.12,-.009,-.443667,.12,-.009,-.443667,0,-.009,.425667,0,-.009,.009,0,-.009,-.407667,0,-.009,-.824333,0,.009,-.842333,0,.009,-.842333,-.12,.009,.842333,-.12,.009,.842333,0,.009,.806333,0,.009,.806333,.12,.009,.425667,.12,.009,.389667,0,.009,.389667,.12,.009,.009,.12,.009,-.027,0,.009,-.027,.12,.009,-.407667,.12,.009,-.443667,0,.009,-.443667,.12,.009,-.824333,.12,.009,.425667,0,.009,.009,0,.009,-.407667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6846666666666668}},{id:"standard-4",count:169,modules:4,ending:!1,lengthM:1.6666666666666667,preview:{stockId:"stock-2",positions:[-.833333,-.12,-.009,-.833333,0,-.009,-.815333,0,-.009,.833333,0,-.009,.833333,-.12,-.009,.434667,.12,-.009,.815333,.12,-.009,.815333,0,-.009,.018,.12,-.009,.398667,.12,-.009,.398667,0,-.009,-.398667,.12,-.009,-.018,.12,-.009,-.018,0,-.009,-.815333,.12,-.009,-.434667,.12,-.009,-.434667,0,-.009,.434667,0,-.009,.018,0,-.009,-.398667,0,-.009,-.815333,0,.009,-.833333,0,.009,-.833333,-.12,.009,.833333,-.12,.009,.833333,0,.009,.815333,0,.009,.815333,.12,.009,.434667,.12,.009,.398667,0,.009,.398667,.12,.009,.018,.12,.009,-.018,0,.009,-.018,.12,.009,-.398667,.12,.009,-.434667,0,.009,-.434667,.12,.009,-.815333,.12,.009,.434667,0,.009,.018,0,.009,-.398667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,14,15,16,7,3,0,17,5,7,18,8,10,19,11,13,2,14,16,17,7,0,0,2,16,10,17,0,0,16,19,18,10,0,0,19,13,13,18,0,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,22,24,25,25,27,37,28,30,38,31,33,39,34,36,20,22,25,37,34,20,22,22,37,28,39,34,22,22,28,38,31,39,22,22,38,31,0,4,22,4,23,22,4,3,23,3,24,23,3,7,24,7,25,24,7,6,25,6,26,25,6,5,26,5,27,26,5,17,27,17,37,27,17,10,37,10,28,37,10,9,28,9,29,28,9,8,29,8,30,29,8,18,30,18,38,30,18,13,38,13,31,38,13,12,31,12,32,31,12,11,32,11,33,32,11,19,33,19,39,33,19,16,39,16,34,39,16,15,34,15,35,34,15,14,35,14,36,35,14,2,36,2,20,36,2,1,20,1,21,20,1,0,21,0,22,21],lengthM:1.6666666666666667}},{id:"standard-5",count:82,modules:3,ending:!1,lengthM:1.268,preview:{stockId:"stock-45",positions:[-.634,-.12,-.009,-.634,0,-.009,-.598,0,-.009,.634,0,-.009,.634,-.12,-.009,.235333,.12,-.009,.616,.12,-.009,.616,0,-.009,-.181333,.12,-.009,.199333,.12,-.009,.199333,0,-.009,-.598,.12,-.009,-.217333,.12,-.009,-.217333,0,-.009,.235333,0,-.009,-.181333,0,-.009,-.598,0,.009,-.634,0,.009,-.634,-.12,.009,.634,-.12,.009,.634,0,.009,.616,0,.009,.616,.12,.009,.235333,.12,.009,.199333,0,.009,.199333,.12,.009,-.181333,.12,.009,-.217333,0,.009,-.217333,.12,.009,-.598,.12,.009,.235333,0,.009,-.181333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.268}},{id:"standard-6",count:8,modules:3,ending:!1,lengthM:1.25,preview:{stockId:"stock-336",positions:[-.625,-.12,-.009,-.625,0,-.009,-.607,0,-.009,.625,0,-.009,.625,-.12,-.009,.226333,.12,-.009,.607,.12,-.009,.607,0,-.009,-.190333,.12,-.009,.190333,.12,-.009,.190333,0,-.009,-.607,.12,-.009,-.226333,.12,-.009,-.226333,0,-.009,.226333,0,-.009,-.190333,0,-.009,-.607,0,.009,-.625,0,.009,-.625,-.12,.009,.625,-.12,.009,.625,0,.009,.607,0,.009,.607,.12,.009,.226333,.12,.009,.190333,0,.009,.190333,.12,.009,-.190333,.12,.009,-.226333,0,.009,-.226333,.12,.009,-.607,.12,.009,.226333,0,.009,-.190333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,7,3,0,14,5,7,15,8,10,2,11,13,14,7,0,0,2,13,10,14,0,0,13,15,15,10,0,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,18,20,21,21,23,30,24,26,31,27,29,16,18,21,30,27,16,18,18,30,24,31,27,18,18,24,31,0,4,18,4,19,18,4,3,19,3,20,19,3,7,20,7,21,20,7,6,21,6,22,21,6,5,22,5,23,22,5,14,23,14,30,23,14,10,30,10,24,30,10,9,24,9,25,24,9,8,25,8,26,25,8,15,26,15,31,26,15,13,31,13,27,31,13,12,27,12,28,27,12,11,28,11,29,28,11,2,29,2,16,29,2,1,16,1,17,16,1,0,17,0,18,17],lengthM:1.25}}]},{id:"ending",name:"Deska zako\u0144czeniowa",count:462,variants:[{id:"ending-1",count:18,modules:6,ending:!0,lengthM:2.26,preview:{stockId:"stock-1199",positions:[-1.13,-.12,-.009,-1.13,0,-.009,-1.112,0,-.009,.971333,.12,-.009,1.13,.12,-.009,1.13,-.12,-.009,.554667,.12,-.009,.935333,.12,-.009,.935333,0,-.009,.138,.12,-.009,.518667,.12,-.009,.518667,0,-.009,-.278667,.12,-.009,.102,.12,-.009,.102,0,-.009,-.695333,.12,-.009,-.314667,.12,-.009,-.314667,0,-.009,-1.112,.12,-.009,-.731333,.12,-.009,-.731333,0,-.009,.971333,0,-.009,.554667,0,-.009,.138,0,-.009,-.278667,0,-.009,-.695333,0,-.009,-1.112,0,.009,-1.13,0,.009,-1.13,-.12,.009,1.13,-.12,.009,1.13,.12,.009,.971333,.12,.009,.935333,0,.009,.935333,.12,.009,.554667,.12,.009,.518667,0,.009,.518667,.12,.009,.138,.12,.009,.102,0,.009,.102,.12,.009,-.278667,.12,.009,-.314667,0,.009,-.314667,.12,.009,-.695333,.12,.009,-.731333,0,.009,-.731333,.12,.009,-1.112,.12,.009,.971333,0,.009,.554667,0,.009,.138,0,.009,-.278667,0,.009,-.695333,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5,0,2,21,3,5,22,6,8,23,9,11,24,12,14,25,15,17,2,18,20,8,21,5,5,2,20,22,8,5,5,20,25,11,22,5,5,25,17,23,11,5,5,17,24,14,23,5,5,24,14,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,26,28,29,29,31,47,32,34,48,35,37,49,38,40,50,41,43,51,44,46,26,29,47,32,44,26,29,29,32,48,51,44,29,29,48,35,41,51,29,29,35,49,50,41,29,29,49,38,38,50,29,0,5,28,5,29,28,5,4,29,4,30,29,4,3,30,3,31,30,3,21,31,21,47,31,21,8,47,8,32,47,8,7,32,7,33,32,7,6,33,6,34,33,6,22,34,22,48,34,22,11,48,11,35,48,11,10,35,10,36,35,10,9,36,9,37,36,9,23,37,23,49,37,23,14,49,14,38,49,14,13,38,13,39,38,13,12,39,12,40,39,12,24,40,24,50,40,24,17,50,17,41,50,17,16,41,16,42,41,16,15,42,15,43,42,15,25,43,25,51,43,25,20,51,20,44,51,20,19,44,19,45,44,19,18,45,18,46,45,18,2,46,2,26,46,2,1,26,1,27,26,1,0,27,0,28,27],lengthM:2.26}},{id:"ending-2",count:26,modules:5,ending:!0,lengthM:1.8433333333333335,preview:{stockId:"stock-386",positions:[-.921667,-.12,-.009,-.921667,0,-.009,-.903667,0,-.009,.763,.12,-.009,.921667,.12,-.009,.921667,-.12,-.009,.346333,.12,-.009,.727,.12,-.009,.727,0,-.009,-.070333,.12,-.009,.310333,.12,-.009,.310333,0,-.009,-.487,.12,-.009,-.106333,.12,-.009,-.106333,0,-.009,-.903667,.12,-.009,-.523,.12,-.009,-.523,0,-.009,.763,0,-.009,.346333,0,-.009,-.070333,0,-.009,-.487,0,-.009,-.903667,0,.009,-.921667,0,.009,-.921667,-.12,.009,.921667,-.12,.009,.921667,.12,.009,.763,.12,.009,.727,0,.009,.727,.12,.009,.346333,.12,.009,.310333,0,.009,.310333,.12,.009,-.070333,.12,.009,-.106333,0,.009,-.106333,.12,.009,-.487,.12,.009,-.523,0,.009,-.523,.12,.009,-.903667,.12,.009,.763,0,.009,.346333,0,.009,-.070333,0,.009,-.487,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8433333333333335}},{id:"ending-3",count:51,modules:5,ending:!0,lengthM:1.8253333333333335,preview:{stockId:"stock-3",positions:[-.912667,-.12,-.009,-.912667,0,-.009,-.894667,0,-.009,.772,.12,-.009,.912667,.12,-.009,.912667,-.12,-.009,.355333,.12,-.009,.736,.12,-.009,.736,0,-.009,-.061333,.12,-.009,.319333,.12,-.009,.319333,0,-.009,-.478,.12,-.009,-.097333,.12,-.009,-.097333,0,-.009,-.894667,.12,-.009,-.514,.12,-.009,-.514,0,-.009,.772,0,-.009,.355333,0,-.009,-.061333,0,-.009,-.478,0,-.009,-.894667,0,.009,-.912667,0,.009,-.912667,-.12,.009,.912667,-.12,.009,.912667,.12,.009,.772,.12,.009,.736,0,.009,.736,.12,.009,.355333,.12,.009,.319333,0,.009,.319333,.12,.009,-.061333,.12,.009,-.097333,0,.009,-.097333,.12,.009,-.478,.12,.009,-.514,0,.009,-.514,.12,.009,-.894667,.12,.009,.772,0,.009,.355333,0,.009,-.061333,0,.009,-.478,0,.009],indices:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,5,0,2,18,3,5,19,6,8,20,9,11,21,12,14,2,15,17,8,18,5,5,2,17,19,8,5,5,17,21,11,19,5,5,21,14,20,11,5,5,14,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,22,24,25,25,27,40,28,30,41,31,33,42,34,36,43,37,39,22,25,40,28,37,22,25,25,28,41,43,37,25,25,41,31,34,43,25,25,31,42,42,34,25,0,5,24,5,25,24,5,4,25,4,26,25,4,3,26,3,27,26,3,18,27,18,40,27,18,8,40,8,28,40,8,7,28,7,29,28,7,6,29,6,30,29,6,19,30,19,41,30,19,11,41,11,31,41,11,10,31,10,32,31,10,9,32,9,33,32,9,20,33,20,42,33,20,14,42,14,34,42,14,13,34,13,35,34,13,12,35,12,36,35,12,21,36,21,43,36,21,17,43,17,37,43,17,16,37,16,38,37,16,15,38,15,39,38,15,2,39,2,22,39,2,1,22,1,23,22,1,0,23,0,24,23],lengthM:1.8253333333333335}},{id:"ending-4",count:70,modules:4,ending:!0,lengthM:1.4266666666666667,preview:{stockId:"stock-310",positions:[-.713333,-.12,-.009,-.713333,.12,-.009,-.554667,.12,-.009,.713333,0,-.009,.713333,-.12,-.009,.314667,.12,-.009,.695333,.12,-.009,.695333,0,-.009,-.102,.12,-.009,.278667,.12,-.009,.278667,0,-.009,-.518667,.12,-.009,-.138,.12,-.009,-.138,0,-.009,-.554667,0,-.009,.314667,0,-.009,-.102,0,-.009,-.518667,0,-.009,-.554667,.12,.009,-.713333,.12,.009,-.713333,-.12,.009,.713333,-.12,.009,.713333,0,.009,.695333,0,.009,.695333,.12,.009,.314667,.12,.009,.278667,0,.009,.278667,.12,.009,-.102,.12,.009,-.138,0,.009,-.138,.12,.009,-.518667,.12,.009,-.554667,0,.009,.314667,0,.009,-.102,0,.009,-.518667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4266666666666667}},{id:"ending-5",count:193,modules:4,ending:!0,lengthM:1.4086666666666667,preview:{stockId:"stock-1",positions:[-.704333,-.12,-.009,-.704333,.12,-.009,-.563667,.12,-.009,.704333,0,-.009,.704333,-.12,-.009,.305667,.12,-.009,.686333,.12,-.009,.686333,0,-.009,-.111,.12,-.009,.269667,.12,-.009,.269667,0,-.009,-.527667,.12,-.009,-.147,.12,-.009,-.147,0,-.009,-.563667,0,-.009,.305667,0,-.009,-.111,0,-.009,-.527667,0,-.009,-.563667,.12,.009,-.704333,.12,.009,-.704333,-.12,.009,.704333,-.12,.009,.704333,0,.009,.686333,0,.009,.686333,.12,.009,.305667,.12,.009,.269667,0,.009,.269667,.12,.009,-.111,.12,.009,-.147,0,.009,-.147,.12,.009,-.527667,.12,.009,-.563667,0,.009,.305667,0,.009,-.111,0,.009,-.527667,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,11,12,13,0,2,14,7,3,0,15,5,7,16,8,10,17,11,13,0,14,17,15,7,0,0,17,13,10,15,0,0,13,16,16,10,0,18,19,20,20,21,22,23,24,25,26,27,28,29,30,31,32,18,20,20,22,23,23,25,33,26,28,34,29,31,35,35,32,20,20,23,33,29,35,20,20,33,26,34,29,20,20,26,34,0,4,20,4,21,20,4,3,21,3,22,21,3,7,22,7,23,22,7,6,23,6,24,23,6,5,24,5,25,24,5,15,25,15,33,25,15,10,33,10,26,33,10,9,26,9,27,26,9,8,27,8,28,27,8,16,28,16,34,28,16,13,34,13,29,34,13,12,29,12,30,29,12,11,30,11,31,30,11,17,31,17,35,31,17,14,35,14,32,35,14,2,32,2,18,32,2,1,18,1,19,18,1,0,19,0,20,19],lengthM:1.4086666666666667}},{id:"ending-6",count:104,modules:3,ending:!0,lengthM:.992,preview:{stockId:"stock-43",positions:[-.496,-.12,-.009,-.496,.12,-.009,-.355333,.12,-.009,.496,0,-.009,.496,-.12,-.009,.097333,.12,-.009,.478,.12,-.009,.478,0,-.009,-.319333,.12,-.009,.061333,.12,-.009,.061333,0,-.009,-.355333,0,-.009,.097333,0,-.009,-.319333,0,-.009,-.355333,.12,.009,-.496,.12,.009,-.496,-.12,.009,.496,-.12,.009,.496,0,.009,.478,0,.009,.478,.12,.009,.097333,.12,.009,.061333,0,.009,.061333,.12,.009,-.319333,.12,.009,-.355333,0,.009,.097333,0,.009,-.319333,0,.009],indices:[0,1,2,3,4,0,5,6,7,8,9,10,0,2,11,7,3,0,12,5,7,13,8,10,0,11,13,12,7,0,0,13,10,10,12,0,14,15,16,16,17,18,19,20,21,22,23,24,25,14,16,16,18,19,19,21,26,22,24,27,27,25,16,16,19,26,22,27,16,16,26,22,0,4,16,4,17,16,4,3,17,3,18,17,3,7,18,7,19,18,7,6,19,6,20,19,6,5,20,5,21,20,5,12,21,12,26,21,12,10,26,10,22,26,10,9,22,9,23,22,9,8,23,8,24,23,8,13,24,13,27,24,13,11,27,11,25,27,11,2,25,2,14,25,2,1,14,1,15,14,1,0,15,0,16,15],lengthM:.992}}]}]};var Rs=i=>`${i.toLocaleString("pl-PL")} szt.`,ih=i=>`${i.toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:3})} m`;function Ur(i){let e=i.families[0];return{family:e.id,variant:e.variants[0].id}}function Ff(i,e){let t=i.families.find(r=>r.id===e.family)||i.families[0],n=t.variants.find(r=>r.id===e.variant);return{family:t,variant:n||t.variants[0]}}function zf(i){let e=i.getBoundingClientRect(),t=document.querySelector(".project-heading")?.getBoundingClientRect().height||0;(e.top<t+12||e.bottom>innerHeight-12)&&window.scrollTo({top:scrollY+e.top-t-20,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}var $t=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Of(i,e,t){let n=Ur(e);i.classList.add("parts-catalogue");let r=$t("div","parts-catalogue-heading");r.append($t("h4",null,"Rodzaje desek"),$t("span","parts-catalogue-total",Rs(e.totalBoards)));let s=$t("p","parts-catalogue-lead","Deski w Twoim zestawie. Wybierz rodzaj i d\u0142ugo\u015B\u0107."),o=$t("div","parts-family-list");o.setAttribute("role","group"),o.setAttribute("aria-label","Rodzaje desek");let a=$t("div","parts-variant-list");a.setAttribute("role","group"),a.setAttribute("aria-label","D\u0142ugo\u015Bci i ilo\u015Bci");let l=$t("div","parts-variant-heading"),c=$t("h5"),d=$t("span");l.append(c,d),i.replaceChildren(l,a,r,s,o);function u(p,g=!0){n.variant=p;for(let y of a.children)y.setAttribute("aria-pressed",String(y.dataset.partsVariant===p));t({...n},g)}function h(p,g=!0){n.family=p;let y=e.families.find(f=>f.id===p);for(let f of o.children)f.setAttribute("aria-pressed",String(f.dataset.partsFamily===p));c.textContent=y.name,d.textContent=`${Rs(y.count)} \u0142\u0105cznie`;let m=y.variants.map(f=>{let S=$t("button","parts-variant");return S.type="button",S.dataset.partsVariant=f.id,S.append($t("span",null,ih(f.lengthM)),$t("strong",null,Rs(f.count))),S.addEventListener("click",()=>u(f.id)),S});a.replaceChildren(...m),u(y.variants[0].id,g)}for(let p of e.families){let g=$t("button","parts-family");g.type="button",g.dataset.partsFamily=p.id;let y=$t("span","parts-family-count");y.append($t("strong",null,Rs(p.count)),$t("small",null,"\u0142\u0105cznie")),g.append($t("span","parts-family-name",p.name),y),g.addEventListener("click",()=>h(p.id)),o.append(g)}return h(n.family,!1),{getSelection:()=>({...n})}}function Bf(i,e=Ur(i)){let{family:t,variant:n}=Ff(i,e),r=new Ze,s=[n.preview],o=new Et({color:"#43948c",roughness:.75,side:Dt,flatShading:!0}),a=new Jt({color:"#66543a",transparent:!0,opacity:.45});return s.forEach(l=>{let c=new mt;c.setAttribute("position",new ct(l.positions,3)),c.setIndex(l.indices),c.computeVertexNormals();let d=new lt(c,o);d.add(new un(new an(c,30),a)),r.add(d)}),{root:r,direction:new D(.12,.65,3),annotation:`${t.name} \xB7 ${ih(n.lengthM)} \xB7 ${Rs(n.count)}`,getPartsState:()=>({project:i.project,totalBoards:i.totalBoards,family:t.id,familyCount:t.count,variant:e.variant,quantity:n.count,samples:s.map(l=>l.stockId),basis:i.basis,lengthM:n.lengthM,mode:"delivery",geometrySha256:i.geometrySha256})}}var sh=Bo,rh=(...i)=>new D(...i),oh=[{title:"Punktem wyj\u015Bcia jest projekt budynku.",text:"Rzuty od klienta, dokumentacja od projektanta albo projekt powtarzalny dewelopera. Zaczynamy od uk\u0142adu pomieszcze\u0144, wymiar\xF3w i za\u0142o\u017Ce\u0144 konkretnej inwestycji.",label:"Na wej\u015Bciu",items:["Rzuty kondygnacji","Wymiary i wysoko\u015Bci","Za\u0142o\u017Cenia inwestycji"]},{title:"Model AI Combstruct automatycznie generuje projekt konstrukcji.",text:"Na podstawie rzut\xF3w budynku dobiera uk\u0142ad desek i po\u0142\u0105cze\u0144. Pod\u0142oga, \u015Bciany, stropy i dach powstaj\u0105 we wsp\xF3lnym modelu 3D \u2014 z identyfikatorem i miejscem monta\u017Cu ka\u017Cdej cz\u0119\u015Bci.",label:"W jednym modelu",items:["Konstrukcja dopasowana do modu\u0142\xF3w systemu","Sp\xF3jny uk\u0142ad element\xF3w i po\u0142\u0105cze\u0144","Dane do produkcji i monta\u017Cu"]},{title:"Dok\u0142adnie wiadomo, co wyprodukowa\u0107.",text:"Z modelu powstaje precyzyjne zam\xF3wienie: rodzaje desek, wymiary, ilo\u015Bci i oznaczenia. Te same dane prowadz\u0105 od rozkroju p\u0142yt do przygotowania pakiet\xF3w na budow\u0119.",label:"Dla produkcji",items:["Wykaz cz\u0119\u015Bci, materia\u0142 i ilo\u015Bci","Rozkr\xF3j p\u0142yt i oznaczenia element\xF3w","Podzia\u0142 na pakiety do monta\u017Cu"]},{title:"Ka\u017Cdy element trafia na swoje miejsce.",text:"Oznaczone cz\u0119\u015Bci i ich miejsca we wsp\xF3lnym modelu u\u0142atwiaj\u0105 organizacj\u0119 budowy. Wykonawca wie, od czego zacz\u0105\u0107 i co do\u0142o\u017Cy\u0107 dalej. Ten sam system wspiera monta\u017C z ekip\u0105 i DIY.",label:"Na budowie",items:["Elementy oznaczone identyfikatorami","Czytelna kolejno\u015B\u0107 monta\u017Cu","DIY lub monta\u017C z ekip\u0105"]}];function k_(i,e=1){let t=document.createElement("canvas");t.width=512,t.height=90;let n=t.getContext("2d");n.font="500 32px Helvetica Neue, Arial, sans-serif",n.textAlign="center",n.fillStyle="#254331",n.fillText(i,256,54);let r=new di(t);r.colorSpace=Ft;let s=new br(new ki({map:r,depthTest:!1}));return s.scale.set(e,e*90/512,1),s}function bc(i,e=Ur(Bo)){if(i===2){let x=Bf(Bo,e);return{...x,getManufacturingState:()=>({stage:i,...x.getPartsState(),example:Bo.name})}}let t=Nr(),n=t.dimensions,r=new Ze;r.name="Combstruct Flow";let s=new Et({color:"#c49b62",roughness:.85}),o=new Et({color:"#43948c",roughness:.75}),a=new Et({color:"#33493e",roughness:.85}),l=new Jt({color:"#66543a",transparent:!0,opacity:.45}),c=(x,L,R,N,z,k,B=a)=>{let F=new lt(new on(x,L,R),B);return F.position.set(N,z,k),r.add(F),F},d=(x,L=s)=>{let R=new lt(x,L);return R.add(new un(new an(x,30),l)),r.add(R),R},u=(x,L,R,N,z)=>{let k=k_(x,z);k.position.set(L,R,N),r.add(k)};if(i===0){let x=new Et({color:"#ffffff",roughness:1});c(n.width+1.8,.065,n.depth+1.8,0,-.085,0,x);for(let L of t.wallPanels){let R=[L.start,L.end,...L.holes.flatMap(N=>L.axis===0?[N.world.x0,N.world.x1]:[N.world.z0,N.world.z1])].sort((N,z)=>N-z);for(let N=1;N<R.length;N++){let z=R[N-1],k=R[N],B=(z+k)/2;k-z<.001||L.holes.some(F=>B>(L.axis===0?F.world.x0:F.world.z0)&&B<(L.axis===0?F.world.x1:F.world.z1))||(L.axis===0?c(k-z,.18,L.depth,B,.06,L.fixed):c(L.depth,.18,k-z,L.fixed,.06,B))}for(let N of L.holes){let z=L.axis===0?N.world.x0:N.world.z0,k=L.axis===0?N.world.x1:N.world.z1;N.kind==="window"&&(L.axis===0?c(k-z,.035,.035,(z+k)/2,.025,L.fixed,o):c(.035,.035,k-z,L.fixed,.025,(z+k)/2,o))}}for(let L of t.rooms)u(L.name,(L.x0+L.x1)/2,.26,(L.z0+L.z1)/2,L.id==="living"?3.5:3.2);return u(`${n.width.toFixed(2).replace(".",",")} m`,0,.03,n.halfDepth+.56,2.9),u(`${n.depth.toFixed(2).replace(".",",")} m`,-n.halfWidth-.62,.03,0,2.9),{root:r,direction:rh(.15,7,3.5),annotation:"Przyk\u0142ad: rzut Combstruct 30"}}let h=new Map(t.boards.map(x=>[x.id,x])),p=As.assembly.map(([x])=>h.get(x));if(p.length!==t.boards.length||p.some(x=>!x)||new Set(p).size!==p.length)throw new Error("Regenerate the assembly schedule for the current model");let g=[],y=[],m=[],f=[],S=0,M=0;for(let x of p){let L=x.mesh.geometry.index?x.mesh.geometry.toNonIndexed():x.mesh.geometry.clone();L.translate(...x.mesh.position.toArray()),g.push(L);let R=new an(L,30);y.push(R),S+=L.attributes.position.count,M+=R.attributes.position.count,m.push(S),f.push(M)}let v=No(g,!1),C=No(y,!1);g.forEach(x=>x.dispose()),y.forEach(x=>x.dispose());let E=new lt(v,s),I=new un(C,l);r.add(E,I);let b=p.length;if(i===1){let x=p.find(N=>N.surface==="front"&&N.axis===1&&N.index===9)||p[150],L=x.mesh.geometry.clone().translate(...x.mesh.position.toArray());d(L,o);let R=x.bounds.getCenter(rh());u(zo(x).id,R.x,R.y+.45,R.z+.25,1.4)}return{root:r,direction:rh(1.4,1,1.5),annotation:i===1?"Combstruct 30 \xB7 cyfrowy model element\xF3w":"Przesu\u0144 suwak i zobacz kolejno\u015B\u0107 monta\u017Cu",assembly(x){b=Math.max(0,Math.min(p.length,Math.round(x*p.length))),v.setDrawRange(0,m[b-1]||0),C.setDrawRange(0,f[b-1]||0)},getManufacturingState(){return{stage:i,totalBoards:p.length,visibleBoards:b,lastBoard:p[b-1]?.id||null,lastSupport:As.assembly[b-1]?.[1]||null,example:"Combstruct 30"}}}}var er=(...i)=>new D(...i),ah=1e-5;function lh(i,e){let t=i.attributes.position,n=1/0,r=-1/0;for(let s=0;s<t.count;s++){let o=t.getX(s)*e[0]+t.getY(s)*e[1]+t.getZ(s)*e[2];n=Math.min(n,o),r=Math.max(r,o)}return r-n}function kf(i){if(i.custom||i.stock.pixels<2||i.connectorCuts.length)return!1;let[e,t]=Yn(i.stock,!1),n=i.mesh.geometry;return Math.abs(lh(n,i.along)-(t-e))<ah&&Math.abs(lh(n,i.normal)-hc)<ah&&Math.abs(lh(n,i.thick)-ws)<ah}function Vf(i,e){return e.slice(0,-1).map((t,n)=>{let r=[];for(let s=t;s<e[n+1]&&r.length<4;s++)kf(i[s])&&r.push(s);if(r.length!==4)throw new Error("Missing complete native boards for the robot demonstration: "+n);return r})}function Hf(i){if(!kf(i))throw new Error("Robot pickup requires a complete native board: "+i.id);let e=er(...i.along).normalize(),t=er(...i.normal).normalize(),n=new rt().makeBasis(e,t,e.clone().cross(t)),s=new rt().makeBasis(er(1,0,0),er(0,0,1),er(0,-1,0)).multiply(n.invert()),o=new Zt().setFromRotationMatrix(s).invert(),a=i.bounds.getCenter(er()),l=i.mesh.geometry.clone().translate(...i.mesh.position.toArray()).translate(-a.x,-a.y,-a.z).applyMatrix4(s);l.computeBoundingBox();let c=l.boundingBox.getCenter(er());return l.translate(-c.x,-c.y,-c.z),a.add(c.applyQuaternion(o)),l.computeBoundingBox(),{geometry:l,target:a,rotation:o,dimensions:l.boundingBox.getSize(er()).toArray()}}var at=(...i)=>new D(...i),dh=at(0,1,0),hh=at(0,0,1),Ps=i=>Math.max(0,Math.min(1,i)),V_=i=>(i=Ps(i),i*i*(3-2*i)),Pt=(i,e,t)=>V_((i-e)/(t-e)),mn=qn.lerp,$n=(i,e=0)=>new Et({color:i,metalness:e,roughness:e?.36:.76}),ko={factory:{title:"Fabryka lights-off",duration:42,steps:[{at:0,label:"Podanie p\u0142yty",title:"P\u0142yta wje\u017Cd\u017Ca. Proces rusza.",text:"Magazyn podaje kolejn\u0105 p\u0142yt\u0119 OSB, MFP lub sklejki. Rolki prowadz\u0105 j\u0105 do rozkroju, a docisk utrzymuje pozycj\u0119 materia\u0142u."},{at:.15,label:"Pi\u0119\u0107 desek",title:"Jedna p\u0142yta. Pi\u0119\u0107 desek.",text:"Rozkr\xF3j wzd\u0142u\u017C d\u0142u\u017Cszej kraw\u0119dzi daje pi\u0119\u0107 prostych desek. Na tym etapie nie maj\u0105 jeszcze wpust\xF3w."},{at:.31,label:"Obr\xF3t na sztorc",title:"D\u0142u\u017Csz\u0105 kraw\u0119dzi\u0105 do g\xF3ry.",text:"Kaseta obrotowa stawia deski na d\u0142u\u017Cszych kraw\u0119dziach. Prowadnice i dociski utrzymuj\u0105 je pionowo przed frezowaniem."},{at:.47,label:"Frezowanie",title:"Siedem frez\xF3w. Jeden przejazd.",text:"Frezy pracuj\u0105 w jednej linii wzd\u0142u\u017C deski, na sta\u0142ej wysoko\u015Bci. Deski przeje\u017Cd\u017Caj\u0105 pod nimi na sztorc, jedna za drug\u0105. Pe\u0142ne wpusty i p\xF3\u0142wpusty na ko\u0144cach powstaj\u0105 w jednym przej\u015Bciu."},{at:.64,label:"Kontrola i ID",title:"Ka\u017Cda deska ma swoje miejsce.",text:"Stanowisko kontroli sprawdza profil, a znakowanie \u0142\u0105czy element z jego identyfikatorem w modelu budynku."},{at:.8,label:"Zestaw monta\u017Cowy",title:"Gotowe do kolejnego etapu.",text:"Deski trafiaj\u0105 do oznaczonego pakietu. Zestawy s\u0105 porz\u0105dkowane wed\u0142ug projektu i kolejno\u015Bci monta\u017Cu."}]},site:{title:"Robotyczny monta\u017C",duration:60,steps:[{at:0,label:"Pod\u0142oga",title:"Pobierz. Obr\xF3\u0107. Osad\u017A.",text:"Chwytak pobiera desk\u0119 ze stanowiska podawczego, przenosi j\u0105 nad p\u0142yt\u0119 i opuszcza w miejscu wskazanym przez model."},{at:.2,label:"\u015Aciany",title:"Ten sam element. Kolejny kierunek.",text:"Obrotowy chwytak ustawia desk\u0119 pionowo. Suwnica dociera nad kolejne \u017Cebra, zachowuj\u0105c dost\u0119p do wn\u0119trza budynku."},{at:.4,label:"Strop",title:"Monta\u017C prowadzony przez model.",text:"Po przygotowaniu podp\xF3r robot uk\u0142ada \u017Cebra stropu. Ka\u017Cdy pokazywany element ma identyfikator i docelow\u0105 pozycj\u0119 w konstrukcji."},{at:.6,label:"Dach",title:"Tak\u017Ce pod k\u0105tem po\u0142aci.",text:"Chwytak obraca desk\u0119 do orientacji dachu. Wsp\xF3lny model prowadzi od pakietu cz\u0119\u015Bci do kolejnego po\u0142\u0105czenia."},{at:.8,label:"Konstrukcja",title:"Jedna konstrukcja. Jeden zestaw danych.",text:"Pod\u0142oga, \u015Bciany, strop i dach powstaj\u0105 z tego samego systemu. Robot korzysta z danych przygotowanych dla produkcji i monta\u017Cu."}]}};function ot(i,e,t,n,r,s,o,a){let l=new lt(new on(e,t,n),a);return l.position.set(r,s,o),i.add(l),l}function An(i,e,t,n,r,s=dh){let o=new lt(new Ei(e,e,t,16),r);return o.position.copy(n),o.quaternion.setFromUnitVectors(dh,s),i.add(o),o}function Cs(i,e){let t=new lt(i,e);return t.add(new un(new an(i,30),new Jt({color:"#5b4632",transparent:!0,opacity:.5}))),t}function Fr(i,e,t,n,r,s=2,o="#dceae4"){let a=document.createElement("canvas");a.width=768,a.height=96;let l=a.getContext("2d");l.font="500 37px Helvetica Neue, Arial, sans-serif",l.textAlign="center",l.fillStyle=o,l.fillText(e,384,61);let c=new di(a);c.colorSpace=Ft;let d=new br(new ki({map:c,depthTest:!1}));return d.scale.set(s,s/8,1),d.position.set(t,n,r),i.add(d),d}function ch(i,e,t,n,r){ot(i,t,.15,2.85,e,.74,0,r);for(let s=-t/2+.12;s<t/2;s+=.27)An(i,.055,2.75,at(e+s,.86,0),n,hh);for(let s of[-1.48,1.48]){ot(i,t,.17,.09,e,.78,s,n);for(let o of[-t/2+.16,t/2-.16])ot(i,.1,.76,.1,e+o,.36,s,r)}}function _c(i,e,t,n,r){for(let s of[-t/2,t/2])ot(i,.18,n,.18,e,n/2,s,r);ot(i,.28,.24,t+.18,e,n,0,r)}function H_(){let i=new Ze,e=$n("#8fa4a8",.6),t=$n("#30474b",.35),n=$n("#cba36b"),r=$n("#398d7d",.35),s=$n("#17282b"),o=new Et({color:"#e3f3ed",emissive:"#a7e1cc",emissiveIntensity:1.5});ot(i,22,.18,7,0,-.2,0,s),ch(i,-6.3,5.3,e,t),ch(i,-.7,5.4,e,t),ch(i,4.5,4.3,e,t);for(let A=0;A<10;A++)ot(i,1.25,Ke,2.5,-8.2,.98+A*.024,0,n);_c(i,-8.2,3.35,2.7,t),ot(i,3.5,.09,.12,-7.8,2.67,0,e);let a=new Ze;i.add(a),ot(a,1,.09,1.6,0,0,0,e);for(let A of[-.38,.38])for(let V of[-.56,.56])An(a,.07,.16,at(A,-.1,V),t);let l=ot(i,.08,1,.08,-8.2,2,0,e),c=Cs(new on(1.25,Ke,2.5),n);i.add(c);let d=new Ze;i.add(d);let u=[],h=[],p=1.05,g=20,y=.65,m=.47,f=7.48,S=new rt().makeBasis(hh,dh,at(-1,0,0)),M=Oo(6).applyMatrix4(S).translate(0,bt/2,-3*Ae);for(let A=0;A<5;A++){let V=new Ze;d.add(V),u.push(V);let q=Cs(new on(.24,Ke,2.5),n);V.add(q);let ue=new Ze;i.add(ue),ue.visible=!1;let pe=Cs(new on(Ke,bt,6*Ae).translate(0,bt/2,0),n),J=Cs(M.clone(),n);ue.add(pe,J);let ee=[];for(let he=0;he<7;he++){let Y=Math.max(0,he*Ae-Ke),de=Math.min(6*Ae,he*Ae+Ke);ee.push(ot(ue,Ke,bt/2,de-Y,0,3*bt/4,(Y+de)/2-3*Ae,n))}let we=new Ze;ue.add(we);for(let he of[-.92,.92]){ot(we,.15,.045,.14,0,-.0225,he,r);for(let Y of[-1,1])ot(we,.025,.085,.14,Y*(Ke/2+.0125),.02,he,t)}h.push({group:ue,raw:pe,finished:J,chips:ee,saddle:we})}_c(i,-4.65,3.4,2.45,t);let v=new Ze;i.add(v),ot(v,1.5,.16,.22,0,0,0,e);let C=ot(i,.09,1,.09,-4.65,2,0,e);for(let A=0;A<4;A++){let V=An(v,.2,.012,at((A-1.5)*.25,-.17,0),e,at(1,0,0));V.userData.saw=!0}for(let A of[-5.36,-3.95])An(i,.075,2.6,at(A,1.06,0),t,hh);let E=[];for(let A=0;A<5;A++){let V=new Ze;i.add(V);for(let q of[-.92,.92])ot(V,.29,.055,.14,0,-.033,q,r),ot(V,.03,.15,.14,-.135,.015,q,t);E.push(V)}_c(i,p,3.45,2.8,t);let I=new Ze;i.add(I),I.position.set(p,1.36,0),ot(I,.3,.2,2.95,0,.27,0,e);for(let A of[-1.46,1.46])ot(i,.12,1.07,.12,p,2.265,A,e);let b=[];for(let A=0;A<7;A++){let V=(A-3)*Ae;An(I,.07,.32,at(0,.04,V),r);let q=An(I,Ke,.18,at(0,-.21,V),e);ot(q,.004,.17,.004,Ke*.75,0,0,t),b.push(q)}for(let A of[-.92,.92])ot(i,9.4,.055,.16,2.18,.885,A,t);for(let A of[-1.9,2.5])i.add(new Er(at(1,0,0),at(A,.94,1.45),.8,7522734,.17,.1));for(let A of[-4.65,1.05,4.45])ot(i,1.5,.035,.06,A,2.34,-.2,o);_c(i,4.45,3.25,2.2,e),ot(i,.4,.4,.35,4.45,1.85,0,t);let x=new lt(new wr(1.35,2.5),new ci({color:"#7cd3b5",transparent:!0,opacity:.19,side:Dt,depthWrite:!1}));x.rotation.x=-Math.PI/2,i.add(x);let L=new Ze;i.add(L),ot(L,1.5,.14,2.85,0,0,0,n);for(let A of[-1,1])ot(L,1.55,.08,.1,0,-.1,A,t);for(let A of[-.64,.64])for(let V of[-1.24,1.24])ot(L,.1,.86,.1,A,-.5,V,t);let R=[];for(let A of[-.84,.84])R.push(ot(L,.3,.025,.035,0,.07+5*Ke+.015,A,r));let N=Fr(i,"C30 \xB7 KIT",7.6,.38,1.9,1.55);Fr(i,"OSB / MFP / Sklejka",-8.1,.07,2.4,3),Fr(i,"5 \xD7",-4.65,.07,2.4,1.4),Fr(i,"7 \xD7",p,1.98,0,1.3),Fr(i,"CNC",p,.07,2.4,1.3),Fr(i,"ID",4.45,.07,2.4,1.1);for(let A of[-4.65,1.05])An(i,.12,.7,at(A,2.75,-1.3),t),ot(i,.58,.5,.48,A,.33,-2.2,t);let z={},k=-8.2;function B(A){A=Ps(A);let V=A<.035?-8.2:A<.075?mn(-8.2,-6.8,Pt(A,.035,.075)):A<.1?-6.8:mn(-6.8,-4.65,Pt(A,.1,.15)),q=A<.035?mn(1.224,1.7,Pt(A,0,.035)):A<.075?1.7:A<.1?mn(1.7,.94,Pt(A,.075,.1)):.94,ue=A<.15?V:A<.31?-4.65:A<m?mn(-4.65,-.75,Pt(A,.31,m)):-.75+g*(A-m);c.visible=A<.22,c.position.set(ue,A<.15?q:.94,0),a.position.set(A<.1?V:mn(-6.8,-8.2,Pt(A,.1,.15)),A<.1?q+.19:mn(1.13,2.1,Pt(A,.1,.125)),0),l.scale.y=2.67-a.position.y,l.position.set(a.position.x,(2.67+a.position.y)/2,0),d.visible=A>=.22&&A<.47;let pe=Pt(A,.33,.43)*Math.PI/2;for(let he=0;he<5;he++){let Y=.94+Math.sin(pe)*.12,de=mn(.25,y,Pt(A,.36,m));u[he].position.set(ue+(he-2)*de,Y,0),u[he].rotation.z=pe,E[he].visible=A>=.31&&A<.47,E[he].position.copy(u[he].position),E[he].rotation.z=pe}v.position.set(-4.65,A>=.15&&A<.31?1.15:1.68,mn(-1.5,1.5,Pt(A,.15,.29))),C.scale.y=2.45-v.position.y,C.position.set(-4.65,(2.45+v.position.y)/2,v.position.z),b.forEach(he=>he.rotation.y=A*42*45);let J=[];for(let he=0;he<5;he++){let{group:Y,raw:de,finished:ne,chips:De,saddle:Le}=h[he],ze=ue+(he-2)*y,Je=A<m?0:Ps((ze-p+Ke/2)/Ke),Be=m+(f+.75-(he-2)*y)/g,te=Pt(A,Be,Be+.02),ae=1-Je;Y.visible=A>=m,de.visible=Je===0,ne.visible=Je>0,De.forEach(oe=>{oe.visible=Je>0&&Je<1,oe.scale.x=Math.max(.001,ae),oe.position.x=-Ke/2+ae*Ke/2}),Y.position.set(Math.min(f,ze),mn(.94,.89+Ke/2+(4-he)*Ke,te),0),Y.rotation.z=-te*Math.PI/2,Le.visible=te<1,J.push({id:he+1,x:Y.position.x,z:Y.position.z,cut:Je,slots:Je===1?7:0,packed:te===1})}x.visible=J.some(he=>Math.abs(he.x-4.45)<.28)&&A>=m,x.position.set(4.45,1.45,0);let ee=J.every(he=>he.packed);k=A<m?ue:h.reduce((he,Y)=>he+Y.group.position.x+bt/2*Math.sin(-Y.group.rotation.z),0)/h.length,L.position.set(7.6,.82,0),R.forEach(he=>he.visible=ee),N.visible=ee;let we=ko.factory.steps.findLastIndex(he=>A>=he.at);z={process:"factory",progress:A,step:we,blanks:5,orientation:A<m?"flat-to-edge":"on-edge",milledSlots:Math.max(...J.map(he=>he.slots)),toolApproach:"top",cutterCount:b.length,cutterPositions:b.map(he=>he.getWorldPosition(at()).toArray()),feedAxis:"x",boardAxis:"z",boards:J,complete:ee}}B(0);let F=new zt(at(-10.1,-.2,-2.7),at(9.1,3.2,2.8));return{root:i,direction:at(.8,1.25,2.6),overviewDirection:at(.8,1.25,2.6),detailDirection:at(2.1,1.6,1.2),focus:F,overview:F,background:"#18292c",annotation:"Koncepcja linii automatycznej",update:B,getRoboticsState:()=>z,getDetailFocus(){let A=Pt(z.progress,.36,.5)*(1-Pt(z.progress,.65,.81)),V=at(mn(1.8,1.45,A),mn(.95,.58,A),mn(1.65,1.34,A)),q=at(k,mn(1.6,1.35,A),0);return new zt(q.clone().sub(V),q.clone().add(V))},dispose(){M.dispose()}}}function G_(){let i=new Ze,e=Nr(),t=e.dimensions,n=bc(3);i.add(n.root);let r=new Map(e.boards.map(J=>[J.id,J])),s=As.assembly.map(([J])=>r.get(J)),o=J=>{let ee=s.findIndex(J);if(ee<0)throw Error("Missing construction stage in the robotics example");return ee},a=[0,o(J=>J.kind==="wall"&&J.axis===1),o(J=>J.kind==="ceiling"),o(J=>J.kind==="roof-slope"),s.length],l=Vf(s,a),c=$n("#82969a",.6),d=$n("#36524d",.35),u=$n("#348d7b",.35),h=$n("#cba36b"),p=$n("#e3e9df"),g=-t.halfWidth-1.5,y=t.halfWidth+1.5,m=-t.halfDepth-t.terraceDepth-1.4,f=t.halfDepth+4.2,S=t.roofRidgeY+2.5;ot(i,y-g+2,.12,f-m+1,0,-.15,(m+f)/2,p);for(let J of[g,y]){ot(i,.14,.14,f-m,J,0,(m+f)/2,c);for(let ee=m;ee<f;ee+=.8)ot(i,.55,.09,.22,J,-.04,ee,d)}let M=new Ze;i.add(M);for(let J of[g,y]){ot(M,.3,S,.3,J,S/2,0,d),ot(M,.65,.3,1.5,J,.2,0,u);for(let ee of[-.5,.5])An(M,.14,.25,at(J,.1,ee),c,at(1,0,0))}for(let J of[-.21,.21])ot(M,y-g+.4,.26,.16,0,S,J,c);let v=new Ze;M.add(v),ot(v,.6,.3,.72,0,S-.05,0,u);let C=ot(v,.14,1,.14,0,S-.8,0,c),E=new Ze;i.add(E),An(E,.13,.22,at(0,0,0),d),An(E,.18,.08,at(0,.12,0),u);let I=new Ze;i.add(I),ot(I,.65,.065,.1,0,0,0,d);for(let J of[-.22,.22])An(I,.018,.09,at(J,-.075,0),c),An(I,.028,.07,at(J,-.155,0),d),An(I,.032,.01,at(J,-.191,0),u);let b=new lt(new po(.11,16,12),c);i.add(b);let x=.765,L=at(g+1.9,x+Ke/2,f-1.8);ot(i,3.05,.13,1.2,L.x,.7,L.z,h);for(let J of[-1.2,1.2])ot(i,.15,.73,1.1,L.x+J,.29,L.z,d);let R=Cs(Oo(6).translate(-3*Ae,0,0),h);R.position.copy(L),i.add(R);let N=Cs(new on(.01,.01,.01),$n("#379b88"));i.add(N);let z=Fr(i,"Combstruct 30",t.halfWidth+.15,.15,f-.2,2.9,"#254331"),k=-1,B=at(),F=at(0,.205,-bt/4),A=new Zt,V=[],q={};function ue(J){if(k===J)return;k=J;let ee=s[J],we=Hf(ee);B.copy(we.target),A.copy(we.rotation),V=we.dimensions,N.geometry.dispose(),N.children[0].geometry.dispose(),N.geometry=we.geometry,N.children[0].geometry=new an(N.geometry,30),R.geometry.dispose(),R.children[0].geometry.dispose(),R.geometry=N.geometry.clone(),R.quaternion.identity(),R.children[0].geometry=new an(R.geometry,30),L.y=x-N.geometry.boundingBox.min.y,R.position.copy(L)}function pe(J){let ee=Ps(J),we=Math.min(4,Math.floor(ee*5)),he=Ps(ee*5-we);if(we===4){n.assembly(1),N.visible=!1,R.visible=!1,M.position.z=f-.5,v.position.x=y-.5,C.scale.y=1,C.position.y=S-.8,E.position.set(y-.5,S-1.4,M.position.z),I.position.copy(E.position).add(at(0,-.18,0)),I.quaternion.identity(),b.position.copy(I.position),q={process:"site",progress:ee,step:we,installed:s.length,total:s.length,complete:!0};return}let Y=4,de=Math.min(Y-1,Math.floor(he*Y)),ne=Ps(he*Y-de),De=l[we][de];ue(De);let Le=ne>=.86;n.assembly((De+(Le?1:0))/s.length);let ze=t.roofRidgeY+1.25,Je=L.clone().setY(ze),Be=B.clone().setY(ze),te=at();ne<.16?te.copy(L).add(at(0,mn(.5,0,Pt(ne,0,.16)),0)):ne<.35?te.lerpVectors(L,Je,Pt(ne,.16,.35)):ne<.6?te.lerpVectors(Je,Be,Pt(ne,.35,.6)):ne<.86?te.lerpVectors(Be,B,Pt(ne,.6,.86)):ne<.92?te.lerpVectors(B,Be,Pt(ne,.86,.92)):ne<.98?te.lerpVectors(Be,Je,Pt(ne,.92,.98)):te.lerpVectors(Je,L.clone().add(at(0,.5,0)),Pt(ne,.98,1)),N.visible=ne>=.16&&!Le,R.visible=ne<.16,N.position.copy(te),N.quaternion.identity().slerp(A,Pt(ne,.35,.6)*(1-Pt(ne,.92,.98)));let ae=te.clone().add(F.clone().applyQuaternion(N.quaternion));M.position.z=ae.z,v.position.x=ae.x;let oe=Math.max(.35,S-ae.y-.25);C.scale.y=oe,C.position.y=S-oe/2,E.position.copy(ae).add(at(0,.18,0)),I.position.copy(ae),I.quaternion.copy(N.quaternion),b.position.copy(ae),z.visible=!0,q={process:"site",progress:ee,step:we,installed:De+(Le?1:0),total:s.length,activeBoard:s[De].id,boardKind:s[De].kind,boardProfile:s[De].trim?"ending":"ordinary",boardDimensions:V,nativeStock:!0,pickupGap:L.y+N.geometry.boundingBox.min.y-x,pickupPosition:L.toArray(),support:As.assembly[De][1],carrying:N.visible,sourceVisible:R.visible,phase:ne<.16?"pick":ne<.6?"carry":ne<.86?"place":"release",complete:!1,selectedOperations:!0}}return pe(0),{root:i,direction:at(1.5,1.15,2),distanceScale:.83,focus:new zt(at(g-1,-.2,m-.4),at(y+.7,S+.35,f+.4)),annotation:"Wybrane operacje \xB7 Combstruct 30",update:pe,getRoboticsState:()=>q}}function Gf(i){return i==="site"?G_():H_()}var Rn=[{id:"deska",group:"Elementy i zasady",title:"Deska grzebieniowa",lead:"Jeden powtarzalny element tworzy pod\u0142og\u0119, \u015Bciany, strop i dach.",text:"Desk\u0119 wycinamy z p\u0142yty OSB, MFP lub sklejki. Wpusty si\u0119gaj\u0105 do po\u0142owy jej wysoko\u015Bci. Dwie deski z\u0142o\u017Cone powierzchniami tworz\u0105 par\u0119, a kr\xF3tsze warianty zachowuj\u0105 ten sam skok modu\u0142u.",rule:"24 cm wysoko\u015Bci. 18 mm grubo\u015Bci jednej deski.",scene:"beam"},{id:"uciaglanie",group:"Elementy i zasady",title:"Para desek i uci\u0105glanie",lead:"Przed\u0142u\u017Camy \u017Cebro, dok\u0142adaj\u0105c kolejne deski w dw\xF3ch warstwach.",text:"\u0141\u0105czenia warstw mijaj\u0105 si\u0119: przy ko\u0144cu deski w jednej warstwie biegnie pe\u0142ny odcinek drugiej. W tym przyk\u0142adzie rozsuni\u0119cie wzd\u0142u\u017C belki wynosi dwa modu\u0142y. Zako\u0144czenie jednej warstwy jest kr\xF3tsze o 24 cm.",rule:"Styki obu warstw nie wypadaj\u0105 w tym samym miejscu.",scene:"continuity",spread:!0},{id:"podloga-strop",group:"Elementy i zasady",title:"Pod\u0142oga i strop",lead:"\u017Bebra r\xF3wnoleg\u0142e do kr\xF3tszej kraw\u0119dzi p\u0142yty maj\u0105 wpusty do g\xF3ry.",text:"To sta\u0142a zasada uk\u0142adania. Na modelu wyr\xF3\u017Cnili\u015Bmy t\u0119 rodzin\u0119 \u017Ceber turkusem. \u017Bebra biegn\u0105ce prostopadle maj\u0105 wpusty w przeciwn\u0105 stron\u0119, dzi\u0119ki czemu obie rodziny sk\u0142adaj\u0105 si\u0119 na krzy\u017C.",rule:"Kr\xF3tszy kierunek no\u015Bny \u2014 wpusty do g\xF3ry.",scene:"slab",arrows:!0,spread:!0},{id:"sciany-zewnetrzne",group:"Elementy i zasady",title:"\u015Aciany zewn\u0119trzne",lead:"Pionowe \u017Cebra maj\u0105 wpusty skierowane na zewn\u0105trz domu.",text:"Turkusowe piony pokazuj\u0105 w\u0142a\u015Bciw\u0105 orientacj\u0119. Poziome \u017Cebra \u0142\u0105cz\u0105 si\u0119 z nimi od przeciwnej strony. \u015Aciana zaczyna si\u0119 od poziomu podstawy konstrukcji, a jej zako\u0144czenia tworz\u0105 po\u0142\u0105czenie z pod\u0142og\u0105.",rule:"Piony: wpusty na zewn\u0105trz. Linia \u017Ceber pozostaje ci\u0105g\u0142a.",scene:"wall",arrows:!0,spread:!0},{id:"dach",group:"Elementy i zasady",title:"Dach",lead:"Tak\u017Ce w dachu kr\xF3tszy kierunek p\u0142yty ma wpusty do g\xF3ry.",text:"Na po\u0142aci \u201Edo g\xF3ry\u201D oznacza stron\u0119 pokrycia dachowego. Wyr\xF3\u017Cnione \u017Cebra biegn\u0105 r\xF3wnolegle do kr\xF3tszej kraw\u0119dzi po\u0142aci. Druga rodzina zamyka siatk\u0119 od przeciwnej strony.",rule:"Ta sama zasada co w stropie, obr\xF3cona razem z po\u0142aci\u0105.",scene:"roof",arrows:!0,spread:!0},{id:"deski-laczeniowe",group:"Elementy i zasady",title:"Zako\u0144czenia i pe\u0142ny wpust",lead:"Po\u0142\u0105czenie powstaje dzi\u0119ki odpowiednim d\u0142ugo\u015Bciom desek.",text:"Podstawowe zako\u0144czenie jest kr\xF3tsze o 24 cm. Przy po\u0142\u0105czeniu trzech kierunk\xF3w stosujemy pe\u0142ny wpust na ko\u0144cu jednej deski oraz zako\u0144czenie kr\xF3tsze o kolejne 18 mm. Skok pozosta\u0142ych wpust\xF3w pozostaje taki sam.",rule:"Pe\u0142ny wpust 36 mm. Dodatkowe skr\xF3cenie zako\u0144czenia 18 mm.",scene:"connectors",variants:!0},{id:"krzyzowanie",group:"Po\u0142\u0105czenia",title:"\u017Bebra na krzy\u017C",lead:"Dwie prostopad\u0142e pary wsuwaj\u0105 si\u0119 w siebie przez wpusty.",text:"Ka\u017Cda rodzina oddaje po\u0142ow\u0119 wysoko\u015Bci w miejscu skrzy\u017Cowania. Po z\u0142o\u017Ceniu obie mieszcz\u0105 si\u0119 w jednej warstwie konstrukcyjnej o g\u0142\u0119boko\u015Bci 24 cm. Rozsu\u0144 elementy, aby zobaczy\u0107 obie strony wpustu.",rule:"Wpust do g\xF3ry spotyka wpust do do\u0142u.",scene:"cross",spread:!0},{id:"podloga-sciana",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana zewn\u0119trzna",lead:"D\u0142u\u017Csza cz\u0119\u015B\u0107 zako\u0144czenia przylega do boku pe\u0142nego \u017Cebra.",text:"Kr\xF3tsza opiera si\u0119 o \u017Cebro, a d\u0142u\u017Csza schodzi obok niego do poziomu podstawy konstrukcji. Para \u015Bciany i para pod\u0142ogi pozostaj\u0105 w tej samej p\u0142aszczy\u017Anie.",rule:"Pe\u0142na deska i zako\u0144czenie uzupe\u0142niaj\u0105 si\u0119 na 24 cm.",scene:"joint",joint:"edge-floor",spread:!0},{id:"taras",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana \u2014 taras",lead:"Pod\u0142oga mo\u017Ce biec dalej, poza obrys domu.",text:"Jedna warstwa biegnie dalej na taras. W drugiej pe\u0142ny wpust na ko\u0144cu deski i kr\xF3tsze zako\u0144czenie tworz\u0105 miejsce na pion \u015Bciany. Poprzeczne \u017Cebro pod\u0142ogi pozostaje ods\u0142oni\u0119te.",rule:"Ci\u0105g\u0142o\u015B\u0107 tarasu i miejsce na wszystkie trzy kierunki \u017Ceber.",scene:"joint",joint:"terrace",spread:!0,crossing:!0},{id:"podloga-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Pod\u0142oga \u2014 \u015Bciana wewn\u0119trzna",lead:"\u015Aciana wewn\u0119trzna wchodzi w plaster pod\u0142ogi na tej samej zasadzie.",text:"Pion zaczyna si\u0119 przy podstawie konstrukcji. Jego kr\xF3tsza warstwa opiera si\u0119 na pe\u0142nym \u017Cebrze pod\u0142ogi. W drugiej warstwie d\u0142ugo\u015Bci desek pozostawiaj\u0105 miejsce na \u015Bcian\u0119 i poprzeczne \u017Cebro, bez bocznych wybra\u0144.",rule:"Wsp\xF3lna linia \u017Ceber, bez dodatkowej deski pod \u015Bcian\u0105.",scene:"joint",joint:"interior-floor",spread:!0,crossing:!0},{id:"polaczenie-scian",group:"Po\u0142\u0105czenia",title:"\u015Aciana wewn\u0119trzna \u2014 zewn\u0119trzna",lead:"Poziome \u017Cebra obu \u015Bcian spotykaj\u0105 si\u0119 w jednej p\u0142aszczy\u017Anie.",text:"Zako\u0144czenia sk\u0142adaj\u0105 si\u0119 naprzemiennie. Jedna deska ko\u0144czy si\u0119 pe\u0142nym wpustem, a s\u0105siednia zako\u0144czeniowa jest kr\xF3tsza o dodatkowe 18 mm. Pion \u015Bciany zewn\u0119trznej mie\u015Bci si\u0119 pomi\u0119dzy nimi.",rule:"Trzeci element wchodzi w ods\u0142oni\u0119ty wpust.",scene:"joint",joint:"wall-wall",spread:!0,crossing:!0},{id:"naroznik",group:"Po\u0142\u0105czenia",title:"Naro\u017Cnik \u015Bcian zewn\u0119trznych",lead:"Dwie \u015Bciany zamykaj\u0105 obrys w naro\u017Cniku.",text:"Poziome pary spotykaj\u0105 si\u0119 naprzemiennie pe\u0142n\u0105 desk\u0105 i zako\u0144czeniem. Ka\u017Cda \u015Bciana zachowuje sw\xF3j kierunek: wpusty jej pionowych \u017Ceber otwieraj\u0105 si\u0119 na zewn\u0105trz budynku.",rule:"Dwie \u015Bciany, wsp\xF3lny poziom par desek.",scene:"corner",spread:!0},{id:"sciany-wewnetrzne",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie \u015Bcian wewn\u0119trznych",lead:"Przegroda poprzeczna dochodzi do ci\u0105g\u0142ej \u015Bciany.",text:"Jedna warstwa przechodzi przez skrzy\u017Cowanie, a druga przyjmuje zako\u0144czenie przegrody. Pe\u0142ny wpust ko\u0144cowy i dodatkowe skr\xF3cenie zako\u0144czenia pozostawiaj\u0105 miejsce na pion. Pary desek zachowuj\u0105 wsp\xF3lne p\u0142aszczyzny.",rule:"Zako\u0144czenie wchodzi w ci\u0105g\u0142\u0105 par\u0119 desek.",scene:"joint",joint:"partition-t",spread:!0,crossing:!0},{id:"strop-sciana",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana zewn\u0119trzna",lead:"Strop le\u017Cy na poziomym \u017Cebrze \u015Bciany.",text:"Dolna deska pionowa ko\u0144czy si\u0119 pe\u0142nym wpustem. Pozioma para \u015Bciany przechodzi przez niego, a strop le\u017Cy na jej g\xF3rnej powierzchni. G\xF3rna deska zako\u0144czeniowa zaczyna si\u0119 nad stropem, kr\xF3tsza o dodatkowe 18 mm.",rule:"Strop nie przerywa linii konstrukcji \u015Bciany.",scene:"joint",joint:"ceiling-wall",spread:!0,crossing:!0},{id:"strop-wewnetrzna",group:"Po\u0142\u0105czenia",title:"Strop \u2014 \u015Bciana wewn\u0119trzna",lead:"Pion dochodzi do stropu w tej samej linii co \u017Cebro pod\u0142ogi.",text:"Strop opiera si\u0119 na g\xF3rnym poziomym rz\u0119dzie \u015Bciany wewn\u0119trznej. Zako\u0144czenia i pe\u0142ne wpusty pozwalaj\u0105 z\u0142o\u017Cy\u0107 trzy kierunki \u017Ceber bez bocznych wybra\u0144.",rule:"Strop powy\u017Cej poziomego \u017Cebra \u015Bciany.",scene:"joint",joint:"ceiling-partition",spread:!0,crossing:!0},{id:"dach-sciana",group:"Po\u0142\u0105czenia",title:"Dach \u2014 \u015Bciana",lead:"\u017Bebro po\u0142aci trafia w lini\u0119 pionowego \u017Cebra \u015Bciany.",text:"Przy okapie \u0142\u0105cz\u0105 si\u0119 dach, \u015Bciana i sufit. Br\u0105zowe \u017Cebro sufitu le\u017Cy nad poziomym rz\u0119dem \u015Bciany. Turkusowe \u017Cebro dachowe biegnie dalej poza \u015Bcian\u0119, tworz\u0105c okap.",rule:"Po\u0142a\u0107 i \u015Bciana spotykaj\u0105 si\u0119 na tej samej linii \u017Cebra.",scene:"roof-wall"},{id:"kalenica",group:"Po\u0142\u0105czenia",title:"Po\u0142\u0105czenie po\u0142aci w kalenicy",lead:"Dwie po\u0142acie zamykaj\u0105 dach dopasowanymi zako\u0144czeniami.",text:"W tym modelu po\u0142acie maj\u0105 nachylenie 35\xB0. Ko\u0144ce \u017Ceber s\u0105 doci\u0119te do p\u0142aszczyzny kalenicy, tak aby obie bry\u0142y styka\u0142y si\u0119 bez nak\u0142adania. To po\u0142\u0105czenie k\u0105towe, zale\u017Cne od geometrii dachu.",rule:"K\u0105t i zako\u0144czenie wynikaj\u0105 z projektu dachu.",scene:"ridge"}],xc=[{id:"standard",name:"Zwyk\u0142a",trim:null,description:"Deska z wpustami i p\xF3\u0142wpustami na ko\u0144cach."},{id:"ending",name:"Zako\u0144czeniowa \xB7 \u2212240 mm",trim:"left",description:"Podstawowe zako\u0144czenie kr\xF3tsze o wysoko\u015B\u0107 deski: 240 mm."},{id:"full-end-slot",name:"Pe\u0142ny wpust ko\u0144cowy \xB7 36 mm",modules:5,extendEnd:.018,description:"Pe\u0142na po\u0142owa ko\u0144ca d\u0142u\u017Csza o 18 mm. Wpust ko\u0144cowy ma 36 mm; pozosta\u0142e wpusty zachowuj\u0105 swoje po\u0142o\u017Cenie."},{id:"ending-short",name:"Zako\u0144czeniowa \xB7 \u2212258 mm",trim:"left",extraStartTrim:.018,description:"Zako\u0144czenie kr\xF3tsze o 240 + 18 mm. Tworzy miejsce na \u017Cebro przy pe\u0142nym wpu\u015Bcie ko\u0144cowym."}];var Ee=i=>document.querySelector(i),Pn=i=>[...document.querySelectorAll(i)],bi=Ee("#technology-viewport"),tr=Ee(".viewport-loading"),Kt="combstruct",Lt=Rn.find(i=>i.id==="podloga-strop"),Ho=xc[0],Kn="house",Ln=0,Wf=Ur(sh),Rt,Nt,wt,Pi,Xe,uh=0,fh,Nn="factory",Cn=0,Un=!matchMedia("(prefers-reduced-motion: reduce)").matches,ph=!0,Qn=0,mh=-1,gi=!0,Vo=null,nr=(...i)=>new D(...i);function Qt(){!uh&&Rt&&(uh=requestAnimationFrame(i=>{if(uh=0,Kt==="robotics"&&Un&&ph&&!document.hidden){let e=Qn?Math.min(.1,(i-Qn)/1e3):0;Cn=Math.min(1,Cn+e/ko[Nn].duration),Qn=i,Cn>=1&&(Un=!1),Ns({dt:e})}else Qn=0;wt.update(),Rt.render(Pi,Nt),Kt==="robotics"&&Un&&ph&&!document.hidden&&Qt()}))}function Xf(i){let e=i.getCenter(nr()),t=(Xe.direction||nr(1.5,1.4,2)).clone().normalize(),n=nr(0,1,0).cross(t).normalize(),r=t.clone().cross(n).normalize(),s=Math.tan(qn.degToRad(Nt.fov/2)),o=s*Nt.aspect,a=0;for(let l of[i.min.x,i.max.x])for(let c of[i.min.y,i.max.y])for(let d of[i.min.z,i.max.z]){let u=nr(l,c,d).sub(e);a=Math.max(a,Math.abs(u.dot(n))/o+u.dot(t),Math.abs(u.dot(r))/s+u.dot(t))}return{center:e,direction:t,distance:Math.max(.8,a*1.14*(Xe.distanceScale||1))}}function gh(){return Kt==="robotics"&&gi&&!!Xe?.getDetailFocus}function Go(){if(!Xe||!Rt||!bi.clientWidth||!bi.clientHeight)return;let i=Xe.focus||new zt().setFromObject(Xe.root),e=Xf(i),{center:t,direction:n,distance:r}=e,s=wt.enableDamping;if(wt.enableDamping=!1,wt.update(),wt.target.copy(t),Nt.position.copy(t).addScaledVector(n,r),wt.update(),Vo=gh()?e:null,!Xe.focus)for(let o=0;o<2;o++){let a=Math.tan(qn.degToRad(Nt.fov/2));Xe.root.updateMatrixWorld(!0),Nt.updateMatrixWorld();let l=1/0,c=-1/0,d=1/0,u=-1/0,h=nr();Xe.root.traverseVisible(S=>{if(!S.geometry?.attributes.position)return;let M=S.geometry.attributes.position;for(let v=0;v<M.count;v++)h.fromBufferAttribute(M,v).applyMatrix4(S.matrixWorld).project(Nt),l=Math.min(l,h.x),c=Math.max(c,h.x),d=Math.min(d,h.y),u=Math.max(u,h.y)});let p=Nt.position.distanceTo(wt.target),g=nr().setFromMatrixColumn(Nt.matrixWorld,0),y=nr().setFromMatrixColumn(Nt.matrixWorld,1),m=g.multiplyScalar((l+c)/2*p*a*Nt.aspect).add(y.multiplyScalar((d+u)/2*p*a));wt.target.add(m),Nt.position.add(m);let f=Math.max((c-l)/1.72,(u-d)/1.62);Number.isFinite(f)&&f>0&&Nt.position.sub(wt.target).multiplyScalar(f).add(wt.target),wt.update()}wt.enableDamping=s,Qt()}function W_(i,e){if(!gh()||(Xe.focus=Xe.getDetailFocus(),Xe.direction=Xe.detailDirection||Xe.direction,!Vo||!bi.clientWidth||!bi.clientHeight))return;let t=Xf(Xe.focus),n=Vo,r=e?1:1-Math.exp(-6*i);t.center.copy(n.center).lerp(Xe.focus.getCenter(nr()),r),t.distance=qn.lerp(n.distance,t.distance,r);let s=Nt.position.clone().sub(wt.target).multiplyScalar(t.distance/n.distance);wt.target.add(t.center.clone().sub(n.center)),Nt.position.copy(wt.target).add(s),Vo=t}function qf(){if(!Rt)return;let i=bi.clientWidth,e=bi.clientHeight;!i||!e||(Rt.setSize(i,e,!1),Nt.aspect=i/e,Nt.updateProjectionMatrix(),Go())}function X_(i){Ee("#element-id").textContent=i.id,Ee("#element-type").textContent=i.type,Ee("#element-surface").textContent=i.surface,Ee("#element-length").textContent=i.length,Ee("#element-metric-label").textContent=i.metricLabel||"D\u0142ugo\u015B\u0107 w modelu",Ee("#element-detail-label").textContent=i.detailLabel||"Grubo\u015B\u0107 p\u0142yty",Ee("#element-thickness").textContent=i.detail||"18 mm"}function Ds(){if(Rt)try{Vo=null,Xe&&(Pi.remove(Xe.root),Lf(Xe.root),Xe.dispose?.()),Xe=Kt==="combstruct"?Nf(Lt,Ho):Kt==="bim"?Uf(Kn,X_):Kt==="robotics"?Gf(Nn):bc(Ln,Wf),Pi.background.set(Xe.background||"#f2f5f1"),bi.dataset.robotics=Kt==="robotics"?Nn:"",Pi.add(Xe.root),Xe.root.updateMatrixWorld(!0),Ee("#scene-annotation").textContent=Xe.annotation||"",Xe.arrows&&(Xe.arrows.visible=Ee("#arrows").checked),Kt==="combstruct"&&Lt.crossing&&Xe.crossing?.(Ee("#crossing").checked),Kt==="bim"&&Xe.finish&&jf(),Kt==="flow"&&Ln===3&&Jf(),Kt==="robotics"&&(Ns(),gi&&Xe.getDetailFocus&&(Xe.focus=Xe.getDetailFocus(),Xe.direction=Xe.detailDirection||Xe.direction)),tr.hidden=!0,qf(),Qt()}catch(i){console.error(i),tr.hidden=!1,tr.textContent="Nie uda\u0142o si\u0119 przygotowa\u0107 tego widoku. Od\u015Bwie\u017C stron\u0119, aby spr\xF3bowa\u0107 ponownie.",tr.setAttribute("role","alert")}}function q_(){try{Pi=new eo,Pi.background=new st("#f2f5f1"),Nt=new sn(36,1,.005,160),Rt=new sc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"}),Rt.localClippingEnabled=!0,Rt.setPixelRatio(Math.min(devicePixelRatio||1,1.6)),Rt.toneMapping=wo,Rt.toneMappingExposure=1.07,bi.prepend(Rt.domElement),Rt.domElement.tabIndex=0,Rt.domElement.setAttribute("aria-label","Model 3D. Przeci\u0105gnij, aby obr\xF3ci\u0107; przewi\u0144, aby przybli\u017Cy\u0107. Klawisz Home przywraca widok. W sekcji BIM kliknij widoczny element, aby go wybra\u0107."),wt=new cc(Nt,Rt.domElement),wt.enableDamping=!matchMedia("(prefers-reduced-motion: reduce)").matches,wt.dampingFactor=.12,wt.minDistance=.3,wt.maxDistance=50,wt.maxPolarAngle=Math.PI*.94,wt.addEventListener("change",Qt),wt.listenToKeyEvents(Rt.domElement),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",n=>{wt.enableDamping=!n.matches,Qt()}),Pi.add(new _o("#ffffff","#b2b8aa",2.5));let i=new gs("#fff3df",2.6);i.position.set(3,7,5),Pi.add(i);let e=new gs("#d3e8ee",1.5);e.position.set(-4,3,-4),Pi.add(e),fh=new yo;let t;Rt.domElement.addEventListener("pointerdown",n=>{t=[n.clientX,n.clientY]}),Rt.domElement.addEventListener("pointerup",n=>{if(!t||Math.hypot(n.clientX-t[0],n.clientY-t[1])>5||!Xe.selectAt)return;let r=Rt.domElement.getBoundingClientRect();fh.setFromCamera(new ge((n.clientX-r.left)/r.width*2-1,1-(n.clientY-r.top)/r.height*2),Nt),Xe.selectAt(fh),Qt()}),Rt.domElement.addEventListener("keydown",n=>{n.key==="Home"&&(n.preventDefault(),Go())}),Rt.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),tr.hidden=!1,tr.textContent="Podgl\u0105d 3D zosta\u0142 przerwany. Od\u015Bwie\u017C stron\u0119, aby do niego wr\xF3ci\u0107."}),new ResizeObserver(qf).observe(bi),Ds()}catch(i){console.error(i),tr.textContent="Podgl\u0105d 3D wymaga obs\u0142ugi WebGL. Zasady systemu mo\u017Cesz przeczyta\u0107 poni\u017Cej modelu.",tr.setAttribute("role","alert")}}function Y_(){Ee("#topic-title").textContent=Lt.title,Ee("#topic-lead").textContent=Lt.lead,Ee("#topic-text").textContent=Lt.text,Ee("#topic-rule").textContent=Lt.rule;let i=Rn.indexOf(Lt);Ee("#topic-counter").textContent=`${i+1} / ${Rn.length}`,Ee("#topic-select").value=Lt.id,Pn("[data-topic]").forEach(e=>e.setAttribute("aria-current",String(e.dataset.topic===Lt.id))),Ee("#spread-control").hidden=!Lt.spread,Ee("#crossing-control").hidden=!Lt.crossing,Ee("#arrows-control").hidden=!Lt.arrows,Ee("#variant-control").hidden=!Lt.variants,Ee("#spread").value=0,Ee("#crossing").checked=!!Lt.crossing,Ee("#previous-topic").disabled=i===0,Ee("#next-topic").disabled=i===Rn.length-1,Ee("#variant-description").textContent=Ho.description}function zr(i,{hash:e=!0}={}){Kt=i,Qn=0,Ee(".technology-cta").hidden=["flow","robotics"].includes(i),Pn("[data-technology]").forEach(n=>{let r=n.dataset.technology===i;n.setAttribute("aria-selected",String(r)),n.tabIndex=r?0:-1,Ee("#"+n.getAttribute("aria-controls")).hidden=!r}),Ee(`#${i==="combstruct"?"manual":i==="bim"?"bim":i==="robotics"?"robotics":"flow"}-mount`).append(bi),e&&history.pushState(null,"",`#${i==="combstruct"?Lt.id:i==="bim"&&Kn==="wall"?"bim-sciana":i==="robotics"&&Nn==="site"?"robotics-montaz":i}`),i==="combstruct"&&Y_(),i==="flow"&&Zf(),i==="robotics"&&j_(),Ds()}function Ls(i,{hash:e=!0}={}){Lt=Rn.find(t=>t.id===i)||Lt,zr("combstruct",{hash:e})}function bh(){let i=location.hash.slice(1);i==="bim"||i==="bim-sciana"?(Kn=i==="bim-sciana"?"wall":"house",Yf(),zr("bim",{hash:!1})):i==="robotics"||i==="robotics-montaz"?(Nn=i==="robotics-montaz"?"site":"factory",zr("robotics",{hash:!1})):["flow","manufacturing","mycelium"].includes(i)?(i!=="flow"&&history.replaceState(null,"","#flow"),zr("flow",{hash:!1})):Ls(i,{hash:!1})}for(let i of[...new Set(Rn.map(e=>e.group))]){let e=document.createElement("section");e.className="topic-group";let t=document.createElement("h3");t.textContent=i,e.append(t);let n=document.createElement("optgroup");n.label=i;for(let r of Rn.filter(s=>s.group===i)){let s=document.createElement("button");s.type="button",s.dataset.topic=r.id,s.textContent=r.title,s.addEventListener("click",()=>Ls(r.id)),e.append(s);let o=new Option(r.title,r.id);n.append(o)}Ee("#topic-buttons").append(e),Ee("#topic-select").append(n)}for(let i of xc)Ee("#variant-select").append(new Option(i.name,i.id));Ee("#topic-select").addEventListener("change",i=>Ls(i.target.value));Ee("#variant-select").addEventListener("change",i=>{Ho=xc.find(e=>e.id===i.target.value),Ee("#variant-description").textContent=Ho.description,Ds()});Pn("[data-technology]").forEach(i=>i.addEventListener("click",()=>zr(i.dataset.technology)));Ee(".technology-tabs").addEventListener("keydown",i=>{let e=Pn("[data-technology]"),t=e.indexOf(document.activeElement);if(t<0)return;let n;i.key==="ArrowRight"&&(n=(t+1)%e.length),i.key==="ArrowLeft"&&(n=(t+e.length-1)%e.length),i.key==="Home"&&(n=0),i.key==="End"&&(n=e.length-1),n!==void 0&&(i.preventDefault(),e[n].click(),e[n].focus())});Ee("#previous-topic").addEventListener("click",()=>Ls(Rn[Rn.indexOf(Lt)-1]?.id));Ee("#next-topic").addEventListener("click",()=>Ls(Rn[Rn.indexOf(Lt)+1]?.id));Ee("#spread").addEventListener("input",i=>{Xe?.spread?.(Number(i.target.value)),Ee("#crossing").checked=!1,Qt()});Ee("#crossing").addEventListener("change",i=>{i.target.checked&&(Ee("#spread").value=0,Xe?.spread?.(0)),Xe?.crossing?.(i.target.checked),Qt()});Ee("#arrows").addEventListener("change",i=>{Xe?.arrows&&(Xe.arrows.visible=i.target.checked),Qt()});Pn("[data-reset-view]").forEach(i=>i.addEventListener("click",Go));function Yf(){Pn("[data-bim-view]").forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.bimView===Kn))),Ee("#finish-control").hidden=Kn!=="wall",Ee("#wall-guide").hidden=Kn!=="wall",Ee(".selection-hint").textContent=Kn==="wall"?"Ods\u0142o\u0144 \u015Bcian\u0119 i wybierz widoczny element":"Wybierz desk\u0119 w modelu",Ee("#passport-title").innerHTML=Kn==="wall"?"Sprawd\u017A, co kryje<br>Twoja \u015Bciana.":"Ka\u017Cda cz\u0119\u015B\u0107<br>ma swoje miejsce."}function jf(){let i=Ee("#finish"),e=Number(i.value);Xe?.finish?.(e),i.setAttribute("aria-valuetext",e<.01?"\u015Aciana wyko\u0144czona":`Ods\u0142oni\u0119te ${Math.round(e*100)}% \u015Bciany`),Ee("#scene-annotation").textContent=e>.01?"Kliknij \u017Cebro, kostk\u0119, rur\u0119 lub przew\xF3d":"Ods\u0142o\u0144 \u015Bcian\u0119 suwakiem",Qt()}Pn("[data-bim-view]").forEach(i=>i.addEventListener("click",()=>{Kn=i.dataset.bimView,Yf(),history.pushState(null,"",Kn==="wall"?"#bim-sciana":"#bim"),Ds()}));Ee("#finish").addEventListener("input",jf);Ee("#next-element").addEventListener("click",()=>{Xe?.next?.(),Qt()});function Zf(){let i=oh[Ln];Ee("#flow-title").textContent=i.title,Ee("#flow-text").textContent=i.text,Ee("#flow-output-label").textContent=i.label,Ee("#flow-outputs").replaceChildren(...i.items.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),Pn("[data-flow-stage]").forEach(e=>e.setAttribute("aria-pressed",String(Number(e.dataset.flowStage)===Ln))),Ee("#assembly-control").hidden=Ln!==3,Ee("#flow-next").textContent=["Zobacz model Combstruct \u2192","Przejd\u017A do produkcji \u2192","Zobacz monta\u017C \u2192","Wr\xF3\u0107 do rzut\xF3w \u21BA"][Ln],Ee(".flow-layout").dataset.stage=Ln,Ee("#production-catalog").hidden=Ln!==2}function Jf(){let i=Number(Ee("#assembly").value);Xe?.assembly?.(i),Ee("#assembly-progress").textContent=`${Math.round(i*100)}%`,Qt()}function $f(i){Ln=i,Zf(),Ds()}Pn("[data-flow-stage]").forEach(i=>i.addEventListener("click",()=>$f(Number(i.dataset.flowStage))));Ee("#flow-next").addEventListener("click",()=>$f((Ln+1)%oh.length));Ee("#assembly").addEventListener("input",Jf);Of(Ee("#production-catalog"),sh,(i,e)=>{Wf=i,Kt==="flow"&&Ln===2&&Ds(),e&&zf(Ee("#flow-mount"))});var Is=Ee(".menu-toggle"),yc=Ee("#mobile-menu");function j_(){mh=-1,Ee("#robotics-detail").hidden=Nn!=="factory",Ee("#robotics-detail").setAttribute("aria-pressed",String(gi)),Ee("#robotics-detail").textContent=gi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",Pn("[data-robotics-process]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.roboticsProcess===Nn)));let i=Ee("#robotics-steps");i.dataset.process=Nn,i.replaceChildren(...ko[Nn].steps.map((e,t)=>{let n=document.createElement("button");return n.type="button",n.textContent=e.label,n.dataset.roboticsStep=t,n.setAttribute("aria-pressed","false"),n.onclick=()=>_h(e.at+.001),n})),Ee("#robotics-note").textContent=Nn==="factory"?"Animacja koncepcyjna linii produkcyjnej.":"Wybrane operacje z modelu Combstruct 30. Przej\u015Bcia mi\u0119dzy etapami pomijaj\u0105 cz\u0119\u015B\u0107 powtarzalnych cykli. Koncepcja ruchu robota, nie zweryfikowany program monta\u017Cowy."}function Ns({dt:i=0,snapCamera:e=!1}={}){Xe?.update?.(Cn);let t=ko[Nn],n=t.steps.findLastIndex(s=>Cn>=s.at);n!==mh&&(mh=n,Ee("#robotics-title").textContent=t.steps[n].title,Ee("#robotics-text").textContent=t.steps[n].text,Pn("[data-robotics-step]").forEach(s=>s.setAttribute("aria-pressed",String(Number(s.dataset.roboticsStep)===n)))),W_(i,e),Ee("#robotics-seek").value=Cn;let r=Math.floor(Cn*t.duration);Ee("#robotics-time").textContent=`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")}`,Ee("#robotics-play").textContent=Un?"Pauza":Cn===1?"Powt\xF3rz":"Odtw\xF3rz",Ee("#robotics-play").setAttribute("aria-pressed",String(Un))}function _h(i){Cn=Math.min(1,Math.max(0,i)),Un=!1,Qn=0,Ns({snapCamera:!0}),Qt()}Pn("[data-robotics-process]").forEach(i=>i.addEventListener("click",()=>{Nn=i.dataset.roboticsProcess,Cn=0,Un=!matchMedia("(prefers-reduced-motion: reduce)").matches,zr("robotics")}));Ee("#robotics-play").addEventListener("click",()=>{let i=Cn===1;i&&(Cn=0),Un=!Un,Qn=0,Ns({snapCamera:i}),Qt()});Ee("#robotics-replay").addEventListener("click",()=>{Cn=0,Un=!matchMedia("(prefers-reduced-motion: reduce)").matches,Qn=0,Ns({snapCamera:!0}),Qt()});Ee("#robotics-seek").addEventListener("input",i=>_h(Number(i.target.value)));Ee("#robotics-detail").addEventListener("click",()=>{gi=!gi,Ee("#robotics-detail").setAttribute("aria-pressed",String(gi)),Ee("#robotics-detail").textContent=gi?"Widok ca\u0142ej linii":"Zbli\u017Cenie operacji",Xe.focus=gi?Xe.getDetailFocus():Xe.overview,Xe.direction=gi?Xe.detailDirection:Xe.overviewDirection,Go()});new IntersectionObserver(i=>{ph=i[0].isIntersecting,Qn=0,Qt()},{threshold:.05}).observe(Ee("#robotics-mount"));document.addEventListener("visibilitychange",()=>{Qn=0,Qt()});matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",i=>{i.matches&&(Un=!1,Qn=0,Kt==="robotics"&&Ns())});function xh(){yc.hidden=!0,Is.setAttribute("aria-expanded","false"),Is.setAttribute("aria-label","Otw\xF3rz menu")}Is.addEventListener("click",()=>{let i=yc.hidden;yc.hidden=!i,Is.setAttribute("aria-expanded",String(i)),Is.setAttribute("aria-label",i?"Zamknij menu":"Otw\xF3rz menu")});Pn("#mobile-menu a").forEach(i=>i.addEventListener("click",xh));document.addEventListener("click",i=>{i.target.closest(".site-header")||xh()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!yc.hidden&&(xh(),Is.focus())});addEventListener("popstate",bh);addEventListener("hashchange",()=>{let i=location.hash.slice(1);i!==Kt&&i!==Lt.id&&bh()});window.combstructTechnology={getState:()=>({ready:!!Rt,technology:Kt,topic:Lt.id,variant:Ho.id,bimView:Kn,flowStage:Ln,robotics:Kt==="robotics"?{...Xe?.getRoboticsState?.(),playing:Un,camera:{following:gh(),position:Nt?.position.toArray(),target:wt?.target.toArray()}}:null,manufacturing:Xe?.getManufacturingState?.(),selected:Xe?.getSelected?.(),wall:Xe?.getWallState?.(),meshCount:Xe?.root.children.length,drawCalls:Rt?.info.render.calls}),topics:Rn.map(i=>i.id),showTopic:Ls,showTechnology:zr,seekRobotics:_h,reset:Go};bh();q_();})();
