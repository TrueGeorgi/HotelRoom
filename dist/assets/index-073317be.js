(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();function da(t,e){const c=Object.create(null),a=t.split(",");for(let n=0;n<a.length;n++)c[a[n]]=!0;return e?n=>!!c[n.toLowerCase()]:n=>!!c[n]}const N2={},p6=[],W1=()=>{},DV=()=>!1,OV=/^on[^a-z]/,ut=t=>OV.test(t),ma=t=>t.startsWith("onUpdate:"),t1=Object.assign,pa=(t,e)=>{const c=t.indexOf(e);c>-1&&t.splice(c,1)},FV=Object.prototype.hasOwnProperty,v2=(t,e)=>FV.call(t,e),Y=Array.isArray,v6=t=>u0(t)==="[object Map]",U6=t=>u0(t)==="[object Set]",as=t=>u0(t)==="[object Date]",i2=t=>typeof t=="function",Y2=t=>typeof t=="string",Ne=t=>typeof t=="symbol",T2=t=>t!==null&&typeof t=="object",eo=t=>T2(t)&&i2(t.then)&&i2(t.catch),to=Object.prototype.toString,u0=t=>to.call(t),BV=t=>u0(t).slice(8,-1),co=t=>u0(t)==="[object Object]",va=t=>Y2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,g8=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ht=t=>{const e=Object.create(null);return c=>e[c]||(e[c]=t(c))},UV=/-(\w)/g,m3=ht(t=>t.replace(UV,(e,c)=>c?c.toUpperCase():"")),$V=/\B([A-Z])/g,$6=ht(t=>t.replace($V,"-$1").toLowerCase()),dt=ht(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lc=ht(t=>t?`on${dt(t)}`:""),Ee=(t,e)=>!Object.is(t,e),H8=(t,e)=>{for(let c=0;c<t.length;c++)t[c](e)},N8=(t,e,c)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:c})},E8=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ns;const r5=()=>ns||(ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ga(t){if(Y(t)){const e={};for(let c=0;c<t.length;c++){const a=t[c],n=Y2(a)?GV(a):ga(a);if(n)for(const r in n)e[r]=n[r]}return e}else{if(Y2(t))return t;if(T2(t))return t}}const qV=/;(?![^(]*\))/g,jV=/:([^]+)/,WV=/\/\*[^]*?\*\//g;function GV(t){const e={};return t.replace(WV,"").split(qV).forEach(c=>{if(c){const a=c.split(jV);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function Ha(t){let e="";if(Y2(t))e=t;else if(Y(t))for(let c=0;c<t.length;c++){const a=Ha(t[c]);a&&(e+=a+" ")}else if(T2(t))for(const c in t)t[c]&&(e+=c+" ");return e.trim()}const KV="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",QV=da(KV);function ao(t){return!!t||t===""}function YV(t,e){if(t.length!==e.length)return!1;let c=!0;for(let a=0;c&&a<t.length;a++)c=D4(t[a],e[a]);return c}function D4(t,e){if(t===e)return!0;let c=as(t),a=as(e);if(c||a)return c&&a?t.getTime()===e.getTime():!1;if(c=Ne(t),a=Ne(e),c||a)return t===e;if(c=Y(t),a=Y(e),c||a)return c&&a?YV(t,e):!1;if(c=T2(t),a=T2(e),c||a){if(!c||!a)return!1;const n=Object.keys(t).length,r=Object.keys(e).length;if(n!==r)return!1;for(const s in t){const i=t.hasOwnProperty(s),o=e.hasOwnProperty(s);if(i&&!o||!i&&o||!D4(t[s],e[s]))return!1}}return String(t)===String(e)}function Va(t,e){return t.findIndex(c=>D4(c,e))}const l2=t=>Y2(t)?t:t==null?"":Y(t)||T2(t)&&(t.toString===to||!i2(t.toString))?JSON.stringify(t,no,2):String(t),no=(t,e)=>e&&e.__v_isRef?no(t,e.value):v6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((c,[a,n])=>(c[`${a} =>`]=n,c),{})}:U6(e)?{[`Set(${e.size})`]:[...e.values()]}:T2(e)&&!Y(e)&&!co(e)?String(e):e;let T1;class ro{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=T1,!e&&T1&&(this.index=(T1.scopes||(T1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const c=T1;try{return T1=this,e()}finally{T1=c}}}on(){T1=this}off(){T1=this.parent}stop(e){if(this._active){let c,a;for(c=0,a=this.effects.length;c<a;c++)this.effects[c].stop();for(c=0,a=this.cleanups.length;c<a;c++)this.cleanups[c]();if(this.scopes)for(c=0,a=this.scopes.length;c<a;c++)this.scopes[c].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function so(t){return new ro(t)}function XV(t,e=T1){e&&e.active&&e.effects.push(t)}function io(){return T1}function JV(t){T1&&T1.cleanups.push(t)}const za=t=>{const e=new Set(t);return e.w=0,e.n=0,e},oo=t=>(t.w&s4)>0,lo=t=>(t.n&s4)>0,ZV=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=s4},ez=t=>{const{deps:e}=t;if(e.length){let c=0;for(let a=0;a<e.length;a++){const n=e[a];oo(n)&&!lo(n)?n.delete(t):e[c++]=n,n.w&=~s4,n.n&=~s4}e.length=c}},k8=new WeakMap;let oe=0,s4=1;const s5=30;let F1;const k4=Symbol(""),i5=Symbol("");class Ca{constructor(e,c=null,a){this.fn=e,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,XV(this,a)}run(){if(!this.active)return this.fn();let e=F1,c=e4;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=F1,F1=this,e4=!0,s4=1<<++oe,oe<=s5?ZV(this):rs(this),this.fn()}finally{oe<=s5&&ez(this),s4=1<<--oe,F1=this.parent,e4=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){F1===this?this.deferStop=!0:this.active&&(rs(this),this.onStop&&this.onStop(),this.active=!1)}}function rs(t){const{deps:e}=t;if(e.length){for(let c=0;c<e.length;c++)e[c].delete(t);e.length=0}}let e4=!0;const fo=[];function q6(){fo.push(e4),e4=!1}function j6(){const t=fo.pop();e4=t===void 0?!0:t}function S1(t,e,c){if(e4&&F1){let a=k8.get(t);a||k8.set(t,a=new Map);let n=a.get(c);n||a.set(c,n=za()),uo(n)}}function uo(t,e){let c=!1;oe<=s5?lo(t)||(t.n|=s4,c=!oo(t)):c=!t.has(F1),c&&(t.add(F1),F1.deps.push(t))}function b3(t,e,c,a,n,r){const s=k8.get(t);if(!s)return;let i=[];if(e==="clear")i=[...s.values()];else if(c==="length"&&Y(t)){const o=Number(a);s.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(c!==void 0&&i.push(s.get(c)),e){case"add":Y(t)?va(c)&&i.push(s.get("length")):(i.push(s.get(k4)),v6(t)&&i.push(s.get(i5)));break;case"delete":Y(t)||(i.push(s.get(k4)),v6(t)&&i.push(s.get(i5)));break;case"set":v6(t)&&i.push(s.get(k4));break}if(i.length===1)i[0]&&o5(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);o5(za(o))}}function o5(t,e){const c=Y(t)?t:[...t];for(const a of c)a.computed&&ss(a);for(const a of c)a.computed||ss(a)}function ss(t,e){(t!==F1||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function tz(t,e){var c;return(c=k8.get(t))==null?void 0:c.get(e)}const cz=da("__proto__,__v_isRef,__isVue"),ho=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ne)),az=Ma(),nz=Ma(!1,!0),rz=Ma(!0),is=sz();function sz(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...c){const a=H2(this);for(let r=0,s=this.length;r<s;r++)S1(a,"get",r+"");const n=a[e](...c);return n===-1||n===!1?a[e](...c.map(H2)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...c){q6();const a=H2(this)[e].apply(this,c);return j6(),a}}),t}function iz(t){const e=H2(this);return S1(e,"has",t),e.hasOwnProperty(t)}function Ma(t=!1,e=!1){return function(a,n,r){if(n==="__v_isReactive")return!t;if(n==="__v_isReadonly")return t;if(n==="__v_isShallow")return e;if(n==="__v_raw"&&r===(t?e?yz:Ho:e?go:vo).get(a))return a;const s=Y(a);if(!t){if(s&&v2(is,n))return Reflect.get(is,n,r);if(n==="hasOwnProperty")return iz}const i=Reflect.get(a,n,r);return(Ne(n)?ho.has(n):cz(n))||(t||S1(a,"get",n),e)?i:R2(i)?s&&va(n)?i:i.value:T2(i)?t?zo(i):p4(i):i}}const oz=mo(),lz=mo(!0);function mo(t=!1){return function(c,a,n,r){let s=c[a];if(O4(s)&&R2(s)&&!R2(n))return!1;if(!t&&(!I8(n)&&!O4(n)&&(s=H2(s),n=H2(n)),!Y(c)&&R2(s)&&!R2(n)))return s.value=n,!0;const i=Y(c)&&va(a)?Number(a)<c.length:v2(c,a),o=Reflect.set(c,a,n,r);return c===H2(r)&&(i?Ee(n,s)&&b3(c,"set",a,n):b3(c,"add",a,n)),o}}function fz(t,e){const c=v2(t,e);t[e];const a=Reflect.deleteProperty(t,e);return a&&c&&b3(t,"delete",e,void 0),a}function uz(t,e){const c=Reflect.has(t,e);return(!Ne(e)||!ho.has(e))&&S1(t,"has",e),c}function hz(t){return S1(t,"iterate",Y(t)?"length":k4),Reflect.ownKeys(t)}const po={get:az,set:oz,deleteProperty:fz,has:uz,ownKeys:hz},dz={get:rz,set(t,e){return!0},deleteProperty(t,e){return!0}},mz=t1({},po,{get:nz,set:lz}),ya=t=>t,mt=t=>Reflect.getPrototypeOf(t);function G0(t,e,c=!1,a=!1){t=t.__v_raw;const n=H2(t),r=H2(e);c||(e!==r&&S1(n,"get",e),S1(n,"get",r));const{has:s}=mt(n),i=a?ya:c?wa:ke;if(s.call(n,e))return i(t.get(e));if(s.call(n,r))return i(t.get(r));t!==n&&t.get(e)}function K0(t,e=!1){const c=this.__v_raw,a=H2(c),n=H2(t);return e||(t!==n&&S1(a,"has",t),S1(a,"has",n)),t===n?c.has(t):c.has(t)||c.has(n)}function Q0(t,e=!1){return t=t.__v_raw,!e&&S1(H2(t),"iterate",k4),Reflect.get(t,"size",t)}function os(t){t=H2(t);const e=H2(this);return mt(e).has.call(e,t)||(e.add(t),b3(e,"add",t,t)),this}function ls(t,e){e=H2(e);const c=H2(this),{has:a,get:n}=mt(c);let r=a.call(c,t);r||(t=H2(t),r=a.call(c,t));const s=n.call(c,t);return c.set(t,e),r?Ee(e,s)&&b3(c,"set",t,e):b3(c,"add",t,e),this}function fs(t){const e=H2(this),{has:c,get:a}=mt(e);let n=c.call(e,t);n||(t=H2(t),n=c.call(e,t)),a&&a.call(e,t);const r=e.delete(t);return n&&b3(e,"delete",t,void 0),r}function us(){const t=H2(this),e=t.size!==0,c=t.clear();return e&&b3(t,"clear",void 0,void 0),c}function Y0(t,e){return function(a,n){const r=this,s=r.__v_raw,i=H2(s),o=e?ya:t?wa:ke;return!t&&S1(i,"iterate",k4),s.forEach((l,f)=>a.call(n,o(l),o(f),r))}}function X0(t,e,c){return function(...a){const n=this.__v_raw,r=H2(n),s=v6(r),i=t==="entries"||t===Symbol.iterator&&s,o=t==="keys"&&s,l=n[t](...a),f=c?ya:e?wa:ke;return!e&&S1(r,"iterate",o?i5:k4),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:i?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function B3(t){return function(...e){return t==="delete"?!1:this}}function pz(){const t={get(r){return G0(this,r)},get size(){return Q0(this)},has:K0,add:os,set:ls,delete:fs,clear:us,forEach:Y0(!1,!1)},e={get(r){return G0(this,r,!1,!0)},get size(){return Q0(this)},has:K0,add:os,set:ls,delete:fs,clear:us,forEach:Y0(!1,!0)},c={get(r){return G0(this,r,!0)},get size(){return Q0(this,!0)},has(r){return K0.call(this,r,!0)},add:B3("add"),set:B3("set"),delete:B3("delete"),clear:B3("clear"),forEach:Y0(!0,!1)},a={get(r){return G0(this,r,!0,!0)},get size(){return Q0(this,!0)},has(r){return K0.call(this,r,!0)},add:B3("add"),set:B3("set"),delete:B3("delete"),clear:B3("clear"),forEach:Y0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=X0(r,!1,!1),c[r]=X0(r,!0,!1),e[r]=X0(r,!1,!0),a[r]=X0(r,!0,!0)}),[t,c,e,a]}const[vz,gz,Hz,Vz]=pz();function _a(t,e){const c=e?t?Vz:Hz:t?gz:vz;return(a,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?a:Reflect.get(v2(c,n)&&n in a?c:a,n,r)}const zz={get:_a(!1,!1)},Cz={get:_a(!1,!0)},Mz={get:_a(!0,!1)},vo=new WeakMap,go=new WeakMap,Ho=new WeakMap,yz=new WeakMap;function _z(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lz(t){return t.__v_skip||!Object.isExtensible(t)?0:_z(BV(t))}function p4(t){return O4(t)?t:La(t,!1,po,zz,vo)}function Vo(t){return La(t,!1,mz,Cz,go)}function zo(t){return La(t,!0,dz,Mz,Ho)}function La(t,e,c,a,n){if(!T2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=n.get(t);if(r)return r;const s=Lz(t);if(s===0)return t;const i=new Proxy(t,s===2?a:c);return n.set(t,i),i}function L3(t){return O4(t)?L3(t.__v_raw):!!(t&&t.__v_isReactive)}function O4(t){return!!(t&&t.__v_isReadonly)}function I8(t){return!!(t&&t.__v_isShallow)}function Co(t){return L3(t)||O4(t)}function H2(t){const e=t&&t.__v_raw;return e?H2(e):t}function pt(t){return N8(t,"__v_skip",!0),t}const ke=t=>T2(t)?p4(t):t,wa=t=>T2(t)?zo(t):t;function Mo(t){e4&&F1&&(t=H2(t),uo(t.dep||(t.dep=za())))}function yo(t,e){t=H2(t);const c=t.dep;c&&o5(c)}function R2(t){return!!(t&&t.__v_isRef===!0)}function b1(t){return _o(t,!1)}function wz(t){return _o(t,!0)}function _o(t,e){return R2(t)?t:new bz(t,e)}class bz{constructor(e,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?e:H2(e),this._value=c?e:ke(e)}get value(){return Mo(this),this._value}set value(e){const c=this.__v_isShallow||I8(e)||O4(e);e=c?e:H2(e),Ee(e,this._rawValue)&&(this._rawValue=e,this._value=c?e:ke(e),yo(this))}}function o2(t){return R2(t)?t.value:t}const xz={get:(t,e,c)=>o2(Reflect.get(t,e,c)),set:(t,e,c,a)=>{const n=t[e];return R2(n)&&!R2(c)?(n.value=c,!0):Reflect.set(t,e,c,a)}};function Lo(t){return L3(t)?t:new Proxy(t,xz)}function Sz(t){const e=Y(t)?new Array(t.length):{};for(const c in t)e[c]=Tz(t,c);return e}class Az{constructor(e,c,a){this._object=e,this._key=c,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tz(H2(this._object),this._key)}}function Tz(t,e,c){const a=t[e];return R2(a)?a:new Az(t,e,c)}class Nz{constructor(e,c,a,n){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ca(e,()=>{this._dirty||(this._dirty=!0,yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=a}get value(){const e=H2(this);return Mo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ez(t,e,c=!1){let a,n;const r=i2(t);return r?(a=t,n=W1):(a=t.get,n=t.set),new Nz(a,n,r||!n,c)}function t4(t,e,c,a){let n;try{n=a?t(...a):t()}catch(r){vt(r,e,c)}return n}function G1(t,e,c,a){if(i2(t)){const r=t4(t,e,c,a);return r&&eo(r)&&r.catch(s=>{vt(s,e,c)}),r}const n=[];for(let r=0;r<t.length;r++)n.push(G1(t[r],e,c,a));return n}function vt(t,e,c,a=!0){const n=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=c;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,s,i)===!1)return}r=r.parent}const o=e.appContext.config.errorHandler;if(o){t4(o,null,10,[t,s,i]);return}}kz(t,c,n,a)}function kz(t,e,c,a=!0){console.error(t)}let Ie=!1,l5=!1;const p1=[];let a3=0;const g6=[];let H3=null,_4=0;const wo=Promise.resolve();let ba=null;function Pe(t){const e=ba||wo;return t?e.then(this?t.bind(this):t):e}function Iz(t){let e=a3+1,c=p1.length;for(;e<c;){const a=e+c>>>1;Re(p1[a])<t?e=a+1:c=a}return e}function xa(t){(!p1.length||!p1.includes(t,Ie&&t.allowRecurse?a3+1:a3))&&(t.id==null?p1.push(t):p1.splice(Iz(t.id),0,t),bo())}function bo(){!Ie&&!l5&&(l5=!0,ba=wo.then(So))}function Pz(t){const e=p1.indexOf(t);e>a3&&p1.splice(e,1)}function Rz(t){Y(t)?g6.push(...t):(!H3||!H3.includes(t,t.allowRecurse?_4+1:_4))&&g6.push(t),bo()}function hs(t,e=Ie?a3+1:0){for(;e<p1.length;e++){const c=p1[e];c&&c.pre&&(p1.splice(e,1),e--,c())}}function xo(t){if(g6.length){const e=[...new Set(g6)];if(g6.length=0,H3){H3.push(...e);return}for(H3=e,H3.sort((c,a)=>Re(c)-Re(a)),_4=0;_4<H3.length;_4++)H3[_4]();H3=null,_4=0}}const Re=t=>t.id==null?1/0:t.id,Dz=(t,e)=>{const c=Re(t)-Re(e);if(c===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return c};function So(t){l5=!1,Ie=!0,p1.sort(Dz);const e=W1;try{for(a3=0;a3<p1.length;a3++){const c=p1[a3];c&&c.active!==!1&&t4(c,null,14)}}finally{a3=0,p1.length=0,xo(),Ie=!1,ba=null,(p1.length||g6.length)&&So()}}function Oz(t,e,...c){if(t.isUnmounted)return;const a=t.vnode.props||N2;let n=c;const r=e.startsWith("update:"),s=r&&e.slice(7);if(s&&s in a){const f=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:h}=a[f]||N2;h&&(n=c.map(d=>Y2(d)?d.trim():d)),u&&(n=c.map(E8))}let i,o=a[i=Lc(e)]||a[i=Lc(m3(e))];!o&&r&&(o=a[i=Lc($6(e))]),o&&G1(o,t,6,n);const l=a[i+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,G1(l,t,6,n)}}function Ao(t,e,c=!1){const a=e.emitsCache,n=a.get(t);if(n!==void 0)return n;const r=t.emits;let s={},i=!1;if(!i2(t)){const o=l=>{const f=Ao(l,e,!0);f&&(i=!0,t1(s,f))};!c&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!r&&!i?(T2(t)&&a.set(t,null),null):(Y(r)?r.forEach(o=>s[o]=null):t1(s,r),T2(t)&&a.set(t,s),s)}function gt(t,e){return!t||!ut(e)?!1:(e=e.slice(2).replace(/Once$/,""),v2(t,e[0].toLowerCase()+e.slice(1))||v2(t,$6(e))||v2(t,e))}let w1=null,Ht=null;function P8(t){const e=w1;return w1=t,Ht=t&&t.type.__scopeId||null,e}function I3(t){Ht=t}function P3(){Ht=null}function V3(t,e=w1,c){if(!e||t._n)return t;const a=(...n)=>{a._d&&ys(-1);const r=P8(e);let s;try{s=t(...n)}finally{P8(r),a._d&&ys(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function wc(t){const{type:e,vnode:c,proxy:a,withProxy:n,props:r,propsOptions:[s],slots:i,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:d,ctx:v,inheritAttrs:V}=t;let z,H;const M=P8(t);try{if(c.shapeFlag&4){const A=n||a;z=c3(f.call(A,A,u,r,d,h,v)),H=o}else{const A=e;z=c3(A.length>1?A(r,{attrs:o,slots:i,emit:l}):A(r,null)),H=e.props?o:Fz(o)}}catch(A){ze.length=0,vt(A,t,1),z=_2(F4)}let N=z;if(H&&V!==!1){const A=Object.keys(H),{shapeFlag:j}=N;A.length&&j&7&&(s&&A.some(ma)&&(H=Bz(H,s)),N=L6(N,H))}return c.dirs&&(N=L6(N),N.dirs=N.dirs?N.dirs.concat(c.dirs):c.dirs),c.transition&&(N.transition=c.transition),z=N,P8(M),z}const Fz=t=>{let e;for(const c in t)(c==="class"||c==="style"||ut(c))&&((e||(e={}))[c]=t[c]);return e},Bz=(t,e)=>{const c={};for(const a in t)(!ma(a)||!(a.slice(9)in e))&&(c[a]=t[a]);return c};function Uz(t,e,c){const{props:a,children:n,component:r}=t,{props:s,children:i,patchFlag:o}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(c&&o>=0){if(o&1024)return!0;if(o&16)return a?ds(a,s,l):!!s;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(s[h]!==a[h]&&!gt(l,h))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?ds(a,s,l):!0:!!s;return!1}function ds(t,e,c){const a=Object.keys(e);if(a.length!==Object.keys(t).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(e[r]!==t[r]&&!gt(c,r))return!0}return!1}function $z({vnode:t,parent:e},c){for(;e&&e.subTree===t;)(t=e.vnode).el=c,e=e.parent}const qz=t=>t.__isSuspense;function jz(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Rz(t)}const J0={};function K1(t,e,c){return To(t,e,c)}function To(t,e,{immediate:c,deep:a,flush:n,onTrack:r,onTrigger:s}=N2){var i;const o=io()===((i=K2)==null?void 0:i.scope)?K2:null;let l,f=!1,u=!1;if(R2(t)?(l=()=>t.value,f=I8(t)):L3(t)?(l=()=>t,a=!0):Y(t)?(u=!0,f=t.some(A=>L3(A)||I8(A)),l=()=>t.map(A=>{if(R2(A))return A.value;if(L3(A))return b4(A);if(i2(A))return t4(A,o,2)})):i2(t)?e?l=()=>t4(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),G1(t,o,3,[d])}:l=W1,e&&a){const A=l;l=()=>b4(A())}let h,d=A=>{h=M.onStop=()=>{t4(A,o,4)}},v;if(Fe)if(d=W1,e?c&&G1(e,o,3,[l(),u?[]:void 0,d]):l(),n==="sync"){const A=OC();v=A.__watcherHandles||(A.__watcherHandles=[])}else return W1;let V=u?new Array(t.length).fill(J0):J0;const z=()=>{if(M.active)if(e){const A=M.run();(a||f||(u?A.some((j,n2)=>Ee(j,V[n2])):Ee(A,V)))&&(h&&h(),G1(e,o,3,[A,V===J0?void 0:u&&V[0]===J0?[]:V,d]),V=A)}else M.run()};z.allowRecurse=!!e;let H;n==="sync"?H=z:n==="post"?H=()=>L1(z,o&&o.suspense):(z.pre=!0,o&&(z.id=o.uid),H=()=>xa(z));const M=new Ca(l,H);e?c?z():V=M.run():n==="post"?L1(M.run.bind(M),o&&o.suspense):M.run();const N=()=>{M.stop(),o&&o.scope&&pa(o.scope.effects,M)};return v&&v.push(N),N}function Wz(t,e,c){const a=this.proxy,n=Y2(t)?t.includes(".")?No(a,t):()=>a[t]:t.bind(a,a);let r;i2(e)?r=e:(r=e.handler,c=e);const s=K2;w6(this);const i=To(n,r.bind(a),c);return s?w6(s):I4(),i}function No(t,e){const c=e.split(".");return()=>{let a=t;for(let n=0;n<c.length&&a;n++)a=a[c[n]];return a}}function b4(t,e){if(!T2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),R2(t))b4(t.value,e);else if(Y(t))for(let c=0;c<t.length;c++)b4(t[c],e);else if(U6(t)||v6(t))t.forEach(c=>{b4(c,e)});else if(co(t))for(const c in t)b4(t[c],e);return t}function e1(t,e){const c=w1;if(c===null)return t;const a=Mt(c)||c.proxy,n=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,i,o,l=N2]=e[r];s&&(i2(s)&&(s={mounted:s,updated:s}),s.deep&&b4(i),n.push({dir:s,instance:a,value:i,oldValue:void 0,arg:o,modifiers:l}))}return t}function C4(t,e,c,a){const n=t.dirs,r=e&&e.dirs;for(let s=0;s<n.length;s++){const i=n[s];r&&(i.oldValue=r[s].value);let o=i.dir[a];o&&(q6(),G1(o,c,8,[t.el,i,t,e]),j6())}}function Sa(t,e){return i2(t)?(()=>t1({name:t.name},e,{setup:t}))():t}const V8=t=>!!t.type.__asyncLoader,Eo=t=>t.type.__isKeepAlive;function Gz(t,e){ko(t,"a",e)}function Kz(t,e){ko(t,"da",e)}function ko(t,e,c=K2){const a=t.__wdc||(t.__wdc=()=>{let n=c;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Vt(e,a,c),c){let n=c.parent;for(;n&&n.parent;)Eo(n.parent.vnode)&&Qz(a,e,c,n),n=n.parent}}function Qz(t,e,c,a){const n=Vt(e,t,a,!0);Ro(()=>{pa(a[e],n)},c)}function Vt(t,e,c=K2,a=!1){if(c){const n=c[t]||(c[t]=[]),r=e.__weh||(e.__weh=(...s)=>{if(c.isUnmounted)return;q6(),w6(c);const i=G1(e,c,t,s);return I4(),j6(),i});return a?n.unshift(r):n.push(r),r}}const R3=t=>(e,c=K2)=>(!Fe||t==="sp")&&Vt(t,(...a)=>e(...a),c),Io=R3("bm"),Yz=R3("m"),Xz=R3("bu"),Jz=R3("u"),Po=R3("bum"),Ro=R3("um"),Zz=R3("sp"),eC=R3("rtg"),tC=R3("rtc");function cC(t,e=K2){Vt("ec",t,e)}const Do="components";function Q1(t,e){return nC(Do,t,!0,e)||t}const aC=Symbol.for("v-ndc");function nC(t,e,c=!0,a=!1){const n=w1||K2;if(n){const r=n.type;if(t===Do){const i=PC(r,!1);if(i&&(i===e||i===m3(e)||i===dt(m3(e))))return r}const s=ms(n[t]||r[t],e)||ms(n.appContext[t],e);return!s&&a?r:s}}function ms(t,e){return t&&(t[e]||t[m3(e)]||t[dt(m3(e))])}function B2(t,e,c,a){let n;const r=c&&c[a];if(Y(t)||Y2(t)){n=new Array(t.length);for(let s=0,i=t.length;s<i;s++)n[s]=e(t[s],s,void 0,r&&r[s])}else if(typeof t=="number"){n=new Array(t);for(let s=0;s<t;s++)n[s]=e(s+1,s,void 0,r&&r[s])}else if(T2(t))if(t[Symbol.iterator])n=Array.from(t,(s,i)=>e(s,i,void 0,r&&r[i]));else{const s=Object.keys(t);n=new Array(s.length);for(let i=0,o=s.length;i<o;i++){const l=s[i];n[i]=e(t[l],l,i,r&&r[i])}}else n=[];return c&&(c[a]=n),n}const f5=t=>t?Qo(t)?Mt(t)||t.proxy:f5(t.parent):null,Ve=t1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>f5(t.parent),$root:t=>f5(t.root),$emit:t=>t.emit,$options:t=>Aa(t),$forceUpdate:t=>t.f||(t.f=()=>xa(t.update)),$nextTick:t=>t.n||(t.n=Pe.bind(t.proxy)),$watch:t=>Wz.bind(t)}),bc=(t,e)=>t!==N2&&!t.__isScriptSetup&&v2(t,e),rC={get({_:t},e){const{ctx:c,setupState:a,data:n,props:r,accessCache:s,type:i,appContext:o}=t;let l;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return a[e];case 2:return n[e];case 4:return c[e];case 3:return r[e]}else{if(bc(a,e))return s[e]=1,a[e];if(n!==N2&&v2(n,e))return s[e]=2,n[e];if((l=t.propsOptions[0])&&v2(l,e))return s[e]=3,r[e];if(c!==N2&&v2(c,e))return s[e]=4,c[e];u5&&(s[e]=0)}}const f=Ve[e];let u,h;if(f)return e==="$attrs"&&S1(t,"get",e),f(t);if((u=i.__cssModules)&&(u=u[e]))return u;if(c!==N2&&v2(c,e))return s[e]=4,c[e];if(h=o.config.globalProperties,v2(h,e))return h[e]},set({_:t},e,c){const{data:a,setupState:n,ctx:r}=t;return bc(n,e)?(n[e]=c,!0):a!==N2&&v2(a,e)?(a[e]=c,!0):v2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=c,!0)},has({_:{data:t,setupState:e,accessCache:c,ctx:a,appContext:n,propsOptions:r}},s){let i;return!!c[s]||t!==N2&&v2(t,s)||bc(e,s)||(i=r[0])&&v2(i,s)||v2(a,s)||v2(Ve,s)||v2(n.config.globalProperties,s)},defineProperty(t,e,c){return c.get!=null?t._.accessCache[e]=0:v2(c,"value")&&this.set(t,e,c.value,null),Reflect.defineProperty(t,e,c)}};function ps(t){return Y(t)?t.reduce((e,c)=>(e[c]=null,e),{}):t}let u5=!0;function sC(t){const e=Aa(t),c=t.proxy,a=t.ctx;u5=!1,e.beforeCreate&&vs(e.beforeCreate,t,"bc");const{data:n,computed:r,methods:s,watch:i,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:v,activated:V,deactivated:z,beforeDestroy:H,beforeUnmount:M,destroyed:N,unmounted:A,render:j,renderTracked:n2,renderTriggered:f2,errorCaptured:a2,serverPrefetch:X,expose:C2,inheritAttrs:$2,components:n1,directives:_1,filters:v3}=e;if(l&&iC(l,a,null),s)for(const L2 in s){const V2=s[L2];i2(V2)&&(a[L2]=V2.bind(c))}if(n){const L2=n.call(c,c);T2(L2)&&(t.data=p4(L2))}if(u5=!0,r)for(const L2 in r){const V2=r[L2],D1=i2(V2)?V2.bind(c,c):i2(V2.get)?V2.get.bind(c,c):W1,M2=!i2(V2)&&i2(V2.set)?V2.set.bind(c):W1,J2=r2({get:D1,set:M2});Object.defineProperty(a,L2,{enumerable:!0,configurable:!0,get:()=>J2.value,set:D2=>J2.value=D2})}if(i)for(const L2 in i)Oo(i[L2],a,c,L2);if(o){const L2=i2(o)?o.call(c):o;Reflect.ownKeys(L2).forEach(V2=>{H6(V2,L2[V2])})}f&&vs(f,t,"c");function p2(L2,V2){Y(V2)?V2.forEach(D1=>L2(D1.bind(c))):V2&&L2(V2.bind(c))}if(p2(Io,u),p2(Yz,h),p2(Xz,d),p2(Jz,v),p2(Gz,V),p2(Kz,z),p2(cC,a2),p2(tC,n2),p2(eC,f2),p2(Po,M),p2(Ro,A),p2(Zz,X),Y(C2))if(C2.length){const L2=t.exposed||(t.exposed={});C2.forEach(V2=>{Object.defineProperty(L2,V2,{get:()=>c[V2],set:D1=>c[V2]=D1})})}else t.exposed||(t.exposed={});j&&t.render===W1&&(t.render=j),$2!=null&&(t.inheritAttrs=$2),n1&&(t.components=n1),_1&&(t.directives=_1)}function iC(t,e,c=W1){Y(t)&&(t=h5(t));for(const a in t){const n=t[a];let r;T2(n)?"default"in n?r=P1(n.from||a,n.default,!0):r=P1(n.from||a):r=P1(n),R2(r)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):e[a]=r}}function vs(t,e,c){G1(Y(t)?t.map(a=>a.bind(e.proxy)):t.bind(e.proxy),e,c)}function Oo(t,e,c,a){const n=a.includes(".")?No(c,a):()=>c[a];if(Y2(t)){const r=e[t];i2(r)&&K1(n,r)}else if(i2(t))K1(n,t.bind(c));else if(T2(t))if(Y(t))t.forEach(r=>Oo(r,e,c,a));else{const r=i2(t.handler)?t.handler.bind(c):e[t.handler];i2(r)&&K1(n,r,t)}}function Aa(t){const e=t.type,{mixins:c,extends:a}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:s}}=t.appContext,i=r.get(e);let o;return i?o=i:!n.length&&!c&&!a?o=e:(o={},n.length&&n.forEach(l=>R8(o,l,s,!0)),R8(o,e,s)),T2(e)&&r.set(e,o),o}function R8(t,e,c,a=!1){const{mixins:n,extends:r}=e;r&&R8(t,r,c,!0),n&&n.forEach(s=>R8(t,s,c,!0));for(const s in e)if(!(a&&s==="expose")){const i=oC[s]||c&&c[s];t[s]=i?i(t[s],e[s]):e[s]}return t}const oC={data:gs,props:Hs,emits:Hs,methods:le,computed:le,beforeCreate:C1,created:C1,beforeMount:C1,mounted:C1,beforeUpdate:C1,updated:C1,beforeDestroy:C1,beforeUnmount:C1,destroyed:C1,unmounted:C1,activated:C1,deactivated:C1,errorCaptured:C1,serverPrefetch:C1,components:le,directives:le,watch:fC,provide:gs,inject:lC};function gs(t,e){return e?t?function(){return t1(i2(t)?t.call(this,this):t,i2(e)?e.call(this,this):e)}:e:t}function lC(t,e){return le(h5(t),h5(e))}function h5(t){if(Y(t)){const e={};for(let c=0;c<t.length;c++)e[t[c]]=t[c];return e}return t}function C1(t,e){return t?[...new Set([].concat(t,e))]:e}function le(t,e){return t?t1(Object.create(null),t,e):e}function Hs(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:t1(Object.create(null),ps(t),ps(e??{})):e}function fC(t,e){if(!t)return e;if(!e)return t;const c=t1(Object.create(null),t);for(const a in e)c[a]=C1(t[a],e[a]);return c}function Fo(){return{app:null,config:{isNativeTag:DV,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uC=0;function hC(t,e){return function(a,n=null){i2(a)||(a=t1({},a)),n!=null&&!T2(n)&&(n=null);const r=Fo(),s=new Set;let i=!1;const o=r.app={_uid:uC++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:FC,get config(){return r.config},set config(l){},use(l,...f){return s.has(l)||(l&&i2(l.install)?(s.add(l),l.install(o,...f)):i2(l)&&(s.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,u){if(!i){const h=_2(a,n);return h.appContext=r,f&&e?e(h,l):t(h,l,u),i=!0,o._container=l,l.__vue_app__=o,Mt(h.component)||h.component.proxy}},unmount(){i&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o},runWithContext(l){De=o;try{return l()}finally{De=null}}};return o}}let De=null;function H6(t,e){if(K2){let c=K2.provides;const a=K2.parent&&K2.parent.provides;a===c&&(c=K2.provides=Object.create(a)),c[t]=e}}function P1(t,e,c=!1){const a=K2||w1;if(a||De){const n=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:De._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return c&&i2(e)?e.call(a&&a.proxy):e}}function dC(){return!!(K2||w1||De)}function mC(t,e,c,a=!1){const n={},r={};N8(r,Ct,1),t.propsDefaults=Object.create(null),Bo(t,e,n,r);for(const s in t.propsOptions[0])s in n||(n[s]=void 0);c?t.props=a?n:Vo(n):t.type.props?t.props=n:t.props=r,t.attrs=r}function pC(t,e,c,a){const{props:n,attrs:r,vnode:{patchFlag:s}}=t,i=H2(n),[o]=t.propsOptions;let l=!1;if((a||s>0)&&!(s&16)){if(s&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(gt(t.emitsOptions,h))continue;const d=e[h];if(o)if(v2(r,h))d!==r[h]&&(r[h]=d,l=!0);else{const v=m3(h);n[v]=d5(o,i,v,d,t,!1)}else d!==r[h]&&(r[h]=d,l=!0)}}}else{Bo(t,e,n,r)&&(l=!0);let f;for(const u in i)(!e||!v2(e,u)&&((f=$6(u))===u||!v2(e,f)))&&(o?c&&(c[u]!==void 0||c[f]!==void 0)&&(n[u]=d5(o,i,u,void 0,t,!0)):delete n[u]);if(r!==i)for(const u in r)(!e||!v2(e,u))&&(delete r[u],l=!0)}l&&b3(t,"set","$attrs")}function Bo(t,e,c,a){const[n,r]=t.propsOptions;let s=!1,i;if(e)for(let o in e){if(g8(o))continue;const l=e[o];let f;n&&v2(n,f=m3(o))?!r||!r.includes(f)?c[f]=l:(i||(i={}))[f]=l:gt(t.emitsOptions,o)||(!(o in a)||l!==a[o])&&(a[o]=l,s=!0)}if(r){const o=H2(c),l=i||N2;for(let f=0;f<r.length;f++){const u=r[f];c[u]=d5(n,o,u,l[u],t,!v2(l,u))}}return s}function d5(t,e,c,a,n,r){const s=t[c];if(s!=null){const i=v2(s,"default");if(i&&a===void 0){const o=s.default;if(s.type!==Function&&!s.skipFactory&&i2(o)){const{propsDefaults:l}=n;c in l?a=l[c]:(w6(n),a=l[c]=o.call(null,e),I4())}else a=o}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===$6(c))&&(a=!0))}return a}function Uo(t,e,c=!1){const a=e.propsCache,n=a.get(t);if(n)return n;const r=t.props,s={},i=[];let o=!1;if(!i2(t)){const f=u=>{o=!0;const[h,d]=Uo(u,e,!0);t1(s,h),d&&i.push(...d)};!c&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!o)return T2(t)&&a.set(t,p6),p6;if(Y(r))for(let f=0;f<r.length;f++){const u=m3(r[f]);Vs(u)&&(s[u]=N2)}else if(r)for(const f in r){const u=m3(f);if(Vs(u)){const h=r[f],d=s[u]=Y(h)||i2(h)?{type:h}:t1({},h);if(d){const v=Ms(Boolean,d.type),V=Ms(String,d.type);d[0]=v>-1,d[1]=V<0||v<V,(v>-1||v2(d,"default"))&&i.push(u)}}}const l=[s,i];return T2(t)&&a.set(t,l),l}function Vs(t){return t[0]!=="$"}function zs(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Cs(t,e){return zs(t)===zs(e)}function Ms(t,e){return Y(e)?e.findIndex(c=>Cs(c,t)):i2(e)&&Cs(e,t)?0:-1}const $o=t=>t[0]==="_"||t==="$stable",Ta=t=>Y(t)?t.map(c3):[c3(t)],vC=(t,e,c)=>{if(e._n)return e;const a=V3((...n)=>Ta(e(...n)),c);return a._c=!1,a},qo=(t,e,c)=>{const a=t._ctx;for(const n in t){if($o(n))continue;const r=t[n];if(i2(r))e[n]=vC(n,r,a);else if(r!=null){const s=Ta(r);e[n]=()=>s}}},jo=(t,e)=>{const c=Ta(e);t.slots.default=()=>c},gC=(t,e)=>{if(t.vnode.shapeFlag&32){const c=e._;c?(t.slots=H2(e),N8(e,"_",c)):qo(e,t.slots={})}else t.slots={},e&&jo(t,e);N8(t.slots,Ct,1)},HC=(t,e,c)=>{const{vnode:a,slots:n}=t;let r=!0,s=N2;if(a.shapeFlag&32){const i=e._;i?c&&i===1?r=!1:(t1(n,e),!c&&i===1&&delete n._):(r=!e.$stable,qo(e,n)),s=e}else e&&(jo(t,e),s={default:1});if(r)for(const i in n)!$o(i)&&!(i in s)&&delete n[i]};function m5(t,e,c,a,n=!1){if(Y(t)){t.forEach((h,d)=>m5(h,e&&(Y(e)?e[d]:e),c,a,n));return}if(V8(a)&&!n)return;const r=a.shapeFlag&4?Mt(a.component)||a.component.proxy:a.el,s=n?null:r,{i,r:o}=t,l=e&&e.r,f=i.refs===N2?i.refs={}:i.refs,u=i.setupState;if(l!=null&&l!==o&&(Y2(l)?(f[l]=null,v2(u,l)&&(u[l]=null)):R2(l)&&(l.value=null)),i2(o))t4(o,i,12,[s,f]);else{const h=Y2(o),d=R2(o);if(h||d){const v=()=>{if(t.f){const V=h?v2(u,o)?u[o]:f[o]:o.value;n?Y(V)&&pa(V,r):Y(V)?V.includes(r)||V.push(r):h?(f[o]=[r],v2(u,o)&&(u[o]=f[o])):(o.value=[r],t.k&&(f[t.k]=o.value))}else h?(f[o]=s,v2(u,o)&&(u[o]=s)):d&&(o.value=s,t.k&&(f[t.k]=s))};s?(v.id=-1,L1(v,c)):v()}}}const L1=jz;function VC(t){return zC(t)}function zC(t,e){const c=r5();c.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:s,createText:i,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=W1,insertStaticContent:v}=t,V=(m,p,g,y=null,L=null,b=null,P=!1,T=null,E=!!p.dynamicChildren)=>{if(m===p)return;m&&!ae(m,p)&&(y=_(m),D2(m,L,b,!0),m=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:S,ref:K,shapeFlag:$}=p;switch(S){case zt:z(m,p,g,y);break;case F4:H(m,p,g,y);break;case xc:m==null&&M(p,g,y,P);break;case g2:n1(m,p,g,y,L,b,P,T,E);break;default:$&1?j(m,p,g,y,L,b,P,T,E):$&6?_1(m,p,g,y,L,b,P,T,E):($&64||$&128)&&S.process(m,p,g,y,L,b,P,T,E,k)}K!=null&&L&&m5(K,m&&m.ref,b,p||m,!p)},z=(m,p,g,y)=>{if(m==null)a(p.el=i(p.children),g,y);else{const L=p.el=m.el;p.children!==m.children&&l(L,p.children)}},H=(m,p,g,y)=>{m==null?a(p.el=o(p.children||""),g,y):p.el=m.el},M=(m,p,g,y)=>{[m.el,m.anchor]=v(m.children,p,g,y,m.el,m.anchor)},N=({el:m,anchor:p},g,y)=>{let L;for(;m&&m!==p;)L=h(m),a(m,g,y),m=L;a(p,g,y)},A=({el:m,anchor:p})=>{let g;for(;m&&m!==p;)g=h(m),n(m),m=g;n(p)},j=(m,p,g,y,L,b,P,T,E)=>{P=P||p.type==="svg",m==null?n2(p,g,y,L,b,P,T,E):X(m,p,L,b,P,T,E)},n2=(m,p,g,y,L,b,P,T)=>{let E,S;const{type:K,props:$,shapeFlag:Q,transition:t2,dirs:u2}=m;if(E=m.el=s(m.type,b,$&&$.is,$),Q&8?f(E,m.children):Q&16&&a2(m.children,E,null,y,L,b&&K!=="foreignObject",P,T),u2&&C4(m,null,y,"created"),f2(E,m,m.scopeId,P,y),$){for(const x2 in $)x2!=="value"&&!g8(x2)&&r(E,x2,null,$[x2],b,m.children,y,L,u1);"value"in $&&r(E,"value",null,$.value),(S=$.onVnodeBeforeMount)&&t3(S,y,m)}u2&&C4(m,null,y,"beforeMount");const S2=(!L||L&&!L.pendingBranch)&&t2&&!t2.persisted;S2&&t2.beforeEnter(E),a(E,p,g),((S=$&&$.onVnodeMounted)||S2||u2)&&L1(()=>{S&&t3(S,y,m),S2&&t2.enter(E),u2&&C4(m,null,y,"mounted")},L)},f2=(m,p,g,y,L)=>{if(g&&d(m,g),y)for(let b=0;b<y.length;b++)d(m,y[b]);if(L){let b=L.subTree;if(p===b){const P=L.vnode;f2(m,P,P.scopeId,P.slotScopeIds,L.parent)}}},a2=(m,p,g,y,L,b,P,T,E=0)=>{for(let S=E;S<m.length;S++){const K=m[S]=T?W3(m[S]):c3(m[S]);V(null,K,p,g,y,L,b,P,T)}},X=(m,p,g,y,L,b,P)=>{const T=p.el=m.el;let{patchFlag:E,dynamicChildren:S,dirs:K}=p;E|=m.patchFlag&16;const $=m.props||N2,Q=p.props||N2;let t2;g&&M4(g,!1),(t2=Q.onVnodeBeforeUpdate)&&t3(t2,g,p,m),K&&C4(p,m,g,"beforeUpdate"),g&&M4(g,!0);const u2=L&&p.type!=="foreignObject";if(S?C2(m.dynamicChildren,S,T,g,y,u2,b):P||V2(m,p,T,null,g,y,u2,b,!1),E>0){if(E&16)$2(T,p,$,Q,g,y,L);else if(E&2&&$.class!==Q.class&&r(T,"class",null,Q.class,L),E&4&&r(T,"style",$.style,Q.style,L),E&8){const S2=p.dynamicProps;for(let x2=0;x2<S2.length;x2++){const q2=S2[x2],O1=$[q2],a6=Q[q2];(a6!==O1||q2==="value")&&r(T,q2,O1,a6,L,m.children,g,y,u1)}}E&1&&m.children!==p.children&&f(T,p.children)}else!P&&S==null&&$2(T,p,$,Q,g,y,L);((t2=Q.onVnodeUpdated)||K)&&L1(()=>{t2&&t3(t2,g,p,m),K&&C4(p,m,g,"updated")},y)},C2=(m,p,g,y,L,b,P)=>{for(let T=0;T<p.length;T++){const E=m[T],S=p[T],K=E.el&&(E.type===g2||!ae(E,S)||E.shapeFlag&70)?u(E.el):g;V(E,S,K,null,y,L,b,P,!0)}},$2=(m,p,g,y,L,b,P)=>{if(g!==y){if(g!==N2)for(const T in g)!g8(T)&&!(T in y)&&r(m,T,g[T],null,P,p.children,L,b,u1);for(const T in y){if(g8(T))continue;const E=y[T],S=g[T];E!==S&&T!=="value"&&r(m,T,S,E,P,p.children,L,b,u1)}"value"in y&&r(m,"value",g.value,y.value)}},n1=(m,p,g,y,L,b,P,T,E)=>{const S=p.el=m?m.el:i(""),K=p.anchor=m?m.anchor:i("");let{patchFlag:$,dynamicChildren:Q,slotScopeIds:t2}=p;t2&&(T=T?T.concat(t2):t2),m==null?(a(S,g,y),a(K,g,y),a2(p.children,g,K,L,b,P,T,E)):$>0&&$&64&&Q&&m.dynamicChildren?(C2(m.dynamicChildren,Q,g,L,b,P,T),(p.key!=null||L&&p===L.subTree)&&Wo(m,p,!0)):V2(m,p,g,K,L,b,P,T,E)},_1=(m,p,g,y,L,b,P,T,E)=>{p.slotScopeIds=T,m==null?p.shapeFlag&512?L.ctx.activate(p,g,y,P,E):v3(p,g,y,L,b,P,E):z1(m,p,E)},v3=(m,p,g,y,L,b,P)=>{const T=m.component=AC(m,y,L);if(Eo(m)&&(T.ctx.renderer=k),NC(T),T.asyncDep){if(L&&L.registerDep(T,p2),!m.el){const E=T.subTree=_2(F4);H(null,E,p,g)}return}p2(T,m,p,g,L,b,P)},z1=(m,p,g)=>{const y=p.component=m.component;if(Uz(m,p,g))if(y.asyncDep&&!y.asyncResolved){L2(y,p,g);return}else y.next=p,Pz(y.update),y.update();else p.el=m.el,y.vnode=p},p2=(m,p,g,y,L,b,P)=>{const T=()=>{if(m.isMounted){let{next:K,bu:$,u:Q,parent:t2,vnode:u2}=m,S2=K,x2;M4(m,!1),K?(K.el=u2.el,L2(m,K,P)):K=u2,$&&H8($),(x2=K.props&&K.props.onVnodeBeforeUpdate)&&t3(x2,t2,K,u2),M4(m,!0);const q2=wc(m),O1=m.subTree;m.subTree=q2,V(O1,q2,u(O1.el),_(O1),m,L,b),K.el=q2.el,S2===null&&$z(m,q2.el),Q&&L1(Q,L),(x2=K.props&&K.props.onVnodeUpdated)&&L1(()=>t3(x2,t2,K,u2),L)}else{let K;const{el:$,props:Q}=p,{bm:t2,m:u2,parent:S2}=m,x2=V8(p);if(M4(m,!1),t2&&H8(t2),!x2&&(K=Q&&Q.onVnodeBeforeMount)&&t3(K,S2,p),M4(m,!0),$&&y2){const q2=()=>{m.subTree=wc(m),y2($,m.subTree,m,L,null)};x2?p.type.__asyncLoader().then(()=>!m.isUnmounted&&q2()):q2()}else{const q2=m.subTree=wc(m);V(null,q2,g,y,m,L,b),p.el=q2.el}if(u2&&L1(u2,L),!x2&&(K=Q&&Q.onVnodeMounted)){const q2=p;L1(()=>t3(K,S2,q2),L)}(p.shapeFlag&256||S2&&V8(S2.vnode)&&S2.vnode.shapeFlag&256)&&m.a&&L1(m.a,L),m.isMounted=!0,p=g=y=null}},E=m.effect=new Ca(T,()=>xa(S),m.scope),S=m.update=()=>E.run();S.id=m.uid,M4(m,!0),S()},L2=(m,p,g)=>{p.component=m;const y=m.vnode.props;m.vnode=p,m.next=null,pC(m,p.props,y,g),HC(m,p.children,g),q6(),hs(),j6()},V2=(m,p,g,y,L,b,P,T,E=!1)=>{const S=m&&m.children,K=m?m.shapeFlag:0,$=p.children,{patchFlag:Q,shapeFlag:t2}=p;if(Q>0){if(Q&128){M2(S,$,g,y,L,b,P,T,E);return}else if(Q&256){D1(S,$,g,y,L,b,P,T,E);return}}t2&8?(K&16&&u1(S,L,b),$!==S&&f(g,$)):K&16?t2&16?M2(S,$,g,y,L,b,P,T,E):u1(S,L,b,!0):(K&8&&f(g,""),t2&16&&a2($,g,y,L,b,P,T,E))},D1=(m,p,g,y,L,b,P,T,E)=>{m=m||p6,p=p||p6;const S=m.length,K=p.length,$=Math.min(S,K);let Q;for(Q=0;Q<$;Q++){const t2=p[Q]=E?W3(p[Q]):c3(p[Q]);V(m[Q],t2,g,null,L,b,P,T,E)}S>K?u1(m,L,b,!0,!1,$):a2(p,g,y,L,b,P,T,E,$)},M2=(m,p,g,y,L,b,P,T,E)=>{let S=0;const K=p.length;let $=m.length-1,Q=K-1;for(;S<=$&&S<=Q;){const t2=m[S],u2=p[S]=E?W3(p[S]):c3(p[S]);if(ae(t2,u2))V(t2,u2,g,null,L,b,P,T,E);else break;S++}for(;S<=$&&S<=Q;){const t2=m[$],u2=p[Q]=E?W3(p[Q]):c3(p[Q]);if(ae(t2,u2))V(t2,u2,g,null,L,b,P,T,E);else break;$--,Q--}if(S>$){if(S<=Q){const t2=Q+1,u2=t2<K?p[t2].el:y;for(;S<=Q;)V(null,p[S]=E?W3(p[S]):c3(p[S]),g,u2,L,b,P,T,E),S++}}else if(S>Q)for(;S<=$;)D2(m[S],L,b,!0),S++;else{const t2=S,u2=S,S2=new Map;for(S=u2;S<=Q;S++){const A1=p[S]=E?W3(p[S]):c3(p[S]);A1.key!=null&&S2.set(A1.key,S)}let x2,q2=0;const O1=Q-u2+1;let a6=!1,es=0;const ce=new Array(O1);for(S=0;S<O1;S++)ce[S]=0;for(S=t2;S<=$;S++){const A1=m[S];if(q2>=O1){D2(A1,L,b,!0);continue}let e3;if(A1.key!=null)e3=S2.get(A1.key);else for(x2=u2;x2<=Q;x2++)if(ce[x2-u2]===0&&ae(A1,p[x2])){e3=x2;break}e3===void 0?D2(A1,L,b,!0):(ce[e3-u2]=S+1,e3>=es?es=e3:a6=!0,V(A1,p[e3],g,null,L,b,P,T,E),q2++)}const ts=a6?CC(ce):p6;for(x2=ts.length-1,S=O1-1;S>=0;S--){const A1=u2+S,e3=p[A1],cs=A1+1<K?p[A1+1].el:y;ce[S]===0?V(null,e3,g,cs,L,b,P,T,E):a6&&(x2<0||S!==ts[x2]?J2(e3,g,cs,2):x2--)}}},J2=(m,p,g,y,L=null)=>{const{el:b,type:P,transition:T,children:E,shapeFlag:S}=m;if(S&6){J2(m.component.subTree,p,g,y);return}if(S&128){m.suspense.move(p,g,y);return}if(S&64){P.move(m,p,g,k);return}if(P===g2){a(b,p,g);for(let $=0;$<E.length;$++)J2(E[$],p,g,y);a(m.anchor,p,g);return}if(P===xc){N(m,p,g);return}if(y!==2&&S&1&&T)if(y===0)T.beforeEnter(b),a(b,p,g),L1(()=>T.enter(b),L);else{const{leave:$,delayLeave:Q,afterLeave:t2}=T,u2=()=>a(b,p,g),S2=()=>{$(b,()=>{u2(),t2&&t2()})};Q?Q(b,u2,S2):S2()}else a(b,p,g)},D2=(m,p,g,y=!1,L=!1)=>{const{type:b,props:P,ref:T,children:E,dynamicChildren:S,shapeFlag:K,patchFlag:$,dirs:Q}=m;if(T!=null&&m5(T,null,g,m,!0),K&256){p.ctx.deactivate(m);return}const t2=K&1&&Q,u2=!V8(m);let S2;if(u2&&(S2=P&&P.onVnodeBeforeUnmount)&&t3(S2,p,m),K&6)W0(m.component,g,y);else{if(K&128){m.suspense.unmount(g,y);return}t2&&C4(m,null,p,"beforeUnmount"),K&64?m.type.remove(m,p,g,L,k,y):S&&(b!==g2||$>0&&$&64)?u1(S,p,g,!1,!0):(b===g2&&$&384||!L&&K&16)&&u1(E,p,g),y&&t6(m)}(u2&&(S2=P&&P.onVnodeUnmounted)||t2)&&L1(()=>{S2&&t3(S2,p,m),t2&&C4(m,null,p,"unmounted")},g)},t6=m=>{const{type:p,el:g,anchor:y,transition:L}=m;if(p===g2){c6(g,y);return}if(p===xc){A(m);return}const b=()=>{n(g),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(m.shapeFlag&1&&L&&!L.persisted){const{leave:P,delayLeave:T}=L,E=()=>P(g,b);T?T(m.el,b,E):E()}else b()},c6=(m,p)=>{let g;for(;m!==p;)g=h(m),n(m),m=g;n(p)},W0=(m,p,g)=>{const{bum:y,scope:L,update:b,subTree:P,um:T}=m;y&&H8(y),L.stop(),b&&(b.active=!1,D2(P,m,p,g)),T&&L1(T,p),L1(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},u1=(m,p,g,y=!1,L=!1,b=0)=>{for(let P=b;P<m.length;P++)D2(m[P],p,g,y,L)},_=m=>m.shapeFlag&6?_(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),F=(m,p,g)=>{m==null?p._vnode&&D2(p._vnode,null,null,!0):V(p._vnode||null,m,p,null,null,null,g),hs(),xo(),p._vnode=m},k={p:V,um:D2,m:J2,r:t6,mt:v3,mc:a2,pc:V2,pbc:C2,n:_,o:t};let W,y2;return e&&([W,y2]=e(k)),{render:F,hydrate:W,createApp:hC(F,W)}}function M4({effect:t,update:e},c){t.allowRecurse=e.allowRecurse=c}function Wo(t,e,c=!1){const a=t.children,n=e.children;if(Y(a)&&Y(n))for(let r=0;r<a.length;r++){const s=a[r];let i=n[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[r]=W3(n[r]),i.el=s.el),c||Wo(s,i)),i.type===zt&&(i.el=s.el)}}function CC(t){const e=t.slice(),c=[0];let a,n,r,s,i;const o=t.length;for(a=0;a<o;a++){const l=t[a];if(l!==0){if(n=c[c.length-1],t[n]<l){e[a]=n,c.push(a);continue}for(r=0,s=c.length-1;r<s;)i=r+s>>1,t[c[i]]<l?r=i+1:s=i;l<t[c[r]]&&(r>0&&(e[a]=c[r-1]),c[r]=a)}}for(r=c.length,s=c[r-1];r-- >0;)c[r]=s,s=e[s];return c}const MC=t=>t.__isTeleport,g2=Symbol.for("v-fgt"),zt=Symbol.for("v-txt"),F4=Symbol.for("v-cmt"),xc=Symbol.for("v-stc"),ze=[];let U1=null;function R(t=!1){ze.push(U1=t?null:[])}function yC(){ze.pop(),U1=ze[ze.length-1]||null}let Oe=1;function ys(t){Oe+=t}function Go(t){return t.dynamicChildren=Oe>0?U1||p6:null,yC(),Oe>0&&U1&&U1.push(t),t}function D(t,e,c,a,n,r){return Go(C(t,e,c,a,n,r,!0))}function _C(t,e,c,a,n){return Go(_2(t,e,c,a,n,!0))}function p5(t){return t?t.__v_isVNode===!0:!1}function ae(t,e){return t.type===e.type&&t.key===e.key}const Ct="__vInternal",Ko=({key:t})=>t??null,z8=({ref:t,ref_key:e,ref_for:c})=>(typeof t=="number"&&(t=""+t),t!=null?Y2(t)||R2(t)||i2(t)?{i:w1,r:t,k:e,f:!!c}:t:null);function C(t,e=null,c=null,a=0,n=null,r=t===g2?0:1,s=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ko(e),ref:e&&z8(e),scopeId:Ht,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:w1};return i?(Na(o,c),r&128&&t.normalize(o)):c&&(o.shapeFlag|=Y2(c)?8:16),Oe>0&&!s&&U1&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&U1.push(o),o}const _2=LC;function LC(t,e=null,c=null,a=0,n=null,r=!1){if((!t||t===aC)&&(t=F4),p5(t)){const i=L6(t,e,!0);return c&&Na(i,c),Oe>0&&!r&&U1&&(i.shapeFlag&6?U1[U1.indexOf(t)]=i:U1.push(i)),i.patchFlag|=-2,i}if(RC(t)&&(t=t.__vccOpts),e){e=wC(e);let{class:i,style:o}=e;i&&!Y2(i)&&(e.class=Ha(i)),T2(o)&&(Co(o)&&!Y(o)&&(o=t1({},o)),e.style=ga(o))}const s=Y2(t)?1:qz(t)?128:MC(t)?64:T2(t)?4:i2(t)?2:0;return C(t,e,c,a,n,s,r,!0)}function wC(t){return t?Co(t)||Ct in t?t1({},t):t:null}function L6(t,e,c=!1){const{props:a,ref:n,patchFlag:r,children:s}=t,i=e?bC(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Ko(i),ref:e&&e.ref?c&&n?Y(n)?n.concat(z8(e)):[n,z8(e)]:z8(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==g2?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&L6(t.ssContent),ssFallback:t.ssFallback&&L6(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function B1(t=" ",e=0){return _2(zt,null,t,e)}function L4(t="",e=!1){return e?(R(),_C(F4,null,t)):_2(F4,null,t)}function c3(t){return t==null||typeof t=="boolean"?_2(F4):Y(t)?_2(g2,null,t.slice()):typeof t=="object"?W3(t):_2(zt,null,String(t))}function W3(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:L6(t)}function Na(t,e){let c=0;const{shapeFlag:a}=t;if(e==null)e=null;else if(Y(e))c=16;else if(typeof e=="object")if(a&65){const n=e.default;n&&(n._c&&(n._d=!1),Na(t,n()),n._c&&(n._d=!0));return}else{c=32;const n=e._;!n&&!(Ct in e)?e._ctx=w1:n===3&&w1&&(w1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else i2(e)?(e={default:e,_ctx:w1},c=32):(e=String(e),a&64?(c=16,e=[B1(e)]):c=8);t.children=e,t.shapeFlag|=c}function bC(...t){const e={};for(let c=0;c<t.length;c++){const a=t[c];for(const n in a)if(n==="class")e.class!==a.class&&(e.class=Ha([e.class,a.class]));else if(n==="style")e.style=ga([e.style,a.style]);else if(ut(n)){const r=e[n],s=a[n];s&&r!==s&&!(Y(r)&&r.includes(s))&&(e[n]=r?[].concat(r,s):s)}else n!==""&&(e[n]=a[n])}return e}function t3(t,e,c,a=null){G1(t,e,7,[c,a])}const xC=Fo();let SC=0;function AC(t,e,c){const a=t.type,n=(e?e.appContext:t.appContext)||xC,r={uid:SC++,vnode:t,type:a,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new ro(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uo(a,n),emitsOptions:Ao(a,n),emit:null,emitted:null,propsDefaults:N2,inheritAttrs:a.inheritAttrs,ctx:N2,data:N2,props:N2,attrs:N2,slots:N2,refs:N2,setupState:N2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Oz.bind(null,r),t.ce&&t.ce(r),r}let K2=null;const TC=()=>K2||w1;let Ea,n6,_s="__VUE_INSTANCE_SETTERS__";(n6=r5()[_s])||(n6=r5()[_s]=[]),n6.push(t=>K2=t),Ea=t=>{n6.length>1?n6.forEach(e=>e(t)):n6[0](t)};const w6=t=>{Ea(t),t.scope.on()},I4=()=>{K2&&K2.scope.off(),Ea(null)};function Qo(t){return t.vnode.shapeFlag&4}let Fe=!1;function NC(t,e=!1){Fe=e;const{props:c,children:a}=t.vnode,n=Qo(t);mC(t,c,n,e),gC(t,a);const r=n?EC(t,e):void 0;return Fe=!1,r}function EC(t,e){const c=t.type;t.accessCache=Object.create(null),t.proxy=pt(new Proxy(t.ctx,rC));const{setup:a}=c;if(a){const n=t.setupContext=a.length>1?IC(t):null;w6(t),q6();const r=t4(a,t,0,[t.props,n]);if(j6(),I4(),eo(r)){if(r.then(I4,I4),e)return r.then(s=>{Ls(t,s,e)}).catch(s=>{vt(s,t,0)});t.asyncDep=r}else Ls(t,r,e)}else Yo(t,e)}function Ls(t,e,c){i2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:T2(e)&&(t.setupState=Lo(e)),Yo(t,c)}let ws;function Yo(t,e,c){const a=t.type;if(!t.render){if(!e&&ws&&!a.render){const n=a.template||Aa(t).template;if(n){const{isCustomElement:r,compilerOptions:s}=t.appContext.config,{delimiters:i,compilerOptions:o}=a,l=t1(t1({isCustomElement:r,delimiters:i},s),o);a.render=ws(n,l)}}t.render=a.render||W1}w6(t),q6(),sC(t),j6(),I4()}function kC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,c){return S1(t,"get","$attrs"),e[c]}}))}function IC(t){const e=c=>{t.exposed=c||{}};return{get attrs(){return kC(t)},slots:t.slots,emit:t.emit,expose:e}}function Mt(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lo(pt(t.exposed)),{get(e,c){if(c in e)return e[c];if(c in Ve)return Ve[c](t)},has(e,c){return c in e||c in Ve}}))}function PC(t,e=!0){return i2(t)?t.displayName||t.name:t.name||e&&t.__name}function RC(t){return i2(t)&&"__vccOpts"in t}const r2=(t,e)=>Ez(t,e,Fe);function ka(t,e,c){const a=arguments.length;return a===2?T2(e)&&!Y(e)?p5(e)?_2(t,null,[e]):_2(t,e):_2(t,null,e):(a>3?c=Array.prototype.slice.call(arguments,2):a===3&&p5(c)&&(c=[c]),_2(t,e,c))}const DC=Symbol.for("v-scx"),OC=()=>P1(DC),FC="3.3.4",BC="http://www.w3.org/2000/svg",w4=typeof document<"u"?document:null,bs=w4&&w4.createElement("template"),UC={insert:(t,e,c)=>{e.insertBefore(t,c||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,c,a)=>{const n=e?w4.createElementNS(BC,t):w4.createElement(t,c?{is:c}:void 0);return t==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:t=>w4.createTextNode(t),createComment:t=>w4.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>w4.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,c,a,n,r){const s=c?c.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),c),!(n===r||!(n=n.nextSibling)););else{bs.innerHTML=a?`<svg>${t}</svg>`:t;const i=bs.content;if(a){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}e.insertBefore(i,c)}return[s?s.nextSibling:e.firstChild,c?c.previousSibling:e.lastChild]}};function $C(t,e,c){const a=t._vtc;a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?t.removeAttribute("class"):c?t.setAttribute("class",e):t.className=e}function qC(t,e,c){const a=t.style,n=Y2(c);if(c&&!n){if(e&&!Y2(e))for(const r in e)c[r]==null&&v5(a,r,"");for(const r in c)v5(a,r,c[r])}else{const r=a.display;n?e!==c&&(a.cssText=c):e&&t.removeAttribute("style"),"_vod"in t&&(a.display=r)}}const xs=/\s*!important$/;function v5(t,e,c){if(Y(c))c.forEach(a=>v5(t,e,a));else if(c==null&&(c=""),e.startsWith("--"))t.setProperty(e,c);else{const a=jC(t,e);xs.test(c)?t.setProperty($6(a),c.replace(xs,""),"important"):t[a]=c}}const Ss=["Webkit","Moz","ms"],Sc={};function jC(t,e){const c=Sc[e];if(c)return c;let a=m3(e);if(a!=="filter"&&a in t)return Sc[e]=a;a=dt(a);for(let n=0;n<Ss.length;n++){const r=Ss[n]+a;if(r in t)return Sc[e]=r}return e}const As="http://www.w3.org/1999/xlink";function WC(t,e,c,a,n){if(a&&e.startsWith("xlink:"))c==null?t.removeAttributeNS(As,e.slice(6,e.length)):t.setAttributeNS(As,e,c);else{const r=QV(e);c==null||r&&!ao(c)?t.removeAttribute(e):t.setAttribute(e,r?"":c)}}function GC(t,e,c,a,n,r,s){if(e==="innerHTML"||e==="textContent"){a&&s(a,n,r),t[e]=c??"";return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){t._value=c;const l=i==="OPTION"?t.getAttribute("value"):t.value,f=c??"";l!==f&&(t.value=f),c==null&&t.removeAttribute(e);return}let o=!1;if(c===""||c==null){const l=typeof t[e];l==="boolean"?c=ao(c):c==null&&l==="string"?(c="",o=!0):l==="number"&&(c=0,o=!0)}try{t[e]=c}catch{}o&&t.removeAttribute(e)}function z3(t,e,c,a){t.addEventListener(e,c,a)}function KC(t,e,c,a){t.removeEventListener(e,c,a)}function QC(t,e,c,a,n=null){const r=t._vei||(t._vei={}),s=r[e];if(a&&s)s.value=a;else{const[i,o]=YC(e);if(a){const l=r[e]=ZC(a,n);z3(t,i,l,o)}else s&&(KC(t,i,s,o),r[e]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;function YC(t){let e;if(Ts.test(t)){e={};let a;for(;a=t.match(Ts);)t=t.slice(0,t.length-a[0].length),e[a[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$6(t.slice(2)),e]}let Ac=0;const XC=Promise.resolve(),JC=()=>Ac||(XC.then(()=>Ac=0),Ac=Date.now());function ZC(t,e){const c=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=c.attached)return;G1(eM(a,c.value),e,5,[a])};return c.value=t,c.attached=JC(),c}function eM(t,e){if(Y(e)){const c=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{c.call(t),t._stopped=!0},e.map(a=>n=>!n._stopped&&a&&a(n))}else return e}const Ns=/^on[a-z]/,tM=(t,e,c,a,n=!1,r,s,i,o)=>{e==="class"?$C(t,a,n):e==="style"?qC(t,c,a):ut(e)?ma(e)||QC(t,e,c,a,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cM(t,e,a,n))?GC(t,e,a,r,s,i,o):(e==="true-value"?t._trueValue=a:e==="false-value"&&(t._falseValue=a),WC(t,e,a,n))};function cM(t,e,c,a){return a?!!(e==="innerHTML"||e==="textContent"||e in t&&Ns.test(e)&&i2(c)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ns.test(e)&&Y2(c)?!1:e in t}const i4=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?c=>H8(e,c):e};function aM(t){t.target.composing=!0}function Es(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const C3={created(t,{modifiers:{lazy:e,trim:c,number:a}},n){t._assign=i4(n);const r=a||n.props&&n.props.type==="number";z3(t,e?"change":"input",s=>{if(s.target.composing)return;let i=t.value;c&&(i=i.trim()),r&&(i=E8(i)),t._assign(i)}),c&&z3(t,"change",()=>{t.value=t.value.trim()}),e||(z3(t,"compositionstart",aM),z3(t,"compositionend",Es),z3(t,"change",Es))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:c,trim:a,number:n}},r){if(t._assign=i4(r),t.composing||document.activeElement===t&&t.type!=="range"&&(c||a&&t.value.trim()===e||(n||t.type==="number")&&E8(t.value)===e))return;const s=e??"";t.value!==s&&(t.value=s)}},nM={deep:!0,created(t,e,c){t._assign=i4(c),z3(t,"change",()=>{const a=t._modelValue,n=b6(t),r=t.checked,s=t._assign;if(Y(a)){const i=Va(a,n),o=i!==-1;if(r&&!o)s(a.concat(n));else if(!r&&o){const l=[...a];l.splice(i,1),s(l)}}else if(U6(a)){const i=new Set(a);r?i.add(n):i.delete(n),s(i)}else s(Xo(t,r))})},mounted:ks,beforeUpdate(t,e,c){t._assign=i4(c),ks(t,e,c)}};function ks(t,{value:e,oldValue:c},a){t._modelValue=e,Y(e)?t.checked=Va(e,a.props.value)>-1:U6(e)?t.checked=e.has(a.props.value):e!==c&&(t.checked=D4(e,Xo(t,!0)))}const rM={created(t,{value:e},c){t.checked=D4(e,c.props.value),t._assign=i4(c),z3(t,"change",()=>{t._assign(b6(t))})},beforeUpdate(t,{value:e,oldValue:c},a){t._assign=i4(a),e!==c&&(t.checked=D4(e,a.props.value))}},x4={deep:!0,created(t,{value:e,modifiers:{number:c}},a){const n=U6(e);z3(t,"change",()=>{const r=Array.prototype.filter.call(t.options,s=>s.selected).map(s=>c?E8(b6(s)):b6(s));t._assign(t.multiple?n?new Set(r):r:r[0])}),t._assign=i4(a)},mounted(t,{value:e}){Is(t,e)},beforeUpdate(t,e,c){t._assign=i4(c)},updated(t,{value:e}){Is(t,e)}};function Is(t,e){const c=t.multiple;if(!(c&&!Y(e)&&!U6(e))){for(let a=0,n=t.options.length;a<n;a++){const r=t.options[a],s=b6(r);if(c)Y(e)?r.selected=Va(e,s)>-1:r.selected=e.has(s);else if(D4(b6(r),e)){t.selectedIndex!==a&&(t.selectedIndex=a);return}}!c&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function b6(t){return"_value"in t?t._value:t.value}function Xo(t,e){const c=e?"_trueValue":"_falseValue";return c in t?t[c]:e}const sM=["ctrl","shift","alt","meta"],iM={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sM.some(c=>t[`${c}Key`]&&!e.includes(c))},Ia=(t,e)=>(c,...a)=>{for(let n=0;n<e.length;n++){const r=iM[e[n]];if(r&&r(c,e))return}return t(c,...a)},oM=t1({patchProp:tM},UC);let Ps;function lM(){return Ps||(Ps=VC(oM))}const fM=(...t)=>{const e=lM().createApp(...t),{mount:c}=e;return e.mount=a=>{const n=uM(a);if(!n)return;const r=e._component;!i2(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.innerHTML="";const s=c(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e};function uM(t){return Y2(t)?document.querySelector(t):t}var hM=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Jo;const yt=t=>Jo=t,Zo=Symbol();function g5(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ce;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ce||(Ce={}));function dM(){const t=so(!0),e=t.run(()=>b1({}));let c=[],a=[];const n=pt({install(r){yt(n),n._a=r,r.provide(Zo,n),r.config.globalProperties.$pinia=n,a.forEach(s=>c.push(s)),a=[]},use(r){return!this._a&&!hM?a.push(r):c.push(r),this},_p:c,_a:null,_e:t,_s:new Map,state:e});return n}const e9=()=>{};function Rs(t,e,c,a=e9){t.push(e);const n=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),a())};return!c&&io()&&JV(n),n}function r6(t,...e){t.slice().forEach(c=>{c(...e)})}const mM=t=>t();function H5(t,e){t instanceof Map&&e instanceof Map&&e.forEach((c,a)=>t.set(a,c)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const c in e){if(!e.hasOwnProperty(c))continue;const a=e[c],n=t[c];g5(n)&&g5(a)&&t.hasOwnProperty(c)&&!R2(a)&&!L3(a)?t[c]=H5(n,a):t[c]=a}return t}const pM=Symbol();function vM(t){return!g5(t)||!t.hasOwnProperty(pM)}const{assign:j3}=Object;function gM(t){return!!(R2(t)&&t.effect)}function HM(t,e,c,a){const{state:n,actions:r,getters:s}=e,i=c.state.value[t];let o;function l(){i||(c.state.value[t]=n?n():{});const f=Sz(c.state.value[t]);return j3(f,r,Object.keys(s||{}).reduce((u,h)=>(u[h]=pt(r2(()=>{yt(c);const d=c._s.get(t);return s[h].call(d,d)})),u),{}))}return o=t9(t,l,e,c,a,!0),o}function t9(t,e,c={},a,n,r){let s;const i=j3({actions:{}},c),o={deep:!0};let l,f,u=[],h=[],d;const v=a.state.value[t];!r&&!v&&(a.state.value[t]={}),b1({});let V;function z(a2){let X;l=f=!1,typeof a2=="function"?(a2(a.state.value[t]),X={type:Ce.patchFunction,storeId:t,events:d}):(H5(a.state.value[t],a2),X={type:Ce.patchObject,payload:a2,storeId:t,events:d});const C2=V=Symbol();Pe().then(()=>{V===C2&&(l=!0)}),f=!0,r6(u,X,a.state.value[t])}const H=r?function(){const{state:X}=c,C2=X?X():{};this.$patch($2=>{j3($2,C2)})}:e9;function M(){s.stop(),u=[],h=[],a._s.delete(t)}function N(a2,X){return function(){yt(a);const C2=Array.from(arguments),$2=[],n1=[];function _1(p2){$2.push(p2)}function v3(p2){n1.push(p2)}r6(h,{args:C2,name:a2,store:j,after:_1,onError:v3});let z1;try{z1=X.apply(this&&this.$id===t?this:j,C2)}catch(p2){throw r6(n1,p2),p2}return z1 instanceof Promise?z1.then(p2=>(r6($2,p2),p2)).catch(p2=>(r6(n1,p2),Promise.reject(p2))):(r6($2,z1),z1)}}const A={_p:a,$id:t,$onAction:Rs.bind(null,h),$patch:z,$reset:H,$subscribe(a2,X={}){const C2=Rs(u,a2,X.detached,()=>$2()),$2=s.run(()=>K1(()=>a.state.value[t],n1=>{(X.flush==="sync"?f:l)&&a2({storeId:t,type:Ce.direct,events:d},n1)},j3({},o,X)));return C2},$dispose:M},j=p4(A);a._s.set(t,j);const f2=(a._a&&a._a.runWithContext||mM)(()=>a._e.run(()=>(s=so()).run(e)));for(const a2 in f2){const X=f2[a2];if(R2(X)&&!gM(X)||L3(X))r||(v&&vM(X)&&(R2(X)?X.value=v[a2]:H5(X,v[a2])),a.state.value[t][a2]=X);else if(typeof X=="function"){const C2=N(a2,X);f2[a2]=C2,i.actions[a2]=X}}return j3(j,f2),j3(H2(j),f2),Object.defineProperty(j,"$state",{get:()=>a.state.value[t],set:a2=>{z(X=>{j3(X,a2)})}}),a._p.forEach(a2=>{j3(j,s.run(()=>a2({store:j,app:a._a,pinia:a,options:i})))}),v&&r&&c.hydrate&&c.hydrate(j.$state,v),l=!0,f=!0,j}function VM(t,e,c){let a,n;const r=typeof e=="function";typeof t=="string"?(a=t,n=r?c:e):(n=t,a=t.id);function s(i,o){const l=dC();return i=i||(l?P1(Zo,null):null),i&&yt(i),i=Jo,i._s.has(a)||(r?t9(a,e,n,i):HM(a,n,i)),i._s.get(a)}return s.$id=a,s}function zM(t,e){return Array.isArray(e)?e.reduce((c,a)=>(c[a]=function(){return t(this.$pinia)[a]},c),{}):Object.keys(e).reduce((c,a)=>(c[a]=function(){const n=t(this.$pinia),r=e[a];return typeof r=="function"?r.call(this,n):n[r]},c),{})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=function(t){const e=[];let c=0;for(let a=0;a<t.length;a++){let n=t.charCodeAt(a);n<128?e[c++]=n:n<2048?(e[c++]=n>>6|192,e[c++]=n&63|128):(n&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++a)&1023),e[c++]=n>>18|240,e[c++]=n>>12&63|128,e[c++]=n>>6&63|128,e[c++]=n&63|128):(e[c++]=n>>12|224,e[c++]=n>>6&63|128,e[c++]=n&63|128)}return e},CM=function(t){const e=[];let c=0,a=0;for(;c<t.length;){const n=t[c++];if(n<128)e[a++]=String.fromCharCode(n);else if(n>191&&n<224){const r=t[c++];e[a++]=String.fromCharCode((n&31)<<6|r&63)}else if(n>239&&n<365){const r=t[c++],s=t[c++],i=t[c++],o=((n&7)<<18|(r&63)<<12|(s&63)<<6|i&63)-65536;e[a++]=String.fromCharCode(55296+(o>>10)),e[a++]=String.fromCharCode(56320+(o&1023))}else{const r=t[c++],s=t[c++];e[a++]=String.fromCharCode((n&15)<<12|(r&63)<<6|s&63)}}return e.join("")},a9={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const c=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let n=0;n<t.length;n+=3){const r=t[n],s=n+1<t.length,i=s?t[n+1]:0,o=n+2<t.length,l=o?t[n+2]:0,f=r>>2,u=(r&3)<<4|i>>4;let h=(i&15)<<2|l>>6,d=l&63;o||(d=64,s||(h=64)),a.push(c[f],c[u],c[h],c[d])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c9(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const c=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let n=0;n<t.length;){const r=c[t.charAt(n++)],i=n<t.length?c[t.charAt(n)]:0;++n;const l=n<t.length?c[t.charAt(n)]:64;++n;const u=n<t.length?c[t.charAt(n)]:64;if(++n,r==null||i==null||l==null||u==null)throw new MM;const h=r<<2|i>>4;if(a.push(h),l!==64){const d=i<<4&240|l>>2;if(a.push(d),u!==64){const v=l<<6&192|u;a.push(v)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yM=function(t){const e=c9(t);return a9.encodeByteArray(e,!0)},D8=function(t){return yM(t).replace(/\./g,"")},n9=function(t){try{return a9.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=()=>_M().__FIREBASE_DEFAULTS__,wM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&n9(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return LM()||wM()||bM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},r9=t=>{var e,c;return(c=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||c===void 0?void 0:c[t]},xM=t=>{const e=r9(t);if(!e)return;const c=e.lastIndexOf(":");if(c<=0||c+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(c+1),10);return e[0]==="["?[e.substring(1,c-1),a]:[e.substring(0,c),a]},s9=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config},i9=t=>{var e;return(e=Pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}wrapCallback(e){return(c,a)=>{c?this.reject(c):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(c):e(c,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const c={alg:"none",type:"JWT"},a=e||"demo-project",n=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),i="";return[D8(JSON.stringify(c)),D8(JSON.stringify(s)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H1())}function NM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kM(){const t=H1();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function IM(){try{return typeof indexedDB=="object"}catch{return!1}}function PM(){return new Promise((t,e)=>{try{let c=!0;const a="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(a);n.onsuccess=()=>{n.result.close(),c||self.indexedDB.deleteDatabase(a),t(!0)},n.onupgradeneeded=()=>{c=!1},n.onerror=()=>{var r;e(((r=n.error)===null||r===void 0?void 0:r.message)||"")}}catch(c){e(c)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM="FirebaseError";class D3 extends Error{constructor(e,c,a){super(c),this.code=e,this.customData=a,this.name=RM,Object.setPrototypeOf(this,D3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,h0.prototype.create)}}class h0{constructor(e,c,a){this.service=e,this.serviceName=c,this.errors=a}create(e,...c){const a=c[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?DM(r,a):"Error",i=`${this.serviceName}: ${s} (${n}).`;return new D3(n,i,a)}}function DM(t,e){return t.replace(OM,(c,a)=>{const n=e[a];return n!=null?String(n):`<${a}?>`})}const OM=/\{\$([^}]+)}/g;function FM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function O8(t,e){if(t===e)return!0;const c=Object.keys(t),a=Object.keys(e);for(const n of c){if(!a.includes(n))return!1;const r=t[n],s=e[n];if(Ds(r)&&Ds(s)){if(!O8(r,s))return!1}else if(r!==s)return!1}for(const n of a)if(!c.includes(n))return!1;return!0}function Ds(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){const e=[];for(const[c,a]of Object.entries(t))Array.isArray(a)?a.forEach(n=>{e.push(encodeURIComponent(c)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(c)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function fe(t){const e={};return t.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[n,r]=a.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function ue(t){const e=t.indexOf("?");if(!e)return"";const c=t.indexOf("#",e);return t.substring(e,c>0?c:void 0)}function BM(t,e){const c=new UM(t,e);return c.subscribe.bind(c)}class UM{constructor(e,c){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=c,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(c=>{c.next(e)})}error(e){this.forEachObserver(c=>{c.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,c,a){let n;if(e===void 0&&c===void 0&&a===void 0)throw new Error("Missing Observer.");$M(e,["next","error","complete"])?n=e:n={next:e,error:c,complete:a},n.next===void 0&&(n.next=Tc),n.error===void 0&&(n.error=Tc),n.complete===void 0&&(n.complete=Tc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let c=0;c<this.observers.length;c++)this.sendOne(c,e)}sendOne(e,c){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{c(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $M(t,e){if(typeof t!="object"||t===null)return!1;for(const c of e)if(c in t&&typeof t[c]=="function")return!0;return!1}function Tc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){return t&&t._delegate?t._delegate:t}class B4{constructor(e,c,a){this.name=e,this.instanceFactory=c,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,c){this.name=e,this.container=c,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const c=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(c)){const a=new SM;if(this.instancesDeferred.set(c,a),this.isInitialized(c)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:c});n&&a.resolve(n)}catch{}}return this.instancesDeferred.get(c).promise}getImmediate(e){var c;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(c=e==null?void 0:e.optional)!==null&&c!==void 0?c:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WM(e))try{this.getOrInitializeService({instanceIdentifier:y4})}catch{}for(const[c,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(c);try{const r=this.getOrInitializeService({instanceIdentifier:n});a.resolve(r)}catch{}}}}clearInstance(e=y4){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(c=>"INTERNAL"in c).map(c=>c.INTERNAL.delete()),...e.filter(c=>"_delete"in c).map(c=>c._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=y4){return this.instances.has(e)}getOptions(e=y4){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:c={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:c});for(const[r,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);a===i&&s.resolve(n)}return n}onInit(e,c){var a;const n=this.normalizeInstanceIdentifier(c),r=(a=this.onInitCallbacks.get(n))!==null&&a!==void 0?a:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,c){const a=this.onInitCallbacks.get(c);if(a)for(const n of a)try{n(e,c)}catch{}}getOrInitializeService({instanceIdentifier:e,options:c={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:jM(e),options:c}),this.instances.set(e,a),this.instancesOptions.set(e,c),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=y4){return this.component?this.component.multipleInstances?e:y4:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jM(t){return t===y4?void 0:t}function WM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const c=this.getProvider(e.name);if(c.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);c.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const c=new qM(e,this);return this.providers.set(e,c),c}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d2||(d2={}));const KM={debug:d2.DEBUG,verbose:d2.VERBOSE,info:d2.INFO,warn:d2.WARN,error:d2.ERROR,silent:d2.SILENT},QM=d2.INFO,YM={[d2.DEBUG]:"log",[d2.VERBOSE]:"log",[d2.INFO]:"info",[d2.WARN]:"warn",[d2.ERROR]:"error"},XM=(t,e,...c)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),n=YM[e];if(n)console[n](`[${a}]  ${t.name}:`,...c);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ra{constructor(e){this.name=e,this._logLevel=QM,this._logHandler=XM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d2.DEBUG,...e),this._logHandler(this,d2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d2.VERBOSE,...e),this._logHandler(this,d2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d2.INFO,...e),this._logHandler(this,d2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d2.WARN,...e),this._logHandler(this,d2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d2.ERROR,...e),this._logHandler(this,d2.ERROR,...e)}}const JM=(t,e)=>e.some(c=>t instanceof c);let Os,Fs;function ZM(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ey(){return Fs||(Fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o9=new WeakMap,V5=new WeakMap,l9=new WeakMap,Nc=new WeakMap,Da=new WeakMap;function ty(t){const e=new Promise((c,a)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{c(c4(t.result)),n()},s=()=>{a(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(c=>{c instanceof IDBCursor&&o9.set(c,t)}).catch(()=>{}),Da.set(e,t),e}function cy(t){if(V5.has(t))return;const e=new Promise((c,a)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{c(),n()},s=()=>{a(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});V5.set(t,e)}let z5={get(t,e,c){if(t instanceof IDBTransaction){if(e==="done")return V5.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l9.get(t);if(e==="store")return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return c4(t[e])},set(t,e,c){return t[e]=c,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ay(t){z5=t(z5)}function ny(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...c){const a=t.call(Ec(this),e,...c);return l9.set(a,e.sort?e.sort():[e]),c4(a)}:ey().includes(t)?function(...e){return t.apply(Ec(this),e),c4(o9.get(this))}:function(...e){return c4(t.apply(Ec(this),e))}}function ry(t){return typeof t=="function"?ny(t):(t instanceof IDBTransaction&&cy(t),JM(t,ZM())?new Proxy(t,z5):t)}function c4(t){if(t instanceof IDBRequest)return ty(t);if(Nc.has(t))return Nc.get(t);const e=ry(t);return e!==t&&(Nc.set(t,e),Da.set(e,t)),e}const Ec=t=>Da.get(t);function sy(t,e,{blocked:c,upgrade:a,blocking:n,terminated:r}={}){const s=indexedDB.open(t,e),i=c4(s);return a&&s.addEventListener("upgradeneeded",o=>{a(c4(s.result),o.oldVersion,o.newVersion,c4(s.transaction),o)}),c&&s.addEventListener("blocked",o=>c(o.oldVersion,o.newVersion,o)),i.then(o=>{r&&o.addEventListener("close",()=>r()),n&&o.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),i}const iy=["get","getKey","getAll","getAllKeys","count"],oy=["put","add","delete","clear"],kc=new Map;function Bs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const c=e.replace(/FromIndex$/,""),a=e!==c,n=oy.includes(c);if(!(c in(a?IDBIndex:IDBObjectStore).prototype)||!(n||iy.includes(c)))return;const r=async function(s,...i){const o=this.transaction(s,n?"readwrite":"readonly");let l=o.store;return a&&(l=l.index(i.shift())),(await Promise.all([l[c](...i),n&&o.done]))[0]};return kc.set(e,r),r}ay(t=>({...t,get:(e,c,a)=>Bs(e,c)||t.get(e,c,a),has:(e,c)=>!!Bs(e,c)||t.has(e,c)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(c=>{if(fy(c)){const a=c.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(c=>c).join(" ")}}function fy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const C5="@firebase/app",Us="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4=new Ra("@firebase/app"),uy="@firebase/app-compat",hy="@firebase/analytics-compat",dy="@firebase/analytics",my="@firebase/app-check-compat",py="@firebase/app-check",vy="@firebase/auth",gy="@firebase/auth-compat",Hy="@firebase/database",Vy="@firebase/database-compat",zy="@firebase/functions",Cy="@firebase/functions-compat",My="@firebase/installations",yy="@firebase/installations-compat",_y="@firebase/messaging",Ly="@firebase/messaging-compat",wy="@firebase/performance",by="@firebase/performance-compat",xy="@firebase/remote-config",Sy="@firebase/remote-config-compat",Ay="@firebase/storage",Ty="@firebase/storage-compat",Ny="@firebase/firestore",Ey="@firebase/firestore-compat",ky="firebase",Iy="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M5="[DEFAULT]",Py={[C5]:"fire-core",[uy]:"fire-core-compat",[dy]:"fire-analytics",[hy]:"fire-analytics-compat",[py]:"fire-app-check",[my]:"fire-app-check-compat",[vy]:"fire-auth",[gy]:"fire-auth-compat",[Hy]:"fire-rtdb",[Vy]:"fire-rtdb-compat",[zy]:"fire-fn",[Cy]:"fire-fn-compat",[My]:"fire-iid",[yy]:"fire-iid-compat",[_y]:"fire-fcm",[Ly]:"fire-fcm-compat",[wy]:"fire-perf",[by]:"fire-perf-compat",[xy]:"fire-rc",[Sy]:"fire-rc-compat",[Ay]:"fire-gcs",[Ty]:"fire-gcs-compat",[Ny]:"fire-fst",[Ey]:"fire-fst-compat","fire-js":"fire-js",[ky]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F8=new Map,y5=new Map;function Ry(t,e){try{t.container.addComponent(e)}catch(c){U4.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,c)}}function x6(t){const e=t.name;if(y5.has(e))return U4.debug(`There were multiple attempts to register component ${e}.`),!1;y5.set(e,t);for(const c of F8.values())Ry(c,t);return!0}function Oa(t,e){const c=t.container.getProvider("heartbeat").getImmediate({optional:!0});return c&&c.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},a4=new h0("app","Firebase",Dy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,c,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},c),this._name=c.name,this._automaticDataCollectionEnabled=c.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new B4("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw a4.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W6=Iy;function f9(t,e={}){let c=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:M5,automaticDataCollectionEnabled:!1},e),n=a.name;if(typeof n!="string"||!n)throw a4.create("bad-app-name",{appName:String(n)});if(c||(c=s9()),!c)throw a4.create("no-options");const r=F8.get(n);if(r){if(O8(c,r.options)&&O8(a,r.config))return r;throw a4.create("duplicate-app",{appName:n})}const s=new GM(n);for(const o of y5.values())s.addComponent(o);const i=new Oy(c,a,s);return F8.set(n,i),i}function u9(t=M5){const e=F8.get(t);if(!e&&t===M5&&s9())return f9();if(!e)throw a4.create("no-app",{appName:t});return e}function n4(t,e,c){var a;let n=(a=Py[t])!==null&&a!==void 0?a:t;c&&(n+=`-${c}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const i=[`Unable to register library "${n}" with version "${e}":`];r&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&i.push("and"),s&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),U4.warn(i.join(" "));return}x6(new B4(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebase-heartbeat-database",By=1,Be="firebase-heartbeat-store";let Ic=null;function h9(){return Ic||(Ic=sy(Fy,By,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Be)}}}).catch(t=>{throw a4.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function Uy(t){try{return await(await h9()).transaction(Be).objectStore(Be).get(d9(t))}catch(e){if(e instanceof D3)U4.warn(e.message);else{const c=a4.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});U4.warn(c.message)}}}async function $s(t,e){try{const a=(await h9()).transaction(Be,"readwrite");await a.objectStore(Be).put(e,d9(t)),await a.done}catch(c){if(c instanceof D3)U4.warn(c.message);else{const a=a4.create("idb-set",{originalErrorMessage:c==null?void 0:c.message});U4.warn(a.message)}}}function d9(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=1024,qy=30*24*60*60*1e3;class jy{constructor(e){this.container=e,this._heartbeatsCache=null;const c=this.container.getProvider("app").getImmediate();this._storage=new Gy(c),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,c;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qs();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((c=this._heartbeatsCache)===null||c===void 0?void 0:c.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const c=qs(),{heartbeatsToSend:a,unsentEntries:n}=Wy(this._heartbeatsCache.heartbeats),r=D8(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function qs(){return new Date().toISOString().substring(0,10)}function Wy(t,e=$y){const c=[];let a=t.slice();for(const n of t){const r=c.find(s=>s.agent===n.agent);if(r){if(r.dates.push(n.date),js(c)>e){r.dates.pop();break}}else if(c.push({agent:n.agent,dates:[n.date]}),js(c)>e){c.pop();break}a=a.slice(1)}return{heartbeatsToSend:c,unsentEntries:a}}class Gy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IM()?PM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const c=await Uy(this.app);return c!=null&&c.heartbeats?c:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var c;if(await this._canUseIndexedDBPromise){const n=await this.read();return $s(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var c;if(await this._canUseIndexedDBPromise){const n=await this.read();return $s(this.app,{lastSentHeartbeatDate:(c=e.lastSentHeartbeatDate)!==null&&c!==void 0?c:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function js(t){return D8(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){x6(new B4("platform-logger",e=>new ly(e),"PRIVATE")),x6(new B4("heartbeat",e=>new jy(e),"PRIVATE")),n4(C5,Us,t),n4(C5,Us,"esm2017"),n4("fire-js","")}Ky("");var Qy="firebase",Yy="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n4(Qy,Yy,"app");var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,Fa=Fa||{},e2=Xy||self;function _t(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function m0(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Jy(t){return Object.prototype.hasOwnProperty.call(t,Pc)&&t[Pc]||(t[Pc]=++Zy)}var Pc="closure_uid_"+(1e9*Math.random()>>>0),Zy=0;function e_(t,e,c){return t.call.apply(t.bind,arguments)}function t_(t,e,c){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function v1(t,e,c){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v1=e_:v1=t_,v1.apply(null,arguments)}function Z0(t,e){var c=Array.prototype.slice.call(arguments,1);return function(){var a=c.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function a1(t,e){function c(){}c.prototype=e.prototype,t.$=e.prototype,t.prototype=new c,t.prototype.constructor=t,t.ac=function(a,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(a,s)}}function v4(){this.s=this.s,this.o=this.o}var c_=0;v4.prototype.s=!1;v4.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),c_!=0)&&Jy(this)};v4.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const m9=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let c=0;c<t.length;c++)if(c in t&&t[c]===e)return c;return-1};function Ba(t){const e=t.length;if(0<e){const c=Array(e);for(let a=0;a<e;a++)c[a]=t[a];return c}return[]}function Ws(t,e){for(let c=1;c<arguments.length;c++){const a=arguments[c];if(_t(a)){const n=t.length||0,r=a.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=a[s]}else t.push(a)}}function g1(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}g1.prototype.h=function(){this.defaultPrevented=!0};var a_=function(){if(!e2.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const c=()=>{};e2.addEventListener("test",c,e),e2.removeEventListener("test",c,e)}catch{}return t}();function Ue(t){return/^[\s\xa0]*$/.test(t)}function Lt(){var t=e2.navigator;return t&&(t=t.userAgent)?t:""}function n3(t){return Lt().indexOf(t)!=-1}function Ua(t){return Ua[" "](t),t}Ua[" "]=function(){};function n_(t,e){var c=Y_;return Object.prototype.hasOwnProperty.call(c,t)?c[t]:c[t]=e(t)}var r_=n3("Opera"),S6=n3("Trident")||n3("MSIE"),p9=n3("Edge"),_5=p9||S6,v9=n3("Gecko")&&!(Lt().toLowerCase().indexOf("webkit")!=-1&&!n3("Edge"))&&!(n3("Trident")||n3("MSIE"))&&!n3("Edge"),s_=Lt().toLowerCase().indexOf("webkit")!=-1&&!n3("Edge");function g9(){var t=e2.document;return t?t.documentMode:void 0}var L5;e:{var Rc="",Dc=function(){var t=Lt();if(v9)return/rv:([^\);]+)(\)|;)/.exec(t);if(p9)return/Edge\/([\d\.]+)/.exec(t);if(S6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(s_)return/WebKit\/(\S+)/.exec(t);if(r_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Rc=Dc?Dc[1]:""),S6){var Oc=g9();if(Oc!=null&&Oc>parseFloat(Rc)){L5=String(Oc);break e}}L5=Rc}var w5;if(e2.document&&S6){var Gs=g9();w5=Gs||parseInt(L5,10)||void 0}else w5=void 0;var i_=w5;function $e(t,e){if(g1.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var c=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(v9){e:{try{Ua(e.nodeName);var n=!0;break e}catch{}n=!1}n||(e=null)}}else c=="mouseover"?e=t.fromElement:c=="mouseout"&&(e=t.toElement);this.relatedTarget=e,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:o_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$e.$.h.call(this)}}a1($e,g1);var o_={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var p0="closure_listenable_"+(1e6*Math.random()|0),l_=0;function f_(t,e,c,a,n){this.listener=t,this.proxy=null,this.src=e,this.type=c,this.capture=!!a,this.la=n,this.key=++l_,this.fa=this.ia=!1}function wt(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function $a(t,e,c){for(const a in t)e.call(c,t[a],a,t)}function u_(t,e){for(const c in t)e.call(void 0,t[c],c,t)}function H9(t){const e={};for(const c in t)e[c]=t[c];return e}const Ks="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V9(t,e){let c,a;for(let n=1;n<arguments.length;n++){a=arguments[n];for(c in a)t[c]=a[c];for(let r=0;r<Ks.length;r++)c=Ks[r],Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}}function bt(t){this.src=t,this.g={},this.h=0}bt.prototype.add=function(t,e,c,a,n){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var s=x5(t,e,a,n);return-1<s?(e=t[s],c||(e.ia=!1)):(e=new f_(e,this.src,r,!!a,n),e.ia=c,t.push(e)),e};function b5(t,e){var c=e.type;if(c in t.g){var a=t.g[c],n=m9(a,e),r;(r=0<=n)&&Array.prototype.splice.call(a,n,1),r&&(wt(e),t.g[c].length==0&&(delete t.g[c],t.h--))}}function x5(t,e,c,a){for(var n=0;n<t.length;++n){var r=t[n];if(!r.fa&&r.listener==e&&r.capture==!!c&&r.la==a)return n}return-1}var qa="closure_lm_"+(1e6*Math.random()|0),Fc={};function z9(t,e,c,a,n){if(a&&a.once)return M9(t,e,c,a,n);if(Array.isArray(e)){for(var r=0;r<e.length;r++)z9(t,e[r],c,a,n);return null}return c=Ga(c),t&&t[p0]?t.O(e,c,m0(a)?!!a.capture:!!a,n):C9(t,e,c,!1,a,n)}function C9(t,e,c,a,n,r){if(!e)throw Error("Invalid event type");var s=m0(n)?!!n.capture:!!n,i=Wa(t);if(i||(t[qa]=i=new bt(t)),c=i.add(e,c,a,s,r),c.proxy)return c;if(a=h_(),c.proxy=a,a.src=t,a.listener=c,t.addEventListener)a_||(n=s),n===void 0&&(n=!1),t.addEventListener(e.toString(),a,n);else if(t.attachEvent)t.attachEvent(_9(e.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return c}function h_(){function t(c){return e.call(t.src,t.listener,c)}const e=d_;return t}function M9(t,e,c,a,n){if(Array.isArray(e)){for(var r=0;r<e.length;r++)M9(t,e[r],c,a,n);return null}return c=Ga(c),t&&t[p0]?t.P(e,c,m0(a)?!!a.capture:!!a,n):C9(t,e,c,!0,a,n)}function y9(t,e,c,a,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)y9(t,e[r],c,a,n);else a=m0(a)?!!a.capture:!!a,c=Ga(c),t&&t[p0]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],c=x5(r,c,a,n),-1<c&&(wt(r[c]),Array.prototype.splice.call(r,c,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wa(t))&&(e=t.g[e.toString()],t=-1,e&&(t=x5(e,c,a,n)),(c=-1<t?e[t]:null)&&ja(c))}function ja(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[p0])b5(e.i,t);else{var c=t.type,a=t.proxy;e.removeEventListener?e.removeEventListener(c,a,t.capture):e.detachEvent?e.detachEvent(_9(c),a):e.addListener&&e.removeListener&&e.removeListener(a),(c=Wa(e))?(b5(c,t),c.h==0&&(c.src=null,e[qa]=null)):wt(t)}}}function _9(t){return t in Fc?Fc[t]:Fc[t]="on"+t}function d_(t,e){if(t.fa)t=!0;else{e=new $e(e,this);var c=t.listener,a=t.la||t.src;t.ia&&ja(t),t=c.call(a,e)}return t}function Wa(t){return t=t[qa],t instanceof bt?t:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ga(t){return typeof t=="function"?t:(t[Bc]||(t[Bc]=function(e){return t.handleEvent(e)}),t[Bc])}function c1(){v4.call(this),this.i=new bt(this),this.S=this,this.J=null}a1(c1,v4);c1.prototype[p0]=!0;c1.prototype.removeEventListener=function(t,e,c,a){y9(this,t,e,c,a)};function o1(t,e){var c,a=t.J;if(a)for(c=[];a;a=a.J)c.push(a);if(t=t.S,a=e.type||e,typeof e=="string")e=new g1(e,t);else if(e instanceof g1)e.target=e.target||t;else{var n=e;e=new g1(a,t),V9(e,n)}if(n=!0,c)for(var r=c.length-1;0<=r;r--){var s=e.g=c[r];n=e8(s,a,!0,e)&&n}if(s=e.g=t,n=e8(s,a,!0,e)&&n,n=e8(s,a,!1,e)&&n,c)for(r=0;r<c.length;r++)s=e.g=c[r],n=e8(s,a,!1,e)&&n}c1.prototype.N=function(){if(c1.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var c=t.g[e],a=0;a<c.length;a++)wt(c[a]);delete t.g[e],t.h--}}this.J=null};c1.prototype.O=function(t,e,c,a){return this.i.add(String(t),e,!1,c,a)};c1.prototype.P=function(t,e,c,a){return this.i.add(String(t),e,!0,c,a)};function e8(t,e,c,a){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var n=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.fa&&s.capture==c){var i=s.listener,o=s.la||s.src;s.ia&&b5(t.i,s),n=i.call(o,a)!==!1&&n}}return n&&!a.defaultPrevented}var Ka=e2.JSON.stringify;class m_{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function p_(){var t=Qa;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class v_{constructor(){this.h=this.g=null}add(e,c){const a=L9.get();a.set(e,c),this.h?this.h.next=a:this.g=a,this.h=a}}var L9=new m_(()=>new g_,t=>t.reset());class g_{constructor(){this.next=this.g=this.h=null}set(e,c){this.h=e,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}function H_(t){var e=1;t=t.split(":");const c=[];for(;0<e&&t.length;)c.push(t.shift()),e--;return t.length&&c.push(t.join(":")),c}function V_(t){e2.setTimeout(()=>{throw t},0)}let qe,je=!1,Qa=new v_,w9=()=>{const t=e2.Promise.resolve(void 0);qe=()=>{t.then(z_)}};var z_=()=>{for(var t;t=p_();){try{t.h.call(t.g)}catch(c){V_(c)}var e=L9;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}je=!1};function xt(t,e){c1.call(this),this.h=t||1,this.g=e||e2,this.j=v1(this.qb,this),this.l=Date.now()}a1(xt,c1);I=xt.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),o1(this,"tick"),this.ga&&(Ya(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ya(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}I.N=function(){xt.$.N.call(this),Ya(this),delete this.g};function Xa(t,e,c){if(typeof t=="function")c&&(t=v1(t,c));else if(t&&typeof t.handleEvent=="function")t=v1(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:e2.setTimeout(t,e||0)}function b9(t){t.g=Xa(()=>{t.g=null,t.i&&(t.i=!1,b9(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class C_ extends v4{constructor(e,c){super(),this.m=e,this.j=c,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b9(this)}N(){super.N(),this.g&&(e2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(t){v4.call(this),this.h=t,this.g={}}a1(We,v4);var Qs=[];function x9(t,e,c,a){Array.isArray(c)||(c&&(Qs[0]=c.toString()),c=Qs);for(var n=0;n<c.length;n++){var r=z9(e,c[n],a||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function S9(t){$a(t.g,function(e,c){this.g.hasOwnProperty(c)&&ja(e)},t),t.g={}}We.prototype.N=function(){We.$.N.call(this),S9(this)};We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function St(){this.g=!0}St.prototype.Ea=function(){this.g=!1};function M_(t,e,c,a,n,r){t.info(function(){if(t.g)if(r)for(var s="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");s=2<=u.length&&u[1]=="type"?s+(f+"="+l+"&"):s+(f+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+a+") [attempt "+n+"]: "+e+`
`+c+`
`+s})}function y_(t,e,c,a,n,r,s){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+n+"]: "+e+`
`+c+`
`+r+" "+s})}function u6(t,e,c,a){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+L_(t,c)+(a?" "+a:"")})}function __(t,e){t.info(function(){return"TIMEOUT: "+e})}St.prototype.info=function(){};function L_(t,e){if(!t.g)return e;if(!e)return null;try{var c=JSON.parse(e);if(c){for(t=0;t<c.length;t++)if(Array.isArray(c[t])){var a=c[t];if(!(2>a.length)){var n=a[1];if(Array.isArray(n)&&!(1>n.length)){var r=n[0];if(r!="noop"&&r!="stop"&&r!="close")for(var s=1;s<n.length;s++)n[s]=""}}}}return Ka(c)}catch{return e}}var Y4={},Ys=null;function At(){return Ys=Ys||new c1}Y4.Ta="serverreachability";function A9(t){g1.call(this,Y4.Ta,t)}a1(A9,g1);function Ge(t){const e=At();o1(e,new A9(e))}Y4.STAT_EVENT="statevent";function T9(t,e){g1.call(this,Y4.STAT_EVENT,t),this.stat=e}a1(T9,g1);function M1(t){const e=At();o1(e,new T9(e,t))}Y4.Ua="timingevent";function N9(t,e){g1.call(this,Y4.Ua,t),this.size=e}a1(N9,g1);function v0(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return e2.setTimeout(function(){t()},e)}var Tt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},E9={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ja(){}Ja.prototype.h=null;function Xs(t){return t.h||(t.h=t.i())}function k9(){}var g0={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Za(){g1.call(this,"d")}a1(Za,g1);function en(){g1.call(this,"c")}a1(en,g1);var S5;function Nt(){}a1(Nt,Ja);Nt.prototype.g=function(){return new XMLHttpRequest};Nt.prototype.i=function(){return{}};S5=new Nt;function H0(t,e,c,a){this.l=t,this.j=e,this.m=c,this.W=a||1,this.U=new We(this),this.P=w_,t=_5?125:void 0,this.V=new xt(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new I9}function I9(){this.i=null,this.g="",this.h=!1}var w_=45e3,P9={},A5={};I=H0.prototype;I.setTimeout=function(t){this.P=t};function T5(t,e,c){t.L=1,t.A=kt(x3(e)),t.u=c,t.S=!0,R9(t,null)}function R9(t,e){t.G=Date.now(),V0(t),t.B=x3(t.A);var c=t.B,a=t.W;Array.isArray(a)||(a=[String(a)]),j9(c.i,"t",a),t.o=0,c=t.l.J,t.h=new I9,t.g=hl(t.l,c?e:null,!t.u),0<t.O&&(t.M=new C_(v1(t.Pa,t,t.g),t.O)),x9(t.U,t.g,"readystatechange",t.nb),e=t.I?H9(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ge(),M_(t.j,t.v,t.B,t.m,t.W,t.u)}I.nb=function(t){t=t.target;const e=this.M;e&&r3(t)==3?e.l():this.Pa(t)};I.Pa=function(t){try{if(t==this.g)e:{const f=r3(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>f)&&(f!=3||_5||this.g&&(this.h.h||this.g.ja()||t7(this.g)))){this.J||f!=4||e==7||(e==8||0>=u?Ge(3):Ge(2)),Et(this);var c=this.g.da();this.ca=c;t:if(D9(this)){var a=t7(this.g);t="";var n=a.length,r=r3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){S4(this),Me(this);var s="";break t}this.h.i=new e2.TextDecoder}for(e=0;e<n;e++)this.h.h=!0,t+=this.h.i.decode(a[e],{stream:r&&e==n-1});a.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=c==200,y_(this.j,this.v,this.B,this.m,this.W,f,c),this.i){if(this.aa&&!this.K){t:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ue(i)){var l=i;break t}}l=null}if(c=l)u6(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,N5(this,c);else{this.i=!1,this.s=3,M1(12),S4(this),Me(this);break e}}this.S?(O9(this,f,s),_5&&this.i&&f==3&&(x9(this.U,this.V,"tick",this.mb),this.V.start())):(u6(this.j,this.m,s,null),N5(this,s)),f==4&&S4(this),this.i&&!this.J&&(f==4?ol(this.l,this):(this.i=!1,V0(this)))}else G_(this.g),c==400&&0<s.indexOf("Unknown SID")?(this.s=3,M1(12)):(this.s=0,M1(13)),S4(this),Me(this)}}}catch{}finally{}};function D9(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function O9(t,e,c){let a=!0,n;for(;!t.J&&t.o<c.length;)if(n=b_(t,c),n==A5){e==4&&(t.s=4,M1(14),a=!1),u6(t.j,t.m,null,"[Incomplete Response]");break}else if(n==P9){t.s=4,M1(15),u6(t.j,t.m,c,"[Invalid Chunk]"),a=!1;break}else u6(t.j,t.m,n,null),N5(t,n);D9(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||c.length!=0||t.h.h||(t.s=1,M1(16),a=!1),t.i=t.i&&a,a?0<c.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+c.length),sn(e),e.M=!0,M1(11))):(u6(t.j,t.m,c,"[Invalid Chunked Response]"),S4(t),Me(t))}I.mb=function(){if(this.g){var t=r3(this.g),e=this.g.ja();this.o<e.length&&(Et(this),O9(this,t,e),this.i&&t!=4&&V0(this))}};function b_(t,e){var c=t.o,a=e.indexOf(`
`,c);return a==-1?A5:(c=Number(e.substring(c,a)),isNaN(c)?P9:(a+=1,a+c>e.length?A5:(e=e.slice(a,a+c),t.o=a+c,e)))}I.cancel=function(){this.J=!0,S4(this)};function V0(t){t.Y=Date.now()+t.P,F9(t,t.P)}function F9(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=v0(v1(t.lb,t),e)}function Et(t){t.C&&(e2.clearTimeout(t.C),t.C=null)}I.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(__(this.j,this.B),this.L!=2&&(Ge(),M1(17)),S4(this),this.s=2,Me(this)):F9(this,this.Y-t)};function Me(t){t.l.H==0||t.J||ol(t.l,t)}function S4(t){Et(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ya(t.V),S9(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function N5(t,e){try{var c=t.l;if(c.H!=0&&(c.g==t||E5(c.i,t))){if(!t.K&&E5(c.i,t)&&c.H==3){try{var a=c.Ja.g.parse(e)}catch{a=null}if(Array.isArray(a)&&a.length==3){var n=a;if(n[0]==0){e:if(!c.u){if(c.g)if(c.g.G+3e3<t.G)$8(c),Dt(c);else break e;rn(c),M1(18)}}else c.Fa=n[1],0<c.Fa-c.V&&37500>n[2]&&c.G&&c.A==0&&!c.v&&(c.v=v0(v1(c.ib,c),6e3));if(1>=K9(c.i)&&c.oa){try{c.oa()}catch{}c.oa=void 0}}else A4(c,11)}else if((t.K||c.g==t)&&$8(c),!Ue(e))for(n=c.Ja.g.parse(e),e=0;e<n.length;e++){let l=n[e];if(c.V=l[0],l=l[1],c.H==2)if(l[0]=="c"){c.K=l[1],c.pa=l[2];const f=l[3];f!=null&&(c.ra=f,c.l.info("VER="+c.ra));const u=l[4];u!=null&&(c.Ga=u,c.l.info("SVER="+c.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(a=1.5*h,c.L=a,c.l.info("backChannelRequestTimeoutMs_="+a)),a=c;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=a.i;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(tn(r,r.h),r.h=null))}if(a.F){const V=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;V&&(a.Da=V,k2(a.I,a.F,V))}}c.H=3,c.h&&c.h.Ba(),c.ca&&(c.S=Date.now()-t.G,c.l.info("Handshake RTT: "+c.S+"ms")),a=c;var s=t;if(a.wa=ul(a,a.J?a.pa:null,a.Y),s.K){Q9(a.i,s);var i=s,o=a.L;o&&i.setTimeout(o),i.C&&(Et(i),V0(i)),a.g=s}else sl(a);0<c.j.length&&Ot(c)}else l[0]!="stop"&&l[0]!="close"||A4(c,7);else c.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?A4(c,7):nn(c):l[0]!="noop"&&c.h&&c.h.Aa(l),c.A=0)}}Ge(4)}catch{}}function x_(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_t(t)){for(var e=[],c=t.length,a=0;a<c;a++)e.push(t[a]);return e}e=[],c=0;for(a in t)e[c++]=t[a];return e}function S_(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_t(t)||typeof t=="string"){var e=[];t=t.length;for(var c=0;c<t;c++)e.push(c);return e}e=[],c=0;for(const a in t)e[c++]=a;return e}}}function B9(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_t(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var c=S_(t),a=x_(t),n=a.length,r=0;r<n;r++)e.call(void 0,a[r],c&&c[r],t)}var U9=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A_(t,e){if(t){t=t.split("&");for(var c=0;c<t.length;c++){var a=t[c].indexOf("="),n=null;if(0<=a){var r=t[c].substring(0,a);n=t[c].substring(a+1)}else r=t[c];e(r,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function P4(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof P4){this.h=t.h,B8(this,t.j),this.s=t.s,this.g=t.g,U8(this,t.m),this.l=t.l;var e=t.i,c=new Ke;c.i=e.i,e.g&&(c.g=new Map(e.g),c.h=e.h),Js(this,c),this.o=t.o}else t&&(e=String(t).match(U9))?(this.h=!1,B8(this,e[1]||"",!0),this.s=he(e[2]||""),this.g=he(e[3]||"",!0),U8(this,e[4]),this.l=he(e[5]||"",!0),Js(this,e[6]||"",!0),this.o=he(e[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}P4.prototype.toString=function(){var t=[],e=this.j;e&&t.push(de(e,Zs,!0),":");var c=this.g;return(c||e=="file")&&(t.push("//"),(e=this.s)&&t.push(de(e,Zs,!0),"@"),t.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.m,c!=null&&t.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&t.push("/"),t.push(de(c,c.charAt(0)=="/"?E_:N_,!0))),(c=this.i.toString())&&t.push("?",c),(c=this.o)&&t.push("#",de(c,I_)),t.join("")};function x3(t){return new P4(t)}function B8(t,e,c){t.j=c?he(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function U8(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Js(t,e,c){e instanceof Ke?(t.i=e,P_(t.i,t.h)):(c||(e=de(e,k_)),t.i=new Ke(e,t.h))}function k2(t,e,c){t.i.set(e,c)}function kt(t){return k2(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function he(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function de(t,e,c){return typeof t=="string"?(t=encodeURI(t).replace(e,T_),c&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function T_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zs=/[#\/\?@]/g,N_=/[#\?:]/g,E_=/[#\?]/g,k_=/[#\?@]/g,I_=/#/g;function Ke(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function g4(t){t.g||(t.g=new Map,t.h=0,t.i&&A_(t.i,function(e,c){t.add(decodeURIComponent(e.replace(/\+/g," ")),c)}))}I=Ke.prototype;I.add=function(t,e){g4(this),this.i=null,t=G6(this,t);var c=this.g.get(t);return c||this.g.set(t,c=[]),c.push(e),this.h+=1,this};function $9(t,e){g4(t),e=G6(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function q9(t,e){return g4(t),e=G6(t,e),t.g.has(e)}I.forEach=function(t,e){g4(this),this.g.forEach(function(c,a){c.forEach(function(n){t.call(e,n,a,this)},this)},this)};I.ta=function(){g4(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),c=[];for(let a=0;a<e.length;a++){const n=t[a];for(let r=0;r<n.length;r++)c.push(e[a])}return c};I.Z=function(t){g4(this);let e=[];if(typeof t=="string")q9(this,t)&&(e=e.concat(this.g.get(G6(this,t))));else{t=Array.from(this.g.values());for(let c=0;c<t.length;c++)e=e.concat(t[c])}return e};I.set=function(t,e){return g4(this),this.i=null,t=G6(this,t),q9(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};I.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function j9(t,e,c){$9(t,e),0<c.length&&(t.i=null,t.g.set(G6(t,e),Ba(c)),t.h+=c.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var c=0;c<e.length;c++){var a=e[c];const r=encodeURIComponent(String(a)),s=this.Z(a);for(a=0;a<s.length;a++){var n=r;s[a]!==""&&(n+="="+encodeURIComponent(String(s[a]))),t.push(n)}}return this.i=t.join("&")};function G6(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function P_(t,e){e&&!t.j&&(g4(t),t.i=null,t.g.forEach(function(c,a){var n=a.toLowerCase();a!=n&&($9(this,a),j9(this,n,c))},t)),t.j=e}var R_=class{constructor(t,e){this.g=t,this.map=e}};function W9(t){this.l=t||D_,e2.PerformanceNavigationTiming?(t=e2.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(e2.g&&e2.g.Ka&&e2.g.Ka()&&e2.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var D_=10;function G9(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function K9(t){return t.h?1:t.g?t.g.size:0}function E5(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function tn(t,e){t.g?t.g.add(e):t.h=e}function Q9(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}W9.prototype.cancel=function(){if(this.i=Y9(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Y9(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const c of t.g.values())e=e.concat(c.F);return e}return Ba(t.i)}var O_=class{stringify(t){return e2.JSON.stringify(t,void 0)}parse(t){return e2.JSON.parse(t,void 0)}};function F_(){this.g=new O_}function B_(t,e,c){const a=c||"";try{B9(t,function(n,r){let s=n;m0(n)&&(s=Ka(n)),e.push(a+r+"="+encodeURIComponent(s))})}catch(n){throw e.push(a+"type="+encodeURIComponent("_badmap")),n}}function U_(t,e){const c=new St;if(e2.Image){const a=new Image;a.onload=Z0(t8,c,a,"TestLoadImage: loaded",!0,e),a.onerror=Z0(t8,c,a,"TestLoadImage: error",!1,e),a.onabort=Z0(t8,c,a,"TestLoadImage: abort",!1,e),a.ontimeout=Z0(t8,c,a,"TestLoadImage: timeout",!1,e),e2.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else e(!1)}function t8(t,e,c,a,n){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,n(a)}catch{}}function It(t){this.l=t.ec||null,this.j=t.ob||!1}a1(It,Ja);It.prototype.g=function(){return new Pt(this.l,this.j)};It.prototype.i=function(t){return function(){return t}}({});function Pt(t,e){c1.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}a1(Pt,c1);var cn=0;I=Pt.prototype;I.open=function(t,e){if(this.readyState!=cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qe(this)};I.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||e2).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,z0(this)),this.readyState=cn};I.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof e2.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;X9(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function X9(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}I.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?z0(this):Qe(this),this.readyState==3&&X9(this)}};I.Za=function(t){this.g&&(this.response=this.responseText=t,z0(this))};I.Ya=function(t){this.g&&(this.response=t,z0(this))};I.ka=function(){this.g&&z0(this)};function z0(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qe(t)}I.setRequestHeader=function(t,e){this.v.append(t,e)};I.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var c=e.next();!c.done;)c=c.value,t.push(c[0]+": "+c[1]),c=e.next();return t.join(`\r
`)};function Qe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $_=e2.JSON.parse;function U2(t){c1.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=J9,this.L=this.M=!1}a1(U2,c1);var J9="",q_=/^https?$/i,j_=["POST","PUT"];I=U2.prototype;I.Oa=function(t){this.M=t};I.ha=function(t,e,c,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():S5.g(),this.C=this.u?Xs(this.u):Xs(S5),this.g.onreadystatechange=v1(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){e7(this,r);return}if(t=c||"",c=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var n in a)c.set(n,a[n]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const r of a.keys())c.set(r,a.get(r));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(c.keys()).find(r=>r.toLowerCase()=="content-type"),n=e2.FormData&&t instanceof e2.FormData,!(0<=m9(j_,e))||a||n||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,s]of c)this.g.setRequestHeader(r,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tl(this),0<this.B&&((this.L=W_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v1(this.ua,this)):this.A=Xa(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){e7(this,r)}};function W_(t){return S6&&typeof t.timeout=="number"&&t.ontimeout!==void 0}I.ua=function(){typeof Fa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,o1(this,"timeout"),this.abort(8))};function e7(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Z9(t),Rt(t)}function Z9(t){t.F||(t.F=!0,o1(t,"complete"),o1(t,"error"))}I.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,o1(this,"complete"),o1(this,"abort"),Rt(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rt(this,!0)),U2.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?el(this):this.kb())};I.kb=function(){el(this)};function el(t){if(t.h&&typeof Fa<"u"&&(!t.C[1]||r3(t)!=4||t.da()!=2)){if(t.v&&r3(t)==4)Xa(t.La,0,t);else if(o1(t,"readystatechange"),r3(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var c;if(!(c=e)){var a;if(a=s===0){var n=String(t.I).match(U9)[1]||null;!n&&e2.self&&e2.self.location&&(n=e2.self.location.protocol.slice(0,-1)),a=!q_.test(n?n.toLowerCase():"")}c=a}if(c)o1(t,"complete"),o1(t,"success");else{t.m=6;try{var r=2<r3(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Z9(t)}}finally{Rt(t)}}}}function Rt(t,e){if(t.g){tl(t);const c=t.g,a=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||o1(t,"ready");try{c.onreadystatechange=a}catch{}}}function tl(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(e2.clearTimeout(t.A),t.A=null)}I.isActive=function(){return!!this.g};function r3(t){return t.g?t.g.readyState:0}I.da=function(){try{return 2<r3(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$_(e)}};function t7(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case J9:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function G_(t){const e={};t=(t.g&&2<=r3(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(Ue(t[a]))continue;var c=H_(t[a]);const n=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const r=e[n]||[];e[n]=r,r.push(c)}u_(e,function(a){return a.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cl(t){let e="";return $a(t,function(c,a){e+=a,e+=":",e+=c,e+=`\r
`}),e}function an(t,e,c){e:{for(a in c){var a=!1;break e}a=!0}a||(c=cl(c),typeof t=="string"?c!=null&&encodeURIComponent(String(c)):k2(t,e,c))}function ne(t,e,c){return c&&c.internalChannelParams&&c.internalChannelParams[t]||e}function al(t){this.Ga=0,this.j=[],this.l=new St,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ne("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ne("baseRetryDelayMs",5e3,t),this.hb=ne("retryDelaySeedMs",1e4,t),this.eb=ne("forwardChannelMaxRetries",2,t),this.xa=ne("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new W9(t&&t.concurrentRequestLimit),this.Ja=new F_,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=al.prototype;I.ra=8;I.H=1;function nn(t){if(nl(t),t.H==3){var e=t.W++,c=x3(t.I);if(k2(c,"SID",t.K),k2(c,"RID",e),k2(c,"TYPE","terminate"),C0(t,c),e=new H0(t,t.l,e),e.L=2,e.A=kt(x3(c)),c=!1,e2.navigator&&e2.navigator.sendBeacon)try{c=e2.navigator.sendBeacon(e.A.toString(),"")}catch{}!c&&e2.Image&&(new Image().src=e.A,c=!0),c||(e.g=hl(e.l,null),e.g.ha(e.A)),e.G=Date.now(),V0(e)}fl(t)}function Dt(t){t.g&&(sn(t),t.g.cancel(),t.g=null)}function nl(t){Dt(t),t.u&&(e2.clearTimeout(t.u),t.u=null),$8(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&e2.clearTimeout(t.m),t.m=null)}function Ot(t){if(!G9(t.i)&&!t.m){t.m=!0;var e=t.Na;qe||w9(),je||(qe(),je=!0),Qa.add(e,t),t.C=0}}function K_(t,e){return K9(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=v0(v1(t.Na,t,e),ll(t,t.C)),t.C++,!0)}I.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const n=new H0(this,this.l,t);let r=this.s;if(this.U&&(r?(r=H9(r),V9(r,this.U)):r=this.U),this.o!==null||this.O||(n.I=r,r=null),this.P)e:{for(var e=0,c=0;c<this.j.length;c++){t:{var a=this.j[c];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break t}a=void 0}if(a===void 0)break;if(e+=a,4096<e){e=c;break e}if(e===4096||c===this.j.length-1){e=c+1;break e}}e=1e3}else e=1e3;e=rl(this,n,e),c=x3(this.I),k2(c,"RID",t),k2(c,"CVER",22),this.F&&k2(c,"X-HTTP-Session-Id",this.F),C0(this,c),r&&(this.O?e="headers="+encodeURIComponent(String(cl(r)))+"&"+e:this.o&&an(c,this.o,r)),tn(this.i,n),this.bb&&k2(c,"TYPE","init"),this.P?(k2(c,"$req",e),k2(c,"SID","null"),n.aa=!0,T5(n,c,null)):T5(n,c,e),this.H=2}}else this.H==3&&(t?c7(this,t):this.j.length==0||G9(this.i)||c7(this))};function c7(t,e){var c;e?c=e.m:c=t.W++;const a=x3(t.I);k2(a,"SID",t.K),k2(a,"RID",c),k2(a,"AID",t.V),C0(t,a),t.o&&t.s&&an(a,t.o,t.s),c=new H0(t,t.l,c,t.C+1),t.o===null&&(c.I=t.s),e&&(t.j=e.F.concat(t.j)),e=rl(t,c,1e3),c.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),tn(t.i,c),T5(c,a,e)}function C0(t,e){t.na&&$a(t.na,function(c,a){k2(e,a,c)}),t.h&&B9({},function(c,a){k2(e,a,c)})}function rl(t,e,c){c=Math.min(t.j.length,c);var a=t.h?v1(t.h.Va,t.h,t):null;e:{var n=t.j;let r=-1;for(;;){const s=["count="+c];r==-1?0<c?(r=n[0].g,s.push("ofs="+r)):r=0:s.push("ofs="+r);let i=!0;for(let o=0;o<c;o++){let l=n[o].g;const f=n[o].map;if(l-=r,0>l)r=Math.max(0,n[o].g-100),i=!1;else try{B_(f,s,"req"+l+"_")}catch{a&&a(f)}}if(i){a=s.join("&");break e}}}return t=t.j.splice(0,c),e.F=t,a}function sl(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qe||w9(),je||(qe(),je=!0),Qa.add(e,t),t.A=0}}function rn(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=v0(v1(t.Ma,t),ll(t,t.A)),t.A++,!0)}I.Ma=function(){if(this.u=null,il(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=v0(v1(this.jb,this),t)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,M1(10),Dt(this),il(this))};function sn(t){t.B!=null&&(e2.clearTimeout(t.B),t.B=null)}function il(t){t.g=new H0(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=x3(t.wa);k2(e,"RID","rpc"),k2(e,"SID",t.K),k2(e,"AID",t.V),k2(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&k2(e,"TO",t.qa),k2(e,"TYPE","xmlhttp"),C0(t,e),t.o&&t.s&&an(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var c=t.g;t=t.pa,c.L=1,c.A=kt(x3(e)),c.u=null,c.S=!0,R9(c,t)}I.ib=function(){this.v!=null&&(this.v=null,Dt(this),rn(this),M1(19))};function $8(t){t.v!=null&&(e2.clearTimeout(t.v),t.v=null)}function ol(t,e){var c=null;if(t.g==e){$8(t),sn(t),t.g=null;var a=2}else if(E5(t.i,e))c=e.F,Q9(t.i,e),a=1;else return;if(t.H!=0){if(e.i)if(a==1){c=e.u?e.u.length:0,e=Date.now()-e.G;var n=t.C;a=At(),o1(a,new N9(a,c)),Ot(t)}else sl(t);else if(n=e.s,n==3||n==0&&0<e.ca||!(a==1&&K_(t,e)||a==2&&rn(t)))switch(c&&0<c.length&&(e=t.i,e.i=e.i.concat(c)),n){case 1:A4(t,5);break;case 4:A4(t,10);break;case 3:A4(t,6);break;default:A4(t,2)}}}function ll(t,e){let c=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(c*=2),c*e}function A4(t,e){if(t.l.info("Error code "+e),e==2){var c=null;t.h&&(c=null);var a=v1(t.pb,t);c||(c=new P4("//www.google.com/images/cleardot.gif"),e2.location&&e2.location.protocol=="http"||B8(c,"https"),kt(c)),U_(c.toString(),a)}else M1(2);t.H=0,t.h&&t.h.za(e),fl(t),nl(t)}I.pb=function(t){t?(this.l.info("Successfully pinged google.com"),M1(2)):(this.l.info("Failed to ping google.com"),M1(1))};function fl(t){if(t.H=0,t.ma=[],t.h){const e=Y9(t.i);(e.length!=0||t.j.length!=0)&&(Ws(t.ma,e),Ws(t.ma,t.j),t.i.i.length=0,Ba(t.j),t.j.length=0),t.h.ya()}}function ul(t,e,c){var a=c instanceof P4?x3(c):new P4(c);if(a.g!="")e&&(a.g=e+"."+a.g),U8(a,a.m);else{var n=e2.location;a=n.protocol,e=e?e+"."+n.hostname:n.hostname,n=+n.port;var r=new P4(null);a&&B8(r,a),e&&(r.g=e),n&&U8(r,n),c&&(r.l=c),a=r}return c=t.F,e=t.Da,c&&e&&k2(a,c,e),k2(a,"VER",t.ra),C0(t,a),a}function hl(t,e,c){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new U2(new It({ob:c})):new U2(t.va),e.Oa(t.J),e}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function dl(){}I=dl.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function q8(){if(S6&&!(10<=Number(i_)))throw Error("Environmental error: no available transport.")}q8.prototype.g=function(t,e){return new N1(t,e)};function N1(t,e){c1.call(this),this.g=new al(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ue(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ue(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new K6(this)}a1(N1,c1);N1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,c=this.h||void 0;M1(0),t.Y=e,t.na=c||{},t.G=t.aa,t.I=ul(t,null,t.Y),Ot(t)};N1.prototype.close=function(){nn(this.g)};N1.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var c={};c.__data__=t,t=c}else this.v&&(c={},c.__data__=Ka(t),t=c);e.j.push(new R_(e.fb++,t)),e.H==3&&Ot(e)};N1.prototype.N=function(){this.g.h=null,delete this.j,nn(this.g),delete this.g,N1.$.N.call(this)};function ml(t){Za.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const c in e){t=c;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}a1(ml,Za);function pl(){en.call(this),this.status=1}a1(pl,en);function K6(t){this.g=t}a1(K6,dl);K6.prototype.Ba=function(){o1(this.g,"a")};K6.prototype.Aa=function(t){o1(this.g,new ml(t))};K6.prototype.za=function(t){o1(this.g,new pl)};K6.prototype.ya=function(){o1(this.g,"b")};function Q_(){this.blockSize=-1}function Y1(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}a1(Y1,Q_);Y1.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Uc(t,e,c){c||(c=0);var a=Array(16);if(typeof e=="string")for(var n=0;16>n;++n)a[n]=e.charCodeAt(c++)|e.charCodeAt(c++)<<8|e.charCodeAt(c++)<<16|e.charCodeAt(c++)<<24;else for(n=0;16>n;++n)a[n]=e[c++]|e[c++]<<8|e[c++]<<16|e[c++]<<24;e=t.g[0],c=t.g[1],n=t.g[2];var r=t.g[3],s=e+(r^c&(n^r))+a[0]+3614090360&4294967295;e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[1]+3905402710&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[2]+606105819&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[3]+3250441966&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[4]+4118548399&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[5]+1200080426&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[6]+2821735955&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[7]+4249261313&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[8]+1770035416&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[9]+2336552879&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[10]+4294925233&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[11]+2304563134&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(r^c&(n^r))+a[12]+1804603682&4294967295,e=c+(s<<7&4294967295|s>>>25),s=r+(n^e&(c^n))+a[13]+4254626195&4294967295,r=e+(s<<12&4294967295|s>>>20),s=n+(c^r&(e^c))+a[14]+2792965006&4294967295,n=r+(s<<17&4294967295|s>>>15),s=c+(e^n&(r^e))+a[15]+1236535329&4294967295,c=n+(s<<22&4294967295|s>>>10),s=e+(n^r&(c^n))+a[1]+4129170786&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[6]+3225465664&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[11]+643717713&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[0]+3921069994&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[5]+3593408605&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[10]+38016083&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[15]+3634488961&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[4]+3889429448&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[9]+568446438&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[14]+3275163606&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[3]+4107603335&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[8]+1163531501&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(n^r&(c^n))+a[13]+2850285829&4294967295,e=c+(s<<5&4294967295|s>>>27),s=r+(c^n&(e^c))+a[2]+4243563512&4294967295,r=e+(s<<9&4294967295|s>>>23),s=n+(e^c&(r^e))+a[7]+1735328473&4294967295,n=r+(s<<14&4294967295|s>>>18),s=c+(r^e&(n^r))+a[12]+2368359562&4294967295,c=n+(s<<20&4294967295|s>>>12),s=e+(c^n^r)+a[5]+4294588738&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[8]+2272392833&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[11]+1839030562&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[14]+4259657740&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[1]+2763975236&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[4]+1272893353&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[7]+4139469664&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[10]+3200236656&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[13]+681279174&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[0]+3936430074&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[3]+3572445317&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[6]+76029189&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(c^n^r)+a[9]+3654602809&4294967295,e=c+(s<<4&4294967295|s>>>28),s=r+(e^c^n)+a[12]+3873151461&4294967295,r=e+(s<<11&4294967295|s>>>21),s=n+(r^e^c)+a[15]+530742520&4294967295,n=r+(s<<16&4294967295|s>>>16),s=c+(n^r^e)+a[2]+3299628645&4294967295,c=n+(s<<23&4294967295|s>>>9),s=e+(n^(c|~r))+a[0]+4096336452&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[7]+1126891415&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[14]+2878612391&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[5]+4237533241&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[12]+1700485571&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[3]+2399980690&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[10]+4293915773&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[1]+2240044497&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[8]+1873313359&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[15]+4264355552&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[6]+2734768916&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[13]+1309151649&4294967295,c=n+(s<<21&4294967295|s>>>11),s=e+(n^(c|~r))+a[4]+4149444226&4294967295,e=c+(s<<6&4294967295|s>>>26),s=r+(c^(e|~n))+a[11]+3174756917&4294967295,r=e+(s<<10&4294967295|s>>>22),s=n+(e^(r|~c))+a[2]+718787259&4294967295,n=r+(s<<15&4294967295|s>>>17),s=c+(r^(n|~e))+a[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(n+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+n&4294967295,t.g[3]=t.g[3]+r&4294967295}Y1.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var c=e-this.blockSize,a=this.m,n=this.h,r=0;r<e;){if(n==0)for(;r<=c;)Uc(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(a[n++]=t.charCodeAt(r++),n==this.blockSize){Uc(this,a),n=0;break}}else for(;r<e;)if(a[n++]=t[r++],n==this.blockSize){Uc(this,a),n=0;break}}this.h=n,this.i+=e};Y1.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var c=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=c&255,c/=256;for(this.j(t),t=Array(16),e=c=0;4>e;++e)for(var a=0;32>a;a+=8)t[c++]=this.g[e]>>>a&255;return t};function b2(t,e){this.h=e;for(var c=[],a=!0,n=t.length-1;0<=n;n--){var r=t[n]|0;a&&r==e||(c[n]=r,a=!1)}this.g=c}var Y_={};function on(t){return-128<=t&&128>t?n_(t,function(e){return new b2([e|0],0>e?-1:0)}):new b2([t|0],0>t?-1:0)}function s3(t){if(isNaN(t)||!isFinite(t))return V6;if(0>t)return s1(s3(-t));for(var e=[],c=1,a=0;t>=c;a++)e[a]=t/c|0,c*=k5;return new b2(e,0)}function vl(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return s1(vl(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=s3(Math.pow(e,8)),a=V6,n=0;n<t.length;n+=8){var r=Math.min(8,t.length-n),s=parseInt(t.substring(n,n+r),e);8>r?(r=s3(Math.pow(e,r)),a=a.R(r).add(s3(s))):(a=a.R(c),a=a.add(s3(s)))}return a}var k5=4294967296,V6=on(0),I5=on(1),a7=on(16777216);I=b2.prototype;I.ea=function(){if(k1(this))return-s1(this).ea();for(var t=0,e=1,c=0;c<this.g.length;c++){var a=this.D(c);t+=(0<=a?a:k5+a)*e,e*=k5}return t};I.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(M3(this))return"0";if(k1(this))return"-"+s1(this).toString(t);for(var e=s3(Math.pow(t,6)),c=this,a="";;){var n=W8(c,e).g;c=j8(c,n.R(e));var r=((0<c.g.length?c.g[0]:c.h)>>>0).toString(t);if(c=n,M3(c))return r+a;for(;6>r.length;)r="0"+r;a=r+a}};I.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function M3(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function k1(t){return t.h==-1}I.X=function(t){return t=j8(this,t),k1(t)?-1:M3(t)?0:1};function s1(t){for(var e=t.g.length,c=[],a=0;a<e;a++)c[a]=~t.g[a];return new b2(c,~t.h).add(I5)}I.abs=function(){return k1(this)?s1(this):this};I.add=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0,n=0;n<=e;n++){var r=a+(this.D(n)&65535)+(t.D(n)&65535),s=(r>>>16)+(this.D(n)>>>16)+(t.D(n)>>>16);a=s>>>16,r&=65535,s&=65535,c[n]=s<<16|r}return new b2(c,c[c.length-1]&-2147483648?-1:0)};function j8(t,e){return t.add(s1(e))}I.R=function(t){if(M3(this)||M3(t))return V6;if(k1(this))return k1(t)?s1(this).R(s1(t)):s1(s1(this).R(t));if(k1(t))return s1(this.R(s1(t)));if(0>this.X(a7)&&0>t.X(a7))return s3(this.ea()*t.ea());for(var e=this.g.length+t.g.length,c=[],a=0;a<2*e;a++)c[a]=0;for(a=0;a<this.g.length;a++)for(var n=0;n<t.g.length;n++){var r=this.D(a)>>>16,s=this.D(a)&65535,i=t.D(n)>>>16,o=t.D(n)&65535;c[2*a+2*n]+=s*o,c8(c,2*a+2*n),c[2*a+2*n+1]+=r*o,c8(c,2*a+2*n+1),c[2*a+2*n+1]+=s*i,c8(c,2*a+2*n+1),c[2*a+2*n+2]+=r*i,c8(c,2*a+2*n+2)}for(a=0;a<e;a++)c[a]=c[2*a+1]<<16|c[2*a];for(a=e;a<2*e;a++)c[a]=0;return new b2(c,0)};function c8(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function re(t,e){this.g=t,this.h=e}function W8(t,e){if(M3(e))throw Error("division by zero");if(M3(t))return new re(V6,V6);if(k1(t))return e=W8(s1(t),e),new re(s1(e.g),s1(e.h));if(k1(e))return e=W8(t,s1(e)),new re(s1(e.g),e.h);if(30<t.g.length){if(k1(t)||k1(e))throw Error("slowDivide_ only works with positive integers.");for(var c=I5,a=e;0>=a.X(t);)c=n7(c),a=n7(a);var n=s6(c,1),r=s6(a,1);for(a=s6(a,2),c=s6(c,2);!M3(a);){var s=r.add(a);0>=s.X(t)&&(n=n.add(c),r=s),a=s6(a,1),c=s6(c,1)}return e=j8(t,n.R(e)),new re(n,e)}for(n=V6;0<=t.X(e);){for(c=Math.max(1,Math.floor(t.ea()/e.ea())),a=Math.ceil(Math.log(c)/Math.LN2),a=48>=a?1:Math.pow(2,a-48),r=s3(c),s=r.R(e);k1(s)||0<s.X(t);)c-=a,r=s3(c),s=r.R(e);M3(r)&&(r=I5),n=n.add(r),t=j8(t,s)}return new re(n,t)}I.gb=function(t){return W8(this,t).h};I.and=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)&t.D(a);return new b2(c,this.h&t.h)};I.or=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)|t.D(a);return new b2(c,this.h|t.h)};I.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),c=[],a=0;a<e;a++)c[a]=this.D(a)^t.D(a);return new b2(c,this.h^t.h)};function n7(t){for(var e=t.g.length+1,c=[],a=0;a<e;a++)c[a]=t.D(a)<<1|t.D(a-1)>>>31;return new b2(c,t.h)}function s6(t,e){var c=e>>5;e%=32;for(var a=t.g.length-c,n=[],r=0;r<a;r++)n[r]=0<e?t.D(r+c)>>>e|t.D(r+c+1)<<32-e:t.D(r+c);return new b2(n,t.h)}q8.prototype.createWebChannel=q8.prototype.g;N1.prototype.send=N1.prototype.u;N1.prototype.open=N1.prototype.m;N1.prototype.close=N1.prototype.close;Tt.NO_ERROR=0;Tt.TIMEOUT=8;Tt.HTTP_ERROR=6;E9.COMPLETE="complete";k9.EventType=g0;g0.OPEN="a";g0.CLOSE="b";g0.ERROR="c";g0.MESSAGE="d";c1.prototype.listen=c1.prototype.O;U2.prototype.listenOnce=U2.prototype.P;U2.prototype.getLastError=U2.prototype.Sa;U2.prototype.getLastErrorCode=U2.prototype.Ia;U2.prototype.getStatus=U2.prototype.da;U2.prototype.getResponseJson=U2.prototype.Wa;U2.prototype.getResponseText=U2.prototype.ja;U2.prototype.send=U2.prototype.ha;U2.prototype.setWithCredentials=U2.prototype.Oa;Y1.prototype.digest=Y1.prototype.l;Y1.prototype.reset=Y1.prototype.reset;Y1.prototype.update=Y1.prototype.j;b2.prototype.add=b2.prototype.add;b2.prototype.multiply=b2.prototype.R;b2.prototype.modulo=b2.prototype.gb;b2.prototype.compare=b2.prototype.X;b2.prototype.toNumber=b2.prototype.ea;b2.prototype.toString=b2.prototype.toString;b2.prototype.getBits=b2.prototype.D;b2.fromNumber=s3;b2.fromString=vl;var X_=function(){return new q8},J_=function(){return At()},$c=Tt,Z_=E9,eL=Y4,r7={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},a8=k9,tL=U2,cL=Y1,z6=b2;const s7="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d1.UNAUTHENTICATED=new d1(null),d1.GOOGLE_CREDENTIALS=new d1("google-credentials-uid"),d1.FIRST_PARTY=new d1("first-party-uid"),d1.MOCK_USER=new d1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q6="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=new Ra("@firebase/firestore");function se(){return $4.logLevel}function U(t,...e){if($4.logLevel<=d2.DEBUG){const c=e.map(ln);$4.debug(`Firestore (${Q6}): ${t}`,...c)}}function S3(t,...e){if($4.logLevel<=d2.ERROR){const c=e.map(ln);$4.error(`Firestore (${Q6}): ${t}`,...c)}}function A6(t,...e){if($4.logLevel<=d2.WARN){const c=e.map(ln);$4.warn(`Firestore (${Q6}): ${t}`,...c)}}function ln(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(c){return JSON.stringify(c)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Q6}) INTERNAL ASSERTION FAILED: `+t;throw S3(e),new Error(e)}function A2(t,e){t||Z()}function s2(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends D3{constructor(e,c){super(e,c),this.code=e,this.message=c,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(){this.promise=new Promise((e,c)=>{this.resolve=e,this.reject=c})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,c){this.user=c,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,c){e.enqueueRetryable(()=>c(d1.UNAUTHENTICATED))}shutdown(){}}class nL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,c){this.changeListener=c,e.enqueueRetryable(()=>c(this.token.user))}shutdown(){this.changeListener=null}}class rL{constructor(e){this.t=e,this.currentUser=d1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,c){let a=this.i;const n=o=>this.i!==a?(a=this.i,c(o)):Promise.resolve();let r=new w3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new w3,e.enqueueRetryable(()=>n(this.currentUser))};const s=()=>{const o=r;e.enqueueRetryable(async()=>{await o.promise,await n(this.currentUser)})},i=o=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new w3)}},0),s()}getToken(){const e=this.i,c=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(c).then(a=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(A2(typeof a.accessToken=="string"),new gl(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return A2(e===null||typeof e=="string"),new d1(e)}}class sL{constructor(e,c,a){this.l=e,this.h=c,this.P=a,this.type="FirstParty",this.user=d1.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iL{constructor(e,c,a){this.l=e,this.h=c,this.P=a}getToken(){return Promise.resolve(new sL(this.l,this.h,this.P))}start(e,c){e.enqueueRetryable(()=>c(d1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,c){const a=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const s=r.token!==this.R;return this.R=r.token,U("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?c(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>a(r))};const n=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>n(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?n(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(c=>c?(A2(typeof c.token=="string"),this.R=c.token,new oL(c.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),c=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(c);else for(let a=0;a<t;a++)c[a]=Math.floor(256*Math.random());return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=Math.floor(256/e.length)*e.length;let a="";for(;a.length<20;){const n=fL(40);for(let r=0;r<n.length;++r)a.length<20&&n[r]<c&&(a+=e.charAt(n[r]%e.length))}return a}}function z2(t,e){return t<e?-1:t>e?1:0}function T6(t,e,c){return t.length===e.length&&t.every((a,n)=>c(a,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,c){if(this.seconds=e,this.nanoseconds=c,c<0)throw new B(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(c>=1e9)throw new B(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+c);if(e<-62135596800)throw new B(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Q2.fromMillis(Date.now())}static fromDate(e){return Q2.fromMillis(e.getTime())}static fromMillis(e){const c=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*c));return new Q2(c,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z2(this.nanoseconds,e.nanoseconds):z2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new c2(e)}static min(){return new c2(new Q2(0,0))}static max(){return new c2(new Q2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,c,a){c===void 0?c=0:c>e.length&&Z(),a===void 0?a=e.length-c:a>e.length-c&&Z(),this.segments=e,this.offset=c,this.len=a}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const c=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach(a=>{c.push(a)}):c.push(e),this.construct(c)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let c=0;c<this.length;c++)if(this.get(c)!==e.get(c))return!1;return!0}forEach(e){for(let c=this.offset,a=this.limit();c<a;c++)e(this.segments[c])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,c){const a=Math.min(e.length,c.length);for(let n=0;n<a;n++){const r=e.get(n),s=c.get(n);if(r<s)return-1;if(r>s)return 1}return e.length<c.length?-1:e.length>c.length?1:0}}class I2 extends Ye{construct(e,c,a){return new I2(e,c,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const c=[];for(const a of e){if(a.indexOf("//")>=0)throw new B(w.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);c.push(...a.split("/").filter(n=>n.length>0))}return new I2(c)}static emptyPath(){return new I2([])}}const uL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class i1 extends Ye{construct(e,c,a){return new i1(e,c,a)}static isValidIdentifier(e){return uL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),i1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new i1(["__name__"])}static fromServerFormat(e){const c=[];let a="",n=0;const r=()=>{if(a.length===0)throw new B(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);c.push(a),a=""};let s=!1;for(;n<e.length;){const i=e[n];if(i==="\\"){if(n+1===e.length)throw new B(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[n+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new B(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=o,n+=2}else i==="`"?(s=!s,n++):i!=="."||s?(a+=i,n++):(r(),n++)}if(r(),s)throw new B(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new i1(c)}static emptyPath(){return new i1([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(I2.fromString(e))}static fromName(e){return new G(I2.fromString(e).popFirst(5))}static empty(){return new G(I2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&I2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,c){return I2.comparator(e.path,c.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new I2(e.slice()))}}function hL(t,e){const c=t.toTimestamp().seconds,a=t.toTimestamp().nanoseconds+1,n=c2.fromTimestamp(a===1e9?new Q2(c+1,0):new Q2(c,a));return new o4(n,G.empty(),e)}function dL(t){return new o4(t.readTime,t.key,-1)}class o4{constructor(e,c,a){this.readTime=e,this.documentKey=c,this.largestBatchId=a}static min(){return new o4(c2.min(),G.empty(),-1)}static max(){return new o4(c2.max(),G.empty(),-1)}}function mL(t,e){let c=t.readTime.compareTo(e.readTime);return c!==0?c:(c=G.comparator(t.documentKey,e.documentKey),c!==0?c:z2(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==pL)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(c=>{this.isDone=!0,this.result=c,this.nextCallback&&this.nextCallback(c)},c=>{this.isDone=!0,this.error=c,this.catchCallback&&this.catchCallback(c)})}catch(e){return this.next(void 0,e)}next(e,c){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(c,this.error):this.wrapSuccess(e,this.result):new x((a,n)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(a,n)},this.catchCallback=r=>{this.wrapFailure(c,r).next(a,n)}})}toPromise(){return new Promise((e,c)=>{this.next(e,c)})}wrapUserFunction(e){try{const c=e();return c instanceof x?c:x.resolve(c)}catch(c){return x.reject(c)}}wrapSuccess(e,c){return e?this.wrapUserFunction(()=>e(c)):x.resolve(c)}wrapFailure(e,c){return e?this.wrapUserFunction(()=>e(c)):x.reject(c)}static resolve(e){return new x((c,a)=>{c(e)})}static reject(e){return new x((c,a)=>{a(e)})}static waitFor(e){return new x((c,a)=>{let n=0,r=0,s=!1;e.forEach(i=>{++n,i.next(()=>{++r,s&&r===n&&c()},o=>a(o))}),s=!0,r===n&&c()})}static or(e){let c=x.resolve(!1);for(const a of e)c=c.next(n=>n?x.resolve(n):a());return c}static forEach(e,c){const a=[];return e.forEach((n,r)=>{a.push(c.call(this,n,r))}),this.waitFor(a)}static mapArray(e,c){return new x((a,n)=>{const r=e.length,s=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;c(e[l]).next(f=>{s[l]=f,++i,i===r&&a(s)},f=>n(f))}})}static doWhile(e,c){return new x((a,n)=>{const r=()=>{e()===!0?c().next(()=>{r()},n):a()};r()})}}function y0(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,c){this.previousValue=e,c&&(c.sequenceNumberHandler=a=>this.se(a),this.oe=a=>c.writeSequenceNumber(a))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}fn._e=-1;function Ft(t){return t==null}function G8(t){return t===0&&1/t==-1/0}function gL(t){return typeof t=="number"&&Number.isInteger(t)&&!G8(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(t){let e=0;for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e++;return e}function Y6(t,e){for(const c in t)Object.prototype.hasOwnProperty.call(t,c)&&e(c,t[c])}function Vl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,c){this.comparator=e,this.root=c||r1.EMPTY}insert(e,c){return new O2(this.comparator,this.root.insert(e,c,this.comparator).copy(null,null,r1.BLACK,null,null))}remove(e){return new O2(this.comparator,this.root.remove(e,this.comparator).copy(null,null,r1.BLACK,null,null))}get(e){let c=this.root;for(;!c.isEmpty();){const a=this.comparator(e,c.key);if(a===0)return c.value;a<0?c=c.left:a>0&&(c=c.right)}return null}indexOf(e){let c=0,a=this.root;for(;!a.isEmpty();){const n=this.comparator(e,a.key);if(n===0)return c+a.left.size;n<0?a=a.left:(c+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((c,a)=>(e(c,a),!1))}toString(){const e=[];return this.inorderTraversal((c,a)=>(e.push(`${c}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new n8(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new n8(this.root,e,this.comparator,!1)}getReverseIterator(){return new n8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new n8(this.root,e,this.comparator,!0)}}class n8{constructor(e,c,a,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=c?a(e.key,c):1,c&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const c={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return c}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class r1{constructor(e,c,a,n,r){this.key=e,this.value=c,this.color=a??r1.RED,this.left=n??r1.EMPTY,this.right=r??r1.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,c,a,n,r){return new r1(e??this.key,c??this.value,a??this.color,n??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,c,a){let n=this;const r=a(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,c,a),null):r===0?n.copy(null,c,null,null,null):n.copy(null,null,null,null,n.right.insert(e,c,a)),n.fixUp()}removeMin(){if(this.left.isEmpty())return r1.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,c){let a,n=this;if(c(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,c),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),c(e,n.key)===0){if(n.right.isEmpty())return r1.EMPTY;a=n.right.min(),n=n.copy(a.key,a.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,c))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,r1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,r1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),c=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,c)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}r1.EMPTY=null,r1.RED=!0,r1.BLACK=!1;r1.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,c,a,n,r){return this}insert(e,c,a){return new r1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.comparator=e,this.data=new O2(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((c,a)=>(e(c),!1))}forEachInRange(e,c){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const n=a.getNext();if(this.comparator(n.key,e[1])>=0)return;c(n.key)}}forEachWhile(e,c){let a;for(a=c!==void 0?this.data.getIteratorFrom(c):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const c=this.data.getIteratorFrom(e);return c.hasNext()?c.getNext().key:null}getIterator(){return new o7(this.data.getIterator())}getIteratorFrom(e){return new o7(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let c=this;return c.size<e.size&&(c=e,e=this),e.forEach(a=>{c=c.add(a)}),c}isEqual(e){if(!(e instanceof l1)||this.size!==e.size)return!1;const c=this.data.getIterator(),a=e.data.getIterator();for(;c.hasNext();){const n=c.getNext().key,r=a.getNext().key;if(this.comparator(n,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(c=>{e.push(c)}),e}toString(){const e=[];return this.forEach(c=>e.push(c)),"SortedSet("+e.toString()+")"}copy(e){const c=new l1(this.comparator);return c.data=e,c}}class o7{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.fields=e,e.sort(i1.comparator)}static empty(){return new $1([])}unionWith(e){let c=new l1(i1.comparator);for(const a of this.fields)c=c.add(a);for(const a of e)c=c.add(a);return new $1(c.toArray())}covers(e){for(const c of this.fields)if(c.isPrefixOf(e))return!0;return!1}isEqual(e){return T6(this.fields,e.fields,(c,a)=>c.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.binaryString=e}static fromBase64String(e){const c=function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new zl("Invalid base64 string: "+r):r}}(e);return new V1(c)}static fromUint8Array(e){const c=function(n){let r="";for(let s=0;s<n.length;++s)r+=String.fromCharCode(n[s]);return r}(e);return new V1(c)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(c){return btoa(c)}(this.binaryString)}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let n=0;n<c.length;n++)a[n]=c.charCodeAt(n);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}V1.EMPTY_BYTE_STRING=new V1("");const HL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function l4(t){if(A2(!!t),typeof t=="string"){let e=0;const c=HL.exec(t);if(A2(!!c),c[1]){let n=c[1];n=(n+"000000000").substr(0,9),e=Number(n)}const a=new Date(t);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:W2(t.seconds),nanos:W2(t.nanos)}}function W2(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function q4(t){return typeof t=="string"?V1.fromBase64String(t):V1.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){var e,c;return((c=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||c===void 0?void 0:c.stringValue)==="server_timestamp"}function hn(t){const e=t.mapValue.fields.__previous_value__;return un(e)?hn(e):e}function Xe(t){const e=l4(t.mapValue.fields.__local_write_time__.timestampValue);return new Q2(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,c,a,n,r,s,i,o,l){this.databaseId=e,this.appId=c,this.persistenceKey=a,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=i,this.longPollingOptions=o,this.useFetchStreams=l}}class Je{constructor(e,c){this.projectId=e,this.database=c||"(default)"}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Je&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function j4(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?un(t)?4:zL(t)?9007199254740991:10:Z()}function p3(t,e){if(t===e)return!0;const c=j4(t);if(c!==j4(e))return!1;switch(c){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xe(t).isEqual(Xe(e));case 3:return function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const s=l4(n.timestampValue),i=l4(r.timestampValue);return s.seconds===i.seconds&&s.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(n,r){return q4(n.bytesValue).isEqual(q4(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(n,r){return W2(n.geoPointValue.latitude)===W2(r.geoPointValue.latitude)&&W2(n.geoPointValue.longitude)===W2(r.geoPointValue.longitude)}(t,e);case 2:return function(n,r){if("integerValue"in n&&"integerValue"in r)return W2(n.integerValue)===W2(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const s=W2(n.doubleValue),i=W2(r.doubleValue);return s===i?G8(s)===G8(i):isNaN(s)&&isNaN(i)}return!1}(t,e);case 9:return T6(t.arrayValue.values||[],e.arrayValue.values||[],p3);case 10:return function(n,r){const s=n.mapValue.fields||{},i=r.mapValue.fields||{};if(i7(s)!==i7(i))return!1;for(const o in s)if(s.hasOwnProperty(o)&&(i[o]===void 0||!p3(s[o],i[o])))return!1;return!0}(t,e);default:return Z()}}function Ze(t,e){return(t.values||[]).find(c=>p3(c,e))!==void 0}function N6(t,e){if(t===e)return 0;const c=j4(t),a=j4(e);if(c!==a)return z2(c,a);switch(c){case 0:case 9007199254740991:return 0;case 1:return z2(t.booleanValue,e.booleanValue);case 2:return function(r,s){const i=W2(r.integerValue||r.doubleValue),o=W2(s.integerValue||s.doubleValue);return i<o?-1:i>o?1:i===o?0:isNaN(i)?isNaN(o)?0:-1:1}(t,e);case 3:return l7(t.timestampValue,e.timestampValue);case 4:return l7(Xe(t),Xe(e));case 5:return z2(t.stringValue,e.stringValue);case 6:return function(r,s){const i=q4(r),o=q4(s);return i.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const i=r.split("/"),o=s.split("/");for(let l=0;l<i.length&&l<o.length;l++){const f=z2(i[l],o[l]);if(f!==0)return f}return z2(i.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const i=z2(W2(r.latitude),W2(s.latitude));return i!==0?i:z2(W2(r.longitude),W2(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const i=r.values||[],o=s.values||[];for(let l=0;l<i.length&&l<o.length;++l){const f=N6(i[l],o[l]);if(f)return f}return z2(i.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===r8.mapValue&&s===r8.mapValue)return 0;if(r===r8.mapValue)return 1;if(s===r8.mapValue)return-1;const i=r.fields||{},o=Object.keys(i),l=s.fields||{},f=Object.keys(l);o.sort(),f.sort();for(let u=0;u<o.length&&u<f.length;++u){const h=z2(o[u],f[u]);if(h!==0)return h;const d=N6(i[o[u]],l[f[u]]);if(d!==0)return d}return z2(o.length,f.length)}(t.mapValue,e.mapValue);default:throw Z()}}function l7(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z2(t,e);const c=l4(t),a=l4(e),n=z2(c.seconds,a.seconds);return n!==0?n:z2(c.nanos,a.nanos)}function E6(t){return P5(t)}function P5(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(c){const a=l4(c);return`time(${a.seconds},${a.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(c){return q4(c).toBase64()}(t.bytesValue):"referenceValue"in t?function(c){return G.fromName(c).toString()}(t.referenceValue):"geoPointValue"in t?function(c){return`geo(${c.latitude},${c.longitude})`}(t.geoPointValue):"arrayValue"in t?function(c){let a="[",n=!0;for(const r of c.values||[])n?n=!1:a+=",",a+=P5(r);return a+"]"}(t.arrayValue):"mapValue"in t?function(c){const a=Object.keys(c.fields||{}).sort();let n="{",r=!0;for(const s of a)r?r=!1:n+=",",n+=`${s}:${P5(c.fields[s])}`;return n+"}"}(t.mapValue):Z()}function f7(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function R5(t){return!!t&&"integerValue"in t}function dn(t){return!!t&&"arrayValue"in t}function u7(t){return!!t&&"nullValue"in t}function h7(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function C8(t){return!!t&&"mapValue"in t}function ye(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Y6(t.mapValue.fields,(c,a)=>e.mapValue.fields[c]=ye(a)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let c=0;c<(t.arrayValue.values||[]).length;++c)e.arrayValue.values[c]=ye(t.arrayValue.values[c]);return e}return Object.assign({},t)}function zL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.value=e}static empty(){return new I1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let c=this.value;for(let a=0;a<e.length-1;++a)if(c=(c.mapValue.fields||{})[e.get(a)],!C8(c))return null;return c=(c.mapValue.fields||{})[e.lastSegment()],c||null}}set(e,c){this.getFieldsMap(e.popLast())[e.lastSegment()]=ye(c)}setAll(e){let c=i1.emptyPath(),a={},n=[];e.forEach((s,i)=>{if(!c.isImmediateParentOf(i)){const o=this.getFieldsMap(c);this.applyChanges(o,a,n),a={},n=[],c=i.popLast()}s?a[i.lastSegment()]=ye(s):n.push(i.lastSegment())});const r=this.getFieldsMap(c);this.applyChanges(r,a,n)}delete(e){const c=this.field(e.popLast());C8(c)&&c.mapValue.fields&&delete c.mapValue.fields[e.lastSegment()]}isEqual(e){return p3(this.value,e.value)}getFieldsMap(e){let c=this.value;c.mapValue.fields||(c.mapValue={fields:{}});for(let a=0;a<e.length;++a){let n=c.mapValue.fields[e.get(a)];C8(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},c.mapValue.fields[e.get(a)]=n),c=n}return c.mapValue.fields}applyChanges(e,c,a){Y6(c,(n,r)=>e[n]=r);for(const n of a)delete e[n]}clone(){return new I1(ye(this.value))}}function Cl(t){const e=[];return Y6(t.fields,(c,a)=>{const n=new i1([c]);if(C8(a)){const r=Cl(a.mapValue).fields;if(r.length===0)e.push(n);else for(const s of r)e.push(n.child(s))}else e.push(n)}),new $1(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,c,a,n,r,s,i){this.key=e,this.documentType=c,this.version=a,this.readTime=n,this.createTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new m1(e,0,c2.min(),c2.min(),c2.min(),I1.empty(),0)}static newFoundDocument(e,c,a,n){return new m1(e,1,c,c2.min(),a,n,0)}static newNoDocument(e,c){return new m1(e,2,c,c2.min(),c2.min(),I1.empty(),0)}static newUnknownDocument(e,c){return new m1(e,3,c,c2.min(),c2.min(),I1.empty(),2)}convertToFoundDocument(e,c){return!this.createTime.isEqual(c2.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=c,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=I1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=I1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=c2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof m1&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new m1(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K8{constructor(e,c){this.position=e,this.inclusive=c}}function d7(t,e,c){let a=0;for(let n=0;n<t.position.length;n++){const r=e[n],s=t.position[n];if(r.field.isKeyField()?a=G.comparator(G.fromName(s.referenceValue),c.key):a=N6(s,c.data.field(r.field)),r.dir==="desc"&&(a*=-1),a!==0)break}return a}function m7(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let c=0;c<t.position.length;c++)if(!p3(t.position[c],e.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q8{constructor(e,c="asc"){this.field=e,this.dir=c}}function CL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{}class G2 extends Ml{constructor(e,c,a){super(),this.field=e,this.op=c,this.value=a}static create(e,c,a){return e.isKeyField()?c==="in"||c==="not-in"?this.createKeyFieldInFilter(e,c,a):new yL(e,c,a):c==="array-contains"?new wL(e,a):c==="in"?new bL(e,a):c==="not-in"?new xL(e,a):c==="array-contains-any"?new SL(e,a):new G2(e,c,a)}static createKeyFieldInFilter(e,c,a){return c==="in"?new _L(e,a):new LL(e,a)}matches(e){const c=e.data.field(this.field);return this.op==="!="?c!==null&&this.matchesComparison(N6(c,this.value)):c!==null&&j4(this.value)===j4(c)&&this.matchesComparison(N6(c,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X1 extends Ml{constructor(e,c){super(),this.filters=e,this.op=c,this.ue=null}static create(e,c){return new X1(e,c)}matches(e){return yl(this)?this.filters.find(c=>!c.matches(e))===void 0:this.filters.find(c=>c.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,c)=>e.concat(c.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function yl(t){return t.op==="and"}function _l(t){return ML(t)&&yl(t)}function ML(t){for(const e of t.filters)if(e instanceof X1)return!1;return!0}function D5(t){if(t instanceof G2)return t.field.canonicalString()+t.op.toString()+E6(t.value);if(_l(t))return t.filters.map(e=>D5(e)).join(",");{const e=t.filters.map(c=>D5(c)).join(",");return`${t.op}(${e})`}}function Ll(t,e){return t instanceof G2?function(a,n){return n instanceof G2&&a.op===n.op&&a.field.isEqual(n.field)&&p3(a.value,n.value)}(t,e):t instanceof X1?function(a,n){return n instanceof X1&&a.op===n.op&&a.filters.length===n.filters.length?a.filters.reduce((r,s,i)=>r&&Ll(s,n.filters[i]),!0):!1}(t,e):void Z()}function wl(t){return t instanceof G2?function(c){return`${c.field.canonicalString()} ${c.op} ${E6(c.value)}`}(t):t instanceof X1?function(c){return c.op.toString()+" {"+c.getFilters().map(wl).join(" ,")+"}"}(t):"Filter"}class yL extends G2{constructor(e,c,a){super(e,c,a),this.key=G.fromName(a.referenceValue)}matches(e){const c=G.comparator(e.key,this.key);return this.matchesComparison(c)}}class _L extends G2{constructor(e,c){super(e,"in",c),this.keys=bl("in",c)}matches(e){return this.keys.some(c=>c.isEqual(e.key))}}class LL extends G2{constructor(e,c){super(e,"not-in",c),this.keys=bl("not-in",c)}matches(e){return!this.keys.some(c=>c.isEqual(e.key))}}function bl(t,e){var c;return(((c=e.arrayValue)===null||c===void 0?void 0:c.values)||[]).map(a=>G.fromName(a.referenceValue))}class wL extends G2{constructor(e,c){super(e,"array-contains",c)}matches(e){const c=e.data.field(this.field);return dn(c)&&Ze(c.arrayValue,this.value)}}class bL extends G2{constructor(e,c){super(e,"in",c)}matches(e){const c=e.data.field(this.field);return c!==null&&Ze(this.value.arrayValue,c)}}class xL extends G2{constructor(e,c){super(e,"not-in",c)}matches(e){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const c=e.data.field(this.field);return c!==null&&!Ze(this.value.arrayValue,c)}}class SL extends G2{constructor(e,c){super(e,"array-contains-any",c)}matches(e){const c=e.data.field(this.field);return!(!dn(c)||!c.arrayValue.values)&&c.arrayValue.values.some(a=>Ze(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(e,c=null,a=[],n=[],r=null,s=null,i=null){this.path=e,this.collectionGroup=c,this.orderBy=a,this.filters=n,this.limit=r,this.startAt=s,this.endAt=i,this.ce=null}}function p7(t,e=null,c=[],a=[],n=null,r=null,s=null){return new AL(t,e,c,a,n,r,s)}function mn(t){const e=s2(t);if(e.ce===null){let c=e.path.canonicalString();e.collectionGroup!==null&&(c+="|cg:"+e.collectionGroup),c+="|f:",c+=e.filters.map(a=>D5(a)).join(","),c+="|ob:",c+=e.orderBy.map(a=>function(r){return r.field.canonicalString()+r.dir}(a)).join(","),Ft(e.limit)||(c+="|l:",c+=e.limit),e.startAt&&(c+="|lb:",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>E6(a)).join(",")),e.endAt&&(c+="|ub:",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>E6(a)).join(",")),e.ce=c}return e.ce}function pn(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let c=0;c<t.orderBy.length;c++)if(!CL(t.orderBy[c],e.orderBy[c]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let c=0;c<t.filters.length;c++)if(!Ll(t.filters[c],e.filters[c]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m7(t.startAt,e.startAt)&&m7(t.endAt,e.endAt)}function O5(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,c=null,a=[],n=[],r=null,s="F",i=null,o=null){this.path=e,this.collectionGroup=c,this.explicitOrderBy=a,this.filters=n,this.limit=r,this.limitType=s,this.startAt=i,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function TL(t,e,c,a,n,r,s,i){return new _0(t,e,c,a,n,r,s,i)}function vn(t){return new _0(t)}function v7(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xl(t){return t.collectionGroup!==null}function _e(t){const e=s2(t);if(e.le===null){e.le=[];const c=new Set;for(const r of e.explicitOrderBy)e.le.push(r),c.add(r.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let i=new l1(i1.comparator);return s.filters.forEach(o=>{o.getFlattenedFilters().forEach(l=>{l.isInequality()&&(i=i.add(l.field))})}),i})(e).forEach(r=>{c.has(r.canonicalString())||r.isKeyField()||e.le.push(new Q8(r,a))}),c.has(i1.keyField().canonicalString())||e.le.push(new Q8(i1.keyField(),a))}return e.le}function o3(t){const e=s2(t);return e.he||(e.he=NL(e,_e(t))),e.he}function NL(t,e){if(t.limitType==="F")return p7(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(n=>{const r=n.dir==="desc"?"asc":"desc";return new Q8(n.field,r)});const c=t.endAt?new K8(t.endAt.position,t.endAt.inclusive):null,a=t.startAt?new K8(t.startAt.position,t.startAt.inclusive):null;return p7(t.path,t.collectionGroup,e,t.filters,t.limit,c,a)}}function F5(t,e){const c=t.filters.concat([e]);return new _0(t.path,t.collectionGroup,t.explicitOrderBy.slice(),c,t.limit,t.limitType,t.startAt,t.endAt)}function B5(t,e,c){return new _0(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,c,t.startAt,t.endAt)}function Bt(t,e){return pn(o3(t),o3(e))&&t.limitType===e.limitType}function Sl(t){return`${mn(o3(t))}|lt:${t.limitType}`}function i6(t){return`Query(target=${function(c){let a=c.path.canonicalString();return c.collectionGroup!==null&&(a+=" collectionGroup="+c.collectionGroup),c.filters.length>0&&(a+=`, filters: [${c.filters.map(n=>wl(n)).join(", ")}]`),Ft(c.limit)||(a+=", limit: "+c.limit),c.orderBy.length>0&&(a+=`, orderBy: [${c.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),c.startAt&&(a+=", startAt: ",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(n=>E6(n)).join(",")),c.endAt&&(a+=", endAt: ",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(n=>E6(n)).join(",")),`Target(${a})`}(o3(t))}; limitType=${t.limitType})`}function Ut(t,e){return e.isFoundDocument()&&function(a,n){const r=n.key.path;return a.collectionGroup!==null?n.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(r):G.isDocumentKey(a.path)?a.path.isEqual(r):a.path.isImmediateParentOf(r)}(t,e)&&function(a,n){for(const r of _e(a))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0}(t,e)&&function(a,n){for(const r of a.filters)if(!r.matches(n))return!1;return!0}(t,e)&&function(a,n){return!(a.startAt&&!function(s,i,o){const l=d7(s,i,o);return s.inclusive?l<=0:l<0}(a.startAt,_e(a),n)||a.endAt&&!function(s,i,o){const l=d7(s,i,o);return s.inclusive?l>=0:l>0}(a.endAt,_e(a),n))}(t,e)}function EL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Al(t){return(e,c)=>{let a=!1;for(const n of _e(t)){const r=kL(n,e,c);if(r!==0)return r;a=a||n.field.isKeyField()}return 0}}function kL(t,e,c){const a=t.field.isKeyField()?G.comparator(e.key,c.key):function(r,s,i){const o=s.data.field(r),l=i.data.field(r);return o!==null&&l!==null?N6(o,l):Z()}(t.field,e,c);switch(t.dir){case"asc":return a;case"desc":return-1*a;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X6{constructor(e,c){this.mapKeyFn=e,this.equalsFn=c,this.inner={},this.innerSize=0}get(e){const c=this.mapKeyFn(e),a=this.inner[c];if(a!==void 0){for(const[n,r]of a)if(this.equalsFn(n,e))return r}}has(e){return this.get(e)!==void 0}set(e,c){const a=this.mapKeyFn(e),n=this.inner[a];if(n===void 0)return this.inner[a]=[[e,c]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,c]);n.push([e,c]),this.innerSize++}delete(e){const c=this.mapKeyFn(e),a=this.inner[c];if(a===void 0)return!1;for(let n=0;n<a.length;n++)if(this.equalsFn(a[n][0],e))return a.length===1?delete this.inner[c]:a.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Y6(this.inner,(c,a)=>{for(const[n,r]of a)e(n,r)})}isEmpty(){return Vl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=new O2(G.comparator);function A3(){return IL}const Tl=new O2(G.comparator);function me(...t){let e=Tl;for(const c of t)e=e.insert(c.key,c);return e}function Nl(t){let e=Tl;return t.forEach((c,a)=>e=e.insert(c,a.overlayedDocument)),e}function T4(){return Le()}function El(){return Le()}function Le(){return new X6(t=>t.toString(),(t,e)=>t.isEqual(e))}const PL=new O2(G.comparator),RL=new l1(G.comparator);function h2(...t){let e=RL;for(const c of t)e=e.add(c);return e}const DL=new l1(z2);function OL(){return DL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:G8(e)?"-0":e}}function Il(t){return{integerValue:""+t}}function FL(t,e){return gL(e)?Il(e):kl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this._=void 0}}function BL(t,e,c){return t instanceof Y8?function(n,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&un(r)&&(r=hn(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(c,e):t instanceof e0?Rl(t,e):t instanceof t0?Dl(t,e):function(n,r){const s=Pl(n,r),i=g7(s)+g7(n.Ie);return R5(s)&&R5(n.Ie)?Il(i):kl(n.serializer,i)}(t,e)}function UL(t,e,c){return t instanceof e0?Rl(t,e):t instanceof t0?Dl(t,e):c}function Pl(t,e){return t instanceof X8?function(a){return R5(a)||function(r){return!!r&&"doubleValue"in r}(a)}(e)?e:{integerValue:0}:null}class Y8 extends $t{}class e0 extends $t{constructor(e){super(),this.elements=e}}function Rl(t,e){const c=Ol(e);for(const a of t.elements)c.some(n=>p3(n,a))||c.push(a);return{arrayValue:{values:c}}}class t0 extends $t{constructor(e){super(),this.elements=e}}function Dl(t,e){let c=Ol(e);for(const a of t.elements)c=c.filter(n=>!p3(n,a));return{arrayValue:{values:c}}}class X8 extends $t{constructor(e,c){super(),this.serializer=e,this.Ie=c}}function g7(t){return W2(t.integerValue||t.doubleValue)}function Ol(t){return dn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $L(t,e){return t.field.isEqual(e.field)&&function(a,n){return a instanceof e0&&n instanceof e0||a instanceof t0&&n instanceof t0?T6(a.elements,n.elements,p3):a instanceof X8&&n instanceof X8?p3(a.Ie,n.Ie):a instanceof Y8&&n instanceof Y8}(t.transform,e.transform)}class qL{constructor(e,c){this.version=e,this.transformResults=c}}class l3{constructor(e,c){this.updateTime=e,this.exists=c}static none(){return new l3}static exists(e){return new l3(void 0,e)}static updateTime(e){return new l3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function M8(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qt{}function Fl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gn(t.key,l3.none()):new L0(t.key,t.data,l3.none());{const c=t.data,a=I1.empty();let n=new l1(i1.comparator);for(let r of e.fields)if(!n.has(r)){let s=c.field(r);s===null&&r.length>1&&(r=r.popLast(),s=c.field(r)),s===null?a.delete(r):a.set(r,s),n=n.add(r)}return new X4(t.key,a,new $1(n.toArray()),l3.none())}}function jL(t,e,c){t instanceof L0?function(n,r,s){const i=n.value.clone(),o=V7(n.fieldTransforms,r,s.transformResults);i.setAll(o),r.convertToFoundDocument(s.version,i).setHasCommittedMutations()}(t,e,c):t instanceof X4?function(n,r,s){if(!M8(n.precondition,r))return void r.convertToUnknownDocument(s.version);const i=V7(n.fieldTransforms,r,s.transformResults),o=r.data;o.setAll(Bl(n)),o.setAll(i),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,c):function(n,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,c)}function we(t,e,c,a){return t instanceof L0?function(r,s,i,o){if(!M8(r.precondition,s))return i;const l=r.value.clone(),f=z7(r.fieldTransforms,o,s);return l.setAll(f),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,c,a):t instanceof X4?function(r,s,i,o){if(!M8(r.precondition,s))return i;const l=z7(r.fieldTransforms,o,s),f=s.data;return f.setAll(Bl(r)),f.setAll(l),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),i===null?null:i.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,c,a):function(r,s,i){return M8(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i}(t,e,c)}function WL(t,e){let c=null;for(const a of t.fieldTransforms){const n=e.data.field(a.field),r=Pl(a.transform,n||null);r!=null&&(c===null&&(c=I1.empty()),c.set(a.field,r))}return c||null}function H7(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(a,n){return a===void 0&&n===void 0||!(!a||!n)&&T6(a,n,(r,s)=>$L(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class L0 extends qt{constructor(e,c,a,n=[]){super(),this.key=e,this.value=c,this.precondition=a,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class X4 extends qt{constructor(e,c,a,n,r=[]){super(),this.key=e,this.data=c,this.fieldMask=a,this.precondition=n,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Bl(t){const e=new Map;return t.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){const a=t.data.field(c);e.set(c,a)}}),e}function V7(t,e,c){const a=new Map;A2(t.length===c.length);for(let n=0;n<c.length;n++){const r=t[n],s=r.transform,i=e.data.field(r.field);a.set(r.field,UL(s,i,c[n]))}return a}function z7(t,e,c){const a=new Map;for(const n of t){const r=n.transform,s=c.data.field(n.field);a.set(n.field,BL(r,s,e))}return a}class gn extends qt{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GL extends qt{constructor(e,c){super(),this.key=e,this.precondition=c,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,c,a,n){this.batchId=e,this.localWriteTime=c,this.baseMutations=a,this.mutations=n}applyToRemoteDocument(e,c){const a=c.mutationResults;for(let n=0;n<this.mutations.length;n++){const r=this.mutations[n];r.key.isEqual(e.key)&&jL(r,e,a[n])}}applyToLocalView(e,c){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(c=we(a,e,c,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(c=we(a,e,c,this.localWriteTime));return c}applyToLocalDocumentSet(e,c){const a=El();return this.mutations.forEach(n=>{const r=e.get(n.key),s=r.overlayedDocument;let i=this.applyToLocalView(s,r.mutatedFields);i=c.has(n.key)?null:i;const o=Fl(s,i);o!==null&&a.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(c2.min())}),a}keys(){return this.mutations.reduce((e,c)=>e.add(c.key),h2())}isEqual(e){return this.batchId===e.batchId&&T6(this.mutations,e.mutations,(c,a)=>H7(c,a))&&T6(this.baseMutations,e.baseMutations,(c,a)=>H7(c,a))}}class Hn{constructor(e,c,a,n){this.batch=e,this.commitVersion=c,this.mutationResults=a,this.docVersions=n}static from(e,c,a){A2(e.mutations.length===a.length);let n=function(){return PL}();const r=e.mutations;for(let s=0;s<r.length;s++)n=n.insert(r[s].key,a[s].version);return new Hn(e,c,a,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,c){this.largestBatchId=e,this.mutation=c}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,c){this.count=e,this.unchangedNames=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j2,m2;function XL(t){switch(t){default:return Z();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Ul(t){if(t===void 0)return S3("GRPC error has no .code"),w.UNKNOWN;switch(t){case j2.OK:return w.OK;case j2.CANCELLED:return w.CANCELLED;case j2.UNKNOWN:return w.UNKNOWN;case j2.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case j2.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case j2.INTERNAL:return w.INTERNAL;case j2.UNAVAILABLE:return w.UNAVAILABLE;case j2.UNAUTHENTICATED:return w.UNAUTHENTICATED;case j2.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case j2.NOT_FOUND:return w.NOT_FOUND;case j2.ALREADY_EXISTS:return w.ALREADY_EXISTS;case j2.PERMISSION_DENIED:return w.PERMISSION_DENIED;case j2.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case j2.ABORTED:return w.ABORTED;case j2.OUT_OF_RANGE:return w.OUT_OF_RANGE;case j2.UNIMPLEMENTED:return w.UNIMPLEMENTED;case j2.DATA_LOSS:return w.DATA_LOSS;default:return Z()}}(m2=j2||(j2={}))[m2.OK=0]="OK",m2[m2.CANCELLED=1]="CANCELLED",m2[m2.UNKNOWN=2]="UNKNOWN",m2[m2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m2[m2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m2[m2.NOT_FOUND=5]="NOT_FOUND",m2[m2.ALREADY_EXISTS=6]="ALREADY_EXISTS",m2[m2.PERMISSION_DENIED=7]="PERMISSION_DENIED",m2[m2.UNAUTHENTICATED=16]="UNAUTHENTICATED",m2[m2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m2[m2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m2[m2.ABORTED=10]="ABORTED",m2[m2.OUT_OF_RANGE=11]="OUT_OF_RANGE",m2[m2.UNIMPLEMENTED=12]="UNIMPLEMENTED",m2[m2.INTERNAL=13]="INTERNAL",m2[m2.UNAVAILABLE=14]="UNAVAILABLE",m2[m2.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=new z6([4294967295,4294967295],0);function C7(t){const e=JL().encode(t),c=new cL;return c.update(e),new Uint8Array(c.digest())}function M7(t){const e=new DataView(t.buffer),c=e.getUint32(0,!0),a=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new z6([c,a],0),new z6([n,r],0)]}class Vn{constructor(e,c,a){if(this.bitmap=e,this.padding=c,this.hashCount=a,c<0||c>=8)throw new pe(`Invalid padding: ${c}`);if(a<0)throw new pe(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new pe(`Invalid hash count: ${a}`);if(e.length===0&&c!==0)throw new pe(`Invalid padding when bitmap length is 0: ${c}`);this.Te=8*e.length-c,this.Ee=z6.fromNumber(this.Te)}de(e,c,a){let n=e.add(c.multiply(z6.fromNumber(a)));return n.compare(ZL)===1&&(n=new z6([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const c=C7(e),[a,n]=M7(c);for(let r=0;r<this.hashCount;r++){const s=this.de(a,n,r);if(!this.Ae(s))return!1}return!0}static create(e,c,a){const n=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new Vn(r,n,c);return a.forEach(i=>s.insert(i)),s}insert(e){if(this.Te===0)return;const c=C7(e),[a,n]=M7(c);for(let r=0;r<this.hashCount;r++){const s=this.de(a,n,r);this.Re(s)}}Re(e){const c=Math.floor(e/8),a=e%8;this.bitmap[c]|=1<<a}}class pe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,c,a,n,r){this.snapshotVersion=e,this.targetChanges=c,this.targetMismatches=a,this.documentUpdates=n,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,c,a){const n=new Map;return n.set(e,w0.createSynthesizedTargetChangeForCurrentChange(e,c,a)),new jt(c2.min(),n,new O2(z2),A3(),h2())}}class w0{constructor(e,c,a,n,r){this.resumeToken=e,this.current=c,this.addedDocuments=a,this.modifiedDocuments=n,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,c,a){return new w0(a,c,h2(),h2(),h2())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y8{constructor(e,c,a,n){this.Ve=e,this.removedTargetIds=c,this.key=a,this.me=n}}class $l{constructor(e,c){this.targetId=e,this.fe=c}}class ql{constructor(e,c,a=V1.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=c,this.resumeToken=a,this.cause=n}}class y7{constructor(){this.ge=0,this.pe=L7(),this.ye=V1.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=h2(),c=h2(),a=h2();return this.pe.forEach((n,r)=>{switch(r){case 0:e=e.add(n);break;case 2:c=c.add(n);break;case 1:a=a.add(n);break;default:Z()}}),new w0(this.ye,this.we,e,c,a)}Fe(){this.Se=!1,this.pe=L7()}Me(e,c){this.Se=!0,this.pe=this.pe.insert(e,c)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,A2(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ew{constructor(e){this.Le=e,this.ke=new Map,this.qe=A3(),this.Qe=_7(),this.Ke=new O2(z2)}$e(e){for(const c of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(c,e.me):this.We(c,e.key,e.me);for(const c of e.removedTargetIds)this.We(c,e.key,e.me)}Ge(e){this.forEachTarget(e,c=>{const a=this.ze(c);switch(e.state){case 0:this.je(c)&&a.Ce(e.resumeToken);break;case 1:a.Ne(),a.be||a.Fe(),a.Ce(e.resumeToken);break;case 2:a.Ne(),a.be||this.removeTarget(c);break;case 3:this.je(c)&&(a.Be(),a.Ce(e.resumeToken));break;case 4:this.je(c)&&(this.He(c),a.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,c){e.targetIds.length>0?e.targetIds.forEach(c):this.ke.forEach((a,n)=>{this.je(n)&&c(n)})}Je(e){const c=e.targetId,a=e.fe.count,n=this.Ye(c);if(n){const r=n.target;if(O5(r))if(a===0){const s=new G(r.path);this.We(c,s,m1.newNoDocument(s,c2.min()))}else A2(a===1);else{const s=this.Ze(c);if(s!==a){const i=this.Xe(e),o=i?this.et(i,e,s):1;if(o!==0){this.He(c);const l=o===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(c,l)}}}}}Xe(e){const c=e.fe.unchangedNames;if(!c||!c.bits)return null;const{bits:{bitmap:a="",padding:n=0},hashCount:r=0}=c;let s,i;try{s=q4(a).toUint8Array()}catch(o){if(o instanceof zl)return A6("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{i=new Vn(s,n,r)}catch(o){return A6(o instanceof pe?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return i.Te===0?null:i}et(e,c,a){return c.fe.count===a-this.rt(e,c.targetId)?0:2}rt(e,c){const a=this.Le.getRemoteKeysForTarget(c);let n=0;return a.forEach(r=>{const s=this.Le.nt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${r.path.canonicalString()}`;e.mightContain(i)||(this.We(c,r,null),n++)}),n}it(e){const c=new Map;this.ke.forEach((r,s)=>{const i=this.Ye(s);if(i){if(r.current&&O5(i.target)){const o=new G(i.target.path);this.qe.get(o)!==null||this.st(s,o)||this.We(s,o,m1.newNoDocument(o,e))}r.De&&(c.set(s,r.ve()),r.Fe())}});let a=h2();this.Qe.forEach((r,s)=>{let i=!0;s.forEachWhile(o=>{const l=this.Ye(o);return!l||l.purpose==="TargetPurposeLimboResolution"||(i=!1,!1)}),i&&(a=a.add(r))}),this.qe.forEach((r,s)=>s.setReadTime(e));const n=new jt(e,c,this.Ke,this.qe,a);return this.qe=A3(),this.Qe=_7(),this.Ke=new O2(z2),n}Ue(e,c){if(!this.je(e))return;const a=this.st(e,c.key)?2:0;this.ze(e).Me(c.key,a),this.qe=this.qe.insert(c.key,c),this.Qe=this.Qe.insert(c.key,this.ot(c.key).add(e))}We(e,c,a){if(!this.je(e))return;const n=this.ze(e);this.st(e,c)?n.Me(c,1):n.xe(c),this.Qe=this.Qe.insert(c,this.ot(c).delete(e)),a&&(this.qe=this.qe.insert(c,a))}removeTarget(e){this.ke.delete(e)}Ze(e){const c=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+c.addedDocuments.size-c.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let c=this.ke.get(e);return c||(c=new y7,this.ke.set(e,c)),c}ot(e){let c=this.Qe.get(e);return c||(c=new l1(z2),this.Qe=this.Qe.insert(e,c)),c}je(e){const c=this.Ye(e)!==null;return c||U("WatchChangeAggregator","Detected inactive target",e),c}Ye(e){const c=this.ke.get(e);return c&&c.be?null:this.Le._t(e)}He(e){this.ke.set(e,new y7),this.Le.getRemoteKeysForTarget(e).forEach(c=>{this.We(e,c,null)})}st(e,c){return this.Le.getRemoteKeysForTarget(e).has(c)}}function _7(){return new O2(G.comparator)}function L7(){return new O2(G.comparator)}const tw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),aw=(()=>({and:"AND",or:"OR"}))();class nw{constructor(e,c){this.databaseId=e,this.useProto3Json=c}}function U5(t,e){return t.useProto3Json||Ft(e)?e:{value:e}}function J8(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rw(t,e){return J8(t,e.toTimestamp())}function f3(t){return A2(!!t),c2.fromTimestamp(function(c){const a=l4(c);return new Q2(a.seconds,a.nanos)}(t))}function zn(t,e){return function(a){return new I2(["projects",a.projectId,"databases",a.database])}(t).child("documents").child(e).canonicalString()}function Wl(t){const e=I2.fromString(t);return A2(Yl(e)),e}function $5(t,e){return zn(t.databaseId,e.path)}function qc(t,e){const c=Wl(e);if(c.get(1)!==t.databaseId.projectId)throw new B(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+c.get(1)+" vs "+t.databaseId.projectId);if(c.get(3)!==t.databaseId.database)throw new B(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+c.get(3)+" vs "+t.databaseId.database);return new G(Gl(c))}function q5(t,e){return zn(t.databaseId,e)}function sw(t){const e=Wl(t);return e.length===4?I2.emptyPath():Gl(e)}function j5(t){return new I2(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gl(t){return A2(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function w7(t,e,c){return{name:$5(t,e),fields:c.value.mapValue.fields}}function iw(t,e){let c;if("targetChange"in e){e.targetChange;const a=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],r=function(l,f){return l.useProto3Json?(A2(f===void 0||typeof f=="string"),V1.fromBase64String(f||"")):(A2(f===void 0||f instanceof Uint8Array),V1.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,i=s&&function(l){const f=l.code===void 0?w.UNKNOWN:Ul(l.code);return new B(f,l.message||"")}(s);c=new ql(a,n,r,i||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const n=qc(t,a.document.name),r=f3(a.document.updateTime),s=a.document.createTime?f3(a.document.createTime):c2.min(),i=new I1({mapValue:{fields:a.document.fields}}),o=m1.newFoundDocument(n,r,s,i),l=a.targetIds||[],f=a.removedTargetIds||[];c=new y8(l,f,o.key,o)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const n=qc(t,a.document),r=a.readTime?f3(a.readTime):c2.min(),s=m1.newNoDocument(n,r),i=a.removedTargetIds||[];c=new y8([],i,s.key,s)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const n=qc(t,a.document),r=a.removedTargetIds||[];c=new y8([],r,n,null)}else{if(!("filter"in e))return Z();{e.filter;const a=e.filter;a.targetId;const{count:n=0,unchangedNames:r}=a,s=new YL(n,r),i=a.targetId;c=new $l(i,s)}}return c}function ow(t,e){let c;if(e instanceof L0)c={update:w7(t,e.key,e.value)};else if(e instanceof gn)c={delete:$5(t,e.key)};else if(e instanceof X4)c={update:w7(t,e.key,e.data),updateMask:gw(e.fieldMask)};else{if(!(e instanceof GL))return Z();c={verify:$5(t,e.key)}}return e.fieldTransforms.length>0&&(c.updateTransforms=e.fieldTransforms.map(a=>function(r,s){const i=s.transform;if(i instanceof Y8)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof e0)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof t0)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof X8)return{fieldPath:s.field.canonicalString(),increment:i.Ie};throw Z()}(0,a))),e.precondition.isNone||(c.currentDocument=function(n,r){return r.updateTime!==void 0?{updateTime:rw(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(t,e.precondition)),c}function lw(t,e){return t&&t.length>0?(A2(e!==void 0),t.map(c=>function(n,r){let s=n.updateTime?f3(n.updateTime):f3(r);return s.isEqual(c2.min())&&(s=f3(r)),new qL(s,n.transformResults||[])}(c,e))):[]}function fw(t,e){return{documents:[q5(t,e.path)]}}function uw(t,e){const c={structuredQuery:{}},a=e.path;e.collectionGroup!==null?(c.parent=q5(t,a),c.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(c.parent=q5(t,a.popLast()),c.structuredQuery.from=[{collectionId:a.lastSegment()}]);const n=function(o){if(o.length!==0)return Ql(X1.create(o,"and"))}(e.filters);n&&(c.structuredQuery.where=n);const r=function(o){if(o.length!==0)return o.map(l=>function(u){return{field:o6(u.field),direction:mw(u.dir)}}(l))}(e.orderBy);r&&(c.structuredQuery.orderBy=r);const s=U5(t,e.limit);return s!==null&&(c.structuredQuery.limit=s),e.startAt&&(c.structuredQuery.startAt=function(o){return{before:o.inclusive,values:o.position}}(e.startAt)),e.endAt&&(c.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(e.endAt)),c}function hw(t){let e=sw(t.parent);const c=t.structuredQuery,a=c.from?c.from.length:0;let n=null;if(a>0){A2(a===1);const f=c.from[0];f.allDescendants?n=f.collectionId:e=e.child(f.collectionId)}let r=[];c.where&&(r=function(u){const h=Kl(u);return h instanceof X1&&_l(h)?h.getFilters():[h]}(c.where));let s=[];c.orderBy&&(s=function(u){return u.map(h=>function(v){return new Q8(l6(v.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(h))}(c.orderBy));let i=null;c.limit&&(i=function(u){let h;return h=typeof u=="object"?u.value:u,Ft(h)?null:h}(c.limit));let o=null;c.startAt&&(o=function(u){const h=!!u.before,d=u.values||[];return new K8(d,h)}(c.startAt));let l=null;return c.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new K8(d,h)}(c.endAt)),TL(e,n,s,r,i,"F",o,l)}function dw(t,e){const c=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return c==null?null:{"goog-listen-tags":c}}function Kl(t){return t.unaryFilter!==void 0?function(c){switch(c.unaryFilter.op){case"IS_NAN":const a=l6(c.unaryFilter.field);return G2.create(a,"==",{doubleValue:NaN});case"IS_NULL":const n=l6(c.unaryFilter.field);return G2.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=l6(c.unaryFilter.field);return G2.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=l6(c.unaryFilter.field);return G2.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(c){return G2.create(l6(c.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(c.fieldFilter.op),c.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(c){return X1.create(c.compositeFilter.filters.map(a=>Kl(a)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Z()}}(c.compositeFilter.op))}(t):Z()}function mw(t){return tw[t]}function pw(t){return cw[t]}function vw(t){return aw[t]}function o6(t){return{fieldPath:t.canonicalString()}}function l6(t){return i1.fromServerFormat(t.fieldPath)}function Ql(t){return t instanceof G2?function(c){if(c.op==="=="){if(h7(c.value))return{unaryFilter:{field:o6(c.field),op:"IS_NAN"}};if(u7(c.value))return{unaryFilter:{field:o6(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(h7(c.value))return{unaryFilter:{field:o6(c.field),op:"IS_NOT_NAN"}};if(u7(c.value))return{unaryFilter:{field:o6(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:o6(c.field),op:pw(c.op),value:c.value}}}(t):t instanceof X1?function(c){const a=c.getFilters().map(n=>Ql(n));return a.length===1?a[0]:{compositeFilter:{op:vw(c.op),filters:a}}}(t):Z()}function gw(t){const e=[];return t.fields.forEach(c=>e.push(c.canonicalString())),{fieldPaths:e}}function Yl(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e,c,a,n,r=c2.min(),s=c2.min(),i=V1.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=c,this.purpose=a,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=i,this.expectedCount=o}withSequenceNumber(e){return new Z3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,c){return new Z3(this.target,this.targetId,this.purpose,this.sequenceNumber,c,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Z3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Z3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.ut=e}}function Vw(t){const e=hw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?B5(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.on=new Cw}addToCollectionParentIndex(e,c){return this.on.add(c),x.resolve()}getCollectionParents(e,c){return x.resolve(this.on.getEntries(c))}addFieldIndex(e,c){return x.resolve()}deleteFieldIndex(e,c){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,c){return x.resolve()}getDocumentsMatchingTarget(e,c){return x.resolve(null)}getIndexType(e,c){return x.resolve(0)}getFieldIndexes(e,c){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,c){return x.resolve(o4.min())}getMinOffsetFromCollectionGroup(e,c){return x.resolve(o4.min())}updateCollectionGroup(e,c,a){return x.resolve()}updateIndexEntries(e,c){return x.resolve()}}class Cw{constructor(){this.index={}}add(e){const c=e.lastSegment(),a=e.popLast(),n=this.index[c]||new l1(I2.comparator),r=!n.has(a);return this.index[c]=n.add(a),r}has(e){const c=e.lastSegment(),a=e.popLast(),n=this.index[c];return n&&n.has(a)}getEntries(e){return(this.index[e]||new l1(I2.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k6{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new k6(0)}static Nn(){return new k6(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.changes=new X6(e=>e.toString(),(e,c)=>e.isEqual(c)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,c){this.assertNotApplied(),this.changes.set(e,m1.newInvalidDocument(e).setReadTime(c))}getEntry(e,c){this.assertNotApplied();const a=this.changes.get(c);return a!==void 0?x.resolve(a):this.getFromCache(e,c)}getEntries(e,c){return this.getAllFromCache(e,c)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,c){this.overlayedDocument=e,this.mutatedFields=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,c,a,n){this.remoteDocumentCache=e,this.mutationQueue=c,this.documentOverlayCache=a,this.indexManager=n}getDocument(e,c){let a=null;return this.documentOverlayCache.getOverlay(e,c).next(n=>(a=n,this.remoteDocumentCache.getEntry(e,c))).next(n=>(a!==null&&we(a.mutation,n,$1.empty(),Q2.now()),n))}getDocuments(e,c){return this.remoteDocumentCache.getEntries(e,c).next(a=>this.getLocalViewOfDocuments(e,a,h2()).next(()=>a))}getLocalViewOfDocuments(e,c,a=h2()){const n=T4();return this.populateOverlays(e,n,c).next(()=>this.computeViews(e,c,n,a).next(r=>{let s=me();return r.forEach((i,o)=>{s=s.insert(i,o.overlayedDocument)}),s}))}getOverlayedDocuments(e,c){const a=T4();return this.populateOverlays(e,a,c).next(()=>this.computeViews(e,c,a,h2()))}populateOverlays(e,c,a){const n=[];return a.forEach(r=>{c.has(r)||n.push(r)}),this.documentOverlayCache.getOverlays(e,n).next(r=>{r.forEach((s,i)=>{c.set(s,i)})})}computeViews(e,c,a,n){let r=A3();const s=Le(),i=function(){return Le()}();return c.forEach((o,l)=>{const f=a.get(l.key);n.has(l.key)&&(f===void 0||f.mutation instanceof X4)?r=r.insert(l.key,l):f!==void 0?(s.set(l.key,f.mutation.getFieldMask()),we(f.mutation,l,f.mutation.getFieldMask(),Q2.now())):s.set(l.key,$1.empty())}),this.recalculateAndSaveOverlays(e,r).next(o=>(o.forEach((l,f)=>s.set(l,f)),c.forEach((l,f)=>{var u;return i.set(l,new yw(f,(u=s.get(l))!==null&&u!==void 0?u:null))}),i))}recalculateAndSaveOverlays(e,c){const a=Le();let n=new O2((s,i)=>s-i),r=h2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,c).next(s=>{for(const i of s)i.keys().forEach(o=>{const l=c.get(o);if(l===null)return;let f=a.get(o)||$1.empty();f=i.applyToLocalView(l,f),a.set(o,f);const u=(n.get(i.batchId)||h2()).add(o);n=n.insert(i.batchId,u)})}).next(()=>{const s=[],i=n.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,u=El();f.forEach(h=>{if(!r.has(h)){const d=Fl(c.get(h),a.get(h));d!==null&&u.set(h,d),r=r.add(h)}}),s.push(this.documentOverlayCache.saveOverlays(e,l,u))}return x.waitFor(s)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,c){return this.remoteDocumentCache.getEntries(e,c).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,c,a,n){return function(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(c)?this.getDocumentsMatchingDocumentQuery(e,c.path):xl(c)?this.getDocumentsMatchingCollectionGroupQuery(e,c,a,n):this.getDocumentsMatchingCollectionQuery(e,c,a,n)}getNextDocuments(e,c,a,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,c,a,n).next(r=>{const s=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,c,a.largestBatchId,n-r.size):x.resolve(T4());let i=-1,o=r;return s.next(l=>x.forEach(l,(f,u)=>(i<u.largestBatchId&&(i=u.largestBatchId),r.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(h=>{o=o.insert(f,h)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,o,l,h2())).next(f=>({batchId:i,changes:Nl(f)})))})}getDocumentsMatchingDocumentQuery(e,c){return this.getDocument(e,new G(c)).next(a=>{let n=me();return a.isFoundDocument()&&(n=n.insert(a.key,a)),n})}getDocumentsMatchingCollectionGroupQuery(e,c,a,n){const r=c.collectionGroup;let s=me();return this.indexManager.getCollectionParents(e,r).next(i=>x.forEach(i,o=>{const l=function(u,h){return new _0(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(c,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,a,n).next(f=>{f.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,c,a,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,c.path,a.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,c,a,r,n))).next(s=>{r.forEach((o,l)=>{const f=l.getKey();s.get(f)===null&&(s=s.insert(f,m1.newInvalidDocument(f)))});let i=me();return s.forEach((o,l)=>{const f=r.get(o);f!==void 0&&we(f.mutation,l,$1.empty(),Q2.now()),Ut(c,l)&&(i=i.insert(o,l))}),i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,c){return x.resolve(this.ur.get(c))}saveBundleMetadata(e,c){return this.ur.set(c.id,function(n){return{id:n.id,version:n.version,createTime:f3(n.createTime)}}(c)),x.resolve()}getNamedQuery(e,c){return x.resolve(this.cr.get(c))}saveNamedQuery(e,c){return this.cr.set(c.name,function(n){return{name:n.name,query:Vw(n.bundledQuery),readTime:f3(n.readTime)}}(c)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.overlays=new O2(G.comparator),this.lr=new Map}getOverlay(e,c){return x.resolve(this.overlays.get(c))}getOverlays(e,c){const a=T4();return x.forEach(c,n=>this.getOverlay(e,n).next(r=>{r!==null&&a.set(n,r)})).next(()=>a)}saveOverlays(e,c,a){return a.forEach((n,r)=>{this.lt(e,c,r)}),x.resolve()}removeOverlaysForBatchId(e,c,a){const n=this.lr.get(a);return n!==void 0&&(n.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(a)),x.resolve()}getOverlaysForCollection(e,c,a){const n=T4(),r=c.length+1,s=new G(c.child("")),i=this.overlays.getIteratorFrom(s);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!c.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>a&&n.set(o.getKey(),o)}return x.resolve(n)}getOverlaysForCollectionGroup(e,c,a,n){let r=new O2((l,f)=>l-f);const s=this.overlays.getIterator();for(;s.hasNext();){const l=s.getNext().value;if(l.getKey().getCollectionGroup()===c&&l.largestBatchId>a){let f=r.get(l.largestBatchId);f===null&&(f=T4(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=T4(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=n)););return x.resolve(i)}lt(e,c,a){const n=this.overlays.get(a.key);if(n!==null){const s=this.lr.get(n.largestBatchId).delete(a.key);this.lr.set(n.largestBatchId,s)}this.overlays=this.overlays.insert(a.key,new QL(c,a));let r=this.lr.get(c);r===void 0&&(r=h2(),this.lr.set(c,r)),this.lr.set(c,r.add(a.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.hr=new l1(Z2.Pr),this.Ir=new l1(Z2.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,c){const a=new Z2(e,c);this.hr=this.hr.add(a),this.Ir=this.Ir.add(a)}Er(e,c){e.forEach(a=>this.addReference(a,c))}removeReference(e,c){this.dr(new Z2(e,c))}Ar(e,c){e.forEach(a=>this.removeReference(a,c))}Rr(e){const c=new G(new I2([])),a=new Z2(c,e),n=new Z2(c,e+1),r=[];return this.Ir.forEachInRange([a,n],s=>{this.dr(s),r.push(s.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const c=new G(new I2([])),a=new Z2(c,e),n=new Z2(c,e+1);let r=h2();return this.Ir.forEachInRange([a,n],s=>{r=r.add(s.key)}),r}containsKey(e){const c=new Z2(e,0),a=this.hr.firstAfterOrEqual(c);return a!==null&&e.isEqual(a.key)}}class Z2{constructor(e,c){this.key=e,this.gr=c}static Pr(e,c){return G.comparator(e.key,c.key)||z2(e.gr,c.gr)}static Tr(e,c){return z2(e.gr,c.gr)||G.comparator(e.key,c.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,c){this.indexManager=e,this.referenceDelegate=c,this.mutationQueue=[],this.pr=1,this.yr=new l1(Z2.Pr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,c,a,n){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new KL(r,c,a,n);this.mutationQueue.push(s);for(const i of n)this.yr=this.yr.add(new Z2(i.key,r)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return x.resolve(s)}lookupMutationBatch(e,c){return x.resolve(this.wr(c))}getNextMutationBatchAfterBatchId(e,c){const a=c+1,n=this.Sr(a),r=n<0?0:n;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,c){const a=new Z2(c,0),n=new Z2(c,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([a,n],s=>{const i=this.wr(s.gr);r.push(i)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,c){let a=new l1(z2);return c.forEach(n=>{const r=new Z2(n,0),s=new Z2(n,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,s],i=>{a=a.add(i.gr)})}),x.resolve(this.br(a))}getAllMutationBatchesAffectingQuery(e,c){const a=c.path,n=a.length+1;let r=a;G.isDocumentKey(r)||(r=r.child(""));const s=new Z2(new G(r),0);let i=new l1(z2);return this.yr.forEachWhile(o=>{const l=o.key.path;return!!a.isPrefixOf(l)&&(l.length===n&&(i=i.add(o.gr)),!0)},s),x.resolve(this.br(i))}br(e){const c=[];return e.forEach(a=>{const n=this.wr(a);n!==null&&c.push(n)}),c}removeMutationBatch(e,c){A2(this.Dr(c.batchId,"removed")===0),this.mutationQueue.shift();let a=this.yr;return x.forEach(c.mutations,n=>{const r=new Z2(n.key,c.batchId);return a=a.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.yr=a})}Fn(e){}containsKey(e,c){const a=new Z2(c,0),n=this.yr.firstAfterOrEqual(a);return x.resolve(c.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Dr(e,c){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const c=this.Sr(e);return c<0||c>=this.mutationQueue.length?null:this.mutationQueue[c]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.Cr=e,this.docs=function(){return new O2(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,c){const a=c.key,n=this.docs.get(a),r=n?n.size:0,s=this.Cr(c);return this.docs=this.docs.insert(a,{document:c.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const c=this.docs.get(e);c&&(this.docs=this.docs.remove(e),this.size-=c.size)}getEntry(e,c){const a=this.docs.get(c);return x.resolve(a?a.document.mutableCopy():m1.newInvalidDocument(c))}getEntries(e,c){let a=A3();return c.forEach(n=>{const r=this.docs.get(n);a=a.insert(n,r?r.document.mutableCopy():m1.newInvalidDocument(n))}),x.resolve(a)}getDocumentsMatchingQuery(e,c,a,n){let r=A3();const s=c.path,i=new G(s.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:l,value:{document:f}}=o.getNext();if(!s.isPrefixOf(l.path))break;l.path.length>s.length+1||mL(dL(f),a)<=0||(n.has(f.key)||Ut(c,f))&&(r=r.insert(f.key,f.mutableCopy()))}return x.resolve(r)}getAllFromCollectionGroup(e,c,a,n){Z()}vr(e,c){return x.forEach(this.docs,a=>c(a))}newChangeBuffer(e){return new Sw(this)}getSize(e){return x.resolve(this.size)}}class Sw extends Mw{constructor(e){super(),this._r=e}applyChanges(e){const c=[];return this.changes.forEach((a,n)=>{n.isValidDocument()?c.push(this._r.addEntry(e,n)):this._r.removeEntry(a)}),x.waitFor(c)}getFromCache(e,c){return this._r.getEntry(e,c)}getAllFromCache(e,c){return this._r.getEntries(e,c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.persistence=e,this.Fr=new X6(c=>mn(c),pn),this.lastRemoteSnapshotVersion=c2.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Cn,this.targetCount=0,this.Nr=k6.On()}forEachTarget(e,c){return this.Fr.forEach((a,n)=>c(n)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,c,a){return a&&(this.lastRemoteSnapshotVersion=a),c>this.Mr&&(this.Mr=c),x.resolve()}kn(e){this.Fr.set(e.target,e);const c=e.targetId;c>this.highestTargetId&&(this.Nr=new k6(c),this.highestTargetId=c),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,c){return this.kn(c),this.targetCount+=1,x.resolve()}updateTargetData(e,c){return this.kn(c),x.resolve()}removeTargetData(e,c){return this.Fr.delete(c.target),this.Or.Rr(c.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,c,a){let n=0;const r=[];return this.Fr.forEach((s,i)=>{i.sequenceNumber<=c&&a.get(i.targetId)===null&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,i.targetId)),n++)}),x.waitFor(r).next(()=>n)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,c){const a=this.Fr.get(c)||null;return x.resolve(a)}addMatchingKeys(e,c,a){return this.Or.Er(c,a),x.resolve()}removeMatchingKeys(e,c,a){this.Or.Ar(c,a);const n=this.persistence.referenceDelegate,r=[];return n&&c.forEach(s=>{r.push(n.markPotentiallyOrphaned(e,s))}),x.waitFor(r)}removeMatchingKeysForTargetId(e,c){return this.Or.Rr(c),x.resolve()}getMatchingKeysForTargetId(e,c){const a=this.Or.mr(c);return x.resolve(a)}containsKey(e,c){return x.resolve(this.Or.containsKey(c))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,c){this.Br={},this.overlays={},this.Lr=new fn(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Aw(this),this.indexManager=new zw,this.remoteDocumentCache=function(n){return new xw(n)}(a=>this.referenceDelegate.Qr(a)),this.serializer=new Hw(c),this.Kr=new Lw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let c=this.overlays[e.toKey()];return c||(c=new ww,this.overlays[e.toKey()]=c),c}getMutationQueue(e,c){let a=this.Br[e.toKey()];return a||(a=new bw(c,this.referenceDelegate),this.Br[e.toKey()]=a),a}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,c,a){U("MemoryPersistence","Starting transaction:",e);const n=new Nw(this.Lr.next());return this.referenceDelegate.$r(),a(n).next(r=>this.referenceDelegate.Ur(n).next(()=>r)).toPromise().then(r=>(n.raiseOnCommittedEvent(),r))}Wr(e,c){return x.or(Object.values(this.Br).map(a=>()=>a.containsKey(e,c)))}}class Nw extends vL{constructor(e){super(),this.currentSequenceNumber=e}}class Mn{constructor(e){this.persistence=e,this.Gr=new Cn,this.zr=null}static jr(e){return new Mn(e)}get Hr(){if(this.zr)return this.zr;throw Z()}addReference(e,c,a){return this.Gr.addReference(a,c),this.Hr.delete(a.toString()),x.resolve()}removeReference(e,c,a){return this.Gr.removeReference(a,c),this.Hr.add(a.toString()),x.resolve()}markPotentiallyOrphaned(e,c){return this.Hr.add(c.toString()),x.resolve()}removeTarget(e,c){this.Gr.Rr(c.targetId).forEach(n=>this.Hr.add(n.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,c.targetId).next(n=>{n.forEach(r=>this.Hr.add(r.toString()))}).next(()=>a.removeTargetData(e,c))}$r(){this.zr=new Set}Ur(e){const c=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Hr,a=>{const n=G.fromPath(a);return this.Jr(e,n).next(r=>{r||c.removeEntry(n,c2.min())})}).next(()=>(this.zr=null,c.apply(e)))}updateLimboDocument(e,c){return this.Jr(e,c).next(a=>{a?this.Hr.delete(c.toString()):this.Hr.add(c.toString())})}Qr(e){return 0}Jr(e,c){return x.or([()=>x.resolve(this.Gr.containsKey(c)),()=>this.persistence.getTargetCache().containsKey(e,c),()=>this.persistence.Wr(e,c)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,c,a,n){this.targetId=e,this.fromCache=c,this.ki=a,this.qi=n}static Qi(e,c){let a=h2(),n=h2();for(const r of c.docChanges)switch(r.type){case 0:a=a.add(r.doc.key);break;case 1:n=n.add(r.doc.key)}return new yn(e,c.fromCache,a,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,c){this.Gi=e,this.indexManager=c,this.Ki=!0}getDocumentsMatchingQuery(e,c,a,n){const r={result:null};return this.zi(e,c).next(s=>{r.result=s}).next(()=>{if(!r.result)return this.ji(e,c,n,a).next(s=>{r.result=s})}).next(()=>{if(r.result)return;const s=new Ew;return this.Hi(e,c,s).next(i=>{if(r.result=i,this.$i)return this.Ji(e,c,s,i.size)})}).next(()=>r.result)}Ji(e,c,a,n){return a.documentReadCount<this.Ui?(se()<=d2.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",i6(c),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),x.resolve()):(se()<=d2.DEBUG&&U("QueryEngine","Query:",i6(c),"scans",a.documentReadCount,"local documents and returns",n,"documents as results."),a.documentReadCount>this.Wi*n?(se()<=d2.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",i6(c),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,o3(c))):x.resolve())}zi(e,c){if(v7(c))return x.resolve(null);let a=o3(c);return this.indexManager.getIndexType(e,a).next(n=>n===0?null:(c.limit!==null&&n===1&&(c=B5(c,null,"F"),a=o3(c)),this.indexManager.getDocumentsMatchingTarget(e,a).next(r=>{const s=h2(...r);return this.Gi.getDocuments(e,s).next(i=>this.indexManager.getMinOffset(e,a).next(o=>{const l=this.Yi(c,i);return this.Zi(c,l,s,o.readTime)?this.zi(e,B5(c,null,"F")):this.Xi(e,l,c,o)}))})))}ji(e,c,a,n){return v7(c)||n.isEqual(c2.min())?x.resolve(null):this.Gi.getDocuments(e,a).next(r=>{const s=this.Yi(c,r);return this.Zi(c,s,a,n)?x.resolve(null):(se()<=d2.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),i6(c)),this.Xi(e,s,c,hL(n,-1)).next(i=>i))})}Yi(e,c){let a=new l1(Al(e));return c.forEach((n,r)=>{Ut(e,r)&&(a=a.add(r))}),a}Zi(e,c,a,n){if(e.limit===null)return!1;if(a.size!==c.size)return!0;const r=e.limitType==="F"?c.last():c.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Hi(e,c,a){return se()<=d2.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",i6(c)),this.Gi.getDocumentsMatchingQuery(e,c,o4.min(),a)}Xi(e,c,a,n){return this.Gi.getDocumentsMatchingQuery(e,a,n).next(r=>(c.forEach(s=>{r=r.insert(s.key,s)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,c,a,n){this.persistence=e,this.es=c,this.serializer=n,this.ts=new O2(z2),this.ns=new X6(r=>mn(r),pn),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(a)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _w(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",c=>e.collect(c,this.ts))}}function Pw(t,e,c,a){return new Iw(t,e,c,a)}async function Xl(t,e){const c=s2(t);return await c.persistence.runTransaction("Handle user change","readonly",a=>{let n;return c.mutationQueue.getAllMutationBatches(a).next(r=>(n=r,c.os(e),c.mutationQueue.getAllMutationBatches(a))).next(r=>{const s=[],i=[];let o=h2();for(const l of n){s.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return c.localDocuments.getDocuments(a,o).next(l=>({_s:l,removedBatchIds:s,addedBatchIds:i}))})})}function Rw(t,e){const c=s2(t);return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const n=e.batch.keys(),r=c.ss.newChangeBuffer({trackRemovals:!0});return function(i,o,l,f){const u=l.batch,h=u.keys();let d=x.resolve();return h.forEach(v=>{d=d.next(()=>f.getEntry(o,v)).next(V=>{const z=l.docVersions.get(v);A2(z!==null),V.version.compareTo(z)<0&&(u.applyToRemoteDocument(V,l),V.isValidDocument()&&(V.setReadTime(l.commitVersion),f.addEntry(V)))})}),d.next(()=>i.mutationQueue.removeMutationBatch(o,u))}(c,a,e,r).next(()=>r.apply(a)).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,n,e.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(i){let o=h2();for(let l=0;l<i.mutationResults.length;++l)i.mutationResults[l].transformResults.length>0&&(o=o.add(i.batch.mutations[l].key));return o}(e))).next(()=>c.localDocuments.getDocuments(a,n))})}function Jl(t){const e=s2(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",c=>e.qr.getLastRemoteSnapshotVersion(c))}function Dw(t,e){const c=s2(t),a=e.snapshotVersion;let n=c.ts;return c.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const s=c.ss.newChangeBuffer({trackRemovals:!0});n=c.ts;const i=[];e.targetChanges.forEach((f,u)=>{const h=n.get(u);if(!h)return;i.push(c.qr.removeMatchingKeys(r,f.removedDocuments,u).next(()=>c.qr.addMatchingKeys(r,f.addedDocuments,u)));let d=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(u)!==null?d=d.withResumeToken(V1.EMPTY_BYTE_STRING,c2.min()).withLastLimboFreeSnapshotVersion(c2.min()):f.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(f.resumeToken,a)),n=n.insert(u,d),function(V,z,H){return V.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(h,d,f)&&i.push(c.qr.updateTargetData(r,d))});let o=A3(),l=h2();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&i.push(c.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(Ow(r,s,e.documentUpdates).next(f=>{o=f.us,l=f.cs})),!a.isEqual(c2.min())){const f=c.qr.getLastRemoteSnapshotVersion(r).next(u=>c.qr.setTargetsMetadata(r,r.currentSequenceNumber,a));i.push(f)}return x.waitFor(i).next(()=>s.apply(r)).next(()=>c.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(c.ts=n,r))}function Ow(t,e,c){let a=h2(),n=h2();return c.forEach(r=>a=a.add(r)),e.getEntries(t,a).next(r=>{let s=A3();return c.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(i)),o.isNoDocument()&&o.version.isEqual(c2.min())?(e.removeEntry(i,o.readTime),s=s.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),s=s.insert(i,o)):U("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{us:s,cs:n}})}function Fw(t,e){const c=s2(t);return c.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function Bw(t,e){const c=s2(t);return c.persistence.runTransaction("Allocate target","readwrite",a=>{let n;return c.qr.getTargetData(a,e).next(r=>r?(n=r,x.resolve(n)):c.qr.allocateTargetId(a).next(s=>(n=new Z3(e,s,"TargetPurposeListen",a.currentSequenceNumber),c.qr.addTargetData(a,n).next(()=>n))))}).then(a=>{const n=c.ts.get(a.targetId);return(n===null||a.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(c.ts=c.ts.insert(a.targetId,a),c.ns.set(e,a.targetId)),a})}async function W5(t,e,c){const a=s2(t),n=a.ts.get(e),r=c?"readwrite":"readwrite-primary";try{c||await a.persistence.runTransaction("Release target",r,s=>a.persistence.referenceDelegate.removeTarget(s,n))}catch(s){if(!y0(s))throw s;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}a.ts=a.ts.remove(e),a.ns.delete(n.target)}function b7(t,e,c){const a=s2(t);let n=c2.min(),r=h2();return a.persistence.runTransaction("Execute query","readwrite",s=>function(o,l,f){const u=s2(o),h=u.ns.get(f);return h!==void 0?x.resolve(u.ts.get(h)):u.qr.getTargetData(l,f)}(a,s,o3(e)).next(i=>{if(i)return n=i.lastLimboFreeSnapshotVersion,a.qr.getMatchingKeysForTargetId(s,i.targetId).next(o=>{r=o})}).next(()=>a.es.getDocumentsMatchingQuery(s,e,c?n:c2.min(),c?r:h2())).next(i=>(Uw(a,EL(e),i),{documents:i,ls:r})))}function Uw(t,e,c){let a=t.rs.get(e)||c2.min();c.forEach((n,r)=>{r.readTime.compareTo(a)>0&&(a=r.readTime)}),t.rs.set(e,a)}class x7{constructor(){this.activeTargetIds=OL()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $w{constructor(){this.eo=new x7,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,c,a){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,c,a){this.no[e]=c}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new x7,Promise.resolve()}handleUserChange(e,c,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S7{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s8=null;function jc(){return s8===null?s8=function(){return 268435456+Math.round(2147483648*Math.random())}():s8++,"0x"+s8.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="WebChannelConnection";class Gw extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=a+"://"+c.host,this.fo=`projects/${n}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get yo(){return!1}wo(c,a,n,r,s){const i=jc(),o=this.So(c,a);U("RestConnection",`Sending RPC '${c}' ${i}:`,o,n);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,r,s),this.Do(c,o,l,n).then(f=>(U("RestConnection",`Received RPC '${c}' ${i}: `,f),f),f=>{throw A6("RestConnection",`RPC '${c}' ${i} failed with error: `,f,"url: ",o,"request:",n),f})}Co(c,a,n,r,s,i){return this.wo(c,a,n,r,s)}bo(c,a,n){c["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Q6}(),c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((r,s)=>c[s]=r),n&&n.headers.forEach((r,s)=>c[s]=r)}So(c,a){const n=jw[c];return`${this.mo}/v1/${a}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,c,a,n){const r=jc();return new Promise((s,i)=>{const o=new tL;o.setWithCredentials(!0),o.listenOnce(Z_.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case $c.NO_ERROR:const f=o.getResponseJson();U(h1,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),s(f);break;case $c.TIMEOUT:U(h1,`RPC '${e}' ${r} timed out`),i(new B(w.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const u=o.getStatus();if(U(h1,`RPC '${e}' ${r} failed with status:`,u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const v=function(z){const H=z.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(H)>=0?H:w.UNKNOWN}(d.status);i(new B(v,d.message))}else i(new B(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new B(w.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{U(h1,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(n);U(h1,`RPC '${e}' ${r} sending request:`,n),o.send(c,"POST",l,a,15)})}vo(e,c,a){const n=jc(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=X_(),i=J_(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.bo(o.initMessageHeaders,c,a),o.encodeInitMessageHeaders=!0;const f=r.join("");U(h1,`Creating RPC '${e}' stream ${n}: ${f}`,o);const u=s.createWebChannel(f,o);let h=!1,d=!1;const v=new Ww({co:z=>{d?U(h1,`Not sending because RPC '${e}' stream ${n} is closed:`,z):(h||(U(h1,`Opening RPC '${e}' stream ${n} transport.`),u.open(),h=!0),U(h1,`RPC '${e}' stream ${n} sending:`,z),u.send(z))},lo:()=>u.close()}),V=(z,H,M)=>{z.listen(H,N=>{try{M(N)}catch(A){setTimeout(()=>{throw A},0)}})};return V(u,a8.EventType.OPEN,()=>{d||U(h1,`RPC '${e}' stream ${n} transport opened.`)}),V(u,a8.EventType.CLOSE,()=>{d||(d=!0,U(h1,`RPC '${e}' stream ${n} transport closed`),v.Ro())}),V(u,a8.EventType.ERROR,z=>{d||(d=!0,A6(h1,`RPC '${e}' stream ${n} transport errored:`,z),v.Ro(new B(w.UNAVAILABLE,"The operation could not be completed")))}),V(u,a8.EventType.MESSAGE,z=>{var H;if(!d){const M=z.data[0];A2(!!M);const N=M,A=N.error||((H=N[0])===null||H===void 0?void 0:H.error);if(A){U(h1,`RPC '${e}' stream ${n} received error:`,A);const j=A.status;let n2=function(X){const C2=j2[X];if(C2!==void 0)return Ul(C2)}(j),f2=A.message;n2===void 0&&(n2=w.INTERNAL,f2="Unknown error status: "+j+" with message "+A.message),d=!0,v.Ro(new B(n2,f2)),u.close()}else U(h1,`RPC '${e}' stream ${n} received:`,M),v.Vo(M)}}),V(i,eL.STAT_EVENT,z=>{z.stat===r7.PROXY?U(h1,`RPC '${e}' stream ${n} detected buffering proxy`):z.stat===r7.NOPROXY&&U(h1,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function Wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return new nw(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,c,a=1e3,n=1.5,r=6e4){this.si=e,this.timerId=c,this.Fo=a,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const c=Math.floor(this.Oo+this.qo()),a=Math.max(0,Date.now()-this.Bo),n=Math.max(0,c-a);n>0&&U("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${c} ms, last attempt: ${a} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,c,a,n,r,s,i,o){this.si=e,this.Ko=a,this.$o=n,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Zl(e,c)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,c){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():c&&c.code===w.RESOURCE_EXHAUSTED?(S3(c.toString()),S3("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):c&&c.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(c)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),c=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,n])=>{this.Uo===c&&this.s_(a,n)},a=>{e(()=>{const n=new B(w.UNKNOWN,"Fetching auth token failed: "+a.message);return this.o_(n)})})}s_(e,c){const a=this.i_(this.Uo);this.stream=this.__(e,c),this.stream.ho(()=>{a(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(n=>{a(()=>this.o_(n))}),this.stream.onMessage(n=>{a(()=>this.onMessage(n))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return c=>{this.si.enqueueAndForget(()=>this.Uo===e?c():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kw extends ef{constructor(e,c,a,n,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",c,a,n,s),this.serializer=r}__(e,c){return this.connection.vo("Listen",e,c)}onMessage(e){this.zo.reset();const c=iw(this.serializer,e),a=function(r){if(!("targetChange"in r))return c2.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?c2.min():s.readTime?f3(s.readTime):c2.min()}(e);return this.listener.a_(c,a)}u_(e){const c={};c.database=j5(this.serializer),c.addTarget=function(r,s){let i;const o=s.target;if(i=O5(o)?{documents:fw(r,o)}:{query:uw(r,o)},i.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){i.resumeToken=jl(r,s.resumeToken);const l=U5(r,s.expectedCount);l!==null&&(i.expectedCount=l)}else if(s.snapshotVersion.compareTo(c2.min())>0){i.readTime=J8(r,s.snapshotVersion.toTimestamp());const l=U5(r,s.expectedCount);l!==null&&(i.expectedCount=l)}return i}(this.serializer,e);const a=dw(this.serializer,e);a&&(c.labels=a),this.e_(c)}c_(e){const c={};c.database=j5(this.serializer),c.removeTarget=e,this.e_(c)}}class Qw extends ef{constructor(e,c,a,n,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",c,a,n,s),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,c){return this.connection.vo("Write",e,c)}onMessage(e){if(A2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const c=lw(e.writeResults,e.commitTime),a=f3(e.commitTime);return this.listener.I_(a,c)}return A2(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=j5(this.serializer),this.e_(e)}P_(e){const c={streamToken:this.lastStreamToken,writes:e.map(a=>ow(this.serializer,a))};this.e_(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends class{}{constructor(e,c,a,n){super(),this.authCredentials=e,this.appCheckCredentials=c,this.connection=a,this.serializer=n,this.d_=!1}A_(){if(this.d_)throw new B(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,c,a){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.wo(e,c,a,n,r)).catch(n=>{throw n.name==="FirebaseError"?(n.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new B(w.UNKNOWN,n.toString())})}Co(e,c,a,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Co(e,c,a,r,s,n)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(w.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class Xw{constructor(e,c){this.asyncQueue=e,this.onlineStateHandler=c,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const c=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(S3(c),this.f_=!1):U("OnlineStateTracker",c)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,c,a,n,r){this.localStore=e,this.datastore=c,this.asyncQueue=a,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(s=>{a.enqueueAndForget(async()=>{J4(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(o){const l=s2(o);l.C_.add(4),await b0(l),l.M_.set("Unknown"),l.C_.delete(4),await Gt(l)}(this))})}),this.M_=new Xw(a,n)}}async function Gt(t){if(J4(t))for(const e of t.v_)await e(!0)}async function b0(t){for(const e of t.v_)await e(!1)}function tf(t,e){const c=s2(t);c.D_.has(e.targetId)||(c.D_.set(e.targetId,e),wn(c)?Ln(c):J6(c).Ho()&&_n(c,e))}function cf(t,e){const c=s2(t),a=J6(c);c.D_.delete(e),a.Ho()&&af(c,e),c.D_.size===0&&(a.Ho()?a.Zo():J4(c)&&c.M_.set("Unknown"))}function _n(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(c2.min())>0){const c=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(c)}J6(t).u_(e)}function af(t,e){t.x_.Oe(e),J6(t).c_(e)}function Ln(t){t.x_=new ew({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),J6(t).start(),t.M_.g_()}function wn(t){return J4(t)&&!J6(t).jo()&&t.D_.size>0}function J4(t){return s2(t).C_.size===0}function nf(t){t.x_=void 0}async function Zw(t){t.D_.forEach((e,c)=>{_n(t,e)})}async function eb(t,e){nf(t),wn(t)?(t.M_.w_(e),Ln(t)):t.M_.set("Unknown")}async function tb(t,e,c){if(t.M_.set("Online"),e instanceof ql&&e.state===2&&e.cause)try{await async function(n,r){const s=r.cause;for(const i of r.targetIds)n.D_.has(i)&&(await n.remoteSyncer.rejectListen(i,s),n.D_.delete(i),n.x_.removeTarget(i))}(t,e)}catch(a){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),a),await Z8(t,a)}else if(e instanceof y8?t.x_.$e(e):e instanceof $l?t.x_.Je(e):t.x_.Ge(e),!c.isEqual(c2.min()))try{const a=await Jl(t.localStore);c.compareTo(a)>=0&&await function(r,s){const i=r.x_.it(s);return i.targetChanges.forEach((o,l)=>{if(o.resumeToken.approximateByteSize()>0){const f=r.D_.get(l);f&&r.D_.set(l,f.withResumeToken(o.resumeToken,s))}}),i.targetMismatches.forEach((o,l)=>{const f=r.D_.get(o);if(!f)return;r.D_.set(o,f.withResumeToken(V1.EMPTY_BYTE_STRING,f.snapshotVersion)),af(r,o);const u=new Z3(f.target,o,l,f.sequenceNumber);_n(r,u)}),r.remoteSyncer.applyRemoteEvent(i)}(t,c)}catch(a){U("RemoteStore","Failed to raise snapshot:",a),await Z8(t,a)}}async function Z8(t,e,c){if(!y0(e))throw e;t.C_.add(1),await b0(t),t.M_.set("Offline"),c||(c=()=>Jl(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await c(),t.C_.delete(1),await Gt(t)})}function rf(t,e){return e().catch(c=>Z8(t,c,e))}async function Kt(t){const e=s2(t),c=f4(e);let a=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;cb(e);)try{const n=await Fw(e.localStore,a);if(n===null){e.b_.length===0&&c.Zo();break}a=n.batchId,ab(e,n)}catch(n){await Z8(e,n)}sf(e)&&of(e)}function cb(t){return J4(t)&&t.b_.length<10}function ab(t,e){t.b_.push(e);const c=f4(t);c.Ho()&&c.h_&&c.P_(e.mutations)}function sf(t){return J4(t)&&!f4(t).jo()&&t.b_.length>0}function of(t){f4(t).start()}async function nb(t){f4(t).E_()}async function rb(t){const e=f4(t);for(const c of t.b_)e.P_(c.mutations)}async function sb(t,e,c){const a=t.b_.shift(),n=Hn.from(a,e,c);await rf(t,()=>t.remoteSyncer.applySuccessfulWrite(n)),await Kt(t)}async function ib(t,e){e&&f4(t).h_&&await async function(a,n){if(function(s){return XL(s)&&s!==w.ABORTED}(n.code)){const r=a.b_.shift();f4(a).Yo(),await rf(a,()=>a.remoteSyncer.rejectFailedWrite(r.batchId,n)),await Kt(a)}}(t,e),sf(t)&&of(t)}async function A7(t,e){const c=s2(t);c.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const a=J4(c);c.C_.add(3),await b0(c),a&&c.M_.set("Unknown"),await c.remoteSyncer.handleCredentialChange(e),c.C_.delete(3),await Gt(c)}async function ob(t,e){const c=s2(t);e?(c.C_.delete(2),await Gt(c)):e||(c.C_.add(2),await b0(c),c.M_.set("Unknown"))}function J6(t){return t.O_||(t.O_=function(c,a,n){const r=s2(c);return r.A_(),new Kw(a,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Zw.bind(null,t),Io:eb.bind(null,t),a_:tb.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),wn(t)?Ln(t):t.M_.set("Unknown")):(await t.O_.stop(),nf(t))})),t.O_}function f4(t){return t.N_||(t.N_=function(c,a,n){const r=s2(c);return r.A_(),new Qw(a,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:nb.bind(null,t),Io:ib.bind(null,t),T_:rb.bind(null,t),I_:sb.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Kt(t)):(await t.N_.stop(),t.b_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,c,a,n,r){this.asyncQueue=e,this.timerId=c,this.targetTimeMs=a,this.op=n,this.removalCallback=r,this.deferred=new w3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,c,a,n,r){const s=Date.now()+a,i=new bn(e,c,s,n,r);return i.start(a),i}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xn(t,e){if(S3("AsyncQueue",`${e}: ${t}`),y0(t))return new B(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C6{constructor(e){this.comparator=e?(c,a)=>e(c,a)||G.comparator(c.key,a.key):(c,a)=>G.comparator(c.key,a.key),this.keyedMap=me(),this.sortedSet=new O2(this.comparator)}static emptySet(e){return new C6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const c=this.keyedMap.get(e);return c?this.sortedSet.indexOf(c):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((c,a)=>(e(c),!1))}add(e){const c=this.delete(e.key);return c.copy(c.keyedMap.insert(e.key,e),c.sortedSet.insert(e,null))}delete(e){const c=this.get(e);return c?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(c)):this}isEqual(e){if(!(e instanceof C6)||this.size!==e.size)return!1;const c=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;c.hasNext();){const n=c.getNext().key,r=a.getNext().key;if(!n.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(c=>{e.push(c.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,c){const a=new C6;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=c,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T7{constructor(){this.B_=new O2(G.comparator)}track(e){const c=e.doc.key,a=this.B_.get(c);a?e.type!==0&&a.type===3?this.B_=this.B_.insert(c,e):e.type===3&&a.type!==1?this.B_=this.B_.insert(c,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.B_=this.B_.insert(c,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.B_=this.B_.insert(c,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.B_=this.B_.remove(c):e.type===1&&a.type===2?this.B_=this.B_.insert(c,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.B_=this.B_.insert(c,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(c,e)}L_(){const e=[];return this.B_.inorderTraversal((c,a)=>{e.push(a)}),e}}class I6{constructor(e,c,a,n,r,s,i,o,l){this.query=e,this.docs=c,this.oldDocs=a,this.docChanges=n,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,c,a,n,r){const s=[];return c.forEach(i=>{s.push({type:0,doc:i})}),new I6(e,c,C6.emptySet(c),s,a,n,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const c=this.docChanges,a=e.docChanges;if(c.length!==a.length)return!1;for(let n=0;n<c.length;n++)if(c[n].type!==a[n].type||!c[n].doc.isEqual(a[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.k_=void 0,this.listeners=[]}}class fb{constructor(){this.queries=new X6(e=>Sl(e),Bt),this.onlineState="Unknown",this.q_=new Set}}async function lf(t,e){const c=s2(t),a=e.query;let n=!1,r=c.queries.get(a);if(r||(n=!0,r=new lb),n)try{r.k_=await c.onListen(a)}catch(s){const i=xn(s,`Initialization of query '${i6(e.query)}' failed`);return void e.onError(i)}c.queries.set(a,r),r.listeners.push(e),e.Q_(c.onlineState),r.k_&&e.K_(r.k_)&&Sn(c)}async function ff(t,e){const c=s2(t),a=e.query;let n=!1;const r=c.queries.get(a);if(r){const s=r.listeners.indexOf(e);s>=0&&(r.listeners.splice(s,1),n=r.listeners.length===0)}if(n)return c.queries.delete(a),c.onUnlisten(a)}function ub(t,e){const c=s2(t);let a=!1;for(const n of e){const r=n.query,s=c.queries.get(r);if(s){for(const i of s.listeners)i.K_(n)&&(a=!0);s.k_=n}}a&&Sn(c)}function hb(t,e,c){const a=s2(t),n=a.queries.get(e);if(n)for(const r of n.listeners)r.onError(c);a.queries.delete(e)}function Sn(t){t.q_.forEach(e=>{e.next()})}class uf{constructor(e,c,a){this.query=e,this.U_=c,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=a||{}}K_(e){if(!this.options.includeMetadataChanges){const a=[];for(const n of e.docChanges)n.type!==3&&a.push(n);e=new I6(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let c=!1;return this.W_?this.z_(e)&&(this.U_.next(e),c=!0):this.j_(e,this.onlineState)&&(this.H_(e),c=!0),this.G_=e,c}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let c=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),c=!0),c}j_(e,c){if(!e.fromCache)return!0;const a=c!=="Offline";return(!this.options.J_||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||c==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const c=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!c)&&this.options.includeMetadataChanges===!0}H_(e){e=I6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.key=e}}class df{constructor(e){this.key=e}}class db{constructor(e,c){this.query=e,this.ia=c,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=h2(),this.mutatedKeys=h2(),this._a=Al(e),this.aa=new C6(this._a)}get ua(){return this.ia}ca(e,c){const a=c?c.la:new T7,n=c?c.aa:this.aa;let r=c?c.mutatedKeys:this.mutatedKeys,s=n,i=!1;const o=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((f,u)=>{const h=n.get(f),d=Ut(this.query,u)?u:null,v=!!h&&this.mutatedKeys.has(h.key),V=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let z=!1;h&&d?h.data.isEqual(d.data)?v!==V&&(a.track({type:3,doc:d}),z=!0):this.ha(h,d)||(a.track({type:2,doc:d}),z=!0,(o&&this._a(d,o)>0||l&&this._a(d,l)<0)&&(i=!0)):!h&&d?(a.track({type:0,doc:d}),z=!0):h&&!d&&(a.track({type:1,doc:h}),z=!0,(o||l)&&(i=!0)),z&&(d?(s=s.add(d),r=V?r.add(f):r.delete(f)):(s=s.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),r=r.delete(f.key),a.track({type:1,doc:f})}return{aa:s,la:a,Zi:i,mutatedKeys:r}}ha(e,c){return e.hasLocalMutations&&c.hasCommittedMutations&&!c.hasLocalMutations}applyChanges(e,c,a,n){const r=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((f,u)=>function(d,v){const V=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return V(d)-V(v)}(f.type,u.type)||this._a(f.doc,u.doc)),this.Pa(a),n=n!=null&&n;const i=c&&!n?this.Ia():[],o=this.oa.size===0&&this.current&&!n?1:0,l=o!==this.sa;return this.sa=o,s.length!==0||l?{snapshot:new I6(this.query,e.aa,r,s,e.mutatedKeys,o===0,l,!1,!!a&&a.resumeToken.approximateByteSize()>0),Ta:i}:{Ta:i}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new T7,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(c=>this.ia=this.ia.add(c)),e.modifiedDocuments.forEach(c=>{}),e.removedDocuments.forEach(c=>this.ia=this.ia.delete(c)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=h2(),this.aa.forEach(a=>{this.Ea(a.key)&&(this.oa=this.oa.add(a.key))});const c=[];return e.forEach(a=>{this.oa.has(a)||c.push(new df(a))}),this.oa.forEach(a=>{e.has(a)||c.push(new hf(a))}),c}da(e){this.ia=e.ls,this.oa=h2();const c=this.ca(e.documents);return this.applyChanges(c,!0)}Aa(){return I6.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class mb{constructor(e,c,a){this.query=e,this.targetId=c,this.view=a}}class pb{constructor(e){this.key=e,this.Ra=!1}}class vb{constructor(e,c,a,n,r,s){this.localStore=e,this.remoteStore=c,this.eventManager=a,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new X6(i=>Sl(i),Bt),this.fa=new Map,this.ga=new Set,this.pa=new O2(G.comparator),this.ya=new Map,this.wa=new Cn,this.Sa={},this.ba=new Map,this.Da=k6.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function gb(t,e){const c=bb(t);let a,n;const r=c.ma.get(e);if(r)a=r.targetId,c.sharedClientState.addLocalQueryTarget(a),n=r.view.Aa();else{const s=await Bw(c.localStore,o3(e)),i=c.sharedClientState.addLocalQueryTarget(s.targetId);a=s.targetId,n=await Hb(c,e,a,i==="current",s.resumeToken),c.isPrimaryClient&&tf(c.remoteStore,s)}return n}async function Hb(t,e,c,a,n){t.va=(u,h,d)=>async function(V,z,H,M){let N=z.view.ca(H);N.Zi&&(N=await b7(V.localStore,z.query,!1).then(({documents:f2})=>z.view.ca(f2,N)));const A=M&&M.targetChanges.get(z.targetId),j=M&&M.targetMismatches.get(z.targetId)!=null,n2=z.view.applyChanges(N,V.isPrimaryClient,A,j);return E7(V,z.targetId,n2.Ta),n2.snapshot}(t,u,h,d);const r=await b7(t.localStore,e,!0),s=new db(e,r.ls),i=s.ca(r.documents),o=w0.createSynthesizedTargetChangeForCurrentChange(c,a&&t.onlineState!=="Offline",n),l=s.applyChanges(i,t.isPrimaryClient,o);E7(t,c,l.Ta);const f=new mb(e,c,s);return t.ma.set(e,f),t.fa.has(c)?t.fa.get(c).push(e):t.fa.set(c,[e]),l.snapshot}async function Vb(t,e){const c=s2(t),a=c.ma.get(e),n=c.fa.get(a.targetId);if(n.length>1)return c.fa.set(a.targetId,n.filter(r=>!Bt(r,e))),void c.ma.delete(e);c.isPrimaryClient?(c.sharedClientState.removeLocalQueryTarget(a.targetId),c.sharedClientState.isActiveQueryTarget(a.targetId)||await W5(c.localStore,a.targetId,!1).then(()=>{c.sharedClientState.clearQueryState(a.targetId),cf(c.remoteStore,a.targetId),G5(c,a.targetId)}).catch(M0)):(G5(c,a.targetId),await W5(c.localStore,a.targetId,!0))}async function zb(t,e,c){const a=xb(t);try{const n=await function(s,i){const o=s2(s),l=Q2.now(),f=i.reduce((d,v)=>d.add(v.key),h2());let u,h;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let v=A3(),V=h2();return o.ss.getEntries(d,f).next(z=>{v=z,v.forEach((H,M)=>{M.isValidDocument()||(V=V.add(H))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,v)).next(z=>{u=z;const H=[];for(const M of i){const N=WL(M,u.get(M.key).overlayedDocument);N!=null&&H.push(new X4(M.key,N,Cl(N.value.mapValue),l3.exists(!0)))}return o.mutationQueue.addMutationBatch(d,l,H,i)}).next(z=>{h=z;const H=z.applyToLocalDocumentSet(u,V);return o.documentOverlayCache.saveOverlays(d,z.batchId,H)})}).then(()=>({batchId:h.batchId,changes:Nl(u)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(n.batchId),function(s,i,o){let l=s.Sa[s.currentUser.toKey()];l||(l=new O2(z2)),l=l.insert(i,o),s.Sa[s.currentUser.toKey()]=l}(a,n.batchId,c),await x0(a,n.changes),await Kt(a.remoteStore)}catch(n){const r=xn(n,"Failed to persist write");c.reject(r)}}async function mf(t,e){const c=s2(t);try{const a=await Dw(c.localStore,e);e.targetChanges.forEach((n,r)=>{const s=c.ya.get(r);s&&(A2(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?s.Ra=!0:n.modifiedDocuments.size>0?A2(s.Ra):n.removedDocuments.size>0&&(A2(s.Ra),s.Ra=!1))}),await x0(c,a,e)}catch(a){await M0(a)}}function N7(t,e,c){const a=s2(t);if(a.isPrimaryClient&&c===0||!a.isPrimaryClient&&c===1){const n=[];a.ma.forEach((r,s)=>{const i=s.view.Q_(e);i.snapshot&&n.push(i.snapshot)}),function(s,i){const o=s2(s);o.onlineState=i;let l=!1;o.queries.forEach((f,u)=>{for(const h of u.listeners)h.Q_(i)&&(l=!0)}),l&&Sn(o)}(a.eventManager,e),n.length&&a.Va.a_(n),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function Cb(t,e,c){const a=s2(t);a.sharedClientState.updateQueryState(e,"rejected",c);const n=a.ya.get(e),r=n&&n.key;if(r){let s=new O2(G.comparator);s=s.insert(r,m1.newNoDocument(r,c2.min()));const i=h2().add(r),o=new jt(c2.min(),new Map,new O2(z2),s,i);await mf(a,o),a.pa=a.pa.remove(r),a.ya.delete(e),An(a)}else await W5(a.localStore,e,!1).then(()=>G5(a,e,c)).catch(M0)}async function Mb(t,e){const c=s2(t),a=e.batch.batchId;try{const n=await Rw(c.localStore,e);vf(c,a,null),pf(c,a),c.sharedClientState.updateMutationState(a,"acknowledged"),await x0(c,n)}catch(n){await M0(n)}}async function yb(t,e,c){const a=s2(t);try{const n=await function(s,i){const o=s2(s);return o.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let f;return o.mutationQueue.lookupMutationBatch(l,i).next(u=>(A2(u!==null),f=u.keys(),o.mutationQueue.removeMutationBatch(l,u))).next(()=>o.mutationQueue.performConsistencyCheck(l)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(l,f,i)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f)).next(()=>o.localDocuments.getDocuments(l,f))})}(a.localStore,e);vf(a,e,c),pf(a,e),a.sharedClientState.updateMutationState(e,"rejected",c),await x0(a,n)}catch(n){await M0(n)}}function pf(t,e){(t.ba.get(e)||[]).forEach(c=>{c.resolve()}),t.ba.delete(e)}function vf(t,e,c){const a=s2(t);let n=a.Sa[a.currentUser.toKey()];if(n){const r=n.get(e);r&&(c?r.reject(c):r.resolve(),n=n.remove(e)),a.Sa[a.currentUser.toKey()]=n}}function G5(t,e,c=null){t.sharedClientState.removeLocalQueryTarget(e);for(const a of t.fa.get(e))t.ma.delete(a),c&&t.Va.Fa(a,c);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(a=>{t.wa.containsKey(a)||gf(t,a)})}function gf(t,e){t.ga.delete(e.path.canonicalString());const c=t.pa.get(e);c!==null&&(cf(t.remoteStore,c),t.pa=t.pa.remove(e),t.ya.delete(c),An(t))}function E7(t,e,c){for(const a of c)a instanceof hf?(t.wa.addReference(a.key,e),_b(t,a)):a instanceof df?(U("SyncEngine","Document no longer in limbo: "+a.key),t.wa.removeReference(a.key,e),t.wa.containsKey(a.key)||gf(t,a.key)):Z()}function _b(t,e){const c=e.key,a=c.path.canonicalString();t.pa.get(c)||t.ga.has(a)||(U("SyncEngine","New document in limbo: "+c),t.ga.add(a),An(t))}function An(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const c=new G(I2.fromString(e)),a=t.Da.next();t.ya.set(a,new pb(c)),t.pa=t.pa.insert(c,a),tf(t.remoteStore,new Z3(o3(vn(c.path)),a,"TargetPurposeLimboResolution",fn._e))}}async function x0(t,e,c){const a=s2(t),n=[],r=[],s=[];a.ma.isEmpty()||(a.ma.forEach((i,o)=>{s.push(a.va(o,e,c).then(l=>{if((l||c)&&a.isPrimaryClient&&a.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){n.push(l);const f=yn.Qi(o.targetId,l);r.push(f)}}))}),await Promise.all(s),a.Va.a_(n),await async function(o,l){const f=s2(o);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(l,h=>x.forEach(h.ki,d=>f.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>x.forEach(h.qi,d=>f.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!y0(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=f.ts.get(h),v=d.snapshotVersion,V=d.withLastLimboFreeSnapshotVersion(v);f.ts=f.ts.insert(h,V)}}}(a.localStore,r))}async function Lb(t,e){const c=s2(t);if(!c.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const a=await Xl(c.localStore,e);c.currentUser=e,function(r,s){r.ba.forEach(i=>{i.forEach(o=>{o.reject(new B(w.CANCELLED,s))})}),r.ba.clear()}(c,"'waitForPendingWrites' promise is rejected due to a user change."),c.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await x0(c,a._s)}}function wb(t,e){const c=s2(t),a=c.ya.get(e);if(a&&a.Ra)return h2().add(a.key);{let n=h2();const r=c.fa.get(e);if(!r)return n;for(const s of r){const i=c.ma.get(s);n=n.unionWith(i.view.ua)}return n}}function bb(t){const e=s2(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cb.bind(null,e),e.Va.a_=ub.bind(null,e.eventManager),e.Va.Fa=hb.bind(null,e.eventManager),e}function xb(t){const e=s2(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yb.bind(null,e),e}class k7{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wt(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,c){return null}createIndexBackfillerScheduler(e,c){return null}createLocalStore(e){return Pw(this.persistence,new kw,e.initialUser,this.serializer)}createPersistence(e){return new Tw(Mn.jr,this.serializer)}createSharedClientState(e){return new $w}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sb{async initialize(e,c){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(c),this.remoteStore=this.createRemoteStore(c),this.eventManager=this.createEventManager(c),this.syncEngine=this.createSyncEngine(c,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>N7(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lb.bind(null,this.syncEngine),await ob(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fb}()}createDatastore(e){const c=Wt(e.databaseInfo.databaseId),a=function(r){return new Gw(r)}(e.databaseInfo);return function(r,s,i,o){return new Yw(r,s,i,o)}(e.authCredentials,e.appCheckCredentials,a,c)}createRemoteStore(e){return function(a,n,r,s,i){return new Jw(a,n,r,s,i)}(this.localStore,this.datastore,e.asyncQueue,c=>N7(this.syncEngine,c,0),function(){return S7.D()?new S7:new qw}())}createSyncEngine(e,c){return function(n,r,s,i,o,l,f){const u=new vb(n,r,s,i,o,l);return f&&(u.Ca=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,c)}terminate(){return async function(c){const a=s2(c);U("RemoteStore","RemoteStore shutting down."),a.C_.add(5),await b0(a),a.F_.shutdown(),a.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):S3("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,c){this.muted||setTimeout(()=>{this.muted||e(c)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,c,a,n){this.authCredentials=e,this.appCheckCredentials=c,this.asyncQueue=a,this.databaseInfo=n,this.user=d1.UNAUTHENTICATED,this.clientId=Hl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(a,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new w3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(c){const a=xn(c,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const c=await t.getConfiguration();await e.initialize(c);let a=c.initialUser;t.setCredentialChangeListener(async n=>{a.isEqual(n)||(await Xl(e.localStore,n),a=n)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function I7(t,e){t.asyncQueue.verifyOperationInProgress();const c=await Nb(t);U("FirestoreClient","Initializing OnlineComponentProvider");const a=await t.getConfiguration();await e.initialize(c,a),t.setCredentialChangeListener(n=>A7(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,r)=>A7(e.remoteStore,r)),t._onlineComponents=e}function Tb(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Nb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const c=e;if(!Tb(c))throw c;A6("Error using user provided cache. Falling back to memory cache: "+c),await Gc(t,new k7)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new k7);return t._offlineComponents}async function Vf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await I7(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await I7(t,new Sb))),t._onlineComponents}function Eb(t){return Vf(t).then(e=>e.syncEngine)}async function zf(t){const e=await Vf(t),c=e.eventManager;return c.onListen=gb.bind(null,e.syncEngine),c.onUnlisten=Vb.bind(null,e.syncEngine),c}function kb(t,e,c={}){const a=new w3;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,i,o,l){const f=new Hf({next:h=>{s.enqueueAndForget(()=>ff(r,u));const d=h.docs.has(i);!d&&h.fromCache?l.reject(new B(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&o&&o.source==="server"?l.reject(new B(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new uf(vn(i.path),f,{includeMetadataChanges:!0,J_:!0});return lf(r,u)}(await zf(t),t.asyncQueue,e,c,a)),a.promise}function Ib(t,e,c={}){const a=new w3;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,i,o,l){const f=new Hf({next:h=>{s.enqueueAndForget(()=>ff(r,u)),h.fromCache&&o.source==="server"?l.reject(new B(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new uf(i,f,{includeMetadataChanges:!0,J_:!0});return lf(r,u)}(await zf(t),t.asyncQueue,e,c,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P7=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e,c){if(!c)throw new B(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pb(t,e,c,a){if(e===!0&&a===!0)throw new B(w.INVALID_ARGUMENT,`${t} and ${c} cannot be used together.`)}function R7(t){if(!G.isDocumentKey(t))throw new B(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D7(t){if(G.isDocumentKey(t))throw new B(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qt(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function u4(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const c=Qt(t);throw new B(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${c}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O7{constructor(e){var c,a;if(e.host===void 0){if(e.ssl!==void 0)throw new B(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(c=e.ssl)===null||c===void 0||c;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cf((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(w.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,n){return a.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yt{constructor(e,c,a,n){this._authCredentials=e,this._appCheckCredentials=c,this._databaseId=a,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O7({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O7(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new aL;switch(a.type){case"firstParty":return new iL(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new B(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=P7.get(c);a&&(U("ComponentProvider","Removing Datastore"),P7.delete(c),a.terminate())}(this),Promise.resolve()}}function Rb(t,e,c,a={}){var n;const r=(t=u4(t,Yt))._getSettings(),s=`${e}:${c}`;if(r.host!=="firestore.googleapis.com"&&r.host!==s&&A6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:s,ssl:!1})),a.mockUserToken){let i,o;if(typeof a.mockUserToken=="string")i=a.mockUserToken,o=d1.MOCK_USER;else{i=AM(a.mockUserToken,(n=t._app)===null||n===void 0?void 0:n.options.projectId);const l=a.mockUserToken.sub||a.mockUserToken.user_id;if(!l)throw new B(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new d1(l)}t._authCredentials=new nL(new gl(i,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e,c,a){this.converter=c,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Z6(this.firestore,e,this._query)}}class x1{constructor(e,c,a){this.converter=c,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new r4(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new x1(this.firestore,e,this._key)}}class r4 extends Z6{constructor(e,c,a){super(e,c,vn(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new x1(this.firestore,null,new G(e))}withConverter(e){return new r4(this.firestore,e,this._path)}}function S0(t,e,...c){if(t=y1(t),Mf("collection","path",e),t instanceof Yt){const a=I2.fromString(e,...c);return D7(a),new r4(t,null,a)}{if(!(t instanceof x1||t instanceof r4))throw new B(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(I2.fromString(e,...c));return D7(a),new r4(t.firestore,null,a)}}function c0(t,e,...c){if(t=y1(t),arguments.length===1&&(e=Hl.newId()),Mf("doc","path",e),t instanceof Yt){const a=I2.fromString(e,...c);return R7(a),new x1(t,null,new G(a))}{if(!(t instanceof x1||t instanceof r4))throw new B(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=t._path.child(I2.fromString(e,...c));return R7(a),new x1(t.firestore,t instanceof r4?t.converter:null,new G(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Zl(this,"async_queue_retry"),this.iu=()=>{const c=Wc();c&&U("AsyncQueue","Visibility state changed to "+c.visibilityState),this.zo.Qo()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const c=Wc();c&&typeof c.removeEventListener=="function"&&c.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const c=new w3;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(c.resolve,c.reject),c.promise)).then(()=>c.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!y0(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const c=this.Ja.then(()=>(this.tu=!0,e().catch(a=>{this.eu=a,this.tu=!1;const n=function(s){let i=s.message||"";return s.stack&&(i=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),i}(a);throw S3("INTERNAL UNHANDLED ERROR: ",n),a}).then(a=>(this.tu=!1,a))));return this.Ja=c,c}enqueueAfterDelay(e,c,a){this.su(),this.ru.indexOf(e)>-1&&(c=0);const n=bn.createAndSchedule(this,e,c,a,r=>this.au(r));return this.Xa.push(n),n}su(){this.eu&&Z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const c of this.Xa)if(c.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((c,a)=>c.targetTimeMs-a.targetTimeMs);for(const c of this.Xa)if(c.skipDelay(),e!=="all"&&c.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const c=this.Xa.indexOf(e);this.Xa.splice(c,1)}}class A0 extends Yt{constructor(e,c,a,n){super(e,c,a,n),this.type="firestore",this._queue=function(){return new Db}(),this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yf(this),this._firestoreClient.terminate()}}function Ob(t,e){const c=typeof t=="object"?t:u9(),a=typeof t=="string"?t:e||"(default)",n=Oa(c,"firestore").getImmediate({identifier:a});if(!n._initialized){const r=xM("firestore");r&&Rb(n,...r)}return n}function Tn(t){return t._firestoreClient||yf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yf(t){var e,c,a;const n=t._freezeSettings(),r=function(i,o,l,f){return new VL(i,o,l,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cf(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ab(t._authCredentials,t._appCheckCredentials,t._queue,r),!((c=n.localCache)===null||c===void 0)&&c._offlineComponentProvider&&(!((a=n.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.localCache.kind,_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P6{constructor(e){this._byteString=e}static fromBase64String(e){try{return new P6(V1.fromBase64String(e))}catch(c){throw new B(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+c)}}static fromUint8Array(e){return new P6(V1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(...e){for(let c=0;c<e.length;++c)if(e[c].length===0)throw new B(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new i1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,c){if(!isFinite(e)||e<-90||e>90)throw new B(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(c)||c<-180||c>180)throw new B(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+c);this._lat=e,this._long=c}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z2(this._lat,e._lat)||z2(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=/^__.*__$/;class Bb{constructor(e,c,a){this.data=e,this.fieldMask=c,this.fieldTransforms=a}toMutation(e,c){return this.fieldMask!==null?new X4(e,this.data,this.fieldMask,c,this.fieldTransforms):new L0(e,this.data,c,this.fieldTransforms)}}function Lf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class kn{constructor(e,c,a,n,r,s){this.settings=e,this.databaseId=c,this.serializer=a,this.ignoreUndefinedProperties=n,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new kn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var c;const a=(c=this.path)===null||c===void 0?void 0:c.child(e),n=this.Tu({path:a,du:!1});return n.Au(e),n}Ru(e){var c;const a=(c=this.path)===null||c===void 0?void 0:c.child(e),n=this.Tu({path:a,du:!1});return n.Pu(),n}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return et(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(c=>e.isPrefixOf(c))!==void 0||this.fieldTransforms.find(c=>e.isPrefixOf(c.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Lf(this.Iu)&&Fb.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Ub{constructor(e,c,a){this.databaseId=e,this.ignoreUndefinedProperties=c,this.serializer=a||Wt(e)}pu(e,c,a,n=!1){return new kn({Iu:e,methodName:c,gu:a,path:i1.emptyPath(),du:!1,fu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wf(t){const e=t._freezeSettings(),c=Wt(t._databaseId);return new Ub(t._databaseId,!!e.ignoreUndefinedProperties,c)}function $b(t,e,c,a,n,r={}){const s=t.pu(r.merge||r.mergeFields?2:0,e,c,n);Sf("Data must be an object, but it was:",s,a);const i=bf(a,s);let o,l;if(r.merge)o=new $1(s.fieldMask),l=s.fieldTransforms;else if(r.mergeFields){const f=[];for(const u of r.mergeFields){const h=jb(e,u,c);if(!s.contains(h))throw new B(w.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Gb(f,h)||f.push(h)}o=new $1(f),l=s.fieldTransforms.filter(u=>o.covers(u.field))}else o=null,l=s.fieldTransforms;return new Bb(new I1(i),o,l)}function qb(t,e,c,a=!1){return In(c,t.pu(a?4:3,e))}function In(t,e){if(xf(t=y1(t)))return Sf("Unsupported field value:",e,t),bf(t,e);if(t instanceof _f)return function(a,n){if(!Lf(n.Iu))throw n.mu(`${a._methodName}() can only be used with update() and set()`);if(!n.path)throw n.mu(`${a._methodName}() is not currently supported inside arrays`);const r=a._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(a,n){const r=[];let s=0;for(const i of a){let o=In(i,n.Vu(s));o==null&&(o={nullValue:"NULL_VALUE"}),r.push(o),s++}return{arrayValue:{values:r}}}(t,e)}return function(a,n){if((a=y1(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return FL(n.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const r=Q2.fromDate(a);return{timestampValue:J8(n.serializer,r)}}if(a instanceof Q2){const r=new Q2(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:J8(n.serializer,r)}}if(a instanceof En)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof P6)return{bytesValue:jl(n.serializer,a._byteString)};if(a instanceof x1){const r=n.databaseId,s=a.firestore._databaseId;if(!s.isEqual(r))throw n.mu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zn(a.firestore._databaseId||n.databaseId,a._key.path)}}throw n.mu(`Unsupported field value: ${Qt(a)}`)}(t,e)}function bf(t,e){const c={};return Vl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Y6(t,(a,n)=>{const r=In(n,e.Eu(a));r!=null&&(c[a]=r)}),{mapValue:{fields:c}}}function xf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Q2||t instanceof En||t instanceof P6||t instanceof x1||t instanceof _f)}function Sf(t,e,c){if(!xf(c)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(c)){const a=Qt(c);throw a==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+a)}}function jb(t,e,c){if((e=y1(e))instanceof Nn)return e._internalPath;if(typeof e=="string")return Af(t,e);throw et("Field path arguments must be of type string or ",t,!1,void 0,c)}const Wb=new RegExp("[~\\*/\\[\\]]");function Af(t,e,c){if(e.search(Wb)>=0)throw et(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,c);try{return new Nn(...e.split("."))._internalPath}catch{throw et(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,c)}}function et(t,e,c,a,n){const r=a&&!a.isEmpty(),s=n!==void 0;let i=`Function ${e}() called with invalid data`;c&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||s)&&(o+=" (found",r&&(o+=` in field ${a}`),s&&(o+=` in document ${n}`),o+=")"),new B(w.INVALID_ARGUMENT,i+t+o)}function Gb(t,e){return t.some(c=>c.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,c,a,n,r){this._firestore=e,this._userDataWriter=c,this._key=a,this._document=n,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new x1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const c=this._document.data.field(Nf("DocumentSnapshot.get",e));if(c!==null)return this._userDataWriter.convertValue(c)}}}class Kb extends Tf{data(){return super.data()}}function Nf(t,e){return typeof e=="string"?Af(t,e):e instanceof Nn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pn{}class Yb extends Pn{}function T0(t,e,...c){let a=[];e instanceof Pn&&a.push(e),a=a.concat(c),function(r){const s=r.filter(o=>o instanceof Dn).length,i=r.filter(o=>o instanceof Rn).length;if(s>1||s>0&&i>0)throw new B(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const n of a)t=n._apply(t);return t}class Rn extends Yb{constructor(e,c,a){super(),this._field=e,this._op=c,this._value=a,this.type="where"}static _create(e,c,a){return new Rn(e,c,a)}_apply(e){const c=this._parse(e);return Ef(e._query,c),new Z6(e.firestore,e.converter,F5(e._query,c))}_parse(e){const c=wf(e.firestore);return function(r,s,i,o,l,f,u){let h;if(l.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){B7(u,f);const d=[];for(const v of u)d.push(F7(o,r,v));h={arrayValue:{values:d}}}else h=F7(o,r,u)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||B7(u,f),h=qb(i,s,u,f==="in"||f==="not-in");return G2.create(l,f,h)}(e._query,"where",c,e.firestore._databaseId,this._field,this._op,this._value)}}class Dn extends Pn{constructor(e,c){super(),this.type=e,this._queryConstraints=c}static _create(e,c){return new Dn(e,c)}_parse(e){const c=this._queryConstraints.map(a=>a._parse(e)).filter(a=>a.getFilters().length>0);return c.length===1?c[0]:X1.create(c,this._getOperator())}_apply(e){const c=this._parse(e);return c.getFilters().length===0?e:(function(n,r){let s=n;const i=r.getFlattenedFilters();for(const o of i)Ef(s,o),s=F5(s,o)}(e._query,c),new Z6(e.firestore,e.converter,F5(e._query,c)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function F7(t,e,c){if(typeof(c=y1(c))=="string"){if(c==="")throw new B(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xl(e)&&c.indexOf("/")!==-1)throw new B(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${c}' contains a '/' character.`);const a=e.path.child(I2.fromString(c));if(!G.isDocumentKey(a))throw new B(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return f7(t,new G(a))}if(c instanceof x1)return f7(t,c._key);throw new B(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qt(c)}.`)}function B7(t,e){if(!Array.isArray(t)||t.length===0)throw new B(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ef(t,e){const c=function(n,r){for(const s of n)for(const i of s.getFlattenedFilters())if(r.indexOf(i.op)>=0)return i.op;return null}(t.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(c!==null)throw c===e.op?new B(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${c.toString()}' filters.`)}class Xb{convertValue(e,c="none"){switch(j4(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,c);case 5:return e.stringValue;case 6:return this.convertBytes(q4(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,c);case 10:return this.convertObject(e.mapValue,c);default:throw Z()}}convertObject(e,c){return this.convertObjectMap(e.fields,c)}convertObjectMap(e,c="none"){const a={};return Y6(e,(n,r)=>{a[n]=this.convertValue(r,c)}),a}convertGeoPoint(e){return new En(W2(e.latitude),W2(e.longitude))}convertArray(e,c){return(e.values||[]).map(a=>this.convertValue(a,c))}convertServerTimestamp(e,c){switch(c){case"previous":const a=hn(e);return a==null?null:this.convertValue(a,c);case"estimate":return this.convertTimestamp(Xe(e));default:return null}}convertTimestamp(e){const c=l4(e);return new Q2(c.seconds,c.nanos)}convertDocumentKey(e,c){const a=I2.fromString(e);A2(Yl(a));const n=new Je(a.get(1),a.get(3)),r=new G(a.popFirst(5));return n.isEqual(c)||S3(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${c.projectId}/${c.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e,c){let a;return a=t?c&&(c.merge||c.mergeFields)?t.toFirestore(e,c):t.toFirestore(e):e,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,c){this.hasPendingWrites=e,this.fromCache=c}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kf extends Tf{constructor(e,c,a,n,r,s){super(e,c,a,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const c=new _8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(c,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,c={}){if(this._document){const a=this._document.data.field(Nf("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,c.serverTimestamps)}}}class _8 extends kf{data(e={}){return super.data(e)}}class Zb{constructor(e,c,a,n){this._firestore=e,this._userDataWriter=c,this._snapshot=n,this.metadata=new ve(n.hasPendingWrites,n.fromCache),this.query=a}get docs(){const e=[];return this.forEach(c=>e.push(c)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,c){this._snapshot.docs.forEach(a=>{e.call(c,new _8(this._firestore,this._userDataWriter,a.key,a,new ve(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const c=!!e.includeMetadataChanges;if(c&&this._snapshot.excludesMetadataChanges)throw new B(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===c||(this._cachedChanges=function(n,r){if(n._snapshot.oldDocs.isEmpty()){let s=0;return n._snapshot.docChanges.map(i=>{const o=new _8(n._firestore,n._userDataWriter,i.doc.key,i.doc,new ve(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);return i.doc,{type:"added",doc:o,oldIndex:-1,newIndex:s++}})}{let s=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(i=>r||i.type!==3).map(i=>{const o=new _8(n._firestore,n._userDataWriter,i.doc.key,i.doc,new ve(n._snapshot.mutatedKeys.has(i.doc.key),n._snapshot.fromCache),n.query.converter);let l=-1,f=-1;return i.type!==0&&(l=s.indexOf(i.doc.key),s=s.delete(i.doc.key)),i.type!==1&&(s=s.add(i.doc),f=s.indexOf(i.doc.key)),{type:ex(i.type),doc:o,oldIndex:l,newIndex:f}})}}(this,c),this._cachedChangesIncludeMetadataChanges=c),this._cachedChanges}}function ex(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){t=u4(t,x1);const e=u4(t.firestore,A0);return kb(Tn(e),t._key).then(c=>cx(e,t,c))}class Pf extends Xb{constructor(e){super(),this.firestore=e}convertBytes(e){return new P6(e)}convertReference(e){const c=this.convertDocumentKey(e,this.firestore._databaseId);return new x1(this.firestore,null,c)}}function N0(t){t=u4(t,Z6);const e=u4(t.firestore,A0),c=Tn(e),a=new Pf(e);return Qb(t._query),Ib(c,t._query).then(n=>new Zb(e,a,t,n))}function Rf(t,e,c){t=u4(t,x1);const a=u4(t.firestore,A0),n=Jb(t.converter,e,c);return Df(a,[$b(wf(a),"setDoc",t._key,n,t.converter!==null,c).toMutation(t._key,l3.none())])}function tx(t){return Df(u4(t.firestore,A0),[new gn(t._key,l3.none())])}function Df(t,e){return function(a,n){const r=new w3;return a.asyncQueue.enqueueAndForget(async()=>zb(await Eb(a),n,r)),r.promise}(Tn(t),e)}function cx(t,e,c){const a=c.docs.get(e._key),n=new Pf(t);return new kf(t,n,e._key,a,new ve(c.hasPendingWrites,c.fromCache),e.converter)}(function(e,c=!0){(function(n){Q6=n})(W6),x6(new B4("firestore",(a,{instanceIdentifier:n,options:r})=>{const s=a.getProvider("app").getImmediate(),i=new A0(new rL(a.getProvider("auth-internal")),new lL(a.getProvider("app-check-internal")),function(l,f){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(l.options.projectId,f)}(s,n),s);return r=Object.assign({useFetchStreams:c},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),n4(s7,"4.4.0",e),n4(s7,"4.4.0","esm2017")})();function On(t,e){var c={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(c[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)e.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(c[a[n]]=t[a[n]]);return c}function Of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ax=Of,Ff=new h0("auth","Firebase",Of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new Ra("@firebase/auth");function nx(t,...e){tt.logLevel<=d2.WARN&&tt.warn(`Auth (${W6}): ${t}`,...e)}function L8(t,...e){tt.logLevel<=d2.ERROR&&tt.error(`Auth (${W6}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,...e){throw Fn(t,...e)}function u3(t,...e){return Fn(t,...e)}function rx(t,e,c){const a=Object.assign(Object.assign({},ax()),{[e]:c});return new h0("auth","Firebase",a).create(e,{appName:t.name})}function Fn(t,...e){if(typeof t!="string"){const c=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=t.name),t._errorFactory.create(c,...a)}return Ff.create(t,...e)}function J(t,e,...c){if(!t)throw Fn(e,...c)}function y3(t){const e="INTERNAL ASSERTION FAILED: "+t;throw L8(e),new Error(e)}function T3(t,e){t||y3(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K5(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sx(){return U7()==="http:"||U7()==="https:"}function U7(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||NM()||"connection"in navigator)?navigator.onLine:!0}function ox(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,c){this.shortDelay=e,this.longDelay=c,T3(c>e,"Short delay should be less than long delay!"),this.isMobile=TM()||EM()}get(){return ix()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){T3(t.emulator,"Emulator should always be set here");const{url:c}=t.emulator;return e?`${c}${e.startsWith("/")?e.slice(1):e}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{static initialize(e,c,a){this.fetchImpl=e,c&&(this.headersImpl=c),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;y3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;y3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;y3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new E0(3e4,6e4);function H4(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function O3(t,e,c,a,n={}){return Uf(t,n,async()=>{let r={},s={};a&&(e==="GET"?s=a:r={body:JSON.stringify(a)});const i=d0(Object.assign({key:t.config.apiKey},s)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),Bf.fetch()($f(t,t.config.apiHost,c,i),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},r))})}async function Uf(t,e,c){t._canInitEmulator=!1;const a=Object.assign(Object.assign({},lx),e);try{const n=new hx(t),r=await Promise.race([c(),n.promise]);n.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw i8(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const i=r.ok?s.errorMessage:s.error.message,[o,l]=i.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw i8(t,"credential-already-in-use",s);if(o==="EMAIL_EXISTS")throw i8(t,"email-already-in-use",s);if(o==="USER_DISABLED")throw i8(t,"user-disabled",s);const f=a[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rx(t,f,l);J1(t,f)}}catch(n){if(n instanceof D3)throw n;J1(t,"network-request-failed",{message:String(n)})}}async function k0(t,e,c,a,n={}){const r=await O3(t,e,c,a,n);return"mfaPendingCredential"in r&&J1(t,"multi-factor-auth-required",{_serverResponse:r}),r}function $f(t,e,c,a){const n=`${e}${c}?${a}`;return t.config.emulator?Bn(t.config,n):`${t.config.apiScheme}://${n}`}function ux(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((c,a)=>{this.timer=setTimeout(()=>a(u3(this.auth,"network-request-failed")),fx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function i8(t,e,c){const a={appName:t.name};c.email&&(a.email=c.email),c.phoneNumber&&(a.phoneNumber=c.phoneNumber);const n=u3(t,e,a);return n.customData._tokenResponse=c,n}function $7(t){return t!==void 0&&t.enterprise!==void 0}class dx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const c of this.recaptchaEnforcementState)if(c.provider&&c.provider===e)return ux(c.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function mx(t,e){return O3(t,"GET","/v2/recaptchaConfig",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){return O3(t,"POST","/v1/accounts:delete",e)}async function vx(t,e){return O3(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gx(t,e=!1){const c=y1(t),a=await c.getIdToken(e),n=Un(a);J(n&&n.exp&&n.auth_time&&n.iat,c.auth,"internal-error");const r=typeof n.firebase=="object"?n.firebase:void 0,s=r==null?void 0:r.sign_in_provider;return{claims:n,token:a,authTime:be(Kc(n.auth_time)),issuedAtTime:be(Kc(n.iat)),expirationTime:be(Kc(n.exp)),signInProvider:s||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Un(t){const[e,c,a]=t.split(".");if(e===void 0||c===void 0||a===void 0)return L8("JWT malformed, contained fewer than 3 sections"),null;try{const n=n9(c);return n?JSON.parse(n):(L8("Failed to decode base64 JWT payload"),null)}catch(n){return L8("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function Hx(t){const e=Un(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R6(t,e,c=!1){if(c)return e;try{return await e}catch(a){throw a instanceof D3&&Vx(a)&&t.auth.currentUser===t&&await t.auth.signOut(),a}}function Vx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var c;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const n=((c=this.user.stsTokenManager.expirationTime)!==null&&c!==void 0?c:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const c=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},c)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,c){this.createdAt=e,this.lastLoginAt=c,this._initializeTime()}_initializeTime(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){var e;const c=t.auth,a=await t.getIdToken(),n=await R6(t,vx(c,{idToken:a}));J(n==null?void 0:n.users.length,c,"internal-error");const r=n.users[0];t._notifyReloadListener(r);const s=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?yx(r.providerUserInfo):[],i=Mx(t.providerData,s),o=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(i!=null&&i.length),f=o?l:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new qf(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Cx(t){const e=y1(t);await ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mx(t,e){return[...t.filter(a=>!e.some(n=>n.providerId===a.providerId)),...e]}function yx(t){return t.map(e=>{var{providerId:c}=e,a=On(e,["providerId"]);return{providerId:c,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e){const c=await Uf(t,{},async()=>{const a=d0({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:r}=t.config,s=$f(t,n,"/v1/token",`key=${r}`),i=await t._getAdditionalHeaders();return i["Content-Type"]="application/x-www-form-urlencoded",Bf.fetch()(s,{method:"POST",headers:i,body:a})});return{accessToken:c.access_token,expiresIn:c.expires_in,refreshToken:c.refresh_token}}async function Lx(t,e){return O3(t,"POST","/v2/accounts:revokeToken",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const c="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,c)}async getToken(e,c=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!c&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,c){const{accessToken:a,refreshToken:n,expiresIn:r}=await _x(e,c);this.updateTokensAndExpiration(a,n,Number(r))}updateTokensAndExpiration(e,c,a){this.refreshToken=c||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,c){const{refreshToken:a,accessToken:n,expirationTime:r}=c,s=new a0;return a&&(J(typeof a=="string","internal-error",{appName:e}),s.refreshToken=a),n&&(J(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),r&&(J(typeof r=="number","internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new a0,this.toJSON())}_performRefresh(){return y3("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U3(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class R4{constructor(e){var{uid:c,auth:a,stsTokenManager:n}=e,r=On(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=c,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const c=await R6(this,this.stsTokenManager.getToken(this.auth,e));return J(c,this.auth,"internal-error"),this.accessToken!==c&&(this.accessToken=c,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),c}getIdTokenResult(e){return gx(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(c=>Object.assign({},c)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const c=new R4(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return c.metadata._copy(this.metadata),c}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,c=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),c&&await ct(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await R6(this,px(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,c){var a,n,r,s,i,o,l,f;const u=(a=c.displayName)!==null&&a!==void 0?a:void 0,h=(n=c.email)!==null&&n!==void 0?n:void 0,d=(r=c.phoneNumber)!==null&&r!==void 0?r:void 0,v=(s=c.photoURL)!==null&&s!==void 0?s:void 0,V=(i=c.tenantId)!==null&&i!==void 0?i:void 0,z=(o=c._redirectEventId)!==null&&o!==void 0?o:void 0,H=(l=c.createdAt)!==null&&l!==void 0?l:void 0,M=(f=c.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:A,isAnonymous:j,providerData:n2,stsTokenManager:f2}=c;J(N&&f2,e,"internal-error");const a2=a0.fromJSON(this.name,f2);J(typeof N=="string",e,"internal-error"),U3(u,e.name),U3(h,e.name),J(typeof A=="boolean",e,"internal-error"),J(typeof j=="boolean",e,"internal-error"),U3(d,e.name),U3(v,e.name),U3(V,e.name),U3(z,e.name),U3(H,e.name),U3(M,e.name);const X=new R4({uid:N,auth:e,email:h,emailVerified:A,displayName:u,isAnonymous:j,photoURL:v,phoneNumber:d,tenantId:V,stsTokenManager:a2,createdAt:H,lastLoginAt:M});return n2&&Array.isArray(n2)&&(X.providerData=n2.map(C2=>Object.assign({},C2))),z&&(X._redirectEventId=z),X}static async _fromIdTokenResponse(e,c,a=!1){const n=new a0;n.updateFromServerResponse(c);const r=new R4({uid:c.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await ct(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q7=new Map;function _3(t){T3(t instanceof Function,"Expected a class definition");let e=q7.get(t);return e?(T3(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q7.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,c){this.storage[e]=c}async _get(e){const c=this.storage[e];return c===void 0?null:c}async _remove(e){delete this.storage[e]}_addListener(e,c){}_removeListener(e,c){}}jf.type="NONE";const j7=jf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w8(t,e,c){return`firebase:${t}:${e}:${c}`}class M6{constructor(e,c,a){this.persistence=e,this.auth=c,this.userKey=a;const{config:n,name:r}=this.auth;this.fullUserKey=w8(this.userKey,n.apiKey,r),this.fullPersistenceKey=w8("persistence",n.apiKey,r),this.boundEventHandler=c._onStorageEvent.bind(c),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?R4._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const c=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,c)return this.setCurrentUser(c)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,c,a="authUser"){if(!c.length)return new M6(_3(j7),e,a);const n=(await Promise.all(c.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=n[0]||_3(j7);const s=w8(a,e.config.apiKey,e.name);let i=null;for(const l of c)try{const f=await l._get(s);if(f){const u=R4._fromJSON(e,f);l!==r&&(i=u),r=l;break}}catch{}const o=n.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!o.length?new M6(r,e,a):(r=o[0],i&&await r._set(s,i.toJSON()),await Promise.all(c.map(async l=>{if(l!==r)try{await l._remove(s)}catch{}})),new M6(r,e,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W7(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yf(e))return"Blackberry";if(Xf(e))return"Webos";if($n(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(Qf(e))return"Android";{const c=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=t.match(c);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Wf(t=H1()){return/firefox\//i.test(t)}function $n(t=H1()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(t=H1()){return/crios\//i.test(t)}function Kf(t=H1()){return/iemobile/i.test(t)}function Qf(t=H1()){return/android/i.test(t)}function Yf(t=H1()){return/blackberry/i.test(t)}function Xf(t=H1()){return/webos/i.test(t)}function Xt(t=H1()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wx(t=H1()){var e;return Xt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bx(){return kM()&&document.documentMode===10}function Jf(t=H1()){return Xt(t)||Qf(t)||Xf(t)||Yf(t)||/windows phone/i.test(t)||Kf(t)}function xx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e=[]){let c;switch(t){case"Browser":c=W7(H1());break;case"Worker":c=`${W7(H1())}-${t}`;break;default:c=t}const a=e.length?e.join(","):"FirebaseCore-web";return`${c}/JsCore/${W6}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,c){const a=r=>new Promise((s,i)=>{try{const o=e(r);s(o)}catch(o){i(o)}});a.onAbort=c,this.queue.push(a);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const c=[];try{for(const a of this.queue)await a(e),a.onAbort&&c.push(a.onAbort)}catch(a){c.reverse();for(const n of c)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e={}){return O3(t,"GET","/v2/passwordPolicy",H4(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=6;class Nx{constructor(e){var c,a,n,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(c=s.minPasswordLength)!==null&&c!==void 0?c:Tx,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var c,a,n,r,s,i;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(c=o.meetsMinPasswordLength)!==null&&c!==void 0?c:!0),o.isValid&&(o.isValid=(a=o.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(n=o.containsLowercaseLetter)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(r=o.containsUppercaseLetter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(s=o.containsNumericCharacter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(i=o.containsNonAlphanumericCharacter)!==null&&i!==void 0?i:!0),o}validatePasswordLengthOptions(e,c){const a=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;a&&(c.meetsMinPasswordLength=e.length>=a),n&&(c.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,c){this.updatePasswordCharacterOptionsStatuses(c,!1,!1,!1,!1);let a;for(let n=0;n<e.length;n++)a=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(c,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,c,a,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=c)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,c,a,n){this.app=e,this.heartbeatServiceProvider=c,this.appCheckServiceProvider=a,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G7(this),this.idTokenSubscription=new G7(this),this.beforeStateQueue=new Sx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ff,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,c){return c&&(this._popupRedirectResolver=_3(c)),this._initializationPromise=this.queue(async()=>{var a,n;if(!this._deleted&&(this.persistenceManager=await M6.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(c),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var c;const a=await this.assertedPersistence.getCurrentUser();let n=a,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId,i=n==null?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o!=null&&o.user)&&(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let c=null;try{c=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return c}async reloadAndSetCurrentUserOrClear(e){try{await ct(e)}catch(c){if((c==null?void 0:c.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ox()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const c=e?y1(e):null;return c&&J(c.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(c&&c._clone(this))}async _updateCurrentUser(e,c=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),c||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_3(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const c=this._getPasswordPolicyInternal();return c.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):c.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ax(this),c=new Nx(e);this.tenantId===null?this._projectPasswordPolicy=c:this._tenantPasswordPolicies[this.tenantId]=c}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new h0("auth","Firebase",e())}onAuthStateChanged(e,c,a){return this.registerStateListener(this.authStateSubscription,e,c,a)}beforeAuthStateChanged(e,c){return this.beforeStateQueue.pushCallback(e,c)}onIdTokenChanged(e,c,a){return this.registerStateListener(this.idTokenSubscription,e,c,a)}authStateReady(){return new Promise((e,c)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},c)}})}async revokeAccessToken(e){if(this.currentUser){const c=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:c};this.tenantId!=null&&(a.tenantId=this.tenantId),await Lx(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,c){const a=await this.getOrInitRedirectPersistenceManager(c);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const c=e&&_3(e)||this._popupRedirectResolver;J(c,this,"argument-error"),this.redirectPersistenceManager=await M6.create(this,[_3(c._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var c,a;return this._isInitialized&&await this.queue(async()=>{}),((c=this._currentUser)===null||c===void 0?void 0:c._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,c;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(c=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&c!==void 0?c:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,c,a,n){if(this._deleted)return()=>{};const r=typeof c=="function"?c:c.next.bind(c);let s=!1;const i=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(i,this,"internal-error"),i.then(()=>{s||r(this.currentUser)}),typeof c=="function"){const o=e.addObserver(c,a,n);return()=>{s=!0,o()}}else{const o=e.addObserver(c);return()=>{s=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const c={"X-Client-Version":this.clientVersion};this.app.options.appId&&(c["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(c["X-Firebase-Client"]=a);const n=await this._getAppCheckToken();return n&&(c["X-Firebase-AppCheck"]=n),c}async _getAppCheckToken(){var e;const c=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return c!=null&&c.error&&nx(`Error while retrieving App Check token: ${c.error}`),c==null?void 0:c.token}}function Z4(t){return y1(t)}class G7{constructor(e){this.auth=e,this.observer=null,this.addObserver=BM(c=>this.observer=c)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eu(t){return new Promise((e,c)=>{const a=document.createElement("script");a.setAttribute("src",t),a.onload=e,a.onerror=n=>{const r=u3("internal-error");r.customData=n,c(r)},a.type="text/javascript",a.charset="UTF-8",kx().appendChild(a)})}function Ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Px="https://www.google.com/recaptcha/enterprise.js?render=",Rx="recaptcha-enterprise",Dx="NO_RECAPTCHA";class Ox{constructor(e){this.type=Rx,this.auth=Z4(e)}async verify(e="verify",c=!1){async function a(r){if(!c){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(s,i)=>{mx(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)i(new Error("recaptcha Enterprise site key undefined"));else{const l=new dx(o);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,s(l.siteKey)}}).catch(o=>{i(o)})})}function n(r,s,i){const o=window.grecaptcha;$7(o)?o.enterprise.ready(()=>{o.enterprise.execute(r,{action:e}).then(l=>{s(l)}).catch(()=>{s(Dx)})}):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,s)=>{a(this.auth).then(i=>{if(!c&&$7(window.grecaptcha))n(i,r,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}eu(Px+i).then(()=>{n(i,r,s)}).catch(o=>{s(o)})}}).catch(i=>{s(i)})})}}async function K7(t,e,c,a=!1){const n=new Ox(t);let r;try{r=await n.verify(c)}catch{r=await n.verify(c,!0)}const s=Object.assign({},e);return a?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Q5(t,e,c,a){var n;if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await K7(t,e,c,c==="getOobCode");return a(t,r)}else return a(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${c} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await K7(t,e,c,c==="getOobCode");return a(t,s)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t,e){const c=Oa(t,"auth");if(c.isInitialized()){const n=c.getImmediate(),r=c.getOptions();if(O8(r,e??{}))return n;J1(n,"already-initialized")}return c.initialize({options:e})}function Bx(t,e){const c=(e==null?void 0:e.persistence)||[],a=(Array.isArray(c)?c:[c]).map(_3);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function Ux(t,e,c){const a=Z4(t);J(a._canInitEmulator,a,"emulator-config-failed"),J(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const n=!!(c!=null&&c.disableWarnings),r=tu(e),{host:s,port:i}=$x(e),o=i===null?"":`:${i}`;a.config.emulator={url:`${r}//${s}${o}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:s,port:i,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||qx()}function tu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $x(t){const e=tu(t),c=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!c)return{host:"",port:null};const a=c[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(a);if(n){const r=n[1];return{host:r,port:Q7(a.substr(r.length+1))}}else{const[r,s]=a.split(":");return{host:r,port:Q7(s)}}}function Q7(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qx(){function t(){const e=document.createElement("p"),c=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",c.position="fixed",c.width="100%",c.backgroundColor="#ffffff",c.border=".1em solid #000000",c.color="#b50000",c.bottom="0px",c.left="0px",c.margin="0px",c.zIndex="10000",c.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,c){this.providerId=e,this.signInMethod=c}toJSON(){return y3("not implemented")}_getIdTokenResponse(e){return y3("not implemented")}_linkToIdToken(e,c){return y3("not implemented")}_getReauthenticationResolver(e){return y3("not implemented")}}async function jx(t,e){return O3(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(t,e){return k0(t,"POST","/v1/accounts:signInWithPassword",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){return k0(t,"POST","/v1/accounts:signInWithEmailLink",H4(t,e))}async function Kx(t,e){return k0(t,"POST","/v1/accounts:signInWithEmailLink",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends qn{constructor(e,c,a,n=null){super("password",a),this._email=e,this._password=c,this._tenantId=n}static _fromEmailAndPassword(e,c){return new n0(e,c,"password")}static _fromEmailAndCode(e,c,a=null){return new n0(e,c,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e;if(c!=null&&c.email&&(c!=null&&c.password)){if(c.signInMethod==="password")return this._fromEmailAndPassword(c.email,c.password);if(c.signInMethod==="emailLink")return this._fromEmailAndCode(c.email,c.password,c.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const c={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Q5(e,c,"signInWithPassword",Wx);case"emailLink":return Gx(e,{email:this._email,oobCode:this._password});default:J1(e,"internal-error")}}async _linkToIdToken(e,c){switch(this.signInMethod){case"password":const a={idToken:c,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Q5(e,a,"signUpPassword",jx);case"emailLink":return Kx(e,{idToken:c,email:this._email,oobCode:this._password});default:J1(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y6(t,e){return k0(t,"POST","/v1/accounts:signInWithIdp",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx="http://localhost";class W4 extends qn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const c=new W4(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(c.idToken=e.idToken),e.accessToken&&(c.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(c.nonce=e.nonce),e.pendingToken&&(c.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(c.accessToken=e.oauthToken,c.secret=e.oauthTokenSecret):J1("argument-error"),c}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const c=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:n}=c,r=On(c,["providerId","signInMethod"]);if(!a||!n)return null;const s=new W4(a,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const c=this.buildRequest();return y6(e,c)}_linkToIdToken(e,c){const a=this.buildRequest();return a.idToken=c,y6(e,a)}_getReauthenticationResolver(e){const c=this.buildRequest();return c.autoCreate=!1,y6(e,c)}buildRequest(){const e={requestUri:Qx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const c={};this.idToken&&(c.id_token=this.idToken),this.accessToken&&(c.access_token=this.accessToken),this.secret&&(c.oauth_token_secret=this.secret),c.providerId=this.providerId,this.nonce&&!this.pendingToken&&(c.nonce=this.nonce),e.postBody=d0(c)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xx(t){const e=fe(ue(t)).link,c=e?fe(ue(e)).deep_link_id:null,a=fe(ue(t)).deep_link_id;return(a?fe(ue(a)).link:null)||a||c||e||t}class jn{constructor(e){var c,a,n,r,s,i;const o=fe(ue(e)),l=(c=o.apiKey)!==null&&c!==void 0?c:null,f=(a=o.oobCode)!==null&&a!==void 0?a:null,u=Yx((n=o.mode)!==null&&n!==void 0?n:null);J(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(r=o.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(s=o.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(i=o.tenantId)!==null&&i!==void 0?i:null}static parseLink(e){const c=Xx(e);try{return new jn(c)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.providerId=ee.PROVIDER_ID}static credential(e,c){return n0._fromEmailAndPassword(e,c)}static credentialWithLink(e,c){const a=jn.parseLink(c);return J(a,"argument-error"),n0._fromEmailAndCode(e,a.code,a.tenantId)}}ee.PROVIDER_ID="password";ee.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ee.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3 extends I0{constructor(){super("facebook.com")}static credential(e){return W4._fromParams({providerId:Q3.PROVIDER_ID,signInMethod:Q3.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q3.credentialFromTaggedObject(e)}static credentialFromError(e){return Q3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q3.credential(e.oauthAccessToken)}catch{return null}}}Q3.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q3.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3 extends I0{constructor(){super("google.com"),this.addScope("profile")}static credential(e,c){return W4._fromParams({providerId:Y3.PROVIDER_ID,signInMethod:Y3.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:c})}static credentialFromResult(e){return Y3.credentialFromTaggedObject(e)}static credentialFromError(e){return Y3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:c,oauthAccessToken:a}=e;if(!c&&!a)return null;try{return Y3.credential(c,a)}catch{return null}}}Y3.GOOGLE_SIGN_IN_METHOD="google.com";Y3.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3 extends I0{constructor(){super("github.com")}static credential(e){return W4._fromParams({providerId:X3.PROVIDER_ID,signInMethod:X3.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return X3.credentialFromTaggedObject(e)}static credentialFromError(e){return X3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return X3.credential(e.oauthAccessToken)}catch{return null}}}X3.GITHUB_SIGN_IN_METHOD="github.com";X3.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3 extends I0{constructor(){super("twitter.com")}static credential(e,c){return W4._fromParams({providerId:J3.PROVIDER_ID,signInMethod:J3.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:c})}static credentialFromResult(e){return J3.credentialFromTaggedObject(e)}static credentialFromError(e){return J3.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:c,oauthTokenSecret:a}=e;if(!c||!a)return null;try{return J3.credential(c,a)}catch{return null}}}J3.TWITTER_SIGN_IN_METHOD="twitter.com";J3.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e){return k0(t,"POST","/v1/accounts:signUp",H4(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,c,a,n=!1){const r=await R4._fromIdTokenResponse(e,a,n),s=Y7(a);return new G4({user:r,providerId:s,_tokenResponse:a,operationType:c})}static async _forOperation(e,c,a){await e._updateTokensIfNecessary(a,!0);const n=Y7(a);return new G4({user:e,providerId:n,_tokenResponse:a,operationType:c})}}function Y7(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends D3{constructor(e,c,a,n){var r;super(c.code,c.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:c.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,c,a,n){return new at(e,c,a,n)}}function au(t,e,c,a){return(e==="reauthenticate"?c._getReauthenticationResolver(t):c._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?at._fromErrorAndOperation(t,r,e,a):r})}async function Zx(t,e,c=!1){const a=await R6(t,e._linkToIdToken(t.auth,await t.getIdToken()),c);return G4._forOperation(t,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e,c=!1){const{auth:a}=t,n="reauthenticate";try{const r=await R6(t,au(a,n,e,t),c);J(r.idToken,a,"internal-error");const s=Un(r.idToken);J(s,a,"internal-error");const{sub:i}=s;return J(t.uid===i,a,"user-mismatch"),G4._forOperation(t,n,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&J1(a,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t,e,c=!1){const a="signIn",n=await au(t,a,e),r=await G4._fromIdTokenResponse(t,a,n);return c||await t._updateCurrentUser(r.user),r}async function tS(t,e){return nu(Z4(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ru(t){const e=Z4(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cS(t,e,c){const a=Z4(t),s=await Q5(a,{returnSecureToken:!0,email:e,password:c,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jx).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&ru(t),o}),i=await G4._fromIdTokenResponse(a,"signIn",s);return await a._updateCurrentUser(i.user),i}function aS(t,e,c){return tS(y1(t),ee.credential(e,c)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ru(t),a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(t,e){return O3(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,{displayName:e,photoURL:c}){if(e===void 0&&c===void 0)return;const a=y1(t),r={idToken:await a.getIdToken(),displayName:e,photoUrl:c,returnSecureToken:!0},s=await R6(a,nS(a.auth,r));a.displayName=s.displayName||null,a.photoURL=s.photoUrl||null;const i=a.providerData.find(({providerId:o})=>o==="password");i&&(i.displayName=a.displayName,i.photoURL=a.photoURL),await a._updateTokensIfNecessary(s)}function sS(t,e,c,a){return y1(t).onIdTokenChanged(e,c,a)}function iS(t,e,c){return y1(t).beforeAuthStateChanged(e,c)}function oS(t){return y1(t).signOut()}const nt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,c){this.storageRetriever=e,this.type=c}_isAvailable(){try{return this.storage?(this.storage.setItem(nt,"1"),this.storage.removeItem(nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,c){return this.storage.setItem(e,JSON.stringify(c)),Promise.resolve()}_get(e){const c=this.storage.getItem(e);return Promise.resolve(c?JSON.parse(c):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(){const t=H1();return $n(t)||Xt(t)}const fS=1e3,uS=10;class iu extends su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,c)=>this.onStorageEvent(e,c),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lS()&&xx(),this.fallbackToPolling=Jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const c of Object.keys(this.listeners)){const a=this.storage.getItem(c),n=this.localCache[c];a!==n&&e(c,n,a)}}onStorageEvent(e,c=!1){if(!e.key){this.forAllChangedKeys((s,i,o)=>{this.notifyListeners(s,o)});return}const a=e.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(a);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!c)return}const n=()=>{const s=this.storage.getItem(a);!c&&this.localCache[a]===s||this.notifyListeners(a,s)},r=this.storage.getItem(a);bx()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,uS):n()}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(c&&JSON.parse(c))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,c,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:c,newValue:a}),!0)})},fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,c){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,c){await super._set(e,c),this.localCache[e]=JSON.stringify(c)}async _get(e){const c=await super._get(e);return this.localCache[e]=JSON.stringify(c),c}async _remove(e){await super._remove(e),delete this.localCache[e]}}iu.type="LOCAL";const hS=iu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,c){}_removeListener(e,c){}}ou.type="SESSION";const lu=ou;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(c){return{fulfilled:!1,reason:c}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const c=this.receivers.find(n=>n.isListeningto(e));if(c)return c;const a=new Jt(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const c=e,{eventId:a,eventType:n,data:r}=c.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;c.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const i=Array.from(s).map(async l=>l(c.origin,r)),o=await dS(i);c.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:o})}_subscribe(e,c){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(c)}_unsubscribe(e,c){this.handlersMap[e]&&c&&this.handlersMap[e].delete(c),(!c||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t="",e=10){let c="";for(let a=0;a<e;a++)c+=Math.floor(Math.random()*10);return t+c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,c,a=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise((i,o)=>{const l=Wn("",20);n.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},a);s={messageChannel:n,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),i(h.data.response);break;default:clearTimeout(f),clearTimeout(r),o(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:c},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(){return window}function pS(t){h3().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return typeof h3().WorkerGlobalScope<"u"&&typeof h3().importScripts=="function"}async function vS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HS(){return fu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="firebaseLocalStorageDb",VS=1,rt="firebaseLocalStorage",hu="fbase_key";class P0{constructor(e){this.request=e}toPromise(){return new Promise((e,c)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{c(this.request.error)})})}}function Zt(t,e){return t.transaction([rt],e?"readwrite":"readonly").objectStore(rt)}function zS(){const t=indexedDB.deleteDatabase(uu);return new P0(t).toPromise()}function Y5(){const t=indexedDB.open(uu,VS);return new Promise((e,c)=>{t.addEventListener("error",()=>{c(t.error)}),t.addEventListener("upgradeneeded",()=>{const a=t.result;try{a.createObjectStore(rt,{keyPath:hu})}catch(n){c(n)}}),t.addEventListener("success",async()=>{const a=t.result;a.objectStoreNames.contains(rt)?e(a):(a.close(),await zS(),e(await Y5()))})})}async function X7(t,e,c){const a=Zt(t,!0).put({[hu]:e,value:c});return new P0(a).toPromise()}async function CS(t,e){const c=Zt(t,!1).get(e),a=await new P0(c).toPromise();return a===void 0?null:a.value}function J7(t,e){const c=Zt(t,!0).delete(e);return new P0(c).toPromise()}const MS=800,yS=3;class du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Y5(),this.db)}async _withRetries(e){let c=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(c++>yS)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jt._getInstance(HS()),this.receiver._subscribe("keyChanged",async(e,c)=>({keyProcessed:(await this._poll()).includes(c.key)})),this.receiver._subscribe("ping",async(e,c)=>["keyChanged"])}async initializeSender(){var e,c;if(this.activeServiceWorker=await vS(),!this.activeServiceWorker)return;this.sender=new mS(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((c=a[0])===null||c===void 0)&&c.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Y5();return await X7(e,nt,"1"),await J7(e,nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,c){return this._withPendingWrite(async()=>(await this._withRetries(a=>X7(a,e,c)),this.localCache[e]=c,this.notifyServiceWorker(e)))}async _get(e){const c=await this._withRetries(a=>CS(a,e));return this.localCache[e]=c,c}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(c=>J7(c,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const r=Zt(n,!1).getAll();return new P0(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const c=[],a=new Set;for(const{fbase_key:n,value:r}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),c.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),c.push(n));return c}notifyListeners(e,c){this.localCache[e]=c;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(c)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,c){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(c)}_removeListener(e,c){this.listeners[e]&&(this.listeners[e].delete(c),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}du.type="LOCAL";const _S=du;new E0(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t,e){return e?_3(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends qn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return y6(e,this._buildIdpRequest())}_linkToIdToken(e,c){return y6(e,this._buildIdpRequest(c))}_getReauthenticationResolver(e){return y6(e,this._buildIdpRequest())}_buildIdpRequest(e){const c={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(c.idToken=e),c}}function wS(t){return nu(t.auth,new Gn(t),t.bypassAuthState)}function bS(t){const{auth:e,user:c}=t;return J(c,e,"internal-error"),eS(c,new Gn(t),t.bypassAuthState)}async function xS(t){const{auth:e,user:c}=t;return J(c,e,"internal-error"),Zx(c,new Gn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,c,a,n,r=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(c)?c:[c]}execute(){return new Promise(async(e,c)=>{this.pendingPromise={resolve:e,reject:c};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:c,sessionId:a,postBody:n,tenantId:r,error:s,type:i}=e;if(s){this.reject(s);return}const o={auth:this.auth,requestUri:c,sessionId:a,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(i)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wS;case"linkViaPopup":case"linkViaRedirect":return xS;case"reauthViaPopup":case"reauthViaRedirect":return bS;default:J1(this.auth,"internal-error")}}resolve(e){T3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T3(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new E0(2e3,1e4);class h6 extends mu{constructor(e,c,a,n,r){super(e,c,n,r),this.provider=a,this.authWindow=null,this.pollId=null,h6.currentPopupAction&&h6.currentPopupAction.cancel(),h6.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){T3(this.filter.length===1,"Popup operations only handle one event");const e=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(c=>{this.reject(c)}),this.resolver._isIframeWebStorageSupported(this.auth,c=>{c||this.reject(u3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(u3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,h6.currentPopupAction=null}pollUserCancellation(){const e=()=>{var c,a;if(!((a=(c=this.authWindow)===null||c===void 0?void 0:c.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(u3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SS.get())};e()}}h6.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="pendingRedirect",b8=new Map;class TS extends mu{constructor(e,c,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],c,void 0,a),this.eventId=null}async execute(){let e=b8.get(this.auth._key());if(!e){try{const a=await NS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(c){e=()=>Promise.reject(c)}b8.set(this.auth._key(),e)}return this.bypassAuthState||b8.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const c=await this.auth._redirectUserForId(e.eventId);if(c)return this.user=c,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NS(t,e){const c=IS(e),a=kS(t);if(!await a._isAvailable())return!1;const n=await a._get(c)==="true";return await a._remove(c),n}function ES(t,e){b8.set(t._key(),e)}function kS(t){return _3(t._redirectPersistence)}function IS(t){return w8(AS,t.config.apiKey,t.name)}async function PS(t,e,c=!1){const a=Z4(t),n=LS(a,e),s=await new TS(a,n,c).execute();return s&&!c&&(delete s.user._redirectEventId,await a._persistUserIfCurrent(s.user),await a._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=10*60*1e3;class DS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let c=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(c=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OS(e)||(this.hasHandledPotentialRedirect=!0,c||(this.queuedRedirectEvent=e,c=!0)),c}sendToConsumer(e,c){var a;if(e.error&&!pu(e)){const n=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";c.onError(u3(this.auth,n))}else c.onAuthEvent(e)}isEventForConsumer(e,c){const a=c.eventId===null||!!e.eventId&&e.eventId===c.eventId;return c.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z7(e))}saveEventToCache(e){this.cachedEventUids.add(Z7(e)),this.lastProcessedEventTime=Date.now()}}function Z7(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t,e={}){return O3(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function $S(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FS(t);for(const c of e)try{if(qS(c))return}catch{}J1(t,"unauthorized-domain")}function qS(t){const e=K5(),{protocol:c,hostname:a}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&a===""?c==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):c==="chrome-extension:"&&s.hostname===a}if(!US.test(c))return!1;if(BS.test(t))return a===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new E0(3e4,6e4);function ei(){const t=h3().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let c=0;c<t.CP.length;c++)t.CP[c]=null}}function WS(t){return new Promise((e,c)=>{var a,n,r;function s(){ei(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ei(),c(u3(t,"network-request-failed"))},timeout:jS.get()})}if(!((n=(a=h3().gapi)===null||a===void 0?void 0:a.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((r=h3().gapi)===null||r===void 0)&&r.load)s();else{const i=Ix("iframefcb");return h3()[i]=()=>{gapi.load?s():c(u3(t,"network-request-failed"))},eu(`https://apis.google.com/js/api.js?onload=${i}`).catch(o=>c(o))}}).catch(e=>{throw x8=null,e})}let x8=null;function GS(t){return x8=x8||WS(t),x8}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=new E0(5e3,15e3),QS="__/auth/iframe",YS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const c=e.emulator?Bn(e,YS):`https://${t.config.authDomain}/${QS}`,a={apiKey:e.apiKey,appName:t.name,v:W6},n=JS.get(t.config.apiHost);n&&(a.eid=n);const r=t._getFrameworks();return r.length&&(a.fw=r.join(",")),`${c}?${d0(a).slice(1)}`}async function eA(t){const e=await GS(t),c=h3().gapi;return J(c,t,"internal-error"),e.open({where:document.body,url:ZS(t),messageHandlersFilter:c.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},a=>new Promise(async(n,r)=>{await a.restyle({setHideOnLeave:!1});const s=u3(t,"network-request-failed"),i=h3().setTimeout(()=>{r(s)},KS.get());function o(){h3().clearTimeout(i),n(a)}a.ping(o).then(o,()=>{r(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cA=500,aA=600,nA="_blank",rA="http://localhost";class ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sA(t,e,c,a=cA,n=aA){const r=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString();let i="";const o=Object.assign(Object.assign({},tA),{width:a.toString(),height:n.toString(),top:r,left:s}),l=H1().toLowerCase();c&&(i=Gf(l)?nA:c),Wf(l)&&(e=e||rA,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[d,v])=>`${h}${d}=${v},`,"");if(wx(l)&&i!=="_self")return iA(e||"",i),new ti(null);const u=window.open(e||"",i,f);J(u,t,"popup-blocked");try{u.focus()}catch{}return new ti(u)}function iA(t,e){const c=document.createElement("a");c.href=t,c.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),c.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="__/auth/handler",lA="emulator/auth/handler",fA=encodeURIComponent("fac");async function ci(t,e,c,a,n,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:c,redirectUrl:a,v:W6,eventId:n};if(e instanceof cu){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",FM(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(r||{}))s[f]=u}if(e instanceof I0){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const i=s;for(const f of Object.keys(i))i[f]===void 0&&delete i[f];const o=await t._getAppCheckToken(),l=o?`#${fA}=${encodeURIComponent(o)}`:"";return`${uA(t)}?${d0(i).slice(1)}${l}`}function uA({config:t}){return t.emulator?Bn(t,lA):`https://${t.authDomain}/${oA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class hA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=PS,this._overrideRedirectResult=ES}async _openPopup(e,c,a,n){var r;T3((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await ci(e,c,a,K5(),n);return sA(e,s,Wn())}async _openRedirect(e,c,a,n){await this._originValidation(e);const r=await ci(e,c,a,K5(),n);return pS(r),new Promise(()=>{})}_initialize(e){const c=e._key();if(this.eventManagers[c]){const{manager:n,promise:r}=this.eventManagers[c];return n?Promise.resolve(n):(T3(r,"If manager is not set, promise should be"),r)}const a=this.initAndGetManager(e);return this.eventManagers[c]={promise:a},a.catch(()=>{delete this.eventManagers[c]}),a}async initAndGetManager(e){const c=await eA(e),a=new DS(e);return c.register("authEvent",n=>(J(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:a.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=c,a}_isIframeWebStorageSupported(e,c){this.iframes[e._key()].send(Qc,{type:Qc},n=>{var r;const s=(r=n==null?void 0:n[0])===null||r===void 0?void 0:r[Qc];s!==void 0&&c(!!s),J1(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const c=e._key();return this.originValidationPromises[c]||(this.originValidationPromises[c]=$S(e)),this.originValidationPromises[c]}get _shouldInitProactively(){return Jf()||$n()||Xt()}}const dA=hA;var ai="@firebase/auth",ni="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const c=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,c),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const c=this.internalListeners.get(e);c&&(this.internalListeners.delete(e),c(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vA(t){x6(new B4("auth",(e,{options:c})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:i}=a.options;J(s&&!s.includes(":"),"invalid-api-key",{appName:a.name});const o={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(t)},l=new Ex(a,n,r,o);return Bx(l,c),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,c,a)=>{e.getProvider("auth-internal").initialize()})),x6(new B4("auth-internal",e=>{const c=Z4(e.getProvider("auth").getImmediate());return(a=>new mA(a))(c)},"PRIVATE").setInstantiationMode("EXPLICIT")),n4(ai,ni,pA(t)),n4(ai,ni,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=5*60,HA=i9("authIdTokenMaxAge")||gA;let ri=null;const VA=t=>async e=>{const c=e&&await e.getIdTokenResult(),a=c&&(new Date().getTime()-Date.parse(c.issuedAtTime))/1e3;if(a&&a>HA)return;const n=c==null?void 0:c.token;ri!==n&&(ri=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function zA(t=u9()){const e=Oa(t,"auth");if(e.isInitialized())return e.getImmediate();const c=Fx(t,{popupRedirectResolver:dA,persistence:[_S,hS,lu]}),a=i9("authTokenSyncURL");if(a){const r=VA(a);iS(c,r,()=>r(c.currentUser)),sS(c,s=>r(s))}const n=r9("auth");return n&&Ux(c,`http://${n}`),c}vA("Browser");const CA={apiKey:"AIzaSyCoIDges9G-L-bCTpM7mPjyKYiYxku6MRw",authDomain:"hotel-room-486a8.firebaseapp.com",projectId:"hotel-room-486a8",storageBucket:"hotel-room-486a8.appspot.com",messagingSenderId:"951781063316",appId:"1:951781063316:web:e7702796a289df6cbcd281"},MA=f9(CA),d3=Ob(MA),R1=zA();const f1=(t,e)=>{const c=t.__vccOpts||t;for(const[a,n]of e)c[a]=n;return c},yA={data(){return{isLoggedAccount:!1,loggedUser:null}},watch:{loggedUser(t){console.log(t?"Is logged":"Is not logged")}},created(){R1.onAuthStateChanged(t=>{this.loggedUser=t})}},vu=t=>(I3("data-v-c407d364"),t=t(),P3(),t),_A={class:"siteName"},LA=vu(()=>C("span",{class:"logoHotel"},"Hotel",-1)),wA=vu(()=>C("span",{class:"logoRoom"},"Room",-1)),bA={key:0},xA={key:1},SA={key:2},AA={key:3},TA={key:4};function NA(t,e,c,a,n,r){const s=Q1("router-link"),i=Q1("fa");return R(),D("nav",null,[C("p",_A,[_2(s,{to:"/",class:"logo"},{default:V3(()=>[LA,wA]),_:1})]),C("ul",null,[C("li",null,[_2(s,{to:"/hotels",class:"hotels"},{default:V3(()=>[B1(" Hotels ")]),_:1})]),n.loggedUser?(R(),D("li",bA,[_2(s,{to:"/my-bookings"},{default:V3(()=>[B1(" My Bookings ")]),_:1})])):L4("",!0),n.loggedUser?(R(),D("li",xA,[_2(s,{to:"/list-property"},{default:V3(()=>[B1(" List Property ")]),_:1})])):L4("",!0),n.loggedUser?(R(),D("li",SA,[_2(s,{to:"/profile"},{default:V3(()=>[_2(i,{icon:"user-circle"})]),_:1})])):L4("",!0),n.loggedUser?L4("",!0):(R(),D("li",AA,[_2(s,{to:"/log-in"},{default:V3(()=>[B1(" Log In ")]),_:1})])),n.loggedUser?L4("",!0):(R(),D("li",TA,[_2(s,{to:"/register"},{default:V3(()=>[B1(" Register ")]),_:1})]))])])}const EA=f1(yA,[["render",NA],["__scopeId","data-v-c407d364"]]);const kA={data(){return{}}};function IA(t,e,c,a,n,r){const s=Q1("router-link");return R(),D("nav",null,[C("div",null,[_2(s,{to:"/contact-us"},{default:V3(()=>[B1(" Contact Us ")]),_:1})])])}const PA=f1(kA,[["render",IA],["__scopeId","data-v-d36f11df"]]);const RA={components:{Navbar:EA,Footer:PA}},DA={id:"app"};function OA(t,e,c,a,n,r){const s=Q1("Navbar"),i=Q1("router-view"),o=Q1("Footer");return R(),D("div",DA,[C("header",null,[_2(s)]),_2(i),C("footer",null,[_2(o)])])}const FA=f1(RA,[["render",OA],["__scopeId","data-v-063c30c8"]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const f6=typeof window<"u";function BA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const w2=Object.assign;function Yc(t,e){const c={};for(const a in e){const n=e[a];c[a]=Z1(n)?n.map(t):t(n)}return c}const xe=()=>{},Z1=Array.isArray,UA=/\/$/,$A=t=>t.replace(UA,"");function Xc(t,e,c="/"){let a,n={},r="",s="";const i=e.indexOf("#");let o=e.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(a=e.slice(0,o),r=e.slice(o+1,i>-1?i:e.length),n=t(r)),i>-1&&(a=a||e.slice(0,i),s=e.slice(i,e.length)),a=GA(a??e,c),{fullPath:a+(r&&"?")+r+s,path:a,query:n,hash:s}}function qA(t,e){const c=e.query?t(e.query):"";return e.path+(c&&"?")+c+(e.hash||"")}function si(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jA(t,e,c){const a=e.matched.length-1,n=c.matched.length-1;return a>-1&&a===n&&D6(e.matched[a],c.matched[n])&&gu(e.params,c.params)&&t(e.query)===t(c.query)&&e.hash===c.hash}function D6(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const c in t)if(!WA(t[c],e[c]))return!1;return!0}function WA(t,e){return Z1(t)?ii(t,e):Z1(e)?ii(e,t):t===e}function ii(t,e){return Z1(e)?t.length===e.length&&t.every((c,a)=>c===e[a]):t.length===1&&t[0]===e}function GA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const c=e.split("/"),a=t.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=c.length-1,s,i;for(s=0;s<a.length;s++)if(i=a[s],i!==".")if(i==="..")r>1&&r--;else break;return c.slice(0,r).join("/")+"/"+a.slice(s-(s===a.length?1:0)).join("/")}var r0;(function(t){t.pop="pop",t.push="push"})(r0||(r0={}));var Se;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Se||(Se={}));function KA(t){if(!t)if(f6){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$A(t)}const QA=/^[^#]+#/;function YA(t,e){return t.replace(QA,"#")+e}function XA(t,e){const c=document.documentElement.getBoundingClientRect(),a=t.getBoundingClientRect();return{behavior:e.behavior,left:a.left-c.left-(e.left||0),top:a.top-c.top-(e.top||0)}}const ec=()=>({left:window.pageXOffset,top:window.pageYOffset});function JA(t){let e;if("el"in t){const c=t.el,a=typeof c=="string"&&c.startsWith("#"),n=typeof c=="string"?a?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!n)return;e=XA(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function oi(t,e){return(history.state?history.state.position-e:-1)+t}const X5=new Map;function ZA(t,e){X5.set(t,e)}function eT(t){const e=X5.get(t);return X5.delete(t),e}let tT=()=>location.protocol+"//"+location.host;function Hu(t,e){const{pathname:c,search:a,hash:n}=e,r=t.indexOf("#");if(r>-1){let i=n.includes(t.slice(r))?t.slice(r).length:1,o=n.slice(i);return o[0]!=="/"&&(o="/"+o),si(o,"")}return si(c,t)+a+n}function cT(t,e,c,a){let n=[],r=[],s=null;const i=({state:h})=>{const d=Hu(t,location),v=c.value,V=e.value;let z=0;if(h){if(c.value=d,e.value=h,s&&s===v){s=null;return}z=V?h.position-V.position:0}else a(d);n.forEach(H=>{H(c.value,v,{delta:z,type:r0.pop,direction:z?z>0?Se.forward:Se.back:Se.unknown})})};function o(){s=c.value}function l(h){n.push(h);const d=()=>{const v=n.indexOf(h);v>-1&&n.splice(v,1)};return r.push(d),d}function f(){const{history:h}=window;h.state&&h.replaceState(w2({},h.state,{scroll:ec()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function li(t,e,c,a=!1,n=!1){return{back:t,current:e,forward:c,replaced:a,position:window.history.length,scroll:n?ec():null}}function aT(t){const{history:e,location:c}=window,a={value:Hu(t,c)},n={value:e.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const u=t.indexOf("#"),h=u>-1?(c.host&&document.querySelector("base")?t:t.slice(u))+o:tT()+t+o;try{e[f?"replaceState":"pushState"](l,"",h),n.value=l}catch(d){console.error(d),c[f?"replace":"assign"](h)}}function s(o,l){const f=w2({},e.state,li(n.value.back,o,n.value.forward,!0),l,{position:n.value.position});r(o,f,!0),a.value=o}function i(o,l){const f=w2({},n.value,e.state,{forward:o,scroll:ec()});r(f.current,f,!0);const u=w2({},li(a.value,o,null),{position:f.position+1},l);r(o,u,!1),a.value=o}return{location:a,state:n,push:i,replace:s}}function nT(t){t=KA(t);const e=aT(t),c=cT(t,e.state,e.location,e.replace);function a(r,s=!0){s||c.pauseListeners(),history.go(r)}const n=w2({location:"",base:t,go:a,createHref:YA.bind(null,t)},e,c);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function rT(t){return typeof t=="string"||t&&typeof t=="object"}function Vu(t){return typeof t=="string"||typeof t=="symbol"}const $3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zu=Symbol("");var fi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fi||(fi={}));function O6(t,e){return w2(new Error,{type:t,[zu]:!0},e)}function g3(t,e){return t instanceof Error&&zu in t&&(e==null||!!(t.type&e))}const ui="[^/]+?",sT={sensitive:!1,strict:!1,start:!0,end:!0},iT=/[.+*?^${}()[\]/\\]/g;function oT(t,e){const c=w2({},sT,e),a=[];let n=c.start?"^":"";const r=[];for(const l of t){const f=l.length?[]:[90];c.strict&&!l.length&&(n+="/");for(let u=0;u<l.length;u++){const h=l[u];let d=40+(c.sensitive?.25:0);if(h.type===0)u||(n+="/"),n+=h.value.replace(iT,"\\$&"),d+=40;else if(h.type===1){const{value:v,repeatable:V,optional:z,regexp:H}=h;r.push({name:v,repeatable:V,optional:z});const M=H||ui;if(M!==ui){d+=10;try{new RegExp(`(${M})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+A.message)}}let N=V?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;u||(N=z&&l.length<2?`(?:/${N})`:"/"+N),z&&(N+="?"),n+=N,d+=20,z&&(d+=-8),V&&(d+=-20),M===".*"&&(d+=-50)}f.push(d)}a.push(f)}if(c.strict&&c.end){const l=a.length-1;a[l][a[l].length-1]+=.7000000000000001}c.strict||(n+="/?"),c.end?n+="$":c.strict&&(n+="(?:/|$)");const s=new RegExp(n,c.sensitive?"":"i");function i(l){const f=l.match(s),u={};if(!f)return null;for(let h=1;h<f.length;h++){const d=f[h]||"",v=r[h-1];u[v.name]=d&&v.repeatable?d.split("/"):d}return u}function o(l){let f="",u=!1;for(const h of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const d of h)if(d.type===0)f+=d.value;else if(d.type===1){const{value:v,repeatable:V,optional:z}=d,H=v in l?l[v]:"";if(Z1(H)&&!V)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Z1(H)?H.join("/"):H;if(!M)if(z)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${v}"`);f+=M}}return f||"/"}return{re:s,score:a,keys:r,parse:i,stringify:o}}function lT(t,e){let c=0;for(;c<t.length&&c<e.length;){const a=e[c]-t[c];if(a)return a;c++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function fT(t,e){let c=0;const a=t.score,n=e.score;for(;c<a.length&&c<n.length;){const r=lT(a[c],n[c]);if(r)return r;c++}if(Math.abs(n.length-a.length)===1){if(hi(a))return 1;if(hi(n))return-1}return n.length-a.length}function hi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uT={type:0,value:""},hT=/[a-zA-Z0-9_]/;function dT(t){if(!t)return[[]];if(t==="/")return[[uT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${c})/"${l}": ${d}`)}let c=0,a=c;const n=[];let r;function s(){r&&n.push(r),r=[]}let i=0,o,l="",f="";function u(){l&&(c===0?r.push({type:0,value:l}):c===1||c===2||c===3?(r.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;i<t.length;){if(o=t[i++],o==="\\"&&c!==2){a=c,c=4;continue}switch(c){case 0:o==="/"?(l&&u(),s()):o===":"?(u(),c=1):h();break;case 4:h(),c=a;break;case 1:o==="("?c=2:hT.test(o)?h():(u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:c=3:f+=o;break;case 3:u(),c=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:e("Unknown state");break}}return c===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),s(),n}function mT(t,e,c){const a=oT(dT(t.path),c),n=w2(a,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function pT(t,e){const c=[],a=new Map;e=pi({strict:!1,end:!0,sensitive:!1},e);function n(f){return a.get(f)}function r(f,u,h){const d=!h,v=vT(f);v.aliasOf=h&&h.record;const V=pi(e,f),z=[v];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of N)z.push(w2({},v,{components:h?h.record.components:v.components,path:A,aliasOf:h?h.record:v}))}let H,M;for(const N of z){const{path:A}=N;if(u&&A[0]!=="/"){const j=u.record.path,n2=j[j.length-1]==="/"?"":"/";N.path=u.record.path+(A&&n2+A)}if(H=mT(N,u,V),h?h.alias.push(H):(M=M||H,M!==H&&M.alias.push(H),d&&f.name&&!mi(H)&&s(f.name)),v.children){const j=v.children;for(let n2=0;n2<j.length;n2++)r(j[n2],H,h&&h.children[n2])}h=h||H,(H.record.components&&Object.keys(H.record.components).length||H.record.name||H.record.redirect)&&o(H)}return M?()=>{s(M)}:xe}function s(f){if(Vu(f)){const u=a.get(f);u&&(a.delete(f),c.splice(c.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=c.indexOf(f);u>-1&&(c.splice(u,1),f.record.name&&a.delete(f.record.name),f.children.forEach(s),f.alias.forEach(s))}}function i(){return c}function o(f){let u=0;for(;u<c.length&&fT(f,c[u])>=0&&(f.record.path!==c[u].record.path||!Cu(f,c[u]));)u++;c.splice(u,0,f),f.record.name&&!mi(f)&&a.set(f.record.name,f)}function l(f,u){let h,d={},v,V;if("name"in f&&f.name){if(h=a.get(f.name),!h)throw O6(1,{location:f});V=h.record.name,d=w2(di(u.params,h.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&di(f.params,h.keys.map(M=>M.name))),v=h.stringify(d)}else if("path"in f)v=f.path,h=c.find(M=>M.re.test(v)),h&&(d=h.parse(v),V=h.record.name);else{if(h=u.name?a.get(u.name):c.find(M=>M.re.test(u.path)),!h)throw O6(1,{location:f,currentLocation:u});V=h.record.name,d=w2({},u.params,f.params),v=h.stringify(d)}const z=[];let H=h;for(;H;)z.unshift(H.record),H=H.parent;return{name:V,path:v,params:d,matched:z,meta:HT(z)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:s,getRoutes:i,getRecordMatcher:n}}function di(t,e){const c={};for(const a of e)a in t&&(c[a]=t[a]);return c}function vT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gT(t){const e={},c=t.props||!1;if("component"in t)e.default=c;else for(const a in t.components)e[a]=typeof c=="object"?c[a]:c;return e}function mi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HT(t){return t.reduce((e,c)=>w2(e,c.meta),{})}function pi(t,e){const c={};for(const a in t)c[a]=a in e?e[a]:t[a];return c}function Cu(t,e){return e.children.some(c=>c===t||Cu(t,c))}const Mu=/#/g,VT=/&/g,zT=/\//g,CT=/=/g,MT=/\?/g,yu=/\+/g,yT=/%5B/g,_T=/%5D/g,_u=/%5E/g,LT=/%60/g,Lu=/%7B/g,wT=/%7C/g,wu=/%7D/g,bT=/%20/g;function Kn(t){return encodeURI(""+t).replace(wT,"|").replace(yT,"[").replace(_T,"]")}function xT(t){return Kn(t).replace(Lu,"{").replace(wu,"}").replace(_u,"^")}function J5(t){return Kn(t).replace(yu,"%2B").replace(bT,"+").replace(Mu,"%23").replace(VT,"%26").replace(LT,"`").replace(Lu,"{").replace(wu,"}").replace(_u,"^")}function ST(t){return J5(t).replace(CT,"%3D")}function AT(t){return Kn(t).replace(Mu,"%23").replace(MT,"%3F")}function TT(t){return t==null?"":AT(t).replace(zT,"%2F")}function st(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function NT(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let n=0;n<a.length;++n){const r=a[n].replace(yu," "),s=r.indexOf("="),i=st(s<0?r:r.slice(0,s)),o=s<0?null:st(r.slice(s+1));if(i in e){let l=e[i];Z1(l)||(l=e[i]=[l]),l.push(o)}else e[i]=o}return e}function vi(t){let e="";for(let c in t){const a=t[c];if(c=ST(c),a==null){a!==void 0&&(e+=(e.length?"&":"")+c);continue}(Z1(a)?a.map(r=>r&&J5(r)):[a&&J5(a)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+c,r!=null&&(e+="="+r))})}return e}function ET(t){const e={};for(const c in t){const a=t[c];a!==void 0&&(e[c]=Z1(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return e}const kT=Symbol(""),gi=Symbol(""),Qn=Symbol(""),bu=Symbol(""),Z5=Symbol("");function ie(){let t=[];function e(a){return t.push(a),()=>{const n=t.indexOf(a);n>-1&&t.splice(n,1)}}function c(){t=[]}return{add:e,list:()=>t.slice(),reset:c}}function G3(t,e,c,a,n){const r=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((s,i)=>{const o=u=>{u===!1?i(O6(4,{from:c,to:e})):u instanceof Error?i(u):rT(u)?i(O6(2,{from:e,to:u})):(r&&a.enterCallbacks[n]===r&&typeof u=="function"&&r.push(u),s())},l=t.call(a&&a.instances[n],e,c,o);let f=Promise.resolve(l);t.length<3&&(f=f.then(o)),f.catch(u=>i(u))})}function Jc(t,e,c,a){const n=[];for(const r of t)for(const s in r.components){let i=r.components[s];if(!(e!=="beforeRouteEnter"&&!r.instances[s]))if(IT(i)){const l=(i.__vccOpts||i)[e];l&&n.push(G3(l,c,a,r,s))}else{let o=i();n.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));const f=BA(l)?l.default:l;r.components[s]=f;const h=(f.__vccOpts||f)[e];return h&&G3(h,c,a,r,s)()}))}}return n}function IT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hi(t){const e=P1(Qn),c=P1(bu),a=r2(()=>e.resolve(o2(t.to))),n=r2(()=>{const{matched:o}=a.value,{length:l}=o,f=o[l-1],u=c.matched;if(!f||!u.length)return-1;const h=u.findIndex(D6.bind(null,f));if(h>-1)return h;const d=Vi(o[l-2]);return l>1&&Vi(f)===d&&u[u.length-1].path!==d?u.findIndex(D6.bind(null,o[l-2])):h}),r=r2(()=>n.value>-1&&OT(c.params,a.value.params)),s=r2(()=>n.value>-1&&n.value===c.matched.length-1&&gu(c.params,a.value.params));function i(o={}){return DT(o)?e[o2(t.replace)?"replace":"push"](o2(t.to)).catch(xe):Promise.resolve()}return{route:a,href:r2(()=>a.value.href),isActive:r,isExactActive:s,navigate:i}}const PT=Sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hi,setup(t,{slots:e}){const c=p4(Hi(t)),{options:a}=P1(Qn),n=r2(()=>({[zi(t.activeClass,a.linkActiveClass,"router-link-active")]:c.isActive,[zi(t.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const r=e.default&&e.default(c);return t.custom?r:ka("a",{"aria-current":c.isExactActive?t.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:n.value},r)}}}),RT=PT;function DT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OT(t,e){for(const c in e){const a=e[c],n=t[c];if(typeof a=="string"){if(a!==n)return!1}else if(!Z1(n)||n.length!==a.length||a.some((r,s)=>r!==n[s]))return!1}return!0}function Vi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zi=(t,e,c)=>t??e??c,FT=Sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:c}){const a=P1(Z5),n=r2(()=>t.route||a.value),r=P1(gi,0),s=r2(()=>{let l=o2(r);const{matched:f}=n.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),i=r2(()=>n.value.matched[s.value]);H6(gi,r2(()=>s.value+1)),H6(kT,i),H6(Z5,n);const o=b1();return K1(()=>[o.value,i.value,t.name],([l,f,u],[h,d,v])=>{f&&(f.instances[u]=l,d&&d!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!D6(f,d)||!h)&&(f.enterCallbacks[u]||[]).forEach(V=>V(l))},{flush:"post"}),()=>{const l=n.value,f=t.name,u=i.value,h=u&&u.components[f];if(!h)return Ci(c.default,{Component:h,route:l});const d=u.props[f],v=d?d===!0?l.params:typeof d=="function"?d(l):d:null,z=ka(h,w2({},v,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return Ci(c.default,{Component:z,route:l})||z}}});function Ci(t,e){if(!t)return null;const c=t(e);return c.length===1?c[0]:c}const BT=FT;function UT(t){const e=pT(t.routes,t),c=t.parseQuery||NT,a=t.stringifyQuery||vi,n=t.history,r=ie(),s=ie(),i=ie(),o=wz($3);let l=$3;f6&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yc.bind(null,_=>""+_),u=Yc.bind(null,TT),h=Yc.bind(null,st);function d(_,F){let k,W;return Vu(_)?(k=e.getRecordMatcher(_),W=F):W=_,e.addRoute(W,k)}function v(_){const F=e.getRecordMatcher(_);F&&e.removeRoute(F)}function V(){return e.getRoutes().map(_=>_.record)}function z(_){return!!e.getRecordMatcher(_)}function H(_,F){if(F=w2({},F||o.value),typeof _=="string"){const g=Xc(c,_,F.path),y=e.resolve({path:g.path},F),L=n.createHref(g.fullPath);return w2(g,y,{params:h(y.params),hash:st(g.hash),redirectedFrom:void 0,href:L})}let k;if("path"in _)k=w2({},_,{path:Xc(c,_.path,F.path).path});else{const g=w2({},_.params);for(const y in g)g[y]==null&&delete g[y];k=w2({},_,{params:u(g)}),F.params=u(F.params)}const W=e.resolve(k,F),y2=_.hash||"";W.params=f(h(W.params));const m=qA(a,w2({},_,{hash:xT(y2),path:W.path})),p=n.createHref(m);return w2({fullPath:m,hash:y2,query:a===vi?ET(_.query):_.query||{}},W,{redirectedFrom:void 0,href:p})}function M(_){return typeof _=="string"?Xc(c,_,o.value.path):w2({},_)}function N(_,F){if(l!==_)return O6(8,{from:F,to:_})}function A(_){return f2(_)}function j(_){return A(w2(M(_),{replace:!0}))}function n2(_){const F=_.matched[_.matched.length-1];if(F&&F.redirect){const{redirect:k}=F;let W=typeof k=="function"?k(_):k;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=M(W):{path:W},W.params={}),w2({query:_.query,hash:_.hash,params:"path"in W?{}:_.params},W)}}function f2(_,F){const k=l=H(_),W=o.value,y2=_.state,m=_.force,p=_.replace===!0,g=n2(k);if(g)return f2(w2(M(g),{state:typeof g=="object"?w2({},y2,g.state):y2,force:m,replace:p}),F||k);const y=k;y.redirectedFrom=F;let L;return!m&&jA(a,W,k)&&(L=O6(16,{to:y,from:W}),J2(W,W,!0,!1)),(L?Promise.resolve(L):C2(y,W)).catch(b=>g3(b)?g3(b,2)?b:M2(b):V2(b,y,W)).then(b=>{if(b){if(g3(b,2))return f2(w2({replace:p},M(b.to),{state:typeof b.to=="object"?w2({},y2,b.to.state):y2,force:m}),F||y)}else b=n1(y,W,!0,p,y2);return $2(y,W,b),b})}function a2(_,F){const k=N(_,F);return k?Promise.reject(k):Promise.resolve()}function X(_){const F=c6.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(_):_()}function C2(_,F){let k;const[W,y2,m]=$T(_,F);k=Jc(W.reverse(),"beforeRouteLeave",_,F);for(const g of W)g.leaveGuards.forEach(y=>{k.push(G3(y,_,F))});const p=a2.bind(null,_,F);return k.push(p),u1(k).then(()=>{k=[];for(const g of r.list())k.push(G3(g,_,F));return k.push(p),u1(k)}).then(()=>{k=Jc(y2,"beforeRouteUpdate",_,F);for(const g of y2)g.updateGuards.forEach(y=>{k.push(G3(y,_,F))});return k.push(p),u1(k)}).then(()=>{k=[];for(const g of m)if(g.beforeEnter)if(Z1(g.beforeEnter))for(const y of g.beforeEnter)k.push(G3(y,_,F));else k.push(G3(g.beforeEnter,_,F));return k.push(p),u1(k)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),k=Jc(m,"beforeRouteEnter",_,F),k.push(p),u1(k))).then(()=>{k=[];for(const g of s.list())k.push(G3(g,_,F));return k.push(p),u1(k)}).catch(g=>g3(g,8)?g:Promise.reject(g))}function $2(_,F,k){i.list().forEach(W=>X(()=>W(_,F,k)))}function n1(_,F,k,W,y2){const m=N(_,F);if(m)return m;const p=F===$3,g=f6?history.state:{};k&&(W||p?n.replace(_.fullPath,w2({scroll:p&&g&&g.scroll},y2)):n.push(_.fullPath,y2)),o.value=_,J2(_,F,k,p),M2()}let _1;function v3(){_1||(_1=n.listen((_,F,k)=>{if(!W0.listening)return;const W=H(_),y2=n2(W);if(y2){f2(w2(y2,{replace:!0}),W).catch(xe);return}l=W;const m=o.value;f6&&ZA(oi(m.fullPath,k.delta),ec()),C2(W,m).catch(p=>g3(p,12)?p:g3(p,2)?(f2(p.to,W).then(g=>{g3(g,20)&&!k.delta&&k.type===r0.pop&&n.go(-1,!1)}).catch(xe),Promise.reject()):(k.delta&&n.go(-k.delta,!1),V2(p,W,m))).then(p=>{p=p||n1(W,m,!1),p&&(k.delta&&!g3(p,8)?n.go(-k.delta,!1):k.type===r0.pop&&g3(p,20)&&n.go(-1,!1)),$2(W,m,p)}).catch(xe)}))}let z1=ie(),p2=ie(),L2;function V2(_,F,k){M2(_);const W=p2.list();return W.length?W.forEach(y2=>y2(_,F,k)):console.error(_),Promise.reject(_)}function D1(){return L2&&o.value!==$3?Promise.resolve():new Promise((_,F)=>{z1.add([_,F])})}function M2(_){return L2||(L2=!_,v3(),z1.list().forEach(([F,k])=>_?k(_):F()),z1.reset()),_}function J2(_,F,k,W){const{scrollBehavior:y2}=t;if(!f6||!y2)return Promise.resolve();const m=!k&&eT(oi(_.fullPath,0))||(W||!k)&&history.state&&history.state.scroll||null;return Pe().then(()=>y2(_,F,m)).then(p=>p&&JA(p)).catch(p=>V2(p,_,F))}const D2=_=>n.go(_);let t6;const c6=new Set,W0={currentRoute:o,listening:!0,addRoute:d,removeRoute:v,hasRoute:z,getRoutes:V,resolve:H,options:t,push:A,replace:j,go:D2,back:()=>D2(-1),forward:()=>D2(1),beforeEach:r.add,beforeResolve:s.add,afterEach:i.add,onError:p2.add,isReady:D1,install(_){const F=this;_.component("RouterLink",RT),_.component("RouterView",BT),_.config.globalProperties.$router=F,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>o2(o)}),f6&&!t6&&o.value===$3&&(t6=!0,A(n.location).catch(y2=>{}));const k={};for(const y2 in $3)Object.defineProperty(k,y2,{get:()=>o.value[y2],enumerable:!0});_.provide(Qn,F),_.provide(bu,Vo(k)),_.provide(Z5,o);const W=_.unmount;c6.add(_),_.unmount=function(){c6.delete(_),c6.size<1&&(l=$3,_1&&_1(),_1=null,o.value=$3,t6=!1,L2=!1),W()}}};function u1(_){return _.reduce((F,k)=>F.then(()=>X(k)),Promise.resolve())}return W0}function $T(t,e){const c=[],a=[],n=[],r=Math.max(e.matched.length,t.matched.length);for(let s=0;s<r;s++){const i=e.matched[s];i&&(t.matched.find(l=>D6(l,i))?a.push(i):c.push(i));const o=t.matched[s];o&&(e.matched.find(l=>D6(l,o))||n.push(o))}return[c,a,n]}const qT={props:{singleHotel:Object},methods:{goToHotelPage(){this.$router.push({name:"hotel",params:{id:this.singleHotel.name}})}}},xu=t=>(I3("data-v-682e4de0"),t=t(),P3(),t),jT={class:"hotel-container"},WT={class:"img-container"},GT=["src","alt"],KT={class:"info-container"},QT={class:"text-container"},YT={class:"name-loc-price-container"},XT={class:"hotel-name"},JT={class:"hotel-location"},ZT={class:"hotel-price"},eN=xu(()=>C("span",{class:"text-in-hotel-price"},"per night",-1)),tN={class:"button-container"},cN={class:"rat-fac-container"},aN={class:"hotel-raiting"},nN=xu(()=>C("p",null,"Facilities:",-1)),rN={class:"hotel-facilities"};function sN(t,e,c,a,n,r){return R(),D("div",jT,[C("div",WT,[C("img",{src:c.singleHotel.img,alt:c.singleHotel.name},null,8,GT)]),C("div",KT,[C("div",QT,[C("div",YT,[C("div",XT,l2(c.singleHotel.name),1),C("div",JT,l2(c.singleHotel.city)+", "+l2(c.singleHotel.country),1),C("div",ZT,[B1(l2(c.singleHotel.price)+" $ ",1),eN]),C("div",tN,[C("button",{class:"book-button",onClick:e[0]||(e[0]=(...s)=>r.goToHotelPage&&r.goToHotelPage(...s))},"Book")])]),C("div",cN,[C("div",aN,"Raiting: "+l2(c.singleHotel.raiting)+" from "+l2(c.singleHotel.votes)+" votes",1),nN,C("ul",rN,[(R(!0),D(g2,null,B2(c.singleHotel.facilities,s=>(R(),D("li",null,l2(s),1))),256))])])])])])}const Su=f1(qT,[["render",sN],["__scopeId","data-v-682e4de0"]]),F6=VM("registeredHotels",{state:()=>({allHotels:[{name:"Radisson Pink Hotel London",raiting:8,votes:1031,city:"London",country:"UK",price:134,img:"https://www.hotel-frankenland.de/de/photos/crop__338945_t1__1920.jpg",facilities:["Free WiFi","Private Parking"]},{name:"Motel Two London",raiting:8.5,votes:366,city:"London",country:"UK",price:111,img:"https://all.accor.com/middleware/images/1385747632498/1681988911601/so-text-with-image-600x500-low.jpg",facilities:["Free WiFi","Lift","Non-smoking rooms"]},{name:"Milton London",raiting:7.9,votes:1410,city:"London",country:"UK",price:194,img:"https://assets.hrewards.com/assets/SHR_Hamburg_rooms_Standard_King_1_d5356d0cd0.jpg",facilities:["Lift"]},{name:"London Marrionn Hotel",raiting:9,votes:793,city:"London",country:"UK",price:143,img:"https://static.leonardo-hotels.com/image/rcdbl_lhk_01_okt19_4000x2600_6fff045ef02ca4fd3b18bd7ec484c068_2048x1331_desktop_2.jpeg",facilities:["Complimentary breakfast","Lift","Non-smoking rooms"]},{name:"Jupiter Hotel London Trafalgar",raiting:8.4,votes:1879,city:"London",country:"UK",price:161,img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/87951681.jpg?k=518627dbfe45c1b118dd5f5c19558cfa8990f10f90a385a276167ccb137dd287&o=&hp=1",facilities:["Free WiFi","Private Parking"]},{name:"Radisson Pink Hotel Paris",raiting:6.5,votes:536,city:"Paris",country:"France",price:184,img:"https://www.welcome-hotels.com/site/assets/files/35059/welcome_hotel_marburg_lobby_2k.2560x1600.jpg",facilities:["Free WiFi","Non-smoking rooms"]},{name:"Motel Two Paris",raiting:8.5,votes:366,city:"Paris",country:"France",price:111,img:"https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg",facilities:["Free WiFi","Lift","Private Parking"]},{name:"Milton Paris",raiting:7.9,votes:1410,city:"Paris",country:"France",price:194,img:"https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",facilities:["Complimentary breakfast","Lift"]},{name:"Paris Marrionn Hotel",raiting:9,votes:793,city:"Paris",country:"France",price:143,img:"https://www.newworldhotels.com/wp-content/uploads/2014/05/Mobile-NWHBR-Exterior.jpg",facilities:["Free WiFi","Private Parking","Non-smoking rooms"]},{name:"Jupiter Hotel Paris",raiting:8.4,votes:1879,city:"Paris",country:"France",price:161,img:"https://www.ahstatic.com/photos/c096_ho_00_p_1024x768.jpg",facilities:["Free WiFi","Complimentary breakfast"]},{name:"Radisson Pink Hotel Berlin",raiting:8,votes:1031,city:"Berlin",country:"Germany",price:134,img:"https://img.freepik.com/vektoren-kostenlos/flache-hotelfassade-hintergrund_23-2148157379.jpg?w=2000",facilities:["Complimentary breakfast","Private Parking"]},{name:"Motel Two Berlin",raiting:8.5,votes:366,city:"Berlin",country:"Germany",price:111,img:"https://mauritius-ht.de/wp-content/uploads/2021/05/Hotel_Zimmer_Mauritius.jpg",facilities:["Free WiFi","Lift","Non-smoking rooms"]},{name:"Milton Berlin",raiting:7.9,votes:1410,city:"Berlin",country:"Germany",price:194,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvvNGkglFaJ1eGiEmNdyX5YVrgeQ2dhyJv5BFmb5JuZy3HEMEvRcDwKFoXCuuOn8KOpk&usqp=CAU",facilities:["Free WiFi","Complimentary breakfast"]},{name:"Berlin Marrionn Hotel",raiting:9,votes:793,city:"Berlin",country:"Germany",price:143,img:"https://cdn5.site-media.eu/images/1200x630/6054406/CHDMoog_Maerz2012_Zuschnitt_Business.jpg",facilities:["Private Parking","Lift"]},{name:"Jupiter Hotel Berlin",raiting:8.4,votes:1879,city:"Berlin",country:"Germany",price:161,img:"https://cf.bstatic.com/xdata/images/hotel/max500/461646933.jpg?k=b90e3488ca35d4fa1b0f69027df76d21a63c0523aa5fc4fd60f27912f7ca8ec3&o=",facilities:["Complimentary breakfast","Lift"]},{name:"Radisson Pink Hotel Sofia",raiting:8,votes:1031,city:"Sofia",country:"Bulgaria",price:134,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNf9bhqTMHGdNcb3WqPaqgmfQc9NmA1oBYg&usqp=CAU",facilities:["Free WiFi","Non-smoking rooms"]},{name:"Motel Two Sofia",raiting:8.5,votes:366,city:"Sofia",country:"Bulgaria",price:111,img:"https://lindnerhotels.com/fileadmin/_processed_/3/7/csm_HHNJN_2_Twin_Beds_eba9961492.jpg",facilities:["Free WiFi","Lift"]},{name:"Milton Sofia",raiting:7.9,votes:1410,city:"Sofia",country:"Bulgaria",price:194,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYc9bj8sf_9Ho4sBimEw-gOvDwNjrBcDZiSw&usqp=CAU",facilities:["Free WiFi","Complimentary breakfast"]},{name:"Sofia Marrionn Hotel",raiting:9,votes:793,city:"Sofia",country:"Bulgaria",price:143,img:"https://amazingarchitecture.com/storage/4192/hotel-interior-design-zikzak-architects.jpg",facilities:["Free WiFi","Lift","Non-smoking rooms"]},{name:"Jupiter Hotel Sofia",raiting:8.4,votes:1879,city:"Sofia",country:"Bulgaria",price:161,img:"https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlhkg-langham-hong-kongopti:Medium?wid=675&hei=380",facilities:["Free WiFi","Private Parking"]},{name:"Radisson Pink Hotel Athens",raiting:8,votes:1031,city:"Athens",country:"Greece",price:134,img:"https://www.hotel-juwel.de/wp-content/uploads/2023/01/hotel-bad-fuessing-m.jpg",facilities:["Complimentary breakfast"]},{name:"Motel Two Athens",raiting:8.5,votes:366,city:"Athens",country:"Greece",price:111,img:"https://www.maritim.de/fileadmin/_processed_/4/2/csm_ING_047_Superior_8e76aeb6d2.jpg",facilities:["Free WiFi","Private Parking"]},{name:"Milton Athens",raiting:7.9,votes:1410,city:"Athens",country:"Greece",price:194,img:"https://www.the-weinmeister.com/wp-content/uploads/2023/02/medium-room_startseite_mobile-uai-1024x520.jpg",facilities:["Private Parking","Lift","Non-smoking rooms"]},{name:"Athens Marrionn Hotel",raiting:9,votes:793,city:"Athens",country:"Greece",price:143,img:"https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/F/0/%7BAF092C0F-E7AD-4B8D-A450-ABEF73413B1E%7D2023_THKL_Homepage-Room.jpg?width=750&height=752&mode=crop&quality=100&scale=both",facilities:["Free WiFi","Complimentary breakfast"]},{name:"Jupiter Hotel Athens",raiting:8.4,votes:1879,city:"Athens",country:"Greece",price:161,img:"https://s7d1.scene7.com/is/image/marriotts7prod/mc-brudt-junior-suite-6-15072:Classic-Hor?wid=1336&fit=constrain",facilities:["Private Parking"]}],possibleCountries:[{name:"Germany",cities:["Berlin","Munich","Cologne"]},{name:"France",cities:["Paris","Strasburg","Lyon"]},{name:"UK",cities:["London","Edinburgh","Manchester"]},{name:"Greece",cities:["Athens","Rhodos","Kavala"]},{name:"Bulgaria",cities:["Sofia","Ruse","Plovdiv"]}]}),getters:{numberOfRegisteredHotels(t){return t.allHotels.length}},actions:{isExisting(t){let e=!1;return this.allHotels.forEach(c=>{c.name===t&&(e=!0)}),e},addHotelsFromFirebase(t){t.forEach(e=>{if(!this.isExisting(e.data().name)){const c={name:e.data().name,raiting:e.data().raiting,votes:e.data().votes,city:e.data().city,country:e.data().country,price:e.data().price,img:e.data().img,facilities:e.data().facilities};this.allHotels.push(c)}})}}});const iN={components:{SingleHotelBlock:Su},data(){return{}},setup(){return{hotels:F6()}},computed:{...zM(F6,["allHotels"])},mounted(){},methods:{sixRandomHotels(){let t=[],e=[];for(let c=1;c<=6;c++){let a=Math.floor(Math.random()*this.allHotels.length);for(;e.includes(a);)a=Math.floor(Math.random()*this.allHotels.length);e.push(a),t.push(this.allHotels[a])}return t}}},oN={class:"grid-container"},lN={class:"main-container"};function fN(t,e,c,a,n,r){const s=Q1("SingleHotelBlock");return R(),D("div",oN,[(R(!0),D(g2,null,B2(r.sixRandomHotels(),i=>(R(),D("div",lN,[_2(s,{singleHotel:i},null,8,["singleHotel"])]))),256))])}const uN=f1(iN,[["render",fN],["__scopeId","data-v-885e8529"]]);const hN={setup(){return{hotels:F6()}},components:{HotelBlock:uN},async created(){const t=await this.getFirebaseHotels();this.hotels.addHotelsFromFirebase(t)},methods:{async getFirebaseHotels(){return await N0(T0(S0(d3,"hotels")))}}},dN={class:"main-box"};function mN(t,e,c,a,n,r){const s=Q1("HotelBlock");return R(),D("main",dN,[_2(s)])}const pN=f1(hN,[["render",mN]]);const vN={setup(){return{hotels:F6()}},data(){return{sortedCountry:"",sortedCity:"",isSorted:!1}},components:{SingleHotelBlock:Su},async created(){const t=await this.getFirebaseHotels();this.hotels.addHotelsFromFirebase(t)},methods:{async getFirebaseHotels(){return await N0(T0(S0(d3,"hotels")))},filteredCities(){if(this.sortedCountry)return this.hotels.possibleCountries.find(e=>e.name===this.sortedCountry).cities},showAllHotels(){this.sortedCountry="",this.sortedCity="",this.isSorted=!1}},computed:{sortedHotels(){let t=[],e=[];if(this.sortedCountry)this.hotels.allHotels.forEach(c=>{c.country===this.sortedCountry&&t.push(c)}),this.isSorted=!0;else return this.hotels.allHotels;return this.sortedCity?(t.forEach(c=>{c.city===this.sortedCity&&e.push(c)}),this.isSorted=!0,e):(this.isSorted=!0,t)},numberOfRegisteredHotels(){return this.sortedHotels.length}},watch:{sortedCountry(){(this.filteredCities()||[]).includes(this.sortedCountry)||(this.sortedCity="")}}},tc=t=>(I3("data-v-5b30e91d"),t=t(),P3(),t),gN={class:"main-template"},HN={class:"sorting-container"},VN=tc(()=>C("label",{for:"sortedCountry"},"Sort by country",-1)),zN=tc(()=>C("option",{disabled:""}," Select ",-1)),CN=["value"],MN=tc(()=>C("label",{for:"sortedCity"},"Sort by city",-1)),yN=tc(()=>C("option",{disabled:""}," Select ",-1)),_N=["value"],LN={class:"number-hotels"},wN={class:"hotels-container"};function bN(t,e,c,a,n,r){const s=Q1("SingleHotelBlock");return R(),D("div",gN,[C("div",HN,[C("div",null,[VN,e1(C("select",{id:"sortedCountry","onUpdate:modelValue":e[0]||(e[0]=i=>n.sortedCountry=i)},[zN,(R(!0),D(g2,null,B2(a.hotels.possibleCountries,i=>(R(),D("option",{value:i.name},l2(i.name),9,CN))),256))],512),[[x4,n.sortedCountry]])]),C("div",null,[MN,e1(C("select",{id:"sortedCity","onUpdate:modelValue":e[1]||(e[1]=i=>n.sortedCity=i)},[yN,(R(!0),D(g2,null,B2(r.filteredCities(),i=>(R(),D("option",{value:i},l2(i),9,_N))),256))],512),[[x4,n.sortedCity]])]),C("div",null,[n.isSorted?(R(),D("button",{key:0,class:"show-all",onClick:e[2]||(e[2]=i=>r.showAllHotels())},"Reset")):L4("",!0)])]),C("h4",LN,"Hotels: "+l2(r.numberOfRegisteredHotels),1),(R(!0),D(g2,null,B2(this.sortedHotels,i=>(R(),D("div",wN,[_2(s,{class:"hotel-container",singleHotel:i},null,8,["singleHotel"])]))),256))])}const xN=f1(vN,[["render",bN],["__scopeId","data-v-5b30e91d"]]);function Mi(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),c.push.apply(c,a)}return c}function K3(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?Mi(Object(c),!0).forEach(function(a){SN(t,a,c[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):Mi(Object(c)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(c,a))})}return t}function SN(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function yi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((c,a)=>(e.includes(a)||(c[a]=o2(t[a])),c),{})}function it(t){return typeof t=="function"}function AN(t){return L3(t)||O4(t)}function Au(t,e,c){let a=t;const n=e.split(".");for(let r=0;r<n.length;r++){if(!a[n[r]])return c;a=a[n[r]]}return a}function Zc(t,e,c){return r2(()=>t.some(a=>Au(e,a,{[c]:!1})[c]))}function _i(t,e,c){return r2(()=>t.reduce((a,n)=>{const r=Au(e,n,{[c]:!1})[c]||[];return a.concat(r)},[]))}function Tu(t,e,c,a){return t.call(a,o2(e),o2(c),a)}function Nu(t){return t.$valid!==void 0?!t.$valid:!t}function TN(t,e,c,a,n,r,s){let{$lazy:i,$rewardEarly:o}=n,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],f=arguments.length>8?arguments[8]:void 0,u=arguments.length>9?arguments[9]:void 0,h=arguments.length>10?arguments[10]:void 0;const d=b1(!!a.value),v=b1(0);c.value=!1;const V=K1([e,a].concat(l,h),()=>{if(i&&!a.value||o&&!u.value&&!c.value)return;let z;try{z=Tu(t,e,f,s)}catch(H){z=Promise.reject(H)}v.value++,c.value=!!v.value,d.value=!1,Promise.resolve(z).then(H=>{v.value--,c.value=!!v.value,r.value=H,d.value=Nu(H)}).catch(H=>{v.value--,c.value=!!v.value,r.value=H,d.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:d,$unwatch:V}}function NN(t,e,c,a,n,r,s,i){let{$lazy:o,$rewardEarly:l}=a;const f=()=>({}),u=r2(()=>{if(o&&!c.value||l&&!i.value)return!1;let h=!0;try{const d=Tu(t,e,s,r);n.value=d,h=Nu(d)}catch(d){n.value=d}return h});return{$unwatch:f,$invalid:u}}function EN(t,e,c,a,n,r,s,i,o,l,f){const u=b1(!1),h=t.$params||{},d=b1(null);let v,V;t.$async?{$invalid:v,$unwatch:V}=TN(t.$validator,e,u,c,a,d,n,t.$watchTargets,o,l,f):{$invalid:v,$unwatch:V}=NN(t.$validator,e,c,a,d,n,o,l);const z=t.$message;return{$message:it(z)?r2(()=>z(yi({$pending:u,$invalid:v,$params:yi(h),$model:e,$response:d,$validator:r,$propertyPath:i,$property:s}))):z||"",$params:h,$pending:u,$invalid:v,$response:d,$unwatch:V}}function kN(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=o2(t),c=Object.keys(e),a={},n={},r={};let s=null;return c.forEach(i=>{const o=e[i];switch(!0){case it(o.$validator):a[i]=o;break;case it(o):a[i]={$validator:o};break;case i==="$validationGroups":s=o;break;case i.startsWith("$"):r[i]=o;break;default:n[i]=o}}),{rules:a,nestedValidators:n,config:r,validationGroups:s}}const IN="__root";function PN(t,e,c,a,n,r,s,i,o){const l=Object.keys(t),f=a.get(n,t),u=b1(!1),h=b1(!1),d=b1(0);if(f){if(!f.$partial)return f;f.$unwatch(),u.value=f.$dirty.value}const v={$dirty:u,$path:n,$touch:()=>{u.value||(u.value=!0)},$reset:()=>{u.value&&(u.value=!1)},$commit:()=>{}};return l.length?(l.forEach(V=>{v[V]=EN(t[V],e,v.$dirty,r,s,V,c,n,o,h,d)}),v.$externalResults=r2(()=>i.value?[].concat(i.value).map((V,z)=>({$propertyPath:n,$property:c,$validator:"$externalResults",$uid:`${n}-externalResult-${z}`,$message:V,$params:{},$response:null,$pending:!1})):[]),v.$invalid=r2(()=>{const V=l.some(z=>o2(v[z].$invalid));return h.value=V,!!v.$externalResults.value.length||V}),v.$pending=r2(()=>l.some(V=>o2(v[V].$pending))),v.$error=r2(()=>v.$dirty.value?v.$pending.value||v.$invalid.value:!1),v.$silentErrors=r2(()=>l.filter(V=>o2(v[V].$invalid)).map(V=>{const z=v[V];return p4({$propertyPath:n,$property:c,$validator:V,$uid:`${n}-${V}`,$message:z.$message,$params:z.$params,$response:z.$response,$pending:z.$pending})}).concat(v.$externalResults.value)),v.$errors=r2(()=>v.$dirty.value?v.$silentErrors.value:[]),v.$unwatch=()=>l.forEach(V=>{v[V].$unwatch()}),v.$commit=()=>{h.value=!0,d.value=Date.now()},a.set(n,t,v),v):(f&&a.set(n,t,v),v)}function RN(t,e,c,a,n,r,s){const i=Object.keys(t);return i.length?i.reduce((o,l)=>(o[l]=ea({validations:t[l],state:e,key:l,parentKey:c,resultsCache:a,globalConfig:n,instance:r,externalResults:s}),o),{}):{}}function DN(t,e,c){const a=r2(()=>[e,c].filter(v=>v).reduce((v,V)=>v.concat(Object.values(o2(V))),[])),n=r2({get(){return t.$dirty.value||(a.value.length?a.value.every(v=>v.$dirty):!1)},set(v){t.$dirty.value=v}}),r=r2(()=>{const v=o2(t.$silentErrors)||[],V=a.value.filter(z=>(o2(z).$silentErrors||[]).length).reduce((z,H)=>z.concat(...H.$silentErrors),[]);return v.concat(V)}),s=r2(()=>{const v=o2(t.$errors)||[],V=a.value.filter(z=>(o2(z).$errors||[]).length).reduce((z,H)=>z.concat(...H.$errors),[]);return v.concat(V)}),i=r2(()=>a.value.some(v=>v.$invalid)||o2(t.$invalid)||!1),o=r2(()=>a.value.some(v=>o2(v.$pending))||o2(t.$pending)||!1),l=r2(()=>a.value.some(v=>v.$dirty)||a.value.some(v=>v.$anyDirty)||n.value),f=r2(()=>n.value?o.value||i.value:!1),u=()=>{t.$touch(),a.value.forEach(v=>{v.$touch()})},h=()=>{t.$commit(),a.value.forEach(v=>{v.$commit()})},d=()=>{t.$reset(),a.value.forEach(v=>{v.$reset()})};return a.value.length&&a.value.every(v=>v.$dirty)&&u(),{$dirty:n,$errors:s,$invalid:i,$anyDirty:l,$error:f,$pending:o,$touch:u,$reset:d,$silentErrors:r,$commit:h}}function ea(t){let{validations:e,state:c,key:a,parentKey:n,childResults:r,resultsCache:s,globalConfig:i={},instance:o,externalResults:l}=t;const f=n?`${n}.${a}`:a,{rules:u,nestedValidators:h,config:d,validationGroups:v}=kN(e),V=K3(K3({},i),d),z=a?r2(()=>{const M2=o2(c);return M2?o2(M2[a]):void 0}):c,H=K3({},o2(l)||{}),M=r2(()=>{const M2=o2(l);return a?M2?o2(M2[a]):void 0:M2}),N=PN(u,z,a,s,f,V,o,M,c),A=RN(h,z,f,s,V,o,M),j={};v&&Object.entries(v).forEach(M2=>{let[J2,D2]=M2;j[J2]={$invalid:Zc(D2,A,"$invalid"),$error:Zc(D2,A,"$error"),$pending:Zc(D2,A,"$pending"),$errors:_i(D2,A,"$errors"),$silentErrors:_i(D2,A,"$silentErrors")}});const{$dirty:n2,$errors:f2,$invalid:a2,$anyDirty:X,$error:C2,$pending:$2,$touch:n1,$reset:_1,$silentErrors:v3,$commit:z1}=DN(N,A,r),p2=a?r2({get:()=>o2(z),set:M2=>{n2.value=!0;const J2=o2(c),D2=o2(l);D2&&(D2[a]=H[a]),R2(J2[a])?J2[a].value=M2:J2[a]=M2}}):null;a&&V.$autoDirty&&K1(z,()=>{n2.value||n1();const M2=o2(l);M2&&(M2[a]=H[a])},{flush:"sync"});async function L2(){return n1(),V.$rewardEarly&&(z1(),await Pe()),await Pe(),new Promise(M2=>{if(!$2.value)return M2(!a2.value);const J2=K1($2,()=>{M2(!a2.value),J2()})})}function V2(M2){return(r.value||{})[M2]}function D1(){R2(l)?l.value=H:Object.keys(H).length===0?Object.keys(l).forEach(M2=>{delete l[M2]}):Object.assign(l,H)}return p4(K3(K3(K3({},N),{},{$model:p2,$dirty:n2,$error:C2,$errors:f2,$invalid:a2,$anyDirty:X,$pending:$2,$touch:n1,$reset:_1,$path:f||IN,$silentErrors:v3,$validate:L2,$commit:z1},r&&{$getResultsForChild:V2,$clearExternalResults:D1,$validationGroups:j}),A))}class ON{constructor(){this.storage=new Map}set(e,c,a){this.storage.set(e,{rules:c,result:a})}checkRulesValidity(e,c,a){const n=Object.keys(a),r=Object.keys(c);return r.length!==n.length||!r.every(i=>n.includes(i))?!1:r.every(i=>c[i].$params?Object.keys(c[i].$params).every(o=>o2(a[i].$params[o])===o2(c[i].$params[o])):!0)}get(e,c){const a=this.storage.get(e);if(!a)return;const{rules:n,result:r}=a,s=this.checkRulesValidity(e,c,n),i=r.$unwatch?r.$unwatch:()=>({});return s?r:{$dirty:r.$dirty,$partial:!0,$unwatch:i}}}const S8={COLLECT_ALL:!0,COLLECT_NONE:!1},Li=Symbol("vuelidate#injectChildResults"),wi=Symbol("vuelidate#removeChildResults");function FN(t){let{$scope:e,instance:c}=t;const a={},n=b1([]),r=r2(()=>n.value.reduce((f,u)=>(f[u]=o2(a[u]),f),{}));function s(f,u){let{$registerAs:h,$scope:d,$stopPropagation:v}=u;v||e===S8.COLLECT_NONE||d===S8.COLLECT_NONE||e!==S8.COLLECT_ALL&&e!==d||(a[h]=f,n.value.push(h))}c.__vuelidateInjectInstances=[].concat(c.__vuelidateInjectInstances||[],s);function i(f){n.value=n.value.filter(u=>u!==f),delete a[f]}c.__vuelidateRemoveInstances=[].concat(c.__vuelidateRemoveInstances||[],i);const o=P1(Li,[]);H6(Li,c.__vuelidateInjectInstances);const l=P1(wi,[]);return H6(wi,c.__vuelidateRemoveInstances),{childResults:r,sendValidationResultsToParent:o,removeValidationResultsFromParent:l}}function Eu(t){return new Proxy(t,{get(e,c){return typeof e[c]=="object"?Eu(e[c]):r2(()=>e[c])}})}let bi=0;function cc(t,e){var c;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(a=t,t=void 0,e=void 0);let{$registerAs:n,$scope:r=S8.COLLECT_ALL,$stopPropagation:s,$externalResults:i,currentVueInstance:o}=a;const l=o||((c=TC())===null||c===void 0?void 0:c.proxy),f=l?l.$options:{};n||(bi+=1,n=`_vuelidate_${bi}`);const u=b1({}),h=new ON,{childResults:d,sendValidationResultsToParent:v,removeValidationResultsFromParent:V}=l?FN({$scope:r,instance:l}):{childResults:b1({})};if(!t&&f.validations){const z=f.validations;e=b1({}),Io(()=>{e.value=l,K1(()=>it(z)?z.call(e.value,new Eu(e.value)):z,H=>{u.value=ea({validations:H,state:e,childResults:d,resultsCache:h,globalConfig:a,instance:l,externalResults:i||l.vuelidateExternalResults})},{immediate:!0})}),a=f.validationsConfig||a}else{const z=R2(t)||AN(t)?t:p4(t||{});K1(z,H=>{u.value=ea({validations:H,state:e,childResults:d,resultsCache:h,globalConfig:a,instance:l??{},externalResults:i})},{immediate:!0})}return l&&(v.forEach(z=>z(u,{$registerAs:n,$scope:r,$stopPropagation:s})),Po(()=>V.forEach(z=>z(n)))),r2(()=>K3(K3({},o2(u.value)),d.value))}const ac=t=>{if(t=o2(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},ku=t=>(t=o2(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function e6(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];return a=>(a=o2(a),!ac(a)||e.every(n=>(n.lastIndex=0,n.test(a))))}e6(/^[a-zA-Z]*$/);e6(/^[a-zA-Z0-9]*$/);e6(/^\d*(\.\d+)?$/);const BN=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var UN=e6(BN),Iu={$validator:UN,$message:"Value is not a valid email address",$params:{type:"email"}};function $N(t){return e=>!ac(e)||ku(e)<=o2(t)}function qN(t){return{$validator:$N(t),$message:e=>{let{$params:c}=e;return`The maximum length allowed is ${c.max}`},$params:{max:t,type:"maxLength"}}}function jN(t){return e=>!ac(e)||ku(e)>=o2(t)}function WN(t){return{$validator:jN(t),$message:e=>{let{$params:c}=e;return`This field should be at least ${c.min} characters long`},$params:{min:t,type:"minLength"}}}function GN(t){return typeof t=="string"&&(t=t.trim()),ac(t)}var q1={$validator:GN,$message:"Value is required",$params:{type:"required"}};const KN=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;e6(KN);e6(/(^[0-9]*$)|(^-[0-9]+$)/);e6(/^[-]?\d*(\.\d+)?$/);const QN={setup(){return{hotels:F6(),v$:cc()}},data(){return{name:"",raiting:0,votes:0,hotelCity:"",hotelCountry:"Germany",price:null,img:"",facilities:[],possibleFacilities:["Free WiFi","Private Parking","24-hour front desk","Non-smoking rooms","Lift","Complimentary breakfast"],possibleCountries:[{name:"Germany",cities:["Berlin","Munich","Cologne"]},{name:"France",cities:["Paris","Strasburg","Lyon"]},{name:"UK",cities:["London","Edinburgh","Manchester"]},{name:"Greece",cities:["Athens","Rhodos","Kavala"]},{name:"Bulgaria",cities:["Sofia","Ruse","Plovdiv"]}]}},validations(){return{name:{required:q1,maxLength:qN(36)},hotelCity:{required:q1},price:{required:q1}}},methods:{filteredCities(){return this.possibleCountries.find(e=>e.name===this.hotelCountry).cities},async onSubmit(){const t=await this.v$.$validate();if(console.log("Is it all filled out?",t,this.v$),t){const e={name:this.name,raiting:this.raiting,votes:this.votes,city:this.hotelCity,country:this.hotelCountry,price:this.price,img:this.img,facilities:this.facilities};await this.isExistingHotel()||(e.img||(e.img="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"),console.log("added to firebase"),await Rf(c0(d3,"hotels",this.name),e)),this.$router.push("/successfulsubmition/YOUR SUBMITION WAS SUCCESSFULLY SUBMITTED")}},async isExistingHotel(){let t=!1,e=!1;return(await If(c0(d3,"hotels",this.name))).exists()&&(t=!0),this.hotels.isExisting()&&(e=!0),console.log(t&&e),t&&e}},watch:{hotelCountry(){this.filteredCities().includes(this.hotelCity)||(this.hotelCity="")}}},V4=t=>(I3("data-v-848e73c7"),t=t(),P3(),t),YN={class:"error-msg"},XN=V4(()=>C("label",{for:"name"},"*Hotel Name",-1)),JN=V4(()=>C("label",null,"Country",-1)),ZN=["for"],eE=["id","value"],tE={class:"error-msg"},cE=V4(()=>C("label",{for:"city"},"*city",-1)),aE=V4(()=>C("option",{value:"",disabled:""}," Select ",-1)),nE=["value"],rE={class:"error-msg"},sE=V4(()=>C("label",{for:"price"},"*price",-1)),iE=V4(()=>C("label",{for:"img"},"Image",-1)),oE=V4(()=>C("label",null,"Facilities",-1)),lE=["for"],fE=["id","value"],uE=V4(()=>C("button",null,"Sumbit your property",-1));function hE(t,e,c,a,n,r){return R(),D("div",null,[C("form",{action:"",class:"container",onSubmit:e[6]||(e[6]=Ia((...s)=>r.onSubmit&&r.onSubmit(...s),["prevent"]))},[C("div",null,[(R(!0),D(g2,null,B2(a.v$.name.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",YN,"*"+l2(s.$message),1)]))),128)),XN,e1(C("input",{id:"name",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>n.name=s),placeholder:"The name of your Hotel"},null,512),[[C3,n.name,void 0,{trim:!0}]])]),C("div",null,[JN,C("ul",null,[(R(!0),D(g2,null,B2(n.possibleCountries,s=>(R(),D("li",null,[C("label",{for:s.name},l2(s.name),9,ZN),e1(C("input",{id:s.name,type:"radio",value:s.name,"onUpdate:modelValue":e[1]||(e[1]=i=>n.hotelCountry=i)},null,8,eE),[[rM,n.hotelCountry]])]))),256))])]),C("div",null,[(R(!0),D(g2,null,B2(a.v$.hotelCity.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",tE,"*"+l2(s.$message),1)]))),128)),cE,e1(C("select",{id:"city","onUpdate:modelValue":e[2]||(e[2]=s=>n.hotelCity=s)},[aE,(R(!0),D(g2,null,B2(r.filteredCities(),s=>(R(),D("option",{value:s},l2(s),9,nE))),256))],512),[[x4,n.hotelCity]])]),C("div",null,[(R(!0),D(g2,null,B2(a.v$.price.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",rE,"*"+l2(s.$message),1)]))),128)),sE,e1(C("input",{id:"price",type:"number","onUpdate:modelValue":e[3]||(e[3]=s=>n.price=s),placeholder:"0"},null,512),[[C3,n.price]])]),C("div",null,[iE,e1(C("input",{id:"img",type:"text","onUpdate:modelValue":e[4]||(e[4]=s=>n.img=s),placeholder:"Please, provide a link to be used as a thumbnail for your listed property"},null,512),[[C3,n.img,void 0,{trim:!0}]])]),C("div",null,[oE,C("ul",null,[(R(!0),D(g2,null,B2(n.possibleFacilities,s=>(R(),D("li",null,[C("label",{for:s},l2(s),9,lE),e1(C("input",{id:s,type:"checkbox",value:s,"onUpdate:modelValue":e[5]||(e[5]=i=>n.facilities=i)},null,8,fE),[[nM,n.facilities]])]))),256))])]),uE],32)])}const dE=f1(QN,[["render",hE],["__scopeId","data-v-848e73c7"]]);const mE={async created(){this.allBooking=await this.getAllBookings(),console.log("1"),console.log(this.allBooking),await this.getUserBookings(),console.log("2"),console.log(this.username)},data(){return{allBooking:[],userBookings:[],isLogged:R1.currentUser,raiting:null}},methods:{async getAllBookings(){const t=await N0(T0(S0(d3,"bookings")));return console.log("3"),t},async getUserBookings(){console.log("4");for(const t of this.allBooking.docs){const e=t.data();console.log("5"),e.user===this.username&&this.userBookings.push(t)}},async deleteBooking(t){await tx(c0(d3,"bookings",t)),console.log(t),this.userBookings.splice(t,1)}},computed:{username(){if(this.isLogged)return console.log("6"),R1.currentUser.email}}},pE={key:0,class:"main-container"},vE={class:"image-container"},gE=["src"],HE={class:"info-container"},VE={class:"hotel-name"},zE={class:"nihgts"},CE={class:"total-amount"},ME={class:"amount"},yE=["onClick"],_E={key:1,class:"no-bookings"};function LE(t,e,c,a,n,r){const s=Q1("fa");return n.userBookings.length>0?(R(),D("div",pE,[(R(!0),D(g2,null,B2(n.userBookings,i=>(R(),D("div",{class:"booking-container",key:i.name},[C("div",vE,[C("img",{class:"pic",src:i.data().img,alt:"hotel pic"},null,8,gE)]),C("div",HE,[C("p",VE,l2(i.data().name),1),C("p",zE,"Nights: "+l2(i.data().nights),1),C("p",CE,[B1("Total amount: "),C("span",ME,l2(i.data().totalPrice)+" $",1)]),C("button",{class:"delete-button",onClick:o=>r.deleteBooking(i.id)},"Delete booking",8,yE)])]))),128))])):(R(),D("div",_E,[B1(" You currently don't have any bookings. "),_2(s,{icon:"sad-tear"})]))}const wE=f1(mE,[["render",LE],["__scopeId","data-v-487f570d"]]),bE={setup(){return{v$:cc()}},emits:["loggedIn"],data(){return{email:"",password:""}},validations(){return{password:{required:q1},email:{required:q1,email:Iu}}},methods:{async onSubmit(){const t=await this.v$.$validate();console.log("Is it all filled out?",t,this.v$),this.logIn()},logIn(){aS(R1,this.email,this.password).then(()=>{this.$emit("loggedIn"),console.log("Wohoooo"),this.$router.push(`/successfulsubmition/Welcome ${R1.currentUser.displayName}`)}).catch(t=>{alert("The E-mail address or the password were not correct. Try again")})}}},xE=C("label",{for:"email"},"Email",-1),SE={class:"error-msg"},AE=C("label",{for:"password"},"Password",-1),TE={class:"error-msg"},NE=C("button",null,"Log In",-1);function EE(t,e,c,a,n,r){return R(),D("form",{onSubmit:e[2]||(e[2]=Ia((...s)=>r.onSubmit&&r.onSubmit(...s),["prevent"]))},[C("div",null,[xE,e1(C("input",{id:"email",type:"email","onUpdate:modelValue":e[0]||(e[0]=s=>n.email=s)},null,512),[[C3,n.email,void 0,{trim:!0}]]),(R(!0),D(g2,null,B2(a.v$.email.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",SE,"*"+l2(s.$message),1)]))),128))]),C("div",null,[AE,e1(C("input",{id:"password",type:"password","onUpdate:modelValue":e[1]||(e[1]=s=>n.password=s)},null,512),[[C3,n.password]]),(R(!0),D(g2,null,B2(a.v$.password.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",TE,"*"+l2(s.$message),1)]))),128))]),NE],32)}const kE=f1(bE,[["render",EE]]);const IE={},PE=t=>(I3("data-v-78d79bae"),t=t(),P3(),t),RE={class:"email-container"},DE=PE(()=>C("p",null,"Email: georgi.iliev9191@gmail.com",-1)),OE=[DE];function FE(t,e){return R(),D("div",RE,OE)}const BE=f1(IE,[["render",FE],["__scopeId","data-v-78d79bae"]]);const UE={setup(){return{v$:cc()}},props:{price:Number},data(){return{monthFrom:"January",dateFrom:1,monthTo:"January",dateTo:1,possibleMonths:[{month:"January",days:31},{month:"February",days:28},{month:"March",days:31},{month:"April",days:30},{month:"May",days:31},{month:"June",days:30},{month:"July",days:31},{month:"August",days:31},{month:"September",days:30},{month:"October",days:31},{month:"November",days:30},{month:"December",days:31}]}},validations(){return{month:{required:q1},date:{required:q1}}},emits:["priceObject"],methods:{getMonthsDates(t){return this.possibleMonths.find(c=>c.month===t).days},getMonthsIndex(t){for(let e=0;e<this.possibleMonths.length;e++)if(t===this.possibleMonths[e].month)return e},calculateAndEmitPrice(){const t={nights:this.nights,totalPrice:this.price*this.nights};this.$emit("priceObject",t)}},computed:{nights(){const t=this.getMonthsIndex(this.monthFrom),e=this.getMonthsIndex(this.monthTo);let c=0;if(this.monthFrom===this.monthTo&&this.dateFrom>=this.dateTo)return c=365-(this.dateFrom-this.dateTo),c;if(t<e){for(let a=t+1;a<e;a++)c+=this.possibleMonths[a].days;c+=this.possibleMonths[t].days-this.dateFrom+1,c+=this.dateTo-1}else if(t>e){for(let a=t;a<=11;a++)c+=this.possibleMonths[a].days;for(let a=0;a<e;a++)c+=this.possibleMonths[a].days;c=c-this.dateFrom+1,c+=this.dateTo}else c=this.dateTo-this.dateFrom;return console.log(c),c}}},z4=t=>(I3("data-v-637b4c32"),t=t(),P3(),t),$E={class:"main-container"},qE={class:"from-container"},jE=z4(()=>C("p",{class:"from-to"},"From:",-1)),WE=z4(()=>C("label",{for:"monthFrom"},"Month",-1)),GE=["value"],KE=z4(()=>C("label",{for:"dateFrom"},"Date",-1)),QE=z4(()=>C("option",{value:"",disabled:""}," Select ",-1)),YE=["value"],XE={class:"to-container"},JE=z4(()=>C("p",{class:"from-to"},"To:",-1)),ZE=z4(()=>C("label",{for:"monthTo"},"Month",-1)),ek=["value"],tk=z4(()=>C("label",{for:"dateTo"},"Date",-1)),ck=z4(()=>C("option",{value:"",disabled:""}," Select ",-1)),ak=["value"];function nk(t,e,c,a,n,r){return R(),D(g2,null,[C("div",$E,[C("div",qE,[jE,C("div",null,[WE,e1(C("select",{id:"monthFrom","onUpdate:modelValue":e[0]||(e[0]=s=>n.monthFrom=s)},[(R(!0),D(g2,null,B2(n.possibleMonths,s=>(R(),D("option",{value:s.month},l2(s.month),9,GE))),256))],512),[[x4,n.monthFrom]])]),C("div",null,[KE,e1(C("select",{id:"dateFrom","onUpdate:modelValue":e[1]||(e[1]=s=>n.dateFrom=s)},[QE,(R(!0),D(g2,null,B2(r.getMonthsDates(n.monthFrom),s=>(R(),D("option",{value:s},l2(s),9,YE))),256))],512),[[x4,n.dateFrom]])])]),C("div",XE,[JE,C("div",null,[ZE,e1(C("select",{id:"monthTo","onUpdate:modelValue":e[2]||(e[2]=s=>n.monthTo=s)},[(R(!0),D(g2,null,B2(n.possibleMonths,s=>(R(),D("option",{value:s.month},l2(s.month),9,ek))),256))],512),[[x4,n.monthTo]])]),C("div",null,[tk,e1(C("select",{id:"dateTo","onUpdate:modelValue":e[3]||(e[3]=s=>n.dateTo=s)},[ck,(R(!0),D(g2,null,B2(r.getMonthsDates(n.monthTo),s=>(R(),D("option",{value:s},l2(s),9,ak))),256))],512),[[x4,n.dateTo]])])])]),C("button",{onClick:e[4]||(e[4]=(...s)=>r.calculateAndEmitPrice&&r.calculateAndEmitPrice(...s))},"Calculate days")],64)}const rk=f1(UE,[["render",nk],["__scopeId","data-v-637b4c32"]]);const sk={setup(){return{hotels:F6()}},components:{SelectDates:rk},data(){return{name:"",hotel:{},found:!1,priceObject:{},isCalculated:!1}},computed:{showButon(){if(this.isCalculated&&this.priceObject.totalPrice>0)return!0}},created(){this.name=this.$route.params.id,this.hotels.allHotels.forEach(t=>{t.name===this.name&&(this.hotel=t,this.found=!0)}),this.found||this.getFirebaseHotels().forEach(e=>{hotel.name===this.name&&(this.hotel=hotel,this.found=!0)})},methods:{async getFirebaseHotels(){return await N0(T0(S0(d3,"hotels")))},handleTotalPrice(t){this.priceObject=t,this.priceObject.user=R1.currentUser.email,this.priceObject.img=this.hotel.img,this.priceObject.name=this.hotel.name,this.isCalculated=!0},async bookToProfile(){if(R1.currentUser){const e=`${this.hotel.name} - ${this.priceObject.user}`;console.log(e),console.log(1),await this.checkIfBookingExists(e)?(console.log(this.checkIfBookingExists(e)),alert("You already have a booking for this hotel")):(await Rf(c0(d3,"bookings",e),this.priceObject),this.$router.push("/successfulsubmition/Your booking was successful"))}},async checkIfBookingExists(t){console.log(2),console.log(t);const e=c0(d3,"bookings",t);console.log(e);const c=await If(e);return console.log(c.exists()),c.exists()}}},ik=t=>(I3("data-v-47ae3553"),t=t(),P3(),t),ok={class:"main-container"},lk={class:"hotel-name"},fk=["src"],uk={class:"location"},hk={key:0,class:"calculation-container"},dk={class:"inner-calculation-container"},mk={class:"total-cost-container"},pk=ik(()=>C("p",{class:"total-cost"},"Total cost:",-1)),vk={class:"total-cost-number"},gk={class:"nights"};function Hk(t,e,c,a,n,r){const s=Q1("SelectDates");return R(),D(g2,null,[C("div",ok,[C("p",lk,l2(n.hotel.name),1),C("img",{class:"pic",src:n.hotel.img,alt:"Hotel picture"},null,8,fk),C("div",uk,l2(n.hotel.city)+", "+l2(n.hotel.country),1)]),C("div",null,[C("div",null,[_2(s,{onPriceObject:r.handleTotalPrice,price:n.hotel.price},null,8,["onPriceObject","price"])]),r.showButon?(R(),D("div",hk,[C("div",dk,[C("div",mk,[pk,C("p",vk,[B1(l2(n.priceObject.totalPrice)+" $ ",1),C("span",null,"on "+l2(n.hotel.price)+"$ per night",1)])]),C("p",gk,"Nights: "+l2(n.priceObject.nights),1),C("button",{class:"book-it-button",onClick:e[0]||(e[0]=(...i)=>r.bookToProfile&&r.bookToProfile(...i))},"Book it for "+l2(n.priceObject.totalPrice)+"$",1),C("button",{class:"cancel-button",onClick:e[1]||(e[1]=i=>this.isCalculated=!1)},"Cancel")])])):L4("",!0)])],64)}const Vk=f1(sk,[["render",Hk],["__scopeId","data-v-47ae3553"]]),zk={},Ck=C("h1",null,"NOT FOUND !",-1),Mk=[Ck];function yk(t,e){return R(),D("div",null,Mk)}const _k=f1(zk,[["render",yk]]);const Lk={data(){return{message:""}},mounted(){this.message=this.$route.params.message||"Confirmed"}},wk=t=>(I3("data-v-97af53df"),t=t(),P3(),t),bk=wk(()=>C("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdab4SR0RyiWHNbIQQgFQKl2ZxLqgEbdjuPkkBl0SVg&s",alt:""},null,-1));function xk(t,e,c,a,n,r){return R(),D("div",null,[C("h1",null,l2(n.message),1),bk])}const Sk=f1(Lk,[["render",xk],["__scopeId","data-v-97af53df"]]);const Ak={setup(){return{v$:cc()}},emits:["loggedIn"],data(){return{firstName:"",lastName:"",password:"",email:""}},validations(){return{firstName:{required:q1},lastName:{required:q1},password:{required:q1,minLength:WN(6)},email:{required:q1,email:Iu}}},methods:{async onSubmit(){const t=await this.v$.$validate();console.log("Is it all filled out?",t,this.v$),t&&this.signUp()},signUp(){cS(R1,this.email,this.password).then(t=>{rS(R1.currentUser,{displayName:`${this.firstName} ${this.lastName}`}).then(()=>{this.$emit("loggedIn"),this.$router.push("/successfulsubmition/Account successfully created")})}).catch(t=>{console.log(t.message)})}}},R0=t=>(I3("data-v-3837e206"),t=t(),P3(),t),Tk=R0(()=>C("label",{for:"firstName"},"*First Name",-1)),Nk={class:"error-msg"},Ek=R0(()=>C("label",{for:"lastName"},"*Last Name",-1)),kk={class:"error-msg"},Ik=R0(()=>C("label",{for:"email"},"*E-mail",-1)),Pk={class:"error-msg"},Rk=R0(()=>C("label",{for:"password"},"*Password",-1)),Dk={class:"error-msg"},Ok=R0(()=>C("button",null,"Register",-1));function Fk(t,e,c,a,n,r){return R(),D("form",{onSubmit:e[4]||(e[4]=Ia((...s)=>r.onSubmit&&r.onSubmit(...s),["prevent"]))},[C("div",null,[C("div",null,[Tk,e1(C("input",{id:"firstName",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>n.firstName=s)},null,512),[[C3,n.firstName,void 0,{trim:!0}]]),(R(!0),D(g2,null,B2(a.v$.firstName.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",Nk,"*"+l2(s.$message),1)]))),128))]),C("div",null,[Ek,e1(C("input",{id:"lastName",type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>n.lastName=s)},null,512),[[C3,n.lastName,void 0,{trim:!0}]]),(R(!0),D(g2,null,B2(a.v$.lastName.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",kk,"*"+l2(s.$message),1)]))),128))]),C("div",null,[Ik,e1(C("input",{id:"email",type:"email","onUpdate:modelValue":e[2]||(e[2]=s=>n.email=s)},null,512),[[C3,n.email,void 0,{trim:!0}]]),(R(!0),D(g2,null,B2(a.v$.email.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",Pk,"*"+l2(s.$message),1)]))),128))]),C("div",null,[Rk,e1(C("input",{id:"password",type:"password","onUpdate:modelValue":e[3]||(e[3]=s=>n.password=s)},null,512),[[C3,n.password,void 0,{trim:!0}]]),(R(!0),D(g2,null,B2(a.v$.password.$errors,s=>(R(),D("div",{class:"input-errors",key:s.$uid},[C("div",Dk,"*"+l2(s.$message),1)]))),128))]),Ok])],32)}const Bk=f1(Ak,[["render",Fk],["__scopeId","data-v-3837e206"]]);const Uk={async created(){const t=await N0(T0(S0(d3,"bookings"))),e=await R1.currentUser.email;for(const c of t.docs)c.data().user===e&&(this.moneyOwed+=c.data().totalPrice);this.username=R1.currentUser.displayName},data(){return{moneyOwed:0,username:"",userBookings:[]}},methods:{loggOut(){oS(R1).then(()=>{this.$router.push("/log-in")})}}},$k={class:"account-message"},qk={class:"owe-amount"};function jk(t,e,c,a,n,r){return R(),D("div",null,[C("p",$k,l2(n.username),1),C("p",qk,"You owe "+l2(n.moneyOwed)+"$",1),C("button",{onClick:e[0]||(e[0]=(...s)=>r.loggOut&&r.loggOut(...s))},"Sing out")])}const Wk=f1(Uk,[["render",jk],["__scopeId","data-v-97bc90af"]]),Gk=[{path:"/",name:"home",component:pN},{path:"/hotels",component:xN},{path:"/hotels/:id",name:"hotel",component:Vk},{path:"/list-property",component:dE},{path:"/my-bookings",component:wE},{path:"/log-in",component:kE},{path:"/contact-us",component:BE},{path:"/:pathMatch(.*)*",name:"NotFound",component:_k},{path:"/successfulsubmition/:message",name:"successfulSubmition",component:Sk},{path:"/register",component:Bk},{path:"/profile",component:Wk}],Kk=UT({history:nT(),routes:Gk});function xi(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),c.push.apply(c,a)}return c}function O(t){for(var e=1;e<arguments.length;e++){var c=arguments[e]!=null?arguments[e]:{};e%2?xi(Object(c),!0).forEach(function(a){X2(t,a,c[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):xi(Object(c)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(c,a))})}return t}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function Qk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Si(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Yk(t,e,c){return e&&Si(t.prototype,e),c&&Si(t,c),Object.defineProperty(t,"prototype",{writable:!1}),t}function X2(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function Yn(t,e){return Jk(t)||eI(t,e)||Pu(t,e)||cI()}function D0(t){return Xk(t)||Zk(t)||Pu(t)||tI()}function Xk(t){if(Array.isArray(t))return ta(t)}function Jk(t){if(Array.isArray(t))return t}function Zk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eI(t,e){var c=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(c!=null){var a=[],n=!0,r=!1,s,i;try{for(c=c.call(t);!(n=(s=c.next()).done)&&(a.push(s.value),!(e&&a.length===e));n=!0);}catch(o){r=!0,i=o}finally{try{!n&&c.return!=null&&c.return()}finally{if(r)throw i}}return a}}function Pu(t,e){if(t){if(typeof t=="string")return ta(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);if(c==="Object"&&t.constructor&&(c=t.constructor.name),c==="Map"||c==="Set")return Array.from(t);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ta(t,e)}}function ta(t,e){(e==null||e>t.length)&&(e=t.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=t[c];return a}function tI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ai=function(){},Xn={},Ru={},Du=null,Ou={mark:Ai,measure:Ai};try{typeof window<"u"&&(Xn=window),typeof document<"u"&&(Ru=document),typeof MutationObserver<"u"&&(Du=MutationObserver),typeof performance<"u"&&(Ou=performance)}catch{}var aI=Xn.navigator||{},Ti=aI.userAgent,Ni=Ti===void 0?"":Ti,h4=Xn,P2=Ru,Ei=Du,o8=Ou;h4.document;var F3=!!P2.documentElement&&!!P2.head&&typeof P2.addEventListener=="function"&&typeof P2.createElement=="function",Fu=~Ni.indexOf("MSIE")||~Ni.indexOf("Trident/"),l8,f8,u8,h8,d8,N3="___FONT_AWESOME___",ca=16,Bu="fa",Uu="svg-inline--fa",K4="data-fa-i2svg",aa="data-fa-pseudo-element",nI="data-fa-pseudo-element-pending",Jn="data-prefix",Zn="data-icon",ki="fontawesome-i2svg",rI="async",sI=["HTML","HEAD","STYLE","SCRIPT"],$u=function(){try{return!0}catch{return!1}}(),E2="classic",F2="sharp",er=[E2,F2];function O0(t){return new Proxy(t,{get:function(c,a){return a in c?c[a]:c[E2]}})}var s0=O0((l8={},X2(l8,E2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),X2(l8,F2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),l8)),i0=O0((f8={},X2(f8,E2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),X2(f8,F2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),f8)),o0=O0((u8={},X2(u8,E2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),X2(u8,F2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),u8)),iI=O0((h8={},X2(h8,E2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),X2(h8,F2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),h8)),oI=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qu="fa-layers-text",lI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fI=O0((d8={},X2(d8,E2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),X2(d8,F2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),d8)),ju=[1,2,3,4,5,6,7,8,9,10],uI=ju.concat([11,12,13,14,15,16,17,18,19,20]),hI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l0=new Set;Object.keys(i0[E2]).map(l0.add.bind(l0));Object.keys(i0[F2]).map(l0.add.bind(l0));var dI=[].concat(er,D0(l0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N4.GROUP,N4.SWAP_OPACITY,N4.PRIMARY,N4.SECONDARY]).concat(ju.map(function(t){return"".concat(t,"x")})).concat(uI.map(function(t){return"w-".concat(t)})),Ae=h4.FontAwesomeConfig||{};function mI(t){var e=P2.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function pI(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(P2&&typeof P2.querySelector=="function"){var vI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vI.forEach(function(t){var e=Yn(t,2),c=e[0],a=e[1],n=pI(mI(c));n!=null&&(Ae[a]=n)})}var Wu={styleDefault:"solid",familyDefault:"classic",cssPrefix:Bu,replacementClass:Uu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ae.familyPrefix&&(Ae.cssPrefix=Ae.familyPrefix);var B6=O(O({},Wu),Ae);B6.autoReplaceSvg||(B6.observeMutations=!1);var q={};Object.keys(Wu).forEach(function(t){Object.defineProperty(q,t,{enumerable:!0,set:function(c){B6[t]=c,Te.forEach(function(a){return a(q)})},get:function(){return B6[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){B6.cssPrefix=e,Te.forEach(function(c){return c(q)})},get:function(){return B6.cssPrefix}});h4.FontAwesomeConfig=q;var Te=[];function gI(t){return Te.push(t),function(){Te.splice(Te.indexOf(t),1)}}var q3=ca,i3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HI(t){if(!(!t||!F3)){var e=P2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var c=P2.head.childNodes,a=null,n=c.length-1;n>-1;n--){var r=c[n],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return P2.head.insertBefore(e,a),t}}var VI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f0(){for(var t=12,e="";t-- >0;)e+=VI[Math.random()*62|0];return e}function te(t){for(var e=[],c=(t||[]).length>>>0;c--;)e[c]=t[c];return e}function tr(t){return t.classList?te(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Gu(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zI(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,'="').concat(Gu(t[c]),'" ')},"").trim()}function nc(t){return Object.keys(t||{}).reduce(function(e,c){return e+"".concat(c,": ").concat(t[c].trim(),";")},"")}function cr(t){return t.size!==i3.size||t.x!==i3.x||t.y!==i3.y||t.rotate!==i3.rotate||t.flipX||t.flipY}function CI(t){var e=t.transform,c=t.containerWidth,a=t.iconWidth,n={transform:"translate(".concat(c/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(r," ").concat(s," ").concat(i)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:n,inner:o,path:l}}function MI(t){var e=t.transform,c=t.width,a=c===void 0?ca:c,n=t.height,r=n===void 0?ca:n,s=t.startCentered,i=s===void 0?!1:s,o="";return i&&Fu?o+="translate(".concat(e.x/q3-a/2,"em, ").concat(e.y/q3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(e.x/q3,"em), calc(-50% + ").concat(e.y/q3,"em)) "):o+="translate(".concat(e.x/q3,"em, ").concat(e.y/q3,"em) "),o+="scale(".concat(e.size/q3*(e.flipX?-1:1),", ").concat(e.size/q3*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var yI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ku(){var t=Bu,e=Uu,c=q.cssPrefix,a=q.replacementClass,n=yI;if(c!==t||a!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(r,".".concat(c,"-")).replace(s,"--".concat(c,"-")).replace(i,".".concat(a))}return n}var Ii=!1;function e5(){q.autoAddCss&&!Ii&&(HI(Ku()),Ii=!0)}var _I={mixout:function(){return{dom:{css:Ku,insertCss:e5}}},hooks:function(){return{beforeDOMElementCreation:function(){e5()},beforeI2svg:function(){e5()}}}},E3=h4||{};E3[N3]||(E3[N3]={});E3[N3].styles||(E3[N3].styles={});E3[N3].hooks||(E3[N3].hooks={});E3[N3].shims||(E3[N3].shims=[]);var j1=E3[N3],Qu=[],LI=function t(){P2.removeEventListener("DOMContentLoaded",t),lt=1,Qu.map(function(e){return e()})},lt=!1;F3&&(lt=(P2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P2.readyState),lt||P2.addEventListener("DOMContentLoaded",LI));function wI(t){F3&&(lt?setTimeout(t,0):Qu.push(t))}function F0(t){var e=t.tag,c=t.attributes,a=c===void 0?{}:c,n=t.children,r=n===void 0?[]:n;return typeof t=="string"?Gu(t):"<".concat(e," ").concat(zI(a),">").concat(r.map(F0).join(""),"</").concat(e,">")}function Pi(t,e,c){if(t&&t[e]&&t[e][c])return{prefix:e,iconName:c,icon:t[e][c]}}var bI=function(e,c){return function(a,n,r,s){return e.call(c,a,n,r,s)}},t5=function(e,c,a,n){var r=Object.keys(e),s=r.length,i=n!==void 0?bI(c,n):c,o,l,f;for(a===void 0?(o=1,f=e[r[0]]):(o=0,f=a);o<s;o++)l=r[o],f=i(f,e[l],l,e);return f};function xI(t){for(var e=[],c=0,a=t.length;c<a;){var n=t.charCodeAt(c++);if(n>=55296&&n<=56319&&c<a){var r=t.charCodeAt(c++);(r&64512)==56320?e.push(((n&1023)<<10)+(r&1023)+65536):(e.push(n),c--)}else e.push(n)}return e}function na(t){var e=xI(t);return e.length===1?e[0].toString(16):null}function SI(t,e){var c=t.length,a=t.charCodeAt(e),n;return a>=55296&&a<=56319&&c>e+1&&(n=t.charCodeAt(e+1),n>=56320&&n<=57343)?(a-55296)*1024+n-56320+65536:a}function Ri(t){return Object.keys(t).reduce(function(e,c){var a=t[c],n=!!a.icon;return n?e[a.iconName]=a.icon:e[c]=a,e},{})}function ra(t,e){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=c.skipHooks,n=a===void 0?!1:a,r=Ri(e);typeof j1.hooks.addPack=="function"&&!n?j1.hooks.addPack(t,Ri(e)):j1.styles[t]=O(O({},j1.styles[t]||{}),r),t==="fas"&&ra("fa",e)}var m8,p8,v8,d6=j1.styles,AI=j1.shims,TI=(m8={},X2(m8,E2,Object.values(o0[E2])),X2(m8,F2,Object.values(o0[F2])),m8),ar=null,Yu={},Xu={},Ju={},Zu={},eh={},NI=(p8={},X2(p8,E2,Object.keys(s0[E2])),X2(p8,F2,Object.keys(s0[F2])),p8);function EI(t){return~dI.indexOf(t)}function kI(t,e){var c=e.split("-"),a=c[0],n=c.slice(1).join("-");return a===t&&n!==""&&!EI(n)?n:null}var th=function(){var e=function(r){return t5(d6,function(s,i,o){return s[o]=t5(i,r,{}),s},{})};Yu=e(function(n,r,s){if(r[3]&&(n[r[3]]=s),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){n[o.toString(16)]=s})}return n}),Xu=e(function(n,r,s){if(n[s]=s,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){n[o]=s})}return n}),eh=e(function(n,r,s){var i=r[2];return n[s]=s,i.forEach(function(o){n[o]=s}),n});var c="far"in d6||q.autoFetchSvg,a=t5(AI,function(n,r){var s=r[0],i=r[1],o=r[2];return i==="far"&&!c&&(i="fas"),typeof s=="string"&&(n.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(n.unicodes[s.toString(16)]={prefix:i,iconName:o}),n},{names:{},unicodes:{}});Ju=a.names,Zu=a.unicodes,ar=rc(q.styleDefault,{family:q.familyDefault})};gI(function(t){ar=rc(t.styleDefault,{family:q.familyDefault})});th();function nr(t,e){return(Yu[t]||{})[e]}function II(t,e){return(Xu[t]||{})[e]}function E4(t,e){return(eh[t]||{})[e]}function ch(t){return Ju[t]||{prefix:null,iconName:null}}function PI(t){var e=Zu[t],c=nr("fas",t);return e||(c?{prefix:"fas",iconName:c}:null)||{prefix:null,iconName:null}}function d4(){return ar}var rr=function(){return{prefix:null,iconName:null,rest:[]}};function rc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.family,a=c===void 0?E2:c,n=s0[a][t],r=i0[a][t]||i0[a][n],s=t in j1.styles?t:null;return r||s||null}var Di=(v8={},X2(v8,E2,Object.keys(o0[E2])),X2(v8,F2,Object.keys(o0[F2])),v8);function sc(t){var e,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.skipLookups,n=a===void 0?!1:a,r=(e={},X2(e,E2,"".concat(q.cssPrefix,"-").concat(E2)),X2(e,F2,"".concat(q.cssPrefix,"-").concat(F2)),e),s=null,i=E2;(t.includes(r[E2])||t.some(function(l){return Di[E2].includes(l)}))&&(i=E2),(t.includes(r[F2])||t.some(function(l){return Di[F2].includes(l)}))&&(i=F2);var o=t.reduce(function(l,f){var u=kI(q.cssPrefix,f);if(d6[f]?(f=TI[i].includes(f)?iI[i][f]:f,s=f,l.prefix=f):NI[i].indexOf(f)>-1?(s=f,l.prefix=rc(f,{family:i})):u?l.iconName=u:f!==q.replacementClass&&f!==r[E2]&&f!==r[F2]&&l.rest.push(f),!n&&l.prefix&&l.iconName){var h=s==="fa"?ch(l.iconName):{},d=E4(l.prefix,l.iconName);h.prefix&&(s=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!d6.far&&d6.fas&&!q.autoFetchSvg&&(l.prefix="fas")}return l},rr());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===F2&&(d6.fass||q.autoFetchSvg)&&(o.prefix="fass",o.iconName=E4(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=d4()||"fas"),o}var RI=function(){function t(){Qk(this,t),this.definitions={}}return Yk(t,[{key:"add",value:function(){for(var c=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){c.definitions[i]=O(O({},c.definitions[i]||{}),s[i]),ra(i,s[i]);var o=o0[E2][i];o&&ra(o,s[i]),th()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(c,a){var n=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(n).map(function(r){var s=n[r],i=s.prefix,o=s.iconName,l=s.icon,f=l[2];c[i]||(c[i]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(c[i][u]=l)}),c[i][o]=l}),c}}]),t}(),Oi=[],m6={},_6={},DI=Object.keys(_6);function OI(t,e){var c=e.mixoutsTo;return Oi=t,m6={},Object.keys(_6).forEach(function(a){DI.indexOf(a)===-1&&delete _6[a]}),Oi.forEach(function(a){var n=a.mixout?a.mixout():{};if(Object.keys(n).forEach(function(s){typeof n[s]=="function"&&(c[s]=n[s]),ot(n[s])==="object"&&Object.keys(n[s]).forEach(function(i){c[s]||(c[s]={}),c[s][i]=n[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){m6[s]||(m6[s]=[]),m6[s].push(r[s])})}a.provides&&a.provides(_6)}),c}function sa(t,e){for(var c=arguments.length,a=new Array(c>2?c-2:0),n=2;n<c;n++)a[n-2]=arguments[n];var r=m6[t]||[];return r.forEach(function(s){e=s.apply(null,[e].concat(a))}),e}function Q4(t){for(var e=arguments.length,c=new Array(e>1?e-1:0),a=1;a<e;a++)c[a-1]=arguments[a];var n=m6[t]||[];n.forEach(function(r){r.apply(null,c)})}function k3(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _6[t]?_6[t].apply(null,e):void 0}function ia(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,c=t.prefix||d4();if(e)return e=E4(c,e)||e,Pi(ah.definitions,c,e)||Pi(j1.styles,c,e)}var ah=new RI,FI=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,Q4("noAuto")},BI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F3?(Q4("beforeI2svg",e),k3("pseudoElements2svg",e),k3("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,wI(function(){$I({autoReplaceSvgRoot:c}),Q4("watch",e)})}},UI={icon:function(e){if(e===null)return null;if(ot(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:E4(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var c=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=rc(e[0]);return{prefix:a,iconName:E4(a,c)||c}}if(typeof e=="string"&&(e.indexOf("".concat(q.cssPrefix,"-"))>-1||e.match(oI))){var n=sc(e.split(" "),{skipLookups:!0});return{prefix:n.prefix||d4(),iconName:E4(n.prefix,n.iconName)||n.iconName}}if(typeof e=="string"){var r=d4();return{prefix:r,iconName:E4(r,e)||e}}}},E1={noAuto:FI,config:q,dom:BI,parse:UI,library:ah,findIconDefinition:ia,toHtml:F0},$I=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=e.autoReplaceSvgRoot,a=c===void 0?P2:c;(Object.keys(j1.styles).length>0||q.autoFetchSvg)&&F3&&q.autoReplaceSvg&&E1.dom.i2svg({node:a})};function ic(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return F0(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F3){var a=P2.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function qI(t){var e=t.children,c=t.main,a=t.mask,n=t.attributes,r=t.styles,s=t.transform;if(cr(s)&&c.found&&!a.found){var i=c.width,o=c.height,l={x:i/o/2,y:.5};n.style=nc(O(O({},r),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function jI(t){var e=t.prefix,c=t.iconName,a=t.children,n=t.attributes,r=t.symbol,s=r===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(c):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},n),{},{id:s}),children:a}]}]}function sr(t){var e=t.icons,c=e.main,a=e.mask,n=t.prefix,r=t.iconName,s=t.transform,i=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,h=t.watchable,d=h===void 0?!1:h,v=a.found?a:c,V=v.width,z=v.height,H=n==="fak",M=[q.replacementClass,r?"".concat(q.cssPrefix,"-").concat(r):""].filter(function(X){return u.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(u.classes).join(" "),N={children:[],attributes:O(O({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:M,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(z)})},A=H&&!~u.classes.indexOf("fa-fw")?{width:"".concat(V/z*16*.0625,"em")}:{};d&&(N.attributes[K4]=""),o&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(f||f0())},children:[o]}),delete N.attributes.title);var j=O(O({},N),{},{prefix:n,iconName:r,main:c,mask:a,maskId:l,transform:s,symbol:i,styles:O(O({},A),u.styles)}),n2=a.found&&c.found?k3("generateAbstractMask",j)||{children:[],attributes:{}}:k3("generateAbstractIcon",j)||{children:[],attributes:{}},f2=n2.children,a2=n2.attributes;return j.children=f2,j.attributes=a2,i?jI(j):qI(j)}function Fi(t){var e=t.content,c=t.width,a=t.height,n=t.transform,r=t.title,s=t.extra,i=t.watchable,o=i===void 0?!1:i,l=O(O(O({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});o&&(l[K4]="");var f=O({},s.styles);cr(n)&&(f.transform=MI({transform:n,startCentered:!0,width:c,height:a}),f["-webkit-transform"]=f.transform);var u=nc(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function WI(t){var e=t.content,c=t.title,a=t.extra,n=O(O(O({},a.attributes),c?{title:c}:{}),{},{class:a.classes.join(" ")}),r=nc(a.styles);r.length>0&&(n.style=r);var s=[];return s.push({tag:"span",attributes:n,children:[e]}),c&&s.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),s}var c5=j1.styles;function oa(t){var e=t[0],c=t[1],a=t.slice(4),n=Yn(a,1),r=n[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(N4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(N4.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(N4.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:c,icon:s}}var GI={found:!1,width:512,height:512};function KI(t,e){!$u&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function la(t,e){var c=e;return e==="fa"&&q.styleDefault!==null&&(e=d4()),new Promise(function(a,n){if(k3("missingIconAbstract"),c==="fa"){var r=ch(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&c5[e]&&c5[e][t]){var s=c5[e][t];return a(oa(s))}KI(t,e),a(O(O({},GI),{},{icon:q.showMissingIcons&&t?k3("missingIconAbstract")||{}:{}}))})}var Bi=function(){},fa=q.measurePerformance&&o8&&o8.mark&&o8.measure?o8:{mark:Bi,measure:Bi},ge='FA "6.5.1"',QI=function(e){return fa.mark("".concat(ge," ").concat(e," begins")),function(){return nh(e)}},nh=function(e){fa.mark("".concat(ge," ").concat(e," ends")),fa.measure("".concat(ge," ").concat(e),"".concat(ge," ").concat(e," begins"),"".concat(ge," ").concat(e," ends"))},ir={begin:QI,end:nh},A8=function(){};function Ui(t){var e=t.getAttribute?t.getAttribute(K4):null;return typeof e=="string"}function YI(t){var e=t.getAttribute?t.getAttribute(Jn):null,c=t.getAttribute?t.getAttribute(Zn):null;return e&&c}function XI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function JI(){if(q.autoReplaceSvg===!0)return T8.replace;var t=T8[q.autoReplaceSvg];return t||T8.replace}function ZI(t){return P2.createElementNS("http://www.w3.org/2000/svg",t)}function eP(t){return P2.createElement(t)}function rh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.ceFn,a=c===void 0?t.tag==="svg"?ZI:eP:c;if(typeof t=="string")return P2.createTextNode(t);var n=a(t.tag);Object.keys(t.attributes||[]).forEach(function(s){n.setAttribute(s,t.attributes[s])});var r=t.children||[];return r.forEach(function(s){n.appendChild(rh(s,{ceFn:a}))}),n}function tP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var T8={replace:function(e){var c=e[0];if(c.parentNode)if(e[1].forEach(function(n){c.parentNode.insertBefore(rh(n),c)}),c.getAttribute(K4)===null&&q.keepOriginalSource){var a=P2.createComment(tP(c));c.parentNode.replaceChild(a,c)}else c.remove()},nest:function(e){var c=e[0],a=e[1];if(~tr(c).indexOf(q.replacementClass))return T8.replace(e);var n=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,o){return o===q.replacementClass||o.match(n)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?c.removeAttribute("class"):c.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return F0(i)}).join(`
`);c.setAttribute(K4,""),c.innerHTML=s}};function $i(t){t()}function sh(t,e){var c=typeof e=="function"?e:A8;if(t.length===0)c();else{var a=$i;q.mutateApproach===rI&&(a=h4.requestAnimationFrame||$i),a(function(){var n=JI(),r=ir.begin("mutate");t.map(n),r(),c()})}}var or=!1;function ih(){or=!0}function ua(){or=!1}var ft=null;function qi(t){if(Ei&&q.observeMutations){var e=t.treeCallback,c=e===void 0?A8:e,a=t.nodeCallback,n=a===void 0?A8:a,r=t.pseudoElementsCallback,s=r===void 0?A8:r,i=t.observeMutationsRoot,o=i===void 0?P2:i;ft=new Ei(function(l){if(!or){var f=d4();te(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Ui(u.addedNodes[0])&&(q.searchPseudoElements&&s(u.target),c(u.target)),u.type==="attributes"&&u.target.parentNode&&q.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&Ui(u.target)&&~hI.indexOf(u.attributeName))if(u.attributeName==="class"&&YI(u.target)){var h=sc(tr(u.target)),d=h.prefix,v=h.iconName;u.target.setAttribute(Jn,d||f),v&&u.target.setAttribute(Zn,v)}else XI(u.target)&&n(u.target)})}}),F3&&ft.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cP(){ft&&ft.disconnect()}function aP(t){var e=t.getAttribute("style"),c=[];return e&&(c=e.split(";").reduce(function(a,n){var r=n.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),c}function nP(t){var e=t.getAttribute("data-prefix"),c=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",n=sc(tr(t));return n.prefix||(n.prefix=d4()),e&&c&&(n.prefix=e,n.iconName=c),n.iconName&&n.prefix||(n.prefix&&a.length>0&&(n.iconName=II(n.prefix,t.innerText)||nr(n.prefix,na(t.innerText))),!n.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=t.firstChild.data)),n}function rP(t){var e=te(t.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),c=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return q.autoA11y&&(c?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(a||f0()):(e["aria-hidden"]="true",e.focusable="false")),e}function sP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:i3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ji(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},c=nP(t),a=c.iconName,n=c.prefix,r=c.rest,s=rP(t),i=sa("parseNodeAttributes",{},t),o=e.styleParser?aP(t):[];return O({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:i3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}var iP=j1.styles;function oh(t){var e=q.autoReplaceSvg==="nest"?ji(t,{styleParser:!1}):ji(t);return~e.extra.classes.indexOf(qu)?k3("generateLayersText",t,e):k3("generateSvgReplacementMutation",t,e)}var m4=new Set;er.map(function(t){m4.add("fa-".concat(t))});Object.keys(s0[E2]).map(m4.add.bind(m4));Object.keys(s0[F2]).map(m4.add.bind(m4));m4=D0(m4);function Wi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F3)return Promise.resolve();var c=P2.documentElement.classList,a=function(u){return c.add("".concat(ki,"-").concat(u))},n=function(u){return c.remove("".concat(ki,"-").concat(u))},r=q.autoFetchSvg?m4:er.map(function(f){return"fa-".concat(f)}).concat(Object.keys(iP));r.includes("fa")||r.push("fa");var s=[".".concat(qu,":not([").concat(K4,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(K4,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=te(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),n("complete");else return Promise.resolve();var o=ir.begin("onTree"),l=i.reduce(function(f,u){try{var h=oh(u);h&&f.push(h)}catch(d){$u||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){sh(h,function(){a("active"),a("complete"),n("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function oP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oh(t).then(function(c){c&&sh([c],e)})}function lP(t){return function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ia(e||{}),n=c.mask;return n&&(n=(n||{}).icon?n:ia(n||{})),t(a,O(O({},c),{},{mask:n}))}}var fP=function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.transform,n=a===void 0?i3:a,r=c.symbol,s=r===void 0?!1:r,i=c.mask,o=i===void 0?null:i,l=c.maskId,f=l===void 0?null:l,u=c.title,h=u===void 0?null:u,d=c.titleId,v=d===void 0?null:d,V=c.classes,z=V===void 0?[]:V,H=c.attributes,M=H===void 0?{}:H,N=c.styles,A=N===void 0?{}:N;if(e){var j=e.prefix,n2=e.iconName,f2=e.icon;return ic(O({type:"icon"},e),function(){return Q4("beforeDOMElementCreation",{iconDefinition:e,params:c}),q.autoA11y&&(h?M["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(v||f0()):(M["aria-hidden"]="true",M.focusable="false")),sr({icons:{main:oa(f2),mask:o?oa(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:n2,transform:O(O({},i3),n),symbol:s,title:h,maskId:f,titleId:v,extra:{attributes:M,styles:A,classes:z}})})}},uP={mixout:function(){return{icon:lP(fP)}},hooks:function(){return{mutationObserverCallbacks:function(c){return c.treeCallback=Wi,c.nodeCallback=oP,c}}},provides:function(e){e.i2svg=function(c){var a=c.node,n=a===void 0?P2:a,r=c.callback,s=r===void 0?function(){}:r;return Wi(n,s)},e.generateSvgReplacementMutation=function(c,a){var n=a.iconName,r=a.title,s=a.titleId,i=a.prefix,o=a.transform,l=a.symbol,f=a.mask,u=a.maskId,h=a.extra;return new Promise(function(d,v){Promise.all([la(n,i),f.iconName?la(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var z=Yn(V,2),H=z[0],M=z[1];d([c,sr({icons:{main:H,mask:M},prefix:i,iconName:n,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(c){var a=c.children,n=c.attributes,r=c.main,s=c.transform,i=c.styles,o=nc(i);o.length>0&&(n.style=o);var l;return cr(s)&&(l=k3("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(l||r.icon),{children:a,attributes:n}}}},hP={mixout:function(){return{layer:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.classes,r=n===void 0?[]:n;return ic({type:"layer"},function(){Q4("beforeDOMElementCreation",{assembler:c,params:a});var s=[];return c(function(i){Array.isArray(i)?i.map(function(o){s=s.concat(o.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(D0(r)).join(" ")},children:s}]})}}}},dP={mixout:function(){return{counter:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.title,r=n===void 0?null:n,s=a.classes,i=s===void 0?[]:s,o=a.attributes,l=o===void 0?{}:o,f=a.styles,u=f===void 0?{}:f;return ic({type:"counter",content:c},function(){return Q4("beforeDOMElementCreation",{content:c,params:a}),WI({content:c.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(D0(i))}})})}}}},mP={mixout:function(){return{text:function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?i3:n,s=a.title,i=s===void 0?null:s,o=a.classes,l=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,h=a.styles,d=h===void 0?{}:h;return ic({type:"text",content:c},function(){return Q4("beforeDOMElementCreation",{content:c,params:a}),Fi({content:c,transform:O(O({},i3),r),title:i,extra:{attributes:u,styles:d,classes:["".concat(q.cssPrefix,"-layers-text")].concat(D0(l))}})})}}},provides:function(e){e.generateLayersText=function(c,a){var n=a.title,r=a.transform,s=a.extra,i=null,o=null;if(Fu){var l=parseInt(getComputedStyle(c).fontSize,10),f=c.getBoundingClientRect();i=f.width/l,o=f.height/l}return q.autoA11y&&!n&&(s.attributes["aria-hidden"]="true"),Promise.resolve([c,Fi({content:c.innerHTML,width:i,height:o,transform:r,title:n,extra:s,watchable:!0})])}}},pP=new RegExp('"',"ug"),Gi=[1105920,1112319];function vP(t){var e=t.replace(pP,""),c=SI(e,0),a=c>=Gi[0]&&c<=Gi[1],n=e.length===2?e[0]===e[1]:!1;return{value:na(n?e[0]:e),isSecondary:a||n}}function Ki(t,e){var c="".concat(nI).concat(e.replace(":","-"));return new Promise(function(a,n){if(t.getAttribute(c)!==null)return a();var r=te(t.children),s=r.filter(function(f2){return f2.getAttribute(aa)===e})[0],i=h4.getComputedStyle(t,e),o=i.getPropertyValue("font-family").match(lI),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(s&&!o)return t.removeChild(s),a();if(o&&f!=="none"&&f!==""){var u=i.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?F2:E2,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?i0[h][o[2].toLowerCase()]:fI[h][l],v=vP(u),V=v.value,z=v.isSecondary,H=o[0].startsWith("FontAwesome"),M=nr(d,V),N=M;if(H){var A=PI(V);A.iconName&&A.prefix&&(M=A.iconName,d=A.prefix)}if(M&&!z&&(!s||s.getAttribute(Jn)!==d||s.getAttribute(Zn)!==N)){t.setAttribute(c,N),s&&t.removeChild(s);var j=sP(),n2=j.extra;n2.attributes[aa]=e,la(M,d).then(function(f2){var a2=sr(O(O({},j),{},{icons:{main:f2,mask:rr()},prefix:d,iconName:N,extra:n2,watchable:!0})),X=P2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=a2.map(function(C2){return F0(C2)}).join(`