(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[935],{9916:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/links",function(){return s(4849)}])},6088:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.612b4d10.png",height:739,width:474,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAQAAACb+P2wAAAAP0lEQVR42jXGQQpAQBQA0CczJUphM5rfnMBWcgL3v5GFvNWDpKCDwfV38XxhFjIkmxASzelwWwlFNRnJqmbXv2OlAsG+5WNqAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},3727:function(e,t,s){"use strict";var l=s(5893);s(7294),t.Z=function(){return(0,l.jsx)("div",{className:"fixed z-50 w-full h-screen bg-white flex justify-center items-center ",children:(0,l.jsx)("h1",{className:"text-4xl",children:"Loading..."})})}},623:function(e,t,s){"use strict";s.d(t,{Z:function(){return A}});var l=s(5893),i=s(9303),r=s.n(i),n=s(7294),a=function(e){let{state:t}=e;return(0,l.jsxs)("div",{className:"grid grid-cols-2 grid-rows-2 w-6 h-6 gap-1 \n    ".concat(t?"group hover:gap-0 hover:rotate-90 cursor-pointer":"","  \n    duration-700"),children:[(0,l.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-red-500"}),(0,l.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-blue-400"}),(0,l.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-yellow-400"}),(0,l.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-amber-600"})]})},o=function(e){let{state:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"cursor-pointer group",children:[(0,l.jsx)("div",{className:"".concat(t?"rotate-45 translate-y-3":"w-10"," h-1 group-hover:w-8 sm:group-hover:bg-red-600 duration-500 bg-slate-400 my-1")}),(0,l.jsx)("div",{className:"".concat(t?"-rotate-45 translate-y-1 -translate-x-1":"w-8"," h-1 group-hover:w-10 sm:group-hover:bg-sky-400 duration-500 bg-slate-400 my-1")})]})})},d=s(1664),c=s.n(d),u=s(9734),h=s(4494),m=s(6088),x=s(5675),b=s.n(x);let j=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return fetch(...t).then(e=>e.json())};var f=function(){let{data:e,error:t}=(0,u.ZP)("".concat(h.g.URL,"/jsonapi/menu_items/main"),j),[s,i]=(0,n.useState)(!1),[r,d]=(0,n.useState)([]);return((0,n.useEffect)(()=>{(()=>{var t,s,l,i;let r=[],n=[];return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.length)&&(null==e||null===(s=e.data)||void 0===s||s.map(e=>{""!==e.attributes.parent&&n.push({name:e.attributes.title,link:e.attributes.url,parent:e.attributes.parent,weight:e.attributes.weight})})),(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.length)&&(null==e||null===(i=e.data)||void 0===i||i.map(e=>{""===e.attributes.parent&&r.push({name:e.attributes.title,link:e.attributes.url,submenu:e.attributes.expanded,sublinks:[{sublink:n.filter(t=>t.parent===e.id)}],weight:e.attributes.weight})})),d(r)})()},[null==e?void 0:e.data]),t)?(0,l.jsx)("div",{children:"Failed to load"}):e?(0,l.jsxs)("div",{onMouseLeave:()=>i(!1),className:"fixed z-40 left-0 top-0 h-screen border-r ".concat(s?"sm:w-96 w-full":"sm:w-32","    duration-700 bg-white dark:bg-slate-700"),children:[(0,l.jsx)("div",{className:"fixed sm:top-5 sm:left-8 top-2 right-1/2 -mr-4",children:(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)(b(),{className:"w-10",src:m.Z,width:50,height:50,alt:"Logo"})})}),(0,l.jsxs)("div",{onClick:()=>s&&i(!1),className:"sm:absolute hidden top-32 left-10 sm:flex gap-2",children:[(0,l.jsx)(a,{state:s}),(0,l.jsx)("div",{className:"".concat(s?"":"hidden"),children:"LNBDS"})]}),(0,l.jsx)("div",{className:"".concat(s?"hidden":"sm:absolute hidden sm:flex","  \n            duration-700 left-10 top-1/2 w-full"),children:(0,l.jsx)("div",{onClick:()=>i(!0),children:(0,l.jsx)(o,{})})}),(0,l.jsx)("div",{className:"fixed sm:hidden top-4 left-4",children:(0,l.jsx)("div",{onClick:()=>s?i(!1):i(!0),children:(0,l.jsx)(o,{state:s})})}),(0,l.jsx)("div",{className:"".concat(s?"absolute":"hidden"," duration-700 \n        delay-1000 sm:left-10 left-3 sm:top-[40%] top-[20%] w-full"),children:(null==r?void 0:r.length)&&(null==r?void 0:r.map((e,t)=>(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"px-1 flex flex-col text-left md:cursor-pointer group",children:[(0,l.jsx)(c(),{href:e.link,onClick:()=>i(!1),className:"py-0 pr-2 my-2 text-sm flex justify-between items-center",children:e.name}),e.submenu&&(0,l.jsx)("div",{className:"w-full -translate-y-5",children:(0,l.jsxs)("div",{className:"absolute hidden group-hover:block  hover:block",children:[(0,l.jsx)("div",{className:"py-3 -mt-5",children:(0,l.jsx)("div",{className:"w-2 h-2 translate-x-28  rotate-45 absolute mt-2.5 rounded-full bg-red-500"})}),(0,l.jsx)("ul",{className:"p-3.5 grid -translate-y-8 gap-0 w-full",children:e.sublinks.map((e,t)=>(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("h5",{className:"font-semibold",children:e.head}),e.sublink.map((e,t)=>(0,l.jsx)("li",{className:"pl-32 text-sm my-2.5 w-full",children:(0,l.jsx)(c(),{href:e.link,onClick:()=>i(!1),className:"hover:border-b w-full",children:e.name})},t))]},t))})]})})]})},t)))})]}):(0,l.jsx)("div",{children:"Loading..."})},v=s(2010),p=s(9352),g=function(){let{theme:e,setTheme:t}=(0,v.F)();return(0,l.jsx)("button",{className:"p-5",onClick:()=>{t("dark"===e?"light":"dark")},children:"dark"===e?(0,l.jsx)(p.S6R,{}):(0,l.jsx)(p.sEY,{})})},w=function(){return(0,l.jsxs)("div",{className:"fixed z-50 text-xs top-0 right-0 w-20 flex flex-col justify-center items-center",children:[(0,l.jsx)(g,{}),(0,l.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,l.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,l.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,l.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})},N=function(){return(0,l.jsxs)("div",{className:"fixed z-50 text-xs top-0 -right-6 w-20 flex flex-col justify-center items-center",children:[(0,l.jsx)(g,{}),(0,l.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,l.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,l.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,l.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})};function k(){return(0,l.jsx)(c(),{href:"https://lumbini.yellow-website.com/user",target:"_blank",className:"text-slate-900 text-xs cursor-pointer px-2 py-2",children:"Login"})}var y=function(){let e=new Date;return(0,l.jsx)("footer",{className:"bottom-0 w-full flex justify-center font-extralight bg-white dark:bg-slate-700 z-50 mt-5",children:(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsxs)("div",{className:"hidden sm:block",children:[(0,l.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),". For free distribution only as a gift of dhamma. Not for commercial use. | ",(0,l.jsx)(k,{})]}),(0,l.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,l.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]}),(0,l.jsxs)("div",{className:"sm:hidden block",children:[(0,l.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),".",(0,l.jsx)("br",{})," For free distribution only as a gift of dhamma. ",(0,l.jsx)("br",{}),"Not for commercial use. | ",(0,l.jsx)(k,{})]}),(0,l.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,l.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]})]})})},A=function(e){let{children:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"".concat(r().className," w-full min-h-screen"),children:[(0,l.jsxs)("div",{className:"relative md:block hidden",children:[(0,l.jsx)(f,{}),(0,l.jsx)(w,{})]}),(0,l.jsx)("div",{className:"lg:ml-40 sm:ml-24 lg:px-20 px-4 lg:mr-20",children:t}),(0,l.jsxs)("div",{className:"relative md:hidden block",children:[(0,l.jsx)(f,{}),(0,l.jsx)(N,{})]})]}),(0,l.jsx)(y,{})]})}},4494:function(e,t,s){"use strict";s.d(t,{g:function(){return l}});let l={URL:"https://lumbini.yellow-website.com"}},4849:function(e,t,s){"use strict";s.r(t);var l=s(5893),i=s(9008),r=s.n(i),n=s(9734),a=s(623),o=s(4494),d=s(3727);let c=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return fetch(...t).then(e=>e.json())};t.default=function(){var e,t;let{data:s,error:i}=(0,n.ZP)("".concat(o.g.URL,"/jsonapi/node/lnbds_links"),c);return(console.log(s,i),i)?(0,l.jsx)("div",{children:"Failed to load"}):s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Links - Lumbini Nepalese Buddha Dharma Society"}),(0,l.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,l.jsx)("meta",{property:"og:title",content:"Links - Lumbini Nepalese Buddha Dharma Society"}),(0,l.jsx)("meta",{property:"og:url",content:"https://www.lumbini.org.uk/links"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:description",content:"Links of Lumbini Nepalese Buddha Dharma Society"}),(0,l.jsx)("meta",{name:"description",content:"Lumbini Nepalese Buddha Dharma Society - Links. "}),(0,l.jsx)("meta",{name:"author",content:"yellow-website.com"})]}),(0,l.jsxs)(a.Z,{children:[(0,l.jsx)("h1",{className:"my-20 ml-8",children:"Links:"}),(0,l.jsx)("div",{className:"my-20",children:(null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.length)&&(null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.slice(0).reverse().map(e=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"my-20 ml-8",children:(0,l.jsx)("h2",{children:e.attributes.title})}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"listing sm:pl-20 first-line:uppercase",dangerouslySetInnerHTML:{__html:e.attributes.body.value}})})]},e.id)))})]})]}):(0,l.jsx)(d.Z,{})}},9008:function(e,t,s){e.exports=s(2636)}},function(e){e.O(0,[937,374,774,888,179],function(){return e(e.s=9916)}),_N_E=e.O()}]);