"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7920],{4380:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(959),a=r(3337),n=r(6461),c=r(4302),l=r(3948),o=r(1091);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(5924),g=r(8903),x=r(8770);const f=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:r}}=(0,a.Z)(),s=x.Z.canUseDOM?new URLSearchParams(t.search):null,n=s?.get("q")||"",c=s?.get("ctx")||"",l=s?.get("version")||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:n,searchContext:c,searchVersion:l,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const s=new URLSearchParams(t.search);s.set("ctx",r),e.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var y=r(7347),S=r(684),j=r(942),C=r(3605),I=r(6626),v=r(3577),R=r(9584),w=r(4662);const b={searchContextInput:"searchContextInput_RB4H",searchQueryInput:"searchQueryInput_SooB",searchResultItem:"searchResultItem_v_0c",searchResultItemPath:"searchResultItemPath_ycb9",searchResultItemSummary:"searchResultItemSummary_MIyQ",searchQueryColumn:"searchQueryColumn_nTM0",searchContextColumn:"searchContextColumn_UERi"};var P=r(1527);function _(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=d(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:u,updateSearchContext:h}=f(),[i,m]=(0,s.useState)(r),[g,x]=(0,s.useState)(),[j,C]=(0,s.useState)(),I=`${e}${l}`,R=(0,s.useMemo)((()=>i?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,s.useEffect)((()=>{u(i),g&&(i?g(i,(e=>{C(e)})):C(void 0))}),[i,g]);const _=(0,s.useCallback)((e=>{m(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==i&&m(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(I,n);x((()=>(0,S.v)(e,t,100)))}()}),[n,I]),(0,P.jsxs)(s.Fragment,{children:[(0,P.jsxs)(c.Z,{children:[(0,P.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,P.jsx)("title",{children:R})]}),(0,P.jsxs)("div",{className:"container margin-vert--lg",children:[(0,P.jsx)("h1",{children:R}),(0,P.jsxs)("div",{className:"row",children:[(0,P.jsx)("div",{className:(0,p.Z)("col",{[b.searchQueryColumn]:Array.isArray(w.Kc),"col--9":Array.isArray(w.Kc),"col--12":!Array.isArray(w.Kc)}),children:(0,P.jsx)("input",{type:"search",name:"q",className:b.searchQueryInput,"aria-label":"Search",onChange:_,value:i,autoComplete:"off",autoFocus:!0})}),Array.isArray(w.Kc)?(0,P.jsx)("div",{className:(0,p.Z)("col","col--3","padding-left--none",b.searchContextColumn),children:(0,P.jsxs)("select",{name:"search-context",className:b.searchContextInput,id:"context-selector",value:n,onChange:e=>h(e.target.value),children:[(0,P.jsx)("option",{value:"",children:w.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),w.Kc.map((e=>(0,P.jsx)("option",{value:e,children:e},e)))]})}):null]}),!g&&i&&(0,P.jsx)("div",{children:(0,P.jsx)(v.Z,{})}),j&&(j.length>0?(0,P.jsx)("p",{children:t(j.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:j.length}))}):(0,P.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,P.jsx)("section",{children:j&&j.map((e=>(0,P.jsx)($,{searchResult:e},e.document.i)))})]})]})}function $(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(w.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,P.jsxs)("article",{className:b.searchResultItem,children:[(0,P.jsx)("h2",{children:(0,P.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,j.C)(h,a):(0,C.o)(h,(0,I.m)(n,"t"),a,100)}})}),u.length>0&&(0,P.jsx)("p",{className:b.searchResultItemPath,children:(0,R.e)(u)}),o&&(0,P.jsx)("p",{className:b.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,C.o)(t.t,(0,I.m)(n,"t"),a,100)}})]})}const F=function(){return(0,P.jsx)(n.Z,{children:(0,P.jsx)(_,{})})}}}]);