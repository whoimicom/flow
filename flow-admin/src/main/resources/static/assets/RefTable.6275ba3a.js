import{_ as e}from"./TableImg.72bfe0c2.js";import"./BasicForm.66d503e8.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.83d6955e.js";import{g as n}from"./index.90af2bb9.js";import{d as i}from"./table.3e700215.js";import{k as s,r as a,u as l,K as c,o as r,n as d,q as m,Q as f,Y as u}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4f5ed9fc.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.5417216c.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.886b9f44.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d660d8a6.js";/* empty css              *//* empty css              */import"./download.73f6ecc9.js";import"./StrengthMeter.c038c542.js";var p=s({components:{BasicTable:e},setup(){const e=a(null),{createMessage:s}=n();function c(){const o=l(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:i,columns:o(),changeLoading:function(){c().setLoading(!0),setTimeout((()=>{c().setLoading(!1)}),1e3)},changeColumns:function(){c().setColumns(t())},reloadTable:function(){c().setColumns(o()),c().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){c().setPagination({current:2}),c().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){c().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){c().clearSelectedRowKeys()}}}});const C={class:"p-4"},b={class:"mb-4"},g=u(" 还原 "),j=u(" 开启loading "),k=u(" 更改Columns "),w=u(" 获取Columns "),x=u(" 获取表格数据 "),S=u(" 跳转到第2页 "),R={class:"mb-4"},_=u(" 获取选中行 "),L=u(" 获取选中行Key "),y=u(" 设置选中行 "),K=u(" 清空选中行 "),T=u(" 获取分页信息 ");p.render=function(e,o,t,n,i,s){const a=c("a-button"),l=c("BasicTable");return r(),d("div",C,[m("div",b,[m(a,{class:"mr-2",onClick:e.reloadTable},{default:f((()=>[g])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeLoading},{default:f((()=>[j])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.changeColumns},{default:f((()=>[k])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getColumn},{default:f((()=>[w])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getTableData},{default:f((()=>[x])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:f((()=>[S])),_:1},8,["onClick"])]),m("div",R,[m(a,{class:"mr-2",onClick:e.getSelectRowList},{default:f((()=>[_])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:f((()=>[L])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:f((()=>[y])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.clearSelect},{default:f((()=>[K])),_:1},8,["onClick"]),m(a,{class:"mr-2",onClick:e.getPagination},{default:f((()=>[T])),_:1},8,["onClick"])]),m(l,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;