var B=(t,a,r)=>new Promise((s,i)=>{var e=o=>{try{n(r.next(o))}catch(l){i(l)}},p=o=>{try{n(r.throw(o))}catch(l){i(l)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(e,p);n((r=r.apply(t,a)).next())});import{B as $,v as P}from"./useForm.61a9a859.js";import{L as g,a as h,cM as F,I as _,ev as k,v as I,aF as u,o as d,i as f,z as m,m as b,B as v,j as C}from"./index.f3fe0f3f.js";import{P as y}from"./index.1b5d0750.js";import"./index.aeb627bf.js";import"./index.00811394.js";import"./useFlexGapSupport.396b27be.js";import"./_baseIteratee.0c18463b.js";import"./get.ac77a413.js";import"./useSize.5ce57631.js";import"./index.78295ba6.js";import"./index.73c18e7d.js";import"./index.5c6ad28f.js";import"./index.34bbe3a9.js";import"./index.0db522c7.js";import"./index.a027b304.js";import"./eagerComputed.cc2dc322.js";import"./transButton.b11946f6.js";import"./index.be9b0bc6.js";import"./index.033bc9aa.js";import"./useWindowSizeFn.8e1e2f4b.js";import"./FullscreenOutlined.a1ca65d7.js";import"./useRefs.e4782df1.js";import"./download.63b4aeaf.js";import"./index.0fe5727c.js";import"./ClockCircleOutlined.fad12e2b.js";import"./index.17a7febc.js";import"./uniqBy.28c373f9.js";import"./index.e70aa727.js";import"./index.f1d0cead.js";import"./useContentViewHeight.d39ef36d.js";import"./ArrowLeftOutlined.677a463d.js";import"./index.3b80093e.js";const S=h({components:{BasicForm:$,CollapseContainer:F,PageWrapper:y,[_.name]:_,Button:k},setup(){const[t,{appendSchemaByField:a,removeSchemaByFiled:r,validate:s}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s()}catch(o){}})}const e=I(1);function p(){a({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`${e.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),e.value++}function n(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:t,handleSubmit:i,add:p,del:n}}});function q(t,a,r,s,i,e){const p=u("Button"),n=u("BasicForm"),o=u("CollapseContainer"),l=u("PageWrapper");return d(),f(l,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:m(()=>[b(o,{title:"\u8868\u5355\u589E\u5220"},{default:m(()=>[b(n,{onRegister:t.register,onSubmit:t.handleSubmit},{add:m(({field:c})=>[Number(c)===0?(d(),f(p,{key:0,onClick:t.add},{default:m(()=>[v("+")]),_:1},8,["onClick"])):C("",!0),c>0?(d(),f(p,{key:1,onClick:N=>t.del(c)},{default:m(()=>[v("-")]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var so=g(S,[["render",q]]);export{so as default};