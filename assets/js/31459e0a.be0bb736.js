"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3056],{7363:(e,t,n)=>{n.d(t,{kt:()=>d});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(1163),a=(n(959),n(7363));const l={sidebar_position:1},i="HTML",c={unversionedId:"fe-basic/html",id:"fe-basic/html",title:"HTML",description:"DOCTYPE",source:"@site/docs/fe-basic/html.md",sourceDirName:"fe-basic",slug:"/fe-basic/html",permalink:"/docs/fe-basic/html",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/html.md",tags:[],version:"current",lastUpdatedAt:1686109306,formattedLastUpdatedAt:"Jun 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"FE",next:{title:"CSS",permalink:"/docs/fe-basic/css/"}},o={},p=[{value:"DOCTYPE",id:"doctype",level:2},{value:"head",id:"head",level:2},{value:"src \u4e0e href",id:"src-\u4e0e-href",level:2},{value:"HTML \u8bed\u4e49\u5316",id:"html-\u8bed\u4e49\u5316",level:2},{value:"script \u6807\u7b7e defer \u4e0e async \u5c5e\u6027",id:"script-\u6807\u7b7e-defer-\u4e0e-async-\u5c5e\u6027",level:2},{value:"img",id:"img",level:2},{value:"SVG \u4e0e Canvas",id:"svg-\u4e0e-canvas",level:2},{value:"\u79bb\u7ebf\u5b58\u50a8",id:"\u79bb\u7ebf\u5b58\u50a8",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html"},"HTML"),(0,a.kt)("h2",{id:"doctype"},"DOCTYPE"),(0,a.kt)("p",null,"HTML \u4e2d\u7684\u6587\u6863\u7c7b\u578b\u58f0\u660e\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u5e94\u8be5\u4ee5\u4ec0\u4e48\u6837\uff08html \u6216 xhtml\uff09\u7684\u65b9\u5f0f\u6765\u89e3\u6790\u6587\u6863\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<!DOCTYPE html>")," \u6d4f\u89c8\u5668\u8fdb\u5165\u6807\u51c6\u6a21\u5f0f\uff0c\u4f7f\u7528 HTML5 \u6807\u51c6\u6765\u89e3\u6790\u6e32\u67d3\u9875\u9762\u3002"),(0,a.kt)("h2",{id:"head"},"head"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<title>\u6211\u662f\u6807\u9898</title>\n<link rel="icon" href="https://pbihub.cn/assets/images/logo.png" />\n<base href="\u9875\u9762\u76f8\u5bf9 URL \u7684\u6839 URL " target="\u9875\u9762\u4e2d\u6240\u6709\u94fe\u63a5\u7684\u6253\u5f00\u4f4d\u7f6e" />\n<meta charset="UTF-8" />\n\x3c!-- HTML \u6587\u6863\u7684\u7f16\u7801\u7c7b\u578b --\x3e\n<meta\n  name="viewport"\n  content="width=device-width, initial-scale=1, maximum-scale=1" />\n\x3c!--\u9875\u9762\u4ee5\u591a\u5bbd\u5c3a\u5bf8\u6e32\u67d3\uff0c\u63a7\u5236\u89c6\u53e3\u5927\u5c0f\u548c\u6bd4\u4f8b--\x3e\n<meta name="keywords" content="\u5173\u952e\u8bcd" />\n<meta name="description" content="\u9875\u9762\u63cf\u8ff0" />\n<meta name="robots" content="index,follow" />\x3c!--\u641c\u7d22\u5f15\u64ce\u65b9\u5f0f--\x3e\n')),(0,a.kt)("h2",{id:"src-\u4e0e-href"},"src \u4e0e href"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"src: \u5bf9\u8d44\u6e90\u7684\u5f15\u7528\uff0c\u6307\u5411\u7684\u5185\u5bb9\u4f1a\u5d4c\u5728\u5f53\u524d\u6807\u7b7e\u6240\u5728\u7684\u4f4d\u7f6e\u3002\u6bd4\u5982\u8bf7\u6c42 js \u811a\u672c\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5f53\u6d4f\u89c8\u5668\u89e3\u6790\u5230\u8be5\u5143\u7d20\u65f6\uff0c\u4f1a\u6682\u505c\u5176\u4ed6\u8d44\u6e90\u7684\u4e0b\u8f7d\u548c\u5904\u7406\uff0c\u76f4\u5230\u5c06\u8be5\u8d44\u6e90\u52a0\u8f7d\uff0c\u6267\u884c\u5b8c\u6bd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"href: \u8868\u793a\u8d85\u6587\u672c\u5f15\u7528\uff0c\u4e00\u822c\u6307\u5411\u4e00\u4e9b\u7f51\u7edc\u8d44\u6e90\uff0c\u5efa\u7acb\u548c\u5f53\u524d\u5143\u7d20\u7684\u94fe\u63a5\u5173\u7cfb\uff0c\u4e0d\u4f1a\u505c\u6b62\u5bf9\u5f53\u524d\u6587\u6863\u7684\u5904\u7406\u3002")),(0,a.kt)("h2",{id:"html-\u8bed\u4e49\u5316"},"HTML \u8bed\u4e49\u5316"),(0,a.kt)("p",null,"\u6839\u636e\u5185\u5bb9\u7684\u7ed3\u6784\uff0c\u9009\u62e9\u5408\u9002\u7684\u6807\u7b7e\uff0c\u6307\u7528\u6b63\u786e\u7684\u6807\u7b7e\u505a\u6b63\u786e\u7684\u4e8b\u3002"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5229\u4e8e\u641c\u7d22\u5f15\u64ce\u722c\u866b\u722c\u53d6\u4fe1\u606f\uff0c\u589e\u5f3a SEO\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u5f00\u53d1\u8005\u53cb\u597d\uff0c\u63d0\u5347\u53ef\u8bfb\u6027\uff0c\u7ed3\u6784\u66f4\u52a0\u6e05\u6670\uff0c\u4fbf\u4e8e\u7ef4\u62a4\u3002")),(0,a.kt)("p",null,"\u5e38\u89c1\u8bed\u4e49\u5316\u6807\u7b7e\uff1a"),(0,a.kt)("p",null,"header nav main footer section"),(0,a.kt)("h2",{id:"script-\u6807\u7b7e-defer-\u4e0e-async-\u5c5e\u6027"},"script \u6807\u7b7e defer \u4e0e async \u5c5e\u6027"),(0,a.kt)("p",null,"\u4e24\u4e2a\u5c5e\u6027\u53ea\u5bf9\u5916\u90e8\u811a\u672c\u6709\u6548\u3002"),(0,a.kt)("p",null,"script \u6807\u7b7e\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u662f DOM \u89e3\u6790\u5230\u6b64\u5904\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u7acb\u5373\u8bf7\u6c42\u5e76\u6267\u884c\uff0c\u5835\u585e DOM \u540e\u7eed\u5185\u5bb9\u7684\u89e3\u6790\u3002"),(0,a.kt)("p",null,"async\uff1a\u52a0\u8f7d\u65f6\u4e0d\u963b\u585e\u540e\u7eed\u5185\u5bb9\u89e3\u6790\uff0c\u5e76\u884c\u8fdb\u884c HTML \u89e3\u6790\u4e0e script \u5185\u5bb9\u8bf7\u6c42\uff0cscript \u8bf7\u6c42\u5b8c\u6bd5\u540e\u7acb\u5373\u5f00\u59cb\u6267\u884c\uff0c\u6b64\u65f6\u5982\u679c HTML \u8fd8\u672a\u89e3\u6790\u5b8c\u6210\uff0c\u4f1a\u963b\u585e\u540e\u7eed HTML \u89e3\u6790\u3002\u591a\u4e2a async \u7684\u6267\u884c\u987a\u5e8f\u5148\u540e\u4e0d\u80fd\u4fdd\u8bc1\uff0c\u8c01\u7684\u8bf7\u6c42\u5148\u56de\u6765\u8c01\u5c31\u5148\u6267\u884c\u3002"),(0,a.kt)("p",null,"defer\uff1a\u5e76\u884c\u8fdb\u884c HTML \u89e3\u6790\u4e0e script \u7684\u8bf7\u6c42\uff0c\u5230\u6574\u4e2a HTML \u52a0\u8f7d\u5b8c\u6210\u540e\u624d\u4f1a\u8fdb\u884c script \u6267\u884c\uff0c\u4e14\u591a\u4e2a defer \u7684\u6267\u884c\u987a\u5e8f\u53ef\u4ee5\u4fdd\u8bc1\u3002"),(0,a.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/fe-basic/attributes-and-usage-of-the-script-tag"},(0,a.kt)("strong",{parentName:"a"},"script \u6807\u7b7e\u7684\u4f7f\u7528"))),(0,a.kt)("h2",{id:"img"},"img"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alt"),"\u5907\u7528\u6587\u672c\uff1a\u7f51\u7edc\u9519\u8bef\uff0c\u56fe\u7247\u52a0\u8f7d\u5931\u8d25\u65f6\u663e\u793a\u7684\u6587\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"srcset"),"\u54cd\u5e94\u5f0f\u56fe\u50cf\uff0c\u5728\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u5c4f\u5e55\u52a0\u8f7d\u4e0d\u540c\u7684\u56fe\u7247\u8d44\u6e90\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<img\n  src="image-128.png"\n  srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"\n  sizes="(max-width: 360px) 340px, 128px" />\n')),(0,a.kt)("h2",{id:"svg-\u4e0e-canvas"},"SVG \u4e0e Canvas"),(0,a.kt)("p",null,"SVG"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56\u5206\u8fa8\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u5927\u578b\u533a\u57df")),(0,a.kt)("p",null,"Canvas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u5206\u8fa8\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4e8b\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u9002\u5408\u6e32\u67d3\u6587\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u5408\u5bc6\u96c6\u578b\u5e94\u7528\uff1a\u6e38\u620f")),(0,a.kt)("h2",{id:"\u79bb\u7ebf\u5b58\u50a8"},"\u79bb\u7ebf\u5b58\u50a8"),(0,a.kt)("p",null,"\u521b\u5efa manifest.json \u6587\u4ef6"))}m.isMDXComponent=!0}}]);