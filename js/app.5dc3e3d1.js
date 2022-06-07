(function(){"use strict";var e={5846:function(e,t,n){var r=n(9242),o=n(3396),i=n(7139);const a={class:"flex flex-wrap"},u={class:"head w-full text-left p-5"},l={class:"text-5xl ml-3"},c={class:"text-2xl ml-3 mt-4"},s={class:"nav w-full pl-3"},f={class:"w-full"};function p(e,t,n,r,p,d){const m=(0,o.up)("router-link"),h=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",u,[(0,o._)("h1",l,(0,i.zw)(r.title),1),(0,o._)("h2",c,(0,i.zw)(r.subtitle),1)]),(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.nav,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"nav-item float-left py-3 ml-5 text-xl"},[(0,o.Wm)(m,{to:e.link},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["to"])])))),128))]),(0,o._)("div",f,[(0,o.Wm)(h)])])}var d=n(4870),m={setup(){const e=(0,d.iH)("Closing the Gap"),t=(0,d.iH)("in Non-Latin Script Data"),n=(0,d.iH)([{label:"Projects",link:"/"},{label:"Map",link:"/map"},{label:"Network",link:"/network"},{label:"Contribute",link:"/contribute"},{label:"About",link:"/about"}]);return{title:e,subtitle:t,nav:n}},provide:{rtlCharset:/[\u0600-\u06FF]/}},h=n(89);const v=(0,h.Z)(m,[["render",p]]);var b=v,g=n(678);const y=[{path:"/projects",alias:"/",name:"projects",component:()=>Promise.all([n.e(265),n.e(332)]).then(n.bind(n,6332)),children:[{path:"/projects/tags/:tag?",name:"projectsFiltered",component:()=>Promise.all([n.e(265),n.e(332)]).then(n.bind(n,6332))},{path:"/projects/categories/:cat?",name:"projectCategories",component:()=>Promise.all([n.e(265),n.e(332)]).then(n.bind(n,6332))}]},{path:"/map/:tag?",name:"map",component:()=>Promise.all([n.e(265),n.e(588),n.e(908)]).then(n.bind(n,2908))},{path:"/contribute",name:"contribute",component:()=>n.e(734).then(n.bind(n,6734))},{path:"/network",name:"network",component:()=>Promise.all([n.e(265),n.e(588),n.e(949)]).then(n.bind(n,9949))}],w=(0,g.p7)({history:(0,g.PO)("/Closing-The-Gap-In-Non-Latin-Script-Data/"),routes:y});var k=w;(0,r.ri)(b).use(k).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{265:"60397096",332:"d5c22324",588:"44f6e2e6",734:"0e90f62a",908:"299f00c2",949:"f3f59b1d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{908:"f9c7bd92",949:"f9c7bd92"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="gui:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var f=c[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Closing-The-Gap-In-Non-Latin-Script-Data/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=u,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={908:1,949:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var s=l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkgui"]=self["webpackChunkgui"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5846)}));r=n.O(r)})();
//# sourceMappingURL=app.5dc3e3d1.js.map