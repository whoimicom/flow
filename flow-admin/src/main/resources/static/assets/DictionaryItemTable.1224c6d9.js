import{_ as e}from"./TableImg.3a357da5.js";import{f as t}from"./BasicForm.9dacb4c6.js";import{u as i}from"./useTable.4c66a5b7.js";import{a as o,i as a,b as n,e as r}from"./dictionary.681aae34.js";import{P as s}from"./index.2b3a6879.js";import{h as d}from"./index.643db95a.js";import{b as c}from"./index.2d1288e4.js";import l from"./DictionaryItemModal.debfca70.js";import{j as m,r as p,K as f,o as b,m as u,n as j,Q as x,X as h,Y as g}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";import"./useContentViewHeight.dc5cb96c.js";/* empty css              *//* empty css              */const{createMessage:v}=d();var I=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:f,setTableData:b}]=i({title:"列表",api:o,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){b([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):v.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,f({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const T={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},w=g("新增");I.render=function(e,t,i,o,a,n){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("DictionaryItemModal");return b(),u("div",T,[j(d,{onRegister:e.registerTable},{toolbar:x((()=>[""!==e.dictId?(b(),u(r,{key:0,type:"primary",onClick:e.handleCreate},{default:x((()=>[w])),_:1},8,["onClick"])):h("",!0)])),action:x((({record:t})=>[j(s,{actions:[{title:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default I;