import{_ as e}from"./TableImg.01909c7a.js";import"./BasicForm.eea5fa1e.js";import{u as o}from"./useTable.01292fb5.js";import{getBasicColumns as t,getFormConfig as i}from"./tableData.83d6955e.js";import{d as r}from"./table.f92cea09.js";import{j as s,K as a,o as m,m as n,Q as d,n as p,Y as c}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";import"./index.521cc965.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.389b283b.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";var j=s({components:{BasicTable:e},setup(){const[e,{getForm:s}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:i(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const b=c(" custom-slot "),f=c("获取表单数据");j.render=function(e,o,t,i,r,s){const c=a("a-button"),j=a("BasicTable");return m(),n(j,{onRegister:e.registerTable},{"form-custom":d((()=>[b])),toolbar:d((()=>[p(c,{type:"primary",onClick:e.getFormValues},{default:d((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default j;