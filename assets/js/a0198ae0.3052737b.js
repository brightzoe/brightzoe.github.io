"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6620],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||l;return n?a.createElement(d,p(p({ref:t},c),{},{components:n})):a.createElement(d,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),p=["components"],o={},i="Set \u548c Map",s={unversionedId:"JavaScript/setAndMap",id:"JavaScript/setAndMap",isDocsHomePage:!1,title:"Set \u548c Map",description:"Set \u548c Map \u4e3b\u8981\u7684\u5e94\u7528\u573a\u666f\u5728\u4e8e\u6570\u7ec4\u53bb\u91cd\u548c\u6570\u636e\u5b58\u50a8.Set \u662f\u4e00\u79cd\u53eb\u505a\u96c6\u5408\u7684\u6570\u636e\u7ed3\u6784\uff0cMap \u662f\u4e00\u79cd\u53eb\u505a\u5b57\u5178\u7684\u6570\u636e\u7ed3\u6784.",source:"@site/docs/JavaScript/setAndMap.md",sourceDirName:"JavaScript",slug:"/JavaScript/setAndMap",permalink:"/docs/JavaScript/setAndMap",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/JavaScript/setAndMap.md",tags:[],version:"current",lastUpdatedAt:1632893046,formattedLastUpdatedAt:"9/29/2021",frontMatter:{},sidebar:"JavaScript",previous:{title:"learnTypeScript",permalink:"/docs/JavaScript/learnTypeScript"},next:{title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",permalink:"/docs/JavaScript/setTimeOutAndSetInterval"}},c=[{value:"Set",id:"set",children:[{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",children:[]},{value:"\u4e0e\u6570\u7ec4\u7684\u8f6c\u6362",id:"\u4e0e\u6570\u7ec4\u7684\u8f6c\u6362",children:[]},{value:"WeakSet",id:"weakset",children:[]}]},{value:"Map",id:"map",children:[{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5-1",children:[]},{value:"\u4e0e\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u8f6c\u6362",id:"\u4e0e\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u8f6c\u6362",children:[]},{value:"WeakMap",id:"weakmap",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"set-\u548c-map"},"Set \u548c Map"),(0,l.kt)("p",null,"Set \u548c Map \u4e3b\u8981\u7684\u5e94\u7528\u573a\u666f\u5728\u4e8e\u6570\u7ec4\u53bb\u91cd\u548c\u6570\u636e\u5b58\u50a8.Set \u662f\u4e00\u79cd\u53eb\u505a\u96c6\u5408\u7684\u6570\u636e\u7ed3\u6784\uff0cMap \u662f\u4e00\u79cd\u53eb\u505a\u5b57\u5178\u7684\u6570\u636e\u7ed3\u6784."),(0,l.kt)("p",null,"\u96c6\u5408:\u96c6\u5408\u662f\u7531\u4e00\u7ec4\u65e0\u5e8f\u4e14\u552f\u4e00(\u5373\u4e0d\u80fd\u91cd\u590d)\u7684\u9879\u7ec4\u6210\u7684\uff0c\u53ef\u4ee5\u60f3\u8c61\u6210\u96c6\u5408\u662f\u4e00\u4e2a\u65e2\u6ca1\u6709\u91cd\u590d\u5143\u7d20\uff0c\u4e5f\u6ca1\u6709\u987a\u5e8f\u6982\u5ff5\u7684\u6570\u7ec4."),(0,l.kt)("h2",{id:"set"},"Set"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u6570\u7ec4\uff0c\u4f46\u6210\u5458\u7684\u503c\u90fd\u662f\u552f\u4e00\u7684\u3002"),(0,l.kt)("p",null,"Set \u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\uff08\u6216\u8005\u5177\u6709 iterable \u63a5\u53e3\u7684\u5176\u4ed6\u6570\u636e\u7ed3\u6784\uff09\u4f5c\u4e3a\u53c2\u6570\uff0c\u7528\u6765\u521d\u59cb\u5316\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u7528Set \u53bb\u91cd\n\n//\u6570\u7ec4\u53bb\u91cd\n[...new Set(array)]\n\n//\u5b57\u7b26\u4e32\u53bb\u91cd\n[...new Set('abcabc')].join('')\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5411 Set \u52a0\u5165\u503c\u65f6\u8ba4\u4e3a NaN \u7b49\u4e8e\u81ea\u8eab\u3002\u5411 Set \u5b9e\u4f8b\u6dfb\u52a0\u4e86\u4e24\u6b21 NaN\uff0c\u4f46\u662f\u53ea\u4f1a\u52a0\u5165\u4e00\u4e2a\u3002")),(0,l.kt)("h3",{id:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const s = new Set();\ns.size();\ns.add(value); //\u8fd4\u56deSet \u672c\u8eab,\u53ef\u4ee5\u4f7f\u7528\u94fe\u5f0f\u5199\u6cd5\ns.delete(value); //\u8fd4\u56detrue/false\ns.has(value); //\u8fd4\u56detrue/false\ns.clear();\n\n//\u904d\u5386\u65b9\u6cd5\n//Set\u7684\u904d\u5386\u987a\u5e8f\u5c31\u662f\u63d2\u5165\u987a\u5e8f\u3002\ns.keys(); //\u8fd4\u56de\u952e\u540d\u7684\u904d\u5386\u5668\ns.values(); //values \u4e0e\u4e0a\u9762keys \u65b9\u6cd5\u884c\u4e3a\u5b8c\u5168\u4e00\u81f4\ns.entries();//\u8ba4\u4e3a\u952e\u540d\u4e0e\u952e\u503c\u662f\u4e00\u6837\u7684\u6620\u5c04\ns.forEach(...);\n\n//entries\u65b9\u6cd5\u8fd4\u56de\u7684\u904d\u5386\u5668\uff0c\u540c\u65f6\u5305\u62ec\u952e\u540d\u548c\u952e\u503c\uff0c\u6240\u4ee5\u6bcf\u6b21\u8f93\u51fa\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u7684\u4e24\u4e2a\u6210\u5458\u5b8c\u5168\u76f8\u7b49\u3002\nlet set = new Set([\'red\', \'green\', \'blue\']);\nfor (let item of set.entries()) {\n  console.log(item);\n}\n// ["red", "red"]\n// ["green", "green"]\n// ["blue", "blue"]\n\nfor (let x of set) {\n  console.log(x);\n}\n// red\n// green\n// blue\n')),(0,l.kt)("h3",{id:"\u4e0e\u6570\u7ec4\u7684\u8f6c\u6362"},"\u4e0e\u6570\u7ec4\u7684\u8f6c\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [...set];\nlet arr = Array.from(set);\nlet set = new Set(arr);\n")),(0,l.kt)("h3",{id:"weakset"},"WeakSet"),(0,l.kt)("p",null,"\u4e0e Set \u7c7b\u4f3c\uff0c\u4e5f\u662f\u4e0d\u91cd\u590d\u7684\u503c\u7684\u96c6\u5408"),(0,l.kt)("h4",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6210\u5458\u53ea\u80fd\u662f\u5bf9\u8c61\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5783\u573e\u56de\u6536\u673a\u5236\u4e0d\u8003\u8651 WeakSet \u5bf9\u8be5\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5176\u4ed6\u5bf9\u8c61\u90fd\u4e0d\u518d\u5f15\u7528\u8be5\u5bf9\u8c61\uff0c\u90a3\u4e48\u5783\u573e\u56de\u6536\u673a\u5236\u4f1a\u81ea\u52a8\u56de\u6536\u8be5\u5bf9\u8c61\u6240\u5360\u7528\u7684\u5185\u5b58\uff0c\u4e0d\u8003\u8651\u8be5\u5bf9\u8c61\u8fd8\u5b58\u5728\u4e8e WeakSet \u4e4b\u4e2d\u3002")))),(0,l.kt)("p",null,"WeakSet \u9002\u5408\u4e34\u65f6\u5b58\u653e\u4e00\u7ec4\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5b58\u653e\u8ddf\u5bf9\u8c61\u7ed1\u5b9a\u7684\u4fe1\u606f\u3002\u53ea\u8981\u8fd9\u4e9b\u5bf9\u8c61\u5728\u5916\u90e8\u6d88\u5931\uff0c\u5b83\u5728 WeakSet \u91cc\u9762\u7684\u5f15\u7528\u5c31\u4f1a\u81ea\u52a8\u6d88\u5931\u3002"),(0,l.kt)("p",null,"WeakSet \u7684\u6210\u5458\u662f\u4e0d\u9002\u5408\u5f15\u7528\u7684\uff0c\u56e0\u4e3a\u5b83\u4f1a\u968f\u65f6\u6d88\u5931\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e WeakSet \u5185\u90e8\u6709\u591a\u5c11\u4e2a\u6210\u5458\uff0c\u53d6\u51b3\u4e8e\u5783\u573e\u56de\u6536\u673a\u5236\u6709\u6ca1\u6709\u8fd0\u884c\uff0c\u8fd0\u884c\u524d\u540e\u5f88\u53ef\u80fd\u6210\u5458\u4e2a\u6570\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u800c\u5783\u573e\u56de\u6536\u673a\u5236\u4f55\u65f6\u8fd0\u884c\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\uff0c\u56e0\u6b64 ES6 \u89c4\u5b9a WeakSet \u4e0d\u53ef\u904d\u5386\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7279\u70b9\u540c\u6837\u9002\u7528\u4e8e WeakMap."),(0,l.kt)("h4",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("p",null,"\u6ca1\u6709 size,\u4e0d\u80fd\u904d\u5386\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"ws.add();\nws.delete();\nws.has();\n")),(0,l.kt)("h4",{id:"\u7528\u4f8b"},"\u7528\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b58\u50a8 dom \u8282\u70b9\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u4e86 Foo \u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u53ea\u80fd\u5728 Foo \u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const foos = new WeakSet();\nclass Foo {\n    constructor() {\n        foos.add(this);\n    }\n    method() {\n        if (!foos.has(this)) {\n            throw new TypeError("Foo.prototype.method \u53ea\u80fd\u5728Foo\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\uff01");\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"map"},"Map"),(0,l.kt)("p",null,"\u4f20\u7edf\u7684 js \u5bf9\u8c61\u53ea\u80fd\u7528\u5b57\u7b26\u4e32\u4f5c\u4e3a key,\u4f7f\u7528\u4e0a\u6709\u5f88\u591a\u9650\u5236\u3002"),(0,l.kt)("p",null,"ES6 \u7684 Map \u6570\u636e\u7ed3\u6784\uff0c\u7c7b\u4f3c\u4e8e\u5bf9\u8c61\uff0c\u662f\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u4f46 key \u4e0d\u9650\u4e8e\u5b57\u7b26\u4e32\uff0c\u5404\u79cd\u7c7b\u578b\u7684\u503c\u90fd\u53ef\u4ee5\u5f53\u4f5c\u952e\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u8bf4 Object \u7ed3\u6784\u63d0\u4f9b\u4e86\u201c\u5b57\u7b26\u4e32\u2014\u503c\u201d\u7684\u5bf9\u5e94\uff0cMap \u7ed3\u6784\u63d0\u4f9b\u4e86\u201c\u503c\u2014\u503c\u201d\u7684\u5bf9\u5e94\uff0c\u662f\u4e00\u79cd\u66f4\u5b8c\u5584\u7684 Hash \u7ed3\u6784\u5b9e\u73b0\u3002\u5982\u679c\u4f60\u9700\u8981\u201c\u952e\u503c\u5bf9\u201d\u7684\u6570\u636e\u7ed3\u6784\uff0cMap \u6bd4 Object \u66f4\u5408\u9002\u3002"),(0,l.kt)("h3",{id:"\u5e38\u7528\u65b9\u6cd5-1"},"\u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const m = new Map();\nm.set(a, b); //\u6dfb\u52a0\u952e\u503c\u5bf9\nm.get(a); //\u53d6\u5bf9\u5e94\u7684\u503c\n\nm.has(a); //true \u542b\u6709\u5bf9\u5e94\u7684key\nm.delete(a); //true \u5220\u9664\u5bf9\u5e94key \u7684\u952e\u503c\u5bf9\n\nm.size; //0 map\u7684\u957f\u5ea6\nmap.clear(); //\u6e05\u9664\u6240\u6709\u7684\u6210\u5458\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\n\n//set\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u5f53\u524d\u7684Map\u5bf9\u8c61\uff0c\u56e0\u6b64\u53ef\u4ee5\u91c7\u7528\u94fe\u5f0f\u5199\u6cd5\u3002\nlet map = new Map().set(1, "a").set(2, "b");\n\n//\u904d\u5386\u65b9\u6cd5\n//Map \u7684\u904d\u5386\u987a\u5e8f\u5c31\u662f\u63d2\u5165\u987a\u5e8f\u3002\nm.keys(); //\u8fd4\u56de\u952e\u540d\u7684\u904d\u5386\u5668\nm.values(); //\u8fd4\u56de\u6240\u6709\u503c\u7684\u904d\u5386\u5668\nm.entries(); //\u8fd4\u56de\u6240\u6709\u6210\u5458\u7684\u904d\u5386\u5668\nm.forEach(); //\u904d\u5386map \u7684\u6240\u6709\u6210\u5458\n\n//\u8bbf\u95ee\u904d\u5386\u5668 \u4f7f\u7528for of\n//MapIterator\xa0{"F", "T"}\nfor (let key of map.keys()) {\n    console.log(key);\n}\n')),(0,l.kt)("h3",{id:"\u4e0e\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u8f6c\u6362"},"\u4e0e\u5176\u4ed6\u6570\u636e\u7ed3\u6784\u7684\u8f6c\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//\u6570\u7ec4\u8f6c\u6362\u4e3amap\nlet kvArray = [[\"key1\", \"value1\"], [\"key2\", \"value2\"]];\nlet myMap = new Map(kvArray);\n\n//\u8f6c\u4e3a\u6570\u7ec4\uff0c\u5feb\u901f\u7684\u65b9\u6cd5\u662f\u7528...\u5c55\u5f00\u8fd0\u7b97\u7b26\nconst map = new Map([\n  [1, 'one'],\n  [2, 'two'],\n  [3, 'three'],\n]);\n\n[...map.keys()]\n// [1, 2, 3]\n\n[...map]\n// [[1,'one'], [2, 'two'], [3, 'three']]\n\n//\u5bf9map \u8fdb\u884c\u64cd\u4f5c\uff0c\u53ef\u4ee5\u4f7f\u7528map \u7684forEach \u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u6309\u4e0a\u9762\u8f6c\u6362\u4e3a\u6570\u7ec4\uff0c\u4f7f\u7528\u6570\u7ec4\u7684filter ,map\u7b49\u65b9\u6cd5\n\n//\u5bf9\u8c61\u8f6c\u4e3amap\nlet a = {b:1}\nlet m = new Map(Object.entries(a))//Object.entries \u8f6c\u4e3a\u6570\u7ec4\n\n//\u81ea\u5df1\u5b9e\u73b0\u8f6c\u6362\u4e3amap \u7684\u51fd\u6570\nfunction objToMap(obj){\n  let res = new Map()\n  for(let key of Object.keys(obj)){\n    res.set(key,obj[key])\n  }\n  return res\n}\nobjToMap(a)\n\n//map \u8f6c\u4e3a\u5bf9\u8c61,\u5bf9\u8c61\u7684key \u53ea\u80fd\u662f\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5 map \u8f6c\u4e3a\u5bf9\u8c61\uff0c\u5982\u679ckey \u90fd\u662f\u5b57\u7b26\u4e32\u53ef\u4ee5\u65e0\u635f\u8f6c\u6362\uff0c\u5426\u5219key \u4f1a\u88ab\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u3002\nfunction mapToObj(map){\n  let res = Object.create(null)\n  for(let [k,v] of map){\n    res[k] =v\n  }\n  return res\n}\n")),(0,l.kt)("h3",{id:"weakmap"},"WeakMap"),(0,l.kt)("p",null,"\u7c7b\u4f3c\u4e8e map,\u4e5f\u662f\u952e\u503c\u5bf9\u7684\u96c6\u5408\u3002"),(0,l.kt)("h4",{id:"\u7279\u70b9-1"},"\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u53ea\u63a5\u53d7\u5bf9\u8c61\u4f5c\u4e3a key")," ,null \u9664\u5916\u3002\u5176\u4ed6\u7c7b\u578b\u7684\u4f5c\u4e3a\u952e\u540d\u4f1a\u62a5\u9519")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5176\u6b21\uff0cWeakMap \u7684\u952e\u540d\u6240\u6307\u5411\u7684\u5bf9\u8c61\uff0c\u4e0d\u8ba1\u5165\u5783\u573e\u56de\u6536\u673a\u5236\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5b83\u7684\u952e\u540d\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u90fd\u662f\u5f31\u5f15\u7528\uff0c\u5373\u5783\u573e\u56de\u6536\u673a\u5236\u4e0d\u5c06\u8be5\u5f15\u7528\u8003\u8651\u5728\u5185\u3002\u56e0\u6b64\uff0c\u53ea\u8981\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u5176\u4ed6\u5f15\u7528\u90fd\u88ab\u6e05\u9664\uff0c\u5783\u573e\u56de\u6536\u673a\u5236\u5c31\u4f1a\u91ca\u653e\u8be5\u5bf9\u8c61\u6240\u5360\u7528\u7684\u5185\u5b58\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6\u4e0d\u518d\u9700\u8981\uff0cWeakMap \u91cc\u9762\u7684\u952e\u540d\u5bf9\u8c61\u548c\u6240\u5bf9\u5e94\u7684\u952e\u503c\u5bf9\u4f1a\u81ea\u52a8\u6d88\u5931\uff0c\u4e0d\u7528\u624b\u52a8\u5220\u9664\u5f15\u7528\u3002")))),(0,l.kt)("p",null,"WeakMap \u7684\u4e13\u7528\u573a\u5408\u5c31\u662f\uff0c\u5b83\u7684\u952e\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61\uff0c\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u6d88\u5931\u3002WeakMap \u7ed3\u6784\u6709\u52a9\u4e8e\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\u3002"),(0,l.kt)("p",null,"WeakMap \u53ea\u6709\u56db\u4e2a\u65b9\u6cd5\u53ef\u7528\uff1aget()\u3001set()\u3001has()\u3001delete()\u3002"),(0,l.kt)("h4",{id:"\u8bed\u6cd5\u7279\u70b9"},"\u8bed\u6cd5\u7279\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ca1\u6709\u904d\u5386\u64cd\u4f5c\uff08\u5373\u6ca1\u6709 keys()\u3001values()\u548c entries()\u65b9\u6cd5\uff09\uff0c\u4e5f\u6ca1\u6709 size \u5c5e\u6027\u3002\u56e0\u4e3a\u6ca1\u6709\u529e\u6cd5\u5217\u51fa\u6240\u6709\u952e\u540d\uff0c\u67d0\u4e2a\u952e\u540d\u662f\u5426\u5b58\u5728\u5b8c\u5168\u4e0d\u53ef\u9884\u6d4b\uff0c\u8ddf\u5783\u573e\u56de\u6536\u673a\u5236\u662f\u5426\u8fd0\u884c\u76f8\u5173\u3002\u8fd9\u4e00\u523b\u53ef\u4ee5\u53d6\u5230\u952e\u540d\uff0c\u4e0b\u4e00\u523b\u5783\u573e\u56de\u6536\u673a\u5236\u7a81\u7136\u8fd0\u884c\u4e86\uff0c\u8fd9\u4e2a\u952e\u540d\u5c31\u6ca1\u4e86\uff0c\u4e3a\u4e86\u9632\u6b62\u51fa\u73b0\u4e0d\u786e\u5b9a\u6027\uff0c\u5c31\u7edf\u4e00\u89c4\u5b9a\u4e0d\u80fd\u53d6\u5230\u952e\u540d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u6e05\u7a7a\uff0c\u5373\u4e0d\u652f\u6301 clear \u65b9\u6cd5\u3002"))),(0,l.kt)("h4",{id:"\u5b9e\u9645\u7528\u9014"},"\u5b9e\u9645\u7528\u9014"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"DOM \u8282\u70b9\u4f5c\u4e3a\u952e\u540d\u3002\u4e00\u65e6\u8fd9\u4e2a DOM \u8282\u70b9\u5220\u9664\uff0c\u8bb0\u5f55\u5728\u8282\u70b9\u4e0a\u7684\u503c\u5c31\u4f1a\u6d88\u5931\uff0c\u4e0d\u5b58\u5728\u5185\u5b58\u6cc4\u6f0f\u98ce\u9669\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u90e8\u7f72\u79c1\u6709\u5c5e\u6027\u3002\u5185\u90e8\u5c5e\u6027\u662f\u5b9e\u4f8b\u7684\u5f31\u5f15\u7528\uff0c\u6240\u4ee5\u5982\u679c\u5220\u9664\u5b9e\u4f8b\uff0c\u5b83\u4eec\u4e5f\u5c31\u968f\u4e4b\u6d88\u5931\uff0c\u4e0d\u4f1a\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"ECMAScript 6 \u5165\u95e8 - \u962e\u4e00\u5cf0 ",(0,l.kt)("a",{parentName:"li",href:"https://es6.ruanyifeng.com/#docs/set-map"},"https://es6.ruanyifeng.com/#docs/set-map")),(0,l.kt)("li",{parentName:"ol"},"MDN-Map ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map"},"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903589920374792#heading-0"},"ES6 \u7684 Set \u548c Map \u6570\u636e\u7ed3\u6784\uff0c\u7531\u4f60\u5236\u9020 - \u6398\u91d1"))))}k.isMDXComponent=!0}}]);