"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7920],{3560:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(959),l=a(137),n=a(5949),s=a(2641),c=a(277),u=a(3548);const o=["zero","one","two","few","many","other"];function m(e){return o.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:m(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:m(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}var g=a(8903),d=a(4373);const f=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:a}}=(0,l.Z)();return{searchValue:d.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var y=a(1982),E=a(3825),I=a(4977),S=a(9016),R=a(6267),b=a(5086);const w={searchQueryInput:"searchQueryInput_Hpe2",searchResultItem:"searchResultItem_s51N",searchResultItemPath:"searchResultItemPath_mQOB",searchResultItemSummary:"searchResultItemSummary_hs02"};var P=a(6003);function v(e){let{searchResult:{document:t,type:a,page:l,tokens:n,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:l.b).slice(),h=o?t.s:t.t;return u||m.push(l.t),r.createElement("article",{className:w.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,I.C)(h,n):(0,S.o)(h,(0,R.m)(s,"t"),n,100)}})),m.length>0&&r.createElement("p",{className:w.searchResultItemPath},(0,P.e)(m)),o&&r.createElement("p",{className:w.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,S.o)(t.t,(0,R.m)(s,"t"),n,100)}}))}const _=function(){const{siteConfig:{baseUrl:e}}=(0,l.Z)(),{selectMessage:t}=p(),{searchValue:a,updateSearchPath:c}=f(),[o,m]=(0,r.useState)(a),[h,i]=(0,r.useState)(),[g,d]=(0,r.useState)(),I=(0,r.useMemo)((()=>o?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:o}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[o]);(0,r.useEffect)((()=>{c(o),h&&(o?h(o,(e=>{d(e)})):d(void 0))}),[o,h]);const S=(0,r.useCallback)((e=>{m(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==o&&m(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,y.w)(e);i((()=>(0,E.v)(t,a,100)))}()}),[e]),r.createElement(n.Z,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,I)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,I),r.createElement("input",{type:"search",name:"q",className:w.searchQueryInput,"aria-label":"Search",onChange:S,value:o,autoComplete:"off",autoFocus:!0}),!h&&o&&r.createElement("div",null,r.createElement(b.Z,null)),g&&(g.length>0?r.createElement("p",null,t(g.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:g.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,g&&g.map((e=>r.createElement(v,{key:e.document.i,searchResult:e}))))))}}}]);