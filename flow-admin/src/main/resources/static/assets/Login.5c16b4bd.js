import{A as e,a as o,b as s,u as r,c as t,d as l,e as i}from"./index.ffeb6485.js";import n from"./LoginForm.3cd913f1.js";import a from"./ForgetPasswordForm.08a31468.js";import m from"./RegisterForm.92597fc7.js";import d from"./MobileForm.a3325fd5.js";import x from"./QrCodeForm.4fbce950.js";import{j as p,i as c,K as f,o as g,m as u,X as w,n as b,q as h}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.5dea5c20.js";import"./index.f6d89420.js";import"./index.dc4f899a.js";import"./index.5fb176bc.js";import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";var F=p({name:"Login",components:{AppLogo:e,LoginForm:n,ForgetPasswordForm:a,RegisterForm:m,MobileForm:d,QrCodeForm:x,AppLocalePicker:o,AppDarkModeToggle:s},props:{sessionTimeout:{type:Boolean}},setup(){const e=r(),{prefixCls:o}=t("login"),{t:s}=i(),n=l();return{t:s,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:n.getShowPicker}}});const j={class:"-enter-x xl:hidden"},v={class:"container relative h-full py-2 mx-auto sm:px-10"},y={class:"flex h-full"},L={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},k={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},C={class:"mt-4 text-3xl inline-block"},A={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},P={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"};F.render=function(e,o,s,r,t,l){const i=f("AppLocalePicker"),n=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),d=f("ForgetPasswordForm"),x=f("RegisterForm"),p=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[!e.sessionTimeout&&e.showLocale?(g(),u(i,{key:0,class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1})):w("",!0),e.sessionTimeout?w("",!0):(g(),u(n,{key:1,class:"absolute top-3 right-7 enter-x"})),b("span",j,[b(a,{alwaysShowTitle:!0})]),b("div",v,[b("div",y,[b("div",L,[b(a,{class:"-enter-x"}),b("div",k,[b("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),b("div",T,[b("span",C,h(e.t("sys.login.signInTitle")),1)]),b("div",A,h(e.t("sys.login.signInDesc")),1)])]),b("div",P,[b("div",{class:[`${e.prefixCls}-form`,"\r\n              my-auto\r\n              mx-auto\r\n              xl:ml-20 xl:bg-transparent\r\n              px-5\r\n              py-8\r\n              sm:px-8\r\n              xl:p-4\r\n              rounded-md\r\n              shadow-md\r\n              xl:shadow-none\r\n              w-full\r\n              sm:w-3/4\r\n              lg:w-2/4\r\n              xl:w-auto\r\n              enter-x\r\n              relative\r\n            "]},[b(m),b(d),b(x),b(p),b(c)],2)])])])],2)};export default F;