import{_ as e}from"./TableImg.5256107f.js";import{f as t}from"./BasicForm.9118d7fd.js";import{u as o}from"./useTable.46ace9df.js";import{a as n,d as i}from"./dept.038d9342.js";import{_ as a}from"./PageWrapper.45ba9367.js";import r from"./CompanyTree.c59936d1.js";import{g as s}from"./index.bfbdc958.js";import{b as d}from"./useModal.ddd2c5cc.js";import{_ as l,c,s as p}from"./DeptModal.fbfe9d84.js";import{k as m,r as u,u as f,K as b,o as j,n as g,Q as h,q as x,Y as C}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.7b000bd0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97fe3b93.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";/* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";import"./usePageContext.30475202.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.5b456a9f.js";import"./useContextMenu.b8def761.js";import"./company.25d73ffc.js";import"./index.f3d3c138.js";import"./personal.c46ea1f6.js";import"./OrgTree.0bcc0dd1.js";const{createMessage:S}=s();var w=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:t},setup(){const[e,{openModal:t,setModalProps:a}]=d(),r=u({}),[s,{reload:l}]=o({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),t(!0,{record:{companyId:null==(e=f(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改部门"}),t(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?S.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const M=C("新增");w.render=function(e,t,o,n,i,a){const r=b("CompanyTree"),s=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("DeptModal"),p=b("PageWrapper");return j(),g(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[x(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),x(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[x(s,{type:"primary",onClick:e.handleCreate},{default:h((()=>[M])),_:1},8,["onClick"])])),action:h((({record:t})=>[x(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),x(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;