(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5070],{49675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/asset/file-attachments/[id]",function(){return n(58821)}])},58821:function(e,t,n){"use strict";n.r(t);var i=n(85893),l=n(67294),c=n(11884),s=n(11163),a=n(7780),r=n(71230),o=n(75081),d=n(15746),u=n(71577),f=n(17594),h=n(23404);let{Text:j,Title:x}=a.Z,p=()=>{let[e,t]=(0,l.useState)(""),[n,a]=(0,l.useState)(!0),[p,y]=(0,l.useState)(null),[w,g]=(0,l.useState)(1),m=(0,s.useRouter)();(0,l.useEffect)(()=>{c.v0.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(c.v0.version,"/pdf.worker.js"),b()},[]);let b=async()=>{let e=m.query.id;a(!0),await (0,h.Z)({method:"GET",url:"api/detail-file-attachment/"+e}).then(e=>{g(e.data.name_file),t(e.data.type+e.data.file),a(!1)}).catch(e=>{m.back()})};if(n)return(0,i.jsxs)(r.Z,{style:{textAlign:"center",marginTop:"40vh",width:"100%",justifyContent:"center"},children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)(r.Z,{style:{marginTop:"10px",textAlign:"center",width:"100%",justifyContent:"center"},children:(0,i.jsx)(j,{children:"Loading File...."})})]});let _=async()=>{await fetch(e).then(e=>e.blob()).then(e=>{let t=URL.createObjectURL(e);var n=document.getElementById("blob");n.download=w,n.href=t,n.click(),n.href="",n.download=""})};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(f.HU,{}),(0,i.jsxs)(r.Z,{style:{textAlign:"center",width:"100%"},children:[(0,i.jsx)(d.Z,{span:24,children:(0,i.jsx)(x,{level:3,children:"File Name : ".concat(w)})}),(0,i.jsx)(d.Z,{span:24,style:{textAlign:"center"},children:(0,i.jsx)(u.ZP,{onClick:_,style:{backgroundColor:"#1890ff",marginBottom:15},children:"Download PDF"})})]}),(0,i.jsx)(d.Z,{span:24,style:{textAlign:"center",width:"100%"},children:(0,i.jsx)(r.Z,{style:{width:"100%",justifyContent:"center"},children:(0,i.jsx)(c.BB,{file:e,onLoadSuccess:function(e){let{numPages:t}=e;y(t)},children:Array.from(Array(p),(e,t)=>(0,i.jsx)(c.T3,{pageNumber:t+1,pageIndex:t+1},"page_".concat(t+1)))})})}),(0,i.jsx)("a",{id:"blob",style:{display:"none"}})]})})};t.default=p},93414:function(){},70172:function(){},2001:function(){},33779:function(){},82258:function(){}},function(e){e.O(0,[4577,5431,7698,3062,1577,26,2913,7780,8859,9774,2888,179],function(){return e(e.s=49675)}),_N_E=e.O()}]);