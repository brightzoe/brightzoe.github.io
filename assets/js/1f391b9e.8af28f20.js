"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3085],{6255:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var t=n(7294),l=n(6010),i=n(1834),c=n(616),s=n(9260),r=n(9846),m="mdxPageWrapper_zHyg";function o(e){var a=e.content,n=a.metadata,o=n.title,d=n.description,u=n.frontMatter,v=u.wrapperClassName,f=u.hide_table_of_contents;return t.createElement(r.FG,{className:(0,l.Z)(null!=v?v:r.kM.wrapper.mdxPages,r.kM.page.mdxPage)},t.createElement(r.d,{title:o,description:d}),t.createElement(i.Z,null,t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!f&&"col--8")},t.createElement(c.Z,null,t.createElement(a,null))),!f&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(s.Z,{toc:a.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9260:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),i=n(7294),c=n(6010),s=n(4202),r="tableOfContents_cNA8",m=["className"];function o(e){var a=e.className,n=(0,l.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4202:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),l=n(3366),i=n(7294),c=n(9846),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,g=e.maxHeadingLevel,N=(0,l.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=g?g:_.tableOfContents.maxHeadingLevel,b=(0,c.b9)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:C}}),[d,v,k,C]);return(0,c.Si)(h),i.createElement(r,(0,t.Z)({toc:b,className:m,linkClassName:d},N))}}}]);