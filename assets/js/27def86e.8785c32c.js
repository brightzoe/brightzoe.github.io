"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6394],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,h=m["".concat(l,".").concat(k)]||m[k]||s[k]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2463:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=["components"],p={},l="react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f",u={unversionedId:"react/pass-params-in-react",id:"react/pass-params-in-react",title:"react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f",description:"\u573a\u666f\uff1a \u901a\u8fc7\u70b9\u51fb\u8fdb\u5165\u9875\u9762 url\uff1atree/id\uff0c\u4e0d\u662f\u56fa\u5b9a\u7684\u8def\u7531\uff0c\u901a\u8fc7\u70b9\u51fb\u8fdb\u5165\u65b0\u9875\u9762\u7684\u65f6\u5019\u4f20\u9012 treeId\u3002",source:"@site/docs/react/pass-params-in-react.md",sourceDirName:"react",slug:"/react/pass-params-in-react",permalink:"/docs/react/pass-params-in-react",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/react/pass-params-in-react.md",tags:[],version:"current",lastUpdatedAt:1644855289,formattedLastUpdatedAt:"2/14/2022",frontMatter:{},sidebar:"React",previous:{title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5 -\u6398\u91d1\u5c0f\u518c",permalink:"/docs/react/design-pattern-and-best-practices"},next:{title:"\u5982\u4f55\u5b58\u50a8 React \u4e2d\u7684\u6570\u636e\u548c\u72b6\u6001",permalink:"/docs/react/where-to-save-data-in-react"}},c={},s=[{value:"\u4f7f\u7528 state/query \u4f20\u53c2\u7684\u65b9\u5f0f",id:"\u4f7f\u7528-statequery-\u4f20\u53c2\u7684\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528 params \u4f20\u53c2\u7684\u65b9\u5f0f",id:"\u4f7f\u7528-params-\u4f20\u53c2\u7684\u65b9\u5f0f",level:2},{value:"Reference\uff1a",id:"reference",level:2}],m={toc:s};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router-\u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f"},"react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f"),(0,o.kt)("p",null,"\u573a\u666f\uff1a \u901a\u8fc7\u70b9\u51fb\u8fdb\u5165\u9875\u9762 url\uff1atree/id\uff0c\u4e0d\u662f\u56fa\u5b9a\u7684\u8def\u7531\uff0c\u901a\u8fc7\u70b9\u51fb\u8fdb\u5165\u65b0\u9875\u9762\u7684\u65f6\u5019\u4f20\u9012 treeId\u3002"),(0,o.kt)("p",null,"\u65b9\u6848\uff1a"),(0,o.kt)("h2",{id:"\u4f7f\u7528-statequery-\u4f20\u53c2\u7684\u65b9\u5f0f"},"\u4f7f\u7528 state/query \u4f20\u53c2\u7684\u65b9\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"router \u8bbe\u7f6e:",(0,o.kt)("inlineCode",{parentName:"li"},'<Route path="/tree/:key" component={xx} />')),(0,o.kt)("li",{parentName:"ul"},"\u9875\u9762\u4f7f\u7528:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'//\u8d77\u59cb\u9875\u9762\nconst From = (props) => {\n    const history = useHistory();\n    const handleClick = () => {\n        history.push({ pathname: "/tree/" + key, treeData:data });\n    //pathname\u662f\u8def\u7531\u5730\u5740\n    //treeData\u662f\u4f60\u4f20\u9012\u7ed9\u4e0b\u4e2a\u9875\u9762\u7684\u53c2\u6570,\u4e4b\u524d\u53ea\u80fd\u53ebstate,\u73b0\u5728\u81ea\u5b9a\u4e49\u540d\u5b57\n\n    //\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528Link\u7ec4\u4ef6\n    return(<Link to={{pathname: "/tree/" + key, treeData}}>)\n    };\n};\n\n //\u76ee\u6807\u9875\u9762\n\nconst To = (props)=>{\n  const treeData = props.location.treeData//\u8bfb\u53d6\u5230\u7684\u53c2\u6570\n  return <></>\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4f20\u9012\u5bf9\u8c61,\u4e0d\u662f\u660e\u6587\u4f20\u9012\u3002\u4f46\u9875\u9762\u5237\u65b0\u5219\u8bfb\u4e0d\u5230 prop.location \u4e0a\u7684\u53c2\u6570\uff0c\u53c2\u6570\u4e22\u5931\u3002\u5f00\u59cb\u4f7f\u7528\u7684\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f46\u7531\u4e8e\u5237\u65b0\u4e22\u5931\u53c2\u6570\u7684\u95ee\u9898\uff0c\u9009\u62e9\u4e86\u4e0b\u4e00\u79cd\u4f7f\u7528 params \u7684\u65b9\u5f0f\u3002\u3010\u54c8\u5e0c\u8def\u7531\u7684\u60c5\u51b5\u4e0b\uff0c\u53c2\u6570\u4e22\u5931\u3011\n\u5728 hashRouter \u60c5\u51b5\u4e0b\u5237\u65b0\u4f1a\u4e22\u5931\u53c2\u6570\uff0c\u5728 browerRouter \u4e0b\u5237\u65b0\u4e0d\u4f1a\u4e22\u5931\u53c2\u6570\u3002")),(0,o.kt)("h2",{id:"\u4f7f\u7528-params-\u4f20\u53c2\u7684\u65b9\u5f0f"},"\u4f7f\u7528 params \u4f20\u53c2\u7684\u65b9\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"router \u8bbe\u7f6e:",(0,o.kt)("inlineCode",{parentName:"li"},'<Route path="/tree/:key" component={xx} />'),"\uff0c\u4e0e\u4e0a\u9762\u4e00\u81f4"),(0,o.kt)("li",{parentName:"ul"},"\u9875\u9762\u4f7f\u7528,\u540c\u4e0a\u7528 history \u6216 Link\uff0c\u4e0d\u4f20 treeData,\u53ea\u6709 path\n\u8d77\u59cb\u9875\u9762\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},' <Link to={{ pathname: "/treeStructure/" + key }}>'),"\n\u76ee\u6807\u9875\u9762\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"const key = this.props.match.params.key"),",hook \u65b9\u5f0f\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"useParams"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ea\u80fd\u4f20\u9012\u5b57\u7b26\u4e32\uff0c\u4e14\u53ea\u80fd\u653e\u5728 url \u4e0a\uff0c\u660e\u6587\u4f20\u9012\u3002\u9875\u9762\u5237\u65b0\u4e0d\u4f1a\u4e22\u5931\u53c2\u6570\u3002\n\u53ef\u4ee5\u4f20\u591a\u4e2a\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u53c2\u6570\u53ef\u9009\u3002",(0,o.kt)("inlineCode",{parentName:"p"},'path="/tree/:key/:page?"'))),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u641c\u5230\u7684\u76f8\u5173\u5185\u5bb9\u603b\u662f\u63d0\u5230 withRouter HOC,\u4e0d\u77e5\u9053\u5e72\u561b\u7684\uff0c\u5728\u8fd9\u91cc\u8bb0\u5f55\u4e0b\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u8def\u7531\u7ec4\u4ef6\uff08\u76f4\u63a5\u4e0e\u8def\u7531\u76f8\u8fde\uff09\uff0c\u62ff\u5230\u8def\u7531\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece props.history/location \u4e2d\u62ff\u5230\uff0c\u800c\u975e\u8def\u7531\u7ec4\u4ef6\uff0c\u4e0d\u80fd\u76f4\u63a5\u83b7\u53d6\u8def\u7531\u7684\u53c2\u6570\uff0c\u9700\u8981\u7528 withRouter \u5305\u88f9\uff0c\u624d\u80fd\u62ff\u5230\u8def\u7531\u4e2d\u7684\u8fd9\u4e9b\u5c5e\u6027\u3002"))),(0,o.kt)("p",null,"//todo: react-router v6 \u5b66\u4e60\uff0capi \u5c1d\u8bd5\n//todo: react-router \u5b9e\u73b0\u8def\u7531\u5b88\u536b\u3002\u76f8\u5173\u529f\u80fd\uff1a\u79bb\u5f00\u9875\u9762\uff0c\u5237\u65b0\u6216\u5173\u95ed\u9875\u9762\u65f6\u63d0\u793a\u6216\u505a\u4e00\u4e9b\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"reference"},"Reference\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/101129994"},"react router \u76f8\u5173 api \u548c\u53c2\u8003")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4"},"pass params with history")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/javascript/how-to-understand-router"},"\u5bf9\u8def\u7531\u7684\u7406\u89e3\u548c\u4f7f\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7042849947451916296"},"React \u4e2d\u4f7f\u7528 react-router-dom \u8def\u7531\u4f20\u53c2\u7684\u4e09\u79cd\u65b9\u5f0f\u8be6\u89e3\u3010\u542b V5.x\u3001V6.x\u3011\uff01\uff01\uff01 - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904096059621389"},"React-Router v6 \u65b0\u7279\u6027\u89e3\u8bfb\u53ca\u8fc1\u79fb\u6307\u5357 - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6978190158252212254"},"react-router v6 \u7528\u8d77\u6765 - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7025418839454122015#heading-13"},"\u4ec0\u4e48\uff0cReact Router \u5df2\u7ecf\u5230 V6 \u4e86 \uff1f\uff1f - \u6398\u91d1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/431389907"},"react-router-dom \u4f7f\u7528\u6307\u5357\uff08\u6700\u65b0 V6.0.1\uff09 - \u77e5\u4e4e"))))}k.isMDXComponent=!0}}]);