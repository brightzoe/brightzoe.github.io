"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6699],{4137:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3609:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=["components"],i={},c="\u9632\u6296\u548c\u8282\u6d41",u={unversionedId:"javascript/debounce-and-throttle",id:"javascript/debounce-and-throttle",title:"\u9632\u6296\u548c\u8282\u6d41",description:"- \u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41",source:"@site/docs/javascript/debounce-and-throttle.md",sourceDirName:"javascript",slug:"/javascript/debounce-and-throttle",permalink:"/docs/javascript/debounce-and-throttle",editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/javascript/debounce-and-throttle.md",tags:[],version:"current",lastUpdatedAt:1651939688,formattedLastUpdatedAt:"5/7/2022",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u524d\u7aef\u6570\u636e\u5b58\u50a8",permalink:"/docs/javascript/caching-in-browser"},next:{title:"\u5bf9\u8def\u7531\u7684\u7406\u89e3",permalink:"/docs/javascript/how-to-understand-router"}},s={},p=[{value:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3",id:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3",level:2},{value:"\u7b80\u5355\u5b9e\u73b0",id:"\u7b80\u5355\u5b9e\u73b0",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:2},{value:"debounce",id:"debounce",level:3},{value:"throttle",id:"throttle",level:3},{value:"Reference",id:"reference",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9632\u6296\u548c\u8282\u6d41"},"\u9632\u6296\u548c\u8282\u6d41"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5b9e\u73b0"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f")),(0,o.kt)("h2",{id:"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3"},"\u5bf9\u6982\u5ff5\u7684\u7406\u89e3"),(0,o.kt)("p",null,"\u9632\u6296 debounce\uff1a\u5728\u4e8b\u4ef6\u88ab\u89e6\u53d1\u7684\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u6267\u884c\u56de\u8c03\uff0c\u5982\u679c\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\u53c8\u88ab\u89e6\u53d1\uff0c\u5219\u91cd\u65b0\u8ba1\u65f6\u3002"),(0,o.kt)("p",null,"\u8282\u6d41 throttle\uff1a\u5728\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\uff0c\u53ea\u80fd\u89e6\u53d1\u4e00\u6b21\u51fd\u6570\u3002\u5982\u679c\u8fd9\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\u89e6\u53d1\u591a\u6b21\u51fd\u6570\uff0c\u53ea\u6709\u4e00\u6b21\u751f\u6548\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6bd4\u8f83\u7247\u9762\u7684\u7406\u89e3\uff08\u4e5f\u6709\u4e00\u5b9a\u9053\u7406\uff09\uff1a\u9632\u6296\uff1a\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u6709\u6700\u540e\u4e00\u6b21\u89e6\u53d1\u6709\u6548\u3002\u8282\u6d41\uff1a\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u6709\u7b2c\u4e00\u6b21\u89e6\u53d1\u6709\u6548\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("strong",{parentName:"h5"},"\u751f\u52a8\u7684\u89e3\u91ca"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9632\u6296\uff1a"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"moba \u6e38\u620f\u56de\u57ce\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u518d\u6b21\u70b9\u51fb\u5219\u91cd\u65b0\u8ba1\u65f6"),(0,o.kt)("li",{parentName:"ul"},"\u5237\u5361\u4e58\u516c\u4ea4\u8f66\uff0c\u4e00\u76f4\u6709\u4e58\u5ba2\u5237\u5361\u4e0a\u8f66\uff0c\u53f8\u673a\u5219\u4e0d\u80fd\u5f00\u52a8\uff0c\u82e5\u4e00\u5b9a delay \u540e\u6ca1\u4eba\u4e0a\u8f66\u5c31\u53ef\u4ee5\u8d70\u4e86")),(0,o.kt)("p",{parentName:"div"},"\u8282\u6d41\uff1a"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"moba \u6e38\u620f\u7684\u4e0d\u505c\u666e\u901a\u653b\u51fb\uff0c\u5355\u4f4d\u65f6\u95f4\u70b9\u51fb\u591a\u6b21\uff0c\u53ea\u6709\u4e00\u6b21\u751f\u6548\uff0c\u6216\u8005\u6280\u80fd cd"),(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u5395\u6240\uff0c\u4e0d\u662f\u559d\u4e00\u53e3\u6c34\u5c31\u7acb\u523b\u4e0a\u5395\u6240\uff0c\u6bcf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u624d\u56de\u53bb\u4e0a\u5395\u6240")))),(0,o.kt)("p",null,"\u6817\u5b50\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9632\u6296\uff1a\u641c\u7d22\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22\u3002\u8f93\u5165\u4e86\uff0c\u7136\u540e\u4e00\u6bb5\u65f6\u95f4\u5185(1s)\u6ca1\u6709\u518d\u8f93\u5165\uff0c\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\uff0c\u82e5 1s \u5185\u91cd\u65b0\u8f93\u5165\u4e86\uff0c\u91cd\u65b0\u8ba1\u65f6\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8282\u6d41\uff1a\u9f20\u6807\u4e0d\u65ad\u70b9\u51fb\u89e6\u53d1\uff0cmousedown(\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u89e6\u53d1\u4e00\u6b21)"))),(0,o.kt)("p",null,"\u4e8c\u8005\u5171\u540c\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u548c\u51fd\u6570\u8282\u6d41\u90fd\u662f\u9632\u6b62\u67d0\u4e00\u65f6\u95f4\u9891\u7e41\u89e6\u53d1\uff0c\u4f46\u662f\u8fd9\u4e24\u5144\u5f1f\u4e4b\u95f4\u7684\u539f\u7406\u5374\u4e0d\u4e00\u6837\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u662f\u67d0\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u800c\u51fd\u6570\u8282\u6d41\u662f\u95f4\u9694\u65f6\u95f4\u6267\u884c\u3002")),(0,o.kt)("h2",{id:"\u7b80\u5355\u5b9e\u73b0"},"\u7b80\u5355\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//debounce\n//debounce(fn,1000)\nfunction debounce(fn, delay) {\n    return function () {\n        const that = this;\n        const _args = arguments;\n        fn.id && clearTimeout(fn.id);\n        fn.id = setTimeout(() => fn.apply(that, _args), delay);\n    };\n}\n\n//throttle(\u5b9a\u65f6\u5668\u6807\u8bb0\u7248)\nfunction throttle(fn, delay) {\n    let timer;\n    return function () {\n        if (timer) {\n            //\u5df2\u7ecf\u5b89\u6392\u4e0a\u4e86\uff0c\u5c31\u4e0d\u518d\u5b89\u6392\u4e86\n            return;\n        }\n        const that = this;\n        const _args = arguments;\n        timer = setTimeout(() => fn.apply(that, _args), delay);\n    };\n}\n\n//throttle(\u65f6\u95f4\u6233\u7248)\nfunction throttle(fn, delay) {\n    let last = 0;\n    return function () {\n        const that = this;\n        const _args = arguments;\n        const now = Date.now();\n        if (now - last > delay) {\n            fn.call(that, _args);\n            last = now;\n        } else {\n            console.log("\u65f6\u95f4\u5dee\u4e0d\u6ee1\u8db3\u8981\u6c42,\u4e0d\u6267\u884c");\n        }\n    };\n}\n//\u4e0a\u9762\u65f6\u95f4\u6233\u7248\u548c\u5b9a\u65f6\u5668\u7248\u7684\u8282\u6d41\u51fd\u6570\u7684\u533a\u522b\u662f\uff0c\u65f6\u95f4\u6233\u7248\u7684\u51fd\u6570\u89e6\u53d1\u662f\u5728\u65f6\u95f4\u6bb5\u5185\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u800c\u5b9a\u65f6\u5668\u7248\u7684\u51fd\u6570\u89e6\u53d1\u662f\u5728\u65f6\u95f4\u6bb5\u5185\u7ed3\u675f\u7684\u65f6\u5019\u3002\n\n//throttle\u65f6\u95f4\u6233\u4e14\u6700\u540e\u4e00\u6b21\u4e5f\u8981\u6267\u884c\nfunction throttle(fn, delay) {\n    let last, timer;\n    return function () {\n        const that = this;\n        const _args = arguments;\n        const now = Date.now();\n        clearTimeout(timer);\n        if (last && now < last + delay) {\n            //\u52a0\u4e0a\u8fd9\u6bb5\u4f1a\u4f7f\u5355\u4f4d\u65f6\u95f4\u5185\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u4e5f\u6267\u884c,\u6709\u6ca1\u6709\u5fc5\u8981\u662f\u5b58\u5728\u4e89\u8bae\u7684,\u5177\u4f53\u662f\u5426\u9700\u8981\u8981\u770b\u5177\u4f53\u573a\u666f\u3002\n            const diff = delay - (now - last);\n            timer = setTimeout(function () {\n                last = now;\n                fn.apply(that, _args);\n            }, diff);\n            //\u6211\u4eec\u8981\u9650\u52361s\u4e2d\u53ea\u67091\u4e2a\u8bf7\u6c42\u662f\u6709\u7528\u7684\u3002\u5047\u8bbe\u7528\u62371s\u4e2d\u70b9\u4e86100\u6b21\u3002\u6309\u7406\u6765\u8bf4\uff0c\u7b2c2-100\u6b21\u90fd\u662f\u65e0\u7528\u7684\u3002\u4f46\u662f\u5728\u7b2c100\u6b21\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u6267\u884c\u4e86\u4e0a\u9762\u7684\u4ee3\u7801\u5757\u540e\uff0c\u7b2c100\u6b21\u7684\u70b9\u51fb\u4e8b\u4ef6\u7531\u4e8e\u5b9a\u65f6\u5668\u64cd\u4f5c\uff0c\u9020\u6210\u5b83\u53d8\u6210\u6709\u6548\u7684\u8bf7\u6c42\u4e86\uff0c\u611f\u89c9\u6709\u70b9\u8fdd\u80cc\u51fd\u6570\u8282\u6d41\u7684\u5b9a\u4e49\u3002\n        } else {\n            last = now;\n            fn.apply(that, _args);\n        }\n    };\n}\n')),(0,o.kt)("h2",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,o.kt)("h3",{id:"debounce"},"debounce"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"search \u641c\u7d22\uff0c\u7528\u6237\u4e0d\u65ad\u8f93\u5165\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u6ca1\u6709\u8f93\u5165\u540e\u518d\u53d1\u8bf7\u6c42\uff0c\u8282\u7ea6\u8bf7\u6c42\u8d44\u6e90\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u767b\u5f55\u6ce8\u518c\u7b49\u8868\u5355\u63d0\u4ea4\u64cd\u4f5c\u7528\u6237\u70b9\u51fb\u8fc7\u5feb\u89e6\u53d1\u591a\u6b21\u8bf7\u6c42."),(0,o.kt)("li",{parentName:"ul"},"resize \u89e6\u53d1\uff0c\u7531\u4e8e\u53ef\u89c6\u533a\u53d8\u5927\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u66f4\u591a\u5185\u5bb9\u6765\u586b\u5145\u53ef\u89c6\u533a\u3002\u4f46\u53ef\u89c6\u533a\u53d8\u5927\u7684\u8fc7\u7a0b\u4e2d\uff0cresize \u4e8b\u4ef6\u4f1a\u88ab\u89e6\u53d1\u591a\u6b21...\u6bcf\u6b21\u89e6\u53d1\u90fd\u53bb\u8bf7\u6c42\u4e00\u6b21\u7684\u8bdd\u6ca1\u6709\u5fc5\u8981\uff0c\u9632\u6296\u53ea\u89e6\u53d1\u5355\u4f4d\u65f6\u95f4\u6700\u540e\u4e00\u6b21\u3002")),(0,o.kt)("h3",{id:"throttle"},"throttle"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e8b\u4ef6\uff0cmousedown \u5355\u4f4d\u65f6\u95f4\u53ea\u89e6\u53d1\u4e00\u6b21\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u4e8b\u4ef6\uff0c\u6ed1\u52a8\u5230\u5e95\u90e8\u52a0\u8f7d\u66f4\u591a")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u590d\u6742\u573a\u666f\uff1a"),(0,o.kt)("p",{parentName:"div"},"search \u5411\u540e\u53f0\u53d1\u8bf7\u6c42\u8fd4\u56de\u641c\u7d22\u503c\uff0c\u4e0e\u63a5\u53e3\u8fd4\u56de\u7684\u5148\u540e\u987a\u5e8f\u6709\u5173\uff0c\u53ea\u4f7f\u7528\u6700\u540e\u4e00\u6b21\u8bf7\u6c42\u7684\u8fd4\u56de\u3002"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903669389885453#heading-3"},"7 \u5206\u949f\u7406\u89e3 JS \u7684\u8282\u6d41\u3001\u9632\u6296\u53ca\u4f7f\u7528\u573a\u666f - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903662519599111#heading-5"},"\u9632\u6296\u548c\u8282\u6d41\u539f\u7406\u5206\u6790 - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7018296556323340324#heading-3"},"\u9632\u6296\u8282\u6d41\u573a\u666f\u53ca\u5e94\u7528 - \u6398\u91d1")," \u542b lodash \u6e90\u7801\u5206\u6790")))}m.isMDXComponent=!0}}]);