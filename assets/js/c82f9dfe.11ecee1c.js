"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[2023],{3977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(1527),s=t(4744),a=t(8932),c=t(856);const l={},u="useEffect",o={id:"react/advanced-react/useeffect",title:"useEffect",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 useEffect",source:"@site/docs/react/advanced-react/useeffect.md",sourceDirName:"react/advanced-react",slug:"/react/advanced-react/useeffect",permalink:"/docs/react/advanced-react/useeffect",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/advanced-react/useeffect.md",tags:[],version:"current",lastUpdatedAt:1701222874,formattedLastUpdatedAt:"2023\u5e7411\u670829\u65e5",frontMatter:{},sidebar:"React",previous:{title:"useState",permalink:"/docs/react/advanced-react/useState"},next:{title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",permalink:"/docs/react/controlled-and-uncontrolled-components"}},i={},d=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 useEffect",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-useeffect",level:2},{value:"\u6267\u884c\u65f6\u673a",id:"\u6267\u884c\u65f6\u673a",level:3},{value:"useEffect \u95ed\u5305\u9677\u9631",id:"useeffect-\u95ed\u5305\u9677\u9631",level:2},{value:"useEffect \u4e0e useLayoutEffect",id:"useeffect-\u4e0e-uselayouteffect",level:2},{value:"Reference",id:"reference",level:2}];function f(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"useeffect",children:"useEffect"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-useeffect",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 useEffect"}),"\n",(0,r.jsx)(n.p,{children:"\u5b98\u65b9\u53eb\u6cd5\u662f\u7528\u4e8e\u51fd\u6570\u7684\u526f\u4f5c\u7528\uff0c\u4f46\u4e0d\u597d\u7406\u89e3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"useEffect \u7684\u610f\u4e49\u662f\u6307\u5b9a\u4e00\u4e2a\u6570\u7ec4\u4f9d\u8d56\uff0c\u5728\u4f9d\u8d56\u53d8\u5316\u7684\u65f6\u5019\u89e6\u53d1\u526f\u4f5c\u7528\uff0c\u76f8\u6bd4\u5199\u5728\u51fd\u6570\u9876\u5c42\uff0c\u66f4\u80fd\u591f\u6839\u636e\u9700\u8981\u907f\u514d\u591a\u4f59\u7684 render\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6267\u884c\u65f6\u673a",children:"\u6267\u884c\u65f6\u673a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6bcf\u6b21\u6d4f\u89c8\u5668\u9875\u9762\u7ed8\u5236\u4e4b\u540e\uff0c\u5927\u591a\u6570 effects \u4e0d\u4f1a\u963b\u585e\u5c4f\u5e55\u7684\u66f4\u65b0\uff0c\u540c\u6837 effect \u7684\u6e05\u9664\u4e5f\u4f1a\u88ab\u5ef6\u8fdf\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"useEffect(() => {\n  ChatAPI.subscribeToFriendStatus(props.id, handleStatusChange);\n  return () => {\n    ChatAPI.unsubscribeFromFriendStatus(props.id, handleStatusChange);\n  };\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\uff0c\u5982\u679c props \u4ece",(0,r.jsx)(n.code,{children:"{id: 10}"}),"\u53d8\u5230",(0,r.jsx)(n.code,{children:"{id:20}"}),"\uff0c\u6267\u884c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["React \u6e32\u67d3",(0,r.jsx)(n.code,{children:"{id: 20}"}),"\u7684 UI\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u6d4f\u89c8\u5668\u7ed8\u5236\u3002\u6211\u4eec\u5728\u5c4f\u5e55\u4e0a\u770b\u5230",(0,r.jsx)(n.code,{children:"{id: 20}"}),"\u7684 UI\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["React \u6e05\u9664",(0,r.jsx)(n.code,{children:"{id: 10}"}),"\u7684 effect\u3002//\u5148\u6e05\u9664\u518d\u8fd0\u884c\u65b0\u7684"]}),"\n",(0,r.jsxs)(n.li,{children:["React \u8fd0\u884c",(0,r.jsx)(n.code,{children:"{id: 20}"}),"\u7684 effect\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6765\u81ea ",(0,r.jsx)(n.a,{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/",children:"useEffect \u5b8c\u6574\u6307\u5357 \u2014 Overreacted"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"useeffect-\u95ed\u5305\u9677\u9631",children:"useEffect \u95ed\u5305\u9677\u9631"}),"\n",(0,r.jsx)(n.p,{children:"useEffect \u4e0e setInterval"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Counter() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    // useEffect \u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u83b7\u53d6\u503c\u4e3a 0 \u7684 count\uff0c\u6211\u4eec\u4e0d\u518d\u91cd\u6267\u884c effect\uff0c\u6240\u4ee5 setInterval \u4e00\u76f4\u5f15\u7528\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u7684\u95ed\u5305 count\uff0c\u4ee5\u81f3\u4e8e count + 1 \u4e00\u76f4\u662f 1\n    const id = setInterval(() => {\n      setCount(count + 1);\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n\n  return <h1>{count}</h1>;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"setCount(count=>count+1)"}),"\u6765\u89e3\u51b3\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 useReducer\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u6839\u672c\u539f\u56e0\u662f hooks \u7684\u601d\u7ef4\u6a21\u5f0f\u4e0e setInterval \u7684\u601d\u7ef4\u6a21\u5f0f\u4e0d\u540c\u3002setInterval \u662f\u58f0\u660e\u5f0f\u7684\uff0c\u6ca1\u6709\u53ca\u65f6\u5730\u63cf\u8ff0\u8fc7\u7a0b\uff0c\u4e00\u65e6\u8bbe\u5b9a\u4e86 interval \uff0c\u9664\u4e86\u6e05\u9664\u5c31\u6ca1\u529e\u6cd5\u6539\u53d8\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u6817\u5b50\u662f\u5e0c\u671b\u5728\u7ec4\u4ef6 mounted \u7684\u65f6\u5019\u6267\u884c effect,\u5728\u7ec4\u4ef6 unmounted \u7684\u65f6\u5019\u6e05\u9664 effect\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5199\u4f9d\u8d56\uff0c\u9047\u5230\u7684\u95ee\u9898\u662f\uff1aeffect \u4f1a\u5728\u6bcf\u6b21\u7ec4\u4ef6\u6e32\u67d3\u540e\u90fd\u6267\u884c\uff0c\u90fd\u751f\u6210\u65b0\u7684 interval\u3002\u6267\u884c clearInterval \u548c setInterval \u65f6\uff0c\u5b83\u4eec\u4f1a\u8fdb\u5165\u65f6\u95f4\u961f\u5217\u91cc\uff0c\u5982\u679c\u9891\u7e41\u91cd\u6e32\u67d3\u3001\u91cd\u6267\u884c effect,interval \u53ef\u80fd\u6ca1\u673a\u4f1a\u88ab\u6267\u884c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u51b3\u601d\u8def\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u6b21 setInterval \u91cc\u6267\u884c\u7684 callback \u90fd\u7528\u5e26\u6709\u6700\u65b0 state,\u6700\u65b0 props \u7684 callback\uff0c\u5373\u9875\u9762\u6bcf\u6b21\u6e32\u67d3\u90fd\u66f4\u65b0\u4e00\u4e2a callback\u3002"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.Z,{value:"setInterval",label:"setInterval",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function Counter() {\n  const [count, setCount] = useState(0);\n  const savedCallback = useRef();\n  const callback = () => {\n    setCount(count + 1);\n  };\n  useEffect(() => {\n    savedCallback.current = callback;\n  });\n  useEffect(() => {\n    const id = setInterval(() => {\n      savedCallback.current();\n    }, 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <h1>{count}</h1>;\n}\n"})})}),(0,r.jsx)(c.Z,{value:"useInterval",label:"useInterval",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"const useInterval = (cb, delay) => {\n  const savedCallback = useRef();\n  useEffect(() => {\n    savedCallback.current = cb;\n  });\n  useEffect(() => {\n    function tick() {\n      savedCallback.current();\n    }\n    const id = setInterval(tick, delay);\n    return () => clearInterval(id);\n  }, [delay]);\n};\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  useInterval(() => {\n    setCount(count + 1);\n  }, 1000);\n  return <h1>{count}</h1>;\n}\nrender(<Counter />);\n"})})}),(0,r.jsx)(c.Z,{value:"useIntervalPause",label:"usePauseInterval",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:'const useInterval = (cb, delay) => {\n  const savedCallback = useRef();\n  useEffect(() => {\n    savedCallback.current = cb;\n  });\n  useEffect(() => {\n    function tick() {\n      savedCallback.current();\n    }\n    if (delay !== null) {\n      const id = setInterval(tick, delay);\n      return () => clearInterval(id);\n    }\n  }, [delay]);\n};\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [paused, setPaused] = useState(false);\n  useInterval(\n    () => {\n      setCount(count + 1);\n    },\n    paused ? null : 1000,\n  );\n  const handlePause = (e) => {\n    setPaused(!paused);\n  };\n  return (\n    <>\n      <input type="checkbox" checked={paused} onChange={handlePause} /> paused\n      <h1>{count}</h1>\n    </>\n  );\n}\nrender(<Counter />);\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\uff1a ",(0,r.jsx)(n.a,{href:"https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/",children:"\u4f7f\u7528 React Hooks \u58f0\u660e setInterval \u2014 Overreacted"})]}),"\n",(0,r.jsx)(n.h2,{id:"useeffect-\u4e0e-uselayouteffect",children:"useEffect \u4e0e useLayoutEffect"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u65b9\u5f0f\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u65f6\u673a\u4e0d\u540c\uff1a useEffect \u7684\u56de\u8c03\u5728\u9875\u9762\u6e32\u67d3\u540e\u6267\u884c\uff0cuseLayoutEffect \u5728\u9875\u9762\u6e32\u67d3\u524d\u6267\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5e95\u5c42\u5904\u7406\u4e0d\u540c\uff1a useEffect \u662f\u5f02\u6b65\u975e\u963b\u585e\u8c03\u7528\uff0cuseLayoutEffect \u540c\u6b65\u963b\u585e\u8c03\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u9002\u5408\u4f7f\u7528 useEffect\uff0cuseLayoutEffect \u5f88\u53ef\u80fd\u4f1a\u5835\u585e\u6d4f\u89c8\u5668\u6e32\u67d3\u3002"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"useLayloutEffect"})}),(0,r.jsx)(n.p,{children:"useLayoutEffect \u4f1a\u5728\u6240\u6709 dom \u53d8\u66f4\u4e4b\u540e\u540c\u6b65\u8c03\u7528 effect\uff0c\u9002\u5408\u7528\u6765\u8bfb\u53d6 dom \u5e03\u5c40\u5e76\u540c\u6b65\u89e6\u53d1\u91cd\u6e32\u67d3\u3002\u5728\u6d4f\u89c8\u5668\u6267\u884c\u7ed8\u5236\u4e4b\u524d\uff0cuseLayoutEffect \u5185\u90e8\u7684\u66f4\u65b0\u8ba1\u5212\u5c06\u88ab\u540c\u6b65\u5237\u65b0\u3002 :::"}),(0,r.jsx)(n.p,{children:"\u6267\u884c\u987a\u5e8f\u89c1\u4e0b\u9762\u7684\u6817\u5b50\uff1a"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"function Son() {\n  useEffect(() => {\n    console.log('son useEffect'); //3\n  }, []);\n  useLayoutEffect(() => {\n    console.log('son useLayoutEffect'); //1\n  }, []);\n  return <></>;\n}\nfunction Parent() {\n  useEffect(() => {\n    console.log('parent useEffect'); //4\n  }, []);\n  useLayoutEffect(() => {\n    console.log('parent useLayoutEffect'); //2\n  }, []);\n  return <Son />;\n}\nrender(<Parent />);\n"})}),(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\uff1a",(0,r.jsx)(n.a,{href:"https://juejin.cn/post/7081103851884904484#heading-9",children:"\u7528\u8fc7 useEffect\uff0cuseLayoutEffect \u5417 - \u6398\u91d1"})]}),(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/6844904193044512782#heading-0",children:"\u4ece react hooks\u201c\u95ed\u5305\u9677\u9631\u201d\u5207\u5165\uff0c\u6d45\u8c08 react hooks - \u6398\u91d1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/",children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528 React Hooks \u58f0\u660e setInterval \u2014 Overreacted"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://juejin.cn/post/7081103851884904484#heading-9",children:"\u7528\u8fc7 useEffect\uff0cuseLayoutEffect \u5417 - \u6398\u91d1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/",children:"useEffect \u5b8c\u6574\u6307\u5357 \u2014 Overreacted"})}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},856:(e,n,t)=>{t.d(n,{Z:()=>c});t(959);var r=t(5924);const s={tabItem:"tabItem_YtHa"};var a=t(1527);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,c),hidden:t,children:n})}},8932:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(959),s=t(5924),a=t(3589),c=t(8903),l=t(1894),u=t(5088),o=t(7554),i=t(1602);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=f(e),[c,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[o,d]=p({queryString:t,groupId:s}),[v,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,i.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=o??v;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&u(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(5931);const x={tabList:"tabList_swvM",tabItem:"tabItem_ywSK"};var j=t(1527);function m(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),s=l[t].value;s!==r&&(o(n),c(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function E(e){const n=v(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(m,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,j.jsx)(E,{...e,children:d(e.children)},String(n))}},4744:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(959);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);