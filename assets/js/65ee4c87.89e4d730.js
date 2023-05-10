"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9819],{7363:(e,t,n)=>{n.d(t,{kt:()=>d});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(1163),r=(n(959),n(7363));const l={},o="\u9632\u6296\u548c\u8282\u6d41",i={unversionedId:"fe-basic/javascript/basic/debounce-and-throttle",id:"fe-basic/javascript/basic/debounce-and-throttle",title:"\u9632\u6296\u548c\u8282\u6d41",description:"- \u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41",source:"@site/docs/fe-basic/javascript/basic/debounce-and-throttle.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/debounce-and-throttle",permalink:"/docs/fe-basic/javascript/basic/debounce-and-throttle",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/debounce-and-throttle.md",tags:[],version:"current",lastUpdatedAt:1683685857,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"FE",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/fe-basic/javascript/basic/data-types"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/fe-basic/javascript/basic/event-loop"}},c={},s=[{value:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3",id:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3",level:2},{value:"\u7b80\u5355\u5b9e\u73b0",id:"\u7b80\u5355\u5b9e\u73b0",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"debounce",id:"debounce",level:3},{value:"throttle",id:"throttle",level:3},{value:"Reference",id:"reference",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9632\u6296\u548c\u8282\u6d41"},"\u9632\u6296\u548c\u8282\u6d41"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f")),(0,r.kt)("h2",{id:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3"},"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3"),(0,r.kt)("p",null,"\u9632\u6296 debounce\uff1a\u5728\u4e8b\u4ef6\u88ab\u89e6\u53d1\u4e86\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u6267\u884c\u56de\u8c03\uff0c\u5982\u679c\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\u53c8\u88ab\u89e6\u53d1\uff0c\u5219\u91cd\u65b0\u8ba1\u65f6\u3002"),(0,r.kt)("p",null,"\u8282\u6d41 throttle\uff1a\u5728\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\uff0c\u53ea\u80fd\u89e6\u53d1\u4e00\u6b21\u51fd\u6570\u3002\u5982\u679c\u8fd9\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\u89e6\u53d1\u591a\u6b21\u51fd\u6570\uff0c\u53ea\u6709\u4e00\u6b21\u751f\u6548\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6bd4\u8f83\u7247\u9762\u7684\u7406\u89e3\uff08\u4e5f\u6709\u4e00\u5b9a\u9053\u7406\uff09\uff1a\u9632\u6296\uff1a\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u6709\u6700\u540e\u4e00\u6b21\u89e6\u53d1\u6709\u6548\u3002\u8282\u6d41\uff1a\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u6709\u7b2c\u4e00\u6b21\u89e6\u53d1\u6709\u6548\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\u751f\u52a8\u7684\u89e3\u91ca")),(0,r.kt)("p",{parentName:"admonition"},"\u9632\u6296\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"moba \u6e38\u620f\u56de\u57ce\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u518d\u6b21\u70b9\u51fb\u5219\u91cd\u65b0\u8ba1\u65f6"),(0,r.kt)("li",{parentName:"ul"},"\u5237\u5361\u4e58\u516c\u4ea4\u8f66\uff0c\u4e00\u76f4\u6709\u4e58\u5ba2\u5237\u5361\u4e0a\u8f66\uff0c\u53f8\u673a\u5219\u4e0d\u80fd\u5f00\u52a8\uff0c\u82e5\u4e00\u5b9a delay \u540e\u6ca1\u4eba\u4e0a\u8f66\u5c31\u53ef\u4ee5\u8d70\u4e86")),(0,r.kt)("p",{parentName:"admonition"},"\u8282\u6d41\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"moba \u6e38\u620f\u7684\u4e0d\u505c\u666e\u901a\u653b\u51fb\uff0c\u5355\u4f4d\u65f6\u95f4\u70b9\u51fb\u591a\u6b21\uff0c\u53ea\u6709\u4e00\u6b21\u751f\u6548\uff0c\u6216\u8005\u6280\u80fd cd"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u5395\u6240\uff0c\u4e0d\u662f\u559d\u4e00\u53e3\u6c34\u5c31\u7acb\u523b\u4e0a\u5395\u6240\uff0c\u6bcf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u624d\u56de\u53bb\u4e0a\u5395\u6240"))),(0,r.kt)("p",null,"\u6817\u5b50\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9632\u6296\uff1a\u641c\u7d22\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22\u3002\u8f93\u5165\u4e86\uff0c\u7136\u540e\u4e00\u6bb5\u65f6\u95f4\u5185(1s)\u6ca1\u6709\u518d\u8f93\u5165\uff0c\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\uff0c\u82e5 1s \u5185\u91cd\u65b0\u8f93\u5165\u4e86\uff0c\u91cd\u65b0\u8ba1\u65f6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8282\u6d41\uff1a\u9f20\u6807\u4e0d\u65ad\u70b9\u51fb\u89e6\u53d1\uff0cmousedown(\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u89e6\u53d1\u4e00\u6b21)"))),(0,r.kt)("p",null,"\u4e8c\u8005\u5171\u540c\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u548c\u51fd\u6570\u8282\u6d41\u90fd\u662f\u9632\u6b62\u67d0\u4e00\u65f6\u95f4\u9891\u7e41\u89e6\u53d1\uff0c\u4f46\u662f\u8fd9\u4e24\u5144\u5f1f\u4e4b\u95f4\u7684\u539f\u7406\u5374\u4e0d\u4e00\u6837\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u662f\u67d0\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u800c\u51fd\u6570\u8282\u6d41\u662f\u95f4\u9694\u65f6\u95f4\u6267\u884c\u3002")),(0,r.kt)("h2",{id:"\u7b80\u5355\u5b9e\u73b0"},"\u7b80\u5355\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//debounce\n//debounce(fn,1000)\nfunction debounce(fn, delay) {\n  let timer;\n  return function () {\n    const context = this;\n    const _args = arguments;\n    timer && clearTimeout(fn.id);\n    timer = setTimeout(() => fn.apply(context, _args), delay);\n  };\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//throttle(\u5b9a\u65f6\u5668\u6807\u8bb0\u7248)\nfunction throttle(fn, delay) {\n  let timer;\n  return function () {\n    if (timer) {\n      //\u5df2\u7ecf\u5b89\u6392\u4e0a\u4e86\uff0c\u5c31\u4e0d\u518d\u5b89\u6392\u4e86\n      return;\n    }\n    const context = this;\n    const _args = arguments;\n    timer = setTimeout(() => fn.apply(context, _args), delay);\n  };\n}\n\n//throttle(\u65f6\u95f4\u6233\u7248)\nfunction throttle(fn, delay) {\n  let last = 0;\n  return function () {\n    const context = this;\n    const _args = arguments;\n    const now = Date.now();\n    if (now - last > delay) {\n      fn.call(context, _args);\n      last = now;\n    } else {\n      console.log("\u65f6\u95f4\u5dee\u4e0d\u6ee1\u8db3\u8981\u6c42,\u4e0d\u6267\u884c");\n    }\n  };\n}\n//\u4e0a\u9762\u65f6\u95f4\u6233\u7248\u548c\u5b9a\u65f6\u5668\u7248\u7684\u8282\u6d41\u51fd\u6570\u7684\u533a\u522b\u662f\uff0c\u65f6\u95f4\u6233\u7248\u7684\u51fd\u6570\u89e6\u53d1\u662f\u5728\u65f6\u95f4\u6bb5\u5185\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u800c\u5b9a\u65f6\u5668\u7248\u7684\u51fd\u6570\u89e6\u53d1\u662f\u5728\u65f6\u95f4\u6bb5\u5185\u7ed3\u675f\u7684\u65f6\u5019\u3002\n\n//throttle\u65f6\u95f4\u6233\u4e14\u6700\u540e\u4e00\u6b21\u4e5f\u8981\u6267\u884c\nfunction throttle(fn, delay) {\n  let last, timer;\n  return function () {\n    const context = this;\n    const _args = arguments;\n    const now = Date.now();\n    clearTimeout(timer);\n    if (last && now < last + delay) {\n      //\u52a0\u4e0a\u8fd9\u6bb5\u4f1a\u4f7f\u5355\u4f4d\u65f6\u95f4\u5185\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u4e5f\u6267\u884c,\u6709\u6ca1\u6709\u5fc5\u8981\u662f\u5b58\u5728\u4e89\u8bae\u7684,\u5177\u4f53\u662f\u5426\u9700\u8981\u8981\u770b\u5177\u4f53\u573a\u666f\u3002\n      const diff = delay - (now - last);\n      timer = setTimeout(function () {\n        last = now;\n        fn.apply(context, _args);\n      }, diff);\n      //\u6211\u4eec\u8981\u9650\u52361s\u4e2d\u53ea\u67091\u4e2a\u8bf7\u6c42\u662f\u6709\u7528\u7684\u3002\u5047\u8bbe\u7528\u62371s\u4e2d\u70b9\u4e86100\u6b21\u3002\u6309\u7406\u6765\u8bf4\uff0c\u7b2c2-100\u6b21\u90fd\u662f\u65e0\u7528\u7684\u3002\u4f46\u662f\u5728\u7b2c100\u6b21\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u6267\u884c\u4e86\u4e0a\u9762\u7684\u4ee3\u7801\u5757\u540e\uff0c\u7b2c100\u6b21\u7684\u70b9\u51fb\u4e8b\u4ef6\u7531\u4e8e\u5b9a\u65f6\u5668\u64cd\u4f5c\uff0c\u9020\u6210\u5b83\u53d8\u6210\u6709\u6548\u7684\u8bf7\u6c42\u4e86\uff0c\u611f\u89c9\u6709\u70b9\u8fdd\u80cc\u51fd\u6570\u8282\u6d41\u7684\u5b9a\u4e49\u3002\n    } else {\n      last = now;\n      fn.apply(context, _args);\n    }\n  };\n}\n')),(0,r.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,r.kt)("h3",{id:"debounce"},"debounce"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"search \u641c\u7d22\uff0c\u7528\u6237\u4e0d\u65ad\u8f93\u5165\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u6ca1\u6709\u8f93\u5165\u540e\u518d\u53d1\u8bf7\u6c42\uff0c\u8282\u7ea6\u8bf7\u6c42\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u767b\u5f55\u6ce8\u518c\u7b49\u8868\u5355\u63d0\u4ea4\u64cd\u4f5c\u7528\u6237\u70b9\u51fb\u8fc7\u5feb\u89e6\u53d1\u591a\u6b21\u8bf7\u6c42."),(0,r.kt)("li",{parentName:"ul"},"resize \u89e6\u53d1\uff0c\u7531\u4e8e\u53ef\u89c6\u533a\u53d8\u5927\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u66f4\u591a\u5185\u5bb9\u6765\u586b\u5145\u53ef\u89c6\u533a\u3002\u4f46\u53ef\u89c6\u533a\u53d8\u5927\u7684\u8fc7\u7a0b\u4e2d\uff0cresize \u4e8b\u4ef6\u4f1a\u88ab\u89e6\u53d1\u591a\u6b21...\u6bcf\u6b21\u89e6\u53d1\u90fd\u53bb\u8bf7\u6c42\u4e00\u6b21\u7684\u8bdd\u6ca1\u6709\u5fc5\u8981\uff0c\u9632\u6296\u53ea\u89e6\u53d1\u5355\u4f4d\u65f6\u95f4\u6700\u540e\u4e00\u6b21\u3002")),(0,r.kt)("h3",{id:"throttle"},"throttle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e8b\u4ef6\uff0cmousedown \u5355\u4f4d\u65f6\u95f4\u53ea\u89e6\u53d1\u4e00\u6b21\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u4e8b\u4ef6\uff0c\u6ed1\u52a8\u5230\u5e95\u90e8\u52a0\u8f7d\u66f4\u591a")),(0,r.kt)("admonition",{title:"\u590d\u6742\u573a\u666f\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"search \u5411\u540e\u53f0\u53d1\u8bf7\u6c42\u8fd4\u56de\u641c\u7d22\u503c\uff0c\u4e0e\u63a5\u53e3\u8fd4\u56de\u7684\u5148\u540e\u987a\u5e8f\u6709\u5173\uff0c\u53ea\u4f7f\u7528\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u8fd4\u56de\u3002")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903669389885453#heading-3"},"7 \u5206\u949f\u7406\u89e3 JS \u7684\u8282\u6d41\u3001\u9632\u6296\u53ca\u4f7f\u7528\u573a\u666f - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903662519599111#heading-5"},"\u9632\u6296\u548c\u8282\u6d41\u539f\u7406\u5206\u6790 - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7018296556323340324#heading-3"},"\u9632\u6296\u8282\u6d41\u573a\u666f\u53ca\u5e94\u7528 - \u6398\u91d1")," \u542b lodash \u6e90\u7801\u5206\u6790")))}m.isMDXComponent=!0}}]);