"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7492],{4137:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>d});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function p(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?p(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var u=n.createContext({}),o=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},k=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,p=t.originalType,u=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),c=o(l),s=a,d=c["".concat(u,".").concat(s)]||c[s]||m[s]||p;return l?n.createElement(d,r(r({ref:e},k),{},{components:l})):n.createElement(d,r({ref:e},k))}));function d(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=l.length,r=new Array(p);r[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[c]="string"==typeof t?t:a,r[1]=i;for(var o=2;o<p;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},8355:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var n=l(7462),a=(l(7294),l(4137));const p={},r="\u7f51\u7edc",i={unversionedId:"fe-basic/network",id:"fe-basic/network",title:"\u7f51\u7edc",description:"HTTP",source:"@site/docs/fe-basic/network.md",sourceDirName:"fe-basic",slug:"/fe-basic/network",permalink:"/docs/fe-basic/network",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/network.md",tags:[],version:"current",lastUpdatedAt:1676208552,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{},sidebar:"FE",previous:{title:"axios",permalink:"/docs/fe-basic/how-to-use-axios"},next:{title:"TS \u57fa\u7840",permalink:"/docs/fe-basic/typescript-basic"}},u={},o=[{value:"HTTP",id:"http",level:2},{value:"HTTP/1.0 \u4e0e HTTP/1.1",id:"http10-\u4e0e-http11",level:3},{value:"\u77ed\u94fe\u63a5\u957f\u8fde\u63a5",id:"\u77ed\u94fe\u63a5\u957f\u8fde\u63a5",level:4},{value:"HTTP/1.1 \u4e0e HTTP/2.0",id:"http11-\u4e0e-http20",level:3},{value:"HTTP/3",id:"http3",level:3},{value:"HTTPS",id:"https",level:3},{value:"\u52a0\u5bc6\u539f\u7406",id:"\u52a0\u5bc6\u539f\u7406",level:4},{value:"\u4e2d\u95f4\u4eba\u653b\u51fb",id:"\u4e2d\u95f4\u4eba\u653b\u51fb",level:4},{value:"HTTP \u72b6\u6001\u7801",id:"http-\u72b6\u6001\u7801",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"get post",id:"get-post",level:4},{value:"post put",id:"post-put",level:4},{value:"\u653b\u51fb",id:"\u653b\u51fb",level:3},{value:"XSS",id:"xss",level:4},{value:"CSRF",id:"csrf",level:4},{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",level:2},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 URL \u90fd\u53d1\u751f\u4e86\u4ec0\u4e48",id:"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165-url-\u90fd\u53d1\u751f\u4e86\u4ec0\u4e48",level:3},{value:"TCP \u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b",id:"tcp-\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2",id:"\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2",level:3},{value:"SSE",id:"sse",level:3},{value:"Reference",id:"reference",level:2}],k={toc:o};function c(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,a.kt)("h2",{id:"http"},"HTTP"),(0,a.kt)("p",null,"\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\u3002\u5efa\u7acb\u5728 TCP \u8fde\u63a5\u4e0a\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u4f20\u8f93\u3002\u6709\u8bf7\u6c42\u65b9\u548c\u54cd\u5e94\u65b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d85\u6587\u672c")),(0,a.kt)("p",null,"HTTP \u65e0\u72b6\u6001\uff1a \u534f\u8bae\u81ea\u8eab\u53ea\u6709\u4e00\u4e2a\u6765\u56de\uff0c\u6765\u4e0d\u53ca\u8bb0\u5f55\u72b6\u6001\u3002"),(0,a.kt)("h3",{id:"http10-\u4e0e-http11"},"HTTP/1.0 \u4e0e HTTP/1.1"),(0,a.kt)("p",null,"\u8fde\u63a5\uff1ahttp1.0 \u9ed8\u8ba4\u4f7f\u7528\u975e\u6301\u4e45\u8fde\u63a5\uff0chttp1.1 \u9ed8\u8ba4\u4f7f\u7528\u6301\u4e45\u8fde\u63a5\uff0c\u591a\u4e2a http \u8bf7\u6c42\u53ef\u590d\u7528\u540c\u4e00\u4e2a TCP \u8fde\u63a5\uff0c\u7528\u4e8e\u907f\u514d\u4f7f\u7528\u975e\u6301\u4e45\u8fde\u63a5\u65f6\u6bcf\u6b21\u90fd\u9700\u8981\u5efa\u7acb\u8fde\u63a5\u7684\u65f6\u5ef6\u3002"),(0,a.kt)("p",null,"\u8bf7\u6c42\u8d44\u6e90\uff1ahttp 1.1 \u5728\u8bf7\u6c42\u5934\u5f15\u5165\u4e86 range \uff0c\u53ef\u4ee5\u90e8\u5206\u8fd4\u56de\uff0c\u8bf7\u6c42\u7801\u662f 206\uff0c\u8282\u7701\u5e26\u5bbd\uff0c\u4e5f\u5229\u4e8e\u4f20\u8f93\u5927\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u7f13\u5b58\uff1a\u589e\u52a0\u7f13\u5b58\u7ba1\u7406\u548c\u63a7\u5236\u3002\u54cd\u5e94\u5934\u6dfb\u52a0 Cache-Control\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Keep-Alive")),(0,a.kt)("p",{parentName:"admonition"},"HTTP 1.0 \u9ed8\u8ba4\u77ed\u8fde\u63a5\uff0c\u9ed8\u8ba4\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42/\u5e94\u7b54\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u90fd\u8981\u65b0\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u5b8c\u6210\u4e4b\u540e\u7acb\u5373\u65ad\u5f00\u8fde\u63a5\u3002"),(0,a.kt)("p",{parentName:"admonition"},"HTTP1.1 \u9ed8\u8ba4\u957f\u8fde\u63a5\u3002\u6570\u636e\u4f20\u8f93\u5b8c\u6210\u4e86\u4fdd\u6301 TCP \u8fde\u63a5\u4e0d\u65ad\u5f00\uff0c\u7b49\u5f85\u5728\u540c\u57df\u540d\u4e0b\u7ee7\u7eed\u7528\u8fd9\u4e2a\u901a\u9053\u4f20\u8f93\u6570\u636e\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u7279\u70b9\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u8f83\u5c11\u7684 CPU \u548c\u5185\u5b58\u4f7f\u7528\uff0c\u540c\u65f6\u6253\u5f00\u7684\u8fde\u63a5\u51cf\u5c11\u4e86\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u548c\u5e94\u7b54 HTTP \u7ba1\u7ebf\u5316\uff0c\u8bf7\u6c42\u4e32\u884c\uff0c\u6709\u961f\u5934\u963b\u585e\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86\u540e\u7eed\u8bf7\u6c42\u5ef6\u8fdf\u3002\u65e0\u9700\u518d\u6b21\u8fdb\u884c\u63e1\u624b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u957f\u65f6\u95f4 TCP \u8fde\u63a5\u5bb9\u6613\u5bfc\u81f4\u6d6a\u8d39\u7cfb\u7edf\u8d44\u6e90\u3002"))),(0,a.kt)("h4",{id:"\u77ed\u94fe\u63a5\u957f\u8fde\u63a5"},"\u77ed\u94fe\u63a5\u957f\u8fde\u63a5"),(0,a.kt)("p",null,"\u77ed\u94fe\u63a5\uff1a\u6bcf\u6b21 http \u8bf7\u6c42\u90fd\u65b0\u5efa\u4e00\u4e2a TCP \u8fde\u63a5\uff0c\u6bcf\u6b21\u90fd\u7ecf\u5386\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b"),(0,a.kt)("p",null,"\u957f\u8fde\u63a5\uff1a http /1.1 \u7684 Keep-Alive\u3002\u591a\u6b21\u8bf7\u6c42\u548c\u54cd\u5e94\u57fa\u4e8e\u4e00\u6761 TCP \u8fde\u63a5\uff0c\u6709\u4e00\u5b9a\u4fdd\u6301\u65f6\u95f4\u3002"),(0,a.kt)("h3",{id:"http11-\u4e0e-http20"},"HTTP/1.1 \u4e0e HTTP/2.0"),(0,a.kt)("p",null,"HTTP/2.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e8c\u8fdb\u5236\u534f\u8bae\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u591a\u8def\u590d\u7528\u3002\u540c\u4e00\u4e2a TCP \u8fde\u63a5\u4e2d\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u53ef\u53d1\u8d77\u591a\u4e2a\u8bf7\u6c42\uff0c\u591a\u4e2a\u54cd\u5e94\uff0c\u4e0d\u9700\u8981\u6309\u7167\u987a\u5e8f\u5904\u7406\uff0c\u5e9f\u5f03\u7ba1\u9053\u3002\u907f\u514d\u961f\u5934\u5835\u585e\u7684\u95ee\u9898\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"http2 \u5bf9\u4e8e\u540c\u4e00\u57df\u540d\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u800c\u4e0d\u662f\u50cf http/1.1 \u90a3\u6837\u521b\u5efa 6~8 \u4e2a\u8fde\u63a5\uff0c\u4e0d\u9700\u8981\u8fdb\u884c\u57df\u540d\u5206\u7247\u4e86\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u538b\u7f29\u5934\u90e8\uff0c\u51cf\u5c11\u6570\u636e\u4f20\u8f93\u91cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5141\u8bb8\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6570\u636e\uff0c\u7528\u4e8e\u670d\u52a1\u5668\u5728\u5ba2\u6237\u7aef\u7f13\u5b58\u4e2d\u586b\u5145\u6570\u636e\u3002"),(0,a.kt)("p",{parentName:"li"},"HTTP/2.0 \u4e0b\u670d\u52a1\u5668\u4e3b\u52a8\u63a8\u9001\u7684\u662f\u9759\u6001\u8d44\u6e90\uff0c\u548c WebSocket \u4ee5\u53ca\u4f7f\u7528 SSE \u7b49\u65b9\u5f0f\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u5373\u65f6\u6570\u636e\u7684\u63a8\u9001\u662f\u4e0d\u540c\u7684\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-conf",metastring:"title='nginx.conf'",title:"'nginx.conf'"},"  location = /index.html {\n  http2_push /css/style.css;\n  http2_push /img/avatar.jpg;\n}\n")))),(0,a.kt)("h3",{id:"http3"},"HTTP/3"),(0,a.kt)("p",null,"\u653e\u5f03 TCP\uff0c\u8f6c\u800c\u4f7f\u7528\u57fa\u4e8e UDP \u7684 QUIC \uff08\u5feb\u901f UDP \u4e92\u8054\u7f51\u8fde\u63a5\uff09\u534f\u8bae\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8981\u6c42\u52a0\u5bc6\u540e\u624d\u80fd\u5efa\u7acb\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3 TCP \u4e22\u5305\u963b\u585e\u7684\u95ee\u9898")),(0,a.kt)("h3",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"\u8d70\u5728\u5b89\u5168\u534f\u8bae\u4e0a\u7684 http\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"http \u534f\u8bae\u4fe1\u606f\u662f\u660e\u6587\u4f20\u8f93\u7684\uff0chttps \u662f\u5177\u6709\u5b89\u5168\u6027\u7684 SSL \u52a0\u5bc6\u7684\u4f20\u8f93\u534f\u8bae\uff0c\u5177\u6709\u8eab\u4efd\u9a8c\u8bc1\u3001\u4fe1\u606f\u52a0\u5bc6\u3001\u5b8c\u6574\u6027\u6821\u9a8c\u7b49\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"http \u9ed8\u8ba4\u7aef\u53e3\u662f 80 \uff0chttps \u9ed8\u8ba4\u7aef\u53e3\u662f 443\u3002")),(0,a.kt)("h4",{id:"\u52a0\u5bc6\u539f\u7406"},"\u52a0\u5bc6\u539f\u7406"),(0,a.kt)("p",null,"\u63e1\u624b\u7684\u662f\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u63e1\u624b\u5b8c\u6210\u4ee5\u540e\u662f\u5bf9\u79f0\u52a0\u5bc6\uff0c\u975e\u5bf9\u79f0\u52a0\u5bc6\u89e3\u5bc6\u65f6\u95f4\u8f83\u4e45\u3002\u57fa\u4e8e\u6563\u5217\u51fd\u6570\u9a8c\u8bc1\u4fe1\u606f\u7684\u5b8c\u6574\u6027\u3002"),(0,a.kt)("p",null,"TLS \u534f\u8bae\uff1a\u8bc1\u4e66\u94fe\uff0c\u5373\u4fe1\u4efb\u94fe\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u79f0\u52a0\u5bc6\uff1a\u52a0\u5bc6\u4e0e\u89e3\u5bc6\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u7801\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u975e\u5bf9\u79f0\u52a0\u5bc6\uff1a\u7528\u516c\u94a5\u52a0\u5bc6\uff0c\u9700\u8981\u4f7f\u7528\u5bf9\u5e94\u7684\u79c1\u94a5\u89e3\u5bc6\u3002"))),(0,a.kt)("h4",{id:"\u4e2d\u95f4\u4eba\u653b\u51fb"},"\u4e2d\u95f4\u4eba\u653b\u51fb"),(0,a.kt)("p",null,"\u628a HTTP \u901a\u4fe1\u4e2d\u7684\u516c\u94a5\u6362\u6389\uff0c\u53ef\u4ee5\u89e3\u5bc6\u901a\u4fe1\u53cc\u65b9\u6240\u53d1\u9001\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u5b89\u5168\u7684\u7b2c\u4e09\u65b9\u9881\u53d1\u8bc1\u4e66\uff08CA\uff09\uff0c\u8bc1\u660e\u8eab\u4efd\u3002"),(0,a.kt)("p",null,"\u9632\u6b62 CA \u88ab\u7be1\u6539\uff1a\u6570\u5b57\u7b7e\u540d\uff0c\u5bf9\u8bc1\u4e66\u518d\u6b21\u52a0\u5bc6\u5f97\u5230\u6570\u5b57\u7b7e\u540d\u3002"),(0,a.kt)("h3",{id:"http-\u72b6\u6001\u7801"},"HTTP \u72b6\u6001\u7801"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.loli.net/2020/07/08/eqmHZIw81uyJB53.png",alt:"\u54cd\u5e94\u6d88\u606f\u7684\u72b6\u6001\u7801"})),(0,a.kt)("p",null,"101 \u534f\u8bae\u5347\u7ea7\uff0c\u6bd4\u5982\u5728 HTTP \u57fa\u7840\u4e0a\u6539\u4e3a WebSocket"),(0,a.kt)("p",null,"206 \u90e8\u5206\u8fd4\u56de\uff0c\u54cd\u5e94\u5934\u901a\u5e38\u6709 Content-Range\uff0c\u8868\u793a\u54cd\u5e94 body \u6570\u636e\u7684\u5177\u4f53\u8303\u56f4\u3002"),(0,a.kt)("p",null,"301 \u6c38\u4e45\u91cd\u5b9a\u5411\uff0c\u4ee5\u540e\u8bbf\u95ee\u90fd\u662f\u8bf7\u6c42\u65b0\u5730\u5740\u3002\u6bd4\u5982 http \u53d8\u4e3a https \u9700\u8981\u914d\u7f6e 301 \u8df3\u8f6c\uff0c\u641c\u7d22\u5f15\u64ce\u6536\u5f55\u3002"),(0,a.kt)("p",null,"302 \u6682\u65f6\u91cd\u5b9a\u5411\uff0c\u4ee5\u540e\u8bbf\u95ee\u8fd8\u662f\u8bf7\u6c42\u539f\u5730\u5740\u3002\u6bd4\u5982\u4e1a\u52a1\u4e2d\u6d3b\u52a8\u9875\u91cd\u5b9a\u5411\uff0c\u672a\u767b\u5f55\u91cd\u5b9a\u5411\u5230\u9996\u9875\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u91cd\u5b9a\u5411\u9700\u8981\u914d\u5408\u54cd\u5e94\u5934 location:uri \u8868\u793a\u8df3\u8f6c\u5730\u5740")),(0,a.kt)("p",null,"304 Not Modified\uff0c\u672a\u4fee\u6539 \u534f\u5546\u7f13\u5b58\u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u534f\u5546\u7f13\u5b58",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If-Modified-Since\uff08\u8bf7\u6c42\uff09/Last-Modified\uff08\u54cd\u5e94\uff09: \u81ea\u4e0a\u6b21\u8bbf\u95ee\u4ee5\u6765\u8d44\u6e90\u672a\u66f4\u65b0\uff0c\u8fd4\u56de 304"),(0,a.kt)("li",{parentName:"ul"},"If-None-Match\uff08\u8bf7\u6c42 /ETag\uff08\u54cd\u5e94\uff09: \u4e00\u4e2a\u54c8\u5e0c\u503c\uff0c\u5982\u679c\u8fd9\u4e2a\u503c\u548c\u670d\u52a1\u5668\u50a8\u5b58\u7684\u5bf9\u5e94\u503c\u4e00\u6837\uff0c\u8868\u793a\u8d44\u6e90\u672a\u66f4\u65b0\uff0c\u8fd4\u56de 304"))),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u7f13\u5b58 \u548c 304 \u6ca1\u6709\u5173\u7cfb\uff0c\u4e3b\u8981\u662f\u7528\u4e8e\u51cf\u8f7b\u6d4f\u89c8\u5668\u8d1f\u62c5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Expires: \u8fc7\u671f\u65f6\u95f4\uff0c\u8d44\u6e90\u672a\u8fc7\u671f\u90fd\u4f1a\u50a8\u5b58\u5728\u6d4f\u89c8\u5668\u91cc\uff0c\u4e0d\u7528\u53bb\u52a0\u8f7d"),(0,a.kt)("li",{parentName:"ul"},"cache-control: \u73b0\u5728\u6700\u5e38\u7528\u7684\uff0c\u53ef\u4ee5\u5728\u8bf7\u6c42\u5934\u91cc\uff0c\u4e5f\u53ef\u4ee5\u5728\u54cd\u5e94\u5934\u91cc\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5404\u79cd\u7f13\u5b58\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u534f\u5546\u7f13\u5b58\uff1b\u8be6\u7ec6\u89c1 MDN")))),(0,a.kt)("p",null,"400 Bad Request\uff0c\u8bf7\u6c42\u9519\u8bef\uff0c\u901a\u7528\u72b6\u6001\u7801\u4e0d\u5177\u4f53"),(0,a.kt)("p",null,"401 UnAuthorized\uff0c \u672a\u6388\u6743\uff0c\u5f53\u524d\u8bf7\u6c42\u9700\u8981\u7528\u6237\u9a8c\u8bc1"),(0,a.kt)("p",null,"403 Forbidden\uff0c\u7981\u6b62\u8bbf\u95ee"),(0,a.kt)("p",null,"404 Not found \u672a\u627e\u5230\uff0c\u8bf7\u6c42\u6240\u5e0c\u671b\u5f97\u5230\u7684\u8d44\u6e90\u672a\u88ab\u5728\u670d\u52a1\u5668\u4e0a\u53d1\u73b0"),(0,a.kt)("p",null,"406 Not Acceptable \u4e0d\u80fd\u8fd4\u56de\u7b26\u5408\u8981\u6c42\u7684\u6570\u636e\uff0c\u8bf7\u6c42\u5934\u7684 Accept \u6709\u95ee\u9898"),(0,a.kt)("p",null,"452 Unavailable For Legal Reasons \u975e\u6cd5\u8d44\u6e90\uff0c\u653f\u6cbb\u539f\u56e0\u4e0d\u53ef\u5c55\u793a"),(0,a.kt)("p",null,"500 Internal Server Error \u670d\u52a1\u5668\u9519\u8bef\uff0c\u901a\u7528"),(0,a.kt)("p",null,"501 Not Implemented \u672a\u5b9e\u73b0\uff0c\u6b64\u8bf7\u6c42\u65b9\u6cd5\u4e0d\u88ab\u670d\u52a1\u5668\u652f\u6301\u4e14\u65e0\u6cd5\u88ab\u5904\u7406"),(0,a.kt)("p",null,"502 Bad Gateway \u670d\u52a1\u5668\u4f5c\u4e3a\u7f51\u5173\u6216\u4ee3\u7406\u65f6\u8fd4\u56de\u7684"),(0,a.kt)("p",null,"503 Service Unavailable \u670d\u52a1\u5668\u5f88\u5fd9\uff0c\u6682\u65f6\u65e0\u6cd5\u54cd\u5e94"),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u6cd5"},"\u8bf7\u6c42\u65b9\u6cd5"),(0,a.kt)("h4",{id:"get-post"},"get post"),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4 get \u7528\u4e8e\u83b7\u53d6\u6570\u636e\uff0cpost \u7528\u4e8e\u63d0\u4ea4\u6570\u636e\u3002"),(0,a.kt)("p",null,"get \u53ef\u4ee5\u628a\u53c2\u6570\u653e\u5230 url\uff0c\u8fd9\u79cd\u65b9\u5f0f\u76f8\u5bf9\u4e0d\u5b89\u5168\u3002"),(0,a.kt)("p",null,"get \u4e00\u822c\u6ca1\u6709 body \uff0cpost \u4e00\u822c\u6709 body\u3002"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u4e00\u822c\u4f1a\u5bf9 get \u8bf7\u6c42\u505a\u7f13\u5b58\uff0c\u4e0d\u4f1a\u5bf9 post \u8bf7\u6c42\u505a\u7f13\u5b58\u3002"),(0,a.kt)("h4",{id:"post-put"},"post put"),(0,a.kt)("p",null,"post \u4e00\u822c\u7528\u4e8e\u521b\u5efa\u8d44\u6e90\uff0c\u5177\u6709\u975e\u5e42\u7b49\u6027\u3002"),(0,a.kt)("p",null,"put \u7528\u4e8e\u66f4\u65b0\u8d44\u6e90\uff0c\u5177\u6709\u5e42\u7b49\u6027\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728 HTTP \u89c4\u8303\u4e2d, POST \u662f\u975e\u5e42\u7b49\u7684,\u591a\u6b21\u8c03\u7528\u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u7ed3\u679c, \u6bd4\u5982\uff1a\u521b\u5efa\u4e00\u4e2a\u7528\u6237, \u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u6216\u662f\u5176\u4ed6\u539f\u56e0\u591a\u521b\u5efa\u4e86\u51e0\u6b21,\u90a3\u4e48\u5c06\u4f1a\u6709\u591a\u4e2a\u7528\u6237\u88ab\u521b\u5efa.\u800c PUT id/1 \u5219\u4f1a\u521b\u5efa\u4e00\u4e2a id \u4e3a 1 \u7684\u7528\u6237,\u591a\u6b21\u8c03\u7528\u8fd8\u662f\u4f1a\u521b\u5efa\u7684\u7ed3\u679c\u662f\u4e00\u6837\u7684\uff0c\u6240\u4ee5 PUT \u662f\u5e42\u7b49\u7684\u3002")),(0,a.kt)("h3",{id:"\u653b\u51fb"},"\u653b\u51fb"),(0,a.kt)("h4",{id:"xss"},"XSS"),(0,a.kt)("p",null,"\u8de8\u7ad9",(0,a.kt)("strong",{parentName:"p"},"\u811a\u672c\u653b\u51fb"),"\u3002\u4ee3\u7801\u6ce8\u5165\uff0c\u8fd0\u884c\u5728\u5ba2\u6237\u7aef\uff0c\u53ef\u80fd\u76d7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u9632\u5fa1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528\u62fc\u63a5\u5b57\u7b26\u4e32\uff0c\u505a\u597d\u5145\u5206\u7684\u8f6c\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 CSP \u5185\u5bb9\u5b89\u5168\u7b56\u7565\uff0c\u5efa\u7acb\u767d\u540d\u5355\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u53ef\u4ee5\u52a0\u8f7d\u54ea\u4e9b\u5916\u90e8\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u62a4\u654f\u611f\u4fe1\u606f\u3002cookie \u4f7f\u7528 http-only \uff0c\u589e\u52a0\u9a8c\u8bc1\u7801\u7b49\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"CSP \u5185\u5bb9\u5b89\u5168\u7b56\u7565\uff0c\u5efa\u7acb\u767d\u540d\u5355\uff0c\u544a\u8bc9\u6d4f\u89c8\u5668\u53ef\u4ee5\u52a0\u8f7d\u5e76\u6267\u884c\u54ea\u4e9b\u5916\u90e8\u8d44\u6e90\u3002\u53ef\u4ee5\u901a\u8fc7 HTTP \u8bf7\u6c42\u5934\u7684 Content-Security-Policy \u5b9e\u73b0\u3002")),(0,a.kt)("h4",{id:"csrf"},"CSRF"),(0,a.kt)("p",null,"\u8de8\u7ad9",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\u4f2a\u9020"),"\u653b\u51fb\uff0c\u5192\u5145\u7528\u6237\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\u3002\u6bd4\u5982\u8bf1\u5bfc\u7528\u6237\u8fdb\u5165\u7b2c\u4e09\u65b9\u7ad9\u70b9\uff0c\u5411\u88ab\u653b\u51fb\u7f51\u7ad9\u53d1\u9001\u8de8\u7ad9\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u9632\u5fa1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u540c\u6e90\u68c0\u6d4b\u3002\u901a\u8fc7 http \u8bf7\u6c42\u5934\u7684 referer/origin \u6765\u5224\u65ad\u3002\u7f3a\u70b9\u662f\u53ef\u80fd\u5c4f\u853d\u4e86\u641c\u7d22\u5f15\u64ce\u7684\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e cookie \u7684 Samesite\uff0c\u9650\u5236 cookie \u4e0d\u80fd\u88ab\u7b2c\u4e09\u65b9\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"\u4e00\u4e9b\u95ee\u9898"},"\u4e00\u4e9b\u95ee\u9898"),(0,a.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165-url-\u90fd\u53d1\u751f\u4e86\u4ec0\u4e48"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 URL \u90fd\u53d1\u751f\u4e86\u4ec0\u4e48"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"URL \u89e3\u6790\uff0c\u5206\u6790\u4f20\u8f93\u534f\u8bae\u548c\u8def\u5f84\u3002\u5bf9\u975e\u6cd5\u5b57\u7b26\u8f6c\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},"DNS \u89e3\u6790\uff0c\u5411\u591a\u7ea7\u670d\u52a1\u5668\u8bf7\u6c42\u89e3\u6790\u57df\u540d\uff0c\u83b7\u53d6 IP \u5730\u5740\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u5224\u65ad\uff1a\u7f13\u5b58\u4e5f\u662f\u591a\u5c42\u7684\uff0c\u6bd4\u5982\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u7cfb\u7edf\u7f13\u5b58\uff0c\u8def\u7531\u5668\u7f13\u5b58\uff0c\u57df\u540d\u670d\u52a1\u5668\u7f13\u5b58\u7b49"),(0,a.kt)("li",{parentName:"ul"},"DNS \u8d1f\u8f7d\u5747\u8861\u3002DNS \u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5408\u9002\u7684\u673a\u5668\u7684 IP \u7ed9\u7528\u6237\uff0c\u4f8b\u5982\u53ef\u4ee5\u6839\u636e\u6bcf\u53f0\u673a\u5668\u7684\u8d1f\u8f7d\u91cf\uff0c\u8be5\u673a\u5668\u79bb\u7528\u6237\u5730\u7406\u4f4d\u7f6e\u7684\u8ddd\u79bb\u7b49\u7b49\uff0c\u8fd9\u79cd\u8fc7\u7a0b\u5c31\u662f DNS \u8d1f\u8f7d\u5747\u8861"))),(0,a.kt)("li",{parentName:"ul"},"TCP \u8fde\u63a5\uff1a\u4e09\u6b21\u63e1\u624b"),(0,a.kt)("li",{parentName:"ul"},"HTTPS \u63e1\u624b TLS \u534f\u5546"),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u9875\u9762\u6e32\u67d3\u3002 html \u6587\u4ef6\u6784\u5efa DOM \u6811\uff0ccss \u6587\u4ef6\u6784\u5efa CSSOM \u6811\uff0c\u5171\u540c\u6784\u5efa\u6e32\u67d3\u6811\u3002\u6839\u636e\u6e32\u67d3\u6811\u8fdb\u884c\u9875\u9762\u7ed8\u5236"),(0,a.kt)("li",{parentName:"ul"},"TCP \u56db\u6b21\u6325\u624b")),(0,a.kt)("h3",{id:"tcp-\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b"},"TCP \u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b"),(0,a.kt)("p",null,"\u81f3\u5c11\u8981\u5efa\u7acb\u4e09\u6b21\u6210\u529f\u7684\u5355\u5411\u901a\u4fe1\u624d\u80fd\u786e\u5b9a\u53cc\u65b9\u90fd\u80fd\u6536\u53d1\u4fe1\u606f\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://i.loli.net/2020/07/14/ipW1aTYRJcryvnH.png",alt:"TCP\u6a21\u578b"})),(0,a.kt)("p",null,"\u56db\u6b21\u6325\u624b\uff0c\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u53ef\u4ee5\u662f\u4e09\u6b21\u3002"),(0,a.kt)("p",null,"\u5f53\u670d\u52a1\u7aef\u6536\u5230\u5ba2\u6237\u7aef\u7684 FIN \u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u53d1\u9001 FIN+ACK \u62a5\u6587\u3002\u5176\u4e2d ACK \u62a5\u6587\u662f\u7528\u6765\u5e94\u7b54\u7684\uff0cSYN \u62a5\u6587\u662f\u7528\u6765\u540c\u6b65\u7684\u3002\u4f46\u662f\u5173\u95ed\u8fde\u63a5\u65f6\uff0c\u5f53\u670d\u52a1\u7aef\u6536\u5230 FIN \u62a5\u6587\u65f6\uff0c\u5f88\u53ef\u80fd\u5e76\u4e0d\u4f1a\u7acb\u5373\u5173\u95ed SOCKET\uff0c\u6240\u4ee5\u53ea\u80fd\u5148\u56de\u590d\u4e00\u4e2a ACK \u62a5\u6587\uff0c\u544a\u8bc9\u5ba2\u6237\u7aef\uff0c\u201c\u4f60\u53d1\u7684 FIN \u62a5\u6587\u6211\u6536\u5230\u4e86\u201d\u3002\u53ea\u6709\u7b49\u5230\u6211\u670d\u52a1\u7aef\u6240\u6709\u7684\u62a5\u6587\u90fd\u53d1\u9001\u5b8c\u4e86\uff0c\u6211\u624d\u80fd\u53d1\u9001 FIN \u62a5\u6587\uff0c\u56e0\u6b64\u4e0d\u80fd\u4e00\u8d77\u53d1\u9001\uff0c\u6545\u9700\u8981\u56db\u6b21\u6325\u624b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TCP \u4f7f\u7528\u56db\u6b21\u6325\u624b\u7684\u539f\u56e0\u662f\u56e0\u4e3a TCP \u7684\u8fde\u63a5\u662f\u5168\u53cc\u5de5\u7684\uff0c\u9700\u8981\u53cc\u65b9\u5206\u522b\u91ca\u653e\u5230\u5bf9\u65b9\u7684\u8fde\u63a5\uff0c\u5355\u72ec\u4e00\u65b9\u7684\u8fde\u63a5\u91ca\u653e\uff0c\u53ea\u4ee3\u8868\u4e0d\u80fd\u518d\u5411\u5bf9\u65b9\u53d1\u9001\u6570\u636e\uff0c\u8fde\u63a5\u5904\u4e8e\u7684\u662f\u534a\u91ca\u653e\u7684\u72b6\u6001\u3002")),(0,a.kt)("h3",{id:"websocket"},"WebSocket"),(0,a.kt)("p",null,"\u5e94\u7528\u5c42\u534f\u8bae\uff0c\u7528\u4e8e\u6d4f\u89c8\u5668\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u4fe1\u7684\u6280\u672f\u3002\u57fa\u4e8e TCP \uff0c\u590d\u7528 HTTP \u901a\u9053\uff0c\u5b8c\u6210\u4e00\u6b21\u63e1\u624b\u5c31\u53ef\u4ee5\u521b\u5efa\u6301\u4e45\u6027\u7684\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u7279\u70b9\uff1a\u670d\u52a1\u5668\u53ef\u4ee5\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f\uff0c\u5ba2\u6237\u7aef\u4e5f\u53ef\u4ee5\u4e3b\u52a8\u5411\u670d\u52a1\u5668\u63a8\u9001\u6d88\u606f\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u53cc\u5411\u901a\u4fe1\uff0c\u5b9e\u65f6\u6027\u5f3a"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u540c\u6e90\u9650\u5236\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e0e\u4efb\u610f\u670d\u52a1\u5668\u901a\u4fe1"),(0,a.kt)("li",{parentName:"ul"},"\u8f83\u5c11\u5730\u63a7\u5236\u5f00\u9500\uff0c\u8fde\u63a5\u521b\u5efa\u540e\uff0c\u6570\u636e\u5305\u5934\u90e8\u8f83\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"\u534f\u8bae\u6807\u8bc6\u7b26\u4e3a ws\uff0c\u52a0\u5bc6\u4e3a wss"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e HTTP \u534f\u8bae\u6709\u826f\u597d\u7684\u517c\u5bb9\u6027\uff0c\u4e0d\u5bb9\u6613\u88ab\u5c4f\u853d")),(0,a.kt)("h3",{id:"\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2"},"\u77ed\u8f6e\u8be2\u957f\u8f6e\u8be2"),(0,a.kt)("p",null,"\u90fd\u662f\u5ba2\u6237\u7aef\u4e3b\u52a8\u53d1\u8d77\u8bf7\u6c42\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u77ed\u8f6e\u8be2\uff1a\u6d4f\u89c8\u5668\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u53d1\u9001\u4e00\u6b21 http \u8bf7\u6c42\uff0c\u670d\u52a1\u7aef\u6570\u636e\u5728\u6536\u5230\u8bf7\u6c42\u540e\u76f4\u63a5\u76f8\u5e94\u3002\u5ba2\u6237\u7aef\u4e0d\u65ad\u53d1\u9001\u8bf7\u6c42\uff0c\u6a21\u62df\u5b9e\u65f6\u6536\u5230\u670d\u52a1\u5668\u7aef\u6570\u636e\u53d8\u5316\u7684\u8fc7\u7a0b\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u4e0d\u65ad\u5efa\u7acb http \u8fde\u63a5\uff0c\u6d6a\u8d39\u8d44\u6e90\uff0c\u670d\u52a1\u7aef\u538b\u529b\u5927\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u957f\u8f6e\u8be2\uff1a\u5ba2\u6237\u7aef\u53d1\u8d77\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u4e0d\u76f4\u63a5\u76f8\u5e94\uff0c\u5224\u65ad\u6570\u636e\u662f\u5426\u6709\u66f4\u65b0\uff0c\u5982\u679c\u6709\u66f4\u65b0\u624d\u8fdb\u884c\u54cd\u5e94\uff0c\u5982\u679c\u6ca1\u6709\u6570\u636e\uff0c\u5230\u8fbe\u4e00\u5b9a\u65f6\u95f4\u624d\u54cd\u5e94\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684 http \u8bf7\u6c42\u6b21\u6570\uff0c\u8282\u7ea6\u4e86\u8d44\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7aef\u538b\u529b\u5927\uff0c\u9891\u7e41\u8be2\u95ee\u6570\u636e\u5e93")))),(0,a.kt)("h3",{id:"sse"},"SSE"),(0,a.kt)("p",null,"SSE\uff08sever-sent events\uff09\u670d\u52a1\u5668\u7aef\u63a8\u9001\u4e8b\u4ef6\uff0cHTML5 \u65b0\u589e\u7684\u529f\u80fd\uff0c\u670d\u52a1\u5668\u5355\u5411\u63a8\u9001\u6570\u636e\u5230\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"EventSource \u5b9e\u4f8b\uff0c\u5bf9 HTTP \u5f00\u542f\u6301\u4e45\u5316\u8fde\u63a5\uff0c\u4e00\u76f4\u4fdd\u6301\u5f00\u542f\u76f4\u5230\u88ab\u8981\u6c42\u5173\u95ed\u3002"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7085622765113311269#heading-1"},"\u524d\u7aef\u8fdb\u9636\u9ad8\u85aa\u5fc5\u770b-HTTP \u7f51\u7edc\u7bc7 - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903832435032072"},"\u53f2\u4e0a\u6700\u8be6\u7ec6\u7684\u7ecf\u5178\u9762\u8bd5\u9898 \u4ece\u8f93\u5165 URL \u5230\u770b\u5230\u9875\u9762\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f - \u6398\u91d1"))))}c.isMDXComponent=!0}}]);