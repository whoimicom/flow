import{_ as e}from"./TableImg.51b451b7.js";import"./BasicForm.e292c287.js";import{u as s}from"./useTable.d377fe38.js";import{getCustomHeaderColumns as i}from"./tableData.83d6955e.js";import{d as o}from"./table.557dc46d.js";import{an as r}from"./index.f769efd5.js";import{j as t,bN as d,K as m,o as a,m as n,n as p,Q as c,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.10272283.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.393263b2.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";var b=t({components:{BasicTable:e,FormOutlined:d,BasicHelp:r},setup(){const[e]=s({title:"定高/头部自定义",api:o,columns:i(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const f={class:"p-4"},l=j(" 姓名 "),u=j(" 地址 ");b.render=function(e,s,i,o,r,t){const d=m("BasicHelp"),j=m("FormOutlined"),b=m("BasicTable");return a(),n("div",f,[p(b,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[l,p(d,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[u,p(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default b;