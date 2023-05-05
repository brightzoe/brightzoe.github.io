"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4409],{7363:(e,t,a)=>{a.d(t,{kt:()=>d});var r=a(959);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(1163),n=(a(959),a(7363));const l={},i="\u5982\u4f55\u5b58\u50a8 React \u4e2d\u7684\u6570\u636e\u548c\u72b6\u6001",p={unversionedId:"react/where-to-save-data-in-react",id:"react/where-to-save-data-in-react",title:"\u5982\u4f55\u5b58\u50a8 React \u4e2d\u7684\u6570\u636e\u548c\u72b6\u6001",description:"\u56db\u79cd React \u7ec4\u4ef6\u5b58\u653e\u6570\u636e\u7684\u65b9\u5f0f",source:"@site/docs/react/where-to-save-data-in-react.md",sourceDirName:"react",slug:"/react/where-to-save-data-in-react",permalink:"/docs/react/where-to-save-data-in-react",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/where-to-save-data-in-react.md",tags:[],version:"current",lastUpdatedAt:1683266726,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{},sidebar:"React",previous:{title:"react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f",permalink:"/docs/react/pass-params-in-react"}},o={},c=[{value:"\u56db\u79cd React \u7ec4\u4ef6\u5b58\u653e\u6570\u636e\u7684\u65b9\u5f0f",id:"\u56db\u79cd-react-\u7ec4\u4ef6\u5b58\u653e\u6570\u636e\u7684\u65b9\u5f0f",level:2},{value:"State",id:"state",level:3},{value:"this",id:"this",level:3},{value:"Static",id:"static",level:3},{value:"Store",id:"store",level:3},{value:"Props",id:"props",level:3},{value:"\u72b6\u6001\u7ba1\u7406",id:"\u72b6\u6001\u7ba1\u7406",level:2},{value:"\u903b\u8f91\u548c\u4ea4\u4e92",id:"\u903b\u8f91\u548c\u4ea4\u4e92",level:3},{value:"\u6570\u636e\u5982\u4f55\u5b58\u653e\uff0c\u4f55\u65f6\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\uff1f",id:"\u6570\u636e\u5982\u4f55\u5b58\u653e\u4f55\u65f6\u4f7f\u7528\u72b6\u6001\u7ba1\u7406",level:3},{value:"\u89c6\u56fe\u72b6\u6001",id:"\u89c6\u56fe\u72b6\u6001",level:4},{value:"\u9886\u57df\u72b6\u6001",id:"\u9886\u57df\u72b6\u6001",level:4},{value:"reference:",id:"reference",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5982\u4f55\u5b58\u50a8-react-\u4e2d\u7684\u6570\u636e\u548c\u72b6\u6001"},"\u5982\u4f55\u5b58\u50a8 React \u4e2d\u7684\u6570\u636e\u548c\u72b6\u6001"),(0,n.kt)("h2",{id:"\u56db\u79cd-react-\u7ec4\u4ef6\u5b58\u653e\u6570\u636e\u7684\u65b9\u5f0f"},"\u56db\u79cd React \u7ec4\u4ef6\u5b58\u653e\u6570\u636e\u7684\u65b9\u5f0f"),(0,n.kt)("h3",{id:"state"},"State"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\u8303\u56f4\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u5f53\u6570\u636e\u4e0d\u53c2\u4e0e dataFlow \u65f6\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5b58\u50a8 UI \u7684\u72b6\u6001\u800c\u4e0d\u662f\u6570\u636e\u3002\u5c06 UI \u7684\u72b6\u6001\u53ca\u4e00\u4e9b\u4e34\u65f6\u7684\u6570\u636e\u4fdd\u5b58\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5f53\u7ec4\u4ef6\u7684\u5c55\u793a\u5185\u5bb9\u4f1a\u968f\u4e4b\u6539\u53d8\u65f6\uff0c\u53ef\u4ee5\u5c06\u6570\u636e\u653e\u5728 state \u91cc\uff0c\u5373\u6d89\u53ca\u5230 UI \u7684\u53d8\u5316\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u53ea\u6709 class \u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,n.kt)("p",{parentName:"li"},"state \u6539\u53d8\u65f6\uff0c\u4f1a re-render \u7ec4\u4ef6\uff0c\u9664\u975e shouldComponentUpdate() \u8fd4\u56de false\u3002"),(0,n.kt)("p",{parentName:"li"},"state \u4e2d\u7684\u6570\u636e\u53ea\u5f71\u54cd\u5f53\u524d\u7ec4\u4ef6\uff0c\u9664\u975e\u5c06 state \u4f5c\u4e3a props \u4f20\u7ed9\u5b50\u7ec4\u4ef6\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539 state,state \u7684\u66f4\u65b0\u53ef\u80fd\u662f\u5f02\u6b65\u7684\u3002",(0,n.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/react-component.html#setstate"},"setState")))),(0,n.kt)("h3",{id:"this"},"this"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,n.kt)("p",{parentName:"li"},"this \u4e0a\u5b58\u653e\u7684\u6570\u636e\u7684\u6539\u53d8\u4e0d\u4f1a\u5f15\u8d77 re-render\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4efb\u4f55\u60c5\u51b5\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u65e0\u8bba\u662f class \u8fd8\u662f function"),(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f this \u7684\u7ed1\u5b9a\uff0c\u901a\u8fc7 bind \u6216\u7bad\u5934\u51fd\u6570=>"))),(0,n.kt)("h3",{id:"static"},"Static"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\u8303\u56f4\uff1a"),(0,n.kt)("p",{parentName:"li"},"//todo:\u7528\u5904"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 class \u7684\u540d\u5b57\u8bbf\u95ee\uff0c\u5e76\u4e14\u4e0d\u4f1a re-render\u3002\u4f5c\u7528\u4e8e\u5f53\u524d\u7ec4\u4ef6\uff0c\u540c\u7c7b\u578b\u7ec4\u4ef6\u5171\u4eab\u8fd9\u4e2a\u6570\u636e\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b9e\u4f8b\uff1a"),(0,n.kt)("p",{parentName:"li"},"react \u7ec4\u4ef6\u4e2d\uff0cpropTypes \u548c defaultProps \u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u53ef\u8bfb\u6027\u548c\u7ec4\u4ef6\u5f3a\u58ee\u6027\u3002\u8fd9\u4e24\u4e2a\u5c5e\u6027\u5c31\u662f static \u7c7b\u578b\u7684\u3002"))),(0,n.kt)("h3",{id:"store"},"Store"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\u8303\u56f4\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u4efb\u4f55\u7ec4\u4ef6\uff0c\u7528\u6765\u8fdb\u884c\u7ec4\u4ef6\u95f4\u7684\u6570\u636e\u4ea4\u4e92\u3002\u5b58\u50a8\u591a\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u5171\u4eab\u7684\u6570\u636e\u3002\u5b58\u50a8\u7ec4\u4ef6\u7684\u72b6\u6001\u800c\u4e0d\u662f UI \u7684\u72b6\u6001\uff0c\u4f8b\u5982\u767b\u5f55\u6001\u3002"),(0,n.kt)("p",{parentName:"li"},"store \u662f\u5b58\u653e\u6570\u636e\u7684 state \u548c\u5904\u7406\u6570\u636e\u7684\u4e00\u4e9b\u65b9\u6cd5\u7684\u96c6\u5408\u3002state \u53ea\u8bfb\uff0c\u901a\u8fc7 store \u63d0\u4f9b\u7684\u65b9\u6cd5\u4fee\u6539\uff0c\u4fee\u6539\u7684\u65b9\u6cd5\u5e94\u8be5\u662f\u7eaf\u51fd\u6570\u3002\u901a\u8fc7 dispatch \u4e00\u4e2a action , \u7136\u540e\u7531 reducer \u5904\u7406\u3002"))),(0,n.kt)("h3",{id:"props"},"Props"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5199\u5728 JSX \u6807\u7b7e\u4e0a\uff0c\u7ed9\u5b50\u7ec4\u4ef6\u6dfb\u52a0\u5c5e\u6027\uff0c\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684 props")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,n.kt)("p",{parentName:"li"},"key \u548c ref \u4e0d\u4f1a\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684 props"),(0,n.kt)("p",{parentName:"li"},"\u5b50\u7ec4\u4ef6\u5185\u90e8\u4e0d\u80fd\u6539\u53d8 this.props \u7684\u503c"))),(0,n.kt)("h2",{id:"\u72b6\u6001\u7ba1\u7406"},"\u72b6\u6001\u7ba1\u7406"),(0,n.kt)("h3",{id:"\u903b\u8f91\u548c\u4ea4\u4e92"},"\u903b\u8f91\u548c\u4ea4\u4e92"),(0,n.kt)("p",null,"\u4ece\u903b\u8f91\u548c\u4ea4\u4e92\u7684\u89d2\u5ea6\u6765\u5206\u6790\u6574\u4e2a\u5e94\u7528\u7684\u72b6\u6001\uff0c\u53ef\u4ee5\u5206\u4e3a\u9886\u57df\u72b6\u6001\u548c\u89c6\u56fe\u72b6\u6001\u4e24\u79cd\u3002"),(0,n.kt)("p",null,"\u4ece\u5e94\u7528\u7684\u529f\u80fd\u903b\u8f91\u4e0a\uff0c\u53ef\u4ee5\u62c6\u51fa\u4e00\u4e2a\u6982\u5ff5\uff0c\u53eb\u9886\u57df\u72b6\u6001\uff0c\u7528\u6765\u63cf\u8ff0\uff0c\u5904\u7406\u5b9e\u9645\u5e94\u7528\u529f\u80fd\u7684\u5404\u79cd\u60c5\u51b5\u3002\u6bd4\u5982\u5728\u6587\u4ef6\u4e0a\u4f20\u4e2d\uff0c\u533a\u5206\u6587\u4ef6\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u4e0a\u4f20\u6210\u529f\uff0c\u4e0a\u4f20\u5931\u8d25\u7b49\u5404\u79cd\u60c5\u51b5\uff0c\u662f\u4e1a\u52a1\u7684\u903b\u8f91\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u8981\u6d4b\u8bd5\uff0c\u4e5f\u662f\u57fa\u4e8e\u9886\u57df\u72b6\u6001\u6765\u7f16\u5199\u6d4b\u8bd5\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\u4f7f\u7528\u7684\u524d\u7aef\u5e94\u7528\u6846\u67b6\uff0c\u6bd4\u5982 React,\u5b98\u7f51\u4e0a\u662f\u8fd9\u6837\u63cf\u8ff0\u7684\uff1a\u201c\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93\u201d\u3002\u57fa\u4e8e\u9886\u57df\u903b\u8f91\uff0c\u6765\u5f00\u53d1\u6574\u4e2a\u5e94\u7528\u7684\u89c6\u56fe\u4ea4\u4e92\uff0c\u5728\u6784\u5efa\u754c\u9762\u7684\u65f6\u5019\u4f1a\u6d89\u53ca\u5f88\u591a\u7ec4\u4ef6\u5728\u663e\u793a\u4e0a\u7684\u72b6\u6001\uff0c\u6bd4\u5982 loading,\u6253\u5f00\u5173\u95ed\u7684\u72b6\u6001\u7b49\uff0c\u88ab\u79f0\u4e3a\u89c6\u56fe\u72b6\u6001\u3002"),(0,n.kt)("h3",{id:"\u6570\u636e\u5982\u4f55\u5b58\u653e\u4f55\u65f6\u4f7f\u7528\u72b6\u6001\u7ba1\u7406"},"\u6570\u636e\u5982\u4f55\u5b58\u653e\uff0c\u4f55\u65f6\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\uff1f"),(0,n.kt)("p",null,"\u5927\u591a\u6570\u89c6\u56fe\u5e93\u662f\u4ee5\u7ec4\u4ef6\u4e3a\u6a21\u5757\u8fb9\u754c\u7684\uff0c\u7ec4\u4ef6\u4e2d\u7684\u903b\u8f91\uff0c\u6709\u4e9b\u662f\u53d7\u5176\u4ed6\u7684\u7ec4\u4ef6\u5f71\u54cd\u7684\uff0c\u5e76\u4e0d\u4e00\u5b9a\u662f\u5b8c\u5168\u81ea\u5df1\u5c31\u53ef\u4ee5\u63a7\u5236\u7684\u3002"),(0,n.kt)("p",null,"\u5404\u79cd\u72b6\u6001\u5230\u5e95\u8be5\u5982\u4f55\u7ba1\u7406\uff0c\u8981\u5b58\u653e\u5728\u54ea\u91cc\uff1f"),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u5411\u53bb\u8003\u8651\uff1a"),(0,n.kt)("h4",{id:"\u89c6\u56fe\u72b6\u6001"},"\u89c6\u56fe\u72b6\u6001"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u53d7\u5f53\u524d\u7ec4\u4ef6\u63a7\u5236\uff0c\u4e0d\u53d7\u5176\u4ed6\u7ec4\u4ef6\u5f71\u54cd\u3002 ----\u81ea\u5df1\u7ec4\u4ef6\u5185\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u95f4\u4e92\u76f8\u5f71\u54cd\uff0c\u8981\u6839\u636e\u5e94\u7528\u590d\u6742\u5ea6\uff0c\u7ec4\u4ef6\u95f4\u7684\u8de8\u5ea6\u51b3\u5b9a\u5982\u679c\u8de8\u5ea6\u6bd4\u8f83\u8fd1\uff0c\u5219\u5b58\u653e\u5728\u5171\u540c\u7236\u7ec4\u4ef6\u5982\u679c\u8de8\u5ea6\u76f8\u5bf9\u8f83\u8fdc\u4e14\u5e94\u7528\u4e0d\u590d\u6742\uff0c\u53ef\u4ee5\u628a\u72b6\u6001\u63d0\u5347\u5230\u5171\u540c\u7684 Context \u4e2d\u5982\u679c\u5e94\u7528\u590d\u6742\uff0c\u518d\u8003\u8651\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\u65b9\u6848")),(0,n.kt)("h4",{id:"\u9886\u57df\u72b6\u6001"},"\u9886\u57df\u72b6\u6001"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4e1a\u52a1\u7684\u5404\u79cd\u903b\u8f91\u72b6\u6001\uff0c\u672c\u6765\u5c31\u662f\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e2d\u7684\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7b80\u5355\u7684\u5c0f\u5e94\u7528\u53ef\u4ee5\u4efb\u5176\u5206\u5e03\u5728\u7ec4\u4ef6\u4e2d\uff0c\u6216\u8005\u63d0\u5347\u5230\u5171\u540c\u7684 Context \u4e2d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5176\u4ed6\u7684\u60c5\u51b5\uff0c\u63a8\u8350\u4f7f\u7528\u72b6\u6001\u7ba1\u7406\uff0c\u6bd4\u5982 Redux,Vuex,mobx\u3002")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u5207\u52ff\u4e00\u80a1\u8111\u5c06\u6240\u6709\u72b6\u6001\u90fd\u4ea4\u7ed9 Redux \u5904\u7406\uff0c\u6740\u9e21\u7109\u7528\u5bb0\u725b\u5200\u3002\u5168\u90e8\u7531 Redux \u5904\u7406\u662f\u53ef\u884c\u7684\uff0c\u4f46\u662f\u4f1a\u5f71\u54cd\u9879\u76ee\u7684\u53ef\u8bfb\u6027\uff0c\u6269\u5c55\u6027\u548c\u6027\u80fd\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u751a\u81f3\uff0c\u5bf9\u4e8e\u9886\u57df\u72b6\u6001\u4e2d\u7684\u5b50\u9886\u57df\uff0c\u53ef\u4ee5\u5728\u6709\u72b6\u6001\u7ba1\u7406\u65b9\u6848\u7684\u57fa\u7840\u4e0a\u518d\u62bd\u8c61\u51fa\u6765\u5355\u72ec\u5904\u7406\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u6bd4\u5982\u5bf9\u4e8e\u670d\u52a1\u7aef\u8bf7\u6c42\u7684\u6570\u636e\u8fd9\u4e00\u9886\u57df\u72b6\u6001\uff0c\u5176\u6027\u8d28\u66f4\u7c7b\u4f3c\u4e8e\u7f13\u5b58\uff0c\u5728 React \u4e2d\u53ef\u4ee5\u4f7f\u7528 SWR \u6216 React Query \u5904\u7406\u3002")),(0,n.kt)("h2",{id:"reference"},"reference:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00/"},"Where to Hold React Component Data: state, store, static, and this")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6986202846903402503#heading-0"},"\u6570\u636e\u90fd\u653e\u5728 Redux \u91cc\u5417\uff1f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/vercel/swr"},"\u6269\u5c55\uff1a SWR-\u7528\u4e8e\u6570\u636e\u8bf7\u6c42\u7684 React Hooks \u5e93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-query"},"React-Query"))))}m.isMDXComponent=!0}}]);