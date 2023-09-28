"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8153],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?l.createElement(k,r(r({ref:t},p),{},{components:n})):l.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=n(7366),a=(n(9496),n(9613));const o={},r="\u4e8b\u4ef6\u5faa\u73af",i={unversionedId:"fe-basic/javascript/basic/event-loop",id:"fe-basic/javascript/basic/event-loop",title:"\u4e8b\u4ef6\u5faa\u73af",description:"js \u5355\u7ebf\u7a0b\u6267\u884c\uff0c\u5728\u6267\u884c\u65f6\u5c06\u4e0d\u540c\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u538b\u5165\u6267\u884c\u6808\u6765\u4fdd\u8bc1\u4ee3\u7801\u6709\u5e8f\u6267\u884c\u3002",source:"@site/docs/fe-basic/javascript/basic/event-loop.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/event-loop",permalink:"/docs/fe-basic/javascript/basic/event-loop",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/event-loop.md",tags:[],version:"current",lastUpdatedAt:1695896158,formattedLastUpdatedAt:"2023\u5e749\u670828\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u9632\u6296\u548c\u8282\u6d41",permalink:"/docs/fe-basic/javascript/basic/debounce-and-throttle"},next:{title:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",permalink:"/docs/fe-basic/javascript/basic/execution-context-and-scope"}},s={},c=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af",level:2},{value:"\u6267\u884c\u6808",id:"\u6267\u884c\u6808",level:2},{value:"\u4efb\u52a1\u961f\u5217",id:"\u4efb\u52a1\u961f\u5217",level:2},{value:"\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1",id:"\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1",level:3},{value:"\u4e8b\u4ef6\u5faa\u73af\u7684\u8fc7\u7a0b",id:"\u4e8b\u4ef6\u5faa\u73af\u7684\u8fc7\u7a0b",level:3},{value:"\u5b9a\u65f6\u5668\u8bef\u5dee",id:"\u5b9a\u65f6\u5668\u8bef\u5dee",level:4},{value:"async await \u6267\u884c\u987a\u5e8f",id:"async-await-\u6267\u884c\u987a\u5e8f",level:2},{value:"NodeJS \u7684\u4e8b\u4ef6\u5faa\u73af",id:"nodejs-\u7684\u4e8b\u4ef6\u5faa\u73af",level:2},{value:"\u5f02\u6b65\u65b9\u6cd5",id:"\u5f02\u6b65\u65b9\u6cd5",level:3},{value:"\u4e8b\u4ef6\u5faa\u73af\u7684\u5404\u4e2a\u9636\u6bb5",id:"\u4e8b\u4ef6\u5faa\u73af\u7684\u5404\u4e2a\u9636\u6bb5",level:3},{value:"setTimeout &amp; setImmediate",id:"settimeout--setimmediate",level:3},{value:"process.nextTick()",id:"processnexttick",level:3},{value:"Reference",id:"reference",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8b\u4ef6\u5faa\u73af"},"\u4e8b\u4ef6\u5faa\u73af"),(0,a.kt)("p",null,"js \u5355\u7ebf\u7a0b\u6267\u884c\uff0c\u5728\u6267\u884c\u65f6\u5c06\u4e0d\u540c\u7684\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u538b\u5165\u6267\u884c\u6808\u6765\u4fdd\u8bc1\u4ee3\u7801\u6709\u5e8f\u6267\u884c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u5c5e\u4e8e\u5b8f\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u5b8c\u6240\u6709\u540c\u6b65\u4efb\u52a1\u540e\uff0c\u6267\u884c\u6808\u4e3a\u7a7a\uff0c\u67e5\u8be2\u662f\u5426\u6709\u5f02\u6b65\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u6240\u6709\u7684\u5fae\u4efb\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u5b8c\u6240\u6709\u7684\u5fae\u4efb\u52a1\u540e\uff0c\u6709\u5fc5\u8981\u4f1a\u6e32\u67d3\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u4e00\u8f6e Event Loop")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u4e8b\u4ef6\u5faa\u73af"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u7684\u5f53\u524d\u6e32\u67d3\u8fdb\u7a0b\u4e0b\u7684 JS \u5f15\u64ce\u7ebf\u7a0b\u662f\u5355\u7ebf\u7a0b\u7684\u3002\u5982\u679c\u6709\u7684\u4efb\u52a1\u8017\u65f6\u5f88\u957f\uff0c\u540e\u4e00\u4e2a\u4efb\u52a1\u5c31\u9700\u8981\u4e00\u76f4\u7b49\u5f85\uff0c\u4ea7\u751f\u963b\u585e\u3002\u6211\u4eec\u5e0c\u671b\u534f\u8c03\u4e8b\u4ef6\uff0c\u6e32\u67d3\uff0c\u7f51\u7edc\u7b49\u6267\u884c\u987a\u5e8f\u3002"),(0,a.kt)("h2",{id:"\u6267\u884c\u6808"},"\u6267\u884c\u6808"),(0,a.kt)("p",null,"\u5b58\u50a8\u51fd\u6570\u8c03\u7528\uff0c\u6808\u9876\u662f\u6700\u8fd1\u6267\u884c\u7684\u4e0a\u4e0b\u6587\uff0c\u5148\u8fdb\u540e\u51fa\u3002"),(0,a.kt)("p",null,"\u540c\u6b65\u4ee3\u7801\u7684\u6267\u884c\uff1a"),(0,a.kt)("p",null,"\u4e00\u4e2a\u65b9\u6cd5\u6267\u884c\u4f1a\u5411\u6267\u884c\u6808\u4e2d\u52a0\u5165\u8fd9\u4e2a\u65b9\u6cd5\u7684\u6267\u884c\u73af\u5883\uff08\u6267\u884c\u4e0a\u4e0b\u6587\uff09\uff0c\u5728\u8fd9\u4e2a\u6267\u884c\u73af\u5883\u4e2d\u8fd8\u53ef\u4ee5\u8c03\u7528\u5176\u4ed6\u65b9\u6cd5\uff0c\u751a\u81f3\u662f\u81ea\u5df1\uff0c\u5176\u7ed3\u679c\u4e0d\u8fc7\u662f\u5728\u6267\u884c\u6808\u4e2d\u518d\u6dfb\u52a0\u4e00\u4e2a\u6267\u884c\u73af\u5883\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u4ee5\u662f\u65e0\u9650\u8fdb\u884c\u4e0b\u53bb\u7684\uff0c\u9664\u975e\u53d1\u751f\u4e86\u6808\u6ea2\u51fa\uff0c\u5373\u8d85\u8fc7\u4e86\u6240\u80fd\u4f7f\u7528\u5185\u5b58\u7684\u6700\u5927\u503c\u3002"),(0,a.kt)("h2",{id:"\u4efb\u52a1\u961f\u5217"},"\u4efb\u52a1\u961f\u5217"),(0,a.kt)("p",null,"js \u5f15\u64ce\u9047\u5230\u4e00\u4e2a\u5f02\u6b65\u4e8b\u4ef6\u540e\u5e76\u4e0d\u4f1a\u4e00\u76f4\u7b49\u5f85\u5176\u8fd4\u56de\u7ed3\u679c\uff0c\u800c\u662f\u4f1a\u5c06\u8fd9\u4e2a\u4e8b\u4ef6\u6302\u8d77\uff0c\u7ee7\u7eed\u6267\u884c\u6267\u884c\u6808\u4e2d\u7684\u5176\u4ed6\u4efb\u52a1\u3002\u5f53\u4e00\u4e2a\u5f02\u6b65\u4e8b\u4ef6\u8fd4\u56de\u7ed3\u679c\u540e\uff0cjs \u4f1a\u5c06\u8fd9\u4e2a\u4e8b\u4ef6\u52a0\u5165\u4e0e\u5f53\u524d\u6267\u884c\u6808\u4e0d\u540c\u7684\u53e6\u4e00\u4e2a\u961f\u5217\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u4efb\u52a1\u961f\u5217\u3002"),(0,a.kt)("p",null,"\u88ab\u653e\u5165\u4efb\u52a1\u961f\u5217\u4e0d\u4f1a\u7acb\u523b\u6267\u884c\u5176\u56de\u8c03\uff0c\u800c\u662f\u7b49\u5f85\u5f53\u524d\u6267\u884c\u6808\u4e2d\u7684\u6240\u6709\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6bd5\uff0c \u4e3b\u7ebf\u7a0b\u5904\u4e8e\u95f2\u7f6e\u72b6\u6001\u65f6\uff0c\u4e3b\u7ebf\u7a0b\u4f1a\u53bb\u67e5\u627e\u4efb\u52a1\u961f\u5217\u662f\u5426\u6709\u4efb\u52a1\u3002\u5982\u679c\u6709\uff0c\u90a3\u4e48\u4e3b\u7ebf\u7a0b\u4f1a\u4ece\u4e2d\u53d6\u51fa\u6392\u5728\u7b2c\u4e00\u4f4d\u7684\u4e8b\u4ef6\uff0c\u5e76\u628a\u8fd9\u4e2a\u4e8b\u4ef6\u5bf9\u5e94\u7684\u56de\u8c03\u653e\u5165\u6267\u884c\u6808\u4e2d\uff0c\u7136\u540e\u6267\u884c\u5176\u4e2d\u7684\u540c\u6b65\u4ee3\u7801...\uff0c\u5982\u6b64\u53cd\u590d\uff0c\u8fd9\u6837\u5c31\u5f62\u6210\u4e86\u4e00\u4e2a\u65e0\u9650\u7684\u5faa\u73af\u3002 --\u4e8b\u4ef6\u5faa\u73af"),(0,a.kt)("h3",{id:"\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1"},"\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1"),(0,a.kt)("p",null,"\u4efb\u52a1\u961f\u5217\u4e0d\u6b62\u4e00\u4e2a\uff0c\u6839\u636e\u4efb\u52a1\u7684\u79cd\u7c7b\u5206\u6210\u5fae\u4efb\u52a1\u548c\u5b8f\u4efb\u52a1\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b8f\u4efb\u52a1\uff1a script \u811a\u672c\u6267\u884c\uff0csetTimeout\uff0csetInterval\uff0csetImmediate\uff0cIO \u64cd\u4f5c\uff0cUI \u6e32\u67d3\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5fae\u4efb\u52a1\uff1apromise.then(async await)\uff0cpromise.catch\uff0cnode \u7684 process.nextTick\uff0cnew MutationObserver \u7b49")),(0,a.kt)("h3",{id:"\u4e8b\u4ef6\u5faa\u73af\u7684\u8fc7\u7a0b"},"\u4e8b\u4ef6\u5faa\u73af\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u6267\u884c\u6808\u6267\u884c\u5b8c\u540c\u6b65\u4ee3\u7801\uff0c\u4f1a\u5148\u68c0\u67e5\u5fae\u4efb\u52a1\u961f\u5217\u662f\u5426\u6709\u4efb\u52a1\u4f1a\u6267\u884c\uff0c\u5982\u679c\u6ca1\u6709\u518d\u53bb\u68c0\u67e5\u5b8f\u4efb\u52a1\u961f\u5217\u3002\u5fae\u4efb\u52a1\u5728\u5f53\u524d\u5faa\u73af\u5c31\u4f1a\u6267\u884c\uff0c\u800c\u5b8f\u4efb\u52a1\u4f1a\u5230\u4e0b\u4e00\u6b21\u5faa\u73af\u3002\u5fae\u4efb\u52a1\u961f\u5217\u53ea\u6709\u4e00\u4e2a\uff0c\u800c\u5b8f\u4efb\u52a1\u961f\u5217\u53ef\u80fd\u6709\u591a\u4e2a\u3002"),(0,a.kt)("h4",{id:"\u5b9a\u65f6\u5668\u8bef\u5dee"},"\u5b9a\u65f6\u5668\u8bef\u5dee"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u5faa\u73af\u4e2d\u603b\u4f1a\u5148\u6267\u884c\u540c\u6b65\u4ee3\u7801\uff0c\u624d\u4f1a\u53bb\u4efb\u52a1\u961f\u5217\u53d6\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"\u6267\u884c setTimeout \uff0c\u6d4f\u89c8\u5668\u4f1a\u542f\u52a8\u65b0\u7684\u5b9a\u65f6\u5668\u7ebf\u7a0b\u8ba1\u65f6\uff0c\u8ba1\u65f6\u7ed3\u675f\u540e\u89e6\u53d1\u5b9a\u65f6\u5668\u4e8b\u4ef6\uff0c\u5c06\u56de\u8c03\u5b58\u5165\u5b8f\u4efb\u52a1\u3002\u5982\u679c\u6b64\u65f6\u4e3b\u7ebf\u7a0b\u540c\u6b65\u4ee3\u7801\u8017\u65f6\u957f\u4e3a\u6267\u884c\u5b8c\uff0c\u6216\u603b\u4ea7\u751f\u5fae\u4efb\u52a1\uff0c\u5219\u4f1a\u5f71\u54cd\u5b8f\u4efb\u52a1\u7684\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"async-await-\u6267\u884c\u987a\u5e8f"},"async await \u6267\u884c\u987a\u5e8f"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u6267\u884c\u987a\u5e8f\u53d1\u751f\u4e86\u6539\u53d8\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904079353708557#heading-3"},"async await \u6267\u884c\u987a\u5e8f")),(0,a.kt)("p",null,"async \u9690\u5f0f\u8fd4\u56de Promise \u4f5c\u4e3a\u7ed3\u679c\u7684\u51fd\u6570\uff0c\u90a3\u4e48\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\uff0cawait \u540e\u9762\u7684\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u65f6\uff0cawait \u4f1a\u4ea7\u751f\u4e00\u4e2a\u5fae\u4efb\u52a1(Promise.then \u662f\u5fae\u4efb\u52a1)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log('script start');\nasync function async1() {\n  await async2(); //\u540c\u6b65\n  console.log('async1 end'); //\u5fae\u4efb\u52a1\n}\nasync function async2() {\n  console.log('async2 end');\n}\nasync1();\nsetTimeout(() => {\n  console.log('timeout'); //\u5b8f\u4efb\u52a1\n}, 0);\nnew Promise((resolve) => {\n  console.log('promise'); //\u540c\u6b65\n  resolve();\n})\n  .then(function () {\n    console.log('promise1'); //\u5fae\u4efb\u52a1\n  })\n  .then(function () {\n    console.log('promise2'); //\u5fae\u4efb\u52a1\n  });\nconsole.log('script end');\n// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2022/05/11/urd1blqZXF8cTsD.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log('script start');\nasync function async1() {\n  await async2(); //\u8fd9\u91cc\u6267\u884c\u5b8c\u5c31\u8df3\u51fa\u5f53\u524d\u51fd\u6570\uff0c\u5148\u6267\u884c\u5176\u4ed6\u51fd\u6570\n  console.log('async1 end'); //\u63a7\u5236\u6743\u8f6c\u79fb\uff0c\u6700\u540e\u6ce8\u518c\u7684\u5fae\u4efb\u52a1\n}\nasync function async2() {\n  //\u91cc\u9762\u6709\u5f02\u6b65\n  console.log('async2 end');\n  return Promise.resolve().then(() => {\n    console.log('async2 end1');\n  });\n}\nasync1();\nsetTimeout(function () {\n  console.log('setTimeout');\n}, 0);\n\nnew Promise((resolve) => {\n  console.log('Promise');\n  resolve();\n})\n  .then(function () {\n    console.log('promise1');\n  })\n  .then(function () {\n    console.log('promise2');\n  });\nconsole.log('script end');\n")),(0,a.kt)("h2",{id:"nodejs-\u7684\u4e8b\u4ef6\u5faa\u73af"},"NodeJS \u7684\u4e8b\u4ef6\u5faa\u73af"),(0,a.kt)("p",null,"JS \u5f15\u64ce\u672c\u8eab\u4e0d\u5b9e\u73b0\u4e8b\u4ef6\u5faa\u73af\uff0c\u662f\u7531\u5b83\u7684\u5bbf\u4e3b\u5b9e\u73b0\u7684\uff0cNode.js \u7684 Event Loop \u662f\u57fa\u4e8e libuv\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"libuv \u662f\u4e00\u4e2a\u591a\u5e73\u53f0\u652f\u6301\u5e93\uff0c\u4e3b\u8981\u7528\u4e8e\u5f02\u6b65 I/O")),(0,a.kt)("p",null,"Node \u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af\u4e5f\u662f\u5faa\u73af\uff0b\u4efb\u52a1\u961f\u5217\u7684\u6d41\u7a0b\uff0c\u4ee5\u53ca\u5fae\u4efb\u52a1\u4f18\u5148\u4e8e\u5b8f\u4efb\u52a1\u7684\u5927\u6982\u673a\u5236\u3002\u4e0d\u8fc7\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684\u4e5f\u6709\u4e00\u4e9b\u5dee\u5f02\uff0c\u5e76\u65b0\u589e\u4e86\u4e00\u4e9b\u4efb\u52a1\u7c7b\u578b\u548c\u4efb\u52a1\u9636\u6bb5\u3002"),(0,a.kt)("h3",{id:"\u5f02\u6b65\u65b9\u6cd5"},"\u5f02\u6b65\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6 I/O \u5f02\u6b65\u52a0\u8f7d\u672c\u5730\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"setImmediate() \u5728\u67d0\u4e9b\u540c\u6b65\u4efb\u52a1\u5b8c\u6210\u540e\u7acb\u9a6c\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"process.nextTick() \u5728\u67d0\u4e9b\u540c\u6b65\u4efb\u52a1\u5b8c\u6210\u540e\u7acb\u9a6c\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"server.onclose,socket.on('close')")),(0,a.kt)("h3",{id:"\u4e8b\u4ef6\u5faa\u73af\u7684\u5404\u4e2a\u9636\u6bb5"},"\u4e8b\u4ef6\u5faa\u73af\u7684\u5404\u4e2a\u9636\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"timers \u5b9a\u65f6\u5668\u9636\u6bb5\u3002\u6267\u884c\u6240\u6709 setTimeout setInterval \u56de\u8c03\u3002"),(0,a.kt)("li",{parentName:"ul"},"pending callback \u5f85\u5b9a\u56de\u8c03\u9636\u6bb5\u3002\u6267\u884c\u5ef6\u8fdf\u5230\u4e0b\u4e00\u4e2a\u5faa\u73af\u8fed\u4ee3\u7684 I/O \u56de\u8c03\u3002"),(0,a.kt)("li",{parentName:"ul"},"poll \u8f6e\u8be2\u9636\u6bb5\u3002\u68c0\u7d22\u65b0\u7684 I/O \u4e8b\u4ef6\uff0c\u6267\u884c I/O \u56de\u8c03\u3002\u8fdb\u5165 Libuv \u5f15\u64ce\u540e\u9996\u5148\u8fdb\u5165\u6b64\u9636\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"check \u68c0\u6d4b\u9636\u6bb5\u3002 \u6267\u884c setImmediate \u56de\u8c03\u3002"),(0,a.kt)("li",{parentName:"ul"},"close callback \u5173\u95ed\u7684\u56de\u8c03\u51fd\u6570\u9636\u6bb5\u3002\u5173\u95ed\u56de\u8c03\u6267\u884c\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"socket.on('close', ...)"))),(0,a.kt)("p",null,"\u4e0a\u9762\u6bcf\u4e2a\u9636\u6bb5\u90fd\u4f1a\u6267\u884c\u5b8c\u5f53\u524d\u9636\u6bb5\u7684\u4efb\u52a1\u961f\u5217\uff0c\u7136\u540e\u6267\u884c\u5f53\u524d\u9636\u6bb5\u7684\u5fae\u4efb\u52a1\u961f\u5217\uff0c\u5f53\u524d\u9636\u6bb5\u7684\u5fae\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u624d\u4f1a\u8fdb\u5165\u4e0b\u4e00\u4e2a\u9636\u6bb5\u3002 ",(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2022/05/11/n4XrUmpL6uPckVF.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/"},"Node.js \u4e8b\u4ef6\u5faa\u73af\uff0c\u5b9a\u65f6\u5668\u548c process.nextTick() | Node.js"))),(0,a.kt)("h3",{id:"settimeout--setimmediate"},"setTimeout & setImmediate"),(0,a.kt)("p",null,"setImmediate \u88ab\u8bbe\u8ba1\u4e3a\u4e00\u65e6\u5728\u5f53\u524d\u8f6e\u8be2\u9636\u6bb5\u5b8c\u6210\uff0c\u5c31\u6267\u884c\u8fd9\u4e2a\u811a\u672c\u3002"),(0,a.kt)("h3",{id:"processnexttick"},"process.nextTick()"),(0,a.kt)("p",null,"nextTick \u6bd4\u8f83\u7279\u6b8a\uff0c\u5b83\u5b58\u6709\u81ea\u5df1\u7684\u961f\u5217\uff0c\u72ec\u7acb\u4e8e Event Loop\uff0c\u65e0\u8bba Event Loop \u5904\u4e8e\u4f55\u79cd\u9636\u6bb5\uff0c\u90fd\u4f1a\u5728\u9636\u6bb5\u7ed3\u675f\u7684\u65f6\u5019\u6e05\u7a7a nextTick \u961f\u5217\u3002"),(0,a.kt)("p",null,"process.nextTick() \u4f18\u5148\u4e8e\u5176\u4ed6\u7684\u5fae\u4efb\u52a1\uff08microtask\uff09\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904079353708557#heading-1"},"\u9762\u8bd5\u9898\uff1a\u8bf4\u8bf4\u4e8b\u4ef6\u5faa\u73af\u673a\u5236(\u6ee1\u5206\u7b54\u6848\u6765\u4e86) - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/33058983"},"\u8be6\u89e3 JavaScript \u4e2d\u7684 Event Loop\uff08\u4e8b\u4ef6\u5faa\u73af\uff09\u673a\u5236 - \u77e5\u4e4e"))))}m.isMDXComponent=!0}}]);