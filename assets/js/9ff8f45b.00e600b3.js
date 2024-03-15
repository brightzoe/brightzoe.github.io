"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[41],{6330:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>h,metadata:()=>c,toc:()=>t});var i=s(1527),l=s(8672);const h={},r="\u5bf9\u8def\u7531\u7684\u7406\u89e3",c={id:"fe-basic/how-to-understand-router",title:"\u5bf9\u8def\u7531\u7684\u7406\u89e3",description:"\u4e3a\u4ec0\u4e48\u4ea7\u751f\u524d\u7aef\u8def\u7531",source:"@site/docs/fe-basic/how-to-understand-router.md",sourceDirName:"fe-basic",slug:"/fe-basic/how-to-understand-router",permalink:"/docs/fe-basic/how-to-understand-router",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/how-to-understand-router.md",tags:[],version:"current",lastUpdatedAt:1710497439,formattedLastUpdatedAt:"2024\u5e743\u670815\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"webpack",permalink:"/docs/fe-basic/fe-engineering/webpack"},next:{title:"\u7f51\u7edc\u8bf7\u6c42\u89e3\u6790",permalink:"/docs/fe-basic/network-request-analysis"}},d={},t=[{value:"\u4e3a\u4ec0\u4e48\u4ea7\u751f\u524d\u7aef\u8def\u7531",id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f\u524d\u7aef\u8def\u7531",level:2},{value:"\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",id:"\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",level:3},{value:"\u8def\u7531\u7684\u5386\u53f2",id:"\u8def\u7531\u7684\u5386\u53f2",level:2},{value:"SPA",id:"spa",level:2},{value:"\u4f18\u7f3a\u70b9",id:"\u4f18\u7f3a\u70b9",level:3},{value:"SSR",id:"ssr",level:3},{value:"\u6838\u5fc3\u539f\u7406",id:"\u6838\u5fc3\u539f\u7406",level:2},{value:"\u524d\u7aef\u8def\u7531",id:"\u524d\u7aef\u8def\u7531",level:3},{value:"hash \u539f\u7406",id:"hash-\u539f\u7406",level:3},{value:"History \u539f\u7406",id:"history-\u539f\u7406",level:3},{value:"\u76d1\u542c URL \u6539\u53d8",id:"\u76d1\u542c-url-\u6539\u53d8",level:3},{value:"\u4e00\u4e9b\u76f8\u5173\u7684\u95ee\u9898",id:"\u4e00\u4e9b\u76f8\u5173\u7684\u95ee\u9898",level:3},{value:"Reference",id:"reference",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5bf9\u8def\u7531\u7684\u7406\u89e3",children:"\u5bf9\u8def\u7531\u7684\u7406\u89e3"}),"\n",(0,i.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f\u524d\u7aef\u8def\u7531",children:"\u4e3a\u4ec0\u4e48\u4ea7\u751f\u524d\u7aef\u8def\u7531"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u524d\u9762\u4f7f\u7528\u540e\u7aef\u8def\u7531\u7684\u65f6\u4ee3\uff0c\u6e32\u67d3\u9875\u9762\u65f6 DOM \u76f4\u51fa\uff0c\u540e\u7aef\u8fd4\u56de\u5b8c\u6574\u7684 HTML\u3002\u5386\u53f2\u7684\u8f66\u8f6e\u6eda\u6eda\u5411\u524d\uff0c\u524d\u7aef\u53d1\u5c55\u5230\u7ec4\u4ef6\u5316\uff0c\u6a21\u5757\u5316\u7684\u65f6\u4ee3\uff0c\u76ee\u524d\u4f7f\u7528\u7684\u4f18\u79c0\u524d\u7aef\u6846\u67b6(React \u3001 Vue \u3001 Angular \u7b49)\uff0c\u90fd\u662f\u5355\u9875\u9762\u5e94\u7528\u6846\u67b6\uff0c\u901a\u8fc7 JS \u6e32\u67d3\u9875\u9762\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898",children:"\u89e3\u51b3\u4e86\u4ec0\u4e48\u95ee\u9898"}),"\n",(0,i.jsx)(e.p,{children:"\u89e3\u51b3\u5728\u5355\u9875\u9762\u7f51\u7ad9\u4e2d\uff0c\u901a\u8fc7\u5207\u6362\u6d4f\u89c8\u5668\u5730\u5740\u8def\u5f84\uff0c\u6765\u5339\u914d\u76f8\u5bf9\u5e94\u7684\u9875\u9762\u7ec4\u4ef6\uff0c\u5b9e\u73b0\u9875\u9762\u5185\u5bb9\u7684\u5207\u6362\u3002\u524d\u7aef\u63a7\u5236\u9875\u9762\u7684\u5207\u6362\uff0c\u800c\u4e0d\u9700\u8981\u5411\u540e\u7aef\u8bf7\u6c42\u9875\u9762\u3002\u524d\u7aef\u66f4\u591a\u7684\u8d1f\u8d23\u4e86\u5c55\u793a\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u51cf\u5c11\u4e86\u5411\u540e\u7aef\u7684\u8bf7\u6c42\uff0c\u8282\u7ea6\u8d44\u6e90\uff0c\u51cf\u5c0f\u4e86\u670d\u52a1\u5668\u7684\u538b\u529b\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2022/03/05/DJ3zv4mXkif2NeQ.png",alt:""})}),"\n",(0,i.jsxs)(e.p,{children:["\u56fe\u7247\u6765\u81ea ",(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6917523941435113486#heading-0",children:"\u8c08\u8c08\u5bf9\u524d\u7aef\u8def\u7531\u7684\u7406\u89e3"})]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u62d3\u5c55\uff1a \u65e0\u5237\u65b0\u5207\u6362\u9875\u9762\uff0c\u6240\u4ee5\u524d\u7aef\u6846\u67b6\u4e2d\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u751f\u547d\u5468\u671f\uff0c\u6765\u5728\u5207\u6362\u5230\u5f53\u524d\u9875\u9762\uff0c\u5207\u6362\u8d70\u7b49\u7b49\u7684\u65f6\u5019\u505a\u4e00\u4e9b\u4e8b\u60c5\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8def\u7531\u7684\u5386\u53f2",children:"\u8def\u7531\u7684\u5386\u53f2"}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u7aef\u8def\u7531"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u662f\u4ec0\u4e48\uff1a\u540e\u7aef\u8def\u7531\u5339\u914d\uff0c\u62fc\u63a5\u6a21\u677f\uff0c\u8fd4\u56de\u5b8c\u6574\u7684 HTML\uff0c\u6d4f\u89c8\u5668\u76f4\u63a5\u89e3\u6790\u5c55\u793a\u3002\u670d\u52a1\u5668\u6e32\u67d3\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9\uff1a\u6bcf\u6b21\u4e0d\u540c\u7684 URL \u90fd\u4f1a\u8bbf\u95ee\u670d\u52a1\u5668\uff0c\u6ca1\u6709\u5408\u7406\u5229\u7528\u7f13\u5b58\uff0c\u5bf9\u670d\u52a1\u5668\u538b\u529b\u589e\u5927\uff0c\u8026\u5408\u6027\u53d8\u91cd\uff0c\u7528\u6237\u4f53\u9a8c\u5dee\uff0c\u4ee3\u7801\u7ef4\u62a4\u4e5f\u53d8\u5dee\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"1998 \u5e74\u63d0\u51fa\u7684 Ajax\uff0c\u5b9e\u73b0\u5f02\u6b65\u52a0\u8f7d\uff0c\u9875\u9762\u4ea4\u4e92\u4e0d\u7528\u5237\u65b0\u9875\u9762\uff0c\u7528\u6237\u4f53\u9a8c\u63d0\u5347\u3002\u5355\u9875\u5e94\u7528\u9875\u9762\u4ea4\u4e92\u65e0\u5237\u65b0\uff0c\u9875\u9762\u8df3\u8f6c\u4e1a\u52a1\u5237\u65b0\uff0c\u524d\u7aef\u8def\u7531\u7684\u63a8\u51fa\uff0c\u662f\u4e3a\u4e86\u914d\u5408\u5355\u9875\u9762\u5e94\u7528\u8df3\u8f6c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u524d\u7aef\u8def\u7531"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9\uff1a\u9875\u9762\u4e0d\u5b8c\u5168\u5237\u65b0\u5c31\u53ef\u4ee5\u5207\u6362\u89c6\u56fe\uff0cURL \u53d8\u4e86\uff0c\u4e5f\u4e0d\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\uff0c\u7528\u6237\u4f53\u9a8c\u63a5\u8fd1\u539f\u751f APP\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9\uff1a\u4f46\u9875\u9762\u5f00\u53d1\uff0c\u670d\u52a1\u5668\u7aef\u7684 HTML \u662f\u4e0d\u5b8c\u6574\u7684\uff0c\u901a\u8fc7 JS \u8fdb\u884c\u7684\u52a8\u6001 DOM \u62fc\u63a5\uff0c\u6e32\u67d3\u901f\u5ea6\u4f1a\u53d8\u6162\uff0c\u4e5f\u4e0d\u5229\u4e8e SEO\u3002\u6ca1\u6709\u590d\u6742\u4ea4\u4e92\uff0cSEO \u8981\u6c42\u4e25\u683c\u7684\u7f51\u7ad9\uff0c\u66f4\u9002\u5408 SSR\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"spa",children:"SPA"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"//todo: \u6574\u7406\u4f4d\u7f6e"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9875\u9762\u6e32\u67d3\u4e3a\u524d\u7aef\u6e32\u67d3\uff0c\u5171\u7528\u4e00\u5957 html\u3002\u524d\u7aef\u8def\u7531\u5207\u6362\uff0c\u5339\u914d\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u4e00\u7cfb\u5217\u7684 js \u6587\u4ef6\u8fdb\u884c\u524d\u7aef\u6e32\u67d3\u6784\u5efa\u9875\u9762\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u4f18\u7f3a\u70b9",children:"\u4f18\u7f3a\u70b9"}),"\n",(0,i.jsx)(e.p,{children:"\u4f18\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f53\u9a8c\u597d\uff0c\u51cf\u5c11\u7f51\u7edc\u8bf7\u6c42"}),"\n",(0,i.jsx)(e.li,{children:"\u524d\u540e\u7aef\u5206\u79bb"}),"\n",(0,i.jsx)(e.li,{children:"\u51cf\u8f7b\u670d\u52a1\u7aef\u538b\u529b"}),"\n",(0,i.jsx)(e.li,{children:"\u5171\u7528\u4e00\u5957\u540e\u7aef\u7a0b\u5e8f\u4ee3\u7801\uff0c\u9002\u914d\u591a\u7aef"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7f3a\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9996\u5c4f\u52a0\u8f7d\u901f\u5ea6\u53d7\u5f71\u54cd"}),"\n",(0,i.jsx)(e.li,{children:"\u4e0d\u5229\u4e8e SEO \u4e0d\u5229\u4e8e\u641c\u7d22\u5f15\u64ce\u6293\u53d6"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"ssr",children:"SSR"}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u7aef\u6709\u5b8c\u6574\u7684 HTML \u9875\u9762\u8fd4\u56de\u7ed9\u524d\u7aef\uff0c\u5229\u7528 SEO \u722c\u866b\u641c\u7d22\u5f15\u64ce\u6536\u5f55\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48\u9700\u8981"}),"\n",(0,i.jsx)(e.p,{children:"SEO"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5c4f\u52a0\u8f7d\u901f\u5ea6\u3002SPA \u6240\u6709\u7684\u6570\u636e\u8bf7\u6c42\u90fd\u5728\u6d4f\u89c8\u5668\u7aef\uff0c\u7b2c\u4e00\u6b21\u8bbf\u95ee\u7684\u65f6\u5019\u767d\u5c4f\u65f6\u95f4\u53ef\u80fd\u8fc7\u957f\u3002\u800c\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u6570\u636e\u548c\u8bf7\u6c42\u90fd\u5728\u670d\u52a1\u7aef\u5904\u7406\uff0c\u901f\u5ea6\u66f4\u5feb\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e0e\u521d\u59cb\u7684\u524d\u540e\u7aef\u4e0d\u5206\u79bb\u7684\u533a\u522b"}),"\n",(0,i.jsx)(e.p,{children:"\u521d\u59cb\u7684\u524d\u540e\u7aef\u4e0d\u5206\u79bb\uff0c\u6240\u6709\u7684 html \u7b49\u6587\u4ef6\u90fd\u662f\u653e\u5230\u670d\u52a1\u5668\uff0c\u6587\u4ef6\u4e4b\u95f4\u6ca1\u6709\u5173\u8054\uff0c\u6539\u52a8\u4f1a\u5f88\u7e41\u7410\u3002\u540e\u7aef\u8def\u7531\uff0c\u8def\u7531\u53d1\u751f\u53d8\u5316\u5c31\u4f1a\u5411\u540e\u7aef\u8bf7\u6c42\u4e00\u4e2a\u5bf9\u5e94\u7684 html\u3002\u8bf7\u6c42\u5f88\u591a\uff0c\u670d\u52a1\u5668\u538b\u529b\u5927\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6838\u5fc3\u662f\u540c\u6784"}),"\n",(0,i.jsx)(e.p,{children:"\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u540c\u4e00\u5957\u4ee3\u7801\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6838\u5fc3\u539f\u7406",children:"\u6838\u5fc3\u539f\u7406"}),"\n",(0,i.jsx)(e.p,{children:"\u8def\u7531\u63cf\u8ff0 URL \u4e0e UI \u7684\u6620\u5c04\u5173\u7cfb\uff0c\u662f\u5355\u5411\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5373 URL \u53d8\u5316\u5982\u4f55\u5f71\u54cd UI \u7684\u53d8\u5316\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u524d\u7aef\u8def\u7531",children:"\u524d\u7aef\u8def\u7531"}),"\n",(0,i.jsx)(e.p,{children:"\u539f\u7406\uff1a\u68c0\u6d4b URL \u53d8\u5316\uff0c\u622a\u83b7 URL \u5730\u5740\uff0c\u89e3\u6790\u5339\u914d\u8def\u7531\u89c4\u5219\uff0c\u66f4\u65b0 UI\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5206\u7c7b\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"hash \u8def\u7531\uff1aURL \u4e2d\u6709#\uff0c\u5373\u54c8\u5e0c\u503c\uff0c\u4e0d\u597d\u770b\uff0c\u4f46\u517c\u5bb9\u6027\u9ad8,\u517c\u5bb9 IE 8 \uff0c\u4e0d\u8fc7 2021 \u5e74\u4e86\u57fa\u672c\u4e0d\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u4e86\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"browser \u8def\u7531(history \u6a21\u5f0f)\uff1a\u4e0d\u5e26#\uff0c\u597d\u770b\uff0c\u4f46\u90e8\u5206\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\uff0c\u9700\u8981\u540e\u7aef\u670d\u52a1\u5668\u652f\u6301\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-nginx.conf",children:"location / {\n       try_files $uri $uri/ /index.html; //\u89e3\u51b3\u5355\u9875\u9762\u5e94\u7528history \u8def\u7531\u7684\u95ee\u9898\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5728 vue \u548c react \u4e2d\uff0c\u628a\u4e24\u79cd\u8def\u7531\u5b9a\u4e49\u6210\u4e24\u79cd\u6a21\u5f0f\uff0chash \u6a21\u5f0f\u4e0e history \u6a21\u5f0f\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"hash-\u539f\u7406",children:"hash \u539f\u7406"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"window.Location \u5bf9\u8c61"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.loli.net/2021/07/16/u67A4ixONwfjKbt.png",alt:"location"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"hash \u503c\u6307\u7684 URL \u4e2d\u951a\u70b9\uff0c\u7528\u6765\u505a\u9875\u9762\u5b9a\u4f4d\uff0c\u5bf9\u5e94 DOM id\uff0c\u5728 HTML5 \u7684 history \u7279\u6027\u524d\uff0c\u90fd\u662f\u901a\u8fc7\u76d1\u542c hash \u503c\u5b9e\u73b0\u524d\u7aef\u8def\u7531\u3002\u5229\u7528 hashchange \u4e8b\u4ef6\uff0c\u64cd\u4f5c dom\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u7279\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"hash \u503c\u662f\u7f51\u9875\u7684\u4e00\u4e2a\u6807\u5fd7\u70b9\uff0c\u4e0e HTTP \u8bf7\u6c42\u65e0\u5173\uff0c\u5bf9\u540e\u7aef\u6ca1\u6709\u5f71\u54cd\u3002"}),"\n",(0,i.jsx)(e.li,{children:"HTTP \u8bf7\u6c42\u4e0d\u5305\u542b hash\uff0c hash \u6539\u53d8\u4e0d\u89e6\u53d1\u9875\u9762\u91cd\u8f7d"}),"\n",(0,i.jsx)(e.li,{children:"hash \u6539\u53d8\u4f1a\u6539\u53d8\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55"}),"\n",(0,i.jsx)(e.li,{children:"hash \u6539\u53d8\u4f1a\u89e6\u53d1 window.onhashchange \u4e8b\u4ef6(pushState \u4e0d\u4f1a\u89e6\u53d1 hashchange)"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"hash \u6539\u53d8\u4e0d\u89e6\u53d1\u9875\u9762\u91cd\u8f7d"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u4f55\u6539\u53d8 hash \u503c\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["a \u6807\u7b7e ",(0,i.jsx)(e.code,{children:'<a href="#footer"></a>'})]}),"\n",(0,i.jsxs)(e.li,{children:["js ",(0,i.jsx)(e.code,{children:'window.location.hash = "gg"'})]}),"\n",(0,i.jsx)(e.li,{children:"\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\u540e\u9000 history.back()\uff0chistory.forward()\uff0chistory.go(1)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"history-\u539f\u7406",children:"History \u539f\u7406"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"window.history - Html5 \u7684\u7279\u6027"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://i.loli.net/2021/07/16/5I4JETHks2qgdMB.png",alt:"history"})}),"\n",(0,i.jsxs)(e.p,{children:["\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u7c7b\u4f3c\u4e8e\u6808\uff0c\u5148\u8fdb\u540e\u51fa\uff0c\u4f60\u53ef\u4ee5\u81ea\u7531\u524d\u8fdb\u540e\u9000\u3002\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\uff0c\u901a\u8fc7 history \u5bf9\u8c61\u5b9e\u73b0\u3002URL \u7684\u6bcf\u6b21\u6539\u53d8\uff0c",(0,i.jsx)(e.strong,{children:"\u5305\u62ec hash \u7684\u53d8\u5316"}),"\uff0c\u90fd\u4f1a\u5f62\u6210\u4e00\u6761\u5386\u53f2\u8bb0\u5f55\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"history.length"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"history.back()/go()/forward()"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"pushState(state,title,URL):\u9875\u9762\u4e0d\u52a0\u8f7d\uff0c\u4e0d\u5237\u65b0"}),"\n",(0,i.jsx)(e.p,{children:"state\uff1a\u7528\u4e8e\u5b58\u50a8\u8be5 URL \u5bf9\u5e94\u7684\u72b6\u6001\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7 history.state \u83b7\u53d6"}),"\n",(0,i.jsx)(e.p,{children:"title\uff1a\u6807\u9898\uff0c\u76ee\u524d\u6d4f\u89c8\u5668\u5e76\u4e0d\u652f\u6301"}),"\n",(0,i.jsx)(e.p,{children:"URL\uff1a\u5b9a\u4e49\u65b0\u7684\u5386\u53f2 URL \u8bb0\u5f55\uff0c\u9700\u8981\u6ce8\u610f\uff0c\u65b0\u7684 URL \u5fc5\u987b\u4e0e\u5f53\u524d URL \u540c\u6e90\uff0c\u4e0d\u80fd\u8de8\u57df"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"replaceState(): \u66ff\u6362\u5f53\u524d\u9875\u9762\u5386\u53f2\u8bb0\u5f55\uff0chistory.length \u4e0d\u6539\u53d8"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"window.onpopstate \u4e8b\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u76d1\u542c-url-\u6539\u53d8",children:"\u76d1\u542c URL \u6539\u53d8"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"//hashchange:\u53ea\u80fd\u76d1\u542c url hash \u7684\u53d8\u5316 location.hash\nwindow.addEventListener('hashchange', function (e) {\n  console.log(e);\n});\n\n//popstate:\n//\u76d1\u542c\u70b9\u51fb\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\u540e\u9000\uff0c\u4ee5\u53ca history.back()/go()/forward()\n//\u76d1\u542c\u4e0d\u5230: history.pushState() \u548c history.replaceState()\nwindow.addEventListener('popstate', function (e) {\n  console.log(e);\n});\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:'<a href="/page1">page1</a>'}),",history \u6a21\u5f0f\u4e0b\uff0ca \u6807\u7b7e\u7684\u70b9\u51fb\u5bfc\u81f4 URL \u7684\u5207\u6362\u4e0d\u4f1a\u88ab popstate \u4e8b\u4ef6\u76d1\u542c\u5230\u3002 \u5982\u679c\u5e0c\u671b\u88ab\u76d1\u542c\uff0c\u53ef\u4ee5\u8986\u76d6 a \u7684\u70b9\u51fb\u4e8b\u4ef6\uff0c\u901a\u8fc7\u70b9\u51fb a\uff0c\u8c03\u7528 history api \u5b9e\u73b0\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/brightzoe/Playground/tree/master/router",children:"router \u5b9e\u73b0"})}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4e00\u4e9b\u76f8\u5173\u7684\u95ee\u9898",children:"\u4e00\u4e9b\u76f8\u5173\u7684\u95ee\u9898"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"hash\uff0chistory \u5728\u6d4f\u89c8\u5668\u4e2d\u5237\u65b0\u9875\u9762\uff0c\u4f1a\u4e0d\u4f1a\u5230\u670d\u52a1\u5668\uff1f \u91cd\u5b9a\u5411\u600e\u4e48\u5904\u7406"}),"\n",(0,i.jsx)(e.p,{children:"history \u8def\u7531\u7684\u60c5\u51b5\u4e0b\uff0c\u5237\u65b0\u9875\u9762\uff0c\u4f1a\u6839\u636e\u5b9e\u9645\u7684 URL \u5411\u670d\u52a1\u5668\u53d1\u8bf7\u6c42\uff0c\u5982\u679c\u662f nginx \u9700\u8981\u914d\u7f6e try_files \u6307\u4ee4\u91cd\u5b9a\u5411\u5230\u9879\u76ee\u9996\u9875\u3002"}),"\n",(0,i.jsx)(e.p,{children:"hash \u8def\u7531\uff0chash \u503c\u4e0d\u4f1a\u53d1\u9001\u5230\u670d\u52a1\u5668\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5b9e\u73b0\u539f\u7406\u603b\u7ed3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"hash \u8def\u7531\u76d1\u542c hashchange \u4e8b\u4ef6\uff0c\u5339\u914d\u5bf9\u5e94\u7ec4\u4ef6"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"history \u8def\u7531\u76d1\u542c popstate \u4e8b\u4ef6\uff0c\u901a\u8fc7 history.pushState/replaceState \u6765\u6539\u53d8 url \u5730\u5740"}),"\n",(0,i.jsx)(e.p,{children:"\u670d\u52a1\u5668\u914d\u7f6e\u90fd\u8fd4\u56de index.html"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6895882310458343431#heading-0",children:"SPA \u8def\u7531\u4e09\u90e8\u66f2\u4e4b\u6838\u5fc3\u539f\u7406"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",children:"Location - MDN"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History",children:"History - MDN"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6917523941435113486#heading-0",children:"\u8c08\u8c08\u5bf9\u524d\u7aef\u8def\u7531\u7684\u7406\u89e3"})," - \u5305\u542b\u5982\u4f55\u5b9e\u73b0\u4e24\u79cd\u6a21\u5f0f\u7684\u8def\u7531"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8672:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var i=s(959);const l={},h=i.createContext(l);function r(n){const e=i.useContext(h);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(h.Provider,{value:e},n.children)}}}]);