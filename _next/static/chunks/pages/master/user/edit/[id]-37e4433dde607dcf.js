(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{97799:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/master/user/edit/[id]",function(){return a(75855)}])},44320:function(e,t,a){"use strict";a.d(t,{AD:function(){return k},HO:function(){return x},I7:function(){return T},Ko:function(){return S},L5:function(){return b},OD:function(){return _},OU:function(){return C},V2:function(){return l},XH:function(){return p},Yq:function(){return g},cF:function(){return u},fu:function(){return m},jP:function(){return c},jq:function(){return j},ps:function(){return v},sW:function(){return w},sx:function(){return y},vq:function(){return Z}});var s=a(23404),n=a(84105),r=a(17594),o=a(64187);let{confirm:i}=o.Z,d=()=>{},l=async e=>{await (0,s.Z)({method:"GET",url:"api/sidebar"}).then(t=>{e(t.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message)})},u=async(e,t,a,n,o,i)=>{i(!0),await (0,s.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{o(),(0,r.tA)(e.data.status,e.data.message),n()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&a(e.response.data.errors)}).finally(()=>{i(!1)})},c=async(e,t,a,n,o)=>{n(!0),await (0,s.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{(0,r.tA)(e.data.status,e.data.message),o.back()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&a(e.response.data.errors)}).finally(()=>{n(!1)})},p=async(e,t,a,n,o,i,d)=>{await (0,s.Z)({method:t.id>0?"PUT":"POST",url:t.id>0?e+"/"+t.id:e,data:t}).then(e=>{o(!0),(0,r.tA)(e.data.status,e.data.message),i({}),a({}),n(!1)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message),"errors"in e.response.data&&a(e.response.data.errors)}).finally(()=>{d()})},m=(e,t,a)=>{d(i({title:"Do you want to delete these items?",content:"You can't undo this operation",onOk(){h(e,t,a)},onCancel(){}}))},h=async(e,t,a)=>{await s.Z.delete(t+"/"+e).then(e=>{(0,r.lt)(e.data.status,e.data.message)}).catch(e=>{let t="statusText"in e.response,a="message"in e.response.data;t&&a&&(0,r.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{a()})},g=(e,t,a,s,n,r)=>{d(i({title:"Do you want to delete these items?",content:"You can't undo this operation",onOk(){f(e,t,a,s,n,r)},onCancel(){}}))},f=async(e,t,a,n,o,i)=>{await s.Z.delete(t+"/"+e).then(e=>{(0,r.lt)(e.data.status,e.data.message),n(!1),o(!0),i({})}).catch(e=>{let t="statusText"in e.response,a="message"in e.response.data;t&&a&&(0,r.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{a()})},y=async function(e,t,a,n,r){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;e(!0),await (0,s.Z)({method:"GET",url:t,params:{page:a.current_page,keyword:a.keyword,per_page:a.pageSize,id:o}}).then(e=>{n(e.data.data),r(e.data.meta.total)}).catch(e=>{}).finally(()=>{e(!1)})},w=async(e,t)=>{await (0,s.Z)({method:"GET",url:e}).then(e=>{t(e.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message)})},T=async(e,t,a)=>{a(!1),await (0,s.Z)({method:"GET",url:e}).then(e=>{t(e.data)}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message)}).finally(()=>{a(!0)})},x=(e,t,a)=>{a({...t,[e.target.id]:e.target.value})},v=async(e,t)=>{await (0,s.Z)({method:"get",url:"api/me"}).then(e=>{t(e.data)}).catch(t=>{401===t.response.status&&e.push("/login"),"statusText"in t.response&&"message"in t.response.data&&(0,r.lt)(t.response.statusText,t.response.data.message)})},j=async(e,t,a)=>{a(!0);let n=e.pathname.split("/"),r="/"+n[1]+"/"+n[2];await (0,s.Z)({method:"GET",url:"api/check-access",params:{path:"//undefined"!=r?r:"/"}}).then(e=>{t(e.data)}).catch(a=>{401===a.response.status&&e.push("/login"),t({viewAny:!1,view:!1,create:!1,update:!1,delete:!1})}).finally(()=>{a(!1)})},_=(e,t)=>{var a=new FileReader;a.onload=e=>{var a=e.target.result;a=new Uint8Array(a);var s=(0,n.ij)(a,{type:"array",cellText:!1,cellDates:!0}),r=n.P6.sheet_to_json(s.Sheets[s.SheetNames[0]],{header:1}).filter(e=>!!e[0]);r.splice(0,2),t(r)},a.readAsArrayBuffer(e)},b=async(e,t,a,n,o)=>{n(!0),await s.Z.post(e,{rows:t}).then(e=>{(0,r.tA)(e.data.status,e.data.message),a()}).catch(e=>{"statusText"in e.response&&"message"in e.response.data&&(0,r.lt)(e.response.statusText,e.response.data.message),n(!1)}).finally(()=>{document.getElementById(o).value=""})},Z=async(e,t)=>{await s.Z.get(e,{responseType:"blob"}).then(e=>{let a=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=a,s.setAttribute("download",t),document.body.appendChild(s),s.click(),s.remove()})},E=e=>new Promise((t,a)=>{let s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result),s.onerror=e=>a(e)}),C=async(e,t,a)=>{await E(e).then(t=>{let s=e.name,n="data:"+e.type+";base64,",r=t.replaceAll(n,""),o=e.type;a(s,n,r,o)}),document.getElementById(t).value=""},S=(e,t,a,s)=>{t(!0),E(e).then(n=>{let r="data:"+e.type+";base64,",o=n.replaceAll(r,""),i=e.name;s(i,n,r,o),t(!1),document.getElementById(a).value=""})},k=async function(e,t,a,n,r,o,i,d){let l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;e(!0),await (0,s.Z)({method:"GET",url:t,params:{page:i+1,keyword:a.keyword,per_page:a.pageSize,id:l}}).then(e=>{let t=o.concat(e.data.data);n(t),r(e.data.meta.total),d(e.data.meta.current_page)}).catch(e=>{}).finally(()=>{e(!1)})}},75855:function(e,t,a){"use strict";a.r(t);var s=a(85893),n=a(23404),r=a(17594),o=a(44320),i=a(17360),d=a(15746),l=a(71230),u=a(58131),c=a(11163),p=a(67294);let m=()=>{let e=(0,c.useRouter)(),{id:t}=e.query,[a,m]=(0,p.useState)(!1),[h,g]=(0,p.useState)(!1),[f,y]=(0,p.useState)({update:!0}),[w,T]=(0,p.useState)({}),[x,v]=(0,p.useState)([]),[j,_]=(0,p.useState)({id:"",email:"",id:"",name:"",role:"",password:"",password_confirmation:""});(0,p.useEffect)(()=>{(0,o.sW)("api/master/user/"+t,_),(0,o.jq)(e,y,g),E()},[]);let b=e=>{(0,o.HO)(e,j,_)},Z=()=>{(0,o.jP)("api/master/user",j,T,m,e)},E=async()=>{await n.Z.get("api/list-role").then(e=>{v(e.data)})};return h?(0,s.jsx)(r.Kg,{}):f.update?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.HU,{}),(0,s.jsxs)(i.Z,{cover:(0,s.jsx)(d.Z,{span:24,style:{backgroundColor:"#1890ff",paddingTop:"5px"}}),children:[(0,s.jsx)(r.Xl,{title:j.name}),(0,s.jsx)(l.Z,{children:(0,s.jsx)(d.Z,{span:24,children:(0,s.jsxs)(u.Z,{labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}},children:[(0,s.jsx)(r.C$,{value:j.name,label:"Name",validate:w.name,name:"name",id:"name",isRequired:!0,onChange:b}),(0,s.jsx)(r.C$,{value:j.email,label:"Email",validate:w.email,name:"email",id:"email",onChange:b,style:{marginTop:-20}}),(0,s.jsx)(r.Is,{label:"Password",style:{marginTop:-20},id:"password",value:j.password,validate:w.password,onChange:b}),(0,s.jsx)(r.Is,{label:"Password Confirmation",style:{marginTop:-20},id:"password_confirmation",value:j.password_confirmation,validate:w.password_confirmation,onChange:b}),(0,s.jsx)(r.TD,{value:j.role,validate:w.role,id:"role",name:"role",label:"Role",style:{marginTop:-20},options:x,onChange:function(e){_({...j,role:e})}})]})})}),(0,s.jsx)(r.u5,{onSubmit:Z,isSubmit:a,id:j.id})]})]}):(0,s.jsx)(r.GH,{status:403})};t.default=m},20067:function(){},72061:function(){}},function(e){e.O(0,[2251,5431,7698,3062,1577,9329,8571,8131,6447,4187,1003,9774,2888,179],function(){return e(e.s=97799)}),_N_E=e.O()}]);
//# sourceMappingURL=[id]-37e4433dde607dcf.js.map