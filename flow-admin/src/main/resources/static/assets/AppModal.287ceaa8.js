var A=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var E=(t,r,e)=>r in t?A(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,h=(t,r)=>{for(var e in r||(r={}))P.call(r,e)&&E(t,e,r[e]);if(B)for(var e of B(r))R.call(r,e)&&E(t,e,r[e]);return t},M=(t,r)=>C(t,D(r));var f=(t,r,e)=>new Promise((p,a)=>{var l=i=>{try{s(e.next(i))}catch(u){a(u)}},m=i=>{try{s(e.throw(i))}catch(u){a(u)}},s=i=>i.done?p(i.value):Promise.resolve(i.value).then(l,m);s((e=e.apply(t,r)).next())});import{B as k,a as N}from"./index.88470e0c.js";import{B as S}from"./BasicForm.e5f615e6.js";import{u as V}from"./useForm.0cbae54a.js";import{f as $}from"./app.data.2b00e699.js";import{c as b,s as j}from"./app.da06e2da.js";import{F as L}from"./constantEnum.bf6653fb.js";import{az as O,a as U,w as x,j as F,h as T,aB as _,o as q,k as z,B as G,p as I,aC as W}from"./index.e1964776.js";import"./useWindowSizeFn.a30c5409.js";import"./FullscreenOutlined.449a4f2d.js";/* empty css              *//* empty css               */import"./index.41617e4d.js";import"./index.25019af6.js";import"./Checkbox.e5f92db0.js";import"./index.3a164815.js";import"./index.1b277829.js";import"./index.99ffc75a.js";import"./index.c8515968.js";import"./index.db622673.js";import"./get.6b7894e0.js";import"./index.b3d10dbf.js";import"./eagerComputed.83fd49b0.js";import"./index.fc9b4c53.js";import"./_baseIteratee.ad9ab737.js";import"./DeleteOutlined.5791f905.js";import"./index.c908afe0.js";import"./useRefs.766f225b.js";import"./Form.e643baa9.js";import"./Col.e011966c.js";import"./useFlexGapSupport.5550da35.js";import"./useSize.5fbb5cc9.js";import"./transButton.2db6a2b1.js";import"./index.8373f7dc.js";import"./index.27e2f730.js";import"./index.657a2808.js";import"./uuid.2b29000c.js";import"./download.6d3644ac.js";import"./base64Conver.08b9f4ec.js";import"./index.bc6756fd.js";import"./index.ec5c8d0f.js";import"./uniqBy.fd3e0b27.js";const H=U({name:"AppModal",components:{BasicModal:k,BasicForm:S},emits:["success","register"],setup(t,{emit:r}){const e=x(!0),[p,{resetFields:a,updateSchema:l,setFieldsValue:m,validate:s}]=V({labelWidth:100,schemas:$,showActionButtonGroup:!1}),i=o=>[{trigger:"blur",validator:(n,g)=>g?b({id:o.id,field:o.field,fieldValue:g,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[u,{setModalProps:c,closeModal:w}]=N(o=>f(this,null,function*(){yield a(),c({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let n=o.record;yield l([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(L.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...i({id:F(e)&&n&&n.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&m(M(h({},n),{status:n.status===1}))})),v=T(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function y(){return f(this,null,function*(){try{c({confirmLoading:!0});const o=yield s();o.status=o.status?1:0,yield j(o),w(),r("success")}finally{c({confirmLoading:!1})}})}return{registerModal:u,registerForm:p,getTitle:v,handleSubmit:y}}});function J(t,r,e,p,a,l){const m=_("BasicForm"),s=_("BasicModal");return q(),z(s,W(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:G(()=>[I(m,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Le=O(H,[["render",J]]);export{Le as default};