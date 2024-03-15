"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8205],{2088:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=l(1527),d=l(8672);const i={},t="Vue",c={id:"vue/index",title:"Vue",description:"\u7ec4\u4ef6\u5316\u6a21\u5f0f\u3002",source:"@site/docs/vue/index.md",sourceDirName:"vue",slug:"/vue/",permalink:"/docs/vue/",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/vue/index.md",tags:[],version:"current",lastUpdatedAt:1710497439,formattedLastUpdatedAt:"2024\u5e743\u670815\u65e5",frontMatter:{}},r={},h=[{value:"\u63d2\u503c",id:"\u63d2\u503c",level:2},{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"\u4fa6\u542c\u5668",id:"\u4fa6\u542c\u5668",level:2},{value:"v-model",id:"v-model",level:2},{value:"\u662f\u53cc\u5411\u7ed1\u5b9a",id:"\u662f\u53cc\u5411\u7ed1\u5b9a",level:3},{value:"\u662f\u5355\u5411\u6570\u636e\u6d41",id:"\u662f\u5355\u5411\u6570\u636e\u6d41",level:3},{value:"nextTick",id:"nexttick",level:2},{value:"deep \u6df1\u5ea6\u9009\u62e9\u5668",id:"deep-\u6df1\u5ea6\u9009\u62e9\u5668",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vue",children:"Vue"}),"\n",(0,s.jsx)(n.p,{children:"\u7ec4\u4ef6\u5316\u6a21\u5f0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u58f0\u660e\u5f0f\u7f16\u7801 \u4e0e \u547d\u4ee4\u5f0f\u7f16\u7801\u76f8\u5bf9\u5e94\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u503c",children:"\u63d2\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vue",children:"<aside>{{ notePreview }}</aside>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63d2\u503c\u5982\u679c\u662f html \u6807\u7b7e\u4f1a\u88ab\u8f6c\u4e49\u800c\u4e0d\u662f\u76f4\u63a5\u6ce8\u5165\uff0c\u53ef\u4ee5\u9632\u6b62\u6ce8\u5165\u653b\u51fb(XSS)\uff0c\u63d0\u5347\u5b89\u5168\u6027\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u7528 v-html \u505a html \u63d2\u503c\uff0c\u4f46\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u975e\u5e38\u5371\u9669\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8ba1\u7b97\u5c5e\u6027",children:"\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u662f\u51fd\u6570\u7684\u5f62\u5f0f\uff0c\u57fa\u4e8e\u4ed6\u7684\u54cd\u5e94\u5f0f\u4f9d\u8d56\u8fdb\u884c\u7f13\u5b58\uff0c\u6ca1\u6709\u5fc5\u8981\u4e0d\u4f1a\u91cd\u65b0\u8fd0\u884c\u3002\u5982\u679c\u4f9d\u8d56\u7684\u67d0\u4e2a\u5c5e\u6027\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u8ba1\u7b97\u5c5e\u6027\u7684\u503c\u4f1a\u6839\u636e\u9700\u8981\u81ea\u52a8\u66f4\u65b0\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u50cf\u666e\u901a\u5c5e\u6027\u4e00\u6837\u4f7f\u7528\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u8ba1\u7b97\u5c5e\u6027\u4e2d\u4f7f\u7528\u8ba1\u7b97\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"computed:{\n  fullname:function(){\n    return xx\n    }\n  }\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8ba1\u7b97\u5c5e\u6027\u9ed8\u8ba4\u53ea\u6709 getter\uff0c\u4e0d\u8fc7\u5728\u9700\u8981\u65f6\u4f60\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a setter\u3002 ",(0,s.jsx)(n.a,{href:"https://v2.cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter",children:"\u8ba1\u7b97\u5c5e\u6027\u548c\u4fa6\u542c\u5668 \u2014 Vue.js"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4fa6\u542c\u5668",children:"\u4fa6\u542c\u5668"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://v2.cn.vuejs.org/v2/api/#watch",children:"API \u2014 Vue.js"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u6570\u636e\u53d8\u5316\u7684\u65f6\u5019\u9700\u8981\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u3002\u64cd\u4f5c\u662f\u5f02\u6b65\u6216\u5f00\u9500\u8f83\u5927\u65f6\uff0c\u9002\u5408\u4f7f\u7528\u4fa6\u542c\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  watch: {\n    content(val, oldVal) {\n        console.log("new", val, "old", oldVal);\n      },\n\n  },\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  watch: {\n    notes: {\n      handler: "saveNotes",\n      deep: true,//\u9ed8\u8ba4\u53ea\u4f1a\u76d1\u542c\u4e00\u5c42\uff0c\u4fee\u6539\u6570\u7ec4\u6216\u5bf9\u8c61\u5185\u5143\u7d20\u7684\u5c5e\u6027\u7b49\u4e0d\u4f1a\u89e6\u53d1\u76d1\u542c\uff0c\u9700\u8981\u52a0\u4e0a deep \u8fdb\u884c\u6df1\u5ea6\u76d1\u542c\n    },\n  },\n'})}),"\n",(0,s.jsx)(n.h2,{id:"v-model",children:"v-model"}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u8bed\u6cd5\u7cd6\uff0c\u662f\u4e00\u79cd\u4fbf\u6377\u5199\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u662f\u53cc\u5411\u7ed1\u5b9a",children:"\u662f\u53cc\u5411\u7ed1\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8868\u5355 input,select \u7b49\u5143\u7d20\u4e0a\u521b\u5efa\u53cc\u5411\u7ed1\u5b9a\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u662f\u5355\u5411\u6570\u636e\u6d41",children:"\u662f\u5355\u5411\u6570\u636e\u6d41"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6570\u636e\u5411\u4e0b\uff0c\u4e8b\u4ef6\u5411\u4e0a\u3002\u5b50\u7ec4\u4ef6\u4e0d\u80fd\u6539\u53d8\u7236\u7ec4\u4ef6\u4f20\u9012\u7ed9\u4ed6\u7684 props \u5c5e\u6027\uff0c\u63a8\u8350\u629b\u51fa\u4e8b\u4ef6\uff0c\u901a\u77e5\u7236\u7ec4\u4ef6\u81ea\u884c\u6539\u53d8\u7ed1\u5b9a\u7684\u503c\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nexttick",children:"nextTick"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://cn.vuejs.org/v2/api/#vm-nextTick",children:"API \u2014 Vue.js"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 DOM \u5b9e\u9645\u66f4\u65b0\u4e86\u4e4b\u540e\u6267\u884c\u4e00\u4e9b\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u83b7\u53d6\u66f4\u65b0\u540e\u7684 DOM"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 DOM \u66f4\u65b0\u540e\uff0c\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u65b9\u6cd5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deep-\u6df1\u5ea6\u9009\u62e9\u5668",children:"deep \u6df1\u5ea6\u9009\u62e9\u5668"}),"\n",(0,s.jsx)(n.p,{children:"vue 2.x \u4e2d\u7ec4\u4ef6\u4e2d style \u901a\u5e38\u4f7f\u7528 scope \u5c5e\u6027\uff0c\u9650\u5236\u5f53\u524d\u7684\u7ec4\u4ef6\u7684\u4f5c\u7528\u57df\u4e3a\u5f53\u524d\u7ec4\u4ef6\u3002\u7ec4\u4ef6\u5185\u5982\u679c\u5f15\u7528\u4e86\u5176\u4ed6\u7ec4\u4ef6\uff0c\u6216\u8005 element-ui \u7b49\u7ec4\u4ef6\u5e93\uff0c\u662f\u4e0d\u80fd\u76f4\u63a5\u6539\u53d8\u5176\u4ed6\u7ec4\u4ef6\u7684\u6837\u5f0f\u7684\u3002\u5982\u679c\u9700\u8981\u505a\u4e00\u4e9b\u5b9a\u5236\u5316\u7684\u6837\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528 deep \u6df1\u5ea6\u9009\u62e9\u5668\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"deep \u4e0d\u80fd\u5d4c\u5957\u4f7f\u7528\u3002deep \u91cc\u4e0d\u80fd\u518d\u6709 deep\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["less \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"/deep/"}),",sass \u4e2d\u4f7f\u7528",(0,s.jsx)(n.code,{children:":deep()"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vue",children:'<style lang="less" scoped>\n/deep/.ant-card-head-title {\n  background: yellowgreen;\n}\n</style>\n<style lang="scss" scoped>\n:deep(.ant-card-head-title) {\n  background: yellowgreen;\n}\n</style>\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6978781674070884366",children:"vue \u4e2d\u7684 css \u6df1\u5ea6\u9009\u62e9\u5668\u5230\u5e95\u662f\u4ec0\u4e48\uff1f - \u6398\u91d1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7085915259541667847",children:"\u67d0\u5929\uff0c\u6211\u7684 sass-loader \u7a81\u7136\u4e0d\u8ba4 /deep/ \u8bed\u6cd5\u4e86 - \u6398\u91d1"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8672:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>t});var s=l(959);const d={},i=s.createContext(d);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);