import{_ as e}from"./TableImg.5efff65a.js";import"./BasicForm.950a284a.js";import{getBasicColumns as o,getBasicShortColumns as t}from"./tableData.3f3da3f1.js";import{h as i}from"./index.1bc1d740.js";import{d as n}from"./table.ac37ea5d.js";import{z as a,r as s,u as c,Z as l,D as r,F as d,w as f,a3 as m,a9 as u}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.7635a38a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.037585c2.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.072b7c77.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";var p=a({components:{BasicTable:e},setup(){const e=s(null),{createMessage:a}=i();function l(){const o=c(e);if(!o)throw new Error("tableAction is null");return o}return{tableRef:e,api:n,columns:o(),changeLoading:function(){l().setLoading(!0),setTimeout((()=>{l().setLoading(!1)}),1e3)},changeColumns:function(){l().setColumns(t())},reloadTable:function(){l().setColumns(o()),l().reload({page:1})},getColumn:function(){a.info("请在控制台查看！")},getTableData:function(){a.info("请在控制台查看！")},getPagination:function(){a.info("请在控制台查看！")},setPaginationInfo:function(){l().setPagination({current:2}),l().reload()},getSelectRowList:function(){a.info("请在控制台查看！")},getSelectRowKeyList:function(){a.info("请在控制台查看！")},setSelectedRowKeyList:function(){l().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){l().clearSelectedRowKeys()}}}});const b={class:"p-4"},C={class:"mb-4"},j=u(" 还原 "),g=u(" 开启loading "),k=u(" 更改Columns "),x=u(" 获取Columns "),w=u(" 获取表格数据 "),R=u(" 跳转到第2页 "),S={class:"mb-4"},_=u(" 获取选中行 "),L=u(" 获取选中行Key "),y=u(" 设置选中行 "),T=u(" 清空选中行 "),K=u(" 获取分页信息 ");p.render=function(e,o,t,i,n,a){const s=l("a-button"),c=l("BasicTable");return r(),d("div",b,[f("div",C,[f(s,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[j])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[g])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[R])),_:1},8,["onClick"])]),f("div",S,[f(s,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[_])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[L])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),f(s,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[K])),_:1},8,["onClick"])]),f(c,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;