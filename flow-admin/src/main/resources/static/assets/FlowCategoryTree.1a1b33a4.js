import{j as e,aJ as t,r as a,I as n,K as r,at as o,w as i,o as s,m as l,n as c}from"./vendor.686fd1d4.js";import{_ as d}from"./Tree.vue_vue&type=style&index=0&lang.c2b4aa3f.js";import{g as u}from"./category.9d06e54d.js";import{b4 as m}from"./index.91fd9f50.js";import"./useContextMenu.3c6fe760.js";/* empty css              */var f=e({name:"FlowCategoryTree",components:{BasicTree:d,Spin:t},emits:["select"],setup(e,{emit:t}){const r=a([]),o=a(!1);function i(){return e=this,t=null,a=function*(){o.value=!0,u().then((e=>{r.value=e})).finally((()=>{o.value=!1}))},new Promise(((n,r)=>{var o=e=>{try{s(a.next(e))}catch(t){r(t)}},i=e=>{try{s(a.throw(e))}catch(t){r(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{i()})),{treeData:r,treeLoading:o,handleSelect:function(e,a){const n=m(r.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const p={class:"bg-white m-4 mr-0 overflow-hidden"};f.render=function(e,t,a,n,d,u){const m=r("BasicTree"),f=o("loading");return i((s(),l("div",p,[c(m,{title:"流程分类",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])],512)),[[f,e.treeLoading]])};export default f;