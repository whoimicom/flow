import{j as e,bC as s,K as t,o as n,m as a,n as i,q as r,N as o,x as d}from"./vendor.686fd1d4.js";/* empty css              */import{c as p}from"./index.7fecfddd.js";import{b as m}from"./index.8a7ce98a.js";import"./index.943a48a4.js";/* empty css              *//* empty css              */import"./index.608a72a0.js";import"./index.d3fffd33.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.a820d434.js";import"./useContentViewHeight.d2763f54.js";/* empty css              */import"./useSortable.dc62f82e.js";import"./lock.a6eaee00.js";var f=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=p("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&m(e.event,s)}}}});const u=d()(((e,s,d,p,m,f)=>{const u=t("InputNumber");return n(),a("div",{class:e.prefixCls},[i("span",null,r(e.title),1),i(u,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));f.render=u,f.__scopeId="data-v-212dae16";export default f;