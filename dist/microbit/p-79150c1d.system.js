var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function l(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(l,s)}o((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return o([e,t])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:false,cmpDidLoad:false,cmpDidUnload:false,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:false,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:false,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:false,propNumber:true,propString:true,propMutable:true,reflect:false,scoped:false,shadowDom:false,slot:true,slotRelocation:true,state:true,style:false,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="microbit";var i=window;var l=document;var s={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=false;var f=new WeakMap;var u=function(e){return f.get(e)};var $=e("r",function(e,t){return f.set(t.$lazyInstance$=e,t)});var c=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return f.set(e,t)}};var v=function(e,t){return t in e};var d=function(e){return console.error(e)};var h=new Map;var m=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var l=h.get(i);if(l){return l[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{h.set(i,e)}return e[a]},d)};var p=i.__stencil_cssshim;var g=0;var y=false;var b=[];var w=[];var x=[];var R=function(e,t){return function(r){e.push(r);if(!y){y=true;if(t&&s.$flags$&4){N(k)}else{s.raf(k)}}}};var _=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){d(e)}}e.length=0};var T=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){d(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var k=function(){g++;_(b);var e=(s.$flags$&6)===2?performance.now()+10*Math.ceil(g*(1/22)):Infinity;T(w,e);T(x,e);if(w.length>0){x.push.apply(x,w);w.length=0}if(y=b.length+w.length+x.length>0){s.raf(k)}else{g=0}};var N=function(e){return Promise.resolve().then(e)};var S=R(w,true);var L={};var C=function(e){return e!=null};var E=function(e){return e.toLowerCase()};var j=function(e){return["object","function"].includes(typeof e)};function A(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var U=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(l.querySelectorAll("script")).find(function(e){return e.src.includes("/"+a+".esm.js")||e.getAttribute("data-namespace")===a});n=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,i.location.href));B(n.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-9725f31b.system.js")];case 2:s.sent();s.label=3;case 3:return[2,n.href]}})})});var B=function(e){var t=A(a);try{i[t]=new Function("w","return import(w);")}catch(n){var r=new Map;i[t]=function(n){var a=new URL(n,e).href;var s=r.get(a);if(!s){var o=l.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise(function(e){o.onload=function(){e(i[t].m);o.remove()}});r.set(a,s);l.head.appendChild(o)}return s}}};var O="hydrated";var M=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var l=false;var s;var o;var f=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!j(a)){a=String(a)}if(i&&l){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}l=i}}};u(r);if(t){{s=t.key||undefined}{o=t.name}{var $=t.className||t.class;if($){t.class=typeof $!=="object"?$:Object.keys($).filter(function(e){return $[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,z)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=s}{c.$name$=o}return c});var D={};var I=function(e){return e&&e.$tag$===D};var z={forEach:function(e,t){return e.map(F).forEach(t)},map:function(e,t){return e.map(F).map(t).map(V)}};var F=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var V=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var W=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var l=H(r);var o=H(e.className).filter(function(e){return!l.includes(e)});e.className=o.concat(H(n).filter(function(e){return!o.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!v(e,t)){if(v(e,E(t))){t=E(t.substring(2))}else{t=E(t[2])+t.substring(3)}if(r){s.rel(e,t,r,false)}if(n){s.ael(e,t,n,false)}}else{var u=v(e,t);var $=j(n);if((u||$&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!$){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var H=function(e){return!e?[]:e.split(" ")};var q=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||L;var l=t.$attrs$||L;{for(n in i){if(l[n]==null&&i[n]!=null){W(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){W(a,n,i[n],l[n],r,t.$flags$)}};var Q;var G;var K;var J=false;var X=false;var Y=false;var Z=false;var ee=function(e,t,r,n){var a=t.$children$[r];var i=0;var s;var o;var f;if(!J){Y=true;if(a.$tag$==="slot"){if(Q){n.classList.add(Q+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(C(a.$text$)){a.$elm$=l.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=l.createTextNode("")}else{s=a.$elm$=l.createElement(a.$flags$&2?"slot-fb":a.$tag$);{q(null,a,Z)}if(a.$children$){for(i=0;i<a.$children$.length;++i){o=ee(e,a,i,s);if(o){s.appendChild(o)}}}}{a.$elm$["s-hn"]=K;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=G;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){te(e.$elm$,false)}}}return a.$elm$};var te=function(e,t){s.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==K&&a["s-ol"]){se(a).insertBefore(a,le(a));a["s-ol"].remove();a["s-ol"]=undefined;Y=true}if(t){te(a,t)}}s.$flags$&=~1};var re=function(e,t,r,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var s;for(;a<=i;++a){if(n[a]){s=ee(null,r,a,e);if(s){n[a].$elm$=s;l.insertBefore(s,le(t))}}}};var ne=function(e,t,r,n){for(;t<=r;++t){if(C(e[t])){n=e[t].$elm$;ce(e[t],true);{X=true;if(n["s-ol"]){n["s-ol"].remove()}else{te(n,true)}}n.remove()}}};var ae=function(e,t,r,n){var a=0;var i=0;var l=0;var s=0;var o=t.length-1;var f=t[0];var u=t[o];var $=n.length-1;var c=n[0];var v=n[$];var d;var h;while(a<=o&&i<=$){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(ie(f,c)){oe(f,c);f=t[++a];c=n[++i]}else if(ie(u,v)){oe(u,v);u=t[--o];v=n[--$]}else if(ie(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){te(f.$elm$.parentNode,false)}oe(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--$]}else if(ie(u,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){te(u.$elm$.parentNode,false)}oe(u,c);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(t[s]&&C(t[s].$key$)&&t[s].$key$===c.$key$){l=s;break}}}if(l>=0){h=t[l];if(h.$tag$!==c.$tag$){d=ee(t&&t[i],r,l,e)}else{oe(h,c);t[l]=undefined;d=h.$elm$}c=n[++i]}else{d=ee(t&&t[i],r,i,e);c=n[++i]}if(d){{se(f.$elm$).insertBefore(d,le(f.$elm$))}}}}if(a>o){re(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){ne(t,a,o)}};var ie=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var le=function(e){return e&&e["s-ol"]||e};var se=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var oe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!C(t.$text$)){{if(t.$tag$==="slot");else{q(e,t,Z)}}if(C(n)&&C(a)){ae(r,n,t,a)}else if(C(a)){if(C(e.$text$)){r.textContent=""}re(r,null,t,a,0,a.length-1)}else if(C(n)){ne(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var fe=function(e,t,r,n,a,i,l,s){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(l!==""){if(s===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}fe(t)}}};var ue=[];var $e=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var l;var s;var o;var f;for(r=t.length;n<r;n++){l=t[n];if(l["s-sr"]&&(s=l["s-cr"])){o=s.parentNode.childNodes;f=l["s-sn"];for(a=o.length-1;a>=0;a--){s=o[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==l["s-hn"]){i=s.nodeType;if((i===3||i===8)&&f===""||i===1&&s.getAttribute("slot")===null&&f===""||i===1&&s.getAttribute("slot")===f){if(!ue.some(function(e){return e.nodeToRelocate===s})){X=true;s["s-sn"]=f;ue.push({slotRefNode:l,nodeToRelocate:s})}}}}}if(l.nodeType===1){$e(l)}}};var ce=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ce(e,t)})}};var ve=function(e,t,r,n){K=E(e.tagName);var a=t.$vnode$||{$flags$:0};var i=I(n)?n:M(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e;{G=e["s-cr"];J=o;Y=X=false}oe(a,i);{if(Y){$e(i.$elm$);for(var f=0;f<ue.length;f++){var u=ue[f];if(!u.nodeToRelocate["s-ol"]){var $=l.createTextNode("");$["s-nr"]=u.nodeToRelocate;u.nodeToRelocate.parentNode.insertBefore(u.nodeToRelocate["s-ol"]=$,u.nodeToRelocate)}}s.$flags$|=1;for(var f=0;f<ue.length;f++){var u=ue[f];var c=u.slotRefNode.parentNode;var v=u.slotRefNode.nextSibling;var $=u.nodeToRelocate["s-ol"];while($=$.previousSibling){var d=$["s-nr"];if(d&&d["s-sn"]===u.nodeToRelocate["s-sn"]&&c===d.parentNode){d=d.nextSibling;if(!d||!d["s-nr"]){v=d;break}}}if(!v&&c!==u.nodeToRelocate.parentNode||u.nodeToRelocate.nextSibling!==v){if(u.nodeToRelocate!==v){c.insertBefore(u.nodeToRelocate,v)}}}s.$flags$&=~1}if(X){fe(i.$elm$)}ue.length=0}};var de=function(e,t){return e&&e.then?e.then(t):t()};var he=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i;var l=function(){return me(e,t,r,a)};return de(i,function(){return S(l)})};var me=function(e,t,r,n,a){{t.$flags$&=~16}{{t.$flags$|=4;try{ve(e,t,r,n.render&&n.render())}catch(e){d(e)}t.$flags$&=~4}}if(p){p.updateHost(e)}{t.$flags$|=2}pe(e,t)};var pe=function(e,t,r){if(!e["s-al"]){var n=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(O)}{t.$onReadyResolve$(e)}if(!n){l.documentElement.classList.add(O);{setTimeout(function(){return s.$flags$|=2},999)}}}}};var ge=function(e,t){{var r=u(e);if(r.$flags$&2){he(e,r,t)}}};var ye=function(e){if((s.$flags$&1)===0){var t=u(e);if(p){p.removeHost(e)}}};var be=function(e,t){if(e!=null&&!j(e)){if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var we=function(e,t){return u(e).$instanceValues$.get(t)};var xe=function(e,t,r,n){var a=u(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var s=a.$flags$;r=be(r,n.$members$[t][0]);if(r!==l&&(!(s&8)||l===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&s&128){var o=n.$watchers$[t];if(o){o.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,l,t)}catch(e){d(e)}})}}if((s&(4|2|16))===2){he(i,a,n)}}}};var Re=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return we(this,n)},set:function(e){xe(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;s.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var _e=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(a){switch(a.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=m(n);if(!i.then)return[3,2];return[4,i];case 1:i=a.sent();a.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}Re(i,n,2);i.isProxied=true}{t.$flags$|=8}try{new i(t)}catch(e){d(e)}{t.$flags$&=~8}{t.$flags$|=128}a.label=3;case 3:r=function(){return he(e,t,n)};{r()}return[2]}})})};var Te=function(e,t){if((s.$flags$&1)===0){var r=u(e);if(!(r.$flags$&1)){r.$flags$|=1;var a=void 0;if(!a){if(t.$flags$&4||n.shadowDom){ke(e)}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{_e(e,r,t)}}}};var ke=function(e,t){var r;{r=""}t=e["s-cr"]=l.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ne=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=l.head;var o=i.customElements;var f=a.querySelector("meta[charset]");var $=l.createElement("style");Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"./",l.baseURI).href;if(t.syncQueue){s.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$watchers$={}}var i=a.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;c(t);return r}t.prototype.connectedCallback=function(){var e=this;s.jmp(function(){return Te(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;s.jmp(function(){return ye(e)})};t.prototype["s-init"]=function(){var e=u(this);if(e.$lazyInstance$){pe(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){ge(this,a)};t.prototype.componentOnReady=function(){return u(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!o.get(i)){r.push(i);o.define(i,Re(l,a,1))}})});$.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";$.setAttribute("data-styles","");a.insertBefore($,f?f.nextSibling:a.firstChild)});var Se=e("g",function(e){return u(e).$hostElement$})}}});