import{y as e,aM as t,bY as o,a as n,u as i,Z as r,B as s,F as a,v as d,a1 as p,a6 as m}from"./vendor.3dc066e5.js";import{u as l}from"./index.b437b00c.js";import c from"./index.f13e7c38.js";import"./index.b41e2c0e.js";import"./useWindowSizeFn.308e6090.js";import"./index.3e5e5108.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useContentViewHeight.16e0f08b.js";/* empty css              *//* empty css              *//* empty css              */import"./index.60785bf0.js";import"./Viewer.06f57865.js";import"./process.424afad8.js";var u=e({name:"BaseActionButtons",components:{Button:t,ApartmentOutlined:o,BpmnPreviewModal:c},setup(e,{emit:t}){const{currentRoute:o}=n(),{params:{modelKey:r},query:{taskId:s,procInstId:a}}=i(o),[d,{openModal:p,setModalProps:m}]=l();return{registerBpmnPreviewModal:d,handleCloseFunc:function(){return Promise.resolve(!0)},showFlowDiagram:function(){p(!0,{modelKey:r,procInstId:a||"",isUpdate:!0}),m({bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"关闭"})}}}});u.render=function(e,t,o,n,i,l){const c=r("ApartmentOutlined"),u=r("Button"),j=r("BpmnPreviewModal");return s(),a(m,null,[d(u,{title:"查看流程图",type:"link",onClick:e.showFlowDiagram},{icon:p((()=>[d(c)])),_:1},8,["onClick"]),d(j,{onRegister:e.registerBpmnPreviewModal},null,8,["onRegister"])],64)};export default u;