(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var kp={exports:{}},dl={},zp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),Nv=Symbol.for("react.portal"),Iv=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),Ov=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),zv=Symbol.for("react.forward_ref"),Bv=Symbol.for("react.suspense"),Hv=Symbol.for("react.memo"),Gv=Symbol.for("react.lazy"),tf=Symbol.iterator;function Vv(t){return t===null||typeof t!="object"?null:(t=tf&&t[tf]||t["@@iterator"],typeof t=="function"?t:null)}var Bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Gp={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vp(){}Vp.prototype=Eo.prototype;function Gu(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}var Vu=Gu.prototype=new Vp;Vu.constructor=Gu;Hp(Vu,Eo.prototype);Vu.isPureReactComponent=!0;var nf=Array.isArray,Wp=Object.prototype.hasOwnProperty,Wu={current:null},Xp={key:!0,ref:!0,__self:!0,__source:!0};function jp(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Wp.call(e,i)&&!Xp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bs,type:t,key:o,ref:s,props:r,_owner:Wu.current}}function Wv(t,e){return{$$typeof:bs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===bs}function Xv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rf=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xv(""+t.key):e.toString(36)}function Ma(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case bs:case Nv:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Il(s,0):i,nf(r)?(n="",t!=null&&(n=t.replace(rf,"$&/")+"/"),Ma(r,e,n,"",function(c){return c})):r!=null&&(Xu(r)&&(r=Wv(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(rf,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",nf(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Il(o,a);s+=Ma(o,e,n,l,r)}else if(l=Vv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Il(o,a++),s+=Ma(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fs(t,e,n){if(t==null)return t;var i=[],r=0;return Ma(t,i,"","",function(o){return e.call(n,o,r++)}),i}function jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Ea={transition:null},Yv={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Wu};function Yp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!Xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Eo;ze.Fragment=Iv;ze.Profiler=Ov;ze.PureComponent=Gu;ze.StrictMode=Uv;ze.Suspense=Bv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yv;ze.act=Yp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hp({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wp.call(e,l)&&!Xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bs,type:t.type,key:r,ref:o,props:i,_owner:s}};ze.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};ze.createElement=jp;ze.createFactory=function(t){var e=jp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:zv,render:t}};ze.isValidElement=Xu;ze.lazy=function(t){return{$$typeof:Gv,_payload:{_status:-1,_result:t},_init:jv}};ze.memo=function(t,e){return{$$typeof:Hv,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};ze.unstable_act=Yp;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";zp.exports=ze;var ot=zp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=ot,$v=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,Qv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Zv.call(e,i)&&!Jv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$v,type:t,key:o,ref:s,props:r,_owner:Qv.current}}dl.Fragment=Kv;dl.jsx=qp;dl.jsxs=qp;kp.exports=dl;var N=kp.exports,$p={exports:{}},vn={},Kp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var z=O.length;O.push(V);e:for(;0<z;){var L=z-1>>>1,F=O[L];if(0<r(F,V))O[L]=V,O[z]=F,z=L;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],z=O.pop();if(z!==V){O[0]=z;e:for(var L=0,F=O.length,se=F>>>1;L<se;){var le=2*(L+1)-1,he=O[le],ve=le+1,Le=O[ve];if(0>r(he,z))ve<F&&0>r(Le,he)?(O[L]=Le,O[ve]=z,L=ve):(O[L]=he,O[le]=z,L=le);else if(ve<F&&0>r(Le,z))O[L]=Le,O[ve]=z,L=ve;else break e}}return V}function r(O,V){var z=O.sortIndex-V.sortIndex;return z!==0?z:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=O)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function x(O){if(y=!1,p(O),!_)if(n(l)!==null)_=!0,K(E);else{var V=n(c);V!==null&&Y(x,V.startTime-O)}}function E(O,V){_=!1,y&&(y=!1,u(D),D=-1),g=!0;var z=h;try{for(p(V),f=n(l);f!==null&&(!(f.expirationTime>V)||O&&!q());){var L=f.callback;if(typeof L=="function"){f.callback=null,h=f.priorityLevel;var F=L(f.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?f.callback=F:f===n(l)&&i(l),p(V)}else i(l);f=n(l)}if(f!==null)var se=!0;else{var le=n(c);le!==null&&Y(x,le.startTime-V),se=!1}return se}finally{f=null,h=z,g=!1}}var C=!1,b=null,D=-1,M=5,w=-1;function q(){return!(t.unstable_now()-w<M)}function $(){if(b!==null){var O=t.unstable_now();w=O;var V=!0;try{V=b(!0,O)}finally{V?W():(C=!1,b=null)}}else C=!1}var W;if(typeof v=="function")W=function(){v($)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,B=R.port2;R.port1.onmessage=$,W=function(){B.postMessage(null)}}else W=function(){m($,0)};function K(O){b=O,C||(C=!0,W())}function Y(O,V){D=m(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,K(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var z=h;h=V;try{return O()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=h;h=O;try{return V()}finally{h=z}},t.unstable_scheduleCallback=function(O,V,z){var L=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?L+z:L):z=L,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=z+F,O={id:d++,callback:V,priorityLevel:O,startTime:z,expirationTime:F,sortIndex:-1},z>L?(O.sortIndex=z,e(c,O),n(l)===null&&O===n(c)&&(y?(u(D),D=-1):y=!0,Y(x,z-L))):(O.sortIndex=F,e(l,O),_||g||(_=!0,K(E))),O},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(O){var V=h;return function(){var z=h;h=V;try{return O.apply(this,arguments)}finally{h=z}}}})(Zp);Kp.exports=Zp;var e0=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0=ot,gn=e0;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,as={};function Mr(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(as[t]=e,t=0;t<e.length;t++)Qp.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,n0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,of={},sf={};function i0(t){return zc.call(sf,t)?!0:zc.call(of,t)?!1:n0.test(t)?sf[t]=!0:(of[t]=!0,!1)}function r0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o0(t,e,n,i){if(e===null||typeof e>"u"||r0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function Yu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ju,Yu);Dt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ju,Yu);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ju,Yu);Dt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qu(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o0(e,n,r,i)&&(n=null),i||r===null?i0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),af=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,Ul;function Xo(t){if(Ul===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ul=e&&e[1]||""}return`
`+Ul+t}var Ol=!1;function Fl(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function s0(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Fl(t.type,!1),t;case 11:return t=Fl(t.type.render,!1),t;case 1:return t=Fl(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wr:return"Fragment";case Vr:return"Portal";case Bc:return"Profiler";case $u:return"StrictMode";case Hc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case em:return(t.displayName||"Context")+".Consumer";case Jp:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zu:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function a0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===$u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l0(t){var e=nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zs(t){t._valueTracker||(t._valueTracker=l0(t))}function im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=nm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ua(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rm(t,e){e=e.checked,e!=null&&qu(t,"checked",e,!1)}function Xc(t,e){rm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||Ua(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(jo(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function om(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function df(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bs,am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c0=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){c0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var u0=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(u0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,io=null,ro=null;function ff(t){if(t=Rs(t)){if(typeof Qc!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=gl(e),Qc(t.stateNode,t.type,e))}}function um(t){io?ro?ro.push(t):ro=[t]:io=t}function dm(){if(io){var t=io,e=ro;if(ro=io=null,ff(t),e)for(t=0;t<e.length;t++)ff(e[t])}}function fm(t,e){return t(e)}function hm(){}var kl=!1;function pm(t,e,n){if(kl)return t(e,n);kl=!0;try{return fm(t,e,n)}finally{kl=!1,(io!==null||ro!==null)&&(hm(),dm())}}function cs(t,e){var n=t.stateNode;if(n===null)return null;var i=gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Jc=!1;if(di)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{Jc=!1}function d0(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qo=!1,Oa=null,Fa=!1,eu=null,f0={onError:function(t){Qo=!0,Oa=t}};function h0(t,e,n,i,r,o,s,a,l){Qo=!1,Oa=null,d0.apply(f0,arguments)}function p0(t,e,n,i,r,o,s,a,l){if(h0.apply(this,arguments),Qo){if(Qo){var c=Oa;Qo=!1,Oa=null}else throw Error(Q(198));Fa||(Fa=!0,eu=c)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hf(t){if(Er(t)!==t)throw Error(Q(188))}function m0(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return hf(r),t;if(o===i)return hf(r),e;o=o.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function gm(t){return t=m0(t),t!==null?vm(t):null}function vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vm(t);if(e!==null)return e;t=t.sibling}return null}var _m=gn.unstable_scheduleCallback,pf=gn.unstable_cancelCallback,g0=gn.unstable_shouldYield,v0=gn.unstable_requestPaint,pt=gn.unstable_now,_0=gn.unstable_getCurrentPriorityLevel,Ju=gn.unstable_ImmediatePriority,ym=gn.unstable_UserBlockingPriority,ka=gn.unstable_NormalPriority,y0=gn.unstable_LowPriority,xm=gn.unstable_IdlePriority,fl=null,qn=null;function x0(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:E0,S0=Math.log,M0=Math.LN2;function E0(t){return t>>>=0,t===0?32:31-(S0(t)/M0|0)|0}var Hs=64,Gs=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function za(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Yo(a):(o&=s,o!==0&&(i=Yo(o)))}else s=n&~r,s!==0?i=Yo(s):o!==0&&(i=Yo(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function T0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-zn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=T0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sm(){var t=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),t}function zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function b0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function Mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Em,td,Tm,wm,bm,nu=!1,Vs=[],Di=null,Ni=null,Ii=null,us=new Map,ds=new Map,bi=[],C0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(e.pointerId)}}function No(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Rs(e),e!==null&&td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A0(t,e,n,i,r){switch(e){case"focusin":return Di=No(Di,t,e,n,i,r),!0;case"dragenter":return Ni=No(Ni,t,e,n,i,r),!0;case"mouseover":return Ii=No(Ii,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return us.set(o,No(us.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ds.set(o,No(ds.get(o)||null,t,e,n,i,r)),!0}return!1}function Cm(t){var e=ar(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=mm(n),e!==null){t.blockedOn=e,bm(t.priority,function(){Tm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zc=i,n.target.dispatchEvent(i),Zc=null}else return e=Rs(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function gf(t,e,n){Ta(t)&&n.delete(e)}function R0(){nu=!1,Di!==null&&Ta(Di)&&(Di=null),Ni!==null&&Ta(Ni)&&(Ni=null),Ii!==null&&Ta(Ii)&&(Ii=null),us.forEach(gf),ds.forEach(gf)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,nu||(nu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,R0)))}function fs(t){function e(r){return Io(r,t)}if(0<Vs.length){Io(Vs[0],t);for(var n=1;n<Vs.length;n++){var i=Vs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Io(Di,t),Ni!==null&&Io(Ni,t),Ii!==null&&Io(Ii,t),us.forEach(e),ds.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&bi.shift()}var oo=gi.ReactCurrentBatchConfig,Ba=!0;function P0(t,e,n,i){var r=Ye,o=oo.transition;oo.transition=null;try{Ye=1,nd(t,e,n,i)}finally{Ye=r,oo.transition=o}}function L0(t,e,n,i){var r=Ye,o=oo.transition;oo.transition=null;try{Ye=4,nd(t,e,n,i)}finally{Ye=r,oo.transition=o}}function nd(t,e,n,i){if(Ba){var r=iu(t,e,n,i);if(r===null)$l(t,e,i,Ha,n),mf(t,i);else if(A0(r,t,e,n,i))i.stopPropagation();else if(mf(t,i),e&4&&-1<C0.indexOf(t)){for(;r!==null;){var o=Rs(r);if(o!==null&&Em(o),o=iu(t,e,n,i),o===null&&$l(t,e,i,Ha,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else $l(t,e,i,null,n)}}var Ha=null;function iu(t,e,n,i){if(Ha=null,t=Qu(i),t=ar(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ha=t,null}function Am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_0()){case Ju:return 1;case ym:return 4;case ka:case y0:return 16;case xm:return 536870912;default:return 16}default:return 16}}var Ai=null,id=null,wa=null;function Rm(){if(wa)return wa;var t,e=id,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return wa=r.slice(t,1<i?1-i:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function vf(){return!1}function _n(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ws:vf,this.isPropagationStopped=vf,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=_n(To),As=at({},To,{view:0,detail:0}),D0=_n(As),Bl,Hl,Uo,hl=at({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(Bl=t.screenX-Uo.screenX,Hl=t.screenY-Uo.screenY):Hl=Bl=0,Uo=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),_f=_n(hl),N0=at({},hl,{dataTransfer:0}),I0=_n(N0),U0=at({},As,{relatedTarget:0}),Gl=_n(U0),O0=at({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=_n(O0),k0=at({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z0=_n(k0),B0=at({},To,{data:0}),yf=_n(B0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V0[t])?!!e[t]:!1}function od(){return W0}var X0=at({},As,{key:function(t){if(t.key){var e=H0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j0=_n(X0),Y0=at({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=_n(Y0),q0=at({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),$0=_n(q0),K0=at({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z0=_n(K0),Q0=at({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=_n(Q0),e_=[9,13,27,32],sd=di&&"CompositionEvent"in window,Jo=null;di&&"documentMode"in document&&(Jo=document.documentMode);var t_=di&&"TextEvent"in window&&!Jo,Pm=di&&(!sd||Jo&&8<Jo&&11>=Jo),Sf=" ",Mf=!1;function Lm(t,e){switch(t){case"keyup":return e_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function n_(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Mf=!0,Sf);case"textInput":return t=e.data,t===Sf&&Mf?null:t;default:return null}}function i_(t,e){if(Xr)return t==="compositionend"||!sd&&Lm(t,e)?(t=Rm(),wa=id=Ai=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pm&&e.locale!=="ko"?null:e.data;default:return null}}var r_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!r_[t.type]:e==="textarea"}function Nm(t,e,n,i){um(i),e=Ga(e,"onChange"),0<e.length&&(n=new rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var es=null,hs=null;function o_(t){Wm(t,0)}function pl(t){var e=qr(t);if(im(e))return t}function s_(t,e){if(t==="change")return e}var Im=!1;if(di){var Vl;if(di){var Wl="oninput"in document;if(!Wl){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Wl=typeof Tf.oninput=="function"}Vl=Wl}else Vl=!1;Im=Vl&&(!document.documentMode||9<document.documentMode)}function wf(){es&&(es.detachEvent("onpropertychange",Um),hs=es=null)}function Um(t){if(t.propertyName==="value"&&pl(hs)){var e=[];Nm(e,hs,t,Qu(t)),pm(o_,e)}}function a_(t,e,n){t==="focusin"?(wf(),es=e,hs=n,es.attachEvent("onpropertychange",Um)):t==="focusout"&&wf()}function l_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pl(hs)}function c_(t,e){if(t==="click")return pl(e)}function u_(t,e){if(t==="input"||t==="change")return pl(e)}function d_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:d_;function ps(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cf(t,e){var n=bf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bf(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fm(){for(var t=window,e=Ua();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ua(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function f_(t){var e=Fm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(i!==null&&ad(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Cf(n,o);var s=Cf(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h_=di&&"documentMode"in document&&11>=document.documentMode,jr=null,ru=null,ts=null,ou=!1;function Af(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||jr==null||jr!==Ua(i)||(i=jr,"selectionStart"in i&&ad(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ts&&ps(ts,i)||(ts=i,i=Ga(ru,"onSelect"),0<i.length&&(e=new rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},Xl={},km={};di&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function ml(t){if(Xl[t])return Xl[t];if(!Yr[t])return t;var e=Yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in km)return Xl[t]=e[n];return t}var zm=ml("animationend"),Bm=ml("animationiteration"),Hm=ml("animationstart"),Gm=ml("transitionend"),Vm=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,e){Vm.set(t,e),Mr(e,[t])}for(var jl=0;jl<Rf.length;jl++){var Yl=Rf[jl],p_=Yl.toLowerCase(),m_=Yl[0].toUpperCase()+Yl.slice(1);ji(p_,"on"+m_)}ji(zm,"onAnimationEnd");ji(Bm,"onAnimationIteration");ji(Hm,"onAnimationStart");ji("dblclick","onDoubleClick");ji("focusin","onFocus");ji("focusout","onBlur");ji(Gm,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g_=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Pf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,p0(i,e,void 0,t),t.currentTarget=null}function Wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Pf(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Pf(r,a,c),o=l}}}if(Fa)throw t=eu,Fa=!1,eu=null,t}function Je(t,e){var n=e[uu];n===void 0&&(n=e[uu]=new Set);var i=t+"__bubble";n.has(i)||(Xm(e,t,2,!1),n.add(i))}function ql(t,e,n){var i=0;e&&(i|=4),Xm(n,t,i,e)}var js="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[js]){t[js]=!0,Qp.forEach(function(n){n!=="selectionchange"&&(g_.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[js]||(e[js]=!0,ql("selectionchange",!1,e))}}function Xm(t,e,n,i){switch(Am(e)){case 1:var r=P0;break;case 4:r=L0;break;default:r=nd}n=r.bind(null,e,n,t),r=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function $l(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}pm(function(){var c=o,d=Qu(n),f=[];e:{var h=Vm.get(t);if(h!==void 0){var g=rd,_=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":g=j0;break;case"focusin":_="focus",g=Gl;break;case"focusout":_="blur",g=Gl;break;case"beforeblur":case"afterblur":g=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=I0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$0;break;case zm:case Bm:case Hm:g=F0;break;case Gm:g=Z0;break;case"scroll":g=D0;break;case"wheel":g=J0;break;case"copy":case"cut":case"paste":g=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,p;v!==null;){p=v;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,u!==null&&(x=cs(v,u),x!=null&&y.push(gs(v,x,p)))),m)break;v=v.return}0<y.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Zc&&(_=n.relatedTarget||n.fromElement)&&(ar(_)||_[fi]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?ar(_):null,_!==null&&(m=Er(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=_f,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=xf,x="onPointerLeave",u="onPointerEnter",v="pointer"),m=g==null?h:qr(g),p=_==null?h:qr(_),h=new y(x,v+"leave",g,n,d),h.target=m,h.relatedTarget=p,x=null,ar(d)===c&&(y=new y(u,v+"enter",_,n,d),y.target=p,y.relatedTarget=m,x=y),m=x,g&&_)t:{for(y=g,u=_,v=0,p=y;p;p=Tr(p))v++;for(p=0,x=u;x;x=Tr(x))p++;for(;0<v-p;)y=Tr(y),v--;for(;0<p-v;)u=Tr(u),p--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Tr(y),u=Tr(u)}y=null}else y=null;g!==null&&Lf(f,h,g,y,!1),_!==null&&m!==null&&Lf(f,m,_,y,!0)}}e:{if(h=c?qr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=s_;else if(Ef(h))if(Im)E=u_;else{E=l_;var C=a_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=c_);if(E&&(E=E(t,c))){Nm(f,E,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&jc(h,"number",h.value)}switch(C=c?qr(c):window,t){case"focusin":(Ef(C)||C.contentEditable==="true")&&(jr=C,ru=c,ts=null);break;case"focusout":ts=ru=jr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Af(f,n,d);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Af(f,n,d)}var b;if(sd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Xr?Lm(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Pm&&n.locale!=="ko"&&(Xr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Xr&&(b=Rm()):(Ai=d,id="value"in Ai?Ai.value:Ai.textContent,Xr=!0)),C=Ga(c,D),0<C.length&&(D=new yf(D,t,null,n,d),f.push({event:D,listeners:C}),b?D.data=b:(b=Dm(n),b!==null&&(D.data=b)))),(b=t_?n_(t,n):i_(t,n))&&(c=Ga(c,"onBeforeInput"),0<c.length&&(d=new yf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}Wm(f,e)})}function gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=cs(t,n),o!=null&&i.unshift(gs(t,o,r)),o=cs(t,e),o!=null&&i.push(gs(t,o,r))),t=t.return}return i}function Tr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lf(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=cs(n,o),l!=null&&s.unshift(gs(n,l,a))):r||(l=cs(n,o),l!=null&&s.push(gs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var v_=/\r\n?/g,__=/\u0000|\uFFFD/g;function Df(t){return(typeof t=="string"?t:""+t).replace(v_,`
`).replace(__,"")}function Ys(t,e,n){if(e=Df(e),Df(t)!==e&&n)throw Error(Q(425))}function Va(){}var su=null,au=null;function lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,x_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(S_)}:cu;function S_(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fs(e)}function Ui(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function If(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),jn="__reactFiber$"+wo,vs="__reactProps$"+wo,fi="__reactContainer$"+wo,uu="__reactEvents$"+wo,M_="__reactListeners$"+wo,E_="__reactHandles$"+wo;function ar(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=If(t);t!==null;){if(n=t[jn])return n;t=If(t)}return e}t=n,n=t.parentNode}return null}function Rs(t){return t=t[jn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function gl(t){return t[vs]||null}var du=[],$r=-1;function Yi(t){return{current:t}}function tt(t){0>$r||(t.current=du[$r],du[$r]=null,$r--)}function Qe(t,e){$r++,du[$r]=t.current,t.current=e}var Wi={},Bt=Yi(Wi),en=Yi(!1),mr=Wi;function fo(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Wa(){tt(en),tt(Bt)}function Uf(t,e,n){if(Bt.current!==Wi)throw Error(Q(168));Qe(Bt,e),Qe(en,n)}function jm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,a0(t)||"Unknown",r));return at({},n,i)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,mr=Bt.current,Qe(Bt,t),Qe(en,en.current),!0}function Of(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=jm(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,tt(en),tt(Bt),Qe(Bt,t)):tt(en),Qe(en,n)}var oi=null,vl=!1,Zl=!1;function Ym(t){oi===null?oi=[t]:oi.push(t)}function T_(t){vl=!0,Ym(t)}function qi(){if(!Zl&&oi!==null){Zl=!0;var t=0,e=Ye;try{var n=oi;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,vl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),_m(Ju,qi),r}finally{Ye=e,Zl=!1}}return null}var Kr=[],Zr=0,ja=null,Ya=0,Sn=[],Mn=0,gr=null,ai=1,li="";function tr(t,e){Kr[Zr++]=Ya,Kr[Zr++]=ja,ja=t,Ya=e}function qm(t,e,n){Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=gr,gr=t;var i=ai;t=li;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var o=32-zn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ai=1<<32-zn(e)+r|n<<r|i,li=o+t}else ai=1<<o|n<<r|i,li=t}function ld(t){t.return!==null&&(tr(t,1),qm(t,1,0))}function cd(t){for(;t===ja;)ja=Kr[--Zr],Kr[Zr]=null,Ya=Kr[--Zr],Kr[Zr]=null;for(;t===gr;)gr=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null,ai=Sn[--Mn],Sn[Mn]=null}var hn=null,fn=null,nt=!1,Un=null;function $m(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ff(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=Ui(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(nt){var e=fn;if(e){var n=e;if(!Ff(t,e)){if(fu(t))throw Error(Q(418));e=Ui(n.nextSibling);var i=hn;e&&Ff(t,e)?$m(i,n):(t.flags=t.flags&-4097|2,nt=!1,hn=t)}}else{if(fu(t))throw Error(Q(418));t.flags=t.flags&-4097|2,nt=!1,hn=t}}}function kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function qs(t){if(t!==hn)return!1;if(!nt)return kf(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lu(t.type,t.memoizedProps)),e&&(e=fn)){if(fu(t))throw Km(),Error(Q(418));for(;e;)$m(t,e),e=Ui(e.nextSibling)}if(kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=Ui(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?Ui(t.stateNode.nextSibling):null;return!0}function Km(){for(var t=fn;t;)t=Ui(t.nextSibling)}function ho(){fn=hn=null,nt=!1}function ud(t){Un===null?Un=[t]:Un.push(t)}var w_=gi.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function $s(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zf(t){var e=t._init;return e(t._payload)}function Zm(t){function e(u,v){if(t){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=zi(u,v),u.index=0,u.sibling=null,u}function o(u,v,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,p,x){return v===null||v.tag!==6?(v=rc(p,u.mode,x),v.return=u,v):(v=r(v,p),v.return=u,v)}function l(u,v,p,x){var E=p.type;return E===Wr?d(u,v,p.props.children,x,p.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ti&&zf(E)===v.type)?(x=r(v,p.props),x.ref=Oo(u,v,p),x.return=u,x):(x=Na(p.type,p.key,p.props,null,u.mode,x),x.ref=Oo(u,v,p),x.return=u,x)}function c(u,v,p,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=oc(p,u.mode,x),v.return=u,v):(v=r(v,p.children||[]),v.return=u,v)}function d(u,v,p,x,E){return v===null||v.tag!==7?(v=dr(p,u.mode,x,E),v.return=u,v):(v=r(v,p),v.return=u,v)}function f(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rc(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ks:return p=Na(v.type,v.key,v.props,null,u.mode,p),p.ref=Oo(u,null,v),p.return=u,p;case Vr:return v=oc(v,u.mode,p),v.return=u,v;case Ti:var x=v._init;return f(u,x(v._payload),p)}if(jo(v)||Lo(v))return v=dr(v,u.mode,p,null),v.return=u,v;$s(u,v)}return null}function h(u,v,p,x){var E=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(u,v,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:return p.key===E?l(u,v,p,x):null;case Vr:return p.key===E?c(u,v,p,x):null;case Ti:return E=p._init,h(u,v,E(p._payload),x)}if(jo(p)||Lo(p))return E!==null?null:d(u,v,p,x,null);$s(u,p)}return null}function g(u,v,p,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(p)||null,a(v,u,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ks:return u=u.get(x.key===null?p:x.key)||null,l(v,u,x,E);case Vr:return u=u.get(x.key===null?p:x.key)||null,c(v,u,x,E);case Ti:var C=x._init;return g(u,v,p,C(x._payload),E)}if(jo(x)||Lo(x))return u=u.get(p)||null,d(v,u,x,E,null);$s(v,x)}return null}function _(u,v,p,x){for(var E=null,C=null,b=v,D=v=0,M=null;b!==null&&D<p.length;D++){b.index>D?(M=b,b=null):M=b.sibling;var w=h(u,b,p[D],x);if(w===null){b===null&&(b=M);break}t&&b&&w.alternate===null&&e(u,b),v=o(w,v,D),C===null?E=w:C.sibling=w,C=w,b=M}if(D===p.length)return n(u,b),nt&&tr(u,D),E;if(b===null){for(;D<p.length;D++)b=f(u,p[D],x),b!==null&&(v=o(b,v,D),C===null?E=b:C.sibling=b,C=b);return nt&&tr(u,D),E}for(b=i(u,b);D<p.length;D++)M=g(b,u,D,p[D],x),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?D:M.key),v=o(M,v,D),C===null?E=M:C.sibling=M,C=M);return t&&b.forEach(function(q){return e(u,q)}),nt&&tr(u,D),E}function y(u,v,p,x){var E=Lo(p);if(typeof E!="function")throw Error(Q(150));if(p=E.call(p),p==null)throw Error(Q(151));for(var C=E=null,b=v,D=v=0,M=null,w=p.next();b!==null&&!w.done;D++,w=p.next()){b.index>D?(M=b,b=null):M=b.sibling;var q=h(u,b,w.value,x);if(q===null){b===null&&(b=M);break}t&&b&&q.alternate===null&&e(u,b),v=o(q,v,D),C===null?E=q:C.sibling=q,C=q,b=M}if(w.done)return n(u,b),nt&&tr(u,D),E;if(b===null){for(;!w.done;D++,w=p.next())w=f(u,w.value,x),w!==null&&(v=o(w,v,D),C===null?E=w:C.sibling=w,C=w);return nt&&tr(u,D),E}for(b=i(u,b);!w.done;D++,w=p.next())w=g(b,u,D,w.value,x),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?D:w.key),v=o(w,v,D),C===null?E=w:C.sibling=w,C=w);return t&&b.forEach(function($){return e(u,$)}),nt&&tr(u,D),E}function m(u,v,p,x){if(typeof p=="object"&&p!==null&&p.type===Wr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:e:{for(var E=p.key,C=v;C!==null;){if(C.key===E){if(E=p.type,E===Wr){if(C.tag===7){n(u,C.sibling),v=r(C,p.props.children),v.return=u,u=v;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ti&&zf(E)===C.type){n(u,C.sibling),v=r(C,p.props),v.ref=Oo(u,C,p),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}p.type===Wr?(v=dr(p.props.children,u.mode,x,p.key),v.return=u,u=v):(x=Na(p.type,p.key,p.props,null,u.mode,x),x.ref=Oo(u,v,p),x.return=u,u=x)}return s(u);case Vr:e:{for(C=p.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(u,v.sibling),v=r(v,p.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=oc(p,u.mode,x),v.return=u,u=v}return s(u);case Ti:return C=p._init,m(u,v,C(p._payload),x)}if(jo(p))return _(u,v,p,x);if(Lo(p))return y(u,v,p,x);$s(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,p),v.return=u,u=v):(n(u,v),v=rc(p,u.mode,x),v.return=u,u=v),s(u)):n(u,v)}return m}var po=Zm(!0),Qm=Zm(!1),qa=Yi(null),$a=null,Qr=null,dd=null;function fd(){dd=Qr=$a=null}function hd(t){var e=qa.current;tt(qa),t._currentValue=e}function pu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){$a=t,dd=Qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},Qr===null){if($a===null)throw Error(Q(308));Qr=t,$a.dependencies={lanes:0,firstContext:t}}else Qr=Qr.next=t;return e}var lr=null;function pd(t){lr===null?lr=[t]:lr.push(t)}function Jm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}function Bf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ka(t,e,n,i){var r=t.updateQueue;wi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=at({},f,h);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);_r|=s,t.lanes=s,t.memoizedState=f}}function Hf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Ps={},$n=Yi(Ps),_s=Yi(Ps),ys=Yi(Ps);function cr(t){if(t===Ps)throw Error(Q(174));return t}function gd(t,e){switch(Qe(ys,e),Qe(_s,t),Qe($n,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}tt($n),Qe($n,e)}function mo(){tt($n),tt(_s),tt(ys)}function tg(t){cr(ys.current);var e=cr($n.current),n=qc(e,t.type);e!==n&&(Qe(_s,t),Qe($n,n))}function vd(t){_s.current===t&&(tt($n),tt(_s))}var rt=Yi(0);function Za(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ql=[];function _d(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var Aa=gi.ReactCurrentDispatcher,Jl=gi.ReactCurrentBatchConfig,vr=0,st=null,xt=null,Ct=null,Qa=!1,ns=!1,xs=0,b_=0;function It(){throw Error(Q(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function xd(t,e,n,i,r,o){if(vr=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?P_:L_,t=n(i,r),ns){o=0;do{if(ns=!1,xs=0,25<=o)throw Error(Q(301));o+=1,Ct=xt=null,e.updateQueue=null,Aa.current=D_,t=n(i,r)}while(ns)}if(Aa.current=Ja,e=xt!==null&&xt.next!==null,vr=0,Ct=xt=st=null,Qa=!1,e)throw Error(Q(300));return t}function Sd(){var t=xs!==0;return xs=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function An(){if(xt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Ct===null?st.memoizedState:Ct.next;if(e!==null)Ct=e,xt=t;else{if(t===null)throw Error(Q(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ct===null?st.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Ss(t,e){return typeof e=="function"?e(t):e}function ec(t){var e=An(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((vr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,st.lanes|=d,_r|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,st.lanes|=o,_r|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tc(t){var e=An(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Hn(o,e.memoizedState)||(Jt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function ng(){}function ig(t,e){var n=st,i=An(),r=e(),o=!Hn(i.memoizedState,r);if(o&&(i.memoizedState=r,Jt=!0),i=i.queue,Md(sg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Ms(9,og.bind(null,n,i,r,e),void 0,null),At===null)throw Error(Q(349));vr&30||rg(n,e,r)}return r}function rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function og(t,e,n,i){e.value=n,e.getSnapshot=i,ag(e)&&lg(t)}function sg(t,e,n){return n(function(){ag(e)&&lg(t)})}function ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function lg(t){var e=hi(t,1);e!==null&&Bn(e,t,1,-1)}function Gf(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},e.queue=t,t=t.dispatch=R_.bind(null,st,t),[e.memoizedState,t]}function Ms(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cg(){return An().memoizedState}function Ra(t,e,n,i){var r=Wn();st.flags|=t,r.memoizedState=Ms(1|e,n,void 0,i===void 0?null:i)}function _l(t,e,n,i){var r=An();i=i===void 0?null:i;var o=void 0;if(xt!==null){var s=xt.memoizedState;if(o=s.destroy,i!==null&&yd(i,s.deps)){r.memoizedState=Ms(e,n,o,i);return}}st.flags|=t,r.memoizedState=Ms(1|e,n,o,i)}function Vf(t,e){return Ra(8390656,8,t,e)}function Md(t,e){return _l(2048,8,t,e)}function ug(t,e){return _l(4,2,t,e)}function dg(t,e){return _l(4,4,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hg(t,e,n){return n=n!=null?n.concat([t]):null,_l(4,4,fg.bind(null,e,t),n)}function Ed(){}function pg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return vr&21?(Hn(n,e)||(n=Sm(),st.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function C_(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=Jl.transition;Jl.transition={};try{t(!1),e()}finally{Ye=n,Jl.transition=i}}function vg(){return An().memoizedState}function A_(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_g(t))yg(e,n);else if(n=Jm(t,e,n,i),n!==null){var r=jt();Bn(n,t,i,r),xg(n,e,i)}}function R_(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_g(t))yg(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,s)){var l=e.interleaved;l===null?(r.next=r,pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jm(t,e,r,i),n!==null&&(r=jt(),Bn(n,t,i,r),xg(n,e,i))}}function _g(t){var e=t.alternate;return t===st||e!==null&&e===st}function yg(t,e){ns=Qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ed(t,n)}}var Ja={readContext:Cn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},P_={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Vf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=A_.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Gf,useDebugValue:Ed,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Gf(!1),e=t[0];return t=C_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=Wn();if(nt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),At===null)throw Error(Q(349));vr&30||rg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Vf(sg.bind(null,i,o,t),[t]),i.flags|=2048,Ms(9,og.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Wn(),e=At.identifierPrefix;if(nt){var n=li,i=ai;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},L_={readContext:Cn,useCallback:pg,useContext:Cn,useEffect:Md,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:mg,useReducer:ec,useRef:cg,useState:function(){return ec(Ss)},useDebugValue:Ed,useDeferredValue:function(t){var e=An();return gg(e,xt.memoizedState,t)},useTransition:function(){var t=ec(Ss)[0],e=An().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1},D_={readContext:Cn,useCallback:pg,useContext:Cn,useEffect:Md,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:mg,useReducer:tc,useRef:cg,useState:function(){return tc(Ss)},useDebugValue:Ed,useDeferredValue:function(t){var e=An();return xt===null?e.memoizedState=t:gg(e,xt.memoizedState,t)},useTransition:function(){var t=tc(Ss)[0],e=An().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:vg,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=ki(t),o=ui(i,r);o.payload=e,n!=null&&(o.callback=n),e=Oi(t,o,r),e!==null&&(Bn(e,t,r,i),Ca(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=ki(t),o=ui(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Oi(t,o,r),e!==null&&(Bn(e,t,r,i),Ca(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=ki(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Bn(e,t,i,n),Ca(e,t,i))}};function Wf(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ps(n,i)||!ps(r,o):!0}function Sg(t,e,n){var i=!1,r=Wi,o=e.contextType;return typeof o=="object"&&o!==null?o=Cn(o):(r=tn(e)?mr:Bt.current,i=e.contextTypes,o=(i=i!=null)?fo(t,r):Wi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Xf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function gu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},md(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Cn(o):(o=tn(e)?mr:Bt.current,r.context=fo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mu(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yl.enqueueReplaceState(r,r.state,null),Ka(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=s0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var N_=typeof WeakMap=="function"?WeakMap:Map;function Mg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tl||(tl=!0,Cu=i),vu(t,e)},n}function Eg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vu(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vu(t,e),typeof i!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new N_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Y_.bind(null,t,e,n),e.then(t,t))}function Yf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var I_=gi.ReactCurrentOwner,Jt=!1;function Wt(t,e,n,i){e.child=t===null?Qm(e,null,n,i):po(e,t.child,n,i)}function $f(t,e,n,i,r){n=n.render;var o=e.ref;return so(e,r),i=xd(t,e,n,i,o,r),n=Sd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(nt&&n&&ld(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Kf(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Ld(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Tg(t,e,o,i,r)):(t=Na(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(s,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=zi(o,i),t.ref=e.ref,t.return=e,e.child=t}function Tg(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ps(o,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,pi(t,e,r)}return _u(t,e,n,i,r)}function wg(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(eo,un),un|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(eo,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Qe(eo,un),un|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Qe(eo,un),un|=i;return Wt(t,e,r,n),e.child}function bg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _u(t,e,n,i,r){var o=tn(n)?mr:Bt.current;return o=fo(e,o),so(e,r),n=xd(t,e,n,i,o,r),i=Sd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(nt&&i&&ld(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Zf(t,e,n,i,r){if(tn(n)){var o=!0;Xa(e)}else o=!1;if(so(e,r),e.stateNode===null)Pa(t,e),Sg(e,n,i),gu(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=tn(n)?mr:Bt.current,c=fo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xf(e,s,i,c),wi=!1;var h=e.memoizedState;s.state=h,Ka(e,i,s,r),l=e.memoizedState,a!==i||h!==l||en.current||wi?(typeof d=="function"&&(mu(e,n,d,i),l=e.memoizedState),(a=wi||Wf(e,n,a,i,h,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,eg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),s.props=c,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=tn(n)?mr:Bt.current,l=fo(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Xf(e,s,i,l),wi=!1,h=e.memoizedState,s.state=h,Ka(e,i,s,r);var _=e.memoizedState;a!==f||h!==_||en.current||wi?(typeof g=="function"&&(mu(e,n,g,i),_=e.memoizedState),(c=wi||Wf(e,n,c,i,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yu(t,e,n,i,o,r)}function yu(t,e,n,i,r,o){bg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Of(e,n,!1),pi(t,e,o);i=e.stateNode,I_.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=po(e,t.child,null,o),e.child=po(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=i.state,r&&Of(e,n,!0),e.child}function Cg(t){var e=t.stateNode;e.pendingContext?Uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uf(t,e.context,!1),gd(t,e.containerInfo)}function Qf(t,e,n,i,r){return ho(),ud(r),e.flags|=256,Wt(t,e,n,i),e.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function Su(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ag(t,e,n){var i=e.pendingProps,r=rt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(rt,r&1),t===null)return hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ml(s,i,0,null),t=dr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Su(n),e.memoizedState=xu,t):Td(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return U_(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=zi(a,o):(o=dr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Su(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=xu,i}return o=t.child,t=o.sibling,i=zi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Td(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ks(t,e,n,i){return i!==null&&ud(i),po(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U_(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=nc(Error(Q(422))),Ks(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ml({mode:"visible",children:i.children},r,0,null),o=dr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&po(e,t.child,null,s),e.child.memoizedState=Su(s),e.memoizedState=xu,o);if(!(e.mode&1))return Ks(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(Q(419)),i=nc(o,i,void 0),Ks(t,e,s,i)}if(a=(s&t.childLanes)!==0,Jt||a){if(i=At,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,hi(t,r),Bn(i,t,r,-1))}return Pd(),i=nc(Error(Q(421))),Ks(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=q_.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,fn=Ui(r.nextSibling),hn=e,nt=!0,Un=null,t!==null&&(Sn[Mn++]=ai,Sn[Mn++]=li,Sn[Mn++]=gr,ai=t.id,li=t.overflow,gr=e),e=Td(e,i.children),e.flags|=4096,e)}function Jf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pu(t.return,e,n)}function ic(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Rg(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Wt(t,e,i.children,n),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jf(t,n,e);else if(t.tag===19)Jf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Za(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ic(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Za(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ic(e,!0,n,null,o);break;case"together":ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function O_(t,e,n){switch(e.tag){case 3:Cg(e),ho();break;case 5:tg(e);break;case 1:tn(e.type)&&Xa(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(qa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?Ag(t,e,n):(Qe(rt,rt.current&1),t=pi(t,e,n),t!==null?t.sibling:null);Qe(rt,rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Rg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return pi(t,e,n)}var Pg,Mu,Lg,Dg;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};Lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cr($n.current);var o=null;switch(n){case"input":r=Wc(t,r),i=Wc(t,i),o=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),o=[];break;case"textarea":r=Yc(t,r),i=Yc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Va)}$c(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(as.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(as.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function F_(t,e,n){var i=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return tn(e.type)&&Wa(),Ut(e),null;case 3:return i=e.stateNode,mo(),tt(en),tt(Bt),_d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Pu(Un),Un=null))),Mu(t,e),Ut(e),null;case 5:vd(e);var r=cr(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)Lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Ut(e),null}if(t=cr($n.current),qs(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[jn]=e,i[vs]=o,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)Je(qo[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":lf(i,o),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Je("invalid",i);break;case"textarea":uf(i,o),Je("invalid",i)}$c(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ys(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ys(i.textContent,a,t),r=["children",""+a]):as.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",i)}switch(n){case"input":zs(i),cf(i,o,!0);break;case"textarea":zs(i),df(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Va)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[jn]=e,t[vs]=i,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(s=Kc(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)Je(qo[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":lf(t,i),r=Wc(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Je("invalid",t);break;case"textarea":uf(t,i),r=Yc(t,i),Je("invalid",t);break;default:r=i}$c(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&am(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ls(t,l):typeof l=="number"&&ls(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(as.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Je("scroll",t):l!=null&&qu(t,o,l,s))}switch(n){case"input":zs(t),cf(t,i,!1);break;case"textarea":zs(t),df(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?no(t,!!i.multiple,o,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Va)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=cr(ys.current),cr($n.current),qs(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(o=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ys(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Ut(e),null;case 13:if(tt(rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&fn!==null&&e.mode&1&&!(e.flags&128))Km(),ho(),e.flags|=98560,o=!1;else if(o=qs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(Q(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[jn]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),o=!1}else Un!==null&&(Pu(Un),Un=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?St===0&&(St=3):Pd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return mo(),Mu(t,e),t===null&&ms(e.stateNode.containerInfo),Ut(e),null;case 10:return hd(e.type._context),Ut(e),null;case 17:return tn(e.type)&&Wa(),Ut(e),null;case 19:if(tt(rt),o=e.memoizedState,o===null)return Ut(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Fo(o,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Za(t),s!==null){for(e.flags|=128,Fo(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(rt,rt.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>vo&&(e.flags|=128,i=!0,Fo(o,!1),e.lanes=4194304)}else{if(!i)if(t=Za(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return Ut(e),null}else 2*pt()-o.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,Fo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=rt.current,Qe(rt,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function k_(t,e){switch(cd(e),e.tag){case 1:return tn(e.type)&&Wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),tt(en),tt(Bt),_d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vd(e),null;case 13:if(tt(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(rt),null;case 4:return mo(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Zs=!1,kt=!1,z_=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Eu(t,e,n){try{n()}catch(i){dt(t,e,i)}}var eh=!1;function B_(t,e){if(su=Ba,t=Fm(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++d===i&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:t,selectionRange:n},Ba=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Nn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){dt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return _=eh,eh=!1,_}function is(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Eu(e,n,o)}r=r.next}while(r!==i)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ng(t){var e=t.alternate;e!==null&&(t.alternate=null,Ng(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[vs],delete e[uu],delete e[M_],delete e[E_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ig(t){return t.tag===5||t.tag===3||t.tag===4}function th(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Va));else if(i!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function bu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bu(t,e,n),t=t.sibling;t!==null;)bu(t,e,n),t=t.sibling}var Rt=null,In=!1;function _i(t,e,n){for(n=n.child;n!==null;)Ug(t,e,n),n=n.sibling}function Ug(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:kt||Jr(n,e);case 6:var i=Rt,r=In;Rt=null,_i(t,e,n),Rt=i,In=r,Rt!==null&&(In?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(In?(t=Rt,n=n.stateNode,t.nodeType===8?Kl(t.parentNode,n):t.nodeType===1&&Kl(t,n),fs(t)):Kl(Rt,n.stateNode));break;case 4:i=Rt,r=In,Rt=n.stateNode.containerInfo,In=!0,_i(t,e,n),Rt=i,In=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Eu(n,e,s),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!kt&&(Jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,_i(t,e,n),kt=i):_i(t,e,n);break;default:_i(t,e,n)}}function nh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new z_),e.forEach(function(i){var r=$_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Rt=a.stateNode,In=!1;break e;case 3:Rt=a.stateNode.containerInfo,In=!0;break e;case 4:Rt=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(Rt===null)throw Error(Q(160));Ug(o,s,r),Rt=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Vn(t),i&4){try{is(3,t,t.return),xl(3,t)}catch(y){dt(t,t.return,y)}try{is(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:Rn(e,t),Vn(t),i&512&&n!==null&&Jr(n,n.return);break;case 5:if(Rn(e,t),Vn(t),i&512&&n!==null&&Jr(n,n.return),t.flags&32){var r=t.stateNode;try{ls(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&rm(r,o),Kc(a,s);var c=Kc(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?cm(r,f):d==="dangerouslySetInnerHTML"?am(r,f):d==="children"?ls(r,f):qu(r,d,f,c)}switch(a){case"input":Xc(r,o);break;case"textarea":om(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?no(r,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?no(r,!!o.multiple,o.defaultValue,!0):no(r,!!o.multiple,o.multiple?[]:"",!1))}r[vs]=o}catch(y){dt(t,t.return,y)}}break;case 6:if(Rn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){dt(t,t.return,y)}}break;case 3:if(Rn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:Rn(e,t),Vn(t);break;case 13:Rn(e,t),Vn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Cd=pt())),i&4&&nh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||d,Rn(e,t),kt=c):Rn(e,t),Vn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(f=fe=d;fe!==null;){switch(h=fe,g=h.child,h.tag){case 0:case 11:case 14:case 15:is(4,h,h.return);break;case 1:Jr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:Jr(h,h.return);break;case 22:if(h.memoizedState!==null){rh(f);continue}}g!==null?(g.return=h,fe=g):rh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lm("display",s))}catch(y){dt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){dt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),Vn(t),i&4&&nh(t);break;case 21:break;default:Rn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ig(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ls(r,""),i.flags&=-33);var o=th(t);bu(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=th(t);wu(t,a,s);break;default:throw Error(Q(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function H_(t,e,n){fe=t,Fg(t)}function Fg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Zs;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Zs;var c=kt;if(Zs=s,(kt=l)&&!c)for(fe=r;fe!==null;)s=fe,l=s.child,s.tag===22&&s.memoizedState!==null?oh(r):l!==null?(l.return=s,fe=l):oh(r);for(;o!==null;)fe=o,Fg(o),o=o.sibling;fe=r,Zs=a,kt=c}ih(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,fe=o):ih(t)}}function ih(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Hf(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hf(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}kt||e.flags&512&&Tu(e)}catch(h){dt(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function rh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function oh(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{Tu(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{Tu(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var G_=Math.ceil,el=gi.ReactCurrentDispatcher,wd=gi.ReactCurrentOwner,bn=gi.ReactCurrentBatchConfig,Ve=0,At=null,_t=null,Lt=0,un=0,eo=Yi(0),St=0,Es=null,_r=0,Sl=0,bd=0,rs=null,Zt=null,Cd=0,vo=1/0,ri=null,tl=!1,Cu=null,Fi=null,Qs=!1,Ri=null,nl=0,os=0,Au=null,La=-1,Da=0;function jt(){return Ve&6?pt():La!==-1?La:La=pt()}function ki(t){return t.mode&1?Ve&2&&Lt!==0?Lt&-Lt:w_.transition!==null?(Da===0&&(Da=Sm()),Da):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Am(t.type)),t):1}function Bn(t,e,n,i){if(50<os)throw os=0,Au=null,Error(Q(185));Cs(t,n,i),(!(Ve&2)||t!==At)&&(t===At&&(!(Ve&2)&&(Sl|=n),St===4&&Ci(t,Lt)),nn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(vo=pt()+500,vl&&qi()))}function nn(t,e){var n=t.callbackNode;w0(t,e);var i=za(t,t===At?Lt:0);if(i===0)n!==null&&pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pf(n),e===1)t.tag===0?T_(sh.bind(null,t)):Ym(sh.bind(null,t)),x_(function(){!(Ve&6)&&qi()}),n=null;else{switch(Mm(i)){case 1:n=Ju;break;case 4:n=ym;break;case 16:n=ka;break;case 536870912:n=xm;break;default:n=ka}n=Xg(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(La=-1,Da=0,Ve&6)throw Error(Q(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=za(t,t===At?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=il(t,i);else{e=i;var r=Ve;Ve|=2;var o=Bg();(At!==t||Lt!==e)&&(ri=null,vo=pt()+500,ur(t,e));do try{X_();break}catch(a){zg(t,a)}while(!0);fd(),el.current=o,Ve=r,_t!==null?e=0:(At=null,Lt=0,e=St)}if(e!==0){if(e===2&&(r=tu(t),r!==0&&(i=r,e=Ru(t,r))),e===1)throw n=Es,ur(t,0),Ci(t,i),nn(t,pt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!V_(r)&&(e=il(t,i),e===2&&(o=tu(t),o!==0&&(i=o,e=Ru(t,o))),e===1))throw n=Es,ur(t,0),Ci(t,i),nn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:nr(t,Zt,ri);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Cd+500-pt(),10<e)){if(za(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cu(nr.bind(null,t,Zt,ri),e);break}nr(t,Zt,ri);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-zn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*G_(i/1960))-i,10<i){t.timeoutHandle=cu(nr.bind(null,t,Zt,ri),i);break}nr(t,Zt,ri);break;case 5:nr(t,Zt,ri);break;default:throw Error(Q(329))}}}return nn(t,pt()),t.callbackNode===n?kg.bind(null,t):null}function Ru(t,e){var n=rs;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=il(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Pu(e)),t}function Pu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function V_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Hn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~bd,e&=~Sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function sh(t){if(Ve&6)throw Error(Q(327));ao();var e=za(t,0);if(!(e&1))return nn(t,pt()),null;var n=il(t,e);if(t.tag!==0&&n===2){var i=tu(t);i!==0&&(e=i,n=Ru(t,i))}if(n===1)throw n=Es,ur(t,0),Ci(t,e),nn(t,pt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Zt,ri),nn(t,pt()),null}function Ad(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(vo=pt()+500,vl&&qi())}}function yr(t){Ri!==null&&Ri.tag===0&&!(Ve&6)&&ao();var e=Ve;Ve|=1;var n=bn.transition,i=Ye;try{if(bn.transition=null,Ye=1,t)return t()}finally{Ye=i,bn.transition=n,Ve=e,!(Ve&6)&&qi()}}function Rd(){un=eo.current,tt(eo)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,y_(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wa();break;case 3:mo(),tt(en),tt(Bt),_d();break;case 5:vd(i);break;case 4:mo();break;case 13:tt(rt);break;case 19:tt(rt);break;case 10:hd(i.type._context);break;case 22:case 23:Rd()}n=n.return}if(At=t,_t=t=zi(t.current,null),Lt=un=e,St=0,Es=null,bd=Sl=_r=0,Zt=rs=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}lr=null}return t}function zg(t,e){do{var n=_t;try{if(fd(),Aa.current=Ja,Qa){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qa=!1}if(vr=0,Ct=xt=st=null,ns=!1,xs=0,wd.current=null,n===null||n.return===null){St=1,Es=e,_t=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Yf(s);if(g!==null){g.flags&=-257,qf(g,s,a,o,e),g.mode&1&&jf(o,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){jf(o,c,e),Pd();break e}l=Error(Q(426))}}else if(nt&&a.mode&1){var m=Yf(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qf(m,s,a,o,e),ud(go(l,a));break e}}o=l=go(l,a),St!==4&&(St=2),rs===null?rs=[o]:rs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=Mg(o,l,e);Bf(o,u);break e;case 1:a=l;var v=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Fi===null||!Fi.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Eg(o,a,e);Bf(o,x);break e}}o=o.return}while(o!==null)}Gg(n)}catch(E){e=E,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function Bg(){var t=el.current;return el.current=Ja,t===null?Ja:t}function Pd(){(St===0||St===3||St===2)&&(St=4),At===null||!(_r&268435455)&&!(Sl&268435455)||Ci(At,Lt)}function il(t,e){var n=Ve;Ve|=2;var i=Bg();(At!==t||Lt!==e)&&(ri=null,ur(t,e));do try{W_();break}catch(r){zg(t,r)}while(!0);if(fd(),Ve=n,el.current=i,_t!==null)throw Error(Q(261));return At=null,Lt=0,St}function W_(){for(;_t!==null;)Hg(_t)}function X_(){for(;_t!==null&&!g0();)Hg(_t)}function Hg(t){var e=Wg(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?Gg(t):_t=e,wd.current=null}function Gg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=k_(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,_t=null;return}}else if(n=F_(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);St===0&&(St=5)}function nr(t,e,n){var i=Ye,r=bn.transition;try{bn.transition=null,Ye=1,j_(t,e,n,i)}finally{bn.transition=r,Ye=i}return null}function j_(t,e,n,i){do ao();while(Ri!==null);if(Ve&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(b0(t,o),t===At&&(_t=At=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qs||(Qs=!0,Xg(ka,function(){return ao(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bn.transition,bn.transition=null;var s=Ye;Ye=1;var a=Ve;Ve|=4,wd.current=null,B_(t,n),Og(n,t),f_(au),Ba=!!su,au=su=null,t.current=n,H_(n),v0(),Ve=a,Ye=s,bn.transition=o}else t.current=n;if(Qs&&(Qs=!1,Ri=t,nl=r),o=t.pendingLanes,o===0&&(Fi=null),x0(n.stateNode),nn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tl)throw tl=!1,t=Cu,Cu=null,t;return nl&1&&t.tag!==0&&ao(),o=t.pendingLanes,o&1?t===Au?os++:(os=0,Au=t):os=0,qi(),null}function ao(){if(Ri!==null){var t=Mm(nl),e=bn.transition,n=Ye;try{if(bn.transition=null,Ye=16>t?16:t,Ri===null)var i=!1;else{if(t=Ri,Ri=null,nl=0,Ve&6)throw Error(Q(331));var r=Ve;for(Ve|=4,fe=t.current;fe!==null;){var o=fe,s=o.child;if(fe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:is(8,d,o)}var f=d.child;if(f!==null)f.return=d,fe=f;else for(;fe!==null;){d=fe;var h=d.sibling,g=d.return;if(Ng(d),d===c){fe=null;break}if(h!==null){h.return=g,fe=h;break}fe=g}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}fe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,fe=s;else e:for(;fe!==null;){if(o=fe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:is(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,fe=u;break e}fe=o.return}}var v=t.current;for(fe=v;fe!==null;){s=fe;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,fe=p;else e:for(s=v;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(E){dt(a,a.return,E)}if(a===s){fe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,fe=x;break e}fe=a.return}}if(Ve=r,qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(fl,t)}catch{}i=!0}return i}finally{Ye=n,bn.transition=e}}return!1}function ah(t,e,n){e=go(n,e),e=Mg(t,e,1),t=Oi(t,e,1),e=jt(),t!==null&&(Cs(t,1,e),nn(t,e))}function dt(t,e,n){if(t.tag===3)ah(t,t,n);else for(;e!==null;){if(e.tag===3){ah(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fi===null||!Fi.has(i))){t=go(n,t),t=Eg(e,t,1),e=Oi(e,t,1),t=jt(),e!==null&&(Cs(e,1,t),nn(e,t));break}}e=e.return}}function Y_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(Lt&n)===n&&(St===4||St===3&&(Lt&130023424)===Lt&&500>pt()-Cd?ur(t,0):bd|=n),nn(t,e)}function Vg(t,e){e===0&&(t.mode&1?(e=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):e=1);var n=jt();t=hi(t,e),t!==null&&(Cs(t,e,n),nn(t,n))}function q_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vg(t,n)}function $_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),Vg(t,n)}var Wg;Wg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,O_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,nt&&e.flags&1048576&&qm(e,Ya,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pa(t,e),t=e.pendingProps;var r=fo(e,Bt.current);so(e,n),r=xd(null,e,i,t,r,n);var o=Sd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(o=!0,Xa(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,md(e),r.updater=yl,e.stateNode=r,r._reactInternals=e,gu(e,i,t,n),e=yu(null,e,i,!0,o,n)):(e.tag=0,nt&&o&&ld(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Z_(i),t=Nn(i,t),r){case 0:e=_u(null,e,i,t,n);break e;case 1:e=Zf(null,e,i,t,n);break e;case 11:e=$f(null,e,i,t,n);break e;case 14:e=Kf(null,e,i,Nn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),_u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Zf(t,e,i,r,n);case 3:e:{if(Cg(e),t===null)throw Error(Q(387));i=e.pendingProps,o=e.memoizedState,r=o.element,eg(t,e),Ka(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=go(Error(Q(423)),e),e=Qf(t,e,i,n,r);break e}else if(i!==r){r=go(Error(Q(424)),e),e=Qf(t,e,i,n,r);break e}else for(fn=Ui(e.stateNode.containerInfo.firstChild),hn=e,nt=!0,Un=null,n=Qm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=pi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return tg(e),t===null&&hu(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,lu(i,r)?s=null:o!==null&&lu(i,o)&&(e.flags|=32),bg(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&hu(e),null;case 13:return Ag(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),$f(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Qe(qa,i._currentValue),i._currentValue=s,o!==null)if(Hn(o.value,s)){if(o.children===r.children&&!en.current){e=pi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=ui(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pu(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(Q(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pu(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=Cn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Kf(t,e,i,r,n);case 15:return Tg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Pa(t,e),e.tag=1,tn(i)?(t=!0,Xa(e)):t=!1,so(e,n),Sg(e,i,r),gu(e,i,r,n),yu(null,e,i,!0,t,n);case 19:return Rg(t,e,n);case 22:return wg(t,e,n)}throw Error(Q(156,e.tag))};function Xg(t,e){return _m(t,e)}function K_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new K_(t,e,n,i)}function Ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z_(t){if(typeof t=="function")return Ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===Zu)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Ld(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Wr:return dr(n.children,r,o,e);case $u:s=8,r|=8;break;case Bc:return t=wn(12,n,e,r|2),t.elementType=Bc,t.lanes=o,t;case Hc:return t=wn(13,n,e,r),t.elementType=Hc,t.lanes=o,t;case Gc:return t=wn(19,n,e,r),t.elementType=Gc,t.lanes=o,t;case tm:return Ml(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jp:s=10;break e;case em:s=9;break e;case Ku:s=11;break e;case Zu:s=14;break e;case Ti:s=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=wn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function dr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Ml(t,e,n,i){return t=wn(22,t,i,e),t.elementType=tm,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Q_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,o,s,a,l){return t=new Q_(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=wn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(o),t}function J_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jg(t){if(!t)return Wi;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(tn(n))return jm(t,n,e)}return e}function Yg(t,e,n,i,r,o,s,a,l){return t=Dd(n,i,!0,t,r,o,s,a,l),t.context=jg(null),n=t.current,i=jt(),r=ki(n),o=ui(i,r),o.callback=e??null,Oi(n,o,r),t.current.lanes=r,Cs(t,r,i),nn(t,i),t}function El(t,e,n,i){var r=e.current,o=jt(),s=ki(r);return n=jg(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,s),t!==null&&(Bn(t,r,s,o),Ca(t,r,s)),s}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){lh(t,e),(t=t.alternate)&&lh(t,e)}function ey(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}Tl.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));El(t,e,null,null)};Tl.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){El(null,t,null,null)}),e[fi]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Cm(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ch(){}function ty(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=rl(s);o.call(c)}}var s=Yg(e,i,t,0,null,!1,!1,"",ch);return t._reactRootContainer=s,t[fi]=s.current,ms(t.nodeType===8?t.parentNode:t),yr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=rl(l);a.call(c)}}var l=Dd(t,0,!1,null,null,!1,!1,"",ch);return t._reactRootContainer=l,t[fi]=l.current,ms(t.nodeType===8?t.parentNode:t),yr(function(){El(e,l,n,i)}),l}function bl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=rl(s);a.call(l)}}El(e,s,t,r)}else s=ty(n,e,t,r,i);return rl(s)}Em=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(ed(e,n|1),nn(e,pt()),!(Ve&6)&&(vo=pt()+500,qi()))}break;case 13:yr(function(){var i=hi(t,1);if(i!==null){var r=jt();Bn(i,t,1,r)}}),Nd(t,1)}};td=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=jt();Bn(e,t,134217728,n)}Nd(t,134217728)}};Tm=function(t){if(t.tag===13){var e=ki(t),n=hi(t,e);if(n!==null){var i=jt();Bn(n,t,e,i)}Nd(t,e)}};wm=function(){return Ye};bm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};Qc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gl(i);if(!r)throw Error(Q(90));im(i),Xc(i,r)}}}break;case"textarea":om(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};fm=Ad;hm=yr;var ny={usingClientEntryPoint:!1,Events:[Rs,qr,gl,um,dm,Ad]},ko={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iy={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gm(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{fl=Js.inject(iy),qn=Js}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ny;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(e))throw Error(Q(200));return J_(t,e,null,n)};vn.createRoot=function(t,e){if(!Ud(t))throw Error(Q(299));var n=!1,i="",r=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,ms(t.nodeType===8?t.parentNode:t),new Id(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=gm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return yr(t)};vn.hydrate=function(t,e,n){if(!wl(e))throw Error(Q(200));return bl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Ud(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=qg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,o,s),t[fi]=e.current,ms(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tl(e)};vn.render=function(t,e,n){if(!wl(e))throw Error(Q(200));return bl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!wl(t))throw Error(Q(40));return t._reactRootContainer?(yr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};vn.unstable_batchedUpdates=Ad;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wl(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return bl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(t){console.error(t)}}$g(),$p.exports=vn;var ry=$p.exports,Kg,uh=ry;Kg=uh.createRoot,uh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="158",oy=0,dh=1,sy=2,Zg=1,ay=2,ii=3,Xi=0,rn=1,si=2,Bi=0,lo=1,fh=2,hh=3,ph=4,ly=5,or=100,cy=101,uy=102,mh=103,gh=104,dy=200,fy=201,hy=202,py=203,Lu=204,Du=205,my=206,gy=207,vy=208,_y=209,yy=210,xy=211,Sy=212,My=213,Ey=214,Ty=0,wy=1,by=2,ol=3,Cy=4,Ay=5,Ry=6,Py=7,Fd=0,Ly=1,Dy=2,Hi=0,Ny=1,Iy=2,Uy=3,Oy=4,Fy=5,Qg=300,_o=301,yo=302,Nu=303,Iu=304,Cl=306,Uu=1e3,Fn=1001,Ou=1002,Xt=1003,vh=1004,sc=1005,En=1006,ky=1007,Ts=1008,Gi=1009,zy=1010,By=1011,kd=1012,Jg=1013,Pi=1014,Li=1015,ws=1016,ev=1017,tv=1018,fr=1020,Hy=1021,kn=1023,Gy=1024,Vy=1025,hr=1026,xo=1027,Wy=1028,nv=1029,Xy=1030,iv=1031,rv=1033,ac=33776,lc=33777,cc=33778,uc=33779,_h=35840,yh=35841,xh=35842,Sh=35843,jy=36196,Mh=37492,Eh=37496,Th=37808,wh=37809,bh=37810,Ch=37811,Ah=37812,Rh=37813,Ph=37814,Lh=37815,Dh=37816,Nh=37817,Ih=37818,Uh=37819,Oh=37820,Fh=37821,dc=36492,kh=36494,zh=36495,Yy=36283,Bh=36284,Hh=36285,Gh=36286,ov=3e3,pr=3001,qy=3200,$y=3201,sv=0,Ky=1,Tn="",Pt="srgb",mi="srgb-linear",zd="display-p3",Al="display-p3-linear",sl="linear",et="srgb",al="rec709",ll="p3",wr=7680,Vh=519,Zy=512,Qy=513,Jy=514,ex=515,tx=516,nx=517,ix=518,rx=519,Wh=35044,Xh="300 es",Fu=1035,ci=2e3,cl=2001;class bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,ku=180/Math.PI;function Ls(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function ox(t,e){return(t%e+e)%e}function hc(t,e,n){return(1-n)*t+n*e}function jh(t){return(t&t-1)===0&&t!==0}function zu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,o,s,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],_=i[8],y=r[0],m=r[3],u=r[6],v=r[1],p=r[4],x=r[7],E=r[2],C=r[5],b=r[8];return o[0]=s*y+a*v+l*E,o[3]=s*m+a*p+l*C,o[6]=s*u+a*x+l*b,o[1]=c*y+d*v+f*E,o[4]=c*m+d*p+f*C,o[7]=c*u+d*x+f*b,o[2]=h*y+g*v+_*E,o[5]=h*m+g*p+_*C,o[8]=h*u+g*x+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,h=a*l-d*o,g=c*o-s*l,_=n*f+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new ke;function av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sx(){const t=ul("canvas");return t.style.display="block",t}const Yh={};function ss(t){t in Yh||(Yh[t]=!0,console.warn(t))}const qh=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[mi]:{transfer:sl,primaries:al,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:et,primaries:al,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:sl,primaries:ll,toReference:t=>t.applyMatrix3($h),fromReference:t=>t.applyMatrix3(qh)},[zd]:{transfer:et,primaries:ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3($h),fromReference:t=>t.applyMatrix3(qh).convertLinearToSRGB()}},ax=new Set([mi,Al]),$e={enabled:!0,_workingColorSpace:mi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ax.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ea[e].toReference,r=ea[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ea[t].primaries},getTransfer:function(t){return t===Tn?sl:ea[t].transfer}};function co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class lv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=ul("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=co(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(co(n[i]/255)*255):n[i]=co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lx=0;class cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(gc(r[s].image)):o.push(gc(r[s]))}else o=gc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cx=0;class pn extends bo{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Fn,r=Fn,o=En,s=Ts,a=kn,l=Gi,c=pn.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ls(),this.name="",this.source=new cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===pr?Pt:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uu:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uu:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?pr:ov}set encoding(e){ss("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pr?Pt:Tn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Qg;pn.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,n=0,i=0,r=1){it.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,x=(g+1)/2,E=(u+1)/2,C=(d+h)/4,b=(f+y)/4,D=(_+m)/4;return p>x&&p>E?p<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(p),r=C/i,o=b/i):x>E?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=C/r,o=D/r):E<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),i=b/o,r=D/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(h-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ux extends bo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new it(0,0,e,n),this.scissorTest=!1,this.viewport=new it(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ss("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pr?Pt:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends ux{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class uv extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dx extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=o[s+0],g=o[s+1],_=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==g||d!==_){let m=1-a;const u=l*h+c*g+d*_+f*y,v=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const E=Math.sqrt(p),C=Math.atan2(E,u*v);m=Math.sin(m*C)/E,a=Math.sin(a*C)/E}const x=a*v;if(l=l*m+h*x,c=c*m+g*x,d=d*m+_*x,f=f*m+y*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=E,c*=E,d*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],h=o[s+1],g=o[s+2],_=o[s+3];return e[n]=a*_+d*f+l*g-c*h,e[n+1]=l*_+d*h+c*f-a*g,e[n+2]=c*_+d*g+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),h=l(i/2),g=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"YXZ":this._x=h*d*f+c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"ZXY":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f-h*g*_;break;case"ZYX":this._x=h*d*f-c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f+h*g*_;break;case"YZX":this._x=h*d*f+c*g*_,this._y=c*g*f+h*d*_,this._z=c*d*_-h*g*f,this._w=c*d*f-h*g*_;break;case"XZY":this._x=h*d*f-c*g*_,this._y=c*g*f-h*d*_,this._z=c*d*_+h*g*f,this._w=c*d*f+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new I,Kh=new Co;class Ds{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Pn):Pn.fromBufferAttribute(o,s),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),na.subVectors(this.max,Bo),Cr.subVectors(e.a,Bo),Ar.subVectors(e.b,Bo),Rr.subVectors(e.c,Bo),yi.subVectors(Ar,Cr),xi.subVectors(Rr,Ar),Zi.subVectors(Cr,Rr);let n=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-Zi.z,Zi.y,yi.z,0,-yi.x,xi.z,0,-xi.x,Zi.z,0,-Zi.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-Zi.y,Zi.x,0];return!_c(n,Cr,Ar,Rr,na)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Cr,Ar,Rr,na))?!1:(ia.crossVectors(yi,xi),n=[ia.x,ia.y,ia.z],_c(n,Cr,Ar,Rr,na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,ta=new Ds,Cr=new I,Ar=new I,Rr=new I,yi=new I,xi=new I,Zi=new I,Bo=new I,na=new I,ia=new I,Qi=new I;function _c(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Qi.fromArray(t,o);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=n.dot(Qi),d=i.dot(Qi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const fx=new Ds,Ho=new I,yc=new I;class Bd{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):fx.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(yc)),this.expandByPoint(Ho.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new I,xc=new I,ra=new I,Si=new I,Sc=new I,oa=new I,Mc=new I;class dv{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xc.copy(e).add(n).multiplyScalar(.5),ra.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(xc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ra),a=Si.dot(this.direction),l=-Si.dot(ra),c=Si.lengthSq(),d=Math.abs(1-s*s);let f,h,g,_;if(d>0)if(f=s*l-a,h=s*a-l,_=o*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,g=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-o,-l),o),g=h*(h+2*l)+c):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),g=-f*f+h*(h+2*l)+c);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xc).addScaledVector(ra,h),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,o){Sc.subVectors(n,e),oa.subVectors(i,e),Mc.crossVectors(Sc,oa);let s=this.direction.dot(Mc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(oa.crossVectors(Si,oa));if(l<0)return null;const c=a*this.direction.dot(Sc.cross(Si));if(c<0||l+c>s)return null;const d=-a*Si.dot(Mc);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,o,s,a,l,c,d,f,h,g,_,y,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,h,g,_,y,m)}set(e,n,i,r,o,s,a,l,c,d,f,h,g,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),o=1/Pr.setFromMatrixColumn(e,1).length(),s=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*d,g=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h+y*a,n[4]=_*a-g,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=g*a-_,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,_=c*d,y=c*f;n[0]=h-y*a,n[4]=-s*f,n[8]=_+g*a,n[1]=g+_*a,n[5]=s*d,n[9]=y-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,g=s*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,g=s*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+g,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,g=s*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=s*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hx,e,px)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),sa.crossVectors(ln,Mi),r[0]=Mi.x,r[4]=sa.x,r[8]=ln.x,r[1]=Mi.y,r[5]=sa.y,r[9]=ln.y,r[2]=Mi.z,r[6]=sa.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],_=i[2],y=i[6],m=i[10],u=i[14],v=i[3],p=i[7],x=i[11],E=i[15],C=r[0],b=r[4],D=r[8],M=r[12],w=r[1],q=r[5],$=r[9],W=r[13],R=r[2],B=r[6],K=r[10],Y=r[14],O=r[3],V=r[7],z=r[11],L=r[15];return o[0]=s*C+a*w+l*R+c*O,o[4]=s*b+a*q+l*B+c*V,o[8]=s*D+a*$+l*K+c*z,o[12]=s*M+a*W+l*Y+c*L,o[1]=d*C+f*w+h*R+g*O,o[5]=d*b+f*q+h*B+g*V,o[9]=d*D+f*$+h*K+g*z,o[13]=d*M+f*W+h*Y+g*L,o[2]=_*C+y*w+m*R+u*O,o[6]=_*b+y*q+m*B+u*V,o[10]=_*D+y*$+m*K+u*z,o[14]=_*M+y*W+m*Y+u*L,o[3]=v*C+p*w+x*R+E*O,o[7]=v*b+p*q+x*B+E*V,o[11]=v*D+p*$+x*K+E*z,o[15]=v*M+p*W+x*Y+E*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+o*l*f-r*c*f-o*a*h+i*c*h+r*a*g-i*l*g)+y*(+n*l*g-n*c*h+o*s*h-r*s*g+r*c*d-o*l*d)+m*(+n*c*f-n*a*g-o*s*f+i*s*g+o*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],_=e[12],y=e[13],m=e[14],u=e[15],v=f*m*c-y*h*c+y*l*g-a*m*g-f*l*u+a*h*u,p=_*h*c-d*m*c-_*l*g+s*m*g+d*l*u-s*h*u,x=d*y*c-_*f*c+_*a*g-s*y*g-d*a*u+s*f*u,E=_*f*l-d*y*l-_*a*h+s*y*h+d*a*m-s*f*m,C=n*v+i*p+r*x+o*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(y*h*o-f*m*o-y*r*g+i*m*g+f*r*u-i*h*u)*b,e[2]=(a*m*o-y*l*o+y*r*c-i*m*c-a*r*u+i*l*u)*b,e[3]=(f*l*o-a*h*o-f*r*c+i*h*c+a*r*g-i*l*g)*b,e[4]=p*b,e[5]=(d*m*o-_*h*o+_*r*g-n*m*g-d*r*u+n*h*u)*b,e[6]=(_*l*o-s*m*o-_*r*c+n*m*c+s*r*u-n*l*u)*b,e[7]=(s*h*o-d*l*o+d*r*c-n*h*c-s*r*g+n*l*g)*b,e[8]=x*b,e[9]=(_*f*o-d*y*o-_*i*g+n*y*g+d*i*u-n*f*u)*b,e[10]=(s*y*o-_*a*o+_*i*c-n*y*c-s*i*u+n*a*u)*b,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*g-n*a*g)*b,e[12]=E*b,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*m+n*f*m)*b,e[14]=(_*a*r-s*y*r-_*i*l+n*y*l+s*i*m-n*a*m)*b,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,h=o*c,g=o*d,_=o*f,y=s*d,m=s*f,u=a*f,v=l*c,p=l*d,x=l*f,E=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*E,r[1]=(g+x)*E,r[2]=(_-p)*E,r[3]=0,r[4]=(g-x)*C,r[5]=(1-(h+u))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+p)*b,r[9]=(m-v)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Pr.set(r[0],r[1],r[2]).length();const s=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/o,d=1/s,f=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,n.setFromRotationMatrix(Ln),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=ci){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===ci)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===cl)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ci){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),h=(n+e)*c,g=(i+r)*d;let _,y;if(a===ci)_=(s+o)*f,y=-2*f;else if(a===cl)_=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new I,Ln=new yt,hx=new I(0,0,0),px=new I(1,1,1),Mi=new I,sa=new I,ln=new I,Zh=new yt,Qh=new Co;class So{constructor(e=0,n=0,i=0,r=So.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}So.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mx=0;const Jh=new I,Lr=new Co,ei=new yt,aa=new I,Go=new I,gx=new I,vx=new Co,ep=new I(1,0,0),tp=new I(0,1,0),np=new I(0,0,1),_x={type:"added"},yx={type:"removed"};class zt extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new I,n=new So,i=new Co,r=new I(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ep,e)}rotateY(e){return this.rotateOnAxis(tp,e)}rotateZ(e){return this.rotateOnAxis(np,e)}translateOnAxis(e,n){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ep,e)}translateY(e){return this.translateOnAxis(tp,e)}translateZ(e){return this.translateOnAxis(np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?aa.copy(e):aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Go,aa,this.up):ei.lookAt(aa,Go,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ei),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_x)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),g=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new I(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new I,ti=new I,Ec=new I,ni=new I,Dr=new I,Nr=new I,ip=new I,Tc=new I,wc=new I,bc=new I;let la=!1;class On{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Dn.subVectors(r,n),ti.subVectors(i,n),Ec.subVectors(e,n);const s=Dn.dot(Dn),a=Dn.dot(ti),l=Dn.dot(Ec),c=ti.dot(ti),d=ti.dot(Ec),f=s*c-a*a;if(f===0)return o.set(-2,-1,-1);const h=1/f,g=(c*l-a*d)*h,_=(s*d-a*l)*h;return o.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,o,s,a,l){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,ni),l.setScalar(0),l.addScaledVector(o,ni.x),l.addScaledVector(s,ni.y),l.addScaledVector(a,ni.z),l}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ti.subVectors(e,n),Dn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Dr.subVectors(r,i),Nr.subVectors(o,i),Tc.subVectors(e,i);const l=Dr.dot(Tc),c=Nr.dot(Tc);if(l<=0&&c<=0)return n.copy(i);wc.subVectors(e,r);const d=Dr.dot(wc),f=Nr.dot(wc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Dr,s);bc.subVectors(e,o);const g=Dr.dot(bc),_=Nr.dot(bc);if(_>=0&&g<=_)return n.copy(o);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Nr,a);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return ip.subVectors(o,r),a=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(ip,a);const u=1/(m+y+h);return s=y*u,a=h*u,n.copy(i).addScaledVector(Dr,s).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=ox(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Cc(s,o,e+1/3),this.g=Cc(s,o,e),this.b=Cc(s,o,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=fv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=mc(e.r),this.g=mc(e.g),this.b=mc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return $e.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Qt(Ft.r*255,0,255))*65536+Math.round(Qt(Ft.g*255,0,255))*256+Math.round(Qt(Ft.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,o=Ft.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Pt){$e.fromWorkingColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(ca);const i=hc(Ei.h,ca.h,n),r=hc(Ei.s,ca.s,n),o=hc(Ei.l,ca.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ge;Ge.NAMES=fv;let xx=0;class Ns extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=lo,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lu&&(i.blendSrc=this.blendSrc),this.blendDst!==Du&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hv extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new I,ua=new We;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wh,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ua.fromBufferAttribute(this,n),ua.applyMatrix3(e),this.setXY(n,ua.x,ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class pv extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mv extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mn extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Sx=0;const xn=new yt,Ac=new zt,Ir=new I,cn=new Ds,Vo=new Ds,bt=new I;class vi extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(av(e)?mv:pv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ke().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];cn.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(cn.min,Vo.min),cn.expandByPoint(bt),bt.addVectors(cn.max,Vo.max),cn.expandByPoint(bt)):(cn.expandByPoint(Vo.min),cn.expandByPoint(Vo.max))}cn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)bt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),bt.add(Ir)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new I,d[w]=new I;const f=new I,h=new I,g=new I,_=new We,y=new We,m=new We,u=new I,v=new I;function p(w,q,$){f.fromArray(r,w*3),h.fromArray(r,q*3),g.fromArray(r,$*3),_.fromArray(s,w*2),y.fromArray(s,q*2),m.fromArray(s,$*2),h.sub(f),g.sub(f),y.sub(_),m.sub(_);const W=1/(y.x*m.y-m.x*y.y);isFinite(W)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(W),v.copy(g).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(W),c[w].add(u),c[q].add(u),c[$].add(u),d[w].add(v),d[q].add(v),d[$].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let w=0,q=x.length;w<q;++w){const $=x[w],W=$.start,R=$.count;for(let B=W,K=W+R;B<K;B+=3)p(i[B+0],i[B+1],i[B+2])}const E=new I,C=new I,b=new I,D=new I;function M(w){b.fromArray(o,w*3),D.copy(b);const q=c[w];E.copy(q),E.sub(b.multiplyScalar(b.dot(q))).normalize(),C.crossVectors(D,q);const W=C.dot(d[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=W}for(let w=0,q=x.length;w<q;++w){const $=x[w],W=$.start,R=$.count;for(let B=W,K=W+R;B<K;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new I,o=new I,s=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[g++]}return new Kn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new yt,Ji=new dv,da=new Bd,op=new I,Ur=new I,Or=new I,Fr=new I,Rc=new I,fa=new I,ha=new We,pa=new We,ma=new We,sp=new I,ap=new I,lp=new I,ga=new I,va=new I;class Yn extends zt{constructor(e=new vi,n=new hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){fa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(Rc.fromBufferAttribute(f,e),s?fa.addScaledVector(Rc,d):fa.addScaledVector(Rc.sub(n),d))}n.add(fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(o),Ji.copy(e.ray).recast(e.near),!(da.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(da,op)===null||Ji.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(rp.copy(o).invert(),Ji.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ji)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,g=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=s[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let x=v,E=p;x<E;x+=3){const C=a.getX(x),b=a.getX(x+1),D=a.getX(x+2);r=_a(this,u,e,i,c,d,f,C,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const v=a.getX(m),p=a.getX(m+1),x=a.getX(m+2);r=_a(this,s,e,i,c,d,f,v,p,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,y=h.length;_<y;_++){const m=h[_],u=s[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let x=v,E=p;x<E;x+=3){const C=x,b=x+1,D=x+2;r=_a(this,u,e,i,c,d,f,C,b,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){const v=m,p=m+1,x=m+2;r=_a(this,s,e,i,c,d,f,v,p,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Mx(t,e,n,i,r,o,s,a){let l;if(e.side===rn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Xi,a),l===null)return null;va.copy(a),va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(va);return c<n.near||c>n.far?null:{distance:c,point:va.clone(),object:t}}function _a(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Or),t.getVertexPosition(c,Fr);const d=Mx(t,e,n,i,Ur,Or,Fr,ga);if(d){r&&(ha.fromBufferAttribute(r,a),pa.fromBufferAttribute(r,l),ma.fromBufferAttribute(r,c),d.uv=On.getInterpolation(ga,Ur,Or,Fr,ha,pa,ma,new We)),o&&(ha.fromBufferAttribute(o,a),pa.fromBufferAttribute(o,l),ma.fromBufferAttribute(o,c),d.uv1=On.getInterpolation(ga,Ur,Or,Fr,ha,pa,ma,new We),d.uv2=d.uv1),s&&(sp.fromBufferAttribute(s,a),ap.fromBufferAttribute(s,l),lp.fromBufferAttribute(s,c),d.normal=On.getInterpolation(ga,Ur,Or,Fr,sp,ap,lp,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};On.getNormal(Ur,Or,Fr,f.normal),d.face=f}return d}class Is extends vi{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(f,2));function _(y,m,u,v,p,x,E,C,b,D,M){const w=x/b,q=E/D,$=x/2,W=E/2,R=C/2,B=b+1,K=D+1;let Y=0,O=0;const V=new I;for(let z=0;z<K;z++){const L=z*q-W;for(let F=0;F<B;F++){const se=F*w-$;V[y]=se*v,V[m]=L*p,V[u]=R,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[u]=C>0?1:-1,d.push(V.x,V.y,V.z),f.push(F/b),f.push(1-z/D),Y+=1}}for(let z=0;z<D;z++)for(let L=0;L<b;L++){const F=h+L+B*z,se=h+L+B*(z+1),le=h+(L+1)+B*(z+1),he=h+(L+1)+B*z;l.push(F,se,he),l.push(se,le,he),O+=6}a.addGroup(g,O,M),g+=O,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Mo(t[n]);for(const r in i)e[r]=i[r]}return e}function Ex(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gv(t){return t.getRenderTarget()===null?t.outputColorSpace:$e.workingColorSpace}const Tx={clone:Mo,merge:Vt};var wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vv extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ci}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ku*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ku*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class Cx extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(kr,zr,e,n);r.layers=this.layers,this.add(r);const o=new dn(kr,zr,e,n);o.layers=this.layers,this.add(o);const s=new dn(kr,zr,e,n);s.layers=this.layers,this.add(s);const a=new dn(kr,zr,e,n);a.layers=this.layers,this.add(a);const l=new dn(kr,zr,e,n);l.layers=this.layers,this.add(l);const c=new dn(kr,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class _v extends pn{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:_o,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ss("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pr?Pt:Tn),this.texture=new _v(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Is(5,5,5),o=new Sr({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Bi});o.uniforms.tEquirect.value=n;const s=new Yn(r,o),a=n.minFilter;return n.minFilter===Ts&&(n.minFilter=En),new Cx(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Pc=new I,Rx=new I,Px=new ke;class ir{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pc.subVectors(i,n).cross(Rx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Px.getNormalMatrix(e),r=this.coplanarPoint(Pc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Bd,ya=new I;class Gd{constructor(e=new ir,n=new ir,i=new ir,r=new ir,o=new ir,s=new ir){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],_=r[9],y=r[10],m=r[11],u=r[12],v=r[13],p=r[14],x=r[15];if(i[0].setComponents(l-o,h-c,m-g,x-u).normalize(),i[1].setComponents(l+o,h+c,m+g,x+u).normalize(),i[2].setComponents(l+s,h+d,m+_,x+v).normalize(),i[3].setComponents(l-s,h-d,m-_,x-v).normalize(),i[4].setComponents(l-a,h-f,m-y,x-p).normalize(),n===ci)i[5].setComponents(l+a,h+f,m+y,x+p).normalize();else if(n===cl)i[5].setComponents(a,f,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Lx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=t.createBuffer();t.bindBuffer(d,g),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,f){const h=d.array,g=d.updateRange;t.bindBuffer(f,c),g.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,d)):f.version<c.version&&(o(f.buffer,c,d),f.version=c.version)}return{get:s,remove:a,update:l}}class Vd extends vi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const v=u*h-s;for(let p=0;p<c;p++){const x=p*f-o;_.push(x,-v,0),y.push(0,0,1),m.push(p/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const p=v+c*u,x=v+c*(u+1),E=v+1+c*(u+1),C=v+1+c*u;g.push(p,x,C),g.push(x,E,C)}this.setIndex(g),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vS=`#ifdef USE_GRADIENTMAP
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
}`,_S=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ES=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,RS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,HS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,yM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,OM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VM=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,WM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,XM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,qM=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,QM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,JM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,eE=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,iE=`uniform float size;
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
}`,rE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,sE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,lE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ne={alphahash_fragment:Dx,alphahash_pars_fragment:Nx,alphamap_fragment:Ix,alphamap_pars_fragment:Ux,alphatest_fragment:Ox,alphatest_pars_fragment:Fx,aomap_fragment:kx,aomap_pars_fragment:zx,begin_vertex:Bx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Vx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:qx,color_fragment:$x,color_pars_fragment:Kx,color_pars_vertex:Zx,color_vertex:Qx,common:Jx,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:oS,colorspace_fragment:sS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:dS,envmap_physical_pars_fragment:ES,envmap_vertex:fS,fog_vertex:hS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:vS,lightmap_fragment:_S,lightmap_pars_fragment:yS,lights_lambert_fragment:xS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:TS,lights_toon_pars_fragment:wS,lights_phong_fragment:bS,lights_phong_pars_fragment:CS,lights_physical_fragment:AS,lights_physical_pars_fragment:RS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:DS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:OS,map_fragment:FS,map_pars_fragment:kS,map_particle_fragment:zS,map_particle_pars_fragment:BS,metalnessmap_fragment:HS,metalnessmap_pars_fragment:GS,morphcolor_vertex:VS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:jS,normal_fragment_begin:YS,normal_fragment_maps:qS,normal_pars_fragment:$S,normal_pars_vertex:KS,normal_vertex:ZS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:tM,iridescence_pars_fragment:nM,opaque_fragment:iM,packing:rM,premultiplied_alpha_fragment:oM,project_vertex:sM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:dM,shadowmap_pars_vertex:fM,shadowmap_vertex:hM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:gM,skinning_vertex:vM,skinnormal_vertex:_M,specularmap_fragment:yM,specularmap_pars_fragment:xM,tonemapping_fragment:SM,tonemapping_pars_fragment:MM,transmission_fragment:EM,transmission_pars_fragment:TM,uv_pars_fragment:wM,uv_pars_vertex:bM,uv_vertex:CM,worldpos_vertex:AM,background_vert:RM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:NM,cube_frag:IM,depth_vert:UM,depth_frag:OM,distanceRGBA_vert:FM,distanceRGBA_frag:kM,equirect_vert:zM,equirect_frag:BM,linedashed_vert:HM,linedashed_frag:GM,meshbasic_vert:VM,meshbasic_frag:WM,meshlambert_vert:XM,meshlambert_frag:jM,meshmatcap_vert:YM,meshmatcap_frag:qM,meshnormal_vert:$M,meshnormal_frag:KM,meshphong_vert:ZM,meshphong_frag:QM,meshphysical_vert:JM,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:oE,shadow_frag:sE,sprite_vert:aE,sprite_frag:lE},ae={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Vt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Vt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Vt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Vt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Vt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Vt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Vt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Vt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Vt([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Vt([ae.lights,ae.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const xa={r:0,b:0,g:0};function cE(t,e,n,i,r,o,s){const a=new Ge(0);let l=o===!0?0:1,c,d,f=null,h=0,g=null;function _(m,u){let v=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Cl)?(d===void 0&&(d=new Yn(new Is(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:Mo(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=$e.getTransfer(p.colorSpace)!==et,(f!==p||h!==p.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=p,h=p.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new Yn(new Vd(2,2),new Sr({name:"BackgroundMaterial",uniforms:Mo(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(p.colorSpace)!==et,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(f!==p||h!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=p,h=p.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(xa,gv(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function uE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let c=l,d=!1;function f(R,B,K,Y,O){let V=!1;if(s){const z=y(Y,K,B);c!==z&&(c=z,g(c.object)),V=u(R,Y,K,O),V&&v(R,Y,K,O)}else{const z=B.wireframe===!0;(c.geometry!==Y.id||c.program!==K.id||c.wireframe!==z)&&(c.geometry=Y.id,c.program=K.id,c.wireframe=z,V=!0)}O!==null&&n.update(O,t.ELEMENT_ARRAY_BUFFER),(V||d)&&(d=!1,D(R,B,K,Y),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(R){return i.isWebGL2?t.bindVertexArray(R):o.bindVertexArrayOES(R)}function _(R){return i.isWebGL2?t.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function y(R,B,K){const Y=K.wireframe===!0;let O=a[R.id];O===void 0&&(O={},a[R.id]=O);let V=O[B.id];V===void 0&&(V={},O[B.id]=V);let z=V[Y];return z===void 0&&(z=m(h()),V[Y]=z),z}function m(R){const B=[],K=[],Y=[];for(let O=0;O<r;O++)B[O]=0,K[O]=0,Y[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:Y,object:R,attributes:{},index:null}}function u(R,B,K,Y){const O=c.attributes,V=B.attributes;let z=0;const L=K.getAttributes();for(const F in L)if(L[F].location>=0){const le=O[F];let he=V[F];if(he===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),le===void 0||le.attribute!==he||he&&le.data!==he.data)return!0;z++}return c.attributesNum!==z||c.index!==Y}function v(R,B,K,Y){const O={},V=B.attributes;let z=0;const L=K.getAttributes();for(const F in L)if(L[F].location>=0){let le=V[F];le===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const he={};he.attribute=le,le&&le.data&&(he.data=le.data),O[F]=he,z++}c.attributes=O,c.attributesNum=z,c.index=Y}function p(){const R=c.newAttributes;for(let B=0,K=R.length;B<K;B++)R[B]=0}function x(R){E(R,0)}function E(R,B){const K=c.newAttributes,Y=c.enabledAttributes,O=c.attributeDivisors;K[R]=1,Y[R]===0&&(t.enableVertexAttribArray(R),Y[R]=1),O[R]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),O[R]=B)}function C(){const R=c.newAttributes,B=c.enabledAttributes;for(let K=0,Y=B.length;K<Y;K++)B[K]!==R[K]&&(t.disableVertexAttribArray(K),B[K]=0)}function b(R,B,K,Y,O,V,z){z===!0?t.vertexAttribIPointer(R,B,K,O,V):t.vertexAttribPointer(R,B,K,Y,O,V)}function D(R,B,K,Y){if(i.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const O=Y.attributes,V=K.getAttributes(),z=B.defaultAttributeValues;for(const L in V){const F=V[L];if(F.location>=0){let se=O[L];if(se===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){const le=se.normalized,he=se.itemSize,ve=n.get(se);if(ve===void 0)continue;const Le=ve.buffer,be=ve.type,De=ve.bytesPerElement,lt=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||se.gpuType===Jg);if(se.isInterleavedBufferAttribute){const Ue=se.data,k=Ue.stride,on=se.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<F.locationSize;_e++)E(F.location+_e,Ue.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<F.locationSize;_e++)x(F.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let _e=0;_e<F.locationSize;_e++)b(F.location+_e,he/F.locationSize,be,le,k*De,(on+he/F.locationSize*_e)*De,lt)}else{if(se.isInstancedBufferAttribute){for(let Ue=0;Ue<F.locationSize;Ue++)E(F.location+Ue,se.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ue=0;Ue<F.locationSize;Ue++)x(F.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ue=0;Ue<F.locationSize;Ue++)b(F.location+Ue,he/F.locationSize,be,le,he*De,he/F.locationSize*Ue*De,lt)}}else if(z!==void 0){const le=z[L];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(F.location,le);break;case 3:t.vertexAttrib3fv(F.location,le);break;case 4:t.vertexAttrib4fv(F.location,le);break;default:t.vertexAttrib1fv(F.location,le)}}}}C()}function M(){$();for(const R in a){const B=a[R];for(const K in B){const Y=B[K];for(const O in Y)_(Y[O].object),delete Y[O];delete B[K]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const K in B){const Y=B[K];for(const O in Y)_(Y[O].object),delete Y[O];delete B[K]}delete a[R.id]}function q(R){for(const B in a){const K=a[B];if(K[R.id]===void 0)continue;const Y=K[R.id];for(const O in Y)_(Y[O].object),delete Y[O];delete K[R.id]}}function $(){W(),d=!0,c!==l&&(c=l,g(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:p,enableAttribute:x,disableUnusedAttributes:C}}function dE(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,f){if(f===0)return;let h,g;if(r)h=t,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](o,c,d,f),n.update(d,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function fE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,x=s||e.has("OES_texture_float"),E=p&&x,C=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:p,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:C}}function hE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ir,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||o&&!m)o?d(null):c();else{const v=o?0:i,p=v*4;let x=u.clippingState||null;l.value=x,x=d(_,h,p,g);for(let E=0;E!==p;++E)x[E]=n[E];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=g+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let p=0,x=g;p!==y;++p,x+=4)s.copy(f[p]).applyMatrix4(v,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function pE(t){let e=new WeakMap;function n(s,a){return a===Nu?s.mapping=_o:a===Iu&&(s.mapping=yo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Nu||a===Iu)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ax(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class xv extends vv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=4,cp=[.125,.215,.35,.446,.526,.582],sr=20,Lc=new xv,up=new Ge;let Dc=null,Nc=0,Ic=0;const rr=(1+Math.sqrt(5))/2,Br=1/rr,dp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,rr,Br),new I(0,rr,-Br),new I(Br,0,rr),new I(-Br,0,rr),new I(rr,Br,0),new I(-rr,Br,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Nc,Ic),e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_o||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:ws,format:kn,colorSpace:mi,depthBuffer:!1},r=hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(o)),this._blurMaterial=gE(o,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Lc)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(up),d.toneMapping=Hi,d.autoClear=!1;const g=new hv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Yn(new Is,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(up),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;Sa(r,v*p,u>2?p:0,p,p),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_o||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Yn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Sa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Lc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=dp[(r-1)%dp.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Yn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*sr-1),y=o/_,m=isFinite(o)?1+Math.floor(d*y):sr;m>sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const u=[];let v=0;for(let b=0;b<sr;++b){const D=b/y,M=Math.exp(-D*D/2);u.push(M),b===0?v+=M:b<m&&(v+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:p}=this;h.dTheta.value=_,h.mipInt.value=p-i;const x=this._sizeLods[r],E=3*x*(r>p-to?r-p+to:0),C=4*(this._cubeSize-x);Sa(n,E,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Lc)}}function mE(t){const e=[],n=[],i=[];let r=t;const o=t-to+1+cp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-to?l=cp[s-t+to-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,y=3,m=2,u=1,v=new Float32Array(y*_*g),p=new Float32Array(m*_*g),x=new Float32Array(u*_*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,D=C>2?0:-1,M=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];v.set(M,y*_*C),p.set(h,m*_*C);const w=[C,C,C,C,C,C];x.set(w,u*_*C)}const E=new vi;E.setAttribute("position",new Kn(v,y)),E.setAttribute("uv",new Kn(p,m)),E.setAttribute("faceIndex",new Kn(x,u)),e.push(E),r>to&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hp(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=Cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gE(t,e,n){const i=new Float32Array(sr),r=new I(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function pp(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function mp(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function vE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nu||l===Iu,d=l===_o||l===yo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new fp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new fp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function _E(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yE(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",s),delete r[h.id];const g=o.get(h);g&&(e.remove(g),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,_=f.attributes.position;let y=0;if(g!==null){const v=g.array;y=g.version;for(let p=0,x=v.length;p<x;p+=3){const E=v[p+0],C=v[p+1],b=v[p+2];h.push(E,C,C,b,b,E)}}else if(_!==void 0){const v=_.array;y=_.version;for(let p=0,x=v.length/3-1;p<x;p+=3){const E=p+0,C=p+1,b=p+2;h.push(E,C,C,b,b,E)}}else return;const m=new(av(h)?mv:pv)(h,1);m.version=y;const u=o.get(f);u&&e.remove(u),o.set(f,m)}function d(f){const h=o.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function xE(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function d(h,g){t.drawElements(o,g,a,h*l),n.update(g,o,1)}function f(h,g,_){if(_===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](o,g,a,h*l,_),n.update(g,o,_)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=f}function SE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e){return t[0]-e[0]}function EE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function TE(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let m=o.get(d);if(m===void 0||m.count!==y){let B=function(){W.dispose(),o.delete(d),d.removeEventListener("dispose",B)};var g=B;m!==void 0&&m.texture.dispose();const p=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let w=d.attributes.position.count*M,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*q*4*y),W=new uv($,w,q,y);W.type=Li,W.needsUpdate=!0;const R=M*4;for(let K=0;K<y;K++){const Y=C[K],O=b[K],V=D[K],z=w*q*4*K;for(let L=0;L<Y.count;L++){const F=L*R;p===!0&&(s.fromBufferAttribute(Y,L),$[z+F+0]=s.x,$[z+F+1]=s.y,$[z+F+2]=s.z,$[z+F+3]=0),x===!0&&(s.fromBufferAttribute(O,L),$[z+F+4]=s.x,$[z+F+5]=s.y,$[z+F+6]=s.z,$[z+F+7]=0),E===!0&&(s.fromBufferAttribute(V,L),$[z+F+8]=s.x,$[z+F+9]=s.y,$[z+F+10]=s.z,$[z+F+11]=V.itemSize===4?s.w:1)}}m={count:y,texture:W,size:new We(w,q)},o.set(d,m),d.addEventListener("dispose",B)}let u=0;for(let p=0;p<h.length;p++)u+=h[p];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const E=y[x];E[0]=x,E[1]=h[x]}y.sort(EE);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ME);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const E=a[x],C=E[0],b=E[1];C!==Number.MAX_SAFE_INTEGER&&b?(m&&d.getAttribute("morphTarget"+x)!==m[C]&&d.setAttribute("morphTarget"+x,m[C]),u&&d.getAttribute("morphNormal"+x)!==u[C]&&d.setAttribute("morphNormal"+x,u[C]),r[x]=b,v+=b):(m&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const p=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function wE(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const Sv=new pn,Mv=new uv,Ev=new dx,Tv=new _v,gp=[],vp=[],_p=new Float32Array(16),yp=new Float32Array(9),xp=new Float32Array(4);function Ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=gp[r];if(o===void 0&&(o=new Float32Array(r),gp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Rl(t,e){let n=vp[e];n===void 0&&(n=new Int32Array(e),vp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function PE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;xp.set(i),t.uniformMatrix2fv(this.addr,!1,xp),Et(n,i)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;yp.set(i),t.uniformMatrix3fv(this.addr,!1,yp),Et(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),Et(n,i)}}function NE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Sv,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ev,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tv,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mv,r)}function XE(t){switch(t){case 5126:return bE;case 35664:return CE;case 35665:return AE;case 35666:return RE;case 35674:return PE;case 35675:return LE;case 35676:return DE;case 5124:case 35670:return NE;case 35667:case 35671:return IE;case 35668:case 35672:return UE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return kE;case 36295:return zE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return HE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return WE}}function jE(t,e){t.uniform1fv(this.addr,e)}function YE(t,e){const n=Ao(e,this.size,2);t.uniform2fv(this.addr,n)}function qE(t,e){const n=Ao(e,this.size,3);t.uniform3fv(this.addr,n)}function $E(t,e){const n=Ao(e,this.size,4);t.uniform4fv(this.addr,n)}function KE(t,e){const n=Ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZE(t,e){const n=Ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QE(t,e){const n=Ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JE(t,e){t.uniform1iv(this.addr,e)}function e1(t,e){t.uniform2iv(this.addr,e)}function t1(t,e){t.uniform3iv(this.addr,e)}function n1(t,e){t.uniform4iv(this.addr,e)}function i1(t,e){t.uniform1uiv(this.addr,e)}function r1(t,e){t.uniform2uiv(this.addr,e)}function o1(t,e){t.uniform3uiv(this.addr,e)}function s1(t,e){t.uniform4uiv(this.addr,e)}function a1(t,e,n){const i=this.cache,r=e.length,o=Rl(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Sv,o[s])}function l1(t,e,n){const i=this.cache,r=e.length,o=Rl(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Ev,o[s])}function c1(t,e,n){const i=this.cache,r=e.length,o=Rl(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Tv,o[s])}function u1(t,e,n){const i=this.cache,r=e.length,o=Rl(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Et(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Mv,o[s])}function d1(t){switch(t){case 5126:return jE;case 35664:return YE;case 35665:return qE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return r1;case 36295:return o1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}class f1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=XE(n.type)}}class h1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=d1(n.type)}}class p1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function Sp(t,e){t.seq.push(e),t.map[e.id]=e}function m1(t,e,n){const i=t.name,r=i.length;for(Uc.lastIndex=0;;){const o=Uc.exec(i),s=Uc.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Sp(n,c===void 0?new f1(a,t,e):new h1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new p1(a),Sp(n,f)),n=f}}}class Ia{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);m1(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Mp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const g1=37297;let v1=0;function _1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function y1(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===ll&&n===al?i="LinearDisplayP3ToLinearSRGB":e===al&&n===ll&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case Al:return[i,"LinearTransferOETF"];case Pt:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ep(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+_1(t.getShaderSource(e),s)}else return r}function x1(t,e){const n=y1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function S1(t,e){let n;switch(e){case Ny:n="Linear";break;case Iy:n="Reinhard";break;case Uy:n="OptimizedCineon";break;case Oy:n="ACESFilmic";break;case Fy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function M1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($o).join(`
`)}function E1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function T1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function $o(t){return t!==""}function Tp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(t){return t.replace(w1,C1)}const b1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C1(t,e){let n=Ne[e];if(n===void 0){const i=b1.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bu(n)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(t){return t.replace(A1,R1)}function R1(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Cp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function L1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _o:case yo:e="ENVMAP_TYPE_CUBE";break;case Cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function N1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ly:e="ENVMAP_BLENDING_MIX";break;case Dy:e="ENVMAP_BLENDING_ADD";break}return e}function I1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function U1(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=P1(n),c=L1(n),d=D1(n),f=N1(n),h=I1(n),g=n.isWebGL2?"":M1(n),_=E1(o),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($o).join(`
`),m.length>0&&(m+=`
`),u=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter($o).join(`
`),u.length>0&&(u+=`
`)):(m=[Cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),u=[g,Cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Hi?S1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,x1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($o).join(`
`)),s=Bu(s),s=Tp(s,n),s=wp(s,n),a=Bu(a),a=Tp(a,n),a=wp(a,n),s=bp(s),a=bp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=v+m+s,x=v+u+a,E=Mp(r,r.VERTEX_SHADER,p),C=Mp(r,r.FRAGMENT_SHADER,x);r.attachShader(y,E),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function b(q){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(y).trim(),W=r.getShaderInfoLog(E).trim(),R=r.getShaderInfoLog(C).trim();let B=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,C);else{const Y=Ep(r,E,"vertex"),O=Ep(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+Y+`
`+O)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||R==="")&&(K=!1);K&&(q.diagnostics={runnable:B,programLog:$,vertexShader:{log:W,prefix:m},fragmentShader:{log:R,prefix:u}})}r.deleteShader(E),r.deleteShader(C),D=new Ia(r,y),M=T1(r,y)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(y,g1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=C,this}let O1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new k1(e),n.set(e,i)),i}}class k1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function z1(t,e,n,i,r,o,s){const a=new Hd,l=new F1,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,w,q,$,W){const R=$.fog,B=W.geometry,K=M.isMeshStandardMaterial?$.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),O=Y&&Y.mapping===Cl?Y.image.height:null,V=_[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,L=z!==void 0?z.length:0;let F=0;B.morphAttributes.position!==void 0&&(F=1),B.morphAttributes.normal!==void 0&&(F=2),B.morphAttributes.color!==void 0&&(F=3);let se,le,he,ve;if(V){const mt=Xn[V];se=mt.vertexShader,le=mt.fragmentShader}else se=M.vertexShader,le=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const Le=t.getRenderTarget(),be=W.isInstancedMesh===!0,De=!!M.map,lt=!!M.matcap,Ue=!!Y,k=!!M.aoMap,on=!!M.lightMap,_e=!!M.bumpMap,Ce=!!M.normalMap,we=!!M.displacementMap,ct=!!M.emissiveMap,Oe=!!M.metalnessMap,Fe=!!M.roughnessMap,Ke=M.anisotropy>0,Tt=M.clearcoat>0,Nt=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,H=Ke&&!!M.anisotropyMap,te=Tt&&!!M.clearcoatMap,J=Tt&&!!M.clearcoatNormalMap,ne=Tt&&!!M.clearcoatRoughnessMap,me=Nt&&!!M.iridescenceMap,oe=Nt&&!!M.iridescenceThicknessMap,ue=A&&!!M.sheenColorMap,Me=A&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,ee=!!M.specularColorMap,qe=!!M.specularIntensityMap,Ae=S&&!!M.transmissionMap,Ee=S&&!!M.thicknessMap,ye=!!M.gradientMap,pe=!!M.alphaMap,He=M.alphaTest>0,P=!!M.alphaHash,ce=!!M.extensions,ie=!!B.attributes.uv1,Z=!!B.attributes.uv2,re=!!B.attributes.uv3;let xe=Hi;return M.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(xe=t.toneMapping),{isWebGL2:d,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:se,fragmentShader:le,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:be,instancingColor:be&&W.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:mi,map:De,matcap:lt,envMap:Ue,envMapMode:Ue&&Y.mapping,envMapCubeUVHeight:O,aoMap:k,lightMap:on,bumpMap:_e,normalMap:Ce,displacementMap:h&&we,emissiveMap:ct,normalMapObjectSpace:Ce&&M.normalMapType===Ky,normalMapTangentSpace:Ce&&M.normalMapType===sv,metalnessMap:Oe,roughnessMap:Fe,anisotropy:Ke,anisotropyMap:H,clearcoat:Tt,clearcoatMap:te,clearcoatNormalMap:J,clearcoatRoughnessMap:ne,iridescence:Nt,iridescenceMap:me,iridescenceThicknessMap:oe,sheen:A,sheenColorMap:ue,sheenRoughnessMap:Me,specularMap:Xe,specularColorMap:ee,specularIntensityMap:qe,transmission:S,transmissionMap:Ae,thicknessMap:Ee,gradientMap:ye,opaque:M.transparent===!1&&M.blending===lo,alphaMap:pe,alphaTest:He,alphaHash:P,combine:M.combine,mapUv:De&&y(M.map.channel),aoMapUv:k&&y(M.aoMap.channel),lightMapUv:on&&y(M.lightMap.channel),bumpMapUv:_e&&y(M.bumpMap.channel),normalMapUv:Ce&&y(M.normalMap.channel),displacementMapUv:we&&y(M.displacementMap.channel),emissiveMapUv:ct&&y(M.emissiveMap.channel),metalnessMapUv:Oe&&y(M.metalnessMap.channel),roughnessMapUv:Fe&&y(M.roughnessMap.channel),anisotropyMapUv:H&&y(M.anisotropyMap.channel),clearcoatMapUv:te&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&y(M.sheenRoughnessMap.channel),specularMapUv:Xe&&y(M.specularMap.channel),specularColorMapUv:ee&&y(M.specularColorMap.channel),specularIntensityMapUv:qe&&y(M.specularIntensityMap.channel),transmissionMapUv:Ae&&y(M.transmissionMap.channel),thicknessMapUv:Ee&&y(M.thicknessMap.channel),alphaMapUv:pe&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ce||Ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:Z,vertexUv3s:re,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(De||pe),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:F,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:De&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===si,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)w.push(q),w.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(v(w,M),p(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function p(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const w=_[M.type];let q;if(w){const $=Xn[w];q=Tx.clone($.uniforms)}else q=M.uniforms;return q}function E(M,w){let q;for(let $=0,W=c.length;$<W;$++){const R=c[$];if(R.cacheKey===w){q=R,++q.usedTimes;break}}return q===void 0&&(q=new U1(t,w,M,o),c.push(q)),q}function C(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:E,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:D}}function B1(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function H1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ap(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,g,_,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function a(f,h,g,_,y,m){const u=s(f,h,g,_,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,_,y,m){const u=s(f,h,g,_,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||H1),i.length>1&&i.sort(h||Ap),r.length>1&&r.sort(h||Ap)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function G1(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Rp,t.set(i,[s])):r>=o.length?(s=new Rp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function V1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ge};break;case"SpotLight":n={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function W1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let X1=0;function j1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Y1(t,e){const n=new V1,i=W1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const o=new I,s=new yt,a=new yt;function l(d,f){let h=0,g=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,u=0,v=0,p=0,x=0,E=0,C=0,b=0,D=0,M=0;d.sort(j1);const w=f===!0?Math.PI:1;for(let $=0,W=d.length;$<W;$++){const R=d[$],B=R.color,K=R.intensity,Y=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*K*w,g+=B.g*K*w,_+=B.b*K*w;else if(R.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(R.sh.coefficients[V],K);M++}else if(R.isDirectionalLight){const V=n.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const z=R.shadow,L=i.get(R);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=O,r.directionalShadowMatrix[y]=R.shadow.matrix,x++}r.directional[y]=V,y++}else if(R.isSpotLight){const V=n.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(B).multiplyScalar(K*w),V.distance=Y,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,r.spot[u]=V;const z=R.shadow;if(R.map&&(r.spotLightMap[b]=R.map,b++,z.updateMatrices(R),R.castShadow&&D++),r.spotLightMatrix[u]=z.matrix,R.castShadow){const L=i.get(R);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,r.spotShadow[u]=L,r.spotShadowMap[u]=O,C++}u++}else if(R.isRectAreaLight){const V=n.get(R);V.color.copy(B).multiplyScalar(K),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=V,v++}else if(R.isPointLight){const V=n.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity*w),V.distance=R.distance,V.decay=R.decay,R.castShadow){const z=R.shadow,L=i.get(R);L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,r.pointShadow[m]=L,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=R.shadow.matrix,E++}r.point[m]=V,m++}else if(R.isHemisphereLight){const V=n.get(R);V.skyColor.copy(R.color).multiplyScalar(K*w),V.groundColor.copy(R.groundColor).multiplyScalar(K*w),r.hemi[p]=V,p++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const q=r.hash;(q.directionalLength!==y||q.pointLength!==m||q.spotLength!==u||q.rectAreaLength!==v||q.hemiLength!==p||q.numDirectionalShadows!==x||q.numPointShadows!==E||q.numSpotShadows!==C||q.numSpotMaps!==b||q.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=v,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,q.directionalLength=y,q.pointLength=m,q.spotLength=u,q.rectAreaLength=v,q.hemiLength=p,q.numDirectionalShadows=x,q.numPointShadows=E,q.numSpotShadows=C,q.numSpotMaps=b,q.numLightProbes=M,r.version=X1++)}function c(d,f){let h=0,g=0,_=0,y=0,m=0;const u=f.matrixWorldInverse;for(let v=0,p=d.length;v<p;v++){const x=d[v];if(x.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(u),h++}else if(x.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),a.identity(),s.copy(x.matrixWorld),s.premultiply(u),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const E=r.point[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(u),g++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Pp(t,e){const n=new Y1(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function q1(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Pp(t,e),n.set(o,[l])):s>=a.length?(l=new Pp(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class $1 extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K1 extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J1(t,e,n){let i=new Gd;const r=new We,o=new We,s=new it,a=new $1({depthPacking:$y}),l=new K1,c={},d=n.maxTextureSize,f={[Xi]:rn,[rn]:Xi,[si]:si},h=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Z1,fragmentShader:Q1}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new vi;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let u=this.type;this.render=function(E,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const D=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Bi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=u!==ii&&this.type===ii,W=u===ii&&this.type!==ii;for(let R=0,B=E.length;R<B;R++){const K=E[R],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const O=Y.getFrameExtents();if(r.multiply(O),o.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/O.x),r.x=o.x*O.x,Y.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/O.y),r.y=o.y*O.y,Y.mapSize.y=o.y)),Y.map===null||$===!0||W===!0){const z=this.type!==ii?{minFilter:Xt,magFilter:Xt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xr(r.x,r.y,z),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const V=Y.getViewportCount();for(let z=0;z<V;z++){const L=Y.getViewport(z);s.set(o.x*L.x,o.y*L.y,o.x*L.z,o.y*L.w),q.viewport(s),Y.updateMatrices(K,z),i=Y.getFrustum(),x(C,b,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===ii&&v(Y,b),Y.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(D,M,w)};function v(E,C){const b=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,b,h,y,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,b,g,y,null)}function p(E,C,b,D){let M=null;const w=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=b.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=M.uuid,$=C.uuid;let W=c[q];W===void 0&&(W={},c[q]=W);let R=W[$];R===void 0&&(R=M.clone(),W[$]=R),M=R}if(M.visible=C.visible,M.wireframe=C.wireframe,D===ii?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=b}return M}function x(E,C,b,D,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const $=e.update(E),W=E.material;if(Array.isArray(W)){const R=$.groups;for(let B=0,K=R.length;B<K;B++){const Y=R[B],O=W[Y.materialIndex];if(O&&O.visible){const V=p(E,O,D,M);t.renderBufferDirect(b,null,$,V,E,Y)}}}else if(W.visible){const R=p(E,W,D,M);t.renderBufferDirect(b,null,$,R,E,null)}}const q=E.children;for(let $=0,W=q.length;$<W;$++)x(q[$],C,b,D,M)}}function eT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new it;let ie=null;const Z=new it(0,0,0,0);return{setMask:function(re){ie!==re&&!P&&(t.colorMask(re,re,re,re),ie=re)},setLocked:function(re){P=re},setClear:function(re,xe,je,mt,yn){yn===!0&&(re*=mt,xe*=mt,je*=mt),ce.set(re,xe,je,mt),Z.equals(ce)===!1&&(t.clearColor(re,xe,je,mt),Z.copy(ce))},reset:function(){P=!1,ie=null,Z.set(-1,0,0,0)}}}function o(){let P=!1,ce=null,ie=null,Z=null;return{setTest:function(re){re?De(t.DEPTH_TEST):lt(t.DEPTH_TEST)},setMask:function(re){ce!==re&&!P&&(t.depthMask(re),ce=re)},setFunc:function(re){if(ie!==re){switch(re){case Ty:t.depthFunc(t.NEVER);break;case wy:t.depthFunc(t.ALWAYS);break;case by:t.depthFunc(t.LESS);break;case ol:t.depthFunc(t.LEQUAL);break;case Cy:t.depthFunc(t.EQUAL);break;case Ay:t.depthFunc(t.GEQUAL);break;case Ry:t.depthFunc(t.GREATER);break;case Py:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=re}},setLocked:function(re){P=re},setClear:function(re){Z!==re&&(t.clearDepth(re),Z=re)},reset:function(){P=!1,ce=null,ie=null,Z=null}}}function s(){let P=!1,ce=null,ie=null,Z=null,re=null,xe=null,je=null,mt=null,yn=null;return{setTest:function(Ze){P||(Ze?De(t.STENCIL_TEST):lt(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!P&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,Ht,Gn){(ie!==Ze||Z!==Ht||re!==Gn)&&(t.stencilFunc(Ze,Ht,Gn),ie=Ze,Z=Ht,re=Gn)},setOp:function(Ze,Ht,Gn){(xe!==Ze||je!==Ht||mt!==Gn)&&(t.stencilOp(Ze,Ht,Gn),xe=Ze,je=Ht,mt=Gn)},setLocked:function(Ze){P=Ze},setClear:function(Ze){yn!==Ze&&(t.clearStencil(Ze),yn=Ze)},reset:function(){P=!1,ce=null,ie=null,Z=null,re=null,xe=null,je=null,mt=null,yn=null}}}const a=new r,l=new o,c=new s,d=new WeakMap,f=new WeakMap;let h={},g={},_=new WeakMap,y=[],m=null,u=!1,v=null,p=null,x=null,E=null,C=null,b=null,D=null,M=new Ge(0,0,0),w=0,q=!1,$=null,W=null,R=null,B=null,K=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=V>=2);let L=null,F={};const se=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),he=new it().fromArray(se),ve=new it().fromArray(le);function Le(P,ce,ie,Z){const re=new Uint8Array(4),xe=t.createTexture();t.bindTexture(P,xe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<ie;je++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ce+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return xe}const be={};be[t.TEXTURE_2D]=Le(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=Le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=Le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=Le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(ol),Oe(!1),Fe(dh),De(t.CULL_FACE),we(Bi);function De(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function lt(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ue(P,ce){return g[P]!==ce?(t.bindFramebuffer(P,ce),g[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(P,ce){let ie=y,Z=!1;if(P)if(ie=_.get(ce),ie===void 0&&(ie=[],_.set(ce,ie)),P.isWebGLMultipleRenderTargets){const re=P.texture;if(ie.length!==re.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,je=re.length;xe<je;xe++)ie[xe]=t.COLOR_ATTACHMENT0+xe;ie.length=re.length,Z=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,Z=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,Z=!0);Z&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function on(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const _e={[or]:t.FUNC_ADD,[cy]:t.FUNC_SUBTRACT,[uy]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[mh]=t.MIN,_e[gh]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_e[mh]=P.MIN_EXT,_e[gh]=P.MAX_EXT)}const Ce={[dy]:t.ZERO,[fy]:t.ONE,[hy]:t.SRC_COLOR,[Lu]:t.SRC_ALPHA,[yy]:t.SRC_ALPHA_SATURATE,[vy]:t.DST_COLOR,[my]:t.DST_ALPHA,[py]:t.ONE_MINUS_SRC_COLOR,[Du]:t.ONE_MINUS_SRC_ALPHA,[_y]:t.ONE_MINUS_DST_COLOR,[gy]:t.ONE_MINUS_DST_ALPHA,[xy]:t.CONSTANT_COLOR,[Sy]:t.ONE_MINUS_CONSTANT_COLOR,[My]:t.CONSTANT_ALPHA,[Ey]:t.ONE_MINUS_CONSTANT_ALPHA};function we(P,ce,ie,Z,re,xe,je,mt,yn,Ze){if(P===Bi){u===!0&&(lt(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),P!==ly){if(P!==v||Ze!==q){if((p!==or||C!==or)&&(t.blendEquation(t.FUNC_ADD),p=or,C=or),Ze)switch(P){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.ONE,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,E=null,b=null,D=null,M.set(0,0,0),w=0,v=P,q=Ze}return}re=re||ce,xe=xe||ie,je=je||Z,(ce!==p||re!==C)&&(t.blendEquationSeparate(_e[ce],_e[re]),p=ce,C=re),(ie!==x||Z!==E||xe!==b||je!==D)&&(t.blendFuncSeparate(Ce[ie],Ce[Z],Ce[xe],Ce[je]),x=ie,E=Z,b=xe,D=je),(mt.equals(M)===!1||yn!==w)&&(t.blendColor(mt.r,mt.g,mt.b,yn),M.copy(mt),w=yn),v=P,q=!1}function ct(P,ce){P.side===si?lt(t.CULL_FACE):De(t.CULL_FACE);let ie=P.side===rn;ce&&(ie=!ie),Oe(ie),P.blending===lo&&P.transparent===!1?we(Bi):we(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Z=P.stencilWrite;c.setTest(Z),Z&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):lt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){$!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),$=P)}function Fe(P){P!==oy?(De(t.CULL_FACE),P!==W&&(P===dh?t.cullFace(t.BACK):P===sy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):lt(t.CULL_FACE),W=P}function Ke(P){P!==R&&(O&&t.lineWidth(P),R=P)}function Tt(P,ce,ie){P?(De(t.POLYGON_OFFSET_FILL),(B!==ce||K!==ie)&&(t.polygonOffset(ce,ie),B=ce,K=ie)):lt(t.POLYGON_OFFSET_FILL)}function Nt(P){P?De(t.SCISSOR_TEST):lt(t.SCISSOR_TEST)}function A(P){P===void 0&&(P=t.TEXTURE0+Y-1),L!==P&&(t.activeTexture(P),L=P)}function S(P,ce,ie){ie===void 0&&(L===null?ie=t.TEXTURE0+Y-1:ie=L);let Z=F[ie];Z===void 0&&(Z={type:void 0,texture:void 0},F[ie]=Z),(Z.type!==P||Z.texture!==ce)&&(L!==ie&&(t.activeTexture(ie),L=ie),t.bindTexture(P,ce||be[P]),Z.type=P,Z.texture=ce)}function H(){const P=F[L];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(P){he.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),he.copy(P))}function Ee(P){ve.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ve.copy(P))}function ye(P,ce){let ie=f.get(ce);ie===void 0&&(ie=new WeakMap,f.set(ce,ie));let Z=ie.get(P);Z===void 0&&(Z=t.getUniformBlockIndex(ce,P.name),ie.set(P,Z))}function pe(P,ce){const Z=f.get(ce).get(P);d.get(ce)!==Z&&(t.uniformBlockBinding(ce,Z,P.__bindingPointIndex),d.set(ce,Z))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},L=null,F={},g={},_=new WeakMap,y=[],m=null,u=!1,v=null,p=null,x=null,E=null,C=null,b=null,D=null,M=new Ge(0,0,0),w=0,q=!1,$=null,W=null,R=null,B=null,K=null,he.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:lt,bindFramebuffer:Ue,drawBuffers:k,useProgram:on,setBlending:we,setMaterial:ct,setFlipSided:Oe,setCullFace:Fe,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:Nt,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:J,texImage2D:ee,texImage3D:qe,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:Me,texStorage3D:Xe,texSubImage2D:ne,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ae,viewport:Ee,reset:He}}function tT(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return u?new OffscreenCanvas(A,S):ul("canvas")}function p(A,S,H,te){let J=1;if((A.width>te||A.height>te)&&(J=te/Math.max(A.width,A.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=S?zu:Math.floor,me=ne(J*A.width),oe=ne(J*A.height);y===void 0&&(y=v(me,oe));const ue=H?v(me,oe):y;return ue.width=me,ue.height=oe,ue.getContext("2d").drawImage(A,0,0,me,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+me+"x"+oe+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return jh(A.width)&&jh(A.height)}function E(A){return a?!1:A.wrapS!==Fn||A.wrapT!==Fn||A.minFilter!==Xt&&A.minFilter!==En}function C(A,S){return A.generateMipmaps&&S&&A.minFilter!==Xt&&A.minFilter!==En}function b(A){t.generateMipmap(A)}function D(A,S,H,te,J=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===t.RED&&(H===t.FLOAT&&(ne=t.R32F),H===t.HALF_FLOAT&&(ne=t.R16F),H===t.UNSIGNED_BYTE&&(ne=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ne=t.R8UI),H===t.UNSIGNED_SHORT&&(ne=t.R16UI),H===t.UNSIGNED_INT&&(ne=t.R32UI),H===t.BYTE&&(ne=t.R8I),H===t.SHORT&&(ne=t.R16I),H===t.INT&&(ne=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ne=t.RG32F),H===t.HALF_FLOAT&&(ne=t.RG16F),H===t.UNSIGNED_BYTE&&(ne=t.RG8)),S===t.RGBA){const me=J?sl:$e.getTransfer(te);H===t.FLOAT&&(ne=t.RGBA32F),H===t.HALF_FLOAT&&(ne=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ne=me===et?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(A,S,H){return C(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Xt||A===vh||A===sc?t.NEAREST:t.LINEAR}function q(A){const S=A.target;S.removeEventListener("dispose",q),W(S),S.isVideoTexture&&_.delete(S)}function $(A){const S=A.target;S.removeEventListener("dispose",$),B(S)}function W(A){const S=i.get(A);if(S.__webglInit===void 0)return;const H=A.source,te=m.get(H);if(te){const J=te[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(te).length===0&&m.delete(H)}i.remove(A)}function R(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const H=A.source,te=m.get(H);delete te[S.__cacheKey],s.memory.textures--}function B(A){const S=A.texture,H=i.get(A),te=i.get(S);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let ne=0;ne<H.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(H.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)t.deleteFramebuffer(H.__webglFramebuffer[J]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let J=0,ne=S.length;J<ne;J++){const me=i.get(S[J]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),s.memory.textures--),i.remove(S[J])}i.remove(S),i.remove(A)}let K=0;function Y(){K=0}function O(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function z(A,S){const H=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(H,A,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function L(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){De(H,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function F(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){De(H,A,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function se(A,S){const H=i.get(A);if(A.version>0&&H.__version!==A.version){lt(H,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const le={[Uu]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[Ou]:t.MIRRORED_REPEAT},he={[Xt]:t.NEAREST,[vh]:t.NEAREST_MIPMAP_NEAREST,[sc]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[ky]:t.LINEAR_MIPMAP_NEAREST,[Ts]:t.LINEAR_MIPMAP_LINEAR},ve={[Zy]:t.NEVER,[rx]:t.ALWAYS,[Qy]:t.LESS,[ex]:t.LEQUAL,[Jy]:t.EQUAL,[ix]:t.GEQUAL,[tx]:t.GREATER,[nx]:t.NOTEQUAL};function Le(A,S,H){if(H?(t.texParameteri(A,t.TEXTURE_WRAP_S,le[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,le[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,le[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,he[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,he[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Fn||S.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Xt&&S.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Xt||S.minFilter!==sc&&S.minFilter!==Ts||S.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ws&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function be(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",q));const te=S.source;let J=m.get(te);J===void 0&&(J={},m.set(te,J));const ne=V(S);if(ne!==A.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),J[ne].usedTimes++;const me=J[A.__cacheKey];me!==void 0&&(J[A.__cacheKey].usedTimes--,me.usedTimes===0&&R(S)),A.__cacheKey=ne,A.__webglTexture=J[ne].texture}return H}function De(A,S,H){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);const J=be(A,S),ne=S.source;n.bindTexture(te,A.__webglTexture,t.TEXTURE0+H);const me=i.get(ne);if(ne.version!==me.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const oe=$e.getPrimaries($e.workingColorSpace),ue=S.colorSpace===Tn?null:$e.getPrimaries(S.colorSpace),Me=S.colorSpace===Tn||oe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Xe=E(S)&&x(S.image)===!1;let ee=p(S.image,Xe,!1,d);ee=Nt(S,ee);const qe=x(ee)||a,Ae=o.convert(S.format,S.colorSpace);let Ee=o.convert(S.type),ye=D(S.internalFormat,Ae,Ee,S.colorSpace,S.isVideoTexture);Le(te,S,qe);let pe;const He=S.mipmaps,P=a&&S.isVideoTexture!==!0,ce=me.__version===void 0||J===!0,ie=M(S,ee,qe);if(S.isDepthTexture)ye=t.DEPTH_COMPONENT,a?S.type===Li?ye=t.DEPTH_COMPONENT32F:S.type===Pi?ye=t.DEPTH_COMPONENT24:S.type===fr?ye=t.DEPTH24_STENCIL8:ye=t.DEPTH_COMPONENT16:S.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===hr&&ye===t.DEPTH_COMPONENT&&S.type!==kd&&S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Pi,Ee=o.convert(S.type)),S.format===xo&&ye===t.DEPTH_COMPONENT&&(ye=t.DEPTH_STENCIL,S.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=fr,Ee=o.convert(S.type))),ce&&(P?n.texStorage2D(t.TEXTURE_2D,1,ye,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ae,Ee,null));else if(S.isDataTexture)if(He.length>0&&qe){P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,ye,He[0].width,He[0].height);for(let Z=0,re=He.length;Z<re;Z++)pe=He[Z],P?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,pe.width,pe.height,Ae,Ee,pe.data):n.texImage2D(t.TEXTURE_2D,Z,ye,pe.width,pe.height,0,Ae,Ee,pe.data);S.generateMipmaps=!1}else P?(ce&&n.texStorage2D(t.TEXTURE_2D,ie,ye,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ae,Ee,ee.data)):n.texImage2D(t.TEXTURE_2D,0,ye,ee.width,ee.height,0,Ae,Ee,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){P&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ye,He[0].width,He[0].height,ee.depth);for(let Z=0,re=He.length;Z<re;Z++)pe=He[Z],S.format!==kn?Ae!==null?P?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,ee.depth,Ae,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ye,pe.width,pe.height,ee.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,ee.depth,Ae,Ee,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ye,pe.width,pe.height,ee.depth,0,Ae,Ee,pe.data)}else{P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,ye,He[0].width,He[0].height);for(let Z=0,re=He.length;Z<re;Z++)pe=He[Z],S.format!==kn?Ae!==null?P?n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,pe.width,pe.height,Ae,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,pe.width,pe.height,Ae,Ee,pe.data):n.texImage2D(t.TEXTURE_2D,Z,ye,pe.width,pe.height,0,Ae,Ee,pe.data)}else if(S.isDataArrayTexture)P?(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ie,ye,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ae,Ee,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,Ae,Ee,ee.data);else if(S.isData3DTexture)P?(ce&&n.texStorage3D(t.TEXTURE_3D,ie,ye,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ae,Ee,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,Ae,Ee,ee.data);else if(S.isFramebufferTexture){if(ce)if(P)n.texStorage2D(t.TEXTURE_2D,ie,ye,ee.width,ee.height);else{let Z=ee.width,re=ee.height;for(let xe=0;xe<ie;xe++)n.texImage2D(t.TEXTURE_2D,xe,ye,Z,re,0,Ae,Ee,null),Z>>=1,re>>=1}}else if(He.length>0&&qe){P&&ce&&n.texStorage2D(t.TEXTURE_2D,ie,ye,He[0].width,He[0].height);for(let Z=0,re=He.length;Z<re;Z++)pe=He[Z],P?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ae,Ee,pe):n.texImage2D(t.TEXTURE_2D,Z,ye,Ae,Ee,pe);S.generateMipmaps=!1}else P?(ce&&n.texStorage2D(t.TEXTURE_2D,ie,ye,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ee,ee)):n.texImage2D(t.TEXTURE_2D,0,ye,Ae,Ee,ee);C(S,qe)&&b(te),me.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,H){if(S.image.length!==6)return;const te=be(A,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const me=$e.getPrimaries($e.workingColorSpace),oe=S.colorSpace===Tn?null:$e.getPrimaries(S.colorSpace),ue=S.colorSpace===Tn||me===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let Z=0;Z<6;Z++)!Me&&!Xe?ee[Z]=p(S.image[Z],!1,!0,c):ee[Z]=Xe?S.image[Z].image:S.image[Z],ee[Z]=Nt(S,ee[Z]);const qe=ee[0],Ae=x(qe)||a,Ee=o.convert(S.format,S.colorSpace),ye=o.convert(S.type),pe=D(S.internalFormat,Ee,ye,S.colorSpace),He=a&&S.isVideoTexture!==!0,P=ne.__version===void 0||te===!0;let ce=M(S,qe,Ae);Le(t.TEXTURE_CUBE_MAP,S,Ae);let ie;if(Me){He&&P&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,pe,qe.width,qe.height);for(let Z=0;Z<6;Z++){ie=ee[Z].mipmaps;for(let re=0;re<ie.length;re++){const xe=ie[re];S.format!==kn?Ee!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,xe.width,xe.height,Ee,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,0,0,xe.width,xe.height,Ee,ye,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re,pe,xe.width,xe.height,0,Ee,ye,xe.data)}}}else{ie=S.mipmaps,He&&P&&(ie.length>0&&ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,pe,ee[0].width,ee[0].height));for(let Z=0;Z<6;Z++)if(Xe){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ee[Z].width,ee[Z].height,Ee,ye,ee[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,pe,ee[Z].width,ee[Z].height,0,Ee,ye,ee[Z].data);for(let re=0;re<ie.length;re++){const je=ie[re].image[Z].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,je.width,je.height,Ee,ye,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,pe,je.width,je.height,0,Ee,ye,je.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,ye,ee[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,pe,Ee,ye,ee[Z]);for(let re=0;re<ie.length;re++){const xe=ie[re];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,0,0,Ee,ye,xe.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re+1,pe,Ee,ye,xe.image[Z])}}}C(S,Ae)&&b(t.TEXTURE_CUBE_MAP),ne.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ue(A,S,H,te,J,ne){const me=o.convert(H.format,H.colorSpace),oe=o.convert(H.type),ue=D(H.internalFormat,me,oe,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Xe=Math.max(1,S.width>>ne),ee=Math.max(1,S.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,ue,Xe,ee,S.depth,0,me,oe,null):n.texImage2D(J,ne,ue,Xe,ee,0,me,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ke(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(H).__webglTexture,0,Fe(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(H).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(A,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let te=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||Ke(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===Li?te=t.DEPTH_COMPONENT32F:J.type===Pi&&(te=t.DEPTH_COMPONENT24));const ne=Fe(S);Ke(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const te=Fe(S);H&&Ke(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):Ke(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<te.length;J++){const ne=te[J],me=o.convert(ne.format,ne.colorSpace),oe=o.convert(ne.type),ue=D(ne.internalFormat,me,oe,ne.colorSpace),Me=Fe(S);H&&Ke(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ue,S.width,S.height):Ke(S)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function on(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const te=i.get(S.depthTexture).__webglTexture,J=Fe(S);if(S.depthTexture.format===hr)Ke(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===xo)Ke(S)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function _e(A){const S=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");on(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=t.createRenderbuffer(),k(S.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),k(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,S,H){const te=i.get(A);S!==void 0&&Ue(te.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&_e(A)}function we(A){const S=A.texture,H=i.get(A),te=i.get(S);A.addEventListener("dispose",$),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,s.memory.textures++);const J=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,me=x(A)||a;if(J){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let ue=0;ue<S.mipmaps.length;ue++)H.__webglFramebuffer[oe][ue]=t.createFramebuffer()}else H.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)H.__webglFramebuffer[oe]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const oe=A.texture;for(let ue=0,Me=oe.length;ue<Me;ue++){const Xe=i.get(oe[ue]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ke(A)===!1){const oe=ne?S:[S];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<oe.length;ue++){const Me=oe[ue];H.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const Xe=o.convert(Me.format,Me.colorSpace),ee=o.convert(Me.type),qe=D(Me.internalFormat,Xe,ee,Me.colorSpace,A.isXRRenderTarget===!0),Ae=Fe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),k(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S,me);for(let oe=0;oe<6;oe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Ue(H.__webglFramebuffer[oe][ue],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else Ue(H.__webglFramebuffer[oe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);C(S,me)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const oe=A.texture;for(let ue=0,Me=oe.length;ue<Me;ue++){const Xe=oe[ue],ee=i.get(Xe);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Le(t.TEXTURE_2D,Xe,me),Ue(H.__webglFramebuffer,A,Xe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),C(Xe,me)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?oe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,te.__webglTexture),Le(oe,S,me),a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Ue(H.__webglFramebuffer[ue],A,S,t.COLOR_ATTACHMENT0,oe,ue);else Ue(H.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,oe,0);C(S,me)&&b(oe),n.unbindTexture()}A.depthBuffer&&_e(A)}function ct(A){const S=x(A)||a,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,J=H.length;te<J;te++){const ne=H[te];if(C(ne,S)){const me=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(ne).__webglTexture;n.bindTexture(me,oe),b(me),n.unbindTexture()}}}function Oe(A){if(a&&A.samples>0&&Ke(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,te=A.height;let J=t.COLOR_BUFFER_BIT;const ne=[],me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let Me=0;Me<S.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){ne.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&ne.push(me);const Xe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Xe===!1&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ue&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),ue){const ee=i.get(S[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,J,t.NEAREST),g&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<S.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Me]);const Xe=i.get(S[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Fe(A){return Math.min(f,A.samples)}function Ke(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(A){const S=s.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function Nt(A,S){const H=A.colorSpace,te=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fu||H!==mi&&H!==Tn&&($e.getTransfer(H)===et?a===!1?e.has("EXT_sRGB")===!0&&te===kn?(A.format=Fu,A.minFilter=En,A.generateMipmaps=!1):S=lv.sRGBToLinear(S):(te!==kn||J!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=O,this.resetTextureUnits=Y,this.setTexture2D=z,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=se,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ke}function nT(t,e,n){const i=n.isWebGL2;function r(o,s=Tn){let a;const l=$e.getTransfer(s);if(o===Gi)return t.UNSIGNED_BYTE;if(o===ev)return t.UNSIGNED_SHORT_4_4_4_4;if(o===tv)return t.UNSIGNED_SHORT_5_5_5_1;if(o===zy)return t.BYTE;if(o===By)return t.SHORT;if(o===kd)return t.UNSIGNED_SHORT;if(o===Jg)return t.INT;if(o===Pi)return t.UNSIGNED_INT;if(o===Li)return t.FLOAT;if(o===ws)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Hy)return t.ALPHA;if(o===kn)return t.RGBA;if(o===Gy)return t.LUMINANCE;if(o===Vy)return t.LUMINANCE_ALPHA;if(o===hr)return t.DEPTH_COMPONENT;if(o===xo)return t.DEPTH_STENCIL;if(o===Fu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Wy)return t.RED;if(o===nv)return t.RED_INTEGER;if(o===Xy)return t.RG;if(o===iv)return t.RG_INTEGER;if(o===rv)return t.RGBA_INTEGER;if(o===ac||o===lc||o===cc||o===uc)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===uc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===_h||o===yh||o===xh||o===Sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===jy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Mh||o===Eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Mh)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Eh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Th||o===wh||o===bh||o===Ch||o===Ah||o===Rh||o===Ph||o===Lh||o===Dh||o===Nh||o===Ih||o===Uh||o===Oh||o===Fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Th)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===wh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===bh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ch)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ah)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Rh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ph)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Lh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Dh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Nh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ih)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Uh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Oh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Fh)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===dc||o===kh||o===zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===dc)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===zh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Yy||o===Bh||o===Hh||o===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Hh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===fr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class iT extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ko extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oT extends pn{constructor(e,n,i,r,o,s,a,l,c,d){if(d=d!==void 0?d:hr,d!==hr&&d!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===hr&&(i=Pi),i===void 0&&d===xo&&(i=fr),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sT extends bo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,_=null;const y=n.getContextAttributes();let m=null,u=null;const v=[],p=[],x=new dn;x.layers.enable(1),x.viewport=new it;const E=new dn;E.layers.enable(2),E.viewport=new it;const C=[x,E],b=new iT;b.layers.enable(1),b.layers.enable(2);let D=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let F=v[L];return F===void 0&&(F=new Oc,v[L]=F),F.getTargetRaySpace()},this.getControllerGrip=function(L){let F=v[L];return F===void 0&&(F=new Oc,v[L]=F),F.getGripSpace()},this.getHand=function(L){let F=v[L];return F===void 0&&(F=new Oc,v[L]=F),F.getHandSpace()};function w(L){const F=p.indexOf(L.inputSource);if(F===-1)return;const se=v[F];se!==void 0&&(se.update(L.inputSource,L.frame,c||s),se.dispatchEvent({type:L.type,data:L.inputSource}))}function q(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let L=0;L<v.length;L++){const F=p[L];F!==null&&(p[L]=null,v[L].disconnect(F))}D=null,M=null,e.setRenderTarget(m),g=null,h=null,f=null,r=null,u=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:g}),u=new xr(g.framebufferWidth,g.framebufferHeight,{format:kn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let F=null,se=null,le=null;y.depth&&(le=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=y.stencil?xo:hr,se=y.stencil?fr:Pi);const he={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(he),r.updateRenderState({layers:[h]}),u=new xr(h.textureWidth,h.textureHeight,{format:kn,type:Gi,depthTexture:new oT(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ve=e.properties.get(u);ve.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(L){for(let F=0;F<L.removed.length;F++){const se=L.removed[F],le=p.indexOf(se);le>=0&&(p[le]=null,v[le].disconnect(se))}for(let F=0;F<L.added.length;F++){const se=L.added[F];let le=p.indexOf(se);if(le===-1){for(let ve=0;ve<v.length;ve++)if(ve>=p.length){p.push(se),le=ve;break}else if(p[ve]===null){p[ve]=se,le=ve;break}if(le===-1)break}const he=v[le];he&&he.connect(se)}}const W=new I,R=new I;function B(L,F,se){W.setFromMatrixPosition(F.matrixWorld),R.setFromMatrixPosition(se.matrixWorld);const le=W.distanceTo(R),he=F.projectionMatrix.elements,ve=se.projectionMatrix.elements,Le=he[14]/(he[10]-1),be=he[14]/(he[10]+1),De=(he[9]+1)/he[5],lt=(he[9]-1)/he[5],Ue=(he[8]-1)/he[0],k=(ve[8]+1)/ve[0],on=Le*Ue,_e=Le*k,Ce=le/(-Ue+k),we=Ce*-Ue;F.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(we),L.translateZ(Ce),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const ct=Le+Ce,Oe=be+Ce,Fe=on-we,Ke=_e+(le-we),Tt=De*be/Oe*ct,Nt=lt*be/Oe*ct;L.projectionMatrix.makePerspective(Fe,Ke,Tt,Nt,ct,Oe),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function K(L,F){F===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(F.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;b.near=E.near=x.near=L.near,b.far=E.far=x.far=L.far,(D!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,M=b.far);const F=L.parent,se=b.cameras;K(b,F);for(let le=0;le<se.length;le++)K(se[le],F);se.length===2?B(b,x,E):b.projectionMatrix.copy(x.projectionMatrix),Y(L,b,F)};function Y(L,F,se){se===null?L.matrix.copy(F.matrixWorld):(L.matrix.copy(se.matrixWorld),L.matrix.invert(),L.matrix.multiply(F.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(F.projectionMatrix),L.projectionMatrixInverse.copy(F.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=ku*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(L){l=L,h!==null&&(h.fixedFoveation=L),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=L)};let O=null;function V(L,F){if(d=F.getViewerPose(c||s),_=F,d!==null){const se=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let le=!1;se.length!==b.cameras.length&&(b.cameras.length=0,le=!0);for(let he=0;he<se.length;he++){const ve=se[he];let Le=null;if(g!==null)Le=g.getViewport(ve);else{const De=f.getViewSubImage(h,ve);Le=De.viewport,he===0&&(e.setRenderTargetTextures(u,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(u))}let be=C[he];be===void 0&&(be=new dn,be.layers.enable(he),be.viewport=new it,C[he]=be),be.matrix.fromArray(ve.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ve.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),le===!0&&b.cameras.push(be)}}for(let se=0;se<v.length;se++){const le=p[se],he=v[se];le!==null&&he!==void 0&&he.update(le,F,c||s)}O&&O(L,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const z=new yv;z.setAnimationLoop(V),this.setAnimationLoop=function(L){O=L},this.dispose=function(){}}}function aT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,gv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,p,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),f(m,u)):u.isMeshPhongMaterial?(o(m,u),d(m,u)):u.isMeshStandardMaterial?(o(m,u),h(m,u),u.isMeshPhysicalMaterial&&g(m,u,x)):u.isMeshMatcapMaterial?(o(m,u),_(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),y(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,p):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*p,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,p){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=p*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lT(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,p){const x=p.program;i.uniformBlockBinding(v,x)}function c(v,p){let x=r[v.id];x===void 0&&(_(v),x=d(v),r[v.id]=x,v.addEventListener("dispose",m));const E=p.program;i.updateUBOMapping(v,E);const C=e.render.frame;o[v.id]!==C&&(h(v),o[v.id]=C)}function d(v){const p=f();v.__bindingPointIndex=p;const x=t.createBuffer(),E=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,E,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,x),x}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const p=r[v.id],x=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let C=0,b=x.length;C<b;C++){const D=x[C];if(g(D,C,E)===!0){const M=D.__offset,w=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let $=0;$<w.length;$++){const W=w[$],R=y(W);typeof W=="number"?(D.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,M+q,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=W.elements[0],D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=W.elements[0],D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=W.elements[0]):(W.toArray(D.__data,q),q+=R.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,D.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,p,x){const E=v.value;if(x[p]===void 0){if(typeof E=="number")x[p]=E;else{const C=Array.isArray(E)?E:[E],b=[];for(let D=0;D<C.length;D++)b.push(C[D].clone());x[p]=b}return!0}else if(typeof E=="number"){if(x[p]!==E)return x[p]=E,!0}else{const C=Array.isArray(x[p])?x[p]:[x[p]],b=Array.isArray(E)?E:[E];for(let D=0;D<C.length;D++){const M=C[D];if(M.equals(b[D])===!1)return M.copy(b[D]),!0}}return!1}function _(v){const p=v.uniforms;let x=0;const E=16;let C=0;for(let b=0,D=p.length;b<D;b++){const M=p[b],w={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let $=0,W=q.length;$<W;$++){const R=q[$],B=y(R);w.boundary+=B.boundary,w.storage+=B.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,b>0){C=x%E;const $=E-C;C!==0&&$-w.boundary<0&&(x+=E-C,M.__offset=x)}x+=w.storage}return C=x%E,C>0&&(x+=E-C),v.__size=x,v.__cache={},this}function y(v){const p={boundary:0,storage:0};return typeof v=="number"?(p.boundary=4,p.storage=4):v.isVector2?(p.boundary=8,p.storage=8):v.isVector3||v.isColor?(p.boundary=16,p.storage=12):v.isVector4?(p.boundary=16,p.storage=16):v.isMatrix3?(p.boundary=48,p.storage=48):v.isMatrix4?(p.boundary=64,p.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),p}function m(v){const p=v.target;p.removeEventListener("dispose",m);const x=s.indexOf(p.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete o[p.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class wv{constructor(e={}){const{canvas:n=sx(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const p=this;let x=!1,E=0,C=0,b=null,D=-1,M=null;const w=new it,q=new it;let $=null;const W=new Ge(0);let R=0,B=n.width,K=n.height,Y=1,O=null,V=null;const z=new it(0,0,B,K),L=new it(0,0,B,K);let F=!1;const se=new Gd;let le=!1,he=!1,ve=null;const Le=new yt,be=new We,De=new I,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return b===null?Y:1}let k=i;function on(T,U){for(let G=0;G<T.length;G++){const X=T[G],j=n.getContext(X,U);if(j!==null)return j}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ce,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),k=on(U,T),k===null)throw on(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let _e,Ce,we,ct,Oe,Fe,Ke,Tt,Nt,A,S,H,te,J,ne,me,oe,ue,Me,Xe,ee,qe,Ae,Ee;function ye(){_e=new _E(k),Ce=new fE(k,_e,e),_e.init(Ce),qe=new nT(k,_e,Ce),we=new eT(k,_e,Ce),ct=new SE(k),Oe=new B1,Fe=new tT(k,_e,we,Oe,Ce,qe,ct),Ke=new pE(p),Tt=new vE(p),Nt=new Lx(k,Ce),Ae=new uE(k,_e,Nt,Ce),A=new yE(k,Nt,ct,Ae),S=new wE(k,A,Nt,ct),Me=new TE(k,Ce,Fe),me=new hE(Oe),H=new z1(p,Ke,Tt,_e,Ce,Ae,me),te=new aT(p,Oe),J=new G1,ne=new q1(_e,Ce),ue=new cE(p,Ke,Tt,we,S,h,l),oe=new J1(p,S,Ce),Ee=new lT(k,ct,Ce,we),Xe=new dE(k,_e,ct,Ce),ee=new xE(k,_e,ct,Ce),ct.programs=H.programs,p.capabilities=Ce,p.extensions=_e,p.properties=Oe,p.renderLists=J,p.shadowMap=oe,p.state=we,p.info=ct}ye();const pe=new sT(p,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=_e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(B,K,!1))},this.getSize=function(T){return T.set(B,K)},this.setSize=function(T,U,G=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,K=U,n.width=Math.floor(T*Y),n.height=Math.floor(U*Y),G===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(T,U,G){B=T,K=U,Y=G,n.width=Math.floor(T*G),n.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,U,G,X){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,U,G,X),we.viewport(w.copy(z).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(L)},this.setScissor=function(T,U,G,X){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,U,G,X),we.scissor(q.copy(L).multiplyScalar(Y).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){we.setScissorTest(F=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(T=!0,U=!0,G=!0){let X=0;if(T){let j=!1;if(b!==null){const de=b.texture.format;j=de===rv||de===iv||de===nv}if(j){const de=b.texture.type,ge=de===Gi||de===Pi||de===kd||de===fr||de===ev||de===tv,Se=ue.getClearColor(),Te=ue.getClearAlpha(),Ie=Se.r,Re=Se.g,Pe=Se.b;ge?(g[0]=Ie,g[1]=Re,g[2]=Pe,g[3]=Te,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=Ie,_[1]=Re,_[2]=Pe,_[3]=Te,k.clearBufferiv(k.COLOR,0,_))}else X|=k.COLOR_BUFFER_BIT}U&&(X|=k.DEPTH_BUFFER_BIT),G&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ne.dispose(),Oe.dispose(),Ke.dispose(),Tt.dispose(),S.dispose(),Ae.dispose(),Ee.dispose(),H.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",yn),pe.removeEventListener("sessionend",Ze),ve&&(ve.dispose(),ve=null),Ht.stop()};function He(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=ct.autoReset,U=oe.enabled,G=oe.autoUpdate,X=oe.needsUpdate,j=oe.type;ye(),ct.autoReset=T,oe.enabled=U,oe.autoUpdate=G,oe.needsUpdate=X,oe.type=j}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const U=T.target;U.removeEventListener("dispose",ie),Z(U)}function Z(T){re(T),Oe.remove(T)}function re(T){const U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(G){H.releaseProgram(G)}),T.isShaderMaterial&&H.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,X,j,de){U===null&&(U=lt);const ge=j.isMesh&&j.matrixWorld.determinant()<0,Se=Rv(T,U,G,X,j);we.setMaterial(X,ge);let Te=G.index,Ie=1;if(X.wireframe===!0){if(Te=A.getWireframeAttribute(G),Te===void 0)return;Ie=2}const Re=G.drawRange,Pe=G.attributes.position;let ht=Re.start*Ie,sn=(Re.start+Re.count)*Ie;de!==null&&(ht=Math.max(ht,de.start*Ie),sn=Math.min(sn,(de.start+de.count)*Ie)),Te!==null?(ht=Math.max(ht,0),sn=Math.min(sn,Te.count)):Pe!=null&&(ht=Math.max(ht,0),sn=Math.min(sn,Pe.count));const wt=sn-ht;if(wt<0||wt===1/0)return;Ae.setup(j,X,Se,G,Te);let Zn,ut=Xe;if(Te!==null&&(Zn=Nt.get(Te),ut=ee,ut.setIndex(Zn)),j.isMesh)X.wireframe===!0?(we.setLineWidth(X.wireframeLinewidth*Ue()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(j.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),we.setLineWidth(Be*Ue()),j.isLineSegments?ut.setMode(k.LINES):j.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else j.isPoints?ut.setMode(k.POINTS):j.isSprite&&ut.setMode(k.TRIANGLES);if(j.isInstancedMesh)ut.renderInstances(ht,wt,j.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pl=Math.min(G.instanceCount,Be);ut.renderInstances(ht,wt,Pl)}else ut.render(ht,wt)};function xe(T,U,G){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Os(T,U,G),T.side=Xi,T.needsUpdate=!0,Os(T,U,G),T.side=si):Os(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),m=ne.get(G),m.init(),v.push(m),G.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),T!==G&&T.traverseVisible(function(j){j.isLight&&j.layers.test(U.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(p._useLegacyLights);const X=new Set;return T.traverse(function(j){const de=j.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){const Se=de[ge];xe(Se,G,j),X.add(Se)}else xe(de,G,j),X.add(de)}),v.pop(),m=null,X},this.compileAsync=function(T,U,G=null){const X=this.compile(T,U,G);return new Promise(j=>{function de(){if(X.forEach(function(ge){Oe.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){j(T);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let je=null;function mt(T){je&&je(T)}function yn(){Ht.stop()}function Ze(){Ht.start()}const Ht=new yv;Ht.setAnimationLoop(mt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(T){je=T,pe.setAnimationLoop(T),T===null?Ht.stop():Ht.start()},pe.addEventListener("sessionstart",yn),pe.addEventListener("sessionend",Ze),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(U),U=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,U,b),m=ne.get(T,v.length),m.init(),v.push(m),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(Le),he=this.localClippingEnabled,le=me.init(this.clippingPlanes,he),y=J.get(T,u.length),y.init(),u.push(y),Gn(T,U,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(O,V),this.info.render.frame++,le===!0&&me.beginShadows();const G=m.state.shadowsArray;if(oe.render(G,T,U),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(y,T),m.setupLights(p._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let j=0,de=X.length;j<de;j++){const ge=X[j];$d(y,T,ge,ge.viewport)}}else $d(y,T,U);b!==null&&(Fe.updateMultisampleRenderTarget(b),Fe.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(p,T,U),Ae.resetDefaultState(),D=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Gn(T,U,G,X){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){X&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const ge=S.update(T),Se=T.material;Se.visible&&y.push(T,ge,Se,G,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const ge=S.update(T),Se=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),De.copy(ge.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Se)){const Te=ge.groups;for(let Ie=0,Re=Te.length;Ie<Re;Ie++){const Pe=Te[Ie],ht=Se[Pe.materialIndex];ht&&ht.visible&&y.push(T,ge,ht,G,De.z,Pe)}}else Se.visible&&y.push(T,ge,Se,G,De.z,null)}}const de=T.children;for(let ge=0,Se=de.length;ge<Se;ge++)Gn(de[ge],U,G,X)}function $d(T,U,G,X){const j=T.opaque,de=T.transmissive,ge=T.transparent;m.setupLightsView(G),le===!0&&me.setGlobalState(p.clippingPlanes,G),de.length>0&&Av(j,de,U,G),X&&we.viewport(w.copy(X)),j.length>0&&Us(j,U,G),de.length>0&&Us(de,U,G),ge.length>0&&Us(ge,U,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Av(T,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const de=Ce.isWebGL2;ve===null&&(ve=new xr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ws:Gi,minFilter:Ts,samples:de?4:0})),p.getDrawingBufferSize(be),de?ve.setSize(be.x,be.y):ve.setSize(zu(be.x),zu(be.y));const ge=p.getRenderTarget();p.setRenderTarget(ve),p.getClearColor(W),R=p.getClearAlpha(),R<1&&p.setClearColor(16777215,.5),p.clear();const Se=p.toneMapping;p.toneMapping=Hi,Us(T,G,X),Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve);let Te=!1;for(let Ie=0,Re=U.length;Ie<Re;Ie++){const Pe=U[Ie],ht=Pe.object,sn=Pe.geometry,wt=Pe.material,Zn=Pe.group;if(wt.side===si&&ht.layers.test(X.layers)){const ut=wt.side;wt.side=rn,wt.needsUpdate=!0,Kd(ht,G,X,sn,wt,Zn),wt.side=ut,wt.needsUpdate=!0,Te=!0}}Te===!0&&(Fe.updateMultisampleRenderTarget(ve),Fe.updateRenderTargetMipmap(ve)),p.setRenderTarget(ge),p.setClearColor(W,R),p.toneMapping=Se}function Us(T,U,G){const X=U.isScene===!0?U.overrideMaterial:null;for(let j=0,de=T.length;j<de;j++){const ge=T[j],Se=ge.object,Te=ge.geometry,Ie=X===null?ge.material:X,Re=ge.group;Se.layers.test(G.layers)&&Kd(Se,U,G,Te,Ie,Re)}}function Kd(T,U,G,X,j,de){T.onBeforeRender(p,U,G,X,j,de),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(p,U,G,X,T,de),j.transparent===!0&&j.side===si&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,p.renderBufferDirect(G,U,X,j,T,de),j.side=Xi,j.needsUpdate=!0,p.renderBufferDirect(G,U,X,j,T,de),j.side=si):p.renderBufferDirect(G,U,X,j,T,de),T.onAfterRender(p,U,G,X,j,de)}function Os(T,U,G){U.isScene!==!0&&(U=lt);const X=Oe.get(T),j=m.state.lights,de=m.state.shadowsArray,ge=j.state.version,Se=H.getParameters(T,j.state,de,U,G),Te=H.getProgramCacheKey(Se);let Ie=X.programs;X.environment=T.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(T.isMeshStandardMaterial?Tt:Ke).get(T.envMap||X.environment),Ie===void 0&&(T.addEventListener("dispose",ie),Ie=new Map,X.programs=Ie);let Re=Ie.get(Te);if(Re!==void 0){if(X.currentProgram===Re&&X.lightsStateVersion===ge)return Qd(T,Se),Re}else Se.uniforms=H.getUniforms(T),T.onBuild(G,Se,p),T.onBeforeCompile(Se,p),Re=H.acquireProgram(Se,Te),Ie.set(Te,Re),X.uniforms=Se.uniforms;const Pe=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=me.uniform),Qd(T,Se),X.needsLights=Lv(T),X.lightsStateVersion=ge,X.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=Re,X.uniformsList=null,Re}function Zd(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ia.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Qd(T,U){const G=Oe.get(T);G.outputColorSpace=U.outputColorSpace,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Rv(T,U,G,X,j){U.isScene!==!0&&(U=lt),Fe.resetTextureUnits();const de=U.fog,ge=X.isMeshStandardMaterial?U.environment:null,Se=b===null?p.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:mi,Te=(X.isMeshStandardMaterial?Tt:Ke).get(X.envMap||ge),Ie=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Re=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!G.morphAttributes.position,ht=!!G.morphAttributes.normal,sn=!!G.morphAttributes.color;let wt=Hi;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(wt=p.toneMapping);const Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=Zn!==void 0?Zn.length:0,Be=Oe.get(X),Pl=m.state.lights;if(le===!0&&(he===!0||T!==M)){const an=T===M&&X.id===D;me.setState(X,T,an)}let gt=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Pl.state.version||Be.outputColorSpace!==Se||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||Be.envMap!==Te||X.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==me.numPlanes||Be.numIntersection!==me.numIntersection)||Be.vertexAlphas!==Ie||Be.vertexTangents!==Re||Be.morphTargets!==Pe||Be.morphNormals!==ht||Be.morphColors!==sn||Be.toneMapping!==wt||Ce.isWebGL2===!0&&Be.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,Be.__version=X.version);let $i=Be.currentProgram;gt===!0&&($i=Os(X,U,j));let Jd=!1,Po=!1,Ll=!1;const Gt=$i.getUniforms(),Ki=Be.uniforms;if(we.useProgram($i.program)&&(Jd=!0,Po=!0,Ll=!0),X.id!==D&&(D=X.id,Po=!0),Jd||M!==T){Gt.setValue(k,"projectionMatrix",T.projectionMatrix),Gt.setValue(k,"viewMatrix",T.matrixWorldInverse);const an=Gt.map.cameraPosition;an!==void 0&&an.setValue(k,De.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&Gt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Gt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Po=!0,Ll=!0)}if(j.isSkinnedMesh){Gt.setOptional(k,j,"bindMatrix"),Gt.setOptional(k,j,"bindMatrixInverse");const an=j.skeleton;an&&(Ce.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Gt.setValue(k,"boneTexture",an.boneTexture,Fe),Gt.setValue(k,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Dl=G.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0&&Ce.isWebGL2===!0)&&Me.update(j,G,$i),(Po||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Gt.setValue(k,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ki.envMap.value=Te,Ki.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Po&&(Gt.setValue(k,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&Pv(Ki,Ll),de&&X.fog===!0&&te.refreshFogUniforms(Ki,de),te.refreshMaterialUniforms(Ki,X,Y,K,ve),Ia.upload(k,Zd(Be),Ki,Fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ia.upload(k,Zd(Be),Ki,Fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Gt.setValue(k,"center",j.center),Gt.setValue(k,"modelViewMatrix",j.modelViewMatrix),Gt.setValue(k,"normalMatrix",j.normalMatrix),Gt.setValue(k,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let Nl=0,Dv=an.length;Nl<Dv;Nl++)if(Ce.isWebGL2){const ef=an[Nl];Ee.update(ef,$i),Ee.bind(ef,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Pv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Lv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,G){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=G;const X=Oe.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const G=Oe.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){b=T,E=U,C=G;let X=!0,j=null,de=!1,ge=!1;if(T){const Te=Oe.get(T);Te.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(k.FRAMEBUFFER,null),X=!1):Te.__webglFramebuffer===void 0?Fe.setupRenderTarget(T):Te.__hasExternalTextures&&Fe.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ge=!0);const Re=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?j=Re[U][G]:j=Re[U],de=!0):Ce.isWebGL2&&T.samples>0&&Fe.useMultisampledRTT(T)===!1?j=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?j=Re[G]:j=Re,w.copy(T.viewport),q.copy(T.scissor),$=T.scissorTest}else w.copy(z).multiplyScalar(Y).floor(),q.copy(L).multiplyScalar(Y).floor(),$=F;if(we.bindFramebuffer(k.FRAMEBUFFER,j)&&Ce.drawBuffers&&X&&we.drawBuffers(T,j),we.viewport(w),we.scissor(q),we.setScissorTest($),de){const Te=Oe.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,G)}else if(ge){const Te=Oe.get(T.texture),Ie=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,Ie)}D=-1},this.readRenderTargetPixels=function(T,U,G,X,j,de,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){we.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Te=T.texture,Ie=Te.format,Re=Te.type;if(Ie!==kn&&qe.convert(Ie)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Re===ws&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==Gi&&qe.convert(Re)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Li&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-X&&G>=0&&G<=T.height-j&&k.readPixels(U,G,X,j,qe.convert(Ie),qe.convert(Re),de)}finally{const Te=b!==null?Oe.get(b).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,U,G=0){const X=Math.pow(2,-G),j=Math.floor(U.image.width*X),de=Math.floor(U.image.height*X);Fe.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,T.x,T.y,j,de),we.unbindTexture()},this.copyTextureToTexture=function(T,U,G,X=0){const j=U.image.width,de=U.image.height,ge=qe.convert(G.format),Se=qe.convert(G.type);Fe.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,T.x,T.y,j,de,ge,Se,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ge,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,X,T.x,T.y,ge,Se,U.image),X===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G,X,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=T.max.x-T.min.x+1,ge=T.max.y-T.min.y+1,Se=T.max.z-T.min.z+1,Te=qe.convert(X.format),Ie=qe.convert(X.type);let Re;if(X.isData3DTexture)Fe.setTexture3D(X,0),Re=k.TEXTURE_3D;else if(X.isDataArrayTexture)Fe.setTexture2DArray(X,0),Re=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment);const Pe=k.getParameter(k.UNPACK_ROW_LENGTH),ht=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sn=k.getParameter(k.UNPACK_SKIP_PIXELS),wt=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=G.isCompressedTexture?G.mipmaps[0]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Re,j,U.x,U.y,U.z,de,ge,Se,Te,Ie,ut.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Re,j,U.x,U.y,U.z,de,ge,Se,Te,ut.data)):k.texSubImage3D(Re,j,U.x,U.y,U.z,de,ge,Se,Te,Ie,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),j===0&&X.generateMipmaps&&k.generateMipmap(Re),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){E=0,C=0,b=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Al?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?pr:ov}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pr?Pt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cT extends wv{}cT.prototype.isWebGL1Renderer=!0;class uT extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Xd extends vi{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),o=Math.floor(o);const d=[],f=[],h=[],g=[];let _=0;const y=[],m=i/2;let u=0;v(),s===!1&&(e>0&&p(!0),n>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(g,2));function v(){const x=new I,E=new I;let C=0;const b=(n-e)/i;for(let D=0;D<=o;D++){const M=[],w=D/o,q=w*(n-e)+e;for(let $=0;$<=r;$++){const W=$/r,R=W*l+a,B=Math.sin(R),K=Math.cos(R);E.x=q*B,E.y=-w*i+m,E.z=q*K,f.push(E.x,E.y,E.z),x.set(B,b,K).normalize(),h.push(x.x,x.y,x.z),g.push(W,1-w),M.push(_++)}y.push(M)}for(let D=0;D<r;D++)for(let M=0;M<o;M++){const w=y[M][D],q=y[M+1][D],$=y[M+1][D+1],W=y[M][D+1];d.push(w,q,W),d.push(q,$,W),C+=6}c.addGroup(u,C,0),u+=C}function p(x){const E=_,C=new We,b=new I;let D=0;const M=x===!0?e:n,w=x===!0?1:-1;for(let $=1;$<=r;$++)f.push(0,m*w,0),h.push(0,w,0),g.push(.5,.5),_++;const q=_;for(let $=0;$<=r;$++){const R=$/r*l+a,B=Math.cos(R),K=Math.sin(R);b.x=M*K,b.y=m*w,b.z=M*B,f.push(b.x,b.y,b.z),h.push(0,w,0),C.x=B*.5+.5,C.y=K*.5*w+.5,g.push(C.x,C.y),_++}for(let $=0;$<r;$++){const W=E+$,R=q+$;x===!0?d.push(R,R+1,W):d.push(R+1,R,W),D+=3}c.addGroup(u,D,x===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jd extends vi{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const d=[],f=new I,h=new I,g=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],p=u/i;let x=0;u===0&&s===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let E=0;E<=n;E++){const C=E/n;f.x=-e*Math.cos(r+C*o)*Math.sin(s+p*a),f.y=e*Math.cos(s+p*a),f.z=e*Math.sin(r+C*o)*Math.sin(s+p*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(C+x,1-p),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const p=d[u][v+1],x=d[u][v],E=d[u+1][v],C=d[u+1][v+1];(u!==0||s>0)&&g.push(p,x,C),(u!==i-1||l<Math.PI)&&g.push(x,E,C)}this.setIndex(g),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lp extends Ns{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yd extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Fc=new yt,Dp=new I,Np=new I;class bv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dp),Np.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Np),n.updateMatrixWorld(),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ip=new yt,Wo=new I,kc=new I;class dT extends bv{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),kc.copy(i.position),kc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kc),i.updateMatrixWorld(),r.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Ip.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ip)}}class fT extends Yd{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hT extends bv{constructor(){super(new xv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Up extends Yd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pT extends Yd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mT{constructor(e,n,i=0,r=1/0){this.ray=new dv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Hu(e,this,i,n),i.sort(Op),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Hu(e[r],this,i,n);return i.sort(Op),i}}function Op(t,e){return t.distance-e.distance}function Hu(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Hu(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);const gT=`
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#060d1a;color:#ccd9ee;font-family:'DM Sans',sans-serif;min-height:100vh}
.pp{background:#060d1a;min-height:100vh}
.syne{font-family:'Syne',sans-serif}
.mono{font-family:'JetBrains Mono',monospace}
.card{background:rgba(8,18,40,0.9);border:1px solid rgba(56,189,248,0.13);border-radius:14px;transition:all .25s ease}
.card:hover{border-color:rgba(56,189,248,0.35);transform:translateY(-2px);box-shadow:0 8px 32px rgba(56,189,248,0.08)}
.btn{border:1px solid rgba(56,189,248,0.35);background:transparent;color:#38bdf8;border-radius:8px;padding:8px 18px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;transition:all .2s}
.btn:hover{background:rgba(56,189,248,0.1);border-color:rgba(56,189,248,0.6)}
.btn-solid{background:rgba(56,189,248,0.15);border:1px solid rgba(56,189,248,0.4);color:#38bdf8;border-radius:8px;padding:10px 22px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;transition:all .2s}
.btn-solid:hover{background:rgba(56,189,248,0.28)}
.btn-active{background:rgba(56,189,248,0.2);border:1px solid #38bdf8;color:#e0f2ff}
.panel{background:rgba(4,11,28,0.96);border:1px solid rgba(56,189,248,0.15);border-radius:14px;padding:20px}
.tag{display:inline-block;border-radius:20px;padding:3px 10px;font-size:11px;font-weight:600;margin:2px}
.glow{box-shadow:0 0 24px rgba(56,189,248,0.18)}
.depth-bar{display:flex;background:rgba(4,10,24,0.9);border:1px solid rgba(56,189,248,0.2);border-radius:8px;padding:3px;gap:3px}
.depth-btn{border:none;background:transparent;color:#4a6a80;border-radius:6px;padding:5px 14px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;letter-spacing:.04em}
.depth-btn.on{background:rgba(56,189,248,0.2);color:#38bdf8}
.pgx-banner{background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(234,88,12,0.12));border:1px solid rgba(251,191,36,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.pgx-banner-blk{background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.12));border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:16px 20px;margin:16px 0}
.step-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:5px}
.atom-popup{position:absolute;background:rgba(4,11,28,0.97);border:1px solid rgba(56,189,248,0.4);border-radius:12px;padding:16px;pointer-events:none;max-width:260px;z-index:10;box-shadow:0 8px 32px rgba(0,0,0,0.6)}
.designer-slot{border:2px dashed rgba(56,189,248,0.25);border-radius:12px;min-height:200px;display:flex;align-items:center;justify-content:center;transition:all .2s}
.designer-slot.over{border-color:rgba(56,189,248,0.7);background:rgba(56,189,248,0.05)}
.elem-chip{display:inline-flex;align-items:center;gap:6px;border-radius:8px;padding:6px 12px;cursor:grab;font-size:13px;font-weight:600;border:1px solid rgba(255,255,255,0.15);transition:all .2s;user-select:none}
.elem-chip:hover{transform:scale(1.06)}
.elem-chip:active{cursor:grabbing}
.scroll{scrollbar-width:thin;scrollbar-color:rgba(56,189,248,0.2) transparent}
@keyframes fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
.fadein{animation:fadein .3s ease forwards}
@keyframes pulse{0%,100%{opacity:.7}50%{opacity:1}}
.pulse{animation:pulse 2s ease infinite}
.thinking-dot{display:inline-block;width:6px;height:6px;border-radius:50%;background:#38bdf8;margin:0 2px;animation:pulse 1.2s ease infinite}
.thinking-dot:nth-child(2){animation-delay:.2s}
.thinking-dot:nth-child(3){animation-delay:.4s}
`,Fp={C:{hex:5592422,css:"#667",r:.36},H:{hex:14540253,css:"#ccc",r:.18},N:{hex:4491519,css:"#4af",r:.34},O:{hex:16729156,css:"#f55",r:.32},F:{hex:4513092,css:"#4d4",r:.27},Cl:{hex:2276130,css:"#2b2",r:.4},S:{hex:14535714,css:"#dc2",r:.44},P:{hex:16746530,css:"#f82",r:.4},I:{hex:11158732,css:"#a4c",r:.5},_:{hex:8947848,css:"#888",r:.36}},qd=t=>Fp[t]||Fp._;class Ro{constructor(){this.atoms=[],this.bonds=[]}add(e,n,i,r,o={}){const s=this.atoms.length;return this.atoms.push({id:s,element:e,x:n,y:i,z:r,role:"—",desc:"—",...o}),s}bond(e,n){return this.bonds.push([e,n]),this}ring(e,n,i,r,o,s,a=[],l=-Math.PI/2){const c=[];for(let d=0;d<r;d++){const f=l+d*2*Math.PI/r,h=s[d%s.length];c.push(this.add(h,e+o*Math.cos(f),n+o*Math.sin(f),i,a[d]||{}))}for(let d=0;d<r;d++)this.bond(c[d],c[(d+1)%r]);return c}build(){return{atoms:this.atoms,bonds:this.bonds}}}const ft={};ft.amoxicillin=(()=>{const t=new Ro,e=t.ring(-3.2,0,0,6,1.35,"C",[{role:"Phenyl C1",desc:"Attachment point for the aminobenzyl side chain linking to the β-lactam amide group."},{role:"Phenyl C2",desc:"Ortho carbon contributing to π-stacking interactions with PBP2a active site residues."},{role:"Phenyl C3",desc:"Meta position—unsubstituted in amoxicillin. Substitution here significantly increases molecular weight and may impair oral absorption."},{role:"Para-amino C4",desc:"Carries the defining -NH₂ group that distinguishes amoxicillin from ampicillin. This para-amino group boosts gram-negative coverage and raises oral bioavailability to ~90% by enhancing outer membrane penetration."},{role:"Phenyl C5",desc:"Meta carbon. Unsubstituted in amoxicillin."},{role:"Phenyl C6",desc:"Ortho carbon. Unsubstituted in amoxicillin."}]),n=t.add("N",-3.2,-2.8,0,{role:"Para-amino group (-NH₂)",desc:"The defining amine at the para position. Protonated at physiological pH, aiding outer-membrane penetration of gram-negative bacteria. This group is responsible for activity against Haemophilus influenzae and Helicobacter pylori."});t.bond(e[3],n);const i=t.add("C",-1.4,0,0,{role:"α-Carbon (R-chiral center)",desc:"The R-configuration is absolutely essential—the S-enantiomer has >1,000-fold lower PBP affinity. Stereospecific synthesis is required for clinical activity."});t.bond(e[0],i);const r=t.add("N",0,.9,0,{role:"Amide N-H",desc:"Mimics the D-Ala-D-Ala peptide bond recognized by penicillin-binding proteins (PBPs). The NH hydrogen bonds with conserved Ser/Thr in the PBP active site, orienting the β-lactam for covalent acylation."}),o=t.add("C",1.2,0,0,{role:"Acyl side-chain carbonyl C",desc:"C=O of the acyl group. Together with the N-H, forms the pharmacophoric amide that guides the β-lactam into the PBP active site for irreversible Ser-acylation."}),s=t.add("O",1.2,-1.3,0,{role:"Acyl carbonyl O",desc:"Hydrogen bond acceptor to Thr in PBP active site during initial non-covalent recognition."});t.bond(r,o),t.bond(o,s),t.bond(i,r);const a=t.ring(2.7,.2,0,4,.9,"CNCC",[{role:"β-Lactam C7 (acyl electrophile)",desc:"Covalently acylates the active-site serine (Ser70) of PBPs—an irreversible bond that halts transpeptidation, preventing cell wall crosslinking and causing bacterial lysis."},{role:"β-Lactam N4 (strained)",desc:"Strained ring nitrogen with ~26 kcal/mol ring strain. Reduced amide resonance makes the C=O ~1,000× more electrophilic than a normal amide—the key to antibacterial activity."},{role:"β-Lactam C5 (penam junction)",desc:"Junction carbon where the β-lactam ring fuses with the thiazolidine ring, forming the rigid bicyclic penam scaffold essential for geometric recognition by PBPs."},{role:"β-Lactam C6 (6α-H position)",desc:"The 6α-H configuration confers susceptibility to class A β-lactamases (e.g., TEM-1). Steric modifications at this position (methicillin's 2,6-dimethoxy) can shield from β-lactamase attack."}]);t.bond(o,a[3]);const l=t.ring(4.5,.2,0,5,1.1,"CSCNC",[{role:"Thiazolidine C2 (gem-dimethyl bearing)",desc:"Bears two methyl groups that protect the ring from hydrolytic ring-opening and contribute steric bulk to the rigid penam scaffold."},{role:"Thiazolidine S (sulfur)",desc:"Metabolically oxidized to an inactive sulfoxide in some patients. The sulfur atom participates in ring conformational dynamics that affect PBP affinity and β-lactamase recognition."},{role:"Thiazolidine C4",desc:"Quaternary carbon bearing gem-dimethyl groups."},{role:"Thiazolidine C5 (COOH-bearing)",desc:"Bears the 3-carboxylate group essential for ionic interaction with conserved Lys/Arg at the PBP active-site entrance."},{role:"N1 (bicyclic fusion N)",desc:"Ring-fusion nitrogen. N1 planarity disruption in the penam bicyclic system contributes to the high β-lactam electrophilicity critical for antibacterial activity."}]);t.bond(a[1],l[4]),t.bond(a[2],l[0]);const c=t.add("C",6,-.4,0,{role:"3-Carboxylate carbon",desc:"The COO⁻ (pKa ~2.7, fully ionized at pH 7.4) forms a salt bridge with conserved Lys/Arg in the PBP active-site channel. Neutral analogs lose >1,000-fold affinity."});return t.add("O",7,-.9,0,{role:"Carboxylate O1",desc:"Part of the resonance-stabilized anion essential for PBP binding. Esterification (prodrug approach) improves GI absorption, with in-vivo hydrolysis releasing the active acid."}),t.add("O",6,.8,0,{role:"Carboxylate O2",desc:"Second carboxylate oxygen. Drug absorbed via intestinal peptide transporter (PepT1) as the zwitterion."}),t.bond(l[3],c),t.bond(c,t.atoms.length-2),t.bond(c,t.atoms.length-1),t.build()})();ft.ciprofloxacin=(()=>{const t=new Ro,e=t.ring(-1,0,0,6,1.35,"C",Array(6).fill({role:"Quinolone benzene ring",desc:"Aromatic benzene ring of the fluoroquinolone scaffold."})),n=t.atoms.length;t.add("N",.8,1.1,0,{role:"N1 (cyclopropyl position)",desc:"N1-cyclopropyl is ciprofloxacin's signature. This group fits a hydrophobic pocket in the DNA gyrase gate domain, conferring superior gram-negative activity vs. N1-ethyl analogs (norfloxacin). Cyclopropyl's bent bond angle (~60°) enables unique non-covalent contacts."}),t.add("C",.8,-.3,0,{role:"C2",desc:"Structural bridge in the pyridone ring."}),t.add("C",-.1,-1.2,0,{role:"C3 (carboxylate-bearing)",desc:"Bears the essential COOH (pKa ~6.1) that chelates Mg²⁺ in the DNA gyrase/topoisomerase IV active site, forming the three-point metal-chelation pharmacophore."}),t.add("C",-1.3,-.6,0,{role:"C4 (4-keto C)",desc:"C4 ketone forms the Mg²⁺-chelating 1,3-diketone with C3-COOH. Without this pair, fluoroquinolones lose all antibacterial activity—it is the core pharmacophore."}),t.bond(n,n+1),t.bond(n+1,n+2),t.bond(n+2,n+3),t.bond(n+3,e[5]),t.bond(e[0],n);const i=t.add("C",-.1,-2.6,0,{role:"3-Carboxylate group",desc:"Chelates Mg²⁺ in topoisomerase. Resistance emerges via GyrA Ser83/Asp87 mutations that disrupt this chelation geometry. Esterification abolishes antibacterial activity entirely."});t.add("O",.9,-3.2,0,{role:"Carboxylate O1",desc:"Bidentate Mg²⁺ coordination in gyrase active site."}),t.add("O",-1.1,-3.2,0,{role:"Carboxylate O2",desc:"Second oxygen in Mg²⁺ chelation pharmacophore."}),t.bond(n+2,i),t.bond(i,t.atoms.length-2),t.bond(i,t.atoms.length-1),t.add("O",-2.5,-.6,0,{role:"C4-keto oxygen",desc:"Coordinates Mg²⁺ with C3-COOH. Fluoroquinolones are ineffective in Mg²⁺-depleted environments, directly confirming this mechanism."}),t.bond(n+3,t.atoms.length-1),t.add("F",-2.5,.7,0,{role:"C6-Fluoro (essential)",desc:"The 6-F boosts potency 10–100× vs. nalidixic acid, strengthens Mg²⁺ chelation, reduces P-gp efflux pump recognition, and improves CNS penetration. Present in ALL clinical fluoroquinolones."}),t.bond(e[4],t.atoms.length-1);const r=t.ring(-3.5,1.5,0,6,1.2,"CNCCNC",[{role:"Piperazine C2",desc:"Piperazine ring carbon."},{role:"Piperazine N3 (distal)",desc:"Protonated at pH 7.4 (pKa ~8.8), enabling electrostatic attraction to bacterial membranes and intracellular accumulation."},{role:"Piperazine C4",desc:""},{role:"Piperazine C5",desc:""},{role:"Piperazine N6 (proximal)",desc:"C7-piperazine reduces MIC against Enterobacteriaceae 4–8× compared to no substituent."},{role:"Piperazine C7",desc:""}]);t.bond(e[3],r[5]);const o=t.add("C",2.1,1.1,0,{role:"Cyclopropyl C1 (proximal)",desc:"Cyclopropyl carbon."});return t.add("C",2.8,.2,0,{role:"Cyclopropyl C2",desc:"The cyclopropyl ~60° C-C-C angle creates bent sp2.5 bonds enabling unusual contacts with DNA gyrase."}),t.add("C",2.8,2,0,{role:"Cyclopropyl C3",desc:"Third carbon completing the strained 3-membered ring."}),t.bond(n,o),t.bond(o,t.atoms.length-2),t.bond(t.atoms.length-2,t.atoms.length-1),t.bond(t.atoms.length-1,o),t.build()})();ft.atorvastatin=(()=>{const t=new Ro,e=t.ring(0,0,0,5,1.1,"CCNCC",[{role:"Pyrrole C2",desc:"Part of the central pyrrole scaffold unique to atorvastatin (synthetic statin) vs. fungal-derived statins."},{role:"Pyrrole C3 (carboxamide)",desc:"Bears the phenyl carboxamide occupying a hydrophobic groove in HMG-CoA reductase, contributing ~2 kcal/mol binding."},{role:"Pyrrole N1 (N-aryl)",desc:"N-para-fluorophenyl substitution differentiates atorvastatin from earlier statins and contributes to its long t½=14h."},{role:"Pyrrole C4 (isopropyl)",desc:"Bears isopropyl group recognized by hepatic OATP1B1/B3 transporters, conferring liver selectivity and reducing muscle toxicity risk."},{role:"Pyrrole C5 (side chain)",desc:"Attachment point for the pharmacophoric β,δ-dihydroxyheptanoic acid chain—the HMG-CoA transition state mimic."}]),n=t.ring(-2.3,1.6,0,6,1.35,"C",Array(6).fill({role:"para-Fluorophenyl ring",desc:"N-aryl phenyl interacting with a hydrophobic pocket at HMG-CoA reductase entrance."}));t.bond(e[2],n[0]),t.add("F",-2.3,4.1,0,{role:"Para-fluoro (atorvastatin's signature F)",desc:"Resists CYP-mediated ring oxidation (extends t½), fine-tunes C4 electron density, strengthens reductase binding (~8 nM IC₅₀). Atorvastatin is the most potent statin partly due to this F."}),t.bond(n[3],t.atoms.length-1);const i=[t.add("C",1.5,1.4,0,{role:"Side chain C1",desc:"Methylene linking pyrrole to the pharmacophoric dihydroxyheptanoic acid chain."}),t.add("C",2.8,2.1,0,{role:"δ-OH carbon (3R)",desc:"3R-hydroxyl mimics the tetrahedral transition state of HMG-CoA reduction. R-configuration is ~10× more potent than S."}),t.add("O",2.8,3.4,0,{role:"δ-Hydroxyl (3-OH)",desc:"Forms critical H-bonds with Lys735, Asp767, Glu559 in HMG-CoA reductase—the primary pharmacophoric interaction responsible for the 8 nM IC₅₀."}),t.add("C",4.1,1.4,0,{role:"Side chain C3",desc:"Methylene of pharmacophoric chain."}),t.add("C",5.4,2.1,0,{role:"β-OH carbon (5R)",desc:"5R-hydroxyl H-bonds with Ser684 and Lys691 in the reductase."}),t.add("O",5.4,3.4,0,{role:"β-Hydroxyl (5-OH)",desc:"Atorvastatin is marketed as the active open-acid calcium salt (unlike prodrug lactone statins like simvastatin/lovastatin)."}),t.add("C",6.7,1.4,0,{role:"Terminal carboxylate C",desc:"COO⁻ at pH 7.4, forming ionic bond with Lys705 in HMG-CoA reductase."}),t.add("O",7.8,1.9,0,{role:"Carboxylate O1",desc:"Anchors atorvastatin via Lys705 salt bridge."}),t.add("O",6.7,.1,0,{role:"Carboxylate O2",desc:"Second carboxylate oxygen."})];return t.bond(e[4],i[0]),t.bond(i[0],i[1]),t.bond(i[1],i[2]),t.bond(i[1],i[3]),t.bond(i[3],i[4]),t.bond(i[4],i[5]),t.bond(i[4],i[6]),t.bond(i[6],i[7]),t.bond(i[6],i[8]),t.build()})();ft.sertraline=(()=>{const t=new Ro,e=t.ring(-2,0,0,6,1.35,"C",[{role:"Naphthalene C1",desc:"Part of the 1,4-dichloronaphthalene ring system."},{role:"Naphthalene C2",desc:"Aromatic carbon."},{role:"C3 (1-Cl bearing)",desc:"Bears 1-Cl. The 1,4-dichloro pattern tunes SERT vs. DAT/NET selectivity ~50-fold."},{role:"C4 (ring junction)",desc:"Fused carbon maintaining planarity for SERT S1-site intercalation."},{role:"C5 (ring junction)",desc:"Fusion carbon—the bicyclic flat aromatic surface slots into the SERT transmembrane binding pocket."},{role:"Naphthalene C6",desc:"Aromatic C contributing to π–π stacking with Phe341/Phe335 in SERT."}]),n=t.ring(.4,0,0,6,1.35,"C",[{role:"C4a (attachment point)",desc:"Junction carbon; attachment point for the chain bearing the 1S,4S stereocenters."},{role:"C8",desc:"Aromatic carbon."},{role:"C9",desc:"Aromatic carbon."},{role:"C4' (4-Cl bearing)",desc:"Bears the 4-Cl. Provides steric fit in the SERT S1 pocket. Removal reduces affinity >50-fold."},{role:"C10",desc:"Aromatic carbon."},{role:"C8a (ring junction)",desc:"Ring-fusion carbon."}]);t.bond(e[3],n[0]),t.bond(e[4],n[5]),t.add("Cl",-3.8,-2.2,0,{role:"1-Chloro substituent",desc:"The 1,4-dichloro pair is essential. Removal of either Cl reduces SERT affinity >50-fold. Both Cl atoms increase metabolic stability by blocking CYP-mediated aromatic hydroxylation."}),t.bond(e[2],t.atoms.length-1),t.add("Cl",2.2,-2.2,0,{role:"4-Chloro substituent",desc:"Creates optimal steric/electronic profile for SERT vs. DAT/NET selectivity—reducing off-target effects. Together with 1-Cl, this is the key selectivity determinant."}),t.bond(n[3],t.atoms.length-1);const i=t.ring(2.1,1.8,0,5,1.1,"CCCCN",[{role:"Piperidine C1 (1S,4S)",desc:"Stereocenter. The 1S,4S isomer is ~100× more potent at SERT than other stereoisomers."},{role:"Piperidine C2",desc:""},{role:"Piperidine C3",desc:""},{role:"Piperidine C4",desc:""},{role:"Piperidine N (N-methyl)",desc:"Protonated at pH 7.4 (pKa ~9.5), forming ionic bond with Asp98 in the SERT binding site—the cationic-amine pharmacophore conserved across all monoamine transporter blockers."}]);return t.bond(n[0],i[0]),t.add("C",3.8,2.8,0,{role:"N-methyl group",desc:"N-demethylation by CYP2C19/CYP2D6 produces desmethylsertraline (~50% SERT activity). CYP2D6 ultrarapid metabolizers—more common in African Americans (~35% carry duplications)—may have reduced sertraline efficacy and require dose adjustment."}),t.bond(i[4],t.atoms.length-1),t.build()})();ft.metformin=(()=>{const t=new Ro,e=t.add("N",-3,0,0,{role:"Dimethylamino nitrogen",desc:"The N,N-dimethyl terminus distinguishes metformin from toxic biguanides (phenformin). The methyls reduce mitochondrial toxicity while preserving AMPK activation."});t.add("C",-3.5,1.2,0,{role:"N-methyl 1",desc:"Essential methyl group. The N,N-dimethyl terminus confers favorable safety vs. phenformin, which was withdrawn for lactic acidosis."}),t.add("C",-3.5,-1.2,0,{role:"N-methyl 2",desc:"Second methyl."}),t.bond(e,t.atoms.length-2),t.bond(e,t.atoms.length-1);const n=t.add("C",-1.8,0,0,{role:"Biguanide C1 (imino carbon)",desc:"Part of the resonance-delocalized biguanide system. The planar cationic structure accumulates ~1,000× in mitochondria, where it inhibits Complex I."});t.bond(e,n);const i=t.add("N",-.8,.9,0,{role:"Biguanide N2 (imino)",desc:"Resonance-stabilized imino nitrogen. At physiological pH (dominant monoprotonated form), OCT1/OCT2 transporter uptake into hepatocytes is the primary route to the site of action."}),r=t.add("N",-.8,-.9,0,{role:"Biguanide N3 (central bridge)",desc:"Central nitrogen of the biguanide. OCT1 genetic variants (SLC22A1 R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. ~20% of variability explained."});t.bond(n,i),t.bond(n,r);const o=t.add("C",.6,0,0,{role:"Biguanide C2",desc:"The two guanidinium units create a conjugated system. Mechanism: Metformin → mitochondria → inhibits Complex I → raises AMP/ATP ratio → activates AMPK → suppresses hepatic gluconeogenesis by ~30%."});return t.bond(i,o),t.bond(r,o),t.add("N",1.6,.9,0,{role:"Terminal amino (-NH₂)",desc:"Maintains H-bond donor capacity for mitochondrial membrane interaction. Also important for gut microbiome modulation and GLP-1 secretion—metformin's secondary mechanism."}),t.add("N",1.6,-.9,0,{role:"Terminal =NH",desc:"The =NH of the second guanidinium. Metformin is renally excreted unchanged (no hepatic metabolism) via OAT1/OAT3—dose adjustment required in CKD (eGFR <30 mL/min contraindicated)."}),t.bond(o,t.atoms.length-2),t.bond(o,t.atoms.length-1),t.build()})();const $t=(t,e=[])=>{const n=new Ro;let i=null;return t.forEach(([r,o,s,a,l,c,d])=>{const f=n.ring(r,o,s,a,l,c||"C",Array(a).fill({role:d||"Ring atom",desc:"Part of the pharmacophoric ring system."}));i!=null&&n.bond(i,f[0]),i=f[f.length-1]}),e.forEach(([r,o,s,a,l,c])=>{const d=n.add(r,o,s,a,{role:l||r,desc:c||"Functional group modulating pharmacological activity."});i!=null&&n.bond(i,d),i=d}),n.build()};ft.lisinopril=$t([[-2.5,0,0,6,1.35,"C","Phenyl ring"],[1.2,0,0,5,1.1,"CCNCC","Proline ring"]],[["N",3.5,0,0,"Lysyl ε-NH₂","Lysine side chain—unique to lisinopril vs. other ACE inhibitors."],["O",4.8,.6,0,"COOH O1","Carboxylate essential for Zn²⁺ chelation in ACE active site."],["O",4.8,-.6,0,"COOH O2","Second carboxylate oxygen."]]);ft.metoprolol=$t([[-2,0,0,6,1.35,"C","Phenyl ring (β1-selective)"]],[["O",0,0,0,"Phenoxy ether O","Para-oxy linker."],["C",1.5,.3,0,"Propanolamine chain","2-propanolamine chain."],["N",3,0,0,"Isopropylamine N","β1 blocker pharmacophore. CYP2D6 metabolized."],["C",4,.8,0,"Isopropyl C",""],["C",4,-.8,0,"Isopropyl C",""]]);ft.amlodipine=$t([[-2,0,0,6,1.35,"C","2-chlorophenyl"],[1.5,0,0,6,1.2,"CCNCCCC","Dihydropyridine (DHP) ring"]],[["Cl",-2,-2.7,0,"2-Chloro substituent","Ortho-Cl blocks CYP-mediated phenyl ring oxidation."],["N",1.5,2.5,0,"DHP nitrogen","Central N of the 1,4-dihydropyridine. DHP scaffold binds L-type Ca²⁺ channel inactivated state."]]);ft.warfarin=$t([[-3,0,0,6,1.35,"C","Phenyl ring"],[0,0,0,6,1.3,"CCOCCC","Coumarin core (4-hydroxycoumarin)"]],[["O",2,.5,0,"Lactone O","Benzopyranone O."],["C",3.5,0,0,"Acetonyl chain C","Side chain bearing R/S chiral center."],["O",4.5,-.5,0,"Ketone O","Ketone; the S-warfarin enantiomer is 3–5× more potent (CYP2C9 metabolized)."]]);ft.clopidogrel=$t([[-3,0,0,6,1.35,"C","4-chlorophenyl"],[0,0,0,5,1.1,"CSCNC","Thienopyridine ring"]],[["N",2.5,0,0,"Thienopyridine N","Required for CYP2C19 bioactivation to active thiol metabolite."],["O",3.5,.8,0,"Ester O","Methyl ester—prodrug."],["O",3.5,-.8,0,"Ester O2",""]]);ft.azithromycin=$t([[0,0,0,9,2.2,"CCOCCCNCC","15-membered azalide macrolide ring"]],[["O",3.5,.5,0,"Cladinose O","Cladinose neutral sugar; essential for ribosome binding."],["N",-3.5,.5,0,"Desosamine dimethylamino N","Protonated at physiological pH; ionic interaction with 23S rRNA A2058."]]);ft.doxycycline=$t([[-4,0,0,6,1.3,"C","Ring A"],[1.5,0,0,6,1.3,"C","Ring B"],[1,0,0,6,1.3,"C","Ring C"],[3.5,0,0,6,1.3,"C","Ring D"]],[["N",5.5,0,0,"Dimethylamino (C4)","Ribosome-binding amine."],["O",1,2,0,"C4a-OH","Phenolic OH essential for ribosome A-site binding."]]);ft.escitalopram=$t([[-2,0,0,6,1.35,"C","Phenyl ring"],[.5,0,0,6,1.35,"C","Isobenzofuran"],[3,.5,0,5,1.1,"CCCCN","Dimethylaminopropyl"]],[["F",.5,2.7,0,"4'-Fluoro","S-enantiomer only—R-citalopram antagonizes SERT allosterically, explaining why escitalopram > citalopram in potency."],["N",5.5,.5,0,"Dimethylamino N","Protonated N forms ionic bond with Asp98 in SERT."]]);ft.aripiprazole=$t([[-4,0,0,6,1.35,"C","Dichlorophenyl"],[0,0,0,6,1.3,"C","Piperazinyl linker"],[3,0,0,5,1.1,"CNCCC","Carbostyril core"]],[["Cl",-4,-2.7,0,"Cl (2,3-dichloro)","Cl substituent 1—SERT binding affinity."],["Cl",-5.4,-1.4,0,"Cl (2,3-dichloro)","Cl substituent 2—selectivity."]]);ft.gabapentin=$t([],[["C",-2,0,0,"Cyclohexyl C","Cyclohexyl ring C."],["C",-1,.8,0,"Cyclohexyl C",""],["C",0,.5,0,"Quaternary carbon","Quaternary C with amino and acetic acid arms—the key design feature for α2δ binding."],["C",1.5,0,0,"Acetic acid CH₂",""],["O",2.5,.8,0,"COO⁻ O1","Carboxylate O."],["O",2.5,-.8,0,"COO⁻ O2",""],["N",0,-1.5,0,"α-Amino group","Amino group mimicking GABA structurally but binding α2δ-1/2 Ca²⁺ channel subunits, not GABA_A or GABA_B."]]);ft.levothyroxine=$t([[-3,0,0,6,1.35,"C","Tyrosyl inner ring"]],[["I",-3,-2.8,0,"3-Iodo","Inner ring 3-iodo; DEIODINASE substrate for T3 activation."],["I",-4.5,-1.4,0,"5-Iodo","Inner ring 5-iodo; both inner ring iodines required for T4 activity."],["O",-1,0,0,"Diphenyl ether O","Ether linkage between inner and outer rings."],["C",2,0,0,"Outer phenyl C","Outer phenyl ring."],["I",2,-2.8,0,"3'-Iodo","Outer ring 3'-iodo."],["I",3.5,-1.4,0,"5'-Iodo","Outer ring 5'-iodo; levothyroxine = T4 (4 iodines)."]]);ft.levodopa=$t([[-2,0,0,6,1.35,"C","Catechol phenyl ring"]],[["O",-2,-2.7,0,"4-OH (para)","Para-hydroxyl."],["O",-3.4,-1.4,0,"3-OH (catechol)","Catechol 3-OH. COMT methylates this position—carbidopa blocks peripheral decarboxylation but COMT inhibitors (entacapone) extend levodopa t½ by blocking this."],["C",.5,0,0,"α-C chain",""],["N",1.8,.8,0,"α-Amino group","Substrate for DOPA decarboxylase (AADC). Carbidopa blocks peripheral AADC → more levodopa enters CNS."],["C",1.8,-.8,0,"COOH chain",""],["O",3,-.3,0,"COOH O","Terminal carboxylate."]]);ft.buprenorphine=$t([[-3,0,0,6,1.35,"C","Morphine core"],[0,0,0,6,1.3,"C","Ring B"],[2,0,0,5,1.1,"CNCCC","Piperidine ring"]],[["N",4,0,0,"Tertiary N (CYP3A4)","Metabolized by CYP3A4 primarily; CYP2D6 secondary."],["O",-3,-2.7,0,"3-OH (phenolic)","3-phenolic OH essential for μ-receptor binding. Partial agonism (ceiling effect) gives buprenorphine its safety profile for OUD treatment."],["O",1,1.5,0,"6-OH allylic","Allylic hydroxyl."],["C",-4,1.4,0,"t-Butyl (partial agonism)","The cyclopropylmethyl/t-butyl at N-17 confers partial μ-agonism and κ-antagonism—critical for its safety ceiling unlike full opioid agonists."]]);ft.metronidazole=$t([[0,0,0,5,1.1,"CNCNC","Imidazole ring"]],[["N",2.5,0,0,"Nitro N (C2-NO₂)","Nitro group reduced by bacterial ferredoxin/flavodoxin to reactive nitro radical—binds DNA and disrupts helix structure in anaerobes and protozoa."],["O",3.5,.8,0,"Nitro O1",""],["O",3.5,-.8,0,"Nitro O2",""],["C",-2,0,0,"Methyl (C4)","Methyl group at C4 required for anaerobic spectrum."],["O",-3,-.8,0,"Hydroxymethyl O","Hydroxymethyl at C2—glucuronidation site for urinary excretion."]]);ft.bidil=$t([[-1,0,0,6,1.35,"C","Phthalazine benzene"],[.5,0,0,4,.9,"NNCC","Pyridazine ring"]],[["N",2.1,-.2,0,"Hydrazino N-H","Metabolized to reactive intermediates including diazene that donate electrons for NO generation."],["N",3.2,-.2,0,"Terminal -NH₂","Reacts with pyridoxal phosphate (Vitamin B6)—explaining peripheral neuropathy risk; managed with B6 supplementation."]]);const vT=[{id:"atorvastatin",name:"Atorvastatin",brand:"Lipitor",cat:"cardiovascular",cls:"Statin",ind:"High LDL; cardiovascular risk reduction",mfr:"Pfizer",yr:1996,formula:"C₃₃H₃₅FN₂O₅",mw:"558.6 g/mol",pgx:!1,pgxNote:"",rank:"#1 most prescribed (peak)",color:"#ef4444"},{id:"lisinopril",name:"Lisinopril",brand:"Zestril / Prinivil",cat:"cardiovascular",cls:"ACE Inhibitor",ind:"Hypertension, heart failure, post-MI",mfr:"Multiple generics",yr:1987,formula:"C₂₁H₃₁N₃O₅",mw:"405.5 g/mol",pgx:!1,pgxNote:"",rank:"Top 5 most prescribed",color:"#ef4444"},{id:"metoprolol",name:"Metoprolol",brand:"Lopressor / Toprol-XL",cat:"cardiovascular",cls:"β1-Blocker",ind:"Hypertension, angina, heart failure",mfr:"Multiple generics",yr:1978,formula:"C₁₅H₂₅NO₃",mw:"267.4 g/mol",pgx:!0,pgxNote:"CYP2D6 poor metabolizers (more common in European ancestry, ~7%) show 5× higher plasma levels vs. extensive metabolizers. African Americans have a lower frequency of poor metabolizer status (~4%) but a higher frequency of ultrarapid metabolizers (~35% carry gene duplications)—potentially reducing drug exposure. Dose adjustment guided by CYP2D6 genotype is recommended by CPIC.",rank:"Top 10 most prescribed",color:"#ef4444"},{id:"amlodipine",name:"Amlodipine",brand:"Norvasc",cat:"cardiovascular",cls:"Calcium Channel Blocker",ind:"Hypertension, stable angina",mfr:"Pfizer / generics",yr:1992,formula:"C₂₀H₂₅ClN₂O₅",mw:"408.9 g/mol",pgx:!1,pgxNote:"",rank:"Top 3 most prescribed",color:"#ef4444"},{id:"warfarin",name:"Warfarin",brand:"Coumadin",cat:"cardiovascular",cls:"Vitamin K Antagonist",ind:"DVT/PE, atrial fibrillation, mechanical heart valves",mfr:"Multiple generics",yr:1954,formula:"C₁₉H₁₆O₄",mw:"308.3 g/mol",pgx:!0,pgxNote:"VKORC1 (-1639G>A) and CYP2C9*2/*3 are well-established dose-determining variants. Critically, African Americans have a higher frequency of CYP2C9 variants *5, *6, *8, *11—which cause greater dose reduction than *2/*3—yet are dramatically underrepresented in warfarin pharmacogenomics research. This leads to systematic overdosing and disproportionate bleeding risk in Black patients. FDA recommends PGx testing; CPIC provides race-aware dosing algorithms.",rank:"Classic anticoagulant (NTI drug)",color:"#ef4444"},{id:"bidil",name:"BiDil",brand:"BiDil",cat:"cardiovascular",cls:"Vasodilator Combination",ind:"Heart failure — Black patients (self-identified)",mfr:"NovaBay Pharmaceuticals",yr:2005,formula:"Combination",mw:"—",pgx:!0,pgxNote:"BiDil is the FIRST FDA drug approved with a race-specific indication. The A-HeFT trial (2004) enrolled only Black patients with heart failure and showed a 43% reduction in all-cause mortality and 33% reduction in first hospitalization. The biological basis: impaired NO bioavailability and heightened oxidative stress in heart failure may differ by genetic background—including ALDH2 activity and NOS polymorphisms—independently of self-identified race. BiDil is both landmark medicine and ongoing debate: race as biological proxy vs. social determinant of health.",rank:"First race-specific FDA drug approval",color:"#f97316"},{id:"clopidogrel",name:"Clopidogrel",brand:"Plavix",cat:"cardiovascular",cls:"P2Y12 Antiplatelet",ind:"ACS, coronary stent, stroke/TIA prevention",mfr:"Sanofi / BMS / generics",yr:1997,formula:"C₁₆H₁₆ClNO₂S",mw:"321.8 g/mol",pgx:!0,pgxNote:"CYP2C19 *2 and *3 loss-of-function alleles block bioactivation to the active thiol—creating 'clopidogrel non-responders' at risk of stent thrombosis. CYP2C19 *2 frequency: East Asian ~30%, African American ~17%, European ~15%. The FDA added a BLACK BOX WARNING in 2010. CPIC recommends prasugrel or ticagrelor for CYP2C19 poor metabolizers. Population stratification for antiplatelet selection is now standard of care in precision cardiology.",rank:"BLACK BOX WARNING for CYP2C19",color:"#ef4444"},{id:"amoxicillin",name:"Amoxicillin",brand:"Amoxil",cat:"antibiotic",cls:"Aminopenicillin (β-Lactam)",ind:"Respiratory, ear, skin, H. pylori infections",mfr:"Multiple generics",yr:1972,formula:"C₁₆H₁₉N₃O₅S",mw:"365.4 g/mol",pgx:!1,pgxNote:"",rank:"Most-prescribed antibiotic worldwide",color:"#22c55e"},{id:"azithromycin",name:"Azithromycin",brand:"Zithromax (Z-Pack)",cat:"antibiotic",cls:"Macrolide Antibiotic",ind:"CAP, STIs, atypical pathogens",mfr:"Pfizer / generics",yr:1988,formula:"C₃₈H₇₂N₂O₁₂",mw:"748.9 g/mol",pgx:!1,pgxNote:"",rank:"Top 5 prescribed antibiotics",color:"#22c55e"},{id:"ciprofloxacin",name:"Ciprofloxacin",brand:"Cipro",cat:"antibiotic",cls:"Fluoroquinolone",ind:"UTI, respiratory, GI, anthrax prophylaxis",mfr:"Bayer / generics",yr:1987,formula:"C₁₇H₁₈FN₃O₃",mw:"331.3 g/mol",pgx:!1,pgxNote:"",rank:"Most-dispensed fluoroquinolone",color:"#22c55e"},{id:"doxycycline",name:"Doxycycline",brand:"Vibramycin",cat:"antibiotic",cls:"Tetracycline",ind:"Malaria prophylaxis, Lyme, atypical pneumonia, acne",mfr:"Multiple generics",yr:1967,formula:"C₂₂H₂₄N₂O₈",mw:"444.4 g/mol",pgx:!1,pgxNote:"",rank:"WHO Essential Medicine",color:"#22c55e"},{id:"metronidazole",name:"Metronidazole",brand:"Flagyl",cat:"antibiotic",cls:"Nitroimidazole",ind:"Bacterial vaginosis, C. diff, amebiasis, Giardia",mfr:"Multiple generics",yr:1963,formula:"C₆H₉N₃O₃",mw:"171.2 g/mol",pgx:!1,pgxNote:"",rank:"WHO Essential Medicine",color:"#22c55e"},{id:"sertraline",name:"Sertraline",brand:"Zoloft",cat:"neuro",cls:"SSRI",ind:"Depression, OCD, PTSD, panic disorder",mfr:"Pfizer / generics",yr:1991,formula:"C₁₇H₁₇Cl₂N",mw:"306.2 g/mol",pgx:!0,pgxNote:"CYP2D6 poor metabolizers (~7% European ancestry) accumulate higher sertraline AUC, increasing adverse effect risk. African Americans have a significantly higher frequency of CYP2D6 ultrarapid metabolizers (~35% carry gene duplications) potentially causing sub-therapeutic exposure. CPIC recommends 50% dose reduction for poor metabolizers and consideration of alternative SSRIs for ultrarapid metabolizers. CYP2C19 also contributes to sertraline metabolism.",rank:"#1 prescribed antidepressant",color:"#a855f7"},{id:"escitalopram",name:"Escitalopram",brand:"Lexapro",cat:"neuro",cls:"SSRI (S-enantiomer)",ind:"Major depression, generalized anxiety",mfr:"Lundbeck / generics",yr:2002,formula:"C₂₀H₂₁FN₂O",mw:"324.4 g/mol",pgx:!0,pgxNote:"CYP2C19 is the primary metabolic enzyme. FDA recommends max 10mg/day for CYP2C19 poor metabolizers due to QT prolongation risk at elevated plasma levels. CYP2C19 poor metabolizer prevalence: ~14% East Asian, ~5% European, ~4% African American. CYP2C19 ultrarapid metabolizers may require higher doses.",rank:"Top prescribed SSRI",color:"#a855f7"},{id:"aripiprazole",name:"Aripiprazole",brand:"Abilify",cat:"neuro",cls:"Atypical Antipsychotic",ind:"Schizophrenia, bipolar I, MDD adjunct",mfr:"Otsuka / generics",yr:2002,formula:"C₂₃H₂₇Cl₂N₃O₂",mw:"448.4 g/mol",pgx:!0,pgxNote:"CYP2D6 is the primary metabolic enzyme. Poor metabolizers (~7% European, ~4% African American) show ~80% higher aripiprazole AUC. FDA label recommends 50% dose reduction for CYP2D6 poor metabolizers. Commercial PGx tests (GeneSight, Genomind) available to guide dosing. The combination of CYP2D6 and CYP3A4 interaction (e.g., fluoxetine + aripiprazole) creates compounded DDI risk.",rank:"Top antipsychotic by revenue",color:"#a855f7"},{id:"gabapentin",name:"Gabapentin",brand:"Neurontin",cat:"neuro",cls:"α2δ Ca²⁺ Channel Ligand",ind:"Epilepsy, neuropathic pain, PHN",mfr:"Pfizer / generics",yr:1993,formula:"C₉H₁₇NO₂",mw:"171.2 g/mol",pgx:!1,pgxNote:"",rank:"Top prescribed neuro drug",color:"#a855f7"},{id:"levodopa",name:"Levodopa/Carbidopa",brand:"Sinemet",cat:"neuro",cls:"Dopamine Precursor + DDC Inhibitor",ind:"Parkinson's disease (gold standard)",mfr:"Multiple generics",yr:1970,formula:"C₉H₁₁NO₄ + C₁₀H₁₄N₂O₄",mw:"197.2 g/mol",pgx:!0,pgxNote:"ALDH1A1 and COMT (val158met, rs4680) variants affect dopamine catabolism and levodopa therapeutic response. African Americans with Parkinson's disease are systematically underdiagnosed (~3× more likely to be misdiagnosed), undertreated, and represent <5% of clinical trial participants for Parkinson's therapies. COMT val158met genotype modulates levodopa response across all populations.",rank:"Gold standard for Parkinson's",color:"#a855f7"},{id:"metformin",name:"Metformin",brand:"Glucophage",cat:"metabolic",cls:"Biguanide (Antidiabetic)",ind:"Type 2 diabetes — first-line per ADA",mfr:"Multiple generics",yr:1994,formula:"C₄H₁₁N₅",mw:"129.2 g/mol",pgx:!0,pgxNote:"OCT1 (SLC22A1) loss-of-function variants (R61C, G401S, 420del, G465R) reduce hepatic metformin uptake and glycemic response. OCT2/MATE transporter variants affect renal clearance. Additionally, G6PD deficiency—present in ~10% of African American males—may alter metformin's redox mechanism. Type 2 diabetes disproportionately affects Black Americans (prevalence ~16% vs. ~12% non-Hispanic white), yet metformin pharmacogenomics research underrepresents this population.",rank:"Most prescribed diabetes drug worldwide",color:"#3b82f6"},{id:"levothyroxine",name:"Levothyroxine",brand:"Synthroid",cat:"metabolic",cls:"Thyroid Hormone (T4)",ind:"Hypothyroidism; thyroid cancer suppression",mfr:"AbbVie / generics",yr:1955,formula:"C₁₅H₁₁I₄NO₄",mw:"776.9 g/mol",pgx:!1,pgxNote:"",rank:"Most prescribed drug in the US (by volume)",color:"#3b82f6"},{id:"buprenorphine",name:"Buprenorphine",brand:"Suboxone / Sublocade",cat:"neuro",cls:"Partial μ-Opioid Agonist",ind:"Opioid use disorder (OUD); chronic pain",mfr:"Indivior / generics",yr:2002,formula:"C₂₉H₄₁NO₄",mw:"467.6 g/mol",pgx:!0,pgxNote:"CYP3A4 (primary) and CYP2D6 metabolize buprenorphine. Strong CYP3A4 inhibitors/inducers dramatically alter plasma levels. G6PD deficiency (more common in African Americans, ~10% of males) may increase hemolysis risk. Most critically: African Americans with OUD are significantly LESS likely to be prescribed buprenorphine compared to white patients with equivalent severity—a documented racial disparity in addiction treatment access that persists despite equal clinical efficacy.",rank:"Gold standard for OUD treatment",color:"#8b5cf6"}],Hr=[{key:"ideation",title:"Target Identification",icon:"🎯",short:"Ideation"},{key:"pharmchem",title:"Pharmacochemistry",icon:"⚗️",short:"Pharmo-Chem"},{key:"preclinical",title:"Preclinical Safety",icon:"🐁",short:"Preclinical"},{key:"clinical",title:"Clinical Trials",icon:"🏥",short:"Clinical"},{key:"regulatory",title:"FDA Regulatory",icon:"📋",short:"Regulatory"},{key:"postmarket",title:"Post-Market",icon:"📡",short:"Post-Market"}],_T={ideation:{L2:t=>`**What is target identification?**
Drug discovery begins by identifying a validated biological target—a protein, receptor, or enzyme whose modulation addresses the disease state.

**For ${t.name}:** The key discovery involved understanding the molecular mechanism of ${t.ind.toLowerCase()}. Researchers used genetic studies, structural biology, and biochemical assays to select and validate the target before committing to a full development program.

**Lead compound discovery** uses high-throughput screening (HTS) of large compound libraries (>1 million compounds), fragment-based drug discovery (FBDD), natural product isolation, or structure-based drug design (SBDD) guided by X-ray crystallography.

**Structure-Activity Relationship (SAR):** Once a hit is confirmed, medicinal chemists systematically modify the scaffold to optimize potency (target IC₅₀/Ki <10 nM), selectivity (ideally >100× vs. off-targets), solubility (>10 μg/mL), and metabolic stability (t½ >60 min in liver microsomes). ${t.formula?`${t.name}'s molecular formula (${t.formula}) reflects the structure that emerged from this iterative process.`:""}

**Intellectual property:** Freedom-to-operate analysis and provisional patent filing run concurrently with lead optimization to protect the investment before any disclosures.`,L3:t=>`**Target validation criteria (ICH and FDA context):**
The target must demonstrate: (1) genetic linkage via GWAS or Mendelian randomization, (2) phenotypic rescue in knockout/knockin animal models, (3) human genetic disorder correlation, and (4) a clearly defined mechanistic pathway amenable to pharmacological intervention.

**Quantitative SAR (QSAR) and computational target ID:** Structure-based drug design (SBDD) using X-ray crystallography or cryo-EM (resolution <2.5 Å preferred). Homology modeling for unsolved targets. Docking scoring functions (GlideXP, AutoDock-Vina), MD simulation (AMBER, GROMACS), and free energy perturbation (FEP+, Thermodynamic Integration) for binding affinity prediction. AI/ML: AlphaFold2-predicted structures now routinely used for target structures and resistance mutation modeling.

**Lead optimization parameters (Lipinski + Veber):**
- MW ≤ 500 g/mol; LogP ≤ 5; HBD ≤ 5; HBA ≤ 10 (Rule of 5)
- Rotatable bonds ≤ 10; PSA ≤ 140 Ų (Veber for oral bioavailability)
- Ligand efficiency (LE) = −ΔG_bind / heavy atom count ≥ 0.3 kcal/mol/atom
- Lipophilicity efficiency (LipE) = pIC₅₀ − LogP ≥ 5 (avoids lipophilicity-driven potency)
- ${t.mw&&t.mw!=="—"?`For ${t.name}: MW = ${t.mw}—within acceptable limits.`:""}

**For ${t.name} specifically:** ${t.cat==="antibiotic"?"The target-identification stage required understanding resistance mechanisms (β-lactamases, efflux pumps, ribosome modification) to design the molecule to overcome at least some existing resistance.":t.cat==="cardiovascular"?"Cardiovascular target ID requires careful distinction between therapeutic and isoform-specific off-target activity (e.g., hERG for cardiac safety) from the earliest SAR stage.":"Identification of CNS targets requires additional parameters: BBB penetration (PSA ≤ 90 Ų, MW ≤ 400 preferred), P-gp efflux ratio < 2, pKa optimization for passive diffusion."}

**Translational biomarkers identified at this stage** will anchor clinical proof-of-concept (Phase IIa) studies. Biomarker qualification through FDA's Biomarker Qualification Program (BQP) adds regulatory weight.`},pharmchem:{L2:t=>`**Synthetic route development:**
${t.name} is synthesized via a multi-step organic process designed for reproducibility, scalability, and minimal impurity generation. The final active pharmaceutical ingredient (API) must meet pharmaceutical-grade purity standards (typically ≥99.5% assay by HPLC).

**Key ADME (Absorption, Distribution, Metabolism, Excretion) properties:**
• **Absorption:** ${t.id==="amoxicillin"?"~90% oral bioavailability via PepT1 transporter; exemplary for a β-lactam antibiotic":t.id==="atorvastatin"?"~14% oral bioavailability due to extensive CYP3A4/3A5 first-pass hepatic metabolism; liver-targeted by OATP1B transporters":t.id==="metformin"?"Moderate oral F ~55–60%; absorbed via intestinal thiamine transporter (ThTR2) and OCT1":t.id==="levothyroxine"?"50–80% oral absorption, highly variable; must be taken fasting":"Oral bioavailability optimized through formulation and salt form selection"}
• **Distribution:** Plasma protein binding, volume of distribution (Vd), tissue distribution
• **Metabolism:** ${t.pgx?"Primary CYP enzymes—see Pharmacogenomics section for clinically important genetic variants":"CYP enzyme pathways, Phase II conjugation (glucuronidation, sulfation)"}
• **Excretion:** ${t.id==="metformin"?"Renal (>90% unchanged via OCT2/MATE transporters); contraindicated in CKD eGFR <30":t.id==="atorvastatin"?"Hepatobiliary excretion (~70%); t½=14h for atorvastatin, 20–30h for active metabolites":"Renal and/or hepatobiliary; half-life (t½) dictates dosing interval"}

**Formulation:** Salt form selection, particle size engineering, excipient compatibility, and stability studies define the final drug product (DP). ${t.name} is formulated as ${t.cat==="antibiotic"?"tablets, capsules, or oral suspension (for pediatric use)":t.id==="levothyroxine"?"compressed tablet—highly sensitive to excipient changes; generic substitution requires FDA approval":"immediate-release or extended-release tablets/capsules depending on desired PK profile"}.

**Molecular weight** ${t.mw&&t.mw!=="—"?`(${t.mw}) and formula (${t.formula}) reflect the drug-like properties achieved through iterative medicinal chemistry.`:""}`,L3:t=>`**CMC (Chemistry, Manufacturing, and Controls) — Module 3 of CTD:**
Complete characterization required for the NDA/BLA: drug substance synthesis (starting materials, reagents, solvents, step-by-step conditions), in-process controls (IPCs), specification testing (identity by IR/NMR, assay by HPLC, related substances by HPLC, residual solvents by GC/headspace, heavy metals by ICP-MS, microbial limits).

**Impurity profiling (ICH Q3A/Q3B/Q3C):**
- Reporting threshold: 0.05% (API) / 0.05% or 1mg TDI (DP)
- Identification threshold: 0.10%/1.0mg; Qualification threshold: 0.15%/1.0mg
- Genotoxic (mutagenic) impurities: TTC = 1.5 μg/day (Class 1/2); requires Ames test per ICH M7
- ICH Q3C Class 2 residual solvents (e.g., acetonitrile ≤410 ppm, methanol ≤3,000 ppm)

**Solid-state characterization (polymorphism):**
XRPD, DSC, TGA, DVS, hot-stage microscopy to identify all crystalline forms. API must be in a defined, reproducible polymorph. Ritonavir's catastrophic 1998 polymorph switch (Form II emergence) set the standard for polymorphism surveillance in pharmaceutical development.

**Bioequivalence for generics (21 CFR §320.24):**
90% CI for log-transformed AUC₀−∞, AUC₀−t, and Cmax must fall within 80.00–125.00% of the reference listed drug (RLD). Narrow therapeutic index (NTI) drugs (${t.id==="warfarin"||t.id==="levothyroxine"?"including "+t.name:"e.g., warfarin, levothyroxine, digoxin"}): tightened window of 90–111.11%.

**PBPK modeling (M&S):**
Physiologically-based pharmacokinetic (PBPK) models increasingly required in NDA submissions to predict: DDIs (perpetrator/victim assessment), dose adjustment in hepatic/renal impairment, pediatric dosing (PREA-driven), food effect, formulation bridging. FDA has accepted PBPK as part of DDI Section 8.7 labeling.`},preclinical:{L2:t=>`**Why preclinical studies?** Before any human exposure, the FDA requires evidence that the molecule is safe enough to test in Phase I. Preclinical studies also establish the starting dose for human trials.

**In vitro (cell-based) assays:**
• **hERG cardiac safety:** Tests binding to the hERG K⁺ channel—blockade causes fatal QT prolongation (torsades de pointes). IC₅₀/therapeutic ratio > 30× required
• **CYP inhibition panel:** CYP1A2, 2C9, 2C19, 2D6, 3A4 tested for reversible and time-dependent inhibition (TDI/mechanism-based). Predicts drug-drug interactions
• **Genotoxicity:** Ames test (bacterial mutagenicity in 5 Salmonella/E. coli strains), in vitro micronucleus test for chromosomal aberration
• **Plasma protein binding:** Equilibrium dialysis or rapid equilibrium dialysis (RED)

**In vivo animal toxicology:**
• **Acute toxicity:** Single-dose MTD (maximum tolerated dose) in 2 species
• **Repeat-dose:** 28-day and 90-day GLP studies in rodent (rat) + non-rodent (dog or cynomolgus monkey)
• **Safety pharmacology (ICH S7A/B):** CNS (Irwin test), cardiovascular (telemetry QTc), respiratory (plethysmography)

**NOAEL (No Observed Adverse Effect Level)** from the most sensitive species drives the first-in-human (FIH) starting dose calculation.`,L3:t=>`**GLP compliance (21 CFR Part 58; OECD GLP Principles):**
All pivotal toxicology studies must be conducted under Good Laboratory Practice. Requires: Study Director accountability, written protocols, SOPs, raw data archiving, QA audits, and final study report signed by Study Director. GLP violations can prevent NDA filing.

**ICH S7A/S7B safety pharmacology battery (mandatory):**
Core battery: CNS assessment (modified Irwin battery—motor activity, behavior, coordination, sensory/motor reflexes, body temperature), CVS (in vitro hERG + in vivo QT/QTc by telemetry in conscious non-rodent), respiratory (tidal volume, respiratory rate, SpO₂). For ${t.id==="ciprofloxacin"||t.id==="azithromycin"||t.id==="escitalopram"?"especially "+t.name+": QT prolongation is a noted class concern requiring robust S7B evaluation":"all drugs with structural alerts for QT (aminoquinolines, halogenated aromatics, basic N within 3 bonds of aromatic): enhanced cardiac safety evaluation required"}.

**Genetic toxicology battery (ICH S2(R1)):**
Standard battery: (1) in vitro Ames test ±S9 activation, (2) in vitro chromosomal aberration (CHO/TK6/L5178Y), (3) in vivo genotoxicity if in vitro positive (micronucleus or comet assay). All must be negative to proceed without ICH M7 risk assessment.

**DART studies (ICH S5—Reproductive/Developmental Toxicology):**
Required for all drugs likely used in women of childbearing potential:
• Segment I (Fertility/EED): male and female fertility, implantation, early embryonic development
• Segment II (EFD): teratogenicity study in 2 species (rat + rabbit); organogenesis window (GD6–17 rat / GD6–18 rabbit)
• Segment III (PPND): pre/postnatal development, parturition, lactation, F1 development
FDA Pregnancy Labeling Rule (PLLR, 2015) replaced the A/B/C/D/X system with narrative risk summaries.

**FIH dose calculation (FDA 2005 Guidance):**
FIH starting dose = NOAEL (most sensitive species HED) × BSA factor × safety factor (1/10). Maximum Recommended Starting Dose (MRSD) is generally 1/10 of the lowest HED NOAEL. Must be supported by minimum anticipated biological effect level (MABEL) calculation for high-potency or immunomodulatory molecules.`},clinical:{L2:t=>`**Phase I — First-in-Human (FIH) | 20–80 subjects | ~1–2 years**
Healthy volunteers (or patients for oncology/high-risk drugs). Primary goals: safety, tolerability, and PK characterization. Designs include: Single-Ascending Dose (SAD), Multiple-Ascending Dose (MAD), food-effect study, absolute bioavailability, QTc study (if required).
Key PK parameters derived: Cmax, Tmax, AUC₀−∞, t½, Vd, CL, F. Safety stopping rules pre-specified in protocol.

**Phase II — Proof-of-Concept & Dose-Finding | 100–300 patients | ~2 years**
First exposure in target patient population. Demonstrates early efficacy signal. Randomized, often placebo-controlled, typically 3–5 dose groups. Primary endpoint: validated surrogate (${t.cat==="cardiovascular"?"LDL-C, blood pressure, or HbA1c":t.cat==="antibiotic"?"clinical/microbiological cure at test-of-cure visit":"validated disease-specific rating scale or biomarker"}).

**Phase III — Pivotal | 1,000–5,000 patients | ~3–5 years**
Randomized, double-blind, multicenter, typically active-controlled or placebo-controlled. Statistical success drives the indication in labeling. Must demonstrate superiority (ΔP < 0.05 primary endpoint) or non-inferiority (NI margin predefined with FDA).

**Phase IV — Post-Approval | Ongoing**
Required REMS studies, safety registries, long-term outcomes trials, pediatric studies (under PREA), and confirmatory trials if the drug received Accelerated Approval. ${t.pgx?"Pharmacogenomic subgroup analyses in Phase IV trials can reveal population-specific response patterns, including differences across racial/ethnic groups.":""}`,L3:t=>`**GCP compliance (ICH E6(R2) and upcoming E6(R3)):**
All clinical trials require: Investigator's Brochure (IB), Ethics Committee (EC/IRB) approval and annual renewals, Written Informed Consent (21 CFR §50), randomization and blinding management, eCRF/EDC data capture, independent safety monitoring (DSMB/DMC with pre-specified stopping rules), and timely SAE reporting (within 24h to sponsor; 7-day expedited to FDA for fatal/life-threatening unexpected SAEs; 15-day for others). Clinical Study Report (CSR) per ICH E3 format required for each study.

**Statistical rigor (ICH E9, E9(R1) Estimands):**
SAP pre-specified before unblinding. Estimand framework (ICH E9 R1): treatment policy / composite / while-on-treatment / hypothetical / principal stratum. Primary analysis: ITT (Intent-to-Treat), with PP (Per-Protocol) as sensitivity. Alpha = 0.05 (two-sided), typically 80–90% power for Phase III. Multiplicity control: Hochberg/Bonferroni/hierarchical testing.

**Adaptive trial designs (FDA 2019 guidance):**
Bayesian adaptive dose-finding (BOIN, mTPI-2), seamless Phase II/III with interim analysis, master protocols (basket: disease-agnostic by biomarker; umbrella: disease-specific by biomarker; platform: multiple arms with adaptive entry/exit). All adaptations must be pre-specified; unblinded data access controls prevent type I error inflation.

**Diversity in clinical trials — FDA 2022 Draft Guidance:**
Phase III Diversity Action Plans (DAPs) required for drugs impacting all demographics. For ${t.pgx?t.name+" with known PGx variants ("+t.id+"), enrollment must include adequate representation of populations with relevant allele frequencies. Pharmacogenomic subgroup analyses (CYP2D6, CYP2C19, etc.) should be pre-specified in SAP with sufficient statistical power per subgroup.":"all drugs: enrollment should reflect US disease burden by race, ethnicity, age, and sex. Underrepresentation of any group limits generalizability of safety and efficacy findings."}

**CIOMS/ICH E2A/E2B(R3)/E2C(R2) safety reporting:**
SAE = fatal, life-threatening, hospitalization, persistent disability, congenital anomaly, or "other medically important." ICSRs submitted electronically via E2B(R3) XML to FDA (FAERS gateway) and EVMPD (EMA). Annual Development Safety Update Report (DSUR) per ICH E2F while in development.`},regulatory:{L2:t=>`**Step 1 — IND (Investigational New Drug Application, 21 CFR §312)**
Filed before first-in-human trials. Contains: Preclinical data summary, CMC description, clinical protocol for Phase I, Investigator qualifications, and signed Form FDA-1571. FDA has 30 days to place a clinical hold (or not). If no hold, trials may begin.

**Step 2 — NDA / BLA (21 CFR §314 / §601)**
Filed after Phase III completion. Structured as a Common Technical Document (CTD, ICH M4): Module 1 (admin), Module 2 (summaries), Module 3 (CMC), Module 4 (nonclinical reports), Module 5 (clinical reports). Also submitted to EMA (MAA) and PMDA (Japan) for global approval.

**PDUFA review timelines:**
• Standard review: 12-month PDUFA date
• Priority review: 6-month PDUFA date (for serious conditions with unmet need)
• Rolling review (Fast Track designation): Modules submitted as completed

**Special designations available:**
• **Breakthrough Therapy:** Substantial improvement vs. available therapy on a clinically significant endpoint
• **Accelerated Approval:** Surrogate/intermediate endpoint; requires confirmatory Phase IV trial
• **Fast Track:** Serious condition + unmet need (rolling review, more frequent FDA meetings)
• **REMS:** Required for ${t.id==="buprenorphine"?"buprenorphine—prescriber education, patient counseling, dispensing restrictions":"drugs with serious risks manageable only with additional safety measures"}

**FDA Labeling (PI):** Key sections negotiated with FDA include: Boxed Warning (if applicable), Indications, Dosage & Administration, Contraindications, Warnings & Precautions, Adverse Reactions, Drug Interactions, Use in Specific Populations.`,L3:t=>`**CTD structure (ICH M4) in detail:**
Module 2 contains the executive summaries critical for regulatory review: 2.3 Quality Overall Summary (QOS), 2.4 Nonclinical Overview, 2.5 Clinical Overview, 2.6 Nonclinical Written Summaries, 2.7 Clinical Summary. These are the documents regulators read first—writing quality directly impacts review speed.

**Priority designation strategy:**
Breakthrough Therapy grants the most intensive FDA guidance (senior reviewers, cross-disciplinary meetings). BT designation requires "preliminary clinical evidence" of substantial improvement on a clinically significant endpoint vs. SoC, typically Phase I/II data showing ≥50% improvement in primary endpoint, or dramatic effect size on a validated surrogate. As of 2024, >30% of novel drug approvals hold BT designation.

**505(b)(2) application pathway:**
Allows reliance on FDA's prior findings of safety/efficacy for a previously approved drug. Used for: new dosage forms, new routes of administration, new combinations, new indications. Requires patent certification (Para I–IV), potentially triggering 30-month stay. Can reduce development timelines by 3–5 years vs. full 505(b)(1) NDA.

**Advisory Committee (AdCom) process:**
FDA may convene a panel of external experts. AdCom votes are not binding, but FDA follows recommendations ~80% of the time. For ${t.id==="bidil"?"BiDil specifically, the Cardiovascular and Renal Drugs Advisory Committee reviewed the A-HeFT data in June 2005 and voted 9–0 to recommend approval—the first race-specific indication in FDA history.":"controversial approvals or drugs with complex benefit-risk profiles, AdComs provide regulatory cover and public accountability."}

**Pharmacogenomics in labeling (FDA PGx Biomarker Table):**
${t.pgx?`For ${t.name}: FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling includes actionable information on ${t.id==="warfarin"?"CYP2C9 and VKORC1 (REQUIRED testing category—FDA label states dose adjustment based on genotype)":t.id==="clopidogrel"?"CYP2C19 (BLACK BOX WARNING—reduced effectiveness in poor metabolizers)":t.id==="sertraline"||t.id==="aripiprazole"?"CYP2D6 (Actionable—dose adjustment recommended for poor metabolizers)":"relevant PGx biomarkers"}. The FDA Precision Medicine / PGx labeling hierarchy: Contraindication > Warning/Precaution > Dosage Adjustment > For Information Only.`:"The FDA's Table of Pharmacogenomic Biomarkers in Drug Labeling lists ~300 drug-gene pairs. CPIC (Clinical Pharmacogenomics Implementation Consortium) provides evidence-based prescribing guidelines for >40 drug-gene pairs. PharmGKB is the primary database for curated PGx knowledge used by FDA reviewers."}`},postmarket:{L2:t=>`**Why post-market surveillance? (Pharmacovigilance)**
Phase III trials (~3,000–5,000 patients) cannot detect adverse events occurring in <1:10,000 patients or in special populations (elderly, renally impaired, rare genetic variants). Post-market surveillance closes this gap.

**Mandatory reporting:**
• **15-day expedited reports:** Serious, unexpected adverse drug reactions (serious = fatal, life-threatening, hospitalization, disability, or congenital anomaly)
• **Periodic Safety Update Reports (PSURs):** Submitted annually; include benefit-risk evaluation of all known data
• **FDA FAERS (MedWatch):** Healthcare providers and patients can report adverse events directly; publicly searchable database with 20M+ reports

**Post-market requirements for ${t.name}:**
• ${t.id==="buprenorphine"?"REMS program compliance monitoring, prescriber/dispensing audits":"Standard pharmacovigilance"}
• ${t.pgx?"Ongoing pharmacogenomics signal detection—population-specific ADR reporting is monitored for gene-linked adverse events":"Routine AE signal detection and aggregate analysis"}
• Any confirmatory trials mandated at approval (particularly for Accelerated Approval drugs)

**Label evolution:** Black box warnings, new contraindications, and new drug interactions can be added post-approval based on real-world safety signals. ${t.id==="clopidogrel"?"Clopidogrel's Black Box Warning for CYP2C19 was added in 2010—years after approval—based on accumulating post-market pharmacogenomics data.":"Post-market data has driven label changes for many of the top-prescribed drugs."}

**Generic entry:** Upon patent expiration, generic manufacturers file ANDAs (Abbreviated NDAs) requiring bioequivalence demonstration (no new clinical trials). ${t.name} ${t.yr<2010?"is now widely available as generic—typical 80–90% price reduction.":"may still be under patent protection or facing upcoming generic competition."}`,L3:t=>`**EU MDR / PV regulations (Regulation (EU) 2017/745 vs. FDA 21 CFR):**
Global pharmacovigilance requires parallel FDA and EMA obligations. EMA requires: Periodic Safety Update Reports (PSURs) per PSUR schedule in EMA EPAR; EudraVigilance ICSR submission (E2B(R3) XML); Signal detection using disproportionality analysis (ROR, PRR, IC); Risk Management Plan (RMP) with minimization measures; PASS (Post-Authorization Safety Studies) if required at approval.

**Signal detection methodology:**
Disproportionality analysis: Reporting Odds Ratio (ROR), Proportional Reporting Ratio (PRR), IC (Information Component, Bayesian). A signal is defined as a statistically elevated ROR (lower bound 95% CI > 1) AND ≥3 case reports AND clinical plausibility. Signal → evaluation → characterization → regulatory action. For ${t.pgx?"pharmacogenomics-related signals: stratified analysis by reported race/ethnicity in FAERS is possible but hampered by ~35% missing race data in MedWatch reports—a significant surveillance gap for diverse populations.":"all pharmacovigilance signals: Bradford Hill criteria (temporality, strength, biological plausibility, consistency, specificity) guide causality assessment."}

**REMS (Risk Evaluation and Mitigation Strategy, 21 CFR §505-1):**
FDA can require REMS at or after approval. REMS elements: Medication Guide, Communication Plan, Elements to Assure Safe Use (ETASU—e.g., prescriber certification, dispensing restrictions, patient enrollment). ${t.id==="buprenorphine"?"Buprenorphine REMS: historically required DATA 2000 X-waiver for office-based prescribing (eliminated by the SUPPORT Act, Dec 2022, significantly expanding access). However, the OUD treatment gap remains largest in Black communities, with access disparities persisting post-SUPPORT.":"REMS are reserved for drugs with serious risks manageable only with additional safety measures."}

**Post-market outcomes for population-specific safety:**
Real-world evidence (RWE) from claims databases (Optum, MarketScan, Medicare/Medicaid) and EHR networks (TriNetX, PCORnet) is increasingly submitted to FDA to supplement clinical trial data—particularly for populations underrepresented in pre-approval trials. FDA's Framework for Real-World Evidence (2018) defines standards for RWE submissions in label modification and REMS decisions.`}};function yT({molData:t,onSelectAtom:e}){const n=ot.useRef(null),i=ot.useRef({}),r=ot.useRef({active:!1,lastX:0,lastY:0}),o=ot.useRef([]);return ot.useEffect(()=>{const s=n.current;if(!s||!t)return;const a=s.clientWidth,l=s.clientHeight,c=new wv({canvas:s,antialias:!0,alpha:!0});c.setSize(a,l),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0);const d=new uT,f=new dn(45,a/l,.1,200);f.position.set(0,0,18),d.add(new pT(16777215,.6));const h=new Up(16777215,.8);h.position.set(5,8,10),d.add(h);const g=new Up(8965375,.3);g.position.set(-5,-5,5),d.add(g);const _=new fT(3718648,.4,50);_.position.set(0,5,8),d.add(_);const y=[],m=t.atoms,u=t.bonds,v=m.reduce((W,R)=>W+R.x,0)/m.length,p=m.reduce((W,R)=>W+R.y,0)/m.length,x=m.reduce((W,R)=>W+R.z,0)/m.length;m.forEach(W=>{const R=qd(W.element),B=new jd(R.r*1.1,20,20),K=new Lp({color:R.hex,shininess:80,specular:4473924}),Y=new Yn(B,K);Y.position.set(W.x-v,W.y-p,W.z-x),Y.userData={atomId:W.id,atom:W},d.add(Y),y.push(Y)}),o.current=y,u.forEach(([W,R])=>{if(W>=m.length||R>=m.length)return;const B=m[W],K=m[R],Y=new I(B.x-v,B.y-p,B.z-x),O=new I(K.x-v,K.y-p,K.z-x),V=new I().subVectors(O,Y),z=V.length();if(z<.01||z>5)return;const L=new Xd(.06,.06,z,10),F=new Lp({color:8035004,shininess:40,transparent:!0,opacity:.85}),se=new Yn(L,F),le=new I().addVectors(Y,O).multiplyScalar(.5);se.position.copy(le),se.quaternion.setFromUnitVectors(new I(0,1,0),V.normalize()),d.add(se)});const E={rot:new So(0,0,0),zoom:1,pivot:new Ko};d.add(E.pivot),i.current={renderer:c,scene:d,camera:f,state:E};const C=W=>{const R=W.touches?W.touches[0]:W;r.current={active:!0,lastX:R.clientX,lastY:R.clientY}},b=()=>{r.current.active=!1},D=W=>{if(!r.current.active)return;const R=W.touches?W.touches[0]:W,B=R.clientX-r.current.lastX,K=R.clientY-r.current.lastY;r.current.lastX=R.clientX,r.current.lastY=R.clientY,i.current.rotX=(i.current.rotX||0)+K*.008,i.current.rotY=(i.current.rotY||0)+B*.008},M=W=>{f.position.z=Math.max(6,Math.min(40,f.position.z+W.deltaY*.02)),W.preventDefault()},w=W=>{if(Math.abs(W.movementX||0)>3||Math.abs(W.movementY||0)>3)return;const R=s.getBoundingClientRect(),B=new We((W.clientX-R.left)/a*2-1,-((W.clientY-R.top)/l)*2+1),K=new mT;K.setFromCamera(B,f);const Y=K.intersectObjects(y);Y.length>0&&Y[0].object.userData.atom&&(e&&e(Y[0].object.userData.atom),y.forEach(O=>{O.material.emissive&&O.material.emissive.set(0)}),Y[0].object.material.emissive=new Ge(3718648),Y[0].object.material.emissiveIntensity=.4)};s.addEventListener("mousedown",C),s.addEventListener("mouseup",b),s.addEventListener("mousemove",D),s.addEventListener("wheel",M,{passive:!1}),s.addEventListener("click",w),s.addEventListener("touchstart",C,{passive:!0}),s.addEventListener("touchend",b),s.addEventListener("touchmove",D),s.addEventListener("touchstart",C,{passive:!0}),s.addEventListener("touchend",b),s.addEventListener("touchmove",D);let q;const $=()=>{q=requestAnimationFrame($);const W=i.current.rotX||0,R=i.current.rotY||0,B=new Co;B.setFromEuler(new So(W,R,0,"YXZ")),d.quaternion.copy(B),c.render(d,f)};return $(),()=>{cancelAnimationFrame(q),c.dispose(),s.removeEventListener("mousedown",C),s.removeEventListener("mouseup",b),s.removeEventListener("mousemove",D),s.removeEventListener("wheel",M),s.removeEventListener("click",w),s.removeEventListener("touchstart",C),s.removeEventListener("touchend",b),s.removeEventListener("touchmove",D)}},[t,e]),N.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:"radial-gradient(ellipse at center,rgba(56,189,248,0.04) 0%,rgba(6,13,26,0) 70%)"},children:[N.jsx("canvas",{ref:n,style:{width:"100%",height:"100%",display:"block",cursor:"grab"}}),N.jsx("div",{style:{position:"absolute",bottom:12,right:12,fontSize:11,color:"rgba(56,189,248,0.5)",fontFamily:"'JetBrains Mono',monospace"},children:"drag · scroll · click atom"})]})}function xT({depth:t,onChange:e}){return N.jsxs("div",{className:"depth-bar",children:[N.jsx("button",{className:`depth-btn${t===2?" on":""}`,onClick:()=>e(2),children:"L2 OVERVIEW"}),N.jsx("button",{className:`depth-btn${t===3?" on":""}`,onClick:()=>e(3),children:"L3 TECHNICAL"})]})}function ST({text:t,style:e={}}){const n=ot.useMemo(()=>{let i=t;i=i.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");const r=i.split(`
`);let o="",s=!1;for(const a of r){const l=a.trim();l.startsWith("•")?(s||(o+="<ul style='padding-left:18px;margin:6px 0'>",s=!0),o+=`<li style='margin:4px 0;line-height:1.6'>${l.slice(1).trim()}</li>`):(s&&(o+="</ul>",s=!1),l===""?o+="<div style='height:8px'></div>":o+=`<p style='margin:4px 0;line-height:1.7'>${l}</p>`)}return s&&(o+="</ul>"),o},[t]);return N.jsx("div",{style:{fontSize:14,color:"#a8c4dc",...e},dangerouslySetInnerHTML:{__html:n}})}function MT({el:t}){const e=qd(t);return N.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:6,padding:"3px 8px",fontSize:11,margin:"2px",color:"#ccd9ee"},children:[N.jsx("span",{style:{width:10,height:10,borderRadius:"50%",background:e.css,display:"inline-block"}}),t]})}function ET({atom:t,onClose:e}){if(!t)return null;const n=qd(t.element);return N.jsxs("div",{className:"fadein",style:{background:"rgba(4,11,28,0.97)",border:"1px solid rgba(56,189,248,0.35)",borderRadius:14,padding:18,marginTop:12},children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[N.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:n.css,boxShadow:`0 0 12px ${n.css}66`,flexShrink:0}}),N.jsxs("div",{children:[N.jsx("div",{style:{fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:700,color:"#e8f4ff"},children:t.element}),N.jsx("div",{style:{fontSize:12,color:"#38bdf8",fontWeight:600},children:t.role})]}),N.jsx("button",{onClick:e,style:{marginLeft:"auto",background:"none",border:"none",color:"#4a6080",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),N.jsx("div",{style:{fontSize:13,color:"#8ab0c8",lineHeight:1.7},children:t.desc||"No description available."})]})}function TT({drug:t}){return t.pgx?N.jsxs("div",{className:"pgx-banner-blk",children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[N.jsx("span",{style:{fontSize:20},children:"🧬"}),N.jsxs("div",{children:[N.jsx("div",{style:{fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:700,color:"#6ee7b7"},children:"Pharmacogenomics & Racial Equity"}),N.jsx("div",{style:{fontSize:11,color:"#34d399",fontWeight:600,marginTop:2},children:"CLINICALLY ACTIONABLE GENETIC VARIATION"})]})]}),N.jsx("div",{style:{fontSize:13,color:"#a7f3d0",lineHeight:1.75},children:t.pgxNote})]}):null}function wT({drug:t,onBack:e}){const[n,i]=ot.useState(0),[r,o]=ot.useState(2),[s,a]=ot.useState(null),l=ft[t.id],c=[...new Set(((l==null?void 0:l.atoms)||[]).map(g=>g.element))],d=Hr[n],f=_T[d.key],h=r===2?f.L2(t):f.L3(t);return N.jsxs("div",{className:"pp fadein",style:{minHeight:"100vh",padding:"0 0 60px"},children:[N.jsxs("div",{style:{background:"rgba(4,10,24,0.95)",borderBottom:"1px solid rgba(56,189,248,0.12)",padding:"16px 24px",position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",gap:14},children:[N.jsx("button",{className:"btn",onClick:e,style:{padding:"6px 14px",fontSize:13},children:"← Back"}),N.jsxs("div",{children:[N.jsx("div",{className:"syne",style:{fontSize:20,fontWeight:800,color:"#e8f4ff"},children:t.name}),N.jsxs("div",{style:{fontSize:12,color:"#38bdf8",fontWeight:600},children:[t.brand," · ",t.cls]})]}),N.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[t.pgx&&N.jsx("span",{style:{background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.4)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#34d399",fontWeight:700},children:"PGx VARIANT"}),t.id==="bidil"&&N.jsx("span",{style:{background:"rgba(251,191,36,0.15)",border:"1px solid rgba(251,191,36,0.4)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#fbbf24",fontWeight:700},children:"RACE-SPECIFIC FDA"}),N.jsx("span",{style:{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,padding:"3px 10px",fontSize:11,color:"#38bdf8",fontWeight:600},children:t.yr})]})]}),N.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"24px 20px"},children:[N.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:24},children:[N.jsxs("div",{className:"card",style:{height:400,padding:0,overflow:"hidden",position:"relative"},children:[N.jsx("div",{style:{position:"absolute",top:12,left:12,zIndex:2,fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"rgba(56,189,248,0.7)",background:"rgba(4,11,28,0.8)",borderRadius:6,padding:"4px 8px"},children:t.formula||"—"}),l?N.jsx(yT,{molData:l,onSelectAtom:a}):N.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#4a6080",flexDirection:"column",gap:8},children:[N.jsx("div",{style:{fontSize:36},children:"⚗️"}),N.jsx("div",{style:{fontSize:13},children:"3D structure loading..."})]})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[N.jsxs("div",{className:"panel",style:{flex:1},children:[N.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14},children:[["Indication",t.ind],["Drug Class",t.cls],["Manufacturer",t.mfr],["Approved",t.yr],["Formula",t.formula||"—"],["Mol. Weight",t.mw||"—"]].map(([g,_])=>N.jsxs("div",{children:[N.jsx("div",{style:{fontSize:10,color:"#38bdf8",fontWeight:700,letterSpacing:".06em",marginBottom:3},children:g.toUpperCase()}),N.jsx("div",{style:{fontSize:13,color:"#ccd9ee"},children:_})]},g))}),N.jsxs("div",{style:{borderTop:"1px solid rgba(56,189,248,0.1)",paddingTop:12},children:[N.jsx("div",{style:{fontSize:11,color:"#4a6080",fontWeight:600,marginBottom:6},children:"ELEMENT LEGEND"}),N.jsx("div",{children:c.map(g=>N.jsx(MT,{el:g},g))})]}),N.jsx("div",{style:{marginTop:12,fontSize:12,color:"#6ee7b7",fontStyle:"italic"},children:t.rank})]}),N.jsx(TT,{drug:t})]})]}),N.jsx(ET,{atom:s,onClose:()=>a(null)}),N.jsxs("div",{className:"panel",style:{marginTop:s?12:0},children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18,flexWrap:"wrap",gap:12},children:[N.jsx("div",{className:"syne",style:{fontSize:17,fontWeight:700,color:"#e8f4ff"},children:"Drug Lifecycle Journey"}),N.jsx(xT,{depth:r,onChange:o})]}),N.jsx("div",{style:{display:"flex",gap:6,marginBottom:22,flexWrap:"wrap"},children:Hr.map((g,_)=>N.jsxs("button",{onClick:()=>i(_),style:{border:`1px solid ${_===n?"rgba(56,189,248,0.7)":_<n?"rgba(56,189,248,0.25)":"rgba(74,96,112,0.3)"}`,background:_===n?"rgba(56,189,248,0.18)":"transparent",color:_===n?"#38bdf8":_<n?"#5a88a0":"#3a5066",borderRadius:8,padding:"6px 12px",cursor:"pointer",fontSize:11,fontWeight:700,letterSpacing:".04em",transition:"all .2s"},children:[g.icon," ",g.short]},g.key))}),N.jsxs("div",{className:"fadein",children:[N.jsxs("div",{style:{marginBottom:14},children:[N.jsxs("div",{className:"syne",style:{fontSize:20,fontWeight:700,color:"#e8f4ff",marginBottom:4},children:[d.icon," ",d.title]}),N.jsx("div",{style:{height:2,width:50,background:"linear-gradient(90deg,#38bdf8,transparent)",borderRadius:2,marginBottom:14}}),d.key==="regulatory"&&t.pgx&&N.jsxs("div",{className:"pgx-banner",style:{marginBottom:14},children:[N.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#fbbf24",marginBottom:4},children:"⚠️ PHARMACOGENOMICS REGULATORY NOTE"}),N.jsx("div",{style:{fontSize:12,color:"#fde68a"},children:"This drug has known PGx variants with regulatory implications. See PGx section above and L3 content for FDA labeling requirements."})]})]}),N.jsx("div",{className:"scroll",style:{maxHeight:420,overflowY:"auto",paddingRight:8},children:N.jsx(ST,{text:h})})]},`${n}-${r}`),N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:20,borderTop:"1px solid rgba(56,189,248,0.1)",paddingTop:16},children:[N.jsx("button",{className:"btn",onClick:()=>i(g=>Math.max(0,g-1)),style:{opacity:n===0?.3:1,cursor:n===0?"default":"pointer"},children:"← Previous"}),N.jsxs("span",{style:{fontSize:12,color:"#4a6080",alignSelf:"center"},children:[n+1," / ",Hr.length]}),N.jsx("button",{className:"btn",onClick:()=>i(g=>Math.min(Hr.length-1,g+1)),style:{opacity:n===Hr.length-1?.3:1,cursor:n===Hr.length-1?"default":"pointer"},children:"Next →"})]})]})]})]})}const bT=[{sym:"C",name:"Carbon",color:"#6b7280",cat:"element"},{sym:"H",name:"Hydrogen",color:"#d1d5db",cat:"element"},{sym:"N",name:"Nitrogen",color:"#3b82f6",cat:"element"},{sym:"O",name:"Oxygen",color:"#ef4444",cat:"element"},{sym:"S",name:"Sulfur",color:"#eab308",cat:"element"},{sym:"F",name:"Fluorine",color:"#22c55e",cat:"element"},{sym:"Cl",name:"Chlorine",color:"#16a34a",cat:"element"},{sym:"P",name:"Phosphorus",color:"#f97316",cat:"element"}],CT=[{sym:"-OH",name:"Hydroxyl",color:"#06b6d4",cat:"group",desc:"Polar, H-bond donor. Adds water solubility and often required for binding."},{sym:"-NH₂",name:"Amino",color:"#6366f1",cat:"group",desc:"Basic amine. pKa ~10. Protonated at physiologic pH—key for ionic binding to targets."},{sym:"-COOH",name:"Carboxyl",color:"#ec4899",cat:"group",desc:"Acidic. pKa ~4. Ionized carboxylate anchors to positively charged protein residues."},{sym:"-CH₃",name:"Methyl",color:"#94a3b8",cat:"group",desc:"Small hydrophobic group. Fills lipophilic pockets, blocks oxidation, can affect selectivity."},{sym:"C₆H₅",name:"Phenyl ring",color:"#f59e0b",cat:"group",desc:"Aromatic ring for π-stacking with aromatic residues (Phe, Tyr, Trp) in binding sites."},{sym:"β-Lact",name:"β-Lactam ring",color:"#10b981",cat:"group",desc:"Strained 4-membered ring (~26 kcal/mol strain). Highly reactive acylating agent for PBPs."},{sym:"-NO₂",name:"Nitro group",color:"#dc2626",cat:"group",desc:"Electron-withdrawing. Reduced to reactive radical anion in anaerobic bacteria → DNA damage."},{sym:"-F",name:"Fluoro",color:"#22c55e",cat:"group",desc:"Smallest possible steric substitution. Blocks CYP oxidation, increases membrane permeability."},{sym:"Guan",name:"Guanidine",color:"#8b5cf6",cat:"group",desc:"Strongly basic (pKa ~12.5). Flat planar cation for ionic/H-bonding to negative residues."},{sym:"-SH",name:"Thiol",color:"#ca8a04",cat:"group",desc:"Reactive —SH can form disulfide bonds or covalent adducts. Important for prodrug activation."},{sym:"Pipe",name:"Piperazine",color:"#7c3aed",cat:"group",desc:"6-membered ring with 2 N. pKa ~5 and ~9. Improves aqueous solubility and membrane permeability."},{sym:"Im",name:"Imidazole",color:"#0ea5e9",cat:"group",desc:"Amphoteric (pKa 6.1). Coordinates metals (Zn²⁺ in ACE/carbonic anhydrase). Histidine mimic."}];function AT(){const[t,e]=ot.useState([]),[n,i]=ot.useState(null),[r,o]=ot.useState(!1),[s,a]=ot.useState(!1),[l,c]=ot.useState(null),[d,f]=ot.useState(null),h=ot.useRef(null),g=p=>{i(p)},_=()=>{n&&t.length<14&&e(p=>[...p,{...n,id:Date.now()+Math.random()}]),i(null),o(!1)},y=p=>e(x=>x.filter(E=>E.id!==p)),m=()=>{e([]),c(null),f(null)},u=async()=>{var E,C;if(t.length===0)return;a(!0),c(null),f(null);const x=`You are a medicinal chemist and pharmacologist. A pharmacy student has assembled the following chemical components for a hypothetical drug molecule: [${t.map(b=>b.sym).join(", ")}].

Analyze this combination and respond in this EXACT JSON format with no other text:
{
  "name": "creative informal drug name (2-3 words max)",
  "moa": "2-3 sentence mechanism of action based on these components",
  "target": "likely receptor/enzyme target (be specific with protein names)",
  "indication": "most plausible therapeutic indication",
  "adme": "brief ADME prediction: absorption, metabolism CYP enzymes, excretion route",
  "verdict": "BENEFICIAL" or "RISKY" or "TOXIC" or "INERT" or "CONTROLLED SUBSTANCE",
  "verdict_reason": "2-3 sentence explanation of why this verdict—cite specific components",
  "warnings": ["specific safety concern 1", "specific safety concern 2", "specific safety concern 3"],
  "similar_drugs": ["existing approved drug with similar scaffold/mechanism 1", "similar drug 2"],
  "novelty": "brief note on whether this is a plausible new chemical entity or redundant with existing drugs"
}`;try{const w=(((C=(E=(await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1e3,messages:[{role:"user",content:x}]})})).json()).content)==null?void 0:E.find($=>$.type==="text"))==null?void 0:C.text)||"").replace(/```json|```/g,"").trim(),q=JSON.parse(w);c(q)}catch{f("Analysis failed. Make sure you have an active Claude API session.")}a(!1)},v={BENEFICIAL:{bg:"rgba(16,185,129,0.15)",border:"rgba(16,185,129,0.4)",text:"#34d399",icon:"✅"},RISKY:{bg:"rgba(251,191,36,0.15)",border:"rgba(251,191,36,0.4)",text:"#fbbf24",icon:"⚠️"},TOXIC:{bg:"rgba(239,68,68,0.15)",border:"rgba(239,68,68,0.4)",text:"#f87171",icon:"☠️"},INERT:{bg:"rgba(100,116,139,0.15)",border:"rgba(100,116,139,0.4)",text:"#94a3b8",icon:"🔵"},"CONTROLLED SUBSTANCE":{bg:"rgba(168,85,247,0.15)",border:"rgba(168,85,247,0.4)",text:"#c084fc",icon:"🔒"}};return N.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"24px 20px 60px"},children:[N.jsxs("div",{style:{marginBottom:24},children:[N.jsx("div",{className:"syne",style:{fontSize:28,fontWeight:800,color:"#e8f4ff",marginBottom:6},children:"Drug Designer Sandbox"}),N.jsx("div",{style:{fontSize:14,color:"#6a8ea8"},children:"Drag elements & functional groups to the canvas, then get an AI pharmacological analysis"})]}),N.jsxs("div",{style:{display:"grid",gridTemplateColumns:"260px 1fr",gap:20,alignItems:"start"},children:[N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[N.jsxs("div",{className:"panel",children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".06em",marginBottom:10},children:"ELEMENTS"}),N.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:bT.map(p=>N.jsxs("div",{draggable:!0,onDragStart:()=>g(p),className:"elem-chip",style:{background:`${p.color}22`,borderColor:`${p.color}55`,color:p.color},children:[N.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:p.color,display:"inline-block"}}),p.sym]},p.sym))})]}),N.jsxs("div",{className:"panel",children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".06em",marginBottom:10},children:"FUNCTIONAL GROUPS"}),N.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:CT.map(p=>N.jsxs("div",{draggable:!0,onDragStart:()=>g(p),title:p.desc,className:"elem-chip",style:{background:`${p.color}22`,borderColor:`${p.color}55`,color:p.color,justifyContent:"flex-start",fontSize:12},children:[N.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:p.color,display:"inline-block",flexShrink:0}}),N.jsx("span",{style:{fontWeight:700,minWidth:42},children:p.sym}),N.jsx("span",{style:{fontSize:10,color:"#6a8ea8",marginLeft:4},children:p.name})]},p.sym))})]})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[N.jsx("div",{ref:h,className:`designer-slot${r?" over":""}`,onDragOver:p=>{p.preventDefault(),o(!0)},onDragLeave:()=>o(!1),onDrop:p=>{p.preventDefault(),_()},children:t.length===0?N.jsxs("div",{style:{textAlign:"center",color:"#3a5066",userSelect:"none"},children:[N.jsx("div",{style:{fontSize:40,marginBottom:10},children:"⚗️"}),N.jsx("div",{style:{fontSize:14,marginBottom:4},children:"Drop components here"}),N.jsx("div",{style:{fontSize:12},children:"Build your molecule (up to 14 components)"})]}):N.jsxs("div",{style:{width:"100%",padding:16},children:[N.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12},children:t.map(p=>N.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:`${p.color}22`,border:`1px solid ${p.color}66`,borderRadius:8,padding:"6px 10px",fontSize:13,color:p.color,fontWeight:700},children:[p.sym,N.jsx("button",{onClick:()=>y(p.id),style:{background:"none",border:"none",color:"#4a6080",cursor:"pointer",fontSize:14,lineHeight:1,padding:0,marginLeft:2},children:"×"})]},p.id))}),N.jsxs("div",{style:{fontSize:12,color:"#3a5066"},children:[t.length," component",t.length!==1?"s":""," assembled · Click × to remove"]})]})}),N.jsxs("div",{style:{display:"flex",gap:10},children:[N.jsx("button",{className:"btn-solid",onClick:u,disabled:s||t.length===0,style:{opacity:t.length===0?.4:1,flex:1},children:s?N.jsxs(N.Fragment,{children:[N.jsx("span",{className:"thinking-dot"}),N.jsx("span",{className:"thinking-dot"}),N.jsx("span",{className:"thinking-dot"})]}):"🔬 Analyze Pharmacology (AI)"}),N.jsx("button",{className:"btn",onClick:m,style:{opacity:t.length===0?.4:1},children:"Clear"})]}),d&&N.jsx("div",{style:{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",borderRadius:10,padding:14,fontSize:13,color:"#f87171"},children:d}),l&&(()=>{var x;const p=v[l.verdict]||v.INERT;return N.jsxs("div",{className:"fadein panel",style:{border:"1px solid rgba(56,189,248,0.2)"},children:[N.jsxs("div",{style:{background:p.bg,border:`1px solid ${p.border}`,borderRadius:10,padding:"12px 16px",marginBottom:16,display:"flex",alignItems:"center",gap:12},children:[N.jsx("span",{style:{fontSize:26},children:p.icon}),N.jsxs("div",{children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:p.text,letterSpacing:".06em"},children:l.verdict}),N.jsx("div",{style:{fontSize:13,color:p.text,opacity:.9,marginTop:2},children:l.verdict_reason})]})]}),N.jsx("div",{className:"syne",style:{fontSize:20,fontWeight:700,color:"#e8f4ff",marginBottom:16},children:l.name}),N.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14},children:[["🎯 Mechanism of Action",l.moa],["🔗 Target",l.target],["💊 Indication",l.indication],["⚗️ ADME",l.adme]].map(([E,C])=>N.jsxs("div",{style:{background:"rgba(56,189,248,0.04)",border:"1px solid rgba(56,189,248,0.1)",borderRadius:8,padding:"10px 12px"},children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:5},children:E}),N.jsx("div",{style:{fontSize:13,color:"#a8c4dc",lineHeight:1.6},children:C})]},E))}),((x=l.warnings)==null?void 0:x.length)>0&&N.jsxs("div",{style:{background:"rgba(239,68,68,0.07)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:8,padding:"10px 12px",marginBottom:14},children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#f87171",marginBottom:6},children:"⚠️ SAFETY FLAGS"}),l.warnings.map((E,C)=>N.jsxs("div",{style:{fontSize:12,color:"#fca5a5",padding:"3px 0",borderBottom:C<l.warnings.length-1?"1px solid rgba(239,68,68,0.1)":"none"},children:["• ",E]},C))]}),N.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14},children:[N.jsxs("div",{children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:6},children:"📚 SIMILAR APPROVED DRUGS"}),(l.similar_drugs||[]).map((E,C)=>N.jsx("span",{className:"tag",style:{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.25)",color:"#7dd3f8",fontSize:11},children:E},C))]}),N.jsxs("div",{children:[N.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#38bdf8",marginBottom:6},children:"💡 NOVELTY ASSESSMENT"}),N.jsx("div",{style:{fontSize:12,color:"#8ab0c8",lineHeight:1.6},children:l.novelty})]})]})]})})()]})]})]})}const Gr={cardiovascular:"#ef4444",antibiotic:"#22c55e",neuro:"#a855f7",metabolic:"#3b82f6"},RT={cardiovascular:"Cardiovascular",antibiotic:"Antibiotic / Infectious Disease",neuro:"Neurology / CNS",metabolic:"Metabolic / Endocrine"};function PT({onSelect:t,onDesigner:e}){const[n,i]=ot.useState("all"),[r,o]=ot.useState(""),s=["all","cardiovascular","antibiotic","neuro","metabolic"],a=vT.filter(l=>{const c=n==="all"||l.cat===n,d=!r||(l.name+l.brand+l.cls+l.ind).toLowerCase().includes(r.toLowerCase());return c&&d});return N.jsxs("div",{className:"pp",style:{minHeight:"100vh"},children:[N.jsxs("div",{style:{background:"linear-gradient(180deg,rgba(56,189,248,0.06) 0%,transparent 100%)",borderBottom:"1px solid rgba(56,189,248,0.1)",padding:"48px 24px 32px",textAlign:"center"},children:[N.jsx("div",{style:{display:"inline-block",background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.3)",borderRadius:20,padding:"4px 14px",fontSize:11,fontWeight:700,color:"#38bdf8",letterSpacing:".08em",marginBottom:18},children:"PHARMPATH · DRUG DISCOVERY LEARNING SUITE"}),N.jsx("div",{className:"syne",style:{fontSize:42,fontWeight:800,color:"#e8f4ff",lineHeight:1.15,marginBottom:12},children:"From Molecule to Market"}),N.jsx("div",{style:{fontSize:16,color:"#6a8ea8",maxWidth:580,margin:"0 auto 28px"},children:"Explore the complete pharmaceutical lifecycle through interactive 3D molecular visualization, regulatory deep-dives, and AI-powered drug design — with a focus on pharmacogenomics and racial equity in medicine."}),N.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"},children:[N.jsx("button",{className:"btn-solid",onClick:e,style:{fontSize:15,padding:"11px 26px"},children:"⚗️ Open Drug Designer"}),N.jsx("div",{style:{background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:8,padding:"11px 18px",fontSize:13,color:"#34d399"},children:"🧬 Select a drug below to explore its lifecycle →"})]})]}),N.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",padding:"28px 20px"},children:[N.jsxs("div",{style:{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap",alignItems:"center"},children:[s.map(l=>N.jsx("button",{onClick:()=>i(l),className:n===l?"btn-solid":"btn",style:{fontSize:12,padding:"6px 14px",background:n===l&&l!=="all"?`${Gr[l]}22`:"",borderColor:n===l&&l!=="all"?Gr[l]:""},children:l==="all"?"All Drugs":RT[l]},l)),N.jsx("input",{value:r,onChange:l=>o(l.target.value),placeholder:"Search...",style:{marginLeft:"auto",background:"rgba(8,18,40,0.8)",border:"1px solid rgba(56,189,248,0.2)",borderRadius:8,padding:"7px 14px",color:"#ccd9ee",fontSize:13,outline:"none",width:200}})]}),N.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:14},children:a.map(l=>N.jsxs("div",{className:"card",style:{padding:18,cursor:"pointer",borderLeft:`3px solid ${Gr[l.cat]}44`},onClick:()=>t(l),children:[N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[N.jsxs("div",{children:[N.jsx("div",{className:"syne",style:{fontSize:17,fontWeight:700,color:"#e8f4ff"},children:l.name}),N.jsx("div",{style:{fontSize:12,color:"#38bdf8",marginTop:2},children:l.brand})]}),N.jsx("span",{style:{background:`${Gr[l.cat]}22`,border:`1px solid ${Gr[l.cat]}55`,borderRadius:6,padding:"3px 8px",fontSize:10,fontWeight:700,color:Gr[l.cat],flexShrink:0,marginLeft:8},children:l.yr})]}),N.jsx("div",{style:{fontSize:12,color:"#7a9ab8",marginBottom:8,lineHeight:1.5},children:l.ind}),N.jsx("div",{style:{fontSize:11,color:"#4a6080",fontStyle:"italic",marginBottom:10},children:l.cls}),N.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[l.pgx&&N.jsx("span",{style:{background:"rgba(16,185,129,0.12)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#34d399"},children:"🧬 PGx"}),l.id==="bidil"&&N.jsx("span",{style:{background:"rgba(251,191,36,0.12)",border:"1px solid rgba(251,191,36,0.3)",borderRadius:20,padding:"2px 8px",fontSize:10,fontWeight:700,color:"#fbbf24"},children:"★ Race-Specific"}),ft[l.id]&&N.jsx("span",{style:{background:"rgba(56,189,248,0.1)",border:"1px solid rgba(56,189,248,0.25)",borderRadius:20,padding:"2px 8px",fontSize:10,color:"#38bdf8"},children:"3D Viewer"}),N.jsx("span",{style:{background:"rgba(56,189,248,0.05)",border:"1px solid rgba(56,189,248,0.15)",borderRadius:20,padding:"2px 8px",fontSize:10,color:"#4a7090"},children:l.formula||"—"})]})]},l.id))}),a.length===0&&N.jsxs("div",{style:{textAlign:"center",padding:60,color:"#3a5066"},children:[N.jsx("div",{style:{fontSize:32,marginBottom:12},children:"🔍"}),N.jsx("div",{children:"No drugs match your search"})]}),N.jsxs("div",{style:{marginTop:32,background:"linear-gradient(135deg,rgba(16,185,129,0.08),rgba(6,182,212,0.08))",border:"1px solid rgba(16,185,129,0.2)",borderRadius:14,padding:"24px 28px"},children:[N.jsx("div",{className:"syne",style:{fontSize:18,fontWeight:700,color:"#6ee7b7",marginBottom:10},children:"🧬 Pharmacogenomics & Racial Equity in Medicine"}),N.jsxs("div",{style:{fontSize:13,color:"#a7f3d0",lineHeight:1.8,maxWidth:900},children:["Drugs marked ",N.jsx("strong",{style:{color:"#34d399"},children:"PGx"})," have clinically important genetic variants that affect dosing, efficacy, or safety. Many of these variants have different frequencies across ancestral populations—a critical consideration for equitable prescribing. The ",N.jsx("strong",{style:{color:"#fbbf24"},children:"BiDil"})," case study is included as the first FDA-approved race-specific drug, raising fundamental questions about race as a biological proxy in medicine. Throughout this app, pay attention to how underrepresentation in clinical trials creates knowledge gaps that disproportionately affect Black, Hispanic, and other minority patients."]})]})]})]})}function LT({view:t,onHome:e,onDesigner:n}){return N.jsxs("div",{style:{background:"rgba(4,10,24,0.98)",borderBottom:"1px solid rgba(56,189,248,0.12)",padding:"12px 24px",display:"flex",alignItems:"center",gap:14,position:"sticky",top:0,zIndex:200},children:[N.jsxs("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10},children:[N.jsx("div",{style:{width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,rgba(56,189,248,0.3),rgba(16,185,129,0.2))",border:"1px solid rgba(56,189,248,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:"⚗"}),N.jsx("span",{className:"syne",style:{fontSize:16,fontWeight:700,color:"#e8f4ff",letterSpacing:".02em"},children:"PharmPath"})]}),N.jsx("div",{style:{flex:1}}),N.jsx("button",{className:t==="home"?"btn btn-active":"btn",onClick:e,style:{fontSize:12,padding:"5px 14px"},children:"💊 Drug Library"}),N.jsx("button",{className:t==="designer"?"btn btn-active":"btn",onClick:n,style:{fontSize:12,padding:"5px 14px"},children:"⚗️ Designer"})]})}function DT(){const[t,e]=ot.useState("home"),[n,i]=ot.useState(null);ot.useEffect(()=>{if(document.getElementById("pp-css"))return;const a=document.createElement("style");a.id="pp-css",a.textContent=gT,document.head.appendChild(a)},[]);const r=()=>e("home"),o=a=>{i(a),e("drug")},s=()=>e("designer");return N.jsxs("div",{className:"pp",children:[N.jsx(LT,{view:t,onHome:r,onDesigner:s}),t==="home"&&N.jsx(PT,{onSelect:o,onDesigner:s}),t==="drug"&&n&&N.jsx(wT,{drug:n,onBack:r}),t==="designer"&&N.jsx(AT,{})]})}const Cv=document.getElementById("root")||document.body.appendChild(document.createElement("div"));Cv.id="root";Kg(Cv).render(N.jsx(DT,{}));typeof navigator<"u"&&"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
