import{az as m,a as l,e1 as c,c as d,aB as u,o as r,i as o,F as C,aE as _,r as p,bp as f,p as k}from"./index.741c5d36.js";import{b as h}from"./index.2ad701f5.js";import"./index.bfe68b8f.js";import"./index.1cbe5b78.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.d23d5e7f.js";import"./index.9cfe730d.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.260a512e.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./useFrameKeepAlive.bc2bf6e8.js";import"./uniqBy.c3dbbda0.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./index.97f32770.js";import"./useRefs.31b824e4.js";import"./PlusOutlined.5bbe1aad.js";import"./RedoOutlined.d982c887.js";import"./index.8f63e937.js";import"./lock.0db9de73.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,g,b){const a=u("CheckOutlined");return r(),o("div",{class:p(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:z=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(a)],14,y))),128))],2)}var M=m(v,[["render",$]]);export{M as default};