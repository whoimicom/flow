import{k as e,bA as s,K as n,o as t,n as a,q as r,s as i,N as p,x as o}from"./vendor.9d9efc92.js";/* empty css              */import{c as m}from"./index.3f4b0a4c.js";import{b as u}from"./index.5e6993ca.js";import"./useDrawer.0850b094.js";/* empty css              *//* empty css              */import"./createAsyncComponent.a0cf9207.js";import"./useFrameKeepAlive.67aeecc7.js";var c=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=m("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&u(e.event,s)}}}});const l=o()(((e,s,o,m,u,c)=>{const l=n("InputNumber");return t(),a("div",{class:e.prefixCls},[r("span",null,i(e.title),1),r(l,p(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));c.render=l,c.__scopeId="data-v-212dae16";export default c;