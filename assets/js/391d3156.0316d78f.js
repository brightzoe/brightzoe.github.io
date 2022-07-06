"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9485],{4137:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),v=r,u=d["".concat(s,".").concat(v)]||d[v]||c[v]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6635:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={},s="\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",p={unversionedId:"fe-basic/javascript/basic/settimeout-and-setinterval",id:"fe-basic/javascript/basic/settimeout-and-setinterval",title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",description:"\u57fa\u672c\u542b\u4e49",source:"@site/docs/fe-basic/javascript/basic/settimeout-and-setinterval.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/settimeout-and-setinterval",permalink:"/docs/fe-basic/javascript/basic/settimeout-and-setinterval",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/settimeout-and-setinterval.md",tags:[],version:"current",lastUpdatedAt:1657123149,formattedLastUpdatedAt:"7/6/2022",frontMatter:{},sidebar:"FE",previous:{title:"\u539f\u578b\u548c\u539f\u578b\u94fe",permalink:"/docs/fe-basic/javascript/basic/prototype"},next:{title:"this,call,apply,bind",permalink:"/docs/fe-basic/javascript/basic/this-and-related"}},m={},c=[{value:"\u57fa\u672c\u542b\u4e49",id:"\u57fa\u672c\u542b\u4e49",level:2},{value:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668",id:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668",level:2},{value:"setInterval \u7684\u6267\u884c\u65f6\u95f4",id:"setinterval-\u7684\u6267\u884c\u65f6\u95f4",level:2},{value:"\u5468\u671f\u6027\u8c03\u5ea6",id:"\u5468\u671f\u6027\u8c03\u5ea6",level:2},{value:"setInterval \u5b58\u5728\u7684\u95ee\u9898",id:"setinterval-\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417\uff1f",id:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9a\u65f6\u5668-settimeout-\u4e0e-setinterval"},"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval"),(0,i.kt)("h2",{id:"\u57fa\u672c\u542b\u4e49"},"\u57fa\u672c\u542b\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u5141\u8bb8\u6211\u4eec\u5c06\u51fd\u6570\u63a8\u8fdf\u5230\u4e00\u6bb5\u65f6\u95f4\u95f4\u9694\u4e4b\u540e\u518d\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setInterval")," \u5141\u8bb8\u6211\u4eec\u91cd\u590d\u8fd0\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\u4ece",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u6bb5\u65f6\u95f4\u95f4\u9694\u4e4b\u540e\u5f00\u59cb\u8fd0\u884c"),"\uff0c\u4e4b\u540e\u4ee5\u8be5\u65f6\u95f4\u95f4\u9694\u8fde\u7eed\u91cd\u590d\u8fd0\u884c\u8be5\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668"},"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setInterval")," \u8fd4\u56de\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694 ID\uff0c\u8be5 ID \u552f\u4e00\u5730\u6807\u8bc6\u65f6\u95f4\u95f4\u9694\uff0c\u7a0d\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval(ID)")," \u6765\u6e05\u9664\uff0c\u8fd4\u56de\u7684 intervalID \u662f\u4e00\u4e2a\u975e\u96f6\u6570\u503c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let timerId = setTimeout(() => alert("never happens"), 1000);\nalert(timerId); // \u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\n\nclearTimeout(timerId); // \u5728\u8fd0\u884c\u524d\u53d6\u6d88\u4e86\u5b9a\u65f6\u5668\nalert(timerId); // \u8fd8\u662f\u8fd9\u4e2a\u6807\u8bc6\u7b26\uff08\u5e76\u6ca1\u6709\u56e0\u4e3a\u8c03\u5ea6\u88ab\u53d6\u6d88\u4e86\u800c\u53d8\u6210 null\uff09\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u662f\u4e00\u4e2a\u6570\u5b57\u3002\u5728\u5176\u4ed6\u73af\u5883\u4e2d\uff0c\u53ef\u80fd\u662f\u5176\u4ed6\u7684\u4e1c\u897f\u3002\u4f8b\u5982 Node.js \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5b9a\u65f6\u5668\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5305\u542b\u4e00\u7cfb\u5217\u65b9\u6cd5\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setInterval()"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"setTimeout()"),"\u5171\u4eab\u540c\u4e00\u4e2a ID \u6c60\uff0c\u5e76\u4e14 ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval()"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"clearTimeout()"),"\u5728\u6280\u672f\u4e0a\u662f\u53ef\u4e92\u6362\u4f7f\u7528\u7684\u3002\u4f46\u662f\uff0c\u6211\u4eec\u5fc5\u987b\u53bb\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"clearInterval()"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"clearTimeout()"),"\u5bf9\u5e94\u7684 id\uff0c\u4ee5\u907f\u514d\u4ee3\u7801\u6742\u4e71\u65e0\u7ae0\uff0c\u589e\u5f3a\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u3002"),(0,i.kt)("h2",{id:"setinterval-\u7684\u6267\u884c\u65f6\u95f4"},"setInterval \u7684\u6267\u884c\u65f6\u95f4"),(0,i.kt)("p",null,"\u662f\u8bbe\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u540e\u624d\u5f00\u59cb\u7b2c\u4e00\u6b21\u6267\u884c\uff0c\u5e76\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u5982\u4f55\u8ba9\u4ed6\u5148\u7acb\u5373\u6267\u884c\u518d\u5b9a\u65f6\u6267\u884c\u5462\uff1f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5e38\u89c4\u65b9\u6cd5\u5c01\u88c5\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval"),"\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const target = () => {\n  console.log("Do something...");\n};\n\ntarget(); //\u5148\u8c03\u7528\u4e00\u6b21\u7136\u540e\u518dsetInterval\nsetInterval(target, 1000);\n')),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u5c01\u88c5\u4e00\u4e0b\uff0c\u5728\u8c03\u7528\u4e4b\u524d\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u8c03\u7528\u8fc7\uff0c\u5df2\u7ecf\u8c03\u7528\u8fc7\u5148\u6e05\u9664\uff0c\u518d\u91cd\u65b0\u8c03\u7528\u3002"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const setIntervalImmediately = (func, interval) => {\n  func();\n  return setInterval(func, interval);\n};\n\n// \u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u7684\u5b9a\u65f6\u5668\u53d8\u91cftimer\uff0c\u7528\u4e8e\u4fdd\u5b58\u548c\u6e05\u9664\u5b9a\u65f6\u5668\n// \u8c03\u7528\u4e4b\u524d\uff0c\u68c0\u67e5\u5b9a\u65f6\u5668\u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u5219\u6e05\u9664\ntimer && clearInterval(timer);\ntimer = setIntervalImmediately(target, 1000);\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8ba9\u8c03\u7528\u7684\u51fd\u6570\u8fd4\u56de\u5b83\u672c\u8eab\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const target = () => {\n  console.log("Do something...");\n  return target;\n};\n\ntimer && clearInterval(timer);\ntimer = setInterval(target(), 1000); //\u8fd9\u91cc\u76ee\u6807\u51fd\u6570\u662ftarget\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u4f1a\u5148\u6267\u884c\u4e00\u6b21\uff0c\u7136\u540e\u5c06\u8fd4\u56de\u503c\u653e\u5230setInterval\u7684\u961f\u5217\u91cc\uff0c\u5f88\u5de7\u5999\uff01\n')))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"setImmediatelyInterval")," \u6bd4\u8f83\u901a\u7528\uff0c\u6bd4\u8f83\u7075\u6d3b\uff0c\u591a\u4eba\u5408\u4f5c\u4e5f\u53ef\u4ee5\u5f53\u4f5c\u516c\u7528\u51fd\u6570 utils\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u76ee\u6807\u51fd\u6570\u8fd4\u56de\u81ea\u8eab\u7f3a\u5c11\u4e00\u5b9a\u7684\u7075\u6d3b\u6027\uff0c\u5982\u679c\u60f3\u8981\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u503c\u5c31\u4e0d\u884c\u4e86\u3002\u540c\u65f6 ",(0,i.kt)("inlineCode",{parentName:"li"},"setinterval")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," \u589e\u52a0\u4e86\u8026\u5408\u6027\uff0c\u72ec\u81ea\u5f00\u53d1\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f7f\u7528\u7684\u573a\u666f\u53d7\u9650\u3002")))),(0,i.kt)("h2",{id:"\u5468\u671f\u6027\u8c03\u5ea6"},"\u5468\u671f\u6027\u8c03\u5ea6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://zh.javascript.info/settimeout-setinterval#setinterval"},"\u8c03\u5ea6\uff1asetTimeout \u548c setInterval"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"setInterval \u8fdb\u884c\u5468\u671f\u6027\u8c03\u5ea6\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5d4c\u5957\u7684 setTimeout \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u5468\u671f\u6027\u8fd0\u884c\u7684\u7ed3\u679c\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let timerId = setTimeout(function tick() {\n  alert("tick");\n  timerId = setTimeout(tick, 2000); //\u7b2c\u4e00\u6b21\u6267\u884c\u4e86tick \u4e4b\u540e\u53c8\u6302\u4e0a\u4e86\u7b2c\u4e8c\u6b21\n}, 2000);\n')),(0,i.kt)("p",{parentName:"li"},"\u5d4c\u5957\u7684 setTimeout \u8981\u6bd4 setInterval \u7075\u6d3b\u5f97\u591a\u3002\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5",(0,i.kt)("strong",{parentName:"p"},"\u6839\u636e\u5f53\u524d\u6267\u884c\u7ed3\u679c\u6765\u8c03\u5ea6\u4e0b\u4e00\u6b21\u8c03\u7528"),"\uff0c\u56e0\u6b64\u4e0b\u4e00\u6b21\u8c03\u7528\u53ef\u4ee5\u4e0e\u5f53\u524d\u8fd9\u4e00\u6b21\u4e0d\u540c\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5d4c\u5957\u7684 setTimeout \u80fd\u591f\u76f8\u5bf9\u7cbe\u786e\u5730\u8bbe\u7f6e\u4e24\u6b21\u6267\u884c\u4e4b\u95f4\u7684\u5ef6\u65f6\uff0c\u800c setInterval \u5374\u4e0d\u80fd\u3002")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"setInterval \u662f\u6bcf\u95f4\u9694\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u5411\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u6b21\u76ee\u6807\u51fd\u6570\u3002\u4e0d\u4f1a\u5173\u5fc3\u524d\u4e00\u6b21\u6267\u884c\u8017\u8d39\u4e86\u591a\u4e45\uff0c\u524d\u4e00\u6b21\u6267\u884c\u662f\u5426\u6267\u884c\u5b8c\u6bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"setTimeout \u662f\u5728\u5f53\u524d\u76ee\u6807\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u624d\u8bbe\u7f6e\u5728\u95f4\u9694\u65f6\u95f4\u540e\u6267\u884c\u4e0b\u4e00\u6b21\u8c03\u7528\u3002")))),(0,i.kt)("h2",{id:"setinterval-\u5b58\u5728\u7684\u95ee\u9898"},"setInterval \u5b58\u5728\u7684\u95ee\u9898"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u81ea\u5df1\u8c03\u7528\u7684\u4ee3\u7801\u662f\u5426\u62a5\u9519\u8fd9\u4ef6\u4e8b\u6f20\u4e0d\u5173\u5fc3\u3002\u6bcf\u95f4\u9694\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u5411\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u6b21\u76ee\u6807\u51fd\u6570\u3002\u4e0d\u4f1a\u5173\u5fc3\u524d\u4e00\u6b21\u6267\u884c\u8017\u8d39\u4e86\u591a\u4e45\uff0c\u524d\u4e00\u6b21\u6267\u884c\u662f\u5426\u6267\u884c\u5b8c\u6bd5\uff0c\u524d\u4e00\u6b21\u662f\u5426\u6b63\u786e\u6267\u884c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u65e0\u89c6\u51fd\u6570\u8fd0\u884c\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5728\u5f02\u6b65\u8c03\u7528\u4e2d\u3002\u5047\u5982\u5728 setInterval \u91cc\u6dfb\u52a0\u4e86 ajax \u8c03\u7528\uff0c\u8fd4\u56de\u65f6\u95f4\u957f\u4e8e delay \u7684\u65f6\u95f4\uff0c\u7f51\u7edc\u961f\u5217\u4f1a\u585e\u6ee1 ajax \u8c03\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0d\u4fdd\u8bc1\u4e00\u5b9a\u4f1a\u6267\u884c\uff0c\u6709\u4e9b\u8c03\u7528\u53ef\u80fd\u76f4\u63a5\u4f1a\u88ab\u5ffd\u7565\u3002 \u5f53\u5230\u4e86\u8981\u6dfb\u52a0\u4efb\u52a1\u5230\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u65f6\u95f4\uff0c\u5982\u679c\u4e0a\u4e00\u4e2a\u76ee\u6807\u4efb\u52a1\u8fd8\u5728\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u6b64\u6b21\u4efb\u52a1\u5c06\u4f1a\u88ab\u8df3\u8fc7\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6bcf\u4e2a setTimeout \u4ea7\u751f\u7684\u4efb\u52a1\u4f1a\u76f4\u63a5 push \u5230\u4efb\u52a1\u961f\u5217\u4e2d\uff1b\u800c setInterval \u5728\u6bcf\u6b21\u628a\u4efb\u52a1 push \u5230\u4efb\u52a1\u961f\u5217\u524d\uff0c\u90fd\u8981\u8fdb\u884c\u4e00\u4e0b\u5224\u65ad(\u770b\u4e0a\u6b21\u7684\u4efb\u52a1\u662f\u5426\u4ecd\u5728\u961f\u5217\u4e2d\uff0c\u5982\u679c\u6709\u5219\u4e0d\u6dfb\u52a0\uff0c\u6ca1\u6709\u5219\u6dfb\u52a0)\u3002")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5d4c\u5957\u7684 setTimeout \u6bd4 setInterval \u4f7f\u7528\u8303\u56f4\u66f4\u5e7f\uff0c\u5c24\u5176\u662f\u5728\u5f02\u6b65\u64cd\u4f5c\uff0c\u6d89\u53ca ajax \u65f6\uff08\u4e0d\u8003\u8651 websocket\uff09\uff0c\u65e0\u6cd5\u9884\u77e5\u591a\u4e45\u624d\u80fd\u6709\u8fd4\u56de\u7ed3\u679c\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u786e\u5b9e\u8981\u4fdd\u8bc1\u4e8b\u4ef6\u201c\u5300\u901f\u201d\u88ab\u89e6\u53d1\uff0c\u90a3\u53ef\u4ee5\u7528\u5e0c\u671b\u7684\u5ef6\u8fdf\u51cf\u53bb\u4e0a\u6b21\u8c03\u7528\u6240\u82b1\u65f6\u95f4\uff0c\u7136\u540e\u5c06\u5f97\u5230\u7684\u5dee\u503c\u4f5c\u4e3a\u5ef6\u8fdf\u52a8\u6001\u6307\u5b9a\u7ed9 setTimeout\u3002"))),(0,i.kt)("h2",{id:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417"},"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417\uff1f"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6307\u5b9a\u7684\u65f6\u95f4\uff08\u6216\u5ef6\u8fdf\uff09\u4e0d\u80fd\u4fdd\u8bc1\u5728\u6307\u5b9a\u7684\u786e\u5207\u65f6\u95f4\u4e4b\u540e\u6267\u884c\uff0c\u800c\u662f\u6700\u77ed\u7684\u5ef6\u8fdf\u6267\u884c\u65f6\u95f4\u3002\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u5806\u6808\u4e3a\u7a7a\u4e4b\u524d\uff0c\u4f20\u9012\u7ed9\u8fd9\u4e9b\u51fd\u6570\u7684\u56de\u8c03\u5c06\u65e0\u6cd5\u8fd0\u884c\u3002"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval"},"MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_39075021/article/details/110137215"},"JS setInterval \u51fd\u6570\u4ece\u7acb\u5373\u6267\u884c\u5230\u5b9a\u65f6\u6267\u884c\u7684\u4e09\u79cd\u65b9\u6848")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zh.javascript.info/settimeout-setinterval#setinterval"},"\u8c03\u5ea6\uff1asetTimeout \u548c setInterval")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903773622501383#heading-15"},"\u6df1\u5ea6\u89e3\u5bc6 setTimeout \u548c setInterval\u2014\u2014\u4e3a setInterval \u6b63\u540d\uff01 - \u6398\u91d1"))))}v.isMDXComponent=!0}}]);