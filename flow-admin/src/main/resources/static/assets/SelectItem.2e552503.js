import{y as e,bx as t,j as s,Z as i,B as n,F as a,v as d,J as o,a0 as r,K as l}from"./vendor.880b4c6c.js";import{c as p}from"./index.63ccfb82.js";import{b as f}from"./index.8fbfa3cc.js";import"./index.3bb6d2f5.js";/* empty css              *//* empty css              */import"./index.604329de.js";import"./index.5e9ed71f.js";import"./useWindowSizeFn.564cf32e.js";import"./useFrameKeepAlive.7ee6ff1f.js";import"./useContentViewHeight.0b72030b.js";/* empty css              */import"./useSortable.7fdc4a8b.js";import"./lock.579cdda6.js";var m=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const c=l()(((e,t,s,l,p,f)=>{const m=i("Select");return n(),a("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(m,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));m.render=c,m.__scopeId="data-v-2dba4940";export default m;