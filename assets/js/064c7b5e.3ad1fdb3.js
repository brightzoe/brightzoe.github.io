"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3608],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,c(c({ref:n},p),{},{components:t})):r.createElement(d,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7552:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),c=["components"],i={},u="\u95ed\u5305",l={unversionedId:"javascript/basic/closure",id:"javascript/basic/closure",isDocsHomePage:!1,title:"\u95ed\u5305",description:"\u4ec0\u4e48\u662f\u95ed\u5305",source:"@site/docs/javascript/basic/closure.md",sourceDirName:"javascript/basic",slug:"/javascript/basic/closure",permalink:"/docs/javascript/basic/closure",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/javascript/basic/closure.md",tags:[],version:"current",lastUpdatedAt:1641530150,formattedLastUpdatedAt:"1/7/2022",frontMatter:{},sidebar:"JavaScript",next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/javascript/basic/data-types"}},p=[{value:"\u4ec0\u4e48\u662f\u95ed\u5305",id:"\u4ec0\u4e48\u662f\u95ed\u5305",children:[{value:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305",id:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305",children:[]}]},{value:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f",id:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f",children:[]},{value:"Reference",id:"reference",children:[]}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u95ed\u5305"},"\u4ec0\u4e48\u662f\u95ed\u5305"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305"},"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51fd\u6570\u548c\u51fd\u6570\u5bf9\u5176\u8bcd\u6cd5\u73af\u5883\u7684\u5f15\u7528\u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u7684\u7ec4\u5408\u5c31\u662f\u95ed\u5305\u3002")," -MDN"),(0,a.kt)("p",null,"\u4e0a\u7ea7\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\uff0c\u56e0\u4e3a\u88ab\u4e0b\u7ea7\u4f5c\u7528\u57df\u5185\u5f15\u7528\uff0c\u800c\u6ca1\u6709\u88ab\u91ca\u653e\uff0c\u5bfc\u81f4\u4e0a\u7ea7\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf\uff0c\u7b49\u5230\u4e0b\u7ea7\u4f5c\u7528\u57df\u6267\u884c\u5b8c\u540e\u624d\u5f97\u5230\u6b63\u5e38\u91ca\u653e\u3002"),(0,a.kt)("p",null,"\u51fd\u6570\u548c\u51fd\u6570\u5185\u90e8\u80fd\u591f\u8bbf\u95ee\u5230\u7684\u53d8\u91cf\u7684\u603b\u548c\uff0c\u5c31\u6784\u6210\u4e00\u4e2a\u95ed\u5305\u3002"),(0,a.kt)("p",null,"\u95ed\u5305\u5305\u542b\u51fd\u6570\u521b\u5efa\u65f6\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\uff0c\u5b83\u7c7b\u4f3c\u4e8e\u80cc\u5305\u3002\u51fd\u6570\u5b9a\u4e49\u9644\u5e26\u4e00\u4e2a\u5c0f\u80cc\u5305\uff0c\u5b83\u7684\u5305\u4e2d\u5b58\u50a8\u4e86\u51fd\u6570\u5b9a\u4e49\u521b\u5efa\u65f6\u6240\u5904\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u3002",(0,a.kt)("strong",{parentName:"p"},"\u95ed\u5305\u5728\u51fd\u6570\u521b\u5efa\u65f6\u4ea7\u751f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903858636849159#heading-4"},"\u6211\u4ece\u6765\u4e0d\u7406\u89e3 JavaScript \u95ed\u5305\uff0c\u76f4\u5230\u6709\u4eba\u8fd9\u6837\u5411\u6211\u89e3\u91ca\u5b83 - \u6398\u91d1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function createCounter() {\n    let counter = 0;\n    const myFunction = function () {\n        //counter \u5728myFunction \u521b\u5efa\u65f6\u5c31\u653e\u5728\u5b83\u7684\u5305\u5305\u91cc\u5566\n        counter = counter + 1;\n        return counter;\n    };\n    return myFunction;\n}\nconst increment = createCounter();\nconst c1 = increment(); //\u8fd9\u884c\u6267\u884c\u5b8c\u540e\uff0c\u95ed\u5305\u7684counter=1\uff0c\u8fd9\u4e2aincrement\u51fd\u6570\u88ab\u9500\u6bc1\uff0c\u4f46\u4e0b\u9762\u8fd8\u5b58\u5728\u5bf9increment \u7684\u5f15\u7528\uff0ccounter \u8fd8\u5728\u4e0d\u88ab\u9500\u6bc1\uff0c\u4e0b\u9762\u4f7f\u7528\u7684counter \u521d\u59cb\u503c\u4e3a1\nconst c2 = increment();\nconst c3 = increment();\nconsole.log("example increment", c1, c2, c3); //example increment 1 2 3\n')),(0,a.kt)("p",null,"\u662f\u5426\u4efb\u4f55\u51fd\u6570\u90fd\u5177\u6709\u95ed\u5305\uff0c\u751a\u81f3\u662f\u5728\u5168\u5c40\u8303\u56f4\u5185\u521b\u5efa\u7684\u51fd\u6570?\u7b54\u6848\u662f\u80af\u5b9a\u7684\u3002\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\u7684\u51fd\u6570\u521b\u5efa\u95ed\u5305\uff0c\u4f46\u662f\u7531\u4e8e\u8fd9\u4e9b\u51fd\u6570\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\u7684\uff0c\u6240\u4ee5\u5b83\u4eec\u53ef\u4ee5\u8bbf\u95ee\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\uff0c\u800c\u5168\u5c40\u4f5c\u7528\u57df\u4e0d\u88ab\u9500\u6bc1\uff0c\u6240\u4ee5\u95ed\u5305\u7684\u6982\u5ff5\u5e76\u4e0d\u91cd\u8981\u3002"),(0,a.kt)("p",null,"\u5f53\u51fd\u6570\u8fd4\u56de\u51fd\u6570\u65f6\uff0c\u95ed\u5305\u7684\u6982\u5ff5\u5c31\u53d8\u5f97\u66f4\u52a0\u91cd\u8981\u4e86\u3002\u8fd4\u56de\u7684\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u4e0d\u5c5e\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u4f46\u5b83\u4eec\u4ec5\u5b58\u5728\u4e8e\u5176\u95ed\u5305\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f"},"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f"),(0,a.kt)("h4",{id:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5"},"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528\u95ed\u5305\u6765\u5b9a\u4e49\u516c\u5171\u51fd\u6570\uff0c\u5e76\u4ee4\u5176\u53ef\u4ee5\u8bbf\u95ee\u79c1\u6709\u51fd\u6570\u548c\u53d8\u91cf\u3002\u8fd9\u4e2a\u65b9\u5f0f\u4e5f\u79f0\u4e3a \u6a21\u5757\u6a21\u5f0f\uff08module pattern\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var makeCounter = function () {\n    var privateCounter = 0;\n    function changeBy(val) {\n        privateCounter += val;\n    }\n    return {\n        increment: function () {\n            changeBy(1);\n        },\n        decrement: function () {\n            changeBy(-1);\n        },\n        value: function () {\n            return privateCounter;\n        },\n    };\n};\n\nvar Counter1 = makeCounter();\nvar Counter2 = makeCounter(); //\u6bcf\u4e2a\u95ed\u5305\u90fd\u662f\u5f15\u7528\u81ea\u5df1\u8bcd\u6cd5\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf privateCounter ,\u5728\u4e00\u4e2a\u95ed\u5305\u5185\u5bf9\u53d8\u91cf\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u53e6\u5916\u4e00\u4e2a\u95ed\u5305\u4e2d\u7684\u53d8\u91cf\u3002\nconsole.log(Counter1.value()); /* logs 0 */\nCounter1.increment();\nCounter1.increment();\nconsole.log(Counter1.value()); /* logs 2 */\nCounter1.decrement();\nconsole.log(Counter1.value()); /* logs 1 */\nconsole.log(Counter2.value()); /* logs 0 */\n")),(0,a.kt)("p",null,"\u8fd9\u6b21\u6211\u4eec\u53ea\u521b\u5efa\u4e86\u4e00\u4e2a\u8bcd\u6cd5\u73af\u5883\uff0c\u4e3a\u4e09\u4e2a\u51fd\u6570\u6240\u5171\u4eab\uff1aCounter.increment\uff0cCounter.decrement \u548c Counter.value\u3002"),(0,a.kt)("p",null,"\u8be5\u5171\u4eab\u73af\u5883\u521b\u5efa\u4e8e\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684\u533f\u540d\u51fd\u6570\u4f53\u5185\u3002\u8fd9\u4e2a\u73af\u5883\u4e2d\u5305\u542b\u4e24\u4e2a\u79c1\u6709\u9879\uff1a\u540d\u4e3a privateCounter \u7684\u53d8\u91cf\u548c\u540d\u4e3a changeBy \u7684\u51fd\u6570\u3002\u8fd9\u4e24\u9879\u90fd\u65e0\u6cd5\u5728\u8fd9\u4e2a\u533f\u540d\u51fd\u6570\u5916\u90e8\u76f4\u63a5\u8bbf\u95ee\u3002\u5fc5\u987b\u901a\u8fc7\u533f\u540d\u51fd\u6570\u8fd4\u56de\u7684\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u662f\u5171\u4eab\u540c\u4e00\u4e2a\u73af\u5883\u7684\u95ed\u5305\u3002\u591a\u4e8f JavaScript \u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u8bbf\u95ee privateCounter \u53d8\u91cf\u548c changeBy \u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},"\u95ed\u5305 - JavaScript | MDN")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903858636849159#heading-4"},"\u6211\u4ece\u6765\u4e0d\u7406\u89e3 JavaScript \u95ed\u5305\uff0c\u76f4\u5230\u6709\u4eba\u8fd9\u6837\u5411\u6211\u89e3\u91ca\u5b83 - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},"\u95ed\u5305 - JavaScript | MDN"))))}m.isMDXComponent=!0}}]);