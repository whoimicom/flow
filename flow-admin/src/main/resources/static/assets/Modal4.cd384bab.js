import{B as l,a as c}from"./index.4ff668bf.js";import{B as d}from"./BasicForm.d8aa86d3.js";import{u}from"./useForm.d7bb3373.js";import{a as f,x as B,az as g,an as h,aB as p,i as C,l as _,C as b,p as R,q as V,aC as v}from"./index.ef013507.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return C(),_(m,v(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[R("div",M,[V(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};