import{_ as e}from"./TableImg.96b6e2f6.js";import"./BasicForm.99631a91.js";import{u as o}from"./useTable.ee2b6f63.js";import{getBasicColumns as t,getFormConfig as i}from"./tableData.83d6955e.js";import{d as r}from"./table.8c22cc61.js";import{j as s,K as m,o as a,m as n,Q as d,n as c,Y as p}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.29bf2c0c.js";import"./index.ffeb6485.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.08cdb95c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e687761f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              */import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";var f=s({components:{BasicTable:e},setup(){const[e,{getForm:s}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:i(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const b=p(" custom-slot "),j=p("获取表单数据");f.render=function(e,o,t,i,r,s){const p=m("a-button"),f=m("BasicTable");return a(),n(f,{onRegister:e.registerTable},{"form-custom":d((()=>[b])),toolbar:d((()=>[c(p,{type:"primary",onClick:e.getFormValues},{default:d((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default f;