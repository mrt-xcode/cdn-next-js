"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5483],{31808:function(e,a,l){let n;l.d(a,{fk:function(){return o},jD:function(){return t}});var r=l(98924);let t=()=>(0,r.Z)()&&window.document.documentElement,o=()=>{if(!t())return!1;if(void 0!==n)return n;let e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},15746:function(e,a,l){var n=l(21584);a.Z=n.Z},65223:function(e,a,l){l.d(a,{RV:function(){return d},Rk:function(){return s},Ux:function(){return c},aM:function(){return u},q3:function(){return o},qI:function(){return i}});var n=l(18335),r=l(98423),t=l(67294);let o=t.createContext({labelAlign:"right",vertical:!1,itemRef(){}}),i=t.createContext(null),d=e=>{let a=(0,r.Z)(e,["prefixCls"]);return t.createElement(n.RV,Object.assign({},a))},s=t.createContext({prefixCls:""}),u=t.createContext({}),c=e=>{let{children:a,status:l,override:n}=e,r=(0,t.useContext)(u),o=(0,t.useMemo)(()=>{let e=Object.assign({},r);return n&&delete e.isFormItemInput,l&&(delete e.status,delete e.hasFeedback,delete e.feedbackIcon),e},[l,n,r]);return t.createElement(u.Provider,{value:o},a)}},10110:function(e,a,l){var n=l(67294),r=l(76745),t=l(24457);let o=(e,a)=>{let l=n.useContext(r.Z),o=n.useMemo(()=>{var n;let r=a||t.Z[e],o=null!==(n=null==l?void 0:l[e])&&void 0!==n?n:{};return Object.assign(Object.assign({},"function"==typeof r?r():r),o||{})},[e,a,l]),i=n.useMemo(()=>{let e=null==l?void 0:l.locale;return(null==l?void 0:l.exist)&&!e?t.Z.locale:e},[l]);return[o,i]};a.Z=o},71230:function(e,a,l){var n=l(92820);a.Z=n.Z},14814:function(e,a,l){l.r(a);var n=l(85893),r=l(71230),t=l(15746),o=l(58131),i=l(17594);let d=e=>{let{forms:a,handleChange:l,error:d,onBranch:s,listBranch:u,onLocation:c,listLocation:p,onDepartement:g,departement:h,onStatus:m,onRemark:v,listStatus:_,listAssetType:b,onAssetType:C,onCodeActiva:x,listCodeActiva:y,onOwnersip:f,listOwnership:j,onChangeDatePerolehan:T,onCurrency:k,onActiva:q,listAnggaran:D,onAnggaran:Z,onFlag:A}=e,B={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:12}}};return(0,n.jsxs)(r.Z,{gutter:4,style:{flex:1,marginTop:45},children:[(0,n.jsx)(t.Z,{span:12,children:(0,n.jsxs)(o.Z,{...B,children:[(0,n.jsx)(i.C$,{label:"No Induk Barang ",style:{marginTop:-18},placeholder:"No Induk Barang ",id:"no_induk_barang",require:!0,value:a.no_induk_barang,onChange:e=>l(e),validate:d.no_induk_barang}),(0,n.jsx)(i.C$,{label:"Barcode",style:{marginTop:-18},placeholder:"Barcode",id:"tag_number",value:a.tag_number,onChange:e=>l(e),isDisabled:!0}),(0,n.jsx)(i.C$,{require:!0,label:"Nomor Barang",style:{marginTop:-18},placeholder:"Nomor Barang",id:"no_barang",value:a.no_barang,validate:d.no_barang,onChange:e=>l(e),isDisabled:!0}),(0,n.jsx)(i.C$,{label:"Name",style:{marginTop:-18},placeholder:"Name",require:!0,id:"name",validate:d.name,value:a.name.toUpperCase(),onChange:e=>l(e)}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Branch",placeholder:"Branch",defaultValue:a.branch_id,value:a.branch_id,validate:d.branch_id,onChange:s,options:u.dataBranch}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Departement",require:!0,placeholder:"Departement",defaultValue:a.vendor_id,validate:d.vendor_id,value:a.vendor_id,onChange:g,options:h.dataDepartement}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Ownership",placeholder:"Ownership",defaultValue:a.ownership_id,value:a.ownership_id,validate:d.ownership_id,onChange:f,options:j.dataOwnership}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Code Activa",require:!0,placeholder:"Code Activa",defaultValue:a.code_activa_id,value:a.code_activa_id,validate:d.code_activa_id,onChange:x,options:y.dataCodeActiva}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Location",require:!0,validate:d.location_id,placeholder:"Location",defaultValue:a.location_id,value:a.location_id,onChange:c,options:p.dataLocation}),(0,n.jsx)(i.jj,{style:{marginTop:-18},onChange:T,value:a.tgl_perolehan,label:"Tanggal Perolehan",placeholder:"Tanggal Perolehan"}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Jenis Barang",require:!0,placeholder:"Jenis Barang",value:a.asset_type_id,validate:d.asset_type_id,onChange:C,options:b.dataAssetType}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Kondisi Barang",require:!0,placeholder:"Kondisi Barang",validate:d.status_id,value:a.status_id,onChange:m,options:_.dataStatus})]})}),(0,n.jsx)(t.Z,{span:12,children:(0,n.jsxs)(o.Z,{...B,children:[(0,n.jsx)(i.C$,{label:"Payment Voucher",style:{marginTop:-18},placeholder:"Payment Voucher",id:"payment_voucher",value:a.payment_voucher,onChange:e=>l(e)}),(0,n.jsx)(i.C$,{label:"Merek",style:{marginTop:-18},placeholder:"Merek",id:"merek_barang",validate:d.merek_barang,value:a.merek_barang,onChange:e=>l(e)}),(0,n.jsx)(i.C$,{label:"Model",style:{marginTop:-18},placeholder:"Model",id:"model",validate:d.model,value:a.model,onChange:e=>l(e)}),(0,n.jsx)(i.C$,{label:"Serial Number",style:{marginTop:-18},placeholder:"Serial Number",id:"serial_number",validate:d.serial_number,value:a.serial_number,onChange:e=>l(e)}),(0,n.jsx)(i.C$,{require:!0,label:"Harga Perolehan",style:{marginTop:-18},placeholder:"Harga Perolehan",id:"harga_perolehan",value:a.harga_perolehan,onChange:e=>l(e),validate:d.harga_perolehan}),(0,n.jsx)(i.pH,{require:!0,style:{marginTop:-18},label:"Currency Perolehan",placeholder:"Currency Perolehan",value:a.currency_perolehan,onChange:k,validate:d.currency_perolehan}),(0,n.jsx)(i.TD,{style:{marginTop:-18},label:"Anggaran Asset",require:!0,placeholder:"Anggaran Asset",defaultValue:a.anggaran_id,value:a.anggaran_id,validate:d.anggaran_id,onChange:Z,options:D.dataAnggaran}),(0,n.jsx)(i.C$,{require:!0,label:"Massa Manfaat (Year)",style:{marginTop:-18},placeholder:"Massa Manfaat (Year)",id:"masa_manfaat",value:a.masa_manfaat,onChange:e=>l(e),validate:d.masa_manfaat}),(0,n.jsx)(i.Ao,{require:!0,style:{marginTop:-18},label:"Status Activa",placeholder:"Status Activa",value:a.status_activa,onChange:q,validate:d.status_activa}),(0,n.jsx)(i.T4,{require:!0,style:{marginTop:-18},label:"Flag",placeholder:"Flag",value:a.flag,onChange:A,validate:d.flag}),(0,n.jsx)(i.r4,{label:"Remark",placeholder:"Remark",id:"remark",value:a.remark,onChange:v,style:{marginTop:-18}}),(0,n.jsx)(i.C$,{require:!0,label:"Jumlah",style:{marginTop:-18},placeholder:"Jumlah",id:"jumlah",value:a.jumlah,onChange:e=>l(e),validate:d.jumlah})]})})]})};a.default=d}}]);