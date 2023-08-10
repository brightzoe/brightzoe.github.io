"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[1051],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,k=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7366),r=(n(9496),n(9613));const o={},p="\u539f\u578b\u548c\u539f\u578b\u94fe",l={unversionedId:"fe-basic/javascript/basic/prototype",id:"fe-basic/javascript/basic/prototype",title:"\u539f\u578b\u548c\u539f\u578b\u94fe",description:"\u5728\u8bbf\u95ee\u5bf9\u8c61\u81ea\u8eab\u4e0d\u5305\u542b\u7684\u5c5e\u6027\u65f6,\u4f1a\u4ece\u5bf9\u8c61\u539f\u578b\u4e2d\u641c\u7d22\u5c5e\u6027\u3002",source:"@site/docs/fe-basic/javascript/basic/prototype.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/prototype",permalink:"/docs/fe-basic/javascript/basic/prototype",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/prototype.md",tags:[],version:"current",lastUpdatedAt:1691662330,formattedLastUpdatedAt:"2023\u5e748\u670810\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u53c2\u6570\u4f20\u9012",permalink:"/docs/fe-basic/javascript/basic/parameter-passing"},next:{title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",permalink:"/docs/fe-basic/javascript/basic/settimeout-and-setinterval"}},i={},c=[{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"instanceof",id:"instanceof",level:3},{value:"\u4e00\u4e9b\u9898",id:"\u4e00\u4e9b\u9898",level:2},{value:"Reference",id:"reference",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u539f\u578b\u548c\u539f\u578b\u94fe"},"\u539f\u578b\u548c\u539f\u578b\u94fe"),(0,r.kt)("p",null,"\u5728\u8bbf\u95ee\u5bf9\u8c61\u81ea\u8eab\u4e0d\u5305\u542b\u7684\u5c5e\u6027\u65f6,\u4f1a\u4ece\u5bf9\u8c61\u539f\u578b\u4e2d\u641c\u7d22\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u5bf9\u8c61\u9664\u4e86\u62e5\u6709\u81ea\u5df1\u7684\u5c5e\u6027\u5916,\u90fd\u5305\u542b\u4e00\u4e2a\u9690\u5f0f\u539f\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u5c5e\u6027\u3002\u6307\u5411\u53e6\u4e00\u4e2a\u5bf9\u8c61(\u521b\u5efa\u8be5\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u7684\u663e\u5f0f\u539f\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),")\uff0c\u662f\u5bf9\u8c61\u7684\u5c5e\u6027\u6765\u6e90\u3002"),(0,r.kt)("p",null,"\u83b7\u53d6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b:",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf(obj)")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.__proto__")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u51fd\u6570\u90fd\u62e5\u6709\u81ea\u5df1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027\u3002\u4e00\u4e2a\u51fd\u6570\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\u542b\u6709\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"constructor"),"\u5c5e\u6027\uff0c\u6307\u5411\u8fd9\u4e2a\u51fd\u6570\u81ea\u5df1\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype.constructor===Function")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9690\u5f0f\u539f\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u663e\u5f0f\u539f\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__proto__")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prototype"))))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/10/21/uT3n6x8p7BFgIaf.png",alt:null})),(0,r.kt)("p",null,"\u53ef\u4ee5\u6539\u53d8\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b,\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a null\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.__proto__=null")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u7279\u5b9a\u539f\u578b\u7684\u5bf9\u8c61:",(0,r.kt)("inlineCode",{parentName:"p"},"let obj =Object.create(proto, [propertiesObject])")," \u5b83\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u662f\u5c5e\u6027\u63cf\u8ff0\u7b26\uff08\u4e0d\u5e38\u7528\uff0c\u9ed8\u8ba4\u662f undefined\uff09\u3002"),(0,r.kt)("h2",{id:"\u539f\u578b\u94fe"},"\u539f\u578b\u94fe"),(0,r.kt)("p",null,"\u6240\u6709\u5bf9\u8c61\u7684\u7236\u539f\u578b\uff0c\u7ec8\u6781\u539f\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype"),"\uff0c\u518d\u7ec8\u6781\u662f null\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype.__proto__ === null")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u8c61\u7684\u539f\u578b\u5173\u7cfb\u6811\u5f62\u7ed3\u6784,\u6574\u4e2a\u6811\u6839\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype")," \uff0c\u63d0\u4f9b\u4e86\u53ef\u4ee5\u5728\u6240\u6709\u5bf9\u8c61\u4e2d\u4f7f\u7528\u7684\u65b9\u6cd5\u3002\u8bb8\u591a\u5bf9\u8c61\u5e76\u4e0d\u76f4\u63a5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype")," \u4f5c\u4e3a\u5176\u539f\u578b\uff0c\u800c\u4f1a\u4f7f\u7528\u53e6\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\uff0c\u7528\u4e8e\u63d0\u4f9b\u4e00\u7cfb\u5217\u4e0d\u540c\u7684\u9ed8\u8ba4\u5c5e\u6027\u3002\u51fd\u6570\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.prototype")," \uff0c\u800c\u6570\u7ec4\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"Array.prototype")," \u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/10/21/SQhZbroGAqMjTCi.png",alt:null})),(0,r.kt)("h2",{id:"\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"new F(xx)"),"\u7528\u6765\u521b\u5efa\u65b0\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u662f\u6784\u9020\u51fd\u6570 F \u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u6784\u9020\u51fd\u6570\u4e00\u822c\u4ee5\u5927\u5199\u5f00\u5934\uff0c\u521b\u5efa\u7684\u5bf9\u8c61\u7684\u9690\u5f0f\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\u7684 prototype \u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u6784\u9020\u51fd\u6570\u4e2d\u5305\u542b\u6307\u5411\u65b0\u5bf9\u8c61\u7684\u53d8\u91cf this \uff0c\u8fd4\u56de\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u662f\u6784\u9020\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u9664\u975e\u6784\u9020\u51fd\u6570\u663e\u5f0f\u8fd4\u56de\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u6784\u9020\u51fd\u6570:\nfunction myFunction(arg1, arg2) {\n  this.firstName = arg1;\n  this.lastName = arg2;\n}\n\n// This  creates a new object\nvar a = new myFunction('Li', 'Cherry');\na.firstName; //li\na.lastName; //Cherry\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"new \u7684\u539f\u7406"),(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u5bf9\u8c61\u7684\u9690\u5f0f\u539f\u578b\u6307\u5411\u5b83\u7684\u6784\u9020\u51fd\u6570\u7684\u663e\u5f0f\u539f\u578b\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6784\u9020\u51fd\u6570\u5185\u90e8\u7684 this \u88ab\u8d4b\u503c\u4e3a\u8fd9\u4e2a\u65b0\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u6784\u9020\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u5219\u8fd4\u56de\u8be5\u5bf9\u8c61\uff0c\u5426\u5219\u8fd4\u56de\u521a\u521a\u521b\u5efa\u7684\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b80\u5355\u5b9e\u73b0 new"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function myNew(Fn, ...args) {\n  if (typeof Fn !== 'function') {\n    //\u8981\u88abnew \u7684\u6784\u9020\u51fd\u6570\u5fc5\u987b\u662f\u51fd\u6570\n    throw new Error('constructor must be a function');\n  }\n  // const obj = {}; //\u521b\u5efa\u65b0\u5bf9\u8c61\n  // obj.__proto__ = Fn.prototype; // \u65b0\u5bf9\u8c61\u7684\u9690\u5f0f\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u663e\u5f0f\u539f\u578b\n  const obj = Object.create(Fn.prototype); //\u521b\u5efa\u65b0\u5bf9\u8c61,\u539f\u578b\u6307\u5411\u6784\u9020\u51fd\u6570\n  const result = Fn.call(obj, ...args); //\u8c03\u7528\u6784\u9020\u51fd\u6570\uff0c\u5e76\u7ed1\u5b9athis \u7ed9\u65b0\u5bf9\u8c61\n  //return typeof result === \"object\" ? result : obj; //\u5982\u679c\u6784\u9020\u51fd\u6570\u663e\u5f0f\u8fd4\u56de\u4e86\u5bf9\u8c61\u5c31\u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u5982\u679c\u6ca1\u6709\u5219\u8fd4\u56de\u524d\u9762\u521b\u5efa\u7684\u7a7a\u5bf9\u8c61obj\n  return result instanceof Object ? result : obj; //\u6784\u9020\u51fd\u6570\u663e\u5f0f\u8fd4\u56de\u4e86\u51fd\u6570\u4e5f\u7b97\u8fd4\u56de\uff0c\u7528instanceof \u4e0d\u7528typeof\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6784\u9020\u51fd\u6570\u4e0e\u666e\u901a\u7684\u51fd\u6570\u6709\u4ec0\u4e48\u4e0d\u540c\uff1f"),(0,r.kt)("p",{parentName:"admonition"},"\u552f\u4e00\u533a\u522b\u662f\u8c03\u7528\u65b9\u5f0f\u4e0d\u540c\uff0c\u9664\u6b64\u4e4b\u5916\uff0c\u6784\u9020\u51fd\u6570\u5c31\u662f\u51fd\u6570\u3002\u5e76\u6ca1\u6709\u628a\u67d0\u4e2a\u51fd\u6570\u5b9a\u4e49\u4e3a\u6784\u9020\u51fd\u6570\u7684\u7279\u6b8a\u8bed\u6cd5\u3002\u4efb\u4f55\u51fd\u6570\u53ea\u8981\u4f7f\u7528 new \u64cd\u4f5c\u7b26\u8c03\u7528\u5c31\u662f\u6784\u9020\u51fd\u6570\u3002(\u9664\u4e86\u7bad\u5934\u51fd\u6570\uff0c\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5c\u6784\u9020\u5668\uff0c\u4f7f\u7528 new \u4f1a\u629b\u51fa\u9519\u8bef\u3002)"),(0,r.kt)("p",{parentName:"admonition"},"\u6784\u9020\u51fd\u6570\u9996\u5b57\u6bcd\u901a\u5e38\u5927\u5199\uff0c\u4e5f\u53ef\u4ee5\u7b97\u4e00\u4e2a\u533a\u522b\u5427\u3002")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6964169557569175565#heading-0"},"520\uff0c \u5b66\u5e9f new \u5bf9\u8c61\u7684\u8fc7\u7a0b - \u6398\u91d1")),(0,r.kt)("h3",{id:"instanceof"},"instanceof"),(0,r.kt)("p",null,"js \u7684\u7ee7\u627f\u57fa\u4e8e\u539f\u578b\u94fe\u5b9e\u73b0\uff0cinstanceof \u7528\u6765\u5224\u65ad\u8be5\u5b9e\u4f8b\u7684\u6784\u9020\u51fd\u6570\u7684 prototype \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u5bf9\u8c61\u539f\u578b\u94fe\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof"},"instanceof - JavaScript | MDN")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u6613 instanceof")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u53d8\u91cfR\u7684\u539f\u578b \u5b58\u5728\u4e8e \u53d8\u91cfL\u7684\u539f\u578b\u94fe\u4e0a\nfunction myInstanceof(left, right) {\n  //\u57fa\u672c\u6570\u636e\u7c7b\u578b\u80af\u5b9a\u4e0d\u662f\n  const basicTypes = [\n    'string',\n    'number',\n    'boolean',\n    'undefined',\n    'symbol',\n    'bigint',\n  ];\n  if (basicTypes.includes(typeof left)) {\n    //typeof \u5224\u65ad\u4e0d\u4e86array,null,\u5176\u4ed6\u90fd\u53ef\u4ee5\n    return false;\n  }\n  //\u4e0d\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\n  let lp = left.__proto__;\n  let rp = right.prototype;\n  //\u5faa\u73af\u5411\u4e0a\u627e\u539f\u578b\uff0c\u76f4\u5230\u627e\u5230\u6216\u8005\u5230\u5934\u627e\u5230null\n  while (true) {\n    if (lp === rp) {\n      return true;\n    }\n    if (lp === null) {\n      return false;\n    }\n    lp = lp.__proto__;\n  }\n}\n")),(0,r.kt)("h2",{id:"\u4e00\u4e9b\u9898"},"\u4e00\u4e9b\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 1\nvar foo = {};\nvar F = function () {};\nObject.prototype.a = 'value a';\nFunction.prototype.b = 'value b';\n\nconsole.log(foo.a); //value a\nconsole.log(foo.b); //undefined\nconsole.log(F.a); //value a\nconsole.log(F.b); //value b\n\n// 2\nFunction.prototype.a = () => alert('a');\nObject.prototype.b = () => alert('b');\nfunction A() {}\nconst a = new A();\n\na.a(); //a.a is undefined\n//a.a();a.__proto__.a();a.__proto__.__proto__.a()\na.b(); //b\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u51fd\u6570\u5f53\u524d\u662f\u5426\u88ab\u5f53\u505a\u6784\u9020\u51fd\u6570\u8c03\u7528\uff1f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"instanceof ")," \u68c0\u67e5\u662f\u5426\u901a\u8fc7 new \u8c03\u7528\uff0cthis \u662f\u5426\u662f\u6784\u9020\u51fd\u6570\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4f46\u4e0d\u5b8c\u5168\u53ef\u9760\uff0c\u7528 Person.call()/apply() \u4e5f\u53ef\u4ee5\u5f97\u5230 Person \u7684\u5b9e\u4f8b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u8c03\u7528\u51fd\u6570\u7684 constructor \u65b9\u6cd5\u65f6\uff0cnew.target \u88ab\u8d4b\u503c\u7ed9\u6784\u9020\u51fd\u6570\u540d(===Person)\u3002\u5982\u679c\u4e0d\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\u8c03\u7528\uff0cnew.target===undefined\u3002\u5f88\u53ef\u9760\u3002\u5728\u51fd\u6570\u5916\u4f7f\u7528 new.target \u662f\u8bed\u6cd5\u9519\u8bef\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7528 class \u58f0\u660e\u7684\u51fd\u6570\u5fc5\u987b\u88ab new \u8c03\u7528\uff0c\u4e0d\u7136\u4f1a\u62a5\u9519\uff0c\u5c31\u89c4\u5b9a\u4e86\u8fd9\u4e00\u79cd\u65b9\u6cd5\u3002"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6934498361475072014#heading-0"},"\u9762\u4e0d\u9762\u8bd5\u7684\uff0c\u4f60\u90fd\u5f97\u61c2\u539f\u578b\u548c\u539f\u578b\u94fe - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KieSun/Dream/issues/2"},"\u6df1\u5ea6\u89e3\u6790\u539f\u578b\u4e2d\u7684\u5404\u4e2a\u96be\u70b9 \xb7 Issue #2 \xb7 KieSun/Dream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6964169557569175565#heading-0"},"520\uff0c \u5b66\u5e9f new \u5bf9\u8c61\u7684\u8fc7\u7a0b - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new"},"new \u8fd0\u7b97\u7b26 - JavaScript | MDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yuchengkai.cn/docs/frontend/#new"},"JS | \u524d\u7aef\u8fdb\u9636\u4e4b\u9053")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903704663949325#heading-1"},"\u9762\u8bd5\u5b98\u95ee\uff1a\u80fd\u5426\u6a21\u62df\u5b9e\u73b0 JS \u7684 new \u64cd\u4f5c\u7b26 - \u6398\u91d1"))))}m.isMDXComponent=!0}}]);