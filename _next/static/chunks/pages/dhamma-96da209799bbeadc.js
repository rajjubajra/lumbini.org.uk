(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[376],{4063:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(a=n;0!=a--;)if(!e(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(a=n;0!=a--;)if(!Object.prototype.hasOwnProperty.call(r,o[a]))return!1;for(a=n;0!=a--;){var n,a,o,s=o[a];if(!e(t[s],r[s]))return!1}return!0}return t!=t&&r!=r}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,a){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof n&&(a=n,n={}),n=n||{},a=a||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async=!("async"in n)||!!n.async,s.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(s,n.attrs),n.text&&(s.text=""+n.text),("onload"in s?t:r)(s,a),s.onload||t(s,a),o.appendChild(s)}},3454:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(7663)},6208:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dhamma",function(){return r(5015)}])},6088:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.612b4d10.png",height:739,width:474,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAQAAACb+P2wAAAAP0lEQVR42jXGQQpAQBQA0CczJUphM5rfnMBWcgL3v5GFvNWDpKCDwfV38XxhFjIkmxASzelwWwlFNRnJqmbXv2OlAsG+5WNqAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},3727:function(e,t,r){"use strict";var n=r(5893);r(7294),t.Z=function(){return(0,n.jsx)("div",{className:"fixed z-50 w-full h-screen bg-white flex justify-center items-center ",children:(0,n.jsx)("h1",{className:"text-4xl",children:"Loading..."})})}},623:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(5893),a=r(9303),o=r.n(a),s=r(7294),i=function(e){let{state:t}=e;return(0,n.jsxs)("div",{className:"grid grid-cols-2 grid-rows-2 w-6 h-6 gap-1 \n    ".concat(t?"group hover:gap-0 hover:rotate-90 cursor-pointer":"","  \n    duration-700"),children:[(0,n.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-red-500"}),(0,n.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-blue-400"}),(0,n.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-yellow-400"}),(0,n.jsx)("div",{className:"w-2 h-2 rounded-full border border-slate-400 group-hover:bg-amber-600"})]})},l=function(e){let{state:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"cursor-pointer group",children:[(0,n.jsx)("div",{className:"".concat(t?"rotate-45 translate-y-3":"w-10"," h-1 group-hover:w-8 sm:group-hover:bg-red-600 duration-500 bg-slate-400 my-1")}),(0,n.jsx)("div",{className:"".concat(t?"-rotate-45 translate-y-1 -translate-x-1":"w-8"," h-1 group-hover:w-10 sm:group-hover:bg-sky-400 duration-500 bg-slate-400 my-1")})]})})},u=r(1664),c=r.n(u),d=r(9734),h=r(4494),p=r(6088),f=r(5675),m=r.n(f);let y=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t).then(e=>e.json())};var v=function(){let{data:e,error:t}=(0,d.ZP)("".concat(h.g.URL,"/jsonapi/menu_items/main"),y),[r,a]=(0,s.useState)(!1),[o,u]=(0,s.useState)([]);return((0,s.useEffect)(()=>{(()=>{var t,r,n,a;let o=[],s=[];return(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.length)&&(null==e||null===(r=e.data)||void 0===r||r.map(e=>{""!==e.attributes.parent&&s.push({name:e.attributes.title,link:e.attributes.url,parent:e.attributes.parent,weight:e.attributes.weight})})),(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.length)&&(null==e||null===(a=e.data)||void 0===a||a.map(e=>{""===e.attributes.parent&&o.push({name:e.attributes.title,link:e.attributes.url,submenu:e.attributes.expanded,sublinks:[{sublink:s.filter(t=>t.parent===e.id)}],weight:e.attributes.weight})})),u(o)})()},[null==e?void 0:e.data]),t)?(0,n.jsx)("div",{children:"Failed to load"}):e?(0,n.jsxs)("div",{onMouseLeave:()=>a(!1),className:"fixed z-40 left-0 top-0 h-screen border-r ".concat(r?"sm:w-96 w-full":"sm:w-32","    duration-700 bg-white dark:bg-slate-700"),children:[(0,n.jsx)("div",{className:"fixed sm:top-5 sm:left-8 top-2 right-1/2 -mr-4",children:(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)(m(),{className:"w-10",src:p.Z,width:50,height:50,alt:"Logo"})})}),(0,n.jsxs)("div",{onClick:()=>r&&a(!1),className:"sm:absolute hidden top-32 left-10 sm:flex gap-2",children:[(0,n.jsx)(i,{state:r}),(0,n.jsx)("div",{className:"".concat(r?"":"hidden"),children:"LNBDS"})]}),(0,n.jsx)("div",{className:"".concat(r?"hidden":"sm:absolute hidden sm:flex","  \n            duration-700 left-10 top-1/2 w-full"),children:(0,n.jsx)("div",{onClick:()=>a(!0),children:(0,n.jsx)(l,{})})}),(0,n.jsx)("div",{className:"fixed sm:hidden top-4 left-4",children:(0,n.jsx)("div",{onClick:()=>r?a(!1):a(!0),children:(0,n.jsx)(l,{state:r})})}),(0,n.jsx)("div",{className:"".concat(r?"absolute":"hidden"," duration-700 \n        delay-1000 sm:left-10 left-3 sm:top-[40%] top-[20%] w-full"),children:(null==o?void 0:o.length)&&(null==o?void 0:o.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"px-1 flex flex-col text-left md:cursor-pointer group",children:[(0,n.jsx)(c(),{href:e.link,onClick:()=>a(!1),className:"py-0 pr-2 my-2 text-sm flex justify-between items-center",children:e.name}),e.submenu&&(0,n.jsx)("div",{className:"w-full -translate-y-5",children:(0,n.jsxs)("div",{className:"absolute hidden group-hover:block  hover:block",children:[(0,n.jsx)("div",{className:"py-3 -mt-5",children:(0,n.jsx)("div",{className:"w-2 h-2 translate-x-28  rotate-45 absolute mt-2.5 rounded-full bg-red-500"})}),(0,n.jsx)("ul",{className:"p-3.5 grid -translate-y-8 gap-0 w-full",children:e.sublinks.map((e,t)=>(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h5",{className:"font-semibold",children:e.head}),e.sublink.map((e,t)=>(0,n.jsx)("li",{className:"pl-32 text-sm my-2.5 w-full",children:(0,n.jsx)(c(),{href:e.link,onClick:()=>a(!1),className:"hover:border-b w-full",children:e.name})},t))]},t))})]})})]})},t)))})]}):(0,n.jsx)("div",{children:"Loading..."})},g=r(2010),b=r(9352),x=function(){let{theme:e,setTheme:t}=(0,g.F)();return(0,n.jsx)("button",{className:"p-5",onClick:()=>{t("dark"===e?"light":"dark")},children:"dark"===e?(0,n.jsx)(b.S6R,{}):(0,n.jsx)(b.sEY,{})})},w=function(){return(0,n.jsxs)("div",{className:"fixed z-50 text-xs top-0 right-0 w-20 flex flex-col justify-center items-center",children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,n.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,n.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,n.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})},j=function(){return(0,n.jsxs)("div",{className:"fixed z-50 text-xs top-0 -right-6 w-20 flex flex-col justify-center items-center",children:[(0,n.jsx)(x,{}),(0,n.jsx)("div",{className:"-rotate-90 absolute top-20",children:(0,n.jsx)(c(),{href:"https://www.facebook.com/LNBDS/",target:"_blank",children:"Facebook"})}),(0,n.jsx)("div",{className:"-rotate-90 absolute top-48",children:(0,n.jsx)(c(),{href:"https://www.youtube.com/@lnbdsuk9415",target:"_blank",children:"Youtube"})})]})};function P(){return(0,n.jsx)(c(),{href:"https://lumbini.yellow-website.com/user",target:"_blank",className:"text-slate-900 text-xs cursor-pointer px-2 py-2",children:"Login"})}var N=function(){let e=new Date;return(0,n.jsx)("footer",{className:"bottom-0 w-full flex justify-center font-extralight bg-white dark:bg-slate-700 z-50 mt-5",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsxs)("div",{className:"hidden sm:block",children:[(0,n.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),". For free distribution only as a gift of dhamma. Not for commercial use. | ",(0,n.jsx)(P,{})]}),(0,n.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,n.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]}),(0,n.jsxs)("div",{className:"sm:hidden block",children:[(0,n.jsxs)("div",{className:"text-xs",children:["All rights reserved to LNBDS(uk). \xa9 ",e.getFullYear(),".",(0,n.jsx)("br",{})," For free distribution only as a gift of dhamma. ",(0,n.jsx)("br",{}),"Not for commercial use. | ",(0,n.jsx)(P,{})]}),(0,n.jsxs)("div",{className:"text-xs",children:["Website design & developed by :",(0,n.jsx)(c(),{target:"_blank",href:"https://yellow-website.com",children:" yellow-website.com"})]})]})]})})},k=function(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(o().className," w-full min-h-screen"),children:[(0,n.jsxs)("div",{className:"relative md:block hidden",children:[(0,n.jsx)(v,{}),(0,n.jsx)(w,{})]}),(0,n.jsx)("div",{className:"lg:ml-40 sm:ml-24 lg:px-20 px-4 lg:mr-20",children:t}),(0,n.jsxs)("div",{className:"relative md:hidden block",children:[(0,n.jsx)(v,{}),(0,n.jsx)(j,{})]})]}),(0,n.jsx)(N,{})]})}},4494:function(e,t,r){"use strict";r.d(t,{g:function(){return n}});let n={URL:"https://lumbini.yellow-website.com"}},5015:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(5893),a=r(9008),o=r.n(a),s=r(9734),i=r(623),l=r(4494);r(3727);var u=r(5697),c=r.n(u),d=r(7294),h=r(4063),p=r.n(h),f=r(1062),m=r.n(f),y=Object.defineProperty,v=Object.defineProperties,g=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,j=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&j(e,r,t[r]);if(b)for(var r of b(t))w.call(t,r)&&j(e,r,t[r]);return e},N=(e,t)=>v(e,g(t)),k=(e,t,r)=>new Promise((n,a)=>{var o=e=>{try{i(r.next(e))}catch(e){a(e)}},s=e=>{try{i(r.throw(e))}catch(e){a(e)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);i((r=r.apply(e,t)).next())});function A(e={}){return N(P({},e),{height:0,width:0,playerVars:N(P({},e.playerVars),{autoplay:0,start:0,end:0})})}var E={videoId:c().string,id:c().string,className:c().string,iframeClassName:c().string,style:c().object,title:c().string,loading:c().oneOf(["lazy","eager"]),opts:c().objectOf(c().any),onReady:c().func,onError:c().func,onPlay:c().func,onPause:c().func,onEnd:c().func,onStateChange:c().func,onPlaybackRateChange:c().func,onPlaybackQualityChange:c().func},S=class extends d.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,a,o,s,i,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case S.PlayerState.ENDED:null==(a=(n=this.props).onEnd)||a.call(n,e);break;case S.PlayerState.PLAYING:null==(s=(o=this.props).onPlay)||s.call(o,e);break;case S.PlayerState.PAUSED:null==(l=(i=this.props).onPause)||l.call(i,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"==typeof document)return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}let e=N(P({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=m()(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then(e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if(void 0===this.props.videoId||null===this.props.videoId){null==(e=this.internalPlayer)||e.stopVideo();return}let a=!1,o={videoId:this.props.videoId};if((null==(t=this.props.opts)?void 0:t.playerVars)&&(a=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),a){null==(r=this.internalPlayer)||r.loadVideoById(o);return}null==(n=this.internalPlayer)||n.cueVideoById(o)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return k(this,null,function*(){var t,r,n,a,o,s;t=this.props,(e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title)&&this.updatePlayer(),s=this.props,e.videoId===s.videoId&&p()(A(e.opts),A(s.opts))||(yield this.resetPlayer()),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;let a=(null==(r=e.opts)?void 0:r.playerVars)||{},o=(null==(n=t.opts)?void 0:n.playerVars)||{};return a.start!==o.start||a.end!==o.end}(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return d.createElement("div",{className:this.props.className,style:this.props.style},d.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},C=S;C.propTypes=E,C.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},C.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};let _=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return fetch(...t).then(e=>e.json())};var O=function(){var e,t;let{data:r,error:a}=(0,s.ZP)("".concat(l.g.URL,"/jsonapi/node/lnbds_youtube_links?include=field_category,field_youtube_video_link"),_);console.log(r,a);let u=e=>{e.target.pauseVideo()},c={height:"200",width:"300",playerVars:{autoplay:0}},d=e=>{var t;let n=null==r?void 0:null===(t=r.included)||void 0===t?void 0:t.findIndex(t=>t.id===e),a=null==r?void 0:r.included[n].attributes.field_media_oembed_video;return a.replace("https://youtu.be/","")};return a?(0,n.jsx)("div",{children:"Failed to load"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Dhamma - Lumbini Nepalese Buddha Dharma Society"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{property:"og:title",content:"Dhamma - Lumbini Nepalese Buddha Dharma Society"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.lumbini.org.uk/dhamma"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:description",content:"Dhamma talks - Lumbini Nepalese Buddha Dharma Society"}),(0,n.jsx)("meta",{name:"description",content:"Lumbini Nepalese Buddha Dharma Society - Dhamma Talk. "}),(0,n.jsx)("meta",{name:"author",content:"yellow-website.com"})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("div",{className:"my-20 ml-8",children:(0,n.jsx)("h1",{children:"Dhamma:"})}),(0,n.jsx)("div",{children:r&&(null==r?void 0:r.included.map(e=>(0,n.jsx)("div",{className:"ml-8",children:"taxonomy_term--youtube_video"===e.type&&(0,n.jsx)("div",{children:e.attributes.name})},e.id)))}),(0,n.jsx)("div",{className:"flex flex-wrap gap-4 justify-center my-8",children:r&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.length)&&(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.map(e=>(0,n.jsxs)("div",{className:"w-[320px] m-3 border flex flex-col justify-center pr-8 pl-2 py-4",children:[(0,n.jsx)("div",{children:(0,n.jsx)(C,{videoId:d(e.relationships.field_youtube_video_link.data.id),opts:c,onReady:u})}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.attributes.body.value.substring(0,100)}})]},e.id)))})]})]})}},7663:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&h())}function h(){if(!u){var e=i(d);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||i(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var a=n(229);e.exports=a}()},9008:function(e,t,r){e.exports=r(2636)},2703:function(e,t,r){"use strict";var n=r(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,s){if(s!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3988:function(e){"use strict";e.exports=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,a=t[e];if(a)for(n=a.length;n--;)a[n].handler(r)},e}},6006:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=r(2275))&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},3393:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(9215)),a=i(r(8255)),o=i(r(5279)),s=i(r(6006));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={};u.proxyEvents=function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,a=!1,s=void 0;try{for(var i,u=o.default[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value;r(c)}}catch(e){a=!0,s=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw s}}return t},u.promisifyPlayer=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&s.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then(function(e){var t=s.default[n],a=e.getPlayerState(),o=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise(function(r){e.addEventListener("onStateChange",function n(){var a=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout(function(){e.removeEventListener("onStateChange",n),r()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",n),clearTimeout(o),r())})}).then(function(){return o}):o})}:r[n]=function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.then(function(e){return e[n].apply(e,r)})}},o=!0,i=!1,l=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value;n(d)}}catch(e){i=!0,l=e}finally{try{!o&&c.return&&c.return()}finally{if(i)throw l}}return r},t.default=u,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1062:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(r(3988)),o=i(r(5900)),s=i(r(3393));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,a.default)();if(l||(l=(0,o.default)(i)),t.events)throw Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw Error('Element "'+e+'" does not exist.');t.events=s.default.proxyEvents(i);var u=new Promise(function(r){(void 0===e?"undefined":n(e))==="object"&&e.playVideo instanceof Function?r(e):l.then(function(n){var a=new n.Player(e,t);return i.on("ready",function(){r(a)}),null})}),c=s.default.promisifyPlayer(u,r);return c.on=i.on,c.off=i.off,c},e.exports=t.default},5900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=r(9090))&&n.__esModule?n:{default:n};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){t(window.YT);return}var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}})},e.exports=t.default},9215:function(e,t,r){var n=r(3454);function a(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=r(5046)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),r){var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))}),e.splice(o,0,n)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=a,t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(a())},5046:function(e,t,r){var n;function a(e){function r(){if(r.enabled){var e=r,a=+new Date,o=a-(n||a);e.diff=o,e.prev=n,e.curr=a,n=a;for(var s=Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(r,n){if("%%"===r)return r;l++;var a=t.formatters[n];if("function"==typeof a){var o=s[l];r=a.call(e,o),s.splice(l,1),l--}return r}),t.formatArgs.call(e,s),(r.log||t.log||console.log.bind(console)).apply(e,s)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r)|0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,a=0;a<n;a++)r[a]&&("-"===(e=r[a].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){function t(e,t,r){return e<t?void 0:e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,r){r=r||{};var n=typeof e;if("string"===n&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===n&&!1===isNaN(e))return r.long?t(e,864e5,"day")||t(e,36e5,"hour")||t(e,6e4,"minute")||t(e,1e3,"second")||e+" ms":e>=864e5?Math.round(e/864e5)+"d":e>=36e5?Math.round(e/36e5)+"h":e>=6e4?Math.round(e/6e4)+"m":e>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}},function(e){e.O(0,[937,374,774,888,179],function(){return e(e.s=6208)}),_N_E=e.O()}]);