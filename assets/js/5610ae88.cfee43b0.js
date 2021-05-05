(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(344)),c={title:"1.16.1",sidebar_label:"1.16.1"},o={unversionedId:"release-notes/1.16.1",id:"release-notes/1.16.1",isDocsHomePage:!1,title:"1.16.1",description:"General",source:"@site/../docs/release-notes/1.16.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.1",permalink:"/documentation/release-notes/1.16.1",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620224420,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.16.1",frontMatter:{title:"1.16.1",sidebar_label:"1.16.1"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Authz: Signed URL support ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1054"},"#1054")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: core: exception handler truncates some error messages ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1116"},"#1116")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: schema: add root and webdav functional test for atlas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1117"},"#1117")),Object(i.b)("li",{parentName:"ul"},"Messaging: Create a new RULE_OK notification for all rules ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1115"},"#1115"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: core.account_limit.get_rse_account_usage should liste accounts who have usage, but no quota ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1045"},"#1045")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: regex for dids in cms schema not matching '-'  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1128"},"#1128")),Object(i.b)("li",{parentName:"ul"},"Transfers: Transfers : Bug with verify checksum ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1118"},"#1118"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: list-rules CLI should give a warning if it does not find a rule but looks on content of a container/DS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1077"},"#1077")),Object(i.b)("li",{parentName:"ul"},"Testing: Extend the client validation with test_bin_rucio.py on Travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1036"},"#1036"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Fix in rucio/bin, empty md5 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1104"},"#1104"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: lifetime field for rule creation should be pre-filled with 180 days ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1127"},"#1127"))))}l.isMDXComponent=!0},344:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);