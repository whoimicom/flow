import{B as h}from"./TableImg.3ff4c1b4.js";import{l as C}from"./BasicForm.bc1bc2ec.js";import{u as T}from"./useTable.dffabf3f.js";import{b as B}from"./index.56ac9033.js";import{J as g,c as _,s as y}from"./JobGradeTypeModal.ba117bf4.js";import{a as k,d as E}from"./jobGradeType.5832f8e1.js";import{az as M,a as S,aB as t,o as d,i as J,p as m,B as p,C as w,k as A,l as F}from"./index.bbfb8c5d.js";import"./index.08f5b20b.js";import"./Checkbox.6b0f0619.js";import"./index.932444ce.js";import"./index.424465cb.js";import"./eagerComputed.2918d49d.js";import"./useForm.35a2e1b5.js";import"./index.6f4a9d56.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./useWindowSizeFn.daa22200.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./index.e860cc21.js";import"./index.ba9876ed.js";import"./index.bd278e5f.js";import"./uuid.2b29000c.js";import"./index.d0de3318.js";import"./_baseIteratee.6836a2b9.js";import"./get.476f8b78.js";import"./DeleteOutlined.426a7a56.js";import"./index.21d11494.js";import"./useRefs.c946e576.js";import"./Form.64d057a8.js";import"./Col.bf638c61.js";import"./useFlexGapSupport.ae09cf13.js";import"./index.eb776706.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.566a8b2c.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.59bf1cba.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.1bc5bfb7.js";import"./index.a824713f.js";/* empty css              *//* empty css               */import"./index.53f3ac38.js";import"./index.dbc537d6.js";import"./index.1311bc71.js";import"./download.4c3fda74.js";import"./base64Conver.08b9f4ec.js";import"./index.5d0a6eed.js";import"./index.5796c3bd.js";import"./uniqBy.16bfb902.js";import"./constantEnum.bf6653fb.js";const G=S({name:"JobGradeType",components:{BasicTable:h,TableAction:C,JobGradeTypeModal:g},setup(){const[o,{openModal:r}]=B(),[s,{reload:i}]=T({title:"\u5217\u8868",api:k,columns:_,formConfig:{labelWidth:120,schemas:y,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function a(e){E([e.id]).then(()=>{i()})}function n(){setTimeout(()=>{i()},200)}return{registerTable:s,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:a,handleSuccess:n}}});function R(o,r,s,i,l,c){const a=t("a-button"),n=t("TableAction"),e=t("BasicTable"),f=t("JobGradeTypeModal");return d(),J("div",null,[m(e,{onRegister:o.registerTable},{toolbar:p(()=>[m(a,{type:"primary",onClick:o.handleCreate},{default:p(()=>[w(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:p(({column:b,record:u})=>[b.key==="action"?(d(),A(n,{key:0,actions:[{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,u),placement:"left"}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),m(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Do=M(G,[["render",R]]);export{Do as default};