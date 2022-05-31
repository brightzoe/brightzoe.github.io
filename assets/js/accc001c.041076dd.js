"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6590],{4137:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,v=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(v,s(s({ref:r},c),{},{components:n})):t.createElement(v,s({ref:r},c))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3014:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var t=n(7462),l=n(3366),o=(n(7294),n(4137)),s=["components"],a={},i="Promise",p={unversionedId:"javascript/es6/promise",id:"javascript/es6/promise",title:"Promise",description:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",source:"@site/docs/javascript/es6/promise.md",sourceDirName:"javascript/es6",slug:"/javascript/es6/promise",permalink:"/docs/javascript/es6/promise",editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/javascript/es6/promise.md",tags:[],version:"current",lastUpdatedAt:1653578609,formattedLastUpdatedAt:"5/26/2022",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u4e00\u4e9b\u8bed\u6cd5",permalink:"/docs/javascript/es6/"},next:{title:"Set \u548c Map",permalink:"/docs/javascript/es6/set-and-map"}},c={},m=[{value:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"Promise.resolve",id:"promiseresolve",level:3},{value:"Promise.reject",id:"promisereject",level:3},{value:"Promise.all",id:"promiseall",level:3},{value:"Promise.race",id:"promiserace",level:3},{value:"Promise.finally",id:"promisefinally",level:3},{value:"Promise.allSettled",id:"promiseallsettled",level:3},{value:"\u8bf7\u6c42\u5e76\u53d1",id:"\u8bf7\u6c42\u5e76\u53d1",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981",id:"\u4e3a\u4ec0\u4e48\u9700\u8981",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"Reference",id:"reference",level:2}],u={toc:m};function d(e){var r=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise"},"Promise"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f"},"\u4e3a\u4ec0\u4e48\u4ea7\u751f"),(0,o.kt)("p",null,"\u5f02\u6b65\u64cd\u4f5c\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5b9e\u73b0\uff0c\u4e0b\u9762\u7684\u64cd\u4f5c\u4f9d\u8d56\u4e0a\u4e00\u4e2a\u56de\u8c03\u7684\u7ed3\u679c\u3002\u5219\u4e0b\u9762\u7684\u64cd\u4f5c\u90fd\u8981\u5199\u5728\u4e0a\u9762\u7684\u56de\u8c03\u91cc\u9762\uff0c\u56de\u8c03\u91cc\u9762\u5d4c\u5957\u56de\u8c03\uff0c\u4ee5\u81f4\u4ea7\u751f\u56de\u8c03\u5730\u72f1\u3002"),(0,o.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Promise \u5bf9\u8c61\u4ee3\u8868\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5305\u542b\u4e09\u79cd\u72b6\u6001\uff1apending fulfilled rejected\u3002\u53ea\u6709\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u624d\u53ef\u4ee5\u51b3\u5b9a\u5f53\u524d promise \u7684\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u72b6\u6001\u5df2\u7ecf\u6539\u53d8\u5c31\u4e0d\u4f1a\u53d8\u3002\u7531 pending->fulfilled \u6216\u8005 pending->rejected\u3002")),(0,o.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const p = new Promise((resolve, reject) => {});\n")),(0,o.kt)("p",null,"Promise \u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4e2d\u7684\u4e24\u4e2a\u53c2\u6570\u4e3a\u51fd\u6570\uff0c\u5206\u522b\u4e3a resolve\uff0creject\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u8c03\u7528 resolve/reject \u51fd\u6570 \u6765\u6539\u53d8 Promise \u7684\u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const p = new Promise((resolve, reject) => {\n  // reject();\n  resolve(); //\u6210\u529f\u65f6\u8c03\u7528\uff0c\u72b6\u6001\u6539\u4e3a fulfilled\n});\n\nconst p = new Promise((resolve, reject) => {\n  resolve("\u6210\u529f\u7684\u7ed3\u679c"); //\u6539\u53d8\u5f53\u524d promise \u5bf9\u8c61\u7684\u7ed3\u679c\n  //reject("\u5931\u8d25\u7684\u7ed3\u679c");\n});\n')),(0,o.kt)("p",null,"then \u65b9\u6cd5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728 Promise.prototype \u4e0a \u3002then \u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u65b0\u7684 promise \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"p.then(\n  (value) => {\n    console.log(value); // p \u7684\u72b6\u6001\u4e3a fulfilled \u65f6\u6267\u884c\u3002value \u662f\u4e0a\u9762resolve \u7684\u53c2\u6570\n  },\n  (reason) => {\n    console.log(reason); // p \u7684\u72b6\u6001\u4e3a rejected \u65f6\u6267\u884c\n  }\n);\n")),(0,o.kt)("p",null,"\u524d\u9762 promise \u7684\u72b6\u6001\u4e0d\u6539\u53d8\uff0c\u540e\u9762\u7684 then \u65b9\u6cd5\u5c31\u4e0d\u4f1a\u6267\u884c\u3002\n\u5728 then \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 return \u5c06\u8fd4\u56de\u7684 promise \u5b9e\u4f8b\u6539\u4e3a fulfilled \u72b6\u6001\u3002\n\u5982\u679c\u5728 then \u65b9\u6cd5\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f1a\u5c06\u8fd4\u56de\u7684 promise \u5b9e\u4f8b\u6539\u4e3a rejected \u72b6\u6001\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'new Promise((resolve, reject) => {\n  resolve("\u7ed9then \u7684\u53c2\u6570");\n})\n  .then(\n    (value) => {\n      console.log(value);\n      return "123"; //\u6539\u53d8\u8fd9\u4e2a promise \u7684\u72b6\u6001\u4e3afulfilled\uff0c\u7ed9\u4e0b\u4e00\u4e2apromise \u7684\u53c2\u6570\n      // throw error \u5982\u679c\u8fd9\u91cc\u7684\u4ee3\u7801\u51fa\u9519\uff0c\u5f53\u524d promise \u7684\u72b6\u6001\u5c31\u53d8\u4e3a rejected\n    },\n    (error) => {\n      console.log(error);\n    }\n  )\n  .then(\n    (value) => {\n      console.log(value);\n    },\n    (error) => {\n      console.log(error);\n    }\n  );\n')),(0,o.kt)("p",null,"catch \u65b9\u6cd5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728 Promise.prototype \u4e0a\u3002catch \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0e then \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e00\u81f4\u3002"),(0,o.kt)("p",null,"\u5f53 promise \u7684\u72b6\u6001\u4e3a rejected \u6216\u4ee3\u7801\u51fa\u9519\u65f6\uff0c\u4f1a\u6267\u884c catch \u91cc\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'new Promise((res, rej) => {\n  // rej("rej");\n  throw error;\n}).catch((error) => {\n  //\u4e0a\u9762promise rejected \u6216\u51fa\u9519\u65f6\uff0c\u4f1a\u6267\u884c\u8fd9\u91cc\n  console.log(error);\n});\n')),(0,o.kt)("p",null,"\u7a7f\u900f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise((resolve, reject) => {\n  resolve();\n})\n  .then((value) => {\n    //\u6210\u529f\u65f6\u88ab\u6267\u884c\n    console.log(value);\n  })\n  .catch((error) => {\n    //\u5931\u8d25\u65f6\u88ab\u6267\u884c\n    console.log(error);\n  });\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function request(method, url, data) {\n  return new Promise((res, rej) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.send(data);\n    xhr.onreadystateChange = function () {\n      if (xhr.readyState !== 4) {\n        return;\n      }\n      if (xhr.status === 200) {\n        res(xhr.responseText);\n      } else {\n        rej(xhr.statusText);\n      }\n    };\n  });\n}\n\nrequest("GET", "../data.json")\n  .then((val) => {\n    return request("GET", `../data.json`, val);\n  })\n  .then((val) => {\n    return request("GET", `../data.json`, val);\n  })\n  .then((val) => {\n    console.log(val);\n  });\n')),(0,o.kt)("p",null,"\u5c06\u73b0\u6709\u5bf9\u8c61\u8f6c\u4e3a promise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const a = Promise.resolve("foo");\n// \u7b49\u540c\u4e8e\nconst a = new Promise((resolve) => resolve("foo"));\n\nconst p = Promise.reject("\u51fa\u9519\u4e86");\n// \u7b49\u540c\u4e8e\nconst p = new Promise((resolve, reject) => reject("\u51fa\u9519\u4e86"));\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"promiseresolve"},"Promise.resolve"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.resolve(value);\n\nPromise.resolve(Promise.reject(1)).catch((err) => console.log(err));\n")),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a promise \uff0c\u5982\u679c value \u4e3a thenable \uff0c\u5219\u8ddf\u8e2a\u8fd9\u4e2a thenable \u7684\u72b6\u6001\uff0c\u91c7\u7528\u5b83\u7684\u6700\u7ec8\u72b6\u6001\uff0c\u5426\u5219\u8fd4\u56de\u4e00\u4e2a\u4ee5 value \u503c\u4e3a\u7ed3\u679c\u7684 promise\u3002"),(0,o.kt)("h3",{id:"promisereject"},"Promise.reject"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.reject(error);\n")),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a reject \u72b6\u6001\u7684 promise\uff0c\u503c\u4e3a error"),(0,o.kt)("h3",{id:"promiseall"},"Promise.all"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.all(promises: Iterable<Promise>): Promise<Array>\n")),(0,o.kt)("p",null,"\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"p"},"Iterable<promise>")," \u7c7b\u578b\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 promise \u5b9e\u4f8b\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"iterable: array, map, set \u7b49\u3002")),(0,o.kt)("p",null,"\u5f53\u6240\u6709 promise \u90fd\u6210\u529f\u65f6 resolve\uff0cvalue \u4e3a\u6240\u6709 promise \u7684 value \u6570\u7ec4\u3002"),(0,o.kt)("p",null,"\u6709\u4e00\u4e2a\u5931\u8d25\u65f6\u5219 reject\uff0cerror \u4e3a\u7b2c\u4e00\u4e2a reject \u7684 promise \u7684 error\u3002"),(0,o.kt)("p",null,"\u53c2\u6570\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u7acb\u523b resolve\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const promises = [Promise.resolve("a"), Promise.resolve("b"), Promise.reject("c")];\nPromise.all(promises)\n  .then((val) => console.log(val))\n  .catch((err) => console.log(err));\n')),(0,o.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u7ed3\u5408 map\nfunction timesTwoAsync(x) {\n  return new Promise((resolve) => resolve(x * 2));\n}\nconst arr = [1, 2, 3];\nconst promiseArr = arr.map(timesTwoAsync);\nPromise.all(promiseArr).then((result) => {\n  console.log(res);\n});\n")),(0,o.kt)("p",null,"\u7b80\u6613\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f02\u6b65\u8fd4\u56de\u7684promise \u8981\u786e\u5b9a\u6240\u6709promise\u90fd\u8fd4\u56de\u4e86\u624d\u6700\u7ec8resolve\n// \u53c2\u6570\u53ef\u80fd\u4e0d\u662fpromise\u8981\u7528promise \u5305\u4e00\u5c42\nfunction all(promises) {\n  return new Promise((resolve, reject) => {\n    const res = [];\n    let count = 0;\n    if (promises.length === 0) {\n      resolve(res);\n      return;\n    }\n    promises.forEach((p, i) => {\n      Promise.resolve(p)\n        .then((val) => {\n          res[i] = val;\n          count++;\n          if (count === promises.length) {\n            resolve(res);\n          }\n        })\n        .catch((error) => {\n          reject(error);\n        });\n    });\n  });\n}\n")),(0,o.kt)("h3",{id:"promiserace"},"Promise.race"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.race(promises: Iterable<Promise>): Promise\n")),(0,o.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u662f\u7b2c\u4e00\u4e2a\u7ed3\u675f(resolve/reject)\u7684 promise\u3002"),(0,o.kt)("p",null,"\u867d\u7136\u53ea\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7ed3\u675f\u7684 promise\uff0c\u5176\u4ed6\u8dd1\u7684\u6162\u7684 promise \u4e5f\u90fd\u4f1a\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u53c2\u6570\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u8fd4\u56de\u7684 promise \u7684\u72b6\u6001\u6c38\u8fdc\u4e3a pending\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7528\u4e8e\u8d85\u65f6\u63a7\u5236\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function resolveAfter(ms, value) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(value);\n    }, ms);\n  });\n}\n\nfunction timeout(ms, promise) {\n  return Promise.race([promise, resolveAfter(ms, Promise.reject("(\u2299o\u2299)\u8d85\u65f6\u4e86"))]);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903912592375821#heading-7"},"Promise \u4e2d\u7684\u4e09\u5144\u5f1f .all(), .race(), .allSettled() - \u6398\u91d1")),(0,o.kt)("p",null,"\u7b80\u6613\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function race(promises) {\n  return new Promise((resolve, reject) => {\n    promises.forEach((p) => {\n      Promise.resolve(p).then(\n        (value) => {\n          resolve(value);\n        },\n        (error) => {\n          reject(error);\n        }\n      );\n    });\n  });\n}\n")),(0,o.kt)("h3",{id:"promisefinally"},"Promise.finally"),(0,o.kt)("p",null,"\u5728 promise \u7ed3\u675f\u65f6\uff0c\u65e0\u8bba\u6210\u529f\u6216\u8005\u5931\u8d25\u90fd\u4f1a\u6267\u884c\u7684\u6307\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u3002\u907f\u514d\u4e86\u76f8\u540c\u7684\u8bed\u53e5\u9700\u8981\u5728 then()\u548c catch()\u4e2d\u5404\u5199\u4e00\u6b21\u3002"),(0,o.kt)("h3",{id:"promiseallsettled"},"Promise.allSettled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.allSettled(promises: Iterable<Promise>):  Promise<Array<SettlementObject>>\n")),(0,o.kt)("p",null,"\u6240\u6709 promise \u90fd\u7ed3\u675f\u4e86\uff0c\u8fd4\u56de\u4e00\u4e2a resolve \u72b6\u6001\u7684 promise\uff0cvalue \u4e3a promises \u7684\u72b6\u6001\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Promise.allSettled([Promise.reject(1), Promise.resolve(2)]).then((res) => console.log(res));\n")),(0,o.kt)("h2",{id:"\u8bf7\u6c42\u5e76\u53d1"},"\u8bf7\u6c42\u5e76\u53d1"),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981"},"\u4e3a\u4ec0\u4e48\u9700\u8981"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u53d1\u9001\u8fc7\u591a\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u6709\u8bf7\u6c42\u5e76\u53d1\u63a7\u5236\uff0c\u8d85\u51fa\u5e76\u53d1\u6570\uff0c\u540e\u9762\u8bf7\u6c42\u4f1a\u6392\u961f\u7b49\u5019\uff0c\u8bf7\u6c42\u7b49\u5019\u8fc7\u4e45\uff0c\u53ef\u80fd\u4f1a\u8d85\u65f6\uff0c\u6216\u8005\u5bfc\u81f4\u6d4f\u89c8\u5668\u5361\u6b7b"),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u53ea\u53d1\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5219\u6dfb\u52a0\u6b21\u6570\u8fc7\u591a\uff0c\u6548\u7387\u5f88\u4f4e")),(0,o.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function poolLimit(limit, urls, callback) {\n  //\u5148\u5e76\u53d1limit \u4e2a\u8bf7\u6c42\uff0c\u5f53\u6709\u8bf7\u6c42\u56de\u6765\u65f6\uff0c\u53d1\u9001\u4e00\u4e2a\u65b0\u7684\u8bf7\u6c42\n  let index = limit; //\u901a\u8fc7\u95ed\u5305\u7ef4\u62a4\u6dfb\u52a0\u8bf7\u6c42\u7684index\n  for (let i = 0; i < index; i++) {\n    addRequest(i);\n  }\n\n  // \u6dfb\u52a0\u7b2c\u51e0\u4e2a\u8bf7\u6c42\uff0c\u8bf7\u6c42\u5b8c\u6210\u540e\u53d1\u8d77\u65b0\u7684\u4e00\u4e2a\u8bf7\u6c42\n  function addRequest(i) {\n    console.log("\u6dfb\u52a0\u4efb\u52a1", i);\n    request(urls[i]).then((res) => {\n      callback(res);\n      if (index < urls.length - 1) {\n        index++;\n        addRequest(index); //\u6709\u5b8c\u6210\u4e86\u7684\uff0c\u4ece\u4e4b\u524d\u6dfb\u52a0\u5230\u7684\u7d22\u5f15 index \u5f00\u59cb\u53d6\u65b0\u7684 url \u53d1\u8d77\u8bf7\u6c42\n      }\n    });\n  }\n\n  //\u8bf7\u6c42\u51fd\u6570\n  function request(url) {\n    return new Promise((res, rej) => {\n      setTimeout(() => {\n        res(`\u4efb\u52a1${url} \u5b8c\u6210`);\n      }, Math.random() * 2000);\n    });\n  }\n}\n\nconst urls = ["bytedance.com", "tencent.com", "alibaba.com", "microsoft.com", "apple.com", "hulu.com", "amazon.com"];\npoolLimit(3, urls, (data) => console.log(data));\n')),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903912592375821#heading-7"},"Promise \u4e2d\u7684\u4e09\u5144\u5f1f .all(), .race(), .allSettled() - \u6398\u91d1"))))}d.isMDXComponent=!0}}]);