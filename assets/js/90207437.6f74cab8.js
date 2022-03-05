"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[5763],{4137:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=["components"],s={},c="React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5 -\u6398\u91d1\u5c0f\u518c",p={unversionedId:"react/design-pattern-and-best-practices",id:"react/design-pattern-and-best-practices",isDocsHomePage:!1,title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5 -\u6398\u91d1\u5c0f\u518c",description:"1. \u5728 React \u4e2d\uff0c\u754c\u9762\u5b8c\u5168\u7531\u6570\u636e\u9a71\u52a8\uff1b",source:"@site/docs/react/design-pattern-and-best-practices.md",sourceDirName:"react",slug:"/react/design-pattern-and-best-practices",permalink:"/docs/react/design-pattern-and-best-practices",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/react/design-pattern-and-best-practices.md",tags:[],version:"current",lastUpdatedAt:1646492828,formattedLastUpdatedAt:"3/5/2022",frontMatter:{},sidebar:"React",previous:{title:"\u7406\u89e3React \u4e2d\u7684\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",permalink:"/docs/react/controlled-and-uncontrolled-components"},next:{title:"Hooks",permalink:"/docs/react/hooks"}},i=[{value:"\u5728\u8bbe\u8ba1 React \u7ec4\u4ef6\u65f6\uff0c\u8981\u6ce8\u610f\u4ee5\u4e0b\u539f\u5219\uff1a",id:"\u5728\u8bbe\u8ba1-react-\u7ec4\u4ef6\u65f6\u8981\u6ce8\u610f\u4ee5\u4e0b\u539f\u5219",children:[]},{value:"create-react-app",id:"create-react-app",children:[]},{value:"React \u4e2d\u7684\u6027\u80fd\u4f18\u5316",id:"react-\u4e2d\u7684\u6027\u80fd\u4f18\u5316",children:[{value:"\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0",id:"\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:i};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-\u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5--\u6398\u91d1\u5c0f\u518c"},"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5 -\u6398\u91d1\u5c0f\u518c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 React \u4e2d\uff0c\u754c\u9762\u5b8c\u5168\u7531\u6570\u636e\u9a71\u52a8\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728 React \u4e2d\uff0c\u4e00\u5207\u90fd\u662f\u7ec4\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ol"},"props \u662f React \u7ec4\u4ef6\u4e4b\u95f4\u901a\u8baf\u7684\u57fa\u672c\u65b9\u5f0f\u3002")),(0,o.kt)("p",null,"\u751f\u547d\u5468\u671f\u56fe\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"},"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/")),(0,o.kt)("h2",{id:"\u5728\u8bbe\u8ba1-react-\u7ec4\u4ef6\u65f6\u8981\u6ce8\u610f\u4ee5\u4e0b\u539f\u5219"},"\u5728\u8bbe\u8ba1 React \u7ec4\u4ef6\u65f6\uff0c\u8981\u6ce8\u610f\u4ee5\u4e0b\u539f\u5219\uff1a"),(0,o.kt)("p",null,"\u4fdd\u6301\u63a5\u53e3\u5c0f\uff0cprops \u6570\u91cf\u8981\u5c11\uff1b\n\u6839\u636e\u6570\u636e\u8fb9\u754c\u6765\u5212\u5206\u7ec4\u4ef6\uff0c\u5145\u5206\u5229\u7528\u7ec4\u5408\uff08composition\uff09\uff1b\n\u628a state \u5f80\u4e0a\u5c42\u7ec4\u4ef6\u63d0\u53d6\uff0c\u8ba9\u4e0b\u5c42\u7ec4\u4ef6\u53ea\u9700\u8981\u5b9e\u73b0\u4e3a\u7eaf\u51fd\u6570\u3002"),(0,o.kt)("h2",{id:"create-react-app"},"create-react-app"),(0,o.kt)("p",null,"webpack \u914d\u7f6e\uff1a\nsass: cra \u5df2\u5185\u7f6e sass-loader,\u53ea\u9700\u5b89\u88c5 node-sass/sass(dart-sass)"),(0,o.kt)("p",null,"\u4fee\u6539\u5176\u4ed6\u914d\u7f6e\uff0c\u4e0d eject \u7684\u65b9\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9700\u8981\u5b89\u88c5\uff1areact-app-rewired customize-cra"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { override, addBabelPlugin, addBabelPreset, addWebpackAlias, adjustStyleLoaders } = require("customize-cra");\nconst path = require("path");\nmodule.exports = override(\n  //\u5199\u6837\u5f0f\u7684\u65b9\u5f0f\n  addBabelPlugin("styled-jsx/babel"),\n\n  //\u522b\u540d\n  addWebpackAlias({\n    "@": path.resolve(__dirname, ".", "src"),\n  }),\n\n  //sass-resources-loader\u5171\u4eab\u516c\u5171\u6837\u5f0f\u6587\u4ef6\n  adjustStyleLoaders((rule) => {\n    if (rule.test.toString().includes("scss")) {\n      rule.use.push({\n        loader: require.resolve("sass-resources-loader"),\n        options: {\n          resources: "./src/styles/shared.scss", //\u5730\u5740\n        },\n      });\n    }\n  })\n);\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7 craco \u914d\u7f6e\uff0cantd4 \u63a8\u8350\uff0c\u6682\u672a\u5c1d\u8bd5\u3002",(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6871148364919111688#heading-6"},"\u53c2\u8003")))),(0,o.kt)("h2",{id:"react-\u4e2d\u7684\u6027\u80fd\u4f18\u5316"},"React \u4e2d\u7684\u6027\u80fd\u4f18\u5316"),(0,o.kt)("h3",{id:"\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0"},"\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u7ec4\u4ef6\u66f4\u65b0"),(0,o.kt)("h4",{id:"\u91cd\u65b0\u6e32\u67d3-reconciliation"},"\u91cd\u65b0\u6e32\u67d3 reconciliation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u6e32\u67d3\u4f55\u65f6\u89e6\u53d1\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u6302\u8f7d\u3002React \u7ec4\u4ef6\u6784\u5efa\u5e76\u5c06 DOM \u5143\u7d20\u63d2\u5165\u9875\u9762\u7684\u8fc7\u7a0b\u79f0\u4e3a\u6302\u8f7d\u3002\u5f53\u7ec4\u4ef6\u9996\u6b21\u6e32\u67d3\u7684\u65f6\u5019\u4f1a\u8c03\u7528 render\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e0d\u53ef\u907f\u514d\u3002"),(0,o.kt)("p",{parentName:"li"},"\u6267\u884c setState \u4f1a\u89e6\u53d1 render\u3002\u4f46\u662f\u8fd9\u91cc\u6709\u4e2a\u70b9\u503c\u5f97\u5173\u6ce8\uff0c\u6267\u884c setState \u7684\u65f6\u5019\u4e00\u5b9a\u4f1a\u91cd\u65b0\u6e32\u67d3\u5417\uff1f\u7b54\u6848\u662f\u4e0d\u4e00\u5b9a\u3002\u5f53 setState \u4f20\u5165 null \u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u4f1a\u89e6\u53d1 render \u3002"),(0,o.kt)("p",{parentName:"li"},"\u7236\u7ec4\u4ef6\u66f4\u65b0\u89e6\u53d1\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u4e86\uff0c\u5373\u4f7f\u4f20\u5165\u5b50\u7ec4\u4ef6\u7684 props \u672a\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u5b50\u7ec4\u4ef6\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u8fdb\u800c\u89e6\u53d1 render\u3002"))),(0,o.kt)("p",null,"js \u4e3a\u5355\u7ebf\u7a0b\u6267\u884c\uff0c\u663e\u7136\uff0c\u4e0d\u5fc5\u8981\u7684\u5b50\u7ec4\u4ef6\u7684 render \u4f1a\u6d6a\u8d39 js \u7ebf\u7a0b\u8d44\u6e90\uff0c\u590d\u6742\u4efb\u52a1\u8fd8\u4f1a\u957f\u65f6\u95f4\u5360\u7528\u7ebf\u7a0b\u5bfc\u81f4\u5047\u6b7b\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u9875\u9762\u5361\u987f\uff0creact \u5e95\u5c42\u6709 Fiber \u6765\u4f18\u5316\u4efb\u52a1\u961f\u5217\uff0c\u4f46\u65e0\u6cd5\u4f18\u5316\u4e1a\u52a1\u4ee3\u7801\u4e0a\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u786e\u8ba4 props \u662f\u5426\u53d1\u751f\u53d8\u5316\u6765\u63a7\u5236\u81ea\u8eab\u662f\u5426\u8fdb\u884c render\uff0c\u6bd4\u5982 react-mobx \u4e2d\u7684 observer \u9ad8\u9636\u65b9\u6cd5\u6216\u8005 React.PureComponet \u5c31\u662f\u7528\u6765\u505a\u6d45\u5c42\u6bd4\u8f83\u8fdb\u884c\u63a7\u5236\u5904\u7406\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"class \u7ec4\u4ef6 shouldComponentUpdate\uff0c\u6839\u636e\u60c5\u51b5\u51b3\u5b9a\u662f\u5426\u8981\u66f4\u65b0\u7ec4\u4ef6\u3002\u5f53\u5b83\u7684\u7236\u7ec4\u4ef6 render \u4e86\uff0c\u4f1a\u89e6\u53d1\u8be5\u7ec4\u4ef6\u7684 render \u8fc7\u7a0b\uff0c\u4f46\u662f\u8fdb\u884c\u5230 shouldComponentUpdate \u5224\u65ad\u65f6\u4f1a\u88ab\u963b\u6b62\u6389\uff0c\u4ece\u800c\u5c31\u4e0d\u8c03\u7528\u5b83\u7684 render \u65b9\u6cd5\u4e86\uff0c\u5b83\u81ea\u5df1\u4e0b\u9762\u7684\u7ec4\u4ef6\u7684 render \u8fc7\u7a0b\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u4e86\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"class \u7ec4\u4ef6\u7684 pureComponent\uff0c\u5bf9\u7c7b\u7ec4\u4ef6\u7684 Props \u548c State \u8fdb\u884c\u6d45\u6bd4\u8f83\uff0c React.memo \u662f\u5bf9\u51fd\u6570\u7ec4\u4ef6\u7684 Props \u8fdb\u884c\u6d45\u6bd4\u8f83\u3002"))),(0,o.kt)("p",{parentName:"li"},"pureComponent \u4e0d\u80fd\u81ea\u5b9a\u4e49\u5bf9\u6bd4\u903b\u8f91\uff0c\u800c React.memo \u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u51fd\u6570\u53c2\u6570\u5b9e\u73b0\u6df1\u5c42\u6b21\u6bd4\u8f83\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    //\u5229\u7528React.memo\u7b2c\u4e8c\u4e2a\u53c2\u6570\u8fdb\u884c\u66f4\u6df1\u5c42\u6b21\u7684\u6bd4\u8f83\n    function arePropsEqual(prevProps, nextProps) {\n        //arePropsEqual \u8fd4\u56de true \u65f6\uff0c\u4e0d\u4f1a\u89e6\u53d1 render\uff0c\u5982\u679c\u8fd4\u56de false\uff0c\u5219\u4f1a\u3002\u800c shouldComponentUpdate \u521a\u597d\u4e0e\u5176\u76f8\u53cd\u3002\n        // your code\n        return prevProps === nextProps;\n    }\n\n    export default memo(Button, arePropsEqual);\n    ```\n")))),(0,o.kt)("h4",{id:"purecomponent"},"pureComponent"),(0,o.kt)("p",null,"\u81ea\u52a8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," \uff0c\u4ee5\u6d45\u5c42\u5bf9\u6bd4 prop \u548c state(shallowEqual )\n//TODO:\u624b\u5199\u539f\u7406\u548c\u5b9e\u73b0: ",(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000006741060"},"https://segmentfault.com/a/1190000006741060")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js\nconst hasOwnProperty = Object.prototype.hasOwnProperty;\n\n/**\n * is \u65b9\u6cd5\u6765\u5224\u65ad\u4e24\u4e2a\u503c\u662f\u5426\u662f\u76f8\u7b49\u7684\u503c\uff0c\u4e3a\u4f55\u8fd9\u4e48\u5199\u53ef\u4ee5\u79fb\u6b65 MDN \u7684\u6587\u6863\n * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n */\nfunction is(x: mixed, y: mixed): boolean {\n  if (x === y) {\n    return x !== 0 || y !== 0 || 1 / x === 1 / y;\n  } else {\n    return x !== x && y !== y;\n  }\n}\n\nfunction shallowEqual(objA: mixed, objB: mixed): boolean {\n  // \u9996\u5148\u5bf9\u57fa\u672c\u7c7b\u578b\u8fdb\u884c\u6bd4\u8f83\n  if (is(objA, objB)) {\n    return true;\n  }\n\n  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {\n    return false;\n  }\n\n  const keysA = Object.keys(objA);\n  const keysB = Object.keys(objB);\n\n  // \u957f\u5ea6\u4e0d\u76f8\u7b49\u76f4\u63a5\u8fd4\u56defalse\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // key\u76f8\u7b49\u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u53bb\u5faa\u73af\u6bd4\u8f83\n  for (let i = 0; i < keysA.length; i++) {\n    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n')),(0,o.kt)("p",null,"\u51fd\u6570\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MyComponent = React.memo(function Component(props) {\n  /* \u4f7f\u7528 props \u6e32\u67d3 */\n});\n")),(0,o.kt)("h4",{id:"usememousecallback"},"useMemo,useCallback"),(0,o.kt)("p",null,"\u5982\u679c\u4f20\u7ed9\u5b50\u7ec4\u4ef6\u7684\u6d3e\u751f\u72b6\u6001\u6216\u51fd\u6570\uff0c\u6bcf\u6b21\u90fd\u662f\u65b0\u7684\u5f15\u7528\uff0c\u90a3\u4e48 PureComponent \u548c React.memo \u4f18\u5316\u5c31\u4f1a\u5931\u6548\u3002\u6240\u4ee5\u9700\u8981\u4f7f\u7528 useMemo \u548c useCallback \u6765\u751f\u6210\u7a33\u5b9a\u503c\uff0c\u5e76\u7ed3\u5408 PureComponent \u6216 React.memo \u907f\u514d\u5b50\u7ec4\u4ef6\u91cd\u65b0 Render\u3002"),(0,o.kt)("p",null,"useCallback \u662f\u300cuseMemo \u7684\u8fd4\u56de\u503c\u4e3a\u51fd\u6570\u300d\u65f6\u7684\u7279\u6b8a\u60c5\u51b5."),(0,o.kt)("h4",{id:"\u53d1\u5e03\u8005\u8ba2\u9605\u8005\u8df3\u8fc7\u4e2d\u95f4\u7ec4\u4ef6-render-\u8fc7\u7a0b"},"\u53d1\u5e03\u8005\u8ba2\u9605\u8005\u8df3\u8fc7\u4e2d\u95f4\u7ec4\u4ef6 Render \u8fc7\u7a0b"),(0,o.kt)("p",null,"\u5f88\u591a\u79cd\u65b9\u6cd5\u5b9e\u73b0\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff1aredux\u3001use-global-state\u3001React.createContext \u7b49\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 React.createContext \u8fdb\u884c\u5b9e\u73b0,from reference3: ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fabuzhedingyuezhemoshitiaoguozhongjianzujiande-render-guocheng-nm7nt?file=/src/PubSubCommunicate.js"},"https://codesandbox.io/s/fabuzhedingyuezhemoshitiaoguozhongjianzujiande-render-guocheng-nm7nt?file=/src/PubSubCommunicate.js")),(0,o.kt)("h4",{id:"\u72b6\u6001\u4e0b\u653e\u7f29\u5c0f\u72b6\u6001\u5f71\u54cd\u8303\u56f4"},"\u72b6\u6001\u4e0b\u653e\uff0c\u7f29\u5c0f\u72b6\u6001\u5f71\u54cd\u8303\u56f4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6935584878071119885#heading-10"},"https://juejin.cn/post/6935584878071119885#heading-10")),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u72b6\u6001\u53ea\u5728\u67d0\u90e8\u5206\u5b50\u6811\u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u8fd9\u90e8\u5206\u5b50\u6811\u63d0\u53d6\u4e3a\u7ec4\u4ef6\uff0c\u5e76\u5c06\u8be5\u72b6\u6001\u79fb\u52a8\u5230\u8be5\u7ec4\u4ef6\u5185\u90e8\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u72b6\u6001\u5728\u7236\u7ec4\u4ef6\u4ee5\u53ca\u90e8\u5206\u5b50\u7ec4\u4ef6\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c06\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u72b6\u6001\u7684\u5b50\u7ec4\u4ef6\u53d8\u4e3a\u4e00\u4e2a\u63d2\u69fd\uff0c\u901a\u8fc7 props \u4f20\u9012\u8fdb\u6765\uff0c\u4f7f\u5f97\u8be5\u72b6\u6001\u4e0d\u5f71\u54cd\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u72b6\u6001\u7684\u5b50\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\uff0c\u89c1\u4e0a\u9762\u94fe\u63a5\u3002"),(0,o.kt)("h4",{id:"\u6dfb\u52a0-key--\u4f7f\u7528\u6570\u636e\u7684-id-\u4f5c\u4e3a-key-\u5c3d\u91cf\u4e0d\u4f7f\u7528\u7d22\u5f15"},"\u6dfb\u52a0 key , \u4f7f\u7528\u6570\u636e\u7684 ID \u4f5c\u4e3a key ,\u5c3d\u91cf\u4e0d\u4f7f\u7528\u7d22\u5f15\u3002"),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"React \u6e32\u67d3\u4f18\u5316-\u7236\u7ec4\u4ef6\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u91cd\u590d\u6e32\u67d3 ",(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hello__word__/article/details/108198812"},"https://blog.csdn.net/hello__word__/article/details/108198812")),(0,o.kt)("li",{parentName:"ol"},"\u4f18\u5316 render,\u63d0\u5347\u6027\u80fd ",(0,o.kt)("a",{parentName:"li",href:"https://www.zoo.team/article/react-render"},"https://www.zoo.team/article/react-render")),(0,o.kt)("li",{parentName:"ol"},"React \u6027\u80fd\u4f18\u5316 ",(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6935584878071119885#heading-1"},"https://juejin.cn/post/6935584878071119885#heading-1"))))}d.isMDXComponent=!0}}]);