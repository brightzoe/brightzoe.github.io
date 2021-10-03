"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7179],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(n),f=o,d=k["".concat(u,".").concat(f)]||k[f]||i[f]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),s=["components"],l={},u="Hooks",c={unversionedId:"React/hooks",id:"React/hooks",isDocsHomePage:!1,title:"Hooks",description:"\u6ce8\uff1a \u672c\u6587\u6240\u6709\u6817\u5b50\u5747\u5728\uff1a https://codesandbox.io/s/hook-e49wk",source:"@site/docs/React/hooks.md",sourceDirName:"React",slug:"/React/hooks",permalink:"/docs/React/hooks",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/React/hooks.md",tags:[],version:"current",lastUpdatedAt:1633247046,formattedLastUpdatedAt:"10/3/2021",frontMatter:{},sidebar:"React",previous:{title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5 -\u6398\u91d1\u5c0f\u518c",permalink:"/docs/React/designPatternAndBestPractices"},next:{title:"react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f",permalink:"/docs/React/passParamsInReact"}},p=[{value:"useEffect",id:"useeffect",children:[]},{value:"useMemo",id:"usememo",children:[]},{value:"useCallback",id:"usecallback",children:[]},{value:"useContext",id:"usecontext",children:[]},{value:"useReducer",id:"usereducer",children:[]},{value:"UseRef",id:"useref",children:[]},{value:"\u81ea\u5b9a\u4e49 hook:",id:"\u81ea\u5b9a\u4e49-hook",children:[]},{value:"forwardRef",id:"forwardref",children:[]},{value:"useImperativeHandle",id:"useimperativehandle",children:[]},{value:"\u81ea\u5b9a\u4e49 hook",id:"\u81ea\u5b9a\u4e49-hook-1",children:[]},{value:"Reference",id:"reference",children:[]}],i={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks"},"Hooks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a \u672c\u6587\u6240\u6709\u6817\u5b50\u5747\u5728\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk"},"https://codesandbox.io/s/hook-e49wk"))),(0,r.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6 App\uff0c\u5728\u6bcf\u4e00\u6b21\u6e32\u67d3\u90fd\u4f1a\u88ab\u8c03\u7528\uff0c\u800c\u6bcf\u4e00\u6b21\u8c03\u7528\u90fd\u4f1a\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u4e0a\u4e0b\u6587\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u4e2a\u5feb\u7167\u3002\u6bcf\u4e00\u6b21\u6e32\u67d3\u5f62\u6210\u7684\u5feb\u7167\uff0c\u90fd\u662f\u4e92\u76f8\u72ec\u7acb\u7684\u3002"),(0,r.kt)("h3",{id:"useeffect"},"useEffect"),(0,r.kt)("p",null,"\u6bcf\u6b21\u6e32\u67d3\u51fd\u6570\u7ec4\u4ef6\u65f6\uff0cuseEffect \u90fd\u662f\u65b0\u7684\uff0c\u90fd\u662f\u4e0d\u4e00\u6837\u7684\u3002\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u4f1a\u91cd\u65b0\u6267\u884c useEffect \u5185\u7684\u56de\u8c03\uff0c\u5e76\u4e14 \u91cc\u9762 count \u503c\u4e5f\u662f\u5f53\u65f6\u7684\u5feb\u7167\u7684\u4e00\u4e2a\u5e38\u91cf\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useEffect.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useEffect.js")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u9879\u5982\u679c\u662f\u5bf9\u8c61\uff0c\u53ea\u80fd\u6d45\u6bd4\u8f83\uff0c\u662f\u4e0d\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002\u5982\u679c\u9700\u8981\u6df1\u6bd4\u8f83\uff0c\u5b9e\u73b0\u65b9\u5f0f\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},' useDeepCompareEffect from "react-use/lib/useDeepCompareEffect";'))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762 useCallback,useMemo \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u540c useEffect \uff0c\u5b83\u662f\u7528\u4e8e\u76d1\u542c\u4f60\u9700\u8981\u76d1\u542c\u7684\u53d8\u91cf\uff0c\u5982\u5728\u6570\u7ec4\u5185\u6dfb\u52a0 name\u3001phone\u3001\u7b49\u53c2\u6570\uff0c\u5f53\u6539\u53d8\u5176\u4e2d\u7684\u503c\uff0c\u90fd\u4f1a\u89e6\u53d1\u5b50\u7ec4\u4ef6\u526f\u4f5c\u7528\u7684\u6267\u884c\u3002\u5982\u679c\u4e0d\u6dfb\u52a0\u4f9d\u8d56\uff0c\u5219\u5728\u4efb\u4f55\u91cd\u65b0\u6e32\u67d3\u65f6\u90fd\u4f1a\u6267\u884c\u3002useMemo \u548c useCallback\uff0c\u90fd\u80fd\u4e3a\u300c\u91cd\u590d\u6e32\u67d3\u300d\u8fd9\u4e2a\u95ee\u9898\uff0c\u63d0\u4f9b\u5f88\u597d\u7684\u5e2e\u52a9\u3002useCallback \u662f\u300cuseMemo \u7684\u8fd4\u56de\u503c\u4e3a\u51fd\u6570\u300d\u65f6\u7684\u7279\u6b8a\u60c5\u51b5\uff0c\u662f React \u63d0\u4f9b\u7684\u4fbf\u6377\u65b9\u5f0f\u3002")),(0,r.kt)("h3",{id:"usememo"},"useMemo"),(0,r.kt)("p",null,"\u89e3\u51b3\u7236\u7ec4\u4ef6\u66f4\u65b0\u5f15\u8d77\u5b50\u7ec4\u4ef6\u66f4\u65b0\u7684\u95ee\u9898\uff0c\u544a\u8bc9\u5b50\u7ec4\u4ef6\u9700\u8981\u5728\u4ec0\u4e48\u65f6\u5019\u66f4\u65b0\uff0c\u4ec0\u4e48\u65f6\u5019\u4e0d\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"\u76f8\u5f53\u4e8e\u628a\u7236\u7ec4\u4ef6\u9700\u8981\u4f20\u9012\u7684\u53c2\u6570\u505a\u4e86\u4e00\u4e2a\u6807\u8bb0\uff0c\u53c2\u6570\u66f4\u65b0\u65f6\u66f4\u65b0\u5b50\u7ec4\u4ef6\u3002\u65e0\u8bba\u7236\u7ec4\u4ef6\u5176\u4ed6\u72b6\u6001\u66f4\u65b0\u4efb\u4f55\u503c\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cd\u8981\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useMemo.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useMemo.js")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f20\u9012\u7ed9 useMemo \u7684\u51fd\u6570\u5728\u6e32\u67d3\u671f\u95f4\u8fd0\u884c\uff0c\u6ce8\u610f\u91cc\u9762\u7684\u903b\u8f91\u4e0d\u8981\u518d\u6b21\u89e6\u53d1\u6e32\u67d3\uff0c\u526f\u4f5c\u7528\u5e94\u8be5\u653e\u5728 useEffect \u91cc\u9762\u3002",(0,r.kt)("br",null),"\n\u5c06 useMemo \u4f5c\u4e3a\u6027\u80fd\u4f18\u5316\uff0c\u800c\u4e0d\u662f\u8bed\u4e49\u4fdd\u8bc1\uff0c\u56e0\u4e3a React \u6709\u53ef\u80fd\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5fd8\u6389\u8bb0\u4f4f\u7684\u503c\uff0c\u91cd\u65b0\u8ba1\u7b97\u3002")),(0,r.kt)("h4",{id:"reactmemo-\u4e0e-usememo"},"React.memo \u4e0e useMemo"),(0,r.kt)("p",null,"\u5f00\u59cb\u603b\u662f\u5f04\u6df7\u3002"),(0,r.kt)("p",null,"React.memo \u662f\u5305\u88c5\u6574\u4e2a\u7ec4\u4ef6\uff0c\u53ea\u662f\u6d45\u6bd4\u8f83 props \u6765\u786e\u5b9a\u662f\u5426\u91cd\u65b0\u6e32\u67d3\uff0c\u5f53\u7136\u53ef\u4ee5\u624b\u52a8\u5199\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6bd4\u8f83\u5177\u4f53 props \u7684\u4e0d\u540c\u6765\u8fdb\u884c re-render. ",(0,r.kt)("strong",{parentName:"p"},"\u5bf9\u7ec4\u4ef6\u5916\u5c42\u8fdb\u884c\u5305\u88c5\uff0c\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u91cd\u65b0\u6e32\u67d3")),(0,r.kt)("p",null,"useMemo \u662f\u5b9e\u73b0\u5c40\u90e8 pure \u7684\u529f\u80fd\uff0c\u63a7\u5236\u7ec4\u4ef6\u7684\u90e8\u5206\u5185\u5bb9\u4e0d\u8981 re-render\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u7ec4\u4ef6\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"React.memo \u4e0e useMemo ",(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/105940433"},"https://zhuanlan.zhihu.com/p/105940433"))),(0,r.kt)("h3",{id:"usecallback"},"useCallback"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useCallback.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useCallback.js")),(0,r.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000020108840"},"https://segmentfault.com/a/1190000020108840")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6bd4\u8f83\u5f15\u7528\uff0c\u914d\u5408\u4f7f\u7528 React.memo:\n",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useCallback%2BReact.memo.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useCallback%2BReact.memo.js")),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 React.memo \u5c06\u5b50\u7ec4\u4ef6\u4f5c\u4e3a pureComponent,\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002useCallback \u7f13\u5b58 props \u4e2d\u7684\u51fd\u6570\uff0c\u51cf\u5c11 props \u4e0d\u5fc5\u8981\u7684\u53d8\u5316\u5bfc\u81f4\u7684\u6e32\u67d3\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const Child = React.memo(function ({ val, onChange }) {\n    console.log("render...", val);\n    return <input value={val} onChange={onChange} />;\n});\n\nfunction App() {\n    const [val1, setVal1] = useState("");\n    const [val2, setVal2] = useState("");\n\n    //\u5982\u679c\u4e0d\u7528useCallback, \u4efb\u4f55\u4e00\u4e2a\u8f93\u5165\u6846\u7684\u53d8\u5316\u90fd\u4f1a\u5bfc\u81f4\u53e6\u4e00\u4e2a\u8f93\u5165\u6846\u91cd\u65b0\u6e32\u67d3\n    //\u4e00\u4e2a\u8f93\u5165\u6846\u53d8\u5316\uff0c\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u5bfc\u81f4\u751f\u6210\u65b0\u7684onChange\u51fd\u6570\uff0cprops \u53d8\u5316\u4e86\uff0c\u5219\u5b50\u7ec4\u4ef6\u4e5f\u91cd\u65b0\u6e32\u67d3\n    const onChange1 = useCallback((evt) => {\n        setVal1(evt.target.value);\n    }, []);\n\n    const onChange2 = useCallback((evt) => {\n        setVal2(evt.target.value);\n    }, []);\n\n    return (\n        <>\n            <Child val={val1} onChange={onChange1} />\n            <Child val={val2} onChange={onChange2} />\n        </>\n    );\n}\n')),(0,r.kt)("p",{parentName:"li"},"TODO: ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/usecallbackzidingyihook-gydlj"},"https://codesandbox.io/s/usecallbackzidingyihook-gydlj"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u6309\u9700\u52a0\u8f7d,\u914d\u5408\u4f7f\u7528 useEffect:\nuseCallback \u652f\u6301\u6211\u4eec\u7f13\u5b58\u67d0\u4e00\u51fd\u6570\uff0c\u5f53\u4e14\u4ec5\u5f53\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u624d\u66f4\u65b0\u8be5\u51fd\u6570\u3002\u8fd9\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u5728\u5b50\u7ec4\u4ef6\u4e2d\u914d\u5408 useEffect \uff0c\u5b9e\u73b0\u6309\u9700\u52a0\u8f7d\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Parent() {\n  const [count, setCount] = useState(0);\n  const [query, setQuery] = useState('keyword');\n\n  const getData = useCallback(() => {\n  const url = `https://mocks.alibaba-inc.com/mock/fO87jdfKqX/demo/queryData.json?query=${query}`;\n    // \u8bf7\u6c42\u6570\u636e...\n    console.log(`\u8bf7\u6c42\u8def\u5f84\u4e3a\uff1a${url}`);\n  }, [query]); // \u5f53\u4e14\u4ec5\u5f53 query \u6539\u53d8\u65f6 getData \u624d\u66f4\u65b0\n\n// \u8ba1\u6570\u503c\u7684\u53d8\u5316\u5e76\u4e0d\u4f1a\u5f15\u8d77 Child \u91cd\u65b0\u8bf7\u6c42\u6570\u636e\n  return (\n    <>\n    <h4>\u8ba1\u6570\u503c\u4e3a\uff1a{count}</h4>\n    <button onClick={() => setCount(count + 1)}> +1 </button>\n    <input onChange={(e) => {setQuery(e.target.value)}} />\n    <Child getData={getData} />\n    </>\n  );\n}\n\nfunction Child({getData}) {\n  useEffect(() => {\n    getData();\n  }, [getData]); // \u51fd\u6570\u53ef\u4ee5\u4f5c\u4e3a\u4f9d\u8d56\u9879\u53c2\u4e0e\u5230\u6570\u636e\u6d41\u4e2d\n\n  return (\n  // ...\n  );\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u51b3 eslint:exhaustive-deps,\u4f9d\u8d56\u9519\u8bef\u7684\u76f8\u5173\u95ee\u9898\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook"},"https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"context \u4f7f\u7528\u65b9\u5f0f\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hooks-api-otmq6?file=/src/useContextExample.js"},"https://codesandbox.io/s/hooks-api-otmq6?file=/src/useContextExample.js")))),(0,r.kt)("h3",{id:"usecontext"},"useContext"),(0,r.kt)("h3",{id:"usereducer"},"useReducer"),(0,r.kt)("p",null,"\u76f8\u6bd4\u4e8e useState,useReducer \u66f4\u9002\u5408\uff1a"),(0,r.kt)("p",null,"\u4f8b\u5982 state \u903b\u8f91\u5904\u7406\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c\uff0c\u6216\u8005\u4e0b\u4e00\u4e2a state \u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 state \u7b49\u573a\u666f\u3002"),(0,r.kt)("p",null,"\u57fa\u7840\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n    switch (action.type) {\n        case "increment":\n            return { count: state.count + 1 };\n        case "decrement":\n            return { count: state.count - 1 };\n        default:\n            throw new Error();\n    }\n}\n\nfunction Counter() {\n    const [state, dispatch] = useReducer(reducer, initialState);\n    return (\n        <>\n            Count: {state.count}\n            <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n            <button onClick={() => dispatch({ type: "increment" })}>+</button>\n        </>\n    );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"useState,useReducer \u90fd\u63d0\u4f9b\u4e86\u60f0\u6027\u521d\u59cb\u5316\u7684\u65b9\u5f0f\u3002\u53ef\u4ee5\u901a\u8fc7\u51fd\u6570\u8ba1\u7b97\u521d\u59cb\u503c\u3002")),(0,r.kt)("p",null,"useReducer \u53ea\u652f\u6301\u540c\u6b65,\u5982\u4f55\u4f7f\u7528\u5f02\u6b65\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch"},"Reference5")),(0,r.kt)("h3",{id:"useref"},"UseRef"),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u5176 .current \u5c5e\u6027\u88ab\u521d\u59cb\u5316\u4e3a\u4f20\u5165\u7684\u53c2\u6570\uff08initialValue\uff09\u3002\u8fd4\u56de\u7684 ref \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u6301\u7eed\u5b58\u5728\u3002"),(0,r.kt)("p",null,"\u57fa\u672c\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//\u8bbf\u95eeDOM\u5143\u7d20\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` \u6307\u5411\u5df2\u6302\u8f7d\u5230 DOM \u4e0a\u7684\u6587\u672c\u8f93\u5165\u5143\u7d20\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n\n//\u4e5f\u53ef\u4ee5\u7528\u6765\u5b58\u653e\u53d8\u91cf\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"useRef \u4f1a\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u8fd4\u56de\u540c\u4e00\u4e2a ref \u5bf9\u8c61\u3002\u53d8\u66f4 .current \u5c5e\u6027\u4e0d\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u60f3\u8981\u5728 React \u7ed1\u5b9a\u6216\u89e3\u7ed1 DOM \u8282\u70b9\u7684 ref \u65f6\u8fd0\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u5219\u9700\u8981\u4f7f\u7528\u56de\u8c03 ref \u6765\u5b9e\u73b0\u3002")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49-hook"},"\u81ea\u5b9a\u4e49 hook:"),(0,r.kt)("p",null,"\u5c01\u88c5\u4e00\u6bb5\u903b\u8f91\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u8bf7\u6c42\u516c\u5171\u6570\u636e\u7684\u63a5\u53e3\uff0c\u5728\u591a\u4e2a\u9875\u9762\u4e2d\u88ab\u91cd\u590d\u4f7f\u7528\uff0c\u4f60\u4fbf\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49 Hook \u7684\u5f62\u5f0f\uff0c\u5c06\u8bf7\u6c42\u903b\u8f91\u63d0\u53d6\u51fa\u6765\u516c\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useApi.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useApi.js")),(0,r.kt)("h3",{id:"forwardref"},"forwardRef"),(0,r.kt)("p",null,"ref \u8f6c\u53d1\uff0c\u65b9\u4fbf\u7236\u7ec4\u4ef6\u62ff\u5230\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002\u628a\u81ea\u8eab\u5916\u9762\u7684 ref \u8f6c\u53d1\u5230\u5185\u90e8\u7684\u7ec4\u4ef6\uff0c\u4f7f\u5199\u5728\u81ea\u5df1\u8eab\u4e0a\u7684 ref \u4e0d\u6307\u5411\u81ea\u5df1\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function A(props, parentRef) {\n    return (\n        <div>\n            <input type="text" ref={parentRef} />\n        </div>\n    );\n}\n\nlet ForwardChild = forwardRef(A); // \u628a\u5b50\u7ec4\u4ef6\u5305\u88f9\u8d77\u6765\n\nexport default function App() {\n    const parentRef = useRef();\n    function focusHander() {\n        console.log("input\u7684value", parentRef.current.value);\n    }\n    return (\n        <div>\n            <ForwardChild ref={parentRef} />\n            <button onClick={focusHander}>\u83b7\u53d6\u7126\u70b9</button>\n        </div>\n    );\n}\n')),(0,r.kt)("h3",{id:"useimperativehandle"},"useImperativeHandle"),(0,r.kt)("p",null,"\u4e00\u822c\u7ed3\u5408 forwardRef \u4f7f\u7528\uff0c\u5728 ref \u8f6c\u53d1\u5230\u7ec4\u4ef6\u5185\u90e8\u65f6\uff0c\u9009\u62e9\u66b4\u9732\u4e00\u4e9b\u7279\u5b9a\u7684\u503c\u6216\u65b9\u6cd5\u7ed9\u7236\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u4f7f\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"useImperativeHandle \u53ef\u4ee5\u8ba9\u4f60\u5728\u4f7f\u7528 ref \u65f6\uff0c\u81ea\u5b9a\u4e49\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u503c\uff0c\u4e0d\u80fd\u8ba9\u7236\u7ec4\u4ef6\u60f3\u5e72\u561b\u5c31\u5e72\u561b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7 useImperativeHandle \uff0c\u5b50\u7ec4\u4ef6\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5f88\u591a\u7684 ref,\u53ef\u4ee5\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\u64cd\u4f5c\u5b50\u7ec4\u4ef6\u5185\u90e8\u7684\u591a\u4e2a ref"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Child(props,parentRef){\n  // \u5b50\u7ec4\u4ef6\u5185\u90e8\u81ea\u5df1\u521b\u5efa ref\n  let focusRef = useRef();\n  let inputRef = useRef();\n  useImperativeHandle(parentRef,()=>(\n    // \u8fd9\u4e2a\u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\n    // \u8be5\u5bf9\u8c61\u4f1a\u4f5c\u4e3a\u7236\u7ec4\u4ef6 current \u5c5e\u6027\u7684\u503c\n    // \u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u7236\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u64cd\u4f5c\u5b50\u7ec4\u4ef6\u4e2d\u7684\u591a\u4e2a ref\n      return {\n      focusRef,\n      inputRef,\n      name:'\u8ba1\u6570\u5668',\n      focus(){\n          focusRef.current.focus();\n      },\n      changeText(text){\n          inputRef.current.value = text;\n      }\n    }\n  });\n  return (\n    <>\n      <input ref={focusRef}/>\n      <input ref={inputRef}/>\n    </>\n  )\n}\nChild = forwardRef(Child);\n")))),(0,r.kt)("p",null,"\u6817\u5b50\u89c1\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/forwardRef.js")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49-hook-1"},"\u81ea\u5b9a\u4e49 hook"),(0,r.kt)("p",null,"\u5c01\u88c5\u4e00\u6bb5\u903b\u8f91\u3002\u6bd4\u5982\u6709\u4e00\u4e2a\u8bf7\u6c42\u516c\u5171\u6570\u636e\u7684\u63a5\u53e3\uff0c\u5728\u591a\u4e2a\u9875\u9762\u4e2d\u88ab\u91cd\u590d\u4f7f\u7528\uff0c\u4f60\u4fbf\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49 Hook \u7684\u5f62\u5f0f\uff0c\u5c06\u8bf7\u6c42\u903b\u8f91\u63d0\u53d6\u51fa\u6765\u516c\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/hook-e49wk?file=/src/useApi.js"},"https://codesandbox.io/s/hook-e49wk?file=/src/useApi.js")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback"},"React \u6587\u6863-useCallback")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000020108840"},"\u4f60\u4e0d\u77e5\u9053\u7684 useCallback")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/328540840"},"\u5f53\u6211\u4eec\u8ba8\u8bba hooks \u65f6\u5728\u8ba8\u8bba\u4ec0\u4e48")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/book/6966551262766563328/section/6967228489208430603"},"hook \u4e00\u4e9b\u57fa\u7840")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch"},"useReducer async")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904153584500749#heading-0"},(0,r.kt)("strong",{parentName:"a"},"React Hooks \u7cfb\u5217\u4e4b 3 useContext - \u6398\u91d1"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903985338400782#heading-27"},"React Hooks \u8be6\u89e3 \u3010\u8fd1 1W \u5b57\u3011+ \u9879\u76ee\u5b9e\u6218 - \u6398\u91d1"))))}k.isMDXComponent=!0}}]);