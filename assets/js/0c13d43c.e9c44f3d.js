"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[5658],{6581:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var r=i(1527),o=i(8672);const s={},d="\u6a21\u5757\u5316",l={id:"fe-basic/javascript/basic/module",title:"\u6a21\u5757\u5316",description:"\u6a21\u5757\u5316\uff0cAMD\uff08require.js\uff09\uff0crequire\uff0cCMD\uff0ces Module \u8fd9\u4e9b\uff0c\u91cc\u9762\u7684\u53d8\u91cf require, exports \u90fd\u662f\u76f8\u4f3c\u7684\u5355\u8bcd\uff0c\u786e\u5b9e\u5bb9\u6613\u641e\u5f97\u5934\u660f \ud83d\ude35",source:"@site/docs/fe-basic/javascript/basic/module.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/module",permalink:"/docs/fe-basic/javascript/basic/module",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/module.md",tags:[],version:"current",lastUpdatedAt:1710497439,formattedLastUpdatedAt:"2024\u5e743\u670815\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u9ad8\u9636\u51fd\u6570",permalink:"/docs/fe-basic/javascript/basic/higher-order-function"},next:{title:"\u53c2\u6570\u4f20\u9012",permalink:"/docs/fe-basic/javascript/basic/parameter-passing"}},c={},t=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u89e3\u51b3\u7684\u95ee\u9898",id:"\u89e3\u51b3\u7684\u95ee\u9898",level:3},{value:"\u6a21\u5757\u52a0\u8f7d\u5668",id:"\u6a21\u5757\u52a0\u8f7d\u5668",level:2},{value:"CommonJS \u540c\u6b65\u6a21\u5757\u89c4\u8303",id:"commonjs-\u540c\u6b65\u6a21\u5757\u89c4\u8303",level:3},{value:"AMD \u5f02\u6b65\u6a21\u5757\u5b9a\u4e49",id:"amd-\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49",level:3},{value:"CMD \u540c\u6b65\u6a21\u5757\u89c4\u8303",id:"cmd-\u540c\u6b65\u6a21\u5757\u89c4\u8303",level:3},{value:"UMD \u901a\u7528\u6a21\u5757\u5b9a\u4e49",id:"umd-\u901a\u7528\u6a21\u5757\u5b9a\u4e49",level:3},{value:"ES6 \u6a21\u5757\u89c4\u8303",id:"es6-\u6a21\u5757\u89c4\u8303",level:2},{value:"CommonJS \u4e0e ESModule \u533a\u522b",id:"commonjs-\u4e0e-esmodule-\u533a\u522b",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6a21\u5757\u5316",children:"\u6a21\u5757\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757\u5316\uff0cAMD\uff08require.js\uff09\uff0crequire\uff0cCMD\uff0ces Module \u8fd9\u4e9b\uff0c\u91cc\u9762\u7684\u53d8\u91cf require, exports \u90fd\u662f\u76f8\u4f3c\u7684\u5355\u8bcd\uff0c\u786e\u5b9e\u5bb9\u6613\u641e\u5f97\u5934\u660f \ud83d\ude35"}),"\n",(0,r.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ea7\u751f\u7684\u539f\u56e0\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u7801\u91cf\u5927\uff0c\u5e7f\u6cdb\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93\uff0c\u9700\u8981\u5c06\u4ee3\u7801\u62c6\u5206\u5e76\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\u8fde\u63a5\u8d77\u6765\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757\u6a21\u5f0f\u80cc\u540e\u7684\u57fa\u672c\u601d\u60f3"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u903b\u8f91\u5206\u5757\uff0c\u5404\u81ea\u5c01\u88c5\uff0c\u76f8\u4e92\u72ec\u7acb\uff0c\u6bcf\u4e2a\u5757\u81ea\u884c\u51b3\u5b9a\u5bf9\u5916\u66b4\u9732\u4ec0\u4e48\uff0c\u540c\u65f6\u81ea\u884c\u51b3\u5b9a\u5f15\u5165\u6267\u884c\u54ea\u4e9b\u5916\u90e8\u7684\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757\u7cfb\u7edf\u7684\u6838\u5fc3\uff1a\u7ba1\u7406\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757\u7cfb\u7edf\u7684\u6838\u5fc3\u662f\u7ba1\u7406\u4f9d\u8d56\u3002\u5f53\u524d\u7684\u6a21\u5757\u5411\u6a21\u5757\u7cfb\u7edf\u58f0\u660e\u4e00\u7ec4\u5916\u90e8\u6a21\u5757\uff0c\u8fd9\u4e9b\u5916\u90e8\u6a21\u5757\u5bf9\u4e8e\u5f53\u524d\u7684\u6a21\u5757\u6b63\u5e38\u8fd0\u884c\u662f\u5fc5\u9700\u7684\u3002\u6a21\u5757\u7cfb\u7edf\u68c0\u89c6\u8fd9\u4e9b\u4f9d\u8d56\uff0c\u8fdb\u800c\u4fdd\u8bc1\u8fd9\u4e9b\u4f9d\u8d56\u80fd\u591f\u88ab\u52a0\u8f7d\uff0c\u5e76\u5728\u5f53\u524d\u6a21\u5757\u8fd0\u884c\u65f6\u521d\u59cb\u5316\u6240\u6709\u4f9d\u8d56\u3002\u6bcf\u4e2a\u6a21\u5757\u90fd\u6709\u552f\u4e00\u7684\u6807\u8bc6\u7b26\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6a21\u5757\u52a0\u8f7d\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u52a0\u8f7d\u6a21\u5757\u5e76\u6267\u884c\u6a21\u5757\u9700\u8981\u5148\u52a0\u8f7d\u6240\u6709\u7684\u4f9d\u8d56\u4ee5\u53ca\u6267\u884c\u6240\u6709\u7684\u4f9d\u8d56\u3002\u5982\u679c\u6ca1\u6709\u6536\u5230\u4f9d\u8d56\u4ee3\u7801\uff0c\u9700\u7b49\u5f85\u8bf7\u6c42\u3002\u6536\u5230\u4f9d\u8d56\u4ee3\u7801\u4e4b\u540e\uff0c\u6d4f\u89c8\u5668\u9700\u8981\u786e\u5b9a\u521a\u6536\u5230\u7684\u6a21\u5757\u662f\u5426\u4e5f\u6709\u4f9d\u8d56\uff0c\u9012\u5f52\u5730\u8bc4\u4f30\u5e76\u52a0\u8f7d\u6240\u6709\u4f9d\u8d56\uff0c\u76f4\u81f3\u6240\u6709\u4f9d\u8d56\u6a21\u5757\u90fd\u52a0\u8f7d\u5b8c\u6210\u3002\u6574\u4e2a\u4f9d\u8d56\u56fe\u52a0\u8f7d\u5b8c\u6210\uff0c\u624d\u4f1a\u6267\u884c\u5165\u53e3\u6a21\u5757\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u89e3\u51b3\u7684\u95ee\u9898",children:"\u89e3\u51b3\u7684\u95ee\u9898"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u53d8\u91cf\u95f4\u7684\u76f8\u4e92\u6c61\u67d3\uff0c\u53d8\u91cf\u540d\u51b2\u7a81\u7b49\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u62c6\u5206\uff0c\u5728\u67b6\u6784\u4e0a\u89e3\u8026\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f9d\u8d56\u7ba1\u7406\u7684\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u4f7f\u7528 IIFE \u6a21\u62df\u5b9e\u73b0\u6a21\u5757\u5316\uff0c\u901a\u8fc7\u51fd\u6570\u4f5c\u7528\u57df\u89e3\u51b3\u4e86\u547d\u540d\u51b2\u7a81\u3001\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u5757\u52a0\u8f7d\u5668",children:"\u6a21\u5757\u52a0\u8f7d\u5668"}),"\n",(0,r.jsx)(n.h3,{id:"commonjs-\u540c\u6b65\u6a21\u5757\u89c4\u8303",children:"CommonJS \u540c\u6b65\u6a21\u5757\u89c4\u8303"}),"\n",(0,r.jsx)(n.p,{children:"CommonJS \u89c4\u8303\u6982\u8ff0\u4e86\u540c\u6b65\u58f0\u660e\u4f9d\u8d56\u7684\u6a21\u5757\u5b9a\u4e49\uff0c\u4e3b\u8981\u7528\u4e8e\u5728\u670d\u52a1\u5668\u7aef\u5b9e\u73b0\u6a21\u5757\u5316\u4ee3\u7801\u7ec4\u7ec7\uff0c\u8bfb\u53d6\u6a21\u5757\u6587\u4ef6\u4e0d\u53d7\u7f51\u7edc\u539f\u56e0\u9650\u5236\u3002"}),"\n",(0,r.jsx)(n.p,{children:"CommonJS \u6a21\u5757\u5b9a\u4e49\u9700\u8981\u4f7f\u7528 require() \u6307\u5b9a\u4f9d\u8d56\uff0c\u800c\u4f7f\u7528 exports \u5bf9\u8c61\u5b9a\u4e49\u81ea\u5df1\u7684\u516c\u5171 API\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//moduleA.js\nvar moduleB = require('./moduleB');\nmodule.exports = {\n  stuff: moduleB.doStuff(),\n};\n\n//\u53ef\u4ee5\u652f\u6301\u52a8\u6001\u4f9d\u8d56\nif (condition) {\n  var A = require('./moduleA');\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["CommonJS \u4f9d\u8d56\u51e0\u4e2a\u5168\u5c40\u5c5e\u6027\u5982 ",(0,r.jsx)(n.code,{children:"require"})," \u548c ",(0,r.jsx)(n.code,{children:"module.exports"}),"\u3002\u5982\u679c\u60f3\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 CommonJS \u6a21\u5757\uff0c\u5c31\u9700\u8981\u4e0e\u5176\u975e\u539f\u751f\u7684\u6a21\u5757\u8bed\u6cd5\u4e4b\u95f4\u6784\u7b51\u201c\u6865\u6881\u201d\u3002\u6a21\u5757\u7ea7\u4ee3\u7801\u4e0e\u6d4f\u89c8\u5668\u8fd0\u884c\u65f6\u4e4b\u95f4\u4e5f\u9700\u8981\u67d0\u79cd\u201c\u5c4f\u969c\u201d\uff0c\u56e0\u4e3a\u6ca1\u6709\u5c01\u88c5\u7684 CommonJS \u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\u4f1a\u521b\u5efa\u5168\u5c40\u53d8\u91cf\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\u662f\u63d0\u524d\u628a\u6a21\u5757\u6587\u4ef6\u6253\u5305\u597d\uff0c\u628a\u5168\u5c40\u5c5e\u6027\u8f6c\u6362\u4e3a\u539f\u751f JavaScript \u7ed3\u6784\uff0c\u5c06\u6a21\u5757\u4ee3\u7801\u5c01\u88c5\u5728\u51fd\u6570\u95ed\u5305\u4e2d\uff0c\u6700\u7ec8\u53ea\u63d0\u4f9b\u4e00\u4e2a\u6587\u4ef6\u3002\u4e3a\u4e86\u4ee5\u6b63\u786e\u7684\u987a\u5e8f\u6253\u5305\u6a21\u5757\uff0c\u9700\u8981\u4e8b\u5148\u751f\u6210\u5168\u9762\u7684\u4f9d\u8d56\u56fe\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Node.js \u662f CommonJS \u89c4\u8303\u7684\u4e3b\u8981\u5b9e\u8df5\u8005\u3002 \u7531\u4e8e\u6a21\u5757\u7684\u4e2a\u6570\u5f80\u5f80\u6709\u9650\uff0c\u4e14 Node \u4f1a\u81ea\u52a8\u7f13\u5b58\u5df2\u7ecf\u52a0\u8f7d\u7684\u6a21\u5757\uff0c\u518d\u52a0\u4e0a\u8bbf\u95ee\u7684\u90fd\u662f\u672c\u5730\u6587\u4ef6\uff0c\u4ea7\u751f\u7684 IO \u5f00\u9500\u51e0\u4e4e\u53ef\u4ee5\u5ffd\u7565\u3002\u53e6\u5916\uff0cNode \u7a0b\u5e8f\u8fd0\u884c\u5728\u670d\u52a1\u5668\u7aef\uff0c\u5f88\u5c11\u9047\u5230\u9700\u8981\u9891\u7e41\u91cd\u542f\u670d\u52a1\u7684\u60c5\u51b5\uff0c\u90a3\u4e48\u5c31\u7b97\u5728\u670d\u52a1\u542f\u52a8\u65f6\u5728\u52a0\u8f7d\u4e0a\u82b1\u70b9\u65f6\u95f4\uff08\u51e0\u79d2\uff09\u4e5f\u6ca1\u6709\u4ec0\u4e48\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"amd-\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49",children:"AMD \u5f02\u6b65\u6a21\u5757\u5b9a\u4e49"}),"\n",(0,r.jsx)(n.p,{children:"\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49\uff08AMD,Asynchronous Module Definition\uff09\u7684\u6a21\u5757\u5b9a\u4e49\u7cfb\u7edf\u5219\u4ee5\u6d4f\u89c8\u5668\u4e3a\u76ee\u6807\u6267\u884c\u73af\u5883\uff0c\u8fd9\u9700\u8981\u8003\u8651\u7f51\u7edc\u5ef6\u8fdf\u7684\u95ee\u9898\u3002AMD \u7684\u4e00\u822c\u7b56\u7565\u662f\u8ba9\u6a21\u5757\u58f0\u660e\u81ea\u5df1\u7684\u4f9d\u8d56\uff0c\u800c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4f1a\u6309\u9700\u83b7\u53d6\u4f9d\u8d56\uff0c\u5e76\u5728\u4f9d\u8d56\u52a0\u8f7d\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c\u4f9d\u8d56\u5b83\u4eec\u7684\u6a21\u5757\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6838\u5fc3\uff1a\u7528\u51fd\u6570\u5305\u88c5\u6a21\u5757\u5b9a\u4e49\uff0c\u5168\u5c40 define \u51fd\u6570\u5305\u88c5\u6a21\u5757\u3002\u8fd9\u6837\u9632\u6b62\u58f0\u660e\u5168\u5c40\u53d8\u91cf\uff0c\u5e76\u5141\u8bb8\u52a0\u8f7d\u5668\u5e93\u63a7\u5236\u4f55\u65f6\u52a0\u8f7d\u6a21\u5757\u3002AMD \u52a0\u8f7d\u5668\u4f1a\u5728\u6240\u6709\u4f9d\u8d56\u6a21\u5757\u52a0\u8f7d\u5b8c\u6bd5\u540e\u7acb\u5373\u8c03\u7528\u6a21\u5757\u5de5\u5382\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u4fd7\u7684\u89e3\u91ca\uff1a\u5f02\u6b65\u52a0\u8f7d\u6a21\u5757\uff0c\u52a0\u8f7d\u6a21\u5757\u7684\u8fc7\u7a0b\u4e0d\u5f71\u54cd\u540e\u9762\u8bed\u53e5\u7684\u6267\u884c\u3002\u6240\u6709\u4f9d\u8d56\u6a21\u5757\u7684\u8bed\u53e5\uff0c\u90fd\u5b9a\u4e49\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7b49\u6240\u6709\u4f9d\u8d56\u90fd\u52a0\u8f7d\u5b8c\uff0c\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002\u3010\u4f9d\u8d56\u524d\u7f6e\uff0c\u63d0\u524d\u6267\u884c\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//moduleA.js\n//\u6211\u7684\u540d\u5b57\u53ebmoduleA,\u6211\u4f9d\u8d56moduleB\uff0cModuleC,\u8d76\u7d27\u53bb\u52a0\u8f7d\uff0c\u6267\u884c\u4f9d\u8d56\u3002 \u5f02\u6b65\u52a0\u8f7d\u4f9d\u8d56\uff0c\u4e0d\u5f71\u54cd\u540e\u9762\u7684\u8bed\u53e5\ndefine('moduleA', ['moduleB', 'moduleC'], function (moduleB) {\n  return {\n    stuff: moduleB.doStuff(),\n  };\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728 AMD \u6a21\u5757\u7684\u5de5\u5382\u51fd\u6570\u5185\u90e8\u53ef\u4ee5\u5b9a\u4e49 CommonJS \u98ce\u683c\u7684\u6a21\u5757\uff0c\u53ef\u4ee5\u50cf\u8bf7\u6c42\u6a21\u5757\u4e00\u6837\u8bf7\u6c42\u4ed6\u4eec\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"define('moduleA', ['require', 'exports'], function (require, exports) {\n  var moduleB = require('moduleB');\n  exports.stuff = moduleB.doStuff();\n});\n\n//\u4e5f\u53ef\u4ee5\u652f\u6301\u52a8\u6001\u4f9d\u8d56\ndefine('moduleA', ['require', 'exports'], function (require, exports) {\n  if (condition) {\n    //\u91cc\u9762\u4f7f\u7528require \u5b9e\u73b0\u5ef6\u8fdf\u52a0\u8f7d\n    var moduleB = require('moduleB');\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"AMD \u6a21\u5757\u89c4\u8303\u7684\u4ee3\u8868\u6846\u67b6\u662f requireJS\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cmd-\u540c\u6b65\u6a21\u5757\u89c4\u8303",children:"CMD \u540c\u6b65\u6a21\u5757\u89c4\u8303"}),"\n",(0,r.jsx)(n.p,{children:"\u5199\u6cd5\u4e0e AMD \u770b\u8d77\u6765\u6bd4\u8f83\u50cf\uff0c\u4f46\u601d\u60f3\u662f\u201c\u4f9d\u8d56\u5c31\u8fd1\uff0c\u5ef6\u8fdf\u6267\u884c\u201d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// AMD \u9ed8\u8ba4\u63a8\u8350\u7684\u662f\ndefine(['./a', './b'], function(a, b) { // \u4f9d\u8d56\u5fc5\u987b\u4e00\u5f00\u59cb\u5c31\u5199\u597d\na.doSomething()\n// \u6b64\u5904\u7565\u53bb 100 \u884c\nb.doSomething()\n...\n})\n\n// CMD \u5c31\u8fd1\u4e66\u5199\u4f9d\u8d56\ndefine(function(require, exports, module) {\nvar a = require('./a')\na.doSomething()\n// \u6b64\u5904\u7565\u53bb 100 \u884c\nvar b = require('./b') // \u4f9d\u8d56\u53ef\u4ee5\u5c31\u8fd1\u4e66\u5199\uff0c\u9700\u8981\u7684\u65f6\u5019\u5728\u58f0\u660e\u9700\u8981\uff0c\u800c\u4e0d\u662f\u5728\u5f00\u5934\u58f0\u660e\nb.doSomething()\n// ...\n})\n\n\n\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"CMD \u6a21\u5757\u89c4\u8303\u7684\u4ee3\u8868\u6846\u67b6\u4e3a SeaJS\u3002 AMD CMD \u73b0\u5728\u975e\u5e38\u5c11\u4f7f\u7528\u4e86\u3002ESModule,CommonJS \u7edf\u4e00\u4e86\u6d4f\u89c8\u5668\u7aef\u548c Node \u7aef\u7684\u6a21\u5757\u52a0\u8f7d\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"umd-\u901a\u7528\u6a21\u5757\u5b9a\u4e49",children:"UMD \u901a\u7528\u6a21\u5757\u5b9a\u4e49"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u7edf\u4e00 CommonJS \u548c AMD \u751f\u6001\u7cfb\u7edf\uff0c\u4f7f\u7528 UMD(UniversalModule Definition)\u53ef\u4ee5\u521b\u5efa\u8fd9\u4e24\u4e2a\u7cfb\u7edf\u90fd\u53ef\u4ee5\u4f7f\u7528\u7684\u6a21\u5757\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u8d28\uff1aUMD \u5b9a\u4e49\u7684\u6a21\u5757\u4f1a\u5728\u542f\u52a8\u65f6\u68c0\u6d4b\u8981\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\u7cfb\u7edf\uff0c\u7136\u540e\u8fdb\u884c\u9002\u5f53\u914d\u7f6e\uff0c\u5e76\u628a\u6240\u6709\u903b\u8f91\u5305\u88c5\u5728\u4e00\u4e2a\u7acb\u5373\u8c03\u7528\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\uff08IIFE\uff09\u4e2d\u3002\u867d\u7136\u8fd9\u79cd\u7ec4\u5408\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u4f46\u5728\u5f88\u591a\u573a\u666f\u4e0b\u8db3\u4ee5\u5b9e\u73b0\u4e24\u4e2a\u751f\u6001\u7684\u5171\u5b58\u3002 jQuery \u548c\u5f88\u591a\u7684\u5de5\u5177\u5e93\u90fd\u662f\u4f7f\u7528\u8fd9\u79cd\u6a21\u5757\u5316\u7684\u65b9\u5f0f\u8fdb\u884c\u5f15\u5165\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"es6-\u6a21\u5757\u89c4\u8303",children:"ES6 \u6a21\u5757\u89c4\u8303"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u9762\u63d0\u5230\u7684\u6a21\u5757\u7cfb\u7edf\u90fd\u662f\u975e\u5b98\u65b9\u7684\uff0cJS \u5e76\u6ca1\u6709\u5b98\u65b9\u7684\u6a21\u5757\u7684\u529f\u80fd\uff0cESModule \u662f es6 \u5b9e\u73b0\u7684\u6807\u51c6\u6a21\u5757\u529f\u80fd\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["CommonJS \u4e0e AMD \u4e4b\u95f4\u7684\u51b2\u7a81\u6b63\u662f\u6211\u4eec\u73b0\u5728\u4eab\u7528\u7684 ECMAScript 6 \u6a21\u5757\u89c4\u8303\u8bde\u751f\u7684\u6e29\u5e8a\u3002\u5e26\u6709",(0,r.jsx)(n.code,{children:'type="module"'}),"\u5c5e\u6027\u7684",(0,r.jsx)(n.code,{children:"<script>"}),"\u6807\u7b7e\u4f1a\u544a\u8bc9\u6d4f\u89c8\u5668\u76f8\u5173\u4ee3\u7801\u5e94\u8be5\u4f5c\u4e3a\u6a21\u5757\u6267\u884c\uff0c\u800c\u4e0d\u662f\u4f5c\u4e3a\u4f20\u7edf\u7684\u811a\u672c\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u5404\u79cd\u9879\u76ee\u5de5\u4f5c\u4e2d\u5927\u90e8\u5206\u90fd\u662f\u8fd9\u6837\u4f7f\u7528\u7684\uff1a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u786e\u5b9e\u5f88\u719f\u6089..."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/** \u5b9a\u4e49\u6a21\u5757 math.js **/\nvar basicNum = 0;\nvar add = function (a, b) {\n  return a + b;\n};\nexport { basicNum, add };\n\n/** \u5f15\u7528\u6a21\u5757 **/\nimport { basicNum, add } from './math';\nfunction test(ele) {\n  ele.textContent = add(99 + basicNum);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"ESModule \u4e2d import \u7684\u6a21\u5757\u4f1a\u88ab JS \u5f15\u64ce\u9759\u6001\u5206\u6790\u3002\u6a21\u5757\u4ee3\u7801\u662f\u5728\u7f16\u8bd1\u65f6\u5c31\u5f15\u5165\u7684\uff0c\u800c\u4e0d\u662f\u5728\u8fd0\u884c\u65f6\u624d\u52a0\u8f7d\uff0c\u6240\u4ee5\u65e0\u6cd5\u5b9e\u73b0\u6761\u4ef6\u52a0\u8f7d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"commonjs-\u4e0e-esmodule-\u533a\u522b",children:"CommonJS \u4e0e ESModule \u533a\u522b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CommonJS \u8f93\u51fa\u7684\u662f\u503c\u7684\u62f7\u8d1d\uff0cESModule \u8f93\u51fa\u7684\u662f\u503c\u7684\u5f15\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["CommonJS \u8f93\u51fa\u7684\u662f\u503c\u7684",(0,r.jsx)(n.strong,{children:"\u6d45\u62f7\u8d1d"}),"\uff0c\u5982\u679c\u5bfc\u51fa\u5bf9\u8c61\u540e\uff0c\u4fee\u6539\u5bf9\u8c61\u7684\u503c\uff0c\u53e6\u4e00\u4e2a\u6a21\u5757\u7684\u4e5f\u4f1a\u53d8\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// util\\index.js\nlet object = {\n  age: 10,\n};\nlet fun = function () {\n  console.log('modules obj', object);\n  object = { age: 99 };\n};\nmodule.exports = {\n  fun,\n  object,\n};\n\n// index.js\nvar { name, fun, object } = require('./util/index.js');\nconsole.log('before fun', object);\nfun();\nconsole.log('end fun', object); // \u8fd8\u662f\u524d\u9762\u768410 \u800c\u4e0d\u662f99\n"})}),"\n",(0,r.jsxs)(n.p,{children:["ESModule \u5728 JS \u5f15\u64ce\u5bf9\u811a\u672c\u9759\u6001\u5206\u6790\u65f6\uff0c\u9047\u5230",(0,r.jsx)(n.code,{children:"import"}),"\u6a21\u5757\uff0c\u5c31\u4f1a\u751f\u6210\u4e00\u4e2a\u53ea\u8bfb\u5f15\u7528\uff0c\u4f1a\u6307\u5411\u6a21\u5757\u91cc\u5bf9\u5e94\u7684\u53d8\u91cf\uff0c\u662f\u52a8\u6001\u5f15\u7528\uff0c\u5e76\u4e0d\u4f1a\u7f13\u5b58\u6a21\u5757\u91cc\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CommonJS \uff08 AMD / CMD / CommonJS \u90fd\u662f\uff09\u662f\u8fd0\u884c\u65f6\u52a0\u8f7d\uff0cESModule \u662f\u7f16\u8bd1\u65f6\u8f93\u51fa\u63a5\u53e3\uff0c\u7f16\u8bd1\u9636\u6bb5\u5c31\u786e\u5b9a\u4e86\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd0\u884c\u65f6\u52a0\u8f7d\uff1aCommonJS \u6a21\u5757\u5c31\u662f\u5bf9\u8c61\uff1b\u5373\u5728\u8f93\u5165\u65f6\u662f\u5148\u52a0\u8f7d\u6574\u4e2a\u6a21\u5757\uff0c\u751f\u6210\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7136\u540e\u518d\u4ece\u8fd9\u4e2a\u5bf9\u8c61\u4e0a\u9762\u8bfb\u53d6\u65b9\u6cd5\uff0c\u8fd9\u79cd\u52a0\u8f7d\u79f0\u4e3a\u201c\u8fd0\u884c\u65f6\u52a0\u8f7d\u201d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u8bd1\u65f6\u52a0\u8f7d\uff1a ES6 \u6a21\u5757\u4e0d\u662f\u5bf9\u8c61\uff0c\u800c\u662f\u901a\u8fc7 export \u547d\u4ee4\u663e\u5f0f\u6307\u5b9a\u8f93\u51fa\u7684\u4ee3\u7801\uff0cimport \u65f6\u91c7\u7528\u9759\u6001\u547d\u4ee4\u7684\u5f62\u5f0f\u3002\u5373\u5728 import \u65f6\u53ef\u4ee5\u6307\u5b9a\u52a0\u8f7d\u67d0\u4e2a\u8f93\u51fa\u503c\uff0c\u800c\u4e0d\u662f\u52a0\u8f7d\u6574\u4e2a\u6a21\u5757\uff0c\u8fd9\u79cd\u52a0\u8f7d\u79f0\u4e3a\u201c\u7f16\u8bd1\u65f6\u52a0\u8f7d\u201d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"ESModule \u5bfc\u51fa\u7684\u6a21\u5757\u662f\u53ea\u8bfb\u7684\uff0c\u4e0d\u80fd\u53d8\u66f4\uff0c\u5426\u5219\u62a5\u9519\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CommonJS \u7684\u52a8\u6001\u8bed\u6cd5\u53ef\u4ee5\u5199\u5728\u5224\u65ad\u91cc\u52a8\u6001\u5bfc\u5165\uff0c\u800c ESModule \u53ea\u80fd\u5199\u5728\u9876\u5c42\u3002 ES Module \u76ee\u524d\u4e5f\u652f\u6301\u4e86\u52a8\u6001 import\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://weread.qq.com/web/reader/751326d0720befab7514782k9dc32ad02bc9dcb88e010da",children:"\u7b2c 26 \u7ae0 JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mitianyi.gitbook.io/frontend-interview-guide/javascript-basics/modularization#wei-shen-me-shi-yong-mo-kuai-hua",children:"\u6a21\u5757\u5316 - \u524d\u7aef\u9762\u8bd5\u6307\u5357"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844903576309858318#heading-2",children:"\u524d\u7aef\u6a21\u5757\u5316\uff1aCommonJS,AMD,CMD,ES6 - \u6398\u91d1"})," - \u63a8\u8350\uff0c\u5e76\u5305\u542b\u6bcf\u79cd\u5b9e\u73b0\u65b9\u5f0f\u7684\u5c0f demo"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://huangxuan.me/js-module-7day/#/",children:"JavaScript Modularization Journey"})," - slides"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844904056847073293#heading-0",children:"\u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u7684 JavaScript \u6a21\u5757\u5316\u91ce\u53f2 - \u6398\u91d1"})," - \u4e86\u89e3\u4e00\u4e0b\u5386\u53f2\uff0c\u6709\u4e2a\u6574\u4f53\u7684\u5e76\u6709\u65f6\u95f4\u8f74\u7684\u8ba4\u8bc6"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844903981311852551#comment",children:"\u9762\u8bd5\u5b98\u8ba9\u6211\u89e3\u91ca\u4ec0\u4e48\u662f\u524d\u7aef\u6a21\u5757\u5316 - \u6398\u91d1"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8672:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var r=i(959);const o={},s=r.createContext(o);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);