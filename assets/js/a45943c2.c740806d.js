"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8782],{4137:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const l={},o="\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",u={unversionedId:"react/controlled-and-uncontrolled-components",id:"react/controlled-and-uncontrolled-components",title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",description:"\u53d7\u63a7\u7ec4\u4ef6",source:"@site/docs/react/controlled-and-uncontrolled-components.md",sourceDirName:"react",slug:"/react/controlled-and-uncontrolled-components",permalink:"/docs/react/controlled-and-uncontrolled-components",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/controlled-and-uncontrolled-components.md",tags:[],version:"current",lastUpdatedAt:1680864182,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{},sidebar:"React",previous:{title:"useEffect",permalink:"/docs/react/advanced-react/useeffect"},next:{title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/react/design-pattern-and-best-practices"}},c={},p=[{value:"\u53d7\u63a7\u7ec4\u4ef6",id:"\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"\u975e\u53d7\u63a7\u7ec4\u4ef6",id:"\u975e\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6",id:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"Reference",id:"reference",level:2}],i={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6"},"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6"),(0,a.kt)("h2",{id:"\u53d7\u63a7\u7ec4\u4ef6"},"\u53d7\u63a7\u7ec4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece input \u8bf4\u8d77")),(0,a.kt)("p",null,"HTML \u4e2d\u539f\u751f\u7684 input\uff0c\u968f\u7740\u7528\u6237\u7684\u8f93\u5165\u53ef\u4ee5\u6539\u53d8 UI \u7684\u663e\u793a\uff0c\u5185\u90e8\u6709\u4e00\u4e2a\u6211\u4eec\u770b\u4e0d\u89c1\u7684\u72b6\u6001\u8fdb\u884c\u63a7\u5236\u3002\n\u5982\u679c\u6211\u4eec\u8981\u63a7\u5236\u8fd9\u4e2a input \u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a state\uff1aname\uff0c\u5e76\u5728 input \u7684 value \u8bbe\u7f6e\u4e3a this.state.name\uff0c\u8fd9\u6837 input \u7684\u5185\u5bb9\u4e0d\u4f1a\u968f\u7740\u7528\u6237\u7684\u8f93\u5165\u800c\u6539\u53d8\uff0cvalue \u5b8c\u5168\u53d6\u51b3\u4e8e state\uff0c\u4f46\u76ee\u524d input \u662f\u53ea\u8bfb\u7684\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u8981\u63a7\u5236 input\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a onChange \u4e8b\u4ef6\uff0c\u901a\u8fc7 onChange \u4e8b\u4ef6\u76d1\u542c\u8f93\u5165\u5185\u5bb9\uff0c\u5e76 setState \u66f4\u65b0 state\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8bbe\u7f6e input.value \u5b8c\u5168\u53d6\u51b3\u4e8e state\uff0c\u518d\u901a\u8fc7\u4e8b\u4ef6\u66f4\u65b0 state,\u63a7\u5236\u7528\u6237\u7684\u8f93\u5165\u8fc7\u7a0b\u4e2d\uff0cinput \u7684\u6570\u636e\u5982\u4f55\u663e\u793a\uff0cstate \u662f\u552f\u4e00\u7684\u6570\u636e\u6e90\u3002"),(0,a.kt)("h2",{id:"\u975e\u53d7\u63a7\u7ec4\u4ef6"},"\u975e\u53d7\u63a7\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6700\u597d\u662f\u7528\u53d7\u63a7\u7ec4\u4ef6\u6765\u5904\u7406\u8868\u5355\u6570\u636e\uff0c\u53d7\u63a7\u7ec4\u4ef6\u4e2d\uff0c\u8868\u5355\u6570\u636e\u5b8c\u5168\u7531 React \u7ec4\u4ef6\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u800c\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u8868\u5355\u6570\u636e\u662f\u7531 DOM \u8282\u70b9\u5904\u7406\u7684\u3002\u8981\u62ff\u5230\u8868\u5355\u4e2d\u7684\u6570\u636e\uff0c\u9700\u8981\u901a\u8fc7 ref \u83b7\u53d6\u3002\u975e\u53d7\u63a7\u7ec4\u4ef6\u4e2d\u5982\u679c\u9700\u8981\u9ed8\u8ba4\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e defaultValue \u5c5e\u6027\u6765\u6307\u5b9a\u8868\u5355\u5143\u7d20\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"file \u7c7b\u578b\u7684\u8868\u5355\u63a7\u4ef6\u59cb\u7ec8\u662f\u4e00\u4e2a\u4e0d\u53d7\u63a7\u5236\u7684\u7ec4\u4ef6\uff0c\u53ea\u80fd\u7531\u7528\u6237\u8bbe\u7f6e\u3002")),(0,a.kt)("h2",{id:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6"},"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"// \u7ec4\u4ef6\u63d0\u4f9b\u65b9\nfunction Input({ defaultValue }) {\n  const [value, setValue] = React.useState(defaultValue);\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\n\n// \u8c03\u7528\u65b9\nfunction Demo() {\n  return <Input defaultValue={1} />;\n}\nrender(<Demo />);\n")),(0,a.kt)("p",null,"\u6b64\u65f6 Input \u7ec4\u4ef6\u672c\u8eab\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6, \u4f46\u4e0e\u4e4b\u76f8\u5bf9\u7684\u8c03\u7528\u65b9\u5931\u53bb\u4e86\u66f4\u6539 Input \u7ec4\u4ef6\u503c\u7684\u63a7\u5236\u6743, \u6240\u4ee5\u5bf9\u8c03\u7528\u65b9\u800c\u8a00, Input \u7ec4\u4ef6\u662f\u4e00\u4e2a\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5e94\u6539\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"// \u7ec4\u4ef6\u63d0\u4f9b\u65b9\nfunction Input({ value, onChange }) {\n  return <input value={value} onChange={onChange} />;\n}\n\n// \u8c03\u7528\u65b9\nfunction Demo() {\n  const [value, setValue] = React.useState(1);\n  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\nrender(<Demo />);\n")),(0,a.kt)("p",null,"\u5b50\u7ec4\u4ef6\u4ea4\u51fa\u63a7\u5236\u6743\uff0c\u901a\u8fc7\u7236\u7ec4\u4ef6\u5b9e\u73b0\u63a7\u5236\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u53d7\u63a7\u4ee5\u53ca\u975e\u53d7\u63a7\u7ec4\u4ef6\u7684\u8fb9\u754c\u5212\u5206\u53d6\u51b3\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u5f53\u524d\u7ec4\u4ef6\u5bf9\u4e8e\u5b50\u7ec4\u4ef6\u503c\u7684\u53d8\u66f4\u662f\u5426\u62e5\u6709\u63a7\u5236\u6743\u3002"),"\u5982\u82e5\u6709\u5219\u8be5\u5b50\u7ec4\u4ef6\u662f\u5f53\u524d\u7ec4\u4ef6\u7684\u53d7\u63a7\u7ec4\u4ef6\uff1b\u5982\u82e5\u6ca1\u6709\u5219\u8be5\u5b50\u7ec4\u4ef6\u662f\u5f53\u524d\u7ec4\u4ef6\u7684\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/forms.html#controlled-components"},"\u53d7\u63a7\u7ec4\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/uncontrolled-components.html"},"\u975e\u53d7\u63a7\u7ec4\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/"},"\u4f55\u65f6\u4f7f\u7528\u53d7\u63a7\u7ec4\u4ef6\uff0c\u4f55\u65f6\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://muyunyun.cn/posts/8bdf2cdf/"},"\u91cd\u65b0\u8ba4\u8bc6\u53d7\u63a7\u7ec4\u4ef6\u548c\u975e\u53d7\u63a7\u7ec4\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#common-bugs-when-using-derived-state"},"\u6d3e\u751f\u72b6\u6001\u4e2d\u9047\u5230\u7684\u95ee\u9898"))))}d.isMDXComponent=!0}}]);