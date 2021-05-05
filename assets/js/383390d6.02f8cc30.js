(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(343)),c={title:"1.25.1",sidebar_label:"1.25.1"},o={unversionedId:"release-notes/1.25.1",id:"release-notes/1.25.1",isDocsHomePage:!1,title:"1.25.1",description:"General",source:"@site/../docs/release-notes/1.25.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.1",permalink:"/documentation/release-notes/1.25.1",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620206511,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.25.1",frontMatter:{title:"1.25.1",sidebar_label:"1.25.1"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Add an option to export_data not to export distance ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4411"},"#4411")),Object(i.b)("li",{parentName:"ul"},"Consistency checks: The Dark Reaper should run continuously instead of exiting early when there\u2019s nothing to do ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4377"},"#4377")),Object(i.b)("li",{parentName:"ul"},"Documentation: Fix broken link in Readme ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4407"},"#4407")),Object(i.b)("li",{parentName:"ul"},"Rules: update_requests_priority() does not actually update the request priority in Rucio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4320"},"#4320")),Object(i.b)("li",{parentName:"ul"},"Testing: Parallelise unit tests ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4134"},"#4134")),Object(i.b)("li",{parentName:"ul"},"Testing: Unregistered test markers ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4432"},"#4432"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: list-dids-extended with new metadata plugin currently fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4360"},"#4360")),Object(i.b)("li",{parentName:"ul"},"Testing: TestBinRucio.test_create_rule on master fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4438"},"#4438")),Object(i.b)("li",{parentName:"ul"},"Testing: Fix github workflow for py3 default Dockerfile ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4464"},"#4464"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Base client should retry when receiving a 502 error ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4444"},"#4444"))))}l.isMDXComponent=!0},343:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);