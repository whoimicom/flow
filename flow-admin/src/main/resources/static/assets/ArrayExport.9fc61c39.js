import{_ as e}from"./TableImg.840b2332.js";import"./BasicForm.d12ec528.js";import"./index.68e55c9a.js";import{c as o,d as a,a as t,b as s,e as i}from"./data.9a8c36c3.js";import{_ as r}from"./PageWrapper.0a593267.js";import{k as n,K as d,o as m,n as p,Q as c,q as j,Y as f}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.831c770a.js";import"./index.68bdfa67.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.40813107.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.86f4c026.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.69c99d5f.js";/* empty css              *//* empty css              */import"./download.684fb6a2.js";import"./StrengthMeter.e21abcab.js";import"./createAsyncComponent.7f6a6f6f.js";import"./usePageContext.a9e23595.js";/* empty css              *//* empty css              */var u=n({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){t({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:a})});const b=f(" 导出 ");u.render=function(e,o,a,t,s,i){const r=d("a-button"),n=d("BasicTable"),f=d("PageWrapper");return m(),p(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(r,{onClick:e.aoaToExcel},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;