(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{247:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(365)),c=["components"],o={title:"1.14.1",sidebar_label:"1.14.1"},u={unversionedId:"release-notes/1.14.1",id:"release-notes/1.14.1",isDocsHomePage:!1,title:"1.14.1",description:"General",source:"@site/../docs/release-notes/1.14.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.1",permalink:"/documentation/release-notes/1.14.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1636549944,formattedLastUpdatedAt:"11/10/2021",sidebar_label:"1.14.1",frontMatter:{title:"1.14.1",sidebar_label:"1.14.1"}},s=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Release management: Create a script which automatically compiles release notes based on github milestones ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/213"},"#213"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Infrastructure: Restructure Dockerfile ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/246"},"#246")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: root: force GSI authentication ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/83"},"#83")),Object(i.b)("li",{parentName:"ul"},"Release management: Removing duplicate packages in pip-requires ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/214"},"#214")),Object(i.b)("li",{parentName:"ul"},"Release management: Removed kerberos from requirements to enable buildthedocs ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/237"},"#237")),Object(i.b)("li",{parentName:"ul"},"Testing: Fix pylint tests on travis ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/209"},"#209")),Object(i.b)("li",{parentName:"ul"},"Testing: remove instant client installation from travis dockerfile ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/258"},"#258"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: db: fix outer join read lock for PostgreSQL ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/262"},"#262")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: lifetime: circular dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/77"},"#77")),Object(i.b)("li",{parentName:"ul"},"check_quota probe does not create quota for new SCRATCHDISKS for old accounts ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/199"},"#199")),Object(i.b)("li",{parentName:"ul"},"Release management: Remove import rucio from webui setup.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/227"},"#227"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Add eventType and usrDN parameters to CLI up/download ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/211"},"#211"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Error when adding dataset with lifetime ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/244"},"#244"))))}b.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);