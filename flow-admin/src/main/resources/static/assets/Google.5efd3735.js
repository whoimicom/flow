var c=(e,r,t)=>new Promise((n,o)=>{var s=a=>{try{p(t.next(a))}catch(l){o(l)}},i=a=>{try{p(t.throw(a))}catch(l){o(l)}},p=a=>a.done?n(a.value):Promise.resolve(a.value).then(s,i);p((t=t.apply(e,r)).next())});import{u as f}from"./useScript.7216a127.js";import{az as g,a as m,w as u,O as d,o as w,i as h,bp as _,an as y,j as M}from"./index.741c5d36.js";const k="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true",z=m({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=u(null),{toPromise:r}=f({src:k});function t(){return c(this,null,function*(){yield r(),yield y();const n=M(e);if(!n)return;const o=window.google,s={lat:116.404,lng:39.915},i=new o.maps.Map(n,{zoom:4,center:s});new o.maps.Marker({position:s,map:i,title:"Hello World!"})})}return d(()=>{t()}),{wrapRef:e}}});function S(e,r,t,n,o,s){return w(),h("div",{ref:"wrapRef",style:_({height:e.height,width:e.width})},null,4)}var x=g(z,[["render",S]]);export{x as default};