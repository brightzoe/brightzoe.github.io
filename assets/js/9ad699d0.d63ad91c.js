"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3233],{4137:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(n),d=o,m=k["".concat(i,".").concat(d)]||k[d]||u[d]||a;return n?t.createElement(m,s(s({ref:r},p),{},{components:n})):t.createElement(m,s({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=k;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4507:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],l={},i="Web workers",c={unversionedId:"javascript/web-workers",id:"javascript/web-workers",title:"Web workers",description:"\u5141\u8bb8\u4e00\u6bb5 JavaScript \u7a0b\u5e8f\u8fd0\u884c\u5728\u4e3b\u7ebf\u7a0b\u4e4b\u5916\u7684\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\uff0c\u72ec\u7acb\u4e8e\u4e3b\u7ebf\u7a0b\uff0c\u8fdb\u884c\u5927\u91cf\u7684\u8ba1\u7b97\u6d3b\u52a8\uff0c\u4e0d\u5f71\u54cd\u4e3b\u7ebf\u7a0b\u7684 UI \u6e32\u67d3\u3002\u8ba1\u7b97\u7ed3\u675f\u4e4b\u540e\u53ef\u4ee5\u628a\u7ed3\u679c\u53d1\u9001\u7ed9\u4e3b\u7ebf\u7a0b\u3002\u7ec6\u5206\u4e3a \u666e\u901a\u7684 Web Worker \uff0cShared Worker ,Service Worker \u3002",source:"@site/docs/javascript/web-workers.md",sourceDirName:"javascript",slug:"/javascript/web-workers",permalink:"/docs/javascript/web-workers",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/javascript/web-workers.md",tags:[],version:"current",lastUpdatedAt:1655294092,formattedLastUpdatedAt:"6/15/2022",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u7f51\u7edc",permalink:"/docs/javascript/network"}},p={},u=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981",id:"\u4e3a\u4ec0\u4e48\u9700\u8981",level:2},{value:"\u666e\u901a Web Worker",id:"\u666e\u901a-web-worker",level:2},{value:"SharedWorker",id:"sharedworker",level:3},{value:"ServiceWorker",id:"serviceworker",level:2},{value:"Reference",id:"reference",level:2}],k={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},k,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-workers"},"Web workers"),(0,a.kt)("p",null,"\u5141\u8bb8\u4e00\u6bb5 JavaScript \u7a0b\u5e8f\u8fd0\u884c\u5728\u4e3b\u7ebf\u7a0b\u4e4b\u5916\u7684\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\uff0c\u72ec\u7acb\u4e8e\u4e3b\u7ebf\u7a0b\uff0c\u8fdb\u884c\u5927\u91cf\u7684\u8ba1\u7b97\u6d3b\u52a8\uff0c\u4e0d\u5f71\u54cd\u4e3b\u7ebf\u7a0b\u7684 UI \u6e32\u67d3\u3002\u8ba1\u7b97\u7ed3\u675f\u4e4b\u540e\u53ef\u4ee5\u628a\u7ed3\u679c\u53d1\u9001\u7ed9\u4e3b\u7ebf\u7a0b\u3002\u7ec6\u5206\u4e3a \u666e\u901a\u7684 Web Worker \uff0cShared Worker ,Service Worker \u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981"},"\u4e3a\u4ec0\u4e48\u9700\u8981"),(0,a.kt)("p",null,"\u9762\u4e34\u5927\u91cf\u8ba1\u7b97\u7684\u573a\u666f\uff0c\u6bd4\u5982\u89c6\u9891\u89e3\u7801\u7b49\uff0c\u5728\u4e3b\u7ebf\u7a0b\u64cd\u4f5c\u4f1a\u963b\u585e UI \u6e32\u67d3\uff0c\u751a\u81f3\u5bfc\u81f4\u6d4f\u89c8\u5668\u5361\u6b7b\u3002"),(0,a.kt)("h2",{id:"\u666e\u901a-web-worker"},"\u666e\u901a Web Worker"),(0,a.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//index.js\nconst worker = new Worker("./worker.js"); //\u5fc5\u987b\u4e0e\u521b\u5efa\u8005\u540c\u6e90\nworker.postMessage({ type: "start", payload: { count: 666 } }); // \u53d1\u9001\u4fe1\u606f\u7ed9worker\nworker.onmessage = function (messageEvent) {\n  //\u76d1\u542c worker message\n  console.log(messageEvent);\n};\nworker.onmessageerror = function (messageEvent) {\n  //\u76d1\u542cworker \u9519\u8bef\u4fe1\u606f\n  console.log(messageEvent);\n};\nworker.terminate(); //\u7ec8\u6b62 Worker \u7684\u8fd0\u884c\n\n//worker.js\nimportScripts("./foo.js"); //\u5f15\u5165\u811a\u672c\uff0c\u53ea\u80fd\u662f\u540c\u6e90\u7684\nself.onmessage = (messageEvent) => {\n  const { type, payload } = messageEvent.data;\n  switch (type) {\n    case "start":\n      // \u901a\u8fc7 type \u53bb\u533a\u5206\u4e0d\u540c\u7684\u4e1a\u52a1\u903b\u8f91\uff0cpayload \u662f\u4f20\u8fc7\u6765\u7684\u6570\u636e\n      const result = 0;\n      // \u901a\u8fc7\u4e00\u7cfb\u5217\u5904\u7406\u4e4b\u540e\uff0c\u628a\u6700\u7ec8\u7684\u7ed3\u679c\u53d1\u9001\u7ed9\u4e3b\u7ebf\u7a0b\n      this.postMessage(result);\n      break;\n  }\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f15\u5165\u7684 worker \u6587\u4ef6\u5fc5\u987b\u540c\u6e90\uff0c\u89e3\u51b3\u8fd9\u4e2a\u9650\u5236\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa Blob URL \u6765\u89e3\u51b3\u3002")),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"worker \u7684 \u4f5c\u7528\u57df\u4e0e\u4e3b\u7ebf\u7a0b\u7684 Window \u76f8\u4e92\u72ec\u7acb\uff0c\u4e14 worker \u4e2d\u83b7\u53d6\u4e0d\u5230 dom \u5143\u7d20\uff0c\u5168\u5c40\u5bf9\u8c61\u662f self")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\u5224\u65ad\uff1awindow.Worker"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u8bbf\u95ee sessionStorage\uff0clocalStorage")),(0,a.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u89c6\u9891\u7f51\u7ad9\uff0c\u89c6\u9891\u89e3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u5927\u91cf\u8ba1\u7b97\uff0c\u6bd4\u5982\u8bbe\u8ba1\u76f8\u5173\u7684\u7f51\u7ad9\uff0c\u89e3\u6790 sketch \u6587\u4ef6")),(0,a.kt)("h3",{id:"sharedworker"},"SharedWorker"),(0,a.kt)("p",null,"\u5171\u4eab worker\uff0c\u53ef\u4ee5\u88ab\u591a\u4e2a\u6d4f\u89c8\u5668\u73af\u5883\u8bbf\u95ee\uff0c\u53ea\u8981\u9875\u9762\u540c\u57df\u5373\u53ef\uff0c\u4e3a\u8de8\u6d4f\u89c8\u5668 tab \u5171\u4eab\u6570\u636e\u63d0\u4f9b\u4e86\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//index.js\nconst sharedWorker = new SharedWorker("./sharedWorker.js"); // \u53c2\u6570\u662furl\uff0c\u8fd9\u4e2aurl\u5fc5\u987b\u4e0e\u521b\u5efa\u8005\u540c\u6e90\nsharedWorker.port.start(); //\u4e3b\u7ebf\u7a0b\u901a\u8fc7\u6b64\u65b9\u6cd5\u5f00\u542f SharedWorker \u4e4b\u95f4\u7684\u901a\u4fe1\nsharedWorker.port.postMessage({ type: "increase", payload: { count: 666 } }); //\u4e3b\u7ebf\u7a0b\u7ed9worker \u53d1\u9001\u4fe1\u606f\n\nsharedWorker.port.onmessage = function (messageEvent) {\n  console.log(messageEvent); //SharedWorker \u7684\u65b9\u6cd5\u90fd\u5728 port \u4e0a\n};\n\nsharedWorker.port.close(); //\u4e3b\u7ebf\u7a0b\u901a\u8fc7\u6b64\u65b9\u6cd5\u5173\u95ed SharedWorker\n\n// shareWorker.js\nlet count = 666;\nimportScripts("./foo.js"); //\u5f15\u5165\u811a\u672c\uff0c\u53ea\u80fd\u662f\u540c\u6e90\u7684\n\nport.onmessage = (messageEvent) => {\n  const { type, payload } = messageEvent.data;\n\n  switch (type) {\n    case "increase":\n      port.postMessage(++count);\n      break;\n    case "decrease":\n      port.postMessage(--count);\n      break;\n  }\n};\n')),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SharedWorker \u7684\u4f5c\u7528\u57df\u662f\u516c\u7528\u7684\u3002")),(0,a.kt)("h2",{id:"serviceworker"},"ServiceWorker"),(0,a.kt)("p",null,"\u4e00\u822c\u7528\u6765\u63d0\u9ad8\u79bb\u7ebf\u4f53\u9a8c\uff0c\u62e6\u622a\u7f51\u7edc\u8bf7\u6c42\uff0c\u6839\u636e\u7f51\u7edc\u662f\u5426\u53ef\u7528\u6765\u91c7\u53d6\u9002\u5f53\u7684\u624b\u6bb5\u6216\u8005\u66f4\u65b0\u6765\u81ea\u670d\u52a1\u5668\u7684\u8d44\u6e90\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// index.js\n//\u6ce8\u518c\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", function () {\n    navigator.serviceWorker\n      .register("./serviceWorker.js", { scope: "/page/" })\n      .then(\n        function (registration) {\n          console.log(\n            "ServiceWorker registration successful with scope: ",\n            registration.scope\n          );\n        },\n        function (err) {\n          console.log("ServiceWorker registration failed: ", err);\n        }\n      );\n  });\n}\n\n// serviceWorker.js\nconst CACHE_NAME = "cache-v1";\n// \u9700\u8981\u7f13\u5b58\u7684\u6587\u4ef6\nconst urlsToCache = [\n  "/style/main.css",\n  "/constant.js",\n  "/serviceWorker.html",\n  "/page/index.html",\n  "/serviceWorker.js",\n  "/image/131.png",\n];\nself.oninstall = (event) => {\n  event.waitUntil(\n    caches\n      .open(CACHE_NAME) // \u8fd9\u8fd4\u56de\u7684\u662fpromise\n      .then(function (cache) {\n        return cache.addAll(urlsToCache); // \u8fd9\u8fd4\u56de\u7684\u662fpromise\n      })\n  );\n};\n')),(0,a.kt)("p",null,"\u7279\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5728 worker \u4e0a\u4e0b\u6587\uff0c\u4e0d\u80fd\u8bbf\u95ee DOM"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u5f02\u6b65\uff0c\u4e0d\u80fd\u4f7f\u7528\u540c\u6b65 api \u6bd4\u5982 xhr \uff0clocalStorage"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u7531 HTTPS \u627f\u8f7d\u3002\u4fee\u6539\u7f51\u7edc\u8bf7\u6c42\u7684\u80fd\u529b\u66b4\u9732\u7ed9\u4e2d\u95f4\u4eba\u653b\u51fb\u5f88\u5371\u9669")),(0,a.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540e\u53f0\u6570\u636e\u540c\u6b65"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u4e2d\u63a5\u53d7\u8ba1\u7b97\u6210\u672c\u9ad8\u7684\u6570\u636e\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u53f0\u670d\u52a1\u94a9\u5b50"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u589e\u5f3a\uff0c\u6bd4\u5982\u9884\u53d6\u7528\u6237\u53ef\u80fd\u9700\u8981\u7684\u8d44\u6e90\uff0c\u6bd4\u5982\u76f8\u518c\u540e\u9762\u7684\u5f88\u591a\u56fe\u7247"),(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u8d44\u6e90\uff0c\u52a0\u5feb\u6e32\u67d3\u901f\u5ea6")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7091068088975622175#heading-2"},"Web Worker - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6906714992071213064#heading-5"},"\u524d\u7aef\u9b54\u6cd5\u5802\uff1a\u53ef\u80fd\u662f\u4f60\u89c1\u8fc7\u6700\u8be6\u7ec6\u7684 WebWorker \u5b9e\u7528\u6307\u5357 - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904198639714311#heading-3"},"\u4f60\u4e0d\u77e5\u9053\u7684 Web Workers \uff08\u4e0a\uff09[7.8K \u5b57 | \u591a\u56fe\u9884\u8b66] - \u6398\u91d1"))))}d.isMDXComponent=!0}}]);