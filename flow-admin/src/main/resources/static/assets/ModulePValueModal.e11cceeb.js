var F=Object.defineProperty;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&d(e,o,t[o]);if(u)for(var o of u(t))v.call(t,o)&&d(e,o,t[o]);return e};var c=(e,t,o)=>new Promise((n,p)=>{var l=r=>{try{i(o.next(r))}catch(s){p(s)}},a=r=>{try{i(o.throw(r))}catch(s){p(s)}},i=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,a);i((o=o.apply(e,t)).next())});import{B as k,a as $}from"./index.56ac9033.js";import{B as b}from"./BasicForm.bc1bc2ec.js";import{u as y}from"./useForm.35a2e1b5.js";import{f as C,b as R}from"./module.data.02ed4055.js";import{az as S,a as E,w as L,j as g,h as O,aB as h,o as P,k as U,B as V,p as T,aC as j}from"./index.bbfb8c5d.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";/* empty css              *//* empty css               */import"./index.eb776706.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.bd278e5f.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.53f3ac38.js";import"./get.476f8b78.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./useSize.2da926c0.js";import"./transButton.15723253.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./index.59bf1cba.js";import"./uuid.2b29000c.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";const z=E({name:"ModuleModal",components:{BasicModal:k,BasicForm:b},emits:["success","register"],setup(e,{emit:t}){const o=L(!0),[n,{resetFields:p,setFieldsValue:l,updateSchema:a,validate:i}]=y({labelWidth:100,schemas:C,showActionButtonGroup:!1}),[r,{setModalProps:s,closeModal:B}]=$(m=>c(this,null,function*(){p(),s({confirmLoading:!1}),o.value=!!(m!=null&&m.isUpdate),g(o)?(l(f({},m.record)),a([{field:"component",show:!1},{field:"url",show:!1}])):a([{field:"component",show:!0},{field:"url",show:!0}])})),M=O(()=>g(o)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return c(this,null,function*(){try{s({confirmLoading:!0});const m=yield i();yield R(m),B(),t("success")}finally{s({confirmLoading:!1})}})}return{registerModal:r,registerForm:n,getTitle:M,handleSubmit:w}}});function A(e,t,o,n,p,l){const a=h("BasicForm"),i=h("BasicModal");return P(),U(i,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:V(()=>[T(a,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Co=S(z,[["render",A]]);export{Co as default};