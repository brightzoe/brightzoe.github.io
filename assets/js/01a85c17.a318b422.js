"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4013],{259:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(959),i=s(5341),r=s(7634),l=s(4770),n=s(5187),c=s(9829),o=s(8903),d=s(4325);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_gqlz",sidebarItemTitle:"sidebarItemTitle_zhU5",sidebarItemList:"sidebarItemList_UR3C",sidebarItem:"sidebarItem_Yt5F",sidebarItemLink:"sidebarItemLink_TpCv",sidebarItemLinkActive:"sidebarItemLinkActive_pTOS"};var h=s(1527);function b(e){let{sidebar:t}=e;const s=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:g.sidebarItem,children:(0,h.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=s(1985);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(u.Zo,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(x,{sidebar:t}),(0,h.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},8845:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});s(959);var a=s(5341),i=s(1470),r=s(1650),l=s(9430),n=s(259),c=s(6733),o=s(1356),d=s(8720),m=s(1527);function g(e){let{tags:t,sidebar:s}=e;const g=(0,i.M)();return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(r.d,{title:g}),(0,m.jsx)(o.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(n.Z,{sidebar:s,children:[(0,m.jsx)(d.Z,{as:"h1",children:g}),(0,m.jsx)(c.Z,{tags:t})]})]})}},7921:(e,t,s)=>{s.d(t,{Z:()=>n});s(959);var a=s(5341),i=s(5187);const r={tag:"tag_Fh1Y",tagRegular:"tagRegular_rFw3",tagWithCount:"tagWithCount_ejGg"};var l=s(1527);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},6733:(e,t,s)=>{s.d(t,{Z:()=>o});s(959);var a=s(1470),i=s(7921),r=s(8720);const l={tag:"tag_ey6f"};var n=s(1527);function c(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.Z,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},1470:(e,t,s)=>{s.d(t,{M:()=>i,P:()=>r});var a=s(9829);const i=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);