var I=Object.defineProperty;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,a,t)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,C=(e,a)=>{for(var t in a||(a={}))R.call(a,t)&&w(e,t,a[t]);if(b)for(var t of b(a))V.call(a,t)&&w(e,t,a[t]);return e};var J=(e,a,t)=>new Promise((i,d)=>{var v=c=>{try{r(t.next(c))}catch(o){d(o)}},n=c=>{try{r(t.throw(c))}catch(o){d(o)}},r=c=>c.done?i(c.value):Promise.resolve(c.value).then(v,n);r((t=t.apply(e,a)).next())});import{B as F,a as W}from"./index.56ac9033.js";import{P as x}from"./index.6f4a9d56.js";import{az as j,a as z,b4 as q,e5 as G,w as f,a9 as D,fD as O,an as T,h as H,aB as g,bS as Q,o as k,k as B,B as E,n as U,i as X,F as Y,aE as Z,C as ee,t as te,l as le,p as K,y as se,aC as ae,j as re}from"./index.bbfb8c5d.js";import{T as oe}from"./index.bd278e5f.js";import{a as ie}from"./dept.7ae8ecb4.js";import{_ as ne}from"./index.6f678a8f.js";import"./useWindowSizeFn.daa22200.js";import"./FullscreenOutlined.7b1f5985.js";import"./index.b7fa4bcc.js";import"./index.8643b1cc.js";import"./useSize.2da926c0.js";import"./eagerComputed.2918d49d.js";import"./useContentViewHeight.ce579b14.js";import"./ArrowLeftOutlined.32f822b8.js";import"./index.40637d17.js";import"./transButton.15723253.js";import"./fromPairs.daf93cb7.js";import"./index.424465cb.js";import"./useContextMenu.b34fb2fb.js";import"./index.eb776706.js";import"./get.476f8b78.js";const ce=z({props:{title:{type:String,default:"\u4EBA\u5458\u9009\u62E9"}},name:"OrgSelector",components:{BasicModal:F,PageWrapper:x,Tag:oe,BasicTree:ne,Spin:q,CloseCircleOutlined:G},setup(e,{emit:a}){const t=f([]),i=f(!1),d=f([]),v=f(!1),n=f([]),r=f([]),c=f(null);function o(){const l=re(c);if(!l)throw new Error("tree is null!");return l}D(r,(l,u)=>{if(i.value){const m=l.map(p=>{let s=O(d.value,h=>h.id===p,{id:"id",pid:"pid",children:"children"});return s=C({},s),delete s.children,s});T(()=>{t.value=JSON.parse(JSON.stringify(m)),o().setCheckedKeys(l)})}else{const m=l.map(p=>{let s=O(d.value,h=>h.id===p,{id:"id",pid:"pid",children:"children"});return s=C({},s),delete s.children,s});T(()=>{t.value=JSON.parse(JSON.stringify(m)),o().setSelectedKeys(l)})}},{immediate:!0,deep:!0}),D(n,(l,u)=>{if(!i.value){const m=l.map(p=>{let s=O(d.value,h=>h.id===p,{id:"id",pid:"pid",children:"children"});return s=C({},s),delete s.children,s});T(()=>{t.value=JSON.parse(JSON.stringify(m)),o().setSelectedKeys(l)})}},{immediate:!0,deep:!0});const[y,{setModalProps:_,closeModal:S}]=W(l=>J(this,null,function*(){const{selectorProps:u}=l;v.value=!0,i.value=u.multiSelect,ie().then(m=>{d.value=m,u.selectedList;let p=u.selectedList.map(s=>s.id);i.value?(r.value=p,setTimeout(()=>{o().setCheckedKeys(r.value),o().setExpandedKeys(r.value)},200)):(n.value=p,setTimeout(()=>{o().setSelectedKeys(n.value),o().setExpandedKeys(n.value)},200))}).finally(()=>{v.value=!1}),_({wrapClassName:"selector-content"})}));function N(l){i.value?r.value=JSON.parse(JSON.stringify(l.checked)):r.value=JSON.parse(JSON.stringify(l.checked.length>0?[l.checked[0]]:[]))}function L(l){if(!i.value)n.value=l;else debugger}const M=H(()=>"\u9009\u62E9\u4EBA\u5458");function P(){i.value?r.value=[]:n.value=[]}function A(l){i.value?r.value.splice(r.value.findIndex(u=>u===l),1):n.value.splice(n.value.findIndex(u=>u===l),1)}function $(){a("success",t),S()}return{treeRef:c,multiSelect:i,treeData:d,treeLoading:v,registerModal:y,getTitle:M,selectedList:t,removeAllSelected:P,removeSelectedItem:A,handleSubmit:$,handleCheck:N,handleSelect:L}}}),de={class:"selected-items"};function ue(e,a,t,i,d,v){const n=g("Tag"),r=g("CloseCircleOutlined"),c=g("BasicTree"),o=g("PageWrapper"),y=g("BasicModal"),_=Q("loading");return k(),B(y,ae({wrapClassName:"selector-body org"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:E(()=>[U("div",de,[(k(!0),X(Y,null,Z(e.selectedList,S=>(k(),B(n,{color:"processing",closable:"",onClose:N=>{N.preventDefault(),e.removeSelectedItem(S.id)}},{default:E(()=>[ee(te(S.shortName),1)]),_:2},1032,["onClose"]))),256)),e.selectedList.length>0?(k(),B(r,{key:0,class:"close-all",title:"\u6E05\u7A7A",onClick:e.removeAllSelected},null,8,["onClick"])):le("",!0)]),K(o,{dense:"",contentClass:"flex"},{default:E(()=>[se(K(c,{ref:"treeRef",class:"w-4/4 org-tree",title:"\u7EC4\u7EC7",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"shortName"},onCheck:e.handleCheck,onSelect:e.handleSelect,checkable:!!e.multiSelect,selectable:!e.multiSelect,checkStrictly:!0,autoExpandParent:""},null,8,["treeData","onCheck","onSelect","checkable","selectable"]),[[_,e.treeLoading]])]),_:1})]),_:1},16,["onRegister","title","onOk"])}var Me=j(ce,[["render",ue]]);export{Me as default};