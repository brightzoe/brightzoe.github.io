"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4714],{6773:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var c=r(1527),t=r(4744);const i={},s="\u95ed\u5305",o={id:"fe-basic/javascript/basic/closure",title:"\u95ed\u5305",description:"\u4ec0\u4e48\u662f\uff1a \u6709\u6743\u8bbf\u95ee\u5916\u90e8\u4f5c\u7528\u57df\u53d8\u91cf\u7684\u51fd\u6570\u3002",source:"@site/docs/fe-basic/javascript/basic/closure.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/closure",permalink:"/docs/fe-basic/javascript/basic/closure",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/closure.md",tags:[],version:"current",lastUpdatedAt:1701745042,formattedLastUpdatedAt:"2023\u5e7412\u67085\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"JavaScript",permalink:"/docs/fe-basic/javascript/"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/fe-basic/javascript/basic/data-types"}},l={},a=[{value:"\u4ec0\u4e48\u662f\u95ed\u5305",id:"\u4ec0\u4e48\u662f\u95ed\u5305",level:2},{value:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305",id:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305",level:3},{value:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f",id:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f",level:2},{value:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5",id:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5",level:3},{value:"\u5b9e\u9645\u573a\u666f",id:"\u5b9e\u9645\u573a\u666f",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"Reference",id:"reference",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"\u95ed\u5305",children:"\u95ed\u5305"}),"\n",(0,c.jsx)(e.p,{children:"\u4ec0\u4e48\u662f\uff1a \u6709\u6743\u8bbf\u95ee\u5916\u90e8\u4f5c\u7528\u57df\u53d8\u91cf\u7684\u51fd\u6570\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u4f18\u7f3a\u70b9\uff1a \u79c1\u6709\u5316\u6570\u636e\uff0c\u79c1\u6709\u5316\u7684\u57fa\u7840\u4e0a\u4fdd\u6301\u6570\u636e\u3002\u4f7f\u7528\u4e0d\u6070\u5f53\u5bb9\u6613\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5e94\u7528\uff1a \u8282\u6d41\u9632\u6296\uff0cvue react \u4e2d\u4e5f\u6709\u5f88\u591a\u5e94\u7528\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u95ed\u5305",children:"\u4ec0\u4e48\u662f\u95ed\u5305"}),"\n",(0,c.jsx)(e.h3,{id:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305",children:"\u5982\u4f55\u5b9a\u4e49\u95ed\u5305"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"\u51fd\u6570\u548c\u51fd\u6570\u5bf9\u5176\u8bcd\u6cd5\u73af\u5883\u7684\u5f15\u7528\u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u7684\u7ec4\u5408\u5c31\u662f\u95ed\u5305\u3002"})," - MDN"]}),"\n",(0,c.jsx)(e.p,{children:"\u4e0a\u7ea7\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\uff0c\u56e0\u4e3a\u88ab\u4e0b\u7ea7\u4f5c\u7528\u57df\u5185\u5f15\u7528\uff0c\u800c\u6ca1\u6709\u88ab\u91ca\u653e\uff0c\u5bfc\u81f4\u4e0a\u7ea7\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf\uff0c\u7b49\u5230\u4e0b\u7ea7\u4f5c\u7528\u57df\u6267\u884c\u5b8c\u540e\u624d\u5f97\u5230\u6b63\u5e38\u91ca\u653e\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u51fd\u6570\u548c\u51fd\u6570\u5185\u90e8\u80fd\u591f\u8bbf\u95ee\u5230\u7684\u53d8\u91cf\u7684\u603b\u548c\uff0c\u5c31\u6784\u6210\u4e00\u4e2a\u95ed\u5305\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u95ed\u5305\u5305\u542b\u51fd\u6570\u521b\u5efa\u65f6\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\uff0c\u5b83\u7c7b\u4f3c\u4e8e\u80cc\u5305\u3002\u51fd\u6570\u5b9a\u4e49\u9644\u5e26\u4e00\u4e2a\u5c0f\u80cc\u5305\uff0c\u5b83\u7684\u5305\u4e2d\u5b58\u50a8\u4e86\u51fd\u6570\u5b9a\u4e49\u521b\u5efa\u65f6\u6240\u5904\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\u3002",(0,c.jsx)(e.strong,{children:"\u95ed\u5305\u5728\u51fd\u6570\u521b\u5efa\u65f6\u4ea7\u751f\u3002"})]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://juejin.cn/post/6844903858636849159#heading-4",children:"\u6211\u4ece\u6765\u4e0d\u7406\u89e3 JavaScript \u95ed\u5305\uff0c\u76f4\u5230\u6709\u4eba\u8fd9\u6837\u5411\u6211\u89e3\u91ca\u5b83 - \u6398\u91d1"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"function createCounter() {\n  let counter = 0;\n  const myFunction = function () {\n    //counter \u5728myFunction \u521b\u5efa\u65f6\u5c31\u653e\u5728\u5b83\u7684\u5305\u5305\u91cc\u5566\n    counter = counter + 1;\n    return counter;\n  };\n  return myFunction;\n}\nconst increment = createCounter();\nconst c1 = increment(); //\u8fd9\u884c\u6267\u884c\u5b8c\u540e\uff0c\u95ed\u5305\u7684counter=1\uff0c\u8fd9\u4e2aincrement\u51fd\u6570\u88ab\u9500\u6bc1\uff0c\u4f46\u4e0b\u9762\u8fd8\u5b58\u5728\u5bf9increment \u7684\u5f15\u7528\uff0ccounter \u8fd8\u5728\u4e0d\u88ab\u9500\u6bc1\uff0c\u4e0b\u9762\u4f7f\u7528\u7684counter \u521d\u59cb\u503c\u4e3a1\nconst c2 = increment();\nconst c3 = increment();\nconsole.log('example increment', c1, c2, c3); //example increment 1 2 3\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u662f\u5426\u4efb\u4f55\u51fd\u6570\u90fd\u5177\u6709\u95ed\u5305\uff0c\u751a\u81f3\u662f\u5728\u5168\u5c40\u8303\u56f4\u5185\u521b\u5efa\u7684\u51fd\u6570\uff1f"}),"\n",(0,c.jsx)(e.p,{children:"\u7b54\u6848\u662f\u80af\u5b9a\u7684\u3002\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\u7684\u51fd\u6570\u4e5f\u521b\u5efa\u95ed\u5305\uff0c\u4f46\u662f\u7531\u4e8e\u8fd9\u4e9b\u51fd\u6570\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u521b\u5efa\u7684\uff0c\u6240\u4ee5\u5b83\u4eec\u53ef\u4ee5\u8bbf\u95ee\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684\u6240\u6709\u53d8\u91cf\uff0c\u800c\u5168\u5c40\u4f5c\u7528\u57df\u4e0d\u88ab\u9500\u6bc1\uff0c\u6240\u4ee5\u95ed\u5305\u7684\u6982\u5ff5\u5e76\u4e0d\u91cd\u8981\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u800c\u5f53\u51fd\u6570\u8fd4\u56de\u51fd\u6570\u65f6\uff0c\u95ed\u5305\u7684\u6982\u5ff5\u5c31\u53d8\u5f97\u66f4\u52a0\u91cd\u8981\u4e86\u3002\u8fd4\u56de\u7684\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u4e0d\u5c5e\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\u7684\u53d8\u91cf\uff0c\u4f46\u5b83\u4eec\u4ec5\u5b58\u5728\u4e8e\u5176\u95ed\u5305\u4e2d\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f",children:"\u95ed\u5305\u7684\u5e94\u7528\u573a\u666f"}),"\n",(0,c.jsx)(e.h3,{id:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5",children:"\u6a21\u62df\u79c1\u6709\u65b9\u6cd5"}),"\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u95ed\u5305\u6765\u5b9a\u4e49\u516c\u5171\u51fd\u6570\uff0c\u5e76\u4ee4\u5176\u53ef\u4ee5\u8bbf\u95ee\u79c1\u6709\u51fd\u6570\u548c\u53d8\u91cf\u3002\u8fd9\u4e2a\u65b9\u5f0f\u4e5f\u79f0\u4e3a\u6a21\u5757\u6a21\u5f0f\uff08module pattern\uff09\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"var makeCounter = function () {\n  var privateCounter = 0;\n  function changeBy(val) {\n    privateCounter += val;\n  }\n  return {\n    increment: function () {\n      changeBy(1);\n    },\n    decrement: function () {\n      changeBy(-1);\n    },\n    value: function () {\n      return privateCounter;\n    },\n  };\n};\n\nvar Counter1 = makeCounter();\nvar Counter2 = makeCounter(); //\u6bcf\u4e2a\u95ed\u5305\u90fd\u662f\u5f15\u7528\u81ea\u5df1\u8bcd\u6cd5\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf privateCounter ,\u5728\u4e00\u4e2a\u95ed\u5305\u5185\u5bf9\u53d8\u91cf\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u53e6\u5916\u4e00\u4e2a\u95ed\u5305\u4e2d\u7684\u53d8\u91cf\u3002\nconsole.log(Counter1.value()); /* logs 0 */\nCounter1.increment();\nCounter1.increment();\nconsole.log(Counter1.value()); /* logs 2 */\nCounter1.decrement();\nconsole.log(Counter1.value()); /* logs 1 */\nconsole.log(Counter2.value()); /* logs 0 */\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u6b21\u6211\u4eec\u53ea\u521b\u5efa\u4e86\u4e00\u4e2a\u8bcd\u6cd5\u73af\u5883\uff0c\u4e3a\u4e09\u4e2a\u51fd\u6570\u6240\u5171\u4eab\uff1a",(0,c.jsx)(e.code,{children:"Counter.increment"}),"\uff0c",(0,c.jsx)(e.code,{children:"Counter.decrement"})," \u548c ",(0,c.jsx)(e.code,{children:"Counter.value"}),"\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8be5\u5171\u4eab\u73af\u5883\u521b\u5efa\u4e8e\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684\u533f\u540d\u51fd\u6570\u4f53\u5185\u3002\u8fd9\u4e2a\u73af\u5883\u4e2d\u5305\u542b\u4e24\u4e2a\u79c1\u6709\u9879\uff1a\u540d\u4e3a ",(0,c.jsx)(e.code,{children:"privateCounter"})," \u7684\u53d8\u91cf\u548c\u540d\u4e3a ",(0,c.jsx)(e.code,{children:"changeBy"})," \u7684\u51fd\u6570\u3002\u8fd9\u4e24\u9879\u90fd\u65e0\u6cd5\u5728\u8fd9\u4e2a\u533f\u540d\u51fd\u6570\u5916\u90e8\u76f4\u63a5\u8bbf\u95ee\u3002\u5fc5\u987b\u901a\u8fc7\u533f\u540d\u51fd\u6570\u8fd4\u56de\u7684\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u8bbf\u95ee\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u8fd9\u4e09\u4e2a\u516c\u5171\u51fd\u6570\u662f\u5171\u4eab\u540c\u4e00\u4e2a\u73af\u5883\u7684\u95ed\u5305\u3002\u591a\u4e8f JavaScript \u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u5b83\u4eec\u90fd\u53ef\u4ee5\u8bbf\u95ee ",(0,c.jsx)(e.code,{children:"privateCounter"})," \u53d8\u91cf\u548c ",(0,c.jsx)(e.code,{children:"changeBy"})," \u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",children:"\u95ed\u5305 - JavaScript | MDN"})}),"\n",(0,c.jsx)(e.h3,{id:"\u5b9e\u9645\u573a\u666f",children:"\u5b9e\u9645\u573a\u666f"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u9632\u6296\uff0c\u8282\u6d41"}),"\n",(0,c.jsx)(e.li,{children:"\u51fd\u6570\u67ef\u91cc\u5316"}),"\n",(0,c.jsx)(e.li,{children:"react hooks \u6bcf\u6b21\u6e32\u67d3\u90fd\u4fdd\u5b58\u5f53\u65f6\u7684\u72b6\u6001\u5feb\u7167"}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"// \u51fd\u6570\u4f5c\u4e3a\u8fd4\u56de\u503c\nfunction create() {\n  let a = 100;\n  return function () {\n    console.log(a);\n  };\n}\nlet fn = create();\nlet a = 200;\nfn(); // 100\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"//\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\nfunction print(fn) {\n  let a = 200;\n  fn();\n}\nlet a = 100;\nfunction fn() {\n  console.log(a);\n}\nprint(fn); // 100\n"})}),"\n",(0,c.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://juejin.cn/post/6844903858636849159#heading-4",children:"\u6211\u4ece\u6765\u4e0d\u7406\u89e3 JavaScript \u95ed\u5305\uff0c\u76f4\u5230\u6709\u4eba\u8fd9\u6837\u5411\u6211\u89e3\u91ca\u5b83 - \u6398\u91d1"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures",children:"\u95ed\u5305 - JavaScript | MDN"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://juejin.cn/post/7088216038063472670#heading-0",children:"\u6211\u4ece\u6765\u4e0d\u7406\u89e3\u95ed\u5305\uff0c\u76f4\u5230\u6211\u8981\u53bb\u9762\u8bd5 - \u6398\u91d1"})}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},4744:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>s});var c=r(959);const t={},i=c.createContext(t);function s(n){const e=c.useContext(i);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);