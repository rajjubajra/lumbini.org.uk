(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(1026)}])},6088:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.612b4d10.png",height:739,width:474,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAQAAACb+P2wAAAAP0lEQVR42jXGQQpAQBQA0CczJUphM5rfnMBWcgL3v5GFvNWDpKCDwfV38XxhFjIkmxASzelwWwlFNRnJqmbXv2OlAsG+5WNqAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},3727:function(e,t,l){"use strict";var s=l(5893);l(7294),t.Z=function(){return(0,s.jsx)("div",{className:"fixed z-50 w-full h-screen bg-white flex justify-center items-center ",children:(0,s.jsx)("h1",{className:"text-4xl",children:"Loading..."})})}},623:function(e,t,l){"use strict";l.d(t,{Z:function(){return _}});var s=l(5893),i=l(9303),n=l.n(i),a=l(7294),r=function(e){let{state:t}=e;return(0,s.jsxs)("div",{className:"grid grid-cols-2 grid-rows-2 w-6 h-6 gap-1 \n    ".concat(t?"group hover:gap-0 hover:rotate-90 cursor-pointer":"","  \n    duration-700"),children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-red-500"}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-blue-400"}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-yellow-400"}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-amber-600"})]})},o=function(e){let{state:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"cursor-pointer group",children:[(0,s.jsx)("div",{className:"".concat(t?"rotate-45 translate-y-3":"w-10"," h-1 group-hover:w-8 sm:group-hover:bg-red-600 duration-500 bg-slate-400 my-1")}),(0,s.jsx)("div",{className:"".concat(t?"-rotate-45 translate-y-1 -translate-x-1":"w-8"," h-1 group-hover:w-10 sm:group-hover:bg-sky-400 duration-500 bg-slate-400 my-1")})]})})},d=l(1664),c=l.n(d),u=l(9734),h=l(4494),m=l(6088),x=l(5675),f=l.n(x);let b=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return fetch(...t).then(e=>e.json())};var v=function(){let{data:e,error:t}=(0,u.ZP)("".concat(h.g.URL,"/jsonapi/menu_items/main"),b),[l,i]=(0,a.useState)(!1),[n,d]=(0,a.useState)([]);return((0,a.useEffect)(()=>{(()=>{var t,l,s,i;let n=[],a=[];return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.length)&&(null==e||null===(l=e.data)||void 0===l||l.map(e=>{""!==e.attributes.parent&&a.push({name:e.attributes.title,link:e.attributes.url,parent:e.attributes.parent,weight:e.attributes.weight})})),(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.length)&&(null==e||null===(i=e.data)||void 0===i||i.map(e=>{""===e.attributes.parent&&n.push({name:e.attributes.title,link:e.attributes.url,submenu:e.attributes.expanded,sublinks:[{sublink:a.filter(t=>t.parent===e.id)}],weight:e.attributes.weight})})),d(n)})()},[null==e?void 0:e.data]),t)?(0,s.jsx)("div",{children:"Failed to load"}):e?(0,s.jsxs)("div",{onMouseLeave:()=>i(!1),className:"fixed z-40 left-0 top-0 h-screen border-r ".concat(l?"sm:w-96 w-full":"sm:w-32","    duration-700 bg-white dark:bg-slate-700"),children:[(0,s.jsx)("div",{className:"fixed sm:top-5 sm:left-8 top-2 right-1/2 -mr-4",children:(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)(f(),{className:"w-10",src:m.Z,width:50,height:50,alt:"Logo"})})}),(0,s.jsxs)("div",{onClick:()=>l&&i(!1),className:"sm:absolute hidden top-32 left-10 sm:flex gap-2",children:[(0,s.jsx)(r,{state:l}),(0,s.jsx)("div",{className:"".concat(l?"":"hidden"),children:"LNBDS"})]}),(0,s.jsx)("div",{className:"".concat(l?"hidden":"sm:absolute hidden sm:flex","  \n            duration-700 left-10 top-1/2 w-full"),children:(0,s.jsx)("div",{onClick:()=>i(!0),children:(0,s.jsx)(o,{})})}),(0,s.jsx)("div",{className:"fixed sm:hidden top-4 left-4",children:(0,s.jsx)("div",{onClick:()=>l?i(!1):i(!0),children:(0,s.jsx)(o,{state:l})})}),(0,s.jsx)("div",{className:"".concat(l?"absolute":"hidden"," duration-700 \n        delay-1000 sm:left-10 left-3 sm:top-[40%] top-[20%] w-full"),children:(null==n?void 0:n.length)&&(null==n?void 0:n.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"px-1 flex flex-col text-left md:cursor-pointer group",children:[(0,s.jsx)(c(),{href:e.link,onClick:()=>i(!1),className:"py-0 pr-2 my-2 text-sm flex justify-between items-center",children:e.name}),e.submenu&&(0,s.jsx)("div",{className:"w-full -translate-y-5",children:(0,s.jsxs)("div",{className:"absolute hidden group-hover:block  hover:block",children:[(0,s.jsx)("div",{className:"py-3 -mt-5",children:(0,s.jsx)("div",{className:"w-2 h-2 translate-x-28  rotate-45 absolute mt-2.5 rounded-full bg-red-500"})}),(0,s.jsx)("ul",{className:"p-3.5 grid -translate-y-8 gap-0 w-full",children:e.sublinks.map((e,t)=>(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("h5",{className:"font-semibold",children:e.head}),e.sublink.map((e,t)=>(0,s.jsx)("li",{className:"pl-32 text-sm my-2.5 w-full",children:(0,s.jsx)(c(),{href:e.link,onClick:()=>i(!1),className:"hover:border-b w-full",children:e.name})},t))]},t))})]})})]})},t)))})]}):(0,s.jsx)("div",{children:"Loading..."})},j=l(2010),g=l(9352),p=function(){let{theme:e,setTheme:t}=(0,j.F)();return(0,s.jsx)("button",{className:"p-5",onClick:()=>{t("dark"===e?"light":"dark")},children:"dark"===e?(0,s.jsx)(g.S6R,{}):(0,s.jsx)(g.sEY,{})})},w=function(){return(0,s.jsxs)("div",{className:"fixed z-50 text-xs top-0 right-0 w-20 flex flex-col justify-center items-center",children:[(0,s.jsx)(p,{}),(0,s.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,s.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,s.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,s.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})},N=function(){return(0,s.jsxs)("div",{className:"fixed z-50 text-xs top-0 -right-6 w-20 flex flex-col justify-center items-center",children:[(0,s.jsx)(p,{}),(0,s.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,s.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,s.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,s.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})};function y(){return(0,s.jsx)(c(),{href:"https://lumbini.yellow-website.com/user",target:"_blank",className:"text-slate-900 text-xs cursor-pointer px-2 py-2",children:"Login"})}var k=function(){let e=new Date;return(0,s.jsx)("footer",{className:"bottom-0 w-full flex justify-center font-extralight bg-white dark:bg-slate-700 z-50 mt-5",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("div",{className:"hidden sm:block",children:[(0,s.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),". For free distribution only as a gift of dhamma. Not for commercial use. | ",(0,s.jsx)(y,{})]}),(0,s.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,s.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]}),(0,s.jsxs)("div",{className:"sm:hidden block",children:[(0,s.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),".",(0,s.jsx)("br",{})," For free distribution only as a gift of dhamma. ",(0,s.jsx)("br",{}),"Not for commercial use. | ",(0,s.jsx)(y,{})]}),(0,s.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,s.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]})]})})},_=function(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"".concat(n().className," w-full min-h-screen"),children:[(0,s.jsxs)("div",{className:"relative md:block hidden",children:[(0,s.jsx)(v,{}),(0,s.jsx)(w,{})]}),(0,s.jsx)("div",{className:"lg:ml-40 sm:ml-24 lg:px-20 px-4 lg:mr-20",children:t}),(0,s.jsxs)("div",{className:"relative md:hidden block",children:[(0,s.jsx)(v,{}),(0,s.jsx)(N,{})]})]}),(0,s.jsx)(k,{})]})}},4494:function(e,t,l){"use strict";l.d(t,{g:function(){return s}});let s={URL:"https://lumbini.yellow-website.com"}},1026:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v},metadata:function(){return f}});var s=l(5893),i=l(9008),n=l.n(i),a=l(7294),r=l(9734),o=l(4494),d=l(3727);let c=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return fetch(...t).then(e=>e.json())};var u=function(){var e,t,l;let[i,n]=(0,a.useState)(0),{data:u,error:h}=(0,r.ZP)("".concat(o.g.URL,"/jsonapi/node/dhamma_quotes?include=field_quote_by,field_quote_source"),c);return((0,a.useEffect)(()=>{var e,t;u&&(null==u?void 0:null===(e=u.data)||void 0===e?void 0:e.length)&&n(Math.floor(Math.random()*(null==u?void 0:null===(t=u.data)||void 0===t?void 0:t.length)))},[u]),h)?(0,s.jsx)("div",{children:"Failed to load"}):u?(0,s.jsx)("div",{className:"relative z-0 w-full h-screen flex flex-col justify-center items-center",children:(null==u?void 0:null===(e=u.data)||void 0===e?void 0:e.length)&&(0,s.jsxs)("div",{className:"ml-10 mr-10",children:[(0,s.jsx)("div",{className:" sm:text-6xl font-sans tracking-wider text-3xl font-thin",dangerouslySetInnerHTML:{__html:null==u?void 0:null===(t=u.data)||void 0===t?void 0:t[i].attributes.body.value}}),(0,s.jsxs)("span",{className:"block md:mt-10 mt-2 text-right italic font-thin",children:["- ",(e=>{let t=u.included.findIndex(t=>t.id===e);return u.included[t].attributes.name})(null===(l=null==u?void 0:u.data[i])||void 0===l?void 0:l.relationships.field_quote_by.data.id)]})]})}):(0,s.jsx)(d.Z,{})},h=l(5675),m=l.n(h),x=l(623);let f={title:"Welcome to Lumbini Nepalese Buddha Dharma Society"},b=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return fetch(...t).then(e=>e.json())};function v(){var e,t;let{data:l,error:i}=(0,r.ZP)("".concat(o.g.URL,"/jsonapi/node/lnbds_dhamma_quote_background_im?include=field_image_media.field_media_image"),b);return(console.log(null===(e=null==l?void 0:l.included[1])||void 0===e?void 0:e.attributes.uri.url),i)?(0,s.jsx)("div",{children:"Failed to load"}):l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"Welcome to Lumbini Nepalese Buddha Dharma Society"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("meta",{property:"og:title",content:"Welcome to Lumbini Nepalese Buddha Dharma Society"}),(0,s.jsx)("meta",{property:"og:url",content:"https://www.lumbini.org.uk"}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:description",content:"Lumbini Nepalese Buddha Dharma Society is a non-political, non-racial, non-profit voluntary organisation to practice buddha dharma in the UK. "}),(0,s.jsx)("meta",{name:"description",content:"Lumbini Nepalese Buddha Dharma Society is a non-political, non-racial, non-profit voluntary organisation to practice buddha dharma in the UK. "}),(0,s.jsx)("meta",{name:"author",content:"yellow-website.com"})]}),(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(u,{}),(0,s.jsx)(m(),{className:"fiexed w-full mt-0 h-screen z-0 opacity-25",style:{objectFit:"cover"},src:"".concat(o.g.URL).concat(null===(t=null==l?void 0:l.included[1])||void 0===t?void 0:t.attributes.uri.url),alt:"bg Image",layout:"fill",objectFit:"contain"})]})]}):(0,s.jsx)(d.Z,{})}},9008:function(e,t,l){e.exports=l(2636)}},function(e){e.O(0,[937,374,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);