import{B as e,a as o}from"./index.0433a71f.js";import{_ as i}from"./BasicForm.8dd34761.js";import{u as s}from"./useForm.ba0f60da.js";import{y as r,r as t,Z as a,B as d,F as n,a2 as m,v as p,a0 as c}from"./vendor.880b4c6c.js";import"./index.63ccfb82.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=r({components:{BasicModal:e,BasicForm:i},setup(){const e=t({}),[i,{}]=s({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:r,schemas:f,registerForm:i,model:e}}});l.render=function(e,o,i,s,r,t){const f=a("BasicForm"),l=a("BasicModal");return d(),n(l,c(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(f,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default l;