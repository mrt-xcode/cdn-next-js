(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8404],{92138:function(e,t,n){"use strict";n.r(t),n.d(t,{blue:function(){return T},cyan:function(){return b},geekblue:function(){return Z},generate:function(){return d},gold:function(){return y},green:function(){return C},grey:function(){return A},lime:function(){return x},magenta:function(){return E},orange:function(){return v},presetDarkPalettes:function(){return m},presetPalettes:function(){return f},presetPrimaryColors:function(){return p},purple:function(){return k},red:function(){return h},volcano:function(){return g},yellow:function(){return w}});var a=n(86500),r=n(1350),s=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function o(e){var t=e.r,n=e.g,r=e.b,s=(0,a.py)(t,n,r);return{h:360*s.h,s:s.s,v:s.v}}function i(e){var t=e.r,n=e.g,r=e.b;return"#".concat((0,a.vq)(t,n,r,!1))}function c(e,t,n){var a;return(a=Math.round(e.h)>=60&&240>=Math.round(e.h)?n?Math.round(e.h)-2*t:Math.round(e.h)+2*t:n?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?a+=360:a>=360&&(a-=360),a}function u(e,t,n){var a;return 0===e.h&&0===e.s?e.s:((a=n?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(a=1),n&&5===t&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2)))}function l(e,t,n){var a;return(a=n?e.v+.05*t:e.v-.15*t)>1&&(a=1),Number(a.toFixed(2))}function d(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],a=(0,r.uA)(e),d=5;d>0;d-=1){var p=o(a),f=i((0,r.uA)({h:c(p,d,!0),s:u(p,d,!0),v:l(p,d,!0)}));n.push(f)}n.push(i(a));for(var m=1;m<=4;m+=1){var h=o(a),g=i((0,r.uA)({h:c(h,m),s:u(h,m),v:l(h,m)}));n.push(g)}return"dark"===t.theme?s.map(function(e){var a,s,o,c=e.index,u=e.opacity;return i((a=(0,r.uA)(t.backgroundColor||"#141414"),s=(0,r.uA)(n[c]),o=100*u/100,{r:(s.r-a.r)*o+a.r,g:(s.g-a.g)*o+a.g,b:(s.b-a.b)*o+a.b}))}):n}var p={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},f={},m={};Object.keys(p).forEach(function(e){f[e]=d(p[e]),f[e].primary=f[e][5],m[e]=d(p[e],{theme:"dark",backgroundColor:"#141414"}),m[e].primary=m[e][5]});var h=f.red,g=f.volcano,y=f.gold,v=f.orange,w=f.yellow,x=f.lime,C=f.green,b=f.cyan,T=f.blue,Z=f.geekblue,k=f.purple,E=f.magenta,A=f.grey},49495:function(e,t){"use strict";t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"}},13401:function(e,t,n){"use strict";var a=n(1413),r=n(97685),s=n(4942),o=n(91),i=n(67294),c=n(94184),u=n.n(c),l=n(63017),d=n(58784),p=n(59068),f=n(41755),m=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,p.U)("#1890ff");var h=i.forwardRef(function(e,t){var n,c=e.className,p=e.icon,h=e.spin,g=e.rotate,y=e.tabIndex,v=e.onClick,w=e.twoToneColor,x=(0,o.Z)(e,m),C=i.useContext(l.Z),b=C.prefixCls,T=void 0===b?"anticon":b,Z=C.rootClassName,k=u()(Z,T,(n={},(0,s.Z)(n,"".concat(T,"-").concat(p.name),!!p.name),(0,s.Z)(n,"".concat(T,"-spin"),!!h||"loading"===p.name),n),c),E=y;void 0===E&&v&&(E=-1);var A=(0,f.H9)(w),_=(0,r.Z)(A,2),S=_[0],j=_[1];return i.createElement("span",(0,a.Z)((0,a.Z)({role:"img","aria-label":p.name},x),{},{ref:t,tabIndex:E,onClick:v,className:k}),i.createElement(d.Z,{icon:p,primaryColor:S,secondaryColor:j,style:g?{msTransform:"rotate(".concat(g,"deg)"),transform:"rotate(".concat(g,"deg)")}:void 0}))});h.displayName="AntdIcon",h.getTwoToneColor=p.m,h.setTwoToneColor=p.U,t.Z=h},63017:function(e,t,n){"use strict";var a=(0,n(67294).createContext)({});t.Z=a},58784:function(e,t,n){"use strict";var a=n(91),r=n(1413),s=n(41755),o=["icon","className","onClick","style","primaryColor","secondaryColor"],i={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1},c=function(e){var t=e.icon,n=e.className,c=e.onClick,u=e.style,l=e.primaryColor,d=e.secondaryColor,p=(0,a.Z)(e,o),f=i;if(l&&(f={primaryColor:l,secondaryColor:d||(0,s.pw)(l)}),(0,s.C3)(),(0,s.Kp)((0,s.r)(t),"icon should be icon definiton, but got ".concat(t)),!(0,s.r)(t))return null;var m=t;return m&&"function"==typeof m.icon&&(m=(0,r.Z)((0,r.Z)({},m),{},{icon:m.icon(f.primaryColor,f.secondaryColor)})),(0,s.R_)(m.icon,"svg-".concat(m.name),(0,r.Z)({className:n,onClick:c,style:u,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p))};c.displayName="IconReact",c.getTwoToneColors=function(){return(0,r.Z)({},i)},c.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;i.primaryColor=t,i.secondaryColor=n||(0,s.pw)(t),i.calculated=!!n},t.Z=c},59068:function(e,t,n){"use strict";n.d(t,{U:function(){return o},m:function(){return i}});var a=n(97685),r=n(58784),s=n(41755);function o(e){var t=(0,s.H9)(e),n=(0,a.Z)(t,2),o=n[0],i=n[1];return r.Z.setTwoToneColors({primaryColor:o,secondaryColor:i})}function i(){var e=r.Z.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},69753:function(e,t,n){"use strict";var a=n(1413),r=n(67294),s=n(49495),o=n(13401),i=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s.Z}))};i.displayName="DownloadOutlined",t.Z=r.forwardRef(i)},88484:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(1413),r=n(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},o=n(13401),i=function(e,t){return r.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:s}))};i.displayName="UploadOutlined";var c=r.forwardRef(i)},41755:function(e,t,n){"use strict";n.d(t,{C3:function(){return g},H9:function(){return m},Kp:function(){return l},R_:function(){return function e(t,n,r){return r?o.createElement(t.tag,(0,a.Z)((0,a.Z)({key:n},p(t.attrs)),r),(t.children||[]).map(function(a,r){return e(a,"".concat(n,"-").concat(t.tag,"-").concat(r))})):o.createElement(t.tag,(0,a.Z)({key:n},p(t.attrs)),(t.children||[]).map(function(a,r){return e(a,"".concat(n,"-").concat(t.tag,"-").concat(r))}))}},pw:function(){return f},r:function(){return d},vD:function(){return h}});var a=n(1413),r=n(71002),s=n(92138),o=n(67294),i=n(80334),c=n(44958),u=n(63017);function l(e,t){(0,i.ZP)(e,"[@ant-design/icons] ".concat(t))}function d(e){return"object"===(0,r.Z)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,r.Z)(e.icon)||"function"==typeof e.icon)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var a=e[n];return"class"===n?(t.className=a,delete t.class):t[n]=a,t},{})}function f(e){return(0,s.generate)(e)[0]}function m(e){return e?Array.isArray(e)?e:[e]:[]}var h={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",t=(0,o.useContext)(u.Z).csp;(0,o.useEffect)(function(){(0,c.hq)(e,"@ant-design-icons",{prepend:!0,csp:t})},[])}},78622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/master/asset-status",function(){return n(68337)}])},44320:function(e,t,n){"use strict";n.d(t,{AD:function(){return S},HO:function(){return x},I7:function(){return w},Ko:function(){return _},L5:function(){return Z},OD:function(){return T},OU:function(){return A},V2:function(){return u},XH:function(){return p},Yq:function(){return h},cF:function(){return l},fu:function(){return f},jP:function(){return d},jq:function(){return b},ps:function(){return C},sW:function(){return v},sx:function(){return y},vq:function(){return k}});var a=n(23404),r=n(84105),s=n(17594),o=n(64187);let{confirm:i}=o.Z,c=()=>{},u=async e=>{await (0,a.Z)({method:"GET",url:"api/sidebar"}).then(t=>{e(t.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message)})},l=async(e,t,n,r,o,i)=>{i(!0),await (0,a.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{o(),(0,s.tA)(e.data.status,e.data.message),r()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&n(e.response.data.errors)}).finally(()=>{i(!1)})},d=async(e,t,n,r,o)=>{r(!0),await (0,a.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{(0,s.tA)(e.data.status,e.data.message),o.back()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&n(e.response.data.errors)}).finally(()=>{r(!1)})},p=async(e,t,n,r,o,i,c)=>{await (0,a.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{o(!0),(0,s.tA)(e.data.status,e.data.message),i({}),n({}),r(!1)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&n(e.response.data.errors)}).finally(()=>{c()})},f=(e,t,n)=>{c(i({title:"Do you want to delete these items?",content:"You can't undo this operation",onOk(){m(e,t,n)},onCancel(){}}))},m=async(e,t,n)=>{await a.Z.delete(t+"/"+e).then(e=>{(0,s.lt)(e.data.status,e.data.message)}).catch(e=>{let t="statusText"in e.response,n="message"in e.response.data;t&&n&&(0,s.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{n()})},h=(e,t,n,a,r,s)=>{c(i({title:"Do you want to delete these items?",content:"You can't undo this operation",onOk(){g(e,t,n,a,r,s)},onCancel(){}}))},g=async(e,t,n,r,o,i)=>{await a.Z.delete(t+"/"+e).then(e=>{(0,s.lt)(e.data.status,e.data.message),r(!1),o(!0),i({})}).catch(e=>{let t="statusText"in e.response,n="message"in e.response.data;t&&n&&(0,s.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{n()})},y=async function(e,t,n,r,s){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;e(!0),await (0,a.Z)({method:"GET",url:t,params:{page:n.current_page,keyword:n.keyword,per_page:n.pageSize,id:o}}).then(e=>{r(e.data.data),s(e.data.meta.total)}).catch(e=>{}).finally(()=>{e(!1)})},v=async(e,t)=>{await (0,a.Z)({method:"GET",url:e}).then(e=>{t(e.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message)})},w=async(e,t,n)=>{n(!1),await (0,a.Z)({method:"GET",url:e}).then(e=>{t(e.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{n(!0)})},x=(e,t,n)=>{n({...t,[e.target.id]:e.target.value})},C=async(e,t)=>{await (0,a.Z)({method:"get",url:"api/me"}).then(e=>{t(e.data)}).catch(t=>{401===t.response.status&&e.push("/login"),"statusText"in t.response&&"message"in t.response.data&&(0,s.lt)(t.response.statusText,t.response.data.message)})},b=async(e,t,n)=>{n(!0);let r=e.pathname.split("/"),s="/"+r[1]+"/"+r[2];await (0,a.Z)({method:"GET",url:"api/check-access",params:{path:"//undefined"!=s?s:"/"}}).then(e=>{t(e.data)}).catch(n=>{401===n.response.status&&e.push("/login"),t({viewAny:!1,view:!1,create:!1,update:!1,delete:!1})}).finally(()=>{n(!1)})},T=(e,t)=>{var n=new FileReader;n.onload=e=>{var n=e.target.result;n=new Uint8Array(n);var a=(0,r.ij)(n,{type:"array",cellText:!1,cellDates:!0}),s=r.P6.sheet_to_json(a.Sheets[a.SheetNames[0]],{header:1}).filter(e=>!!e[0]);s.splice(0,2),t(s)},n.readAsArrayBuffer(e)},Z=async(e,t,n,r,o)=>{r(!0),await a.Z.post(e,{rows:t}).then(e=>{(0,s.tA)(e.data.status,e.data.message),n()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,s.lt)(e.response.statusText,e.response.data.message),r(!1)}).finally(()=>{document.getElementById(o).value=""})},k=async(e,t)=>{await a.Z.get(e,{responseType:"blob"}).then(e=>{let n=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=n,a.setAttribute("download",t),document.body.appendChild(a),a.click(),a.remove()})},E=e=>new Promise((t,n)=>{let a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(a.result),a.onerror=e=>n(e)}),A=async(e,t,n)=>{await E(e).then(t=>{let a=e.name,r="data:"+e.type+";base64,",s=t.replaceAll(r,""),o=e.type;n(a,r,s,o)}),document.getElementById(t).value=""},_=(e,t,n,a)=>{t(!0),E(e).then(r=>{let s="data:"+e.type+";base64,",o=r.replaceAll(s,""),i=e.name;a(i,r,s,o),t(!1),document.getElementById(n).value=""})},S=async function(e,t,n,r,s,o,i,c){let u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;e(!0),await (0,a.Z)({method:"GET",url:t,params:{page:i+1,keyword:n.keyword,per_page:n.pageSize,id:u}}).then(e=>{let t=o.concat(e.data.data);r(t),s(e.data.meta.total),c(e.data.meta.current_page)}).catch(e=>{}).finally(()=>{e(!1)})}},68337:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(88484),s=n(69753),o=n(17594),i=n(44320),c=n(11163),u=n(67294);let l=()=>{let e=(0,c.useRouter)(),[t,n]=(0,u.useState)(0),[l,d]=(0,u.useState)(1),[p,f]=(0,u.useState)(!1),[m,h]=(0,u.useState)(!0),[g,y]=(0,u.useState)(!1),[v,w]=(0,u.useState)([]),[x,C]=(0,u.useState)(!1),[b,T]=(0,u.useState)({}),[Z,k]=(0,u.useState)({viewAny:!0,view:!0,create:!0,update:!0,delete:!0}),[E,A]=(0,u.useState)({pageSize:15,current_page:1,keyword:""}),[_,S]=(0,u.useState)({id:"",code:"",name:"",is_active:!0}),j=()=>{A({pageSize:15,current_page:1,keyword:""}),d(1),N()};(0,u.useEffect)(()=>{(0,i.jq)(e,k,C)},[]),(0,u.useEffect)(()=>{N()},[E]);let N=()=>{(0,i.sx)(f,"api/master/asset-status",E,w,n)},D=()=>{(0,i.AD)(f,"api/master/asset-status",E,w,n,v,l,d)},F=(e,t)=>{e.preventDefault(),h(!1),(0,i.I7)("api/master/asset-status/"+t,S,y)},O=()=>{(0,i.XH)("api/master/asset-status",_,T,y,h,S,N)},P=()=>{y(!1),h(!0),S({id:"",code:"",name:"",is_active:!0})},I=()=>{y(!1),S({id:"",code:"",name:"",is_active:!0}),setTimeout(()=>{y(!0)},50),h(!1)},H=()=>{_.id>0?(0,i.Yq)(_.id,"api/master/asset-status",N,y,h,S):(0,o.lt)("Error","Please select data...")},M=e=>{(0,i.HO)(e,_,S)},R=()=>{let e=document.getElementById("input-file");e.click()},U=async()=>{(0,i.vq)("api/master/template/asset-status","Template Master Asset Status.xlsx")},B=e=>{(0,i.OD)(e.target.files[0],z)},z=e=>{V(e.map(e=>({code:e[1]||"",name:e[2]||"",description:e[3]||""})))},V=e=>{(0,i.L5)("api/master/import/asset-status",e,N,f,"input-file")},q=[{key:"2",label:(0,a.jsxs)("div",{onClick:R,children:[(0,a.jsx)(r.Z,{})," Import Master"]})},{key:"3",label:(0,a.jsxs)("div",{onClick:U,children:[(0,a.jsx)(s.Z,{})," Download Template"]})}];return x?(0,a.jsx)(o.Kg,{}):Z.viewAny?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.HU,{}),(0,a.jsx)(o.ZI,{onDetail:F,handleSearch:function(e){A({...E,[e.target.id]:e.target.value})},refresh:j,data:v,total:t,paginate:E,loading:p,accessPermission:Z,onLoadMore:D,handleBack:P,handleRemove:H,items:q,handleInsert:I,isForms:g,handleSubmit:O,id:_.id,children:(0,a.jsx)(o.VX,{isEmpty:m,forms:_,isForms:g,handleChange:M,errors:b})}),(0,a.jsx)("input",{type:"file",style:{display:"none"},id:"input-file",onChange:e=>B(e),name:"file",accept:".xlsx, .xls"})]}):(0,a.jsx)(o.GH,{status:403})};t.default=l},20067:function(){},72061:function(){}},function(e){e.O(0,[2251,5431,1577,6447,4187,9774,2888,179],function(){return e(e.s=78622)}),_N_E=e.O()}]);
//# sourceMappingURL=asset-status-c6eaecfcb0b95740.js.map