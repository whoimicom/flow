import{B as l}from"./TableImg.b1f3ef3e.js";import{l as s}from"./BasicForm.d2fa120b.js";import{u as d}from"./useTable.08d16777.js";import{d as c}from"./table.2feb4b97.js";import{az as F,a as b,aB as n,o as p,i as f,p as B,B as h,k as A,l as C}from"./index.0280002f.js";import"./index.5c81bb10.js";import"./Checkbox.61b53ada.js";import"./index.c68c747e.js";import"./index.86a12b41.js";import"./eagerComputed.832d624f.js";import"./useForm.431e5593.js";import"./index.432b4215.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useSize.71621680.js";import"./useWindowSizeFn.c0eea5f2.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";import"./transButton.fa31f1ed.js";import"./index.6db63b77.js";import"./index.81d6e7a6.js";import"./index.3486105d.js";import"./uuid.2b29000c.js";import"./index.9aa048a5.js";import"./_baseIteratee.9e690663.js";import"./get.742319ba.js";import"./DeleteOutlined.1c34c6c1.js";import"./index.a1c94158.js";import"./useRefs.f68e97c5.js";import"./Form.227e5499.js";import"./Col.32e8fee0.js";import"./useFlexGapSupport.f92812e7.js";import"./index.0e48118d.js";import"./FullscreenOutlined.d5490f36.js";import"./index.498da238.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.59857f8a.js";import"./index.3dcb35e5.js";import"./fromPairs.84aabb58.js";import"./scrollTo.37a57864.js";import"./index.e5c4a097.js";/* empty css              *//* empty css               */import"./index.46b96662.js";import"./index.85e9aa1e.js";import"./index.1d3f95d6.js";import"./download.f8a78464.js";import"./base64Conver.08b9f4ec.js";import"./index.e42b0536.js";import"./index.619bca12.js";import"./uniqBy.facde3d1.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),w={class:"p-4"};function x(t,i,e,o,D,I){const m=n("TableAction"),a=n("BasicTable");return p(),f("div",w,[B(a,{onRegister:t.registerTable},{bodyCell:h(({column:u,record:r})=>[u.key==="action"?(p(),A(m,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",x]]);export{Dt as default};