"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[2085],{4137:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9762:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(4137)),l=["components"],s={},i="zoom \u548c transform\uff1ascale",c={unversionedId:"fe-basic/css/zoom-and-transform",id:"fe-basic/css/zoom-and-transform",title:"zoom \u548c transform\uff1ascale",description:"\u90fd\u662f\u5bf9\u9875\u9762\u8fdb\u884c\u7f29\u653e\u7684\u64cd\u4f5c\uff0c\u7528\u6765\u505a\u81ea\u9002\u5e94\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u53d8\u5316\uff0c\u6216\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u9002\u914d\u60c5\u51b5\u3002",source:"@site/docs/fe-basic/css/zoom-and-transform.md",sourceDirName:"fe-basic/css",slug:"/fe-basic/css/zoom-and-transform",permalink:"/docs/fe-basic/css/zoom-and-transform",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/css/zoom-and-transform.md",tags:[],version:"current",lastUpdatedAt:1661600813,formattedLastUpdatedAt:"Aug 27, 2022",frontMatter:{},sidebar:"FE",previous:{title:"\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u6548\u679c",permalink:"/docs/fe-basic/css/simple-anime"},next:{title:"JavaScript",permalink:"/docs/fe-basic/javascript/"}},m={},u=[{value:"zoom",id:"zoom",level:2},{value:"transform:scale",id:"transformscale",level:2},{value:"\u4f7f\u7528\u54ea\u79cd\uff1f",id:"\u4f7f\u7528\u54ea\u79cd",level:2},{value:"Reference",id:"reference",level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zoom-\u548c-transformscale"},"zoom \u548c transform\uff1ascale"),(0,a.kt)("p",null,"\u90fd\u662f\u5bf9\u9875\u9762\u8fdb\u884c\u7f29\u653e\u7684\u64cd\u4f5c\uff0c\u7528\u6765\u505a\u81ea\u9002\u5e94\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u53d8\u5316\uff0c\u6216\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u9002\u914d\u60c5\u51b5\u3002"),(0,a.kt)("h2",{id:"zoom"},"zoom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"zoom: normal; // zoom:1\nzoom: 50%;\nzoom: 1.5; //\u540c\u767e\u5206\u6bd4\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"zoom \u5e76\u4e0d\u662f\u6807\u51c6\u5c5e\u6027\uff0c ",(0,a.kt)("strong",{parentName:"p"},"Firefox \u81f3\u4eca\u4e0d\u652f\u6301"),"\u3002IE \u65f6\u4ee3\u7528\u4e8e\u5904\u7406\u4e00\u4e9b\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u73b0\u5728\u53ef\u4ee5\u7528\u6765\u9002\u914d\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u4e8e\u9875\u9762\u5de6\u4e0a\u89d2\u8fdb\u884c\u7f29\u653e\uff0cxy \u65b9\u5411\u540c\u65f6\u8fdb\u884c\u7f29\u653e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u662f dom \u5143\u7d20\u6240\u5360\u7a7a\u95f4\u5927\u5c0f\u7684\u771f\u5b9e\u6539\u53d8\uff0c\u4f1a\u5bfc\u81f4\u5e03\u5c40\u53d8\u5316\uff0c\u5f15\u53d1\u91cd\u7ed8\u3002\u5982\u679c\u7528\u6765\u505a\u52a8\u753b\uff0c\u9700\u8981\u8003\u8651\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",null,"\u53d7\u6d4f\u89c8\u5668\u6700\u5c0f\u5b57\u53f7\u7684\u9650\u5236\uff1azoom \u7f29\u653e\u540e\u7684\u6700\u5c0f\u5b57\u53f7\u4e3a 12 \u50cf\u7d20\u3002"),"\uff08\u5b9e\u9645\u6d4b\u8bd5\uff0cChrome \u652f\u6301 zoom \u7f29\u653e\u5230\u5c0f\u4e8e 12px\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8d1f\u6570\u3002")),(0,a.kt)("h2",{id:"transformscale"},"transform:scale"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"transform: scale(2, 0.5);\ntransform: scaleX(2);\ntransform: scaleY(0.5);\ntransform: scaleZ(0.3);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u76f8\u5bf9\u4e8e\u5143\u7d20\u7684\u4e2d\u5fc3\u8fdb\u884c\u7f29\u653e\u3002\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"transform-origin"),"\u8fdb\u884c\u8bbe\u7f6e\u7f29\u653e\u4f4d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5355\u72ec\u8bbe\u7f6e x \u65b9\u5411\u7684\u7f29\u653e\u6216\u8005 y \u65b9\u5411\u7684\u7f29\u653e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5143\u7d20\u6240\u5360\u7684\u7a7a\u95f4\u5927\u5c0f\u662f\u4e0d\u53d8\u7684\uff0c\u6240\u4ee5\u4e0d\u4f1a\u5bfc\u81f4\u5e03\u5c40\u53d8\u5316\uff0c\u4e0d\u4f1a\u5f15\u53d1\u91cd\u7ed8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5b8c\u5168\u5168\u7684\u7b49\u6bd4\u7f29\u653e\uff0c\u5305\u62ec\u6587\u5b57\u4e0d\u4f1a\u53d7\u6700\u5c0f\u5b57\u4f53\u5927\u5c0f\u7684\u9650\u5236\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"zoom \u4e0e transform \u5171\u540c\u4f7f\u7528\uff0c\u6548\u679c\u4f1a\u53e0\u52a0\u663e\u793a\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u54ea\u79cd"},"\u4f7f\u7528\u54ea\u79cd\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u672c\u6765\u5c31\u6709 transform \u7684\u8bbe\u7f6e\uff1a rotate,translate \u7b49\uff0c\u4e3a\u4e86\u4e0d\u8ba9 scale \u8986\u76d6\uff0c\u53ef\u4ee5\u4f7f\u7528 zoom \u505a\u4e00\u4e9b\u9759\u6001\u5185\u5bb9\u7684\u63a7\u5236\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u4f7f\u7528 zoom \u9700\u8981\u6ce8\u610f\u6027\u80fd\u95ee\u9898\uff0c\u5c24\u5176\u662f\u79fb\u52a8\u7aef\u3002"),(0,a.kt)("p",null,"// todo: \u68c0\u6d4b\u7528\u6237\u662f\u5426\u7f29\u653e\u9875\u9762\uff1f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/"},"\u5982\u4f55\u4f7f\u7528 JS \u68c0\u6d4b\u7528\u6237\u662f\u5426\u7f29\u653e\u4e86\u9875\u9762\uff1f \xab \u5f20\u946b\u65ed-\u946b\u7a7a\u95f4-\u946b\u751f\u6d3b")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/"},"\u5c0f tips: zoom \u548c transform:scale \u7684\u533a\u522b \xab \u5f20\u946b\u65ed-\u946b\u7a7a\u95f4-\u946b\u751f\u6d3b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/zoom"},"zoom - CSS: Cascading Style Sheets | MDN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.zhangxinxu.com/wordpress/2015/02/ie-zoom-transform-filter/"},"\u5c0f tip: IE \u4e0b zoom \u6216 Matrix \u77e9\u9635\u6ee4\u955c\u4e2d\u5fc3\u70b9\u53d8\u6362\u5b9e\u73b0 \xab \u5f20\u946b\u65ed-\u946b\u7a7a\u95f4-\u946b\u751f\u6d3b"))))}f.isMDXComponent=!0}}]);