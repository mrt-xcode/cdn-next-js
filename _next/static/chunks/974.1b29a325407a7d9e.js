"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{98082:function(e,t,r){var n=r(67294),l=r(31808);t.Z=()=>{let[e,t]=n.useState(!1);return n.useEffect(()=>{t((0,l.fk)())},[]),e}},74443:function(e,t,r){r.d(t,{Z:function(){return a},c:function(){return i}});var n=r(67294),l=r(48012);let i=["xxl","xl","lg","md","sm","xs"],s=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),o=e=>{let t=[].concat(i).reverse();return t.forEach((r,n)=>{let l=r.toUpperCase(),i=`screen${l}Min`,s=`screen${l}`;if(!(e[i]<=e[s]))throw Error(`${i}<=${s} fails : !(${e[i]}<=${e[s]})`);if(n<t.length-1){let o=`screen${l}Max`;if(!(e[s]<=e[o]))throw Error(`${s}<=${o} fails : !(${e[s]}<=${e[o]})`);let a=t[n+1].toUpperCase(),c=`screen${a}Min`;if(!(e[o]<=e[c]))throw Error(`${o}<=${c} fails : !(${e[o]}<=${e[c]})`)}}),e};function a(){let[,e]=(0,l.dQ)(),t=s(o(e));return n.useMemo(()=>{let e=new Map,r=-1,n={};return{matchHandlers:{},dispatch:t=>(n=t,e.forEach(e=>e(n)),e.size>=1),subscribe(t){return e.size||this.register(),r+=1,e.set(r,t),t(n),r},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach(e=>{let r=t[e],n=this.matchHandlers[r];null==n||n.mql.removeListener(null==n?void 0:n.listener)}),e.clear()},register(){Object.keys(t).forEach(e=>{let r=t[e],l=t=>{let{matches:r}=t;this.dispatch(Object.assign(Object.assign({},n),{[e]:r}))},i=window.matchMedia(r);i.addListener(l),this.matchHandlers[r]={mql:i,listener:l},l(i)})},responsiveMap:t}},[e])}},31808:function(e,t,r){let n;r.d(t,{fk:function(){return s},jD:function(){return i}});var l=r(98924);let i=()=>(0,l.Z)()&&window.document.documentElement,s=()=>{if(!i())return!1;if(void 0!==n)return n;let e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},15746:function(e,t,r){var n=r(21584);t.Z=n.Z},99134:function(e,t,r){var n=r(67294);let l=(0,n.createContext)({});t.Z=l},21584:function(e,t,r){var n=r(94184),l=r.n(n),i=r(67294),s=r(53124),o=r(99134),a=r(6999),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};let u=["xs","sm","md","lg","xl","xxl"],f=i.forwardRef((e,t)=>{let{getPrefixCls:r,direction:n}=i.useContext(s.E_),{gutter:f,wrap:d,supportFlexGap:p}=i.useContext(o.Z),{prefixCls:$,span:m,order:x,offset:h,push:b,pull:y,className:g,children:v,flex:j,style:w}=e,O=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=r("col",$),[C,Z]=(0,a.c)(E),S={};u.forEach(t=>{let r={},l=e[t];"number"==typeof l?r.span=l:"object"==typeof l&&(r=l||{}),delete O[t],S=Object.assign(Object.assign({},S),{[`${E}-${t}-${r.span}`]:void 0!==r.span,[`${E}-${t}-order-${r.order}`]:r.order||0===r.order,[`${E}-${t}-offset-${r.offset}`]:r.offset||0===r.offset,[`${E}-${t}-push-${r.push}`]:r.push||0===r.push,[`${E}-${t}-pull-${r.pull}`]:r.pull||0===r.pull,[`${E}-rtl`]:"rtl"===n})});let M=l()(E,{[`${E}-${m}`]:void 0!==m,[`${E}-order-${x}`]:x,[`${E}-offset-${h}`]:h,[`${E}-push-${b}`]:b,[`${E}-pull-${y}`]:y},g,S,Z),F={};if(f&&f[0]>0){let I=f[0]/2;F.paddingLeft=I,F.paddingRight=I}if(f&&f[1]>0&&!p){let k=f[1]/2;F.paddingTop=k,F.paddingBottom=k}return j&&(F.flex="number"==typeof j?`${j} ${j} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(j)?`0 0 ${j}`:j,!1!==d||F.minWidth||(F.minWidth=0)),C(i.createElement("div",Object.assign({},O,{style:Object.assign(Object.assign({},F),w),className:M,ref:t}),v))});t.Z=f},92820:function(e,t,r){var n=r(94184),l=r.n(n),i=r(67294),s=r(53124),o=r(98082),a=r(74443),c=r(99134),u=r(6999),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function d(e,t){let[r,n]=i.useState("string"==typeof e?e:""),l=()=>{if("string"==typeof e&&n(e),"object"==typeof e)for(let r=0;r<a.c.length;r++){let l=a.c[r];if(!t[l])continue;let i=e[l];if(void 0!==i){n(i);return}}};return i.useEffect(()=>{l()},[JSON.stringify(e),t]),r}let p=i.forwardRef((e,t)=>{let{prefixCls:r,justify:n,align:p,className:$,style:m,children:x,gutter:h=0,wrap:b}=e,y=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:g,direction:v}=i.useContext(s.E_),[j,w]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[O,E]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),C=d(p,O),Z=d(n,O),S=(0,o.Z)(),M=i.useRef(h),F=(0,a.Z)();i.useEffect(()=>{let e=F.subscribe(e=>{E(e);let t=M.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&w(e)});return()=>F.unsubscribe(e)},[]);let I=g("row",r),[k,D]=(0,u.V)(I),X=(()=>{let e=[void 0,void 0],t=Array.isArray(h)?h:[h,void 0];return t.forEach((t,r)=>{if("object"==typeof t)for(let n=0;n<a.c.length;n++){let l=a.c[n];if(j[l]&&void 0!==t[l]){e[r]=t[l];break}}else e[r]=t}),e})(),L=l()(I,{[`${I}-no-wrap`]:!1===b,[`${I}-${Z}`]:Z,[`${I}-${C}`]:C,[`${I}-rtl`]:"rtl"===v},$,D),N={},P=null!=X[0]&&X[0]>0?-(X[0]/2):void 0,A=null!=X[1]&&X[1]>0?-(X[1]/2):void 0;P&&(N.marginLeft=P,N.marginRight=P),S?[,N.rowGap]=X:A&&(N.marginTop=A,N.marginBottom=A);let[G,W]=X,_=i.useMemo(()=>({gutter:[G,W],wrap:b,supportFlexGap:S}),[G,W,b,S]);return k(i.createElement(c.Z.Provider,{value:_},i.createElement("div",Object.assign({},y,{className:L,style:Object.assign(Object.assign({},N),m),ref:t}),x)))});t.Z=p},6999:function(e,t,r){r.d(t,{V:function(){return u},c:function(){return f}});var n=r(67968),l=r(45503);let i=e=>{let{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},s=e=>{let{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},o=(e,t)=>{let{componentCls:r,gridColumns:n}=e,l={};for(let i=n;i>=0;i--)0===i?(l[`${r}${t}-${i}`]={display:"none"},l[`${r}-push-${i}`]={insetInlineStart:"auto"},l[`${r}-pull-${i}`]={insetInlineEnd:"auto"},l[`${r}${t}-push-${i}`]={insetInlineStart:"auto"},l[`${r}${t}-pull-${i}`]={insetInlineEnd:"auto"},l[`${r}${t}-offset-${i}`]={marginInlineStart:0},l[`${r}${t}-order-${i}`]={order:0}):(l[`${r}${t}-${i}`]={display:"block",flex:`0 0 ${i/n*100}%`,maxWidth:`${i/n*100}%`},l[`${r}${t}-push-${i}`]={insetInlineStart:`${i/n*100}%`},l[`${r}${t}-pull-${i}`]={insetInlineEnd:`${i/n*100}%`},l[`${r}${t}-offset-${i}`]={marginInlineStart:`${i/n*100}%`},l[`${r}${t}-order-${i}`]={order:i});return l},a=(e,t)=>o(e,t),c=(e,t,r)=>({[`@media (min-width: ${t}px)`]:Object.assign({},a(e,r))}),u=(0,n.Z)("Grid",e=>[i(e)]),f=(0,n.Z)("Grid",e=>{let t=(0,l.TS)(e,{gridColumns:24}),r={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[s(t),a(t,""),a(t,"-xs"),Object.keys(r).map(e=>c(t,r[e],e)).reduce((e,t)=>Object.assign(Object.assign({},e),t),{})]})},71230:function(e,t,r){var n=r(92820);t.Z=n.Z},80974:function(e,t,r){r.r(t);var n=r(85893),l=r(17594),i=r(71230),s=r(15746);r(67294),t.default=function(e){let{data:t}=e;return(0,n.jsx)(i.Z,{children:(0,n.jsxs)(s.Z,{span:24,children:[(0,n.jsx)(l.ZX,{label:"Name",value:t.name,color:"#D3D3D3"}),(0,n.jsx)(l.ZX,{label:"Description",value:t.description,color:"#FFFFFF"}),(0,n.jsx)(l.ZX,{label:"Province",value:t.provinsi,color:"#D3D3D3"}),(0,n.jsx)(l.ZX,{label:"City",value:t.kota,color:"#FFFFFF"})]})})}}}]);
//# sourceMappingURL=974.1b29a325407a7d9e.js.map