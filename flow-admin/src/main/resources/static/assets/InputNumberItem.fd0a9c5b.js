import{y as e,bF as s,Z as t,B as n,F as i,v as r,J as a,a0 as o,K as p}from"./vendor.880b4c6c.js";/* empty css              */import{c as m}from"./index.a33a5e4d.js";import{b as d}from"./index.ef19295c.js";import"./index.1fccb455.js";/* empty css              *//* empty css              */import"./index.8376f5da.js";import"./index.e7adf083.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.62e399e2.js";import"./useContentViewHeight.d4b428eb.js";/* empty css              */import"./useSortable.1c9ace8f.js";import"./lock.d7876fcb.js";var u=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=m("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&d(e.event,s)}}}});const l=p()(((e,s,p,m,d,u)=>{const l=t("InputNumber");return n(),i("div",{class:e.prefixCls},[r("span",null,a(e.title),1),r(l,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));u.render=l,u.__scopeId="data-v-212dae16";export default u;