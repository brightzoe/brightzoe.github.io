"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9485],{6993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(1527),i=t(8672);const r={},l="\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",c={id:"fe-basic/javascript/basic/settimeout-and-setinterval",title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",description:"\u57fa\u672c\u542b\u4e49",source:"@site/docs/fe-basic/javascript/basic/settimeout-and-setinterval.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/settimeout-and-setinterval",permalink:"/docs/fe-basic/javascript/basic/settimeout-and-setinterval",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/settimeout-and-setinterval.md",tags:[],version:"current",lastUpdatedAt:1706773091,formattedLastUpdatedAt:"2024\u5e742\u67081\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u539f\u578b\u548c\u539f\u578b\u94fe",permalink:"/docs/fe-basic/javascript/basic/prototype"},next:{title:"this,call,apply,bind",permalink:"/docs/fe-basic/javascript/basic/this-and-related"}},a={},d=[{value:"\u57fa\u672c\u542b\u4e49",id:"\u57fa\u672c\u542b\u4e49",level:2},{value:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668",id:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668",level:2},{value:"setInterval \u7684\u6267\u884c\u65f6\u95f4",id:"setinterval-\u7684\u6267\u884c\u65f6\u95f4",level:2},{value:"\u5468\u671f\u6027\u8c03\u5ea6",id:"\u5468\u671f\u6027\u8c03\u5ea6",level:2},{value:"setInterval \u5b58\u5728\u7684\u95ee\u9898",id:"setinterval-\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417\uff1f",id:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417",level:2},{value:"Reference",id:"reference",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5b9a\u65f6\u5668-settimeout-\u4e0e-setinterval",children:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u542b\u4e49",children:"\u57fa\u672c\u542b\u4e49"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setTimeout"})," \u5141\u8bb8\u6211\u4eec\u5c06\u51fd\u6570\u63a8\u8fdf\u5230\u4e00\u6bb5\u65f6\u95f4\u95f4\u9694\u4e4b\u540e\u518d\u6267\u884c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setInterval"})," \u5141\u8bb8\u6211\u4eec\u91cd\u590d\u8fd0\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\u4ece",(0,s.jsx)(n.strong,{children:"\u4e00\u6bb5\u65f6\u95f4\u95f4\u9694\u4e4b\u540e\u5f00\u59cb\u8fd0\u884c"}),"\uff0c\u4e4b\u540e\u4ee5\u8be5\u65f6\u95f4\u95f4\u9694\u8fde\u7eed\u91cd\u590d\u8fd0\u884c\u8be5\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668",children:"\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u4e0e\u53d6\u6d88\u5b9a\u65f6\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setInterval"})," \u8fd4\u56de\u4e00\u4e2a\u65f6\u95f4\u95f4\u9694 ID\uff0c\u8be5 ID \u552f\u4e00\u5730\u6807\u8bc6\u65f6\u95f4\u95f4\u9694\uff0c\u7a0d\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"clearInterval(ID)"})," \u6765\u6e05\u9664\uff0c\u8fd4\u56de\u7684 intervalID \u662f\u4e00\u4e2a\u975e\u96f6\u6570\u503c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let timerId = setTimeout(() => alert('never happens'), 1000);\nalert(timerId); // \u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\n\nclearTimeout(timerId); // \u5728\u8fd0\u884c\u524d\u53d6\u6d88\u4e86\u5b9a\u65f6\u5668\nalert(timerId); // \u8fd8\u662f\u8fd9\u4e2a\u6807\u8bc6\u7b26\uff08\u5e76\u6ca1\u6709\u56e0\u4e3a\u8c03\u5ea6\u88ab\u53d6\u6d88\u4e86\u800c\u53d8\u6210 null\uff09\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u5b9a\u65f6\u5668\u6807\u8bc6\u7b26\u662f\u4e00\u4e2a\u6570\u5b57\u3002\u5728\u5176\u4ed6\u73af\u5883\u4e2d\uff0c\u53ef\u80fd\u662f\u5176\u4ed6\u7684\u4e1c\u897f\u3002\u4f8b\u5982 Node.js \u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5b9a\u65f6\u5668\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5305\u542b\u4e00\u7cfb\u5217\u65b9\u6cd5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setInterval()"}),"\u548c ",(0,s.jsx)(n.code,{children:"setTimeout()"}),"\u5171\u4eab\u540c\u4e00\u4e2a ID \u6c60\uff0c\u5e76\u4e14 ",(0,s.jsx)(n.code,{children:"clearInterval()"}),"\u548c ",(0,s.jsx)(n.code,{children:"clearTimeout()"}),"\u5728\u6280\u672f\u4e0a\u662f\u53ef\u4e92\u6362\u4f7f\u7528\u7684\u3002\u4f46\u662f\uff0c\u6211\u4eec\u5fc5\u987b\u53bb\u5339\u914d ",(0,s.jsx)(n.code,{children:"clearInterval()"}),"\u548c ",(0,s.jsx)(n.code,{children:"clearTimeout()"}),"\u5bf9\u5e94\u7684 id\uff0c\u4ee5\u907f\u514d\u4ee3\u7801\u6742\u4e71\u65e0\u7ae0\uff0c\u589e\u5f3a\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"setinterval-\u7684\u6267\u884c\u65f6\u95f4",children:"setInterval \u7684\u6267\u884c\u65f6\u95f4"}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u8bbe\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u540e\u624d\u5f00\u59cb\u7b2c\u4e00\u6b21\u6267\u884c\uff0c\u5e76\u4e0d\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u5982\u4f55\u8ba9\u4ed6\u5148\u7acb\u5373\u6267\u884c\u518d\u5b9a\u65f6\u6267\u884c\u5462\uff1f"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5e38\u89c4\u65b9\u6cd5\u5c01\u88c5\u4e00\u4e2a\u7acb\u5373\u6267\u884c\u7684 ",(0,s.jsx)(n.code,{children:"setInterval"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const target = () => {\n  console.log('Do something...');\n};\n\ntarget(); //\u5148\u8c03\u7528\u4e00\u6b21\u7136\u540e\u518dsetInterval\nsetInterval(target, 1000);\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u5c01\u88c5\u4e00\u4e0b\uff0c\u5728\u8c03\u7528\u4e4b\u524d\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u8c03\u7528\u8fc7\uff0c\u5df2\u7ecf\u8c03\u7528\u8fc7\u5148\u6e05\u9664\uff0c\u518d\u91cd\u65b0\u8c03\u7528\u3002"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const setIntervalImmediately = (func, interval) => {\n  func();\n  return setInterval(func, interval);\n};\n\n// \u5b9a\u4e49\u4e00\u4e2a\u5168\u5c40\u7684\u5b9a\u65f6\u5668\u53d8\u91cftimer\uff0c\u7528\u4e8e\u4fdd\u5b58\u548c\u6e05\u9664\u5b9a\u65f6\u5668\n// \u8c03\u7528\u4e4b\u524d\uff0c\u68c0\u67e5\u5b9a\u65f6\u5668\u662f\u5426\u5b58\u5728\uff0c\u5b58\u5728\u5219\u6e05\u9664\ntimer && clearInterval(timer);\ntimer = setIntervalImmediately(target, 1000);\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8ba9\u8c03\u7528\u7684\u51fd\u6570\u8fd4\u56de\u5b83\u672c\u8eab\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const target = () => {\n  console.log('Do something...');\n  return target;\n};\n\ntimer && clearInterval(timer);\ntimer = setInterval(target(), 1000); //\u8fd9\u91cc\u76ee\u6807\u51fd\u6570\u662ftarget\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\uff0c\u4f1a\u5148\u6267\u884c\u4e00\u6b21\uff0c\u7136\u540e\u5c06\u8fd4\u56de\u503c\u653e\u5230setInterval\u7684\u961f\u5217\u91cc\uff0c\u5f88\u5de7\u5999\uff01\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"setImmediatelyInterval"})," \u6bd4\u8f83\u901a\u7528\uff0c\u6bd4\u8f83\u7075\u6d3b\uff0c\u591a\u4eba\u5408\u4f5c\u4e5f\u53ef\u4ee5\u5f53\u4f5c\u516c\u7528\u51fd\u6570 utils\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u76ee\u6807\u51fd\u6570\u8fd4\u56de\u81ea\u8eab\u7f3a\u5c11\u4e00\u5b9a\u7684\u7075\u6d3b\u6027\uff0c\u5982\u679c\u60f3\u8981\u6709\u5176\u4ed6\u7684\u8fd4\u56de\u503c\u5c31\u4e0d\u884c\u4e86\u3002\u540c\u65f6 ",(0,s.jsx)(n.code,{children:"setinterval"})," \u4e0e ",(0,s.jsx)(n.code,{children:"target"})," \u589e\u52a0\u4e86\u8026\u5408\u6027\uff0c\u72ec\u81ea\u5f00\u53d1\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f7f\u7528\u7684\u573a\u666f\u53d7\u9650\u3002"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5468\u671f\u6027\u8c03\u5ea6",children:"\u5468\u671f\u6027\u8c03\u5ea6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://zh.javascript.info/settimeout-setinterval#setinterval",children:"\u8c03\u5ea6\uff1asetTimeout \u548c setInterval"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"setInterval \u8fdb\u884c\u5468\u671f\u6027\u8c03\u5ea6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5d4c\u5957\u7684 setTimeout \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u5468\u671f\u6027\u8fd0\u884c\u7684\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let timerId = setTimeout(function tick() {\n  alert('tick');\n  timerId = setTimeout(tick, 2000); //\u7b2c\u4e00\u6b21\u6267\u884c\u4e86tick \u4e4b\u540e\u53c8\u6302\u4e0a\u4e86\u7b2c\u4e8c\u6b21\n}, 2000);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5d4c\u5957\u7684 setTimeout \u8981\u6bd4 setInterval \u7075\u6d3b\u5f97\u591a\u3002\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5",(0,s.jsx)(n.strong,{children:"\u6839\u636e\u5f53\u524d\u6267\u884c\u7ed3\u679c\u6765\u8c03\u5ea6\u4e0b\u4e00\u6b21\u8c03\u7528"}),"\uff0c\u56e0\u6b64\u4e0b\u4e00\u6b21\u8c03\u7528\u53ef\u4ee5\u4e0e\u5f53\u524d\u8fd9\u4e00\u6b21\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5d4c\u5957\u7684 setTimeout \u80fd\u591f\u76f8\u5bf9\u7cbe\u786e\u5730\u8bbe\u7f6e\u4e24\u6b21\u6267\u884c\u4e4b\u95f4\u7684\u5ef6\u65f6\uff0c\u800c setInterval \u5374\u4e0d\u80fd\u3002"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"setInterval \u662f\u6bcf\u95f4\u9694\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u5411\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u6b21\u76ee\u6807\u51fd\u6570\u3002\u4e0d\u4f1a\u5173\u5fc3\u524d\u4e00\u6b21\u6267\u884c\u8017\u8d39\u4e86\u591a\u4e45\uff0c\u524d\u4e00\u6b21\u6267\u884c\u662f\u5426\u6267\u884c\u5b8c\u6bd5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"setTimeout \u662f\u5728\u5f53\u524d\u76ee\u6807\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u624d\u8bbe\u7f6e\u5728\u95f4\u9694\u65f6\u95f4\u540e\u6267\u884c\u4e0b\u4e00\u6b21\u8c03\u7528\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setinterval-\u5b58\u5728\u7684\u95ee\u9898",children:"setInterval \u5b58\u5728\u7684\u95ee\u9898"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u81ea\u5df1\u8c03\u7528\u7684\u4ee3\u7801\u662f\u5426\u62a5\u9519\u8fd9\u4ef6\u4e8b\u6f20\u4e0d\u5173\u5fc3\u3002\u6bcf\u95f4\u9694\u56fa\u5b9a\u65f6\u95f4\u540e\uff0c\u5411\u4efb\u52a1\u961f\u5217\u6dfb\u52a0\u4e00\u6b21\u76ee\u6807\u51fd\u6570\u3002\u4e0d\u4f1a\u5173\u5fc3\u524d\u4e00\u6b21\u6267\u884c\u8017\u8d39\u4e86\u591a\u4e45\uff0c\u524d\u4e00\u6b21\u6267\u884c\u662f\u5426\u6267\u884c\u5b8c\u6bd5\uff0c\u524d\u4e00\u6b21\u662f\u5426\u6b63\u786e\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u65e0\u89c6\u51fd\u6570\u8fd0\u884c\u65f6\u95f4\uff0c\u5c24\u5176\u662f\u5728\u5f02\u6b65\u8c03\u7528\u4e2d\u3002\u5047\u5982\u5728 setInterval \u91cc\u6dfb\u52a0\u4e86 ajax \u8c03\u7528\uff0c\u8fd4\u56de\u65f6\u95f4\u957f\u4e8e delay \u7684\u65f6\u95f4\uff0c\u7f51\u7edc\u961f\u5217\u4f1a\u585e\u6ee1 ajax \u8c03\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u4fdd\u8bc1\u4e00\u5b9a\u4f1a\u6267\u884c\uff0c\u6709\u4e9b\u8c03\u7528\u53ef\u80fd\u76f4\u63a5\u4f1a\u88ab\u5ffd\u7565\u3002 \u5f53\u5230\u4e86\u8981\u6dfb\u52a0\u4efb\u52a1\u5230\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u65f6\u95f4\uff0c\u5982\u679c\u4e0a\u4e00\u4e2a\u76ee\u6807\u4efb\u52a1\u8fd8\u5728\u4efb\u52a1\u961f\u5217\u4e2d\uff0c\u6b64\u6b21\u4efb\u52a1\u5c06\u4f1a\u88ab\u8df3\u8fc7\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6bcf\u4e2a setTimeout \u4ea7\u751f\u7684\u4efb\u52a1\u4f1a\u76f4\u63a5 push \u5230\u4efb\u52a1\u961f\u5217\u4e2d\uff1b\u800c setInterval \u5728\u6bcf\u6b21\u628a\u4efb\u52a1 push \u5230\u4efb\u52a1\u961f\u5217\u524d\uff0c\u90fd\u8981\u8fdb\u884c\u4e00\u4e0b\u5224\u65ad(\u770b\u4e0a\u6b21\u7684\u4efb\u52a1\u662f\u5426\u4ecd\u5728\u961f\u5217\u4e2d\uff0c\u5982\u679c\u6709\u5219\u4e0d\u6dfb\u52a0\uff0c\u6ca1\u6709\u5219\u6dfb\u52a0)\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"::: tip \u5d4c\u5957\u7684 setTimeout \u6bd4 setInterval \u4f7f\u7528\u8303\u56f4\u66f4\u5e7f\uff0c\u5c24\u5176\u662f\u5728\u5f02\u6b65\u64cd\u4f5c\uff0c\u6d89\u53ca ajax \u65f6\uff08\u4e0d\u8003\u8651 websocket\uff09\uff0c\u65e0\u6cd5\u9884\u77e5\u591a\u4e45\u624d\u80fd\u6709\u8fd4\u56de\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u786e\u5b9e\u8981\u4fdd\u8bc1\u4e8b\u4ef6\u201c\u5300\u901f\u201d\u88ab\u89e6\u53d1\uff0c\u90a3\u53ef\u4ee5\u7528\u5e0c\u671b\u7684\u5ef6\u8fdf\u51cf\u53bb\u4e0a\u6b21\u8c03\u7528\u6240\u82b1\u65f6\u95f4\uff0c\u7136\u540e\u5c06\u5f97\u5230\u7684\u5dee\u503c\u4f5c\u4e3a\u5ef6\u8fdf\u52a8\u6001\u6307\u5b9a\u7ed9 setTimeout\u3002"}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417",children:"\u5b9a\u65f6\u5668\u662f\u51c6\u65f6\u7684\u5417\uff1f"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u6307\u5b9a\u7684\u65f6\u95f4\uff08\u6216\u5ef6\u8fdf\uff09\u4e0d\u80fd\u4fdd\u8bc1\u5728\u6307\u5b9a\u7684\u786e\u5207\u65f6\u95f4\u4e4b\u540e\u6267\u884c\uff0c\u800c\u662f\u6700\u77ed\u7684\u5ef6\u8fdf\u6267\u884c\u65f6\u95f4\u3002\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u5806\u6808\u4e3a\u7a7a\u4e4b\u524d\uff0c\u4f20\u9012\u7ed9\u8fd9\u4e9b\u51fd\u6570\u7684\u56de\u8c03\u5c06\u65e0\u6cd5\u8fd0\u884c\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval",children:"MDN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://blog.csdn.net/qq_39075021/article/details/110137215",children:"JS setInterval \u51fd\u6570\u4ece\u7acb\u5373\u6267\u884c\u5230\u5b9a\u65f6\u6267\u884c\u7684\u4e09\u79cd\u65b9\u6848"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://zh.javascript.info/settimeout-setinterval#setinterval",children:"\u8c03\u5ea6\uff1asetTimeout \u548c setInterval"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844903773622501383#heading-15",children:"\u6df1\u5ea6\u89e3\u5bc6 setTimeout \u548c setInterval\u2014\u2014\u4e3a setInterval \u6b63\u540d\uff01 - \u6398\u91d1"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8672:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var s=t(959);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);