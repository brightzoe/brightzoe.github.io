"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[160],{4137:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var l=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,p=function(e,n){if(null==e)return{};var t,l,p={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=l.createContext({}),m=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return l.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=m(t),k=p,c=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return t?l.createElement(c,o(o({ref:n},s),{},{components:t})):l.createElement(c,o({ref:n},s))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=t.length,o=new Array(a);o[0]=d;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:p,o[1]=r;for(var m=2;m<a;m++)o[m]=t[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return u}});var l=t(7462),p=t(3366),a=(t(7294),t(4137)),o=["components"],r={},i="\u5305\u7ba1\u7406\u5668",m={unversionedId:"business/fe-engineering/package-manager",id:"business/fe-engineering/package-manager",title:"\u5305\u7ba1\u7406\u5668",description:"npm\uff0cyarn\uff0cpnpm",source:"@site/docs/business/fe-engineering/package-manager.md",sourceDirName:"business/fe-engineering",slug:"/business/fe-engineering/package-manager",permalink:"/docs/business/fe-engineering/package-manager",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/business/fe-engineering/package-manager.md",tags:[],version:"current",lastUpdatedAt:1657123149,formattedLastUpdatedAt:"7/6/2022",frontMatter:{},sidebar:"Business",previous:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/business/fe-engineering/"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/business/fe-engineering/performance-optimization"}},s={},u=[{value:"npm",id:"npm",level:2},{value:"npm scripts \u5de5\u4f5c\u539f\u7406",id:"npm-scripts-\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u6307\u4ee4\u94a9\u5b50",id:"\u6307\u4ee4\u94a9\u5b50",level:4},{value:"npx",id:"npx",level:3},{value:"node_modules \u7ed3\u6784",id:"node_modules-\u7ed3\u6784",level:3},{value:"yarn",id:"yarn",level:2},{value:"npm \u548c yarn \u5b58\u5728\u7684\u95ee\u9898",id:"npm-\u548c-yarn-\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"phantom dependencies",id:"phantom-dependencies",level:3},{value:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5",id:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5",level:3},{value:"pnpm",id:"pnpm",level:2},{value:"lockfiles",id:"lockfiles",level:2},{value:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\uff0c\u76f4\u63a5\u5220\u9664 lockfiles",id:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\u76f4\u63a5\u5220\u9664-lockfiles",level:3},{value:"\u4f55\u65f6\u63d0\u4ea4 lock \u6587\u4ef6",id:"\u4f55\u65f6\u63d0\u4ea4-lock-\u6587\u4ef6",level:3},{value:"some questions",id:"some-questions",level:2},{value:"\u955c\u50cf\u5207\u6362",id:"\u955c\u50cf\u5207\u6362",level:3},{value:"\u5207\u6362 node \u7248\u672c",id:"\u5207\u6362-node-\u7248\u672c",level:3},{value:"node \u7684\u8def\u5f84\u5206\u6790\u89c4\u5219",id:"node-\u7684\u8def\u5f84\u5206\u6790\u89c4\u5219",level:3},{value:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406",id:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406",level:3},{value:"dependencies",id:"dependencies",level:3},{value:"Reference",id:"reference",level:2}],d={toc:u};function k(e){var n=e.components,t=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5305\u7ba1\u7406\u5668"},"\u5305\u7ba1\u7406\u5668"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")),(0,a.kt)("h2",{id:"npm"},"npm"),(0,a.kt)("p",null,"npm \u4f7f\u7528\u6700\u591a\u7684\u529f\u80fd\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5728\u7ebf\u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002npm \u672c\u8eab\u4e0d\u80fd\u6267\u884c\u4efb\u4f55\u5305\uff0c\u5bf9\u4e8e\u672c\u5730\u9879\u76ee\u7684\u5305\uff0c\u9700\u8981\u5199\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 npm \u89e3\u6790 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\uff0c\u89e3\u6790\u5230\u5305\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".bin")," \u76ee\u5f55\u4e0b\uff0c\u5728 bash \u4e2d\u6267\u884c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},".bin"),"\u6587\u4ef6\u5939\u5b58\u50a8\u4e86\u5f53\u524d\u9879\u76ee\u91cc\u4f7f\u7528\u7684\u6240\u6709\u6a21\u5757\u7684\u8f6f\u8fde\u63a5\uff0c\u8fde\u63a5\u5230\u5bf9\u5e94\u6a21\u5757\u7684\u5b89\u88c5\u76ee\u5f55\u3002")),(0,a.kt)("h3",{id:"npm-scripts-\u5de5\u4f5c\u539f\u7406"},"npm scripts \u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u811a\u672c\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u5c40\u90e8\u5b89\u88c5\u7684\u5305\uff0c\u76f4\u63a5\u5728 terminal \u4e2d\u4f7f\u7528\u4f1a\u65e0\u6cd5\u627e\u5230\u3002"),(0,a.kt)("p",null,"npm run \u547d\u4ee4\uff0c\u4f1a\u65b0\u5efa\u4e00\u4e2a shell \uff0c\u5c06\u5f53\u524d\u9879\u76ee\u4e2d node_modules/.bin \u7684\u7edd\u5bf9\u8def\u5f84\u52a0\u5165\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u6267\u884c\u5b8c\u8bed\u53e5\u518d\u5220\u6389\u65b0\u52a0\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("h4",{id:"\u6307\u4ee4\u94a9\u5b50"},"\u6307\u4ee4\u94a9\u5b50"),(0,a.kt)("p",null,"\u5728\u6267\u884c npm scripts \u547d\u4ee4\uff08\u65e0\u8bba\u662f\u81ea\u5b9a\u4e49\u8fd8\u662f\u5185\u7f6e\uff09\u65f6\uff0c\u90fd\u7ecf\u5386\u4e86 pre \u548c post \u4e24\u4e2a\u94a9\u5b50\uff0c\u5728\u8fd9\u4e24\u4e2a\u94a9\u5b50\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u67d0\u4e2a\u547d\u4ee4\u6267\u884c\u524d\u540e\u7684\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u5728\u6267\u884c npm run serve \u547d\u4ee4\u65f6\uff0c\u4f1a\u4f9d\u6b21\u6267\u884c npm run preserve\u3001npm run serve\u3001npm run postserve\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u4f1a\u8df3\u8fc7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "preserve": "xxxxx",\n  "serve": "vue-cli-service serve",\n  "postserve": "xxxxxx"\n}\n\n')),(0,a.kt)("h3",{id:"npx"},"npx"),(0,a.kt)("p",null,"npm \u5185\u7f6e\u4e86 npx \u7684\u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"npx \u7b97\u662f\u4e00\u4e2a\u7b80\u5355\u7684 cli \u5de5\u5177\uff0c\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u6267\u884c\u4e00\u4e9b npm \u7684\u5305\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u6c61\u67d3\u3002"),(0,a.kt)("p",null,"npx \u539f\u7406\uff1a\u8fd0\u884c\u65f6\u68c0\u67e5",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\u8def\u5f84\u4ee5\u53ca\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"npx \u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u5b89\u88c5\u5305\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u6267\u884c\u4e00\u4e9b\u5305\uff0c\u51cf\u5c11\u5bf9\u78c1\u76d8\u7684\u4f7f\u7528\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5230\u4e34\u65f6\u76ee\u5f55\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4f1a\u81ea\u52a8\u6e05\u9664\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u65b9\u4fbf\u5207\u6362 node \u7248\u672c\uff0c\u4e34\u65f6\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76f4\u63a5\u6267\u884c Github \u7684\u6a21\u5757\u6e90\u7801\u3002\uff08\u5fc5\u987b\u662f\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u548c\u5165\u53e3\u7684\u6a21\u5757\u4ee3\u7801\uff09"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n")))),(0,a.kt)("h3",{id:"node_modules-\u7ed3\u6784"},"node_modules \u7ed3\u6784"),(0,a.kt)("p",null,"npm@3 \u4e4b\u524d\uff0cnode_modules \u7ed3\u6784\u662f\u5e72\u51c0\u3001\u53ef\u9884\u6d4b\u7684\u3002node_modules \u4e0b\u7684\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u6709\u81ea\u5df1\u7684 node_modules \u6587\u4ef6\u5939\uff0c\u4e14\u5728 package.json \u4e2d\u6307\u5b9a\u4e86\u6240\u6709\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules\n\u2514\u2500 foo\n   \u251c\u2500 index.js\n   \u251c\u2500 package.json\n   \u2514\u2500 node_modules\n      \u2514\u2500 bar\n         \u251c\u2500 index.js\n         \u2514\u2500 package.json\n")),(0,a.kt)("p",null,"\u4ea7\u751f\u7684\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5d4c\u5957\u5b89\u88c5\uff0cnode_modules \u4f9d\u8d56\u5c42\u7ea7\u8fc7\u6df1\uff0c\u53ef\u80fd\u8d85\u51fa\u64cd\u4f5c\u7cfb\u7edf\u6700\u957f\u8def\u5f84\u9650\u5236\u3002\u4f9d\u8d56\u5c42\u7ea7\u8fc7\u6df1\u4e5f\u5bfc\u81f4\u6587\u4ef6\u67e5\u627e\u590d\u6742\u5ea6\u4e0a\u5347\uff0c\u5f71\u54cd\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u591a\u4e2a\u4e0d\u540c\u7684\u4f9d\u8d56\u4f9d\u8d56\u540c\u4e00\u4e2a\u4f9d\u8d56\u65f6\uff0c\u76f8\u540c\u7684\u4f9d\u8d56\u4f1a\u88ab\u591a\u6b21\u5b89\u88c5\uff0c\u5360\u7528\u5927\u91cf\u7684\u7a7a\u95f4\u8d44\u6e90\u3002")),(0,a.kt)("p",null,"npm@3+ \u548c yarn \u4e4b\u540e\uff0cnode_modules \u7ed3\u6784\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u53d8\u6210\u4e86\u6241\u5e73\u5316\u7ed3\u6784\uff0c\u4f46\u4ea7\u751f\u4e86",(0,a.kt)("a",{href:"#phantom-dependencies"},"\u5e7d\u7075\u4f9d\u8d56"),"\u7684\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules\n\u251c\u2500 foo\n|  \u251c\u2500 index.js\n|  \u2514\u2500 package.json\n\u2514\u2500 bar\n   \u251c\u2500 index.js\n   \u2514\u2500 package.json\n\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5305\u7684\u591a\u4e2a\u7248\u672c\u5728\u9879\u76ee\u4e2d\u88ab\u4f9d\u8d56\uff0cnode_modules \u4f1a\u63d0\u5347\u8be5\u5305\u7b2c\u4e00\u4e2a\u5b89\u88c5\u7684\u7248\u672c\u5230\u9876\u5c42\uff0c\u800c\u5176\u4ed6\u7684\u7248\u672c\u8fd8\u662f\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\u4f1a\u88ab\u653e\u5728\u5404\u81ea\u7684\u4f9d\u8d56\u91cc\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s2.loli.net/2022/04/16/ZgfXIxde7v6qJTj.png",alt:null})),(0,a.kt)("p",null,"\u8fd9\u79cd\u63d0\u5347\u7b2c\u4e00\u4e2a\u5b89\u88c5\u7684\u5305\u5230\u9876\u5c42\u7684\u65b9\u5f0f\u4f1a\u5bfc\u81f4\u4f9d\u8d56\u7ed3\u6784\u4e0d\u786e\u5b9a\u7684\u95ee\u9898\uff0c\u4e5f\u662f\u540e\u9762 lock \u6587\u4ef6\u8bde\u751f\u7684\u539f\u56e0\u3002"),(0,a.kt)("p",null,"npm@5+\u4e4b\u540e\uff0c\u6dfb\u52a0 lock \u6587\u4ef6\u8bb0\u5f55\u4f9d\u8d56\u6811\u4fe1\u606f\uff0c\u8fdb\u884c\u4f9d\u8d56\u9501\u5b9a\uff0c\u4fdd\u8bc1\u4f9d\u8d56\u5b89\u88c5\u786e\u5b9a\u6027\u3002"),(0,a.kt)("h2",{id:"yarn"},"yarn"),(0,a.kt)("p",null,"yarn \u4e5f\u662f\u5305\u7ba1\u7406\u5668\uff0c\u4e0e npm \u6ca1\u6709\u672c\u8d28\u7684\u533a\u522b\uff0c\u90fd\u662f\u7ba1\u7406\u548c\u5b89\u88c5\u5305\u7684\uff0c\u89e3\u51b3\u4e86\u65e9\u671f npm \u7684\u4e00\u4e9b\u95ee\u9898\u5e76\u63d0\u5347\u4e86\u7ba1\u7406\u5305\u7684\u6548\u7387\u3002\u4f46\u5728\u6700\u65b0\u7248\u7684 npm \u548c yarn \u5b89\u88c5\u901f\u5ea6\u548c\u4f7f\u7528\u4f53\u9a8c\u5e76\u6ca1\u6709\u592a\u5927\u7684\u5dee\u8ddd\u3002"),(0,a.kt)("p",null,"\u65e9\u671f\u7684 yarn \u76f8\u5bf9\u4e8e npm \u6bd4\u8f83\u5927\u7684\u4f18\u52bf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u91c7\u7528\u7f13\u5b58\u673a\u5236\uff0c\u652f\u6301\u79bb\u7ebf\u5b89\u88c5\uff08npm@5 \u5df2\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u4f9d\u8d56\u6241\u5e73\u5316\u7ed3\u6784\uff08npm@3 \u5df2\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u4f9d\u8d56\u5b89\u88c5\u786e\u5b9a\u6027 yarn.lock\uff08npm@5 \u589e\u52a0\u4e86 package-lock.json\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u901f\u5ea6\u5feb\uff0c\u5e76\u884c\u4e0b\u8f7d"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5931\u8d25\u81ea\u52a8\u91cd\u8bd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add [pkg]\n\nyarn remove [pkg]\n")),(0,a.kt)("h2",{id:"npm-\u548c-yarn-\u5b58\u5728\u7684\u95ee\u9898"},"npm \u548c yarn \u5b58\u5728\u7684\u95ee\u9898"),(0,a.kt)("h3",{id:"phantom-dependencies"},"phantom dependencies"),(0,a.kt)("p",null,"phantom dependencies (\u5e7d\u7075\u4f9d\u8d56)\uff1a \u67d0\u4e2a\u5305\u6ca1\u6709\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u88ab\u4f9d\u8d56\uff0c\u4f46\u7528\u6237\u8fd8\u662f\u53ef\u4ee5\u5f15\u7528\u5230\u8fd9\u4e2a\u5305\u3002"),(0,a.kt)("p",null,"\u539f\u56e0\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u7684\u6241\u5e73\u7ed3\u6784\u3002\u5982\u679c\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\uff0c\u95f4\u63a5\u4f9d\u8d56\uff08\u7b2c\u4e09\u65b9\u5305\u7684\u4f9d\u8d56\uff09\u4f1a\u88ab\u63d0\u5347\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u9876\u5c42\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#loading-from-the-global-folders"},"nodejs \u7684\u5bfb\u5740\u65b9\u5f0f"))),(0,a.kt)("h3",{id:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5"},"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5"),(0,a.kt)("p",null,"\u65e0\u8bba\u5728 node_modules \u7684\u5d4c\u5957\u7ed3\u6784\uff0c\u6216\u662f\u6539\u8fdb\u540e\u7684\u6241\u5e73\u5316\u7ed3\u6784\uff0c\u5927\u91cf\u7684\u5305\u90fd\u4f1a\u88ab\u91cd\u590d\u5b89\u88c5\u591a\u6b21\uff0c\u5360\u7528\u5927\u91cf\u7684\u7a7a\u95f4\u3002"),(0,a.kt)("h2",{id:"pnpm"},"pnpm"),(0,a.kt)("p",null,"\u4e00\u4e2a\u66f4\u65b0\u7684\u5305\u7ba1\u7406\u5668\uff0c\u4f7f\u7528\u8f6f\u94fe\u4e0e\u5e73\u94fa\u76ee\u5f55\u6784\u5efa\u7684\u5d4c\u5957\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"\u4e0d\u4f1a\u91cd\u590d\u5b89\u88c5\u4f9d\u8d56\uff1a\u57fa\u4e8e\u5185\u5bb9\u5bfb\u5740\u7684\u5b58\u50a8\uff0c\u6240\u6709\u4f9d\u8d56\u90fd\u4f1a\u5b89\u88c5\u5728\u78c1\u76d8\u4e00\u4e2a\u5355\u72ec\u7684\u76ee\u5f55\u4e0b\uff0c\u5f53\u4f9d\u8d56\u88ab\u5b89\u88c5\u65f6\uff0c\u5176\u4e2d\u7684\u6587\u4ef6\u4f1a\u786c\u94fe\u63a5\u5230\u8fd9\u4e00\u4f4d\u7f6e\uff0c\u4e0d\u4f1a\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"pnpm \u7684 node_modules \u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo  //\u8f6f\u94fe\u63a5\uff0c\u7c7b\u4f3c\u4e8e\u5feb\u6377\u65b9\u5f0f\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar //\u786c\u94fe\u63a5\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".pnpm")," \u6587\u4ef6\u5939\u4e2d\u4fdd\u5b58\u7740\u6bcf\u4e2a\u5305\u7684\u865a\u62df\u5b58\u50a8\u76ee\u5f55\uff1a\u57fa\u4e8e\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8\u7684\u786c\u94fe\u63a5\u3002"),(0,a.kt)("p",null,"\u5305\u7684\u4f9d\u8d56\u9879\u4e0e\u4f9d\u8d56\u5305\u7684\u5b9e\u9645\u4f4d\u7f6e\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u7ea7\u522b\uff1a\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/foo@1.0.0/node_modules")," \u3002\u6240\u6709\u4f9d\u8d56\u90fd\u8f6f\u94fe\u63a5\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/")," \u4e0b\u5bf9\u5e94\u7684\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u4f18\u52bf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5305\u5b89\u88c5\u901f\u5ea6\u5feb\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u78c1\u76d8\u7a7a\u95f4\u5229\u7528\u975e\u5e38\u9ad8\u6548\u3002\n\u4e0d\u4f1a\u91cd\u590d\u5b89\u88c5\u540c\u4e00\u4e2a\u5305\uff0c\u5373\u4f7f\u6709\u4e00\u4e2a\u5305\u7684\u4e0d\u540c\u7248\u672c\uff0cpnpm \u4e5f\u4f1a\u6781\u5927\u7a0b\u5ea6\u5730\u590d\u7528\u4e4b\u524d\u7248\u672c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301 monorepo\u3002",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"pnpm workspace\uff0cyarn workspace\uff0clerna \u7b49\u591a\u79cd monorepo \u7b56\u7565\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u627f\u4e86 npm \u4e0e yarn \u7684\u5176\u4ed6\u4f18\u52bf\uff0c\u6bd4\u5982\u5b89\u88c5\u786e\u5b9a\u6027\u4e0e\u79bb\u7ebf\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u5168\u6027\u9ad8\uff0c\u53ef\u4ee5\u89c4\u907f\u975e\u6cd5\u8bbf\u95ee\u4f9d\u8d56\u7684\u98ce\u9669\uff0c\u6bd4\u5982\u5e7d\u7075\u4f9d\u8d56\u3002")),(0,a.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm? by @ZoltanKochan")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"\u5e73\u94fa\u7684\u7ed3\u6784\u4e0d\u662f node_modules \u7684\u552f\u4e00\u5b9e\u73b0\u65b9\u5f0f | pnpm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pnpm.io/zh/symlinked-node-modules-structure"},"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784 | pnpm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000039157365"},"All in one\uff1a\u9879\u76ee\u7ea7 monorepo \u7b56\u7565\u6700\u4f73\u5b9e\u8df5 - SegmentFault \u601d\u5426"))),(0,a.kt)("h2",{id:"lockfiles"},"lockfiles"),(0,a.kt)("h3",{id:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\u76f4\u63a5\u5220\u9664-lockfiles"},"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\uff0c\u76f4\u63a5\u5220\u9664 lockfiles"),(0,a.kt)("p",null,"\u4e0d\u63a8\u8350\uff01 \u4e0d\u8981\u8f7b\u6613\u5220\u9664 lockfiles \uff0c\u5982\u679c\u539f\u6765\u7684\u4f9d\u8d56\u6709\u4e86\u66f4\u65b0\u7684\u7248\u672c\uff0c\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u542f\u52a8\u3002\u5220\u9664 node_modules \u7136\u540e\u91cd\u65b0 install \u5373\u53ef\uff0c\u6709\u95ee\u9898\u53ef\u4ee5\u66f4\u65b0\u62a5\u9519\u7684\u5177\u4f53 package\u3002\u6709\u4e9b\u5305\u9700\u8981\u7279\u5b9a\u7684 node \u7248\u672c\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5207\u6362 node \u7248\u672c\u3002"),(0,a.kt)("p",null,"lockfiles \u4f5c\u7528\uff1a\u786e\u5b9a\u4f9d\u8d56\u7684\u5b89\u88c5\u7ed3\u6784\uff0c\u5728\u4efb\u610f\u7684\u673a\u5668\u4e0a\u90fd\u80fd\u5f97\u5230\u5b8c\u5168\u76f8\u540c\u7684 node_modules \u7ed3\u6784\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u8981\u76f4\u63a5\u64cd\u4f5c lock \u6587\u4ef6\u3002")),(0,a.kt)("h3",{id:"\u4f55\u65f6\u63d0\u4ea4-lock-\u6587\u4ef6"},"\u4f55\u65f6\u63d0\u4ea4 lock \u6587\u4ef6"),(0,a.kt)("p",null,"\u5f00\u53d1\u4e00\u4e2a\u5e94\u7528\u65f6\uff0c\u5efa\u8bae\u63d0\u4ea4 lock \u6587\u4ef6\uff0c\u4fdd\u8bc1\u6240\u6709\u56e2\u961f\u5f00\u53d1\u8005\u4ee5\u53ca CI \u73af\u8282\u5b89\u88c5\u7684\u4f9d\u8d56\u7248\u672c\u90fd\u4e00\u81f4\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u4e00\u4e2a npm \u5305\u65f6\uff0c\u5305\u662f\u9700\u8981\u88ab\u5176\u4ed6\u4ed3\u5e93\u4f9d\u8d56\u7684\uff0c\u5982\u679c\u53d1\u5e03\u4e86 lock \u6587\u4ef6\uff0c\u4f9d\u8d56\u5305\u5c31\u4e0d\u80fd\u548c\u5176\u4ed6\u4f9d\u8d56\u5171\u4eab\u540c\u610f\u8303\u56f4\u7684\u4f9d\u8d56\u3002\u662f\u4e0d\u5e94\u8be5\u53d1\u5e03 lock \u6587\u4ef6\u7684\u3002"),(0,a.kt)("h2",{id:"some-questions"},"some questions"),(0,a.kt)("h3",{id:"\u955c\u50cf\u5207\u6362"},"\u955c\u50cf\u5207\u6362"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm config set registry https://registry.npmmirror.com")," //\u6dd8\u5b9d\u6e90"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"npm config set registry https://registry.npmjs.org/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn config set registry https://registry.npmmirror.com")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"yarn config set registry http://registry.npmjs.org/"))),(0,a.kt)("h3",{id:"\u5207\u6362-node-\u7248\u672c"},"\u5207\u6362 node \u7248\u672c"),(0,a.kt)("p",null,"\u5728\u591a\u4e2a\u9879\u76ee\u4e4b\u95f4\u5207\u6362\uff0c\u4f1a\u9047\u5230\u4e0d\u540c\u7684\u9879\u76ee\u6240\u9700\u8981\u7684 node \u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u6709\u5207\u6362 node \u7248\u672c\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"linux/Mac OS \u53ef\u4ee5\u4f7f\u7528 n /nvm ,\u4ec5\u9650\u4e86\u89e3\u3002"),(0,a.kt)("p",null,"\u4e2a\u4eba\u76ee\u524d\u8fd8\u662f\u4f7f\u7528 windows \u6bd4\u8f83\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528 nvm ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows"},"coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go."),"\u8fdb\u884c\u7ba1\u7406\u3002\u4f46\u662f\u4f7f\u7528 nvm \u4e4b\u524d\u9700\u8981\u5378\u8f7d\u7535\u8111\u4e0a\u5df2\u6709\u7684\u6240\u6709\u7248\u672c\u7684 node\uff0c\u6709\u70b9\u9ebb\u70e6\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 npx \u8fdb\u884c node \u7248\u672c\u5207\u6362\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u4e00\u4e2a\u9879\u76ee\uff0c\u4e34\u65f6\u4f7f\u7528\u53e6\u4e00\u4e2a\u7248\u672c\u7684 node \uff0c\u5e76\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx -p node@16 yarn start")," // \u4e34\u65f6\u4f7f\u7528 node v16+ \u7684\u7248\u672c\uff0c\u5e76\u542f\u52a8\u9879\u76ee"),(0,a.kt)("h3",{id:"node-\u7684\u8def\u5f84\u5206\u6790\u89c4\u5219"},"node \u7684\u8def\u5f84\u5206\u6790\u89c4\u5219"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"require(X)"),"\u662f\u5982\u4f55\u627e\u5230\u9700\u8981\u7684\u6587\u4ef6\u7684\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c X \u662f\u5185\u7f6e\u6a21\u5757\uff0c\u76f4\u63a5\u8fd4\u56de\u5185\u7f6e\u6a21\u5757")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c X \u662f\u8def\u5f84\uff0c\u76f4\u63a5\u52a0\u8f7d\u5bf9\u5e94\u8def\u5f84\u7684\u6587\u4ef6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728\u5f53\u524d\u6587\u4ef6\u5939\u7684 node_modules \u6587\u4ef6\u5939\u91cc\u9762\u627e\u5230\u540d\u4e3a X \u7684\u6587\u4ef6\n\u5982\u679c\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u6709 package.json, \u5219\u52a0\u8f7d main \u5b57\u6bb5\u6307\u5411\u7684\u6587\u4ef6\n\u5982\u679c\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u6ca1\u6709 package.json\uff0c\u5219\u52a0\u8f7d\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u7684 index.js \u6587\u4ef6\n\u5728\u5f53\u524d\u6587\u4ef6\u5939\u7684 node_modules \u6587\u4ef6\u5939\u91cc\u9762\u627e\u4e0d\u5230\u540d\u4e3a X \u7684\u6587\u4ef6\n\u5219\u5f80\u5176\u7236\u6587\u4ef6\u5939\u627e node_modules, \u987a\u7740\u5f80\u4e0a\u627e\uff0c\u50cf\u539f\u578b\u94fe\u7684\u67e5\u627e")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#all-together"},"Modules: CommonJS modules | Node.js v18.0.0 Documentation"))),(0,a.kt)("h3",{id:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406"},"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406"),(0,a.kt)("p",null,"\u5f3a\u5236\u7ea6\u675f\u9879\u76ee\u4f7f\u7528\u540c\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'{\n  "scripts": {\n    "preinstall": "npx only-allow pnpm" // \u53ea\u5141\u8bb8\u4f7f\u7528 pnpm \u5b89\u88c5\u5305\n  }\n}\n')),(0,a.kt)("h3",{id:"dependencies"},"dependencies"),(0,a.kt)("p",null,"dependencies\uff1a\u6700\u5e38\u7528\uff0c\u4f9d\u8d56\u4f1a\u88ab\u6700\u7ec8\u6784\u5efa\u5230\u90e8\u7f72\u73af\u5883\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"npm install --production"),"\uff1a \u53ea\u5b89\u88c5 dependencies\uff0c\u751f\u4ea7\u73af\u5883\uff08dependencies\uff09\u4e0d\u9700\u8981\u5f00\u53d1\u73af\u5883\uff08devDependencies\uff09\u7684\u4f9d\u8d56\u3002 \u82e5\u662f\u628a\u67d0\u4e2a\u751f\u4ea7\u73af\u5883\u7684\u4f9d\u8d56\u5199\u5230 devDependencies\uff0c\u53d1\u5e03\u4e4b\u540e\u5219\u5f15\u7528\u4e0d\u5230\u8fd9\u4e2a\u4f9d\u8d56\u3002")),(0,a.kt)("p",null,"devDependencies\uff1a\u5f00\u53d1\u8fc7\u7a0b\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982 eslint \uff0cprettier\uff0cwebpack\uff0cbabel \u7b49\uff0c\u7ebf\u4e0a\u538b\u7f29\u7684\u4ee3\u7801\u4e0d\u9700\u8981\u3002"),(0,a.kt)("p",null,"peerDependencies\uff1a\u6bd4\u5982\u4e00\u4e9b\u63d2\u4ef6\u7684\u4f9d\u8d56\uff0c\u9700\u8981\u6307\u5b9a\u5b83\u4f9d\u8d56\u7684\u5bbf\u4e3b\u7684\u7248\u672c\u53f7\u3002\u8be5\u63d2\u4ef6\u4e0d\u80fd\u5355\u72ec\u88ab\u4f9d\u8d56\u4f7f\u7528\uff0c\u4f7f\u7528\u7684\u524d\u63d0\u65f6\u5fc5\u987b\u5df2\u7ecf\u6709\u6838\u5fc3\u4f9d\u8d56\u5e93\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u7528\u5230 react \uff0c\u7ec4\u4ef6\u53d1\u5e03\u6253\u5305\u65f6\uff0c\u4e0d\u9700\u8981\u628a react \u6253\u5305\u8fdb\u53bb\uff0c\u5bbf\u4e3b\u9879\u76ee\u5f00\u53d1\u65f6\u9700\u8981\u5f15\u5165 react\uff0c\u901a\u8fc7 peerDependencies \u6821\u9a8c react \u5305\u7248\u672c\u662f\u5426\u7b26\u5408\u8981\u6c42\u3002")),(0,a.kt)("p",null,"bundledDependencies\uff1a\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"npm pack"),"\u6253\u5305\u547d\u4ee4\u6709\u5173,\u5728 bundledDependencies \u4e2d\u6307\u5b9a\u7684\u4f9d\u8d56\u5305, \u5fc5\u987b\u5148\u5728 dependencies \u548c devDependencies \u58f0\u660e\u8fc7\u3002"),(0,a.kt)("p",null,"optionalDependencies\uff1a\u53ef\u9009\u4f9d\u8d56\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u589e\u52a0\u9879\u76ee\u4e0d\u786e\u5b9a\u6027\u548c\u590d\u6742\u6027\u3002"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903870578032647#heading-0"},"\u524d\u7aef\u5de5\u7a0b\u5316\uff085\uff09\uff1a\u4f60\u6240\u9700\u8981\u7684npm\u77e5\u8bc6\u50a8\u5907\u90fd\u5728\u8fd9\u4e86 - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.ruanyifeng.com/blog/2019/02/npx.html"},"npx \u4f7f\u7528\u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6886818067913900046#heading-3"},"\u7b80\u5355\u804a\u804a npx \u548c npm - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6932046455733485575#comment"},"\u5173\u4e8e\u73b0\u4ee3\u5305\u7ba1\u7406\u5668\u7684\u6df1\u5ea6\u601d\u8003\u2014\u2014\u4e3a\u4ec0\u4e48\u73b0\u5728\u6211\u66f4\u63a8\u8350 pnpm \u800c\u4e0d\u662f npm/yarn? - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pnpm.io/zh/motivation"},"\u9879\u76ee\u521d\u8877 | pnpm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7043998041786810398"},"One For All\uff1a\u57fa\u4e8e pnpm + lerna + typescript \u7684\u6700\u4f73\u9879\u76ee\u5b9e\u8df5 - \u7406\u8bba\u7bc7 - \u6398\u91d1"))))}k.isMDXComponent=!0}}]);