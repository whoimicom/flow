import{az as i,a as u,ba as l,b9 as d,aJ as s,h as _,aB as a,i as I,l as f,C as y,p as r,q as k,t as M,aw as g}from"./index.ef013507.js";const C=u({name:"DropdownMenuItem",components:{MenuItem:l.Item,Icon:d},props:{key:s.string,text:s.string,icon:s.string},setup(e){const n=g();return{itemKey:_(()=>{var t,o;return e.key||((o=(t=n==null?void 0:n.vnode)==null?void 0:t.props)==null?void 0:o.key)})}}}),h={class:"flex items-center"};function x(e,n,c,t,o,B){const p=a("Icon"),m=a("MenuItem");return I(),f(m,{key:e.itemKey},{default:y(()=>[r("span",h,[k(p,{icon:e.icon,class:"mr-1"},null,8,["icon"]),r("span",null,M(e.text),1)])]),_:1})}var v=i(C,[["render",x]]);export{v as default};