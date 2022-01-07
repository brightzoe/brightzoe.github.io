"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[922],{4137:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return t?a.createElement(d,o(o({ref:n},s),{},{components:t})):a.createElement(d,o({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8823:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(4137)),o=["components"],i={},c="\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",p={unversionedId:"javascript/basic/execution-context-and-scope",id:"javascript/basic/execution-context-and-scope",isDocsHomePage:!1,title:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",description:"\u6458\u8981\uff08\u603b\u7ed3\uff09\uff1a",source:"@site/docs/javascript/basic/execution-context-and-scope.md",sourceDirName:"javascript/basic",slug:"/javascript/basic/execution-context-and-scope",permalink:"/docs/javascript/basic/execution-context-and-scope",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/javascript/basic/execution-context-and-scope.md",tags:[],version:"current",lastUpdatedAt:1641530150,formattedLastUpdatedAt:"1/7/2022",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/javascript/basic/data-types"},next:{title:"\u53c2\u6570\u4f20\u9012",permalink:"/docs/javascript/basic/parameter-passing"}},s=[{value:"\u6267\u884c\u4e0a\u4e0b\u6587",id:"\u6267\u884c\u4e0a\u4e0b\u6587",children:[]},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",children:[{value:"\u4f5c\u7528\u57df\u5d4c\u5957",id:"\u4f5c\u7528\u57df\u5d4c\u5957",children:[]},{value:"\u5757\u7ea7\u4f5c\u7528\u57df ES6",id:"\u5757\u7ea7\u4f5c\u7528\u57df-es6",children:[]},{value:"\u5982\u4f55\u521b\u5efa/\u6539\u53d8\u4f5c\u7528\u57df",id:"\u5982\u4f55\u521b\u5efa\u6539\u53d8\u4f5c\u7528\u57df",children:[]},{value:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f",id:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f",children:[]}]},{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",children:[{value:"var,let,const",id:"varletconst",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df"},"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u6458\u8981\uff08\u603b\u7ed3\uff09\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"javascript \u8bed\u8a00\u5c42\u9762\u53ea\u539f\u751f\u652f\u6301\u4e24\u79cd\u4f5c\u7528\u57df\u7c7b\u578b\uff1a\u5168\u5c40\u4f5c\u7528\u57df \u548c \u51fd\u6570\u4f5c\u7528\u57df \u3002\u5168\u5c40\u4f5c\u7528\u57df\u7a0b\u5e8f\u8fd0\u884c\u5c31\u6709\uff0c\u51fd\u6570\u4f5c\u7528\u57df\u53ea\u6709\u5b9a\u4e49\u51fd\u6570\u7684\u65f6\u5019\u624d\u6709\uff0c\u5b83\u4eec\u4e4b\u95f4\u662f\u5305\u542b\u7684\u5173\u7cfb\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f5c\u7528\u57df\u4e4b\u95f4\u662f\u53ef\u4ee5\u5d4c\u5957\u7684\uff0c\u6211\u4eec\u628a\u8fd9\u79cd\u5d4c\u5957\u5173\u7cfb\u79f0\u4e3a \u4f5c\u7528\u57df\u94fe\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u53ef\u6267\u884c\u4ee3\u7801\u5728\u4f5c\u7528\u57df\u4e2d\u67e5\u8be2\u53d8\u91cf\u65f6\uff0c\u53ea\u80fd\u67e5\u8be2 \u672c\u5730\u4f5c\u7528\u57df \u53ca \u4e0a\u5c42\u4f5c\u7528\u57df\uff0c\u4e0d\u80fd\u67e5\u627e\u5185\u90e8\u7684\u51fd\u6570\u4f5c\u7528\u57df\u3002JS \u5f15\u64ce\u641c\u7d22\u53d8\u91cf\u65f6\uff0c\u4f1a\u5148\u8be2\u95ee\u672c\u5730\u4f5c\u7528\u57df\uff0c\u627e\u5230\u5373\u8fd4\u56de\uff0c\u627e\u4e0d\u5230\u518d\u53bb\u8be2\u95ee\u4e0a\u5c42\u4f5c\u7528\u57df...\u5c42\u5c42\u5f80\u4e0a\uff0c\u76f4\u5230\u5168\u5c40\u4f5c\u7528\u57df\u3002"),(0,l.kt)("li",{parentName:"ol"},"javascript \u4e2d\u4f7f\u7528\u7684\u662f \u201c\u8bcd\u6cd5\u4f5c\u7528\u57df\u201d\uff08\u9759\u6001\u4f5c\u7528\u57df\uff09\uff0c\u56e0\u6b64\u51fd\u6570\u4f5c\u7528\u57df\u7684\u8303\u56f4\u5728\u51fd\u6570\u5b9a\u4e49\u65f6\u5c31\u5df2\u7ecf\u88ab\u786e\u5b9a\uff0c\u548c\u51fd\u6570\u5728\u54ea\u6267\u884c\u6ca1\u6709\u5173\u7cfb\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u6743\u8bbf\u95ee\u53e6\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u53d8\u91cf\u7684\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e3a \u95ed\u5305\u3002\u95ed\u5305\u7684\u672c\u8d28\u662f\u5229\u7528\u4e86\u4f5c\u7528\u57df\u7684\u673a\u5236\uff0c\u6765\u8fbe\u5230\u5916\u90e8\u4f5c\u7528\u57df\u8bbf\u95ee\u5185\u90e8\u4f5c\u7528\u57df\u7684\u76ee\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u95ed\u5305\u7684\u4f7f\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u7136\u800c\u8fc7\u5ea6\u4f7f\u7528\u4f1a\u5bfc\u81f4\u95ed\u5305\u5185\u7684\u53d8\u91cf\u6240\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u65e0\u6cd5\u91ca\u653e\uff0c\u5e26\u6765 \u5185\u5b58\u6cc4\u9732 \u7684\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u4e8e chrome \u5f00\u53d1\u8005\u5de5\u5177\u67e5\u627e\u4ee3\u7801\u4e2d\u5bfc\u81f4\u4e86\u5185\u5b58\u6cc4\u9732\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u907f\u514d\u5185\u5b58\u6cc4\u9732\u7684\u51e0\u79cd\u65b9\u6cd5\uff1a\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\u3001\u8c28\u614e\u5730\u4e3a DOM \u7ed1\u5b9a\u4e8b\u4ef6\u3001\u907f\u514d\u8fc7\u5ea6\u4f7f\u7528\u95ed\u5305\u3002\u6700\u91cd\u8981\u7684\uff0c\u8fd8\u662f\u4ee3\u7801\u89c4\u8303\u3002")),(0,l.kt)("p",null,"\u6267\u884c\u8bed\u53e5\u524d\u521b\u5efa\u7684\u73af\u5883\u53ef\u4ee5\u8fd9\u6837\u7c7b\u6bd4\uff1a"),(0,l.kt)("img",{src:"https://i.loli.net/2021/09/26/kFej7CAxVTsW42v.png",width:"80%"}),(0,l.kt)("h2",{id:"\u6267\u884c\u4e0a\u4e0b\u6587"},"\u6267\u884c\u4e0a\u4e0b\u6587"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"var \u548c function \u58f0\u660e\u521b\u5efa\u7684\u53d8\u91cf\u548c\u51fd\u6570\u5728\u5168\u5c40\u5bf9\u8c61\u4e2d\uff08\u6d4f\u89c8\u5668\u73af\u5883\u662f window \u5bf9\u8c61\uff09\uff0c\u800c let,const,class \u58f0\u660e\u7684\u53d8\u91cf\u521b\u5efa\u5728\u5168\u5c40 scope \u4e2d\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let a = "a";\nconsole.log(a);\nconsole.log(window.a); //\u6ca1\u6709\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var a = "a";\nconsole.log(a);\nconsole.log(window.a); //a\n')),(0,l.kt)("p",null,"\u521b\u5efa\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/09/26/Rr63yYwAt4DMJx2.png",alt:null})),(0,l.kt)("p",null,"\u6682\u65f6\u6027\u6b7b\u533a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/09/26/tRu9X2mKk4HpFNq.png",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var a = \"123\";\nfunction foo() {\n    console.log(a);\n    let a;\n}\nfoo(); //Uncaught ReferenceError: Cannot access 'a' before initialization\n")),(0,l.kt)("h2",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u4f5c\u7528\u57df\uff1a\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587\u6216\u5f53\u524d\u4e0a\u4e0b\u6587\u7684\u8bcd\u6cd5\u73af\u5883\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u5168\u5c40\u4f5c\u7528\u57df\uff1a \u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u5168\u5c40\u4f5c\u7528\u57df\u4e3a\u7a0b\u5e8f\u7684\u6700\u5916\u5c42\u4f5c\u7528\u57df\uff0c\u4e00\u76f4\u5b58\u5728\u3002\n\n\u51fd\u6570\u4f5c\u7528\u57df\uff1a \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u53ea\u6709\u51fd\u6570\u88ab\u5b9a\u4e49\u65f6\u624d\u4f1a\u521b\u5efa\uff0c\u5305\u542b\u5728\u7236\u7ea7\u51fd\u6570\u4f5c\u7528\u57df / \u5168\u5c40\u4f5c\u7528\u57df\u5185\u3002\n")),(0,l.kt)("p",null,"\u51fd\u6570\u8c03\u7528\u65f6\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff1a \u51fd\u6570\u5728\u54ea\u91cc\u521b\u5efa\uff0c\u4ed6\u5c31\u5904\u4e8e\u54ea\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("p",null,"\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5728\u51fd\u6570\u521b\u5efa\u65f6\u51b3\u5b9a(\u8bcd\u6cd5\u4f5c\u7528\u57df):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var a = 2;\nfunction foo() {\n    console.log(a);\n}\n\nfunction bar() {\n    var a = 3;\n    foo();\n}\n\nbar(); //2 \u6267\u884c\u7684foo \u4f5c\u7528\u57df\u5728\u5168\u5c40\uff0c\u5219a \u4e3a\u5168\u5c40\u7684a\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bcd\u6cd5\u4f5c\u7528\u57df\uff08Lexical Scopes\uff09\u662f javascript \u4e2d\u4f7f\u7528\u7684\u4f5c\u7528\u57df\u7c7b\u578b\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df \u4e5f\u53ef\u4ee5\u88ab\u53eb\u505a \u9759\u6001\u4f5c\u7528\u57df\uff0c\u4e0e\u4e4b\u76f8\u5bf9\u7684\u8fd8\u6709 \u52a8\u6001\u4f5c\u7528\u57df\u3002 \u610f\u5473\u7740\u51fd\u6570\u88ab\u5b9a\u4e49\u7684\u65f6\u5019\uff0c\u5b83\u7684\u4f5c\u7528\u57df\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u548c\u62ff\u5230\u54ea\u91cc\u6267\u884c\u6ca1\u6709\u5173\u7cfb\uff0c\u56e0\u6b64\u8bcd\u6cd5\u4f5c\u7528\u57df\u4e5f\u88ab\u79f0\u4e3a \u201c\u9759\u6001\u4f5c\u7528\u57df\u201d\u3002")),(0,l.kt)("h3",{id:"\u4f5c\u7528\u57df\u5d4c\u5957"},"\u4f5c\u7528\u57df\u5d4c\u5957"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/10/22/YT4vOU6dL9QgCi3.png",alt:null}),"\n\u7528\u56fe\u7247\u8868\u793a\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e00\u5171\u6709\u4e09\u5c42\u4f5c\u7528\u57df\u5d4c\u5957\uff0c\u5206\u522b\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5168\u5c40\u4f5c\u7528\u57df"),(0,l.kt)("li",{parentName:"ol"},"foo \u4f5c\u7528\u57df"),(0,l.kt)("li",{parentName:"ol"},"bar \u4f5c\u7528\u57df")),(0,l.kt)("p",null,"\u5f53\u53ef\u6267\u884c\u4ee3\u7801\u5185\u90e8\u8bbf\u95ee\u53d8\u91cf\u65f6\uff0c\u4f1a\u5148\u67e5\u627e\u672c\u5730\u4f5c\u7528\u57df\uff0c\u5982\u679c\u627e\u5230\u76ee\u6807\u53d8\u91cf\u5373\u8fd4\u56de\uff0c\u5426\u5219\u4f1a\u53bb\u7236\u7ea7\u4f5c\u7528\u57df\u7ee7\u7eed\u67e5\u627e...\u4e00\u76f4\u627e\u5230\u5168\u5c40\u4f5c\u7528\u57df\u3002\u6211\u4eec\u628a\u8fd9\u79cd\u4f5c\u7528\u57df\u7684\u5d4c\u5957\u673a\u5236\uff0c\u79f0\u4e3a \u4f5c\u7528\u57df\u94fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,l.kt)("h3",{id:"\u5757\u7ea7\u4f5c\u7528\u57df-es6"},"\u5757\u7ea7\u4f5c\u7528\u57df ES6"),(0,l.kt)("p",null,"\u5728 ES5 \u5373\u4e4b\u524d\u5e76\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df\u7684\u6982\u5ff5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n    var a = 1;\n}\n\nconsole.log(a); // \u7ed3\u679c??? 1\n")),(0,l.kt)("p",null,"ES6 \u4f7f\u7528 let \u548c const \u4ee3\u66ff var \u5173\u952e\u5b57\uff0c\u6765\u201c\u521b\u5efa\u5757\u7ea7\u4f5c\u7528\u57df\u201d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n    let a = 1;\n}\n\nconsole.log(a); // ReferenceError\n")),(0,l.kt)("p",null,"ES6 \u65b0\u589e\u7684 let \u5173\u952e\u5b57\u8ddf var \u5f88\u76f8\u4f3c\uff0c\u4f46\u5b83\u7684\u4f5c\u7528\u57df\u662f\u5757\u7ea7\u7684\uff0c\u8fd9\u4e5f\u662f JavaScript \u4e2d\u7684\u65b0\u6982\u5ff5\u3002\u5757\u7ea7\u4f5c\u7528\u57df\u7531\u6700\u8fd1\u7684\u4e00\u5bf9\u5305\u542b\u82b1\u62ec\u53f7{}\u754c\u5b9a\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cif \u5757\u3001while \u5757\u3001function \u5757\uff0c\u751a\u81f3\u8fde\u5355\u72ec\u7684\u5757\u4e5f\u662f let \u58f0\u660e\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n    let a;\n}\nconsole.log(a); // ReferenceError: a\u6ca1\u6709\u5b9a\u4e49\n\nwhile (true) {\n    let b;\n}\nconsole.log(b); // ReferenceError: b\u6ca1\u6709\u5b9a\u4e49\n\nfunction foo() {\n    let c;\n}\nconsole.log(c); // ReferenceError: c\u6ca1\u6709\u5b9a\u4e49\n// \u8fd9\u6ca1\u4ec0\u4e48\u53ef\u5947\u602a\u7684\n// var\u58f0\u660e\u4e5f\u4f1a\u5bfc\u81f4\u62a5\u9519\n// \u8fd9\u4e0d\u662f\u5bf9\u8c61\u5b57\u9762\u91cf\uff0c\u800c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5757\n// JavaScript\u89e3\u91ca\u5668\u4f1a\u6839\u636e\u5176\u4e2d\u5185\u5bb9\u8bc6\u522b\u51fa\u5b83\u6765\n\n{\n    let d;\n} //\u5355\u72ec\u7684\u5757\u4e5f\u662f let \u58f0\u660e\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u3002\nconsole.log(d); // ReferenceError: d\u6ca1\u6709\u5b9a\u4e49\n")),(0,l.kt)("h4",{id:"iife"},"IIFE"),(0,l.kt)("p",null,"ES5 \u4f7f\u7528 IIFE \u53ef\u4ee5\u6a21\u62df\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5373\u5728\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f\u5185\u90e8\u58f0\u660e\u53d8\u91cf\uff0c\u7136\u540e\u7acb\u5373\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002\u8fd9\u6837\u4f4d\u4e8e\u51fd\u6570\u4f53\u4f5c\u7528\u57df\u7684\u53d8\u91cf\u5c31\u50cf\u662f\u5728\u5757\u7ea7\u4f5c\u7528\u57df\u4e2d\u4e00\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// module1.js\n(function () {\n    //\u5185\u5d4c\u5757\u7ea7\u4f5c\u7528\u57df\n    var a = 1;\n    console.log(a);\n})();\n\n// module2.js\n(function () {\n    var a = 2;\n    console.log(a);\n})();\n")),(0,l.kt)("p",null,"\u6a21\u62df\u5757\u7ea7\u4f5c\u7528\u57df\u9501\u5b9a\u503c\uff08\u95ed\u5305+IIFE\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let divs = document.querySelectorAll("div");\nfor (var i = 0; i < divs.length; i++) {\n    divs[i].addEventListener(\n        "click",\n        (function (frozenCounter) {\n            return function () {\n                console.log(frozenCounter);\n            };\n        })(i)\n    );\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5ef6\u7533\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},"\u95ed\u5305 - JavaScript | MDN")," \u63d0\u4f9b\u4e86\u66f4\u591a\u89e3\u51b3\u904d\u5386\u95ee\u9898\u7684\u65b9\u5f0f\u3002\n\u53ef\u4ee5\u4f7f\u7528 forEach")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u901a\u8fc7 IIFE \u5b9e\u73b0 UMD \u6a21\u5757\u5316")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 IIFE \u5b8c\u6210\u5c01\u88c5\uff0c\u89e3\u51b3\u4e86\u6a21\u5757\u540d\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\u7684\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8d4b\u4e88\u9009\u62e9\u7684\u6743\u529b\uff0c\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6761\u4ef6\u9009\u62e9\u4e0d\u540c\u7684\u6267\u884c")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// UMD \u6a21\u5757\u5316\n(function (root, factory) {\n    if (typeof define === "function" && define.amd) {\n        // AMD\n        define(["jquery"], factory);\n    } else if (typeof exports === "object") {\n        // Node, CommonJS-like\n        module.exports = factory(require("jquery"));\n    } else {\n        // Browser globals (root is window)\n        root.returnExports = factory(root.jQuery);\n    }\n})(this, function ($) {\n    // methods\n    function myFunc() {}\n\n    // exposed public method\n    return myFunc;\n});\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://weread.qq.com/web/reader/751326d0720befab7514782kfe932230253fe9fc289c8a3"},"10.15 \u7acb\u5373\u8c03\u7528\u8868\u8fbe\u5f0f JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66")," > ",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-8"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1"))),(0,l.kt)("h3",{id:"\u5982\u4f55\u521b\u5efa\u6539\u53d8\u4f5c\u7528\u57df"},"\u5982\u4f55\u521b\u5efa/\u6539\u53d8\u4f5c\u7528\u57df"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u521b\u5efa\u51fd\u6570\u4f5c\u7528\u57df")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {}\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u4f7f\u7528 let/const")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5185\u5d4c\u5757\u7ea7\u4f5c\u7528\u57df\n{\n    let i;\n    for (i = 0; i < count; i++) {\n        console.log(i);\n    }\n}\nconsole.log(i); // \u629b\u51fa\u9519\u8bef\n\n// \u5faa\u73af\u7684\u5757\u7ea7\u4f5c\u7528\u57df\nfor (let i = 0; i < count; i++) {\n    console.log(i);\n}\nconsole.log(i); // \u629b\u51fa\u9519\u8bef\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 eval/with \u4fee\u6539\u4f5c\u7528\u57df\uff0c\u4e0d\u63a8\u8350\u3002")),(0,l.kt)("h3",{id:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f"},"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u6a21\u5757\u5316\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-8"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,l.kt)("h2",{id:"\u4e00\u4e9b\u95ee\u9898"},"\u4e00\u4e9b\u95ee\u9898"),(0,l.kt)("p",null,"\u5bf9\u8c61\u91cc\u5199\u51fd\u6570,\u5bf9\u8c61\u7684 fn \u5c5e\u6027\u6307\u5411\u8fd9\u4e2a\u51fd\u6570,\u51fd\u6570\u5e76\u4e0d\u5c5e\u4e8e\u8fd9\u4e2a\u5bf9\u8c61,\u76f8\u5bf9\u72ec\u7acb."),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u662f\u5168\u5c40\u7684,\u5bf9\u8c61\u4e0d\u662f\u8bed\u53e5\u5757,\u4e0d\u4f1a\u4ea7\u751f\u4f5c\u7528\u57df."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n    val: 3,\n    fn: function () {\n        return this.val;\n    },\n};\nobj.fn(); //this=>obj, 3\n")),(0,l.kt)("h3",{id:"varletconst"},"var,let,const"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"let \u4e0e var")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"let \u4e0e var \u7684\u53e6\u4e00\u4e2a\u4e0d\u540c\u4e4b\u5904\u662f\u5728\u540c\u4e00\u4f5c\u7528\u57df\u5185\u4e0d\u80fd\u58f0\u660e\u4e24\u6b21\u3002\u91cd\u590d\u7684 var \u58f0\u660e\u4f1a\u88ab\u5ffd\u7565\uff0c\u800c\u91cd\u590d\u7684 let \u58f0\u660e\u4f1a\u629b\u51fa SyntaxError\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"let \u7684\u884c\u4e3a\u975e\u5e38\u9002\u5408\u5728\u5faa\u73af\u4e2d\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf\u3002",(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 var \u58f0\u660e\u7684\u8fed\u4ee3\u53d8\u91cf\u4f1a\u6cc4\u6f0f\u5230\u5faa\u73af\u5916\u90e8"),"\uff0c\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u907f\u514d."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (var i = 0; i < 10; ++i) {}\nconsole.log(i); // 10\n\nfor (let j = 0; j < 10; ++j) {}\nconsole.log(j); // ReferenceError: j\u6ca1\u6709\u5b9a\u4e49\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"let \u5728 JavaScript \u8fd0\u884c\u65f6\u4e2d\u4e5f\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u7531\u4e8e\u201c\u6682\u65f6\u6027\u6b7b\u533a\u201d\uff08temporal dead zone\uff09\u7684\u7f18\u6545\uff0c\u5b9e\u9645\u4e0a\u4e0d\u80fd\u5728\u58f0\u660e\u4e4b\u524d\u4f7f\u7528 let \u53d8\u91cf\u3002\u56e0\u6b64\uff0c\u4ece\u5199 JavaScript \u4ee3\u7801\u7684\u89d2\u5ea6\u8bf4\uff0clet \u7684\u63d0\u5347\u8ddf var \u662f\u4e0d\u4e00\u6837\u7684\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"const")),(0,l.kt)("p",null,"\u4f7f\u7528 const \u58f0\u660e\u7684\u53d8\u91cf\u5fc5\u987b\u540c\u65f6\u521d\u59cb\u5316\u4e3a\u67d0\u4e2a\u503c\u3002\u4e00\u7ecf\u58f0\u660e\uff0c\u5728\u5176\u751f\u547d\u5468\u671f\u7684\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u80fd\u518d\u91cd\u65b0\u8d4b\u4e88\u65b0\u503c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const a; //Uncaught SyntaxError: Missing initializer in const declaration,\u5b9a\u4e49\u65f6\u6ca1\u6709\u521d\u59cb\u5316\n")),(0,l.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u8fd9\u70b9\uff0c\u5176\u4ed6\u4e0e let \u76f8\u540c\u3002"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1wD4y1D7Pp?from=search&seid=2212534765957722610"},"js \u6267\u884c\u4e0a\u4e0b\u6587\u4e0e\u4f5c\u7528\u57df","_","\u54d4\u54e9\u54d4\u54e9","_","bilibili")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://weread.qq.com/web/reader/751326d0720befab7514782k182326e0221182be0c5ca23"},"4.2 \u6267\u884c\u4e0a\u4e0b\u6587\u4e0e\u4f5c\u7528\u57df JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66"))))}m.isMDXComponent=!0}}]);