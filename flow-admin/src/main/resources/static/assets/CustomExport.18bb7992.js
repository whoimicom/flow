import{_ as e}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import{E as o}from"./index.68e55c9a.js";import{c as t,d as a,j as s}from"./data.9a8c36c3.js";import{b as r}from"./useModal.40813107.js";import{_ as i}from"./PageWrapper.0a593267.js";import{k as n,K as d,o as p,n as m,Q as c,q as f,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./createAsyncComponent.7f6a6f6f.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */var l=n({components:{BasicTable:e,ExpExcelModel:o,PageWrapper:i},setup(){const[e,{openModal:o}]=r();return{defaultHeader:function({filename:e,bookType:o}){s({data:a,filename:e,write2excelOpts:{bookType:o}})},columns:t,data:a,register:e,openModal:o}}});const u=j(" 导出 ");l.render=function(e,o,t,a,s,r){const i=d("a-button"),n=d("BasicTable"),j=d("ExpExcelModel"),l=d("PageWrapper");return p(),m(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[f(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[f(i,{onClick:e.openModal},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),f(j,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;