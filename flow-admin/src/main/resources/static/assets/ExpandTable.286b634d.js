import{_ as e}from"./TableImg.f7de9836.js";import{f as o}from"./BasicForm.49b9f6b2.js";import{u as i}from"./useTable.948e93a8.js";import{P as t}from"./index.9f071deb.js";import{getBasicColumns as n}from"./tableData.83d6955e.js";import{d as r}from"./table.e88268c1.js";import{j as s,K as a,o as d,m as p,Q as l,n as c,q as m}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.bcbbeb77.js";import"./index.0bb7f928.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.b444bbac.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */var b=s({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:r,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});b.render=function(e,o,i,t,n,r){const s=a("TableAction"),b=a("BasicTable"),f=a("PageWrapper");return d(),p(f,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:l((()=>[c(b,{onRegister:e.registerTable},{expandedRowRender:l((({record:e})=>[c("span",null,"No: "+m(e.no),1)])),action:l((({record:o})=>[c(s,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default b;