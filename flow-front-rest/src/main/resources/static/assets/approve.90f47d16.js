import{P as h}from"./index.89952870.js";import{L as I,a as F,cV as C,v as m,bA as P,bQ as k,h as d,aF as o,o as S,i as V,z as r,m as t,B as s,t as b,l as a}from"./index.bd2622a4.js";import{S as x}from"./index.644e7005.js";import{T as E}from"./index.c0db3e6e.js";import R from"./FormContainer.d0bbf9ea.js";import T from"./ActionButtons.7c5ddeb1.js";import w from"./BaseActionButtons.bbe374a0.js";import H from"./ApproveActionButtons.2f99dba9.js";import N from"./ProcessBackButton.04b60116.js";import $ from"./ApprovalHistory.30296419.js";import{h as D,i as W}from"./process.db9f2507.js";import"./index.11a0419a.js";import"./index.1c28d80e.js";import"./useSize.8a6ae0ee.js";import"./eagerComputed.e93fe3c7.js";import"./useWindowSizeFn.67ef7ff7.js";import"./useContentViewHeight.8f4c0ff9.js";import"./ArrowLeftOutlined.31e20ceb.js";import"./index.2c861a83.js";import"./transButton.6e9f0377.js";import"./useFlexGapSupport.4d2f8b85.js";import"./index.21037d5d.js";import"./index.34f9998b.js";import"./index.bf231f43.js";import"./CopyOutlined.702be02f.js";import"./index.43820172.js";import"./index.db8c998d.js";import"./index.3a557513.js";import"./get.20c5cbf9.js";import"./index.0e48b9d8.js";import"./index.08f383df.js";import"./FullscreenOutlined.0d0c0c2d.js";import"./index.bb774ff6.js";import"./index.e0ace9a9.js";import"./throttleByAnimationFrame.fc5d90b2.js";import"./Viewer.91f06516.js";import"./PlusOutlined.f9ed6f81.js";import"./ApartmentOutlined.e274e77c.js";import"./index.7fde8432.js";import"./FlowDiagramModal.25f8f698.js";import"./ClockCircleOutlined.3d5ad35f.js";const K=F({components:{LeftOutlined:C,PageWrapper:h,FormContainer:R,ActionButtons:T,BaseActionButtons:w,ApproveActionButtons:H,ApprovalHistory:$,ProcessBackButton:N,Space:x,Tag:E},setup(){const n=m(),c=m({}),u=m({}),f=m(""),_=P(),{currentRoute:B}=k(),{params:{modelKey:l},query:{procInstId:p}}=d(B);D({modelKey:l}).then(e=>{c.value=e}),p&&W({procInstId:p}).then(e=>{u.value=e,d(n).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:f,modelBaseInfo:c,formContainerRef:n,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(n,c,u,f,_,B){const l=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),A=o("ApprovalHistory"),y=o("ApproveActionButtons"),g=o("PageWrapper");return S(),V(g,{class:"!mt-4 process-container"},{title:r(()=>[t(l),s(" "+b(n.startorBaseInfo.formName||n.modelBaseInfo.name||"-")+" ",1),t(p)]),extra:r(()=>[]),footer:r(()=>[a("div",L,[t(e,null,{default:r(()=>[a("span",null,[s(" \u6D41\u7A0BBP\uFF1A"),t(i,null,{default:r(()=>[s("\u5F20\u4E09")]),_:1})]),a("span",null,[s(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),t(i,null,{default:r(()=>[s("\u674E\u56DB")]),_:1})])]),_:1})])]),default:r(()=>[a("div",M,[t(v,{ref:"formContainerRef"},null,512)]),a("div",q,[t(A,{ref:"approvalHistoryRef"},null,512)]),t(y)]),_:1})}var To=I(K,[["render",z]]);export{To as default};