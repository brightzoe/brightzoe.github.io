"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4818],{5796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=s(1527),r=s(8672);const l={},t="\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8",a={id:"fe-basic/caching-in-browser",title:"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8",description:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",source:"@site/docs/fe-basic/caching-in-browser.md",sourceDirName:"fe-basic",slug:"/fe-basic/caching-in-browser",permalink:"/docs/fe-basic/caching-in-browser",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/caching-in-browser.md",tags:[],version:"current",lastUpdatedAt:1709257584,formattedLastUpdatedAt:"2024\u5e743\u67081\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u6d4f\u89c8\u5668",permalink:"/docs/fe-basic/browser"},next:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/fe-basic/fe-engineering/"}},c={},o=[{value:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",id:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",level:2},{value:"\u4e00\u822c\u4f7f\u7528 webStorage \u5f88\u5c11\u4f7f\u7528 cookie",id:"\u4e00\u822c\u4f7f\u7528-webstorage-\u5f88\u5c11\u4f7f\u7528-cookie",level:3},{value:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898",id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"\u4f7f\u7528 webStorage \u7684\u6ce8\u610f\u4e8b\u9879",id:"\u4f7f\u7528-webstorage-\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u5c01\u88c5",id:"\u5c01\u88c5",level:3},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93",id:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93",level:3},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8",children:"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8"}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",children:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b"}),"\n",(0,i.jsx)(n.p,{children:"localStorage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5927\u5c0f 5M\uff0c\u6587\u4ef6\u5b58\u50a8\u7ea7\u522b\uff0c\u4e0d\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u4e0d\u6d88\u5931"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"sessionStorage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5927\u5c0f 5M\uff0c\u5185\u5b58\u7ea7\u522b\uff0c\u4f46\u662f\u5f53\u524d\u6807\u7b7e\u9875\u5173\u95ed\u5219\u4e22\u5931"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Cookie"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5927\u5c0f 4kb\uff0c\u524d\u7aef\u53ef\u4ee5\u64cd\u4f5c\uff08\u540e\u7aef\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u53ef\u64cd\u4f5c\u7684\u6570\u636e\uff09\uff0c\u4f46\u662f\u4e00\u822c\u7531\u540e\u7aef\u5b9a\u4e49\uff0c\u5e76\u4e14\u73b0\u5728\u65b0\u7248\u7684\u6d4f\u89c8\u5668\u5728\u9010\u6b65\u7684\u629b\u5f03\u8be5\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u670d\u52a1\u5668\u751f\u6210\uff0c\u4ea7\u751f\u539f\u56e0\u662f HTTP \u65e0\u72b6\u6001\uff0ccookie \u7528\u6765\u8bb0\u5f55\u6570\u636e\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"IndexedDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6700\u5c0f 250M\uff0c\u6587\u4ef6\u7ea7\u522b\uff08\u652f\u6301\u4e8b\u52a1\uff0c\u5c5e\u4e8e websql \u7684\u66ff\u4ee3\u54c1\uff09\uff0c\u9700\u8981\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u624d\u53ef\u4ee5\u3002\u4e00\u822c\u7528\u4e0d\u5230\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u6d4f\u89c8\u5668\u4e0d\u505a\u5ba2\u6237\u7aef\u7684\u8bdd\u90a3\u4e48\u5c31\u6ca1\u4ec0\u4e48\u7528\uff0c\u505a\u672c\u5730\u5ba2\u6237\u7aef\u53ef\u4ee5\u7528\uff0c\u6bd4\u5982 electron"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5185\u5b58\u5b58\u50a8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c31\u662f\u53d8\u91cf\u5b58\u50a8\uff0c\u53ef\u4ee5\u8bf4\u662f\u6ca1\u6709\u4e0a\u9650\uff0c\u53d6\u51b3\u4e8e\u4f60\u7684\u5185\u5b58"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e00\u822c\u4f7f\u7528-webstorage-\u5f88\u5c11\u4f7f\u7528-cookie",children:"\u4e00\u822c\u4f7f\u7528 webStorage \u5f88\u5c11\u4f7f\u7528 cookie"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 cookie \u7684\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b58\u653e\u6570\u636e\u592a\u5c11\uff0c4kb\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6bcf\u6b21\u90fd\u4f1a\u643a\u5e26\u5728 HTTP \u8bf7\u6c42\u5934\uff0c\u4f1a\u4e0e\u670d\u52a1\u7aef\u8fdb\u884c\u4ea4\u4e92\uff0c\u5982\u679c\u53ea\u662f\u4e3a\u4e86\u5b58\u50a8\u672c\u5730\u6570\u636e\uff0c\u4f1a\u9020\u6210\u6027\u80fd\u6d6a\u8d39\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"webStorage\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u4e34\u65f6\u6216\u6c38\u4e45\u6027\u7684\u6570\u636e\u5b58\u50a8\uff0c\u4e0d\u76f4\u63a5\u53c2\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u4ea4\u4e92\uff0c\u80fd\u591f\u907f\u514d\u4e00\u4e9b\u52ab\u6301\u7684\u5b89\u5168\u98ce\u9669\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b58\u50a8\u5bb9\u91cf 5M \uff0c\u6ee1\u8db3\u5927\u591a\u6570\u5e94\u7528\u573a\u666f\uff0c\u4e14\u6bcf\u4e2a\u5b58\u50a8\u6709\u5bf9\u5e94\u7684 key,\u53ef\u4ee5\u72ec\u7acb\u7684\u7ba1\u7406\u5bf9\u5e94\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ea\u652f\u6301\u5b57\u7b26\u4e32\u7c7b\uff0c\u9700\u8981\u624b\u52a8 JSON.stringify()\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898",children:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5f88\u5bb9\u6613\u51fa\u73b0\uff0c\u9700\u8981\u5b58\u50a8\u4ec0\u4e48\uff0c\u5c31\u76f4\u63a5\u5b58\u50a8\u5230 localStorage/sessionStorage \u91cc\u3002\u54ea\u91cc\u9700\u8981\u5c31\u6dfb\u52a0\u4e00\u4e2a\uff0c\u968f\u7740\u9879\u76ee\u590d\u6742\u5ea6\u63d0\u5347\uff0c\u5df2\u7ecf\u4e0d\u8bb0\u5f97\u5199\u4e86\u591a\u5c11\u4e2a\u5b58\u50a8\u7684 value,\u4e5f\u5bb9\u6613\u51fa\u73b0\u9876\u6389\u524d\u9762\u8bbe\u7f6e\u7684 key,\u4ece\u800c\u5bfc\u81f4\u4e00\u4e9b bug\u3002\u9879\u76ee\u53d8\u5927\u540e\uff0c\u540e\u671f\u4e0d\u597d\u7ef4\u62a4\u6574\u4f53\u7684\u5b58\u50a8\u72b6\u6001\u3002\u9700\u8981\u7edf\u4e00\u7ba1\u7406\u5b58\u50a8\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7ed9\u4f7f\u7528\u7684\u672c\u5730\u5b58\u50a8\u6dfb\u52a0\u524d\u7f00\uff0c\u9879\u76ee\u524d\u7f00\u6216\u4f5c\u8005\u7b49\uff0c\u5bf9\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u505a\u4e00\u5c42\u5c01\u88c5\uff0c\u7edf\u4e00\u7ba1\u7406\u672c\u5730\u5b58\u50a8\u3002\u5728 config \u7edf\u4e00\u6ce8\u518c\u9700\u8981\u5b58\u50a8\u7684 key,\u53ea\u6709\u6ce8\u518c\u4e86\u624d\u80fd\u64cd\u4f5c\uff0c\u6ca1\u6ce8\u518c\u7684\u63d0\u9192\u5148\u53bb\u6ce8\u518c\u518d\u8fdb\u884c\u5b58\u53d6\u5220\u7684\u64cd\u4f5c\u3002config \u4e2d\u89c4\u8303\u6240\u6709\u672c\u5730\u5b58\u50a8\u4e2d\u7684\u503c\uff0c\u5206\u522b\u4ee3\u8868\u4ec0\u4e48\u3002\u8fd9\u4e2a\u601d\u8def\u6765\u6e90\u4e8e\uff1a",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6919376014867070989#heading-0",children:"\u9879\u76ee\u4f18\u5316\u2014\u2014localStorage|sessionStorage \u7edf\u4e00\u7ba1\u7406\u65b9\u6848 - \u6398\u91d1"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528-webstorage-\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u4f7f\u7528 webStorage \u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u73af\u5883\u68c0\u67e5 ",(0,i.jsx)(n.code,{children:"window && window.localStorage && window.sessionStorage"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\u3002\u5b58\u50a8\u4e00\u4e9b\u5f15\u7528\u7c7b\u578b\u7684\u6570\u636e\uff0c\u9700\u8981\u533a\u5206\u662f\u5426\u53ef\u4ee5\u88ab JSON.stringify\u3002\u6bd4\u5982 undefined\uff0cfunction\uff0csymbol \u7b49\u4e0d\u53ef\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b58\u5165\u6570\u636e\u65f6\u53ef\u4ee5\u6dfb\u52a0\u65f6\u95f4\u6233\uff0c\u65b9\u4fbf\u7ef4\u62a4\u548c\u8c03\u8bd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n* \u8bbe\u7f6e\u5f53\u524d\n* @param key \u8bbe\u7f6e\u5f53\u524d\u5b58\u50a8key\n* @param value \u8bbe\u7f6e\u5f53\u524d\u5b58\u50a8value\n*/\nsetItem(key: string, value) {\n  if (hasStringify(value)) {//\u80fd\u88ab\u5e8f\u5217\u5316\n    const saveData: StorageSaveFormat = {\n      timestamp: new Date().getTime(),\n      data: value\n    }\n    console.log(saveData, 'saveData')\n    this.readStorage.setItem(key, JSON.stringify(saveData))\n  } else {\n    throwErrorMessage('\u9700\u8981\u5b58\u50a8\u7684data\u4e0d\u652f\u6301JSON.stringify\u65b9\u6cd5\uff0c\u8bf7\u68c0\u67e5\u5f53\u524d\u6570\u636e')\n  }\n}\n\n// \u4f7f\u7528\ncustomStorage.setItem('setItem', [1])\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8fc7\u671f\u65f6\u95f4\u3002localStorage \u4e0d\u624b\u52a8\u6e05\u9664\u662f\u4e0d\u4f1a\u8fc7\u671f\u7684\uff0c\u4e0a\u9762\u8bbe\u7f6e\u5728\u5b58\u50a8\u65f6\u8bbe\u7f6e\u4e86\u65f6\u95f4\u6233\uff0c\u63a7\u5236\u4e00\u4e2a\u8fc7\u671f\u65f6\u95f4\uff0c\u5728\u8bfb\u53d6\u7684\u65f6\u5019\u6dfb\u52a0\u662f\u5426\u8fc7\u671f\u7684\u5224\u65ad\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n* \u83b7\u53d6\u6570\u636e\n* @param key \u83b7\u53d6\u5f53\u524d\u6570\u636ekey\n* @returns \u5b58\u50a8\u6570\u636e\n*/\ngetItem<T = any>(key: string): T | null {\n  const content: StorageSaveFormat | null = JSON.parse(this.readStorage.getItem(key))\n  if (content?.timestamp && new Date().getTime() - content.timestamp >= this.config.timeout) {\n    this.removeItem(key)\n    return null//(\u2299o\u2299)\uff0c\u5b58\u50a8\u8fc7\u671f\u4e86\n  }\n  return content?.data || null\n}\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u76d1\u542c webStorage \u7684\u53d8\u5316\u3002",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent",children:"https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c01\u88c5\u4e00\u4e2a\u4fee\u6539\u7684\u65b9\u6cd5.\u628a\u65e7\u7684\u503c\u53d8\u6210\u65b0\u7684\u503c\u3002\u4e0e setItem \u7684\u533a\u522b\u662f\u662f\u4e0d\u662f\u9700\u8981\u65e7\u7684\u503c\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n* \u4fee\u6539\u5f53\u524d\u5b58\u50a8\u5185\u5bb9\u6570\u636e\n* @param key \u5f53\u524d\u5b58\u50a8key\n* @param onChange \u4fee\u6539\u51fd\u6570\n* @param baseValue \u57fa\u7840\u6570\u636e\n*/\nchangeItem<S = any>(\n  key: string,\n  onChange: (oldValue: S) => S | null, baseValue?: any\n) {\n  const data = this.getItem<S>(key)\n  this.setItem(key, onChange(data || baseValue))\n}\n\n// # \u4f7f\u7528\ncustomStorage.changeItem('key', (oldValue) => {\n    return oldValue + 'newUpdate'\n})\n\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ea2\u51fa\u95ee\u9898\u3002\u4ee5\u4e0b api \u53ef\u4ee5\u83b7\u53d6\u5b58\u50a8\u603b\u91cf\uff0c\u4ee5\u53ca\u4f7f\u7528\u4e86\u591a\u5c11\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"navigator.storage.estimate().then((estimate) => {\n  console.log(estimate);\n});\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u9700\u8981\u5728 https \u4e14\u6d4f\u89c8\u5668\u652f\u6301\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u3002 ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6fd2\u4e34\u6ea2\u51fa\uff0c\u53ef\u4ee5\u5bf9\u5b58\u50a8\u65f6\u95f4\u6233\u8fdb\u884c\u6392\u5e8f\uff0c\u628a\u65e7\u7684\u6e05\u9664\u6389\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5c01\u88c5",children:"\u5c01\u88c5"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u539f\u751f\u7684 webStorage \u7684 api \u4e0d\u591f\u5b8c\u5584\uff0c\u6240\u4ee5\u7ecf\u5e38\u9700\u8981\u5c01\u88c5\u4e00\u5c42\u3002\u5c01\u88c5\u7684\u76ee\u7684\u662f\u53ef\u4ee5\u7edf\u4e00\u7ba1\u7406\u5b58\u50a8\uff0c\u4f7f\u7528\u65f6\u66f4\u65b9\u4fbf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u539f\u751fstorage\u7684\u9ebb\u70e6\u4e4b\u5904\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u624b\u52a8 JSON.stringify()\u3002\u8bfb\u53d6\u65f6\u4e5f\u9700\u8981\u518d\u8f6c\u6362\u6210\u9700\u8981\u7684\u7c7b\u578b\uff0c\u4e0d\u65b9\u4fbf\u3002[\u662f\u6700\u4e3b\u8981\u7684\u95ee\u9898-\u4e0d\u80fd\u4fdd\u7559\u539f\u6765\u7684\u6570\u636e\u7c7b\u578b\uff0cJSON.parse \u4e5f\u5f88\u5bb9\u6613\u62a5\u9519]"}),"\n",(0,i.jsx)(n.li,{children:"\u63d0\u4f9b\u7684\u65b9\u6cd5\u6bd4\u8f83\u5c11\u53ea\u6709set,get,clear\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u51b3\u7b2c\u4e00\u70b9\u9700\u8981\u505a\u5230\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5224\u65ad\u5b58\u5165\u6570\u636e\u7684\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5206\u522b\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u5c01\u88c5\u5355\u72ec\u7684\u5b58\u50a8\u548c\u8bfb\u53d6\u903b\u8f91\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7327157426297536527?searchId=20240223111207AD9C948E19FA1F947D41",children:"\u4e8c\u6b21\u5c01\u88c5Storage\u7684\u7b2c\u4e00\u8981\u7d20"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u641c\u7d22\u5386\u53f2\uff1a\u9891\u7e41\u4fee\u6539 storage \uff0c\u53ef\u4ee5\u4f7f\u7528 changeItem \u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5927\u91cf\u7684\u8d44\u6e90\u8def\u5f84\uff0c\u5982\u4e00\u5806 emoji \u53ef\u4ee5\u5148\u5b58\u5728 storage\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u5237\u65b0\u90fd\u53bb\u8bf7\u6c42\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u8de8\u6807\u7b7e\u901a\u4fe1","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e00\u4e2a\u7a97\u53e3\u767b\u51fa\uff0c\u6240\u6709\u7a97\u53e3\u767b\u51fa"}),"\n",(0,i.jsx)(n.li,{children:"\u7f16\u8f91\u6570\u636e\uff0c\u6240\u6709\u7a97\u53e3\u6570\u636e\u90fd\u66f4\u65b0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93",children:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982 ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/store2",children:"store2"})]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6955672622587707428/",children:"\u524d\u7aef\u6570\u636e\u7f13\u5b58\uff08\u524d\u7aef\u6570\u636e\u5e93\uff09\u7684\u4e00\u4e9b\u89c1\u89e3\uff0c\u5229\u7528\u5185\u5b58\u5b58\u50a8\u5e2e\u4f60\u4f18\u5316\u63a5\u53e3\u8bf7\u6c42 - \u6398\u91d1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6984908770149138446#heading-13",children:"\u3010\u6536\u85cf\u5c31\u4f1a\u3011\u6d4f\u89c8\u5668 WebStorage \u7f13\u5b58\u4f7f\u7528\u6307\u5357 - \u6398\u91d1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/7327157426297536527?searchId=20240223111207AD9C948E19FA1F947D41",children:"\u4e8c\u6b21\u5c01\u88c5Storage\u7684\u7b2c\u4e00\u8981\u7d20"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8672:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var i=s(959);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);