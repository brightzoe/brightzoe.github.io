"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3085],{7965:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(959);var i=t(5924),a=t(7440),l=t(6479),s=t(2971),r=t(1782),c=t(2530),o=t(9517);const d={mdxPageWrapper:"mdxPageWrapper_grfz"};var m=t(1527);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:g}=n,{keywords:h,wrapperClassName:x,hide_table_of_contents:p}=f,L=g.image??f.image;return(0,m.jsx)(a.FG,{className:(0,i.Z)(x??l.k.wrapper.mdxPages,l.k.page.mdxPage),children:(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(a.d,{title:t,description:u,keywords:h,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,i.Z)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,i.Z)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(o.Z,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.Z,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},2530:(e,n,t)=>{t.d(n,{Z:()=>o});t(959);var i=t(5924),a=t(1631);const l={tableOfContents:"tableOfContents__Bry",docItemContainer:"docItemContainer_gImP"};var s=t(1527);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,i.Z)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(a.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},1631:(e,n,t)=>{t.d(n,{Z:()=>g});var i=t(959),a=t(2611);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(8819),u=t(1527);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const v=i.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const g=(0,a.L)(),h=o??g.tableOfContents.minHeadingLevel,x=m??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:x}}),[r,c,h,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:r,...f})}},9517:(e,n,t)=>{t.d(n,{Z:()=>f});t(959);var i=t(5924),a=t(5158),l=t(700),s=t(1527);function r(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(l.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(6479),m=t(6270);function u(e){let{className:n}=e;return(0,s.jsx)(m.Z,{type:"caution",title:(0,s.jsx)(r,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,s.jsx)(c,{})})}function f(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(u,{...e})]})}}}]);