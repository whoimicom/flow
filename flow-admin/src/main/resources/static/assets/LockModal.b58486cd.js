var f=(o,l,r)=>new Promise((c,t)=>{var d=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,a);s((r=r.apply(o,l)).next())});import{az as w,a as y,c as $,w as F,h as _,aB as u,i as L,l as M,C as g,p,s as m,t as k,q as h,D as S,aC as I,e as N}from"./index.ef013507.js";import{B as R,a as b}from"./index.4ff668bf.js";import{B as P}from"./BasicForm.d8aa86d3.js";import{u as D}from"./useForm.d7bb3373.js";import{u as U}from"./lock.a92dc45e.js";import{h as V}from"./header.d801b988.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const q=y({name:"LockModal",components:{BasicModal:R,BasicForm:P},setup(){const{t:o}=N(),{prefixCls:l}=$("header-lock-modal"),r=F(),c=U(),t=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:a}]=b(),[s,{validateFields:e,resetFields:i}]=D({showActionButtonGroup:!1,schemas:[{field:"password",label:o("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const B=(yield e()).password;a(),c.setLockInfo({isLock:!0,pwd:B}),yield i()})}const C=_(()=>{const{avatar:n}=r.getUserInfo;return n||V});return{t:o,prefixCls:l,getRealName:t,register:d,registerForm:s,handleLock:v,avatar:C}}}),z=["src"];function A(o,l,r,c,t,d){const a=u("BasicForm"),s=u("a-button"),e=u("BasicModal");return L(),M(e,I({footer:null,title:o.t("layout.header.lockScreen")},o.$attrs,{class:o.prefixCls,onRegister:o.register}),{default:g(()=>[p("div",{class:m(`${o.prefixCls}__entry`)},[p("div",{class:m(`${o.prefixCls}__header`)},[p("img",{src:o.avatar,class:m(`${o.prefixCls}__header-img`)},null,10,z),p("p",{class:m(`${o.prefixCls}__header-name`)},k(o.getRealName),3)],2),h(a,{onRegister:o.registerForm},null,8,["onRegister"]),p("div",{class:m(`${o.prefixCls}__footer`)},[h(s,{type:"primary",block:"",class:"mt-2",onClick:o.handleLock},{default:g(()=>[S(k(o.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var So=w(q,[["render",A]]);export{So as default};