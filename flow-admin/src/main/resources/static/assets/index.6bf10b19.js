import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.46bf609f.js";import{t}from"./data.2c592186.js";import{_ as a}from"./PageWrapper.d199a033.js";import{k as r,K as s,o,n,Q as c,q as i}from"./vendor.9d9efc92.js";import"./index.734d8392.js";import"./useContextMenu.ad95126a.js";/* empty css              */import"./useExpose.0886c4eb.js";import"./usePageContext.2e777b50.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=r({components:{BasicTree:e,PageWrapper:a},setup:()=>({treeData:t,handleCheck:function(e,t){}})});const d={class:"flex"};p.render=function(e,t,a,r,p,l){const m=s("BasicTree"),u=s("PageWrapper");return o(),n(u,{title:"Tree基础示例"},{default:c((()=>[i("div",d,[i(m,{treeData:e.treeData,title:"基础示例",class:"w-1/3"},null,8,["treeData"]),i(m,{treeData:e.treeData,title:"可勾选",checkable:!0,class:"w-1/3 mx-4",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),i(m,{title:"默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default p;