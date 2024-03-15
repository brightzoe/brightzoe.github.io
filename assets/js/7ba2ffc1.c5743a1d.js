"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7367],{933:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=i(1527),s=i(8672);const r={},t="Babel",c={id:"fe-basic/fe-engineering/babel",title:"Babel",description:"\u662f\u4ec0\u4e48?",source:"@site/docs/fe-basic/fe-engineering/babel.md",sourceDirName:"fe-basic/fe-engineering",slug:"/fe-basic/fe-engineering/babel",permalink:"/docs/fe-basic/fe-engineering/babel",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/fe-engineering/babel.md",tags:[],version:"current",lastUpdatedAt:1710497439,formattedLastUpdatedAt:"2024\u5e743\u670815\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/fe-basic/fe-engineering/"},next:{title:"\u5fae\u524d\u7aef\u6280\u672f",permalink:"/docs/fe-basic/fe-engineering/micro-frontends"}},a={},d=[{value:"\u662f\u4ec0\u4e48?",id:"\u662f\u4ec0\u4e48",level:2},{value:"\u6838\u5fc3\u6a21\u5757",id:"\u6838\u5fc3\u6a21\u5757",level:2},{value:"\u7f16\u8bd1\u6d41\u7a0b",id:"\u7f16\u8bd1\u6d41\u7a0b",level:3},{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"Babel \u63d2\u4ef6\u5f00\u53d1",id:"babel-\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u76f8\u5173\u7684\u5e93",id:"\u76f8\u5173\u7684\u5e93",level:3},{value:"\u63d2\u4ef6\u5f00\u53d1",id:"\u63d2\u4ef6\u5f00\u53d1",level:3},{value:"\u5e38\u7528 plugin \u548c present",id:"\u5e38\u7528-plugin-\u548c-present",level:2},{value:"Babel vs SWC",id:"babel-vs-swc",level:2},{value:"SWC",id:"swc",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"babel",children:"Babel"}),"\n",(0,l.jsx)(n.h2,{id:"\u662f\u4ec0\u4e48",children:"\u662f\u4ec0\u4e48?"}),"\n",(0,l.jsx)(n.p,{children:"Babel\u662f\u4e00\u4e2a\u5e7f\u6cdb\u4f7f\u7528\u7684JavaScript\u7f16\u8bd1\u5668\uff0c\u5b83\u53ef\u4ee5\u5c06ES6\u7b49\u9ad8\u7248\u672c\u7684\u4ee3\u7801\u8f6c\u4e3aES5\u6216\u66f4\u4f4e\u7248\u672c\u7684\u4ee3\u7801,\u4f7f\u4ed6\u4eec\u80fd\u591f\u5728\u4e0d\u540c\u7248\u672c\u7684\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u517c\u5bb9\u6027\u3002Babel \u80fd\u591f\u8fdb\u884c\u4ee3\u7801\u7684\u964d\u7ea7\u8f6c\u6362\uff0c\u4f7f\u5f97\u65e7\u7248\u6d4f\u89c8\u5668\u4e5f\u80fd\u7406\u89e3\u548c\u6267\u884c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6269\u5c55\u6027\u3002Babel \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u4e0d\u540c\u7684\u63d2\u4ef6\u6765\u5b9a\u4e49\u4ee3\u7801\u7684\u8f6c\u6362\u65b9\u5f0f\u3002\u8fd9\u79cd\u7075\u6d3b\u6027\u4f7f\u5f97 Babel \u7279\u522b\u9002\u7528\u4e8e\u5904\u7406\u590d\u6742\u7684\u4ee3\u7801\u9879\u76ee\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Babel \u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u63d0\u524d\u5c1d\u8bd5\u4f7f\u7528\u5c1a\u672a\u6b63\u5f0f\u6210\u4e3a\u89c4\u8303\u7684 ES \u7279\u6027\uff0c\u4ee5\u4fbf\u8bc4\u4f30\u65b0\u7279\u6027\u7684\u4ef7\u503c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6838\u5fc3\u6a21\u5757",children:"\u6838\u5fc3\u6a21\u5757"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"babel/core \u8d1f\u8d23\u6574\u4f53\u7f16\u8bd1\u6d41\u7a0b"}),"\n",(0,l.jsx)(n.li,{children:"babel/parser \u89e3\u6790\u6e90\u7801\uff0c\u7ecf\u5386\u8bed\u6cd5\u5206\u6790\u3001\u8bcd\u6cd5\u5206\u6790\u7b49\u751f\u6210AST\u62bd\u8c61\u8bed\u6cd5\u6811"}),"\n",(0,l.jsx)(n.li,{children:"babel/generator \u5c06AST\u518d\u89e3\u6790\u4e3a\u53ef\u4ee5\u4e3a\u6d4f\u89c8\u5668\u8fd0\u884c\u7684javaScript\u4ee3\u7801"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7f16\u8bd1\u6d41\u7a0b",children:"\u7f16\u8bd1\u6d41\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"parse"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 @babel/parser \u89e3\u6790\u6e90\u7801\uff0c\u751f\u6210AST\u62bd\u8c61\u8bed\u6cd5\u6811"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"transform"}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528 @babel/traverse \u904d\u5386AST\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u8c03\u7528 transform \u63d2\u4ef6\u5bf9 AST \u8282\u70b9\u8fdb\u884c\u589e\u5220\u6539\u7b49\u64cd\u4f5c\u751f\u6210\u65b0\u7684AST"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"generate"}),"\n",(0,l.jsx)(n.p,{children:"@babel/generator \u6839\u636e\u8f6c\u6362\u540e\u7684 AST \u751f\u6210\u65b0\u7684\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7528\u9014",children:"\u7528\u9014"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9759\u6001\u5206\u6790\u3002 \u4ec5\u501f\u52a9AST\u63d0\u4f9b\u7684\u4fe1\u606f\u8fdb\u884c\u5206\u6790\uff0c\u4e0d\u4fee\u6539AST.\u6bd4\u5982linter,type checker,code formatter\uff0c\u81ea\u52a8\u751f\u6210api\u6587\u6863\u7b49\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u7279\u5b9a\u7528\u9014\u4ee3\u7801\u8f6c\u6362\u3002 \u501f\u52a9AST\u63d0\u4f9b\u7684\u4fe1\u606f\u8fdb\u884c\u8f6c\u6362\uff0c\u4fdd\u6301\u539f\u6709AST\u7ed3\u6784\u4e0a\u505a\u90e8\u5206\u7684\u589e\u5220\u6539\u3002\u6bd4\u5982\u51fd\u6570\u63d2\u6869\u3001\u5220\u9664console\u3001\u81ea\u52a8\u56fd\u9645\u5316\u7b49\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4ee3\u7801\u8f6c\u8bd1\u3002 \u5c06\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u548c\u4e0d\u517c\u5bb9\u7684\u8bed\u6cd5\u8fdb\u884c\u8f6c\u6362\u3002\u6bd4\u5982ES\u65b0\u7279\u6027\u3001TypeScript\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"babel-\u63d2\u4ef6\u5f00\u53d1",children:"Babel \u63d2\u4ef6\u5f00\u53d1"}),"\n",(0,l.jsx)(n.h3,{id:"\u76f8\u5173\u7684\u5e93",children:"\u76f8\u5173\u7684\u5e93"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"@babel/core Babel \u7684\u6838\u5fc3 api\uff0c\u5305\u542b\u4e86\u4e0a\u8ff0\u6240\u63d0\u7684\u6240\u6709\u529f\u80fd\uff0c\u80fd\u5b8c\u6210\u4ece\u6e90\u7801\u5230\u76ee\u6807\u4ee3\u7801\u7684\u6574\u4e2a\u7f16\u8bd1\u6d41\u7a0b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"@babel/parser \u9ed8\u8ba4\u53ea\u80fd parse js \u4ee3\u7801\uff0c\u652f\u6301\u6269\u5c55\uff0c\u901a\u8fc7\u6307\u5b9a\u5bf9\u5e94\u8bed\u6cd5\u63d2\u4ef6\u53ef\u5b9e\u73b0 jsx\u3001ts \u7b49\u89e3\u6790\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"@babel/generator \u8d1f\u8d23 generate \u9636\u6bb5\u7684\u5305\uff0c\u7528\u4e8e\u5c06 AST \u8f6c\u6362\u6210\u65b0\u7684\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"@babel/traverse \u63d0\u4f9b traverse \u65b9\u6cd5\u6765\u8d1f\u8d23 AST \u7684\u904d\u5386\uff0c\u7ef4\u62a4\u4e86\u6574\u9897 AST \u6811\u7684\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(n.p,{children:"traverse \u9488\u5bf9\u4e0d\u540c\u7684\u8282\u70b9\u7c7b\u578b\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684 visitor \u7528\u4e8e\u5b9e\u73b0\u5bf9\u8282\u70b9\u7684\u64cd\u4f5c\u3002"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["vistor \u5229\u7528\u4e86\u8bbe\u8ba1\u6a21\u5f0f\u7684",(0,l.jsx)(n.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor\uff09"}),"\uff0c\u7528\u4e8e\u5b9e\u73b0",(0,l.jsx)(n.strong,{children:"\u6570\u636e\u7ed3\u6784\u4e0e\u6570\u636e\u64cd\u4f5c\u89e3\u8026"}),"\u3002\u5f53\u88ab\u64cd\u4f5c\u7684\u5bf9\u8c61\u7ed3\u6784\u6bd4\u8f83\u7a33\u5b9a\uff0c\u800c\u64cd\u4f5c\u5bf9\u8c61\u7684\u903b\u8f91\u7ecf\u5e38\u53d8\u5316\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u5206\u79bb\u903b\u8f91\u548c\u5bf9\u8c61\u7ed3\u6784\uff0c\u4f7f\u5f97\u4ed6\u4eec\u80fd\u72ec\u7acb\u6269\u5c55\u3002"]}),(0,l.jsx)(n.p,{children:'\u5728 Visitor \u6a21\u5f0f\u4e2d\uff0c\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u64cd\u4f5c\u5206\u522b\u88ab\u5c01\u88c5\u5728\u4e0d\u540c\u7684\u7c7b\u4e2d\u3002\u6211\u4eec\u628a\u6570\u636e\u7ed3\u6784\u5c01\u88c5\u5728 "Element" \u7c7b\u4e2d\uff0c\u628a\u6570\u636e\u64cd\u4f5c\u5c01\u88c5\u5728 "Visitor" \u7c7b\u4e2d\u3002"Visitor" \u7c7b\u8868\u793a\u4e00\u4e2a\u4f5c\u7528\u4e8e\u67d0\u5bf9\u8c61\u7ed3\u6784\u4e2d\u7684\u5404\u5143\u7d20\u64cd\u4f5c\u7684\u5c01\u88c5\uff0c\u5176\u76ee\u6807\u662f\u5728\u4e0d\u6539\u53d8\u6570\u636e\u7ed3\u6784\u7684\u524d\u63d0\u4e0b\uff0c\u80fd\u968f\u65f6\u589e\u52a0\u65b0\u7684\u64cd\u4f5c\uff0c\u5373\u8bbf\u95ee\u8005\u53ef\u968f\u65f6\u6539\u53d8\u64cd\u4f5c\u7b97\u6cd5\u3002'})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"@babel/types \u5305\u542b\u6240\u6709 AST \u8282\u70b9\u7684\u7c7b\u578b\u4ee5\u53ca\u68c0\u67e5 AST \u7c7b\u578b\u7684\u65b9\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u63d2\u4ef6\u5f00\u53d1",children:"\u63d2\u4ef6\u5f00\u53d1"}),"\n",(0,l.jsx)(n.p,{children:"Babel Plugin \u901a\u5e38\u6709\u4e24\u79cd\u683c\u5f0f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u79cd\u662f\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4e2d\u5305\u542b visitor\u3001pre\u3001post \u7b49\u5c5e\u6027\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u53e6\u4e00\u79cd\u662f\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b visitor\u3001pre \u7b49\u5c5e\u6027\u7684\u5bf9\u8c61\u3002\u51fd\u6570\u683c\u5f0f\u53ef\u4ee5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u4e3a api\uff1a\u63d0\u4f9b babel \u57fa\u7840 api \u80fd\u529b\u3001options\uff1a\u5916\u754c\u4f20\u5165\u63d2\u4ef6\u7684\u53c2\u6570\u3001dirname\uff1a\u76ee\u5f55\u540d\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"export default plugin = {\n  pre() {}, // \u904d\u5386\u524d\u89e6\u53d1\u7684\u94a9\u5b50\u51fd\u6570\n  visitor: {},//\n  post(file) {}, // \u904d\u5386\u540e\u89e6\u53d1\u7684\u94a9\u5b50\u51fd\u6570\n};\n\nexport default function plugin(api, options, dirname){\n    return {\n        pre(){},\n        visitor: {},\n        post(){}\n    }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u63d2\u4ef6\u5f00\u53d1\u903b\u8f91\uff1a\u5bf9\u6bd4\u524d\u540eAST,\u627e\u51fa\u8282\u70b9\u53d8\u5316\u5904\u3002\u5206\u6790\u8282\u70b9\u4e0e\u903b\u8f91\uff0c\u751f\u6210\u65b0\u7684AST\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://juejin.cn/post/7265149630924832808?searchId=20231201154405AA3C21BB0C8773754D47#heading-4",children:"\u5b66\u4e60\u4f7f\u7528AST explorer"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u7528-plugin-\u548c-present",children:"\u5e38\u7528 plugin \u548c present"}),"\n",(0,l.jsx)(n.p,{children:"present: \u4e00\u4e9bplugin\u7ec4\u6210\u7684\u5408\u96c6\uff0c\u6574\u5408\u6210\u7684\u4e00\u4e2a\u5305\uff0c\u65b9\u4fbf\u505a\u4e00\u4e2a\u9884\u8bbe\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5e38\u89c1present\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"babel-preset-env \u5185\u90e8\u96c6\u6210\u4e86\u7edd\u5927\u591a\u6570plugin\uff08State > 3\uff09\u7684\u8f6c\u8bd1\u63d2\u4ef6\uff0c\u5c06\u9ad8\u7248\u672cjs\u8fdb\u884c\u8f6c\u79fb\u4e3a\u4f4e\u7248\u672cjs\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"babel-preset-react \u5bf9jsx\u8fdb\u884c\u8f6c\u8bd1\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"babel-preset-typescript \u7f16\u8bd1ts\u4e3ajs\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5176\u4ed6\u7f16\u8bd1ts\u7684\u65b9\u5f0f\uff1atsc\u547d\u4ee4\uff0c\u7ed3\u5408cli\u547d\u4ee4\u884c\u6216\u8005tsconfig\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5e38\u89c1plugin\uff1a",(0,l.jsx)(n.a,{href:"https://babeljs.io/docs/plugins-list",children:"plugin list"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u7edd\u5927\u591a\u6570\u88ab\u96c6\u6210\u8fdbbabel-preset-env"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"@babel/plugin-transform-object-rest-spread \u7528\u4e8e\u5904\u7406\u5bf9\u8c61\u7684\u6269\u5c55\u8fd0\u7b97\u7b26\u3002"}),"\n",(0,l.jsx)(n.li,{children:"@babel/plugin-transform-optional-chaining \u7528\u4e8e\u5904\u7406\u53ef\u9009\u94fe\u8fd0\u7b97\u7b26\u3002"}),"\n",(0,l.jsx)(n.li,{children:"@babel/plugin-transform-nullish-coalescing-operator \u7528\u4e8e\u5904\u7406\u7a7a\u503c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"babel-vs-swc",children:"Babel vs SWC"}),"\n",(0,l.jsx)(n.p,{children:"\u65e0\u8bba\u662fBabel\u8fd8\u662fSWC\uff0c\u5b83\u4eec\u90fd\u662f\u670d\u52a1\u4e8eJavaScript\u4ee3\u7801\u7684\u5de5\u5177\uff0c\u5176\u76ee\u6807\u90fd\u662f\u4f7fJavaScript\u4ee3\u7801\u66f4\u52a0\u6613\u4e8e\u7f16\u5199\u3001\u9605\u8bfb\u548c\u7ef4\u62a4\u3002\u7136\u800c\uff0c\u5b83\u4eec\u5b9e\u73b0\u8fd9\u4e00\u76ee\u6807\u7684\u65b9\u5f0f\u7565\u6709\u4e0d\u540c\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"swc",children:"SWC"}),"\n",(0,l.jsx)(n.p,{children:"SWC\u662f\u57fa\u4e8eRust\u8bed\u8a00\u5f00\u53d1\u7684\u9ad8\u6027\u80fd\u7684JavaScript\u7f16\u8bd1\u5668\uff0c\u65e8\u5728\u4e0e\u73b0\u6709\u7684\u5de5\u5177\u96c6\uff08\u5982webpack\u3001Rollup\u3001Parcel\u7b49\uff09\u96c6\u6210\u3002\u76ee\u6807\u662f\u63d0\u9ad8\u7f16\u8bd1\u901f\u5ea6\u548c\u4ee3\u7801\u6267\u884c\u901f\u5ea6\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u63d2\u4ef6\u4f53\u7cfb\uff0c\u4f46\u4e0d\u652f\u6301JavaScript\u63d2\u4ef6\uff0c\u63d2\u4ef6\u9700\u8981\u901a\u8fc7Rust/WebAssembly\u5b9e\u73b0\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://babeljs.io/",children:"Babel"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://swc.rs/",children:"SWC"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://astexplorer.net/",children:"AST"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.zhihu.com/question/315934143/answer/3261159913",children:"Babel\u5165\u95e8&\u5b9e\u73b0\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u8f6c\u6362\u63d2\u4ef6"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://juejin.cn/post/7292764000470728741",children:"\u7bad\u5934\u51fd\u6570\u8f6c\u6362\u63d2\u4ef6-\u8be6\u7ec6\u5168\u9762"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.zhihu.com/question/315934143/answer/2358619334",children:"\u5b9e\u73b0\u4e00\u4e2a\u7b80\u6613\u7684Tree Shaking Babel \u63d2\u4ef6"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://juejin.cn/post/7136404050995576863",children:"\u804a\u804aBabel\u6740\u624b\uff1aSWC\u7684\u91ce\u5fc3\u4e0e\u672a\u6765"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://juejin.cn/post/7025237833543581732",children:"Babel\u5165\u95e8\u8be6\u89e3"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8672:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var l=i(959);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);