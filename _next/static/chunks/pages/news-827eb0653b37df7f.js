(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{5115:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(5823)}])},7853:function(e,i,t){"use strict";var r=t(5893);t(7294),i.Z=function(){return(0,r.jsxs)("button",{className:"px-8 py-1 mt-6 border uppercase group hover:shadow-md duration-500 flex",children:[(0,r.jsx)("div",{children:"Read"}),(0,r.jsx)("div",{className:"w-2 h-2 mt-2 ml-2 bg-red-600  group-hover:bg-green-400  group-hover:rotate-45 duration-500"})]})}},4045:function(e,i,t){"use strict";t.d(i,{J:function(){return n}});var r=t(4494);let n=(e,i)=>{var t,n,s,l;let a=null==i?void 0:null===(t=i.relationships)||void 0===t?void 0:null===(n=t.field_image_media)||void 0===n?void 0:null===(s=n.data)||void 0===s?void 0:s.id,o=e&&a&&(null==e?void 0:e.findIndex(e=>e.id===a));return a&&e&&r.g.URL+(null===(l=e[o])||void 0===l?void 0:l.url)}},5823:function(e,i,t){"use strict";t.r(i);var r=t(5893),n=t(9008),s=t.n(n),l=t(9734),a=t(623),o=t(4494),d=t(3727),c=t(1664),u=t.n(c),h=t(9069),m=t(5675),v=t.n(m),p=t(4045),x=t(7853),b=t(7294);let g=function(){for(var e=arguments.length,i=Array(e),t=0;t<e;t++)i[t]=arguments[t];return fetch(...i).then(e=>e.json())};i.default=function(){var e,i,t,n;let[c,m]=(0,b.useState)("&page[limit]=".concat(6)),[j,f]=(0,b.useState)([]),{data:w,error:N}=(0,l.ZP)(j+c,g);console.log(w,N),(0,b.useEffect)(()=>{f("".concat(o.g.URL,"/jsonapi/node/lnbds_news?sort=-field_published_on&sort=-created&include=field_year,field_image_media.field_media_image"))},[]);let _=(0,h.d)(w);console.log("Image Arr",_);let y=e=>{e.preventDefault(),console.log(e.target.search.value),e.target.search.value&&m("&filter[node--lnbds_news][condition][path]=title&&filter[node--lnbds_news][condition][operator]=CONTAINS&filter[node--lnbds_news][condition][value]=".concat(e.target.search.value))};return N?(0,r.jsx)("div",{children:"Failed to load"}):w?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"News - Lumbini Nepalese Buddha Dharma Society"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{property:"og:title",content:"News - Lumbini Nepalese Buddha Dharma Society"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.lumbini.org.uk/news"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:description",content:"News from Lumbini Nepalese Buddha Dharma Society"}),(0,r.jsx)("meta",{name:"description",content:"Lumbini Nepalese Buddha Dharma Society news. "}),(0,r.jsx)("meta",{name:"author",content:"yellow-website.com"})]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("div",{className:"my-20",children:[(0,r.jsx)("div",{className:"my-10 ml-8",children:(0,r.jsx)("h1",{children:"News:"})}),(0,r.jsx)("form",{className:"ml-8",onSubmit:y,children:c!=="&page[limit]=".concat(6)?(0,r.jsxs)("button",{onClick:()=>m("&page[limit]=".concat(6)),className:"relative group w-40 border py-2 m-2 hover:shadow-md duration-500",children:[(0,r.jsx)("span",{className:"absolute left-3 top-3.5 w-3 h-3 bg-red-600 group-hover:rotate-45 duration-500"}),(0,r.jsx)("span",{children:"Clear Search"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"text",name:"search",required:!0,className:"w-60 px-2 border py-2 m-2 outline-none",placeholder:"Search"}),(0,r.jsxs)("button",{className:"relative group w-32 border py-2 m-2 hover:shadow-md duration-500",children:[(0,r.jsx)("span",{className:"absolute left-3 top-3.5 w-3 h-3 bg-lime-400 group-hover:rotate-45 duration-500"}),(0,r.jsx)("span",{children:"Search"})]})]})}),(0,r.jsx)("div",{className:"grid lg:grid-cols-2 gap-4 mb-20 ml-8",children:(null==w?void 0:null===(e=w.data)||void 0===e?void 0:e.length)&&(null==w?void 0:null===(i=w.data)||void 0===i?void 0:i.slice(0).reverse().map(e=>(0,r.jsxs)("div",{className:"relative p-4 border",children:[(0,r.jsx)("h2",{className:"min-h-24",children:e.attributes.title}),(0,r.jsxs)("div",{className:"my-10",children:["Date: ",e.attributes.field_published_on]}),(0,r.jsx)("div",{children:e.relationships.field_image_media.data&&e.relationships.field_image_media.data.id?(0,r.jsx)(v(),{className:"border-8 border-slate-200 my-4 md:w-96 md:h-auto object-top",src:(0,p.J)(_,e),alt:"News Image",width:200,height:320}):""}),(0,r.jsx)("div",{className:"mb-16",children:(0,r.jsx)("div",{className:"listing",dangerouslySetInnerHTML:{__html:e.attributes.body.value.substring(0,200)+"..."}})}),(0,r.jsx)("div",{className:"flex absolute bottom-4 right-4 mt-4 justify-end w-full",children:(0,r.jsx)(u(),{href:"/news/".concat(e.id),children:(0,r.jsx)(x.Z,{})})})]},e.id)))})]}),(0,r.jsxs)("div",{className:"ml-8 flex justify-center gap-10 text-xs mb-20 uppercase",children:[(null==w?void 0:null===(t=w.links)||void 0===t?void 0:t.next)&&(0,r.jsx)("div",{className:"cursor-pointer p-2 hover:shadow-sm  border border-white hover:border-lime-500 duration-300",onClick:()=>{var e;return f(null==w?void 0:null===(e=w.links)||void 0===e?void 0:e.next.href)},children:(0,r.jsx)("span",{children:"Next"})}),(null==w?void 0:null===(n=w.links)||void 0===n?void 0:n.prev)&&(0,r.jsx)("div",{className:"cursor-pointer p-2 hover:shadow-sm  border border-white hover:border-lime-500 duration-300",onClick:()=>{var e;return f(null==w?void 0:null===(e=w.links)||void 0===e?void 0:e.prev.href)},children:(0,r.jsx)("span",{children:"Prev"})})]})]})]}):(0,r.jsx)(d.Z,{})}}},function(e){e.O(0,[937,374,600,774,888,179],function(){return e(e.s=5115)}),_N_E=e.O()}]);