import{_ as e}from"./TableImg.e8129589.js";import{g as t}from"./BasicForm.5cce9782.js";import{u as i}from"./useTable.abd431f8.js";import{g as o,d as a}from"./dept.65256269.js";import{P as n}from"./index.5574fcdd.js";import r from"./DictTypeTree.1f257f26.js";import s from"./DictionaryTable.d98540f1.js";import d from"./DictionaryItemTable.9de0ba70.js";import{h as c}from"./index.8c1d7da4.js";import{b as l}from"./index.acbe981f.js";import{k as m,l as p}from"./dictionary.59aa9182.js";import{y as f,r as u,Z as j,B as b,F as x,a2 as y,v as T}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";/* empty css              *//* empty css              */import"./useContentViewHeight.3c3886fd.js";import"./Tree.vue_vue&type=style&index=0&lang.c07cbf20.js";import"./useContextMenu.d92b8450.js";import"./dicType.db4d4c8d.js";import"./DictionaryModal.93664460.js";import"./DictionaryItemModal.b77442d4.js";const{createMessage:h}=c();var D=f({components:{BasicTable:e,PageWrapper:n,DictTypeTree:r,DictionaryTable:s,DictionaryItemTable:d,TableAction:t},setup(){const[e,{openModal:t}]=l(),n=u(),r=u(),[s,{reload:d}]=i({title:"列表",api:o,columns:m,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictionaryRef:n,dictionaryItemRef:r,registerTable:s,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDictSelect:function(e){e&&r.value.filterByDict(e)},handleDelete:function(e){e.children&&e.children.length>0?h.warning("有子节点，不能删除！"):a([e.id]).then((()=>{d()}))},handleSuccess:function(){d()},handleDictTypeSelect:function(e=""){e?(n.value.filterByDictType(e),r.value.cleanTableData()):n.value.cleanTableData()}}}});D.render=function(e,t,i,o,a,n){const r=j("DictTypeTree"),s=j("DictionaryTable"),d=j("DictionaryItemTable"),c=j("PageWrapper");return b(),x(c,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:y((()=>[T(r,{class:"w-1/5 xl:w-1/5",onSelect:e.handleDictTypeSelect},null,8,["onSelect"]),T(s,{ref:"dictionaryRef",onHandleSelect:e.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),T(d,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)])),_:1})};export default D;