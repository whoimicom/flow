import{B as e}from"./index.2bb7e54d.js";import{D as t}from"./index.4a8ad20b.js";import{e as s}from"./index.eb9d6ed9.js";import{getDescSchema as o}from"./data.6a045629.js";import{u as r}from"./useDescription.95f26566.js";import{j as i,K as a,o as n,m as d,Q as m,n as f,N as p}from"./vendor.686fd1d4.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */var l=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=r({column:2,schema:o()});return{register:t,useI18n:s,t:e}}});l.render=function(e,t,s,o,r,i){const l=a("Description"),c=a("BasicModal");return n(),d(c,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:m((()=>[f(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;