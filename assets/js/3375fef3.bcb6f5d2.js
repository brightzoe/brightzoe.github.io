"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8499],{8524:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var r=s(1527),l=s(8672);const i={authors:["zoe"],tags:["docker","data","deploy"]},c="Docker",d={id:"tools/docker",title:"Docker",description:"Docker \u4e2d\u7684\u6570\u636e\u5171\u4eab",source:"@site/docs/tools/docker.md",sourceDirName:"tools",slug:"/tools/docker",permalink:"/docs/tools/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/tools/docker.md",tags:[{label:"docker",permalink:"/docs/tags/docker"},{label:"data",permalink:"/docs/tags/data"},{label:"deploy",permalink:"/docs/tags/deploy"}],version:"current",lastUpdatedAt:1706776718,formattedLastUpdatedAt:"2024\u5e742\u67081\u65e5",frontMatter:{authors:["zoe"],tags:["docker","data","deploy"]},sidebar:"Tools",previous:{title:"\u4e2a\u4eba\u5e94\u9075\u5b88\u7684\u5f00\u53d1\u4e60\u60ef\u548c\u89c4\u8303",permalink:"/docs/tools/dev-habits-and-rules"},next:{title:"\u7ed9\u81ea\u5df1\u79d1\u666e\u4e00\u4e9b\u76f8\u5173\u7684\u4e1c\u897f",permalink:"/docs/tools/introduction-to-sth-related"}},o={},t=[{value:"Docker \u4e2d\u7684\u6570\u636e\u5171\u4eab",id:"docker-\u4e2d\u7684\u6570\u636e\u5171\u4eab",level:2},{value:"Reference",id:"reference",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(e.h2,{id:"docker-\u4e2d\u7684\u6570\u636e\u5171\u4eab",children:"Docker \u4e2d\u7684\u6570\u636e\u5171\u4eab"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u6570\u636e\u5171\u4eab\uff1f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6570\u636e\u6301\u4e45\u5316\uff0c\u4e0d\u4f1a\u5728\u5bb9\u5668\u66f4\u65b0\u540e\u4e22\u5931\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u6570\u636e\u5171\u4eab\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u5bb9\u5668\u95f4\u5171\u4eab\u6570\u636e\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Docker \u5bb9\u5668\u95f4\u5171\u4eab\u6570\u636e\u4ee5\u53ca\u4e0e\u5bbf\u4e3b\u673a\u5171\u4eab\u6570\u636e\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3b\u8981\u5206\u4e3a\u6570\u636e\u5377\u4e0e\u6570\u636e\u5377\u5bb9\u5668\u4e24\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6302\u8f7d\u5377\uff08Volumes\uff09"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1aDocker \u5377\u662f\u7531 Docker \u7ba1\u7406\u7684\u6570\u636e\u5b58\u50a8\u533a\u57df\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u9014"}),"\uff1a\u9002\u7528\u4e8e\u6301\u4e45\u5316\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u5171\u4eab\u548c\u6570\u636e\u5907\u4efd\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7279\u70b9"}),"\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6570\u636e\u4e0d\u4f1a\u968f\u5bb9\u5668\u5220\u9664\u800c\u4e22\u5931\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\u5728\u5bb9\u5668\u95f4\u5171\u4eab\u548c\u91cd\u7528\uff1a\u901a\u8fc7\u5c06\u540c\u4e00\u4e2avolume\u6302\u8f7d\u5230\u591a\u4e2a\u5bb9\u5668\u4e0a\uff0c\u4e0d\u540c\u5bb9\u5668\u53ef\u4ee5\u8bbf\u95ee\u548c\u5171\u4eab\u76f8\u540c\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u7531 Docker \u7ba1\u7406\uff0c\u66f4\u5b89\u5168\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528"}),"\uff1a\u5728 ",(0,r.jsx)(e.code,{children:"docker run"})," \u547d\u4ee4\u4e2d\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"-v"})," \u6216 ",(0,r.jsx)(e.code,{children:"--mount"})," \u6807\u5fd7\u6765\u6302\u8f7d\u5377\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7ed1\u5b9a\u6302\u8f7d\uff08Bind Mounts\uff09"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684\u6587\u4ef6\u6216\u76ee\u5f55\u76f4\u63a5\u6620\u5c04\u5230\u5bb9\u5668\u4e2d\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u9014"}),"\uff1a\u9002\u5408\u5728\u5bbf\u4e3b\u673a\u548c\u5bb9\u5668\u95f4\u5171\u4eab\u7279\u5b9a\u6587\u4ef6\u6216\u76ee\u5f55\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7279\u70b9"}),"\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u76f4\u63a5\u53cd\u6620\u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5bf9\u6587\u4ef6\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u4f1a\u5373\u65f6\u53cd\u6620\u5728\u5bbf\u4e3b\u673a\u548c\u5bb9\u5668\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528"}),"\uff1a\u5728 ",(0,r.jsx)(e.code,{children:"docker run"})," \u547d\u4ee4\u4e2d\u6307\u5b9a\u5bbf\u4e3b\u673a\u7684\u8def\u5f84\u548c\u5bb9\u5668\u7684\u76ee\u6807\u8def\u5f84\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4e34\u65f6\u5377\uff08tmpfs \u6302\u8f7d\uff09"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u5c06\u6570\u636e\u5b58\u50a8\u5728\u5bbf\u4e3b\u673a\u7684\u4e34\u65f6\u5185\u5b58\u4e2d\uff0c\u800c\u4e0d\u662f\u78c1\u76d8\u4e0a\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u9014"}),"\uff1a\u9002\u7528\u4e8e\u5b58\u50a8\u654f\u611f\u4fe1\u606f\u6216\u975e\u6301\u4e45\u5316\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7279\u70b9"}),"\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6570\u636e\u4e0d\u4f1a\u5199\u5165\u5bbf\u4e3b\u673a\u7684\u6587\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5bb9\u5668\u505c\u6b62\u540e\uff0c\u6570\u636e\u4f1a\u4e22\u5931\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u7f51\u7edc\u5171\u4eab\uff08Network Sharing\uff09"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u901a\u8fc7\u7f51\u7edc\u901a\u4fe1\u5171\u4eab\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u9014"}),"\uff1a\u9002\u5408\u4e8e\u8de8\u4e3b\u673a\u6216\u9700\u8981\u8fdc\u7a0b\u901a\u4fe1\u7684\u573a\u666f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9e\u73b0"}),"\uff1a\u53ef\u4ee5\u901a\u8fc7 REST APIs\u3001\u8fdc\u7a0b\u6570\u636e\u5e93\u8fde\u63a5\u7b49\u65b9\u5f0f\u5b9e\u73b0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Docker \u6570\u636e\u5377\u5bb9\u5668\uff08Data Volume Containers\uff09"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4e49"}),"\uff1a\u4f7f\u7528\u4e13\u95e8\u7684\u5bb9\u5668\u6765\u6301\u4e45\u5316\u548c\u5171\u4eab\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7528\u9014"}),"\uff1a\u5728\u5bb9\u5668\u95f4\u5171\u4eab\u548c\u66f4\u65b0\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u5b9e\u73b0"}),"\uff1a\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u5377\u5bb9\u5668\uff0c\u5e76\u5728\u5176\u4ed6\u5bb9\u5668\u4e2d\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"--volumes-from"})," \u6765\u6302\u8f7d\u8fd9\u4e2a\u5bb9\u5668\u7684\u5377\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5b9e\u8df5\u4e2d\uff0c\u5377\uff08Volumes\uff09\u548c\u7ed1\u5b9a\u6302\u8f7d\uff08Bind Mounts\uff09\u662f\u6700\u5e38\u7528\u7684\u65b9\u6cd5\uff0c\u5b83\u4eec\u63d0\u4f9b\u4e86\u7075\u6d3b\u4e14\u9ad8\u6548\u7684\u6570\u636e\u5171\u4eab\u548c\u6301\u4e45\u5316\u65b9\u6848\u3002"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u955c\u50cf\u4e0e\u5377\u7684\u521d\u59cb\u6570\u636e:"})," \u5f53\u7b2c\u4e00\u6b21\u521b\u5efa\u5bb9\u5668\u5e76\u6307\u5b9a\u4e00\u4e2a\u5377\u65f6\uff0c\u5982\u679c\u8be5\u5377\u662f\u7a7a\u7684\uff0cDocker\u4f1a\u5c06\u955c\u50cf\u4e2d\u6307\u5b9a\u8def\u5f84\u4e0b\u7684\u6570\u636e\u590d\u5236\u5230\u5377\u4e2d\u3002\u4f46\u662f\uff0c\u5982\u679c\u5377\u5df2\u7ecf\u5305\u542b\u6570\u636e\uff08\u4f8b\u5982\uff0c\u5b83\u662f\u88ab\u5176\u4ed6\u5bb9\u5668\u4f7f\u7528\u8fc7\u7684\u65e7\u5377\uff09\uff0c\u90a3\u4e48",(0,r.jsx)(e.strong,{children:"\u955c\u50cf\u4e2d\u7684\u6570\u636e\u5c06\u4e0d\u4f1a\u88ab\u590d\u5236\u8fc7\u53bb\uff0c\u800c\u662f\u76f4\u63a5\u4f7f\u7528\u5377\u4e2d\u73b0\u6709\u7684\u6570\u636e"}),"\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u6570\u636e\u5377\u66f4\u65b0\u7b56\u7565"}),"\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u65b0\u5377: \u5982\u679c\u4f60\u5e0c\u671b\u65b0\u5bb9\u5668\u4f7f\u7528\u65b0\u955c\u50cf\u4e2d\u7684\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5377\u3002\u8fd9\u6837\uff0c\u5f53\u5bb9\u5668\u542f\u52a8\u65f6\uff0c\u5b83\u5c06\u4f7f\u7528\u955c\u50cf\u4e2d\u7684\u521d\u59cb\u6570\u636e\u586b\u5145\u8fd9\u4e2a\u65b0\u5377\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u624b\u52a8\u540c\u6b65: \u5982\u679c\u9700\u8981\u5c06\u65b0\u955c\u50cf\u4e2d\u7684\u6570\u636e\u66f4\u65b0\u5230\u73b0\u6709\u5377\u4e2d\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u540c\u6b65\u8fd9\u4e9b\u6570\u636e\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u5230\u5c06\u65b0\u6570\u636e\u590d\u5236\u5230\u5377\u4e2d\uff0c\u6216\u8005\u8fd0\u884c\u4e00\u4e9b\u521d\u59cb\u5316\u811a\u672c\u6765\u66f4\u65b0\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://juejin.cn/post/7154444403888062472",children:"Docker\u5165\u95e8\u5230\u5b9e\u8df5\uff08\u56db\uff09Docker\u5bb9\u5668\u6570\u636e\u5377\u4e0e\u6570\u636e\u5377\u5bb9\u5668 - \u6398\u91d1"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://juejin.cn/post/7169034624989921317?searchId=202401161650065A86C713FB6FC69342A6",children:"DAY85 docker\u7684\u6570\u636e\u7ba1\u7406 - \u6398\u91d1"})}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8672:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>c});var r=s(959);const l={},i=r.createContext(l);function c(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);