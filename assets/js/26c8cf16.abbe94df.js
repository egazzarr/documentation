(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(390)),c=["components"],o={title:"1.20.7",sidebar_label:"1.20.7"},l={unversionedId:"release-notes/1.20.7",id:"release-notes/1.20.7",isDocsHomePage:!1,title:"1.20.7",description:"General",source:"@site/../docs/release-notes/1.20.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.7",permalink:"/documentation/release-notes/1.20.7",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.7.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1652712580,formattedLastUpdatedAt:"5/16/2022",sidebar_label:"1.20.7",frontMatter:{title:"1.20.7",sidebar_label:"1.20.7"}},s=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Prefer root protocol if local site has xCache ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2769"},"#2769"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Testing: New dev docker (finally) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2805"},"#2805")),Object(i.b)("li",{parentName:"ul"},"Testing: reactivate test_bin_rucio for client tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2916"},"#2916"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: PFN checking should accept mixed protocols ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2917"},"#2917")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Permission check for ddmadmin done wrong ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2954"},"#2954")),Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper 2.0 is creating error traces for SourceNotFound ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2969"},"#2969")),Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper 2.0 traceback ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2970"},"#2970")),Object(i.b)("li",{parentName:"ul"},"Transfers: Improperly Raising Exception in FTS3 Transfertool ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2931"},"#2931"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Better error propagation for download and upload client ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2925"},"#2925")),Object(i.b)("li",{parentName:"ul"},"Clients: Do not mangle URLs when using GFAL library ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2947"},"#2947"))))}b.isMDXComponent=!0},390:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);