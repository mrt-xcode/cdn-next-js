(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1332],{98082:function(e,t,n){"use strict";var r=n(67294),l=n(31808);t.Z=()=>{let[e,t]=r.useState(!1);return r.useEffect(()=>{t((0,l.fk)())},[]),e}},74443:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},c:function(){return i}});var r=n(67294),l=n(48012);let i=["xxl","xl","lg","md","sm","xs"],o=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),s=e=>{let t=[].concat(i).reverse();return t.forEach((n,r)=>{let l=n.toUpperCase(),i=`screen${l}Min`,o=`screen${l}`;if(!(e[i]<=e[o]))throw Error(`${i}<=${o} fails : !(${e[i]}<=${e[o]})`);if(r<t.length-1){let s=`screen${l}Max`;if(!(e[o]<=e[s]))throw Error(`${o}<=${s} fails : !(${e[o]}<=${e[s]})`);let a=t[r+1].toUpperCase(),u=`screen${a}Min`;if(!(e[s]<=e[u]))throw Error(`${s}<=${u} fails : !(${e[s]}<=${e[u]})`)}}),e};function a(){let[,e]=(0,l.dQ)(),t=o(s(e));return r.useMemo(()=>{let e=new Map,n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach(e=>e(r)),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach(e=>{let n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)}),e.clear()},register(){Object.keys(t).forEach(e=>{let n=t[e],l=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},i=window.matchMedia(n);i.addListener(l),this.matchHandlers[n]={mql:i,listener:l},l(i)})},responsiveMap:t}},[e])}},31808:function(e,t,n){"use strict";let r;n.d(t,{fk:function(){return o},jD:function(){return i}});var l=n(98924);let i=()=>(0,l.Z)()&&window.document.documentElement,o=()=>{if(!i())return!1;if(void 0!==r)return r;let e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),r=1===e.scrollHeight,document.body.removeChild(e),r}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},65223:function(e,t,n){"use strict";n.d(t,{RV:function(){return a},Rk:function(){return u},Ux:function(){return d},aM:function(){return c},q3:function(){return o},qI:function(){return s}});var r=n(18335),l=n(98423),i=n(67294);let o=i.createContext({labelAlign:"right",vertical:!1,itemRef(){}}),s=i.createContext(null),a=e=>{let t=(0,l.Z)(e,["prefixCls"]);return i.createElement(r.RV,Object.assign({},t))},u=i.createContext({prefixCls:""}),c=i.createContext({}),d=e=>{let{children:t,status:n,override:r}=e,l=(0,i.useContext)(c),o=(0,i.useMemo)(()=>{let e=Object.assign({},l);return r&&delete e.isFormItemInput,n&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e},[n,r,l]);return i.createElement(c.Provider,{value:o},t)}},99134:function(e,t,n){"use strict";var r=n(67294);let l=(0,r.createContext)({});t.Z=l},21584:function(e,t,n){"use strict";var r=n(94184),l=n.n(r),i=n(67294),o=n(53124),s=n(99134),a=n(6999),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};let c=["xs","sm","md","lg","xl","xxl"],d=i.forwardRef((e,t)=>{let{getPrefixCls:n,direction:r}=i.useContext(o.E_),{gutter:d,wrap:f,supportFlexGap:p}=i.useContext(s.Z),{prefixCls:m,span:A,order:g,offset:x,push:h,pull:b,className:$,children:y,flex:v,style:E}=e,j=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",m),[O,I]=(0,a.c)(w),C={};c.forEach(t=>{let n={},l=e[t];"number"==typeof l?n.span=l:"object"==typeof l&&(n=l||{}),delete j[t],C=Object.assign(Object.assign({},C),{[`${w}-${t}-${n.span}`]:void 0!==n.span,[`${w}-${t}-order-${n.order}`]:n.order||0===n.order,[`${w}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${w}-${t}-push-${n.push}`]:n.push||0===n.push,[`${w}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${w}-rtl`]:"rtl"===r})});let R=l()(w,{[`${w}-${A}`]:void 0!==A,[`${w}-order-${g}`]:g,[`${w}-offset-${x}`]:x,[`${w}-push-${h}`]:h,[`${w}-pull-${b}`]:b},$,C,I),S={};if(d&&d[0]>0){let U=d[0]/2;S.paddingLeft=U,S.paddingRight=U}if(d&&d[1]>0&&!p){let N=d[1]/2;S.paddingTop=N,S.paddingBottom=N}return v&&(S.flex="number"==typeof v?`${v} ${v} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(v)?`0 0 ${v}`:v,!1!==f||S.minWidth||(S.minWidth=0)),O(i.createElement("div",Object.assign({},j,{style:Object.assign(Object.assign({},S),E),className:R,ref:t}),y))});t.Z=d},92820:function(e,t,n){"use strict";var r=n(94184),l=n.n(r),i=n(67294),o=n(53124),s=n(98082),a=n(74443),u=n(99134),c=n(6999),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function f(e,t){let[n,r]=i.useState("string"==typeof e?e:""),l=()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<a.c.length;n++){let l=a.c[n];if(!t[l])continue;let i=e[l];if(void 0!==i){r(i);return}}};return i.useEffect(()=>{l()},[JSON.stringify(e),t]),n}let p=i.forwardRef((e,t)=>{let{prefixCls:n,justify:r,align:p,className:m,style:A,children:g,gutter:x=0,wrap:h}=e,b=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:$,direction:y}=i.useContext(o.E_),[v,E]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[j,w]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),O=f(p,j),I=f(r,j),C=(0,s.Z)(),R=i.useRef(x),S=(0,a.Z)();i.useEffect(()=>{let e=S.subscribe(e=>{w(e);let t=R.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&E(e)});return()=>S.unsubscribe(e)},[]);let U=$("row",n),[N,T]=(0,c.V)(U),M=(()=>{let e=[void 0,void 0],t=Array.isArray(x)?x:[x,void 0];return t.forEach((t,n)=>{if("object"==typeof t)for(let r=0;r<a.c.length;r++){let l=a.c[r];if(v[l]&&void 0!==t[l]){e[n]=t[l];break}}else e[n]=t}),e})(),Z=l()(U,{[`${U}-no-wrap`]:!1===h,[`${U}-${I}`]:I,[`${U}-${O}`]:O,[`${U}-rtl`]:"rtl"===y},m,T),B={},k=null!=M[0]&&M[0]>0?-(M[0]/2):void 0,G=null!=M[1]&&M[1]>0?-(M[1]/2):void 0;k&&(B.marginLeft=k,B.marginRight=k),C?[,B.rowGap]=M:G&&(B.marginTop=G,B.marginBottom=G);let[D,z]=M,P=i.useMemo(()=>({gutter:[D,z],wrap:h,supportFlexGap:C}),[D,z,h,C]);return N(i.createElement(u.Z.Provider,{value:P},i.createElement("div",Object.assign({},b,{className:Z,style:Object.assign(Object.assign({},B),A),ref:t}),g)))});t.Z=p},6999:function(e,t,n){"use strict";n.d(t,{V:function(){return c},c:function(){return d}});var r=n(67968),l=n(45503);let i=e=>{let{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{let{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,t)=>{let{componentCls:n,gridColumns:r}=e,l={};for(let i=r;i>=0;i--)0===i?(l[`${n}${t}-${i}`]={display:"none"},l[`${n}-push-${i}`]={insetInlineStart:"auto"},l[`${n}-pull-${i}`]={insetInlineEnd:"auto"},l[`${n}${t}-push-${i}`]={insetInlineStart:"auto"},l[`${n}${t}-pull-${i}`]={insetInlineEnd:"auto"},l[`${n}${t}-offset-${i}`]={marginInlineStart:0},l[`${n}${t}-order-${i}`]={order:0}):(l[`${n}${t}-${i}`]={display:"block",flex:`0 0 ${i/r*100}%`,maxWidth:`${i/r*100}%`},l[`${n}${t}-push-${i}`]={insetInlineStart:`${i/r*100}%`},l[`${n}${t}-pull-${i}`]={insetInlineEnd:`${i/r*100}%`},l[`${n}${t}-offset-${i}`]={marginInlineStart:`${i/r*100}%`},l[`${n}${t}-order-${i}`]={order:i});return l},a=(e,t)=>s(e,t),u=(e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},a(e,n))}),c=(0,r.Z)("Grid",e=>[i(e)]),d=(0,r.Z)("Grid",e=>{let t=(0,l.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),a(t,""),a(t,"-xs"),Object.keys(n).map(e=>u(t,n[e],e)).reduce((e,t)=>Object.assign(Object.assign({},e),t),{})]})},10110:function(e,t,n){"use strict";var r=n(67294),l=n(76745),i=n(24457);let o=(e,t)=>{let n=r.useContext(l.Z),o=r.useMemo(()=>{var r;let l=t||i.Z[e],o=null!==(r=null==n?void 0:n[e])&&void 0!==r?r:{};return Object.assign(Object.assign({},"function"==typeof l?l():l),o||{})},[e,t,n]),s=r.useMemo(()=>{let e=null==n?void 0:n.locale;return(null==n?void 0:n.exist)&&!e?i.Z.locale:e},[n]);return[o,s]};t.Z=o},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},4173:function(e,t,n){"use strict";n.d(t,{BR:function(){return f},ri:function(){return d}});var r=n(94184),l=n.n(r),i=n(50344),o=n(67294),s=n(53124),a=n(51916),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};let c=o.createContext(null),d=(e,t)=>{let n=o.useContext(c),r=o.useMemo(()=>{if(!n)return"";let{compactDirection:r,isFirstItem:i,isLastItem:o}=n,s="vertical"===r?"-vertical-":"-";return l()({[`${e}-compact${s}item`]:!0,[`${e}-compact${s}first-item`]:i,[`${e}-compact${s}last-item`]:o,[`${e}-compact${s}item-rtl`]:"rtl"===t})},[e,t,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:r}},f=e=>{let{children:t}=e;return o.createElement(c.Provider,{value:null},t)},p=e=>{var{children:t}=e,n=u(e,["children"]);return o.createElement(c.Provider,{value:n},t)},m=e=>{let{getPrefixCls:t,direction:n}=o.useContext(s.E_),{size:r="middle",direction:d,block:f,prefixCls:m,className:A,rootClassName:g,children:x}=e,h=u(e,["size","direction","block","prefixCls","className","rootClassName","children"]),b=t("space-compact",m),[$,y]=(0,a.Z)(b),v=l()(b,y,{[`${b}-rtl`]:"rtl"===n,[`${b}-block`]:f,[`${b}-vertical`]:"vertical"===d},A,g),E=o.useContext(c),j=(0,i.Z)(x),w=o.useMemo(()=>j.map((e,t)=>{let n=e&&e.key||`${b}-item-${t}`;return o.createElement(p,{key:n,compactSize:r,compactDirection:d,isFirstItem:0===t&&(!E||(null==E?void 0:E.isFirstItem)),isLastItem:t===j.length-1&&(!E||(null==E?void 0:E.isLastItem))},e)}),[r,j,E]);return 0===j.length?null:$(o.createElement("div",Object.assign({className:v},h),w))};t.ZP=m},51916:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67968);let l=e=>{let{componentCls:t}=e;return{[t]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},i=e=>{let{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item`]:{"&:empty":{display:"none"}}}}};var o=(0,r.Z)("Space",e=>[i(e),l(e)])},80110:function(e,t,n){"use strict";function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0},{componentCls:n}=e,r=`${n}-compact`;return{[r]:Object.assign(Object.assign({},function(e,t,n){let{focusElCls:r,focus:l,borderElCls:i}=n,o=i?"> *":"",s=["hover",l?"focus":null,"active"].filter(Boolean).map(e=>`&:${e} ${o}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:-e.lineWidth},"&-item":Object.assign(Object.assign({[s]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${o}`]:{zIndex:0}})}}(e,r,t)),function(e,t,n){let{borderElCls:r}=n,l=r?`> ${r}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${l}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${l}, &${e}-sm ${l}, &${e}-lg ${l}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${l}, &${e}-sm ${l}, &${e}-lg ${l}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}(n,r,t))}}n.d(t,{c:function(){return r}})},88939:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(85893),l=n(67294),i={src:"https://cdn.jsdelivr.net/gh/iyan-x-code/cdn-next-js@1.0.0/_next/static/media/marker-icon-2x.93fdb12c.png",height:82,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoUlEQVR42mNwq5rH7zb5+FLdiadfuU4+vty9ZqEAg2P/0R1+M87/b1xz+b8/kAbydzIwthz7373+yt//////m7Dx6l+G5mP/GfSbD17xmXD2/8wtV377A2k9IJ/BunZDglrjif8MpSd/qTac+G9TuyGWAQQMavcd1607/d+wdt8xBhjQL13nplF58D+QdoUL6iQUMesXr2jQSShkZmBgYAAAnntNXpTByKMAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},o={src:"https://cdn.jsdelivr.net/gh/iyan-x-code/cdn-next-js@1.0.0/_next/static/media/marker-icon.d577052a.png",height:41,width:25,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAoUlEQVR42mNwK5vB4zr5+EL9iadfAulFbhVzeBkc+45u8Jtx/n/Dmiv//YE0kL+JgbPl2N/2tZf//f///2/X+iv/GFuO/mUwaD54ybv/zP/pmy//9p1w5r9+88GLDFa1GxLUGk/8Zyg9+Uut4cR/q5oNcQwgYFCz97hu3Zn/IJoBBvRL17lrVB78r1+61g0uqJvcyKJfvLxJN6mKhYGBgQEAd2dNMQ5zpzwAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},s={src:"https://cdn.jsdelivr.net/gh/iyan-x-code/cdn-next-js@1.0.0/_next/static/media/marker-shadow.612e3b52.png",height:41,width:41,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42o3BsQmAMAAAsLRYinSWbkJXL7C46+QgOHiB/5/gCyZ+CgZZEgUgmTWTYgCaXbeoMmSXx6mrEkS316EZBQJWmyLCB7UNBGZ+qNRZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};n(65254);var a=n(73935);let u=(0,l.createContext)(null),c=u.Provider;function d(){let e=(0,l.useContext)(u);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function f(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function p(e,t){return null==t?function(t,n){let r=(0,l.useRef)();return r.current||(r.current=e(t,n)),r}:function(n,r){let i=(0,l.useRef)();i.current||(i.current=e(n,r));let o=(0,l.useRef)(n),{instance:s}=i.current;return(0,l.useEffect)(function(){o.current!==n&&(t(s,n,o.current),o.current=n)},[s,n,r]),i}}function m(e,t){let n=(0,l.useRef)(t);(0,l.useEffect)(function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function A(e,t){let n=(0,l.useRef)();(0,l.useEffect)(function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}},[e,t])}function g(e,t){let n=e.pane??t.pane;return n?{...e,pane:n}:e}function x(e,t){(0,l.useEffect)(function(){let n=t.layerContainer??t.map;return n.addLayer(e.instance),function(){t.layerContainer?.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}var h=n(45243);let b=function(e,t){var n;let r=p(e,t);return n=function(e){let t=d(),n=r(g(e,t),t);return A(n.current,e.eventHandlers),x(n.current,t),function(e,t){let n=(0,l.useRef)();(0,l.useEffect)(function(){if(t.pathOptions!==n.current){let r=t.pathOptions??{};e.instance.setStyle(r),n.current=r}},[e,t])}(n.current,e),n},(0,l.forwardRef)(function(e,t){let{instance:r,context:i}=n(e).current;return(0,l.useImperativeHandle)(t,()=>r),null==e.children?null:l.createElement(c,{value:i},e.children)})}(function({data:e,...t},n){let r=new h.GeoJSON(e,t);return f(r,Object.freeze({...n,overlayContainer:r}))},function(e,t,n){t.style!==n.style&&(null==t.style?e.resetStyle():e.setStyle(t.style))}),$=function(e,t){var n;let r=p(e);return n=function(e,n){let l=d(),i=r(g(e,l),l);return m(l.map,e.attribution),A(i.current,e.eventHandlers),t(i.current,l,e,n),i},(0,l.forwardRef)(function(e,t){let[r,i]=(0,l.useState)(!1),{instance:o}=n(e,i).current;(0,l.useImperativeHandle)(t,()=>o),(0,l.useEffect)(function(){r&&o.update()},[o,r,e.children]);let s=o._contentNode;return s?(0,a.createPortal)(e.children,s):null})}(function(e,t){let n=new h.Tooltip(e,t.overlayContainer);return f(n,t)},function(e,t,{position:n},r){(0,l.useEffect)(function(){let l=t.overlayContainer;if(null==l)return;let{instance:i}=e,o=e=>{e.tooltip===i&&(null!=n&&i.setLatLng(n),i.update(),r(!0))},s=e=>{e.tooltip===i&&r(!1)};return l.on({tooltipopen:o,tooltipclose:s}),l.bindTooltip(i),function(){l.off({tooltipopen:o,tooltipclose:s}),null!=l._map&&l.unbindTooltip()}},[e,t,r,n])});function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let v=(0,l.forwardRef)(function({bounds:e,boundsOptions:t,center:n,children:r,className:i,id:o,placeholder:s,style:a,whenReady:u,zoom:d,...f},p){let[m]=(0,l.useState)({className:i,id:o,style:a}),[A,g]=(0,l.useState)(null);(0,l.useImperativeHandle)(p,()=>A?.map??null,[A]);let x=(0,l.useCallback)(r=>{if(null!==r&&null===A){let l=new h.Map(r,f);null!=n&&null!=d?l.setView(n,d):null!=e&&l.fitBounds(e,t),null!=u&&l.whenReady(u),g(Object.freeze({__version:1,map:l}))}},[]);(0,l.useEffect)(()=>()=>{A?.map.remove()},[A]);let b=A?l.createElement(c,{value:A},r):s??null;return l.createElement("div",y({},m,{ref:x}),b)}),E=function(e,t){var n;let r=p(e,t);return n=function(e){let t=d(),n=r(g(e,t),t);return m(t.map,e.attribution),A(n.current,e.eventHandlers),x(n.current,t),n},(0,l.forwardRef)(function(e,t){let{instance:r}=n(e).current;return(0,l.useImperativeHandle)(t,()=>r),null})}(function({url:e,...t},n){let r=new h.TileLayer(e,g(t,n));return f(r,n)},function(e,t,n){!function(e,t,n){let{opacity:r,zIndex:l}=t;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=l&&l!==n.zIndex&&e.setZIndex(l)}(e,t,n);let{url:r}=t;null!=r&&r!==n.url&&e.setUrl(r)});var j=n(7780),w=n(71230),O=n(15746);let I=e=>{let{data:t}=e,{Text:n,Title:a}=j.Z;(0,l.useEffect)(()=>{u()},[]);let u=async()=>{delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:i.src,iconUrl:o.src,shadowUrl:s.src})},c={ACEH:"#0000FF",BALI:"blue",BANTEN:"#DC143C",BENGKULU:"#8B0000","DI YOGYAKARTA":"#9ACD32","DKI JAKARTA":"#9400D3",GORONTALO:"yellow",JAMBI:"red","JAWA BARAT":"#945a11","JAWA TENGAH":"#FFD700","JAWA TIMUR":"#808000","KALIMANTAN BARAT ":"red","KALIMANTAN SELATAN":"yellow","KALIMANTAN TENGAH":"purple","KALIMANTAN TIMUR":"green","KALIMANTAN UTARA":"blue","SUMATRA UTARA":"orange","KEPULAUAN BANGKA BELITUNG":"yellow","KALIMANTAN RIAU":"grey",LAMPUNG:"pink",MALUKU:"black","MALUKU UTARA":"yellow","NUSA TENGGARA BARAT":"red","NUSA TENGGARA TIMUR":"purple",PAPUA:"green","PAPUA BARAT":"blue",RIAU:"orange","SULAWESI BARAT":"brown","SULAWESI TENGAH":"pink","SULAWESI TENGGARA":"#94D3D3","SULAWESI UTARA":"yellow","SUMATERA BARAT":"red","SUMATERA SELATAN":"#D2691E"};return(0,r.jsxs)(r.Fragment,{children:[t.length>0&&(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsx)(w.Z,{style:{position:"absolute",bottom:"12px",left:"12px",zIndex:1e3,background:"rgba(255, 255, 255, 0.8)",padding:"5px",fontSize:"12px"},children:(0,r.jsx)(w.Z,{style:{width:"200px",lineHeight:"15px"},children:t.map(e=>{let t=e.properties.id;return(0,r.jsxs)(w.Z,{style:{width:"100%",marginTop:-4,marginBottom:-20},gutter:4,children:[(0,r.jsx)(O.Z,{span:3,children:(0,r.jsx)(a,{style:{backgroundColor:c[e.properties.name],width:"15px",height:"15px",marginTop:4},children:"\xa0"})}),(0,r.jsx)(O.Z,{span:14,children:(0,r.jsx)(n,{children:e.properties.name})}),(0,r.jsx)(O.Z,{span:7,children:(0,r.jsx)(n,{style:{float:"right"},children:e.properties.total})})]},t)})})})}),(0,r.jsxs)(v,{center:[-1.681488,113.382355],zoom:5,style:{height:"500px",width:"100%"},children:[(0,r.jsx)(E,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.length>0&&t.map(e=>{let t=e.properties.id,n={weight:2,color:c[e.properties.name],opacity:1};return(0,r.jsx)(b,{data:e.geometry,style:n,children:(0,r.jsxs)($,{permanent:!0,sticky:!0,children:[(0,r.jsxs)("div",{children:["Provinsi: ",e.properties.name]}),(0,r.jsxs)("div",{children:["Total Asset: ",e.properties.total]})]})},t)})]})]})};var C=I},65254:function(){}}]);