"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9796],{7363:(e,t,a)=>{a.d(t,{kt:()=>s});var n=a(959);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(a),s=r,d=k["".concat(o,".").concat(s)]||k[s]||c[s]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(1163),r=(a(959),a(7363));const l={},i="\u6027\u80fd\u4f18\u5316",p={unversionedId:"business/fe-engineering/performance-optimization",id:"business/fe-engineering/performance-optimization",title:"\u6027\u80fd\u4f18\u5316",description:"\u5bf9\u7528\u6237\u6765\u8bf4\uff0c\u6027\u80fd\u7684\u597d\u574f\u4f53\u73b0\u5728\u662f\u5426\u6709\u660e\u663e\u7684\u6389\u5e27\u5361\u987f\u6216\u8005\u64cd\u4f5c\u5ef6\u8fdf\uff0c\u9996\u5c4f\u52a0\u8f7d\u65f6\u95f4\u6700\u597d\u63a7\u5236\u5728 3s \u5185\u3002",source:"@site/docs/business/fe-engineering/performance-optimization.md",sourceDirName:"business/fe-engineering",slug:"/business/fe-engineering/performance-optimization",permalink:"/docs/business/fe-engineering/performance-optimization",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/business/fe-engineering/performance-optimization.md",tags:[],version:"current",lastUpdatedAt:1683685857,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{},sidebar:"Business",previous:{title:"\u5305\u7ba1\u7406\u5668",permalink:"/docs/business/fe-engineering/package-manager"},next:{title:"pnpm workspace monorepo \u5b9e\u8df5",permalink:"/docs/business/fe-engineering/pnpm-workspace"}},o={},m=[{value:"\u5982\u4f55\u8861\u91cf\u4e00\u4e2a\u9879\u76ee/\u7f51\u7ad9\u7684\u6027\u80fd",id:"\u5982\u4f55\u8861\u91cf\u4e00\u4e2a\u9879\u76ee\u7f51\u7ad9\u7684\u6027\u80fd",level:2},{value:"\u76f8\u5173\u6307\u6807",id:"\u76f8\u5173\u6307\u6807",level:2},{value:"\u5b9a\u4f4d\u95ee\u9898",id:"\u5b9a\u4f4d\u95ee\u9898",level:2},{value:"\u9009\u62e9\u5408\u9002\u7684\u4f18\u5316\u65b9\u5f0f",id:"\u9009\u62e9\u5408\u9002\u7684\u4f18\u5316\u65b9\u5f0f",level:2},{value:"\u9996\u5c4f\u4f18\u5316",id:"\u9996\u5c4f\u4f18\u5316",level:3},{value:"webpack \u4f18\u5316",id:"webpack-\u4f18\u5316",level:2},{value:" React \u6027\u80fd\u4f18\u5316",id:"-react-\u6027\u80fd\u4f18\u5316",level:2},{value:"\u4ee3\u7801\u4f18\u5316",id:"\u4ee3\u7801\u4f18\u5316",level:2},{value:"\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d",id:"\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d",level:3},{value:"\u6279\u91cf\u66f4\u65b0",id:"\u6279\u91cf\u66f4\u65b0",level:3},{value:"\u6309\u4f18\u5148\u7ea7\u66f4\u65b0\uff0c\u53ca\u65f6\u54cd\u5e94\u64cd\u4f5c",id:"\u6309\u4f18\u5148\u7ea7\u66f4\u65b0\u53ca\u65f6\u54cd\u5e94\u64cd\u4f5c",level:3},{value:"\u7f13\u5b58\u4f18\u5316",id:"\u7f13\u5b58\u4f18\u5316",level:3},{value:"\u8282\u6d41\uff0c\u9632\u6296",id:"\u8282\u6d41\u9632\u6296",level:3},{value:"\u6dfb\u52a0\u7684 setTimeout,\u76d1\u542c\u4e8b\u4ef6\u7b49\u8981\u53ca\u65f6\u6e05\u9664\u3002",id:"\u6dfb\u52a0\u7684-settimeout\u76d1\u542c\u4e8b\u4ef6\u7b49\u8981\u53ca\u65f6\u6e05\u9664",level:3},{value:"Reference",id:"reference",level:2}],u={toc:m},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6027\u80fd\u4f18\u5316"},"\u6027\u80fd\u4f18\u5316"),(0,r.kt)("p",null,"\u5bf9\u7528\u6237\u6765\u8bf4\uff0c\u6027\u80fd\u7684\u597d\u574f\u4f53\u73b0\u5728\u662f\u5426\u6709\u660e\u663e\u7684\u6389\u5e27\u5361\u987f\u6216\u8005\u64cd\u4f5c\u5ef6\u8fdf\uff0c\u9996\u5c4f\u52a0\u8f7d\u65f6\u95f4\u6700\u597d\u63a7\u5236\u5728 3s \u5185\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u8861\u91cf\u4e00\u4e2a\u9879\u76ee\u7f51\u7ad9\u7684\u6027\u80fd"},"\u5982\u4f55\u8861\u91cf\u4e00\u4e2a\u9879\u76ee/\u7f51\u7ad9\u7684\u6027\u80fd"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Google Lighthouse \u5de5\u5177\u3002")),(0,r.kt)("p",null,"Lighthouse \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u81ea\u52a8\u5316\u5de5\u5177\uff0c\u7528\u4e8e\u6539\u8fdb\u7f51\u7edc\u5e94\u7528\u7684\u8d28\u91cf\u3002\u6709\u5bf9\u5e94 chrome extension \u4f7f\u7528\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6950855971379871757"},"https://juejin.cn/post/6950855971379871757")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First Contentful Paint \u6e32\u67d3\u51fa\u9996\u4e2a\u6587\u672c/\u9996\u5f20\u56fe\u7247\u7684\u65f6\u95f4"),(0,r.kt)("p",{parentName:"li"},"\u6d4b\u91cf",(0,r.kt)("strong",{parentName:"p"},"\u52a0\u8f7d"),"\u6027\u80fd\uff0c\u6700\u597d\u5728 2.5s \u5185\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Time to Interactive \u53ef\u4ea4\u4e92\u65f6\u95f4\u3002\u5927\u90e8\u5206\u53ef\u89c6\u533a\u57df\u7684\u4e8b\u4ef6\u90fd\u53ef\u4ee5\u64cd\u4f5c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Total Blocking Time \uff1a= TTI - FCP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Largest Contentful Paint \u89c6\u53e3\u4e2d\u53ef\u89c1\u7684\u6700\u5927\u56fe\u50cf\u6216\u6587\u672c\u5757\u7684\u6e32\u67d3\u65f6\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cumulative Layout Shift \u5e03\u5c40\u504f\u79fb\u5206\u6570"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6950855971379871757#heading-6"},"\u5982\u4f55\u4f7f\u7528 Lighthouse \u6027\u80fd\u68c0\u6d4b\u5de5\u5177 - \u6398\u91d1")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.webpagetest.org/"},"https://www.webpagetest.org/"))),(0,r.kt)("h2",{id:"\u76f8\u5173\u6307\u6807"},"\u76f8\u5173\u6307\u6807"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u5c4f\u65f6\u95f4\uff1a \u4ece\u6d4f\u89c8\u5668\u8f93\u5165\u5730\u5740\u5e76\u56de\u8f66\u540e\u5230\u9996\u5c4f\u5185\u5bb9\u6e32\u67d3\u5b8c\u6bd5\u7684\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u767d\u5c4f\u65f6\u95f4\uff1a\u4ece\u8f93\u5165\u5730\u5740\u56de\u8f66\u540e\u5230\u9875\u9762\u51fa\u73b0\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u64cd\u4f5c\u65f6\u95f4\uff1a \u70b9\u51fb\u4e8b\u4ef6\u6709\u53cd\u5e94\u3002window.DOMContentLoaded"),(0,r.kt)("li",{parentName:"ul"},"\u603b\u4e0b\u8f7d\u65f6\u95f4\uff1a window.onload")),(0,r.kt)("h2",{id:"\u5b9a\u4f4d\u95ee\u9898"},"\u5b9a\u4f4d\u95ee\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"React\uff1aProfiler\uff0c\u8bc6\u522b\u51fa\u5e94\u7528\u4e2d\u6e32\u67d3\u8f83\u6162\u7684\u90e8\u5206\u3002 \u9664\u4e86\u76f8\u5173 api\uff0c\u5728 react-devtools \u4e5f\u6709\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"window.performance"),(0,r.kt)("p",{parentName:"li"},"timing \u5c5e\u6027 \u5305\u542b\u4e86\u7f51\u7edc\u3001\u89e3\u6790\u7b49\u4e00\u7cfb\u5217\u7684\u65f6\u95f4\u6570\u636e\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DNS \u67e5\u8be2\u8017\u65f6 = domainLookupEnd - domainLookupStart"),(0,r.kt)("li",{parentName:"ul"},"TCP \u94fe\u63a5\u8017\u65f6 = connectEnd - connectStart"),(0,r.kt)("li",{parentName:"ul"},"request \u8bf7\u6c42\u8017\u65f6 = responseEnd - responseStart"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u6790 dom \u6811\u8017\u65f6 = domComplete - domInteractive"),(0,r.kt)("li",{parentName:"ul"},"\u767d\u5c4f\u65f6\u95f4 = domloading - fetchStart"),(0,r.kt)("li",{parentName:"ul"},"domready \u53ef\u64cd\u4f5c\u65f6\u95f4 = domContentLoadedEventEnd - fetchStart"),(0,r.kt)("li",{parentName:"ul"},"onload \u603b\u4e0b\u8f7d\u65f6\u95f4 = loadEventEnd - fetchStart")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 performance.mark \u6253\u70b9\u6d4b\u91cf\u65f6\u95f4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'performance.mark("cal-start");\n// \u6a21\u62df\u8017\u65f6\u4efb\u52a1\nfor (let i = 0; i < 1000000; i++) {}\nperformance.mark("cal-end");\n// \u8be5 measure \u7684\u540d\u5b57\uff1amy-cal\n// measure \u5f00\u59cb\u7684\u65f6\u95f4\u70b9\uff1acal-start\n// measure \u7ed3\u675f\u7684\u65f6\u95f4\u70b9\uff1acal-end\nperformance.measure("my-cal", "cal-start", "cal-end");\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904020109164552#heading-5"},"\u4f60\u7684\u9875\u9762\u4e3a\u4ec0\u4e48\u6162\uff0cPerformance Timeline \u7b80\u4ecb - \u6398\u91d1"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"NetWork \u9762\u677f"))),(0,r.kt)("h2",{id:"\u9009\u62e9\u5408\u9002\u7684\u4f18\u5316\u65b9\u5f0f"},"\u9009\u62e9\u5408\u9002\u7684\u4f18\u5316\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f51\u7edc\u5c42\u9762"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u7b56\u7565 \u4e3b\u8981\u662f webpack \u5904\u7406",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u6253\u5305\u65f6\u95f4\uff1a\u7f29\u5c0f\u8303\u56f4\uff0c\u7f13\u5b58\u526f\u672c\uff0c\u5b9a\u5411\u641c\u7d22\uff0c\u5e76\u884c\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u6253\u5305\u4f53\u79ef\uff1a\u4ee3\u7801\u5206\u5272\uff0c\u6447\u6811\u4f18\u5316\uff0c\u6309\u9700\u52a0\u8f7d\uff0c\u8d44\u6e90\u538b\u7f29\uff0ccdn \u5f15\u5165\u800c\u4e0d\u6253\u5305"))),(0,r.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u7b56\u7565 \u9759\u6001\u8d44\u6e90 cdn \u4e14\u653e\u5728\u4e0d\u540c\u57df\u540d\uff0cHTTP2 \u7a81\u7834 tcp \u8fde\u63a5\u6570\u9650\u5236\uff0cgzip \u538b\u7f29\uff0c\u5c0f\u56fe\u8f6c base64"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7b56\u7565 \u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u4e0d\u5e38\u53d8\u52a8\u7684\u8d44\u6e90\u4f7f\u7528\u5f3a\u7f13\u5b58\uff0c\u7f13\u5b58\u65f6\u95f4\u52a0\u957f\u3002\u9891\u7e41\u53d8\u52a8\u4f7f\u7528\u534f\u5546\u7f13\u5b58 Etag"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u7247\u7b56\u7565 \u56fe\u50cf\u7c7b\u578b\u5904\u7406"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6e32\u67d3\u5c42\u9762"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CSS \u7b56\u7565 \u51cf\u5c11\u5d4c\u5957\uff0c\u907f\u514d\u4f7f\u7528\u901a\u914d\u7b26\u9009\u62e9\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"DOM \u7b56\u7565 \u907f\u514d\u8fc7\u591a DOM \u64cd\u4f5c\uff0c\u4f7f\u7528 DOMFragment \u7f13\u5b58\u6279\u91cf\u5316 DOM \u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u963b\u585e\u7b56\u7565 defer async"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u6d41\u91cd\u7ed8\u7b56\u7565 \u4fee\u6539\u7c7b\u800c\u4e0d\u76f4\u63a5\u4fee\u6539\u5bf9\u5e94 CSS\uff0ctransform \u4ee3\u66ff top"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u66f4\u65b0 \u5f02\u6b65\u4fee\u6539 DOM \u65f6\u5305\u88c5\u4e3a\u5fae\u4efb\u52a1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd0\u884c\u65f6\u52a0\u8f7d\uff1a\u7ec4\u4ef6\u52a8\u6001\u52a0\u8f7d\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d"))),(0,r.kt)("h3",{id:"\u9996\u5c4f\u4f18\u5316"},"\u9996\u5c4f\u4f18\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6/\u8def\u7531\u61d2\u52a0\u8f7d\uff0c\u56fe\u7247\u61d2\u52a0\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u56fe\u7247\u538b\u7f29\uff0c\u5b57\u4f53\u4f18\u5316\uff08font-display+preload\uff09")),(0,r.kt)("h2",{id:"webpack-\u4f18\u5316"},"webpack \u4f18\u5316"),(0,r.kt)("p",null,"\u4e3b\u8981\u5206\u4e3a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u901f\u5ea6 \u5148\u5b9a\u4f4d\u54ea\u91cc\u8017\u65f6\u957f\uff08speed-measure-webpack-plugin\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6253\u5305\u4f53\u79ef \u5148\u5b9a\u4f4d\u54ea\u91cc\u5927\uff08webpack-bundle-analyzer\uff09")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/business/fe-engineering/webpack#webpack-%E4%BC%98%E5%8C%96"},"webpack \u4f18\u5316")),(0,r.kt)("h2",{id:"-react-\u6027\u80fd\u4f18\u5316"},(0,r.kt)("a",{parentName:"h2",href:"/docs/react/design-pattern-and-best-practices#react-%E4%B8%AD%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96"}," React \u6027\u80fd\u4f18\u5316")),(0,r.kt)("h2",{id:"\u4ee3\u7801\u4f18\u5316"},"\u4ee3\u7801\u4f18\u5316"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b58\u5728\u4e0d\u5fc5\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0\u3002--\u8df3\u8fc7\u4e0d\u9700\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0\uff0c\u51cf\u5c11\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9875\u9762\u6302\u8f7d\u592a\u591a\u4e0d\u53ef\u89c1\u7684\u7ec4\u4ef6\u3002--\u9009\u62e9\u61d2\u52a0\u8f7d\uff0c\u865a\u62df\u6e32\u67d3\u7b49\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u591a\u6b21\u8bbe\u7f6e\u72b6\u6001\uff0c\u5f15\u53d1\u591a\u6b21\u66f4\u65b0\u3002--\u9009\u62e9\u6279\u91cf\u66f4\u65b0\uff0cdebounce/throttle \u4f18\u5316\u9891\u7e41\u89e6\u53d1\u7684\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u6e32\u67d3\u9636\u6bb5\u8017\u65f6\uff0c\u9700\u8981\u5b9a\u4f4d\u5230\u5177\u4f53\u8017\u65f6\u4ee3\u7801\uff0c\u8003\u8651\u901a\u8fc7\u7f13\u5b58\u4f18\u5316\uff0c\u6216\u8005\u6309\u4f18\u5148\u7ea7\u66f4\u65b0\uff0c\u5148\u54cd\u5e94\u7528\u6237\u624d\u505a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u65f6\u9700\u8981\u9884\u52a0\u8f7d\uff0c\u63d0\u524d\u8bf7\u6c42\u8d44\u6e90\uff0c\u653e\u5728\u7f13\u5b58\u91cc\uff0c\u5728\u9700\u8981\u7684\u9002\u5408\u8bfb\u53d6\u3002\u6bd4\u5982\u4e5d\u5bab\u683c\u62bd\u5956\uff0c\u5bf9\u4e8e\u56fe\u7247\u5207\u6362\u7684\u6548\u7387\u8981\u6c42\u5f88\u9ad8\uff0c\u6216\u8005\u6d3b\u52a8\u52a8\u753b\u4e2d\u7684\u6bcf\u5e27\u56fe\u7247\u7b49\u90fd\u5bf9\u4ea4\u4e92\u6548\u7387\u8981\u6c42\u5f88\u9ad8\u3002")),(0,r.kt)("h3",{id:"\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d"},"\u7ec4\u4ef6\u6309\u9700\u52a0\u8f7d"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u61d2\u52a0\u8f7d")),(0,r.kt)("p",null,"\u573a\u666f\uff1aSPA \u5e94\u7528\u4e2d\uff0c \u8def\u7531\u8df3\u8f6c\u540e\u7684\u9875\u9762\uff0c\u6216\u8005\u5728\u7528\u6237\u64cd\u4f5c\u540e\u624d\u9700\u8981\u5c55\u793a\u7684\u7ec4\u4ef6\uff0c\u6bd4\u5982\u590d\u6742\u5f39\u7a97\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"React.lazy ",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy"},"\u4ee3\u7801\u5206\u5272 \u2013 React"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"webpack \u52a8\u6001\u5bfc\u5165")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u56fe\u7247\u61d2\u52a0\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-lazyload"},"react-lazyload")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<LazyLoad\n  placeholder={\n    <img\n      width="100%"\n      height="100%"\n      src={require("./music.png").default}\n      alt="music"\n    />\n  }>\n  <img\n    src={item.picUrl + "?param=300x300"}\n    width="100%"\n    height="100%"\n    alt="music"\n  />\n</LazyLoad>\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u61d2\u52a0\u8f7d\u9700\u8981\u8003\u8651\u52a0\u8f7d\u6001\u4ee5\u53ca\u52a0\u8f7d\u9519\u8bef\u7684\u5904\u7406\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u61d2\u6e32\u67d3")),(0,r.kt)("p",null,"\u865a\u62df\u5217\u8868"),(0,r.kt)("h3",{id:"\u6279\u91cf\u66f4\u65b0"},"\u6279\u91cf\u66f4\u65b0"),(0,r.kt)("h3",{id:"\u6309\u4f18\u5148\u7ea7\u66f4\u65b0\u53ca\u65f6\u54cd\u5e94\u64cd\u4f5c"},"\u6309\u4f18\u5148\u7ea7\u66f4\u65b0\uff0c\u53ca\u65f6\u54cd\u5e94\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4e0e\u6279\u91cf\u66f4\u65b0\u76f8\u53cd\uff0c\u5148\u54cd\u5e94\u7528\u6237\u884c\u4e3a\uff0c\u518d\u5b8c\u6210\u8017\u65f6\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u5c06\u8017\u65f6\u4efb\u52a1\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5b8f\u4efb\u52a1\u4e2d\u6267\u884c\uff0c\u4f18\u5148\u54cd\u5e94\u7528\u6237\u884c\u4e3a\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/youxianjigengxinlijixiangyingyonghucaozuo-eb740?file=/src/App.js"},"\u4f18\u5148\u7ea7\u66f4\u65b0\uff0c\u7acb\u5373\u54cd\u5e94\u7528\u6237\u64cd\u4f5c - CodeSandbox"))),(0,r.kt)("h3",{id:"\u7f13\u5b58\u4f18\u5316"},"\u7f13\u5b58\u4f18\u5316"),(0,r.kt)("p",null,"\u6bd4\u5982 React.memo"),(0,r.kt)("h3",{id:"\u8282\u6d41\u9632\u6296"},"\u8282\u6d41\uff0c\u9632\u6296"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/fe-basic/javascript/basic/debounce-and-throttle"},"\u9632\u6296\u548c\u8282\u6d41")," \u4f18\u5316\u9891\u7e41\u89e6\u53d1\u7684\u56de\u8c03\u3002"),(0,r.kt)("p",null,"input \u8f93\u5165\u641c\u7d22\u573a\u666f\uff1adebounce\uff0c\u53ea\u9700\u54cd\u5e94\u7528\u6237\u7684\u6700\u540e\u4e00\u6b21\u8f93\u5165\uff0c\u65e0\u9700\u54cd\u5e94\u7528\u6237\u4e2d\u95f4\u8f93\u5165\u503c\u3002"),(0,r.kt)("p",null,"throttle \u66f4\u9002\u5408\u9700\u8981\u5b9e\u65f6\u54cd\u5e94\u7684\u573a\u666f\uff1a\u62d6\u62fd\u8fdb\u884c\u653e\u5927\u7f29\u5c0f,\u6eda\u52a8\u4e8b\u4ef6\u3002\u5b9e\u65f6\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\u573a\u666f\u4e2d\uff0c\u5982\u679c\u56de\u8c03\u8017\u65f6\u5c0f\uff0c\u751a\u81f3\u53ef\u4ee5\u7528 requestAnimationFrame \u4ee3\u66ff throttle\u3002"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u7684-settimeout\u76d1\u542c\u4e8b\u4ef6\u7b49\u8981\u53ca\u65f6\u6e05\u9664"},"\u6dfb\u52a0\u7684 setTimeout,\u76d1\u542c\u4e8b\u4ef6\u7b49\u8981\u53ca\u65f6\u6e05\u9664\u3002"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6935584878071119885#heading-10"},"React \u6027\u80fd\u4f18\u5316 | \u5305\u62ec\u539f\u7406\u3001\u6280\u5de7\u3001Demo\u3001\u5de5\u5177\u4f7f\u7528 - \u6398\u91d1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6911472693405548557"},"\u804a\u4e00\u804a\u524d\u7aef\u6027\u80fd\u4f18\u5316"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6950855971379871757#heading-6"},"\u5982\u4f55\u4f7f\u7528 Lighthouse \u6027\u80fd\u68c0\u6d4b\u5de5\u5177 - \u6398\u91d1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.qq.com/mind/DWnljWm52eEVjWWNE"},"\u6027\u80fd\u4f18\u5316-\u601d\u7ef4\u5bfc\u56fe"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6981673766178783262#heading-6"},(0,r.kt)("strong",{parentName:"a"},"\u5199\u7ed9\u4e2d\u9ad8\u7ea7\u524d\u7aef\u5173\u4e8e\u6027\u80fd\u4f18\u5316\u7684 9 \u5927\u7b56\u7565\u548c 6 \u5927\u6307\u6807 | \u7f51\u6613\u56db\u5e74\u5b9e\u8df5 - \u6398\u91d1"))))))}k.isMDXComponent=!0}}]);