"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[5633],{7363:(e,t,r)=>{r.d(t,{kt:()=>c});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,d=m["".concat(i,".").concat(c)]||m[c]||k[c]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(1163),a=(r(959),r(7363));const l={authors:["zoe"],tags:["safety","network"]},o="SSH \u8fde\u63a5\u670d\u52a1\u5668\u7684\u76f8\u5173\u77e5\u8bc6",s={unversionedId:"tools/ssh-passwords-or-keys",id:"tools/ssh-passwords-or-keys",title:"SSH \u8fde\u63a5\u670d\u52a1\u5668\u7684\u76f8\u5173\u77e5\u8bc6",description:"SSH (secure shell) \u662f\u4e00\u79cd\u7f51\u7edc\u534f\u8bae\uff0c\u7528\u4e8e\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u52a0\u5bc6\u8fdc\u7a0b\u767b\u5f55\u3002",source:"@site/docs/tools/ssh-passwords-or-keys.md",sourceDirName:"tools",slug:"/tools/ssh-passwords-or-keys",permalink:"/docs/tools/ssh-passwords-or-keys",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/tools/ssh-passwords-or-keys.md",tags:[{label:"safety",permalink:"/docs/tags/safety"},{label:"network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedAt:1684292881,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{authors:["zoe"],tags:["safety","network"]},sidebar:"Tools",previous:{title:"\u63d0\u5347\u81ea\u5df1\u76f8\u5173\u7684\u8f6f\u6280\u80fd",permalink:"/docs/tools/social-skills-to-improve"},next:{title:"\u78b0\u5230\u7684\u4e00\u4e9b\u7684\u95ee\u9898",permalink:"/docs/tools/strange-questions"}},i={},p=[{value:"SSH \u7684\u7279\u70b9",id:"ssh-\u7684\u7279\u70b9",level:2},{value:"SSH \u7684\u52a0\u5bc6",id:"ssh-\u7684\u52a0\u5bc6",level:2},{value:"\u5ba2\u6237\u7aef\u8ba4\u8bc1\u65b9\u5f0f",id:"\u5ba2\u6237\u7aef\u8ba4\u8bc1\u65b9\u5f0f",level:2},{value:"Public Key",id:"public-key",level:3},{value:"\u8fde\u63a5\u670d\u52a1\u5668\u5b9e\u8df5",id:"\u8fde\u63a5\u670d\u52a1\u5668\u5b9e\u8df5",level:2},{value:"Reference",id:"reference",level:2}],u={toc:p},k="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssh-\u8fde\u63a5\u670d\u52a1\u5668\u7684\u76f8\u5173\u77e5\u8bc6"},"SSH \u8fde\u63a5\u670d\u52a1\u5668\u7684\u76f8\u5173\u77e5\u8bc6"),(0,a.kt)("p",null,"SSH (secure shell) \u662f\u4e00\u79cd\u7f51\u7edc\u534f\u8bae\uff0c\u7528\u4e8e\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u52a0\u5bc6\u8fdc\u7a0b\u767b\u5f55\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u5728\u5e94\u7528\u5c42\u548c\u4f20\u8f93\u5c42\u57fa\u7840\u4e0a\u7684\u5b89\u5168\u534f\u8bae\u3002"),(0,a.kt)("h2",{id:"ssh-\u7684\u7279\u70b9"},"SSH \u7684\u7279\u70b9"),(0,a.kt)("p",null,'\u53ef\u4ee5\u628a\u6240\u6709\u4f20\u8f93\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\uff0c\u8fd9\u6837"\u4e2d\u95f4\u4eba"\u8fd9\u79cd\u653b\u51fb\u65b9\u5f0f\u5c31\u4e0d\u53ef\u80fd\u5b9e\u73b0\u4e86\uff0c\u800c\u4e14\u4e5f\u80fd\u591f\u9632\u6b62 DNS \u6b3a\u9a97 \u548c IP \u6b3a\u9a97\u3002'),(0,a.kt)("p",null,"\u4f20\u8f93\u7684\u6570\u636e\u662f\u7ecf\u8fc7\u538b\u7f29\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u52a0\u5feb\u4f20\u8f93\u7684\u901f\u5ea6\u3002"),(0,a.kt)("h2",{id:"ssh-\u7684\u52a0\u5bc6"},"SSH \u7684\u52a0\u5bc6"),(0,a.kt)("p",null,"SSH \u4ece\u5b89\u5168\u548c\u6027\u80fd\u4e24\u65b9\u9762\u7efc\u5408\u8003\u8651\uff0c\u7ed3\u5408\u4f7f\u7528\u4e86 Public Key/Private key\uff08\u516c\u94a5/\u79c1\u94a5\uff09 \u548c Secret Key\uff08\u5bc6\u94a5\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Public Key/Private key\uff1a\u975e\u5bf9\u79f0\u52a0\u5bc6\uff0c\u5b89\u5168\uff0c\u4f46\u6548\u7387\u4f4e\uff0c\u4e0d\u9002\u5408\u5927\u89c4\u6a21\u8fdb\u884c\u6570\u636e\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u64cd\u4f5c"),(0,a.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\u6587\u4ef6\u540d\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"id_rsa // \u79c1\u94a5\nid_rsa.pub // \u516c\u94a5\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Secret Key\uff1a\u5bf9\u79f0\u673a\u5bc6\uff0c\u9ad8\u6548\uff0c\u4f46\u5b89\u5168\u6027\u76f8\u5bf9\u8f83\u4f4e\uff0cKey \u7684\u5206\u53d1\u5c24\u5176\u4e0d\u65b9\u4fbf"))),(0,a.kt)("p",null,"\u5982\u4f55\u7efc\u5408\u4f7f\u7528\u7684\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u516c\u79c1\u94a5 \uff08\u975e\u5bf9\u79f0\u52a0\u5bc6\uff09\uff0c\u7528\u4e8e\u5efa\u7acb\u5b89\u5168\u901a\u9053\u524d\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4f20\u8f93 Secret Key \u548c\u8fdb\u884c\u8eab\u4efd\u8ba4\u8bc1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 Secret Key \uff08\u5bf9\u79f0\u52a0\u5bc6\uff09\uff0c\u7528\u4e8e\u4f5c\u4e3a SSH \u4f1a\u8bdd\u7684\u5b89\u5168\u4fdd\u8bc1\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u548c\u89e3\u5bc6\u3002"))),(0,a.kt)("h2",{id:"\u5ba2\u6237\u7aef\u8ba4\u8bc1\u65b9\u5f0f"},"\u5ba2\u6237\u7aef\u8ba4\u8bc1\u65b9\u5f0f"),(0,a.kt)("p",null,"\u7ecf\u5e38\u4f7f\u7528 Password \u4e0e Public Key \u7684\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"Password \u7684\u65b9\u5f0f\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,a.kt)("h3",{id:"public-key"},"Public Key"),(0,a.kt)("p",null,"\u57fa\u4e8e\u975e\u5bf9\u79f0\u52a0\u5bc6\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u5982\u4f55\u8ba4\u8bc1\u4f60\u8fd9\u53f0\u5ba2\u6237\u7aef\u53ef\u4ee5\u8fde\u63a5\u6211\u5462\uff1f"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u4e0a\u5148\u9700\u8981\u5b58\u50a8\u4e00\u4e2a\u7531\u5ba2\u6237\u7aef\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\uff08\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\u4e0b\uff09\u7684\u516c\u94a5 \u5230\u81ea\u5df1\u7684\u5bc6\u94a5\u5e93\uff08Authorized Key\uff09\u3002"),(0,a.kt)("p",null,"\u670d\u52a1\u671f\u7aef\u4f1a\u5bf9\u4e00\u6bb5\u6570\u636e\u901a\u8fc7\u516c\u94a5\u8fdb\u884c\u52a0\u5bc6\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u53ef\u4ee5\u8bc1\u660e\u5176\u53ef\u4ee5\u4f7f\u7528\u79c1\u94a5\u5bf9\u8fd9\u6bb5\u6570\u636e\u89e3\u5bc6\uff0c\u5219\u53ef\u4ee5\u8bf4\u660e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 Public Key \u8fdb\u884c\u5ba2\u6237\u7aef\u8ba4\u8bc1\u7684\u8be6\u7ec6\u8fc7\u7a0b\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u53d1\u8d77\u4e00\u4e2a Public Key \u7684\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u5e76\u53d1\u9001 RSA Key \u7684\u6a21\u6570\u4f5c\u4e3a\u6807\u8bc6\u7b26\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u7aef\u68c0\u67e5\u662f\u5426\u5b58\u5728\u8bf7\u6c42\u8d26\u53f7\u7684\u516c\u94a5\uff0c\u4ee5\u53ca\u5176\u62e5\u6709\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4e00\u822c\u4f4d\u7f6e\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"/.ssh/authorized_keys"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u4f7f\u7528\u5bf9\u5e94\u7684\u516c\u94a5\u5bf9\u4e00\u4e2a\u968f\u673a\u7684 256 \u4f4d\u7684\u5b57\u7b26\u4e32\u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u79c1\u94a5\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u89e3\u5bc6\uff0c\u5e76\u5c06\u5176\u7ed3\u5408 Session ID \u751f\u6210\u4e00\u4e2a MD5 \u503c\u53d1\u9001\u7ed9\u670d\u52a1\u7aef\u3002 \u7ed3\u5408 Session ID \u7684\u76ee\u7684\u662f\u4e3a\u4e86\u907f\u514d\u653b\u51fb\u8005\u91c7\u7528 \u91cd\u653e\u653b\u51fb\uff08replay attack\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u91c7\u7528\u540c\u6837\u7684\u65b9\u5f0f\u751f\u6210 MD5 \u503c \u4e0e\u5ba2\u6237\u7aef\u8fd4\u56de\u7684 MD5 \u503c \u8fdb\u884c\u6bd4\u8f83\uff0c\u5b8c\u6210\u5bf9\u5ba2\u6237\u7aef\u7684\u8ba4\u8bc1\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u9488\u5bf9\u8fde\u63a5\u8fc7\u7684\u670d\u52a1\u5668\uff0c\u5ba2\u6237\u7aef\u4f1a\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"known_hosts"),"\u6587\u4ef6\u6765\u8bb0\u5f55\u8fde\u63a5\u8fc7\u7684\u670d\u52a1\u5668\u4fe1\u606f\u3002\u6bcf\u6b21\u8fde\u63a5\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u90fd\u4f1a\u589e\u52a0\u4e00\u4efd\u6570\u636e\u5728\u6587\u4ef6\u91cc\uff0c\u5305\u62ec\u8fdc\u7a0b\u673a\u5668 ip \u4ee5\u53ca\u516c\u94a5\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u5ba2\u6237\u7aef\u518d\u6b21\u8fde\u63a5\u4e00\u4e2a\u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u4f1a\u53bb\u67e5\u627e",(0,a.kt)("inlineCode",{parentName:"p"},"known_hosts"),"\u6587\u4ef6\uff0c\u5982\u679c\u8fde\u63a5\u8fc7\u5219\u76f4\u63a5\u8fde\u63a5\uff0c\u5982\u679c\u6ca1\u6709\u8fde\u63a5\u8fc7\u5219\u4f1a\u63d0\u793a\u4e4b\u524d\u6ca1\u8fde\u63a5\u8fc7\uff0c\u662f\u5426\u8981\u7ee7\u7eed\u8fde\u63a5\uff1f\u5982\u679c\u9009\u62e9\u8fde\u63a5\uff0c\u5219\u4f1a\u628a\u6b64\u6b21\u8fde\u63a5\u7684\u670d\u52a1\u5668\u4fe1\u606f\u8bb0\u5f55\u5728\u6b64\u6587\u4ef6\u4e2d\uff0c\u4e0b\u6b21\u5c31\u4e0d\u4f1a\u63d0\u793a\u5566\u3002")),(0,a.kt)("h2",{id:"\u8fde\u63a5\u670d\u52a1\u5668\u5b9e\u8df5"},"\u8fde\u63a5\u670d\u52a1\u5668\u5b9e\u8df5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5ba2\u6237\u7aef\u751f\u6210\u5bc6\u94a5\u5bf9\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -f my.pem -C "username@email.com"\n\nssh-keygen -t rsa -C "username@email.com" #\u4e0e\u4e0a\u9762\u683c\u5f0f\u4e0d\u540c\uff0c\u9009\u4e00\u5373\u53ef\n\n')),(0,a.kt)("p",{parentName:"li"},"\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh"),"\u76ee\u5f55\u4e0b\u3002\u4f7f\u7528 windows \u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u7528\u6587\u4ef6\u7ba1\u7406\u5668\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\username\\.ssh"),"\u76ee\u5f55\u4e0b\u627e\u5230\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u751f\u6210\u7684\u516c\u94a5\u6587\u4ef6\u6dfb\u52a0\u5230\u670d\u52a1\u5668\u7684\u5bc6\u94a5\u5e93\u4e2d\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_rsa.pub # \u67e5\u770b\u6587\u4ef6\u5185\u5bb9\nvim ~/.ssh/authorized_keys # \u590d\u5236\u5230\u670d\u52a1\u5668\u7684\u8fd9\u4e2a\u4f4d\u7f6e\n")))),(0,a.kt)("p",null,"\u590d\u5236\u516c\u94a5\u5185\u5bb9\u7136\u540e\u8ffd\u52a0\u5230\u8fd9\u4e2a\u6587\u4ef6\u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u6587\u4ef6\uff0c\u9700\u8981\u5148\u521b\u5efa\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u79c1\u94a5\u8fde\u63a5\u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i my.pem root@192.168.1.1\n")),(0,a.kt)("p",{parentName:"li"},"\u6216\u8005\u4e5f\u53ef\u4ee5\u4f7f\u7528 Xshell \u7b49\u5de5\u5177\uff0c\u9009\u62e9 private key \u7684\u65b9\u5f0f\u94fe\u63a5\u3002"))),(0,a.kt)("p",null,"//todo:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bc6\u7801\u4e0e\u5bc6\u94a5\u7684\u5173\u7cfb\uff1f"),(0,a.kt)("li",{parentName:"ol"},"\u5bc6\u94a5 pub,pem \u7b49\u5173\u7cfb\u3002\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bc6\u94a5\u4ecd\u7136\u9700\u8981\u5bc6\u7801\u8be5\u5982\u4f55\u53d6\u6d88\u5bc6\u7801\uff1f"),(0,a.kt)("li",{parentName:"ol"},"linux \u6587\u4ef6\u5c42\u7ea7\uff0c~ \u4e0e/ \u7684\u533a\u522b\uff1f")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903501571604488"},"SSH \u8be6\u89e3 - \u4e0d\u6311\u98df\u7684\u7a0b\u5e8f\u5458 - SegmentFault - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_26400953/article/details/105145103"},"\u4e00\u6587\u8bfb\u61c2 authorized",(0,a.kt)("em",{parentName:"a"},"keys \u548c known_hosts"),"\u6e38\u8bed-CSDN \u535a\u5ba2","_","authorized_keys \u6587\u4ef6\u4f5c\u7528"))))}m.isMDXComponent=!0}}]);