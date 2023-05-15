"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9115],{7363:(e,n,t)=>{t.d(n,{kt:()=>d});var l=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?l.createElement(f,a(a({ref:n},m),{},{components:t})):l.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<r;c++)a[c]=t[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(1163),o=(t(959),t(7363));const r={keywords:["pref","raf","scroll"]},a="\u5e73\u6ed1\u6eda\u52a8",i={unversionedId:"business/specific/scroll-smoth",id:"business/specific/scroll-smoth",title:"\u5e73\u6ed1\u6eda\u52a8",description:"\u4e00\u822c\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u70b9\u51fb\u56de\u5230\u9876\u90e8\u7684\u6807\u7b7e\uff0c\u6eda\u52a8\u5230\u9876\u90e8\uff0c\u4e00\u822c\u901a\u8fc7 a \u6807\u7b7e\u7684 href \u5c5e\u6027\uff0c\u5229\u7528\u951a\u70b9\u5b9e\u73b0\uff0c\u4f46\u8fd9\u4e2a\u6eda\u52a8\u7684\u6548\u679c\u9700\u8981\u4f18\u5316\u3002",source:"@site/docs/business/specific/scroll-smoth.md",sourceDirName:"business/specific",slug:"/business/specific/scroll-smoth",permalink:"/docs/business/specific/scroll-smoth",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/business/specific/scroll-smoth.md",tags:[],version:"current",lastUpdatedAt:1684114154,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{keywords:["pref","raf","scroll"]},sidebar:"Business",previous:{title:"\u901a\u8fc7\u7f51\u9875\u542f\u52a8\u5ba2\u6237\u7aef",permalink:"/docs/business/specific/launch-client-through-webpage"},next:{title:"\u4f7f\u7528 antd \u65f6\u8e29\u8fc7\u7684\u5751",permalink:"/docs/business/specific/setbacks-with-antd"}},s={},c=[{value:"\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301\u5e73\u6ed1\u6eda\u52a8",id:"\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301\u5e73\u6ed1\u6eda\u52a8",level:2},{value:"JS window.scrollTo",id:"js-windowscrollto",level:2},{value:"JS Element.scrollIntoView",id:"js-elementscrollintoview",level:2},{value:"scrollTo + \u5b9a\u65f6\u6267\u884c",id:"scrollto--\u5b9a\u65f6\u6267\u884c",level:2},{value:"\u5b9e\u73b0 2s \u5185\u53d8\u901f\u6eda\u52a8\u5230\u4f4d",id:"\u5b9e\u73b0-2s-\u5185\u53d8\u901f\u6eda\u52a8\u5230\u4f4d",level:3},{value:"requestAnimationFrame",id:"requestanimationframe",level:3},{value:"Reference",id:"reference",level:2}],m={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e73\u6ed1\u6eda\u52a8"},"\u5e73\u6ed1\u6eda\u52a8"),(0,o.kt)("p",null,"\u4e00\u822c\u7684\u4e1a\u52a1\u573a\u666f\uff0c\u70b9\u51fb\u56de\u5230\u9876\u90e8\u7684\u6807\u7b7e\uff0c\u6eda\u52a8\u5230\u9876\u90e8\uff0c\u4e00\u822c\u901a\u8fc7 a \u6807\u7b7e\u7684 href \u5c5e\u6027\uff0c\u5229\u7528\u951a\u70b9\u5b9e\u73b0\uff0c\u4f46\u8fd9\u4e2a\u6eda\u52a8\u7684\u6548\u679c\u9700\u8981\u4f18\u5316\u3002"),(0,o.kt)("h2",{id:"\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301\u5e73\u6ed1\u6eda\u52a8"},"\u6d4f\u89c8\u5668\u539f\u751f\u652f\u6301\u5e73\u6ed1\u6eda\u52a8"),(0,o.kt)("p",null,"\u5728 PC \u6d4f\u89c8\u5668\u4e2d\uff0c\u7f51\u9875\u9ed8\u8ba4\u6eda\u52a8\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"<html>"),"\u6807\u7b7e\u4e0a\u7684\uff0c\u79fb\u52a8\u7aef\u5927\u591a\u6570\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"<body>"),"\u6807\u7b7e\u4e0a\uff0c\u6240\u4ee5\u76f4\u63a5\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"scroll-behavior")," \u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html,\nbody {\n  scroll-behavior: smooth;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://caniuse.com/?search=scroll-behavior"},'"scroll-behavior" | Can I use... Support tables for HTML5, CSS3, etc'))),(0,o.kt)("p",null,"\u6709\u4e00\u5b9a\u7684\u517c\u5bb9\u95ee\u9898\uff0c\u4f46\u53ef\u4ee5\u90fd\u52a0\u4e0a\uff0c\u4e0d\u751f\u6548\u4e5f\u6ca1\u6709\u635f\u5931\u3002"),(0,o.kt)("h2",{id:"js-windowscrollto"},"JS window.scrollTo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'window.scrollTo(x, y);\n\n// \u8bbe\u7f6e\u6eda\u52a8\u884c\u4e3a\u6539\u4e3a\u5e73\u6ed1\u7684\u6eda\u52a8\nwindow.scrollTo({\n  top: 1000,\n  left: 0,\n  behavior: "smooth",\n});\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo"},"Window.scrollTo() - Web API \u63a5\u53e3\u53c2\u8003 | MDN"))),(0,o.kt)("p",null,"\u53ef\u4ee5\u4e0e\u4e0a\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"scroll-behavior")," \u7ed3\u5408\u4f7f\u7528\uff0c\u5b9e\u9645\u6d4b\u8bd5\u4e5f\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0cedge \u5e76\u4e0d\u5e73\u6ed1\u3002"),(0,o.kt)("h2",{id:"js-elementscrollintoview"},"JS Element.scrollIntoView"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'target.scrollIntoView({\n  behavior: "smooth",\n});\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView"},"Element.scrollIntoView() - Web API \u63a5\u53e3\u53c2\u8003 | MDN"))),(0,o.kt)("p",null,"\u6709\u517c\u5bb9\u6027\u95ee\u9898\uff0cMDN \u5199\u4e86 edge \u652f\u6301\uff0c\u4f46\u5b9e\u9645\u6d4b\u8bd5\u5e76\u6ca1\u6709\u5e73\u6ed1\u6eda\u52a8\u7684\u6548\u679c\u3002"),(0,o.kt)("h2",{id:"scrollto--\u5b9a\u65f6\u6267\u884c"},"scrollTo + \u5b9a\u65f6\u6267\u884c"),(0,o.kt)("p",null,"\u517c\u5bb9\u5904\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let requestId;\nfunction scrollToTop() {\n  if (!window.requestAmimationFrame) {\n    //\u517c\u5bb9\u6027\u5224\u65ad\n    window.requestAnimationFrame = function (callback) {\n      setTimeout(callback, 16.67);\n    };\n  }\n  const height = document.documentElement.scrollTop || document.body.scrollTop; //\u5f53\u524d\u6eda\u52a8\u9ad8\u5ea6\n  if (height > 0) {\n    requestId = window.requestAnimationFrame(scrollToTop);\n\n    //\u6eda\u52a8\u901f\u5ea6\u5148\u6162\u540e\u5feb\uff0c\u6570\u503c\u6839\u636e\u5b9e\u9645\u9ad8\u5ea6\u8981\u8c03\u8282\u3002\u4f46\u5177\u4f53\u6eda\u52a8\u901f\u5ea6\uff0c\u6eda\u52a8\u65f6\u95f4\u662f\u4e0d\u53ef\u63a7\u7684\n    if (height > 60) {\n      window.scrollTo(0, height - height / 8);\n    } else {\n      window.scrollTo(0, 0);\n      window.requestAnimationFrame(scrollToTop);\n    }\n  } else {\n    window.cancelAnimationFrame(requestId);\n  }\n}\nscrollToTop();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u5300\u901f\u6eda\u52a8\u5b9e\u73b0\nfunction scrollToTop() {\n  if (document.documentElement.scrollTop === 0) {\n    return;\n  }\n  let speed = 40;\n  document.documentElement.scrollTop -= speed; //\u6bcf\u4e00\u5e27\u6eda\u52a8\u4e00\u4e2a speed \u7684\u9ad8\u5ea6\n  requestAnimationFrame(scrollToTop);\n}\nscrollToTop();\n")),(0,o.kt)("h3",{id:"\u5b9e\u73b0-2s-\u5185\u53d8\u901f\u6eda\u52a8\u5230\u4f4d"},"\u5b9e\u73b0 2s \u5185\u53d8\u901f\u6eda\u52a8\u5230\u4f4d"),(0,o.kt)("p",null,"\u53d8\u901f\u6eda\u52a8\uff0c\u5148\u6162\u540e\u5feb\u518d\u6162\uff0c\u5e76\u63a7\u5236\u6eda\u52a8\u7684\u65f6\u95f4\u4e3a 2 \u79d2\u3002\u4e00\u822c\u7684\u663e\u793a\u5668 FPS \u4e3a 60 \uff0c2s \u5185\u6eda\u52a8\uff0c\u5219\u6267\u884c 120 \u6b21 RAF,\u63a7\u5236\u6bcf\u6b21\u6eda\u52a8\u7684\u8ddd\u79bb\u5148\u589e\u540e\u51cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//\u5047\u8bbe\u6700\u5c0f\u7684\u6b65\u957f\u4e3ax\n\u7b2c1\u5e27 document.documentElement.scrollTop - x * 1\n\u7b2c2\u5e27 document.documentElement.scrollTop - x * 2\n\u7b2c3\u5e27 document.documentElement.scrollTop - x * 3\n...\n\u7b2c60\u5e27 document.documentElement.scrollTop - x * 60\n\u7b2c61\u5e27 document.documentElement.scrollTop - x * 60 //\u901f\u5ea6\u8fbe\u5230\u5cf0\u503c\n\u7b2c62\u5e27 document.documentElement.scrollTop - x * 59\n\u7b2c63\u5e27 document.documentElement.scrollTop - x * 58\n...\n\u7b2c120\u5e27 document.documentElement.scrollTop - x * 1\n\nx = distance / (1+2+3\xb7\xb7\xb7+60+60+59+\xb7\xb7\xb7+2+1) = distance / 60 / 61\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function scroll() {\n  dateBegin = Date.now();\n  let current = document.documentElement.scrollTop;\n  // \u4f7f\u7528promise\u7528\u6765\u7edf\u8ba1\u65f6\u95f4\n  new Promise((resolve, reject) => {\n    let unit = current / 60 / 61; //\u6700\u5c0f\u6b65\u957f\n    let index = 0;\n    let cb = () => {\n      if (document.documentElement.scrollTop === 0) {\n        dateEnd = Date.now();\n        resolve([dateBegin, dateEnd]);\n      } else {\n        index++;\n        if (index <= 60) {\n          current -= index * unit;\n          //\u8fd9\u4e2a\u5730\u65b9\u4e0d\u8981\u7528document.documentElement.scrollTop\u4ee3\u66ffcurrent\uff0c\n          //document.documentElement.scrollTop\u53ef\u4ee5\u63a5\u53d7\u6d6e\u70b9\u6570\uff0c\u4e4b\u540e\u4f1a\u8f6c\u5316\u4e3a\u6574\u6570\n          //\u8fd9\u6837\u7684\u8bdd\u4f1a\u4f7f\u65f6\u95f4\u53d8\u7684\u4e0d\u51c6\n        } else if (index > 60) {\n          current -= (121 - index) * unit;\n        }\n        document.documentElement.scrollTop = current;\n        requestAnimationFrame(cb);\n      }\n    };\n    requestAnimationFrame(cb);\n  }).then((data) => {\n    console.log(data[1] - data[0], " ms");\n  });\n}\nscroll();\n')),(0,o.kt)("p",null,"\u5982\u679c\u5728\u6eda\u52a8\u7684\u8fc7\u7a0b\u4e2d\u6eda\u52a8\u9f20\u6807\uff0c\u4f1a\u5f71\u54cd\u8bbe\u7f6e\u7684\u6eda\u52a8\u6548\u679c\uff0c\u6b64\u65f6\u53ef\u4ee5\u5c1d\u8bd5\u76d1\u542c\u9f20\u6807\u7684\u6eda\u8f6e\u4e8b\u4ef6 mousewheel\uff0cpreventDefault\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903925473083405#heading-8"},"\u53d8\u901f\u6eda\u52a8"))),(0,o.kt)("h3",{id:"requestanimationframe"},"requestAnimationFrame"),(0,o.kt)("p",null,"\u544a\u8bc9\u6d4f\u89c8\u5668\uff0c\u5e0c\u671b\u6267\u884c\u4e00\u4e2a\u52a8\u753b\uff0c\u8981\u6c42\u6d4f\u89c8\u5668\u5728\u4e0b\u6b21\u91cd\u7ed8\u4e4b\u524d\u8c03\u7528\u6307\u5b9a\u7684 callback \u6765\u66f4\u65b0\u52a8\u753b\u3002"),(0,o.kt)("p",null,"\u6267\u884c\u65f6\u95f4\uff1a1s/\u5237\u65b0\u7387 \uff0c\u4e00\u822c\u4e3a 1000ms / 60 = 16.67ms \u6267\u884c\u4e00\u6b21"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const id = window.requestAnimationFrame(callback);\n\nwindow.cancelAnimationFrame(id); //\u53d6\u6d88\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\n")),(0,o.kt)("p",null,"\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"requestAnimationFrame \u5728\u6bcf\u4e00\u5e27\u7684\u751f\u547d\u5468\u671f\u90fd\u4f1a\u89e6\u53d1\uff0c\u4f1a\u4f7f\u52a8\u753b\u66f4\u52a0\u6d41\u7545\uff0c\u800c setInterval \u4e0d\u80fd\u4fdd\u8bc1\u6bcf\u4e00\u5e27\u90fd\u80fd\u89e6\u53d1\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"requestAnimationFrame \u662f\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u5b8c\u6210\u7684\u3002\u5982\u679c\u4e3b\u7ebf\u7a0b\u975e\u5e38\u7e41\u5fd9\uff0crequestAnimationFrame \u7684\u52a8\u753b\u6548\u679c\u4f1a\u5927\u6253\u6298\u6263\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u540e\u53f0\u6807\u7b7e\u9875\u6216\u8005\u9690\u85cf\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"<iframe> "),"\u91cc\u7684 RAF \u4f1a\u88ab\u6682\u505c\u8c03\u7528\u4ee5\u63d0\u5347\u6027\u80fd\u548c\u7535\u6c60\u5bff\u547d\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RAF \u517c\u5bb9\u6027\u8fd8\u662f\u6bd4\u8f83\u9ad8\u7684\u7684\uff0c\u4f46\u6700\u597d\u6dfb\u52a0 setTimeout \u5b9e\u73b0 polyfill\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame"},"window.requestAnimationFrame - Web API \u63a5\u53e3\u53c2\u8003 | MDN")))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%e5%b9%b3%e6%bb%91%e6%bb%9a%e5%8a%a8/comment-page-1/#comment-423108"},"CSS scroll-behavior \u548c JS scrollIntoView \u8ba9\u9875\u9762\u6eda\u52a8\u5e73\u6ed1 \xab \u5f20\u946b\u65ed-\u946b\u7a7a\u95f4-\u946b\u751f\u6d3b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903925473083405#heading-3"},"\u5e73\u6ed1\u6eda\u52a8\u7684\u5b9e\u73b0(\u4e0a) - \u6398\u91d1"))))}p.isMDXComponent=!0}}]);