import{B as c,F as u,H as d}from"./TableImg.7ea72800.js";import"./BasicForm.35bf3188.js";import{u as _}from"./useTable.02d43016.js";import{getCustomHeaderColumns as B}from"./tableData.38d0f3c2.js";import{d as f}from"./table.dcdf60cd.js";import{az as C,a as H,dB as k,aB as o,o as t,i,p as m,B as F,C as p,F as g,k as h}from"./index.741c5d36.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.ffcec715.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./transButton.76f8f88c.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.abe396df.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./index.ef1baeca.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const T=H({components:{BasicTable:c,FormOutlined:u,BasicHelp:k,HeaderCell:d},setup(){const[e]=_({title:"\u5B9A\u9AD8/\u5934\u90E8\u81EA\u5B9A\u4E49",api:f,columns:B(),canResize:!1,scroll:{y:100}});return{registerTable:e}}}),b={class:"p-4"},x={key:0};function y(e,A,E,$,v,D){const s=o("BasicHelp"),a=o("FormOutlined"),n=o("HeaderCell"),l=o("BasicTable");return t(),i("div",b,[m(l,{onRegister:e.registerTable},{headerCell:F(({column:r})=>[r.key==="name"?(t(),i("span",x,[p(" \u59D3\u540D "),m(s,{class:"ml-2",text:"headerHelpMessage\u65B9\u5F0F2"})])):r.key==="address"?(t(),i(g,{key:1},[p(" \u5730\u5740 "),m(a,{class:"ml-2"})],64)):(t(),h(n,{key:2,column:r},null,8,["column"]))]),_:1},8,["onRegister"])])}var Oo=C(T,[["render",y]]);export{Oo as default};