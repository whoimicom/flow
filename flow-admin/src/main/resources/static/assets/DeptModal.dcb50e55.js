var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t,o)=>new Promise(((a,r)=>{var n=e=>{try{s(o.next(e))}catch(t){r(t)}},l=e=>{try{s(o.throw(e))}catch(t){r(t)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,l);s((o=o.apply(e,t)).next())}));import{B as l,a as s}from"./index.2bb7e54d.js";import{_ as i}from"./BasicForm.5fbfb734.js";import{u as d}from"./useForm.1ee1a774.js";import{a1 as p,b2 as c,j as u,r as m,i as f,u as b,K as g,o as v,m as y,Q as h,n as P,N as j}from"./vendor.686fd1d4.js";/* empty css              */import{a as x}from"./system.0536d2e1.js";const w=[{title:"部门名称",dataIndex:"deptName",width:160,align:"left"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=0==~~e.status,o=t?"启用":"停用";return p(c,{color:t?"green":"red"},(()=>o))}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],I=[{field:"deptName",label:"部门名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],F=[{field:"deptName",label:"部门名称",component:"Input",required:!0},{field:"parentDept",label:"上级部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var O=u({name:"DeptModal",components:{BasicModal:l,BasicForm:i},emits:["success","register"],setup(e,{emit:l}){const i=m(!0),[p,{resetFields:c,setFieldsValue:u,updateSchema:g,validate:v}]=d({labelWidth:100,schemas:F,showActionButtonGroup:!1}),[y,{setModalProps:h,closeModal:P}]=s((e=>n(this,null,(function*(){c(),h({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),b(i)&&u(((e,n)=>{for(var l in n||(n={}))o.call(n,l)&&r(e,l,n[l]);if(t)for(var l of t(n))a.call(n,l)&&r(e,l,n[l]);return e})({},e.record));const n=yield x();g({field:"parentDept",componentProps:{treeData:n}})}))));return{registerModal:y,registerForm:p,getTitle:f((()=>b(i)?"编辑部门":"新增部门")),handleSubmit:function(){return n(this,null,(function*(){try{yield v();h({confirmLoading:!0}),P(),l("success")}finally{h({confirmLoading:!1})}}))}}}});O.render=function(e,t,o,a,r,n){const l=g("BasicForm"),s=g("BasicModal");return v(),y(s,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:h((()=>[P(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{B as D,O as _,w as c,I as s};