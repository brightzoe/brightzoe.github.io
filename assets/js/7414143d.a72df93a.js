"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[2889],{7363:(e,t,n)=>{n.d(t,{kt:()=>d});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(1163),a=(n(959),n(7363));const o={title:"\u5b66\u4e60 The Little Schemer",authors:["zoe"],tags:["reading","dev","fp"]},l=void 0,i={permalink:"/blog/2021/11/05/the-little-schemer",editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/blog/2021-11-05-the-little-schemer.md",source:"@site/blog/2021-11-05-the-little-schemer.md",title:"\u5b66\u4e60 The Little Schemer",description:"\u73af\u5883\u914d\u7f6e\u4f7f\u7528 VS Code \u7f16\u5199 scheme ,\u53c2\u8003: Windows + VS Code \u642d\u5efa Scheme \u5f00\u53d1\u73af\u5883 - \u77e5\u4e4e",date:"2021-11-05T00:00:00.000Z",formattedDate:"November 5, 2021",tags:[{label:"reading",permalink:"/blog/tags/reading"},{label:"dev",permalink:"/blog/tags/dev"},{label:"fp",permalink:"/blog/tags/fp"}],readingTime:1.11,hasTruncateMarker:!1,authors:[{name:"brightzoe",url:"https://github.com/brightzoe",imageURL:"https://github.com/brightzoe.png",key:"zoe"}],frontMatter:{title:"\u5b66\u4e60 The Little Schemer",authors:["zoe"],tags:["reading","dev","fp"]},prevItem:{title:"2021\u5e74\u7ec8\u603b\u7ed3",permalink:"/blog/2021/12/27/year-end-summary-of-2021"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},p={authorsImageUrls:[void 0]},m=[{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u73af\u5883\u914d\u7f6e\u4f7f\u7528 VS Code \u7f16\u5199 scheme ,\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/405246479"},"Windows + VS Code \u642d\u5efa Scheme \u5f00\u53d1\u73af\u5883 - \u77e5\u4e4e")),(0,a.kt)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"atom"),": \u5143\u5b50 ",(0,a.kt)("inlineCode",{parentName:"p"},"atom")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"list"),": \u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"(atom ss)")," ",(0,a.kt)("inlineCode",{parentName:"p"},"()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"car"),": list \u91cc\u7684\u7b2c\u4e00\u4e2a \u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"(car l)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The primitive car is definedonly for non-empty lists.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'( car l) is another way to ask for "the car of the list l."')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cdr"),": list \u53bb\u6389 car \u540e\u7684 \u65b0 list ",(0,a.kt)("inlineCode",{parentName:"p"},"cdr l")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'( cdr l) is just another way to ask for "the cdr of the list l."')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"car"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"cdr"),"\u90fd\u662f\u9488\u5bf9\u975e\u7a7a ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),",\u4e0d\u80fd\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"atom"),",\u7a7a",(0,a.kt)("inlineCode",{parentName:"p"},"list")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cons"),": \u628a \u4e00\u4e2a Scheme expression \u6dfb\u52a0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"list"),"\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20. ",(0,a.kt)("inlineCode",{parentName:"p"},"(cons a l)")," \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e00\u5b9a\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"list"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(null? l)"),": \u662f\u7a7a",(0,a.kt)("inlineCode",{parentName:"p"},"list"),"\u5417? ",(0,a.kt)("inlineCode",{parentName:"p"},"(quote ())"),"\u8868\u793a\u4e00\u4e2a\u7a7a list,null list. ",(0,a.kt)("inlineCode",{parentName:"p"}," ( null? (quote ()))")," => true"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"( atom? s )")," \u662f",(0,a.kt)("inlineCode",{parentName:"p"},"atom"),"\u5417?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"( eq? a1 a2)")," \u8fd9\u4e24\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"atom"),"\u76f8\u7b49\u5417? Eq takes two arguments. Both of them must be non-numeric atoms."),(0,a.kt)("p",null,"----------------\u7b2c\u4e00\u7ae0 end ",(0,a.kt)("inlineCode",{parentName:"p"},"(lat? l)")," \u662f\u5168\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"atom"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"list"),"\u5417? Every lat is a list of atoms."))}u.isMDXComponent=!0}}]);